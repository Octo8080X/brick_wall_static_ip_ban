import { Context } from "../../deps.ts";

export function createHandler(ips: string[]) {
  const ipSet = new Set(ips);
  return async function brickWallStaticIpBanHandler(
    ctx: Context<Record<string, any>, Record<string, any>>,
    next: () => Promise<unknown>,
  ) {
    if (ipSet.has(ctx.request.ip)) {
      ctx.response.status = 403;
      return;
    }

    await next();
  };
}
