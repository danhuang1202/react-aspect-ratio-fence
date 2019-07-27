# react-aspect-ratio-fence
[![Build Status](https://travis-ci.org/danhuang1202/react-aspect-ratio-fence.svg?branch=master)](https://travis-ci.org/danhuang1202/react-aspect-ratio-fence)
[![codecov](https://codecov.io/gh/danhuang1202/react-aspect-ratio-fence/branch/master/graph/badge.svg)](https://codecov.io/gh/danhuang1202/react-aspect-ratio-fence)
[![NPM version](https://img.shields.io/npm/v/react-aspect-ratio-fence.svg)](https://www.npmjs.com/package/react-aspect-ratio-fence)

for more information, please see: <a href="https://danhuang1202.github.io/react-aspect-ratio-fence/">Document</a>


## Installation
```
npm i react-aspect-ratio-fence
```

## Components
- AspectRatioFence (`no IE support`)

  Set `ratio` as css [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), and [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) the height of `elementType`'s [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) as placeholder. The defailt style will fit the `children` node into the placeholer.

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | elementType | string | false | div | html tag name for the wrap component |
  | ratio	| number | true |	1	| The aspect ratio of an image describes the proportional relationship between width and height |
  | customClass	| boolean |	false | undefined | Custom class name |
  | children | ReactNode | false | undefined | custom children node |

- AspectRatioFenceLegacy

  Caculate the height of `innerElementType` base on the width of `outerElementType` and `ratio`. The defailt style will fit the `children` node into the placeholer.

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | outerElementType | string | false | div | html tag name for the outer component |
  | innerElementType | string | false | div | html tag name for the inner component  |
  | ratio	| number | true |	1	| The aspect ratio of an image describes the proportional relationship between width and height |
  | customClass	| boolean |	false | undefined | Custom class name |
  | children | ReactNode | false | undefined | custom children node |

- SquareFence

  Set height of `elementType`'s [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) to the value of `elementType`'s width. The defailt style will fit the `children` node into the placeholer.

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | elementType | string | false | div | html tag name for the wrap component |
  | customClass	| boolean |	false | undefined | Custom class name |
  | children | ReactNode | false | undefined | custom children node |

## Way to Ride
- Common jS
```js
// import from package entry point
const uc = require('react-aspect-ratio-fence')
require('react-aspect-ratio-fence/css/style.css')

  <uc.AspectRatioFence {...props} />
  <uc.SquareFence {...props} />
```
```js
// only import specific component
const AspectRatioFence = require('react-aspect-ratio-fence/lib/components/AspectRatioFence')
require('react-aspect-ratio-fence/css/components/AspectRatioFence/style.css')

  <AspectRatioFence {...props} />
```

- ESM
```js
// import from package entry point
import { AspectRatioFence, SquareFence } from 'react-aspect-ratio-fence'
import 'react-aspect-ratio-fence/css/style.css'

  <AspectRatioFence {...props} />
  <SquareFence {...props} />
```
```js
// only import specific component
import AspectRatioFence from 'react-aspect-ratio-fence/es/components/AspectRatioFence'
import 'react-aspect-ratio-fence/css/components/AspectRatioFence/style.css'

  <AspectRatioFence {...props} />
```

## Development by storybook
```
npm install
npm start storybook
```
- configuration files list in `.storybook` directory
- story files list in `.stories` directory


## Test with Jest and Puppeteer
```
npm run test
```
- `__tests__`
  - unit test running by `jest`
  - use `test:update` to update jest `snapshot`