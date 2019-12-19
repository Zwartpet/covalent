/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 2.5.1(b4d1a1e6b28e15a0f913a6ed6f733af32cd67470)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define('vs/language/json/workerManager', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function() {
    function e(e) {
      var t = this;
      (this._defaults = e),
        (this._worker = null),
        (this._idleCheckInterval = setInterval(function() {
          return t._checkIfIdle();
        }, 3e4)),
        (this._lastUsedTime = 0),
        (this._configChangeListener = this._defaults.onDidChange(function() {
          return t._stopWorker();
        }));
    }
    return (
      (e.prototype._stopWorker = function() {
        this._worker && (this._worker.dispose(), (this._worker = null)), (this._client = null);
      }),
      (e.prototype.dispose = function() {
        clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), this._stopWorker();
      }),
      (e.prototype._checkIfIdle = function() {
        this._worker && 12e4 < Date.now() - this._lastUsedTime && this._stopWorker();
      }),
      (e.prototype._getClient = function() {
        return (
          (this._lastUsedTime = Date.now()),
          this._client ||
            ((this._worker = monaco.editor.createWebWorker({
              moduleId: 'vs/language/json/jsonWorker',
              label: this._defaults.languageId,
              createData: {
                languageSettings: this._defaults.diagnosticsOptions,
                languageId: this._defaults.languageId,
                enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest,
              },
            })),
            (this._client = this._worker.getProxy())),
          this._client
        );
      }),
      (e.prototype.getLanguageServiceWorker = function() {
        for (var t, n = this, r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
        return this._getClient()
          .then(function(e) {
            t = e;
          })
          .then(function(e) {
            return n._worker.withSyncedResources(r);
          })
          .then(function(e) {
            return t;
          });
      }),
      e
    );
  })();
  t.WorkerManager = n;
}),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-languageserver-types/main', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    var a, n, r, o, i, s, c, u, f, d, l, g, p, h, m, v, b, y, k, C, E, _, w, x, T, S, A, O, I, L, M;
    Object.defineProperty(t, '__esModule', { value: !0 }),
      ((n = a = t.Position || (t.Position = {})).create = function(e, t) {
        return { line: e, character: t };
      }),
      (n.is = function(e) {
        var t = e;
        return ae.objectLiteral(t) && ae.number(t.line) && ae.number(t.character);
      }),
      ((o = r = t.Range || (t.Range = {})).create = function(e, t, n, r) {
        if (ae.number(e) && ae.number(t) && ae.number(n) && ae.number(r))
          return { start: a.create(e, t), end: a.create(n, r) };
        if (a.is(e) && a.is(t)) return { start: e, end: t };
        throw new Error('Range#create called with invalid arguments[' + e + ', ' + t + ', ' + n + ', ' + r + ']');
      }),
      (o.is = function(e) {
        var t = e;
        return ae.objectLiteral(t) && a.is(t.start) && a.is(t.end);
      }),
      ((s = i = t.Location || (t.Location = {})).create = function(e, t) {
        return { uri: e, range: t };
      }),
      (s.is = function(e) {
        var t = e;
        return ae.defined(t) && r.is(t.range) && (ae.string(t.uri) || ae.undefined(t.uri));
      }),
      ((c = t.LocationLink || (t.LocationLink = {})).create = function(e, t, n, r) {
        return { targetUri: e, targetRange: t, targetSelectionRange: n, originSelectionRange: r };
      }),
      (c.is = function(e) {
        var t = e;
        return (
          ae.defined(t) &&
          r.is(t.targetRange) &&
          ae.string(t.targetUri) &&
          (r.is(t.targetSelectionRange) || ae.undefined(t.targetSelectionRange)) &&
          (r.is(t.originSelectionRange) || ae.undefined(t.originSelectionRange))
        );
      }),
      ((f = u = t.Color || (t.Color = {})).create = function(e, t, n, r) {
        return { red: e, green: t, blue: n, alpha: r };
      }),
      (f.is = function(e) {
        var t = e;
        return ae.number(t.red) && ae.number(t.green) && ae.number(t.blue) && ae.number(t.alpha);
      }),
      ((d = t.ColorInformation || (t.ColorInformation = {})).create = function(e, t) {
        return { range: e, color: t };
      }),
      (d.is = function(e) {
        var t = e;
        return r.is(t.range) && u.is(t.color);
      }),
      ((l = t.ColorPresentation || (t.ColorPresentation = {})).create = function(e, t, n) {
        return { label: e, textEdit: t, additionalTextEdits: n };
      }),
      (l.is = function(e) {
        var t = e;
        return (
          ae.string(t.label) &&
          (ae.undefined(t.textEdit) || E.is(t)) &&
          (ae.undefined(t.additionalTextEdits) || ae.typedArray(t.additionalTextEdits, E.is))
        );
      }),
      ((g = t.FoldingRangeKind || (t.FoldingRangeKind = {})).Comment = 'comment'),
      (g.Imports = 'imports'),
      (g.Region = 'region'),
      ((p = t.FoldingRange || (t.FoldingRange = {})).create = function(e, t, n, r, o) {
        var i = { startLine: e, endLine: t };
        return (
          ae.defined(n) && (i.startCharacter = n),
          ae.defined(r) && (i.endCharacter = r),
          ae.defined(o) && (i.kind = o),
          i
        );
      }),
      (p.is = function(e) {
        var t = e;
        return (
          ae.number(t.startLine) &&
          ae.number(t.startLine) &&
          (ae.undefined(t.startCharacter) || ae.number(t.startCharacter)) &&
          (ae.undefined(t.endCharacter) || ae.number(t.endCharacter)) &&
          (ae.undefined(t.kind) || ae.string(t.kind))
        );
      }),
      ((m = h = t.DiagnosticRelatedInformation || (t.DiagnosticRelatedInformation = {})).create = function(e, t) {
        return { location: e, message: t };
      }),
      (m.is = function(e) {
        var t = e;
        return ae.defined(t) && i.is(t.location) && ae.string(t.message);
      }),
      ((v = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
      (v.Warning = 2),
      (v.Information = 3),
      (v.Hint = 4),
      ((y = b = t.Diagnostic || (t.Diagnostic = {})).create = function(e, t, n, r, o, i) {
        var a = { range: e, message: t };
        return (
          ae.defined(n) && (a.severity = n),
          ae.defined(r) && (a.code = r),
          ae.defined(o) && (a.source = o),
          ae.defined(i) && (a.relatedInformation = i),
          a
        );
      }),
      (y.is = function(e) {
        var t = e;
        return (
          ae.defined(t) &&
          r.is(t.range) &&
          ae.string(t.message) &&
          (ae.number(t.severity) || ae.undefined(t.severity)) &&
          (ae.number(t.code) || ae.string(t.code) || ae.undefined(t.code)) &&
          (ae.string(t.source) || ae.undefined(t.source)) &&
          (ae.undefined(t.relatedInformation) || ae.typedArray(t.relatedInformation, h.is))
        );
      }),
      ((C = k = t.Command || (t.Command = {})).create = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = { title: e, command: t };
        return ae.defined(n) && 0 < n.length && (o.arguments = n), o;
      }),
      (C.is = function(e) {
        var t = e;
        return ae.defined(t) && ae.string(t.title) && ae.string(t.command);
      }),
      ((_ = E = t.TextEdit || (t.TextEdit = {})).replace = function(e, t) {
        return { range: e, newText: t };
      }),
      (_.insert = function(e, t) {
        return { range: { start: e, end: e }, newText: t };
      }),
      (_.del = function(e) {
        return { range: e, newText: '' };
      }),
      (_.is = function(e) {
        var t = e;
        return ae.objectLiteral(t) && ae.string(t.newText) && r.is(t.range);
      }),
      ((x = w = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create = function(e, t) {
        return { textDocument: e, edits: t };
      }),
      (x.is = function(e) {
        var t = e;
        return ae.defined(t) && D.is(t.textDocument) && Array.isArray(t.edits);
      }),
      ((S = T = t.CreateFile || (t.CreateFile = {})).create = function(e, t) {
        var n = { kind: 'create', uri: e };
        return void 0 === t || (void 0 === t.overwrite && void 0 === t.ignoreIfExists) || (n.options = t), n;
      }),
      (S.is = function(e) {
        var t = e;
        return (
          t &&
          'create' === t.kind &&
          ae.string(t.uri) &&
          (void 0 === t.options ||
            ((void 0 === t.options.overwrite || ae.boolean(t.options.overwrite)) &&
              (void 0 === t.options.ignoreIfExists || ae.boolean(t.options.ignoreIfExists))))
        );
      }),
      ((O = A = t.RenameFile || (t.RenameFile = {})).create = function(e, t, n) {
        var r = { kind: 'rename', oldUri: e, newUri: t };
        return void 0 === n || (void 0 === n.overwrite && void 0 === n.ignoreIfExists) || (r.options = n), r;
      }),
      (O.is = function(e) {
        var t = e;
        return (
          t &&
          'rename' === t.kind &&
          ae.string(t.oldUri) &&
          ae.string(t.newUri) &&
          (void 0 === t.options ||
            ((void 0 === t.options.overwrite || ae.boolean(t.options.overwrite)) &&
              (void 0 === t.options.ignoreIfExists || ae.boolean(t.options.ignoreIfExists))))
        );
      }),
      ((L = I = t.DeleteFile || (t.DeleteFile = {})).create = function(e, t) {
        var n = { kind: 'delete', uri: e };
        return void 0 === t || (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) || (n.options = t), n;
      }),
      (L.is = function(e) {
        var t = e;
        return (
          t &&
          'delete' === t.kind &&
          ae.string(t.uri) &&
          (void 0 === t.options ||
            ((void 0 === t.options.recursive || ae.boolean(t.options.recursive)) &&
              (void 0 === t.options.ignoreIfNotExists || ae.boolean(t.options.ignoreIfNotExists))))
        );
      }),
      ((M = t.WorkspaceEdit || (t.WorkspaceEdit = {})).is = function(e) {
        var t = e;
        return (
          t &&
          (void 0 !== t.changes || void 0 !== t.documentChanges) &&
          (void 0 === t.documentChanges ||
            t.documentChanges.every(function(e) {
              return ae.string(e.kind) ? T.is(e) || A.is(e) || I.is(e) : w.is(e);
            }))
        );
      });
    var j,
      D,
      K,
      N,
      P,
      R,
      F,
      V,
      U,
      W,
      B,
      q,
      H,
      z,
      J = (function() {
        function e(e) {
          this.edits = e;
        }
        return (
          (e.prototype.insert = function(e, t) {
            this.edits.push(E.insert(e, t));
          }),
          (e.prototype.replace = function(e, t) {
            this.edits.push(E.replace(e, t));
          }),
          (e.prototype.delete = function(e) {
            this.edits.push(E.del(e));
          }),
          (e.prototype.add = function(e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function() {
            return this.edits;
          }),
          (e.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          }),
          e
        );
      })(),
      Y = (function() {
        function e(n) {
          var r = this;
          (this._textEditChanges = Object.create(null)),
            n &&
              ((this._workspaceEdit = n).documentChanges
                ? n.documentChanges.forEach(function(e) {
                    if (w.is(e)) {
                      var t = new J(e.edits);
                      r._textEditChanges[e.textDocument.uri] = t;
                    }
                  })
                : n.changes &&
                  Object.keys(n.changes).forEach(function(e) {
                    var t = new J(n.changes[e]);
                    r._textEditChanges[e] = t;
                  }));
        }
        return (
          Object.defineProperty(e.prototype, 'edit', {
            get: function() {
              return this._workspaceEdit;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getTextEditChange = function(e) {
            if (D.is(e)) {
              if (
                (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error('Workspace edit is not configured for document changes.');
              var t = e;
              if (!(r = this._textEditChanges[t.uri])) {
                var n = { textDocument: t, edits: (o = []) };
                this._workspaceEdit.documentChanges.push(n), (r = new J(o)), (this._textEditChanges[t.uri] = r);
              }
              return r;
            }
            if (
              (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }),
              !this._workspaceEdit.changes)
            )
              throw new Error('Workspace edit is not configured for normal text edit changes.');
            var r;
            if (!(r = this._textEditChanges[e])) {
              var o = [];
              (this._workspaceEdit.changes[e] = o), (r = new J(o)), (this._textEditChanges[e] = r);
            }
            return r;
          }),
          (e.prototype.createFile = function(e, t) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(T.create(e, t));
          }),
          (e.prototype.renameFile = function(e, t, n) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(A.create(e, t, n));
          }),
          (e.prototype.deleteFile = function(e, t) {
            this.checkDocumentChanges(), this._workspaceEdit.documentChanges.push(I.create(e, t));
          }),
          (e.prototype.checkDocumentChanges = function() {
            if (!this._workspaceEdit || !this._workspaceEdit.documentChanges)
              throw new Error('Workspace edit is not configured for document changes.');
          }),
          e
        );
      })();
    (t.WorkspaceChange = Y),
      ((j = t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {})).create = function(e) {
        return { uri: e };
      }),
      (j.is = function(e) {
        var t = e;
        return ae.defined(t) && ae.string(t.uri);
      }),
      ((K = D = t.VersionedTextDocumentIdentifier || (t.VersionedTextDocumentIdentifier = {})).create = function(e, t) {
        return { uri: e, version: t };
      }),
      (K.is = function(e) {
        var t = e;
        return ae.defined(t) && ae.string(t.uri) && (null === t.version || ae.number(t.version));
      }),
      ((N = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function(e, t, n, r) {
        return { uri: e, languageId: t, version: n, text: r };
      }),
      (N.is = function(e) {
        var t = e;
        return (
          ae.defined(t) && ae.string(t.uri) && ae.string(t.languageId) && ae.number(t.version) && ae.string(t.text)
        );
      }),
      ((R = P = t.MarkupKind || (t.MarkupKind = {})).PlainText = 'plaintext'),
      (R.Markdown = 'markdown'),
      ((F = P = t.MarkupKind || (t.MarkupKind = {})).is = function(e) {
        var t = e;
        return t === F.PlainText || t === F.Markdown;
      }),
      ((V = t.MarkupContent || (t.MarkupContent = {})).is = function(e) {
        var t = e;
        return ae.objectLiteral(e) && P.is(t.kind) && ae.string(t.value);
      }),
      ((U = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
      (U.Method = 2),
      (U.Function = 3),
      (U.Constructor = 4),
      (U.Field = 5),
      (U.Variable = 6),
      (U.Class = 7),
      (U.Interface = 8),
      (U.Module = 9),
      (U.Property = 10),
      (U.Unit = 11),
      (U.Value = 12),
      (U.Enum = 13),
      (U.Keyword = 14),
      (U.Snippet = 15),
      (U.Color = 16),
      (U.File = 17),
      (U.Reference = 18),
      (U.Folder = 19),
      (U.EnumMember = 20),
      (U.Constant = 21),
      (U.Struct = 22),
      (U.Event = 23),
      (U.Operator = 24),
      (U.TypeParameter = 25),
      ((W = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
      (W.Snippet = 2),
      ((t.CompletionItem || (t.CompletionItem = {})).create = function(e) {
        return { label: e };
      }),
      ((t.CompletionList || (t.CompletionList = {})).create = function(e, t) {
        return { items: e || [], isIncomplete: !!t };
      }),
      ((q = B = t.MarkedString || (t.MarkedString = {})).fromPlainText = function(e) {
        return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
      }),
      (q.is = function(e) {
        var t = e;
        return ae.string(t) || (ae.objectLiteral(t) && ae.string(t.language) && ae.string(t.value));
      }),
      ((t.Hover || (t.Hover = {})).is = function(e) {
        var t = e;
        return (
          !!t &&
          ae.objectLiteral(t) &&
          (V.is(t.contents) || B.is(t.contents) || ae.typedArray(t.contents, B.is)) &&
          (void 0 === e.range || r.is(e.range))
        );
      }),
      ((t.ParameterInformation || (t.ParameterInformation = {})).create = function(e, t) {
        return t ? { label: e, documentation: t } : { label: e };
      }),
      ((t.SignatureInformation || (t.SignatureInformation = {})).create = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = { label: e };
        return ae.defined(t) && (o.documentation = t), ae.defined(n) ? (o.parameters = n) : (o.parameters = []), o;
      }),
      ((H = t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
      (H.Read = 2),
      (H.Write = 3),
      ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function(e, t) {
        var n = { range: e };
        return ae.number(t) && (n.kind = t), n;
      }),
      ((z = t.SymbolKind || (t.SymbolKind = {})).File = 1),
      (z.Module = 2),
      (z.Namespace = 3),
      (z.Package = 4),
      (z.Class = 5),
      (z.Method = 6),
      (z.Property = 7),
      (z.Field = 8),
      (z.Constructor = 9),
      (z.Enum = 10),
      (z.Interface = 11),
      (z.Function = 12),
      (z.Variable = 13),
      (z.Constant = 14),
      (z.String = 15),
      (z.Number = 16),
      (z.Boolean = 17),
      (z.Array = 18),
      (z.Object = 19),
      (z.Key = 20),
      (z.Null = 21),
      (z.EnumMember = 22),
      (z.Struct = 23),
      (z.Event = 24),
      (z.Operator = 25),
      (z.TypeParameter = 26),
      ((t.SymbolInformation || (t.SymbolInformation = {})).create = function(e, t, n, r, o) {
        var i = { name: e, kind: t, location: { uri: r, range: n } };
        return o && (i.containerName = o), i;
      });
    var G,
      $,
      Q,
      X,
      Z,
      ee,
      te = function() {};
    (t.DocumentSymbol = te),
      ((G = te = t.DocumentSymbol || (t.DocumentSymbol = {})).create = function(e, t, n, r, o, i) {
        var a = { name: e, detail: t, kind: n, range: r, selectionRange: o };
        return void 0 !== i && (a.children = i), a;
      }),
      (G.is = function(e) {
        var t = e;
        return (
          t &&
          ae.string(t.name) &&
          ae.number(t.kind) &&
          r.is(t.range) &&
          r.is(t.selectionRange) &&
          (void 0 === t.detail || ae.string(t.detail)) &&
          (void 0 === t.deprecated || ae.boolean(t.deprecated)) &&
          (void 0 === t.children || Array.isArray(t.children))
        );
      }),
      (t.DocumentSymbol = te),
      (($ = t.CodeActionKind || (t.CodeActionKind = {})).QuickFix = 'quickfix'),
      ($.Refactor = 'refactor'),
      ($.RefactorExtract = 'refactor.extract'),
      ($.RefactorInline = 'refactor.inline'),
      ($.RefactorRewrite = 'refactor.rewrite'),
      ($.Source = 'source'),
      ($.SourceOrganizeImports = 'source.organizeImports'),
      ((Q = t.CodeActionContext || (t.CodeActionContext = {})).create = function(e, t) {
        var n = { diagnostics: e };
        return null != t && (n.only = t), n;
      }),
      (Q.is = function(e) {
        var t = e;
        return (
          ae.defined(t) && ae.typedArray(t.diagnostics, b.is) && (void 0 === t.only || ae.typedArray(t.only, ae.string))
        );
      }),
      ((X = t.CodeAction || (t.CodeAction = {})).create = function(e, t, n) {
        var r = { title: e };
        return k.is(t) ? (r.command = t) : (r.edit = t), void 0 !== n && (r.kind = n), r;
      }),
      (X.is = function(e) {
        var t = e;
        return (
          t &&
          ae.string(t.title) &&
          (void 0 === t.diagnostics || ae.typedArray(t.diagnostics, b.is)) &&
          (void 0 === t.kind || ae.string(t.kind)) &&
          (void 0 !== t.edit || void 0 !== t.command) &&
          (void 0 === t.command || k.is(t.command)) &&
          (void 0 === t.edit || M.is(t.edit))
        );
      }),
      ((Z = t.CodeLens || (t.CodeLens = {})).create = function(e, t) {
        var n = { range: e };
        return ae.defined(t) && (n.data = t), n;
      }),
      (Z.is = function(e) {
        var t = e;
        return ae.defined(t) && r.is(t.range) && (ae.undefined(t.command) || k.is(t.command));
      }),
      ((ee = t.FormattingOptions || (t.FormattingOptions = {})).create = function(e, t) {
        return { tabSize: e, insertSpaces: t };
      }),
      (ee.is = function(e) {
        var t = e;
        return ae.defined(t) && ae.number(t.tabSize) && ae.boolean(t.insertSpaces);
      });
    var ne,
      re,
      oe,
      ie = function() {};
    (t.DocumentLink = ie),
      ((ne = ie = t.DocumentLink || (t.DocumentLink = {})).create = function(e, t, n) {
        return { range: e, target: t, data: n };
      }),
      (ne.is = function(e) {
        var t = e;
        return ae.defined(t) && r.is(t.range) && (ae.undefined(t.target) || ae.string(t.target));
      }),
      (t.DocumentLink = ie),
      (t.EOL = ['\n', '\r\n', '\r']),
      ((re = t.TextDocument || (t.TextDocument = {})).create = function(e, t, n, r) {
        return new ue(e, t, n, r);
      }),
      (re.is = function(e) {
        var t = e;
        return !!(
          ae.defined(t) &&
          ae.string(t.uri) &&
          (ae.undefined(t.languageId) || ae.string(t.languageId)) &&
          ae.number(t.lineCount) &&
          ae.func(t.getText) &&
          ae.func(t.positionAt) &&
          ae.func(t.offsetAt)
        );
      }),
      (re.applyEdits = function(e, t) {
        for (
          var n = e.getText(),
            r = (function e(t, n) {
              if (t.length <= 1) return t;
              var r = (t.length / 2) | 0,
                o = t.slice(0, r),
                i = t.slice(r);
              e(o, n), e(i, n);
              for (var a = 0, s = 0, c = 0; a < o.length && s < i.length; ) {
                var u = n(o[a], i[s]);
                t[c++] = u <= 0 ? o[a++] : i[s++];
              }
              for (; a < o.length; ) t[c++] = o[a++];
              for (; s < i.length; ) t[c++] = i[s++];
              return t;
            })(t, function(e, t) {
              var n = e.range.start.line - t.range.start.line;
              return 0 === n ? e.range.start.character - t.range.start.character : n;
            }),
            o = n.length,
            i = r.length - 1;
          0 <= i;
          i--
        ) {
          var a = r[i],
            s = e.offsetAt(a.range.start),
            c = e.offsetAt(a.range.end);
          if (!(c <= o)) throw new Error('Overlapping edit');
          (n = n.substring(0, s) + a.newText + n.substring(c, n.length)), (o = s);
        }
        return n;
      }),
      ((oe = t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {})).Manual = 1),
      (oe.AfterDelay = 2),
      (oe.FocusOut = 3);
    var ae,
      se,
      ce,
      ue = (function() {
        function e(e, t, n, r) {
          (this._uri = e), (this._languageId = t), (this._version = n), (this._content = r), (this._lineOffsets = null);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function() {
              return this._uri;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function() {
              return this._languageId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function() {
              return this._version;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function(e, t) {
            (this._content = e.text), (this._version = t), (this._lineOffsets = null);
          }),
          (e.prototype.getLineOffsets = function() {
            if (null === this._lineOffsets) {
              for (var e = [], t = this._content, n = !0, r = 0; r < t.length; r++) {
                n && (e.push(r), (n = !1));
                var o = t.charAt(r);
                (n = '\r' === o || '\n' === o), '\r' === o && r + 1 < t.length && '\n' === t.charAt(r + 1) && r++;
              }
              n && 0 < t.length && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return a.create(0, e);
            for (; n < r; ) {
              var o = Math.floor((n + r) / 2);
              t[o] > e ? (r = o) : (n = o + 1);
            }
            var i = n - 1;
            return a.create(i, e - t[i]);
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    (se = ae || (ae = {})),
      (ce = Object.prototype.toString),
      (se.defined = function(e) {
        return void 0 !== e;
      }),
      (se.undefined = function(e) {
        return void 0 === e;
      }),
      (se.boolean = function(e) {
        return !0 === e || !1 === e;
      }),
      (se.string = function(e) {
        return '[object String]' === ce.call(e);
      }),
      (se.number = function(e) {
        return '[object Number]' === ce.call(e);
      }),
      (se.func = function(e) {
        return '[object Function]' === ce.call(e);
      }),
      (se.objectLiteral = function(e) {
        return null !== e && 'object' == typeof e;
      }),
      (se.typedArray = function(e, t) {
        return Array.isArray(e) && e.every(t);
      });
  }),
  define('vscode-languageserver-types', ['vscode-languageserver-types/main'], function(e) {
    return e;
  }),
  define('vs/language/json/languageFeatures', ['require', 'exports', 'vscode-languageserver-types'], function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    monaco.Uri;
    var s = monaco.Range,
      n = (function() {
        function e(e, t, n) {
          var r = this;
          (this._languageId = e), (this._worker = t), (this._disposables = []), (this._listener = Object.create(null));
          var o = function(e) {
              var t,
                n = e.getModeId();
              n === r._languageId &&
                ((r._listener[e.uri.toString()] = e.onDidChangeContent(function() {
                  clearTimeout(t),
                    (t = setTimeout(function() {
                      return r._doValidate(e.uri, n);
                    }, 500));
                })),
                r._doValidate(e.uri, n));
            },
            i = function(e) {
              monaco.editor.setModelMarkers(e, r._languageId, []);
              var t = e.uri.toString(),
                n = r._listener[t];
              n && (n.dispose(), delete r._listener[t]);
            };
          this._disposables.push(monaco.editor.onDidCreateModel(o)),
            this._disposables.push(
              monaco.editor.onWillDisposeModel(function(e) {
                i(e), r._resetSchema(e.uri);
              }),
            ),
            this._disposables.push(
              monaco.editor.onDidChangeModelLanguage(function(e) {
                i(e.model), o(e.model), r._resetSchema(e.model.uri);
              }),
            ),
            this._disposables.push(
              n.onDidChange(function(e) {
                monaco.editor.getModels().forEach(function(e) {
                  e.getModeId() === r._languageId && (i(e), o(e));
                });
              }),
            ),
            this._disposables.push({
              dispose: function() {
                for (var e in (monaco.editor.getModels().forEach(i), r._listener)) r._listener[e].dispose();
              },
            }),
            monaco.editor.getModels().forEach(o);
        }
        return (
          (e.prototype.dispose = function() {
            this._disposables.forEach(function(e) {
              return e && e.dispose();
            }),
              (this._disposables = []);
          }),
          (e.prototype._resetSchema = function(t) {
            this._worker().then(function(e) {
              e.resetSchema(t.toString());
            });
          }),
          (e.prototype._doValidate = function(r, o) {
            this._worker(r)
              .then(function(e) {
                return e.doValidation(r.toString()).then(function(e) {
                  var t = e.map(function(e) {
                      return (
                        (n = 'number' == typeof (t = e).code ? String(t.code) : t.code),
                        {
                          severity: (function(e) {
                            switch (e) {
                              case a.DiagnosticSeverity.Error:
                                return monaco.MarkerSeverity.Error;
                              case a.DiagnosticSeverity.Warning:
                                return monaco.MarkerSeverity.Warning;
                              case a.DiagnosticSeverity.Information:
                                return monaco.MarkerSeverity.Info;
                              case a.DiagnosticSeverity.Hint:
                                return monaco.MarkerSeverity.Hint;
                              default:
                                return monaco.MarkerSeverity.Info;
                            }
                          })(t.severity),
                          startLineNumber: t.range.start.line + 1,
                          startColumn: t.range.start.character + 1,
                          endLineNumber: t.range.end.line + 1,
                          endColumn: t.range.end.character + 1,
                          message: t.message,
                          code: n,
                          source: t.source,
                        }
                      );
                      var t, n;
                    }),
                    n = monaco.editor.getModel(r);
                  n && n.getModeId() === o && monaco.editor.setModelMarkers(n, o, t);
                });
              })
              .then(void 0, function(e) {
                console.error(e);
              });
          }),
          e
        );
      })();
    function c(e) {
      if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
    }
    function i(e) {
      if (e)
        return {
          start: { line: e.startLineNumber - 1, character: e.startColumn - 1 },
          end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
        };
    }
    function u(e) {
      if (e) return new s(e.start.line + 1, e.start.character + 1, e.end.line + 1, e.end.character + 1);
    }
    function f(e) {
      if (e) return { range: u(e.range), text: e.newText };
    }
    t.DiagnosticsAdapter = n;
    var r = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        Object.defineProperty(e.prototype, 'triggerCharacters', {
          get: function() {
            return [' ', ':'];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.provideCompletionItems = function(o, i, e, t) {
          var n = o.uri;
          return this._worker(n)
            .then(function(e) {
              return e.doComplete(n.toString(), c(i));
            })
            .then(function(e) {
              if (e) {
                var t = o.getWordUntilPosition(i),
                  n = new s(i.lineNumber, t.startColumn, i.lineNumber, t.endColumn),
                  r = e.items.map(function(e) {
                    var t = {
                      label: e.label,
                      insertText: e.insertText || e.label,
                      sortText: e.sortText,
                      filterText: e.filterText,
                      documentation: e.documentation,
                      detail: e.detail,
                      range: n,
                      kind: (function(e) {
                        var t = monaco.languages.CompletionItemKind;
                        switch (e) {
                          case a.CompletionItemKind.Text:
                            return t.Text;
                          case a.CompletionItemKind.Method:
                            return t.Method;
                          case a.CompletionItemKind.Function:
                            return t.Function;
                          case a.CompletionItemKind.Constructor:
                            return t.Constructor;
                          case a.CompletionItemKind.Field:
                            return t.Field;
                          case a.CompletionItemKind.Variable:
                            return t.Variable;
                          case a.CompletionItemKind.Class:
                            return t.Class;
                          case a.CompletionItemKind.Interface:
                            return t.Interface;
                          case a.CompletionItemKind.Module:
                            return t.Module;
                          case a.CompletionItemKind.Property:
                            return t.Property;
                          case a.CompletionItemKind.Unit:
                            return t.Unit;
                          case a.CompletionItemKind.Value:
                            return t.Value;
                          case a.CompletionItemKind.Enum:
                            return t.Enum;
                          case a.CompletionItemKind.Keyword:
                            return t.Keyword;
                          case a.CompletionItemKind.Snippet:
                            return t.Snippet;
                          case a.CompletionItemKind.Color:
                            return t.Color;
                          case a.CompletionItemKind.File:
                            return t.File;
                          case a.CompletionItemKind.Reference:
                            return t.Reference;
                        }
                        return t.Property;
                      })(e.kind),
                    };
                    return (
                      e.textEdit && ((t.range = u(e.textEdit.range)), (t.insertText = e.textEdit.newText)),
                      e.additionalTextEdits && (t.additionalTextEdits = e.additionalTextEdits.map(f)),
                      e.insertTextFormat === a.InsertTextFormat.Snippet &&
                        (t.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                      t
                    );
                  });
                return { isIncomplete: e.isIncomplete, suggestions: r };
              }
            });
        }),
        e
      );
    })();
    function o(e) {
      return 'string' == typeof e
        ? { value: e }
        : (t = e) && 'object' == typeof t && 'string' == typeof t.kind
        ? 'plaintext' === e.kind
          ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&') }
          : { value: e.value }
        : { value: '```' + e.language + '\n' + e.value + '\n```\n' };
      var t;
    }
    t.CompletionAdapter = r;
    var d = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideHover = function(e, t, n) {
          var r = e.uri;
          return this._worker(r)
            .then(function(e) {
              return e.doHover(r.toString(), c(t));
            })
            .then(function(e) {
              if (e)
                return {
                  range: u(e.range),
                  contents: (function(e) {
                    if (e) return Array.isArray(e) ? e.map(o) : [o(e)];
                  })(e.contents),
                };
            });
        }),
        e
      );
    })();
    t.HoverAdapter = d;
    var l = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentSymbols = function(e, t) {
          var n = e.uri;
          return this._worker(n)
            .then(function(e) {
              return e.findDocumentSymbols(n.toString());
            })
            .then(function(e) {
              if (e)
                return e.map(function(e) {
                  return {
                    name: e.name,
                    detail: '',
                    containerName: e.containerName,
                    kind: (function(e) {
                      var t = monaco.languages.SymbolKind;
                      switch (e) {
                        case a.SymbolKind.File:
                          return t.Array;
                        case a.SymbolKind.Module:
                          return t.Module;
                        case a.SymbolKind.Namespace:
                          return t.Namespace;
                        case a.SymbolKind.Package:
                          return t.Package;
                        case a.SymbolKind.Class:
                          return t.Class;
                        case a.SymbolKind.Method:
                          return t.Method;
                        case a.SymbolKind.Property:
                          return t.Property;
                        case a.SymbolKind.Field:
                          return t.Field;
                        case a.SymbolKind.Constructor:
                          return t.Constructor;
                        case a.SymbolKind.Enum:
                          return t.Enum;
                        case a.SymbolKind.Interface:
                          return t.Interface;
                        case a.SymbolKind.Function:
                          return t.Function;
                        case a.SymbolKind.Variable:
                          return t.Variable;
                        case a.SymbolKind.Constant:
                          return t.Constant;
                        case a.SymbolKind.String:
                          return t.String;
                        case a.SymbolKind.Number:
                          return t.Number;
                        case a.SymbolKind.Boolean:
                          return t.Boolean;
                        case a.SymbolKind.Array:
                          return t.Array;
                      }
                      return t.Function;
                    })(e.kind),
                    range: u(e.location.range),
                    selectionRange: u(e.location.range),
                  };
                });
            });
        }),
        e
      );
    })();
    function g(e) {
      return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
    }
    t.DocumentSymbolAdapter = l;
    var p = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentFormattingEdits = function(e, t, n) {
          var r = e.uri;
          return this._worker(r).then(function(e) {
            return e.format(r.toString(), null, g(t)).then(function(e) {
              if (e && 0 !== e.length) return e.map(f);
            });
          });
        }),
        e
      );
    })();
    t.DocumentFormattingEditProvider = p;
    var h = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentRangeFormattingEdits = function(e, t, n, r) {
          var o = e.uri;
          return this._worker(o).then(function(e) {
            return e.format(o.toString(), i(t), g(n)).then(function(e) {
              if (e && 0 !== e.length) return e.map(f);
            });
          });
        }),
        e
      );
    })();
    t.DocumentRangeFormattingEditProvider = h;
    var m = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentColors = function(e, t) {
          var n = e.uri;
          return this._worker(n)
            .then(function(e) {
              return e.findDocumentColors(n.toString());
            })
            .then(function(e) {
              if (e)
                return e.map(function(e) {
                  return { color: e.color, range: u(e.range) };
                });
            });
        }),
        (e.prototype.provideColorPresentations = function(e, t, n) {
          var r = e.uri;
          return this._worker(r)
            .then(function(e) {
              return e.getColorPresentations(r.toString(), t.color, i(t.range));
            })
            .then(function(e) {
              if (e)
                return e.map(function(e) {
                  var t = { label: e.label };
                  return (
                    e.textEdit && (t.textEdit = f(e.textEdit)),
                    e.additionalTextEdits && (t.additionalTextEdits = e.additionalTextEdits.map(f)),
                    t
                  );
                });
            });
        }),
        e
      );
    })();
    t.DocumentColorAdapter = m;
    var v = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideFoldingRanges = function(e, t, n) {
          var r = e.uri;
          return this._worker(r)
            .then(function(e) {
              return e.provideFoldingRanges(r.toString(), t);
            })
            .then(function(e) {
              if (e)
                return e.map(function(e) {
                  var t = { start: e.startLine + 1, end: e.endLine + 1 };
                  return (
                    void 0 !== e.kind &&
                      (t.kind = (function(e) {
                        switch (e) {
                          case a.FoldingRangeKind.Comment:
                            return monaco.languages.FoldingRangeKind.Comment;
                          case a.FoldingRangeKind.Imports:
                            return monaco.languages.FoldingRangeKind.Imports;
                          case a.FoldingRangeKind.Region:
                            return monaco.languages.FoldingRangeKind.Region;
                        }
                        return;
                      })(e.kind)),
                    t
                  );
                });
            });
        }),
        e
      );
    })();
    t.FoldingRangeAdapter = v;
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else 'function' == typeof define && define.amd && define('jsonc-parser/impl/scanner', ['require', 'exports'], e);
  })(function(e, t) {
    'use strict';
    function g(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (8192 <= e && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function p(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function h(e) {
      return 48 <= e && e <= 57;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.createScanner = function(i, e) {
        void 0 === e && (e = !1);
        var a = 0,
          o = i.length,
          s = '',
          c = 0,
          u = 16,
          f = 0;
        function d(e, t) {
          for (var n = 0, r = 0; n < e || !t; ) {
            var o = i.charCodeAt(a);
            if (48 <= o && o <= 57) r = 16 * r + o - 48;
            else if (65 <= o && o <= 70) r = 16 * r + o - 65 + 10;
            else {
              if (!(97 <= o && o <= 102)) break;
              r = 16 * r + o - 97 + 10;
            }
            a++, n++;
          }
          return n < e && (r = -1), r;
        }
        function t() {
          if (((s = ''), (f = 0), o <= (c = a))) return (c = o), (u = 17);
          var e = i.charCodeAt(a);
          if (g(e)) {
            for (; a++, (s += String.fromCharCode(e)), g((e = i.charCodeAt(a))); );
            return (u = 15);
          }
          if (p(e))
            return (
              a++, (s += String.fromCharCode(e)), 13 === e && 10 === i.charCodeAt(a) && (a++, (s += '\n')), (u = 14)
            );
          switch (e) {
            case 123:
              return a++, (u = 1);
            case 125:
              return a++, (u = 2);
            case 91:
              return a++, (u = 3);
            case 93:
              return a++, (u = 4);
            case 58:
              return a++, (u = 6);
            case 44:
              return a++, (u = 5);
            case 34:
              return (
                a++,
                (s = (function() {
                  for (var e = '', t = a; ; ) {
                    if (o <= a) {
                      (e += i.substring(t, a)), (f = 2);
                      break;
                    }
                    var n = i.charCodeAt(a);
                    if (34 === n) {
                      (e += i.substring(t, a)), a++;
                      break;
                    }
                    if (92 !== n) {
                      if (0 <= n && n <= 31) {
                        if (p(n)) {
                          (e += i.substring(t, a)), (f = 2);
                          break;
                        }
                        f = 6;
                      }
                      a++;
                    } else {
                      if (((e += i.substring(t, a)), o <= ++a)) {
                        f = 2;
                        break;
                      }
                      switch ((n = i.charCodeAt(a++))) {
                        case 34:
                          e += '"';
                          break;
                        case 92:
                          e += '\\';
                          break;
                        case 47:
                          e += '/';
                          break;
                        case 98:
                          e += '\b';
                          break;
                        case 102:
                          e += '\f';
                          break;
                        case 110:
                          e += '\n';
                          break;
                        case 114:
                          e += '\r';
                          break;
                        case 116:
                          e += '\t';
                          break;
                        case 117:
                          var r = d(4, !0);
                          0 <= r ? (e += String.fromCharCode(r)) : (f = 4);
                          break;
                        default:
                          f = 5;
                      }
                      t = a;
                    }
                  }
                  return e;
                })()),
                (u = 10)
              );
            case 47:
              var t = a - 1;
              if (47 === i.charCodeAt(a + 1)) {
                for (a += 2; a < o && !p(i.charCodeAt(a)); ) a++;
                return (s = i.substring(t, a)), (u = 12);
              }
              if (42 !== i.charCodeAt(a + 1)) return (s += String.fromCharCode(e)), a++, (u = 16);
              a += 2;
              for (var n = o - 1, r = !1; a < n; ) {
                if (42 === i.charCodeAt(a) && 47 === i.charCodeAt(a + 1)) {
                  (a += 2), (r = !0);
                  break;
                }
                a++;
              }
              return r || (a++, (f = 1)), (s = i.substring(t, a)), (u = 13);
            case 45:
              if (((s += String.fromCharCode(e)), ++a === o || !h(i.charCodeAt(a)))) return (u = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (
                (s += (function() {
                  var e = a;
                  if (48 === i.charCodeAt(a)) a++;
                  else for (a++; a < i.length && h(i.charCodeAt(a)); ) a++;
                  if (a < i.length && 46 === i.charCodeAt(a)) {
                    if (!(++a < i.length && h(i.charCodeAt(a)))) return (f = 3), i.substring(e, a);
                    for (a++; a < i.length && h(i.charCodeAt(a)); ) a++;
                  }
                  var t = a;
                  if (a < i.length && (69 === i.charCodeAt(a) || 101 === i.charCodeAt(a)))
                    if (
                      (((++a < i.length && 43 === i.charCodeAt(a)) || 45 === i.charCodeAt(a)) && a++,
                      a < i.length && h(i.charCodeAt(a)))
                    ) {
                      for (a++; a < i.length && h(i.charCodeAt(a)); ) a++;
                      t = a;
                    } else f = 3;
                  return i.substring(e, t);
                })()),
                (u = 11)
              );
            default:
              for (; a < o && l(e); ) a++, (e = i.charCodeAt(a));
              if (c === a) return (s += String.fromCharCode(e)), a++, (u = 16);
              switch ((s = i.substring(c, a))) {
                case 'true':
                  return (u = 8);
                case 'false':
                  return (u = 9);
                case 'null':
                  return (u = 7);
              }
              return (u = 16);
          }
        }
        function l(e) {
          if (g(e) || p(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
              return !1;
          }
          return !0;
        }
        return {
          setPosition: function(e) {
            (a = e), (s = ''), (u = 16), (f = c = 0);
          },
          getPosition: function() {
            return a;
          },
          scan: e
            ? function() {
                for (var e; 12 <= (e = t()) && e <= 15; );
                return e;
              }
            : t,
          getToken: function() {
            return u;
          },
          getTokenValue: function() {
            return s;
          },
          getTokenOffset: function() {
            return c;
          },
          getTokenLength: function() {
            return a - c;
          },
          getTokenError: function() {
            return f;
          },
        };
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/format', ['require', 'exports', './scanner'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var w = e('./scanner');
    function x(e, t) {
      for (var n = '', r = 0; r < t; r++) n += e;
      return n;
    }
    function T(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t));
    }
    (t.format = function(r, e, t) {
      var n, o, i, a, s;
      if (e) {
        for (a = e.offset, s = a + e.length, i = a; 0 < i && !T(r, i - 1); ) i--;
        for (var c = s; c < r.length && !T(r, c); ) c++;
        (o = r.substring(i, c)),
          (n = (function(e, t) {
            for (var n = 0, r = 0, o = t.tabSize || 4; n < e.length; ) {
              var i = e.charAt(n);
              if (' ' === i) r++;
              else {
                if ('\t' !== i) break;
                r += o;
              }
              n++;
            }
            return Math.floor(r / o);
          })(o, t));
      } else (a = i = n = 0), (s = (o = r).length);
      var u,
        f = (function(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t.charAt(n);
            if ('\r' === r) return n + 1 < t.length && '\n' === t.charAt(n + 1) ? '\r\n' : '\r';
            if ('\n' === r) return '\n';
          }
          return (e && e.eol) || '\n';
        })(t, r),
        d = !1,
        l = 0;
      u = t.insertSpaces ? x(' ', t.tabSize || 4) : '\t';
      var g = w.createScanner(o, !1),
        p = !1;
      function h() {
        return f + x(u, n + l);
      }
      function m() {
        var e = g.scan();
        for (d = !1; 15 === e || 14 === e; ) (d = d || 14 === e), (e = g.scan());
        return (p = 16 === e || 0 !== g.getTokenError()), e;
      }
      var v = [];
      function b(e, t, n) {
        !p && t < s && a < n && r.substring(t, n) !== e && v.push({ offset: t, length: n - t, content: e });
      }
      var y = m();
      if (17 !== y) {
        var k = g.getTokenOffset() + i;
        b(x(u, n), i, k);
      }
      for (; 17 !== y; ) {
        for (var C = g.getTokenOffset() + g.getTokenLength() + i, E = m(), _ = ''; !d && (12 === E || 13 === E); )
          b(' ', C, g.getTokenOffset() + i),
            (C = g.getTokenOffset() + g.getTokenLength() + i),
            (_ = 12 === E ? h() : ''),
            (E = m());
        if (2 === E) 1 !== y && (l--, (_ = h()));
        else if (4 === E) 3 !== y && (l--, (_ = h()));
        else {
          switch (y) {
            case 3:
            case 1:
              l++, (_ = h());
              break;
            case 5:
            case 12:
              _ = h();
              break;
            case 13:
              _ = d ? h() : ' ';
              break;
            case 6:
              _ = ' ';
              break;
            case 10:
              if (6 === E) {
                _ = '';
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === E || 13 === E ? (_ = ' ') : 5 !== E && 17 !== E && (p = !0);
              break;
            case 16:
              p = !0;
          }
          !d || (12 !== E && 13 !== E) || (_ = h());
        }
        b(_, C, g.getTokenOffset() + i), (y = E);
      }
      return v;
    }),
      (t.isEOL = T);
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/parser', ['require', 'exports', './scanner'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var C,
      E = e('./scanner');
    function s(e, t, n) {
      return void 0 === n && (n = !1), (t >= e.offset && t < e.offset + e.length) || (n && t === e.offset + e.length);
    }
    function f(e, t, n) {
      void 0 === n && (n = C.DEFAULT);
      var o = E.createScanner(e, !1);
      function r(e) {
        return e
          ? function() {
              return e(o.getTokenOffset(), o.getTokenLength());
            }
          : function() {
              return !0;
            };
      }
      function i(t) {
        return t
          ? function(e) {
              return t(e, o.getTokenOffset(), o.getTokenLength());
            }
          : function() {
              return !0;
            };
      }
      var a = r(t.onObjectBegin),
        s = i(t.onObjectProperty),
        c = r(t.onObjectEnd),
        u = r(t.onArrayBegin),
        f = r(t.onArrayEnd),
        d = i(t.onLiteralValue),
        l = i(t.onSeparator),
        g = r(t.onComment),
        p = i(t.onError),
        h = n && n.disallowComments,
        m = n && n.allowTrailingComma;
      function v() {
        for (;;) {
          var e = o.scan();
          switch (o.getTokenError()) {
            case 4:
              b(14);
              break;
            case 5:
              b(15);
              break;
            case 3:
              b(13);
              break;
            case 1:
              h || b(11);
              break;
            case 2:
              b(12);
              break;
            case 6:
              b(16);
          }
          switch (e) {
            case 12:
            case 13:
              h ? b(10) : g();
              break;
            case 16:
              b(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function b(e, t, n) {
        if ((void 0 === t && (t = []), void 0 === n && (n = []), p(e), 0 < t.length + n.length))
          for (var r = o.getToken(); 17 !== r; ) {
            if (-1 !== t.indexOf(r)) {
              v();
              break;
            }
            if (-1 !== n.indexOf(r)) break;
            r = v();
          }
      }
      function y(e) {
        var t = o.getTokenValue();
        return e ? d(t) : s(t), v(), !0;
      }
      function k() {
        switch (o.getToken()) {
          case 3:
            return (function() {
              u(), v();
              for (var e = !1; 4 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || b(4, [], []), l(','), v(), 4 === o.getToken() && m)) break;
                } else e && b(6, [], []);
                k() || b(4, [], [4, 5]), (e = !0);
              }
              return f(), 4 !== o.getToken() ? b(8, [4], []) : v(), !0;
            })();
          case 1:
            return (function() {
              a(), v();
              for (var e = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || b(4, [], []), l(','), v(), 2 === o.getToken() && m)) break;
                } else e && b(6, [], []);
                (10 !== o.getToken()
                  ? (b(3, [], [2, 5]), 0)
                  : (y(!1), 6 === o.getToken() ? (l(':'), v(), k() || b(4, [], [2, 5])) : b(5, [], [2, 5]), 1)) ||
                  b(4, [], [2, 5]),
                  (e = !0);
              }
              return c(), 2 !== o.getToken() ? b(7, [2], []) : v(), !0;
            })();
          case 10:
            return y(!0);
          default:
            return (function() {
              switch (o.getToken()) {
                case 11:
                  var e = 0;
                  try {
                    'number' != typeof (e = JSON.parse(o.getTokenValue())) && (b(2), (e = 0));
                  } catch (e) {
                    b(2);
                  }
                  d(e);
                  break;
                case 7:
                  d(null);
                  break;
                case 8:
                  d(!0);
                  break;
                case 9:
                  d(!1);
                  break;
                default:
                  return !1;
              }
              return v(), !0;
            })();
        }
      }
      return v(), 17 === o.getToken() || (k() ? (17 !== o.getToken() && b(9, [], []), !0) : (b(4, [], []), !1));
    }
    function d(e) {
      switch (typeof e) {
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        default:
          return 'null';
      }
    }
    ((C || (C = {})).DEFAULT = { allowTrailingComma: !1 }),
      (t.getLocation = function(e, o) {
        var i = [],
          a = new Object(),
          s = void 0,
          c = { value: {}, offset: 0, length: 0, type: 'object', parent: void 0 },
          u = !1;
        function r(e, t, n, r) {
          (c.value = e), (c.offset = t), (c.length = n), (c.type = r), (c.colonOffset = void 0), (s = c);
        }
        try {
          f(e, {
            onObjectBegin: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), (u = e < o), i.push('');
            },
            onObjectProperty: function(e, t, n) {
              if (o < t) throw a;
              if ((r(e, t, n, 'property'), (i[i.length - 1] = e), o <= t + n)) throw a;
            },
            onObjectEnd: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), i.pop();
            },
            onArrayBegin: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), i.push(0);
            },
            onArrayEnd: function(e, t) {
              if (o <= e) throw a;
              (s = void 0), i.pop();
            },
            onLiteralValue: function(e, t, n) {
              if (o < t) throw a;
              if ((r(e, t, n, d(e)), o <= t + n)) throw a;
            },
            onSeparator: function(e, t, n) {
              if (o <= t) throw a;
              if (':' === e && s && 'property' === s.type) (s.colonOffset = t), (u = !1), (s = void 0);
              else if (',' === e) {
                var r = i[i.length - 1];
                (i[i.length - 1] = 'number' == typeof r ? r + 1 : ((u = !0), '')), (s = void 0);
              }
            },
          });
        } catch (e) {
          if (e !== a) throw e;
        }
        return {
          path: i,
          previousNode: s,
          isAtPropertyKey: u,
          matches: function(e) {
            for (var t = 0, n = 0; t < e.length && n < i.length; n++)
              if (e[t] === i[n] || '*' === e[t]) t++;
              else if ('**' !== e[t]) return !1;
            return t === e.length;
          },
        };
      }),
      (t.parse = function(e, r, t) {
        void 0 === r && (r = []), void 0 === t && (t = C.DEFAULT);
        var n = null,
          o = [],
          i = [];
        function a(e) {
          Array.isArray(o) ? o.push(e) : n && (o[n] = e);
        }
        return (
          f(
            e,
            {
              onObjectBegin: function() {
                var e = {};
                a(e), i.push(o), (o = e), (n = null);
              },
              onObjectProperty: function(e) {
                n = e;
              },
              onObjectEnd: function() {
                o = i.pop();
              },
              onArrayBegin: function() {
                var e = [];
                a(e), i.push(o), (o = e), (n = null);
              },
              onArrayEnd: function() {
                o = i.pop();
              },
              onLiteralValue: a,
              onError: function(e, t, n) {
                r.push({ error: e, offset: t, length: n });
              },
            },
            t,
          ),
          o[0]
        );
      }),
      (t.parseTree = function(e, r, t) {
        void 0 === r && (r = []), void 0 === t && (t = C.DEFAULT);
        var o = { type: 'array', offset: -1, length: -1, children: [], parent: void 0 };
        function i(e) {
          'property' === o.type && ((o.length = e - o.offset), (o = o.parent));
        }
        function a(e) {
          return o.children.push(e), e;
        }
        f(
          e,
          {
            onObjectBegin: function(e) {
              o = a({ type: 'object', offset: e, length: -1, parent: o, children: [] });
            },
            onObjectProperty: function(e, t, n) {
              (o = a({ type: 'property', offset: t, length: -1, parent: o, children: [] })).children.push({
                type: 'string',
                value: e,
                offset: t,
                length: n,
                parent: o,
              });
            },
            onObjectEnd: function(e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onArrayBegin: function(e, t) {
              o = a({ type: 'array', offset: e, length: -1, parent: o, children: [] });
            },
            onArrayEnd: function(e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onLiteralValue: function(e, t, n) {
              a({ type: d(e), offset: t, length: n, parent: o, value: e }), i(t + n);
            },
            onSeparator: function(e, t, n) {
              'property' === o.type && (':' === e ? (o.colonOffset = t) : ',' === e && i(t));
            },
            onError: function(e, t, n) {
              r.push({ error: e, offset: t, length: n });
            },
          },
          t,
        );
        var n = o.children[0];
        return n && delete n.parent, n;
      }),
      (t.findNodeAtLocation = function(e, t) {
        if (e) {
          for (var n = e, r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            if ('string' == typeof i) {
              if ('object' !== n.type || !Array.isArray(n.children)) return;
              for (var a = !1, s = 0, c = n.children; s < c.length; s++) {
                var u = c[s];
                if (Array.isArray(u.children) && u.children[0].value === i) {
                  (n = u.children[1]), (a = !0);
                  break;
                }
              }
              if (!a) return;
            } else {
              var f = i;
              if ('array' !== n.type || f < 0 || !Array.isArray(n.children) || f >= n.children.length) return;
              n = n.children[f];
            }
          }
          return n;
        }
      }),
      (t.getNodePath = function e(t) {
        if (!t.parent || !t.parent.children) return [];
        var n = e(t.parent);
        if ('property' === t.parent.type) {
          var r = t.parent.children[0].value;
          n.push(r);
        } else if ('array' === t.parent.type) {
          var o = t.parent.children.indexOf(t);
          -1 !== o && n.push(o);
        }
        return n;
      }),
      (t.getNodeValue = function e(t) {
        switch (t.type) {
          case 'array':
            return t.children.map(e);
          case 'object':
            for (var n = Object.create(null), r = 0, o = t.children; r < o.length; r++) {
              var i = o[r],
                a = i.children[1];
              a && (n[i.children[0].value] = e(a));
            }
            return n;
          case 'null':
          case 'string':
          case 'number':
          case 'boolean':
            return t.value;
          default:
            return;
        }
      }),
      (t.contains = s),
      (t.findNodeAtOffset = function e(t, n, r) {
        if ((void 0 === r && (r = !1), s(t, n, r))) {
          var o = t.children;
          if (Array.isArray(o))
            for (var i = 0; i < o.length && o[i].offset <= n; i++) {
              var a = e(o[i], n, r);
              if (a) return a;
            }
          return t;
        }
      }),
      (t.visit = f),
      (t.stripComments = function(e, t) {
        var n,
          r,
          o = E.createScanner(e),
          i = [],
          a = 0;
        do {
          switch (((r = o.getPosition()), (n = o.scan()))) {
            case 12:
            case 13:
            case 17:
              a !== r && i.push(e.substring(a, r)),
                void 0 !== t && i.push(o.getTokenValue().replace(/[^\r\n]/g, t)),
                (a = o.getPosition());
          }
        } while (17 !== n);
        return i.join('');
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/impl/edit', ['require', 'exports', './format', './parser'], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = e('./format'),
      C = e('./parser');
    function r(e, t, n, r, o) {
      for (
        var i, a = t.slice(), s = C.parseTree(e, []), c = void 0, u = void 0;
        0 < a.length && ((u = a.pop()), void 0 === (c = C.findNodeAtLocation(s, a)) && void 0 !== n);

      )
        n = 'string' == typeof u ? (((i = {})[u] = n), i) : [n];
      if (c) {
        if ('object' === c.type && 'string' == typeof u && Array.isArray(c.children)) {
          var f = C.findNodeAtLocation(c, [u]);
          if (void 0 !== f) {
            if (void 0 !== n) return E(e, { offset: f.offset, length: f.length, content: JSON.stringify(n) }, r);
            if (!f.parent) throw new Error('Malformed AST');
            var d = c.children.indexOf(f.parent),
              l = void 0,
              g = f.parent.offset + f.parent.length;
            return (
              0 < d
                ? (l = (y = c.children[d - 1]).offset + y.length)
                : ((l = c.offset + 1), 1 < c.children.length && (g = c.children[1].offset)),
              E(e, { offset: l, length: g - l, content: '' }, r)
            );
          }
          if (void 0 === n) return [];
          var p = JSON.stringify(u) + ': ' + JSON.stringify(n),
            h = o
              ? o(
                  c.children.map(function(e) {
                    return e.children[0].value;
                  }),
                )
              : c.children.length,
            m = void 0;
          return E(
            e,
            (m =
              0 < h
                ? { offset: (y = c.children[h - 1]).offset + y.length, length: 0, content: ',' + p }
                : 0 === c.children.length
                ? { offset: c.offset + 1, length: 0, content: p }
                : { offset: c.offset + 1, length: 0, content: p + ',' }),
            r,
          );
        }
        if ('array' === c.type && 'number' == typeof u && Array.isArray(c.children)) {
          if (-1 === u) {
            (p = '' + JSON.stringify(n)), (m = void 0);
            if (0 === c.children.length) m = { offset: c.offset + 1, length: 0, content: p };
            else m = { offset: (y = c.children[c.children.length - 1]).offset + y.length, length: 0, content: ',' + p };
            return E(e, m, r);
          }
          if (void 0 === n && 0 <= c.children.length) {
            var v = u,
              b = c.children[v];
            m = void 0;
            if (1 === c.children.length) m = { offset: c.offset + 1, length: c.length - 2, content: '' };
            else if (c.children.length - 1 === v) {
              var y,
                k = (y = c.children[v - 1]).offset + y.length;
              m = { offset: k, length: c.offset + c.length - 2 - k, content: '' };
            } else m = { offset: b.offset, length: c.children[v + 1].offset - b.offset, content: '' };
            return E(e, m, r);
          }
          throw new Error('Array modification not supported yet');
        }
        throw new Error(
          'Can not add ' + ('number' != typeof u ? 'index' : 'property') + ' to parent of type ' + c.type,
        );
      }
      if (void 0 === n) throw new Error('Can not delete in empty document');
      return E(e, { offset: s ? s.offset : 0, length: s ? s.length : 0, content: JSON.stringify(n) }, r);
    }
    function E(e, t, n) {
      var r = f(e, t),
        o = t.offset,
        i = t.offset + t.content.length;
      if (0 === t.length || 0 === t.content.length) {
        for (; 0 < o && !u.isEOL(r, o - 1); ) o--;
        for (; i < r.length && !u.isEOL(r, i); ) i++;
      }
      for (var a = u.format(r, { offset: o, length: i - o }, n), s = a.length - 1; 0 <= s; s--) {
        var c = a[s];
        (r = f(r, c)),
          (o = Math.min(o, c.offset)),
          (i = Math.max(i, c.offset + c.length)),
          (i += c.content.length - c.length);
      }
      return [{ offset: o, length: e.length - (r.length - i) - o, content: r.substring(o, i) }];
    }
    function f(e, t) {
      return e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length);
    }
    (t.removeProperty = function(e, t, n) {
      return r(e, t, void 0, n);
    }),
      (t.setProperty = r),
      (t.applyEdit = f),
      (t.isWS = function(e, t) {
        return -1 !== '\r\n \t'.indexOf(e.charAt(t));
      });
  }),
  (function(e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('jsonc-parser/main', [
          'require',
          'exports',
          './impl/format',
          './impl/edit',
          './impl/scanner',
          './impl/parser',
        ], e);
  })(function(e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = e('./impl/format'),
      o = e('./impl/edit'),
      n = e('./impl/scanner'),
      i = e('./impl/parser');
    (t.createScanner = n.createScanner),
      (t.getLocation = i.getLocation),
      (t.parse = i.parse),
      (t.parseTree = i.parseTree),
      (t.findNodeAtLocation = i.findNodeAtLocation),
      (t.findNodeAtOffset = i.findNodeAtOffset),
      (t.getNodePath = i.getNodePath),
      (t.getNodeValue = i.getNodeValue),
      (t.visit = i.visit),
      (t.stripComments = i.stripComments),
      (t.printParseErrorCode = function(e) {
        switch (e) {
          case 1:
            return 'InvalidSymbol';
          case 2:
            return 'InvalidNumberFormat';
          case 3:
            return 'PropertyNameExpected';
          case 4:
            return 'ValueExpected';
          case 5:
            return 'ColonExpected';
          case 6:
            return 'CommaExpected';
          case 7:
            return 'CloseBraceExpected';
          case 8:
            return 'CloseBracketExpected';
          case 9:
            return 'EndOfFileExpected';
          case 10:
            return 'InvalidCommentToken';
          case 11:
            return 'UnexpectedEndOfComment';
          case 12:
            return 'UnexpectedEndOfString';
          case 13:
            return 'UnexpectedEndOfNumber';
          case 14:
            return 'InvalidUnicode';
          case 15:
            return 'InvalidEscapeCharacter';
          case 16:
            return 'InvalidCharacter';
        }
        return '<unknown ParseErrorCode>';
      }),
      (t.format = function(e, t, n) {
        return r.format(e, t, n);
      }),
      (t.modify = function(e, t, n, r) {
        return o.setProperty(e, t, n, r.formattingOptions, r.getInsertionIndex);
      }),
      (t.applyEdits = function(e, t) {
        for (var n = t.length - 1; 0 <= n; n--) e = o.applyEdit(e, t[n]);
        return e;
      });
  }),
  define('jsonc-parser', ['jsonc-parser/main'], function(e) {
    return e;
  }),
  define('vs/language/json/tokenization', ['require', 'exports', 'jsonc-parser'], function(e, g, p) {
    'use strict';
    Object.defineProperty(g, '__esModule', { value: !0 }),
      (g.createTokenizationSupport = function(o) {
        return {
          getInitialState: function() {
            return new h(null, null, !1);
          },
          tokenize: function(e, t, n, r) {
            return (function(e, t, n, r, o) {
              void 0 === r && (r = 0);
              var i = 0,
                a = !1;
              switch (n.scanError) {
                case 2:
                  (t = '"' + t), (i = 1);
                  break;
                case 1:
                  (t = '/*' + t), (i = 2);
              }
              var s,
                c,
                u = p.createScanner(t),
                f = n.lastWasColon;
              for (c = { tokens: [], endState: n.clone() }; ; ) {
                var d = r + u.getPosition(),
                  l = '';
                if (17 === (s = u.scan())) break;
                if (d === r + u.getPosition())
                  throw new Error('Scanner did not advance, next 3 characters are: ' + t.substr(u.getPosition(), 3));
                switch ((a && (d -= i), (a = 0 < i), s)) {
                  case 1:
                  case 2:
                    (l = g.TOKEN_DELIM_OBJECT), (f = !1);
                    break;
                  case 3:
                  case 4:
                    (l = g.TOKEN_DELIM_ARRAY), (f = !1);
                    break;
                  case 6:
                    (l = g.TOKEN_DELIM_COLON), (f = !0);
                    break;
                  case 5:
                    (l = g.TOKEN_DELIM_COMMA), (f = !1);
                    break;
                  case 8:
                  case 9:
                    (l = g.TOKEN_VALUE_BOOLEAN), (f = !1);
                    break;
                  case 7:
                    (l = g.TOKEN_VALUE_NULL), (f = !1);
                    break;
                  case 10:
                    (l = f ? g.TOKEN_VALUE_STRING : g.TOKEN_PROPERTY_NAME), (f = !1);
                    break;
                  case 11:
                    (l = g.TOKEN_VALUE_NUMBER), (f = !1);
                }
                if (e)
                  switch (s) {
                    case 12:
                      l = g.TOKEN_COMMENT_LINE;
                      break;
                    case 13:
                      l = g.TOKEN_COMMENT_BLOCK;
                  }
                (c.endState = new h(n.getStateData(), u.getTokenError(), f)),
                  c.tokens.push({ startIndex: d, scopes: l });
              }
              return c;
            })(o, e, t, n);
          },
        };
      }),
      (g.TOKEN_DELIM_OBJECT = 'delimiter.bracket.json'),
      (g.TOKEN_DELIM_ARRAY = 'delimiter.array.json'),
      (g.TOKEN_DELIM_COLON = 'delimiter.colon.json'),
      (g.TOKEN_DELIM_COMMA = 'delimiter.comma.json'),
      (g.TOKEN_VALUE_BOOLEAN = 'keyword.json'),
      (g.TOKEN_VALUE_NULL = 'keyword.json'),
      (g.TOKEN_VALUE_STRING = 'string.value.json'),
      (g.TOKEN_VALUE_NUMBER = 'number.json'),
      (g.TOKEN_PROPERTY_NAME = 'string.key.json'),
      (g.TOKEN_COMMENT_BLOCK = 'comment.block.json'),
      (g.TOKEN_COMMENT_LINE = 'comment.line.json');
    var h = (function() {
      function t(e, t, n) {
        (this._state = e), (this.scanError = t), (this.lastWasColon = n);
      }
      return (
        (t.prototype.clone = function() {
          return new t(this._state, this.scanError, this.lastWasColon);
        }),
        (t.prototype.equals = function(e) {
          return (
            e === this ||
            (!!(e && e instanceof t) && this.scanError === e.scanError && this.lastWasColon === e.lastWasColon)
          );
        }),
        (t.prototype.getStateData = function() {
          return this._state;
        }),
        (t.prototype.setStateData = function(e) {
          this._state = e;
        }),
        t
      );
    })();
  }),
  define('vs/language/json/jsonMode', [
    'require',
    'exports',
    './workerManager',
    './languageFeatures',
    './tokenization',
  ], function(e, t, i, a, s) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.setupMode = function(e) {
        var t = [],
          n = new i.WorkerManager(e);
        t.push(n);
        var r = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n.getLanguageServiceWorker.apply(n, e);
          },
          o = e.languageId;
        t.push(monaco.languages.registerCompletionItemProvider(o, new a.CompletionAdapter(r))),
          t.push(monaco.languages.registerHoverProvider(o, new a.HoverAdapter(r))),
          t.push(monaco.languages.registerDocumentSymbolProvider(o, new a.DocumentSymbolAdapter(r))),
          t.push(monaco.languages.registerDocumentFormattingEditProvider(o, new a.DocumentFormattingEditProvider(r))),
          t.push(
            monaco.languages.registerDocumentRangeFormattingEditProvider(
              o,
              new a.DocumentRangeFormattingEditProvider(r),
            ),
          ),
          t.push(new a.DiagnosticsAdapter(o, r, e)),
          t.push(monaco.languages.setTokensProvider(o, s.createTokenizationSupport(!0))),
          t.push(monaco.languages.setLanguageConfiguration(o, c)),
          t.push(monaco.languages.registerColorProvider(o, new a.DocumentColorAdapter(r))),
          t.push(monaco.languages.registerFoldingRangeProvider(o, new a.FoldingRangeAdapter(r)));
      });
    var c = {
      wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
      comments: { lineComment: '//', blockComment: ['/*', '*/'] },
      brackets: [
        ['{', '}'],
        ['[', ']'],
      ],
      autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string'] },
        { open: '[', close: ']', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
      ],
    };
  });
