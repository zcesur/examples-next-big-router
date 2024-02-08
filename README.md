This is an example to preview how the DX is when making a big router with tRPC v10.

It has a `postinstall`-script that generates 100 procedures (which you can modify in `scripts/codegen.ts`).

```bash
git clone https://github.com/zcesur/examples-next-big-router
cd examples-next-big-router
pnpm i
```

To emit the app router into `api.d.ts`, run `pnpm xtrpc` and uncomment the TODO lines in `src/{server,utils}/trpc.ts`
