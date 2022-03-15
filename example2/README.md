# 在本地使用 import 引入 React, ReactDOM

## 从 unpkg 下载 react, react-dom

    wget https://unpkg.com/react@16.13.1/umd/react.development.js
    wget https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js

## 改写，用 export 导出 React, ReactDOM

### react.development.js

将

``` javascript
'use strict';

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.React = {}));
}(this, (function (exports) {

  // ...
  // React 实现代码
  // ...



  exports.Children = Children;
  // ...
  exports.version = ReactVersion;

})));
```

改为

``` javascript
// ...
// React 实现代码
// ...


let React = {};

React.Children = Children;
// ...
React.version = ReactVersion;

export default React;
```

### react-dom.development.js

将

``` javascript
'use strict';

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.ReactDOM = {}, global.React));
}(this, (function (exports, React) {

  // ...
  // React 实现代码
  // ...


  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
  // ...
  exports.version = ReactVersion;

})));
```

改为

``` javascript
import React from "./react.development.js";

// ...
// React 实现代码
// ...

let ReactDOM = {};

ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
// ...
ReactDOM.version = ReactVersion;

export default ReactDOM;
```

## 使用 import 导入 React, ReactDOM

修改后，在我们自己的程序中就可以使用

``` javascript
import React from "./react.development.js";
import ReactDOM from "./react-dom.development.js";

```

