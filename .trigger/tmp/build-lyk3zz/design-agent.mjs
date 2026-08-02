import {
  AI_AGENT_USER_ID,
  AI_STATUS_FEED_ID,
  AI_STATUS_MESSAGE_ID,
  CANVAS_EDGE_TYPE,
  CANVAS_NODE_TYPE,
  DEFAULT_EDGE_COLOR,
  NODE_COLORS,
  NODE_SHAPES,
  SHAPE_DEFAULT_SIZES,
  external_exports,
  generateObject,
  getOpenAIModel
} from "./chunk-E4LDRTF5.mjs";
import "./chunk-AHQR5FST.mjs";
import {
  logger,
  task
} from "./chunk-VM45VNLD.mjs";
import "./chunk-XCQQDT7A.mjs";
import {
  __commonJS,
  __name,
  __toESM,
  init_esm
} from "./chunk-ZC6ABPS5.mjs";

// node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
    "use strict";
    init_esm();
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    __name(jsxProd, "jsxProd");
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsxProd;
    exports.jsxs = jsxProd;
  }
});

// node_modules/react/cjs/react.production.js
var require_react_production = __commonJS({
  "node_modules/react/cjs/react.production.js"(exports) {
    "use strict";
    init_esm();
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    __name(getIteratorFn, "getIteratorFn");
    var ReactNoopUpdateQueue = {
      isMounted: /* @__PURE__ */ __name(function() {
        return false;
      }, "isMounted"),
      enqueueForceUpdate: /* @__PURE__ */ __name(function() {
      }, "enqueueForceUpdate"),
      enqueueReplaceState: /* @__PURE__ */ __name(function() {
      }, "enqueueReplaceState"),
      enqueueSetState: /* @__PURE__ */ __name(function() {
      }, "enqueueSetState")
    };
    var assign = Object.assign;
    var emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    __name(Component, "Component");
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    __name(ComponentDummy, "ComponentDummy");
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    __name(PureComponent, "PureComponent");
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray;
    function noop2() {
    }
    __name(noop2, "noop");
    var ReactSharedInternals = { H: null, A: null, T: null, S: null };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, props) {
      var refProp = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== refProp ? refProp : null,
        props
      };
    }
    __name(ReactElement, "ReactElement");
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(oldElement.type, newKey, oldElement.props);
    }
    __name(cloneAndReplaceKey, "cloneAndReplaceKey");
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    __name(isValidElement, "isValidElement");
    function escape3(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    __name(escape3, "escape");
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index2) {
      return "object" === typeof element && null !== element && null != element.key ? escape3("" + element.key) : index2.toString(36);
    }
    __name(getElementKey, "getElementKey");
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop2, noop2) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error3) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error3);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    __name(resolveThenable, "resolveThenable");
    function mapIntoArray(children2, array2, escapedPrefix, nameSoFar, callback) {
      var type = typeof children2;
      if ("undefined" === type || "boolean" === type) children2 = null;
      var invokeCallback = false;
      if (null === children2) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children2.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children2._init, mapIntoArray(
                  invokeCallback(children2._payload),
                  array2,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children2), invokeCallback = "" === nameSoFar ? "." + getElementKey(children2, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array2, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children2 && children2.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array2.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children2))
        for (var i = 0; i < children2.length; i++)
          nameSoFar = children2[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array2,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children2), "function" === typeof i)
        for (children2 = i.call(children2), i = 0; !(nameSoFar = children2.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array2,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children2.then)
          return mapIntoArray(
            resolveThenable(children2),
            array2,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array2 = String(children2);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array2 ? "object with keys {" + Object.keys(children2).join(", ") + "}" : array2) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    __name(mapIntoArray, "mapIntoArray");
    function mapChildren(children2, func, context) {
      if (null == children2) return children2;
      var result = [], count = 0;
      mapIntoArray(children2, result, "", "", function(child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    __name(mapChildren, "mapChildren");
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error3) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error3;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    __name(lazyInitializer, "lazyInitializer");
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error3) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error3 && null !== error3 && "string" === typeof error3.message ? String(error3.message) : String(error3),
          error: error3
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error3);
        return;
      }
      console.error(error3);
    };
    var Children = {
      map: mapChildren,
      forEach: /* @__PURE__ */ __name(function(children2, forEachFunc, forEachContext) {
        mapChildren(
          children2,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      }, "forEach"),
      count: /* @__PURE__ */ __name(function(children2) {
        var n = 0;
        mapChildren(children2, function() {
          n++;
        });
        return n;
      }, "count"),
      toArray: /* @__PURE__ */ __name(function(children2) {
        return mapChildren(children2, function(child) {
          return child;
        }) || [];
      }, "toArray"),
      only: /* @__PURE__ */ __name(function(children2) {
        if (!isValidElement(children2))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children2;
      }, "only")
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = {
      __proto__: null,
      c: /* @__PURE__ */ __name(function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
      }, "c")
    };
    exports.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    exports.cacheSignal = function() {
      return null;
    };
    exports.cloneElement = function(element, config, children2) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children2;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, props);
    };
    exports.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    exports.createElement = function(type, config, children2) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children2;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, props);
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    exports.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop2, reportGlobalError);
      } catch (error3) {
        reportGlobalError(error3);
      } finally {
        null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
      }
    };
    exports.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    exports.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create3, deps) {
      return ReactSharedInternals.H.useEffect(create3, deps);
    };
    exports.useEffectEvent = function(callback) {
      return ReactSharedInternals.H.useEffectEvent(callback);
    };
    exports.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    exports.useImperativeHandle = function(ref, create3, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref, create3, deps);
    };
    exports.useInsertionEffect = function(create3, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create3, deps);
    };
    exports.useLayoutEffect = function(create3, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create3, deps);
    };
    exports.useMemo = function(create3, deps) {
      return ReactSharedInternals.H.useMemo(create3, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init2) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init2);
    };
    exports.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    exports.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    exports.version = "19.2.4";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: /* @__PURE__ */ __name(function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }, "get")
        });
      }
      __name(defineDeprecationWarning, "defineDeprecationWarning");
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      __name(getIteratorFn, "getIteratorFn");
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      __name(warnNoop, "warnNoop");
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      __name(Component, "Component");
      function ComponentDummy() {
      }
      __name(ComponentDummy, "ComponentDummy");
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      __name(PureComponent, "PureComponent");
      function noop2() {
      }
      __name(noop2, "noop");
      function testStringCoercion(value) {
        return "" + value;
      }
      __name(testStringCoercion, "testStringCoercion");
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      __name(checkKeyStringCoercion, "checkKeyStringCoercion");
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      __name(getComponentNameFromType, "getComponentNameFromType");
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      __name(getTaskName, "getTaskName");
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      __name(getOwner, "getOwner");
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      __name(UnknownOwner, "UnknownOwner");
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      __name(hasValidKey, "hasValidKey");
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        __name(warnAboutAccessingKey, "warnAboutAccessingKey");
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      __name(elementRefGetterWithDeprecationWarning, "elementRefGetterWithDeprecationWarning");
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      __name(ReactElement, "ReactElement");
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      __name(cloneAndReplaceKey, "cloneAndReplaceKey");
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      __name(validateChildKeys, "validateChildKeys");
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      __name(isValidElement, "isValidElement");
      function escape3(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      __name(escape3, "escape");
      function getElementKey(element, index2) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape3("" + element.key)) : index2.toString(36);
      }
      __name(getElementKey, "getElementKey");
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop2, noop2) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error3) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error3);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      __name(resolveThenable, "resolveThenable");
      function mapIntoArray(children2, array2, escapedPrefix, nameSoFar, callback) {
        var type = typeof children2;
        if ("undefined" === type || "boolean" === type) children2 = null;
        var invokeCallback = false;
        if (null === children2) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children2.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children2._init, mapIntoArray(
                    invokeCallback(children2._payload),
                    array2,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children2;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array2, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array2.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children2))
          for (var i = 0; i < children2.length; i++)
            nameSoFar = children2[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array2,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children2), "function" === typeof i)
          for (i === children2.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children2 = i.call(children2), i = 0; !(nameSoFar = children2.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array2,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children2.then)
            return mapIntoArray(
              resolveThenable(children2),
              array2,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array2 = String(children2);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array2 ? "object with keys {" + Object.keys(children2).join(", ") + "}" : array2) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      __name(mapIntoArray, "mapIntoArray");
      function mapChildren(children2, func, context) {
        if (null == children2) return children2;
        var result = [], count = 0;
        mapIntoArray(children2, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      __name(mapChildren, "mapChildren");
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error3) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error3;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error3);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      __name(lazyInitializer, "lazyInitializer");
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      __name(resolveDispatcher, "resolveDispatcher");
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      __name(releaseAsyncTransition, "releaseAsyncTransition");
      function enqueueTask(task2) {
        if (null === enqueueTaskImpl)
          try {
            var requireString2 = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString2]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = /* @__PURE__ */ __name(function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            }, "enqueueTaskImpl");
          }
        return enqueueTaskImpl(task2);
      }
      __name(enqueueTask, "enqueueTask");
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      __name(aggregateErrors, "aggregateErrors");
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      __name(popActScope, "popActScope");
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error3) {
              ReactSharedInternals.thrownErrors.push(error3);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      __name(recursivelyFlushAsyncActWork, "recursivelyFlushAsyncActWork");
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error3) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error3);
          } finally {
            isFlushing = false;
          }
        }
      }
      __name(flushActQueue, "flushActQueue");
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: /* @__PURE__ */ __name(function() {
          return false;
        }, "isMounted"),
        enqueueForceUpdate: /* @__PURE__ */ __name(function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        }, "enqueueForceUpdate"),
        enqueueReplaceState: /* @__PURE__ */ __name(function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        }, "enqueueReplaceState"),
        enqueueSetState: /* @__PURE__ */ __name(function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }, "enqueueSetState")
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: /* @__PURE__ */ __name(function(callStackForError) {
          return callStackForError();
        }, "react_stack_bottom_frame")
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error3) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error3 && null !== error3 && "string" === typeof error3.message ? String(error3.message) : String(error3),
            error: error3
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error3);
          return;
        }
        console.error(error3);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: /* @__PURE__ */ __name(function(size) {
          return resolveDispatcher().useMemoCache(size);
        }, "c")
      });
      var fnName = {
        map: mapChildren,
        forEach: /* @__PURE__ */ __name(function(children2, forEachFunc, forEachContext) {
          mapChildren(
            children2,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        }, "forEach"),
        count: /* @__PURE__ */ __name(function(children2) {
          var n = 0;
          mapChildren(children2, function() {
            n++;
          });
          return n;
        }, "count"),
        toArray: /* @__PURE__ */ __name(function(children2) {
          return mapChildren(children2, function(child) {
            return child;
          }) || [];
        }, "toArray"),
        only: /* @__PURE__ */ __name(function(children2) {
          if (!isValidElement(children2))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children2;
        }, "only")
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error3) {
          ReactSharedInternals.thrownErrors.push(error3);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: /* @__PURE__ */ __name(function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error3) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error3 = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error3)) : reject(error3);
                }
              );
            }, "then")
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: /* @__PURE__ */ __name(function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }, "then")
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children2) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children2;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children2) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children2;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: /* @__PURE__ */ __name(function() {
            return ownName;
          }, "get"),
          set: /* @__PURE__ */ __name(function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }, "set")
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: /* @__PURE__ */ __name(function() {
            return ownName;
          }, "get"),
          set: /* @__PURE__ */ __name(function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }, "set")
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop2, reportGlobalError));
        } catch (error3) {
          reportGlobalError(error3);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create3, deps) {
        null == create3 && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create3, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create3, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create3, deps);
      };
      exports.useInsertionEffect = function(create3, deps) {
        null == create3 && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create3, deps);
      };
      exports.useLayoutEffect = function(create3, deps) {
        null == create3 && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create3, deps);
      };
      exports.useMemo = function(create3, deps) {
        return resolveDispatcher().useMemo(create3, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init2) {
        return resolveDispatcher().useReducer(reducer, initialArg, init2);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_esm();
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production();
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      __name(getComponentNameFromType, "getComponentNameFromType");
      function testStringCoercion(value) {
        return "" + value;
      }
      __name(testStringCoercion, "testStringCoercion");
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      __name(checkKeyStringCoercion, "checkKeyStringCoercion");
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      __name(getTaskName, "getTaskName");
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      __name(getOwner, "getOwner");
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      __name(UnknownOwner, "UnknownOwner");
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      __name(hasValidKey, "hasValidKey");
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        __name(warnAboutAccessingKey, "warnAboutAccessingKey");
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      __name(defineKeyPropWarningGetter, "defineKeyPropWarningGetter");
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      __name(elementRefGetterWithDeprecationWarning, "elementRefGetterWithDeprecationWarning");
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      __name(ReactElement, "ReactElement");
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children2 = config.children;
        if (void 0 !== children2)
          if (isStaticChildren)
            if (isArrayImpl(children2)) {
              for (isStaticChildren = 0; isStaticChildren < children2.length; isStaticChildren++)
                validateChildKeys(children2[isStaticChildren]);
              Object.freeze && Object.freeze(children2);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children2);
        if (hasOwnProperty.call(config, "key")) {
          children2 = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children2 + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children2,
            keys,
            children2
          ), didWarnAboutKeySpread[children2 + isStaticChildren] = true);
        }
        children2 = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children2 = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children2 = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children2 && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children2,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      __name(jsxDEVImpl, "jsxDEVImpl");
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      __name(validateChildKeys, "validateChildKeys");
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      __name(isValidElement, "isValidElement");
      var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React = {
        react_stack_bottom_frame: /* @__PURE__ */ __name(function(callStackForError) {
          return callStackForError();
        }, "react_stack_bottom_frame")
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
        React,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    }();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_esm();
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_jsx_runtime_production();
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var require_use_sync_external_store_shim_production = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(exports) {
    "use strict";
    init_esm();
    var React = require_react();
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    __name(is, "is");
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var useState2 = React.useState;
    var useEffect2 = React.useEffect;
    var useLayoutEffect2 = React.useLayoutEffect;
    var useDebugValue2 = React.useDebugValue;
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      var value = getSnapshot(), _useState = useState2({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
      useLayoutEffect2(
        function() {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        },
        [subscribe, value, getSnapshot]
      );
      useEffect2(
        function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          });
        },
        [subscribe]
      );
      useDebugValue2(value);
      return value;
    }
    __name(useSyncExternalStore$2, "useSyncExternalStore$2");
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error3) {
        return true;
      }
    }
    __name(checkIfSnapshotChanged, "checkIfSnapshotChanged");
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    __name(useSyncExternalStore$1, "useSyncExternalStore$1");
    var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      __name(is, "is");
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState2({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect2(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect2(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      __name(useSyncExternalStore$2, "useSyncExternalStore$2");
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error3) {
          return true;
        }
      }
      __name(checkIfSnapshotChanged, "checkIfSnapshotChanged");
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      __name(useSyncExternalStore$1, "useSyncExternalStore$1");
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState2 = React.useState, useEffect2 = React.useEffect, useLayoutEffect2 = React.useLayoutEffect, useDebugValue2 = React.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    init_esm();
    if (process.env.NODE_ENV === "production") {
      module.exports = require_use_sync_external_store_shim_production();
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
var require_with_selector_production = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js"(exports) {
    "use strict";
    init_esm();
    var React = require_react();
    var shim = require_shim();
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    __name(is, "is");
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var useSyncExternalStore = shim.useSyncExternalStore;
    var useRef2 = React.useRef;
    var useEffect2 = React.useEffect;
    var useMemo2 = React.useMemo;
    var useDebugValue2 = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef2(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo2(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          __name(memoizedSelector, "memoizedSelector");
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect2(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue2(value);
      return value;
    };
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      __name(is, "is");
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef2 = React.useRef, useEffect2 = React.useEffect, useMemo2 = React.useMemo, useDebugValue2 = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef2(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo2(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            __name(memoizedSelector, "memoizedSelector");
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect2(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    init_esm();
    if (process.env.NODE_ENV === "production") {
      module.exports = require_with_selector_production();
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/react-dom/cjs/react-dom.production.js
var require_react_dom_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.js"(exports) {
    "use strict";
    init_esm();
    var React = require_react();
    function formatProdErrorMessage(code) {
      var url2 = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url2 += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url2 += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    __name(formatProdErrorMessage, "formatProdErrorMessage");
    function noop2() {
    }
    __name(noop2, "noop");
    var Internals = {
      d: {
        f: noop2,
        r: /* @__PURE__ */ __name(function() {
          throw Error(formatProdErrorMessage(522));
        }, "r"),
        D: noop2,
        C: noop2,
        L: noop2,
        m: noop2,
        X: noop2,
        S: noop2,
        M: noop2
      },
      p: 0,
      findDOMNode: null
    };
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    function createPortal$1(children2, containerInfo, implementation) {
      var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children: children2,
        containerInfo,
        implementation
      };
    }
    __name(createPortal$1, "createPortal$1");
    var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    __name(getCrossOriginStringAs, "getCrossOriginStringAs");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children2, container) {
      var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
        throw Error(formatProdErrorMessage(299));
      return createPortal$1(children2, container, null, key);
    };
    exports.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
      }
    };
    exports.preconnect = function(href, options2) {
      "string" === typeof href && (options2 ? (options2 = options2.crossOrigin, options2 = "string" === typeof options2 ? "use-credentials" === options2 ? options2 : "" : void 0) : options2 = null, Internals.d.C(href, options2));
    };
    exports.prefetchDNS = function(href) {
      "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function(href, options2) {
      if ("string" === typeof href && options2 && "string" === typeof options2.as) {
        var as = options2.as, crossOrigin = getCrossOriginStringAs(as, options2.crossOrigin), integrity = "string" === typeof options2.integrity ? options2.integrity : void 0, fetchPriority = "string" === typeof options2.fetchPriority ? options2.fetchPriority : void 0;
        "style" === as ? Internals.d.S(
          href,
          "string" === typeof options2.precedence ? options2.precedence : void 0,
          {
            crossOrigin,
            integrity,
            fetchPriority
          }
        ) : "script" === as && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: "string" === typeof options2.nonce ? options2.nonce : void 0
        });
      }
    };
    exports.preinitModule = function(href, options2) {
      if ("string" === typeof href)
        if ("object" === typeof options2 && null !== options2) {
          if (null == options2.as || "script" === options2.as) {
            var crossOrigin = getCrossOriginStringAs(
              options2.as,
              options2.crossOrigin
            );
            Internals.d.M(href, {
              crossOrigin,
              integrity: "string" === typeof options2.integrity ? options2.integrity : void 0,
              nonce: "string" === typeof options2.nonce ? options2.nonce : void 0
            });
          }
        } else null == options2 && Internals.d.M(href);
    };
    exports.preload = function(href, options2) {
      if ("string" === typeof href && "object" === typeof options2 && null !== options2 && "string" === typeof options2.as) {
        var as = options2.as, crossOrigin = getCrossOriginStringAs(as, options2.crossOrigin);
        Internals.d.L(href, as, {
          crossOrigin,
          integrity: "string" === typeof options2.integrity ? options2.integrity : void 0,
          nonce: "string" === typeof options2.nonce ? options2.nonce : void 0,
          type: "string" === typeof options2.type ? options2.type : void 0,
          fetchPriority: "string" === typeof options2.fetchPriority ? options2.fetchPriority : void 0,
          referrerPolicy: "string" === typeof options2.referrerPolicy ? options2.referrerPolicy : void 0,
          imageSrcSet: "string" === typeof options2.imageSrcSet ? options2.imageSrcSet : void 0,
          imageSizes: "string" === typeof options2.imageSizes ? options2.imageSizes : void 0,
          media: "string" === typeof options2.media ? options2.media : void 0
        });
      }
    };
    exports.preloadModule = function(href, options2) {
      if ("string" === typeof href)
        if (options2) {
          var crossOrigin = getCrossOriginStringAs(options2.as, options2.crossOrigin);
          Internals.d.m(href, {
            as: "string" === typeof options2.as && "script" !== options2.as ? options2.as : void 0,
            crossOrigin,
            integrity: "string" === typeof options2.integrity ? options2.integrity : void 0
          });
        } else Internals.d.m(href);
    };
    exports.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
      return ReactSharedInternals.H.useHostTransitionStatus();
    };
    exports.version = "19.2.4";
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function noop2() {
      }
      __name(noop2, "noop");
      function testStringCoercion(value) {
        return "" + value;
      }
      __name(testStringCoercion, "testStringCoercion");
      function createPortal$1(children2, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
        ), testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children: children2,
          containerInfo,
          implementation
        };
      }
      __name(createPortal$1, "createPortal$1");
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      __name(getCrossOriginStringAs, "getCrossOriginStringAs");
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
      }
      __name(getValueDescriptorExpectingObjectForWarning, "getValueDescriptorExpectingObjectForWarning");
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
      }
      __name(getValueDescriptorExpectingEnumForWarning, "getValueDescriptorExpectingEnumForWarning");
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      __name(resolveDispatcher, "resolveDispatcher");
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), Internals = {
        d: {
          f: noop2,
          r: /* @__PURE__ */ __name(function() {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          }, "r"),
          D: noop2,
          C: noop2,
          L: noop2,
          m: noop2,
          X: noop2,
          S: noop2,
          M: noop2
        },
        p: 0,
        findDOMNode: null
      }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
      exports.createPortal = function(children2, container) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children2, container, null, key);
      };
      exports.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
          if (ReactSharedInternals.T = null, Internals.p = 2, fn)
            return fn();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error(
            "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
          );
        }
      };
      exports.preconnect = function(href, options2) {
        "string" === typeof href && href ? null != options2 && "object" !== typeof options2 ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options2)
        ) : null != options2 && "string" !== typeof options2.crossOrigin && console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options2.crossOrigin)
        ) : console.error(
          "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        "string" === typeof href && (options2 ? (options2 = options2.crossOrigin, options2 = "string" === typeof options2 ? "use-credentials" === options2 ? options2 : "" : void 0) : options2 = null, Internals.d.C(href, options2));
      };
      exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options2 = arguments[1];
          "object" === typeof options2 && options2.hasOwnProperty("crossOrigin") ? console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options2)
          ) : console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options2)
          );
        }
        "string" === typeof href && Internals.d.D(href);
      };
      exports.preinit = function(href, options2) {
        "string" === typeof href && href ? null == options2 || "object" !== typeof options2 ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options2)
        ) : "style" !== options2.as && "script" !== options2.as && console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options2.as)
        ) : console.error(
          "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        if ("string" === typeof href && options2 && "string" === typeof options2.as) {
          var as = options2.as, crossOrigin = getCrossOriginStringAs(as, options2.crossOrigin), integrity = "string" === typeof options2.integrity ? options2.integrity : void 0, fetchPriority = "string" === typeof options2.fetchPriority ? options2.fetchPriority : void 0;
          "style" === as ? Internals.d.S(
            href,
            "string" === typeof options2.precedence ? options2.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options2.nonce ? options2.nonce : void 0
          });
        }
      };
      exports.preinitModule = function(href, options2) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options2 && "object" !== typeof options2 ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options2) + "." : options2 && "as" in options2 && "script" !== options2.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options2.as) + ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (encountered = options2 && "string" === typeof options2.as ? options2.as : "script", encountered) {
            case "script":
              break;
            default:
              encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
          }
        if ("string" === typeof href)
          if ("object" === typeof options2 && null !== options2) {
            if (null == options2.as || "script" === options2.as)
              encountered = getCrossOriginStringAs(
                options2.as,
                options2.crossOrigin
              ), Internals.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options2.integrity ? options2.integrity : void 0,
                nonce: "string" === typeof options2.nonce ? options2.nonce : void 0
              });
          } else null == options2 && Internals.d.M(href);
      };
      exports.preload = function(href, options2) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options2 || "object" !== typeof options2 ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options2) + "." : "string" === typeof options2.as && options2.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options2.as) + ".");
        encountered && console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
        if ("string" === typeof href && "object" === typeof options2 && null !== options2 && "string" === typeof options2.as) {
          encountered = options2.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options2.crossOrigin
          );
          Internals.d.L(href, encountered, {
            crossOrigin,
            integrity: "string" === typeof options2.integrity ? options2.integrity : void 0,
            nonce: "string" === typeof options2.nonce ? options2.nonce : void 0,
            type: "string" === typeof options2.type ? options2.type : void 0,
            fetchPriority: "string" === typeof options2.fetchPriority ? options2.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options2.referrerPolicy ? options2.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options2.imageSrcSet ? options2.imageSrcSet : void 0,
            imageSizes: "string" === typeof options2.imageSizes ? options2.imageSizes : void 0,
            media: "string" === typeof options2.media ? options2.media : void 0
          });
        }
      };
      exports.preloadModule = function(href, options2) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options2 && "object" !== typeof options2 ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options2) + "." : options2 && "as" in options2 && "string" !== typeof options2.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options2.as) + ".");
        encountered && console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
        "string" === typeof href && (options2 ? (encountered = getCrossOriginStringAs(
          options2.as,
          options2.crossOrigin
        ), Internals.d.m(href, {
          as: "string" === typeof options2.as && "script" !== options2.as ? options2.as : void 0,
          crossOrigin: encountered,
          integrity: "string" === typeof options2.integrity ? options2.integrity : void 0
        })) : Internals.d.m(href));
      };
      exports.requestFormReset = function(form) {
        Internals.d.r(form);
      };
      exports.unstable_batchedUpdates = function(fn, a) {
        return fn(a);
      };
      exports.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
      };
      exports.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    init_esm();
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (process.env.NODE_ENV !== "production") {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    __name(checkDCE, "checkDCE");
    if (process.env.NODE_ENV === "production") {
      checkDCE();
      module.exports = require_react_dom_production();
    } else {
      module.exports = require_react_dom_development();
    }
  }
});

// node_modules/@stablelib/base64/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/@stablelib/base64/lib/base64.js"(exports) {
    "use strict";
    init_esm();
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var INVALID_BYTE = 256;
    var Coder = (
      /** @class */
      function() {
        function Coder2(_paddingCharacter) {
          if (_paddingCharacter === void 0) {
            _paddingCharacter = "=";
          }
          this._paddingCharacter = _paddingCharacter;
        }
        __name(Coder2, "Coder");
        Coder2.prototype.encodedLength = function(length) {
          if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
          }
          return (length + 2) / 3 * 4 | 0;
        };
        Coder2.prototype.encode = function(data) {
          var out = "";
          var i = 0;
          for (; i < data.length - 2; i += 3) {
            var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            out += this._encodeByte(c >>> 1 * 6 & 63);
            out += this._encodeByte(c >>> 0 * 6 & 63);
          }
          var left = data.length - i;
          if (left > 0) {
            var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte(c >>> 3 * 6 & 63);
            out += this._encodeByte(c >>> 2 * 6 & 63);
            if (left === 2) {
              out += this._encodeByte(c >>> 1 * 6 & 63);
            } else {
              out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
          }
          return out;
        };
        Coder2.prototype.maxDecodedLength = function(length) {
          if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
          }
          return length / 4 * 3 | 0;
        };
        Coder2.prototype.decodedLength = function(s) {
          return this.maxDecodedLength(s.length - this._getPaddingLength(s));
        };
        Coder2.prototype.decode = function(s) {
          if (s.length === 0) {
            return new Uint8Array(0);
          }
          var paddingLength = this._getPaddingLength(s);
          var length = s.length - paddingLength;
          var out = new Uint8Array(this.maxDecodedLength(length));
          var op = 0;
          var i = 0;
          var haveBad = 0;
          var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
          for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v0 << 2 | v1 >>> 4;
            out[op++] = v1 << 4 | v2 >>> 2;
            out[op++] = v2 << 6 | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
          }
          if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = v0 << 2 | v1 >>> 4;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
          }
          if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = v1 << 4 | v2 >>> 2;
            haveBad |= v2 & INVALID_BYTE;
          }
          if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = v2 << 6 | v3;
            haveBad |= v3 & INVALID_BYTE;
          }
          if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
          }
          return out;
        };
        Coder2.prototype._encodeByte = function(b) {
          var result = b;
          result += 65;
          result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
          result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
          result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
          result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
          return String.fromCharCode(result);
        };
        Coder2.prototype._decodeChar = function(c) {
          var result = INVALID_BYTE;
          result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
          result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
          result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
          result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
          result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
          return result;
        };
        Coder2.prototype._getPaddingLength = function(s) {
          var paddingLength = 0;
          if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
              if (s[i] !== this._paddingCharacter) {
                break;
              }
              paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
              throw new Error("Base64Coder: incorrect padding");
            }
          }
          return paddingLength;
        };
        return Coder2;
      }()
    );
    exports.Coder = Coder;
    var stdCoder = new Coder();
    function encode2(data) {
      return stdCoder.encode(data);
    }
    __name(encode2, "encode");
    exports.encode = encode2;
    function decode(s) {
      return stdCoder.decode(s);
    }
    __name(decode, "decode");
    exports.decode = decode;
    var URLSafeCoder = (
      /** @class */
      function(_super) {
        __extends(URLSafeCoder2, _super);
        function URLSafeCoder2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        __name(URLSafeCoder2, "URLSafeCoder");
        URLSafeCoder2.prototype._encodeByte = function(b) {
          var result = b;
          result += 65;
          result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
          result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
          result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
          result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
          return String.fromCharCode(result);
        };
        URLSafeCoder2.prototype._decodeChar = function(c) {
          var result = INVALID_BYTE;
          result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
          result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
          result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
          result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
          result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
          return result;
        };
        return URLSafeCoder2;
      }(Coder)
    );
    exports.URLSafeCoder = URLSafeCoder;
    var urlSafeCoder = new URLSafeCoder();
    function encodeURLSafe(data) {
      return urlSafeCoder.encode(data);
    }
    __name(encodeURLSafe, "encodeURLSafe");
    exports.encodeURLSafe = encodeURLSafe;
    function decodeURLSafe(s) {
      return urlSafeCoder.decode(s);
    }
    __name(decodeURLSafe, "decodeURLSafe");
    exports.decodeURLSafe = decodeURLSafe;
    exports.encodedLength = function(length) {
      return stdCoder.encodedLength(length);
    };
    exports.maxDecodedLength = function(length) {
      return stdCoder.maxDecodedLength(length);
    };
    exports.decodedLength = function(s) {
      return stdCoder.decodedLength(s);
    };
  }
});

// node_modules/fast-sha256/sha256.js
var require_sha256 = __commonJS({
  "node_modules/fast-sha256/sha256.js"(exports, module) {
    init_esm();
    (function(root2, factory) {
      var exports2 = {};
      factory(exports2);
      var sha2562 = exports2["default"];
      for (var k in exports2) {
        sha2562[k] = exports2[k];
      }
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = sha2562;
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return sha2562;
        });
      } else {
        root2.sha256 = sha2562;
      }
    })(exports, function(exports2) {
      "use strict";
      exports2.__esModule = true;
      exports2.digestLength = 32;
      exports2.blockSize = 64;
      var K = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      function hashBlocks(w, v, p, pos, len) {
        var a, b, c, d, e, f, g2, h, u, i, j, t1, t2;
        while (len >= 64) {
          a = v[0];
          b = v[1];
          c = v[2];
          d = v[3];
          e = v[4];
          f = v[5];
          g2 = v[6];
          h = v[7];
          for (i = 0; i < 16; i++) {
            j = pos + i * 4;
            w[i] = (p[j] & 255) << 24 | (p[j + 1] & 255) << 16 | (p[j + 2] & 255) << 8 | p[j + 3] & 255;
          }
          for (i = 16; i < 64; i++) {
            u = w[i - 2];
            t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
            u = w[i - 15];
            t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
          }
          for (i = 0; i < 64; i++) {
            t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g2) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
            t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
            h = g2;
            g2 = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          }
          v[0] += a;
          v[1] += b;
          v[2] += c;
          v[3] += d;
          v[4] += e;
          v[5] += f;
          v[6] += g2;
          v[7] += h;
          pos += 64;
          len -= 64;
        }
        return pos;
      }
      __name(hashBlocks, "hashBlocks");
      var Hash = (
        /** @class */
        function() {
          function Hash2() {
            this.digestLength = exports2.digestLength;
            this.blockSize = exports2.blockSize;
            this.state = new Int32Array(8);
            this.temp = new Int32Array(64);
            this.buffer = new Uint8Array(128);
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            this.reset();
          }
          __name(Hash2, "Hash");
          Hash2.prototype.reset = function() {
            this.state[0] = 1779033703;
            this.state[1] = 3144134277;
            this.state[2] = 1013904242;
            this.state[3] = 2773480762;
            this.state[4] = 1359893119;
            this.state[5] = 2600822924;
            this.state[6] = 528734635;
            this.state[7] = 1541459225;
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
            return this;
          };
          Hash2.prototype.clean = function() {
            for (var i = 0; i < this.buffer.length; i++) {
              this.buffer[i] = 0;
            }
            for (var i = 0; i < this.temp.length; i++) {
              this.temp[i] = 0;
            }
            this.reset();
          };
          Hash2.prototype.update = function(data, dataLength) {
            if (dataLength === void 0) {
              dataLength = data.length;
            }
            if (this.finished) {
              throw new Error("SHA256: can't update because hash was finished.");
            }
            var dataPos = 0;
            this.bytesHashed += dataLength;
            if (this.bufferLength > 0) {
              while (this.bufferLength < 64 && dataLength > 0) {
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
              }
              if (this.bufferLength === 64) {
                hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                this.bufferLength = 0;
              }
            }
            if (dataLength >= 64) {
              dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
              dataLength %= 64;
            }
            while (dataLength > 0) {
              this.buffer[this.bufferLength++] = data[dataPos++];
              dataLength--;
            }
            return this;
          };
          Hash2.prototype.finish = function(out) {
            if (!this.finished) {
              var bytesHashed = this.bytesHashed;
              var left = this.bufferLength;
              var bitLenHi = bytesHashed / 536870912 | 0;
              var bitLenLo = bytesHashed << 3;
              var padLength = bytesHashed % 64 < 56 ? 64 : 128;
              this.buffer[left] = 128;
              for (var i = left + 1; i < padLength - 8; i++) {
                this.buffer[i] = 0;
              }
              this.buffer[padLength - 8] = bitLenHi >>> 24 & 255;
              this.buffer[padLength - 7] = bitLenHi >>> 16 & 255;
              this.buffer[padLength - 6] = bitLenHi >>> 8 & 255;
              this.buffer[padLength - 5] = bitLenHi >>> 0 & 255;
              this.buffer[padLength - 4] = bitLenLo >>> 24 & 255;
              this.buffer[padLength - 3] = bitLenLo >>> 16 & 255;
              this.buffer[padLength - 2] = bitLenLo >>> 8 & 255;
              this.buffer[padLength - 1] = bitLenLo >>> 0 & 255;
              hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
              this.finished = true;
            }
            for (var i = 0; i < 8; i++) {
              out[i * 4 + 0] = this.state[i] >>> 24 & 255;
              out[i * 4 + 1] = this.state[i] >>> 16 & 255;
              out[i * 4 + 2] = this.state[i] >>> 8 & 255;
              out[i * 4 + 3] = this.state[i] >>> 0 & 255;
            }
            return this;
          };
          Hash2.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
          };
          Hash2.prototype._saveState = function(out) {
            for (var i = 0; i < this.state.length; i++) {
              out[i] = this.state[i];
            }
          };
          Hash2.prototype._restoreState = function(from, bytesHashed) {
            for (var i = 0; i < this.state.length; i++) {
              this.state[i] = from[i];
            }
            this.bytesHashed = bytesHashed;
            this.finished = false;
            this.bufferLength = 0;
          };
          return Hash2;
        }()
      );
      exports2.Hash = Hash;
      var HMAC = (
        /** @class */
        function() {
          function HMAC2(key) {
            this.inner = new Hash();
            this.outer = new Hash();
            this.blockSize = this.inner.blockSize;
            this.digestLength = this.inner.digestLength;
            var pad = new Uint8Array(this.blockSize);
            if (key.length > this.blockSize) {
              new Hash().update(key).finish(pad).clean();
            } else {
              for (var i = 0; i < key.length; i++) {
                pad[i] = key[i];
              }
            }
            for (var i = 0; i < pad.length; i++) {
              pad[i] ^= 54;
            }
            this.inner.update(pad);
            for (var i = 0; i < pad.length; i++) {
              pad[i] ^= 54 ^ 92;
            }
            this.outer.update(pad);
            this.istate = new Uint32Array(8);
            this.ostate = new Uint32Array(8);
            this.inner._saveState(this.istate);
            this.outer._saveState(this.ostate);
            for (var i = 0; i < pad.length; i++) {
              pad[i] = 0;
            }
          }
          __name(HMAC2, "HMAC");
          HMAC2.prototype.reset = function() {
            this.inner._restoreState(this.istate, this.inner.blockSize);
            this.outer._restoreState(this.ostate, this.outer.blockSize);
            return this;
          };
          HMAC2.prototype.clean = function() {
            for (var i = 0; i < this.istate.length; i++) {
              this.ostate[i] = this.istate[i] = 0;
            }
            this.inner.clean();
            this.outer.clean();
          };
          HMAC2.prototype.update = function(data) {
            this.inner.update(data);
            return this;
          };
          HMAC2.prototype.finish = function(out) {
            if (this.outer.finished) {
              this.outer.finish(out);
            } else {
              this.inner.finish(out);
              this.outer.update(out, this.digestLength).finish(out);
            }
            return this;
          };
          HMAC2.prototype.digest = function() {
            var out = new Uint8Array(this.digestLength);
            this.finish(out);
            return out;
          };
          return HMAC2;
        }()
      );
      exports2.HMAC = HMAC;
      function hash(data) {
        var h = new Hash().update(data);
        var digest = h.digest();
        h.clean();
        return digest;
      }
      __name(hash, "hash");
      exports2.hash = hash;
      exports2["default"] = hash;
      function hmac2(key, data) {
        var h = new HMAC(key).update(data);
        var digest = h.digest();
        h.clean();
        return digest;
      }
      __name(hmac2, "hmac");
      exports2.hmac = hmac2;
      function fillBuffer(buffer, hmac3, info, counter) {
        var num = counter[0];
        if (num === 0) {
          throw new Error("hkdf: cannot expand more");
        }
        hmac3.reset();
        if (num > 1) {
          hmac3.update(buffer);
        }
        if (info) {
          hmac3.update(info);
        }
        hmac3.update(counter);
        hmac3.finish(buffer);
        counter[0]++;
      }
      __name(fillBuffer, "fillBuffer");
      var hkdfSalt = new Uint8Array(exports2.digestLength);
      function hkdf(key, salt, info, length) {
        if (salt === void 0) {
          salt = hkdfSalt;
        }
        if (length === void 0) {
          length = 32;
        }
        var counter = new Uint8Array([1]);
        var okm = hmac2(salt, key);
        var hmac_ = new HMAC(okm);
        var buffer = new Uint8Array(hmac_.digestLength);
        var bufpos = buffer.length;
        var out = new Uint8Array(length);
        for (var i = 0; i < length; i++) {
          if (bufpos === buffer.length) {
            fillBuffer(buffer, hmac_, info, counter);
            bufpos = 0;
          }
          out[i] = buffer[bufpos++];
        }
        hmac_.clean();
        buffer.fill(0);
        counter.fill(0);
        return out;
      }
      __name(hkdf, "hkdf");
      exports2.hkdf = hkdf;
      function pbkdf2(password, salt, iterations, dkLen) {
        var prf = new HMAC(password);
        var len = prf.digestLength;
        var ctr = new Uint8Array(4);
        var t = new Uint8Array(len);
        var u = new Uint8Array(len);
        var dk = new Uint8Array(dkLen);
        for (var i = 0; i * len < dkLen; i++) {
          var c = i + 1;
          ctr[0] = c >>> 24 & 255;
          ctr[1] = c >>> 16 & 255;
          ctr[2] = c >>> 8 & 255;
          ctr[3] = c >>> 0 & 255;
          prf.reset();
          prf.update(salt);
          prf.update(ctr);
          prf.finish(u);
          for (var j = 0; j < len; j++) {
            t[j] = u[j];
          }
          for (var j = 2; j <= iterations; j++) {
            prf.reset();
            prf.update(u).finish(u);
            for (var k = 0; k < len; k++) {
              t[k] ^= u[k];
            }
          }
          for (var j = 0; j < len && i * len + j < dkLen; j++) {
            dk[i * len + j] = t[j];
          }
        }
        for (var i = 0; i < len; i++) {
          t[i] = u[i] = 0;
        }
        for (var i = 0; i < 4; i++) {
          ctr[i] = 0;
        }
        prf.clean();
        return dk;
      }
      __name(pbkdf2, "pbkdf2");
      exports2.pbkdf2 = pbkdf2;
    });
  }
});

// trigger/design-agent.ts
init_esm();

// lib/canvas-design-actions.ts
init_esm();

// node_modules/@liveblocks/react-flow/dist/node.js
init_esm();

// node_modules/@liveblocks/core/dist/index.js
init_esm();
var __defProp = Object.defineProperty;
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
}, "__export");
var PKG_NAME = "@liveblocks/core";
var PKG_VERSION = "3.19.5";
var PKG_FORMAT = "esm";
var g = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
var crossLinkedDocs = "https://liveblocks.io/docs/errors/cross-linked";
var dupesDocs = "https://liveblocks.io/docs/errors/dupes";
var SPACE = " ";
function error(msg) {
  if (process.env.NODE_ENV === "production") {
    console.error(msg);
  } else {
    throw new Error(msg);
  }
}
__name(error, "error");
function detectDupes(pkgName, pkgVersion, pkgFormat) {
  const pkgId = Symbol.for(pkgName);
  const pkgBuildInfo = pkgFormat ? `${pkgVersion || "dev"} (${pkgFormat})` : pkgVersion || "dev";
  if (!g[pkgId]) {
    g[pkgId] = pkgBuildInfo;
  } else if (g[pkgId] === pkgBuildInfo) {
  } else {
    const msg = [
      `Multiple copies of Liveblocks are being loaded in your project. This will cause issues! See ${dupesDocs + SPACE}`,
      "",
      "Conflicts:",
      `- ${pkgName} ${g[pkgId]} (already loaded)`,
      `- ${pkgName} ${pkgBuildInfo} (trying to load this now)`
    ].join("\n");
    error(msg);
  }
  if (pkgVersion && PKG_VERSION && pkgVersion !== PKG_VERSION) {
    error(
      [
        `Cross-linked versions of Liveblocks found, which will cause issues! See ${crossLinkedDocs + SPACE}`,
        "",
        "Conflicts:",
        `- ${PKG_NAME} is at ${PKG_VERSION}`,
        `- ${pkgName} is at ${pkgVersion}`,
        "",
        "Always upgrade all Liveblocks packages to the same version number."
      ].join("\n")
    );
  }
}
__name(detectDupes, "detectDupes");
function makeEventSource() {
  const _observers = /* @__PURE__ */ new Set();
  function subscribe(callback) {
    _observers.add(callback);
    return () => _observers.delete(callback);
  }
  __name(subscribe, "subscribe");
  function subscribeOnce(callback) {
    const unsub = subscribe((event) => {
      unsub();
      return callback(event);
    });
    return unsub;
  }
  __name(subscribeOnce, "subscribeOnce");
  async function waitUntil(predicate) {
    let unsub;
    return new Promise((res) => {
      unsub = subscribe((event) => {
        if (predicate === void 0 || predicate(event)) {
          res(event);
        }
      });
    }).finally(() => unsub?.());
  }
  __name(waitUntil, "waitUntil");
  function notify(event) {
    let called = false;
    for (const callback of _observers) {
      callback(event);
      called = true;
    }
    return called;
  }
  __name(notify, "notify");
  function count() {
    return _observers.size;
  }
  __name(count, "count");
  return {
    // Private/internal control over event emission
    notify,
    subscribe,
    subscribeOnce,
    count,
    waitUntil,
    dispose() {
      _observers.clear();
    },
    // Publicly exposable subscription API
    observable: {
      subscribe,
      subscribeOnce,
      waitUntil
    }
  };
}
__name(makeEventSource, "makeEventSource");
var freeze = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  (x) => x
) : Object.freeze;
function raise(msg) {
  throw new Error(msg);
}
__name(raise, "raise");
function create(obj, descriptors) {
  if (typeof descriptors !== "undefined") {
    return Object.create(obj, descriptors);
  }
  return Object.create(obj);
}
__name(create, "create");
function tryParseJson(rawMessage) {
  try {
    return JSON.parse(rawMessage);
  } catch {
    return void 0;
  }
}
__name(tryParseJson, "tryParseJson");
function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}
__name(deepClone, "deepClone");
function compactObject(obj) {
  const newObj = { ...obj };
  Object.keys(obj).forEach((k) => {
    const key = k;
    if (newObj[key] === void 0) {
      delete newObj[key];
    }
  });
  return newObj;
}
__name(compactObject, "compactObject");
var kSinks = /* @__PURE__ */ Symbol("kSinks");
var kTrigger = /* @__PURE__ */ Symbol("kTrigger");
var signalsToTrigger = null;
var trackedReads = null;
function enqueueTrigger(signal) {
  if (!signalsToTrigger) raise("Expected to be in an active batch");
  signalsToTrigger.add(signal);
}
__name(enqueueTrigger, "enqueueTrigger");
var AbstractSignal = class {
  static {
    __name(this, "AbstractSignal");
  }
  /** @internal */
  equals;
  #eventSource;
  /** @internal */
  [kSinks];
  constructor(equals) {
    this.equals = equals ?? Object.is;
    this.#eventSource = makeEventSource();
    this[kSinks] = /* @__PURE__ */ new Set();
    this.get = this.get.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.subscribeOnce = this.subscribeOnce.bind(this);
  }
  dispose() {
    this.#eventSource.dispose();
    this.#eventSource = "(disposed)";
    this.equals = "(disposed)";
  }
  get hasWatchers() {
    if (this.#eventSource.count() > 0) return true;
    for (const sink of this[kSinks]) {
      if (sink.hasWatchers) {
        return true;
      }
    }
    return false;
  }
  [kTrigger]() {
    this.#eventSource.notify();
    for (const sink of this[kSinks]) {
      enqueueTrigger(sink);
    }
  }
  subscribe(callback) {
    if (this.#eventSource.count() === 0) {
      this.get();
    }
    return this.#eventSource.subscribe(callback);
  }
  subscribeOnce(callback) {
    const unsub = this.subscribe(() => {
      unsub();
      return callback();
    });
    return unsub;
  }
  waitUntil() {
    throw new Error("waitUntil not supported on Signals");
  }
  markSinksDirty() {
    for (const sink of this[kSinks]) {
      sink.markDirty();
    }
  }
  addSink(sink) {
    this[kSinks].add(sink);
  }
  removeSink(sink) {
    this[kSinks].delete(sink);
  }
  asReadonly() {
    return this;
  }
};
var INITIAL = /* @__PURE__ */ Symbol();
var DerivedSignal = class _DerivedSignal extends AbstractSignal {
  static {
    __name(this, "_DerivedSignal");
  }
  #prevValue;
  #dirty;
  // When true, the value in #value may not be up-to-date and needs re-checking
  #sources;
  #deps;
  #transform;
  // prettier-ignore
  static from(...args) {
    const last = args.pop();
    if (typeof last !== "function")
      raise("Invalid .from() call, last argument expected to be a function");
    if (typeof args[args.length - 1] === "function") {
      const equals = last;
      const transform2 = args.pop();
      return new _DerivedSignal(args, transform2, equals);
    } else {
      const transform2 = last;
      return new _DerivedSignal(args, transform2);
    }
  }
  constructor(deps, transform2, equals) {
    super(equals);
    this.#dirty = true;
    this.#prevValue = INITIAL;
    this.#deps = deps;
    this.#sources = /* @__PURE__ */ new Set();
    this.#transform = transform2;
  }
  dispose() {
    for (const src of this.#sources) {
      src.removeSink(this);
    }
    this.#prevValue = "(disposed)";
    this.#sources = "(disposed)";
    this.#deps = "(disposed)";
    this.#transform = "(disposed)";
  }
  get isDirty() {
    return this.#dirty;
  }
  #recompute() {
    const oldTrackedReads = trackedReads;
    let derived;
    trackedReads = /* @__PURE__ */ new Set();
    try {
      derived = this.#transform(...this.#deps.map((p) => p.get()));
    } finally {
      const oldSources = this.#sources;
      this.#sources = /* @__PURE__ */ new Set();
      for (const sig of trackedReads) {
        this.#sources.add(sig);
        oldSources.delete(sig);
      }
      for (const oldSource of oldSources) {
        oldSource.removeSink(this);
      }
      for (const newSource of this.#sources) {
        newSource.addSink(this);
      }
      trackedReads = oldTrackedReads;
    }
    this.#dirty = false;
    if (!this.equals(this.#prevValue, derived)) {
      this.#prevValue = derived;
      return true;
    }
    return false;
  }
  markDirty() {
    if (!this.#dirty) {
      this.#dirty = true;
      this.markSinksDirty();
    }
  }
  get() {
    if (this.#dirty) {
      this.#recompute();
    }
    trackedReads?.add(this);
    return this.#prevValue;
  }
  /**
   * Called by the Signal system if one or more of the dependent signals have
   * changed. In the case of a DerivedSignal, we'll only want to re-evaluate
   * the actual value if it's being watched, or any of their sinks are being
   * watched actively.
   */
  [kTrigger]() {
    if (!this.hasWatchers) {
      return;
    }
    const updated = this.#recompute();
    if (updated) {
      super[kTrigger]();
    }
  }
};
function bisectRight(arr, x, lt) {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = lo + (hi - lo >> 1);
    if (lt(x, arr[mid])) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}
__name(bisectRight, "bisectRight");
var SortedList = class _SortedList {
  static {
    __name(this, "_SortedList");
  }
  #data;
  #lt;
  constructor(alreadySortedList, lt) {
    this.#lt = lt;
    this.#data = alreadySortedList;
  }
  /**
   * Creates an empty SortedList with the given "less than" function.
   */
  static with(lt) {
    return _SortedList.fromAlreadySorted([], lt);
  }
  static from(arr, lt) {
    const sorted = new _SortedList([], lt);
    for (const item of arr) {
      sorted.add(item);
    }
    return sorted;
  }
  static fromAlreadySorted(alreadySorted, lt) {
    return new _SortedList(alreadySorted, lt);
  }
  /**
   * Clones the sorted list to a new instance.
   */
  clone() {
    return new _SortedList(this.#data.slice(), this.#lt);
  }
  /**
   * Adds a new item to the sorted list, such that it remains sorted.
   * Returns the index where the item was inserted.
   */
  add(value) {
    const idx = bisectRight(this.#data, value, this.#lt);
    this.#data.splice(idx, 0, value);
    return idx;
  }
  /**
   * Removes all values from the sorted list, making it empty again.
   * Returns whether the list was mutated or not.
   */
  clear() {
    const hadData = this.#data.length > 0;
    this.#data.length = 0;
    return hadData;
  }
  /**
   * Removes the first value matching the predicate.
   * Returns whether the list was mutated or not.
   */
  removeBy(predicate, limit = Number.POSITIVE_INFINITY) {
    let deleted = 0;
    for (let i = 0; i < this.#data.length; i++) {
      if (predicate(this.#data[i])) {
        this.#data.splice(i, 1);
        deleted++;
        if (deleted >= limit) {
          break;
        } else {
          i--;
        }
      }
    }
    return deleted > 0;
  }
  /**
   * Removes the given value from the sorted list, if it exists. The given
   * value must be `===` to one of the list items. Only the first entry will be
   * removed if the element exists in the sorted list multiple times.
   *
   * Returns whether the list was mutated or not.
   */
  remove(value) {
    const idx = this.#data.indexOf(value);
    if (idx >= 0) {
      this.#data.splice(idx, 1);
      return true;
    }
    return false;
  }
  /**
   * Removes the item at the given index.
   * Returns the removed item, or undefined if index is out of bounds.
   */
  removeAt(index2) {
    if (index2 < 0 || index2 >= this.#data.length) {
      return void 0;
    }
    const [removed] = this.#data.splice(index2, 1);
    return removed;
  }
  /**
   * Repositions an item to maintain sorted order after its sort key has
   * been mutated in-place. For example:
   *
   *   const item = sorted.at(3);
   *   item.updatedAt = new Date();  // mutate the item's sort key in-place
   *   sorted.reposition(item);      // restore sorted order
   *
   * Returns the new index of the item. Throws if the item is not in the list.
   *
   * Semantically equivalent to remove(value) + add(value), but optimized
   * to avoid array shifting when the item only moves a short distance.
   */
  reposition(value) {
    const oldIdx = this.#data.indexOf(value);
    if (oldIdx < 0) {
      throw new Error("Cannot reposition item that is not in the list");
    }
    const prev = this.#data[oldIdx - 1];
    const next = this.#data[oldIdx + 1];
    const validLeft = prev === void 0 || this.#lt(prev, value);
    const validRight = next === void 0 || this.#lt(value, next);
    if (validLeft && validRight) {
      return oldIdx;
    }
    let newIdx = oldIdx;
    while (newIdx > 0 && this.#lt(value, this.#data[newIdx - 1])) {
      this.#data[newIdx] = this.#data[newIdx - 1];
      newIdx--;
    }
    if (newIdx < oldIdx) {
      this.#data[newIdx] = value;
      return newIdx;
    }
    while (newIdx < this.#data.length - 1 && !this.#lt(value, this.#data[newIdx + 1])) {
      this.#data[newIdx] = this.#data[newIdx + 1];
      newIdx++;
    }
    if (newIdx !== oldIdx) {
      this.#data[newIdx] = value;
    }
    return newIdx;
  }
  at(index2) {
    return this.#data[index2];
  }
  get length() {
    return this.#data.length;
  }
  /**
   * Whether the given value is present, by identity. O(log n) plus the length
   * of any run of items that share its sort key (normally 1). Bisects on the
   * value's own key, so it only finds values sitting at their sorted position,
   * which is true for any item currently in the list.
   */
  includes(value) {
    for (let i = bisectRight(this.#data, value, this.#lt) - 1; i >= 0 && !this.#lt(this.#data[i], value); i--) {
      if (this.#data[i] === value) {
        return true;
      }
    }
    return false;
  }
  *filter(predicate) {
    for (const item of this.#data) {
      if (predicate(item)) {
        yield item;
      }
    }
  }
  // XXXX If we keep this, add unit tests. Or remove it.
  *findAllRight(predicate) {
    for (let i = this.#data.length - 1; i >= 0; i--) {
      const item = this.#data[i];
      if (predicate(item, i)) {
        yield item;
      }
    }
  }
  [Symbol.iterator]() {
    return this.#data[Symbol.iterator]();
  }
  *iterReversed() {
    for (let i = this.#data.length - 1; i >= 0; i--) {
      yield this.#data[i];
    }
  }
  /** Finds the leftmost item that matches the predicate. */
  find(predicate, start2) {
    const idx = this.findIndex(predicate, start2);
    return idx > -1 ? this.#data.at(idx) : void 0;
  }
  /** Finds the leftmost index that matches the predicate. */
  findIndex(predicate, start2 = 0) {
    for (let i = Math.max(0, start2); i < this.#data.length; i++) {
      if (predicate(this.#data[i], i)) {
        return i;
      }
    }
    return -1;
  }
  /** Finds the rightmost item that matches the predicate. */
  findRight(predicate, start2) {
    const idx = this.findIndexRight(predicate, start2);
    return idx > -1 ? this.#data.at(idx) : void 0;
  }
  /** Finds the rightmost index that matches the predicate. */
  findIndexRight(predicate, start2 = this.#data.length - 1) {
    for (let i = Math.min(start2, this.#data.length - 1); i >= 0; i--) {
      if (predicate(this.#data[i], i)) {
        return i;
      }
    }
    return -1;
  }
  get rawArray() {
    return this.#data;
  }
};
function convertToCommentData(data) {
  const editedAt = data.editedAt ? new Date(data.editedAt) : void 0;
  const createdAt = new Date(data.createdAt);
  const reactions = data.reactions.map((reaction) => ({
    ...reaction,
    createdAt: new Date(reaction.createdAt)
  }));
  if (data.body) {
    return {
      ...data,
      reactions,
      createdAt,
      editedAt
    };
  } else {
    const deletedAt = new Date(data.deletedAt);
    return {
      ...data,
      reactions,
      createdAt,
      editedAt,
      deletedAt
    };
  }
}
__name(convertToCommentData, "convertToCommentData");
function convertToThreadData(data) {
  const createdAt = new Date(data.createdAt);
  const updatedAt = new Date(data.updatedAt);
  const comments = data.comments.map(
    (comment) => convertToCommentData(comment)
  );
  return {
    ...data,
    createdAt,
    updatedAt,
    comments
  };
}
__name(convertToThreadData, "convertToThreadData");
function convertToCommentUserReaction(data) {
  return {
    ...data,
    createdAt: new Date(data.createdAt)
  };
}
__name(convertToCommentUserReaction, "convertToCommentUserReaction");
function convertToInboxNotificationData(data) {
  const notifiedAt = new Date(data.notifiedAt);
  const readAt = data.readAt ? new Date(data.readAt) : null;
  if ("activities" in data) {
    const activities = data.activities.map((activity) => ({
      ...activity,
      createdAt: new Date(activity.createdAt)
    }));
    return {
      ...data,
      notifiedAt,
      readAt,
      activities
    };
  }
  return {
    ...data,
    notifiedAt,
    readAt
  };
}
__name(convertToInboxNotificationData, "convertToInboxNotificationData");
function convertToSubscriptionData(data) {
  const createdAt = new Date(data.createdAt);
  return {
    ...data,
    createdAt
  };
}
__name(convertToSubscriptionData, "convertToSubscriptionData");
function convertToUserSubscriptionData(data) {
  const createdAt = new Date(data.createdAt);
  return {
    ...data,
    createdAt
  };
}
__name(convertToUserSubscriptionData, "convertToUserSubscriptionData");
function convertToGroupData(data) {
  const createdAt = new Date(data.createdAt);
  const updatedAt = new Date(data.updatedAt);
  const members = data.members.map((member) => ({
    ...member,
    addedAt: new Date(member.addedAt)
  }));
  return {
    ...data,
    createdAt,
    updatedAt,
    members
  };
}
__name(convertToGroupData, "convertToGroupData");
function assertNever(_value, errmsg) {
  throw new Error(errmsg);
}
__name(assertNever, "assertNever");
function assert(condition, errmsg) {
  if (process.env.NODE_ENV !== "production") {
    if (!condition) {
      const err = new Error(errmsg);
      err.name = "Assertion failure";
      throw err;
    }
  }
}
__name(assert, "assert");
function nn(value, errmsg = "Expected value to be non-nullable") {
  assert(value !== null && value !== void 0, errmsg);
  return value;
}
__name(nn, "nn");
var fancy_console_exports = {};
__export(fancy_console_exports, {
  error: /* @__PURE__ */ __name(() => error2, "error"),
  errorWithTitle: /* @__PURE__ */ __name(() => errorWithTitle, "errorWithTitle"),
  warn: /* @__PURE__ */ __name(() => warn, "warn"),
  warnWithTitle: /* @__PURE__ */ __name(() => warnWithTitle, "warnWithTitle")
});
var badge = "background:#0e0d12;border-radius:9999px;color:#fff;padding:3px 7px;font-family:sans-serif;font-weight:600;";
var bold = "font-weight:600";
function wrap(method) {
  return typeof window === "undefined" || process.env.NODE_ENV === "test" ? console[method] : (
    /* istanbul ignore next */
    (message, ...args) => console[method]("%cLiveblocks", badge, message, ...args)
  );
}
__name(wrap, "wrap");
var warn = wrap("warn");
var error2 = wrap("error");
function wrapWithTitle(method) {
  return typeof window === "undefined" || process.env.NODE_ENV === "test" ? console[method] : (
    /* istanbul ignore next */
    (title, message, ...args) => console[method](
      `%cLiveblocks%c ${title}`,
      badge,
      bold,
      message,
      ...args
    )
  );
}
__name(wrapWithTitle, "wrapWithTitle");
var warnWithTitle = wrapWithTitle("warn");
var errorWithTitle = wrapWithTitle("error");
function isPlainObject(blob) {
  return blob !== null && typeof blob === "object" && Object.prototype.toString.call(blob) === "[object Object]";
}
__name(isPlainObject, "isPlainObject");
function isStartsWithOperator(blob) {
  return isPlainObject(blob) && typeof blob.startsWith === "string";
}
__name(isStartsWithOperator, "isStartsWithOperator");
function isNumberOperator(blob) {
  return isPlainObject(blob) && (typeof blob.lt === "number" || typeof blob.gt === "number" || typeof blob.lte === "number" || typeof blob.gte === "number");
}
__name(isNumberOperator, "isNumberOperator");
var nanoid = /* @__PURE__ */ __name((t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce(
  (t2, e) => t2 += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e < 63 ? "_" : "-",
  ""
), "nanoid");
var identifierRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function objectToQuery(obj) {
  let filterList = [];
  const entries2 = Object.entries(obj);
  const keyValuePairs = [];
  const keyValuePairsWithOperator = [];
  const indexedKeys = [];
  entries2.forEach(([key, value]) => {
    if (!identifierRegex.test(key)) {
      throw new Error("Key must only contain letters, numbers, _");
    }
    if (isSimpleValue(value)) {
      keyValuePairs.push([key, value]);
    } else if (isPlainObject(value)) {
      if (isStartsWithOperator(value) || isNumberOperator(value)) {
        keyValuePairsWithOperator.push([key, value]);
      } else {
        indexedKeys.push([key, value]);
      }
    }
  });
  filterList = [
    ...getFiltersFromKeyValuePairs(keyValuePairs),
    ...getFiltersFromKeyValuePairsWithOperator(keyValuePairsWithOperator)
  ];
  indexedKeys.forEach(([key, value]) => {
    const nestedEntries = Object.entries(value);
    const nKeyValuePairs = [];
    const nKeyValuePairsWithOperator = [];
    nestedEntries.forEach(([nestedKey, nestedValue]) => {
      if (isStringEmpty(nestedKey)) {
        throw new Error("Key cannot be empty");
      }
      if (isSimpleValue(nestedValue)) {
        nKeyValuePairs.push([formatFilterKey(key, nestedKey), nestedValue]);
      } else if (isStartsWithOperator(nestedValue) || isNumberOperator(nestedValue)) {
        nKeyValuePairsWithOperator.push([
          formatFilterKey(key, nestedKey),
          nestedValue
        ]);
      }
    });
    filterList = [
      ...filterList,
      ...getFiltersFromKeyValuePairs(nKeyValuePairs),
      ...getFiltersFromKeyValuePairsWithOperator(nKeyValuePairsWithOperator)
    ];
  });
  return filterList.map(({ key, operator, value }) => `${key}${operator}${quote(value)}`).join(" ");
}
__name(objectToQuery, "objectToQuery");
var getFiltersFromKeyValuePairs = /* @__PURE__ */ __name((keyValuePairs) => {
  const filters = [];
  keyValuePairs.forEach(([key, value]) => {
    filters.push({
      key,
      operator: ":",
      value
    });
  });
  return filters;
}, "getFiltersFromKeyValuePairs");
var getFiltersFromKeyValuePairsWithOperator = /* @__PURE__ */ __name((keyValuePairsWithOperator) => {
  const filters = [];
  keyValuePairsWithOperator.forEach(([key, value]) => {
    if ("startsWith" in value && typeof value.startsWith === "string") {
      filters.push({
        key,
        operator: "^",
        value: value.startsWith
      });
    }
    if ("lt" in value && typeof value.lt === "number") {
      filters.push({
        key,
        operator: "<",
        value: value.lt
      });
    }
    if ("gt" in value && typeof value.gt === "number") {
      filters.push({
        key,
        operator: ">",
        value: value.gt
      });
    }
    if ("gte" in value && typeof value.gte === "number") {
      filters.push({
        key,
        operator: ">=",
        value: value.gte
      });
    }
    if ("lte" in value && typeof value.lte === "number") {
      filters.push({
        key,
        operator: "<=",
        value: value.lte
      });
    }
  });
  return filters;
}, "getFiltersFromKeyValuePairsWithOperator");
var isSimpleValue = /* @__PURE__ */ __name((value) => {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || value === null;
}, "isSimpleValue");
var formatFilterKey = /* @__PURE__ */ __name((key, nestedKey) => {
  if (nestedKey) {
    return `${key}[${quote(nestedKey)}]`;
  }
  return key;
}, "formatFilterKey");
var isStringEmpty = /* @__PURE__ */ __name((value) => {
  return !value || value.toString().trim() === "";
}, "isStringEmpty");
function quote(input) {
  const result = JSON.stringify(input);
  if (typeof input !== "string") {
    return result;
  }
  if (result.includes("'")) {
    return result;
  }
  return `'${result.slice(1, -1).replace(/\\"/g, '"')}'`;
}
__name(quote, "quote");
function toURLSearchParams(params) {
  const result = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== void 0 && value !== null) {
      result.set(key, value.toString());
    }
  }
  return result;
}
__name(toURLSearchParams, "toURLSearchParams");
function urljoin(baseUrl, path, params) {
  const url2 = new URL(path, baseUrl);
  if (params !== void 0) {
    url2.search = (params instanceof URLSearchParams ? params : toURLSearchParams(params)).toString();
  }
  return url2.toString();
}
__name(urljoin, "urljoin");
function url(strings, ...values2) {
  return strings.reduce(
    (result, str, i) => result + encodeURIComponent(values2[i - 1] ?? "") + str
  );
}
__name(url, "url");
var ServerMsgCode = Object.freeze({
  // For Presence
  UPDATE_PRESENCE: 100,
  USER_JOINED: 101,
  USER_LEFT: 102,
  BROADCASTED_EVENT: 103,
  ROOM_STATE: 104,
  // For Storage
  STORAGE_STATE_V7: 200,
  // Only sent in V7
  STORAGE_CHUNK: 210,
  // Used in V8+
  STORAGE_STREAM_END: 211,
  // Used in V8+
  UPDATE_STORAGE: 201,
  // For Yjs Docs
  UPDATE_YDOC: 300,
  // For Comments
  THREAD_CREATED: 400,
  THREAD_DELETED: 407,
  THREAD_METADATA_UPDATED: 401,
  THREAD_UPDATED: 408,
  COMMENT_CREATED: 402,
  COMMENT_EDITED: 403,
  COMMENT_DELETED: 404,
  COMMENT_REACTION_ADDED: 405,
  COMMENT_REACTION_REMOVED: 406,
  COMMENT_METADATA_UPDATED: 409,
  // For Feeds
  FEEDS_LIST: 500,
  FEEDS_ADDED: 501,
  FEEDS_UPDATED: 502,
  FEED_DELETED: 503,
  FEED_MESSAGES_LIST: 504,
  FEED_MESSAGES_ADDED: 505,
  FEED_MESSAGES_UPDATED: 506,
  FEED_MESSAGES_DELETED: 507,
  FEED_REQUEST_FAILED: 508,
  // Error codes
  REJECT_STORAGE_OP: 299
  // Sent if a mutation was not allowed on the server (i.e. due to permissions, limit exceeded, etc)
});
var BACKOFF_DELAYS = [250, 500, 1e3, 2e3, 4e3, 8e3, 1e4];
var RESET_DELAY = BACKOFF_DELAYS[0] - 1;
function log(level, message) {
  const logger2 = level === 2 ? error2 : level === 1 ? warn : (
    /* black hole */
    () => {
    }
  );
  return () => {
    logger2(message);
  };
}
__name(log, "log");
var logPermanentClose = log(
  1,
  "Connection to WebSocket closed permanently. Won't retry."
);
var EMPTY_OBJECT = Object.freeze({});
var NULL_KEYWORD_CHARS = Array.from(new Set("null"));
var TRUE_KEYWORD_CHARS = Array.from(new Set("true"));
var FALSE_KEYWORD_CHARS = Array.from(new Set("false"));
var ALL_KEYWORD_CHARS = Array.from(new Set("nulltruefalse"));
var OpCode = Object.freeze({
  INIT: 0,
  SET_PARENT_KEY: 1,
  CREATE_LIST: 2,
  UPDATE_OBJECT: 3,
  CREATE_OBJECT: 4,
  DELETE_CRDT: 5,
  DELETE_OBJECT_KEY: 6,
  CREATE_MAP: 7,
  CREATE_REGISTER: 8
});
function isCreateOp(op) {
  return op.type === OpCode.CREATE_OBJECT || op.type === OpCode.CREATE_REGISTER || op.type === OpCode.CREATE_MAP || op.type === OpCode.CREATE_LIST;
}
__name(isCreateOp, "isCreateOp");
var CrdtType = Object.freeze({
  OBJECT: 0,
  LIST: 1,
  MAP: 2,
  REGISTER: 3
});
function isRootStorageNode(node) {
  return node[0] === "root";
}
__name(isRootStorageNode, "isRootStorageNode");
function isObjectStorageNode(node) {
  return node[1].type === CrdtType.OBJECT;
}
__name(isObjectStorageNode, "isObjectStorageNode");
function isListStorageNode(node) {
  return node[1].type === CrdtType.LIST;
}
__name(isListStorageNode, "isListStorageNode");
function isMapStorageNode(node) {
  return node[1].type === CrdtType.MAP;
}
__name(isMapStorageNode, "isMapStorageNode");
function isRegisterStorageNode(node) {
  return node[1].type === CrdtType.REGISTER;
}
__name(isRegisterStorageNode, "isRegisterStorageNode");
var MIN_CODE = 32;
var MAX_CODE = 126;
var NUM_DIGITS = MAX_CODE - MIN_CODE + 1;
var ZERO = nthDigit(0);
var ONE = nthDigit(1);
var ZERO_NINE = ZERO + nthDigit(-1);
function nthDigit(n) {
  const code = MIN_CODE + (n < 0 ? NUM_DIGITS + n : n);
  if (code < MIN_CODE || code > MAX_CODE) {
    throw new Error(`Invalid n value: ${n}`);
  }
  return String.fromCharCode(code);
}
__name(nthDigit, "nthDigit");
function makePosition(x, y) {
  if (x !== void 0 && y !== void 0) {
    return between(x, y);
  } else if (x !== void 0) {
    return after(x);
  } else if (y !== void 0) {
    return before(y);
  } else {
    return ONE;
  }
}
__name(makePosition, "makePosition");
function before(pos) {
  const lastIndex = pos.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    const code = pos.charCodeAt(i);
    if (code <= MIN_CODE) {
      continue;
    }
    if (i === lastIndex) {
      if (code === MIN_CODE + 1) {
        return pos.substring(0, i) + ZERO_NINE;
      } else {
        return pos.substring(0, i) + String.fromCharCode(code - 1);
      }
    } else {
      return pos.substring(0, i + 1);
    }
  }
  return ONE;
}
__name(before, "before");
var VIEWPORT_START = 2;
var VIEWPORT_STEP = 3;
function after(pos) {
  for (let i = 0; i < pos.length; i++) {
    const code = pos.charCodeAt(i);
    if (code < MIN_CODE || code > MAX_CODE) {
      return pos + ONE;
    }
  }
  while (pos.length > 1 && pos.charCodeAt(pos.length - 1) === MIN_CODE) {
    pos = pos.slice(0, -1);
  }
  if (pos.length === 0 || pos === ZERO) {
    return ONE;
  }
  let viewport = VIEWPORT_START;
  if (pos.length > VIEWPORT_START) {
    viewport = VIEWPORT_START + Math.ceil((pos.length - VIEWPORT_START) / VIEWPORT_STEP) * VIEWPORT_STEP;
  }
  const result = incrementWithinViewport(pos, viewport);
  if (result !== null) {
    return result;
  }
  viewport += VIEWPORT_STEP;
  const extendedResult = incrementWithinViewport(pos, viewport);
  if (extendedResult !== null) {
    return extendedResult;
  }
  return pos + ONE;
}
__name(after, "after");
function incrementWithinViewport(pos, viewport) {
  const digits = [];
  for (let i = 0; i < viewport; i++) {
    if (i < pos.length) {
      digits.push(pos.charCodeAt(i) - MIN_CODE);
    } else {
      digits.push(0);
    }
  }
  let carry = 1;
  for (let i = viewport - 1; i >= 0 && carry; i--) {
    const sum = digits[i] + carry;
    if (sum >= NUM_DIGITS) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
    }
  }
  if (carry) {
    return null;
  }
  let result = "";
  for (const d of digits) {
    result += String.fromCharCode(d + MIN_CODE);
  }
  while (result.length > 1 && result.charCodeAt(result.length - 1) === MIN_CODE) {
    result = result.slice(0, -1);
  }
  return result;
}
__name(incrementWithinViewport, "incrementWithinViewport");
function between(lo, hi) {
  if (lo < hi) {
    return _between(lo, hi);
  } else if (lo > hi) {
    return _between(hi, lo);
  } else {
    throw new Error("Cannot compute value between two equal positions");
  }
}
__name(between, "between");
function _between(lo, hi) {
  let index2 = 0;
  const loLen = lo.length;
  const hiLen = hi.length;
  while (true) {
    const loCode = index2 < loLen ? lo.charCodeAt(index2) : MIN_CODE;
    const hiCode = index2 < hiLen ? hi.charCodeAt(index2) : MAX_CODE;
    if (loCode === hiCode) {
      index2++;
      continue;
    }
    if (hiCode - loCode === 1) {
      const size = index2 + 1;
      let prefix = lo.substring(0, size);
      if (prefix.length < size) {
        prefix += ZERO.repeat(size - prefix.length);
      }
      const suffix = lo.substring(size);
      const nines = "";
      return prefix + _between(suffix, nines);
    } else {
      return takeN(lo, index2) + String.fromCharCode(hiCode + loCode >> 1);
    }
  }
}
__name(_between, "_between");
function takeN(pos, n) {
  return n < pos.length ? pos.substring(0, n) : pos + ZERO.repeat(n - pos.length);
}
__name(takeN, "takeN");
var MIN_NON_ZERO_CODE = MIN_CODE + 1;
function isPos(str) {
  if (str === "") {
    return false;
  }
  const lastIdx = str.length - 1;
  const last = str.charCodeAt(lastIdx);
  if (last < MIN_NON_ZERO_CODE || last > MAX_CODE) {
    return false;
  }
  for (let i = 0; i < lastIdx; i++) {
    const code = str.charCodeAt(i);
    if (code < MIN_CODE || code > MAX_CODE) {
      return false;
    }
  }
  return true;
}
__name(isPos, "isPos");
function convertToPos(str) {
  const codes = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    codes.push(code < MIN_CODE ? MIN_CODE : code > MAX_CODE ? MAX_CODE : code);
  }
  while (codes.length > 0 && codes[codes.length - 1] === MIN_CODE) {
    codes.length--;
  }
  return codes.length > 0 ? String.fromCharCode(...codes) : (
    // Edge case: the str was a 0-only string, which is invalid. Default back to .1
    ONE
  );
}
__name(convertToPos, "convertToPos");
function asPos(str) {
  return isPos(str) ? str : convertToPos(str);
}
__name(asPos, "asPos");
var UnacknowledgedOps = class {
  static {
    __name(this, "UnacknowledgedOps");
  }
  // opId -> op
  #byOpId = /* @__PURE__ */ new Map();
  // position -> (opId -> Create op)
  #createOpsByPosition = /* @__PURE__ */ new Map();
  // parentId -> (opId -> Create op)
  #createOpsByParent = /* @__PURE__ */ new Map();
  // opIds of pending ops that were in flight when a connection died, so the
  // server may already have processed them. See isPossiblyStored().
  #possiblyStoredOpIds = /* @__PURE__ */ new Set();
  #posKey(parentId, parentKey) {
    return `${parentId}
${parentKey}`;
  }
  get size() {
    return this.#byOpId.size;
  }
  /**
   * Mark the given Op as still unacknowledged.
   */
  add(op) {
    this.#byOpId.set(op.opId, op);
    if (isCreateOp(op)) {
      const posKey = this.#posKey(op.parentId, op.parentKey);
      let atPosition = this.#createOpsByPosition.get(posKey);
      if (atPosition === void 0) {
        atPosition = /* @__PURE__ */ new Map();
        this.#createOpsByPosition.set(posKey, atPosition);
      }
      atPosition.set(op.opId, op);
      let inParent = this.#createOpsByParent.get(op.parentId);
      if (inParent === void 0) {
        inParent = /* @__PURE__ */ new Map();
        this.#createOpsByParent.set(op.parentId, inParent);
      }
      inParent.set(op.opId, op);
    }
  }
  /**
   * Drop the op with the given opId from the set, because the server has
   * acknowledged it (confirmed our own op, or signalled it was seen but
   * ignored).
   */
  delete(opId) {
    const op = this.#byOpId.get(opId);
    if (op === void 0) {
      return;
    }
    this.#byOpId.delete(opId);
    this.#possiblyStoredOpIds.delete(opId);
    if (isCreateOp(op)) {
      const posKey = this.#posKey(op.parentId, op.parentKey);
      const atPosition = this.#createOpsByPosition.get(posKey);
      atPosition?.delete(opId);
      if (atPosition !== void 0 && atPosition.size === 0) {
        this.#createOpsByPosition.delete(posKey);
      }
      const inParent = this.#createOpsByParent.get(op.parentId);
      inParent?.delete(opId);
      if (inParent !== void 0 && inParent.size === 0) {
        this.#createOpsByParent.delete(op.parentId);
      }
    }
  }
  /**
   * The still-unacknowledged Create ops with the given `parentId` and
   * `parentKey` (targeting one exact position), in dispatch order. O(1) lookup.
   * Empty if none.
   */
  getByParentIdAndKey(parentId, parentKey) {
    return this.#createOpsByPosition.get(this.#posKey(parentId, parentKey))?.values() ?? [];
  }
  /**
   * The still-unacknowledged Create ops with the given `parentId` (across all
   * positions), in dispatch order. O(1) lookup. Empty if none.
   */
  getByParentId(parentId) {
    return this.#createOpsByParent.get(parentId)?.values() ?? [];
  }
  /** All still-unacknowledged ops, in dispatch order. */
  values() {
    return this.#byOpId.values();
  }
  isPossiblyStored(opId) {
    return this.#possiblyStoredOpIds.has(opId);
  }
  /**
   * Mark every currently pending op as possibly stored on the server. Called
   * when the connection dies: all of these ops were in flight, and their
   * (possibly lost) acks would have been the only way to know their fate.
   */
  markAllAsPossiblyStored() {
    for (const opId of this.#byOpId.keys()) {
      this.#possiblyStoredOpIds.add(opId);
    }
  }
};
function createManagedPool(roomId, options2) {
  const {
    getCurrentConnectionId,
    onDispatch,
    isStorageWritable = /* @__PURE__ */ __name(() => true, "isStorageWritable"),
    unacknowledgedOps = new UnacknowledgedOps()
  } = options2;
  let clock2 = 0;
  let opClock = 0;
  const nodes = /* @__PURE__ */ new Map();
  return {
    roomId,
    nodes,
    getNode: /* @__PURE__ */ __name((id2) => nodes.get(id2), "getNode"),
    addNode: /* @__PURE__ */ __name((id2, node) => void nodes.set(id2, node), "addNode"),
    deleteNode: /* @__PURE__ */ __name((id2) => void nodes.delete(id2), "deleteNode"),
    generateId: /* @__PURE__ */ __name(() => `${getCurrentConnectionId()}:${clock2++}`, "generateId"),
    generateOpId: /* @__PURE__ */ __name(() => `${getCurrentConnectionId()}:${opClock++}`, "generateOpId"),
    dispatch(ops, reverse, storageUpdates) {
      onDispatch?.(ops, reverse, storageUpdates);
    },
    assertStorageIsWritable: /* @__PURE__ */ __name(() => {
      if (!isStorageWritable()) {
        throw new Error(
          "Cannot write to storage with a read only user, please ensure the user has write permissions"
        );
      }
    }, "assertStorageIsWritable"),
    unacknowledgedOps
  };
}
__name(createManagedPool, "createManagedPool");
function crdtAsLiveNode(value) {
  return value;
}
__name(crdtAsLiveNode, "crdtAsLiveNode");
function HasParent(node, key, pos = asPos(key)) {
  return Object.freeze({ type: "HasParent", node, key, pos });
}
__name(HasParent, "HasParent");
var NoParent = Object.freeze({ type: "NoParent" });
function Orphaned(oldKey, oldPos = asPos(oldKey)) {
  return Object.freeze({ type: "Orphaned", oldKey, oldPos });
}
__name(Orphaned, "Orphaned");
var AbstractCrdt = class {
  static {
    __name(this, "AbstractCrdt");
  }
  //                  ^^^^^^^^^^^^ TODO: Make this an interface
  #pool;
  #id;
  #parent = NoParent;
  /** @internal */
  _getParentKeyOrThrow() {
    switch (this.parent.type) {
      case "HasParent":
        return this.parent.key;
      case "NoParent":
        throw new Error("Parent key is missing");
      case "Orphaned":
        return this.parent.oldKey;
      default:
        return assertNever(this.parent, "Unknown state");
    }
  }
  /** @internal */
  get _parentPos() {
    switch (this.parent.type) {
      case "HasParent":
        return this.parent.pos;
      case "NoParent":
        throw new Error("Parent key is missing");
      case "Orphaned":
        return this.parent.oldPos;
      default:
        return assertNever(this.parent, "Unknown state");
    }
  }
  /** @internal */
  get _pool() {
    return this.#pool;
  }
  get roomId() {
    return this.#pool ? this.#pool.roomId : null;
  }
  /** @internal */
  get _id() {
    return this.#id;
  }
  /** @internal */
  get parent() {
    return this.#parent;
  }
  /** @internal */
  get _parentKey() {
    switch (this.parent.type) {
      case "HasParent":
        return this.parent.key;
      case "NoParent":
        return null;
      case "Orphaned":
        return this.parent.oldKey;
      default:
        return assertNever(this.parent, "Unknown state");
    }
  }
  /** @internal */
  _apply(op, _isLocal) {
    switch (op.type) {
      case OpCode.DELETE_CRDT: {
        if (this.parent.type === "HasParent") {
          return this.parent.node._detachChild(crdtAsLiveNode(this));
        }
        return { modified: false };
      }
    }
    return { modified: false };
  }
  /** @internal */
  _setParentLink(newParentNode, newParentKey) {
    switch (this.parent.type) {
      case "HasParent":
        if (this.parent.node !== newParentNode) {
          throw new Error("Cannot set parent: node already has a parent");
        } else {
          this.#parent = HasParent(newParentNode, newParentKey);
          return;
        }
      case "Orphaned":
      case "NoParent": {
        this.#parent = HasParent(newParentNode, newParentKey);
        return;
      }
      default:
        return assertNever(this.parent, "Unknown state");
    }
  }
  /** @internal */
  _attach(id2, pool) {
    if (this.#id || this.#pool) {
      throw new Error("Cannot attach node: already attached");
    }
    pool.addNode(id2, crdtAsLiveNode(this));
    this.#id = id2;
    this.#pool = pool;
  }
  /** @internal */
  _detach() {
    if (this.#pool && this.#id) {
      this.#pool.deleteNode(this.#id);
    }
    switch (this.parent.type) {
      case "HasParent": {
        this.#parent = Orphaned(this.parent.key, this.parent.pos);
        break;
      }
      case "NoParent": {
        this.#parent = NoParent;
        break;
      }
      case "Orphaned": {
        break;
      }
      default:
        assertNever(this.parent, "Unknown state");
    }
    this.#pool = void 0;
  }
  /**
   * Serializes this CRDT and all its children into a list of creation ops
   * with opIds. Used for forward operations that will be sent over the wire
   * immediately. Each op gets a unique opId for server acknowledgement.
   *
   * @internal
   */
  _toOpsWithOpId(parentId, parentKey, pool) {
    return this._toOps(parentId, parentKey).map((op) => ({
      opId: pool.generateOpId(),
      ...op
    }));
  }
  /** This caches the result of the last .toJSON() call for this Live node. */
  #cachedJson;
  #cachedTreeNodeKey;
  /** This caches the result of the last .toTreeNode() call for this Live node. */
  #cachedTreeNode;
  /**
   * @internal
   *
   * Clear the cached snapshots, so that the next call to `.toJSON()` will
   * recompute. Call this after every mutation to the Live node.
   */
  invalidate() {
    if (this.#cachedJson !== void 0 || this.#cachedTreeNode !== void 0) {
      this.#cachedJson = void 0;
      this.#cachedTreeNode = void 0;
      if (this.parent.type === "HasParent") {
        this.parent.node.invalidate();
      }
    }
  }
  /**
   * @internal
   * Return an snapshot of this Live tree for use in DevTools.
   */
  toTreeNode(key) {
    if (this.#cachedTreeNode === void 0 || this.#cachedTreeNodeKey !== key) {
      this.#cachedTreeNodeKey = key;
      this.#cachedTreeNode = this._toTreeNode(key);
    }
    return this.#cachedTreeNode;
  }
  /**
   * @private
   * Returns true if the cached JSON snapshot exists and is reference-equal
   * to the given value. Does not trigger a recompute.
   */
  hasCache(value) {
    return this.#cachedJson !== void 0 && this.#cachedJson === value;
  }
  /**
   * Return a JSON-compatible snapshot of this Live node and its children.
   * LiveObject values become plain objects, LiveList values become arrays,
   * and LiveMap values also become plain objects (not Map instances).
   * The result is cached and only recomputed when the contents change.
   */
  toJSON() {
    if (this.#cachedJson === void 0) {
      this.#cachedJson = this._toJSON();
    }
    return this.#cachedJson;
  }
};
var LiveRegister = class _LiveRegister extends AbstractCrdt {
  static {
    __name(this, "_LiveRegister");
  }
  #data;
  constructor(data) {
    super();
    this.#data = data;
  }
  get data() {
    return this.#data;
  }
  /** @internal */
  static _deserialize([id2, item], _parentToChildren, pool) {
    const register = new _LiveRegister(item.data);
    register._attach(id2, pool);
    return register;
  }
  /** @internal */
  _toOps(parentId, parentKey) {
    if (this._id === void 0) {
      throw new Error(
        "Cannot serialize register if parentId or parentKey is undefined"
      );
    }
    return [
      {
        type: OpCode.CREATE_REGISTER,
        id: this._id,
        parentId,
        parentKey,
        data: this.data
      }
    ];
  }
  /** @internal */
  _serialize() {
    if (this.parent.type !== "HasParent") {
      throw new Error("Cannot serialize LiveRegister if parent is missing");
    }
    return {
      type: CrdtType.REGISTER,
      parentId: nn(this.parent.node._id, "Parent node expected to have ID"),
      parentKey: this.parent.key,
      data: this.data
    };
  }
  /** @internal */
  _attachChild(_op) {
    throw new Error("Method not implemented.");
  }
  /** @internal */
  _detachChild(_crdt) {
    throw new Error("Method not implemented.");
  }
  /** @internal */
  _apply(op, isLocal) {
    return super._apply(op, isLocal);
  }
  /** @internal */
  _toTreeNode(key) {
    return {
      type: "Json",
      id: this._id ?? nanoid(),
      key,
      payload: this.#data
    };
  }
  /** @internal */
  _toJSON() {
    return this.#data;
  }
  clone() {
    return deepClone(this.data);
  }
};
function childNodeLt(a, b) {
  return a._parentPos < b._parentPos;
}
__name(childNodeLt, "childNodeLt");
var LiveList = class _LiveList extends AbstractCrdt {
  static {
    __name(this, "_LiveList");
  }
  #items;
  #implicitlyDeletedItems;
  constructor(items) {
    super();
    this.#implicitlyDeletedItems = /* @__PURE__ */ new WeakSet();
    const nodes = [];
    let lastPos;
    for (const item of items) {
      const pos = makePosition(lastPos);
      const node = lsonToLiveNode(item);
      node._setParentLink(this, pos);
      nodes.push(node);
      lastPos = pos;
    }
    this.#items = SortedList.fromAlreadySorted(nodes, childNodeLt);
  }
  /** @internal */
  static _deserialize([id2, _], parentToChildren, pool) {
    const list2 = new _LiveList([]);
    list2._attach(id2, pool);
    const children2 = parentToChildren.get(id2);
    if (children2 === void 0) {
      return list2;
    }
    for (const node of children2) {
      const crdt = node[1];
      const child = deserialize(node, parentToChildren, pool);
      child._setParentLink(list2, crdt.parentKey);
      list2.#insert(child);
    }
    return list2;
  }
  /**
   * @internal
   * Serializes this list (and its children) into Create ops. Each child's
   * create is tagged with the "set" intent (in the loop below) so that a list
   * created and immediately mutated doesn't transiently re-show its initial
   * items (flicker, https://github.com/liveblocks/liveblocks/pull/1177).
   *
   * This is quite unintuitive and should disappear as soon as we introduce an
   * explicit LiveList.Set operation.
   */
  _toOps(parentId, parentKey) {
    if (this._id === void 0) {
      throw new Error("Cannot serialize item is not attached");
    }
    const ops = [];
    const op = {
      id: this._id,
      type: OpCode.CREATE_LIST,
      parentId,
      parentKey
    };
    ops.push(op);
    for (const item of this.#items) {
      const parentKey2 = item._getParentKeyOrThrow();
      const childOps = addIntentToRootOp(
        item._toOps(this._id, parentKey2),
        "set"
      );
      for (const childOp of childOps) {
        ops.push(childOp);
      }
    }
    return ops;
  }
  /**
   * Inserts a new child into the list in the correct location (binary search
   * finds correct position efficiently). Returns the insertion index.
   */
  #insert(childNode) {
    const index2 = this.#items.add(childNode);
    this.invalidate();
    return index2;
  }
  /**
   * Updates an item's position and repositions it in the sorted list.
   * Encapsulates the remove -> mutate -> add cycle needed when changing sort keys.
   *
   * IMPORTANT: Item must exist in this list. List count remains unchanged.
   */
  #updateItemPosition(item, newKey) {
    item._setParentLink(this, newKey);
    this.#items.reposition(item);
    this.invalidate();
  }
  /**
   * Updates an item's position by index. Safer than #updateItemPosition when you have
   * an index, as it ensures the item exists and is from this list.
   */
  #updateItemPositionAt(index2, newKey) {
    const item = nn(this.#items.at(index2));
    this.#updateItemPosition(item, newKey);
  }
  /** @internal */
  _indexOfPosition(position) {
    return this.#items.findIndex(
      (item) => item._getParentKeyOrThrow() === position
    );
  }
  /**
   * The opId of this list's still-unacknowledged "set" op at the given position,
   * or undefined if none. Derived from the room's unacknowledgedOps (the single
   * source of truth) rather than tracked in a per-instance map. The pool's
   * position index already scopes to this list's (parentId, position); the last
   * match wins, matching the original last-write-wins map semantics.
   */
  #unacknowledgedSetOpIdAt(position) {
    if (this._pool === void 0 || this._id === void 0) {
      return void 0;
    }
    let opId;
    for (const op of this._pool.unacknowledgedOps.getByParentIdAndKey(
      this._id,
      position
    )) {
      if (op.intent === "set") {
        opId = op.opId;
      }
    }
    return opId;
  }
  /** @internal */
  _attach(id2, pool) {
    super._attach(id2, pool);
    for (const item of this.#items) {
      item._attach(pool.generateId(), pool);
    }
  }
  /** @internal */
  _detach() {
    super._detach();
    for (const item of this.#items) {
      item._detach();
    }
  }
  #applySetRemote(op) {
    if (this._pool === void 0) {
      throw new Error("Can't attach child if managed pool is not present");
    }
    const { id: id2, parentKey: key } = op;
    const child = creationOpToLiveNode(op);
    child._attach(id2, this._pool);
    child._setParentLink(this, key);
    const deletedId = op.deletedId;
    const indexOfItemWithSamePosition = this._indexOfPosition(key);
    if (indexOfItemWithSamePosition !== -1) {
      const itemWithSamePosition = nn(
        this.#items.removeAt(indexOfItemWithSamePosition)
      );
      if (itemWithSamePosition._id === deletedId) {
        itemWithSamePosition._detach();
        this.#items.add(child);
        return {
          modified: makeUpdate(this, [
            setDelta(indexOfItemWithSamePosition, child)
          ]),
          reverse: []
        };
      } else {
        this.#implicitlyDeletedItems.add(itemWithSamePosition);
        this.#items.remove(itemWithSamePosition);
        this.#items.add(child);
        const delta = [
          setDelta(indexOfItemWithSamePosition, child)
        ];
        const deleteDelta2 = this.#detachItemAssociatedToSetOperation(
          op.deletedId
        );
        if (deleteDelta2) {
          delta.push(deleteDelta2);
        }
        return {
          modified: makeUpdate(this, delta),
          reverse: []
        };
      }
    } else {
      const updates = [];
      const deleteDelta2 = this.#detachItemAssociatedToSetOperation(
        op.deletedId
      );
      if (deleteDelta2) {
        updates.push(deleteDelta2);
      }
      this.#insert(child);
      updates.push(insertDelta(this._indexOfPosition(key), child));
      return {
        reverse: [],
        modified: makeUpdate(this, updates)
      };
    }
  }
  #applySetAck(op) {
    if (this._pool === void 0) {
      throw new Error("Can't attach child if managed pool is not present");
    }
    const delta = [];
    const deletedDelta = this.#detachItemAssociatedToSetOperation(op.deletedId);
    if (deletedDelta) {
      delta.push(deletedDelta);
    }
    const unacknowledgedOpId = this.#unacknowledgedSetOpIdAt(op.parentKey);
    if (unacknowledgedOpId !== void 0 && unacknowledgedOpId !== op.opId) {
      return delta.length === 0 ? { modified: false } : { modified: makeUpdate(this, delta), reverse: [] };
    }
    const indexOfItemWithSamePosition = this._indexOfPosition(op.parentKey);
    const existingItem = this.#items.find((item) => item._id === op.id);
    if (existingItem !== void 0) {
      if (existingItem._parentKey === op.parentKey) {
        return {
          modified: delta.length > 0 ? makeUpdate(this, delta) : false,
          reverse: []
        };
      }
      if (indexOfItemWithSamePosition !== -1) {
        const itemAtPosition = nn(
          this.#items.removeAt(indexOfItemWithSamePosition)
        );
        this.#implicitlyDeletedItems.add(itemAtPosition);
        delta.push(deleteDelta(indexOfItemWithSamePosition, itemAtPosition));
      }
      const prevIndex = this.#items.findIndex((item) => item === existingItem);
      this.#updateItemPosition(existingItem, op.parentKey);
      const newIndex = this.#items.findIndex((item) => item === existingItem);
      if (newIndex !== prevIndex) {
        delta.push(moveDelta(prevIndex, newIndex, existingItem));
      }
      return {
        modified: delta.length > 0 ? makeUpdate(this, delta) : false,
        reverse: []
      };
    } else {
      const orphan = this._pool.getNode(op.id);
      if (orphan && this.#implicitlyDeletedItems.has(orphan)) {
        orphan._setParentLink(this, op.parentKey);
        this.#implicitlyDeletedItems.delete(orphan);
        const recreatedItemIndex = this.#insert(orphan);
        return {
          modified: makeUpdate(this, [
            // If there is an item at this position, update is a set, else it's an insert
            indexOfItemWithSamePosition === -1 ? insertDelta(recreatedItemIndex, orphan) : setDelta(recreatedItemIndex, orphan),
            ...delta
          ]),
          reverse: []
        };
      } else {
        if (indexOfItemWithSamePosition !== -1) {
          const displaced = nn(
            this.#items.removeAt(indexOfItemWithSamePosition)
          );
          this.#implicitlyDeletedItems.add(displaced);
        }
        const { newItem, newIndex } = this.#createAttachItemAndSort(
          op,
          op.parentKey
        );
        return {
          modified: makeUpdate(this, [
            // If there is an item at this position, update is a set, else it's an insert
            indexOfItemWithSamePosition === -1 ? insertDelta(newIndex, newItem) : setDelta(newIndex, newItem),
            ...delta
          ]),
          reverse: []
        };
      }
    }
  }
  /**
   * Returns the update delta of the deletion or null
   */
  #detachItemAssociatedToSetOperation(deletedId) {
    if (deletedId === void 0 || this._pool === void 0) {
      return null;
    }
    const deletedItem = this._pool.getNode(deletedId);
    if (deletedItem === void 0) {
      return null;
    }
    const result = this._detachChild(deletedItem);
    if (result.modified === false) {
      return null;
    }
    return result.modified.updates[0];
  }
  #applyRemoteInsert(op) {
    if (this._pool === void 0) {
      throw new Error("Can't attach child if managed pool is not present");
    }
    const key = asPos(op.parentKey);
    const existingItemIndex = this._indexOfPosition(key);
    if (existingItemIndex !== -1) {
      this.#shiftItemPosition(existingItemIndex, key);
    }
    const { newItem, newIndex } = this.#createAttachItemAndSort(op, key);
    const bumpDeltas = this.#bumpUnackedPushesAbove(key);
    return {
      modified: makeUpdate(this, [
        insertDelta(newIndex, newItem),
        ...bumpDeltas
      ]),
      reverse: []
    };
  }
  /**
   * This list's own still-unacknowledged pushed items (their `intent: "push"`
   * Create op is still pending in the room's unacknowledgedOps). Derived from
   * the single source of truth, so an item drops out the instant its op is
   * acked, with no per-instance membership to leak. Yielded in push order.
   *
   * Excludes ops that may already be stored on the server (they were in
   * flight when a connection died, so their fate is unknown): the bump
   * prediction assumes the server has not processed the op yet, which is only
   * guaranteed for ops sent on the current connection. For these excluded
   * ops, the server's (re-)ack states the authoritative position; predicting
   * locally could produce a wrong position that no ack would correct.
   *
   * Restricted to items currently in `#items`: a pushed node whose op is still
   * pending may have been pulled out of the list (e.g. implicitly deleted by a
   * remote set, or removed by an undo) while still living in the pool, and such
   * a node must not be repositioned.
   */
  *#unackedPushNodes() {
    if (this._pool === void 0 || this._id === void 0) {
      return;
    }
    for (const op of this._pool.unacknowledgedOps.getByParentId(this._id)) {
      if (op.intent !== "push") {
        continue;
      }
      if (this._pool.unacknowledgedOps.isPossiblyStored(op.opId)) {
        continue;
      }
      const node = this._pool.getNode(op.id);
      if (node !== void 0 && this.#items.includes(node)) {
        yield node;
      }
    }
  }
  /**
   * Optimistic no-flip for pushed items. When a remote op lands at or below my
   * still-unacked pushed items, those items must end up *after* it: FIFO plus
   * the room's serial processing guarantee the remote was processed first, so
   * my unacked pushes belong behind it. Re-chain the whole unacked-push block,
   * in push order, to sit after the highest confirmed sibling, so it keeps
   * rendering as a contiguous tail instead of getting interleaved. Local-only;
   * the real acks overwrite these keys with the (identical) server keys.
   */
  #bumpUnackedPushesAbove(remoteKey) {
    const pending = new Set(this.#unackedPushNodes());
    if (pending.size === 0) {
      return [];
    }
    let minPending;
    for (const node of pending) {
      const pos = node._parentPos;
      if (minPending === void 0 || pos < minPending) {
        minPending = pos;
      }
    }
    if (remoteKey < nn(minPending)) {
      return [];
    }
    let base;
    for (const item of this.#items) {
      if (!pending.has(item)) {
        base = item._parentPos;
      }
    }
    const deltas = [];
    for (const node of pending) {
      const previousIndex = this.#items.findIndex((item) => item === node);
      base = makePosition(base);
      this.#updateItemPosition(node, base);
      const index2 = this.#items.findIndex((item) => item === node);
      if (index2 !== previousIndex) {
        deltas.push(moveDelta(previousIndex, index2, node));
      }
    }
    return deltas;
  }
  #applyInsertAck(op) {
    const existingItem = this.#items.find((item) => item._id === op.id);
    const key = asPos(op.parentKey);
    const itemIndexAtPosition = this._indexOfPosition(key);
    if (existingItem) {
      if (existingItem._parentKey === key) {
        return {
          modified: false
        };
      } else {
        const oldPositionIndex = this.#items.findIndex(
          (item) => item === existingItem
        );
        if (itemIndexAtPosition !== -1) {
          this.#shiftItemPosition(itemIndexAtPosition, key);
        }
        this.#updateItemPosition(existingItem, key);
        const newIndex = this._indexOfPosition(key);
        if (newIndex === oldPositionIndex) {
          return { modified: false };
        }
        return {
          modified: makeUpdate(this, [
            moveDelta(oldPositionIndex, newIndex, existingItem)
          ]),
          reverse: []
        };
      }
    } else {
      const orphan = nn(this._pool).getNode(op.id);
      if (orphan && this.#implicitlyDeletedItems.has(orphan)) {
        orphan._setParentLink(this, key);
        this.#implicitlyDeletedItems.delete(orphan);
        this.#insert(orphan);
        const newIndex = this._indexOfPosition(key);
        return {
          modified: makeUpdate(this, [insertDelta(newIndex, orphan)]),
          reverse: []
        };
      } else {
        if (itemIndexAtPosition !== -1) {
          this.#shiftItemPosition(itemIndexAtPosition, key);
        }
        const { newItem, newIndex } = this.#createAttachItemAndSort(op, key);
        return {
          modified: makeUpdate(this, [insertDelta(newIndex, newItem)]),
          reverse: []
        };
      }
    }
  }
  #applyInsertUndoRedo(op) {
    const { id: id2, parentKey: key } = op;
    const child = creationOpToLiveNode(op);
    if (this._pool?.getNode(id2) !== void 0) {
      return { modified: false };
    }
    child._attach(id2, nn(this._pool));
    child._setParentLink(this, key);
    const existingItemIndex = this._indexOfPosition(key);
    let newKey = key;
    if (existingItemIndex !== -1) {
      const before2 = this.#items.at(existingItemIndex)?._parentPos;
      const after2 = this.#items.at(existingItemIndex + 1)?._parentPos;
      newKey = makePosition(before2, after2);
      child._setParentLink(this, newKey);
    }
    this.#insert(child);
    const newIndex = this._indexOfPosition(newKey);
    return {
      modified: makeUpdate(this, [insertDelta(newIndex, child)]),
      reverse: [{ type: OpCode.DELETE_CRDT, id: id2 }]
    };
  }
  #applySetUndoRedo(op) {
    const { id: id2, parentKey: key } = op;
    const child = creationOpToLiveNode(op);
    if (this._pool?.getNode(id2) !== void 0) {
      return { modified: false };
    }
    const indexOfItemWithSameKey = this._indexOfPosition(key);
    child._attach(id2, nn(this._pool));
    child._setParentLink(this, key);
    const newKey = key;
    if (indexOfItemWithSameKey !== -1) {
      const existingItem = this.#items.at(indexOfItemWithSameKey);
      existingItem._detach();
      this.#items.remove(existingItem);
      this.#items.add(child);
      const reverse = addIntentToRootOp(
        existingItem._toOps(nn(this._id), key),
        "set",
        op.id
      );
      const delta = [setDelta(indexOfItemWithSameKey, child)];
      const deletedDelta = this.#detachItemAssociatedToSetOperation(
        op.deletedId
      );
      if (deletedDelta) {
        delta.push(deletedDelta);
      }
      return {
        modified: makeUpdate(this, delta),
        reverse
      };
    } else {
      this.#insert(child);
      this.#detachItemAssociatedToSetOperation(op.deletedId);
      const newIndex = this._indexOfPosition(newKey);
      return {
        reverse: [{ type: OpCode.DELETE_CRDT, id: id2 }],
        modified: makeUpdate(this, [insertDelta(newIndex, child)])
      };
    }
  }
  /** @internal */
  _attachChild(op, source) {
    if (this._pool === void 0) {
      throw new Error("Can't attach child if managed pool is not present");
    }
    let result;
    if (op.intent === "set") {
      if (source === 1) {
        result = this.#applySetRemote(op);
      } else if (source === 2) {
        result = this.#applySetAck(op);
      } else {
        result = this.#applySetUndoRedo(op);
      }
    } else {
      if (source === 1) {
        result = this.#applyRemoteInsert(op);
      } else if (source === 2) {
        result = this.#applyInsertAck(op);
      } else {
        result = this.#applyInsertUndoRedo(op);
      }
    }
    if (result.modified !== false) {
      this.invalidate();
    }
    return result;
  }
  /** @internal */
  _detachChild(child) {
    if (child) {
      const parentKey = nn(child._parentKey);
      const reverse = child._toOps(nn(this._id), parentKey);
      const indexToDelete = this.#items.findIndex((item) => item === child);
      if (indexToDelete === -1) {
        return {
          modified: false
        };
      }
      const previousNode = this.#items.at(indexToDelete);
      this.#items.remove(child);
      this.invalidate();
      child._detach();
      return {
        modified: makeUpdate(this, [deleteDelta(indexToDelete, previousNode)]),
        reverse
      };
    }
    return { modified: false };
  }
  #applySetChildKeyRemote(newKey, child) {
    if (this.#implicitlyDeletedItems.has(child)) {
      this.#implicitlyDeletedItems.delete(child);
      child._setParentLink(this, newKey);
      const newIndex = this.#insert(child);
      return {
        modified: makeUpdate(this, [insertDelta(newIndex, child)]),
        reverse: []
      };
    }
    const previousKey = child._parentKey;
    if (newKey === previousKey) {
      return {
        modified: false
      };
    }
    const existingItemIndex = this._indexOfPosition(newKey);
    if (existingItemIndex === -1) {
      const previousIndex = this.#items.findIndex((item) => item === child);
      this.#updateItemPosition(child, newKey);
      const newIndex = this.#items.findIndex((item) => item === child);
      if (newIndex === previousIndex) {
        return {
          modified: false
        };
      }
      return {
        modified: makeUpdate(this, [moveDelta(previousIndex, newIndex, child)]),
        reverse: []
      };
    } else {
      this.#updateItemPositionAt(
        existingItemIndex,
        makePosition(newKey, this.#items.at(existingItemIndex + 1)?._parentPos)
      );
      const previousIndex = this.#items.findIndex((item) => item === child);
      this.#updateItemPosition(child, newKey);
      const newIndex = this.#items.findIndex((item) => item === child);
      if (newIndex === previousIndex) {
        return {
          modified: false
        };
      }
      return {
        modified: makeUpdate(this, [moveDelta(previousIndex, newIndex, child)]),
        reverse: []
      };
    }
  }
  #applySetChildKeyAck(newKey, child) {
    const previousKey = nn(child._parentKey);
    if (this.#implicitlyDeletedItems.has(child)) {
      const existingItemIndex = this._indexOfPosition(newKey);
      this.#implicitlyDeletedItems.delete(child);
      if (existingItemIndex !== -1) {
        const existingItem = this.#items.at(existingItemIndex);
        existingItem._setParentLink(
          this,
          makePosition(
            newKey,
            this.#items.at(existingItemIndex + 1)?._parentPos
          )
        );
        this.#items.reposition(existingItem);
      }
      child._setParentLink(this, newKey);
      const newIndex = this.#insert(child);
      return {
        modified: makeUpdate(this, [insertDelta(newIndex, child)]),
        reverse: []
      };
    } else {
      if (newKey === previousKey) {
        return {
          modified: false
        };
      }
      const previousIndex = this.#items.findIndex((item) => item === child);
      const existingItemIndex = this._indexOfPosition(newKey);
      if (existingItemIndex !== -1) {
        this.#updateItemPositionAt(
          existingItemIndex,
          makePosition(
            newKey,
            this.#items.at(existingItemIndex + 1)?._parentPos
          )
        );
      }
      this.#updateItemPosition(child, newKey);
      const newIndex = this.#items.findIndex((item) => item === child);
      if (previousIndex === newIndex) {
        return {
          modified: false
        };
      } else {
        return {
          modified: makeUpdate(this, [
            moveDelta(previousIndex, newIndex, child)
          ]),
          reverse: []
        };
      }
    }
  }
  #applySetChildKeyUndoRedo(newKey, child) {
    const previousKey = nn(child._parentKey);
    const previousIndex = this.#items.findIndex((item) => item === child);
    const existingItemIndex = this._indexOfPosition(newKey);
    let actualNewKey = newKey;
    if (existingItemIndex !== -1) {
      actualNewKey = makePosition(
        newKey,
        this.#items.at(existingItemIndex + 1)?._parentPos
      );
    }
    this.#updateItemPosition(child, actualNewKey);
    const newIndex = this.#items.findIndex((item) => item === child);
    if (previousIndex === newIndex) {
      return {
        modified: false
      };
    }
    return {
      modified: makeUpdate(this, [moveDelta(previousIndex, newIndex, child)]),
      reverse: [
        {
          type: OpCode.SET_PARENT_KEY,
          id: nn(child._id),
          parentKey: previousKey
        }
      ]
    };
  }
  /** @internal */
  _setChildKey(newKey, child, source) {
    if (source === 1) {
      return this.#applySetChildKeyRemote(newKey, child);
    } else if (source === 2) {
      return this.#applySetChildKeyAck(newKey, child);
    } else {
      return this.#applySetChildKeyUndoRedo(newKey, child);
    }
  }
  /** @internal */
  _apply(op, isLocal) {
    return super._apply(op, isLocal);
  }
  /** @internal */
  _serialize() {
    if (this.parent.type !== "HasParent") {
      throw new Error("Cannot serialize LiveList if parent is missing");
    }
    return {
      type: CrdtType.LIST,
      parentId: nn(this.parent.node._id, "Parent node expected to have ID"),
      parentKey: this.parent.key
    };
  }
  /**
   * Returns the number of elements.
   */
  get length() {
    return this.#items.length;
  }
  /**
   * Adds one element to the end of the LiveList.
   * @param element The element to add to the end of the LiveList.
   */
  push(element) {
    return this.#injectAt(element, this.length, "push");
  }
  /**
   * Inserts one element at a specified index.
   * @param element The element to insert.
   * @param index The index at which you want to insert the element.
   */
  insert(element, index2) {
    return this.#injectAt(element, index2, "insert");
  }
  /**
   * Shared implementation of `insert` and `push`. A `"push"` intent leaves the
   * client-computed position untouched (so optimistic rendering is unchanged),
   * but tags the Op so the server appends it to the true end of the list
   * instead of resolving its position against the client's stale view.
   */
  #injectAt(element, index2, intent) {
    this._pool?.assertStorageIsWritable();
    if (index2 < 0 || index2 > this.#items.length) {
      throw new Error(
        `Cannot insert list item at index "${index2}". index should be between 0 and ${this.#items.length}`
      );
    }
    const before2 = this.#items.at(index2 - 1)?._parentPos;
    const after2 = this.#items.at(index2)?._parentPos;
    const position = makePosition(before2, after2);
    const value = lsonToLiveNode(element);
    value._setParentLink(this, position);
    this.#insert(value);
    if (this._pool && this._id) {
      const id2 = this._pool.generateId();
      value._attach(id2, this._pool);
      const ops = value._toOpsWithOpId(this._id, position, this._pool);
      this._pool.dispatch(
        intent === "push" ? addIntentToRootOp(ops, "push") : ops,
        [{ type: OpCode.DELETE_CRDT, id: id2 }],
        /* @__PURE__ */ new Map([
          [this._id, makeUpdate(this, [insertDelta(index2, value)])]
        ])
      );
    }
  }
  /**
   * Move one element from one index to another.
   * @param index The index of the element to move
   * @param targetIndex The index where the element should be after moving.
   */
  move(index2, targetIndex) {
    this._pool?.assertStorageIsWritable();
    if (targetIndex < 0) {
      throw new Error("targetIndex cannot be less than 0");
    }
    if (targetIndex >= this.#items.length) {
      throw new Error(
        "targetIndex cannot be greater or equal than the list length"
      );
    }
    if (index2 < 0) {
      throw new Error("index cannot be less than 0");
    }
    if (index2 >= this.#items.length) {
      throw new Error("index cannot be greater or equal than the list length");
    }
    let beforePosition = null;
    let afterPosition = null;
    if (index2 < targetIndex) {
      afterPosition = targetIndex === this.#items.length - 1 ? void 0 : this.#items.at(targetIndex + 1)?._parentPos;
      beforePosition = this.#items.at(targetIndex)._parentPos;
    } else {
      afterPosition = this.#items.at(targetIndex)._parentPos;
      beforePosition = targetIndex === 0 ? void 0 : this.#items.at(targetIndex - 1)?._parentPos;
    }
    const position = makePosition(beforePosition, afterPosition);
    const item = this.#items.at(index2);
    const previousPosition = item._getParentKeyOrThrow();
    this.#updateItemPositionAt(index2, position);
    if (this._pool && this._id) {
      const storageUpdates = /* @__PURE__ */ new Map([
        [this._id, makeUpdate(this, [moveDelta(index2, targetIndex, item)])]
      ]);
      this._pool.dispatch(
        [
          {
            type: OpCode.SET_PARENT_KEY,
            id: nn(item._id),
            opId: this._pool.generateOpId(),
            parentKey: position
          }
        ],
        [
          {
            type: OpCode.SET_PARENT_KEY,
            id: nn(item._id),
            parentKey: previousPosition
          }
        ],
        storageUpdates
      );
    }
  }
  /**
   * Deletes an element at the specified index
   * @param index The index of the element to delete
   */
  delete(index2) {
    this._pool?.assertStorageIsWritable();
    if (index2 < 0 || index2 >= this.#items.length) {
      throw new Error(
        `Cannot delete list item at index "${index2}". index should be between 0 and ${this.#items.length - 1}`
      );
    }
    const item = this.#items.at(index2);
    item._detach();
    this.#items.remove(item);
    this.invalidate();
    if (this._pool) {
      const childRecordId = item._id;
      if (childRecordId) {
        const storageUpdates = /* @__PURE__ */ new Map();
        storageUpdates.set(
          nn(this._id),
          makeUpdate(this, [deleteDelta(index2, item)])
        );
        this._pool.dispatch(
          [
            {
              id: childRecordId,
              opId: this._pool.generateOpId(),
              type: OpCode.DELETE_CRDT
            }
          ],
          item._toOps(nn(this._id), item._getParentKeyOrThrow()),
          storageUpdates
        );
      }
    }
  }
  clear() {
    this._pool?.assertStorageIsWritable();
    if (this._pool) {
      const ops = [];
      const reverseOps = [];
      const updateDelta = [];
      for (const item of this.#items) {
        item._detach();
        const childId = item._id;
        if (childId) {
          ops.push({
            type: OpCode.DELETE_CRDT,
            id: childId,
            opId: this._pool.generateOpId()
          });
          reverseOps.push(
            ...item._toOps(nn(this._id), item._getParentKeyOrThrow())
          );
          updateDelta.push(deleteDelta(0, item));
        }
      }
      this.#items.clear();
      this.invalidate();
      const storageUpdates = /* @__PURE__ */ new Map();
      storageUpdates.set(nn(this._id), makeUpdate(this, updateDelta));
      this._pool.dispatch(ops, reverseOps, storageUpdates);
    } else {
      for (const item of this.#items) {
        item._detach();
      }
      this.#items.clear();
      this.invalidate();
    }
  }
  set(index2, item) {
    this._pool?.assertStorageIsWritable();
    if (index2 < 0 || index2 >= this.#items.length) {
      throw new Error(
        `Cannot set list item at index "${index2}". index should be between 0 and ${this.#items.length - 1}`
      );
    }
    const existingItem = this.#items.at(index2);
    const position = existingItem._getParentKeyOrThrow();
    const existingId = existingItem._id;
    existingItem._detach();
    const value = lsonToLiveNode(item);
    value._setParentLink(this, position);
    this.#items.remove(existingItem);
    this.#items.add(value);
    this.invalidate();
    if (this._pool && this._id) {
      const id2 = this._pool.generateId();
      value._attach(id2, this._pool);
      const storageUpdates = /* @__PURE__ */ new Map();
      storageUpdates.set(this._id, makeUpdate(this, [setDelta(index2, value)]));
      const ops = addIntentToRootOp(
        value._toOpsWithOpId(this._id, position, this._pool),
        "set",
        existingId
      );
      const reverseOps = addIntentToRootOp(
        existingItem._toOps(this._id, position),
        "set",
        id2
      );
      this._pool.dispatch(ops, reverseOps, storageUpdates);
    }
  }
  #unwrap(node) {
    return liveNodeToLson(node);
  }
  /**
   * Tests whether all elements pass the test implemented by the provided function.
   * @param predicate Function to test for each element, taking two arguments (the element and its index).
   * @returns true if the predicate function returns a truthy value for every element. Otherwise, false.
   */
  every(predicate) {
    return this.#items.rawArray.every(
      (node, i) => predicate(this.#unwrap(node), i)
    );
  }
  /**
   * Creates an array with all elements that pass the test implemented by the provided function.
   * @param predicate Function to test each element of the LiveList. Return a value that coerces to true to keep the element, or to false otherwise.
   * @returns An array with the elements that pass the test.
   */
  filter(predicate) {
    const result = [];
    this.#items.rawArray.forEach((node, i) => {
      const item = this.#unwrap(node);
      if (predicate(item, i)) result.push(item);
    });
    return result;
  }
  /**
   * Returns the first element that satisfies the provided testing function.
   * @param predicate Function to execute on each value.
   * @returns The value of the first element in the LiveList that satisfies the provided testing function. Otherwise, undefined is returned.
   */
  find(predicate) {
    for (const [i, node] of this.#items.rawArray.entries()) {
      const item = this.#unwrap(node);
      if (predicate(item, i)) return item;
    }
    return void 0;
  }
  /**
   * Returns the index of the first element in the LiveList that satisfies the provided testing function.
   * @param predicate Function to execute on each value until the function returns true, indicating that the satisfying element was found.
   * @returns The index of the first element in the LiveList that passes the test. Otherwise, -1.
   */
  findIndex(predicate) {
    return this.#items.rawArray.findIndex(
      (node, i) => predicate(this.#unwrap(node), i)
    );
  }
  /**
   * Executes a provided function once for each element.
   * @param callbackfn Function to execute on each element.
   */
  forEach(callbackfn) {
    this.#items.rawArray.forEach(
      (node, i) => callbackfn(this.#unwrap(node), i)
    );
  }
  /**
   * Get the element at the specified index.
   * @param index The index on the element to get.
   * @returns The element at the specified index or undefined.
   */
  get(index2) {
    const item = this.#items.at(index2);
    return item !== void 0 ? this.#unwrap(item) : void 0;
  }
  /**
   * Returns the first index at which a given element can be found in the LiveList, or -1 if it is not present.
   * @param searchElement Element to locate.
   * @param fromIndex The index to start the search at.
   * @returns The first index of the element in the LiveList; -1 if not found.
   */
  indexOf(searchElement, fromIndex) {
    return this.#items.rawArray.findIndex(
      (node, i) => i >= (fromIndex ?? 0) && this.#unwrap(node) === searchElement
    );
  }
  /**
   * Returns the last index at which a given element can be found in the LiveList, or -1 if it is not present. The LiveList is searched backwards, starting at fromIndex.
   * @param searchElement Element to locate.
   * @param fromIndex The index at which to start searching backwards.
   * @returns The last index of the element in the LiveList; -1 if not found.
   */
  lastIndexOf(searchElement, fromIndex) {
    const arr = this.#items.rawArray;
    for (let i = fromIndex ?? arr.length - 1; i >= 0; i--) {
      if (this.#unwrap(arr[i]) === searchElement) return i;
    }
    return -1;
  }
  /**
   * Creates an array populated with the results of calling a provided function on every element.
   * @param callback Function that is called for every element.
   * @returns An array with each element being the result of the callback function.
   */
  map(callback) {
    return this.#items.rawArray.map(
      (node, i) => callback(this.#unwrap(node), i)
    );
  }
  /**
   * Tests whether at least one element in the LiveList passes the test implemented by the provided function.
   * @param predicate Function to test for each element.
   * @returns true if the callback function returns a truthy value for at least one element. Otherwise, false.
   */
  some(predicate) {
    return this.#items.rawArray.some(
      (node, i) => predicate(this.#unwrap(node), i)
    );
  }
  *[Symbol.iterator]() {
    for (const node of this.#items) {
      yield this.#unwrap(node);
    }
  }
  #createAttachItemAndSort(op, key) {
    const newItem = creationOpToLiveNode(op);
    newItem._attach(op.id, nn(this._pool));
    newItem._setParentLink(this, key);
    this.#insert(newItem);
    const newIndex = this._indexOfPosition(key);
    return { newItem, newIndex };
  }
  #shiftItemPosition(index2, key) {
    const shiftedPosition = makePosition(
      key,
      this.#items.length > index2 + 1 ? this.#items.at(index2 + 1)?._parentPos : void 0
    );
    this.#updateItemPositionAt(index2, shiftedPosition);
  }
  /** @internal */
  _toTreeNode(key) {
    const payload = [];
    let index2 = 0;
    for (const item of this.#items) {
      payload.push(item.toTreeNode(index2.toString()));
      index2++;
    }
    return {
      type: "LiveList",
      id: this._id ?? nanoid(),
      key,
      payload
    };
  }
  toJSON() {
    return super.toJSON();
  }
  /** @internal */
  _toJSON() {
    const result = Array.from(this.#items, (node) => node.toJSON());
    return freeze(result);
  }
  clone() {
    return new _LiveList(
      Array.from(this.#items, (item) => item.clone())
    );
  }
};
function makeUpdate(liveList, deltaUpdates) {
  return {
    node: liveList,
    type: "LiveList",
    updates: deltaUpdates
  };
}
__name(makeUpdate, "makeUpdate");
function setDelta(index2, item) {
  return {
    index: index2,
    type: "set",
    item: item instanceof LiveRegister ? item.data : item
  };
}
__name(setDelta, "setDelta");
function deleteDelta(index2, deletedNode) {
  return {
    type: "delete",
    index: index2,
    deletedItem: deletedNode instanceof LiveRegister ? deletedNode.data : deletedNode
  };
}
__name(deleteDelta, "deleteDelta");
function insertDelta(index2, item) {
  return {
    index: index2,
    type: "insert",
    item: item instanceof LiveRegister ? item.data : item
  };
}
__name(insertDelta, "insertDelta");
function moveDelta(previousIndex, index2, item) {
  return {
    type: "move",
    index: index2,
    item: item instanceof LiveRegister ? item.data : item,
    previousIndex
  };
}
__name(moveDelta, "moveDelta");
function addIntentToRootOp(ops, intent, deletedId) {
  return ops.map((op, index2) => {
    if (index2 === 0) {
      const firstOp = op;
      return { ...firstOp, intent, deletedId };
    } else {
      return op;
    }
  });
}
__name(addIntentToRootOp, "addIntentToRootOp");
var LiveMap = class _LiveMap extends AbstractCrdt {
  static {
    __name(this, "_LiveMap");
  }
  #map;
  #unacknowledgedSet;
  constructor(entries2) {
    super();
    this.#unacknowledgedSet = /* @__PURE__ */ new Map();
    if (entries2) {
      const mappedEntries = [];
      for (const [key, value] of entries2) {
        const node = lsonToLiveNode(value);
        node._setParentLink(this, key);
        mappedEntries.push([key, node]);
      }
      this.#map = new Map(mappedEntries);
    } else {
      this.#map = /* @__PURE__ */ new Map();
    }
  }
  /** @internal */
  _toOps(parentId, parentKey) {
    if (this._id === void 0) {
      throw new Error("Cannot serialize item is not attached");
    }
    const ops = [];
    const op = {
      id: this._id,
      type: OpCode.CREATE_MAP,
      parentId,
      parentKey
    };
    ops.push(op);
    for (const [key, value] of this.#map) {
      for (const childOp of value._toOps(this._id, key)) {
        ops.push(childOp);
      }
    }
    return ops;
  }
  /** @internal */
  static _deserialize([id2, _item], parentToChildren, pool) {
    const map = new _LiveMap();
    map._attach(id2, pool);
    const children2 = parentToChildren.get(id2);
    if (children2 === void 0) {
      return map;
    }
    for (const node of children2) {
      const crdt = node[1];
      const child = deserialize(node, parentToChildren, pool);
      child._setParentLink(map, crdt.parentKey);
      map.#map.set(crdt.parentKey, child);
      map.invalidate();
    }
    return map;
  }
  /** @internal */
  _attach(id2, pool) {
    super._attach(id2, pool);
    for (const [_key, value] of this.#map) {
      if (isLiveNode(value)) {
        value._attach(pool.generateId(), pool);
      }
    }
  }
  /** @internal */
  _attachChild(op, source) {
    if (this._pool === void 0) {
      throw new Error("Can't attach child if managed pool is not present");
    }
    const { id: id2, parentKey, opId } = op;
    const key = parentKey;
    const child = creationOpToLiveNode(op);
    if (this._pool.getNode(id2) !== void 0) {
      return { modified: false };
    }
    if (source === 2) {
      const lastUpdateOpId = this.#unacknowledgedSet.get(key);
      if (lastUpdateOpId === opId) {
        this.#unacknowledgedSet.delete(key);
        return { modified: false };
      } else if (lastUpdateOpId !== void 0) {
        return { modified: false };
      }
    } else if (source === 1) {
      this.#unacknowledgedSet.delete(key);
    }
    const previousValue = this.#map.get(key);
    let reverse;
    if (previousValue) {
      const thisId = nn(this._id);
      reverse = previousValue._toOps(thisId, key);
      previousValue._detach();
    } else {
      reverse = [{ type: OpCode.DELETE_CRDT, id: id2 }];
    }
    child._setParentLink(this, key);
    child._attach(id2, this._pool);
    this.#map.set(key, child);
    this.invalidate();
    return {
      modified: {
        node: this,
        type: "LiveMap",
        updates: { [key]: { type: "update" } }
      },
      reverse
    };
  }
  /** @internal */
  _detach() {
    super._detach();
    for (const item of this.#map.values()) {
      item._detach();
    }
  }
  /** @internal */
  _detachChild(child) {
    const id2 = nn(this._id);
    const parentKey = nn(child._parentKey);
    const reverse = child._toOps(id2, parentKey);
    for (const [key, value] of this.#map) {
      if (value === child) {
        this.#map.delete(key);
        this.invalidate();
      }
    }
    child._detach();
    const storageUpdate = {
      node: this,
      type: "LiveMap",
      updates: {
        [parentKey]: {
          type: "delete",
          deletedItem: liveNodeToLson(child)
        }
      }
    };
    return { modified: storageUpdate, reverse };
  }
  /** @internal */
  _serialize() {
    if (this.parent.type !== "HasParent") {
      throw new Error("Cannot serialize LiveMap if parent is missing");
    }
    return {
      type: CrdtType.MAP,
      parentId: nn(this.parent.node._id, "Parent node expected to have ID"),
      parentKey: this.parent.key
    };
  }
  /**
   * Returns a specified element from the LiveMap.
   * @param key The key of the element to return.
   * @returns The element associated with the specified key, or undefined if the key can't be found in the LiveMap.
   */
  get(key) {
    const value = this.#map.get(key);
    if (value === void 0) {
      return void 0;
    }
    return liveNodeToLson(value);
  }
  /**
   * Adds or updates an element with a specified key and a value.
   * @param key The key of the element to add. Should be a string.
   * @param value The value of the element to add. Should be serializable to JSON.
   */
  set(key, value) {
    this._pool?.assertStorageIsWritable();
    const oldValue = this.#map.get(key);
    if (oldValue) {
      oldValue._detach();
    }
    const item = lsonToLiveNode(value);
    item._setParentLink(this, key);
    this.#map.set(key, item);
    this.invalidate();
    if (this._pool && this._id) {
      const id2 = this._pool.generateId();
      item._attach(id2, this._pool);
      const storageUpdates = /* @__PURE__ */ new Map();
      storageUpdates.set(this._id, {
        node: this,
        type: "LiveMap",
        updates: { [key]: { type: "update" } }
      });
      const ops = item._toOpsWithOpId(this._id, key, this._pool);
      this.#unacknowledgedSet.set(key, nn(ops[0].opId));
      this._pool.dispatch(
        ops,
        oldValue ? oldValue._toOps(this._id, key) : [{ type: OpCode.DELETE_CRDT, id: id2 }],
        storageUpdates
      );
    }
  }
  /**
   * Returns the number of elements in the LiveMap.
   */
  get size() {
    return this.#map.size;
  }
  /**
   * Returns a boolean indicating whether an element with the specified key exists or not.
   * @param key The key of the element to test for presence.
   */
  has(key) {
    return this.#map.has(key);
  }
  /**
   * Removes the specified element by key.
   * @param key The key of the element to remove.
   * @returns true if an element existed and has been removed, or false if the element does not exist.
   */
  delete(key) {
    this._pool?.assertStorageIsWritable();
    const item = this.#map.get(key);
    if (item === void 0) {
      return false;
    }
    item._detach();
    this.#map.delete(key);
    this.invalidate();
    if (this._pool && item._id) {
      const thisId = nn(this._id);
      const storageUpdates = /* @__PURE__ */ new Map();
      storageUpdates.set(thisId, {
        node: this,
        type: "LiveMap",
        updates: {
          [key]: {
            type: "delete",
            deletedItem: liveNodeToLson(item)
          }
        }
      });
      this._pool.dispatch(
        [
          {
            type: OpCode.DELETE_CRDT,
            id: item._id,
            opId: this._pool.generateOpId()
          }
        ],
        item._toOps(thisId, key),
        storageUpdates
      );
    }
    return true;
  }
  /**
   * Returns a new Iterator object that contains the [key, value] pairs for each element.
   */
  entries() {
    const innerIterator = this.#map.entries();
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        const iteratorValue = innerIterator.next();
        if (iteratorValue.done) {
          return {
            done: true,
            value: void 0
          };
        }
        const entry = iteratorValue.value;
        const key = entry[0];
        const value = liveNodeToLson(iteratorValue.value[1]);
        return {
          value: [key, value]
        };
      }
    };
  }
  /**
   * Same function object as the initial value of the entries method.
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Returns a new Iterator object that contains the keys for each element.
   */
  keys() {
    return this.#map.keys();
  }
  /**
   * Returns a new Iterator object that contains the values for each element.
   */
  values() {
    const innerIterator = this.#map.values();
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        const iteratorValue = innerIterator.next();
        if (iteratorValue.done) {
          return {
            done: true,
            value: void 0
          };
        }
        const value = liveNodeToLson(iteratorValue.value);
        return { value };
      }
    };
  }
  /**
   * Executes a provided function once per each key/value pair in the Map object, in insertion order.
   * @param callback Function to execute for each entry in the map.
   */
  forEach(callback) {
    for (const entry of this) {
      callback(entry[1], entry[0], this);
    }
  }
  /** @internal */
  _toTreeNode(key) {
    return {
      type: "LiveMap",
      id: this._id ?? nanoid(),
      key,
      payload: Array.from(this.#map.entries()).map(
        ([key2, val]) => val.toTreeNode(key2)
      )
    };
  }
  toJSON() {
    return super.toJSON();
  }
  /** @internal */
  _toJSON() {
    const result = {};
    for (const [key, value] of this.#map) {
      result[key] = value.toJSON();
    }
    return freeze(result);
  }
  clone() {
    return new _LiveMap(
      Array.from(this.#map).map(([key, node]) => [key, node.clone()])
    );
  }
};
function deepLiveify(value, config) {
  if (Array.isArray(value)) {
    return new LiveList(value.map((v) => deepLiveify(v, config)));
  } else if (isPlainObject(value)) {
    const init2 = {};
    const locals = {};
    for (const key in value) {
      const val = value[key];
      if (val === void 0) {
        continue;
      }
      const subConfig = isPlainObject(config) ? config[key] : config;
      if (subConfig === false) {
        locals[key] = val;
      } else if (subConfig === "atomic") {
        init2[key] = val;
      } else {
        init2[key] = deepLiveify(val, subConfig);
      }
    }
    const lo = new LiveObject(init2);
    for (const key in locals) {
      lo.setLocal(key, locals[key]);
    }
    return lo;
  } else {
    return value;
  }
}
__name(deepLiveify, "deepLiveify");
function reconcile(live, json, config) {
  if (isLiveObject(live) && isPlainObject(json)) {
    return reconcileLiveObject(live, json, "full", config);
  } else if (isLiveList(live) && Array.isArray(json)) {
    return reconcileLiveList(live, json, config);
  } else if (isLiveMap(live) && isPlainObject(json)) {
    return reconcileLiveMap(live, config);
  } else {
    return deepLiveify(json, config);
  }
}
__name(reconcile, "reconcile");
function reconcileLiveMap(_liveMap, _config) {
  throw new Error("Reconciling a LiveMap is not supported yet");
}
__name(reconcileLiveMap, "reconcileLiveMap");
function reconcileLiveObject(liveObj, jsonObj, extent, config) {
  const currentKeys = liveObj.keys();
  for (const key in jsonObj) {
    currentKeys.delete(key);
    const newVal = jsonObj[key];
    if (newVal === void 0) {
      if (extent === "full") {
        liveObj.delete(key);
      }
      continue;
    }
    const subConfig = isPlainObject(config) ? config[key] : config;
    if (subConfig === false) {
      liveObj.setLocal(key, newVal);
    } else if (subConfig === "atomic") {
      const curVal = liveObj.get(key);
      if (curVal !== newVal) {
        liveObj.set(key, newVal);
      }
    } else {
      const curVal = liveObj.get(key);
      if (curVal === void 0) {
        liveObj.set(key, deepLiveify(newVal, subConfig));
      } else if (isLiveStructure(curVal)) {
        const next = reconcile(curVal, newVal, subConfig);
        if (next !== curVal) {
          liveObj.set(key, next);
        }
      } else if (curVal !== newVal) {
        liveObj.set(key, deepLiveify(newVal, subConfig));
      }
    }
  }
  if (extent === "full") {
    for (const key of currentKeys) {
      liveObj.delete(key);
    }
  }
  return liveObj;
}
__name(reconcileLiveObject, "reconcileLiveObject");
function reconcileLiveList(liveList, jsonArr, config) {
  const curLen = liveList.length;
  const newLen = jsonArr.length;
  for (let i = 0; i < Math.min(curLen, newLen); i++) {
    const curVal = liveList.get(i);
    const newVal = jsonArr[i];
    if (isLiveStructure(curVal)) {
      const next = reconcile(curVal, newVal, config);
      if (next !== curVal) {
        liveList.set(i, next);
      }
    } else if (curVal !== newVal) {
      liveList.set(i, deepLiveify(newVal, config));
    }
  }
  for (let i = curLen; i < newLen; i++) {
    liveList.push(deepLiveify(jsonArr[i], config));
  }
  for (let i = curLen - 1; i >= newLen; i--) {
    liveList.delete(i);
  }
  return liveList;
}
__name(reconcileLiveList, "reconcileLiveList");
var MAX_LIVE_OBJECT_SIZE = 128 * 1024;
var LiveObject = class _LiveObject extends AbstractCrdt {
  static {
    __name(this, "_LiveObject");
  }
  #synced;
  #local = /* @__PURE__ */ new Map();
  /**
   * Tracks unacknowledged local changes per property to preserve optimistic
   * updates. Maps property keys to their pending operation IDs.
   *
   * INVARIANT: Only locally-generated opIds are ever stored here. Remote opIds
   * are only compared against (to detect ACKs), never stored.
   *
   * When a local change is made, the opId is stored here. When a remote op
   * arrives for the same key:
   * - If no entry exists → apply remote op
   * - If opId matches → it's an ACK, clear the entry
   * - If opId differs → ignore remote op to preserve optimistic update
   */
  #unackedOpsByKey;
  /**
   * Enable or disable detection of too large LiveObjects.
   * When enabled, throws an error if LiveObject static data exceeds 128KB, which
   * is the maximum value the server will be able to accept.
   * By default, this behavior is disabled to avoid the runtime performance
   * overhead on every LiveObject.set() or LiveObject.update() call.
   *
   * @experimental
   */
  static detectLargeObjects = false;
  static #buildRootAndParentToChildren(nodes) {
    const parentToChildren = /* @__PURE__ */ new Map();
    let root2 = null;
    for (const node of nodes) {
      if (isRootStorageNode(node)) {
        root2 = node[1];
      } else {
        const crdt = node[1];
        const children2 = parentToChildren.get(crdt.parentId);
        if (children2 !== void 0) {
          children2.push(node);
        } else {
          parentToChildren.set(crdt.parentId, [node]);
        }
      }
    }
    if (root2 === null) {
      throw new Error("Root can't be null");
    }
    return [root2, parentToChildren];
  }
  /** @private Do not use this API directly */
  static _fromItems(nodes, pool) {
    const [root2, parentToChildren] = _LiveObject.#buildRootAndParentToChildren(nodes);
    return _LiveObject._deserialize(
      ["root", root2],
      parentToChildren,
      pool
    );
  }
  constructor(obj = {}) {
    super();
    this.#unackedOpsByKey = /* @__PURE__ */ new Map();
    const o = compactObject(obj);
    for (const key of Object.keys(o)) {
      const value = o[key];
      if (isLiveNode(value)) {
        value._setParentLink(this, key);
      }
    }
    this.#synced = new Map(Object.entries(o));
  }
  /** @internal */
  _toOps(parentId, parentKey) {
    if (this._id === void 0) {
      throw new Error("Cannot serialize item is not attached");
    }
    const ops = [];
    const op = {
      type: OpCode.CREATE_OBJECT,
      id: this._id,
      parentId,
      parentKey,
      data: {}
    };
    ops.push(op);
    for (const [key, value] of this.#synced) {
      if (isLiveNode(value)) {
        for (const childOp of value._toOps(this._id, key)) {
          ops.push(childOp);
        }
      } else {
        op.data[key] = value;
      }
    }
    return ops;
  }
  /** @internal */
  static _deserialize([id2, item], parentToChildren, pool) {
    const liveObj = new _LiveObject(item.data);
    liveObj._attach(id2, pool);
    return this._deserializeChildren(liveObj, parentToChildren, pool);
  }
  /** @internal */
  static _deserializeChildren(liveObj, parentToChildren, pool) {
    const children2 = parentToChildren.get(nn(liveObj._id));
    if (children2 === void 0) {
      return liveObj;
    }
    for (const node of children2) {
      const child = deserializeToLson(node, parentToChildren, pool);
      const crdt = node[1];
      if (isLiveStructure(child)) {
        child._setParentLink(liveObj, crdt.parentKey);
      }
      liveObj.#synced.set(crdt.parentKey, child);
      liveObj.invalidate();
    }
    return liveObj;
  }
  /** @internal */
  _attach(id2, pool) {
    super._attach(id2, pool);
    for (const [_key, value] of this.#synced) {
      if (isLiveNode(value)) {
        value._attach(pool.generateId(), pool);
      }
    }
  }
  /** @internal */
  _attachChild(op, source) {
    if (this._pool === void 0) {
      throw new Error("Can't attach child if managed pool is not present");
    }
    const { id: id2, opId, parentKey: key } = op;
    const child = creationOpToLson(op);
    if (this._pool.getNode(id2) !== void 0) {
      if (this.#unackedOpsByKey.get(key) === opId) {
        this.#unackedOpsByKey.delete(key);
      }
      return { modified: false };
    }
    if (source === 0) {
      this.#unackedOpsByKey.set(key, nn(opId));
    } else if (this.#unackedOpsByKey.get(key) === void 0) {
    } else if (this.#unackedOpsByKey.get(key) === opId) {
      this.#unackedOpsByKey.delete(key);
      return { modified: false };
    } else {
      return { modified: false };
    }
    const thisId = nn(this._id);
    const previousValue = this.#synced.get(key);
    let reverse;
    if (isLiveNode(previousValue)) {
      reverse = previousValue._toOps(thisId, key);
      previousValue._detach();
    } else if (previousValue === void 0) {
      reverse = [{ type: OpCode.DELETE_OBJECT_KEY, id: thisId, key }];
    } else {
      reverse = [
        {
          type: OpCode.UPDATE_OBJECT,
          id: thisId,
          data: { [key]: previousValue }
        }
      ];
    }
    this.#local.delete(key);
    this.#synced.set(key, child);
    this.invalidate();
    if (isLiveStructure(child)) {
      child._setParentLink(this, key);
      child._attach(id2, this._pool);
    }
    return {
      reverse,
      modified: {
        node: this,
        type: "LiveObject",
        updates: { [key]: { type: "update" } }
      }
    };
  }
  /** @internal */
  _detachChild(child) {
    if (child) {
      const id2 = nn(this._id);
      const parentKey = nn(child._parentKey);
      const reverse = child._toOps(id2, parentKey);
      const deletedItem = liveNodeToLson(child);
      for (const [key, value] of this.#synced) {
        if (value === child) {
          this.#synced.delete(key);
          this.invalidate();
        }
      }
      child._detach();
      const storageUpdate = {
        node: this,
        type: "LiveObject",
        updates: {
          [parentKey]: { type: "delete", deletedItem }
        }
      };
      return { modified: storageUpdate, reverse };
    }
    return { modified: false };
  }
  /** @internal */
  _detach() {
    super._detach();
    for (const value of this.#synced.values()) {
      if (isLiveNode(value)) {
        value._detach();
      }
    }
  }
  /** @internal */
  _apply(op, isLocal) {
    if (op.type === OpCode.UPDATE_OBJECT) {
      return this.#applyUpdate(op, isLocal);
    } else if (op.type === OpCode.DELETE_OBJECT_KEY) {
      return this.#applyDeleteObjectKey(op, isLocal);
    }
    return super._apply(op, isLocal);
  }
  /** @internal */
  _serialize() {
    const data = {};
    for (const [key, value] of this.#synced) {
      if (!isLiveNode(value)) {
        data[key] = value;
      }
    }
    if (this.parent.type === "HasParent" && this.parent.node._id) {
      return {
        type: CrdtType.OBJECT,
        parentId: this.parent.node._id,
        parentKey: this.parent.key,
        data
      };
    } else {
      return {
        type: CrdtType.OBJECT,
        data
      };
    }
  }
  #applyUpdate(op, isLocal) {
    let isModified = false;
    const id2 = nn(this._id);
    const reverse = [];
    const reverseUpdate = {
      type: OpCode.UPDATE_OBJECT,
      id: id2,
      data: {}
    };
    for (const key in op.data) {
      const oldValue = this.#synced.get(key);
      if (isLiveNode(oldValue)) {
        for (const childOp of oldValue._toOps(id2, key)) {
          reverse.push(childOp);
        }
        oldValue._detach();
      } else if (oldValue !== void 0) {
        reverseUpdate.data[key] = oldValue;
      } else if (oldValue === void 0) {
        reverse.push({ type: OpCode.DELETE_OBJECT_KEY, id: id2, key });
      }
    }
    const updateDelta = {};
    for (const key in op.data) {
      const value = op.data[key];
      if (value === void 0) {
        continue;
      }
      if (isLocal) {
        this.#unackedOpsByKey.set(key, nn(op.opId));
      } else if (this.#unackedOpsByKey.get(key) === void 0) {
        isModified = true;
      } else if (this.#unackedOpsByKey.get(key) === op.opId) {
        this.#unackedOpsByKey.delete(key);
        continue;
      } else {
        continue;
      }
      const oldValue = this.#synced.get(key);
      if (isLiveNode(oldValue)) {
        oldValue._detach();
      }
      isModified = true;
      updateDelta[key] = { type: "update" };
      this.#local.delete(key);
      this.#synced.set(key, value);
      this.invalidate();
    }
    if (Object.keys(reverseUpdate.data).length !== 0) {
      reverse.unshift(reverseUpdate);
    }
    return isModified ? {
      modified: {
        node: this,
        type: "LiveObject",
        updates: updateDelta
      },
      reverse
    } : { modified: false };
  }
  #applyDeleteObjectKey(op, isLocal) {
    const key = op.key;
    const oldValue = this.#synced.get(key);
    if (oldValue === void 0) {
      return { modified: false };
    }
    if (!isLocal && this.#unackedOpsByKey.get(key) !== void 0) {
      return { modified: false };
    }
    const id2 = nn(this._id);
    let reverse = [];
    if (isLiveNode(oldValue)) {
      reverse = oldValue._toOps(id2, op.key);
      oldValue._detach();
    } else if (oldValue !== void 0) {
      reverse = [
        {
          type: OpCode.UPDATE_OBJECT,
          id: id2,
          data: { [key]: oldValue }
        }
      ];
    }
    this.#local.delete(key);
    this.#synced.delete(key);
    this.invalidate();
    return {
      modified: {
        node: this,
        type: "LiveObject",
        updates: {
          [op.key]: { type: "delete", deletedItem: oldValue }
        }
      },
      reverse
    };
  }
  /** @private */
  keys() {
    const result = new Set(this.#synced.keys());
    for (const key of this.#local.keys()) {
      result.add(key);
    }
    return result;
  }
  /**
   * Adds or updates a property with a specified key and a value.
   * @param key The key of the property to add
   * @param value The value of the property to add
   */
  set(key, value) {
    this.update({ [key]: value });
  }
  /**
   * @experimental
   *
   * Sets a local-only property that is not synchronized over the wire. The
   * value will be visible via get(), and toJSON() on this client only. Other
   * clients and the server will see `undefined` for this key.
   *
   * Caveat: this method will not add changes to the undo/redo stack.
   */
  setLocal(key, value) {
    this._pool?.assertStorageIsWritable();
    const deleteResult = this.#prepareDelete(key);
    this.#local.set(key, value);
    this.invalidate();
    if (this._pool !== void 0 && this._id !== void 0) {
      const ops = deleteResult?.[0] ?? [];
      const reverse = deleteResult?.[1] ?? [];
      const storageUpdates = deleteResult?.[2] ?? /* @__PURE__ */ new Map();
      const existing = storageUpdates.get(this._id);
      storageUpdates.set(this._id, {
        node: this,
        type: "LiveObject",
        updates: {
          ...existing?.updates,
          [key]: { type: "update" }
        }
      });
      this._pool.dispatch(ops, reverse, storageUpdates);
    }
  }
  /**
   * Returns a specified property from the LiveObject.
   * @param key The key of the property to get
   */
  get(key) {
    return this.#local.has(key) ? this.#local.get(key) : this.#synced.get(key);
  }
  /**
   * Removes a synced key, returning the ops, reverse ops, and storage updates
   * needed to notify the pool. Returns null if the key doesn't exist in
   * #synced or pool/id are unavailable. Does NOT dispatch.
   */
  #prepareDelete(key) {
    this._pool?.assertStorageIsWritable();
    const k = key;
    if (this.#local.has(k) && !this.#synced.has(k)) {
      const oldValue2 = this.#local.get(k);
      this.#local.delete(k);
      this.invalidate();
      if (this._pool !== void 0 && this._id !== void 0) {
        const storageUpdates2 = /* @__PURE__ */ new Map();
        storageUpdates2.set(this._id, {
          node: this,
          type: "LiveObject",
          updates: {
            [k]: {
              type: "delete",
              deletedItem: oldValue2
            }
          }
        });
        return [[], [], storageUpdates2];
      }
      return null;
    }
    this.#local.delete(k);
    const oldValue = this.#synced.get(k);
    if (oldValue === void 0) {
      return null;
    }
    if (this._pool === void 0 || this._id === void 0) {
      if (isLiveNode(oldValue)) {
        oldValue._detach();
      }
      this.#synced.delete(k);
      this.invalidate();
      return null;
    }
    const ops = [
      {
        type: OpCode.DELETE_OBJECT_KEY,
        key: k,
        id: this._id,
        opId: this._pool.generateOpId()
      }
    ];
    let reverse;
    if (isLiveNode(oldValue)) {
      oldValue._detach();
      reverse = oldValue._toOps(this._id, k);
    } else {
      reverse = [
        {
          type: OpCode.UPDATE_OBJECT,
          data: { [k]: oldValue },
          id: this._id
        }
      ];
    }
    this.#synced.delete(k);
    this.invalidate();
    const storageUpdates = /* @__PURE__ */ new Map();
    storageUpdates.set(this._id, {
      node: this,
      type: "LiveObject",
      updates: {
        [key]: { type: "delete", deletedItem: oldValue }
      }
    });
    return [ops, reverse, storageUpdates];
  }
  /**
   * Deletes a key from the LiveObject
   * @param key The key of the property to delete
   */
  delete(key) {
    const result = this.#prepareDelete(key);
    if (result) {
      const [ops, reverse, storageUpdates] = result;
      this._pool?.dispatch(ops, reverse, storageUpdates);
    }
  }
  /**
   * Adds or updates multiple properties at once with an object.
   * @param patch The object used to overrides properties
   */
  update(patch) {
    this._pool?.assertStorageIsWritable();
    if (_LiveObject.detectLargeObjects) {
      const data = {};
      for (const [key, value] of this.#synced) {
        if (!isLiveNode(value)) {
          data[key] = value;
        }
      }
      for (const key of Object.keys(patch)) {
        const value = patch[key];
        if (value === void 0) continue;
        if (!isLiveNode(value)) {
          data[key] = value;
        }
      }
      const jsonString = JSON.stringify(data);
      const upperBoundSize = jsonString.length * 4;
      if (upperBoundSize > MAX_LIVE_OBJECT_SIZE) {
        const preciseSize = new TextEncoder().encode(jsonString).length;
        if (preciseSize > MAX_LIVE_OBJECT_SIZE) {
          throw new Error(
            `LiveObject size exceeded limit: ${preciseSize} bytes > ${MAX_LIVE_OBJECT_SIZE} bytes. See https://liveblocks.io/docs/platform/limits#Liveblocks-Storage-limits`
          );
        }
      }
    }
    if (this._pool === void 0 || this._id === void 0) {
      for (const key in patch) {
        const newValue = patch[key];
        if (newValue === void 0) {
          continue;
        }
        const oldValue = this.#synced.get(key);
        if (isLiveNode(oldValue)) {
          oldValue._detach();
        }
        if (isLiveNode(newValue)) {
          newValue._setParentLink(this, key);
        }
        this.#local.delete(key);
        this.#synced.set(key, newValue);
        this.invalidate();
      }
      return;
    }
    const ops = [];
    const reverseOps = [];
    const opId = this._pool.generateOpId();
    const updatedProps = {};
    const reverseUpdateOp = {
      id: this._id,
      type: OpCode.UPDATE_OBJECT,
      data: {}
    };
    const updateDelta = {};
    for (const key in patch) {
      const newValue = patch[key];
      if (newValue === void 0) {
        continue;
      }
      const oldValue = this.#synced.get(key);
      if (oldValue === newValue) {
        continue;
      }
      if (isLiveNode(oldValue)) {
        for (const childOp of oldValue._toOps(this._id, key)) {
          reverseOps.push(childOp);
        }
        oldValue._detach();
      } else if (oldValue === void 0) {
        reverseOps.push({ type: OpCode.DELETE_OBJECT_KEY, id: this._id, key });
      } else {
        reverseUpdateOp.data[key] = oldValue;
      }
      if (isLiveNode(newValue)) {
        newValue._setParentLink(this, key);
        newValue._attach(this._pool.generateId(), this._pool);
        const newAttachChildOps = newValue._toOpsWithOpId(
          this._id,
          key,
          this._pool
        );
        const createCrdtOp = newAttachChildOps.find(
          (op) => op.parentId === this._id
        );
        if (createCrdtOp) {
          this.#unackedOpsByKey.set(key, nn(createCrdtOp.opId));
        }
        for (const childOp of newAttachChildOps) {
          ops.push(childOp);
        }
      } else {
        updatedProps[key] = newValue;
        this.#unackedOpsByKey.set(key, opId);
      }
      this.#local.delete(key);
      this.#synced.set(key, newValue);
      this.invalidate();
      updateDelta[key] = { type: "update" };
    }
    if (Object.keys(reverseUpdateOp.data).length !== 0) {
      reverseOps.unshift(reverseUpdateOp);
    }
    if (Object.keys(updatedProps).length !== 0) {
      ops.unshift({
        opId,
        id: this._id,
        type: OpCode.UPDATE_OBJECT,
        data: updatedProps
      });
    }
    if (ops.length === 0 && reverseOps.length === 0 && Object.keys(updateDelta).length === 0) {
      return;
    }
    const storageUpdates = /* @__PURE__ */ new Map();
    storageUpdates.set(this._id, {
      node: this,
      type: "LiveObject",
      updates: updateDelta
    });
    this._pool.dispatch(ops, reverseOps, storageUpdates);
  }
  static from(obj, config) {
    if (!isPlainObject(obj)) throw new Error("Expected a JSON object");
    const liveObj = new _LiveObject({});
    liveObj.reconcile(obj, config);
    return liveObj;
  }
  reconcile(jsonObj, config) {
    if (this.hasCache(jsonObj)) return;
    if (!isPlainObject(jsonObj))
      throw new Error(
        "Reconciling the document root expects a plain object value"
      );
    reconcileLiveObject(this, jsonObj, "full", config);
  }
  /**
   * Like reconcile(), but only touches the top-level keys present in
   * `partialObj`. Keys on this LiveObject that are absent from `partialObj`
   * are left untouched. Typically called on the storage root when
   * reconciling a subset of keys without affecting other keys on the root.
   *
   * Note: the partial behavior only applies to the top-level keys of this
   * object. Nested structures are always fully reconciled.
   *
   * @private
   */
  reconcilePartially(partialObj, config) {
    if (!isPlainObject(partialObj))
      throw new Error(
        "Reconciling the document root expects a plain object value"
      );
    reconcileLiveObject(this, partialObj, "partial", config);
  }
  /** @internal */
  toTreeNode(key) {
    return super.toTreeNode(key);
  }
  /** @internal */
  _toTreeNode(key) {
    const nodeId = this._id ?? nanoid();
    return {
      type: "LiveObject",
      id: nodeId,
      key,
      payload: Array.from(this.#synced.entries()).map(
        ([key2, value]) => isLiveNode(value) ? value.toTreeNode(key2) : { type: "Json", id: `${nodeId}:${key2}`, key: key2, payload: value }
      )
    };
  }
  toJSON() {
    return super.toJSON();
  }
  /** @internal */
  _toJSON() {
    const result = {};
    for (const [key, val] of this.#synced) {
      result[key] = isLiveStructure(val) ? val.toJSON() : val;
    }
    for (const [key, val] of this.#local) {
      result[key] = val;
    }
    return freeze(result);
  }
  clone() {
    const cloned = new _LiveObject(
      Object.fromEntries(
        Array.from(this.#synced).map(([key, value]) => [
          key,
          isLiveStructure(value) ? value.clone() : deepClone(value)
        ])
      )
    );
    for (const [key, value] of this.#local) {
      cloned.#local.set(key, deepClone(value));
    }
    return cloned;
  }
};
function creationOpToLiveNode(op) {
  return lsonToLiveNode(creationOpToLson(op));
}
__name(creationOpToLiveNode, "creationOpToLiveNode");
function creationOpToLson(op) {
  switch (op.type) {
    case OpCode.CREATE_REGISTER:
      return op.data;
    case OpCode.CREATE_OBJECT:
      return new LiveObject(op.data);
    case OpCode.CREATE_MAP:
      return new LiveMap();
    case OpCode.CREATE_LIST:
      return new LiveList([]);
    default:
      return assertNever(op, "Unknown creation Op");
  }
}
__name(creationOpToLson, "creationOpToLson");
function deserialize(node, parentToChildren, pool) {
  if (isObjectStorageNode(node)) {
    return LiveObject._deserialize(node, parentToChildren, pool);
  } else if (isListStorageNode(node)) {
    return LiveList._deserialize(node, parentToChildren, pool);
  } else if (isMapStorageNode(node)) {
    return LiveMap._deserialize(node, parentToChildren, pool);
  } else if (isRegisterStorageNode(node)) {
    return LiveRegister._deserialize(node, parentToChildren, pool);
  } else {
    throw new Error("Unexpected CRDT type");
  }
}
__name(deserialize, "deserialize");
function deserializeToLson(node, parentToChildren, pool) {
  if (isObjectStorageNode(node)) {
    return LiveObject._deserialize(node, parentToChildren, pool);
  } else if (isListStorageNode(node)) {
    return LiveList._deserialize(node, parentToChildren, pool);
  } else if (isMapStorageNode(node)) {
    return LiveMap._deserialize(node, parentToChildren, pool);
  } else if (isRegisterStorageNode(node)) {
    return node[1].data;
  } else {
    throw new Error("Unexpected CRDT type");
  }
}
__name(deserializeToLson, "deserializeToLson");
function isLiveStructure(value) {
  return isLiveList(value) || isLiveMap(value) || isLiveObject(value);
}
__name(isLiveStructure, "isLiveStructure");
function isLiveNode(value) {
  return isLiveStructure(value) || isLiveRegister(value);
}
__name(isLiveNode, "isLiveNode");
function isLiveList(value) {
  return value instanceof LiveList;
}
__name(isLiveList, "isLiveList");
function isLiveMap(value) {
  return value instanceof LiveMap;
}
__name(isLiveMap, "isLiveMap");
function isLiveObject(value) {
  return value instanceof LiveObject;
}
__name(isLiveObject, "isLiveObject");
function isLiveRegister(value) {
  return value instanceof LiveRegister;
}
__name(isLiveRegister, "isLiveRegister");
function liveNodeToLson(obj) {
  if (obj instanceof LiveRegister) {
    return obj.data;
  } else if (obj instanceof LiveList || obj instanceof LiveMap || obj instanceof LiveObject) {
    return obj;
  } else {
    return assertNever(obj, "Unknown AbstractCrdt");
  }
}
__name(liveNodeToLson, "liveNodeToLson");
function lsonToLiveNode(value) {
  if (value instanceof LiveObject || value instanceof LiveMap || value instanceof LiveList) {
    return value;
  } else {
    return new LiveRegister(value);
  }
}
__name(lsonToLiveNode, "lsonToLiveNode");
var eventSource = makeEventSource();
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
  window.addEventListener("message", (event) => {
    if (event.source === window && event.data?.source === "liveblocks-devtools-panel") {
      eventSource.notify(event.data);
    } else {
    }
  });
}
var onMessageFromPanel = eventSource.observable;
var loadedAt = Date.now();
var kPlain = /* @__PURE__ */ Symbol("notification-settings-plain");
function createNotificationSettings(plain) {
  const channels = [
    "email",
    "slack",
    "teams",
    "webPush"
  ];
  const descriptors = {
    [kPlain]: {
      value: plain,
      enumerable: false
    }
  };
  for (const channel of channels) {
    descriptors[channel] = {
      enumerable: true,
      /**
       * In the TypeScript standard library definitions, the built-in interface for a property descriptor
       * does not include a specialized type for the “this” context in the getter or setter functions.
       * As a result, both the ⁠get and ⁠set methods implicitly have ⁠this: any.
       * The reason is that property descriptors in JavaScript are used across various objects with
       * no enforced shape for ⁠this. And so the standard library definitions have to remain as broad as possible
       * to support any valid JavaScript usage (e.g `Object.defineProperty`).
       *
       * So we can safely tells that this getter is typed as `this: NotificationSettings` because we're
       * creating a well known shaped object → `NotificationSettings`.
       */
      get() {
        const value = this[kPlain][channel];
        if (typeof value === "undefined") {
          error2(
            `In order to use the '${channel}' channel, please set up your project first. For more information: https://liveblocks.io/docs/errors/enable-a-notification-channel`
          );
          return null;
        }
        return value;
      }
    };
  }
  return create(null, descriptors);
}
__name(createNotificationSettings, "createNotificationSettings");
var ClientMsgCode = Object.freeze({
  // For Presence
  UPDATE_PRESENCE: 100,
  BROADCAST_EVENT: 103,
  // For Storage
  FETCH_STORAGE: 200,
  UPDATE_STORAGE: 201,
  // For Yjs support
  FETCH_YDOC: 300,
  UPDATE_YDOC: 301,
  // For Feeds
  FETCH_FEEDS: 510,
  FETCH_FEED_MESSAGES: 511,
  ADD_FEED: 512,
  UPDATE_FEED: 513,
  DELETE_FEED: 514,
  ADD_FEED_MESSAGE: 515,
  UPDATE_FEED_MESSAGE: 516,
  DELETE_FEED_MESSAGE: 517
});
function checkBounds(option, value, min, max, recommendedMin) {
  if (typeof value !== "number" || value < min || max !== void 0 && value > max) {
    throw new Error(
      max !== void 0 ? `${option} should be between ${recommendedMin ?? min} and ${max}.` : `${option} should be at least ${recommendedMin ?? min}.`
    );
  }
  return value;
}
__name(checkBounds, "checkBounds");
var htmlEscapables = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var htmlEscapablesRegex = new RegExp(
  Object.keys(htmlEscapables).map((entity) => `\\${entity}`).join("|"),
  "g"
);
var markdownEscapables = {
  _: "\\_",
  "*": "\\*",
  "#": "\\#",
  "`": "\\`",
  "~": "\\~",
  "!": "\\!",
  "|": "\\|",
  "(": "\\(",
  ")": "\\)",
  "{": "\\{",
  "}": "\\}",
  "[": "\\[",
  "]": "\\]"
};
var markdownEscapablesRegex = new RegExp(
  Object.keys(markdownEscapables).map((entity) => `\\${entity}`).join("|"),
  "g"
);
function makeAbortController(externalSignal) {
  const ctl = new AbortController();
  return {
    signal: externalSignal ? AbortSignal.any([ctl.signal, externalSignal]) : ctl.signal,
    abort: ctl.abort.bind(ctl)
  };
}
__name(makeAbortController, "makeAbortController");
detectDupes(PKG_NAME, PKG_VERSION, PKG_FORMAT);

// node_modules/@liveblocks/react-flow/dist/lib/shared.js
init_esm();
var DEFAULT_STORAGE_KEY = "flow";
var NODE_BASE_CONFIG = {
  // Local-only (not synced)
  selected: false,
  dragging: false,
  measured: false,
  resizing: false,
  // Atomic (synced as plain Json)
  position: "atomic",
  sourcePosition: "atomic",
  targetPosition: "atomic",
  extent: "atomic",
  origin: "atomic",
  handles: "atomic"
  // Note: the `data` key is intentionally left out of this base config, as it
  // is expected to be provided by the end user
};
var EDGE_BASE_CONFIG = {
  // Local-only (not synced)
  selected: false,
  // Atomic (synced as plain Json)
  markerStart: "atomic",
  markerEnd: "atomic",
  label: "atomic",
  labelBgPadding: "atomic"
  // Note: the `data` key is intentionally left out of this base config, as it
  // is expected to be provided by the end user
};
function buildFlowDataConfigCache(base, data) {
  if (!data) return () => base;
  const dataFallback = data["*"];
  const fallback = dataFallback ? { ...base, data: dataFallback } : base;
  const cache = /* @__PURE__ */ new Map();
  for (const type in data) {
    if (type === "*") continue;
    const specific = data[type];
    if (!specific) continue;
    const dataConfig = { ...dataFallback, ...specific };
    cache.set(type, { ...base, data: dataConfig });
  }
  return (type) => cache.get(type) || fallback;
}
__name(buildFlowDataConfigCache, "buildFlowDataConfigCache");
function buildNodeConfigCache(nodeDataConfig) {
  return buildFlowDataConfigCache(NODE_BASE_CONFIG, nodeDataConfig);
}
__name(buildNodeConfigCache, "buildNodeConfigCache");
function buildEdgeConfigCache(edgeDataConfig) {
  return buildFlowDataConfigCache(EDGE_BASE_CONFIG, edgeDataConfig);
}
__name(buildEdgeConfigCache, "buildEdgeConfigCache");
function toLiveblocksInternalNode(node, config) {
  return LiveObject.from(
    node,
    config
  );
}
__name(toLiveblocksInternalNode, "toLiveblocksInternalNode");
function toLiveblocksInternalEdge(edge, config) {
  return LiveObject.from(
    edge,
    config
  );
}
__name(toLiveblocksInternalEdge, "toLiveblocksInternalEdge");

// node_modules/@liveblocks/react-flow/dist/node.js
async function mutateFlow(options2, callback) {
  const { client, roomId } = options2;
  const storageKey = options2.storageKey ?? DEFAULT_STORAGE_KEY;
  const getNodeSyncConfig = buildNodeConfigCache(options2.nodes?.sync);
  const getEdgeSyncConfig = buildEdgeConfigCache(options2.edges?.sync);
  const nodeListCache = /* @__PURE__ */ new WeakMap();
  const edgeListCache = /* @__PURE__ */ new WeakMap();
  await client.mutateStorage(roomId, async ({ root: root2 }) => {
    let flow = root2.get(storageKey);
    if (!flow) {
      const newFlow = new LiveObject({
        nodes: new LiveMap(),
        edges: new LiveMap()
      });
      root2.set(storageKey, newFlow);
      flow = newFlow;
    }
    const nodesLiveMap = flow.get("nodes");
    const edgesLiveMap = flow.get("edges");
    function getNodes() {
      const nodeMap = nodesLiveMap.toJSON();
      if (!nodeListCache.has(nodeMap)) {
        nodeListCache.set(nodeMap, Object.values(nodeMap));
      }
      return nodeListCache.get(nodeMap);
    }
    __name(getNodes, "getNodes");
    function getEdges() {
      const edgeMap = edgesLiveMap.toJSON();
      if (!edgeListCache.has(edgeMap)) {
        edgeListCache.set(edgeMap, Object.values(edgeMap));
      }
      return edgeListCache.get(edgeMap);
    }
    __name(getEdges, "getEdges");
    function getNode(id2) {
      return nodesLiveMap.get(id2)?.toJSON();
    }
    __name(getNode, "getNode");
    function getEdge(id2) {
      return edgesLiveMap.get(id2)?.toJSON();
    }
    __name(getEdge, "getEdge");
    function upsertNode(id2, newNode) {
      const existing = nodesLiveMap.get(id2);
      const syncConfig = getNodeSyncConfig(newNode.type);
      if (!existing) {
        nodesLiveMap.set(id2, toLiveblocksInternalNode(newNode, syncConfig));
      } else {
        existing.reconcile(newNode, syncConfig);
      }
    }
    __name(upsertNode, "upsertNode");
    function upsertEdge(id2, newEdge) {
      const existing = edgesLiveMap.get(id2);
      const syncConfig = getEdgeSyncConfig(newEdge.type);
      if (!existing) {
        edgesLiveMap.set(id2, toLiveblocksInternalEdge(newEdge, syncConfig));
      } else {
        existing.reconcile(newEdge, syncConfig);
      }
    }
    __name(upsertEdge, "upsertEdge");
    const mutableFlow = {
      get nodes() {
        return getNodes();
      },
      get edges() {
        return getEdges();
      },
      toJSON() {
        return { nodes: getNodes(), edges: getEdges() };
      },
      getNode,
      getEdge,
      addNode(node) {
        upsertNode(node.id, node);
      },
      addNodes(nodes) {
        for (const node of nodes) {
          mutableFlow.addNode(node);
        }
      },
      updateNode(id2, partialOrUpdater) {
        const oldNode = getNode(id2);
        if (!oldNode) return;
        let newNode;
        if (typeof partialOrUpdater === "function") {
          newNode = partialOrUpdater(oldNode);
        } else {
          newNode = { ...oldNode, ...partialOrUpdater };
        }
        return upsertNode(id2, newNode);
      },
      updateNodeData(id2, partialOrUpdater) {
        return mutableFlow.updateNode(id2, (node) => {
          const currData = node.data ?? {};
          const newData = typeof partialOrUpdater === "function" ? partialOrUpdater(currData) : { ...currData, ...partialOrUpdater };
          return { ...node, data: newData };
        });
      },
      removeNode(id2) {
        nodesLiveMap.delete(id2);
      },
      removeNodes(ids) {
        for (const id2 of ids) {
          nodesLiveMap.delete(id2);
        }
      },
      addEdge(edge) {
        upsertEdge(edge.id, edge);
      },
      addEdges(edges) {
        for (const edge of edges) {
          mutableFlow.addEdge(edge);
        }
      },
      updateEdge(id2, partialOrUpdater) {
        const oldEdge = getEdge(id2);
        if (!oldEdge) return;
        let newEdge;
        if (typeof partialOrUpdater === "function") {
          newEdge = partialOrUpdater(oldEdge);
        } else {
          newEdge = { ...oldEdge, ...partialOrUpdater };
        }
        return upsertEdge(id2, newEdge);
      },
      updateEdgeData(id2, partialOrUpdater) {
        return mutableFlow.updateEdge(id2, (edge) => {
          const currData = edge.data;
          const newData = typeof partialOrUpdater === "function" ? partialOrUpdater(currData) : { ...currData, ...partialOrUpdater };
          return { ...edge, data: newData };
        });
      },
      removeEdge(id2) {
        edgesLiveMap.delete(id2);
      },
      removeEdges(ids) {
        for (const id2 of ids) {
          edgesLiveMap.delete(id2);
        }
      }
    };
    await callback(mutableFlow);
  });
}
__name(mutateFlow, "mutateFlow");

// node_modules/@xyflow/react/dist/esm/index.js
init_esm();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());

// node_modules/classcat/index.js
init_esm();
function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names;
  let out = "";
  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && " ") + k;
    }
  }
  return out;
}
__name(cc, "cc");

// node_modules/@xyflow/system/dist/esm/index.js
init_esm();

// node_modules/d3-drag/src/index.js
init_esm();

// node_modules/d3-drag/src/drag.js
init_esm();

// node_modules/d3-dispatch/src/index.js
init_esm();

// node_modules/d3-dispatch/src/dispatch.js
init_esm();
var noop = { value: /* @__PURE__ */ __name(() => {
}, "value") };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
__name(dispatch, "dispatch");
function Dispatch(_) {
  this._ = _;
}
__name(Dispatch, "Dispatch");
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
__name(parseTypenames, "parseTypenames");
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: /* @__PURE__ */ __name(function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  }, "on"),
  copy: /* @__PURE__ */ __name(function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  }, "copy"),
  call: /* @__PURE__ */ __name(function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }, "call"),
  apply: /* @__PURE__ */ __name(function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }, "apply")
};
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
__name(get, "get");
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
__name(set, "set");
var dispatch_default = dispatch;

// node_modules/d3-selection/src/index.js
init_esm();

// node_modules/d3-selection/src/creator.js
init_esm();

// node_modules/d3-selection/src/namespace.js
init_esm();

// node_modules/d3-selection/src/namespaces.js
init_esm();
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}
__name(namespace_default, "default");

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
__name(creatorInherit, "creatorInherit");
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
__name(creatorFixed, "creatorFixed");
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
__name(creator_default, "default");

// node_modules/d3-selection/src/select.js
init_esm();

// node_modules/d3-selection/src/selection/index.js
init_esm();

// node_modules/d3-selection/src/selection/select.js
init_esm();

// node_modules/d3-selection/src/selector.js
init_esm();
function none() {
}
__name(none, "none");
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}
__name(selector_default, "default");

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
__name(select_default, "default");

// node_modules/d3-selection/src/selection/selectAll.js
init_esm();

// node_modules/d3-selection/src/array.js
init_esm();
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
__name(array, "array");

// node_modules/d3-selection/src/selectorAll.js
init_esm();
function empty() {
  return [];
}
__name(empty, "empty");
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}
__name(selectorAll_default, "default");

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
__name(arrayAll, "arrayAll");
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}
__name(selectAll_default, "default");

// node_modules/d3-selection/src/selection/selectChild.js
init_esm();

// node_modules/d3-selection/src/matcher.js
init_esm();
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
__name(matcher_default, "default");
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}
__name(childMatcher, "childMatcher");

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
__name(childFind, "childFind");
function childFirst() {
  return this.firstElementChild;
}
__name(childFirst, "childFirst");
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
__name(selectChild_default, "default");

// node_modules/d3-selection/src/selection/selectChildren.js
init_esm();
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
__name(children, "children");
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
__name(childrenFilter, "childrenFilter");
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
__name(selectChildren_default, "default");

// node_modules/d3-selection/src/selection/filter.js
init_esm();
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
__name(filter_default, "default");

// node_modules/d3-selection/src/selection/data.js
init_esm();

// node_modules/d3-selection/src/selection/enter.js
init_esm();

// node_modules/d3-selection/src/selection/sparse.js
init_esm();
function sparse_default(update) {
  return new Array(update.length);
}
__name(sparse_default, "default");

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
__name(enter_default, "default");
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
__name(EnterNode, "EnterNode");
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: /* @__PURE__ */ __name(function(child) {
    return this._parent.insertBefore(child, this._next);
  }, "appendChild"),
  insertBefore: /* @__PURE__ */ __name(function(child, next) {
    return this._parent.insertBefore(child, next);
  }, "insertBefore"),
  querySelector: /* @__PURE__ */ __name(function(selector) {
    return this._parent.querySelector(selector);
  }, "querySelector"),
  querySelectorAll: /* @__PURE__ */ __name(function(selector) {
    return this._parent.querySelectorAll(selector);
  }, "querySelectorAll")
};

// node_modules/d3-selection/src/constant.js
init_esm();
function constant_default(x) {
  return function() {
    return x;
  };
}
__name(constant_default, "default");

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
__name(bindIndex, "bindIndex");
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
__name(bindKey, "bindKey");
function datum(node) {
  return node.__data__;
}
__name(datum, "datum");
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
__name(data_default, "default");
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
__name(arraylike, "arraylike");

// node_modules/d3-selection/src/selection/exit.js
init_esm();
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}
__name(exit_default, "default");

// node_modules/d3-selection/src/selection/join.js
init_esm();
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
__name(join_default, "default");

// node_modules/d3-selection/src/selection/merge.js
init_esm();
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}
__name(merge_default, "default");

// node_modules/d3-selection/src/selection/order.js
init_esm();
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
__name(order_default, "default");

// node_modules/d3-selection/src/selection/sort.js
init_esm();
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  __name(compareNode, "compareNode");
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
__name(sort_default, "default");
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
__name(ascending, "ascending");

// node_modules/d3-selection/src/selection/call.js
init_esm();
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
__name(call_default, "default");

// node_modules/d3-selection/src/selection/nodes.js
init_esm();
function nodes_default() {
  return Array.from(this);
}
__name(nodes_default, "default");

// node_modules/d3-selection/src/selection/node.js
init_esm();
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}
__name(node_default, "default");

// node_modules/d3-selection/src/selection/size.js
init_esm();
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}
__name(size_default, "default");

// node_modules/d3-selection/src/selection/empty.js
init_esm();
function empty_default() {
  return !this.node();
}
__name(empty_default, "default");

// node_modules/d3-selection/src/selection/each.js
init_esm();
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
__name(each_default, "default");

// node_modules/d3-selection/src/selection/attr.js
init_esm();
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
__name(attrRemove, "attrRemove");
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
__name(attrRemoveNS, "attrRemoveNS");
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
__name(attrConstant, "attrConstant");
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
__name(attrConstantNS, "attrConstantNS");
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
__name(attrFunction, "attrFunction");
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
__name(attrFunctionNS, "attrFunctionNS");
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
__name(attr_default, "default");

// node_modules/d3-selection/src/selection/style.js
init_esm();

// node_modules/d3-selection/src/window.js
init_esm();
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
__name(window_default, "default");

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
__name(styleRemove, "styleRemove");
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
__name(styleConstant, "styleConstant");
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
__name(styleFunction, "styleFunction");
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
__name(style_default, "default");
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}
__name(styleValue, "styleValue");

// node_modules/d3-selection/src/selection/property.js
init_esm();
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
__name(propertyRemove, "propertyRemove");
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
__name(propertyConstant, "propertyConstant");
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
__name(propertyFunction, "propertyFunction");
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
__name(property_default, "default");

// node_modules/d3-selection/src/selection/classed.js
init_esm();
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
__name(classArray, "classArray");
function classList(node) {
  return node.classList || new ClassList(node);
}
__name(classList, "classList");
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
__name(ClassList, "ClassList");
ClassList.prototype = {
  add: /* @__PURE__ */ __name(function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  }, "add"),
  remove: /* @__PURE__ */ __name(function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  }, "remove"),
  contains: /* @__PURE__ */ __name(function(name) {
    return this._names.indexOf(name) >= 0;
  }, "contains")
};
function classedAdd(node, names) {
  var list2 = classList(node), i = -1, n = names.length;
  while (++i < n) list2.add(names[i]);
}
__name(classedAdd, "classedAdd");
function classedRemove(node, names) {
  var list2 = classList(node), i = -1, n = names.length;
  while (++i < n) list2.remove(names[i]);
}
__name(classedRemove, "classedRemove");
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
__name(classedTrue, "classedTrue");
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
__name(classedFalse, "classedFalse");
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
__name(classedFunction, "classedFunction");
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list2 = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list2.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
__name(classed_default, "default");

// node_modules/d3-selection/src/selection/text.js
init_esm();
function textRemove() {
  this.textContent = "";
}
__name(textRemove, "textRemove");
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
__name(textConstant, "textConstant");
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
__name(textFunction, "textFunction");
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
__name(text_default, "default");

// node_modules/d3-selection/src/selection/html.js
init_esm();
function htmlRemove() {
  this.innerHTML = "";
}
__name(htmlRemove, "htmlRemove");
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
__name(htmlConstant, "htmlConstant");
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
__name(htmlFunction, "htmlFunction");
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
__name(html_default, "default");

// node_modules/d3-selection/src/selection/raise.js
init_esm();
function raise2() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
__name(raise2, "raise");
function raise_default() {
  return this.each(raise2);
}
__name(raise_default, "default");

// node_modules/d3-selection/src/selection/lower.js
init_esm();
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
__name(lower, "lower");
function lower_default() {
  return this.each(lower);
}
__name(lower_default, "default");

// node_modules/d3-selection/src/selection/append.js
init_esm();
function append_default(name) {
  var create3 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create3.apply(this, arguments));
  });
}
__name(append_default, "default");

// node_modules/d3-selection/src/selection/insert.js
init_esm();
function constantNull() {
  return null;
}
__name(constantNull, "constantNull");
function insert_default(name, before2) {
  var create3 = typeof name === "function" ? name : creator_default(name), select = before2 == null ? constantNull : typeof before2 === "function" ? before2 : selector_default(before2);
  return this.select(function() {
    return this.insertBefore(create3.apply(this, arguments), select.apply(this, arguments) || null);
  });
}
__name(insert_default, "default");

// node_modules/d3-selection/src/selection/remove.js
init_esm();
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
__name(remove, "remove");
function remove_default() {
  return this.each(remove);
}
__name(remove_default, "default");

// node_modules/d3-selection/src/selection/clone.js
init_esm();
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
__name(selection_cloneShallow, "selection_cloneShallow");
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
__name(selection_cloneDeep, "selection_cloneDeep");
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
__name(clone_default, "default");

// node_modules/d3-selection/src/selection/datum.js
init_esm();
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
__name(datum_default, "default");

// node_modules/d3-selection/src/selection/on.js
init_esm();
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
__name(contextListener, "contextListener");
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
__name(parseTypenames2, "parseTypenames");
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
__name(onRemove, "onRemove");
function onAdd(typename, value, options2) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options2);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options2);
    o = { type: typename.type, name: typename.name, value, listener, options: options2 };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
__name(onAdd, "onAdd");
function on_default(typename, value, options2) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options2));
  return this;
}
__name(on_default, "default");

// node_modules/d3-selection/src/selection/dispatch.js
init_esm();
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
__name(dispatchEvent, "dispatchEvent");
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
__name(dispatchConstant, "dispatchConstant");
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
__name(dispatchFunction, "dispatchFunction");
function dispatch_default2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
__name(dispatch_default2, "default");

// node_modules/d3-selection/src/selection/iterator.js
init_esm();
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}
__name(iterator_default, "default");

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
__name(Selection, "Selection");
function selection() {
  return new Selection([[document.documentElement]], root);
}
__name(selection, "selection");
function selection_selection() {
  return this;
}
__name(selection_selection, "selection_selection");
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}
__name(select_default2, "default");

// node_modules/d3-selection/src/pointer.js
init_esm();

// node_modules/d3-selection/src/sourceEvent.js
init_esm();
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}
__name(sourceEvent_default, "default");

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
__name(pointer_default, "default");

// node_modules/d3-drag/src/nodrag.js
init_esm();

// node_modules/d3-drag/src/noevent.js
init_esm();
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
__name(nopropagation, "nopropagation");
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
__name(noevent_default, "default");

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
__name(nodrag_default, "default");
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
__name(yesdrag, "yesdrag");

// node_modules/d3-drag/src/constant.js
init_esm();
var constant_default2 = /* @__PURE__ */ __name((x) => () => x, "default");

// node_modules/d3-drag/src/event.js
init_esm();
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
__name(DragEvent, "DragEvent");
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
__name(defaultFilter, "defaultFilter");
function defaultContainer() {
  return this.parentNode;
}
__name(defaultContainer, "defaultContainer");
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
__name(defaultSubject, "defaultSubject");
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
__name(defaultTouchable, "defaultTouchable");
function drag_default() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  __name(drag, "drag");
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  __name(mousedowned, "mousedowned");
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  __name(mousemoved, "mousemoved");
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  __name(mouseupped, "mouseupped");
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d)) return;
    var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  __name(touchstarted, "touchstarted");
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  __name(touchmoved, "touchmoved");
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  __name(touchended, "touchended");
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return /* @__PURE__ */ __name(function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        // falls through
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    }, "gesture");
  }
  __name(beforestart, "beforestart");
  drag.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default2(!!_), drag) : filter2;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default2(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default2(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default2(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}
__name(drag_default, "default");

// node_modules/d3-zoom/src/index.js
init_esm();

// node_modules/d3-zoom/src/zoom.js
init_esm();

// node_modules/d3-interpolate/src/index.js
init_esm();

// node_modules/d3-interpolate/src/value.js
init_esm();

// node_modules/d3-color/src/index.js
init_esm();

// node_modules/d3-color/src/color.js
init_esm();

// node_modules/d3-color/src/define.js
init_esm();
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
__name(define_default, "default");
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
__name(extend, "extend");

// node_modules/d3-color/src/color.js
function Color() {
}
__name(Color, "Color");
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
__name(color_formatHex, "color_formatHex");
function color_formatHex8() {
  return this.rgb().formatHex8();
}
__name(color_formatHex8, "color_formatHex8");
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
__name(color_formatHsl, "color_formatHsl");
function color_formatRgb() {
  return this.rgb().formatRgb();
}
__name(color_formatRgb, "color_formatRgb");
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
__name(color, "color");
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
__name(rgbn, "rgbn");
function rgba(r, g2, b, a) {
  if (a <= 0) r = g2 = b = NaN;
  return new Rgb(r, g2, b, a);
}
__name(rgba, "rgba");
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
__name(rgbConvert, "rgbConvert");
function rgb(r, g2, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g2, b, opacity == null ? 1 : opacity);
}
__name(rgb, "rgb");
function Rgb(r, g2, b, opacity) {
  this.r = +r;
  this.g = +g2;
  this.b = +b;
  this.opacity = +opacity;
}
__name(Rgb, "Rgb");
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
__name(rgb_formatHex, "rgb_formatHex");
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
__name(rgb_formatHex8, "rgb_formatHex8");
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
__name(rgb_formatRgb, "rgb_formatRgb");
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
__name(clampa, "clampa");
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
__name(clampi, "clampi");
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
__name(hex, "hex");
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
__name(hsla, "hsla");
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g2 = o.g / 255, b = o.b / 255, min = Math.min(r, g2, b), max = Math.max(r, g2, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g2 - b) / s + (g2 < b) * 6;
    else if (g2 === max) h = (b - r) / s + 2;
    else h = (r - g2) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
__name(hslConvert, "hslConvert");
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
__name(hsl, "hsl");
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
__name(Hsl, "Hsl");
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
__name(clamph, "clamph");
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
__name(clampt, "clampt");
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
__name(hsl2rgb, "hsl2rgb");

// node_modules/d3-interpolate/src/rgb.js
init_esm();

// node_modules/d3-interpolate/src/basis.js
init_esm();
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
__name(basis, "basis");
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
__name(basis_default, "default");

// node_modules/d3-interpolate/src/basisClosed.js
init_esm();
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}
__name(basisClosed_default, "default");

// node_modules/d3-interpolate/src/color.js
init_esm();

// node_modules/d3-interpolate/src/constant.js
init_esm();
var constant_default3 = /* @__PURE__ */ __name((x) => () => x, "default");

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
__name(linear, "linear");
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
__name(exponential, "exponential");
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default3(isNaN(a) ? b : a);
  };
}
__name(gamma, "gamma");
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default3(isNaN(a) ? b : a);
}
__name(nogamma, "nogamma");

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = (/* @__PURE__ */ __name(function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g2 = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g2(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  __name(rgb2, "rgb");
  rgb2.gamma = rgbGamma;
  return rgb2;
}, "rgbGamma"))(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g2 = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g2[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g2 = spline(g2);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g2(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
__name(rgbSpline, "rgbSpline");
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/array.js
init_esm();

// node_modules/d3-interpolate/src/numberArray.js
init_esm();
function numberArray_default(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
__name(numberArray_default, "default");
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
__name(isNumberArray, "isNumberArray");

// node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}
__name(genericArray, "genericArray");

// node_modules/d3-interpolate/src/date.js
init_esm();
function date_default(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
__name(date_default, "default");

// node_modules/d3-interpolate/src/number.js
init_esm();
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
__name(number_default, "default");

// node_modules/d3-interpolate/src/object.js
init_esm();
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}
__name(object_default, "default");

// node_modules/d3-interpolate/src/string.js
init_esm();
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
__name(zero, "zero");
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
__name(one, "one");
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
__name(string_default, "default");

// node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant_default3(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}
__name(value_default, "default");

// node_modules/d3-interpolate/src/transform/index.js
init_esm();

// node_modules/d3-interpolate/src/transform/parse.js
init_esm();

// node_modules/d3-interpolate/src/transform/decompose.js
init_esm();
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
__name(decompose_default, "default");

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
__name(parseCss, "parseCss");
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}
__name(parseSvg, "parseSvg");

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  __name(pop, "pop");
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  __name(translate, "translate");
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  __name(rotate, "rotate");
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  __name(skewX, "skewX");
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  __name(scale, "scale");
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
__name(interpolateTransform, "interpolateTransform");
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
init_esm();
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
__name(cosh, "cosh");
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
__name(sinh, "sinh");
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
__name(tanh, "tanh");
var zoom_default = (/* @__PURE__ */ __name(function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = /* @__PURE__ */ __name(function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }, "i");
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = /* @__PURE__ */ __name(function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }, "i");
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  __name(zoom, "zoom");
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}, "zoomRho"))(Math.SQRT2, 2, 4);

// node_modules/d3-transition/src/index.js
init_esm();

// node_modules/d3-transition/src/selection/index.js
init_esm();

// node_modules/d3-transition/src/selection/interrupt.js
init_esm();

// node_modules/d3-transition/src/interrupt.js
init_esm();

// node_modules/d3-transition/src/transition/schedule.js
init_esm();

// node_modules/d3-timer/src/index.js
init_esm();

// node_modules/d3-timer/src/timer.js
init_esm();
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
__name(now, "now");
function clearNow() {
  clockNow = 0;
}
__name(clearNow, "clearNow");
function Timer() {
  this._call = this._time = this._next = null;
}
__name(Timer, "Timer");
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: /* @__PURE__ */ __name(function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  }, "restart"),
  stop: /* @__PURE__ */ __name(function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }, "stop")
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
__name(timer, "timer");
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
__name(timerFlush, "timerFlush");
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
__name(wake, "wake");
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
__name(poke, "poke");
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
__name(nap, "nap");
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
__name(sleep, "sleep");

// node_modules/d3-timer/src/timeout.js
init_esm();
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
__name(timeout_default, "default");

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create2(node, id2, {
    name,
    index: index2,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
__name(schedule_default, "default");
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
__name(init, "init");
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
__name(set2, "set");
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
__name(get2, "get");
function create2(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  __name(schedule, "schedule");
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  __name(start2, "start");
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  __name(tick, "tick");
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
  __name(stop, "stop");
}
__name(create2, "create");

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}
__name(interrupt_default, "default");

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}
__name(interrupt_default2, "default");

// node_modules/d3-transition/src/selection/transition.js
init_esm();

// node_modules/d3-transition/src/transition/index.js
init_esm();

// node_modules/d3-transition/src/transition/attr.js
init_esm();

// node_modules/d3-transition/src/transition/tween.js
init_esm();
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
__name(tweenRemove, "tweenRemove");
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
__name(tweenFunction, "tweenFunction");
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
__name(tween_default, "default");
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}
__name(tweenValue, "tweenValue");

// node_modules/d3-transition/src/transition/interpolate.js
init_esm();
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}
__name(interpolate_default, "default");

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
__name(attrRemove2, "attrRemove");
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
__name(attrRemoveNS2, "attrRemoveNS");
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
__name(attrConstant2, "attrConstant");
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
__name(attrConstantNS2, "attrConstantNS");
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
__name(attrFunction2, "attrFunction");
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
__name(attrFunctionNS2, "attrFunctionNS");
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}
__name(attr_default2, "default");

// node_modules/d3-transition/src/transition/attrTween.js
init_esm();
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
__name(attrInterpolate, "attrInterpolate");
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
__name(attrInterpolateNS, "attrInterpolateNS");
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  __name(tween, "tween");
  tween._value = value;
  return tween;
}
__name(attrTweenNS, "attrTweenNS");
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  __name(tween, "tween");
  tween._value = value;
  return tween;
}
__name(attrTween, "attrTween");
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
__name(attrTween_default, "default");

// node_modules/d3-transition/src/transition/delay.js
init_esm();
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
__name(delayFunction, "delayFunction");
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
__name(delayConstant, "delayConstant");
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}
__name(delay_default, "default");

// node_modules/d3-transition/src/transition/duration.js
init_esm();
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
__name(durationFunction, "durationFunction");
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
__name(durationConstant, "durationConstant");
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}
__name(duration_default, "default");

// node_modules/d3-transition/src/transition/ease.js
init_esm();
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
__name(easeConstant, "easeConstant");
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}
__name(ease_default, "default");

// node_modules/d3-transition/src/transition/easeVarying.js
init_esm();
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
__name(easeVarying, "easeVarying");
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}
__name(easeVarying_default, "default");

// node_modules/d3-transition/src/transition/filter.js
init_esm();
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
__name(filter_default2, "default");

// node_modules/d3-transition/src/transition/merge.js
init_esm();
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
__name(merge_default2, "default");

// node_modules/d3-transition/src/transition/on.js
init_esm();
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
__name(start, "start");
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
__name(onFunction, "onFunction");
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
__name(on_default2, "default");

// node_modules/d3-transition/src/transition/remove.js
init_esm();
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
__name(removeFunction, "removeFunction");
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}
__name(remove_default2, "default");

// node_modules/d3-transition/src/transition/select.js
init_esm();
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
__name(select_default3, "default");

// node_modules/d3-transition/src/transition/selectAll.js
init_esm();
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
__name(selectAll_default2, "default");

// node_modules/d3-transition/src/transition/selection.js
init_esm();
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}
__name(selection_default2, "default");

// node_modules/d3-transition/src/transition/style.js
init_esm();
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
__name(styleNull, "styleNull");
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
__name(styleRemove2, "styleRemove");
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
__name(styleConstant2, "styleConstant");
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
__name(styleFunction2, "styleFunction");
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
__name(styleMaybeRemove, "styleMaybeRemove");
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}
__name(style_default2, "default");

// node_modules/d3-transition/src/transition/styleTween.js
init_esm();
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
__name(styleInterpolate, "styleInterpolate");
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  __name(tween, "tween");
  tween._value = value;
  return tween;
}
__name(styleTween, "styleTween");
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
__name(styleTween_default, "default");

// node_modules/d3-transition/src/transition/text.js
init_esm();
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
__name(textConstant2, "textConstant");
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
__name(textFunction2, "textFunction");
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}
__name(text_default2, "default");

// node_modules/d3-transition/src/transition/textTween.js
init_esm();
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
__name(textInterpolate, "textInterpolate");
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  __name(tween, "tween");
  tween._value = value;
  return tween;
}
__name(textTween, "textTween");
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}
__name(textTween_default, "default");

// node_modules/d3-transition/src/transition/transition.js
init_esm();
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
__name(transition_default, "default");

// node_modules/d3-transition/src/transition/end.js
init_esm();
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: /* @__PURE__ */ __name(function() {
      if (--size === 0) resolve();
    }, "value") };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}
__name(end_default, "default");

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
__name(Transition, "Transition");
function transition(name) {
  return selection_default().transition(name);
}
__name(transition, "transition");
function newId() {
  return ++id;
}
__name(newId, "newId");
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/index.js
init_esm();

// node_modules/d3-ease/src/cubic.js
init_esm();
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
__name(cubicInOut, "cubicInOut");

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
__name(inherit, "inherit");
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
__name(transition_default2, "default");

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
init_esm();
var constant_default4 = /* @__PURE__ */ __name((x) => () => x, "default");

// node_modules/d3-zoom/src/event.js
init_esm();
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
__name(ZoomEvent, "ZoomEvent");

// node_modules/d3-zoom/src/transform.js
init_esm();
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
__name(Transform, "Transform");
Transform.prototype = {
  constructor: Transform,
  scale: /* @__PURE__ */ __name(function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  }, "scale"),
  translate: /* @__PURE__ */ __name(function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  }, "translate"),
  apply: /* @__PURE__ */ __name(function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  }, "apply"),
  applyX: /* @__PURE__ */ __name(function(x) {
    return x * this.k + this.x;
  }, "applyX"),
  applyY: /* @__PURE__ */ __name(function(y) {
    return y * this.k + this.y;
  }, "applyY"),
  invert: /* @__PURE__ */ __name(function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  }, "invert"),
  invertX: /* @__PURE__ */ __name(function(x) {
    return (x - this.x) / this.k;
  }, "invertX"),
  invertY: /* @__PURE__ */ __name(function(y) {
    return (y - this.y) / this.k;
  }, "invertY"),
  rescaleX: /* @__PURE__ */ __name(function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  }, "rescaleX"),
  rescaleY: /* @__PURE__ */ __name(function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  }, "rescaleY"),
  toString: /* @__PURE__ */ __name(function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }, "toString")
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}
__name(transform, "transform");

// node_modules/d3-zoom/src/noevent.js
init_esm();
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
__name(nopropagation2, "nopropagation");
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
__name(noevent_default2, "default");

// node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
__name(defaultFilter2, "defaultFilter");
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
__name(defaultExtent, "defaultExtent");
function defaultTransform() {
  return this.__zoom || identity2;
}
__name(defaultTransform, "defaultTransform");
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
__name(defaultWheelDelta, "defaultWheelDelta");
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
__name(defaultTouchable2, "defaultTouchable");
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
__name(defaultConstrain, "defaultConstrain");
function zoom_default2() {
  var filter2 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta2 = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  __name(zoom, "zoom");
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x, y, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x, y, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  __name(scale, "scale");
  function translate(transform2, p0, p1) {
    var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  __name(translate, "translate");
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  __name(centroid, "centroid");
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g2 = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g2.zoom(null, t);
      };
    });
  }
  __name(schedule, "schedule");
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  __name(gesture, "gesture");
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  __name(Gesture, "Gesture");
  Gesture.prototype = {
    event: /* @__PURE__ */ __name(function(event) {
      if (event) this.sourceEvent = event;
      return this;
    }, "event"),
    start: /* @__PURE__ */ __name(function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    }, "start"),
    zoom: /* @__PURE__ */ __name(function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    }, "zoom"),
    end: /* @__PURE__ */ __name(function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    }, "end"),
    emit: /* @__PURE__ */ __name(function(type) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }, "emit")
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g2 = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer_default(event);
    if (g2.wheel) {
      if (g2.mouse[0][0] !== p[0] || g2.mouse[0][1] !== p[1]) {
        g2.mouse[1] = t.invert(g2.mouse[0] = p);
      }
      clearTimeout(g2.wheel);
    } else if (t.k === k) return;
    else {
      g2.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g2.start();
    }
    noevent_default2(event);
    g2.wheel = setTimeout(wheelidled, wheelDelay);
    g2.zoom("mouse", constrain(translate(scale(t, k), g2.mouse[0], g2.mouse[1]), g2.extent, translateExtent));
    function wheelidled() {
      g2.wheel = null;
      g2.end();
    }
    __name(wheelidled, "wheelidled");
  }
  __name(wheeled, "wheeled");
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g2 = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g2.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g2.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g2.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g2.moved = dx * dx + dy * dy > clickDistance2;
      }
      g2.event(event2).zoom("mouse", constrain(translate(g2.that.__zoom, g2.mouse[0] = pointer_default(event2, currentTarget), g2.mouse[1]), g2.extent, translateExtent));
    }
    __name(mousemoved, "mousemoved");
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g2.moved);
      noevent_default2(event2);
      g2.event(event2).end();
    }
    __name(mouseupped, "mouseupped");
  }
  __name(mousedowned, "mousedowned");
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select_default2(this).call(zoom.transform, t1, p0, event);
  }
  __name(dblclicked, "dblclicked");
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g2 = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g2.touch0) g2.touch0 = p, started = true, g2.taps = 1 + !!touchstarting;
      else if (!g2.touch1 && g2.touch0[2] !== p[2]) g2.touch1 = p, g2.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g2.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g2.start();
    }
  }
  __name(touchstarted, "touchstarted");
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g2.touch0 && g2.touch0[2] === t.identifier) g2.touch0[0] = p;
      else if (g2.touch1 && g2.touch1[2] === t.identifier) g2.touch1[0] = p;
    }
    t = g2.that.__zoom;
    if (g2.touch1) {
      var p0 = g2.touch0[0], l0 = g2.touch0[1], p1 = g2.touch1[0], l1 = g2.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g2.touch0) p = g2.touch0[0], l = g2.touch0[1];
    else return;
    g2.zoom("touch", constrain(translate(t, p, l), g2.extent, translateExtent));
  }
  __name(touchmoved, "touchmoved");
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g2.touch0 && g2.touch0[2] === t.identifier) delete g2.touch0;
      else if (g2.touch1 && g2.touch1[2] === t.identifier) delete g2.touch1;
    }
    if (g2.touch1 && !g2.touch0) g2.touch0 = g2.touch1, delete g2.touch1;
    if (g2.touch0) g2.touch0[1] = this.__zoom.invert(g2.touch0[0]);
    else {
      g2.end();
      if (g2.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  __name(touchended, "touchended");
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant_default4(+_), zoom) : wheelDelta2;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : filter2;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}
__name(zoom_default2, "default");

// node_modules/@xyflow/system/dist/esm/index.js
var errorMessages = {
  error001: /* @__PURE__ */ __name((lib = "react") => `Seems like you have not used zustand provider as an ancestor. Help: https://${lib}flow.dev/error#001`, "error001"),
  error002: /* @__PURE__ */ __name(() => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.", "error002"),
  error003: /* @__PURE__ */ __name((nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`, "error003"),
  error004: /* @__PURE__ */ __name(() => "The parent container needs a width and a height to render the graph.", "error004"),
  error005: /* @__PURE__ */ __name(() => "Only child nodes can use a parent extent.", "error005"),
  error006: /* @__PURE__ */ __name(() => "Can't create edge. An edge needs a source and a target.", "error006"),
  error007: /* @__PURE__ */ __name((id2) => `The old edge with id=${id2} does not exist.`, "error007"),
  error009: /* @__PURE__ */ __name((type) => `Marker type "${type}" doesn't exist.`, "error009"),
  error008: /* @__PURE__ */ __name((handleType, { id: id2, sourceHandle, targetHandle }) => `Couldn't create edge for ${handleType} handle id: "${handleType === "source" ? sourceHandle : targetHandle}", edge id: ${id2}.`, "error008"),
  error010: /* @__PURE__ */ __name(() => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.", "error010"),
  error011: /* @__PURE__ */ __name((edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`, "error011"),
  error012: /* @__PURE__ */ __name((id2) => `Node with id "${id2}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`, "error012"),
  error013: /* @__PURE__ */ __name((lib = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${lib}/dist/style.css' or base.css to make sure everything is working properly.`, "error013"),
  error014: /* @__PURE__ */ __name(() => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.", "error014"),
  error015: /* @__PURE__ */ __name(() => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.", "error015"),
  error016: /* @__PURE__ */ __name((id2) => `Edge with id "${id2}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`, "error016")
};
var infiniteExtent = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var elementSelectionKeys = ["Enter", " ", "Escape"];
var defaultAriaLabelConfig = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": /* @__PURE__ */ __name(({ direction, x, y }) => `Moved selected node ${direction}. New position, x: ${x}, y: ${y}`, "node.a11yDescription.ariaLiveMessage"),
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var ConnectionMode;
(function(ConnectionMode2) {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));
var PanOnScrollMode;
(function(PanOnScrollMode2) {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
})(SelectionMode || (SelectionMode = {}));
var initialConnection = {
  inProgress: false,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var ConnectionLineType;
(function(ConnectionLineType2) {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  ConnectionLineType2["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));
var MarkerType;
(function(MarkerType2) {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));
var Position;
(function(Position2) {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
})(Position || (Position = {}));
var oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
function getConnectionStatus(isValid) {
  return isValid === null ? null : isValid ? "valid" : "invalid";
}
__name(getConnectionStatus, "getConnectionStatus");
var isEdgeBase = /* @__PURE__ */ __name((element) => "id" in element && "source" in element && "target" in element, "isEdgeBase");
var isNodeBase = /* @__PURE__ */ __name((element) => "id" in element && "position" in element && !("source" in element) && !("target" in element), "isNodeBase");
var isInternalNodeBase = /* @__PURE__ */ __name((element) => "id" in element && "internals" in element && !("source" in element) && !("target" in element), "isInternalNodeBase");
var getNodePositionWithOrigin = /* @__PURE__ */ __name((node, nodeOrigin = [0, 0]) => {
  const { width, height } = getNodeDimensions(node);
  const origin = node.origin ?? nodeOrigin;
  const offsetX = width * origin[0];
  const offsetY = height * origin[1];
  return {
    x: node.position.x - offsetX,
    y: node.position.y - offsetY
  };
}, "getNodePositionWithOrigin");
var getNodesBounds = /* @__PURE__ */ __name((nodes, params = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !params.nodeLookup) {
    console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows.");
  }
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const box = nodes.reduce((currBox, nodeOrId) => {
    const isId = typeof nodeOrId === "string";
    let currentNode = !params.nodeLookup && !isId ? nodeOrId : void 0;
    if (params.nodeLookup) {
      currentNode = isId ? params.nodeLookup.get(nodeOrId) : !isInternalNodeBase(nodeOrId) ? params.nodeLookup.get(nodeOrId.id) : nodeOrId;
    }
    const nodeBox = currentNode ? nodeToBox(currentNode, params.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return getBoundsOfBoxes(currBox, nodeBox);
  }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
  return boxToRect(box);
}, "getNodesBounds");
var getInternalNodesBounds = /* @__PURE__ */ __name((nodeLookup, params = {}) => {
  let box = { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity };
  let hasVisibleNodes = false;
  nodeLookup.forEach((node) => {
    if (params.filter === void 0 || params.filter(node)) {
      box = getBoundsOfBoxes(box, nodeToBox(node));
      hasVisibleNodes = true;
    }
  });
  return hasVisibleNodes ? boxToRect(box) : { x: 0, y: 0, width: 0, height: 0 };
}, "getInternalNodesBounds");
var getNodesInside = /* @__PURE__ */ __name((nodes, rect, [tx, ty, tScale] = [0, 0, 1], partially = false, excludeNonSelectableNodes = false) => {
  const paneRect = {
    ...pointToRendererPoint(rect, [tx, ty, tScale]),
    width: rect.width / tScale,
    height: rect.height / tScale
  };
  const visibleNodes = [];
  for (const node of nodes.values()) {
    const { measured, selectable = true, hidden = false } = node;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      continue;
    }
    const width = measured.width ?? node.width ?? node.initialWidth ?? null;
    const height = measured.height ?? node.height ?? node.initialHeight ?? null;
    const overlappingArea = getOverlappingArea(paneRect, nodeToRect(node));
    const area = (width ?? 0) * (height ?? 0);
    const partiallyVisible = partially && overlappingArea > 0;
    const forceInitialRender = !node.internals.handleBounds;
    const isVisible = forceInitialRender || partiallyVisible || overlappingArea >= area;
    if (isVisible || node.dragging) {
      visibleNodes.push(node);
    }
  }
  return visibleNodes;
}, "getNodesInside");
var getConnectedEdges = /* @__PURE__ */ __name((nodes, edges) => {
  const nodeIds = /* @__PURE__ */ new Set();
  nodes.forEach((node) => {
    nodeIds.add(node.id);
  });
  return edges.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target));
}, "getConnectedEdges");
function getFitViewNodes(nodeLookup, options2) {
  const fitViewNodes = /* @__PURE__ */ new Map();
  const optionNodeIds = options2?.nodes ? new Set(options2.nodes.map((node) => node.id)) : null;
  nodeLookup.forEach((n) => {
    const isVisible = n.measured.width && n.measured.height && (options2?.includeHiddenNodes || !n.hidden);
    if (isVisible && (!optionNodeIds || optionNodeIds.has(n.id))) {
      fitViewNodes.set(n.id, n);
    }
  });
  return fitViewNodes;
}
__name(getFitViewNodes, "getFitViewNodes");
async function fitViewport({ nodes, width, height, panZoom, minZoom, maxZoom }, options2) {
  if (nodes.size === 0) {
    return true;
  }
  const nodesToFit = getFitViewNodes(nodes, options2);
  const bounds = getInternalNodesBounds(nodesToFit);
  const viewport = getViewportForBounds(bounds, width, height, options2?.minZoom ?? minZoom, options2?.maxZoom ?? maxZoom, options2?.padding ?? 0.1);
  await panZoom.setViewport(viewport, {
    duration: options2?.duration,
    ease: options2?.ease,
    interpolate: options2?.interpolate
  });
  return true;
}
__name(fitViewport, "fitViewport");
function calculateNodePosition({ nodeId, nextPosition, nodeLookup, nodeOrigin = [0, 0], nodeExtent, onError }) {
  const node = nodeLookup.get(nodeId);
  const parentNode = node.parentId ? nodeLookup.get(node.parentId) : void 0;
  const { x: parentX, y: parentY } = parentNode ? parentNode.internals.positionAbsolute : { x: 0, y: 0 };
  const origin = node.origin ?? nodeOrigin;
  let extent = node.extent || nodeExtent;
  if (node.extent === "parent" && !node.expandParent) {
    if (!parentNode) {
      onError?.("005", errorMessages["error005"]());
    } else {
      const parentWidth = parentNode.measured.width;
      const parentHeight = parentNode.measured.height;
      if (parentWidth && parentHeight) {
        extent = [
          [parentX, parentY],
          [parentX + parentWidth, parentY + parentHeight]
        ];
      }
    }
  } else if (parentNode && isCoordinateExtent(node.extent)) {
    extent = [
      [node.extent[0][0] + parentX, node.extent[0][1] + parentY],
      [node.extent[1][0] + parentX, node.extent[1][1] + parentY]
    ];
  }
  const positionAbsolute = isCoordinateExtent(extent) ? clampPosition(nextPosition, extent, node.measured) : nextPosition;
  if (node.measured.width === void 0 || node.measured.height === void 0) {
    onError?.("015", errorMessages["error015"]());
  }
  return {
    position: {
      x: positionAbsolute.x - parentX + (node.measured.width ?? 0) * origin[0],
      y: positionAbsolute.y - parentY + (node.measured.height ?? 0) * origin[1]
    },
    positionAbsolute
  };
}
__name(calculateNodePosition, "calculateNodePosition");
async function getElementsToRemove({ nodesToRemove = [], edgesToRemove = [], nodes, edges, onBeforeDelete }) {
  const nodeIds = new Set(nodesToRemove.map((node) => node.id));
  const matchingNodes = [];
  for (const node of nodes) {
    if (node.deletable === false) {
      continue;
    }
    const isIncluded = nodeIds.has(node.id);
    const parentHit = !isIncluded && node.parentId && matchingNodes.find((n) => n.id === node.parentId);
    if (isIncluded || parentHit) {
      matchingNodes.push(node);
    }
  }
  const edgeIds = new Set(edgesToRemove.map((edge) => edge.id));
  const deletableEdges = edges.filter((edge) => edge.deletable !== false);
  const connectedEdges = getConnectedEdges(matchingNodes, deletableEdges);
  const matchingEdges = connectedEdges;
  for (const edge of deletableEdges) {
    const isIncluded = edgeIds.has(edge.id);
    if (isIncluded && !matchingEdges.find((e) => e.id === edge.id)) {
      matchingEdges.push(edge);
    }
  }
  if (!onBeforeDelete) {
    return {
      edges: matchingEdges,
      nodes: matchingNodes
    };
  }
  const onBeforeDeleteResult = await onBeforeDelete({
    nodes: matchingNodes,
    edges: matchingEdges
  });
  if (typeof onBeforeDeleteResult === "boolean") {
    return onBeforeDeleteResult ? { edges: matchingEdges, nodes: matchingNodes } : { edges: [], nodes: [] };
  }
  return onBeforeDeleteResult;
}
__name(getElementsToRemove, "getElementsToRemove");
var clamp = /* @__PURE__ */ __name((val, min = 0, max = 1) => Math.min(Math.max(val, min), max), "clamp");
var clampPosition = /* @__PURE__ */ __name((position = { x: 0, y: 0 }, extent, dimensions) => ({
  x: clamp(position.x, extent[0][0], extent[1][0] - (dimensions?.width ?? 0)),
  y: clamp(position.y, extent[0][1], extent[1][1] - (dimensions?.height ?? 0))
}), "clampPosition");
function clampPositionToParent(childPosition, childDimensions, parent) {
  const { width: parentWidth, height: parentHeight } = getNodeDimensions(parent);
  const { x: parentX, y: parentY } = parent.internals.positionAbsolute;
  return clampPosition(childPosition, [
    [parentX, parentY],
    [parentX + parentWidth, parentY + parentHeight]
  ], childDimensions);
}
__name(clampPositionToParent, "clampPositionToParent");
var calcAutoPanVelocity = /* @__PURE__ */ __name((value, min, max) => {
  if (value < min) {
    return clamp(Math.abs(value - min), 1, min) / min;
  } else if (value > max) {
    return -clamp(Math.abs(value - max), 1, min) / min;
  }
  return 0;
}, "calcAutoPanVelocity");
var calcAutoPan = /* @__PURE__ */ __name((pos, bounds, speed = 15, distance2 = 40) => {
  const xMovement = calcAutoPanVelocity(pos.x, distance2, bounds.width - distance2) * speed;
  const yMovement = calcAutoPanVelocity(pos.y, distance2, bounds.height - distance2) * speed;
  return [xMovement, yMovement];
}, "calcAutoPan");
var getBoundsOfBoxes = /* @__PURE__ */ __name((box1, box2) => ({
  x: Math.min(box1.x, box2.x),
  y: Math.min(box1.y, box2.y),
  x2: Math.max(box1.x2, box2.x2),
  y2: Math.max(box1.y2, box2.y2)
}), "getBoundsOfBoxes");
var rectToBox = /* @__PURE__ */ __name(({ x, y, width, height }) => ({
  x,
  y,
  x2: x + width,
  y2: y + height
}), "rectToBox");
var boxToRect = /* @__PURE__ */ __name(({ x, y, x2, y2 }) => ({
  x,
  y,
  width: x2 - x,
  height: y2 - y
}), "boxToRect");
var nodeToRect = /* @__PURE__ */ __name((node, nodeOrigin = [0, 0]) => {
  const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
  return {
    x,
    y,
    width: node.measured?.width ?? node.width ?? node.initialWidth ?? 0,
    height: node.measured?.height ?? node.height ?? node.initialHeight ?? 0
  };
}, "nodeToRect");
var nodeToBox = /* @__PURE__ */ __name((node, nodeOrigin = [0, 0]) => {
  const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
  return {
    x,
    y,
    x2: x + (node.measured?.width ?? node.width ?? node.initialWidth ?? 0),
    y2: y + (node.measured?.height ?? node.height ?? node.initialHeight ?? 0)
  };
}, "nodeToBox");
var getBoundsOfRects = /* @__PURE__ */ __name((rect1, rect2) => boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2))), "getBoundsOfRects");
var getOverlappingArea = /* @__PURE__ */ __name((rectA, rectB) => {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
}, "getOverlappingArea");
var isRectObject = /* @__PURE__ */ __name((obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y), "isRectObject");
var isNumeric = /* @__PURE__ */ __name((n) => !isNaN(n) && isFinite(n), "isNumeric");
var createDevWarn = /* @__PURE__ */ __name((lib, helpUrl) => (id2, message) => {
  if (process.env.NODE_ENV === "development") {
    console.warn(`[${lib}]: ${message} Help: ${helpUrl}error#${id2}`);
  }
}, "createDevWarn");
var snapPosition = /* @__PURE__ */ __name((position, snapGrid = [1, 1]) => {
  return {
    x: snapGrid[0] * Math.round(position.x / snapGrid[0]),
    y: snapGrid[1] * Math.round(position.y / snapGrid[1])
  };
}, "snapPosition");
var pointToRendererPoint = /* @__PURE__ */ __name(({ x, y }, [tx, ty, tScale], snapToGrid = false, snapGrid = [1, 1]) => {
  const position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  return snapToGrid ? snapPosition(position, snapGrid) : position;
}, "pointToRendererPoint");
var rendererPointToPoint = /* @__PURE__ */ __name(({ x, y }, [tx, ty, tScale]) => {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
}, "rendererPointToPoint");
function parsePadding(padding, viewport) {
  if (typeof padding === "number") {
    return Math.floor((viewport - viewport / (1 + padding)) * 0.5);
  }
  if (typeof padding === "string" && padding.endsWith("px")) {
    const paddingValue = parseFloat(padding);
    if (!Number.isNaN(paddingValue)) {
      return Math.floor(paddingValue);
    }
  }
  if (typeof padding === "string" && padding.endsWith("%")) {
    const paddingValue = parseFloat(padding);
    if (!Number.isNaN(paddingValue)) {
      return Math.floor(viewport * paddingValue * 0.01);
    }
  }
  console.error(`The padding value "${padding}" is invalid. Please provide a number or a string with a valid unit (px or %).`);
  return 0;
}
__name(parsePadding, "parsePadding");
function parsePaddings(padding, width, height) {
  if (typeof padding === "string" || typeof padding === "number") {
    const paddingY = parsePadding(padding, height);
    const paddingX = parsePadding(padding, width);
    return {
      top: paddingY,
      right: paddingX,
      bottom: paddingY,
      left: paddingX,
      x: paddingX * 2,
      y: paddingY * 2
    };
  }
  if (typeof padding === "object") {
    const top = parsePadding(padding.top ?? padding.y ?? 0, height);
    const bottom = parsePadding(padding.bottom ?? padding.y ?? 0, height);
    const left = parsePadding(padding.left ?? padding.x ?? 0, width);
    const right = parsePadding(padding.right ?? padding.x ?? 0, width);
    return { top, right, bottom, left, x: left + right, y: top + bottom };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
__name(parsePaddings, "parsePaddings");
function calculateAppliedPaddings(bounds, x, y, zoom, width, height) {
  const { x: left, y: top } = rendererPointToPoint(bounds, [x, y, zoom]);
  const { x: boundRight, y: boundBottom } = rendererPointToPoint({ x: bounds.x + bounds.width, y: bounds.y + bounds.height }, [x, y, zoom]);
  const right = width - boundRight;
  const bottom = height - boundBottom;
  return {
    left: Math.floor(left),
    top: Math.floor(top),
    right: Math.floor(right),
    bottom: Math.floor(bottom)
  };
}
__name(calculateAppliedPaddings, "calculateAppliedPaddings");
var getViewportForBounds = /* @__PURE__ */ __name((bounds, width, height, minZoom, maxZoom, padding) => {
  const p = parsePaddings(padding, width, height);
  const xZoom = (width - p.x) / bounds.width;
  const yZoom = (height - p.y) / bounds.height;
  const zoom = Math.min(xZoom, yZoom);
  const clampedZoom = clamp(zoom, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom;
  const y = height / 2 - boundsCenterY * clampedZoom;
  const newPadding = calculateAppliedPaddings(bounds, x, y, clampedZoom, width, height);
  const offset = {
    left: Math.min(newPadding.left - p.left, 0),
    top: Math.min(newPadding.top - p.top, 0),
    right: Math.min(newPadding.right - p.right, 0),
    bottom: Math.min(newPadding.bottom - p.bottom, 0)
  };
  return {
    x: x - offset.left + offset.right,
    y: y - offset.top + offset.bottom,
    zoom: clampedZoom
  };
}, "getViewportForBounds");
var isMacOs = /* @__PURE__ */ __name(() => typeof navigator !== "undefined" && navigator?.userAgent?.indexOf("Mac") >= 0, "isMacOs");
function isCoordinateExtent(extent) {
  return extent !== void 0 && extent !== null && extent !== "parent";
}
__name(isCoordinateExtent, "isCoordinateExtent");
function getNodeDimensions(node) {
  return {
    width: node.measured?.width ?? node.width ?? node.initialWidth ?? 0,
    height: node.measured?.height ?? node.height ?? node.initialHeight ?? 0
  };
}
__name(getNodeDimensions, "getNodeDimensions");
function nodeHasDimensions(node) {
  return (node.measured?.width ?? node.width ?? node.initialWidth) !== void 0 && (node.measured?.height ?? node.height ?? node.initialHeight) !== void 0;
}
__name(nodeHasDimensions, "nodeHasDimensions");
function evaluateAbsolutePosition(position, dimensions = { width: 0, height: 0 }, parentId, nodeLookup, nodeOrigin) {
  const positionAbsolute = { ...position };
  const parent = nodeLookup.get(parentId);
  if (parent) {
    const origin = parent.origin || nodeOrigin;
    positionAbsolute.x += parent.internals.positionAbsolute.x - (dimensions.width ?? 0) * origin[0];
    positionAbsolute.y += parent.internals.positionAbsolute.y - (dimensions.height ?? 0) * origin[1];
  }
  return positionAbsolute;
}
__name(evaluateAbsolutePosition, "evaluateAbsolutePosition");
function areSetsEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}
__name(areSetsEqual, "areSetsEqual");
function withResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
__name(withResolvers, "withResolvers");
function mergeAriaLabelConfig(partial) {
  return { ...defaultAriaLabelConfig, ...partial || {} };
}
__name(mergeAriaLabelConfig, "mergeAriaLabelConfig");
function getPointerPosition(event, { snapGrid = [0, 0], snapToGrid = false, transform: transform2, containerBounds }) {
  const { x, y } = getEventPosition(event);
  const pointerPos = pointToRendererPoint({ x: x - (containerBounds?.left ?? 0), y: y - (containerBounds?.top ?? 0) }, transform2);
  const { x: xSnapped, y: ySnapped } = snapToGrid ? snapPosition(pointerPos, snapGrid) : pointerPos;
  return {
    xSnapped,
    ySnapped,
    ...pointerPos
  };
}
__name(getPointerPosition, "getPointerPosition");
var getDimensions = /* @__PURE__ */ __name((node) => ({
  width: node.offsetWidth,
  height: node.offsetHeight
}), "getDimensions");
var getHostForElement = /* @__PURE__ */ __name((element) => element?.getRootNode?.() || window?.document, "getHostForElement");
var inputTags = ["INPUT", "SELECT", "TEXTAREA"];
function isInputDOMNode(event) {
  const target = event.composedPath?.()?.[0] || event.target;
  if (target?.nodeType !== 1)
    return false;
  const isInput = inputTags.includes(target.nodeName) || target.hasAttribute("contenteditable");
  return isInput || !!target.closest(".nokey");
}
__name(isInputDOMNode, "isInputDOMNode");
var isMouseEvent = /* @__PURE__ */ __name((event) => "clientX" in event, "isMouseEvent");
var getEventPosition = /* @__PURE__ */ __name((event, bounds) => {
  const isMouse = isMouseEvent(event);
  const evtX = isMouse ? event.clientX : event.touches?.[0].clientX;
  const evtY = isMouse ? event.clientY : event.touches?.[0].clientY;
  return {
    x: evtX - (bounds?.left ?? 0),
    y: evtY - (bounds?.top ?? 0)
  };
}, "getEventPosition");
var getHandleBounds = /* @__PURE__ */ __name((type, nodeElement, nodeBounds, zoom, nodeId) => {
  const handles = nodeElement.querySelectorAll(`.${type}`);
  if (!handles || !handles.length) {
    return null;
  }
  return Array.from(handles).map((handle) => {
    const handleBounds = handle.getBoundingClientRect();
    return {
      id: handle.getAttribute("data-handleid"),
      type,
      nodeId,
      position: handle.getAttribute("data-handlepos"),
      x: (handleBounds.left - nodeBounds.left) / zoom,
      y: (handleBounds.top - nodeBounds.top) / zoom,
      ...getDimensions(handle)
    };
  });
}, "getHandleBounds");
function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
__name(getBezierEdgeCenter, "getBezierEdgeCenter");
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  }
  return curvature * 25 * Math.sqrt(-distance2);
}
__name(calculateControlOffset, "calculateControlOffset");
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
  switch (pos) {
    case Position.Left:
      return [x1 - calculateControlOffset(x1 - x2, c), y1];
    case Position.Right:
      return [x1 + calculateControlOffset(x2 - x1, c), y1];
    case Position.Top:
      return [x1, y1 - calculateControlOffset(y1 - y2, c)];
    case Position.Bottom:
      return [x1, y1 + calculateControlOffset(y2 - y1, c)];
  }
}
__name(getControlWithCurvature, "getControlWithCurvature");
function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = 0.25 }) {
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
__name(getBezierPath, "getBezierPath");
function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
__name(getEdgeCenter, "getEdgeCenter");
function getElevatedEdgeZIndex({ sourceNode, targetNode, selected: selected2 = false, zIndex = 0, elevateOnSelect = false, zIndexMode = "basic" }) {
  if (zIndexMode === "manual") {
    return zIndex;
  }
  const edgeZ = elevateOnSelect && selected2 ? zIndex + 1e3 : zIndex;
  const nodeZ = Math.max(sourceNode.parentId || elevateOnSelect && sourceNode.selected ? sourceNode.internals.z : 0, targetNode.parentId || elevateOnSelect && targetNode.selected ? targetNode.internals.z : 0);
  return edgeZ + nodeZ;
}
__name(getElevatedEdgeZIndex, "getElevatedEdgeZIndex");
function isEdgeVisible({ sourceNode, targetNode, width, height, transform: transform2 }) {
  const edgeBox = getBoundsOfBoxes(nodeToBox(sourceNode), nodeToBox(targetNode));
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewRect = {
    x: -transform2[0] / transform2[2],
    y: -transform2[1] / transform2[2],
    width: width / transform2[2],
    height: height / transform2[2]
  };
  return getOverlappingArea(viewRect, boxToRect(edgeBox)) > 0;
}
__name(isEdgeVisible, "isEdgeVisible");
var getEdgeId = /* @__PURE__ */ __name(({ source, sourceHandle, target, targetHandle }) => `xy-edge__${source}${sourceHandle || ""}-${target}${targetHandle || ""}`, "getEdgeId");
var connectionExists = /* @__PURE__ */ __name((edge, edges) => {
  return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
}, "connectionExists");
var addEdge = /* @__PURE__ */ __name((edgeParams, edges, options2 = {}) => {
  if (!edgeParams.source || !edgeParams.target) {
    options2.onError?.("006", errorMessages["error006"]());
    return edges;
  }
  const edgeIdGenerator = options2.getEdgeId || getEdgeId;
  let edge;
  if (isEdgeBase(edgeParams)) {
    edge = { ...edgeParams };
  } else {
    edge = {
      ...edgeParams,
      id: edgeIdGenerator(edgeParams)
    };
  }
  if (connectionExists(edge, edges)) {
    return edges;
  }
  if (edge.sourceHandle === null) {
    delete edge.sourceHandle;
  }
  if (edge.targetHandle === null) {
    delete edge.targetHandle;
  }
  return edges.concat(edge);
}, "addEdge");
function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
  const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, labelX, labelY, offsetX, offsetY];
}
__name(getStraightPath, "getStraightPath");
var handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
var getDirection = /* @__PURE__ */ __name(({ source, sourcePosition = Position.Bottom, target }) => {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}, "getDirection");
var distance = /* @__PURE__ */ __name((a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)), "distance");
function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset, stepPosition }) {
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
  const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
  const dir = getDirection({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points = [];
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [, , defaultOffsetX, defaultOffsetY] = getEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    if (dirAccessor === "x") {
      centerX = center.x ?? sourceGapped.x + (targetGapped.x - sourceGapped.x) * stepPosition;
      centerY = center.y ?? (sourceGapped.y + targetGapped.y) / 2;
    } else {
      centerX = center.x ?? (sourceGapped.x + targetGapped.x) / 2;
      centerY = center.y ?? sourceGapped.y + (targetGapped.y - sourceGapped.y) * stepPosition;
    }
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
      if (diff <= offset) {
        const gapOffset = Math.min(offset - 1, offset - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const gappedSource = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
  const gappedTarget = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
  const pathPoints = [
    source,
    // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
    ...gappedSource.x !== points[0].x || gappedSource.y !== points[0].y ? [gappedSource] : [],
    ...points,
    ...gappedTarget.x !== points[points.length - 1].x || gappedTarget.y !== points[points.length - 1].y ? [gappedTarget] : [],
    target
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
__name(getPoints, "getPoints");
function getBend(a, b, c, size) {
  const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c.x || a.y === y && y === c.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c.x ? -1 : 1;
    const yDir2 = a.y < c.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c.x ? 1 : -1;
  const yDir = a.y < c.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
__name(getBend, "getBend");
function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset = 20, stepPosition = 0.5 }) {
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset,
    stepPosition
  });
  let path = `M${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    path += getBend(points[i - 1], points[i], points[i + 1], borderRadius);
  }
  path += `L${points[points.length - 1].x} ${points[points.length - 1].y}`;
  return [path, labelX, labelY, offsetX, offsetY];
}
__name(getSmoothStepPath, "getSmoothStepPath");
function isNodeInitialized(node) {
  return node && !!(node.internals.handleBounds || node.handles?.length) && !!(node.measured.width || node.width || node.initialWidth);
}
__name(isNodeInitialized, "isNodeInitialized");
function getEdgePosition(params) {
  const { sourceNode, targetNode } = params;
  if (!isNodeInitialized(sourceNode) || !isNodeInitialized(targetNode)) {
    return null;
  }
  const sourceHandleBounds = sourceNode.internals.handleBounds || toHandleBounds(sourceNode.handles);
  const targetHandleBounds = targetNode.internals.handleBounds || toHandleBounds(targetNode.handles);
  const sourceHandle = getHandle$1(sourceHandleBounds?.source ?? [], params.sourceHandle);
  const targetHandle = getHandle$1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    params.connectionMode === ConnectionMode.Strict ? targetHandleBounds?.target ?? [] : (targetHandleBounds?.target ?? []).concat(targetHandleBounds?.source ?? []),
    params.targetHandle
  );
  if (!sourceHandle || !targetHandle) {
    params.onError?.("008", errorMessages["error008"](!sourceHandle ? "source" : "target", {
      id: params.id,
      sourceHandle: params.sourceHandle,
      targetHandle: params.targetHandle
    }));
    return null;
  }
  const sourcePosition = sourceHandle?.position || Position.Bottom;
  const targetPosition = targetHandle?.position || Position.Top;
  const source = getHandlePosition(sourceNode, sourceHandle, sourcePosition);
  const target = getHandlePosition(targetNode, targetHandle, targetPosition);
  return {
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y,
    sourcePosition,
    targetPosition
  };
}
__name(getEdgePosition, "getEdgePosition");
function toHandleBounds(handles) {
  if (!handles) {
    return null;
  }
  const source = [];
  const target = [];
  for (const handle of handles) {
    handle.width = handle.width ?? 1;
    handle.height = handle.height ?? 1;
    if (handle.type === "source") {
      source.push(handle);
    } else if (handle.type === "target") {
      target.push(handle);
    }
  }
  return {
    source,
    target
  };
}
__name(toHandleBounds, "toHandleBounds");
function getHandlePosition(node, handle, fallbackPosition = Position.Left, center = false) {
  const x = (handle?.x ?? 0) + node.internals.positionAbsolute.x;
  const y = (handle?.y ?? 0) + node.internals.positionAbsolute.y;
  const { width, height } = handle ?? getNodeDimensions(node);
  if (center) {
    return { x: x + width / 2, y: y + height / 2 };
  }
  const position = handle?.position ?? fallbackPosition;
  switch (position) {
    case Position.Top:
      return { x: x + width / 2, y };
    case Position.Right:
      return { x: x + width, y: y + height / 2 };
    case Position.Bottom:
      return { x: x + width / 2, y: y + height };
    case Position.Left:
      return { x, y: y + height / 2 };
  }
}
__name(getHandlePosition, "getHandlePosition");
function getHandle$1(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  return (!handleId ? bounds[0] : bounds.find((d) => d.id === handleId)) || null;
}
__name(getHandle$1, "getHandle$1");
function getMarkerId(marker, id2) {
  if (!marker) {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = id2 ? `${id2}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
}
__name(getMarkerId, "getMarkerId");
function createMarkerIds(edges, { id: id2, defaultColor, defaultMarkerStart, defaultMarkerEnd }) {
  const ids = /* @__PURE__ */ new Set();
  return edges.reduce((markers, edge) => {
    [edge.markerStart || defaultMarkerStart, edge.markerEnd || defaultMarkerEnd].forEach((marker) => {
      if (marker && typeof marker === "object") {
        const markerId = getMarkerId(marker, id2);
        if (!ids.has(markerId)) {
          markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
          ids.add(markerId);
        }
      }
    });
    return markers;
  }, []).sort((a, b) => a.id.localeCompare(b.id));
}
__name(createMarkerIds, "createMarkerIds");
var SELECTED_NODE_Z = 1e3;
var ROOT_PARENT_Z_INCREMENT = 10;
var defaultOptions = {
  nodeOrigin: [0, 0],
  nodeExtent: infiniteExtent,
  elevateNodesOnSelect: true,
  zIndexMode: "basic",
  defaults: {}
};
var adoptUserNodesDefaultOptions = {
  ...defaultOptions,
  checkEquality: true
};
function mergeObjects(base, incoming) {
  const result = { ...base };
  for (const key in incoming) {
    if (incoming[key] !== void 0) {
      result[key] = incoming[key];
    }
  }
  return result;
}
__name(mergeObjects, "mergeObjects");
function updateAbsolutePositions(nodeLookup, parentLookup, options2) {
  const _options = mergeObjects(defaultOptions, options2);
  for (const node of nodeLookup.values()) {
    if (node.parentId) {
      updateChildNode(node, nodeLookup, parentLookup, _options);
    } else {
      const positionWithOrigin = getNodePositionWithOrigin(node, _options.nodeOrigin);
      const extent = isCoordinateExtent(node.extent) ? node.extent : _options.nodeExtent;
      const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(node));
      node.internals.positionAbsolute = clampedPosition;
    }
  }
}
__name(updateAbsolutePositions, "updateAbsolutePositions");
function parseHandles(userNode, internalNode) {
  if (!userNode.handles) {
    return !userNode.measured ? void 0 : internalNode?.internals.handleBounds;
  }
  const source = [];
  const target = [];
  for (const handle of userNode.handles) {
    const handleBounds = {
      id: handle.id,
      width: handle.width ?? 1,
      height: handle.height ?? 1,
      nodeId: userNode.id,
      x: handle.x,
      y: handle.y,
      position: handle.position,
      type: handle.type
    };
    if (handle.type === "source") {
      source.push(handleBounds);
    } else if (handle.type === "target") {
      target.push(handleBounds);
    }
  }
  return {
    source,
    target
  };
}
__name(parseHandles, "parseHandles");
function isManualZIndexMode(zIndexMode) {
  return zIndexMode === "manual";
}
__name(isManualZIndexMode, "isManualZIndexMode");
function adoptUserNodes(nodes, nodeLookup, parentLookup, options2 = {}) {
  const _options = mergeObjects(adoptUserNodesDefaultOptions, options2);
  const rootParentIndex = { i: 0 };
  const tmpLookup = new Map(nodeLookup);
  const selectedNodeZ = _options?.elevateNodesOnSelect && !isManualZIndexMode(_options.zIndexMode) ? SELECTED_NODE_Z : 0;
  let nodesInitialized = nodes.length > 0;
  let hasSelectedNodes = false;
  nodeLookup.clear();
  parentLookup.clear();
  for (const userNode of nodes) {
    let internalNode = tmpLookup.get(userNode.id);
    if (_options.checkEquality && userNode === internalNode?.internals.userNode) {
      nodeLookup.set(userNode.id, internalNode);
    } else {
      const positionWithOrigin = getNodePositionWithOrigin(userNode, _options.nodeOrigin);
      const extent = isCoordinateExtent(userNode.extent) ? userNode.extent : _options.nodeExtent;
      const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(userNode));
      internalNode = {
        ..._options.defaults,
        ...userNode,
        measured: {
          width: userNode.measured?.width,
          height: userNode.measured?.height
        },
        internals: {
          positionAbsolute: clampedPosition,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: parseHandles(userNode, internalNode),
          z: calculateZ(userNode, selectedNodeZ, _options.zIndexMode),
          userNode
        }
      };
      nodeLookup.set(userNode.id, internalNode);
    }
    if ((internalNode.measured === void 0 || internalNode.measured.width === void 0 || internalNode.measured.height === void 0) && !internalNode.hidden) {
      nodesInitialized = false;
    }
    if (userNode.parentId) {
      updateChildNode(internalNode, nodeLookup, parentLookup, options2, rootParentIndex);
    }
    hasSelectedNodes ||= userNode.selected ?? false;
  }
  return { nodesInitialized, hasSelectedNodes };
}
__name(adoptUserNodes, "adoptUserNodes");
function updateParentLookup(node, parentLookup) {
  if (!node.parentId) {
    return;
  }
  const childNodes = parentLookup.get(node.parentId);
  if (childNodes) {
    childNodes.set(node.id, node);
  } else {
    parentLookup.set(node.parentId, /* @__PURE__ */ new Map([[node.id, node]]));
  }
}
__name(updateParentLookup, "updateParentLookup");
function updateChildNode(node, nodeLookup, parentLookup, options2, rootParentIndex) {
  const { elevateNodesOnSelect, nodeOrigin, nodeExtent, zIndexMode } = mergeObjects(defaultOptions, options2);
  const parentId = node.parentId;
  const parentNode = nodeLookup.get(parentId);
  if (!parentNode) {
    console.warn(`Parent node ${parentId} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  updateParentLookup(node, parentLookup);
  if (rootParentIndex && !parentNode.parentId && parentNode.internals.rootParentIndex === void 0 && zIndexMode === "auto") {
    parentNode.internals.rootParentIndex = ++rootParentIndex.i;
    parentNode.internals.z = parentNode.internals.z + rootParentIndex.i * ROOT_PARENT_Z_INCREMENT;
  }
  if (rootParentIndex && parentNode.internals.rootParentIndex !== void 0) {
    rootParentIndex.i = parentNode.internals.rootParentIndex;
  }
  const selectedNodeZ = elevateNodesOnSelect && !isManualZIndexMode(zIndexMode) ? SELECTED_NODE_Z : 0;
  const { x, y, z } = calculateChildXYZ(node, parentNode, nodeOrigin, nodeExtent, selectedNodeZ, zIndexMode);
  const { positionAbsolute } = node.internals;
  const positionChanged = x !== positionAbsolute.x || y !== positionAbsolute.y;
  if (positionChanged || z !== node.internals.z) {
    nodeLookup.set(node.id, {
      ...node,
      internals: {
        ...node.internals,
        positionAbsolute: positionChanged ? { x, y } : positionAbsolute,
        z
      }
    });
  }
}
__name(updateChildNode, "updateChildNode");
function calculateZ(node, selectedNodeZ, zIndexMode) {
  const zIndex = isNumeric(node.zIndex) ? node.zIndex : 0;
  if (isManualZIndexMode(zIndexMode)) {
    return zIndex;
  }
  return zIndex + (node.selected ? selectedNodeZ : 0);
}
__name(calculateZ, "calculateZ");
function calculateChildXYZ(childNode, parentNode, nodeOrigin, nodeExtent, selectedNodeZ, zIndexMode) {
  const { x: parentX, y: parentY } = parentNode.internals.positionAbsolute;
  const childDimensions = getNodeDimensions(childNode);
  const positionWithOrigin = getNodePositionWithOrigin(childNode, nodeOrigin);
  const clampedPosition = isCoordinateExtent(childNode.extent) ? clampPosition(positionWithOrigin, childNode.extent, childDimensions) : positionWithOrigin;
  let absolutePosition = clampPosition({ x: parentX + clampedPosition.x, y: parentY + clampedPosition.y }, nodeExtent, childDimensions);
  if (childNode.extent === "parent") {
    absolutePosition = clampPositionToParent(absolutePosition, childDimensions, parentNode);
  }
  const childZ = calculateZ(childNode, selectedNodeZ, zIndexMode);
  const parentZ = parentNode.internals.z ?? 0;
  return {
    x: absolutePosition.x,
    y: absolutePosition.y,
    z: parentZ >= childZ ? parentZ + 1 : childZ
  };
}
__name(calculateChildXYZ, "calculateChildXYZ");
function handleExpandParent(children2, nodeLookup, parentLookup, nodeOrigin = [0, 0]) {
  const changes = [];
  const parentExpansions = /* @__PURE__ */ new Map();
  for (const child of children2) {
    const parent = nodeLookup.get(child.parentId);
    if (!parent) {
      continue;
    }
    const parentRect = parentExpansions.get(child.parentId)?.expandedRect ?? nodeToRect(parent);
    const expandedRect = getBoundsOfRects(parentRect, child.rect);
    parentExpansions.set(child.parentId, { expandedRect, parent });
  }
  if (parentExpansions.size > 0) {
    parentExpansions.forEach(({ expandedRect, parent }, parentId) => {
      const positionAbsolute = parent.internals.positionAbsolute;
      const dimensions = getNodeDimensions(parent);
      const origin = parent.origin ?? nodeOrigin;
      const xChange = expandedRect.x < positionAbsolute.x ? Math.round(Math.abs(positionAbsolute.x - expandedRect.x)) : 0;
      const yChange = expandedRect.y < positionAbsolute.y ? Math.round(Math.abs(positionAbsolute.y - expandedRect.y)) : 0;
      const newWidth = Math.max(dimensions.width, Math.round(expandedRect.width));
      const newHeight = Math.max(dimensions.height, Math.round(expandedRect.height));
      const widthChange = (newWidth - dimensions.width) * origin[0];
      const heightChange = (newHeight - dimensions.height) * origin[1];
      if (xChange > 0 || yChange > 0 || widthChange || heightChange) {
        changes.push({
          id: parentId,
          type: "position",
          position: {
            x: parent.position.x - xChange + widthChange,
            y: parent.position.y - yChange + heightChange
          }
        });
        parentLookup.get(parentId)?.forEach((childNode) => {
          if (!children2.some((child) => child.id === childNode.id)) {
            changes.push({
              id: childNode.id,
              type: "position",
              position: {
                x: childNode.position.x + xChange,
                y: childNode.position.y + yChange
              }
            });
          }
        });
      }
      if (dimensions.width < expandedRect.width || dimensions.height < expandedRect.height || xChange || yChange) {
        changes.push({
          id: parentId,
          type: "dimensions",
          setAttributes: true,
          dimensions: {
            width: newWidth + (xChange ? origin[0] * xChange - widthChange : 0),
            height: newHeight + (yChange ? origin[1] * yChange - heightChange : 0)
          }
        });
      }
    });
  }
  return changes;
}
__name(handleExpandParent, "handleExpandParent");
function updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin, nodeExtent, zIndexMode) {
  const viewportNode = domNode?.querySelector(".xyflow__viewport");
  let updatedInternals = false;
  if (!viewportNode) {
    return { changes: [], updatedInternals };
  }
  const changes = [];
  const style2 = window.getComputedStyle(viewportNode);
  const { m22: zoom } = new window.DOMMatrixReadOnly(style2.transform);
  const parentExpandChildren = [];
  for (const update of updates.values()) {
    const node = nodeLookup.get(update.id);
    if (!node) {
      continue;
    }
    if (node.hidden) {
      nodeLookup.set(node.id, {
        ...node,
        internals: {
          ...node.internals,
          handleBounds: void 0
        }
      });
      updatedInternals = true;
      continue;
    }
    const dimensions = getDimensions(update.nodeElement);
    const dimensionChanged = node.measured.width !== dimensions.width || node.measured.height !== dimensions.height;
    const doUpdate = !!(dimensions.width && dimensions.height && (dimensionChanged || !node.internals.handleBounds || update.force));
    if (doUpdate) {
      const nodeBounds = update.nodeElement.getBoundingClientRect();
      const extent = isCoordinateExtent(node.extent) ? node.extent : nodeExtent;
      let { positionAbsolute } = node.internals;
      if (node.parentId && node.extent === "parent") {
        positionAbsolute = clampPositionToParent(positionAbsolute, dimensions, nodeLookup.get(node.parentId));
      } else if (extent) {
        positionAbsolute = clampPosition(positionAbsolute, extent, dimensions);
      }
      const newNode = {
        ...node,
        measured: dimensions,
        internals: {
          ...node.internals,
          positionAbsolute,
          handleBounds: {
            source: getHandleBounds("source", update.nodeElement, nodeBounds, zoom, node.id),
            target: getHandleBounds("target", update.nodeElement, nodeBounds, zoom, node.id)
          }
        }
      };
      nodeLookup.set(node.id, newNode);
      if (node.parentId) {
        updateChildNode(newNode, nodeLookup, parentLookup, { nodeOrigin, zIndexMode });
      }
      updatedInternals = true;
      if (dimensionChanged) {
        changes.push({
          id: node.id,
          type: "dimensions",
          dimensions
        });
        if (node.expandParent && node.parentId) {
          parentExpandChildren.push({
            id: node.id,
            parentId: node.parentId,
            rect: nodeToRect(newNode, nodeOrigin)
          });
        }
      }
    }
  }
  if (parentExpandChildren.length > 0) {
    const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin);
    changes.push(...parentExpandChanges);
  }
  return { changes, updatedInternals };
}
__name(updateNodeInternals, "updateNodeInternals");
async function panBy({ delta, panZoom, transform: transform2, translateExtent, width, height }) {
  if (!panZoom || !delta.x && !delta.y) {
    return false;
  }
  const nextViewport = await panZoom.setViewportConstrained({
    x: transform2[0] + delta.x,
    y: transform2[1] + delta.y,
    zoom: transform2[2]
  }, [
    [0, 0],
    [width, height]
  ], translateExtent);
  const transformChanged = !!nextViewport && (nextViewport.x !== transform2[0] || nextViewport.y !== transform2[1] || nextViewport.k !== transform2[2]);
  return transformChanged;
}
__name(panBy, "panBy");
function addConnectionToLookup(type, connection, connectionKey, connectionLookup, nodeId, handleId) {
  let key = nodeId;
  const nodeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
  connectionLookup.set(key, nodeMap.set(connectionKey, connection));
  key = `${nodeId}-${type}`;
  const typeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
  connectionLookup.set(key, typeMap.set(connectionKey, connection));
  if (handleId) {
    key = `${nodeId}-${type}-${handleId}`;
    const handleMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
    connectionLookup.set(key, handleMap.set(connectionKey, connection));
  }
}
__name(addConnectionToLookup, "addConnectionToLookup");
function updateConnectionLookup(connectionLookup, edgeLookup, edges) {
  connectionLookup.clear();
  edgeLookup.clear();
  for (const edge of edges) {
    const { source: sourceNode, target: targetNode, sourceHandle = null, targetHandle = null } = edge;
    const connection = { edgeId: edge.id, source: sourceNode, target: targetNode, sourceHandle, targetHandle };
    const sourceKey = `${sourceNode}-${sourceHandle}--${targetNode}-${targetHandle}`;
    const targetKey = `${targetNode}-${targetHandle}--${sourceNode}-${sourceHandle}`;
    addConnectionToLookup("source", connection, targetKey, connectionLookup, sourceNode, sourceHandle);
    addConnectionToLookup("target", connection, sourceKey, connectionLookup, targetNode, targetHandle);
    edgeLookup.set(edge.id, edge);
  }
}
__name(updateConnectionLookup, "updateConnectionLookup");
function isParentSelected(node, nodeLookup) {
  if (!node.parentId) {
    return false;
  }
  const parentNode = nodeLookup.get(node.parentId);
  if (!parentNode) {
    return false;
  }
  if (parentNode.selected) {
    return true;
  }
  return isParentSelected(parentNode, nodeLookup);
}
__name(isParentSelected, "isParentSelected");
function hasSelector(target, selector, domNode) {
  let current = target;
  do {
    if (current?.matches?.(selector))
      return true;
    if (current === domNode)
      return false;
    current = current?.parentElement;
  } while (current);
  return false;
}
__name(hasSelector, "hasSelector");
function getDragItems(nodeLookup, nodesDraggable, mousePos, nodeId) {
  const dragItems = /* @__PURE__ */ new Map();
  for (const [id2, node] of nodeLookup) {
    if ((node.selected || node.id === nodeId) && (!node.parentId || !isParentSelected(node, nodeLookup)) && (node.draggable || nodesDraggable && typeof node.draggable === "undefined")) {
      const internalNode = nodeLookup.get(id2);
      if (internalNode) {
        dragItems.set(id2, {
          id: id2,
          position: internalNode.position || { x: 0, y: 0 },
          distance: {
            x: mousePos.x - internalNode.internals.positionAbsolute.x,
            y: mousePos.y - internalNode.internals.positionAbsolute.y
          },
          extent: internalNode.extent,
          parentId: internalNode.parentId,
          origin: internalNode.origin,
          expandParent: internalNode.expandParent,
          internals: {
            positionAbsolute: internalNode.internals.positionAbsolute || { x: 0, y: 0 }
          },
          measured: {
            width: internalNode.measured.width ?? 0,
            height: internalNode.measured.height ?? 0
          }
        });
      }
    }
  }
  return dragItems;
}
__name(getDragItems, "getDragItems");
function getEventHandlerParams({ nodeId, dragItems, nodeLookup, dragging = true }) {
  const nodesFromDragItems = [];
  for (const [id2, dragItem] of dragItems) {
    const node2 = nodeLookup.get(id2)?.internals.userNode;
    if (node2) {
      nodesFromDragItems.push({
        ...node2,
        position: dragItem.position,
        dragging
      });
    }
  }
  if (!nodeId) {
    return [nodesFromDragItems[0], nodesFromDragItems];
  }
  const node = nodeLookup.get(nodeId)?.internals.userNode;
  return [
    !node ? nodesFromDragItems[0] : {
      ...node,
      position: dragItems.get(nodeId)?.position || node.position,
      dragging
    },
    nodesFromDragItems
  ];
}
__name(getEventHandlerParams, "getEventHandlerParams");
function calculateSnapOffset({ dragItems, snapGrid, x, y }) {
  const refDragItem = dragItems.values().next().value;
  if (!refDragItem) {
    return null;
  }
  const refPos = {
    x: x - refDragItem.distance.x,
    y: y - refDragItem.distance.y
  };
  const refPosSnapped = snapPosition(refPos, snapGrid);
  return {
    x: refPosSnapped.x - refPos.x,
    y: refPosSnapped.y - refPos.y
  };
}
__name(calculateSnapOffset, "calculateSnapOffset");
function XYDrag({ onNodeMouseDown, getStoreItems, onDragStart, onDrag, onDragStop }) {
  let lastPos = { x: null, y: null };
  let autoPanId = 0;
  let dragItems = /* @__PURE__ */ new Map();
  let autoPanStarted = false;
  let mousePosition = { x: 0, y: 0 };
  let containerBounds = null;
  let dragStarted = false;
  let d3Selection = null;
  let abortDrag = false;
  let nodePositionsChanged = false;
  let dragEvent = null;
  function update({ noDragClassName, handleSelector, domNode, isSelectable, nodeId, nodeClickDistance = 0 }) {
    d3Selection = select_default2(domNode);
    function updateNodes({ x, y }) {
      const { nodeLookup, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onNodeDrag, onSelectionDrag, onError, updateNodePositions } = getStoreItems();
      lastPos = { x, y };
      let hasChange = false;
      const isMultiDrag = dragItems.size > 1;
      const nodesBox = isMultiDrag && nodeExtent ? rectToBox(getInternalNodesBounds(dragItems)) : null;
      const multiDragSnapOffset = isMultiDrag && snapToGrid ? calculateSnapOffset({
        dragItems,
        snapGrid,
        x,
        y
      }) : null;
      for (const [id2, dragItem] of dragItems) {
        if (!nodeLookup.has(id2)) {
          continue;
        }
        let nextPosition = { x: x - dragItem.distance.x, y: y - dragItem.distance.y };
        if (snapToGrid) {
          nextPosition = multiDragSnapOffset ? {
            x: Math.round(nextPosition.x + multiDragSnapOffset.x),
            y: Math.round(nextPosition.y + multiDragSnapOffset.y)
          } : snapPosition(nextPosition, snapGrid);
        }
        let adjustedNodeExtent = null;
        if (isMultiDrag && nodeExtent && !dragItem.extent && nodesBox) {
          const { positionAbsolute: positionAbsolute2 } = dragItem.internals;
          const x1 = positionAbsolute2.x - nodesBox.x + nodeExtent[0][0];
          const x2 = positionAbsolute2.x + dragItem.measured.width - nodesBox.x2 + nodeExtent[1][0];
          const y1 = positionAbsolute2.y - nodesBox.y + nodeExtent[0][1];
          const y2 = positionAbsolute2.y + dragItem.measured.height - nodesBox.y2 + nodeExtent[1][1];
          adjustedNodeExtent = [
            [x1, y1],
            [x2, y2]
          ];
        }
        const { position, positionAbsolute } = calculateNodePosition({
          nodeId: id2,
          nextPosition,
          nodeLookup,
          nodeExtent: adjustedNodeExtent ? adjustedNodeExtent : nodeExtent,
          nodeOrigin,
          onError
        });
        hasChange = hasChange || dragItem.position.x !== position.x || dragItem.position.y !== position.y;
        dragItem.position = position;
        dragItem.internals.positionAbsolute = positionAbsolute;
      }
      nodePositionsChanged = nodePositionsChanged || hasChange;
      if (!hasChange) {
        return;
      }
      updateNodePositions(dragItems, true);
      if (dragEvent && (onDrag || onNodeDrag || !nodeId && onSelectionDrag)) {
        const [currentNode, currentNodes] = getEventHandlerParams({
          nodeId,
          dragItems,
          nodeLookup
        });
        onDrag?.(dragEvent, dragItems, currentNode, currentNodes);
        onNodeDrag?.(dragEvent, currentNode, currentNodes);
        if (!nodeId) {
          onSelectionDrag?.(dragEvent, currentNodes);
        }
      }
    }
    __name(updateNodes, "updateNodes");
    async function autoPan() {
      if (!containerBounds) {
        return;
      }
      const { transform: transform2, panBy: panBy2, autoPanSpeed, autoPanOnNodeDrag } = getStoreItems();
      if (!autoPanOnNodeDrag) {
        autoPanStarted = false;
        cancelAnimationFrame(autoPanId);
        return;
      }
      const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed);
      if (xMovement !== 0 || yMovement !== 0) {
        lastPos.x = (lastPos.x ?? 0) - xMovement / transform2[2];
        lastPos.y = (lastPos.y ?? 0) - yMovement / transform2[2];
        if (await panBy2({ x: xMovement, y: yMovement })) {
          updateNodes(lastPos);
        }
      }
      autoPanId = requestAnimationFrame(autoPan);
    }
    __name(autoPan, "autoPan");
    function startDrag(event) {
      const { nodeLookup, multiSelectionActive, nodesDraggable, transform: transform2, snapGrid, snapToGrid, selectNodesOnDrag, onNodeDragStart, onSelectionDragStart, unselectNodesAndEdges } = getStoreItems();
      dragStarted = true;
      if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
        if (!nodeLookup.get(nodeId)?.selected) {
          unselectNodesAndEdges();
        }
      }
      if (isSelectable && selectNodesOnDrag && nodeId) {
        onNodeMouseDown?.(nodeId);
      }
      const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      lastPos = pointerPos;
      dragItems = getDragItems(nodeLookup, nodesDraggable, pointerPos, nodeId);
      if (dragItems.size > 0 && (onDragStart || onNodeDragStart || !nodeId && onSelectionDragStart)) {
        const [currentNode, currentNodes] = getEventHandlerParams({
          nodeId,
          dragItems,
          nodeLookup
        });
        onDragStart?.(event.sourceEvent, dragItems, currentNode, currentNodes);
        onNodeDragStart?.(event.sourceEvent, currentNode, currentNodes);
        if (!nodeId) {
          onSelectionDragStart?.(event.sourceEvent, currentNodes);
        }
      }
    }
    __name(startDrag, "startDrag");
    const d3DragInstance = drag_default().clickDistance(nodeClickDistance).on("start", (event) => {
      const { domNode: domNode2, nodeDragThreshold, transform: transform2, snapGrid, snapToGrid } = getStoreItems();
      containerBounds = domNode2?.getBoundingClientRect() || null;
      abortDrag = false;
      nodePositionsChanged = false;
      dragEvent = event.sourceEvent;
      if (nodeDragThreshold === 0) {
        startDrag(event);
      }
      const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      lastPos = pointerPos;
      mousePosition = getEventPosition(event.sourceEvent, containerBounds);
    }).on("drag", (event) => {
      const { autoPanOnNodeDrag, transform: transform2, snapGrid, snapToGrid, nodeDragThreshold, nodeLookup } = getStoreItems();
      const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      dragEvent = event.sourceEvent;
      if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      nodeId && !nodeLookup.has(nodeId)) {
        abortDrag = true;
      }
      if (abortDrag) {
        return;
      }
      if (!autoPanStarted && autoPanOnNodeDrag && dragStarted) {
        autoPanStarted = true;
        autoPan();
      }
      if (!dragStarted) {
        const currentMousePosition = getEventPosition(event.sourceEvent, containerBounds);
        const x = currentMousePosition.x - mousePosition.x;
        const y = currentMousePosition.y - mousePosition.y;
        const distance2 = Math.sqrt(x * x + y * y);
        if (distance2 > nodeDragThreshold) {
          startDrag(event);
        }
      }
      if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems && dragStarted) {
        mousePosition = getEventPosition(event.sourceEvent, containerBounds);
        updateNodes(pointerPos);
      }
    }).on("end", (event) => {
      if (!dragStarted || abortDrag) {
        if (abortDrag && dragItems.size > 0) {
          getStoreItems().updateNodePositions(dragItems, false);
        }
        return;
      }
      autoPanStarted = false;
      dragStarted = false;
      cancelAnimationFrame(autoPanId);
      if (dragItems.size > 0) {
        const { nodeLookup, updateNodePositions, onNodeDragStop, onSelectionDragStop } = getStoreItems();
        if (nodePositionsChanged) {
          updateNodePositions(dragItems, false);
          nodePositionsChanged = false;
        }
        if (onDragStop || onNodeDragStop || !nodeId && onSelectionDragStop) {
          const [currentNode, currentNodes] = getEventHandlerParams({
            nodeId,
            dragItems,
            nodeLookup,
            dragging: false
          });
          onDragStop?.(event.sourceEvent, dragItems, currentNode, currentNodes);
          onNodeDragStop?.(event.sourceEvent, currentNode, currentNodes);
          if (!nodeId) {
            onSelectionDragStop?.(event.sourceEvent, currentNodes);
          }
        }
      }
    }).filter((event) => {
      const target = event.target;
      const isDraggable = !event.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, domNode)) && (!handleSelector || hasSelector(target, handleSelector, domNode));
      return isDraggable;
    });
    d3Selection.call(d3DragInstance);
  }
  __name(update, "update");
  function destroy() {
    d3Selection?.on(".drag", null);
  }
  __name(destroy, "destroy");
  return {
    update,
    destroy
  };
}
__name(XYDrag, "XYDrag");
function getNodesWithinDistance(position, nodeLookup, distance2) {
  const nodes = [];
  const rect = {
    x: position.x - distance2,
    y: position.y - distance2,
    width: distance2 * 2,
    height: distance2 * 2
  };
  for (const node of nodeLookup.values()) {
    if (getOverlappingArea(rect, nodeToRect(node)) > 0) {
      nodes.push(node);
    }
  }
  return nodes;
}
__name(getNodesWithinDistance, "getNodesWithinDistance");
var ADDITIONAL_DISTANCE = 250;
function getClosestHandle(position, connectionRadius, nodeLookup, fromHandle) {
  let closestHandles = [];
  let minDistance = Infinity;
  const closeNodes = getNodesWithinDistance(position, nodeLookup, connectionRadius + ADDITIONAL_DISTANCE);
  for (const node of closeNodes) {
    const allHandles = [...node.internals.handleBounds?.source ?? [], ...node.internals.handleBounds?.target ?? []];
    for (const handle of allHandles) {
      if (fromHandle.nodeId === handle.nodeId && fromHandle.type === handle.type && fromHandle.id === handle.id) {
        continue;
      }
      const { x, y } = getHandlePosition(node, handle, handle.position, true);
      const distance2 = Math.sqrt(Math.pow(x - position.x, 2) + Math.pow(y - position.y, 2));
      if (distance2 > connectionRadius) {
        continue;
      }
      if (distance2 < minDistance) {
        closestHandles = [{ ...handle, x, y }];
        minDistance = distance2;
      } else if (distance2 === minDistance) {
        closestHandles.push({ ...handle, x, y });
      }
    }
  }
  if (!closestHandles.length) {
    return null;
  }
  if (closestHandles.length > 1) {
    const oppositeHandleType = fromHandle.type === "source" ? "target" : "source";
    return closestHandles.find((handle) => handle.type === oppositeHandleType) ?? closestHandles[0];
  }
  return closestHandles[0];
}
__name(getClosestHandle, "getClosestHandle");
function getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode, withAbsolutePosition = false) {
  const node = nodeLookup.get(nodeId);
  if (!node) {
    return null;
  }
  const handles = connectionMode === "strict" ? node.internals.handleBounds?.[handleType] : [...node.internals.handleBounds?.source ?? [], ...node.internals.handleBounds?.target ?? []];
  const handle = (handleId ? handles?.find((h) => h.id === handleId) : handles?.[0]) ?? null;
  return handle && withAbsolutePosition ? { ...handle, ...getHandlePosition(node, handle, handle.position, true) } : handle;
}
__name(getHandle, "getHandle");
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode?.classList.contains("target")) {
    return "target";
  } else if (handleDomNode?.classList.contains("source")) {
    return "source";
  }
  return null;
}
__name(getHandleType, "getHandleType");
function isConnectionValid(isInsideConnectionRadius, isHandleValid) {
  let isValid = null;
  if (isHandleValid) {
    isValid = true;
  } else if (isInsideConnectionRadius && !isHandleValid) {
    isValid = false;
  }
  return isValid;
}
__name(isConnectionValid, "isConnectionValid");
var alwaysValid = /* @__PURE__ */ __name(() => true, "alwaysValid");
function onPointerDown(event, { connectionMode, connectionRadius, handleId, nodeId, edgeUpdaterType, isTarget, domNode, nodeLookup, lib, autoPanOnConnect, flowId, panBy: panBy2, cancelConnection, onConnectStart, onConnect, onConnectEnd, isValidConnection = alwaysValid, onReconnectEnd, updateConnection, getTransform, getFromHandle, autoPanSpeed, dragThreshold = 1, handleDomNode }) {
  const doc = getHostForElement(event.target);
  let autoPanId = 0;
  let closestHandle;
  const { x, y } = getEventPosition(event);
  const handleType = getHandleType(edgeUpdaterType, handleDomNode);
  const containerBounds = domNode?.getBoundingClientRect();
  let connectionStarted = false;
  if (!containerBounds || !handleType) {
    return;
  }
  const fromHandleInternal = getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode);
  if (!fromHandleInternal) {
    return;
  }
  let position = getEventPosition(event, containerBounds);
  let autoPanStarted = false;
  let connection = null;
  let isValid = false;
  let resultHandleDomNode = null;
  function autoPan() {
    if (!autoPanOnConnect || !containerBounds) {
      return;
    }
    const [x2, y2] = calcAutoPan(position, containerBounds, autoPanSpeed);
    panBy2({ x: x2, y: y2 });
    autoPanId = requestAnimationFrame(autoPan);
  }
  __name(autoPan, "autoPan");
  const fromHandle = {
    ...fromHandleInternal,
    nodeId,
    type: handleType,
    position: fromHandleInternal.position
  };
  const fromInternalNode = nodeLookup.get(nodeId);
  const from = getHandlePosition(fromInternalNode, fromHandle, Position.Left, true);
  let previousConnection = {
    inProgress: true,
    isValid: null,
    from,
    fromHandle,
    fromPosition: fromHandle.position,
    fromNode: fromInternalNode,
    to: position,
    toHandle: null,
    toPosition: oppositePosition[fromHandle.position],
    toNode: null,
    pointer: position
  };
  function startConnection() {
    connectionStarted = true;
    updateConnection(previousConnection);
    onConnectStart?.(event, { nodeId, handleId, handleType });
  }
  __name(startConnection, "startConnection");
  if (dragThreshold === 0) {
    startConnection();
  }
  function onPointerMove(event2) {
    if (!connectionStarted) {
      const { x: evtX, y: evtY } = getEventPosition(event2);
      const dx = evtX - x;
      const dy = evtY - y;
      const nextConnectionStarted = dx * dx + dy * dy > dragThreshold * dragThreshold;
      if (!nextConnectionStarted) {
        return;
      }
      startConnection();
    }
    if (!getFromHandle() || !fromHandle) {
      onPointerUp(event2);
      return;
    }
    const transform2 = getTransform();
    position = getEventPosition(event2, containerBounds);
    closestHandle = getClosestHandle(pointToRendererPoint(position, transform2, false, [1, 1]), connectionRadius, nodeLookup, fromHandle);
    if (!autoPanStarted) {
      autoPan();
      autoPanStarted = true;
    }
    const result = isValidHandle(event2, {
      handle: closestHandle,
      connectionMode,
      fromNodeId: nodeId,
      fromHandleId: handleId,
      fromType: isTarget ? "target" : "source",
      isValidConnection,
      doc,
      lib,
      flowId,
      nodeLookup
    });
    resultHandleDomNode = result.handleDomNode;
    connection = result.connection;
    isValid = isConnectionValid(!!closestHandle, result.isValid);
    const fromInternalNode2 = nodeLookup.get(nodeId);
    const from2 = fromInternalNode2 ? getHandlePosition(fromInternalNode2, fromHandle, Position.Left, true) : previousConnection.from;
    const newConnection = {
      ...previousConnection,
      from: from2,
      isValid,
      to: result.toHandle && isValid ? rendererPointToPoint({ x: result.toHandle.x, y: result.toHandle.y }, transform2) : position,
      toHandle: result.toHandle,
      toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
      toNode: result.toHandle ? nodeLookup.get(result.toHandle.nodeId) : null,
      pointer: position
    };
    updateConnection(newConnection);
    previousConnection = newConnection;
  }
  __name(onPointerMove, "onPointerMove");
  function onPointerUp(event2) {
    if ("touches" in event2 && event2.touches.length > 0) {
      return;
    }
    if (connectionStarted) {
      if ((closestHandle || resultHandleDomNode) && connection && isValid) {
        onConnect?.(connection);
      }
      const { inProgress, ...connectionState } = previousConnection;
      const finalConnectionState = {
        ...connectionState,
        toPosition: previousConnection.toHandle ? previousConnection.toPosition : null
      };
      onConnectEnd?.(event2, finalConnectionState);
      if (edgeUpdaterType) {
        onReconnectEnd?.(event2, finalConnectionState);
      }
    }
    cancelConnection();
    cancelAnimationFrame(autoPanId);
    autoPanStarted = false;
    isValid = false;
    connection = null;
    resultHandleDomNode = null;
    doc.removeEventListener("mousemove", onPointerMove);
    doc.removeEventListener("mouseup", onPointerUp);
    doc.removeEventListener("touchmove", onPointerMove);
    doc.removeEventListener("touchend", onPointerUp);
  }
  __name(onPointerUp, "onPointerUp");
  doc.addEventListener("mousemove", onPointerMove);
  doc.addEventListener("mouseup", onPointerUp);
  doc.addEventListener("touchmove", onPointerMove);
  doc.addEventListener("touchend", onPointerUp);
}
__name(onPointerDown, "onPointerDown");
function isValidHandle(event, { handle, connectionMode, fromNodeId, fromHandleId, fromType, doc, lib, flowId, isValidConnection = alwaysValid, nodeLookup }) {
  const isTarget = fromType === "target";
  const handleDomNode = handle ? doc.querySelector(`.${lib}-flow__handle[data-id="${flowId}-${handle?.nodeId}-${handle?.id}-${handle?.type}"]`) : null;
  const { x, y } = getEventPosition(event);
  const handleBelow = doc.elementFromPoint(x, y);
  const handleToCheck = handleBelow?.classList.contains(`${lib}-flow__handle`) ? handleBelow : handleDomNode;
  const result = {
    handleDomNode: handleToCheck,
    isValid: false,
    connection: null,
    toHandle: null
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    if (!handleNodeId || !handleType) {
      return result;
    }
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    result.isValid = isValid && isValidConnection(connection);
    result.toHandle = getHandle(handleNodeId, handleType, handleId, nodeLookup, connectionMode, true);
  }
  return result;
}
__name(isValidHandle, "isValidHandle");
var XYHandle = {
  onPointerDown,
  isValid: isValidHandle
};
function XYMinimap({ domNode, panZoom, getTransform, getViewScale }) {
  const selection2 = select_default2(domNode);
  function update({ translateExtent, width, height, zoomStep = 1, pannable = true, zoomable = true, inversePan = false }) {
    const zoomHandler = /* @__PURE__ */ __name((event) => {
      if (event.sourceEvent.type !== "wheel" || !panZoom) {
        return;
      }
      const transform2 = getTransform();
      const factor = event.sourceEvent.ctrlKey && isMacOs() ? 10 : 1;
      const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? 0.05 : event.sourceEvent.deltaMode ? 1 : 2e-3) * zoomStep;
      const nextZoom = transform2[2] * Math.pow(2, pinchDelta * factor);
      panZoom.scaleTo(nextZoom);
    }, "zoomHandler");
    let panStart = [0, 0];
    const panStartHandler = /* @__PURE__ */ __name((event) => {
      if (event.sourceEvent.type === "mousedown" || event.sourceEvent.type === "touchstart") {
        panStart = [
          event.sourceEvent.clientX ?? event.sourceEvent.touches[0].clientX,
          event.sourceEvent.clientY ?? event.sourceEvent.touches[0].clientY
        ];
      }
    }, "panStartHandler");
    const panHandler = /* @__PURE__ */ __name((event) => {
      const transform2 = getTransform();
      if (event.sourceEvent.type !== "mousemove" && event.sourceEvent.type !== "touchmove" || !panZoom) {
        return;
      }
      const panCurrent = [
        event.sourceEvent.clientX ?? event.sourceEvent.touches[0].clientX,
        event.sourceEvent.clientY ?? event.sourceEvent.touches[0].clientY
      ];
      const panDelta = [panCurrent[0] - panStart[0], panCurrent[1] - panStart[1]];
      panStart = panCurrent;
      const moveScale = getViewScale() * Math.max(transform2[2], Math.log(transform2[2])) * (inversePan ? -1 : 1);
      const position = {
        x: transform2[0] - panDelta[0] * moveScale,
        y: transform2[1] - panDelta[1] * moveScale
      };
      const extent = [
        [0, 0],
        [width, height]
      ];
      panZoom.setViewportConstrained({
        x: position.x,
        y: position.y,
        zoom: transform2[2]
      }, extent, translateExtent);
    }, "panHandler");
    const zoomAndPanHandler = zoom_default2().on("start", panStartHandler).on("zoom", pannable ? panHandler : null).on("zoom.wheel", zoomable ? zoomHandler : null);
    selection2.call(zoomAndPanHandler, {});
  }
  __name(update, "update");
  function destroy() {
    selection2.on("zoom", null);
  }
  __name(destroy, "destroy");
  return {
    update,
    destroy,
    pointer: pointer_default
  };
}
__name(XYMinimap, "XYMinimap");
var transformToViewport = /* @__PURE__ */ __name((transform2) => ({
  x: transform2.x,
  y: transform2.y,
  zoom: transform2.k
}), "transformToViewport");
var viewportToTransform = /* @__PURE__ */ __name(({ x, y, zoom }) => identity2.translate(x, y).scale(zoom), "viewportToTransform");
var isWrappedWithClass = /* @__PURE__ */ __name((event, className) => event.target.closest(`.${className}`), "isWrappedWithClass");
var isRightClickPan = /* @__PURE__ */ __name((panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2), "isRightClickPan");
var defaultEase = /* @__PURE__ */ __name((t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, "defaultEase");
var getD3Transition = /* @__PURE__ */ __name((selection2, duration = 0, ease = defaultEase, onEnd = () => {
}) => {
  const hasDuration = typeof duration === "number" && duration > 0;
  if (!hasDuration) {
    onEnd();
  }
  return hasDuration ? selection2.transition().duration(duration).ease(ease).on("end", onEnd) : selection2;
}, "getD3Transition");
var wheelDelta = /* @__PURE__ */ __name((event) => {
  const factor = event.ctrlKey && isMacOs() ? 10 : 1;
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
}, "wheelDelta");
function createPanOnScrollHandler({ zoomPanValues, noWheelClassName, d3Selection, d3Zoom, panOnScrollMode, panOnScrollSpeed, zoomOnPinch, onPanZoomStart, onPanZoom, onPanZoomEnd }) {
  return (event) => {
    if (isWrappedWithClass(event, noWheelClassName)) {
      if (event.ctrlKey) {
        event.preventDefault();
      }
      return false;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    const currentZoom = d3Selection.property("__zoom").k || 1;
    if (event.ctrlKey && zoomOnPinch) {
      const point = pointer_default(event);
      const pinchDelta = wheelDelta(event);
      const zoom = currentZoom * Math.pow(2, pinchDelta);
      d3Zoom.scaleTo(d3Selection, zoom, point, event);
      return;
    }
    const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
    let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
    let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
    if (!isMacOs() && event.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
      deltaX = event.deltaY * deltaNormalize;
      deltaY = 0;
    }
    d3Zoom.translateBy(
      d3Selection,
      -(deltaX / currentZoom) * panOnScrollSpeed,
      -(deltaY / currentZoom) * panOnScrollSpeed,
      // @ts-ignore
      { internal: true }
    );
    const nextViewport = transformToViewport(d3Selection.property("__zoom"));
    clearTimeout(zoomPanValues.panScrollTimeout);
    if (!zoomPanValues.isPanScrolling) {
      zoomPanValues.isPanScrolling = true;
      onPanZoomStart?.(event, nextViewport);
    } else {
      onPanZoom?.(event, nextViewport);
      zoomPanValues.panScrollTimeout = setTimeout(() => {
        onPanZoomEnd?.(event, nextViewport);
        zoomPanValues.isPanScrolling = false;
      }, 150);
    }
  };
}
__name(createPanOnScrollHandler, "createPanOnScrollHandler");
function createZoomOnScrollHandler({ noWheelClassName, preventScrolling, d3ZoomHandler }) {
  return function(event, d) {
    const isWheel = event.type === "wheel";
    const preventZoom = !preventScrolling && isWheel && !event.ctrlKey;
    const hasNoWheelClass = isWrappedWithClass(event, noWheelClassName);
    if (event.ctrlKey && isWheel && hasNoWheelClass) {
      event.preventDefault();
    }
    if (preventZoom || hasNoWheelClass) {
      return null;
    }
    event.preventDefault();
    d3ZoomHandler.call(this, event, d);
  };
}
__name(createZoomOnScrollHandler, "createZoomOnScrollHandler");
function createPanZoomStartHandler({ zoomPanValues, onDraggingChange, onPanZoomStart }) {
  return (event) => {
    if (event.sourceEvent?.internal) {
      return;
    }
    const viewport = transformToViewport(event.transform);
    zoomPanValues.mouseButton = event.sourceEvent?.button || 0;
    zoomPanValues.isZoomingOrPanning = true;
    zoomPanValues.prevViewport = viewport;
    if (event.sourceEvent?.type === "mousedown") {
      onDraggingChange(true);
    }
    if (onPanZoomStart) {
      onPanZoomStart?.(event.sourceEvent, viewport);
    }
  };
}
__name(createPanZoomStartHandler, "createPanZoomStartHandler");
function createPanZoomHandler({ zoomPanValues, panOnDrag, onPaneContextMenu, onTransformChange, onPanZoom }) {
  return (event) => {
    zoomPanValues.usedRightMouseButton = !!(onPaneContextMenu && isRightClickPan(panOnDrag, zoomPanValues.mouseButton ?? 0));
    if (!event.sourceEvent?.sync) {
      onTransformChange([event.transform.x, event.transform.y, event.transform.k]);
    }
    if (onPanZoom && !event.sourceEvent?.internal) {
      onPanZoom?.(event.sourceEvent, transformToViewport(event.transform));
    }
  };
}
__name(createPanZoomHandler, "createPanZoomHandler");
function createPanZoomEndHandler({ zoomPanValues, panOnDrag, panOnScroll, onDraggingChange, onPanZoomEnd, onPaneContextMenu }) {
  return (event) => {
    if (event.sourceEvent?.internal) {
      return;
    }
    zoomPanValues.isZoomingOrPanning = false;
    if (onPaneContextMenu && isRightClickPan(panOnDrag, zoomPanValues.mouseButton ?? 0) && !zoomPanValues.usedRightMouseButton && event.sourceEvent) {
      onPaneContextMenu(event.sourceEvent);
    }
    zoomPanValues.usedRightMouseButton = false;
    onDraggingChange(false);
    if (onPanZoomEnd) {
      const viewport = transformToViewport(event.transform);
      zoomPanValues.prevViewport = viewport;
      clearTimeout(zoomPanValues.timerId);
      zoomPanValues.timerId = setTimeout(
        () => {
          onPanZoomEnd?.(event.sourceEvent, viewport);
        },
        // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
        panOnScroll ? 150 : 0
      );
    }
  };
}
__name(createPanZoomEndHandler, "createPanZoomEndHandler");
function createFilter({ zoomActivationKeyPressed, zoomOnScroll, zoomOnPinch, panOnDrag, panOnScroll, zoomOnDoubleClick, userSelectionActive, noWheelClassName, noPanClassName, lib, connectionInProgress }) {
  return (event) => {
    const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
    const pinchZoom = zoomOnPinch && event.ctrlKey;
    const isWheelEvent = event.type === "wheel";
    if (event.button === 1 && event.type === "mousedown" && (isWrappedWithClass(event, `${lib}-flow__node`) || isWrappedWithClass(event, `${lib}-flow__edge`))) {
      return true;
    }
    if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
      return false;
    }
    if (userSelectionActive) {
      return false;
    }
    if (connectionInProgress && !isWheelEvent) {
      return false;
    }
    if (isWrappedWithClass(event, noWheelClassName) && isWheelEvent) {
      return false;
    }
    if (isWrappedWithClass(event, noPanClassName) && (!isWheelEvent || panOnScroll && isWheelEvent && !zoomActivationKeyPressed)) {
      return false;
    }
    if (!zoomOnPinch && event.ctrlKey && isWheelEvent) {
      return false;
    }
    if (!zoomOnPinch && event.type === "touchstart" && event.touches?.length > 1) {
      event.preventDefault();
      return false;
    }
    if (!zoomScroll && !panOnScroll && !pinchZoom && isWheelEvent) {
      return false;
    }
    if (!panOnDrag && (event.type === "mousedown" || event.type === "touchstart")) {
      return false;
    }
    if (Array.isArray(panOnDrag) && !panOnDrag.includes(event.button) && event.type === "mousedown") {
      return false;
    }
    const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event.button) || !event.button || event.button <= 1;
    return (!event.ctrlKey || isWheelEvent) && buttonAllowed;
  };
}
__name(createFilter, "createFilter");
function XYPanZoom({ domNode, minZoom, maxZoom, translateExtent, viewport, onPanZoom, onPanZoomStart, onPanZoomEnd, onDraggingChange }) {
  const zoomPanValues = {
    isZoomingOrPanning: false,
    usedRightMouseButton: false,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: false
  };
  const bbox = domNode.getBoundingClientRect();
  const d3ZoomInstance = zoom_default2().scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
  const d3Selection = select_default2(domNode).call(d3ZoomInstance);
  setViewportConstrained({
    x: viewport.x,
    y: viewport.y,
    zoom: clamp(viewport.zoom, minZoom, maxZoom)
  }, [
    [0, 0],
    [bbox.width, bbox.height]
  ], translateExtent);
  const d3ZoomHandler = d3Selection.on("wheel.zoom");
  const d3DblClickZoomHandler = d3Selection.on("dblclick.zoom");
  d3ZoomInstance.wheelDelta(wheelDelta);
  async function setTransform(transform2, options2) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance?.interpolate(options2?.interpolate === "linear" ? value_default : zoom_default).transform(getD3Transition(d3Selection, options2?.duration, options2?.ease, () => resolve(true)), transform2);
      });
    }
    return false;
  }
  __name(setTransform, "setTransform");
  function update({ noWheelClassName, noPanClassName, onPaneContextMenu, userSelectionActive, panOnScroll, panOnDrag, panOnScrollMode, panOnScrollSpeed, preventScrolling, zoomOnPinch, zoomOnScroll, zoomOnDoubleClick, zoomActivationKeyPressed, lib, onTransformChange, connectionInProgress, paneClickDistance, selectionOnDrag }) {
    if (userSelectionActive && !zoomPanValues.isZoomingOrPanning) {
      destroy();
    }
    const isPanOnScroll = panOnScroll && !zoomActivationKeyPressed && !userSelectionActive;
    d3ZoomInstance.clickDistance(selectionOnDrag ? Infinity : !isNumeric(paneClickDistance) || paneClickDistance < 0 ? 0 : paneClickDistance);
    const wheelHandler = isPanOnScroll ? createPanOnScrollHandler({
      zoomPanValues,
      noWheelClassName,
      d3Selection,
      d3Zoom: d3ZoomInstance,
      panOnScrollMode,
      panOnScrollSpeed,
      zoomOnPinch,
      onPanZoomStart,
      onPanZoom,
      onPanZoomEnd
    }) : createZoomOnScrollHandler({
      noWheelClassName,
      preventScrolling,
      d3ZoomHandler
    });
    d3Selection.on("wheel.zoom", wheelHandler, { passive: false });
    const startHandler = createPanZoomStartHandler({
      zoomPanValues,
      onDraggingChange,
      onPanZoomStart
    });
    d3ZoomInstance.on("start", startHandler);
    const panZoomHandler = createPanZoomHandler({
      zoomPanValues,
      panOnDrag,
      onPaneContextMenu: !!onPaneContextMenu,
      onPanZoom,
      onTransformChange
    });
    d3ZoomInstance.on("zoom", panZoomHandler);
    const panZoomEndHandler = createPanZoomEndHandler({
      zoomPanValues,
      panOnDrag,
      panOnScroll,
      onPaneContextMenu,
      onPanZoomEnd,
      onDraggingChange
    });
    d3ZoomInstance.on("end", panZoomEndHandler);
    const filter2 = createFilter({
      zoomActivationKeyPressed,
      panOnDrag,
      zoomOnScroll,
      panOnScroll,
      zoomOnDoubleClick,
      zoomOnPinch,
      userSelectionActive,
      noPanClassName,
      noWheelClassName,
      lib,
      connectionInProgress
    });
    d3ZoomInstance.filter(filter2);
    if (zoomOnDoubleClick) {
      d3Selection.on("dblclick.zoom", d3DblClickZoomHandler);
    } else {
      d3Selection.on("dblclick.zoom", null);
    }
  }
  __name(update, "update");
  function destroy() {
    d3ZoomInstance.on("zoom", null);
  }
  __name(destroy, "destroy");
  async function setViewportConstrained(viewport2, extent, translateExtent2) {
    const nextTransform = viewportToTransform(viewport2);
    const contrainedTransform = d3ZoomInstance?.constrain()(nextTransform, extent, translateExtent2);
    if (contrainedTransform) {
      await setTransform(contrainedTransform);
    }
    return contrainedTransform;
  }
  __name(setViewportConstrained, "setViewportConstrained");
  async function setViewport(viewport2, options2) {
    const nextTransform = viewportToTransform(viewport2);
    await setTransform(nextTransform, options2);
    return nextTransform;
  }
  __name(setViewport, "setViewport");
  function syncViewport(viewport2) {
    if (d3Selection) {
      const nextTransform = viewportToTransform(viewport2);
      const currentTransform = d3Selection.property("__zoom");
      if (currentTransform.k !== viewport2.zoom || currentTransform.x !== viewport2.x || currentTransform.y !== viewport2.y) {
        d3ZoomInstance?.transform(d3Selection, nextTransform, null, { sync: true });
      }
    }
  }
  __name(syncViewport, "syncViewport");
  function getViewport() {
    const transform2 = d3Selection ? transform(d3Selection.node()) : { x: 0, y: 0, k: 1 };
    return { x: transform2.x, y: transform2.y, zoom: transform2.k };
  }
  __name(getViewport, "getViewport");
  async function scaleTo(zoom, options2) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance?.interpolate(options2?.interpolate === "linear" ? value_default : zoom_default).scaleTo(getD3Transition(d3Selection, options2?.duration, options2?.ease, () => resolve(true)), zoom);
      });
    }
    return false;
  }
  __name(scaleTo, "scaleTo");
  async function scaleBy(factor, options2) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance?.interpolate(options2?.interpolate === "linear" ? value_default : zoom_default).scaleBy(getD3Transition(d3Selection, options2?.duration, options2?.ease, () => resolve(true)), factor);
      });
    }
    return false;
  }
  __name(scaleBy, "scaleBy");
  function setScaleExtent(scaleExtent) {
    d3ZoomInstance?.scaleExtent(scaleExtent);
  }
  __name(setScaleExtent, "setScaleExtent");
  function setTranslateExtent(translateExtent2) {
    d3ZoomInstance?.translateExtent(translateExtent2);
  }
  __name(setTranslateExtent, "setTranslateExtent");
  function setClickDistance(distance2) {
    const validDistance = !isNumeric(distance2) || distance2 < 0 ? 0 : distance2;
    d3ZoomInstance?.clickDistance(validDistance);
  }
  __name(setClickDistance, "setClickDistance");
  return {
    update,
    destroy,
    setViewport,
    setViewportConstrained,
    getViewport,
    scaleTo,
    scaleBy,
    setScaleExtent,
    setTranslateExtent,
    syncViewport,
    setClickDistance
  };
}
__name(XYPanZoom, "XYPanZoom");
var ResizeControlVariant;
(function(ResizeControlVariant2) {
  ResizeControlVariant2["Line"] = "line";
  ResizeControlVariant2["Handle"] = "handle";
})(ResizeControlVariant || (ResizeControlVariant = {}));
function getResizeDirection({ width, prevWidth, height, prevHeight, affectsX, affectsY }) {
  const deltaWidth = width - prevWidth;
  const deltaHeight = height - prevHeight;
  const direction = [deltaWidth > 0 ? 1 : deltaWidth < 0 ? -1 : 0, deltaHeight > 0 ? 1 : deltaHeight < 0 ? -1 : 0];
  if (deltaWidth && affectsX) {
    direction[0] = direction[0] * -1;
  }
  if (deltaHeight && affectsY) {
    direction[1] = direction[1] * -1;
  }
  return direction;
}
__name(getResizeDirection, "getResizeDirection");
function getControlDirection(controlPosition) {
  const isHorizontal = controlPosition.includes("right") || controlPosition.includes("left");
  const isVertical = controlPosition.includes("bottom") || controlPosition.includes("top");
  const affectsX = controlPosition.includes("left");
  const affectsY = controlPosition.includes("top");
  return {
    isHorizontal,
    isVertical,
    affectsX,
    affectsY
  };
}
__name(getControlDirection, "getControlDirection");
function getLowerExtentClamp(lowerExtent, lowerBound) {
  return Math.max(0, lowerBound - lowerExtent);
}
__name(getLowerExtentClamp, "getLowerExtentClamp");
function getUpperExtentClamp(upperExtent, upperBound) {
  return Math.max(0, upperExtent - upperBound);
}
__name(getUpperExtentClamp, "getUpperExtentClamp");
function getSizeClamp(size, minSize, maxSize) {
  return Math.max(0, minSize - size, size - maxSize);
}
__name(getSizeClamp, "getSizeClamp");
function xor(a, b) {
  return a ? !b : b;
}
__name(xor, "xor");
function getDimensionsAfterResize(startValues, controlDirection, pointerPosition, boundaries, keepAspectRatio, nodeOrigin, extent, childExtent) {
  let { affectsX, affectsY } = controlDirection;
  const { isHorizontal, isVertical } = controlDirection;
  const isDiagonal = isHorizontal && isVertical;
  const { xSnapped, ySnapped } = pointerPosition;
  const { minWidth, maxWidth, minHeight, maxHeight } = boundaries;
  const { x: startX, y: startY, width: startWidth, height: startHeight, aspectRatio } = startValues;
  let distX = Math.floor(isHorizontal ? xSnapped - startValues.pointerX : 0);
  let distY = Math.floor(isVertical ? ySnapped - startValues.pointerY : 0);
  const newWidth = startWidth + (affectsX ? -distX : distX);
  const newHeight = startHeight + (affectsY ? -distY : distY);
  const originOffsetX = -nodeOrigin[0] * startWidth;
  const originOffsetY = -nodeOrigin[1] * startHeight;
  let clampX = getSizeClamp(newWidth, minWidth, maxWidth);
  let clampY = getSizeClamp(newHeight, minHeight, maxHeight);
  if (extent) {
    let xExtentClamp = 0;
    let yExtentClamp = 0;
    if (affectsX && distX < 0) {
      xExtentClamp = getLowerExtentClamp(startX + distX + originOffsetX, extent[0][0]);
    } else if (!affectsX && distX > 0) {
      xExtentClamp = getUpperExtentClamp(startX + newWidth + originOffsetX, extent[1][0]);
    }
    if (affectsY && distY < 0) {
      yExtentClamp = getLowerExtentClamp(startY + distY + originOffsetY, extent[0][1]);
    } else if (!affectsY && distY > 0) {
      yExtentClamp = getUpperExtentClamp(startY + newHeight + originOffsetY, extent[1][1]);
    }
    clampX = Math.max(clampX, xExtentClamp);
    clampY = Math.max(clampY, yExtentClamp);
  }
  if (childExtent) {
    let xExtentClamp = 0;
    let yExtentClamp = 0;
    if (affectsX && distX > 0) {
      xExtentClamp = getUpperExtentClamp(startX + distX, childExtent[0][0]);
    } else if (!affectsX && distX < 0) {
      xExtentClamp = getLowerExtentClamp(startX + newWidth, childExtent[1][0]);
    }
    if (affectsY && distY > 0) {
      yExtentClamp = getUpperExtentClamp(startY + distY, childExtent[0][1]);
    } else if (!affectsY && distY < 0) {
      yExtentClamp = getLowerExtentClamp(startY + newHeight, childExtent[1][1]);
    }
    clampX = Math.max(clampX, xExtentClamp);
    clampY = Math.max(clampY, yExtentClamp);
  }
  if (keepAspectRatio) {
    if (isHorizontal) {
      const aspectHeightClamp = getSizeClamp(newWidth / aspectRatio, minHeight, maxHeight) * aspectRatio;
      clampX = Math.max(clampX, aspectHeightClamp);
      if (extent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsX && !affectsY && isDiagonal) {
          aspectExtentClamp = getUpperExtentClamp(startY + originOffsetY + newWidth / aspectRatio, extent[1][1]) * aspectRatio;
        } else {
          aspectExtentClamp = getLowerExtentClamp(startY + originOffsetY + (affectsX ? distX : -distX) / aspectRatio, extent[0][1]) * aspectRatio;
        }
        clampX = Math.max(clampX, aspectExtentClamp);
      }
      if (childExtent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsX && !affectsY && isDiagonal) {
          aspectExtentClamp = getLowerExtentClamp(startY + newWidth / aspectRatio, childExtent[1][1]) * aspectRatio;
        } else {
          aspectExtentClamp = getUpperExtentClamp(startY + (affectsX ? distX : -distX) / aspectRatio, childExtent[0][1]) * aspectRatio;
        }
        clampX = Math.max(clampX, aspectExtentClamp);
      }
    }
    if (isVertical) {
      const aspectWidthClamp = getSizeClamp(newHeight * aspectRatio, minWidth, maxWidth) / aspectRatio;
      clampY = Math.max(clampY, aspectWidthClamp);
      if (extent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsY && !affectsX && isDiagonal) {
          aspectExtentClamp = getUpperExtentClamp(startX + newHeight * aspectRatio + originOffsetX, extent[1][0]) / aspectRatio;
        } else {
          aspectExtentClamp = getLowerExtentClamp(startX + (affectsY ? distY : -distY) * aspectRatio + originOffsetX, extent[0][0]) / aspectRatio;
        }
        clampY = Math.max(clampY, aspectExtentClamp);
      }
      if (childExtent) {
        let aspectExtentClamp = 0;
        if (!affectsX && !affectsY || affectsY && !affectsX && isDiagonal) {
          aspectExtentClamp = getLowerExtentClamp(startX + newHeight * aspectRatio, childExtent[1][0]) / aspectRatio;
        } else {
          aspectExtentClamp = getUpperExtentClamp(startX + (affectsY ? distY : -distY) * aspectRatio, childExtent[0][0]) / aspectRatio;
        }
        clampY = Math.max(clampY, aspectExtentClamp);
      }
    }
  }
  distY = distY + (distY < 0 ? clampY : -clampY);
  distX = distX + (distX < 0 ? clampX : -clampX);
  if (keepAspectRatio) {
    if (isDiagonal) {
      if (newWidth > newHeight * aspectRatio) {
        distY = (xor(affectsX, affectsY) ? -distX : distX) / aspectRatio;
      } else {
        distX = (xor(affectsX, affectsY) ? -distY : distY) * aspectRatio;
      }
    } else {
      if (isHorizontal) {
        distY = distX / aspectRatio;
        affectsY = affectsX;
      } else {
        distX = distY * aspectRatio;
        affectsX = affectsY;
      }
    }
  }
  const x = affectsX ? startX + distX : startX;
  const y = affectsY ? startY + distY : startY;
  return {
    width: startWidth + (affectsX ? -distX : distX),
    height: startHeight + (affectsY ? -distY : distY),
    x: nodeOrigin[0] * distX * (!affectsX ? 1 : -1) + x,
    y: nodeOrigin[1] * distY * (!affectsY ? 1 : -1) + y
  };
}
__name(getDimensionsAfterResize, "getDimensionsAfterResize");
var initPrevValues = { width: 0, height: 0, x: 0, y: 0 };
var initStartValues = {
  ...initPrevValues,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function nodeToChildExtent(child, parent, nodeOrigin) {
  const x = parent.position.x + child.position.x;
  const y = parent.position.y + child.position.y;
  const width = child.measured.width ?? 0;
  const height = child.measured.height ?? 0;
  const originOffsetX = nodeOrigin[0] * width;
  const originOffsetY = nodeOrigin[1] * height;
  return [
    [x - originOffsetX, y - originOffsetY],
    [x + width - originOffsetX, y + height - originOffsetY]
  ];
}
__name(nodeToChildExtent, "nodeToChildExtent");
function XYResizer({ domNode, nodeId, getStoreItems, onChange, onEnd }) {
  const selection2 = select_default2(domNode);
  let params = {
    controlDirection: getControlDirection("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE
    },
    resizeDirection: void 0,
    keepAspectRatio: false
  };
  function update({ controlPosition, boundaries, keepAspectRatio, resizeDirection, onResizeStart, onResize, onResizeEnd, shouldResize }) {
    let prevValues = { ...initPrevValues };
    let startValues = { ...initStartValues };
    params = {
      boundaries,
      resizeDirection,
      keepAspectRatio,
      controlDirection: getControlDirection(controlPosition)
    };
    let node = void 0;
    let containerBounds = null;
    let childNodes = [];
    let parentNode = void 0;
    let nodeExtent = void 0;
    let childExtent = void 0;
    let resizeDetected = false;
    const dragHandler = drag_default().on("start", (event) => {
      const { nodeLookup, transform: transform2, snapGrid, snapToGrid, nodeOrigin, paneDomNode } = getStoreItems();
      node = nodeLookup.get(nodeId);
      if (!node) {
        return;
      }
      containerBounds = paneDomNode?.getBoundingClientRect() ?? null;
      const { xSnapped, ySnapped } = getPointerPosition(event.sourceEvent, {
        transform: transform2,
        snapGrid,
        snapToGrid,
        containerBounds
      });
      prevValues = {
        width: node.measured.width ?? 0,
        height: node.measured.height ?? 0,
        x: node.position.x ?? 0,
        y: node.position.y ?? 0
      };
      startValues = {
        ...prevValues,
        pointerX: xSnapped,
        pointerY: ySnapped,
        aspectRatio: prevValues.width / prevValues.height
      };
      parentNode = void 0;
      nodeExtent = isCoordinateExtent(node.extent) ? node.extent : void 0;
      if (node.parentId && (node.extent === "parent" || node.expandParent)) {
        parentNode = nodeLookup.get(node.parentId);
      }
      if (parentNode && node.extent === "parent") {
        nodeExtent = [
          [0, 0],
          [parentNode.measured.width, parentNode.measured.height]
        ];
      }
      childNodes = [];
      childExtent = void 0;
      for (const [childId, child] of nodeLookup) {
        if (child.parentId === nodeId) {
          childNodes.push({
            id: childId,
            position: { ...child.position },
            extent: child.extent
          });
          if (child.extent === "parent" || child.expandParent) {
            const extent = nodeToChildExtent(child, node, child.origin ?? nodeOrigin);
            if (childExtent) {
              childExtent = [
                [Math.min(extent[0][0], childExtent[0][0]), Math.min(extent[0][1], childExtent[0][1])],
                [Math.max(extent[1][0], childExtent[1][0]), Math.max(extent[1][1], childExtent[1][1])]
              ];
            } else {
              childExtent = extent;
            }
          }
        }
      }
      onResizeStart?.(event, { ...prevValues });
    }).on("drag", (event) => {
      const { transform: transform2, snapGrid, snapToGrid, nodeOrigin: storeNodeOrigin } = getStoreItems();
      const pointerPosition = getPointerPosition(event.sourceEvent, {
        transform: transform2,
        snapGrid,
        snapToGrid,
        containerBounds
      });
      const childChanges = [];
      if (!node) {
        return;
      }
      const { x: prevX, y: prevY, width: prevWidth, height: prevHeight } = prevValues;
      const change = {};
      const nodeOrigin = node.origin ?? storeNodeOrigin;
      const { width, height, x, y } = getDimensionsAfterResize(startValues, params.controlDirection, pointerPosition, params.boundaries, params.keepAspectRatio, nodeOrigin, nodeExtent, childExtent);
      const isWidthChange = width !== prevWidth;
      const isHeightChange = height !== prevHeight;
      const isXPosChange = x !== prevX && isWidthChange;
      const isYPosChange = y !== prevY && isHeightChange;
      if (!isXPosChange && !isYPosChange && !isWidthChange && !isHeightChange) {
        return;
      }
      if (isXPosChange || isYPosChange || nodeOrigin[0] === 1 || nodeOrigin[1] === 1) {
        change.x = isXPosChange ? x : prevValues.x;
        change.y = isYPosChange ? y : prevValues.y;
        prevValues.x = change.x;
        prevValues.y = change.y;
        if (childNodes.length > 0) {
          const xChange = x - prevX;
          const yChange = y - prevY;
          for (const childNode of childNodes) {
            childNode.position = {
              x: childNode.position.x - xChange + nodeOrigin[0] * (width - prevWidth),
              y: childNode.position.y - yChange + nodeOrigin[1] * (height - prevHeight)
            };
            childChanges.push(childNode);
          }
        }
      }
      if (isWidthChange || isHeightChange) {
        change.width = isWidthChange && (!params.resizeDirection || params.resizeDirection === "horizontal") ? width : prevValues.width;
        change.height = isHeightChange && (!params.resizeDirection || params.resizeDirection === "vertical") ? height : prevValues.height;
        prevValues.width = change.width;
        prevValues.height = change.height;
      }
      if (parentNode && node.expandParent) {
        const xLimit = nodeOrigin[0] * (change.width ?? 0);
        if (change.x && change.x < xLimit) {
          prevValues.x = xLimit;
          startValues.x = startValues.x - (change.x - xLimit);
        }
        const yLimit = nodeOrigin[1] * (change.height ?? 0);
        if (change.y && change.y < yLimit) {
          prevValues.y = yLimit;
          startValues.y = startValues.y - (change.y - yLimit);
        }
      }
      const direction = getResizeDirection({
        width: prevValues.width,
        prevWidth,
        height: prevValues.height,
        prevHeight,
        affectsX: params.controlDirection.affectsX,
        affectsY: params.controlDirection.affectsY
      });
      const nextValues = { ...prevValues, direction };
      const callResize = shouldResize?.(event, nextValues);
      if (callResize === false) {
        return;
      }
      resizeDetected = true;
      onResize?.(event, nextValues);
      onChange(change, childChanges);
    }).on("end", (event) => {
      if (!resizeDetected) {
        return;
      }
      onResizeEnd?.(event, { ...prevValues });
      onEnd?.({ ...prevValues });
      resizeDetected = false;
    });
    selection2.call(dragHandler);
  }
  __name(update, "update");
  function destroy() {
    selection2.on(".drag", null);
  }
  __name(destroy, "destroy");
  return {
    update,
    destroy
  };
}
__name(XYResizer, "XYResizer");

// node_modules/zustand/esm/traditional.mjs
init_esm();
var import_react = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

// node_modules/zustand/esm/vanilla.mjs
init_esm();
var createStoreImpl = /* @__PURE__ */ __name((createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = /* @__PURE__ */ __name((partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  }, "setState");
  const getState = /* @__PURE__ */ __name(() => state, "getState");
  const getInitialState2 = /* @__PURE__ */ __name(() => initialState, "getInitialState");
  const subscribe = /* @__PURE__ */ __name((listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, "subscribe");
  const destroy = /* @__PURE__ */ __name(() => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  }, "destroy");
  const api = { setState, getState, getInitialState: getInitialState2, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
}, "createStoreImpl");
var createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");

// node_modules/zustand/esm/traditional.mjs
var { useDebugValue } = import_react.default;
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var identity3 = /* @__PURE__ */ __name((arg) => arg, "identity");
function useStoreWithEqualityFn(api, selector = identity3, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
__name(useStoreWithEqualityFn, "useStoreWithEqualityFn");
var createWithEqualityFnImpl = /* @__PURE__ */ __name((createState, defaultEqualityFn) => {
  const api = createStore(createState);
  const useBoundStoreWithEqualityFn = /* @__PURE__ */ __name((selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn), "useBoundStoreWithEqualityFn");
  Object.assign(useBoundStoreWithEqualityFn, api);
  return useBoundStoreWithEqualityFn;
}, "createWithEqualityFnImpl");
var createWithEqualityFn = /* @__PURE__ */ __name((createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl, "createWithEqualityFn");

// node_modules/zustand/esm/shallow.mjs
init_esm();
function shallow$1(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (const keyA of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
      return false;
    }
  }
  return true;
}
__name(shallow$1, "shallow$1");

// node_modules/@xyflow/react/dist/esm/index.js
var import_react_dom = __toESM(require_react_dom());
var StoreContext = (0, import_react2.createContext)(null);
var Provider$1 = StoreContext.Provider;
var zustandErrorMessage = errorMessages["error001"]("react");
function useStore(selector, equalityFn) {
  const store = (0, import_react2.useContext)(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return useStoreWithEqualityFn(store, selector, equalityFn);
}
__name(useStore, "useStore");
function useStoreApi() {
  const store = (0, import_react2.useContext)(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return (0, import_react2.useMemo)(() => ({
    getState: store.getState,
    setState: store.setState,
    subscribe: store.subscribe
  }), [store]);
}
__name(useStoreApi, "useStoreApi");
var style = { display: "none" };
var ariaLiveStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
};
var ARIA_NODE_DESC_KEY = "react-flow__node-desc";
var ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
var ARIA_LIVE_MESSAGE = "react-flow__aria-live";
var ariaLiveSelector = /* @__PURE__ */ __name((s) => s.ariaLiveMessage, "ariaLiveSelector");
var ariaLabelConfigSelector = /* @__PURE__ */ __name((s) => s.ariaLabelConfig, "ariaLabelConfigSelector");
function AriaLiveMessage({ rfId }) {
  const ariaLiveMessage = useStore(ariaLiveSelector);
  return (0, import_jsx_runtime.jsx)("div", { id: `${ARIA_LIVE_MESSAGE}-${rfId}`, "aria-live": "assertive", "aria-atomic": "true", style: ariaLiveStyle, children: ariaLiveMessage });
}
__name(AriaLiveMessage, "AriaLiveMessage");
function A11yDescriptions({ rfId, disableKeyboardA11y }) {
  const ariaLabelConfig = useStore(ariaLabelConfigSelector);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("div", { id: `${ARIA_NODE_DESC_KEY}-${rfId}`, style, children: disableKeyboardA11y ? ariaLabelConfig["node.a11yDescription.default"] : ariaLabelConfig["node.a11yDescription.keyboardDisabled"] }), (0, import_jsx_runtime.jsx)("div", { id: `${ARIA_EDGE_DESC_KEY}-${rfId}`, style, children: ariaLabelConfig["edge.a11yDescription.default"] }), !disableKeyboardA11y && (0, import_jsx_runtime.jsx)(AriaLiveMessage, { rfId })] });
}
__name(A11yDescriptions, "A11yDescriptions");
var Panel = (0, import_react2.forwardRef)(({ position = "top-left", children: children2, className, style: style2, ...rest }, ref) => {
  const positionClasses = `${position}`.split("-");
  return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__panel", className, ...positionClasses]), style: style2, ref, ...rest, children: children2 });
});
Panel.displayName = "Panel";
function Attribution({ proOptions, position = "bottom-right" }) {
  if (proOptions?.hideAttribution) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)(Panel, { position, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: (0, import_jsx_runtime.jsx)("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
__name(Attribution, "Attribution");
var selector$m = /* @__PURE__ */ __name((s) => {
  const selectedNodes = [];
  const selectedEdges = [];
  for (const [, node] of s.nodeLookup) {
    if (node.selected) {
      selectedNodes.push(node.internals.userNode);
    }
  }
  for (const [, edge] of s.edgeLookup) {
    if (edge.selected) {
      selectedEdges.push(edge);
    }
  }
  return { selectedNodes, selectedEdges };
}, "selector$m");
var selectId = /* @__PURE__ */ __name((obj) => obj.id, "selectId");
function areEqual(a, b) {
  return shallow$1(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && shallow$1(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
}
__name(areEqual, "areEqual");
function SelectionListenerInner({ onSelectionChange }) {
  const store = useStoreApi();
  const { selectedNodes, selectedEdges } = useStore(selector$m, areEqual);
  (0, import_react2.useEffect)(() => {
    const params = { nodes: selectedNodes, edges: selectedEdges };
    onSelectionChange?.(params);
    store.getState().onSelectionChangeHandlers.forEach((fn) => fn(params));
  }, [selectedNodes, selectedEdges, onSelectionChange]);
  return null;
}
__name(SelectionListenerInner, "SelectionListenerInner");
var changeSelector = /* @__PURE__ */ __name((s) => !!s.onSelectionChangeHandlers, "changeSelector");
function SelectionListener({ onSelectionChange }) {
  const storeHasSelectionChangeHandlers = useStore(changeSelector);
  if (onSelectionChange || storeHasSelectionChangeHandlers) {
    return (0, import_jsx_runtime.jsx)(SelectionListenerInner, { onSelectionChange });
  }
  return null;
}
__name(SelectionListener, "SelectionListener");
var defaultNodeOrigin = [0, 0];
var defaultViewport = { x: 0, y: 0, zoom: 1 };
var reactFlowFieldsToTrack = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "autoPanOnNodeFocus",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "connectionDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "ariaLabelConfig",
  "zIndexMode"
];
var fieldsToTrack = [...reactFlowFieldsToTrack, "rfId"];
var selector$l = /* @__PURE__ */ __name((s) => ({
  setNodes: s.setNodes,
  setEdges: s.setEdges,
  setMinZoom: s.setMinZoom,
  setMaxZoom: s.setMaxZoom,
  setTranslateExtent: s.setTranslateExtent,
  setNodeExtent: s.setNodeExtent,
  reset: s.reset,
  setDefaultNodesAndEdges: s.setDefaultNodesAndEdges
}), "selector$l");
var initPrevValues2 = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: infiniteExtent,
  nodeOrigin: defaultNodeOrigin,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: true,
  noPanClassName: "nopan",
  rfId: "1"
};
function StoreUpdater(props) {
  const { setNodes, setEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset, setDefaultNodesAndEdges } = useStore(selector$l, shallow$1);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    setDefaultNodesAndEdges(props.defaultNodes, props.defaultEdges);
    return () => {
      previousFields.current = initPrevValues2;
      reset();
    };
  }, []);
  const previousFields = (0, import_react2.useRef)(initPrevValues2);
  (0, import_react2.useEffect)(
    () => {
      for (const fieldName of fieldsToTrack) {
        const fieldValue = props[fieldName];
        const previousFieldValue = previousFields.current[fieldName];
        if (fieldValue === previousFieldValue)
          continue;
        if (typeof props[fieldName] === "undefined")
          continue;
        if (fieldName === "nodes")
          setNodes(fieldValue);
        else if (fieldName === "edges")
          setEdges(fieldValue);
        else if (fieldName === "minZoom")
          setMinZoom(fieldValue);
        else if (fieldName === "maxZoom")
          setMaxZoom(fieldValue);
        else if (fieldName === "translateExtent")
          setTranslateExtent(fieldValue);
        else if (fieldName === "nodeExtent")
          setNodeExtent(fieldValue);
        else if (fieldName === "ariaLabelConfig")
          store.setState({ ariaLabelConfig: mergeAriaLabelConfig(fieldValue) });
        else if (fieldName === "fitView")
          store.setState({ fitViewQueued: fieldValue });
        else if (fieldName === "fitViewOptions")
          store.setState({ fitViewOptions: fieldValue });
        else
          store.setState({ [fieldName]: fieldValue });
      }
      previousFields.current = props;
    },
    // Only re-run the effect if one of the fields we track changes
    fieldsToTrack.map((fieldName) => props[fieldName])
  );
  return null;
}
__name(StoreUpdater, "StoreUpdater");
function getMediaQuery() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
}
__name(getMediaQuery, "getMediaQuery");
function useColorModeClass(colorMode) {
  const [colorModeClass, setColorModeClass] = (0, import_react2.useState)(colorMode === "system" ? null : colorMode);
  (0, import_react2.useEffect)(() => {
    if (colorMode !== "system") {
      setColorModeClass(colorMode);
      return;
    }
    const mediaQuery = getMediaQuery();
    const updateColorModeClass = /* @__PURE__ */ __name(() => setColorModeClass(mediaQuery?.matches ? "dark" : "light"), "updateColorModeClass");
    updateColorModeClass();
    mediaQuery?.addEventListener("change", updateColorModeClass);
    return () => {
      mediaQuery?.removeEventListener("change", updateColorModeClass);
    };
  }, [colorMode]);
  return colorModeClass !== null ? colorModeClass : getMediaQuery()?.matches ? "dark" : "light";
}
__name(useColorModeClass, "useColorModeClass");
var defaultDoc = typeof document !== "undefined" ? document : null;
function useKeyPress(keyCode = null, options2 = { target: defaultDoc, actInsideInputWithModifier: true }) {
  const [keyPressed, setKeyPressed] = (0, import_react2.useState)(false);
  const modifierPressed = (0, import_react2.useRef)(false);
  const pressedKeys = (0, import_react2.useRef)(/* @__PURE__ */ new Set([]));
  const [keyCodes, keysToWatch] = (0, import_react2.useMemo)(() => {
    if (keyCode !== null) {
      const keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
      const keys = keyCodeArr.filter((kc) => typeof kc === "string").map((kc) => kc.replace("+", "\n").replace("\n\n", "\n+").split("\n"));
      const keysFlat = keys.reduce((res, item) => res.concat(...item), []);
      return [keys, keysFlat];
    }
    return [[], []];
  }, [keyCode]);
  (0, import_react2.useEffect)(() => {
    const target = options2?.target ?? defaultDoc;
    const actInsideInputWithModifier = options2?.actInsideInputWithModifier ?? true;
    if (keyCode !== null) {
      const downHandler = /* @__PURE__ */ __name((event) => {
        modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
        const preventAction = (!modifierPressed.current || modifierPressed.current && !actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        pressedKeys.current.add(event[keyOrCode]);
        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
          const target2 = event.composedPath?.()?.[0] || event.target;
          const isInteractiveElement = target2?.nodeName === "BUTTON" || target2?.nodeName === "A";
          if (options2.preventDefault !== false && (modifierPressed.current || !isInteractiveElement)) {
            event.preventDefault();
          }
          setKeyPressed(true);
        }
      }, "downHandler");
      const upHandler = /* @__PURE__ */ __name((event) => {
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
          setKeyPressed(false);
          pressedKeys.current.clear();
        } else {
          pressedKeys.current.delete(event[keyOrCode]);
        }
        if (event.key === "Meta") {
          pressedKeys.current.clear();
        }
        modifierPressed.current = false;
      }, "upHandler");
      const resetHandler = /* @__PURE__ */ __name(() => {
        pressedKeys.current.clear();
        setKeyPressed(false);
      }, "resetHandler");
      target?.addEventListener("keydown", downHandler);
      target?.addEventListener("keyup", upHandler);
      window.addEventListener("blur", resetHandler);
      window.addEventListener("contextmenu", resetHandler);
      return () => {
        target?.removeEventListener("keydown", downHandler);
        target?.removeEventListener("keyup", upHandler);
        window.removeEventListener("blur", resetHandler);
        window.removeEventListener("contextmenu", resetHandler);
      };
    }
  }, [keyCode, setKeyPressed]);
  return keyPressed;
}
__name(useKeyPress, "useKeyPress");
function isMatchingKey(keyCodes, pressedKeys, isUp) {
  return keyCodes.filter((keys) => isUp || keys.length === pressedKeys.size).some((keys) => keys.every((k) => pressedKeys.has(k)));
}
__name(isMatchingKey, "isMatchingKey");
function useKeyOrCode(eventCode, keysToWatch) {
  return keysToWatch.includes(eventCode) ? "code" : "key";
}
__name(useKeyOrCode, "useKeyOrCode");
var useViewportHelper = /* @__PURE__ */ __name(() => {
  const store = useStoreApi();
  return (0, import_react2.useMemo)(() => {
    return {
      zoomIn: /* @__PURE__ */ __name(async (options2) => {
        const { panZoom } = store.getState();
        return panZoom ? panZoom.scaleBy(1.2, options2) : false;
      }, "zoomIn"),
      zoomOut: /* @__PURE__ */ __name(async (options2) => {
        const { panZoom } = store.getState();
        return panZoom ? panZoom.scaleBy(1 / 1.2, options2) : false;
      }, "zoomOut"),
      zoomTo: /* @__PURE__ */ __name(async (zoomLevel, options2) => {
        const { panZoom } = store.getState();
        return panZoom ? panZoom.scaleTo(zoomLevel, options2) : false;
      }, "zoomTo"),
      getZoom: /* @__PURE__ */ __name(() => store.getState().transform[2], "getZoom"),
      setViewport: /* @__PURE__ */ __name(async (viewport, options2) => {
        const { transform: [tX, tY, tZoom], panZoom } = store.getState();
        if (!panZoom) {
          return false;
        }
        await panZoom.setViewport({
          x: viewport.x ?? tX,
          y: viewport.y ?? tY,
          zoom: viewport.zoom ?? tZoom
        }, options2);
        return true;
      }, "setViewport"),
      getViewport: /* @__PURE__ */ __name(() => {
        const [x, y, zoom] = store.getState().transform;
        return { x, y, zoom };
      }, "getViewport"),
      setCenter: /* @__PURE__ */ __name(async (x, y, options2) => {
        return store.getState().setCenter(x, y, options2);
      }, "setCenter"),
      fitBounds: /* @__PURE__ */ __name(async (bounds, options2) => {
        const { width, height, minZoom, maxZoom, panZoom } = store.getState();
        const viewport = getViewportForBounds(bounds, width, height, minZoom, maxZoom, options2?.padding ?? 0.1);
        if (!panZoom) {
          return false;
        }
        await panZoom.setViewport(viewport, {
          duration: options2?.duration,
          ease: options2?.ease,
          interpolate: options2?.interpolate
        });
        return true;
      }, "fitBounds"),
      screenToFlowPosition: /* @__PURE__ */ __name((clientPosition, options2 = {}) => {
        const { transform: transform2, snapGrid, snapToGrid, domNode } = store.getState();
        if (!domNode) {
          return clientPosition;
        }
        const { x: domX, y: domY } = domNode.getBoundingClientRect();
        const correctedPosition = {
          x: clientPosition.x - domX,
          y: clientPosition.y - domY
        };
        const _snapGrid = options2.snapGrid ?? snapGrid;
        const _snapToGrid = options2.snapToGrid ?? snapToGrid;
        return pointToRendererPoint(correctedPosition, transform2, _snapToGrid, _snapGrid);
      }, "screenToFlowPosition"),
      flowToScreenPosition: /* @__PURE__ */ __name((flowPosition) => {
        const { transform: transform2, domNode } = store.getState();
        if (!domNode) {
          return flowPosition;
        }
        const { x: domX, y: domY } = domNode.getBoundingClientRect();
        const rendererPosition = rendererPointToPoint(flowPosition, transform2);
        return {
          x: rendererPosition.x + domX,
          y: rendererPosition.y + domY
        };
      }, "flowToScreenPosition")
    };
  }, []);
}, "useViewportHelper");
function applyChanges(changes, elements) {
  const updatedElements = [];
  const changesMap = /* @__PURE__ */ new Map();
  const addItemChanges = [];
  for (const change of changes) {
    if (change.type === "add") {
      addItemChanges.push(change);
      continue;
    } else if (change.type === "remove" || change.type === "replace") {
      changesMap.set(change.id, [change]);
    } else {
      const elementChanges = changesMap.get(change.id);
      if (elementChanges) {
        elementChanges.push(change);
      } else {
        changesMap.set(change.id, [change]);
      }
    }
  }
  for (const element of elements) {
    const changes2 = changesMap.get(element.id);
    if (!changes2) {
      updatedElements.push(element);
      continue;
    }
    if (changes2[0].type === "remove") {
      continue;
    }
    if (changes2[0].type === "replace") {
      updatedElements.push({ ...changes2[0].item });
      continue;
    }
    const updatedElement = { ...element };
    for (const change of changes2) {
      applyChange(change, updatedElement);
    }
    updatedElements.push(updatedElement);
  }
  if (addItemChanges.length) {
    addItemChanges.forEach((change) => {
      if (change.index !== void 0) {
        updatedElements.splice(change.index, 0, { ...change.item });
      } else {
        updatedElements.push({ ...change.item });
      }
    });
  }
  return updatedElements;
}
__name(applyChanges, "applyChanges");
function applyChange(change, element) {
  switch (change.type) {
    case "select": {
      element.selected = change.selected;
      break;
    }
    case "position": {
      if (typeof change.position !== "undefined") {
        element.position = change.position;
      }
      if (typeof change.dragging !== "undefined") {
        element.dragging = change.dragging;
      }
      break;
    }
    case "dimensions": {
      if (typeof change.dimensions !== "undefined") {
        element.measured = {
          ...change.dimensions
        };
        if (change.setAttributes) {
          if (change.setAttributes === true || change.setAttributes === "width") {
            element.width = change.dimensions.width;
          }
          if (change.setAttributes === true || change.setAttributes === "height") {
            element.height = change.dimensions.height;
          }
        }
      }
      if (typeof change.resizing === "boolean") {
        element.resizing = change.resizing;
      }
      break;
    }
  }
}
__name(applyChange, "applyChange");
function applyNodeChanges(changes, nodes) {
  return applyChanges(changes, nodes);
}
__name(applyNodeChanges, "applyNodeChanges");
function applyEdgeChanges(changes, edges) {
  return applyChanges(changes, edges);
}
__name(applyEdgeChanges, "applyEdgeChanges");
function createSelectionChange(id2, selected2) {
  return {
    id: id2,
    type: "select",
    selected: selected2
  };
}
__name(createSelectionChange, "createSelectionChange");
function getSelectionChanges(items, selectedIds = /* @__PURE__ */ new Set(), mutateItem = false) {
  const changes = [];
  for (const [id2, item] of items) {
    const willBeSelected = selectedIds.has(id2);
    if (!(item.selected === void 0 && !willBeSelected) && item.selected !== willBeSelected) {
      if (mutateItem) {
        item.selected = willBeSelected;
      }
      changes.push(createSelectionChange(item.id, willBeSelected));
    }
  }
  return changes;
}
__name(getSelectionChanges, "getSelectionChanges");
function getElementsDiffChanges({ items = [], lookup }) {
  const changes = [];
  const itemsLookup = new Map(items.map((item) => [item.id, item]));
  for (const [index2, item] of items.entries()) {
    const lookupItem = lookup.get(item.id);
    const storeItem = lookupItem?.internals?.userNode ?? lookupItem;
    if (storeItem !== void 0 && storeItem !== item) {
      changes.push({ id: item.id, item, type: "replace" });
    }
    if (storeItem === void 0) {
      changes.push({ item, type: "add", index: index2 });
    }
  }
  for (const [id2] of lookup) {
    const nextNode = itemsLookup.get(id2);
    if (nextNode === void 0) {
      changes.push({ id: id2, type: "remove" });
    }
  }
  return changes;
}
__name(getElementsDiffChanges, "getElementsDiffChanges");
function elementToRemoveChange(item) {
  return {
    id: item.id,
    type: "remove"
  };
}
__name(elementToRemoveChange, "elementToRemoveChange");
var defaultOnError = createDevWarn("React Flow", "https://reactflow.dev/");
function addEdge2(edgeParams, edges, options2 = {}) {
  return addEdge(edgeParams, edges, {
    ...options2,
    onError: options2.onError ?? defaultOnError
  });
}
__name(addEdge2, "addEdge");
var isNode = /* @__PURE__ */ __name((element) => isNodeBase(element), "isNode");
var isEdge = /* @__PURE__ */ __name((element) => isEdgeBase(element), "isEdge");
function fixedForwardRef(render) {
  return (0, import_react2.forwardRef)(render);
}
__name(fixedForwardRef, "fixedForwardRef");
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
function useQueue(runQueue) {
  const [serial, setSerial] = (0, import_react2.useState)(BigInt(0));
  const [queue] = (0, import_react2.useState)(() => createQueue(() => setSerial((n) => n + BigInt(1))));
  useIsomorphicLayoutEffect(() => {
    const queueItems = queue.get();
    if (queueItems.length) {
      runQueue(queueItems);
      queue.reset();
    }
  }, [serial]);
  return queue;
}
__name(useQueue, "useQueue");
function createQueue(cb) {
  let queue = [];
  return {
    get: /* @__PURE__ */ __name(() => queue, "get"),
    reset: /* @__PURE__ */ __name(() => {
      queue = [];
    }, "reset"),
    push: /* @__PURE__ */ __name((item) => {
      queue.push(item);
      cb();
    }, "push")
  };
}
__name(createQueue, "createQueue");
var BatchContext = (0, import_react2.createContext)(null);
function BatchProvider({ children: children2 }) {
  const store = useStoreApi();
  const nodeQueueHandler = (0, import_react2.useCallback)((queueItems) => {
    const { nodes = [], setNodes, hasDefaultNodes, onNodesChange, nodeLookup, fitViewQueued, onNodesChangeMiddlewareMap } = store.getState();
    let next = nodes;
    for (const payload of queueItems) {
      next = typeof payload === "function" ? payload(next) : payload;
    }
    let changes = getElementsDiffChanges({
      items: next,
      lookup: nodeLookup
    });
    for (const middleware of onNodesChangeMiddlewareMap.values()) {
      changes = middleware(changes);
    }
    if (hasDefaultNodes) {
      setNodes(next);
    }
    if (changes.length > 0) {
      onNodesChange?.(changes);
    } else if (fitViewQueued) {
      window.requestAnimationFrame(() => {
        const { fitViewQueued: fitViewQueued2, nodes: nodes2, setNodes: setNodes2 } = store.getState();
        if (fitViewQueued2) {
          setNodes2(nodes2);
        }
      });
    }
  }, []);
  const nodeQueue = useQueue(nodeQueueHandler);
  const edgeQueueHandler = (0, import_react2.useCallback)((queueItems) => {
    const { edges = [], setEdges, hasDefaultEdges, onEdgesChange, edgeLookup } = store.getState();
    let next = edges;
    for (const payload of queueItems) {
      next = typeof payload === "function" ? payload(next) : payload;
    }
    if (hasDefaultEdges) {
      setEdges(next);
    } else if (onEdgesChange) {
      onEdgesChange(getElementsDiffChanges({
        items: next,
        lookup: edgeLookup
      }));
    }
  }, []);
  const edgeQueue = useQueue(edgeQueueHandler);
  const value = (0, import_react2.useMemo)(() => ({ nodeQueue, edgeQueue }), []);
  return (0, import_jsx_runtime.jsx)(BatchContext.Provider, { value, children: children2 });
}
__name(BatchProvider, "BatchProvider");
function useBatchContext() {
  const batchContext = (0, import_react2.useContext)(BatchContext);
  if (!batchContext) {
    throw new Error("useBatchContext must be used within a BatchProvider");
  }
  return batchContext;
}
__name(useBatchContext, "useBatchContext");
var selector$k = /* @__PURE__ */ __name((s) => !!s.panZoom, "selector$k");
function useReactFlow() {
  const viewportHelper = useViewportHelper();
  const store = useStoreApi();
  const batchContext = useBatchContext();
  const viewportInitialized = useStore(selector$k);
  const generalHelper = (0, import_react2.useMemo)(() => {
    const getInternalNode = /* @__PURE__ */ __name((id2) => store.getState().nodeLookup.get(id2), "getInternalNode");
    const setNodes = /* @__PURE__ */ __name((payload) => {
      batchContext.nodeQueue.push(payload);
    }, "setNodes");
    const setEdges = /* @__PURE__ */ __name((payload) => {
      batchContext.edgeQueue.push(payload);
    }, "setEdges");
    const getNodeRect = /* @__PURE__ */ __name((node) => {
      const { nodeLookup, nodeOrigin } = store.getState();
      const nodeToUse = isNode(node) ? node : nodeLookup.get(node.id);
      const position = nodeToUse.parentId ? evaluateAbsolutePosition(nodeToUse.position, nodeToUse.measured, nodeToUse.parentId, nodeLookup, nodeOrigin) : nodeToUse.position;
      const nodeWithPosition = {
        ...nodeToUse,
        position,
        width: nodeToUse.measured?.width ?? nodeToUse.width,
        height: nodeToUse.measured?.height ?? nodeToUse.height
      };
      return nodeToRect(nodeWithPosition);
    }, "getNodeRect");
    const updateNode = /* @__PURE__ */ __name((id2, nodeUpdate, options2 = { replace: false }) => {
      setNodes((prevNodes) => prevNodes.map((node) => {
        if (node.id === id2) {
          const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node) : nodeUpdate;
          return options2.replace && isNode(nextNode) ? nextNode : { ...node, ...nextNode };
        }
        return node;
      }));
    }, "updateNode");
    const updateEdge = /* @__PURE__ */ __name((id2, edgeUpdate, options2 = { replace: false }) => {
      setEdges((prevEdges) => prevEdges.map((edge) => {
        if (edge.id === id2) {
          const nextEdge = typeof edgeUpdate === "function" ? edgeUpdate(edge) : edgeUpdate;
          return options2.replace && isEdge(nextEdge) ? nextEdge : { ...edge, ...nextEdge };
        }
        return edge;
      }));
    }, "updateEdge");
    return {
      getNodes: /* @__PURE__ */ __name(() => store.getState().nodes.map((n) => ({ ...n })), "getNodes"),
      getNode: /* @__PURE__ */ __name((id2) => getInternalNode(id2)?.internals.userNode, "getNode"),
      getInternalNode,
      getEdges: /* @__PURE__ */ __name(() => {
        const { edges = [] } = store.getState();
        return edges.map((e) => ({ ...e }));
      }, "getEdges"),
      getEdge: /* @__PURE__ */ __name((id2) => store.getState().edgeLookup.get(id2), "getEdge"),
      setNodes,
      setEdges,
      addNodes: /* @__PURE__ */ __name((payload) => {
        const newNodes = Array.isArray(payload) ? payload : [payload];
        batchContext.nodeQueue.push((nodes) => [...nodes, ...newNodes]);
      }, "addNodes"),
      addEdges: /* @__PURE__ */ __name((payload) => {
        const newEdges = Array.isArray(payload) ? payload : [payload];
        batchContext.edgeQueue.push((edges) => [...edges, ...newEdges]);
      }, "addEdges"),
      toObject: /* @__PURE__ */ __name(() => {
        const { nodes = [], edges = [], transform: transform2 } = store.getState();
        const [x, y, zoom] = transform2;
        return {
          nodes: nodes.map((n) => ({ ...n })),
          edges: edges.map((e) => ({ ...e })),
          viewport: {
            x,
            y,
            zoom
          }
        };
      }, "toObject"),
      deleteElements: /* @__PURE__ */ __name(async ({ nodes: nodesToRemove = [], edges: edgesToRemove = [] }) => {
        const { nodes, edges, onNodesDelete, onEdgesDelete, triggerNodeChanges, triggerEdgeChanges, onDelete, onBeforeDelete } = store.getState();
        const { nodes: matchingNodes, edges: matchingEdges } = await getElementsToRemove({
          nodesToRemove,
          edgesToRemove,
          nodes,
          edges,
          onBeforeDelete
        });
        const hasMatchingEdges = matchingEdges.length > 0;
        const hasMatchingNodes = matchingNodes.length > 0;
        if (hasMatchingEdges) {
          const edgeChanges = matchingEdges.map(elementToRemoveChange);
          onEdgesDelete?.(matchingEdges);
          triggerEdgeChanges(edgeChanges);
        }
        if (hasMatchingNodes) {
          const nodeChanges = matchingNodes.map(elementToRemoveChange);
          onNodesDelete?.(matchingNodes);
          triggerNodeChanges(nodeChanges);
        }
        if (hasMatchingNodes || hasMatchingEdges) {
          onDelete?.({ nodes: matchingNodes, edges: matchingEdges });
        }
        return { deletedNodes: matchingNodes, deletedEdges: matchingEdges };
      }, "deleteElements"),
      /**
       * Partial is defined as "the 2 nodes/areas are intersecting partially".
       * If a is contained in b or b is contained in a, they are both
       * considered fully intersecting.
       */
      getIntersectingNodes: /* @__PURE__ */ __name((nodeOrRect, partially = true, nodes) => {
        const isRect = isRectObject(nodeOrRect);
        const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
        const hasNodesOption = nodes !== void 0;
        if (!nodeRect) {
          return [];
        }
        return (nodes || store.getState().nodes).filter((n) => {
          const internalNode = store.getState().nodeLookup.get(n.id);
          if (internalNode && !isRect && (n.id === nodeOrRect.id || !internalNode.internals.positionAbsolute)) {
            return false;
          }
          const currNodeRect = nodeToRect(hasNodesOption ? n : internalNode);
          const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
          const partiallyVisible = partially && overlappingArea > 0;
          return partiallyVisible || overlappingArea >= currNodeRect.width * currNodeRect.height || overlappingArea >= nodeRect.width * nodeRect.height;
        });
      }, "getIntersectingNodes"),
      isNodeIntersecting: /* @__PURE__ */ __name((nodeOrRect, area, partially = true) => {
        const isRect = isRectObject(nodeOrRect);
        const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
        if (!nodeRect) {
          return false;
        }
        const overlappingArea = getOverlappingArea(nodeRect, area);
        const partiallyVisible = partially && overlappingArea > 0;
        return partiallyVisible || overlappingArea >= area.width * area.height || overlappingArea >= nodeRect.width * nodeRect.height;
      }, "isNodeIntersecting"),
      updateNode,
      updateNodeData: /* @__PURE__ */ __name((id2, dataUpdate, options2 = { replace: false }) => {
        updateNode(id2, (node) => {
          const nextData = typeof dataUpdate === "function" ? dataUpdate(node) : dataUpdate;
          return options2.replace ? { ...node, data: nextData } : { ...node, data: { ...node.data, ...nextData } };
        }, options2);
      }, "updateNodeData"),
      updateEdge,
      updateEdgeData: /* @__PURE__ */ __name((id2, dataUpdate, options2 = { replace: false }) => {
        updateEdge(id2, (edge) => {
          const nextData = typeof dataUpdate === "function" ? dataUpdate(edge) : dataUpdate;
          return options2.replace ? { ...edge, data: nextData } : { ...edge, data: { ...edge.data, ...nextData } };
        }, options2);
      }, "updateEdgeData"),
      getNodesBounds: /* @__PURE__ */ __name((nodes) => {
        const { nodeLookup, nodeOrigin } = store.getState();
        return getNodesBounds(nodes, { nodeLookup, nodeOrigin });
      }, "getNodesBounds"),
      getHandleConnections: /* @__PURE__ */ __name(({ type, id: id2, nodeId }) => Array.from(store.getState().connectionLookup.get(`${nodeId}-${type}${id2 ? `-${id2}` : ""}`)?.values() ?? []), "getHandleConnections"),
      getNodeConnections: /* @__PURE__ */ __name(({ type, handleId, nodeId }) => Array.from(store.getState().connectionLookup.get(`${nodeId}${type ? handleId ? `-${type}-${handleId}` : `-${type}` : ""}`)?.values() ?? []), "getNodeConnections"),
      fitView: /* @__PURE__ */ __name(async (options2) => {
        const fitViewResolver = store.getState().fitViewResolver ?? withResolvers();
        store.setState({ fitViewQueued: true, fitViewOptions: options2, fitViewResolver });
        batchContext.nodeQueue.push((nodes) => [...nodes]);
        return fitViewResolver.promise;
      }, "fitView")
    };
  }, []);
  return (0, import_react2.useMemo)(() => {
    return {
      ...generalHelper,
      ...viewportHelper,
      viewportInitialized
    };
  }, [viewportInitialized]);
}
__name(useReactFlow, "useReactFlow");
var selected = /* @__PURE__ */ __name((item) => item.selected, "selected");
var win$1 = typeof window !== "undefined" ? window : void 0;
function useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode }) {
  const store = useStoreApi();
  const { deleteElements } = useReactFlow();
  const deleteKeyPressed = useKeyPress(deleteKeyCode, { actInsideInputWithModifier: false });
  const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode, { target: win$1 });
  (0, import_react2.useEffect)(() => {
    if (deleteKeyPressed) {
      const { edges, nodes } = store.getState();
      deleteElements({ nodes: nodes.filter(selected), edges: edges.filter(selected) });
      store.setState({ nodesSelectionActive: false });
    }
  }, [deleteKeyPressed]);
  (0, import_react2.useEffect)(() => {
    store.setState({ multiSelectionActive: multiSelectionKeyPressed });
  }, [multiSelectionKeyPressed]);
}
__name(useGlobalKeyHandler, "useGlobalKeyHandler");
function useResizeHandler(domNode) {
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    const updateDimensions = /* @__PURE__ */ __name(() => {
      if (!domNode.current || !(domNode.current.checkVisibility?.() ?? true)) {
        return false;
      }
      const size = getDimensions(domNode.current);
      if (size.height === 0 || size.width === 0) {
        store.getState().onError?.("004", errorMessages["error004"]());
      }
      store.setState({ width: size.width || 500, height: size.height || 500 });
    }, "updateDimensions");
    if (domNode.current) {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      const resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(domNode.current);
      return () => {
        window.removeEventListener("resize", updateDimensions);
        if (resizeObserver && domNode.current) {
          resizeObserver.unobserve(domNode.current);
        }
      };
    }
  }, []);
}
__name(useResizeHandler, "useResizeHandler");
var containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};
var selector$j = /* @__PURE__ */ __name((s) => ({
  userSelectionActive: s.userSelectionActive,
  lib: s.lib,
  connectionInProgress: s.connection.inProgress
}), "selector$j");
function ZoomPane({ onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children: children2, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance, selectionOnDrag }) {
  const store = useStoreApi();
  const zoomPane = (0, import_react2.useRef)(null);
  const { userSelectionActive, lib, connectionInProgress } = useStore(selector$j, shallow$1);
  const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
  const panZoom = (0, import_react2.useRef)();
  useResizeHandler(zoomPane);
  const onTransformChange = (0, import_react2.useCallback)((transform2) => {
    onViewportChange?.({ x: transform2[0], y: transform2[1], zoom: transform2[2] });
    if (!isControlledViewport) {
      store.setState({ transform: transform2 });
    }
  }, [onViewportChange, isControlledViewport]);
  (0, import_react2.useEffect)(() => {
    if (zoomPane.current) {
      panZoom.current = XYPanZoom({
        domNode: zoomPane.current,
        minZoom,
        maxZoom,
        translateExtent,
        viewport: defaultViewport2,
        onDraggingChange: /* @__PURE__ */ __name((paneDragging) => store.setState((prevState) => prevState.paneDragging === paneDragging ? prevState : { paneDragging }), "onDraggingChange"),
        onPanZoomStart: /* @__PURE__ */ __name((event, vp) => {
          const { onViewportChangeStart, onMoveStart } = store.getState();
          onMoveStart?.(event, vp);
          onViewportChangeStart?.(vp);
        }, "onPanZoomStart"),
        onPanZoom: /* @__PURE__ */ __name((event, vp) => {
          const { onViewportChange: onViewportChange2, onMove } = store.getState();
          onMove?.(event, vp);
          onViewportChange2?.(vp);
        }, "onPanZoom"),
        onPanZoomEnd: /* @__PURE__ */ __name((event, vp) => {
          const { onViewportChangeEnd, onMoveEnd } = store.getState();
          onMoveEnd?.(event, vp);
          onViewportChangeEnd?.(vp);
        }, "onPanZoomEnd")
      });
      const { x, y, zoom } = panZoom.current.getViewport();
      store.setState({
        panZoom: panZoom.current,
        transform: [x, y, zoom],
        domNode: zoomPane.current.closest(".react-flow")
      });
      return () => {
        panZoom.current?.destroy();
      };
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    panZoom.current?.update({
      onPaneContextMenu,
      zoomOnScroll,
      zoomOnPinch,
      panOnScroll,
      panOnScrollSpeed,
      panOnScrollMode,
      zoomOnDoubleClick,
      panOnDrag,
      zoomActivationKeyPressed,
      preventScrolling,
      noPanClassName,
      userSelectionActive,
      noWheelClassName,
      lib,
      onTransformChange,
      connectionInProgress,
      selectionOnDrag,
      paneClickDistance
    });
  }, [
    onPaneContextMenu,
    zoomOnScroll,
    zoomOnPinch,
    panOnScroll,
    panOnScrollSpeed,
    panOnScrollMode,
    zoomOnDoubleClick,
    panOnDrag,
    zoomActivationKeyPressed,
    preventScrolling,
    noPanClassName,
    userSelectionActive,
    noWheelClassName,
    lib,
    onTransformChange,
    connectionInProgress,
    selectionOnDrag,
    paneClickDistance
  ]);
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__renderer", ref: zoomPane, style: containerStyle, children: children2 });
}
__name(ZoomPane, "ZoomPane");
var selector$i = /* @__PURE__ */ __name((s) => ({
  userSelectionActive: s.userSelectionActive,
  userSelectionRect: s.userSelectionRect
}), "selector$i");
function UserSelection() {
  const { userSelectionActive, userSelectionRect } = useStore(selector$i, shallow$1);
  const isActive = userSelectionActive && userSelectionRect;
  if (!isActive) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__selection react-flow__container", style: {
    width: userSelectionRect.width,
    height: userSelectionRect.height,
    transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`
  } });
}
__name(UserSelection, "UserSelection");
var wrapHandler = /* @__PURE__ */ __name((handler, containerRef) => {
  return (event) => {
    if (event.target !== containerRef.current) {
      return;
    }
    handler?.(event);
  };
}, "wrapHandler");
var selector$h = /* @__PURE__ */ __name((s) => ({
  userSelectionActive: s.userSelectionActive,
  elementsSelectable: s.elementsSelectable,
  connectionInProgress: s.connection.inProgress,
  dragging: s.paneDragging,
  panBy: s.panBy,
  autoPanSpeed: s.autoPanSpeed
}), "selector$h");
function Pane({ isSelecting, selectionKeyPressed, selectionMode = SelectionMode.Full, panOnDrag, autoPanOnSelection, paneClickDistance, selectionOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children: children2 }) {
  const autoPanId = (0, import_react2.useRef)(0);
  const store = useStoreApi();
  const { userSelectionActive, elementsSelectable, dragging, connectionInProgress, panBy: panBy2, autoPanSpeed } = useStore(selector$h, shallow$1);
  const isSelectionEnabled = elementsSelectable && (isSelecting || userSelectionActive);
  const container = (0, import_react2.useRef)(null);
  const containerBounds = (0, import_react2.useRef)();
  const selectedNodeIds = (0, import_react2.useRef)(/* @__PURE__ */ new Set());
  const selectedEdgeIds = (0, import_react2.useRef)(/* @__PURE__ */ new Set());
  const selectionInProgress = (0, import_react2.useRef)(false);
  const position = (0, import_react2.useRef)({ x: 0, y: 0 });
  const autoPanStarted = (0, import_react2.useRef)(false);
  const onClick = /* @__PURE__ */ __name((event) => {
    if (selectionInProgress.current || connectionInProgress) {
      selectionInProgress.current = false;
      return;
    }
    onPaneClick?.(event);
    store.getState().resetSelectedElements();
    store.setState({ nodesSelectionActive: false });
  }, "onClick");
  const onContextMenu = /* @__PURE__ */ __name((event) => {
    if (Array.isArray(panOnDrag) && panOnDrag?.includes(2)) {
      event.preventDefault();
      return;
    }
    onPaneContextMenu?.(event);
  }, "onContextMenu");
  const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
  const onClickCapture = /* @__PURE__ */ __name((event) => {
    if (selectionInProgress.current) {
      event.stopPropagation();
      selectionInProgress.current = false;
    }
  }, "onClickCapture");
  const onPointerDownCapture = /* @__PURE__ */ __name((event) => {
    const { domNode, transform: transform2 } = store.getState();
    containerBounds.current = domNode?.getBoundingClientRect();
    if (!containerBounds.current)
      return;
    const eventTargetIsContainer = event.target === container.current;
    const isNoKeyEvent = !eventTargetIsContainer && !!event.target.closest(".nokey");
    const isSelectionActive = selectionOnDrag && eventTargetIsContainer || selectionKeyPressed;
    if (isNoKeyEvent || !isSelecting || !isSelectionActive || event.button !== 0 || !event.isPrimary) {
      return;
    }
    event.target?.setPointerCapture?.(event.pointerId);
    selectionInProgress.current = false;
    const { x, y } = getEventPosition(event.nativeEvent, containerBounds.current);
    const userSelectionStartPosition = pointToRendererPoint({ x, y }, transform2);
    store.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: userSelectionStartPosition.x,
        startY: userSelectionStartPosition.y,
        x,
        y
      }
    });
    if (!eventTargetIsContainer) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, "onPointerDownCapture");
  function commitUserSelectionRect(mouseX, mouseY) {
    const { userSelectionRect } = store.getState();
    if (!userSelectionRect) {
      return;
    }
    const { transform: transform2, nodeLookup, edgeLookup, connectionLookup, triggerNodeChanges, triggerEdgeChanges, defaultEdgeOptions } = store.getState();
    const userStartPosition = { x: userSelectionRect.startX, y: userSelectionRect.startY };
    const { x: screenStartX, y: screenStartY } = rendererPointToPoint(userStartPosition, transform2);
    const nextUserSelectRect = {
      startX: userStartPosition.x,
      startY: userStartPosition.y,
      x: mouseX < screenStartX ? mouseX : screenStartX,
      y: mouseY < screenStartY ? mouseY : screenStartY,
      width: Math.abs(mouseX - screenStartX),
      height: Math.abs(mouseY - screenStartY)
    };
    const prevSelectedNodeIds = selectedNodeIds.current;
    const prevSelectedEdgeIds = selectedEdgeIds.current;
    selectedNodeIds.current = new Set(getNodesInside(nodeLookup, nextUserSelectRect, transform2, selectionMode === SelectionMode.Partial, true).map((node) => node.id));
    selectedEdgeIds.current = /* @__PURE__ */ new Set();
    const edgesSelectable = defaultEdgeOptions?.selectable ?? true;
    for (const nodeId of selectedNodeIds.current) {
      const connections = connectionLookup.get(nodeId);
      if (!connections)
        continue;
      for (const { edgeId } of connections.values()) {
        const edge = edgeLookup.get(edgeId);
        if (edge && (edge.selectable ?? edgesSelectable)) {
          selectedEdgeIds.current.add(edgeId);
        }
      }
    }
    if (!areSetsEqual(prevSelectedNodeIds, selectedNodeIds.current)) {
      const changes = getSelectionChanges(nodeLookup, selectedNodeIds.current, true);
      triggerNodeChanges(changes);
    }
    if (!areSetsEqual(prevSelectedEdgeIds, selectedEdgeIds.current)) {
      const changes = getSelectionChanges(edgeLookup, selectedEdgeIds.current);
      triggerEdgeChanges(changes);
    }
    store.setState({
      userSelectionRect: nextUserSelectRect,
      userSelectionActive: true,
      nodesSelectionActive: false
    });
  }
  __name(commitUserSelectionRect, "commitUserSelectionRect");
  function autoPan() {
    if (!autoPanOnSelection || !containerBounds.current) {
      return;
    }
    const [x, y] = calcAutoPan(position.current, containerBounds.current, autoPanSpeed);
    panBy2({ x, y }).then((panned) => {
      if (!selectionInProgress.current || !panned) {
        autoPanId.current = requestAnimationFrame(autoPan);
        return;
      }
      const { x: mx, y: my } = position.current;
      commitUserSelectionRect(mx, my);
      autoPanId.current = requestAnimationFrame(autoPan);
    });
  }
  __name(autoPan, "autoPan");
  const cleanupAutoPan = /* @__PURE__ */ __name(() => {
    cancelAnimationFrame(autoPanId.current);
    autoPanId.current = 0;
    autoPanStarted.current = false;
  }, "cleanupAutoPan");
  (0, import_react2.useEffect)(() => {
    return () => cleanupAutoPan();
  }, []);
  const onPointerMove = /* @__PURE__ */ __name((event) => {
    const { userSelectionRect, transform: transform2, resetSelectedElements } = store.getState();
    if (!containerBounds.current || !userSelectionRect) {
      return;
    }
    const { x: mouseX, y: mouseY } = getEventPosition(event.nativeEvent, containerBounds.current);
    position.current = { x: mouseX, y: mouseY };
    const screenStart = rendererPointToPoint({ x: userSelectionRect.startX, y: userSelectionRect.startY }, transform2);
    if (!selectionInProgress.current) {
      const requiredDistance = selectionKeyPressed ? 0 : paneClickDistance;
      const distance2 = Math.hypot(mouseX - screenStart.x, mouseY - screenStart.y);
      if (distance2 <= requiredDistance) {
        return;
      }
      resetSelectedElements();
      onSelectionStart?.(event);
    }
    selectionInProgress.current = true;
    if (!autoPanStarted.current) {
      autoPan();
      autoPanStarted.current = true;
    }
    commitUserSelectionRect(mouseX, mouseY);
  }, "onPointerMove");
  const onPointerUp = /* @__PURE__ */ __name((event) => {
    if (event.button !== 0) {
      return;
    }
    event.target?.releasePointerCapture?.(event.pointerId);
    if (!userSelectionActive && event.target === container.current && store.getState().userSelectionRect) {
      onClick?.(event);
    }
    store.setState({
      userSelectionActive: false,
      userSelectionRect: null
    });
    if (selectionInProgress.current) {
      onSelectionEnd?.(event);
      store.setState({
        nodesSelectionActive: selectedNodeIds.current.size > 0
      });
    }
    cleanupAutoPan();
  }, "onPointerUp");
  const onPointerCancel = /* @__PURE__ */ __name((event) => {
    event.target?.releasePointerCapture?.(event.pointerId);
    cleanupAutoPan();
  }, "onPointerCancel");
  const draggable = panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(0);
  return (0, import_jsx_runtime.jsxs)("div", { className: cc(["react-flow__pane", { draggable, dragging, selection: isSelecting }]), onClick: isSelectionEnabled ? void 0 : wrapHandler(onClick, container), onContextMenu: wrapHandler(onContextMenu, container), onWheel: wrapHandler(onWheel, container), onPointerEnter: isSelectionEnabled ? void 0 : onPaneMouseEnter, onPointerMove: isSelectionEnabled ? onPointerMove : onPaneMouseMove, onPointerUp: isSelectionEnabled ? onPointerUp : void 0, onPointerCancel: isSelectionEnabled ? onPointerCancel : void 0, onPointerDownCapture: isSelectionEnabled ? onPointerDownCapture : void 0, onClickCapture: isSelectionEnabled ? onClickCapture : void 0, onPointerLeave: onPaneMouseLeave, ref: container, style: containerStyle, children: [children2, (0, import_jsx_runtime.jsx)(UserSelection, {})] });
}
__name(Pane, "Pane");
function handleNodeClick({ id: id2, store, unselect = false, nodeRef }) {
  const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeLookup, onError } = store.getState();
  const node = nodeLookup.get(id2);
  if (!node) {
    onError?.("012", errorMessages["error012"](id2));
    return;
  }
  store.setState({ nodesSelectionActive: false });
  if (!node.selected) {
    addSelectedNodes([id2]);
  } else if (unselect || node.selected && multiSelectionActive) {
    unselectNodesAndEdges({ nodes: [node], edges: [] });
    requestAnimationFrame(() => nodeRef?.current?.blur());
  }
}
__name(handleNodeClick, "handleNodeClick");
function useDrag({ nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, nodeClickDistance }) {
  const store = useStoreApi();
  const [dragging, setDragging] = (0, import_react2.useState)(false);
  const xyDrag = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    xyDrag.current = XYDrag({
      getStoreItems: /* @__PURE__ */ __name(() => store.getState(), "getStoreItems"),
      onNodeMouseDown: /* @__PURE__ */ __name((id2) => {
        handleNodeClick({
          id: id2,
          store,
          nodeRef
        });
      }, "onNodeMouseDown"),
      onDragStart: /* @__PURE__ */ __name(() => {
        setDragging(true);
      }, "onDragStart"),
      onDragStop: /* @__PURE__ */ __name(() => {
        setDragging(false);
      }, "onDragStop")
    });
  }, []);
  (0, import_react2.useEffect)(() => {
    if (disabled || !nodeRef.current || !xyDrag.current) {
      return;
    }
    xyDrag.current.update({
      noDragClassName,
      handleSelector,
      domNode: nodeRef.current,
      isSelectable,
      nodeId,
      nodeClickDistance
    });
    return () => {
      xyDrag.current?.destroy();
    };
  }, [noDragClassName, handleSelector, disabled, isSelectable, nodeRef, nodeId, nodeClickDistance]);
  return dragging;
}
__name(useDrag, "useDrag");
var selectedAndDraggable = /* @__PURE__ */ __name((nodesDraggable) => (n) => n.selected && (n.draggable || nodesDraggable && typeof n.draggable === "undefined"), "selectedAndDraggable");
function useMoveSelectedNodes() {
  const store = useStoreApi();
  const moveSelectedNodes = (0, import_react2.useCallback)((params) => {
    const { nodeExtent, snapToGrid, snapGrid, nodesDraggable, onError, updateNodePositions, nodeLookup, nodeOrigin } = store.getState();
    const nodeUpdates = /* @__PURE__ */ new Map();
    const isSelected = selectedAndDraggable(nodesDraggable);
    const xVelo = snapToGrid ? snapGrid[0] : 5;
    const yVelo = snapToGrid ? snapGrid[1] : 5;
    const xDiff = params.direction.x * xVelo * params.factor;
    const yDiff = params.direction.y * yVelo * params.factor;
    for (const [, node] of nodeLookup) {
      if (!isSelected(node)) {
        continue;
      }
      let nextPosition = {
        x: node.internals.positionAbsolute.x + xDiff,
        y: node.internals.positionAbsolute.y + yDiff
      };
      if (snapToGrid) {
        nextPosition = snapPosition(nextPosition, snapGrid);
      }
      const { position, positionAbsolute } = calculateNodePosition({
        nodeId: node.id,
        nextPosition,
        nodeLookup,
        nodeExtent,
        nodeOrigin,
        onError
      });
      node.position = position;
      node.internals.positionAbsolute = positionAbsolute;
      nodeUpdates.set(node.id, node);
    }
    updateNodePositions(nodeUpdates);
  }, []);
  return moveSelectedNodes;
}
__name(useMoveSelectedNodes, "useMoveSelectedNodes");
var NodeIdContext = (0, import_react2.createContext)(null);
var Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;
var useNodeId = /* @__PURE__ */ __name(() => {
  const nodeId = (0, import_react2.useContext)(NodeIdContext);
  return nodeId;
}, "useNodeId");
var selector$g = /* @__PURE__ */ __name((s) => ({
  connectOnClick: s.connectOnClick,
  noPanClassName: s.noPanClassName,
  rfId: s.rfId
}), "selector$g");
var connectingSelector = /* @__PURE__ */ __name((nodeId, handleId, type) => (state) => {
  const { connectionClickStartHandle: clickHandle, connectionMode, connection } = state;
  const { fromHandle, toHandle, isValid } = connection;
  const connectingTo = toHandle?.nodeId === nodeId && toHandle?.id === handleId && toHandle?.type === type;
  return {
    connectingFrom: fromHandle?.nodeId === nodeId && fromHandle?.id === handleId && fromHandle?.type === type,
    connectingTo,
    clickConnecting: clickHandle?.nodeId === nodeId && clickHandle?.id === handleId && clickHandle?.type === type,
    isPossibleEndHandle: connectionMode === ConnectionMode.Strict ? fromHandle?.type !== type : nodeId !== fromHandle?.nodeId || handleId !== fromHandle?.id,
    connectionInProcess: !!fromHandle,
    clickConnectionInProcess: !!clickHandle,
    valid: connectingTo && isValid
  };
}, "connectingSelector");
function HandleComponent({ type = "source", position = Position.Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id: id2, onConnect, children: children2, className, onMouseDown, onTouchStart, ...rest }, ref) {
  const handleId = id2 || null;
  const isTarget = type === "target";
  const store = useStoreApi();
  const nodeId = useNodeId();
  const { connectOnClick, noPanClassName, rfId } = useStore(selector$g, shallow$1);
  const { connectingFrom, connectingTo, clickConnecting, isPossibleEndHandle, connectionInProcess, clickConnectionInProcess, valid } = useStore(connectingSelector(nodeId, handleId, type), shallow$1);
  if (!nodeId) {
    store.getState().onError?.("010", errorMessages["error010"]());
  }
  const onConnectExtended = /* @__PURE__ */ __name((params) => {
    const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
    const edgeParams = {
      ...defaultEdgeOptions,
      ...params
    };
    if (hasDefaultEdges) {
      const { edges, setEdges, onError } = store.getState();
      setEdges(addEdge2(edgeParams, edges, { onError }));
    }
    onConnectAction?.(edgeParams);
    onConnect?.(edgeParams);
  }, "onConnectExtended");
  const onPointerDown2 = /* @__PURE__ */ __name((event) => {
    if (!nodeId) {
      return;
    }
    const isMouseTriggered = isMouseEvent(event.nativeEvent);
    if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
      const currentStore = store.getState();
      XYHandle.onPointerDown(event.nativeEvent, {
        handleDomNode: event.currentTarget,
        autoPanOnConnect: currentStore.autoPanOnConnect,
        connectionMode: currentStore.connectionMode,
        connectionRadius: currentStore.connectionRadius,
        domNode: currentStore.domNode,
        nodeLookup: currentStore.nodeLookup,
        lib: currentStore.lib,
        isTarget,
        handleId,
        nodeId,
        flowId: currentStore.rfId,
        panBy: currentStore.panBy,
        cancelConnection: currentStore.cancelConnection,
        onConnectStart: currentStore.onConnectStart,
        onConnectEnd: /* @__PURE__ */ __name((...args) => store.getState().onConnectEnd?.(...args), "onConnectEnd"),
        updateConnection: currentStore.updateConnection,
        onConnect: onConnectExtended,
        isValidConnection: isValidConnection || ((...args) => store.getState().isValidConnection?.(...args) ?? true),
        getTransform: /* @__PURE__ */ __name(() => store.getState().transform, "getTransform"),
        getFromHandle: /* @__PURE__ */ __name(() => store.getState().connection.fromHandle, "getFromHandle"),
        autoPanSpeed: currentStore.autoPanSpeed,
        dragThreshold: currentStore.connectionDragThreshold
      });
    }
    if (isMouseTriggered) {
      onMouseDown?.(event);
    } else {
      onTouchStart?.(event);
    }
  }, "onPointerDown");
  const onClick = /* @__PURE__ */ __name((event) => {
    const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore, lib, rfId: flowId, nodeLookup, connection: connectionState } = store.getState();
    if (!nodeId || !connectionClickStartHandle && !isConnectableStart) {
      return;
    }
    if (!connectionClickStartHandle) {
      onClickConnectStart?.(event.nativeEvent, { nodeId, handleId, handleType: type });
      store.setState({ connectionClickStartHandle: { nodeId, type, id: handleId } });
      return;
    }
    const doc = getHostForElement(event.target);
    const isValidConnectionHandler = isValidConnection || isValidConnectionStore;
    const { connection, isValid } = XYHandle.isValid(event.nativeEvent, {
      handle: {
        nodeId,
        id: handleId,
        type
      },
      connectionMode,
      fromNodeId: connectionClickStartHandle.nodeId,
      fromHandleId: connectionClickStartHandle.id || null,
      fromType: connectionClickStartHandle.type,
      isValidConnection: isValidConnectionHandler,
      flowId,
      doc,
      lib,
      nodeLookup
    });
    if (isValid && connection) {
      onConnectExtended(connection);
    }
    const connectionClone = structuredClone(connectionState);
    delete connectionClone.inProgress;
    connectionClone.toPosition = connectionClone.toHandle ? connectionClone.toHandle.position : null;
    onClickConnectEnd?.(event, connectionClone);
    store.setState({ connectionClickStartHandle: null });
  }, "onClick");
  return (0, import_jsx_runtime.jsx)("div", { "data-handleid": handleId, "data-nodeid": nodeId, "data-handlepos": position, "data-id": `${rfId}-${nodeId}-${handleId}-${type}`, className: cc([
    "react-flow__handle",
    `react-flow__handle-${position}`,
    "nodrag",
    noPanClassName,
    className,
    {
      source: !isTarget,
      target: isTarget,
      connectable: isConnectable,
      connectablestart: isConnectableStart,
      connectableend: isConnectableEnd,
      clickconnecting: clickConnecting,
      connectingfrom: connectingFrom,
      connectingto: connectingTo,
      valid,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: isConnectable && (!connectionInProcess || isPossibleEndHandle) && (connectionInProcess || clickConnectionInProcess ? isConnectableEnd : isConnectableStart)
    }
  ]), onMouseDown: onPointerDown2, onTouchStart: onPointerDown2, onClick: connectOnClick ? onClick : void 0, ref, ...rest, children: children2 });
}
__name(HandleComponent, "HandleComponent");
var Handle = (0, import_react2.memo)(fixedForwardRef(HandleComponent));
function InputNode({ data, isConnectable, sourcePosition = Position.Bottom }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [data?.label, (0, import_jsx_runtime.jsx)(Handle, { type: "source", position: sourcePosition, isConnectable })] });
}
__name(InputNode, "InputNode");
function DefaultNode({ data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Handle, { type: "target", position: targetPosition, isConnectable }), data?.label, (0, import_jsx_runtime.jsx)(Handle, { type: "source", position: sourcePosition, isConnectable })] });
}
__name(DefaultNode, "DefaultNode");
function GroupNode() {
  return null;
}
__name(GroupNode, "GroupNode");
function OutputNode({ data, isConnectable, targetPosition = Position.Top }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Handle, { type: "target", position: targetPosition, isConnectable }), data?.label] });
}
__name(OutputNode, "OutputNode");
var arrowKeyDiffs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var builtinNodeTypes = {
  input: InputNode,
  default: DefaultNode,
  output: OutputNode,
  group: GroupNode
};
function getNodeInlineStyleDimensions(node) {
  if (node.internals.handleBounds === void 0) {
    return {
      width: node.width ?? node.initialWidth ?? node.style?.width,
      height: node.height ?? node.initialHeight ?? node.style?.height
    };
  }
  return {
    width: node.width ?? node.style?.width,
    height: node.height ?? node.style?.height
  };
}
__name(getNodeInlineStyleDimensions, "getNodeInlineStyleDimensions");
var selector$f = /* @__PURE__ */ __name((s) => {
  const { width, height, x, y } = getInternalNodesBounds(s.nodeLookup, {
    filter: /* @__PURE__ */ __name((node) => !!node.selected, "filter")
  });
  return {
    width: isNumeric(width) ? width : null,
    height: isNumeric(height) ? height : null,
    userSelectionActive: s.userSelectionActive,
    transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]}) translate(${x}px,${y}px)`
  };
}, "selector$f");
function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
  const store = useStoreApi();
  const { width, height, transformString, userSelectionActive } = useStore(selector$f, shallow$1);
  const moveSelectedNodes = useMoveSelectedNodes();
  const nodeRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!disableKeyboardA11y) {
      nodeRef.current?.focus({
        preventScroll: true
      });
    }
  }, [disableKeyboardA11y]);
  const shouldRender = !userSelectionActive && width !== null && height !== null;
  useDrag({
    nodeRef,
    disabled: !shouldRender
  });
  if (!shouldRender) {
    return null;
  }
  const onContextMenu = onSelectionContextMenu ? (event) => {
    const selectedNodes = store.getState().nodes.filter((n) => n.selected);
    onSelectionContextMenu(event, selectedNodes);
  } : void 0;
  const onKeyDown = /* @__PURE__ */ __name((event) => {
    if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
      event.preventDefault();
      moveSelectedNodes({
        direction: arrowKeyDiffs[event.key],
        factor: event.shiftKey ? 4 : 1
      });
    }
  }, "onKeyDown");
  return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__nodesselection", "react-flow__container", noPanClassName]), style: {
    transform: transformString
  }, children: (0, import_jsx_runtime.jsx)("div", { ref: nodeRef, className: "react-flow__nodesselection-rect", onContextMenu, tabIndex: disableKeyboardA11y ? void 0 : -1, onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown, style: {
    width,
    height
  } }) });
}
__name(NodesSelection, "NodesSelection");
var win = typeof window !== "undefined" ? window : void 0;
var selector$e = /* @__PURE__ */ __name((s) => {
  return { nodesSelectionActive: s.nodesSelectionActive, userSelectionActive: s.userSelectionActive };
}, "selector$e");
function FlowRendererComponent({ children: children2, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, autoPanOnSelection, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport }) {
  const { nodesSelectionActive, userSelectionActive } = useStore(selector$e, shallow$1);
  const selectionKeyPressed = useKeyPress(selectionKeyCode, { target: win });
  const panActivationKeyPressed = useKeyPress(panActivationKeyCode, { target: win });
  const panOnDrag = panActivationKeyPressed || _panOnDrag;
  const panOnScroll = panActivationKeyPressed || _panOnScroll;
  const _selectionOnDrag = selectionOnDrag && panOnDrag !== true;
  const isSelecting = selectionKeyPressed || userSelectionActive || _selectionOnDrag;
  useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
  return (0, import_jsx_runtime.jsx)(ZoomPane, { onPaneContextMenu, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: !selectionKeyPressed && panOnDrag, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance, selectionOnDrag: _selectionOnDrag, children: (0, import_jsx_runtime.jsxs)(Pane, { onSelectionStart, onSelectionEnd, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, panOnDrag, autoPanOnSelection, isSelecting: !!isSelecting, selectionMode, selectionKeyPressed, paneClickDistance, selectionOnDrag: _selectionOnDrag, children: [children2, nodesSelectionActive && (0, import_jsx_runtime.jsx)(NodesSelection, { onSelectionContextMenu, noPanClassName, disableKeyboardA11y })] }) });
}
__name(FlowRendererComponent, "FlowRendererComponent");
FlowRendererComponent.displayName = "FlowRenderer";
var FlowRenderer = (0, import_react2.memo)(FlowRendererComponent);
var selector$d = /* @__PURE__ */ __name((onlyRenderVisible) => (s) => {
  return onlyRenderVisible ? getNodesInside(s.nodeLookup, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true).map((node) => node.id) : Array.from(s.nodeLookup.keys());
}, "selector$d");
function useVisibleNodeIds(onlyRenderVisible) {
  const nodeIds = useStore((0, import_react2.useCallback)(selector$d(onlyRenderVisible), [onlyRenderVisible]), shallow$1);
  return nodeIds;
}
__name(useVisibleNodeIds, "useVisibleNodeIds");
var selector$c = /* @__PURE__ */ __name((s) => s.updateNodeInternals, "selector$c");
function useResizeObserver() {
  const updateNodeInternals2 = useStore(selector$c);
  const [resizeObserver] = (0, import_react2.useState)(() => {
    if (typeof ResizeObserver === "undefined") {
      return null;
    }
    return new ResizeObserver((entries) => {
      const updates = /* @__PURE__ */ new Map();
      entries.forEach((entry) => {
        const id2 = entry.target.getAttribute("data-id");
        updates.set(id2, {
          id: id2,
          nodeElement: entry.target,
          force: true
        });
      });
      updateNodeInternals2(updates);
    });
  });
  (0, import_react2.useEffect)(() => {
    return () => {
      resizeObserver?.disconnect();
    };
  }, [resizeObserver]);
  return resizeObserver;
}
__name(useResizeObserver, "useResizeObserver");
function useNodeObserver({ node, nodeType, hasDimensions, resizeObserver }) {
  const store = useStoreApi();
  const nodeRef = (0, import_react2.useRef)(null);
  const observedNode = (0, import_react2.useRef)(null);
  const prevSourcePosition = (0, import_react2.useRef)(node.sourcePosition);
  const prevTargetPosition = (0, import_react2.useRef)(node.targetPosition);
  const prevType = (0, import_react2.useRef)(nodeType);
  const isInitialized = hasDimensions && !!node.internals.handleBounds;
  (0, import_react2.useEffect)(() => {
    if (nodeRef.current && !node.hidden && (!isInitialized || observedNode.current !== nodeRef.current)) {
      if (observedNode.current) {
        resizeObserver?.unobserve(observedNode.current);
      }
      resizeObserver?.observe(nodeRef.current);
      observedNode.current = nodeRef.current;
    }
  }, [isInitialized, node.hidden]);
  (0, import_react2.useEffect)(() => {
    return () => {
      if (observedNode.current) {
        resizeObserver?.unobserve(observedNode.current);
        observedNode.current = null;
      }
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (nodeRef.current) {
      const typeChanged = prevType.current !== nodeType;
      const sourcePosChanged = prevSourcePosition.current !== node.sourcePosition;
      const targetPosChanged = prevTargetPosition.current !== node.targetPosition;
      if (typeChanged || sourcePosChanged || targetPosChanged) {
        prevType.current = nodeType;
        prevSourcePosition.current = node.sourcePosition;
        prevTargetPosition.current = node.targetPosition;
        store.getState().updateNodeInternals(/* @__PURE__ */ new Map([[node.id, { id: node.id, nodeElement: nodeRef.current, force: true }]]));
      }
    }
  }, [node.id, nodeType, node.sourcePosition, node.targetPosition]);
  return nodeRef;
}
__name(useNodeObserver, "useNodeObserver");
function NodeWrapper({ id: id2, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, nodesDraggable, elementsSelectable, nodesConnectable, nodesFocusable, resizeObserver, noDragClassName, noPanClassName, disableKeyboardA11y, rfId, nodeTypes, nodeClickDistance, onError }) {
  const { node, internals, isParent } = useStore((s) => {
    const node2 = s.nodeLookup.get(id2);
    const isParent2 = s.parentLookup.has(id2);
    return {
      node: node2,
      internals: node2.internals,
      isParent: isParent2
    };
  }, shallow$1);
  let nodeType = node.type || "default";
  let NodeComponent = nodeTypes?.[nodeType] || builtinNodeTypes[nodeType];
  if (NodeComponent === void 0) {
    onError?.("003", errorMessages["error003"](nodeType));
    nodeType = "default";
    NodeComponent = nodeTypes?.["default"] || builtinNodeTypes.default;
  }
  const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === "undefined");
  const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === "undefined");
  const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === "undefined");
  const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === "undefined");
  const store = useStoreApi();
  const hasDimensions = nodeHasDimensions(node);
  const nodeRef = useNodeObserver({ node, nodeType, hasDimensions, resizeObserver });
  const dragging = useDrag({
    nodeRef,
    disabled: node.hidden || !isDraggable,
    noDragClassName,
    handleSelector: node.dragHandle,
    nodeId: id2,
    isSelectable,
    nodeClickDistance
  });
  const moveSelectedNodes = useMoveSelectedNodes();
  if (node.hidden) {
    return null;
  }
  const nodeDimensions = getNodeDimensions(node);
  const inlineDimensions = getNodeInlineStyleDimensions(node);
  const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
  const onMouseEnterHandler = onMouseEnter ? (event) => onMouseEnter(event, { ...internals.userNode }) : void 0;
  const onMouseMoveHandler = onMouseMove ? (event) => onMouseMove(event, { ...internals.userNode }) : void 0;
  const onMouseLeaveHandler = onMouseLeave ? (event) => onMouseLeave(event, { ...internals.userNode }) : void 0;
  const onContextMenuHandler = onContextMenu ? (event) => onContextMenu(event, { ...internals.userNode }) : void 0;
  const onDoubleClickHandler = onDoubleClick ? (event) => onDoubleClick(event, { ...internals.userNode }) : void 0;
  const onSelectNodeHandler = /* @__PURE__ */ __name((event) => {
    const { selectNodesOnDrag, nodeDragThreshold } = store.getState();
    if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
      handleNodeClick({
        id: id2,
        store,
        nodeRef
      });
    }
    if (onClick) {
      onClick(event, { ...internals.userNode });
    }
  }, "onSelectNodeHandler");
  const onKeyDown = /* @__PURE__ */ __name((event) => {
    if (isInputDOMNode(event.nativeEvent) || disableKeyboardA11y) {
      return;
    }
    if (elementSelectionKeys.includes(event.key) && isSelectable) {
      const unselect = event.key === "Escape";
      handleNodeClick({
        id: id2,
        store,
        unselect,
        nodeRef
      });
    } else if (isDraggable && node.selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
      event.preventDefault();
      const { ariaLabelConfig } = store.getState();
      store.setState({
        ariaLiveMessage: ariaLabelConfig["node.a11yDescription.ariaLiveMessage"]({
          direction: event.key.replace("Arrow", "").toLowerCase(),
          x: ~~internals.positionAbsolute.x,
          y: ~~internals.positionAbsolute.y
        })
      });
      moveSelectedNodes({
        direction: arrowKeyDiffs[event.key],
        factor: event.shiftKey ? 4 : 1
      });
    }
  }, "onKeyDown");
  const onFocus = /* @__PURE__ */ __name(() => {
    if (disableKeyboardA11y || !nodeRef.current?.matches(":focus-visible")) {
      return;
    }
    const { transform: transform2, width, height, autoPanOnNodeFocus, setCenter } = store.getState();
    if (!autoPanOnNodeFocus) {
      return;
    }
    const withinViewport = getNodesInside(/* @__PURE__ */ new Map([[id2, node]]), { x: 0, y: 0, width, height }, transform2, true).length > 0;
    if (!withinViewport) {
      setCenter(node.position.x + nodeDimensions.width / 2, node.position.y + nodeDimensions.height / 2, {
        zoom: transform2[2]
      });
    }
  }, "onFocus");
  return (0, import_jsx_runtime.jsx)("div", { className: cc([
    "react-flow__node",
    `react-flow__node-${nodeType}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [noPanClassName]: isDraggable
    },
    node.className,
    {
      selected: node.selected,
      selectable: isSelectable,
      parent: isParent,
      draggable: isDraggable,
      dragging
    }
  ]), ref: nodeRef, style: {
    zIndex: internals.z,
    transform: `translate(${internals.positionAbsolute.x}px,${internals.positionAbsolute.y}px)`,
    pointerEvents: hasPointerEvents ? "all" : "none",
    visibility: hasDimensions ? "visible" : "hidden",
    ...node.style,
    ...inlineDimensions
  }, "data-id": id2, "data-testid": `rf__node-${id2}`, onMouseEnter: onMouseEnterHandler, onMouseMove: onMouseMoveHandler, onMouseLeave: onMouseLeaveHandler, onContextMenu: onContextMenuHandler, onClick: onSelectNodeHandler, onDoubleClick: onDoubleClickHandler, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, onFocus: isFocusable ? onFocus : void 0, role: node.ariaRole ?? (isFocusable ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`, "aria-label": node.ariaLabel, ...node.domAttributes, children: (0, import_jsx_runtime.jsx)(Provider, { value: id2, children: (0, import_jsx_runtime.jsx)(NodeComponent, { id: id2, data: node.data, type: nodeType, positionAbsoluteX: internals.positionAbsolute.x, positionAbsoluteY: internals.positionAbsolute.y, selected: node.selected ?? false, selectable: isSelectable, draggable: isDraggable, deletable: node.deletable ?? true, isConnectable, sourcePosition: node.sourcePosition, targetPosition: node.targetPosition, dragging, dragHandle: node.dragHandle, zIndex: internals.z, parentId: node.parentId, ...nodeDimensions }) }) });
}
__name(NodeWrapper, "NodeWrapper");
var NodeWrapper$1 = (0, import_react2.memo)(NodeWrapper);
var selector$b = /* @__PURE__ */ __name((s) => ({
  nodesDraggable: s.nodesDraggable,
  nodesConnectable: s.nodesConnectable,
  nodesFocusable: s.nodesFocusable,
  elementsSelectable: s.elementsSelectable,
  onError: s.onError
}), "selector$b");
function NodeRendererComponent(props) {
  const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, onError } = useStore(selector$b, shallow$1);
  const nodeIds = useVisibleNodeIds(props.onlyRenderVisibleElements);
  const resizeObserver = useResizeObserver();
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__nodes", style: containerStyle, children: nodeIds.map((nodeId) => {
    return (
      /*
       * The split of responsibilities between NodeRenderer and
       * NodeComponentWrapper may appear weird. However, it’s designed to
       * minimize the cost of updates when individual nodes change.
       *
       * For example, when you’re dragging a single node, that node gets
       * updated multiple times per second. If `NodeRenderer` were to update
       * every time, it would have to re-run the `nodes.map()` loop every
       * time. This gets pricey with hundreds of nodes, especially if every
       * loop cycle does more than just rendering a JSX element!
       *
       * As a result of this choice, we took the following implementation
       * decisions:
       * - NodeRenderer subscribes *only* to node IDs – and therefore
       *   rerender *only* when visible nodes are added or removed.
       * - NodeRenderer performs all operations the result of which can be
       *   shared between nodes (such as creating the `ResizeObserver`
       *   instance, or subscribing to `selector`). This means extra prop
       *   drilling into `NodeComponentWrapper`, but it means we need to run
       *   these operations only once – instead of once per node.
       * - Any operations that you’d normally write inside `nodes.map` are
       *   moved into `NodeComponentWrapper`. This ensures they are
       *   memorized – so if `NodeRenderer` *has* to rerender, it only
       *   needs to regenerate the list of nodes, nothing else.
       */
      (0, import_jsx_runtime.jsx)(NodeWrapper$1, { id: nodeId, nodeTypes: props.nodeTypes, nodeExtent: props.nodeExtent, onClick: props.onNodeClick, onMouseEnter: props.onNodeMouseEnter, onMouseMove: props.onNodeMouseMove, onMouseLeave: props.onNodeMouseLeave, onContextMenu: props.onNodeContextMenu, onDoubleClick: props.onNodeDoubleClick, noDragClassName: props.noDragClassName, noPanClassName: props.noPanClassName, rfId: props.rfId, disableKeyboardA11y: props.disableKeyboardA11y, resizeObserver, nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, nodeClickDistance: props.nodeClickDistance, onError }, nodeId)
    );
  }) });
}
__name(NodeRendererComponent, "NodeRendererComponent");
NodeRendererComponent.displayName = "NodeRenderer";
var NodeRenderer = (0, import_react2.memo)(NodeRendererComponent);
function useVisibleEdgeIds(onlyRenderVisible) {
  const edgeIds = useStore((0, import_react2.useCallback)((s) => {
    if (!onlyRenderVisible) {
      return s.edges.map((edge) => edge.id);
    }
    const visibleEdgeIds = [];
    if (s.width && s.height) {
      for (const edge of s.edges) {
        const sourceNode = s.nodeLookup.get(edge.source);
        const targetNode = s.nodeLookup.get(edge.target);
        if (sourceNode && targetNode && isEdgeVisible({
          sourceNode,
          targetNode,
          width: s.width,
          height: s.height,
          transform: s.transform
        })) {
          visibleEdgeIds.push(edge.id);
        }
      }
    }
    return visibleEdgeIds;
  }, [onlyRenderVisible]), shallow$1);
  return edgeIds;
}
__name(useVisibleEdgeIds, "useVisibleEdgeIds");
var ArrowSymbol = /* @__PURE__ */ __name(({ color: color2 = "none", strokeWidth = 1 }) => {
  const style2 = {
    strokeWidth,
    ...color2 && { stroke: color2 }
  };
  return (0, import_jsx_runtime.jsx)("polyline", { className: "arrow", style: style2, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, "ArrowSymbol");
var ArrowClosedSymbol = /* @__PURE__ */ __name(({ color: color2 = "none", strokeWidth = 1 }) => {
  const style2 = {
    strokeWidth,
    ...color2 && { stroke: color2, fill: color2 }
  };
  return (0, import_jsx_runtime.jsx)("polyline", { className: "arrowclosed", style: style2, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, "ArrowClosedSymbol");
var MarkerSymbols = {
  [MarkerType.Arrow]: ArrowSymbol,
  [MarkerType.ArrowClosed]: ArrowClosedSymbol
};
function useMarkerSymbol(type) {
  const store = useStoreApi();
  const symbol = (0, import_react2.useMemo)(() => {
    const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
    if (!symbolExists) {
      store.getState().onError?.("009", errorMessages["error009"](type));
      return null;
    }
    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}
__name(useMarkerSymbol, "useMarkerSymbol");
var Marker = /* @__PURE__ */ __name(({ id: id2, type, color: color2, width = 12.5, height = 12.5, markerUnits = "strokeWidth", strokeWidth, orient = "auto-start-reverse" }) => {
  const Symbol2 = useMarkerSymbol(type);
  if (!Symbol2) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("marker", { className: "react-flow__arrowhead", id: id2, markerWidth: `${width}`, markerHeight: `${height}`, viewBox: "-10 -10 20 20", markerUnits, orient, refX: "0", refY: "0", children: (0, import_jsx_runtime.jsx)(Symbol2, { color: color2, strokeWidth }) });
}, "Marker");
var MarkerDefinitions = /* @__PURE__ */ __name(({ defaultColor, rfId }) => {
  const edges = useStore((s) => s.edges);
  const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
  const markers = (0, import_react2.useMemo)(() => {
    const markers2 = createMarkerIds(edges, {
      id: rfId,
      defaultColor,
      defaultMarkerStart: defaultEdgeOptions?.markerStart,
      defaultMarkerEnd: defaultEdgeOptions?.markerEnd
    });
    return markers2;
  }, [edges, defaultEdgeOptions, rfId, defaultColor]);
  if (!markers.length) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("svg", { className: "react-flow__marker", "aria-hidden": "true", children: (0, import_jsx_runtime.jsx)("defs", { children: markers.map((marker) => (0, import_jsx_runtime.jsx)(Marker, { id: marker.id, type: marker.type, color: marker.color, width: marker.width, height: marker.height, markerUnits: marker.markerUnits, strokeWidth: marker.strokeWidth, orient: marker.orient }, marker.id)) }) });
}, "MarkerDefinitions");
MarkerDefinitions.displayName = "MarkerDefinitions";
var MarkerDefinitions$1 = (0, import_react2.memo)(MarkerDefinitions);
function EdgeTextComponent({ x, y, label, labelStyle, labelShowBg = true, labelBgStyle, labelBgPadding = [2, 4], labelBgBorderRadius = 2, children: children2, className, ...rest }) {
  const [edgeTextBbox, setEdgeTextBbox] = (0, import_react2.useState)({ x: 1, y: 0, width: 0, height: 0 });
  const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
  const edgeTextRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (edgeTextRef.current) {
      const textBbox = edgeTextRef.current.getBBox();
      setEdgeTextBbox({
        x: textBbox.x,
        y: textBbox.y,
        width: textBbox.width,
        height: textBbox.height
      });
    }
  }, [label]);
  if (!label) {
    return null;
  }
  return (0, import_jsx_runtime.jsxs)("g", { transform: `translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`, className: edgeTextClasses, visibility: edgeTextBbox.width ? "visible" : "hidden", ...rest, children: [labelShowBg && (0, import_jsx_runtime.jsx)("rect", { width: edgeTextBbox.width + 2 * labelBgPadding[0], x: -labelBgPadding[0], y: -labelBgPadding[1], height: edgeTextBbox.height + 2 * labelBgPadding[1], className: "react-flow__edge-textbg", style: labelBgStyle, rx: labelBgBorderRadius, ry: labelBgBorderRadius }), (0, import_jsx_runtime.jsx)("text", { className: "react-flow__edge-text", y: edgeTextBbox.height / 2, dy: "0.3em", ref: edgeTextRef, style: labelStyle, children: label }), children2] });
}
__name(EdgeTextComponent, "EdgeTextComponent");
EdgeTextComponent.displayName = "EdgeText";
var EdgeText = (0, import_react2.memo)(EdgeTextComponent);
function BaseEdge({ path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, interactionWidth = 20, ...props }) {
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("path", { ...props, d: path, fill: "none", className: cc(["react-flow__edge-path", props.className]) }), interactionWidth ? (0, import_jsx_runtime.jsx)("path", { d: path, fill: "none", strokeOpacity: 0, strokeWidth: interactionWidth, className: "react-flow__edge-interaction" }) : null, label && isNumeric(labelX) && isNumeric(labelY) ? (0, import_jsx_runtime.jsx)(EdgeText, { x: labelX, y: labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius }) : null] });
}
__name(BaseEdge, "BaseEdge");
function getControl({ pos, x1, y1, x2, y2 }) {
  if (pos === Position.Left || pos === Position.Right) {
    return [0.5 * (x1 + x2), y1];
  }
  return [x1, 0.5 * (y1 + y2)];
}
__name(getControl, "getControl");
function getSimpleBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top }) {
  const [sourceControlX, sourceControlY] = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  });
  const [targetControlX, targetControlY] = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
__name(getSimpleBezierPath, "getSimpleBezierPath");
function createSimpleBezierEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
    const [path, labelX, labelY] = getSimpleBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition
    });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
__name(createSimpleBezierEdge, "createSimpleBezierEdge");
var SimpleBezierEdge = createSimpleBezierEdge({ isInternal: false });
var SimpleBezierEdgeInternal = createSimpleBezierEdge({ isInternal: true });
SimpleBezierEdge.displayName = "SimpleBezierEdge";
SimpleBezierEdgeInternal.displayName = "SimpleBezierEdgeInternal";
function createSmoothStepEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, sourcePosition = Position.Bottom, targetPosition = Position.Top, markerEnd, markerStart, pathOptions, interactionWidth }) => {
    const [path, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: pathOptions?.borderRadius,
      offset: pathOptions?.offset,
      stepPosition: pathOptions?.stepPosition
    });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
__name(createSmoothStepEdge, "createSmoothStepEdge");
var SmoothStepEdge = createSmoothStepEdge({ isInternal: false });
var SmoothStepEdgeInternal = createSmoothStepEdge({ isInternal: true });
SmoothStepEdge.displayName = "SmoothStepEdge";
SmoothStepEdgeInternal.displayName = "SmoothStepEdgeInternal";
function createStepEdge(params) {
  return (0, import_react2.memo)(({ id: id2, ...props }) => {
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(SmoothStepEdge, { ...props, id: _id, pathOptions: (0, import_react2.useMemo)(() => ({ borderRadius: 0, offset: props.pathOptions?.offset }), [props.pathOptions?.offset]) });
  });
}
__name(createStepEdge, "createStepEdge");
var StepEdge = createStepEdge({ isInternal: false });
var StepEdgeInternal = createStepEdge({ isInternal: true });
StepEdge.displayName = "StepEdge";
StepEdgeInternal.displayName = "StepEdgeInternal";
function createStraightEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
    const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
__name(createStraightEdge, "createStraightEdge");
var StraightEdge = createStraightEdge({ isInternal: false });
var StraightEdgeInternal = createStraightEdge({ isInternal: true });
StraightEdge.displayName = "StraightEdge";
StraightEdgeInternal.displayName = "StraightEdgeInternal";
function createBezierEdge(params) {
  return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, pathOptions, interactionWidth }) => {
    const [path, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      curvature: pathOptions?.curvature
    });
    const _id = params.isInternal ? void 0 : id2;
    return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
  });
}
__name(createBezierEdge, "createBezierEdge");
var BezierEdge = createBezierEdge({ isInternal: false });
var BezierEdgeInternal = createBezierEdge({ isInternal: true });
BezierEdge.displayName = "BezierEdge";
BezierEdgeInternal.displayName = "BezierEdgeInternal";
var builtinEdgeTypes = {
  default: BezierEdgeInternal,
  straight: StraightEdgeInternal,
  step: StepEdgeInternal,
  smoothstep: SmoothStepEdgeInternal,
  simplebezier: SimpleBezierEdgeInternal
};
var nullPosition = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
};
var shiftX = /* @__PURE__ */ __name((x, shift, position) => {
  if (position === Position.Left)
    return x - shift;
  if (position === Position.Right)
    return x + shift;
  return x;
}, "shiftX");
var shiftY = /* @__PURE__ */ __name((y, shift, position) => {
  if (position === Position.Top)
    return y - shift;
  if (position === Position.Bottom)
    return y + shift;
  return y;
}, "shiftY");
var EdgeUpdaterClassName = "react-flow__edgeupdater";
function EdgeAnchor({ position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type }) {
  return (0, import_jsx_runtime.jsx)("circle", { onMouseDown, onMouseEnter, onMouseOut, className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]), cx: shiftX(centerX, radius, position), cy: shiftY(centerY, radius, position), r: radius, stroke: "transparent", fill: "transparent" });
}
__name(EdgeAnchor, "EdgeAnchor");
function EdgeUpdateAnchors({ isReconnectable, reconnectRadius, edge, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, onReconnect, onReconnectStart, onReconnectEnd, setReconnecting, setUpdateHover }) {
  const store = useStoreApi();
  const handleEdgeUpdater = /* @__PURE__ */ __name((event, oppositeHandle) => {
    if (event.button !== 0) {
      return;
    }
    const { autoPanOnConnect, domNode, connectionMode, connectionRadius, lib, onConnectStart, cancelConnection, nodeLookup, rfId: flowId, panBy: panBy2, updateConnection } = store.getState();
    const isTarget = oppositeHandle.type === "target";
    const _onReconnectEnd = /* @__PURE__ */ __name((evt, connectionState) => {
      setReconnecting(false);
      onReconnectEnd?.(evt, edge, oppositeHandle.type, connectionState);
    }, "_onReconnectEnd");
    const onConnectEdge = /* @__PURE__ */ __name((connection) => onReconnect?.(edge, connection), "onConnectEdge");
    const _onConnectStart = /* @__PURE__ */ __name((_event, params) => {
      setReconnecting(true);
      onReconnectStart?.(event, edge, oppositeHandle.type);
      onConnectStart?.(_event, params);
    }, "_onConnectStart");
    XYHandle.onPointerDown(event.nativeEvent, {
      autoPanOnConnect,
      connectionMode,
      connectionRadius,
      domNode,
      handleId: oppositeHandle.id,
      nodeId: oppositeHandle.nodeId,
      nodeLookup,
      isTarget,
      edgeUpdaterType: oppositeHandle.type,
      lib,
      flowId,
      cancelConnection,
      panBy: panBy2,
      isValidConnection: /* @__PURE__ */ __name((...args) => store.getState().isValidConnection?.(...args) ?? true, "isValidConnection"),
      onConnect: onConnectEdge,
      onConnectStart: _onConnectStart,
      onConnectEnd: /* @__PURE__ */ __name((...args) => store.getState().onConnectEnd?.(...args), "onConnectEnd"),
      onReconnectEnd: _onReconnectEnd,
      updateConnection,
      getTransform: /* @__PURE__ */ __name(() => store.getState().transform, "getTransform"),
      getFromHandle: /* @__PURE__ */ __name(() => store.getState().connection.fromHandle, "getFromHandle"),
      dragThreshold: store.getState().connectionDragThreshold,
      handleDomNode: event.currentTarget
    });
  }, "handleEdgeUpdater");
  const onReconnectSourceMouseDown = /* @__PURE__ */ __name((event) => handleEdgeUpdater(event, { nodeId: edge.target, id: edge.targetHandle ?? null, type: "target" }), "onReconnectSourceMouseDown");
  const onReconnectTargetMouseDown = /* @__PURE__ */ __name((event) => handleEdgeUpdater(event, { nodeId: edge.source, id: edge.sourceHandle ?? null, type: "source" }), "onReconnectTargetMouseDown");
  const onReconnectMouseEnter = /* @__PURE__ */ __name(() => setUpdateHover(true), "onReconnectMouseEnter");
  const onReconnectMouseOut = /* @__PURE__ */ __name(() => setUpdateHover(false), "onReconnectMouseOut");
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(isReconnectable === true || isReconnectable === "source") && (0, import_jsx_runtime.jsx)(EdgeAnchor, { position: sourcePosition, centerX: sourceX, centerY: sourceY, radius: reconnectRadius, onMouseDown: onReconnectSourceMouseDown, onMouseEnter: onReconnectMouseEnter, onMouseOut: onReconnectMouseOut, type: "source" }), (isReconnectable === true || isReconnectable === "target") && (0, import_jsx_runtime.jsx)(EdgeAnchor, { position: targetPosition, centerX: targetX, centerY: targetY, radius: reconnectRadius, onMouseDown: onReconnectTargetMouseDown, onMouseEnter: onReconnectMouseEnter, onMouseOut: onReconnectMouseOut, type: "target" })] });
}
__name(EdgeUpdateAnchors, "EdgeUpdateAnchors");
function EdgeWrapper({ id: id2, edgesFocusable, edgesReconnectable, elementsSelectable, onClick, onDoubleClick, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, rfId, edgeTypes, noPanClassName, onError, disableKeyboardA11y }) {
  let edge = useStore((s) => s.edgeLookup.get(id2));
  const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
  edge = defaultEdgeOptions ? { ...defaultEdgeOptions, ...edge } : edge;
  let edgeType = edge.type || "default";
  let EdgeComponent = edgeTypes?.[edgeType] || builtinEdgeTypes[edgeType];
  if (EdgeComponent === void 0) {
    onError?.("011", errorMessages["error011"](edgeType));
    edgeType = "default";
    EdgeComponent = edgeTypes?.["default"] || builtinEdgeTypes.default;
  }
  const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === "undefined");
  const isReconnectable = typeof onReconnect !== "undefined" && (edge.reconnectable || edgesReconnectable && typeof edge.reconnectable === "undefined");
  const isSelectable = !!(edge.selectable || elementsSelectable && typeof edge.selectable === "undefined");
  const edgeRef = (0, import_react2.useRef)(null);
  const [updateHover, setUpdateHover] = (0, import_react2.useState)(false);
  const [reconnecting, setReconnecting] = (0, import_react2.useState)(false);
  const store = useStoreApi();
  const { zIndex, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = useStore((0, import_react2.useCallback)((store2) => {
    const sourceNode = store2.nodeLookup.get(edge.source);
    const targetNode = store2.nodeLookup.get(edge.target);
    if (!sourceNode || !targetNode) {
      return {
        zIndex: edge.zIndex,
        ...nullPosition
      };
    }
    const edgePosition = getEdgePosition({
      id: id2,
      sourceNode,
      targetNode,
      sourceHandle: edge.sourceHandle || null,
      targetHandle: edge.targetHandle || null,
      connectionMode: store2.connectionMode,
      onError
    });
    const zIndex2 = getElevatedEdgeZIndex({
      selected: edge.selected,
      zIndex: edge.zIndex,
      sourceNode,
      targetNode,
      elevateOnSelect: store2.elevateEdgesOnSelect,
      zIndexMode: store2.zIndexMode
    });
    return {
      zIndex: zIndex2,
      ...edgePosition || nullPosition
    };
  }, [edge.source, edge.target, edge.sourceHandle, edge.targetHandle, edge.selected, edge.zIndex]), shallow$1);
  const markerStartUrl = (0, import_react2.useMemo)(() => edge.markerStart ? `url('#${getMarkerId(edge.markerStart, rfId)}')` : void 0, [edge.markerStart, rfId]);
  const markerEndUrl = (0, import_react2.useMemo)(() => edge.markerEnd ? `url('#${getMarkerId(edge.markerEnd, rfId)}')` : void 0, [edge.markerEnd, rfId]);
  if (edge.hidden || sourceX === null || sourceY === null || targetX === null || targetY === null) {
    return null;
  }
  const onEdgeClick = /* @__PURE__ */ __name((event) => {
    const { addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
    if (isSelectable) {
      store.setState({ nodesSelectionActive: false });
      if (edge.selected && multiSelectionActive) {
        unselectNodesAndEdges({ nodes: [], edges: [edge] });
        edgeRef.current?.blur();
      } else {
        addSelectedEdges([id2]);
      }
    }
    if (onClick) {
      onClick(event, edge);
    }
  }, "onEdgeClick");
  const onEdgeDoubleClick = onDoubleClick ? (event) => {
    onDoubleClick(event, { ...edge });
  } : void 0;
  const onEdgeContextMenu = onContextMenu ? (event) => {
    onContextMenu(event, { ...edge });
  } : void 0;
  const onEdgeMouseEnter = onMouseEnter ? (event) => {
    onMouseEnter(event, { ...edge });
  } : void 0;
  const onEdgeMouseMove = onMouseMove ? (event) => {
    onMouseMove(event, { ...edge });
  } : void 0;
  const onEdgeMouseLeave = onMouseLeave ? (event) => {
    onMouseLeave(event, { ...edge });
  } : void 0;
  const onKeyDown = /* @__PURE__ */ __name((event) => {
    if (!disableKeyboardA11y && elementSelectionKeys.includes(event.key) && isSelectable) {
      const { unselectNodesAndEdges, addSelectedEdges } = store.getState();
      const unselect = event.key === "Escape";
      if (unselect) {
        edgeRef.current?.blur();
        unselectNodesAndEdges({ edges: [edge] });
      } else {
        addSelectedEdges([id2]);
      }
    }
  }, "onKeyDown");
  return (0, import_jsx_runtime.jsx)("svg", { style: { zIndex }, children: (0, import_jsx_runtime.jsxs)("g", { className: cc([
    "react-flow__edge",
    `react-flow__edge-${edgeType}`,
    edge.className,
    noPanClassName,
    {
      selected: edge.selected,
      animated: edge.animated,
      inactive: !isSelectable && !onClick,
      updating: updateHover,
      selectable: isSelectable
    }
  ]), onClick: onEdgeClick, onDoubleClick: onEdgeDoubleClick, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: edge.ariaRole ?? (isFocusable ? "group" : "img"), "aria-roledescription": "edge", "data-id": id2, "data-testid": `rf__edge-${id2}`, "aria-label": edge.ariaLabel === null ? void 0 : edge.ariaLabel || `Edge from ${edge.source} to ${edge.target}`, "aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0, ref: edgeRef, ...edge.domAttributes, children: [!reconnecting && (0, import_jsx_runtime.jsx)(EdgeComponent, { id: id2, source: edge.source, target: edge.target, type: edge.type, selected: edge.selected, animated: edge.animated, selectable: isSelectable, deletable: edge.deletable ?? true, label: edge.label, labelStyle: edge.labelStyle, labelShowBg: edge.labelShowBg, labelBgStyle: edge.labelBgStyle, labelBgPadding: edge.labelBgPadding, labelBgBorderRadius: edge.labelBgBorderRadius, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data: edge.data, style: edge.style, sourceHandleId: edge.sourceHandle, targetHandleId: edge.targetHandle, markerStart: markerStartUrl, markerEnd: markerEndUrl, pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0, interactionWidth: edge.interactionWidth }), isReconnectable && (0, import_jsx_runtime.jsx)(EdgeUpdateAnchors, { edge, isReconnectable, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, setUpdateHover, setReconnecting })] }) });
}
__name(EdgeWrapper, "EdgeWrapper");
var EdgeWrapper$1 = (0, import_react2.memo)(EdgeWrapper);
var selector$a = /* @__PURE__ */ __name((s) => ({
  edgesFocusable: s.edgesFocusable,
  edgesReconnectable: s.edgesReconnectable,
  elementsSelectable: s.elementsSelectable,
  connectionMode: s.connectionMode,
  onError: s.onError
}), "selector$a");
function EdgeRendererComponent({ defaultMarkerColor, onlyRenderVisibleElements, rfId, edgeTypes, noPanClassName, onReconnect, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, reconnectRadius, onEdgeDoubleClick, onReconnectStart, onReconnectEnd, disableKeyboardA11y }) {
  const { edgesFocusable, edgesReconnectable, elementsSelectable, onError } = useStore(selector$a, shallow$1);
  const edgeIds = useVisibleEdgeIds(onlyRenderVisibleElements);
  return (0, import_jsx_runtime.jsxs)("div", { className: "react-flow__edges", children: [(0, import_jsx_runtime.jsx)(MarkerDefinitions$1, { defaultColor: defaultMarkerColor, rfId }), edgeIds.map((id2) => {
    return (0, import_jsx_runtime.jsx)(EdgeWrapper$1, { id: id2, edgesFocusable, edgesReconnectable, elementsSelectable, noPanClassName, onReconnect, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onClick: onEdgeClick, reconnectRadius, onDoubleClick: onEdgeDoubleClick, onReconnectStart, onReconnectEnd, rfId, onError, edgeTypes, disableKeyboardA11y }, id2);
  })] });
}
__name(EdgeRendererComponent, "EdgeRendererComponent");
EdgeRendererComponent.displayName = "EdgeRenderer";
var EdgeRenderer = (0, import_react2.memo)(EdgeRendererComponent);
var selector$9 = /* @__PURE__ */ __name((s) => `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`, "selector$9");
function Viewport({ children: children2 }) {
  const transform2 = useStore(selector$9);
  return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: transform2 }, children: children2 });
}
__name(Viewport, "Viewport");
function useOnInitHandler(onInit) {
  const rfInstance = useReactFlow();
  const isInitialized = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
      setTimeout(() => onInit(rfInstance), 1);
      isInitialized.current = true;
    }
  }, [onInit, rfInstance.viewportInitialized]);
}
__name(useOnInitHandler, "useOnInitHandler");
var selector$8 = /* @__PURE__ */ __name((state) => state.panZoom?.syncViewport, "selector$8");
function useViewportSync(viewport) {
  const syncViewport = useStore(selector$8);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    if (viewport) {
      syncViewport?.(viewport);
      store.setState({ transform: [viewport.x, viewport.y, viewport.zoom] });
    }
  }, [viewport, syncViewport]);
  return null;
}
__name(useViewportSync, "useViewportSync");
function storeSelector$1(s) {
  return s.connection.inProgress ? { ...s.connection, to: pointToRendererPoint(s.connection.to, s.transform) } : { ...s.connection };
}
__name(storeSelector$1, "storeSelector$1");
function getSelector(connectionSelector) {
  if (connectionSelector) {
    const combinedSelector = /* @__PURE__ */ __name((s) => {
      const connection = storeSelector$1(s);
      return connectionSelector(connection);
    }, "combinedSelector");
    return combinedSelector;
  }
  return storeSelector$1;
}
__name(getSelector, "getSelector");
function useConnection(connectionSelector) {
  const combinedSelector = getSelector(connectionSelector);
  return useStore(combinedSelector, shallow$1);
}
__name(useConnection, "useConnection");
var selector$7 = /* @__PURE__ */ __name((s) => ({
  nodesConnectable: s.nodesConnectable,
  isValid: s.connection.isValid,
  inProgress: s.connection.inProgress,
  width: s.width,
  height: s.height
}), "selector$7");
function ConnectionLineWrapper({ containerStyle: containerStyle2, style: style2, type, component }) {
  const { nodesConnectable, width, height, isValid, inProgress } = useStore(selector$7, shallow$1);
  const renderConnection = !!(width && nodesConnectable && inProgress);
  if (!renderConnection) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("svg", { style: containerStyle2, width, height, className: "react-flow__connectionline react-flow__container", children: (0, import_jsx_runtime.jsx)("g", { className: cc(["react-flow__connection", getConnectionStatus(isValid)]), children: (0, import_jsx_runtime.jsx)(ConnectionLine, { style: style2, type, CustomComponent: component, isValid }) }) });
}
__name(ConnectionLineWrapper, "ConnectionLineWrapper");
var ConnectionLine = /* @__PURE__ */ __name(({ style: style2, type = ConnectionLineType.Bezier, CustomComponent, isValid }) => {
  const { inProgress, from, fromNode, fromHandle, fromPosition, to, toNode, toHandle, toPosition, pointer } = useConnection();
  if (!inProgress) {
    return;
  }
  if (CustomComponent) {
    return (0, import_jsx_runtime.jsx)(CustomComponent, { connectionLineType: type, connectionLineStyle: style2, fromNode, fromHandle, fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, fromPosition, toPosition, connectionStatus: getConnectionStatus(isValid), toNode, toHandle, pointer });
  }
  let path = "";
  const pathParams = {
    sourceX: from.x,
    sourceY: from.y,
    sourcePosition: fromPosition,
    targetX: to.x,
    targetY: to.y,
    targetPosition: toPosition
  };
  switch (type) {
    case ConnectionLineType.Bezier:
      [path] = getBezierPath(pathParams);
      break;
    case ConnectionLineType.SimpleBezier:
      [path] = getSimpleBezierPath(pathParams);
      break;
    case ConnectionLineType.Step:
      [path] = getSmoothStepPath({
        ...pathParams,
        borderRadius: 0
      });
      break;
    case ConnectionLineType.SmoothStep:
      [path] = getSmoothStepPath(pathParams);
      break;
    default:
      [path] = getStraightPath(pathParams);
  }
  return (0, import_jsx_runtime.jsx)("path", { d: path, fill: "none", className: "react-flow__connection-path", style: style2 });
}, "ConnectionLine");
ConnectionLine.displayName = "ConnectionLine";
var emptyTypes = {};
function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes = emptyTypes) {
  const typesRef = (0, import_react2.useRef)(nodeOrEdgeTypes);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    if (process.env.NODE_ENV === "development") {
      const usedKeys = /* @__PURE__ */ new Set([...Object.keys(typesRef.current), ...Object.keys(nodeOrEdgeTypes)]);
      for (const key of usedKeys) {
        if (typesRef.current[key] !== nodeOrEdgeTypes[key]) {
          store.getState().onError?.("002", errorMessages["error002"]());
          break;
        }
      }
      typesRef.current = nodeOrEdgeTypes;
    }
  }, [nodeOrEdgeTypes]);
}
__name(useNodeOrEdgeTypesWarning, "useNodeOrEdgeTypesWarning");
function useStylesLoadedWarning() {
  const store = useStoreApi();
  const checked = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (process.env.NODE_ENV === "development") {
      if (!checked.current) {
        const pane = document.querySelector(".react-flow__pane");
        if (pane && !(window.getComputedStyle(pane).zIndex === "1")) {
          store.getState().onError?.("013", errorMessages["error013"]("react"));
        }
        checked.current = true;
      }
    }
  }, []);
}
__name(useStylesLoadedWarning, "useStylesLoadedWarning");
function GraphViewComponent({ nodeTypes, edgeTypes, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, autoPanOnSelection, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, nodeExtent, rfId, viewport, onViewportChange }) {
  useNodeOrEdgeTypesWarning(nodeTypes);
  useNodeOrEdgeTypesWarning(edgeTypes);
  useStylesLoadedWarning();
  useOnInitHandler(onInit);
  useViewportSync(viewport);
  return (0, import_jsx_runtime.jsx)(FlowRenderer, { onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, autoPanOnSelection, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, onSelectionContextMenu, preventScrolling, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport: !!viewport, children: (0, import_jsx_runtime.jsxs)(Viewport, { children: [(0, import_jsx_runtime.jsx)(EdgeRenderer, { edgeTypes, onEdgeClick, onEdgeDoubleClick, onReconnect, onReconnectStart, onReconnectEnd, onlyRenderVisibleElements, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, defaultMarkerColor, noPanClassName, disableKeyboardA11y, rfId }), (0, import_jsx_runtime.jsx)(ConnectionLineWrapper, { style: connectionLineStyle, type: connectionLineType, component: connectionLineComponent, containerStyle: connectionLineContainerStyle }), (0, import_jsx_runtime.jsx)("div", { className: "react-flow__edgelabel-renderer" }), (0, import_jsx_runtime.jsx)(NodeRenderer, { nodeTypes, onNodeClick, onNodeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, nodeClickDistance, onlyRenderVisibleElements, noPanClassName, noDragClassName, disableKeyboardA11y, nodeExtent, rfId }), (0, import_jsx_runtime.jsx)("div", { className: "react-flow__viewport-portal" })] }) });
}
__name(GraphViewComponent, "GraphViewComponent");
GraphViewComponent.displayName = "GraphView";
var GraphView = (0, import_react2.memo)(GraphViewComponent);
var devWarn = createDevWarn("React Flow", "https://reactflow.dev/");
var getInitialState = /* @__PURE__ */ __name(({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom = 0.5, maxZoom = 2, nodeOrigin, nodeExtent, zIndexMode = "basic" } = {}) => {
  const nodeLookup = /* @__PURE__ */ new Map();
  const parentLookup = /* @__PURE__ */ new Map();
  const connectionLookup = /* @__PURE__ */ new Map();
  const edgeLookup = /* @__PURE__ */ new Map();
  const storeEdges = defaultEdges ?? edges ?? [];
  const storeNodes = defaultNodes ?? nodes ?? [];
  const storeNodeOrigin = nodeOrigin ?? [0, 0];
  const storeNodeExtent = nodeExtent ?? infiniteExtent;
  updateConnectionLookup(connectionLookup, edgeLookup, storeEdges);
  const { nodesInitialized } = adoptUserNodes(storeNodes, nodeLookup, parentLookup, {
    nodeOrigin: storeNodeOrigin,
    nodeExtent: storeNodeExtent,
    zIndexMode
  });
  let transform2 = [0, 0, 1];
  if (fitView && width && height) {
    const bounds = getInternalNodesBounds(nodeLookup, {
      filter: /* @__PURE__ */ __name((node) => !!((node.width || node.initialWidth) && (node.height || node.initialHeight)), "filter")
    });
    const { x, y, zoom } = getViewportForBounds(bounds, width, height, minZoom, maxZoom, fitViewOptions?.padding ?? 0.1);
    transform2 = [x, y, zoom];
  }
  return {
    rfId: "1",
    width: width ?? 0,
    height: height ?? 0,
    transform: transform2,
    nodes: storeNodes,
    nodesInitialized,
    nodeLookup,
    parentLookup,
    edges: storeEdges,
    edgeLookup,
    connectionLookup,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: defaultNodes !== void 0,
    hasDefaultEdges: defaultEdges !== void 0,
    panZoom: null,
    minZoom,
    maxZoom,
    translateExtent: infiniteExtent,
    nodeExtent: storeNodeExtent,
    nodesSelectionActive: false,
    userSelectionActive: false,
    userSelectionRect: null,
    connectionMode: ConnectionMode.Strict,
    domNode: null,
    paneDragging: false,
    noPanClassName: "nopan",
    nodeOrigin: storeNodeOrigin,
    nodeDragThreshold: 1,
    connectionDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: false,
    nodesDraggable: true,
    nodesConnectable: true,
    nodesFocusable: true,
    edgesFocusable: true,
    edgesReconnectable: true,
    elementsSelectable: true,
    elevateNodesOnSelect: true,
    elevateEdgesOnSelect: true,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    fitViewQueued: fitView ?? false,
    fitViewOptions,
    fitViewResolver: null,
    connection: { ...initialConnection },
    connectionClickStartHandle: null,
    connectOnClick: true,
    ariaLiveMessage: "",
    autoPanOnConnect: true,
    autoPanOnNodeDrag: true,
    autoPanOnNodeFocus: true,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: devWarn,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: false,
    ariaLabelConfig: defaultAriaLabelConfig,
    zIndexMode,
    onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map()
  };
}, "getInitialState");
var createStore2 = /* @__PURE__ */ __name(({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent, zIndexMode }) => createWithEqualityFn((set3, get3) => {
  async function resolveFitView() {
    const { nodeLookup, panZoom, fitViewOptions: fitViewOptions2, fitViewResolver, width: width2, height: height2, minZoom: minZoom2, maxZoom: maxZoom2 } = get3();
    if (!panZoom) {
      return;
    }
    await fitViewport({
      nodes: nodeLookup,
      width: width2,
      height: height2,
      panZoom,
      minZoom: minZoom2,
      maxZoom: maxZoom2
    }, fitViewOptions2);
    fitViewResolver?.resolve(true);
    set3({ fitViewResolver: null });
  }
  __name(resolveFitView, "resolveFitView");
  return {
    ...getInitialState({
      nodes,
      edges,
      width,
      height,
      fitView,
      fitViewOptions,
      minZoom,
      maxZoom,
      nodeOrigin,
      nodeExtent,
      defaultNodes,
      defaultEdges,
      zIndexMode
    }),
    setNodes: /* @__PURE__ */ __name((nodes2) => {
      const { nodeLookup, parentLookup, nodeOrigin: nodeOrigin2, elevateNodesOnSelect, fitViewQueued, zIndexMode: zIndexMode2, nodesSelectionActive } = get3();
      const { nodesInitialized, hasSelectedNodes } = adoptUserNodes(nodes2, nodeLookup, parentLookup, {
        nodeOrigin: nodeOrigin2,
        nodeExtent,
        elevateNodesOnSelect,
        checkEquality: true,
        zIndexMode: zIndexMode2
      });
      const nextNodesSelectionActive = nodesSelectionActive && hasSelectedNodes;
      if (fitViewQueued && nodesInitialized) {
        resolveFitView();
        set3({
          nodes: nodes2,
          nodesInitialized,
          fitViewQueued: false,
          fitViewOptions: void 0,
          nodesSelectionActive: nextNodesSelectionActive
        });
      } else {
        set3({ nodes: nodes2, nodesInitialized, nodesSelectionActive: nextNodesSelectionActive });
      }
    }, "setNodes"),
    setEdges: /* @__PURE__ */ __name((edges2) => {
      const { connectionLookup, edgeLookup } = get3();
      updateConnectionLookup(connectionLookup, edgeLookup, edges2);
      set3({ edges: edges2 });
    }, "setEdges"),
    setDefaultNodesAndEdges: /* @__PURE__ */ __name((nodes2, edges2) => {
      if (nodes2) {
        const { setNodes } = get3();
        setNodes(nodes2);
        set3({ hasDefaultNodes: true });
      }
      if (edges2) {
        const { setEdges } = get3();
        setEdges(edges2);
        set3({ hasDefaultEdges: true });
      }
    }, "setDefaultNodesAndEdges"),
    /*
     * Every node gets registered at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: /* @__PURE__ */ __name((updates) => {
      const { triggerNodeChanges, nodeLookup, parentLookup, domNode, nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2, debug, fitViewQueued, zIndexMode: zIndexMode2 } = get3();
      const { changes, updatedInternals } = updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin2, nodeExtent2, zIndexMode2);
      if (!updatedInternals) {
        return;
      }
      updateAbsolutePositions(nodeLookup, parentLookup, { nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2, zIndexMode: zIndexMode2 });
      if (fitViewQueued) {
        resolveFitView();
        set3({ fitViewQueued: false, fitViewOptions: void 0 });
      } else {
        set3({});
      }
      if (changes?.length > 0) {
        if (debug) {
          console.log("React Flow: trigger node changes", changes);
        }
        triggerNodeChanges?.(changes);
      }
    }, "updateNodeInternals"),
    updateNodePositions: /* @__PURE__ */ __name((nodeDragItems, dragging = false) => {
      const parentExpandChildren = [];
      let changes = [];
      const { nodeLookup, triggerNodeChanges, connection, updateConnection, onNodesChangeMiddlewareMap } = get3();
      for (const [id2, dragItem] of nodeDragItems) {
        const node = nodeLookup.get(id2);
        const expandParent = !!(node?.expandParent && node?.parentId && dragItem?.position);
        const change = {
          id: id2,
          type: "position",
          position: expandParent ? {
            x: Math.max(0, dragItem.position.x),
            y: Math.max(0, dragItem.position.y)
          } : dragItem.position,
          dragging
        };
        if (node && connection.inProgress && connection.fromNode.id === node.id) {
          const updatedFrom = getHandlePosition(node, connection.fromHandle, Position.Left, true);
          updateConnection({ ...connection, from: updatedFrom });
        }
        if (expandParent && node.parentId) {
          parentExpandChildren.push({
            id: id2,
            parentId: node.parentId,
            rect: {
              ...dragItem.internals.positionAbsolute,
              width: dragItem.measured.width ?? 0,
              height: dragItem.measured.height ?? 0
            }
          });
        }
        changes.push(change);
      }
      if (parentExpandChildren.length > 0) {
        const { parentLookup, nodeOrigin: nodeOrigin2 } = get3();
        const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin2);
        changes.push(...parentExpandChanges);
      }
      for (const middleware of onNodesChangeMiddlewareMap.values()) {
        changes = middleware(changes);
      }
      triggerNodeChanges(changes);
    }, "updateNodePositions"),
    triggerNodeChanges: /* @__PURE__ */ __name((changes) => {
      const { onNodesChange, setNodes, nodes: nodes2, hasDefaultNodes, debug } = get3();
      if (changes?.length) {
        if (hasDefaultNodes) {
          const updatedNodes = applyNodeChanges(changes, nodes2);
          setNodes(updatedNodes);
        }
        if (debug) {
          console.log("React Flow: trigger node changes", changes);
        }
        onNodesChange?.(changes);
      }
    }, "triggerNodeChanges"),
    triggerEdgeChanges: /* @__PURE__ */ __name((changes) => {
      const { onEdgesChange, setEdges, edges: edges2, hasDefaultEdges, debug } = get3();
      if (changes?.length) {
        if (hasDefaultEdges) {
          const updatedEdges = applyEdgeChanges(changes, edges2);
          setEdges(updatedEdges);
        }
        if (debug) {
          console.log("React Flow: trigger edge changes", changes);
        }
        onEdgesChange?.(changes);
      }
    }, "triggerEdgeChanges"),
    addSelectedNodes: /* @__PURE__ */ __name((selectedNodeIds) => {
      const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
      if (multiSelectionActive) {
        const nodeChanges = selectedNodeIds.map((nodeId) => createSelectionChange(nodeId, true));
        triggerNodeChanges(nodeChanges);
        return;
      }
      triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set([...selectedNodeIds]), true));
      triggerEdgeChanges(getSelectionChanges(edgeLookup));
    }, "addSelectedNodes"),
    addSelectedEdges: /* @__PURE__ */ __name((selectedEdgeIds) => {
      const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
      if (multiSelectionActive) {
        const changedEdges = selectedEdgeIds.map((edgeId) => createSelectionChange(edgeId, true));
        triggerEdgeChanges(changedEdges);
        return;
      }
      triggerEdgeChanges(getSelectionChanges(edgeLookup, /* @__PURE__ */ new Set([...selectedEdgeIds])));
      triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set(), true));
    }, "addSelectedEdges"),
    unselectNodesAndEdges: /* @__PURE__ */ __name(({ nodes: nodes2, edges: edges2 } = {}) => {
      const { edges: storeEdges, nodes: storeNodes, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
      const nodesToUnselect = nodes2 ? nodes2 : storeNodes;
      const edgesToUnselect = edges2 ? edges2 : storeEdges;
      const nodeChanges = [];
      for (const node of nodesToUnselect) {
        if (!node.selected) {
          continue;
        }
        const internalNode = nodeLookup.get(node.id);
        if (internalNode) {
          internalNode.selected = false;
        }
        nodeChanges.push(createSelectionChange(node.id, false));
      }
      const edgeChanges = [];
      for (const edge of edgesToUnselect) {
        if (!edge.selected) {
          continue;
        }
        edgeChanges.push(createSelectionChange(edge.id, false));
      }
      triggerNodeChanges(nodeChanges);
      triggerEdgeChanges(edgeChanges);
    }, "unselectNodesAndEdges"),
    setMinZoom: /* @__PURE__ */ __name((minZoom2) => {
      const { panZoom, maxZoom: maxZoom2 } = get3();
      panZoom?.setScaleExtent([minZoom2, maxZoom2]);
      set3({ minZoom: minZoom2 });
    }, "setMinZoom"),
    setMaxZoom: /* @__PURE__ */ __name((maxZoom2) => {
      const { panZoom, minZoom: minZoom2 } = get3();
      panZoom?.setScaleExtent([minZoom2, maxZoom2]);
      set3({ maxZoom: maxZoom2 });
    }, "setMaxZoom"),
    setTranslateExtent: /* @__PURE__ */ __name((translateExtent) => {
      get3().panZoom?.setTranslateExtent(translateExtent);
      set3({ translateExtent });
    }, "setTranslateExtent"),
    resetSelectedElements: /* @__PURE__ */ __name(() => {
      const { edges: edges2, nodes: nodes2, triggerNodeChanges, triggerEdgeChanges, elementsSelectable } = get3();
      if (!elementsSelectable) {
        return;
      }
      const nodeChanges = nodes2.reduce((res, node) => node.selected ? [...res, createSelectionChange(node.id, false)] : res, []);
      const edgeChanges = edges2.reduce((res, edge) => edge.selected ? [...res, createSelectionChange(edge.id, false)] : res, []);
      triggerNodeChanges(nodeChanges);
      triggerEdgeChanges(edgeChanges);
    }, "resetSelectedElements"),
    setNodeExtent: /* @__PURE__ */ __name((nextNodeExtent) => {
      const { nodes: nodes2, nodeLookup, parentLookup, nodeOrigin: nodeOrigin2, elevateNodesOnSelect, nodeExtent: nodeExtent2, zIndexMode: zIndexMode2 } = get3();
      if (nextNodeExtent[0][0] === nodeExtent2[0][0] && nextNodeExtent[0][1] === nodeExtent2[0][1] && nextNodeExtent[1][0] === nodeExtent2[1][0] && nextNodeExtent[1][1] === nodeExtent2[1][1]) {
        return;
      }
      adoptUserNodes(nodes2, nodeLookup, parentLookup, {
        nodeOrigin: nodeOrigin2,
        nodeExtent: nextNodeExtent,
        elevateNodesOnSelect,
        checkEquality: false,
        zIndexMode: zIndexMode2
      });
      set3({ nodeExtent: nextNodeExtent });
    }, "setNodeExtent"),
    panBy: /* @__PURE__ */ __name((delta) => {
      const { transform: transform2, width: width2, height: height2, panZoom, translateExtent } = get3();
      return panBy({ delta, panZoom, transform: transform2, translateExtent, width: width2, height: height2 });
    }, "panBy"),
    setCenter: /* @__PURE__ */ __name(async (x, y, options2) => {
      const { width: width2, height: height2, maxZoom: maxZoom2, panZoom } = get3();
      if (!panZoom) {
        return false;
      }
      const nextZoom = typeof options2?.zoom !== "undefined" ? options2.zoom : maxZoom2;
      await panZoom.setViewport({
        x: width2 / 2 - x * nextZoom,
        y: height2 / 2 - y * nextZoom,
        zoom: nextZoom
      }, { duration: options2?.duration, ease: options2?.ease, interpolate: options2?.interpolate });
      return true;
    }, "setCenter"),
    cancelConnection: /* @__PURE__ */ __name(() => {
      set3({
        connection: { ...initialConnection }
      });
    }, "cancelConnection"),
    updateConnection: /* @__PURE__ */ __name((connection) => {
      set3({ connection });
    }, "updateConnection"),
    reset: /* @__PURE__ */ __name(() => set3({ ...getInitialState() }), "reset")
  };
}, Object.is), "createStore");
function ReactFlowProvider({ initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, initialMinZoom: minZoom, initialMaxZoom: maxZoom, initialFitViewOptions: fitViewOptions, fitView, nodeOrigin, nodeExtent, zIndexMode, children: children2 }) {
  const [store] = (0, import_react2.useState)(() => createStore2({
    nodes,
    edges,
    defaultNodes,
    defaultEdges,
    width,
    height,
    fitView,
    minZoom,
    maxZoom,
    fitViewOptions,
    nodeOrigin,
    nodeExtent,
    zIndexMode
  }));
  return (0, import_jsx_runtime.jsx)(Provider$1, { value: store, children: (0, import_jsx_runtime.jsx)(BatchProvider, { children: children2 }) });
}
__name(ReactFlowProvider, "ReactFlowProvider");
function Wrapper({ children: children2, nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent, zIndexMode }) {
  const isWrapped = (0, import_react2.useContext)(StoreContext);
  if (isWrapped) {
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children2 });
  }
  return (0, import_jsx_runtime.jsx)(ReactFlowProvider, { initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, fitView, initialFitViewOptions: fitViewOptions, initialMinZoom: minZoom, initialMaxZoom: maxZoom, nodeOrigin, nodeExtent, zIndexMode, children: children2 });
}
__name(Wrapper, "Wrapper");
var wrapperStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function ReactFlow({ nodes, edges, defaultNodes, defaultEdges, className, nodeTypes, edgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onBeforeDelete, connectionMode, connectionLineType = ConnectionLineType.Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = "Backspace", selectionKeyCode = "Shift", selectionOnDrag = false, selectionMode = SelectionMode.Full, panActivationKeyCode = "Space", multiSelectionKeyCode = isMacOs() ? "Meta" : "Control", zoomActivationKeyCode = isMacOs() ? "Meta" : "Control", snapToGrid, snapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag, nodesDraggable, autoPanOnNodeFocus, nodesConnectable, nodesFocusable, nodeOrigin = defaultNodeOrigin, edgesFocusable, edgesReconnectable, elementsSelectable = true, defaultViewport: defaultViewport$1 = defaultViewport, minZoom = 0.5, maxZoom = 2, translateExtent = infiniteExtent, preventScrolling = true, nodeExtent, defaultMarkerColor = "#b1b1b7", zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance = 1, nodeClickDistance = 0, children: children2, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius = 10, onNodesChange, onEdgesChange, noDragClassName = "nodrag", noWheelClassName = "nowheel", noPanClassName = "nopan", fitView, fitViewOptions, connectOnClick, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect = true, elevateEdgesOnSelect = false, disableKeyboardA11y = false, autoPanOnConnect, autoPanOnNodeDrag, autoPanOnSelection = true, autoPanSpeed, connectionRadius, isValidConnection, onError, style: style2, id: id2, nodeDragThreshold, connectionDragThreshold, viewport, onViewportChange, width, height, colorMode = "light", debug, onScroll, ariaLabelConfig, zIndexMode = "basic", ...rest }, ref) {
  const rfId = id2 || "1";
  const colorModeClassName = useColorModeClass(colorMode);
  const wrapperOnScroll = (0, import_react2.useCallback)((e) => {
    e.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" });
    onScroll?.(e);
  }, [onScroll]);
  return (0, import_jsx_runtime.jsx)("div", { "data-testid": "rf__wrapper", ...rest, onScroll: wrapperOnScroll, style: { ...style2, ...wrapperStyle }, ref, className: cc(["react-flow", className, colorModeClassName]), id: id2, role: "application", children: (0, import_jsx_runtime.jsxs)(Wrapper, { nodes, edges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent, zIndexMode, children: [(0, import_jsx_runtime.jsx)(StoreUpdater, { nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, autoPanOnNodeFocus, nodesConnectable, nodesFocusable, edgesFocusable, edgesReconnectable, elementsSelectable, elevateNodesOnSelect, elevateEdgesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, snapToGrid, snapGrid, connectionMode, translateExtent, connectOnClick, defaultEdgeOptions, fitView, fitViewOptions, onNodesDelete, onEdgesDelete, onDelete, onNodeDragStart, onNodeDrag, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, onMove, onMoveStart, onMoveEnd, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, autoPanSpeed, onError, connectionRadius, isValidConnection, selectNodesOnDrag, nodeDragThreshold, connectionDragThreshold, onBeforeDelete, debug, ariaLabelConfig, zIndexMode }), (0, import_jsx_runtime.jsx)(GraphView, { onInit, onNodeClick, onEdgeClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, nodeTypes, edgeTypes, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, deleteKeyCode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, onlyRenderVisibleElements, defaultViewport: defaultViewport$1, translateExtent, minZoom, maxZoom, preventScrolling, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, autoPanOnSelection, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, defaultMarkerColor, noDragClassName, noWheelClassName, noPanClassName, rfId, disableKeyboardA11y, nodeExtent, viewport, onViewportChange }), (0, import_jsx_runtime.jsx)(SelectionListener, { onSelectionChange }), children2, (0, import_jsx_runtime.jsx)(Attribution, { proOptions, position: attributionPosition }), (0, import_jsx_runtime.jsx)(A11yDescriptions, { rfId, disableKeyboardA11y })] }) });
}
__name(ReactFlow, "ReactFlow");
var index = fixedForwardRef(ReactFlow);
var error014 = errorMessages["error014"]();
function LinePattern({ dimensions, lineWidth, variant, className }) {
  return (0, import_jsx_runtime.jsx)("path", { strokeWidth: lineWidth, d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`, className: cc(["react-flow__background-pattern", variant, className]) });
}
__name(LinePattern, "LinePattern");
function DotPattern({ radius, className }) {
  return (0, import_jsx_runtime.jsx)("circle", { cx: radius, cy: radius, r: radius, className: cc(["react-flow__background-pattern", "dots", className]) });
}
__name(DotPattern, "DotPattern");
var BackgroundVariant;
(function(BackgroundVariant2) {
  BackgroundVariant2["Lines"] = "lines";
  BackgroundVariant2["Dots"] = "dots";
  BackgroundVariant2["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
var defaultSize = {
  [BackgroundVariant.Dots]: 1,
  [BackgroundVariant.Lines]: 1,
  [BackgroundVariant.Cross]: 6
};
var selector$3 = /* @__PURE__ */ __name((s) => ({ transform: s.transform, patternId: `pattern-${s.rfId}` }), "selector$3");
function BackgroundComponent({
  id: id2,
  variant = BackgroundVariant.Dots,
  // only used for dots and cross
  gap = 20,
  // only used for lines and cross
  size,
  lineWidth = 1,
  offset = 0,
  color: color2,
  bgColor,
  style: style2,
  className,
  patternClassName
}) {
  const ref = (0, import_react2.useRef)(null);
  const { transform: transform2, patternId } = useStore(selector$3, shallow$1);
  const patternSize = size || defaultSize[variant];
  const isDots = variant === BackgroundVariant.Dots;
  const isCross = variant === BackgroundVariant.Cross;
  const gapXY = Array.isArray(gap) ? gap : [gap, gap];
  const scaledGap = [gapXY[0] * transform2[2] || 1, gapXY[1] * transform2[2] || 1];
  const scaledSize = patternSize * transform2[2];
  const offsetXY = Array.isArray(offset) ? offset : [offset, offset];
  const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
  const scaledOffset = [
    offsetXY[0] * transform2[2] || 1 + patternDimensions[0] / 2,
    offsetXY[1] * transform2[2] || 1 + patternDimensions[1] / 2
  ];
  const _patternId = `${patternId}${id2 ? id2 : ""}`;
  return (0, import_jsx_runtime.jsxs)("svg", { className: cc(["react-flow__background", className]), style: {
    ...style2,
    ...containerStyle,
    "--xy-background-color-props": bgColor,
    "--xy-background-pattern-color-props": color2
  }, ref, "data-testid": "rf__background", children: [(0, import_jsx_runtime.jsx)("pattern", { id: _patternId, x: transform2[0] % scaledGap[0], y: transform2[1] % scaledGap[1], width: scaledGap[0], height: scaledGap[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${scaledOffset[0]},-${scaledOffset[1]})`, children: isDots ? (0, import_jsx_runtime.jsx)(DotPattern, { radius: scaledSize / 2, className: patternClassName }) : (0, import_jsx_runtime.jsx)(LinePattern, { dimensions: patternDimensions, lineWidth, variant, className: patternClassName }) }), (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${_patternId})` })] });
}
__name(BackgroundComponent, "BackgroundComponent");
BackgroundComponent.displayName = "Background";
var Background = (0, import_react2.memo)(BackgroundComponent);
function PlusIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
__name(PlusIcon, "PlusIcon");
function MinusIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: (0, import_jsx_runtime.jsx)("path", { d: "M0 0h32v4.2H0z" }) });
}
__name(MinusIcon, "MinusIcon");
function FitViewIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: (0, import_jsx_runtime.jsx)("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
__name(FitViewIcon, "FitViewIcon");
function LockIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
__name(LockIcon, "LockIcon");
function UnlockIcon() {
  return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
__name(UnlockIcon, "UnlockIcon");
function ControlButton({ children: children2, className, ...rest }) {
  return (0, import_jsx_runtime.jsx)("button", { type: "button", className: cc(["react-flow__controls-button", className]), ...rest, children: children2 });
}
__name(ControlButton, "ControlButton");
var selector$2 = /* @__PURE__ */ __name((s) => ({
  isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
  minZoomReached: s.transform[2] <= s.minZoom,
  maxZoomReached: s.transform[2] >= s.maxZoom,
  ariaLabelConfig: s.ariaLabelConfig
}), "selector$2");
function ControlsComponent({ style: style2, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children: children2, position = "bottom-left", orientation = "vertical", "aria-label": ariaLabel }) {
  const store = useStoreApi();
  const { isInteractive, minZoomReached, maxZoomReached, ariaLabelConfig } = useStore(selector$2, shallow$1);
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const onZoomInHandler = /* @__PURE__ */ __name(() => {
    zoomIn();
    onZoomIn?.();
  }, "onZoomInHandler");
  const onZoomOutHandler = /* @__PURE__ */ __name(() => {
    zoomOut();
    onZoomOut?.();
  }, "onZoomOutHandler");
  const onFitViewHandler = /* @__PURE__ */ __name(() => {
    fitView(fitViewOptions);
    onFitView?.();
  }, "onFitViewHandler");
  const onToggleInteractivity = /* @__PURE__ */ __name(() => {
    store.setState({
      nodesDraggable: !isInteractive,
      nodesConnectable: !isInteractive,
      elementsSelectable: !isInteractive
    });
    onInteractiveChange?.(!isInteractive);
  }, "onToggleInteractivity");
  const orientationClass = orientation === "horizontal" ? "horizontal" : "vertical";
  return (0, import_jsx_runtime.jsxs)(Panel, { className: cc(["react-flow__controls", orientationClass, className]), position, style: style2, "data-testid": "rf__controls", "aria-label": ariaLabel ?? ariaLabelConfig["controls.ariaLabel"], children: [showZoom && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(ControlButton, { onClick: onZoomInHandler, className: "react-flow__controls-zoomin", title: ariaLabelConfig["controls.zoomIn.ariaLabel"], "aria-label": ariaLabelConfig["controls.zoomIn.ariaLabel"], disabled: maxZoomReached, children: (0, import_jsx_runtime.jsx)(PlusIcon, {}) }), (0, import_jsx_runtime.jsx)(ControlButton, { onClick: onZoomOutHandler, className: "react-flow__controls-zoomout", title: ariaLabelConfig["controls.zoomOut.ariaLabel"], "aria-label": ariaLabelConfig["controls.zoomOut.ariaLabel"], disabled: minZoomReached, children: (0, import_jsx_runtime.jsx)(MinusIcon, {}) })] }), showFitView && (0, import_jsx_runtime.jsx)(ControlButton, { className: "react-flow__controls-fitview", onClick: onFitViewHandler, title: ariaLabelConfig["controls.fitView.ariaLabel"], "aria-label": ariaLabelConfig["controls.fitView.ariaLabel"], children: (0, import_jsx_runtime.jsx)(FitViewIcon, {}) }), showInteractive && (0, import_jsx_runtime.jsx)(ControlButton, { className: "react-flow__controls-interactive", onClick: onToggleInteractivity, title: ariaLabelConfig["controls.interactive.ariaLabel"], "aria-label": ariaLabelConfig["controls.interactive.ariaLabel"], children: isInteractive ? (0, import_jsx_runtime.jsx)(UnlockIcon, {}) : (0, import_jsx_runtime.jsx)(LockIcon, {}) }), children2] });
}
__name(ControlsComponent, "ControlsComponent");
ControlsComponent.displayName = "Controls";
var Controls = (0, import_react2.memo)(ControlsComponent);
function MiniMapNodeComponent({ id: id2, x, y, width, height, style: style2, color: color2, strokeColor, strokeWidth, className, borderRadius, shapeRendering, selected: selected2, onClick }) {
  const { background, backgroundColor } = style2 || {};
  const fill = color2 || background || backgroundColor;
  return (0, import_jsx_runtime.jsx)("rect", { className: cc(["react-flow__minimap-node", { selected: selected2 }, className]), x, y, rx: borderRadius, ry: borderRadius, width, height, style: {
    fill,
    stroke: strokeColor,
    strokeWidth
  }, shapeRendering, onClick: onClick ? (event) => onClick(event, id2) : void 0 });
}
__name(MiniMapNodeComponent, "MiniMapNodeComponent");
var MiniMapNode = (0, import_react2.memo)(MiniMapNodeComponent);
var selectorNodeIds = /* @__PURE__ */ __name((s) => s.nodes.map((node) => node.id), "selectorNodeIds");
var getAttrFunction = /* @__PURE__ */ __name((func) => func instanceof Function ? func : () => func, "getAttrFunction");
function MiniMapNodes({
  nodeStrokeColor,
  nodeColor,
  nodeClassName = "",
  nodeBorderRadius = 5,
  nodeStrokeWidth,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: NodeComponent = MiniMapNode,
  onClick
}) {
  const nodeIds = useStore(selectorNodeIds, shallow$1);
  const nodeColorFunc = getAttrFunction(nodeColor);
  const nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
  const nodeClassNameFunc = getAttrFunction(nodeClassName);
  const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: nodeIds.map((nodeId) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    (0, import_jsx_runtime.jsx)(NodeComponentWrapper, { id: nodeId, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, NodeComponent, onClick, shapeRendering }, nodeId)
  )) });
}
__name(MiniMapNodes, "MiniMapNodes");
function NodeComponentWrapperInner({ id: id2, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, shapeRendering, NodeComponent, onClick }) {
  const { node, x, y, width, height } = useStore((s) => {
    const node2 = s.nodeLookup.get(id2);
    if (!node2) {
      return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    }
    const userNode = node2.internals.userNode;
    const { x: x2, y: y2 } = node2.internals.positionAbsolute;
    const { width: width2, height: height2 } = getNodeDimensions(userNode);
    return {
      node: userNode,
      x: x2,
      y: y2,
      width: width2,
      height: height2
    };
  }, shallow$1);
  if (!node || node.hidden || !nodeHasDimensions(node)) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)(NodeComponent, { x, y, width, height, style: node.style, selected: !!node.selected, className: nodeClassNameFunc(node), color: nodeColorFunc(node), borderRadius: nodeBorderRadius, strokeColor: nodeStrokeColorFunc(node), strokeWidth: nodeStrokeWidth, shapeRendering, onClick, id: node.id });
}
__name(NodeComponentWrapperInner, "NodeComponentWrapperInner");
var NodeComponentWrapper = (0, import_react2.memo)(NodeComponentWrapperInner);
var MiniMapNodes$1 = (0, import_react2.memo)(MiniMapNodes);
var defaultWidth = 200;
var defaultHeight = 150;
var filterHidden = /* @__PURE__ */ __name((node) => !node.hidden, "filterHidden");
var selector$1 = /* @__PURE__ */ __name((s) => {
  const viewBB = {
    x: -s.transform[0] / s.transform[2],
    y: -s.transform[1] / s.transform[2],
    width: s.width / s.transform[2],
    height: s.height / s.transform[2]
  };
  return {
    viewBB,
    boundingRect: s.nodeLookup.size > 0 ? getBoundsOfRects(getInternalNodesBounds(s.nodeLookup, { filter: filterHidden }), viewBB) : viewBB,
    rfId: s.rfId,
    panZoom: s.panZoom,
    translateExtent: s.translateExtent,
    flowWidth: s.width,
    flowHeight: s.height,
    ariaLabelConfig: s.ariaLabelConfig
  };
}, "selector$1");
var ARIA_LABEL_KEY = "react-flow__minimap-desc";
function MiniMapComponent({
  style: style2,
  className,
  nodeStrokeColor,
  nodeColor,
  nodeClassName = "",
  nodeBorderRadius = 5,
  nodeStrokeWidth,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent,
  bgColor,
  maskColor,
  maskStrokeColor,
  maskStrokeWidth,
  position = "bottom-right",
  onClick,
  onNodeClick,
  pannable = false,
  zoomable = false,
  ariaLabel,
  inversePan,
  zoomStep = 1,
  offsetScale = 5
}) {
  const store = useStoreApi();
  const svg = (0, import_react2.useRef)(null);
  const { boundingRect, viewBB, rfId, panZoom, translateExtent, flowWidth, flowHeight, ariaLabelConfig } = useStore(selector$1, shallow$1);
  const elementWidth = style2?.width ?? defaultWidth;
  const elementHeight = style2?.height ?? defaultHeight;
  const scaledWidth = boundingRect.width / elementWidth;
  const scaledHeight = boundingRect.height / elementHeight;
  const viewScale = Math.max(scaledWidth, scaledHeight);
  const viewWidth = viewScale * elementWidth;
  const viewHeight = viewScale * elementHeight;
  const offset = offsetScale * viewScale;
  const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
  const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
  const width = viewWidth + offset * 2;
  const height = viewHeight + offset * 2;
  const labelledBy = `${ARIA_LABEL_KEY}-${rfId}`;
  const viewScaleRef = (0, import_react2.useRef)(0);
  const minimapInstance = (0, import_react2.useRef)();
  viewScaleRef.current = viewScale;
  (0, import_react2.useEffect)(() => {
    if (svg.current && panZoom) {
      minimapInstance.current = XYMinimap({
        domNode: svg.current,
        panZoom,
        getTransform: /* @__PURE__ */ __name(() => store.getState().transform, "getTransform"),
        getViewScale: /* @__PURE__ */ __name(() => viewScaleRef.current, "getViewScale")
      });
      return () => {
        minimapInstance.current?.destroy();
      };
    }
  }, [panZoom]);
  (0, import_react2.useEffect)(() => {
    minimapInstance.current?.update({
      translateExtent,
      width: flowWidth,
      height: flowHeight,
      inversePan,
      pannable,
      zoomStep,
      zoomable
    });
  }, [pannable, zoomable, inversePan, zoomStep, translateExtent, flowWidth, flowHeight]);
  const onSvgClick = onClick ? (event) => {
    const [x2, y2] = minimapInstance.current?.pointer(event) || [0, 0];
    onClick(event, { x: x2, y: y2 });
  } : void 0;
  const onSvgNodeClick = onNodeClick ? (0, import_react2.useCallback)((event, nodeId) => {
    const node = store.getState().nodeLookup.get(nodeId).internals.userNode;
    onNodeClick(event, node);
  }, []) : void 0;
  const _ariaLabel = ariaLabel ?? ariaLabelConfig["minimap.ariaLabel"];
  return (0, import_jsx_runtime.jsx)(Panel, { position, style: {
    ...style2,
    "--xy-minimap-background-color-props": typeof bgColor === "string" ? bgColor : void 0,
    "--xy-minimap-mask-background-color-props": typeof maskColor === "string" ? maskColor : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof maskStrokeColor === "string" ? maskStrokeColor : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof maskStrokeWidth === "number" ? maskStrokeWidth * viewScale : void 0,
    "--xy-minimap-node-background-color-props": typeof nodeColor === "string" ? nodeColor : void 0,
    "--xy-minimap-node-stroke-color-props": typeof nodeStrokeColor === "string" ? nodeStrokeColor : void 0,
    "--xy-minimap-node-stroke-width-props": typeof nodeStrokeWidth === "number" ? nodeStrokeWidth : void 0
  }, className: cc(["react-flow__minimap", className]), "data-testid": "rf__minimap", children: (0, import_jsx_runtime.jsxs)("svg", { width: elementWidth, height: elementHeight, viewBox: `${x} ${y} ${width} ${height}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": labelledBy, ref: svg, onClick: onSvgClick, children: [_ariaLabel && (0, import_jsx_runtime.jsx)("title", { id: labelledBy, children: _ariaLabel }), (0, import_jsx_runtime.jsx)(MiniMapNodes$1, { onClick: onSvgNodeClick, nodeColor, nodeStrokeColor, nodeBorderRadius, nodeClassName, nodeStrokeWidth, nodeComponent }), (0, import_jsx_runtime.jsx)("path", { className: "react-flow__minimap-mask", d: `M${x - offset},${y - offset}h${width + offset * 2}v${height + offset * 2}h${-width - offset * 2}z
        M${viewBB.x},${viewBB.y}h${viewBB.width}v${viewBB.height}h${-viewBB.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
__name(MiniMapComponent, "MiniMapComponent");
MiniMapComponent.displayName = "MiniMap";
var MiniMap = (0, import_react2.memo)(MiniMapComponent);
var scaleSelector = /* @__PURE__ */ __name((calculateScale) => (store) => calculateScale ? `${Math.max(1 / store.transform[2], 1)}` : void 0, "scaleSelector");
var defaultPositions = {
  [ResizeControlVariant.Line]: "right",
  [ResizeControlVariant.Handle]: "bottom-right"
};
function ResizeControl({ nodeId, position, variant = ResizeControlVariant.Handle, className, style: style2 = void 0, children: children2, color: color2, minWidth = 10, minHeight = 10, maxWidth = Number.MAX_VALUE, maxHeight = Number.MAX_VALUE, keepAspectRatio = false, resizeDirection, autoScale = true, shouldResize, onResizeStart, onResize, onResizeEnd }) {
  const contextNodeId = useNodeId();
  const id2 = typeof nodeId === "string" ? nodeId : contextNodeId;
  const store = useStoreApi();
  const resizeControlRef = (0, import_react2.useRef)(null);
  const isHandleControl = variant === ResizeControlVariant.Handle;
  const scale = useStore((0, import_react2.useCallback)(scaleSelector(isHandleControl && autoScale), [isHandleControl, autoScale]), shallow$1);
  const resizer = (0, import_react2.useRef)(null);
  const controlPosition = position ?? defaultPositions[variant];
  (0, import_react2.useEffect)(() => {
    if (!resizeControlRef.current || !id2) {
      return;
    }
    if (!resizer.current) {
      resizer.current = XYResizer({
        domNode: resizeControlRef.current,
        nodeId: id2,
        getStoreItems: /* @__PURE__ */ __name(() => {
          const { nodeLookup, transform: transform2, snapGrid, snapToGrid, nodeOrigin, domNode } = store.getState();
          return {
            nodeLookup,
            transform: transform2,
            snapGrid,
            snapToGrid,
            nodeOrigin,
            paneDomNode: domNode
          };
        }, "getStoreItems"),
        onChange: /* @__PURE__ */ __name((change, childChanges) => {
          const { triggerNodeChanges, nodeLookup, parentLookup, nodeOrigin } = store.getState();
          const changes = [];
          const nextPosition = { x: change.x, y: change.y };
          const node = nodeLookup.get(id2);
          if (node && node.expandParent && node.parentId) {
            const origin = node.origin ?? nodeOrigin;
            const width = change.width ?? node.measured.width ?? 0;
            const height = change.height ?? node.measured.height ?? 0;
            const child = {
              id: node.id,
              parentId: node.parentId,
              rect: {
                width,
                height,
                ...evaluateAbsolutePosition({
                  x: change.x ?? node.position.x,
                  y: change.y ?? node.position.y
                }, { width, height }, node.parentId, nodeLookup, origin)
              }
            };
            const parentExpandChanges = handleExpandParent([child], nodeLookup, parentLookup, nodeOrigin);
            changes.push(...parentExpandChanges);
            nextPosition.x = change.x ? Math.max(origin[0] * width, change.x) : void 0;
            nextPosition.y = change.y ? Math.max(origin[1] * height, change.y) : void 0;
          }
          if (nextPosition.x !== void 0 && nextPosition.y !== void 0) {
            const positionChange = {
              id: id2,
              type: "position",
              position: { ...nextPosition }
            };
            changes.push(positionChange);
          }
          if (change.width !== void 0 && change.height !== void 0) {
            const setAttributes = !resizeDirection ? true : resizeDirection === "horizontal" ? "width" : "height";
            const dimensionChange = {
              id: id2,
              type: "dimensions",
              resizing: true,
              setAttributes,
              dimensions: {
                width: change.width,
                height: change.height
              }
            };
            changes.push(dimensionChange);
          }
          for (const childChange of childChanges) {
            const positionChange = {
              ...childChange,
              type: "position"
            };
            changes.push(positionChange);
          }
          triggerNodeChanges(changes);
        }, "onChange"),
        onEnd: /* @__PURE__ */ __name(({ width, height }) => {
          const dimensionChange = {
            id: id2,
            type: "dimensions",
            resizing: false,
            dimensions: {
              width,
              height
            }
          };
          store.getState().triggerNodeChanges([dimensionChange]);
        }, "onEnd")
      });
    }
    resizer.current.update({
      controlPosition,
      boundaries: {
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
      },
      keepAspectRatio,
      resizeDirection,
      onResizeStart,
      onResize,
      onResizeEnd,
      shouldResize
    });
    return () => {
      resizer.current?.destroy();
    };
  }, [
    controlPosition,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    keepAspectRatio,
    onResizeStart,
    onResize,
    onResizeEnd,
    shouldResize
  ]);
  const positionClassNames = controlPosition.split("-");
  return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__resize-control", "nodrag", ...positionClassNames, variant, className]), ref: resizeControlRef, style: {
    ...style2,
    scale,
    ...color2 && { [isHandleControl ? "backgroundColor" : "borderColor"]: color2 }
  }, children: children2 });
}
__name(ResizeControl, "ResizeControl");
var NodeResizeControl = (0, import_react2.memo)(ResizeControl);

// lib/liveblocks.ts
init_esm();

// node_modules/@liveblocks/node/dist/index.js
init_esm();

// node_modules/marked/lib/marked.esm.js
init_esm();
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
__name(_getDefaults, "_getDefaults");
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
__name(changeDefaults, "changeDefaults");
var noopTest = { exec: /* @__PURE__ */ __name(() => null, "exec") };
function edit(regex, opt = "") {
  let source = typeof regex === "string" ? regex : regex.source;
  const obj = {
    replace: /* @__PURE__ */ __name((name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    }, "replace"),
    getRegex: /* @__PURE__ */ __name(() => {
      return new RegExp(source, opt);
    }, "getRegex")
  };
  return obj;
}
__name(edit, "edit");
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: /* @__PURE__ */ __name((bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`), "listItemRegex"),
  nextBulletRegex: /* @__PURE__ */ __name((indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), "nextBulletRegex"),
  hrRegex: /* @__PURE__ */ __name((indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), "hrRegex"),
  fencesBeginRegex: /* @__PURE__ */ __name((indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`), "fencesBeginRegex"),
  headingBeginRegex: /* @__PURE__ */ __name((indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`), "headingBeginRegex"),
  htmlBeginRegex: /* @__PURE__ */ __name((indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i"), "htmlBeginRegex")
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = /* @__PURE__ */ __name((ch) => escapeReplacements[ch], "getEscapeReplacement");
function escape2(html2, encode2) {
  if (encode2) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
__name(escape2, "escape2");
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
__name(cleanUrl, "cleanUrl");
function splitCells(tableRow, count) {
  const row = tableRow.replace(other.findPipe, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(other.splitPipe);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells.at(-1)?.trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
__name(splitCells, "splitCells");
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
__name(rtrim, "rtrim");
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
__name(findClosingBracket, "findClosingBracket");
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text,
    tokens: lexer2.inlineTokens(text)
  };
  lexer2.state.inLink = false;
  return token;
}
__name(outputLink, "outputLink");
function indentCodeCompensation(raw, text, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
__name(indentCodeCompensation, "indentCodeCompensation");
var _Tokenizer = class {
  static {
    __name(this, "_Tokenizer");
  }
  options;
  rules;
  // set by the lexer
  lexer;
  // set by the lexer
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (this.rules.other.endingHash.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (this.rules.other.blockquoteStart.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => this.rules.other.anyLine.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
    const rows = cap[3]?.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start2 = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start2 + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[1];
        href = "mailto:" + text;
      } else {
        text = cap[1];
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[0];
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
};
var _Lexer = class __Lexer {
  static {
    __name(this, "__Lexer");
  }
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(other.carriageReturn, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
    }
    while (src) {
      let token;
      if (this.options.extensions?.block?.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens.at(-1);
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let maskedSrc = src;
    let match = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if (this.options.extensions?.inline?.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.type === "text" && lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  static {
    __name(this, "_Renderer");
  }
  options;
  parser;
  // set by the parser
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text, lang, escaped }) {
    const langString = (lang || "").match(other.notSpaceStart)?.[0];
    const code = text.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text }) {
    return text;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start2 = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start2 !== 1 ? ' start="' + start2 + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens[0]?.type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text }) {
    return `<code>${escape2(text, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape2(title) + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({ href, title, text, tokens }) {
    if (tokens) {
      text = this.parser.parseInline(tokens, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape2(text);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${escape2(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
  }
};
var _TextRenderer = class {
  static {
    __name(this, "_TextRenderer");
  }
  // no need for block level renderers
  strong({ text }) {
    return text;
  }
  em({ text }) {
    return text;
  }
  codespan({ text }) {
    return text;
  }
  del({ text }) {
    return text;
  }
  html({ text }) {
    return text;
  }
  text({ text }) {
    return text;
  }
  link({ text }) {
    return "" + text;
  }
  image({ text }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  static {
    __name(this, "__Parser");
  }
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body, escaped: true }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer = this.renderer) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = class {
  static {
    __name(this, "_Hooks");
  }
  options;
  block;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  static passThroughHooks = /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
};
var Marked = class {
  static {
    __name(this, "Marked");
  }
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = /* @__PURE__ */ __name((src, options2) => {
      const origOpt = { ...options2 };
      const opt = { ...this.defaults, ...origOpt };
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    }, "parse2");
    return parse2;
  }
  onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
__name(marked, "marked");
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = _Parser.parse;
var lexer = _Lexer.lex;

// node_modules/@liveblocks/node/dist/index.js
var base64 = __toESM(require_base64(), 1);
var sha256 = __toESM(require_sha256(), 1);
var PKG_NAME2 = "@liveblocks/node";
var PKG_VERSION2 = "3.19.5";
var PKG_FORMAT2 = "esm";
async function asyncConsume(iterable) {
  const result = [];
  for await (const item of iterable) {
    result.push(item);
  }
  return result;
}
__name(asyncConsume, "asyncConsume");
async function runConcurrently(iterable, fn, concurrency) {
  const queue = /* @__PURE__ */ new Set();
  for await (const item of iterable) {
    if (queue.size >= concurrency) {
      await Promise.race(queue);
    }
    const promise = (async () => {
      try {
        await fn(item);
      } finally {
        queue.delete(promise);
      }
    })();
    queue.add(promise);
  }
  if (queue.size > 0) {
    await Promise.all(queue);
  }
}
__name(runConcurrently, "runConcurrently");
var LineStream = class extends TransformStream {
  static {
    __name(this, "LineStream");
  }
  constructor() {
    let buffer = "";
    super({
      transform(chunk, controller) {
        buffer += chunk;
        if (buffer.includes("\n")) {
          const lines = buffer.split("\n");
          for (let i = 0; i < lines.length - 1; i++) {
            if (lines[i].length > 0) {
              controller.enqueue(lines[i]);
            }
          }
          buffer = lines[lines.length - 1];
        }
      },
      flush(controller) {
        if (buffer.length > 0) {
          controller.enqueue(buffer);
        }
      }
    });
  }
};
var NdJsonStream = class extends TransformStream {
  static {
    __name(this, "NdJsonStream");
  }
  constructor() {
    super({
      transform(line, controller) {
        const json = JSON.parse(line);
        controller.enqueue(json);
      }
    });
  }
};
function xwarn(resp, method, path) {
  const message = resp.headers.get("X-LB-Warn");
  if (message) {
    const msg = `  ⚠ [Liveblocks] ${message} (${method} ${path})`;
    if (resp.ok) {
      console.warn(msg);
    } else {
      console.error(msg);
    }
  }
}
__name(xwarn, "xwarn");
var DEFAULT_BASE_URL = "https://api.liveblocks.io";
var VALID_KEY_CHARS_REGEX = /^[\w-]+$/;
function getBaseUrl(baseUrl) {
  if (typeof baseUrl === "string" && baseUrl.startsWith("http")) {
    return baseUrl;
  } else {
    return DEFAULT_BASE_URL;
  }
}
__name(getBaseUrl, "getBaseUrl");
async function fetchPolyfill() {
  return typeof globalThis.fetch !== "undefined" ? globalThis.fetch : (await import("./lib-WBFRSD3X.mjs")).default;
}
__name(fetchPolyfill, "fetchPolyfill");
function isString(value) {
  return typeof value === "string";
}
__name(isString, "isString");
function startsWith(value, prefix) {
  return isString(value) && value.startsWith(prefix);
}
__name(startsWith, "startsWith");
function isNonEmpty(value) {
  return isString(value) && value.length > 0;
}
__name(isNonEmpty, "isNonEmpty");
function assertNonEmpty(value, field) {
  if (!isNonEmpty(value)) {
    throw new Error(
      `Invalid value for field '${field}'. Please provide a non-empty string. For more information: https://liveblocks.io/docs/api-reference/liveblocks-node#authorize`
    );
  }
}
__name(assertNonEmpty, "assertNonEmpty");
function assertSecretKey(value, field) {
  if (!startsWith(value, "sk_")) {
    throw new Error(
      `Invalid value for field '${field}'. Secret keys must start with 'sk_'. Please provide the secret key from your Liveblocks dashboard at https://liveblocks.io/dashboard/apikeys.`
    );
  }
  if (!VALID_KEY_CHARS_REGEX.test(value)) {
    throw new Error(
      `Invalid chars found in field '${field}'. Please check that you correctly copied the secret key from your Liveblocks dashboard at https://liveblocks.io/dashboard/apikeys.`
    );
  }
}
__name(assertSecretKey, "assertSecretKey");
function normalizeStatusCode(statusCode) {
  if (statusCode >= 200 && statusCode < 300) {
    return 200;
  } else if (statusCode >= 500) {
    return 503;
  } else {
    return statusCode;
  }
}
__name(normalizeStatusCode, "normalizeStatusCode");
var ALL_PERMISSIONS = Object.freeze([
  "room:write",
  "room:read",
  "room:presence:write",
  "comments:write",
  "comments:read",
  "feeds:write"
]);
function isPermission(value) {
  return ALL_PERMISSIONS.includes(value);
}
__name(isPermission, "isPermission");
var MAX_PERMS_PER_SET = 10;
var READ_ACCESS = Object.freeze([
  "room:read",
  "room:presence:write",
  // TODO: Remove once backend no longer requires this
  "comments:read"
  // TODO: Remove — implied by room:read
]);
var FULL_ACCESS = Object.freeze(["room:write"]);
var roomPatternRegex = /^([*]|[^*]{1,128}[*]?)$/;
var Session = class {
  static {
    __name(this, "Session");
  }
  FULL_ACCESS = FULL_ACCESS;
  READ_ACCESS = READ_ACCESS;
  #postFn;
  #userId;
  #userInfo;
  #organizationId;
  /** Only used as a hint to produce better error messages. */
  #localDev;
  #sealed = false;
  #permissions = /* @__PURE__ */ new Map();
  /** @internal */
  constructor(postFn, userId, userInfo, organizationId, localDev) {
    assertNonEmpty(userId, "userId");
    this.#postFn = postFn;
    this.#userId = userId;
    this.#userInfo = userInfo;
    this.#organizationId = organizationId;
    this.#localDev = localDev ?? false;
  }
  #getOrCreate(roomId) {
    if (this.#sealed) {
      throw new Error("You can no longer change these permissions.");
    }
    let perms = this.#permissions.get(roomId);
    if (perms) {
      return perms;
    } else {
      if (this.#permissions.size >= MAX_PERMS_PER_SET) {
        throw new Error(
          "You cannot add permissions for more than 10 rooms in a single token"
        );
      }
      perms = /* @__PURE__ */ new Set();
      this.#permissions.set(roomId, perms);
      return perms;
    }
  }
  allow(roomIdOrPattern, newPerms) {
    if (typeof roomIdOrPattern !== "string") {
      throw new Error("Room name or pattern must be a string");
    }
    if (!roomPatternRegex.test(roomIdOrPattern)) {
      throw new Error("Invalid room name or pattern");
    }
    if (newPerms.length === 0) {
      throw new Error("Permission list cannot be empty");
    }
    const existingPerms = this.#getOrCreate(roomIdOrPattern);
    for (const perm of newPerms) {
      if (!isPermission(perm)) {
        throw new Error(`Not a valid permission: ${perm}`);
      }
      existingPerms.add(perm);
    }
    return this;
  }
  /** @internal - For unit tests only */
  hasPermissions() {
    return this.#permissions.size > 0;
  }
  /** @internal - For unit tests only */
  seal() {
    if (this.#sealed) {
      throw new Error(
        "You cannot reuse Session instances. Please create a new session every time."
      );
    }
    this.#sealed = true;
  }
  /** @internal - For unit tests only */
  serializePermissions() {
    return Object.fromEntries(
      Array.from(this.#permissions.entries()).map(([pat, perms]) => [
        pat,
        Array.from(perms)
      ])
    );
  }
  /**
   * Call this to authorize the session to access Liveblocks. Note that this
   * will return a Liveblocks "access token". Anyone that obtains such access
   * token will have access to the allowed resources.
   */
  async authorize() {
    this.seal();
    if (!this.hasPermissions()) {
      console.warn(
        "Access tokens without any permission will not be supported soon, you should use wildcards when the client requests a token for resources outside a room. See https://liveblocks.io/docs/errors/liveblocks-client/access-tokens-not-enough-permissions"
      );
    }
    try {
      const body = {
        // Required
        userId: this.#userId,
        permissions: this.serializePermissions(),
        // Optional metadata
        userInfo: this.#userInfo
      };
      if (this.#organizationId !== void 0) {
        body.organizationId = this.#organizationId;
      }
      const resp = await this.#postFn(url`/v2/authorize-user`, body);
      return {
        status: normalizeStatusCode(resp.status),
        body: await resp.text()
      };
    } catch (er) {
      return {
        status: 503,
        body: this.#localDev ? "Could not connect to your Liveblocks dev server. Is it running?" : 'Call to /v2/authorize-user failed. See "error" for more information.',
        error: er
      };
    }
  }
};
function inflateRoomData(room) {
  const createdAt = new Date(room.createdAt);
  const lastConnectionAt = room.lastConnectionAt ? new Date(room.lastConnectionAt) : void 0;
  return {
    ...room,
    createdAt,
    lastConnectionAt
  };
}
__name(inflateRoomData, "inflateRoomData");
function inflateAiCopilot(copilot) {
  return {
    ...copilot,
    createdAt: new Date(copilot.createdAt),
    updatedAt: new Date(copilot.updatedAt),
    lastUsedAt: copilot.lastUsedAt ? new Date(copilot.lastUsedAt) : void 0
  };
}
__name(inflateAiCopilot, "inflateAiCopilot");
function inflateKnowledgeSource(source) {
  return {
    ...source,
    createdAt: new Date(source.createdAt),
    updatedAt: new Date(source.updatedAt),
    lastIndexedAt: new Date(source.lastIndexedAt)
  };
}
__name(inflateKnowledgeSource, "inflateKnowledgeSource");
function inflateWebKnowledgeSourceLink(link2) {
  return {
    ...link2,
    createdAt: new Date(link2.createdAt),
    lastIndexedAt: new Date(link2.lastIndexedAt)
  };
}
__name(inflateWebKnowledgeSourceLink, "inflateWebKnowledgeSourceLink");
var Liveblocks = class {
  static {
    __name(this, "Liveblocks");
  }
  #secret;
  #baseUrl;
  /** Only used as a hint to produce better error messages. */
  #localDev;
  /**
   * Interact with the Liveblocks API from your Node.js backend.
   */
  constructor(options2) {
    const options_ = options2;
    const secret = options_.secret;
    assertSecretKey(secret, "secret");
    this.#secret = secret;
    this.#baseUrl = new URL(getBaseUrl(options2.baseUrl));
    this.#localDev = !!options2.baseUrl && /^https?:\/\/localhost[:/]/.test(options2.baseUrl);
  }
  async #post(path, json, options2) {
    const url3 = urljoin(this.#baseUrl, path);
    const headers = {
      Authorization: `Bearer ${this.#secret}`,
      "Content-Type": "application/json"
    };
    const fetch = await fetchPolyfill();
    const res = await fetch(url3, {
      method: "POST",
      headers,
      body: JSON.stringify(json),
      signal: options2?.signal
    });
    xwarn(res, "POST", path);
    return res;
  }
  async #patch(path, json, options2) {
    const url3 = urljoin(this.#baseUrl, path);
    const headers = {
      Authorization: `Bearer ${this.#secret}`,
      "Content-Type": "application/json"
    };
    const fetch = await fetchPolyfill();
    const res = await fetch(url3, {
      method: "PATCH",
      headers,
      body: JSON.stringify(json),
      signal: options2?.signal
    });
    xwarn(res, "PATCH", path);
    return res;
  }
  async #putBinary(path, body, params, options2) {
    const url3 = urljoin(this.#baseUrl, path, params);
    const headers = {
      Authorization: `Bearer ${this.#secret}`,
      "Content-Type": "application/octet-stream"
    };
    const fetch = await fetchPolyfill();
    const res = await fetch(url3, {
      method: "PUT",
      headers,
      body,
      signal: options2?.signal
    });
    xwarn(res, "PUT", path);
    return res;
  }
  async #delete(path, params, options2) {
    const url3 = urljoin(this.#baseUrl, path, params);
    const headers = {
      Authorization: `Bearer ${this.#secret}`
    };
    const fetch = await fetchPolyfill();
    const res = await fetch(url3, {
      method: "DELETE",
      headers,
      signal: options2?.signal
    });
    xwarn(res, "DELETE", path);
    return res;
  }
  async #get(path, params, options2) {
    const url3 = urljoin(this.#baseUrl, path, params);
    const headers = {
      Authorization: `Bearer ${this.#secret}`
    };
    const fetch = await fetchPolyfill();
    const res = await fetch(url3, {
      method: "GET",
      headers,
      signal: options2?.signal
    });
    xwarn(res, "GET", path);
    return res;
  }
  /* -------------------------------------------------------------------------------------------------
   * Authentication
   * -----------------------------------------------------------------------------------------------*/
  /**
   * Prepares a new session to authorize a user to access Liveblocks.
   *
   * IMPORTANT:
   * Always make sure that you trust the user making the request to your
   * backend before calling .prepareSession()!
   *
   * @param userId Tell Liveblocks the user ID of the user to authorize. Must
   * uniquely identify the user account in your system. The uniqueness of this
   * value will determine how many MAUs will be counted/billed.
   *
   * @param options.organizationId (optional) The organization ID to authorize the user for.
   *
   * @param options.userInfo Custom metadata to attach to this user. Data you
   * add here will be visible to all other clients in the room, through the
   * `other.info` property.
   *
   */
  prepareSession(userId, ...rest) {
    const options2 = rest[0];
    return new Session(
      this.#post.bind(this),
      userId,
      options2?.userInfo,
      options2?.organizationId ?? options2?.tenantId,
      this.#localDev
    );
  }
  /**
   * Call this to authenticate the user as an actor you want to allow to use
   * Liveblocks.
   *
   * You should use this method only if you want to manage your permissions
   * through the Liveblocks Permissions API. This method is more complicated to
   * set up, but allows for finer-grained specification of permissions.
   *
   * Calling `.identifyUser()` only lets you securely identify a user (and what
   * groups they belong to). What permissions this user will end up having is
   * determined by whatever permissions you assign the user/group in your
   * Liveblocks account, through the Permissions API:
   * https://liveblocks.io/docs/rooms/permissions
   *
   * IMPORTANT:
   * Always verify that you trust the user making the request before calling
   * .identifyUser()!
   *
   * @param identity Tell Liveblocks the user ID of the user to authenticate.
   * Must uniquely identify the user account in your system. The uniqueness of
   * this value will determine how many MAUs will be counted/billed.
   *
   * If you also want to assign which groups this user belongs to, use the
   * object form and specify the `groupIds` property. Those `groupIds` should
   * match the groupIds you assigned permissions to via the Liveblocks
   * Permissions API, see
   * https://liveblocks.io/docs/rooms/permissions#permissions-levels-groups-accesses-example
   *
   * @param options.userInfo Custom metadata to attach to this user. Data you
   * add here will be visible to all other clients in the room, through the
   * `other.info` property.
   */
  // These fields define the security identity of the user. Whatever you pass in here will define which
  async identifyUser(identity4, ...rest) {
    const options2 = rest[0];
    const path = url`/v2/identify-user`;
    const { userId, groupIds, tenantId, organizationId } = typeof identity4 === "string" ? {
      userId: identity4,
      groupIds: void 0,
      tenantId: void 0,
      organizationId: void 0
    } : identity4;
    assertNonEmpty(userId, "userId");
    const body = {
      userId,
      groupIds,
      userInfo: options2?.userInfo
    };
    if (organizationId !== void 0) {
      body.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      body.organizationId = tenantId;
    }
    try {
      const resp = await this.#post(path, body);
      return {
        status: normalizeStatusCode(resp.status),
        body: await resp.text()
      };
    } catch (er) {
      return {
        status: 503,
        body: this.#localDev ? "Could not connect to your Liveblocks dev server. Is it running?" : `Call to ${urljoin(
          this.#baseUrl,
          path
        )} failed. See "error" for more information.`,
        error: er
      };
    }
  }
  /* -------------------------------------------------------------------------------------------------
   * Room
   * -----------------------------------------------------------------------------------------------*/
  /**
   * Returns a list of your rooms. The rooms are returned sorted by creation date, from newest to oldest. You can filter rooms by metadata, users accesses and groups accesses.
   * @param params.limit (optional) A limit on the number of rooms to be returned. The limit can range between 1 and 100, and defaults to 20.
   * @param params.startingAfter (optional) A cursor used for pagination. You get the value from the response of the previous page.
   * @param params.userId (optional) A filter on users accesses.
   * @param params.metadata (optional) A filter on metadata. Multiple metadata keys can be used to filter rooms.
   * @param params.groupIds (optional) A filter on groups accesses. Multiple groups can be used.
   * @param params.organizationId (optional) A filter on organization ID.
   * @param params.query (optional) A query to filter rooms by. It is based on our query language. You can filter by metadata and room ID.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A list of rooms.
   */
  async getRooms(params = {}, options2) {
    const path = url`/v2/rooms`;
    let query;
    if (typeof params.query === "string") {
      query = params.query;
    } else if (typeof params.query === "object") {
      query = objectToQuery(params.query);
    }
    const queryParams = {
      limit: params.limit,
      startingAfter: params.startingAfter,
      userId: params.userId,
      groupIds: params.groupIds ? params.groupIds.join(",") : void 0,
      query
    };
    if (params.organizationId !== void 0) {
      queryParams.organizationId = params.organizationId;
    } else if (params.tenantId !== void 0) {
      queryParams.organizationId = params.tenantId;
    }
    const res = await this.#get(path, queryParams, options2);
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    const rooms = page.data.map(inflateRoomData);
    return {
      ...page,
      data: rooms
    };
  }
  /**
   * Iterates over all rooms that match the given criteria.
   *
   * The difference with .getRooms() is that pagination will happen
   * automatically under the hood, using the given `pageSize`.
   *
   * @param criteria.userId (optional) A filter on users accesses.
   * @param criteria.groupIds (optional) A filter on groups accesses. Multiple groups can be used.
   * @param criteria.query.roomId (optional) A filter by room ID.
   * @param criteria.query.metadata (optional) A filter by metadata.
   *
   * @param options.pageSize (optional) The page size to use for each request.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async *iterRooms(criteria, options2) {
    const { signal } = options2 ?? {};
    const pageSize = checkBounds("pageSize", options2?.pageSize ?? 40, 20);
    let cursor = void 0;
    while (true) {
      const { nextCursor, data } = await this.getRooms(
        { ...criteria, startingAfter: cursor, limit: pageSize },
        { signal }
      );
      for (const item of data) {
        yield item;
      }
      if (!nextCursor) {
        break;
      }
      cursor = nextCursor;
    }
  }
  /**
   * Creates a new room with the given id.
   * @param roomId The id of the room to create.
   * @param params.defaultAccesses The default accesses for the room.
   * @param params.groupsAccesses (optional) The group accesses for the room. Can contain a maximum of 100 entries. Key length has a limit of 40 characters.
   * @param params.usersAccesses (optional) The user accesses for the room. Can contain a maximum of 100 entries. Key length has a limit of 40 characters.
   * @param params.metadata (optional) The metadata for the room. Supports upto a maximum of 50 entries. Key length has a limit of 40 characters. Value length has a limit of 256 characters.
   * @param params.organizationId (optional) The organization ID to create the room for.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The created room.
   */
  async createRoom(roomId, params, options2) {
    const {
      defaultAccesses,
      groupsAccesses,
      usersAccesses,
      metadata,
      tenantId,
      organizationId
    } = params;
    const body = {
      id: roomId,
      defaultAccesses,
      groupsAccesses,
      usersAccesses,
      metadata
    };
    if (organizationId !== void 0) {
      body.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      body.organizationId = tenantId;
    }
    const res = await this.#post(
      options2?.idempotent ? url`/v2/rooms?idempotent` : url`/v2/rooms`,
      body,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateRoomData(data);
  }
  /**
   * Returns a room with the given id, or creates one with the given creation
   * options if it doesn't exist yet.
   *
   * @param roomId The id of the room.
   * @param params.defaultAccesses The default accesses for the room if the room will be created.
   * @param params.groupsAccesses (optional) The group accesses for the room if the room will be created. Can contain a maximum of 100 entries. Key length has a limit of 40 characters.
   * @param params.usersAccesses (optional) The user accesses for the room if the room will be created. Can contain a maximum of 100 entries. Key length has a limit of 40 characters.
   * @param params.metadata (optional) The metadata for the room if the room will be created. Supports upto a maximum of 50 entries. Key length has a limit of 40 characters. Value length has a limit of 256 characters.
   * @param params.organizationId (optional) The organization ID to create the room for.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The room.
   */
  async getOrCreateRoom(roomId, params, options2) {
    return await this.createRoom(roomId, params, {
      ...options2,
      idempotent: true
    });
  }
  /**
   * Updates or creates a new room with the given properties.
   *
   * @param roomId The id of the room to update or create.
   * @param update The fields to update. These values will be updated when the room exists, or set when the room does not exist and gets created. Must specify at least one key.
   * @param create (optional) The fields to only use when the room does not exist and will be created. When the room already exists, these values are ignored.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The room.
   */
  async upsertRoom(roomId, params, options2) {
    const res = await this.#post(
      url`/v2/rooms/${roomId}/upsert`,
      params,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateRoomData(data);
  }
  /**
   * Returns a room with the given id.
   * @param roomId The id of the room to return.
   * @returns The room with the given id.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getRoom(roomId, options2) {
    const res = await this.#get(url`/v2/rooms/${roomId}`, void 0, options2);
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateRoomData(data);
  }
  /**
   * Updates specific properties of a room. It’s not necessary to provide the entire room’s information.
   * Setting a property to `null` means to delete this property.
   * @param roomId The id of the room to update.
   * @param params.defaultAccesses (optional) The default accesses for the room.
   * @param params.groupsAccesses (optional) The group accesses for the room. Can contain a maximum of 100 entries. Key length has a limit of 40 characters.
   * @param params.usersAccesses (optional) The user accesses for the room. Can contain a maximum of 100 entries. Key length has a limit of 40 characters.
   * @param params.metadata (optional) The metadata for the room. Supports upto a maximum of 50 entries. Key length has a limit of 40 characters. Value length has a limit of 256 characters.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The updated room.
   */
  async updateRoom(roomId, params, options2) {
    const { defaultAccesses, groupsAccesses, usersAccesses, metadata } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}`,
      {
        defaultAccesses,
        groupsAccesses,
        usersAccesses,
        metadata
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateRoomData(data);
  }
  /**
   * Deletes a room with the given id. A deleted room is no longer accessible from the API or the dashboard and it cannot be restored.
   * @param roomId The id of the room to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteRoom(roomId, options2) {
    const res = await this.#delete(
      url`/v2/rooms/${roomId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Prepares a room for connectivity, making the eventual connection faster. Use this when you know you'll be loading a room but are not yet connected to it.
   * @param roomId The id of the room to prewarm.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async prewarmRoom(roomId, options2) {
    const res = await this.#get(
      url`/v2/rooms/${roomId}/prewarm`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Returns a list of users currently present in the requested room. For better performance, we recommand to call this endpoint every 10 seconds maximum. Duplicates can happen if a user is in the requested room with multiple browser tabs opened.
   * @param roomId The id of the room to get the users from.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A list of users currently present in the requested room.
   */
  async getActiveUsers(roomId, options2) {
    const res = await this.#get(
      url`/v2/rooms/${roomId}/active_users`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Boadcasts an event to a room without having to connect to it via the client from @liveblocks/client. The connectionId passed to event listeners is -1 when using this API.
   * @param roomId The id of the room to broadcast the event to.
   * @param message The message to broadcast. It can be any JSON serializable value.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async broadcastEvent(roomId, message, options2) {
    const res = await this.#post(
      url`/v2/rooms/${roomId}/broadcast_event`,
      message,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Sets ephemeral presence for a user in a room without requiring a WebSocket connection.
   * The presence data will automatically expire after the specified TTL.
   * This is useful for scenarios like showing an AI agent's presence in a room.
   *
   * @param roomId The id of the room to set presence in.
   * @param params.userId The ID of the user to set presence for.
   * @param params.data The presence data as a JSON object.
   * @param params.userInfo (optional) Metadata about the user or agent
   * @param params.ttl (optional) Time-to-live in seconds. If not specified, the default TTL is 60 seconds. (minimum: 2, maximum: 3599).
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async setPresence(roomId, params, options2) {
    const res = await this.#post(
      url`/v2/rooms/${roomId}/presence`,
      {
        userId: params.userId,
        data: params.data,
        userInfo: params.userInfo,
        ttl: params.ttl
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  async getStorageDocument(roomId, format = "plain-lson", options2) {
    const res = await this.#get(
      url`/v2/rooms/${roomId}/storage`,
      { format },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  async #requestStorageMutation(roomId, options2) {
    const resp = await this.#post(
      url`/v2/rooms/${roomId}/request-storage-mutation`,
      {},
      options2
    );
    if (!resp.ok) {
      throw await LiveblocksError.from(resp);
    }
    if (resp.headers.get("content-type") !== "application/x-ndjson") {
      throw new Error("Unexpected response content type");
    }
    if (resp.body === null) {
      throw new Error("Unexpected null body in response");
    }
    const stream = resp.body.pipeThrough(new TextDecoderStream()).pipeThrough(new LineStream()).pipeThrough(new NdJsonStream());
    const iter = stream[Symbol.asyncIterator]();
    const first = (await iter.next()).value;
    if (!isPlainObject(first) || typeof first.actor !== "number") {
      throw new Error("Failed to obtain a unique session");
    }
    const nodes = await asyncConsume(iter);
    return { actor: first.actor, nodes };
  }
  /**
   * Initializes a room’s Storage. The room must already exist and have an empty Storage.
   * Calling this endpoint will disconnect all users from the room if there are any.
   *
   * @param roomId The id of the room to initialize the storage from.
   * @param document The document to initialize the storage with.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The initialized storage document. It is of the same format as the one passed in.
   */
  async initializeStorageDocument(roomId, document2, options2) {
    const res = await this.#post(
      url`/v2/rooms/${roomId}/storage`,
      document2,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Deletes all of the room’s Storage data and disconnect all users from the room if there are any. Note that this does not delete the Yjs document in the room if one exists.
   * @param roomId The id of the room to delete the storage from.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteStorageDocument(roomId, options2) {
    const res = await this.#delete(
      url`/v2/rooms/${roomId}/storage`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /* -------------------------------------------------------------------------------------------------
   * Yjs
   * -----------------------------------------------------------------------------------------------*/
  /**
   * Returns a JSON representation of the room’s Yjs document.
   * @param roomId The id of the room to get the Yjs document from.
   * @param params.format (optional) If true, YText will return formatting.
   * @param params.key (optional) If provided, returns only a single key’s value, e.g. doc.get(key).toJSON().
   * @param params.type (optional) Used with key to override the inferred type, i.e. "ymap" will return doc.get(key, Y.Map).
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A JSON representation of the room’s Yjs document.
   */
  async getYjsDocument(roomId, params = {}, options2) {
    const { format, key, type } = params;
    const path = url`v2/rooms/${roomId}/ydoc`;
    const res = await this.#get(
      path,
      { formatting: format ? "true" : void 0, key, type },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Send a Yjs binary update to the room’s Yjs document. You can use this endpoint to initialize Yjs data for the room or to update the room’s Yjs document.
   * @param roomId The id of the room to send the Yjs binary update to.
   * @param update The Yjs update to send. Typically the result of calling `Yjs.encodeStateAsUpdate(doc)`. Read the [Yjs documentation](https://docs.yjs.dev/api/document-updates) to learn how to create a binary update.
   * @param params.guid (optional) If provided, the binary update will be applied to the Yjs subdocument with the given guid. If not provided, the binary update will be applied to the root Yjs document.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async sendYjsBinaryUpdate(roomId, update, params = {}, options2) {
    const res = await this.#putBinary(
      url`/v2/rooms/${roomId}/ydoc`,
      update,
      { guid: params.guid },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Returns the room’s Yjs document encoded as a single binary update. This can be used by Y.applyUpdate(responseBody) to get a copy of the document in your backend.
   * See [Yjs documentation](https://docs.yjs.dev/api/document-updates) for more information on working with updates.
   * @param roomId The id of the room to get the Yjs document from.
   * @param params.guid (optional) If provided, returns the binary update of the Yjs subdocument with the given guid. If not provided, returns the binary update of the root Yjs document.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The room’s Yjs document encoded as a single binary update.
   */
  async getYjsDocumentAsBinaryUpdate(roomId, params = {}, options2) {
    const res = await this.#get(
      url`/v2/rooms/${roomId}/ydoc-binary`,
      { guid: params.guid },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return res.arrayBuffer();
  }
  /* -------------------------------------------------------------------------------------------------
   * Comments
   * -----------------------------------------------------------------------------------------------*/
  /**
   * Gets all the threads in a room.
   *
   * @param params.roomId The room ID to get the threads from.
   * @param params.query The query to filter threads by. It is based on our query language and can filter by metadata.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A list of threads.
   */
  async getThreads(params, options2) {
    const { roomId } = params;
    let query;
    if (typeof params.query === "string") {
      query = params.query;
    } else if (typeof params.query === "object") {
      query = objectToQuery(params.query);
    }
    const res = await this.#get(
      url`/v2/rooms/${roomId}/threads`,
      { query },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const { data } = await res.json();
    return {
      data: data.map((thread) => convertToThreadData(thread))
    };
  }
  /**
   * Gets a thread.
   *
   * @param params.roomId The room ID to get the thread from.
   * @param params.threadId The thread ID.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A thread.
   */
  async getThread(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/threads/${threadId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToThreadData(await res.json());
  }
  /**
   * @deprecated Prefer using `getMentionsFromCommentBody` to extract mentions
   * from comments and threads, or `Liveblocks.getThreadSubscriptions` to get
   * the list of users who are subscribed to a thread.
   *
   * Gets a thread's participants.
   *
   * Participants are users who have commented on the thread
   * or users that have been mentioned in a comment.
   *
   * @param params.roomId The room ID to get the thread participants from.
   * @param params.threadId The thread ID to get the participants from.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns An object containing an array of participant IDs.
   */
  async getThreadParticipants(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/threads/${threadId}/participants`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Gets a thread's subscriptions.
   *
   * @param params.roomId The room ID to get the thread subscriptions from.
   * @param params.threadId The thread ID to get the subscriptions from.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns An array of subscriptions.
   */
  async getThreadSubscriptions(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/threads/${threadId}/subscriptions`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const { data } = await res.json();
    return {
      data: data.map(convertToUserSubscriptionData)
    };
  }
  /**
   * Gets a thread's comment.
   *
   * @param params.roomId The room ID to get the comment from.
   * @param params.threadId The thread ID to get the comment from.
   * @param params.commentId The comment ID.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A comment.
   */
  async getComment(params, options2) {
    const { roomId, threadId, commentId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments/${commentId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToCommentData(await res.json());
  }
  /**
   * Creates a comment.
   *
   * @param params.roomId The room ID to create the comment in.
   * @param params.threadId The thread ID to create the comment in.
   * @param params.data.userId The user ID of the user who is set to create the comment.
   * @param params.data.createdAt (optional) The date the comment is set to be created.
   * @param params.data.body The body of the comment.
   * @param params.data.metadata (optional) The metadata for the comment.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The created comment.
   */
  async createComment(params, options2) {
    const { roomId, threadId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments`,
      {
        ...data,
        createdAt: data.createdAt?.toISOString()
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToCommentData(await res.json());
  }
  /**
   * Edits a comment.
   * @param params.roomId The room ID to edit the comment in.
   * @param params.threadId The thread ID to edit the comment in.
   * @param params.commentId The comment ID to edit.
   * @param params.data.body The body of the comment.
   * @param params.data.metadata (optional) The metadata for the comment. Value must be a string, boolean or number. Use null to delete a key.
   * @param params.data.editedAt (optional) The date the comment was edited.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The edited comment.
   */
  async editComment(params, options2) {
    const { roomId, threadId, commentId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments/${commentId}`,
      {
        body: data.body,
        editedAt: data.editedAt?.toISOString(),
        metadata: data.metadata
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToCommentData(await res.json());
  }
  /**
   * Deletes a comment. Deletes a comment. If there are no remaining comments in the thread, the thread is also deleted.
   * @param params.roomId The room ID to delete the comment in.
   * @param params.threadId The thread ID to delete the comment in.
   * @param params.commentId The comment ID to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteComment(params, options2) {
    const { roomId, threadId, commentId } = params;
    const res = await this.#delete(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments/${commentId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Gets an attachment's metadata and a presigned download URL.
   *
   * @param params.roomId The room ID the attachment belongs to.
   * @param params.attachmentId The attachment ID (starts with "at_").
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The attachment metadata including a presigned download URL.
   */
  async getAttachment(params, options2) {
    const { roomId, attachmentId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/attachments/${attachmentId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Creates a new thread. The thread will be created with the specified comment as its first comment.
   * If the thread already exists, a `LiveblocksError` will be thrown with status code 409.
   * @param params.roomId The room ID to create the thread in.
   * @param params.thread.metadata (optional) The metadata for the thread. Supports upto a maximum of 10 entries. Value must be a string, boolean or number
   * @param params.thread.comment.userId The user ID of the user who created the comment.
   * @param params.thread.comment.createdAt (optional) The date the comment was created.
   * @param params.thread.comment.body The body of the comment.
   * @param params.thread.comment.metadata (optional) The metadata for the comment.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The created thread. The thread will be created with the specified comment as its first comment.
   */
  async createThread(params, options2) {
    const { roomId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads`,
      {
        ...data,
        comment: {
          ...data.comment,
          createdAt: data.comment.createdAt?.toISOString()
        }
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToThreadData(await res.json());
  }
  /**
   * Deletes a thread and all of its comments.
   * @param params.roomId The room ID to delete the thread in.
   * @param params.threadId The thread ID to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteThread(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#delete(
      url`/v2/rooms/${roomId}/threads/${threadId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Mark a thread as resolved.
   * @param params.roomId The room ID of the thread.
   * @param params.threadId The thread ID to mark as resolved.
   * @param params.data.userId The user ID of the user who marked the thread as resolved.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The thread marked as resolved.
   */
  async markThreadAsResolved(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/mark-as-resolved`,
      { userId: params.data.userId },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToThreadData(await res.json());
  }
  /**
   * Mark a thread as unresolved.
   * @param params.roomId The room ID of the thread.
   * @param params.threadId The thread ID to mark as unresolved.
   * @param params.data.userId The user ID of the user who marked the thread as unresolved.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The thread marked as unresolved.
   */
  async markThreadAsUnresolved(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/mark-as-unresolved`,
      { userId: params.data.userId },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToThreadData(await res.json());
  }
  /**
   * Subscribes a user to a thread.
   * @param params.roomId The room ID of the thread.
   * @param params.threadId The thread ID to subscribe to.
   * @param params.data.userId The user ID of the user to subscribe to the thread.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The thread subscription.
   */
  async subscribeToThread(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/subscribe`,
      { userId: params.data.userId },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToSubscriptionData(
      await res.json()
    );
  }
  /**
   * Unsubscribes a user from a thread.
   * @param params.roomId The room ID of the thread.
   * @param params.threadId The thread ID to unsubscribe from.
   * @param params.data.userId The user ID of the user to unsubscribe from the thread.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async unsubscribeFromThread(params, options2) {
    const { roomId, threadId } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/unsubscribe`,
      { userId: params.data.userId },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Updates the metadata of the specified thread in a room.
   * @param params.roomId The room ID to update the thread in.
   * @param params.threadId The thread ID to update.
   * @param params.data.metadata The metadata for the thread. Value must be a string, boolean or number
   * @param params.data.userId The user ID of the user who updated the thread.
   * @param params.data.updatedAt (optional) The date the thread is set to be updated.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The updated thread metadata.
   */
  async editThreadMetadata(params, options2) {
    const { roomId, threadId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/metadata`,
      {
        ...data,
        updatedAt: data.updatedAt?.toISOString()
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Updates the metadata of the specified comment in a room.
   * @param params.roomId The room ID to update the comment in.
   * @param params.threadId The thread ID to update the comment in.
   * @param params.commentId The comment ID to update.
   * @param params.data.metadata The metadata for the comment. Value must be a string, boolean or number. Use null to delete a key.
   * @param params.data.userId The user ID of the user who updated the comment.
   * @param params.data.updatedAt (optional) The date the comment metadata is set to be updated.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The updated comment metadata.
   */
  async editCommentMetadata(params, options2) {
    const { roomId, threadId, commentId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments/${commentId}/metadata`,
      {
        ...data,
        updatedAt: data.updatedAt?.toISOString()
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Adds a new comment reaction to a comment.
   * @param params.roomId The room ID to add the comment reaction in.
   * @param params.threadId The thread ID to add the comment reaction in.
   * @param params.commentId The comment ID to add the reaction in.
   * @param params.data.emoji The (emoji) reaction to add.
   * @param params.data.userId The user ID of the user associated with the reaction.
   * @param params.data.createdAt (optional) The date the reaction is set to be created.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The created comment reaction.
   */
  async addCommentReaction(params, options2) {
    const { roomId, threadId, commentId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments/${commentId}/add-reaction`,
      {
        ...data,
        createdAt: data.createdAt?.toISOString()
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const reaction = await res.json();
    return convertToCommentUserReaction(reaction);
  }
  /**
   * Removes a reaction from a comment.
   * @param params.roomId The room ID to remove the comment reaction from.
   * @param params.threadId The thread ID to remove the comment reaction from.
   * @param params.commentId The comment ID to remove the reaction from.
   * @param params.data.emoji The (emoji) reaction to remove.
   * @param params.data.userId The user ID of the user associated with the reaction.
   * @param params.data.removedAt (optional) The date the reaction is set to be removed.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async removeCommentReaction(params, options2) {
    const { roomId, threadId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/threads/${threadId}/comments/${params.commentId}/remove-reaction`,
      {
        ...data,
        removedAt: data.removedAt?.toISOString()
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Returns the inbox notifications for a user.
   * @param params.userId The user ID to get the inbox notifications from.
   * @param params.inboxNotificationId The ID of the inbox notification to get.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getInboxNotification(params, options2) {
    const { userId, inboxNotificationId } = params;
    const res = await this.#get(
      url`/v2/users/${userId}/inbox-notifications/${inboxNotificationId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return convertToInboxNotificationData(
      await res.json()
    );
  }
  /**
   * Returns the inbox notifications for a user.
   * @param params.userId The user ID to get the inbox notifications from.
   * @param params.query The query to filter inbox notifications by. It is based on our query language and can filter by unread.
   * @param params.organizationId (optional) The organization ID to get the inbox notifications for.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getInboxNotifications(params, options2) {
    const { userId, tenantId, organizationId, limit, startingAfter } = params;
    let query;
    if (typeof params.query === "string") {
      query = params.query;
    } else if (typeof params.query === "object") {
      query = objectToQuery(params.query);
    }
    const queryParams = {
      query,
      limit,
      startingAfter
    };
    if (organizationId !== void 0) {
      queryParams.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      queryParams.organizationId = tenantId;
    }
    const res = await this.#get(
      url`/v2/users/${userId}/inbox-notifications`,
      queryParams,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    return {
      ...page,
      data: page.data.map(convertToInboxNotificationData)
    };
  }
  /**
   * Iterates over all inbox notifications for a user.
   *
   * The difference with .getInboxNotifications() is that pagination will
   * happen automatically under the hood, using the given `pageSize`.
   *
   * @param criteria.userId The user ID to get the inbox notifications from.
   * @param criteria.query The query to filter inbox notifications by. It is based on our query language and can filter by unread.
   * @param criteria.organizationId (optional) The organization ID to get the inbox notifications for.
   * @param options.pageSize (optional) The page size to use for each request.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async *iterInboxNotifications(criteria, options2) {
    const { signal } = options2 ?? {};
    const pageSize = checkBounds("pageSize", options2?.pageSize ?? 50, 10);
    let cursor = void 0;
    while (true) {
      const { nextCursor, data } = await this.getInboxNotifications(
        { ...criteria, startingAfter: cursor, limit: pageSize },
        { signal }
      );
      for (const item of data) {
        yield item;
      }
      if (!nextCursor) {
        break;
      }
      cursor = nextCursor;
    }
  }
  /**
   * Returns all room subscription settings for a user.
   * @param params.userId The user ID to get the room subscription settings from.
   * @param params.organizationId (optional) The organization ID to get the room subscription settings for.
   * @param params.startingAfter (optional) The cursor to start the pagination from.
   * @param params.limit (optional) The number of items to return.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getUserRoomSubscriptionSettings(params, options2) {
    const { userId, tenantId, organizationId, startingAfter, limit } = params;
    const queryParams = {
      startingAfter,
      limit
    };
    if (organizationId !== void 0) {
      queryParams.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      queryParams.organizationId = tenantId;
    }
    const res = await this.#get(
      url`/v2/users/${userId}/room-subscription-settings`,
      queryParams,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Gets the user's room subscription settings.
   * @param params.userId The user ID to get the room subscription settings from.
   * @param params.roomId The room ID to get the room subscription settings from.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getRoomSubscriptionSettings(params, options2) {
    const { userId, roomId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/users/${userId}/subscription-settings`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Updates the user's room subscription settings.
   * @param params.userId The user ID to update the room subscription settings for.
   * @param params.roomId The room ID to update the room subscription settings for.
   * @param params.data The new room subscription settings for the user.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async updateRoomSubscriptionSettings(params, options2) {
    const { userId, roomId, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/users/${userId}/subscription-settings`,
      data,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Delete the user's room subscription settings.
   * @param params.userId The user ID to delete the room subscription settings from.
   * @param params.roomId The room ID to delete the room subscription settings from.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteRoomSubscriptionSettings(params, options2) {
    const { userId, roomId } = params;
    const res = await this.#delete(
      url`/v2/rooms/${roomId}/users/${userId}/subscription-settings`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Update a room ID.
   * @param params.roomId The current ID of the room.
   * @param params.newRoomId The new room ID.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async updateRoomId(params, options2) {
    const { currentRoomId, newRoomId } = params;
    const res = await this.#post(
      url`/v2/rooms/${currentRoomId}/update-room-id`,
      { newRoomId },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateRoomData(data);
  }
  /**
   * Triggers an inbox notification for a user.
   * @param params.userId The user ID to trigger the inbox notification for.
   * @param params.kind The kind of inbox notification to trigger.
   * @param params.subjectId The subject ID of the triggered inbox notification.
   * @param params.activityData The activity data of the triggered inbox notification.
   * @param params.roomId (optional) The room ID to trigger the inbox notification for.
   * @param params.organizationId (optional) The organization ID to trigger the inbox notification for.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async triggerInboxNotification(params, options2) {
    const { tenantId, organizationId, ...restParams } = params;
    const body = {
      ...restParams
    };
    if (organizationId !== void 0) {
      body.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      body.organizationId = tenantId;
    }
    const res = await this.#post(
      url`/v2/inbox-notifications/trigger`,
      body,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Deletes an inbox notification for a user.
   * @param params.userId The user ID for which to delete the inbox notification.
   * @param params.inboxNotificationId The ID of the inbox notification to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteInboxNotification(params, options2) {
    const { userId, inboxNotificationId } = params;
    const res = await this.#delete(
      url`/v2/users/${userId}/inbox-notifications/${inboxNotificationId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Deletes all inbox notifications for a user.
   * @param params.userId The user ID for which to delete all the inbox notifications.
   * @param params.organizationId (optional) The organization ID to delete the inbox notifications for.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteAllInboxNotifications(params, options2) {
    const { userId, tenantId, organizationId } = params;
    const queryParams = {};
    if (organizationId !== void 0) {
      queryParams.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      queryParams.organizationId = tenantId;
    }
    const res = await this.#delete(
      url`/v2/users/${userId}/inbox-notifications`,
      queryParams,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Get notification settings for a user for a project.
   * @param params.userId The user ID to get the notifications settings for.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getNotificationSettings(params, options2) {
    const { userId } = params;
    const res = await this.#get(
      url`/v2/users/${userId}/notification-settings`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const plainSettings = await res.json();
    const settings = createNotificationSettings(plainSettings);
    return settings;
  }
  /**
   * Update the user's notification settings.
   * @param params.userId The user ID to update the notification settings for.
   * @param params.data The new notification settings for the user.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async updateNotificationSettings(params, options2) {
    const { userId, data } = params;
    const res = await this.#post(
      url`/v2/users/${userId}/notification-settings`,
      data,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const plainSettings = await res.json();
    const settings = createNotificationSettings(plainSettings);
    return settings;
  }
  /**
   * Delete the user's notification settings
   * @param params.userId The user ID to update the notification settings for.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteNotificationSettings(params, options2) {
    const { userId } = params;
    const res = await this.#delete(
      url`/v2/users/${userId}/notification-settings`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Create a group
   * @param params.groupId The ID of the group to create.
   * @param params.memberIds The IDs of the members to add to the group.
   * @param params.organizationId (optional) The organization ID to create the group for.
   * @param params.scopes (optional) The scopes to grant to the group. The default is `{ mention: true }`.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async createGroup(params, options2) {
    const { tenantId, organizationId, ...restParams } = params;
    const body = {
      ...restParams,
      // The REST API uses `id` since a group is a resource,
      // but we use `groupId` here for consistency with the other methods.
      id: params.groupId
    };
    if (organizationId !== void 0) {
      body.organizationId = organizationId;
    } else if (tenantId !== void 0) {
      body.organizationId = tenantId;
    }
    const res = await this.#post(url`/v2/groups`, body, options2);
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const group = await res.json();
    return convertToGroupData(group);
  }
  /**
   * Get a group
   * @param params.groupId The ID of the group to get.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getGroup(params, options2) {
    const res = await this.#get(
      url`/v2/groups/${params.groupId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const group = await res.json();
    return convertToGroupData(group);
  }
  /**
   * Add members to a group
   * @param params.groupId The ID of the group to add members to.
   * @param params.memberIds The IDs of the members to add to the group.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async addGroupMembers(params, options2) {
    const res = await this.#post(
      url`/v2/groups/${params.groupId}/add-members`,
      { memberIds: params.memberIds },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const group = await res.json();
    return convertToGroupData(group);
  }
  /**
   * Remove members from a group
   * @param params.groupId The ID of the group to remove members from.
   * @param params.memberIds The IDs of the members to remove from the group.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async removeGroupMembers(params, options2) {
    const res = await this.#post(
      url`/v2/groups/${params.groupId}/remove-members`,
      { memberIds: params.memberIds },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const group = await res.json();
    return convertToGroupData(group);
  }
  /**
   * Delete a group
   * @param params.groupId The ID of the group to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteGroup(params, options2) {
    const res = await this.#delete(
      url`/v2/groups/${params.groupId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Get all groups
   * @param params.limit (optional) The number of groups to return.
   * @param params.startingAfter (optional) The cursor to start the pagination from.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getGroups(params, options2) {
    const res = await this.#get(
      url`/v2/groups`,
      { startingAfter: params?.startingAfter, limit: params?.limit },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    return {
      ...page,
      data: page.data.map(convertToGroupData)
    };
  }
  /**
   * Returns all groups a user is a member of.
   * @param params.userId The user ID to get the groups for.
   * @param params.startingAfter (optional) The cursor to start the pagination from.
   * @param params.limit (optional) The number of items to return.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getUserGroups(params, options2) {
    const { userId, startingAfter, limit } = params;
    const res = await this.#get(
      url`/v2/users/${userId}/groups`,
      { startingAfter, limit },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    return {
      ...page,
      data: page.data.map(convertToGroupData)
    };
  }
  /**
   * Retrieves the current Storage contents for the given room ID and calls the
   * provided callback function, in which you can mutate the Storage contents
   * at will.
   *
   * If you need to run the same mutation across multiple rooms, prefer using
   * `.massMutateStorage()` instead of looping over room IDs yourself.
   */
  async mutateStorage(roomId, callback, options2) {
    return this.#_mutateOneRoom(roomId, void 0, callback, options2);
  }
  /**
   * Retrieves the Storage contents for each room that matches the given
   * criteria and calls the provided callback function, in which you can mutate
   * the Storage contents at will.
   *
   * You can use the `criteria` parameter to select which rooms to process by
   * their metadata. If you pass `{}` (empty object), all rooms will be
   * selected and processed.
   *
   * This method will execute mutations in parallel, using the specified
   * `concurrency` value. If you which to run the mutations serially, set
   * `concurrency` to 1.
   */
  async massMutateStorage(criteria, callback, massOptions) {
    const concurrency = checkBounds(
      "concurrency",
      massOptions?.concurrency ?? 8,
      1,
      20
    );
    const pageSize = Math.max(20, concurrency * 4);
    const { signal } = massOptions ?? {};
    const rooms = this.iterRooms(criteria, { pageSize, signal });
    const options2 = { signal };
    await runConcurrently(
      rooms,
      (roomData) => this.#_mutateOneRoom(roomData.id, roomData, callback, options2),
      concurrency
    );
  }
  async #_mutateOneRoom(roomId, room, callback, options2) {
    const debounceInterval = 200;
    const { signal, abort } = makeAbortController(options2?.signal);
    let opsBuffer = [];
    let outstandingFlush$ = void 0;
    let lastFlush = performance.now();
    const flushIfNeeded = /* @__PURE__ */ __name((force) => {
      if (opsBuffer.length === 0)
        return;
      if (outstandingFlush$) {
        return;
      }
      const now2 = performance.now();
      if (!(force || now2 - lastFlush > debounceInterval)) {
        return;
      }
      lastFlush = now2;
      const ops = opsBuffer;
      opsBuffer = [];
      outstandingFlush$ = this.#sendMessage(
        roomId,
        [{ type: ClientMsgCode.UPDATE_STORAGE, ops }],
        { signal }
      ).catch((err) => {
        abort(err);
      }).finally(() => {
        outstandingFlush$ = void 0;
      });
    }, "flushIfNeeded");
    try {
      const resp = await this.#requestStorageMutation(roomId, { signal });
      const { actor, nodes } = resp;
      const pool = createManagedPool(roomId, {
        getCurrentConnectionId: /* @__PURE__ */ __name(() => actor, "getCurrentConnectionId"),
        onDispatch: /* @__PURE__ */ __name((ops, _reverse, _storageUpdates) => {
          if (ops.length === 0) return;
          for (const op of ops) {
            opsBuffer.push(op);
          }
          flushIfNeeded(
            /* force */
            false
          );
        }, "onDispatch")
      });
      const root2 = LiveObject._fromItems(nodes, pool);
      const callback$ = callback({ room, root: root2 });
      flushIfNeeded(
        /* force */
        true
      );
      await callback$;
    } catch (e) {
      abort();
      throw e;
    } finally {
      await outstandingFlush$;
      flushIfNeeded(
        /* force */
        true
      );
      await outstandingFlush$;
    }
  }
  async #sendMessage(roomId, messages, options2) {
    const res = await this.#post(
      url`/v2/rooms/${roomId}/send-message`,
      { messages },
      { signal: options2?.signal }
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Returns a paginated list of AI copilots. The copilots are returned sorted by creation date, from newest to oldest.
   * @param params.limit (optional) A limit on the number of copilots to return. The limit can range between 1 and 100, and defaults to 20.
   * @param params.startingAfter (optional) A cursor used for pagination. You get the value from the response of the previous page.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A paginated list of AI copilots.
   */
  async getAiCopilots(params = {}, options2) {
    const res = await this.#get(
      url`/v2/ai/copilots`,
      {
        limit: params.limit,
        startingAfter: params.startingAfter
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    return {
      ...page,
      data: page.data.map(inflateAiCopilot)
    };
  }
  /**
   * Creates an AI copilot.
   * @param params The parameters to create the copilot with.
   * @returns The created copilot.
   */
  async createAiCopilot(params, options2) {
    const res = await this.#post(url`/v2/ai/copilots`, params, options2);
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateAiCopilot(data);
  }
  /**
   * Returns an AI copilot with the given id.
   * @param copilotId The id of the copilot to return.
   * @returns The copilot with the given id.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async getAiCopilot(copilotId, options2) {
    const res = await this.#get(
      url`/v2/ai/copilots/${copilotId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateAiCopilot(data);
  }
  /**
   * Updates an AI copilot with the given id.
   * @param copilotId The id of the copilot to update.
   * @param params The parameters to update the copilot with.
   * @returns The updated copilot.
   */
  async updateAiCopilot(copilotId, params, options2) {
    const res = await this.#post(
      url`/v2/ai/copilots/${copilotId}`,
      params,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateAiCopilot(data);
  }
  /**
   * Deletes an AI copilot with the given id. A deleted copilot is no longer accessible from the API or the dashboard and it cannot be restored.
   * @param copilotId The id of the copilot to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteAiCopilot(copilotId, options2) {
    const res = await this.#delete(
      url`/v2/ai/copilots/${copilotId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Creates a web knowledge source.
   * @param params.url The URL of the web knowledge source.
   * @param params.type The type of the web knowledge source: "individual_link", "crawl" or "sitemap".
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The id of the created web knowledge source.
   */
  async createWebKnowledgeSource(params, options2) {
    const res = await this.#post(
      url`/v2/ai/copilots/${params.copilotId}/knowledge/web`,
      params,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return data;
  }
  /**
   * Creates a file knowledge source.
   * @param params.copilotId The id of the copilot.
   * @param params.name The name of the file knowledge source.
   * @param params.file The file to create the knowledge source from.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The id of the created file knowledge source.
   */
  async createFileKnowledgeSource(params, options2) {
    const fetch = await fetchPolyfill();
    const res = await fetch(
      urljoin(
        this.#baseUrl,
        url`/v2/ai/copilots/${params.copilotId}/knowledge/file/${params.file.name}`
      ),
      {
        method: "PUT",
        body: params.file,
        headers: {
          Authorization: `Bearer ${this.#secret}`,
          "Content-Type": params.file.type,
          "Content-Length": String(params.file.size)
        },
        signal: options2?.signal
      }
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return data;
  }
  /**
   * Deletes a file knowledge source.
   * @param params.copilotId The id of the copilot.
   * @param params.knowledgeSourceId The id of the knowledge source to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteFileKnowledgeSource(params, options2) {
    const res = await this.#delete(
      url`/v2/ai/copilots/${params.copilotId}/knowledge/file/${params.knowledgeSourceId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Deletes a web knowledge source.
   * @param params.copilotId The id of the copilot.
   * @param params.knowledgeSourceId The id of the knowledge source to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteWebKnowledgeSource(params, options2) {
    const res = await this.#delete(
      url`/v2/ai/copilots/${params.copilotId}/knowledge/web/${params.knowledgeSourceId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Returns a paginated list of knowledge sources.
   * @param params.copilotId The id of the copilot.
   * @param params.limit (optional) A limit on the number of knowledge sources to return. The limit can range between 1 and 100, and defaults to 20.
   * @param params.startingAfter (optional) A cursor used for pagination. You get the value from the response of the previous page.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A paginated list of knowledge sources.
   */
  async getKnowledgeSources(params, options2) {
    const res = await this.#get(
      url`/v2/ai/copilots/${params.copilotId}/knowledge`,
      {
        limit: params.limit,
        startingAfter: params.startingAfter
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    return {
      ...page,
      data: page.data.map(inflateKnowledgeSource)
    };
  }
  /**
   * Returns a knowledge source with the given id.
   * @param params.copilotId The id of the copilot.
   * @param params.knowledgeSourceId The id of the knowledge source to return.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The knowledge source.
   */
  async getKnowledgeSource(params, options2) {
    const res = await this.#get(
      url`/v2/ai/copilots/${params.copilotId}/knowledge/${params.knowledgeSourceId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return inflateKnowledgeSource(data);
  }
  /**
   * Returns the content of a file knowledge source.
   * @param params.copilotId The id of the copilot.
   * @param params.knowledgeSourceId The id of the knowledge source.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The content of the file knowledge source.
   */
  async getFileKnowledgeSourceMarkdown(params, options2) {
    const res = await this.#get(
      url`/v2/ai/copilots/${params.copilotId}/knowledge/file/${params.knowledgeSourceId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const data = await res.json();
    return data.content;
  }
  /**
   * Returns a paginated list of web knowledge source links.
   * @param params.copilotId The id of the copilot.
   * @param params.knowledgeSourceId The id of the knowledge source.
   * @param params.limit (optional) A limit on the number of links to return. The limit can range between 1 and 100, and defaults to 20.
   * @param params.startingAfter (optional) A cursor used for pagination. You get the value from the response of the previous page.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A paginated list of web knowledge source links.
   */
  async getWebKnowledgeSourceLinks(params, options2) {
    const res = await this.#get(
      url`/v2/ai/copilots/${params.copilotId}/knowledge/web/${params.knowledgeSourceId}/links`,
      {
        limit: params.limit,
        startingAfter: params.startingAfter
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    const page = await res.json();
    return {
      ...page,
      data: page.data.map(inflateWebKnowledgeSourceLink)
    };
  }
  /* -------------------------------------------------------------------------------------------------
   * Feeds
   * -----------------------------------------------------------------------------------------------*/
  /**
   * Returns a list of feeds in a room.
   * @param params.roomId The room ID to get the feeds from.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A list of feeds.
   */
  async getFeeds(params, options2) {
    const { roomId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/feeds`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Creates a new feed in a room.
   * @param params.roomId The room ID to create the feed in.
   * @param params.feedId The feed ID.
   * @param params.metadata (optional) The metadata for the feed.
   * @param params.createdAt (optional) Creation time in ms. Sent to the API as `timestamp`. If not provided, the server uses the current time.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The created feed.
   */
  async createFeed(params, options2) {
    const { roomId, feedId, metadata, createdAt } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/feeds`,
      {
        feedId,
        ...metadata !== void 0 ? { metadata } : {},
        ...createdAt !== void 0 ? { timestamp: createdAt } : {}
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Returns a feed with the given id.
   * @param params.roomId The room ID to get the feed from.
   * @param params.feedId The feed ID.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The feed.
   */
  async getFeed(params, options2) {
    const { roomId, feedId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/feeds/${feedId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Updates the metadata of a feed.
   * @param params.roomId The room ID to update the feed in.
   * @param params.feedId The feed ID to update.
   * @param params.metadata The metadata for the feed.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The updated feed.
   */
  async updateFeed(params, options2) {
    const { roomId, feedId, metadata } = params;
    const res = await this.#patch(
      url`/v2/rooms/${roomId}/feeds/${feedId}`,
      { metadata },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Deletes a feed.
   * @param params.roomId The room ID to delete the feed from.
   * @param params.feedId The feed ID to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteFeed(params, options2) {
    const { roomId, feedId } = params;
    const res = await this.#delete(
      url`/v2/rooms/${roomId}/feeds/${feedId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
  /**
   * Returns a list of messages in a feed.
   * @param params.roomId The room ID to get the feed messages from.
   * @param params.feedId The feed ID to get the messages from.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns A list of feed messages.
   */
  async getFeedMessages(params, options2) {
    const { roomId, feedId } = params;
    const res = await this.#get(
      url`/v2/rooms/${roomId}/feeds/${feedId}/messages`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Creates a new message in a feed.
   * @param params.roomId The room ID to create the feed message in.
   * @param params.feedId The feed ID to create the message in.
   * @param params.id (optional) The message ID. If not provided, one will be generated.
   * @param params.createdAt (optional) Creation time in ms. Sent to the API as `timestamp`. If not provided, the server uses the current time.
   * @param params.data The message data.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The created feed message.
   */
  async createFeedMessage(params, options2) {
    const { roomId, feedId, id: id2, createdAt, data } = params;
    const res = await this.#post(
      url`/v2/rooms/${roomId}/feeds/${feedId}/messages`,
      {
        data,
        ...id2 !== void 0 ? { id: id2 } : {},
        ...createdAt !== void 0 ? { timestamp: createdAt } : {}
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Updates a feed message.
   * @param params.roomId The room ID to update the feed message in.
   * @param params.feedId The feed ID to update the message in.
   * @param params.messageId The message ID to update.
   * @param params.data The message data.
   * @param params.updatedAt (optional) Update time in ms. Sent to the API as `timestamp`. If omitted, the server uses the current time.
   * @param options.signal (optional) An abort signal to cancel the request.
   * @returns The updated feed message.
   */
  async updateFeedMessage(params, options2) {
    const { roomId, feedId, messageId, data, updatedAt } = params;
    const res = await this.#patch(
      url`/v2/rooms/${roomId}/feeds/${feedId}/messages/${messageId}`,
      {
        data,
        ...updatedAt !== void 0 ? { timestamp: updatedAt } : {}
      },
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
    return await res.json();
  }
  /**
   * Deletes a feed message.
   * @param params.roomId The room ID to delete the feed message from.
   * @param params.feedId The feed ID to delete the message from.
   * @param params.messageId The message ID to delete.
   * @param options.signal (optional) An abort signal to cancel the request.
   */
  async deleteFeedMessage(params, options2) {
    const { roomId, feedId, messageId } = params;
    const res = await this.#delete(
      url`/v2/rooms/${roomId}/feeds/${feedId}/messages/${messageId}`,
      void 0,
      options2
    );
    if (!res.ok) {
      throw await LiveblocksError.from(res);
    }
  }
};
var LiveblocksError = class _LiveblocksError extends Error {
  static {
    __name(this, "_LiveblocksError");
  }
  status;
  details;
  constructor(message, status, details) {
    super(message);
    this.name = "LiveblocksError";
    this.status = status;
    this.details = details;
  }
  toString() {
    let msg = `${this.name}: ${this.message} (status ${this.status})`;
    if (this.details) {
      msg += `
${this.details}`;
    }
    return msg;
  }
  static async from(res) {
    const origErrLocation = new Error();
    Error.captureStackTrace(origErrLocation, _LiveblocksError.from);
    const FALLBACK = "An error happened without an error message";
    let text;
    try {
      text = await res.text();
    } catch {
      text = FALLBACK;
    }
    const obj = tryParseJson(text) ?? { message: text };
    const message = obj.message || FALLBACK;
    const details = [
      obj.suggestion ? `Suggestion: ${String(obj.suggestion)}` : void 0,
      obj.docs ? `See also: ${String(obj.docs)}` : void 0
    ].filter(Boolean).join("\n") || void 0;
    const err = new _LiveblocksError(message, res.status, details);
    err.stack = origErrLocation.stack;
    return err;
  }
};
var WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60;
detectDupes(PKG_NAME2, PKG_VERSION2, PKG_FORMAT2);

// lib/liveblocks.ts
var globalForLiveblocks = globalThis;
function createLiveblocksClient() {
  const secret = process.env.LIVEBLOCKS_SECRET_KEY;
  if (!secret) {
    throw new Error("LIVEBLOCKS_SECRET_KEY is not set");
  }
  return new Liveblocks({ secret });
}
__name(createLiveblocksClient, "createLiveblocksClient");
function getLiveblocks() {
  if (!globalForLiveblocks.liveblocks) {
    globalForLiveblocks.liveblocks = createLiveblocksClient();
  }
  return globalForLiveblocks.liveblocks;
}
__name(getLiveblocks, "getLiveblocks");

// lib/canvas-design-actions.ts
function buildNode(action) {
  const color2 = NODE_COLORS[action.colorIndex ?? 0] ?? NODE_COLORS[0];
  const defaults = SHAPE_DEFAULT_SIZES[action.shape];
  const width = action.width ?? defaults.width;
  const height = action.height ?? defaults.height;
  return {
    id: action.id,
    type: CANVAS_NODE_TYPE,
    position: { x: action.x, y: action.y },
    width,
    height,
    data: {
      label: action.label,
      color: color2.fill,
      textColor: color2.text,
      shape: action.shape
    }
  };
}
__name(buildNode, "buildNode");
function buildEdge(action) {
  return {
    id: action.id,
    type: CANVAS_EDGE_TYPE,
    source: action.source,
    target: action.target,
    data: { label: action.label ?? "" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: DEFAULT_EDGE_COLOR,
      width: 16,
      height: 16
    }
  };
}
__name(buildEdge, "buildEdge");
async function applyDesignAction(roomId, action) {
  let cursor = null;
  await mutateFlow(
    { client: getLiveblocks(), roomId },
    (flow) => {
      switch (action.type) {
        case "add_node": {
          const node = buildNode(action);
          flow.addNode(node);
          cursor = {
            x: node.position.x + (node.width ?? 0) / 2,
            y: node.position.y + (node.height ?? 0) / 2
          };
          break;
        }
        case "move_node": {
          flow.updateNode(action.id, { position: { x: action.x, y: action.y } });
          const node = flow.getNode(action.id);
          if (node) {
            cursor = {
              x: action.x + (node.width ?? 0) / 2,
              y: action.y + (node.height ?? 0) / 2
            };
          }
          break;
        }
        case "resize_node": {
          flow.updateNode(action.id, {
            width: action.width,
            height: action.height
          });
          const node = flow.getNode(action.id);
          if (node) {
            cursor = {
              x: node.position.x + action.width / 2,
              y: node.position.y + action.height / 2
            };
          }
          break;
        }
        case "update_node": {
          const node = flow.getNode(action.id);
          if (!node) {
            break;
          }
          const colorIndex = action.colorIndex;
          const color2 = colorIndex !== void 0 ? NODE_COLORS[colorIndex] ?? NODE_COLORS[0] : null;
          flow.updateNode(action.id, {
            data: {
              ...node.data,
              ...action.label !== void 0 ? { label: action.label } : {},
              ...action.shape !== void 0 ? { shape: action.shape } : {},
              ...color2 ? { color: color2.fill, textColor: color2.text } : {}
            },
            ...action.shape !== void 0 ? {
              width: node.width ?? SHAPE_DEFAULT_SIZES[action.shape].width,
              height: node.height ?? SHAPE_DEFAULT_SIZES[action.shape].height
            } : {}
          });
          cursor = {
            x: node.position.x + (node.width ?? 0) / 2,
            y: node.position.y + (node.height ?? 0) / 2
          };
          break;
        }
        case "delete_node": {
          flow.removeNode(action.id);
          break;
        }
        case "add_edge": {
          flow.addEdge(buildEdge(action));
          break;
        }
        case "delete_edge": {
          flow.removeEdge(action.id);
          break;
        }
      }
    }
  );
  return { cursor };
}
__name(applyDesignAction, "applyDesignAction");
async function applyDesignActions(roomId, actions, onActionApplied) {
  for (const action of actions) {
    const { cursor } = await applyDesignAction(roomId, action);
    if (onActionApplied) {
      await onActionApplied(action, cursor);
    }
  }
}
__name(applyDesignActions, "applyDesignActions");

// lib/canvas-flow-snapshot.ts
init_esm();
async function getCanvasFlowSnapshot(roomId) {
  let snapshot = { nodes: [], edges: [] };
  await mutateFlow(
    { client: getLiveblocks(), roomId },
    (flow) => {
      const json = flow.toJSON();
      snapshot = {
        nodes: [...json.nodes],
        edges: [...json.edges]
      };
    }
  );
  return snapshot;
}
__name(getCanvasFlowSnapshot, "getCanvasFlowSnapshot");
function formatCanvasFlowSnapshot(snapshot) {
  const nodes = snapshot.nodes.length === 0 ? "None" : snapshot.nodes.map((node) => {
    const width = node.width ?? "?";
    const height = node.height ?? "?";
    return `- id="${node.id}" label="${node.data.label}" shape=${node.data.shape} at (${node.position.x}, ${node.position.y}) size=${width}x${height}`;
  }).join("\n");
  const edges = snapshot.edges.length === 0 ? "None" : snapshot.edges.map((edge) => {
    const label = edge.data?.label ? ` label="${edge.data.label}"` : "";
    return `- id="${edge.id}" ${edge.source} -> ${edge.target}${label}`;
  }).join("\n");
  return `Existing nodes:
${nodes}

Existing edges:
${edges}`;
}
__name(formatCanvasFlowSnapshot, "formatCanvasFlowSnapshot");

// lib/design-agent-openai.ts
init_esm();

// types/design-agent-actions.ts
init_esm();
var shapeSchema = external_exports.enum(NODE_SHAPES);
var DESIGN_AGENT_ACTION_TYPES = [
  "add_node",
  "move_node",
  "resize_node",
  "update_node",
  "delete_node",
  "add_edge",
  "delete_edge"
];
var designAgentActionSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("add_node"),
    id: external_exports.string().min(1),
    label: external_exports.string(),
    shape: shapeSchema,
    x: external_exports.number(),
    y: external_exports.number(),
    colorIndex: external_exports.number().int().min(0).max(7).optional(),
    width: external_exports.number().positive().optional(),
    height: external_exports.number().positive().optional()
  }),
  external_exports.object({
    type: external_exports.literal("move_node"),
    id: external_exports.string().min(1),
    x: external_exports.number(),
    y: external_exports.number()
  }),
  external_exports.object({
    type: external_exports.literal("resize_node"),
    id: external_exports.string().min(1),
    width: external_exports.number().positive(),
    height: external_exports.number().positive()
  }),
  external_exports.object({
    type: external_exports.literal("update_node"),
    id: external_exports.string().min(1),
    label: external_exports.string().optional(),
    shape: shapeSchema.optional(),
    colorIndex: external_exports.number().int().min(0).max(7).optional()
  }),
  external_exports.object({
    type: external_exports.literal("delete_node"),
    id: external_exports.string().min(1)
  }),
  external_exports.object({
    type: external_exports.literal("add_edge"),
    id: external_exports.string().min(1),
    source: external_exports.string().min(1),
    target: external_exports.string().min(1),
    label: external_exports.string().optional()
  }),
  external_exports.object({
    type: external_exports.literal("delete_edge"),
    id: external_exports.string().min(1)
  })
]);
var designAgentPlanSchema = external_exports.object({
  actions: external_exports.array(designAgentActionSchema)
});
var designAgentActionLlmSchema = external_exports.object({
  type: external_exports.enum(DESIGN_AGENT_ACTION_TYPES),
  id: external_exports.string().min(1),
  label: external_exports.string().nullable(),
  shape: shapeSchema.nullable(),
  x: external_exports.number().nullable(),
  y: external_exports.number().nullable(),
  colorIndex: external_exports.number().int().min(0).max(7).nullable(),
  width: external_exports.number().positive().nullable(),
  height: external_exports.number().positive().nullable(),
  source: external_exports.string().nullable(),
  target: external_exports.string().nullable()
});
var designAgentPlanLlmSchema = external_exports.object({
  actions: external_exports.array(designAgentActionLlmSchema)
});
function requireNumber(value, field) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Missing required number field: ${field}`);
  }
  return value;
}
__name(requireNumber, "requireNumber");
function requireString(value, field) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required string field: ${field}`);
  }
  return value;
}
__name(requireString, "requireString");
function narrowDesignAgentAction(action) {
  switch (action.type) {
    case "add_node":
      return designAgentActionSchema.parse({
        type: "add_node",
        id: action.id,
        label: action.label ?? "",
        shape: action.shape ?? "rectangle",
        x: requireNumber(action.x, "x"),
        y: requireNumber(action.y, "y"),
        colorIndex: action.colorIndex ?? void 0,
        width: action.width ?? void 0,
        height: action.height ?? void 0
      });
    case "move_node":
      return designAgentActionSchema.parse({
        type: "move_node",
        id: action.id,
        x: requireNumber(action.x, "x"),
        y: requireNumber(action.y, "y")
      });
    case "resize_node":
      return designAgentActionSchema.parse({
        type: "resize_node",
        id: action.id,
        width: requireNumber(action.width, "width"),
        height: requireNumber(action.height, "height")
      });
    case "update_node":
      return designAgentActionSchema.parse({
        type: "update_node",
        id: action.id,
        label: action.label ?? void 0,
        shape: action.shape ?? void 0,
        colorIndex: action.colorIndex ?? void 0
      });
    case "delete_node":
      return designAgentActionSchema.parse({
        type: "delete_node",
        id: action.id
      });
    case "add_edge":
      return designAgentActionSchema.parse({
        type: "add_edge",
        id: action.id,
        source: requireString(action.source, "source"),
        target: requireString(action.target, "target"),
        label: action.label ?? void 0
      });
    case "delete_edge":
      return designAgentActionSchema.parse({
        type: "delete_edge",
        id: action.id
      });
    default: {
      const exhaustive = action.type;
      throw new Error(`Unknown design action type: ${exhaustive}`);
    }
  }
}
__name(narrowDesignAgentAction, "narrowDesignAgentAction");
function toDesignAgentPlan(raw) {
  return {
    actions: raw.actions.map((action, index2) => {
      try {
        return narrowDesignAgentAction(action);
      } catch (error3) {
        const message = error3 instanceof Error ? error3.message : "Invalid action";
        throw new Error(`Invalid design action at index ${index2}: ${message}`);
      }
    })
  };
}
__name(toDesignAgentPlan, "toDesignAgentPlan");

// lib/design-agent-openai.ts
var COLOR_GUIDE = NODE_COLORS.map(
  (entry, index2) => `${index2}: fill ${entry.fill}, text ${entry.text}`
).join("\n");
var SYSTEM_PROMPT = `You are Miro AI, a system design assistant for a collaborative architecture canvas.

Return a JSON plan with canvas actions only. Use these action types:
- add_node, move_node, resize_node, update_node, delete_node, add_edge, delete_edge

Rules:
- Shapes (use exactly these): ${NODE_SHAPES.join(", ")}
- Colors (colorIndex 0-${NODE_COLORS.length - 1}):
${COLOR_GUIDE}
- Prefer rectangle for services, cylinder for databases, hexagon for gateways/buses/load balancers, pill for queues
- Keep labels short (1-3 words)
- Layout: left-to-right or top-to-bottom flows, 180-260px spacing between nodes, avoid overlap
- Default sizes are fine; only set width/height when a shape needs emphasis

Existing canvas (critical):
- When the user refers to a component already on the canvas, REUSE its existing node id. Match by label (case-insensitive) or obvious synonym (e.g. "server" ≈ "API Server").
- Do NOT create a duplicate node for something that already exists.
- When asked to connect A to B, emit add_edge using the existing node ids. Create add_node only for genuinely new components.
- Edge ids: edge-{source}-{target} (or similar unique kebab-case).
- New node ids: kebab-case, unique, not colliding with existing ids.
- Only include actions needed for the user request; do not rebuild the whole diagram unless asked.
- After adding new nodes that should connect, always include the corresponding add_edge actions.
- For each action, set only the fields that apply to that type; set unused fields to null (not omitted).
- add_node requires: id, label, shape, x, y (others null)
- move_node requires: id, x, y (others null)
- resize_node requires: id, width, height (others null)
- update_node requires: id, plus label/shape/colorIndex to change (unused null)
- delete_node / delete_edge require: id (others null)
- add_edge requires: id, source, target (others null)`;
async function generateDesignPlan(prompt, canvas = { nodes: [], edges: [] }) {
  const canvasContext = formatCanvasFlowSnapshot(canvas);
  const { object } = await generateObject({
    model: getOpenAIModel(),
    schema: designAgentPlanLlmSchema,
    system: SYSTEM_PROMPT,
    prompt: `${canvasContext}

User request:
${prompt}`
  });
  return toDesignAgentPlan(object);
}
__name(generateDesignPlan, "generateDesignPlan");

// lib/liveblocks-ai-agent.ts
init_esm();
var AI_AGENT_NAME = "Miro AI";
var AI_AGENT_COLOR = "#8b82ff";
var PRESENCE_TTL_SECONDS = 120;
async function ensureAiStatusFeed(client, roomId) {
  try {
    await client.createFeed({
      roomId,
      feedId: AI_STATUS_FEED_ID,
      metadata: { name: "AI Status" }
    });
  } catch {
  }
}
__name(ensureAiStatusFeed, "ensureAiStatusFeed");
async function publishAiStatus(roomId, text) {
  const client = getLiveblocks();
  const data = { text };
  await ensureAiStatusFeed(client, roomId);
  try {
    await client.updateFeedMessage({
      roomId,
      feedId: AI_STATUS_FEED_ID,
      messageId: AI_STATUS_MESSAGE_ID,
      data
    });
  } catch {
    await client.createFeedMessage({
      roomId,
      feedId: AI_STATUS_FEED_ID,
      id: AI_STATUS_MESSAGE_ID,
      data
    });
  }
}
__name(publishAiStatus, "publishAiStatus");
async function setAiAgentPresence(roomId, presence) {
  const client = getLiveblocks();
  await client.setPresence(roomId, {
    userId: AI_AGENT_USER_ID,
    data: presence,
    userInfo: {
      name: AI_AGENT_NAME,
      avatar: "",
      color: AI_AGENT_COLOR
    },
    ttl: PRESENCE_TTL_SECONDS
  });
}
__name(setAiAgentPresence, "setAiAgentPresence");
async function clearAiAgentPresence(roomId) {
  await setAiAgentPresence(roomId, {
    cursor: null,
    thinking: false
  });
}
__name(clearAiAgentPresence, "clearAiAgentPresence");

// types/design-agent.ts
init_esm();
var DESIGN_AGENT_TASK_ID = "design-agent";

// trigger/design-agent.ts
var designAgentTask = task({
  id: DESIGN_AGENT_TASK_ID,
  run: /* @__PURE__ */ __name(async (payload) => {
    const { prompt, roomId } = payload;
    logger.info("Design agent started", { roomId, promptLength: prompt.length });
    try {
      await publishAiStatus(roomId, "Starting design generation…");
      await setAiAgentPresence(roomId, {
        cursor: { x: 120, y: 120 },
        thinking: true
      });
      await publishAiStatus(roomId, "Reading current canvas…");
      const canvas = await getCanvasFlowSnapshot(roomId);
      await publishAiStatus(roomId, "Interpreting your prompt…");
      const plan = await generateDesignPlan(prompt, canvas);
      logger.info("Design plan generated", {
        roomId,
        actionCount: plan.actions.length
      });
      await publishAiStatus(
        roomId,
        `Applying ${plan.actions.length} canvas updates…`
      );
      await applyDesignActions(roomId, plan.actions, async (_action, cursor) => {
        if (cursor) {
          await setAiAgentPresence(roomId, {
            cursor,
            thinking: true
          });
        }
      });
      await publishAiStatus(roomId, "Design complete.");
      await clearAiAgentPresence(roomId);
      return {
        roomId,
        actionCount: plan.actions.length
      };
    } catch (error3) {
      const message = error3 instanceof Error ? error3.message : "Design generation failed";
      logger.error("Design agent failed", { roomId, message });
      await publishAiStatus(roomId, `Design failed: ${message}`);
      await clearAiAgentPresence(roomId);
      throw error3;
    }
  }, "run")
});
export {
  designAgentTask
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=design-agent.mjs.map
