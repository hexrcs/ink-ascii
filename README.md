# ink-ascii

> Awesome ASCII art component for [Ink](https://github.com/vadimdemedes/ink)

## Install

```
$ npm install ink-ascii
```

## Usage

```js
import React from "react";
import { render } from "ink";
import Ascii from "ink-ascii";

render(
  <Ascii
    font="Slant Relief"
    theme="Monokai Dimmed"
    horizontalLayout="default"
    verticalLayout="default"
    kerning="default"
    text="Yeah!"
  />
);
```

## API

### `<Ascii/>`

Props except for `text` are passed as options to [`figlet`](https://github.com/patorjk/figlet.js).

## Related

- [ink-big-text](https://github.com/sindresorhus/ink-big-text) - Big text component for Ink, similar to `ink-ascii`
- [ink-gradient](https://github.com/sindresorhus/ink-gradient) - Gradient color component for Ink
- [ink-box](https://github.com/sindresorhus/ink-box) - Box component for Ink
- [ink-link](https://github.com/sindresorhus/ink-link) - Link component for Ink

## License

MIT © [Xiaoru Li](https://xiaoru.li)
