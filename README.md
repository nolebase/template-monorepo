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
7. `pnpm run packages:stub`
8. `pnpm run docs:dev`
9. Change some of the code in the `packages/example-vue-component` and `packages/example-typescript` directories.
10. To integrate more packages:
   1. Create a new package in the `packages` directory. For example, `packages/example-new-package`.
   2. After completing the development of the new package, run `pnpm run packages:stub` to generate the stubbed files for testing and importing.
   3. Install the new package in the `docs` directory. `pnpm install -F @example-org/docs @example-org/example-new-package`.
   4. If it's a pure TypeScript module without the need to integrate to run after any extra bundling (Vite, `vite-node`, etc.), you can now import the new package in the `docs` directory. For example, `import { yourExportedField } from '@example-org/example-new-package'`.
   5. If it's a Vue component, or a module that requires bundling and transforming, you need to add the new package to the `docs/vite.config.ts` file as `alias`, `tsconfig.json` as `paths` in order to import the new package in the `docs` directory. Once you are done, you can import the new package in the `docs` directory. For example, `import { yourExportedField } from '@example-org/example-new-package'`.
11. Build the packages, `pnpm run packages:build`.
12. Build the documentation, `pnpm run docs:build`.
13. Publish the packages, `pnpm run packages:publish`.

## How to develop

The project uses [`unbuild`](https://github.com/unjs/unbuild) and [`vite`](https://github.com/vitejs/vite) to develop and build. With the powerful features offered from [`jiti`](https://github.com/unjs/jiti), we no longer need to use [Rollup](https://rollupjs.org/) for tedious configuration and then watch the local file changes and bundle the modified and developed the modules without [`vite`](https://github.com/vitejs/vite) for hot-reload. We can directly run the following command to output the bundled file and get started on development:

```shell
pnpm run packages:stub
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr packages:stub
```

Next, you need to start the the documentation site (with VitePress) for previewing and development. You can use the following command:

```shell
pnpm run docs:dev
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr docs:dev
```

## How to build

```shell
pnpm run packages:build
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr packages:build
```

To build the documentation and preview site, you can use the following command:

```shell
pnpm run docs:build
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr docs:build
```

### Written with ♥
