# Installation

** Work in progress **

## Install via npm

```bash
npm i -s @dsbn/slatecss
```

## Insert into your styles

Add the following line to your main css file and slate will insert in its place.

```css
@slate base;
```

## Create your config (optional)

If you would like to override any default slate variables simply add a ``slate.config.js`` to your project root and start replacing. You can view the list of overridable variables by looking at the default config.

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