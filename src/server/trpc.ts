import { initTRPC } from '@trpc/server';
import type { Context } from './context';

// TODO: uncomment
// import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
// import { type API } from '../../types/api';
// export type RouterInputs = inferRouterInputs<API>;
// export type RouterOutputs = inferRouterOutputs<API>;
// export { type API } from '../../types/api';

export const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;
