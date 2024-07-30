Original Post:
https://stackoverflow.com/questions/78712131/nextjs-not-building-throwing-typeerror-invalid-url

To recreate:
```
npm run build
```

To pass:
Comment out call to `db.sequelize.sync()` in `./api/buscuit-machine/route.ts`, once `sequelize-typescript` isn't called, then build will run succesfully.

Should throw error:
```
$ npm run build
...
Import trace for requested module:
./node_modules/sequelize/lib/dialects/abstract/connection-manager.js
./node_modules/sequelize/lib/dialects/mariadb/connection-manager.js
./node_modules/sequelize/lib/dialects/mariadb/index.js
./node_modules/sequelize/lib/sequelize.js
./node_modules/sequelize/lib/index.js
./node_modules/sequelize/lib/index.mjs
./models/index.ts
./app/api/buscuit-machine/route.ts

 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
   Collecting page data  ...TypeError: Invalid URL
    at new URL (node:internal/url:775:36)
    at 20392 (foo/nextjs-app-router/.next/server/app/api/buscuit-machine/route.js:3:26587)
    at t (foo/nextjs-app-router/.next/server/webpack-runtime.js:1:143)
    at 55636 (foo/nextjs-app-router/.next/server/app/api/buscuit-machine/route.js:3:28440)
    at t (foo/nextjs-app-router/.next/server/webpack-runtime.js:1:143)
    at 38731 (foo/nextjs-app-router/.next/server/app/api/buscuit-machine/route.js:3:25487)
    at t (foo/nextjs-app-router/.next/server/webpack-runtime.js:1:143)
    at o (foo/nextjs-app-router/.next/server/app/api/buscuit-machine/route.js:59:927063)
    at foo/nextjs-app-router/.next/server/app/api/buscuit-machine/route.js:59:927090
    at t.X (foo/nextjs-app-router/.next/server/webpack-runtime.js:1:1285) {
  code: 'ERR_INVALID_URL',
  input: 'undefined'
}

> Build error occurred
Error: Failed to collect page data for /api/buscuit-machine
    at foo/nextjs-app-router/node_modules/next/dist/build/utils.js:1268:15
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'Error'
}
```