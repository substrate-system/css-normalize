# package name here
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/css-normalize)](https://packagephobia.com/result?p=@nichoth/session-cookie)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

[See joshcomeau.com](https://www.joshwcomeau.com/css/custom-css-reset/)

<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## install

```sh
npm i -S @substrate-system/css-normalize
```

## Use

### Bundler
If you are a bundling your CSS, e.g. with [vite](https://vite.dev/), just import from this module in your javascript:

```js
import '@susbtrate-system/css-normalize'
```

Or import the minified CSS:
```js
import '@substrate-system/css-normalize/min'
```

### pre-bundled
This package includes minified CSS also.

1. Copy the CSS so it is accessible to your web server. The minified file is at `dist/index.min.css`.

```sh
cp node_modules/@substrate-system/css-normalize/dist/index.min.css ./public/normalize.css
```

2. Add a link in your HTML.

```html
<head>
  <link rel="stylesheet" href="/normalize.css">
</head>

<!-- ... -->
```
