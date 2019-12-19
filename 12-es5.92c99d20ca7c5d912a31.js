function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function _iterableToArray(e) {
  if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    lDlI: function(e, t, n) {
      'use strict';
      var i,
        r = n('uBmD'),
        o = n('ofXK'),
        a = n('fXoL'),
        s =
          (((i = (function() {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: 'forRoot',
                  value: function() {
                    return { ngModule: e, providers: [] };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = a.Qb({ type: i, bootstrap: [r.a] })),
          (i.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || i)();
            },
            imports: [[o.c]],
          })),
          i);
      n('x9ci'),
        n.d(t, 'a', function() {
          return s;
        });
    },
    uBmD: function uBmD(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return TdCodeEditorComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('mrSG'),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('fXoL'),
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('3Pt+'),
        rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('XNiG'),
        rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('VRyK'),
        rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('xgIS'),
        rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('PqYM'),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('1G5W'),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('Kj3r'),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('/uUt'),
        _code_editor_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('x9ci'),
        _c0 = ['editorContainer'],
        noop = function() {},
        uniqueCounter = 0,
        TdCodeEditorComponent = (function() {
          var TdCodeEditorComponent = (function() {
            function TdCodeEditorComponent(e, t, n) {
              _classCallCheck(this, TdCodeEditorComponent),
                (this.zone = e),
                (this._changeDetectorRef = t),
                (this._elementRef = n),
                (this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()),
                (this._widthSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()),
                (this._heightSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()),
                (this._editorStyle = 'width:100%;height:100%;border:1px solid grey;'),
                (this._appPath = ''),
                (this._isElectronApp = !1),
                (this._value = ''),
                (this._theme = 'vs'),
                (this._language = 'javascript'),
                (this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()),
                (this._editorInnerContainer = 'editorInnerContainer' + uniqueCounter++),
                (this._editorNodeModuleDirOverride = ''),
                (this._componentInitialized = !1),
                (this._fromEditor = !1),
                (this._editorOptions = {}),
                (this._isFullScreen = !1),
                (this.initialContentChange = !0),
                (this._registeredLanguagesStyles = []),
                (this.editorInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.m()),
                (this.editorConfigurationChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.m()),
                (this.editorLanguageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.m()),
                (this.editorValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.m()),
                (this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.m()),
                (this.propagateChange = function(e) {}),
                (this.onTouched = function() {
                  return noop;
                }),
                'object' == typeof document &&
                  document &&
                  ((this._isElectronApp = !!window.process),
                  this._isElectronApp &&
                    (this._appPath = electron.remote.app
                      .getAppPath()
                      .split('\\')
                      .join('/')));
            }
            return (
              _createClass(TdCodeEditorComponent, [
                {
                  key: 'writeValue',
                  value: function(e) {
                    null != e && (this.value = e);
                  },
                },
                {
                  key: 'registerOnChange',
                  value: function(e) {
                    this.propagateChange = e;
                  },
                },
                {
                  key: 'registerOnTouched',
                  value: function(e) {
                    this.onTouched = e;
                  },
                },
                {
                  key: 'getValue',
                  value: function() {
                    var e = this;
                    if (this._componentInitialized) {
                      if (this._webview) return this._webview.send('getEditorContent'), this._subject.asObservable();
                      if (this._editor)
                        return (
                          (this._value = this._editor.getValue()),
                          setTimeout(function() {
                            e._subject.next(e._value),
                              e._subject.complete(),
                              (e._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()),
                              e.editorValueChange.emit();
                          }),
                          this._subject.asObservable()
                        );
                    }
                  },
                },
                {
                  key: 'registerLanguage',
                  value: function registerLanguage(language) {
                    if (this._componentInitialized)
                      if (this._webview) this._webview.send('registerLanguage', language);
                      else if (this._editor) {
                        this._editor.dispose();
                        var _iteratorNormalCompletion = !0,
                          _didIteratorError = !1,
                          _iteratorError = void 0;
                        try {
                          for (
                            var _iterator = language.completionItemProvider[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                            _iteratorNormalCompletion = !0
                          ) {
                            var provider = _step.value;
                            provider.kind = eval(provider.kind);
                          }
                        } catch (err) {
                          (_didIteratorError = !0), (_iteratorError = err);
                        } finally {
                          try {
                            _iteratorNormalCompletion || null == _iterator.return || _iterator.return();
                          } finally {
                            if (_didIteratorError) throw _iteratorError;
                          }
                        }
                        var _iteratorNormalCompletion2 = !0,
                          _didIteratorError2 = !1,
                          _iteratorError2 = void 0;
                        try {
                          for (
                            var _iterator2 = language.monarchTokensProvider[Symbol.iterator](), _step2;
                            !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                            _iteratorNormalCompletion2 = !0
                          ) {
                            var monarchTokens = _step2.value;
                            monarchTokens[0] = eval(monarchTokens[0]);
                          }
                        } catch (err) {
                          (_didIteratorError2 = !0), (_iteratorError2 = err);
                        } finally {
                          try {
                            _iteratorNormalCompletion2 || null == _iterator2.return || _iterator2.return();
                          } finally {
                            if (_didIteratorError2) throw _iteratorError2;
                          }
                        }
                        monaco.languages.register({ id: language.id }),
                          monaco.languages.setMonarchTokensProvider(language.id, {
                            tokenizer: { root: language.monarchTokensProvider },
                          }),
                          monaco.editor.defineTheme(language.customTheme.id, language.customTheme.theme),
                          (this._theme = language.customTheme.id),
                          monaco.languages.registerCompletionItemProvider(language.id, {
                            provideCompletionItems: function() {
                              return language.completionItemProvider;
                            },
                          });
                        var css = document.createElement('style');
                        (css.type = 'text/css'),
                          (css.innerHTML = language.monarchTokensProviderCSS),
                          document.body.appendChild(css),
                          this.editorConfigurationChanged.emit(),
                          (this._registeredLanguagesStyles = [].concat(
                            _toConsumableArray(this._registeredLanguagesStyles),
                            [css],
                          ));
                      }
                  },
                },
                {
                  key: 'layout',
                  value: function() {
                    this._componentInitialized &&
                      (this._webview ? this._webview.send('layout') : this._editor && this._editor.layout());
                  },
                },
                {
                  key: 'setEditorNodeModuleDirOverride',
                  value: function(e) {
                    (this._editorNodeModuleDirOverride = e), (this._appPath = e);
                  },
                },
                {
                  key: 'ngOnInit',
                  value: function() {
                    var e = this,
                      t = '';
                    this._isElectronApp &&
                      ((t = '<!DOCTYPE html>\n            <html style="height:100%">\n            <head>\n                <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n                <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >\n                <link rel="stylesheet" data-name="vs/editor/editor.main"\n                    href="file://'
                        .concat(
                          this._editorNodeModuleDirOverride,
                          '/assets/monaco/vs/editor/editor.main.css">\n            </head>\n            <body style="height:100%;width: 100%;margin: 0;padding: 0;overflow: hidden;">\n            <div id="',
                        )
                        .concat(this._editorInnerContainer, '" style="width:100%;height:100%;')
                        .concat(
                          this._editorStyle,
                          '"></div>\n            <script>\n                // Get the ipcRenderer of electron for communication\n                const {ipcRenderer} = require(\'electron\');\n            </script>\n            <script src="file://',
                        )
                        .concat(
                          this._editorNodeModuleDirOverride,
                          '/assets/monaco/vs/loader.js"></script>\n            <script>\n                var editor;\n                var theme = \'',
                        )
                        .concat(this._theme, "';\n                var value = '")
                        .concat(
                          this._value,
                          "';\n                var registeredLanguagesStyles = [];\n\n                require.config({\n                    baseUrl: '",
                        )
                        .concat(
                          this._appPath,
                          "/assets/monaco'\n                });\n                self.module = undefined;\n                self.process.browser = true;\n\n                require(['vs/editor/editor.main'], function() {\n                    editor = monaco.editor.create(document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "'), Object.assign({\n                        value: value,\n                        language: '",
                        )
                        .concat(this.language, "',\n                        theme: '")
                        .concat(this._theme, "',\n                    }, ")
                        .concat(
                          JSON.stringify(this.editorOptions),
                          "));\n                    editor.getModel().onDidChangeContent( (e)=> {\n                        ipcRenderer.sendToHost(\"onEditorContentChange\", editor.getValue());\n                    });\n                    editor.addAction({\n                      // An unique identifier of the contributed action.\n                      id: 'fullScreen',\n                      // A label of the action that will be presented to the user.\n                      label: 'Full Screen',\n                      // An optional array of keybindings for the action.\n                      contextMenuGroupId: 'navigation',\n                      keybindings: [",
                        )
                        .concat(
                          this._keycode,
                          "],\n                      contextMenuOrder: 1.5,\n                      // Method that will be executed when the action is triggered.\n                      // @param editor The editor instance is passed in as a convinience\n                      run: function(ed) {\n                        var editorDiv = document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "');\n                        editorDiv.webkitRequestFullscreen();\n                      }\n                    });\n                    editor.addAction({\n                      // An unique identifier of the contributed action.\n                      id: 'exitfullScreen',\n                      // A label of the action that will be presented to the user.\n                      label: 'Exit Full Screen',\n                      // An optional array of keybindings for the action.\n                      contextMenuGroupId: 'navigation',\n                      keybindings: [9],\n                      contextMenuOrder: 1.5,\n                      // Method that will be executed when the action is triggered.\n                      // @param editor The editor instance is passed in as a convinience\n                      run: function(ed) {\n                        var editorDiv = document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "');\n                        document.webkitExitFullscreen();\n                      }\n                    });\n                    ipcRenderer.sendToHost(\"editorInitialized\", this._editor);\n                });\n\n                // return back the value in the editor to the mainview\n                ipcRenderer.on('getEditorContent', function(){\n                    ipcRenderer.sendToHost(\"editorContent\", editor.getValue());\n                });\n\n                // set the value of the editor from what was sent from the mainview\n                ipcRenderer.on('setEditorContent', function(event, data){\n                    value = data;\n                    editor.setValue(data);\n                });\n\n                // set the style of the editor container div\n                ipcRenderer.on('setEditorStyle', function(event, data){\n                    var editorDiv = document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "');\n                    editorDiv.style = data.style;\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n                    editor = monaco.editor.create(document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "'), Object.assign({\n                        value: currentValue,\n                        language: data.language,\n                        theme: data.theme,\n                    }, ",
                        )
                        .concat(
                          JSON.stringify(this.editorOptions),
                          "));\n                });\n\n                // set the options of the editor from what was sent from the mainview\n                ipcRenderer.on('setEditorOptions', function(event, data){\n                    editor.updateOptions(data);\n                    ipcRenderer.sendToHost(\"editorConfigurationChanged\", '');\n                });\n\n                // set the language of the editor from what was sent from the mainview\n                ipcRenderer.on('setLanguage', function(event, data){\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n                    editor = monaco.editor.create(document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "'), Object.assign({\n                        value: currentValue,\n                        language: data,\n                        theme: theme,\n                    }, ",
                        )
                        .concat(
                          JSON.stringify(this.editorOptions),
                          "));\n                    ipcRenderer.sendToHost(\"editorConfigurationChanged\", '');\n                    ipcRenderer.sendToHost(\"editorLanguageChanged\", '');\n                });\n\n                // register a new language with editor\n                ipcRenderer.on('registerLanguage', function(event, data){\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n\n                    for (var i = 0; i < data.completionItemProvider.length; i++) {\n                        var provider = data.completionItemProvider[i];\n                        provider.kind = eval(provider.kind);\n                    }\n                    for (var i = 0; i < data.monarchTokensProvider.length; i++) {\n                        var monarchTokens = data.monarchTokensProvider[i];\n                        monarchTokens[0] = eval(monarchTokens[0]);\n                    }\n                    monaco.languages.register({ id: data.id });\n\n                    monaco.languages.setMonarchTokensProvider(data.id, {\n                        tokenizer: {\n                            root: data.monarchTokensProvider\n                        }\n                    });\n\n                    // Define a new theme that constains only rules that match this language\n                    monaco.editor.defineTheme(data.customTheme.id, data.customTheme.theme);\n                    theme = data.customTheme.id;\n\n                    monaco.languages.registerCompletionItemProvider(data.id, {\n                        provideCompletionItems: () => {\n                            return data.completionItemProvider\n                        }\n                    });\n\n                    var css = document.createElement(\"style\");\n                    css.type = \"text/css\";\n                    css.innerHTML = data.monarchTokensProviderCSS;\n                    document.body.appendChild(css);\n                    registeredLanguagesStyles = [...registeredLanguagesStyles, css];\n\n\n                    ipcRenderer.sendToHost(\"editorConfigurationChanged\", '');\n                });\n\n                // Instruct the editor to remeasure its container\n                ipcRenderer.on('layout', function(){\n                    editor.layout();\n                });\n\n                // Instruct the editor go to full screen mode\n                ipcRenderer.on('showFullScreenEditor', function() {\n                  var editorDiv = document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "');\n                  editorDiv.webkitRequestFullscreen();\n                });\n\n                // Instruct the editor exit full screen mode\n                ipcRenderer.on('exitFullScreenEditor', function() {\n                  var editorDiv = document.getElementById('",
                        )
                        .concat(
                          this._editorInnerContainer,
                          "');\n                  editorDiv.webkitExitFullscreen();\n                });\n\n                ipcRenderer.on('dispose', function(){\n                  editor.dispose();\n                  registeredLanguagesStyles.forEach((style) => style.remove());\n                });\n\n                // need to manually resize the editor any time the window size\n                // changes. See: https://github.com/Microsoft/monaco-editor/issues/28\n                window.addEventListener(\"resize\", function resizeEditor() {\n                    editor.layout();\n                });\n            </script>\n            </body>\n            </html>",
                        )),
                      (this._webview = document.createElement('webview')),
                      this._webview.setAttribute('nodeintegration', 'true'),
                      this._webview.setAttribute('disablewebsecurity', 'true'),
                      this._webview.setAttribute('src', 'data:text/html;base64,' + window.btoa(t)),
                      this._webview.setAttribute('style', 'display:inline-flex; width:100%; height:100%'),
                      this._webview.addEventListener('ipc-message', function(t) {
                        'editorContent' === t.channel
                          ? ((e._fromEditor = !0),
                            e.writeValue(t.args[0]),
                            e._subject.next(e._value),
                            e._subject.complete(),
                            (e._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()))
                          : 'onEditorContentChange' === t.channel
                          ? ((e._fromEditor = !0),
                            e.writeValue(t.args[0]),
                            e.initialContentChange && ((e.initialContentChange = !1), e.layout()))
                          : 'editorInitialized' === t.channel
                          ? ((e._componentInitialized = !0),
                            (e._editorProxy = e.wrapEditorCalls(e._editor)),
                            e.editorInitialized.emit(e._editorProxy))
                          : 'editorConfigurationChanged' === t.channel
                          ? e.editorConfigurationChanged.emit()
                          : 'editorLanguageChanged' === t.channel && e.editorLanguageChanged.emit();
                      }),
                      this._editorContainer.nativeElement.appendChild(this._webview));
                  },
                },
                {
                  key: 'ngAfterViewInit',
                  value: function() {
                    var e = this;
                    this._isElectronApp ||
                      (Object(_code_editor_utils__WEBPACK_IMPORTED_MODULE_10__.a)(),
                      Object(_code_editor_utils__WEBPACK_IMPORTED_MODULE_10__.b)()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.a)(this._destroy))
                        .subscribe(function() {
                          e.initMonaco();
                        })),
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_4__.a)(
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__.a)(window, 'resize').pipe(
                          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.a)(100),
                        ),
                        this._widthSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.a)()),
                        this._heightSubject
                          .asObservable()
                          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.a)()),
                      )
                        .pipe(
                          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.a)(this._destroy),
                          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.a)(100),
                        )
                        .subscribe(function() {
                          e.layout(), e._changeDetectorRef.markForCheck();
                        }),
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_6__.a)(500, 250)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.a)(this._destroy))
                        .subscribe(function() {
                          e._elementRef &&
                            e._elementRef.nativeElement &&
                            (e._widthSubject.next(e._elementRef.nativeElement.getBoundingClientRect().width),
                            e._heightSubject.next(e._elementRef.nativeElement.getBoundingClientRect().height));
                        });
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._changeDetectorRef.detach(),
                      this._registeredLanguagesStyles.forEach(function(e) {
                        return e.remove();
                      }),
                      this._webview ? this._webview.send('dispose') : this._editor && this._editor.dispose(),
                      this._destroy.next(!0),
                      this._destroy.unsubscribe();
                  },
                },
                {
                  key: 'showFullScreenEditor',
                  value: function() {
                    if (this._componentInitialized)
                      if (this._webview) this._webview.send('showFullScreenEditor');
                      else
                        for (
                          var e = this._editorContainer.nativeElement,
                            t = {
                              requestFullscreen: function() {
                                return e.requestFullscreen();
                              },
                              webkitRequestFullscreen: function() {
                                return e.webkitRequestFullscreen();
                              },
                              msRequestFullscreen: function() {
                                return e.msRequestFullscreen();
                              },
                              mozRequestFullScreen: function() {
                                return e.mozRequestFullScreen();
                              },
                            },
                            n = 0,
                            i = Object.keys(t);
                          n < i.length;
                          n++
                        ) {
                          var r = i[n];
                          e[r] && t[r]();
                        }
                    this._isFullScreen = !0;
                  },
                },
                {
                  key: 'exitFullScreenEditor',
                  value: function() {
                    if (this._componentInitialized)
                      if (this._webview) this._webview.send('exitFullScreenEditor');
                      else
                        for (
                          var e = {
                              exitFullscreen: function() {
                                return document.exitFullscreen();
                              },
                              webkitExitFullscreen: function() {
                                return document.webkitExitFullscreen();
                              },
                              mozCancelFullScreen: function() {
                                return document.mozCancelFullScreen();
                              },
                              msExitFullscreen: function() {
                                return document.msExitFullscreen();
                              },
                            },
                            t = 0,
                            n = Object.keys(e);
                          t < n.length;
                          t++
                        ) {
                          var i = n[t];
                          document[i] && e[i]();
                        }
                    this._isFullScreen = !1;
                  },
                },
                {
                  key: 'addFullScreenModeCommand',
                  value: function() {
                    var e = this;
                    this._editor.addAction({
                      id: 'fullScreen',
                      label: 'Full Screen',
                      contextMenuGroupId: 'navigation',
                      keybindings: this._keycode,
                      contextMenuOrder: 1.5,
                      run: function(t) {
                        e.showFullScreenEditor();
                      },
                    });
                  },
                },
                {
                  key: 'wrapEditorCalls',
                  value: function(e) {
                    var t = this;
                    return new Proxy(e, {
                      get: function(e, n, i) {
                        var r = this;
                        return function() {
                          for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(
                            r,
                            void 0,
                            void 0,
                            regeneratorRuntime.mark(function i() {
                              var r, a;
                              return regeneratorRuntime.wrap(function(i) {
                                for (;;)
                                  switch ((i.prev = i.next)) {
                                    case 0:
                                      if (!t._componentInitialized) {
                                        i.next = 8;
                                        break;
                                      }
                                      if (!t._webview) {
                                        i.next = 3;
                                        break;
                                      }
                                      return i.abrupt(
                                        'return',
                                        (function(e) {
                                          return new Promise(function(n) {
                                            t._webview.executeJavaScript(e, n);
                                          });
                                        })('editor.' + n + '(' + o + ')'),
                                      );
                                    case 3:
                                      return (r = e[n]), (i.next = 6), r.apply(t._editor, o);
                                    case 6:
                                      return (
                                        (a = i.sent),
                                        i.abrupt(
                                          'return',
                                          (setTimeout(function() {
                                            t.zone.run(function() {
                                              t._changeDetectorRef.destroyed || t._changeDetectorRef.detectChanges();
                                            });
                                          }),
                                          a),
                                        )
                                      );
                                    case 8:
                                    case 'end':
                                      return i.stop();
                                  }
                              }, i);
                            }),
                          );
                        };
                      },
                    });
                  },
                },
                {
                  key: 'initMonaco',
                  value: function() {
                    var e = this,
                      t = this._editorContainer.nativeElement;
                    (t.id = this._editorInnerContainer),
                      (this._editor = monaco.editor.create(
                        t,
                        Object.assign(
                          { value: this._value, language: this.language, theme: this._theme },
                          this.editorOptions,
                        ),
                      )),
                      setTimeout(function() {
                        (e._editorProxy = e.wrapEditorCalls(e._editor)),
                          (e._componentInitialized = !0),
                          e.editorInitialized.emit(e._editorProxy);
                      }),
                      this._editor.getModel().onDidChangeContent(function(t) {
                        (e._fromEditor = !0),
                          e.writeValue(e._editor.getValue()),
                          e.initialContentChange && ((e.initialContentChange = !1), e.layout());
                      }),
                      this.addFullScreenModeCommand();
                  },
                },
                {
                  key: 'automaticLayout',
                  set: function(e) {
                    console.warn(
                      '[automaticLayout] has been deprecated in favor of our own resize implementation and will be removed on 3.0.0',
                    );
                  },
                },
                {
                  key: 'value',
                  set: function(e) {
                    var t = this;
                    this._setValueTimeout && clearTimeout(this._setValueTimeout),
                      (this._value = e),
                      this._componentInitialized
                        ? this._webview
                          ? void 0 !== this._webview.send
                            ? (this._fromEditor || this._webview.send('setEditorContent', e),
                              this.editorValueChange.emit(),
                              this.propagateChange(this._value),
                              this.change.emit(),
                              (this._fromEditor = !1))
                            : (this._setValueTimeout = setTimeout(function() {
                                t.value = e;
                              }, 500))
                          : this._editor && this._editor.setValue
                          ? (this._fromEditor || this._editor.setValue(e),
                            this.editorValueChange.emit(),
                            this.propagateChange(this._value),
                            this.change.emit(),
                            (this._fromEditor = !1),
                            this.zone.run(function() {
                              return (t._value = e);
                            }))
                          : (this._setValueTimeout = setTimeout(function() {
                              t.value = e;
                            }, 500))
                        : (this._setValueTimeout = setTimeout(function() {
                            t.value = e;
                          }, 500));
                  },
                  get: function() {
                    return this._value;
                  },
                },
                {
                  key: 'language',
                  set: function(e) {
                    var t = this;
                    if (((this._language = e), this._componentInitialized))
                      if (this._webview) this._webview.send('setLanguage', e);
                      else if (this._editor) {
                        var n = this._editor.getValue();
                        this._editor.dispose(),
                          (this._editor = monaco.editor.create(
                            this._editorContainer.nativeElement,
                            Object.assign({ value: n, language: e, theme: this._theme }, this.editorOptions),
                          )),
                          this._editor.getModel().onDidChangeContent(function(e) {
                            (t._fromEditor = !0), t.writeValue(t._editor.getValue());
                          }),
                          this.editorConfigurationChanged.emit(),
                          this.editorLanguageChanged.emit();
                      }
                  },
                  get: function() {
                    return this._language;
                  },
                },
                {
                  key: 'editorStyle',
                  set: function(e) {
                    var t = this;
                    if (((this._editorStyle = e), this._componentInitialized))
                      if (this._webview)
                        this._webview.send('setEditorStyle', {
                          language: this._language,
                          theme: this._theme,
                          style: e,
                        });
                      else if (this._editor) {
                        this._editorContainer.nativeElement.setAttribute('style', e);
                        var n = this._editor.getValue();
                        this._editor.dispose(),
                          (this._editor = monaco.editor.create(
                            this._editorContainer.nativeElement,
                            Object.assign(
                              { value: n, language: this._language, theme: this._theme },
                              this.editorOptions,
                            ),
                          )),
                          this._editor.getModel().onDidChangeContent(function(e) {
                            (t._fromEditor = !0), t.writeValue(t._editor.getValue());
                          });
                      }
                  },
                  get: function() {
                    return this._editorStyle;
                  },
                },
                {
                  key: 'theme',
                  set: function(e) {
                    (this._theme = e),
                      this._componentInitialized &&
                        (this._webview
                          ? this._webview.send('setEditorOptions', { theme: e })
                          : this._editor &&
                            (this._editor.updateOptions({ theme: e }), this.editorConfigurationChanged.emit()));
                  },
                  get: function() {
                    return this._theme;
                  },
                },
                {
                  key: 'fullScreenKeyBinding',
                  set: function(e) {
                    this._keycode = e;
                  },
                  get: function() {
                    return this._keycode;
                  },
                },
                {
                  key: 'editorOptions',
                  set: function(e) {
                    (this._editorOptions = e),
                      this._componentInitialized &&
                        (this._webview
                          ? this._webview.send('setEditorOptions', e)
                          : this._editor && (this._editor.updateOptions(e), this.editorConfigurationChanged.emit()));
                  },
                  get: function() {
                    return this._editorOptions;
                  },
                },
                {
                  key: 'isElectronApp',
                  get: function() {
                    return this._isElectronApp;
                  },
                },
                {
                  key: 'isFullScreen',
                  get: function() {
                    return this._isFullScreen;
                  },
                },
              ]),
              TdCodeEditorComponent
            );
          })();
          return (
            (TdCodeEditorComponent.ɵfac = function(e) {
              return new (e || TdCodeEditorComponent)(
                _angular_core__WEBPACK_IMPORTED_MODULE_1__.Sb(_angular_core__WEBPACK_IMPORTED_MODULE_1__.z),
                _angular_core__WEBPACK_IMPORTED_MODULE_1__.Sb(_angular_core__WEBPACK_IMPORTED_MODULE_1__.h),
                _angular_core__WEBPACK_IMPORTED_MODULE_1__.Sb(_angular_core__WEBPACK_IMPORTED_MODULE_1__.k),
              );
            }),
            (TdCodeEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Mb({
              type: TdCodeEditorComponent,
              selectors: [['td-code-editor']],
              viewQuery: function(e, t) {
                var n;
                1 & e && _angular_core__WEBPACK_IMPORTED_MODULE_1__.Nc(_c0, !0),
                  2 & e &&
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.Ec(
                      (n = _angular_core__WEBPACK_IMPORTED_MODULE_1__.hc()),
                    ) &&
                    (t._editorContainer = n.first);
              },
              inputs: {
                automaticLayout: 'automaticLayout',
                value: 'value',
                language: 'language',
                editorStyle: 'editorStyle',
                theme: 'theme',
                fullScreenKeyBinding: 'fullScreenKeyBinding',
                editorOptions: 'editorOptions',
              },
              outputs: {
                editorInitialized: 'editorInitialized',
                editorConfigurationChanged: 'editorConfigurationChanged',
                editorLanguageChanged: 'editorLanguageChanged',
                editorValueChange: 'editorValueChange',
                change: 'change',
              },
              features: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__.Cb([
                  {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.j,
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.V)(function() {
                      return TdCodeEditorComponent;
                    }),
                    multi: !0,
                  },
                ]),
              ],
              decls: 2,
              vars: 0,
              consts: [
                [1, 'editorContainer'],
                ['editorContainer', ''],
              ],
              template: function(e, t) {
                1 & e && _angular_core__WEBPACK_IMPORTED_MODULE_1__.Tb(0, 'div', 0, 1);
              },
              styles: [
                '[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .editorContainer[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}  .monaco-aria-container{display:none}',
              ],
            })),
            TdCodeEditorComponent
          );
        })();
    },
    x9ci: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return r;
      }),
        n.d(t, 'a', function() {
          return o;
        });
      var i = n('XNiG');
      function r() {
        var e = new i.a(),
          t = setInterval(function() {
            'object' == typeof window.monaco && (clearInterval(t), e.next(), e.complete());
          }, 100);
        return e.asObservable();
      }
      function o() {
        if (!document.getElementById('monaco-loader-script')) {
          var e = function() {
            window.require.config({ paths: { vs: 'assets/monaco/vs' } }),
              window.require(['vs/editor/editor.main'], function() {});
          };
          if (window.require) e();
          else {
            var t = document.createElement('script');
            (t.id = 'monaco-loader-script'),
              (t.type = 'text/javascript'),
              (t.src = 'assets/monaco/vs/loader.js'),
              t.addEventListener('load', e),
              document.body.appendChild(t);
          }
        }
      }
    },
  },
]);
