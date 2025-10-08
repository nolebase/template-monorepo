# `@example-org/example-repo`

## TODO...

- [ ] Replace `example-org` with the actual organization scope, namespace.
- [ ] Replace `Example Org` with the actual organization name.
- [ ] Replace `example-org.com` with the actual organization domain.
- [ ] Replace `example-repo` with the actual repository name.
- [ ] Customize the `README.md` file.
- [ ] Customize the `docs/.vitepress/config.ts` file.
- [ ] Implement the actual features.
  - [ ] `packages/example-vue-component`
  - [ ] `packages/example-typescript`

## How to develop based on this template

1. Clone
2. Replace `example-org` with the actual organization scope, namespace.
3. Replace `Example Org` with the actual organization name.
4. Replace `example-org.com` with the actual organization domain.
5. Replace `example-repo` with the actual repository name.
6. `pnpm install`
7. `pnpm run dev:docs`
8. Change some of the code in the `packages/example-vue-component` and `packages/example-typescript` directories.
9.  To integrate more packages:
   1. Create a new package in the `packages` directory. For example, `packages/example-new-package`.
   2. After completing the development of the new package, run `pnpm run packages:stub` to generate the stubbed files for testing and importing.
   3. Install the new package in the `docs` directory. `pnpm install -F @example-org/docs @example-org/example-new-package`.
   4. If it's a pure TypeScript module without the need to integrate to run after any extra bundling (Vite, `vite-node`, etc.), you can now import the new package in the `docs` directory. For example, `import { yourExportedField } from '@example-org/example-new-package'`.
   5. If it's a Vue component, or a module that requires bundling and transforming, you need to add the new package to the `docs/.vitepress/config.ts` file as `alias`, `tsconfig.json` as `paths` in order to import the new package in the `docs` directory under `vite` property. Once you are done, you can import the new package in the `docs` directory. For example, `import { yourExportedField } from '@example-org/example-new-package'`.
10. Build the packages, `pnpm run build:packages`.
11. Build the documentation, `pnpm run build:docs`.
12. Publish the packages, `pnpm publish -r --access public --no-git-checks`.

## How to develop

```shell
git clone git@github.com:example-org/example-repo.git
cd example-repo
pnpm install
pnpm run dev:docs
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr dev:docs
```

To build the documentation and preview site, you can use the following command:

```shell
pnpm run build:docs
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr build:docs
```

### Written with ♥
