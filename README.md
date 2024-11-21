# CSS normalize
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/css-normalize&cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/css-normalize)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Reset/normalize styles for a nice blank slate.

[See joshcomeau.com/css/custom-css-reset](https://www.joshwcomeau.com/css/custom-css-reset/)

> These days, browsers don't have massive discrepancies when it comes to layout or spacing. By and large, browsers implement the CSS specification faithfully, and things behave as you'd expect.

*Featuring*:

1. `box-sizing: border-box;` -- Sizes [based on `barder-box`, not `content-box`](https://www.joshwcomeau.com/css/custom-css-reset/#one-box-sizing-model-2).
2. `margin: 0` -- [Remove default margin](https://www.joshwcomeau.com/css/custom-css-reset/#two-remove-default-margin-3). Add margins as needed in application CSS.
3. [`line-height: calc(2px + 2ex + 2px);`](https://www.joshwcomeau.com/css/custom-css-reset/#three-add-accessible-line-height-4) -- [Dyslexia friendly](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html) line height.
>
> [!NOTE]  
> You may want to override the `line-height` for headings in your application CSS.
> See [this article](https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/) for more info about `line-height`.
>
4. `-webkit-font-smoothing: antialiased;` -- [Chrome and Safari still use subpixel antialiasing by default](https://www.joshwcomeau.com/css/custom-css-reset/#four-improve-text-rendering-5), which is bad on high DPI screens.
5. [Use block display by default for media tags](https://www.joshwcomeau.com/css/custom-css-reset/#five-improve-media-defaults-6), like `img` and `video`.
6. [Inherit fonts for form controls](https://www.joshwcomeau.com/css/custom-css-reset/#six-inherit-fonts-for-form-controls-7)
> `font` is a rarely-used shorthand that sets a bunch of font-related properties, like `font-size`, `font-weight`, and `font-family`. 
7. Avoid text overflows -- Permission to [use hard wraps when no soft wrap opportunties can be found](https://www.joshwcomeau.com/css/custom-css-reset/#seven-avoid-text-overflows-8)
8. [Improve line wrapping](https://www.joshwcomeau.com/css/custom-css-reset/#eight-improve-line-wrapping-9) -- widows and orphans
9. [Root stacking context](https://www.joshwcomeau.com/css/custom-css-reset/#nine-root-stacking-context-10) -- **OPTIONAL** -- Create a new stacking context without needing to set a `z-index`. See [What The Heck, z-index??](https://www.joshwcomeau.com/css/stacking-contexts/)


<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [install](#install)
- [Use](#use)
  * [bundler](#bundler)
  * [pre-bundled](#pre-bundled)
- [See also](#see-also)

<!-- tocstop -->

</details>

## install

```sh
npm i -S @substrate-system/css-normalize
```

## Use

### bundler
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

## See also

* [Using calc to figure out optimal line-height](https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/)
* [A Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
* [Smooth scroll + accessibility](https://gomakethings.com/how-to-animate-scrolling-to-anchor-links-with-one-line-of-css/#accessibility-concerns)
