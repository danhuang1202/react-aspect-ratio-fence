# react-aspect-ratio-fence
### [![Build Status](https://travis-ci.org/danhuang1202/react-aspect-ratio-fence.svg?branch=master)](https://travis-ci.org/danhuang1202/react-aspect-ratio-fence) [![codecov](https://codecov.io/gh/danhuang1202/react-aspect-ratio-fence/branch/master/graph/badge.svg)](https://codecov.io/gh/danhuang1202/react-aspect-ratio-fence) [![js-standard-style][standard-image]][standard-url] [![code style: prettier][prettier-image]][prettier-url]
[status-image]: https://screwdriver.ouroath.com/pipelines/1011642/badge
[status-url]: https://screwdriver.ouroath.com/pipelines/1011642
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier

for more information, please see: <a href="https://danhuang1202.github.io/react-aspect-ratio-fence/">Document</a>


## Installation
```
npm i react-aspect-ratio-fence
```

## Components
- AspectRatioFence

  aspect ratio placeholder, `no IE support`

- AspectRatioFenceLegacy

  aspect ratio placeholder

- SquareFence

  square placeholder

## Way to Ride
- Common jS
```
// import from package entry point
const uc = require('react-aspect-ratio-fence')
require('react-aspect-ratio-fence/css/style.css')

  <uc.AspectRatioFence {...props} />
  <uc.SquareFence {...props} />

// only import specific component
const AspectRatioFence = require('react-aspect-ratio-fence/lib/components/AspectRatioFence')
require('react-aspect-ratio-fence/css/components/AspectRatioFence/style.css')

  <AspectRatioFence {...props} />
```

- ESM
```
// import from package entry point
import { AspectRatioFence, SquareFence } from 'react-aspect-ratio-fence'
import 'react-aspect-ratio-fence/css/style.css'

  <AspectRatioFence {...props} />
  <SquareFence {...props} />

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