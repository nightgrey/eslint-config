import { glob } from 'glob';
import { readFileSync } from 'fs';
import { join } from 'path';
import path from 'node:path';
import type { PackageJson } from 'type-fest';
import { merge } from 'merge-anything';
import rootPath from 'get-root-path';
import fs from 'node:fs/promises'

// TODO: Hastily written code. Needs some clean-up.
// TODO: Add README.md generation?

type PathInfo = {
  suffix: string | null;
  group: string | null;
}

const getPathInfo = (_path: string): PathInfo => {
  // `jest`, `unicorn`, `import`, etc.
  const suffix = path.basename(path.dirname(_path))
  // addons, overrides, etc.
  const group = path.basename(path.dirname(path.dirname(_path)));

  const validate = (value: string) => ((value === `.` || value === 'packages') ? null : value);

  const validateInfo = (value: PathInfo) => {
    if (value.suffix === 'config' && value.group === null) {
      return { suffix: null, group: null };
    }

    if (value.suffix === 'base' && value.group === 'base') {
      return { suffix: 'base', group: null };
    }


    return value;
  }

  const translate = (value: string | null) => {
    switch (value) {
      case 'addons':
        return 'addon';
      case 'overrides':
        return 'override';
      case 'bases':
        return 'base';
      default:
        return value;
    }
  }

  return validateInfo({ suffix: translate(validate(suffix)), group: translate(validate(group)) });
}
const constructName = (_path: string) => {
  const { suffix, group } = getPathInfo(_path);

  const name = ['@nightgrey/eslint-config', group, suffix].filter(Boolean).join('-');
  return name;
}

const update = (previous: PackageJson, _path: string) => {
  const info = getPathInfo(_path);
  const name = constructName(_path)

  if (previous.name !== name) {
    console.warn(`Name mismatch. It was changed. \nActual: ${previous.name}. Constructed: ${name}`);
  }

  const COMMON = {
    name,
    packageManager: 'npm@9.4.0',
    engines: { npm: '>= 9', node: '>= 18' },
    keywords: [
      'eslint',
      'eslintconfig',
      'eslint-config',
      'eslint-config-nightgrey',
      info.group && `eslint-config-nightgrey-${info.group}`,
      info.group === 'addon' ? info.suffix : null,
      'typescript',
    ].filter(Boolean),
    repository: {
      url: 'https://github.com/nightgrey/eslint-config',
      directory: 'packages/config',
      type: 'git',
    },
  };

  return merge(previous, COMMON);
};

export const getWorkspaces = (): string[] => {
  const packageJsonPath = join(rootPath, 'package.json');
  const packageJson = readFileSync(packageJsonPath, 'utf-8');
  const { workspaces } = JSON.parse(packageJson);
  return workspaces || [];
};

export const getPackageJsons = async () => {
  const workspaces = getWorkspaces();
  // Get list of package.jsons and add the root directory.
  const list = [
    ...workspaces.map((workspace) => path.join(workspace, 'package.json')),
    'package.json',
  ];

  const paths = (
    await Promise.all(
      list.map(async (pkg) => {
        return await glob(pkg, { cwd: process.cwd() });
      })
    )
  ).flat();

  return Object.fromEntries(
    paths.map((path) => {
      const packageJsonPath = join(process.cwd(), path);
      const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
      return [path, JSON.parse(packageJsonContent) as PackageJson];
    })
  );
};

export const updatePackageJsons = async () => {
  const packageJsons = await getPackageJsons();


  const entries = Object.entries(packageJsons);

  await Promise.all(entries.map(async ([_path, packageJson]) => {
    const updated = update(packageJson, _path);

    await fs.writeFile(join(rootPath, _path), JSON.stringify(updated, null, 2), 'utf-8');

    console.log(`Updated "${_path}"`);
  }));
};


updatePackageJsons();