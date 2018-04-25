# Terra Paginator

Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-paginator`

## Usage

```jsx
import React from 'react';
import ProgressivePaginator from 'terra-paginator';

<ProgressivePaginator onPageChange={(e, i) => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />
```

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)