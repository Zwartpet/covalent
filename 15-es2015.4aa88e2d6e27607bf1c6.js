(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '19Vz': function(e, t, n) {
      !(function(e) {
        function t(e) {
          e.state.placeholder &&
            (e.state.placeholder.parentNode.removeChild(e.state.placeholder), (e.state.placeholder = null));
        }
        function n(e) {
          t(e);
          var n = (e.state.placeholder = document.createElement('pre'));
          (n.style.cssText = 'height: 0; overflow: visible'),
            (n.style.direction = e.getOption('direction')),
            (n.className = 'CodeMirror-placeholder CodeMirror-line-like');
          var r = e.getOption('placeholder');
          'string' == typeof r && (r = document.createTextNode(r)),
            n.appendChild(r),
            e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild);
        }
        function r(e) {
          o(e) && n(e);
        }
        function i(e) {
          var r = e.getWrapperElement(),
            i = o(e);
          (r.className = r.className.replace(' CodeMirror-empty', '') + (i ? ' CodeMirror-empty' : '')),
            i ? n(e) : t(e);
        }
        function o(e) {
          return 1 === e.lineCount() && '' === e.getLine(0);
        }
        e.defineOption('placeholder', '', function(n, o, a) {
          var s = a && a != e.Init;
          if (o && !s) n.on('blur', r), n.on('change', i), n.on('swapDoc', i), i(n);
          else if (!o && s) {
            n.off('blur', r), n.off('change', i), n.off('swapDoc', i), t(n);
            var l = n.getWrapperElement();
            l.className = l.className.replace(' CodeMirror-empty', '');
          }
          o && !n.hasFocus() && r(n);
        });
      })(n('VrN/'));
    },
    '1PoN': function(e, t, n) {
      'use strict';
      var r = n('VrN/');
      n('HvfG'), n('7RDt'), n('bXjK'), n('lZu9'), n('nrkQ'), n('19Vz'), n('mUiM'), n('uTOq'), n('RKCW'), n('1eCo');
      var i = n('6mXC'),
        o = n('DlQD'),
        a = /Mac/.test(navigator.platform),
        s = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g),
        l = {
          toggleBold: x,
          toggleItalic: y,
          drawLink: A,
          toggleHeadingSmaller: k,
          toggleHeadingBigger: S,
          drawImage: _,
          toggleBlockquote: C,
          toggleOrderedList: D,
          toggleUnorderedList: O,
          toggleCodeBlock: w,
          togglePreview: R,
          toggleStrikethrough: b,
          toggleHeading1: M,
          toggleHeading2: L,
          toggleHeading3: T,
          cleanBlock: N,
          drawTable: P,
          drawHorizontalRule: F,
          undo: z,
          redo: I,
          toggleSideBySide: H,
          toggleFullScreen: v,
        },
        c = {
          toggleBold: 'Cmd-B',
          toggleItalic: 'Cmd-I',
          drawLink: 'Cmd-K',
          toggleHeadingSmaller: 'Cmd-H',
          toggleHeadingBigger: 'Shift-Cmd-H',
          cleanBlock: 'Cmd-E',
          drawImage: 'Cmd-Alt-I',
          toggleBlockquote: "Cmd-'",
          toggleOrderedList: 'Cmd-Alt-L',
          toggleUnorderedList: 'Cmd-L',
          toggleCodeBlock: 'Cmd-Alt-C',
          togglePreview: 'Cmd-P',
          toggleSideBySide: 'F9',
          toggleFullScreen: 'F11',
        },
        u = function(e) {
          for (var t in l) if (l[t] === e) return t;
          return null;
        },
        d = function() {
          var e,
            t = !1;
          return (
            (e = navigator.userAgent || navigator.vendor || window.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              e,
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                e.substr(0, 4),
              )) &&
              (t = !0),
            t
          );
        };
      function h(e) {
        return a ? e.replace('Ctrl', 'Cmd') : e.replace('Cmd', 'Ctrl');
      }
      function f(e, t, n) {
        e = e || {};
        var r = document.createElement('button');
        (r.className = e.name),
          r.setAttribute('type', 'button'),
          (t = null == t || t),
          e.name && e.name in n && (l[e.name] = e.action),
          e.title &&
            t &&
            ((r.title = (function(e, t, n) {
              var r,
                i = e;
              return t && n[(r = u(t))] && (i += ' (' + h(n[r]) + ')'), i;
            })(e.title, e.action, n)),
            a && ((r.title = r.title.replace('Ctrl', '\u2318')), (r.title = r.title.replace('Alt', '\u2325')))),
          e.noDisable && r.classList.add('no-disable'),
          e.noMobile && r.classList.add('no-mobile');
        for (var i = e.className.split(' '), o = [], s = 0; s < i.length; s++) {
          var c = i[s];
          c.match(/^fa([srlb]|(-[\w-]*)|$)/) ? o.push(c) : r.classList.add(c);
        }
        r.tabIndex = -1;
        for (var d = document.createElement('i'), f = 0; f < o.length; f++) d.classList.add(o[f]);
        return r.appendChild(d), r;
      }
      function p() {
        var e = document.createElement('i');
        return (e.className = 'separator'), (e.innerHTML = '|'), e;
      }
      function m(e, t) {
        t = t || e.getCursor('start');
        var n = e.getTokenAt(t);
        if (!n.type) return {};
        for (var r, i, o = n.type.split(' '), a = {}, s = 0; s < o.length; s++)
          'strong' === (r = o[s])
            ? (a.bold = !0)
            : 'variable-2' === r
            ? ((i = e.getLine(t.line)), /^\s*\d+\.\s/.test(i) ? (a['ordered-list'] = !0) : (a['unordered-list'] = !0))
            : 'atom' === r
            ? (a.quote = !0)
            : 'em' === r
            ? (a.italic = !0)
            : 'quote' === r
            ? (a.quote = !0)
            : 'strikethrough' === r
            ? (a.strikethrough = !0)
            : 'comment' === r
            ? (a.code = !0)
            : 'link' === r
            ? (a.link = !0)
            : 'tag' === r
            ? (a.image = !0)
            : r.match(/^header(-[1-6])?$/) && (a[r.replace('header', 'heading')] = !0);
        return a;
      }
      var g = '';
      function v(e) {
        var t = e.codemirror;
        t.setOption('fullScreen', !t.getOption('fullScreen')),
          t.getOption('fullScreen')
            ? ((g = document.body.style.overflow), (document.body.style.overflow = 'hidden'))
            : (document.body.style.overflow = g);
        var n = t.getWrapperElement();
        if (
          (/fullscreen/.test(n.previousSibling.className)
            ? (n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, ''))
            : (n.previousSibling.className += ' fullscreen'),
          e.toolbarElements && e.toolbarElements.fullscreen)
        ) {
          var r = e.toolbarElements.fullscreen;
          /active/.test(r.className)
            ? (r.className = r.className.replace(/\s*active\s*/g, ''))
            : (r.className += ' active');
        }
        var i = t.getWrapperElement().nextSibling;
        /editor-preview-active-side/.test(i.className) && H(e),
          e.options.onToggleFullScreen && e.options.onToggleFullScreen(t.getOption('fullScreen') || !1);
      }
      function x(e) {
        q(e, 'bold', e.options.blockStyles.bold);
      }
      function y(e) {
        q(e, 'italic', e.options.blockStyles.italic);
      }
      function b(e) {
        q(e, 'strikethrough', '~~');
      }
      function w(e) {
        var t = e.options.blockStyles.code;
        function n(e) {
          if ('object' != typeof e)
            throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " +
              typeof e +
              ': ' +
              e;
          return e.styles && e.styles[2] && -1 !== e.styles[2].indexOf('formatting-code-block');
        }
        function r(e) {
          return e.state.base.base || e.state.base;
        }
        function i(e, t, i, o, a) {
          (i = i || e.getLineHandle(t)),
            (o = o || e.getTokenAt({ line: t, ch: 1 })),
            (a = a || (!!i.text && e.getTokenAt({ line: t, ch: i.text.length - 1 })));
          var s = o.type ? o.type.split(' ') : [];
          return a && r(a).indentedCode
            ? 'indented'
            : -1 !== s.indexOf('comment') && (r(o).fencedChars || r(a).fencedChars || n(i) ? 'fenced' : 'single');
        }
        var o,
          a,
          s,
          l = e.codemirror,
          c = l.getCursor('start'),
          u = l.getCursor('end'),
          d = l.getTokenAt({ line: c.line, ch: c.ch || 1 }),
          h = l.getLineHandle(c.line),
          f = i(l, c.line, h, d);
        if ('single' === f) {
          var p = h.text.slice(0, c.ch).replace('`', ''),
            m = h.text.slice(c.ch).replace('`', '');
          l.replaceRange(p + m, { line: c.line, ch: 0 }, { line: c.line, ch: 99999999999999 }),
            c.ch--,
            c !== u && u.ch--,
            l.setSelection(c, u),
            l.focus();
        } else if ('fenced' === f)
          if (c.line !== u.line || c.ch !== u.ch) {
            for (o = c.line; o >= 0 && !n((h = l.getLineHandle(o))); o--);
            var g,
              v,
              x,
              y,
              b = r(l.getTokenAt({ line: o, ch: 1 })).fencedChars;
            n(l.getLineHandle(c.line))
              ? ((g = ''), (v = c.line))
              : n(l.getLineHandle(c.line - 1))
              ? ((g = ''), (v = c.line - 1))
              : ((g = b + '\n'), (v = c.line)),
              n(l.getLineHandle(u.line))
                ? ((x = ''), (y = u.line), 0 === u.ch && (y += 1))
                : 0 !== u.ch && n(l.getLineHandle(u.line + 1))
                ? ((x = ''), (y = u.line + 1))
                : ((x = b + '\n'), (y = u.line + 1)),
              0 === u.ch && (y -= 1),
              l.operation(function() {
                l.replaceRange(x, { line: y, ch: 0 }, { line: y + (x ? 0 : 1), ch: 0 }),
                  l.replaceRange(g, { line: v, ch: 0 }, { line: v + (g ? 0 : 1), ch: 0 });
              }),
              l.setSelection({ line: v + (g ? 1 : 0), ch: 0 }, { line: y + (g ? 1 : -1), ch: 0 }),
              l.focus();
          } else {
            var w = c.line;
            if (
              (n(l.getLineHandle(c.line)) &&
                ('fenced' === i(l, c.line + 1) ? ((o = c.line), (w = c.line + 1)) : ((a = c.line), (w = c.line - 1))),
              void 0 === o)
            )
              for (o = w; o >= 0 && !n((h = l.getLineHandle(o))); o--);
            if (void 0 === a) for (s = l.lineCount(), a = w; a < s && !n((h = l.getLineHandle(a))); a++);
            l.operation(function() {
              l.replaceRange('', { line: o, ch: 0 }, { line: o + 1, ch: 0 }),
                l.replaceRange('', { line: a - 1, ch: 0 }, { line: a, ch: 0 });
            }),
              l.focus();
          }
        else if ('indented' === f) {
          if (c.line !== u.line || c.ch !== u.ch) (o = c.line), (a = u.line), 0 === u.ch && a--;
          else {
            for (o = c.line; o >= 0; o--)
              if (!(h = l.getLineHandle(o)).text.match(/^\s*$/) && 'indented' !== i(l, o, h)) {
                o += 1;
                break;
              }
            for (s = l.lineCount(), a = c.line; a < s; a++)
              if (!(h = l.getLineHandle(a)).text.match(/^\s*$/) && 'indented' !== i(l, a, h)) {
                a -= 1;
                break;
              }
          }
          var C = l.getLineHandle(a + 1),
            k = C && l.getTokenAt({ line: a + 1, ch: C.text.length - 1 });
          k && r(k).indentedCode && l.replaceRange('\n', { line: a + 1, ch: 0 });
          for (var S = o; S <= a; S++) l.indentLine(S, 'subtract');
          l.focus();
        } else
          (c.line === u.line && c.ch === u.ch && 0 === c.ch) || c.line !== u.line
            ? (function(e, t, n, r) {
                var i = t.line + 1,
                  o = n.line + 1,
                  a = t.line !== n.line,
                  s = '\n' + r;
                a && o++,
                  a && 0 === n.ch && ((s = r + '\n'), o--),
                  B(e, !1, [r + '\n', s]),
                  e.setSelection({ line: i, ch: 0 }, { line: o, ch: 0 });
              })(l, c, u, t)
            : B(l, !1, ['`', '`']);
      }
      function C(e) {
        j(e.codemirror, 'quote');
      }
      function k(e) {
        W(e.codemirror, 'smaller');
      }
      function S(e) {
        W(e.codemirror, 'bigger');
      }
      function M(e) {
        W(e.codemirror, void 0, 1);
      }
      function L(e) {
        W(e.codemirror, void 0, 2);
      }
      function T(e) {
        W(e.codemirror, void 0, 3);
      }
      function O(e) {
        j(e.codemirror, 'unordered-list');
      }
      function D(e) {
        j(e.codemirror, 'ordered-list');
      }
      function N(e) {
        !(function(e) {
          if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className))
            for (var t, n = e.getCursor('start'), r = e.getCursor('end'), i = n.line; i <= r.line; i++)
              (t = (t = e.getLine(i)).replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, '')),
                e.replaceRange(t, { line: i, ch: 0 }, { line: i, ch: 99999999999999 });
        })(e.codemirror);
      }
      function A(e) {
        var t = e.codemirror,
          n = m(t),
          r = e.options,
          i = 'https://';
        if (r.promptURLs && !(i = prompt(r.promptTexts.link, 'https://'))) return !1;
        B(t, n.link, r.insertTexts.link, i);
      }
      function _(e) {
        var t = e.codemirror,
          n = m(t),
          r = e.options,
          i = 'https://';
        if (r.promptURLs && !(i = prompt(r.promptTexts.image, 'https://'))) return !1;
        B(t, n.image, r.insertTexts.image, i);
      }
      function E(e, t) {
        var n = e.codemirror,
          r = m(n),
          i = e.options,
          o = t.substr(t.lastIndexOf('/') + 1);
        B(n, r.image, i.insertTexts.uploadedImage, t),
          e.updateStatusBar('upload-image', e.options.imageTexts.sbOnUploaded.replace('#image_name#', o)),
          setTimeout(function() {
            e.updateStatusBar('upload-image', e.options.imageTexts.sbInit);
          }, 1e3);
      }
      function P(e) {
        var t = e.codemirror;
        B(t, m(t).table, e.options.insertTexts.table);
      }
      function F(e) {
        var t = e.codemirror;
        B(t, m(t).image, e.options.insertTexts.horizontalRule);
      }
      function z(e) {
        var t = e.codemirror;
        t.undo(), t.focus();
      }
      function I(e) {
        var t = e.codemirror;
        t.redo(), t.focus();
      }
      function H(e) {
        var t = e.codemirror,
          n = t.getWrapperElement(),
          r = n.nextSibling,
          i = e.toolbarElements && e.toolbarElements['side-by-side'],
          o = !1;
        /editor-preview-active-side/.test(r.className)
          ? ((r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, '')),
            i && (i.className = i.className.replace(/\s*active\s*/g, '')),
            (n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, ' ')))
          : (setTimeout(function() {
              t.getOption('fullScreen') || v(e), (r.className += ' editor-preview-active-side');
            }, 1),
            i && (i.className += ' active'),
            (n.className += ' CodeMirror-sided'),
            (o = !0));
        var a = n.lastChild;
        if (/editor-preview-active/.test(a.className)) {
          a.className = a.className.replace(/\s*editor-preview-active\s*/g, '');
          var s = e.toolbarElements.preview,
            l = n.previousSibling;
          (s.className = s.className.replace(/\s*active\s*/g, '')),
            (l.className = l.className.replace(/\s*disabled-for-preview*/g, ''));
        }
        if (
          (t.sideBySideRenderingFunction ||
            (t.sideBySideRenderingFunction = function() {
              var t = e.options.previewRender(e.value(), r);
              null != t && (r.innerHTML = t);
            }),
          o)
        ) {
          var c = e.options.previewRender(e.value(), r);
          null != c && (r.innerHTML = c), t.on('update', t.sideBySideRenderingFunction);
        } else t.off('update', t.sideBySideRenderingFunction);
        t.refresh();
      }
      function R(e) {
        var t = e.codemirror,
          n = t.getWrapperElement(),
          r = n.previousSibling,
          i = !!e.options.toolbar && e.toolbarElements.preview,
          o = n.lastChild;
        if (!o || !/editor-preview-full/.test(o.className)) {
          if ((((o = document.createElement('div')).className = 'editor-preview-full'), e.options.previewClass))
            if (Array.isArray(e.options.previewClass))
              for (var a = 0; a < e.options.previewClass.length; a++) o.className += ' ' + e.options.previewClass[a];
            else 'string' == typeof e.options.previewClass && (o.className += ' ' + e.options.previewClass);
          n.appendChild(o);
        }
        /editor-preview-active/.test(o.className)
          ? ((o.className = o.className.replace(/\s*editor-preview-active\s*/g, '')),
            i &&
              ((i.className = i.className.replace(/\s*active\s*/g, '')),
              (r.className = r.className.replace(/\s*disabled-for-preview*/g, ''))))
          : (setTimeout(function() {
              o.className += ' editor-preview-active';
            }, 1),
            i && ((i.className += ' active'), (r.className += ' disabled-for-preview'))),
          (o.innerHTML = e.options.previewRender(e.value(), o));
        var s = t.getWrapperElement().nextSibling;
        /editor-preview-active-side/.test(s.className) && H(e);
      }
      function B(e, t, n, r) {
        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
          var i,
            o = n[0],
            a = n[1],
            s = {},
            l = {};
          Object.assign(s, e.getCursor('start')),
            Object.assign(l, e.getCursor('end')),
            r && ((o = o.replace('#url#', r)), (a = a.replace('#url#', r))),
            t
              ? ((o = (i = e.getLine(s.line)).slice(0, s.ch)),
                (a = i.slice(s.ch)),
                e.replaceRange(o + a, { line: s.line, ch: 0 }))
              : ((i = e.getSelection()),
                e.replaceSelection(o + i + a),
                (s.ch += o.length),
                s !== l && (l.ch += o.length)),
            e.setSelection(s, l),
            e.focus();
        }
      }
      function W(e, t, n) {
        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
          for (var r = e.getCursor('start'), i = e.getCursor('end'), o = r.line; o <= i.line; o++)
            !(function(r) {
              var i = e.getLine(r),
                o = i.search(/[^#]/);
              (i =
                void 0 !== t
                  ? o <= 0
                    ? 'bigger' == t
                      ? '###### ' + i
                      : '# ' + i
                    : 6 == o && 'smaller' == t
                    ? i.substr(7)
                    : 1 == o && 'bigger' == t
                    ? i.substr(2)
                    : 'bigger' == t
                    ? i.substr(1)
                    : '#' + i
                  : 1 == n
                  ? o <= 0
                    ? '# ' + i
                    : o == n
                    ? i.substr(o + 1)
                    : '# ' + i.substr(o + 1)
                  : 2 == n
                  ? o <= 0
                    ? '## ' + i
                    : o == n
                    ? i.substr(o + 1)
                    : '## ' + i.substr(o + 1)
                  : o <= 0
                  ? '### ' + i
                  : o == n
                  ? i.substr(o + 1)
                  : '### ' + i.substr(o + 1)),
                e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 });
            })(o);
          e.focus();
        }
      }
      function j(e, t) {
        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
          for (
            var n = /^(\s*)(\*|-|\+|\d*\.)(\s+)/,
              r = /^\s*/,
              i = m(e),
              o = e.getCursor('start'),
              a = e.getCursor('end'),
              s = { 'quote': /^(\s*)>\s+/, 'unordered-list': n, 'ordered-list': n },
              l = function(e, t, i) {
                var o = n.exec(t),
                  a = (function(e, t) {
                    return { 'quote': '>', 'unordered-list': '*', 'ordered-list': '%%i.' }[e].replace('%%i', t);
                  })(e, c);
                return (
                  null !== o
                    ? ((function(e, t) {
                        var n = new RegExp({ 'quote': '>', 'unordered-list': '*', 'ordered-list': '\\d+.' }[e]);
                        return t && n.test(t);
                      })(e, o[2]) && (a = ''),
                      (t = o[1] + a + o[3] + t.replace(r, '').replace(s[e], '$1')))
                    : 0 == i && (t = a + ' ' + t),
                  t
                );
              },
              c = 1,
              u = o.line;
            u <= a.line;
            u++
          )
            !(function(n) {
              var r = e.getLine(n);
              i[t]
                ? (r = r.replace(s[t], '$1'))
                : ('unordered-list' == t && (r = l('ordered-list', r, !0)), (r = l(t, r, !1)), (c += 1)),
                e.replaceRange(r, { line: n, ch: 0 }, { line: n, ch: 99999999999999 });
            })(u);
          e.focus();
        }
      }
      function q(e, t, n, r) {
        if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) {
          r = void 0 === r ? n : r;
          var i,
            o = e.codemirror,
            a = m(o),
            s = n,
            l = r,
            c = o.getCursor('start'),
            u = o.getCursor('end');
          a[t]
            ? ((s = (i = o.getLine(c.line)).slice(0, c.ch)),
              (l = i.slice(c.ch)),
              'bold' == t
                ? ((s = s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, '')), (l = l.replace(/(\*\*|__)/, '')))
                : 'italic' == t
                ? ((s = s.replace(/(\*|_)(?![\s\S]*(\*|_))/, '')), (l = l.replace(/(\*|_)/, '')))
                : 'strikethrough' == t &&
                  ((s = s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, '')), (l = l.replace(/(\*\*|~~)/, ''))),
              o.replaceRange(s + l, { line: c.line, ch: 0 }, { line: c.line, ch: 99999999999999 }),
              'bold' == t || 'strikethrough' == t
                ? ((c.ch -= 2), c !== u && (u.ch -= 2))
                : 'italic' == t && ((c.ch -= 1), c !== u && (u.ch -= 1)))
            : ((i = o.getSelection()),
              'bold' == t
                ? (i = (i = i.split('**').join('')).split('__').join(''))
                : 'italic' == t
                ? (i = (i = i.split('*').join('')).split('_').join(''))
                : 'strikethrough' == t && (i = i.split('~~').join('')),
              o.replaceSelection(s + i + l),
              (c.ch += n.length),
              (u.ch = c.ch + i.length)),
            o.setSelection(c, u),
            o.focus();
        }
      }
      function U(e, t) {
        if (Math.abs(e) < 1024) return '' + e + t[0];
        var n = 0;
        do {
          (e /= 1024), ++n;
        } while (Math.abs(e) >= 1024 && n < t.length);
        return '' + e.toFixed(1) + t[n];
      }
      function $(e, t) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            (e[n] =
              t[n] instanceof Array
                ? t[n].concat(e[n] instanceof Array ? e[n] : [])
                : null !== t[n] && 'object' == typeof t[n] && t[n].constructor === Object
                ? $(e[n] || {}, t[n])
                : t[n]);
        return e;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) e = $(e, arguments[t]);
        return e;
      }
      function V(e) {
        var t = e.match(
            /[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
          ),
          n = 0;
        if (null === t) return n;
        for (var r = 0; r < t.length; r++) t[r].charCodeAt(0) >= 19968 ? (n += t[r].length) : (n += 1);
        return n;
      }
      var X = {
          'bold': { name: 'bold', action: x, className: 'fa fa-bold', title: 'Bold', default: !0 },
          'italic': { name: 'italic', action: y, className: 'fa fa-italic', title: 'Italic', default: !0 },
          'strikethrough': {
            name: 'strikethrough',
            action: b,
            className: 'fa fa-strikethrough',
            title: 'Strikethrough',
          },
          'heading': {
            name: 'heading',
            action: k,
            className: 'fa fa-header fa-heading',
            title: 'Heading',
            default: !0,
          },
          'heading-smaller': {
            name: 'heading-smaller',
            action: k,
            className: 'fa fa-header fa-heading header-smaller',
            title: 'Smaller Heading',
          },
          'heading-bigger': {
            name: 'heading-bigger',
            action: S,
            className: 'fa fa-header fa-heading header-bigger',
            title: 'Bigger Heading',
          },
          'heading-1': {
            name: 'heading-1',
            action: M,
            className: 'fa fa-header fa-heading header-1',
            title: 'Big Heading',
          },
          'heading-2': {
            name: 'heading-2',
            action: L,
            className: 'fa fa-header fa-heading header-2',
            title: 'Medium Heading',
          },
          'heading-3': {
            name: 'heading-3',
            action: T,
            className: 'fa fa-header fa-heading header-3',
            title: 'Small Heading',
          },
          'separator-1': { name: 'separator-1' },
          'code': { name: 'code', action: w, className: 'fa fa-code', title: 'Code' },
          'quote': { name: 'quote', action: C, className: 'fa fa-quote-left', title: 'Quote', default: !0 },
          'unordered-list': {
            name: 'unordered-list',
            action: O,
            className: 'fa fa-list-ul',
            title: 'Generic List',
            default: !0,
          },
          'ordered-list': {
            name: 'ordered-list',
            action: D,
            className: 'fa fa-list-ol',
            title: 'Numbered List',
            default: !0,
          },
          'clean-block': { name: 'clean-block', action: N, className: 'fa fa-eraser', title: 'Clean block' },
          'separator-2': { name: 'separator-2' },
          'link': { name: 'link', action: A, className: 'fa fa-link', title: 'Create Link', default: !0 },
          'image': { name: 'image', action: _, className: 'fa fa-image', title: 'Insert Image', default: !0 },
          'upload-image': {
            name: 'upload-image',
            action: function(e) {
              e.openBrowseFileWindow();
            },
            className: 'fa fa-image',
            title: 'Import an image',
          },
          'table': { name: 'table', action: P, className: 'fa fa-table', title: 'Insert Table' },
          'horizontal-rule': {
            name: 'horizontal-rule',
            action: F,
            className: 'fa fa-minus',
            title: 'Insert Horizontal Line',
          },
          'separator-3': { name: 'separator-3' },
          'preview': {
            name: 'preview',
            action: R,
            className: 'fa fa-eye',
            noDisable: !0,
            title: 'Toggle Preview',
            default: !0,
          },
          'side-by-side': {
            name: 'side-by-side',
            action: H,
            className: 'fa fa-columns',
            noDisable: !0,
            noMobile: !0,
            title: 'Toggle Side by Side',
            default: !0,
          },
          'fullscreen': {
            name: 'fullscreen',
            action: v,
            className: 'fa fa-arrows-alt',
            noDisable: !0,
            noMobile: !0,
            title: 'Toggle Fullscreen',
            default: !0,
          },
          'separator-4': { name: 'separator-4' },
          'guide': {
            name: 'guide',
            action: 'https://www.markdownguide.org/basic-syntax/',
            className: 'fa fa-question-circle',
            noDisable: !0,
            title: 'Markdown Guide',
            default: !0,
          },
          'separator-5': { name: 'separator-5' },
          'undo': { name: 'undo', action: z, className: 'fa fa-undo', noDisable: !0, title: 'Undo' },
          'redo': { name: 'redo', action: I, className: 'fa fa-repeat fa-redo', noDisable: !0, title: 'Redo' },
        },
        K = {
          link: ['[', '](#url#)'],
          image: ['![](', '#url#)'],
          uploadedImage: ['![](#url#)', ''],
          table: [
            '',
            '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n',
          ],
          horizontalRule: ['', '\n\n-----\n\n'],
        },
        Z = { link: 'URL for the link:', image: 'URL of the image:' },
        Y = { bold: '**', code: '```', italic: '*' },
        Q = {
          sbInit: 'Attach files by drag and dropping or pasting from clipboard.',
          sbOnDragEnter: 'Drop image to upload it.',
          sbOnDrop: 'Uploading image #images_names#...',
          sbProgress: 'Uploading #file_name#: #progress#%',
          sbOnUploaded: 'Uploaded #image_name#',
          sizeUnits: 'b,Kb,Mb',
        },
        J = {
          noFileGiven: 'You must select a file.',
          typeNotAllowed: 'This image type is not allowed.',
          fileTooLarge: 'Image #image_name# is too big (#image_size#).\nMaximum file size is #image_max_size#.',
          importError: 'Something went wrong when uploading the image #image_name#.',
        };
      function ee(e) {
        (e = e || {}).parent = this;
        var t = !0;
        if ((!1 === e.autoDownloadFontAwesome && (t = !1), !0 !== e.autoDownloadFontAwesome))
          for (var n = document.styleSheets, r = 0; r < n.length; r++)
            n[r].href && n[r].href.indexOf('//maxcdn.bootstrapcdn.com/font-awesome/') > -1 && (t = !1);
        if (t) {
          var i = document.createElement('link');
          (i.rel = 'stylesheet'),
            (i.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'),
            document.getElementsByTagName('head')[0].appendChild(i);
        }
        if (e.element) this.element = e.element;
        else if (null === e.element) return void console.log('EasyMDE: Error. No element was found.');
        if (void 0 === e.toolbar)
          for (var o in ((e.toolbar = []), X))
            Object.prototype.hasOwnProperty.call(X, o) &&
              (-1 != o.indexOf('separator-') && e.toolbar.push('|'),
              (!0 === X[o].default ||
                (e.showIcons && e.showIcons.constructor === Array && -1 != e.showIcons.indexOf(o))) &&
                e.toolbar.push(o));
        if (
          (Object.prototype.hasOwnProperty.call(e, 'previewClass') || (e.previewClass = 'editor-preview'),
          Object.prototype.hasOwnProperty.call(e, 'status') ||
            ((e.status = ['autosave', 'lines', 'words', 'cursor']), e.uploadImage && e.status.unshift('upload-image')),
          e.previewRender ||
            (e.previewRender = function(e) {
              return this.parent.markdown(e);
            }),
          (e.parsingConfig = G({ highlightFormatting: !0 }, e.parsingConfig || {})),
          (e.insertTexts = G({}, K, e.insertTexts || {})),
          (e.promptTexts = G({}, Z, e.promptTexts || {})),
          (e.blockStyles = G({}, Y, e.blockStyles || {})),
          (e.shortcuts = G({}, c, e.shortcuts || {})),
          (e.minHeight = e.minHeight || '300px'),
          (e.errorCallback =
            e.errorCallback ||
            function(e) {
              alert(e);
            }),
          (e.uploadImage = e.uploadImage || !1),
          (e.imageMaxSize = e.imageMaxSize || 2097152),
          (e.imageAccept = e.imageAccept || 'image/png, image/jpeg'),
          (e.imageTexts = G({}, Q, e.imageTexts || {})),
          (e.errorMessages = G({}, J, e.errorMessages || {})),
          null != e.autosave &&
            null != e.autosave.unique_id &&
            '' != e.autosave.unique_id &&
            (e.autosave.uniqueId = e.autosave.unique_id),
          (this.options = e),
          this.render(),
          !e.initialValue ||
            (this.options.autosave && !0 === this.options.autosave.foundSavedValue) ||
            this.value(e.initialValue),
          e.uploadImage)
        ) {
          var a = this;
          this.codemirror.on('dragenter', function(e, t) {
            a.updateStatusBar('upload-image', a.options.imageTexts.sbOnDragEnter),
              t.stopPropagation(),
              t.preventDefault();
          }),
            this.codemirror.on('dragend', function(e, t) {
              a.updateStatusBar('upload-image', a.options.imageTexts.sbInit), t.stopPropagation(), t.preventDefault();
            }),
            this.codemirror.on('dragleave', function(e, t) {
              a.updateStatusBar('upload-image', a.options.imageTexts.sbInit), t.stopPropagation(), t.preventDefault();
            }),
            this.codemirror.on('dragover', function(e, t) {
              a.updateStatusBar('upload-image', a.options.imageTexts.sbOnDragEnter),
                t.stopPropagation(),
                t.preventDefault();
            }),
            this.codemirror.on('drop', function(t, n) {
              n.stopPropagation(),
                n.preventDefault(),
                e.imageUploadFunction
                  ? a.uploadImagesUsingCustomFunction(e.imageUploadFunction, n.dataTransfer.files)
                  : a.uploadImages(n.dataTransfer.files);
            }),
            this.codemirror.on('paste', function(t, n) {
              e.imageUploadFunction
                ? a.uploadImagesUsingCustomFunction(e.imageUploadFunction, n.clipboardData.files)
                : a.uploadImages(n.clipboardData.files);
            });
        }
      }
      function te() {
        if ('object' != typeof localStorage) return !1;
        try {
          localStorage.setItem('smde_localStorage', 1), localStorage.removeItem('smde_localStorage');
        } catch (e) {
          return !1;
        }
        return !0;
      }
      (ee.prototype.uploadImages = function(e, t, n) {
        if (0 !== e.length) {
          for (var r = [], i = 0; i < e.length; i++) r.push(e[i].name), this.uploadImage(e[i], t, n);
          this.updateStatusBar(
            'upload-image',
            this.options.imageTexts.sbOnDrop.replace('#images_names#', r.join(', ')),
          );
        }
      }),
        (ee.prototype.uploadImagesUsingCustomFunction = function(e, t) {
          if (0 !== t.length) {
            for (var n = [], r = 0; r < t.length; r++) n.push(t[r].name), this.uploadImageUsingCustomFunction(e, t[r]);
            this.updateStatusBar(
              'upload-image',
              this.options.imageTexts.sbOnDrop.replace('#images_names#', n.join(', ')),
            );
          }
        }),
        (ee.prototype.updateStatusBar = function(e, t) {
          var n = this.gui.statusbar.getElementsByClassName(e);
          1 === n.length
            ? (this.gui.statusbar.getElementsByClassName(e)[0].textContent = t)
            : 0 === n.length
            ? console.log('EasyMDE: status bar item ' + e + ' was not found.')
            : console.log('EasyMDE: Several status bar items named ' + e + ' was found.');
        }),
        (ee.prototype.markdown = function(e) {
          if (o) {
            var t;
            if (
              (((t =
                this.options && this.options.renderingConfig && this.options.renderingConfig.markedOptions
                  ? this.options.renderingConfig.markedOptions
                  : {}).breaks =
                !this.options || !this.options.renderingConfig || !1 !== this.options.renderingConfig.singleLineBreaks),
              this.options &&
                this.options.renderingConfig &&
                !0 === this.options.renderingConfig.codeSyntaxHighlighting)
            ) {
              var n = this.options.renderingConfig.hljs || window.hljs;
              n &&
                (t.highlight = function(e) {
                  return n.highlightAuto(e).value;
                });
            }
            return (
              o.setOptions(t),
              (function(e) {
                for (var t; null !== (t = s.exec(e)); ) {
                  var n = t[0];
                  if (-1 === n.indexOf('target=')) {
                    var r = n.replace(/>$/, ' target="_blank">');
                    e = e.replace(n, r);
                  }
                }
                return e;
              })(o(e))
            );
          }
        }),
        (ee.prototype.render = function(e) {
          if (
            (e || (e = this.element || document.getElementsByTagName('textarea')[0]),
            !this._rendered || this._rendered !== e)
          ) {
            this.element = e;
            var t,
              n,
              o = this.options,
              a = this,
              s = {};
            for (var c in o.shortcuts)
              null !== o.shortcuts[c] &&
                null !== l[c] &&
                (function(e) {
                  s[h(o.shortcuts[e])] = function() {
                    var t = l[e];
                    'function' == typeof t ? t(a) : 'string' == typeof t && window.open(t, '_blank');
                  };
                })(c);
            if (
              ((s.Enter = 'newlineAndIndentContinueMarkdownList'),
              (s.Tab = 'tabAndIndentMarkdownList'),
              (s['Shift-Tab'] = 'shiftTabAndUnindentMarkdownList'),
              (s.Esc = function(e) {
                e.getOption('fullScreen') && v(a);
              }),
              document.addEventListener(
                'keydown',
                function(e) {
                  27 == (e = e || window.event).keyCode && a.codemirror.getOption('fullScreen') && v(a);
                },
                !1,
              ),
              !1 !== o.spellChecker
                ? ((t = 'spell-checker'),
                  ((n = o.parsingConfig).name = 'gfm'),
                  (n.gitHubSpice = !1),
                  i({ codeMirrorInstance: r }))
                : (((t = o.parsingConfig).name = 'gfm'), (t.gitHubSpice = !1)),
              (this.codemirror = r.fromTextArea(e, {
                mode: t,
                backdrop: n,
                theme: null != o.theme ? o.theme : 'easymde',
                tabSize: null != o.tabSize ? o.tabSize : 2,
                indentUnit: null != o.tabSize ? o.tabSize : 2,
                indentWithTabs: !1 !== o.indentWithTabs,
                lineNumbers: !1,
                autofocus: !0 === o.autofocus,
                extraKeys: s,
                lineWrapping: !1 !== o.lineWrapping,
                allowDropFileTypes: ['text/plain'],
                placeholder: o.placeholder || e.getAttribute('placeholder') || '',
                styleSelectedText: null != o.styleSelectedText ? o.styleSelectedText : !d(),
                configureMouse: function(e, t, n) {
                  return { addNew: !1 };
                },
              })),
              (this.codemirror.getScrollerElement().style.minHeight = o.minHeight),
              !0 === o.forceSync)
            ) {
              var u = this.codemirror;
              u.on('change', function() {
                u.save();
              });
            }
            (this.gui = {}),
              !1 !== o.toolbar && (this.gui.toolbar = this.createToolbar()),
              !1 !== o.status && (this.gui.statusbar = this.createStatusbar()),
              null != o.autosave && !0 === o.autosave.enabled && this.autosave(),
              (this.gui.sideBySide = this.createSideBySide()),
              (this._rendered = this.element);
            var f = this.codemirror;
            setTimeout(
              function() {
                f.refresh();
              }.bind(f),
              0,
            );
          }
        }),
        (ee.prototype.autosave = function() {
          if (te()) {
            var e = this;
            if (null == this.options.autosave.uniqueId || '' == this.options.autosave.uniqueId)
              return void console.log('EasyMDE: You must set a uniqueId to use the autosave feature');
            !0 !== this.options.autosave.binded &&
              (null != e.element.form &&
                null != e.element.form &&
                e.element.form.addEventListener('submit', function() {
                  clearTimeout(e.autosaveTimeoutId),
                    (e.autosaveTimeoutId = void 0),
                    localStorage.removeItem('smde_' + e.options.autosave.uniqueId),
                    setTimeout(function() {
                      e.autosave();
                    }, e.options.autosave.delay || 1e4);
                }),
              (this.options.autosave.binded = !0)),
              !0 !== this.options.autosave.loaded &&
                ('string' == typeof localStorage.getItem('smde_' + this.options.autosave.uniqueId) &&
                  '' != localStorage.getItem('smde_' + this.options.autosave.uniqueId) &&
                  (this.codemirror.setValue(localStorage.getItem('smde_' + this.options.autosave.uniqueId)),
                  (this.options.autosave.foundSavedValue = !0)),
                (this.options.autosave.loaded = !0)),
              localStorage.setItem('smde_' + this.options.autosave.uniqueId, e.value());
            var t = document.getElementById('autosaved');
            if (null != t && null != t && '' != t) {
              var n = new Date(),
                r = n.getHours(),
                i = n.getMinutes(),
                o = 'am',
                a = r;
              a >= 12 && ((a = r - 12), (o = 'pm')),
                0 == a && (a = 12),
                (t.innerHTML = 'Autosaved: ' + a + ':' + (i = i < 10 ? '0' + i : i) + ' ' + o);
            }
            this.autosaveTimeoutId = setTimeout(function() {
              e.autosave();
            }, this.options.autosave.delay || 1e4);
          } else console.log('EasyMDE: localStorage not available, cannot autosave');
        }),
        (ee.prototype.clearAutosavedValue = function() {
          if (te()) {
            if (
              null == this.options.autosave ||
              null == this.options.autosave.uniqueId ||
              '' == this.options.autosave.uniqueId
            )
              return void console.log('EasyMDE: You must set a uniqueId to clear the autosave value');
            localStorage.removeItem('smde_' + this.options.autosave.uniqueId);
          } else console.log('EasyMDE: localStorage not available, cannot autosave');
        }),
        (ee.prototype.openBrowseFileWindow = function(e, t) {
          var n = this,
            r = this.gui.toolbar.getElementsByClassName('imageInput')[0];
          r.click(),
            r.addEventListener('change', function i(o) {
              n.options.imageUploadFunction
                ? n.uploadImagesUsingCustomFunction(n.options.imageUploadFunction, o.target.files)
                : n.uploadImages(o.target.files, e, t),
                r.removeEventListener('change', i);
            });
        }),
        (ee.prototype.uploadImage = function(e, t, n) {
          var r = this;
          function i(e) {
            r.updateStatusBar('upload-image', e),
              setTimeout(function() {
                r.updateStatusBar('upload-image', r.options.imageTexts.sbInit);
              }, 1e4),
              n && 'function' == typeof n && n(e),
              r.options.errorCallback(e);
          }
          function o(t) {
            var n = r.options.imageTexts.sizeUnits.split(',');
            return t
              .replace('#image_name#', e.name)
              .replace('#image_size#', U(e.size, n))
              .replace('#image_max_size#', U(r.options.imageMaxSize, n));
          }
          if (
            ((t =
              t ||
              function(e) {
                E(r, e);
              }),
            e.size > this.options.imageMaxSize)
          )
            i(o(this.options.errorMessages.fileTooLarge));
          else {
            var a = new FormData();
            a.append('image', e), r.options.imageCSRFToken && a.append('csrfmiddlewaretoken', r.options.imageCSRFToken);
            var s = new XMLHttpRequest();
            (s.upload.onprogress = function(t) {
              if (t.lengthComputable) {
                var n = '' + Math.round((100 * t.loaded) / t.total);
                r.updateStatusBar(
                  'upload-image',
                  r.options.imageTexts.sbProgress.replace('#file_name#', e.name).replace('#progress#', n),
                );
              }
            }),
              s.open('POST', this.options.imageUploadEndpoint),
              (s.onload = function() {
                try {
                  var e = JSON.parse(this.responseText);
                } catch (n) {
                  return (
                    console.error('EasyMDE: The server did not return a valid json.'),
                    void i(o(r.options.errorMessages.importError))
                  );
                }
                200 === this.status && e && !e.error && e.data && e.data.filePath
                  ? t(window.location.origin + '/' + e.data.filePath)
                  : e.error && e.error in r.options.errorMessages
                  ? i(o(r.options.errorMessages[e.error]))
                  : e.error
                  ? i(o(e.error))
                  : (console.error(
                      'EasyMDE: Received an unexpected response after uploading the image.' +
                        this.status +
                        ' (' +
                        this.statusText +
                        ')',
                    ),
                    i(o(r.options.errorMessages.importError)));
              }),
              (s.onerror = function(e) {
                console.error(
                  'EasyMDE: An unexpected error occurred when trying to upload the image.' +
                    e.target.status +
                    ' (' +
                    e.target.statusText +
                    ')',
                ),
                  i(r.options.errorMessages.importError);
              }),
              s.send(a);
          }
        }),
        (ee.prototype.uploadImageUsingCustomFunction = function(e, t) {
          var n = this;
          e(
            t,
            function(e) {
              E(n, e);
            },
            function(e) {
              var r = (function(e) {
                var r = n.options.imageTexts.sizeUnits.split(',');
                return e
                  .replace('#image_name#', t.name)
                  .replace('#image_size#', U(t.size, r))
                  .replace('#image_max_size#', U(n.options.imageMaxSize, r));
              })(e);
              n.updateStatusBar('upload-image', r),
                setTimeout(function() {
                  n.updateStatusBar('upload-image', n.options.imageTexts.sbInit);
                }, 1e4),
                n.options.errorCallback(r);
            },
          );
        }),
        (ee.prototype.createSideBySide = function() {
          var e = this.codemirror,
            t = e.getWrapperElement(),
            n = t.nextSibling;
          if (!n || !/editor-preview-side/.test(n.className)) {
            if ((((n = document.createElement('div')).className = 'editor-preview-side'), this.options.previewClass))
              if (Array.isArray(this.options.previewClass))
                for (var r = 0; r < this.options.previewClass.length; r++)
                  n.className += ' ' + this.options.previewClass[r];
              else 'string' == typeof this.options.previewClass && (n.className += ' ' + this.options.previewClass);
            t.parentNode.insertBefore(n, t.nextSibling);
          }
          if (!1 === this.options.syncSideBySidePreviewScroll) return n;
          var i = !1,
            o = !1;
          return (
            e.on('scroll', function(e) {
              if (i) i = !1;
              else {
                o = !0;
                var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
                  r = parseFloat(e.getScrollInfo().top) / t;
                n.scrollTop = (n.scrollHeight - n.clientHeight) * r;
              }
            }),
            (n.onscroll = function() {
              if (o) o = !1;
              else {
                i = !0;
                var t = n.scrollHeight - n.clientHeight,
                  r = parseFloat(n.scrollTop) / t,
                  a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * r;
                e.scrollTo(0, a);
              }
            }),
            n
          );
        }),
        (ee.prototype.createToolbar = function(e) {
          if ((e = e || this.options.toolbar) && 0 !== e.length) {
            var t;
            for (t = 0; t < e.length; t++) null != X[e[t]] && (e[t] = X[e[t]]);
            var n = document.createElement('div');
            n.className = 'editor-toolbar';
            var r = this,
              i = {};
            for (r.toolbar = e, t = 0; t < e.length; t++)
              if (
                ('guide' != e[t].name || !1 !== r.options.toolbarGuideIcon) &&
                !(
                  (r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[t].name)) ||
                  (('fullscreen' == e[t].name || 'side-by-side' == e[t].name) && d())
                )
              ) {
                if ('|' === e[t]) {
                  for (var o = !1, a = t + 1; a < e.length; a++)
                    '|' === e[a] || (r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[a].name)) || (o = !0);
                  if (!o) continue;
                }
                !(function(e) {
                  var t;
                  if (
                    ((t = '|' === e ? p() : f(e, r.options.toolbarTips, r.options.shortcuts)),
                    e.action &&
                      ('function' == typeof e.action
                        ? (t.onclick = function(t) {
                            t.preventDefault(), e.action(r);
                          })
                        : 'string' == typeof e.action &&
                          (t.onclick = function(t) {
                            t.preventDefault(), window.open(e.action, '_blank');
                          })),
                    (i[e.name || e] = t),
                    n.appendChild(t),
                    'upload-image' === e.name)
                  ) {
                    var o = document.createElement('input');
                    (o.className = 'imageInput'),
                      (o.type = 'file'),
                      (o.multiple = !0),
                      (o.name = 'image'),
                      (o.accept = r.options.imageAccept),
                      (o.style.display = 'none'),
                      (o.style.opacity = 0),
                      n.appendChild(o);
                  }
                })(e[t]);
              }
            r.toolbarElements = i;
            var s = this.codemirror;
            s.on('cursorActivity', function() {
              var e = m(s);
              for (var t in i)
                !(function(t) {
                  var n = i[t];
                  e[t]
                    ? (n.className += ' active')
                    : 'fullscreen' != t &&
                      'side-by-side' != t &&
                      (n.className = n.className.replace(/\s*active\s*/g, ''));
                })(t);
            });
            var l = s.getWrapperElement();
            return l.parentNode.insertBefore(n, l), n;
          }
        }),
        (ee.prototype.createStatusbar = function(e) {
          var t = this.options,
            n = this.codemirror;
          if ((e = e || this.options.status) && 0 !== e.length) {
            var r,
              i,
              o,
              a = [];
            for (r = 0; r < e.length; r++)
              if (((i = void 0), (o = void 0), 'object' == typeof e[r]))
                a.push({ className: e[r].className, defaultValue: e[r].defaultValue, onUpdate: e[r].onUpdate });
              else {
                var s = e[r];
                'words' === s
                  ? ((o = function(e) {
                      e.innerHTML = V(n.getValue());
                    }),
                    (i = function(e) {
                      e.innerHTML = V(n.getValue());
                    }))
                  : 'lines' === s
                  ? ((o = function(e) {
                      e.innerHTML = n.lineCount();
                    }),
                    (i = function(e) {
                      e.innerHTML = n.lineCount();
                    }))
                  : 'cursor' === s
                  ? ((o = function(e) {
                      e.innerHTML = '0:0';
                    }),
                    (i = function(e) {
                      var t = n.getCursor();
                      e.innerHTML = t.line + ':' + t.ch;
                    }))
                  : 'autosave' === s
                  ? (o = function(e) {
                      null != t.autosave && !0 === t.autosave.enabled && e.setAttribute('id', 'autosaved');
                    })
                  : 'upload-image' === s &&
                    (o = function(e) {
                      e.innerHTML = t.imageTexts.sbInit;
                    }),
                  a.push({ className: s, defaultValue: o, onUpdate: i });
              }
            var l = document.createElement('div');
            for (l.className = 'editor-statusbar', r = 0; r < a.length; r++) {
              var c = a[r],
                u = document.createElement('span');
              (u.className = c.className),
                'function' == typeof c.defaultValue && c.defaultValue(u),
                'function' == typeof c.onUpdate &&
                  this.codemirror.on(
                    'update',
                    (function(e, t) {
                      return function() {
                        t.onUpdate(e);
                      };
                    })(u, c),
                  ),
                l.appendChild(u);
            }
            var d = this.codemirror.getWrapperElement();
            return d.parentNode.insertBefore(l, d.nextSibling), l;
          }
        }),
        (ee.prototype.value = function(e) {
          var t = this.codemirror;
          if (void 0 === e) return t.getValue();
          if ((t.getDoc().setValue(e), this.isPreviewActive())) {
            var n = t.getWrapperElement().lastChild;
            n.innerHTML = this.options.previewRender(e, n);
          }
          return this;
        }),
        (ee.toggleBold = x),
        (ee.toggleItalic = y),
        (ee.toggleStrikethrough = b),
        (ee.toggleBlockquote = C),
        (ee.toggleHeadingSmaller = k),
        (ee.toggleHeadingBigger = S),
        (ee.toggleHeading1 = M),
        (ee.toggleHeading2 = L),
        (ee.toggleHeading3 = T),
        (ee.toggleCodeBlock = w),
        (ee.toggleUnorderedList = O),
        (ee.toggleOrderedList = D),
        (ee.cleanBlock = N),
        (ee.drawLink = A),
        (ee.drawImage = _),
        (ee.drawTable = P),
        (ee.drawHorizontalRule = F),
        (ee.undo = z),
        (ee.redo = I),
        (ee.togglePreview = R),
        (ee.toggleSideBySide = H),
        (ee.toggleFullScreen = v),
        (ee.prototype.toggleBold = function() {
          x(this);
        }),
        (ee.prototype.toggleItalic = function() {
          y(this);
        }),
        (ee.prototype.toggleStrikethrough = function() {
          b(this);
        }),
        (ee.prototype.toggleBlockquote = function() {
          C(this);
        }),
        (ee.prototype.toggleHeadingSmaller = function() {
          k(this);
        }),
        (ee.prototype.toggleHeadingBigger = function() {
          S(this);
        }),
        (ee.prototype.toggleHeading1 = function() {
          M(this);
        }),
        (ee.prototype.toggleHeading2 = function() {
          L(this);
        }),
        (ee.prototype.toggleHeading3 = function() {
          T(this);
        }),
        (ee.prototype.toggleCodeBlock = function() {
          w(this);
        }),
        (ee.prototype.toggleUnorderedList = function() {
          O(this);
        }),
        (ee.prototype.toggleOrderedList = function() {
          D(this);
        }),
        (ee.prototype.cleanBlock = function() {
          N(this);
        }),
        (ee.prototype.drawLink = function() {
          A(this);
        }),
        (ee.prototype.drawImage = function() {
          _(this);
        }),
        (ee.prototype.drawTable = function() {
          P(this);
        }),
        (ee.prototype.drawHorizontalRule = function() {
          F(this);
        }),
        (ee.prototype.undo = function() {
          z(this);
        }),
        (ee.prototype.redo = function() {
          I(this);
        }),
        (ee.prototype.togglePreview = function() {
          R(this);
        }),
        (ee.prototype.toggleSideBySide = function() {
          H(this);
        }),
        (ee.prototype.toggleFullScreen = function() {
          v(this);
        }),
        (ee.prototype.isPreviewActive = function() {
          var e = this.codemirror.getWrapperElement();
          return /editor-preview-active/.test(e.lastChild.className);
        }),
        (ee.prototype.isSideBySideActive = function() {
          var e = this.codemirror.getWrapperElement();
          return /editor-preview-active-side/.test(e.nextSibling.className);
        }),
        (ee.prototype.isFullscreenActive = function() {
          return this.codemirror.getOption('fullScreen');
        }),
        (ee.prototype.getState = function() {
          return m(this.codemirror);
        }),
        (ee.prototype.toTextArea = function() {
          var e = this.codemirror,
            t = e.getWrapperElement();
          t.parentNode &&
            (this.gui.toolbar && t.parentNode.removeChild(this.gui.toolbar),
            this.gui.statusbar && t.parentNode.removeChild(this.gui.statusbar),
            this.gui.sideBySide && t.parentNode.removeChild(this.gui.sideBySide)),
            e.toTextArea(),
            this.autosaveTimeoutId &&
              (clearTimeout(this.autosaveTimeoutId), (this.autosaveTimeoutId = void 0), this.clearAutosavedValue());
        }),
        (e.exports = ee);
    },
    '1Zcj': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return c;
      });
      var r = n('fXoL'),
        i = n('3Pt+'),
        o = n('1PoN'),
        a = n('DlQD');
      const s = ['easymde'],
        l = () => {};
      let c = (() => {
        class e {
          constructor(e) {
            (this._zone = e),
              (this._value = ''),
              (this._fromEditor = !1),
              (this.options = {}),
              (this.propagateChange = (e) => {}),
              (this.onTouched = () => l);
          }
          set value(e) {
            (this._value = e),
              this._easyMDE &&
                (this._fromEditor || this._easyMDE.value(e),
                this.propagateChange(this._value),
                (this._fromEditor = !1),
                this._zone.run(() => (this._value = e)));
          }
          get value() {
            return this._value;
          }
          get easyMDE() {
            return this._easyMDE;
          }
          writeValue(e) {
            this.value = e || '';
          }
          registerOnChange(e) {
            this.propagateChange = e;
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          ngAfterViewInit() {
            (this.options.element = this.textarea.nativeElement),
              a.setOptions({ sanitize: !0 }),
              (this._easyMDE = new o(this.options)),
              this._easyMDE.value(this.value),
              this._easyMDE.codemirror.on('change', () => {
                (this._fromEditor = !0), this.writeValue(this._easyMDE.value());
              });
          }
          isPreviewActive() {
            return this._easyMDE.isPreviewActive();
          }
          isSideBySideActive() {
            return this._easyMDE.isSideBySideActive();
          }
          isFullscreenActive() {
            return this._easyMDE.isFullscreenActive();
          }
          clearAutosavedValue() {
            this._easyMDE.clearAutosavedValue();
          }
          toTextArea() {
            this._easyMDE.toTextArea();
          }
          toggleBold() {
            this._easyMDE.toggleBold();
          }
          toggleItalic() {
            this._easyMDE.toggleItalic();
          }
          toggleStrikethrough() {
            this._easyMDE.toggleStrikethrough();
          }
          toggleHeadingSmaller() {
            this._easyMDE.toggleHeadingSmaller();
          }
          toggleHeadingBigger() {
            this._easyMDE.toggleHeadingBigger();
          }
          toggleHeading1() {
            this._easyMDE.toggleHeading1();
          }
          toggleHeading2() {
            this._easyMDE.toggleHeading2();
          }
          toggleHeading3() {
            this._easyMDE.toggleHeading3();
          }
          toggleCodeBlock() {
            this._easyMDE.toggleCodeBlock();
          }
          toggleBlockquote() {
            this._easyMDE.toggleBlockquote();
          }
          toggleUnorderedList() {
            this._easyMDE.toggleUnorderedList();
          }
          toggleOrderedList() {
            this._easyMDE.toggleOrderedList();
          }
          cleanBlock() {
            this._easyMDE.cleanBlock();
          }
          drawLink() {
            this._easyMDE.drawLink();
          }
          drawImage() {
            this._easyMDE.drawImage();
          }
          drawTable() {
            this._easyMDE.drawTable();
          }
          drawHorizontalRule() {
            this._easyMDE.drawHorizontalRule();
          }
          togglePreview() {
            this._easyMDE.togglePreview();
          }
          toggleSideBySide() {
            this._easyMDE.toggleSideBySide();
          }
          toggleFullScreen() {
            this._easyMDE.toggleFullScreen();
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)(r.Sb(r.z));
          }),
          (e.ɵcmp = r.Mb({
            type: e,
            selectors: [['td-text-editor']],
            viewQuery: function(e, t) {
              var n;
              1 & e && r.Nc(s, !0), 2 & e && r.Ec((n = r.hc())) && (t.textarea = n.first);
            },
            inputs: { options: 'options', value: 'value' },
            features: [r.Cb([{ provide: i.j, useExisting: Object(r.V)(() => e), multi: !0 }])],
            decls: 3,
            vars: 0,
            consts: [['easymde', '']],
            template: function(e, t) {
              1 & e && (r.Yb(0, 'div'), r.Tb(1, 'textarea', null, 0), r.Wb());
            },
            styles: [
              '[_nghost-%COMP%]     .CodeMirror{font-family:monospace;color:#000;direction:ltr}[_nghost-%COMP%]     .CodeMirror-lines{padding:4px 0}[_nghost-%COMP%]     .CodeMirror-gutter-filler, [_nghost-%COMP%]     .CodeMirror-scrollbar-filler{background-color:#fff}[_nghost-%COMP%]     .CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}[_nghost-%COMP%]     .CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}[_nghost-%COMP%]     .CodeMirror-guttermarker{color:#000}[_nghost-%COMP%]     .CodeMirror-guttermarker-subtle{color:#999}[_nghost-%COMP%]     .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}[_nghost-%COMP%]     .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}[_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}[_nghost-%COMP%]     .cm-fat-cursor div.CodeMirror-cursors{z-index:1}[_nghost-%COMP%]     .cm-fat-cursor-mark{background-color:rgba(20,255,20,.5);-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink}[_nghost-%COMP%]     .cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:1.06s steps(1) infinite blink;animation:1.06s steps(1) infinite blink;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}[_nghost-%COMP%]     .cm-tab{display:inline-block;text-decoration:inherit}[_nghost-%COMP%]     .CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}[_nghost-%COMP%]     .CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}[_nghost-%COMP%]     .cm-s-default .cm-header{color:#00f}[_nghost-%COMP%]     .cm-s-default .cm-quote{color:#090}[_nghost-%COMP%]     .cm-negative{color:#d44}[_nghost-%COMP%]     .cm-positive{color:#292}[_nghost-%COMP%]     .cm-header, [_nghost-%COMP%]     .cm-strong{font-weight:700}[_nghost-%COMP%]     .cm-em{font-style:italic}[_nghost-%COMP%]     .cm-link{text-decoration:underline}[_nghost-%COMP%]     .cm-strikethrough{text-decoration:line-through}[_nghost-%COMP%]     .cm-s-default .cm-keyword{color:#708}[_nghost-%COMP%]     .cm-s-default .cm-atom{color:#219}[_nghost-%COMP%]     .cm-s-default .cm-number{color:#164}[_nghost-%COMP%]     .cm-s-default .cm-def{color:#00f}[_nghost-%COMP%]     .cm-s-default .cm-variable-2{color:#05a}[_nghost-%COMP%]     .cm-s-default .cm-type, [_nghost-%COMP%]     .cm-s-default .cm-variable-3{color:#085}[_nghost-%COMP%]     .cm-s-default .cm-comment{color:#a50}[_nghost-%COMP%]     .cm-s-default .cm-string{color:#a11}[_nghost-%COMP%]     .cm-s-default .cm-string-2{color:#f50}[_nghost-%COMP%]     .cm-s-default .cm-meta{color:#555}[_nghost-%COMP%]     .cm-s-default .cm-qualifier{color:#555}[_nghost-%COMP%]     .cm-s-default .cm-builtin{color:#30a}[_nghost-%COMP%]     .cm-s-default .cm-bracket{color:#997}[_nghost-%COMP%]     .cm-s-default .cm-tag{color:#170}[_nghost-%COMP%]     .cm-s-default .cm-attribute{color:#00c}[_nghost-%COMP%]     .cm-s-default .cm-hr{color:#999}[_nghost-%COMP%]     .cm-s-default .cm-link{color:#00c}[_nghost-%COMP%]     .cm-s-default .cm-error{color:red}[_nghost-%COMP%]     .cm-invalidchar{color:red}[_nghost-%COMP%]     .CodeMirror-composing{border-bottom:2px solid}[_nghost-%COMP%]     div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}[_nghost-%COMP%]     div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}[_nghost-%COMP%]     .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}[_nghost-%COMP%]     .CodeMirror-activeline-background{background:#e8f2ff}[_nghost-%COMP%]     .CodeMirror{position:relative;overflow:hidden;background:#fff}[_nghost-%COMP%]     .CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:0;position:relative}[_nghost-%COMP%]     .CodeMirror-sizer{position:relative;border-right:30px solid transparent}[_nghost-%COMP%]     .CodeMirror-gutter-filler, [_nghost-%COMP%]     .CodeMirror-hscrollbar, [_nghost-%COMP%]     .CodeMirror-scrollbar-filler, [_nghost-%COMP%]     .CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}[_nghost-%COMP%]     .CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}[_nghost-%COMP%]     .CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}[_nghost-%COMP%]     .CodeMirror-scrollbar-filler{right:0;bottom:0}[_nghost-%COMP%]     .CodeMirror-gutter-filler{left:0;bottom:0}[_nghost-%COMP%]     .CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}[_nghost-%COMP%]     .CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}[_nghost-%COMP%]     .CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}[_nghost-%COMP%]     .CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}[_nghost-%COMP%]     .CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}[_nghost-%COMP%]     .CodeMirror-gutter-wrapper ::selection{background-color:transparent}[_nghost-%COMP%]     .CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}[_nghost-%COMP%]     .CodeMirror-lines{cursor:text;min-height:1px}[_nghost-%COMP%]     .CodeMirror pre.CodeMirror-line, [_nghost-%COMP%]     .CodeMirror pre.CodeMirror-line-like{padding:0 4px;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;font-variant-ligatures:contextual}[_nghost-%COMP%]     .CodeMirror-wrap pre.CodeMirror-line, [_nghost-%COMP%]     .CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}[_nghost-%COMP%]     .CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}[_nghost-%COMP%]     .CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}[_nghost-%COMP%]     .CodeMirror-rtl pre{direction:rtl}[_nghost-%COMP%]     .CodeMirror-code{outline:0}[_nghost-%COMP%]     .CodeMirror-gutter, [_nghost-%COMP%]     .CodeMirror-gutters, [_nghost-%COMP%]     .CodeMirror-linenumber, [_nghost-%COMP%]     .CodeMirror-scroll, [_nghost-%COMP%]     .CodeMirror-sizer{box-sizing:content-box}[_nghost-%COMP%]     .CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}[_nghost-%COMP%]     .CodeMirror-cursor{position:absolute;pointer-events:none}[_nghost-%COMP%]     .CodeMirror-measure pre{position:static}[_nghost-%COMP%]     div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}[_nghost-%COMP%]     div.CodeMirror-dragcursors{visibility:visible}[_nghost-%COMP%]     .CodeMirror-focused div.CodeMirror-cursors{visibility:visible}[_nghost-%COMP%]     .CodeMirror-selected{background:#d9d9d9}[_nghost-%COMP%]     .CodeMirror-crosshair{cursor:crosshair}[_nghost-%COMP%]     .CodeMirror-line::selection, [_nghost-%COMP%]     .CodeMirror-line>span::selection, [_nghost-%COMP%]     .CodeMirror-line>span>span::selection{background:#d7d4f0}[_nghost-%COMP%]     .CodeMirror-line::-moz-selection, [_nghost-%COMP%]     .CodeMirror-line>span::-moz-selection, [_nghost-%COMP%]     .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}[_nghost-%COMP%]     .cm-searching{background-color:rgba(255,255,0,.4)}[_nghost-%COMP%]     .cm-force-border{padding-right:.1px}@media print{[_nghost-%COMP%]     .CodeMirror div.CodeMirror-cursors{visibility:hidden}}[_nghost-%COMP%]     .cm-tab-wrap-hack:after{content:\'\'}[_nghost-%COMP%]     span.CodeMirror-selectedtext{background:0 0}[_nghost-%COMP%]     .CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:1;word-wrap:break-word}[_nghost-%COMP%]     .CodeMirror-scroll{cursor:text}[_nghost-%COMP%]     .CodeMirror-fullscreen{background:#fff;position:fixed!important;top:50px;left:0;right:0;bottom:0;height:auto;z-index:9;border-right:none!important;border-bottom-right-radius:0!important}[_nghost-%COMP%]     .CodeMirror-sided{width:50%!important}[_nghost-%COMP%]     .CodeMirror-placeholder{opacity:.5}[_nghost-%COMP%]     .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}[_nghost-%COMP%]     .editor-toolbar{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:0 10px;border-top:1px solid #bbb;border-left:1px solid #bbb;border-right:1px solid #bbb;border-top-left-radius:4px;border-top-right-radius:4px}[_nghost-%COMP%]     .editor-toolbar:after, [_nghost-%COMP%]     .editor-toolbar:before{display:block;content:\' \';height:1px}[_nghost-%COMP%]     .editor-toolbar:before{margin-bottom:8px}[_nghost-%COMP%]     .editor-toolbar:after{margin-top:8px}[_nghost-%COMP%]     .editor-toolbar.fullscreen{width:100%;height:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}[_nghost-%COMP%]     .editor-toolbar.fullscreen::before{width:20px;height:50px;background:-webkit-gradient(linear,left top,right top,color-stop(0,#fff),to(rgba(255,255,255,0)));background:linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}[_nghost-%COMP%]     .editor-toolbar.fullscreen::after{width:20px;height:50px;background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),to(#fff));background:linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);position:fixed;top:0;right:0;margin:0;padding:0}[_nghost-%COMP%]     .editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;width:30px;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}[_nghost-%COMP%]     .editor-toolbar button.active, [_nghost-%COMP%]     .editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}[_nghost-%COMP%]     .editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}[_nghost-%COMP%]     .editor-toolbar button:after{font-family:Arial,"Helvetica Neue",Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}[_nghost-%COMP%]     .editor-toolbar button.heading-1:after{content:"1"}[_nghost-%COMP%]     .editor-toolbar button.heading-2:after{content:"2"}[_nghost-%COMP%]     .editor-toolbar button.heading-3:after{content:"3"}[_nghost-%COMP%]     .editor-toolbar button.heading-bigger:after{content:"\u25b2"}[_nghost-%COMP%]     .editor-toolbar button.heading-smaller:after{content:"\u25bc"}[_nghost-%COMP%]     .editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){[_nghost-%COMP%]     .editor-toolbar i.no-mobile{display:none}}[_nghost-%COMP%]     .editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}[_nghost-%COMP%]     .editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}[_nghost-%COMP%]     .editor-statusbar .lines:before{content:\'lines: \'}[_nghost-%COMP%]     .editor-statusbar .words:before{content:\'words: \'}[_nghost-%COMP%]     .editor-statusbar .characters:before{content:\'characters: \'}[_nghost-%COMP%]     .editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}[_nghost-%COMP%]     .editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}[_nghost-%COMP%]     .editor-preview-active-side{display:block}[_nghost-%COMP%]     .editor-preview-active{display:block}[_nghost-%COMP%]     .editor-preview{padding:10px;background:#fafafa}[_nghost-%COMP%]     .editor-preview>p{margin-top:0}[_nghost-%COMP%]     .editor-preview pre{background:#eee;margin-bottom:10px}[_nghost-%COMP%]     .editor-preview table td, [_nghost-%COMP%]     .editor-preview table th{border:1px solid #ddd;padding:5px}[_nghost-%COMP%]     .cm-s-easymde .cm-tag{color:#63a35c}[_nghost-%COMP%]     .cm-s-easymde .cm-attribute{color:#795da3}[_nghost-%COMP%]     .cm-s-easymde .cm-string{color:#183691}[_nghost-%COMP%]     .cm-s-easymde .cm-header-1{font-size:200%;line-height:200%}[_nghost-%COMP%]     .cm-s-easymde .cm-header-2{font-size:160%;line-height:160%}[_nghost-%COMP%]     .cm-s-easymde .cm-header-3{font-size:125%;line-height:125%}[_nghost-%COMP%]     .cm-s-easymde .cm-header-4{font-size:110%;line-height:110%}[_nghost-%COMP%]     .cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}[_nghost-%COMP%]     .cm-s-easymde .cm-link{color:#7f8c8d}[_nghost-%COMP%]     .cm-s-easymde .cm-url{color:#aab2b3}[_nghost-%COMP%]     .cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}[_nghost-%COMP%]     .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}',
            ],
          })),
          e
        );
      })();
    },
    '1eCo': function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = {
            autoSelfClosers: {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              command: !0,
              embed: !0,
              frame: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
              menuitem: !0,
            },
            implicitlyClosed: {
              dd: !0,
              li: !0,
              optgroup: !0,
              option: !0,
              p: !0,
              rp: !0,
              rt: !0,
              tbody: !0,
              td: !0,
              tfoot: !0,
              th: !0,
              tr: !0,
            },
            contextGrabbers: {
              dd: { dd: !0, dt: !0 },
              dt: { dd: !0, dt: !0 },
              li: { li: !0 },
              option: { option: !0, optgroup: !0 },
              optgroup: { optgroup: !0 },
              p: {
                address: !0,
                article: !0,
                aside: !0,
                blockquote: !0,
                dir: !0,
                div: !0,
                dl: !0,
                fieldset: !0,
                footer: !0,
                form: !0,
                h1: !0,
                h2: !0,
                h3: !0,
                h4: !0,
                h5: !0,
                h6: !0,
                header: !0,
                hgroup: !0,
                hr: !0,
                menu: !0,
                nav: !0,
                ol: !0,
                p: !0,
                pre: !0,
                section: !0,
                table: !0,
                ul: !0,
              },
              rp: { rp: !0, rt: !0 },
              rt: { rp: !0, rt: !0 },
              tbody: { tbody: !0, tfoot: !0 },
              td: { td: !0, th: !0 },
              tfoot: { tbody: !0 },
              th: { td: !0, th: !0 },
              thead: { tbody: !0, tfoot: !0 },
              tr: { tr: !0 },
            },
            doNotIndent: { pre: !0 },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0,
          },
          n = {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            allowMissingTagName: !1,
            caseFold: !1,
          };
        e.defineMode('xml', function(r, i) {
          var o,
            a,
            s = r.indentUnit,
            l = {},
            c = i.htmlMode ? t : n;
          for (var u in c) l[u] = c[u];
          for (var u in i) l[u] = i[u];
          function d(e, t) {
            function n(n) {
              return (t.tokenize = n), n(e, t);
            }
            var r = e.next();
            return '<' == r
              ? e.eat('!')
                ? e.eat('[')
                  ? e.match('CDATA[')
                    ? n(f('atom', ']]>'))
                    : null
                  : e.match('--')
                  ? n(f('comment', '--\x3e'))
                  : e.match('DOCTYPE', !0, !0)
                  ? (e.eatWhile(/[\w\._\-]/),
                    n(
                      (function e(t) {
                        return function(n, r) {
                          for (var i; null != (i = n.next()); ) {
                            if ('<' == i) return (r.tokenize = e(t + 1)), r.tokenize(n, r);
                            if ('>' == i) {
                              if (1 == t) {
                                r.tokenize = d;
                                break;
                              }
                              return (r.tokenize = e(t - 1)), r.tokenize(n, r);
                            }
                          }
                          return 'meta';
                        };
                      })(1),
                    ))
                  : null
                : e.eat('?')
                ? (e.eatWhile(/[\w\._\-]/), (t.tokenize = f('meta', '?>')), 'meta')
                : ((o = e.eat('/') ? 'closeTag' : 'openTag'), (t.tokenize = h), 'tag bracket')
              : '&' == r
              ? (e.eat('#')
                ? e.eat('x')
                  ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';')
                  : e.eatWhile(/[\d]/) && e.eat(';')
                : e.eatWhile(/[\w\.\-:]/) && e.eat(';'))
                ? 'atom'
                : 'error'
              : (e.eatWhile(/[^&<]/), null);
          }
          function h(e, t) {
            var n,
              r,
              i = e.next();
            if ('>' == i || ('/' == i && e.eat('>')))
              return (t.tokenize = d), (o = '>' == i ? 'endTag' : 'selfcloseTag'), 'tag bracket';
            if ('=' == i) return (o = 'equals'), null;
            if ('<' == i) {
              (t.tokenize = d), (t.state = v), (t.tagName = t.tagStart = null);
              var a = t.tokenize(e, t);
              return a ? a + ' tag error' : 'tag error';
            }
            return /[\'\"]/.test(i)
              ? ((t.tokenize =
                  ((n = i),
                  ((r = function(e, t) {
                    for (; !e.eol(); )
                      if (e.next() == n) {
                        t.tokenize = h;
                        break;
                      }
                    return 'string';
                  }).isInAttribute = !0),
                  r)),
                (t.stringStartCol = e.column()),
                t.tokenize(e, t))
              : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
          }
          function f(e, t) {
            return function(n, r) {
              for (; !n.eol(); ) {
                if (n.match(t)) {
                  r.tokenize = d;
                  break;
                }
                n.next();
              }
              return e;
            };
          }
          function p(e, t, n) {
            (this.prev = e.context),
              (this.tagName = t),
              (this.indent = e.indented),
              (this.startOfLine = n),
              (l.doNotIndent.hasOwnProperty(t) || (e.context && e.context.noIndent)) && (this.noIndent = !0);
          }
          function m(e) {
            e.context && (e.context = e.context.prev);
          }
          function g(e, t) {
            for (var n; ; ) {
              if (!e.context) return;
              if (!l.contextGrabbers.hasOwnProperty((n = e.context.tagName)) || !l.contextGrabbers[n].hasOwnProperty(t))
                return;
              m(e);
            }
          }
          function v(e, t, n) {
            return 'openTag' == e ? ((n.tagStart = t.column()), x) : 'closeTag' == e ? y : v;
          }
          function x(e, t, n) {
            return 'word' == e
              ? ((n.tagName = t.current()), (a = 'tag'), C)
              : l.allowMissingTagName && 'endTag' == e
              ? ((a = 'tag bracket'), C(e, 0, n))
              : ((a = 'error'), x);
          }
          function y(e, t, n) {
            if ('word' == e) {
              var r = t.current();
              return (
                n.context && n.context.tagName != r && l.implicitlyClosed.hasOwnProperty(n.context.tagName) && m(n),
                (n.context && n.context.tagName == r) || !1 === l.matchClosing
                  ? ((a = 'tag'), b)
                  : ((a = 'tag error'), w)
              );
            }
            return l.allowMissingTagName && 'endTag' == e ? ((a = 'tag bracket'), b(e, 0, n)) : ((a = 'error'), w);
          }
          function b(e, t, n) {
            return 'endTag' != e ? ((a = 'error'), b) : (m(n), v);
          }
          function w(e, t, n) {
            return (a = 'error'), b(e, 0, n);
          }
          function C(e, t, n) {
            if ('word' == e) return (a = 'attribute'), k;
            if ('endTag' == e || 'selfcloseTag' == e) {
              var r = n.tagName,
                i = n.tagStart;
              return (
                (n.tagName = n.tagStart = null),
                'selfcloseTag' == e || l.autoSelfClosers.hasOwnProperty(r)
                  ? g(n, r)
                  : (g(n, r), (n.context = new p(n, r, i == n.indented))),
                v
              );
            }
            return (a = 'error'), C;
          }
          function k(e, t, n) {
            return 'equals' == e ? S : (l.allowMissing || (a = 'error'), C(e, 0, n));
          }
          function S(e, t, n) {
            return 'string' == e
              ? M
              : 'word' == e && l.allowUnquoted
              ? ((a = 'string'), C)
              : ((a = 'error'), C(e, 0, n));
          }
          function M(e, t, n) {
            return 'string' == e ? M : C(e, 0, n);
          }
          return (
            (d.isInText = !0),
            {
              startState: function(e) {
                var t = { tokenize: d, state: v, indented: e || 0, tagName: null, tagStart: null, context: null };
                return null != e && (t.baseIndent = e), t;
              },
              token: function(e, t) {
                if ((!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace())) return null;
                o = null;
                var n = t.tokenize(e, t);
                return (
                  (n || o) &&
                    'comment' != n &&
                    ((a = null), (t.state = t.state(o || n, e, t)), a && (n = 'error' == a ? n + ' error' : a)),
                  n
                );
              },
              indent: function(t, n, r) {
                var i = t.context;
                if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + s;
                if (i && i.noIndent) return e.Pass;
                if (t.tokenize != h && t.tokenize != d) return r ? r.match(/^(\s*)/)[0].length : 0;
                if (t.tagName)
                  return !1 !== l.multilineTagIndentPastTag
                    ? t.tagStart + t.tagName.length + 2
                    : t.tagStart + s * (l.multilineTagIndentFactor || 1);
                if (l.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                if (o && o[1])
                  for (; i; ) {
                    if (i.tagName == o[2]) {
                      i = i.prev;
                      break;
                    }
                    if (!l.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                    i = i.prev;
                  }
                else if (o)
                  for (; i; ) {
                    var a = l.contextGrabbers[i.tagName];
                    if (!a || !a.hasOwnProperty(o[2])) break;
                    i = i.prev;
                  }
                for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                return i ? i.indent + s : t.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: '\x3c!--',
              blockCommentEnd: '--\x3e',
              configuration: l.htmlMode ? 'html' : 'xml',
              helperType: l.htmlMode ? 'html' : 'xml',
              skipAttribute: function(e) {
                e.state == S && (e.state = C);
              },
              xmlCurrentTag: function(e) {
                return e.tagName ? { name: e.tagName, close: 'closeTag' == e.type } : null;
              },
              xmlCurrentContext: function(e) {
                for (var t = [], n = e.context; n; n = n.prev) n.tagName && t.push(n.tagName);
                return t.reverse();
              },
            }
          );
        }),
          e.defineMIME('text/xml', 'xml'),
          e.defineMIME('application/xml', 'xml'),
          e.mimeModes.hasOwnProperty('text/html') || e.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
      })(n('VrN/'));
    },
    4: function(e, t) {},
    '6mXC': function(e, t, n) {
      'use strict';
      var r = n('Sl0r');
      function i(e) {
        'function' == typeof (e = e || {}).codeMirrorInstance && 'function' == typeof e.codeMirrorInstance.defineMode
          ? (String.prototype.includes ||
              (String.prototype.includes = function() {
                return -1 !== String.prototype.indexOf.apply(this, arguments);
              }),
            e.codeMirrorInstance.defineMode('spell-checker', function(t) {
              if (!i.aff_loading) {
                i.aff_loading = !0;
                var n = new XMLHttpRequest();
                n.open('GET', 'https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff', !0),
                  (n.onload = function() {
                    4 === n.readyState &&
                      200 === n.status &&
                      ((i.aff_data = n.responseText),
                      2 == ++i.num_loaded && (i.typo = new r('en_US', i.aff_data, i.dic_data, { platform: 'any' })));
                  }),
                  n.send(null);
              }
              if (!i.dic_loading) {
                i.dic_loading = !0;
                var o = new XMLHttpRequest();
                o.open('GET', 'https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic', !0),
                  (o.onload = function() {
                    4 === o.readyState &&
                      200 === o.status &&
                      ((i.dic_data = o.responseText),
                      2 == ++i.num_loaded && (i.typo = new r('en_US', i.aff_data, i.dic_data, { platform: 'any' })));
                  }),
                  o.send(null);
              }
              var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
                s = {
                  token: function(e) {
                    var t = e.peek(),
                      n = '';
                    if (a.includes(t)) return e.next(), null;
                    for (; null != (t = e.peek()) && !a.includes(t); ) (n += t), e.next();
                    return i.typo && !i.typo.check(n) ? 'spell-error' : null;
                  },
                },
                l = e.codeMirrorInstance.getMode(t, t.backdrop || 'text/plain');
              return e.codeMirrorInstance.overlayMode(l, s, !0);
            }))
          : console.log(
              'CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`',
            );
      }
      (i.num_loaded = 0),
        (i.aff_loading = !1),
        (i.dic_loading = !1),
        (i.aff_data = ''),
        (i.dic_data = ''),
        (e.exports = i);
    },
    '7RDt': function(e, t, n) {
      var r = n('VrN/');
      (r.commands.tabAndIndentMarkdownList = function(e) {
        var t = e.listSelections();
        if (!1 !== e.getStateAfter(t[0].head.line).list) e.execCommand('indentMore');
        else if (e.options.indentWithTabs) e.execCommand('insertTab');
        else {
          var n = Array(e.options.tabSize + 1).join(' ');
          e.replaceSelection(n);
        }
      }),
        (r.commands.shiftTabAndUnindentMarkdownList = function(e) {
          var t = e.listSelections();
          if (!1 !== e.getStateAfter(t[0].head.line).list) e.execCommand('indentLess');
          else if (e.options.indentWithTabs) e.execCommand('insertTab');
          else {
            var n = Array(e.options.tabSize + 1).join(' ');
            e.replaceSelection(n);
          }
        });
    },
    '8EBN': function(e, t, n) {
      !(function(e) {
        'use strict';
        e.modeInfo = [
          { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
          {
            name: 'PGP',
            mimes: [
              'application/pgp',
              'application/pgp-encrypted',
              'application/pgp-keys',
              'application/pgp-signature',
            ],
            mode: 'asciiarmor',
            ext: ['asc', 'pgp', 'sig'],
          },
          { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
          { name: 'Asterisk', mime: 'text/x-asterisk', mode: 'asterisk', file: /^extensions\.conf$/i },
          { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
          { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
          {
            name: 'C++',
            mime: 'text/x-c++src',
            mode: 'clike',
            ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
            alias: ['cpp'],
          },
          { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy'] },
          { name: 'C#', mime: 'text/x-csharp', mode: 'clike', ext: ['cs'], alias: ['csharp', 'cs'] },
          { name: 'Clojure', mime: 'text/x-clojure', mode: 'clojure', ext: ['clj', 'cljc', 'cljx'] },
          { name: 'ClojureScript', mime: 'text/x-clojurescript', mode: 'clojure', ext: ['cljs'] },
          { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
          { name: 'CMake', mime: 'text/x-cmake', mode: 'cmake', ext: ['cmake', 'cmake.in'], file: /^CMakeLists.txt$/ },
          {
            name: 'CoffeeScript',
            mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
            mode: 'coffeescript',
            ext: ['coffee'],
            alias: ['coffee', 'coffee-script'],
          },
          {
            name: 'Common Lisp',
            mime: 'text/x-common-lisp',
            mode: 'commonlisp',
            ext: ['cl', 'lisp', 'el'],
            alias: ['lisp'],
          },
          { name: 'Cypher', mime: 'application/x-cypher-query', mode: 'cypher', ext: ['cyp', 'cypher'] },
          { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
          { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
          { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
          { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
          { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
          { name: 'Dart', mimes: ['application/dart', 'text/x-dart'], mode: 'dart', ext: ['dart'] },
          { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
          { name: 'Django', mime: 'text/x-django', mode: 'django' },
          { name: 'Dockerfile', mime: 'text/x-dockerfile', mode: 'dockerfile', file: /^Dockerfile$/ },
          { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
          { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
          { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
          { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
          { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
          { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
          { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
          { name: 'Embedded Javascript', mime: 'application/x-ejs', mode: 'htmlembedded', ext: ['ejs'] },
          { name: 'Embedded Ruby', mime: 'application/x-erb', mode: 'htmlembedded', ext: ['erb'] },
          { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
          { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
          { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
          { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
          { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
          { name: 'Fortran', mime: 'text/x-fortran', mode: 'fortran', ext: ['f', 'for', 'f77', 'f90', 'f95'] },
          { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
          { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
          { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
          {
            name: 'GitHub Flavored Markdown',
            mime: 'text/x-gfm',
            mode: 'gfm',
            file: /^(readme|contributing|history).md$/i,
          },
          { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
          { name: 'Groovy', mime: 'text/x-groovy', mode: 'groovy', ext: ['groovy', 'gradle'], file: /^Jenkinsfile$/ },
          { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
          { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
          { name: 'Haskell (Literate)', mime: 'text/x-literate-haskell', mode: 'haskell-literate', ext: ['lhs'] },
          { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
          { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
          { name: 'ASP.NET', mime: 'application/x-aspx', mode: 'htmlembedded', ext: ['aspx'], alias: ['asp', 'aspx'] },
          {
            name: 'HTML',
            mime: 'text/html',
            mode: 'htmlmixed',
            ext: ['html', 'htm', 'handlebars', 'hbs'],
            alias: ['xhtml'],
          },
          { name: 'HTTP', mime: 'message/http', mode: 'http' },
          { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
          { name: 'Pug', mime: 'text/x-pug', mode: 'pug', ext: ['jade', 'pug'], alias: ['jade'] },
          { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
          { name: 'Java Server Pages', mime: 'application/x-jsp', mode: 'htmlembedded', ext: ['jsp'], alias: ['jsp'] },
          {
            name: 'JavaScript',
            mimes: [
              'text/javascript',
              'text/ecmascript',
              'application/javascript',
              'application/x-javascript',
              'application/ecmascript',
            ],
            mode: 'javascript',
            ext: ['js'],
            alias: ['ecmascript', 'js', 'node'],
          },
          {
            name: 'JSON',
            mimes: ['application/json', 'application/x-json'],
            mode: 'javascript',
            ext: ['json', 'map'],
            alias: ['json5'],
          },
          { name: 'JSON-LD', mime: 'application/ld+json', mode: 'javascript', ext: ['jsonld'], alias: ['jsonld'] },
          { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
          { name: 'Jinja2', mime: 'text/jinja2', mode: 'jinja2', ext: ['j2', 'jinja', 'jinja2'] },
          { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'] },
          { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
          { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
          { name: 'LiveScript', mime: 'text/x-livescript', mode: 'livescript', ext: ['ls'], alias: ['ls'] },
          { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
          { name: 'Markdown', mime: 'text/x-markdown', mode: 'markdown', ext: ['markdown', 'md', 'mkd'] },
          { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
          { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
          { name: 'Mathematica', mime: 'text/x-mathematica', mode: 'mathematica', ext: ['m', 'nb', 'wl', 'wls'] },
          { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
          { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
          { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
          { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
          { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
          { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
          { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
          {
            name: 'NTriples',
            mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
            mode: 'ntriples',
            ext: ['nt', 'nq'],
          },
          { name: 'Objective-C', mime: 'text/x-objectivec', mode: 'clike', ext: ['m'], alias: ['objective-c', 'objc'] },
          {
            name: 'Objective-C++',
            mime: 'text/x-objectivec++',
            mode: 'clike',
            ext: ['mm'],
            alias: ['objective-c++', 'objc++'],
          },
          { name: 'OCaml', mime: 'text/x-ocaml', mode: 'mllike', ext: ['ml', 'mli', 'mll', 'mly'] },
          { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
          { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
          { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
          { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
          { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
          {
            name: 'PHP',
            mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
            mode: 'php',
            ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
          },
          { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
          { name: 'Plain Text', mime: 'text/plain', mode: 'null', ext: ['txt', 'text', 'conf', 'def', 'list', 'log'] },
          { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
          { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
          { name: 'PowerShell', mime: 'application/x-powershell', mode: 'powershell', ext: ['ps1', 'psd1', 'psm1'] },
          {
            name: 'Properties files',
            mime: 'text/x-properties',
            mode: 'properties',
            ext: ['properties', 'ini', 'in'],
            alias: ['ini', 'properties'],
          },
          { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
          {
            name: 'Python',
            mime: 'text/x-python',
            mode: 'python',
            ext: ['BUILD', 'bzl', 'py', 'pyw'],
            file: /^(BUCK|BUILD)$/,
          },
          { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
          { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
          { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
          { name: 'reStructuredText', mime: 'text/x-rst', mode: 'rst', ext: ['rst'], alias: ['rst'] },
          { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
          { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
          {
            name: 'Ruby',
            mime: 'text/x-ruby',
            mode: 'ruby',
            ext: ['rb'],
            alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
          },
          { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
          { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
          { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
          { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
          { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
          { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
          {
            name: 'Shell',
            mimes: ['text/x-sh', 'application/x-sh'],
            mode: 'shell',
            ext: ['sh', 'ksh', 'bash'],
            alias: ['bash', 'sh', 'zsh'],
            file: /^PKGBUILD$/,
          },
          { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
          { name: 'Slim', mimes: ['text/x-slim', 'application/x-slim'], mode: 'slim', ext: ['slim'] },
          { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
          { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
          { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
          { name: 'SML', mime: 'text/x-sml', mode: 'mllike', ext: ['sml', 'sig', 'fun', 'smackspec'] },
          { name: 'Soy', mime: 'text/x-soy', mode: 'soy', ext: ['soy'], alias: ['closure template'] },
          {
            name: 'SPARQL',
            mime: 'application/sparql-query',
            mode: 'sparql',
            ext: ['rq', 'sparql'],
            alias: ['sparul'],
          },
          { name: 'Spreadsheet', mime: 'text/x-spreadsheet', mode: 'spreadsheet', alias: ['excel', 'formula'] },
          { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
          { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
          { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
          { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
          { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
          { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
          { name: 'LaTeX', mime: 'text/x-latex', mode: 'stex', ext: ['text', 'ltx', 'tex'], alias: ['tex'] },
          { name: 'SystemVerilog', mime: 'text/x-systemverilog', mode: 'verilog', ext: ['v', 'sv', 'svh'] },
          { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
          { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
          { name: 'TiddlyWiki ', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
          { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
          { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
          { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
          { name: 'troff', mime: 'text/troff', mode: 'troff', ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
          { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
          { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
          { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
          { name: 'TypeScript', mime: 'application/typescript', mode: 'javascript', ext: ['ts'], alias: ['ts'] },
          { name: 'TypeScript-JSX', mime: 'text/typescript-jsx', mode: 'jsx', ext: ['tsx'], alias: ['tsx'] },
          { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
          { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
          { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
          { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
          { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
          { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
          { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
          { name: 'Vue.js Component', mimes: ['script/x-vue', 'text/x-vue'], mode: 'vue', ext: ['vue'] },
          {
            name: 'XML',
            mimes: ['application/xml', 'text/xml'],
            mode: 'xml',
            ext: ['xml', 'xsl', 'xsd', 'svg'],
            alias: ['rss', 'wsdl', 'xsd'],
          },
          { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
          { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
          { name: 'YAML', mimes: ['text/x-yaml', 'text/yaml'], mode: 'yaml', ext: ['yaml', 'yml'], alias: ['yml'] },
          { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
          { name: 'mscgen', mime: 'text/x-mscgen', mode: 'mscgen', ext: ['mscgen', 'mscin', 'msc'] },
          { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
          { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
        ];
        for (var t = 0; t < e.modeInfo.length; t++) {
          var n = e.modeInfo[t];
          n.mimes && (n.mime = n.mimes[0]);
        }
        (e.findModeByMIME = function(t) {
          t = t.toLowerCase();
          for (var n = 0; n < e.modeInfo.length; n++) {
            var r = e.modeInfo[n];
            if (r.mime == t) return r;
            if (r.mimes) for (var i = 0; i < r.mimes.length; i++) if (r.mimes[i] == t) return r;
          }
          return /\+xml$/.test(t)
            ? e.findModeByMIME('application/xml')
            : /\+json$/.test(t)
            ? e.findModeByMIME('application/json')
            : void 0;
        }),
          (e.findModeByExtension = function(t) {
            for (var n = 0; n < e.modeInfo.length; n++) {
              var r = e.modeInfo[n];
              if (r.ext) for (var i = 0; i < r.ext.length; i++) if (r.ext[i] == t) return r;
            }
          }),
          (e.findModeByFileName = function(t) {
            for (var n = 0; n < e.modeInfo.length; n++) {
              var r = e.modeInfo[n];
              if (r.file && r.file.test(t)) return r;
            }
            var i = t.lastIndexOf('.'),
              o = i > -1 && t.substring(i + 1, t.length);
            if (o) return e.findModeByExtension(o);
          }),
          (e.findModeByName = function(t) {
            t = t.toLowerCase();
            for (var n = 0; n < e.modeInfo.length; n++) {
              var r = e.modeInfo[n];
              if (r.name.toLowerCase() == t) return r;
              if (r.alias) for (var i = 0; i < r.alias.length; i++) if (r.alias[i].toLowerCase() == t) return r;
            }
          });
      })(n('VrN/'));
    },
    'DlQD': function(e, t, n) {
      !(function(t) {
        'use strict';
        var n = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html:
            '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          nptable: g,
          table: g,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
          text: /^[^\n]+/,
        };
        function r(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || C.defaults),
            (this.rules = n.normal),
            this.options.pedantic ? (this.rules = n.pedantic) : this.options.gfm && (this.rules = n.gfm);
        }
        (n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
          (n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
          (n.def = h(n.def)
            .replace('label', n._label)
            .replace('title', n._title)
            .getRegex()),
          (n.bullet = /(?:[*+-]|\d{1,9}\.)/),
          (n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
          (n.item = h(n.item, 'gm')
            .replace(/bull/g, n.bullet)
            .getRegex()),
          (n.list = h(n.list)
            .replace(/bull/g, n.bullet)
            .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
            .replace('def', '\\n+(?=' + n.def.source + ')')
            .getRegex()),
          (n._tag =
            'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
          (n._comment = /<!--(?!-?>)[\s\S]*?-->/),
          (n.html = h(n.html, 'i')
            .replace('comment', n._comment)
            .replace('tag', n._tag)
            .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
            .getRegex()),
          (n.paragraph = h(n._paragraph)
            .replace('hr', n.hr)
            .replace('heading', ' {0,3}#{1,6} +')
            .replace('|lheading', '')
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
            .replace('tag', n._tag)
            .getRegex()),
          (n.blockquote = h(n.blockquote)
            .replace('paragraph', n.paragraph)
            .getRegex()),
          (n.normal = v({}, n)),
          (n.gfm = v({}, n.normal, {
            nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
          })),
          (n.pedantic = v({}, n.normal, {
            html: h(
              '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))',
            )
              .replace('comment', n._comment)
              .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            fences: g,
            paragraph: h(n.normal._paragraph)
              .replace('hr', n.hr)
              .replace('heading', ' *#{1,6} *[^\n]')
              .replace('lheading', n.lheading)
              .replace('blockquote', ' {0,3}>')
              .replace('|fences', '')
              .replace('|list', '')
              .replace('|html', '')
              .getRegex(),
          })),
          (r.rules = n),
          (r.lex = function(e, t) {
            return new r(t).lex(e);
          }),
          (r.prototype.lex = function(e) {
            return (
              (e = e
                .replace(/\r\n|\r/g, '\n')
                .replace(/\t/g, '    ')
                .replace(/\u00a0/g, ' ')
                .replace(/\u2424/g, '\n')),
              this.token(e, !0)
            );
          }),
          (r.prototype.token = function(e, t) {
            var r, i, o, a, s, l, c, d, h, f, p, m, g, v, b, w;
            for (e = e.replace(/^ +$/gm, ''); e; )
              if (
                ((o = this.rules.newline.exec(e)) &&
                  ((e = e.substring(o[0].length)), o[0].length > 1 && this.tokens.push({ type: 'space' })),
                (o = this.rules.code.exec(e)))
              ) {
                var C = this.tokens[this.tokens.length - 1];
                (e = e.substring(o[0].length)),
                  C && 'paragraph' === C.type
                    ? (C.text += '\n' + o[0].trimRight())
                    : ((o = o[0].replace(/^ {4}/gm, '')),
                      this.tokens.push({
                        type: 'code',
                        codeBlockStyle: 'indented',
                        text: this.options.pedantic ? o : y(o, '\n'),
                      }));
              } else if ((o = this.rules.fences.exec(e)))
                (e = e.substring(o[0].length)),
                  this.tokens.push({ type: 'code', lang: o[2] ? o[2].trim() : o[2], text: o[3] || '' });
              else if ((o = this.rules.heading.exec(e)))
                (e = e.substring(o[0].length)), this.tokens.push({ type: 'heading', depth: o[1].length, text: o[2] });
              else if (
                (o = this.rules.nptable.exec(e)) &&
                (l = {
                  type: 'table',
                  header: x(o[1].replace(/^ *| *\| *$/g, '')),
                  align: o[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: o[3] ? o[3].replace(/\n$/, '').split('\n') : [],
                }).header.length === l.align.length
              ) {
                for (e = e.substring(o[0].length), p = 0; p < l.align.length; p++)
                  l.align[p] = /^ *-+: *$/.test(l.align[p])
                    ? 'right'
                    : /^ *:-+: *$/.test(l.align[p])
                    ? 'center'
                    : /^ *:-+ *$/.test(l.align[p])
                    ? 'left'
                    : null;
                for (p = 0; p < l.cells.length; p++) l.cells[p] = x(l.cells[p], l.header.length);
                this.tokens.push(l);
              } else if ((o = this.rules.hr.exec(e))) (e = e.substring(o[0].length)), this.tokens.push({ type: 'hr' });
              else if ((o = this.rules.blockquote.exec(e)))
                (e = e.substring(o[0].length)),
                  this.tokens.push({ type: 'blockquote_start' }),
                  (o = o[0].replace(/^ *> ?/gm, '')),
                  this.token(o, t),
                  this.tokens.push({ type: 'blockquote_end' });
              else if ((o = this.rules.list.exec(e))) {
                for (
                  e = e.substring(o[0].length),
                    this.tokens.push(
                      (c = { type: 'list_start', ordered: (v = (a = o[2]).length > 1), start: v ? +a : '', loose: !1 }),
                    ),
                    d = [],
                    r = !1,
                    g = (o = o[0].match(this.rules.item)).length,
                    p = 0;
                  p < g;
                  p++
                )
                  (f = (l = o[p]).length),
                    ~(l = l.replace(/^ *([*+-]|\d+\.) */, '')).indexOf('\n ') &&
                      ((f -= l.length),
                      (l = l.replace(this.options.pedantic ? /^ {1,4}/gm : new RegExp('^ {1,' + f + '}', 'gm'), ''))),
                    p !== g - 1 &&
                      ((s = n.bullet.exec(o[p + 1])[0]),
                      (a.length > 1 ? 1 === s.length : s.length > 1 || (this.options.smartLists && s !== a)) &&
                        ((e = o.slice(p + 1).join('\n') + e), (p = g - 1))),
                    (i = r || /\n\n(?!\s*$)/.test(l)),
                    p !== g - 1 && ((r = '\n' === l.charAt(l.length - 1)), i || (i = r)),
                    i && (c.loose = !0),
                    (w = void 0),
                    (b = /^\[[ xX]\] /.test(l)) && ((w = ' ' !== l[1]), (l = l.replace(/^\[[ xX]\] +/, ''))),
                    d.push((h = { type: 'list_item_start', task: b, checked: w, loose: i })),
                    this.tokens.push(h),
                    this.token(l, !1),
                    this.tokens.push({ type: 'list_item_end' });
                if (c.loose) for (g = d.length, p = 0; p < g; p++) d[p].loose = !0;
                this.tokens.push({ type: 'list_end' });
              } else if ((o = this.rules.html.exec(e)))
                (e = e.substring(o[0].length)),
                  this.tokens.push({
                    type: this.options.sanitize ? 'paragraph' : 'html',
                    pre: !this.options.sanitizer && ('pre' === o[1] || 'script' === o[1] || 'style' === o[1]),
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(o[0])
                        : u(o[0])
                      : o[0],
                  });
              else if (t && (o = this.rules.def.exec(e)))
                (e = e.substring(o[0].length)),
                  o[3] && (o[3] = o[3].substring(1, o[3].length - 1)),
                  (m = o[1].toLowerCase().replace(/\s+/g, ' ')),
                  this.tokens.links[m] || (this.tokens.links[m] = { href: o[2], title: o[3] });
              else if (
                (o = this.rules.table.exec(e)) &&
                (l = {
                  type: 'table',
                  header: x(o[1].replace(/^ *| *\| *$/g, '')),
                  align: o[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: o[3] ? o[3].replace(/\n$/, '').split('\n') : [],
                }).header.length === l.align.length
              ) {
                for (e = e.substring(o[0].length), p = 0; p < l.align.length; p++)
                  l.align[p] = /^ *-+: *$/.test(l.align[p])
                    ? 'right'
                    : /^ *:-+: *$/.test(l.align[p])
                    ? 'center'
                    : /^ *:-+ *$/.test(l.align[p])
                    ? 'left'
                    : null;
                for (p = 0; p < l.cells.length; p++)
                  l.cells[p] = x(l.cells[p].replace(/^ *\| *| *\| *$/g, ''), l.header.length);
                this.tokens.push(l);
              } else if ((o = this.rules.lheading.exec(e)))
                (e = e.substring(o[0].length)),
                  this.tokens.push({ type: 'heading', depth: '=' === o[2].charAt(0) ? 1 : 2, text: o[1] });
              else if (t && (o = this.rules.paragraph.exec(e)))
                (e = e.substring(o[0].length)),
                  this.tokens.push({
                    type: 'paragraph',
                    text: '\n' === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1],
                  });
              else if ((o = this.rules.text.exec(e)))
                (e = e.substring(o[0].length)), this.tokens.push({ type: 'text', text: o[0] });
              else if (e) throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
            return this.tokens;
          });
        var i = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: g,
          tag:
            '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
          em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: g,
          text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        };
        function o(e, t) {
          if (
            ((this.options = t || C.defaults),
            (this.links = e),
            (this.rules = i.normal),
            (this.renderer = this.options.renderer || new a()),
            (this.renderer.options = this.options),
            !this.links)
          )
            throw new Error('Tokens array requires a `links` property.');
          this.options.pedantic
            ? (this.rules = i.pedantic)
            : this.options.gfm && (this.rules = this.options.breaks ? i.breaks : i.gfm);
        }
        function a(e) {
          this.options = e || C.defaults;
        }
        function s() {}
        function l(e) {
          (this.tokens = []),
            (this.token = null),
            (this.options = e || C.defaults),
            (this.options.renderer = this.options.renderer || new a()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.slugger = new c());
        }
        function c() {
          this.seen = {};
        }
        function u(e, t) {
          if (t) {
            if (u.escapeTest.test(e))
              return e.replace(u.escapeReplace, function(e) {
                return u.replacements[e];
              });
          } else if (u.escapeTestNoEncode.test(e))
            return e.replace(u.escapeReplaceNoEncode, function(e) {
              return u.replacements[e];
            });
          return e;
        }
        function d(e) {
          return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
            return 'colon' === (t = t.toLowerCase())
              ? ':'
              : '#' === t.charAt(0)
              ? 'x' === t.charAt(1)
                ? String.fromCharCode(parseInt(t.substring(2), 16))
                : String.fromCharCode(+t.substring(1))
              : '';
          });
        }
        function h(e, t) {
          return (
            (e = e.source || e),
            (t = t || ''),
            {
              replace: function(t, n) {
                return (n = (n = n.source || n).replace(/(^|[^\[])\^/g, '$1')), (e = e.replace(t, n)), this;
              },
              getRegex: function() {
                return new RegExp(e, t);
              },
            }
          );
        }
        function f(e, t, n) {
          if (e) {
            try {
              var r = decodeURIComponent(d(n))
                .replace(/[^\w:]/g, '')
                .toLowerCase();
            } catch (i) {
              return null;
            }
            if (0 === r.indexOf('javascript:') || 0 === r.indexOf('vbscript:') || 0 === r.indexOf('data:')) return null;
          }
          t &&
            !m.test(n) &&
            (n = (function(e, t) {
              return (
                p[' ' + e] || (p[' ' + e] = /^[^:]+:\/*[^/]*$/.test(e) ? e + '/' : y(e, '/', !0)),
                (e = p[' ' + e]),
                '//' === t.slice(0, 2)
                  ? e.replace(/:[\s\S]*/, ':') + t
                  : '/' === t.charAt(0)
                  ? e.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + t
                  : e + t
              );
            })(t, n));
          try {
            n = encodeURI(n).replace(/%25/g, '%');
          } catch (i) {
            return null;
          }
          return n;
        }
        (i._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~'),
          (i.em = h(i.em)
            .replace(/punctuation/g, i._punctuation)
            .getRegex()),
          (i._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (i._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (i._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (i.autolink = h(i.autolink)
            .replace('scheme', i._scheme)
            .replace('email', i._email)
            .getRegex()),
          (i._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (i.tag = h(i.tag)
            .replace('comment', n._comment)
            .replace('attribute', i._attribute)
            .getRegex()),
          (i._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (i._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
          (i._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (i.link = h(i.link)
            .replace('label', i._label)
            .replace('href', i._href)
            .replace('title', i._title)
            .getRegex()),
          (i.reflink = h(i.reflink)
            .replace('label', i._label)
            .getRegex()),
          (i.normal = v({}, i)),
          (i.pedantic = v({}, i.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
            link: h(/^!?\[(label)\]\((.*?)\)/)
              .replace('label', i._label)
              .getRegex(),
            reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace('label', i._label)
              .getRegex(),
          })),
          (i.gfm = v({}, i.normal, {
            escape: h(i.escape)
              .replace('])', '~|])')
              .getRegex(),
            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^~+(?=\S)([\s\S]*?\S)~+/,
            text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
          })),
          (i.gfm.url = h(i.gfm.url, 'i')
            .replace('email', i.gfm._extended_email)
            .getRegex()),
          (i.breaks = v({}, i.gfm, {
            br: h(i.br)
              .replace('{2,}', '*')
              .getRegex(),
            text: h(i.gfm.text)
              .replace('\\b_', '\\b_| {2,}\\n')
              .replace(/\{2,\}/g, '*')
              .getRegex(),
          })),
          (o.rules = i),
          (o.output = function(e, t, n) {
            return new o(t, n).output(e);
          }),
          (o.prototype.output = function(e) {
            for (var t, n, r, i, a, s, l = ''; e; )
              if ((a = this.rules.escape.exec(e))) (e = e.substring(a[0].length)), (l += u(a[1]));
              else if ((a = this.rules.tag.exec(e)))
                !this.inLink && /^<a /i.test(a[0])
                  ? (this.inLink = !0)
                  : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1),
                  !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0])
                    ? (this.inRawBlock = !0)
                    : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !1),
                  (e = e.substring(a[0].length)),
                  (l += this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(a[0])
                      : u(a[0])
                    : a[0]);
              else if ((a = this.rules.link.exec(e))) {
                var c = b(a[2], '()');
                if (c > -1) {
                  var d = 4 + a[1].length + c;
                  (a[2] = a[2].substring(0, c)), (a[0] = a[0].substring(0, d).trim()), (a[3] = '');
                }
                (e = e.substring(a[0].length)),
                  (this.inLink = !0),
                  (r = a[2]),
                  this.options.pedantic
                    ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))
                      ? ((r = t[1]), (i = t[3]))
                      : (i = '')
                    : (i = a[3] ? a[3].slice(1, -1) : ''),
                  (r = r.trim().replace(/^<([\s\S]*)>$/, '$1')),
                  (l += this.outputLink(a, { href: o.escapes(r), title: o.escapes(i) })),
                  (this.inLink = !1);
              } else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                if (
                  ((e = e.substring(a[0].length)),
                  (t = (a[2] || a[1]).replace(/\s+/g, ' ')),
                  !(t = this.links[t.toLowerCase()]) || !t.href)
                ) {
                  (l += a[0].charAt(0)), (e = a[0].substring(1) + e);
                  continue;
                }
                (this.inLink = !0), (l += this.outputLink(a, t)), (this.inLink = !1);
              } else if ((a = this.rules.strong.exec(e)))
                (e = e.substring(a[0].length)), (l += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1])));
              else if ((a = this.rules.em.exec(e)))
                (e = e.substring(a[0].length)),
                  (l += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1])));
              else if ((a = this.rules.code.exec(e)))
                (e = e.substring(a[0].length)), (l += this.renderer.codespan(u(a[2].trim(), !0)));
              else if ((a = this.rules.br.exec(e))) (e = e.substring(a[0].length)), (l += this.renderer.br());
              else if ((a = this.rules.del.exec(e)))
                (e = e.substring(a[0].length)), (l += this.renderer.del(this.output(a[1])));
              else if ((a = this.rules.autolink.exec(e)))
                (e = e.substring(a[0].length)),
                  (r = '@' === a[2] ? 'mailto:' + (n = u(this.mangle(a[1]))) : (n = u(a[1]))),
                  (l += this.renderer.link(r, null, n));
              else if (this.inLink || !(a = this.rules.url.exec(e))) {
                if ((a = this.rules.text.exec(e)))
                  (e = e.substring(a[0].length)),
                    (l += this.renderer.text(
                      this.inRawBlock
                        ? this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(a[0])
                            : u(a[0])
                          : a[0]
                        : u(this.smartypants(a[0])),
                    ));
                else if (e) throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
              } else {
                if ('@' === a[2]) r = 'mailto:' + (n = u(a[0]));
                else {
                  do {
                    (s = a[0]), (a[0] = this.rules._backpedal.exec(a[0])[0]);
                  } while (s !== a[0]);
                  (n = u(a[0])), (r = 'www.' === a[1] ? 'http://' + n : n);
                }
                (e = e.substring(a[0].length)), (l += this.renderer.link(r, null, n));
              }
            return l;
          }),
          (o.escapes = function(e) {
            return e ? e.replace(o.rules._escapes, '$1') : e;
          }),
          (o.prototype.outputLink = function(e, t) {
            var n = t.href,
              r = t.title ? u(t.title) : null;
            return '!' !== e[0].charAt(0)
              ? this.renderer.link(n, r, this.output(e[1]))
              : this.renderer.image(n, r, u(e[1]));
          }),
          (o.prototype.smartypants = function(e) {
            return this.options.smartypants
              ? e
                  .replace(/---/g, '\u2014')
                  .replace(/--/g, '\u2013')
                  .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
                  .replace(/'/g, '\u2019')
                  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
                  .replace(/"/g, '\u201d')
                  .replace(/\.{3}/g, '\u2026')
              : e;
          }),
          (o.prototype.mangle = function(e) {
            if (!this.options.mangle) return e;
            for (var t, n = '', r = e.length, i = 0; i < r; i++)
              (t = e.charCodeAt(i)), Math.random() > 0.5 && (t = 'x' + t.toString(16)), (n += '&#' + t + ';');
            return n;
          }),
          (a.prototype.code = function(e, t, n) {
            var r = (t || '').match(/\S*/)[0];
            if (this.options.highlight) {
              var i = this.options.highlight(e, r);
              null != i && i !== e && ((n = !0), (e = i));
            }
            return r
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  u(r, !0) +
                  '">' +
                  (n ? e : u(e, !0)) +
                  '</code></pre>\n'
              : '<pre><code>' + (n ? e : u(e, !0)) + '</code></pre>';
          }),
          (a.prototype.blockquote = function(e) {
            return '<blockquote>\n' + e + '</blockquote>\n';
          }),
          (a.prototype.html = function(e) {
            return e;
          }),
          (a.prototype.heading = function(e, t, n, r) {
            return this.options.headerIds
              ? '<h' + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + '</h' + t + '>\n'
              : '<h' + t + '>' + e + '</h' + t + '>\n';
          }),
          (a.prototype.hr = function() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          }),
          (a.prototype.list = function(e, t, n) {
            var r = t ? 'ol' : 'ul';
            return '<' + r + (t && 1 !== n ? ' start="' + n + '"' : '') + '>\n' + e + '</' + r + '>\n';
          }),
          (a.prototype.listitem = function(e) {
            return '<li>' + e + '</li>\n';
          }),
          (a.prototype.checkbox = function(e) {
            return (
              '<input ' +
              (e ? 'checked="" ' : '') +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? ' /' : '') +
              '> '
            );
          }),
          (a.prototype.paragraph = function(e) {
            return '<p>' + e + '</p>\n';
          }),
          (a.prototype.table = function(e, t) {
            return t && (t = '<tbody>' + t + '</tbody>'), '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n';
          }),
          (a.prototype.tablerow = function(e) {
            return '<tr>\n' + e + '</tr>\n';
          }),
          (a.prototype.tablecell = function(e, t) {
            var n = t.header ? 'th' : 'td';
            return (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') + e + '</' + n + '>\n';
          }),
          (a.prototype.strong = function(e) {
            return '<strong>' + e + '</strong>';
          }),
          (a.prototype.em = function(e) {
            return '<em>' + e + '</em>';
          }),
          (a.prototype.codespan = function(e) {
            return '<code>' + e + '</code>';
          }),
          (a.prototype.br = function() {
            return this.options.xhtml ? '<br/>' : '<br>';
          }),
          (a.prototype.del = function(e) {
            return '<del>' + e + '</del>';
          }),
          (a.prototype.link = function(e, t, n) {
            if (null === (e = f(this.options.sanitize, this.options.baseUrl, e))) return n;
            var r = '<a href="' + u(e) + '"';
            return t && (r += ' title="' + t + '"'), r + '>' + n + '</a>';
          }),
          (a.prototype.image = function(e, t, n) {
            if (null === (e = f(this.options.sanitize, this.options.baseUrl, e))) return n;
            var r = '<img src="' + e + '" alt="' + n + '"';
            return t && (r += ' title="' + t + '"'), r + (this.options.xhtml ? '/>' : '>');
          }),
          (a.prototype.text = function(e) {
            return e;
          }),
          (s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text = function(
            e,
          ) {
            return e;
          }),
          (s.prototype.link = s.prototype.image = function(e, t, n) {
            return '' + n;
          }),
          (s.prototype.br = function() {
            return '';
          }),
          (l.parse = function(e, t) {
            return new l(t).parse(e);
          }),
          (l.prototype.parse = function(e) {
            (this.inline = new o(e.links, this.options)),
              (this.inlineText = new o(e.links, v({}, this.options, { renderer: new s() }))),
              (this.tokens = e.reverse());
            for (var t = ''; this.next(); ) t += this.tok();
            return t;
          }),
          (l.prototype.next = function() {
            return (this.token = this.tokens.pop()), this.token;
          }),
          (l.prototype.peek = function() {
            return this.tokens[this.tokens.length - 1] || 0;
          }),
          (l.prototype.parseText = function() {
            for (var e = this.token.text; 'text' === this.peek().type; ) e += '\n' + this.next().text;
            return this.inline.output(e);
          }),
          (l.prototype.tok = function() {
            switch (this.token.type) {
              case 'space':
                return '';
              case 'hr':
                return this.renderer.hr();
              case 'heading':
                return this.renderer.heading(
                  this.inline.output(this.token.text),
                  this.token.depth,
                  d(this.inlineText.output(this.token.text)),
                  this.slugger,
                );
              case 'code':
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
              case 'table':
                var e,
                  t,
                  n,
                  r,
                  i = '',
                  o = '';
                for (n = '', e = 0; e < this.token.header.length; e++)
                  n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                    header: !0,
                    align: this.token.align[e],
                  });
                for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                  for (t = this.token.cells[e], n = '', r = 0; r < t.length; r++)
                    n += this.renderer.tablecell(this.inline.output(t[r]), { header: !1, align: this.token.align[r] });
                  o += this.renderer.tablerow(n);
                }
                return this.renderer.table(i, o);
              case 'blockquote_start':
                for (o = ''; 'blockquote_end' !== this.next().type; ) o += this.tok();
                return this.renderer.blockquote(o);
              case 'list_start':
                o = '';
                for (var a = this.token.ordered, s = this.token.start; 'list_end' !== this.next().type; )
                  o += this.tok();
                return this.renderer.list(o, a, s);
              case 'list_item_start':
                o = '';
                var l = this.token.loose,
                  c = this.token.checked,
                  u = this.token.task;
                for (this.token.task && (o += this.renderer.checkbox(c)); 'list_item_end' !== this.next().type; )
                  o += l || 'text' !== this.token.type ? this.tok() : this.parseText();
                return this.renderer.listitem(o, u, c);
              case 'html':
                return this.renderer.html(this.token.text);
              case 'paragraph':
                return this.renderer.paragraph(this.inline.output(this.token.text));
              case 'text':
                return this.renderer.paragraph(this.parseText());
              default:
                var h = 'Token with "' + this.token.type + '" type was not found.';
                if (!this.options.silent) throw new Error(h);
                console.log(h);
            }
          }),
          (c.prototype.slug = function(e) {
            var t = e
              .toLowerCase()
              .trim()
              .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
              .replace(/\s/g, '-');
            if (this.seen.hasOwnProperty(t)) {
              var n = t;
              do {
                this.seen[n]++, (t = n + '-' + this.seen[n]);
              } while (this.seen.hasOwnProperty(t));
            }
            return (this.seen[t] = 0), t;
          }),
          (u.escapeTest = /[&<>"']/),
          (u.escapeReplace = /[&<>"']/g),
          (u.replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }),
          (u.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
          (u.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
        var p = {},
          m = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function g() {}
        function v(e) {
          for (var t, n, r = 1; r < arguments.length; r++)
            for (n in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
        function x(e, t) {
          var n = e
              .replace(/\|/g, function(e, t, n) {
                for (var r = !1, i = t; --i >= 0 && '\\' === n[i]; ) r = !r;
                return r ? '|' : ' |';
              })
              .split(/ \|/),
            r = 0;
          if (n.length > t) n.splice(t);
          else for (; n.length < t; ) n.push('');
          for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|');
          return n;
        }
        function y(e, t, n) {
          if (0 === e.length) return '';
          for (var r = 0; r < e.length; ) {
            var i = e.charAt(e.length - r - 1);
            if (i !== t || n) {
              if (i === t || !n) break;
              r++;
            } else r++;
          }
          return e.substr(0, e.length - r);
        }
        function b(e, t) {
          if (-1 === e.indexOf(t[1])) return -1;
          for (var n = 0, r = 0; r < e.length; r++)
            if ('\\' === e[r]) r++;
            else if (e[r] === t[0]) n++;
            else if (e[r] === t[1] && --n < 0) return r;
          return -1;
        }
        function w(e) {
          e &&
            e.sanitize &&
            !e.silent &&
            console.warn(
              'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
            );
        }
        function C(e, t, n) {
          if (null == e) throw new Error('marked(): input parameter is undefined or null');
          if ('string' != typeof e)
            throw new Error(
              'marked(): input parameter is of type ' + Object.prototype.toString.call(e) + ', string expected',
            );
          if (n || 'function' == typeof t) {
            n || ((n = t), (t = null)), w((t = v({}, C.defaults, t || {})));
            var i,
              o,
              a = t.highlight,
              s = 0;
            try {
              i = r.lex(e, t);
            } catch (d) {
              return n(d);
            }
            o = i.length;
            var c = function(e) {
              if (e) return (t.highlight = a), n(e);
              var r;
              try {
                r = l.parse(i, t);
              } catch (d) {
                e = d;
              }
              return (t.highlight = a), e ? n(e) : n(null, r);
            };
            if (!a || a.length < 3) return c();
            if ((delete t.highlight, !o)) return c();
            for (; s < i.length; s++)
              !(function(e) {
                'code' !== e.type
                  ? --o || c()
                  : a(e.text, e.lang, function(t, n) {
                      return t
                        ? c(t)
                        : null == n || n === e.text
                        ? --o || c()
                        : ((e.text = n), (e.escaped = !0), void (--o || c()));
                    });
              })(i[s]);
          } else
            try {
              return t && (t = v({}, C.defaults, t)), w(t), l.parse(r.lex(e, t), t);
            } catch (d) {
              if (
                ((d.message += '\nPlease report this to https://github.com/markedjs/marked.'), (t || C.defaults).silent)
              )
                return '<p>An error occurred:</p><pre>' + u(d.message + '', !0) + '</pre>';
              throw d;
            }
        }
        (g.exec = g),
          (C.options = C.setOptions = function(e) {
            return v(C.defaults, e), C;
          }),
          (C.getDefaults = function() {
            return {
              baseUrl: null,
              breaks: !1,
              gfm: !0,
              headerIds: !0,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: !0,
              pedantic: !1,
              renderer: new a(),
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              xhtml: !1,
            };
          }),
          (C.defaults = C.getDefaults()),
          (C.Parser = l),
          (C.parser = l.parse),
          (C.Renderer = a),
          (C.TextRenderer = s),
          (C.Lexer = r),
          (C.lexer = r.lex),
          (C.InlineLexer = o),
          (C.inlineLexer = o.output),
          (C.Slugger = c),
          (C.parse = C),
          (e.exports = C);
      })(this || ('undefined' != typeof window ? window : global));
    },
    'HvfG': function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
          n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
          r = /[*+-]\s/;
        function i(e, n) {
          var r = n.line,
            i = 0,
            o = 0,
            a = t.exec(e.getLine(r)),
            s = a[1];
          do {
            var l = r + (i += 1),
              c = e.getLine(l),
              u = t.exec(c);
            if (u) {
              var d = u[1],
                h = parseInt(a[3], 10) + i - o,
                f = parseInt(u[3], 10),
                p = f;
              if (s !== d || isNaN(f)) {
                if (s.length > d.length) return;
                if (s.length < d.length && 1 === i) return;
                o += 1;
              } else
                h === f && (p = f + 1),
                  h > f && (p = h + 1),
                  e.replaceRange(c.replace(t, d + p + u[4] + u[5]), { line: l, ch: 0 }, { line: l, ch: c.length });
            }
          } while (u);
        }
        e.commands.newlineAndIndentContinueMarkdownList = function(o) {
          if (o.getOption('disableInput')) return e.Pass;
          for (var a = o.listSelections(), s = [], l = 0; l < a.length; l++) {
            var c = a[l].head,
              u = o.getStateAfter(c.line),
              d = e.innerMode(o.getMode(), u);
            if ('markdown' !== d.mode.name) return void o.execCommand('newlineAndIndent');
            var h = !1 !== (u = d.state).list,
              f = 0 !== u.quote,
              p = o.getLine(c.line),
              m = t.exec(p),
              g = /^\s*$/.test(p.slice(0, c.ch));
            if (!a[l].empty() || (!h && !f) || !m || g) return void o.execCommand('newlineAndIndent');
            if (n.test(p))
              />\s*$/.test(p) || o.replaceRange('', { line: c.line, ch: 0 }, { line: c.line, ch: c.ch + 1 }),
                (s[l] = '\n');
            else {
              var v = m[1],
                x = m[5],
                y = !(r.test(m[2]) || m[2].indexOf('>') >= 0),
                b = y ? parseInt(m[3], 10) + 1 + m[4] : m[2].replace('x', ' ');
              (s[l] = '\n' + v + b + x), y && i(o, c);
            }
          }
          o.replaceSelections(s);
        };
      })(n('VrN/'));
    },
    'KIFd': function(e, t, n) {
      'use strict';
      var r = n('1Zcj'),
        i = n('ofXK'),
        o = n('fXoL');
      let a = (() => {
        class e {
          static forRoot() {
            return { ngModule: e, providers: [] };
          }
        }
        return (
          (e.ɵmod = o.Qb({ type: e, bootstrap: [r.a] })),
          (e.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [[i.c]],
          })),
          e
        );
      })();
      n.d(t, 'a', function() {
        return a;
      });
    },
    'RKCW': function(e, t, n) {
      !(function(e) {
        'use strict';
        var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/i;
        e.defineMode(
          'gfm',
          function(n, r) {
            var i = 0,
              o = {
                startState: function() {
                  return { code: !1, codeBlock: !1, ateSpace: !1 };
                },
                copyState: function(e) {
                  return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace };
                },
                token: function(e, n) {
                  if (((n.combineTokens = null), n.codeBlock))
                    return e.match(/^```+/) ? ((n.codeBlock = !1), null) : (e.skipToEnd(), null);
                  if ((e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)))
                    return e.skipToEnd(), (n.codeBlock = !0), null;
                  if ('`' === e.peek()) {
                    e.next();
                    var o = e.pos;
                    e.eatWhile('`');
                    var a = 1 + e.pos - o;
                    return n.code ? a === i && (n.code = !1) : ((i = a), (n.code = !0)), null;
                  }
                  if (n.code) return e.next(), null;
                  if (e.eatSpace()) return (n.ateSpace = !0), null;
                  if ((e.sol() || n.ateSpace) && ((n.ateSpace = !1), !1 !== r.gitHubSpice)) {
                    if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))
                      return (n.combineTokens = !0), 'link';
                    if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))
                      return (n.combineTokens = !0), 'link';
                  }
                  return e.match(t) &&
                    '](' != e.string.slice(e.start - 2, e.start) &&
                    (0 == e.start || /\W/.test(e.string.charAt(e.start - 1)))
                    ? ((n.combineTokens = !0), 'link')
                    : (e.next(), null);
                },
                blankLine: function(e) {
                  return (e.code = !1), null;
                },
              },
              a = { taskLists: !0, strikethrough: !0, emoji: !0 };
            for (var s in r) a[s] = r[s];
            return (a.name = 'markdown'), e.overlayMode(e.getMode(n, a), o);
          },
          'markdown',
        ),
          e.defineMIME('text/x-gfm', 'gfm');
      })(n('VrN/'), n('lZu9'), n('nrkQ'));
    },
    'Sl0r': function(e, t, n) {
      var r;
      !(function() {
        'use strict';
        (r = function(e, t, n, r) {
          (r = r || {}),
            (this.dictionary = null),
            (this.rules = {}),
            (this.dictionaryTable = {}),
            (this.compoundRules = []),
            (this.compoundRuleCodes = {}),
            (this.replacementTable = []),
            (this.flags = r.flags || {}),
            (this.memoized = {}),
            (this.loaded = !1);
          var i,
            o,
            a,
            s,
            l,
            c = this;
          function u(e, t) {
            var n = c._readFile(e, null, r.asyncLoad);
            r.asyncLoad
              ? n.then(function(e) {
                  t(e);
                })
              : t(n);
          }
          function d(e) {
            (t = e), n && f();
          }
          function h(e) {
            (n = e), t && f();
          }
          function f() {
            for (c.rules = c._parseAFF(t), c.compoundRuleCodes = {}, o = 0, s = c.compoundRules.length; o < s; o++) {
              var e = c.compoundRules[o];
              for (a = 0, l = e.length; a < l; a++) c.compoundRuleCodes[e[a]] = [];
            }
            for (o in ('ONLYINCOMPOUND' in c.flags && (c.compoundRuleCodes[c.flags.ONLYINCOMPOUND] = []),
            (c.dictionaryTable = c._parseDIC(n)),
            c.compoundRuleCodes))
              0 === c.compoundRuleCodes[o].length && delete c.compoundRuleCodes[o];
            for (o = 0, s = c.compoundRules.length; o < s; o++) {
              var i = c.compoundRules[o],
                u = '';
              for (a = 0, l = i.length; a < l; a++) {
                var d = i[a];
                u += d in c.compoundRuleCodes ? '(' + c.compoundRuleCodes[d].join('|') + ')' : d;
              }
              c.compoundRules[o] = new RegExp(u, 'i');
            }
            (c.loaded = !0), r.asyncLoad && r.loadedCallback && r.loadedCallback(c);
          }
          return (
            e &&
              ((c.dictionary = e),
              t && n
                ? f()
                : 'undefined' != typeof window &&
                  'chrome' in window &&
                  'extension' in window.chrome &&
                  'getURL' in window.chrome.extension
                ? ((i = r.dictionaryPath ? r.dictionaryPath : 'typo/dictionaries'),
                  t || u(chrome.extension.getURL(i + '/' + e + '/' + e + '.aff'), d),
                  n || u(chrome.extension.getURL(i + '/' + e + '/' + e + '.dic'), h))
                : ((i = r.dictionaryPath
                    ? r.dictionaryPath
                    : 'undefined' != typeof __dirname
                    ? __dirname + '/dictionaries'
                    : './dictionaries'),
                  t || u(i + '/' + e + '/' + e + '.aff', d),
                  n || u(i + '/' + e + '/' + e + '.dic', h))),
            this
          );
        }).prototype = {
          load: function(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            return this;
          },
          _readFile: function(e, t, r) {
            if (((t = t || 'utf8'), 'undefined' != typeof XMLHttpRequest)) {
              var i,
                o = new XMLHttpRequest();
              return (
                o.open('GET', e, r),
                r &&
                  (i = new Promise(function(e, t) {
                    (o.onload = function() {
                      200 === o.status ? e(o.responseText) : t(o.statusText);
                    }),
                      (o.onerror = function() {
                        t(o.statusText);
                      });
                  })),
                o.overrideMimeType && o.overrideMimeType('text/plain; charset=' + t),
                o.send(null),
                r ? i : o.responseText
              );
            }
            var a = n(4);
            try {
              if (a.existsSync(e)) {
                var s = a.statSync(e),
                  l = a.openSync(e, 'r'),
                  c = new Buffer(s.size);
                return a.readSync(l, c, 0, c.length, null), c.toString(t, 0, c.length);
              }
              console.log('Path ' + e + ' does not exist.');
            } catch (u) {
              return console.log(u), '';
            }
          },
          _parseAFF: function(e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l = {},
              c = (e = this._removeAffixComments(e)).split('\n');
            for (i = 0, a = c.length; i < a; i++) {
              var u = (t = c[i]).split(/\s+/),
                d = u[0];
              if ('PFX' == d || 'SFX' == d) {
                var h = u[1],
                  f = u[2],
                  p = [];
                for (o = i + 1, s = i + 1 + (n = parseInt(u[3], 10)); o < s; o++) {
                  var m = (r = c[o].split(/\s+/))[2],
                    g = r[3].split('/'),
                    v = g[0];
                  '0' === v && (v = '');
                  var x = this.parseRuleCodes(g[1]),
                    y = r[4],
                    b = {};
                  (b.add = v),
                    x.length > 0 && (b.continuationClasses = x),
                    '.' !== y && (b.match = 'SFX' === d ? new RegExp(y + '$') : new RegExp('^' + y)),
                    '0' != m && (b.remove = 'SFX' === d ? new RegExp(m + '$') : m),
                    p.push(b);
                }
                (l[h] = { type: d, combineable: 'Y' == f, entries: p }), (i += n);
              } else if ('COMPOUNDRULE' === d) {
                for (o = i + 1, s = i + 1 + (n = parseInt(u[1], 10)); o < s; o++)
                  (r = (t = c[o]).split(/\s+/)), this.compoundRules.push(r[1]);
                i += n;
              } else
                'REP' === d
                  ? 3 === (r = t.split(/\s+/)).length && this.replacementTable.push([r[1], r[2]])
                  : (this.flags[d] = u[1]);
            }
            return l;
          },
          _removeAffixComments: function(e) {
            return (e = (e = (e = e.replace(/^\s*#.*$/gm, '')).replace(/^\s\s*/m, '').replace(/\s\s*$/m, '')).replace(
              /\n{2,}/g,
              '\n',
            ))
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '');
          },
          _parseDIC: function(e) {
            var t = (e = this._removeDicComments(e)).split('\n'),
              n = {};
            function r(e, t) {
              n.hasOwnProperty(e) || (n[e] = null), t.length > 0 && (null === n[e] && (n[e] = []), n[e].push(t));
            }
            for (var i = 1, o = t.length; i < o; i++) {
              var a = t[i].split('/', 2),
                s = a[0];
              if (a.length > 1) {
                var l = this.parseRuleCodes(a[1]);
                ('NEEDAFFIX' in this.flags && -1 != l.indexOf(this.flags.NEEDAFFIX)) || r(s, l);
                for (var c = 0, u = l.length; c < u; c++) {
                  var d = l[c],
                    h = this.rules[d];
                  if (h)
                    for (var f = this._applyRule(s, h), p = 0, m = f.length; p < m; p++) {
                      var g = f[p];
                      if ((r(g, []), h.combineable))
                        for (var v = c + 1; v < u; v++) {
                          var x = this.rules[l[v]];
                          if (x && x.combineable && h.type != x.type)
                            for (var y = this._applyRule(g, x), b = 0, w = y.length; b < w; b++) r(y[b], []);
                        }
                    }
                  d in this.compoundRuleCodes && this.compoundRuleCodes[d].push(s);
                }
              } else r(s.trim(), []);
            }
            return n;
          },
          _removeDicComments: function(e) {
            return e.replace(/^\t.*$/gm, '');
          },
          parseRuleCodes: function(e) {
            if (!e) return [];
            if (!('FLAG' in this.flags)) return e.split('');
            if ('long' === this.flags.FLAG) {
              for (var t = [], n = 0, r = e.length; n < r; n += 2) t.push(e.substr(n, 2));
              return t;
            }
            return 'num' === this.flags.FLAG ? e.split(',') : void 0;
          },
          _applyRule: function(e, t) {
            for (var n = t.entries, r = [], i = 0, o = n.length; i < o; i++) {
              var a = n[i];
              if (!a.match || e.match(a.match)) {
                var s = e;
                if (
                  (a.remove && (s = s.replace(a.remove, '')),
                  'SFX' === t.type ? (s += a.add) : (s = a.add + s),
                  r.push(s),
                  'continuationClasses' in a)
                )
                  for (var l = 0, c = a.continuationClasses.length; l < c; l++) {
                    var u = this.rules[a.continuationClasses[l]];
                    u && (r = r.concat(this._applyRule(s, u)));
                  }
              }
            }
            return r;
          },
          check: function(e) {
            if (!this.loaded) throw 'Dictionary not loaded.';
            var t = e.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            if (this.checkExact(t)) return !0;
            if (t.toUpperCase() === t) {
              var n = t[0] + t.substring(1).toLowerCase();
              if (this.hasFlag(n, 'KEEPCASE')) return !1;
              if (this.checkExact(n)) return !0;
            }
            var r = t.toLowerCase();
            if (r !== t) {
              if (this.hasFlag(r, 'KEEPCASE')) return !1;
              if (this.checkExact(r)) return !0;
            }
            return !1;
          },
          checkExact: function(e) {
            if (!this.loaded) throw 'Dictionary not loaded.';
            var t,
              n,
              r = this.dictionaryTable[e];
            if (void 0 === r) {
              if ('COMPOUNDMIN' in this.flags && e.length >= this.flags.COMPOUNDMIN)
                for (t = 0, n = this.compoundRules.length; t < n; t++) if (e.match(this.compoundRules[t])) return !0;
            } else {
              if (null === r) return !0;
              if ('object' == typeof r)
                for (t = 0, n = r.length; t < n; t++) if (!this.hasFlag(e, 'ONLYINCOMPOUND', r[t])) return !0;
            }
            return !1;
          },
          hasFlag: function(e, t, n) {
            if (!this.loaded) throw 'Dictionary not loaded.';
            return !!(
              t in this.flags &&
              (void 0 === n && (n = Array.prototype.concat.apply([], this.dictionaryTable[e])),
              n && -1 !== n.indexOf(this.flags[t]))
            );
          },
          alphabet: '',
          suggest: function(e, t) {
            if (!this.loaded) throw 'Dictionary not loaded.';
            if (((t = t || 5), this.memoized.hasOwnProperty(e))) {
              var n = this.memoized[e].limit;
              if (t <= n || this.memoized[e].suggestions.length < n) return this.memoized[e].suggestions.slice(0, t);
            }
            if (this.check(e)) return [];
            for (var r = 0, i = this.replacementTable.length; r < i; r++) {
              var o = this.replacementTable[r];
              if (-1 !== e.indexOf(o[0])) {
                var a = e.replace(o[0], o[1]);
                if (this.check(a)) return [a];
              }
            }
            var s = this;
            function l(e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                l = [];
              for (t = 0, i = e.length; t < i; t++) {
                var c = e[t];
                for (n = 0, o = c.length + 1; n < o; n++) {
                  var u = [c.substring(0, n), c.substring(n)];
                  if (
                    (u[1] && l.push(u[0] + u[1].substring(1)),
                    u[1].length > 1 && u[1][1] !== u[1][0] && l.push(u[0] + u[1][1] + u[1][0] + u[1].substring(2)),
                    u[1])
                  )
                    for (r = 0, a = s.alphabet.length; r < a; r++)
                      s.alphabet[r] != u[1].substring(0, 1) && l.push(u[0] + s.alphabet[r] + u[1].substring(1));
                  if (u[1]) for (r = 0, a = s.alphabet.length; r < a; r++) l.push(u[0] + s.alphabet[r] + u[1]);
                }
              }
              return l;
            }
            return (
              (s.alphabet = 'abcdefghijklmnopqrstuvwxyz'),
              (this.memoized[e] = {
                suggestions: (function(e) {
                  var n,
                    r,
                    i = l([e]),
                    o = l(i),
                    a = (function(e) {
                      for (var t = [], n = 0, r = e.length; n < r; n++) s.check(e[n]) && t.push(e[n]);
                      return t;
                    })(i.concat(o)),
                    c = {};
                  for (n = 0, r = a.length; n < r; n++) a[n] in c ? (c[a[n]] += 1) : (c[a[n]] = 1);
                  var u = [];
                  for (n in c) c.hasOwnProperty(n) && u.push([n, c[n]]);
                  u.sort(function(e, t) {
                    return e[1] < t[1] ? -1 : 1;
                  }).reverse();
                  var d = [],
                    h = 'lowercase';
                  for (
                    e.toUpperCase() === e
                      ? (h = 'uppercase')
                      : e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase() === e && (h = 'capitalized'),
                      n = 0,
                      r = Math.min(t, u.length);
                    n < r;
                    n++
                  )
                    'uppercase' === h
                      ? (u[n][0] = u[n][0].toUpperCase())
                      : 'capitalized' === h && (u[n][0] = u[n][0].substr(0, 1).toUpperCase() + u[n][0].substr(1)),
                      s.hasFlag(u[n][0], 'NOSUGGEST') || d.push(u[n][0]);
                  return d;
                })(e),
                limit: t,
              }),
              this.memoized[e].suggestions
            );
          },
        };
      })(),
        (e.exports = r);
    },
    'VrN/': function(e, t, n) {
      e.exports = (function() {
        'use strict';
        var e = navigator.userAgent,
          t = navigator.platform,
          n = /gecko\/\d/i.test(e),
          r = /MSIE \d/.test(e),
          i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
          o = /Edge\/(\d+)/.exec(e),
          a = r || i || o,
          s = a && (r ? document.documentMode || 6 : +(o || i)[1]),
          l = !o && /WebKit\//.test(e),
          c = l && /Qt\/\d+\.\d+/.test(e),
          u = !o && /Chrome\//.test(e),
          d = /Opera\//.test(e),
          h = /Apple Computer/.test(navigator.vendor),
          f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
          p = /PhantomJS/.test(e),
          m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
          g = /Android/.test(e),
          v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
          x = m || /Mac/.test(t),
          y = /\bCrOS\b/.test(e),
          b = /win/i.test(t),
          w = d && e.match(/Version\/(\d*\.\d*)/);
        w && (w = Number(w[1])), w && w >= 15 && ((d = !1), (l = !0));
        var C = x && (c || (d && (null == w || w < 12.11))),
          k = n || (a && s >= 9);
        function S(e) {
          return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        var M,
          L = function(e, t) {
            var n = e.className,
              r = S(t).exec(n);
            if (r) {
              var i = n.slice(r.index + r[0].length);
              e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
            }
          };
        function T(e) {
          for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
          return e;
        }
        function O(e, t) {
          return T(e).appendChild(t);
        }
        function D(e, t, n, r) {
          var i = document.createElement(e);
          if ((n && (i.className = n), r && (i.style.cssText = r), 'string' == typeof t))
            i.appendChild(document.createTextNode(t));
          else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
          return i;
        }
        function N(e, t, n, r) {
          var i = D(e, t, n, r);
          return i.setAttribute('role', 'presentation'), i;
        }
        function A(e, t) {
          if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
          do {
            if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
          } while ((t = t.parentNode));
        }
        function _() {
          var e;
          try {
            e = document.activeElement;
          } catch (Ae) {
            e = document.body || null;
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
          return e;
        }
        function E(e, t) {
          var n = e.className;
          S(t).test(n) || (e.className += (n ? ' ' : '') + t);
        }
        function P(e, t) {
          for (var n = e.split(' '), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += ' ' + n[r]);
          return t;
        }
        M = document.createRange
          ? function(e, t, n, r) {
              var i = document.createRange();
              return i.setEnd(r || e, n), i.setStart(e, t), i;
            }
          : function(e, t, n) {
              var r = document.body.createTextRange();
              try {
                r.moveToElementText(e.parentNode);
              } catch (Ae) {
                return r;
              }
              return r.collapse(!0), r.moveEnd('character', n), r.moveStart('character', t), r;
            };
        var F = function(e) {
          e.select();
        };
        function z(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function() {
            return e.apply(null, t);
          };
        }
        function I(e, t, n) {
          for (var r in (t || (t = {}), e)) !e.hasOwnProperty(r) || (!1 === n && t.hasOwnProperty(r)) || (t[r] = e[r]);
          return t;
        }
        function H(e, t, n, r, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
          for (var o = r || 0, a = i || 0; ; ) {
            var s = e.indexOf('\t', o);
            if (s < 0 || s >= t) return a + (t - o);
            (a += s - o), (a += n - (a % n)), (o = s + 1);
          }
        }
        m
          ? (F = function(e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
            })
          : a &&
            (F = function(e) {
              try {
                e.select();
              } catch (t) {}
            });
        var R = function() {
          (this.id = null), (this.f = null), (this.time = 0), (this.handler = z(this.onTimeout, this));
        };
        function B(e, t) {
          for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
          return -1;
        }
        (R.prototype.onTimeout = function(e) {
          (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }),
          (R.prototype.set = function(e, t) {
            this.f = t;
            var n = +new Date() + e;
            (!this.id || n < this.time) &&
              (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n));
          });
        var W = 30,
          j = {
            toString: function() {
              return 'CodeMirror.Pass';
            },
          },
          q = { scroll: !1 },
          U = { origin: '*mouse' },
          $ = { origin: '+move' };
        function G(e, t, n) {
          for (var r = 0, i = 0; ; ) {
            var o = e.indexOf('\t', r);
            -1 == o && (o = e.length);
            var a = o - r;
            if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
            if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
          }
        }
        var V = [''];
        function X(e) {
          for (; V.length <= e; ) V.push(K(V) + ' ');
          return V[e];
        }
        function K(e) {
          return e[e.length - 1];
        }
        function Z(e, t) {
          for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
          return n;
        }
        function Y() {}
        function Q(e, t) {
          var n;
          return Object.create ? (n = Object.create(e)) : ((Y.prototype = e), (n = new Y())), t && I(t, n), n;
        }
        var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function ee(e) {
          return /\w/.test(e) || (e > '\x80' && (e.toUpperCase() != e.toLowerCase() || J.test(e)));
        }
        function te(e, t) {
          return t ? !!(t.source.indexOf('\\w') > -1 && ee(e)) || t.test(e) : ee(e);
        }
        function ne(e) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
          return !0;
        }
        var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function ie(e) {
          return e.charCodeAt(0) >= 768 && re.test(e);
        }
        function oe(e, t, n) {
          for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t)); ) t += n;
          return t;
        }
        function ae(e, t, n) {
          for (var r = t > n ? -1 : 1; ; ) {
            if (t == n) return t;
            var i = (t + n) / 2,
              o = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : n;
            e(o) ? (n = o) : (t = o + r);
          }
        }
        var se = null;
        function le(e, t, n) {
          var r;
          se = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && 'before' == n ? (r = i) : (se = i)),
              o.from == t && (o.from != o.to && 'before' != n ? (r = i) : (se = i));
          }
          return null != r ? r : se;
        }
        var ce = (function() {
          var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            t = /[stwN]/,
            n = /[LRr]/,
            r = /[Lb1n]/,
            i = /[1n]/;
          function o(e, t, n) {
            (this.level = e), (this.from = t), (this.to = n);
          }
          return function(a, s) {
            var l = 'ltr' == s ? 'L' : 'R';
            if (0 == a.length || ('ltr' == s && !e.test(a))) return !1;
            for (var c, u = a.length, d = [], h = 0; h < u; ++h)
              d.push(
                (c = a.charCodeAt(h)) <= 247
                  ? 'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN'.charAt(
                      c,
                    )
                  : 1424 <= c && c <= 1524
                  ? 'R'
                  : 1536 <= c && c <= 1785
                  ? 'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'.charAt(
                      c - 1536,
                    )
                  : 1774 <= c && c <= 2220
                  ? 'r'
                  : 8192 <= c && c <= 8203
                  ? 'w'
                  : 8204 == c
                  ? 'b'
                  : 'L',
              );
            for (var f = 0, p = l; f < u; ++f) {
              var m = d[f];
              'm' == m ? (d[f] = p) : (p = m);
            }
            for (var g = 0, v = l; g < u; ++g) {
              var x = d[g];
              '1' == x && 'r' == v ? (d[g] = 'n') : n.test(x) && ((v = x), 'r' == x && (d[g] = 'R'));
            }
            for (var y = 1, b = d[0]; y < u - 1; ++y) {
              var w = d[y];
              '+' == w && '1' == b && '1' == d[y + 1]
                ? (d[y] = '1')
                : ',' != w || b != d[y + 1] || ('1' != b && 'n' != b) || (d[y] = b),
                (b = w);
            }
            for (var C = 0; C < u; ++C) {
              var k = d[C];
              if (',' == k) d[C] = 'N';
              else if ('%' == k) {
                var S = void 0;
                for (S = C + 1; S < u && '%' == d[S]; ++S);
                for (var M = (C && '!' == d[C - 1]) || (S < u && '1' == d[S]) ? '1' : 'N', L = C; L < S; ++L) d[L] = M;
                C = S - 1;
              }
            }
            for (var T = 0, O = l; T < u; ++T) {
              var D = d[T];
              'L' == O && '1' == D ? (d[T] = 'L') : n.test(D) && (O = D);
            }
            for (var N = 0; N < u; ++N)
              if (t.test(d[N])) {
                var A = void 0;
                for (A = N + 1; A < u && t.test(d[A]); ++A);
                for (
                  var _ = 'L' == (N ? d[N - 1] : l), E = _ == ('L' == (A < u ? d[A] : l)) ? (_ ? 'L' : 'R') : l, P = N;
                  P < A;
                  ++P
                )
                  d[P] = E;
                N = A - 1;
              }
            for (var F, z = [], I = 0; I < u; )
              if (r.test(d[I])) {
                var H = I;
                for (++I; I < u && r.test(d[I]); ++I);
                z.push(new o(0, H, I));
              } else {
                var R = I,
                  B = z.length;
                for (++I; I < u && 'L' != d[I]; ++I);
                for (var W = R; W < I; )
                  if (i.test(d[W])) {
                    R < W && z.splice(B, 0, new o(1, R, W));
                    var j = W;
                    for (++W; W < I && i.test(d[W]); ++W);
                    z.splice(B, 0, new o(2, j, W)), (R = W);
                  } else ++W;
                R < I && z.splice(B, 0, new o(1, R, I));
              }
            return (
              'ltr' == s &&
                (1 == z[0].level &&
                  (F = a.match(/^\s+/)) &&
                  ((z[0].from = F[0].length), z.unshift(new o(0, 0, F[0].length))),
                1 == K(z).level &&
                  (F = a.match(/\s+$/)) &&
                  ((K(z).to -= F[0].length), z.push(new o(0, u - F[0].length, u)))),
              'rtl' == s ? z.reverse() : z
            );
          };
        })();
        function ue(e, t) {
          var n = e.order;
          return null == n && (n = e.order = ce(e.text, t)), n;
        }
        var de = [],
          he = function(e, t, n) {
            if (e.addEventListener) e.addEventListener(t, n, !1);
            else if (e.attachEvent) e.attachEvent('on' + t, n);
            else {
              var r = e._handlers || (e._handlers = {});
              r[t] = (r[t] || de).concat(n);
            }
          };
        function fe(e, t) {
          return (e._handlers && e._handlers[t]) || de;
        }
        function pe(e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n, !1);
          else if (e.detachEvent) e.detachEvent('on' + t, n);
          else {
            var r = e._handlers,
              i = r && r[t];
            if (i) {
              var o = B(i, n);
              o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }
        function me(e, t) {
          var n = fe(e, t);
          if (n.length)
            for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r);
        }
        function ge(e, t, n) {
          return (
            'string' == typeof t &&
              (t = {
                type: t,
                preventDefault: function() {
                  this.defaultPrevented = !0;
                },
              }),
            me(e, n || t.type, e, t),
            Ce(t) || t.codemirrorIgnore
          );
        }
        function ve(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t)
            for (
              var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0;
              r < t.length;
              ++r
            )
              -1 == B(n, t[r]) && n.push(t[r]);
        }
        function xe(e, t) {
          return fe(e, t).length > 0;
        }
        function ye(e) {
          (e.prototype.on = function(e, t) {
            he(this, e, t);
          }),
            (e.prototype.off = function(e, t) {
              pe(this, e, t);
            });
        }
        function be(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function we(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function Ce(e) {
          return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
        }
        function ke(e) {
          be(e), we(e);
        }
        function Se(e) {
          return e.target || e.srcElement;
        }
        function Me(e) {
          var t = e.which;
          return (
            null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
            x && e.ctrlKey && 1 == t && (t = 3),
            t
          );
        }
        var Le,
          Te,
          Oe = (function() {
            if (a && s < 9) return !1;
            var e = D('div');
            return 'draggable' in e || 'dragDrop' in e;
          })();
        function De(e) {
          if (null == Le) {
            var t = D('span', '\u200b');
            O(e, D('span', [t, document.createTextNode('x')])),
              0 != e.firstChild.offsetHeight && (Le = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && s < 8));
          }
          var n = Le
            ? D('span', '\u200b')
            : D('span', '\xa0', null, 'display: inline-block; width: 1px; margin-right: -1px');
          return n.setAttribute('cm-text', ''), n;
        }
        function Ne(e) {
          if (null != Te) return Te;
          var t = O(e, document.createTextNode('A\u062eA')),
            n = M(t, 0, 1).getBoundingClientRect(),
            r = M(t, 1, 2).getBoundingClientRect();
          return T(e), !(!n || n.left == n.right) && (Te = r.right - n.right < 3);
        }
        var Ae,
          _e =
            3 != '\n\nb'.split(/\n/).length
              ? function(e) {
                  for (var t = 0, n = [], r = e.length; t <= r; ) {
                    var i = e.indexOf('\n', t);
                    -1 == i && (i = e.length);
                    var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                      a = o.indexOf('\r');
                    -1 != a ? (n.push(o.slice(0, a)), (t += a + 1)) : (n.push(o), (t = i + 1));
                  }
                  return n;
                }
              : function(e) {
                  return e.split(/\r\n?|\n/);
                },
          Ee = window.getSelection
            ? function(e) {
                try {
                  return e.selectionStart != e.selectionEnd;
                } catch (Ae) {
                  return !1;
                }
              }
            : function(e) {
                var t;
                try {
                  t = e.ownerDocument.selection.createRange();
                } catch (Ae) {}
                return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints('StartToEnd', t);
              },
          Pe = 'oncopy' in (Ae = D('div')) || (Ae.setAttribute('oncopy', 'return;'), 'function' == typeof Ae.oncopy),
          Fe = null,
          ze = {},
          Ie = {};
        function He(e, t) {
          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (ze[e] = t);
        }
        function Re(e) {
          if ('string' == typeof e && Ie.hasOwnProperty(e)) e = Ie[e];
          else if (e && 'string' == typeof e.name && Ie.hasOwnProperty(e.name)) {
            var t = Ie[e.name];
            'string' == typeof t && (t = { name: t }), ((e = Q(t, e)).name = t.name);
          } else {
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Re('application/xml');
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Re('application/json');
          }
          return 'string' == typeof e ? { name: e } : e || { name: 'null' };
        }
        function Be(e, t) {
          t = Re(t);
          var n = ze[t.name];
          if (!n) return Be(e, 'text/plain');
          var r = n(e, t);
          if (We.hasOwnProperty(t.name)) {
            var i = We[t.name];
            for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
          }
          if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps))
            for (var a in t.modeProps) r[a] = t.modeProps[a];
          return r;
        }
        var We = {};
        function je(e, t) {
          I(t, We.hasOwnProperty(e) ? We[e] : (We[e] = {}));
        }
        function qe(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var n = {};
          for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), (n[r] = i);
          }
          return n;
        }
        function Ue(e, t) {
          for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; ) (t = n.state), (e = n.mode);
          return n || { mode: e, state: t };
        }
        function $e(e, t, n) {
          return !e.startState || e.startState(t, n);
        }
        var Ge = function(e, t, n) {
          (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = n);
        };
        function Ve(e, t) {
          if ((t -= e.first) < 0 || t >= e.size)
            throw new Error('There is no line ' + (t + e.first) + ' in the document.');
          for (var n = e; !n.lines; )
            for (var r = 0; ; ++r) {
              var i = n.children[r],
                o = i.chunkSize();
              if (t < o) {
                n = i;
                break;
              }
              t -= o;
            }
          return n.lines[t];
        }
        function Xe(e, t, n) {
          var r = [],
            i = t.line;
          return (
            e.iter(t.line, n.line + 1, function(e) {
              var o = e.text;
              i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
            }),
            r
          );
        }
        function Ke(e, t, n) {
          var r = [];
          return (
            e.iter(t, n, function(e) {
              r.push(e.text);
            }),
            r
          );
        }
        function Ze(e, t) {
          var n = t - e.height;
          if (n) for (var r = e; r; r = r.parent) r.height += n;
        }
        function Ye(e) {
          if (null == e.parent) return null;
          for (var t = e.parent, n = B(t.lines, e), r = t.parent; r; t = r, r = r.parent)
            for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
          return n + t.first;
        }
        function Qe(e, t) {
          var n = e.first;
          e: do {
            for (var r = 0; r < e.children.length; ++r) {
              var i = e.children[r],
                o = i.height;
              if (t < o) {
                e = i;
                continue e;
              }
              (t -= o), (n += i.chunkSize());
            }
            return n;
          } while (!e.lines);
          for (var a = 0; a < e.lines.length; ++a) {
            var s = e.lines[a].height;
            if (t < s) break;
            t -= s;
          }
          return n + a;
        }
        function Je(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function et(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function tt(e, t, n) {
          if ((void 0 === n && (n = null), !(this instanceof tt))) return new tt(e, t, n);
          (this.line = e), (this.ch = t), (this.sticky = n);
        }
        function nt(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function rt(e, t) {
          return e.sticky == t.sticky && 0 == nt(e, t);
        }
        function it(e) {
          return tt(e.line, e.ch);
        }
        function ot(e, t) {
          return nt(e, t) < 0 ? t : e;
        }
        function at(e, t) {
          return nt(e, t) < 0 ? e : t;
        }
        function st(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function lt(e, t) {
          if (t.line < e.first) return tt(e.first, 0);
          var n = e.first + e.size - 1;
          return t.line > n
            ? tt(n, Ve(e, n).text.length)
            : (function(e, t) {
                var n = e.ch;
                return null == n || n > t ? tt(e.line, t) : n < 0 ? tt(e.line, 0) : e;
              })(t, Ve(e, t.line).text.length);
        }
        function ct(e, t) {
          for (var n = [], r = 0; r < t.length; r++) n[r] = lt(e, t[r]);
          return n;
        }
        (Ge.prototype.eol = function() {
          return this.pos >= this.string.length;
        }),
          (Ge.prototype.sol = function() {
            return this.pos == this.lineStart;
          }),
          (Ge.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0;
          }),
          (Ge.prototype.next = function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++);
          }),
          (Ge.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos);
            if ('string' == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
          }),
          (Ge.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e); );
            return this.pos > t;
          }),
          (Ge.prototype.eatSpace = function() {
            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
            return this.pos > e;
          }),
          (Ge.prototype.skipToEnd = function() {
            this.pos = this.string.length;
          }),
          (Ge.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
          }),
          (Ge.prototype.backUp = function(e) {
            this.pos -= e;
          }),
          (Ge.prototype.column = function() {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = H(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue,
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue - (this.lineStart ? H(this.string, this.lineStart, this.tabSize) : 0)
            );
          }),
          (Ge.prototype.indentation = function() {
            return (
              H(this.string, null, this.tabSize) - (this.lineStart ? H(this.string, this.lineStart, this.tabSize) : 0)
            );
          }),
          (Ge.prototype.match = function(e, t, n) {
            if ('string' != typeof e) {
              var r = this.string.slice(this.pos).match(e);
              return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
            }
            var i = function(e) {
              return n ? e.toLowerCase() : e;
            };
            if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
          }),
          (Ge.prototype.current = function() {
            return this.string.slice(this.start, this.pos);
          }),
          (Ge.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
              return t();
            } finally {
              this.lineStart -= e;
            }
          }),
          (Ge.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
          }),
          (Ge.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
          });
        var ut = function(e, t) {
            (this.state = e), (this.lookAhead = t);
          },
          dt = function(e, t, n, r) {
            (this.state = t),
              (this.doc = e),
              (this.line = n),
              (this.maxLookAhead = r || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        function ht(e, t, n, r) {
          var i = [e.state.modeGen],
            o = {};
          wt(
            e,
            t.text,
            e.doc.mode,
            n,
            function(e, t) {
              return i.push(e, t);
            },
            o,
            r,
          );
          for (
            var a = n.state,
              s = function(r) {
                n.baseTokens = i;
                var s = e.state.overlays[r],
                  l = 1,
                  c = 0;
                (n.state = !0),
                  wt(
                    e,
                    t.text,
                    s.mode,
                    n,
                    function(e, t) {
                      for (var n = l; c < e; ) {
                        var r = i[l];
                        r > e && i.splice(l, 1, e, i[l + 1], r), (l += 2), (c = Math.min(e, r));
                      }
                      if (t)
                        if (s.opaque) i.splice(n, l - n, e, 'overlay ' + t), (l = n + 2);
                        else
                          for (; n < l; n += 2) {
                            var o = i[n + 1];
                            i[n + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                          }
                    },
                    o,
                  ),
                  (n.state = a),
                  (n.baseTokens = null),
                  (n.baseTokenPos = 1);
              },
              l = 0;
            l < e.state.overlays.length;
            ++l
          )
            s(l);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function ft(e, t, n) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = pt(e, Ye(t)),
              i = t.text.length > e.options.maxHighlightLength && qe(e.doc.mode, r.state),
              o = ht(e, t, r);
            i && (r.state = i),
              (t.stateAfter = r.save(!i)),
              (t.styles = o.styles),
              o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
              n === e.doc.highlightFrontier &&
                (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
          }
          return t.styles;
        }
        function pt(e, t, n) {
          var r = e.doc,
            i = e.display;
          if (!r.mode.startState) return new dt(r, !0, t);
          var o = (function(e, t, n) {
              for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
                if (s <= o.first) return o.first;
                var l = Ve(o, s - 1),
                  c = l.stateAfter;
                if (c && (!n || s + (c instanceof ut ? c.lookAhead : 0) <= o.modeFrontier)) return s;
                var u = H(l.text, null, e.options.tabSize);
                (null == i || r > u) && ((i = s - 1), (r = u));
              }
              return i;
            })(e, t, n),
            a = o > r.first && Ve(r, o - 1).stateAfter,
            s = a ? dt.fromSaved(r, a, o) : new dt(r, $e(r.mode), o);
          return (
            r.iter(o, t, function(n) {
              mt(e, n.text, s);
              var r = s.line;
              (n.stateAfter = r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo) ? s.save() : null),
                s.nextLine();
            }),
            n && (r.modeFrontier = s.line),
            s
          );
        }
        function mt(e, t, n, r) {
          var i = e.doc.mode,
            o = new Ge(t, e.options.tabSize, n);
          for (o.start = o.pos = r || 0, '' == t && gt(i, n.state); !o.eol(); ) vt(i, o, n.state), (o.start = o.pos);
        }
        function gt(e, t) {
          if (e.blankLine) return e.blankLine(t);
          if (e.innerMode) {
            var n = Ue(e, t);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
          }
        }
        function vt(e, t, n, r) {
          for (var i = 0; i < 10; i++) {
            r && (r[0] = Ue(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start) return o;
          }
          throw new Error('Mode ' + e.name + ' failed to advance stream.');
        }
        (dt.prototype.lookAhead = function(e) {
          var t = this.doc.getLine(this.line + e);
          return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
        }),
          (dt.prototype.baseToken = function(e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return { type: t && t.replace(/( |^)overlay .*/, ''), size: this.baseTokens[this.baseTokenPos] - e };
          }),
          (dt.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (dt.fromSaved = function(e, t, n) {
            return t instanceof ut ? new dt(e, qe(e.mode, t.state), n, t.lookAhead) : new dt(e, qe(e.mode, t), n);
          }),
          (dt.prototype.save = function(e) {
            var t = !1 !== e ? qe(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new ut(t, this.maxLookAhead) : t;
          });
        var xt = function(e, t, n) {
          (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = n);
        };
        function yt(e, t, n, r) {
          var i,
            o,
            a = e.doc,
            s = a.mode,
            l = Ve(a, (t = lt(a, t)).line),
            c = pt(e, t.line, n),
            u = new Ge(l.text, e.options.tabSize, c);
          for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
            (u.start = u.pos), (i = vt(s, u, c.state)), r && o.push(new xt(u, i, qe(a.mode, c.state)));
          return r ? o : new xt(u, i, c.state);
        }
        function bt(e, t) {
          if (e)
            for (;;) {
              var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!n) break;
              e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
              var r = n[1] ? 'bgClass' : 'textClass';
              null == t[r]
                ? (t[r] = n[2])
                : new RegExp('(?:^|s)' + n[2] + '(?:$|s)').test(t[r]) || (t[r] += ' ' + n[2]);
            }
          return e;
        }
        function wt(e, t, n, r, i, o, a) {
          var s = n.flattenSpans;
          null == s && (s = e.options.flattenSpans);
          var l,
            c = 0,
            u = null,
            d = new Ge(t, e.options.tabSize, r),
            h = e.options.addModeClass && [null];
          for ('' == t && bt(gt(n, r.state), o); !d.eol(); ) {
            if (
              (d.pos > e.options.maxHighlightLength
                ? ((s = !1), a && mt(e, t, r, d.pos), (d.pos = t.length), (l = null))
                : (l = bt(vt(n, d, r.state, h), o)),
              h)
            ) {
              var f = h[0].name;
              f && (l = 'm-' + (l ? f + ' ' + l : f));
            }
            if (!s || u != l) {
              for (; c < d.start; ) i((c = Math.min(d.start, c + 5e3)), u);
              u = l;
            }
            d.start = d.pos;
          }
          for (; c < d.pos; ) {
            var p = Math.min(d.pos, c + 5e3);
            i(p, u), (c = p);
          }
        }
        var Ct = !1,
          kt = !1;
        function St(e, t, n) {
          (this.marker = e), (this.from = t), (this.to = n);
        }
        function Mt(e, t) {
          if (e)
            for (var n = 0; n < e.length; ++n) {
              var r = e[n];
              if (r.marker == t) return r;
            }
        }
        function Lt(e, t) {
          for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
          return n;
        }
        function Tt(e, t) {
          if (t.full) return null;
          var n = Je(e, t.from.line) && Ve(e, t.from.line).markedSpans,
            r = Je(e, t.to.line) && Ve(e, t.to.line).markedSpans;
          if (!n && !r) return null;
          var i = t.from.ch,
            o = t.to.ch,
            a = 0 == nt(t.from, t.to),
            s = (function(e, t, n) {
              var r;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    a = o.marker;
                  (null != o.from &&
                    !(a.inclusiveLeft ? o.from <= t : o.from < t) &&
                    (o.from != t || 'bookmark' != a.type || (n && o.marker.insertLeft))) ||
                    (r || (r = [])).push(
                      new St(a, o.from, null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) ? null : o.to),
                    );
                }
              return r;
            })(n, i, a),
            l = (function(e, t, n) {
              var r;
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var o = e[i],
                    a = o.marker;
                  (null == o.to ||
                    (a.inclusiveRight ? o.to >= t : o.to > t) ||
                    (o.from == t && 'bookmark' == a.type && (!n || o.marker.insertLeft))) &&
                    (r || (r = [])).push(
                      new St(
                        a,
                        null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) ? null : o.from - t,
                        null == o.to ? null : o.to - t,
                      ),
                    );
                }
              return r;
            })(r, o, a),
            c = 1 == t.text.length,
            u = K(t.text).length + (c ? i : 0);
          if (s)
            for (var d = 0; d < s.length; ++d) {
              var h = s[d];
              if (null == h.to) {
                var f = Mt(l, h.marker);
                f ? c && (h.to = null == f.to ? null : f.to + u) : (h.to = i);
              }
            }
          if (l)
            for (var p = 0; p < l.length; ++p) {
              var m = l[p];
              null != m.to && (m.to += u),
                null == m.from
                  ? Mt(s, m.marker) || ((m.from = u), c && (s || (s = [])).push(m))
                  : ((m.from += u), c && (s || (s = [])).push(m));
            }
          s && (s = Ot(s)), l && l != s && (l = Ot(l));
          var g = [s];
          if (!c) {
            var v,
              x = t.text.length - 2;
            if (x > 0 && s)
              for (var y = 0; y < s.length; ++y)
                null == s[y].to && (v || (v = [])).push(new St(s[y].marker, null, null));
            for (var b = 0; b < x; ++b) g.push(v);
            g.push(l);
          }
          return g;
        }
        function Ot(e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
          }
          return e.length ? e : null;
        }
        function Dt(e) {
          var t = e.markedSpans;
          if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
            e.markedSpans = null;
          }
        }
        function Nt(e, t) {
          if (t) {
            for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
            e.markedSpans = t;
          }
        }
        function At(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function _t(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function Et(e, t) {
          var n = e.lines.length - t.lines.length;
          if (0 != n) return n;
          var r = e.find(),
            i = t.find(),
            o = nt(r.from, i.from) || At(e) - At(t);
          return o ? -o : nt(r.to, i.to) || _t(e) - _t(t) || t.id - e.id;
        }
        function Pt(e, t) {
          var n,
            r = kt && e.markedSpans;
          if (r)
            for (var i = void 0, o = 0; o < r.length; ++o)
              (i = r[o]).marker.collapsed &&
                null == (t ? i.from : i.to) &&
                (!n || Et(n, i.marker) < 0) &&
                (n = i.marker);
          return n;
        }
        function Ft(e) {
          return Pt(e, !0);
        }
        function zt(e) {
          return Pt(e, !1);
        }
        function It(e, t) {
          var n,
            r = kt && e.markedSpans;
          if (r)
            for (var i = 0; i < r.length; ++i) {
              var o = r[i];
              o.marker.collapsed &&
                (null == o.from || o.from < t) &&
                (null == o.to || o.to > t) &&
                (!n || Et(n, o.marker) < 0) &&
                (n = o.marker);
            }
          return n;
        }
        function Ht(e, t, n, r, i) {
          var o = Ve(e, t),
            a = kt && o.markedSpans;
          if (a)
            for (var s = 0; s < a.length; ++s) {
              var l = a[s];
              if (l.marker.collapsed) {
                var c = l.marker.find(0),
                  u = nt(c.from, n) || At(l.marker) - At(i),
                  d = nt(c.to, r) || _t(l.marker) - _t(i);
                if (
                  !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                  ((u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? nt(c.to, n) >= 0 : nt(c.to, n) > 0)) ||
                    (u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? nt(c.from, r) <= 0 : nt(c.from, r) < 0)))
                )
                  return !0;
              }
            }
        }
        function Rt(e) {
          for (var t; (t = Ft(e)); ) e = t.find(-1, !0).line;
          return e;
        }
        function Bt(e, t) {
          var n = Ve(e, t),
            r = Rt(n);
          return n == r ? t : Ye(r);
        }
        function Wt(e, t) {
          if (t > e.lastLine()) return t;
          var n,
            r = Ve(e, t);
          if (!jt(e, r)) return t;
          for (; (n = zt(r)); ) r = n.find(1, !0).line;
          return Ye(r) + 1;
        }
        function jt(e, t) {
          var n = kt && t.markedSpans;
          if (n)
            for (var r = void 0, i = 0; i < n.length; ++i)
              if ((r = n[i]).marker.collapsed) {
                if (null == r.from) return !0;
                if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && qt(e, t, r)) return !0;
              }
        }
        function qt(e, t, n) {
          if (null == n.to) {
            var r = n.marker.find(1, !0);
            return qt(e, r.line, Mt(r.line.markedSpans, n.marker));
          }
          if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
              (i = t.markedSpans[o]).marker.collapsed &&
              !i.marker.widgetNode &&
              i.from == n.to &&
              (null == i.to || i.to != n.from) &&
              (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
              qt(e, t, i)
            )
              return !0;
        }
        function Ut(e) {
          for (var t = 0, n = (e = Rt(e)).parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e) break;
            t += i.height;
          }
          for (var o = n.parent; o; o = (n = o).parent)
            for (var a = 0; a < o.children.length; ++a) {
              var s = o.children[a];
              if (s == n) break;
              t += s.height;
            }
          return t;
        }
        function $t(e) {
          if (0 == e.height) return 0;
          for (var t, n = e.text.length, r = e; (t = Ft(r)); ) {
            var i = t.find(0, !0);
            (r = i.from.line), (n += i.from.ch - i.to.ch);
          }
          for (r = e; (t = zt(r)); ) {
            var o = t.find(0, !0);
            (n -= r.text.length - o.from.ch), (n += (r = o.to.line).text.length - o.to.ch);
          }
          return n;
        }
        function Gt(e) {
          var t = e.display,
            n = e.doc;
          (t.maxLine = Ve(n, n.first)),
            (t.maxLineLength = $t(t.maxLine)),
            (t.maxLineChanged = !0),
            n.iter(function(e) {
              var n = $t(e);
              n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
            });
        }
        var Vt = function(e, t, n) {
          (this.text = e), Nt(this, t), (this.height = n ? n(this) : 1);
        };
        function Xt(e) {
          (e.parent = null), Dt(e);
        }
        (Vt.prototype.lineNo = function() {
          return Ye(this);
        }),
          ye(Vt);
        var Kt = {},
          Zt = {};
        function Yt(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var n = t.addModeClass ? Zt : Kt;
          return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
        }
        function Qt(e, t) {
          var n = N('span', null, null, l ? 'padding-right: .1px' : null),
            r = {
              pre: N('pre', [n], 'CodeMirror-line'),
              content: n,
              col: 0,
              pos: 0,
              cm: e,
              trailingSpace: !1,
              splitSpaces: e.getOption('lineWrapping'),
            };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
              a = void 0;
            (r.pos = 0),
              (r.addToken = en),
              Ne(e.display.measure) && (a = ue(o, e.doc.direction)) && (r.addToken = tn(r.addToken, a)),
              (r.map = []),
              rn(o, r, ft(e, o, t != e.display.externalMeasured && Ye(o))),
              o.styleClasses &&
                (o.styleClasses.bgClass && (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || '')),
                o.styleClasses.textClass && (r.textClass = P(o.styleClasses.textClass, r.textClass || ''))),
              0 == r.map.length && r.map.push(0, 0, r.content.appendChild(De(e.display.measure))),
              0 == i
                ? ((t.measure.map = r.map), (t.measure.cache = {}))
                : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                  (t.measure.caches || (t.measure.caches = [])).push({}));
          }
          if (l) {
            var s = r.content.lastChild;
            (/\bcm-tab\b/.test(s.className) || (s.querySelector && s.querySelector('.cm-tab'))) &&
              (r.content.className = 'cm-tab-wrap-hack');
          }
          return (
            me(e, 'renderLine', e, t.line, r.pre),
            r.pre.className && (r.textClass = P(r.pre.className, r.textClass || '')),
            r
          );
        }
        function Jt(e) {
          var t = D('span', '\u2022', 'cm-invalidchar');
          return (t.title = '\\u' + e.charCodeAt(0).toString(16)), t.setAttribute('aria-label', t.title), t;
        }
        function en(e, t, n, r, i, o, l) {
          if (t) {
            var c,
              u = e.splitSpaces
                ? (function(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var n = t, r = '', i = 0; i < e.length; i++) {
                      var o = e.charAt(i);
                      ' ' != o || !n || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = '\xa0'),
                        (r += o),
                        (n = ' ' == o);
                    }
                    return r;
                  })(t, e.trailingSpace)
                : t,
              d = e.cm.state.specialChars,
              h = !1;
            if (d.test(t)) {
              c = document.createDocumentFragment();
              for (var f = 0; ; ) {
                d.lastIndex = f;
                var p = d.exec(t),
                  m = p ? p.index - f : t.length - f;
                if (m) {
                  var g = document.createTextNode(u.slice(f, f + m));
                  c.appendChild(a && s < 9 ? D('span', [g]) : g),
                    e.map.push(e.pos, e.pos + m, g),
                    (e.col += m),
                    (e.pos += m);
                }
                if (!p) break;
                f += m + 1;
                var v = void 0;
                if ('\t' == p[0]) {
                  var x = e.cm.options.tabSize,
                    y = x - (e.col % x);
                  (v = c.appendChild(D('span', X(y), 'cm-tab'))).setAttribute('role', 'presentation'),
                    v.setAttribute('cm-text', '\t'),
                    (e.col += y);
                } else
                  '\r' == p[0] || '\n' == p[0]
                    ? ((v = c.appendChild(
                        D('span', '\r' == p[0] ? '\u240d' : '\u2424', 'cm-invalidchar'),
                      )).setAttribute('cm-text', p[0]),
                      (e.col += 1))
                    : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute('cm-text', p[0]),
                      c.appendChild(a && s < 9 ? D('span', [v]) : v),
                      (e.col += 1));
                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else
              (e.col += t.length),
                (c = document.createTextNode(u)),
                e.map.push(e.pos, e.pos + t.length, c),
                a && s < 9 && (h = !0),
                (e.pos += t.length);
            if (((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)), n || r || i || h || o)) {
              var b = n || '';
              r && (b += r), i && (b += i);
              var w = D('span', [c], b, o);
              if (l) for (var C in l) l.hasOwnProperty(C) && 'style' != C && 'class' != C && w.setAttribute(C, l[C]);
              return e.content.appendChild(w);
            }
            e.content.appendChild(c);
          }
        }
        function tn(e, t) {
          return function(n, r, i, o, a, s, l) {
            i = i ? i + ' cm-force-border' : 'cm-force-border';
            for (var c = n.pos, u = c + r.length; ; ) {
              for (var d = void 0, h = 0; h < t.length && !((d = t[h]).to > c && d.from <= c); h++);
              if (d.to >= u) return e(n, r, i, o, a, s, l);
              e(n, r.slice(0, d.to - c), i, o, null, s, l), (o = null), (r = r.slice(d.to - c)), (c = d.to);
            }
          };
        }
        function nn(e, t, n, r) {
          var i = !r && n.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
            !r &&
              e.cm.display.input.needsContentAttribute &&
              (i || (i = e.content.appendChild(document.createElement('span'))), i.setAttribute('cm-marker', n.id)),
            i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
        }
        function rn(e, t, n) {
          var r = e.markedSpans,
            i = e.text,
            o = 0;
          if (r)
            for (var a, s, l, c, u, d, h, f = i.length, p = 0, m = 1, g = '', v = 0; ; ) {
              if (v == p) {
                (l = c = u = s = ''), (h = null), (d = null), (v = 1 / 0);
                for (var x = [], y = void 0, b = 0; b < r.length; ++b) {
                  var w = r[b],
                    C = w.marker;
                  if ('bookmark' == C.type && w.from == p && C.widgetNode) x.push(C);
                  else if (w.from <= p && (null == w.to || w.to > p || (C.collapsed && w.to == p && w.from == p))) {
                    if (
                      (null != w.to && w.to != p && v > w.to && ((v = w.to), (c = '')),
                      C.className && (l += ' ' + C.className),
                      C.css && (s = (s ? s + ';' : '') + C.css),
                      C.startStyle && w.from == p && (u += ' ' + C.startStyle),
                      C.endStyle && w.to == v && (y || (y = [])).push(C.endStyle, w.to),
                      C.title && ((h || (h = {})).title = C.title),
                      C.attributes)
                    )
                      for (var k in C.attributes) (h || (h = {}))[k] = C.attributes[k];
                    C.collapsed && (!d || Et(d.marker, C) < 0) && (d = w);
                  } else w.from > p && v > w.from && (v = w.from);
                }
                if (y) for (var S = 0; S < y.length; S += 2) y[S + 1] == v && (c += ' ' + y[S]);
                if (!d || d.from == p) for (var M = 0; M < x.length; ++M) nn(t, 0, x[M]);
                if (d && (d.from || 0) == p) {
                  if ((nn(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from), null == d.to)) return;
                  d.to == p && (d = !1);
                }
              }
              if (p >= f) break;
              for (var L = Math.min(f, v); ; ) {
                if (g) {
                  var T = p + g.length;
                  if (!d) {
                    var O = T > L ? g.slice(0, L - p) : g;
                    t.addToken(t, O, a ? a + l : l, u, p + O.length == v ? c : '', s, h);
                  }
                  if (T >= L) {
                    (g = g.slice(L - p)), (p = L);
                    break;
                  }
                  (p = T), (u = '');
                }
                (g = i.slice(o, (o = n[m++]))), (a = Yt(n[m++], t.cm.options));
              }
            }
          else for (var D = 1; D < n.length; D += 2) t.addToken(t, i.slice(o, (o = n[D])), Yt(n[D + 1], t.cm.options));
        }
        function on(e, t, n) {
          (this.line = t),
            (this.rest = (function(e) {
              for (var t, n; (t = zt(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e);
              return n;
            })(t)),
            (this.size = this.rest ? Ye(K(this.rest)) - n + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = jt(e, t));
        }
        function an(e, t, n) {
          for (var r, i = [], o = t; o < n; o = r) {
            var a = new on(e.doc, Ve(e.doc, o), o);
            (r = o + a.size), i.push(a);
          }
          return i;
        }
        var sn = null,
          ln = null;
        function cn(e, t) {
          var n = fe(e, t);
          if (n.length) {
            var r,
              i = Array.prototype.slice.call(arguments, 2);
            sn ? (r = sn.delayedCallbacks) : ln ? (r = ln) : ((r = ln = []), setTimeout(un, 0));
            for (
              var o = function(e) {
                  r.push(function() {
                    return n[e].apply(null, i);
                  });
                },
                a = 0;
              a < n.length;
              ++a
            )
              o(a);
          }
        }
        function un() {
          var e = ln;
          ln = null;
          for (var t = 0; t < e.length; ++t) e[t]();
        }
        function dn(e, t, n, r) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            'text' == o
              ? pn(e, t)
              : 'gutter' == o
              ? gn(e, t, n, r)
              : 'class' == o
              ? mn(e, t)
              : 'widget' == o && vn(e, t, r);
          }
          t.changes = null;
        }
        function hn(e) {
          return (
            e.node == e.text &&
              ((e.node = D('div', null, null, 'position: relative')),
              e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
              e.node.appendChild(e.text),
              a && s < 8 && (e.node.style.zIndex = 2)),
            e.node
          );
        }
        function fn(e, t) {
          var n = e.display.externalMeasured;
          return n && n.line == t.line
            ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built)
            : Qt(e, t);
        }
        function pn(e, t) {
          var n = t.text.className,
            r = fn(e, t);
          t.text == t.node && (t.node = r.pre),
            t.text.parentNode.replaceChild(r.pre, t.text),
            (t.text = r.pre),
            r.bgClass != t.bgClass || r.textClass != t.textClass
              ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), mn(e, t))
              : n && (t.text.className = n);
        }
        function mn(e, t) {
          !(function(e, t) {
            var n = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
            if ((n && (n += ' CodeMirror-linebackground'), t.background))
              n
                ? (t.background.className = n)
                : (t.background.parentNode.removeChild(t.background), (t.background = null));
            else if (n) {
              var r = hn(t);
              (t.background = r.insertBefore(D('div', null, n), r.firstChild)),
                e.display.input.setUneditable(t.background);
            }
          })(e, t),
            t.line.wrapClass ? (hn(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = ''),
            (t.text.className = (t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass) || '');
        }
        function gn(e, t, n, r) {
          if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
            t.line.gutterClass)
          ) {
            var i = hn(t);
            (t.gutterBackground = D(
              'div',
              null,
              'CodeMirror-gutter-background ' + t.line.gutterClass,
              'left: ' +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                'px; width: ' +
                r.gutterTotalWidth +
                'px',
            )),
              e.display.input.setUneditable(t.gutterBackground),
              i.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var a = hn(t),
              s = (t.gutter = D(
                'div',
                null,
                'CodeMirror-gutter-wrapper',
                'left: ' + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + 'px',
              ));
            if (
              (e.display.input.setUneditable(s),
              a.insertBefore(s, t.text),
              t.line.gutterClass && (s.className += ' ' + t.line.gutterClass),
              !e.options.lineNumbers ||
                (o && o['CodeMirror-linenumbers']) ||
                (t.lineNumber = s.appendChild(
                  D(
                    'div',
                    et(e.options, n),
                    'CodeMirror-linenumber CodeMirror-gutter-elt',
                    'left: ' +
                      r.gutterLeft['CodeMirror-linenumbers'] +
                      'px; width: ' +
                      e.display.lineNumInnerWidth +
                      'px',
                  ),
                )),
              o)
            )
              for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
                var c = e.display.gutterSpecs[l].className,
                  u = o.hasOwnProperty(c) && o[c];
                u &&
                  s.appendChild(
                    D(
                      'div',
                      [u],
                      'CodeMirror-gutter-elt',
                      'left: ' + r.gutterLeft[c] + 'px; width: ' + r.gutterWidth[c] + 'px',
                    ),
                  );
              }
          }
        }
        function vn(e, t, n) {
          t.alignable && (t.alignable = null);
          for (var r = t.node.firstChild, i = void 0; r; r = i)
            (i = r.nextSibling), 'CodeMirror-linewidget' == r.className && t.node.removeChild(r);
          yn(e, t, n);
        }
        function xn(e, t, n, r) {
          var i = fn(e, t);
          return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            mn(e, t),
            gn(e, t, n, r),
            yn(e, t, r),
            t.node
          );
        }
        function yn(e, t, n) {
          if ((bn(e, t.line, t, n, !0), t.rest)) for (var r = 0; r < t.rest.length; r++) bn(e, t.rest[r], t, n, !1);
        }
        function bn(e, t, n, r, i) {
          if (t.widgets)
            for (var o = hn(n), a = 0, s = t.widgets; a < s.length; ++a) {
              var l = s[a],
                c = D('div', [l.node], 'CodeMirror-linewidget');
              l.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
                wn(l, c, n, r),
                e.display.input.setUneditable(c),
                i && l.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c),
                cn(l, 'redraw');
            }
        }
        function wn(e, t, n, r) {
          if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            (t.style.left = r.fixedPos + 'px'),
              e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
              (t.style.width = i + 'px');
          }
          e.coverGutter &&
            ((t.style.zIndex = 5),
            (t.style.position = 'relative'),
            e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
        }
        function Cn(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;
          if (!A(document.body, e.node)) {
            var n = 'position: relative;';
            e.coverGutter && (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
              e.noHScroll && (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
              O(t.display.measure, D('div', [e.node], null, n));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function kn(e, t) {
          for (var n = Se(t); n != e.wrapper; n = n.parentNode)
            if (
              !n ||
              (1 == n.nodeType && 'true' == n.getAttribute('cm-ignore-events')) ||
              (n.parentNode == e.sizer && n != e.mover)
            )
              return !0;
        }
        function Sn(e) {
          return e.lineSpace.offsetTop;
        }
        function Mn(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function Ln(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = O(e.measure, D('pre', 'x', 'CodeMirror-line-like')),
            n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
            r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
          return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
        }
        function Tn(e) {
          return W - e.display.nativeBarWidth;
        }
        function On(e) {
          return e.display.scroller.clientWidth - Tn(e) - e.display.barWidth;
        }
        function Dn(e) {
          return e.display.scroller.clientHeight - Tn(e) - e.display.barHeight;
        }
        function Nn(e, t, n) {
          if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var i = 0; i < e.rest.length; i++)
            if (Ye(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
        }
        function An(e, t, n, r) {
          return Pn(e, En(e, t), n, r);
        }
        function _n(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[dr(e, t)];
          var n = e.display.externalMeasured;
          return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
        }
        function En(e, t) {
          var n = Ye(t),
            r = _n(e, n);
          r && !r.text ? (r = null) : r && r.changes && (dn(e, r, n, ar(e)), (e.curOp.forceUpdate = !0)),
            r ||
              (r = (function(e, t) {
                var n = Ye((t = Rt(t))),
                  r = (e.display.externalMeasured = new on(e.doc, t, n));
                r.lineN = n;
                var i = (r.built = Qt(e, r));
                return (r.text = i.pre), O(e.display.lineMeasure, i.pre), r;
              })(e, t));
          var i = Nn(r, t, n);
          return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
        }
        function Pn(e, t, n, r, i) {
          t.before && (n = -1);
          var o,
            l = n + (r || '');
          return (
            t.cache.hasOwnProperty(l)
              ? (o = t.cache[l])
              : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                t.hasHeights ||
                  ((function(e, t, n) {
                    var r = e.options.lineWrapping,
                      i = r && On(e);
                    if (!t.measure.heights || (r && t.measure.width != i)) {
                      var o = (t.measure.heights = []);
                      if (r) {
                        t.measure.width = i;
                        for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                          var l = a[s],
                            c = a[s + 1];
                          Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top);
                        }
                      }
                      o.push(n.bottom - n.top);
                    }
                  })(e, t.view, t.rect),
                  (t.hasHeights = !0)),
                (o = (function(e, t, n, r) {
                  var i,
                    o = In(t.map, n, r),
                    l = o.node,
                    c = o.start,
                    u = o.end,
                    d = o.collapse;
                  if (3 == l.nodeType) {
                    for (var h = 0; h < 4; h++) {
                      for (; c && ie(t.line.text.charAt(o.coverStart + c)); ) --c;
                      for (; o.coverStart + u < o.coverEnd && ie(t.line.text.charAt(o.coverStart + u)); ) ++u;
                      if (
                        (i =
                          a && s < 9 && 0 == c && u == o.coverEnd - o.coverStart
                            ? l.parentNode.getBoundingClientRect()
                            : Hn(M(l, c, u).getClientRects(), r)).left ||
                        i.right ||
                        0 == c
                      )
                        break;
                      (u = c), (c -= 1), (d = 'right');
                    }
                    a &&
                      s < 11 &&
                      (i = (function(e, t) {
                        if (
                          !window.screen ||
                          null == screen.logicalXDPI ||
                          screen.logicalXDPI == screen.deviceXDPI ||
                          !(function(e) {
                            if (null != Fe) return Fe;
                            var t = O(e, D('span', 'x')),
                              n = t.getBoundingClientRect(),
                              r = M(t, 0, 1).getBoundingClientRect();
                            return (Fe = Math.abs(n.left - r.left) > 1);
                          })(e)
                        )
                          return t;
                        var n = screen.logicalXDPI / screen.deviceXDPI,
                          r = screen.logicalYDPI / screen.deviceYDPI;
                        return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r };
                      })(e.display.measure, i));
                  } else {
                    var f;
                    c > 0 && (d = r = 'right'),
                      (i =
                        e.options.lineWrapping && (f = l.getClientRects()).length > 1
                          ? f['right' == r ? f.length - 1 : 0]
                          : l.getBoundingClientRect());
                  }
                  if (a && s < 9 && !c && (!i || (!i.left && !i.right))) {
                    var p = l.parentNode.getClientRects()[0];
                    i = p ? { left: p.left, right: p.left + or(e.display), top: p.top, bottom: p.bottom } : zn;
                  }
                  for (
                    var m = i.top - t.rect.top,
                      g = i.bottom - t.rect.top,
                      v = (m + g) / 2,
                      x = t.view.measure.heights,
                      y = 0;
                    y < x.length - 1 && !(v < x[y]);
                    y++
                  );
                  var b = {
                    left: ('right' == d ? i.right : i.left) - t.rect.left,
                    right: ('left' == d ? i.left : i.right) - t.rect.left,
                    top: y ? x[y - 1] : 0,
                    bottom: x[y],
                  };
                  return (
                    i.left || i.right || (b.bogus = !0),
                    e.options.singleCursorHeightPerLine || ((b.rtop = m), (b.rbottom = g)),
                    b
                  );
                })(e, t, n, r)).bogus || (t.cache[l] = o)),
            { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom }
          );
        }
        var Fn,
          zn = { left: 0, right: 0, top: 0, bottom: 0 };
        function In(e, t, n) {
          for (var r, i, o, a, s, l, c = 0; c < e.length; c += 3)
            if (
              ((l = e[c + 1]),
              t < (s = e[c])
                ? ((i = 0), (o = 1), (a = 'left'))
                : t < l
                ? (o = 1 + (i = t - s))
                : (c == e.length - 3 || (t == l && e[c + 3] > t)) && ((i = (o = l - s) - 1), t >= l && (a = 'right')),
              null != i)
            ) {
              if (((r = e[c + 2]), s == l && n == (r.insertLeft ? 'left' : 'right') && (a = n), 'left' == n && 0 == i))
                for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; ) (r = e[2 + (c -= 3)]), (a = 'left');
              if ('right' == n && i == l - s)
                for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft; )
                  (r = e[(c += 3) + 2]), (a = 'right');
              break;
            }
          return { node: r, start: i, end: o, collapse: a, coverStart: s, coverEnd: l };
        }
        function Hn(e, t) {
          var n = zn;
          if ('left' == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
          else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
          return n;
        }
        function Rn(e) {
          if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function Bn(e) {
          (e.display.externalMeasure = null), T(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) Rn(e.display.view[t]);
        }
        function Wn(e) {
          Bn(e),
            (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
        }
        function jn() {
          return u && g
            ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft))
            : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }
        function qn() {
          return u && g
            ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop))
            : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }
        function Un(e) {
          var t = 0;
          if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += Cn(e.widgets[n]));
          return t;
        }
        function $n(e, t, n, r, i) {
          if (!i) {
            var o = Un(t);
            (n.top += o), (n.bottom += o);
          }
          if ('line' == r) return n;
          r || (r = 'local');
          var a = Ut(t);
          if (('local' == r ? (a += Sn(e.display)) : (a -= e.display.viewOffset), 'page' == r || 'window' == r)) {
            var s = e.display.lineSpace.getBoundingClientRect();
            a += s.top + ('window' == r ? 0 : qn());
            var l = s.left + ('window' == r ? 0 : jn());
            (n.left += l), (n.right += l);
          }
          return (n.top += a), (n.bottom += a), n;
        }
        function Gn(e, t, n) {
          if ('div' == n) return t;
          var r = t.left,
            i = t.top;
          if ('page' == n) (r -= jn()), (i -= qn());
          else if ('local' == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            (r += o.left), (i += o.top);
          }
          var a = e.display.lineSpace.getBoundingClientRect();
          return { left: r - a.left, top: i - a.top };
        }
        function Vn(e, t, n, r, i) {
          return r || (r = Ve(e.doc, t.line)), $n(e, r, An(e, r, t.ch, i), n);
        }
        function Xn(e, t, n, r, i, o) {
          function a(t, a) {
            var s = Pn(e, i, t, a ? 'right' : 'left', o);
            return a ? (s.left = s.right) : (s.right = s.left), $n(e, r, s, n);
          }
          (r = r || Ve(e.doc, t.line)), i || (i = En(e, r));
          var s = ue(r, e.doc.direction),
            l = t.ch,
            c = t.sticky;
          if ((l >= r.text.length ? ((l = r.text.length), (c = 'before')) : l <= 0 && ((l = 0), (c = 'after')), !s))
            return a('before' == c ? l - 1 : l, 'before' == c);
          function u(e, t, n) {
            return a(n ? e - 1 : e, (1 == s[t].level) != n);
          }
          var d = le(s, l, c),
            h = se,
            f = u(l, d, 'before' == c);
          return null != h && (f.other = u(l, h, 'before' != c)), f;
        }
        function Kn(e, t) {
          var n = 0;
          (t = lt(e.doc, t)), e.options.lineWrapping || (n = or(e.display) * t.ch);
          var r = Ve(e.doc, t.line),
            i = Ut(r) + Sn(e.display);
          return { left: n, right: n, top: i, bottom: i + r.height };
        }
        function Zn(e, t, n, r, i) {
          var o = tt(e, t, n);
          return (o.xRel = i), r && (o.outside = r), o;
        }
        function Yn(e, t, n) {
          var r = e.doc;
          if ((n += e.display.viewOffset) < 0) return Zn(r.first, 0, null, -1, -1);
          var i = Qe(r, n),
            o = r.first + r.size - 1;
          if (i > o) return Zn(r.first + r.size - 1, Ve(r, o).text.length, null, 1, 1);
          t < 0 && (t = 0);
          for (var a = Ve(r, i); ; ) {
            var s = tr(e, a, i, t, n),
              l = It(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
            if (!l) return s;
            var c = l.find(1);
            if (c.line == i) return c;
            a = Ve(r, (i = c.line));
          }
        }
        function Qn(e, t, n, r) {
          r -= Un(t);
          var i = t.text.length,
            o = ae(
              function(t) {
                return Pn(e, n, t - 1).bottom <= r;
              },
              i,
              0,
            );
          return {
            begin: o,
            end: (i = ae(
              function(t) {
                return Pn(e, n, t).top > r;
              },
              o,
              i,
            )),
          };
        }
        function Jn(e, t, n, r) {
          return n || (n = En(e, t)), Qn(e, t, n, $n(e, t, Pn(e, n, r), 'line').top);
        }
        function er(e, t, n, r) {
          return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
        }
        function tr(e, t, n, r, i) {
          i -= Ut(t);
          var o = En(e, t),
            a = Un(t),
            s = 0,
            l = t.text.length,
            c = !0,
            u = ue(t, e.doc.direction);
          if (u) {
            var d = (e.options.lineWrapping ? rr : nr)(e, t, n, o, u, r, i);
            (s = (c = 1 != d.level) ? d.from : d.to - 1), (l = c ? d.to : d.from - 1);
          }
          var h,
            f,
            p = null,
            m = null,
            g = ae(
              function(t) {
                var n = Pn(e, o, t);
                return (
                  (n.top += a),
                  (n.bottom += a),
                  !!er(n, r, i, !1) && (n.top <= i && n.left <= r && ((p = t), (m = n)), !0)
                );
              },
              s,
              l,
            ),
            v = !1;
          if (m) {
            var x = r - m.left < m.right - r,
              y = x == c;
            (g = p + (y ? 0 : 1)), (f = y ? 'after' : 'before'), (h = x ? m.left : m.right);
          } else {
            c || (g != l && g != s) || g++,
              (f =
                0 == g
                  ? 'after'
                  : g == t.text.length
                  ? 'before'
                  : Pn(e, o, g - (c ? 1 : 0)).bottom + a <= i == c
                  ? 'after'
                  : 'before');
            var b = Xn(e, tt(n, g, f), 'line', t, o);
            (h = b.left), (v = i < b.top ? -1 : i >= b.bottom ? 1 : 0);
          }
          return Zn(n, (g = oe(t.text, g, 1)), f, v, r - h);
        }
        function nr(e, t, n, r, i, o, a) {
          var s = ae(
              function(s) {
                var l = i[s],
                  c = 1 != l.level;
                return er(Xn(e, tt(n, c ? l.to : l.from, c ? 'before' : 'after'), 'line', t, r), o, a, !0);
              },
              0,
              i.length - 1,
            ),
            l = i[s];
          if (s > 0) {
            var c = 1 != l.level,
              u = Xn(e, tt(n, c ? l.from : l.to, c ? 'after' : 'before'), 'line', t, r);
            er(u, o, a, !0) && u.top > a && (l = i[s - 1]);
          }
          return l;
        }
        function rr(e, t, n, r, i, o, a) {
          var s = Qn(e, t, r, a),
            l = s.begin,
            c = s.end;
          /\s/.test(t.text.charAt(c - 1)) && c--;
          for (var u = null, d = null, h = 0; h < i.length; h++) {
            var f = i[h];
            if (!(f.from >= c || f.to <= l)) {
              var p = Pn(e, r, 1 != f.level ? Math.min(c, f.to) - 1 : Math.max(l, f.from)).right,
                m = p < o ? o - p + 1e9 : p - o;
              (!u || d > m) && ((u = f), (d = m));
            }
          }
          return (
            u || (u = i[i.length - 1]),
            u.from < l && (u = { from: l, to: u.to, level: u.level }),
            u.to > c && (u = { from: u.from, to: c, level: u.level }),
            u
          );
        }
        function ir(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;
          if (null == Fn) {
            Fn = D('pre', null, 'CodeMirror-line-like');
            for (var t = 0; t < 49; ++t) Fn.appendChild(document.createTextNode('x')), Fn.appendChild(D('br'));
            Fn.appendChild(document.createTextNode('x'));
          }
          O(e.measure, Fn);
          var n = Fn.offsetHeight / 50;
          return n > 3 && (e.cachedTextHeight = n), T(e.measure), n || 1;
        }
        function or(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = D('span', 'xxxxxxxxxx'),
            n = D('pre', [t], 'CodeMirror-line-like');
          O(e.measure, n);
          var r = t.getBoundingClientRect(),
            i = (r.right - r.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function ar(e) {
          for (
            var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0;
            o;
            o = o.nextSibling, ++a
          ) {
            var s = e.display.gutterSpecs[a].className;
            (n[s] = o.offsetLeft + o.clientLeft + i), (r[s] = o.clientWidth);
          }
          return {
            fixedPos: sr(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth,
          };
        }
        function sr(e) {
          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }
        function lr(e) {
          var t = ir(e.display),
            n = e.options.lineWrapping,
            r = n && Math.max(5, e.display.scroller.clientWidth / or(e.display) - 3);
          return function(i) {
            if (jt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
          };
        }
        function cr(e) {
          var t = e.doc,
            n = lr(e);
          t.iter(function(e) {
            var t = n(e);
            t != e.height && Ze(e, t);
          });
        }
        function ur(e, t, n, r) {
          var i = e.display;
          if (!n && 'true' == Se(t).getAttribute('cm-not-content')) return null;
          var o,
            a,
            s = i.lineSpace.getBoundingClientRect();
          try {
            (o = t.clientX - s.left), (a = t.clientY - s.top);
          } catch (t) {
            return null;
          }
          var l,
            c = Yn(e, o, a);
          if (r && 1 == c.xRel && (l = Ve(e.doc, c.line).text).length == c.ch) {
            var u = H(l, l.length, e.options.tabSize) - l.length;
            c = tt(c.line, Math.max(0, Math.round((o - Ln(e.display).left) / or(e.display)) - u));
          }
          return c;
        }
        function dr(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;
          for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
        }
        function hr(e, t, n, r) {
          null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
          var i = e.display;
          if (
            (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
          )
            kt && Bt(e.doc, t) < i.viewTo && pr(e);
          else if (n <= i.viewFrom) kt && Wt(e.doc, n + r) > i.viewFrom ? pr(e) : ((i.viewFrom += r), (i.viewTo += r));
          else if (t <= i.viewFrom && n >= i.viewTo) pr(e);
          else if (t <= i.viewFrom) {
            var o = mr(e, n, n + r, 1);
            o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += r)) : pr(e);
          } else if (n >= i.viewTo) {
            var a = mr(e, t, t, -1);
            a ? ((i.view = i.view.slice(0, a.index)), (i.viewTo = a.lineN)) : pr(e);
          } else {
            var s = mr(e, t, t, -1),
              l = mr(e, n, n + r, 1);
            s && l
              ? ((i.view = i.view
                  .slice(0, s.index)
                  .concat(an(e, s.lineN, l.lineN))
                  .concat(i.view.slice(l.index))),
                (i.viewTo += r))
              : pr(e);
          }
          var c = i.externalMeasured;
          c && (n < c.lineN ? (c.lineN += r) : t < c.lineN + c.size && (i.externalMeasured = null));
        }
        function fr(e, t, n) {
          e.curOp.viewChanged = !0;
          var r = e.display,
            i = e.display.externalMeasured;
          if (
            (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
            !(t < r.viewFrom || t >= r.viewTo))
          ) {
            var o = r.view[dr(e, t)];
            if (null != o.node) {
              var a = o.changes || (o.changes = []);
              -1 == B(a, n) && a.push(n);
            }
          }
        }
        function pr(e) {
          (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
        }
        function mr(e, t, n, r) {
          var i,
            o = dr(e, t),
            a = e.display.view;
          if (!kt || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
          for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
          if (s != t) {
            if (r > 0) {
              if (o == a.length - 1) return null;
              (i = s + a[o].size - t), o++;
            } else i = s - t;
            (t += i), (n += i);
          }
          for (; Bt(e.doc, n) != n; ) {
            if (o == (r < 0 ? 0 : a.length - 1)) return null;
            (n += r * a[o - (r < 0 ? 1 : 0)].size), (o += r);
          }
          return { index: o, lineN: n };
        }
        function gr(e) {
          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || (i.node && !i.changes) || ++n;
          }
          return n;
        }
        function vr(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function xr(e, t) {
          void 0 === t && (t = !0);
          for (
            var n = e.doc,
              r = {},
              i = (r.cursors = document.createDocumentFragment()),
              o = (r.selection = document.createDocumentFragment()),
              a = 0;
            a < n.sel.ranges.length;
            a++
          )
            if (t || a != n.sel.primIndex) {
              var s = n.sel.ranges[a];
              if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                var l = s.empty();
                (l || e.options.showCursorWhenSelecting) && yr(e, s.head, i), l || wr(e, s, o);
              }
            }
          return r;
        }
        function yr(e, t, n) {
          var r = Xn(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
            i = n.appendChild(D('div', '\xa0', 'CodeMirror-cursor'));
          if (
            ((i.style.left = r.left + 'px'),
            (i.style.top = r.top + 'px'),
            (i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
            r.other)
          ) {
            var o = n.appendChild(D('div', '\xa0', 'CodeMirror-cursor CodeMirror-secondarycursor'));
            (o.style.display = ''),
              (o.style.left = r.other.left + 'px'),
              (o.style.top = r.other.top + 'px'),
              (o.style.height = 0.85 * (r.other.bottom - r.other.top) + 'px');
          }
        }
        function br(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function wr(e, t, n) {
          var r = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            a = Ln(e.display),
            s = a.left,
            l = Math.max(r.sizerWidth, On(e) - r.sizer.offsetLeft) - a.right,
            c = 'ltr' == i.direction;
          function u(e, t, n, r) {
            t < 0 && (t = 0),
              (t = Math.round(t)),
              (r = Math.round(r)),
              o.appendChild(
                D(
                  'div',
                  null,
                  'CodeMirror-selected',
                  'position: absolute; left: ' +
                    e +
                    'px;\n                             top: ' +
                    t +
                    'px; width: ' +
                    (null == n ? l - e : n) +
                    'px;\n                             height: ' +
                    (r - t) +
                    'px',
                ),
              );
          }
          function d(t, n, r) {
            var o,
              a,
              d = Ve(i, t),
              h = d.text.length;
            function f(n, r) {
              return Vn(e, tt(t, n), 'div', d, r);
            }
            function p(t, n, r) {
              var i = Jn(e, d, null, t),
                o = ('ltr' == n) == ('after' == r) ? 'left' : 'right';
              return f('after' == r ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
            }
            var m = ue(d, i.direction);
            return (
              (function(e, t, n, r) {
                if (!e) return r(t, n, 'ltr', 0);
                for (var i = !1, o = 0; o < e.length; ++o) {
                  var a = e[o];
                  ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
                    (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? 'rtl' : 'ltr', o), (i = !0));
                }
                i || r(t, n, 'ltr');
              })(m, n || 0, null == r ? h : r, function(e, t, i, d) {
                var g = 'ltr' == i,
                  v = f(e, g ? 'left' : 'right'),
                  x = f(t - 1, g ? 'right' : 'left'),
                  y = null == n && 0 == e,
                  b = null == r && t == h,
                  w = 0 == d,
                  C = !m || d == m.length - 1;
                if (x.top - v.top <= 3) {
                  var k = (c ? y : b) && w ? s : (g ? v : x).left;
                  u(k, v.top, ((c ? b : y) && C ? l : (g ? x : v).right) - k, v.bottom);
                } else {
                  var S, M, L, T;
                  g
                    ? ((S = c && y && w ? s : v.left),
                      (M = c ? l : p(e, i, 'before')),
                      (L = c ? s : p(t, i, 'after')),
                      (T = c && b && C ? l : x.right))
                    : ((S = c ? p(e, i, 'before') : s),
                      (M = !c && y && w ? l : v.right),
                      (L = !c && b && C ? s : x.left),
                      (T = c ? p(t, i, 'after') : l)),
                    u(S, v.top, M - S, v.bottom),
                    v.bottom < x.top && u(s, v.bottom, null, x.top),
                    u(L, x.top, T - L, x.bottom);
                }
                (!o || br(v, o) < 0) && (o = v),
                  br(x, o) < 0 && (o = x),
                  (!a || br(v, a) < 0) && (a = v),
                  br(x, a) < 0 && (a = x);
              }),
              { start: o, end: a }
            );
          }
          var h = t.from(),
            f = t.to();
          if (h.line == f.line) d(h.line, h.ch, f.ch);
          else {
            var p = Ve(i, h.line),
              m = Ve(i, f.line),
              g = Rt(p) == Rt(m),
              v = d(h.line, h.ch, g ? p.text.length + 1 : null).end,
              x = d(f.line, g ? 0 : null, f.ch).start;
            g &&
              (v.top < x.top - 2
                ? (u(v.right, v.top, null, v.bottom), u(s, x.top, x.left, x.bottom))
                : u(v.right, v.top, x.left - v.right, v.bottom)),
              v.bottom < x.top && u(s, v.bottom, null, x.top);
          }
          n.appendChild(o);
        }
        function Cr(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            (t.cursorDiv.style.visibility = ''),
              e.options.cursorBlinkRate > 0
                ? (t.blinker = setInterval(function() {
                    return (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden');
                  }, e.options.cursorBlinkRate))
                : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden');
          }
        }
        function kr(e) {
          e.state.focused || (e.display.input.focus(), Mr(e));
        }
        function Sr(e) {
          (e.state.delayingBlurEvent = !0),
            setTimeout(function() {
              e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), Lr(e));
            }, 100);
        }
        function Mr(e, t) {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
            'nocursor' != e.options.readOnly &&
              (e.state.focused ||
                (me(e, 'focus', e, t),
                (e.state.focused = !0),
                E(e.display.wrapper, 'CodeMirror-focused'),
                e.curOp ||
                  e.display.selForContextMenu == e.doc.sel ||
                  (e.display.input.reset(),
                  l &&
                    setTimeout(function() {
                      return e.display.input.reset(!0);
                    }, 20)),
                e.display.input.receivedFocus()),
              Cr(e));
        }
        function Lr(e, t) {
          e.state.delayingBlurEvent ||
            (e.state.focused &&
              (me(e, 'blur', e, t), (e.state.focused = !1), L(e.display.wrapper, 'CodeMirror-focused')),
            clearInterval(e.display.blinker),
            setTimeout(function() {
              e.state.focused || (e.display.shift = !1);
            }, 150));
        }
        function Tr(e) {
          for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
            var i = t.view[r],
              o = e.options.lineWrapping,
              l = void 0,
              c = 0;
            if (!i.hidden) {
              if (a && s < 8) {
                var u = i.node.offsetTop + i.node.offsetHeight;
                (l = u - n), (n = u);
              } else {
                var d = i.node.getBoundingClientRect();
                (l = d.bottom - d.top),
                  !o && i.text.firstChild && (c = i.text.firstChild.getBoundingClientRect().right - d.left - 1);
              }
              var h = i.line.height - l;
              if ((h > 0.005 || h < -0.005) && (Ze(i.line, l), Or(i.line), i.rest))
                for (var f = 0; f < i.rest.length; f++) Or(i.rest[f]);
              if (c > e.display.sizerWidth) {
                var p = Math.ceil(c / or(e.display));
                p > e.display.maxLineLength &&
                  ((e.display.maxLineLength = p), (e.display.maxLine = i.line), (e.display.maxLineChanged = !0));
              }
            }
          }
        }
        function Or(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var n = e.widgets[t],
                r = n.node.parentNode;
              r && (n.height = r.offsetHeight);
            }
        }
        function Dr(e, t, n) {
          var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
          r = Math.floor(r - Sn(e));
          var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
            o = Qe(t, r),
            a = Qe(t, i);
          if (n && n.ensure) {
            var s = n.ensure.from.line,
              l = n.ensure.to.line;
            s < o
              ? ((o = s), (a = Qe(t, Ut(Ve(t, s)) + e.wrapper.clientHeight)))
              : Math.min(l, t.lastLine()) >= a && ((o = Qe(t, Ut(Ve(t, l)) - e.wrapper.clientHeight)), (a = l));
          }
          return { from: o, to: Math.max(a, o + 1) };
        }
        function Nr(e, t) {
          var n = e.display,
            r = ir(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
            o = Dn(e),
            a = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var s = e.doc.height + Mn(n),
            l = t.bottom > s - r;
          if (t.top < i) a.scrollTop = t.top < r ? 0 : t.top;
          else if (t.bottom > i + o) {
            var c = Math.min(t.top, (l ? s : t.bottom) - o);
            c != i && (a.scrollTop = c);
          }
          var u = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
            d = On(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
            h = t.right - t.left > d;
          return (
            h && (t.right = t.left + d),
            t.left < 10
              ? (a.scrollLeft = 0)
              : t.left < u
              ? (a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)))
              : t.right > d + u - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - d),
            a
          );
        }
        function Ar(e, t) {
          null != t &&
            (Pr(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
        }
        function _r(e) {
          Pr(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
        }
        function Er(e, t, n) {
          (null == t && null == n) || Pr(e),
            null != t && (e.curOp.scrollLeft = t),
            null != n && (e.curOp.scrollTop = n);
        }
        function Pr(e) {
          var t = e.curOp.scrollToPos;
          t && ((e.curOp.scrollToPos = null), Fr(e, Kn(e, t.from), Kn(e, t.to), t.margin));
        }
        function Fr(e, t, n, r) {
          var i = Nr(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r,
          });
          Er(e, i.scrollLeft, i.scrollTop);
        }
        function zr(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 || (n || li(e, { top: t }), Ir(e, t, !0), n && li(e), ri(e, 100));
        }
        function Ir(e, t, n) {
          (t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)),
            (e.display.scroller.scrollTop != t || n) &&
              ((e.doc.scrollTop = t),
              e.display.scrollbars.setScrollTop(t),
              e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
        }
        function Hr(e, t, n, r) {
          (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)),
            ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) ||
              ((e.doc.scrollLeft = t),
              di(e),
              e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
              e.display.scrollbars.setScrollLeft(t));
        }
        function Rr(e) {
          var t = e.display,
            n = t.gutters.offsetWidth,
            r = Math.round(e.doc.height + Mn(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + Tn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n,
          };
        }
        var Br = function(e, t, n) {
          this.cm = n;
          var r = (this.vert = D('div', [D('div', null, null, 'min-width: 1px')], 'CodeMirror-vscrollbar')),
            i = (this.horiz = D(
              'div',
              [D('div', null, null, 'height: 100%; min-height: 1px')],
              'CodeMirror-hscrollbar',
            ));
          (r.tabIndex = i.tabIndex = -1),
            e(r),
            e(i),
            he(r, 'scroll', function() {
              r.clientHeight && t(r.scrollTop, 'vertical');
            }),
            he(i, 'scroll', function() {
              i.clientWidth && t(i.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
        (Br.prototype.update = function(e) {
          var t = e.scrollWidth > e.clientWidth + 1,
            n = e.scrollHeight > e.clientHeight + 1,
            r = e.nativeBarWidth;
          return (
            n
              ? ((this.vert.style.display = 'block'),
                (this.vert.style.bottom = t ? r + 'px' : '0'),
                (this.vert.firstChild.style.height =
                  Math.max(0, e.scrollHeight - e.clientHeight + (e.viewHeight - (t ? r : 0))) + 'px'))
              : ((this.vert.style.display = ''), (this.vert.firstChild.style.height = '0')),
            t
              ? ((this.horiz.style.display = 'block'),
                (this.horiz.style.right = n ? r + 'px' : '0'),
                (this.horiz.style.left = e.barLeft + 'px'),
                (this.horiz.firstChild.style.width =
                  Math.max(0, e.scrollWidth - e.clientWidth + (e.viewWidth - e.barLeft - (n ? r : 0))) + 'px'))
              : ((this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0')),
            !this.checkedZeroWidth &&
              e.clientHeight > 0 &&
              (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: n ? r : 0, bottom: t ? r : 0 }
          );
        }),
          (Br.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
          }),
          (Br.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
          }),
          (Br.prototype.zeroWidthHack = function() {
            (this.horiz.style.height = this.vert.style.width = x && !f ? '12px' : '18px'),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
              (this.disableHoriz = new R()),
              (this.disableVert = new R());
          }),
          (Br.prototype.enableZeroWidthBar = function(e, t, n) {
            (e.style.pointerEvents = 'auto'),
              t.set(1e3, function r() {
                var i = e.getBoundingClientRect();
                ('vert' == n
                  ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                  : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e
                  ? (e.style.pointerEvents = 'none')
                  : t.set(1e3, r);
              });
          }),
          (Br.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          });
        var Wr = function() {};
        function jr(e, t) {
          t || (t = Rr(e));
          var n = e.display.barWidth,
            r = e.display.barHeight;
          qr(e, t);
          for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++)
            n != e.display.barWidth && e.options.lineWrapping && Tr(e),
              qr(e, Rr(e)),
              (n = e.display.barWidth),
              (r = e.display.barHeight);
        }
        function qr(e, t) {
          var n = e.display,
            r = n.scrollbars.update(t);
          (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
            (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
            (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
            r.right && r.bottom
              ? ((n.scrollbarFiller.style.display = 'block'),
                (n.scrollbarFiller.style.height = r.bottom + 'px'),
                (n.scrollbarFiller.style.width = r.right + 'px'))
              : (n.scrollbarFiller.style.display = ''),
            r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
              ? ((n.gutterFiller.style.display = 'block'),
                (n.gutterFiller.style.height = r.bottom + 'px'),
                (n.gutterFiller.style.width = t.gutterWidth + 'px'))
              : (n.gutterFiller.style.display = '');
        }
        (Wr.prototype.update = function() {
          return { bottom: 0, right: 0 };
        }),
          (Wr.prototype.setScrollLeft = function() {}),
          (Wr.prototype.setScrollTop = function() {}),
          (Wr.prototype.clear = function() {});
        var Ur = { native: Br, null: Wr };
        function $r(e) {
          e.display.scrollbars &&
            (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new Ur[e.options.scrollbarStyle](
              function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                  he(t, 'mousedown', function() {
                    e.state.focused &&
                      setTimeout(function() {
                        return e.display.input.focus();
                      }, 0);
                  }),
                  t.setAttribute('cm-not-content', 'true');
              },
              function(t, n) {
                'horizontal' == n ? Hr(e, t) : zr(e, t);
              },
              e,
            )),
            e.display.scrollbars.addClass && E(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var Gr = 0;
        function Vr(e) {
          var t;
          (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Gr,
          }),
            (t = e.curOp),
            sn ? sn.ops.push(t) : (t.ownsGroup = sn = { ops: [t], delayedCallbacks: [] });
        }
        function Xr(e) {
          var t = e.curOp;
          t &&
            (function(e, t) {
              var n = e.ownsGroup;
              if (n)
                try {
                  !(function(e) {
                    var t = e.delayedCallbacks,
                      n = 0;
                    do {
                      for (; n < t.length; n++) t[n].call(null);
                      for (var r = 0; r < e.ops.length; r++) {
                        var i = e.ops[r];
                        if (i.cursorActivityHandlers)
                          for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                            i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                      }
                    } while (n < t.length);
                  })(n);
                } finally {
                  (sn = null),
                    (function(e) {
                      for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                      !(function(e) {
                        for (var t = e.ops, n = 0; n < t.length; n++) Kr(t[n]);
                        for (var r = 0; r < t.length; r++)
                          (i = t[r]).updatedDisplay = i.mustUpdate && ai(i.cm, i.update);
                        for (var i, o = 0; o < t.length; o++) Zr(t[o]);
                        for (var a = 0; a < t.length; a++) Yr(t[a]);
                        for (var s = 0; s < t.length; s++) Qr(t[s]);
                      })(e);
                    })(n);
                }
            })(t);
        }
        function Kr(e) {
          var t = e.cm,
            n = t.display;
          !(function(e) {
            var t = e.display;
            !t.scrollbarsClipped &&
              t.scroller.offsetWidth &&
              ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
              (t.heightForcer.style.height = Tn(e) + 'px'),
              (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
              (t.sizer.style.borderRightWidth = Tn(e) + 'px'),
              (t.scrollbarsClipped = !0));
          })(t),
            e.updateMaxLine && Gt(t),
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              null != e.scrollTop ||
              (e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) ||
              (n.maxLineChanged && t.options.lineWrapping)),
            (e.update =
              e.mustUpdate && new oi(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
        }
        function Zr(e) {
          var t = e.cm,
            n = t.display;
          e.updatedDisplay && Tr(t),
            (e.barMeasure = Rr(t)),
            n.maxLineChanged &&
              !t.options.lineWrapping &&
              ((e.adjustWidthTo = An(t, n.maxLine, n.maxLine.text.length).left + 3),
              (t.display.sizerWidth = e.adjustWidthTo),
              (e.barMeasure.scrollWidth = Math.max(
                n.scroller.clientWidth,
                n.sizer.offsetLeft + e.adjustWidthTo + Tn(t) + t.display.barWidth,
              )),
              (e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - On(t)))),
            (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
        }
        function Yr(e) {
          var t = e.cm;
          null != e.adjustWidthTo &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
            e.maxScrollLeft < t.doc.scrollLeft && Hr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
            (t.display.maxLineChanged = !1));
          var n = e.focus && e.focus == _();
          e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
            (e.updatedDisplay || e.startHeight != t.doc.height) && jr(t, e.barMeasure),
            e.updatedDisplay && ui(t, e.barMeasure),
            e.selectionChanged && Cr(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            n && kr(e.cm);
        }
        function Qr(e) {
          var t = e.cm,
            n = t.display,
            r = t.doc;
          e.updatedDisplay && si(t, e.update),
            null == n.wheelStartX ||
              (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
              (n.wheelStartX = n.wheelStartY = null),
            null != e.scrollTop && Ir(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && Hr(t, e.scrollLeft, !0, !0),
            e.scrollToPos &&
              (function(e, t) {
                if (!ge(e, 'scrollCursorIntoView')) {
                  var n = e.display,
                    r = n.sizer.getBoundingClientRect(),
                    i = null;
                  if (
                    (t.top + r.top < 0
                      ? (i = !0)
                      : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                    null != i && !p)
                  ) {
                    var o = D(
                      'div',
                      '\u200b',
                      null,
                      'position: absolute;\n                         top: ' +
                        (t.top - n.viewOffset - Sn(e.display)) +
                        'px;\n                         height: ' +
                        (t.bottom - t.top + Tn(e) + n.barHeight) +
                        'px;\n                         left: ' +
                        t.left +
                        'px; width: ' +
                        Math.max(2, t.right - t.left) +
                        'px;',
                    );
                    e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
                  }
                }
              })(
                t,
                (function(e, t, n, r) {
                  var i;
                  null == r && (r = 0),
                    e.options.lineWrapping ||
                      t != n ||
                      (n =
                        'before' == (t = t.ch ? tt(t.line, 'before' == t.sticky ? t.ch - 1 : t.ch, 'after') : t).sticky
                          ? tt(t.line, t.ch + 1, 'before')
                          : t);
                  for (var o = 0; o < 5; o++) {
                    var a = !1,
                      s = Xn(e, t),
                      l = n && n != t ? Xn(e, n) : s,
                      c = Nr(
                        e,
                        (i = {
                          left: Math.min(s.left, l.left),
                          top: Math.min(s.top, l.top) - r,
                          right: Math.max(s.left, l.left),
                          bottom: Math.max(s.bottom, l.bottom) + r,
                        }),
                      ),
                      u = e.doc.scrollTop,
                      d = e.doc.scrollLeft;
                    if (
                      (null != c.scrollTop && (zr(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)),
                      null != c.scrollLeft && (Hr(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)),
                      !a)
                    )
                      break;
                  }
                  return i;
                })(t, lt(r, e.scrollToPos.from), lt(r, e.scrollToPos.to), e.scrollToPos.margin),
              );
          var i = e.maybeHiddenMarkers,
            o = e.maybeUnhiddenMarkers;
          if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || me(i[a], 'hide');
          if (o) for (var s = 0; s < o.length; ++s) o[s].lines.length && me(o[s], 'unhide');
          n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && me(t, 'changes', t, e.changeObjs),
            e.update && e.update.finish();
        }
        function Jr(e, t) {
          if (e.curOp) return t();
          Vr(e);
          try {
            return t();
          } finally {
            Xr(e);
          }
        }
        function ei(e, t) {
          return function() {
            if (e.curOp) return t.apply(e, arguments);
            Vr(e);
            try {
              return t.apply(e, arguments);
            } finally {
              Xr(e);
            }
          };
        }
        function ti(e) {
          return function() {
            if (this.curOp) return e.apply(this, arguments);
            Vr(this);
            try {
              return e.apply(this, arguments);
            } finally {
              Xr(this);
            }
          };
        }
        function ni(e) {
          return function() {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            Vr(t);
            try {
              return e.apply(this, arguments);
            } finally {
              Xr(t);
            }
          };
        }
        function ri(e, t) {
          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, z(ii, e));
        }
        function ii(e) {
          var t = e.doc;
          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var n = +new Date() + e.options.workTime,
              r = pt(e, t.highlightFrontier),
              i = [];
            t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
              if (r.line >= e.display.viewFrom) {
                var a = o.styles,
                  s = o.text.length > e.options.maxHighlightLength ? qe(t.mode, r.state) : null,
                  l = ht(e, o, r, !0);
                s && (r.state = s), (o.styles = l.styles);
                var c = o.styleClasses,
                  u = l.classes;
                u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                for (
                  var d =
                      !a ||
                      a.length != o.styles.length ||
                      (c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass)),
                    h = 0;
                  !d && h < a.length;
                  ++h
                )
                  d = a[h] != o.styles[h];
                d && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
              } else o.text.length <= e.options.maxHighlightLength && mt(e, o.text, r), (o.stateAfter = r.line % 5 == 0 ? r.save() : null), r.nextLine();
              if (+new Date() > n) return ri(e, e.options.workDelay), !0;
            }),
              (t.highlightFrontier = r.line),
              (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
              i.length &&
                Jr(e, function() {
                  for (var t = 0; t < i.length; t++) fr(e, i[t], 'text');
                });
          }
        }
        var oi = function(e, t, n) {
          var r = e.display;
          (this.viewport = t),
            (this.visible = Dr(r, e.doc, t)),
            (this.editorIsHidden = !r.wrapper.offsetWidth),
            (this.wrapperHeight = r.wrapper.clientHeight),
            (this.wrapperWidth = r.wrapper.clientWidth),
            (this.oldDisplayWidth = On(e)),
            (this.force = n),
            (this.dims = ar(e)),
            (this.events = []);
        };
        function ai(e, t) {
          var n = e.display,
            r = e.doc;
          if (t.editorIsHidden) return pr(e), !1;
          if (
            !t.force &&
            t.visible.from >= n.viewFrom &&
            t.visible.to <= n.viewTo &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
            n.renderedView == n.view &&
            0 == gr(e)
          )
            return !1;
          hi(e) && (pr(e), (t.dims = ar(e)));
          var i = r.first + r.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
            a = Math.min(i, t.visible.to + e.options.viewportMargin);
          n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
            n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
            kt && ((o = Bt(e.doc, o)), (a = Wt(e.doc, a)));
          var s =
            o != n.viewFrom ||
            a != n.viewTo ||
            n.lastWrapHeight != t.wrapperHeight ||
            n.lastWrapWidth != t.wrapperWidth;
          !(function(e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom
              ? ((r.view = an(e, t, n)), (r.viewFrom = t))
              : (r.viewFrom > t
                  ? (r.view = an(e, t, r.viewFrom).concat(r.view))
                  : r.viewFrom < t && (r.view = r.view.slice(dr(e, t))),
                (r.viewFrom = t),
                r.viewTo < n
                  ? (r.view = r.view.concat(an(e, r.viewTo, n)))
                  : r.viewTo > n && (r.view = r.view.slice(0, dr(e, n)))),
              (r.viewTo = n);
          })(e, o, a),
            (n.viewOffset = Ut(Ve(e.doc, n.viewFrom))),
            (e.display.mover.style.top = n.viewOffset + 'px');
          var c = gr(e);
          if (
            !s &&
            0 == c &&
            !t.force &&
            n.renderedView == n.view &&
            (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
          )
            return !1;
          var u = (function(e) {
            if (e.hasFocus()) return null;
            var t = _();
            if (!t || !A(e.display.lineDiv, t)) return null;
            var n = { activeElt: t };
            if (window.getSelection) {
              var r = window.getSelection();
              r.anchorNode &&
                r.extend &&
                A(e.display.lineDiv, r.anchorNode) &&
                ((n.anchorNode = r.anchorNode),
                (n.anchorOffset = r.anchorOffset),
                (n.focusNode = r.focusNode),
                (n.focusOffset = r.focusOffset));
            }
            return n;
          })(e);
          return (
            c > 4 && (n.lineDiv.style.display = 'none'),
            (function(e, t, n) {
              var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                a = o.firstChild;
              function s(t) {
                var n = t.nextSibling;
                return (
                  l && x && e.display.currentWheelTarget == t
                    ? (t.style.display = 'none')
                    : t.parentNode.removeChild(t),
                  n
                );
              }
              for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
                var h = c[d];
                if (h.hidden);
                else if (h.node && h.node.parentNode == o) {
                  for (; a != h.node; ) a = s(a);
                  var f = i && null != t && t <= u && h.lineNumber;
                  h.changes && (B(h.changes, 'gutter') > -1 && (f = !1), dn(e, h, u, n)),
                    f && (T(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(et(e.options, u)))),
                    (a = h.node.nextSibling);
                } else {
                  var p = xn(e, h, u, n);
                  o.insertBefore(p, a);
                }
                u += h.size;
              }
              for (; a; ) a = s(a);
            })(e, n.updateLineNumbers, t.dims),
            c > 4 && (n.lineDiv.style.display = ''),
            (n.renderedView = n.view),
            (function(e) {
              if (
                e &&
                e.activeElt &&
                e.activeElt != _() &&
                (e.activeElt.focus(), e.anchorNode && A(document.body, e.anchorNode) && A(document.body, e.focusNode))
              ) {
                var t = window.getSelection(),
                  n = document.createRange();
                n.setEnd(e.anchorNode, e.anchorOffset),
                  n.collapse(!1),
                  t.removeAllRanges(),
                  t.addRange(n),
                  t.extend(e.focusNode, e.focusOffset);
              }
            })(u),
            T(n.cursorDiv),
            T(n.selectionDiv),
            (n.gutters.style.height = n.sizer.style.minHeight = 0),
            s && ((n.lastWrapHeight = t.wrapperHeight), (n.lastWrapWidth = t.wrapperWidth), ri(e, 400)),
            (n.updateLineNumbers = null),
            !0
          );
        }
        function si(e, t) {
          for (
            var n = t.viewport, r = !0;
            ((r && e.options.lineWrapping && t.oldDisplayWidth != On(e)) ||
              (n && null != n.top && (n = { top: Math.min(e.doc.height + Mn(e.display) - Dn(e), n.top) }),
              (t.visible = Dr(e.display, e.doc, n)),
              !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) &&
            ai(e, t);
            r = !1
          ) {
            Tr(e);
            var i = Rr(e);
            vr(e), jr(e, i), ui(e, i), (t.force = !1);
          }
          t.signal(e, 'update', e),
            (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) ||
              (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
              (e.display.reportedViewFrom = e.display.viewFrom),
              (e.display.reportedViewTo = e.display.viewTo));
        }
        function li(e, t) {
          var n = new oi(e, t);
          if (ai(e, n)) {
            Tr(e), si(e, n);
            var r = Rr(e);
            vr(e), jr(e, r), ui(e, r), n.finish();
          }
        }
        function ci(e) {
          e.sizer.style.marginLeft = e.gutters.offsetWidth + 'px';
        }
        function ui(e, t) {
          (e.display.sizer.style.minHeight = t.docHeight + 'px'),
            (e.display.heightForcer.style.top = t.docHeight + 'px'),
            (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Tn(e) + 'px');
        }
        function di(e) {
          var t = e.display,
            n = t.view;
          if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
            for (
              var r = sr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + 'px', a = 0;
              a < n.length;
              a++
            )
              if (!n[a].hidden) {
                e.options.fixedGutter &&
                  (n[a].gutter && (n[a].gutter.style.left = o),
                  n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                var s = n[a].alignable;
                if (s) for (var l = 0; l < s.length; l++) s[l].style.left = o;
              }
            e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
          }
        }
        function hi(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
            n = et(e.options, t.first + t.size - 1),
            r = e.display;
          if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(D('div', [D('div', n)], 'CodeMirror-linenumber CodeMirror-gutter-elt')),
              o = i.firstChild.offsetWidth,
              a = i.offsetWidth - o;
            return (
              (r.lineGutter.style.width = ''),
              (r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1),
              (r.lineNumWidth = r.lineNumInnerWidth + a),
              (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
              (r.lineGutter.style.width = r.lineNumWidth + 'px'),
              ci(e.display),
              !0
            );
          }
          return !1;
        }
        function fi(e, t) {
          for (var n = [], r = !1, i = 0; i < e.length; i++) {
            var o = e[i],
              a = null;
            if (('string' != typeof o && ((a = o.style), (o = o.className)), 'CodeMirror-linenumbers' == o)) {
              if (!t) continue;
              r = !0;
            }
            n.push({ className: o, style: a });
          }
          return t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }), n;
        }
        function pi(e) {
          var t = e.gutters,
            n = e.gutterSpecs;
          T(t), (e.lineGutter = null);
          for (var r = 0; r < n.length; ++r) {
            var i = n[r],
              o = i.className,
              a = i.style,
              s = t.appendChild(D('div', null, 'CodeMirror-gutter ' + o));
            a && (s.style.cssText = a),
              'CodeMirror-linenumbers' == o && ((e.lineGutter = s), (s.style.width = (e.lineNumWidth || 1) + 'px'));
          }
          (t.style.display = n.length ? '' : 'none'), ci(e);
        }
        function mi(e) {
          pi(e.display), hr(e), di(e);
        }
        function gi(e, t, r, i) {
          var o = this;
          (this.input = r),
            (o.scrollbarFiller = D('div', null, 'CodeMirror-scrollbar-filler')),
            o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
            (o.gutterFiller = D('div', null, 'CodeMirror-gutter-filler')),
            o.gutterFiller.setAttribute('cm-not-content', 'true'),
            (o.lineDiv = N('div', null, 'CodeMirror-code')),
            (o.selectionDiv = D('div', null, null, 'position: relative; z-index: 1')),
            (o.cursorDiv = D('div', null, 'CodeMirror-cursors')),
            (o.measure = D('div', null, 'CodeMirror-measure')),
            (o.lineMeasure = D('div', null, 'CodeMirror-measure')),
            (o.lineSpace = N(
              'div',
              [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
              null,
              'position: relative; outline: none',
            ));
          var c = N('div', [o.lineSpace], 'CodeMirror-lines');
          (o.mover = D('div', [c], null, 'position: relative')),
            (o.sizer = D('div', [o.mover], 'CodeMirror-sizer')),
            (o.sizerWidth = null),
            (o.heightForcer = D('div', null, null, 'position: absolute; height: ' + W + 'px; width: 1px;')),
            (o.gutters = D('div', null, 'CodeMirror-gutters')),
            (o.lineGutter = null),
            (o.scroller = D('div', [o.sizer, o.heightForcer, o.gutters], 'CodeMirror-scroll')),
            o.scroller.setAttribute('tabIndex', '-1'),
            (o.wrapper = D('div', [o.scrollbarFiller, o.gutterFiller, o.scroller], 'CodeMirror')),
            a && s < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
            l || (n && v) || (o.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
            (o.viewFrom = o.viewTo = t.first),
            (o.reportedViewFrom = o.reportedViewTo = t.first),
            (o.view = []),
            (o.renderedView = null),
            (o.externalMeasured = null),
            (o.viewOffset = 0),
            (o.lastWrapHeight = o.lastWrapWidth = 0),
            (o.updateLineNumbers = null),
            (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
            (o.scrollbarsClipped = !1),
            (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
            (o.alignWidgets = !1),
            (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
            (o.maxLine = null),
            (o.maxLineLength = 0),
            (o.maxLineChanged = !1),
            (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
            (o.shift = !1),
            (o.selForContextMenu = null),
            (o.activeTouch = null),
            (o.gutterSpecs = fi(i.gutters, i.lineNumbers)),
            pi(o),
            r.init(o);
        }
        (oi.prototype.signal = function(e, t) {
          xe(e, t) && this.events.push(arguments);
        }),
          (oi.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++) me.apply(null, this.events[e]);
          });
        var vi = 0,
          xi = null;
        function yi(e) {
          var t = e.wheelDeltaX,
            n = e.wheelDeltaY;
          return (
            null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
            null == n && e.detail && e.axis == e.VERTICAL_AXIS ? (n = e.detail) : null == n && (n = e.wheelDelta),
            { x: t, y: n }
          );
        }
        function bi(e) {
          var t = yi(e);
          return (t.x *= xi), (t.y *= xi), t;
        }
        function wi(e, t) {
          var r = yi(t),
            i = r.x,
            o = r.y,
            a = e.display,
            s = a.scroller,
            c = s.scrollHeight > s.clientHeight;
          if ((i && s.scrollWidth > s.clientWidth) || (o && c)) {
            if (o && x && l)
              e: for (var u = t.target, h = a.view; u != s; u = u.parentNode)
                for (var f = 0; f < h.length; f++)
                  if (h[f].node == u) {
                    e.display.currentWheelTarget = u;
                    break e;
                  }
            if (i && !n && !d && null != xi)
              return (
                o && c && zr(e, Math.max(0, s.scrollTop + o * xi)),
                Hr(e, Math.max(0, s.scrollLeft + i * xi)),
                (!o || (o && c)) && be(t),
                void (a.wheelStartX = null)
              );
            if (o && null != xi) {
              var p = o * xi,
                m = e.doc.scrollTop,
                g = m + a.wrapper.clientHeight;
              p < 0 ? (m = Math.max(0, m + p - 50)) : (g = Math.min(e.doc.height, g + p + 50)),
                li(e, { top: m, bottom: g });
            }
            vi < 20 &&
              (null == a.wheelStartX
                ? ((a.wheelStartX = s.scrollLeft),
                  (a.wheelStartY = s.scrollTop),
                  (a.wheelDX = i),
                  (a.wheelDY = o),
                  setTimeout(function() {
                    if (null != a.wheelStartX) {
                      var e = s.scrollLeft - a.wheelStartX,
                        t = s.scrollTop - a.wheelStartY,
                        n = (t && a.wheelDY && t / a.wheelDY) || (e && a.wheelDX && e / a.wheelDX);
                      (a.wheelStartX = a.wheelStartY = null), n && ((xi = (xi * vi + n) / (vi + 1)), ++vi);
                    }
                  }, 200))
                : ((a.wheelDX += i), (a.wheelDY += o)));
          }
        }
        a ? (xi = -0.53) : n ? (xi = 15) : u ? (xi = -0.7) : h && (xi = -1 / 3);
        var Ci = function(e, t) {
          (this.ranges = e), (this.primIndex = t);
        };
        (Ci.prototype.primary = function() {
          return this.ranges[this.primIndex];
        }),
          (Ci.prototype.equals = function(e) {
            if (e == this) return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var n = this.ranges[t],
                r = e.ranges[t];
              if (!rt(n.anchor, r.anchor) || !rt(n.head, r.head)) return !1;
            }
            return !0;
          }),
          (Ci.prototype.deepCopy = function() {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new ki(it(this.ranges[t].anchor), it(this.ranges[t].head));
            return new Ci(e, this.primIndex);
          }),
          (Ci.prototype.somethingSelected = function() {
            for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
            return !1;
          }),
          (Ci.prototype.contains = function(e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
              var r = this.ranges[n];
              if (nt(t, r.from()) >= 0 && nt(e, r.to()) <= 0) return n;
            }
            return -1;
          });
        var ki = function(e, t) {
          (this.anchor = e), (this.head = t);
        };
        function Si(e, t, n) {
          var r = e && e.options.selectionsMayTouch,
            i = t[n];
          t.sort(function(e, t) {
            return nt(e.from(), t.from());
          }),
            (n = B(t, i));
          for (var o = 1; o < t.length; o++) {
            var a = t[o],
              s = t[o - 1],
              l = nt(s.to(), a.from());
            if (r && !a.empty() ? l > 0 : l >= 0) {
              var c = at(s.from(), a.from()),
                u = ot(s.to(), a.to()),
                d = s.empty() ? a.from() == a.head : s.from() == s.head;
              o <= n && --n, t.splice(--o, 2, new ki(d ? u : c, d ? c : u));
            }
          }
          return new Ci(t, n);
        }
        function Mi(e, t) {
          return new Ci([new ki(e, t || e)], 0);
        }
        function Li(e) {
          return e.text
            ? tt(e.from.line + e.text.length - 1, K(e.text).length + (1 == e.text.length ? e.from.ch : 0))
            : e.to;
        }
        function Ti(e, t) {
          if (nt(e, t.from) < 0) return e;
          if (nt(e, t.to) <= 0) return Li(t);
          var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            r = e.ch;
          return e.line == t.to.line && (r += Li(t).ch - t.to.ch), tt(n, r);
        }
        function Oi(e, t) {
          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new ki(Ti(i.anchor, t), Ti(i.head, t)));
          }
          return Si(e.cm, n, e.sel.primIndex);
        }
        function Di(e, t, n) {
          return e.line == t.line ? tt(n.line, e.ch - t.ch + n.ch) : tt(n.line + (e.line - t.line), e.ch);
        }
        function Ni(e) {
          (e.doc.mode = Be(e.options, e.doc.modeOption)), Ai(e);
        }
        function Ai(e) {
          e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
          }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            ri(e, 100),
            e.state.modeGen++,
            e.curOp && hr(e);
        }
        function _i(e, t) {
          return 0 == t.from.ch && 0 == t.to.ch && '' == K(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
        }
        function Ei(e, t, n, r) {
          function i(e) {
            return n ? n[e] : null;
          }
          function o(e, n, i) {
            !(function(e, t, n, r) {
              (e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                Dt(e),
                Nt(e, n);
              var i = r ? r(e) : 1;
              i != e.height && Ze(e, i);
            })(e, n, i, r),
              cn(e, 'change', e, t);
          }
          function a(e, t) {
            for (var n = [], o = e; o < t; ++o) n.push(new Vt(c[o], i(o), r));
            return n;
          }
          var s = t.from,
            l = t.to,
            c = t.text,
            u = Ve(e, s.line),
            d = Ve(e, l.line),
            h = K(c),
            f = i(c.length - 1),
            p = l.line - s.line;
          if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
          else if (_i(e, t)) {
            var m = a(0, c.length - 1);
            o(d, d.text, f), p && e.remove(s.line, p), m.length && e.insert(s.line, m);
          } else if (u == d)
            if (1 == c.length) o(u, u.text.slice(0, s.ch) + h + u.text.slice(l.ch), f);
            else {
              var g = a(1, c.length - 1);
              g.push(new Vt(h + u.text.slice(l.ch), f, r)),
                o(u, u.text.slice(0, s.ch) + c[0], i(0)),
                e.insert(s.line + 1, g);
            }
          else if (1 == c.length)
            o(u, u.text.slice(0, s.ch) + c[0] + d.text.slice(l.ch), i(0)), e.remove(s.line + 1, p);
          else {
            o(u, u.text.slice(0, s.ch) + c[0], i(0)), o(d, h + d.text.slice(l.ch), f);
            var v = a(1, c.length - 1);
            p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, v);
          }
          cn(e, 'change', e, t);
        }
        function Pi(e, t, n) {
          !(function e(r, i, o) {
            if (r.linked)
              for (var a = 0; a < r.linked.length; ++a) {
                var s = r.linked[a];
                if (s.doc != i) {
                  var l = o && s.sharedHist;
                  (n && !l) || (t(s.doc, l), e(s.doc, r, l));
                }
              }
          })(e, null, !0);
        }
        function Fi(e, t) {
          if (t.cm) throw new Error('This document is already in use.');
          (e.doc = t),
            (t.cm = e),
            cr(e),
            Ni(e),
            zi(e),
            e.options.lineWrapping || Gt(e),
            (e.options.mode = t.modeOption),
            hr(e);
        }
        function zi(e) {
          ('rtl' == e.doc.direction ? E : L)(e.display.lineDiv, 'CodeMirror-rtl');
        }
        function Ii(e) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e || 1);
        }
        function Hi(e, t) {
          var n = { from: it(t.from), to: Li(t), text: Xe(e, t.from, t.to) };
          return (
            ji(e, n, t.from.line, t.to.line + 1),
            Pi(
              e,
              function(e) {
                return ji(e, n, t.from.line, t.to.line + 1);
              },
              !0,
            ),
            n
          );
        }
        function Ri(e) {
          for (; e.length && K(e).ranges; ) e.pop();
        }
        function Bi(e, t, n, r) {
          var i = e.history;
          i.undone.length = 0;
          var o,
            a,
            s = +new Date();
          if (
            (i.lastOp == r ||
              (i.lastOrigin == t.origin &&
                t.origin &&
                (('+' == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  '*' == t.origin.charAt(0)))) &&
            (o = (function(e, t) {
              return t
                ? (Ri(e.done), K(e.done))
                : e.done.length && !K(e.done).ranges
                ? K(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                ? (e.done.pop(), K(e.done))
                : void 0;
            })(i, i.lastOp == r))
          )
            (a = K(o.changes)),
              0 == nt(t.from, t.to) && 0 == nt(t.from, a.to) ? (a.to = Li(t)) : o.changes.push(Hi(e, t));
          else {
            var l = K(i.done);
            for (
              (l && l.ranges) || Wi(e.sel, i.done),
                o = { changes: [Hi(e, t)], generation: i.generation },
                i.done.push(o);
              i.done.length > i.undoDepth;

            )
              i.done.shift(), i.done[0].ranges || i.done.shift();
          }
          i.done.push(n),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = s),
            (i.lastOp = i.lastSelOp = r),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            a || me(e, 'historyAdded');
        }
        function Wi(e, t) {
          var n = K(t);
          (n && n.ranges && n.equals(e)) || t.push(e);
        }
        function ji(e, t, n, r) {
          var i = t['spans_' + e.id],
            o = 0;
          e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
            n.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[o] = n.markedSpans), ++o;
          });
        }
        function qi(e) {
          if (!e) return null;
          for (var t, n = 0; n < e.length; ++n)
            e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
          return t ? (t.length ? t : null) : e;
        }
        function Ui(e, t) {
          var n = (function(e, t) {
              var n = t['spans_' + e.id];
              if (!n) return null;
              for (var r = [], i = 0; i < t.text.length; ++i) r.push(qi(n[i]));
              return r;
            })(e, t),
            r = Tt(e, t);
          if (!n) return r;
          if (!r) return n;
          for (var i = 0; i < n.length; ++i) {
            var o = n[i],
              a = r[i];
            if (o && a)
              e: for (var s = 0; s < a.length; ++s) {
                for (var l = a[s], c = 0; c < o.length; ++c) if (o[c].marker == l.marker) continue e;
                o.push(l);
              }
            else a && (n[i] = a);
          }
          return n;
        }
        function $i(e, t, n) {
          for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) r.push(n ? Ci.prototype.deepCopy.call(o) : o);
            else {
              var a = o.changes,
                s = [];
              r.push({ changes: s });
              for (var l = 0; l < a.length; ++l) {
                var c = a[l],
                  u = void 0;
                if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
                  for (var d in c)
                    (u = d.match(/^spans_(\d+)$/)) && B(t, Number(u[1])) > -1 && ((K(s)[d] = c[d]), delete c[d]);
              }
            }
          }
          return r;
        }
        function Gi(e, t, n, r) {
          if (r) {
            var i = e.anchor;
            if (n) {
              var o = nt(t, i) < 0;
              o != nt(n, i) < 0 ? ((i = t), (t = n)) : o != nt(t, n) < 0 && (t = n);
            }
            return new ki(i, t);
          }
          return new ki(n || t, t);
        }
        function Vi(e, t, n, r, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            Qi(e, new Ci([Gi(e.sel.primary(), t, n, i)], 0), r);
        }
        function Xi(e, t, n) {
          for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
            r[o] = Gi(e.sel.ranges[o], t[o], null, i);
          Qi(e, Si(e.cm, r, e.sel.primIndex), n);
        }
        function Ki(e, t, n, r) {
          var i = e.sel.ranges.slice(0);
          (i[t] = n), Qi(e, Si(e.cm, i, e.sel.primIndex), r);
        }
        function Zi(e, t, n, r) {
          Qi(e, Mi(t, n), r);
        }
        function Yi(e, t, n) {
          var r = e.history.done,
            i = K(r);
          i && i.ranges ? ((r[r.length - 1] = t), Ji(e, t, n)) : Qi(e, t, n);
        }
        function Qi(e, t, n) {
          Ji(e, t, n),
            (function(e, t, n, r) {
              var i = e.history,
                o = r && r.origin;
              n == i.lastSelOp ||
              (o &&
                i.lastSelOrigin == o &&
                ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                  (function(e, t, n, r) {
                    var i = t.charAt(0);
                    return (
                      '*' == i ||
                      ('+' == i &&
                        n.ranges.length == r.ranges.length &&
                        n.somethingSelected() == r.somethingSelected() &&
                        new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
                    );
                  })(e, o, K(i.done), t)))
                ? (i.done[i.done.length - 1] = t)
                : Wi(t, i.done),
                (i.lastSelTime = +new Date()),
                (i.lastSelOrigin = o),
                (i.lastSelOp = n),
                r && !1 !== r.clearRedo && Ri(i.undone);
            })(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
        }
        function Ji(e, t, n) {
          (xe(e, 'beforeSelectionChange') || (e.cm && xe(e.cm, 'beforeSelectionChange'))) &&
            (t = (function(e, t, n) {
              var r = {
                ranges: t.ranges,
                update: function(t) {
                  this.ranges = [];
                  for (var n = 0; n < t.length; n++) this.ranges[n] = new ki(lt(e, t[n].anchor), lt(e, t[n].head));
                },
                origin: n && n.origin,
              };
              return (
                me(e, 'beforeSelectionChange', e, r),
                e.cm && me(e.cm, 'beforeSelectionChange', e.cm, r),
                r.ranges != t.ranges ? Si(e.cm, r.ranges, r.ranges.length - 1) : t
              );
            })(e, t, n));
          var r = (n && n.bias) || (nt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          eo(e, no(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || _r(e.cm);
        }
        function eo(e, t) {
          t.equals(e.sel) ||
            ((e.sel = t),
            e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), ve(e.cm)),
            cn(e, 'cursorActivity', e));
        }
        function to(e) {
          eo(e, no(e, e.sel, null, !1));
        }
        function no(e, t, n, r) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o],
              s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
              l = io(e, a.anchor, s && s.anchor, n, r),
              c = io(e, a.head, s && s.head, n, r);
            (i || l != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new ki(l, c)));
          }
          return i ? Si(e.cm, i, t.primIndex) : t;
        }
        function ro(e, t, n, r, i) {
          var o = Ve(e, t.line);
          if (o.markedSpans)
            for (var a = 0; a < o.markedSpans.length; ++a) {
              var s = o.markedSpans[a],
                l = s.marker,
                c = 'selectLeft' in l ? !l.selectLeft : l.inclusiveLeft,
                u = 'selectRight' in l ? !l.selectRight : l.inclusiveRight;
              if (
                (null == s.from || (c ? s.from <= t.ch : s.from < t.ch)) &&
                (null == s.to || (u ? s.to >= t.ch : s.to > t.ch))
              ) {
                if (i && (me(l, 'beforeCursorEnter'), l.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --a;
                    continue;
                  }
                  break;
                }
                if (!l.atomic) continue;
                if (n) {
                  var d = l.find(r < 0 ? 1 : -1),
                    h = void 0;
                  if (
                    ((r < 0 ? u : c) && (d = oo(e, d, -r, d && d.line == t.line ? o : null)),
                    d && d.line == t.line && (h = nt(d, n)) && (r < 0 ? h < 0 : h > 0))
                  )
                    return ro(e, d, t, r, i);
                }
                var f = l.find(r < 0 ? -1 : 1);
                return (r < 0 ? c : u) && (f = oo(e, f, r, f.line == t.line ? o : null)), f ? ro(e, f, t, r, i) : null;
              }
            }
          return t;
        }
        function io(e, t, n, r, i) {
          var o = r || 1;
          return (
            ro(e, t, n, o, i) ||
            (!i && ro(e, t, n, o, !0)) ||
            ro(e, t, n, -o, i) ||
            (!i && ro(e, t, n, -o, !0)) ||
            ((e.cantEdit = !0), tt(e.first, 0))
          );
        }
        function oo(e, t, n, r) {
          return n < 0 && 0 == t.ch
            ? t.line > e.first
              ? lt(e, tt(t.line - 1))
              : null
            : n > 0 && t.ch == (r || Ve(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? tt(t.line + 1, 0)
              : null
            : new tt(t.line, t.ch + n);
        }
        function ao(e) {
          e.setSelection(tt(e.firstLine(), 0), tt(e.lastLine()), q);
        }
        function so(e, t, n) {
          var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
              return (r.canceled = !0);
            },
          };
          return (
            n &&
              (r.update = function(t, n, i, o) {
                t && (r.from = lt(e, t)), n && (r.to = lt(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
              }),
            me(e, 'beforeChange', e, r),
            e.cm && me(e.cm, 'beforeChange', e.cm, r),
            r.canceled
              ? (e.cm && (e.cm.curOp.updateInput = 2), null)
              : { from: r.from, to: r.to, text: r.text, origin: r.origin }
          );
        }
        function lo(e, t, n) {
          if (e.cm) {
            if (!e.cm.curOp) return ei(e.cm, lo)(e, t, n);
            if (e.cm.state.suppressEdits) return;
          }
          if (!(xe(e, 'beforeChange') || (e.cm && xe(e.cm, 'beforeChange'))) || (t = so(e, t, !0))) {
            var r =
              Ct &&
              !n &&
              (function(e, t, n) {
                var r = null;
                if (
                  (e.iter(t.line, n.line + 1, function(e) {
                    if (e.markedSpans)
                      for (var t = 0; t < e.markedSpans.length; ++t) {
                        var n = e.markedSpans[t].marker;
                        !n.readOnly || (r && -1 != B(r, n)) || (r || (r = [])).push(n);
                      }
                  }),
                  !r)
                )
                  return null;
                for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                  for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                    var c = i[l];
                    if (!(nt(c.to, s.from) < 0 || nt(c.from, s.to) > 0)) {
                      var u = [l, 1],
                        d = nt(c.from, s.from),
                        h = nt(c.to, s.to);
                      (d < 0 || (!a.inclusiveLeft && !d)) && u.push({ from: c.from, to: s.from }),
                        (h > 0 || (!a.inclusiveRight && !h)) && u.push({ from: s.to, to: c.to }),
                        i.splice.apply(i, u),
                        (l += u.length - 3);
                    }
                  }
                return i;
              })(e, t.from, t.to);
            if (r)
              for (var i = r.length - 1; i >= 0; --i)
                co(e, { from: r[i].from, to: r[i].to, text: i ? [''] : t.text, origin: t.origin });
            else co(e, t);
          }
        }
        function co(e, t) {
          if (1 != t.text.length || '' != t.text[0] || 0 != nt(t.from, t.to)) {
            var n = Oi(e, t);
            Bi(e, t, n, e.cm ? e.cm.curOp.id : NaN), fo(e, t, n, Tt(e, t));
            var r = [];
            Pi(e, function(e, n) {
              n || -1 != B(r, e.history) || (vo(e.history, t), r.push(e.history)), fo(e, t, null, Tt(e, t));
            });
          }
        }
        function uo(e, t, n) {
          var r = e.cm && e.cm.state.suppressEdits;
          if (!r || n) {
            for (
              var i,
                o = e.history,
                a = e.sel,
                s = 'undo' == t ? o.done : o.undone,
                l = 'undo' == t ? o.undone : o.done,
                c = 0;
              c < s.length && ((i = s[c]), n ? !i.ranges || i.equals(e.sel) : i.ranges);
              c++
            );
            if (c != s.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                if (!(i = s.pop()).ranges) {
                  if (r) return void s.push(i);
                  break;
                }
                if ((Wi(i, l), n && !i.equals(e.sel))) return void Qi(e, i, { clearRedo: !1 });
                a = i;
              }
              var u = [];
              Wi(a, l),
                l.push({ changes: u, generation: o.generation }),
                (o.generation = i.generation || ++o.maxGeneration);
              for (
                var d = xe(e, 'beforeChange') || (e.cm && xe(e.cm, 'beforeChange')),
                  h = function(n) {
                    var r = i.changes[n];
                    if (((r.origin = t), d && !so(e, r, !1))) return (s.length = 0), {};
                    u.push(Hi(e, r));
                    var o = n ? Oi(e, r) : K(s);
                    fo(e, r, o, Ui(e, r)), !n && e.cm && e.cm.scrollIntoView({ from: r.from, to: Li(r) });
                    var a = [];
                    Pi(e, function(e, t) {
                      t || -1 != B(a, e.history) || (vo(e.history, r), a.push(e.history)), fo(e, r, null, Ui(e, r));
                    });
                  },
                  f = i.changes.length - 1;
                f >= 0;
                --f
              ) {
                var p = h(f);
                if (p) return p.v;
              }
            }
          }
        }
        function ho(e, t) {
          if (
            0 != t &&
            ((e.first += t),
            (e.sel = new Ci(
              Z(e.sel.ranges, function(e) {
                return new ki(tt(e.anchor.line + t, e.anchor.ch), tt(e.head.line + t, e.head.ch));
              }),
              e.sel.primIndex,
            )),
            e.cm)
          ) {
            hr(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) fr(e.cm, r, 'gutter');
          }
        }
        function fo(e, t, n, r) {
          if (e.cm && !e.cm.curOp) return ei(e.cm, fo)(e, t, n, r);
          if (t.to.line < e.first) ho(e, t.text.length - 1 - (t.to.line - t.from.line));
          else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              ho(e, i),
                (t = { from: tt(e.first, 0), to: tt(t.to.line + i, t.to.ch), text: [K(t.text)], origin: t.origin });
            }
            var o = e.lastLine();
            t.to.line > o &&
              (t = { from: t.from, to: tt(o, Ve(e, o).text.length), text: [t.text[0]], origin: t.origin }),
              (t.removed = Xe(e, t.from, t.to)),
              n || (n = Oi(e, t)),
              e.cm
                ? (function(e, t, n) {
                    var r = e.doc,
                      i = e.display,
                      o = t.from,
                      a = t.to,
                      s = !1,
                      l = o.line;
                    e.options.lineWrapping ||
                      ((l = Ye(Rt(Ve(r, o.line)))),
                      r.iter(l, a.line + 1, function(e) {
                        if (e == i.maxLine) return (s = !0), !0;
                      })),
                      r.sel.contains(t.from, t.to) > -1 && ve(e),
                      Ei(r, t, n, lr(e)),
                      e.options.lineWrapping ||
                        (r.iter(l, o.line + t.text.length, function(e) {
                          var t = $t(e);
                          t > i.maxLineLength &&
                            ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (s = !1));
                        }),
                        s && (e.curOp.updateMaxLine = !0)),
                      (function(e, t) {
                        if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                          for (var n = e.first, r = t - 1; r > n; r--) {
                            var i = Ve(e, r).stateAfter;
                            if (i && (!(i instanceof ut) || r + i.lookAhead < t)) {
                              n = r + 1;
                              break;
                            }
                          }
                          e.highlightFrontier = Math.min(e.highlightFrontier, n);
                        }
                      })(r, o.line),
                      ri(e, 400);
                    var c = t.text.length - (a.line - o.line) - 1;
                    t.full
                      ? hr(e)
                      : o.line != a.line || 1 != t.text.length || _i(e.doc, t)
                      ? hr(e, o.line, a.line + 1, c)
                      : fr(e, o.line, 'text');
                    var u = xe(e, 'changes'),
                      d = xe(e, 'change');
                    if (d || u) {
                      var h = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };
                      d && cn(e, 'change', e, h), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
                    }
                    e.display.selForContextMenu = null;
                  })(e.cm, t, r)
                : Ei(e, t, r),
              Ji(e, n, q),
              e.cantEdit && io(e, tt(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }
        function po(e, t, n, r, i) {
          var o;
          r || (r = n),
            nt(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
            'string' == typeof t && (t = e.splitLines(t)),
            lo(e, { from: n, to: r, text: t, origin: i });
        }
        function mo(e, t, n, r) {
          n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function go(e, t, n, r) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              a = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
              for (var s = 0; s < o.ranges.length; s++) mo(o.ranges[s].anchor, t, n, r), mo(o.ranges[s].head, t, n, r);
            } else {
              for (var l = 0; l < o.changes.length; ++l) {
                var c = o.changes[l];
                if (n < c.from.line) (c.from = tt(c.from.line + r, c.from.ch)), (c.to = tt(c.to.line + r, c.to.ch));
                else if (t <= c.to.line) {
                  a = !1;
                  break;
                }
              }
              a || (e.splice(0, i + 1), (i = 0));
            }
          }
        }
        function vo(e, t) {
          var n = t.from.line,
            r = t.to.line,
            i = t.text.length - (r - n) - 1;
          go(e.done, n, r, i), go(e.undone, n, r, i);
        }
        function xo(e, t, n, r) {
          var i = t,
            o = t;
          return (
            'number' == typeof t ? (o = Ve(e, st(e, t))) : (i = Ye(t)),
            null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o)
          );
        }
        function yo(e) {
          (this.lines = e), (this.parent = null);
          for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height);
          this.height = t;
        }
        function bo(e) {
          this.children = e;
          for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            (t += i.chunkSize()), (n += i.height), (i.parent = this);
          }
          (this.size = t), (this.height = n), (this.parent = null);
        }
        (ki.prototype.from = function() {
          return at(this.anchor, this.head);
        }),
          (ki.prototype.to = function() {
            return ot(this.anchor, this.head);
          }),
          (ki.prototype.empty = function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
          }),
          (yo.prototype = {
            chunkSize: function() {
              return this.lines.length;
            },
            removeInner: function(e, t) {
              for (var n = e, r = e + t; n < r; ++n) {
                var i = this.lines[n];
                (this.height -= i.height), Xt(i), cn(i, 'delete');
              }
              this.lines.splice(e, t);
            },
            collapse: function(e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function(e, t, n) {
              (this.height += n),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(t)
                  .concat(this.lines.slice(e)));
              for (var r = 0; r < t.length; ++r) t[r].parent = this;
            },
            iterN: function(e, t, n) {
              for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
            },
          }),
          (bo.prototype = {
            chunkSize: function() {
              return this.size;
            },
            removeInner: function(e, t) {
              this.size -= t;
              for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n],
                  i = r.chunkSize();
                if (e < i) {
                  var o = Math.min(t, i - e),
                    a = r.height;
                  if (
                    (r.removeInner(e, o),
                    (this.height -= a - r.height),
                    i == o && (this.children.splice(n--, 1), (r.parent = null)),
                    0 == (t -= o))
                  )
                    break;
                  e = 0;
                } else e -= i;
              }
              if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof yo))) {
                var s = [];
                this.collapse(s), (this.children = [new yo(s)]), (this.children[0].parent = this);
              }
            },
            collapse: function(e) {
              for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
            },
            insertInner: function(e, t, n) {
              (this.size += t.length), (this.height += n);
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e <= o) {
                  if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                    for (var a = (i.lines.length % 25) + 25, s = a; s < i.lines.length; ) {
                      var l = new yo(i.lines.slice(s, (s += 25)));
                      (i.height -= l.height), this.children.splice(++r, 0, l), (l.parent = this);
                    }
                    (i.lines = i.lines.slice(0, a)), this.maybeSpill();
                  }
                  break;
                }
                e -= o;
              }
            },
            maybeSpill: function() {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var t = new bo(e.children.splice(e.children.length - 5, 5));
                  if (e.parent) {
                    (e.size -= t.size), (e.height -= t.height);
                    var n = B(e.parent.children, e);
                    e.parent.children.splice(n + 1, 0, t);
                  } else {
                    var r = new bo(e.children);
                    (r.parent = e), (e.children = [r, t]), (e = r);
                  }
                  t.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function(e, t, n) {
              for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r],
                  o = i.chunkSize();
                if (e < o) {
                  var a = Math.min(t, o - e);
                  if (i.iterN(e, a, n)) return !0;
                  if (0 == (t -= a)) break;
                  e = 0;
                } else e -= o;
              }
            },
          });
        var wo = function(e, t, n) {
          if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
          (this.doc = e), (this.node = t);
        };
        function Co(e, t, n) {
          Ut(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Ar(e, n);
        }
        (wo.prototype.clear = function() {
          var e = this.doc.cm,
            t = this.line.widgets,
            n = this.line,
            r = Ye(n);
          if (null != r && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (n.widgets = null);
            var o = Cn(this);
            Ze(n, Math.max(0, n.height - o)),
              e &&
                (Jr(e, function() {
                  Co(e, n, -o), fr(e, r, 'widget');
                }),
                cn(e, 'lineWidgetCleared', e, this, r));
          }
        }),
          (wo.prototype.changed = function() {
            var e = this,
              t = this.height,
              n = this.doc.cm,
              r = this.line;
            this.height = null;
            var i = Cn(this) - t;
            i &&
              (jt(this.doc, r) || Ze(r, r.height + i),
              n &&
                Jr(n, function() {
                  (n.curOp.forceUpdate = !0), Co(n, r, i), cn(n, 'lineWidgetChanged', n, e, Ye(r));
                }));
          }),
          ye(wo);
        var ko = 0,
          So = function(e, t) {
            (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++ko);
          };
        function Mo(e, t, n, r, i) {
          if (r && r.shared)
            return (function(e, t, n, r, i) {
              (r = I(r)).shared = !1;
              var o = [Mo(e, t, n, r, i)],
                a = o[0],
                s = r.widgetNode;
              return (
                Pi(e, function(e) {
                  s && (r.widgetNode = s.cloneNode(!0)), o.push(Mo(e, lt(e, t), lt(e, n), r, i));
                  for (var l = 0; l < e.linked.length; ++l) if (e.linked[l].isParent) return;
                  a = K(o);
                }),
                new Lo(o, a)
              );
            })(e, t, n, r, i);
          if (e.cm && !e.cm.curOp) return ei(e.cm, Mo)(e, t, n, r, i);
          var o = new So(e, i),
            a = nt(t, n);
          if ((r && I(r, o, !1), a > 0 || (0 == a && !1 !== o.clearWhenEmpty))) return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = N('span', [o.replacedWith], 'CodeMirror-widget')),
              r.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
              r.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if (Ht(e, t.line, t, n, o) || (t.line != n.line && Ht(e, n.line, t, n, o)))
              throw new Error('Inserting collapsed marker partially overlapping an existing one');
            kt = !0;
          }
          o.addToHistory && Bi(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
          var s,
            l = t.line,
            c = e.cm;
          if (
            (e.iter(l, n.line + 1, function(e) {
              c && o.collapsed && !c.options.lineWrapping && Rt(e) == c.display.maxLine && (s = !0),
                o.collapsed && l != t.line && Ze(e, 0),
                (function(e, t) {
                  (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
                })(e, new St(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null)),
                ++l;
            }),
            o.collapsed &&
              e.iter(t.line, n.line + 1, function(t) {
                jt(e, t) && Ze(t, 0);
              }),
            o.clearOnEnter &&
              he(o, 'beforeCursorEnter', function() {
                return o.clear();
              }),
            o.readOnly && ((Ct = !0), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
            o.collapsed && ((o.id = ++ko), (o.atomic = !0)),
            c)
          ) {
            if ((s && (c.curOp.updateMaxLine = !0), o.collapsed)) hr(c, t.line, n.line + 1);
            else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
              for (var u = t.line; u <= n.line; u++) fr(c, u, 'text');
            o.atomic && to(c.doc), cn(c, 'markerAdded', c, o);
          }
          return o;
        }
        (So.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
              t = e && !e.curOp;
            if ((t && Vr(e), xe(this, 'clear'))) {
              var n = this.find();
              n && cn(this, 'clear', n.from, n.to);
            }
            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
              var a = this.lines[o],
                s = Mt(a.markedSpans, this);
              e && !this.collapsed
                ? fr(e, Ye(a), 'text')
                : e && (null != s.to && (i = Ye(a)), null != s.from && (r = Ye(a))),
                (a.markedSpans = Lt(a.markedSpans, s)),
                null == s.from && this.collapsed && !jt(this.doc, a) && e && Ze(a, ir(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var l = 0; l < this.lines.length; ++l) {
                var c = Rt(this.lines[l]),
                  u = $t(c);
                u > e.display.maxLineLength &&
                  ((e.display.maxLine = c), (e.display.maxLineLength = u), (e.display.maxLineChanged = !0));
              }
            null != r && e && this.collapsed && hr(e, r, i + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && to(e.doc)),
              e && cn(e, 'markerCleared', e, this, r, i),
              t && Xr(e),
              this.parent && this.parent.clear();
          }
        }),
          (So.prototype.find = function(e, t) {
            var n, r;
            null == e && 'bookmark' == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
              var o = this.lines[i],
                a = Mt(o.markedSpans, this);
              if (null != a.from && ((n = tt(t ? o : Ye(o), a.from)), -1 == e)) return n;
              if (null != a.to && ((r = tt(t ? o : Ye(o), a.to)), 1 == e)) return r;
            }
            return n && { from: n, to: r };
          }),
          (So.prototype.changed = function() {
            var e = this,
              t = this.find(-1, !0),
              n = this,
              r = this.doc.cm;
            t &&
              r &&
              Jr(r, function() {
                var i = t.line,
                  o = Ye(t.line),
                  a = _n(r, o);
                if (
                  (a && (Rn(a), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
                  (r.curOp.updateMaxLine = !0),
                  !jt(n.doc, i) && null != n.height)
                ) {
                  var s = n.height;
                  n.height = null;
                  var l = Cn(n) - s;
                  l && Ze(i, i.height + l);
                }
                cn(r, 'markerChanged', r, e);
              });
          }),
          (So.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this)) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
            }
            this.lines.push(e);
          }),
          (So.prototype.detachLine = function(e) {
            if ((this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
          }),
          ye(So);
        var Lo = function(e, t) {
          (this.markers = e), (this.primary = t);
          for (var n = 0; n < e.length; ++n) e[n].parent = this;
        };
        function To(e) {
          return e.findMarks(tt(e.first, 0), e.clipPos(tt(e.lastLine())), function(e) {
            return e.parent;
          });
        }
        function Oo(e) {
          for (
            var t = function(t) {
                var n = e[t],
                  r = [n.primary.doc];
                Pi(n.primary.doc, function(e) {
                  return r.push(e);
                });
                for (var i = 0; i < n.markers.length; i++) {
                  var o = n.markers[i];
                  -1 == B(r, o.doc) && ((o.parent = null), n.markers.splice(i--, 1));
                }
              },
              n = 0;
            n < e.length;
            n++
          )
            t(n);
        }
        (Lo.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
            cn(this, 'clear');
          }
        }),
          (Lo.prototype.find = function(e, t) {
            return this.primary.find(e, t);
          }),
          ye(Lo);
        var Do = 0,
          No = function(e, t, n, r, i) {
            if (!(this instanceof No)) return new No(e, t, n, r, i);
            null == n && (n = 0),
              bo.call(this, [new yo([new Vt('', null)])]),
              (this.first = n),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = n);
            var o = tt(n, 0);
            (this.sel = Mi(o)),
              (this.history = new Ii(null)),
              (this.id = ++Do),
              (this.modeOption = t),
              (this.lineSep = r),
              (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
              (this.extend = !1),
              'string' == typeof e && (e = this.splitLines(e)),
              Ei(this, { from: o, to: o, text: e }),
              Qi(this, Mi(o), q);
          };
        (No.prototype = Q(bo.prototype, {
          constructor: No,
          iter: function(e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function(e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
            this.insertInner(e - this.first, t, n);
          },
          remove: function(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function(e) {
            var t = Ke(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: ni(function(e) {
            var t = tt(this.first, 0),
              n = this.first + this.size - 1;
            lo(
              this,
              { from: t, to: tt(n, Ve(this, n).text.length), text: this.splitLines(e), origin: 'setValue', full: !0 },
              !0,
            ),
              this.cm && Er(this.cm, 0, 0),
              Qi(this, Mi(t), q);
          }),
          replaceRange: function(e, t, n, r) {
            po(this, e, (t = lt(this, t)), (n = n ? lt(this, n) : t), r);
          },
          getRange: function(e, t, n) {
            var r = Xe(this, lt(this, e), lt(this, t));
            return !1 === n ? r : r.join(n || this.lineSeparator());
          },
          getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function(e) {
            if (Je(this, e)) return Ve(this, e);
          },
          getLineNumber: function(e) {
            return Ye(e);
          },
          getLineHandleVisualStart: function(e) {
            return 'number' == typeof e && (e = Ve(this, e)), Rt(e);
          },
          lineCount: function() {
            return this.size;
          },
          firstLine: function() {
            return this.first;
          },
          lastLine: function() {
            return this.first + this.size - 1;
          },
          clipPos: function(e) {
            return lt(this, e);
          },
          getCursor: function(e) {
            var t = this.sel.primary();
            return null == e || 'head' == e
              ? t.head
              : 'anchor' == e
              ? t.anchor
              : 'end' == e || 'to' == e || !1 === e
              ? t.to()
              : t.from();
          },
          listSelections: function() {
            return this.sel.ranges;
          },
          somethingSelected: function() {
            return this.sel.somethingSelected();
          },
          setCursor: ni(function(e, t, n) {
            Zi(this, lt(this, 'number' == typeof e ? tt(e, t || 0) : e), null, n);
          }),
          setSelection: ni(function(e, t, n) {
            Zi(this, lt(this, e), lt(this, t || e), n);
          }),
          extendSelection: ni(function(e, t, n) {
            Vi(this, lt(this, e), t && lt(this, t), n);
          }),
          extendSelections: ni(function(e, t) {
            Xi(this, ct(this, e), t);
          }),
          extendSelectionsBy: ni(function(e, t) {
            Xi(this, ct(this, Z(this.sel.ranges, e)), t);
          }),
          setSelections: ni(function(e, t, n) {
            if (e.length) {
              for (var r = [], i = 0; i < e.length; i++) r[i] = new ki(lt(this, e[i].anchor), lt(this, e[i].head));
              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Qi(this, Si(this.cm, r, t), n);
            }
          }),
          addSelection: ni(function(e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new ki(lt(this, e), lt(this, t || e))), Qi(this, Si(this.cm, r, r.length - 1), n);
          }),
          getSelection: function(e) {
            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = Xe(this, n[r].from(), n[r].to());
              t = t ? t.concat(i) : i;
            }
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function(e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = Xe(this, n[r].from(), n[r].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
            }
            return t;
          },
          replaceSelection: function(e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
            this.replaceSelections(r, t, n || '+input');
          },
          replaceSelections: ni(function(e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var a = i.ranges[o];
              r[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n };
            }
            for (
              var s =
                  t &&
                  'end' != t &&
                  (function(e, t, n) {
                    for (var r = [], i = tt(e.first, 0), o = i, a = 0; a < t.length; a++) {
                      var s = t[a],
                        l = Di(s.from, i, o),
                        c = Di(Li(s), i, o);
                      if (((i = s.to), (o = c), 'around' == n)) {
                        var u = e.sel.ranges[a],
                          d = nt(u.head, u.anchor) < 0;
                        r[a] = new ki(d ? c : l, d ? l : c);
                      } else r[a] = new ki(l, l);
                    }
                    return new Ci(r, e.sel.primIndex);
                  })(this, r, t),
                l = r.length - 1;
              l >= 0;
              l--
            )
              lo(this, r[l]);
            s ? Yi(this, s) : this.cm && _r(this.cm);
          }),
          undo: ni(function() {
            uo(this, 'undo');
          }),
          redo: ni(function() {
            uo(this, 'redo');
          }),
          undoSelection: ni(function() {
            uo(this, 'undo', !0);
          }),
          redoSelection: ni(function() {
            uo(this, 'redo', !0);
          }),
          setExtending: function(e) {
            this.extend = e;
          },
          getExtending: function() {
            return this.extend;
          },
          historySize: function() {
            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
            return { undo: t, redo: n };
          },
          clearHistory: function() {
            this.history = new Ii(this.history.maxGeneration);
          },
          markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function(e) {
            return (
              e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
              this.history.generation
            );
          },
          isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function() {
            return { done: $i(this.history.done), undone: $i(this.history.undone) };
          },
          setHistory: function(e) {
            var t = (this.history = new Ii(this.history.maxGeneration));
            (t.done = $i(e.done.slice(0), null, !0)), (t.undone = $i(e.undone.slice(0), null, !0));
          },
          setGutterMarker: ni(function(e, t, n) {
            return xo(this, e, 'gutter', function(e) {
              var r = e.gutterMarkers || (e.gutterMarkers = {});
              return (r[t] = n), !n && ne(r) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: ni(function(e) {
            var t = this;
            this.iter(function(n) {
              n.gutterMarkers &&
                n.gutterMarkers[e] &&
                xo(t, n, 'gutter', function() {
                  return (n.gutterMarkers[e] = null), ne(n.gutterMarkers) && (n.gutterMarkers = null), !0;
                });
            });
          }),
          lineInfo: function(e) {
            var t;
            if ('number' == typeof e) {
              if (!Je(this, e)) return null;
              if (((t = e), !(e = Ve(this, e)))) return null;
            } else if (null == (t = Ye(e))) return null;
            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets,
            };
          },
          addLineClass: ni(function(e, t, n) {
            return xo(this, e, 'gutter' == t ? 'gutter' : 'class', function(e) {
              var r =
                'text' == t ? 'textClass' : 'background' == t ? 'bgClass' : 'gutter' == t ? 'gutterClass' : 'wrapClass';
              if (e[r]) {
                if (S(n).test(e[r])) return !1;
                e[r] += ' ' + n;
              } else e[r] = n;
              return !0;
            });
          }),
          removeLineClass: ni(function(e, t, n) {
            return xo(this, e, 'gutter' == t ? 'gutter' : 'class', function(e) {
              var r =
                  'text' == t
                    ? 'textClass'
                    : 'background' == t
                    ? 'bgClass'
                    : 'gutter' == t
                    ? 'gutterClass'
                    : 'wrapClass',
                i = e[r];
              if (!i) return !1;
              if (null == n) e[r] = null;
              else {
                var o = i.match(S(n));
                if (!o) return !1;
                var a = o.index + o[0].length;
                e[r] = i.slice(0, o.index) + (o.index && a != i.length ? ' ' : '') + i.slice(a) || null;
              }
              return !0;
            });
          }),
          addLineWidget: ni(function(e, t, n) {
            return (function(e, t, n, r) {
              var i = new wo(e, n, r),
                o = e.cm;
              return (
                o && i.noHScroll && (o.display.alignWidgets = !0),
                xo(e, t, 'widget', function(t) {
                  var n = t.widgets || (t.widgets = []);
                  if (
                    (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i),
                    (i.line = t),
                    o && !jt(e, t))
                  ) {
                    var r = Ut(t) < e.scrollTop;
                    Ze(t, t.height + Cn(i)), r && Ar(o, i.height), (o.curOp.forceUpdate = !0);
                  }
                  return !0;
                }),
                o && cn(o, 'lineWidgetAdded', o, i, 'number' == typeof t ? t : Ye(t)),
                i
              );
            })(this, e, t, n);
          }),
          removeLineWidget: function(e) {
            e.clear();
          },
          markText: function(e, t, n) {
            return Mo(this, lt(this, e), lt(this, t), n, (n && n.type) || 'range');
          },
          setBookmark: function(e, t) {
            var n = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents,
            };
            return Mo(this, (e = lt(this, e)), e, n, 'bookmark');
          },
          findMarksAt: function(e) {
            var t = [],
              n = Ve(this, (e = lt(this, e)).line).markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r) {
                var i = n[r];
                (null == i.from || i.from <= e.ch) &&
                  (null == i.to || i.to >= e.ch) &&
                  t.push(i.marker.parent || i.marker);
              }
            return t;
          },
          findMarks: function(e, t, n) {
            (e = lt(this, e)), (t = lt(this, t));
            var r = [],
              i = e.line;
            return (
              this.iter(e.line, t.line + 1, function(o) {
                var a = o.markedSpans;
                if (a)
                  for (var s = 0; s < a.length; s++) {
                    var l = a[s];
                    (null != l.to && i == e.line && e.ch >= l.to) ||
                      (null == l.from && i != e.line) ||
                      (null != l.from && i == t.line && l.from >= t.ch) ||
                      (n && !n(l.marker)) ||
                      r.push(l.marker.parent || l.marker);
                  }
                ++i;
              }),
              r
            );
          },
          getAllMarks: function() {
            var e = [];
            return (
              this.iter(function(t) {
                var n = t.markedSpans;
                if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
              }),
              e
            );
          },
          posFromIndex: function(e) {
            var t,
              n = this.first,
              r = this.lineSeparator().length;
            return (
              this.iter(function(i) {
                var o = i.text.length + r;
                if (o > e) return (t = e), !0;
                (e -= o), ++n;
              }),
              lt(this, tt(n, t))
            );
          },
          indexFromPos: function(e) {
            var t = (e = lt(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return (
              this.iter(this.first, e.line, function(e) {
                t += e.text.length + n;
              }),
              t
            );
          },
          copy: function(e) {
            var t = new No(
              Ke(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction,
            );
            return (
              (t.scrollTop = this.scrollTop),
              (t.scrollLeft = this.scrollLeft),
              (t.sel = this.sel),
              (t.extend = !1),
              e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
              t
            );
          },
          linkedDoc: function(e) {
            e || (e = {});
            var t = this.first,
              n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
            var r = new No(Ke(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
            return (
              e.sharedHist && (r.history = this.history),
              (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }),
              (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
              (function(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    a = e.clipPos(i.to);
                  if (nt(o, a)) {
                    var s = Mo(e, o, a, r.primary, r.primary.type);
                    r.markers.push(s), (s.parent = r);
                  }
                }
              })(r, To(this)),
              r
            );
          },
          unlinkDoc: function(e) {
            if ((e instanceof Sa && (e = e.doc), this.linked))
              for (var t = 0; t < this.linked.length; ++t)
                if (this.linked[t].doc == e) {
                  this.linked.splice(t, 1), e.unlinkDoc(this), Oo(To(this));
                  break;
                }
            if (e.history == this.history) {
              var n = [e.id];
              Pi(
                e,
                function(e) {
                  return n.push(e.id);
                },
                !0,
              ),
                (e.history = new Ii(null)),
                (e.history.done = $i(this.history.done, n)),
                (e.history.undone = $i(this.history.undone, n));
            }
          },
          iterLinkedDocs: function(e) {
            Pi(this, e);
          },
          getMode: function() {
            return this.mode;
          },
          getEditor: function() {
            return this.cm;
          },
          splitLines: function(e) {
            return this.lineSep ? e.split(this.lineSep) : _e(e);
          },
          lineSeparator: function() {
            return this.lineSep || '\n';
          },
          setDirection: ni(function(e) {
            var t;
            'rtl' != e && (e = 'ltr'),
              e != this.direction &&
                ((this.direction = e),
                this.iter(function(e) {
                  return (e.order = null);
                }),
                this.cm &&
                  Jr((t = this.cm), function() {
                    zi(t), hr(t);
                  }));
          }),
        })),
          (No.prototype.eachLine = No.prototype.iter);
        var Ao = 0;
        function _o(e) {
          var t = this;
          if ((Eo(t), !ge(t, e) && !kn(t.display, e))) {
            be(e), a && (Ao = +new Date());
            var n = ur(t, e, !0),
              r = e.dataTransfer.files;
            if (n && !t.isReadOnly())
              if (r && r.length && window.FileReader && window.File)
                for (
                  var i = r.length,
                    o = Array(i),
                    s = 0,
                    l = function(e, r) {
                      if (!t.options.allowDropFileTypes || -1 != B(t.options.allowDropFileTypes, e.type)) {
                        var a = new FileReader();
                        (a.onload = ei(t, function() {
                          var e = a.result;
                          if ((/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ''), (o[r] = e), ++s == i)) {
                            var l = {
                              from: (n = lt(t.doc, n)),
                              to: n,
                              text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                              origin: 'paste',
                            };
                            lo(t.doc, l), Yi(t.doc, Mi(n, Li(l)));
                          }
                        })),
                          a.readAsText(e);
                      }
                    },
                    c = 0;
                  c < i;
                  ++c
                )
                  l(r[c], c);
              else {
                if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                  return (
                    t.state.draggingText(e),
                    void setTimeout(function() {
                      return t.display.input.focus();
                    }, 20)
                  );
                try {
                  var u = e.dataTransfer.getData('Text');
                  if (u) {
                    var d;
                    if (
                      (t.state.draggingText && !t.state.draggingText.copy && (d = t.listSelections()),
                      Ji(t.doc, Mi(n, n)),
                      d)
                    )
                      for (var h = 0; h < d.length; ++h) po(t.doc, '', d[h].anchor, d[h].head, 'drag');
                    t.replaceSelection(u, 'around', 'paste'), t.display.input.focus();
                  }
                } catch (e) {}
              }
          }
        }
        function Eo(e) {
          e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
        }
        function Po(e) {
          if (document.getElementsByClassName) {
            for (var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0; r < t.length; r++) {
              var i = t[r].CodeMirror;
              i && n.push(i);
            }
            n.length &&
              n[0].operation(function() {
                for (var t = 0; t < n.length; t++) e(n[t]);
              });
          }
        }
        var Fo = !1;
        function zo(e) {
          var t = e.display;
          (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
        }
        for (
          var Io = {
              3: 'Pause',
              8: 'Backspace',
              9: 'Tab',
              13: 'Enter',
              16: 'Shift',
              17: 'Ctrl',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Esc',
              32: 'Space',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'Left',
              38: 'Up',
              39: 'Right',
              40: 'Down',
              44: 'PrintScrn',
              45: 'Insert',
              46: 'Delete',
              59: ';',
              61: '=',
              91: 'Mod',
              92: 'Mod',
              93: 'Mod',
              106: '*',
              107: '=',
              109: '-',
              110: '.',
              111: '/',
              145: 'ScrollLock',
              173: '-',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: "'",
              63232: 'Up',
              63233: 'Down',
              63234: 'Left',
              63235: 'Right',
              63272: 'Delete',
              63273: 'Home',
              63275: 'End',
              63276: 'PageUp',
              63277: 'PageDown',
              63302: 'Insert',
            },
            Ho = 0;
          Ho < 10;
          Ho++
        )
          Io[Ho + 48] = Io[Ho + 96] = String(Ho);
        for (var Ro = 65; Ro <= 90; Ro++) Io[Ro] = String.fromCharCode(Ro);
        for (var Bo = 1; Bo <= 12; Bo++) Io[Bo + 111] = Io[Bo + 63235] = 'F' + Bo;
        var Wo = {};
        function jo(e) {
          var t,
            n,
            r,
            i,
            o = e.split(/-(?!$)/);
          e = o[o.length - 1];
          for (var a = 0; a < o.length - 1; a++) {
            var s = o[a];
            if (/^(cmd|meta|m)$/i.test(s)) i = !0;
            else if (/^a(lt)?$/i.test(s)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
            else {
              if (!/^s(hift)?$/i.test(s)) throw new Error('Unrecognized modifier name: ' + s);
              r = !0;
            }
          }
          return t && (e = 'Alt-' + e), n && (e = 'Ctrl-' + e), i && (e = 'Cmd-' + e), r && (e = 'Shift-' + e), e;
        }
        function qo(e) {
          var t = {};
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              var r = e[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
              if ('...' == r) {
                delete e[n];
                continue;
              }
              for (var i = Z(n.split(' '), jo), o = 0; o < i.length; o++) {
                var a = void 0,
                  s = void 0;
                o == i.length - 1 ? ((s = i.join(' ')), (a = r)) : ((s = i.slice(0, o + 1).join(' ')), (a = '...'));
                var l = t[s];
                if (l) {
                  if (l != a) throw new Error('Inconsistent bindings for ' + s);
                } else t[s] = a;
              }
              delete e[n];
            }
          for (var c in t) e[c] = t[c];
          return e;
        }
        function Uo(e, t, n, r) {
          var i = (t = Xo(t)).call ? t.call(e, r) : t[e];
          if (!1 === i) return 'nothing';
          if ('...' === i) return 'multi';
          if (null != i && n(i)) return 'handled';
          if (t.fallthrough) {
            if ('[object Array]' != Object.prototype.toString.call(t.fallthrough)) return Uo(e, t.fallthrough, n, r);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var a = Uo(e, t.fallthrough[o], n, r);
              if (a) return a;
            }
          }
        }
        function $o(e) {
          var t = 'string' == typeof e ? e : Io[e.keyCode];
          return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
        }
        function Go(e, t, n) {
          var r = e;
          return (
            t.altKey && 'Alt' != r && (e = 'Alt-' + e),
            (C ? t.metaKey : t.ctrlKey) && 'Ctrl' != r && (e = 'Ctrl-' + e),
            (C ? t.ctrlKey : t.metaKey) && 'Cmd' != r && (e = 'Cmd-' + e),
            !n && t.shiftKey && 'Shift' != r && (e = 'Shift-' + e),
            e
          );
        }
        function Vo(e, t) {
          if (d && 34 == e.keyCode && e.char) return !1;
          var n = Io[e.keyCode];
          return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Go(n, e, t));
        }
        function Xo(e) {
          return 'string' == typeof e ? Wo[e] : e;
        }
        function Ko(e, t) {
          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && nt(o.from, K(r).to) <= 0; ) {
              var a = r.pop();
              if (nt(a.from, o.from) < 0) {
                o.from = a.from;
                break;
              }
            }
            r.push(o);
          }
          Jr(e, function() {
            for (var t = r.length - 1; t >= 0; t--) po(e.doc, '', r[t].from, r[t].to, '+delete');
            _r(e);
          });
        }
        function Zo(e, t, n) {
          var r = oe(e.text, t + n, n);
          return r < 0 || r > e.text.length ? null : r;
        }
        function Yo(e, t, n) {
          var r = Zo(e, t.ch, n);
          return null == r ? null : new tt(t.line, r, n < 0 ? 'after' : 'before');
        }
        function Qo(e, t, n, r, i) {
          if (e) {
            var o = ue(n, t.doc.direction);
            if (o) {
              var a,
                s = i < 0 ? K(o) : o[0],
                l = i < 0 == (1 == s.level) ? 'after' : 'before';
              if (s.level > 0 || 'rtl' == t.doc.direction) {
                var c = En(t, n),
                  u = Pn(t, c, (a = i < 0 ? n.text.length - 1 : 0)).top;
                (a = ae(
                  function(e) {
                    return Pn(t, c, e).top == u;
                  },
                  i < 0 == (1 == s.level) ? s.from : s.to - 1,
                  a,
                )),
                  'before' == l && (a = Zo(n, a, 1));
              } else a = i < 0 ? s.to : s.from;
              return new tt(r, a, l);
            }
          }
          return new tt(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
        }
        (Wo.basic = {
          'Left': 'goCharLeft',
          'Right': 'goCharRight',
          'Up': 'goLineUp',
          'Down': 'goLineDown',
          'End': 'goLineEnd',
          'Home': 'goLineStartSmart',
          'PageUp': 'goPageUp',
          'PageDown': 'goPageDown',
          'Delete': 'delCharAfter',
          'Backspace': 'delCharBefore',
          'Shift-Backspace': 'delCharBefore',
          'Tab': 'defaultTab',
          'Shift-Tab': 'indentAuto',
          'Enter': 'newlineAndIndent',
          'Insert': 'toggleOverwrite',
          'Esc': 'singleSelection',
        }),
          (Wo.pcDefault = {
            'Ctrl-A': 'selectAll',
            'Ctrl-D': 'deleteLine',
            'Ctrl-Z': 'undo',
            'Shift-Ctrl-Z': 'redo',
            'Ctrl-Y': 'redo',
            'Ctrl-Home': 'goDocStart',
            'Ctrl-End': 'goDocEnd',
            'Ctrl-Up': 'goLineUp',
            'Ctrl-Down': 'goLineDown',
            'Ctrl-Left': 'goGroupLeft',
            'Ctrl-Right': 'goGroupRight',
            'Alt-Left': 'goLineStart',
            'Alt-Right': 'goLineEnd',
            'Ctrl-Backspace': 'delGroupBefore',
            'Ctrl-Delete': 'delGroupAfter',
            'Ctrl-S': 'save',
            'Ctrl-F': 'find',
            'Ctrl-G': 'findNext',
            'Shift-Ctrl-G': 'findPrev',
            'Shift-Ctrl-F': 'replace',
            'Shift-Ctrl-R': 'replaceAll',
            'Ctrl-[': 'indentLess',
            'Ctrl-]': 'indentMore',
            'Ctrl-U': 'undoSelection',
            'Shift-Ctrl-U': 'redoSelection',
            'Alt-U': 'redoSelection',
            'fallthrough': 'basic',
          }),
          (Wo.emacsy = {
            'Ctrl-F': 'goCharRight',
            'Ctrl-B': 'goCharLeft',
            'Ctrl-P': 'goLineUp',
            'Ctrl-N': 'goLineDown',
            'Alt-F': 'goWordRight',
            'Alt-B': 'goWordLeft',
            'Ctrl-A': 'goLineStart',
            'Ctrl-E': 'goLineEnd',
            'Ctrl-V': 'goPageDown',
            'Shift-Ctrl-V': 'goPageUp',
            'Ctrl-D': 'delCharAfter',
            'Ctrl-H': 'delCharBefore',
            'Alt-D': 'delWordAfter',
            'Alt-Backspace': 'delWordBefore',
            'Ctrl-K': 'killLine',
            'Ctrl-T': 'transposeChars',
            'Ctrl-O': 'openLine',
          }),
          (Wo.macDefault = {
            'Cmd-A': 'selectAll',
            'Cmd-D': 'deleteLine',
            'Cmd-Z': 'undo',
            'Shift-Cmd-Z': 'redo',
            'Cmd-Y': 'redo',
            'Cmd-Home': 'goDocStart',
            'Cmd-Up': 'goDocStart',
            'Cmd-End': 'goDocEnd',
            'Cmd-Down': 'goDocEnd',
            'Alt-Left': 'goGroupLeft',
            'Alt-Right': 'goGroupRight',
            'Cmd-Left': 'goLineLeft',
            'Cmd-Right': 'goLineRight',
            'Alt-Backspace': 'delGroupBefore',
            'Ctrl-Alt-Backspace': 'delGroupAfter',
            'Alt-Delete': 'delGroupAfter',
            'Cmd-S': 'save',
            'Cmd-F': 'find',
            'Cmd-G': 'findNext',
            'Shift-Cmd-G': 'findPrev',
            'Cmd-Alt-F': 'replace',
            'Shift-Cmd-Alt-F': 'replaceAll',
            'Cmd-[': 'indentLess',
            'Cmd-]': 'indentMore',
            'Cmd-Backspace': 'delWrappedLineLeft',
            'Cmd-Delete': 'delWrappedLineRight',
            'Cmd-U': 'undoSelection',
            'Shift-Cmd-U': 'redoSelection',
            'Ctrl-Up': 'goDocStart',
            'Ctrl-Down': 'goDocEnd',
            'fallthrough': ['basic', 'emacsy'],
          }),
          (Wo.default = x ? Wo.macDefault : Wo.pcDefault);
        var Jo = {
          selectAll: ao,
          singleSelection: function(e) {
            return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), q);
          },
          killLine: function(e) {
            return Ko(e, function(t) {
              if (t.empty()) {
                var n = Ve(e.doc, t.head.line).text.length;
                return t.head.ch == n && t.head.line < e.lastLine()
                  ? { from: t.head, to: tt(t.head.line + 1, 0) }
                  : { from: t.head, to: tt(t.head.line, n) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function(e) {
            return Ko(e, function(t) {
              return { from: tt(t.from().line, 0), to: lt(e.doc, tt(t.to().line + 1, 0)) };
            });
          },
          delLineLeft: function(e) {
            return Ko(e, function(e) {
              return { from: tt(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function(e) {
            return Ko(e, function(t) {
              var n = e.charCoords(t.head, 'div').top + 5;
              return { from: e.coordsChar({ left: 0, top: n }, 'div'), to: t.from() };
            });
          },
          delWrappedLineRight: function(e) {
            return Ko(e, function(t) {
              var n = e.charCoords(t.head, 'div').top + 5,
                r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div');
              return { from: t.from(), to: r };
            });
          },
          undo: function(e) {
            return e.undo();
          },
          redo: function(e) {
            return e.redo();
          },
          undoSelection: function(e) {
            return e.undoSelection();
          },
          redoSelection: function(e) {
            return e.redoSelection();
          },
          goDocStart: function(e) {
            return e.extendSelection(tt(e.firstLine(), 0));
          },
          goDocEnd: function(e) {
            return e.extendSelection(tt(e.lastLine()));
          },
          goLineStart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return ea(e, t.head.line);
              },
              { origin: '+move', bias: 1 },
            );
          },
          goLineStartSmart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return ta(e, t.head);
              },
              { origin: '+move', bias: 1 },
            );
          },
          goLineEnd: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return (function(e, t) {
                  var n = Ve(e.doc, t),
                    r = (function(e) {
                      for (var t; (t = zt(e)); ) e = t.find(1, !0).line;
                      return e;
                    })(n);
                  return r != n && (t = Ye(r)), Qo(!0, e, n, t, -1);
                })(e, t.head.line);
              },
              { origin: '+move', bias: -1 },
            );
          },
          goLineRight: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, 'div');
            }, $);
          },
          goLineLeft: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: 0, top: n }, 'div');
            }, $);
          },
          goLineLeftSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
              var n = e.cursorCoords(t.head, 'div').top + 5,
                r = e.coordsChar({ left: 0, top: n }, 'div');
              return r.ch < e.getLine(r.line).search(/\S/) ? ta(e, t.head) : r;
            }, $);
          },
          goLineUp: function(e) {
            return e.moveV(-1, 'line');
          },
          goLineDown: function(e) {
            return e.moveV(1, 'line');
          },
          goPageUp: function(e) {
            return e.moveV(-1, 'page');
          },
          goPageDown: function(e) {
            return e.moveV(1, 'page');
          },
          goCharLeft: function(e) {
            return e.moveH(-1, 'char');
          },
          goCharRight: function(e) {
            return e.moveH(1, 'char');
          },
          goColumnLeft: function(e) {
            return e.moveH(-1, 'column');
          },
          goColumnRight: function(e) {
            return e.moveH(1, 'column');
          },
          goWordLeft: function(e) {
            return e.moveH(-1, 'word');
          },
          goGroupRight: function(e) {
            return e.moveH(1, 'group');
          },
          goGroupLeft: function(e) {
            return e.moveH(-1, 'group');
          },
          goWordRight: function(e) {
            return e.moveH(1, 'word');
          },
          delCharBefore: function(e) {
            return e.deleteH(-1, 'char');
          },
          delCharAfter: function(e) {
            return e.deleteH(1, 'char');
          },
          delWordBefore: function(e) {
            return e.deleteH(-1, 'word');
          },
          delWordAfter: function(e) {
            return e.deleteH(1, 'word');
          },
          delGroupBefore: function(e) {
            return e.deleteH(-1, 'group');
          },
          delGroupAfter: function(e) {
            return e.deleteH(1, 'group');
          },
          indentAuto: function(e) {
            return e.indentSelection('smart');
          },
          indentMore: function(e) {
            return e.indentSelection('add');
          },
          indentLess: function(e) {
            return e.indentSelection('subtract');
          },
          insertTab: function(e) {
            return e.replaceSelection('\t');
          },
          insertSoftTab: function(e) {
            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
              var o = n[i].from(),
                a = H(e.getLine(o.line), o.ch, r);
              t.push(X(r - (a % r)));
            }
            e.replaceSelections(t);
          },
          defaultTab: function(e) {
            e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab');
          },
          transposeChars: function(e) {
            return Jr(e, function() {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                if (t[r].empty()) {
                  var i = t[r].head,
                    o = Ve(e.doc, i.line).text;
                  if (o)
                    if ((i.ch == o.length && (i = new tt(i.line, i.ch - 1)), i.ch > 0))
                      (i = new tt(i.line, i.ch + 1)),
                        e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), tt(i.line, i.ch - 2), i, '+transpose');
                    else if (i.line > e.doc.first) {
                      var a = Ve(e.doc, i.line - 1).text;
                      a &&
                        ((i = new tt(i.line, 1)),
                        e.replaceRange(
                          o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1),
                          tt(i.line - 1, a.length - 1),
                          i,
                          '+transpose',
                        ));
                    }
                  n.push(new ki(i, i));
                }
              e.setSelections(n);
            });
          },
          newlineAndIndent: function(e) {
            return Jr(e, function() {
              for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, '+input');
              t = e.listSelections();
              for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
              _r(e);
            });
          },
          openLine: function(e) {
            return e.replaceSelection('\n', 'start');
          },
          toggleOverwrite: function(e) {
            return e.toggleOverwrite();
          },
        };
        function ea(e, t) {
          var n = Ve(e.doc, t),
            r = Rt(n);
          return r != n && (t = Ye(r)), Qo(!0, e, r, t, 1);
        }
        function ta(e, t) {
          var n = ea(e, t.line),
            r = Ve(e.doc, n.line),
            i = ue(r, e.doc.direction);
          if (!i || 0 == i[0].level) {
            var o = Math.max(0, r.text.search(/\S/));
            return tt(n.line, t.line == n.line && t.ch <= o && t.ch ? 0 : o, n.sticky);
          }
          return n;
        }
        function na(e, t, n) {
          if ('string' == typeof t && !(t = Jo[t])) return !1;
          e.display.input.ensurePolled();
          var r = e.display.shift,
            i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != j);
          } finally {
            (e.display.shift = r), (e.state.suppressEdits = !1);
          }
          return i;
        }
        var ra = new R();
        function ia(e, t, n, r) {
          var i = e.state.keySeq;
          if (i) {
            if ($o(t)) return 'handled';
            if (
              (/\'$/.test(t)
                ? (e.state.keySeq = null)
                : ra.set(50, function() {
                    e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                  }),
              oa(e, i + ' ' + t, n, r))
            )
              return !0;
          }
          return oa(e, t, n, r);
        }
        function oa(e, t, n, r) {
          var i = (function(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
              var i = Uo(t, e.state.keyMaps[r], n, e);
              if (i) return i;
            }
            return (e.options.extraKeys && Uo(t, e.options.extraKeys, n, e)) || Uo(t, e.options.keyMap, n, e);
          })(e, t, r);
          return (
            'multi' == i && (e.state.keySeq = t),
            'handled' == i && cn(e, 'keyHandled', e, t, n),
            ('handled' != i && 'multi' != i) || (be(n), Cr(e)),
            !!i
          );
        }
        function aa(e, t) {
          var n = Vo(t, !0);
          return (
            !!n &&
            (t.shiftKey && !e.state.keySeq
              ? ia(e, 'Shift-' + n, t, function(t) {
                  return na(e, t, !0);
                }) ||
                ia(e, n, t, function(t) {
                  if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion) return na(e, t);
                })
              : ia(e, n, t, function(t) {
                  return na(e, t);
                }))
          );
        }
        var sa = null;
        function la(e) {
          var t = this;
          if (((t.curOp.focus = _()), !ge(t, e))) {
            a && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var r = aa(t, e);
            d &&
              ((sa = r ? n : null),
              !r && 88 == n && !Pe && (x ? e.metaKey : e.ctrlKey) && t.replaceSelection('', null, 'cut')),
              18 != n ||
                /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                (function(e) {
                  var t = e.display.lineDiv;
                  function n(e) {
                    (18 != e.keyCode && e.altKey) ||
                      (L(t, 'CodeMirror-crosshair'), pe(document, 'keyup', n), pe(document, 'mouseover', n));
                  }
                  E(t, 'CodeMirror-crosshair'), he(document, 'keyup', n), he(document, 'mouseover', n);
                })(t);
          }
        }
        function ca(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
        }
        function ua(e) {
          var t = this;
          if (!(kn(t.display, e) || ge(t, e) || (e.ctrlKey && !e.altKey) || (x && e.metaKey))) {
            var n = e.keyCode,
              r = e.charCode;
            if (d && n == sa) return (sa = null), void be(e);
            if (!d || (e.which && !(e.which < 10)) || !aa(t, e)) {
              var i = String.fromCharCode(null == r ? n : r);
              '\b' != i &&
                ((function(e, t, n) {
                  return ia(e, "'" + n + "'", t, function(t) {
                    return na(e, t, !0);
                  });
                })(t, e, i) ||
                  t.display.input.onKeyPress(e));
            }
          }
        }
        var da,
          ha,
          fa = function(e, t, n) {
            (this.time = e), (this.pos = t), (this.button = n);
          };
        function pa(e) {
          var t = this,
            n = t.display;
          if (!(ge(t, e) || (n.activeTouch && n.input.supportsTouch())))
            if ((n.input.ensurePolled(), (n.shift = e.shiftKey), kn(n, e)))
              l ||
                ((n.scroller.draggable = !1),
                setTimeout(function() {
                  return (n.scroller.draggable = !0);
                }, 100));
            else if (!va(t, e)) {
              var r = ur(t, e),
                i = Me(e),
                o = r
                  ? (function(e, t) {
                      var n = +new Date();
                      return ha && ha.compare(n, e, t)
                        ? ((da = ha = null), 'triple')
                        : da && da.compare(n, e, t)
                        ? ((ha = new fa(n, e, t)), (da = null), 'double')
                        : ((da = new fa(n, e, t)), (ha = null), 'single');
                    })(r, i)
                  : 'single';
              window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                (r &&
                  (function(e, t, n, r, i) {
                    var o = 'Click';
                    return (
                      'double' == r ? (o = 'Double' + o) : 'triple' == r && (o = 'Triple' + o),
                      ia(e, Go((o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o), i), i, function(t) {
                        if (('string' == typeof t && (t = Jo[t]), !t)) return !1;
                        var r = !1;
                        try {
                          e.isReadOnly() && (e.state.suppressEdits = !0), (r = t(e, n) != j);
                        } finally {
                          e.state.suppressEdits = !1;
                        }
                        return r;
                      })
                    );
                  })(t, i, r, o, e)) ||
                  (1 == i
                    ? r
                      ? (function(e, t, n, r) {
                          a ? setTimeout(z(kr, e), 0) : (e.curOp.focus = _());
                          var i,
                            o = (function(e, t, n) {
                              var r = e.getOption('configureMouse'),
                                i = r ? r(e, t, n) : {};
                              return (
                                null == i.unit &&
                                  (i.unit = (y
                                  ? n.shiftKey && n.metaKey
                                  : n.altKey)
                                    ? 'rectangle'
                                    : 'single' == t
                                    ? 'char'
                                    : 'double' == t
                                    ? 'word'
                                    : 'line'),
                                (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
                                null == i.addNew && (i.addNew = x ? n.metaKey : n.ctrlKey),
                                null == i.moveOnDrag && (i.moveOnDrag = !(x ? n.altKey : n.ctrlKey)),
                                i
                              );
                            })(e, n, r),
                            c = e.doc.sel;
                          e.options.dragDrop &&
                          Oe &&
                          !e.isReadOnly() &&
                          'single' == n &&
                          (i = c.contains(t)) > -1 &&
                          (nt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                          (nt(i.to(), t) > 0 || t.xRel < 0)
                            ? (function(e, t, n, r) {
                                var i = e.display,
                                  o = !1,
                                  c = ei(e, function(t) {
                                    l && (i.scroller.draggable = !1),
                                      (e.state.draggingText = !1),
                                      pe(i.wrapper.ownerDocument, 'mouseup', c),
                                      pe(i.wrapper.ownerDocument, 'mousemove', u),
                                      pe(i.scroller, 'dragstart', d),
                                      pe(i.scroller, 'drop', c),
                                      o ||
                                        (be(t),
                                        r.addNew || Vi(e.doc, n, null, null, r.extend),
                                        l || (a && 9 == s)
                                          ? setTimeout(function() {
                                              i.wrapper.ownerDocument.body.focus(), i.input.focus();
                                            }, 20)
                                          : i.input.focus());
                                  }),
                                  u = function(e) {
                                    o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                                  },
                                  d = function() {
                                    return (o = !0);
                                  };
                                l && (i.scroller.draggable = !0),
                                  (e.state.draggingText = c),
                                  (c.copy = !r.moveOnDrag),
                                  i.scroller.dragDrop && i.scroller.dragDrop(),
                                  he(i.wrapper.ownerDocument, 'mouseup', c),
                                  he(i.wrapper.ownerDocument, 'mousemove', u),
                                  he(i.scroller, 'dragstart', d),
                                  he(i.scroller, 'drop', c),
                                  Sr(e),
                                  setTimeout(function() {
                                    return i.input.focus();
                                  }, 20);
                              })(e, r, t, o)
                            : (function(e, t, n, r) {
                                var i = e.display,
                                  o = e.doc;
                                be(t);
                                var a,
                                  s,
                                  l = o.sel,
                                  c = l.ranges;
                                if (
                                  (r.addNew && !r.extend
                                    ? ((s = o.sel.contains(n)), (a = s > -1 ? c[s] : new ki(n, n)))
                                    : ((a = o.sel.primary()), (s = o.sel.primIndex)),
                                  'rectangle' == r.unit)
                                )
                                  r.addNew || (a = new ki(n, n)), (n = ur(e, t, !0, !0)), (s = -1);
                                else {
                                  var u = ma(e, n, r.unit);
                                  a = r.extend ? Gi(a, u.anchor, u.head, r.extend) : u;
                                }
                                r.addNew
                                  ? -1 == s
                                    ? ((s = c.length), Qi(o, Si(e, c.concat([a]), s), { scroll: !1, origin: '*mouse' }))
                                    : c.length > 1 && c[s].empty() && 'char' == r.unit && !r.extend
                                    ? (Qi(o, Si(e, c.slice(0, s).concat(c.slice(s + 1)), 0), {
                                        scroll: !1,
                                        origin: '*mouse',
                                      }),
                                      (l = o.sel))
                                    : Ki(o, s, a, U)
                                  : ((s = 0), Qi(o, new Ci([a], 0), U), (l = o.sel));
                                var d = n,
                                  h = i.wrapper.getBoundingClientRect(),
                                  f = 0;
                                function p(t) {
                                  (e.state.selectingText = !1),
                                    (f = 1 / 0),
                                    t && (be(t), i.input.focus()),
                                    pe(i.wrapper.ownerDocument, 'mousemove', m),
                                    pe(i.wrapper.ownerDocument, 'mouseup', g),
                                    (o.history.lastSelOrigin = null);
                                }
                                var m = ei(e, function(t) {
                                    0 !== t.buttons && Me(t)
                                      ? (function t(c) {
                                          var u = ++f,
                                            p = ur(e, c, !0, 'rectangle' == r.unit);
                                          if (p)
                                            if (0 != nt(p, d)) {
                                              (e.curOp.focus = _()),
                                                (function(t) {
                                                  if (0 != nt(d, t))
                                                    if (((d = t), 'rectangle' == r.unit)) {
                                                      for (
                                                        var i = [],
                                                          c = e.options.tabSize,
                                                          u = H(Ve(o, n.line).text, n.ch, c),
                                                          h = H(Ve(o, t.line).text, t.ch, c),
                                                          f = Math.min(u, h),
                                                          p = Math.max(u, h),
                                                          m = Math.min(n.line, t.line),
                                                          g = Math.min(e.lastLine(), Math.max(n.line, t.line));
                                                        m <= g;
                                                        m++
                                                      ) {
                                                        var v = Ve(o, m).text,
                                                          x = G(v, f, c);
                                                        f == p
                                                          ? i.push(new ki(tt(m, x), tt(m, x)))
                                                          : v.length > x && i.push(new ki(tt(m, x), tt(m, G(v, p, c))));
                                                      }
                                                      i.length || i.push(new ki(n, n)),
                                                        Qi(o, Si(e, l.ranges.slice(0, s).concat(i), s), {
                                                          origin: '*mouse',
                                                          scroll: !1,
                                                        }),
                                                        e.scrollIntoView(t);
                                                    } else {
                                                      var y,
                                                        b = a,
                                                        w = ma(e, t, r.unit),
                                                        C = b.anchor;
                                                      nt(w.anchor, C) > 0
                                                        ? ((y = w.head), (C = at(b.from(), w.anchor)))
                                                        : ((y = w.anchor), (C = ot(b.to(), w.head)));
                                                      var k = l.ranges.slice(0);
                                                      (k[s] = (function(e, t) {
                                                        var n = t.anchor,
                                                          r = t.head,
                                                          i = Ve(e.doc, n.line);
                                                        if (0 == nt(n, r) && n.sticky == r.sticky) return t;
                                                        var o = ue(i);
                                                        if (!o) return t;
                                                        var a = le(o, n.ch, n.sticky),
                                                          s = o[a];
                                                        if (s.from != n.ch && s.to != n.ch) return t;
                                                        var l,
                                                          c = a + ((s.from == n.ch) == (1 != s.level) ? 0 : 1);
                                                        if (0 == c || c == o.length) return t;
                                                        if (r.line != n.line)
                                                          l =
                                                            (r.line - n.line) * ('ltr' == e.doc.direction ? 1 : -1) > 0;
                                                        else {
                                                          var u = le(o, r.ch, r.sticky),
                                                            d = u - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                                                          l = u == c - 1 || u == c ? d < 0 : d > 0;
                                                        }
                                                        var h = o[c + (l ? -1 : 0)],
                                                          f = l == (1 == h.level),
                                                          p = f ? h.from : h.to,
                                                          m = f ? 'after' : 'before';
                                                        return n.ch == p && n.sticky == m
                                                          ? t
                                                          : new ki(new tt(n.line, p, m), r);
                                                      })(e, new ki(lt(o, C), y))),
                                                        Qi(o, Si(e, k, s), U);
                                                    }
                                                })(p);
                                              var m = Dr(i, o);
                                              (p.line >= m.to || p.line < m.from) &&
                                                setTimeout(
                                                  ei(e, function() {
                                                    f == u && t(c);
                                                  }),
                                                  150,
                                                );
                                            } else {
                                              var g = c.clientY < h.top ? -20 : c.clientY > h.bottom ? 20 : 0;
                                              g &&
                                                setTimeout(
                                                  ei(e, function() {
                                                    f == u && ((i.scroller.scrollTop += g), t(c));
                                                  }),
                                                  50,
                                                );
                                            }
                                        })(t)
                                      : p(t);
                                  }),
                                  g = ei(e, p);
                                (e.state.selectingText = g),
                                  he(i.wrapper.ownerDocument, 'mousemove', m),
                                  he(i.wrapper.ownerDocument, 'mouseup', g);
                              })(e, r, t, o);
                        })(t, r, o, e)
                      : Se(e) == n.scroller && be(e)
                    : 2 == i
                    ? (r && Vi(t.doc, r),
                      setTimeout(function() {
                        return n.input.focus();
                      }, 20))
                    : 3 == i && (k ? t.display.input.onContextMenu(e) : Sr(t)));
            }
        }
        function ma(e, t, n) {
          if ('char' == n) return new ki(t, t);
          if ('word' == n) return e.findWordAt(t);
          if ('line' == n) return new ki(tt(t.line, 0), lt(e.doc, tt(t.line + 1, 0)));
          var r = n(e, t);
          return new ki(r.from, r.to);
        }
        function ga(e, t, n, r) {
          var i, o;
          if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
          else
            try {
              (i = t.clientX), (o = t.clientY);
            } catch (t) {
              return !1;
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
          r && be(t);
          var a = e.display,
            s = a.lineDiv.getBoundingClientRect();
          if (o > s.bottom || !xe(e, n)) return Ce(t);
          o -= s.top - a.viewOffset;
          for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
            var c = a.gutters.childNodes[l];
            if (c && c.getBoundingClientRect().right >= i)
              return me(e, n, e, Qe(e.doc, o), e.display.gutterSpecs[l].className, t), Ce(t);
          }
        }
        function va(e, t) {
          return ga(e, t, 'gutterClick', !0);
        }
        function xa(e) {
          (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') + e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
            Wn(e);
        }
        fa.prototype.compare = function(e, t, n) {
          return this.time + 400 > e && 0 == nt(t, this.pos) && n == this.button;
        };
        var ya = {
            toString: function() {
              return 'CodeMirror.Init';
            },
          },
          ba = {},
          wa = {};
        function Ca(e, t, n) {
          if (!t != !(n && n != ya)) {
            var r = e.display.dragFunctions,
              i = t ? he : pe;
            i(e.display.scroller, 'dragstart', r.start),
              i(e.display.scroller, 'dragenter', r.enter),
              i(e.display.scroller, 'dragover', r.over),
              i(e.display.scroller, 'dragleave', r.leave),
              i(e.display.scroller, 'drop', r.drop);
          }
        }
        function ka(e) {
          e.options.lineWrapping
            ? (E(e.display.wrapper, 'CodeMirror-wrap'),
              (e.display.sizer.style.minWidth = ''),
              (e.display.sizerWidth = null))
            : (L(e.display.wrapper, 'CodeMirror-wrap'), Gt(e)),
            cr(e),
            hr(e),
            Wn(e),
            setTimeout(function() {
              return jr(e);
            }, 100);
        }
        function Sa(e, t) {
          var n = this;
          if (!(this instanceof Sa)) return new Sa(e, t);
          (this.options = t = t ? I(t) : {}), I(ba, t, !1);
          var r = t.value;
          'string' == typeof r
            ? (r = new No(r, t.mode, null, t.lineSeparator, t.direction))
            : t.mode && (r.modeOption = t.mode),
            (this.doc = r);
          var i = new Sa.inputStyles[t.inputStyle](this),
            o = (this.display = new gi(e, r, i, t));
          for (var c in ((o.wrapper.CodeMirror = this),
          xa(this),
          t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
          $r(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new R(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !v && o.input.focus(),
          a &&
            s < 11 &&
            setTimeout(function() {
              return n.display.input.reset(!0);
            }, 20),
          (function(e) {
            var t = e.display;
            he(t.scroller, 'mousedown', ei(e, pa)),
              he(
                t.scroller,
                'dblclick',
                a && s < 11
                  ? ei(e, function(t) {
                      if (!ge(e, t)) {
                        var n = ur(e, t);
                        if (n && !va(e, t) && !kn(e.display, t)) {
                          be(t);
                          var r = e.findWordAt(n);
                          Vi(e.doc, r.anchor, r.head);
                        }
                      }
                    })
                  : function(t) {
                      return ge(e, t) || be(t);
                    },
              ),
              he(t.scroller, 'contextmenu', function(t) {
                return (function(e, t) {
                  kn(e.display, t) ||
                    (function(e, t) {
                      return !!xe(e, 'gutterContextMenu') && ga(e, t, 'gutterContextMenu', !1);
                    })(e, t) ||
                    ge(e, t, 'contextmenu') ||
                    k ||
                    e.display.input.onContextMenu(t);
                })(e, t);
              });
            var n,
              r = { end: 0 };
            function i() {
              t.activeTouch &&
                ((n = setTimeout(function() {
                  return (t.activeTouch = null);
                }, 1e3)),
                ((r = t.activeTouch).end = +new Date()));
            }
            function o(e, t) {
              if (null == t.left) return !0;
              var n = t.left - e.left,
                r = t.top - e.top;
              return n * n + r * r > 400;
            }
            he(t.scroller, 'touchstart', function(i) {
              if (
                !ge(e, i) &&
                !(function(e) {
                  if (1 != e.touches.length) return !1;
                  var t = e.touches[0];
                  return t.radiusX <= 1 && t.radiusY <= 1;
                })(i) &&
                !va(e, i)
              ) {
                t.input.ensurePolled(), clearTimeout(n);
                var o = +new Date();
                (t.activeTouch = { start: o, moved: !1, prev: o - r.end <= 300 ? r : null }),
                  1 == i.touches.length &&
                    ((t.activeTouch.left = i.touches[0].pageX), (t.activeTouch.top = i.touches[0].pageY));
              }
            }),
              he(t.scroller, 'touchmove', function() {
                t.activeTouch && (t.activeTouch.moved = !0);
              }),
              he(t.scroller, 'touchend', function(n) {
                var r = t.activeTouch;
                if (r && !kn(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
                  var a,
                    s = e.coordsChar(t.activeTouch, 'page');
                  (a =
                    !r.prev || o(r, r.prev)
                      ? new ki(s, s)
                      : !r.prev.prev || o(r, r.prev.prev)
                      ? e.findWordAt(s)
                      : new ki(tt(s.line, 0), lt(e.doc, tt(s.line + 1, 0)))),
                    e.setSelection(a.anchor, a.head),
                    e.focus(),
                    be(n);
                }
                i();
              }),
              he(t.scroller, 'touchcancel', i),
              he(t.scroller, 'scroll', function() {
                t.scroller.clientHeight &&
                  (zr(e, t.scroller.scrollTop), Hr(e, t.scroller.scrollLeft, !0), me(e, 'scroll', e));
              }),
              he(t.scroller, 'mousewheel', function(t) {
                return wi(e, t);
              }),
              he(t.scroller, 'DOMMouseScroll', function(t) {
                return wi(e, t);
              }),
              he(t.wrapper, 'scroll', function() {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
              }),
              (t.dragFunctions = {
                enter: function(t) {
                  ge(e, t) || ke(t);
                },
                over: function(t) {
                  ge(e, t) ||
                    ((function(e, t) {
                      var n = ur(e, t);
                      if (n) {
                        var r = document.createDocumentFragment();
                        yr(e, n, r),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = D('div', null, 'CodeMirror-cursors CodeMirror-dragcursors')),
                            e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                          O(e.display.dragCursor, r);
                      }
                    })(e, t),
                    ke(t));
                },
                start: function(t) {
                  return (function(e, t) {
                    if (a && (!e.state.draggingText || +new Date() - Ao < 100)) ke(t);
                    else if (
                      !ge(e, t) &&
                      !kn(e.display, t) &&
                      (t.dataTransfer.setData('Text', e.getSelection()),
                      (t.dataTransfer.effectAllowed = 'copyMove'),
                      t.dataTransfer.setDragImage && !h)
                    ) {
                      var n = D('img', null, null, 'position: fixed; left: 0; top: 0;');
                      (n.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                        d && ((n.width = n.height = 1), e.display.wrapper.appendChild(n), (n._top = n.offsetTop)),
                        t.dataTransfer.setDragImage(n, 0, 0),
                        d && n.parentNode.removeChild(n);
                    }
                  })(e, t);
                },
                drop: ei(e, _o),
                leave: function(t) {
                  ge(e, t) || Eo(e);
                },
              });
            var l = t.input.getField();
            he(l, 'keyup', function(t) {
              return ca.call(e, t);
            }),
              he(l, 'keydown', ei(e, la)),
              he(l, 'keypress', ei(e, ua)),
              he(l, 'focus', function(t) {
                return Mr(e, t);
              }),
              he(l, 'blur', function(t) {
                return Lr(e, t);
              });
          })(this),
          (function() {
            var e;
            Fo ||
              (he(window, 'resize', function() {
                null == e &&
                  (e = setTimeout(function() {
                    (e = null), Po(zo);
                  }, 100));
              }),
              he(window, 'blur', function() {
                return Po(Lr);
              }),
              (Fo = !0));
          })(),
          Vr(this),
          (this.curOp.forceUpdate = !0),
          Fi(this, r),
          (t.autofocus && !v) || this.hasFocus() ? setTimeout(z(Mr, this), 20) : Lr(this),
          wa))
            wa.hasOwnProperty(c) && wa[c](n, t[c], ya);
          hi(this), t.finishInit && t.finishInit(this);
          for (var u = 0; u < Ma.length; ++u) Ma[u](n);
          Xr(this),
            l &&
              t.lineWrapping &&
              'optimizelegibility' == getComputedStyle(o.lineDiv).textRendering &&
              (o.lineDiv.style.textRendering = 'auto');
        }
        (Sa.defaults = ba), (Sa.optionHandlers = wa);
        var Ma = [];
        function La(e, t, n, r) {
          var i,
            o = e.doc;
          null == n && (n = 'add'), 'smart' == n && (o.mode.indent ? (i = pt(e, t).state) : (n = 'prev'));
          var a = e.options.tabSize,
            s = Ve(o, t),
            l = H(s.text, null, a);
          s.stateAfter && (s.stateAfter = null);
          var c,
            u = s.text.match(/^\s*/)[0];
          if (r || /\S/.test(s.text)) {
            if ('smart' == n && ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == j || c > 150)) {
              if (!r) return;
              n = 'prev';
            }
          } else (c = 0), (n = 'not');
          'prev' == n
            ? (c = t > o.first ? H(Ve(o, t - 1).text, null, a) : 0)
            : 'add' == n
            ? (c = l + e.options.indentUnit)
            : 'subtract' == n
            ? (c = l - e.options.indentUnit)
            : 'number' == typeof n && (c = l + n),
            (c = Math.max(0, c));
          var d = '',
            h = 0;
          if (e.options.indentWithTabs) for (var f = Math.floor(c / a); f; --f) (h += a), (d += '\t');
          if ((h < c && (d += X(c - h)), d != u))
            return po(o, d, tt(t, 0), tt(t, u.length), '+input'), (s.stateAfter = null), !0;
          for (var p = 0; p < o.sel.ranges.length; p++) {
            var m = o.sel.ranges[p];
            if (m.head.line == t && m.head.ch < u.length) {
              var g = tt(t, u.length);
              Ki(o, p, new ki(g, g));
              break;
            }
          }
        }
        Sa.defineInitHook = function(e) {
          return Ma.push(e);
        };
        var Ta = null;
        function Oa(e) {
          Ta = e;
        }
        function Da(e, t, n, r, i) {
          var o = e.doc;
          (e.display.shift = !1), r || (r = o.sel);
          var a = +new Date() - 200,
            s = 'paste' == i || e.state.pasteIncoming > a,
            l = _e(t),
            c = null;
          if (s && r.ranges.length > 1)
            if (Ta && Ta.text.join('\n') == t) {
              if (r.ranges.length % Ta.text.length == 0) {
                c = [];
                for (var u = 0; u < Ta.text.length; u++) c.push(o.splitLines(Ta.text[u]));
              }
            } else
              l.length == r.ranges.length &&
                e.options.pasteLinesPerSelection &&
                (c = Z(l, function(e) {
                  return [e];
                }));
          for (var d = e.curOp.updateInput, h = r.ranges.length - 1; h >= 0; h--) {
            var f = r.ranges[h],
              p = f.from(),
              m = f.to();
            f.empty() &&
              (n && n > 0
                ? (p = tt(p.line, p.ch - n))
                : e.state.overwrite && !s
                ? (m = tt(m.line, Math.min(Ve(o, m.line).text.length, m.ch + K(l).length)))
                : s && Ta && Ta.lineWise && Ta.text.join('\n') == t && (p = m = tt(p.line, 0)));
            var g = {
              from: p,
              to: m,
              text: c ? c[h % c.length] : l,
              origin: i || (s ? 'paste' : e.state.cutIncoming > a ? 'cut' : '+input'),
            };
            lo(e.doc, g), cn(e, 'inputRead', e, g);
          }
          t && !s && Aa(e, t),
            _r(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function Na(e, t) {
          var n = e.clipboardData && e.clipboardData.getData('Text');
          if (n)
            return (
              e.preventDefault(),
              t.isReadOnly() ||
                t.options.disableInput ||
                Jr(t, function() {
                  return Da(t, n, 0, null, 'paste');
                }),
              !0
            );
        }
        function Aa(e, t) {
          if (e.options.electricChars && e.options.smartIndent)
            for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
              var i = n.ranges[r];
              if (!(i.head.ch > 100 || (r && n.ranges[r - 1].head.line == i.head.line))) {
                var o = e.getModeAt(i.head),
                  a = !1;
                if (o.electricChars) {
                  for (var s = 0; s < o.electricChars.length; s++)
                    if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                      a = La(e, i.head.line, 'smart');
                      break;
                    }
                } else
                  o.electricInput &&
                    o.electricInput.test(Ve(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                    (a = La(e, i.head.line, 'smart'));
                a && cn(e, 'electricInput', e, i.head.line);
              }
            }
        }
        function _a(e) {
          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line,
              o = { anchor: tt(i, 0), head: tt(i + 1, 0) };
            n.push(o), t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: n };
        }
        function Ea(e, t, n, r) {
          e.setAttribute('autocorrect', n ? '' : 'off'),
            e.setAttribute('autocapitalize', r ? '' : 'off'),
            e.setAttribute('spellcheck', !!t);
        }
        function Pa() {
          var e = D(
              'textarea',
              null,
              null,
              'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none',
            ),
            t = D('div', [e], null, 'overflow: hidden; position: relative; width: 3px; height: 0px;');
          return (
            l ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
            m && (e.style.border = '1px solid black'),
            Ea(e),
            t
          );
        }
        function Fa(e, t, n, r, i) {
          var o = t,
            a = n,
            s = Ve(e, t.line);
          function l(r) {
            var o, a;
            if (
              null ==
              (o = i
                ? (function(e, t, n, r) {
                    var i = ue(t, e.doc.direction);
                    if (!i) return Yo(t, n, r);
                    n.ch >= t.text.length
                      ? ((n.ch = t.text.length), (n.sticky = 'before'))
                      : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
                    var o = le(i, n.ch, n.sticky),
                      a = i[o];
                    if ('ltr' == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch))
                      return Yo(t, n, r);
                    var s,
                      l = function(e, n) {
                        return Zo(t, e instanceof tt ? e.ch : e, n);
                      },
                      c = function(n) {
                        return e.options.lineWrapping
                          ? ((s = s || En(e, t)), Jn(e, t, s, n))
                          : { begin: 0, end: t.text.length };
                      },
                      u = c('before' == n.sticky ? l(n, -1) : n.ch);
                    if ('rtl' == e.doc.direction || 1 == a.level) {
                      var d = (1 == a.level) == r < 0,
                        h = l(n, d ? 1 : -1);
                      if (null != h && (d ? h <= a.to && h <= u.end : h >= a.from && h >= u.begin))
                        return new tt(n.line, h, d ? 'before' : 'after');
                    }
                    var f = function(e, t, r) {
                        for (
                          var o = function(e, t) {
                            return t ? new tt(n.line, l(e, 1), 'before') : new tt(n.line, e, 'after');
                          };
                          e >= 0 && e < i.length;
                          e += t
                        ) {
                          var a = i[e],
                            s = t > 0 == (1 != a.level),
                            c = s ? r.begin : l(r.end, -1);
                          if (a.from <= c && c < a.to) return o(c, s);
                          if (((c = s ? a.from : l(a.to, -1)), r.begin <= c && c < r.end)) return o(c, s);
                        }
                      },
                      p = f(o + r, r, u);
                    if (p) return p;
                    var m = r > 0 ? u.end : l(u.begin, -1);
                    return null == m || (r > 0 && m == t.text.length) || !(p = f(r > 0 ? 0 : i.length - 1, r, c(m)))
                      ? null
                      : p;
                  })(e.cm, s, t, n)
                : Yo(s, t, n))
            ) {
              if (
                r ||
                (a = t.line + n) < e.first ||
                a >= e.first + e.size ||
                ((t = new tt(a, t.ch, t.sticky)), !(s = Ve(e, a)))
              )
                return !1;
              t = Qo(i, e.cm, s, t.line, n);
            } else t = o;
            return !0;
          }
          if ('char' == r) l();
          else if ('column' == r) l(!0);
          else if ('word' == r || 'group' == r)
            for (
              var c = null, u = 'group' == r, d = e.cm && e.cm.getHelper(t, 'wordChars'), h = !0;
              !(n < 0) || l(!h);
              h = !1
            ) {
              var f = s.text.charAt(t.ch) || '\n',
                p = te(f, d) ? 'w' : u && '\n' == f ? 'n' : !u || /\s/.test(f) ? null : 'p';
              if ((!u || h || p || (p = 's'), c && c != p)) {
                n < 0 && ((n = 1), l(), (t.sticky = 'after'));
                break;
              }
              if ((p && (c = p), n > 0 && !l(!h))) break;
            }
          var m = io(e, t, o, a, !0);
          return rt(o, m) && (m.hitSide = !0), m;
        }
        function za(e, t, n, r) {
          var i,
            o,
            a = e.doc,
            s = t.left;
          if ('page' == r) {
            var l = Math.min(
                e.display.wrapper.clientHeight,
                window.innerHeight || document.documentElement.clientHeight,
              ),
              c = Math.max(l - 0.5 * ir(e.display), 3);
            i = (n > 0 ? t.bottom : t.top) + n * c;
          } else 'line' == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
          for (; (o = Yn(e, s, i)).outside; ) {
            if (n < 0 ? i <= 0 : i >= a.height) {
              o.hitSide = !0;
              break;
            }
            i += 5 * n;
          }
          return o;
        }
        var Ia = function(e) {
          (this.cm = e),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new R()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        function Ha(e, t) {
          var n = _n(e, t.line);
          if (!n || n.hidden) return null;
          var r = Ve(e.doc, t.line),
            i = Nn(n, r, t.line),
            o = ue(r, e.doc.direction),
            a = 'left';
          o && (a = le(o, t.ch) % 2 ? 'right' : 'left');
          var s = In(i.map, t.ch, a);
          return (s.offset = 'right' == s.collapse ? s.end : s.start), s;
        }
        function Ra(e, t) {
          return t && (e.bad = !0), e;
        }
        function Ba(e, t, n) {
          var r;
          if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n])) return Ra(e.clipPos(tt(e.display.viewTo - 1)), !0);
            (t = null), (n = 0);
          } else
            for (r = t; ; r = r.parentNode) {
              if (!r || r == e.display.lineDiv) return null;
              if (r.parentNode && r.parentNode == e.display.lineDiv) break;
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r) return Wa(o, t, n);
          }
        }
        function Wa(e, t, n) {
          var r = e.text.firstChild,
            i = !1;
          if (!t || !A(r, t)) return Ra(tt(Ye(e.line), 0), !0);
          if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
            var o = e.rest ? K(e.rest) : e.line;
            return Ra(tt(Ye(o), o.text.length), i);
          }
          var a = 3 == t.nodeType ? t : null,
            s = t;
          for (
            a ||
            1 != t.childNodes.length ||
            3 != t.firstChild.nodeType ||
            ((a = t.firstChild), n && (n = a.nodeValue.length));
            s.parentNode != r;

          )
            s = s.parentNode;
          var l = e.measure,
            c = l.maps;
          function u(t, n, r) {
            for (var i = -1; i < (c ? c.length : 0); i++)
              for (var o = i < 0 ? l.map : c[i], a = 0; a < o.length; a += 3) {
                var s = o[a + 2];
                if (s == t || s == n) {
                  var u = Ye(i < 0 ? e.line : e.rest[i]),
                    d = o[a] + r;
                  return (r < 0 || s != t) && (d = o[a + (r ? 1 : 0)]), tt(u, d);
                }
              }
          }
          var d = u(a, s, n);
          if (d) return Ra(d, i);
          for (var h = s.nextSibling, f = a ? a.nodeValue.length - n : 0; h; h = h.nextSibling) {
            if ((d = u(h, h.firstChild, 0))) return Ra(tt(d.line, d.ch - f), i);
            f += h.textContent.length;
          }
          for (var p = s.previousSibling, m = n; p; p = p.previousSibling) {
            if ((d = u(p, p.firstChild, -1))) return Ra(tt(d.line, d.ch + m), i);
            m += p.textContent.length;
          }
        }
        (Ia.prototype.init = function(e) {
          var t = this,
            n = this,
            r = n.cm,
            i = (n.div = e.lineDiv);
          function o(e) {
            if (!ge(r, e)) {
              if (r.somethingSelected())
                Oa({ lineWise: !1, text: r.getSelections() }), 'cut' == e.type && r.replaceSelection('', null, 'cut');
              else {
                if (!r.options.lineWiseCopyCut) return;
                var t = _a(r);
                Oa({ lineWise: !0, text: t.text }),
                  'cut' == e.type &&
                    r.operation(function() {
                      r.setSelections(t.ranges, 0, q), r.replaceSelection('', null, 'cut');
                    });
              }
              if (e.clipboardData) {
                e.clipboardData.clearData();
                var o = Ta.text.join('\n');
                if ((e.clipboardData.setData('Text', o), e.clipboardData.getData('Text') == o))
                  return void e.preventDefault();
              }
              var a = Pa(),
                s = a.firstChild;
              r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), (s.value = Ta.text.join('\n'));
              var l = document.activeElement;
              F(s),
                setTimeout(function() {
                  r.display.lineSpace.removeChild(a), l.focus(), l == i && n.showPrimarySelection();
                }, 50);
            }
          }
          Ea(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize),
            he(i, 'paste', function(e) {
              ge(r, e) ||
                Na(e, r) ||
                (s <= 11 &&
                  setTimeout(
                    ei(r, function() {
                      return t.updateFromDOM();
                    }),
                    20,
                  ));
            }),
            he(i, 'compositionstart', function(e) {
              t.composing = { data: e.data, done: !1 };
            }),
            he(i, 'compositionupdate', function(e) {
              t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            he(i, 'compositionend', function(e) {
              t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
            }),
            he(i, 'touchstart', function() {
              return n.forceCompositionEnd();
            }),
            he(i, 'input', function() {
              t.composing || t.readFromDOMSoon();
            }),
            he(i, 'copy', o),
            he(i, 'cut', o);
        }),
          (Ia.prototype.prepareSelection = function() {
            var e = xr(this.cm, !1);
            return (e.focus = this.cm.state.focused), e;
          }),
          (Ia.prototype.showSelection = function(e, t) {
            e &&
              this.cm.display.view.length &&
              ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
          }),
          (Ia.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (Ia.prototype.showPrimarySelection = function() {
            var e = this.getSelection(),
              t = this.cm,
              r = t.doc.sel.primary(),
              i = r.from(),
              o = r.to();
            if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom)
              e.removeAllRanges();
            else {
              var a = Ba(t, e.anchorNode, e.anchorOffset),
                s = Ba(t, e.focusNode, e.focusOffset);
              if (!a || a.bad || !s || s.bad || 0 != nt(at(a, s), i) || 0 != nt(ot(a, s), o)) {
                var l = t.display.view,
                  c = (i.line >= t.display.viewFrom && Ha(t, i)) || { node: l[0].measure.map[2], offset: 0 },
                  u = o.line < t.display.viewTo && Ha(t, o);
                if (!u) {
                  var d = l[l.length - 1].measure,
                    h = d.maps ? d.maps[d.maps.length - 1] : d.map;
                  u = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] };
                }
                if (c && u) {
                  var f,
                    p = e.rangeCount && e.getRangeAt(0);
                  try {
                    f = M(c.node, c.offset, u.offset, u.node);
                  } catch (Ae) {}
                  f &&
                    (!n && t.state.focused
                      ? (e.collapse(c.node, c.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f)))
                      : (e.removeAllRanges(), e.addRange(f)),
                    p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()),
                    this.rememberSelection();
                } else e.removeAllRanges();
              }
            }
          }),
          (Ia.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function() {
                (e.gracePeriod = !1),
                  e.selectionChanged() &&
                    e.cm.operation(function() {
                      return (e.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (Ia.prototype.showMultipleSelections = function(e) {
            O(this.cm.display.cursorDiv, e.cursors), O(this.cm.display.selectionDiv, e.selection);
          }),
          (Ia.prototype.rememberSelection = function() {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
              (this.lastAnchorOffset = e.anchorOffset),
              (this.lastFocusNode = e.focusNode),
              (this.lastFocusOffset = e.focusOffset);
          }),
          (Ia.prototype.selectionInEditor = function() {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return A(this.div, t);
          }),
          (Ia.prototype.focus = function() {
            'nocursor' != this.cm.options.readOnly &&
              (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus());
          }),
          (Ia.prototype.blur = function() {
            this.div.blur();
          }),
          (Ia.prototype.getField = function() {
            return this.div;
          }),
          (Ia.prototype.supportsTouch = function() {
            return !0;
          }),
          (Ia.prototype.receivedFocus = function() {
            var e = this;
            this.selectionInEditor()
              ? this.pollSelection()
              : Jr(this.cm, function() {
                  return (e.cm.curOp.selectionChanged = !0);
                }),
              this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
              });
          }),
          (Ia.prototype.selectionChanged = function() {
            var e = this.getSelection();
            return (
              e.anchorNode != this.lastAnchorNode ||
              e.anchorOffset != this.lastAnchorOffset ||
              e.focusNode != this.lastFocusNode ||
              e.focusOffset != this.lastFocusOffset
            );
          }),
          (Ia.prototype.pollSelection = function() {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
              var e = this.getSelection(),
                t = this.cm;
              if (
                g &&
                u &&
                this.cm.display.gutterSpecs.length &&
                (function(e) {
                  for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                  return !1;
                })(e.anchorNode)
              )
                return (
                  this.cm.triggerOnKeyDown({ type: 'keydown', keyCode: 8, preventDefault: Math.abs }),
                  this.blur(),
                  void this.focus()
                );
              if (!this.composing) {
                this.rememberSelection();
                var n = Ba(t, e.anchorNode, e.anchorOffset),
                  r = Ba(t, e.focusNode, e.focusOffset);
                n &&
                  r &&
                  Jr(t, function() {
                    Qi(t.doc, Mi(n, r), q), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                  });
              }
            }
          }),
          (Ia.prototype.pollContent = function() {
            null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e,
              t,
              n,
              r = this.cm,
              i = r.display,
              o = r.doc.sel.primary(),
              a = o.from(),
              s = o.to();
            if (
              (0 == a.ch && a.line > r.firstLine() && (a = tt(a.line - 1, Ve(r.doc, a.line - 1).length)),
              s.ch == Ve(r.doc, s.line).text.length && s.line < r.lastLine() && (s = tt(s.line + 1, 0)),
              a.line < i.viewFrom || s.line > i.viewTo - 1)
            )
              return !1;
            a.line == i.viewFrom || 0 == (e = dr(r, a.line))
              ? ((t = Ye(i.view[0].line)), (n = i.view[0].node))
              : ((t = Ye(i.view[e].line)), (n = i.view[e - 1].node.nextSibling));
            var l,
              c,
              u = dr(r, s.line);
            if (
              (u == i.view.length - 1
                ? ((l = i.viewTo - 1), (c = i.lineDiv.lastChild))
                : ((l = Ye(i.view[u + 1].line) - 1), (c = i.view[u + 1].node.previousSibling)),
              !n)
            )
              return !1;
            for (
              var d = r.doc.splitLines(
                  (function(e, t, n, r, i) {
                    var o = '',
                      a = !1,
                      s = e.doc.lineSeparator(),
                      l = !1;
                    function c() {
                      a && ((o += s), l && (o += s), (a = l = !1));
                    }
                    function u(e) {
                      e && (c(), (o += e));
                    }
                    function d(t) {
                      if (1 == t.nodeType) {
                        var n = t.getAttribute('cm-text');
                        if (n) return void u(n);
                        var o,
                          h = t.getAttribute('cm-marker');
                        if (h) {
                          var f = e.findMarks(
                            tt(r, 0),
                            tt(i + 1, 0),
                            ((g = +h),
                            function(e) {
                              return e.id == g;
                            }),
                          );
                          return void (f.length && (o = f[0].find(0)) && u(Xe(e.doc, o.from, o.to).join(s)));
                        }
                        if ('false' == t.getAttribute('contenteditable')) return;
                        var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                        if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                        p && c();
                        for (var m = 0; m < t.childNodes.length; m++) d(t.childNodes[m]);
                        /^(pre|p)$/i.test(t.nodeName) && (l = !0), p && (a = !0);
                      } else 3 == t.nodeType && u(t.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
                      var g;
                    }
                    for (; d(t), t != n; ) (t = t.nextSibling), (l = !1);
                    return o;
                  })(r, n, c, t, l),
                ),
                h = Xe(r.doc, tt(t, 0), tt(l, Ve(r.doc, l).text.length));
              d.length > 1 && h.length > 1;

            )
              if (K(d) == K(h)) d.pop(), h.pop(), l--;
              else {
                if (d[0] != h[0]) break;
                d.shift(), h.shift(), t++;
              }
            for (
              var f = 0, p = 0, m = d[0], g = h[0], v = Math.min(m.length, g.length);
              f < v && m.charCodeAt(f) == g.charCodeAt(f);

            )
              ++f;
            for (
              var x = K(d),
                y = K(h),
                b = Math.min(x.length - (1 == d.length ? f : 0), y.length - (1 == h.length ? f : 0));
              p < b && x.charCodeAt(x.length - p - 1) == y.charCodeAt(y.length - p - 1);

            )
              ++p;
            if (1 == d.length && 1 == h.length && t == a.line)
              for (; f && f > a.ch && x.charCodeAt(x.length - p - 1) == y.charCodeAt(y.length - p - 1); ) f--, p++;
            (d[d.length - 1] = x.slice(0, x.length - p).replace(/^\u200b+/, '')),
              (d[0] = d[0].slice(f).replace(/\u200b+$/, ''));
            var w = tt(t, f),
              C = tt(l, h.length ? K(h).length - p : 0);
            return d.length > 1 || d[0] || nt(w, C) ? (po(r.doc, d, w, C, '+input'), !0) : void 0;
          }),
          (Ia.prototype.ensurePolled = function() {
            this.forceCompositionEnd();
          }),
          (Ia.prototype.reset = function() {
            this.forceCompositionEnd();
          }),
          (Ia.prototype.forceCompositionEnd = function() {
            this.composing &&
              (clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus());
          }),
          (Ia.prototype.readFromDOMSoon = function() {
            var e = this;
            null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function() {
                if (((e.readDOMTimeout = null), e.composing)) {
                  if (!e.composing.done) return;
                  e.composing = null;
                }
                e.updateFromDOM();
              }, 80));
          }),
          (Ia.prototype.updateFromDOM = function() {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
              Jr(this.cm, function() {
                return hr(e.cm);
              });
          }),
          (Ia.prototype.setUneditable = function(e) {
            e.contentEditable = 'false';
          }),
          (Ia.prototype.onKeyPress = function(e) {
            0 == e.charCode ||
              this.composing ||
              (e.preventDefault(),
              this.cm.isReadOnly() ||
                ei(this.cm, Da)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
          }),
          (Ia.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String('nocursor' != e);
          }),
          (Ia.prototype.onContextMenu = function() {}),
          (Ia.prototype.resetPosition = function() {}),
          (Ia.prototype.needsContentAttribute = !0);
        var ja = function(e) {
          (this.cm = e),
            (this.prevInput = ''),
            (this.pollingFast = !1),
            (this.polling = new R()),
            (this.hasSelection = !1),
            (this.composing = null);
        };
        (ja.prototype.init = function(e) {
          var t = this,
            n = this,
            r = this.cm;
          this.createField(e);
          var i = this.textarea;
          function o(e) {
            if (!ge(r, e)) {
              if (r.somethingSelected()) Oa({ lineWise: !1, text: r.getSelections() });
              else {
                if (!r.options.lineWiseCopyCut) return;
                var t = _a(r);
                Oa({ lineWise: !0, text: t.text }),
                  'cut' == e.type
                    ? r.setSelections(t.ranges, null, q)
                    : ((n.prevInput = ''), (i.value = t.text.join('\n')), F(i));
              }
              'cut' == e.type && (r.state.cutIncoming = +new Date());
            }
          }
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            m && (i.style.width = '0px'),
            he(i, 'input', function() {
              a && s >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
            }),
            he(i, 'paste', function(e) {
              ge(r, e) || Na(e, r) || ((r.state.pasteIncoming = +new Date()), n.fastPoll());
            }),
            he(i, 'cut', o),
            he(i, 'copy', o),
            he(e.scroller, 'paste', function(t) {
              if (!kn(e, t) && !ge(r, t)) {
                if (!i.dispatchEvent) return (r.state.pasteIncoming = +new Date()), void n.focus();
                var o = new Event('paste');
                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
              }
            }),
            he(e.lineSpace, 'selectstart', function(t) {
              kn(e, t) || be(t);
            }),
            he(i, 'compositionstart', function() {
              var e = r.getCursor('from');
              n.composing && n.composing.range.clear(),
                (n.composing = {
                  start: e,
                  range: r.markText(e, r.getCursor('to'), { className: 'CodeMirror-composing' }),
                });
            }),
            he(i, 'compositionend', function() {
              n.composing && (n.poll(), n.composing.range.clear(), (n.composing = null));
            });
        }),
          (ja.prototype.createField = function(e) {
            (this.wrapper = Pa()), (this.textarea = this.wrapper.firstChild);
          }),
          (ja.prototype.prepareSelection = function() {
            var e = this.cm,
              t = e.display,
              n = e.doc,
              r = xr(e);
            if (e.options.moveInputWithCursor) {
              var i = Xn(e, n.sel.primary().head, 'div'),
                o = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
              (r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top))),
                (r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left)));
            }
            return r;
          }),
          (ja.prototype.showSelection = function(e) {
            var t = this.cm.display;
            O(t.cursorDiv, e.cursors),
              O(t.selectionDiv, e.selection),
              null != e.teTop &&
                ((this.wrapper.style.top = e.teTop + 'px'), (this.wrapper.style.left = e.teLeft + 'px'));
          }),
          (ja.prototype.reset = function(e) {
            if (!this.contextMenuPending && !this.composing) {
              var t = this.cm;
              if (t.somethingSelected()) {
                this.prevInput = '';
                var n = t.getSelection();
                (this.textarea.value = n), t.state.focused && F(this.textarea), a && s >= 9 && (this.hasSelection = n);
              } else e || ((this.prevInput = this.textarea.value = ''), a && s >= 9 && (this.hasSelection = null));
            }
          }),
          (ja.prototype.getField = function() {
            return this.textarea;
          }),
          (ja.prototype.supportsTouch = function() {
            return !1;
          }),
          (ja.prototype.focus = function() {
            if ('nocursor' != this.cm.options.readOnly && (!v || _() != this.textarea))
              try {
                this.textarea.focus();
              } catch (Ae) {}
          }),
          (ja.prototype.blur = function() {
            this.textarea.blur();
          }),
          (ja.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (ja.prototype.receivedFocus = function() {
            this.slowPoll();
          }),
          (ja.prototype.slowPoll = function() {
            var e = this;
            this.pollingFast ||
              this.polling.set(this.cm.options.pollInterval, function() {
                e.poll(), e.cm.state.focused && e.slowPoll();
              });
          }),
          (ja.prototype.fastPoll = function() {
            var e = !1,
              t = this;
            (t.pollingFast = !0),
              t.polling.set(20, function n() {
                t.poll() || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, n));
              });
          }),
          (ja.prototype.poll = function() {
            var e = this,
              t = this.cm,
              n = this.textarea,
              r = this.prevInput;
            if (
              this.contextMenuPending ||
              !t.state.focused ||
              (Ee(n) && !r && !this.composing) ||
              t.isReadOnly() ||
              t.options.disableInput ||
              t.state.keySeq
            )
              return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected()) return !1;
            if ((a && s >= 9 && this.hasSelection === i) || (x && /[\uf700-\uf7ff]/.test(i)))
              return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
              var o = i.charCodeAt(0);
              if ((8203 != o || r || (r = '\u200b'), 8666 == o)) return this.reset(), this.cm.execCommand('undo');
            }
            for (var l = 0, c = Math.min(r.length, i.length); l < c && r.charCodeAt(l) == i.charCodeAt(l); ) ++l;
            return (
              Jr(t, function() {
                Da(t, i.slice(l), r.length - l, null, e.composing ? '*compose' : null),
                  i.length > 1e3 || i.indexOf('\n') > -1 ? (n.value = e.prevInput = '') : (e.prevInput = i),
                  e.composing &&
                    (e.composing.range.clear(),
                    (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                      className: 'CodeMirror-composing',
                    })));
              }),
              !0
            );
          }),
          (ja.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (ja.prototype.onKeyPress = function() {
            a && s >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (ja.prototype.onContextMenu = function(e) {
            var t = this,
              n = t.cm,
              r = n.display,
              i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = ur(n, e),
              c = r.scroller.scrollTop;
            if (o && !d) {
              n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && ei(n, Qi)(n.doc, Mi(o), q);
              var u,
                h = i.style.cssText,
                f = t.wrapper.style.cssText,
                p = t.wrapper.offsetParent.getBoundingClientRect();
              if (
                ((t.wrapper.style.cssText = 'position: static'),
                (i.style.cssText =
                  'position: absolute; width: 30px; height: 30px;\n      top: ' +
                  (e.clientY - p.top - 5) +
                  'px; left: ' +
                  (e.clientX - p.left - 5) +
                  'px;\n      z-index: 1000; background: ' +
                  (a ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                  ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
                l && (u = window.scrollY),
                r.input.focus(),
                l && window.scrollTo(null, u),
                r.input.reset(),
                n.somethingSelected() || (i.value = t.prevInput = ' '),
                (t.contextMenuPending = v),
                (r.selForContextMenu = n.doc.sel),
                clearTimeout(r.detectingSelectAll),
                a && s >= 9 && g(),
                k)
              ) {
                ke(e);
                var m = function() {
                  pe(window, 'mouseup', m), setTimeout(v, 20);
                };
                he(window, 'mouseup', m);
              } else setTimeout(v, 50);
            }
            function g() {
              if (null != i.selectionStart) {
                var e = n.somethingSelected(),
                  o = '\u200b' + (e ? i.value : '');
                (i.value = '\u21da'),
                  (i.value = o),
                  (t.prevInput = e ? '' : '\u200b'),
                  (i.selectionStart = 1),
                  (i.selectionEnd = o.length),
                  (r.selForContextMenu = n.doc.sel);
              }
            }
            function v() {
              if (
                t.contextMenuPending == v &&
                ((t.contextMenuPending = !1),
                (t.wrapper.style.cssText = f),
                (i.style.cssText = h),
                a && s < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = c)),
                null != i.selectionStart)
              ) {
                (!a || (a && s < 9)) && g();
                var e = 0,
                  o = function() {
                    r.selForContextMenu == n.doc.sel &&
                    0 == i.selectionStart &&
                    i.selectionEnd > 0 &&
                    '\u200b' == t.prevInput
                      ? ei(n, ao)(n)
                      : e++ < 10
                      ? (r.detectingSelectAll = setTimeout(o, 500))
                      : ((r.selForContextMenu = null), r.input.reset());
                  };
                r.detectingSelectAll = setTimeout(o, 200);
              }
            }
          }),
          (ja.prototype.readOnlyChanged = function(e) {
            e || this.reset(), (this.textarea.disabled = 'nocursor' == e);
          }),
          (ja.prototype.setUneditable = function() {}),
          (ja.prototype.needsContentAttribute = !1),
          (function(e) {
            var t = e.optionHandlers;
            function n(n, r, i, o) {
              (e.defaults[n] = r),
                i &&
                  (t[n] = o
                    ? function(e, t, n) {
                        n != ya && i(e, t, n);
                      }
                    : i);
            }
            (e.defineOption = n),
              (e.Init = ya),
              n(
                'value',
                '',
                function(e, t) {
                  return e.setValue(t);
                },
                !0,
              ),
              n(
                'mode',
                null,
                function(e, t) {
                  (e.doc.modeOption = t), Ni(e);
                },
                !0,
              ),
              n('indentUnit', 2, Ni, !0),
              n('indentWithTabs', !1),
              n('smartIndent', !0),
              n(
                'tabSize',
                4,
                function(e) {
                  Ai(e), Wn(e), hr(e);
                },
                !0,
              ),
              n('lineSeparator', null, function(e, t) {
                if (((e.doc.lineSep = t), t)) {
                  var n = [],
                    r = e.doc.first;
                  e.doc.iter(function(e) {
                    for (var i = 0; ; ) {
                      var o = e.text.indexOf(t, i);
                      if (-1 == o) break;
                      (i = o + t.length), n.push(tt(r, o));
                    }
                    r++;
                  });
                  for (var i = n.length - 1; i >= 0; i--) po(e.doc, t, n[i], tt(n[i].line, n[i].ch + t.length));
                }
              }),
              n(
                'specialChars',
                /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
                function(e, t, n) {
                  (e.state.specialChars = new RegExp(t.source + (t.test('\t') ? '' : '|\t'), 'g')),
                    n != ya && e.refresh();
                },
              ),
              n(
                'specialCharPlaceholder',
                Jt,
                function(e) {
                  return e.refresh();
                },
                !0,
              ),
              n('electricChars', !0),
              n(
                'inputStyle',
                v ? 'contenteditable' : 'textarea',
                function() {
                  throw new Error('inputStyle can not (yet) be changed in a running editor');
                },
                !0,
              ),
              n(
                'spellcheck',
                !1,
                function(e, t) {
                  return (e.getInputField().spellcheck = t);
                },
                !0,
              ),
              n(
                'autocorrect',
                !1,
                function(e, t) {
                  return (e.getInputField().autocorrect = t);
                },
                !0,
              ),
              n(
                'autocapitalize',
                !1,
                function(e, t) {
                  return (e.getInputField().autocapitalize = t);
                },
                !0,
              ),
              n('rtlMoveVisually', !b),
              n('wholeLineUpdateBefore', !0),
              n(
                'theme',
                'default',
                function(e) {
                  xa(e), mi(e);
                },
                !0,
              ),
              n('keyMap', 'default', function(e, t, n) {
                var r = Xo(t),
                  i = n != ya && Xo(n);
                i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
              }),
              n('extraKeys', null),
              n('configureMouse', null),
              n('lineWrapping', !1, ka, !0),
              n(
                'gutters',
                [],
                function(e, t) {
                  (e.display.gutterSpecs = fi(t, e.options.lineNumbers)), mi(e);
                },
                !0,
              ),
              n(
                'fixedGutter',
                !0,
                function(e, t) {
                  (e.display.gutters.style.left = t ? sr(e.display) + 'px' : '0'), e.refresh();
                },
                !0,
              ),
              n(
                'coverGutterNextToScrollbar',
                !1,
                function(e) {
                  return jr(e);
                },
                !0,
              ),
              n(
                'scrollbarStyle',
                'native',
                function(e) {
                  $r(e),
                    jr(e),
                    e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                    e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                },
                !0,
              ),
              n(
                'lineNumbers',
                !1,
                function(e, t) {
                  (e.display.gutterSpecs = fi(e.options.gutters, t)), mi(e);
                },
                !0,
              ),
              n('firstLineNumber', 1, mi, !0),
              n(
                'lineNumberFormatter',
                function(e) {
                  return e;
                },
                mi,
                !0,
              ),
              n('showCursorWhenSelecting', !1, vr, !0),
              n('resetSelectionOnContextMenu', !0),
              n('lineWiseCopyCut', !0),
              n('pasteLinesPerSelection', !0),
              n('selectionsMayTouch', !1),
              n('readOnly', !1, function(e, t) {
                'nocursor' == t && (Lr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
              }),
              n(
                'disableInput',
                !1,
                function(e, t) {
                  t || e.display.input.reset();
                },
                !0,
              ),
              n('dragDrop', !0, Ca),
              n('allowDropFileTypes', null),
              n('cursorBlinkRate', 530),
              n('cursorScrollMargin', 0),
              n('cursorHeight', 1, vr, !0),
              n('singleCursorHeightPerLine', !0, vr, !0),
              n('workTime', 100),
              n('workDelay', 100),
              n('flattenSpans', !0, Ai, !0),
              n('addModeClass', !1, Ai, !0),
              n('pollInterval', 100),
              n('undoDepth', 200, function(e, t) {
                return (e.doc.history.undoDepth = t);
              }),
              n('historyEventDelay', 1250),
              n(
                'viewportMargin',
                10,
                function(e) {
                  return e.refresh();
                },
                !0,
              ),
              n('maxHighlightLength', 1e4, Ai, !0),
              n('moveInputWithCursor', !0, function(e, t) {
                t || e.display.input.resetPosition();
              }),
              n('tabindex', null, function(e, t) {
                return (e.display.input.getField().tabIndex = t || '');
              }),
              n('autofocus', null),
              n(
                'direction',
                'ltr',
                function(e, t) {
                  return e.doc.setDirection(t);
                },
                !0,
              ),
              n('phrases', null);
          })(Sa),
          (function(e) {
            var t = e.optionHandlers,
              n = (e.helpers = {});
            (e.prototype = {
              constructor: e,
              focus: function() {
                window.focus(), this.display.input.focus();
              },
              setOption: function(e, n) {
                var r = this.options,
                  i = r[e];
                (r[e] == n && 'mode' != e) ||
                  ((r[e] = n), t.hasOwnProperty(e) && ei(this, t[e])(this, n, i), me(this, 'optionChange', this, e));
              },
              getOption: function(e) {
                return this.options[e];
              },
              getDoc: function() {
                return this.doc;
              },
              addKeyMap: function(e, t) {
                this.state.keyMaps[t ? 'push' : 'unshift'](Xo(e));
              },
              removeKeyMap: function(e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                  if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
              },
              addOverlay: ti(function(t, n) {
                var r = t.token ? t : e.getMode(this.options, t);
                if (r.startState) throw new Error('Overlays may not be stateful.');
                !(function(e, t, n) {
                  for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                  e.splice(r, 0, t);
                })(
                  this.state.overlays,
                  { mode: r, modeSpec: t, opaque: n && n.opaque, priority: (n && n.priority) || 0 },
                  function(e) {
                    return e.priority;
                  },
                ),
                  this.state.modeGen++,
                  hr(this);
              }),
              removeOverlay: ti(function(e) {
                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                  var r = t[n].modeSpec;
                  if (r == e || ('string' == typeof e && r.name == e))
                    return t.splice(n, 1), this.state.modeGen++, void hr(this);
                }
              }),
              indentLine: ti(function(e, t, n) {
                'string' != typeof t &&
                  'number' != typeof t &&
                  (t = null == t ? (this.options.smartIndent ? 'smart' : 'prev') : t ? 'add' : 'subtract'),
                  Je(this.doc, e) && La(this, e, t, n);
              }),
              indentSelection: ti(function(e) {
                for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                  var i = t[r];
                  if (i.empty())
                    i.head.line > n &&
                      (La(this, i.head.line, e, !0), (n = i.head.line), r == this.doc.sel.primIndex && _r(this));
                  else {
                    var o = i.from(),
                      a = i.to(),
                      s = Math.max(n, o.line);
                    n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                    for (var l = s; l < n; ++l) La(this, l, e);
                    var c = this.doc.sel.ranges;
                    0 == o.ch && t.length == c.length && c[r].from().ch > 0 && Ki(this.doc, r, new ki(o, c[r].to()), q);
                  }
                }
              }),
              getTokenAt: function(e, t) {
                return yt(this, e, t);
              },
              getLineTokens: function(e, t) {
                return yt(this, tt(e), t, !0);
              },
              getTokenTypeAt: function(e) {
                e = lt(this.doc, e);
                var t,
                  n = ft(this, Ve(this.doc, e.line)),
                  r = 0,
                  i = (n.length - 1) / 2,
                  o = e.ch;
                if (0 == o) t = n[2];
                else
                  for (;;) {
                    var a = (r + i) >> 1;
                    if ((a ? n[2 * a - 1] : 0) >= o) i = a;
                    else {
                      if (!(n[2 * a + 1] < o)) {
                        t = n[2 * a + 2];
                        break;
                      }
                      r = a + 1;
                    }
                  }
                var s = t ? t.indexOf('overlay ') : -1;
                return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
              },
              getModeAt: function(t) {
                var n = this.doc.mode;
                return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
              },
              getHelper: function(e, t) {
                return this.getHelpers(e, t)[0];
              },
              getHelpers: function(e, t) {
                var r = [];
                if (!n.hasOwnProperty(t)) return r;
                var i = n[t],
                  o = this.getModeAt(e);
                if ('string' == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                else if (o[t])
                  for (var a = 0; a < o[t].length; a++) {
                    var s = i[o[t][a]];
                    s && r.push(s);
                  }
                else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                for (var l = 0; l < i._global.length; l++) {
                  var c = i._global[l];
                  c.pred(o, this) && -1 == B(r, c.val) && r.push(c.val);
                }
                return r;
              },
              getStateAfter: function(e, t) {
                var n = this.doc;
                return pt(this, (e = st(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
              },
              cursorCoords: function(e, t) {
                var n = this.doc.sel.primary();
                return Xn(
                  this,
                  null == e ? n.head : 'object' == typeof e ? lt(this.doc, e) : e ? n.from() : n.to(),
                  t || 'page',
                );
              },
              charCoords: function(e, t) {
                return Vn(this, lt(this.doc, e), t || 'page');
              },
              coordsChar: function(e, t) {
                return Yn(this, (e = Gn(this, e, t || 'page')).left, e.top);
              },
              lineAtHeight: function(e, t) {
                return (e = Gn(this, { top: e, left: 0 }, t || 'page').top), Qe(this.doc, e + this.display.viewOffset);
              },
              heightAtLine: function(e, t, n) {
                var r,
                  i = !1;
                if ('number' == typeof e) {
                  var o = this.doc.first + this.doc.size - 1;
                  e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)), (r = Ve(this.doc, e));
                } else r = e;
                return $n(this, r, { top: 0, left: 0 }, t || 'page', n || i).top + (i ? this.doc.height - Ut(r) : 0);
              },
              defaultTextHeight: function() {
                return ir(this.display);
              },
              defaultCharWidth: function() {
                return or(this.display);
              },
              getViewport: function() {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              },
              addWidget: function(e, t, n, r, i) {
                var o,
                  a = this.display,
                  s = (e = Xn(this, lt(this.doc, e))).bottom,
                  l = e.left;
                if (
                  ((t.style.position = 'absolute'),
                  t.setAttribute('cm-ignore-events', 'true'),
                  this.display.input.setUneditable(t),
                  a.sizer.appendChild(t),
                  'over' == r)
                )
                  s = e.top;
                else if ('above' == r || 'near' == r) {
                  var c = Math.max(a.wrapper.clientHeight, this.doc.height),
                    u = Math.max(a.sizer.clientWidth, a.lineSpace.clientWidth);
                  ('above' == r || e.bottom + t.offsetHeight > c) && e.top > t.offsetHeight
                    ? (s = e.top - t.offsetHeight)
                    : e.bottom + t.offsetHeight <= c && (s = e.bottom),
                    l + t.offsetWidth > u && (l = u - t.offsetWidth);
                }
                (t.style.top = s + 'px'),
                  (t.style.left = t.style.right = ''),
                  'right' == i
                    ? ((l = a.sizer.clientWidth - t.offsetWidth), (t.style.right = '0px'))
                    : ('left' == i ? (l = 0) : 'middle' == i && (l = (a.sizer.clientWidth - t.offsetWidth) / 2),
                      (t.style.left = l + 'px')),
                  n &&
                    (null !=
                      (o = Nr(this, { left: l, top: s, right: l + t.offsetWidth, bottom: s + t.offsetHeight }))
                        .scrollTop && zr(this, o.scrollTop),
                    null != o.scrollLeft && Hr(this, o.scrollLeft));
              },
              triggerOnKeyDown: ti(la),
              triggerOnKeyPress: ti(ua),
              triggerOnKeyUp: ca,
              triggerOnMouseDown: ti(pa),
              execCommand: function(e) {
                if (Jo.hasOwnProperty(e)) return Jo[e].call(null, this);
              },
              triggerElectric: ti(function(e) {
                Aa(this, e);
              }),
              findPosH: function(e, t, n, r) {
                var i = 1;
                t < 0 && ((i = -1), (t = -t));
                for (var o = lt(this.doc, e), a = 0; a < t && !(o = Fa(this.doc, o, i, n, r)).hitSide; ++a);
                return o;
              },
              moveH: ti(function(e, t) {
                var n = this;
                this.extendSelectionsBy(function(r) {
                  return n.display.shift || n.doc.extend || r.empty()
                    ? Fa(n.doc, r.head, e, t, n.options.rtlMoveVisually)
                    : e < 0
                    ? r.from()
                    : r.to();
                }, $);
              }),
              deleteH: ti(function(e, t) {
                var n = this.doc;
                this.doc.sel.somethingSelected()
                  ? n.replaceSelection('', null, '+delete')
                  : Ko(this, function(r) {
                      var i = Fa(n, r.head, e, t, !1);
                      return e < 0 ? { from: i, to: r.head } : { from: r.head, to: i };
                    });
              }),
              findPosV: function(e, t, n, r) {
                var i = 1,
                  o = r;
                t < 0 && ((i = -1), (t = -t));
                for (var a = lt(this.doc, e), s = 0; s < t; ++s) {
                  var l = Xn(this, a, 'div');
                  if ((null == o ? (o = l.left) : (l.left = o), (a = za(this, l, i, n)).hitSide)) break;
                }
                return a;
              },
              moveV: ti(function(e, t) {
                var n = this,
                  r = this.doc,
                  i = [],
                  o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                if (
                  (r.extendSelectionsBy(function(a) {
                    if (o) return e < 0 ? a.from() : a.to();
                    var s = Xn(n, a.head, 'div');
                    null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
                    var l = za(n, s, e, t);
                    return 'page' == t && a == r.sel.primary() && Ar(n, Vn(n, l, 'div').top - s.top), l;
                  }, $),
                  i.length)
                )
                  for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a];
              }),
              findWordAt: function(e) {
                var t = Ve(this.doc, e.line).text,
                  n = e.ch,
                  r = e.ch;
                if (t) {
                  var i = this.getHelper(e, 'wordChars');
                  ('before' != e.sticky && r != t.length) || !n ? ++r : --n;
                  for (
                    var o = t.charAt(n),
                      a = te(o, i)
                        ? function(e) {
                            return te(e, i);
                          }
                        : /\s/.test(o)
                        ? function(e) {
                            return /\s/.test(e);
                          }
                        : function(e) {
                            return !/\s/.test(e) && !te(e);
                          };
                    n > 0 && a(t.charAt(n - 1));

                  )
                    --n;
                  for (; r < t.length && a(t.charAt(r)); ) ++r;
                }
                return new ki(tt(e.line, n), tt(e.line, r));
              },
              toggleOverwrite: function(e) {
                (null != e && e == this.state.overwrite) ||
                  ((this.state.overwrite = !this.state.overwrite)
                    ? E(this.display.cursorDiv, 'CodeMirror-overwrite')
                    : L(this.display.cursorDiv, 'CodeMirror-overwrite'),
                  me(this, 'overwriteToggle', this, this.state.overwrite));
              },
              hasFocus: function() {
                return this.display.input.getField() == _();
              },
              isReadOnly: function() {
                return !(!this.options.readOnly && !this.doc.cantEdit);
              },
              scrollTo: ti(function(e, t) {
                Er(this, e, t);
              }),
              getScrollInfo: function() {
                var e = this.display.scroller;
                return {
                  left: e.scrollLeft,
                  top: e.scrollTop,
                  height: e.scrollHeight - Tn(this) - this.display.barHeight,
                  width: e.scrollWidth - Tn(this) - this.display.barWidth,
                  clientHeight: Dn(this),
                  clientWidth: On(this),
                };
              },
              scrollIntoView: ti(function(e, t) {
                null == e
                  ? ((e = { from: this.doc.sel.primary().head, to: null }),
                    null == t && (t = this.options.cursorScrollMargin))
                  : 'number' == typeof e
                  ? (e = { from: tt(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                  e.to || (e.to = e.from),
                  (e.margin = t || 0),
                  null != e.from.line
                    ? (function(e, t) {
                        Pr(e), (e.curOp.scrollToPos = t);
                      })(this, e)
                    : Fr(this, e.from, e.to, e.margin);
              }),
              setSize: ti(function(e, t) {
                var n = this,
                  r = function(e) {
                    return 'number' == typeof e || /^\d+$/.test(String(e)) ? e + 'px' : e;
                  };
                null != e && (this.display.wrapper.style.width = r(e)),
                  null != t && (this.display.wrapper.style.height = r(t)),
                  this.options.lineWrapping && Bn(this);
                var i = this.display.viewFrom;
                this.doc.iter(i, this.display.viewTo, function(e) {
                  if (e.widgets)
                    for (var t = 0; t < e.widgets.length; t++)
                      if (e.widgets[t].noHScroll) {
                        fr(n, i, 'widget');
                        break;
                      }
                  ++i;
                }),
                  (this.curOp.forceUpdate = !0),
                  me(this, 'refresh', this);
              }),
              operation: function(e) {
                return Jr(this, e);
              },
              startOperation: function() {
                return Vr(this);
              },
              endOperation: function() {
                return Xr(this);
              },
              refresh: ti(function() {
                var e = this.display.cachedTextHeight;
                hr(this),
                  (this.curOp.forceUpdate = !0),
                  Wn(this),
                  Er(this, this.doc.scrollLeft, this.doc.scrollTop),
                  ci(this.display),
                  (null == e || Math.abs(e - ir(this.display)) > 0.5) && cr(this),
                  me(this, 'refresh', this);
              }),
              swapDoc: ti(function(e) {
                var t = this.doc;
                return (
                  (t.cm = null),
                  this.state.selectingText && this.state.selectingText(),
                  Fi(this, e),
                  Wn(this),
                  this.display.input.reset(),
                  Er(this, e.scrollLeft, e.scrollTop),
                  (this.curOp.forceScroll = !0),
                  cn(this, 'swapDoc', this, t),
                  t
                );
              }),
              phrase: function(e) {
                var t = this.options.phrases;
                return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
              },
              getInputField: function() {
                return this.display.input.getField();
              },
              getWrapperElement: function() {
                return this.display.wrapper;
              },
              getScrollerElement: function() {
                return this.display.scroller;
              },
              getGutterElement: function() {
                return this.display.gutters;
              },
            }),
              ye(e),
              (e.registerHelper = function(t, r, i) {
                n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), (n[t][r] = i);
              }),
              (e.registerGlobalHelper = function(t, r, i, o) {
                e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
              });
          })(Sa);
        var qa = 'iter insert remove copy getEditor constructor'.split(' ');
        for (var Ua in No.prototype)
          No.prototype.hasOwnProperty(Ua) &&
            B(qa, Ua) < 0 &&
            (Sa.prototype[Ua] = (function(e) {
              return function() {
                return e.apply(this.doc, arguments);
              };
            })(No.prototype[Ua]));
        return (
          ye(No),
          (Sa.inputStyles = { textarea: ja, contenteditable: Ia }),
          (Sa.defineMode = function(e) {
            Sa.defaults.mode || 'null' == e || (Sa.defaults.mode = e), He.apply(this, arguments);
          }),
          (Sa.defineMIME = function(e, t) {
            Ie[e] = t;
          }),
          Sa.defineMode('null', function() {
            return {
              token: function(e) {
                return e.skipToEnd();
              },
            };
          }),
          Sa.defineMIME('text/plain', 'null'),
          (Sa.defineExtension = function(e, t) {
            Sa.prototype[e] = t;
          }),
          (Sa.defineDocExtension = function(e, t) {
            No.prototype[e] = t;
          }),
          (Sa.fromTextArea = function(e, t) {
            if (
              (((t = t ? I(t) : {}).value = e.value),
              !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
              !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
              null == t.autofocus)
            ) {
              var n = _();
              t.autofocus = n == e || (null != e.getAttribute('autofocus') && n == document.body);
            }
            function r() {
              e.value = s.getValue();
            }
            var i;
            if (e.form && (he(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
              var o = e.form;
              i = o.submit;
              try {
                var a = (o.submit = function() {
                  r(), (o.submit = i), o.submit(), (o.submit = a);
                });
              } catch (Ae) {}
            }
            (t.finishInit = function(n) {
              (n.save = r),
                (n.getTextArea = function() {
                  return e;
                }),
                (n.toTextArea = function() {
                  (n.toTextArea = isNaN),
                    r(),
                    e.parentNode.removeChild(n.getWrapperElement()),
                    (e.style.display = ''),
                    e.form &&
                      (pe(e.form, 'submit', r),
                      t.leaveSubmitMethodAlone || 'function' != typeof e.form.submit || (e.form.submit = i));
                });
            }),
              (e.style.display = 'none');
            var s = Sa(function(t) {
              return e.parentNode.insertBefore(t, e.nextSibling);
            }, t);
            return s;
          }),
          (function(e) {
            (e.off = pe),
              (e.on = he),
              (e.wheelEventPixels = bi),
              (e.Doc = No),
              (e.splitLines = _e),
              (e.countColumn = H),
              (e.findColumn = G),
              (e.isWordChar = ee),
              (e.Pass = j),
              (e.signal = me),
              (e.Line = Vt),
              (e.changeEnd = Li),
              (e.scrollbarModel = Ur),
              (e.Pos = tt),
              (e.cmpPos = nt),
              (e.modes = ze),
              (e.mimeModes = Ie),
              (e.resolveMode = Re),
              (e.getMode = Be),
              (e.modeExtensions = We),
              (e.extendMode = je),
              (e.copyState = qe),
              (e.startState = $e),
              (e.innerMode = Ue),
              (e.commands = Jo),
              (e.keyMap = Wo),
              (e.keyName = Vo),
              (e.isModifierKey = $o),
              (e.lookupKey = Uo),
              (e.normalizeKeyMap = qo),
              (e.StringStream = Ge),
              (e.SharedTextMarker = Lo),
              (e.TextMarker = So),
              (e.LineWidget = wo),
              (e.e_preventDefault = be),
              (e.e_stopPropagation = we),
              (e.e_stop = ke),
              (e.addClass = E),
              (e.contains = A),
              (e.rmClass = L),
              (e.keyNames = Io);
          })(Sa),
          (Sa.version = '5.49.2'),
          Sa
        );
      })();
    },
    'bXjK': function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineOption('fullScreen', !1, function(t, n, r) {
          r == e.Init && (r = !1),
            !r != !n &&
              (n
                ? (function(e) {
                    var t = e.getWrapperElement();
                    (e.state.fullScreenRestore = {
                      scrollTop: window.pageYOffset,
                      scrollLeft: window.pageXOffset,
                      width: t.style.width,
                      height: t.style.height,
                    }),
                      (t.style.width = ''),
                      (t.style.height = 'auto'),
                      (t.className += ' CodeMirror-fullscreen'),
                      (document.documentElement.style.overflow = 'hidden'),
                      e.refresh();
                  })(t)
                : (function(e) {
                    var t = e.getWrapperElement();
                    (t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, '')),
                      (document.documentElement.style.overflow = '');
                    var n = e.state.fullScreenRestore;
                    (t.style.width = n.width),
                      (t.style.height = n.height),
                      window.scrollTo(n.scrollLeft, n.scrollTop),
                      e.refresh();
                  })(t));
        });
      })(n('VrN/'));
    },
    'lZu9': function(e, t, n) {
      !(function(e) {
        'use strict';
        e.defineMode(
          'markdown',
          function(t, n) {
            var r = e.getMode(t, 'text/html'),
              i = 'null' == r.name;
            void 0 === n.highlightFormatting && (n.highlightFormatting = !1),
              void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0),
              void 0 === n.taskLists && (n.taskLists = !1),
              void 0 === n.strikethrough && (n.strikethrough = !1),
              void 0 === n.emoji && (n.emoji = !1),
              void 0 === n.fencedCodeBlockHighlighting && (n.fencedCodeBlockHighlighting = !0),
              void 0 === n.xml && (n.xml = !0),
              void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});
            var o = {
              header: 'header',
              code: 'comment',
              quote: 'quote',
              list1: 'variable-2',
              list2: 'variable-3',
              list3: 'keyword',
              hr: 'hr',
              image: 'image',
              imageAltText: 'image-alt-text',
              imageMarker: 'image-marker',
              formatting: 'formatting',
              linkInline: 'link',
              linkEmail: 'link',
              linkText: 'link',
              linkHref: 'string',
              em: 'em',
              strong: 'strong',
              strikethrough: 'strikethrough',
              emoji: 'builtin',
            };
            for (var a in o) o.hasOwnProperty(a) && n.tokenTypeOverrides[a] && (o[a] = n.tokenTypeOverrides[a]);
            var s = /^([*\-_])(?:\s*\1){2,}\s*$/,
              l = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
              c = /^\[(x| )\](?=\s)/i,
              u = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
              d = /^ *(?:\={1,}|-{1,})\s*$/,
              h = /^[^#!\[\]*_\\<>` "'(~:]+/,
              f = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,
              p = /^\s*\[[^\]]+?\]:.*$/,
              m = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;
            function g(e, t, n) {
              return (t.f = t.inline = n), n(e, t);
            }
            function v(e, t, n) {
              return (t.f = t.block = n), n(e, t);
            }
            function x(t) {
              if (
                ((t.linkTitle = !1),
                (t.linkHref = !1),
                (t.linkText = !1),
                (t.em = !1),
                (t.strong = !1),
                (t.strikethrough = !1),
                (t.quote = 0),
                (t.indentedCode = !1),
                t.f == b)
              ) {
                var n = i;
                if (!n) {
                  var o = e.innerMode(r, t.htmlState);
                  n =
                    'xml' == o.mode.name && null === o.state.tagStart && !o.state.context && o.state.tokenize.isInText;
                }
                n && ((t.f = S), (t.block = y), (t.htmlState = null));
              }
              return (
                (t.trailingSpace = 0),
                (t.trailingSpaceNewLine = !1),
                (t.prevLine = t.thisLine),
                (t.thisLine = { stream: null }),
                null
              );
            }
            function y(r, i) {
              var a,
                h = r.column() === i.indentation,
                m = !(a = i.prevLine.stream) || !/\S/.test(a.string),
                v = i.indentedCode,
                x = i.prevLine.hr,
                y = !1 !== i.list,
                b = (i.listStack[i.listStack.length - 1] || 0) + 3;
              i.indentedCode = !1;
              var k = i.indentation;
              if (null === i.indentationDiff && ((i.indentationDiff = i.indentation), y)) {
                for (i.list = null; k < i.listStack[i.listStack.length - 1]; )
                  i.listStack.pop(),
                    i.listStack.length ? (i.indentation = i.listStack[i.listStack.length - 1]) : (i.list = !1);
                !1 !== i.list && (i.indentationDiff = k - i.listStack[i.listStack.length - 1]);
              }
              var S = !(m || x || i.prevLine.header || (y && v) || i.prevLine.fencedCodeEnd),
                M = (!1 === i.list || x || m) && i.indentation <= b && r.match(s),
                L = null;
              if (i.indentationDiff >= 4 && (v || i.prevLine.fencedCodeEnd || i.prevLine.header || m))
                return r.skipToEnd(), (i.indentedCode = !0), o.code;
              if (r.eatSpace()) return null;
              if (h && i.indentation <= b && (L = r.match(u)) && L[1].length <= 6)
                return (
                  (i.quote = 0),
                  (i.header = L[1].length),
                  (i.thisLine.header = !0),
                  n.highlightFormatting && (i.formatting = 'header'),
                  (i.f = i.inline),
                  C(i)
                );
              if (i.indentation <= b && r.eat('>'))
                return (
                  (i.quote = h ? 1 : i.quote + 1), n.highlightFormatting && (i.formatting = 'quote'), r.eatSpace(), C(i)
                );
              if (!M && !i.setext && h && i.indentation <= b && (L = r.match(l))) {
                var T = L[1] ? 'ol' : 'ul';
                return (
                  (i.indentation = k + r.current().length),
                  (i.list = !0),
                  (i.quote = 0),
                  i.listStack.push(i.indentation),
                  (i.em = !1),
                  (i.strong = !1),
                  (i.code = !1),
                  (i.strikethrough = !1),
                  n.taskLists && r.match(c, !1) && (i.taskList = !0),
                  (i.f = i.inline),
                  n.highlightFormatting && (i.formatting = ['list', 'list-' + T]),
                  C(i)
                );
              }
              return h && i.indentation <= b && (L = r.match(f, !0))
                ? ((i.quote = 0),
                  (i.fencedEndRE = new RegExp(L[1] + '+ *$')),
                  (i.localMode =
                    n.fencedCodeBlockHighlighting &&
                    (function(n) {
                      if (e.findModeByName) {
                        var r = e.findModeByName(n);
                        r && (n = r.mime || r.mimes[0]);
                      }
                      var i = e.getMode(t, n);
                      return 'null' == i.name ? null : i;
                    })(L[2])),
                  i.localMode && (i.localState = e.startState(i.localMode)),
                  (i.f = i.block = w),
                  n.highlightFormatting && (i.formatting = 'code-block'),
                  (i.code = -1),
                  C(i))
                : i.setext ||
                  (!((S && y) || i.quote || !1 !== i.list || i.code || M || p.test(r.string)) &&
                    (L = r.lookAhead(1)) &&
                    (L = L.match(d)))
                ? (i.setext
                    ? ((i.header = i.setext),
                      (i.setext = 0),
                      r.skipToEnd(),
                      n.highlightFormatting && (i.formatting = 'header'))
                    : ((i.header = '=' == L[0].charAt(0) ? 1 : 2), (i.setext = i.header)),
                  (i.thisLine.header = !0),
                  (i.f = i.inline),
                  C(i))
                : M
                ? (r.skipToEnd(), (i.hr = !0), (i.thisLine.hr = !0), o.hr)
                : '[' === r.peek()
                ? g(r, i, O)
                : g(r, i, i.inline);
            }
            function b(t, n) {
              var o = r.token(t, n.htmlState);
              if (!i) {
                var a = e.innerMode(r, n.htmlState);
                (('xml' == a.mode.name && null === a.state.tagStart && !a.state.context && a.state.tokenize.isInText) ||
                  (n.md_inside && t.current().indexOf('>') > -1)) &&
                  ((n.f = S), (n.block = y), (n.htmlState = null));
              }
              return o;
            }
            function w(e, t) {
              var r,
                i = t.listStack[t.listStack.length - 1] || 0,
                a = t.indentation < i;
              return t.fencedEndRE && t.indentation <= i + 3 && (a || e.match(t.fencedEndRE))
                ? (n.highlightFormatting && (t.formatting = 'code-block'),
                  a || (r = C(t)),
                  (t.localMode = t.localState = null),
                  (t.block = y),
                  (t.f = S),
                  (t.fencedEndRE = null),
                  (t.code = 0),
                  (t.thisLine.fencedCodeEnd = !0),
                  a ? v(e, t, t.block) : r)
                : t.localMode
                ? t.localMode.token(e, t.localState)
                : (e.skipToEnd(), o.code);
            }
            function C(e) {
              var t = [];
              if (e.formatting) {
                t.push(o.formatting), 'string' == typeof e.formatting && (e.formatting = [e.formatting]);
                for (var r = 0; r < e.formatting.length; r++)
                  t.push(o.formatting + '-' + e.formatting[r]),
                    'header' === e.formatting[r] && t.push(o.formatting + '-' + e.formatting[r] + '-' + e.header),
                    'quote' === e.formatting[r] &&
                      t.push(
                        !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote
                          ? o.formatting + '-' + e.formatting[r] + '-' + e.quote
                          : 'error',
                      );
              }
              if (e.taskOpen) return t.push('meta'), t.length ? t.join(' ') : null;
              if (e.taskClosed) return t.push('property'), t.length ? t.join(' ') : null;
              if (
                (e.linkHref
                  ? t.push(o.linkHref, 'url')
                  : (e.strong && t.push(o.strong),
                    e.em && t.push(o.em),
                    e.strikethrough && t.push(o.strikethrough),
                    e.emoji && t.push(o.emoji),
                    e.linkText && t.push(o.linkText),
                    e.code && t.push(o.code),
                    e.image && t.push(o.image),
                    e.imageAltText && t.push(o.imageAltText, 'link'),
                    e.imageMarker && t.push(o.imageMarker)),
                e.header && t.push(o.header, o.header + '-' + e.header),
                e.quote &&
                  (t.push(o.quote),
                  t.push(
                    !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote
                      ? o.quote + '-' + e.quote
                      : o.quote + '-' + n.maxBlockquoteDepth,
                  )),
                !1 !== e.list)
              ) {
                var i = (e.listStack.length - 1) % 3;
                t.push(i ? (1 === i ? o.list2 : o.list3) : o.list1);
              }
              return (
                e.trailingSpaceNewLine
                  ? t.push('trailing-space-new-line')
                  : e.trailingSpace && t.push('trailing-space-' + (e.trailingSpace % 2 ? 'a' : 'b')),
                t.length ? t.join(' ') : null
              );
            }
            function k(e, t) {
              if (e.match(h, !0)) return C(t);
            }
            function S(t, i) {
              var a = i.text(t, i);
              if (void 0 !== a) return a;
              if (i.list) return (i.list = null), C(i);
              if (i.taskList)
                return (
                  ' ' === t.match(c, !0)[1] ? (i.taskOpen = !0) : (i.taskClosed = !0),
                  n.highlightFormatting && (i.formatting = 'task'),
                  (i.taskList = !1),
                  C(i)
                );
              if (((i.taskOpen = !1), (i.taskClosed = !1), i.header && t.match(/^#+$/, !0)))
                return n.highlightFormatting && (i.formatting = 'header'), C(i);
              var s = t.next();
              if (i.linkTitle) {
                i.linkTitle = !1;
                var l = s;
                if (
                  ('(' === s && (l = ')'),
                  (l = (l + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1')),
                  t.match(new RegExp('^\\s*(?:[^' + l + '\\\\]+|\\\\\\\\|\\\\.)' + l), !0))
                )
                  return o.linkHref;
              }
              if ('`' === s) {
                var u = i.formatting;
                n.highlightFormatting && (i.formatting = 'code'), t.eatWhile('`');
                var d = t.current().length;
                if (0 != i.code || (i.quote && 1 != d)) {
                  if (d == i.code) {
                    var h = C(i);
                    return (i.code = 0), h;
                  }
                  return (i.formatting = u), C(i);
                }
                return (i.code = d), C(i);
              }
              if (i.code) return C(i);
              if ('\\' === s && (t.next(), n.highlightFormatting)) {
                var f = C(i),
                  p = o.formatting + '-escape';
                return f ? f + ' ' + p : p;
              }
              if ('!' === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
                return (i.imageMarker = !0), (i.image = !0), n.highlightFormatting && (i.formatting = 'image'), C(i);
              if ('[' === s && i.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1))
                return (
                  (i.imageMarker = !1), (i.imageAltText = !0), n.highlightFormatting && (i.formatting = 'image'), C(i)
                );
              if (']' === s && i.imageAltText)
                return (
                  n.highlightFormatting && (i.formatting = 'image'),
                  (f = C(i)),
                  (i.imageAltText = !1),
                  (i.image = !1),
                  (i.inline = i.f = L),
                  f
                );
              if ('[' === s && !i.image)
                return i.linkText && t.match(/^.*?\]/)
                  ? C(i)
                  : ((i.linkText = !0), n.highlightFormatting && (i.formatting = 'link'), C(i));
              if (']' === s && i.linkText)
                return (
                  n.highlightFormatting && (i.formatting = 'link'),
                  (f = C(i)),
                  (i.linkText = !1),
                  (i.inline = i.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? L : S),
                  f
                );
              if ('<' === s && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1))
                return (
                  (i.f = i.inline = M),
                  n.highlightFormatting && (i.formatting = 'link'),
                  (f = C(i)) ? (f += ' ') : (f = ''),
                  f + o.linkInline
                );
              if ('<' === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1))
                return (
                  (i.f = i.inline = M),
                  n.highlightFormatting && (i.formatting = 'link'),
                  (f = C(i)) ? (f += ' ') : (f = ''),
                  f + o.linkEmail
                );
              if (
                n.xml &&
                '<' === s &&
                t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, !1)
              ) {
                var g = t.string.indexOf('>', t.pos);
                if (-1 != g) {
                  var x = t.string.substring(t.start, g);
                  /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x) && (i.md_inside = !0);
                }
                return t.backUp(1), (i.htmlState = e.startState(r)), v(t, i, b);
              }
              if (n.xml && '<' === s && t.match(/^\/\w*?>/)) return (i.md_inside = !1), 'tag';
              if ('*' === s || '_' === s) {
                for (var y = 1, w = 1 == t.pos ? ' ' : t.string.charAt(t.pos - 2); y < 3 && t.eat(s); ) y++;
                var k = t.peek() || ' ',
                  T = !/\s/.test(k) && (!m.test(k) || /\s/.test(w) || m.test(w)),
                  O = !/\s/.test(w) && (!m.test(w) || /\s/.test(k) || m.test(k)),
                  D = null,
                  N = null;
                if (
                  (y % 2 &&
                    (i.em || !T || ('*' !== s && O && !m.test(w))
                      ? i.em != s || !O || ('*' !== s && T && !m.test(k)) || (D = !1)
                      : (D = !0)),
                  y > 1 &&
                    (i.strong || !T || ('*' !== s && O && !m.test(w))
                      ? i.strong != s || !O || ('*' !== s && T && !m.test(k)) || (N = !1)
                      : (N = !0)),
                  null != N || null != D)
                )
                  return (
                    n.highlightFormatting && (i.formatting = null == D ? 'strong' : null == N ? 'em' : 'strong em'),
                    !0 === D && (i.em = s),
                    !0 === N && (i.strong = s),
                    (h = C(i)),
                    !1 === D && (i.em = !1),
                    !1 === N && (i.strong = !1),
                    h
                  );
              } else if (' ' === s && (t.eat('*') || t.eat('_'))) {
                if (' ' === t.peek()) return C(i);
                t.backUp(1);
              }
              if (n.strikethrough)
                if ('~' === s && t.eatWhile(s)) {
                  if (i.strikethrough)
                    return (
                      n.highlightFormatting && (i.formatting = 'strikethrough'), (h = C(i)), (i.strikethrough = !1), h
                    );
                  if (t.match(/^[^\s]/, !1))
                    return (i.strikethrough = !0), n.highlightFormatting && (i.formatting = 'strikethrough'), C(i);
                } else if (' ' === s && t.match(/^~~/, !0)) {
                  if (' ' === t.peek()) return C(i);
                  t.backUp(2);
                }
              if (n.emoji && ':' === s && t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
                (i.emoji = !0), n.highlightFormatting && (i.formatting = 'emoji');
                var A = C(i);
                return (i.emoji = !1), A;
              }
              return (
                ' ' === s &&
                  (t.match(/^ +$/, !1) ? i.trailingSpace++ : i.trailingSpace && (i.trailingSpaceNewLine = !0)),
                C(i)
              );
            }
            function M(e, t) {
              if ('>' === e.next()) {
                (t.f = t.inline = S), n.highlightFormatting && (t.formatting = 'link');
                var r = C(t);
                return r ? (r += ' ') : (r = ''), r + o.linkInline;
              }
              return e.match(/^[^>]+/, !0), o.linkInline;
            }
            function L(e, t) {
              if (e.eatSpace()) return null;
              var r,
                i = e.next();
              return '(' === i || '[' === i
                ? ((t.f = t.inline =
                    ((r = '(' === i ? ')' : ']'),
                    function(e, t) {
                      if (e.next() === r) {
                        (t.f = t.inline = S), n.highlightFormatting && (t.formatting = 'link-string');
                        var i = C(t);
                        return (t.linkHref = !1), i;
                      }
                      return e.match(T[r]), (t.linkHref = !0), C(t);
                    })),
                  n.highlightFormatting && (t.formatting = 'link-string'),
                  (t.linkHref = !0),
                  C(t))
                : 'error';
            }
            var T = {
              ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
              ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
            };
            function O(e, t) {
              return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                ? ((t.f = D), e.next(), n.highlightFormatting && (t.formatting = 'link'), (t.linkText = !0), C(t))
                : g(e, t, S);
            }
            function D(e, t) {
              if (e.match(/^\]:/, !0)) {
                (t.f = t.inline = N), n.highlightFormatting && (t.formatting = 'link');
                var r = C(t);
                return (t.linkText = !1), r;
              }
              return e.match(/^([^\]\\]|\\.)+/, !0), o.linkText;
            }
            function N(e, t) {
              return e.eatSpace()
                ? null
                : (e.match(/^[^\s]+/, !0),
                  void 0 === e.peek()
                    ? (t.linkTitle = !0)
                    : e.match(
                        /^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,
                        !0,
                      ),
                  (t.f = t.inline = S),
                  o.linkHref + ' url');
            }
            var A = {
              startState: function() {
                return {
                  f: y,
                  prevLine: { stream: null },
                  thisLine: { stream: null },
                  block: y,
                  htmlState: null,
                  indentation: 0,
                  inline: S,
                  text: k,
                  formatting: !1,
                  linkText: !1,
                  linkHref: !1,
                  linkTitle: !1,
                  code: 0,
                  em: !1,
                  strong: !1,
                  header: 0,
                  setext: 0,
                  hr: !1,
                  taskList: !1,
                  list: !1,
                  listStack: [],
                  quote: 0,
                  trailingSpace: 0,
                  trailingSpaceNewLine: !1,
                  strikethrough: !1,
                  emoji: !1,
                  fencedEndRE: null,
                };
              },
              copyState: function(t) {
                return {
                  f: t.f,
                  prevLine: t.prevLine,
                  thisLine: t.thisLine,
                  block: t.block,
                  htmlState: t.htmlState && e.copyState(r, t.htmlState),
                  indentation: t.indentation,
                  localMode: t.localMode,
                  localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
                  inline: t.inline,
                  text: t.text,
                  formatting: !1,
                  linkText: t.linkText,
                  linkTitle: t.linkTitle,
                  linkHref: t.linkHref,
                  code: t.code,
                  em: t.em,
                  strong: t.strong,
                  strikethrough: t.strikethrough,
                  emoji: t.emoji,
                  header: t.header,
                  setext: t.setext,
                  hr: t.hr,
                  taskList: t.taskList,
                  list: t.list,
                  listStack: t.listStack.slice(0),
                  quote: t.quote,
                  indentedCode: t.indentedCode,
                  trailingSpace: t.trailingSpace,
                  trailingSpaceNewLine: t.trailingSpaceNewLine,
                  md_inside: t.md_inside,
                  fencedEndRE: t.fencedEndRE,
                };
              },
              token: function(e, t) {
                if (((t.formatting = !1), e != t.thisLine.stream)) {
                  if (((t.header = 0), (t.hr = !1), e.match(/^\s*$/, !0))) return x(t), null;
                  if (
                    ((t.prevLine = t.thisLine),
                    (t.thisLine = { stream: e }),
                    (t.taskList = !1),
                    (t.trailingSpace = 0),
                    (t.trailingSpaceNewLine = !1),
                    !t.localState && ((t.f = t.block), t.f != b))
                  ) {
                    var n = e.match(/^\s*/, !0)[0].replace(/\t/g, '    ').length;
                    if (((t.indentation = n), (t.indentationDiff = null), n > 0)) return null;
                  }
                }
                return t.f(e, t);
              },
              innerMode: function(e) {
                return e.block == b
                  ? { state: e.htmlState, mode: r }
                  : e.localState
                  ? { state: e.localState, mode: e.localMode }
                  : { state: e, mode: A };
              },
              indent: function(t, n, i) {
                return t.block == b && r.indent
                  ? r.indent(t.htmlState, n, i)
                  : t.localState && t.localMode.indent
                  ? t.localMode.indent(t.localState, n, i)
                  : e.Pass;
              },
              blankLine: x,
              getType: C,
              blockCommentStart: '\x3c!--',
              blockCommentEnd: '--\x3e',
              closeBrackets: '()[]{}\'\'""``',
              fold: 'markdown',
            };
            return A;
          },
          'xml',
        ),
          e.defineMIME('text/markdown', 'markdown'),
          e.defineMIME('text/x-markdown', 'markdown');
      })(n('VrN/'), n('1eCo'), n('8EBN'));
    },
    'mUiM': function(e, t, n) {
      !(function(e) {
        'use strict';
        function t(e) {
          e.state.markedSelection &&
            e.operation(function() {
              !(function(e) {
                if (!e.somethingSelected()) return s(e);
                if (e.listSelections().length > 1) return l(e);
                var t = e.getCursor('start'),
                  n = e.getCursor('end'),
                  i = e.state.markedSelection;
                if (!i.length) return a(e, t, n);
                var c = i[0].find(),
                  u = i[i.length - 1].find();
                if (!c || !u || n.line - t.line <= r || o(t, u.to) >= 0 || o(n, c.from) <= 0) return l(e);
                for (; o(t, c.from) > 0; ) i.shift().clear(), (c = i[0].find());
                for (
                  o(t, c.from) < 0 &&
                  (c.to.line - t.line < r ? (i.shift().clear(), a(e, t, c.to, 0)) : a(e, t, c.from, 0));
                  o(n, u.to) < 0;

                )
                  i.pop().clear(), (u = i[i.length - 1].find());
                o(n, u.to) > 0 && (n.line - u.from.line < r ? (i.pop().clear(), a(e, u.from, n)) : a(e, u.to, n));
              })(e);
            });
        }
        function n(e) {
          e.state.markedSelection &&
            e.state.markedSelection.length &&
            e.operation(function() {
              s(e);
            });
        }
        e.defineOption('styleSelectedText', !1, function(r, i, o) {
          var a = o && o != e.Init;
          i && !a
            ? ((r.state.markedSelection = []),
              (r.state.markedSelectionStyle = 'string' == typeof i ? i : 'CodeMirror-selectedtext'),
              l(r),
              r.on('cursorActivity', t),
              r.on('change', n))
            : !i &&
              a &&
              (r.off('cursorActivity', t),
              r.off('change', n),
              s(r),
              (r.state.markedSelection = r.state.markedSelectionStyle = null));
        });
        var r = 8,
          i = e.Pos,
          o = e.cmpPos;
        function a(e, t, n, a) {
          if (0 != o(t, n))
            for (var s = e.state.markedSelection, l = e.state.markedSelectionStyle, c = t.line; ; ) {
              var u = c == t.line ? t : i(c, 0),
                d = c + r,
                h = d >= n.line,
                f = h ? n : i(d, 0),
                p = e.markText(u, f, { className: l });
              if ((null == a ? s.push(p) : s.splice(a++, 0, p), h)) break;
              c = d;
            }
        }
        function s(e) {
          for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) t[n].clear();
          t.length = 0;
        }
        function l(e) {
          s(e);
          for (var t = e.listSelections(), n = 0; n < t.length; n++) a(e, t[n].from(), t[n].to());
        }
      })(n('VrN/'));
    },
    'nrkQ': function(e, t, n) {
      !(function(e) {
        'use strict';
        e.overlayMode = function(t, n, r) {
          return {
            startState: function() {
              return {
                base: e.startState(t),
                overlay: e.startState(n),
                basePos: 0,
                baseCur: null,
                overlayPos: 0,
                overlayCur: null,
                streamSeen: null,
              };
            },
            copyState: function(r) {
              return {
                base: e.copyState(t, r.base),
                overlay: e.copyState(n, r.overlay),
                basePos: r.basePos,
                baseCur: null,
                overlayPos: r.overlayPos,
                overlayCur: null,
              };
            },
            token: function(e, i) {
              return (
                (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) &&
                  ((i.streamSeen = e), (i.basePos = i.overlayPos = e.start)),
                e.start == i.basePos && ((i.baseCur = t.token(e, i.base)), (i.basePos = e.pos)),
                e.start == i.overlayPos &&
                  ((e.pos = e.start), (i.overlayCur = n.token(e, i.overlay)), (i.overlayPos = e.pos)),
                (e.pos = Math.min(i.basePos, i.overlayPos)),
                null == i.overlayCur
                  ? i.baseCur
                  : (null != i.baseCur && i.overlay.combineTokens) || (r && null == i.overlay.combineTokens)
                  ? i.baseCur + ' ' + i.overlayCur
                  : i.overlayCur
              );
            },
            indent:
              t.indent &&
              function(e, n, r) {
                return t.indent(e.base, n, r);
              },
            electricChars: t.electricChars,
            innerMode: function(e) {
              return { state: e.base, mode: t };
            },
            blankLine: function(e) {
              var i, o;
              return (
                t.blankLine && (i = t.blankLine(e.base)),
                n.blankLine && (o = n.blankLine(e.overlay)),
                null == o ? i : r && null != i ? i + ' ' + o : o
              );
            },
          };
        };
      })(n('VrN/'));
    },
    'uTOq': function(e, t, n) {
      !(function(e) {
        'use strict';
        var t,
          n,
          r = e.Pos;
        function i(e, t) {
          for (
            var n = (function(e) {
                var t = e.flags;
                return null != t ? t : (e.ignoreCase ? 'i' : '') + (e.global ? 'g' : '') + (e.multiline ? 'm' : '');
              })(e),
              r = n,
              i = 0;
            i < t.length;
            i++
          )
            -1 == r.indexOf(t.charAt(i)) && (r += t.charAt(i));
          return n == r ? e : new RegExp(e.source, r);
        }
        function o(e, t, n) {
          t = i(t, 'g');
          for (var o = n.line, a = n.ch, s = e.lastLine(); o <= s; o++, a = 0) {
            t.lastIndex = a;
            var l = e.getLine(o),
              c = t.exec(l);
            if (c) return { from: r(o, c.index), to: r(o, c.index + c[0].length), match: c };
          }
        }
        function a(e, t, n) {
          if (
            !(function(e) {
              return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source);
            })(t)
          )
            return o(e, t, n);
          t = i(t, 'gm');
          for (var a, s = 1, l = n.line, c = e.lastLine(); l <= c; ) {
            for (var u = 0; u < s && !(l > c); u++) {
              var d = e.getLine(l++);
              a = null == a ? d : a + '\n' + d;
            }
            (s *= 2), (t.lastIndex = n.ch);
            var h = t.exec(a);
            if (h) {
              var f = a.slice(0, h.index).split('\n'),
                p = h[0].split('\n'),
                m = n.line + f.length - 1,
                g = f[f.length - 1].length;
              return {
                from: r(m, g),
                to: r(m + p.length - 1, 1 == p.length ? g + p[0].length : p[p.length - 1].length),
                match: h,
              };
            }
          }
        }
        function s(e, t) {
          for (var n, r = 0; ; ) {
            t.lastIndex = r;
            var i = t.exec(e);
            if (!i) return n;
            if ((r = (n = i).index + (n[0].length || 1)) == e.length) return n;
          }
        }
        function l(e, t, n) {
          t = i(t, 'g');
          for (var o = n.line, a = n.ch, l = e.firstLine(); o >= l; o--, a = -1) {
            var c = e.getLine(o);
            a > -1 && (c = c.slice(0, a));
            var u = s(c, t);
            if (u) return { from: r(o, u.index), to: r(o, u.index + u[0].length), match: u };
          }
        }
        function c(e, t, n) {
          t = i(t, 'gm');
          for (var o, a = 1, l = n.line, c = e.firstLine(); l >= c; ) {
            for (var u = 0; u < a; u++) {
              var d = e.getLine(l--);
              o = null == o ? d.slice(0, n.ch) : d + '\n' + o;
            }
            a *= 2;
            var h = s(o, t);
            if (h) {
              var f = o.slice(0, h.index).split('\n'),
                p = h[0].split('\n'),
                m = l + f.length,
                g = f[f.length - 1].length;
              return {
                from: r(m, g),
                to: r(m + p.length - 1, 1 == p.length ? g + p[0].length : p[p.length - 1].length),
                match: h,
              };
            }
          }
        }
        function u(e, t, n, r) {
          if (e.length == t.length) return n;
          for (var i = 0, o = n + Math.max(0, e.length - t.length); ; ) {
            if (i == o) return i;
            var a = (i + o) >> 1,
              s = r(e.slice(0, a)).length;
            if (s == n) return a;
            s > n ? (o = a) : (i = a + 1);
          }
        }
        function d(e, i, o, a) {
          if (!i.length) return null;
          var s = a ? t : n,
            l = s(i).split(/\r|\n\r?/);
          e: for (var c = o.line, d = o.ch, h = e.lastLine() + 1 - l.length; c <= h; c++, d = 0) {
            var f = e.getLine(c).slice(d),
              p = s(f);
            if (1 == l.length) {
              var m = p.indexOf(l[0]);
              if (-1 == m) continue e;
              return (
                (o = u(f, p, m, s) + d), { from: r(c, u(f, p, m, s) + d), to: r(c, u(f, p, m + l[0].length, s) + d) }
              );
            }
            var g = p.length - l[0].length;
            if (p.slice(g) == l[0]) {
              for (var v = 1; v < l.length - 1; v++) if (s(e.getLine(c + v)) != l[v]) continue e;
              var x = e.getLine(c + l.length - 1),
                y = s(x),
                b = l[l.length - 1];
              if (y.slice(0, b.length) == b)
                return { from: r(c, u(f, p, g, s) + d), to: r(c + l.length - 1, u(x, y, b.length, s)) };
            }
          }
        }
        function h(e, i, o, a) {
          if (!i.length) return null;
          var s = a ? t : n,
            l = s(i).split(/\r|\n\r?/);
          e: for (var c = o.line, d = o.ch, h = e.firstLine() - 1 + l.length; c >= h; c--, d = -1) {
            var f = e.getLine(c);
            d > -1 && (f = f.slice(0, d));
            var p = s(f);
            if (1 == l.length) {
              var m = p.lastIndexOf(l[0]);
              if (-1 == m) continue e;
              return { from: r(c, u(f, p, m, s)), to: r(c, u(f, p, m + l[0].length, s)) };
            }
            var g = l[l.length - 1];
            if (p.slice(0, g.length) == g) {
              var v = 1;
              for (o = c - l.length + 1; v < l.length - 1; v++) if (s(e.getLine(o + v)) != l[v]) continue e;
              var x = e.getLine(c + 1 - l.length),
                y = s(x);
              if (y.slice(y.length - l[0].length) == l[0])
                return {
                  from: r(c + 1 - l.length, u(x, y, x.length - l[0].length, s)),
                  to: r(c, u(f, p, g.length, s)),
                };
            }
          }
        }
        function f(e, t, n, s) {
          var u;
          (this.atOccurrence = !1),
            (this.doc = e),
            (n = n ? e.clipPos(n) : r(0, 0)),
            (this.pos = { from: n, to: n }),
            'object' == typeof s ? (u = s.caseFold) : ((u = s), (s = null)),
            'string' == typeof t
              ? (null == u && (u = !1),
                (this.matches = function(n, r) {
                  return (n ? h : d)(e, t, r, u);
                }))
              : ((t = i(t, 'gm')),
                (this.matches =
                  s && !1 === s.multiline
                    ? function(n, r) {
                        return (n ? l : o)(e, t, r);
                      }
                    : function(n, r) {
                        return (n ? c : a)(e, t, r);
                      }));
        }
        String.prototype.normalize
          ? ((t = function(e) {
              return e.normalize('NFD').toLowerCase();
            }),
            (n = function(e) {
              return e.normalize('NFD');
            }))
          : ((t = function(e) {
              return e.toLowerCase();
            }),
            (n = function(e) {
              return e;
            })),
          (f.prototype = {
            findNext: function() {
              return this.find(!1);
            },
            findPrevious: function() {
              return this.find(!0);
            },
            find: function(t) {
              for (
                var n = this.matches(t, this.doc.clipPos(t ? this.pos.from : this.pos.to));
                n && 0 == e.cmpPos(n.from, n.to);

              )
                t
                  ? n.from.ch
                    ? (n.from = r(n.from.line, n.from.ch - 1))
                    : (n =
                        n.from.line == this.doc.firstLine()
                          ? null
                          : this.matches(t, this.doc.clipPos(r(n.from.line - 1))))
                  : n.to.ch < this.doc.getLine(n.to.line).length
                  ? (n.to = r(n.to.line, n.to.ch + 1))
                  : (n = n.to.line == this.doc.lastLine() ? null : this.matches(t, r(n.to.line + 1, 0)));
              if (n) return (this.pos = n), (this.atOccurrence = !0), this.pos.match || !0;
              var i = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
              return (this.pos = { from: i, to: i }), (this.atOccurrence = !1);
            },
            from: function() {
              if (this.atOccurrence) return this.pos.from;
            },
            to: function() {
              if (this.atOccurrence) return this.pos.to;
            },
            replace: function(t, n) {
              if (this.atOccurrence) {
                var i = e.splitLines(t);
                this.doc.replaceRange(i, this.pos.from, this.pos.to, n),
                  (this.pos.to = r(
                    this.pos.from.line + i.length - 1,
                    i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0),
                  ));
              }
            },
          }),
          e.defineExtension('getSearchCursor', function(e, t, n) {
            return new f(this.doc, e, t, n);
          }),
          e.defineDocExtension('getSearchCursor', function(e, t, n) {
            return new f(this, e, t, n);
          }),
          e.defineExtension('selectMatches', function(t, n) {
            for (
              var r = [], i = this.getSearchCursor(t, this.getCursor('from'), n);
              i.findNext() && !(e.cmpPos(i.to(), this.getCursor('to')) > 0);

            )
              r.push({ anchor: i.from(), head: i.to() });
            r.length && this.setSelections(r, 0);
          });
      })(n('VrN/'));
    },
  },
]);
