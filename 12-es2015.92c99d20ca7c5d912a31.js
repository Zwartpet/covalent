(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    lDlI: function(e, t, i) {
      'use strict';
      var n = i('uBmD'),
        o = i('ofXK'),
        r = i('fXoL');
      let s = (() => {
        class e {
          static forRoot() {
            return { ngModule: e, providers: [] };
          }
        }
        return (
          (e.ɵmod = r.Qb({ type: e, bootstrap: [n.a] })),
          (e.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[o.c]],
          })),
          e
        );
      })();
      i('x9ci'),
        i.d(t, 'a', function() {
          return s;
        });
    },
    uBmD: function(module, __webpack_exports__, __webpack_require__) {
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
        _code_editor_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('x9ci');
      const _c0 = ['editorContainer'],
        noop = () => {};
      let uniqueCounter = 0,
        TdCodeEditorComponent = (() => {
          class TdCodeEditorComponent {
            constructor(e, t, i) {
              (this.zone = e),
                (this._changeDetectorRef = t),
                (this._elementRef = i),
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
                (this.propagateChange = (e) => {}),
                (this.onTouched = () => noop),
                'object' == typeof document &&
                  document &&
                  ((this._isElectronApp = !!window.process),
                  this._isElectronApp &&
                    (this._appPath = electron.remote.app
                      .getAppPath()
                      .split('\\')
                      .join('/')));
            }
            set automaticLayout(e) {
              console.warn(
                '[automaticLayout] has been deprecated in favor of our own resize implementation and will be removed on 3.0.0',
              );
            }
            set value(e) {
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
                      : (this._setValueTimeout = setTimeout(() => {
                          this.value = e;
                        }, 500))
                    : this._editor && this._editor.setValue
                    ? (this._fromEditor || this._editor.setValue(e),
                      this.editorValueChange.emit(),
                      this.propagateChange(this._value),
                      this.change.emit(),
                      (this._fromEditor = !1),
                      this.zone.run(() => (this._value = e)))
                    : (this._setValueTimeout = setTimeout(() => {
                        this.value = e;
                      }, 500))
                  : (this._setValueTimeout = setTimeout(() => {
                      this.value = e;
                    }, 500));
            }
            get value() {
              return this._value;
            }
            writeValue(e) {
              null != e && (this.value = e);
            }
            registerOnChange(e) {
              this.propagateChange = e;
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            getValue() {
              if (this._componentInitialized) {
                if (this._webview) return this._webview.send('getEditorContent'), this._subject.asObservable();
                if (this._editor)
                  return (
                    (this._value = this._editor.getValue()),
                    setTimeout(() => {
                      this._subject.next(this._value),
                        this._subject.complete(),
                        (this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()),
                        this.editorValueChange.emit();
                    }),
                    this._subject.asObservable()
                  );
              }
            }
            set language(e) {
              if (((this._language = e), this._componentInitialized))
                if (this._webview) this._webview.send('setLanguage', e);
                else if (this._editor) {
                  const t = this._editor.getValue();
                  this._editor.dispose(),
                    (this._editor = monaco.editor.create(
                      this._editorContainer.nativeElement,
                      Object.assign({ value: t, language: e, theme: this._theme }, this.editorOptions),
                    )),
                    this._editor.getModel().onDidChangeContent((e) => {
                      (this._fromEditor = !0), this.writeValue(this._editor.getValue());
                    }),
                    this.editorConfigurationChanged.emit(),
                    this.editorLanguageChanged.emit();
                }
            }
            get language() {
              return this._language;
            }
            registerLanguage(language) {
              if (this._componentInitialized)
                if (this._webview) this._webview.send('registerLanguage', language);
                else if (this._editor) {
                  this._editor.dispose();
                  for (const provider of language.completionItemProvider) provider.kind = eval(provider.kind);
                  for (const monarchTokens of language.monarchTokensProvider) monarchTokens[0] = eval(monarchTokens[0]);
                  monaco.languages.register({ id: language.id }),
                    monaco.languages.setMonarchTokensProvider(language.id, {
                      tokenizer: { root: language.monarchTokensProvider },
                    }),
                    monaco.editor.defineTheme(language.customTheme.id, language.customTheme.theme),
                    (this._theme = language.customTheme.id),
                    monaco.languages.registerCompletionItemProvider(language.id, {
                      provideCompletionItems: () => language.completionItemProvider,
                    });
                  const css = document.createElement('style');
                  (css.type = 'text/css'),
                    (css.innerHTML = language.monarchTokensProviderCSS),
                    document.body.appendChild(css),
                    this.editorConfigurationChanged.emit(),
                    (this._registeredLanguagesStyles = [...this._registeredLanguagesStyles, css]);
                }
            }
            set editorStyle(e) {
              if (((this._editorStyle = e), this._componentInitialized))
                if (this._webview)
                  this._webview.send('setEditorStyle', { language: this._language, theme: this._theme, style: e });
                else if (this._editor) {
                  this._editorContainer.nativeElement.setAttribute('style', e);
                  const t = this._editor.getValue();
                  this._editor.dispose(),
                    (this._editor = monaco.editor.create(
                      this._editorContainer.nativeElement,
                      Object.assign({ value: t, language: this._language, theme: this._theme }, this.editorOptions),
                    )),
                    this._editor.getModel().onDidChangeContent((e) => {
                      (this._fromEditor = !0), this.writeValue(this._editor.getValue());
                    });
                }
            }
            get editorStyle() {
              return this._editorStyle;
            }
            set theme(e) {
              (this._theme = e),
                this._componentInitialized &&
                  (this._webview
                    ? this._webview.send('setEditorOptions', { theme: e })
                    : this._editor &&
                      (this._editor.updateOptions({ theme: e }), this.editorConfigurationChanged.emit()));
            }
            get theme() {
              return this._theme;
            }
            set fullScreenKeyBinding(e) {
              this._keycode = e;
            }
            get fullScreenKeyBinding() {
              return this._keycode;
            }
            set editorOptions(e) {
              (this._editorOptions = e),
                this._componentInitialized &&
                  (this._webview
                    ? this._webview.send('setEditorOptions', e)
                    : this._editor && (this._editor.updateOptions(e), this.editorConfigurationChanged.emit()));
            }
            get editorOptions() {
              return this._editorOptions;
            }
            layout() {
              this._componentInitialized &&
                (this._webview ? this._webview.send('layout') : this._editor && this._editor.layout());
            }
            get isElectronApp() {
              return this._isElectronApp;
            }
            get isFullScreen() {
              return this._isFullScreen;
            }
            setEditorNodeModuleDirOverride(e) {
              (this._editorNodeModuleDirOverride = e), (this._appPath = e);
            }
            ngOnInit() {
              let e = '';
              this._isElectronApp &&
                ((e = `<!DOCTYPE html>\n            <html style="height:100%">\n            <head>\n                <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n                <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >\n                <link rel="stylesheet" data-name="vs/editor/editor.main"\n                    href="file://${
                  this._editorNodeModuleDirOverride
                }/assets/monaco/vs/editor/editor.main.css">\n            </head>\n            <body style="height:100%;width: 100%;margin: 0;padding: 0;overflow: hidden;">\n            <div id="${
                  this._editorInnerContainer
                }" style="width:100%;height:100%;${
                  this._editorStyle
                }"></div>\n            <script>\n                // Get the ipcRenderer of electron for communication\n                const {ipcRenderer} = require('electron');\n            <\/script>\n            <script src="file://${
                  this._editorNodeModuleDirOverride
                }/assets/monaco/vs/loader.js"><\/script>\n            <script>\n                var editor;\n                var theme = '${
                  this._theme
                }';\n                var value = '${
                  this._value
                }';\n                var registeredLanguagesStyles = [];\n\n                require.config({\n                    baseUrl: '${
                  this._appPath
                }/assets/monaco'\n                });\n                self.module = undefined;\n                self.process.browser = true;\n\n                require(['vs/editor/editor.main'], function() {\n                    editor = monaco.editor.create(document.getElementById('${
                  this._editorInnerContainer
                }'), Object.assign({\n                        value: value,\n                        language: '${
                  this.language
                }',\n                        theme: '${this._theme}',\n                    }, ${JSON.stringify(
                  this.editorOptions,
                )}));\n                    editor.getModel().onDidChangeContent( (e)=> {\n                        ipcRenderer.sendToHost("onEditorContentChange", editor.getValue());\n                    });\n                    editor.addAction({\n                      // An unique identifier of the contributed action.\n                      id: 'fullScreen',\n                      // A label of the action that will be presented to the user.\n                      label: 'Full Screen',\n                      // An optional array of keybindings for the action.\n                      contextMenuGroupId: 'navigation',\n                      keybindings: [${
                  this._keycode
                }],\n                      contextMenuOrder: 1.5,\n                      // Method that will be executed when the action is triggered.\n                      // @param editor The editor instance is passed in as a convinience\n                      run: function(ed) {\n                        var editorDiv = document.getElementById('${
                  this._editorInnerContainer
                }');\n                        editorDiv.webkitRequestFullscreen();\n                      }\n                    });\n                    editor.addAction({\n                      // An unique identifier of the contributed action.\n                      id: 'exitfullScreen',\n                      // A label of the action that will be presented to the user.\n                      label: 'Exit Full Screen',\n                      // An optional array of keybindings for the action.\n                      contextMenuGroupId: 'navigation',\n                      keybindings: [9],\n                      contextMenuOrder: 1.5,\n                      // Method that will be executed when the action is triggered.\n                      // @param editor The editor instance is passed in as a convinience\n                      run: function(ed) {\n                        var editorDiv = document.getElementById('${
                  this._editorInnerContainer
                }');\n                        document.webkitExitFullscreen();\n                      }\n                    });\n                    ipcRenderer.sendToHost("editorInitialized", this._editor);\n                });\n\n                // return back the value in the editor to the mainview\n                ipcRenderer.on('getEditorContent', function(){\n                    ipcRenderer.sendToHost("editorContent", editor.getValue());\n                });\n\n                // set the value of the editor from what was sent from the mainview\n                ipcRenderer.on('setEditorContent', function(event, data){\n                    value = data;\n                    editor.setValue(data);\n                });\n\n                // set the style of the editor container div\n                ipcRenderer.on('setEditorStyle', function(event, data){\n                    var editorDiv = document.getElementById('${
                  this._editorInnerContainer
                }');\n                    editorDiv.style = data.style;\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n                    editor = monaco.editor.create(document.getElementById('${
                  this._editorInnerContainer
                }'), Object.assign({\n                        value: currentValue,\n                        language: data.language,\n                        theme: data.theme,\n                    }, ${JSON.stringify(
                  this.editorOptions,
                )}));\n                });\n\n                // set the options of the editor from what was sent from the mainview\n                ipcRenderer.on('setEditorOptions', function(event, data){\n                    editor.updateOptions(data);\n                    ipcRenderer.sendToHost("editorConfigurationChanged", '');\n                });\n\n                // set the language of the editor from what was sent from the mainview\n                ipcRenderer.on('setLanguage', function(event, data){\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n                    editor = monaco.editor.create(document.getElementById('${
                  this._editorInnerContainer
                }'), Object.assign({\n                        value: currentValue,\n                        language: data,\n                        theme: theme,\n                    }, ${JSON.stringify(
                  this.editorOptions,
                )}));\n                    ipcRenderer.sendToHost("editorConfigurationChanged", '');\n                    ipcRenderer.sendToHost("editorLanguageChanged", '');\n                });\n\n                // register a new language with editor\n                ipcRenderer.on('registerLanguage', function(event, data){\n                    var currentValue = editor.getValue();\n                    editor.dispose();\n\n                    for (var i = 0; i < data.completionItemProvider.length; i++) {\n                        var provider = data.completionItemProvider[i];\n                        provider.kind = eval(provider.kind);\n                    }\n                    for (var i = 0; i < data.monarchTokensProvider.length; i++) {\n                        var monarchTokens = data.monarchTokensProvider[i];\n                        monarchTokens[0] = eval(monarchTokens[0]);\n                    }\n                    monaco.languages.register({ id: data.id });\n\n                    monaco.languages.setMonarchTokensProvider(data.id, {\n                        tokenizer: {\n                            root: data.monarchTokensProvider\n                        }\n                    });\n\n                    // Define a new theme that constains only rules that match this language\n                    monaco.editor.defineTheme(data.customTheme.id, data.customTheme.theme);\n                    theme = data.customTheme.id;\n\n                    monaco.languages.registerCompletionItemProvider(data.id, {\n                        provideCompletionItems: () => {\n                            return data.completionItemProvider\n                        }\n                    });\n\n                    var css = document.createElement("style");\n                    css.type = "text/css";\n                    css.innerHTML = data.monarchTokensProviderCSS;\n                    document.body.appendChild(css);\n                    registeredLanguagesStyles = [...registeredLanguagesStyles, css];\n\n\n                    ipcRenderer.sendToHost("editorConfigurationChanged", '');\n                });\n\n                // Instruct the editor to remeasure its container\n                ipcRenderer.on('layout', function(){\n                    editor.layout();\n                });\n\n                // Instruct the editor go to full screen mode\n                ipcRenderer.on('showFullScreenEditor', function() {\n                  var editorDiv = document.getElementById('${
                  this._editorInnerContainer
                }');\n                  editorDiv.webkitRequestFullscreen();\n                });\n\n                // Instruct the editor exit full screen mode\n                ipcRenderer.on('exitFullScreenEditor', function() {\n                  var editorDiv = document.getElementById('${
                  this._editorInnerContainer
                }');\n                  editorDiv.webkitExitFullscreen();\n                });\n\n                ipcRenderer.on('dispose', function(){\n                  editor.dispose();\n                  registeredLanguagesStyles.forEach((style) => style.remove());\n                });\n\n                // need to manually resize the editor any time the window size\n                // changes. See: https://github.com/Microsoft/monaco-editor/issues/28\n                window.addEventListener("resize", function resizeEditor() {\n                    editor.layout();\n                });\n            <\/script>\n            </body>\n            </html>`),
                (this._webview = document.createElement('webview')),
                this._webview.setAttribute('nodeintegration', 'true'),
                this._webview.setAttribute('disablewebsecurity', 'true'),
                this._webview.setAttribute('src', 'data:text/html;base64,' + window.btoa(e)),
                this._webview.setAttribute('style', 'display:inline-flex; width:100%; height:100%'),
                this._webview.addEventListener('ipc-message', (e) => {
                  'editorContent' === e.channel
                    ? ((this._fromEditor = !0),
                      this.writeValue(e.args[0]),
                      this._subject.next(this._value),
                      this._subject.complete(),
                      (this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.a()))
                    : 'onEditorContentChange' === e.channel
                    ? ((this._fromEditor = !0),
                      this.writeValue(e.args[0]),
                      this.initialContentChange && ((this.initialContentChange = !1), this.layout()))
                    : 'editorInitialized' === e.channel
                    ? ((this._componentInitialized = !0),
                      (this._editorProxy = this.wrapEditorCalls(this._editor)),
                      this.editorInitialized.emit(this._editorProxy))
                    : 'editorConfigurationChanged' === e.channel
                    ? this.editorConfigurationChanged.emit()
                    : 'editorLanguageChanged' === e.channel && this.editorLanguageChanged.emit();
                }),
                this._editorContainer.nativeElement.appendChild(this._webview));
            }
            ngAfterViewInit() {
              this._isElectronApp ||
                (Object(_code_editor_utils__WEBPACK_IMPORTED_MODULE_10__.a)(),
                Object(_code_editor_utils__WEBPACK_IMPORTED_MODULE_10__.b)()
                  .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.a)(this._destroy))
                  .subscribe(() => {
                    this.initMonaco();
                  })),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__.a)(
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_5__.a)(window, 'resize').pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.a)(100),
                  ),
                  this._widthSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.a)()),
                  this._heightSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.a)()),
                )
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.a)(this._destroy),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.a)(100),
                  )
                  .subscribe(() => {
                    this.layout(), this._changeDetectorRef.markForCheck();
                  }),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__.a)(500, 250)
                  .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.a)(this._destroy))
                  .subscribe(() => {
                    this._elementRef &&
                      this._elementRef.nativeElement &&
                      (this._widthSubject.next(this._elementRef.nativeElement.getBoundingClientRect().width),
                      this._heightSubject.next(this._elementRef.nativeElement.getBoundingClientRect().height));
                  });
            }
            ngOnDestroy() {
              this._changeDetectorRef.detach(),
                this._registeredLanguagesStyles.forEach((e) => e.remove()),
                this._webview ? this._webview.send('dispose') : this._editor && this._editor.dispose(),
                this._destroy.next(!0),
                this._destroy.unsubscribe();
            }
            showFullScreenEditor() {
              if (this._componentInitialized)
                if (this._webview) this._webview.send('showFullScreenEditor');
                else {
                  const e = this._editorContainer.nativeElement,
                    t = {
                      requestFullscreen: () => e.requestFullscreen(),
                      webkitRequestFullscreen: () => e.webkitRequestFullscreen(),
                      msRequestFullscreen: () => e.msRequestFullscreen(),
                      mozRequestFullScreen: () => e.mozRequestFullScreen(),
                    };
                  for (const i of Object.keys(t)) e[i] && t[i]();
                }
              this._isFullScreen = !0;
            }
            exitFullScreenEditor() {
              if (this._componentInitialized)
                if (this._webview) this._webview.send('exitFullScreenEditor');
                else {
                  const e = {
                    exitFullscreen: () => document.exitFullscreen(),
                    webkitExitFullscreen: () => document.webkitExitFullscreen(),
                    mozCancelFullScreen: () => document.mozCancelFullScreen(),
                    msExitFullscreen: () => document.msExitFullscreen(),
                  };
                  for (const t of Object.keys(e)) document[t] && e[t]();
                }
              this._isFullScreen = !1;
            }
            addFullScreenModeCommand() {
              this._editor.addAction({
                id: 'fullScreen',
                label: 'Full Screen',
                contextMenuGroupId: 'navigation',
                keybindings: this._keycode,
                contextMenuOrder: 1.5,
                run: (e) => {
                  this.showFullScreenEditor();
                },
              });
            }
            wrapEditorCalls(e) {
              const t = this;
              return new Proxy(e, {
                get(e, i, n) {
                  return (...n) =>
                    Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this, void 0, void 0, function*() {
                      if (t._componentInitialized) {
                        if (t._webview)
                          return ((e) =>
                            new Promise((i) => {
                              t._webview.executeJavaScript(e, i);
                            }))('editor.' + i + '(' + n + ')');
                        {
                          const o = e[i],
                            r = yield o.apply(t._editor, n);
                          return (
                            setTimeout(() => {
                              t.zone.run(() => {
                                t._changeDetectorRef.destroyed || t._changeDetectorRef.detectChanges();
                              });
                            }),
                            r
                          );
                        }
                      }
                    });
                },
              });
            }
            initMonaco() {
              const e = this._editorContainer.nativeElement;
              (e.id = this._editorInnerContainer),
                (this._editor = monaco.editor.create(
                  e,
                  Object.assign(
                    { value: this._value, language: this.language, theme: this._theme },
                    this.editorOptions,
                  ),
                )),
                setTimeout(() => {
                  (this._editorProxy = this.wrapEditorCalls(this._editor)),
                    (this._componentInitialized = !0),
                    this.editorInitialized.emit(this._editorProxy);
                }),
                this._editor.getModel().onDidChangeContent((e) => {
                  (this._fromEditor = !0),
                    this.writeValue(this._editor.getValue()),
                    this.initialContentChange && ((this.initialContentChange = !1), this.layout());
                }),
                this.addFullScreenModeCommand();
            }
          }
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
                var i;
                1 & e && _angular_core__WEBPACK_IMPORTED_MODULE_1__.Nc(_c0, !0),
                  2 & e &&
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.Ec(
                      (i = _angular_core__WEBPACK_IMPORTED_MODULE_1__.hc()),
                    ) &&
                    (t._editorContainer = i.first);
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
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.V)(() => TdCodeEditorComponent),
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
    x9ci: function(e, t, i) {
      'use strict';
      i.d(t, 'b', function() {
        return o;
      }),
        i.d(t, 'a', function() {
          return r;
        });
      var n = i('XNiG');
      function o() {
        const e = new n.a(),
          t = setInterval(() => {
            'object' == typeof window.monaco && (clearInterval(t), e.next(), e.complete());
          }, 100);
        return e.asObservable();
      }
      function r() {
        if (!document.getElementById('monaco-loader-script')) {
          const e = () => {
            window.require.config({ paths: { vs: 'assets/monaco/vs' } }),
              window.require(['vs/editor/editor.main'], () => {});
          };
          if (window.require) e();
          else {
            const t = document.createElement('script');
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
