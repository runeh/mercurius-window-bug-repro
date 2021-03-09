Mercurius uses types from `Window`. That type is not available in typescript
unless the `lib` setting is set to `DOM` or is omitted.

Steps to reproduce:

- `npm install`
- `npm run build`

Expected:

Compiles

Actual:

Typescript fails with

```
node_modules/mercurius/index.d.ts:545:33 - error TS2304: Cannot find name 'Window'.

545   playgroundHeaders?: ((window: Window) => object) | object;
                                    ~~~~~~
```
