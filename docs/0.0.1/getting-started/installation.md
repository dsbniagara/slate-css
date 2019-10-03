# Overview

** Work in progress **

## Install via npm

```bash
npm install @dsbn/slatecss
```

## Add to css

```css
@slate base;
```

## Create your config (optional)

```js
// slate.config.js
module.exports = {
  '--color-primary':'orange'
}
```

## Processing

Add slate to your postcss.config.js

```js
module.exports = {
  plugins: [
    // ...
    require('@dsbn/slatecss'),
    // ...
  ]
}
```