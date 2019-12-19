/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.17.0(63d87164d0bc8c6206d9339c195289c93665028e)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function() {
  var e = [
      'require',
      'exports',
      'vs/editor/common/core/position',
      'vs/base/common/platform',
      'vs/editor/common/core/uint',
      'vs/base/common/errors',
      'vs/editor/common/core/range',
      'vs/base/common/types',
      'vs/base/common/diff/diff',
      'vs/base/common/event',
      'vs/base/common/lifecycle',
      'vs/base/common/iterator',
      'vs/base/common/uri',
      'vs/base/common/strings',
      'vs/base/common/keyCodes',
      'vs/base/common/diff/diffChange',
      'vs/base/common/linkedList',
      'vs/base/common/functional',
      'vs/base/common/cancellation',
      'vs/editor/common/core/selection',
      'vs/editor/common/core/token',
      'vs/base/common/arrays',
      'vs/editor/common/core/characterClassifier',
      'vs/editor/common/diff/diffComputer',
      'vs/editor/common/model/wordHelper',
      'vs/editor/common/modes/linkComputer',
      'vs/editor/common/modes/supports/inplaceReplaceSupport',
      'vs/editor/common/standalone/standaloneEnums',
      'vs/editor/common/standalone/standaloneBase',
      'vs/editor/common/viewModel/prefixSumComputer',
      'vs/editor/common/model/mirrorTextModel',
      'vs/editor/common/services/editorSimpleWorker',
      'vs/editor/common/standalone/promise-polyfill/polyfill',
      'vs/base/common/worker/simpleWorker',
    ],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n;
    },
    n = this,
    r = 'object' == typeof global ? global : {};
  !(function(e) {
    e.global = n;
    var t = (function() {
      function t() {
        (this._detected = !1),
          (this._isWindows = !1),
          (this._isNode = !1),
          (this._isElectronRenderer = !1),
          (this._isWebWorker = !1);
      }
      return (
        Object.defineProperty(t.prototype, 'isWindows', {
          get: function() {
            return this._detect(), this._isWindows;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'isNode', {
          get: function() {
            return this._detect(), this._isNode;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'isElectronRenderer', {
          get: function() {
            return this._detect(), this._isElectronRenderer;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'isWebWorker', {
          get: function() {
            return this._detect(), this._isWebWorker;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype._detect = function() {
          this._detected ||
            ((this._detected = !0),
            (this._isWindows = t._isWindows()),
            (this._isNode = 'undefined' != typeof module && !!module.exports),
            (this._isElectronRenderer =
              'undefined' != typeof process &&
              void 0 !== process.versions &&
              void 0 !== process.versions.electron &&
              'renderer' === process.type),
            (this._isWebWorker = 'function' == typeof e.global.importScripts));
        }),
        (t._isWindows = function() {
          return (
            !!('undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf('Windows') >= 0) ||
            ('undefined' != typeof process && 'win32' === process.platform)
          );
        }),
        t
      );
    })();
    e.Environment = t;
  })(o || (o = {}));
  !(function(e) {
    var t = (function() {
      return function(e, t, n) {
        (this.type = e), (this.detail = t), (this.timestamp = n);
      };
    })();
    e.LoaderEvent = t;
    var n = (function() {
      function n(e) {
        this._events = [new t(1, '', e)];
      }
      return (
        (n.prototype.record = function(n, r) {
          this._events.push(new t(n, r, e.Utilities.getHighPerformanceTimestamp()));
        }),
        (n.prototype.getEvents = function() {
          return this._events;
        }),
        n
      );
    })();
    e.LoaderEventRecorder = n;
    var r = (function() {
      function e() {}
      return (
        (e.prototype.record = function(e, t) {}),
        (e.prototype.getEvents = function() {
          return [];
        }),
        e
      );
    })();
    (r.INSTANCE = new r()), (e.NullLoaderEventRecorder = r);
  })(o || (o = {}));
  !(function(e) {
    var t = (function() {
      function t() {}
      return (
        (t.fileUriToFilePath = function(e, t) {
          if (((t = decodeURI(t).replace(/%23/g, '#')), e)) {
            if (/^file:\/\/\//.test(t)) return t.substr(8);
            if (/^file:\/\//.test(t)) return t.substr(5);
          } else if (/^file:\/\//.test(t)) return t.substr(7);
          return t;
        }),
        (t.startsWith = function(e, t) {
          return e.length >= t.length && e.substr(0, t.length) === t;
        }),
        (t.endsWith = function(e, t) {
          return e.length >= t.length && e.substr(e.length - t.length) === t;
        }),
        (t.containsQueryString = function(e) {
          return /^[^\#]*\?/gi.test(e);
        }),
        (t.isAbsolutePath = function(e) {
          return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e);
        }),
        (t.forEachProperty = function(e, t) {
          if (e) {
            var n = void 0;
            for (n in e) e.hasOwnProperty(n) && t(n, e[n]);
          }
        }),
        (t.isEmpty = function(e) {
          var n = !0;
          return (
            t.forEachProperty(e, function() {
              n = !1;
            }),
            n
          );
        }),
        (t.recursiveClone = function(e) {
          if (!e || 'object' != typeof e) return e;
          var n = Array.isArray(e) ? [] : {};
          return (
            t.forEachProperty(e, function(e, r) {
              n[e] = r && 'object' == typeof r ? t.recursiveClone(r) : r;
            }),
            n
          );
        }),
        (t.generateAnonymousModule = function() {
          return '===anonymous' + t.NEXT_ANONYMOUS_ID++ + '===';
        }),
        (t.isAnonymousModule = function(e) {
          return t.startsWith(e, '===anonymous');
        }),
        (t.getHighPerformanceTimestamp = function() {
          return (
            this.PERFORMANCE_NOW_PROBED ||
              ((this.PERFORMANCE_NOW_PROBED = !0),
              (this.HAS_PERFORMANCE_NOW = e.global.performance && 'function' == typeof e.global.performance.now)),
            this.HAS_PERFORMANCE_NOW ? e.global.performance.now() : Date.now()
          );
        }),
        t
      );
    })();
    (t.NEXT_ANONYMOUS_ID = 1), (t.PERFORMANCE_NOW_PROBED = !1), (t.HAS_PERFORMANCE_NOW = !1), (e.Utilities = t);
  })(o || (o = {}));
  !(function(e) {
    var t = (function() {
      function t() {}
      return (
        (t.validateConfigurationOptions = function(t) {
          function n(e) {
            return 'load' === e.errorCode
              ? (console.error('Loading "' + e.moduleId + '" failed'),
                console.error('Detail: ', e.detail),
                e.detail && e.detail.stack && console.error(e.detail.stack),
                console.error('Here are the modules that depend on it:'),
                void console.error(e.neededBy))
              : 'factory' === e.errorCode
              ? (console.error('The factory method of "' + e.moduleId + '" has thrown an exception'),
                console.error(e.detail),
                void (e.detail && e.detail.stack && console.error(e.detail.stack)))
              : void 0;
          }
          return (
            'string' != typeof (t = t || {}).baseUrl && (t.baseUrl = ''),
            'boolean' != typeof t.isBuild && (t.isBuild = !1),
            'object' != typeof t.paths && (t.paths = {}),
            'object' != typeof t.config && (t.config = {}),
            void 0 === t.catchError && (t.catchError = !1),
            'string' != typeof t.urlArgs && (t.urlArgs = ''),
            'function' != typeof t.onError && (t.onError = n),
            ('object' == typeof t.ignoreDuplicateModules && Array.isArray(t.ignoreDuplicateModules)) ||
              (t.ignoreDuplicateModules = []),
            t.baseUrl.length > 0 && (e.Utilities.endsWith(t.baseUrl, '/') || (t.baseUrl += '/')),
            'string' != typeof t.cspNonce && (t.cspNonce = ''),
            Array.isArray(t.nodeModules) || (t.nodeModules = []),
            'object' == typeof t.nodeCachedData &&
              ('string' != typeof t.nodeCachedData.seed && (t.nodeCachedData.seed = 'seed'),
              ('number' != typeof t.nodeCachedData.writeDelay || t.nodeCachedData.writeDelay < 0) &&
                (t.nodeCachedData.writeDelay = 7e3),
              'function' != typeof t.nodeCachedData.onData &&
                (t.nodeCachedData.onData = function(e) {
                  e && 'cachedDataRejected' === e.errorCode
                    ? console.warn('Rejected cached data from file: ' + e.path)
                    : e && e.errorCode
                    ? (console.error('Problems handling cached data file: ' + e.path), console.error(e.detail))
                    : e && console.error(e);
                }),
              (t.nodeCachedData.path && 'string' == typeof t.nodeCachedData.path) ||
                (t.nodeCachedData.onData("INVALID cached data configuration, 'path' MUST be set"),
                (t.nodeCachedData = void 0))),
            t
          );
        }),
        (t.mergeConfigurationOptions = function(n, r) {
          void 0 === n && (n = null), void 0 === r && (r = null);
          var i = e.Utilities.recursiveClone(r || {});
          return (
            e.Utilities.forEachProperty(n, function(t, n) {
              'ignoreDuplicateModules' === t && void 0 !== i.ignoreDuplicateModules
                ? (i.ignoreDuplicateModules = i.ignoreDuplicateModules.concat(n))
                : 'paths' === t && void 0 !== i.paths
                ? e.Utilities.forEachProperty(n, function(e, t) {
                    return (i.paths[e] = t);
                  })
                : 'config' === t && void 0 !== i.config
                ? e.Utilities.forEachProperty(n, function(e, t) {
                    return (i.config[e] = t);
                  })
                : (i[t] = e.Utilities.recursiveClone(n));
            }),
            t.validateConfigurationOptions(i)
          );
        }),
        t
      );
    })();
    e.ConfigurationOptionsUtil = t;
    var n = (function() {
      function n(e, n) {
        if (
          ((this._env = e),
          (this.options = t.mergeConfigurationOptions(n)),
          this._createIgnoreDuplicateModulesMap(),
          this._createNodeModulesMap(),
          this._createSortedPathsRules(),
          '' === this.options.baseUrl)
        ) {
          if (
            this.options.nodeRequire &&
            this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename &&
            this._env.isNode
          ) {
            var r = this.options.nodeRequire.main.filename,
              i = Math.max(r.lastIndexOf('/'), r.lastIndexOf('\\'));
            this.options.baseUrl = r.substring(0, i + 1);
          }
          if (this.options.nodeMain && this._env.isNode) {
            var r = this.options.nodeMain,
              i = Math.max(r.lastIndexOf('/'), r.lastIndexOf('\\'));
            this.options.baseUrl = r.substring(0, i + 1);
          }
        }
      }
      return (
        (n.prototype._createIgnoreDuplicateModulesMap = function() {
          this.ignoreDuplicateModulesMap = {};
          for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++)
            this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]] = !0;
        }),
        (n.prototype._createNodeModulesMap = function() {
          this.nodeModulesMap = Object.create(null);
          for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
            var n = t[e];
            this.nodeModulesMap[n] = !0;
          }
        }),
        (n.prototype._createSortedPathsRules = function() {
          var t = this;
          (this.sortedPathsRules = []),
            e.Utilities.forEachProperty(this.options.paths, function(e, n) {
              Array.isArray(n)
                ? t.sortedPathsRules.push({ from: e, to: n })
                : t.sortedPathsRules.push({ from: e, to: [n] });
            }),
            this.sortedPathsRules.sort(function(e, t) {
              return t.from.length - e.from.length;
            });
        }),
        (n.prototype.cloneAndMerge = function(e) {
          return new n(this._env, t.mergeConfigurationOptions(e, this.options));
        }),
        (n.prototype.getOptionsLiteral = function() {
          return this.options;
        }),
        (n.prototype._applyPaths = function(t) {
          for (var n, r = 0, i = this.sortedPathsRules.length; r < i; r++)
            if (((n = this.sortedPathsRules[r]), e.Utilities.startsWith(t, n.from))) {
              for (var o = [], s = 0, u = n.to.length; s < u; s++) o.push(n.to[s] + t.substr(n.from.length));
              return o;
            }
          return [t];
        }),
        (n.prototype._addUrlArgsToUrl = function(t) {
          return e.Utilities.containsQueryString(t) ? t + '&' + this.options.urlArgs : t + '?' + this.options.urlArgs;
        }),
        (n.prototype._addUrlArgsIfNecessaryToUrl = function(e) {
          return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e;
        }),
        (n.prototype._addUrlArgsIfNecessaryToUrls = function(e) {
          if (this.options.urlArgs) for (var t = 0, n = e.length; t < n; t++) e[t] = this._addUrlArgsToUrl(e[t]);
          return e;
        }),
        (n.prototype.moduleIdToPaths = function(t) {
          if (!0 === this.nodeModulesMap[t]) return this.isBuild() ? ['empty:'] : ['node|' + t];
          var n,
            r = t;
          if (e.Utilities.endsWith(r, '.js') || e.Utilities.isAbsolutePath(r))
            e.Utilities.endsWith(r, '.js') || e.Utilities.containsQueryString(r) || (r += '.js'), (n = [r]);
          else
            for (var i = 0, o = (n = this._applyPaths(r)).length; i < o; i++)
              (this.isBuild() && 'empty:' === n[i]) ||
                (e.Utilities.isAbsolutePath(n[i]) || (n[i] = this.options.baseUrl + n[i]),
                e.Utilities.endsWith(n[i], '.js') || e.Utilities.containsQueryString(n[i]) || (n[i] = n[i] + '.js'));
          return this._addUrlArgsIfNecessaryToUrls(n);
        }),
        (n.prototype.requireToUrl = function(t) {
          var n = t;
          return (
            e.Utilities.isAbsolutePath(n) ||
              ((n = this._applyPaths(n)[0]), e.Utilities.isAbsolutePath(n) || (n = this.options.baseUrl + n)),
            this._addUrlArgsIfNecessaryToUrl(n)
          );
        }),
        (n.prototype.isBuild = function() {
          return this.options.isBuild;
        }),
        (n.prototype.isDuplicateMessageIgnoredFor = function(e) {
          return this.ignoreDuplicateModulesMap.hasOwnProperty(e);
        }),
        (n.prototype.getConfigForModule = function(e) {
          if (this.options.config) return this.options.config[e];
        }),
        (n.prototype.shouldCatchError = function() {
          return this.options.catchError;
        }),
        (n.prototype.shouldRecordStats = function() {
          return this.options.recordStats;
        }),
        (n.prototype.onError = function(e) {
          this.options.onError(e);
        }),
        n
      );
    })();
    e.Configuration = n;
  })(o || (o = {}));
  !(function(e) {
    var t = (function() {
        function e(e) {
          (this._env = e), (this._scriptLoader = null), (this._callbackMap = {});
        }
        return (
          (e.prototype.load = function(e, t, r, s) {
            var u = this;
            this._scriptLoader ||
              (this._scriptLoader = this._env.isWebWorker ? new i() : this._env.isNode ? new o(this._env) : new n());
            var a = { callback: r, errorback: s };
            this._callbackMap.hasOwnProperty(t)
              ? this._callbackMap[t].push(a)
              : ((this._callbackMap[t] = [a]),
                this._scriptLoader.load(
                  e,
                  t,
                  function() {
                    return u.triggerCallback(t);
                  },
                  function(e) {
                    return u.triggerErrorback(t, e);
                  },
                ));
          }),
          (e.prototype.triggerCallback = function(e) {
            var t = this._callbackMap[e];
            delete this._callbackMap[e];
            for (var n = 0; n < t.length; n++) t[n].callback();
          }),
          (e.prototype.triggerErrorback = function(e, t) {
            var n = this._callbackMap[e];
            delete this._callbackMap[e];
            for (var r = 0; r < n.length; r++) n[r].errorback(t);
          }),
          e
        );
      })(),
      n = (function() {
        function e() {}
        return (
          (e.prototype.attachListeners = function(e, t, n) {
            var r = function() {
                e.removeEventListener('load', i), e.removeEventListener('error', o);
              },
              i = function(e) {
                r(), t();
              },
              o = function(e) {
                r(), n(e);
              };
            e.addEventListener('load', i), e.addEventListener('error', o);
          }),
          (e.prototype.load = function(e, t, n, r) {
            var i = document.createElement('script');
            i.setAttribute('async', 'async'),
              i.setAttribute('type', 'text/javascript'),
              this.attachListeners(i, n, r),
              i.setAttribute('src', t);
            var o = e.getConfig().getOptionsLiteral().cspNonce;
            o && i.setAttribute('nonce', o), document.getElementsByTagName('head')[0].appendChild(i);
          }),
          e
        );
      })(),
      i = (function() {
        function e() {}
        return (
          (e.prototype.load = function(e, t, n, r) {
            try {
              importScripts(t), n();
            } catch (e) {
              r(e);
            }
          }),
          e
        );
      })(),
      o = (function() {
        function t(e) {
          (this._env = e),
            (this._didInitialize = !1),
            (this._didPatchNodeRequire = !1),
            (this._hasCreateCachedData = !1);
        }
        return (
          (t.prototype._init = function(e) {
            this._didInitialize ||
              ((this._didInitialize = !0),
              (this._fs = e('fs')),
              (this._vm = e('vm')),
              (this._path = e('path')),
              (this._crypto = e('crypto')),
              (this._hasCreateCachedData = 'function' == typeof new this._vm.Script('').createCachedData));
          }),
          (t.prototype._initNodeRequire = function(e, t) {
            var n = t.getConfig().getOptionsLiteral().nodeCachedData;
            if (n && !this._didPatchNodeRequire) {
              this._didPatchNodeRequire = !0;
              var i = this,
                o = e('module');
              o.prototype._compile = function(e, s) {
                e = e.replace(/^#!.*/, '');
                var u = o.wrap(e),
                  a = i._getCachedDataPath(n.seed, n.path, s),
                  l = { filename: s };
                try {
                  l.cachedData = i._fs.readFileSync(a);
                } catch (e) {
                  l.produceCachedData = !i._hasCreateCachedData;
                }
                var c = new i._vm.Script(u, l),
                  d = c.runInThisContext(l),
                  f = i._path.dirname(s),
                  h = (function(e) {
                    var t = e.constructor,
                      n = function(t) {
                        try {
                          return e.require(t);
                        } finally {
                        }
                      };
                    return (
                      (n.resolve = function(n) {
                        return t._resolveFilename(n, e);
                      }),
                      (n.main = process.mainModule),
                      (n.extensions = t._extensions),
                      (n.cache = t._cache),
                      n
                    );
                  })(this),
                  p = [this.exports, h, this, s, f, process, r, Buffer],
                  m = d.apply(this.exports, p);
                return i._processCachedData(t, c, u, a, !l.cachedData), m;
              };
            }
          }),
          (t.prototype.load = function(n, r, i, o) {
            var s = this,
              u = n.getConfig().getOptionsLiteral(),
              a = u.nodeRequire || e.global.nodeRequire,
              l =
                u.nodeInstrumenter ||
                function(e) {
                  return e;
                };
            this._init(a), this._initNodeRequire(a, n);
            var c = n.getRecorder();
            if (/^node\|/.test(r)) {
              var d = r.split('|'),
                f = null;
              try {
                f = a(d[1]);
              } catch (e) {
                return void o(e);
              }
              n.enqueueDefineAnonymousModule([], function() {
                return f;
              }),
                i();
            } else
              (r = e.Utilities.fileUriToFilePath(this._env.isWindows, r)),
                this._fs.readFile(r, { encoding: 'utf8' }, function(e, a) {
                  if (e) o(e);
                  else {
                    var d = s._path.normalize(r),
                      f = d;
                    if (s._env.isElectronRenderer) {
                      var h = f.match(/^([a-z])\:(.*)/i);
                      f = h ? 'file:///' + (h[1].toUpperCase() + ':' + h[2]).replace(/\\/g, '/') : 'file://' + f;
                    }
                    var p,
                      m = '(function (require, define, __filename, __dirname) { ';
                    if (
                      ((p = a.charCodeAt(0) === t._BOM ? m + a.substring(1) + '\n});' : m + a + '\n});'),
                      (p = l(p, d)),
                      u.nodeCachedData)
                    ) {
                      var g = s._getCachedDataPath(u.nodeCachedData.seed, u.nodeCachedData.path, r);
                      s._fs.readFile(g, function(e, t) {
                        var u = {
                            filename: f,
                            produceCachedData: !s._hasCreateCachedData && void 0 === t,
                            cachedData: t,
                          },
                          a = s._loadAndEvalScript(n, r, f, p, u, c, i, o);
                        s._processCachedData(n, a, p, g, !u.cachedData);
                      });
                    } else s._loadAndEvalScript(n, r, f, p, { filename: f }, c, i, o);
                  }
                });
          }),
          (t.prototype._loadAndEvalScript = function(t, n, r, i, o, s, u, a) {
            s.record(31, n);
            var l = new this._vm.Script(i, o),
              c = l.runInThisContext(o),
              d = t.getGlobalAMDDefineFunc(),
              f = !1,
              h = function() {
                return (f = !0), d.apply(null, arguments);
              };
            return (
              (h.amd = d.amd),
              c.call(e.global, t.getGlobalAMDRequireFunc(), h, r, this._path.dirname(n)),
              s.record(32, n),
              f ? u() : a(new Error("Didn't receive define call in " + n + '!')),
              l
            );
          }),
          (t.prototype._getCachedDataPath = function(e, t, n) {
            var r = this._crypto
                .createHash('md5')
                .update(n, 'utf8')
                .update(e, 'utf8')
                .digest('hex'),
              i = this._path.basename(n).replace(/\.js$/, '');
            return this._path.join(t, i + '-' + r + '.code');
          }),
          (t.prototype._processCachedData = function(e, n, r, i, o) {
            var s = this;
            n.cachedDataRejected
              ? (e
                  .getConfig()
                  .getOptionsLiteral()
                  .nodeCachedData.onData({ errorCode: 'cachedDataRejected', path: i }),
                t._runSoon(function() {
                  return s._fs.unlink(i, function(t) {
                    t &&
                      e
                        .getConfig()
                        .getOptionsLiteral()
                        .nodeCachedData.onData({ errorCode: 'unlink', path: i, detail: t });
                  });
                }, e.getConfig().getOptionsLiteral().nodeCachedData.writeDelay / 2))
              : n.cachedDataProduced
              ? (e
                  .getConfig()
                  .getOptionsLiteral()
                  .nodeCachedData.onData(void 0, { path: i }),
                t._runSoon(function() {
                  return s._fs.writeFile(i, n.cachedData, function(t) {
                    t &&
                      e
                        .getConfig()
                        .getOptionsLiteral()
                        .nodeCachedData.onData({ errorCode: 'writeFile', path: i, detail: t });
                  });
                }, e.getConfig().getOptionsLiteral().nodeCachedData.writeDelay))
              : this._hasCreateCachedData &&
                o &&
                (e
                  .getConfig()
                  .getOptionsLiteral()
                  .nodeCachedData.onData(void 0, { path: i }),
                t._runSoon(function() {
                  var t = n.createCachedData(r);
                  s._fs.writeFile(i, t, function(t) {
                    t &&
                      e
                        .getConfig()
                        .getOptionsLiteral()
                        .nodeCachedData.onData({ errorCode: 'writeFile', path: i, detail: t });
                  });
                }, e.getConfig().getOptionsLiteral().nodeCachedData.writeDelay));
          }),
          (t._runSoon = function(e, t) {
            var n = t + Math.ceil(Math.random() * t);
            setTimeout(e, n);
          }),
          t
        );
      })();
    (o._BOM = 65279),
      (e.createScriptLoader = function(e) {
        return new t(e);
      });
  })(o || (o = {}));
  !(function(e) {
    var t = (function() {
      function t(e) {
        var t = e.lastIndexOf('/');
        this.fromModulePath = -1 !== t ? e.substr(0, t + 1) : '';
      }
      return (
        (t._normalizeModuleId = function(e) {
          var t,
            n = e;
          for (t = /\/\.\//; t.test(n); ) n = n.replace(t, '/');
          for (
            n = n.replace(/^\.\//g, ''), t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
            t.test(n);

          )
            n = n.replace(t, '/');
          return (n = n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, ''));
        }),
        (t.prototype.resolveModule = function(n) {
          var r = n;
          return (
            e.Utilities.isAbsolutePath(r) ||
              ((e.Utilities.startsWith(r, './') || e.Utilities.startsWith(r, '../')) &&
                (r = t._normalizeModuleId(this.fromModulePath + r))),
            r
          );
        }),
        t
      );
    })();
    (t.ROOT = new t('')), (e.ModuleIdResolver = t);
    var n = (function() {
      function t(e, t, n, r, i, o) {
        (this.id = e),
          (this.strId = t),
          (this.dependencies = n),
          (this._callback = r),
          (this._errorback = i),
          (this.moduleIdResolver = o),
          (this.exports = {}),
          (this.exportsPassedIn = !1),
          (this.unresolvedDependenciesCount = this.dependencies.length),
          (this._isComplete = !1);
      }
      return (
        (t._safeInvokeFunction = function(t, n) {
          try {
            return { returnedValue: t.apply(e.global, n), producedError: null };
          } catch (e) {
            return { returnedValue: null, producedError: e };
          }
        }),
        (t._invokeFactory = function(t, n, r, i) {
          return t.isBuild() && !e.Utilities.isAnonymousModule(n)
            ? { returnedValue: null, producedError: null }
            : t.shouldCatchError()
            ? this._safeInvokeFunction(r, i)
            : { returnedValue: r.apply(e.global, i), producedError: null };
        }),
        (t.prototype.complete = function(n, r, i) {
          this._isComplete = !0;
          var o = null;
          if (this._callback)
            if ('function' == typeof this._callback) {
              n.record(21, this.strId);
              var s = t._invokeFactory(r, this.strId, this._callback, i);
              (o = s.producedError),
                n.record(22, this.strId),
                o ||
                  void 0 === s.returnedValue ||
                  (this.exportsPassedIn && !e.Utilities.isEmpty(this.exports)) ||
                  (this.exports = s.returnedValue);
            } else this.exports = this._callback;
          o && r.onError({ errorCode: 'factory', moduleId: this.strId, detail: o }),
            (this.dependencies = null),
            (this._callback = null),
            (this._errorback = null),
            (this.moduleIdResolver = null);
        }),
        (t.prototype.onDependencyError = function(e) {
          return !!this._errorback && (this._errorback(e), !0);
        }),
        (t.prototype.isComplete = function() {
          return this._isComplete;
        }),
        t
      );
    })();
    e.Module = n;
    var r = (function() {
        function e() {
          (this._nextId = 0),
            (this._strModuleIdToIntModuleId = new Map()),
            (this._intModuleIdToStrModuleId = []),
            this.getModuleId('exports'),
            this.getModuleId('module'),
            this.getModuleId('require');
        }
        return (
          (e.prototype.getMaxModuleId = function() {
            return this._nextId;
          }),
          (e.prototype.getModuleId = function(e) {
            var t = this._strModuleIdToIntModuleId.get(e);
            return (
              void 0 === t &&
                ((t = this._nextId++),
                this._strModuleIdToIntModuleId.set(e, t),
                (this._intModuleIdToStrModuleId[t] = e)),
              t
            );
          }),
          (e.prototype.getStrModuleId = function(e) {
            return this._intModuleIdToStrModuleId[e];
          }),
          e
        );
      })(),
      i = (function() {
        return function(e) {
          this.id = e;
        };
      })();
    (i.EXPORTS = new i(0)), (i.MODULE = new i(1)), (i.REQUIRE = new i(2)), (e.RegularDependency = i);
    var o = (function() {
      return function(e, t, n) {
        (this.id = e), (this.pluginId = t), (this.pluginParam = n);
      };
    })();
    e.PluginDependency = o;
    var s = (function() {
      function s(t, n, i, o, s) {
        void 0 === s && (s = 0),
          (this._env = t),
          (this._scriptLoader = n),
          (this._loaderAvailableTimestamp = s),
          (this._defineFunc = i),
          (this._requireFunc = o),
          (this._moduleIdProvider = new r()),
          (this._config = new e.Configuration(this._env)),
          (this._modules2 = []),
          (this._knownModules2 = []),
          (this._inverseDependencies2 = []),
          (this._inversePluginDependencies2 = new Map()),
          (this._currentAnnonymousDefineCall = null),
          (this._recorder = null),
          (this._buildInfoPath = []),
          (this._buildInfoDefineStack = []),
          (this._buildInfoDependencies = []);
      }
      return (
        (s.prototype.reset = function() {
          return new s(
            this._env,
            this._scriptLoader,
            this._defineFunc,
            this._requireFunc,
            this._loaderAvailableTimestamp,
          );
        }),
        (s.prototype.getGlobalAMDDefineFunc = function() {
          return this._defineFunc;
        }),
        (s.prototype.getGlobalAMDRequireFunc = function() {
          return this._requireFunc;
        }),
        (s._findRelevantLocationInStack = function(e, t) {
          for (
            var n = function(e) {
                return e.replace(/\\/g, '/');
              },
              r = n(e),
              i = t.split(/\n/),
              o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o].match(/(.*):(\d+):(\d+)\)?$/);
            if (s) {
              var u = s[1],
                a = s[2],
                l = s[3],
                c = Math.max(u.lastIndexOf(' ') + 1, u.lastIndexOf('(') + 1);
              if (((u = u.substr(c)), (u = n(u)) === r)) {
                var d = { line: parseInt(a, 10), col: parseInt(l, 10) };
                return 1 === d.line && (d.col -= '(function (require, define, __filename, __dirname) { '.length), d;
              }
            }
          }
          throw new Error('Could not correlate define call site for needle ' + e);
        }),
        (s.prototype.getBuildInfo = function() {
          if (!this._config.isBuild()) return null;
          for (var e = [], t = 0, n = 0, r = this._modules2.length; n < r; n++) {
            var i = this._modules2[n];
            if (i) {
              var o = this._buildInfoPath[i.id] || null,
                u = this._buildInfoDefineStack[i.id] || null,
                a = this._buildInfoDependencies[i.id];
              e[t++] = {
                id: i.strId,
                path: o,
                defineLocation: o && u ? s._findRelevantLocationInStack(o, u) : null,
                dependencies: a,
                shim: null,
                exports: i.exports,
              };
            }
          }
          return e;
        }),
        (s.prototype.getRecorder = function() {
          return (
            this._recorder ||
              (this._config.shouldRecordStats()
                ? (this._recorder = new e.LoaderEventRecorder(this._loaderAvailableTimestamp))
                : (this._recorder = e.NullLoaderEventRecorder.INSTANCE)),
            this._recorder
          );
        }),
        (s.prototype.getLoaderEvents = function() {
          return this.getRecorder().getEvents();
        }),
        (s.prototype.enqueueDefineAnonymousModule = function(e, t) {
          if (null !== this._currentAnnonymousDefineCall)
            throw new Error('Can only have one anonymous define call per script file');
          var n = null;
          this._config.isBuild() && (n = new Error('StackLocation').stack),
            (this._currentAnnonymousDefineCall = { stack: n, dependencies: e, callback: t });
        }),
        (s.prototype.defineModule = function(e, r, i, o, s, u) {
          var a = this;
          void 0 === u && (u = new t(e));
          var l = this._moduleIdProvider.getModuleId(e);
          if (this._modules2[l])
            this._config.isDuplicateMessageIgnoredFor(e) || console.warn("Duplicate definition of module '" + e + "'");
          else {
            var c = new n(l, e, this._normalizeDependencies(r, u), i, o, u);
            (this._modules2[l] = c),
              this._config.isBuild() &&
                ((this._buildInfoDefineStack[l] = s),
                (this._buildInfoDependencies[l] = c.dependencies.map(function(e) {
                  return a._moduleIdProvider.getStrModuleId(e.id);
                }))),
              this._resolve(c);
          }
        }),
        (s.prototype._normalizeDependency = function(e, t) {
          if ('exports' === e) return i.EXPORTS;
          if ('module' === e) return i.MODULE;
          if ('require' === e) return i.REQUIRE;
          var n = e.indexOf('!');
          if (n >= 0) {
            var r = t.resolveModule(e.substr(0, n)),
              s = t.resolveModule(e.substr(n + 1)),
              u = this._moduleIdProvider.getModuleId(r + '!' + s),
              a = this._moduleIdProvider.getModuleId(r);
            return new o(u, a, s);
          }
          return new i(this._moduleIdProvider.getModuleId(t.resolveModule(e)));
        }),
        (s.prototype._normalizeDependencies = function(e, t) {
          for (var n = [], r = 0, i = 0, o = e.length; i < o; i++) n[r++] = this._normalizeDependency(e[i], t);
          return n;
        }),
        (s.prototype._relativeRequire = function(t, n, r, i) {
          if ('string' == typeof n) return this.synchronousRequire(n, t);
          this.defineModule(e.Utilities.generateAnonymousModule(), n, r, i, null, t);
        }),
        (s.prototype.synchronousRequire = function(e, n) {
          void 0 === n && (n = new t(e));
          var r = this._normalizeDependency(e, n),
            i = this._modules2[r.id];
          if (!i)
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                e +
                "'. This is the first mention of this module!",
            );
          if (!i.isComplete())
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                e +
                "'. This module has not been resolved completely yet.",
            );
          return i.exports;
        }),
        (s.prototype.configure = function(t, n) {
          var r = this._config.shouldRecordStats();
          (this._config = n ? new e.Configuration(this._env, t) : this._config.cloneAndMerge(t)),
            this._config.shouldRecordStats() && !r && (this._recorder = null);
        }),
        (s.prototype.getConfig = function() {
          return this._config;
        }),
        (s.prototype._onLoad = function(e) {
          if (null !== this._currentAnnonymousDefineCall) {
            var t = this._currentAnnonymousDefineCall;
            (this._currentAnnonymousDefineCall = null),
              this.defineModule(this._moduleIdProvider.getStrModuleId(e), t.dependencies, t.callback, null, t.stack);
          }
        }),
        (s.prototype._createLoadError = function(e, t) {
          var n = this;
          return {
            errorCode: 'load',
            moduleId: this._moduleIdProvider.getStrModuleId(e),
            neededBy: (this._inverseDependencies2[e] || []).map(function(e) {
              return n._moduleIdProvider.getStrModuleId(e);
            }),
            detail: t,
          };
        }),
        (s.prototype._onLoadError = function(e, t) {
          for (
            var n = this._createLoadError(e, t), r = [], i = 0, o = this._moduleIdProvider.getMaxModuleId();
            i < o;
            i++
          )
            r[i] = !1;
          var s = !1,
            u = [];
          for (u.push(e), r[e] = !0; u.length > 0; ) {
            var a = u.shift(),
              l = this._modules2[a];
            l && (s = l.onDependencyError(n) || s);
            var c = this._inverseDependencies2[a];
            if (c)
              for (var i = 0, o = c.length; i < o; i++) {
                var d = c[i];
                r[d] || (u.push(d), (r[d] = !0));
              }
          }
          s || this._config.onError(n);
        }),
        (s.prototype._hasDependencyPath = function(e, t) {
          var n = this._modules2[e];
          if (!n) return !1;
          for (var r = [], i = 0, o = this._moduleIdProvider.getMaxModuleId(); i < o; i++) r[i] = !1;
          var s = [];
          for (s.push(n), r[e] = !0; s.length > 0; ) {
            var u = s.shift().dependencies;
            if (u)
              for (var i = 0, o = u.length; i < o; i++) {
                var a = u[i];
                if (a.id === t) return !0;
                var l = this._modules2[a.id];
                l && !r[a.id] && ((r[a.id] = !0), s.push(l));
              }
          }
          return !1;
        }),
        (s.prototype._findCyclePath = function(e, t, n) {
          if (e === t || 50 === n) return [e];
          var r = this._modules2[e];
          if (!r) return null;
          for (var i = r.dependencies, o = 0, s = i.length; o < s; o++) {
            var u = this._findCyclePath(i[o].id, t, n + 1);
            if (null !== u) return u.push(e), u;
          }
          return null;
        }),
        (s.prototype._createRequire = function(t) {
          var n = this,
            r = function(e, r, i) {
              return n._relativeRequire(t, e, r, i);
            };
          return (
            (r.toUrl = function(e) {
              return n._config.requireToUrl(t.resolveModule(e));
            }),
            (r.getStats = function() {
              return n.getLoaderEvents();
            }),
            (r.__$__nodeRequire = e.global.nodeRequire),
            r
          );
        }),
        (s.prototype._loadModule = function(e) {
          var t = this;
          if (!this._modules2[e] && !this._knownModules2[e]) {
            this._knownModules2[e] = !0;
            var n = this._moduleIdProvider.getStrModuleId(e),
              r = this._config.moduleIdToPaths(n);
            this._env.isNode && (-1 === n.indexOf('/') || /^@[^\/]+\/[^\/]+$/.test(n)) && r.push('node|' + n);
            var i = -1,
              o = function(n) {
                if (++i >= r.length) t._onLoadError(e, n);
                else {
                  var s = r[i],
                    u = t.getRecorder();
                  if (t._config.isBuild() && 'empty:' === s)
                    return (
                      (t._buildInfoPath[e] = s),
                      t.defineModule(t._moduleIdProvider.getStrModuleId(e), [], null, null, null),
                      void t._onLoad(e)
                    );
                  u.record(10, s),
                    t._scriptLoader.load(
                      t,
                      s,
                      function() {
                        t._config.isBuild() && (t._buildInfoPath[e] = s), u.record(11, s), t._onLoad(e);
                      },
                      function(e) {
                        u.record(12, s), o(e);
                      },
                    );
                }
              };
            o(null);
          }
        }),
        (s.prototype._loadPluginDependency = function(e, n) {
          var r = this;
          if (!this._modules2[n.id] && !this._knownModules2[n.id]) {
            this._knownModules2[n.id] = !0;
            var i = function(e) {
              r.defineModule(r._moduleIdProvider.getStrModuleId(n.id), [], e, null, null);
            };
            (i.error = function(e) {
              r._config.onError(r._createLoadError(n.id, e));
            }),
              e.load(n.pluginParam, this._createRequire(t.ROOT), i, this._config.getOptionsLiteral());
          }
        }),
        (s.prototype._resolve = function(e) {
          for (var t = this, n = e.dependencies, r = 0, s = n.length; r < s; r++) {
            var u = n[r];
            if (u !== i.EXPORTS)
              if (u !== i.MODULE)
                if (u !== i.REQUIRE) {
                  var a = this._modules2[u.id];
                  if (a && a.isComplete()) e.unresolvedDependenciesCount--;
                  else if (this._hasDependencyPath(u.id, e.id)) {
                    console.warn(
                      "There is a dependency cycle between '" +
                        this._moduleIdProvider.getStrModuleId(u.id) +
                        "' and '" +
                        this._moduleIdProvider.getStrModuleId(e.id) +
                        "'. The cyclic path follows:",
                    );
                    var l = this._findCyclePath(u.id, e.id, 0);
                    l.reverse(),
                      l.push(u.id),
                      console.warn(
                        l
                          .map(function(e) {
                            return t._moduleIdProvider.getStrModuleId(e);
                          })
                          .join(' => \n'),
                      ),
                      e.unresolvedDependenciesCount--;
                  } else if (
                    ((this._inverseDependencies2[u.id] = this._inverseDependencies2[u.id] || []),
                    this._inverseDependencies2[u.id].push(e.id),
                    u instanceof o)
                  ) {
                    var c = this._modules2[u.pluginId];
                    if (c && c.isComplete()) {
                      this._loadPluginDependency(c.exports, u);
                      continue;
                    }
                    var d = this._inversePluginDependencies2.get(u.pluginId);
                    d || ((d = []), this._inversePluginDependencies2.set(u.pluginId, d)),
                      d.push(u),
                      this._loadModule(u.pluginId);
                  } else this._loadModule(u.id);
                } else e.unresolvedDependenciesCount--;
              else e.unresolvedDependenciesCount--;
            else (e.exportsPassedIn = !0), e.unresolvedDependenciesCount--;
          }
          0 === e.unresolvedDependenciesCount && this._onModuleComplete(e);
        }),
        (s.prototype._onModuleComplete = function(e) {
          var t = this,
            n = this.getRecorder();
          if (!e.isComplete()) {
            for (var r = e.dependencies, o = [], s = 0, u = r.length; s < u; s++) {
              var a = r[s];
              if (a !== i.EXPORTS)
                if (a !== i.MODULE)
                  if (a !== i.REQUIRE) {
                    var l = this._modules2[a.id];
                    o[s] = l ? l.exports : null;
                  } else o[s] = this._createRequire(e.moduleIdResolver);
                else
                  o[s] = {
                    id: e.strId,
                    config: function() {
                      return t._config.getConfigForModule(e.strId);
                    },
                  };
              else o[s] = e.exports;
            }
            e.complete(n, this._config, o);
            var c = this._inverseDependencies2[e.id];
            if (((this._inverseDependencies2[e.id] = null), c))
              for (var s = 0, u = c.length; s < u; s++) {
                var d = c[s],
                  f = this._modules2[d];
                f.unresolvedDependenciesCount--, 0 === f.unresolvedDependenciesCount && this._onModuleComplete(f);
              }
            var h = this._inversePluginDependencies2.get(e.id);
            if (h) {
              this._inversePluginDependencies2.delete(e.id);
              for (var s = 0, u = h.length; s < u; s++) this._loadPluginDependency(e.exports, h[s]);
            }
          }
        }),
        s
      );
    })();
    e.ModuleManager = s;
  })(o || (o = {}));
  var i, o;
  !(function(e) {
    function t() {
      if (void 0 !== e.global.require || 'undefined' != typeof require) {
        var t = e.global.require || require;
        if ('function' == typeof t && 'function' == typeof t.resolve) {
          var i = function(e) {
            r.getRecorder().record(33, e);
            try {
              return t(e);
            } finally {
              r.getRecorder().record(34, e);
            }
          };
          (e.global.nodeRequire = i), (u.nodeRequire = i), (u.__$__nodeRequire = i);
        }
      }
      n.isNode && !n.isElectronRenderer
        ? ((module.exports = u), (require = u))
        : (n.isElectronRenderer || (e.global.define = o), (e.global.require = u));
    }
    var n = new e.Environment(),
      r = null,
      o = function(e, t, n) {
        'string' != typeof e && ((n = t), (t = e), (e = null)),
          ('object' == typeof t && Array.isArray(t)) || ((n = t), (t = null)),
          t || (t = ['require', 'exports', 'module']),
          e ? r.defineModule(e, t, n, null, null) : r.enqueueDefineAnonymousModule(t, n);
      };
    o.amd = { jQuery: !0 };
    var s = function(e, t) {
        void 0 === t && (t = !1), r.configure(e, t);
      },
      u = function() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) return void s(arguments[0]);
          if ('string' == typeof arguments[0]) return r.synchronousRequire(arguments[0]);
        }
        if ((2 !== arguments.length && 3 !== arguments.length) || !Array.isArray(arguments[0]))
          throw new Error('Unrecognized require call');
        r.defineModule(e.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null);
      };
    (u.config = s),
      (u.getConfig = function() {
        return r.getConfig().getOptionsLiteral();
      }),
      (u.reset = function() {
        r = r.reset();
      }),
      (u.getBuildInfo = function() {
        return r.getBuildInfo();
      }),
      (u.getStats = function() {
        return r.getLoaderEvents();
      }),
      (u.define = function() {
        return o.apply(null, arguments);
      }),
      (e.init = t),
      ('function' == typeof e.global.define && e.global.define.amd) ||
        ((r = new e.ModuleManager(n, e.createScriptLoader(n), o, u, e.Utilities.getHighPerformanceTimestamp())),
        void 0 !== e.global.require && 'function' != typeof e.global.require && u.config(e.global.require),
        ((i = function() {
          return o.apply(null, arguments);
        }).amd = o.amd),
        'undefined' == typeof doNotInitLoader && t());
  })(o || (o = {})),
    i(e[21], t([0, 1]), function(e, t) {
      'use strict';
      function n(e, t) {
        return r(e, t, 0, e.length - 1, []), e;
      }
      function r(e, t, n, i, o) {
        if (!(i <= n)) {
          var s = (n + (i - n) / 2) | 0;
          r(e, t, n, s, o),
            r(e, t, s + 1, i, o),
            t(e[s], e[s + 1]) <= 0 ||
              (function(e, t, n, r, i, o) {
                for (var s = n, u = r + 1, a = n; a <= i; a++) o[a] = e[a];
                for (a = n; a <= i; a++)
                  s > r
                    ? (e[a] = o[u++])
                    : u > i
                    ? (e[a] = o[s++])
                    : t(o[u], o[s]) < 0
                    ? (e[a] = o[u++])
                    : (e[a] = o[s++]);
              })(e, t, n, s, i, o);
        }
      }
      function i(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (t(e[n])) return n;
        }
        return -1;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.tail = function(e, t) {
          return void 0 === t && (t = 0), e[e.length - (1 + t)];
        }),
        (t.tail2 = function(e) {
          if (0 === e.length) throw new Error('Invalid tail call');
          return [e.slice(0, e.length - 1), e[e.length - 1]];
        }),
        (t.equals = function(e, t, n) {
          if (
            (void 0 === n &&
              (n = function(e, t) {
                return e === t;
              }),
            e === t)
          )
            return !0;
          if (!e || !t) return !1;
          if (e.length !== t.length) return !1;
          for (var r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1;
          return !0;
        }),
        (t.binarySearch = function(e, t, n) {
          for (var r = 0, i = e.length - 1; r <= i; ) {
            var o = ((r + i) / 2) | 0,
              s = n(e[o], t);
            if (s < 0) r = o + 1;
            else {
              if (!(s > 0)) return o;
              i = o - 1;
            }
          }
          return -(r + 1);
        }),
        (t.findFirstInSorted = function(e, t) {
          var n = 0,
            r = e.length;
          if (0 === r) return 0;
          for (; n < r; ) {
            var i = Math.floor((n + r) / 2);
            t(e[i]) ? (r = i) : (n = i + 1);
          }
          return n;
        }),
        (t.mergeSort = n),
        (t.groupBy = function(e, t) {
          for (var r = [], i = void 0, o = 0, s = n(e.slice(0), t); o < s.length; o++) {
            var u = s[o];
            i && 0 === t(i[0], u) ? i.push(u) : ((i = [u]), r.push(i));
          }
          return r;
        }),
        (t.coalesce = function(e) {
          return e
            ? e.filter(function(e) {
                return !!e;
              })
            : e;
        }),
        (t.isFalsyOrEmpty = function(e) {
          return !Array.isArray(e) || 0 === e.length;
        }),
        (t.isNonEmptyArray = function(e) {
          return Array.isArray(e) && e.length > 0;
        }),
        (t.distinct = function(e, t) {
          if (!t)
            return e.filter(function(t, n) {
              return e.indexOf(t) === n;
            });
          var n = Object.create(null);
          return e.filter(function(e) {
            var r = t(e);
            return !n[r] && ((n[r] = !0), !0);
          });
        }),
        (t.distinctES6 = function(e) {
          var t = new Set();
          return e.filter(function(e) {
            return !t.has(e) && (t.add(e), !0);
          });
        }),
        (t.firstIndex = i),
        (t.first = function(e, t, n) {
          void 0 === n && (n = void 0);
          var r = i(e, t);
          return r < 0 ? n : e[r];
        }),
        (t.flatten = function(e) {
          var t;
          return (t = []).concat.apply(t, e);
        }),
        (t.range = function(e, t) {
          var n = 'number' == typeof t ? e : 0;
          'number' == typeof t ? (n = e) : ((n = 0), (t = e));
          var r = [];
          if (n <= t) for (i = n; i < t; i++) r.push(i);
          else for (var i = n; i > t; i--) r.push(i);
          return r;
        }),
        (t.arrayInsert = function(e, t, n) {
          var r = e.slice(0, t),
            i = e.slice(t);
          return r.concat(n, i);
        }),
        (t.pushToStart = function(e, t) {
          var n = e.indexOf(t);
          n > -1 && (e.splice(n, 1), e.unshift(t));
        }),
        (t.pushToEnd = function(e, t) {
          var n = e.indexOf(t);
          n > -1 && (e.splice(n, 1), e.push(t));
        }),
        (t.asArray = function(e) {
          return Array.isArray(e) ? e : [e];
        });
    }),
    i(e[15], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
        function e(e, t, n, r) {
          (this.originalStart = e), (this.originalLength = t), (this.modifiedStart = n), (this.modifiedLength = r);
        }
        return (
          (e.prototype.getOriginalEnd = function() {
            return this.originalStart + this.originalLength;
          }),
          (e.prototype.getModifiedEnd = function() {
            return this.modifiedStart + this.modifiedLength;
          }),
          e
        );
      })();
      t.DiffChange = n;
    }),
    i(e[8], t([0, 1, 15]), function(e, t, n) {
      'use strict';
      function r(e) {
        return {
          getLength: function() {
            return e.length;
          },
          getElementAtIndex: function(t) {
            return e.charCodeAt(t);
          },
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.stringDiff = function(e, t, n) {
          return new u(r(e), r(t)).ComputeDiff(n);
        });
      var i = (function() {
        function e() {}
        return (
          (e.Assert = function(e, t) {
            if (!e) throw new Error(t);
          }),
          e
        );
      })();
      t.Debug = i;
      var o = (function() {
        function e() {}
        return (
          (e.Copy = function(e, t, n, r, i) {
            for (var o = 0; o < i; o++) n[r + o] = e[t + o];
          }),
          e
        );
      })();
      t.MyArray = o;
      var s = (function() {
          function e() {
            (this.m_changes = []),
              (this.m_originalStart = Number.MAX_VALUE),
              (this.m_modifiedStart = Number.MAX_VALUE),
              (this.m_originalCount = 0),
              (this.m_modifiedCount = 0);
          }
          return (
            (e.prototype.MarkNextChange = function() {
              (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                this.m_changes.push(
                  new n.DiffChange(
                    this.m_originalStart,
                    this.m_originalCount,
                    this.m_modifiedStart,
                    this.m_modifiedCount,
                  ),
                ),
                (this.m_originalCount = 0),
                (this.m_modifiedCount = 0),
                (this.m_originalStart = Number.MAX_VALUE),
                (this.m_modifiedStart = Number.MAX_VALUE);
            }),
            (e.prototype.AddOriginalElement = function(e, t) {
              (this.m_originalStart = Math.min(this.m_originalStart, e)),
                (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                this.m_originalCount++;
            }),
            (e.prototype.AddModifiedElement = function(e, t) {
              (this.m_originalStart = Math.min(this.m_originalStart, e)),
                (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                this.m_modifiedCount++;
            }),
            (e.prototype.getChanges = function() {
              return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
            }),
            (e.prototype.getReverseChanges = function() {
              return (
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(),
                this.m_changes.reverse(),
                this.m_changes
              );
            }),
            e
          );
        })(),
        u = (function() {
          function e(e, t, n) {
            void 0 === n && (n = null),
              (this.OriginalSequence = e),
              (this.ModifiedSequence = t),
              (this.ContinueProcessingPredicate = n),
              (this.m_forwardHistory = []),
              (this.m_reverseHistory = []);
          }
          return (
            (e.prototype.ElementsAreEqual = function(e, t) {
              return this.OriginalSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
            }),
            (e.prototype.OriginalElementsAreEqual = function(e, t) {
              return this.OriginalSequence.getElementAtIndex(e) === this.OriginalSequence.getElementAtIndex(t);
            }),
            (e.prototype.ModifiedElementsAreEqual = function(e, t) {
              return this.ModifiedSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
            }),
            (e.prototype.ComputeDiff = function(e) {
              return this._ComputeDiff(
                0,
                this.OriginalSequence.getLength() - 1,
                0,
                this.ModifiedSequence.getLength() - 1,
                e,
              );
            }),
            (e.prototype._ComputeDiff = function(e, t, n, r, i) {
              var o = this.ComputeDiffRecursive(e, t, n, r, [!1]);
              return i ? this.PrettifyChanges(o) : o;
            }),
            (e.prototype.ComputeDiffRecursive = function(e, t, r, o, s) {
              for (s[0] = !1; e <= t && r <= o && this.ElementsAreEqual(e, r); ) e++, r++;
              for (; t >= e && o >= r && this.ElementsAreEqual(t, o); ) t--, o--;
              if (e > t || r > o) {
                var u = void 0;
                return (
                  r <= o
                    ? (i.Assert(e === t + 1, 'originalStart should only be one more than originalEnd'),
                      (u = [new n.DiffChange(e, 0, r, o - r + 1)]))
                    : e <= t
                    ? (i.Assert(r === o + 1, 'modifiedStart should only be one more than modifiedEnd'),
                      (u = [new n.DiffChange(e, t - e + 1, r, 0)]))
                    : (i.Assert(e === t + 1, 'originalStart should only be one more than originalEnd'),
                      i.Assert(r === o + 1, 'modifiedStart should only be one more than modifiedEnd'),
                      (u = [])),
                  u
                );
              }
              var a = [0],
                l = [0],
                c = this.ComputeRecursionPoint(e, t, r, o, a, l, s),
                d = a[0],
                f = l[0];
              if (null !== c) return c;
              if (!s[0]) {
                var h = this.ComputeDiffRecursive(e, d, r, f, s),
                  p = [];
                return (
                  (p = s[0]
                    ? [new n.DiffChange(d + 1, t - (d + 1) + 1, f + 1, o - (f + 1) + 1)]
                    : this.ComputeDiffRecursive(d + 1, t, f + 1, o, s)),
                  this.ConcatenateChanges(h, p)
                );
              }
              return [new n.DiffChange(e, t - e + 1, r, o - r + 1)];
            }),
            (e.prototype.WALKTRACE = function(e, t, r, i, o, u, a, l, c, d, f, h, p, m, g, _, v, y) {
              var C,
                b = null,
                E = null,
                L = new s(),
                N = t,
                S = r,
                M = p[0] - _[0] - i,
                A = Number.MIN_VALUE,
                P = this.m_forwardHistory.length - 1;
              do {
                (C = M + e) === N || (C < S && c[C - 1] < c[C + 1])
                  ? ((m = (f = c[C + 1]) - M - i),
                    f < A && L.MarkNextChange(),
                    (A = f),
                    L.AddModifiedElement(f + 1, m),
                    (M = C + 1 - e))
                  : ((m = (f = c[C - 1] + 1) - M - i),
                    f < A && L.MarkNextChange(),
                    (A = f - 1),
                    L.AddOriginalElement(f, m + 1),
                    (M = C - 1 - e)),
                  P >= 0 && ((e = (c = this.m_forwardHistory[P])[0]), (N = 1), (S = c.length - 1));
              } while (--P >= -1);
              if (((b = L.getReverseChanges()), y[0])) {
                var w = p[0] + 1,
                  I = _[0] + 1;
                if (null !== b && b.length > 0) {
                  var D = b[b.length - 1];
                  (w = Math.max(w, D.getOriginalEnd())), (I = Math.max(I, D.getModifiedEnd()));
                }
                E = [new n.DiffChange(w, h - w + 1, I, g - I + 1)];
              } else {
                (L = new s()),
                  (N = u),
                  (S = a),
                  (M = p[0] - _[0] - l),
                  (A = Number.MAX_VALUE),
                  (P = v ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2);
                do {
                  (C = M + o) === N || (C < S && d[C - 1] >= d[C + 1])
                    ? ((m = (f = d[C + 1] - 1) - M - l),
                      f > A && L.MarkNextChange(),
                      (A = f + 1),
                      L.AddOriginalElement(f + 1, m + 1),
                      (M = C + 1 - o))
                    : ((m = (f = d[C - 1]) - M - l),
                      f > A && L.MarkNextChange(),
                      (A = f),
                      L.AddModifiedElement(f + 1, m + 1),
                      (M = C - 1 - o)),
                    P >= 0 && ((o = (d = this.m_reverseHistory[P])[0]), (N = 1), (S = d.length - 1));
                } while (--P >= -1);
                E = L.getChanges();
              }
              return this.ConcatenateChanges(b, E);
            }),
            (e.prototype.ComputeRecursionPoint = function(e, t, r, i, s, u, a) {
              var l,
                c = 0,
                d = 0,
                f = 0,
                h = 0,
                p = 0,
                m = 0;
              e--, r--, (s[0] = 0), (u[0] = 0), (this.m_forwardHistory = []), (this.m_reverseHistory = []);
              var g = t - e + (i - r),
                _ = g + 1,
                v = new Array(_),
                y = new Array(_),
                C = i - r,
                b = t - e,
                E = e - r,
                L = t - i,
                N = (b - C) % 2 == 0;
              (v[C] = e), (y[b] = t), (a[0] = !1);
              var S, M;
              for (l = 1; l <= g / 2 + 1; l++) {
                var A = 0,
                  P = 0;
                for (
                  f = this.ClipDiagonalBound(C - l, l, C, _), h = this.ClipDiagonalBound(C + l, l, C, _), S = f;
                  S <= h;
                  S += 2
                ) {
                  for (
                    d = (c = S === f || (S < h && v[S - 1] < v[S + 1]) ? v[S + 1] : v[S - 1] + 1) - (S - C) - E, M = c;
                    c < t && d < i && this.ElementsAreEqual(c + 1, d + 1);

                  )
                    c++, d++;
                  if (((v[S] = c), c + d > A + P && ((A = c), (P = d)), !N && Math.abs(S - b) <= l - 1 && c >= y[S]))
                    return (
                      (s[0] = c),
                      (u[0] = d),
                      M <= y[S] && l <= 1448
                        ? this.WALKTRACE(C, f, h, E, b, p, m, L, v, y, c, t, s, d, i, u, N, a)
                        : null
                    );
                }
                var w = (A - e + (P - r) - l) / 2;
                if (
                  null !== this.ContinueProcessingPredicate &&
                  !this.ContinueProcessingPredicate(A, this.OriginalSequence, w)
                )
                  return (
                    (a[0] = !0),
                    (s[0] = A),
                    (u[0] = P),
                    w > 0 && l <= 1448
                      ? this.WALKTRACE(C, f, h, E, b, p, m, L, v, y, c, t, s, d, i, u, N, a)
                      : (e++, r++, [new n.DiffChange(e, t - e + 1, r, i - r + 1)])
                  );
                for (
                  p = this.ClipDiagonalBound(b - l, l, b, _), m = this.ClipDiagonalBound(b + l, l, b, _), S = p;
                  S <= m;
                  S += 2
                ) {
                  for (
                    d = (c = S === p || (S < m && y[S - 1] >= y[S + 1]) ? y[S + 1] - 1 : y[S - 1]) - (S - b) - L, M = c;
                    c > e && d > r && this.ElementsAreEqual(c, d);

                  )
                    c--, d--;
                  if (((y[S] = c), N && Math.abs(S - C) <= l && c <= v[S]))
                    return (
                      (s[0] = c),
                      (u[0] = d),
                      M >= v[S] && l <= 1448
                        ? this.WALKTRACE(C, f, h, E, b, p, m, L, v, y, c, t, s, d, i, u, N, a)
                        : null
                    );
                }
                if (l <= 1447) {
                  var I = new Array(h - f + 2);
                  (I[0] = C - f + 1),
                    o.Copy(v, f, I, 1, h - f + 1),
                    this.m_forwardHistory.push(I),
                    ((I = new Array(m - p + 2))[0] = b - p + 1),
                    o.Copy(y, p, I, 1, m - p + 1),
                    this.m_reverseHistory.push(I);
                }
              }
              return this.WALKTRACE(C, f, h, E, b, p, m, L, v, y, c, t, s, d, i, u, N, a);
            }),
            (e.prototype.PrettifyChanges = function(e) {
              for (u = 0; u < e.length; u++) {
                for (
                  var t = e[u],
                    n = u < e.length - 1 ? e[u + 1].originalStart : this.OriginalSequence.getLength(),
                    r = u < e.length - 1 ? e[u + 1].modifiedStart : this.ModifiedSequence.getLength(),
                    i = t.originalLength > 0,
                    o = t.modifiedLength > 0;
                  t.originalStart + t.originalLength < n &&
                  t.modifiedStart + t.modifiedLength < r &&
                  (!i || this.OriginalElementsAreEqual(t.originalStart, t.originalStart + t.originalLength)) &&
                  (!o || this.ModifiedElementsAreEqual(t.modifiedStart, t.modifiedStart + t.modifiedLength));

                )
                  t.originalStart++, t.modifiedStart++;
                var s = [null];
                u < e.length - 1 && this.ChangesOverlap(e[u], e[u + 1], s) && ((e[u] = s[0]), e.splice(u + 1, 1), u--);
              }
              for (var u = e.length - 1; u >= 0; u--) {
                var t = e[u],
                  n = 0,
                  r = 0;
                if (u > 0) {
                  var a = e[u - 1];
                  a.originalLength > 0 && (n = a.originalStart + a.originalLength),
                    a.modifiedLength > 0 && (r = a.modifiedStart + a.modifiedLength);
                }
                for (
                  var i = t.originalLength > 0,
                    o = t.modifiedLength > 0,
                    l = 0,
                    c = this._boundaryScore(t.originalStart, t.originalLength, t.modifiedStart, t.modifiedLength),
                    d = 1;
                  ;
                  d++
                ) {
                  var f = t.originalStart - d,
                    h = t.modifiedStart - d;
                  if (f < n || h < r) break;
                  if (i && !this.OriginalElementsAreEqual(f, f + t.originalLength)) break;
                  if (o && !this.ModifiedElementsAreEqual(h, h + t.modifiedLength)) break;
                  var p = this._boundaryScore(f, t.originalLength, h, t.modifiedLength);
                  p > c && ((c = p), (l = d));
                }
                (t.originalStart -= l), (t.modifiedStart -= l);
              }
              return e;
            }),
            (e.prototype._OriginalIsBoundary = function(e) {
              if (e <= 0 || e >= this.OriginalSequence.getLength() - 1) return !0;
              var t = this.OriginalSequence.getElementAtIndex(e);
              return 'string' == typeof t && /^\s*$/.test(t);
            }),
            (e.prototype._OriginalRegionIsBoundary = function(e, t) {
              if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
              if (t > 0) {
                var n = e + t;
                if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0;
              }
              return !1;
            }),
            (e.prototype._ModifiedIsBoundary = function(e) {
              if (e <= 0 || e >= this.ModifiedSequence.getLength() - 1) return !0;
              var t = this.ModifiedSequence.getElementAtIndex(e);
              return 'string' == typeof t && /^\s*$/.test(t);
            }),
            (e.prototype._ModifiedRegionIsBoundary = function(e, t) {
              if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
              if (t > 0) {
                var n = e + t;
                if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0;
              }
              return !1;
            }),
            (e.prototype._boundaryScore = function(e, t, n, r) {
              return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0);
            }),
            (e.prototype.ConcatenateChanges = function(e, t) {
              var n = [];
              if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
              if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
                r = new Array(e.length + t.length - 1);
                return (
                  o.Copy(e, 0, r, 0, e.length - 1), (r[e.length - 1] = n[0]), o.Copy(t, 1, r, e.length, t.length - 1), r
                );
              }
              var r = new Array(e.length + t.length);
              return o.Copy(e, 0, r, 0, e.length), o.Copy(t, 0, r, e.length, t.length), r;
            }),
            (e.prototype.ChangesOverlap = function(e, t, r) {
              if (
                (i.Assert(e.originalStart <= t.originalStart, 'Left change is not less than or equal to right change'),
                i.Assert(e.modifiedStart <= t.modifiedStart, 'Left change is not less than or equal to right change'),
                e.originalStart + e.originalLength >= t.originalStart ||
                  e.modifiedStart + e.modifiedLength >= t.modifiedStart)
              ) {
                var o = e.originalStart,
                  s = e.originalLength,
                  u = e.modifiedStart,
                  a = e.modifiedLength;
                return (
                  e.originalStart + e.originalLength >= t.originalStart &&
                    (s = t.originalStart + t.originalLength - e.originalStart),
                  e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                    (a = t.modifiedStart + t.modifiedLength - e.modifiedStart),
                  (r[0] = new n.DiffChange(o, s, u, a)),
                  !0
                );
              }
              return (r[0] = null), !1;
            }),
            (e.prototype.ClipDiagonalBound = function(e, t, n, r) {
              if (e >= 0 && e < r) return e;
              var i = r - n - 1,
                o = t % 2 == 0;
              if (e < 0) {
                return o === (n % 2 == 0) ? 0 : 1;
              }
              return o === (i % 2 == 0) ? r - 1 : r - 2;
            }),
            e
          );
        })();
      t.LcsDiff = u;
    }),
    i(e[5], t([0, 1]), function(e, t) {
      'use strict';
      function n(e) {
        return e instanceof Error && e.name === i && e.message === i;
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e() {
          (this.listeners = []),
            (this.unexpectedErrorHandler = function(e) {
              setTimeout(function() {
                if (e.stack) throw new Error(e.message + '\n\n' + e.stack);
                throw e;
              }, 0);
            });
        }
        return (
          (e.prototype.emit = function(e) {
            this.listeners.forEach(function(t) {
              t(e);
            });
          }),
          (e.prototype.onUnexpectedError = function(e) {
            this.unexpectedErrorHandler(e), this.emit(e);
          }),
          (e.prototype.onUnexpectedExternalError = function(e) {
            this.unexpectedErrorHandler(e);
          }),
          e
        );
      })();
      (t.ErrorHandler = r),
        (t.errorHandler = new r()),
        (t.onUnexpectedError = function(e) {
          n(e) || t.errorHandler.onUnexpectedError(e);
        }),
        (t.onUnexpectedExternalError = function(e) {
          n(e) || t.errorHandler.onUnexpectedExternalError(e);
        }),
        (t.transformErrorForSerialization = function(e) {
          if (e instanceof Error)
            return { $isError: !0, name: e.name, message: e.message, stack: e.stacktrace || e.stack };
          return e;
        });
      var i = 'Canceled';
      (t.isPromiseCanceledError = n),
        (t.canceled = function() {
          var e = new Error(i);
          return (e.name = e.message), e;
        }),
        (t.illegalArgument = function(e) {
          return e ? new Error('Illegal argument: ' + e) : new Error('Illegal argument');
        }),
        (t.illegalState = function(e) {
          return e ? new Error('Illegal state: ' + e) : new Error('Illegal state');
        });
    }),
    i(e[17], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.once = function(e) {
          var t,
            n = this,
            r = !1;
          return function() {
            return r ? t : ((r = !0), (t = e.apply(n, arguments)));
          };
        });
    });
  var s =
    (this && this.__extends) ||
    (function() {
      var e = function(t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(t, n);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
      };
    })();
  i(e[11], t([0, 1]), function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.FIN = { done: !0, value: void 0 });
    var n;
    !(function(e) {
      function n(e, t) {
        for (var n = e.next(); !n.done; n = e.next()) t(n.value);
      }
      var r = {
        next: function() {
          return t.FIN;
        },
      };
      (e.empty = function() {
        return r;
      }),
        (e.fromArray = function(e, n, r) {
          return (
            void 0 === n && (n = 0),
            void 0 === r && (r = e.length),
            {
              next: function() {
                return n >= r ? t.FIN : { done: !1, value: e[n++] };
              },
            }
          );
        }),
        (e.from = function(t) {
          return t ? (Array.isArray(t) ? e.fromArray(t) : t) : e.empty();
        }),
        (e.map = function(e, n) {
          return {
            next: function() {
              var r = e.next();
              return r.done ? t.FIN : { done: !1, value: n(r.value) };
            },
          };
        }),
        (e.filter = function(e, n) {
          return {
            next: function() {
              for (;;) {
                var r = e.next();
                if (r.done) return t.FIN;
                if (n(r.value)) return { done: !1, value: r.value };
              }
            },
          };
        }),
        (e.forEach = n),
        (e.collect = function(e) {
          var t = [];
          return (
            n(e, function(e) {
              return t.push(e);
            }),
            t
          );
        });
    })((n = t.Iterator || (t.Iterator = {}))),
      (t.getSequenceIterator = function(e) {
        return Array.isArray(e) ? n.fromArray(e) : e;
      });
    var r = (function() {
      function e(e, t, n, r) {
        void 0 === t && (t = 0),
          void 0 === n && (n = e.length),
          void 0 === r && (r = t - 1),
          (this.items = e),
          (this.start = t),
          (this.end = n),
          (this.index = r);
      }
      return (
        (e.prototype.next = function() {
          return (this.index = Math.min(this.index + 1, this.end)), this.current();
        }),
        (e.prototype.current = function() {
          return this.index === this.start - 1 || this.index === this.end ? null : this.items[this.index];
        }),
        e
      );
    })();
    t.ArrayIterator = r;
    var i = (function(e) {
      function t(t, n, r, i) {
        return (
          void 0 === n && (n = 0),
          void 0 === r && (r = t.length),
          void 0 === i && (i = n - 1),
          e.call(this, t, n, r, i) || this
        );
      }
      return (
        s(t, e),
        (t.prototype.current = function() {
          return e.prototype.current.call(this);
        }),
        (t.prototype.previous = function() {
          return (this.index = Math.max(this.index - 1, this.start - 1)), this.current();
        }),
        (t.prototype.first = function() {
          return (this.index = this.start), this.current();
        }),
        (t.prototype.last = function() {
          return (this.index = this.end - 1), this.current();
        }),
        (t.prototype.parent = function() {
          return null;
        }),
        t
      );
    })(r);
    t.ArrayNavigator = i;
    var o = (function() {
      function e(e, t) {
        (this.iterator = e), (this.fn = t);
      }
      return (
        (e.prototype.next = function() {
          return this.fn(this.iterator.next());
        }),
        e
      );
    })();
    t.MappedIterator = o;
  }),
    i(e[14], t([0, 1, 5]), function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = !!(2048 & e),
          r = !!(256 & e);
        return new a(2 === t ? r : n, !!(1024 & e), !!(512 & e), 2 === t ? n : r, 255 & e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
          function e() {
            (this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null));
          }
          return (
            (e.prototype.define = function(e, t) {
              (this._keyCodeToStr[e] = t), (this._strToKeyCode[t.toLowerCase()] = e);
            }),
            (e.prototype.keyCodeToStr = function(e) {
              return this._keyCodeToStr[e];
            }),
            (e.prototype.strToKeyCode = function(e) {
              return this._strToKeyCode[e.toLowerCase()] || 0;
            }),
            e
          );
        })(),
        o = new i(),
        s = new i(),
        u = new i();
      !(function() {
        function e(e, t, n, r) {
          void 0 === n && (n = t), void 0 === r && (r = n), o.define(e, t), s.define(e, n), u.define(e, r);
        }
        e(0, 'unknown'),
          e(1, 'Backspace'),
          e(2, 'Tab'),
          e(3, 'Enter'),
          e(4, 'Shift'),
          e(5, 'Ctrl'),
          e(6, 'Alt'),
          e(7, 'PauseBreak'),
          e(8, 'CapsLock'),
          e(9, 'Escape'),
          e(10, 'Space'),
          e(11, 'PageUp'),
          e(12, 'PageDown'),
          e(13, 'End'),
          e(14, 'Home'),
          e(15, 'LeftArrow', 'Left'),
          e(16, 'UpArrow', 'Up'),
          e(17, 'RightArrow', 'Right'),
          e(18, 'DownArrow', 'Down'),
          e(19, 'Insert'),
          e(20, 'Delete'),
          e(21, '0'),
          e(22, '1'),
          e(23, '2'),
          e(24, '3'),
          e(25, '4'),
          e(26, '5'),
          e(27, '6'),
          e(28, '7'),
          e(29, '8'),
          e(30, '9'),
          e(31, 'A'),
          e(32, 'B'),
          e(33, 'C'),
          e(34, 'D'),
          e(35, 'E'),
          e(36, 'F'),
          e(37, 'G'),
          e(38, 'H'),
          e(39, 'I'),
          e(40, 'J'),
          e(41, 'K'),
          e(42, 'L'),
          e(43, 'M'),
          e(44, 'N'),
          e(45, 'O'),
          e(46, 'P'),
          e(47, 'Q'),
          e(48, 'R'),
          e(49, 'S'),
          e(50, 'T'),
          e(51, 'U'),
          e(52, 'V'),
          e(53, 'W'),
          e(54, 'X'),
          e(55, 'Y'),
          e(56, 'Z'),
          e(57, 'Meta'),
          e(58, 'ContextMenu'),
          e(59, 'F1'),
          e(60, 'F2'),
          e(61, 'F3'),
          e(62, 'F4'),
          e(63, 'F5'),
          e(64, 'F6'),
          e(65, 'F7'),
          e(66, 'F8'),
          e(67, 'F9'),
          e(68, 'F10'),
          e(69, 'F11'),
          e(70, 'F12'),
          e(71, 'F13'),
          e(72, 'F14'),
          e(73, 'F15'),
          e(74, 'F16'),
          e(75, 'F17'),
          e(76, 'F18'),
          e(77, 'F19'),
          e(78, 'NumLock'),
          e(79, 'ScrollLock'),
          e(80, ';', ';', 'OEM_1'),
          e(81, '=', '=', 'OEM_PLUS'),
          e(82, ',', ',', 'OEM_COMMA'),
          e(83, '-', '-', 'OEM_MINUS'),
          e(84, '.', '.', 'OEM_PERIOD'),
          e(85, '/', '/', 'OEM_2'),
          e(86, '`', '`', 'OEM_3'),
          e(110, 'ABNT_C1'),
          e(111, 'ABNT_C2'),
          e(87, '[', '[', 'OEM_4'),
          e(88, '\\', '\\', 'OEM_5'),
          e(89, ']', ']', 'OEM_6'),
          e(90, "'", "'", 'OEM_7'),
          e(91, 'OEM_8'),
          e(92, 'OEM_102'),
          e(93, 'NumPad0'),
          e(94, 'NumPad1'),
          e(95, 'NumPad2'),
          e(96, 'NumPad3'),
          e(97, 'NumPad4'),
          e(98, 'NumPad5'),
          e(99, 'NumPad6'),
          e(100, 'NumPad7'),
          e(101, 'NumPad8'),
          e(102, 'NumPad9'),
          e(103, 'NumPad_Multiply'),
          e(104, 'NumPad_Add'),
          e(105, 'NumPad_Separator'),
          e(106, 'NumPad_Subtract'),
          e(107, 'NumPad_Decimal'),
          e(108, 'NumPad_Divide');
      })();
      !(function(e) {
        (e.toString = function(e) {
          return o.keyCodeToStr(e);
        }),
          (e.fromString = function(e) {
            return o.strToKeyCode(e);
          }),
          (e.toUserSettingsUS = function(e) {
            return s.keyCodeToStr(e);
          }),
          (e.toUserSettingsGeneral = function(e) {
            return u.keyCodeToStr(e);
          }),
          (e.fromUserSettings = function(e) {
            return s.strToKeyCode(e) || u.strToKeyCode(e);
          });
      })(t.KeyCodeUtils || (t.KeyCodeUtils = {})),
        (t.KeyChord = function(e, t) {
          return (e | (((65535 & t) << 16) >>> 0)) >>> 0;
        }),
        (t.createKeybinding = function(e, t) {
          if (0 === e) return null;
          var n = (65535 & e) >>> 0,
            i = (4294901760 & e) >>> 16;
          return new l(0 !== i ? [r(n, t), r(i, t)] : [r(n, t)]);
        }),
        (t.createSimpleKeybinding = r);
      var a = (function() {
        function e(e, t, n, r, i) {
          (this.ctrlKey = e), (this.shiftKey = t), (this.altKey = n), (this.metaKey = r), (this.keyCode = i);
        }
        return (
          (e.prototype.equals = function(e) {
            return (
              this.ctrlKey === e.ctrlKey &&
              this.shiftKey === e.shiftKey &&
              this.altKey === e.altKey &&
              this.metaKey === e.metaKey &&
              this.keyCode === e.keyCode
            );
          }),
          (e.prototype.isModifierKey = function() {
            return (
              0 === this.keyCode ||
              5 === this.keyCode ||
              57 === this.keyCode ||
              6 === this.keyCode ||
              4 === this.keyCode
            );
          }),
          (e.prototype.toChord = function() {
            return new l([this]);
          }),
          (e.prototype.isDuplicateModifierCase = function() {
            return (
              (this.ctrlKey && 5 === this.keyCode) ||
              (this.shiftKey && 4 === this.keyCode) ||
              (this.altKey && 6 === this.keyCode) ||
              (this.metaKey && 57 === this.keyCode)
            );
          }),
          e
        );
      })();
      t.SimpleKeybinding = a;
      var l = (function() {
        function e(e) {
          if (0 === e.length) throw n.illegalArgument('parts');
          this.parts = e;
        }
        return (
          (e.prototype.equals = function(e) {
            if (null === e) return !1;
            if (this.parts.length !== e.parts.length) return !1;
            for (var t = 0; t < this.parts.length; t++) if (!this.parts[t].equals(e.parts[t])) return !1;
            return !0;
          }),
          e
        );
      })();
      t.ChordKeybinding = l;
      var c = (function() {
        return function(e, t, n, r, i, o) {
          (this.ctrlKey = e),
            (this.shiftKey = t),
            (this.altKey = n),
            (this.metaKey = r),
            (this.keyLabel = i),
            (this.keyAriaLabel = o);
        };
      })();
      t.ResolvedKeybindingPart = c;
      var d = (function() {
        return function() {};
      })();
      t.ResolvedKeybinding = d;
    }),
    i(e[10], t([0, 1]), function(e, t) {
      'use strict';
      function n(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return Array.isArray(e)
          ? (e.forEach(function(e) {
              return e && e.dispose();
            }),
            [])
          : 0 !== t.length
          ? (n(e), n(t), [])
          : e
          ? (e.dispose(), e)
          : void 0;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isDisposable = function(e) {
          return 'function' == typeof e.dispose && 0 === e.dispose.length;
        }),
        (t.dispose = n),
        (t.combinedDisposable = function(e) {
          return {
            dispose: function() {
              return n(e);
            },
          };
        }),
        (t.toDisposable = function(e) {
          return {
            dispose: function() {
              e();
            },
          };
        });
      var r = (function() {
        function e() {
          (this._toDispose = []), (this._lifecycle_disposable_isDisposed = !1);
        }
        return (
          (e.prototype.dispose = function() {
            (this._lifecycle_disposable_isDisposed = !0), (this._toDispose = n(this._toDispose));
          }),
          (e.prototype._register = function(e) {
            return (
              this._lifecycle_disposable_isDisposed
                ? (console.warn('Registering disposable on object that has already been disposed.'), e.dispose())
                : this._toDispose.push(e),
              e
            );
          }),
          (e.None = Object.freeze({ dispose: function() {} })),
          e
        );
      })();
      t.Disposable = r;
      var i = (function() {
        function e(e) {
          this.object = e;
        }
        return (e.prototype.dispose = function() {}), e;
      })();
      t.ImmortalReference = i;
    }),
    i(e[16], t([0, 1, 11]), function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
          function e(t) {
            (this.element = t), (this.next = e.Undefined), (this.prev = e.Undefined);
          }
          return (e.Undefined = new e(void 0)), e;
        })(),
        i = (function() {
          function e() {
            (this._first = r.Undefined), (this._last = r.Undefined), (this._size = 0);
          }
          return (
            Object.defineProperty(e.prototype, 'size', {
              get: function() {
                return this._size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.isEmpty = function() {
              return this._first === r.Undefined;
            }),
            (e.prototype.clear = function() {
              (this._first = r.Undefined), (this._last = r.Undefined), (this._size = 0);
            }),
            (e.prototype.unshift = function(e) {
              return this._insert(e, !1);
            }),
            (e.prototype.push = function(e) {
              return this._insert(e, !0);
            }),
            (e.prototype._insert = function(e, t) {
              var n = this,
                i = new r(e);
              if (this._first === r.Undefined) (this._first = i), (this._last = i);
              else if (t) {
                var o = this._last;
                (this._last = i), (i.prev = o), (o.next = i);
              } else {
                var s = this._first;
                (this._first = i), (i.next = s), (s.prev = i);
              }
              this._size += 1;
              var u = !1;
              return function() {
                u || ((u = !0), n._remove(i));
              };
            }),
            (e.prototype.shift = function() {
              if (this._first !== r.Undefined) {
                var e = this._first.element;
                return this._remove(this._first), e;
              }
            }),
            (e.prototype._remove = function(e) {
              if (e.prev !== r.Undefined && e.next !== r.Undefined) {
                var t = e.prev;
                (t.next = e.next), (e.next.prev = t);
              } else
                e.prev === r.Undefined && e.next === r.Undefined
                  ? ((this._first = r.Undefined), (this._last = r.Undefined))
                  : e.next === r.Undefined
                  ? ((this._last = this._last.prev), (this._last.next = r.Undefined))
                  : e.prev === r.Undefined && ((this._first = this._first.next), (this._first.prev = r.Undefined));
              this._size -= 1;
            }),
            (e.prototype.iterator = function() {
              var e,
                t = this._first;
              return {
                next: function() {
                  return t === r.Undefined
                    ? n.FIN
                    : (e ? (e.value = t.element) : (e = { done: !1, value: t.element }), (t = t.next), e);
                },
              };
            }),
            (e.prototype.toArray = function() {
              for (var e = [], t = this._first; t !== r.Undefined; t = t.next) e.push(t.element);
              return e;
            }),
            e
          );
        })();
      t.LinkedList = i;
    }),
    i(e[9], t([0, 1, 5, 17, 10, 16]), function(e, t, n, r, i, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u;
      !(function(e) {
        function t(e) {
          return function(t, n, r) {
            void 0 === n && (n = null);
            var i,
              o = !1;
            return (
              (i = e(
                function(e) {
                  if (!o) return i ? i.dispose() : (o = !0), t.call(n, e);
                },
                null,
                r,
              )),
              o && i.dispose(),
              i
            );
          };
        }
        function n(e, t) {
          return u(function(n, r, i) {
            return (
              void 0 === r && (r = null),
              e(
                function(e) {
                  return n.call(r, t(e));
                },
                null,
                i,
              )
            );
          });
        }
        function r(e, t) {
          return u(function(n, r, i) {
            return (
              void 0 === r && (r = null),
              e(
                function(e) {
                  t(e), n.call(r, e);
                },
                null,
                i,
              )
            );
          });
        }
        function o(e, t) {
          return u(function(n, r, i) {
            return (
              void 0 === r && (r = null),
              e(
                function(e) {
                  return t(e) && n.call(r, e);
                },
                null,
                i,
              )
            );
          });
        }
        function s(e, t, r) {
          var i = r;
          return n(e, function(e) {
            return (i = t(i, e));
          });
        }
        function u(e) {
          var t,
            n = new c({
              onFirstListenerAdd: function() {
                t = e(n.fire, n);
              },
              onLastListenerRemove: function() {
                t.dispose();
              },
            });
          return n.event;
        }
        function a(e) {
          var t,
            n = !0;
          return o(e, function(e) {
            var r = n || e !== t;
            return (n = !1), (t = e), r;
          });
        }
        var l = { dispose: function() {} };
        (e.None = function() {
          return l;
        }),
          (e.once = t),
          (e.map = n),
          (e.forEach = r),
          (e.filter = o),
          (e.signal = function(e) {
            return e;
          }),
          (e.any = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return function(t, n, r) {
              return (
                void 0 === n && (n = null),
                i.combinedDisposable(
                  e.map(function(e) {
                    return e(
                      function(e) {
                        return t.call(n, e);
                      },
                      null,
                      r,
                    );
                  }),
                )
              );
            };
          }),
          (e.reduce = s),
          (e.snapshot = u),
          (e.debounce = function(e, t, n, r, i) {
            void 0 === n && (n = 100), void 0 === r && (r = !1);
            var o,
              s = void 0,
              u = void 0,
              a = 0,
              l = new c({
                leakWarningThreshold: i,
                onFirstListenerAdd: function() {
                  o = e(function(e) {
                    a++,
                      (s = t(s, e)),
                      r && !u && l.fire(s),
                      clearTimeout(u),
                      (u = setTimeout(function() {
                        var e = s;
                        (s = void 0), (u = void 0), (!r || a > 1) && l.fire(e), (a = 0);
                      }, n));
                  });
                },
                onLastListenerRemove: function() {
                  o.dispose();
                },
              });
            return l.event;
          }),
          (e.stopwatch = function(e) {
            var r = new Date().getTime();
            return n(t(e), function(e) {
              return new Date().getTime() - r;
            });
          }),
          (e.latch = a),
          (e.buffer = function(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = []);
            var r = n.slice(),
              i = e(function(e) {
                r ? r.push(e) : s.fire(e);
              }),
              o = function() {
                r &&
                  r.forEach(function(e) {
                    return s.fire(e);
                  }),
                  (r = null);
              },
              s = new c({
                onFirstListenerAdd: function() {
                  i ||
                    (i = e(function(e) {
                      return s.fire(e);
                    }));
                },
                onFirstListenerDidAdd: function() {
                  r && (t ? setTimeout(o) : o());
                },
                onLastListenerRemove: function() {
                  i && i.dispose(), (i = null);
                },
              });
            return s.event;
          });
        var d = (function() {
          function e(e) {
            this.event = e;
          }
          return (
            (e.prototype.map = function(t) {
              return new e(n(this.event, t));
            }),
            (e.prototype.forEach = function(t) {
              return new e(r(this.event, t));
            }),
            (e.prototype.filter = function(t) {
              return new e(o(this.event, t));
            }),
            (e.prototype.reduce = function(t, n) {
              return new e(s(this.event, t, n));
            }),
            (e.prototype.latch = function() {
              return new e(a(this.event));
            }),
            (e.prototype.on = function(e, t, n) {
              return this.event(e, t, n);
            }),
            (e.prototype.once = function(e, n, r) {
              return t(this.event)(e, n, r);
            }),
            e
          );
        })();
        (e.chain = function(e) {
          return new d(e);
        }),
          (e.fromNodeEventEmitter = function(e, t, n) {
            void 0 === n &&
              (n = function(e) {
                return e;
              });
            var r = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return i.fire(n.apply(void 0, e));
              },
              i = new c({
                onFirstListenerAdd: function() {
                  return e.on(t, r);
                },
                onLastListenerRemove: function() {
                  return e.removeListener(t, r);
                },
              });
            return i.event;
          }),
          (e.fromPromise = function(e) {
            var t = new c(),
              n = !1;
            return (
              e
                .then(void 0, function() {
                  return null;
                })
                .then(function() {
                  n
                    ? t.fire(void 0)
                    : setTimeout(function() {
                        return t.fire(void 0);
                      }, 0);
                }),
              (n = !0),
              t.event
            );
          }),
          (e.toPromise = function(e) {
            return new Promise(function(n) {
              return t(e)(n);
            });
          });
      })((u = t.Event || (t.Event = {})));
      var a = -1,
        l = (function() {
          function e(e, t) {
            void 0 === t &&
              (t = Math.random()
                .toString(18)
                .slice(2, 5)),
              (this.customThreshold = e),
              (this.name = t),
              (this._warnCountdown = 0);
          }
          return (
            (e.prototype.dispose = function() {
              this._stacks && this._stacks.clear();
            }),
            (e.prototype.check = function(e) {
              var t = this,
                n = a;
              if (('number' == typeof this.customThreshold && (n = this.customThreshold), !(n <= 0 || e < n))) {
                this._stacks || (this._stacks = new Map());
                var r = new Error().stack
                    .split('\n')
                    .slice(3)
                    .join('\n'),
                  i = this._stacks.get(r) || 0;
                if ((this._stacks.set(r, i + 1), (this._warnCountdown -= 1), this._warnCountdown <= 0)) {
                  this._warnCountdown = 0.5 * n;
                  var o,
                    s = 0;
                  this._stacks.forEach(function(e, t) {
                    (!o || s < e) && ((o = t), (s = e));
                  }),
                    console.warn(
                      '[' +
                        this.name +
                        '] potential listener LEAK detected, having ' +
                        e +
                        ' listeners already. MOST frequent listener (' +
                        s +
                        '):',
                    ),
                    console.warn(o);
                }
                return function() {
                  var e = t._stacks.get(r) || 0;
                  t._stacks.set(r, e - 1);
                };
              }
            }),
            e
          );
        })(),
        c = (function() {
          function e(e) {
            (this._disposed = !1),
              (this._options = e),
              (this._leakageMon = a > 0 ? new l(this._options && this._options.leakWarningThreshold) : void 0);
          }
          return (
            Object.defineProperty(e.prototype, 'event', {
              get: function() {
                var t = this;
                return (
                  this._event ||
                    (this._event = function(n, r, i) {
                      t._listeners || (t._listeners = new o.LinkedList());
                      var s = t._listeners.isEmpty();
                      s && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);
                      var u = t._listeners.push(r ? [n, r] : n);
                      s && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t),
                        t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r);
                      var a;
                      t._leakageMon && (a = t._leakageMon.check(t._listeners.size));
                      var l;
                      return (
                        (l = {
                          dispose: function() {
                            if (
                              (a && a(),
                              (l.dispose = e._noop),
                              !t._disposed && (u(), t._options && t._options.onLastListenerRemove))
                            ) {
                              (t._listeners && !t._listeners.isEmpty()) || t._options.onLastListenerRemove(t);
                            }
                          },
                        }),
                        Array.isArray(i) && i.push(l),
                        l
                      );
                    }),
                  this._event
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.fire = function(e) {
              if (this._listeners) {
                this._deliveryQueue || (this._deliveryQueue = new o.LinkedList());
                for (var t = this._listeners.iterator(), r = t.next(); !r.done; r = t.next())
                  this._deliveryQueue.push([r.value, e]);
                for (; this._deliveryQueue.size > 0; ) {
                  var i = this._deliveryQueue.shift(),
                    s = i[0],
                    u = i[1];
                  try {
                    'function' == typeof s ? s.call(void 0, u) : s[0].call(s[1], u);
                  } catch (r) {
                    n.onUnexpectedError(r);
                  }
                }
              }
            }),
            (e.prototype.dispose = function() {
              this._listeners && this._listeners.clear(),
                this._deliveryQueue && this._deliveryQueue.clear(),
                this._leakageMon && this._leakageMon.dispose(),
                (this._disposed = !0);
            }),
            (e._noop = function() {}),
            e
          );
        })();
      t.Emitter = c;
      var d = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n._isPaused = 0), (n._eventQueue = new o.LinkedList()), (n._mergeFn = t && t.merge), n;
        }
        return (
          s(t, e),
          (t.prototype.pause = function() {
            this._isPaused++;
          }),
          (t.prototype.resume = function() {
            if (0 !== this._isPaused && 0 == --this._isPaused)
              if (this._mergeFn) {
                var t = this._eventQueue.toArray();
                this._eventQueue.clear(), e.prototype.fire.call(this, this._mergeFn(t));
              } else
                for (; !this._isPaused && 0 !== this._eventQueue.size; )
                  e.prototype.fire.call(this, this._eventQueue.shift());
          }),
          (t.prototype.fire = function(t) {
            this._listeners && (0 !== this._isPaused ? this._eventQueue.push(t) : e.prototype.fire.call(this, t));
          }),
          t
        );
      })(c);
      t.PauseableEmitter = d;
      var f = (function() {
        function e() {
          var e = this;
          (this.hasListeners = !1),
            (this.events = []),
            (this.emitter = new c({
              onFirstListenerAdd: function() {
                return e.onFirstListenerAdd();
              },
              onLastListenerRemove: function() {
                return e.onLastListenerRemove();
              },
            }));
        }
        return (
          Object.defineProperty(e.prototype, 'event', {
            get: function() {
              return this.emitter.event;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.add = function(e) {
            var t = this,
              n = { event: e, listener: null };
            this.events.push(n), this.hasListeners && this.hook(n);
            return i.toDisposable(
              r.once(function() {
                t.hasListeners && t.unhook(n);
                var e = t.events.indexOf(n);
                t.events.splice(e, 1);
              }),
            );
          }),
          (e.prototype.onFirstListenerAdd = function() {
            var e = this;
            (this.hasListeners = !0),
              this.events.forEach(function(t) {
                return e.hook(t);
              });
          }),
          (e.prototype.onLastListenerRemove = function() {
            var e = this;
            (this.hasListeners = !1),
              this.events.forEach(function(t) {
                return e.unhook(t);
              });
          }),
          (e.prototype.hook = function(e) {
            var t = this;
            e.listener = e.event(function(e) {
              return t.emitter.fire(e);
            });
          }),
          (e.prototype.unhook = function(e) {
            e.listener && e.listener.dispose(), (e.listener = null);
          }),
          (e.prototype.dispose = function() {
            this.emitter.dispose();
          }),
          e
        );
      })();
      t.EventMultiplexer = f;
      var h = (function() {
        function e() {
          this.buffers = [];
        }
        return (
          (e.prototype.wrapEvent = function(e) {
            var t = this;
            return function(n, r, i) {
              return e(
                function(e) {
                  var i = t.buffers[t.buffers.length - 1];
                  i
                    ? i.push(function() {
                        return n.call(r, e);
                      })
                    : n.call(r, e);
                },
                void 0,
                i,
              );
            };
          }),
          (e.prototype.bufferEvents = function(e) {
            var t = [];
            this.buffers.push(t);
            var n = e();
            return (
              this.buffers.pop(),
              t.forEach(function(e) {
                return e();
              }),
              n
            );
          }),
          e
        );
      })();
      t.EventBufferer = h;
      var p = (function() {
        function e() {
          var e = this;
          (this.listening = !1),
            (this.inputEvent = u.None),
            (this.inputEventListener = i.Disposable.None),
            (this.emitter = new c({
              onFirstListenerDidAdd: function() {
                (e.listening = !0), (e.inputEventListener = e.inputEvent(e.emitter.fire, e.emitter));
              },
              onLastListenerRemove: function() {
                (e.listening = !1), e.inputEventListener.dispose();
              },
            })),
            (this.event = this.emitter.event);
        }
        return (
          Object.defineProperty(e.prototype, 'input', {
            set: function(e) {
              (this.inputEvent = e),
                this.listening &&
                  (this.inputEventListener.dispose(), (this.inputEventListener = e(this.emitter.fire, this.emitter)));
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.dispose = function() {
            this.inputEventListener.dispose(), this.emitter.dispose();
          }),
          e
        );
      })();
      t.Relay = p;
    }),
    i(e[18], t([0, 1, 9]), function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        i = Object.freeze(function(e, t) {
          var n = setTimeout(e.bind(t), 0);
          return {
            dispose: function() {
              clearTimeout(n);
            },
          };
        });
      !(function(e) {
        (e.isCancellationToken = function(t) {
          return (
            t === e.None ||
            t === e.Cancelled ||
            t instanceof o ||
            (!(!t || 'object' != typeof t) &&
              'boolean' == typeof t.isCancellationRequested &&
              'function' == typeof t.onCancellationRequested)
          );
        }),
          (e.None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: n.Event.None })),
          (e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: i }));
      })((r = t.CancellationToken || (t.CancellationToken = {})));
      var o = (function() {
          function e() {
            (this._isCancelled = !1), (this._emitter = null);
          }
          return (
            (e.prototype.cancel = function() {
              this._isCancelled ||
                ((this._isCancelled = !0), this._emitter && (this._emitter.fire(void 0), this.dispose()));
            }),
            Object.defineProperty(e.prototype, 'isCancellationRequested', {
              get: function() {
                return this._isCancelled;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'onCancellationRequested', {
              get: function() {
                return this._isCancelled
                  ? i
                  : (this._emitter || (this._emitter = new n.Emitter()), this._emitter.event);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.dispose = function() {
              this._emitter && (this._emitter.dispose(), (this._emitter = null));
            }),
            e
          );
        })(),
        s = (function() {
          function e(e) {
            (this._token = void 0),
              (this._parentListener = void 0),
              (this._parentListener = e && e.onCancellationRequested(this.cancel, this));
          }
          return (
            Object.defineProperty(e.prototype, 'token', {
              get: function() {
                return this._token || (this._token = new o()), this._token;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.cancel = function() {
              this._token ? this._token instanceof o && this._token.cancel() : (this._token = r.Cancelled);
            }),
            (e.prototype.dispose = function() {
              this._parentListener && this._parentListener.dispose(),
                this._token ? this._token instanceof o && this._token.dispose() : (this._token = r.None);
            }),
            e
          );
        })();
      t.CancellationTokenSource = s;
    }),
    i(e[3], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = !1,
        r = !1,
        i = !1,
        o = !1,
        s = !1,
        u =
          'undefined' != typeof process &&
          void 0 !== process.versions &&
          void 0 !== process.versions.electron &&
          'renderer' === process.type;
      if ('object' != typeof navigator || u) {
        if ('object' == typeof process) {
          (n = 'win32' === process.platform),
            (r = 'darwin' === process.platform),
            (i = 'linux' === process.platform),
            'en',
            'en';
          var a = process.env.VSCODE_NLS_CONFIG;
          if (a)
            try {
              var l = JSON.parse(a),
                c = l.availableLanguages['*'];
              l.locale, c || 'en', l._translationsConfigFile;
            } catch (e) {}
          o = !0;
        }
      } else {
        var d = navigator.userAgent;
        (n = d.indexOf('Windows') >= 0),
          (r = d.indexOf('Macintosh') >= 0),
          (i = d.indexOf('Linux') >= 0),
          (s = !0),
          navigator.language;
      }
      (t.isWindows = n), (t.isMacintosh = r), (t.isLinux = i), (t.isNative = o), (t.isWeb = s);
      var f = 'object' == typeof self ? self : 'object' == typeof global ? global : {};
      t.globals = f;
      var h = null;
      (t.setImmediate = function(e) {
        return (
          null === h &&
            (h = t.globals.setImmediate
              ? t.globals.setImmediate.bind(t.globals)
              : 'undefined' != typeof process && 'function' == typeof process.nextTick
              ? process.nextTick.bind(process)
              : t.globals.setTimeout.bind(t.globals)),
          h(e)
        );
      }),
        (t.OS = r ? 2 : n ? 1 : 3);
    }),
    i(e[13], t([0, 1]), function(e, t) {
      'use strict';
      function n(e) {
        return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
      }
      function r(e, t) {
        if (!e || !t) return e;
        var n = t.length;
        if (0 === n || 0 === e.length) return e;
        for (var r = 0; e.indexOf(t, r) === r; ) r += n;
        return e.substring(r);
      }
      function i(e, t) {
        if (!e || !t) return e;
        var n = t.length,
          r = e.length;
        if (0 === n || 0 === r) return e;
        for (var i = r, o = -1; ; ) {
          if (-1 === (o = e.lastIndexOf(t, i - 1)) || o + n !== i) break;
          if (0 === o) return '';
          i = o;
        }
        return e.substring(0, i);
      }
      function o(e) {
        return e >= 97 && e <= 122;
      }
      function s(e) {
        return e >= 65 && e <= 90;
      }
      function u(e) {
        return o(e) || s(e);
      }
      function a(e, t, n) {
        if ((void 0 === n && (n = e.length), 'string' != typeof e || 'string' != typeof t)) return !1;
        for (var r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o)
            if (u(i) && u(o)) {
              var s = Math.abs(i - o);
              if (0 !== s && 32 !== s) return !1;
            } else if (String.fromCharCode(i).toLowerCase() !== String.fromCharCode(o).toLowerCase()) return !1;
        }
        return !0;
      }
      function l(e) {
        return ((e = +e) >= 11904 && e <= 55215) || (e >= 63744 && e <= 64255) || (e >= 65281 && e <= 65374);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.empty = ''),
        (t.isFalsyOrWhitespace = function(e) {
          return !e || 'string' != typeof e || 0 === e.trim().length;
        }),
        (t.pad = function(e, t, n) {
          void 0 === n && (n = '0');
          for (var r = '' + e, i = [r], o = r.length; o < t; o++) i.push(n);
          return i.reverse().join('');
        });
      var c = /{(\d+)}/g;
      (t.format = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return 0 === t.length
          ? e
          : e.replace(c, function(e, n) {
              var r = parseInt(n, 10);
              return isNaN(r) || r < 0 || r >= t.length ? e : t[r];
            });
      }),
        (t.escape = function(e) {
          return e.replace(/[<>&]/g, function(e) {
            switch (e) {
              case '<':
                return '&lt;';
              case '>':
                return '&gt;';
              case '&':
                return '&amp;';
              default:
                return e;
            }
          });
        }),
        (t.escapeRegExpCharacters = n),
        (t.trim = function(e, t) {
          return void 0 === t && (t = ' '), i(r(e, t), t);
        }),
        (t.ltrim = r),
        (t.rtrim = i),
        (t.convertSimple2RegExpPattern = function(e) {
          return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
        }),
        (t.startsWith = function(e, t) {
          if (e.length < t.length) return !1;
          if (e === t) return !0;
          for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }),
        (t.endsWith = function(e, t) {
          var n = e.length - t.length;
          return n > 0 ? e.indexOf(t, n) === n : 0 === n && e === t;
        }),
        (t.createRegExp = function(e, t, r) {
          if ((void 0 === r && (r = {}), !e)) throw new Error('Cannot create regex from empty string');
          t || (e = n(e)),
            r.wholeWord &&
              (/\B/.test(e.charAt(0)) || (e = '\\b' + e), /\B/.test(e.charAt(e.length - 1)) || (e += '\\b'));
          var i = '';
          return (
            r.global && (i += 'g'),
            r.matchCase || (i += 'i'),
            r.multiline && (i += 'm'),
            r.unicode && (i += 'u'),
            new RegExp(e, i)
          );
        }),
        (t.regExpLeadsToEndlessLoop = function(e) {
          return (
            '^' !== e.source &&
            '^$' !== e.source &&
            '$' !== e.source &&
            '^\\s*$' !== e.source &&
            !(!e.exec('') || 0 !== e.lastIndex)
          );
        }),
        (t.regExpFlags = function(e) {
          return (e.global ? 'g' : '') + (e.ignoreCase ? 'i' : '') + (e.multiline ? 'm' : '') + (e.unicode ? 'u' : '');
        }),
        (t.firstNonWhitespaceIndex = function(e) {
          for (var t = 0, n = e.length; t < n; t++) {
            var r = e.charCodeAt(t);
            if (32 !== r && 9 !== r) return t;
          }
          return -1;
        }),
        (t.getLeadingWhitespace = function(e, t, n) {
          void 0 === t && (t = 0), void 0 === n && (n = e.length);
          for (var r = t; r < n; r++) {
            var i = e.charCodeAt(r);
            if (32 !== i && 9 !== i) return e.substring(t, r);
          }
          return e.substring(t, n);
        }),
        (t.lastNonWhitespaceIndex = function(e, t) {
          void 0 === t && (t = e.length - 1);
          for (var n = t; n >= 0; n--) {
            var r = e.charCodeAt(n);
            if (32 !== r && 9 !== r) return n;
          }
          return -1;
        }),
        (t.compare = function(e, t) {
          return e < t ? -1 : e > t ? 1 : 0;
        }),
        (t.isLowerAsciiLetter = o),
        (t.isUpperAsciiLetter = s),
        (t.equalsIgnoreCase = function(e, t) {
          return (e ? e.length : 0) === (t ? t.length : 0) && a(e, t);
        }),
        (t.startsWithIgnoreCase = function(e, t) {
          var n = t.length;
          return !(t.length > e.length) && a(e, t, n);
        }),
        (t.commonPrefixLength = function(e, t) {
          var n,
            r = Math.min(e.length, t.length);
          for (n = 0; n < r; n++) if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
          return r;
        }),
        (t.commonSuffixLength = function(e, t) {
          var n,
            r = Math.min(e.length, t.length),
            i = e.length - 1,
            o = t.length - 1;
          for (n = 0; n < r; n++) if (e.charCodeAt(i - n) !== t.charCodeAt(o - n)) return n;
          return r;
        }),
        (t.isHighSurrogate = function(e) {
          return 55296 <= e && e <= 56319;
        }),
        (t.isLowSurrogate = function(e) {
          return 56320 <= e && e <= 57343;
        });
      var d = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return d.test(e);
      };
      var f = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return f.test(e);
      };
      var h = /^[\t\n\r\x20-\x7E]*$/;
      (t.isBasicASCII = function(e) {
        return h.test(e);
      }),
        (t.containsFullWidthCharacter = function(e) {
          for (var t = 0, n = e.length; t < n; t++) if (l(e.charCodeAt(t))) return !0;
          return !1;
        }),
        (t.isFullWidthCharacter = l),
        (t.UTF8_BOM_CHARACTER = String.fromCharCode(65279)),
        (t.startsWithUTF8BOM = function(e) {
          return !!(e && e.length > 0 && 65279 === e.charCodeAt(0));
        }),
        (t.safeBtoa = function(e) {
          return btoa(encodeURIComponent(e));
        }),
        (t.repeat = function(e, t) {
          for (var n = '', r = 0; r < t; r++) n += e;
          return n;
        });
    }),
    i(e[7], t([0, 1]), function(e, t) {
      'use strict';
      function n(e) {
        return typeof e === a.string || e instanceof String;
      }
      function r(e) {
        return !(typeof e !== a.object || null === e || Array.isArray(e) || e instanceof RegExp || e instanceof Date);
      }
      function i(e) {
        return typeof e === a.undefined;
      }
      function o(e) {
        return i(e) || null === e;
      }
      function s(e) {
        return typeof e === a.function;
      }
      function u(e, t) {
        if (n(t)) {
          if (typeof e !== t) throw new Error('argument does not match constraint: typeof ' + t);
        } else if (s(t)) {
          try {
            if (e instanceof t) return;
          } catch (e) {}
          if (!o(e) && e.constructor === t) return;
          if (1 === t.length && !0 === t.call(void 0, e)) return;
          throw new Error(
            'argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true',
          );
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = { number: 'number', string: 'string', undefined: 'undefined', object: 'object', function: 'function' };
      (t.isArray = function(e) {
        return Array.isArray ? Array.isArray(e) : !(!e || typeof e.length !== a.number || e.constructor !== Array);
      }),
        (t.isString = n),
        (t.isObject = r),
        (t.isNumber = function(e) {
          return (typeof e === a.number || e instanceof Number) && !isNaN(e);
        }),
        (t.isBoolean = function(e) {
          return !0 === e || !1 === e;
        }),
        (t.isUndefined = i),
        (t.isUndefinedOrNull = o);
      var l = Object.prototype.hasOwnProperty;
      (t.isEmptyObject = function(e) {
        if (!r(e)) return !1;
        for (var t in e) if (l.call(e, t)) return !1;
        return !0;
      }),
        (t.isFunction = s),
        (t.validateConstraints = function(e, t) {
          for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) u(e[r], t[r]);
        }),
        (t.validateConstraint = u),
        (t.getAllPropertyNames = function(e) {
          for (var t = [], n = Object.getPrototypeOf(e); Object.prototype !== n; )
            (t = t.concat(Object.getOwnPropertyNames(n))), (n = Object.getPrototypeOf(n));
          return t;
        }),
        (t.withNullAsUndefined = function(e) {
          return null === e ? void 0 : e;
        }),
        (t.withUndefinedAsNull = function(e) {
          return void 0 === e ? null : e;
        });
    }),
    i(e[12], t([0, 1, 3]), function(e, t, n) {
      'use strict';
      function r(e, t) {
        for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
          var o = e.charCodeAt(i);
          if (
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            45 === o ||
            46 === o ||
            95 === o ||
            126 === o ||
            (t && 47 === o)
          )
            -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)), void 0 !== n && (n += e.charAt(i));
          else {
            void 0 === n && (n = e.substr(0, i));
            var s = _[o];
            void 0 !== s
              ? (-1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)), (n += s))
              : -1 === r && (r = i);
          }
        }
        return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
      }
      function i(e) {
        var t;
        return (
          (t =
            e.authority && e.path.length > 1 && 'file' === e.scheme
              ? '//' + e.authority + e.path
              : 47 === e.path.charCodeAt(0) &&
                ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                  (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
                58 === e.path.charCodeAt(2)
              ? e.path[1].toLowerCase() + e.path.substr(2)
              : e.path),
          n.isWindows && (t = t.replace(/\//g, '\\')),
          t
        );
      }
      function o(e, t) {
        var n = t
            ? function(e) {
                for (var t = void 0, n = 0; n < e.length; n++) {
                  var r = e.charCodeAt(n);
                  35 === r || 63 === r
                    ? (void 0 === t && (t = e.substr(0, n)), (t += _[r]))
                    : void 0 !== t && (t += e[n]);
                }
                return void 0 !== t ? t : e;
              }
            : r,
          i = '',
          o = e.scheme,
          s = e.authority,
          u = e.path,
          a = e.query,
          l = e.fragment;
        if ((o && ((i += o), (i += ':')), (s || 'file' === o) && ((i += h), (i += h)), s)) {
          var c = s.indexOf('@');
          if (-1 !== c) {
            var d = s.substr(0, c);
            (s = s.substr(c + 1)),
              -1 === (c = d.indexOf(':'))
                ? (i += n(d, !1))
                : ((i += n(d.substr(0, c), !1)), (i += ':'), (i += n(d.substr(c + 1), !1))),
              (i += '@');
          }
          -1 === (c = (s = s.toLowerCase()).indexOf(':'))
            ? (i += n(s, !1))
            : ((i += n(s.substr(0, c), !1)), (i += s.substr(c)));
        }
        if (u) {
          if (u.length >= 3 && 47 === u.charCodeAt(0) && 58 === u.charCodeAt(2)) {
            (f = u.charCodeAt(1)) >= 65 && f <= 90 && (u = '/' + String.fromCharCode(f + 32) + ':' + u.substr(3));
          } else if (u.length >= 2 && 58 === u.charCodeAt(1)) {
            var f = u.charCodeAt(0);
            f >= 65 && f <= 90 && (u = String.fromCharCode(f + 32) + ':' + u.substr(2));
          }
          i += n(u, !0);
        }
        return a && ((i += '?'), (i += n(a, !1))), l && ((i += '#'), (i += t ? l : r(l, !1))), i;
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u,
        a = /^\w[\w\d+.-]*$/,
        l = /^\//,
        c = /^\/\//,
        d = !0,
        f = '',
        h = '/',
        p = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        m = (function() {
          function e(e, t, n, r, i, o) {
            void 0 === o && (o = !1),
              'object' == typeof e
                ? ((this.scheme = e.scheme || f),
                  (this.authority = e.authority || f),
                  (this.path = e.path || f),
                  (this.query = e.query || f),
                  (this.fragment = e.fragment || f))
                : ((this.scheme = (function(e, t) {
                    return t || d
                      ? e || f
                      : (e || (console.trace('BAD uri lacks scheme, falling back to file-scheme.'), (e = 'file')), e);
                  })(e, o)),
                  (this.authority = t || f),
                  (this.path = (function(e, t) {
                    switch (e) {
                      case 'https':
                      case 'http':
                      case 'file':
                        t ? t[0] !== h && (t = h + t) : (t = h);
                    }
                    return t;
                  })(this.scheme, n || f)),
                  (this.query = r || f),
                  (this.fragment = i || f),
                  (function(e, t) {
                    if (!e.scheme) {
                      if (t || d)
                        throw new Error(
                          '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                            e.authority +
                            '", path: "' +
                            e.path +
                            '", query: "' +
                            e.query +
                            '", fragment: "' +
                            e.fragment +
                            '"}',
                        );
                      console.warn(
                        '[UriError]: Scheme is missing: {scheme: "", authority: "' +
                          e.authority +
                          '", path: "' +
                          e.path +
                          '", query: "' +
                          e.query +
                          '", fragment: "' +
                          e.fragment +
                          '"}',
                      );
                    }
                    if (e.scheme && !a.test(e.scheme))
                      throw new Error('[UriError]: Scheme contains illegal characters.');
                    if (e.path)
                      if (e.authority) {
                        if (!l.test(e.path))
                          throw new Error(
                            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
                          );
                      } else if (c.test(e.path))
                        throw new Error(
                          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
                        );
                  })(this, o));
          }
          return (
            (e.isUri = function(t) {
              return (
                t instanceof e ||
                (!!t &&
                  'string' == typeof t.authority &&
                  'string' == typeof t.fragment &&
                  'string' == typeof t.path &&
                  'string' == typeof t.query &&
                  'string' == typeof t.scheme &&
                  'function' == typeof t.fsPath &&
                  'function' == typeof t.with &&
                  'function' == typeof t.toString)
              );
            }),
            Object.defineProperty(e.prototype, 'fsPath', {
              get: function() {
                return i(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.with = function(e) {
              if (!e) return this;
              var t = e.scheme,
                n = e.authority,
                r = e.path,
                i = e.query,
                o = e.fragment;
              return (
                void 0 === t ? (t = this.scheme) : null === t && (t = f),
                void 0 === n ? (n = this.authority) : null === n && (n = f),
                void 0 === r ? (r = this.path) : null === r && (r = f),
                void 0 === i ? (i = this.query) : null === i && (i = f),
                void 0 === o ? (o = this.fragment) : null === o && (o = f),
                t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment
                  ? this
                  : new g(t, n, r, i, o)
              );
            }),
            (e.parse = function(e, t) {
              void 0 === t && (t = !1);
              var n = p.exec(e);
              return n
                ? new g(
                    n[2] || f,
                    decodeURIComponent(n[4] || f),
                    decodeURIComponent(n[5] || f),
                    decodeURIComponent(n[7] || f),
                    decodeURIComponent(n[9] || f),
                    t,
                  )
                : new g(f, f, f, f, f);
            }),
            (e.file = function(e) {
              var t = f;
              if ((n.isWindows && (e = e.replace(/\\/g, h)), e[0] === h && e[1] === h)) {
                var r = e.indexOf(h, 2);
                -1 === r ? ((t = e.substring(2)), (e = h)) : ((t = e.substring(2, r)), (e = e.substring(r) || h));
              }
              return new g('file', t, e, f, f);
            }),
            (e.from = function(e) {
              return new g(e.scheme, e.authority, e.path, e.query, e.fragment);
            }),
            (e.prototype.toString = function(e) {
              return void 0 === e && (e = !1), o(this, e);
            }),
            (e.prototype.toJSON = function() {
              return this;
            }),
            (e.revive = function(t) {
              if (t) {
                if (t instanceof e) return t;
                var n = new g(t);
                return (n._fsPath = t.fsPath), (n._formatted = t.external), n;
              }
              return t;
            }),
            e
          );
        })();
      t.URI = m;
      var g = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._formatted = null), (t._fsPath = null), t;
          }
          return (
            s(t, e),
            Object.defineProperty(t.prototype, 'fsPath', {
              get: function() {
                return this._fsPath || (this._fsPath = i(this)), this._fsPath;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function(e) {
              return (
                void 0 === e && (e = !1),
                e ? o(this, !0) : (this._formatted || (this._formatted = o(this, !1)), this._formatted)
              );
            }),
            (t.prototype.toJSON = function() {
              var e = { $mid: 1 };
              return (
                this._fsPath && (e.fsPath = this._fsPath),
                this._formatted && (e.external = this._formatted),
                this.path && (e.path = this.path),
                this.scheme && (e.scheme = this.scheme),
                this.authority && (e.authority = this.authority),
                this.query && (e.query = this.query),
                this.fragment && (e.fragment = this.fragment),
                e
              );
            }),
            t
          );
        })(m),
        _ =
          ((u = {}),
          (u[58] = '%3A'),
          (u[47] = '%2F'),
          (u[63] = '%3F'),
          (u[35] = '%23'),
          (u[91] = '%5B'),
          (u[93] = '%5D'),
          (u[64] = '%40'),
          (u[33] = '%21'),
          (u[36] = '%24'),
          (u[38] = '%26'),
          (u[39] = '%27'),
          (u[40] = '%28'),
          (u[41] = '%29'),
          (u[42] = '%2A'),
          (u[43] = '%2B'),
          (u[44] = '%2C'),
          (u[59] = '%3B'),
          (u[61] = '%3D'),
          (u[32] = '%20'),
          u);
    }),
    i(e[33], t([0, 1, 5, 10, 3, 7]), function(e, t, n, r, i, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = '$initialize',
        a = !1;
      t.logOnceWebWorkerWarning = function(e) {
        i.isWeb &&
          (a ||
            ((a = !0),
            console.warn(
              'Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq',
            )),
          console.warn(e.message));
      };
      var l = (function() {
          function e(e) {
            (this._workerId = -1),
              (this._handler = e),
              (this._lastSentReq = 0),
              (this._pendingReplies = Object.create(null));
          }
          return (
            (e.prototype.setWorkerId = function(e) {
              this._workerId = e;
            }),
            (e.prototype.sendMessage = function(e, t) {
              var n = this,
                r = String(++this._lastSentReq);
              return new Promise(function(i, o) {
                (n._pendingReplies[r] = { resolve: i, reject: o }),
                  n._send({ vsWorker: n._workerId, req: r, method: e, args: t });
              });
            }),
            (e.prototype.handleMessage = function(e) {
              var t;
              try {
                t = JSON.parse(e);
              } catch (e) {
                return;
              }
              t && t.vsWorker && ((-1 !== this._workerId && t.vsWorker !== this._workerId) || this._handleMessage(t));
            }),
            (e.prototype._handleMessage = function(e) {
              var t = this;
              if (e.seq) {
                var r = e;
                if (!this._pendingReplies[r.seq]) return void console.warn('Got reply to unknown seq');
                var i = this._pendingReplies[r.seq];
                if ((delete this._pendingReplies[r.seq], r.err)) {
                  var o = r.err;
                  return (
                    r.err.$isError &&
                      (((o = new Error()).name = r.err.name), (o.message = r.err.message), (o.stack = r.err.stack)),
                    void i.reject(o)
                  );
                }
                i.resolve(r.res);
              } else {
                var s = e,
                  u = s.req;
                this._handler.handleMessage(s.method, s.args).then(
                  function(e) {
                    t._send({ vsWorker: t._workerId, seq: u, res: e, err: void 0 });
                  },
                  function(e) {
                    e.detail instanceof Error && (e.detail = n.transformErrorForSerialization(e.detail)),
                      t._send({ vsWorker: t._workerId, seq: u, res: void 0, err: n.transformErrorForSerialization(e) });
                  },
                );
              }
            }),
            (e.prototype._send = function(e) {
              var t = JSON.stringify(e);
              this._handler.sendMessage(t);
            }),
            e
          );
        })(),
        c = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this,
              i = null;
            (r._worker = r._register(
              t.create(
                'vs/base/common/worker/simpleWorker',
                function(e) {
                  r._protocol.handleMessage(e);
                },
                function(e) {
                  i && i(e);
                },
              ),
            )),
              (r._protocol = new l({
                sendMessage: function(e) {
                  r._worker.postMessage(e);
                },
                handleMessage: function(e, t) {
                  return Promise.resolve(null);
                },
              })),
              r._protocol.setWorkerId(r._worker.getId());
            var o = null;
            void 0 !== self.require && 'function' == typeof self.require.getConfig
              ? (o = self.require.getConfig())
              : void 0 !== self.requirejs && (o = self.requirejs.s.contexts._.config),
              (r._onModuleLoaded = r._protocol.sendMessage(u, [r._worker.getId(), n, o])),
              (r._lazyProxy = new Promise(function(e, t) {
                (i = t),
                  r._onModuleLoaded.then(
                    function(t) {
                      for (var n = {}, r = 0, i = t; r < i.length; r++) {
                        var o = i[r];
                        n[o] = a(o, s);
                      }
                      e(n);
                    },
                    function(e) {
                      t(e), r._onError('Worker failed to load ' + n, e);
                    },
                  );
              }));
            var s = function(e, t) {
                return r._request(e, t);
              },
              a = function(e, t) {
                return function() {
                  var n = Array.prototype.slice.call(arguments, 0);
                  return t(e, n);
                };
              };
            return r;
          }
          return (
            s(t, e),
            (t.prototype.getProxyObject = function() {
              return this._lazyProxy;
            }),
            (t.prototype._request = function(e, t) {
              var n = this;
              return new Promise(function(r, i) {
                n._onModuleLoaded.then(function() {
                  n._protocol.sendMessage(e, t).then(r, i);
                }, i);
              });
            }),
            (t.prototype._onError = function(e, t) {
              console.error(e), console.info(t);
            }),
            t
          );
        })(r.Disposable);
      t.SimpleWorkerClient = c;
      var d = (function() {
        function e(e, t) {
          var n = this;
          (this._requestHandler = t),
            (this._protocol = new l({
              sendMessage: function(t) {
                e(t);
              },
              handleMessage: function(e, t) {
                return n._handleMessage(e, t);
              },
            }));
        }
        return (
          (e.prototype.onmessage = function(e) {
            this._protocol.handleMessage(e);
          }),
          (e.prototype._handleMessage = function(e, t) {
            if (e === u) return this.initialize(t[0], t[1], t[2]);
            if (!this._requestHandler || 'function' != typeof this._requestHandler[e])
              return Promise.reject(new Error('Missing requestHandler or method: ' + e));
            try {
              return Promise.resolve(this._requestHandler[e].apply(this._requestHandler, t));
            } catch (e) {
              return Promise.reject(e);
            }
          }),
          (e.prototype.initialize = function(e, t, n) {
            var r = this;
            if ((this._protocol.setWorkerId(e), this._requestHandler)) {
              for (var i = [], s = 0, u = o.getAllPropertyNames(this._requestHandler); s < u.length; s++) {
                var a = u[s];
                'function' == typeof this._requestHandler[a] && i.push(a);
              }
              return Promise.resolve(i);
            }
            return (
              n &&
                (void 0 !== n.baseUrl && delete n.baseUrl,
                void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs,
                (n.catchError = !0),
                self.require.config(n)),
              new Promise(function(e, n) {
                self.require(
                  [t],
                  function() {
                    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                    var s = t[0];
                    if (((r._requestHandler = s.create()), r._requestHandler)) {
                      for (var u = [], a = 0, l = o.getAllPropertyNames(r._requestHandler); a < l.length; a++) {
                        var c = l[a];
                        'function' == typeof r._requestHandler[c] && u.push(c);
                      }
                      e(u);
                    } else n(new Error('No RequestHandler!'));
                  },
                  n,
                );
              })
            );
          }),
          e
        );
      })();
      (t.SimpleWorkerServer = d),
        (t.create = function(e) {
          return new d(e, null);
        });
    }),
    i(e[2], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
        function e(e, t) {
          (this.lineNumber = e), (this.column = t);
        }
        return (
          (e.prototype.with = function(t, n) {
            return (
              void 0 === t && (t = this.lineNumber),
              void 0 === n && (n = this.column),
              t === this.lineNumber && n === this.column ? this : new e(t, n)
            );
          }),
          (e.prototype.delta = function(e, t) {
            return void 0 === e && (e = 0), void 0 === t && (t = 0), this.with(this.lineNumber + e, this.column + t);
          }),
          (e.prototype.equals = function(t) {
            return e.equals(this, t);
          }),
          (e.equals = function(e, t) {
            return (!e && !t) || (!!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column);
          }),
          (e.prototype.isBefore = function(t) {
            return e.isBefore(this, t);
          }),
          (e.isBefore = function(e, t) {
            return e.lineNumber < t.lineNumber || (!(t.lineNumber < e.lineNumber) && e.column < t.column);
          }),
          (e.prototype.isBeforeOrEqual = function(t) {
            return e.isBeforeOrEqual(this, t);
          }),
          (e.isBeforeOrEqual = function(e, t) {
            return e.lineNumber < t.lineNumber || (!(t.lineNumber < e.lineNumber) && e.column <= t.column);
          }),
          (e.compare = function(e, t) {
            var n = 0 | e.lineNumber,
              r = 0 | t.lineNumber;
            if (n === r) {
              return (0 | e.column) - (0 | t.column);
            }
            return n - r;
          }),
          (e.prototype.clone = function() {
            return new e(this.lineNumber, this.column);
          }),
          (e.prototype.toString = function() {
            return '(' + this.lineNumber + ',' + this.column + ')';
          }),
          (e.lift = function(t) {
            return new e(t.lineNumber, t.column);
          }),
          (e.isIPosition = function(e) {
            return e && 'number' == typeof e.lineNumber && 'number' == typeof e.column;
          }),
          e
        );
      })();
      t.Position = n;
    }),
    i(e[6], t([0, 1, 2]), function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e(e, t, n, r) {
          e > n || (e === n && t > r)
            ? ((this.startLineNumber = n), (this.startColumn = r), (this.endLineNumber = e), (this.endColumn = t))
            : ((this.startLineNumber = e), (this.startColumn = t), (this.endLineNumber = n), (this.endColumn = r));
        }
        return (
          (e.prototype.isEmpty = function() {
            return e.isEmpty(this);
          }),
          (e.isEmpty = function(e) {
            return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
          }),
          (e.prototype.containsPosition = function(t) {
            return e.containsPosition(this, t);
          }),
          (e.containsPosition = function(e, t) {
            return (
              !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) &&
              !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) &&
              !(t.lineNumber === e.endLineNumber && t.column > e.endColumn)
            );
          }),
          (e.prototype.containsRange = function(t) {
            return e.containsRange(this, t);
          }),
          (e.containsRange = function(e, t) {
            return (
              !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) &&
              !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) &&
              !(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) &&
              !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn)
            );
          }),
          (e.prototype.plusRange = function(t) {
            return e.plusRange(this, t);
          }),
          (e.plusRange = function(t, n) {
            var r, i, o, s;
            return (
              n.startLineNumber < t.startLineNumber
                ? ((r = n.startLineNumber), (i = n.startColumn))
                : n.startLineNumber === t.startLineNumber
                ? ((r = n.startLineNumber), (i = Math.min(n.startColumn, t.startColumn)))
                : ((r = t.startLineNumber), (i = t.startColumn)),
              n.endLineNumber > t.endLineNumber
                ? ((o = n.endLineNumber), (s = n.endColumn))
                : n.endLineNumber === t.endLineNumber
                ? ((o = n.endLineNumber), (s = Math.max(n.endColumn, t.endColumn)))
                : ((o = t.endLineNumber), (s = t.endColumn)),
              new e(r, i, o, s)
            );
          }),
          (e.prototype.intersectRanges = function(t) {
            return e.intersectRanges(this, t);
          }),
          (e.intersectRanges = function(t, n) {
            var r = t.startLineNumber,
              i = t.startColumn,
              o = t.endLineNumber,
              s = t.endColumn,
              u = n.startLineNumber,
              a = n.startColumn,
              l = n.endLineNumber,
              c = n.endColumn;
            return (
              r < u ? ((r = u), (i = a)) : r === u && (i = Math.max(i, a)),
              o > l ? ((o = l), (s = c)) : o === l && (s = Math.min(s, c)),
              r > o ? null : r === o && i > s ? null : new e(r, i, o, s)
            );
          }),
          (e.prototype.equalsRange = function(t) {
            return e.equalsRange(this, t);
          }),
          (e.equalsRange = function(e, t) {
            return (
              !!e &&
              !!t &&
              e.startLineNumber === t.startLineNumber &&
              e.startColumn === t.startColumn &&
              e.endLineNumber === t.endLineNumber &&
              e.endColumn === t.endColumn
            );
          }),
          (e.prototype.getEndPosition = function() {
            return new n.Position(this.endLineNumber, this.endColumn);
          }),
          (e.prototype.getStartPosition = function() {
            return new n.Position(this.startLineNumber, this.startColumn);
          }),
          (e.prototype.toString = function() {
            return (
              '[' +
              this.startLineNumber +
              ',' +
              this.startColumn +
              ' -> ' +
              this.endLineNumber +
              ',' +
              this.endColumn +
              ']'
            );
          }),
          (e.prototype.setEndPosition = function(t, n) {
            return new e(this.startLineNumber, this.startColumn, t, n);
          }),
          (e.prototype.setStartPosition = function(t, n) {
            return new e(t, n, this.endLineNumber, this.endColumn);
          }),
          (e.prototype.collapseToStart = function() {
            return e.collapseToStart(this);
          }),
          (e.collapseToStart = function(t) {
            return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
          }),
          (e.fromPositions = function(t, n) {
            return void 0 === n && (n = t), new e(t.lineNumber, t.column, n.lineNumber, n.column);
          }),
          (e.lift = function(t) {
            return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
          }),
          (e.isIRange = function(e) {
            return (
              e &&
              'number' == typeof e.startLineNumber &&
              'number' == typeof e.startColumn &&
              'number' == typeof e.endLineNumber &&
              'number' == typeof e.endColumn
            );
          }),
          (e.areIntersectingOrTouching = function(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn)
              )
            );
          }),
          (e.areIntersecting = function(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn)
              )
            );
          }),
          (e.compareRangesUsingStarts = function(e, t) {
            if (e && t) {
              var n = 0 | e.startLineNumber,
                r = 0 | t.startLineNumber;
              if (n === r) {
                var i = 0 | e.startColumn,
                  o = 0 | t.startColumn;
                if (i === o) {
                  var s = 0 | e.endLineNumber,
                    u = 0 | t.endLineNumber;
                  if (s === u) {
                    return (0 | e.endColumn) - (0 | t.endColumn);
                  }
                  return s - u;
                }
                return i - o;
              }
              return n - r;
            }
            return (e ? 1 : 0) - (t ? 1 : 0);
          }),
          (e.compareRangesUsingEnds = function(e, t) {
            return e.endLineNumber === t.endLineNumber
              ? e.endColumn === t.endColumn
                ? e.startLineNumber === t.startLineNumber
                  ? e.startColumn - t.startColumn
                  : e.startLineNumber - t.startLineNumber
                : e.endColumn - t.endColumn
              : e.endLineNumber - t.endLineNumber;
          }),
          (e.spansMultipleLines = function(e) {
            return e.endLineNumber > e.startLineNumber;
          }),
          e
        );
      })();
      t.Range = r;
    }),
    i(e[19], t([0, 1, 2, 6]), function(e, t, n, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function(e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r, i) || this;
          return (
            (o.selectionStartLineNumber = t),
            (o.selectionStartColumn = n),
            (o.positionLineNumber = r),
            (o.positionColumn = i),
            o
          );
        }
        return (
          s(t, e),
          (t.prototype.clone = function() {
            return new t(
              this.selectionStartLineNumber,
              this.selectionStartColumn,
              this.positionLineNumber,
              this.positionColumn,
            );
          }),
          (t.prototype.toString = function() {
            return (
              '[' +
              this.selectionStartLineNumber +
              ',' +
              this.selectionStartColumn +
              ' -> ' +
              this.positionLineNumber +
              ',' +
              this.positionColumn +
              ']'
            );
          }),
          (t.prototype.equalsSelection = function(e) {
            return t.selectionsEqual(this, e);
          }),
          (t.selectionsEqual = function(e, t) {
            return (
              e.selectionStartLineNumber === t.selectionStartLineNumber &&
              e.selectionStartColumn === t.selectionStartColumn &&
              e.positionLineNumber === t.positionLineNumber &&
              e.positionColumn === t.positionColumn
            );
          }),
          (t.prototype.getDirection = function() {
            return this.selectionStartLineNumber === this.startLineNumber &&
              this.selectionStartColumn === this.startColumn
              ? 0
              : 1;
          }),
          (t.prototype.setEndPosition = function(e, n) {
            return 0 === this.getDirection()
              ? new t(this.startLineNumber, this.startColumn, e, n)
              : new t(e, n, this.startLineNumber, this.startColumn);
          }),
          (t.prototype.getPosition = function() {
            return new n.Position(this.positionLineNumber, this.positionColumn);
          }),
          (t.prototype.setStartPosition = function(e, n) {
            return 0 === this.getDirection()
              ? new t(e, n, this.endLineNumber, this.endColumn)
              : new t(this.endLineNumber, this.endColumn, e, n);
          }),
          (t.fromPositions = function(e, n) {
            return void 0 === n && (n = e), new t(e.lineNumber, e.column, n.lineNumber, n.column);
          }),
          (t.liftSelection = function(e) {
            return new t(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
          }),
          (t.selectionsArrEqual = function(e, t) {
            if ((e && !t) || (!e && t)) return !1;
            if (!e && !t) return !0;
            if (e.length !== t.length) return !1;
            for (var n = 0, r = e.length; n < r; n++) if (!this.selectionsEqual(e[n], t[n])) return !1;
            return !0;
          }),
          (t.isISelection = function(e) {
            return (
              e &&
              'number' == typeof e.selectionStartLineNumber &&
              'number' == typeof e.selectionStartColumn &&
              'number' == typeof e.positionLineNumber &&
              'number' == typeof e.positionColumn
            );
          }),
          (t.createWithDirection = function(e, n, r, i, o) {
            return 0 === o ? new t(e, n, r, i) : new t(r, i, e, n);
          }),
          t
        );
      })(r.Range);
      t.Selection = i;
    }),
    i(e[20], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
        function e(e, t, n) {
          (this.offset = 0 | e), (this.type = t), (this.language = n);
        }
        return (
          (e.prototype.toString = function() {
            return '(' + this.offset + ', ' + this.type + ')';
          }),
          e
        );
      })();
      t.Token = n;
      var r = (function() {
        return function(e, t) {
          (this.tokens = e), (this.endState = t);
        };
      })();
      t.TokenizationResult = r;
      var i = (function() {
        return function(e, t) {
          (this.tokens = e), (this.endState = t);
        };
      })();
      t.TokenizationResult2 = i;
    }),
    i(e[4], t([0, 1]), function(e, t) {
      'use strict';
      function n(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e(e, t, n) {
          for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++) r[i] = n;
          (this._data = r), (this.rows = e), (this.cols = t);
        }
        return (
          (e.prototype.get = function(e, t) {
            return this._data[e * this.cols + t];
          }),
          (e.prototype.set = function(e, t, n) {
            this._data[e * this.cols + t] = n;
          }),
          e
        );
      })();
      (t.Uint8Matrix = r),
        (t.toUint8 = function(e) {
          return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
        }),
        (t.toUint32 = n),
        (t.toUint32Array = function(e) {
          for (var t = e.length, r = new Uint32Array(t), i = 0; i < t; i++) r[i] = n(e[i]);
          return r;
        });
    }),
    i(e[22], t([0, 1, 4]), function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e(t) {
          var r = n.toUint8(t);
          (this._defaultValue = r), (this._asciiMap = e._createAsciiMap(r)), (this._map = new Map());
        }
        return (
          (e._createAsciiMap = function(e) {
            for (var t = new Uint8Array(256), n = 0; n < 256; n++) t[n] = e;
            return t;
          }),
          (e.prototype.set = function(e, t) {
            var r = n.toUint8(t);
            e >= 0 && e < 256 ? (this._asciiMap[e] = r) : this._map.set(e, r);
          }),
          (e.prototype.get = function(e) {
            return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
          }),
          e
        );
      })();
      t.CharacterClassifier = r;
      var i = (function() {
        function e() {
          this._actual = new r(0);
        }
        return (
          (e.prototype.add = function(e) {
            this._actual.set(e, 1);
          }),
          (e.prototype.has = function(e) {
            return 1 === this._actual.get(e);
          }),
          e
        );
      })();
      t.CharacterSet = i;
    }),
    i(e[23], t([0, 1, 8, 13]), function(e, t, n, r) {
      'use strict';
      function i(e, t, r, i) {
        return new n.LcsDiff(e, t, r).ComputeDiff(i);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = 5e3,
        s = 3,
        u = (function() {
          function e(t) {
            for (var n = [], r = [], i = 0, o = t.length; i < o; i++)
              (n[i] = e._getFirstNonBlankColumn(t[i], 1)), (r[i] = e._getLastNonBlankColumn(t[i], 1));
            (this._lines = t), (this._startColumns = n), (this._endColumns = r);
          }
          return (
            (e.prototype.getLength = function() {
              return this._lines.length;
            }),
            (e.prototype.getElementAtIndex = function(e) {
              return this._lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
            }),
            (e.prototype.getStartLineNumber = function(e) {
              return e + 1;
            }),
            (e.prototype.getEndLineNumber = function(e) {
              return e + 1;
            }),
            (e._getFirstNonBlankColumn = function(e, t) {
              var n = r.firstNonWhitespaceIndex(e);
              return -1 === n ? t : n + 1;
            }),
            (e._getLastNonBlankColumn = function(e, t) {
              var n = r.lastNonWhitespaceIndex(e);
              return -1 === n ? t : n + 2;
            }),
            (e.prototype.getCharSequence = function(e, t, n) {
              for (var r = [], i = [], o = [], s = 0, u = t; u <= n; u++)
                for (
                  var l = this._lines[u],
                    c = e ? this._startColumns[u] : 1,
                    d = e ? this._endColumns[u] : l.length + 1,
                    f = c;
                  f < d;
                  f++
                )
                  (r[s] = l.charCodeAt(f - 1)), (i[s] = u + 1), (o[s] = f), s++;
              return new a(r, i, o);
            }),
            e
          );
        })(),
        a = (function() {
          function e(e, t, n) {
            (this._charCodes = e), (this._lineNumbers = t), (this._columns = n);
          }
          return (
            (e.prototype.getLength = function() {
              return this._charCodes.length;
            }),
            (e.prototype.getElementAtIndex = function(e) {
              return this._charCodes[e];
            }),
            (e.prototype.getStartLineNumber = function(e) {
              return this._lineNumbers[e];
            }),
            (e.prototype.getStartColumn = function(e) {
              return this._columns[e];
            }),
            (e.prototype.getEndLineNumber = function(e) {
              return this._lineNumbers[e];
            }),
            (e.prototype.getEndColumn = function(e) {
              return this._columns[e] + 1;
            }),
            e
          );
        })(),
        l = (function() {
          function e(e, t, n, r, i, o, s, u) {
            (this.originalStartLineNumber = e),
              (this.originalStartColumn = t),
              (this.originalEndLineNumber = n),
              (this.originalEndColumn = r),
              (this.modifiedStartLineNumber = i),
              (this.modifiedStartColumn = o),
              (this.modifiedEndLineNumber = s),
              (this.modifiedEndColumn = u);
          }
          return (
            (e.createFromDiffChange = function(t, n, r) {
              var i, o, s, u, a, l, c, d;
              return (
                0 === t.originalLength
                  ? ((i = 0), (o = 0), (s = 0), (u = 0))
                  : ((i = n.getStartLineNumber(t.originalStart)),
                    (o = n.getStartColumn(t.originalStart)),
                    (s = n.getEndLineNumber(t.originalStart + t.originalLength - 1)),
                    (u = n.getEndColumn(t.originalStart + t.originalLength - 1))),
                0 === t.modifiedLength
                  ? ((a = 0), (l = 0), (c = 0), (d = 0))
                  : ((a = r.getStartLineNumber(t.modifiedStart)),
                    (l = r.getStartColumn(t.modifiedStart)),
                    (c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1)),
                    (d = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1))),
                new e(i, o, s, u, a, l, c, d)
              );
            }),
            e
          );
        })(),
        c = (function() {
          function e(e, t, n, r, i) {
            (this.originalStartLineNumber = e),
              (this.originalEndLineNumber = t),
              (this.modifiedStartLineNumber = n),
              (this.modifiedEndLineNumber = r),
              (this.charChanges = i);
          }
          return (
            (e.createFromDiffResult = function(t, n, r, o, u, a, c) {
              var d,
                f,
                h,
                p,
                m = void 0;
              if (
                (0 === n.originalLength
                  ? ((d = r.getStartLineNumber(n.originalStart) - 1), (f = 0))
                  : ((d = r.getStartLineNumber(n.originalStart)),
                    (f = r.getEndLineNumber(n.originalStart + n.originalLength - 1))),
                0 === n.modifiedLength
                  ? ((h = o.getStartLineNumber(n.modifiedStart) - 1), (p = 0))
                  : ((h = o.getStartLineNumber(n.modifiedStart)),
                    (p = o.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1))),
                a && 0 !== n.originalLength && 0 !== n.modifiedLength && u())
              ) {
                var g = r.getCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1),
                  _ = o.getCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1),
                  v = i(g, _, u, !0);
                c &&
                  (v = (function(e) {
                    if (e.length <= 1) return e;
                    for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
                      var o = e[r],
                        u = o.originalStart - (n.originalStart + n.originalLength),
                        a = o.modifiedStart - (n.modifiedStart + n.modifiedLength);
                      Math.min(u, a) < s
                        ? ((n.originalLength = o.originalStart + o.originalLength - n.originalStart),
                          (n.modifiedLength = o.modifiedStart + o.modifiedLength - n.modifiedStart))
                        : (t.push(o), (n = o));
                    }
                    return t;
                  })(v)),
                  (m = []);
                for (var y = 0, C = v.length; y < C; y++) m.push(l.createFromDiffChange(v[y], g, _));
              }
              return new e(d, f, h, p, m);
            }),
            e
          );
        })(),
        d = (function() {
          function e(e, t, n) {
            (this.shouldComputeCharChanges = n.shouldComputeCharChanges),
              (this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges),
              (this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace),
              (this.shouldMakePrettyDiff = n.shouldMakePrettyDiff),
              (this.maximumRunTimeMs = o),
              (this.originalLines = e),
              (this.modifiedLines = t),
              (this.original = new u(e)),
              (this.modified = new u(t));
          }
          return (
            (e.prototype.computeDiff = function() {
              if (1 === this.original.getLength() && 0 === this.original.getElementAtIndex(0).length)
                return [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.getLength(),
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0,
                      },
                    ],
                  },
                ];
              if (1 === this.modified.getLength() && 0 === this.modified.getElementAtIndex(0).length)
                return [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.getLength(),
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0,
                      },
                    ],
                  },
                ];
              this.computationStartTime = new Date().getTime();
              var e = i(
                this.original,
                this.modified,
                this._continueProcessingPredicate.bind(this),
                this.shouldMakePrettyDiff,
              );
              if (this.shouldIgnoreTrimWhitespace) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  t.push(
                    c.createFromDiffResult(
                      this.shouldIgnoreTrimWhitespace,
                      e[n],
                      this.original,
                      this.modified,
                      this._continueProcessingPredicate.bind(this),
                      this.shouldComputeCharChanges,
                      this.shouldPostProcessCharChanges,
                    ),
                  );
                return t;
              }
              for (var o = [], s = 0, a = 0, n = -1, l = e.length; n < l; n++) {
                for (
                  var d = n + 1 < l ? e[n + 1] : null,
                    f = d ? d.originalStart : this.originalLines.length,
                    h = d ? d.modifiedStart : this.modifiedLines.length;
                  s < f && a < h;

                ) {
                  var p = this.originalLines[s],
                    m = this.modifiedLines[a];
                  if (p !== m) {
                    for (
                      var g = u._getFirstNonBlankColumn(p, 1), _ = u._getFirstNonBlankColumn(m, 1);
                      g > 1 && _ > 1;

                    ) {
                      if ((E = p.charCodeAt(g - 2)) !== (L = m.charCodeAt(_ - 2))) break;
                      g--, _--;
                    }
                    (g > 1 || _ > 1) && this._pushTrimWhitespaceCharChange(o, s + 1, 1, g, a + 1, 1, _);
                    for (
                      var v = u._getLastNonBlankColumn(p, 1),
                        y = u._getLastNonBlankColumn(m, 1),
                        C = p.length + 1,
                        b = m.length + 1;
                      v < C && y < b;

                    ) {
                      var E = p.charCodeAt(v - 1),
                        L = p.charCodeAt(y - 1);
                      if (E !== L) break;
                      v++, y++;
                    }
                    (v < C || y < b) && this._pushTrimWhitespaceCharChange(o, s + 1, v, C, a + 1, y, b);
                  }
                  s++, a++;
                }
                d &&
                  (o.push(
                    c.createFromDiffResult(
                      this.shouldIgnoreTrimWhitespace,
                      d,
                      this.original,
                      this.modified,
                      this._continueProcessingPredicate.bind(this),
                      this.shouldComputeCharChanges,
                      this.shouldPostProcessCharChanges,
                    ),
                  ),
                  (s += d.originalLength),
                  (a += d.modifiedLength));
              }
              return o;
            }),
            (e.prototype._pushTrimWhitespaceCharChange = function(e, t, n, r, i, o, s) {
              if (!this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s)) {
                var u = void 0;
                this.shouldComputeCharChanges && (u = [new l(t, n, t, r, i, o, i, s)]), e.push(new c(t, t, i, i, u));
              }
            }),
            (e.prototype._mergeTrimWhitespaceCharChange = function(e, t, n, r, i, o, s) {
              var u = e.length;
              if (0 === u) return !1;
              var a = e[u - 1];
              return (
                0 !== a.originalEndLineNumber &&
                0 !== a.modifiedEndLineNumber &&
                a.originalEndLineNumber + 1 === t &&
                a.modifiedEndLineNumber + 1 === i &&
                ((a.originalEndLineNumber = t),
                (a.modifiedEndLineNumber = i),
                this.shouldComputeCharChanges && a.charChanges.push(new l(t, n, t, r, i, o, i, s)),
                !0)
              );
            }),
            (e.prototype._continueProcessingPredicate = function() {
              if (0 === this.maximumRunTimeMs) return !0;
              return new Date().getTime() - this.computationStartTime < this.maximumRunTimeMs;
            }),
            e
          );
        })();
      t.DiffComputer = d;
    }),
    i(e[24], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?'),
        (t.DEFAULT_WORD_REGEXP = (function(e) {
          void 0 === e && (e = '');
          for (var n = '(-?\\d*\\.\\d\\w*)|([^', r = 0, i = t.USUAL_WORD_SEPARATORS; r < i.length; r++) {
            var o = i[r];
            e.indexOf(o) >= 0 || (n += '\\' + o);
          }
          return (n += '\\s]+)'), new RegExp(n, 'g');
        })()),
        (t.ensureValidWordDefinition = function(e) {
          var n = t.DEFAULT_WORD_REGEXP;
          if (e && e instanceof RegExp)
            if (e.global) n = e;
            else {
              var r = 'g';
              e.ignoreCase && (r += 'i'),
                e.multiline && (r += 'm'),
                e.unicode && (r += 'u'),
                (n = new RegExp(e.source, r));
            }
          return (n.lastIndex = 0), n;
        }),
        (t.getWordAtText = function(e, t, n, r) {
          t.lastIndex = 0;
          var i = t.exec(n);
          if (!i) return null;
          var o =
            i[0].indexOf(' ') >= 0
              ? (function(e, t, n, r) {
                  var i = e - 1 - r;
                  t.lastIndex = 0;
                  for (var o; (o = t.exec(n)); ) {
                    var s = o.index || 0;
                    if (s > i) return null;
                    if (t.lastIndex >= i) return { word: o[0], startColumn: r + 1 + s, endColumn: r + 1 + t.lastIndex };
                  }
                  return null;
                })(e, t, n, r)
              : (function(e, t, n, r) {
                  var i = e - 1 - r,
                    o = n.lastIndexOf(' ', i - 1) + 1;
                  t.lastIndex = o;
                  for (var s; (s = t.exec(n)); ) {
                    var u = s.index || 0;
                    if (u <= i && t.lastIndex >= i)
                      return { word: s[0], startColumn: r + 1 + u, endColumn: r + 1 + t.lastIndex };
                  }
                  return null;
                })(e, t, n, r);
          return (t.lastIndex = 0), o;
        });
    }),
    i(e[25], t([0, 1, 22, 4]), function(e, t, n, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e) {
          for (var t = 0, n = 0, i = 0, o = e.length; i < o; i++) {
            var s = e[i],
              u = s[0],
              a = s[1],
              l = s[2];
            a > t && (t = a), u > n && (n = u), l > n && (n = l);
          }
          t++, n++;
          for (var c = new r.Uint8Matrix(n, t, 0), i = 0, o = e.length; i < o; i++) {
            var d = e[i],
              u = d[0],
              a = d[1],
              l = d[2];
            c.set(u, a, l);
          }
          (this._states = c), (this._maxCharCode = t);
        }
        return (
          (e.prototype.nextState = function(e, t) {
            return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
          }),
          e
        );
      })();
      t.StateMachine = i;
      var o = null,
        s = null,
        u = (function() {
          function e() {}
          return (
            (e._createLink = function(e, t, n, r, i) {
              var o = i - 1;
              do {
                var s = t.charCodeAt(o);
                if (2 !== e.get(s)) break;
                o--;
              } while (o > r);
              if (r > 0) {
                var u = t.charCodeAt(r - 1),
                  a = t.charCodeAt(o);
                ((40 === u && 41 === a) || (91 === u && 93 === a) || (123 === u && 125 === a)) && o--;
              }
              return {
                range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 },
                url: t.substring(r, o + 1),
              };
            }),
            (e.computeLinks = function(t, r) {
              void 0 === r &&
                (null === o &&
                  (o = new i([
                    [1, 104, 2],
                    [1, 72, 2],
                    [1, 102, 6],
                    [1, 70, 6],
                    [2, 116, 3],
                    [2, 84, 3],
                    [3, 116, 4],
                    [3, 84, 4],
                    [4, 112, 5],
                    [4, 80, 5],
                    [5, 115, 9],
                    [5, 83, 9],
                    [5, 58, 10],
                    [6, 105, 7],
                    [6, 73, 7],
                    [7, 108, 8],
                    [7, 76, 8],
                    [8, 101, 9],
                    [8, 69, 9],
                    [9, 58, 10],
                    [10, 47, 11],
                    [11, 47, 12],
                  ])),
                (r = o));
              for (
                var u = (function() {
                    if (null === s) {
                      for (
                        s = new n.CharacterClassifier(0), e = 0;
                        e <
                        ' \t<>\'"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…'.length;
                        e++
                      )
                        s.set(
                          ' \t<>\'"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…'.charCodeAt(
                            e,
                          ),
                          1,
                        );
                      for (var e = 0; e < '.,;'.length; e++) s.set('.,;'.charCodeAt(e), 2);
                    }
                    return s;
                  })(),
                  a = [],
                  l = 1,
                  c = t.getLineCount();
                l <= c;
                l++
              ) {
                for (
                  var d = t.getLineContent(l), f = d.length, h = 0, p = 0, m = 0, g = 1, _ = !1, v = !1, y = !1;
                  h < f;

                ) {
                  var C = !1,
                    b = d.charCodeAt(h);
                  if (13 === g) {
                    E = void 0;
                    switch (b) {
                      case 40:
                        (_ = !0), (E = 0);
                        break;
                      case 41:
                        E = _ ? 0 : 1;
                        break;
                      case 91:
                        (v = !0), (E = 0);
                        break;
                      case 93:
                        E = v ? 0 : 1;
                        break;
                      case 123:
                        (y = !0), (E = 0);
                        break;
                      case 125:
                        E = y ? 0 : 1;
                        break;
                      case 39:
                        E = 34 === m || 96 === m ? 0 : 1;
                        break;
                      case 34:
                        E = 39 === m || 96 === m ? 0 : 1;
                        break;
                      case 96:
                        E = 39 === m || 34 === m ? 0 : 1;
                        break;
                      default:
                        E = u.get(b);
                    }
                    1 === E && (a.push(e._createLink(u, d, l, p, h)), (C = !0));
                  } else if (12 === g) {
                    var E = void 0;
                    91 === b ? ((v = !0), (E = 0)) : (E = u.get(b)), 1 === E ? (C = !0) : (g = 13);
                  } else 0 === (g = r.nextState(g, b)) && (C = !0);
                  C && ((g = 1), (_ = !1), (v = !1), (y = !1), (p = h + 1), (m = b)), h++;
                }
                13 === g && a.push(e._createLink(u, d, l, p, f));
              }
              return a;
            }),
            e
          );
        })();
      (t.LinkComputer = u),
        (t.computeLinks = function(e) {
          return e && 'function' == typeof e.getLineCount && 'function' == typeof e.getLineContent
            ? u.computeLinks(e)
            : [];
        });
    }),
    i(e[26], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
        function e() {
          this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
            ['public', 'protected', 'private'],
          ];
        }
        return (
          (e.prototype.navigateValueSet = function(e, t, n, r, i) {
            if (e && t) {
              if ((o = this.doNavigateValueSet(t, i))) return { range: e, value: o };
            }
            if (n && r) {
              var o = this.doNavigateValueSet(r, i);
              if (o) return { range: n, value: o };
            }
            return null;
          }),
          (e.prototype.doNavigateValueSet = function(e, t) {
            var n = this.numberReplace(e, t);
            return null !== n ? n : this.textReplace(e, t);
          }),
          (e.prototype.numberReplace = function(e, t) {
            var n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1)),
              r = Number(e),
              i = parseFloat(e);
            return isNaN(r) || isNaN(i) || r !== i
              ? null
              : 0 !== r || t
              ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
              : null;
          }),
          (e.prototype.textReplace = function(e, t) {
            return this.valueSetsReplace(this._defaultValueSet, e, t);
          }),
          (e.prototype.valueSetsReplace = function(e, t, n) {
            for (var r = null, i = 0, o = e.length; null === r && i < o; i++) r = this.valueSetReplace(e[i], t, n);
            return r;
          }),
          (e.prototype.valueSetReplace = function(e, t, n) {
            var r = e.indexOf(t);
            return r >= 0 ? ((r += n ? 1 : -1) < 0 ? (r = e.length - 1) : (r %= e.length), e[r]) : null;
          }),
          (e.INSTANCE = new e()),
          e
        );
      })();
      t.BasicInplaceReplace = n;
    }) /*!
Copyright (c) 2014 Taylor Hakes
Copyright (c) 2014 Forbes Lindesay
 */,
    (function(e, t) {
      'object' == typeof exports && 'undefined' != typeof module
        ? t()
        : 'function' == typeof i && i.amd
        ? i('vs/editor/common/standalone/promise-polyfill/polyfill', t)
        : t();
    })(0, function() {
      'use strict';
      function e(e) {
        var t = this.constructor;
        return this.then(
          function(n) {
            return t.resolve(e()).then(function() {
              return n;
            });
          },
          function(n) {
            return t.resolve(e()).then(function() {
              return t.reject(n);
            });
          },
        );
      }
      function t() {}
      function n(e) {
        if (!(this instanceof n)) throw new TypeError('Promises must be constructed via new');
        if ('function' != typeof e) throw new TypeError('not a function');
        (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), u(e, this);
      }
      function r(e, t) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            n._immediateFn(function() {
              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var r;
                try {
                  r = n(e._value);
                } catch (e) {
                  return void o(t.promise, e);
                }
                i(t.promise, r);
              } else (1 === e._state ? i : o)(t.promise, e._value);
            }))
          : e._deferreds.push(t);
      }
      function i(e, t) {
        try {
          if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
          if (t && ('object' == typeof t || 'function' == typeof t)) {
            var r = t.then;
            if (t instanceof n) return (e._state = 3), (e._value = t), void s(e);
            if ('function' == typeof r)
              return void u(
                (function(e, t) {
                  return function() {
                    e.apply(t, arguments);
                  };
                })(r, t),
                e,
              );
          }
          (e._state = 1), (e._value = t), s(e);
        } catch (t) {
          o(e, t);
        }
      }
      function o(e, t) {
        (e._state = 2), (e._value = t), s(e);
      }
      function s(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          n._immediateFn(function() {
            e._handled || n._unhandledRejectionFn(e._value);
          });
        for (var t = 0, i = e._deferreds.length; t < i; t++) r(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function u(e, t) {
        var n = !1;
        try {
          e(
            function(e) {
              n || ((n = !0), i(t, e));
            },
            function(e) {
              n || ((n = !0), o(t, e));
            },
          );
        } catch (e) {
          if (n) return;
          (n = !0), o(t, e);
        }
      }
      var a = setTimeout;
      (n.prototype.catch = function(e) {
        return this.then(null, e);
      }),
        (n.prototype.then = function(e, n) {
          var i = new this.constructor(t);
          return (
            r(
              this,
              new (function(e, t, n) {
                (this.onFulfilled = 'function' == typeof e ? e : null),
                  (this.onRejected = 'function' == typeof t ? t : null),
                  (this.promise = n);
              })(e, n, i),
            ),
            i
          );
        }),
        (n.prototype.finally = e),
        (n.all = function(e) {
          return new n(function(t, n) {
            function r(e, s) {
              try {
                if (s && ('object' == typeof s || 'function' == typeof s)) {
                  var u = s.then;
                  if ('function' == typeof u)
                    return void u.call(
                      s,
                      function(t) {
                        r(e, t);
                      },
                      n,
                    );
                }
                (i[e] = s), 0 == --o && t(i);
              } catch (e) {
                n(e);
              }
            }
            if (!e || void 0 === e.length) throw new TypeError('Promise.all accepts an array');
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return t([]);
            for (var o = i.length, s = 0; s < i.length; s++) r(s, i[s]);
          });
        }),
        (n.resolve = function(e) {
          return e && 'object' == typeof e && e.constructor === n
            ? e
            : new n(function(t) {
                t(e);
              });
        }),
        (n.reject = function(e) {
          return new n(function(t, n) {
            n(e);
          });
        }),
        (n.race = function(e) {
          return new n(function(t, n) {
            for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n);
          });
        }),
        (n._immediateFn =
          ('function' == typeof setImmediate &&
            function(e) {
              setImmediate(e);
            }) ||
          function(e) {
            a(e, 0);
          }),
        (n._unhandledRejectionFn = function(e) {
          'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', e);
        });
      var l = (function() {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if ('undefined' != typeof global) return global;
        throw new Error('unable to locate global object');
      })();
      'Promise' in l ? l.Promise.prototype.finally || (l.Promise.prototype.finally = e) : (l.Promise = n);
    }),
    i(e[27], t([0, 1]), function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      !(function(e) {
        e[(e.Unnecessary = 1)] = 'Unnecessary';
      })(t.MarkerTag || (t.MarkerTag = {}));
      !(function(e) {
        (e[(e.Hint = 1)] = 'Hint'),
          (e[(e.Info = 2)] = 'Info'),
          (e[(e.Warning = 4)] = 'Warning'),
          (e[(e.Error = 8)] = 'Error');
      })(t.MarkerSeverity || (t.MarkerSeverity = {}));
      !(function(e) {
        (e[(e.Unknown = 0)] = 'Unknown'),
          (e[(e.Backspace = 1)] = 'Backspace'),
          (e[(e.Tab = 2)] = 'Tab'),
          (e[(e.Enter = 3)] = 'Enter'),
          (e[(e.Shift = 4)] = 'Shift'),
          (e[(e.Ctrl = 5)] = 'Ctrl'),
          (e[(e.Alt = 6)] = 'Alt'),
          (e[(e.PauseBreak = 7)] = 'PauseBreak'),
          (e[(e.CapsLock = 8)] = 'CapsLock'),
          (e[(e.Escape = 9)] = 'Escape'),
          (e[(e.Space = 10)] = 'Space'),
          (e[(e.PageUp = 11)] = 'PageUp'),
          (e[(e.PageDown = 12)] = 'PageDown'),
          (e[(e.End = 13)] = 'End'),
          (e[(e.Home = 14)] = 'Home'),
          (e[(e.LeftArrow = 15)] = 'LeftArrow'),
          (e[(e.UpArrow = 16)] = 'UpArrow'),
          (e[(e.RightArrow = 17)] = 'RightArrow'),
          (e[(e.DownArrow = 18)] = 'DownArrow'),
          (e[(e.Insert = 19)] = 'Insert'),
          (e[(e.Delete = 20)] = 'Delete'),
          (e[(e.KEY_0 = 21)] = 'KEY_0'),
          (e[(e.KEY_1 = 22)] = 'KEY_1'),
          (e[(e.KEY_2 = 23)] = 'KEY_2'),
          (e[(e.KEY_3 = 24)] = 'KEY_3'),
          (e[(e.KEY_4 = 25)] = 'KEY_4'),
          (e[(e.KEY_5 = 26)] = 'KEY_5'),
          (e[(e.KEY_6 = 27)] = 'KEY_6'),
          (e[(e.KEY_7 = 28)] = 'KEY_7'),
          (e[(e.KEY_8 = 29)] = 'KEY_8'),
          (e[(e.KEY_9 = 30)] = 'KEY_9'),
          (e[(e.KEY_A = 31)] = 'KEY_A'),
          (e[(e.KEY_B = 32)] = 'KEY_B'),
          (e[(e.KEY_C = 33)] = 'KEY_C'),
          (e[(e.KEY_D = 34)] = 'KEY_D'),
          (e[(e.KEY_E = 35)] = 'KEY_E'),
          (e[(e.KEY_F = 36)] = 'KEY_F'),
          (e[(e.KEY_G = 37)] = 'KEY_G'),
          (e[(e.KEY_H = 38)] = 'KEY_H'),
          (e[(e.KEY_I = 39)] = 'KEY_I'),
          (e[(e.KEY_J = 40)] = 'KEY_J'),
          (e[(e.KEY_K = 41)] = 'KEY_K'),
          (e[(e.KEY_L = 42)] = 'KEY_L'),
          (e[(e.KEY_M = 43)] = 'KEY_M'),
          (e[(e.KEY_N = 44)] = 'KEY_N'),
          (e[(e.KEY_O = 45)] = 'KEY_O'),
          (e[(e.KEY_P = 46)] = 'KEY_P'),
          (e[(e.KEY_Q = 47)] = 'KEY_Q'),
          (e[(e.KEY_R = 48)] = 'KEY_R'),
          (e[(e.KEY_S = 49)] = 'KEY_S'),
          (e[(e.KEY_T = 50)] = 'KEY_T'),
          (e[(e.KEY_U = 51)] = 'KEY_U'),
          (e[(e.KEY_V = 52)] = 'KEY_V'),
          (e[(e.KEY_W = 53)] = 'KEY_W'),
          (e[(e.KEY_X = 54)] = 'KEY_X'),
          (e[(e.KEY_Y = 55)] = 'KEY_Y'),
          (e[(e.KEY_Z = 56)] = 'KEY_Z'),
          (e[(e.Meta = 57)] = 'Meta'),
          (e[(e.ContextMenu = 58)] = 'ContextMenu'),
          (e[(e.F1 = 59)] = 'F1'),
          (e[(e.F2 = 60)] = 'F2'),
          (e[(e.F3 = 61)] = 'F3'),
          (e[(e.F4 = 62)] = 'F4'),
          (e[(e.F5 = 63)] = 'F5'),
          (e[(e.F6 = 64)] = 'F6'),
          (e[(e.F7 = 65)] = 'F7'),
          (e[(e.F8 = 66)] = 'F8'),
          (e[(e.F9 = 67)] = 'F9'),
          (e[(e.F10 = 68)] = 'F10'),
          (e[(e.F11 = 69)] = 'F11'),
          (e[(e.F12 = 70)] = 'F12'),
          (e[(e.F13 = 71)] = 'F13'),
          (e[(e.F14 = 72)] = 'F14'),
          (e[(e.F15 = 73)] = 'F15'),
          (e[(e.F16 = 74)] = 'F16'),
          (e[(e.F17 = 75)] = 'F17'),
          (e[(e.F18 = 76)] = 'F18'),
          (e[(e.F19 = 77)] = 'F19'),
          (e[(e.NumLock = 78)] = 'NumLock'),
          (e[(e.ScrollLock = 79)] = 'ScrollLock'),
          (e[(e.US_SEMICOLON = 80)] = 'US_SEMICOLON'),
          (e[(e.US_EQUAL = 81)] = 'US_EQUAL'),
          (e[(e.US_COMMA = 82)] = 'US_COMMA'),
          (e[(e.US_MINUS = 83)] = 'US_MINUS'),
          (e[(e.US_DOT = 84)] = 'US_DOT'),
          (e[(e.US_SLASH = 85)] = 'US_SLASH'),
          (e[(e.US_BACKTICK = 86)] = 'US_BACKTICK'),
          (e[(e.US_OPEN_SQUARE_BRACKET = 87)] = 'US_OPEN_SQUARE_BRACKET'),
          (e[(e.US_BACKSLASH = 88)] = 'US_BACKSLASH'),
          (e[(e.US_CLOSE_SQUARE_BRACKET = 89)] = 'US_CLOSE_SQUARE_BRACKET'),
          (e[(e.US_QUOTE = 90)] = 'US_QUOTE'),
          (e[(e.OEM_8 = 91)] = 'OEM_8'),
          (e[(e.OEM_102 = 92)] = 'OEM_102'),
          (e[(e.NUMPAD_0 = 93)] = 'NUMPAD_0'),
          (e[(e.NUMPAD_1 = 94)] = 'NUMPAD_1'),
          (e[(e.NUMPAD_2 = 95)] = 'NUMPAD_2'),
          (e[(e.NUMPAD_3 = 96)] = 'NUMPAD_3'),
          (e[(e.NUMPAD_4 = 97)] = 'NUMPAD_4'),
          (e[(e.NUMPAD_5 = 98)] = 'NUMPAD_5'),
          (e[(e.NUMPAD_6 = 99)] = 'NUMPAD_6'),
          (e[(e.NUMPAD_7 = 100)] = 'NUMPAD_7'),
          (e[(e.NUMPAD_8 = 101)] = 'NUMPAD_8'),
          (e[(e.NUMPAD_9 = 102)] = 'NUMPAD_9'),
          (e[(e.NUMPAD_MULTIPLY = 103)] = 'NUMPAD_MULTIPLY'),
          (e[(e.NUMPAD_ADD = 104)] = 'NUMPAD_ADD'),
          (e[(e.NUMPAD_SEPARATOR = 105)] = 'NUMPAD_SEPARATOR'),
          (e[(e.NUMPAD_SUBTRACT = 106)] = 'NUMPAD_SUBTRACT'),
          (e[(e.NUMPAD_DECIMAL = 107)] = 'NUMPAD_DECIMAL'),
          (e[(e.NUMPAD_DIVIDE = 108)] = 'NUMPAD_DIVIDE'),
          (e[(e.KEY_IN_COMPOSITION = 109)] = 'KEY_IN_COMPOSITION'),
          (e[(e.ABNT_C1 = 110)] = 'ABNT_C1'),
          (e[(e.ABNT_C2 = 111)] = 'ABNT_C2'),
          (e[(e.MAX_VALUE = 112)] = 'MAX_VALUE');
      })(t.KeyCode || (t.KeyCode = {}));
      !(function(e) {
        (e[(e.LTR = 0)] = 'LTR'), (e[(e.RTL = 1)] = 'RTL');
      })(t.SelectionDirection || (t.SelectionDirection = {}));
      !(function(e) {
        (e[(e.Auto = 1)] = 'Auto'), (e[(e.Hidden = 2)] = 'Hidden'), (e[(e.Visible = 3)] = 'Visible');
      })(t.ScrollbarVisibility || (t.ScrollbarVisibility = {}));
      !(function(e) {
        (e[(e.Left = 1)] = 'Left'),
          (e[(e.Center = 2)] = 'Center'),
          (e[(e.Right = 4)] = 'Right'),
          (e[(e.Full = 7)] = 'Full');
      })(t.OverviewRulerLane || (t.OverviewRulerLane = {}));
      !(function(e) {
        (e[(e.TextDefined = 0)] = 'TextDefined'), (e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF');
      })(t.EndOfLinePreference || (t.EndOfLinePreference = {}));
      !(function(e) {
        (e[(e.LF = 1)] = 'LF'), (e[(e.CRLF = 2)] = 'CRLF');
      })(t.DefaultEndOfLine || (t.DefaultEndOfLine = {}));
      !(function(e) {
        (e[(e.LF = 0)] = 'LF'), (e[(e.CRLF = 1)] = 'CRLF');
      })(t.EndOfLineSequence || (t.EndOfLineSequence = {}));
      !(function(e) {
        (e[(e.AlwaysGrowsWhenTypingAtEdges = 0)] = 'AlwaysGrowsWhenTypingAtEdges'),
          (e[(e.NeverGrowsWhenTypingAtEdges = 1)] = 'NeverGrowsWhenTypingAtEdges'),
          (e[(e.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
          (e[(e.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter');
      })(t.TrackedRangeStickiness || (t.TrackedRangeStickiness = {}));
      !(function(e) {
        (e[(e.Smooth = 0)] = 'Smooth'), (e[(e.Immediate = 1)] = 'Immediate');
      })(t.ScrollType || (t.ScrollType = {}));
      !(function(e) {
        (e[(e.NotSet = 0)] = 'NotSet'),
          (e[(e.ContentFlush = 1)] = 'ContentFlush'),
          (e[(e.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
          (e[(e.Explicit = 3)] = 'Explicit'),
          (e[(e.Paste = 4)] = 'Paste'),
          (e[(e.Undo = 5)] = 'Undo'),
          (e[(e.Redo = 6)] = 'Redo');
      })(t.CursorChangeReason || (t.CursorChangeReason = {}));
      !(function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Small = 1)] = 'Small'),
          (e[(e.Large = 2)] = 'Large'),
          (e[(e.SmallBlocks = 3)] = 'SmallBlocks'),
          (e[(e.LargeBlocks = 4)] = 'LargeBlocks');
      })(t.RenderMinimap || (t.RenderMinimap = {}));
      !(function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Same = 1)] = 'Same'),
          (e[(e.Indent = 2)] = 'Indent'),
          (e[(e.DeepIndent = 3)] = 'DeepIndent');
      })(t.WrappingIndent || (t.WrappingIndent = {}));
      !(function(e) {
        (e[(e.Hidden = 0)] = 'Hidden'),
          (e[(e.Blink = 1)] = 'Blink'),
          (e[(e.Smooth = 2)] = 'Smooth'),
          (e[(e.Phase = 3)] = 'Phase'),
          (e[(e.Expand = 4)] = 'Expand'),
          (e[(e.Solid = 5)] = 'Solid');
      })(t.TextEditorCursorBlinkingStyle || (t.TextEditorCursorBlinkingStyle = {}));
      !(function(e) {
        (e[(e.Line = 1)] = 'Line'),
          (e[(e.Block = 2)] = 'Block'),
          (e[(e.Underline = 3)] = 'Underline'),
          (e[(e.LineThin = 4)] = 'LineThin'),
          (e[(e.BlockOutline = 5)] = 'BlockOutline'),
          (e[(e.UnderlineThin = 6)] = 'UnderlineThin');
      })(t.TextEditorCursorStyle || (t.TextEditorCursorStyle = {}));
      !(function(e) {
        (e[(e.Off = 0)] = 'Off'),
          (e[(e.On = 1)] = 'On'),
          (e[(e.Relative = 2)] = 'Relative'),
          (e[(e.Interval = 3)] = 'Interval'),
          (e[(e.Custom = 4)] = 'Custom');
      })(t.RenderLineNumbersType || (t.RenderLineNumbersType = {}));
      !(function(e) {
        (e[(e.EXACT = 0)] = 'EXACT'), (e[(e.ABOVE = 1)] = 'ABOVE'), (e[(e.BELOW = 2)] = 'BELOW');
      })(t.ContentWidgetPositionPreference || (t.ContentWidgetPositionPreference = {}));
      !(function(e) {
        (e[(e.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
          (e[(e.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (e[(e.TOP_CENTER = 2)] = 'TOP_CENTER');
      })(t.OverlayWidgetPositionPreference || (t.OverlayWidgetPositionPreference = {}));
      !(function(e) {
        (e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
          (e[(e.TEXTAREA = 1)] = 'TEXTAREA'),
          (e[(e.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (e[(e.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
          (e[(e.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (e[(e.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
          (e[(e.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
          (e[(e.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
          (e[(e.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
          (e[(e.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
          (e[(e.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
          (e[(e.SCROLLBAR = 11)] = 'SCROLLBAR'),
          (e[(e.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
          (e[(e.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR');
      })(t.MouseTargetType || (t.MouseTargetType = {}));
      !(function(e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Indent = 1)] = 'Indent'),
          (e[(e.IndentOutdent = 2)] = 'IndentOutdent'),
          (e[(e.Outdent = 3)] = 'Outdent');
      })(t.IndentAction || (t.IndentAction = {}));
      !(function(e) {
        (e[(e.Method = 0)] = 'Method'),
          (e[(e.Function = 1)] = 'Function'),
          (e[(e.Constructor = 2)] = 'Constructor'),
          (e[(e.Field = 3)] = 'Field'),
          (e[(e.Variable = 4)] = 'Variable'),
          (e[(e.Class = 5)] = 'Class'),
          (e[(e.Struct = 6)] = 'Struct'),
          (e[(e.Interface = 7)] = 'Interface'),
          (e[(e.Module = 8)] = 'Module'),
          (e[(e.Property = 9)] = 'Property'),
          (e[(e.Event = 10)] = 'Event'),
          (e[(e.Operator = 11)] = 'Operator'),
          (e[(e.Unit = 12)] = 'Unit'),
          (e[(e.Value = 13)] = 'Value'),
          (e[(e.Constant = 14)] = 'Constant'),
          (e[(e.Enum = 15)] = 'Enum'),
          (e[(e.EnumMember = 16)] = 'EnumMember'),
          (e[(e.Keyword = 17)] = 'Keyword'),
          (e[(e.Text = 18)] = 'Text'),
          (e[(e.Color = 19)] = 'Color'),
          (e[(e.File = 20)] = 'File'),
          (e[(e.Reference = 21)] = 'Reference'),
          (e[(e.Customcolor = 22)] = 'Customcolor'),
          (e[(e.Folder = 23)] = 'Folder'),
          (e[(e.TypeParameter = 24)] = 'TypeParameter'),
          (e[(e.Snippet = 25)] = 'Snippet');
      })(t.CompletionItemKind || (t.CompletionItemKind = {}));
      !(function(e) {
        (e[(e.KeepWhitespace = 1)] = 'KeepWhitespace'), (e[(e.InsertAsSnippet = 4)] = 'InsertAsSnippet');
      })(t.CompletionItemInsertTextRule || (t.CompletionItemInsertTextRule = {}));
      !(function(e) {
        (e[(e.Invoke = 0)] = 'Invoke'),
          (e[(e.TriggerCharacter = 1)] = 'TriggerCharacter'),
          (e[(e.TriggerForIncompleteCompletions = 2)] = 'TriggerForIncompleteCompletions');
      })(t.CompletionTriggerKind || (t.CompletionTriggerKind = {}));
      !(function(e) {
        (e[(e.Invoke = 1)] = 'Invoke'),
          (e[(e.TriggerCharacter = 2)] = 'TriggerCharacter'),
          (e[(e.ContentChange = 3)] = 'ContentChange');
      })(t.SignatureHelpTriggerKind || (t.SignatureHelpTriggerKind = {}));
      !(function(e) {
        (e[(e.Text = 0)] = 'Text'), (e[(e.Read = 1)] = 'Read'), (e[(e.Write = 2)] = 'Write');
      })(t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
      !(function(e) {
        (e[(e.File = 0)] = 'File'),
          (e[(e.Module = 1)] = 'Module'),
          (e[(e.Namespace = 2)] = 'Namespace'),
          (e[(e.Package = 3)] = 'Package'),
          (e[(e.Class = 4)] = 'Class'),
          (e[(e.Method = 5)] = 'Method'),
          (e[(e.Property = 6)] = 'Property'),
          (e[(e.Field = 7)] = 'Field'),
          (e[(e.Constructor = 8)] = 'Constructor'),
          (e[(e.Enum = 9)] = 'Enum'),
          (e[(e.Interface = 10)] = 'Interface'),
          (e[(e.Function = 11)] = 'Function'),
          (e[(e.Variable = 12)] = 'Variable'),
          (e[(e.Constant = 13)] = 'Constant'),
          (e[(e.String = 14)] = 'String'),
          (e[(e.Number = 15)] = 'Number'),
          (e[(e.Boolean = 16)] = 'Boolean'),
          (e[(e.Array = 17)] = 'Array'),
          (e[(e.Object = 18)] = 'Object'),
          (e[(e.Key = 19)] = 'Key'),
          (e[(e.Null = 20)] = 'Null'),
          (e[(e.EnumMember = 21)] = 'EnumMember'),
          (e[(e.Struct = 22)] = 'Struct'),
          (e[(e.Event = 23)] = 'Event'),
          (e[(e.Operator = 24)] = 'Operator'),
          (e[(e.TypeParameter = 25)] = 'TypeParameter');
      })(t.SymbolKind || (t.SymbolKind = {}));
    }),
    i(e[28], t([0, 1, 18, 9, 14, 12, 2, 6, 19, 20, 27, 32]), function(e, t, n, r, i, o, s, u, a, l, c) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var d = (function() {
        function e() {}
        return (
          (e.chord = function(e, t) {
            return i.KeyChord(e, t);
          }),
          (e.CtrlCmd = 2048),
          (e.Shift = 1024),
          (e.Alt = 512),
          (e.WinCtrl = 256),
          e
        );
      })();
      (t.KeyMod = d),
        (t.createMonacoBaseAPI = function() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: n.CancellationTokenSource,
            Emitter: r.Emitter,
            KeyCode: c.KeyCode,
            KeyMod: d,
            Position: s.Position,
            Range: u.Range,
            Selection: a.Selection,
            SelectionDirection: c.SelectionDirection,
            MarkerSeverity: c.MarkerSeverity,
            MarkerTag: c.MarkerTag,
            Uri: o.URI,
            Token: l.Token,
          };
        });
    }),
    i(e[29], t([0, 1, 4]), function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        return function(e, t) {
          (this.index = e), (this.remainder = t);
        };
      })();
      t.PrefixSumIndexOfResult = r;
      var i = (function() {
        function e(e) {
          (this.values = e),
            (this.prefixSum = new Uint32Array(e.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        return (
          (e.prototype.getCount = function() {
            return this.values.length;
          }),
          (e.prototype.insertValues = function(e, t) {
            e = n.toUint32(e);
            var r = this.values,
              i = this.prefixSum,
              o = t.length;
            return (
              0 !== o &&
              ((this.values = new Uint32Array(r.length + o)),
              this.values.set(r.subarray(0, e), 0),
              this.values.set(r.subarray(e), e + o),
              this.values.set(t, e),
              e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1),
              (this.prefixSum = new Uint32Array(this.values.length)),
              this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
              !0)
            );
          }),
          (e.prototype.changeValue = function(e, t) {
            return (
              (e = n.toUint32(e)),
              (t = n.toUint32(t)),
              this.values[e] !== t &&
                ((this.values[e] = t), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0)
            );
          }),
          (e.prototype.removeValues = function(e, t) {
            (e = n.toUint32(e)), (t = n.toUint32(t));
            var r = this.values,
              i = this.prefixSum;
            if (e >= r.length) return !1;
            var o = r.length - e;
            return (
              t >= o && (t = o),
              0 !== t &&
                ((this.values = new Uint32Array(r.length - t)),
                this.values.set(r.subarray(0, e), 0),
                this.values.set(r.subarray(e + t), e),
                (this.prefixSum = new Uint32Array(this.values.length)),
                e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1),
                this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)),
                !0)
            );
          }),
          (e.prototype.getTotalValue = function() {
            return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1);
          }),
          (e.prototype.getAccumulatedValue = function(e) {
            return e < 0 ? 0 : ((e = n.toUint32(e)), this._getAccumulatedValue(e));
          }),
          (e.prototype._getAccumulatedValue = function(e) {
            if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
            var t = this.prefixSumValidIndex[0] + 1;
            0 === t && ((this.prefixSum[0] = this.values[0]), t++),
              e >= this.values.length && (e = this.values.length - 1);
            for (var n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
            return (this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e)), this.prefixSum[e];
          }),
          (e.prototype.getIndexOf = function(e) {
            (e = Math.floor(e)), this.getTotalValue();
            for (var t = 0, n = this.values.length - 1, i = 0, o = 0, s = 0; t <= n; )
              if (((i = (t + (n - t) / 2) | 0), (o = this.prefixSum[i]), (s = o - this.values[i]), e < s)) n = i - 1;
              else {
                if (!(e >= o)) break;
                t = i + 1;
              }
            return new r(i, e - s);
          }),
          e
        );
      })();
      t.PrefixSumComputer = i;
      var o = (function() {
        function e(e) {
          (this._cacheAccumulatedValueStart = 0), (this._cache = null), (this._actual = new i(e)), this._bustCache();
        }
        return (
          (e.prototype._bustCache = function() {
            (this._cacheAccumulatedValueStart = 0), (this._cache = null);
          }),
          (e.prototype.insertValues = function(e, t) {
            this._actual.insertValues(e, t) && this._bustCache();
          }),
          (e.prototype.changeValue = function(e, t) {
            this._actual.changeValue(e, t) && this._bustCache();
          }),
          (e.prototype.removeValues = function(e, t) {
            this._actual.removeValues(e, t) && this._bustCache();
          }),
          (e.prototype.getTotalValue = function() {
            return this._actual.getTotalValue();
          }),
          (e.prototype.getAccumulatedValue = function(e) {
            return this._actual.getAccumulatedValue(e);
          }),
          (e.prototype.getIndexOf = function(e) {
            if (((e = Math.floor(e)), null !== this._cache)) {
              var t = e - this._cacheAccumulatedValueStart;
              if (t >= 0 && t < this._cache.length) return this._cache[t];
            }
            return this._actual.getIndexOf(e);
          }),
          (e.prototype.warmUpCache = function(e, t) {
            for (var n = [], r = e; r <= t; r++) n[r - e] = this.getIndexOf(r);
            (this._cache = n), (this._cacheAccumulatedValueStart = e);
          }),
          e
        );
      })();
      t.PrefixSumComputerWithCache = o;
    }),
    i(e[30], t([0, 1, 2, 29]), function(e, t, n, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(e, t, n, r) {
          (this._uri = e), (this._lines = t), (this._eol = n), (this._versionId = r), (this._lineStarts = null);
        }
        return (
          (e.prototype.dispose = function() {
            this._lines.length = 0;
          }),
          (e.prototype.getText = function() {
            return this._lines.join(this._eol);
          }),
          (e.prototype.onEvents = function(e) {
            e.eol && e.eol !== this._eol && ((this._eol = e.eol), (this._lineStarts = null));
            for (var t = 0, r = e.changes; t < r.length; t++) {
              var i = r[t];
              this._acceptDeleteRange(i.range),
                this._acceptInsertText(new n.Position(i.range.startLineNumber, i.range.startColumn), i.text);
            }
            this._versionId = e.versionId;
          }),
          (e.prototype._ensureLineStarts = function() {
            if (!this._lineStarts) {
              for (var e = this._eol.length, t = this._lines.length, n = new Uint32Array(t), i = 0; i < t; i++)
                n[i] = this._lines[i].length + e;
              this._lineStarts = new r.PrefixSumComputer(n);
            }
          }),
          (e.prototype._setLineText = function(e, t) {
            (this._lines[e] = t),
              this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length);
          }),
          (e.prototype._acceptDeleteRange = function(e) {
            if (e.startLineNumber !== e.endLineNumber)
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
                  this._lines[e.endLineNumber - 1].substring(e.endColumn - 1),
              ),
                this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber),
                this._lineStarts &&
                  this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
            else {
              if (e.startColumn === e.endColumn) return;
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) +
                  this._lines[e.startLineNumber - 1].substring(e.endColumn - 1),
              );
            }
          }),
          (e.prototype._acceptInsertText = function(e, t) {
            if (0 !== t.length) {
              var n = t.split(/\r\n|\r|\n/);
              if (1 !== n.length) {
                (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1)),
                  this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
                for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++)
                  this._lines.splice(e.lineNumber + i - 1, 0, n[i]), (r[i - 1] = n[i].length + this._eol.length);
                this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
              } else
                this._setLineText(
                  e.lineNumber - 1,
                  this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                    n[0] +
                    this._lines[e.lineNumber - 1].substring(e.column - 1),
                );
            }
          }),
          e
        );
      })();
      t.MirrorTextModel = i;
    }),
    i(e[31], t([0, 1, 21, 8, 11, 3, 12, 2, 6, 23, 30, 24, 25, 26, 28, 7]), function(
      e,
      t,
      n,
      r,
      i,
      o,
      u,
      a,
      l,
      c,
      d,
      f,
      h,
      p,
      m,
      g,
    ) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var _ = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            s(t, e),
            Object.defineProperty(t.prototype, 'uri', {
              get: function() {
                return this._uri;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'version', {
              get: function() {
                return this._versionId;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'eol', {
              get: function() {
                return this._eol;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getValue = function() {
              return this.getText();
            }),
            (t.prototype.getLinesContent = function() {
              return this._lines.slice(0);
            }),
            (t.prototype.getLineCount = function() {
              return this._lines.length;
            }),
            (t.prototype.getLineContent = function(e) {
              return this._lines[e - 1];
            }),
            (t.prototype.getWordAtPosition = function(e, t) {
              var n = f.getWordAtText(e.column, f.ensureValidWordDefinition(t), this._lines[e.lineNumber - 1], 0);
              return n ? new l.Range(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
            }),
            (t.prototype.getWordUntilPosition = function(e, t) {
              var n = this.getWordAtPosition(e, t);
              return n
                ? {
                    word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1),
                    startColumn: n.startColumn,
                    endColumn: e.column,
                  }
                : { word: '', startColumn: e.column, endColumn: e.column };
            }),
            (t.prototype.createWordIterator = function(e) {
              var t,
                n,
                r = this,
                o = 0,
                s = 0,
                u = [],
                a = function() {
                  if (s < u.length) {
                    var l = n.substring(u[s].start, u[s].end);
                    return (s += 1), t ? (t.value = l) : (t = { done: !1, value: l }), t;
                  }
                  return o >= r._lines.length
                    ? i.FIN
                    : ((n = r._lines[o]), (u = r._wordenize(n, e)), (s = 0), (o += 1), a());
                };
              return { next: a };
            }),
            (t.prototype.getLineWords = function(e, t) {
              for (var n = this._lines[e - 1], r = [], i = 0, o = this._wordenize(n, t); i < o.length; i++) {
                var s = o[i];
                r.push({ word: n.substring(s.start, s.end), startColumn: s.start + 1, endColumn: s.end + 1 });
              }
              return r;
            }),
            (t.prototype._wordenize = function(e, t) {
              var n,
                r = [];
              for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length; )
                r.push({ start: n.index, end: n.index + n[0].length });
              return r;
            }),
            (t.prototype.getValueInRange = function(e) {
              if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber)
                return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
              var t = this._eol,
                n = e.startLineNumber - 1,
                r = e.endLineNumber - 1,
                i = [];
              i.push(this._lines[n].substring(e.startColumn - 1));
              for (var o = n + 1; o < r; o++) i.push(this._lines[o]);
              return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t);
            }),
            (t.prototype.offsetAt = function(e) {
              return (
                (e = this._validatePosition(e)),
                this._ensureLineStarts(),
                this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1)
              );
            }),
            (t.prototype.positionAt = function(e) {
              (e = Math.floor(e)), (e = Math.max(0, e)), this._ensureLineStarts();
              var t = this._lineStarts.getIndexOf(e),
                n = this._lines[t.index].length;
              return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
            }),
            (t.prototype._validateRange = function(e) {
              var t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }),
                n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn });
              return t.lineNumber !== e.startLineNumber ||
                t.column !== e.startColumn ||
                n.lineNumber !== e.endLineNumber ||
                n.column !== e.endColumn
                ? {
                    startLineNumber: t.lineNumber,
                    startColumn: t.column,
                    endLineNumber: n.lineNumber,
                    endColumn: n.column,
                  }
                : e;
            }),
            (t.prototype._validatePosition = function(e) {
              if (!a.Position.isIPosition(e)) throw new Error('bad position');
              var t = e.lineNumber,
                n = e.column,
                r = !1;
              if (t < 1) (t = 1), (n = 1), (r = !0);
              else if (t > this._lines.length) (t = this._lines.length), (n = this._lines[t - 1].length + 1), (r = !0);
              else {
                var i = this._lines[t - 1].length + 1;
                n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0));
              }
              return r ? { lineNumber: t, column: n } : e;
            }),
            t
          );
        })(d.MirrorTextModel),
        v = (function() {
          function t(e) {
            (this._foreignModuleFactory = e), (this._foreignModule = null);
          }
          return (
            (t.prototype.computeDiff = function(e, t, n) {
              var r = this._getModel(e),
                i = this._getModel(t);
              if (!r || !i) return Promise.resolve(null);
              var o = r.getLinesContent(),
                s = i.getLinesContent(),
                u = new c.DiffComputer(o, s, {
                  shouldComputeCharChanges: !0,
                  shouldPostProcessCharChanges: !0,
                  shouldIgnoreTrimWhitespace: n,
                  shouldMakePrettyDiff: !0,
                }).computeDiff(),
                a = !(u.length > 0) && this._modelsAreIdentical(r, i);
              return Promise.resolve({ identical: a, changes: u });
            }),
            (t.prototype._modelsAreIdentical = function(e, t) {
              var n = e.getLineCount();
              if (n !== t.getLineCount()) return !1;
              for (var r = 1; r <= n; r++) {
                if (e.getLineContent(r) !== t.getLineContent(r)) return !1;
              }
              return !0;
            }),
            (t.prototype.computeMoreMinimalEdits = function(e, i) {
              var o = this._getModel(e);
              if (!o) return Promise.resolve(i);
              for (
                var s = [],
                  u = void 0,
                  a = 0,
                  c = (i = n.mergeSort(i, function(e, t) {
                    if (e.range && t.range) return l.Range.compareRangesUsingStarts(e.range, t.range);
                    return (e.range ? 0 : 1) - (t.range ? 0 : 1);
                  }));
                a < c.length;
                a++
              ) {
                var d = c[a],
                  f = d.range,
                  h = d.text,
                  p = d.eol;
                if (('number' == typeof p && (u = p), !l.Range.isEmpty(f) || h)) {
                  var m = o.getValueInRange(f);
                  if (((h = h.replace(/\r\n|\n|\r/g, o.eol)), m !== h))
                    if (Math.max(h.length, m.length) > t._diffLimit) s.push({ range: f, text: h });
                    else
                      for (
                        var g = r.stringDiff(m, h, !1),
                          _ = o.offsetAt(l.Range.lift(f).getStartPosition()),
                          v = 0,
                          y = g;
                        v < y.length;
                        v++
                      ) {
                        var C = y[v],
                          b = o.positionAt(_ + C.originalStart),
                          E = o.positionAt(_ + C.originalStart + C.originalLength),
                          L = {
                            text: h.substr(C.modifiedStart, C.modifiedLength),
                            range: {
                              startLineNumber: b.lineNumber,
                              startColumn: b.column,
                              endLineNumber: E.lineNumber,
                              endColumn: E.column,
                            },
                          };
                        o.getValueInRange(L.range) !== L.text && s.push(L);
                      }
                }
              }
              return (
                'number' == typeof u &&
                  s.push({
                    eol: u,
                    text: '',
                    range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 },
                  }),
                Promise.resolve(s)
              );
            }),
            (t.prototype.computeLinks = function(e) {
              var t = this._getModel(e);
              return t ? Promise.resolve(h.computeLinks(t)) : Promise.resolve(null);
            }),
            (t.prototype.textualSuggest = function(e, n, r, i) {
              var o = this._getModel(e);
              if (!o) return Promise.resolve(null);
              var s = Object.create(null),
                u = [],
                a = new RegExp(r, i),
                l = o.getWordUntilPosition(n, a),
                c = o.getWordAtPosition(n, a);
              c && (s[o.getValueInRange(c)] = !0);
              for (
                var d = o.createWordIterator(a), f = d.next();
                !f.done && u.length <= t._suggestionsLimit;
                f = d.next()
              ) {
                var h = f.value;
                s[h] ||
                  ((s[h] = !0),
                  isNaN(Number(h)) &&
                    u.push({
                      kind: 18,
                      label: h,
                      insertText: h,
                      range: {
                        startLineNumber: n.lineNumber,
                        startColumn: l.startColumn,
                        endLineNumber: n.lineNumber,
                        endColumn: l.endColumn,
                      },
                    }));
              }
              return Promise.resolve({ suggestions: u });
            }),
            (t.prototype.computeWordRanges = function(e, t, n, r) {
              var i = this._getModel(e);
              if (!i) return Promise.resolve(Object.create(null));
              for (var o = new RegExp(n, r), s = Object.create(null), u = t.startLineNumber; u < t.endLineNumber; u++)
                for (var a = 0, l = i.getLineWords(u, o); a < l.length; a++) {
                  var c = l[a];
                  if (isNaN(Number(c.word))) {
                    var d = s[c.word];
                    d || ((d = []), (s[c.word] = d)),
                      d.push({
                        startLineNumber: u,
                        startColumn: c.startColumn,
                        endLineNumber: u,
                        endColumn: c.endColumn,
                      });
                  }
                }
              return Promise.resolve(s);
            }),
            (t.prototype.navigateValueSet = function(e, t, n, r, i) {
              var o = this._getModel(e);
              if (!o) return Promise.resolve(null);
              var s = new RegExp(r, i);
              t.startColumn === t.endColumn &&
                (t = {
                  startLineNumber: t.startLineNumber,
                  startColumn: t.startColumn,
                  endLineNumber: t.endLineNumber,
                  endColumn: t.endColumn + 1,
                });
              var u = o.getValueInRange(t),
                a = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, s);
              if (!a) return Promise.resolve(null);
              var l = o.getValueInRange(a),
                c = p.BasicInplaceReplace.INSTANCE.navigateValueSet(t, u, a, l, n);
              return Promise.resolve(c);
            }),
            (t.prototype.loadForeignModule = function(t, n) {
              var r = this,
                i = {
                  getMirrorModels: function() {
                    return r._getModels();
                  },
                };
              if (this._foreignModuleFactory) {
                this._foreignModule = this._foreignModuleFactory(i, n);
                for (var o = [], s = 0, u = g.getAllPropertyNames(this._foreignModule); s < u.length; s++) {
                  var a = u[s];
                  'function' == typeof this._foreignModule[a] && o.push(a);
                }
                return Promise.resolve(o);
              }
              return new Promise(function(o, s) {
                e(
                  [t],
                  function(e) {
                    r._foreignModule = e.create(i, n);
                    for (var t = [], s = 0, u = g.getAllPropertyNames(r._foreignModule); s < u.length; s++) {
                      var a = u[s];
                      'function' == typeof r._foreignModule[a] && t.push(a);
                    }
                    o(t);
                  },
                  s,
                );
              });
            }),
            (t.prototype.fmr = function(e, t) {
              if (!this._foreignModule || 'function' != typeof this._foreignModule[e])
                return Promise.reject(new Error('Missing requestHandler or method: ' + e));
              try {
                return Promise.resolve(this._foreignModule[e].apply(this._foreignModule, t));
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (t._diffLimit = 1e5),
            (t._suggestionsLimit = 1e4),
            t
          );
        })();
      t.BaseEditorSimpleWorker = v;
      var y = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n._models = Object.create(null)), n;
        }
        return (
          s(t, e),
          (t.prototype.dispose = function() {
            this._models = Object.create(null);
          }),
          (t.prototype._getModel = function(e) {
            return this._models[e];
          }),
          (t.prototype._getModels = function() {
            var e = this,
              t = [];
            return (
              Object.keys(this._models).forEach(function(n) {
                return t.push(e._models[n]);
              }),
              t
            );
          }),
          (t.prototype.acceptNewModel = function(e) {
            this._models[e.url] = new _(u.URI.parse(e.url), e.lines, e.EOL, e.versionId);
          }),
          (t.prototype.acceptModelChanged = function(e, t) {
            if (this._models[e]) {
              this._models[e].onEvents(t);
            }
          }),
          (t.prototype.acceptRemovedModel = function(e) {
            this._models[e] && delete this._models[e];
          }),
          t
        );
      })(v);
      (t.EditorSimpleWorkerImpl = y),
        (t.create = function() {
          return new y(null);
        }),
        'function' == typeof importScripts && (o.globals.monaco = m.createMonacoBaseAPI());
    }),
    (function() {
      var e = self.MonacoEnvironment,
        t = e && e.baseUrl ? e.baseUrl : '../../../';
      ('function' == typeof self.define && self.define.amd) || importScripts(t + 'vs/loader.js'),
        require.config({ baseUrl: t, catchError: !0 });
      var n = !0,
        r = [];
      self.onmessage = function(e) {
        n
          ? ((n = !1),
            (function(e) {
              require([e], function(e) {
                setTimeout(function() {
                  var t = e.create(function(e) {
                    self.postMessage(e);
                  }, null);
                  for (
                    self.onmessage = function(e) {
                      return t.onmessage(e.data);
                    };
                    r.length > 0;

                  )
                    self.onmessage(r.shift());
                }, 0);
              });
            })(e.data))
          : r.push(e);
      };
    })();
}.call(this));
//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
