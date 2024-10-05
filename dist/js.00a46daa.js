// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/protectedKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameSymbol = exports.descriptionSymbol = void 0;
const descriptionSymbol = exports.descriptionSymbol = Symbol('description');
const nameSymbol = exports.nameSymbol = Symbol('name');
},{}],"js/Product.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _protectedKeys = require("./protectedKeys");
class Product {
  #cost;
  #acceptingOrders;
  #quantity;
  #discount = 0;
  static #tax = 12;
  constructor(name, cost, acceptingOrders, quantity, description) {
    this[_protectedKeys.nameSymbol] = name;
    this.#cost = Number(cost);
    this.#acceptingOrders = acceptingOrders;
    this.#quantity = Number(quantity);
    this[_protectedKeys.descriptionSymbol] = description;
  }
  #computeTax() {
    return Product.#tax / 100 * this.#cost;
  }
  get getName() {
    return this[_protectedKeys.nameSymbol];
  }
  get getCost() {
    return this.#cost;
  }
  get getDescription() {
    return this[_protectedKeys.descriptionSymbol];
  }
  get getAcceptingOrders() {
    return this.#acceptingOrders;
  }
  get getQuantity() {
    return this.#quantity;
  }
  get stockCost() {
    let stockCost = (this.#computeTax() + this.#cost) * this.#quantity;
    let discAmt = this.#discount / 100 * stockCost;
    return this.discount !== 0 ? stockCost - discAmt : stockCost;
  }
  set setDiscount(x) {
    this.#discount = x;
  }
}
var _default = exports.default = Product;
},{"./protectedKeys":"js/protectedKeys.js"}],"js/Book.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Product = _interopRequireDefault(require("./Product"));
var _protectedKeys = require("./protectedKeys");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class Book extends _Product.default {
  #author;
  #isbn;
  #genre;
  #type = 'Book';
  constructor(name, cost, acceptingOrders, quantity, description, author, isbn, genre) {
    super(name, cost, acceptingOrders, quantity, description);
    this.#author = author;
    this.#isbn = isbn;
    this.#genre = genre;
  }
  get getType() {
    return this.#type;
  }
  get getDescription() {
    return `
        Description: ${this[_protectedKeys.descriptionSymbol]}
        Author: ${this.#author}
        ISBN: ${this.#isbn}
        Genre: ${this.#genre}`;
  }
  get getName() {
    return `${this[_protectedKeys.nameSymbol]} by ${this.#author}`;
  }
}
var _default = exports.default = Book;
},{"./Product":"js/Product.js","./protectedKeys":"js/protectedKeys.js"}],"js/Phone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Product = _interopRequireDefault(require("./Product"));
var _protectedKeys = require("./protectedKeys");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class Phone extends _Product.default {
  #os;
  #ram;
  #storage;
  #color;
  #type = 'Phone';
  constructor(name, cost, acceptingOrders, quantity, description, os, ram, storage, color) {
    super(name, cost, acceptingOrders, quantity, description);
    this.#os = os;
    this.#ram = ram;
    this.#storage = storage;
    this.#color = color;
  }
  get getType() {
    return this.#type;
  }
  get getDescription() {
    return `
        Description: ${this[_protectedKeys.descriptionSymbol]}
        OS: ${this.#os}
        RAM: ${this.#ram} GB
        Storage: ${this.#storage} GB
        Color: ${this.#color}`;
  }
}
var _default = exports.default = Phone;
},{"./Product":"js/Product.js","./protectedKeys":"js/protectedKeys.js"}],"js/RenderProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(obj) {
  const productCard = document.createElement('div');
  productCard.setAttribute('class', 'product');
  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'name');

  // Render icons based on obj.getType
  const typeDiv = document.createElement('div');
  typeDiv.setAttribute('class', 'type');
  const iconMap = {
    Book: `<span class="material-icons">auto_stories</span>`,
    Phone: `<span class="material-icons">smartphone</span>`
  };
  typeDiv.innerHTML = iconMap[obj.getType] ?? '';
  const costDiv = document.createElement('div');
  costDiv.setAttribute('class', 'cost');
  const quantityDiv = document.createElement('div');
  quantityDiv.setAttribute('class', 'quantity');
  const discountInpDiv = document.createElement('div');
  discountInpDiv.setAttribute('class', 'discount');
  const discInput = document.createElement('input');
  discInput.setAttribute('type', 'number');
  discInput.setAttribute('name', 'discount');
  discInput.setAttribute('min', '0');
  discInput.setAttribute('max', '100');
  discInput.setAttribute('value', '0');
  discInput.addEventListener('keyup', e => {
    e.preventDefault();
    obj.setDiscount = e.target.value;
  });
  discountInpDiv.append(discInput);
  const stockCost = document.createElement('div');
  stockCost.setAttribute('class', 'stock-cost');
  const stockBtn = document.createElement('button');
  stockBtn.innerText = 'Stock Cost';
  stockBtn.addEventListener('click', e => {
    e.preventDefault();
    alert(`Total Cost: $${obj.stockCost}`);
  });
  stockCost.append(stockBtn);
  const viewDescDiv = document.createElement('div');
  viewDescDiv.setAttribute('class', 'view-description');
  const viewDescBtn = document.createElement('button');
  viewDescBtn.innerText = 'Description';
  viewDescBtn.addEventListener('click', e => {
    e.preventDefault();
    alert(obj.getDescription);
  });
  viewDescDiv.append(viewDescBtn);
  const buyBtnDiv = document.createElement('div');
  buyBtnDiv.setAttribute('class', 'buy-btn');
  const buyBtn = document.createElement('button');
  buyBtn.innerText = 'Buy';
  buyBtn.addEventListener('click', e => {
    e.preventDefault();
    alert(`Buying ${obj.getName}`);
  });
  if (obj.getAcceptingOrders === 'No') {
    buyBtn.setAttribute('disabled', true);
  }
  buyBtnDiv.append(buyBtn);
  nameDiv.innerText = obj.getName;
  costDiv.innerText = `$${obj.getCost}`;
  quantityDiv.innerText = `${obj.getQuantity} unit(s)`;
  productCard.append(nameDiv, typeDiv, costDiv, quantityDiv, discountInpDiv, stockCost, viewDescDiv, buyBtnDiv);
  return productCard;
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Book = _interopRequireDefault(require("./Book"));
var _Phone = _interopRequireDefault(require("./Phone"));
var _RenderProduct = _interopRequireDefault(require("./RenderProduct"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Write your code here...

const products = document.querySelector('.products');
const nameInp = document.querySelector('input[name=name]');
const costInp = document.querySelector('input[name=cost]');
const acceptingOrdersInp = document.querySelector('select[name=acceptingOrders]');
const quantityInp = document.querySelector('input[name=quantity]');
const descriptionInp = document.querySelector('textarea[name=description]');
const addBtn = document.querySelector('#addBtn');
const bookFormBtn = document.querySelector('#book-form-btn');
const phoneFormBtn = document.querySelector('#phone-form-btn');
const bookFields = document.querySelector('#book-fields');
const phoneFields = document.querySelector('#phone-fields');
const formTitle = document.querySelector('#form-title');
// Book fields
const author = document.querySelector('input[name=author]');
const isbn = document.querySelector('input[name=isbn]');
const genre = document.querySelector('select[name=genre]');
// Phone fields
const os = document.querySelector('select[name=os]');
const ram = document.querySelector('input[name=ram]');
const storage = document.querySelector('input[name=storage]');
const color = document.querySelector('input[name=color]');
let productType = 'book';
bookFormBtn.addEventListener('click', () => {
  bookFields.style.display = 'block';
  phoneFields.style.display = 'none';
  productType = 'book';
  formTitle.innerText = 'Add a Book';
});
phoneFormBtn.addEventListener('click', () => {
  bookFields.style.display = 'none';
  phoneFields.style.display = 'block';
  productType = 'phone';
  formTitle.innerText = 'Add a Phone';
});
const getFormContents = () => {
  const productFieldsValidation = nameInp.value !== '' && costInp.value > 0 && quantityInp.value > 0 && descriptionInp.value !== '';
  const extraFieldsValidation = productType === 'book' ? author.value !== '' && isbn.value !== '' : ram.value !== '' && storage.value !== '' && color.value !== '';
  const extraFieldsVal = productType === 'book' ? [author.value, isbn.value, genre.value] : [os.value, ram.value, storage.value, color.value];
  if (productFieldsValidation && extraFieldsValidation) {
    return [nameInp.value, costInp.value, acceptingOrdersInp.value, quantityInp.value, descriptionInp.value, ...extraFieldsVal];
  } else {
    return false;
  }
};
const clearForm = () => {
  nameInp.value = descriptionInp.value = '';
  acceptingOrdersInp.value = 'Yes';
  costInp.value = quantityInp.value = 0;
  productType === 'book' ? (author.value = '', isbn.value = '') : ram.value = '', storage.value = '', color.value = '';
};
addBtn.addEventListener('click', function () {
  const getProduct = getFormContents();
  if (getProduct) {
    const newProduct = productType === 'book' ? new _Book.default(...getProduct) : new _Phone.default(...getProduct);
    products.append((0, _RenderProduct.default)(newProduct));
  }
  clearForm();
});
},{"./Book":"js/Book.js","./Phone":"js/Phone.js","./RenderProduct":"js/RenderProduct.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52586" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map