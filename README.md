# brick_wall_static_ip_ban

brick_wall_ip_ban is an extension module of [Brick Wall](https://brickwall.deno.dev).

Communication is blocked according to the IP described in the source code.

## Setup

```ts
import { BrickWall } from 'https://deno.land/x/brick_wall/mod.ts';
import { createHandler } from "https://deno.land/x/brick_wall_static_ip_ban/mod.ts";

const brickWall = new BrickWall({ port: 8001 });
brickWall.useHandler(createHandler(["127.0.0.1"]));

await brickWall.start();
```

## Reference

[https://deno.land/x/brick_wall_static_ip_ban](https://deno.land/x/brick_wall_static_ip_ban)
