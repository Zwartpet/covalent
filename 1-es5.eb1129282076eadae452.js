function _possibleConstructorReturn(t, e) {
  return !e || ('object' != typeof e && 'function' != typeof e) ? _assertThisInitialized(t) : e;
}
function _assertThisInitialized(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function _getPrototypeOf(t) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var i = 0; i < e.length; i++) {
    var r = e[i];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function _createClass(t, e, i) {
  return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '+TT/': function(t, e, i) {
      var r = i('bYtY'),
        n = i('mFDi'),
        o = i('OELB').parsePercent,
        a = i('7aKB'),
        s = r.each,
        l = ['left', 'right', 'top', 'bottom', 'width', 'height'],
        c = [
          ['width', 'left', 'right'],
          ['height', 'top', 'bottom'],
        ];
      function h(t, e, i, r, n) {
        var o = 0,
          a = 0;
        null == r && (r = 1 / 0), null == n && (n = 1 / 0);
        var s = 0;
        e.eachChild(function(l, c) {
          var h,
            u,
            d = l.position,
            f = l.getBoundingRect(),
            p = e.childAt(c + 1),
            g = p && p.getBoundingRect();
          if ('horizontal' === t) {
            var m = f.width + (g ? -g.x + f.x : 0);
            (h = o + m) > r || l.newline
              ? ((o = 0), (h = m), (a += s + i), (s = f.height))
              : (s = Math.max(s, f.height));
          } else {
            var y = f.height + (g ? -g.y + f.y : 0);
            (u = a + y) > n || l.newline ? ((o += s + i), (a = 0), (u = y), (s = f.width)) : (s = Math.max(s, f.width));
          }
          l.newline || ((d[0] = o), (d[1] = a), 'horizontal' === t ? (o = h + i) : (a = u + i));
        });
      }
      var u = h,
        d = r.curry(h, 'vertical'),
        f = r.curry(h, 'horizontal');
      function p(t, e, i) {
        i = a.normalizeCssArray(i || 0);
        var r = e.width,
          s = e.height,
          l = o(t.left, r),
          c = o(t.top, s),
          h = o(t.right, r),
          u = o(t.bottom, s),
          d = o(t.width, r),
          f = o(t.height, s),
          p = i[2] + i[0],
          g = i[1] + i[3],
          m = t.aspect;
        switch (
          (isNaN(d) && (d = r - h - g - l),
          isNaN(f) && (f = s - u - p - c),
          null != m &&
            (isNaN(d) && isNaN(f) && (m > r / s ? (d = 0.8 * r) : (f = 0.8 * s)),
            isNaN(d) && (d = m * f),
            isNaN(f) && (f = d / m)),
          isNaN(l) && (l = r - h - d - g),
          isNaN(c) && (c = s - u - f - p),
          t.left || t.right)
        ) {
          case 'center':
            l = r / 2 - d / 2 - i[3];
            break;
          case 'right':
            l = r - d - g;
        }
        switch (t.top || t.bottom) {
          case 'middle':
          case 'center':
            c = s / 2 - f / 2 - i[0];
            break;
          case 'bottom':
            c = s - f - p;
        }
        (l = l || 0), (c = c || 0), isNaN(d) && (d = r - g - l - (h || 0)), isNaN(f) && (f = s - p - c - (u || 0));
        var y = new n(l + i[3], c + i[0], d, f);
        return (y.margin = i), y;
      }
      function g(t, e) {
        return (
          e &&
            t &&
            s(l, function(i) {
              e.hasOwnProperty(i) && (t[i] = e[i]);
            }),
          t
        );
      }
      (e.LOCATION_PARAMS = l),
        (e.HV_NAMES = c),
        (e.box = u),
        (e.vbox = d),
        (e.hbox = f),
        (e.getAvailableSize = function(t, e, i) {
          var r = e.width,
            n = e.height,
            s = o(t.x, r),
            l = o(t.y, n),
            c = o(t.x2, r),
            h = o(t.y2, n);
          return (
            (isNaN(s) || isNaN(parseFloat(t.x))) && (s = 0),
            (isNaN(c) || isNaN(parseFloat(t.x2))) && (c = r),
            (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0),
            (isNaN(h) || isNaN(parseFloat(t.y2))) && (h = n),
            (i = a.normalizeCssArray(i || 0)),
            { width: Math.max(c - s - i[1] - i[3], 0), height: Math.max(h - l - i[0] - i[2], 0) }
          );
        }),
        (e.getLayoutRect = p),
        (e.positionElement = function(t, e, i, o, a) {
          var s = !a || !a.hv || a.hv[0],
            l = !a || !a.hv || a.hv[1],
            c = (a && a.boundingMode) || 'all';
          if (s || l) {
            var h;
            if ('raw' === c) h = 'group' === t.type ? new n(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
            else if (((h = t.getBoundingRect()), t.needLocalTransform())) {
              var u = t.getLocalTransform();
              (h = h.clone()).applyTransform(u);
            }
            e = p(r.defaults({ width: h.width, height: h.height }, e), i, o);
            var d = t.position,
              f = s ? e.x - h.x : 0,
              g = l ? e.y - h.y : 0;
            t.attr('position', 'raw' === c ? [f, g] : [d[0] + f, d[1] + g]);
          }
        }),
        (e.sizeCalculable = function(t, e) {
          return null != t[c[e][0]] || (null != t[c[e][1]] && null != t[c[e][2]]);
        }),
        (e.mergeLayoutParam = function(t, e, i) {
          !r.isObject(i) && (i = {});
          var n = i.ignoreSize;
          !r.isArray(n) && (n = [n, n]);
          var o = l(c[0], 0),
            a = l(c[1], 1);
          function l(i, r) {
            var o = {},
              a = 0,
              l = {},
              c = 0;
            if (
              (s(i, function(e) {
                l[e] = t[e];
              }),
              s(i, function(t) {
                h(e, t) && (o[t] = l[t] = e[t]), u(o, t) && a++, u(l, t) && c++;
              }),
              n[r])
            )
              return u(e, i[1]) ? (l[i[2]] = null) : u(e, i[2]) && (l[i[1]] = null), l;
            if (2 !== c && a) {
              if (a >= 2) return o;
              for (var d = 0; d < i.length; d++) {
                var f = i[d];
                if (!h(o, f) && h(t, f)) {
                  o[f] = t[f];
                  break;
                }
              }
              return o;
            }
            return l;
          }
          function h(t, e) {
            return t.hasOwnProperty(e);
          }
          function u(t, e) {
            return null != t[e] && 'auto' !== t[e];
          }
          function d(t, e, i) {
            s(t, function(t) {
              e[t] = i[t];
            });
          }
          d(c[0], t, o), d(c[1], t, a);
        }),
        (e.getLayoutParams = function(t) {
          return g({}, t);
        }),
        (e.copyLayoutParams = g);
    },
    '+rIm': function(t, e, i) {
      var r = i('bYtY'),
        n = r.retrieve,
        o = r.defaults,
        a = r.extend,
        s = r.each,
        l = i('7aKB'),
        c = i('IwbS'),
        h = i('Qxkt'),
        u = i('OELB'),
        d = u.isRadianAroundZero,
        f = u.remRadian,
        p = i('oVpE').createSymbol,
        g = i('Fofx'),
        m = i('QBsz').applyTransform,
        y = i('aX7z').shouldShowAllLabels,
        v = Math.PI;
      function x(t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex };
        return (e[t.mainType + 'Index'] = t.componentIndex), e;
      }
      var b = function(t, e) {
        (this.opt = e),
          (this.axisModel = t),
          o(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }),
          (this.group = new c.Group());
        var i = new c.Group({ position: e.position.slice(), rotation: e.rotation });
        i.updateTransform(), (this._transform = i.transform), (this._dumbGroup = i);
      };
      b.prototype = {
        constructor: b,
        hasBuilder: function(t) {
          return !!_[t];
        },
        add: function(t) {
          _[t].call(this);
        },
        getGroup: function() {
          return this.group;
        },
      };
      var _ = {
          axisLine: function() {
            var t = this.opt,
              e = this.axisModel;
            if (e.get('axisLine.show')) {
              var i = this.axisModel.axis.getExtent(),
                r = this._transform,
                n = [i[0], 0],
                o = [i[1], 0];
              r && (m(n, n, r), m(o, o, r));
              var l = a({ lineCap: 'round' }, e.getModel('axisLine.lineStyle').getLineStyle());
              this.group.add(
                new c.Line(
                  c.subPixelOptimizeLine({
                    anid: 'line',
                    shape: { x1: n[0], y1: n[1], x2: o[0], y2: o[1] },
                    style: l,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1,
                  }),
                ),
              );
              var h = e.get('axisLine.symbol'),
                u = e.get('axisLine.symbolSize'),
                d = e.get('axisLine.symbolOffset') || 0;
              if (('number' == typeof d && (d = [d, d]), null != h)) {
                'string' == typeof h && (h = [h, h]), ('string' != typeof u && 'number' != typeof u) || (u = [u, u]);
                var f = u[0],
                  g = u[1];
                s(
                  [
                    { rotate: t.rotation + Math.PI / 2, offset: d[0], r: 0 },
                    {
                      rotate: t.rotation - Math.PI / 2,
                      offset: d[1],
                      r: Math.sqrt((n[0] - o[0]) * (n[0] - o[0]) + (n[1] - o[1]) * (n[1] - o[1])),
                    },
                  ],
                  function(e, i) {
                    if ('none' !== h[i] && null != h[i]) {
                      var r = p(h[i], -f / 2, -g / 2, f, g, l.stroke, !0),
                        o = e.r + e.offset,
                        a = [n[0] + o * Math.cos(t.rotation), n[1] - o * Math.sin(t.rotation)];
                      r.attr({ rotation: e.rotate, position: a, silent: !0, z2: 11 }), this.group.add(r);
                    }
                  },
                  this,
                );
              }
            }
          },
          axisTickLabel: function() {
            var t = this.axisModel,
              e = this.opt,
              i = (function(t, e, i) {
                var r = e.axis;
                if (e.get('axisTick.show') && !r.scale.isBlank()) {
                  for (
                    var n = e.getModel('axisTick'),
                      a = n.getModel('lineStyle'),
                      s = n.get('length'),
                      l = r.getTicksCoords(),
                      h = [],
                      u = [],
                      d = t._transform,
                      f = [],
                      p = 0;
                    p < l.length;
                    p++
                  ) {
                    var g = l[p].coord;
                    (h[0] = g), (h[1] = 0), (u[0] = g), (u[1] = i.tickDirection * s), d && (m(h, h, d), m(u, u, d));
                    var y = new c.Line(
                      c.subPixelOptimizeLine({
                        anid: 'tick_' + l[p].tickValue,
                        shape: { x1: h[0], y1: h[1], x2: u[0], y2: u[1] },
                        style: o(a.getLineStyle(), { stroke: e.get('axisLine.lineStyle.color') }),
                        z2: 2,
                        silent: !0,
                      }),
                    );
                    t.group.add(y), f.push(y);
                  }
                  return f;
                }
              })(this, t, e),
              r = (function(t, e, i) {
                var r = e.axis;
                if (n(i.axisLabelShow, e.get('axisLabel.show')) && !r.scale.isBlank()) {
                  var o = e.getModel('axisLabel'),
                    a = o.get('margin'),
                    l = r.getViewLabels(),
                    u = ((n(i.labelRotate, o.get('rotate')) || 0) * v) / 180,
                    d = S(i.rotation, u, i.labelDirection),
                    f = e.getCategories(!0),
                    p = [],
                    g = w(e),
                    m = e.get('triggerEvent');
                  return (
                    s(l, function(n, s) {
                      var l = n.tickValue,
                        u = n.formattedLabel,
                        y = n.rawLabel,
                        v = o;
                      f && f[l] && f[l].textStyle && (v = new h(f[l].textStyle, o, e.ecModel));
                      var b = v.getTextColor() || e.get('axisLine.lineStyle.color'),
                        _ = r.dataToCoord(l),
                        S = new c.Text({
                          anid: 'label_' + l,
                          position: [_, i.labelOffset + i.labelDirection * a],
                          rotation: d.rotation,
                          silent: g,
                          z2: 10,
                        });
                      c.setTextStyle(S.style, v, {
                        text: u,
                        textAlign: v.getShallow('align', !0) || d.textAlign,
                        textVerticalAlign:
                          v.getShallow('verticalAlign', !0) || v.getShallow('baseline', !0) || d.textVerticalAlign,
                        textFill:
                          'function' == typeof b
                            ? b('category' === r.type ? y : 'value' === r.type ? l + '' : l, s)
                            : b,
                      }),
                        m && ((S.eventData = x(e)), (S.eventData.targetType = 'axisLabel'), (S.eventData.value = y)),
                        t._dumbGroup.add(S),
                        S.updateTransform(),
                        p.push(S),
                        t.group.add(S),
                        S.decomposeTransform();
                    }),
                    p
                  );
                }
              })(this, t, e);
            !(function(t, e, i) {
              if (!y(t.axis)) {
                var r = t.get('axisLabel.showMinLabel'),
                  n = t.get('axisLabel.showMaxLabel'),
                  o = (e = e || [])[0],
                  a = e[1],
                  s = e[e.length - 1],
                  l = e[e.length - 2],
                  c = (i = i || [])[0],
                  h = i[1],
                  u = i[i.length - 1],
                  d = i[i.length - 2];
                !1 === r ? (C(o), C(c)) : T(o, a) && (r ? (C(a), C(h)) : (C(o), C(c))),
                  !1 === n ? (C(s), C(u)) : T(l, s) && (n ? (C(l), C(d)) : (C(s), C(u)));
              }
            })(t, r, i);
          },
          axisName: function() {
            var t = this.opt,
              e = this.axisModel,
              i = n(t.axisName, e.get('name'));
            if (i) {
              var r,
                o,
                s = e.get('nameLocation'),
                h = t.nameDirection,
                u = e.getModel('nameTextStyle'),
                p = e.get('nameGap') || 0,
                g = this.axisModel.axis.getExtent(),
                m = g[0] > g[1] ? -1 : 1,
                y = [
                  'start' === s ? g[0] - m * p : 'end' === s ? g[1] + m * p : (g[0] + g[1]) / 2,
                  k(s) ? t.labelOffset + h * p : 0,
                ],
                b = e.get('nameRotate');
              null != b && (b = (b * v) / 180),
                k(s)
                  ? (r = S(t.rotation, null != b ? b : t.rotation, h))
                  : ((r = (function(t, e, i, r) {
                      var n,
                        o,
                        a = f(i - t.rotation),
                        s = r[0] > r[1],
                        l = ('start' === e && !s) || ('start' !== e && s);
                      return (
                        d(a - v / 2)
                          ? ((o = l ? 'bottom' : 'top'), (n = 'center'))
                          : d(a - 1.5 * v)
                          ? ((o = l ? 'top' : 'bottom'), (n = 'center'))
                          : ((o = 'middle'),
                            (n = a < 1.5 * v && a > v / 2 ? (l ? 'left' : 'right') : l ? 'right' : 'left')),
                        { rotation: a, textAlign: n, textVerticalAlign: o }
                      );
                    })(t, s, b || 0, g)),
                    null != (o = t.axisNameAvailableWidth) &&
                      ((o = Math.abs(o / Math.sin(r.rotation))), !isFinite(o) && (o = null)));
              var _ = u.getFont(),
                C = e.get('nameTruncate', !0) || {},
                T = C.ellipsis,
                M = n(t.nameTruncateMaxWidth, C.maxWidth, o),
                A = null != T && null != M ? l.truncateText(i, M, _, T, { minChar: 2, placeholder: C.placeholder }) : i,
                D = e.get('tooltip', !0),
                I = e.mainType,
                O = { componentType: I, name: i, $vars: ['name'] };
              O[I + 'Index'] = e.componentIndex;
              var L = new c.Text({
                anid: 'name',
                __fullText: i,
                __truncatedText: A,
                position: y,
                rotation: r.rotation,
                silent: w(e),
                z2: 1,
                tooltip:
                  D && D.show
                    ? a(
                        {
                          content: i,
                          formatter: function() {
                            return i;
                          },
                          formatterParams: O,
                        },
                        D,
                      )
                    : null,
              });
              c.setTextStyle(L.style, u, {
                text: A,
                textFont: _,
                textFill: u.getTextColor() || e.get('axisLine.lineStyle.color'),
                textAlign: r.textAlign,
                textVerticalAlign: r.textVerticalAlign,
              }),
                e.get('triggerEvent') &&
                  ((L.eventData = x(e)), (L.eventData.targetType = 'axisName'), (L.eventData.name = i)),
                this._dumbGroup.add(L),
                L.updateTransform(),
                this.group.add(L),
                L.decomposeTransform();
            }
          },
        },
        S = (b.innerTextLayout = function(t, e, i) {
          var r,
            n,
            o = f(e - t);
          return (
            d(o)
              ? ((n = i > 0 ? 'top' : 'bottom'), (r = 'center'))
              : d(o - v)
              ? ((n = i > 0 ? 'bottom' : 'top'), (r = 'center'))
              : ((n = 'middle'), (r = o > 0 && o < v ? (i > 0 ? 'right' : 'left') : i > 0 ? 'left' : 'right')),
            { rotation: o, textAlign: r, textVerticalAlign: n }
          );
        });
      function w(t) {
        var e = t.get('tooltip');
        return t.get('silent') || !(t.get('triggerEvent') || (e && e.show));
      }
      function C(t) {
        t && (t.ignore = !0);
      }
      function T(t, e, i) {
        var r = t && t.getBoundingRect().clone(),
          n = e && e.getBoundingRect().clone();
        if (r && n) {
          var o = g.identity([]);
          return (
            g.rotate(o, o, -t.rotation),
            r.applyTransform(g.mul([], o, t.getLocalTransform())),
            n.applyTransform(g.mul([], o, e.getLocalTransform())),
            r.intersect(n)
          );
        }
      }
      function k(t) {
        return 'middle' === t || 'center' === t;
      }
      t.exports = b;
    },
    '+wW9': function(t, e, i) {
      var r = i('bYtY'),
        n = r.each,
        o = r.isArray,
        a = r.isObject,
        s = i('JuEJ'),
        l = i('4NO4').normalizeToArray;
      function c(t) {
        n(h, function(e) {
          e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
        });
      }
      var h = [
          ['x', 'left'],
          ['y', 'top'],
          ['x2', 'right'],
          ['y2', 'bottom'],
        ],
        u = ['grid', 'geo', 'parallel', 'legend', 'toolbox', 'title', 'visualMap', 'dataZoom', 'timeline'];
      t.exports = function(t, e) {
        s(t, e),
          (t.series = l(t.series)),
          n(t.series, function(t) {
            if (a(t)) {
              var e = t.type;
              if (
                (('pie' !== e && 'gauge' !== e) || (null != t.clockWise && (t.clockwise = t.clockWise)), 'gauge' === e)
              ) {
                var i = (function(t, e) {
                  e = e.split(',');
                  for (var i = t, r = 0; r < e.length && null != (i = i && i[e[r]]); r++);
                  return i;
                })(t, 'pointer.color');
                null != i &&
                  (function(t, e, i, r) {
                    e = e.split(',');
                    for (var n, o = t, a = 0; a < e.length - 1; a++) null == o[(n = e[a])] && (o[n] = {}), (o = o[n]);
                    null == o[e[a]] && (o[e[a]] = i);
                  })(t, 'itemStyle.normal.color', i);
              }
              c(t);
            }
          }),
          t.dataRange && (t.visualMap = t.dataRange),
          n(u, function(e) {
            var i = t[e];
            i &&
              (o(i) || (i = [i]),
              n(i, function(t) {
                c(t);
              }));
          });
      };
    },
    '/WM3': function(t, e, i) {
      var r = i('QuXc');
      t.exports = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
          var i = t.getData(),
            n = (t.visualColorAccessPath || 'itemStyle.color').split('.'),
            o = t.get(n) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
          if ((i.setVisual('color', o), !e.isSeriesFiltered(t)))
            return (
              'function' != typeof o ||
                o instanceof r ||
                i.each(function(e) {
                  i.setItemVisual(e, 'color', o(t.getDataParams(e)));
                }),
              {
                dataEach: i.hasItemOption
                  ? function(t, e) {
                      var i = t.getItemModel(e).get(n, !0);
                      null != i && t.setItemVisual(e, 'color', i);
                    }
                  : null,
              }
            );
        },
      };
    },
    '/iHx': function(t, e, i) {
      var r = i('6GrX'),
        n = i('IwbS'),
        o = ['textStyle', 'color'];
      t.exports = {
        getTextColor: function(t) {
          var e = this.ecModel;
          return this.getShallow('color') || (!t && e ? e.get(o) : null);
        },
        getFont: function() {
          return n.getFont(
            {
              fontStyle: this.getShallow('fontStyle'),
              fontWeight: this.getShallow('fontWeight'),
              fontSize: this.getShallow('fontSize'),
              fontFamily: this.getShallow('fontFamily'),
            },
            this.ecModel,
          );
        },
        getTextRect: function(t) {
          return r.getBoundingRect(
            t,
            this.getFont(),
            this.getShallow('align'),
            this.getShallow('verticalAlign') || this.getShallow('baseline'),
            this.getShallow('padding'),
            this.getShallow('lineHeight'),
            this.getShallow('rich'),
            this.getShallow('truncateText'),
          );
        },
      };
    },
    '/y7N': function(t, e, i) {
      var r = i('bYtY'),
        n = i('IwbS'),
        o = i('6GrX'),
        a = i('7aKB'),
        s = i('Fofx'),
        l = i('aX7z'),
        c = i('+rIm');
      function h(t, e, i, r, n) {
        var s = u(i.get('value'), e.axis, e.ecModel, i.get('seriesDataIndices'), {
            precision: i.get('label.precision'),
            formatter: i.get('label.formatter'),
          }),
          l = i.getModel('label'),
          c = a.normalizeCssArray(l.get('padding') || 0),
          h = l.getFont(),
          d = o.getBoundingRect(s, h),
          f = n.position,
          p = d.width + c[1] + c[3],
          g = d.height + c[0] + c[2],
          m = n.align;
        'right' === m && (f[0] -= p), 'center' === m && (f[0] -= p / 2);
        var y = n.verticalAlign;
        'bottom' === y && (f[1] -= g),
          'middle' === y && (f[1] -= g / 2),
          (function(t, e, i, r) {
            var n = r.getWidth(),
              o = r.getHeight();
            (t[0] = Math.min(t[0] + e, n) - e),
              (t[1] = Math.min(t[1] + i, o) - i),
              (t[0] = Math.max(t[0], 0)),
              (t[1] = Math.max(t[1], 0));
          })(f, p, g, r);
        var v = l.get('backgroundColor');
        (v && 'auto' !== v) || (v = e.get('axisLine.lineStyle.color')),
          (t.label = {
            shape: { x: 0, y: 0, width: p, height: g, r: l.get('borderRadius') },
            position: f.slice(),
            style: {
              text: s,
              textFont: h,
              textFill: l.getTextColor(),
              textPosition: 'inside',
              fill: v,
              stroke: l.get('borderColor') || 'transparent',
              lineWidth: l.get('borderWidth') || 0,
              shadowBlur: l.get('shadowBlur'),
              shadowColor: l.get('shadowColor'),
              shadowOffsetX: l.get('shadowOffsetX'),
              shadowOffsetY: l.get('shadowOffsetY'),
            },
            z2: 10,
          });
      }
      function u(t, e, i, n, o) {
        t = e.scale.parse(t);
        var a = e.scale.getLabel(t, { precision: o.precision }),
          s = o.formatter;
        if (s) {
          var c = { value: l.getAxisRawValue(e, t), seriesData: [] };
          r.each(n, function(t) {
            var e = i.getSeriesByIndex(t.seriesIndex),
              r = e && e.getDataParams(t.dataIndexInside);
            r && c.seriesData.push(r);
          }),
            r.isString(s) ? (a = s.replace('{value}', a)) : r.isFunction(s) && (a = s(c));
        }
        return a;
      }
      function d(t, e, i) {
        var r = s.create();
        return (
          s.rotate(r, r, i.rotation),
          s.translate(r, r, i.position),
          n.applyTransform([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], r)
        );
      }
      (e.buildElStyle = function(t) {
        var e,
          i = t.get('type'),
          r = t.getModel(i + 'Style');
        return (
          'line' === i
            ? ((e = r.getLineStyle()).fill = null)
            : 'shadow' === i && ((e = r.getAreaStyle()).stroke = null),
          e
        );
      }),
        (e.buildLabelElOption = h),
        (e.getValueLabel = u),
        (e.getTransformedPosition = d),
        (e.buildCartesianSingleLabelElOption = function(t, e, i, r, n, o) {
          var a = c.innerTextLayout(i.rotation, 0, i.labelDirection);
          (i.labelMargin = n.get('label.margin')),
            h(e, r, n, o, { position: d(r.axis, t, i), align: a.textAlign, verticalAlign: a.textVerticalAlign });
        }),
        (e.makeLineShape = function(t, e, i) {
          return { x1: t[(i = i || 0)], y1: t[1 - i], x2: e[i], y2: e[1 - i] };
        }),
        (e.makeRectShape = function(t, e, i) {
          return { x: t[(i = i || 0)], y: t[1 - i], width: e[i], height: e[1 - i] };
        }),
        (e.makeSectorShape = function(t, e, i, r, n, o) {
          return { cx: t, cy: e, r0: i, r: r, startAngle: n, endAngle: o, clockwise: !0 };
        });
    },
    '0V0F': function(t, e, i) {
      var r = i('bYtY'),
        n = r.createHashMap,
        o = r.each;
      function a(t) {
        o(t, function(e, i) {
          var r = [],
            n = [NaN, NaN],
            o = e.data,
            a = e.isStackedByIndex,
            s = o.map([e.stackResultDimension, e.stackedOverDimension], function(s, l, c) {
              var h,
                u,
                d = o.get(e.stackedDimension, c);
              if (isNaN(d)) return n;
              a ? (u = o.getRawIndex(c)) : (h = o.get(e.stackedByDimension, c));
              for (var f = NaN, p = i - 1; p >= 0; p--) {
                var g = t[p];
                if ((a || (u = g.data.rawIndexOf(g.stackedByDimension, h)), u >= 0)) {
                  var m = g.data.getByRawIndex(g.stackResultDimension, u);
                  if ((d >= 0 && m > 0) || (d <= 0 && m < 0)) {
                    (d += m), (f = m);
                    break;
                  }
                }
              }
              return (r[0] = d), (r[1] = f), r;
            });
          o.hostModel.setData(s), (e.data = s);
        });
      }
      t.exports = function(t) {
        var e = n();
        t.eachSeries(function(t) {
          var i = t.get('stack');
          if (i) {
            var r = e.get(i) || e.set(i, []),
              n = t.getData(),
              o = {
                stackResultDimension: n.getCalculationInfo('stackResultDimension'),
                stackedOverDimension: n.getCalculationInfo('stackedOverDimension'),
                stackedDimension: n.getCalculationInfo('stackedDimension'),
                stackedByDimension: n.getCalculationInfo('stackedByDimension'),
                isStackedByIndex: n.getCalculationInfo('isStackedByIndex'),
                data: n,
                seriesModel: t,
              };
            if (!o.stackedDimension || (!o.isStackedByIndex && !o.stackedByDimension)) return;
            r.length && n.setCalculationInfo('stackedOnSeries', r[r.length - 1].seriesModel), r.push(o);
          }
        }),
          e.each(a);
      };
    },
    '0s+r': function(t, e, i) {
      var r = i('bYtY'),
        n = i('QBsz'),
        o = i('y23F'),
        a = i('H6uX'),
        s = i('YH21'),
        l = i('C0SR'),
        c = 'silent';
      function h(t) {
        s.stop(this.event);
      }
      function u() {}
      u.prototype.dispose = function() {};
      var d = ['click', 'dblclick', 'mousewheel', 'mouseout', 'mouseup', 'mousedown', 'mousemove', 'contextmenu'],
        f = function(t, e, i, r) {
          a.call(this),
            (this.storage = t),
            (this.painter = e),
            (this.painterRoot = r),
            (i = i || new u()),
            (this.proxy = null),
            (this._hovered = {}),
            o.call(this),
            this.setHandlerProxy(i);
        };
      function p(t, e, i) {
        if (t[t.rectHover ? 'rectContain' : 'contain'](e, i)) {
          for (var r, n = t; n; ) {
            if (n.clipPath && !n.clipPath.contain(e, i)) return !1;
            n.silent && (r = !0), (n = n.parent);
          }
          return !r || c;
        }
        return !1;
      }
      (f.prototype = {
        constructor: f,
        setHandlerProxy: function(t) {
          this.proxy && this.proxy.dispose(),
            t &&
              (r.each(
                d,
                function(e) {
                  t.on && t.on(e, this[e], this);
                },
                this,
              ),
              (t.handler = this)),
            (this.proxy = t);
        },
        mousemove: function(t) {
          var e = t.zrX,
            i = t.zrY,
            r = this._hovered,
            n = r.target;
          n && !n.__zr && (n = (r = this.findHover(r.x, r.y)).target);
          var o = (this._hovered = this.findHover(e, i)),
            a = o.target,
            s = this.proxy;
          s.setCursor && s.setCursor(a ? a.cursor : 'default'),
            n && a !== n && this.dispatchToElement(r, 'mouseout', t),
            this.dispatchToElement(o, 'mousemove', t),
            a && a !== n && this.dispatchToElement(o, 'mouseover', t);
        },
        mouseout: function(t) {
          this.dispatchToElement(this._hovered, 'mouseout', t);
          var e,
            i = t.toElement || t.relatedTarget;
          do {
            i = i && i.parentNode;
          } while (i && 9 !== i.nodeType && !(e = i === this.painterRoot));
          !e && this.trigger('globalout', { event: t });
        },
        resize: function(t) {
          this._hovered = {};
        },
        dispatch: function(t, e) {
          var i = this[t];
          i && i.call(this, e);
        },
        dispose: function() {
          this.proxy.dispose(), (this.storage = this.proxy = this.painter = null);
        },
        setCursorStyle: function(t) {
          var e = this.proxy;
          e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function(t, e, i) {
          var r = (t = t || {}).target;
          if (!r || !r.silent) {
            for (
              var n = 'on' + e,
                o = (function(t, e, i) {
                  return {
                    type: t,
                    event: i,
                    target: e.target,
                    topTarget: e.topTarget,
                    cancelBubble: !1,
                    offsetX: i.zrX,
                    offsetY: i.zrY,
                    gestureEvent: i.gestureEvent,
                    pinchX: i.pinchX,
                    pinchY: i.pinchY,
                    pinchScale: i.pinchScale,
                    wheelDelta: i.zrDelta,
                    zrByTouch: i.zrByTouch,
                    which: i.which,
                    stop: h,
                  };
                })(e, t, i);
              r && (r[n] && (o.cancelBubble = r[n].call(r, o)), r.trigger(e, o), (r = r.parent), !o.cancelBubble);

            );
            o.cancelBubble ||
              (this.trigger(e, o),
              this.painter &&
                this.painter.eachOtherLayer(function(t) {
                  'function' == typeof t[n] && t[n].call(t, o), t.trigger && t.trigger(e, o);
                }));
          }
        },
        findHover: function(t, e, i) {
          for (var r = this.storage.getDisplayList(), n = { x: t, y: e }, o = r.length - 1; o >= 0; o--) {
            var a;
            if (r[o] !== i && !r[o].ignore && (a = p(r[o], t, e)) && (!n.topTarget && (n.topTarget = r[o]), a !== c)) {
              n.target = r[o];
              break;
            }
          }
          return n;
        },
        processGesture: function(t, e) {
          this._gestureMgr || (this._gestureMgr = new l());
          var i = this._gestureMgr;
          'start' === e && i.clear();
          var r = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
          if (('end' === e && i.clear(), r)) {
            var n = r.type;
            (t.gestureEvent = n), this.dispatchToElement({ target: r.target }, n, r.event);
          }
        },
      }),
        r.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function(t) {
          f.prototype[t] = function(e) {
            var i = this.findHover(e.zrX, e.zrY),
              r = i.target;
            if ('mousedown' === t) (this._downEl = r), (this._downPoint = [e.zrX, e.zrY]), (this._upEl = r);
            else if ('mouseup' === t) this._upEl = r;
            else if ('click' === t) {
              if (this._downEl !== this._upEl || !this._downPoint || n.dist(this._downPoint, [e.zrX, e.zrY]) > 4)
                return;
              this._downPoint = null;
            }
            this.dispatchToElement(i, t, e);
          };
        }),
        r.mixin(f, a),
        r.mixin(f, o),
        (t.exports = f);
    },
    '1Jh7': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('T6xi'),
        o = r.extend({
          type: 'polyline',
          shape: { points: null, smooth: !1, smoothConstraint: null },
          style: { stroke: '#000', fill: null },
          buildPath: function(t, e) {
            n.buildPath(t, e, !1);
          },
        });
      t.exports = o;
    },
    '1LEl': function(t, e, i) {
      var r = i('ProS'),
        n = i('F9bG'),
        o = r.extendComponentView({
          type: 'axisPointer',
          render: function(t, e, i) {
            var r = e.getComponent('tooltip'),
              o = t.get('triggerOn') || (r && r.get('triggerOn')) || 'mousemove|click';
            n.register('axisPointer', i, function(t, e, i) {
              'none' !== o &&
                ('leave' === t || o.indexOf(t) >= 0) &&
                i({ type: 'updateAxisPointer', currTrigger: t, x: e && e.offsetX, y: e && e.offsetY });
            });
          },
          remove: function(t, e) {
            n.unregister(e.getZr(), 'axisPointer'), o.superApply(this._model, 'remove', arguments);
          },
          dispose: function(t, e) {
            n.unregister('axisPointer', e), o.superApply(this._model, 'dispose', arguments);
          },
        });
      t.exports = o;
    },
    '1MYJ': function(t, e, i) {
      var r = i('y+Vt'),
        n = r.extend({
          type: 'compound',
          shape: { paths: null },
          _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
            (this.__dirtyPath = t), (this.__dirty = this.__dirty || t);
          },
          beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++)
              t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1]);
          },
          buildPath: function(t, e) {
            for (var i = e.paths || [], r = 0; r < i.length; r++) i[r].buildPath(t, i[r].shape, !0);
          },
          afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
          },
          getBoundingRect: function() {
            return this._updatePathDirty(), r.prototype.getBoundingRect.call(this);
          },
        });
      t.exports = n;
    },
    '1RvN': function(t, e) {
      var i = function() {
          (this.head = null), (this.tail = null), (this._len = 0);
        },
        r = i.prototype;
      (r.insert = function(t) {
        var e = new n(t);
        return this.insertEntry(e), e;
      }),
        (r.insertEntry = function(t) {
          this.head
            ? ((this.tail.next = t), (t.prev = this.tail), (t.next = null), (this.tail = t))
            : (this.head = this.tail = t),
            this._len++;
        }),
        (r.remove = function(t) {
          var e = t.prev,
            i = t.next;
          e ? (e.next = i) : (this.head = i), i ? (i.prev = e) : (this.tail = e), (t.next = t.prev = null), this._len--;
        }),
        (r.len = function() {
          return this._len;
        }),
        (r.clear = function() {
          (this.head = this.tail = null), (this._len = 0);
        });
      var n = function(t) {
          this.value = t;
        },
        o = function(t) {
          (this._list = new i()), (this._map = {}), (this._maxSize = t || 10), (this._lastRemovedEntry = null);
        },
        a = o.prototype;
      (a.put = function(t, e) {
        var i = this._list,
          r = this._map,
          o = null;
        if (null == r[t]) {
          var a = i.len(),
            s = this._lastRemovedEntry;
          if (a >= this._maxSize && a > 0) {
            var l = i.head;
            i.remove(l), delete r[l.key], (o = l.value), (this._lastRemovedEntry = l);
          }
          s ? (s.value = e) : (s = new n(e)), (s.key = t), i.insertEntry(s), (r[t] = s);
        }
        return o;
      }),
        (a.get = function(t) {
          var e = this._map[t],
            i = this._list;
          if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
        }),
        (a.clear = function() {
          this._list.clear(), (this._map = {});
        }),
        (t.exports = o);
    },
    '1bdT': function(t, e, i) {
      var r = i('3gBT'),
        n = i('H6uX'),
        o = i('DN4a'),
        a = i('vWvF'),
        s = i('bYtY'),
        l = function(t) {
          o.call(this, t), n.call(this, t), a.call(this, t), (this.id = t.id || r());
        };
      (l.prototype = {
        type: 'element',
        name: '',
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
          switch (this.draggable) {
            case 'horizontal':
              e = 0;
              break;
            case 'vertical':
              t = 0;
          }
          var i = this.transform;
          i || (i = this.transform = [1, 0, 0, 1, 0, 0]),
            (i[4] += t),
            (i[5] += e),
            this.decomposeTransform(),
            this.dirty(!1);
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
          this.updateTransform();
        },
        traverse: function(t, e) {},
        attrKV: function(t, e) {
          if ('position' === t || 'scale' === t || 'origin' === t) {
            if (e) {
              var i = this[t];
              i || (i = this[t] = []), (i[0] = e[0]), (i[1] = e[1]);
            }
          } else this[t] = e;
        },
        hide: function() {
          (this.ignore = !0), this.__zr && this.__zr.refresh();
        },
        show: function() {
          (this.ignore = !1), this.__zr && this.__zr.refresh();
        },
        attr: function(t, e) {
          if ('string' == typeof t) this.attrKV(t, e);
          else if (s.isObject(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
          return this.dirty(!1), this;
        },
        setClipPath: function(t) {
          var e = this.__zr;
          e && t.addSelfToZr(e),
            this.clipPath && this.clipPath !== t && this.removeClipPath(),
            (this.clipPath = t),
            (t.__zr = e),
            (t.__clipTarget = this),
            this.dirty(!1);
        },
        removeClipPath: function() {
          var t = this.clipPath;
          t &&
            (t.__zr && t.removeSelfFromZr(t.__zr),
            (t.__zr = null),
            (t.__clipTarget = null),
            (this.clipPath = null),
            this.dirty(!1));
        },
        addSelfToZr: function(t) {
          this.__zr = t;
          var e = this.animators;
          if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
          this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function(t) {
          this.__zr = null;
          var e = this.animators;
          if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
          this.clipPath && this.clipPath.removeSelfFromZr(t);
        },
      }),
        s.mixin(l, a),
        s.mixin(l, o),
        s.mixin(l, n),
        (t.exports = l);
    },
    '2DNl': function(t, e, i) {
      var r = i('IMiH'),
        n = i('loD1'),
        o = i('59Ip'),
        a = i('aKvl'),
        s = i('n1HI'),
        l = i('hX1E').normalizeRadian,
        c = i('Sj9i'),
        h = i('hyiK'),
        u = r.CMD,
        d = 2 * Math.PI,
        f = 1e-4,
        p = [-1, -1, -1],
        g = [-1, -1];
      function m(t, e, i, r, n, o, a, s, l, h) {
        if ((h > e && h > r && h > o && h > s) || (h < e && h < r && h < o && h < s)) return 0;
        var u,
          d = c.cubicRootAt(e, r, o, s, h, p);
        if (0 === d) return 0;
        for (var f, m, y = 0, v = -1, x = 0; x < d; x++) {
          var b = p[x],
            _ = 0 === b || 1 === b ? 0.5 : 1;
          c.cubicAt(t, i, n, a, b) < l ||
            (v < 0 &&
              ((v = c.cubicExtrema(e, r, o, s, g)),
              g[1] < g[0] && v > 1 && ((u = g[0]), (g[0] = g[1]), (g[1] = u)),
              (f = c.cubicAt(e, r, o, s, g[0])),
              v > 1 && (m = c.cubicAt(e, r, o, s, g[1]))),
            (y +=
              2 === v
                ? b < g[0]
                  ? f < e
                    ? _
                    : -_
                  : b < g[1]
                  ? m < f
                    ? _
                    : -_
                  : s < m
                  ? _
                  : -_
                : b < g[0]
                ? f < e
                  ? _
                  : -_
                : s < f
                ? _
                : -_));
        }
        return y;
      }
      function y(t, e, i, r, n, o, a, s) {
        if ((s > e && s > r && s > o) || (s < e && s < r && s < o)) return 0;
        var l = c.quadraticRootAt(e, r, o, s, p);
        if (0 === l) return 0;
        var h = c.quadraticExtremum(e, r, o);
        if (h >= 0 && h <= 1) {
          for (var u = 0, d = c.quadraticAt(e, r, o, h), f = 0; f < l; f++) {
            var g = 0 === p[f] || 1 === p[f] ? 0.5 : 1;
            c.quadraticAt(t, i, n, p[f]) < a || (u += p[f] < h ? (d < e ? g : -g) : o < d ? g : -g);
          }
          return u;
        }
        return (g = 0 === p[0] || 1 === p[0] ? 0.5 : 1), c.quadraticAt(t, i, n, p[0]) < a ? 0 : o < e ? g : -g;
      }
      function v(t, e, i, r, n, o, a, s) {
        if ((s -= e) > i || s < -i) return 0;
        var c = Math.sqrt(i * i - s * s);
        (p[0] = -c), (p[1] = c);
        var h = Math.abs(r - n);
        if (h < 1e-4) return 0;
        if (h % d < 1e-4) {
          (r = 0), (n = d);
          var u = o ? 1 : -1;
          return a >= p[0] + t && a <= p[1] + t ? u : 0;
        }
        o ? ((c = r), (r = l(n)), (n = l(c))) : ((r = l(r)), (n = l(n))), r > n && (n += d);
        for (var f = 0, g = 0; g < 2; g++) {
          var m = p[g];
          if (m + t > a) {
            var y = Math.atan2(s, m);
            (u = o ? 1 : -1),
              y < 0 && (y = d + y),
              ((y >= r && y <= n) || (y + d >= r && y + d <= n)) &&
                (y > Math.PI / 2 && y < 1.5 * Math.PI && (u = -u), (f += u));
          }
        }
        return f;
      }
      function x(t, e, i, r, l) {
        for (var c = 0, d = 0, p = 0, g = 0, x = 0, b = 0; b < t.length; ) {
          var _ = t[b++];
          switch (
            (_ === u.M && b > 1 && (i || (c += h(d, p, g, x, r, l))),
            1 === b && ((g = d = t[b]), (x = p = t[b + 1])),
            _)
          ) {
            case u.M:
              (d = g = t[b++]), (p = x = t[b++]);
              break;
            case u.L:
              if (i) {
                if (n.containStroke(d, p, t[b], t[b + 1], e, r, l)) return !0;
              } else c += h(d, p, t[b], t[b + 1], r, l) || 0;
              (d = t[b++]), (p = t[b++]);
              break;
            case u.C:
              if (i) {
                if (o.containStroke(d, p, t[b++], t[b++], t[b++], t[b++], t[b], t[b + 1], e, r, l)) return !0;
              } else c += m(d, p, t[b++], t[b++], t[b++], t[b++], t[b], t[b + 1], r, l) || 0;
              (d = t[b++]), (p = t[b++]);
              break;
            case u.Q:
              if (i) {
                if (a.containStroke(d, p, t[b++], t[b++], t[b], t[b + 1], e, r, l)) return !0;
              } else c += y(d, p, t[b++], t[b++], t[b], t[b + 1], r, l) || 0;
              (d = t[b++]), (p = t[b++]);
              break;
            case u.A:
              var S = t[b++],
                w = t[b++],
                C = t[b++],
                T = t[b++],
                k = t[b++],
                M = t[b++];
              b += 1;
              var A = 1 - t[b++],
                D = Math.cos(k) * C + S,
                I = Math.sin(k) * T + w;
              b > 1 ? (c += h(d, p, D, I, r, l)) : ((g = D), (x = I));
              var O = ((r - S) * T) / C + S;
              if (i) {
                if (s.containStroke(S, w, T, k, k + M, A, e, O, l)) return !0;
              } else c += v(S, w, T, k, k + M, A, O, l);
              (d = Math.cos(k + M) * C + S), (p = Math.sin(k + M) * T + w);
              break;
            case u.R:
              if (((g = d = t[b++]), (x = p = t[b++]), (D = g + t[b++]), (I = x + t[b++]), i)) {
                if (
                  n.containStroke(g, x, D, x, e, r, l) ||
                  n.containStroke(D, x, D, I, e, r, l) ||
                  n.containStroke(D, I, g, I, e, r, l) ||
                  n.containStroke(g, I, g, x, e, r, l)
                )
                  return !0;
              } else (c += h(D, x, D, I, r, l)), (c += h(g, I, g, x, r, l));
              break;
            case u.Z:
              if (i) {
                if (n.containStroke(d, p, g, x, e, r, l)) return !0;
              } else c += h(d, p, g, x, r, l);
              (d = g), (p = x);
          }
        }
        return i || Math.abs(p - x) < f || (c += h(d, p, g, x, r, l) || 0), 0 !== c;
      }
      (e.contain = function(t, e, i) {
        return x(t, 0, !1, e, i);
      }),
        (e.containStroke = function(t, e, i, r) {
          return x(t, e, !0, i, r);
        });
    },
    '2fw6': function(t, e, i) {
      var r = i('y+Vt').extend({
        type: 'circle',
        shape: { cx: 0, cy: 0, r: 0 },
        buildPath: function(t, e, i) {
          i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
        },
      });
      t.exports = r;
    },
    '3C/r': function(t, e) {
      var i = function(t, e) {
        (this.image = t), (this.repeat = e), (this.type = 'pattern');
      };
      (i.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || 'repeat');
      }),
        (t.exports = i);
    },
    '3CBa': function(t, e, i) {
      var r = i('hydK').createElement,
        n = i('bYtY'),
        o = i('SUKs'),
        a = i('y+Vt'),
        s = i('Dagg'),
        l = i('dqUG'),
        c = i('DBLp'),
        h = i('sW+o'),
        u = i('n6Mw'),
        d = i('vKoX'),
        f = i('P47w'),
        p = f.path,
        g = f.image,
        m = f.text;
      function y(t) {
        return parseInt(t, 10);
      }
      function v(t, e) {
        return e && t && e.parentNode !== t;
      }
      function x(t, e, i) {
        if (v(t, e) && i) {
          var r = i.nextSibling;
          r ? t.insertBefore(e, r) : t.appendChild(e);
        }
      }
      function b(t, e) {
        if (v(t, e)) {
          var i = t.firstChild;
          i ? t.insertBefore(e, i) : t.appendChild(e);
        }
      }
      function _(t, e) {
        e && t && e.parentNode === t && t.removeChild(e);
      }
      function S(t) {
        return t.__textSvgEl;
      }
      function w(t) {
        return t.__svgEl;
      }
      var C = function(t, e, i, o) {
        (this.root = t), (this.storage = e), (this._opts = i = n.extend({}, i || {}));
        var a = r('svg');
        a.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
          a.setAttribute('version', '1.1'),
          a.setAttribute('baseProfile', 'full'),
          (a.style.cssText = 'user-select:none;position:absolute;left:0;top:0;'),
          (this.gradientManager = new h(o, a)),
          (this.clipPathManager = new u(o, a)),
          (this.shadowManager = new d(o, a));
        var s = document.createElement('div');
        (s.style.cssText = 'overflow:hidden;position:relative'),
          (this._svgRoot = a),
          (this._viewport = s),
          t.appendChild(s),
          s.appendChild(a),
          this.resize(i.width, i.height),
          (this._visibleList = []);
      };
      (C.prototype = {
        constructor: C,
        getType: function() {
          return 'svg';
        },
        getViewportRoot: function() {
          return this._viewport;
        },
        getViewportRootOffset: function() {
          var t = this.getViewportRoot();
          if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
        },
        refresh: function() {
          var t = this.storage.getDisplayList(!0);
          this._paintList(t);
        },
        setBackgroundColor: function(t) {
          this._viewport.style.background = t;
        },
        _paintList: function(t) {
          this.gradientManager.markAllUnused(),
            this.clipPathManager.markAllUnused(),
            this.shadowManager.markAllUnused();
          var e,
            i,
            r = this._svgRoot,
            n = this._visibleList,
            o = t.length,
            h = [];
          for (e = 0; e < o; e++) {
            var u = (i = k = t[e]) instanceof a ? p : i instanceof s ? g : i instanceof l ? m : p,
              d = w(k) || S(k);
            k.invisible ||
              (k.__dirty &&
                (u && u.brush(k),
                this.clipPathManager.update(k),
                k.style &&
                  (this.gradientManager.update(k.style.fill),
                  this.gradientManager.update(k.style.stroke),
                  this.shadowManager.update(d, k)),
                (k.__dirty = !1)),
              h.push(k));
          }
          var f,
            y = c(n, h);
          for (e = 0; e < y.length; e++)
            if ((T = y[e]).removed)
              for (var v = 0; v < T.count; v++) {
                d = w((k = n[T.indices[v]]));
                var C = S(k);
                _(r, d), _(r, C);
              }
          for (e = 0; e < y.length; e++) {
            var T;
            if ((T = y[e]).added)
              for (v = 0; v < T.count; v++)
                (d = w((k = h[T.indices[v]]))),
                  (C = S(k)),
                  f ? x(r, d, f) : b(r, d),
                  d ? x(r, C, d) : f ? x(r, C, f) : b(r, C),
                  x(r, C, d),
                  (f = C || d || f),
                  this.gradientManager.addWithoutUpdate(d, k),
                  this.shadowManager.addWithoutUpdate(f, k),
                  this.clipPathManager.markUsed(k);
            else if (!T.removed)
              for (v = 0; v < T.count; v++) {
                var k;
                (f = d = S((k = h[T.indices[v]])) || w(k) || f),
                  this.gradientManager.markUsed(k),
                  this.gradientManager.addWithoutUpdate(d, k),
                  this.shadowManager.markUsed(k),
                  this.shadowManager.addWithoutUpdate(d, k),
                  this.clipPathManager.markUsed(k);
              }
          }
          this.gradientManager.removeUnused(),
            this.clipPathManager.removeUnused(),
            this.shadowManager.removeUnused(),
            (this._visibleList = h);
        },
        _getDefs: function(t) {
          var e,
            i = this._svgRoot;
          return 0 === (e = this._svgRoot.getElementsByTagName('defs')).length
            ? t
              ? ((e = i.insertBefore(r('defs'), i.firstChild)).contains ||
                  (e.contains = function(t) {
                    var i = e.children;
                    if (!i) return !1;
                    for (var r = i.length - 1; r >= 0; --r) if (i[r] === t) return !0;
                    return !1;
                  }),
                e)
              : null
            : e[0];
        },
        resize: function(t, e) {
          var i = this._viewport;
          i.style.display = 'none';
          var r = this._opts;
          if (
            (null != t && (r.width = t),
            null != e && (r.height = e),
            (t = this._getSize(0)),
            (e = this._getSize(1)),
            (i.style.display = ''),
            this._width !== t || this._height !== e)
          ) {
            (this._width = t), (this._height = e);
            var n = i.style;
            (n.width = t + 'px'), (n.height = e + 'px');
            var o = this._svgRoot;
            o.setAttribute('width', t), o.setAttribute('height', e);
          }
        },
        getWidth: function() {
          return this._width;
        },
        getHeight: function() {
          return this._height;
        },
        _getSize: function(t) {
          var e = this._opts,
            i = ['width', 'height'][t],
            r = ['clientWidth', 'clientHeight'][t],
            n = ['paddingLeft', 'paddingTop'][t],
            o = ['paddingRight', 'paddingBottom'][t];
          if (null != e[i] && 'auto' !== e[i]) return parseFloat(e[i]);
          var a = this.root,
            s = document.defaultView.getComputedStyle(a);
          return ((a[r] || y(s[i]) || y(a.style[i])) - (y(s[n]) || 0) - (y(s[o]) || 0)) | 0;
        },
        dispose: function() {
          (this.root.innerHTML = ''), (this._svgRoot = this._viewport = this.storage = null);
        },
        clear: function() {
          this._viewport && this.root.removeChild(this._viewport);
        },
        pathToDataUrl: function() {
          return this.refresh(), 'data:image/svg+xml;charset=UTF-8,' + this._svgRoot.outerHTML;
        },
      }),
        n.each(
          [
            'getLayer',
            'insertLayer',
            'eachLayer',
            'eachBuiltinLayer',
            'eachOtherLayer',
            'getLayers',
            'modLayer',
            'delLayer',
            'clearLayer',
            'toDataURL',
            'pathToImage',
          ],
          function(t) {
            var e;
            C.prototype[t] =
              ((e = t),
              function() {
                o('In SVG mode painter not support method "' + e + '"');
              });
          },
        ),
        (t.exports = C);
    },
    '3LNs': function(t, e, i) {
      var r = i('bYtY'),
        n = i('Yl7c'),
        o = i('IwbS'),
        a = i('zTMp'),
        s = i('YH21'),
        l = i('iLNv'),
        c = (0, i('4NO4').makeInner)(),
        h = r.clone,
        u = r.bind;
      function d() {}
      function f(t, e, i, n) {
        (function t(e, i) {
          if (r.isObject(e) && r.isObject(i)) {
            var n = !0;
            return (
              r.each(i, function(i, r) {
                n = n && t(e[r], i);
              }),
              !!n
            );
          }
          return e === i;
        })(c(i).lastProp, n) || ((c(i).lastProp = n), e ? o.updateProps(i, n, t) : (i.stopAnimation(), i.attr(n)));
      }
      function p(t, e) {
        t[e.get('label.show') ? 'show' : 'hide']();
      }
      function g(t) {
        return { position: t.position.slice(), rotation: t.rotation || 0 };
      }
      function m(t, e, i) {
        var r = e.get('z'),
          n = e.get('zlevel');
        t &&
          t.traverse(function(t) {
            'group' !== t.type && (null != r && (t.z = r), null != n && (t.zlevel = n), (t.silent = i));
          });
      }
      ((d.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function(t, e, i, n) {
          var a = e.get('value'),
            s = e.get('status');
          if (
            ((this._axisModel = t),
            (this._axisPointerModel = e),
            (this._api = i),
            n || this._lastValue !== a || this._lastStatus !== s)
          ) {
            (this._lastValue = a), (this._lastStatus = s);
            var l = this._group,
              c = this._handle;
            if (!s || 'hide' === s) return l && l.hide(), void (c && c.hide());
            l && l.show(), c && c.show();
            var h = {};
            this.makeElOption(h, a, t, e, i);
            var u = h.graphicKey;
            u !== this._lastGraphicKey && this.clear(i), (this._lastGraphicKey = u);
            var d = (this._moveAnimation = this.determineAnimation(t, e));
            if (l) {
              var p = r.curry(f, e, d);
              this.updatePointerEl(l, h, p, e), this.updateLabelEl(l, h, p, e);
            } else
              (l = this._group = new o.Group()),
                this.createPointerEl(l, h, t, e),
                this.createLabelEl(l, h, t, e),
                i.getZr().add(l);
            m(l, e, !0), this._renderHandle(a);
          }
        },
        remove: function(t) {
          this.clear(t);
        },
        dispose: function(t) {
          this.clear(t);
        },
        determineAnimation: function(t, e) {
          var i = e.get('animation'),
            r = t.axis,
            n = 'category' === r.type,
            o = e.get('snap');
          if (!o && !n) return !1;
          if ('auto' === i || null == i) {
            var s = this.animationThreshold;
            if (n && r.getBandWidth() > s) return !0;
            if (o) {
              var l = a.getAxisInfo(t).seriesDataCount,
                c = r.getExtent();
              return Math.abs(c[0] - c[1]) / l > s;
            }
            return !1;
          }
          return !0 === i;
        },
        makeElOption: function(t, e, i, r, n) {},
        createPointerEl: function(t, e, i, r) {
          var n = e.pointer;
          if (n) {
            var a = (c(t).pointerEl = new o[n.type](h(e.pointer)));
            t.add(a);
          }
        },
        createLabelEl: function(t, e, i, r) {
          if (e.label) {
            var n = (c(t).labelEl = new o.Rect(h(e.label)));
            t.add(n), p(n, r);
          }
        },
        updatePointerEl: function(t, e, i) {
          var r = c(t).pointerEl;
          r && (r.setStyle(e.pointer.style), i(r, { shape: e.pointer.shape }));
        },
        updateLabelEl: function(t, e, i, r) {
          var n = c(t).labelEl;
          n && (n.setStyle(e.label.style), i(n, { shape: e.label.shape, position: e.label.position }), p(n, r));
        },
        _renderHandle: function(t) {
          if (!this._dragging && this.updateHandleTransform) {
            var e,
              i = this._axisPointerModel,
              n = this._api.getZr(),
              a = this._handle,
              c = i.getModel('handle'),
              h = i.get('status');
            if (!c.get('show') || !h || 'hide' === h) return a && n.remove(a), void (this._handle = null);
            this._handle ||
              ((e = !0),
              (a = this._handle = o.createIcon(c.get('icon'), {
                cursor: 'move',
                draggable: !0,
                onmousemove: function(t) {
                  s.stop(t.event);
                },
                onmousedown: u(this._onHandleDragMove, this, 0, 0),
                drift: u(this._onHandleDragMove, this),
                ondragend: u(this._onHandleDragEnd, this),
              })),
              n.add(a)),
              m(a, i, !1),
              a.setStyle(
                c.getItemStyle(null, [
                  'color',
                  'borderColor',
                  'borderWidth',
                  'opacity',
                  'shadowColor',
                  'shadowBlur',
                  'shadowOffsetX',
                  'shadowOffsetY',
                ]),
              );
            var d = c.get('size');
            r.isArray(d) || (d = [d, d]),
              a.attr('scale', [d[0] / 2, d[1] / 2]),
              l.createOrUpdate(this, '_doDispatchAxisPointer', c.get('throttle') || 0, 'fixRate'),
              this._moveHandleToValue(t, e);
          }
        },
        _moveHandleToValue: function(t, e) {
          f(
            this._axisPointerModel,
            !e && this._moveAnimation,
            this._handle,
            g(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)),
          );
        },
        _onHandleDragMove: function(t, e) {
          var i = this._handle;
          if (i) {
            this._dragging = !0;
            var r = this.updateHandleTransform(g(i), [t, e], this._axisModel, this._axisPointerModel);
            (this._payloadInfo = r),
              i.stopAnimation(),
              i.attr(g(r)),
              (c(i).lastProp = null),
              this._doDispatchAxisPointer();
          }
        },
        _doDispatchAxisPointer: function() {
          if (this._handle) {
            var t = this._payloadInfo,
              e = this._axisModel;
            this._api.dispatchAction({
              type: 'updateAxisPointer',
              x: t.cursorPoint[0],
              y: t.cursorPoint[1],
              tooltipOption: t.tooltipOption,
              axesInfo: [{ axisDim: e.axis.dim, axisIndex: e.componentIndex }],
            });
          }
        },
        _onHandleDragEnd: function(t) {
          if (((this._dragging = !1), this._handle)) {
            var e = this._axisPointerModel.get('value');
            this._moveHandleToValue(e), this._api.dispatchAction({ type: 'hideTip' });
          }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function(t) {
          (this._lastValue = null), (this._lastStatus = null);
          var e = t.getZr(),
            i = this._group,
            r = this._handle;
          e &&
            i &&
            ((this._lastGraphicKey = null),
            i && e.remove(i),
            r && e.remove(r),
            (this._group = null),
            (this._handle = null),
            (this._payloadInfo = null));
        },
        doClear: function() {},
        buildLabel: function(t, e, i) {
          return { x: t[(i = i || 0)], y: t[1 - i], width: e[i], height: e[1 - i] };
        },
      }).constructor = d),
        n.enableClassExtend(d),
        (t.exports = d);
    },
    '3e3G': function(t, e, i) {
      var r = i('bYtY'),
        n = i('QuXc'),
        o = function(t, e, i, r, o) {
          (this.x = null == t ? 0.5 : t),
            (this.y = null == e ? 0.5 : e),
            (this.r = null == i ? 0.5 : i),
            (this.type = 'radial'),
            (this.global = o || !1),
            n.call(this, r);
        };
      (o.prototype = { constructor: o }), r.inherits(o, n), (t.exports = o);
    },
    '3gBT': function(t, e) {
      var i = 2311;
      t.exports = function() {
        return i++;
      };
    },
    '3hzK': function(t, e) {
      t.exports = {
        getBoxLayoutParams: function() {
          return {
            left: this.get('left'),
            top: this.get('top'),
            right: this.get('right'),
            bottom: this.get('bottom'),
            width: this.get('width'),
            height: this.get('height'),
          };
        },
      };
    },
    '4HMb': function(t, e, i) {
      var r = i('bYtY'),
        n = i('6GrX'),
        o = i('4NO4').makeInner,
        a = i('aX7z'),
        s = a.makeLabelFormatter,
        l = a.getOptionCategoryInterval,
        c = a.shouldShowAllLabels,
        h = o();
      function u(t, e) {
        var i,
          n,
          o = d(t, 'labels'),
          a = l(e);
        return (
          f(o, a) ||
          (r.isFunction(a)
            ? (i = m(t, a))
            : ((n =
                'auto' === a
                  ? (function(t) {
                      var e = h(t).autoInterval;
                      return null != e ? e : (h(t).autoInterval = t.calculateCategoryInterval());
                    })(t)
                  : a),
              (i = g(t, n))),
          p(o, a, { labels: i, labelCategoryInterval: n }))
        );
      }
      function d(t, e) {
        return h(t)[e] || (h(t)[e] = []);
      }
      function f(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i].key === e) return t[i].value;
      }
      function p(t, e, i) {
        return t.push({ key: e, value: i }), i;
      }
      function g(t, e, i) {
        var r = s(t),
          n = t.scale,
          o = n.getExtent(),
          a = t.getLabelModel(),
          l = [],
          h = Math.max((e || 0) + 1, 1),
          u = o[0],
          d = n.count();
        0 !== u && h > 1 && d / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var f = c(t),
          p = a.get('showMinLabel') || f,
          g = a.get('showMaxLabel') || f;
        p && u !== o[0] && y(o[0]);
        for (var m = u; m <= o[1]; m += h) y(m);
        function y(t) {
          l.push(i ? t : { formattedLabel: r(t), rawLabel: n.getLabel(t), tickValue: t });
        }
        return g && m !== o[1] && y(o[1]), l;
      }
      function m(t, e, i) {
        var n = t.scale,
          o = s(t),
          a = [];
        return (
          r.each(n.getTicks(), function(t) {
            var r = n.getLabel(t);
            e(t, r) && a.push(i ? t : { formattedLabel: o(t), rawLabel: r, tickValue: t });
          }),
          a
        );
      }
      (e.createAxisLabels = function(t) {
        return 'category' === t.type
          ? (function(t) {
              var e = t.getLabelModel(),
                i = u(t, e);
              return !e.get('show') || t.scale.isBlank()
                ? { labels: [], labelCategoryInterval: i.labelCategoryInterval }
                : i;
            })(t)
          : (function(t) {
              var e = t.scale.getTicks(),
                i = s(t);
              return {
                labels: r.map(e, function(e, r) {
                  return { formattedLabel: i(e, r), rawLabel: t.scale.getLabel(e), tickValue: e };
                }),
              };
            })(t);
      }),
        (e.createAxisTicks = function(t, e) {
          return 'category' === t.type
            ? (function(t, e) {
                var i,
                  n,
                  o = d(t, 'ticks'),
                  a = l(e),
                  s = f(o, a);
                if (s) return s;
                if (((e.get('show') && !t.scale.isBlank()) || (i = []), r.isFunction(a))) i = m(t, a, !0);
                else if ('auto' === a) {
                  var c = u(t, t.getLabelModel());
                  (n = c.labelCategoryInterval),
                    (i = r.map(c.labels, function(t) {
                      return t.tickValue;
                    }));
                } else i = g(t, (n = a), !0);
                return p(o, a, { ticks: i, tickCategoryInterval: n });
              })(t, e)
            : { ticks: t.scale.getTicks() };
        }),
        (e.calculateCategoryInterval = function(t) {
          var e = (function(t) {
              var e = t.getLabelModel();
              return {
                axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
                labelRotate: e.get('rotate') || 0,
                font: e.getFont(),
              };
            })(t),
            i = s(t),
            r = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
            o = t.scale,
            a = o.getExtent(),
            l = o.count();
          if (a[1] - a[0] < 1) return 0;
          var c = 1;
          l > 40 && (c = Math.max(1, Math.floor(l / 40)));
          for (
            var u = a[0],
              d = t.dataToCoord(u + 1) - t.dataToCoord(u),
              f = Math.abs(d * Math.cos(r)),
              p = Math.abs(d * Math.sin(r)),
              g = 0,
              m = 0;
            u <= a[1];
            u += c
          ) {
            var y,
              v = n.getBoundingRect(i(u), e.font, 'center', 'top');
            (y = 1.3 * v.height), (g = Math.max(g, 1.3 * v.width, 7)), (m = Math.max(m, y, 7));
          }
          var x = g / f,
            b = m / p;
          isNaN(x) && (x = 1 / 0), isNaN(b) && (b = 1 / 0);
          var _ = Math.max(0, Math.floor(Math.min(x, b))),
            S = h(t.model),
            w = S.lastAutoInterval,
            C = S.lastTickCount;
          return (
            null != w && null != C && Math.abs(w - _) <= 1 && Math.abs(C - l) <= 1 && w > _
              ? (_ = w)
              : ((S.lastTickCount = l), (S.lastAutoInterval = _)),
            _
          );
        });
    },
    '4NO4': function(t, e, i) {
      var r = i('bYtY'),
        n = i('ItGF'),
        o = r.each,
        a = r.isObject,
        s = r.isArray;
      function l(t) {
        return t instanceof Array ? t : null == t ? [] : [t];
      }
      function c(t) {
        return a(t) && t.id && 0 === (t.id + '').indexOf('\0_ec_\0');
      }
      var h = 0;
      function u(t, e) {
        return t && t.hasOwnProperty(e);
      }
      (e.normalizeToArray = l),
        (e.defaultEmphasis = function(t, e, i) {
          if (t) {
            (t[e] = t[e] || {}), (t.emphasis = t.emphasis || {}), (t.emphasis[e] = t.emphasis[e] || {});
            for (var r = 0, n = i.length; r < n; r++) {
              var o = i[r];
              !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o]);
            }
          }
        }),
        (e.TEXT_STYLE_OPTIONS = [
          'fontStyle',
          'fontWeight',
          'fontSize',
          'fontFamily',
          'rich',
          'tag',
          'color',
          'textBorderColor',
          'textBorderWidth',
          'width',
          'height',
          'lineHeight',
          'align',
          'verticalAlign',
          'baseline',
          'shadowColor',
          'shadowBlur',
          'shadowOffsetX',
          'shadowOffsetY',
          'textShadowColor',
          'textShadowBlur',
          'textShadowOffsetX',
          'textShadowOffsetY',
          'backgroundColor',
          'borderColor',
          'borderWidth',
          'borderRadius',
          'padding',
        ]),
        (e.getDataItemValue = function(t) {
          return !a(t) || s(t) || t instanceof Date ? t : t.value;
        }),
        (e.isDataItemOption = function(t) {
          return a(t) && !(t instanceof Array);
        }),
        (e.mappingToExists = function(t, e) {
          e = (e || []).slice();
          var i = r.map(t || [], function(t, e) {
            return { exist: t };
          });
          return (
            o(e, function(t, r) {
              if (a(t)) {
                for (var n = 0; n < i.length; n++)
                  if (!i[n].option && null != t.id && i[n].exist.id === t.id + '')
                    return (i[n].option = t), void (e[r] = null);
                for (n = 0; n < i.length; n++) {
                  var o = i[n].exist;
                  if (
                    !(
                      i[n].option ||
                      (null != o.id && null != t.id) ||
                      null == t.name ||
                      c(t) ||
                      c(o) ||
                      o.name !== t.name + ''
                    )
                  )
                    return (i[n].option = t), void (e[r] = null);
                }
              }
            }),
            o(e, function(t, e) {
              if (a(t)) {
                for (var r = 0; r < i.length; r++)
                  if (!i[r].option && !c(i[r].exist) && null == t.id) {
                    i[r].option = t;
                    break;
                  }
                r >= i.length && i.push({ option: t });
              }
            }),
            i
          );
        }),
        (e.makeIdAndName = function(t) {
          var e = r.createHashMap();
          o(t, function(t, i) {
            var r = t.exist;
            r && e.set(r.id, t);
          }),
            o(t, function(t, i) {
              var n = t.option;
              r.assert(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, 'id duplicates: ' + (n && n.id)),
                n && null != n.id && e.set(n.id, t),
                !t.keyInfo && (t.keyInfo = {});
            }),
            o(t, function(t, i) {
              var r = t.exist,
                n = t.option,
                o = t.keyInfo;
              if (a(n)) {
                if (((o.name = null != n.name ? n.name + '' : r ? r.name : 'series\0' + i), r)) o.id = r.id;
                else if (null != n.id) o.id = n.id + '';
                else {
                  var s = 0;
                  do {
                    o.id = '\0' + o.name + '\0' + s++;
                  } while (e.get(o.id));
                }
                e.set(o.id, t);
              }
            });
        }),
        (e.isNameSpecified = function(t) {
          var e = t.name;
          return !(!e || !e.indexOf('series\0'));
        }),
        (e.isIdInner = c),
        (e.compressBatches = function(t, e) {
          var i = {},
            r = {};
          return n(t || [], i), n(e || [], r, i), [o(i), o(r)];
          function n(t, e, i) {
            for (var r = 0, n = t.length; r < n; r++)
              for (var o = t[r].seriesId, a = l(t[r].dataIndex), s = i && i[o], c = 0, h = a.length; c < h; c++) {
                var u = a[c];
                s && s[u] ? (s[u] = null) : ((e[o] || (e[o] = {}))[u] = 1);
              }
          }
          function o(t, e) {
            var i = [];
            for (var r in t)
              if (t.hasOwnProperty(r) && null != t[r])
                if (e) i.push(+r);
                else {
                  var n = o(t[r], !0);
                  n.length && i.push({ seriesId: r, dataIndex: n });
                }
            return i;
          }
        }),
        (e.queryDataIndex = function(t, e) {
          return null != e.dataIndexInside
            ? e.dataIndexInside
            : null != e.dataIndex
            ? r.isArray(e.dataIndex)
              ? r.map(e.dataIndex, function(e) {
                  return t.indexOfRawIndex(e);
                })
              : t.indexOfRawIndex(e.dataIndex)
            : null != e.name
            ? r.isArray(e.name)
              ? r.map(e.name, function(e) {
                  return t.indexOfName(e);
                })
              : t.indexOfName(e.name)
            : void 0;
        }),
        (e.makeInner = function() {
          var t = '__\0ec_inner_' + h++ + '_' + Math.random().toFixed(5);
          return function(e) {
            return e[t] || (e[t] = {});
          };
        }),
        (e.parseFinder = function(t, e, i) {
          if (r.isString(e)) {
            var n = {};
            (n[e + 'Index'] = 0), (e = n);
          }
          var a = i && i.defaultMainType;
          !a || u(e, a + 'Index') || u(e, a + 'Id') || u(e, a + 'Name') || (e[a + 'Index'] = 0);
          var s = {};
          return (
            o(e, function(n, o) {
              if (((n = e[o]), 'dataIndex' !== o && 'dataIndexInside' !== o)) {
                var a = o.match(/^(\w+)(Index|Id|Name)$/) || [],
                  l = a[1],
                  c = (a[2] || '').toLowerCase();
                if (
                  !(
                    !l ||
                    !c ||
                    null == n ||
                    ('index' === c && 'none' === n) ||
                    (i && i.includeMainTypes && r.indexOf(i.includeMainTypes, l) < 0)
                  )
                ) {
                  var h = { mainType: l };
                  ('index' === c && 'all' === n) || (h[c] = n);
                  var u = t.queryComponents(h);
                  (s[l + 'Models'] = u), (s[l + 'Model'] = u[0]);
                }
              } else s[o] = n;
            }),
            s
          );
        }),
        (e.setAttribute = function(t, e, i) {
          t.setAttribute ? t.setAttribute(e, i) : (t[e] = i);
        }),
        (e.getAttribute = function(t, e) {
          return t.getAttribute ? t.getAttribute(e) : t[e];
        }),
        (e.getTooltipRenderMode = function(t) {
          return 'auto' === t ? (n.domSupported ? 'html' : 'richText') : t || 'html';
        }),
        (e.groupData = function(t, e) {
          var i = r.createHashMap(),
            n = [];
          return (
            r.each(t, function(t) {
              var r = e(t);
              (i.get(r) || (n.push(r), i.set(r, []))).push(t);
            }),
            { keys: n, buckets: i }
          );
        });
    },
    '4NgU': function(t, e, i) {
      var r = i('Yl7c');
      function n(t) {
        (this._setting = t || {}),
          (this._extent = [1 / 0, -1 / 0]),
          (this._interval = 0),
          this.init && this.init.apply(this, arguments);
      }
      (n.prototype.parse = function(t) {
        return t;
      }),
        (n.prototype.getSetting = function(t) {
          return this._setting[t];
        }),
        (n.prototype.contain = function(t) {
          var e = this._extent;
          return t >= e[0] && t <= e[1];
        }),
        (n.prototype.normalize = function(t) {
          var e = this._extent;
          return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
        }),
        (n.prototype.scale = function(t) {
          var e = this._extent;
          return t * (e[1] - e[0]) + e[0];
        }),
        (n.prototype.unionExtent = function(t) {
          var e = this._extent;
          t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }),
        (n.prototype.unionExtentFromData = function(t, e) {
          this.unionExtent(t.getApproximateExtent(e));
        }),
        (n.prototype.getExtent = function() {
          return this._extent.slice();
        }),
        (n.prototype.setExtent = function(t, e) {
          var i = this._extent;
          isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
        }),
        (n.prototype.isBlank = function() {
          return this._isBlank;
        }),
        (n.prototype.setBlank = function(t) {
          this._isBlank = t;
        }),
        (n.prototype.getLabel = null),
        r.enableClassExtend(n),
        r.enableClassManagement(n, { registerWhenExtend: !0 }),
        (t.exports = n);
    },
    '4fz+': function(t, e, i) {
      var r = i('bYtY'),
        n = i('1bdT'),
        o = i('mFDi'),
        a = function(t) {
          for (var e in (n.call(this, (t = t || {})), t)) t.hasOwnProperty(e) && (this[e] = t[e]);
          (this._children = []), (this.__storage = null), (this.__dirty = !0);
        };
      (a.prototype = {
        constructor: a,
        isGroup: !0,
        type: 'group',
        silent: !1,
        children: function() {
          return this._children.slice();
        },
        childAt: function(t) {
          return this._children[t];
        },
        childOfName: function(t) {
          for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i];
        },
        childCount: function() {
          return this._children.length;
        },
        add: function(t) {
          return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
        },
        addBefore: function(t, e) {
          if (t && t !== this && t.parent !== this && e && e.parent === this) {
            var i = this._children,
              r = i.indexOf(e);
            r >= 0 && (i.splice(r, 0, t), this._doAdd(t));
          }
          return this;
        },
        _doAdd: function(t) {
          t.parent && t.parent.remove(t), (t.parent = this);
          var e = this.__storage,
            i = this.__zr;
          e && e !== t.__storage && (e.addToStorage(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh();
        },
        remove: function(t) {
          var e = this.__zr,
            i = this.__storage,
            n = this._children,
            o = r.indexOf(n, t);
          return o < 0
            ? this
            : (n.splice(o, 1),
              (t.parent = null),
              i && (i.delFromStorage(t), t instanceof a && t.delChildrenFromStorage(i)),
              e && e.refresh(),
              this);
        },
        removeAll: function() {
          var t,
            e,
            i = this._children,
            r = this.__storage;
          for (e = 0; e < i.length; e++)
            (t = i[e]), r && (r.delFromStorage(t), t instanceof a && t.delChildrenFromStorage(r)), (t.parent = null);
          return (i.length = 0), this;
        },
        eachChild: function(t, e) {
          for (var i = this._children, r = 0; r < i.length; r++) t.call(e, i[r], r);
          return this;
        },
        traverse: function(t, e) {
          for (var i = 0; i < this._children.length; i++) {
            var r = this._children[i];
            t.call(e, r), 'group' === r.type && r.traverse(t, e);
          }
          return this;
        },
        addChildrenToStorage: function(t) {
          for (var e = 0; e < this._children.length; e++) {
            var i = this._children[e];
            t.addToStorage(i), i instanceof a && i.addChildrenToStorage(t);
          }
        },
        delChildrenFromStorage: function(t) {
          for (var e = 0; e < this._children.length; e++) {
            var i = this._children[e];
            t.delFromStorage(i), i instanceof a && i.delChildrenFromStorage(t);
          }
        },
        dirty: function() {
          return (this.__dirty = !0), this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function(t) {
          for (var e = null, i = new o(0, 0, 0, 0), r = t || this._children, n = [], a = 0; a < r.length; a++) {
            var s = r[a];
            if (!s.ignore && !s.invisible) {
              var l = s.getBoundingRect(),
                c = s.getLocalTransform(n);
              c ? (i.copy(l), i.applyTransform(c), (e = e || i.clone()).union(i)) : (e = e || l.clone()).union(l);
            }
          }
          return e || i;
        },
      }),
        r.inherits(a, n),
        (t.exports = a);
    },
    '4mN7': function(t, e, i) {
      var r = i('QBsz'),
        n = i('Sj9i'),
        o = Math.min,
        a = Math.max,
        s = Math.sin,
        l = Math.cos,
        c = 2 * Math.PI,
        h = r.create(),
        u = r.create(),
        d = r.create(),
        f = [],
        p = [];
      (e.fromPoints = function(t, e, i) {
        if (0 !== t.length) {
          var r,
            n = t[0],
            s = n[0],
            l = n[0],
            c = n[1],
            h = n[1];
          for (r = 1; r < t.length; r++)
            (s = o(s, (n = t[r])[0])), (l = a(l, n[0])), (c = o(c, n[1])), (h = a(h, n[1]));
          (e[0] = s), (e[1] = c), (i[0] = l), (i[1] = h);
        }
      }),
        (e.fromLine = function(t, e, i, r, n, s) {
          (n[0] = o(t, i)), (n[1] = o(e, r)), (s[0] = a(t, i)), (s[1] = a(e, r));
        }),
        (e.fromCubic = function(t, e, i, r, s, l, c, h, u, d) {
          var g,
            m = n.cubicExtrema,
            y = n.cubicAt,
            v = m(t, i, s, c, f);
          for (u[0] = 1 / 0, u[1] = 1 / 0, d[0] = -1 / 0, d[1] = -1 / 0, g = 0; g < v; g++) {
            var x = y(t, i, s, c, f[g]);
            (u[0] = o(x, u[0])), (d[0] = a(x, d[0]));
          }
          for (v = m(e, r, l, h, p), g = 0; g < v; g++) {
            var b = y(e, r, l, h, p[g]);
            (u[1] = o(b, u[1])), (d[1] = a(b, d[1]));
          }
          (u[0] = o(t, u[0])),
            (d[0] = a(t, d[0])),
            (u[0] = o(c, u[0])),
            (d[0] = a(c, d[0])),
            (u[1] = o(e, u[1])),
            (d[1] = a(e, d[1])),
            (u[1] = o(h, u[1])),
            (d[1] = a(h, d[1]));
        }),
        (e.fromQuadratic = function(t, e, i, r, s, l, c, h) {
          var u = n.quadraticExtremum,
            d = n.quadraticAt,
            f = a(o(u(t, i, s), 1), 0),
            p = a(o(u(e, r, l), 1), 0),
            g = d(t, i, s, f),
            m = d(e, r, l, p);
          (c[0] = o(t, s, g)), (c[1] = o(e, l, m)), (h[0] = a(t, s, g)), (h[1] = a(e, l, m));
        }),
        (e.fromArc = function(t, e, i, n, o, a, f, p, g) {
          var m = r.min,
            y = r.max,
            v = Math.abs(o - a);
          if (v % c < 1e-4 && v > 1e-4) return (p[0] = t - i), (p[1] = e - n), (g[0] = t + i), void (g[1] = e + n);
          if (
            ((h[0] = l(o) * i + t),
            (h[1] = s(o) * n + e),
            (u[0] = l(a) * i + t),
            (u[1] = s(a) * n + e),
            m(p, h, u),
            y(g, h, u),
            (o %= c) < 0 && (o += c),
            (a %= c) < 0 && (a += c),
            o > a && !f ? (a += c) : o < a && f && (o += c),
            f)
          ) {
            var x = a;
            (a = o), (o = x);
          }
          for (var b = 0; b < a; b += Math.PI / 2)
            b > o && ((d[0] = l(b) * i + t), (d[1] = s(b) * n + e), m(p, d, p), y(g, d, g));
        });
    },
    '59Ip': function(t, e, i) {
      var r = i('Sj9i');
      e.containStroke = function(t, e, i, n, o, a, s, l, c, h, u) {
        if (0 === c) return !1;
        var d = c;
        return (
          !(
            (u > e + d && u > n + d && u > a + d && u > l + d) ||
            (u < e - d && u < n - d && u < a - d && u < l - d) ||
            (h > t + d && h > i + d && h > o + d && h > s + d) ||
            (h < t - d && h < i - d && h < o - d && h < s - d)
          ) && r.cubicProjectPoint(t, e, i, n, o, a, s, l, h, u, null) <= d / 2
        );
      };
    },
    '5Hur': function(t, e, i) {
      var r = i('4NO4'),
        n = r.normalizeToArray,
        o = (0, r.makeInner)();
      t.exports = {
        clearColorPalette: function() {
          (o(this).colorIdx = 0), (o(this).colorNameMap = {});
        },
        getColorFromPalette: function(t, e, i) {
          var r = o((e = e || this)),
            a = r.colorIdx || 0,
            s = (r.colorNameMap = r.colorNameMap || {});
          if (s.hasOwnProperty(t)) return s[t];
          var l = n(this.get('color', !0)),
            c = this.get('colorLayer', !0),
            h =
              null != i && c
                ? (function(t, e) {
                    for (var i = t.length, r = 0; r < i; r++) if (t[r].length > e) return t[r];
                    return t[i - 1];
                  })(c, i)
                : l;
          if ((h = h || l) && h.length) {
            var u = h[a];
            return t && (s[t] = u), (r.colorIdx = (a + 1) % h.length), u;
          }
        },
      };
    },
    '62sa': function(t, e, i) {
      var r = i('bYtY'),
        n = i('4NO4').makeInner,
        o = i('zTMp'),
        a = i('Ez2D'),
        s = r.each,
        l = r.curry,
        c = n();
      function h(t, e, i, n, o) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e))
          if (t.involveSeries) {
            var l = (function(t, e) {
                var i = e.axis,
                  r = i.dim,
                  n = t,
                  o = [],
                  a = Number.MAX_VALUE,
                  l = -1;
                return (
                  s(e.seriesModels, function(e, c) {
                    var h,
                      u,
                      d = e.getData().mapDimension(r, !0);
                    if (e.getAxisTooltipData) {
                      var f = e.getAxisTooltipData(d, t, i);
                      (u = f.dataIndices), (h = f.nestestValue);
                    } else {
                      if (!(u = e.getData().indicesOfNearest(d[0], t, 'category' === i.type ? 0.5 : null)).length)
                        return;
                      h = e.getData().get(d[0], u[0]);
                    }
                    if (null != h && isFinite(h)) {
                      var p = t - h,
                        g = Math.abs(p);
                      g <= a &&
                        ((g < a || (p >= 0 && l < 0)) && ((a = g), (l = p), (n = h), (o.length = 0)),
                        s(u, function(t) {
                          o.push({
                            seriesIndex: e.seriesIndex,
                            dataIndexInside: t,
                            dataIndex: e.getData().getRawIndex(t),
                          });
                        }));
                    }
                  }),
                  { payloadBatch: o, snapToValue: n }
                );
              })(e, t),
              c = l.payloadBatch,
              h = l.snapToValue;
            c[0] && null == o.seriesIndex && r.extend(o, c[0]),
              !n && t.snap && a.containData(h) && null != h && (e = h),
              i.showPointer(t, e, c, o),
              i.showTooltip(t, l, h);
          } else i.showPointer(t, e);
      }
      function u(t, e, i, r) {
        t[e.key] = { value: i, payloadBatch: r };
      }
      function d(t, e, i, r) {
        var n = i.payloadBatch,
          a = e.axis,
          s = a.model,
          l = e.axisPointerModel;
        if (e.triggerTooltip && n.length) {
          var c = e.coordSys.model,
            h = o.makeKey(c),
            u = t.map[h];
          u ||
            ((u = t.map[h] = {
              coordSysId: c.id,
              coordSysIndex: c.componentIndex,
              coordSysType: c.type,
              coordSysMainType: c.mainType,
              dataByAxis: [],
            }),
            t.list.push(u)),
            u.dataByAxis.push({
              axisDim: a.dim,
              axisIndex: s.componentIndex,
              axisType: s.type,
              axisId: s.id,
              value: r,
              valueLabelOpt: { precision: l.get('label.precision'), formatter: l.get('label.formatter') },
              seriesDataIndices: n.slice(),
            });
        }
      }
      function f(t) {
        var e = t.axis.model,
          i = {},
          r = (i.axisDim = t.axis.dim);
        return (
          (i.axisIndex = i[r + 'AxisIndex'] = e.componentIndex),
          (i.axisName = i[r + 'AxisName'] = e.name),
          (i.axisId = i[r + 'AxisId'] = e.id),
          i
        );
      }
      function p(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
      }
      t.exports = function(t, e, i) {
        var n = t.currTrigger,
          o = [t.x, t.y],
          g = t,
          m = t.dispatchAction || r.bind(i.dispatchAction, i),
          y = e.getComponent('axisPointer').coordSysAxesInfo;
        if (y) {
          p(o) && (o = a({ seriesIndex: g.seriesIndex, dataIndex: g.dataIndex }, e).point);
          var v = p(o),
            x = g.axesInfo,
            b = y.axesInfo,
            _ = 'leave' === n || p(o),
            S = {},
            w = {},
            C = { list: [], map: {} },
            T = { showPointer: l(u, w), showTooltip: l(d, C) };
          s(y.coordSysMap, function(t, e) {
            var i = v || t.containPoint(o);
            s(y.coordSysAxesInfo[e], function(t, e) {
              var r = t.axis,
                n = (function(t, e) {
                  for (var i = 0; i < (t || []).length; i++) {
                    var r = t[i];
                    if (e.axis.dim === r.axisDim && e.axis.model.componentIndex === r.axisIndex) return r;
                  }
                })(x, t);
              if (!_ && i && (!x || n)) {
                var a = n && n.value;
                null != a || v || (a = r.pointToData(o)), null != a && h(t, a, T, !1, S);
              }
            });
          });
          var k = {};
          return (
            s(b, function(t, e) {
              var i = t.linkGroup;
              i &&
                !w[e] &&
                s(i.axesInfo, function(e, r) {
                  var n = w[r];
                  if (e !== t && n) {
                    var o = n.value;
                    i.mapper && (o = t.axis.scale.parse(i.mapper(o, f(e), f(t)))), (k[t.key] = o);
                  }
                });
            }),
            s(k, function(t, e) {
              h(b[e], t, T, !0, S);
            }),
            (function(t, e, i) {
              var r = (i.axesInfo = []);
              s(e, function(e, i) {
                var n = e.axisPointerModel.option,
                  o = t[i];
                o
                  ? (!e.useHandle && (n.status = 'show'),
                    (n.value = o.value),
                    (n.seriesDataIndices = (o.payloadBatch || []).slice()))
                  : !e.useHandle && (n.status = 'hide'),
                  'show' === n.status &&
                    r.push({ axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: n.value });
              });
            })(w, b, S),
            (function(t, e, i, r) {
              if (!p(e) && t.list.length) {
                var n = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
                r({
                  type: 'showTip',
                  escapeConnect: !0,
                  x: e[0],
                  y: e[1],
                  tooltipOption: i.tooltipOption,
                  position: i.position,
                  dataIndexInside: n.dataIndexInside,
                  dataIndex: n.dataIndex,
                  seriesIndex: n.seriesIndex,
                  dataByCoordSys: t.list,
                });
              } else r({ type: 'hideTip' });
            })(C, o, t, m),
            (function(t, e, i) {
              var n = i.getZr(),
                o = c(n).axisPointerLastHighlights || {},
                a = (c(n).axisPointerLastHighlights = {});
              s(t, function(t, e) {
                var i = t.axisPointerModel.option;
                'show' === i.status &&
                  s(i.seriesDataIndices, function(t) {
                    a[t.seriesIndex + ' | ' + t.dataIndex] = t;
                  });
              });
              var l = [],
                h = [];
              r.each(o, function(t, e) {
                !a[e] && h.push(t);
              }),
                r.each(a, function(t, e) {
                  !o[e] && l.push(t);
                }),
                h.length && i.dispatchAction({ type: 'downplay', escapeConnect: !0, batch: h }),
                l.length && i.dispatchAction({ type: 'highlight', escapeConnect: !0, batch: l });
            })(b, 0, i),
            S
          );
        }
      };
    },
    '6GrX': function(t, e, i) {
      var r = i('mFDi'),
        n = i('Xnb7'),
        o = i('bYtY'),
        a = o.getContext,
        s = o.extend,
        l = o.retrieve2,
        c = o.retrieve3,
        h = o.trim,
        u = {},
        d = 0,
        f = 5e3,
        p = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
        g = '12px sans-serif',
        m = {};
      function y(t, e) {
        var i = t + ':' + (e = e || g);
        if (u[i]) return u[i];
        for (var r = (t + '').split('\n'), n = 0, o = 0, a = r.length; o < a; o++) n = Math.max(T(r[o], e).width, n);
        return d > f && ((d = 0), (u = {})), d++, (u[i] = n), n;
      }
      function v(t, e, i) {
        return 'right' === i ? (t -= e) : 'center' === i && (t -= e / 2), t;
      }
      function x(t, e, i) {
        return 'middle' === i ? (t -= e / 2) : 'bottom' === i && (t -= e), t;
      }
      function b(t, e, i, r, n) {
        if (!e) return '';
        var o = (t + '').split('\n');
        n = _(e, i, r, n);
        for (var a = 0, s = o.length; a < s; a++) o[a] = S(o[a], n);
        return o.join('\n');
      }
      function _(t, e, i, r) {
        ((r = s({}, r)).font = e), (i = l(i, '...')), (r.maxIterations = l(r.maxIterations, 2));
        var n = (r.minChar = l(r.minChar, 0));
        r.cnCharWidth = y('\u56fd', e);
        var o = (r.ascCharWidth = y('a', e));
        r.placeholder = l(r.placeholder, '');
        for (var a = (t = Math.max(0, t - 1)), c = 0; c < n && a >= o; c++) a -= o;
        var h = y(i, e);
        return (
          h > a && ((i = ''), (h = 0)),
          (a = t - h),
          (r.ellipsis = i),
          (r.ellipsisWidth = h),
          (r.contentWidth = a),
          (r.containerWidth = t),
          r
        );
      }
      function S(t, e) {
        var i = e.containerWidth,
          r = e.font,
          n = e.contentWidth;
        if (!i) return '';
        var o = y(t, r);
        if (o <= i) return t;
        for (var a = 0; ; a++) {
          if (o <= n || a >= e.maxIterations) {
            t += e.ellipsis;
            break;
          }
          var s = 0 === a ? w(t, n, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor((t.length * n) / o) : 0;
          o = y((t = t.substr(0, s)), r);
        }
        return '' === t && (t = e.placeholder), t;
      }
      function w(t, e, i, r) {
        for (var n = 0, o = 0, a = t.length; o < a && n < e; o++) {
          var s = t.charCodeAt(o);
          n += 0 <= s && s <= 127 ? i : r;
        }
        return o;
      }
      function C(t) {
        return y('\u56fd', t);
      }
      function T(t, e) {
        return m.measureText(t, e);
      }
      function k(t, e, i, r, n) {
        null != t && (t += '');
        var o = l(r, C(e)),
          a = t ? t.split('\n') : [],
          s = a.length * o,
          c = s;
        if ((i && (c += i[0] + i[2]), t && n)) {
          var h = n.outerHeight,
            u = n.outerWidth;
          if (null != h && c > h) (t = ''), (a = []);
          else if (null != u)
            for (
              var d = _(u - (i ? i[1] + i[3] : 0), e, n.ellipsis, { minChar: n.minChar, placeholder: n.placeholder }),
                f = 0,
                p = a.length;
              f < p;
              f++
            )
              a[f] = S(a[f], d);
        }
        return { lines: a, height: s, outerHeight: c, lineHeight: o };
      }
      function M(t, e) {
        var i = { lines: [], width: 0, height: 0 };
        if ((null != t && (t += ''), !t)) return i;
        for (var r, o = (p.lastIndex = 0); null != (r = p.exec(t)); ) {
          var a = r.index;
          a > o && A(i, t.substring(o, a)), A(i, r[2], r[1]), (o = p.lastIndex);
        }
        o < t.length && A(i, t.substring(o, t.length));
        var s = i.lines,
          h = 0,
          u = 0,
          d = [],
          f = e.textPadding,
          g = e.truncate,
          m = g && g.outerWidth,
          v = g && g.outerHeight;
        f && (null != m && (m -= f[1] + f[3]), null != v && (v -= f[0] + f[2]));
        for (var x = 0; x < s.length; x++) {
          for (var _ = s[x], S = 0, w = 0, T = 0; T < _.tokens.length; T++) {
            var k = ((z = _.tokens[T]).styleName && e.rich[z.styleName]) || {},
              M = (z.textPadding = k.textPadding),
              D = (z.font = k.font || e.font),
              I = (z.textHeight = l(k.textHeight, C(D)));
            if (
              (M && (I += M[0] + M[2]),
              (z.height = I),
              (z.lineHeight = c(k.textLineHeight, e.textLineHeight, I)),
              (z.textAlign = (k && k.textAlign) || e.textAlign),
              (z.textVerticalAlign = (k && k.textVerticalAlign) || 'middle'),
              null != v && h + z.lineHeight > v)
            )
              return { lines: [], width: 0, height: 0 };
            z.textWidth = y(z.text, D);
            var O = k.textWidth,
              L = null == O || 'auto' === O;
            if ('string' == typeof O && '%' === O.charAt(O.length - 1)) (z.percentWidth = O), d.push(z), (O = 0);
            else {
              if (L) {
                O = z.textWidth;
                var P = k.textBackgroundColor,
                  E = P && P.image;
                E && ((E = n.findExistImage(E)), n.isImageReady(E) && (O = Math.max(O, (E.width * I) / E.height)));
              }
              var B = M ? M[1] + M[3] : 0;
              O += B;
              var R = null != m ? m - w : null;
              null != R &&
                R < O &&
                (!L || R < B
                  ? ((z.text = ''), (z.textWidth = O = 0))
                  : ((z.text = b(z.text, R - B, D, g.ellipsis, { minChar: g.minChar })),
                    (z.textWidth = y(z.text, D)),
                    (O = z.textWidth + B)));
            }
            (w += z.width = O), k && (S = Math.max(S, z.lineHeight));
          }
          (_.width = w), (_.lineHeight = S), (h += S), (u = Math.max(u, w));
        }
        for (
          i.outerWidth = i.width = l(e.textWidth, u),
            i.outerHeight = i.height = l(e.textHeight, h),
            f && ((i.outerWidth += f[1] + f[3]), (i.outerHeight += f[0] + f[2])),
            x = 0;
          x < d.length;
          x++
        ) {
          var z;
          (z = d[x]).width = (parseInt(z.percentWidth, 10) / 100) * u;
        }
        return i;
      }
      function A(t, e, i) {
        for (var r = '' === e, n = e.split('\n'), o = t.lines, a = 0; a < n.length; a++) {
          var s = n[a],
            l = { styleName: i, text: s, isLineHolder: !s && !r };
          if (a) o.push({ tokens: [l] });
          else {
            var c = (o[o.length - 1] || (o[0] = { tokens: [] })).tokens,
              h = c.length;
            1 === h && c[0].isLineHolder ? (c[0] = l) : (s || !h || r) && c.push(l);
          }
        }
      }
      (m.measureText = function(t, e) {
        var i = a();
        return (i.font = e || g), i.measureText(t);
      }),
        (e.DEFAULT_FONT = g),
        (e.$override = function(t, e) {
          m[t] = e;
        }),
        (e.getWidth = y),
        (e.getBoundingRect = function(t, e, i, n, o, a, s, l) {
          return s
            ? (function(t, e, i, n, o, a, s, l) {
                var c = M(t, { rich: s, truncate: l, font: e, textAlign: i, textPadding: o, textLineHeight: a }),
                  h = c.outerWidth,
                  u = c.outerHeight,
                  d = v(0, h, i),
                  f = x(0, u, n);
                return new r(d, f, h, u);
              })(t, e, i, n, o, a, s, l)
            : (function(t, e, i, n, o, a, s) {
                var l = k(t, e, o, a, s),
                  c = y(t, e);
                o && (c += o[1] + o[3]);
                var h = l.outerHeight,
                  u = v(0, c, i),
                  d = x(0, h, n),
                  f = new r(u, d, c, h);
                return (f.lineHeight = l.lineHeight), f;
              })(t, e, i, n, o, a, l);
        }),
        (e.adjustTextX = v),
        (e.adjustTextY = x),
        (e.adjustTextPositionOnRect = function(t, e, i) {
          var r = e.x,
            n = e.y,
            o = e.height,
            a = e.width,
            s = o / 2,
            l = 'left',
            c = 'top';
          switch (t) {
            case 'left':
              (r -= i), (n += s), (l = 'right'), (c = 'middle');
              break;
            case 'right':
              (r += i + a), (n += s), (c = 'middle');
              break;
            case 'top':
              (r += a / 2), (n -= i), (l = 'center'), (c = 'bottom');
              break;
            case 'bottom':
              (r += a / 2), (n += o + i), (l = 'center');
              break;
            case 'inside':
              (r += a / 2), (n += s), (l = 'center'), (c = 'middle');
              break;
            case 'insideLeft':
              (r += i), (n += s), (c = 'middle');
              break;
            case 'insideRight':
              (r += a - i), (n += s), (l = 'right'), (c = 'middle');
              break;
            case 'insideTop':
              (r += a / 2), (n += i), (l = 'center');
              break;
            case 'insideBottom':
              (r += a / 2), (n += o - i), (l = 'center'), (c = 'bottom');
              break;
            case 'insideTopLeft':
              (r += i), (n += i);
              break;
            case 'insideTopRight':
              (r += a - i), (n += i), (l = 'right');
              break;
            case 'insideBottomLeft':
              (r += i), (n += o - i), (c = 'bottom');
              break;
            case 'insideBottomRight':
              (r += a - i), (n += o - i), (l = 'right'), (c = 'bottom');
          }
          return { x: r, y: n, textAlign: l, textVerticalAlign: c };
        }),
        (e.truncateText = b),
        (e.getLineHeight = C),
        (e.measureText = T),
        (e.parsePlainText = k),
        (e.parseRichText = M),
        (e.makeFont = function(t) {
          var e =
            (t.fontSize || t.fontFamily) &&
            [t.fontStyle, t.fontWeight, (t.fontSize || 12) + 'px', t.fontFamily || 'sans-serif'].join(' ');
          return (e && h(e)) || t.textFont || t.font;
        });
    },
    '6Ic6': function(t, e, i) {
      var r = i('bYtY').each,
        n = i('4fz+'),
        o = i('iRjW'),
        a = i('Yl7c'),
        s = i('4NO4'),
        l = i('9H2F').createTask,
        c = i('zM3Q'),
        h = s.makeInner(),
        u = c();
      function d() {
        (this.group = new n()),
          (this.uid = o.getUID('viewChart')),
          (this.renderTask = l({ plan: m, reset: y })),
          (this.renderTask.context = { view: this });
      }
      var f = (d.prototype = {
        type: 'chart',
        init: function(t, e) {},
        render: function(t, e, i, r) {},
        highlight: function(t, e, i, r) {
          g(t.getData(), r, 'emphasis');
        },
        downplay: function(t, e, i, r) {
          g(t.getData(), r, 'normal');
        },
        remove: function(t, e) {
          this.group.removeAll();
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null,
        filterForExposedEvent: null,
      });
      function p(t, e) {
        if (t && (t.trigger(e), 'group' === t.type)) for (var i = 0; i < t.childCount(); i++) p(t.childAt(i), e);
      }
      function g(t, e, i) {
        var n = s.queryDataIndex(t, e);
        null != n
          ? r(s.normalizeToArray(n), function(e) {
              p(t.getItemGraphicEl(e), i);
            })
          : t.eachItemGraphicEl(function(t) {
              p(t, i);
            });
      }
      function m(t) {
        return u(t.model);
      }
      function y(t) {
        var e = t.model,
          i = t.ecModel,
          r = t.api,
          n = t.payload,
          o = e.pipelineContext.progressiveRender,
          a = t.view,
          s = n && h(n).updateMethod,
          l = o ? 'incrementalPrepareRender' : s && a[s] ? s : 'render';
        return 'render' !== l && a[l](e, i, r, n), v[l];
      }
      (f.updateView = f.updateLayout = f.updateVisual = function(t, e, i, r) {
        this.render(t, e, i, r);
      }),
        a.enableClassExtend(d, ['dispose']),
        a.enableClassManagement(d, { registerWhenExtend: !0 }),
        (d.markUpdateMethod = function(t, e) {
          h(t).updateMethod = e;
        });
      var v = {
        incrementalPrepareRender: {
          progress: function(t, e) {
            e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
          },
        },
        render: {
          forceFirstProgress: !0,
          progress: function(t, e) {
            e.view.render(e.model, e.ecModel, e.api, e.payload);
          },
        },
      };
      t.exports = d;
    },
    '7DRL': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = r.createHashMap,
        o = r.isString,
        a = r.isArray,
        s = r.each,
        l = i('MEGo').parseXML,
        c = n(),
        h = {
          registerMap: function(t, e, i) {
            var r;
            return (
              a(e)
                ? (r = e)
                : e.svg
                ? (r = [{ type: 'svg', source: e.svg, specialAreas: e.specialAreas }])
                : (e.geoJson && !e.features && ((i = e.specialAreas), (e = e.geoJson)),
                  (r = [{ type: 'geoJSON', source: e, specialAreas: i }])),
              s(r, function(t) {
                var e = t.type;
                'geoJson' === e && (e = t.type = 'geoJSON'), (0, u[e])(t);
              }),
              c.set(t, r)
            );
          },
          retrieveMap: function(t) {
            return c.get(t);
          },
        },
        u = {
          geoJSON: function(t) {
            var e = t.source;
            t.geoJSON = o(e)
              ? 'undefined' != typeof JSON && JSON.parse
                ? JSON.parse(e)
                : new Function('return (' + e + ');')()
              : e;
          },
          svg: function(t) {
            t.svgXML = l(t.source);
          },
        };
      t.exports = h;
    },
    '7G+c': function(t, e, i) {
      var r = i('bYtY'),
        n = r.createHashMap,
        o = r.isTypedArray,
        a = i('Yl7c').enableClassCheck,
        s = i('k9D9'),
        l = s.SOURCE_FORMAT_ORIGINAL,
        c = s.SERIES_LAYOUT_BY_COLUMN,
        h = s.SOURCE_FORMAT_UNKNOWN,
        u = s.SOURCE_FORMAT_TYPED_ARRAY,
        d = s.SOURCE_FORMAT_KEYED_COLUMNS;
      function f(t) {
        (this.fromDataset = t.fromDataset),
          (this.data = t.data || (t.sourceFormat === d ? {} : [])),
          (this.sourceFormat = t.sourceFormat || h),
          (this.seriesLayoutBy = t.seriesLayoutBy || c),
          (this.dimensionsDefine = t.dimensionsDefine),
          (this.encodeDefine = t.encodeDefine && n(t.encodeDefine)),
          (this.startIndex = t.startIndex || 0),
          (this.dimensionsDetectCount = t.dimensionsDetectCount);
      }
      (f.seriesDataToSource = function(t) {
        return new f({ data: t, sourceFormat: o(t) ? u : l, fromDataset: !1 });
      }),
        a(f),
        (t.exports = f);
    },
    '7SHv': function(t, e, i) {
      var r = i('LPTA').devicePixelRatio,
        n = i('bYtY'),
        o = i('SUKs'),
        a = i('mFDi'),
        s = i('BPZU'),
        l = i('Xmg4'),
        c = i('mLcG'),
        h = i('Dagg'),
        u = i('ItGF');
      function d(t) {
        return parseInt(t, 10);
      }
      var f = new a(0, 0, 0, 0),
        p = new a(0, 0, 0, 0),
        g = function(t, e, i) {
          this.type = 'canvas';
          var o = !t.nodeName || 'CANVAS' === t.nodeName.toUpperCase();
          (this._opts = i = n.extend({}, i || {})),
            (this.dpr = i.devicePixelRatio || r),
            (this._singleCanvas = o),
            (this.root = t);
          var a = t.style;
          a &&
            ((a['-webkit-tap-highlight-color'] = 'transparent'),
            (a['-webkit-user-select'] = a['user-select'] = a['-webkit-touch-callout'] = 'none'),
            (t.innerHTML = '')),
            (this.storage = e);
          var s = (this._zlevelList = []),
            c = (this._layers = {});
          if (((this._layerConfig = {}), (this._needsManuallyCompositing = !1), o)) {
            var h = t.width,
              u = t.height;
            null != i.width && (h = i.width),
              null != i.height && (u = i.height),
              (this.dpr = i.devicePixelRatio || 1),
              (t.width = h * this.dpr),
              (t.height = u * this.dpr),
              (this._width = h),
              (this._height = u);
            var d = new l(t, this, this.dpr);
            (d.__builtin__ = !0),
              d.initContext(),
              (c[314159] = d),
              (d.zlevel = 314159),
              s.push(314159),
              (this._domRoot = t);
          } else {
            (this._width = this._getSize(0)), (this._height = this._getSize(1));
            var f = (this._domRoot = (function(t, e) {
              var i = document.createElement('div');
              return (
                (i.style.cssText =
                  [
                    'position:relative',
                    'overflow:hidden',
                    'width:' + t + 'px',
                    'height:' + e + 'px',
                    'padding:0',
                    'margin:0',
                    'border-width:0',
                  ].join(';') + ';'),
                i
              );
            })(this._width, this._height));
            t.appendChild(f);
          }
          (this._hoverlayer = null), (this._hoverElements = []);
        };
      (g.prototype = {
        constructor: g,
        getType: function() {
          return 'canvas';
        },
        isSingleCanvas: function() {
          return this._singleCanvas;
        },
        getViewportRoot: function() {
          return this._domRoot;
        },
        getViewportRootOffset: function() {
          var t = this.getViewportRoot();
          if (t) return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
        },
        refresh: function(t) {
          var e = this.storage.getDisplayList(!0),
            i = this._zlevelList;
          (this._redrawId = Math.random()), this._paintList(e, t, this._redrawId);
          for (var r = 0; r < i.length; r++) {
            var n = this._layers[i[r]];
            !n.__builtin__ && n.refresh && n.refresh(0 === r ? this._backgroundColor : null);
          }
          return this.refreshHover(), this;
        },
        addHover: function(t, e) {
          if (!t.__hoverMir) {
            var i = new t.constructor({ style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent });
            return (i.__from = t), (t.__hoverMir = i), e && i.setStyle(e), this._hoverElements.push(i), i;
          }
        },
        removeHover: function(t) {
          var e = this._hoverElements,
            i = n.indexOf(e, t.__hoverMir);
          i >= 0 && e.splice(i, 1), (t.__hoverMir = null);
        },
        clearHover: function(t) {
          for (var e = this._hoverElements, i = 0; i < e.length; i++) {
            var r = e[i].__from;
            r && (r.__hoverMir = null);
          }
          e.length = 0;
        },
        refreshHover: function() {
          var t = this._hoverElements,
            e = t.length,
            i = this._hoverlayer;
          if ((i && i.clear(), e)) {
            s(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
            var r = {};
            i.ctx.save();
            for (var n = 0; n < e; ) {
              var o = t[n],
                a = o.__from;
              a && a.__zr
                ? (n++,
                  a.invisible ||
                    ((o.transform = a.transform),
                    (o.invTransform = a.invTransform),
                    (o.__clipPaths = a.__clipPaths),
                    this._doPaintEl(o, i, !0, r)))
                : (t.splice(n, 1), (a.__hoverMir = null), e--);
            }
            i.ctx.restore();
          }
        },
        getHoverLayer: function() {
          return this.getLayer(1e5);
        },
        _paintList: function(t, e, i) {
          if (this._redrawId === i) {
            (e = e || !1), this._updateLayerStatus(t);
            var r = this._doPaintList(t, e);
            if ((this._needsManuallyCompositing && this._compositeManually(), !r)) {
              var n = this;
              c(function() {
                n._paintList(t, e, i);
              });
            }
          }
        },
        _compositeManually: function() {
          var t = this.getLayer(314159).ctx,
            e = this._domRoot.width,
            i = this._domRoot.height;
          t.clearRect(0, 0, e, i),
            this.eachBuiltinLayer(function(r) {
              r.virtual && t.drawImage(r.dom, 0, 0, e, i);
            });
        },
        _doPaintList: function(t, e) {
          for (var i = [], r = 0; r < this._zlevelList.length; r++)
            (s = this._layers[this._zlevelList[r]]).__builtin__ &&
              s !== this._hoverlayer &&
              (s.__dirty || e) &&
              i.push(s);
          for (var o = !0, a = 0; a < i.length; a++) {
            var s,
              l = (s = i[a]).ctx,
              c = {};
            l.save();
            var h = e ? s.__startIndex : s.__drawIndex,
              d = !e && s.incremental && Date.now,
              f = d && Date.now(),
              p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
            if (s.__startIndex === s.__endIndex) s.clear(!1, p);
            else if (h === s.__startIndex) {
              var g = t[h];
              (g.incremental && g.notClear && !e) || s.clear(!1, p);
            }
            -1 === h && (console.error('For some unknown reason. drawIndex is -1'), (h = s.__startIndex));
            for (var m = h; m < s.__endIndex; m++) {
              var y = t[m];
              if ((this._doPaintEl(y, s, e, c), (y.__dirty = y.__dirtyText = !1), d && Date.now() - f > 15)) break;
            }
            (s.__drawIndex = m),
              s.__drawIndex < s.__endIndex && (o = !1),
              c.prevElClipPaths && l.restore(),
              l.restore();
          }
          return (
            u.wxa &&
              n.each(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
              }),
            o
          );
        },
        _doPaintEl: function(t, e, i, r) {
          var n = e.ctx,
            o = t.transform;
          if (
            (e.__dirty || i) &&
            !t.invisible &&
            0 !== t.style.opacity &&
            (!o || o[0] || o[3]) &&
            (!t.culling ||
              !(function(t, e, i) {
                return (
                  f.copy(t.getBoundingRect()),
                  t.transform && f.applyTransform(t.transform),
                  (p.width = e),
                  (p.height = i),
                  !f.intersect(p)
                );
              })(t, this._width, this._height))
          ) {
            var a = t.__clipPaths;
            (r.prevElClipPaths &&
              !(function(t, e) {
                if (t === e) return !1;
                if (!t || !e || t.length !== e.length) return !0;
                for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0;
              })(a, r.prevElClipPaths)) ||
              (r.prevElClipPaths && (e.ctx.restore(), (r.prevElClipPaths = null), (r.prevEl = null)),
              a &&
                (n.save(),
                (function(t, e) {
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.setTransform(e), e.beginPath(), r.buildPath(e, r.shape), e.clip(), r.restoreTransform(e);
                  }
                })(a, n),
                (r.prevElClipPaths = a))),
              t.beforeBrush && t.beforeBrush(n),
              t.brush(n, r.prevEl || null),
              (r.prevEl = t),
              t.afterBrush && t.afterBrush(n);
          }
        },
        getLayer: function(t, e) {
          this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
          var i = this._layers[t];
          return (
            i ||
              (((i = new l('zr_' + t, this, this.dpr)).zlevel = t),
              (i.__builtin__ = !0),
              this._layerConfig[t] && n.merge(i, this._layerConfig[t], !0),
              e && (i.virtual = e),
              this.insertLayer(t, i),
              i.initContext()),
            i
          );
        },
        insertLayer: function(t, e) {
          var i = this._layers,
            r = this._zlevelList,
            n = r.length,
            a = null,
            s = -1,
            l = this._domRoot;
          if (i[t]) o('ZLevel ' + t + ' has been used already');
          else if (
            (function(t) {
              return !!t && (!!t.__builtin__ || ('function' == typeof t.resize && 'function' == typeof t.refresh));
            })(e)
          ) {
            if (n > 0 && t > r[0]) {
              for (s = 0; s < n - 1 && !(r[s] < t && r[s + 1] > t); s++);
              a = i[r[s]];
            }
            if ((r.splice(s + 1, 0, t), (i[t] = e), !e.virtual))
              if (a) {
                var c = a.dom;
                c.nextSibling ? l.insertBefore(e.dom, c.nextSibling) : l.appendChild(e.dom);
              } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
          } else o('Layer of zlevel ' + t + ' is not valid');
        },
        eachLayer: function(t, e) {
          var i,
            r,
            n = this._zlevelList;
          for (r = 0; r < n.length; r++) t.call(e, this._layers[(i = n[r])], i);
        },
        eachBuiltinLayer: function(t, e) {
          var i,
            r,
            n,
            o = this._zlevelList;
          for (n = 0; n < o.length; n++) (i = this._layers[(r = o[n])]).__builtin__ && t.call(e, i, r);
        },
        eachOtherLayer: function(t, e) {
          var i,
            r,
            n,
            o = this._zlevelList;
          for (n = 0; n < o.length; n++) (i = this._layers[(r = o[n])]).__builtin__ || t.call(e, i, r);
        },
        getLayers: function() {
          return this._layers;
        },
        _updateLayerStatus: function(t) {
          function e(t) {
            r && (r.__endIndex !== t && (r.__dirty = !0), (r.__endIndex = t));
          }
          if (
            (this.eachBuiltinLayer(function(t, e) {
              t.__dirty = t.__used = !1;
            }),
            this._singleCanvas)
          )
            for (var i = 1; i < t.length; i++)
              if ((a = t[i]).zlevel !== t[i - 1].zlevel || a.incremental) {
                this._needsManuallyCompositing = !0;
                break;
              }
          var r = null,
            n = 0;
          for (i = 0; i < t.length; i++) {
            var a,
              s,
              l = (a = t[i]).zlevel;
            a.incremental
              ? (((s = this.getLayer(l + 0.001, this._needsManuallyCompositing)).incremental = !0), (n = 1))
              : (s = this.getLayer(l + (n > 0 ? 0.01 : 0), this._needsManuallyCompositing)),
              s.__builtin__ || o('ZLevel ' + l + ' has been used by unkown layer ' + s.id),
              s !== r &&
                ((s.__used = !0),
                s.__startIndex !== i && (s.__dirty = !0),
                (s.__startIndex = i),
                (s.__drawIndex = s.incremental ? -1 : i),
                e(i),
                (r = s)),
              a.__dirty && ((s.__dirty = !0), s.incremental && s.__drawIndex < 0 && (s.__drawIndex = i));
          }
          e(i),
            this.eachBuiltinLayer(function(t, e) {
              !t.__used &&
                t.getElementCount() > 0 &&
                ((t.__dirty = !0), (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        },
        clear: function() {
          return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function(t) {
          t.clear();
        },
        setBackgroundColor: function(t) {
          this._backgroundColor = t;
        },
        configLayer: function(t, e) {
          if (e) {
            var i = this._layerConfig;
            i[t] ? n.merge(i[t], e, !0) : (i[t] = e);
            for (var r = 0; r < this._zlevelList.length; r++) {
              var o = this._zlevelList[r];
              (o !== t && o !== t + 0.01) || n.merge(this._layers[o], i[t], !0);
            }
          }
        },
        delLayer: function(t) {
          var e = this._layers,
            i = this._zlevelList,
            r = e[t];
          r && (r.dom.parentNode.removeChild(r.dom), delete e[t], i.splice(n.indexOf(i, t), 1));
        },
        resize: function(t, e) {
          if (this._domRoot.style) {
            var i = this._domRoot;
            i.style.display = 'none';
            var r = this._opts;
            if (
              (null != t && (r.width = t),
              null != e && (r.height = e),
              (t = this._getSize(0)),
              (e = this._getSize(1)),
              (i.style.display = ''),
              this._width !== t || e !== this._height)
            ) {
              for (var o in ((i.style.width = t + 'px'), (i.style.height = e + 'px'), this._layers))
                this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
              n.each(this._progressiveLayers, function(i) {
                i.resize(t, e);
              }),
                this.refresh(!0);
            }
            (this._width = t), (this._height = e);
          } else {
            if (null == t || null == e) return;
            (this._width = t), (this._height = e), this.getLayer(314159).resize(t, e);
          }
          return this;
        },
        clearLayer: function(t) {
          var e = this._layers[t];
          e && e.clear();
        },
        dispose: function() {
          (this.root.innerHTML = ''), (this.root = this.storage = this._domRoot = this._layers = null);
        },
        getRenderedCanvas: function(t) {
          if (this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
          var e = new l('image', this, (t = t || {}).pixelRatio || this.dpr);
          if ((e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr)) {
            this.refresh();
            var i = e.dom.width,
              r = e.dom.height,
              n = e.ctx;
            this.eachLayer(function(t) {
              t.__builtin__
                ? n.drawImage(t.dom, 0, 0, i, r)
                : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
            });
          } else
            for (var o = {}, a = this.storage.getDisplayList(!0), s = 0; s < a.length; s++)
              this._doPaintEl(a[s], e, !0, o);
          return e.dom;
        },
        getWidth: function() {
          return this._width;
        },
        getHeight: function() {
          return this._height;
        },
        _getSize: function(t) {
          var e = this._opts,
            i = ['width', 'height'][t],
            r = ['clientWidth', 'clientHeight'][t],
            n = ['paddingLeft', 'paddingTop'][t],
            o = ['paddingRight', 'paddingBottom'][t];
          if (null != e[i] && 'auto' !== e[i]) return parseFloat(e[i]);
          var a = this.root,
            s = document.defaultView.getComputedStyle(a);
          return ((a[r] || d(s[i]) || d(a.style[i])) - (d(s[n]) || 0) - (d(s[o]) || 0)) | 0;
        },
        pathToImage: function(t, e) {
          e = e || this.dpr;
          var i = document.createElement('canvas'),
            r = i.getContext('2d'),
            n = t.getBoundingRect(),
            o = t.style,
            a = o.shadowBlur * e,
            s = o.shadowOffsetX * e,
            l = o.shadowOffsetY * e,
            c = o.hasStroke() ? o.lineWidth : 0,
            u = Math.max(c / 2, -s + a),
            d = Math.max(c / 2, s + a),
            f = Math.max(c / 2, -l + a),
            p = Math.max(c / 2, l + a),
            g = n.width + u + d,
            m = n.height + f + p;
          (i.width = g * e), (i.height = m * e), r.scale(e, e), r.clearRect(0, 0, g, m), (r.dpr = e);
          var y = { position: t.position, rotation: t.rotation, scale: t.scale };
          (t.position = [u - n.x, f - n.y]), (t.rotation = 0), (t.scale = [1, 1]), t.updateTransform(), t && t.brush(r);
          var v = new h({ style: { x: 0, y: 0, image: i } });
          return (
            null != y.position && (v.position = t.position = y.position),
            null != y.rotation && (v.rotation = t.rotation = y.rotation),
            null != y.scale && (v.scale = t.scale = y.scale),
            v
          );
        },
      }),
        (t.exports = g);
    },
    '7aKB': function(t, e, i) {
      var r = i('bYtY'),
        n = i('6GrX'),
        o = i('OELB'),
        a = r.normalizeCssArray,
        s = /([&<>"'])/g,
        l = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
      function c(t) {
        return null == t
          ? ''
          : (t + '').replace(s, function(t, e) {
              return l[e];
            });
      }
      var h = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        u = function(t, e) {
          return '{' + t + (null == e ? '' : e) + '}';
        };
      function d(t, e) {
        return '0000'.substr(0, e - (t += '').length) + t;
      }
      var f = n.truncateText;
      (e.addCommas = function(t) {
        return isNaN(t)
          ? '-'
          : (t = (t + '').split('.'))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
              (t.length > 1 ? '.' + t[1] : '');
      }),
        (e.toCamelCase = function(t, e) {
          return (
            (t = (t || '').toLowerCase().replace(/-(.)/g, function(t, e) {
              return e.toUpperCase();
            })),
            e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
            t
          );
        }),
        (e.normalizeCssArray = a),
        (e.encodeHTML = c),
        (e.formatTpl = function(t, e, i) {
          r.isArray(e) || (e = [e]);
          var n = e.length;
          if (!n) return '';
          for (var o = e[0].$vars || [], a = 0; a < o.length; a++) {
            var s = h[a];
            t = t.replace(u(s), u(s, 0));
          }
          for (var l = 0; l < n; l++)
            for (var d = 0; d < o.length; d++) {
              var f = e[l][o[d]];
              t = t.replace(u(h[d], l), i ? c(f) : f);
            }
          return t;
        }),
        (e.formatTplSimple = function(t, e, i) {
          return (
            r.each(e, function(e, r) {
              t = t.replace('{' + r + '}', i ? c(e) : e);
            }),
            t
          );
        }),
        (e.getTooltipMarker = function(t, e) {
          var i = (t = r.isString(t) ? { color: t, extraCssText: e } : t || {}).color,
            n = ((e = t.extraCssText), t.renderMode || 'html'),
            o = t.markerId || 'X';
          return i
            ? 'html' === n
              ? 'subItem' === t.type
                ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
                  c(i) +
                  ';' +
                  (e || '') +
                  '"></span>'
                : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                  c(i) +
                  ';' +
                  (e || '') +
                  '"></span>'
              : { renderMode: n, content: '{marker' + o + '|}  ', style: { color: i } }
            : '';
        }),
        (e.formatTime = function(t, e, i) {
          ('week' !== t && 'month' !== t && 'quarter' !== t && 'half-year' !== t && 'year' !== t) ||
            (t = 'MM-dd\nyyyy');
          var r = o.parseDate(e),
            n = i ? 'UTC' : '',
            a = r['get' + n + 'FullYear'](),
            s = r['get' + n + 'Month']() + 1,
            l = r['get' + n + 'Date'](),
            c = r['get' + n + 'Hours'](),
            h = r['get' + n + 'Minutes'](),
            u = r['get' + n + 'Seconds'](),
            f = r['get' + n + 'Milliseconds']();
          return t
            .replace('MM', d(s, 2))
            .replace('M', s)
            .replace('yyyy', a)
            .replace('yy', a % 100)
            .replace('dd', d(l, 2))
            .replace('d', l)
            .replace('hh', d(c, 2))
            .replace('h', c)
            .replace('mm', d(h, 2))
            .replace('m', h)
            .replace('ss', d(u, 2))
            .replace('s', u)
            .replace('SSS', d(f, 3));
        }),
        (e.capitalFirst = function(t) {
          return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
        }),
        (e.truncateText = f),
        (e.getTextBoundingRect = function(t) {
          return n.getBoundingRect(
            t.text,
            t.font,
            t.textAlign,
            t.textVerticalAlign,
            t.textPadding,
            t.textLineHeight,
            t.rich,
            t.truncate,
          );
        }),
        (e.getTextRect = function(t, e, i, r, o, a, s, l) {
          return n.getBoundingRect(t, e, i, r, o, l, a, s);
        });
    },
    '7hqr': function(t, e, i) {
      var r = i('bYtY'),
        n = r.each,
        o = r.isString;
      function a(t, e) {
        return !!e && e === t.getCalculationInfo('stackedDimension');
      }
      (e.enableDataStack = function(t, e, i) {
        var r,
          a,
          s,
          l,
          c = (i = i || {}).byIndex,
          h = i.stackedCoordDimension,
          u = !(!t || !t.get('stack'));
        if (
          (n(e, function(t, i) {
            o(t) && (e[i] = t = { name: t }),
              u &&
                !t.isExtraCoord &&
                (c || r || !t.ordinalMeta || (r = t),
                a || 'ordinal' === t.type || 'time' === t.type || (h && h !== t.coordDim) || (a = t));
          }),
          !a || c || r || (c = !0),
          a)
        ) {
          (s = '__\0ecstackresult'), (l = '__\0ecstackedover'), r && (r.createInvertedIndices = !0);
          var d = a.coordDim,
            f = a.type,
            p = 0;
          n(e, function(t) {
            t.coordDim === d && p++;
          }),
            e.push({ name: s, coordDim: d, coordDimIndex: p, type: f, isExtraCoord: !0, isCalculationCoord: !0 }),
            e.push({ name: l, coordDim: l, coordDimIndex: ++p, type: f, isExtraCoord: !0, isCalculationCoord: !0 });
        }
        return {
          stackedDimension: a && a.name,
          stackedByDimension: r && r.name,
          isStackedByIndex: c,
          stackedOverDimension: l,
          stackResultDimension: s,
        };
      }),
        (e.isDimensionStacked = a),
        (e.getStackedDimension = function(t, e) {
          return a(t, e) ? t.getCalculationInfo('stackResultDimension') : e;
        });
    },
    '7oTu': function(t, e, i) {
      var r = i('IMiH'),
        n = i('QBsz').applyTransform,
        o = r.CMD,
        a = [[], [], []],
        s = Math.sqrt,
        l = Math.atan2;
      t.exports = function(t, e) {
        var i,
          r,
          c,
          h,
          u,
          d = t.data,
          f = o.M,
          p = o.C,
          g = o.L,
          m = o.R,
          y = o.A,
          v = o.Q;
        for (c = 0, h = 0; c < d.length; ) {
          switch (((i = d[c++]), (h = c), (r = 0), i)) {
            case f:
            case g:
              r = 1;
              break;
            case p:
              r = 3;
              break;
            case v:
              r = 2;
              break;
            case y:
              var x = e[4],
                b = e[5],
                _ = s(e[0] * e[0] + e[1] * e[1]),
                S = s(e[2] * e[2] + e[3] * e[3]),
                w = l(-e[1] / S, e[0] / _);
              (d[c] *= _),
                (d[c++] += x),
                (d[c] *= S),
                (d[c++] += b),
                (d[c++] *= _),
                (d[c++] *= S),
                (d[c++] += w),
                (d[c++] += w),
                (h = c += 2);
              break;
            case m:
              (C[0] = d[c++]),
                (C[1] = d[c++]),
                n(C, C, e),
                (d[h++] = C[0]),
                (d[h++] = C[1]),
                (C[0] += d[c++]),
                (C[1] += d[c++]),
                n(C, C, e),
                (d[h++] = C[0]),
                (d[h++] = C[1]);
          }
          for (u = 0; u < r; u++) {
            var C;
            ((C = a[u])[0] = d[c++]), (C[1] = d[c++]), n(C, C, e), (d[h++] = C[0]), (d[h++] = C[1]);
          }
        }
      };
    },
    '8hn6': function(t, e) {
      var i = [
          '#dd6b66',
          '#759aa0',
          '#e69d87',
          '#8dc1a9',
          '#ea7e53',
          '#eedd78',
          '#73a373',
          '#73b9bc',
          '#7289ab',
          '#91ca8c',
          '#f49f42',
        ],
        r = {
          color: i,
          backgroundColor: '#333',
          tooltip: { axisPointer: { lineStyle: { color: '#eee' }, crossStyle: { color: '#eee' } } },
          legend: { textStyle: { color: '#eee' } },
          textStyle: { color: '#eee' },
          title: { textStyle: { color: '#eee' } },
          toolbox: { iconStyle: { normal: { borderColor: '#eee' } } },
          dataZoom: { textStyle: { color: '#eee' } },
          visualMap: { textStyle: { color: '#eee' } },
          timeline: {
            lineStyle: { color: '#eee' },
            itemStyle: { normal: { color: i[1] } },
            label: { normal: { textStyle: { color: '#eee' } } },
            controlStyle: { normal: { color: '#eee', borderColor: '#eee' } },
          },
          timeAxis: {
            axisLine: { lineStyle: { color: '#eee' } },
            axisTick: { lineStyle: { color: '#eee' } },
            axisLabel: { textStyle: { color: '#eee' } },
            splitLine: { lineStyle: { type: 'dashed', color: '#aaa' } },
            splitArea: { areaStyle: { color: '#eee' } },
          },
          logAxis: {
            axisLine: { lineStyle: { color: '#eee' } },
            axisTick: { lineStyle: { color: '#eee' } },
            axisLabel: { textStyle: { color: '#eee' } },
            splitLine: { lineStyle: { type: 'dashed', color: '#aaa' } },
            splitArea: { areaStyle: { color: '#eee' } },
          },
          valueAxis: {
            axisLine: { lineStyle: { color: '#eee' } },
            axisTick: { lineStyle: { color: '#eee' } },
            axisLabel: { textStyle: { color: '#eee' } },
            splitLine: { lineStyle: { type: 'dashed', color: '#aaa' } },
            splitArea: { areaStyle: { color: '#eee' } },
          },
          categoryAxis: {
            axisLine: { lineStyle: { color: '#eee' } },
            axisTick: { lineStyle: { color: '#eee' } },
            axisLabel: { textStyle: { color: '#eee' } },
            splitLine: { lineStyle: { type: 'dashed', color: '#aaa' } },
            splitArea: { areaStyle: { color: '#eee' } },
          },
          line: { symbol: 'circle' },
          graph: { color: i },
          gauge: { title: { textStyle: { color: '#eee' } } },
          candlestick: {
            itemStyle: {
              normal: { color: '#FD1050', color0: '#0CF49B', borderColor: '#FD1050', borderColor0: '#0CF49B' },
            },
          },
        };
      (r.categoryAxis.splitLine.show = !1), (t.exports = r);
    },
    '8nly': function(t, e, i) {
      var r = i('mFDi'),
        n = i('4mN7'),
        o = i('QBsz'),
        a = i('BlVb');
      function s(t, e, i) {
        if (((this.name = t), (this.geometries = e), i)) i = [i[0], i[1]];
        else {
          var r = this.getBoundingRect();
          i = [r.x + r.width / 2, r.y + r.height / 2];
        }
        this.center = i;
      }
      (s.prototype = {
        constructor: s,
        properties: null,
        getBoundingRect: function() {
          var t = this._rect;
          if (t) return t;
          for (
            var e = Number.MAX_VALUE, i = [e, e], a = [-e, -e], s = [], l = [], c = this.geometries, h = 0;
            h < c.length;
            h++
          )
            'polygon' === c[h].type && (n.fromPoints(c[h].exterior, s, l), o.min(i, i, s), o.max(a, a, l));
          return 0 === h && (i[0] = i[1] = a[0] = a[1] = 0), (this._rect = new r(i[0], i[1], a[0] - i[0], a[1] - i[1]));
        },
        contain: function(t) {
          var e = this.getBoundingRect(),
            i = this.geometries;
          if (!e.contain(t[0], t[1])) return !1;
          t: for (var r = 0, n = i.length; r < n; r++)
            if ('polygon' === i[r].type) {
              var o = i[r].interiors;
              if (a.contain(i[r].exterior, t[0], t[1])) {
                for (var s = 0; s < (o ? o.length : 0); s++) if (a.contain(o[s])) continue t;
                return !0;
              }
            }
          return !1;
        },
        transformTo: function(t, e, i, n) {
          var a = this.getBoundingRect(),
            s = a.width / a.height;
          i ? n || (n = i / s) : (i = s * n);
          for (var l = new r(t, e, i, n), c = a.calculateTransform(l), h = this.geometries, u = 0; u < h.length; u++)
            if ('polygon' === h[u].type) {
              for (var d = h[u].exterior, f = h[u].interiors, p = 0; p < d.length; p++) o.applyTransform(d[p], d[p], c);
              for (var g = 0; g < (f ? f.length : 0); g++)
                for (p = 0; p < f[g].length; p++) o.applyTransform(f[g][p], f[g][p], c);
            }
          (a = this._rect).copy(l), (this.center = [a.x + a.width / 2, a.y + a.height / 2]);
        },
        cloneShallow: function(t) {
          null == t && (t = this.name);
          var e = new s(t, this.geometries, this.center);
          return (e._rect = this._rect), (e.transformTo = null), e;
        },
      }),
        (t.exports = s);
    },
    '9H2F': function(t, e, i) {
      var r = i('bYtY').isArray;
      function n(t) {
        (this._reset = (t = t || {}).reset),
          (this._plan = t.plan),
          (this._count = t.count),
          (this._onDirty = t.onDirty),
          (this._dirty = !0);
      }
      i('Tghj');
      var o = n.prototype;
      o.perform = function(t) {
        var e,
          i = this._upstream,
          n = t && t.skip;
        if (this._dirty && i) {
          var o = this.context;
          o.data = o.outputData = i.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !n && (e = this._plan(this.context));
        var a,
          l = d(this._modBy),
          c = this._modDataCount || 0,
          h = d(t && t.modBy),
          u = (t && t.modDataCount) || 0;
        function d(t) {
          return !(t >= 1) && (t = 1), t;
        }
        (l === h && c === u) || (e = 'reset'),
          (this._dirty || 'reset' === e) &&
            ((this._dirty = !1),
            (a = (function(t, e) {
              var i, n;
              (t._dueIndex = t._outputDueEnd = t._dueEnd = 0),
                (t._settedOutputEnd = null),
                !e &&
                  t._reset &&
                  ((i = t._reset(t.context)) && i.progress && ((n = i.forceFirstProgress), (i = i.progress)),
                  r(i) && !i.length && (i = null)),
                (t._progress = i),
                (t._modBy = t._modDataCount = null);
              var o = t._downstream;
              return o && o.dirty(), n;
            })(this, n))),
          (this._modBy = h),
          (this._modDataCount = u);
        var f = t && t.step;
        if (((this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0), this._progress)) {
          var p = this._dueIndex,
            g = Math.min(null != f ? this._dueIndex + f : 1 / 0, this._dueEnd);
          if (!n && (a || p < g)) {
            var m = this._progress;
            if (r(m)) for (var y = 0; y < m.length; y++) s(this, m[y], p, g, h, u);
            else s(this, m, p, g, h, u);
          }
          (this._dueIndex = g), (this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : g);
        } else
          this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
      };
      var a = (function() {
        var t,
          e,
          i,
          r,
          n,
          o = {
            reset: function(l, c, h, u) {
              (e = l), (t = c), (i = h), (r = u), (n = Math.ceil(r / i)), (o.next = i > 1 && r > 0 ? s : a);
            },
          };
        return o;
        function a() {
          return e < t ? e++ : null;
        }
        function s() {
          var o = (e % n) * i + Math.ceil(e / n),
            a = e >= t ? null : o < r ? o : e;
          return e++, a;
        }
      })();
      function s(t, e, i, r, n, o) {
        a.reset(i, r, n, o),
          (t._callingProgress = e),
          t._callingProgress({ start: i, end: r, count: r - i, next: a.next }, t.context);
      }
      (o.dirty = function() {
        (this._dirty = !0), this._onDirty && this._onDirty(this.context);
      }),
        (o.unfinished = function() {
          return this._progress && this._dueIndex < this._dueEnd;
        }),
        (o.pipe = function(t) {
          (this._downstream !== t || this._dirty) && ((this._downstream = t), (t._upstream = this), t.dirty());
        }),
        (o.dispose = function() {
          this._disposed ||
            (this._upstream && (this._upstream._downstream = null),
            this._downstream && (this._downstream._upstream = null),
            (this._dirty = !1),
            (this._disposed = !0));
        }),
        (o.getUpstream = function() {
          return this._upstream;
        }),
        (o.getDownstream = function() {
          return this._downstream;
        }),
        (o.setOutputEnd = function(t) {
          this._outputDueEnd = this._settedOutputEnd = t;
        }),
        (e.createTask = function(t) {
          return new n(t);
        });
    },
    'A1Ka': function(t, e, i) {
      var r = i('bLfw'),
        n = i('sS/r'),
        o = i('D5nY').detectSourceFormat,
        a = i('k9D9');
      r.extend({
        type: 'dataset',
        defaultOption: {
          seriesLayoutBy: a.SERIES_LAYOUT_BY_COLUMN,
          sourceHeader: null,
          dimensions: null,
          source: null,
        },
        optionUpdated: function() {
          o(this);
        },
      }),
        n.extend({ type: 'dataset' });
    },
    'AH3D': function(t, e, i) {
      var r = i('ProS');
      i('y4/Y'),
        i('qWt2'),
        i('Qvb6'),
        r.registerAction({ type: 'showTip', event: 'showTip', update: 'tooltip:manuallyShowTip' }, function() {}),
        r.registerAction({ type: 'hideTip', event: 'hideTip', update: 'tooltip:manuallyHideTip' }, function() {});
    },
    'AVZG': function(t, e, i) {
      var r = i('bYtY');
      e.layout = function(t, e, i) {
        i = i || {};
        var n = t.coordinateSystem,
          o = e.axis,
          a = {},
          s = o.getAxesOnZeroOf()[0],
          l = o.position,
          c = s ? 'onZero' : l,
          h = o.dim,
          u = n.getRect(),
          d = [u.x, u.x + u.width, u.y, u.y + u.height],
          f = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
          p = e.get('offset') || 0,
          g = 'x' === h ? [d[2] - p, d[3] + p] : [d[0] - p, d[1] + p];
        if (s) {
          var m = s.toGlobalCoord(s.dataToCoord(0));
          g[f.onZero] = Math.max(Math.min(m, g[1]), g[0]);
        }
        (a.position = ['y' === h ? g[f[c]] : d[0], 'x' === h ? g[f[c]] : d[3]]),
          (a.rotation = (Math.PI / 2) * ('x' === h ? 0 : 1)),
          (a.labelDirection = a.tickDirection = a.nameDirection = { top: -1, bottom: 1, left: -1, right: 1 }[l]),
          (a.labelOffset = s ? g[f[l]] - g[f.onZero] : 0),
          e.get('axisTick.inside') && (a.tickDirection = -a.tickDirection),
          r.retrieve(i.labelInside, e.get('axisLabel.inside')) && (a.labelDirection = -a.labelDirection);
        var y = e.get('axisLabel.rotate');
        return (a.labelRotate = 'top' === c ? -y : y), (a.z2 = 1), a;
      };
    },
    'B9fm': function(t, e, i) {
      var r = i('bYtY'),
        n = i('Qe9p'),
        o = i('YH21'),
        a = i('ItGF'),
        s = i('7aKB'),
        l = r.each,
        c = s.toCamelCase,
        h = ['', '-webkit-', '-moz-', '-o-'];
      function u(t, e) {
        if (a.wxa) return null;
        var i = document.createElement('div'),
          r = (this._zr = e.getZr());
        (this.el = i),
          (this._x = e.getWidth() / 2),
          (this._y = e.getHeight() / 2),
          t.appendChild(i),
          (this._container = t),
          (this._show = !1);
        var n = this;
        (i.onmouseenter = function() {
          n._enterable && (clearTimeout(n._hideTimeout), (n._show = !0)), (n._inContent = !0);
        }),
          (i.onmousemove = function(e) {
            if (((e = e || window.event), !n._enterable)) {
              var i = r.handler;
              o.normalizeEvent(t, e, !0), i.dispatch('mousemove', e);
            }
          }),
          (i.onmouseleave = function() {
            n._enterable && n._show && n.hideLater(n._hideDelay), (n._inContent = !1);
          });
      }
      (u.prototype = {
        constructor: u,
        _enterable: !0,
        update: function() {
          var t = this._container,
            e = t.currentStyle || document.defaultView.getComputedStyle(t),
            i = t.style;
          'absolute' !== i.position && 'absolute' !== e.position && (i.position = 'relative');
        },
        show: function(t) {
          clearTimeout(this._hideTimeout);
          var e = this.el;
          (e.style.cssText =
            'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;' +
            (function(t) {
              var e,
                i,
                o = [],
                u = t.get('transitionDuration'),
                d = t.get('backgroundColor'),
                f = t.getModel('textStyle'),
                p = t.get('padding');
              return (
                u &&
                  o.push(
                    ((i =
                      'left ' +
                      (e = u) +
                      's cubic-bezier(0.23, 1, 0.32, 1),top ' +
                      e +
                      's cubic-bezier(0.23, 1, 0.32, 1)'),
                    r
                      .map(h, function(t) {
                        return t + 'transition:' + i;
                      })
                      .join(';')),
                  ),
                d &&
                  (a.canvasSupported
                    ? o.push('background-Color:' + d)
                    : (o.push('background-Color:#' + n.toHex(d)), o.push('filter:alpha(opacity=70)'))),
                l(['width', 'color', 'radius'], function(e) {
                  var i = 'border-' + e,
                    r = c(i),
                    n = t.get(r);
                  null != n && o.push(i + ':' + n + ('color' === e ? '' : 'px'));
                }),
                o.push(
                  (function(t) {
                    var e = [],
                      i = t.get('fontSize'),
                      r = t.getTextColor();
                    return (
                      r && e.push('color:' + r),
                      e.push('font:' + t.getFont()),
                      i && e.push('line-height:' + Math.round((3 * i) / 2) + 'px'),
                      l(['decoration', 'align'], function(i) {
                        var r = t.get(i);
                        r && e.push('text-' + i + ':' + r);
                      }),
                      e.join(';')
                    );
                  })(f),
                ),
                null != p && o.push('padding:' + s.normalizeCssArray(p).join('px ') + 'px'),
                o.join(';') + ';'
              );
            })(t) +
            ';left:' +
            this._x +
            'px;top:' +
            this._y +
            'px;' +
            (t.get('extraCssText') || '')),
            (e.style.display = e.innerHTML ? 'block' : 'none'),
            (e.style.pointerEvents = this._enterable ? 'auto' : 'none'),
            (this._show = !0);
        },
        setContent: function(t) {
          this.el.innerHTML = null == t ? '' : t;
        },
        setEnterable: function(t) {
          this._enterable = t;
        },
        getSize: function() {
          var t = this.el;
          return [t.clientWidth, t.clientHeight];
        },
        moveTo: function(t, e) {
          var i,
            r = this._zr;
          r && r.painter && (i = r.painter.getViewportRootOffset()) && ((t += i.offsetLeft), (e += i.offsetTop));
          var n = this.el.style;
          (n.left = t + 'px'), (n.top = e + 'px'), (this._x = t), (this._y = e);
        },
        hide: function() {
          (this.el.style.display = 'none'), (this._show = !1);
        },
        hideLater: function(t) {
          !this._show ||
            (this._inContent && this._enterable) ||
            (t
              ? ((this._hideDelay = t), (this._show = !1), (this._hideTimeout = setTimeout(r.bind(this.hide, this), t)))
              : this.hide());
        },
        isShow: function() {
          return this._show;
        },
        getOuterSize: function() {
          var t = this.el.clientWidth,
            e = this.el.clientHeight;
          if (document.defaultView && document.defaultView.getComputedStyle) {
            var i = document.defaultView.getComputedStyle(this.el);
            i &&
              ((t +=
                parseInt(i.paddingLeft, 10) +
                parseInt(i.paddingRight, 10) +
                parseInt(i.borderLeftWidth, 10) +
                parseInt(i.borderRightWidth, 10)),
              (e +=
                parseInt(i.paddingTop, 10) +
                parseInt(i.paddingBottom, 10) +
                parseInt(i.borderTopWidth, 10) +
                parseInt(i.borderBottomWidth, 10)));
          }
          return { width: t, height: e };
        },
      }),
        (t.exports = u);
    },
    'BPZU': function(t, e) {
      var i = 7;
      function r(t, e, i, r) {
        var n = e + 1;
        if (n === i) return 1;
        if (r(t[n++], t[e]) < 0) {
          for (; n < i && r(t[n], t[n - 1]) < 0; ) n++;
          !(function(t, e, i) {
            for (i--; e < i; ) {
              var r = t[e];
              (t[e++] = t[i]), (t[i--] = r);
            }
          })(t, e, n);
        } else for (; n < i && r(t[n], t[n - 1]) >= 0; ) n++;
        return n - e;
      }
      function n(t, e, i, r, n) {
        for (r === e && r++; r < i; r++) {
          for (var o, a = t[r], s = e, l = r; s < l; ) n(a, t[(o = (s + l) >>> 1)]) < 0 ? (l = o) : (s = o + 1);
          var c = r - s;
          switch (c) {
            case 3:
              t[s + 3] = t[s + 2];
            case 2:
              t[s + 2] = t[s + 1];
            case 1:
              t[s + 1] = t[s];
              break;
            default:
              for (; c > 0; ) (t[s + c] = t[s + c - 1]), c--;
          }
          t[s] = a;
        }
      }
      function o(t, e, i, r, n, o) {
        var a = 0,
          s = 0,
          l = 1;
        if (o(t, e[i + n]) > 0) {
          for (s = r - n; l < s && o(t, e[i + n + l]) > 0; ) (a = l), (l = 1 + (l << 1)) <= 0 && (l = s);
          l > s && (l = s), (a += n), (l += n);
        } else {
          for (s = n + 1; l < s && o(t, e[i + n - l]) <= 0; ) (a = l), (l = 1 + (l << 1)) <= 0 && (l = s);
          l > s && (l = s);
          var c = a;
          (a = n - l), (l = n - c);
        }
        for (a++; a < l; ) {
          var h = a + ((l - a) >>> 1);
          o(t, e[i + h]) > 0 ? (a = h + 1) : (l = h);
        }
        return l;
      }
      function a(t, e, i, r, n, o) {
        var a = 0,
          s = 0,
          l = 1;
        if (o(t, e[i + n]) < 0) {
          for (s = n + 1; l < s && o(t, e[i + n - l]) < 0; ) (a = l), (l = 1 + (l << 1)) <= 0 && (l = s);
          l > s && (l = s);
          var c = a;
          (a = n - l), (l = n - c);
        } else {
          for (s = r - n; l < s && o(t, e[i + n + l]) >= 0; ) (a = l), (l = 1 + (l << 1)) <= 0 && (l = s);
          l > s && (l = s), (a += n), (l += n);
        }
        for (a++; a < l; ) {
          var h = a + ((l - a) >>> 1);
          o(t, e[i + h]) < 0 ? (l = h) : (a = h + 1);
        }
        return l;
      }
      function s(t, e) {
        var r,
          n,
          s = i,
          l = 0,
          c = [];
        function h(h) {
          var u = r[h],
            d = n[h],
            f = r[h + 1],
            p = n[h + 1];
          (n[h] = d + p), h === l - 3 && ((r[h + 1] = r[h + 2]), (n[h + 1] = n[h + 2])), l--;
          var g = a(t[f], t, u, d, 0, e);
          (u += g),
            0 != (d -= g) &&
              0 !== (p = o(t[u + d - 1], t, f, p, p - 1, e)) &&
              (d <= p
                ? (function(r, n, l, h) {
                    var u = 0;
                    for (u = 0; u < n; u++) c[u] = t[r + u];
                    var d = 0,
                      f = l,
                      p = r;
                    if (((t[p++] = t[f++]), 0 != --h))
                      if (1 !== n) {
                        for (var g, m, y, v = s; ; ) {
                          (g = 0), (m = 0), (y = !1);
                          do {
                            if (e(t[f], c[d]) < 0) {
                              if (((t[p++] = t[f++]), m++, (g = 0), 0 == --h)) {
                                y = !0;
                                break;
                              }
                            } else if (((t[p++] = c[d++]), g++, (m = 0), 1 == --n)) {
                              y = !0;
                              break;
                            }
                          } while ((g | m) < v);
                          if (y) break;
                          do {
                            if (0 !== (g = a(t[f], c, d, n, 0, e))) {
                              for (u = 0; u < g; u++) t[p + u] = c[d + u];
                              if (((p += g), (d += g), (n -= g) <= 1)) {
                                y = !0;
                                break;
                              }
                            }
                            if (((t[p++] = t[f++]), 0 == --h)) {
                              y = !0;
                              break;
                            }
                            if (0 !== (m = o(c[d], t, f, h, 0, e))) {
                              for (u = 0; u < m; u++) t[p + u] = t[f + u];
                              if (((p += m), (f += m), 0 == (h -= m))) {
                                y = !0;
                                break;
                              }
                            }
                            if (((t[p++] = c[d++]), 1 == --n)) {
                              y = !0;
                              break;
                            }
                            v--;
                          } while (g >= i || m >= i);
                          if (y) break;
                          v < 0 && (v = 0), (v += 2);
                        }
                        if (((s = v) < 1 && (s = 1), 1 === n)) {
                          for (u = 0; u < h; u++) t[p + u] = t[f + u];
                          t[p + h] = c[d];
                        } else {
                          if (0 === n) throw new Error();
                          for (u = 0; u < n; u++) t[p + u] = c[d + u];
                        }
                      } else {
                        for (u = 0; u < h; u++) t[p + u] = t[f + u];
                        t[p + h] = c[d];
                      }
                    else for (u = 0; u < n; u++) t[p + u] = c[d + u];
                  })(u, d, f, p)
                : (function(r, n, l, h) {
                    var u = 0;
                    for (u = 0; u < h; u++) c[u] = t[l + u];
                    var d = r + n - 1,
                      f = h - 1,
                      p = l + h - 1,
                      g = 0,
                      m = 0;
                    if (((t[p--] = t[d--]), 0 != --n))
                      if (1 !== h) {
                        for (var y = s; ; ) {
                          var v = 0,
                            x = 0,
                            b = !1;
                          do {
                            if (e(c[f], t[d]) < 0) {
                              if (((t[p--] = t[d--]), v++, (x = 0), 0 == --n)) {
                                b = !0;
                                break;
                              }
                            } else if (((t[p--] = c[f--]), x++, (v = 0), 1 == --h)) {
                              b = !0;
                              break;
                            }
                          } while ((v | x) < y);
                          if (b) break;
                          do {
                            if (0 != (v = n - a(c[f], t, r, n, n - 1, e))) {
                              for (n -= v, m = 1 + (p -= v), g = 1 + (d -= v), u = v - 1; u >= 0; u--)
                                t[m + u] = t[g + u];
                              if (0 === n) {
                                b = !0;
                                break;
                              }
                            }
                            if (((t[p--] = c[f--]), 1 == --h)) {
                              b = !0;
                              break;
                            }
                            if (0 != (x = h - o(t[d], c, 0, h, h - 1, e))) {
                              for (h -= x, m = 1 + (p -= x), g = 1 + (f -= x), u = 0; u < x; u++) t[m + u] = c[g + u];
                              if (h <= 1) {
                                b = !0;
                                break;
                              }
                            }
                            if (((t[p--] = t[d--]), 0 == --n)) {
                              b = !0;
                              break;
                            }
                            y--;
                          } while (v >= i || x >= i);
                          if (b) break;
                          y < 0 && (y = 0), (y += 2);
                        }
                        if (((s = y) < 1 && (s = 1), 1 === h)) {
                          for (m = 1 + (p -= n), g = 1 + (d -= n), u = n - 1; u >= 0; u--) t[m + u] = t[g + u];
                          t[p] = c[f];
                        } else {
                          if (0 === h) throw new Error();
                          for (g = p - (h - 1), u = 0; u < h; u++) t[g + u] = c[u];
                        }
                      } else {
                        for (m = 1 + (p -= n), g = 1 + (d -= n), u = n - 1; u >= 0; u--) t[m + u] = t[g + u];
                        t[p] = c[f];
                      }
                    else for (g = p - (h - 1), u = 0; u < h; u++) t[g + u] = c[u];
                  })(u, d, f, p));
        }
        (r = []),
          (n = []),
          (this.mergeRuns = function() {
            for (; l > 1; ) {
              var t = l - 2;
              if ((t >= 1 && n[t - 1] <= n[t] + n[t + 1]) || (t >= 2 && n[t - 2] <= n[t] + n[t - 1]))
                n[t - 1] < n[t + 1] && t--;
              else if (n[t] > n[t + 1]) break;
              h(t);
            }
          }),
          (this.forceMergeRuns = function() {
            for (; l > 1; ) {
              var t = l - 2;
              t > 0 && n[t - 1] < n[t + 1] && t--, h(t);
            }
          }),
          (this.pushRun = function(t, e) {
            (r[l] = t), (n[l] = e), (l += 1);
          });
      }
      t.exports = function(t, e, i, o) {
        i || (i = 0), o || (o = t.length);
        var a = o - i;
        if (!(a < 2)) {
          var l = 0;
          if (a < 32) n(t, i, o, i + (l = r(t, i, o, e)), e);
          else {
            var c = new s(t, e),
              h = (function(t) {
                for (var e = 0; t >= 32; ) (e |= 1 & t), (t >>= 1);
                return t + e;
              })(a);
            do {
              if ((l = r(t, i, o, e)) < h) {
                var u = a;
                u > h && (u = h), n(t, i, i + u, i + l, e), (l = u);
              }
              c.pushRun(i, l), c.mergeRuns(), (a -= l), (i += l);
            } while (0 !== a);
            c.forceMergeRuns();
          }
        }
      };
    },
    'BlVb': function(t, e, i) {
      var r = i('hyiK'),
        n = 1e-8;
      function o(t, e) {
        return Math.abs(t - e) < n;
      }
      e.contain = function(t, e, i) {
        var n = 0,
          a = t[0];
        if (!a) return !1;
        for (var s = 1; s < t.length; s++) {
          var l = t[s];
          (n += r(a[0], a[1], l[0], l[1], e, i)), (a = l);
        }
        var c = t[0];
        return (o(a[0], c[0]) && o(a[1], c[1])) || (n += r(a[0], a[1], c[0], c[1], e, i)), 0 !== n;
      };
    },
    'Bq2U': function(t, e, i) {
      var r = i('RDYZ'),
        n = i('Qe9p'),
        o = i('bYtY').isArrayLike,
        a = Array.prototype.slice;
      function s(t, e) {
        return t[e];
      }
      function l(t, e, i) {
        t[e] = i;
      }
      function c(t, e, i) {
        return (e - t) * i + t;
      }
      function h(t, e, i) {
        return i > 0.5 ? e : t;
      }
      function u(t, e, i, r, n) {
        var o = t.length;
        if (1 === n) for (var a = 0; a < o; a++) r[a] = c(t[a], e[a], i);
        else {
          var s = o && t[0].length;
          for (a = 0; a < o; a++) for (var l = 0; l < s; l++) r[a][l] = c(t[a][l], e[a][l], i);
        }
      }
      function d(t, e, i) {
        var r = t.length,
          n = e.length;
        if (r !== n)
          if (r > n) t.length = n;
          else for (var o = r; o < n; o++) t.push(1 === i ? e[o] : a.call(e[o]));
        var s = t[0] && t[0].length;
        for (o = 0; o < t.length; o++)
          if (1 === i) isNaN(t[o]) && (t[o] = e[o]);
          else for (var l = 0; l < s; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l]);
      }
      function f(t, e, i) {
        if (t === e) return !0;
        var r = t.length;
        if (r !== e.length) return !1;
        if (1 === i) {
          for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        } else {
          var o = t[0].length;
          for (n = 0; n < r; n++) for (var a = 0; a < o; a++) if (t[n][a] !== e[n][a]) return !1;
        }
        return !0;
      }
      function p(t, e, i, r, n, o, a, s, l) {
        var c = t.length;
        if (1 === l) for (var h = 0; h < c; h++) s[h] = g(t[h], e[h], i[h], r[h], n, o, a);
        else {
          var u = t[0].length;
          for (h = 0; h < c; h++) for (var d = 0; d < u; d++) s[h][d] = g(t[h][d], e[h][d], i[h][d], r[h][d], n, o, a);
        }
      }
      function g(t, e, i, r, n, o, a) {
        var s = 0.5 * (i - t),
          l = 0.5 * (r - e);
        return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * n + e;
      }
      function m(t) {
        if (o(t)) {
          var e = t.length;
          if (o(t[0])) {
            for (var i = [], r = 0; r < e; r++) i.push(a.call(t[r]));
            return i;
          }
          return a.call(t);
        }
        return t;
      }
      function y(t) {
        return (
          (t[0] = Math.floor(t[0])), (t[1] = Math.floor(t[1])), (t[2] = Math.floor(t[2])), 'rgba(' + t.join(',') + ')'
        );
      }
      function v(t, e, i, a, s, l) {
        var m = t._getter,
          v = t._setter,
          x = 'spline' === e,
          b = a.length;
        if (b) {
          var _,
            S = o(a[0].value),
            w = !1,
            C = !1,
            T = S
              ? (function(t) {
                  var e = t[t.length - 1].value;
                  return o(e && e[0]) ? 2 : 1;
                })(a)
              : 0;
          a.sort(function(t, e) {
            return t.time - e.time;
          }),
            (_ = a[b - 1].time);
          for (var k = [], M = [], A = a[0].value, D = !0, I = 0; I < b; I++) {
            k.push(a[I].time / _);
            var O = a[I].value;
            if (((S && f(O, A, T)) || (!S && O === A) || (D = !1), (A = O), 'string' == typeof O)) {
              var L = n.parse(O);
              L ? ((O = L), (w = !0)) : (C = !0);
            }
            M.push(O);
          }
          if (l || !D) {
            var P = M[b - 1];
            for (I = 0; I < b - 1; I++) S ? d(M[I], P, T) : !isNaN(M[I]) || isNaN(P) || C || w || (M[I] = P);
            S && d(m(t._target, s), P, T);
            var E,
              B,
              R,
              z,
              W,
              F = 0,
              N = 0;
            if (w) var Y = [0, 0, 0, 0];
            var H = new r({
              target: t._target,
              life: _,
              loop: t._loop,
              delay: t._delay,
              onframe: function(t, e) {
                var i;
                if (e < 0) i = 0;
                else if (e < N) {
                  for (i = Math.min(F + 1, b - 1); i >= 0 && !(k[i] <= e); i--);
                  i = Math.min(i, b - 2);
                } else {
                  for (i = F; i < b && !(k[i] > e); i++);
                  i = Math.min(i - 1, b - 2);
                }
                (F = i), (N = e);
                var r = k[i + 1] - k[i];
                if (0 !== r)
                  if (((E = (e - k[i]) / r), x))
                    if (
                      ((R = M[i]),
                      (B = M[0 === i ? i : i - 1]),
                      (z = M[i > b - 2 ? b - 1 : i + 1]),
                      (W = M[i > b - 3 ? b - 1 : i + 2]),
                      S)
                    )
                      p(B, R, z, W, E, E * E, E * E * E, m(t, s), T);
                    else {
                      if (w) (n = p(B, R, z, W, E, E * E, E * E * E, Y, 1)), (n = y(Y));
                      else {
                        if (C) return h(R, z, E);
                        n = g(B, R, z, W, E, E * E, E * E * E);
                      }
                      v(t, s, n);
                    }
                  else if (S) u(M[i], M[i + 1], E, m(t, s), T);
                  else {
                    var n;
                    if (w) u(M[i], M[i + 1], E, Y, 1), (n = y(Y));
                    else {
                      if (C) return h(M[i], M[i + 1], E);
                      n = c(M[i], M[i + 1], E);
                    }
                    v(t, s, n);
                  }
              },
              ondestroy: i,
            });
            return e && 'spline' !== e && (H.easing = e), H;
          }
        }
      }
      var x = function(t, e, i, r) {
        (this._tracks = {}),
          (this._target = t),
          (this._loop = e || !1),
          (this._getter = i || s),
          (this._setter = r || l),
          (this._clipCount = 0),
          (this._delay = 0),
          (this._doneList = []),
          (this._onframeList = []),
          (this._clipList = []);
      };
      (x.prototype = {
        when: function(t, e) {
          var i = this._tracks;
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              if (!i[r]) {
                i[r] = [];
                var n = this._getter(this._target, r);
                if (null == n) continue;
                0 !== t && i[r].push({ time: 0, value: m(n) });
              }
              i[r].push({ time: t, value: e[r] });
            }
          return this;
        },
        during: function(t) {
          return this._onframeList.push(t), this;
        },
        pause: function() {
          for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
          this._paused = !0;
        },
        resume: function() {
          for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
          this._paused = !1;
        },
        isPaused: function() {
          return !!this._paused;
        },
        _doneCallback: function() {
          (this._tracks = {}), (this._clipList.length = 0);
          for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this);
        },
        start: function(t, e) {
          var i,
            r = this,
            n = 0,
            o = function() {
              --n || r._doneCallback();
            };
          for (var a in this._tracks)
            if (this._tracks.hasOwnProperty(a)) {
              var s = v(this, t, o, this._tracks[a], a, e);
              s && (this._clipList.push(s), n++, this.animation && this.animation.addClip(s), (i = s));
            }
          if (i) {
            var l = i.onframe;
            i.onframe = function(t, e) {
              l(t, e);
              for (var i = 0; i < r._onframeList.length; i++) r._onframeList[i](t, e);
            };
          }
          return n || this._doneCallback(), this;
        },
        stop: function(t) {
          for (var e = this._clipList, i = this.animation, r = 0; r < e.length; r++) {
            var n = e[r];
            t && n.onframe(this._target, 1), i && i.removeClip(n);
          }
          e.length = 0;
        },
        delay: function(t) {
          return (this._delay = t), this;
        },
        done: function(t) {
          return t && this._doneList.push(t), this;
        },
        getClips: function() {
          return this._clipList;
        },
      }),
        (t.exports = x);
    },
    'C0SR': function(t, e, i) {
      var r = i('YH21'),
        n = function() {
          this._track = [];
        };
      function o(t) {
        var e = t[1][0] - t[0][0],
          i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i);
      }
      n.prototype = {
        constructor: n,
        recognize: function(t, e, i) {
          return this._doTrack(t, e, i), this._recognize(t);
        },
        clear: function() {
          return (this._track.length = 0), this;
        },
        _doTrack: function(t, e, i) {
          var n = t.touches;
          if (n) {
            for (var o = { points: [], touches: [], target: e, event: t }, a = 0, s = n.length; a < s; a++) {
              var l = n[a],
                c = r.clientToLocal(i, l, {});
              o.points.push([c.zrX, c.zrY]), o.touches.push(l);
            }
            this._track.push(o);
          }
        },
        _recognize: function(t) {
          for (var e in a)
            if (a.hasOwnProperty(e)) {
              var i = a[e](this._track, t);
              if (i) return i;
            }
        },
      };
      var a = {
        pinch: function(t, e) {
          var i = t.length;
          if (i) {
            var r,
              n = (t[i - 1] || {}).points,
              a = (t[i - 2] || {}).points || n;
            if (a && a.length > 1 && n && n.length > 1) {
              var s = o(n) / o(a);
              !isFinite(s) && (s = 1), (e.pinchScale = s);
              var l = [((r = n)[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
              return (e.pinchX = l[0]), (e.pinchY = l[1]), { type: 'pinch', target: t[0].target, event: e };
            }
          }
        },
      };
      t.exports = n;
    },
    'D5nY': function(t, e, i) {
      i('Tghj');
      var r = i('4NO4'),
        n = r.makeInner,
        o = r.getDataItemValue,
        a = i('i38C').getCoordSysDefineBySeries,
        s = i('bYtY'),
        l = s.createHashMap,
        c = s.each,
        h = s.map,
        u = s.isArray,
        d = s.isString,
        f = s.isObject,
        p = s.isTypedArray,
        g = s.isArrayLike,
        m = s.extend,
        y = i('7G+c'),
        v = i('k9D9'),
        x = v.SOURCE_FORMAT_ORIGINAL,
        b = v.SOURCE_FORMAT_ARRAY_ROWS,
        _ = v.SOURCE_FORMAT_OBJECT_ROWS,
        S = v.SOURCE_FORMAT_KEYED_COLUMNS,
        w = v.SOURCE_FORMAT_UNKNOWN,
        C = v.SOURCE_FORMAT_TYPED_ARRAY,
        T = v.SERIES_LAYOUT_BY_ROW,
        k = n();
      function M(t) {
        if (t) {
          var e = l();
          return h(t, function(t, i) {
            if (null == (t = m({}, f(t) ? t : { name: t })).name) return t;
            (t.name += ''), null == t.displayName && (t.displayName = t.name);
            var r = e.get(t.name);
            return r ? (t.name += '-' + r.count++) : e.set(t.name, { count: 1 }), t;
          });
        }
      }
      function A(t, e, i, r) {
        if ((null == r && (r = 1 / 0), e === T))
          for (var n = 0; n < i.length && n < r; n++) t(i[n] ? i[n][0] : null, n);
        else {
          var o = i[0] || [];
          for (n = 0; n < o.length && n < r; n++) t(o[n], n);
        }
      }
      function D(t, e, i, r, n, a) {
        var s, l;
        if (p(t)) return !1;
        if ((r && (l = f((l = r[a])) ? l.name : l), e === b))
          if (i === T) {
            for (var c = t[a], h = 0; h < (c || []).length && h < 5; h++) if (null != (s = v(c[n + h]))) return s;
          } else
            for (h = 0; h < t.length && h < 5; h++) {
              var g = t[n + h];
              if (g && null != (s = v(g[a]))) return s;
            }
        else if (e === _) {
          if (!l) return;
          for (h = 0; h < t.length && h < 5; h++) if ((m = t[h]) && null != (s = v(m[l]))) return s;
        } else if (e === S) {
          if (!l) return;
          if (!(c = t[l]) || p(c)) return !1;
          for (h = 0; h < c.length && h < 5; h++) if (null != (s = v(c[h]))) return s;
        } else if (e === x)
          for (h = 0; h < t.length && h < 5; h++) {
            var m,
              y = o((m = t[h]));
            if (!u(y)) return !1;
            if (null != (s = v(y[a]))) return s;
          }
        function v(t) {
          return (null == t || !isFinite(t) || '' === t) && (!(!d(t) || '-' === t) || void 0);
        }
        return !1;
      }
      (e.detectSourceFormat = function(t) {
        var e = t.option.source,
          i = w;
        if (p(e)) i = C;
        else if (u(e)) {
          0 === e.length && (i = b);
          for (var r = 0, n = e.length; r < n; r++) {
            var o = e[r];
            if (null != o) {
              if (u(o)) {
                i = b;
                break;
              }
              if (f(o)) {
                i = _;
                break;
              }
            }
          }
        } else if (f(e)) {
          for (var a in e)
            if (e.hasOwnProperty(a) && g(e[a])) {
              i = S;
              break;
            }
        } else if (null != e) throw new Error('Invalid data');
        k(t).sourceFormat = i;
      }),
        (e.getSource = function(t) {
          return k(t).source;
        }),
        (e.resetSourceDefaulter = function(t) {
          k(t).datasetMap = l();
        }),
        (e.prepareSource = function(t) {
          var e = t.option,
            i = e.data,
            r = p(i) ? C : x,
            n = !1,
            s = e.seriesLayoutBy,
            h = e.sourceHeader,
            g = e.dimensions,
            m = (function(t) {
              var e = t.option;
              if (!e.data) return t.ecModel.getComponent('dataset', e.datasetIndex || 0);
            })(t);
          if (m) {
            var v = m.option;
            (i = v.source),
              (r = k(m).sourceFormat),
              (n = !0),
              (s = s || v.seriesLayoutBy),
              null == h && (h = v.sourceHeader),
              (g = g || v.dimensions);
          }
          var w = (function(t, e, i, r, n) {
              if (!t) return { dimensionsDefine: M(n) };
              var a, s, l, h;
              if (e === b)
                'auto' === r || null == r
                  ? A(
                      function(t) {
                        null != t && '-' !== t && (d(t) ? null == s && (s = 1) : (s = 0));
                      },
                      i,
                      t,
                      10,
                    )
                  : (s = r ? 1 : 0),
                  n ||
                    1 !== s ||
                    ((n = []),
                    A(
                      function(t, e) {
                        n[e] = null != t ? t : '';
                      },
                      i,
                      t,
                    )),
                  (a = n ? n.length : i === T ? t.length : t[0] ? t[0].length : null);
              else if (e === _)
                n ||
                  ((n = (function(t) {
                    for (var e, i = 0; i < t.length && !(e = t[i++]); );
                    if (e) {
                      var r = [];
                      return (
                        c(e, function(t, e) {
                          r.push(e);
                        }),
                        r
                      );
                    }
                  })(t)),
                  (l = !0));
              else if (e === S)
                n ||
                  ((n = []),
                  (l = !0),
                  c(t, function(t, e) {
                    n.push(e);
                  }));
              else if (e === x) {
                var p = o(t[0]);
                a = (u(p) && p.length) || 1;
              }
              return (
                l &&
                  c(n, function(t, e) {
                    'name' === (f(t) ? t.name : t) && (h = e);
                  }),
                { startIndex: s, dimensionsDefine: M(n), dimensionsDetectCount: a, potentialNameDimIndex: h }
              );
            })(i, r, s, h, g),
            I = e.encode;
          !I &&
            m &&
            (I = (function(t, e, i, r, n, o) {
              var s = a(t),
                h = {},
                u = [],
                d = [],
                f = t.subType,
                p = l(['pie', 'map', 'funnel']),
                g = l(['line', 'bar', 'pictorialBar', 'scatter', 'effectScatter', 'candlestick', 'boxplot']);
              if (s && null != g.get(f)) {
                var m = k(t.ecModel).datasetMap,
                  y = e.uid + '_' + n,
                  v = m.get(y) || m.set(y, { categoryWayDim: 1, valueWayDim: 0 });
                c(s.coordSysDims, function(t) {
                  if (null == s.firstCategoryDimIndex) {
                    var e = v.valueWayDim++;
                    (h[t] = e), d.push(e);
                  } else s.categoryAxisMap.get(t) ? ((h[t] = 0), u.push(0)) : ((e = v.categoryWayDim++), (h[t] = e), d.push(e));
                });
              } else if (null != p.get(f)) {
                for (var x, b = 0; b < 5 && null == x; b++) D(i, r, n, o.dimensionsDefine, o.startIndex, b) || (x = b);
                if (null != x) {
                  h.value = x;
                  var _ = o.potentialNameDimIndex || Math.max(x - 1, 0);
                  d.push(_), u.push(_);
                }
              }
              return u.length && (h.itemName = u), d.length && (h.seriesName = d), h;
            })(t, m, i, r, s, w)),
            (k(t).source = new y({
              data: i,
              fromDataset: n,
              seriesLayoutBy: s,
              sourceFormat: r,
              dimensionsDefine: w.dimensionsDefine,
              startIndex: w.startIndex,
              dimensionsDetectCount: w.dimensionsDetectCount,
              encodeDefine: I,
            }));
        }),
        (e.guessOrdinal = function(t, e) {
          return D(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
        });
    },
    'DBLp': function(t, e) {
      function i() {}
      function r(t, e, i, r) {
        for (var n = 0, o = e.length, a = 0, s = 0; n < o; n++) {
          var l = e[n];
          if (l.removed) {
            for (c = [], h = s; h < s + l.count; h++) c.push(h);
            (l.indices = c), (s += l.count);
          } else {
            for (var c = [], h = a; h < a + l.count; h++) c.push(h);
            (l.indices = c), (a += l.count), l.added || (s += l.count);
          }
        }
        return e;
      }
      i.prototype = {
        diff: function(t, e, i) {
          i ||
            (i = function(t, e) {
              return t === e;
            }),
            (this.equals = i);
          var n = this;
          t = t.slice();
          var o = (e = e.slice()).length,
            a = t.length,
            s = 1,
            l = o + a,
            c = [{ newPos: -1, components: [] }],
            h = this.extractCommon(c[0], e, t, 0);
          if (c[0].newPos + 1 >= o && h + 1 >= a) {
            for (var u = [], d = 0; d < e.length; d++) u.push(d);
            return [{ indices: u, count: e.length }];
          }
          function f() {
            for (var i = -1 * s; i <= s; i += 2) {
              var l,
                h = c[i - 1],
                u = c[i + 1],
                d = (u ? u.newPos : 0) - i;
              h && (c[i - 1] = void 0);
              var f = h && h.newPos + 1 < o,
                p = u && 0 <= d && d < a;
              if (f || p) {
                if (
                  (!f || (p && h.newPos < u.newPos)
                    ? ((l = { newPos: (g = u).newPos, components: g.components.slice(0) }),
                      n.pushComponent(l.components, void 0, !0))
                    : ((l = h).newPos++, n.pushComponent(l.components, !0, void 0)),
                  (d = n.extractCommon(l, e, t, i)),
                  l.newPos + 1 >= o && d + 1 >= a)
                )
                  return r(0, l.components);
                c[i] = l;
              } else c[i] = void 0;
            }
            var g;
            s++;
          }
          for (; s <= l; ) {
            var p = f();
            if (p) return p;
          }
        },
        pushComponent: function(t, e, i) {
          var r = t[t.length - 1];
          r && r.added === e && r.removed === i
            ? (t[t.length - 1] = { count: r.count + 1, added: e, removed: i })
            : t.push({ count: 1, added: e, removed: i });
        },
        extractCommon: function(t, e, i, r) {
          for (
            var n = e.length, o = i.length, a = t.newPos, s = a - r, l = 0;
            a + 1 < n && s + 1 < o && this.equals(e[a + 1], i[s + 1]);

          )
            a++, s++, l++;
          return l && t.components.push({ count: l }), (t.newPos = a), s;
        },
        tokenize: function(t) {
          return t.slice();
        },
        join: function(t) {
          return t.slice();
        },
      };
      var n = new i();
      t.exports = function(t, e, i) {
        return n.diff(t, e, i);
      };
    },
    'DN4a': function(t, e, i) {
      var r = i('Fofx'),
        n = i('QBsz'),
        o = r.identity,
        a = 5e-5;
      function s(t) {
        return t > a || t < -a;
      }
      var l = function(t) {
          (t = t || {}).position || (this.position = [0, 0]),
            null == t.rotation && (this.rotation = 0),
            t.scale || (this.scale = [1, 1]),
            (this.origin = this.origin || null);
        },
        c = l.prototype;
      (c.transform = null),
        (c.needLocalTransform = function() {
          return (
            s(this.rotation) ||
            s(this.position[0]) ||
            s(this.position[1]) ||
            s(this.scale[0] - 1) ||
            s(this.scale[1] - 1)
          );
        });
      var h = [];
      (c.updateTransform = function() {
        var t = this.parent,
          e = t && t.transform,
          i = this.needLocalTransform(),
          n = this.transform;
        if (i || e) {
          (n = n || r.create()),
            i ? this.getLocalTransform(n) : o(n),
            e && (i ? r.mul(n, t.transform, n) : r.copy(n, t.transform)),
            (this.transform = n);
          var a = this.globalScaleRatio;
          if (null != a && 1 !== a) {
            this.getGlobalScale(h);
            var s = h[0] < 0 ? -1 : 1,
              l = h[1] < 0 ? -1 : 1,
              c = ((h[0] - s) * a + s) / h[0] || 0,
              u = ((h[1] - l) * a + l) / h[1] || 0;
            (n[0] *= c), (n[1] *= c), (n[2] *= u), (n[3] *= u);
          }
          (this.invTransform = this.invTransform || r.create()), r.invert(this.invTransform, n);
        } else n && o(n);
      }),
        (c.getLocalTransform = function(t) {
          return l.getLocalTransform(this, t);
        }),
        (c.setTransform = function(t) {
          var e = this.transform,
            i = t.dpr || 1;
          e
            ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5])
            : t.setTransform(i, 0, 0, i, 0, 0);
        }),
        (c.restoreTransform = function(t) {
          var e = t.dpr || 1;
          t.setTransform(e, 0, 0, e, 0, 0);
        });
      var u = [],
        d = r.create();
      (c.setLocalTransform = function(t) {
        if (t) {
          var e = t[0] * t[0] + t[1] * t[1],
            i = t[2] * t[2] + t[3] * t[3],
            r = this.position,
            n = this.scale;
          s(e - 1) && (e = Math.sqrt(e)),
            s(i - 1) && (i = Math.sqrt(i)),
            t[0] < 0 && (e = -e),
            t[3] < 0 && (i = -i),
            (r[0] = t[4]),
            (r[1] = t[5]),
            (n[0] = e),
            (n[1] = i),
            (this.rotation = Math.atan2(-t[1] / i, t[0] / e));
        }
      }),
        (c.decomposeTransform = function() {
          if (this.transform) {
            var t = this.parent,
              e = this.transform;
            t && t.transform && (r.mul(u, t.invTransform, e), (e = u));
            var i = this.origin;
            i &&
              (i[0] || i[1]) &&
              ((d[4] = i[0]), (d[5] = i[1]), r.mul(u, e, d), (u[4] -= i[0]), (u[5] -= i[1]), (e = u)),
              this.setLocalTransform(e);
          }
        }),
        (c.getGlobalScale = function(t) {
          var e = this.transform;
          return (
            (t = t || []),
            e
              ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
                (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
                e[0] < 0 && (t[0] = -t[0]),
                e[3] < 0 && (t[1] = -t[1]),
                t)
              : ((t[0] = 1), (t[1] = 1), t)
          );
        }),
        (c.transformCoordToLocal = function(t, e) {
          var i = [t, e],
            r = this.invTransform;
          return r && n.applyTransform(i, i, r), i;
        }),
        (c.transformCoordToGlobal = function(t, e) {
          var i = [t, e],
            r = this.transform;
          return r && n.applyTransform(i, i, r), i;
        }),
        (l.getLocalTransform = function(t, e) {
          o((e = e || []));
          var i = t.origin,
            n = t.scale || [1, 1],
            a = t.rotation || 0,
            s = t.position || [0, 0];
          return (
            i && ((e[4] -= i[0]), (e[5] -= i[1])),
            r.scale(e, e, n),
            a && r.rotate(e, e, a),
            i && ((e[4] += i[0]), (e[5] += i[1])),
            (e[4] += s[0]),
            (e[5] += s[1]),
            e
          );
        }),
        (t.exports = l);
    },
    'Dagg': function(t, e, i) {
      var r = i('Gev7'),
        n = i('mFDi'),
        o = i('bYtY'),
        a = i('Xnb7');
      function s(t) {
        r.call(this, t);
      }
      (s.prototype = {
        constructor: s,
        type: 'image',
        brush: function(t, e) {
          var i = this.style,
            r = i.image;
          i.bind(t, this, e);
          var n = (this._image = a.createOrUpdateImage(r, this._image, this, this.onload));
          if (n && a.isImageReady(n)) {
            var o = i.x || 0,
              s = i.y || 0,
              l = i.width,
              c = i.height,
              h = n.width / n.height;
            if (
              (null == l && null != c
                ? (l = c * h)
                : null == c && null != l
                ? (c = l / h)
                : null == l && null == c && ((l = n.width), (c = n.height)),
              this.setTransform(t),
              i.sWidth && i.sHeight)
            )
              t.drawImage(n, (u = i.sx || 0), (d = i.sy || 0), i.sWidth, i.sHeight, o, s, l, c);
            else if (i.sx && i.sy) {
              var u, d;
              t.drawImage(n, (u = i.sx), (d = i.sy), l - u, c - d, o, s, l, c);
            } else t.drawImage(n, o, s, l, c);
            null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
          }
        },
        getBoundingRect: function() {
          var t = this.style;
          return this._rect || (this._rect = new n(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
        },
      }),
        o.inherits(s, r),
        (t.exports = s);
    },
    'Ez2D': function(t, e, i) {
      var r = i('bYtY'),
        n = i('4NO4');
      t.exports = function(t, e) {
        var i,
          o = [],
          a = t.seriesIndex;
        if (null == a || !(i = e.getSeriesByIndex(a))) return { point: [] };
        var s = i.getData(),
          l = n.queryDataIndex(s, t);
        if (null == l || l < 0 || r.isArray(l)) return { point: [] };
        var c = s.getItemGraphicEl(l),
          h = i.coordinateSystem;
        if (i.getTooltipPosition) o = i.getTooltipPosition(l) || [];
        else if (h && h.dataToPoint)
          o =
            h.dataToPoint(
              s.getValues(
                r.map(h.dimensions, function(t) {
                  return s.mapDimension(t);
                }),
                l,
                !0,
              ),
            ) || [];
        else if (c) {
          var u = c.getBoundingRect().clone();
          u.applyTransform(c.transform), (o = [u.x + u.width / 2, u.y + u.height / 2]);
        }
        return { point: o, el: c };
      };
    },
    'F9bG': function(t, e, i) {
      var r = i('bYtY'),
        n = i('ItGF'),
        o = (0, i('4NO4').makeInner)(),
        a = r.each;
      function s(t, e, i) {
        t.handler('leave', null, i);
      }
      function l(t, e, i, r) {
        e.handler(t, i, r);
      }
      (e.register = function(t, e, i) {
        if (!n.node) {
          var c = e.getZr();
          o(c).records || (o(c).records = {}),
            (function(t, e) {
              function i(i, r) {
                t.on(i, function(i) {
                  var n = (function(t) {
                    var e = { showTip: [], hideTip: [] };
                    return {
                      dispatchAction: function i(r) {
                        var n = e[r.type];
                        n ? n.push(r) : ((r.dispatchAction = i), t.dispatchAction(r));
                      },
                      pendings: e,
                    };
                  })(e);
                  a(o(t).records, function(t) {
                    t && r(t, i, n.dispatchAction);
                  }),
                    (function(t, e) {
                      var i,
                        r = t.showTip.length,
                        n = t.hideTip.length;
                      r ? (i = t.showTip[r - 1]) : n && (i = t.hideTip[n - 1]),
                        i && ((i.dispatchAction = null), e.dispatchAction(i));
                    })(n.pendings, e);
                });
              }
              o(t).initialized ||
                ((o(t).initialized = !0),
                i('click', r.curry(l, 'click')),
                i('mousemove', r.curry(l, 'mousemove')),
                i('globalout', s));
            })(c, e),
            ((o(c).records[t] || (o(c).records[t] = {})).handler = i);
        }
      }),
        (e.unregister = function(t, e) {
          if (!n.node) {
            var i = e.getZr();
            (o(i).records || {})[t] && (o(i).records[t] = null);
          }
        });
    },
    'FUi9': function(t, e, i) {
      var r = i('bYtY'),
        n = i('MwEJ'),
        o = i('aX7z'),
        a = i('ICMv'),
        s = i('Qxkt'),
        l = i('+TT/');
      e.getLayoutRect = l.getLayoutRect;
      var c = i('7hqr'),
        h = c.enableDataStack,
        u = c.isDimensionStacked,
        d = c.getStackedDimension,
        f = i('hi0g');
      e.completeDimensions = f;
      var p = i('sdST');
      e.createDimensions = p;
      var g = i('oVpE');
      e.createSymbol = g.createSymbol;
      var m = { isDimensionStacked: u, enableDataStack: h, getStackedDimension: d };
      (e.createList = function(t) {
        return n(t.getSource(), t);
      }),
        (e.dataStack = m),
        (e.createScale = function(t, e) {
          var i = e;
          s.isInstance(e) || ((i = new s(e)), r.mixin(i, a));
          var n = o.createScaleByModel(i);
          return n.setExtent(t[0], t[1]), o.niceScaleExtent(n, i), n;
        }),
        (e.mixinAxisModelCommonMethods = function(t) {
          r.mixin(t, a);
        });
    },
    'Fofx': function(t, e) {
      var i = 'undefined' == typeof Float32Array ? Array : Float32Array;
      function r() {
        var t = new i(6);
        return n(t), t;
      }
      function n(t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t;
      }
      function o(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4]), (t[5] = e[5]), t;
      }
      (e.create = r),
        (e.identity = n),
        (e.copy = o),
        (e.mul = function(t, e, i) {
          var r = e[1] * i[0] + e[3] * i[1],
            n = e[0] * i[2] + e[2] * i[3],
            o = e[1] * i[2] + e[3] * i[3],
            a = e[0] * i[4] + e[2] * i[5] + e[4],
            s = e[1] * i[4] + e[3] * i[5] + e[5];
          return (t[0] = e[0] * i[0] + e[2] * i[1]), (t[1] = r), (t[2] = n), (t[3] = o), (t[4] = a), (t[5] = s), t;
        }),
        (e.translate = function(t, e, i) {
          return (
            (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), (t[4] = e[4] + i[0]), (t[5] = e[5] + i[1]), t
          );
        }),
        (e.rotate = function(t, e, i) {
          var r = e[0],
            n = e[2],
            o = e[4],
            a = e[1],
            s = e[3],
            l = e[5],
            c = Math.sin(i),
            h = Math.cos(i);
          return (
            (t[0] = r * h + a * c),
            (t[1] = -r * c + a * h),
            (t[2] = n * h + s * c),
            (t[3] = -n * c + h * s),
            (t[4] = h * o + c * l),
            (t[5] = h * l - c * o),
            t
          );
        }),
        (e.scale = function(t, e, i) {
          var r = i[0],
            n = i[1];
          return (
            (t[0] = e[0] * r),
            (t[1] = e[1] * n),
            (t[2] = e[2] * r),
            (t[3] = e[3] * n),
            (t[4] = e[4] * r),
            (t[5] = e[5] * n),
            t
          );
        }),
        (e.invert = function(t, e) {
          var i = e[0],
            r = e[2],
            n = e[4],
            o = e[1],
            a = e[3],
            s = e[5],
            l = i * a - o * r;
          return l
            ? ((t[0] = a * (l = 1 / l)),
              (t[1] = -o * l),
              (t[2] = -r * l),
              (t[3] = i * l),
              (t[4] = (r * s - a * n) * l),
              (t[5] = (o * n - i * s) * l),
              t)
            : null;
        }),
        (e.clone = function(t) {
          var e = r();
          return o(e, t), e;
        });
    },
    'GMDS': function(t, e, i) {
      var r = i('bYtY'),
        n = i('4NgU'),
        o = i('jkPA'),
        a = n.prototype,
        s = n.extend({
          type: 'ordinal',
          init: function(t, e) {
            (t && !r.isArray(t)) || (t = new o({ categories: t })),
              (this._ordinalMeta = t),
              (this._extent = e || [0, t.categories.length - 1]);
          },
          parse: function(t) {
            return 'string' == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
          },
          contain: function(t) {
            return (t = this.parse(t)), a.contain.call(this, t) && null != this._ordinalMeta.categories[t];
          },
          normalize: function(t) {
            return a.normalize.call(this, this.parse(t));
          },
          scale: function(t) {
            return Math.round(a.scale.call(this, t));
          },
          getTicks: function() {
            for (var t = [], e = this._extent, i = e[0]; i <= e[1]; ) t.push(i), i++;
            return t;
          },
          getLabel: function(t) {
            if (!this.isBlank()) return this._ordinalMeta.categories[t];
          },
          count: function() {
            return this._extent[1] - this._extent[0] + 1;
          },
          unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
          },
          getOrdinalMeta: function() {
            return this._ordinalMeta;
          },
          niceTicks: r.noop,
          niceExtent: r.noop,
        });
      (s.create = function() {
        return new s();
      }),
        (t.exports = s);
    },
    'Gev7': function(t, e, i) {
      var r = i('bYtY'),
        n = i('K2GJ'),
        o = i('1bdT'),
        a = i('ni6a');
      function s(t) {
        for (var e in (o.call(this, (t = t || {})), t)) t.hasOwnProperty(e) && 'style' !== e && (this[e] = t[e]);
        (this.style = new n(t.style, this)), (this._rect = null), (this.__clipPaths = []);
      }
      (s.prototype = {
        constructor: s,
        type: 'displayable',
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: 'pointer',
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function(t) {},
        afterBrush: function(t) {},
        brush: function(t, e) {},
        getBoundingRect: function() {},
        contain: function(t, e) {
          return this.rectContain(t, e);
        },
        traverse: function(t, e) {
          t.call(e, this);
        },
        rectContain: function(t, e) {
          var i = this.transformCoordToLocal(t, e);
          return this.getBoundingRect().contain(i[0], i[1]);
        },
        dirty: function() {
          (this.__dirty = this.__dirtyText = !0), (this._rect = null), this.__zr && this.__zr.refresh();
        },
        animateStyle: function(t) {
          return this.animate('style', t);
        },
        attrKV: function(t, e) {
          'style' !== t ? o.prototype.attrKV.call(this, t, e) : this.style.set(e);
        },
        setStyle: function(t, e) {
          return this.style.set(t, e), this.dirty(!1), this;
        },
        useStyle: function(t) {
          return (this.style = new n(t, this)), this.dirty(!1), this;
        },
      }),
        r.inherits(s, o),
        r.mixin(s, a),
        (t.exports = s);
    },
    'H6uX': function(t, e) {
      var i = Array.prototype.slice,
        r = function(t) {
          (this._$handlers = {}), (this._$eventProcessor = t);
        };
      function n(t, e, i, r, n, o) {
        var a = t._$handlers;
        if (('function' == typeof i && ((n = r), (r = i), (i = null)), !r || !e)) return t;
        (i = (function(t, e) {
          var i = t._$eventProcessor;
          return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e;
        })(t, i)),
          a[e] || (a[e] = []);
        for (var s = 0; s < a[e].length; s++) if (a[e][s].h === r) return t;
        var l = { h: r, one: o, query: i, ctx: n || t, callAtLast: r.zrEventfulCallAtLast },
          c = a[e].length - 1,
          h = a[e][c];
        return h && h.callAtLast ? a[e].splice(c, 0, l) : a[e].push(l), t;
      }
      (r.prototype = {
        constructor: r,
        one: function(t, e, i, r) {
          return n(this, t, e, i, r, !0);
        },
        on: function(t, e, i, r) {
          return n(this, t, e, i, r, !1);
        },
        isSilent: function(t) {
          var e = this._$handlers;
          return !e[t] || !e[t].length;
        },
        off: function(t, e) {
          var i = this._$handlers;
          if (!t) return (this._$handlers = {}), this;
          if (e) {
            if (i[t]) {
              for (var r = [], n = 0, o = i[t].length; n < o; n++) i[t][n].h !== e && r.push(i[t][n]);
              i[t] = r;
            }
            i[t] && 0 === i[t].length && delete i[t];
          } else delete i[t];
          return this;
        },
        trigger: function(t) {
          var e = this._$handlers[t],
            r = this._$eventProcessor;
          if (e) {
            var n = arguments,
              o = n.length;
            o > 3 && (n = i.call(n, 1));
            for (var a = e.length, s = 0; s < a; ) {
              var l = e[s];
              if (r && r.filter && null != l.query && !r.filter(t, l.query)) s++;
              else {
                switch (o) {
                  case 1:
                    l.h.call(l.ctx);
                    break;
                  case 2:
                    l.h.call(l.ctx, n[1]);
                    break;
                  case 3:
                    l.h.call(l.ctx, n[1], n[2]);
                    break;
                  default:
                    l.h.apply(l.ctx, n);
                }
                l.one ? (e.splice(s, 1), a--) : s++;
              }
            }
          }
          return r && r.afterTrigger && r.afterTrigger(t), this;
        },
        triggerWithContext: function(t) {
          var e = this._$handlers[t],
            r = this._$eventProcessor;
          if (e) {
            var n = arguments,
              o = n.length;
            o > 4 && (n = i.call(n, 1, n.length - 1));
            for (var a = n[n.length - 1], s = e.length, l = 0; l < s; ) {
              var c = e[l];
              if (r && r.filter && null != c.query && !r.filter(t, c.query)) l++;
              else {
                switch (o) {
                  case 1:
                    c.h.call(a);
                    break;
                  case 2:
                    c.h.call(a, n[1]);
                    break;
                  case 3:
                    c.h.call(a, n[1], n[2]);
                    break;
                  default:
                    c.h.apply(a, n);
                }
                c.one ? (e.splice(l, 1), s--) : l++;
              }
            }
          }
          return r && r.afterTrigger && r.afterTrigger(t), this;
        },
      }),
        (t.exports = r);
    },
    'ICMv': function(t, e, i) {
      var r = i('bYtY');
      t.exports = {
        getMin: function(t) {
          var e = this.option,
            i = t || null == e.rangeStart ? e.min : e.rangeStart;
          return (
            this.axis &&
              null != i &&
              'dataMin' !== i &&
              'function' != typeof i &&
              !r.eqNaN(i) &&
              (i = this.axis.scale.parse(i)),
            i
          );
        },
        getMax: function(t) {
          var e = this.option,
            i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
          return (
            this.axis &&
              null != i &&
              'dataMax' !== i &&
              'function' != typeof i &&
              !r.eqNaN(i) &&
              (i = this.axis.scale.parse(i)),
            i
          );
        },
        getNeedCrossZero: function() {
          var t = this.option;
          return null == t.rangeStart && null == t.rangeEnd && !t.scale;
        },
        getCoordSysModel: r.noop,
        setRange: function(t, e) {
          (this.option.rangeStart = t), (this.option.rangeEnd = e);
        },
        resetRange: function() {
          this.option.rangeStart = this.option.rangeEnd = null;
        },
      };
    },
    'IDmD': function(t, e, i) {
      var r = i('bYtY'),
        n = {};
      function o() {
        this._coordinateSystems = [];
      }
      (o.prototype = {
        constructor: o,
        create: function(t, e) {
          var i = [];
          r.each(n, function(r, n) {
            var o = r.create(t, e);
            i = i.concat(o || []);
          }),
            (this._coordinateSystems = i);
        },
        update: function(t, e) {
          r.each(this._coordinateSystems, function(i) {
            i.update && i.update(t, e);
          });
        },
        getCoordinateSystems: function() {
          return this._coordinateSystems.slice();
        },
      }),
        (o.register = function(t, e) {
          n[t] = e;
        }),
        (o.get = function(t) {
          return n[t];
        }),
        (t.exports = o);
    },
    'IMiH': function(t, e, i) {
      var r = i('Sj9i'),
        n = i('QBsz'),
        o = i('4mN7'),
        a = i('mFDi'),
        s = i('LPTA').devicePixelRatio,
        l = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
        c = [],
        h = [],
        u = [],
        d = [],
        f = Math.min,
        p = Math.max,
        g = Math.cos,
        m = Math.sin,
        y = Math.sqrt,
        v = Math.abs,
        x = 'undefined' != typeof Float32Array,
        b = function(t) {
          (this._saveData = !t), this._saveData && (this.data = []), (this._ctx = null);
        };
      (b.prototype = {
        constructor: b,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
          (this._ux = v(1 / s / t) || 0), (this._uy = v(1 / s / e) || 0);
        },
        getContext: function() {
          return this._ctx;
        },
        beginPath: function(t) {
          return (
            (this._ctx = t),
            t && t.beginPath(),
            t && (this.dpr = t.dpr),
            this._saveData && (this._len = 0),
            this._lineDash && ((this._lineDash = null), (this._dashOffset = 0)),
            this
          );
        },
        moveTo: function(t, e) {
          return (
            this.addData(l.M, t, e),
            this._ctx && this._ctx.moveTo(t, e),
            (this._x0 = t),
            (this._y0 = e),
            (this._xi = t),
            (this._yi = e),
            this
          );
        },
        lineTo: function(t, e) {
          var i = v(t - this._xi) > this._ux || v(e - this._yi) > this._uy || this._len < 5;
          return (
            this.addData(l.L, t, e),
            this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
            i && ((this._xi = t), (this._yi = e)),
            this
          );
        },
        bezierCurveTo: function(t, e, i, r, n, o) {
          return (
            this.addData(l.C, t, e, i, r, n, o),
            this._ctx &&
              (this._needsDash() ? this._dashedBezierTo(t, e, i, r, n, o) : this._ctx.bezierCurveTo(t, e, i, r, n, o)),
            (this._xi = n),
            (this._yi = o),
            this
          );
        },
        quadraticCurveTo: function(t, e, i, r) {
          return (
            this.addData(l.Q, t, e, i, r),
            this._ctx &&
              (this._needsDash() ? this._dashedQuadraticTo(t, e, i, r) : this._ctx.quadraticCurveTo(t, e, i, r)),
            (this._xi = i),
            (this._yi = r),
            this
          );
        },
        arc: function(t, e, i, r, n, o) {
          return (
            this.addData(l.A, t, e, i, i, r, n - r, 0, o ? 0 : 1),
            this._ctx && this._ctx.arc(t, e, i, r, n, o),
            (this._xi = g(n) * i + t),
            (this._yi = m(n) * i + e),
            this
          );
        },
        arcTo: function(t, e, i, r, n) {
          return this._ctx && this._ctx.arcTo(t, e, i, r, n), this;
        },
        rect: function(t, e, i, r) {
          return this._ctx && this._ctx.rect(t, e, i, r), this.addData(l.R, t, e, i, r), this;
        },
        closePath: function() {
          this.addData(l.Z);
          var t = this._ctx,
            e = this._x0,
            i = this._y0;
          return (
            t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), (this._xi = e), (this._yi = i), this
          );
        },
        fill: function(t) {
          t && t.fill(), this.toStatic();
        },
        stroke: function(t) {
          t && t.stroke(), this.toStatic();
        },
        setLineDash: function(t) {
          if (t instanceof Array) {
            (this._lineDash = t), (this._dashIdx = 0);
            for (var e = 0, i = 0; i < t.length; i++) e += t[i];
            this._dashSum = e;
          }
          return this;
        },
        setLineDashOffset: function(t) {
          return (this._dashOffset = t), this;
        },
        len: function() {
          return this._len;
        },
        setData: function(t) {
          var e = t.length;
          (this.data && this.data.length === e) || !x || (this.data = new Float32Array(e));
          for (var i = 0; i < e; i++) this.data[i] = t[i];
          this._len = e;
        },
        appendPath: function(t) {
          t instanceof Array || (t = [t]);
          for (var e = t.length, i = 0, r = this._len, n = 0; n < e; n++) i += t[n].len();
          for (x && this.data instanceof Float32Array && (this.data = new Float32Array(r + i)), n = 0; n < e; n++)
            for (var o = t[n].data, a = 0; a < o.length; a++) this.data[r++] = o[a];
          this._len = r;
        },
        addData: function(t) {
          if (this._saveData) {
            var e = this.data;
            this._len + arguments.length > e.length && (this._expandData(), (e = this.data));
            for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
            this._prevCmd = t;
          }
        },
        _expandData: function() {
          if (!(this.data instanceof Array)) {
            for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
            this.data = t;
          }
        },
        _needsDash: function() {
          return this._lineDash;
        },
        _dashedLineTo: function(t, e) {
          var i,
            r,
            n = this._dashSum,
            o = this._dashOffset,
            a = this._lineDash,
            s = this._ctx,
            l = this._xi,
            c = this._yi,
            h = t - l,
            u = e - c,
            d = y(h * h + u * u),
            g = l,
            m = c,
            v = a.length;
          for (
            o < 0 && (o = n + o), g -= (o %= n) * (h /= d), m -= o * (u /= d);
            (h > 0 && g <= t) || (h < 0 && g >= t) || (0 === h && ((u > 0 && m <= e) || (u < 0 && m >= e)));

          )
            (g += h * (i = a[(r = this._dashIdx)])),
              (m += u * i),
              (this._dashIdx = (r + 1) % v),
              (h > 0 && g < l) ||
                (h < 0 && g > l) ||
                (u > 0 && m < c) ||
                (u < 0 && m > c) ||
                s[r % 2 ? 'moveTo' : 'lineTo'](h >= 0 ? f(g, t) : p(g, t), u >= 0 ? f(m, e) : p(m, e));
          this._dashOffset = -y((h = g - t) * h + (u = m - e) * u);
        },
        _dashedBezierTo: function(t, e, i, n, o, a) {
          var s,
            l,
            c,
            h,
            u,
            d = this._dashSum,
            f = this._dashOffset,
            p = this._lineDash,
            g = this._ctx,
            m = this._xi,
            v = this._yi,
            x = r.cubicAt,
            b = 0,
            _ = this._dashIdx,
            S = p.length,
            w = 0;
          for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += 0.1)
            (l = x(m, t, i, o, s + 0.1) - x(m, t, i, o, s)),
              (c = x(v, e, n, a, s + 0.1) - x(v, e, n, a, s)),
              (b += y(l * l + c * c));
          for (; _ < S && !((w += p[_]) > f); _++);
          for (s = (w - f) / b; s <= 1; )
            (h = x(m, t, i, o, s)),
              (u = x(v, e, n, a, s)),
              _ % 2 ? g.moveTo(h, u) : g.lineTo(h, u),
              (s += p[_] / b),
              (_ = (_ + 1) % S);
          _ % 2 != 0 && g.lineTo(o, a), (this._dashOffset = -y((l = o - h) * l + (c = a - u) * c));
        },
        _dashedQuadraticTo: function(t, e, i, r) {
          var n = i,
            o = r;
          (i = (i + 2 * t) / 3),
            (r = (r + 2 * e) / 3),
            this._dashedBezierTo((t = (this._xi + 2 * t) / 3), (e = (this._yi + 2 * e) / 3), i, r, n, o);
        },
        toStatic: function() {
          var t = this.data;
          t instanceof Array && ((t.length = this._len), x && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function() {
          (c[0] = c[1] = u[0] = u[1] = Number.MAX_VALUE), (h[0] = h[1] = d[0] = d[1] = -Number.MAX_VALUE);
          for (var t = this.data, e = 0, i = 0, r = 0, s = 0, f = 0; f < t.length; ) {
            var p = t[f++];
            switch ((1 === f && ((r = e = t[f]), (s = i = t[f + 1])), p)) {
              case l.M:
                (e = r = t[f++]), (i = s = t[f++]), (u[0] = r), (u[1] = s), (d[0] = r), (d[1] = s);
                break;
              case l.L:
                o.fromLine(e, i, t[f], t[f + 1], u, d), (e = t[f++]), (i = t[f++]);
                break;
              case l.C:
                o.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], u, d), (e = t[f++]), (i = t[f++]);
                break;
              case l.Q:
                o.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], u, d), (e = t[f++]), (i = t[f++]);
                break;
              case l.A:
                var y = t[f++],
                  v = t[f++],
                  x = t[f++],
                  b = t[f++],
                  _ = t[f++],
                  S = t[f++] + _;
                f += 1;
                var w = 1 - t[f++];
                1 === f && ((r = g(_) * x + y), (s = m(_) * b + v)),
                  o.fromArc(y, v, x, b, _, S, w, u, d),
                  (e = g(S) * x + y),
                  (i = m(S) * b + v);
                break;
              case l.R:
                (r = e = t[f++]), (s = i = t[f++]);
                var C = t[f++],
                  T = t[f++];
                o.fromLine(r, s, r + C, s + T, u, d);
                break;
              case l.Z:
                (e = r), (i = s);
            }
            n.min(c, c, u), n.max(h, h, d);
          }
          return 0 === f && (c[0] = c[1] = h[0] = h[1] = 0), new a(c[0], c[1], h[0] - c[0], h[1] - c[1]);
        },
        rebuildPath: function(t) {
          for (var e, i, r, n, o, a, s = this.data, c = this._ux, h = this._uy, u = this._len, d = 0; d < u; ) {
            var f = s[d++];
            switch ((1 === d && ((e = r = s[d]), (i = n = s[d + 1])), f)) {
              case l.M:
                (e = r = s[d++]), (i = n = s[d++]), t.moveTo(r, n);
                break;
              case l.L:
                (o = s[d++]),
                  (a = s[d++]),
                  (v(o - r) > c || v(a - n) > h || d === u - 1) && (t.lineTo(o, a), (r = o), (n = a));
                break;
              case l.C:
                t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), (r = s[d - 2]), (n = s[d - 1]);
                break;
              case l.Q:
                t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), (r = s[d - 2]), (n = s[d - 1]);
                break;
              case l.A:
                var p = s[d++],
                  y = s[d++],
                  x = s[d++],
                  b = s[d++],
                  _ = s[d++],
                  S = s[d++],
                  w = s[d++],
                  C = s[d++],
                  T = x > b ? x : b,
                  k = x > b ? 1 : x / b,
                  M = x > b ? b / x : 1,
                  A = _ + S;
                Math.abs(x - b) > 0.001
                  ? (t.translate(p, y),
                    t.rotate(w),
                    t.scale(k, M),
                    t.arc(0, 0, T, _, A, 1 - C),
                    t.scale(1 / k, 1 / M),
                    t.rotate(-w),
                    t.translate(-p, -y))
                  : t.arc(p, y, T, _, A, 1 - C),
                  1 === d && ((e = g(_) * x + p), (i = m(_) * b + y)),
                  (r = g(A) * x + p),
                  (n = m(A) * b + y);
                break;
              case l.R:
                (e = r = s[d]), (i = n = s[d + 1]), t.rect(s[d++], s[d++], s[d++], s[d++]);
                break;
              case l.Z:
                t.closePath(), (r = e), (n = i);
            }
          }
        },
      }),
        (b.CMD = l),
        (t.exports = b);
    },
    'IWp7': function(t, e, i) {
      var r = i('bYtY'),
        n = i('OELB'),
        o = i('7aKB'),
        a = i('lE7J'),
        s = i('ieMj'),
        l = s.prototype,
        c = Math.ceil,
        h = Math.floor,
        u = s.extend({
          type: 'time',
          getLabel: function(t) {
            var e = this._stepLvl,
              i = new Date(t);
            return o.formatTime(e[0], i, this.getSetting('useUTC'));
          },
          niceExtent: function(t) {
            var e = this._extent;
            if ((e[0] === e[1] && ((e[0] -= 864e5), (e[1] += 864e5)), e[1] === -1 / 0 && e[0] === 1 / 0)) {
              var i = new Date();
              (e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate())), (e[0] = e[1] - 864e5);
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = n.round(h(e[0] / r) * r)), t.fixMax || (e[1] = n.round(c(e[1] / r) * r));
          },
          niceTicks: function(t, e, i) {
            var r = this._extent,
              o = r[1] - r[0],
              s = o / (t = t || 10);
            null != e && s < e && (s = e), null != i && s > i && (s = i);
            var l = d.length,
              u = (function(t, e, i, r) {
                for (; i < r; ) {
                  var n = (i + r) >>> 1;
                  t[n][1] < e ? (i = n + 1) : (r = n);
                }
                return i;
              })(d, s, 0, l),
              f = d[Math.min(u, l - 1)],
              p = f[1];
            'year' === f[0] && (p *= n.nice(o / p / t, !0));
            var g = this.getSetting('useUTC') ? 0 : 60 * new Date(+r[0] || +r[1]).getTimezoneOffset() * 1e3,
              m = [Math.round(c((r[0] - g) / p) * p + g), Math.round(h((r[1] - g) / p) * p + g)];
            a.fixExtent(m, r), (this._stepLvl = f), (this._interval = p), (this._niceExtent = m);
          },
          parse: function(t) {
            return +n.parseDate(t);
          },
        });
      r.each(['contain', 'normalize'], function(t) {
        u.prototype[t] = function(e) {
          return l[t].call(this, this.parse(e));
        };
      });
      var d = [
        ['hh:mm:ss', 1e3],
        ['hh:mm:ss', 5e3],
        ['hh:mm:ss', 1e4],
        ['hh:mm:ss', 15e3],
        ['hh:mm:ss', 3e4],
        ['hh:mm\nMM-dd', 6e4],
        ['hh:mm\nMM-dd', 3e5],
        ['hh:mm\nMM-dd', 6e5],
        ['hh:mm\nMM-dd', 9e5],
        ['hh:mm\nMM-dd', 18e5],
        ['hh:mm\nMM-dd', 36e5],
        ['hh:mm\nMM-dd', 72e5],
        ['hh:mm\nMM-dd', 216e5],
        ['hh:mm\nMM-dd', 432e5],
        ['MM-dd\nyyyy', 864e5],
        ['MM-dd\nyyyy', 1728e5],
        ['MM-dd\nyyyy', 2592e5],
        ['MM-dd\nyyyy', 3456e5],
        ['MM-dd\nyyyy', 432e6],
        ['MM-dd\nyyyy', 5184e5],
        ['week', 6048e5],
        ['MM-dd\nyyyy', 864e6],
        ['week', 12096e5],
        ['week', 18144e5],
        ['month', 26784e5],
        ['week', 36288e5],
        ['month', 53568e5],
        ['week', 6048e6],
        ['quarter', 8208e6],
        ['month', 107136e5],
        ['month', 13392e6],
        ['half-year', 16416e6],
        ['month', 214272e5],
        ['month', 26784e6],
        ['year', 32832e6],
      ];
      (u.create = function(t) {
        return new u({ useUTC: t.ecModel.get('useUTC') });
      }),
        (t.exports = u);
    },
    'ItGF': function(t, e) {
      var i, r, n, o, a, s, l;
      (i =
        'object' == typeof wx && 'function' == typeof wx.getSystemInfoSync
          ? {
              browser: {},
              os: {},
              node: !1,
              wxa: !0,
              canvasSupported: !0,
              svgSupported: !1,
              touchEventsSupported: !0,
              domSupported: !1,
            }
          : 'undefined' == typeof document && 'undefined' != typeof self
          ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1 }
          : 'undefined' == typeof navigator
          ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1 }
          : ((n = {}),
            (o = (r = navigator.userAgent).match(/Firefox\/([\d.]+)/)),
            (a = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/)),
            (s = r.match(/Edge\/([\d.]+)/)),
            (l = /micromessenger/i.test(r)),
            o && ((n.firefox = !0), (n.version = o[1])),
            a && ((n.ie = !0), (n.version = a[1])),
            s && ((n.edge = !0), (n.version = s[1])),
            l && (n.weChat = !0),
            {
              browser: n,
              os: {},
              node: !1,
              canvasSupported: !!document.createElement('canvas').getContext,
              svgSupported: 'undefined' != typeof SVGRect,
              touchEventsSupported: 'ontouchstart' in window && !n.ie && !n.edge,
              pointerEventsSupported: 'onpointerdown' in window && (n.edge || (n.ie && n.version >= 11)),
              domSupported: 'undefined' != typeof document,
            })),
        (t.exports = i);
    },
    'IwbS': function(t, e, i) {
      var r = i('bYtY'),
        n = i('NC18'),
        o = i('Qe9p'),
        a = i('Fofx'),
        s = i('QBsz'),
        l = i('y+Vt'),
        c = i('DN4a'),
        h = i('Dagg');
      e.Image = h;
      var u = i('4fz+');
      e.Group = u;
      var d = i('dqUG');
      e.Text = d;
      var f = i('2fw6');
      e.Circle = f;
      var p = i('SqI9');
      e.Sector = p;
      var g = i('RXMa');
      e.Ring = g;
      var m = i('h7HQ');
      e.Polygon = m;
      var y = i('1Jh7');
      e.Polyline = y;
      var v = i('x6Kt');
      e.Rect = v;
      var x = i('yxFR');
      e.Line = x;
      var b = i('rA99');
      e.BezierCurve = b;
      var _ = i('jTL6');
      e.Arc = _;
      var S = i('1MYJ');
      e.CompoundPath = S;
      var w = i('SKnc');
      e.LinearGradient = w;
      var C = i('3e3G');
      e.RadialGradient = C;
      var T = i('mFDi');
      e.BoundingRect = T;
      var k = i('OS9S');
      e.IncrementalDisplayable = k;
      var M = Math.round,
        A = Math.max,
        D = Math.min,
        I = {},
        O = 1;
      function L(t, e, i, r) {
        var o = n.createFromString(t, e);
        return i && ('center' === r && (i = P(i, o.getBoundingRect())), B(o, i)), o;
      }
      function P(t, e) {
        var i,
          r = e.width / e.height,
          n = t.height * r;
        return (
          (i = n <= t.width ? t.height : (n = t.width) / r),
          { x: t.x + t.width / 2 - n / 2, y: t.y + t.height / 2 - i / 2, width: n, height: i }
        );
      }
      var E = n.mergePath;
      function B(t, e) {
        if (t.applyTransform) {
          var i = t.getBoundingRect().calculateTransform(e);
          t.applyTransform(i);
        }
      }
      function R(t, e, i) {
        var r = M(2 * t);
        return (r + M(e)) % 2 == 0 ? r / 2 : (r + (i ? 1 : -1)) / 2;
      }
      function z(t) {
        return null != t && 'none' !== t;
      }
      var W = r.createHashMap(),
        F = 0;
      function N(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
          var i = t.useHoverLayer;
          t.__highlighted = i ? 'layer' : 'plain';
          var r = t.__zr;
          if (r || !i) {
            var n = t,
              o = t.style;
            i && (o = (n = r.addHover(t)).style),
              et(o),
              i ||
                (function(t) {
                  if (t.__hoverStlDirty) {
                    t.__hoverStlDirty = !1;
                    var e = t.__hoverStl;
                    if (e) {
                      var i = (t.__cachedNormalStl = {});
                      t.__cachedNormalZ2 = t.z2;
                      var r = t.style;
                      for (var n in e) null != e[n] && (i[n] = r[n]);
                      (i.fill = r.fill), (i.stroke = r.stroke);
                    } else t.__cachedNormalStl = t.__cachedNormalZ2 = null;
                  }
                })(n),
              o.extendFrom(e),
              Y(o, e, 'fill'),
              Y(o, e, 'stroke'),
              tt(o),
              i || (t.dirty(!1), (t.z2 += O));
          }
        }
      }
      function Y(t, e, i) {
        !z(e[i]) &&
          z(t[i]) &&
          (t[i] = (function(t) {
            if ('string' != typeof t) return t;
            var e = W.get(t);
            return e || ((e = o.lift(t, -0.1)), F < 1e4 && (W.set(t, e), F++)), e;
          })(t[i]));
      }
      function H(t) {
        var e = t.__highlighted;
        if (e)
          if (((t.__highlighted = !1), 'layer' === e)) t.__zr && t.__zr.removeHover(t);
          else if (e) {
            var i = t.style,
              r = t.__cachedNormalStl;
            r && (et(i), t.setStyle(r), tt(i));
            var n = t.__cachedNormalZ2;
            null != n && t.z2 - n === O && (t.z2 = n);
          }
      }
      function V(t, e) {
        t.isGroup
          ? t.traverse(function(t) {
              !t.isGroup && e(t);
            })
          : e(t);
      }
      function U(t, e) {
        (e = t.__hoverStl = !1 !== e && (e || {})),
          (t.__hoverStlDirty = !0),
          t.__highlighted && ((t.__cachedNormalStl = null), H(t), N(t));
      }
      function G(t) {
        (this.__hoverSilentOnTouch && t.zrByTouch) || (!this.__isEmphasisEntered && V(this, N));
      }
      function j(t) {
        (this.__hoverSilentOnTouch && t.zrByTouch) || (!this.__isEmphasisEntered && V(this, H));
      }
      function X() {
        (this.__isEmphasisEntered = !0), V(this, N);
      }
      function q() {
        (this.__isEmphasisEntered = !1), V(this, H);
      }
      function K(t, e) {
        var i = !1 === e;
        if (((t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch), !i || t.__hoverStyleTrigger)) {
          var r = i ? 'off' : 'on';
          t[r]('mouseover', G)[r]('mouseout', j), t[r]('emphasis', X)[r]('normal', q), (t.__hoverStyleTrigger = !i);
        }
      }
      function Q(t, e, i, n, o) {
        return Z(t, e, n, o), i && r.extend(t, i), t;
      }
      function Z(t, e, i, n) {
        if ((i = i || I).isRectText) {
          var o = e.getShallow('position') || (n ? null : 'inside');
          'outside' === o && (o = 'top'), (t.textPosition = o), (t.textOffset = e.getShallow('offset'));
          var a = e.getShallow('rotate');
          null != a && (a *= Math.PI / 180),
            (t.textRotation = a),
            (t.textDistance = r.retrieve2(e.getShallow('distance'), n ? null : 5));
        }
        var s,
          l = e.ecModel,
          c = l && l.option.textStyle,
          h = (function(t) {
            for (var e; t && t !== t.ecModel; ) {
              var i = (t.option || I).rich;
              if (i) for (var r in ((e = e || {}), i)) i.hasOwnProperty(r) && (e[r] = 1);
              t = t.parentModel;
            }
            return e;
          })(e);
        if (h)
          for (var u in ((s = {}), h))
            if (h.hasOwnProperty(u)) {
              var d = e.getModel(['rich', u]);
              J((s[u] = {}), d, c, i, n);
            }
        return (t.rich = s), J(t, e, c, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t;
      }
      function J(t, e, i, n, o, a) {
        (i = (!o && i) || I),
          (t.textFill = $(e.getShallow('color'), n) || i.color),
          (t.textStroke = $(e.getShallow('textBorderColor'), n) || i.textBorderColor),
          (t.textStrokeWidth = r.retrieve2(e.getShallow('textBorderWidth'), i.textBorderWidth)),
          (t.insideRawTextPosition = t.textPosition),
          o || (a && ((t.insideRollbackOpt = n), tt(t)), null == t.textFill && (t.textFill = n.autoColor)),
          (t.fontStyle = e.getShallow('fontStyle') || i.fontStyle),
          (t.fontWeight = e.getShallow('fontWeight') || i.fontWeight),
          (t.fontSize = e.getShallow('fontSize') || i.fontSize),
          (t.fontFamily = e.getShallow('fontFamily') || i.fontFamily),
          (t.textAlign = e.getShallow('align')),
          (t.textVerticalAlign = e.getShallow('verticalAlign') || e.getShallow('baseline')),
          (t.textLineHeight = e.getShallow('lineHeight')),
          (t.textWidth = e.getShallow('width')),
          (t.textHeight = e.getShallow('height')),
          (t.textTag = e.getShallow('tag')),
          (a && n.disableBox) ||
            ((t.textBackgroundColor = $(e.getShallow('backgroundColor'), n)),
            (t.textPadding = e.getShallow('padding')),
            (t.textBorderColor = $(e.getShallow('borderColor'), n)),
            (t.textBorderWidth = e.getShallow('borderWidth')),
            (t.textBorderRadius = e.getShallow('borderRadius')),
            (t.textBoxShadowColor = e.getShallow('shadowColor')),
            (t.textBoxShadowBlur = e.getShallow('shadowBlur')),
            (t.textBoxShadowOffsetX = e.getShallow('shadowOffsetX')),
            (t.textBoxShadowOffsetY = e.getShallow('shadowOffsetY'))),
          (t.textShadowColor = e.getShallow('textShadowColor') || i.textShadowColor),
          (t.textShadowBlur = e.getShallow('textShadowBlur') || i.textShadowBlur),
          (t.textShadowOffsetX = e.getShallow('textShadowOffsetX') || i.textShadowOffsetX),
          (t.textShadowOffsetY = e.getShallow('textShadowOffsetY') || i.textShadowOffsetY);
      }
      function $(t, e) {
        return 'auto' !== t ? t : e && e.autoColor ? e.autoColor : null;
      }
      function tt(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
          var i,
            r = e.useInsideStyle,
            n = t.insideRawTextPosition,
            o = e.autoColor;
          !1 !== r && (!0 === r || (e.isRectText && n && 'string' == typeof n && n.indexOf('inside') >= 0))
            ? ((i = { textFill: null, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }),
              (t.textFill = '#fff'),
              null == t.textStroke && ((t.textStroke = o), null == t.textStrokeWidth && (t.textStrokeWidth = 2)))
            : null != o && ((i = { textFill: null }), (t.textFill = o)),
            i && (t.insideRollback = i);
        }
      }
      function et(t) {
        var e = t.insideRollback;
        e &&
          ((t.textFill = e.textFill),
          (t.textStroke = e.textStroke),
          (t.textStrokeWidth = e.textStrokeWidth),
          (t.insideRollback = null));
      }
      function it(t, e, i, r, n, o) {
        if (('function' == typeof n && ((o = n), (n = null)), r && r.isAnimationEnabled())) {
          var a = t ? 'Update' : '',
            s = r.getShallow('animationDuration' + a),
            l = r.getShallow('animationEasing' + a),
            c = r.getShallow('animationDelay' + a);
          'function' == typeof c && (c = c(n, r.getAnimationDelayParams ? r.getAnimationDelayParams(e, n) : null)),
            'function' == typeof s && (s = s(n)),
            s > 0 ? e.animateTo(i, s, c || 0, l, o, !!o) : (e.stopAnimation(), e.attr(i), o && o());
        } else e.stopAnimation(), e.attr(i), o && o();
      }
      function rt(t, e, i, r, n) {
        it(!0, t, e, i, r, n);
      }
      function nt(t, e, i) {
        return (
          e && !r.isArrayLike(e) && (e = c.getLocalTransform(e)), i && (e = a.invert([], e)), s.applyTransform([], t, e)
        );
      }
      (e.Z2_EMPHASIS_LIFT = O),
        (e.extendShape = function(t) {
          return l.extend(t);
        }),
        (e.extendPath = function(t, e) {
          return n.extendFromString(t, e);
        }),
        (e.makePath = L),
        (e.makeImage = function(t, e, i) {
          var r = new h({
            style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
            onload: function(t) {
              'center' === i && r.setStyle(P(e, { width: t.width, height: t.height }));
            },
          });
          return r;
        }),
        (e.mergePath = E),
        (e.resizePath = B),
        (e.subPixelOptimizeLine = function(t) {
          var e = t.shape,
            i = t.style.lineWidth;
          return (
            M(2 * e.x1) === M(2 * e.x2) && (e.x1 = e.x2 = R(e.x1, i, !0)),
            M(2 * e.y1) === M(2 * e.y2) && (e.y1 = e.y2 = R(e.y1, i, !0)),
            t
          );
        }),
        (e.subPixelOptimizeRect = function(t) {
          var e = t.shape,
            i = t.style.lineWidth,
            r = e.x,
            n = e.y,
            o = e.width,
            a = e.height;
          return (
            (e.x = R(e.x, i, !0)),
            (e.y = R(e.y, i, !0)),
            (e.width = Math.max(R(r + o, i, !1) - e.x, 0 === o ? 0 : 1)),
            (e.height = Math.max(R(n + a, i, !1) - e.y, 0 === a ? 0 : 1)),
            t
          );
        }),
        (e.subPixelOptimize = R),
        (e.setElementHoverStyle = U),
        (e.isInEmphasis = function(t) {
          return t && t.__isEmphasisEntered;
        }),
        (e.setHoverStyle = function(t, e, i) {
          t.isGroup
            ? t.traverse(function(t) {
                !t.isGroup && U(t, t.hoverStyle || e);
              })
            : U(t, t.hoverStyle || e),
            K(t, i);
        }),
        (e.setAsHoverStyleTrigger = K),
        (e.setLabelStyle = function(t, e, i, n, o, a, s) {
          var l,
            c = (o = o || I).labelFetcher,
            h = o.labelDataIndex,
            u = o.labelDimIndex,
            d = i.getShallow('show'),
            f = n.getShallow('show');
          (d || f) &&
            (c && (l = c.getFormattedLabel(h, 'normal', null, u)),
            null == l && (l = r.isFunction(o.defaultText) ? o.defaultText(h, o) : o.defaultText));
          var p = d ? l : null,
            g = f ? r.retrieve2(c ? c.getFormattedLabel(h, 'emphasis', null, u) : null, l) : null;
          (null == p && null == g) || (Q(t, i, a, o), Q(e, n, s, o, !0)), (t.text = p), (e.text = g);
        }),
        (e.setTextStyle = Q),
        (e.setText = function(t, e, i) {
          var r,
            n = { isRectText: !0 };
          !1 === i ? (r = !0) : (n.autoColor = i), Z(t, e, n, r);
        }),
        (e.getFont = function(t, e) {
          var i = e || e.getModel('textStyle');
          return r.trim(
            [
              t.fontStyle || (i && i.getShallow('fontStyle')) || '',
              t.fontWeight || (i && i.getShallow('fontWeight')) || '',
              (t.fontSize || (i && i.getShallow('fontSize')) || 12) + 'px',
              t.fontFamily || (i && i.getShallow('fontFamily')) || 'sans-serif',
            ].join(' '),
          );
        }),
        (e.updateProps = rt),
        (e.initProps = function(t, e, i, r, n) {
          it(!1, t, e, i, r, n);
        }),
        (e.getTransform = function(t, e) {
          for (var i = a.identity([]); t && t !== e; ) a.mul(i, t.getLocalTransform(), i), (t = t.parent);
          return i;
        }),
        (e.applyTransform = nt),
        (e.transformDirection = function(t, e, i) {
          var r = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs((2 * e[4]) / e[0]),
            n = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs((2 * e[4]) / e[2]),
            o = ['left' === t ? -r : 'right' === t ? r : 0, 'top' === t ? -n : 'bottom' === t ? n : 0];
          return (
            (o = nt(o, e, i)),
            Math.abs(o[0]) > Math.abs(o[1]) ? (o[0] > 0 ? 'right' : 'left') : o[1] > 0 ? 'bottom' : 'top'
          );
        }),
        (e.groupTransition = function(t, e, i, n) {
          if (t && e) {
            var o,
              a =
                ((o = {}),
                t.traverse(function(t) {
                  !t.isGroup && t.anid && (o[t.anid] = t);
                }),
                o);
            e.traverse(function(t) {
              if (!t.isGroup && t.anid) {
                var e = a[t.anid];
                if (e) {
                  var r = l(t);
                  t.attr(l(e)), rt(t, r, i, t.dataIndex);
                }
              }
            });
          }
          function l(t) {
            var e = { position: s.clone(t.position), rotation: t.rotation };
            return t.shape && (e.shape = r.extend({}, t.shape)), e;
          }
        }),
        (e.clipPointsByRect = function(t, e) {
          return r.map(t, function(t) {
            var i = t[0];
            (i = A(i, e.x)), (i = D(i, e.x + e.width));
            var r = t[1];
            return (r = A(r, e.y)), [i, (r = D(r, e.y + e.height))];
          });
        }),
        (e.clipRectByRect = function(t, e) {
          var i = A(t.x, e.x),
            r = D(t.x + t.width, e.x + e.width),
            n = A(t.y, e.y),
            o = D(t.y + t.height, e.y + e.height);
          if (r >= i && o >= n) return { x: i, y: n, width: r - i, height: o - n };
        }),
        (e.createIcon = function(t, e, i) {
          var n = ((e = r.extend({ rectHover: !0 }, e)).style = { strokeNoScale: !0 });
          if (((i = i || { x: -1, y: -1, width: 2, height: 2 }), t))
            return 0 === t.indexOf('image://')
              ? ((n.image = t.slice(8)), r.defaults(n, i), new h(e))
              : L(t.replace('path://', ''), e, i, 'center');
        });
    },
    'JuEJ': function(t, e, i) {
      var r = i('bYtY'),
        n = i('4NO4'),
        o = r.each,
        a = r.isObject,
        s = ['areaStyle', 'lineStyle', 'nodeStyle', 'linkStyle', 'chordStyle', 'label', 'labelLine'];
      function l(t) {
        var e = t && t.itemStyle;
        if (e)
          for (var i = 0, n = s.length; i < n; i++) {
            var o = s[i],
              a = e.normal,
              l = e.emphasis;
            a &&
              a[o] &&
              ((t[o] = t[o] || {}), t[o].normal ? r.merge(t[o].normal, a[o]) : (t[o].normal = a[o]), (a[o] = null)),
              l &&
                l[o] &&
                ((t[o] = t[o] || {}),
                t[o].emphasis ? r.merge(t[o].emphasis, l[o]) : (t[o].emphasis = l[o]),
                (l[o] = null));
          }
      }
      function c(t, e, i) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
          var n = t[e].normal,
            o = t[e].emphasis;
          n && (i ? ((t[e].normal = t[e].emphasis = null), r.defaults(t[e], n)) : (t[e] = n)),
            o && ((t.emphasis = t.emphasis || {}), (t.emphasis[e] = o));
        }
      }
      function h(t) {
        c(t, 'itemStyle'),
          c(t, 'lineStyle'),
          c(t, 'areaStyle'),
          c(t, 'label'),
          c(t, 'labelLine'),
          c(t, 'upperLabel'),
          c(t, 'edgeLabel');
      }
      function u(t, e) {
        var i = a(t) && t[e],
          r = a(i) && i.textStyle;
        if (r)
          for (var o = 0, s = n.TEXT_STYLE_OPTIONS.length; o < s; o++)
            r.hasOwnProperty((e = n.TEXT_STYLE_OPTIONS[o])) && (i[e] = r[e]);
      }
      function d(t) {
        t && (h(t), u(t, 'label'), t.emphasis && u(t.emphasis, 'label'));
      }
      function f(t) {
        return r.isArray(t) ? t : t ? [t] : [];
      }
      function p(t) {
        return (r.isArray(t) ? t[0] : t) || {};
      }
      t.exports = function(t, e) {
        o(f(t.series), function(t) {
          a(t) &&
            (function(t) {
              if (a(t)) {
                l(t),
                  h(t),
                  u(t, 'label'),
                  u(t, 'upperLabel'),
                  u(t, 'edgeLabel'),
                  t.emphasis && (u(t.emphasis, 'label'), u(t.emphasis, 'upperLabel'), u(t.emphasis, 'edgeLabel')),
                  (i = t.markPoint) && (l(i), d(i)),
                  (n = t.markLine) && (l(n), d(n));
                var e = t.markArea;
                e && d(e);
                var i,
                  n,
                  o = t.data;
                if ('graph' === t.type) {
                  o = o || t.nodes;
                  var s = t.links || t.edges;
                  if (s && !r.isTypedArray(s)) for (var f = 0; f < s.length; f++) d(s[f]);
                  r.each(t.categories, function(t) {
                    h(t);
                  });
                }
                if (o && !r.isTypedArray(o)) for (f = 0; f < o.length; f++) d(o[f]);
                if ((i = t.markPoint) && i.data) {
                  var p = i.data;
                  for (f = 0; f < p.length; f++) d(p[f]);
                }
                if ((n = t.markLine) && n.data) {
                  var g = n.data;
                  for (f = 0; f < g.length; f++) r.isArray(g[f]) ? (d(g[f][0]), d(g[f][1])) : d(g[f]);
                }
                'gauge' === t.type
                  ? (u(t, 'axisLabel'), u(t, 'title'), u(t, 'detail'))
                  : 'treemap' === t.type
                  ? (c(t.breadcrumb, 'itemStyle'),
                    r.each(t.levels, function(t) {
                      h(t);
                    }))
                  : 'tree' === t.type && h(t.leaves);
              }
            })(t);
        });
        var i = ['xAxis', 'yAxis', 'radiusAxis', 'angleAxis', 'singleAxis', 'parallelAxis', 'radar'];
        e && i.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'),
          o(i, function(e) {
            o(f(t[e]), function(t) {
              t && (u(t, 'axisLabel'), u(t.axisPointer, 'label'));
            });
          }),
          o(f(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            u(e, 'axisLabel'), u(e && e.axisPointer, 'label');
          }),
          o(f(t.calendar), function(t) {
            c(t, 'itemStyle'), u(t, 'dayLabel'), u(t, 'monthLabel'), u(t, 'yearLabel');
          }),
          o(f(t.radar), function(t) {
            u(t, 'name');
          }),
          o(f(t.geo), function(t) {
            a(t) &&
              (d(t),
              o(f(t.regions), function(t) {
                d(t);
              }));
          }),
          o(f(t.timeline), function(t) {
            d(t), c(t, 'label'), c(t, 'itemStyle'), c(t, 'controlStyle', !0);
            var e = t.data;
            r.isArray(e) &&
              r.each(e, function(t) {
                r.isObject(t) && (c(t, 'label'), c(t, 'itemStyle'));
              });
          }),
          o(f(t.toolbox), function(t) {
            c(t, 'iconStyle'),
              o(t.feature, function(t) {
                c(t, 'iconStyle');
              });
          }),
          u(p(t.axisPointer), 'label'),
          u(p(t.tooltip).axisPointer, 'label');
      };
    },
    'K2GJ': function(t, e, i) {
      var r = i('fW2E'),
        n = i('gut8').ContextCachedBy,
        o = [
          ['shadowBlur', 0],
          ['shadowOffsetX', 0],
          ['shadowOffsetY', 0],
          ['shadowColor', '#000'],
          ['lineCap', 'butt'],
          ['lineJoin', 'miter'],
          ['miterLimit', 10],
        ],
        a = function(t) {
          this.extendFrom(t, !1);
        };
      function s(t, e, i) {
        var r = null == e.x ? 0 : e.x,
          n = null == e.x2 ? 1 : e.x2,
          o = null == e.y ? 0 : e.y,
          a = null == e.y2 ? 0 : e.y2;
        return (
          e.global ||
            ((r = r * i.width + i.x), (n = n * i.width + i.x), (o = o * i.height + i.y), (a = a * i.height + i.y)),
          (r = isNaN(r) ? 0 : r),
          (n = isNaN(n) ? 1 : n),
          (o = isNaN(o) ? 0 : o),
          (a = isNaN(a) ? 0 : a),
          t.createLinearGradient(r, o, n, a)
        );
      }
      function l(t, e, i) {
        var r = i.width,
          n = i.height,
          o = Math.min(r, n),
          a = null == e.x ? 0.5 : e.x,
          s = null == e.y ? 0.5 : e.y,
          l = null == e.r ? 0.5 : e.r;
        return e.global || ((a = a * r + i.x), (s = s * n + i.y), (l *= o)), t.createRadialGradient(a, s, 0, a, s, l);
      }
      for (
        var c = (a.prototype = {
            constructor: a,
            fill: '#000',
            stroke: null,
            opacity: 1,
            fillOpacity: null,
            strokeOpacity: null,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            font: null,
            textFont: null,
            fontStyle: null,
            fontWeight: null,
            fontSize: null,
            fontFamily: null,
            textTag: null,
            textFill: '#000',
            textStroke: null,
            textWidth: null,
            textHeight: null,
            textStrokeWidth: 0,
            textLineHeight: null,
            textPosition: 'inside',
            textRect: null,
            textOffset: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowColor: 'transparent',
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textBoxShadowColor: 'transparent',
            textBoxShadowBlur: 0,
            textBoxShadowOffsetX: 0,
            textBoxShadowOffsetY: 0,
            transformText: !1,
            textRotation: 0,
            textOrigin: null,
            textBackgroundColor: null,
            textBorderColor: null,
            textBorderWidth: 0,
            textBorderRadius: 0,
            textPadding: null,
            rich: null,
            truncate: null,
            blend: null,
            bind: function(t, e, i) {
              var a = i && i.style,
                s = !a || t.__attrCachedBy !== n.STYLE_BIND;
              t.__attrCachedBy = n.STYLE_BIND;
              for (var l = 0; l < o.length; l++) {
                var c = o[l],
                  h = c[0];
                (s || this[h] !== a[h]) && (t[h] = r(t, h, this[h] || c[1]));
              }
              (s || this.fill !== a.fill) && (t.fillStyle = this.fill),
                (s || this.stroke !== a.stroke) && (t.strokeStyle = this.stroke),
                (s || this.opacity !== a.opacity) && (t.globalAlpha = null == this.opacity ? 1 : this.opacity),
                (s || this.blend !== a.blend) && (t.globalCompositeOperation = this.blend || 'source-over'),
                this.hasStroke() &&
                  (t.lineWidth = this.lineWidth / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1));
            },
            hasFill: function() {
              var t = this.fill;
              return null != t && 'none' !== t;
            },
            hasStroke: function() {
              var t = this.stroke;
              return null != t && 'none' !== t && this.lineWidth > 0;
            },
            extendFrom: function(t, e) {
              if (t)
                for (var i in t)
                  !t.hasOwnProperty(i) ||
                    (!0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i])) ||
                    (this[i] = t[i]);
            },
            set: function(t, e) {
              'string' == typeof t ? (this[t] = e) : this.extendFrom(t, !0);
            },
            clone: function() {
              var t = new this.constructor();
              return t.extendFrom(this, !0), t;
            },
            getGradient: function(t, e, i) {
              for (var r = ('radial' === e.type ? l : s)(t, e, i), n = e.colorStops, o = 0; o < n.length; o++)
                r.addColorStop(n[o].offset, n[o].color);
              return r;
            },
          }),
          h = 0;
        h < o.length;
        h++
      ) {
        var u = o[h];
        u[0] in c || (c[u[0]] = u[1]);
      }
      (a.getGradient = c.getGradient), (t.exports = a);
    },
    'KCsZ': function(t, e, i) {
      var r = i('bYtY');
      t.exports = function(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function(e, i, n) {
          for (var o = {}, a = 0; a < t.length; a++) {
            var s = t[a][1];
            if (!((i && r.indexOf(i, s) >= 0) || (n && r.indexOf(n, s) < 0))) {
              var l = e.getShallow(s);
              null != l && (o[t[a][0]] = l);
            }
          }
          return o;
        };
      };
    },
    'KQIT': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return a;
      });
      var r = i('UUrH'),
        n = i('fXoL'),
        o = i('em/+'),
        a = (function() {
          var t = (function() {
            function t(e) {
              _classCallCheck(this, t), (this._optionsService = e), (this._state = {}), (this.config = {});
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnChanges',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._removeOption();
                  },
                },
                {
                  key: '_setOptions',
                  value: function() {
                    var t = Object(r.a)(
                      this._state,
                      {
                        id: this.id,
                        source: this.source,
                        dimensions: this.dimensions,
                        sourceHeader: this.sourceHeader,
                      },
                      this.config ? this.config : {},
                    );
                    this._optionsService.setOption('dataset', t);
                  },
                },
                {
                  key: '_removeOption',
                  value: function() {
                    this._optionsService.clearOption('dataset');
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(n.Sb(o.b));
            }),
            (t.ɵcmp = n.Mb({
              type: t,
              selectors: [['td-chart-dataset']],
              inputs: {
                id: 'id',
                config: 'config',
                source: 'source',
                dimensions: 'dimensions',
                sourceHeader: 'sourceHeader',
              },
              features: [n.Bb()],
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'Kagy': function(t, e) {
      t.exports = {
        toolbox: {
          brush: {
            title: {
              rect: '\u77e9\u5f62\u9009\u62e9',
              polygon: '\u5708\u9009',
              lineX: '\u6a2a\u5411\u9009\u62e9',
              lineY: '\u7eb5\u5411\u9009\u62e9',
              keep: '\u4fdd\u6301\u9009\u62e9',
              clear: '\u6e05\u9664\u9009\u62e9',
            },
          },
          dataView: {
            title: '\u6570\u636e\u89c6\u56fe',
            lang: ['\u6570\u636e\u89c6\u56fe', '\u5173\u95ed', '\u5237\u65b0'],
          },
          dataZoom: { title: { zoom: '\u533a\u57df\u7f29\u653e', back: '\u533a\u57df\u7f29\u653e\u8fd8\u539f' } },
          magicType: {
            title: {
              line: '\u5207\u6362\u4e3a\u6298\u7ebf\u56fe',
              bar: '\u5207\u6362\u4e3a\u67f1\u72b6\u56fe',
              stack: '\u5207\u6362\u4e3a\u5806\u53e0',
              tiled: '\u5207\u6362\u4e3a\u5e73\u94fa',
            },
          },
          restore: { title: '\u8fd8\u539f' },
          saveAsImage: {
            title: '\u4fdd\u5b58\u4e3a\u56fe\u7247',
            lang: ['\u53f3\u952e\u53e6\u5b58\u4e3a\u56fe\u7247'],
          },
        },
        series: {
          typeNames: {
            pie: '\u997c\u56fe',
            bar: '\u67f1\u72b6\u56fe',
            line: '\u6298\u7ebf\u56fe',
            scatter: '\u6563\u70b9\u56fe',
            effectScatter: '\u6d9f\u6f2a\u6563\u70b9\u56fe',
            radar: '\u96f7\u8fbe\u56fe',
            tree: '\u6811\u56fe',
            treemap: '\u77e9\u5f62\u6811\u56fe',
            boxplot: '\u7bb1\u578b\u56fe',
            candlestick: 'K\u7ebf\u56fe',
            k: 'K\u7ebf\u56fe',
            heatmap: '\u70ed\u529b\u56fe',
            map: '\u5730\u56fe',
            parallel: '\u5e73\u884c\u5750\u6807\u56fe',
            lines: '\u7ebf\u56fe',
            graph: '\u5173\u7cfb\u56fe',
            sankey: '\u6851\u57fa\u56fe',
            funnel: '\u6f0f\u6597\u56fe',
            gauge: '\u4eea\u8868\u76d8\u56fe',
            pictorialBar: '\u8c61\u5f62\u67f1\u56fe',
            themeRiver: '\u4e3b\u9898\u6cb3\u6d41\u56fe',
            sunburst: '\u65ed\u65e5\u56fe',
          },
        },
        aria: {
          general: {
            withTitle: '\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u201c{title}\u201d\u7684\u56fe\u8868\u3002',
            withoutTitle: '\u8fd9\u662f\u4e00\u4e2a\u56fe\u8868\uff0c',
          },
          series: {
            single: {
              prefix: '',
              withName: '\u56fe\u8868\u7c7b\u578b\u662f{seriesType}\uff0c\u8868\u793a{seriesName}\u3002',
              withoutName: '\u56fe\u8868\u7c7b\u578b\u662f{seriesType}\u3002',
            },
            multiple: {
              prefix: '\u5b83\u7531{seriesCount}\u4e2a\u56fe\u8868\u7cfb\u5217\u7ec4\u6210\u3002',
              withName:
                '\u7b2c{seriesId}\u4e2a\u7cfb\u5217\u662f\u4e00\u4e2a\u8868\u793a{seriesName}\u7684{seriesType}\uff0c',
              withoutName: '\u7b2c{seriesId}\u4e2a\u7cfb\u5217\u662f\u4e00\u4e2a{seriesType}\uff0c',
              separator: { middle: '\uff1b', end: '\u3002' },
            },
          },
          data: {
            allData: '\u5176\u6570\u636e\u662f\u2014\u2014',
            partialData: '\u5176\u4e2d\uff0c\u524d{displayCnt}\u9879\u662f\u2014\u2014',
            withName: '{name}\u7684\u6570\u636e\u662f{value}',
            withoutName: '{value}',
            separator: { middle: '\uff0c', end: '' },
          },
        },
      };
    },
    'KxfA': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = r.extend,
        o = r.each,
        a = r.isObject,
        s = i('4NO4'),
        l = s.getDataItemValue,
        c = s.isDataItemOption,
        h = i('OELB').parseDate,
        u = i('7G+c'),
        d = i('k9D9'),
        f = d.SOURCE_FORMAT_TYPED_ARRAY,
        p = d.SOURCE_FORMAT_ARRAY_ROWS,
        g = d.SOURCE_FORMAT_ORIGINAL,
        m = d.SOURCE_FORMAT_OBJECT_ROWS;
      function y(t, e) {
        u.isInstance(t) || (t = u.seriesDataToSource(t)), (this._source = t);
        var i = (this._data = t.data),
          r = t.sourceFormat;
        r === f && ((this._offset = 0), (this._dimSize = e), (this._data = i)),
          n(this, x[r === p ? r + '_' + t.seriesLayoutBy : r]);
      }
      var v = y.prototype;
      (v.pure = !1),
        (v.persistent = !0),
        (v.getSource = function() {
          return this._source;
        });
      var x = {
        arrayRows_column: {
          pure: !0,
          count: function() {
            return Math.max(0, this._data.length - this._source.startIndex);
          },
          getItem: function(t) {
            return this._data[t + this._source.startIndex];
          },
          appendData: S,
        },
        arrayRows_row: {
          pure: !0,
          count: function() {
            var t = this._data[0];
            return t ? Math.max(0, t.length - this._source.startIndex) : 0;
          },
          getItem: function(t) {
            t += this._source.startIndex;
            for (var e = [], i = this._data, r = 0; r < i.length; r++) {
              var n = i[r];
              e.push(n ? n[t] : null);
            }
            return e;
          },
          appendData: function() {
            throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
          },
        },
        objectRows: { pure: !0, count: b, getItem: _, appendData: S },
        keyedColumns: {
          pure: !0,
          count: function() {
            var t = this._data[this._source.dimensionsDefine[0].name];
            return t ? t.length : 0;
          },
          getItem: function(t) {
            for (var e = [], i = this._source.dimensionsDefine, r = 0; r < i.length; r++) {
              var n = this._data[i[r].name];
              e.push(n ? n[t] : null);
            }
            return e;
          },
          appendData: function(t) {
            var e = this._data;
            o(t, function(t, i) {
              for (var r = e[i] || (e[i] = []), n = 0; n < (t || []).length; n++) r.push(t[n]);
            });
          },
        },
        original: { count: b, getItem: _, appendData: S },
        typedArray: {
          persistent: !1,
          pure: !0,
          count: function() {
            return this._data ? this._data.length / this._dimSize : 0;
          },
          getItem: function(t, e) {
            e = e || [];
            for (var i = this._dimSize * (t -= this._offset), r = 0; r < this._dimSize; r++) e[r] = this._data[i + r];
            return e;
          },
          appendData: function(t) {
            this._data = t;
          },
          clean: function() {
            (this._offset += this.count()), (this._data = null);
          },
        },
      };
      function b() {
        return this._data.length;
      }
      function _(t) {
        return this._data[t];
      }
      function S(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e]);
      }
      var w = {
        arrayRows: C,
        objectRows: function(t, e, i, r) {
          return null != i ? t[r] : t;
        },
        keyedColumns: C,
        original: function(t, e, i, r) {
          var n = l(t);
          return null != i && n instanceof Array ? n[i] : n;
        },
        typedArray: C,
      };
      function C(t, e, i, r) {
        return null != i ? t[i] : t;
      }
      var T = {
        arrayRows: k,
        objectRows: function(t, e, i, r) {
          return M(t[e], this._dimensionInfos[e]);
        },
        keyedColumns: k,
        original: function(t, e, i, r) {
          var n = t && (null == t.value ? t : t.value);
          return (
            !this._rawData.pure && c(t) && (this.hasItemOption = !0),
            M(n instanceof Array ? n[r] : n, this._dimensionInfos[e])
          );
        },
        typedArray: function(t, e, i, r) {
          return t[r];
        },
      };
      function k(t, e, i, r) {
        return M(t[r], this._dimensionInfos[e]);
      }
      function M(t, e) {
        var i = e && e.type;
        if ('ordinal' === i) {
          var r = e && e.ordinalMeta;
          return r ? r.parseAndCollect(t) : t;
        }
        return (
          'time' === i && 'number' != typeof t && null != t && '-' !== t && (t = +h(t)),
          null == t || '' === t ? NaN : +t
        );
      }
      (e.DefaultDataProvider = y),
        (e.defaultDimValueGetters = T),
        (e.retrieveRawValue = function(t, e, i) {
          if (t) {
            var r = t.getRawDataItem(e);
            if (null != r) {
              var n,
                o,
                a = t.getProvider().getSource().sourceFormat,
                s = t.getDimensionInfo(i);
              return s && ((n = s.name), (o = s.index)), w[a](r, e, o, n);
            }
          }
        }),
        (e.retrieveRawAttr = function(t, e, i) {
          if (t) {
            var r = t.getProvider().getSource().sourceFormat;
            if (r === g || r === m) {
              var n = t.getRawDataItem(e);
              return r !== g || a(n) || (n = null), n ? n[i] : void 0;
            }
          }
        });
    },
    'L0Ub': function(t, e, i) {
      var r = i('bYtY'),
        n = r.each,
        o = r.createHashMap,
        a = (i('Tghj'), o(['tooltip', 'label', 'itemName', 'itemId', 'seriesName']));
      (e.OTHER_DIMENSIONS = a),
        (e.summarizeDimensions = function(t) {
          var e = {},
            i = (e.encode = {}),
            r = o(),
            s = [],
            l = [];
          n(t.dimensions, function(e) {
            var n,
              o = t.getDimensionInfo(e),
              c = o.coordDim;
            if (c) {
              var h = i[c];
              i.hasOwnProperty(c) || (h = i[c] = []),
                (h[o.coordDimIndex] = e),
                o.isExtraCoord || (r.set(c, 1), 'ordinal' !== (n = o.type) && 'time' !== n && (s[0] = e)),
                o.defaultTooltip && l.push(e);
            }
            a.each(function(t, e) {
              var r = i[e];
              i.hasOwnProperty(e) || (r = i[e] = []);
              var n = o.otherDims[e];
              null != n && !1 !== n && (r[n] = o.name);
            });
          });
          var c = [],
            h = {};
          r.each(function(t, e) {
            var r = i[e];
            (h[e] = r[0]), (c = c.concat(r));
          }),
            (e.dataDimsOnCoord = c),
            (e.encodeFirstDimNotExtra = h);
          var u = i.label;
          u && u.length && (s = u.slice());
          var d = i.tooltip;
          return (
            d && d.length ? (l = d.slice()) : l.length || (l = s.slice()),
            (i.defaultedLabel = s),
            (i.defaultedTooltip = l),
            e
          );
        }),
        (e.getDimensionTypeByAxis = function(t) {
          return 'category' === t ? 'ordinal' : 'time' === t ? 'time' : 'float';
        });
    },
    'LPTA': function(t, e) {
      var i = 1;
      'undefined' != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
      var r = i;
      (e.debugMode = 0), (e.devicePixelRatio = r);
    },
    'MEGo': function(t, e, i) {
      var r = i('4fz+'),
        n = i('Dagg'),
        o = i('dqUG'),
        a = i('2fw6'),
        s = i('x6Kt'),
        l = i('rmlV'),
        c = i('yxFR'),
        h = i('y+Vt'),
        u = i('h7HQ'),
        d = i('1Jh7'),
        f = i('SKnc'),
        p = i('K2GJ'),
        g = i('Fofx'),
        m = i('NC18').createFromString,
        y = i('bYtY'),
        v = y.isString,
        x = y.extend,
        b = y.defaults,
        _ = y.trim,
        S = y.each,
        w = /[\s,]+/;
      function C(t) {
        for (
          v(t) && (t = new DOMParser().parseFromString(t, 'text/xml')), 9 === t.nodeType && (t = t.firstChild);
          'svg' !== t.nodeName.toLowerCase() || 1 !== t.nodeType;

        )
          t = t.nextSibling;
        return t;
      }
      function T() {
        (this._defs = {}), (this._root = null), (this._isDefine = !1), (this._isText = !1);
      }
      (T.prototype.parse = function(t, e) {
        e = e || {};
        var i = C(t);
        if (!i) throw new Error('Illegal svg');
        var n = new r();
        this._root = n;
        var o = i.getAttribute('viewBox') || '',
          a = parseFloat(i.getAttribute('width') || e.width),
          l = parseFloat(i.getAttribute('height') || e.height);
        isNaN(a) && (a = null), isNaN(l) && (l = null), O(i, n, null, !0);
        for (var c, h, u = i.firstChild; u; ) this._parseNode(u, n), (u = u.nextSibling);
        if (o) {
          var d = _(o).split(w);
          d.length >= 4 &&
            (c = {
              x: parseFloat(d[0] || 0),
              y: parseFloat(d[1] || 0),
              width: parseFloat(d[2]),
              height: parseFloat(d[3]),
            });
        }
        if (c && null != a && null != l && ((h = R(c, a, l)), !e.ignoreViewBox)) {
          var f = n;
          (n = new r()).add(f), (f.scale = h.scale.slice()), (f.position = h.position.slice());
        }
        return (
          e.ignoreRootClip ||
            null == a ||
            null == l ||
            n.setClipPath(new s({ shape: { x: 0, y: 0, width: a, height: l } })),
          { root: n, width: a, height: l, viewBoxRect: c, viewBoxTransform: h }
        );
      }),
        (T.prototype._parseNode = function(t, e) {
          var i,
            r,
            n = t.nodeName.toLowerCase();
          if (('defs' === n ? (this._isDefine = !0) : 'text' === n && (this._isText = !0), this._isDefine)) {
            if ((r = M[n])) {
              var o = r.call(this, t),
                a = t.getAttribute('id');
              a && (this._defs[a] = o);
            }
          } else (r = k[n]) && ((i = r.call(this, t, e)), e.add(i));
          for (var s = t.firstChild; s; )
            1 === s.nodeType && this._parseNode(s, i),
              3 === s.nodeType && this._isText && this._parseText(s, i),
              (s = s.nextSibling);
          'defs' === n ? (this._isDefine = !1) : 'text' === n && (this._isText = !1);
        }),
        (T.prototype._parseText = function(t, e) {
          if (1 === t.nodeType) {
            var i = t.getAttribute('dx') || 0,
              r = t.getAttribute('dy') || 0;
            (this._textX += parseFloat(i)), (this._textY += parseFloat(r));
          }
          var n = new o({
            style: { text: t.textContent, transformText: !0 },
            position: [this._textX || 0, this._textY || 0],
          });
          A(e, n), O(t, n, this._defs);
          var a = n.style.fontSize;
          a &&
            a < 9 &&
            ((n.style.fontSize = 9), (n.scale = n.scale || [1, 1]), (n.scale[0] *= a / 9), (n.scale[1] *= a / 9));
          var s = n.getBoundingRect();
          return (this._textX += s.width), e.add(n), n;
        });
      var k = {
          g: function(t, e) {
            var i = new r();
            return A(e, i), O(t, i, this._defs), i;
          },
          rect: function(t, e) {
            var i = new s();
            return (
              A(e, i),
              O(t, i, this._defs),
              i.setShape({
                x: parseFloat(t.getAttribute('x') || 0),
                y: parseFloat(t.getAttribute('y') || 0),
                width: parseFloat(t.getAttribute('width') || 0),
                height: parseFloat(t.getAttribute('height') || 0),
              }),
              i
            );
          },
          circle: function(t, e) {
            var i = new a();
            return (
              A(e, i),
              O(t, i, this._defs),
              i.setShape({
                cx: parseFloat(t.getAttribute('cx') || 0),
                cy: parseFloat(t.getAttribute('cy') || 0),
                r: parseFloat(t.getAttribute('r') || 0),
              }),
              i
            );
          },
          line: function(t, e) {
            var i = new c();
            return (
              A(e, i),
              O(t, i, this._defs),
              i.setShape({
                x1: parseFloat(t.getAttribute('x1') || 0),
                y1: parseFloat(t.getAttribute('y1') || 0),
                x2: parseFloat(t.getAttribute('x2') || 0),
                y2: parseFloat(t.getAttribute('y2') || 0),
              }),
              i
            );
          },
          ellipse: function(t, e) {
            var i = new l();
            return (
              A(e, i),
              O(t, i, this._defs),
              i.setShape({
                cx: parseFloat(t.getAttribute('cx') || 0),
                cy: parseFloat(t.getAttribute('cy') || 0),
                rx: parseFloat(t.getAttribute('rx') || 0),
                ry: parseFloat(t.getAttribute('ry') || 0),
              }),
              i
            );
          },
          polygon: function(t, e) {
            var i = t.getAttribute('points');
            i && (i = D(i));
            var r = new u({ shape: { points: i || [] } });
            return A(e, r), O(t, r, this._defs), r;
          },
          polyline: function(t, e) {
            var i = new h();
            A(e, i), O(t, i, this._defs);
            var r = t.getAttribute('points');
            return r && (r = D(r)), new d({ shape: { points: r || [] } });
          },
          image: function(t, e) {
            var i = new n();
            return (
              A(e, i),
              O(t, i, this._defs),
              i.setStyle({
                image: t.getAttribute('xlink:href'),
                x: t.getAttribute('x'),
                y: t.getAttribute('y'),
                width: t.getAttribute('width'),
                height: t.getAttribute('height'),
              }),
              i
            );
          },
          text: function(t, e) {
            var i = t.getAttribute('x') || 0,
              n = t.getAttribute('y') || 0,
              o = t.getAttribute('dx') || 0,
              a = t.getAttribute('dy') || 0;
            (this._textX = parseFloat(i) + parseFloat(o)), (this._textY = parseFloat(n) + parseFloat(a));
            var s = new r();
            return A(e, s), O(t, s, this._defs), s;
          },
          tspan: function(t, e) {
            var i = t.getAttribute('x'),
              n = t.getAttribute('y');
            null != i && (this._textX = parseFloat(i)), null != n && (this._textY = parseFloat(n));
            var o = t.getAttribute('dx') || 0,
              a = t.getAttribute('dy') || 0,
              s = new r();
            return A(e, s), O(t, s, this._defs), (this._textX += o), (this._textY += a), s;
          },
          path: function(t, e) {
            var i = t.getAttribute('d') || '',
              r = m(i);
            return A(e, r), O(t, r, this._defs), r;
          },
        },
        M = {
          lineargradient: function(t) {
            var e = parseInt(t.getAttribute('x1') || 0, 10),
              i = parseInt(t.getAttribute('y1') || 0, 10),
              r = parseInt(t.getAttribute('x2') || 10, 10),
              n = parseInt(t.getAttribute('y2') || 0, 10),
              o = new f(e, i, r, n);
            return (
              (function(t, e) {
                for (var i = t.firstChild; i; ) {
                  if (1 === i.nodeType) {
                    var r = i.getAttribute('offset');
                    r = r.indexOf('%') > 0 ? parseInt(r, 10) / 100 : r ? parseFloat(r) : 0;
                    var n = i.getAttribute('stop-color') || '#000000';
                    e.addColorStop(r, n);
                  }
                  i = i.nextSibling;
                }
              })(t, o),
              o
            );
          },
          radialgradient: function(t) {},
        };
      function A(t, e) {
        t &&
          t.__inheritedStyle &&
          (e.__inheritedStyle || (e.__inheritedStyle = {}), b(e.__inheritedStyle, t.__inheritedStyle));
      }
      function D(t) {
        for (var e = _(t).split(w), i = [], r = 0; r < e.length; r += 2) {
          var n = parseFloat(e[r]),
            o = parseFloat(e[r + 1]);
          i.push([n, o]);
        }
        return i;
      }
      var I = {
        'fill': 'fill',
        'stroke': 'stroke',
        'stroke-width': 'lineWidth',
        'opacity': 'opacity',
        'fill-opacity': 'fillOpacity',
        'stroke-opacity': 'strokeOpacity',
        'stroke-dasharray': 'lineDash',
        'stroke-dashoffset': 'lineDashOffset',
        'stroke-linecap': 'lineCap',
        'stroke-linejoin': 'lineJoin',
        'stroke-miterlimit': 'miterLimit',
        'font-family': 'fontFamily',
        'font-size': 'fontSize',
        'font-style': 'fontStyle',
        'font-weight': 'fontWeight',
        'text-align': 'textAlign',
        'alignment-baseline': 'textBaseline',
      };
      function O(t, e, i, r) {
        var n = e.__inheritedStyle || {},
          o = 'text' === e.type;
        if (
          1 === t.nodeType &&
          ((function(t, e) {
            var i = t.getAttribute('transform');
            if (i) {
              i = i.replace(/,/g, ' ');
              var r = null,
                n = [];
              i.replace(E, function(t, e, i) {
                n.push(e, i);
              });
              for (var o = n.length - 1; o > 0; o -= 2) {
                var a = n[o],
                  s = n[o - 1];
                switch (((r = r || g.create()), s)) {
                  case 'translate':
                    (a = _(a).split(w)), g.translate(r, r, [parseFloat(a[0]), parseFloat(a[1] || 0)]);
                    break;
                  case 'scale':
                    (a = _(a).split(w)), g.scale(r, r, [parseFloat(a[0]), parseFloat(a[1] || a[0])]);
                    break;
                  case 'rotate':
                    (a = _(a).split(w)), g.rotate(r, r, parseFloat(a[0]));
                    break;
                  case 'skew':
                    (a = _(a).split(w)), console.warn('Skew transform is not supported yet');
                    break;
                  case 'matrix':
                    (a = _(a).split(w)),
                      (r[0] = parseFloat(a[0])),
                      (r[1] = parseFloat(a[1])),
                      (r[2] = parseFloat(a[2])),
                      (r[3] = parseFloat(a[3])),
                      (r[4] = parseFloat(a[4])),
                      (r[5] = parseFloat(a[5]));
                }
              }
              e.setLocalTransform(r);
            }
          })(t, e),
          x(
            n,
            (function(t) {
              var e = t.getAttribute('style'),
                i = {};
              if (!e) return i;
              var r,
                n = {};
              for (B.lastIndex = 0; null != (r = B.exec(e)); ) n[r[1]] = r[2];
              for (var o in I) I.hasOwnProperty(o) && null != n[o] && (i[I[o]] = n[o]);
              return i;
            })(t),
          ),
          !r)
        )
          for (var a in I)
            if (I.hasOwnProperty(a)) {
              var s = t.getAttribute(a);
              null != s && (n[I[a]] = s);
            }
        var l = o ? 'textFill' : 'fill',
          c = o ? 'textStroke' : 'stroke';
        e.style = e.style || new p();
        var h = e.style;
        null != n.fill && h.set(l, P(n.fill, i)),
          null != n.stroke && h.set(c, P(n.stroke, i)),
          S(['lineWidth', 'opacity', 'fillOpacity', 'strokeOpacity', 'miterLimit', 'fontSize'], function(t) {
            null != n[t] && h.set('lineWidth' === t && o ? 'textStrokeWidth' : t, parseFloat(n[t]));
          }),
          (n.textBaseline && 'auto' !== n.textBaseline) || (n.textBaseline = 'alphabetic'),
          'alphabetic' === n.textBaseline && (n.textBaseline = 'bottom'),
          'start' === n.textAlign && (n.textAlign = 'left'),
          'end' === n.textAlign && (n.textAlign = 'right'),
          S(
            [
              'lineDashOffset',
              'lineCap',
              'lineJoin',
              'fontWeight',
              'fontFamily',
              'fontStyle',
              'textAlign',
              'textBaseline',
            ],
            function(t) {
              null != n[t] && h.set(t, n[t]);
            },
          ),
          n.lineDash && (e.style.lineDash = _(n.lineDash).split(w)),
          h[c] && 'none' !== h[c] && (e[c] = !0),
          (e.__inheritedStyle = n);
      }
      var L = /url\(\s*#(.*?)\)/;
      function P(t, e) {
        var i = e && t && t.match(L);
        return i ? e[_(i[1])] : t;
      }
      var E = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        B = /([^\s:;]+)\s*:\s*([^:;]+)/g;
      function R(t, e, i) {
        var r = Math.min(e / t.width, i / t.height);
        return { scale: [r, r], position: [-(t.x + t.width / 2) * r + e / 2, -(t.y + t.height / 2) * r + i / 2] };
      }
      (e.parseXML = C),
        (e.makeViewBoxTransform = R),
        (e.parseSVG = function(t, e) {
          return new T().parse(t, e);
        });
    },
    'MKOG': function(t, e, i) {
      var r = i('bYtY'),
        n = i('YH21').Dispatcher,
        o = i('mLcG'),
        a = i('Bq2U'),
        s = function(t) {
          (this.stage = (t = t || {}).stage || {}),
            (this.onframe = t.onframe || function() {}),
            (this._clips = []),
            (this._running = !1),
            (this._paused = !1),
            n.call(this);
        };
      (s.prototype = {
        constructor: s,
        addClip: function(t) {
          this._clips.push(t);
        },
        addAnimator: function(t) {
          t.animation = this;
          for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i]);
        },
        removeClip: function(t) {
          var e = r.indexOf(this._clips, t);
          e >= 0 && this._clips.splice(e, 1);
        },
        removeAnimator: function(t) {
          for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
          t.animation = null;
        },
        _update: function() {
          for (
            var t = new Date().getTime() - this._pausedTime,
              e = t - this._time,
              i = this._clips,
              r = i.length,
              n = [],
              o = [],
              a = 0;
            a < r;
            a++
          ) {
            var s = i[a],
              l = s.step(t, e);
            l && (n.push(l), o.push(s));
          }
          for (a = 0; a < r; ) i[a]._needsRemove ? ((i[a] = i[r - 1]), i.pop(), r--) : a++;
          for (r = n.length, a = 0; a < r; a++) o[a].fire(n[a]);
          (this._time = t), this.onframe(e), this.trigger('frame', e), this.stage.update && this.stage.update();
        },
        _startLoop: function() {
          var t = this;
          (this._running = !0),
            o(function e() {
              t._running && (o(e), !t._paused && t._update());
            });
        },
        start: function() {
          (this._time = new Date().getTime()), (this._pausedTime = 0), this._startLoop();
        },
        stop: function() {
          this._running = !1;
        },
        pause: function() {
          this._paused || ((this._pauseStart = new Date().getTime()), (this._paused = !0));
        },
        resume: function() {
          this._paused && ((this._pausedTime += new Date().getTime() - this._pauseStart), (this._paused = !1));
        },
        clear: function() {
          this._clips = [];
        },
        isFinished: function() {
          return !this._clips.length;
        },
        animate: function(t, e) {
          var i = new a(t, (e = e || {}).loop, e.getter, e.setter);
          return this.addAnimator(i), i;
        },
      }),
        r.mixin(s, n),
        (t.exports = s);
    },
    'MpVW': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return a;
      });
      var r = i('2Vo4'),
        n = i('rDig'),
        o = i('fXoL'),
        a = (function() {
          var t = (function() {
            function t() {
              _classCallCheck(this, t),
                (this.selected = Object(n.e)()[0]),
                (this.selectedSubject = new r.a(this.selected)),
                (this.selected$ = this.selectedSubject.asObservable());
            }
            return (
              _createClass(t, [
                {
                  key: 'select',
                  value: function(t) {
                    (this.selected = t), this.selectedSubject.next(t);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = o.Ob({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t
          );
        })();
    },
    'MwEJ': function(t, e, i) {
      var r = i('bYtY'),
        n = i('YXkt'),
        o = i('sdST'),
        a = i('k9D9').SOURCE_FORMAT_ORIGINAL,
        s = i('L0Ub').getDimensionTypeByAxis,
        l = i('4NO4').getDataItemValue,
        c = i('IDmD'),
        h = i('i38C').getCoordSysDefineBySeries,
        u = i('7G+c'),
        d = i('7hqr').enableDataStack;
      t.exports = function(t, e, i) {
        (i = i || {}), u.isInstance(t) || (t = u.seriesDataToSource(t));
        var f,
          p = e.get('coordinateSystem'),
          g = c.get(p),
          m = h(e);
        m &&
          (f = r.map(m.coordSysDims, function(t) {
            var e = { name: t },
              i = m.axisMap.get(t);
            if (i) {
              var r = i.get('type');
              e.type = s(r);
            }
            return e;
          })),
          f || (f = (g && (g.getDimensionsInfo ? g.getDimensionsInfo() : g.dimensions.slice())) || ['x', 'y']);
        var y,
          v,
          x = o(t, { coordDimensions: f, generateCoord: i.generateCoord });
        m &&
          r.each(x, function(t, e) {
            var i = m.categoryAxisMap.get(t.coordDim);
            i && (null == y && (y = e), (t.ordinalMeta = i.getOrdinalMeta())), null != t.otherDims.itemName && (v = !0);
          }),
          v || null == y || (x[y].otherDims.itemName = 0);
        var b = d(e, x),
          _ = new n(x, e);
        _.setCalculationInfo(b);
        var S =
          null != y &&
          (function(t) {
            if (t.sourceFormat === a) {
              var e = (function(t) {
                for (var e = 0; e < t.length && null == t[e]; ) e++;
                return t[e];
              })(t.data || []);
              return null != e && !r.isArray(l(e));
            }
          })(t)
            ? function(t, e, i, r) {
                return r === y ? i : this.defaultDimValueGetter(t, e, i, r);
              }
            : null;
        return (_.hasItemOption = !1), _.initData(t, null, S), _;
      };
    },
    'NC18': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('IMiH'),
        o = i('7oTu'),
        a = Math.sqrt,
        s = Math.sin,
        l = Math.cos,
        c = Math.PI,
        h = function(t) {
          return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        },
        u = function(t, e) {
          return (t[0] * e[0] + t[1] * e[1]) / (h(t) * h(e));
        },
        d = function(t, e) {
          return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(u(t, e));
        };
      function f(t, e, i, r, n, o, h, f, p, g, m) {
        var y = p * (c / 180),
          v = (l(y) * (t - i)) / 2 + (s(y) * (e - r)) / 2,
          x = (-1 * s(y) * (t - i)) / 2 + (l(y) * (e - r)) / 2,
          b = (v * v) / (h * h) + (x * x) / (f * f);
        b > 1 && ((h *= a(b)), (f *= a(b)));
        var _ =
            (n === o ? -1 : 1) *
              a((h * h * (f * f) - h * h * (x * x) - f * f * (v * v)) / (h * h * (x * x) + f * f * (v * v))) || 0,
          S = (_ * h * x) / f,
          w = (_ * -f * v) / h,
          C = (t + i) / 2 + l(y) * S - s(y) * w,
          T = (e + r) / 2 + s(y) * S + l(y) * w,
          k = d([1, 0], [(v - S) / h, (x - w) / f]),
          M = [(v - S) / h, (x - w) / f],
          A = [(-1 * v - S) / h, (-1 * x - w) / f],
          D = d(M, A);
        u(M, A) <= -1 && (D = c),
          u(M, A) >= 1 && (D = 0),
          0 === o && D > 0 && (D -= 2 * c),
          1 === o && D < 0 && (D += 2 * c),
          m.addData(g, C, T, h, f, k, D, y, o);
      }
      var p = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
        g = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
      function m(t, e) {
        var i = (function(t) {
          if (!t) return new n();
          for (var e, i = 0, r = 0, o = i, a = r, s = new n(), l = n.CMD, c = t.match(p), h = 0; h < c.length; h++) {
            for (var u, d = c[h], m = d.charAt(0), y = d.match(g) || [], v = y.length, x = 0; x < v; x++)
              y[x] = parseFloat(y[x]);
            for (var b = 0; b < v; ) {
              var _,
                S,
                w,
                C,
                T,
                k,
                M,
                A = i,
                D = r;
              switch (m) {
                case 'l':
                  (i += y[b++]), (r += y[b++]), s.addData((u = l.L), i, r);
                  break;
                case 'L':
                  (i = y[b++]), (r = y[b++]), s.addData((u = l.L), i, r);
                  break;
                case 'm':
                  (i += y[b++]), (r += y[b++]), s.addData((u = l.M), i, r), (o = i), (a = r), (m = 'l');
                  break;
                case 'M':
                  (i = y[b++]), (r = y[b++]), s.addData((u = l.M), i, r), (o = i), (a = r), (m = 'L');
                  break;
                case 'h':
                  (i += y[b++]), s.addData((u = l.L), i, r);
                  break;
                case 'H':
                  (i = y[b++]), s.addData((u = l.L), i, r);
                  break;
                case 'v':
                  (r += y[b++]), s.addData((u = l.L), i, r);
                  break;
                case 'V':
                  (r = y[b++]), s.addData((u = l.L), i, r);
                  break;
                case 'C':
                  s.addData((u = l.C), y[b++], y[b++], y[b++], y[b++], y[b++], y[b++]), (i = y[b - 2]), (r = y[b - 1]);
                  break;
                case 'c':
                  s.addData((u = l.C), y[b++] + i, y[b++] + r, y[b++] + i, y[b++] + r, y[b++] + i, y[b++] + r),
                    (i += y[b - 2]),
                    (r += y[b - 1]);
                  break;
                case 'S':
                  (_ = i), (S = r);
                  var I = s.len(),
                    O = s.data;
                  e === l.C && ((_ += i - O[I - 4]), (S += r - O[I - 3])),
                    (A = y[b++]),
                    (D = y[b++]),
                    (i = y[b++]),
                    (r = y[b++]),
                    s.addData((u = l.C), _, S, A, D, i, r);
                  break;
                case 's':
                  (_ = i),
                    (S = r),
                    (I = s.len()),
                    (O = s.data),
                    e === l.C && ((_ += i - O[I - 4]), (S += r - O[I - 3])),
                    (A = i + y[b++]),
                    (D = r + y[b++]),
                    (i += y[b++]),
                    (r += y[b++]),
                    s.addData((u = l.C), _, S, A, D, i, r);
                  break;
                case 'Q':
                  (A = y[b++]), (D = y[b++]), (i = y[b++]), (r = y[b++]), s.addData((u = l.Q), A, D, i, r);
                  break;
                case 'q':
                  (A = y[b++] + i), (D = y[b++] + r), (i += y[b++]), (r += y[b++]), s.addData((u = l.Q), A, D, i, r);
                  break;
                case 'T':
                  (_ = i),
                    (S = r),
                    (I = s.len()),
                    (O = s.data),
                    e === l.Q && ((_ += i - O[I - 4]), (S += r - O[I - 3])),
                    (i = y[b++]),
                    (r = y[b++]),
                    s.addData((u = l.Q), _, S, i, r);
                  break;
                case 't':
                  (_ = i),
                    (S = r),
                    (I = s.len()),
                    (O = s.data),
                    e === l.Q && ((_ += i - O[I - 4]), (S += r - O[I - 3])),
                    (i += y[b++]),
                    (r += y[b++]),
                    s.addData((u = l.Q), _, S, i, r);
                  break;
                case 'A':
                  (w = y[b++]),
                    (C = y[b++]),
                    (T = y[b++]),
                    (k = y[b++]),
                    (M = y[b++]),
                    f((A = i), (D = r), (i = y[b++]), (r = y[b++]), k, M, w, C, T, (u = l.A), s);
                  break;
                case 'a':
                  (w = y[b++]),
                    (C = y[b++]),
                    (T = y[b++]),
                    (k = y[b++]),
                    (M = y[b++]),
                    f((A = i), (D = r), (i += y[b++]), (r += y[b++]), k, M, w, C, T, (u = l.A), s);
              }
            }
            ('z' !== m && 'Z' !== m) || (s.addData((u = l.Z)), (i = o), (r = a)), (e = u);
          }
          return s.toStatic(), s;
        })(t);
        return (
          ((e = e || {}).buildPath = function(t) {
            var e;
            t.setData ? (t.setData(i.data), (e = t.getContext()) && t.rebuildPath(e)) : i.rebuildPath((e = t));
          }),
          (e.applyTransform = function(t) {
            o(i, t), this.dirty(!0);
          }),
          e
        );
      }
      (e.createFromString = function(t, e) {
        return new r(m(t, e));
      }),
        (e.extendFromString = function(t, e) {
          return r.extend(m(t, e));
        }),
        (e.mergePath = function(t, e) {
          for (var i = [], n = t.length, o = 0; o < n; o++) {
            var a = t[o];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path);
          }
          var s = new r(e);
          return (
            s.createPathProxy(),
            (s.buildPath = function(t) {
              t.appendPath(i);
              var e = t.getContext();
              e && t.rebuildPath(e);
            }),
            s
          );
        });
    },
    'OELB': function(t, e, i) {
      var r = i('bYtY'),
        n = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
      function o(t) {
        return Math.floor(Math.log(t) / Math.LN10);
      }
      (e.linearMap = function(t, e, i, r) {
        var n = e[1] - e[0],
          o = i[1] - i[0];
        if (0 === n) return 0 === o ? i[0] : (i[0] + i[1]) / 2;
        if (r)
          if (n > 0) {
            if (t <= e[0]) return i[0];
            if (t >= e[1]) return i[1];
          } else {
            if (t >= e[0]) return i[0];
            if (t <= e[1]) return i[1];
          }
        else {
          if (t === e[0]) return i[0];
          if (t === e[1]) return i[1];
        }
        return ((t - e[0]) / n) * o + i[0];
      }),
        (e.parsePercent = function(t, e) {
          switch (t) {
            case 'center':
            case 'middle':
              t = '50%';
              break;
            case 'left':
            case 'top':
              t = '0%';
              break;
            case 'right':
            case 'bottom':
              t = '100%';
          }
          return 'string' == typeof t
            ? ((i = t), i.replace(/^\s+/, '').replace(/\s+$/, '')).match(/%$/)
              ? (parseFloat(t) / 100) * e
              : parseFloat(t)
            : null == t
            ? NaN
            : +t;
          var i;
        }),
        (e.round = function(t, e, i) {
          return null == e && (e = 10), (e = Math.min(Math.max(0, e), 20)), (t = (+t).toFixed(e)), i ? t : +t;
        }),
        (e.asc = function(t) {
          return (
            t.sort(function(t, e) {
              return t - e;
            }),
            t
          );
        }),
        (e.getPrecision = function(t) {
          if (((t = +t), isNaN(t))) return 0;
          for (var e = 1, i = 0; Math.round(t * e) / e !== t; ) (e *= 10), i++;
          return i;
        }),
        (e.getPrecisionSafe = function(t) {
          var e = t.toString(),
            i = e.indexOf('e');
          if (i > 0) {
            var r = +e.slice(i + 1);
            return r < 0 ? -r : 0;
          }
          var n = e.indexOf('.');
          return n < 0 ? 0 : e.length - 1 - n;
        }),
        (e.getPixelPrecision = function(t, e) {
          var i = Math.log,
            r = Math.LN10,
            n = Math.floor(i(t[1] - t[0]) / r),
            o = Math.round(i(Math.abs(e[1] - e[0])) / r),
            a = Math.min(Math.max(-n + o, 0), 20);
          return isFinite(a) ? a : 20;
        }),
        (e.getPercentWithPrecision = function(t, e, i) {
          if (!t[e]) return 0;
          var n = r.reduce(
            t,
            function(t, e) {
              return t + (isNaN(e) ? 0 : e);
            },
            0,
          );
          if (0 === n) return 0;
          for (
            var o = Math.pow(10, i),
              a = r.map(t, function(t) {
                return ((isNaN(t) ? 0 : t) / n) * o * 100;
              }),
              s = 100 * o,
              l = r.map(a, function(t) {
                return Math.floor(t);
              }),
              c = r.reduce(
                l,
                function(t, e) {
                  return t + e;
                },
                0,
              ),
              h = r.map(a, function(t, e) {
                return t - l[e];
              });
            c < s;

          ) {
            for (var u = Number.NEGATIVE_INFINITY, d = null, f = 0, p = h.length; f < p; ++f)
              h[f] > u && ((u = h[f]), (d = f));
            ++l[d], (h[d] = 0), ++c;
          }
          return l[e] / o;
        }),
        (e.MAX_SAFE_INTEGER = 9007199254740991),
        (e.remRadian = function(t) {
          var e = 2 * Math.PI;
          return ((t % e) + e) % e;
        }),
        (e.isRadianAroundZero = function(t) {
          return t > -1e-4 && t < 1e-4;
        }),
        (e.parseDate = function(t) {
          if (t instanceof Date) return t;
          if ('string' == typeof t) {
            var e = n.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
              var i = +e[4] || 0;
              return (
                'Z' !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)),
                new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
              );
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
          }
          return null == t ? new Date(NaN) : new Date(Math.round(t));
        }),
        (e.quantity = function(t) {
          return Math.pow(10, o(t));
        }),
        (e.nice = function(t, e) {
          var i = o(t),
            r = Math.pow(10, i),
            n = t / r;
          return (
            (t =
              (e
                ? n < 1.5
                  ? 1
                  : n < 2.5
                  ? 2
                  : n < 4
                  ? 3
                  : n < 7
                  ? 5
                  : 10
                : n < 1
                ? 1
                : n < 2
                ? 2
                : n < 3
                ? 3
                : n < 5
                ? 5
                : 10) * r),
            i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
          );
        }),
        (e.quantile = function(t, e) {
          var i = (t.length - 1) * e + 1,
            r = Math.floor(i),
            n = +t[r - 1],
            o = i - r;
          return o ? n + o * (t[r] - n) : n;
        }),
        (e.reformIntervals = function(t) {
          t.sort(function(t, e) {
            return (function t(e, i, r) {
              return (
                e.interval[r] < i.interval[r] ||
                (e.interval[r] === i.interval[r] && (e.close[r] - i.close[r] == (r ? -1 : 1) || (!r && t(e, i, 1))))
              );
            })(t, e, 0)
              ? -1
              : 1;
          });
          for (var e = -1 / 0, i = 1, r = 0; r < t.length; ) {
            for (var n = t[r].interval, o = t[r].close, a = 0; a < 2; a++)
              n[a] <= e && ((n[a] = e), (o[a] = a ? 1 : 1 - i)), (e = n[a]), (i = o[a]);
            n[0] === n[1] && o[0] * o[1] != 1 ? t.splice(r, 1) : r++;
          }
          return t;
        }),
        (e.isNumeric = function(t) {
          return t - parseFloat(t) >= 0;
        });
    },
    'OKJ2': function(t, e, i) {
      var r = i('KxfA').retrieveRawValue,
        n = i('7aKB'),
        o = n.getTooltipMarker,
        a = n.formatTpl,
        s = i('4NO4').getTooltipRenderMode,
        l = /\{@(.+?)\}/g;
      t.exports = {
        getDataParams: function(t, e) {
          var i = this.getData(e),
            r = this.getRawValue(t, e),
            n = i.getRawIndex(t),
            a = i.getName(t),
            l = i.getRawDataItem(t),
            c = i.getItemVisual(t, 'color'),
            h = this.ecModel.getComponent('tooltip'),
            u = h && h.get('renderMode'),
            d = s(u),
            f = this.mainType,
            p = 'series' === f;
          return {
            componentType: f,
            componentSubType: this.subType,
            componentIndex: this.componentIndex,
            seriesType: p ? this.subType : null,
            seriesIndex: this.seriesIndex,
            seriesId: p ? this.id : null,
            seriesName: p ? this.name : null,
            name: a,
            dataIndex: n,
            data: l,
            dataType: e,
            value: r,
            color: c,
            marker: o({ color: c, renderMode: d }),
            $vars: ['seriesName', 'name', 'value'],
          };
        },
        getFormattedLabel: function(t, e, i, n, o) {
          e = e || 'normal';
          var s = this.getData(i),
            c = s.getItemModel(t),
            h = this.getDataParams(t, i);
          null != n && h.value instanceof Array && (h.value = h.value[n]);
          var u = c.get('normal' === e ? [o || 'label', 'formatter'] : [e, o || 'label', 'formatter']);
          return 'function' == typeof u
            ? ((h.status = e), u(h))
            : 'string' == typeof u
            ? a(u, h).replace(l, function(e, i) {
                var n = i.length;
                return '[' === i.charAt(0) && ']' === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), r(s, t, i);
              })
            : void 0;
        },
        getRawValue: function(t, e) {
          return r(this.getData(e), t);
        },
        formatTooltip: function() {},
      };
    },
    'OQFs': function(t, e, i) {
      var r = i('KCsZ')([
        ['lineWidth', 'width'],
        ['stroke', 'color'],
        ['opacity'],
        ['shadowBlur'],
        ['shadowOffsetX'],
        ['shadowOffsetY'],
        ['shadowColor'],
      ]);
      t.exports = {
        getLineStyle: function(t) {
          var e = r(this, t),
            i = this.getLineDash(e.lineWidth);
          return i && (e.lineDash = i), e;
        },
        getLineDash: function(t) {
          null == t && (t = 1);
          var e = this.get('type'),
            i = Math.max(t, 2),
            r = 4 * t;
          return 'solid' === e || null == e ? null : 'dashed' === e ? [r, r] : [i, i];
        },
      };
    },
    'OS9S': function(t, e, i) {
      var r = i('bYtY').inherits,
        n = i('Gev7'),
        o = i('mFDi');
      function a(t) {
        n.call(this, t),
          (this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          (this.notClear = !0);
      }
      (a.prototype.incremental = !0),
        (a.prototype.clearDisplaybles = function() {
          (this._displayables = []),
            (this._temporaryDisplayables = []),
            (this._cursor = 0),
            this.dirty(),
            (this.notClear = !1);
        }),
        (a.prototype.addDisplayable = function(t, e) {
          e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
        }),
        (a.prototype.addDisplayables = function(t, e) {
          e = e || !1;
          for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e);
        }),
        (a.prototype.eachPendingDisplayable = function(t) {
          for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
          for (e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
        }),
        (a.prototype.update = function() {
          this.updateTransform();
          for (var t = this._cursor; t < this._displayables.length; t++)
            ((e = this._displayables[t]).parent = this), e.update(), (e.parent = null);
          for (t = 0; t < this._temporaryDisplayables.length; t++) {
            var e;
            ((e = this._temporaryDisplayables[t]).parent = this), e.update(), (e.parent = null);
          }
        }),
        (a.prototype.brush = function(t, e) {
          for (var i = this._cursor; i < this._displayables.length; i++)
            (r = this._displayables[i]).beforeBrush && r.beforeBrush(t),
              r.brush(t, i === this._cursor ? null : this._displayables[i - 1]),
              r.afterBrush && r.afterBrush(t);
          for (this._cursor = i, i = 0; i < this._temporaryDisplayables.length; i++) {
            var r;
            (r = this._temporaryDisplayables[i]).beforeBrush && r.beforeBrush(t),
              r.brush(t, 0 === i ? null : this._temporaryDisplayables[i - 1]),
              r.afterBrush && r.afterBrush(t);
          }
          (this._temporaryDisplayables = []), (this.notClear = !0);
        });
      var s = [];
      (a.prototype.getBoundingRect = function() {
        if (!this._rect) {
          for (var t = new o(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
            var i = this._displayables[e],
              r = i.getBoundingRect().clone();
            i.needLocalTransform() && r.applyTransform(i.getLocalTransform(s)), t.union(r);
          }
          this._rect = t;
        }
        return this._rect;
      }),
        (a.prototype.contain = function(t, e) {
          var i = this.transformCoordToLocal(t, e);
          if (this.getBoundingRect().contain(i[0], i[1]))
            for (var r = 0; r < this._displayables.length; r++) if (this._displayables[r].contain(t, e)) return !0;
          return !1;
        }),
        r(a, n),
        (t.exports = a);
    },
    'P47w': function(t, e, i) {
      var r = i('hydK').createElement,
        n = i('IMiH'),
        o = i('mFDi'),
        a = i('Fofx'),
        s = i('6GrX'),
        l = i('pzxd'),
        c = i('dqUG'),
        h = n.CMD,
        u = Array.prototype.join,
        d = 'none',
        f = Math.round,
        p = Math.sin,
        g = Math.cos,
        m = Math.PI,
        y = 2 * Math.PI,
        v = 180 / m,
        x = 1e-4;
      function b(t) {
        return f(1e4 * t) / 1e4;
      }
      function _(t) {
        return t < x && t > -x;
      }
      function S(t, e) {
        e && w(t, 'transform', 'matrix(' + u.call(e, ',') + ')');
      }
      function w(t, e, i) {
        (!i || ('linear' !== i.type && 'radial' !== i.type)) && t.setAttribute(e, i);
      }
      function C(t, e, i, r) {
        if (
          (function(t, e) {
            var i = e ? t.textFill : t.fill;
            return null != i && i !== d;
          })(e, i)
        ) {
          var n = i ? e.textFill : e.fill;
          (n = 'transparent' === n ? d : n),
            'none' !== t.getAttribute('clip-path') && n === d && (n = 'rgba(0, 0, 0, 0.002)'),
            w(t, 'fill', n),
            w(t, 'fill-opacity', null != e.fillOpacity ? e.fillOpacity * e.opacity : e.opacity);
        } else w(t, 'fill', d);
        if (
          (function(t, e) {
            var i = e ? t.textStroke : t.stroke;
            return null != i && i !== d;
          })(e, i)
        ) {
          var o = i ? e.textStroke : e.stroke;
          w(t, 'stroke', (o = 'transparent' === o ? d : o)),
            w(
              t,
              'stroke-width',
              (i ? e.textStrokeWidth : e.lineWidth) / (!i && e.strokeNoScale ? r.getLineScale() : 1),
            ),
            w(t, 'paint-order', i ? 'stroke' : 'fill'),
            w(t, 'stroke-opacity', null != e.strokeOpacity ? e.strokeOpacity : e.opacity),
            e.lineDash
              ? (w(t, 'stroke-dasharray', e.lineDash.join(',')), w(t, 'stroke-dashoffset', f(e.lineDashOffset || 0)))
              : w(t, 'stroke-dasharray', ''),
            e.lineCap && w(t, 'stroke-linecap', e.lineCap),
            e.lineJoin && w(t, 'stroke-linejoin', e.lineJoin),
            e.miterLimit && w(t, 'stroke-miterlimit', e.miterLimit);
        } else w(t, 'stroke', d);
      }
      var T = {
          brush: function(t) {
            var e = t.style,
              i = t.__svgEl;
            i || ((i = r('path')), (t.__svgEl = i)), t.path || t.createPathProxy();
            var n = t.path;
            if (t.__dirtyPath) {
              n.beginPath(), (n.subPixelOptimize = !1), t.buildPath(n, t.shape), (t.__dirtyPath = !1);
              var o = (function(t) {
                for (var e = [], i = t.data, r = t.len(), n = 0; n < r; ) {
                  var o = '',
                    a = 0;
                  switch (i[n++]) {
                    case h.M:
                      (o = 'M'), (a = 2);
                      break;
                    case h.L:
                      (o = 'L'), (a = 2);
                      break;
                    case h.Q:
                      (o = 'Q'), (a = 4);
                      break;
                    case h.C:
                      (o = 'C'), (a = 6);
                      break;
                    case h.A:
                      var s = i[n++],
                        l = i[n++],
                        c = i[n++],
                        u = i[n++],
                        d = i[n++],
                        x = i[n++],
                        S = i[n++],
                        w = i[n++],
                        C = Math.abs(x),
                        T = _(C - y) && !_(C),
                        k = !1;
                      k = C >= y || (!_(C) && ((x > -m && x < 0) || x > m) == !!w);
                      var M = b(s + c * g(d)),
                        A = b(l + u * p(d));
                      T && ((x = w ? y - 1e-4 : 1e-4 - y), (k = !0), 9 === n && e.push('M', M, A));
                      var D = b(s + c * g(d + x)),
                        I = b(l + u * p(d + x));
                      e.push('A', b(c), b(u), f(S * v), +k, +w, D, I);
                      break;
                    case h.Z:
                      o = 'Z';
                      break;
                    case h.R:
                      (D = b(i[n++])), (I = b(i[n++]));
                      var O = b(i[n++]),
                        L = b(i[n++]);
                      e.push('M', D, I, 'L', D + O, I, 'L', D + O, I + L, 'L', D, I + L, 'L', D, I);
                  }
                  o && e.push(o);
                  for (var P = 0; P < a; P++) e.push(b(i[n++]));
                }
                return e.join(' ');
              })(n);
              o.indexOf('NaN') < 0 && w(i, 'd', o);
            }
            C(i, e, !1, t), S(i, t.transform), null != e.text && D(t, t.getBoundingRect());
          },
        },
        k = {
          brush: function(t) {
            var e = t.style,
              i = e.image;
            if ((i instanceof HTMLImageElement && (i = i.src), i)) {
              var n = e.x || 0,
                o = e.y || 0,
                a = e.width,
                s = e.height,
                l = t.__svgEl;
              l || ((l = r('image')), (t.__svgEl = l)),
                i !== t.__imageSrc &&
                  ((function(t, e, i) {
                    t.setAttributeNS('http://www.w3.org/1999/xlink', 'href', i);
                  })(l, 0, i),
                  (t.__imageSrc = i)),
                w(l, 'width', a),
                w(l, 'height', s),
                w(l, 'x', n),
                w(l, 'y', o),
                S(l, t.transform),
                null != e.text && D(t, t.getBoundingRect());
            }
          },
        },
        M = {},
        A = new o(),
        D = function(t, e, i) {
          var n = t.style;
          t.__dirty && l.normalizeTextStyle(n, !0);
          var o = n.text;
          if (null != o) {
            o += '';
            var h,
              u,
              d = t.__textSvgEl;
            d || ((d = r('text')), (t.__textSvgEl = d));
            var f = n.textPosition,
              p = n.textDistance,
              g = n.textAlign || 'left';
            'number' == typeof n.fontSize && (n.fontSize += 'px');
            var m =
                n.font ||
                [n.fontStyle || '', n.fontWeight || '', n.fontSize || '', n.fontFamily || ''].join(' ') ||
                s.DEFAULT_FONT,
              y = I(n.textVerticalAlign),
              v = (i = s.getBoundingRect(o, m, g, y, n.textPadding, n.textLineHeight)).lineHeight;
            if (f instanceof Array) (h = e.x + f[0]), (u = e.y + f[1]);
            else {
              var x = s.adjustTextPositionOnRect(f, e, p);
              (h = x.x), (u = x.y), (y = I(x.textVerticalAlign)), (g = x.textAlign);
            }
            w(d, 'alignment-baseline', y), m && (d.style.font = m);
            var b = n.textPadding;
            if ((w(d, 'x', h), w(d, 'y', u), C(d, n, !0, t), t instanceof c || t.style.transformText))
              S(d, t.transform);
            else {
              if (t.transform) A.copy(e), A.applyTransform(t.transform), (e = A);
              else {
                var _ = t.transformCoordToGlobal(e.x, e.y);
                (e.x = _[0]), (e.y = _[1]), (t.transform = a.identity(a.create()));
              }
              var T = n.textOrigin;
              'center' === T ? ((h = i.width / 2 + h), (u = i.height / 2 + u)) : T && ((h = T[0] + h), (u = T[1] + u));
              var k = -n.textRotation || 0,
                M = a.create();
              a.rotate(M, M, k), a.translate(M, M, (_ = [t.transform[4], t.transform[5]])), S(d, M);
            }
            var D = o.split('\n'),
              O = D.length,
              L = g;
            'left' === L
              ? ((L = 'start'), b && (h += b[3]))
              : 'right' === L
              ? ((L = 'end'), b && (h -= b[1]))
              : 'center' === L && ((L = 'middle'), b && (h += (b[3] - b[1]) / 2));
            var P = 0;
            if (
              ('after-edge' === y
                ? ((P = -i.height + v), b && (P -= b[2]))
                : 'middle' === y
                ? ((P = (-i.height + v) / 2), b && (u += (b[0] - b[2]) / 2))
                : b && (P += b[0]),
              t.__text !== o || t.__textFont !== m)
            ) {
              var E = t.__tspanList || [];
              t.__tspanList = E;
              for (var B = 0; B < O; B++)
                (z = E[B])
                  ? (z.innerHTML = '')
                  : ((z = E[B] = r('tspan')), d.appendChild(z), w(z, 'alignment-baseline', y), w(z, 'text-anchor', L)),
                  w(z, 'x', h),
                  w(z, 'y', u + B * v + P),
                  z.appendChild(document.createTextNode(D[B]));
              for (; B < E.length; B++) d.removeChild(E[B]);
              (E.length = O), (t.__text = o), (t.__textFont = m);
            } else if (t.__tspanList.length) {
              var R = t.__tspanList.length;
              for (B = 0; B < R; ++B) {
                var z;
                (z = t.__tspanList[B]) && (w(z, 'x', h), w(z, 'y', u + B * v + P));
              }
            }
          }
        };
      function I(t) {
        return 'middle' === t ? 'middle' : 'bottom' === t ? 'after-edge' : 'hanging';
      }
      (M.drawRectText = D),
        (M.brush = function(t) {
          var e = t.style;
          null != e.text &&
            ((e.textPosition = [0, 0]), D(t, { x: e.x || 0, y: e.y || 0, width: 0, height: 0 }, t.getBoundingRect()));
        }),
        (e.path = T),
        (e.image = k),
        (e.text = M);
    },
    'ProS': function(t, e, i) {
      i('Tghj');
      var r = i('aX58'),
        n = i('bYtY'),
        o = i('Qe9p'),
        a = i('ItGF'),
        s = i('BPZU'),
        l = i('H6uX'),
        c = i('fmMI'),
        h = i('hD7B'),
        u = i('IDmD'),
        d = i('ypgQ'),
        f = i('+wW9'),
        p = i('0V0F'),
        g = i('bLfw'),
        m = i('T4UG'),
        y = i('sS/r'),
        v = i('6Ic6'),
        x = i('IwbS'),
        b = i('4NO4'),
        _ = i('iLNv').throttle,
        S = i('/WM3'),
        w = i('uAnK'),
        C = i('mYwL'),
        T = i('af/B'),
        k = i('xTNl'),
        M = i('8hn6');
      i('A1Ka');
      var A = i('7DRL'),
        D = n.assert,
        I = n.each,
        O = n.isFunction,
        L = n.isObject,
        P = g.parseClassType,
        E = 1e3,
        B = 3e3,
        R = {
          PROCESSOR: { FILTER: E, STATISTIC: 5e3 },
          VISUAL: { LAYOUT: 1e3, GLOBAL: 2e3, CHART: B, COMPONENT: 4e3, BRUSH: 5e3 },
        },
        z = '__flagInMainProcess',
        W = '__optionUpdated',
        F = /^[a-zA-Z0-9_]+$/;
      function N(t) {
        return function(e, i, r) {
          (e = e && e.toLowerCase()), l.prototype[t].call(this, e, i, r);
        };
      }
      function Y() {
        l.call(this);
      }
      function H(t, e, i) {
        (i = i || {}), 'string' == typeof e && (e = dt[e]), (this._dom = t);
        var o = (this._zr = r.init(t, {
          renderer: i.renderer || 'canvas',
          devicePixelRatio: i.devicePixelRatio,
          width: i.width,
          height: i.height,
        }));
        (this._throttledZrFlush = _(n.bind(o.flush, o), 17)),
          (e = n.clone(e)) && f(e, !0),
          (this._theme = e),
          (this._chartsViews = []),
          (this._chartsMap = {}),
          (this._componentsViews = []),
          (this._componentsMap = {}),
          (this._coordSysMgr = new u());
        var a,
          c,
          d = (this._api =
            ((c = (a = this)._coordSysMgr),
            n.extend(new h(a), {
              getCoordinateSystems: n.bind(c.getCoordinateSystems, c),
              getComponentByElement: function(t) {
                for (; t; ) {
                  var e = t.__ecComponentInfo;
                  if (null != e) return a._model.getComponent(e.mainType, e.index);
                  t = t.parent;
                }
              },
            })));
        function p(t, e) {
          return t.__prio - e.__prio;
        }
        s(ut, p),
          s(lt, p),
          (this._scheduler = new T(this, d, lt, ut)),
          l.call(this, (this._ecEventProcessor = new ot())),
          (this._messageCenter = new Y()),
          this._initEvents(),
          (this.resize = n.bind(this.resize, this)),
          (this._pendingActions = []),
          o.animation.on('frame', this._onframe, this),
          (function(t, e) {
            t.on('rendered', function() {
              e.trigger('rendered'),
                !t.animation.isFinished() ||
                  e[W] ||
                  e._scheduler.unfinished ||
                  e._pendingActions.length ||
                  e.trigger('finished');
            });
          })(o, this),
          n.setAsPrimitive(this);
      }
      (Y.prototype.on = N('on')), (Y.prototype.off = N('off')), (Y.prototype.one = N('one')), n.mixin(Y, l);
      var V = H.prototype;
      function U(t, e, i) {
        var r,
          n = this._model,
          o = this._coordSysMgr.getCoordinateSystems();
        e = b.parseFinder(n, e);
        for (var a = 0; a < o.length; a++) {
          var s = o[a];
          if (s[t] && null != (r = s[t](n, e, i))) return r;
        }
      }
      (V._onframe = function() {
        if (!this._disposed) {
          var t = this._scheduler;
          if (this[W]) {
            var e = this[W].silent;
            (this[z] = !0),
              j(this),
              G.update.call(this),
              (this[z] = !1),
              (this[W] = !1),
              Q.call(this, e),
              Z.call(this, e);
          } else if (t.unfinished) {
            var i = 1,
              r = this._model;
            t.unfinished = !1;
            do {
              var n = +new Date();
              t.performSeriesTasks(r),
                t.performDataProcessorTasks(r),
                q(this, r),
                t.performVisualTasks(r),
                et(this, this._model, 0, 'remain'),
                (i -= +new Date() - n);
            } while (i > 0 && t.unfinished);
            t.unfinished || this._zr.flush();
          }
        }
      }),
        (V.getDom = function() {
          return this._dom;
        }),
        (V.getZr = function() {
          return this._zr;
        }),
        (V.setOption = function(t, e, i) {
          var r;
          if ((L(e) && ((i = e.lazyUpdate), (r = e.silent), (e = e.notMerge)), (this[z] = !0), !this._model || e)) {
            var n = new d(this._api),
              o = this._theme,
              a = (this._model = new c(null, null, o, n));
            (a.scheduler = this._scheduler), a.init(null, null, o, n);
          }
          this._model.setOption(t, ct),
            i
              ? ((this[W] = { silent: r }), (this[z] = !1))
              : (j(this),
                G.update.call(this),
                this._zr.flush(),
                (this[W] = !1),
                (this[z] = !1),
                Q.call(this, r),
                Z.call(this, r));
        }),
        (V.setTheme = function() {
          console.error('ECharts#setTheme() is DEPRECATED in ECharts 3.0');
        }),
        (V.getModel = function() {
          return this._model;
        }),
        (V.getOption = function() {
          return this._model && this._model.getOption();
        }),
        (V.getWidth = function() {
          return this._zr.getWidth();
        }),
        (V.getHeight = function() {
          return this._zr.getHeight();
        }),
        (V.getDevicePixelRatio = function() {
          return this._zr.painter.dpr || window.devicePixelRatio || 1;
        }),
        (V.getRenderedCanvas = function(t) {
          if (a.canvasSupported)
            return (
              ((t = t || {}).pixelRatio = t.pixelRatio || 1),
              (t.backgroundColor = t.backgroundColor || this._model.get('backgroundColor')),
              this._zr.painter.getRenderedCanvas(t)
            );
        }),
        (V.getSvgDataUrl = function() {
          if (a.svgSupported) {
            var t = this._zr,
              e = t.storage.getDisplayList();
            return (
              n.each(e, function(t) {
                t.stopAnimation(!0);
              }),
              t.painter.pathToDataUrl()
            );
          }
        }),
        (V.getDataURL = function(t) {
          var e = this._model,
            i = [],
            r = this;
          I((t = t || {}).excludeComponents, function(t) {
            e.eachComponent({ mainType: t }, function(t) {
              var e = r._componentsMap[t.__viewId];
              e.group.ignore || (i.push(e), (e.group.ignore = !0));
            });
          });
          var n =
            'svg' === this._zr.painter.getType()
              ? this.getSvgDataUrl()
              : this.getRenderedCanvas(t).toDataURL('image/' + ((t && t.type) || 'png'));
          return (
            I(i, function(t) {
              t.group.ignore = !1;
            }),
            n
          );
        }),
        (V.getConnectedDataURL = function(t) {
          if (a.canvasSupported) {
            var e = this.group,
              i = Math.min,
              o = Math.max;
            if (gt[e]) {
              var s = 1 / 0,
                l = 1 / 0,
                c = -1 / 0,
                h = -1 / 0,
                u = [],
                d = (t && t.pixelRatio) || 1;
              n.each(pt, function(r, a) {
                if (r.group === e) {
                  var d = r.getRenderedCanvas(n.clone(t)),
                    f = r.getDom().getBoundingClientRect();
                  (s = i(f.left, s)),
                    (l = i(f.top, l)),
                    (c = o(f.right, c)),
                    (h = o(f.bottom, h)),
                    u.push({ dom: d, left: f.left, top: f.top });
                }
              });
              var f = (c *= d) - (s *= d),
                p = (h *= d) - (l *= d),
                g = n.createCanvas();
              (g.width = f), (g.height = p);
              var m = r.init(g);
              return (
                I(u, function(t) {
                  var e = new x.Image({ style: { x: t.left * d - s, y: t.top * d - l, image: t.dom } });
                  m.add(e);
                }),
                m.refreshImmediately(),
                g.toDataURL('image/' + ((t && t.type) || 'png'))
              );
            }
            return this.getDataURL(t);
          }
        }),
        (V.convertToPixel = n.curry(U, 'convertToPixel')),
        (V.convertFromPixel = n.curry(U, 'convertFromPixel')),
        (V.containPixel = function(t, e) {
          var i;
          return (
            (t = b.parseFinder(this._model, t)),
            n.each(
              t,
              function(t, r) {
                r.indexOf('Models') >= 0 &&
                  n.each(
                    t,
                    function(t) {
                      var n = t.coordinateSystem;
                      if (n && n.containPoint) i |= !!n.containPoint(e);
                      else if ('seriesModels' === r) {
                        var o = this._chartsMap[t.__viewId];
                        o && o.containPoint && (i |= o.containPoint(e, t));
                      }
                    },
                    this,
                  );
              },
              this,
            ),
            !!i
          );
        }),
        (V.getVisual = function(t, e) {
          var i = (t = b.parseFinder(this._model, t, { defaultMainType: 'series' })).seriesModel.getData(),
            r = t.hasOwnProperty('dataIndexInside')
              ? t.dataIndexInside
              : t.hasOwnProperty('dataIndex')
              ? i.indexOfRawIndex(t.dataIndex)
              : null;
          return null != r ? i.getItemVisual(r, e) : i.getVisual(e);
        }),
        (V.getViewOfComponentModel = function(t) {
          return this._componentsMap[t.__viewId];
        }),
        (V.getViewOfSeriesModel = function(t) {
          return this._chartsMap[t.__viewId];
        });
      var G = {
        prepareAndUpdate: function(t) {
          j(this), G.update.call(this, t);
        },
        update: function(t) {
          var e = this._model,
            i = this._api,
            r = this._zr,
            n = this._coordSysMgr,
            s = this._scheduler;
          if (e) {
            s.restoreData(e, t),
              s.performSeriesTasks(e),
              n.create(e, i),
              s.performDataProcessorTasks(e, t),
              q(this, e),
              n.update(e, i),
              $(e),
              s.performVisualTasks(e, t),
              tt(this, e, i, t);
            var l = e.get('backgroundColor') || 'transparent';
            if (a.canvasSupported) r.setBackgroundColor(l);
            else {
              var c = o.parse(l);
              (l = o.stringify(c, 'rgb')), 0 === c[3] && (l = 'transparent');
            }
            it(e, i);
          }
        },
        updateTransform: function(t) {
          var e = this._model,
            i = this,
            r = this._api;
          if (e) {
            var o = [];
            e.eachComponent(function(n, a) {
              var s = i.getViewOfComponentModel(a);
              if (s && s.__alive)
                if (s.updateTransform) {
                  var l = s.updateTransform(a, e, r, t);
                  l && l.update && o.push(s);
                } else o.push(s);
            });
            var a = n.createHashMap();
            e.eachSeries(function(n) {
              var o = i._chartsMap[n.__viewId];
              if (o.updateTransform) {
                var s = o.updateTransform(n, e, r, t);
                s && s.update && a.set(n.uid, 1);
              } else a.set(n.uid, 1);
            }),
              $(e),
              this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: a }),
              et(i, e, 0, t, a),
              it(e, this._api);
          }
        },
        updateView: function(t) {
          var e = this._model;
          e &&
            (v.markUpdateMethod(t, 'updateView'),
            $(e),
            this._scheduler.performVisualTasks(e, t, { setDirty: !0 }),
            tt(this, this._model, this._api, t),
            it(e, this._api));
        },
        updateVisual: function(t) {
          G.update.call(this, t);
        },
        updateLayout: function(t) {
          G.update.call(this, t);
        },
      };
      function j(t) {
        var e = t._model,
          i = t._scheduler;
        i.restorePipelines(e), i.prepareStageTasks(), J(t, 'component', e, i), J(t, 'chart', e, i), i.plan();
      }
      function X(t, e, i, r, o) {
        var a = t._model;
        if (r) {
          var s = {};
          (s[r + 'Id'] = i[r + 'Id']), (s[r + 'Index'] = i[r + 'Index']), (s[r + 'Name'] = i[r + 'Name']);
          var l = { mainType: r, query: s };
          o && (l.subType = o);
          var c = i.excludeSeriesId;
          null != c && (c = n.createHashMap(b.normalizeToArray(c))),
            a &&
              a.eachComponent(
                l,
                function(e) {
                  (c && null != c.get(e.id)) || h(t['series' === r ? '_chartsMap' : '_componentsMap'][e.__viewId]);
                },
                t,
              );
        } else I(t._componentsViews.concat(t._chartsViews), h);
        function h(r) {
          r && r.__alive && r[e] && r[e](r.__model, a, t._api, i);
        }
      }
      function q(t, e) {
        var i = t._chartsMap,
          r = t._scheduler;
        e.eachSeries(function(t) {
          r.updateStreamModes(t, i[t.__viewId]);
        });
      }
      function K(t, e) {
        var i = t.type,
          r = t.escapeConnect,
          o = at[i],
          a = o.actionInfo,
          s = (a.update || 'update').split(':'),
          l = s.pop();
        (s = null != s[0] && P(s[0])), (this[z] = !0);
        var c = [t],
          h = !1;
        t.batch &&
          ((h = !0),
          (c = n.map(t.batch, function(e) {
            return ((e = n.defaults(n.extend({}, e), t)).batch = null), e;
          })));
        var u,
          d = [],
          f = 'highlight' === i || 'downplay' === i;
        I(
          c,
          function(t) {
            ((u = (u = o.action(t, this._model, this._api)) || n.extend({}, t)).type = a.event || u.type),
              d.push(u),
              f ? X(this, l, t, 'series') : s && X(this, l, t, s.main, s.sub);
          },
          this,
        ),
          'none' === l || f || s || (this[W] ? (j(this), G.update.call(this, t), (this[W] = !1)) : G[l].call(this, t)),
          (u = h ? { type: a.event || i, escapeConnect: r, batch: d } : d[0]),
          (this[z] = !1),
          !e && this._messageCenter.trigger(u.type, u);
      }
      function Q(t) {
        for (var e = this._pendingActions; e.length; ) {
          var i = e.shift();
          K.call(this, i, t);
        }
      }
      function Z(t) {
        !t && this.trigger('updated');
      }
      function J(t, e, i, r) {
        for (
          var n = 'component' === e,
            o = n ? t._componentsViews : t._chartsViews,
            a = n ? t._componentsMap : t._chartsMap,
            s = t._zr,
            l = t._api,
            c = 0;
          c < o.length;
          c++
        )
          o[c].__alive = !1;
        function h(t) {
          var e = '_ec_' + t.id + '_' + t.type,
            c = a[e];
          if (!c) {
            var h = P(t.type);
            (c = new (n ? y.getClass(h.main, h.sub) : v.getClass(h.sub))()).init(i, l),
              (a[e] = c),
              o.push(c),
              s.add(c.group);
          }
          (t.__viewId = c.__id = e),
            (c.__alive = !0),
            (c.__model = t),
            (c.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }),
            !n && r.prepareView(c, t, i, l);
        }
        for (
          n
            ? i.eachComponent(function(t, e) {
                'series' !== t && h(e);
              })
            : i.eachSeries(h),
            c = 0;
          c < o.length;

        ) {
          var u = o[c];
          u.__alive
            ? c++
            : (!n && u.renderTask.dispose(),
              s.remove(u.group),
              u.dispose(i, l),
              o.splice(c, 1),
              delete a[u.__id],
              (u.__id = u.group.__ecComponentInfo = null));
        }
      }
      function $(t) {
        t.clearColorPalette(),
          t.eachSeries(function(t) {
            t.clearColorPalette();
          });
      }
      function tt(t, e, i, r) {
        !(function(t, e, i, r, n) {
          I(t._componentsViews, function(t) {
            var n = t.__model;
            t.render(n, e, i, r), nt(n, t);
          });
        })(t, e, i, r),
          I(t._chartsViews, function(t) {
            t.__alive = !1;
          }),
          et(t, e, 0, r),
          I(t._chartsViews, function(t) {
            t.__alive || t.remove(e, i);
          });
      }
      function et(t, e, i, r, n) {
        var o,
          s = t._scheduler;
        e.eachSeries(function(e) {
          var i = t._chartsMap[e.__viewId];
          i.__alive = !0;
          var a = i.renderTask;
          s.updatePayload(a, r),
            n && n.get(e.uid) && a.dirty(),
            (o |= a.perform(s.getPerformArgs(a))),
            (i.group.silent = !!e.get('silent')),
            nt(e, i),
            (function(t, e) {
              var i = t.get('blendMode') || null;
              e.group.traverse(function(t) {
                t.isGroup || (t.style.blend !== i && t.setStyle('blend', i)),
                  t.eachPendingDisplayable &&
                    t.eachPendingDisplayable(function(t) {
                      t.setStyle('blend', i);
                    });
              });
            })(e, i);
        }),
          (s.unfinished |= o),
          (function(t, e) {
            var i = t.storage,
              r = 0;
            i.traverse(function(t) {
              t.isGroup || r++;
            }),
              r > e.get('hoverLayerThreshold') &&
                !a.node &&
                i.traverse(function(t) {
                  t.isGroup || (t.useHoverLayer = !0);
                });
          })(t._zr, e),
          w(t._zr.dom, e);
      }
      function it(t, e) {
        I(ht, function(i) {
          i(t, e);
        });
      }
      (V.resize = function(t) {
        this._zr.resize(t);
        var e = this._model;
        if ((this._loadingFX && this._loadingFX.resize(), e)) {
          var i = e.resetOption('media'),
            r = t && t.silent;
          (this[z] = !0), i && j(this), G.update.call(this), (this[z] = !1), Q.call(this, r), Z.call(this, r);
        }
      }),
        (V.showLoading = function(t, e) {
          if ((L(t) && ((e = t), (t = '')), (t = t || 'default'), this.hideLoading(), ft[t])) {
            var i = ft[t](this._api, e),
              r = this._zr;
            (this._loadingFX = i), r.add(i);
          }
        }),
        (V.hideLoading = function() {
          this._loadingFX && this._zr.remove(this._loadingFX), (this._loadingFX = null);
        }),
        (V.makeActionFromEvent = function(t) {
          var e = n.extend({}, t);
          return (e.type = st[t.type]), e;
        }),
        (V.dispatchAction = function(t, e) {
          L(e) || (e = { silent: !!e }),
            at[t.type] &&
              this._model &&
              (this[z]
                ? this._pendingActions.push(t)
                : (K.call(this, t, e.silent),
                  e.flush ? this._zr.flush(!0) : !1 !== e.flush && a.browser.weChat && this._throttledZrFlush(),
                  Q.call(this, e.silent),
                  Z.call(this, e.silent)));
        }),
        (V.appendData = function(t) {
          var e = t.seriesIndex;
          this.getModel()
            .getSeriesByIndex(e)
            .appendData(t),
            (this._scheduler.unfinished = !0);
        }),
        (V.on = N('on')),
        (V.off = N('off')),
        (V.one = N('one'));
      var rt = [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'mousemove',
        'mousedown',
        'mouseup',
        'globalout',
        'contextmenu',
      ];
      function nt(t, e) {
        var i = t.get('z'),
          r = t.get('zlevel');
        e.group.traverse(function(t) {
          'group' !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r));
        });
      }
      function ot() {}
      (V._initEvents = function() {
        I(
          rt,
          function(t) {
            var e = function(e) {
              var i,
                r = this.getModel(),
                o = e.target;
              if ('globalout' === t) i = {};
              else if (o && null != o.dataIndex) {
                var a = o.dataModel || r.getSeriesByIndex(o.seriesIndex);
                i = (a && a.getDataParams(o.dataIndex, o.dataType, o)) || {};
              } else o && o.eventData && (i = n.extend({}, o.eventData));
              if (i) {
                var s = i.componentType,
                  l = i.componentIndex;
                ('markLine' !== s && 'markPoint' !== s && 'markArea' !== s) || ((s = 'series'), (l = i.seriesIndex));
                var c = s && null != l && r.getComponent(s, l),
                  h = c && this['series' === c.mainType ? '_chartsMap' : '_componentsMap'][c.__viewId];
                (i.event = e),
                  (i.type = t),
                  (this._ecEventProcessor.eventInfo = { targetEl: o, packedEvent: i, model: c, view: h }),
                  this.trigger(t, i);
              }
            };
            (e.zrEventfulCallAtLast = !0), this._zr.on(t, e, this);
          },
          this,
        ),
          I(
            st,
            function(t, e) {
              this._messageCenter.on(
                e,
                function(t) {
                  this.trigger(e, t);
                },
                this,
              );
            },
            this,
          );
      }),
        (V.isDisposed = function() {
          return this._disposed;
        }),
        (V.clear = function() {
          this.setOption({ series: [] }, !0);
        }),
        (V.dispose = function() {
          if (!this._disposed) {
            (this._disposed = !0), b.setAttribute(this.getDom(), vt, '');
            var t = this._api,
              e = this._model;
            I(this._componentsViews, function(i) {
              i.dispose(e, t);
            }),
              I(this._chartsViews, function(i) {
                i.dispose(e, t);
              }),
              this._zr.dispose(),
              delete pt[this.id];
          }
        }),
        n.mixin(H, l),
        (ot.prototype = {
          constructor: ot,
          normalizeQuery: function(t) {
            var e = {},
              i = {},
              r = {};
            if (n.isString(t)) {
              var o = P(t);
              (e.mainType = o.main || null), (e.subType = o.sub || null);
            } else {
              var a = ['Index', 'Name', 'Id'],
                s = { name: 1, dataIndex: 1, dataType: 1 };
              n.each(t, function(t, n) {
                for (var o = !1, l = 0; l < a.length; l++) {
                  var c = a[l],
                    h = n.lastIndexOf(c);
                  if (h > 0 && h === n.length - c.length) {
                    var u = n.slice(0, h);
                    'data' !== u && ((e.mainType = u), (e[c.toLowerCase()] = t), (o = !0));
                  }
                }
                s.hasOwnProperty(n) && ((i[n] = t), (o = !0)), o || (r[n] = t);
              });
            }
            return { cptQuery: e, dataQuery: i, otherQuery: r };
          },
          filter: function(t, e, i) {
            var r = this.eventInfo;
            if (!r) return !0;
            var n = r.targetEl,
              o = r.packedEvent,
              a = r.model,
              s = r.view;
            if (!a || !s) return !0;
            var l = e.cptQuery,
              c = e.dataQuery;
            return (
              h(l, a, 'mainType') &&
              h(l, a, 'subType') &&
              h(l, a, 'index', 'componentIndex') &&
              h(l, a, 'name') &&
              h(l, a, 'id') &&
              h(c, o, 'name') &&
              h(c, o, 'dataIndex') &&
              h(c, o, 'dataType') &&
              (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, o))
            );
            function h(t, e, i, r) {
              return null == t[i] || e[r || i] === t[i];
            }
          },
          afterTrigger: function() {
            this.eventInfo = null;
          },
        });
      var at = {},
        st = {},
        lt = [],
        ct = [],
        ht = [],
        ut = [],
        dt = {},
        ft = {},
        pt = {},
        gt = {},
        mt = new Date() - 0,
        yt = new Date() - 0,
        vt = '_echarts_instance_';
      function xt(t) {
        gt[t] = !1;
      }
      var bt = xt;
      function _t(t) {
        return pt[b.getAttribute(t, vt)];
      }
      function St(t, e) {
        dt[t] = e;
      }
      function wt(t) {
        ct.push(t);
      }
      function Ct(t, e) {
        Mt(lt, t, e, E);
      }
      function Tt(t, e, i) {
        'function' == typeof e && ((i = e), (e = ''));
        var r = L(t) ? t.type : [t, (t = { event: e })][0];
        (t.event = (t.event || r).toLowerCase()),
          (e = t.event),
          D(F.test(r) && F.test(e)),
          at[r] || (at[r] = { action: i, actionInfo: t }),
          (st[e] = r);
      }
      function kt(t, e) {
        Mt(ut, t, e, B, 'visual');
      }
      function Mt(t, e, i, r, n) {
        (O(e) || L(e)) && ((i = e), (e = r));
        var o = T.wrapStageHandler(i, n);
        return (o.__prio = e), (o.__raw = i), t.push(o), o;
      }
      function At(t, e) {
        ft[t] = e;
      }
      kt(2e3, S),
        wt(f),
        Ct(5e3, p),
        At('default', C),
        Tt({ type: 'highlight', event: 'highlight', update: 'highlight' }, n.noop),
        Tt({ type: 'downplay', event: 'downplay', update: 'downplay' }, n.noop),
        St('light', k),
        St('dark', M),
        (e.version = '4.2.1'),
        (e.dependencies = { zrender: '4.0.6' }),
        (e.PRIORITY = R),
        (e.init = function(t, e, i) {
          var r = _t(t);
          if (r) return r;
          var n = new H(t, e, i);
          return (
            (n.id = 'ec_' + mt++),
            (pt[n.id] = n),
            b.setAttribute(t, vt, n.id),
            (function(t) {
              var e = '__connectUpdateStatus';
              function i(t, i) {
                for (var r = 0; r < t.length; r++) t[r][e] = i;
              }
              I(st, function(r, n) {
                t._messageCenter.on(n, function(r) {
                  if (gt[t.group] && 0 !== t[e]) {
                    if (r && r.escapeConnect) return;
                    var n = t.makeActionFromEvent(r),
                      o = [];
                    I(pt, function(e) {
                      e !== t && e.group === t.group && o.push(e);
                    }),
                      i(o, 0),
                      I(o, function(t) {
                        1 !== t[e] && t.dispatchAction(n);
                      }),
                      i(o, 2);
                  }
                });
              });
            })(n),
            n
          );
        }),
        (e.connect = function(t) {
          if (n.isArray(t)) {
            var e = t;
            (t = null),
              I(e, function(e) {
                null != e.group && (t = e.group);
              }),
              (t = t || 'g_' + yt++),
              I(e, function(e) {
                e.group = t;
              });
          }
          return (gt[t] = !0), t;
        }),
        (e.disConnect = xt),
        (e.disconnect = bt),
        (e.dispose = function(t) {
          'string' == typeof t ? (t = pt[t]) : t instanceof H || (t = _t(t)),
            t instanceof H && !t.isDisposed() && t.dispose();
        }),
        (e.getInstanceByDom = _t),
        (e.getInstanceById = function(t) {
          return pt[t];
        }),
        (e.registerTheme = St),
        (e.registerPreprocessor = wt),
        (e.registerProcessor = Ct),
        (e.registerPostUpdate = function(t) {
          ht.push(t);
        }),
        (e.registerAction = Tt),
        (e.registerCoordinateSystem = function(t, e) {
          u.register(t, e);
        }),
        (e.getCoordinateSystemDimensions = function(t) {
          var e = u.get(t);
          if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice();
        }),
        (e.registerLayout = function(t, e) {
          Mt(ut, t, e, 1e3, 'layout');
        }),
        (e.registerVisual = kt),
        (e.registerLoading = At),
        (e.extendComponentModel = function(t) {
          return g.extend(t);
        }),
        (e.extendComponentView = function(t) {
          return y.extend(t);
        }),
        (e.extendSeriesModel = function(t) {
          return m.extend(t);
        }),
        (e.extendChartView = function(t) {
          return v.extend(t);
        }),
        (e.setCanvasCreator = function(t) {
          n.$override('createCanvas', t);
        }),
        (e.registerMap = function(t, e, i) {
          A.registerMap(t, e, i);
        }),
        (e.getMap = function(t) {
          var e = A.retrieveMap(t);
          return e && e[0] && { geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas };
        }),
        (e.dataTool = {});
      var Dt = i('txkQ');
      !(function() {
        for (var t in Dt) Dt.hasOwnProperty(t) && (e[t] = Dt[t]);
      })();
    },
    'QBsz': function(t, e) {
      var i = 'undefined' == typeof Float32Array ? Array : Float32Array;
      function r(t) {
        return Math.sqrt(o(t));
      }
      var n = r;
      function o(t) {
        return t[0] * t[0] + t[1] * t[1];
      }
      var a = o;
      function s(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
      }
      var l = s;
      function c(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
      }
      var h = c;
      (e.create = function(t, e) {
        var r = new i(2);
        return null == t && (t = 0), null == e && (e = 0), (r[0] = t), (r[1] = e), r;
      }),
        (e.copy = function(t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), t;
        }),
        (e.clone = function(t) {
          var e = new i(2);
          return (e[0] = t[0]), (e[1] = t[1]), e;
        }),
        (e.set = function(t, e, i) {
          return (t[0] = e), (t[1] = i), t;
        }),
        (e.add = function(t, e, i) {
          return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), t;
        }),
        (e.scaleAndAdd = function(t, e, i, r) {
          return (t[0] = e[0] + i[0] * r), (t[1] = e[1] + i[1] * r), t;
        }),
        (e.sub = function(t, e, i) {
          return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), t;
        }),
        (e.len = r),
        (e.length = n),
        (e.lenSquare = o),
        (e.lengthSquare = a),
        (e.mul = function(t, e, i) {
          return (t[0] = e[0] * i[0]), (t[1] = e[1] * i[1]), t;
        }),
        (e.div = function(t, e, i) {
          return (t[0] = e[0] / i[0]), (t[1] = e[1] / i[1]), t;
        }),
        (e.dot = function(t, e) {
          return t[0] * e[0] + t[1] * e[1];
        }),
        (e.scale = function(t, e, i) {
          return (t[0] = e[0] * i), (t[1] = e[1] * i), t;
        }),
        (e.normalize = function(t, e) {
          var i = r(e);
          return 0 === i ? ((t[0] = 0), (t[1] = 0)) : ((t[0] = e[0] / i), (t[1] = e[1] / i)), t;
        }),
        (e.distance = s),
        (e.dist = l),
        (e.distanceSquare = c),
        (e.distSquare = h),
        (e.negate = function(t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), t;
        }),
        (e.lerp = function(t, e, i, r) {
          return (t[0] = e[0] + r * (i[0] - e[0])), (t[1] = e[1] + r * (i[1] - e[1])), t;
        }),
        (e.applyTransform = function(t, e, i) {
          var r = e[0],
            n = e[1];
          return (t[0] = i[0] * r + i[2] * n + i[4]), (t[1] = i[1] * r + i[3] * n + i[5]), t;
        }),
        (e.min = function(t, e, i) {
          return (t[0] = Math.min(e[0], i[0])), (t[1] = Math.min(e[1], i[1])), t;
        }),
        (e.max = function(t, e, i) {
          return (t[0] = Math.max(e[0], i[0])), (t[1] = Math.max(e[1], i[1])), t;
        });
    },
    'Qe9p': function(t, e, i) {
      var r = i('1RvN'),
        n = {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255, 1],
          antiquewhite: [250, 235, 215, 1],
          aqua: [0, 255, 255, 1],
          aquamarine: [127, 255, 212, 1],
          azure: [240, 255, 255, 1],
          beige: [245, 245, 220, 1],
          bisque: [255, 228, 196, 1],
          black: [0, 0, 0, 1],
          blanchedalmond: [255, 235, 205, 1],
          blue: [0, 0, 255, 1],
          blueviolet: [138, 43, 226, 1],
          brown: [165, 42, 42, 1],
          burlywood: [222, 184, 135, 1],
          cadetblue: [95, 158, 160, 1],
          chartreuse: [127, 255, 0, 1],
          chocolate: [210, 105, 30, 1],
          coral: [255, 127, 80, 1],
          cornflowerblue: [100, 149, 237, 1],
          cornsilk: [255, 248, 220, 1],
          crimson: [220, 20, 60, 1],
          cyan: [0, 255, 255, 1],
          darkblue: [0, 0, 139, 1],
          darkcyan: [0, 139, 139, 1],
          darkgoldenrod: [184, 134, 11, 1],
          darkgray: [169, 169, 169, 1],
          darkgreen: [0, 100, 0, 1],
          darkgrey: [169, 169, 169, 1],
          darkkhaki: [189, 183, 107, 1],
          darkmagenta: [139, 0, 139, 1],
          darkolivegreen: [85, 107, 47, 1],
          darkorange: [255, 140, 0, 1],
          darkorchid: [153, 50, 204, 1],
          darkred: [139, 0, 0, 1],
          darksalmon: [233, 150, 122, 1],
          darkseagreen: [143, 188, 143, 1],
          darkslateblue: [72, 61, 139, 1],
          darkslategray: [47, 79, 79, 1],
          darkslategrey: [47, 79, 79, 1],
          darkturquoise: [0, 206, 209, 1],
          darkviolet: [148, 0, 211, 1],
          deeppink: [255, 20, 147, 1],
          deepskyblue: [0, 191, 255, 1],
          dimgray: [105, 105, 105, 1],
          dimgrey: [105, 105, 105, 1],
          dodgerblue: [30, 144, 255, 1],
          firebrick: [178, 34, 34, 1],
          floralwhite: [255, 250, 240, 1],
          forestgreen: [34, 139, 34, 1],
          fuchsia: [255, 0, 255, 1],
          gainsboro: [220, 220, 220, 1],
          ghostwhite: [248, 248, 255, 1],
          gold: [255, 215, 0, 1],
          goldenrod: [218, 165, 32, 1],
          gray: [128, 128, 128, 1],
          green: [0, 128, 0, 1],
          greenyellow: [173, 255, 47, 1],
          grey: [128, 128, 128, 1],
          honeydew: [240, 255, 240, 1],
          hotpink: [255, 105, 180, 1],
          indianred: [205, 92, 92, 1],
          indigo: [75, 0, 130, 1],
          ivory: [255, 255, 240, 1],
          khaki: [240, 230, 140, 1],
          lavender: [230, 230, 250, 1],
          lavenderblush: [255, 240, 245, 1],
          lawngreen: [124, 252, 0, 1],
          lemonchiffon: [255, 250, 205, 1],
          lightblue: [173, 216, 230, 1],
          lightcoral: [240, 128, 128, 1],
          lightcyan: [224, 255, 255, 1],
          lightgoldenrodyellow: [250, 250, 210, 1],
          lightgray: [211, 211, 211, 1],
          lightgreen: [144, 238, 144, 1],
          lightgrey: [211, 211, 211, 1],
          lightpink: [255, 182, 193, 1],
          lightsalmon: [255, 160, 122, 1],
          lightseagreen: [32, 178, 170, 1],
          lightskyblue: [135, 206, 250, 1],
          lightslategray: [119, 136, 153, 1],
          lightslategrey: [119, 136, 153, 1],
          lightsteelblue: [176, 196, 222, 1],
          lightyellow: [255, 255, 224, 1],
          lime: [0, 255, 0, 1],
          limegreen: [50, 205, 50, 1],
          linen: [250, 240, 230, 1],
          magenta: [255, 0, 255, 1],
          maroon: [128, 0, 0, 1],
          mediumaquamarine: [102, 205, 170, 1],
          mediumblue: [0, 0, 205, 1],
          mediumorchid: [186, 85, 211, 1],
          mediumpurple: [147, 112, 219, 1],
          mediumseagreen: [60, 179, 113, 1],
          mediumslateblue: [123, 104, 238, 1],
          mediumspringgreen: [0, 250, 154, 1],
          mediumturquoise: [72, 209, 204, 1],
          mediumvioletred: [199, 21, 133, 1],
          midnightblue: [25, 25, 112, 1],
          mintcream: [245, 255, 250, 1],
          mistyrose: [255, 228, 225, 1],
          moccasin: [255, 228, 181, 1],
          navajowhite: [255, 222, 173, 1],
          navy: [0, 0, 128, 1],
          oldlace: [253, 245, 230, 1],
          olive: [128, 128, 0, 1],
          olivedrab: [107, 142, 35, 1],
          orange: [255, 165, 0, 1],
          orangered: [255, 69, 0, 1],
          orchid: [218, 112, 214, 1],
          palegoldenrod: [238, 232, 170, 1],
          palegreen: [152, 251, 152, 1],
          paleturquoise: [175, 238, 238, 1],
          palevioletred: [219, 112, 147, 1],
          papayawhip: [255, 239, 213, 1],
          peachpuff: [255, 218, 185, 1],
          peru: [205, 133, 63, 1],
          pink: [255, 192, 203, 1],
          plum: [221, 160, 221, 1],
          powderblue: [176, 224, 230, 1],
          purple: [128, 0, 128, 1],
          red: [255, 0, 0, 1],
          rosybrown: [188, 143, 143, 1],
          royalblue: [65, 105, 225, 1],
          saddlebrown: [139, 69, 19, 1],
          salmon: [250, 128, 114, 1],
          sandybrown: [244, 164, 96, 1],
          seagreen: [46, 139, 87, 1],
          seashell: [255, 245, 238, 1],
          sienna: [160, 82, 45, 1],
          silver: [192, 192, 192, 1],
          skyblue: [135, 206, 235, 1],
          slateblue: [106, 90, 205, 1],
          slategray: [112, 128, 144, 1],
          slategrey: [112, 128, 144, 1],
          snow: [255, 250, 250, 1],
          springgreen: [0, 255, 127, 1],
          steelblue: [70, 130, 180, 1],
          tan: [210, 180, 140, 1],
          teal: [0, 128, 128, 1],
          thistle: [216, 191, 216, 1],
          tomato: [255, 99, 71, 1],
          turquoise: [64, 224, 208, 1],
          violet: [238, 130, 238, 1],
          wheat: [245, 222, 179, 1],
          white: [255, 255, 255, 1],
          whitesmoke: [245, 245, 245, 1],
          yellow: [255, 255, 0, 1],
          yellowgreen: [154, 205, 50, 1],
        };
      function o(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t;
      }
      function a(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t;
      }
      function s(t) {
        return t.length && '%' === t.charAt(t.length - 1) ? o((parseFloat(t) / 100) * 255) : o(parseInt(t, 10));
      }
      function l(t) {
        return t.length && '%' === t.charAt(t.length - 1) ? a(parseFloat(t) / 100) : a(parseFloat(t));
      }
      function c(t, e, i) {
        return (
          i < 0 ? (i += 1) : i > 1 && (i -= 1),
          6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        );
      }
      function h(t, e, i) {
        return t + (e - t) * i;
      }
      function u(t, e, i, r, n) {
        return (t[0] = e), (t[1] = i), (t[2] = r), (t[3] = n), t;
      }
      function d(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      var f = new r(20),
        p = null;
      function g(t, e) {
        p && d(p, e), (p = f.put(t, p || e.slice()));
      }
      function m(t, e) {
        if (t) {
          e = e || [];
          var i = f.get(t);
          if (i) return d(e, i);
          var r,
            o = (t += '').replace(/ /g, '').toLowerCase();
          if (o in n) return d(e, n[o]), g(t, e), e;
          if ('#' === o.charAt(0))
            return 4 === o.length
              ? (r = parseInt(o.substr(1), 16)) >= 0 && r <= 4095
                ? (u(
                    e,
                    ((3840 & r) >> 4) | ((3840 & r) >> 8),
                    (240 & r) | ((240 & r) >> 4),
                    (15 & r) | ((15 & r) << 4),
                    1,
                  ),
                  g(t, e),
                  e)
                : void u(e, 0, 0, 0, 1)
              : 7 === o.length
              ? (r = parseInt(o.substr(1), 16)) >= 0 && r <= 16777215
                ? (u(e, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r, 1), g(t, e), e)
                : void u(e, 0, 0, 0, 1)
              : void 0;
          var a = o.indexOf('('),
            c = o.indexOf(')');
          if (-1 !== a && c + 1 === o.length) {
            var h = o.substr(0, a),
              p = o.substr(a + 1, c - (a + 1)).split(','),
              m = 1;
            switch (h) {
              case 'rgba':
                if (4 !== p.length) return void u(e, 0, 0, 0, 1);
                m = l(p.pop());
              case 'rgb':
                return 3 !== p.length ? void u(e, 0, 0, 0, 1) : (u(e, s(p[0]), s(p[1]), s(p[2]), m), g(t, e), e);
              case 'hsla':
                return 4 !== p.length ? void u(e, 0, 0, 0, 1) : ((p[3] = l(p[3])), y(p, e), g(t, e), e);
              case 'hsl':
                return 3 !== p.length ? void u(e, 0, 0, 0, 1) : (y(p, e), g(t, e), e);
              default:
                return;
            }
          }
          u(e, 0, 0, 0, 1);
        }
      }
      function y(t, e) {
        var i = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
          r = l(t[1]),
          n = l(t[2]),
          a = n <= 0.5 ? n * (r + 1) : n + r - n * r,
          s = 2 * n - a;
        return (
          u((e = e || []), o(255 * c(s, a, i + 1 / 3)), o(255 * c(s, a, i)), o(255 * c(s, a, i - 1 / 3)), 1),
          4 === t.length && (e[3] = t[3]),
          e
        );
      }
      function v(t, e, i) {
        if (e && e.length && t >= 0 && t <= 1) {
          i = i || [];
          var r = t * (e.length - 1),
            n = Math.floor(r),
            s = Math.ceil(r),
            l = e[n],
            c = e[s],
            u = r - n;
          return (
            (i[0] = o(h(l[0], c[0], u))),
            (i[1] = o(h(l[1], c[1], u))),
            (i[2] = o(h(l[2], c[2], u))),
            (i[3] = a(h(l[3], c[3], u))),
            i
          );
        }
      }
      var x = v;
      function b(t, e, i) {
        if (e && e.length && t >= 0 && t <= 1) {
          var r = t * (e.length - 1),
            n = Math.floor(r),
            s = Math.ceil(r),
            l = m(e[n]),
            c = m(e[s]),
            u = r - n,
            d = S([o(h(l[0], c[0], u)), o(h(l[1], c[1], u)), o(h(l[2], c[2], u)), a(h(l[3], c[3], u))], 'rgba');
          return i ? { color: d, leftIndex: n, rightIndex: s, value: r } : d;
        }
      }
      var _ = b;
      function S(t, e) {
        if (t && t.length) {
          var i = t[0] + ',' + t[1] + ',' + t[2];
          return ('rgba' !== e && 'hsva' !== e && 'hsla' !== e) || (i += ',' + t[3]), e + '(' + i + ')';
        }
      }
      (e.parse = m),
        (e.lift = function(t, e) {
          var i = m(t);
          if (i) {
            for (var r = 0; r < 3; r++)
              (i[r] = e < 0 ? (i[r] * (1 - e)) | 0 : ((255 - i[r]) * e + i[r]) | 0),
                i[r] > 255 ? (i[r] = 255) : t[r] < 0 && (i[r] = 0);
            return S(i, 4 === i.length ? 'rgba' : 'rgb');
          }
        }),
        (e.toHex = function(t) {
          var e = m(t);
          if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
        }),
        (e.fastLerp = v),
        (e.fastMapToColor = x),
        (e.lerp = b),
        (e.mapToColor = _),
        (e.modifyHSL = function(t, e, i, r) {
          if ((t = m(t)))
            return (
              (t = (function(t) {
                if (t) {
                  var e,
                    i,
                    r = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255,
                    a = Math.min(r, n, o),
                    s = Math.max(r, n, o),
                    l = s - a,
                    c = (s + a) / 2;
                  if (0 === l) (e = 0), (i = 0);
                  else {
                    i = c < 0.5 ? l / (s + a) : l / (2 - s - a);
                    var h = ((s - r) / 6 + l / 2) / l,
                      u = ((s - n) / 6 + l / 2) / l,
                      d = ((s - o) / 6 + l / 2) / l;
                    r === s ? (e = d - u) : n === s ? (e = 1 / 3 + h - d) : o === s && (e = 2 / 3 + u - h),
                      e < 0 && (e += 1),
                      e > 1 && (e -= 1);
                  }
                  var f = [360 * e, i, c];
                  return null != t[3] && f.push(t[3]), f;
                }
              })(t)),
              null != e && (t[0] = ((n = e), (n = Math.round(n)) < 0 ? 0 : n > 360 ? 360 : n)),
              null != i && (t[1] = l(i)),
              null != r && (t[2] = l(r)),
              S(y(t), 'rgba')
            );
          var n;
        }),
        (e.modifyAlpha = function(t, e) {
          if ((t = m(t)) && null != e) return (t[3] = a(e)), S(t, 'rgba');
        }),
        (e.stringify = S);
    },
    'Qk+/': function(t, e, i) {
      'use strict';
      var r,
        n = i('ofXK'),
        o = (i('AH3D'), i('cpAi'), i('Zfzs'), i('fXoL')),
        a =
          (((r = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: r })),
          (r.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || r)();
            },
            imports: [[n.c]],
          })),
          r);
      i.d(e, 'a', function() {
        return a;
      });
    },
    'QuXc': function(t, e) {
      var i = function(t) {
        this.colorStops = t || [];
      };
      (i.prototype = {
        constructor: i,
        addColorStop: function(t, e) {
          this.colorStops.push({ offset: t, color: e });
        },
      }),
        (t.exports = i);
    },
    'Qvb6': function(t, e, i) {
      var r = i('ProS'),
        n = i('bYtY'),
        o = i('ItGF'),
        a = i('B9fm'),
        s = i('gvm7'),
        l = i('7aKB'),
        c = i('OELB'),
        h = i('IwbS'),
        u = i('Ez2D'),
        d = i('+TT/'),
        f = i('Qxkt'),
        p = i('F9bG'),
        g = i('aX7z'),
        m = i('/y7N'),
        y = i('4NO4').getTooltipRenderMode,
        v = n.bind,
        x = n.each,
        b = c.parsePercent,
        _ = new h.Rect({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
        S = r.extendComponentView({
          type: 'tooltip',
          init: function(t, e) {
            if (!o.node) {
              var i,
                r = t.getComponent('tooltip').get('renderMode');
              (this._renderMode = y(r)),
                'html' === this._renderMode
                  ? ((i = new a(e.getDom(), e)), (this._newLine = '<br/>'))
                  : ((i = new s(e)), (this._newLine = '\n')),
                (this._tooltipContent = i);
            }
          },
          render: function(t, e, i) {
            if (!o.node) {
              this.group.removeAll(),
                (this._tooltipModel = t),
                (this._ecModel = e),
                (this._api = i),
                (this._lastDataByCoordSys = null),
                (this._alwaysShowContent = t.get('alwaysShowContent'));
              var r = this._tooltipContent;
              r.update(), r.setEnterable(t.get('enterable')), this._initGlobalListener(), this._keepShow();
            }
          },
          _initGlobalListener: function() {
            var t = this._tooltipModel.get('triggerOn');
            p.register(
              'itemTooltip',
              this._api,
              v(function(e, i, r) {
                'none' !== t && (t.indexOf(e) >= 0 ? this._tryShow(i, r) : 'leave' === e && this._hide(r));
              }, this),
            );
          },
          _keepShow: function() {
            var t = this._tooltipModel,
              e = this._ecModel,
              i = this._api;
            if (null != this._lastX && null != this._lastY && 'none' !== t.get('triggerOn')) {
              var r = this;
              clearTimeout(this._refreshUpdateTimeout),
                (this._refreshUpdateTimeout = setTimeout(function() {
                  r.manuallyShowTip(t, e, i, { x: r._lastX, y: r._lastY });
                }));
            }
          },
          manuallyShowTip: function(t, e, i, r) {
            if (r.from !== this.uid && !o.node) {
              var n = C(r, i);
              this._ticket = '';
              var a = r.dataByCoordSys;
              if (r.tooltip && null != r.x && null != r.y) {
                var s = _;
                (s.position = [r.x, r.y]),
                  s.update(),
                  (s.tooltip = r.tooltip),
                  this._tryShow({ offsetX: r.x, offsetY: r.y, target: s }, n);
              } else if (a)
                this._tryShow(
                  {
                    offsetX: r.x,
                    offsetY: r.y,
                    position: r.position,
                    event: {},
                    dataByCoordSys: r.dataByCoordSys,
                    tooltipOption: r.tooltipOption,
                  },
                  n,
                );
              else if (null != r.seriesIndex) {
                if (this._manuallyAxisShowTip(t, e, i, r)) return;
                var l = u(r, e),
                  c = l.point[0],
                  h = l.point[1];
                null != c &&
                  null != h &&
                  this._tryShow({ offsetX: c, offsetY: h, position: r.position, target: l.el, event: {} }, n);
              } else
                null != r.x &&
                  null != r.y &&
                  (i.dispatchAction({ type: 'updateAxisPointer', x: r.x, y: r.y }),
                  this._tryShow(
                    {
                      offsetX: r.x,
                      offsetY: r.y,
                      position: r.position,
                      target: i.getZr().findHover(r.x, r.y).target,
                      event: {},
                    },
                    n,
                  ));
            }
          },
          manuallyHideTip: function(t, e, i, r) {
            !this._alwaysShowContent &&
              this._tooltipModel &&
              this._tooltipContent.hideLater(this._tooltipModel.get('hideDelay')),
              (this._lastX = this._lastY = null),
              r.from !== this.uid && this._hide(C(r, i));
          },
          _manuallyAxisShowTip: function(t, e, i, r) {
            var n = r.seriesIndex,
              o = r.dataIndex,
              a = e.getComponent('axisPointer').coordSysAxesInfo;
            if (null != n && null != o && null != a) {
              var s = e.getSeriesByIndex(n);
              if (
                s &&
                'axis' === (t = w([s.getData().getItemModel(o), s, (s.coordinateSystem || {}).model, t])).get('trigger')
              )
                return (
                  i.dispatchAction({ type: 'updateAxisPointer', seriesIndex: n, dataIndex: o, position: r.position }),
                  !0
                );
            }
          },
          _tryShow: function(t, e) {
            var i = t.target;
            if (this._tooltipModel) {
              (this._lastX = t.offsetX), (this._lastY = t.offsetY);
              var r = t.dataByCoordSys;
              r && r.length
                ? this._showAxisTooltip(r, t)
                : i && null != i.dataIndex
                ? ((this._lastDataByCoordSys = null), this._showSeriesItemTooltip(t, i, e))
                : i && i.tooltip
                ? ((this._lastDataByCoordSys = null), this._showComponentItemTooltip(t, i, e))
                : ((this._lastDataByCoordSys = null), this._hide(e));
            }
          },
          _showOrMove: function(t, e) {
            var i = t.get('showDelay');
            (e = n.bind(e, this)), clearTimeout(this._showTimout), i > 0 ? (this._showTimout = setTimeout(e, i)) : e();
          },
          _showAxisTooltip: function(t, e) {
            var i = this._ecModel,
              r = [e.offsetX, e.offsetY],
              o = [],
              a = [],
              s = w([e.tooltipOption, this._tooltipModel]),
              c = this._renderMode,
              h = this._newLine,
              u = {};
            x(
              t,
              function(t) {
                x(t.dataByAxis, function(t) {
                  var e = i.getComponent(t.axisDim + 'Axis', t.axisIndex),
                    r = t.value,
                    s = [];
                  if (e && null != r) {
                    var d = m.getValueLabel(r, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
                    n.each(t.seriesDataIndices, function(o) {
                      var l = i.getSeriesByIndex(o.seriesIndex),
                        h = o.dataIndexInside,
                        f = l && l.getDataParams(h);
                      if (
                        ((f.axisDim = t.axisDim),
                        (f.axisIndex = t.axisIndex),
                        (f.axisType = t.axisType),
                        (f.axisId = t.axisId),
                        (f.axisValue = g.getAxisRawValue(e.axis, r)),
                        (f.axisValueLabel = d),
                        f)
                      ) {
                        a.push(f);
                        var p,
                          m = l.formatTooltip(h, !0, null, c);
                        n.isObject(m) ? ((p = m.html), n.merge(u, m.markers)) : (p = m), s.push(p);
                      }
                    });
                    var f = d;
                    o.push('html' !== c ? s.join(h) : (f ? l.encodeHTML(f) + h : '') + s.join(h));
                  }
                });
              },
              this,
            ),
              o.reverse(),
              (o = o.join(this._newLine + this._newLine));
            var d = e.position;
            this._showOrMove(s, function() {
              this._updateContentNotChangedOnAxis(t)
                ? this._updatePosition(s, d, r[0], r[1], this._tooltipContent, a)
                : this._showTooltipContent(s, o, a, Math.random(), r[0], r[1], d, void 0, u);
            });
          },
          _showSeriesItemTooltip: function(t, e, i) {
            var r = e.seriesIndex,
              o = this._ecModel.getSeriesByIndex(r),
              a = e.dataModel || o,
              s = e.dataIndex,
              l = e.dataType,
              c = a.getData(),
              h = w([c.getItemModel(s), a, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
              u = h.get('trigger');
            if (null == u || 'item' === u) {
              var d,
                f,
                p = a.getDataParams(s, l),
                g = a.formatTooltip(s, !1, l, this._renderMode);
              n.isObject(g) ? ((d = g.html), (f = g.markers)) : ((d = g), (f = null));
              var m = 'item_' + a.name + '_' + s;
              this._showOrMove(h, function() {
                this._showTooltipContent(h, d, p, m, t.offsetX, t.offsetY, t.position, t.target, f);
              }),
                i({ type: 'showTip', dataIndexInside: s, dataIndex: c.getRawIndex(s), seriesIndex: r, from: this.uid });
            }
          },
          _showComponentItemTooltip: function(t, e, i) {
            var r = e.tooltip;
            'string' == typeof r && (r = { content: r, formatter: r });
            var n = new f(r, this._tooltipModel, this._ecModel),
              o = n.get('content'),
              a = Math.random();
            this._showOrMove(n, function() {
              this._showTooltipContent(n, o, n.get('formatterParams') || {}, a, t.offsetX, t.offsetY, t.position, e);
            }),
              i({ type: 'showTip', from: this.uid });
          },
          _showTooltipContent: function(t, e, i, r, n, o, a, s, c) {
            if (((this._ticket = ''), t.get('showContent') && t.get('show'))) {
              var h = this._tooltipContent,
                u = t.get('formatter');
              a = a || t.get('position');
              var d = e;
              if (u && 'string' == typeof u) d = l.formatTpl(u, i, !0);
              else if ('function' == typeof u) {
                var f = v(function(e, r) {
                  e === this._ticket && (h.setContent(r, c, t), this._updatePosition(t, a, n, o, h, i, s));
                }, this);
                (this._ticket = r), (d = u(i, r, f));
              }
              h.setContent(d, c, t), h.show(t), this._updatePosition(t, a, n, o, h, i, s);
            }
          },
          _updatePosition: function(t, e, i, r, o, a, s) {
            var l = this._api.getWidth(),
              c = this._api.getHeight();
            e = e || t.get('position');
            var h = o.getSize(),
              u = t.get('align'),
              f = t.get('verticalAlign'),
              p = s && s.getBoundingRect().clone();
            if (
              (s && p.applyTransform(s.transform),
              'function' == typeof e && (e = e([i, r], a, o.el, p, { viewSize: [l, c], contentSize: h.slice() })),
              n.isArray(e))
            )
              (i = b(e[0], l)), (r = b(e[1], c));
            else if (n.isObject(e)) {
              (e.width = h[0]), (e.height = h[1]);
              var g = d.getLayoutRect(e, { width: l, height: c });
              (i = g.x), (r = g.y), (u = null), (f = null);
            } else if ('string' == typeof e && s) {
              var m = (function(t, e, i) {
                var r = i[0],
                  n = i[1],
                  o = 0,
                  a = 0,
                  s = e.width,
                  l = e.height;
                switch (t) {
                  case 'inside':
                    (o = e.x + s / 2 - r / 2), (a = e.y + l / 2 - n / 2);
                    break;
                  case 'top':
                    (o = e.x + s / 2 - r / 2), (a = e.y - n - 5);
                    break;
                  case 'bottom':
                    (o = e.x + s / 2 - r / 2), (a = e.y + l + 5);
                    break;
                  case 'left':
                    (o = e.x - r - 5), (a = e.y + l / 2 - n / 2);
                    break;
                  case 'right':
                    (o = e.x + s + 5), (a = e.y + l / 2 - n / 2);
                }
                return [o, a];
              })(e, p, h);
              (i = m[0]), (r = m[1]);
            } else
              (m = (function(t, e, i, r, n, o, a) {
                var s = i.getOuterSize(),
                  l = s.width,
                  c = s.height;
                return (
                  null != o && (t + l + o > r ? (t -= l + o) : (t += o)),
                  null != a && (e + c + a > n ? (e -= c + a) : (e += a)),
                  [t, e]
                );
              })(i, r, o, l, c, u ? null : 20, f ? null : 20)),
                (i = m[0]),
                (r = m[1]);
            u && (i -= T(u) ? h[0] / 2 : 'right' === u ? h[0] : 0),
              f && (r -= T(f) ? h[1] / 2 : 'bottom' === f ? h[1] : 0),
              t.get('confine') &&
                ((m = (function(t, e, i, r, n) {
                  var o = i.getOuterSize(),
                    a = o.width,
                    s = o.height;
                  return (
                    (t = Math.min(t + a, r) - a),
                    (e = Math.min(e + s, n) - s),
                    [(t = Math.max(t, 0)), (e = Math.max(e, 0))]
                  );
                })(i, r, o, l, c)),
                (i = m[0]),
                (r = m[1])),
              o.moveTo(i, r);
          },
          _updateContentNotChangedOnAxis: function(t) {
            var e = this._lastDataByCoordSys,
              i = !!e && e.length === t.length;
            return (
              i &&
                x(e, function(e, r) {
                  var n = e.dataByAxis || {},
                    o = (t[r] || {}).dataByAxis || [];
                  (i &= n.length === o.length) &&
                    x(n, function(t, e) {
                      var r = o[e] || {},
                        n = t.seriesDataIndices || [],
                        a = r.seriesDataIndices || [];
                      (i &=
                        t.value === r.value &&
                        t.axisType === r.axisType &&
                        t.axisId === r.axisId &&
                        n.length === a.length) &&
                        x(n, function(t, e) {
                          var r = a[e];
                          i &= t.seriesIndex === r.seriesIndex && t.dataIndex === r.dataIndex;
                        });
                    });
                }),
              (this._lastDataByCoordSys = t),
              !!i
            );
          },
          _hide: function(t) {
            (this._lastDataByCoordSys = null), t({ type: 'hideTip', from: this.uid });
          },
          dispose: function(t, e) {
            o.node || (this._tooltipContent.hide(), p.unregister('itemTooltip', e));
          },
        });
      function w(t) {
        for (var e = t.pop(); t.length; ) {
          var i = t.pop();
          i &&
            (f.isInstance(i) && (i = i.get('tooltip', !0)),
            'string' == typeof i && (i = { formatter: i }),
            (e = new f(i, e, e.ecModel)));
        }
        return e;
      }
      function C(t, e) {
        return t.dispatchAction || n.bind(e.dispatchAction, e);
      }
      function T(t) {
        return 'center' === t || 'middle' === t;
      }
      t.exports = S;
    },
    'Qxkt': function(t, e, i) {
      var r = i('bYtY'),
        n = i('ItGF'),
        o = i('4NO4').makeInner,
        a = i('Yl7c'),
        s = a.enableClassExtend,
        l = a.enableClassCheck,
        c = i('OQFs'),
        h = i('m9t5'),
        u = i('/iHx'),
        d = i('VR9l'),
        f = r.mixin,
        p = o();
      function g(t, e, i) {
        (this.parentModel = e), (this.ecModel = i), (this.option = t);
      }
      function m(t, e, i) {
        for (var r = 0; r < e.length && (!e[r] || null != (t = t && 'object' == typeof t ? t[e[r]] : null)); r++);
        return null == t && i && (t = i.get(e)), t;
      }
      function y(t, e) {
        var i = p(t).getParent;
        return i ? i.call(t, e) : t.parentModel;
      }
      (g.prototype = {
        constructor: g,
        init: null,
        mergeOption: function(t) {
          r.merge(this.option, t, !0);
        },
        get: function(t, e) {
          return null == t ? this.option : m(this.option, this.parsePath(t), !e && y(this, t));
        },
        getShallow: function(t, e) {
          var i = this.option,
            r = null == i ? i : i[t],
            n = !e && y(this, t);
          return null == r && n && (r = n.getShallow(t)), r;
        },
        getModel: function(t, e) {
          var i;
          return new g(
            null == t ? this.option : m(this.option, (t = this.parsePath(t))),
            (e = e || ((i = y(this, t)) && i.getModel(t))),
            this.ecModel,
          );
        },
        isEmpty: function() {
          return null == this.option;
        },
        restoreData: function() {},
        clone: function() {
          return new (0, this.constructor)(r.clone(this.option));
        },
        setReadOnly: function(t) {},
        parsePath: function(t) {
          return 'string' == typeof t && (t = t.split('.')), t;
        },
        customizeGetParent: function(t) {
          p(this).getParent = t;
        },
        isAnimationEnabled: function() {
          if (!n.node) {
            if (null != this.option.animation) return !!this.option.animation;
            if (this.parentModel) return this.parentModel.isAnimationEnabled();
          }
        },
      }),
        s(g),
        l(g),
        f(g, c),
        f(g, h),
        f(g, u),
        f(g, d),
        (t.exports = g);
    },
    'RDYZ': function(t, e, i) {
      var r = i('dMvE');
      function n(t) {
        (this._target = t.target),
          (this._life = t.life || 1e3),
          (this._delay = t.delay || 0),
          (this._initialized = !1),
          (this.loop = null != t.loop && t.loop),
          (this.gap = t.gap || 0),
          (this.easing = t.easing || 'Linear'),
          (this.onframe = t.onframe),
          (this.ondestroy = t.ondestroy),
          (this.onrestart = t.onrestart),
          (this._pausedTime = 0),
          (this._paused = !1);
      }
      (n.prototype = {
        constructor: n,
        step: function(t, e) {
          if ((this._initialized || ((this._startTime = t + this._delay), (this._initialized = !0)), this._paused))
            this._pausedTime += e;
          else {
            var i = (t - this._startTime - this._pausedTime) / this._life;
            if (!(i < 0)) {
              i = Math.min(i, 1);
              var n = this.easing,
                o = 'string' == typeof n ? r[n] : n,
                a = 'function' == typeof o ? o(i) : i;
              return (
                this.fire('frame', a),
                1 === i ? (this.loop ? (this.restart(t), 'restart') : ((this._needsRemove = !0), 'destroy')) : null
              );
            }
          }
        },
        restart: function(t) {
          (this._startTime = t - ((t - this._startTime - this._pausedTime) % this._life) + this.gap),
            (this._pausedTime = 0),
            (this._needsRemove = !1);
        },
        fire: function(t, e) {
          this[(t = 'on' + t)] && this[t](this._target, e);
        },
        pause: function() {
          this._paused = !0;
        },
        resume: function() {
          this._paused = !1;
        },
      }),
        (t.exports = n);
    },
    'RXMa': function(t, e, i) {
      var r = i('y+Vt').extend({
        type: 'ring',
        shape: { cx: 0, cy: 0, r: 0, r0: 0 },
        buildPath: function(t, e) {
          var i = e.cx,
            r = e.cy,
            n = 2 * Math.PI;
          t.moveTo(i + e.r, r), t.arc(i, r, e.r, 0, n, !1), t.moveTo(i + e.r0, r), t.arc(i, r, e.r0, 0, n, !0);
        },
      });
      t.exports = r;
    },
    'SKnc': function(t, e, i) {
      var r = i('bYtY'),
        n = i('QuXc'),
        o = function(t, e, i, r, o, a) {
          (this.x = null == t ? 0 : t),
            (this.y = null == e ? 0 : e),
            (this.x2 = null == i ? 1 : i),
            (this.y2 = null == r ? 0 : r),
            (this.type = 'linear'),
            (this.global = a || !1),
            n.call(this, o);
        };
      (o.prototype = { constructor: o }), r.inherits(o, n), (t.exports = o);
    },
    'SKx+': function(t, e, i) {
      var r = i('ProS').extendComponentModel({
        type: 'axisPointer',
        coordSysAxesInfo: null,
        defaultOption: {
          show: 'auto',
          triggerOn: null,
          zlevel: 0,
          z: 50,
          type: 'line',
          snap: !1,
          triggerTooltip: !0,
          value: null,
          status: null,
          link: [],
          animation: null,
          animationDurationUpdate: 200,
          lineStyle: { color: '#aaa', width: 1, type: 'solid' },
          shadowStyle: { color: 'rgba(150,150,150,0.3)' },
          label: {
            show: !0,
            formatter: null,
            precision: 'auto',
            margin: 3,
            color: '#fff',
            padding: [5, 7, 5, 7],
            backgroundColor: 'auto',
            borderColor: null,
            borderWidth: 0,
            shadowBlur: 3,
            shadowColor: '#aaa',
          },
          handle: {
            show: !1,
            icon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
            size: 45,
            margin: 50,
            color: '#333',
            shadowBlur: 3,
            shadowColor: '#aaa',
            shadowOffsetX: 0,
            shadowOffsetY: 2,
            throttle: 40,
          },
        },
      });
      t.exports = r;
    },
    'SUKs': function(t, e, i) {
      var r = i('LPTA').debugMode,
        n = function() {};
      1 === r
        ? (n = function() {
            for (var t in arguments) throw new Error(arguments[t]);
          })
        : r > 1 &&
          (n = function() {
            for (var t in arguments) console.log(arguments[t]);
          }),
        (t.exports = n);
    },
    'Sj9i': function(t, e, i) {
      var r = i('QBsz'),
        n = r.create,
        o = r.distSquare,
        a = Math.pow,
        s = Math.sqrt,
        l = 1e-8,
        c = s(3),
        h = n(),
        u = n(),
        d = n();
      function f(t) {
        return t > -l && t < l;
      }
      function p(t) {
        return t > l || t < -l;
      }
      function g(t, e, i, r, n) {
        var o = 1 - n;
        return o * o * (o * t + 3 * n * e) + n * n * (n * r + 3 * o * i);
      }
      function m(t, e, i, r) {
        var n = 1 - r;
        return n * (n * t + 2 * r * e) + r * r * i;
      }
      (e.cubicAt = g),
        (e.cubicDerivativeAt = function(t, e, i, r, n) {
          var o = 1 - n;
          return 3 * (((e - t) * o + 2 * (i - e) * n) * o + (r - i) * n * n);
        }),
        (e.cubicRootAt = function(t, e, i, r, n, o) {
          var l = r + 3 * (e - i) - t,
            h = 3 * (i - 2 * e + t),
            u = 3 * (e - t),
            d = t - n,
            p = h * h - 3 * l * u,
            g = h * u - 9 * l * d,
            m = u * u - 3 * h * d,
            y = 0;
          if (f(p) && f(g)) f(h) ? (o[0] = 0) : (A = -u / h) >= 0 && A <= 1 && (o[y++] = A);
          else {
            var v = g * g - 4 * p * m;
            if (f(v)) {
              var x = g / p,
                b = -x / 2;
              (A = -h / l + x) >= 0 && A <= 1 && (o[y++] = A), b >= 0 && b <= 1 && (o[y++] = b);
            } else if (v > 0) {
              var _ = s(v),
                S = p * h + 1.5 * l * (-g + _),
                w = p * h + 1.5 * l * (-g - _);
              (A =
                (-h - ((S = S < 0 ? -a(-S, 1 / 3) : a(S, 1 / 3)) + (w = w < 0 ? -a(-w, 1 / 3) : a(w, 1 / 3)))) /
                (3 * l)) >= 0 &&
                A <= 1 &&
                (o[y++] = A);
            } else {
              var C = (2 * p * h - 3 * l * g) / (2 * s(p * p * p)),
                T = Math.acos(C) / 3,
                k = s(p),
                M = Math.cos(T),
                A = (-h - 2 * k * M) / (3 * l),
                D = ((b = (-h + k * (M + c * Math.sin(T))) / (3 * l)), (-h + k * (M - c * Math.sin(T))) / (3 * l));
              A >= 0 && A <= 1 && (o[y++] = A), b >= 0 && b <= 1 && (o[y++] = b), D >= 0 && D <= 1 && (o[y++] = D);
            }
          }
          return y;
        }),
        (e.cubicExtrema = function(t, e, i, r, n) {
          var o = 6 * i - 12 * e + 6 * t,
            a = 9 * e + 3 * r - 3 * t - 9 * i,
            l = 3 * e - 3 * t,
            c = 0;
          if (f(a)) p(o) && (u = -l / o) >= 0 && u <= 1 && (n[c++] = u);
          else {
            var h = o * o - 4 * a * l;
            if (f(h)) n[0] = -o / (2 * a);
            else if (h > 0) {
              var u,
                d = s(h),
                g = (-o - d) / (2 * a);
              (u = (-o + d) / (2 * a)) >= 0 && u <= 1 && (n[c++] = u), g >= 0 && g <= 1 && (n[c++] = g);
            }
          }
          return c;
        }),
        (e.cubicSubdivide = function(t, e, i, r, n, o) {
          var a = (e - t) * n + t,
            s = (i - e) * n + e,
            l = (r - i) * n + i,
            c = (s - a) * n + a,
            h = (l - s) * n + s,
            u = (h - c) * n + c;
          (o[0] = t), (o[1] = a), (o[2] = c), (o[3] = u), (o[4] = u), (o[5] = h), (o[6] = l), (o[7] = r);
        }),
        (e.cubicProjectPoint = function(t, e, i, r, n, a, l, c, f, p, m) {
          var y,
            v,
            x,
            b,
            _,
            S = 0.005,
            w = 1 / 0;
          (h[0] = f), (h[1] = p);
          for (var C = 0; C < 1; C += 0.05)
            (u[0] = g(t, i, n, l, C)), (u[1] = g(e, r, a, c, C)), (b = o(h, u)) < w && ((y = C), (w = b));
          w = 1 / 0;
          for (var T = 0; T < 32 && !(S < 1e-4); T++)
            (x = y + S),
              (u[0] = g(t, i, n, l, (v = y - S))),
              (u[1] = g(e, r, a, c, v)),
              (b = o(u, h)),
              v >= 0 && b < w
                ? ((y = v), (w = b))
                : ((d[0] = g(t, i, n, l, x)),
                  (d[1] = g(e, r, a, c, x)),
                  (_ = o(d, h)),
                  x <= 1 && _ < w ? ((y = x), (w = _)) : (S *= 0.5));
          return m && ((m[0] = g(t, i, n, l, y)), (m[1] = g(e, r, a, c, y))), s(w);
        }),
        (e.quadraticAt = m),
        (e.quadraticDerivativeAt = function(t, e, i, r) {
          return 2 * ((1 - r) * (e - t) + r * (i - e));
        }),
        (e.quadraticRootAt = function(t, e, i, r, n) {
          var o = t - 2 * e + i,
            a = 2 * (e - t),
            l = t - r,
            c = 0;
          if (f(o)) p(a) && (u = -l / a) >= 0 && u <= 1 && (n[c++] = u);
          else {
            var h = a * a - 4 * o * l;
            if (f(h)) (u = -a / (2 * o)) >= 0 && u <= 1 && (n[c++] = u);
            else if (h > 0) {
              var u,
                d = s(h),
                g = (-a - d) / (2 * o);
              (u = (-a + d) / (2 * o)) >= 0 && u <= 1 && (n[c++] = u), g >= 0 && g <= 1 && (n[c++] = g);
            }
          }
          return c;
        }),
        (e.quadraticExtremum = function(t, e, i) {
          var r = t + i - 2 * e;
          return 0 === r ? 0.5 : (t - e) / r;
        }),
        (e.quadraticSubdivide = function(t, e, i, r, n) {
          var o = (e - t) * r + t,
            a = (i - e) * r + e,
            s = (a - o) * r + o;
          (n[0] = t), (n[1] = o), (n[2] = s), (n[3] = s), (n[4] = a), (n[5] = i);
        }),
        (e.quadraticProjectPoint = function(t, e, i, r, n, a, l, c, f) {
          var p,
            g = 0.005,
            y = 1 / 0;
          (h[0] = l), (h[1] = c);
          for (var v = 0; v < 1; v += 0.05)
            (u[0] = m(t, i, n, v)), (u[1] = m(e, r, a, v)), (S = o(h, u)) < y && ((p = v), (y = S));
          y = 1 / 0;
          for (var x = 0; x < 32 && !(g < 1e-4); x++) {
            var b = p - g,
              _ = p + g;
            (u[0] = m(t, i, n, b)), (u[1] = m(e, r, a, b));
            var S = o(u, h);
            if (b >= 0 && S < y) (p = b), (y = S);
            else {
              (d[0] = m(t, i, n, _)), (d[1] = m(e, r, a, _));
              var w = o(d, h);
              _ <= 1 && w < y ? ((p = _), (y = w)) : (g *= 0.5);
            }
          }
          return f && ((f[0] = m(t, i, n, p)), (f[1] = m(e, r, a, p))), s(y);
        });
    },
    'Sp2Z': function(t, e, i) {
      var r = i('IwbS'),
        n = i('3LNs'),
        o = i('/y7N'),
        a = i('AVZG'),
        s = i('Znkb'),
        l = n.extend({
          makeElOption: function(t, e, i, r, n) {
            var s = i.axis,
              l = s.grid,
              u = r.get('type'),
              d = c(l, s)
                .getOtherAxis(s)
                .getGlobalExtent(),
              f = s.toGlobalCoord(s.dataToCoord(e, !0));
            if (u && 'none' !== u) {
              var p = o.buildElStyle(r),
                g = h[u](s, f, d, p);
              (g.style = p), (t.graphicKey = g.type), (t.pointer = g);
            }
            var m = a.layout(l.model, i);
            o.buildCartesianSingleLabelElOption(e, t, m, i, r, n);
          },
          getHandleTransform: function(t, e, i) {
            var r = a.layout(e.axis.grid.model, e, { labelInside: !1 });
            return (
              (r.labelMargin = i.get('handle.margin')),
              {
                position: o.getTransformedPosition(e.axis, t, r),
                rotation: r.rotation + (r.labelDirection < 0 ? Math.PI : 0),
              }
            );
          },
          updateHandleTransform: function(t, e, i, r) {
            var n = i.axis,
              o = n.grid,
              a = n.getGlobalExtent(!0),
              s = c(o, n)
                .getOtherAxis(n)
                .getGlobalExtent(),
              l = 'x' === n.dim ? 0 : 1,
              h = t.position;
            (h[l] += e[l]), (h[l] = Math.min(a[1], h[l])), (h[l] = Math.max(a[0], h[l]));
            var u = (s[1] + s[0]) / 2,
              d = [u, u];
            return (
              (d[l] = h[l]),
              {
                position: h,
                rotation: t.rotation,
                cursorPoint: d,
                tooltipOption: [{ verticalAlign: 'middle' }, { align: 'center' }][l],
              }
            );
          },
        });
      function c(t, e) {
        var i = {};
        return (i[e.dim + 'AxisIndex'] = e.index), t.getCartesian(i);
      }
      var h = {
        line: function(t, e, i, n) {
          var a = o.makeLineShape([e, i[0]], [e, i[1]], u(t));
          return r.subPixelOptimizeLine({ shape: a, style: n }), { type: 'Line', shape: a };
        },
        shadow: function(t, e, i, r) {
          var n = Math.max(1, t.getBandWidth());
          return { type: 'Rect', shape: o.makeRectShape([e - n / 2, i[0]], [n, i[1] - i[0]], u(t)) };
        },
      };
      function u(t) {
        return 'x' === t.dim ? 0 : 1;
      }
      s.registerAxisPointerClass('CartesianAxisPointer', l), (t.exports = l);
    },
    'SqI9': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('iXp4'),
        o = r.extend({
          type: 'sector',
          shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
          brush: n(r.prototype.brush),
          buildPath: function(t, e) {
            var i = e.cx,
              r = e.cy,
              n = Math.max(e.r0 || 0, 0),
              o = Math.max(e.r, 0),
              a = e.startAngle,
              s = e.endAngle,
              l = e.clockwise,
              c = Math.cos(a),
              h = Math.sin(a);
            t.moveTo(c * n + i, h * n + r),
              t.lineTo(c * o + i, h * o + r),
              t.arc(i, r, o, a, s, !l),
              t.lineTo(Math.cos(s) * n + i, Math.sin(s) * n + r),
              0 !== n && t.arc(i, r, n, s, a, l),
              t.closePath();
          },
        });
      t.exports = o;
    },
    'SrGk': function(t, e, i) {
      var r = i('hydK').createElement,
        n = i('bYtY'),
        o = i('y+Vt'),
        a = i('Dagg'),
        s = i('dqUG'),
        l = i('P47w'),
        c = l.path,
        h = l.image,
        u = l.text;
      function d(t, e, i, r, n) {
        (this._zrId = t),
          (this._svgRoot = e),
          (this._tagNames = 'string' == typeof i ? [i] : i),
          (this._markLabel = r),
          (this._domName = n || '_dom'),
          (this.nextId = 0);
      }
      (d.prototype.createElement = r),
        (d.prototype.getDefs = function(t) {
          var e = this._svgRoot,
            i = this._svgRoot.getElementsByTagName('defs');
          return 0 === i.length
            ? t
              ? ((i = e.insertBefore(this.createElement('defs'), e.firstChild)).contains ||
                  (i.contains = function(t) {
                    var e = i.children;
                    if (!e) return !1;
                    for (var r = e.length - 1; r >= 0; --r) if (e[r] === t) return !0;
                    return !1;
                  }),
                i)
              : null
            : i[0];
        }),
        (d.prototype.update = function(t, e) {
          if (t) {
            var i = this.getDefs(!1);
            if (t[this._domName] && i.contains(t[this._domName])) 'function' == typeof e && e(t);
            else {
              var r = this.add(t);
              r && (t[this._domName] = r);
            }
          }
        }),
        (d.prototype.addDom = function(t) {
          this.getDefs(!0).appendChild(t);
        }),
        (d.prototype.removeDom = function(t) {
          var e = this.getDefs(!1);
          e && t[this._domName] && (e.removeChild(t[this._domName]), (t[this._domName] = null));
        }),
        (d.prototype.getDoms = function() {
          var t = this.getDefs(!1);
          if (!t) return [];
          var e = [];
          return (
            n.each(this._tagNames, function(i) {
              var r = t.getElementsByTagName(i);
              e = e.concat([].slice.call(r));
            }),
            e
          );
        }),
        (d.prototype.markAllUnused = function() {
          var t = this.getDoms(),
            e = this;
          n.each(t, function(t) {
            t[e._markLabel] = '0';
          });
        }),
        (d.prototype.markUsed = function(t) {
          t && (t[this._markLabel] = '1');
        }),
        (d.prototype.removeUnused = function() {
          var t = this.getDefs(!1);
          if (t) {
            var e = this.getDoms(),
              i = this;
            n.each(e, function(e) {
              '1' !== e[i._markLabel] && t.removeChild(e);
            });
          }
        }),
        (d.prototype.getSvgProxy = function(t) {
          return t instanceof o ? c : t instanceof a ? h : t instanceof s ? u : c;
        }),
        (d.prototype.getTextSvgElement = function(t) {
          return t.__textSvgEl;
        }),
        (d.prototype.getSvgElement = function(t) {
          return t.__svgEl;
        }),
        (t.exports = d);
    },
    'T4UG': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = i('ItGF'),
        o = i('7aKB'),
        a = o.formatTime,
        s = o.encodeHTML,
        l = o.addCommas,
        c = o.getTooltipMarker,
        h = i('4NO4'),
        u = i('bLfw'),
        d = i('5Hur'),
        f = i('OKJ2'),
        p = i('+TT/'),
        g = p.getLayoutParams,
        m = p.mergeLayoutParam,
        y = i('9H2F').createTask,
        v = i('D5nY'),
        x = v.prepareSource,
        b = v.getSource,
        _ = i('KxfA').retrieveRawValue,
        S = h.makeInner(),
        w = u.extend({
          type: 'series.__base__',
          seriesIndex: 0,
          coordinateSystem: null,
          defaultOption: null,
          legendDataProvider: null,
          visualColorAccessPath: 'itemStyle.color',
          layoutMode: null,
          init: function(t, e, i, r) {
            (this.seriesIndex = this.componentIndex),
              (this.dataTask = y({ count: T, reset: k })),
              (this.dataTask.context = { model: this }),
              this.mergeDefaultAndTheme(t, i),
              x(this);
            var n = this.getInitialData(t, i);
            A(n, this), (this.dataTask.context.data = n), (S(this).dataBeforeProcessed = n), C(this);
          },
          mergeDefaultAndTheme: function(t, e) {
            var i = this.layoutMode,
              n = i ? g(t) : {},
              o = this.subType;
            u.hasClass(o) && (o += 'Series'),
              r.merge(t, e.getTheme().get(this.subType)),
              r.merge(t, this.getDefaultOption()),
              h.defaultEmphasis(t, 'label', ['show']),
              this.fillDataTextStyle(t.data),
              i && m(t, n, i);
          },
          mergeOption: function(t, e) {
            (t = r.merge(this.option, t, !0)), this.fillDataTextStyle(t.data);
            var i = this.layoutMode;
            i && m(this.option, t, i), x(this);
            var n = this.getInitialData(t, e);
            A(n, this),
              this.dataTask.dirty(),
              (this.dataTask.context.data = n),
              (S(this).dataBeforeProcessed = n),
              C(this);
          },
          fillDataTextStyle: function(t) {
            if (t && !r.isTypedArray(t))
              for (var e = ['show'], i = 0; i < t.length; i++)
                t[i] && t[i].label && h.defaultEmphasis(t[i], 'label', e);
          },
          getInitialData: function() {},
          appendData: function(t) {
            this.getRawData().appendData(t.data);
          },
          getData: function(t) {
            var e = I(this);
            if (e) {
              var i = e.context.data;
              return null == t ? i : i.getLinkedData(t);
            }
            return S(this).data;
          },
          setData: function(t) {
            var e = I(this);
            if (e) {
              var i = e.context;
              i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()),
                (i.outputData = t),
                e !== this.dataTask && (i.data = t);
            }
            S(this).data = t;
          },
          getSource: function() {
            return b(this);
          },
          getRawData: function() {
            return S(this).dataBeforeProcessed;
          },
          getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
          },
          formatTooltip: function(t, e, i, n) {
            var o = this,
              u = 'html' === (n = n || 'html') ? '<br/>' : '\n',
              d = 'richText' === n,
              f = {},
              p = 0,
              g = this.getData(),
              m = g.mapDimension('defaultedTooltip', !0),
              y = m.length,
              v = this.getRawValue(t),
              x = r.isArray(v),
              b = g.getItemVisual(t, 'color');
            r.isObject(b) && b.colorStops && (b = (b.colorStops[0] || {}).color), (b = b || 'transparent');
            var S,
              w = (y > 1 || (x && !y)
                ? (function(i) {
                    var h = r.reduce(
                        i,
                        function(t, e, i) {
                          var r = g.getDimensionInfo(i);
                          return t | (r && !1 !== r.tooltip && null != r.displayName);
                        },
                        0,
                      ),
                      u = [];
                    function y(t, i) {
                      var r = g.getDimensionInfo(i);
                      if (r && !1 !== r.otherDims.tooltip) {
                        var m = r.type,
                          y = 'sub' + o.seriesIndex + 'at' + p,
                          v = c({ color: b, type: 'subItem', renderMode: n, markerId: y }),
                          x =
                            (h ? ('string' == typeof v ? v : v.content) + s(r.displayName || '-') + ': ' : '') +
                            s('ordinal' === m ? t + '' : 'time' === m ? (e ? '' : a('yyyy/MM/dd hh:mm:ss', t)) : l(t));
                        x && u.push(x), d && ((f[y] = b), ++p);
                      }
                    }
                    m.length
                      ? r.each(m, function(e) {
                          y(_(g, t, e), e);
                        })
                      : r.each(i, y);
                    var v = h ? (d ? '\n' : '<br/>') : '',
                      x = v + u.join(v || ', ');
                    return { renderMode: n, content: x, style: f };
                  })(v)
                : ((S = y ? _(g, t, m[0]) : x ? v[0] : v), { renderMode: n, content: s(l(S)), style: f })
              ).content,
              C = o.seriesIndex + 'at' + p,
              T = c({ color: b, type: 'item', renderMode: n, markerId: C });
            (f[C] = b), ++p;
            var k = g.getName(t),
              M = this.name;
            h.isNameSpecified(this) || (M = ''), (M = M ? s(M) + (e ? ': ' : u) : '');
            var A = 'string' == typeof T ? T : T.content;
            return { html: e ? A + M + w : M + A + (k ? s(k) + ': ' + w : w), markers: f };
          },
          isAnimationEnabled: function() {
            if (n.node) return !1;
            var t = this.getShallow('animation');
            return t && this.getData().count() > this.getShallow('animationThreshold') && (t = !1), t;
          },
          restoreData: function() {
            this.dataTask.dirty();
          },
          getColorFromPalette: function(t, e, i) {
            var r = this.ecModel,
              n = d.getColorFromPalette.call(this, t, e, i);
            return n || (n = r.getColorFromPalette(t, e, i)), n;
          },
          coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0);
          },
          getProgressive: function() {
            return this.get('progressive');
          },
          getProgressiveThreshold: function() {
            return this.get('progressiveThreshold');
          },
          getAxisTooltipData: null,
          getTooltipPosition: null,
          pipeTask: null,
          preventIncremental: null,
          pipelineContext: null,
        });
      function C(t) {
        var e = t.name;
        h.isNameSpecified(t) ||
          (t.name =
            (function(t) {
              var e = t.getRawData(),
                i = e.mapDimension('seriesName', !0),
                n = [];
              return (
                r.each(i, function(t) {
                  var i = e.getDimensionInfo(t);
                  i.displayName && n.push(i.displayName);
                }),
                n.join(' ')
              );
            })(t) || e);
      }
      function T(t) {
        return t.model.getRawData().count();
      }
      function k(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), M;
      }
      function M(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
      }
      function A(t, e) {
        r.each(t.CHANGABLE_METHODS, function(i) {
          t.wrapMethod(i, r.curry(D, e));
        });
      }
      function D(t) {
        var e = I(t);
        e && e.setOutputEnd(this.count());
      }
      function I(t) {
        var e = (t.ecModel || {}).scheduler,
          i = e && e.getPipeline(t.uid);
        if (i) {
          var r = i.currentTask;
          if (r) {
            var n = r.agentStubMap;
            n && (r = n.get(t.uid));
          }
          return r;
        }
      }
      r.mixin(w, f), r.mixin(w, d), (t.exports = w);
    },
    'T6xi': function(t, e, i) {
      var r = i('YgsL'),
        n = i('nCxF');
      e.buildPath = function(t, e, i) {
        var o = e.points,
          a = e.smooth;
        if (o && o.length >= 2) {
          if (a && 'spline' !== a) {
            var s = n(o, a, i, e.smoothConstraint);
            t.moveTo(o[0][0], o[0][1]);
            for (var l = o.length, c = 0; c < (i ? l : l - 1); c++) {
              var h = s[2 * c],
                u = s[2 * c + 1],
                d = o[(c + 1) % l];
              t.bezierCurveTo(h[0], h[1], u[0], u[1], d[0], d[1]);
            }
          } else {
            'spline' === a && (o = r(o, i)), t.moveTo(o[0][0], o[0][1]), (c = 1);
            for (var f = o.length; c < f; c++) t.lineTo(o[c][0], o[c][1]);
          }
          i && t.closePath();
        }
      };
    },
    'Tghj': function(t, e) {
      var i;
      'undefined' != typeof window ? (i = window.__DEV__) : 'undefined' != typeof global && (i = global.__DEV__),
        void 0 === i && (i = !0),
        (e.__DEV__ = i);
    },
    'UUrH': function(t, e, i) {
      'use strict';
      var r = i('o7kS'),
        n = i('ProS'),
        o = {
          color: ['#305b9e', '#0076a9', '#1d8daa', '#51a2a8', '#7fb5aa', '#aac6b4', '#CFD8C8', '#ECEBE4'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#ECEBE4', borderColor: '#305b9e' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#305b9e',
                color0: 'transparent',
                borderColor: '#305b9e',
                borderColor0: '#1d8daa',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#305b9e', '#0076a9', '#1d8daa', '#51a2a8', '#7fb5aa', '#aac6b4', '#CFD8C8', '#ECEBE4'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#f7ac4f' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f7ac4f', borderColor: 'rgba(254,198,77,0.6)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: {
            color: ['#305b9e', '#0076a9', '#1d8daa', '#51a2a8', '#7fb5aa', '#aac6b4', '#CFD8C8', '#ECEBE4'],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        a = {
          color: ['#0098c9', '#6ab1d7', '#a0cae4', '#ffbb9c', '#fd986d', '#f3753f'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#ffbb9c', borderColor: '#0098c9' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#f3753f',
                color0: 'transparent',
                borderColor: '#f3753f',
                borderColor0: '#0098c9',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#0098c9', '#6ab1d7', '#a0cae4', '#ffbb9c', '#fd986d', '#f3753f'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#394851' } }, emphasis: { textStyle: { color: 'rgb(57,72,81)' } } },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#394851' } }, emphasis: { textStyle: { color: 'rgb(57,72,81)' } } },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#aaaaaa' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#fec64d' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f3753f', borderColor: 'rgba(255,178,72,0.41)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: { color: ['#0098c9', '#6ab1d7', '#a0cae4', '#FFBB9C', '#FD986D', '#F3753F'] },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        s = {
          color: ['#00b2b1', '#69c6c4', '#a0d9d7', '#ffbb9c', '#fd986d', '#f3753f'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#a0d9d7', borderColor: '#00b2b1' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#f3753f',
                color0: 'transparent',
                borderColor: '#f3753f',
                borderColor0: '#00b2b1',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#00b2b1', '#69c6c4', '#a0d9d7', '#ffbb9c', '#fd986d', '#f3753f'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#007373' } },
              emphasis: { textStyle: { color: 'rgb(0,115,115)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#007373' } },
              emphasis: { textStyle: { color: 'rgb(0,115,115)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#fec64d' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f3753f', borderColor: 'rgba(255,178,72,0.41)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: { color: ['#00b2b1', '#69c6c4', '#a0d9d7', '#ffbb9c', '#fd986d', '#f3753f'] },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        l = {
          color: ['#007e7d', '#977ed2', '#d58a9c', '#97b6eb', '#ceccbb', '#f2dfd8'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#f2dfd8', borderColor: '#007e7d' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#977ed2',
                color0: 'transparent',
                borderColor: '#977ed2',
                borderColor0: '#007e7d',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#007e7d', '#977ed2', '#d58a9c', '#97b6eb', '#ceccbb', '#f2dfd8'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#f7ac4f' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f7ac4f', borderColor: 'rgba(254,198,77,0.6)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: { color: ['#007e7d', '#977ed2', '#d58a9c', '#97b6eb', '#ceccbb', '#f2dfd8'] },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        c = {
          color: ['#523e85', '#8b4f8f', '#b96595', '#e0829a', '#ffa3a2', '#f9b8a3', '#f1ccb1', '#ebddc8'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#ffa3a2', borderColor: '#523e85' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#8b4f8f',
                color0: '#ffa3a2',
                borderColor: '#8b4f8f',
                borderColor0: '#ffa3a2',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#523e85', '#8b4f8f', '#b96595', '#e0829a', '#ffa3a2', '#f9b8a3', '#f1ccb1', '#ebddc8'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(255,178,72,1)', borderColor: '#eb8146', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#523e85' } },
              emphasis: { textStyle: { color: 'rgb(82,62,133)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(255,178,72,1)', borderColor: '#eb8146', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#523e85' } },
              emphasis: { textStyle: { color: 'rgb(82,62,133)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#523e85', width: 1 },
            itemStyle: { normal: { color: '#523e85', borderWidth: 1 }, emphasis: { color: '#ffb248' } },
            controlStyle: {
              normal: { color: '#523e85', borderColor: '#523e85', borderWidth: 0.5 },
              emphasis: { color: '#523e85', borderColor: '#523e85', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#eb8146', borderColor: 'rgba(255,178,72,0.41)' },
            label: { normal: { textStyle: { color: '#523e85' } }, emphasis: { textStyle: { color: '#523e85' } } },
          },
          visualMap: {
            color: ['#523e85', '#8b4f8f', '#b96595', '#e0829a', '#ffa3a2', '#f9b8a3', '#f1ccb1', '#ebddc8'],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        h = {
          color: ['#005e7d', '#c54b17', '#009392', '#f5bb3c', '#0098c9', '#f58b5e', '#59cecd', '#fee2a6'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#fee2a6', borderColor: '#005e7d' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#0098c9',
                color0: 'transparent',
                borderColor: '#0098c9',
                borderColor0: '#c54b17',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#005e7d', '#c54b17', '#009392', '#f5bb3c', '#0098c9', '#f58b5e', '#59cecd', '#fee2a6'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#f7ac4f' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f7ac4f', borderColor: 'rgba(254,198,77,0.6)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: {
            color: ['#005e7d', '#c54b17', '#009392', '#f5bb3c', '#0098c9', '#f58b5e', '#59cecd', '#fee2a6'],
          },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        u = {
          color: ['#4d5b62', '#008ab6', '#f3753f', '#2cc0bf', '#fed887'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#fed887', borderColor: '#4d5b62' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#977ed2',
                color0: 'transparent',
                borderColor: '#977ed2',
                borderColor0: '#009d9c',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#4d5b62', '#008ab6', '#f3753f', '#2cc0bf', '#fed887'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: { normal: { textStyle: { color: '#00475e' } }, emphasis: { textStyle: { color: 'rgb(0,71,94)' } } },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#f7ac4f' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f7ac4f', borderColor: 'rgba(254,198,77,0.6)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: { color: ['#4d5b62', '#008ab6', '#f3753f', '#2cc0bf', '#fed887'] },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        d = {
          color: ['#667279', '#979ea4', '#caced0', '#ffbb9c', '#fd986d', '#F3753F'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#ffbb9c', borderColor: '#667279' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#f3753f',
                color0: 'transparent',
                borderColor: '#f3753f',
                borderColor0: '#667279',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#667279', '#979ea4', '#caced0', '#ffbb9c', '#fd986d', '#F3753F'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#999999' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#fec64d' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f3753f', borderColor: 'rgba(255,178,72,0.41)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: { color: ['#667279', '#979ea4', '#caced0', '#ffbb9c', '#fd986d', '#F3753F'] },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        },
        f = {
          color: ['#565a83', '#7c5c91', '#a85a90', '#cf5880', '#ea5f64', '#f3753f'],
          backgroundColor: 'transparent',
          textStyle: {},
          title: { textStyle: { color: '#aaaaaa' }, subtextStyle: { color: '#aaaaaa' } },
          tree: { itemStyle: { color: '#a85a90', borderColor: '#565a83' } },
          line: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          radar: {
            itemStyle: { normal: { borderWidth: '2' } },
            lineStyle: { normal: { width: '2' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
          },
          bar: {
            itemStyle: {
              normal: { barBorderWidth: 0, barBorderColor: '#ccc' },
              emphasis: { barBorderWidth: 0, barBorderColor: '#ccc' },
            },
          },
          pie: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          scatter: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          boxplot: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          parallel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          sankey: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          funnel: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          gauge: {
            itemStyle: {
              normal: { borderWidth: 0, borderColor: '#ccc' },
              emphasis: { borderWidth: 0, borderColor: '#ccc' },
            },
          },
          candlestick: {
            itemStyle: {
              normal: {
                color: '#f3753f',
                color0: 'transparent',
                borderColor: '#f3753f',
                borderColor0: '#667279',
                borderWidth: '2',
              },
            },
          },
          graph: {
            itemStyle: { normal: { borderWidth: 0, borderColor: '#ccc' } },
            lineStyle: { normal: { width: 1, color: '#aaaaaa' } },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: !0,
            color: ['#565a83', '#7c5c91', '#a85a90', '#cf5880', '#ea5f64', '#f3753f'],
            label: { normal: { textStyle: { color: '#ffffff' } } },
          },
          map: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          geo: {
            itemStyle: {
              normal: { areaColor: '#f3f3f3', borderColor: '#999999', borderWidth: 0.5 },
              emphasis: { areaColor: 'rgba(254,198,77,1)', borderColor: '#ecaf2b', borderWidth: 1 },
            },
            label: {
              normal: { textStyle: { color: '#667279' } },
              emphasis: { textStyle: { color: 'rgb(102,114,121)' } },
            },
          },
          categoryAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          valueAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          logAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          timeAxis: {
            axisLine: { show: !0, lineStyle: { color: '#aaaaaa' } },
            axisTick: { show: !1, lineStyle: { color: '#333' } },
            axisLabel: { show: !0, textStyle: { color: '#999999' } },
            splitLine: { show: !0, lineStyle: { color: ['#e6e6e6'] } },
            splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'] } },
          },
          toolbox: { iconStyle: { normal: { borderColor: '#999999' }, emphasis: { borderColor: '#666666' } } },
          legend: { textStyle: { color: '#000000' } },
          tooltip: {
            axisPointer: { lineStyle: { color: '#cccccc', width: 1 }, crossStyle: { color: '#cccccc', width: 1 } },
          },
          timeline: {
            lineStyle: { color: '#666666', width: 1 },
            itemStyle: { normal: { color: '#666666', borderWidth: 1 }, emphasis: { color: '#fec64d' } },
            controlStyle: {
              normal: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
              emphasis: { color: '#666666', borderColor: '#666666', borderWidth: 0.5 },
            },
            checkpointStyle: { color: '#f3753f', borderColor: 'rgba(255,178,72,0.41)' },
            label: { normal: { textStyle: { color: '#666666' } }, emphasis: { textStyle: { color: '#666666' } } },
          },
          visualMap: { color: ['#565a83', '#7c5c91', '#a85a90', '#cf5880', '#ea5f64', '#f3753f'] },
          dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: { color: '#aaaaaa' },
          },
          markPoint: {
            label: { normal: { textStyle: { color: '#ffffff' } }, emphasis: { textStyle: { color: '#ffffff' } } },
          },
        };
      function p(t, e) {
        n.registerTheme(t, e);
      }
      function g() {
        p('aqua-splash', o),
          p('california-coast', a),
          p('hawaiian-sunrise', s),
          p('passion-flower', l),
          p('razzleberry-pie', c),
          p('teradata-classic', h),
          p('teradata-default', u),
          p('urban-sunrise', d),
          p('volcanic-eruption', f);
      }
      function m() {
        return [
          'aqua-splash',
          'california-coast',
          'hawaiian-sunrise',
          'passion-flower',
          'razzleberry-pie',
          'teradata-classic',
          'teradata-default',
          'urban-sunrise',
          'volcanic-eruption',
        ];
      }
      i.d(e, 'a', function() {
        return r.a;
      }),
        i.d(e, 'c', function() {
          return g;
        }),
        i.d(e, 'b', function() {
          return m;
        });
    },
    'VR9l': function(t, e, i) {
      var r = i('KCsZ')([
        ['fill', 'color'],
        ['stroke', 'borderColor'],
        ['lineWidth', 'borderWidth'],
        ['opacity'],
        ['shadowBlur'],
        ['shadowOffsetX'],
        ['shadowOffsetY'],
        ['shadowColor'],
        ['textPosition'],
        ['textAlign'],
      ]);
      t.exports = {
        getItemStyle: function(t, e) {
          var i = r(this, t, e),
            n = this.getBorderLineDash();
          return n && (i.lineDash = n), i;
        },
        getBorderLineDash: function() {
          var t = this.get('borderType');
          return 'solid' === t || null == t ? null : 'dashed' === t ? [5, 5] : [1, 1];
        },
      };
    },
    'VpOo': function(t, e) {
      e.buildPath = function(t, e) {
        var i,
          r,
          n,
          o,
          a,
          s = e.x,
          l = e.y,
          c = e.width,
          h = e.height,
          u = e.r;
        c < 0 && ((s += c), (c = -c)),
          h < 0 && ((l += h), (h = -h)),
          'number' == typeof u
            ? (i = r = n = o = u)
            : u instanceof Array
            ? 1 === u.length
              ? (i = r = n = o = u[0])
              : 2 === u.length
              ? ((i = n = u[0]), (r = o = u[1]))
              : 3 === u.length
              ? ((i = u[0]), (r = o = u[1]), (n = u[2]))
              : ((i = u[0]), (r = u[1]), (n = u[2]), (o = u[3]))
            : (i = r = n = o = 0),
          i + r > c && ((i *= c / (a = i + r)), (r *= c / a)),
          n + o > c && ((n *= c / (a = n + o)), (o *= c / a)),
          r + n > h && ((r *= h / (a = r + n)), (n *= h / a)),
          i + o > h && ((i *= h / (a = i + o)), (o *= h / a)),
          t.moveTo(s + i, l),
          t.lineTo(s + c - r, l),
          0 !== r && t.arc(s + c - r, l + r, r, -Math.PI / 2, 0),
          t.lineTo(s + c, l + h - n),
          0 !== n && t.arc(s + c - n, l + h - n, n, 0, Math.PI / 2),
          t.lineTo(s + o, l + h),
          0 !== o && t.arc(s + o, l + h - o, o, Math.PI / 2, Math.PI),
          t.lineTo(s, l + i),
          0 !== i && t.arc(s + i, l + i, i, Math.PI, 1.5 * Math.PI);
      };
    },
    'WKB1': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return a;
      });
      var r = i('zHPi'),
        n = i('fXoL'),
        o = i('em/+'),
        a = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'xAxis', t))
              );
            }
            return _inherits(e, t), e;
          })(r.a);
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(n.Sb(o.b));
            }),
            (t.ɵcmp = n.Mb({
              type: t,
              selectors: [['td-chart-x-axis']],
              inputs: {
                config: 'config',
                id: 'id',
                show: 'show',
                gridIndex: 'gridIndex',
                offset: 'offset',
                type: 'type',
                name: 'name',
                nameLocation: 'nameLocation',
                nameTextStyle: 'nameTextStyle',
                nameGap: 'nameGap',
                nameRotate: 'nameRotate',
                inverse: 'inverse',
                boundaryGap: 'boundaryGap',
                min: 'min',
                max: 'max',
                scale: 'scale',
                minInterval: 'minInterval',
                interval: 'interval',
                logBase: 'logBase',
                silent: 'silent',
                triggerEvent: 'triggerEvent',
                axisLine: 'axisLine',
                axisTick: 'axisTick',
                axisLabel: 'axisLabel',
                splitLine: 'splitLine',
                splitArea: 'splitArea',
                data: 'data',
                axisPointer: 'axisPointer',
                zlevel: 'zlevel',
                z: 'z',
                position: 'position',
              },
              features: [n.Ab],
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'Xmg4': function(t, e, i) {
      var r = i('bYtY'),
        n = i('LPTA').devicePixelRatio,
        o = i('K2GJ'),
        a = i('3C/r');
      function s() {
        return !1;
      }
      function l(t, e, i) {
        var n = r.createCanvas(),
          o = e.getWidth(),
          a = e.getHeight(),
          s = n.style;
        return (
          s &&
            ((s.position = 'absolute'),
            (s.left = 0),
            (s.top = 0),
            (s.width = o + 'px'),
            (s.height = a + 'px'),
            n.setAttribute('data-zr-dom-id', t)),
          (n.width = o * i),
          (n.height = a * i),
          n
        );
      }
      var c = function(t, e, i) {
        var o;
        (i = i || n),
          'string' == typeof t ? (o = l(t, e, i)) : r.isObject(t) && (t = (o = t).id),
          (this.id = t),
          (this.dom = o);
        var a = o.style;
        a &&
          ((o.onselectstart = s),
          (a['-webkit-user-select'] = 'none'),
          (a['user-select'] = 'none'),
          (a['-webkit-touch-callout'] = 'none'),
          (a['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)'),
          (a.padding = 0),
          (a.margin = 0),
          (a['border-width'] = 0)),
          (this.domBack = null),
          (this.ctxBack = null),
          (this.painter = e),
          (this.config = null),
          (this.clearColor = 0),
          (this.motionBlur = !1),
          (this.lastFrameAlpha = 0.7),
          (this.dpr = i);
      };
      (c.prototype = {
        constructor: c,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
          return this.__endIndex - this.__startIndex;
        },
        initContext: function() {
          (this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr);
        },
        createBackBuffer: function() {
          var t = this.dpr;
          (this.domBack = l('back-' + this.id, this.painter, t)),
            (this.ctxBack = this.domBack.getContext('2d')),
            1 !== t && this.ctxBack.scale(t, t);
        },
        resize: function(t, e) {
          var i = this.dpr,
            r = this.dom,
            n = r.style,
            o = this.domBack;
          n && ((n.width = t + 'px'), (n.height = e + 'px')),
            (r.width = t * i),
            (r.height = e * i),
            o && ((o.width = t * i), (o.height = e * i), 1 !== i && this.ctxBack.scale(i, i));
        },
        clear: function(t, e) {
          var i,
            r = this.dom,
            n = this.ctx,
            s = r.width,
            l = r.height,
            c = ((e = e || this.clearColor), this.motionBlur && !t),
            h = this.lastFrameAlpha,
            u = this.dpr;
          if (
            (c &&
              (this.domBack || this.createBackBuffer(),
              (this.ctxBack.globalCompositeOperation = 'copy'),
              this.ctxBack.drawImage(r, 0, 0, s / u, l / u)),
            n.clearRect(0, 0, s, l),
            e &&
              'transparent' !== e &&
              (e.colorStops
                ? ((i = e.__canvasGradient || o.getGradient(n, e, { x: 0, y: 0, width: s, height: l })),
                  (e.__canvasGradient = i))
                : e.image && (i = a.prototype.getCanvasPattern.call(e, n)),
              n.save(),
              (n.fillStyle = i || e),
              n.fillRect(0, 0, s, l),
              n.restore()),
            c)
          ) {
            var d = this.domBack;
            n.save(), (n.globalAlpha = h), n.drawImage(d, 0, 0, s, l), n.restore();
          }
        },
      }),
        (t.exports = c);
    },
    'Xnb7': function(t, e, i) {
      var r = new (i('1RvN'))(50);
      function n() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
          var i = t.pending[e],
            r = i.cb;
          r && r(this, i.cbPayload), i.hostEl.dirty();
        }
        t.pending.length = 0;
      }
      function o(t) {
        return t && t.width && t.height;
      }
      (e.findExistImage = function(t) {
        if ('string' == typeof t) {
          var e = r.get(t);
          return e && e.image;
        }
        return t;
      }),
        (e.createOrUpdateImage = function(t, e, i, a, s) {
          if (t) {
            if ('string' == typeof t) {
              if ((e && e.__zrImageSrc === t) || !i) return e;
              var l = r.get(t),
                c = { hostEl: i, cb: a, cbPayload: s };
              return (
                l
                  ? !o((e = l.image)) && l.pending.push(c)
                  : (((e = new Image()).onload = e.onerror = n),
                    r.put(t, (e.__cachedImgObj = { image: e, pending: [c] })),
                    (e.src = e.__zrImageSrc = t)),
                e
              );
            }
            return t;
          }
          return e;
        }),
        (e.isImageReady = o);
    },
    'Y0Ja': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return a;
      });
      var r = i('zHPi'),
        n = i('fXoL'),
        o = i('em/+'),
        a = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'yAxis', t))
              );
            }
            return _inherits(e, t), e;
          })(r.a);
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(n.Sb(o.b));
            }),
            (t.ɵcmp = n.Mb({
              type: t,
              selectors: [['td-chart-y-axis']],
              inputs: {
                config: 'config',
                id: 'id',
                show: 'show',
                gridIndex: 'gridIndex',
                offset: 'offset',
                type: 'type',
                name: 'name',
                nameLocation: 'nameLocation',
                nameTextStyle: 'nameTextStyle',
                nameGap: 'nameGap',
                nameRotate: 'nameRotate',
                inverse: 'inverse',
                boundaryGap: 'boundaryGap',
                min: 'min',
                max: 'max',
                scale: 'scale',
                minInterval: 'minInterval',
                interval: 'interval',
                logBase: 'logBase',
                silent: 'silent',
                triggerEvent: 'triggerEvent',
                axisLine: 'axisLine',
                axisTick: 'axisTick',
                axisLabel: 'axisLabel',
                splitLine: 'splitLine',
                splitArea: 'splitArea',
                data: 'data',
                axisPointer: 'axisPointer',
                zlevel: 'zlevel',
                z: 'z',
                position: 'position',
              },
              features: [n.Ab],
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'YH21': function(t, e, i) {
      var r = i('H6uX');
      e.Dispatcher = r;
      var n = i('ItGF'),
        o = 'undefined' != typeof window && !!window.addEventListener,
        a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
      function s(t, e, i, r) {
        return (
          (i = i || {}),
          r || !n.canvasSupported
            ? l(t, e, i)
            : n.browser.firefox && null != e.layerX && e.layerX !== e.offsetX
            ? ((i.zrX = e.layerX), (i.zrY = e.layerY))
            : null != e.offsetX
            ? ((i.zrX = e.offsetX), (i.zrY = e.offsetY))
            : l(t, e, i),
          i
        );
      }
      function l(t, e, i) {
        var r = (function(t) {
          return t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0, top: 0 };
        })(t);
        (i.zrX = e.clientX - r.left), (i.zrY = e.clientY - r.top);
      }
      var c = o
        ? function(t) {
            t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
          }
        : function(t) {
            (t.returnValue = !1), (t.cancelBubble = !0);
          };
      (e.clientToLocal = s),
        (e.normalizeEvent = function(t, e, i) {
          if (null != (e = e || window.event).zrX) return e;
          var r = e.type;
          if (r && r.indexOf('touch') >= 0) {
            var n = 'touchend' !== r ? e.targetTouches[0] : e.changedTouches[0];
            n && s(t, n, e, i);
          } else s(t, e, e, i), (e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3);
          var o = e.button;
          return (
            null == e.which && void 0 !== o && a.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
          );
        }),
        (e.addEventListener = function(t, e, i) {
          o ? t.addEventListener(e, i) : t.attachEvent('on' + e, i);
        }),
        (e.removeEventListener = function(t, e, i) {
          o ? t.removeEventListener(e, i) : t.detachEvent('on' + e, i);
        }),
        (e.stop = c),
        (e.isMiddleOrRightButtonOnMouseUpDown = function(t) {
          return 2 === t.which || 3 === t.which;
        }),
        (e.notLeftMouse = function(t) {
          return t.which > 1;
        });
    },
    'YXkt': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = i('Qxkt'),
        o = i('gPAo'),
        a = i('7G+c'),
        s = i('KxfA'),
        l = s.defaultDimValueGetters,
        c = s.DefaultDataProvider,
        h = i('L0Ub').summarizeDimensions,
        u = r.isObject,
        d = -1,
        f = 'e\0\0',
        p = {
          float: 'undefined' == typeof Float64Array ? Array : Float64Array,
          int: 'undefined' == typeof Int32Array ? Array : Int32Array,
          ordinal: Array,
          number: Array,
          time: Array,
        },
        g = 'undefined' == typeof Uint32Array ? Array : Uint32Array,
        m = 'undefined' == typeof Int32Array ? Array : Int32Array,
        y = 'undefined' == typeof Uint16Array ? Array : Uint16Array;
      function v(t) {
        return t._rawCount > 65535 ? g : y;
      }
      var x = [
          'hasItemOption',
          '_nameList',
          '_idList',
          '_invertedIndicesMap',
          '_rawData',
          '_chunkSize',
          '_chunkCount',
          '_dimValueGetter',
          '_count',
          '_rawCount',
          '_nameDimIdx',
          '_idDimIdx',
        ],
        b = ['_extent', '_approximateExtent', '_rawExtent'];
      function _(t, e) {
        r.each(x.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }),
          (t.__wrappedMethods = e.__wrappedMethods),
          r.each(b, function(i) {
            t[i] = r.clone(e[i]);
          }),
          (t._calculationInfo = r.extend(e._calculationInfo));
      }
      var S = function(t, e) {
          t = t || ['x', 'y'];
          for (var i = {}, n = [], o = {}, a = 0; a < t.length; a++) {
            var s = t[a];
            r.isString(s) && (s = { name: s });
            var l = s.name;
            (s.type = s.type || 'float'),
              s.coordDim || ((s.coordDim = l), (s.coordDimIndex = 0)),
              (s.otherDims = s.otherDims || {}),
              n.push(l),
              (i[l] = s),
              (s.index = a),
              s.createInvertedIndices && (o[l] = []);
          }
          (this.dimensions = n),
            (this._dimensionInfos = i),
            (this.hostModel = e),
            (this._indices = null),
            (this._count = 0),
            (this._rawCount = 0),
            (this._storage = {}),
            (this._nameList = []),
            (this._idList = []),
            (this._optionModels = []),
            (this._visual = {}),
            (this._layout = {}),
            (this._itemVisuals = []),
            (this.hasItemVisual = {}),
            (this._itemLayouts = []),
            (this._graphicEls = []),
            (this._chunkSize = 1e5),
            (this._chunkCount = 0),
            (this._rawExtent = {}),
            (this._extent = {}),
            (this._approximateExtent = {}),
            (this._dimensionsSummary = h(this)),
            (this._invertedIndicesMap = o),
            (this._calculationInfo = {});
        },
        w = S.prototype;
      function C(t, e, i, r, n) {
        var o = p[e.type],
          a = r - 1,
          s = e.name,
          l = t[s][a];
        if (l && l.length < i) {
          for (var c = new o(Math.min(n - a * i, i)), h = 0; h < l.length; h++) c[h] = l[h];
          t[s][a] = c;
        }
        for (var u = r * i; u < n; u += i) t[s].push(new o(Math.min(n - u, i)));
      }
      function T(t) {
        var e = t._invertedIndicesMap;
        r.each(e, function(i, r) {
          var n = t._dimensionInfos[r].ordinalMeta;
          if (n) {
            i = e[r] = new m(n.categories.length);
            for (var o = 0; o < i.length; o++) i[o] = d;
            for (o = 0; o < t._count; o++) i[t.get(r, o)] = o;
          }
        });
      }
      function k(t, e, i) {
        var r;
        if (null != e) {
          var n = t._chunkSize,
            o = Math.floor(i / n),
            a = t.dimensions[e],
            s = t._storage[a][o];
          if (s) {
            r = s[i % n];
            var l = t._dimensionInfos[a].ordinalMeta;
            l && l.categories.length && (r = l.categories[r]);
          }
        }
        return r;
      }
      function M(t) {
        return t;
      }
      function A(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
      }
      function D(t, e) {
        var i = t._idList[e];
        return null == i && (i = k(t, t._idDimIdx, e)), null == i && (i = f + e), i;
      }
      function I(t) {
        return r.isArray(t) || (t = [t]), t;
      }
      function O(t, e) {
        var i = t.dimensions,
          n = new S(r.map(i, t.getDimensionInfo, t), t.hostModel);
        _(n, t);
        for (var o = (n._storage = {}), a = t._storage, s = 0; s < i.length; s++) {
          var l = i[s];
          a[l] &&
            (r.indexOf(e, l) >= 0
              ? ((o[l] = L(a[l])), (n._rawExtent[l] = [1 / 0, -1 / 0]), (n._extent[l] = null))
              : (o[l] = a[l]));
        }
        return n;
      }
      function L(t) {
        for (var e, i, r = new Array(t.length), n = 0; n < t.length; n++)
          r[n] = ((i = void 0), (i = (e = t[n]).constructor) === Array ? e.slice() : new i(e));
        return r;
      }
      (w.type = 'list'),
        (w.hasItemOption = !0),
        (w.getDimension = function(t) {
          return isNaN(t) || (t = this.dimensions[t] || t), t;
        }),
        (w.getDimensionInfo = function(t) {
          return this._dimensionInfos[this.getDimension(t)];
        }),
        (w.getDimensionsOnCoord = function() {
          return this._dimensionsSummary.dataDimsOnCoord.slice();
        }),
        (w.mapDimension = function(t, e) {
          var i = this._dimensionsSummary;
          if (null == e) return i.encodeFirstDimNotExtra[t];
          var r = i.encode[t];
          return !0 === e ? (r || []).slice() : r && r[e];
        }),
        (w.initData = function(t, e, i) {
          (a.isInstance(t) || r.isArrayLike(t)) && (t = new c(t, this.dimensions.length)),
            (this._rawData = t),
            (this._storage = {}),
            (this._indices = null),
            (this._nameList = e || []),
            (this._idList = []),
            (this._nameRepeatCount = {}),
            i || (this.hasItemOption = !1),
            (this.defaultDimValueGetter = l[this._rawData.getSource().sourceFormat]),
            (this._dimValueGetter = i = i || this.defaultDimValueGetter),
            (this._dimValueGetterArrayRows = l.arrayRows),
            (this._rawExtent = {}),
            this._initDataFromProvider(0, t.count()),
            t.pure && (this.hasItemOption = !1);
        }),
        (w.getProvider = function() {
          return this._rawData;
        }),
        (w.appendData = function(t) {
          var e = this._rawData,
            i = this.count();
          e.appendData(t);
          var r = e.count();
          e.persistent || (r += i), this._initDataFromProvider(i, r);
        }),
        (w.appendValues = function(t, e) {
          for (
            var i = this._chunkSize,
              r = this._storage,
              n = this.dimensions,
              o = n.length,
              a = this._rawExtent,
              s = this.count(),
              l = s + Math.max(t.length, e ? e.length : 0),
              c = this._chunkCount,
              h = 0;
            h < o;
            h++
          )
            a[(y = n[h])] || (a[y] = [1 / 0, -1 / 0]),
              r[y] || (r[y] = []),
              C(r, this._dimensionInfos[y], i, c, l),
              (this._chunkCount = r[y].length);
          for (var u = new Array(o), d = s; d < l; d++) {
            for (var f = d - s, p = Math.floor(d / i), g = d % i, m = 0; m < o; m++) {
              var y,
                v = this._dimValueGetterArrayRows(t[f] || u, (y = n[m]), f, m);
              r[y][p][g] = v;
              var x = a[y];
              v < x[0] && (x[0] = v), v > x[1] && (x[1] = v);
            }
            e && (this._nameList[d] = e[f]);
          }
          (this._rawCount = this._count = l), (this._extent = {}), T(this);
        }),
        (w._initDataFromProvider = function(t, e) {
          if (!(t >= e)) {
            for (
              var i,
                r = this._chunkSize,
                n = this._rawData,
                o = this._storage,
                a = this.dimensions,
                s = a.length,
                l = this._dimensionInfos,
                c = this._nameList,
                h = this._idList,
                u = this._rawExtent,
                d = (this._nameRepeatCount = {}),
                f = this._chunkCount,
                p = 0;
              p < s;
              p++
            ) {
              u[(_ = a[p])] || (u[_] = [1 / 0, -1 / 0]);
              var g = l[_];
              0 === g.otherDims.itemName && (i = this._nameDimIdx = p),
                0 === g.otherDims.itemId && (this._idDimIdx = p),
                o[_] || (o[_] = []),
                C(o, g, r, f, e),
                (this._chunkCount = o[_].length);
            }
            for (var m = new Array(s), y = t; y < e; y++) {
              m = n.getItem(y, m);
              for (var v = Math.floor(y / r), x = y % r, b = 0; b < s; b++) {
                var _,
                  S = o[(_ = a[b])][v],
                  w = this._dimValueGetter(m, _, y, b);
                S[x] = w;
                var k = u[_];
                w < k[0] && (k[0] = w), w > k[1] && (k[1] = w);
              }
              if (!n.pure) {
                var M = c[y];
                if (m && null == M)
                  if (null != m.name) c[y] = M = m.name;
                  else if (null != i) {
                    var A = a[i],
                      D = o[A][v];
                    if (D) {
                      M = D[x];
                      var I = l[A].ordinalMeta;
                      I && I.categories.length && (M = I.categories[M]);
                    }
                  }
                var O = null == m ? null : m.id;
                null == O && null != M && ((d[M] = d[M] || 0), (O = M), d[M] > 0 && (O += '__ec__' + d[M]), d[M]++),
                  null != O && (h[y] = O);
              }
            }
            !n.persistent && n.clean && n.clean(), (this._rawCount = this._count = e), (this._extent = {}), T(this);
          }
        }),
        (w.count = function() {
          return this._count;
        }),
        (w.getIndices = function() {
          var t = this._indices;
          if (t) {
            var e = this._count;
            if ((r = t.constructor) === Array) {
              n = new r(e);
              for (var i = 0; i < e; i++) n[i] = t[i];
            } else n = new r(t.buffer, 0, e);
          } else {
            var r,
              n = new (r = v(this))(this.count());
            for (i = 0; i < n.length; i++) n[i] = i;
          }
          return n;
        }),
        (w.get = function(t, e) {
          if (!(e >= 0 && e < this._count)) return NaN;
          var i = this._storage;
          if (!i[t]) return NaN;
          e = this.getRawIndex(e);
          var r = Math.floor(e / this._chunkSize);
          return i[t][r][e % this._chunkSize];
        }),
        (w.getByRawIndex = function(t, e) {
          if (!(e >= 0 && e < this._rawCount)) return NaN;
          var i = this._storage[t];
          return i ? i[Math.floor(e / this._chunkSize)][e % this._chunkSize] : NaN;
        }),
        (w._getFast = function(t, e) {
          var i = Math.floor(e / this._chunkSize);
          return this._storage[t][i][e % this._chunkSize];
        }),
        (w.getValues = function(t, e) {
          var i = [];
          r.isArray(t) || ((e = t), (t = this.dimensions));
          for (var n = 0, o = t.length; n < o; n++) i.push(this.get(t[n], e));
          return i;
        }),
        (w.hasValue = function(t) {
          for (
            var e = this._dimensionsSummary.dataDimsOnCoord, i = this._dimensionInfos, r = 0, n = e.length;
            r < n;
            r++
          )
            if ('ordinal' !== i[e[r]].type && isNaN(this.get(e[r], t))) return !1;
          return !0;
        }),
        (w.getDataExtent = function(t) {
          t = this.getDimension(t);
          var e = [1 / 0, -1 / 0];
          if (!this._storage[t]) return e;
          var i,
            r = this.count();
          if (!this._indices) return this._rawExtent[t].slice();
          if ((i = this._extent[t])) return i.slice();
          for (var n = (i = e)[0], o = i[1], a = 0; a < r; a++) {
            var s = this._getFast(t, this.getRawIndex(a));
            s < n && (n = s), s > o && (o = s);
          }
          return (this._extent[t] = i = [n, o]), i;
        }),
        (w.getApproximateExtent = function(t) {
          return (t = this.getDimension(t)), this._approximateExtent[t] || this.getDataExtent(t);
        }),
        (w.setApproximateExtent = function(t, e) {
          (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
        }),
        (w.getCalculationInfo = function(t) {
          return this._calculationInfo[t];
        }),
        (w.setCalculationInfo = function(t, e) {
          u(t) ? r.extend(this._calculationInfo, t) : (this._calculationInfo[t] = e);
        }),
        (w.getSum = function(t) {
          var e = 0;
          if (this._storage[t])
            for (var i = 0, r = this.count(); i < r; i++) {
              var n = this.get(t, i);
              isNaN(n) || (e += n);
            }
          return e;
        }),
        (w.getMedian = function(t) {
          var e = [];
          this.each(t, function(t, i) {
            isNaN(t) || e.push(t);
          });
          var i = [].concat(e).sort(function(t, e) {
              return t - e;
            }),
            r = this.count();
          return 0 === r ? 0 : r % 2 == 1 ? i[(r - 1) / 2] : (i[r / 2] + i[r / 2 - 1]) / 2;
        }),
        (w.rawIndexOf = function(t, e) {
          var i = (t && this._invertedIndicesMap[t])[e];
          return null == i || isNaN(i) ? d : i;
        }),
        (w.indexOfName = function(t) {
          for (var e = 0, i = this.count(); e < i; e++) if (this.getName(e) === t) return e;
          return -1;
        }),
        (w.indexOfRawIndex = function(t) {
          if (!this._indices) return t;
          if (t >= this._rawCount || t < 0) return -1;
          var e = this._indices,
            i = e[t];
          if (null != i && i < this._count && i === t) return t;
          for (var r = 0, n = this._count - 1; r <= n; ) {
            var o = ((r + n) / 2) | 0;
            if (e[o] < t) r = o + 1;
            else {
              if (!(e[o] > t)) return o;
              n = o - 1;
            }
          }
          return -1;
        }),
        (w.indicesOfNearest = function(t, e, i) {
          var r = [];
          if (!this._storage[t]) return r;
          null == i && (i = 1 / 0);
          for (var n = Number.MAX_VALUE, o = -1, a = 0, s = this.count(); a < s; a++) {
            var l = e - this.get(t, a),
              c = Math.abs(l);
            l <= i && c <= n && ((c < n || (l >= 0 && o < 0)) && ((n = c), (o = l), (r.length = 0)), r.push(a));
          }
          return r;
        }),
        (w.getRawIndex = M),
        (w.getRawDataItem = function(t) {
          if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
          for (var e = [], i = 0; i < this.dimensions.length; i++) e.push(this.get(this.dimensions[i], t));
          return e;
        }),
        (w.getName = function(t) {
          var e = this.getRawIndex(t);
          return this._nameList[e] || k(this, this._nameDimIdx, e) || '';
        }),
        (w.getId = function(t) {
          return D(this, this.getRawIndex(t));
        }),
        (w.each = function(t, e, i, n) {
          'use strict';
          if (this._count) {
            'function' == typeof t && ((n = i), (i = e), (e = t), (t = [])), (i = i || n || this);
            for (var o = (t = r.map(I(t), this.getDimension, this)).length, a = 0; a < this.count(); a++)
              switch (o) {
                case 0:
                  e.call(i, a);
                  break;
                case 1:
                  e.call(i, this.get(t[0], a), a);
                  break;
                case 2:
                  e.call(i, this.get(t[0], a), this.get(t[1], a), a);
                  break;
                default:
                  for (var s = 0, l = []; s < o; s++) l[s] = this.get(t[s], a);
                  (l[s] = a), e.apply(i, l);
              }
          }
        }),
        (w.filterSelf = function(t, e, i, n) {
          'use strict';
          if (this._count) {
            'function' == typeof t && ((n = i), (i = e), (e = t), (t = [])),
              (i = i || n || this),
              (t = r.map(I(t), this.getDimension, this));
            for (var o = this.count(), a = new (v(this))(o), s = [], l = t.length, c = 0, h = t[0], u = 0; u < o; u++) {
              var d,
                f = this.getRawIndex(u);
              if (0 === l) d = e.call(i, u);
              else if (1 === l) {
                var p = this._getFast(h, f);
                d = e.call(i, p, u);
              } else {
                for (var g = 0; g < l; g++) s[g] = this._getFast(h, f);
                (s[g] = u), (d = e.apply(i, s));
              }
              d && (a[c++] = f);
            }
            return (
              c < o && (this._indices = a),
              (this._count = c),
              (this._extent = {}),
              (this.getRawIndex = this._indices ? A : M),
              this
            );
          }
        }),
        (w.selectRange = function(t) {
          'use strict';
          if (this._count) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(i);
            var r = e.length;
            if (r) {
              var n = this.count(),
                o = new (v(this))(n),
                a = 0,
                s = e[0],
                l = t[s][0],
                c = t[s][1],
                h = !1;
              if (!this._indices) {
                var u = 0;
                if (1 === r) {
                  for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++)
                    for (
                      var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), m = 0;
                      m < g;
                      m++
                    )
                      (((T = p[m]) >= l && T <= c) || isNaN(T)) && (o[a++] = u), u++;
                  h = !0;
                } else if (2 === r) {
                  d = this._storage[s];
                  var y = this._storage[e[1]],
                    x = t[e[1]][0],
                    b = t[e[1]][1];
                  for (f = 0; f < this._chunkCount; f++) {
                    p = d[f];
                    var _ = y[f];
                    for (g = Math.min(this._count - f * this._chunkSize, this._chunkSize), m = 0; m < g; m++) {
                      var S = _[m];
                      (((T = p[m]) >= l && T <= c) || isNaN(T)) && ((S >= x && S <= b) || isNaN(S)) && (o[a++] = u),
                        u++;
                    }
                  }
                  h = !0;
                }
              }
              if (!h)
                if (1 === r)
                  for (m = 0; m < n; m++) {
                    var w = this.getRawIndex(m);
                    (((T = this._getFast(s, w)) >= l && T <= c) || isNaN(T)) && (o[a++] = w);
                  }
                else
                  for (m = 0; m < n; m++) {
                    var C = !0;
                    for (w = this.getRawIndex(m), f = 0; f < r; f++) {
                      var T,
                        k = e[f];
                      ((T = this._getFast(i, w)) < t[k][0] || T > t[k][1]) && (C = !1);
                    }
                    C && (o[a++] = this.getRawIndex(m));
                  }
              return (
                a < n && (this._indices = o),
                (this._count = a),
                (this._extent = {}),
                (this.getRawIndex = this._indices ? A : M),
                this
              );
            }
          }
        }),
        (w.mapArray = function(t, e, i, r) {
          'use strict';
          'function' == typeof t && ((r = i), (i = e), (e = t), (t = []));
          var n = [];
          return (
            this.each(
              t,
              function() {
                n.push(e && e.apply(this, arguments));
              },
              (i = i || r || this),
            ),
            n
          );
        }),
        (w.map = function(t, e, i, n) {
          'use strict';
          i = i || n || this;
          var o = O(this, (t = r.map(I(t), this.getDimension, this)));
          (o._indices = this._indices), (o.getRawIndex = o._indices ? A : M);
          for (
            var a = o._storage,
              s = [],
              l = this._chunkSize,
              c = t.length,
              h = this.count(),
              u = [],
              d = o._rawExtent,
              f = 0;
            f < h;
            f++
          ) {
            for (var p = 0; p < c; p++) u[p] = this.get(t[p], f);
            u[c] = f;
            var g = e && e.apply(i, u);
            if (null != g) {
              'object' != typeof g && ((s[0] = g), (g = s));
              for (var m = this.getRawIndex(f), y = Math.floor(m / l), v = m % l, x = 0; x < g.length; x++) {
                var b = t[x],
                  _ = g[x],
                  S = d[b],
                  w = a[b];
                w && (w[y][v] = _), _ < S[0] && (S[0] = _), _ > S[1] && (S[1] = _);
              }
            }
          }
          return o;
        }),
        (w.downSample = function(t, e, i, r) {
          for (
            var n = O(this, [t]),
              o = n._storage,
              a = [],
              s = Math.floor(1 / e),
              l = o[t],
              c = this.count(),
              h = this._chunkSize,
              u = n._rawExtent[t],
              d = new (v(this))(c),
              f = 0,
              p = 0;
            p < c;
            p += s
          ) {
            s > c - p && (a.length = s = c - p);
            for (var g = 0; g < s; g++) {
              var m = this.getRawIndex(p + g),
                y = Math.floor(m / h);
              a[g] = l[y][m % h];
            }
            var x = i(a),
              b = this.getRawIndex(Math.min(p + r(a, x) || 0, c - 1));
            (l[Math.floor(b / h)][b % h] = x), x < u[0] && (u[0] = x), x > u[1] && (u[1] = x), (d[f++] = b);
          }
          return (n._count = f), (n._indices = d), (n.getRawIndex = A), n;
        }),
        (w.getItemModel = function(t) {
          var e = this.hostModel;
          return new n(this.getRawDataItem(t), e, e && e.ecModel);
        }),
        (w.diff = function(t) {
          var e = this;
          return new o(
            t ? t.getIndices() : [],
            this.getIndices(),
            function(e) {
              return D(t, e);
            },
            function(t) {
              return D(e, t);
            },
          );
        }),
        (w.getVisual = function(t) {
          var e = this._visual;
          return e && e[t];
        }),
        (w.setVisual = function(t, e) {
          if (u(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
          else (this._visual = this._visual || {}), (this._visual[t] = e);
        }),
        (w.setLayout = function(t, e) {
          if (u(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]);
          else this._layout[t] = e;
        }),
        (w.getLayout = function(t) {
          return this._layout[t];
        }),
        (w.getItemLayout = function(t) {
          return this._itemLayouts[t];
        }),
        (w.setItemLayout = function(t, e, i) {
          this._itemLayouts[t] = i ? r.extend(this._itemLayouts[t] || {}, e) : e;
        }),
        (w.clearItemLayouts = function() {
          this._itemLayouts.length = 0;
        }),
        (w.getItemVisual = function(t, e, i) {
          var r = this._itemVisuals[t],
            n = r && r[e];
          return null != n || i ? n : this.getVisual(e);
        }),
        (w.setItemVisual = function(t, e, i) {
          var r = this._itemVisuals[t] || {},
            n = this.hasItemVisual;
          if (((this._itemVisuals[t] = r), u(e))) for (var o in e) e.hasOwnProperty(o) && ((r[o] = e[o]), (n[o] = !0));
          else (r[e] = i), (n[e] = !0);
        }),
        (w.clearAllVisual = function() {
          (this._visual = {}), (this._itemVisuals = []), (this.hasItemVisual = {});
        });
      var P = function(t) {
        (t.seriesIndex = this.seriesIndex), (t.dataIndex = this.dataIndex), (t.dataType = this.dataType);
      };
      (w.setItemGraphicEl = function(t, e) {
        var i = this.hostModel;
        e &&
          ((e.dataIndex = t),
          (e.dataType = this.dataType),
          (e.seriesIndex = i && i.seriesIndex),
          'group' === e.type && e.traverse(P, e)),
          (this._graphicEls[t] = e);
      }),
        (w.getItemGraphicEl = function(t) {
          return this._graphicEls[t];
        }),
        (w.eachItemGraphicEl = function(t, e) {
          r.each(this._graphicEls, function(i, r) {
            i && t && t.call(e, i, r);
          });
        }),
        (w.cloneShallow = function(t) {
          if (!t) {
            var e = r.map(this.dimensions, this.getDimensionInfo, this);
            t = new S(e, this.hostModel);
          }
          return (
            (t._storage = this._storage),
            _(t, this),
            (t._indices = this._indices ? new (0, this._indices.constructor)(this._indices) : null),
            (t.getRawIndex = t._indices ? A : M),
            t
          );
        }),
        (w.wrapMethod = function(t, e) {
          var i = this[t];
          'function' == typeof i &&
            ((this.__wrappedMethods = this.__wrappedMethods || []),
            this.__wrappedMethods.push(t),
            (this[t] = function() {
              var t = i.apply(this, arguments);
              return e.apply(this, [t].concat(r.slice(arguments)));
            }));
        }),
        (w.TRANSFERABLE_METHODS = ['cloneShallow', 'downSample', 'map']),
        (w.CHANGABLE_METHODS = ['filterSelf', 'selectRange']),
        (t.exports = S);
    },
    'YgsL': function(t, e, i) {
      var r = i('QBsz').distance;
      function n(t, e, i, r, n, o, a) {
        var s = 0.5 * (i - t),
          l = 0.5 * (r - e);
        return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * n + e;
      }
      t.exports = function(t, e) {
        for (var i = t.length, o = [], a = 0, s = 1; s < i; s++) a += r(t[s - 1], t[s]);
        var l = a / 2;
        for (l = l < i ? i : l, s = 0; s < l; s++) {
          var c,
            h,
            u,
            d = (s / (l - 1)) * (e ? i : i - 1),
            f = Math.floor(d),
            p = d - f,
            g = t[f % i];
          e
            ? ((c = t[(f - 1 + i) % i]), (h = t[(f + 1) % i]), (u = t[(f + 2) % i]))
            : ((c = t[0 === f ? f : f - 1]), (h = t[f > i - 2 ? i - 1 : f + 1]), (u = t[f > i - 3 ? i - 1 : f + 2]));
          var m = p * p,
            y = p * m;
          o.push([n(c[0], g[0], h[0], u[0], p, m, y), n(c[1], g[1], h[1], u[1], p, m, y)]);
        }
        return o;
      };
    },
    'Yl7c': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = '.',
        o = '___EC__COMPONENT__CONTAINER___';
      function a(t) {
        var e = { main: '', sub: '' };
        return t && ((t = t.split(n)), (e.main = t[0] || ''), (e.sub = t[1] || '')), e;
      }
      var s = 0;
      function l(t, e) {
        var i = r.slice(arguments, 2);
        return this.superClass.prototype[e].apply(t, i);
      }
      function c(t, e, i) {
        return this.superClass.prototype[e].apply(t, i);
      }
      (e.parseClassType = a),
        (e.enableClassExtend = function(t, e) {
          (t.$constructor = t),
            (t.extend = function(t) {
              var e = this,
                i = function() {
                  t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
                };
              return (
                r.extend(i.prototype, t),
                (i.extend = this.extend),
                (i.superCall = l),
                (i.superApply = c),
                r.inherits(i, this),
                (i.superClass = e),
                i
              );
            });
        }),
        (e.enableClassCheck = function(t) {
          var e = ['__\0is_clz', s++, Math.random().toFixed(3)].join('_');
          (t.prototype[e] = !0),
            (t.isInstance = function(t) {
              return !(!t || !t[e]);
            });
        }),
        (e.enableClassManagement = function(t, e) {
          e = e || {};
          var i = {};
          if (
            ((t.registerClass = function(t, e) {
              return (
                e &&
                  ((function(t) {
                    r.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
                  })(e),
                  (e = a(e)).sub
                    ? e.sub !== o &&
                      ((function(t) {
                        var e = i[t.main];
                        return (e && e[o]) || ((e = i[t.main] = {})[o] = !0), e;
                      })(e)[e.sub] = t)
                    : (i[e.main] = t)),
                t
              );
            }),
            (t.getClass = function(t, e, r) {
              var n = i[t];
              if ((n && n[o] && (n = e ? n[e] : null), r && !n))
                throw new Error(
                  e
                    ? 'Component ' + t + '.' + (e || '') + ' not exists. Load it first.'
                    : t + '.type should be specified.',
                );
              return n;
            }),
            (t.getClassesByMainType = function(t) {
              t = a(t);
              var e = [],
                n = i[t.main];
              return (
                n && n[o]
                  ? r.each(n, function(t, i) {
                      i !== o && e.push(t);
                    })
                  : e.push(n),
                e
              );
            }),
            (t.hasClass = function(t) {
              return (t = a(t)), !!i[t.main];
            }),
            (t.getAllClassMainTypes = function() {
              var t = [];
              return (
                r.each(i, function(e, i) {
                  t.push(i);
                }),
                t
              );
            }),
            (t.hasSubTypes = function(t) {
              t = a(t);
              var e = i[t.main];
              return e && e[o];
            }),
            (t.parseClassType = a),
            e.registerWhenExtend)
          ) {
            var n = t.extend;
            n &&
              (t.extend = function(e) {
                var i = n.call(this, e);
                return t.registerClass(i, e.type);
              });
          }
          return t;
        }),
        (e.setReadOnly = function(t, e) {});
    },
    'Zfzs': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return c;
      });
      var r = i('fXoL'),
        n = i('rDig'),
        o = i('cpAi'),
        a = i('ofXK'),
        s = ['tooltipContent'];
      function l(t, e) {}
      var c = (function() {
        var t = (function() {
          function t(e, i, r) {
            _classCallCheck(this, t),
              (this._changeDetectorRef = e),
              (this._elementRef = i),
              (this._seriesComponent = r),
              (this._state = {}),
              (this._context = new o.c()),
              (this.backgroundColor = 'rgba(50,50,50,0.7)'),
              (this.borderColor = '#333'),
              (this.borderWidth = 0),
              (this.padding = 5),
              (this.textStyle = { color: '#FFF' });
          }
          return (
            _createClass(t, [
              {
                key: 'ngOnChanges',
                value: function() {
                  this._setOptions();
                },
              },
              {
                key: 'ngOnDestroy',
                value: function() {
                  this._removeOption();
                },
              },
              {
                key: '_setOptions',
                value: function() {
                  var t = Object(n.d)(
                    this._state,
                    {
                      position: this.position,
                      backgroundColor: this.backgroundColor,
                      borderColor: this.borderColor,
                      borderWidth: this.borderWidth,
                      padding: this.padding,
                      textStyle: this.textStyle,
                      extraCssText: this.extraCssText,
                      formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : void 0,
                    },
                    this.config ? this.config : {},
                  );
                  this._seriesComponent.setStateOption('tooltip', t);
                },
              },
              {
                key: '_formatter',
                value: function() {
                  var t = this;
                  return function(e, i, r) {
                    return (
                      (t._context = { $implicit: e, ticket: i }),
                      setTimeout(function() {
                        r(i, t._elementRef.nativeElement.innerHTML);
                      }),
                      t._changeDetectorRef.markForCheck(),
                      t._elementRef.nativeElement.innerHTML
                    );
                  };
                },
              },
              {
                key: '_removeOption',
                value: function() {
                  this._seriesComponent.removeStateOption('tooltip');
                },
              },
            ]),
            t
          );
        })();
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Sb(r.h), r.Sb(r.k), r.Sb(n.c));
          }),
          (t.ɵcmp = r.Mb({
            type: t,
            selectors: [['td-chart-series-tooltip']],
            contentQueries: function(t, e, i) {
              var n;
              1 & t && r.Mc(i, o.b, !0, r.M), 2 & t && r.Ec((n = r.hc())) && (e.formatterTemplate = n.first);
            },
            viewQuery: function(t, e) {
              var i;
              1 & t && r.Nc(s, !0), 2 & t && r.Ec((i = r.hc())) && (e.fullTemplate = i.first);
            },
            inputs: {
              config: 'config',
              formatter: 'formatter',
              position: 'position',
              backgroundColor: 'backgroundColor',
              borderColor: 'borderColor',
              borderWidth: 'borderWidth',
              padding: 'padding',
              textStyle: 'textStyle',
              extraCssText: 'extraCssText',
            },
            features: [r.Bb()],
            decls: 2,
            vars: 2,
            consts: [
              [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              ['tooltipContent', ''],
            ],
            template: function(t, e) {
              1 & t && r.Rc(0, l, 0, 0, 'ng-template', 0, 1, r.Sc),
                2 & t && r.qc('ngTemplateOutlet', e.formatterTemplate)('ngTemplateOutletContext', e._context);
            },
            directives: [a.A],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
    },
    'Znkb': function(t, e, i) {
      i('Tghj');
      var r = i('ProS'),
        n = i('zTMp'),
        o = r.extendComponentView({
          type: 'axis',
          _axisPointer: null,
          axisPointerClass: null,
          render: function(t, e, i, r) {
            this.axisPointerClass && n.fixValue(t), o.superApply(this, 'render', arguments), a(this, t, 0, i, 0, !0);
          },
          updateAxisPointer: function(t, e, i, r, n) {
            a(this, t, 0, i, 0, !1);
          },
          remove: function(t, e) {
            var i = this._axisPointer;
            i && i.remove(e), o.superApply(this, 'remove', arguments);
          },
          dispose: function(t, e) {
            s(this, e), o.superApply(this, 'dispose', arguments);
          },
        });
      function a(t, e, i, r, a, l) {
        var c = o.getAxisPointerClass(t.axisPointerClass);
        if (c) {
          var h = n.getAxisPointerModel(e);
          h ? (t._axisPointer || (t._axisPointer = new c())).render(e, h, r, l) : s(t, r);
        }
      }
      function s(t, e, i) {
        var r = t._axisPointer;
        r && r.dispose(e, i), (t._axisPointer = null);
      }
      var l = [];
      (o.registerAxisPointerClass = function(t, e) {
        l[t] = e;
      }),
        (o.getAxisPointerClass = function(t) {
          return t && l[t];
        }),
        (t.exports = o);
    },
    'aKvl': function(t, e, i) {
      var r = i('Sj9i').quadraticProjectPoint;
      e.containStroke = function(t, e, i, n, o, a, s, l, c) {
        if (0 === s) return !1;
        var h = s;
        return (
          !(
            (c > e + h && c > n + h && c > a + h) ||
            (c < e - h && c < n - h && c < a - h) ||
            (l > t + h && l > i + h && l > o + h) ||
            (l < t - h && l < i - h && l < o - h)
          ) && r(t, e, i, n, o, a, l, c, null) <= h / 2
        );
      };
    },
    'aX58': function(t, e, i) {
      var r = i('3gBT'),
        n = i('ItGF'),
        o = i('bYtY'),
        a = i('0s+r'),
        s = i('r6Bn'),
        l = i('7SHv'),
        c = i('MKOG'),
        h = i('zarK'),
        u = !n.canvasSupported,
        d = { canvas: l },
        f = {},
        p = function(t, e, i) {
          (i = i || {}), (this.dom = e), (this.id = t);
          var r = this,
            l = new s(),
            f = i.renderer;
          if (u) {
            if (!d.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            f = 'vml';
          } else (f && d[f]) || (f = 'canvas');
          var p = new d[f](e, l, i, t);
          (this.storage = l), (this.painter = p);
          var g = n.node || n.worker ? null : new h(p.getViewportRoot());
          (this.handler = new a(l, p, g, p.root)),
            (this.animation = new c({ stage: { update: o.bind(this.flush, this) } })),
            this.animation.start();
          var m = l.delFromStorage,
            y = l.addToStorage;
          (l.delFromStorage = function(t) {
            m.call(l, t), t && t.removeSelfFromZr(r);
          }),
            (l.addToStorage = function(t) {
              y.call(l, t), t.addSelfToZr(r);
            });
        };
      (p.prototype = {
        constructor: p,
        getId: function() {
          return this.id;
        },
        add: function(t) {
          this.storage.addRoot(t), (this._needsRefresh = !0);
        },
        remove: function(t) {
          this.storage.delRoot(t), (this._needsRefresh = !0);
        },
        configLayer: function(t, e) {
          this.painter.configLayer && this.painter.configLayer(t, e), (this._needsRefresh = !0);
        },
        setBackgroundColor: function(t) {
          this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), (this._needsRefresh = !0);
        },
        refreshImmediately: function() {
          (this._needsRefresh = !1), this.painter.refresh(), (this._needsRefresh = !1);
        },
        refresh: function() {
          this._needsRefresh = !0;
        },
        flush: function() {
          var t;
          this._needsRefresh && ((t = !0), this.refreshImmediately()),
            this._needsRefreshHover && ((t = !0), this.refreshHoverImmediately()),
            t && this.trigger('rendered');
        },
        addHover: function(t, e) {
          if (this.painter.addHover) {
            var i = this.painter.addHover(t, e);
            return this.refreshHover(), i;
          }
        },
        removeHover: function(t) {
          this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function() {
          this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function() {
          this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function() {
          (this._needsRefreshHover = !1), this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function(t) {
          this.painter.resize((t = t || {}).width, t.height), this.handler.resize();
        },
        clearAnimation: function() {
          this.animation.clear();
        },
        getWidth: function() {
          return this.painter.getWidth();
        },
        getHeight: function() {
          return this.painter.getHeight();
        },
        pathToImage: function(t, e) {
          return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function(t) {
          this.handler.setCursorStyle(t);
        },
        findHover: function(t, e) {
          return this.handler.findHover(t, e);
        },
        on: function(t, e, i) {
          this.handler.on(t, e, i);
        },
        off: function(t, e) {
          this.handler.off(t, e);
        },
        trigger: function(t, e) {
          this.handler.trigger(t, e);
        },
        clear: function() {
          this.storage.delRoot(), this.painter.clear();
        },
        dispose: function() {
          this.animation.stop(),
            this.clear(),
            this.storage.dispose(),
            this.painter.dispose(),
            this.handler.dispose(),
            (this.animation = this.storage = this.painter = this.handler = null),
            delete f[this.id];
        },
      }),
        (e.version = '4.0.7'),
        (e.init = function(t, e) {
          var i = new p(r(), t, e);
          return (f[i.id] = i), i;
        }),
        (e.dispose = function(t) {
          if (t) t.dispose();
          else {
            for (var e in f) f.hasOwnProperty(e) && f[e].dispose();
            f = {};
          }
          return this;
        }),
        (e.getInstance = function(t) {
          return f[t];
        }),
        (e.registerPainter = function(t, e) {
          d[t] = e;
        });
    },
    'aX7z': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = i('GMDS'),
        o = i('ieMj'),
        a = i('4NgU'),
        s = i('OELB'),
        l = i('nVfU'),
        c = l.prepareLayoutBarSeries,
        h = l.makeColumnLayout,
        u = l.retrieveColumnLayout,
        d = i('mFDi');
      function f(t, e) {
        var i,
          n,
          o,
          a = t.type,
          l = e.getMin(),
          d = e.getMax(),
          f = null != l,
          p = null != d,
          g = t.getExtent();
        'ordinal' === a
          ? (i = e.getCategories().length)
          : ((n = e.get('boundaryGap')),
            r.isArray(n) || (n = [n || 0, n || 0]),
            'boolean' == typeof n[0] && (n = [0, 0]),
            (n[0] = s.parsePercent(n[0], 1)),
            (n[1] = s.parsePercent(n[1], 1)),
            (o = g[1] - g[0] || Math.abs(g[0]))),
          null == l && (l = 'ordinal' === a ? (i ? 0 : NaN) : g[0] - n[0] * o),
          null == d && (d = 'ordinal' === a ? (i ? i - 1 : NaN) : g[1] + n[1] * o),
          'dataMin' === l ? (l = g[0]) : 'function' == typeof l && (l = l({ min: g[0], max: g[1] })),
          'dataMax' === d ? (d = g[1]) : 'function' == typeof d && (d = d({ min: g[0], max: g[1] })),
          (null == l || !isFinite(l)) && (l = NaN),
          (null == d || !isFinite(d)) && (d = NaN),
          t.setBlank(r.eqNaN(l) || r.eqNaN(d) || ('ordinal' === a && !t.getOrdinalMeta().categories.length)),
          e.getNeedCrossZero() && (l > 0 && d > 0 && !f && (l = 0), l < 0 && d < 0 && !p && (d = 0));
        var m = e.ecModel;
        if (m && 'time' === a) {
          var y,
            v = c('bar', m);
          if (
            (r.each(v, function(t) {
              y |= t.getBaseAxis() === e.axis;
            }),
            y)
          ) {
            var x = h(v),
              b = (function(t, e, i, n) {
                var o = i.axis.getExtent(),
                  a = o[1] - o[0],
                  s = u(n, i.axis);
                if (void 0 === s) return { min: t, max: e };
                var l = 1 / 0;
                r.each(s, function(t) {
                  l = Math.min(t.offset, l);
                });
                var c = -1 / 0;
                r.each(s, function(t) {
                  c = Math.max(t.offset + t.width, c);
                }),
                  (l = Math.abs(l)),
                  (c = Math.abs(c));
                var h = l + c,
                  d = e - t,
                  f = d / (1 - (l + c) / a) - d;
                return { min: (t -= f * (l / h)), max: (e += f * (c / h)) };
              })(l, d, e, x);
            (l = b.min), (d = b.max);
          }
        }
        return [l, d];
      }
      function p(t) {
        var e,
          i = t.getLabelModel().get('formatter'),
          r = 'category' === t.type ? t.scale.getExtent()[0] : null;
        return 'string' == typeof i
          ? ((e = i),
            (i = function(i) {
              return (i = t.scale.getLabel(i)), e.replace('{value}', null != i ? i : '');
            }))
          : 'function' == typeof i
          ? function(e, n) {
              return null != r && (n = e - r), i(g(t, e), n);
            }
          : function(e) {
              return t.scale.getLabel(e);
            };
      }
      function g(t, e) {
        return 'category' === t.type ? t.scale.getLabel(e) : e;
      }
      function m(t) {
        var e = t.get('interval');
        return null == e ? 'auto' : e;
      }
      i('IWp7'),
        i('jCoz'),
        (e.getScaleExtent = f),
        (e.niceScaleExtent = function(t, e) {
          var i = f(t, e),
            r = null != e.getMin(),
            n = null != e.getMax(),
            o = e.get('splitNumber');
          'log' === t.type && (t.base = e.get('logBase'));
          var a = t.type;
          t.setExtent(i[0], i[1]),
            t.niceExtent({
              splitNumber: o,
              fixMin: r,
              fixMax: n,
              minInterval: 'interval' === a || 'time' === a ? e.get('minInterval') : null,
              maxInterval: 'interval' === a || 'time' === a ? e.get('maxInterval') : null,
            });
          var s = e.get('interval');
          null != s && t.setInterval && t.setInterval(s);
        }),
        (e.createScaleByModel = function(t, e) {
          if ((e = e || t.get('type')))
            switch (e) {
              case 'category':
                return new n(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
              case 'value':
                return new o();
              default:
                return (a.getClass(e) || o).create(t);
            }
        }),
        (e.ifAxisCrossZero = function(t) {
          var e = t.scale.getExtent(),
            i = e[0],
            r = e[1];
          return !((i > 0 && r > 0) || (i < 0 && r < 0));
        }),
        (e.makeLabelFormatter = p),
        (e.getAxisRawValue = g),
        (e.estimateLabelUnionRect = function(t) {
          var e = t.scale;
          if (t.model.get('axisLabel.show') && !e.isBlank()) {
            var i,
              r,
              n = 'category' === t.type,
              o = e.getExtent();
            r = n ? e.count() : (i = e.getTicks()).length;
            var a,
              s,
              l,
              c,
              h,
              u,
              f,
              g,
              m = t.getLabelModel(),
              y = p(t),
              v = 1;
            r > 40 && (v = Math.ceil(r / 40));
            for (var x = 0; x < r; x += v) {
              var b = y(i ? i[x] : o[0] + x),
                _ =
                  ((s = m.getTextRect(b)),
                  (l = ((m.get('rotate') || 0) * Math.PI) / 180),
                  (u = (c = s.plain()).height),
                  (f = (h = c.width) * Math.cos(l) + u * Math.sin(l)),
                  (g = h * Math.sin(l) + u * Math.cos(l)),
                  new d(c.x, c.y, f, g));
              a ? a.union(_) : (a = _);
            }
            return a;
          }
        }),
        (e.getOptionCategoryInterval = m),
        (e.shouldShowAllLabels = function(t) {
          return 'category' === t.type && 0 === m(t.getLabelModel());
        });
    },
    'af/B': function(t, e, i) {
      var r = i('bYtY'),
        n = r.each,
        o = r.map,
        a = r.isFunction,
        s = r.createHashMap,
        l = r.noop,
        c = i('9H2F').createTask,
        h = i('iRjW').getUID,
        u = i('fmMI'),
        d = i('hD7B'),
        f = i('4NO4').normalizeToArray;
      function p(t, e, i, r) {
        (this.ecInstance = t),
          (this.api = e),
          (i = this._dataProcessorHandlers = i.slice()),
          (r = this._visualHandlers = r.slice()),
          (this._allHandlers = i.concat(r)),
          (this._stageTaskMap = s());
      }
      var g = p.prototype;
      function m(t, e, i, r, o) {
        var a;
        function s(t, e) {
          return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
        }
        (o = o || {}),
          n(e, function(e, n) {
            if (!o.visualType || o.visualType === e.visualType) {
              var l = t._stageTaskMap.get(e.uid),
                c = l.seriesTaskMap,
                h = l.overallTask;
              if (h) {
                var u,
                  d = h.agentStubMap;
                d.each(function(t) {
                  s(o, t) && (t.dirty(), (u = !0));
                }),
                  u && h.dirty(),
                  y(h, r);
                var f = t.getPerformArgs(h, o.block);
                d.each(function(t) {
                  t.perform(f);
                }),
                  (a |= h.perform(f));
              } else
                c &&
                  c.each(function(n, l) {
                    s(o, n) && n.dirty();
                    var c = t.getPerformArgs(n, o.block);
                    (c.skip = !e.performRawSeries && i.isSeriesFiltered(n.context.model)), y(n, r), (a |= n.perform(c));
                  });
            }
          }),
          (t.unfinished |= a);
      }
      (g.restoreData = function(t, e) {
        t.restoreData(e),
          this._stageTaskMap.each(function(t) {
            var e = t.overallTask;
            e && e.dirty();
          });
      }),
        (g.getPerformArgs = function(t, e) {
          if (t.__pipeline) {
            var i = this._pipelineMap.get(t.__pipeline.id),
              r = i.context,
              n =
                !e && i.progressiveEnabled && (!r || r.progressiveRender) && t.__idxInPipeline > i.blockIndex
                  ? i.step
                  : null,
              o = r && r.modDataCount;
            return { step: n, modBy: null != o ? Math.ceil(o / n) : null, modDataCount: o };
          }
        }),
        (g.getPipeline = function(t) {
          return this._pipelineMap.get(t);
        }),
        (g.updateStreamModes = function(t, e) {
          var i = this._pipelineMap.get(t.uid),
            r = t.getData().count(),
            n = i.progressiveEnabled && e.incrementalPrepareRender && r >= i.threshold,
            o = t.get('large') && r >= t.get('largeThreshold'),
            a = 'mod' === t.get('progressiveChunkMode') ? r : null;
          t.pipelineContext = i.context = { progressiveRender: n, modDataCount: a, large: o };
        }),
        (g.restorePipelines = function(t) {
          var e = this,
            i = (e._pipelineMap = s());
          t.eachSeries(function(t) {
            var r = t.getProgressive(),
              n = t.uid;
            i.set(n, {
              id: n,
              head: null,
              tail: null,
              threshold: t.getProgressiveThreshold(),
              progressiveEnabled: r && !(t.preventIncremental && t.preventIncremental()),
              blockIndex: -1,
              step: Math.round(r || 700),
              count: 0,
            }),
              M(e, t, t.dataTask);
          });
        }),
        (g.prepareStageTasks = function() {
          var t = this._stageTaskMap,
            e = this.ecInstance.getModel(),
            i = this.api;
          n(
            this._allHandlers,
            function(r) {
              var o = t.get(r.uid) || t.set(r.uid, []);
              r.reset &&
                (function(t, e, i, r, n) {
                  var o = i.seriesTaskMap || (i.seriesTaskMap = s()),
                    a = e.seriesType,
                    l = e.getTargetSeries;
                  function h(i) {
                    var a = i.uid,
                      s = o.get(a) || o.set(a, c({ plan: S, reset: w, count: k }));
                    (s.context = {
                      model: i,
                      ecModel: r,
                      api: n,
                      useClearVisual: e.isVisual && !e.isLayout,
                      plan: e.plan,
                      reset: e.reset,
                      scheduler: t,
                    }),
                      M(t, i, s);
                  }
                  e.createOnAllSeries ? r.eachRawSeries(h) : a ? r.eachRawSeriesByType(a, h) : l && l(r, n).each(h);
                  var u = t._pipelineMap;
                  o.each(function(t, e) {
                    u.get(e) || (t.dispose(), o.removeKey(e));
                  });
                })(this, r, o, e, i),
                r.overallReset &&
                  (function(t, e, i, r, o) {
                    var a = (i.overallTask = i.overallTask || c({ reset: v }));
                    a.context = { ecModel: r, api: o, overallReset: e.overallReset, scheduler: t };
                    var l = (a.agentStubMap = a.agentStubMap || s()),
                      h = e.seriesType,
                      u = e.getTargetSeries,
                      d = !0,
                      f = e.modifyOutputEnd;
                    function p(e) {
                      var i = e.uid,
                        r = l.get(i);
                      r || ((r = l.set(i, c({ reset: x, onDirty: _ }))), a.dirty()),
                        (r.context = { model: e, overallProgress: d, modifyOutputEnd: f }),
                        (r.agent = a),
                        (r.__block = d),
                        M(t, e, r);
                    }
                    h ? r.eachRawSeriesByType(h, p) : u ? u(r, o).each(p) : ((d = !1), n(r.getSeries(), p));
                    var g = t._pipelineMap;
                    l.each(function(t, e) {
                      g.get(e) || (t.dispose(), a.dirty(), l.removeKey(e));
                    });
                  })(this, r, o, e, i);
            },
            this,
          );
        }),
        (g.prepareView = function(t, e, i, r) {
          var n = t.renderTask,
            o = n.context;
          (o.model = e), (o.ecModel = i), (o.api = r), (n.__block = !t.incrementalPrepareRender), M(this, e, n);
        }),
        (g.performDataProcessorTasks = function(t, e) {
          m(this, this._dataProcessorHandlers, t, e, { block: !0 });
        }),
        (g.performVisualTasks = function(t, e, i) {
          m(this, this._visualHandlers, t, e, i);
        }),
        (g.performSeriesTasks = function(t) {
          var e;
          t.eachSeries(function(t) {
            e |= t.dataTask.perform();
          }),
            (this.unfinished |= e);
        }),
        (g.plan = function() {
          this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
              if (e.__block) {
                t.blockIndex = e.__idxInPipeline;
                break;
              }
              e = e.getUpstream();
            } while (e);
          });
        });
      var y = (g.updatePayload = function(t, e) {
        'remain' !== e && (t.context.payload = e);
      });
      function v(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
      }
      function x(t, e) {
        return t.overallProgress && b;
      }
      function b() {
        this.agent.dirty(), this.getDownstream().dirty();
      }
      function _() {
        this.agent && this.agent.dirty();
      }
      function S(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
      }
      function w(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = (t.resetDefines = f(t.reset(t.model, t.ecModel, t.api, t.payload)));
        return e.length > 1
          ? o(e, function(t, e) {
              return T(e);
            })
          : C;
      }
      var C = T(0);
      function T(t) {
        return function(e, i) {
          var r = i.data,
            n = i.resetDefines[t];
          if (n && n.dataEach) for (var o = e.start; o < e.end; o++) n.dataEach(r, o);
          else n && n.progress && n.progress(e, r);
        };
      }
      function k(t) {
        return t.data.count();
      }
      function M(t, e, i) {
        var r = t._pipelineMap.get(e.uid);
        !r.head && (r.head = i),
          r.tail && r.tail.pipe(i),
          (r.tail = i),
          (i.__idxInPipeline = r.count++),
          (i.__pipeline = r);
      }
      function A(t) {
        D = null;
        try {
          t(I, O);
        } catch (e) {}
        return D;
      }
      p.wrapStageHandler = function(t, e) {
        return (
          a(t) && (t = { overallReset: t, seriesType: A(t) }), (t.uid = h('stageHandler')), e && (t.visualType = e), t
        );
      };
      var D,
        I = {},
        O = {};
      function L(t, e) {
        for (var i in e.prototype) t[i] = l;
      }
      L(I, u),
        L(O, d),
        (I.eachSeriesByType = I.eachRawSeriesByType = function(t) {
          D = t;
        }),
        (I.eachComponent = function(t) {
          'series' === t.mainType && t.subType && (D = t.subType);
        }),
        (t.exports = p);
    },
    'bLfw': function(t, e, i) {
      var r = i('bYtY'),
        n = i('Qxkt'),
        o = i('iRjW'),
        a = i('Yl7c'),
        s = a.enableClassManagement,
        l = a.parseClassType,
        c = i('4NO4').makeInner,
        h = i('+TT/'),
        u = i('3hzK'),
        d = c(),
        f = n.extend({
          type: 'component',
          id: '',
          name: '',
          mainType: '',
          subType: '',
          componentIndex: 0,
          defaultOption: null,
          ecModel: null,
          dependentModels: [],
          uid: null,
          layoutMode: null,
          $constructor: function(t, e, i, r) {
            n.call(this, t, e, i, r), (this.uid = o.getUID('ec_cpt_model'));
          },
          init: function(t, e, i, r) {
            this.mergeDefaultAndTheme(t, i);
          },
          mergeDefaultAndTheme: function(t, e) {
            var i = this.layoutMode,
              n = i ? h.getLayoutParams(t) : {},
              o = e.getTheme();
            r.merge(t, o.get(this.mainType)), r.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i);
          },
          mergeOption: function(t, e) {
            r.merge(this.option, t, !0);
            var i = this.layoutMode;
            i && h.mergeLayoutParam(this.option, t, i);
          },
          optionUpdated: function(t, e) {},
          getDefaultOption: function() {
            var t = d(this);
            if (!t.defaultOption) {
              for (var e = [], i = this.constructor; i; ) {
                var n = i.prototype.defaultOption;
                n && e.push(n), (i = i.superClass);
              }
              for (var o = {}, a = e.length - 1; a >= 0; a--) o = r.merge(o, e[a], !0);
              t.defaultOption = o;
            }
            return t.defaultOption;
          },
          getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
              mainType: t,
              index: this.get(t + 'Index', !0),
              id: this.get(t + 'Id', !0),
            });
          },
        });
      s(f, { registerWhenExtend: !0 }),
        o.enableSubTypeDefaulter(f),
        o.enableTopologicalTravel(f, function(t) {
          var e = [];
          return (
            r.each(f.getClassesByMainType(t), function(t) {
              e = e.concat(t.prototype.dependencies || []);
            }),
            (e = r.map(e, function(t) {
              return l(t).main;
            })),
            'dataset' !== t && r.indexOf(e, 'dataset') <= 0 && e.unshift('dataset'),
            e
          );
        }),
        r.mixin(f, u),
        (t.exports = f);
    },
    'bYtY': function(t, e) {
      var i = {
          '[object Function]': 1,
          '[object RegExp]': 1,
          '[object Date]': 1,
          '[object Error]': 1,
          '[object CanvasGradient]': 1,
          '[object CanvasPattern]': 1,
          '[object Image]': 1,
          '[object Canvas]': 1,
        },
        r = {
          '[object Int8Array]': 1,
          '[object Uint8Array]': 1,
          '[object Uint8ClampedArray]': 1,
          '[object Int16Array]': 1,
          '[object Uint16Array]': 1,
          '[object Int32Array]': 1,
          '[object Uint32Array]': 1,
          '[object Float32Array]': 1,
          '[object Float64Array]': 1,
        },
        n = Object.prototype.toString,
        o = Array.prototype,
        a = o.forEach,
        s = o.filter,
        l = o.slice,
        c = o.map,
        h = o.reduce,
        u = {};
      function d(t) {
        if (null == t || 'object' != typeof t) return t;
        var e = t,
          o = n.call(t);
        if ('[object Array]' === o) {
          if (!C(t)) {
            e = [];
            for (var a = 0, s = t.length; a < s; a++) e[a] = d(t[a]);
          }
        } else if (r[o]) {
          if (!C(t)) {
            var l = t.constructor;
            if (t.constructor.from) e = l.from(t);
            else for (e = new l(t.length), a = 0, s = t.length; a < s; a++) e[a] = d(t[a]);
          }
        } else if (!i[o] && !C(t) && !S(t)) for (var c in ((e = {}), t)) t.hasOwnProperty(c) && (e[c] = d(t[c]));
        return e;
      }
      function f(t, e, i) {
        if (!b(e) || !b(t)) return i ? d(e) : t;
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var n = t[r],
              o = e[r];
            !b(o) || !b(n) || x(o) || x(n) || S(o) || S(n) || _(o) || _(n) || C(o) || C(n)
              ? (!i && r in t) || (t[r] = d(e[r]))
              : f(n, o, i);
          }
        return t;
      }
      function p(t, e, i) {
        for (var r in e) e.hasOwnProperty(r) && (i ? null != e[r] : null == t[r]) && (t[r] = e[r]);
        return t;
      }
      var g,
        m = function() {
          return u.createCanvas();
        };
      function y(t, e, i) {
        if (t && e)
          if (t.forEach && t.forEach === a) t.forEach(e, i);
          else if (t.length === +t.length) for (var r = 0, n = t.length; r < n; r++) e.call(i, t[r], r, t);
          else for (var o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t);
      }
      function v(t, e) {
        var i = l.call(arguments, 2);
        return function() {
          return t.apply(e, i.concat(l.call(arguments)));
        };
      }
      function x(t) {
        return '[object Array]' === n.call(t);
      }
      function b(t) {
        var e = typeof t;
        return 'function' === e || (!!t && 'object' === e);
      }
      function _(t) {
        return !!i[n.call(t)];
      }
      function S(t) {
        return 'object' == typeof t && 'number' == typeof t.nodeType && 'object' == typeof t.ownerDocument;
      }
      u.createCanvas = function() {
        return document.createElement('canvas');
      };
      var w = '__ec_primitive__';
      function C(t) {
        return t[w];
      }
      function T(t) {
        var e = x(t);
        this.data = {};
        var i = this;
        function r(t, r) {
          e ? i.set(t, r) : i.set(r, t);
        }
        t instanceof T ? t.each(r) : t && y(t, r);
      }
      (T.prototype = {
        constructor: T,
        get: function(t) {
          return this.data.hasOwnProperty(t) ? this.data[t] : null;
        },
        set: function(t, e) {
          return (this.data[t] = e);
        },
        each: function(t, e) {
          for (var i in (void 0 !== e && (t = v(t, e)), this.data)) this.data.hasOwnProperty(i) && t(this.data[i], i);
        },
        removeKey: function(t) {
          delete this.data[t];
        },
      }),
        (e.$override = function(t, e) {
          'createCanvas' === t && (g = null), (u[t] = e);
        }),
        (e.clone = d),
        (e.merge = f),
        (e.mergeAll = function(t, e) {
          for (var i = t[0], r = 1, n = t.length; r < n; r++) i = f(i, t[r], e);
          return i;
        }),
        (e.extend = function(t, e) {
          for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          return t;
        }),
        (e.defaults = p),
        (e.createCanvas = m),
        (e.getContext = function() {
          return g || (g = m().getContext('2d')), g;
        }),
        (e.indexOf = function(t, e) {
          if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, r = t.length; i < r; i++) if (t[i] === e) return i;
          }
          return -1;
        }),
        (e.inherits = function(t, e) {
          var i = t.prototype;
          function r() {}
          for (var n in ((r.prototype = e.prototype), (t.prototype = new r()), i)) t.prototype[n] = i[n];
          (t.prototype.constructor = t), (t.superClass = e);
        }),
        (e.mixin = function(t, e, i) {
          p((t = 'prototype' in t ? t.prototype : t), (e = 'prototype' in e ? e.prototype : e), i);
        }),
        (e.isArrayLike = function(t) {
          if (t) return 'string' != typeof t && 'number' == typeof t.length;
        }),
        (e.each = y),
        (e.map = function(t, e, i) {
          if (t && e) {
            if (t.map && t.map === c) return t.map(e, i);
            for (var r = [], n = 0, o = t.length; n < o; n++) r.push(e.call(i, t[n], n, t));
            return r;
          }
        }),
        (e.reduce = function(t, e, i, r) {
          if (t && e) {
            if (t.reduce && t.reduce === h) return t.reduce(e, i, r);
            for (var n = 0, o = t.length; n < o; n++) i = e.call(r, i, t[n], n, t);
            return i;
          }
        }),
        (e.filter = function(t, e, i) {
          if (t && e) {
            if (t.filter && t.filter === s) return t.filter(e, i);
            for (var r = [], n = 0, o = t.length; n < o; n++) e.call(i, t[n], n, t) && r.push(t[n]);
            return r;
          }
        }),
        (e.find = function(t, e, i) {
          if (t && e) for (var r = 0, n = t.length; r < n; r++) if (e.call(i, t[r], r, t)) return t[r];
        }),
        (e.bind = v),
        (e.curry = function(t) {
          var e = l.call(arguments, 1);
          return function() {
            return t.apply(this, e.concat(l.call(arguments)));
          };
        }),
        (e.isArray = x),
        (e.isFunction = function(t) {
          return 'function' == typeof t;
        }),
        (e.isString = function(t) {
          return '[object String]' === n.call(t);
        }),
        (e.isObject = b),
        (e.isBuiltInObject = _),
        (e.isTypedArray = function(t) {
          return !!r[n.call(t)];
        }),
        (e.isDom = S),
        (e.eqNaN = function(t) {
          return t != t;
        }),
        (e.retrieve = function(t) {
          for (var e = 0, i = arguments.length; e < i; e++) if (null != arguments[e]) return arguments[e];
        }),
        (e.retrieve2 = function(t, e) {
          return null != t ? t : e;
        }),
        (e.retrieve3 = function(t, e, i) {
          return null != t ? t : null != e ? e : i;
        }),
        (e.slice = function() {
          return Function.call.apply(l, arguments);
        }),
        (e.normalizeCssArray = function(t) {
          if ('number' == typeof t) return [t, t, t, t];
          var e = t.length;
          return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
        }),
        (e.assert = function(t, e) {
          if (!t) throw new Error(e);
        }),
        (e.trim = function(t) {
          return null == t
            ? null
            : 'function' == typeof t.trim
            ? t.trim()
            : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }),
        (e.setAsPrimitive = function(t) {
          t[w] = !0;
        }),
        (e.isPrimitive = C),
        (e.createHashMap = function(t) {
          return new T(t);
        }),
        (e.concatArray = function(t, e) {
          for (var i = new t.constructor(t.length + e.length), r = 0; r < t.length; r++) i[r] = t[r];
          var n = t.length;
          for (r = 0; r < e.length; r++) i[r + n] = e[r];
          return i;
        }),
        (e.noop = function() {});
    },
    'cpAi': function(t, e, i) {
      'use strict';
      i.d(e, 'c', function() {
        return l;
      }),
        i.d(e, 'b', function() {
          return c;
        }),
        i.d(e, 'a', function() {
          return h;
        });
      var r = i('fXoL'),
        n = i('rDig'),
        o = i('ofXK'),
        a = ['tooltipContent'];
      function s(t, e) {}
      var l = function t() {
          _classCallCheck(this, t);
        },
        c = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = r.Nb({ type: t, selectors: [['ng-template', 'tdTooltipFormatter', '']] })),
            t
          );
        })(),
        h = (function() {
          var t = (function() {
            function t(e, i, r) {
              _classCallCheck(this, t),
                (this._changeDetectorRef = e),
                (this._elementRef = i),
                (this._optionsService = r),
                (this._state = {}),
                (this._context = new l()),
                (this.config = {}),
                (this.show = !0),
                (this.trigger = 'axis'),
                (this.showContent = !0),
                (this.alwaysShowContent = !1),
                (this.triggerOn = 'mousemove|click'),
                (this.showDelay = 0),
                (this.hideDelay = 0),
                (this.enterable = !1),
                (this.confine = !1),
                (this.transitionDuration = 0.5),
                (this.backgroundColor = 'rgba(50,50,50,0.7)'),
                (this.borderColor = '#333'),
                (this.borderWidth = 0),
                (this.padding = 5),
                (this.textStyle = { color: '#FFF' });
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnChanges',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._removeOption();
                  },
                },
                {
                  key: '_setOptions',
                  value: function() {
                    var t = Object(n.d)(
                      this._state,
                      {
                        show: this.show,
                        trigger: this.trigger,
                        axisPointer: this.axisPointer,
                        showContent: this.showContent,
                        alwaysShowContent: this.alwaysShowContent,
                        triggerOn: this.triggerOn,
                        showDelay: this.showDelay,
                        hideDelay: this.hideDelay,
                        enterable: this.enterable,
                        confine: this.confine,
                        transitionDuration: this.transitionDuration,
                        position: this.position,
                        formatter: this.formatter
                          ? this.formatter
                          : this.formatterTemplate
                          ? this._formatter()
                          : void 0,
                        backgroundColor: this.backgroundColor,
                        borderColor: this.borderColor,
                        borderWidth: this.borderWidth,
                        padding: this.padding,
                        textStyle: this.textStyle,
                        extraCssText: this.extraCssText,
                      },
                      this.config ? this.config : {},
                    );
                    this._optionsService.setOption('tooltip', t);
                  },
                },
                {
                  key: '_removeOption',
                  value: function() {
                    this._optionsService.clearOption('tooltip');
                  },
                },
                {
                  key: '_formatter',
                  value: function() {
                    var t = this;
                    return function(e, i, r) {
                      return (
                        (t._context = { $implicit: e, ticket: i }),
                        setTimeout(function() {
                          r(i, t._elementRef.nativeElement.innerHTML);
                        }),
                        t._changeDetectorRef.markForCheck(),
                        t._elementRef.nativeElement.innerHTML
                      );
                    };
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Sb(r.h), r.Sb(r.k), r.Sb(n.b));
            }),
            (t.ɵcmp = r.Mb({
              type: t,
              selectors: [['td-chart-tooltip']],
              contentQueries: function(t, e, i) {
                var n;
                1 & t && r.Mc(i, c, !0, r.M), 2 & t && r.Ec((n = r.hc())) && (e.formatterTemplate = n.first);
              },
              viewQuery: function(t, e) {
                var i;
                1 & t && r.Nc(a, !0), 2 & t && r.Ec((i = r.hc())) && (e.fullTemplate = i.first);
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                axisPointer: 'axisPointer',
                showContent: 'showContent',
                alwaysShowContent: 'alwaysShowContent',
                triggerOn: 'triggerOn',
                showDelay: 'showDelay',
                hideDelay: 'hideDelay',
                enterable: 'enterable',
                renderMode: 'renderMode',
                confine: 'confine',
                transitionDuration: 'transitionDuration',
                position: 'position',
                formatter: 'formatter',
                backgroundColor: 'backgroundColor',
                borderColor: 'borderColor',
                borderWidth: 'borderWidth',
                padding: 'padding',
                textStyle: 'textStyle',
                extraCssText: 'extraCssText',
              },
              features: [r.Bb()],
              decls: 2,
              vars: 2,
              consts: [
                [3, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
                ['tooltipContent', ''],
              ],
              template: function(t, e) {
                1 & t && r.Rc(0, s, 0, 0, 'ng-template', 0, 1, r.Sc),
                  2 & t && r.qc('ngTemplateOutlet', e.formatterTemplate)('ngTemplateOutletContext', e._context);
              },
              directives: [o.A],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'cvES': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return g;
      });
      var r = i('fXoL'),
        n = i('XNiG'),
        o = i('xgIS'),
        a = i('VRyK'),
        s = i('PqYM'),
        l = i('1G5W'),
        c = i('Kj3r'),
        h = i('/uUt'),
        u = i('vkgz'),
        d = i('ProS'),
        f = i('em/+'),
        p = i('UUrH'),
        g = (function() {
          var t = (function() {
            function t(e, i, o) {
              _classCallCheck(this, t),
                (this._changeDetectorRef = e),
                (this._elementRef = i),
                (this._optionsService = o),
                (this._destroy = new n.a()),
                (this._widthSubject = new n.a()),
                (this._heightSubject = new n.a()),
                (this._state = {}),
                (this._options = {}),
                (this.config = {}),
                (this.renderer = 'canvas'),
                (this.chartClick = new r.m()),
                (this.chartDblclick = new r.m()),
                (this.chartContextmenu = new r.m()),
                (this.magicTypeChanged = new r.m()),
                (this.dataViewChanged = new r.m()),
                (this.datazoom = new r.m()),
                (this.restore = new r.m());
            }
            return (
              _createClass(t, [
                {
                  key: 'ngAfterViewInit',
                  value: function() {
                    this._initializeChart();
                  },
                },
                {
                  key: 'ngOnChanges',
                  value: function(t) {
                    this._instance &&
                      (t.renderer || t.themeName || t.group
                        ? (this._disposeChart(), this._initializeChart())
                        : this.render());
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._disposeChart(), this._destroy.unsubscribe();
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    this._instance &&
                      (this._instance.setOption(
                        Object(p.a)(
                          this._state,
                          {
                            grid: {
                              show: !0,
                              left: '20',
                              right: '20',
                              bottom:
                                (this.config.toolbox && 'number' == typeof this.config.toolbox.bottom) ||
                                (this._options.toolbox && 'number' == typeof this._options.toolbox.bottom)
                                  ? '40'
                                  : '10',
                              top:
                                (this.config.toolbox && 'number' == typeof this.config.toolbox.top) ||
                                (this._options.toolbox && 'number' == typeof this._options.toolbox.top)
                                  ? '40'
                                  : '10',
                              containLabel: !0,
                            },
                          },
                          this._options,
                          this.config ? this.config : {},
                        ),
                        !0,
                      ),
                      this._changeDetectorRef.markForCheck());
                  },
                },
                {
                  key: '_initializeChart',
                  value: function() {
                    var t = this;
                    (this._instance = d.init(this._elementRef.nativeElement, this.themeName, {
                      renderer: this.renderer,
                    })),
                      Object(o.a)(this._instance, 'click')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.chartClick.next(e);
                        }),
                      Object(o.a)(this._instance, 'dblclick')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.chartDblclick.next(e);
                        }),
                      Object(o.a)(this._instance, 'contextmenu')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.chartContextmenu.next(e);
                        }),
                      Object(o.a)(this._instance, 'magictypechanged')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.magicTypeChanged.next(e);
                        }),
                      Object(o.a)(this._instance, 'dataviewchanged')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.dataViewChanged.next(e);
                        }),
                      Object(o.a)(this._instance, 'datazoom')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.datazoom.next(e);
                        }),
                      Object(o.a)(this._instance, 'restore')
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function(e) {
                          t.restore.next(e);
                        }),
                      this.group &&
                        ((this._instance.group = this.group),
                        d.connect(this.group),
                        this._changeDetectorRef.markForCheck()),
                      Object(a.a)(
                        Object(o.a)(window, 'resize').pipe(Object(c.a)(100)),
                        this._widthSubject.asObservable().pipe(Object(h.a)()),
                        this._heightSubject.asObservable().pipe(Object(h.a)()),
                      )
                        .pipe(Object(l.a)(this._destroy), Object(c.a)(100))
                        .subscribe(function() {
                          t._instance && (t._instance.resize(), t._changeDetectorRef.markForCheck());
                        }),
                      this._optionsService
                        .listen()
                        .pipe(
                          Object(u.a)(function(e) {
                            Object(p.a)(t._options, e);
                          }),
                          Object(c.a)(0),
                          Object(l.a)(this._destroy),
                        )
                        .subscribe(function() {
                          t.render();
                        }),
                      Object(s.a)(500, 250)
                        .pipe(Object(l.a)(this._destroy))
                        .subscribe(function() {
                          t._elementRef &&
                            t._elementRef.nativeElement &&
                            (t._widthSubject.next(t._elementRef.nativeElement.getBoundingClientRect().width),
                            t._heightSubject.next(t._elementRef.nativeElement.getBoundingClientRect().height));
                        });
                  },
                },
                {
                  key: '_disposeChart',
                  value: function() {
                    this._instance && (this._instance.clear(), d.dispose(this._instance)), this._destroy.next(!0);
                  },
                },
                {
                  key: 'instance',
                  get: function() {
                    return this._instance;
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Sb(r.h), r.Sb(r.k), r.Sb(f.b));
            }),
            (t.ɵcmp = r.Mb({
              type: t,
              selectors: [['td-chart']],
              inputs: { config: 'config', group: 'group', themeName: 'themeName', renderer: 'renderer' },
              outputs: {
                chartClick: 'chartClick',
                chartDblclick: 'chartDblclick',
                chartContextmenu: 'chartContextmenu',
                magicTypeChanged: 'magicTypeChanged',
                dataViewChanged: 'dataViewChanged',
                datazoom: 'datazoom',
                restore: 'restore',
              },
              features: [r.Cb([f.a]), r.Bb()],
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              styles: ['[_nghost-%COMP%]{display:block;width:100%}'],
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'dMvE': function(t, e) {
      var i = {
        linear: function(t) {
          return t;
        },
        quadraticIn: function(t) {
          return t * t;
        },
        quadraticOut: function(t) {
          return t * (2 - t);
        },
        quadraticInOut: function(t) {
          return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function(t) {
          return t * t * t;
        },
        cubicOut: function(t) {
          return --t * t * t + 1;
        },
        cubicInOut: function(t) {
          return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function(t) {
          return t * t * t * t;
        },
        quarticOut: function(t) {
          return 1 - --t * t * t * t;
        },
        quarticInOut: function(t) {
          return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function(t) {
          return t * t * t * t * t;
        },
        quinticOut: function(t) {
          return --t * t * t * t * t + 1;
        },
        quinticInOut: function(t) {
          return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function(t) {
          return 1 - Math.cos((t * Math.PI) / 2);
        },
        sinusoidalOut: function(t) {
          return Math.sin((t * Math.PI) / 2);
        },
        sinusoidalInOut: function(t) {
          return 0.5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function(t) {
          return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function(t) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (t *= 2) < 1
            ? 0.5 * Math.pow(1024, t - 1)
            : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: function(t) {
          return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function(t) {
          return Math.sqrt(1 - --t * t);
        },
        circularInOut: function(t) {
          return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function(t) {
          var e,
            i = 0.1;
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (!i || i < 1 ? ((i = 1), (e = 0.1)) : (e = (0.4 * Math.asin(1 / i)) / (2 * Math.PI)),
              -i * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / 0.4));
        },
        elasticOut: function(t) {
          var e,
            i = 0.1;
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (!i || i < 1 ? ((i = 1), (e = 0.1)) : (e = (0.4 * Math.asin(1 / i)) / (2 * Math.PI)),
              i * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / 0.4) + 1);
        },
        elasticInOut: function(t) {
          var e,
            i = 0.1;
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : (!i || i < 1 ? ((i = 1), (e = 0.1)) : (e = (0.4 * Math.asin(1 / i)) / (2 * Math.PI)),
              (t *= 2) < 1
                ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / 0.4) * -0.5
                : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / 0.4) * 0.5 + 1);
        },
        backIn: function(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        backOut: function(t) {
          var e = 1.70158;
          return --t * t * ((e + 1) * t + e) + 1;
        },
        backInOut: function(t) {
          var e = 2.5949095;
          return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function(t) {
          return 1 - i.bounceOut(1 - t);
        },
        bounceOut: function(t) {
          return t < 1 / 2.75
            ? 7.5625 * t * t
            : t < 2 / 2.75
            ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
            : t < 2.5 / 2.75
            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        bounceInOut: function(t) {
          return t < 0.5 ? 0.5 * i.bounceIn(2 * t) : 0.5 * i.bounceOut(2 * t - 1) + 0.5;
        },
      };
      t.exports = i;
    },
    'dqUG': function(t, e, i) {
      var r = i('Gev7'),
        n = i('bYtY'),
        o = i('6GrX'),
        a = i('pzxd'),
        s = i('gut8').ContextCachedBy,
        l = function(t) {
          r.call(this, t);
        };
      (l.prototype = {
        constructor: l,
        type: 'text',
        brush: function(t, e) {
          var i = this.style;
          this.__dirty && a.normalizeTextStyle(i, !0),
            (i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null);
          var r = i.text;
          null != r && (r += ''),
            a.needDrawText(r, i)
              ? (this.setTransform(t), a.renderText(this, t, r, i, null, e), this.restoreTransform(t))
              : (t.__attrCachedBy = s.NONE);
        },
        getBoundingRect: function() {
          var t = this.style;
          if ((this.__dirty && a.normalizeTextStyle(t, !0), !this._rect)) {
            var e = t.text;
            null != e ? (e += '') : (e = '');
            var i = o.getBoundingRect(
              t.text + '',
              t.font,
              t.textAlign,
              t.textVerticalAlign,
              t.textPadding,
              t.textLineHeight,
              t.rich,
            );
            if (((i.x += t.x || 0), (i.y += t.y || 0), a.getStroke(t.textStroke, t.textStrokeWidth))) {
              var r = t.textStrokeWidth;
              (i.x -= r / 2), (i.y -= r / 2), (i.width += r), (i.height += r);
            }
            this._rect = i;
          }
          return this._rect;
        },
      }),
        n.inherits(l, r),
        (t.exports = l);
    },
    'em/+': function(t, e, i) {
      'use strict';
      i.d(e, 'b', function() {
        return o;
      }),
        i.d(e, 'a', function() {
          return a;
        });
      var r = i('fXoL'),
        n = i('2Vo4'),
        o = (function() {
          var t = (function() {
            function t() {
              _classCallCheck(this, t), (this._options = {}), (this._optionsSubject = new n.a(this._options));
            }
            return (
              _createClass(t, [
                {
                  key: 'setOption',
                  value: function(t, e) {
                    var i = {};
                    (i[t] = e), Object.assign(this._options, i), this._optionsSubject.next(this._options);
                  },
                },
                {
                  key: 'setArrayOption',
                  value: function(t, e) {
                    var i = this.getOption(t);
                    if (i) {
                      var r = i.indexOf(e);
                      r > -1 ? (i[r] = e) : i.push(e);
                    } else i = [e];
                    this.setOption(t, i);
                  },
                },
                {
                  key: 'removeArrayOption',
                  value: function(t, e) {
                    var i = this.getOption(t);
                    if (i) {
                      var r = i.indexOf(e);
                      r > -1 ? (i[r] = null) : (i = []);
                    }
                    this.setOption(t, i);
                  },
                },
                {
                  key: 'getOption',
                  value: function(t) {
                    return this._options[t];
                  },
                },
                {
                  key: 'clearOption',
                  value: function(t) {
                    this.setOption(t, null);
                  },
                },
                {
                  key: 'listen',
                  value: function() {
                    return this._optionsSubject.asObservable();
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = r.Ob({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        a = {
          provide: o,
          deps: [[new r.A(), new r.K(), o]],
          useFactory: function(t) {
            return t || new o();
          },
        };
    },
    'fW2E': function(t, e) {
      var i = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1,
      };
      t.exports = function(t, e, r) {
        return i.hasOwnProperty(e) ? r * t.dpr : r;
      };
    },
    'fmMI': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = r.each,
        o = r.filter,
        a = r.map,
        s = r.isArray,
        l = r.indexOf,
        c = r.isObject,
        h = r.isString,
        u = r.createHashMap,
        d = r.assert,
        f = r.clone,
        p = r.merge,
        g = r.extend,
        m = r.mixin,
        y = i('4NO4'),
        v = i('Qxkt'),
        x = i('bLfw'),
        b = i('iXHM'),
        _ = i('5Hur'),
        S = i('D5nY').resetSourceDefaulter,
        w = '\0_ec_inner',
        C = v.extend({
          init: function(t, e, i, r) {
            (i = i || {}), (this.option = null), (this._theme = new v(i)), (this._optionManager = r);
          },
          setOption: function(t, e) {
            d(!(w in t), 'please use chart.getOption()'), this._optionManager.setOption(t, e), this.resetOption(null);
          },
          resetOption: function(t) {
            var e = !1,
              i = this._optionManager;
            if (!t || 'recreate' === t) {
              var r = i.mountOption('recreate' === t);
              this.option && 'recreate' !== t ? (this.restoreData(), this.mergeOption(r)) : T.call(this, r), (e = !0);
            }
            if (
              (('timeline' !== t && 'media' !== t) || this.restoreData(), !t || 'recreate' === t || 'timeline' === t)
            ) {
              var o = i.getTimelineOption(this);
              o && (this.mergeOption(o), (e = !0));
            }
            if (!t || 'recreate' === t || 'media' === t) {
              var a = i.getMediaOption(this, this._api);
              a.length &&
                n(
                  a,
                  function(t) {
                    this.mergeOption(t, (e = !0));
                  },
                  this,
                );
            }
            return e;
          },
          mergeOption: function(t) {
            var e = this.option,
              i = this._componentsMap,
              r = [];
            S(this),
              n(t, function(t, i) {
                null != t && (x.hasClass(i) ? i && r.push(i) : (e[i] = null == e[i] ? f(t) : p(e[i], t, !0)));
              }),
              x.topologicalTravel(
                r,
                x.getAllClassMainTypes(),
                function(r, o) {
                  var a = y.normalizeToArray(t[r]),
                    l = y.mappingToExists(i.get(r), a);
                  y.makeIdAndName(l),
                    n(l, function(t, e) {
                      var i = t.option;
                      c(i) &&
                        ((t.keyInfo.mainType = r),
                        (t.keyInfo.subType = (function(t, e, i) {
                          return e.type ? e.type : i ? i.subType : x.determineSubType(t, e);
                        })(r, i, t.exist)));
                    });
                  var h = (function(t, e) {
                    s(e) || (e = e ? [e] : []);
                    var i = {};
                    return (
                      n(e, function(e) {
                        i[e] = (t.get(e) || []).slice();
                      }),
                      i
                    );
                  })(i, o);
                  (e[r] = []),
                    i.set(r, []),
                    n(
                      l,
                      function(t, n) {
                        var o = t.exist,
                          a = t.option;
                        if ((d(c(a) || o, 'Empty component definition'), a)) {
                          var s = x.getClass(r, t.keyInfo.subType, !0);
                          if (o && o instanceof s)
                            (o.name = t.keyInfo.name), o.mergeOption(a, this), o.optionUpdated(a, !1);
                          else {
                            var l = g({ dependentModels: h, componentIndex: n }, t.keyInfo);
                            (o = new s(a, this, this, l)), g(o, l), o.init(a, this, this, l), o.optionUpdated(null, !0);
                          }
                        } else o.mergeOption({}, this), o.optionUpdated({}, !1);
                        (i.get(r)[n] = o), (e[r][n] = o.option);
                      },
                      this,
                    ),
                    'series' === r && k(this, i.get('series'));
                },
                this,
              ),
              (this._seriesIndicesMap = u((this._seriesIndices = this._seriesIndices || [])));
          },
          getOption: function() {
            var t = f(this.option);
            return (
              n(t, function(e, i) {
                if (x.hasClass(i)) {
                  for (var r = (e = y.normalizeToArray(e)).length - 1; r >= 0; r--) y.isIdInner(e[r]) && e.splice(r, 1);
                  t[i] = e;
                }
              }),
              delete t[w],
              t
            );
          },
          getTheme: function() {
            return this._theme;
          },
          getComponent: function(t, e) {
            var i = this._componentsMap.get(t);
            if (i) return i[e || 0];
          },
          queryComponents: function(t) {
            var e = t.mainType;
            if (!e) return [];
            var i,
              r = t.index,
              n = t.id,
              c = t.name,
              h = this._componentsMap.get(e);
            if (!h || !h.length) return [];
            if (null != r)
              s(r) || (r = [r]),
                (i = o(
                  a(r, function(t) {
                    return h[t];
                  }),
                  function(t) {
                    return !!t;
                  },
                ));
            else if (null != n) {
              var u = s(n);
              i = o(h, function(t) {
                return (u && l(n, t.id) >= 0) || (!u && t.id === n);
              });
            } else if (null != c) {
              var d = s(c);
              i = o(h, function(t) {
                return (d && l(c, t.name) >= 0) || (!d && t.name === c);
              });
            } else i = h.slice();
            return M(i, t);
          },
          findComponents: function(t) {
            var e,
              i,
              r,
              n,
              a,
              s = t.mainType,
              l =
                ((i = s + 'Index'),
                (r = s + 'Id'),
                (n = s + 'Name'),
                !(e = t.query) || (null == e[i] && null == e[r] && null == e[n])
                  ? null
                  : { mainType: s, index: e[i], id: e[r], name: e[n] });
            return (a = M(l ? this.queryComponents(l) : this._componentsMap.get(s), t)), t.filter ? o(a, t.filter) : a;
          },
          eachComponent: function(t, e, i) {
            var r = this._componentsMap;
            if ('function' == typeof t)
              (i = e),
                (e = t),
                r.each(function(t, r) {
                  n(t, function(t, n) {
                    e.call(i, r, t, n);
                  });
                });
            else if (h(t)) n(r.get(t), e, i);
            else if (c(t)) {
              var o = this.findComponents(t);
              n(o, e, i);
            }
          },
          getSeriesByName: function(t) {
            var e = this._componentsMap.get('series');
            return o(e, function(e) {
              return e.name === t;
            });
          },
          getSeriesByIndex: function(t) {
            return this._componentsMap.get('series')[t];
          },
          getSeriesByType: function(t) {
            var e = this._componentsMap.get('series');
            return o(e, function(e) {
              return e.subType === t;
            });
          },
          getSeries: function() {
            return this._componentsMap.get('series').slice();
          },
          getSeriesCount: function() {
            return this._componentsMap.get('series').length;
          },
          eachSeries: function(t, e) {
            n(
              this._seriesIndices,
              function(i) {
                var r = this._componentsMap.get('series')[i];
                t.call(e, r, i);
              },
              this,
            );
          },
          eachRawSeries: function(t, e) {
            n(this._componentsMap.get('series'), t, e);
          },
          eachSeriesByType: function(t, e, i) {
            n(
              this._seriesIndices,
              function(r) {
                var n = this._componentsMap.get('series')[r];
                n.subType === t && e.call(i, n, r);
              },
              this,
            );
          },
          eachRawSeriesByType: function(t, e, i) {
            return n(this.getSeriesByType(t), e, i);
          },
          isSeriesFiltered: function(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex);
          },
          getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice();
          },
          filterSeries: function(t, e) {
            k(this, o(this._componentsMap.get('series'), t, e));
          },
          restoreData: function(t) {
            var e = this._componentsMap;
            k(this, e.get('series'));
            var i = [];
            e.each(function(t, e) {
              i.push(e);
            }),
              x.topologicalTravel(i, x.getAllClassMainTypes(), function(i, r) {
                n(e.get(i), function(e) {
                  ('series' !== i ||
                    !(function(t, e) {
                      if (e) {
                        var i = e.seiresIndex,
                          r = e.seriesId,
                          n = e.seriesName;
                        return (
                          (null != i && t.componentIndex !== i) ||
                          (null != r && t.id !== r) ||
                          (null != n && t.name !== n)
                        );
                      }
                    })(e, t)) &&
                    e.restoreData();
                });
              });
          },
        });
      function T(t) {
        var e, i;
        (t = t),
          (this.option = {}),
          (this.option[w] = 1),
          (this._componentsMap = u({ series: [] })),
          (i = (e = t).color && !e.colorLayer),
          n(this._theme.option, function(t, r) {
            ('colorLayer' === r && i) ||
              x.hasClass(r) ||
              ('object' == typeof t ? (e[r] = e[r] ? p(e[r], t, !1) : f(t)) : null == e[r] && (e[r] = t));
          }),
          p(t, b, !1),
          this.mergeOption(t);
      }
      function k(t, e) {
        t._seriesIndicesMap = u(
          (t._seriesIndices =
            a(e, function(t) {
              return t.componentIndex;
            }) || []),
        );
      }
      function M(t, e) {
        return e.hasOwnProperty('subType')
          ? o(t, function(t) {
              return t.subType === e.subType;
            })
          : t;
      }
      m(C, _), (t.exports = C);
    },
    'gPAo': function(t, e) {
      function i(t) {
        return t;
      }
      function r(t, e, r, n, o) {
        (this._old = t),
          (this._new = e),
          (this._oldKeyGetter = r || i),
          (this._newKeyGetter = n || i),
          (this.context = o);
      }
      function n(t, e, i, r, n) {
        for (var o = 0; o < t.length; o++) {
          var a = '_ec_' + n[r](t[o], o),
            s = e[a];
          null == s ? (i.push(a), (e[a] = o)) : (s.length || (e[a] = s = [s]), s.push(o));
        }
      }
      (r.prototype = {
        constructor: r,
        add: function(t) {
          return (this._add = t), this;
        },
        update: function(t) {
          return (this._update = t), this;
        },
        remove: function(t) {
          return (this._remove = t), this;
        },
        execute: function() {
          var t = this._old,
            e = this._new,
            i = {},
            r = [],
            o = [];
          for (n(t, {}, r, '_oldKeyGetter', this), n(e, i, o, '_newKeyGetter', this), a = 0; a < t.length; a++)
            null != (l = i[(s = r[a])])
              ? ((h = l.length) ? (1 === h && (i[s] = null), (l = l.unshift())) : (i[s] = null),
                this._update && this._update(l, a))
              : this._remove && this._remove(a);
          for (var a = 0; a < o.length; a++) {
            var s;
            if (i.hasOwnProperty((s = o[a]))) {
              var l;
              if (null == (l = i[s])) continue;
              if (l.length) for (var c = 0, h = l.length; c < h; c++) this._add && this._add(l[c]);
              else this._add && this._add(l);
            }
          }
        },
      }),
        (t.exports = r);
    },
    'gut8': function(t, e) {
      (e.ContextCachedBy = { NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2 }), (e.WILL_BE_RESTORED = 9);
    },
    'gvm7': function(t, e, i) {
      var r = i('bYtY'),
        n = i('dqUG');
      function o(t) {
        (this._zr = t.getZr()), (this._show = !1);
      }
      (o.prototype = {
        constructor: o,
        _enterable: !0,
        update: function() {},
        show: function(t) {
          this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr('show', !0), (this._show = !0);
        },
        setContent: function(t, e, i) {
          this.el && this._zr.remove(this.el);
          for (var r = {}, o = t, a = o.indexOf('{marker'); a >= 0; ) {
            var s = o.indexOf('|}'),
              l = o.substr(a + '{marker'.length, s - a - '{marker'.length);
            (r['marker' + l] =
              l.indexOf('sub') > -1
                ? { textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[l], textOffset: [3, 0] }
                : { textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[l] }),
              (a = (o = o.substr(s + 1)).indexOf('{marker'));
          }
          (this.el = new n({
            style: {
              rich: r,
              text: t,
              textLineHeight: 20,
              textBackgroundColor: i.get('backgroundColor'),
              textBorderRadius: i.get('borderRadius'),
              textFill: i.get('textStyle.color'),
              textPadding: i.get('padding'),
            },
            z: i.get('z'),
          })),
            this._zr.add(this.el);
          var c = this;
          this.el.on('mouseover', function() {
            c._enterable && (clearTimeout(c._hideTimeout), (c._show = !0)), (c._inContent = !0);
          }),
            this.el.on('mouseout', function() {
              c._enterable && c._show && c.hideLater(c._hideDelay), (c._inContent = !1);
            });
        },
        setEnterable: function(t) {
          this._enterable = t;
        },
        getSize: function() {
          var t = this.el.getBoundingRect();
          return [t.width, t.height];
        },
        moveTo: function(t, e) {
          this.el && this.el.attr('position', [t, e]);
        },
        hide: function() {
          this.el.hide(), (this._show = !1);
        },
        hideLater: function(t) {
          !this._show ||
            (this._inContent && this._enterable) ||
            (t
              ? ((this._hideDelay = t), (this._show = !1), (this._hideTimeout = setTimeout(r.bind(this.hide, this), t)))
              : this.hide());
        },
        isShow: function() {
          return this._show;
        },
        getOuterSize: function() {
          return this.getSize();
        },
      }),
        (t.exports = o);
    },
    'h7HQ': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('T6xi'),
        o = r.extend({
          type: 'polygon',
          shape: { points: null, smooth: !1, smoothConstraint: null },
          buildPath: function(t, e) {
            n.buildPath(t, e, !0);
          },
        });
      t.exports = o;
    },
    'hD7B': function(t, e, i) {
      var r = i('bYtY'),
        n = [
          'getDom',
          'getZr',
          'getWidth',
          'getHeight',
          'getDevicePixelRatio',
          'dispatchAction',
          'isDisposed',
          'on',
          'off',
          'getDataURL',
          'getConnectedDataURL',
          'getModel',
          'getOption',
          'getViewOfComponentModel',
          'getViewOfSeriesModel',
        ];
      t.exports = function(t) {
        r.each(
          n,
          function(e) {
            this[e] = r.bind(t[e], t);
          },
          this,
        );
      };
    },
    'hM6l': function(t, e, i) {
      var r = i('bYtY'),
        n = r.each,
        o = r.map,
        a = i('OELB'),
        s = a.linearMap,
        l = a.getPixelPrecision,
        c = i('4HMb'),
        h = c.createAxisTicks,
        u = c.createAxisLabels,
        d = c.calculateCategoryInterval,
        f = [0, 1],
        p = function(t, e, i) {
          (this.dim = t), (this.scale = e), (this._extent = i || [0, 0]), (this.inverse = !1), (this.onBand = !1);
        };
      function g(t, e) {
        var i = (t[1] - t[0]) / e / 2;
        (t[0] += i), (t[1] -= i);
      }
      (p.prototype = {
        constructor: p,
        contain: function(t) {
          var e = this._extent,
            i = Math.min(e[0], e[1]),
            r = Math.max(e[0], e[1]);
          return t >= i && t <= r;
        },
        containData: function(t) {
          return this.contain(this.dataToCoord(t));
        },
        getExtent: function() {
          return this._extent.slice();
        },
        getPixelPrecision: function(t) {
          return l(t || this.scale.getExtent(), this._extent);
        },
        setExtent: function(t, e) {
          var i = this._extent;
          (i[0] = t), (i[1] = e);
        },
        dataToCoord: function(t, e) {
          var i = this._extent,
            r = this.scale;
          return (
            (t = r.normalize(t)), this.onBand && 'ordinal' === r.type && g((i = i.slice()), r.count()), s(t, f, i, e)
          );
        },
        coordToData: function(t, e) {
          var i = this._extent,
            r = this.scale;
          this.onBand && 'ordinal' === r.type && g((i = i.slice()), r.count());
          var n = s(t, i, f, e);
          return this.scale.scale(n);
        },
        pointToData: function(t, e) {},
        getTicksCoords: function(t) {
          var e = (t = t || {}).tickModel || this.getTickModel(),
            i = h(this, e),
            r = o(
              i.ticks,
              function(t) {
                return { coord: this.dataToCoord(t), tickValue: t };
              },
              this,
            );
          return (
            (function(t, e, i, r, o) {
              var a = e.length;
              if (t.onBand && !r && a) {
                var s,
                  l = t.getExtent();
                if (1 === a) (e[0].coord = l[0]), (s = e[1] = { coord: l[0] });
                else {
                  var c = e[1].coord - e[0].coord;
                  n(e, function(t) {
                    t.coord -= c / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= c / (2 * (e + 1)));
                  }),
                    e.push((s = { coord: e[a - 1].coord + c }));
                }
                var h = l[0] > l[1];
                u(e[0].coord, l[0]) && (o ? (e[0].coord = l[0]) : e.shift()),
                  o && u(l[0], e[0].coord) && e.unshift({ coord: l[0] }),
                  u(l[1], s.coord) && (o ? (s.coord = l[1]) : e.pop()),
                  o && u(s.coord, l[1]) && e.push({ coord: l[1] });
              }
              function u(t, e) {
                return h ? t > e : t < e;
              }
            })(this, r, 0, e.get('alignWithLabel'), t.clamp),
            r
          );
        },
        getViewLabels: function() {
          return u(this).labels;
        },
        getLabelModel: function() {
          return this.model.getModel('axisLabel');
        },
        getTickModel: function() {
          return this.model.getModel('axisTick');
        },
        getBandWidth: function() {
          var t = this._extent,
            e = this.scale.getExtent(),
            i = e[1] - e[0] + (this.onBand ? 1 : 0);
          0 === i && (i = 1);
          var r = Math.abs(t[1] - t[0]);
          return Math.abs(r) / i;
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function() {
          return d(this);
        },
      }),
        (t.exports = p);
    },
    'hX1E': function(t, e) {
      var i = 2 * Math.PI;
      e.normalizeRadian = function(t) {
        return (t %= i) < 0 && (t += i), t;
      };
    },
    'hi0g': function(t, e, i) {
      var r = i('bYtY'),
        n = r.createHashMap,
        o = r.each,
        a = r.isString,
        s = r.defaults,
        l = r.extend,
        c = r.isObject,
        h = r.clone,
        u = i('4NO4').normalizeToArray,
        d = i('D5nY').guessOrdinal,
        f = i('7G+c'),
        p = i('L0Ub').OTHER_DIMENSIONS;
      function g(t, e, i) {
        if (i || null != e.get(t)) {
          for (var r = 0; null != e.get(t + r); ) r++;
          t += r;
        }
        return e.set(t, !0), t;
      }
      t.exports = function(t, e, i) {
        f.isInstance(e) || (e = f.seriesDataToSource(e)), (i = i || {}), (t = (t || []).slice());
        for (
          var r = (i.dimsDef || []).slice(),
            m = n(i.encodeDef),
            y = n(),
            v = n(),
            x = [],
            b = (function(t, e, i, r) {
              var n = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, r || 0);
              return (
                o(e, function(t) {
                  var e = t.dimsDef;
                  e && (n = Math.max(n, e.length));
                }),
                n
              );
            })(e, t, r, i.dimCount),
            _ = 0;
          _ < b;
          _++
        ) {
          var S = (r[_] = l({}, c(r[_]) ? r[_] : { name: r[_] })),
            w = S.name,
            C = (x[_] = { otherDims: {} });
          null != w && null == y.get(w) && ((C.name = C.displayName = w), y.set(w, _)),
            null != S.type && (C.type = S.type),
            null != S.displayName && (C.displayName = S.displayName);
        }
        m.each(function(t, e) {
          if (1 === (t = u(t).slice()).length && t[0] < 0) m.set(e, !1);
          else {
            var i = m.set(e, []);
            o(t, function(t, r) {
              a(t) && (t = y.get(t)), null != t && t < b && ((i[r] = t), k(x[t], e, r));
            });
          }
        });
        var T = 0;
        function k(t, e, i) {
          null != p.get(e) ? (t.otherDims[e] = i) : ((t.coordDim = e), (t.coordDimIndex = i), v.set(e, !0));
        }
        o(t, function(t, e) {
          var i, r, n;
          if (a(t)) (i = t), (t = {});
          else {
            i = t.name;
            var l = t.ordinalMeta;
            (t.ordinalMeta = null),
              ((t = h(t)).ordinalMeta = l),
              (r = t.dimsDef),
              (n = t.otherDims),
              (t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
          }
          if (!1 !== (d = m.get(i))) {
            var d;
            if (!(d = u(d)).length)
              for (var f = 0; f < ((r && r.length) || 1); f++) {
                for (; T < x.length && null != x[T].coordDim; ) T++;
                T < x.length && d.push(T++);
              }
            o(d, function(e, o) {
              var a = x[e];
              if ((k(s(a, t), i, o), null == a.name && r)) {
                var l = r[o];
                !c(l) && (l = { name: l }), (a.name = a.displayName = l.name), (a.defaultTooltip = l.defaultTooltip);
              }
              n && s(a.otherDims, n);
            });
          }
        });
        var M = i.generateCoord,
          A = i.generateCoordCount,
          D = null != A;
        A = M ? A || 1 : 0;
        for (var I = M || 'value', O = 0; O < b; O++)
          null == (C = x[O] = x[O] || {}).coordDim &&
            ((C.coordDim = g(I, v, D)), (C.coordDimIndex = 0), (!M || A <= 0) && (C.isExtraCoord = !0), A--),
            null == C.name && (C.name = g(C.coordDim, y)),
            null == C.type && d(e, O, C.name) && (C.type = 'ordinal');
        return x;
      };
    },
    'hydK': function(t, e) {
      e.createElement = function(t) {
        return document.createElementNS('http://www.w3.org/2000/svg', t);
      };
    },
    'hyiK': function(t, e) {
      t.exports = function(t, e, i, r, n, o) {
        if ((o > e && o > r) || (o < e && o < r)) return 0;
        if (r === e) return 0;
        var a = r < e ? 1 : -1,
          s = (o - e) / (r - e);
        (1 !== s && 0 !== s) || (a = r < e ? 0.5 : -0.5);
        var l = s * (i - t) + t;
        return l === n ? 1 / 0 : l > n ? a : 0;
      };
    },
    'i38C': function(t, e, i) {
      i('Tghj');
      var r = i('bYtY'),
        n = r.createHashMap,
        o = r.each,
        a = {
          cartesian2d: function(t, e, i, r) {
            var n = t.getReferringComponents('xAxis')[0],
              o = t.getReferringComponents('yAxis')[0];
            (e.coordSysDims = ['x', 'y']),
              i.set('x', n),
              i.set('y', o),
              s(n) && (r.set('x', n), (e.firstCategoryDimIndex = 0)),
              s(o) && (r.set('y', o), (e.firstCategoryDimIndex = 1));
          },
          singleAxis: function(t, e, i, r) {
            var n = t.getReferringComponents('singleAxis')[0];
            (e.coordSysDims = ['single']),
              i.set('single', n),
              s(n) && (r.set('single', n), (e.firstCategoryDimIndex = 0));
          },
          polar: function(t, e, i, r) {
            var n = t.getReferringComponents('polar')[0],
              o = n.findAxisModel('radiusAxis'),
              a = n.findAxisModel('angleAxis');
            (e.coordSysDims = ['radius', 'angle']),
              i.set('radius', o),
              i.set('angle', a),
              s(o) && (r.set('radius', o), (e.firstCategoryDimIndex = 0)),
              s(a) && (r.set('angle', a), (e.firstCategoryDimIndex = 1));
          },
          geo: function(t, e, i, r) {
            e.coordSysDims = ['lng', 'lat'];
          },
          parallel: function(t, e, i, r) {
            var n = t.ecModel,
              a = n.getComponent('parallel', t.get('parallelIndex')),
              l = (e.coordSysDims = a.dimensions.slice());
            o(a.parallelAxisIndex, function(t, o) {
              var a = n.getComponent('parallelAxis', t),
                c = l[o];
              i.set(c, a), s(a) && null == e.firstCategoryDimIndex && (r.set(c, a), (e.firstCategoryDimIndex = o));
            });
          },
        };
      function s(t) {
        return 'category' === t.get('type');
      }
      e.getCoordSysDefineBySeries = function(t) {
        var e = t.get('coordinateSystem'),
          i = { coordSysName: e, coordSysDims: [], axisMap: n(), categoryAxisMap: n() },
          r = a[e];
        if (r) return r(t, i, i.axisMap, i.categoryAxisMap), i;
      };
    },
    'iLNv': function(t, e) {
      var i = '\0__throttleOriginMethod',
        r = '\0__throttleRate';
      function n(t, e, i) {
        var r,
          n,
          o,
          a,
          s,
          l = 0,
          c = 0,
          h = null;
        function u() {
          (c = new Date().getTime()), (h = null), t.apply(o, a || []);
        }
        e = e || 0;
        var d = function() {
          (r = new Date().getTime()), (o = this), (a = arguments);
          var t = s || e,
            d = s || i;
          (s = null),
            (n = r - (d ? l : c) - t),
            clearTimeout(h),
            d ? (h = setTimeout(u, t)) : n >= 0 ? u() : (h = setTimeout(u, -n)),
            (l = r);
        };
        return (
          (d.clear = function() {
            h && (clearTimeout(h), (h = null));
          }),
          (d.debounceNextCall = function(t) {
            s = t;
          }),
          d
        );
      }
      (e.throttle = n),
        (e.createOrUpdate = function(t, e, o, a) {
          var s = t[e];
          if (s) {
            var l = s[i] || s;
            if (s[r] !== o || s['\0__throttleType'] !== a) {
              if (null == o || !a) return (t[e] = l);
              ((s = t[e] = n(l, o, 'debounce' === a))[i] = l), (s['\0__throttleType'] = a), (s[r] = o);
            }
            return s;
          }
        }),
        (e.clear = function(t, e) {
          var r = t[e];
          r && r[i] && (t[e] = r[i]);
        });
    },
    'iRjW': function(t, e, i) {
      var r = i('bYtY'),
        n = i('Yl7c').parseClassType,
        o = 0;
      (e.getUID = function(t) {
        return [t || '', o++, Math.random().toFixed(5)].join('_');
      }),
        (e.enableSubTypeDefaulter = function(t) {
          var e = {};
          return (
            (t.registerSubTypeDefaulter = function(t, i) {
              (t = n(t)), (e[t.main] = i);
            }),
            (t.determineSubType = function(i, r) {
              var o = r.type;
              if (!o) {
                var a = n(i).main;
                t.hasSubTypes(i) && e[a] && (o = e[a](r));
              }
              return o;
            }),
            t
          );
        }),
        (e.enableTopologicalTravel = function(t, e) {
          function i(t, e) {
            return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
          }
          t.topologicalTravel = function(t, n, o, a) {
            if (t.length) {
              var s = (function(t) {
                  var n = {},
                    o = [];
                  return (
                    r.each(t, function(a) {
                      var s = i(n, a),
                        l = (function(t, e) {
                          var i = [];
                          return (
                            r.each(t, function(t) {
                              r.indexOf(e, t) >= 0 && i.push(t);
                            }),
                            i
                          );
                        })((s.originalDeps = e(a)), t);
                      (s.entryCount = l.length),
                        0 === s.entryCount && o.push(a),
                        r.each(l, function(t) {
                          r.indexOf(s.predecessor, t) < 0 && s.predecessor.push(t);
                          var e = i(n, t);
                          r.indexOf(e.successor, t) < 0 && e.successor.push(a);
                        });
                    }),
                    { graph: n, noEntryList: o }
                  );
                })(n),
                l = s.graph,
                c = s.noEntryList,
                h = {};
              for (
                r.each(t, function(t) {
                  h[t] = !0;
                });
                c.length;

              ) {
                var u = c.pop(),
                  d = l[u],
                  f = !!h[u];
                f && (o.call(a, u, d.originalDeps.slice()), delete h[u]), r.each(d.successor, f ? g : p);
              }
              r.each(h, function() {
                throw new Error('Circle dependency may exists');
              });
            }
            function p(t) {
              l[t].entryCount--, 0 === l[t].entryCount && c.push(t);
            }
            function g(t) {
              (h[t] = !0), p(t);
            }
          };
        });
    },
    'iXHM': function(t, e) {
      var i = '';
      'undefined' != typeof navigator && (i = navigator.platform || '');
      var r = {
        color: [
          '#c23531',
          '#2f4554',
          '#61a0a8',
          '#d48265',
          '#91c7ae',
          '#749f83',
          '#ca8622',
          '#bda29a',
          '#6e7074',
          '#546570',
          '#c4ccd3',
        ],
        gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
        textStyle: {
          fontFamily: i.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
        blendMode: null,
        animation: 'auto',
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: 'exponentialOut',
        animationEasingUpdate: 'cubicOut',
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1,
      };
      t.exports = r;
    },
    'iXp4': function(t, e, i) {
      var r = i('ItGF'),
        n = [
          ['shadowBlur', 0],
          ['shadowColor', '#000'],
          ['shadowOffsetX', 0],
          ['shadowOffsetY', 0],
        ];
      t.exports = function(t) {
        return r.browser.ie && r.browser.version >= 11
          ? function() {
              var e,
                i = this.__clipPaths,
                r = this.style;
              if (i)
                for (var o = 0; o < i.length; o++) {
                  var a = i[o],
                    s = a && a.shape,
                    l = a && a.type;
                  if (
                    s &&
                    (('sector' === l && s.startAngle === s.endAngle) || ('rect' === l && (!s.width || !s.height)))
                  ) {
                    for (var c = 0; c < n.length; c++) (n[c][2] = r[n[c][0]]), (r[n[c][0]] = n[c][1]);
                    e = !0;
                    break;
                  }
                }
              if ((t.apply(this, arguments), e)) for (c = 0; c < n.length; c++) r[n[c][0]] = n[c][2];
            }
          : t;
      };
    },
    'ieMj': function(t, e, i) {
      var r = i('OELB'),
        n = i('7aKB'),
        o = i('4NgU'),
        a = i('lE7J'),
        s = r.round,
        l = o.extend({
          type: 'interval',
          _interval: 0,
          _intervalPrecision: 2,
          setExtent: function(t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e));
          },
          unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1]);
          },
          getInterval: function() {
            return this._interval;
          },
          setInterval: function(t) {
            (this._interval = t),
              (this._niceExtent = this._extent.slice()),
              (this._intervalPrecision = a.getIntervalPrecision(t));
          },
          getTicks: function() {
            return a.intervalScaleGetTicks(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
          },
          getLabel: function(t, e) {
            if (null == t) return '';
            var i = e && e.precision;
            return (
              null == i ? (i = r.getPrecisionSafe(t) || 0) : 'auto' === i && (i = this._intervalPrecision),
              (t = s(t, i, !0)),
              n.addCommas(t)
            );
          },
          niceTicks: function(t, e, i) {
            t = t || 5;
            var r = this._extent,
              n = r[1] - r[0];
            if (isFinite(n)) {
              n < 0 && ((n = -n), r.reverse());
              var o = a.intervalScaleNiceTicks(r, t, e, i);
              (this._intervalPrecision = o.intervalPrecision),
                (this._interval = o.interval),
                (this._niceExtent = o.niceTickExtent);
            }
          },
          niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1])
              if (0 !== e[0]) {
                var i = e[0];
                t.fixMax ? (e[0] -= i / 2) : ((e[1] += i / 2), (e[0] -= i / 2));
              } else e[1] = 1;
            isFinite(e[1] - e[0]) || ((e[0] = 0), (e[1] = 1)),
              this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = s(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = s(Math.ceil(e[1] / r) * r));
          },
        });
      (l.create = function() {
        return new l();
      }),
        (t.exports = l);
    },
    'jCoz': function(t, e, i) {
      var r = i('bYtY'),
        n = i('4NgU'),
        o = i('OELB'),
        a = i('ieMj'),
        s = n.prototype,
        l = a.prototype,
        c = o.getPrecisionSafe,
        h = o.round,
        u = Math.floor,
        d = Math.ceil,
        f = Math.pow,
        p = Math.log,
        g = n.extend({
          type: 'log',
          base: 10,
          $constructor: function() {
            n.apply(this, arguments), (this._originalScale = new a());
          },
          getTicks: function() {
            var t = this._originalScale,
              e = this._extent,
              i = t.getExtent();
            return r.map(
              l.getTicks.call(this),
              function(r) {
                var n = o.round(f(this.base, r));
                return (n = r === e[0] && t.__fixMin ? m(n, i[0]) : n), r === e[1] && t.__fixMax ? m(n, i[1]) : n;
              },
              this,
            );
          },
          getLabel: l.getLabel,
          scale: function(t) {
            return (t = s.scale.call(this, t)), f(this.base, t);
          },
          setExtent: function(t, e) {
            var i = this.base;
            (t = p(t) / p(i)), (e = p(e) / p(i)), l.setExtent.call(this, t, e);
          },
          getExtent: function() {
            var t = this.base,
              e = s.getExtent.call(this);
            (e[0] = f(t, e[0])), (e[1] = f(t, e[1]));
            var i = this._originalScale,
              r = i.getExtent();
            return i.__fixMin && (e[0] = m(e[0], r[0])), i.__fixMax && (e[1] = m(e[1], r[1])), e;
          },
          unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            (t[0] = p(t[0]) / p(e)), (t[1] = p(t[1]) / p(e)), s.unionExtent.call(this, t);
          },
          unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
          },
          niceTicks: function(t) {
            t = t || 10;
            var e = this._extent,
              i = e[1] - e[0];
            if (!(i === 1 / 0 || i <= 0)) {
              var r = o.quantity(i);
              for ((t / i) * r <= 0.5 && (r *= 10); !isNaN(r) && Math.abs(r) < 1 && Math.abs(r) > 0; ) r *= 10;
              var n = [o.round(d(e[0] / r) * r), o.round(u(e[1] / r) * r)];
              (this._interval = r), (this._niceExtent = n);
            }
          },
          niceExtent: function(t) {
            l.niceExtent.call(this, t);
            var e = this._originalScale;
            (e.__fixMin = t.fixMin), (e.__fixMax = t.fixMax);
          },
        });
      function m(t, e) {
        return h(t, c(e));
      }
      r.each(['contain', 'normalize'], function(t) {
        g.prototype[t] = function(e) {
          return (e = p(e) / p(this.base)), s[t].call(this, e);
        };
      }),
        (g.create = function() {
          return new g();
        }),
        (t.exports = g);
    },
    'jTL6': function(t, e, i) {
      var r = i('y+Vt').extend({
        type: 'arc',
        shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 },
        style: { stroke: '#000', fill: null },
        buildPath: function(t, e) {
          var i = e.cx,
            r = e.cy,
            n = Math.max(e.r, 0),
            o = e.startAngle,
            a = e.endAngle,
            s = e.clockwise,
            l = Math.cos(o),
            c = Math.sin(o);
          t.moveTo(l * n + i, c * n + r), t.arc(i, r, n, o, a, !s);
        },
      });
      t.exports = r;
    },
    'jkPA': function(t, e, i) {
      var r = i('bYtY'),
        n = r.createHashMap,
        o = r.isObject,
        a = r.map;
      function s(t) {
        (this.categories = t.categories || []),
          (this._needCollect = t.needCollect),
          (this._deduplication = t.deduplication);
      }
      s.createByAxisModel = function(t) {
        var e = t.option,
          i = e.data,
          r = i && a(i, h);
        return new s({ categories: r, needCollect: !r, deduplication: !1 !== e.dedplication });
      };
      var l = s.prototype;
      function c(t) {
        return t._map || (t._map = n(t.categories));
      }
      function h(t) {
        return o(t) && null != t.value ? t.value : t + '';
      }
      (l.getOrdinal = function(t) {
        return c(this).get(t);
      }),
        (l.parseAndCollect = function(t) {
          var e,
            i = this._needCollect;
          if ('string' != typeof t && !i) return t;
          if (i && !this._deduplication) return (this.categories[(e = this.categories.length)] = t), e;
          var r = c(this);
          return (
            null == (e = r.get(t)) &&
              (i ? ((this.categories[(e = this.categories.length)] = t), r.set(t, e)) : (e = NaN)),
            e
          );
        }),
        (t.exports = s);
    },
    'juDX': function(t, e, i) {
      i('P47w'), (0, i('aX58').registerPainter)('svg', i('3CBa'));
    },
    'k9D9': function(t, e) {
      (e.SOURCE_FORMAT_ORIGINAL = 'original'),
        (e.SOURCE_FORMAT_ARRAY_ROWS = 'arrayRows'),
        (e.SOURCE_FORMAT_OBJECT_ROWS = 'objectRows'),
        (e.SOURCE_FORMAT_KEYED_COLUMNS = 'keyedColumns'),
        (e.SOURCE_FORMAT_UNKNOWN = 'unknown'),
        (e.SOURCE_FORMAT_TYPED_ARRAY = 'typedArray'),
        (e.SERIES_LAYOUT_BY_COLUMN = 'column'),
        (e.SERIES_LAYOUT_BY_ROW = 'row');
    },
    'lE7J': function(t, e, i) {
      var r = i('OELB'),
        n = r.round;
      function o(t) {
        return r.getPrecisionSafe(t) + 2;
      }
      function a(t, e, i) {
        t[e] = Math.max(Math.min(t[e], i[1]), i[0]);
      }
      function s(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]),
          !isFinite(t[1]) && (t[1] = e[1]),
          a(t, 0, e),
          a(t, 1, e),
          t[0] > t[1] && (t[0] = t[1]);
      }
      (e.intervalScaleNiceTicks = function(t, e, i, a) {
        var l = {},
          c = (l.interval = r.nice((t[1] - t[0]) / e, !0));
        null != i && c < i && (c = l.interval = i), null != a && c > a && (c = l.interval = a);
        var h = (l.intervalPrecision = o(c));
        return s((l.niceTickExtent = [n(Math.ceil(t[0] / c) * c, h), n(Math.floor(t[1] / c) * c, h)]), t), l;
      }),
        (e.getIntervalPrecision = o),
        (e.fixExtent = s),
        (e.intervalScaleGetTicks = function(t, e, i, r) {
          var o = [];
          if (!t) return o;
          e[0] < i[0] && o.push(e[0]);
          for (var a = i[0]; a <= i[1] && (o.push(a), (a = n(a + t, r)) !== o[o.length - 1]); )
            if (o.length > 1e4) return [];
          return e[1] > (o.length ? o[o.length - 1] : i[1]) && o.push(e[1]), o;
        });
    },
    'loD1': function(t, e) {
      e.containStroke = function(t, e, i, r, n, o, a) {
        if (0 === n) return !1;
        var s,
          l = n;
        if (
          (a > e + l && a > r + l) ||
          (a < e - l && a < r - l) ||
          (o > t + l && o > i + l) ||
          (o < t - l && o < i - l)
        )
          return !1;
        if (t === i) return Math.abs(o - t) <= l / 2;
        var c = (s = (e - r) / (t - i)) * o - a + (t * r - i * e) / (t - i);
        return (c * c) / (s * s + 1) <= ((l / 2) * l) / 2;
      };
    },
    'm9t5': function(t, e, i) {
      var r = i('KCsZ')([
        ['fill', 'color'],
        ['shadowBlur'],
        ['shadowOffsetX'],
        ['shadowOffsetY'],
        ['opacity'],
        ['shadowColor'],
      ]);
      t.exports = {
        getAreaStyle: function(t, e) {
          return r(this, t, e);
        },
      };
    },
    'mFDi': function(t, e, i) {
      var r,
        n,
        o,
        a,
        s = i('QBsz'),
        l = i('Fofx'),
        c = s.applyTransform,
        h = Math.min,
        u = Math.max;
      function d(t, e, i, r) {
        i < 0 && ((t += i), (i = -i)),
          r < 0 && ((e += r), (r = -r)),
          (this.x = t),
          (this.y = e),
          (this.width = i),
          (this.height = r);
      }
      (d.prototype = {
        constructor: d,
        union: function(t) {
          var e = h(t.x, this.x),
            i = h(t.y, this.y);
          (this.width = u(t.x + t.width, this.x + this.width) - e),
            (this.height = u(t.y + t.height, this.y + this.height) - i),
            (this.x = e),
            (this.y = i);
        },
        applyTransform:
          ((r = []),
          (n = []),
          (o = []),
          (a = []),
          function(t) {
            if (t) {
              (r[0] = o[0] = this.x),
                (r[1] = a[1] = this.y),
                (n[0] = a[0] = this.x + this.width),
                (n[1] = o[1] = this.y + this.height),
                c(r, r, t),
                c(n, n, t),
                c(o, o, t),
                c(a, a, t),
                (this.x = h(r[0], n[0], o[0], a[0])),
                (this.y = h(r[1], n[1], o[1], a[1]));
              var e = u(r[0], n[0], o[0], a[0]),
                i = u(r[1], n[1], o[1], a[1]);
              (this.width = e - this.x), (this.height = i - this.y);
            }
          }),
        calculateTransform: function(t) {
          var e = this,
            i = t.width / e.width,
            r = t.height / e.height,
            n = l.create();
          return l.translate(n, n, [-e.x, -e.y]), l.scale(n, n, [i, r]), l.translate(n, n, [t.x, t.y]), n;
        },
        intersect: function(t) {
          if (!t) return !1;
          t instanceof d || (t = d.create(t));
          var e = this;
          return !(e.x + e.width < t.x || t.x + t.width < e.x || e.y + e.height < t.y || t.y + t.height < e.y);
        },
        contain: function(t, e) {
          return t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height;
        },
        clone: function() {
          return new d(this.x, this.y, this.width, this.height);
        },
        copy: function(t) {
          (this.x = t.x), (this.y = t.y), (this.width = t.width), (this.height = t.height);
        },
        plain: function() {
          return { x: this.x, y: this.y, width: this.width, height: this.height };
        },
      }),
        (d.create = function(t) {
          return new d(t.x, t.y, t.width, t.height);
        }),
        (t.exports = d);
    },
    'mLcG': function(t, e) {
      var i =
        ('undefined' != typeof window &&
          ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
            (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window)) ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame)) ||
        function(t) {
          setTimeout(t, 16);
        };
      t.exports = i;
    },
    'mYwL': function(t, e, i) {
      var r = i('bYtY'),
        n = i('IwbS'),
        o = Math.PI;
      t.exports = function(t, e) {
        r.defaults((e = e || {}), {
          text: 'loading',
          color: '#c23531',
          textColor: '#000',
          maskColor: 'rgba(255, 255, 255, 0.8)',
          zlevel: 0,
        });
        var i = new n.Rect({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),
          a = new n.Arc({
            shape: { startAngle: -o / 2, endAngle: -o / 2 + 0.1, r: 10 },
            style: { stroke: e.color, lineCap: 'round', lineWidth: 5 },
            zlevel: e.zlevel,
            z: 10001,
          }),
          s = new n.Rect({
            style: { fill: 'none', text: e.text, textPosition: 'right', textDistance: 10, textFill: e.textColor },
            zlevel: e.zlevel,
            z: 10001,
          });
        a
          .animateShape(!0)
          .when(1e3, { endAngle: (3 * o) / 2 })
          .start('circularInOut'),
          a
            .animateShape(!0)
            .when(1e3, { startAngle: (3 * o) / 2 })
            .delay(300)
            .start('circularInOut');
        var l = new n.Group();
        return (
          l.add(a),
          l.add(s),
          l.add(i),
          (l.resize = function() {
            var e = t.getWidth() / 2,
              r = t.getHeight() / 2;
            a.setShape({ cx: e, cy: r });
            var n = a.shape.r;
            s.setShape({ x: e - n, y: r - n, width: 2 * n, height: 2 * n }),
              i.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
          }),
          l.resize(),
          l
        );
      };
    },
    'n1HI': function(t, e, i) {
      var r = i('hX1E').normalizeRadian,
        n = 2 * Math.PI;
      e.containStroke = function(t, e, i, o, a, s, l, c, h) {
        if (0 === l) return !1;
        var u = l;
        (c -= t), (h -= e);
        var d = Math.sqrt(c * c + h * h);
        if (d - u > i || d + u < i) return !1;
        if (Math.abs(o - a) % n < 1e-4) return !0;
        if (s) {
          var f = o;
          (o = r(a)), (a = r(f));
        } else (o = r(o)), (a = r(a));
        o > a && (a += n);
        var p = Math.atan2(h, c);
        return p < 0 && (p += n), (p >= o && p <= a) || (p + n >= o && p + n <= a);
      };
    },
    'n6Mw': function(t, e, i) {
      var r = i('SrGk'),
        n = i('bYtY'),
        o = i('Fofx');
      function a(t, e) {
        r.call(this, t, e, 'clipPath', '__clippath_in_use__');
      }
      n.inherits(a, r),
        (a.prototype.update = function(t) {
          var e = this.getSvgElement(t);
          e && this.updateDom(e, t.__clipPaths, !1);
          var i = this.getTextSvgElement(t);
          i && this.updateDom(i, t.__clipPaths, !0), this.markUsed(t);
        }),
        (a.prototype.updateDom = function(t, e, i) {
          if (e && e.length > 0) {
            var r,
              n,
              a = this.getDefs(!0),
              s = e[0],
              l = i ? '_textDom' : '_dom';
            s[l]
              ? ((n = s[l].getAttribute('id')), a.contains((r = s[l])) || a.appendChild(r))
              : ((n = 'zr' + this._zrId + '-clip-' + this.nextId),
                ++this.nextId,
                (r = this.createElement('clipPath')).setAttribute('id', n),
                a.appendChild(r),
                (s[l] = r));
            var c = this.getSvgProxy(s);
            if (s.transform && s.parent.invTransform && !i) {
              var h = Array.prototype.slice.call(s.transform);
              o.mul(s.transform, s.parent.invTransform, s.transform), c.brush(s), (s.transform = h);
            } else c.brush(s);
            var u = this.getSvgElement(s);
            (r.innerHTML = ''),
              r.appendChild(u.cloneNode()),
              t.setAttribute('clip-path', 'url(#' + n + ')'),
              e.length > 1 && this.updateDom(r, e.slice(1), i);
          } else t && t.setAttribute('clip-path', 'none');
        }),
        (a.prototype.markUsed = function(t) {
          var e = this;
          t.__clipPaths &&
            t.__clipPaths.length > 0 &&
            n.each(t.__clipPaths, function(t) {
              t._dom && r.prototype.markUsed.call(e, t._dom), t._textDom && r.prototype.markUsed.call(e, t._textDom);
            });
        }),
        (t.exports = a);
    },
    'nCxF': function(t, e, i) {
      var r = i('QBsz'),
        n = r.min,
        o = r.max,
        a = r.scale,
        s = r.distance,
        l = r.add,
        c = r.clone,
        h = r.sub;
      t.exports = function(t, e, i, r) {
        var u,
          d,
          f,
          p,
          g = [],
          m = [],
          y = [],
          v = [];
        if (r) {
          (f = [1 / 0, 1 / 0]), (p = [-1 / 0, -1 / 0]);
          for (var x = 0, b = t.length; x < b; x++) n(f, f, t[x]), o(p, p, t[x]);
          n(f, f, r[0]), o(p, p, r[1]);
        }
        for (x = 0, b = t.length; x < b; x++) {
          var _ = t[x];
          if (i) (u = t[x ? x - 1 : b - 1]), (d = t[(x + 1) % b]);
          else {
            if (0 === x || x === b - 1) {
              g.push(c(t[x]));
              continue;
            }
            (u = t[x - 1]), (d = t[x + 1]);
          }
          h(m, d, u), a(m, m, e);
          var S = s(_, u),
            w = s(_, d),
            C = S + w;
          0 !== C && ((S /= C), (w /= C)), a(y, m, -S), a(v, m, w);
          var T = l([], _, y),
            k = l([], _, v);
          r && (o(T, T, f), n(T, T, p), o(k, k, f), n(k, k, p)), g.push(T), g.push(k);
        }
        return i && g.push(g.shift()), g;
      };
    },
    'nPnh': function(t, e) {
      var i = Math.round;
      function r(t, e, r) {
        var n = i(2 * t);
        return (n + i(e)) % 2 == 0 ? n / 2 : (n + (r ? 1 : -1)) / 2;
      }
      (e.subPixelOptimizeLine = function(t, e, n) {
        var o = n && n.lineWidth;
        if (e && o) {
          var a = e.x1,
            s = e.x2,
            l = e.y1,
            c = e.y2;
          i(2 * a) === i(2 * s) ? (t.x1 = t.x2 = r(a, o, !0)) : ((t.x1 = a), (t.x2 = s)),
            i(2 * l) === i(2 * c) ? (t.y1 = t.y2 = r(l, o, !0)) : ((t.y1 = l), (t.y2 = c));
        }
      }),
        (e.subPixelOptimizeRect = function(t, e, i) {
          var n = i && i.lineWidth;
          if (e && n) {
            var o = e.x,
              a = e.y,
              s = e.width,
              l = e.height;
            (t.x = r(o, n, !0)),
              (t.y = r(a, n, !0)),
              (t.width = Math.max(r(o + s, n, !1) - t.x, 0 === s ? 0 : 1)),
              (t.height = Math.max(r(a + l, n, !1) - t.y, 0 === l ? 0 : 1));
          }
        }),
        (e.subPixelOptimize = r);
    },
    'nVfU': function(t, e, i) {
      var r = i('bYtY'),
        n = i('OELB').parsePercent,
        o = i('7hqr').isDimensionStacked,
        a = i('zM3Q'),
        s = '__ec_stack_',
        l = 'undefined' != typeof Float32Array ? Float32Array : Array;
      function c(t) {
        return t.get('stack') || s + t.seriesIndex;
      }
      function h(t) {
        return t.dim + t.index;
      }
      function u(t, e) {
        var i = [];
        return (
          e.eachSeriesByType(t, function(t) {
            m(t) && !y(t) && i.push(t);
          }),
          i
        );
      }
      function d(t) {
        var e = [];
        return (
          r.each(t, function(t) {
            var i = t.getData(),
              r = t.coordinateSystem.getBaseAxis(),
              o = r.getExtent(),
              a = 'category' === r.type ? r.getBandWidth() : Math.abs(o[1] - o[0]) / i.count(),
              s = n(t.get('barWidth'), a),
              l = n(t.get('barMaxWidth'), a),
              u = t.get('barGap'),
              d = t.get('barCategoryGap');
            e.push({
              bandWidth: a,
              barWidth: s,
              barMaxWidth: l,
              barGap: u,
              barCategoryGap: d,
              axisKey: h(r),
              stackId: c(t),
            });
          }),
          f(e)
        );
      }
      function f(t) {
        var e = {};
        r.each(t, function(t, i) {
          var r = t.axisKey,
            n = t.bandWidth,
            o = e[r] || {
              bandWidth: n,
              remainedWidth: n,
              autoWidthCount: 0,
              categoryGap: '20%',
              gap: '30%',
              stacks: {},
            },
            a = o.stacks;
          e[r] = o;
          var s = t.stackId;
          a[s] || o.autoWidthCount++, (a[s] = a[s] || { width: 0, maxWidth: 0 });
          var l = t.barWidth;
          l && !a[s].width && ((a[s].width = l), (l = Math.min(o.remainedWidth, l)), (o.remainedWidth -= l));
          var c = t.barMaxWidth;
          c && (a[s].maxWidth = c);
          var h = t.barGap;
          null != h && (o.gap = h);
          var u = t.barCategoryGap;
          null != u && (o.categoryGap = u);
        });
        var i = {};
        return (
          r.each(e, function(t, e) {
            i[e] = {};
            var o = t.stacks,
              a = n(t.categoryGap, t.bandWidth),
              s = n(t.gap, 1),
              l = t.remainedWidth,
              c = t.autoWidthCount,
              h = (l - a) / (c + (c - 1) * s);
            (h = Math.max(h, 0)),
              r.each(o, function(t, e) {
                var i = t.maxWidth;
                i &&
                  i < h &&
                  ((i = Math.min(i, l)), t.width && (i = Math.min(i, t.width)), (l -= i), (t.width = i), c--);
              }),
              (h = (l - a) / (c + (c - 1) * s)),
              (h = Math.max(h, 0));
            var u,
              d = 0;
            r.each(o, function(t, e) {
              t.width || (t.width = h), (u = t), (d += t.width * (1 + s));
            }),
              u && (d -= u.width * s);
            var f = -d / 2;
            r.each(o, function(t, r) {
              (i[e][r] = i[e][r] || { offset: f, width: t.width }), (f += t.width * (1 + s));
            });
          }),
          i
        );
      }
      function p(t, e, i) {
        if (t && e) {
          var r = t[h(e)];
          return null != r && null != i && (r = r[c(i)]), r;
        }
      }
      var g = {
        seriesType: 'bar',
        plan: a(),
        reset: function(t) {
          if (m(t) && y(t)) {
            var e = t.getData(),
              i = t.coordinateSystem,
              r = i.getBaseAxis(),
              n = i.getOtherAxis(r),
              o = e.mapDimension(n.dim),
              a = e.mapDimension(r.dim),
              s = n.isHorizontal(),
              c = s ? 0 : 1,
              h = p(d([t]), r, t).width;
            return (
              h > 0.5 || (h = 0.5),
              {
                progress: function(t, e) {
                  for (var r, u = new l(2 * t.count), d = [], f = [], p = 0; null != (r = t.next()); )
                    (f[c] = e.get(o, r)),
                      (f[1 - c] = e.get(a, r)),
                      (d = i.dataToPoint(f, null, d)),
                      (u[p++] = d[0]),
                      (u[p++] = d[1]);
                  e.setLayout({ largePoints: u, barWidth: h, valueAxisStart: v(0, n), valueAxisHorizontal: s });
                },
              }
            );
          }
        },
      };
      function m(t) {
        return t.coordinateSystem && 'cartesian2d' === t.coordinateSystem.type;
      }
      function y(t) {
        return t.pipelineContext && t.pipelineContext.large;
      }
      function v(t, e, i) {
        var r,
          n,
          o = e.getGlobalExtent();
        o[0] > o[1] ? ((r = o[1]), (n = o[0])) : ((r = o[0]), (n = o[1]));
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return a < r && (a = r), a > n && (a = n), a;
      }
      (e.getLayoutOnAxis = function(t) {
        var e = [],
          i = t.axis;
        if ('category' === i.type) {
          for (var n = i.getBandWidth(), o = 0; o < t.count; o++)
            e.push(r.defaults({ bandWidth: n, axisKey: 'axis0', stackId: s + o }, t));
          var a = f(e),
            l = [];
          for (o = 0; o < t.count; o++) {
            var c = a.axis0[s + o];
            (c.offsetCenter = c.offset + c.width / 2), l.push(c);
          }
          return l;
        }
      }),
        (e.prepareLayoutBarSeries = u),
        (e.makeColumnLayout = d),
        (e.retrieveColumnLayout = p),
        (e.layout = function(t, e) {
          var i = u(t, e),
            n = d(i),
            a = {},
            s = {};
          r.each(
            i,
            function(t) {
              var e = t.getData(),
                i = t.coordinateSystem,
                r = i.getBaseAxis(),
                l = c(t),
                u = n[h(r)][l],
                d = u.offset,
                f = u.width,
                p = i.getOtherAxis(r),
                g = t.get('barMinHeight') || 0;
              (a[l] = a[l] || []), (s[l] = s[l] || []), e.setLayout({ offset: d, size: f });
              for (
                var m = e.mapDimension(p.dim),
                  y = e.mapDimension(r.dim),
                  x = o(e, m),
                  b = p.isHorizontal(),
                  _ = v(0, p),
                  S = 0,
                  w = e.count();
                S < w;
                S++
              ) {
                var C = e.get(m, S),
                  T = e.get(y, S);
                if (!isNaN(C)) {
                  var k,
                    M,
                    A,
                    D,
                    I,
                    O = C >= 0 ? 'p' : 'n',
                    L = _;
                  x && (a[l][T] || (a[l][T] = { p: _, n: _ }), (L = a[l][T][O])),
                    b
                      ? ((k = L),
                        (M = (I = i.dataToPoint([C, T]))[1] + d),
                        (A = I[0] - _),
                        (D = f),
                        Math.abs(A) < g && (A = (A < 0 ? -1 : 1) * g),
                        x && (a[l][T][O] += A))
                      : ((k = (I = i.dataToPoint([T, C]))[0] + d),
                        (M = L),
                        (A = f),
                        (D = I[1] - _),
                        Math.abs(D) < g && (D = (D <= 0 ? -1 : 1) * g),
                        x && (a[l][T][O] += D)),
                    e.setItemLayout(S, { x: k, y: M, width: A, height: D });
                }
              }
            },
            this,
          );
        }),
        (e.largeLayout = g);
    },
    'ni6a': function(t, e, i) {
      var r = i('pzxd'),
        n = i('mFDi'),
        o = i('gut8').WILL_BE_RESTORED,
        a = new n(),
        s = function() {};
      (s.prototype = {
        constructor: s,
        drawRectText: function(t, e) {
          var i = this.style;
          (e = i.textRect || e), this.__dirty && r.normalizeTextStyle(i, !0);
          var n = i.text;
          if ((null != n && (n += ''), r.needDrawText(n, i))) {
            t.save();
            var s = this.transform;
            i.transformText ? this.setTransform(t) : s && (a.copy(e), a.applyTransform(s), (e = a)),
              r.renderText(this, t, n, i, e, o),
              t.restore();
          }
        },
      }),
        (t.exports = s);
    },
    'o7kS': function(t, e, i) {
      'use strict';
      function r(t) {
        for (var e = new Set(), i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
          r[n - 1] = arguments[n];
        for (var o = 0, a = r; o < a.length; o++)
          for (var s = a[o], l = 0, c = Object.keys(s); l < c.length; l++) {
            var h = c[l];
            e.add(h);
            var u = s[h];
            null != u ? (t[h] = u) : null === u && delete t[h];
          }
        for (var d = 0, f = Object.keys(t); d < f.length; d++) {
          var p = f[d];
          e.has(p) || delete t[p];
        }
        return t;
      }
      i.d(e, 'a', function() {
        return r;
      });
    },
    'oVpE': function(t, e, i) {
      var r = i('bYtY'),
        n = i('IwbS'),
        o = i('mFDi'),
        a = n.extendShape({
          type: 'triangle',
          shape: { cx: 0, cy: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var i = e.cx,
              r = e.cy,
              n = e.width / 2,
              o = e.height / 2;
            t.moveTo(i, r - o), t.lineTo(i + n, r + o), t.lineTo(i - n, r + o), t.closePath();
          },
        }),
        s = n.extendShape({
          type: 'diamond',
          shape: { cx: 0, cy: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var i = e.cx,
              r = e.cy,
              n = e.width / 2,
              o = e.height / 2;
            t.moveTo(i, r - o), t.lineTo(i + n, r), t.lineTo(i, r + o), t.lineTo(i - n, r), t.closePath();
          },
        }),
        l = n.extendShape({
          type: 'pin',
          shape: { x: 0, y: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var i = e.x,
              r = e.y,
              n = (e.width / 5) * 3,
              o = Math.max(n, e.height),
              a = n / 2,
              s = (a * a) / (o - a),
              l = r - o + a + s,
              c = Math.asin(s / a),
              h = Math.cos(c) * a,
              u = Math.sin(c),
              d = Math.cos(c),
              f = 0.6 * a,
              p = 0.7 * a;
            t.moveTo(i - h, l + s),
              t.arc(i, l, a, Math.PI - c, 2 * Math.PI + c),
              t.bezierCurveTo(i + h - u * f, l + s + d * f, i, r - p, i, r),
              t.bezierCurveTo(i, r - p, i - h + u * f, l + s + d * f, i - h, l + s),
              t.closePath();
          },
        }),
        c = n.extendShape({
          type: 'arrow',
          shape: { x: 0, y: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var i = e.height,
              r = e.x,
              n = e.y,
              o = (e.width / 3) * 2;
            t.moveTo(r, n),
              t.lineTo(r + o, n + i),
              t.lineTo(r, n + (i / 4) * 3),
              t.lineTo(r - o, n + i),
              t.lineTo(r, n),
              t.closePath();
          },
        }),
        h = {
          line: function(t, e, i, r, n) {
            (n.x1 = t), (n.y1 = e + r / 2), (n.x2 = t + i), (n.y2 = e + r / 2);
          },
          rect: function(t, e, i, r, n) {
            (n.x = t), (n.y = e), (n.width = i), (n.height = r);
          },
          roundRect: function(t, e, i, r, n) {
            (n.x = t), (n.y = e), (n.width = i), (n.height = r), (n.r = Math.min(i, r) / 4);
          },
          square: function(t, e, i, r, n) {
            var o = Math.min(i, r);
            (n.x = t), (n.y = e), (n.width = o), (n.height = o);
          },
          circle: function(t, e, i, r, n) {
            (n.cx = t + i / 2), (n.cy = e + r / 2), (n.r = Math.min(i, r) / 2);
          },
          diamond: function(t, e, i, r, n) {
            (n.cx = t + i / 2), (n.cy = e + r / 2), (n.width = i), (n.height = r);
          },
          pin: function(t, e, i, r, n) {
            (n.x = t + i / 2), (n.y = e + r / 2), (n.width = i), (n.height = r);
          },
          arrow: function(t, e, i, r, n) {
            (n.x = t + i / 2), (n.y = e + r / 2), (n.width = i), (n.height = r);
          },
          triangle: function(t, e, i, r, n) {
            (n.cx = t + i / 2), (n.cy = e + r / 2), (n.width = i), (n.height = r);
          },
        },
        u = {};
      r.each(
        {
          line: n.Line,
          rect: n.Rect,
          roundRect: n.Rect,
          square: n.Rect,
          circle: n.Circle,
          diamond: s,
          pin: l,
          arrow: c,
          triangle: a,
        },
        function(t, e) {
          u[e] = new t();
        },
      );
      var d = n.extendShape({
        type: 'symbol',
        shape: { symbolType: '', x: 0, y: 0, width: 0, height: 0 },
        beforeBrush: function() {
          var t = this.style;
          'pin' === this.shape.symbolType &&
            'inside' === t.textPosition &&
            ((t.textPosition = ['50%', '40%']), (t.textAlign = 'center'), (t.textVerticalAlign = 'middle'));
        },
        buildPath: function(t, e, i) {
          var r = e.symbolType,
            n = u[r];
          'none' !== e.symbolType &&
            (n || (n = u[(r = 'rect')]), h[r](e.x, e.y, e.width, e.height, n.shape), n.buildPath(t, n.shape, i));
        },
      });
      function f(t, e) {
        if ('image' !== this.type) {
          var i = this.style,
            r = this.shape;
          r && 'line' === r.symbolType
            ? (i.stroke = t)
            : this.__isEmptyBrush
            ? ((i.stroke = t), (i.fill = e || '#fff'))
            : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)),
            this.dirty(!1);
        }
      }
      e.createSymbol = function(t, e, i, r, a, s, l) {
        var c,
          h = 0 === t.indexOf('empty');
        return (
          h && (t = t.substr(5, 1).toLowerCase() + t.substr(6)),
          ((c =
            0 === t.indexOf('image://')
              ? n.makeImage(t.slice(8), new o(e, i, r, a), l ? 'center' : 'cover')
              : 0 === t.indexOf('path://')
              ? n.makePath(t.slice(7), {}, new o(e, i, r, a), l ? 'center' : 'cover')
              : new d({ shape: { symbolType: t, x: e, y: i, width: r, height: a } })).__isEmptyBrush = h),
          (c.setColor = f),
          c.setColor(s),
          c
        );
      };
    },
    'pzxd': function(t, e, i) {
      var r = i('bYtY'),
        n = r.retrieve2,
        o = r.retrieve3,
        a = r.each,
        s = r.normalizeCssArray,
        l = r.isString,
        c = r.isObject,
        h = i('6GrX'),
        u = i('VpOo'),
        d = i('Xnb7'),
        f = i('fW2E'),
        p = i('gut8'),
        g = p.ContextCachedBy,
        m = p.WILL_BE_RESTORED,
        y = h.DEFAULT_FONT,
        v = { left: 1, right: 1, center: 1 },
        x = { top: 1, bottom: 1, middle: 1 },
        b = [
          ['textShadowBlur', 'shadowBlur', 0],
          ['textShadowOffsetX', 'shadowOffsetX', 0],
          ['textShadowOffsetY', 'shadowOffsetY', 0],
          ['textShadowColor', 'shadowColor', 'transparent'],
        ];
      function _(t) {
        if (t) {
          t.font = h.makeFont(t);
          var e = t.textAlign;
          'middle' === e && (e = 'center'), (t.textAlign = null == e || v[e] ? e : 'left');
          var i = t.textVerticalAlign || t.textBaseline;
          'center' === i && (i = 'middle'),
            (t.textVerticalAlign = null == i || x[i] ? i : 'top'),
            t.textPadding && (t.textPadding = s(t.textPadding));
        }
      }
      function S(t, e, i, r, n) {
        if (i && e.textRotation) {
          var o = e.textOrigin;
          'center' === o
            ? ((r = i.width / 2 + i.x), (n = i.height / 2 + i.y))
            : o && ((r = o[0] + i.x), (n = o[1] + i.y)),
            t.translate(r, n),
            t.rotate(-e.textRotation),
            t.translate(-r, -n);
        }
      }
      function w(t, e, i, r, a, s, l, c) {
        var h = r.rich[i.styleName] || {};
        h.text = i.text;
        var u = i.textVerticalAlign,
          d = s + a / 2;
        'top' === u ? (d = s + i.height / 2) : 'bottom' === u && (d = s + a - i.height / 2),
          !i.isLineHolder &&
            C(h) &&
            T(
              t,
              e,
              h,
              'right' === c ? l - i.width : 'center' === c ? l - i.width / 2 : l,
              d - i.height / 2,
              i.width,
              i.height,
            );
        var f = i.textPadding;
        f && ((l = L(l, c, f)), (d -= i.height / 2 - f[2] - i.textHeight / 2)),
          A(e, 'shadowBlur', o(h.textShadowBlur, r.textShadowBlur, 0)),
          A(e, 'shadowColor', h.textShadowColor || r.textShadowColor || 'transparent'),
          A(e, 'shadowOffsetX', o(h.textShadowOffsetX, r.textShadowOffsetX, 0)),
          A(e, 'shadowOffsetY', o(h.textShadowOffsetY, r.textShadowOffsetY, 0)),
          A(e, 'textAlign', c),
          A(e, 'textBaseline', 'middle'),
          A(e, 'font', i.font || y);
        var p = D(h.textStroke || r.textStroke, m),
          g = I(h.textFill || r.textFill),
          m = n(h.textStrokeWidth, r.textStrokeWidth);
        p && (A(e, 'lineWidth', m), A(e, 'strokeStyle', p), e.strokeText(i.text, l, d)),
          g && (A(e, 'fillStyle', g), e.fillText(i.text, l, d));
      }
      function C(t) {
        return !!(t.textBackgroundColor || (t.textBorderWidth && t.textBorderColor));
      }
      function T(t, e, i, r, n, o, a) {
        var s = i.textBackgroundColor,
          h = i.textBorderWidth,
          f = i.textBorderColor,
          p = l(s);
        if (
          (A(e, 'shadowBlur', i.textBoxShadowBlur || 0),
          A(e, 'shadowColor', i.textBoxShadowColor || 'transparent'),
          A(e, 'shadowOffsetX', i.textBoxShadowOffsetX || 0),
          A(e, 'shadowOffsetY', i.textBoxShadowOffsetY || 0),
          p || (h && f))
        ) {
          e.beginPath();
          var g = i.textBorderRadius;
          g ? u.buildPath(e, { x: r, y: n, width: o, height: a, r: g }) : e.rect(r, n, o, a), e.closePath();
        }
        if (p)
          if ((A(e, 'fillStyle', s), null != i.fillOpacity)) {
            var m = e.globalAlpha;
            (e.globalAlpha = i.fillOpacity * i.opacity), e.fill(), (e.globalAlpha = m);
          } else e.fill();
        else if (c(s)) {
          var y = s.image;
          (y = d.createOrUpdateImage(y, null, t, k, s)) && d.isImageReady(y) && e.drawImage(y, r, n, o, a);
        }
        h &&
          f &&
          (A(e, 'lineWidth', h),
          A(e, 'strokeStyle', f),
          null != i.strokeOpacity
            ? ((m = e.globalAlpha), (e.globalAlpha = i.strokeOpacity * i.opacity), e.stroke(), (e.globalAlpha = m))
            : e.stroke());
      }
      function k(t, e) {
        e.image = t;
      }
      function M(t, e, i) {
        var r = e.x || 0,
          n = e.y || 0,
          o = e.textAlign,
          a = e.textVerticalAlign;
        if (i) {
          var s = e.textPosition;
          if (s instanceof Array) (r = i.x + O(s[0], i.width)), (n = i.y + O(s[1], i.height));
          else {
            var l = h.adjustTextPositionOnRect(s, i, e.textDistance);
            (r = l.x), (n = l.y), (o = o || l.textAlign), (a = a || l.textVerticalAlign);
          }
          var c = e.textOffset;
          c && ((r += c[0]), (n += c[1]));
        }
        return { baseX: r, baseY: n, textAlign: o, textVerticalAlign: a };
      }
      function A(t, e, i) {
        return (t[e] = f(t, e, i)), t[e];
      }
      function D(t, e) {
        return null == t || e <= 0 || 'transparent' === t || 'none' === t ? null : t.image || t.colorStops ? '#000' : t;
      }
      function I(t) {
        return null == t || 'none' === t ? null : t.image || t.colorStops ? '#000' : t;
      }
      function O(t, e) {
        return 'string' == typeof t ? (t.lastIndexOf('%') >= 0 ? (parseFloat(t) / 100) * e : parseFloat(t)) : t;
      }
      function L(t, e, i) {
        return 'right' === e ? t - i[1] : 'center' === e ? t + i[3] / 2 - i[1] / 2 : t + i[3];
      }
      (e.normalizeTextStyle = function(t) {
        return _(t), a(t.rich, _), t;
      }),
        (e.renderText = function(t, e, i, r, n, o) {
          r.rich
            ? (function(t, e, i, r, n, o) {
                o !== m && (e.__attrCachedBy = g.NONE);
                var a = t.__textCotentBlock;
                (a && !t.__dirtyText) || (a = t.__textCotentBlock = h.parseRichText(i, r)),
                  (function(t, e, i, r, n) {
                    var o = i.width,
                      a = i.outerWidth,
                      s = i.outerHeight,
                      l = r.textPadding,
                      c = M(0, r, n),
                      u = c.baseX,
                      d = c.baseY,
                      f = c.textAlign,
                      p = c.textVerticalAlign;
                    S(e, r, n, u, d);
                    var g = h.adjustTextX(u, a, f),
                      m = h.adjustTextY(d, s, p),
                      y = g,
                      v = m;
                    l && ((y += l[3]), (v += l[0]));
                    var x = y + o;
                    C(r) && T(t, e, r, g, m, a, s);
                    for (var b = 0; b < i.lines.length; b++) {
                      for (
                        var _,
                          k = i.lines[b],
                          A = k.tokens,
                          D = A.length,
                          I = k.lineHeight,
                          O = k.width,
                          L = 0,
                          P = y,
                          E = x,
                          B = D - 1;
                        L < D && (!(_ = A[L]).textAlign || 'left' === _.textAlign);

                      )
                        w(t, e, _, r, I, v, P, 'left'), (O -= _.width), (P += _.width), L++;
                      for (; B >= 0 && 'right' === (_ = A[B]).textAlign; )
                        w(t, e, _, r, I, v, E, 'right'), (O -= _.width), (E -= _.width), B--;
                      for (P += (o - (P - y) - (x - E) - O) / 2; L <= B; )
                        w(t, e, (_ = A[L]), r, I, v, P + _.width / 2, 'center'), (P += _.width), L++;
                      v += I;
                    }
                  })(t, e, a, r, n);
              })(t, e, i, r, n, o)
            : (function(t, e, i, r, n, o) {
                'use strict';
                var a,
                  s = C(r),
                  l = !1,
                  c = e.__attrCachedBy === g.PLAIN_TEXT;
                o !== m
                  ? (o && ((a = o.style), (l = !s && c && a)), (e.__attrCachedBy = s ? g.NONE : g.PLAIN_TEXT))
                  : c && (e.__attrCachedBy = g.NONE);
                var u = r.font || y;
                (l && u === (a.font || y)) || (e.font = u);
                var d = t.__computedFont;
                t.__styleFont !== u && ((t.__styleFont = u), (d = t.__computedFont = e.font));
                var p = r.textPadding,
                  v = t.__textCotentBlock;
                (v && !t.__dirtyText) ||
                  (v = t.__textCotentBlock = h.parsePlainText(i, d, p, r.textLineHeight, r.truncate));
                var x = v.outerHeight,
                  _ = v.lines,
                  w = v.lineHeight,
                  k = M(0, r, n),
                  A = k.baseX,
                  O = k.baseY,
                  P = k.textAlign || 'left',
                  E = k.textVerticalAlign;
                S(e, r, n, A, O);
                var B = h.adjustTextY(O, x, E),
                  R = A,
                  z = B;
                if (s || p) {
                  var W = h.getWidth(i, d);
                  p && (W += p[1] + p[3]);
                  var F = h.adjustTextX(A, W, P);
                  s && T(t, e, r, F, B, W, x), p && ((R = L(A, P, p)), (z += p[0]));
                }
                (e.textAlign = P), (e.textBaseline = 'middle'), (e.globalAlpha = r.opacity || 1);
                for (var N = 0; N < b.length; N++) {
                  var Y = b[N],
                    H = Y[0],
                    V = Y[1],
                    U = r[H];
                  (l && U === a[H]) || (e[V] = f(e, V, U || Y[2]));
                }
                z += w / 2;
                var G = r.textStrokeWidth,
                  j = !l || G !== (l ? a.textStrokeWidth : null),
                  X = !l || j || r.textStroke !== a.textStroke,
                  q = D(r.textStroke, G),
                  K = I(r.textFill);
                if (
                  (q && (j && (e.lineWidth = G), X && (e.strokeStyle = q)),
                  K && ((l && r.textFill === a.textFill) || (e.fillStyle = K)),
                  1 === _.length)
                )
                  q && e.strokeText(_[0], R, z), K && e.fillText(_[0], R, z);
                else
                  for (N = 0; N < _.length; N++) q && e.strokeText(_[N], R, z), K && e.fillText(_[N], R, z), (z += w);
              })(t, e, i, r, n, o);
        }),
        (e.getStroke = D),
        (e.getFill = I),
        (e.needDrawText = function(t, e) {
          return null != t && (t || e.textBackgroundColor || (e.textBorderWidth && e.textBorderColor) || e.textPadding);
        });
    },
    'qWt2': function(t, e, i) {
      var r = i('ProS').extendComponentModel({
        type: 'tooltip',
        dependencies: ['axisPointer'],
        defaultOption: {
          zlevel: 0,
          z: 60,
          show: !0,
          showContent: !0,
          trigger: 'item',
          triggerOn: 'mousemove|click',
          alwaysShowContent: !1,
          displayMode: 'single',
          renderMode: 'auto',
          confine: !1,
          showDelay: 0,
          hideDelay: 100,
          transitionDuration: 0.4,
          enterable: !1,
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderColor: '#333',
          borderRadius: 4,
          borderWidth: 0,
          padding: 5,
          extraCssText: '',
          axisPointer: {
            type: 'line',
            axis: 'auto',
            animation: 'auto',
            animationDurationUpdate: 200,
            animationEasingUpdate: 'exponentialOut',
            crossStyle: { color: '#999', width: 1, type: 'dashed', textStyle: {} },
          },
          textStyle: { color: '#fff', fontSize: 14 },
        },
      });
      t.exports = r;
    },
    'r6Bn': function(t, e, i) {
      var r = i('bYtY'),
        n = i('ItGF'),
        o = i('4fz+'),
        a = i('BPZU');
      function s(t, e) {
        return t.zlevel === e.zlevel ? (t.z === e.z ? t.z2 - e.z2 : t.z - e.z) : t.zlevel - e.zlevel;
      }
      var l = function() {
        (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
      };
      (l.prototype = {
        constructor: l,
        traverse: function(t, e) {
          for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e);
        },
        getDisplayList: function(t, e) {
          return (e = e || !1), t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function(t) {
          this._displayListLen = 0;
          for (var e = this._roots, i = this._displayList, r = 0, o = e.length; r < o; r++)
            this._updateAndAddDisplayable(e[r], null, t);
          (i.length = this._displayListLen), n.canvasSupported && a(i, s);
        },
        _updateAndAddDisplayable: function(t, e, i) {
          if (!t.ignore || i) {
            t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
            var r = t.clipPath;
            if (r) {
              e = e ? e.slice() : [];
              for (var n = r, o = t; n; ) (n.parent = o), n.updateTransform(), e.push(n), (o = n), (n = n.clipPath);
            }
            if (t.isGroup) {
              for (var a = t._children, s = 0; s < a.length; s++) {
                var l = a[s];
                t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i);
              }
              t.__dirty = !1;
            } else (t.__clipPaths = e), (this._displayList[this._displayListLen++] = t);
          }
        },
        addRoot: function(t) {
          t.__storage !== this &&
            (t instanceof o && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
        },
        delRoot: function(t) {
          if (null == t) {
            for (var e = 0; e < this._roots.length; e++) {
              var i = this._roots[e];
              i instanceof o && i.delChildrenFromStorage(this);
            }
            return (this._roots = []), (this._displayList = []), void (this._displayListLen = 0);
          }
          if (t instanceof Array) {
            e = 0;
            for (var n = t.length; e < n; e++) this.delRoot(t[e]);
          } else {
            var a = r.indexOf(this._roots, t);
            a >= 0 &&
              (this.delFromStorage(t), this._roots.splice(a, 1), t instanceof o && t.delChildrenFromStorage(this));
          }
        },
        addToStorage: function(t) {
          return t && ((t.__storage = this), t.dirty(!1)), this;
        },
        delFromStorage: function(t) {
          return t && (t.__storage = null), this;
        },
        dispose: function() {
          this._renderList = this._roots = null;
        },
        displayableSortFunc: s,
      }),
        (t.exports = l);
    },
    'rA99': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('QBsz'),
        o = i('Sj9i'),
        a = o.quadraticSubdivide,
        s = o.cubicSubdivide,
        l = o.quadraticAt,
        c = o.cubicAt,
        h = o.quadraticDerivativeAt,
        u = o.cubicDerivativeAt,
        d = [];
      function f(t, e, i) {
        return null === t.cpx2 || null === t.cpy2
          ? [(i ? u : c)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? u : c)(t.y1, t.cpy1, t.cpy2, t.y2, e)]
          : [(i ? h : l)(t.x1, t.cpx1, t.x2, e), (i ? h : l)(t.y1, t.cpy1, t.y2, e)];
      }
      var p = r.extend({
        type: 'bezier-curve',
        shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 },
        style: { stroke: '#000', fill: null },
        buildPath: function(t, e) {
          var i = e.x1,
            r = e.y1,
            n = e.x2,
            o = e.y2,
            l = e.cpx1,
            c = e.cpy1,
            h = e.cpx2,
            u = e.cpy2,
            f = e.percent;
          0 !== f &&
            (t.moveTo(i, r),
            null == h || null == u
              ? (f < 1 && (a(i, l, n, f, d), (l = d[1]), (n = d[2]), a(r, c, o, f, d), (c = d[1]), (o = d[2])),
                t.quadraticCurveTo(l, c, n, o))
              : (f < 1 &&
                  (s(i, l, h, n, f, d),
                  (l = d[1]),
                  (h = d[2]),
                  (n = d[3]),
                  s(r, c, u, o, f, d),
                  (c = d[1]),
                  (u = d[2]),
                  (o = d[3])),
                t.bezierCurveTo(l, c, h, u, n, o)));
        },
        pointAt: function(t) {
          return f(this.shape, t, !1);
        },
        tangentAt: function(t) {
          var e = f(this.shape, t, !0);
          return n.normalize(e, e);
        },
      });
      t.exports = p;
    },
    'rDig': function(t, e, i) {
      'use strict';
      var r = i('ofXK'),
        n = (i('cvES'), i('WKB1'), i('Y0Ja'), i('KQIT'), i('UUrH')),
        o = (i('juDX'), i('fXoL'));
      Object(n.c)();
      var a,
        s =
          (((a = function t() {
            _classCallCheck(this, t);
          }).ɵmod = o.Qb({ type: a })),
          (a.ɵinj = o.Pb({
            factory: function(t) {
              return new (t || a)();
            },
            imports: [[r.c]],
          })),
          a);
      i('zHPi');
      var l,
        c = i('em/+'),
        h = i('o7kS'),
        u =
          (((l = (function() {
            function t(e, i) {
              _classCallCheck(this, t),
                (this.optionsService = i),
                (this._state = {}),
                (this._options = {}),
                (this.config = {}),
                (this._type = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnChanges',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._removeOption();
                  },
                },
                {
                  key: 'setStateOption',
                  value: function(t, e) {
                    (this._options[t] = e), this._setOptions();
                  },
                },
                {
                  key: 'removeStateOption',
                  value: function(t) {
                    (this._options[t] = null), this._setOptions();
                  },
                },
                {
                  key: '_setOptions',
                  value: function() {
                    var t = Object(h.a)(
                      this._state,
                      {
                        id: this.id,
                        type: this.type,
                        name: this.name,
                        color: this.color,
                        data: this.data,
                        animation: this.animation,
                        animationThreshold: this.animationThreshold,
                        animationDuration: this.animationDuration,
                        animationEasing: this.animationEasing,
                        animationDelay: this.animationDelay,
                        animationDurationUpdate: this.animationDurationUpdate,
                        animationEasingUpdate: this.animationEasingUpdate,
                        animationDelayUpdate: this.animationDelayUpdate,
                        tooltip: this.tooltip,
                      },
                      this.getConfig(),
                      this._options,
                      this.config ? this.config : {},
                    );
                    this.optionsService.setArrayOption('series', t);
                  },
                },
                {
                  key: '_removeOption',
                  value: function() {
                    this.optionsService.removeArrayOption('series', this._state);
                  },
                },
                {
                  key: 'type',
                  get: function() {
                    return this._type;
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function(t) {
            o.fc();
          }),
          (l.ɵdir = o.Nb({
            type: l,
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
            },
            features: [o.Bb()],
          })),
          l);
      i.d(e, 'b', function() {
        return c.b;
      }),
        i.d(e, 'a', function() {
          return s;
        }),
        i.d(e, 'c', function() {
          return u;
        }),
        i.d(e, 'd', function() {
          return n.a;
        }),
        i.d(e, 'e', function() {
          return n.b;
        });
    },
    'rmlV': function(t, e, i) {
      var r = i('y+Vt').extend({
        type: 'ellipse',
        shape: { cx: 0, cy: 0, rx: 0, ry: 0 },
        buildPath: function(t, e) {
          var i = 0.5522848,
            r = e.cx,
            n = e.cy,
            o = e.rx,
            a = e.ry,
            s = o * i,
            l = a * i;
          t.moveTo(r - o, n),
            t.bezierCurveTo(r - o, n - l, r - s, n - a, r, n - a),
            t.bezierCurveTo(r + s, n - a, r + o, n - l, r + o, n),
            t.bezierCurveTo(r + o, n + l, r + s, n + a, r, n + a),
            t.bezierCurveTo(r - s, n + a, r - o, n + l, r - o, n),
            t.closePath();
        },
      });
      t.exports = r;
    },
    'sS/r': function(t, e, i) {
      var r = i('4fz+'),
        n = i('iRjW'),
        o = i('Yl7c'),
        a = function() {
          (this.group = new r()), (this.uid = n.getUID('viewComponent'));
        },
        s = (a.prototype = {
          constructor: a,
          init: function(t, e) {},
          render: function(t, e, i, r) {},
          dispose: function() {},
          filterForExposedEvent: null,
        });
      (s.updateView = s.updateLayout = s.updateVisual = function(t, e, i, r) {}),
        o.enableClassExtend(a),
        o.enableClassManagement(a, { registerWhenExtend: !0 }),
        (t.exports = a);
    },
    'sW+o': function(t, e, i) {
      var r = i('SrGk'),
        n = i('bYtY'),
        o = i('SUKs'),
        a = i('Qe9p');
      function s(t, e) {
        r.call(this, t, e, ['linearGradient', 'radialGradient'], '__gradient_in_use__');
      }
      n.inherits(s, r),
        (s.prototype.addWithoutUpdate = function(t, e) {
          if (e && e.style) {
            var i = this;
            n.each(['fill', 'stroke'], function(r) {
              if (e.style[r] && ('linear' === e.style[r].type || 'radial' === e.style[r].type)) {
                var n,
                  o = e.style[r],
                  a = i.getDefs(!0);
                o._dom ? ((n = o._dom), a.contains(o._dom) || i.addDom(n)) : (n = i.add(o)), i.markUsed(e);
                var s = n.getAttribute('id');
                t.setAttribute(r, 'url(#' + s + ')');
              }
            });
          }
        }),
        (s.prototype.add = function(t) {
          var e;
          if ('linear' === t.type) e = this.createElement('linearGradient');
          else {
            if ('radial' !== t.type) return o('Illegal gradient type.'), null;
            e = this.createElement('radialGradient');
          }
          return (
            (t.id = t.id || this.nextId++),
            e.setAttribute('id', 'zr' + this._zrId + '-gradient-' + t.id),
            this.updateDom(t, e),
            this.addDom(e),
            e
          );
        }),
        (s.prototype.update = function(t) {
          var e = this;
          r.prototype.update.call(this, t, function() {
            var i = t.type,
              r = t._dom.tagName;
            ('linear' === i && 'linearGradient' === r) || ('radial' === i && 'radialGradient' === r)
              ? e.updateDom(t, t._dom)
              : (e.removeDom(t), e.add(t));
          });
        }),
        (s.prototype.updateDom = function(t, e) {
          if ('linear' === t.type)
            e.setAttribute('x1', t.x),
              e.setAttribute('y1', t.y),
              e.setAttribute('x2', t.x2),
              e.setAttribute('y2', t.y2);
          else {
            if ('radial' !== t.type) return void o('Illegal gradient type.');
            e.setAttribute('cx', t.x), e.setAttribute('cy', t.y), e.setAttribute('r', t.r);
          }
          e.setAttribute('gradientUnits', t.global ? 'userSpaceOnUse' : 'objectBoundingBox'), (e.innerHTML = '');
          for (var i = t.colorStops, r = 0, n = i.length; r < n; ++r) {
            var s = this.createElement('stop');
            s.setAttribute('offset', 100 * i[r].offset + '%');
            var l = i[r].color;
            if (l.indexOf(!1)) {
              var c = a.parse(l)[3],
                h = a.toHex(l);
              s.setAttribute('stop-color', '#' + h), s.setAttribute('stop-opacity', c);
            } else s.setAttribute('stop-color', i[r].color);
            e.appendChild(s);
          }
          t._dom = e;
        }),
        (s.prototype.markUsed = function(t) {
          if (t.style) {
            var e = t.style.fill;
            e && e._dom && r.prototype.markUsed.call(this, e._dom),
              (e = t.style.stroke) && e._dom && r.prototype.markUsed.call(this, e._dom);
          }
        }),
        (t.exports = s);
    },
    'sdST': function(t, e, i) {
      var r = i('hi0g');
      t.exports = function(t, e) {
        return r((e = e || {}).coordDimensions || [], t, {
          dimsDef: e.dimensionsDefine || t.dimensionsDefine,
          encodeDef: e.encodeDefine || t.encodeDefine,
          dimCount: e.dimensionsCount,
          generateCoord: e.generateCoord,
          generateCoordCount: e.generateCoordCount,
        });
      };
    },
    'txkQ': function(t, e, i) {
      var r = i('aX58');
      e.zrender = r;
      var n = i('Fofx');
      e.matrix = n;
      var o = i('QBsz');
      e.vector = o;
      var a = i('bYtY'),
        s = i('Qe9p');
      e.color = s;
      var l = i('IwbS'),
        c = i('OELB');
      e.number = c;
      var h = i('7aKB');
      e.format = h;
      var u = i('iLNv');
      e.throttle = u.throttle;
      var d = i('FUi9');
      e.helper = d;
      var f = i('vafp');
      e.parseGeoJSON = f;
      var p = i('YXkt');
      e.List = p;
      var g = i('Qxkt');
      e.Model = g;
      var m = i('hM6l');
      e.Axis = m;
      var y = i('ItGF');
      e.env = y;
      var v = f,
        x = {};
      a.each(
        [
          'map',
          'each',
          'filter',
          'indexOf',
          'inherits',
          'reduce',
          'filter',
          'bind',
          'curry',
          'isArray',
          'isString',
          'isObject',
          'isFunction',
          'extend',
          'defaults',
          'clone',
          'merge',
        ],
        function(t) {
          x[t] = a[t];
        },
      );
      var b = {};
      a.each(
        [
          'extendShape',
          'extendPath',
          'makePath',
          'makeImage',
          'mergePath',
          'resizePath',
          'createIcon',
          'setHoverStyle',
          'setLabelStyle',
          'setTextStyle',
          'setText',
          'getFont',
          'updateProps',
          'initProps',
          'getTransform',
          'clipPointsByRect',
          'clipRectByRect',
          'Group',
          'Image',
          'Text',
          'Circle',
          'Sector',
          'Ring',
          'Polygon',
          'Polyline',
          'Rect',
          'Line',
          'BezierCurve',
          'Arc',
          'IncrementalDisplayable',
          'CompoundPath',
          'LinearGradient',
          'RadialGradient',
          'BoundingRect',
        ],
        function(t) {
          b[t] = l[t];
        },
      ),
        (e.parseGeoJson = v),
        (e.util = x),
        (e.graphic = b);
    },
    'uAnK': function(t, e, i) {
      var r = i('bYtY'),
        n = i('Kagy'),
        o = i('KxfA').retrieveRawValue;
      t.exports = function(t, e) {
        var i = e.getModel('aria');
        if (i.get('show'))
          if (i.get('description')) t.setAttribute('aria-label', i.get('description'));
          else {
            var a = 0;
            e.eachSeries(function(t, e) {
              ++a;
            }, this);
            var s,
              l = i.get('data.maxCount') || 10,
              c = i.get('series.maxCount') || 10,
              h = Math.min(a, c);
            if (!(a < 1)) {
              var u = (function() {
                var t = e.getModel('title').option;
                return t && t.length && (t = t[0]), t && t.text;
              })();
              s = u ? f(p('general.withTitle'), { title: u }) : p('general.withoutTitle');
              var d = [];
              (s += f(p(a > 1 ? 'series.multiple.prefix' : 'series.single.prefix'), { seriesCount: a })),
                e.eachSeries(function(t, e) {
                  if (e < h) {
                    var i,
                      r = t.get('name'),
                      s = 'series.' + (a > 1 ? 'multiple' : 'single') + '.';
                    i = f((i = p(r ? s + 'withName' : s + 'withoutName')), {
                      seriesId: t.seriesIndex,
                      seriesName: t.get('name'),
                      seriesType: ((v = t.subType), n.series.typeNames[v] || '\u81ea\u5b9a\u4e49\u56fe'),
                    });
                    var c = t.getData();
                    (window.data = c),
                      c.count() > l ? (i += f(p('data.partialData'), { displayCnt: l })) : (i += p('data.allData'));
                    for (var u = [], g = 0; g < c.count(); g++)
                      if (g < l) {
                        var m = c.getName(g),
                          y = o(c, g);
                        u.push(f(p(m ? 'data.withName' : 'data.withoutName'), { name: m, value: y }));
                      }
                    (i += u.join(p('data.separator.middle')) + p('data.separator.end')), d.push(i);
                  }
                  var v;
                }),
                (s += d.join(p('series.multiple.separator.middle')) + p('series.multiple.separator.end')),
                t.setAttribute('aria-label', s);
            }
          }
        function f(t, e) {
          if ('string' != typeof t) return t;
          var i = t;
          return (
            r.each(e, function(t, e) {
              i = i.replace(new RegExp('\\{\\s*' + e + '\\s*\\}', 'g'), t);
            }),
            i
          );
        }
        function p(t) {
          var e = i.get(t);
          if (null == e) {
            for (var r = t.split('.'), o = n.aria, a = 0; a < r.length; ++a) o = o[r[a]];
            return o;
          }
          return e;
        }
      };
    },
    'vKoX': function(t, e, i) {
      var r = i('SrGk');
      function n(t, e) {
        r.call(this, t, e, ['filter'], '__filter_in_use__', '_shadowDom');
      }
      function o(t) {
        return (
          t &&
          (t.shadowBlur ||
            t.shadowOffsetX ||
            t.shadowOffsetY ||
            t.textShadowBlur ||
            t.textShadowOffsetX ||
            t.textShadowOffsetY)
        );
      }
      i('bYtY').inherits(n, r),
        (n.prototype.addWithoutUpdate = function(t, e) {
          if (e && o(e.style)) {
            var i,
              r = e.style;
            r._shadowDom
              ? ((i = r._shadowDom), this.getDefs(!0).contains(r._shadowDom) || this.addDom(i))
              : (i = this.add(e)),
              this.markUsed(e);
            var n = i.getAttribute('id');
            t.style.filter = 'url(#' + n + ')';
          }
        }),
        (n.prototype.add = function(t) {
          var e = this.createElement('filter'),
            i = t.style;
          return (
            (i._shadowDomId = i._shadowDomId || this.nextId++),
            e.setAttribute('id', 'zr' + this._zrId + '-shadow-' + i._shadowDomId),
            this.updateDom(t, e),
            this.addDom(e),
            e
          );
        }),
        (n.prototype.update = function(t, e) {
          var i = e.style;
          if (o(i)) {
            var n = this;
            r.prototype.update.call(this, e, function(t) {
              n.updateDom(e, t._shadowDom);
            });
          } else this.remove(t, i);
        }),
        (n.prototype.remove = function(t, e) {
          null != e._shadowDomId && (this.removeDom(e), (t.style.filter = ''));
        }),
        (n.prototype.updateDom = function(t, e) {
          var i = e.getElementsByTagName('feDropShadow');
          i = 0 === i.length ? this.createElement('feDropShadow') : i[0];
          var r,
            n,
            o,
            a,
            s = t.style,
            l = (t.scale && t.scale[0]) || 1,
            c = (t.scale && t.scale[1]) || 1;
          if (s.shadowBlur || s.shadowOffsetX || s.shadowOffsetY)
            (r = s.shadowOffsetX || 0), (n = s.shadowOffsetY || 0), (o = s.shadowBlur), (a = s.shadowColor);
          else {
            if (!s.textShadowBlur) return void this.removeDom(e, s);
            (r = s.textShadowOffsetX || 0),
              (n = s.textShadowOffsetY || 0),
              (o = s.textShadowBlur),
              (a = s.textShadowColor);
          }
          i.setAttribute('dx', r / l),
            i.setAttribute('dy', n / c),
            i.setAttribute('flood-color', a),
            i.setAttribute('stdDeviation', o / 2 / l + ' ' + o / 2 / c),
            e.setAttribute('x', '-100%'),
            e.setAttribute('y', '-100%'),
            e.setAttribute('width', Math.ceil((o / 2) * 200) + '%'),
            e.setAttribute('height', Math.ceil((o / 2) * 200) + '%'),
            e.appendChild(i),
            (s._shadowDom = e);
        }),
        (n.prototype.markUsed = function(t) {
          var e = t.style;
          e && e._shadowDom && r.prototype.markUsed.call(this, e._shadowDom);
        }),
        (t.exports = n);
    },
    'vWvF': function(t, e, i) {
      var r = i('Bq2U'),
        n = i('SUKs'),
        o = i('bYtY'),
        a = o.isString,
        s = o.isFunction,
        l = o.isObject,
        c = o.isArrayLike,
        h = o.indexOf,
        u = function() {
          this.animators = [];
        };
      function d(t, e, i, r, n, o, h, u) {
        a(r)
          ? ((o = n), (n = r), (r = 0))
          : s(n)
          ? ((o = n), (n = 'linear'), (r = 0))
          : s(r)
          ? ((o = r), (r = 0))
          : s(i)
          ? ((o = i), (i = 500))
          : i || (i = 500),
          t.stopAnimation(),
          (function t(e, i, r, n, o, a, s) {
            var h = {},
              u = 0;
            for (var d in n)
              n.hasOwnProperty(d) &&
                (null != r[d]
                  ? l(n[d]) && !c(n[d])
                    ? t(e, i ? i + '.' + d : d, r[d], n[d], o, a, s)
                    : (s ? ((h[d] = r[d]), f(e, i, d, n[d])) : (h[d] = n[d]), u++)
                  : null == n[d] || s || f(e, i, d, n[d]));
            u > 0 &&
              e
                .animate(i, !1)
                .when(null == o ? 500 : o, h)
                .delay(a || 0);
          })(t, '', t, e, i, r, u);
        var d = t.animators.slice(),
          p = d.length;
        function g() {
          --p || (o && o());
        }
        p || (o && o());
        for (var m = 0; m < d.length; m++) d[m].done(g).start(n, h);
      }
      function f(t, e, i, r) {
        if (e) {
          var n = {};
          (n[e] = {}), (n[e][i] = r), t.attr(n);
        } else t.attr(i, r);
      }
      (u.prototype = {
        constructor: u,
        animate: function(t, e) {
          var i,
            o = !1,
            a = this,
            s = this.__zr;
          if (t) {
            var l = t.split('.'),
              c = a;
            o = 'shape' === l[0];
            for (var u = 0, d = l.length; u < d; u++) c && (c = c[l[u]]);
            c && (i = c);
          } else i = a;
          if (i) {
            var f = a.animators,
              p = new r(i, e);
            return (
              p
                .during(function(t) {
                  a.dirty(o);
                })
                .done(function() {
                  f.splice(h(f, p), 1);
                }),
              f.push(p),
              s && s.animation.addAnimator(p),
              p
            );
          }
          n('Property "' + t + '" is not existed in element ' + a.id);
        },
        stopAnimation: function(t) {
          for (var e = this.animators, i = e.length, r = 0; r < i; r++) e[r].stop(t);
          return (e.length = 0), this;
        },
        animateTo: function(t, e, i, r, n, o) {
          d(this, t, e, i, r, n, o);
        },
        animateFrom: function(t, e, i, r, n, o) {
          d(this, t, e, i, r, n, o, !0);
        },
      }),
        (t.exports = u);
    },
    'vafp': function(t, e, i) {
      var r = i('bYtY'),
        n = i('8nly');
      function o(t, e, i) {
        for (var r = [], n = e[0], o = e[1], a = 0; a < t.length; a += 2) {
          var s = t.charCodeAt(a) - 64,
            l = t.charCodeAt(a + 1) - 64;
          (s = (s >> 1) ^ -(1 & s)), (l = (l >> 1) ^ -(1 & l)), (n = s += n), (o = l += o), r.push([s / i, l / i]);
        }
        return r;
      }
      t.exports = function(t) {
        return (
          (function(t) {
            if (!t.UTF8Encoding) return t;
            var e = t.UTF8Scale;
            null == e && (e = 1024);
            for (var i = t.features, r = 0; r < i.length; r++)
              for (var n = i[r].geometry, a = n.coordinates, s = n.encodeOffsets, l = 0; l < a.length; l++) {
                var c = a[l];
                if ('Polygon' === n.type) a[l] = o(c, s[l], e);
                else if ('MultiPolygon' === n.type) for (var h = 0; h < c.length; h++) c[h] = o(c[h], s[l][h], e);
              }
            t.UTF8Encoding = !1;
          })(t),
          r.map(
            r.filter(t.features, function(t) {
              return t.geometry && t.properties && t.geometry.coordinates.length > 0;
            }),
            function(t) {
              var e = t.properties,
                i = t.geometry,
                o = i.coordinates,
                a = [];
              'Polygon' === i.type && a.push({ type: 'polygon', exterior: o[0], interiors: o.slice(1) }),
                'MultiPolygon' === i.type &&
                  r.each(o, function(t) {
                    t[0] && a.push({ type: 'polygon', exterior: t[0], interiors: t.slice(1) });
                  });
              var s = new n(e.name, a, e.cp);
              return (s.properties = e), s;
            },
          )
        );
      };
    },
    'x6Kt': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('VpOo'),
        o = i('nPnh').subPixelOptimizeRect,
        a = {},
        s = r.extend({
          type: 'rect',
          shape: { r: 0, x: 0, y: 0, width: 0, height: 0 },
          buildPath: function(t, e) {
            var i, r, s, l;
            this.subPixelOptimize
              ? (o(a, e, this.style), (i = a.x), (r = a.y), (s = a.width), (l = a.height), (a.r = e.r), (e = a))
              : ((i = e.x), (r = e.y), (s = e.width), (l = e.height)),
              e.r ? n.buildPath(t, e) : t.rect(i, r, s, l),
              t.closePath();
          },
        });
      t.exports = s;
    },
    'xTNl': function(t, e) {
      var i = [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293',
        '#E062AE',
        '#E690D1',
        '#e7bcf3',
        '#9d96f5',
        '#8378EA',
        '#96BFFF',
      ];
      t.exports = {
        color: i,
        colorLayer: [
          ['#37A2DA', '#ffd85c', '#fd7b5f'],
          ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'],
          ['#37A2DA', '#32C5E9', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378EA', '#96BFFF'],
          i,
        ],
      };
    },
    'y+Vt': function(t, e, i) {
      var r = i('Gev7'),
        n = i('bYtY'),
        o = i('IMiH'),
        a = i('2DNl'),
        s = i('3C/r').prototype.getCanvasPattern,
        l = Math.abs,
        c = new o(!0);
      function h(t) {
        r.call(this, t), (this.path = null);
      }
      (h.prototype = {
        constructor: h,
        type: 'path',
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        subPixelOptimize: !1,
        brush: function(t, e) {
          var i,
            r = this.style,
            n = this.path || c,
            o = r.hasStroke(),
            a = r.hasFill(),
            l = r.fill,
            h = r.stroke,
            u = a && !!l.colorStops,
            d = o && !!h.colorStops,
            f = a && !!l.image,
            p = o && !!h.image;
          r.bind(t, this, e),
            this.setTransform(t),
            this.__dirty &&
              (u && ((i = i || this.getBoundingRect()), (this._fillGradient = r.getGradient(t, l, i))),
              d && ((i = i || this.getBoundingRect()), (this._strokeGradient = r.getGradient(t, h, i)))),
            u ? (t.fillStyle = this._fillGradient) : f && (t.fillStyle = s.call(l, t)),
            d ? (t.strokeStyle = this._strokeGradient) : p && (t.strokeStyle = s.call(h, t));
          var g = r.lineDash,
            m = r.lineDashOffset,
            y = !!t.setLineDash,
            v = this.getGlobalScale();
          if (
            (n.setScale(v[0], v[1]),
            this.__dirtyPath || (g && !y && o)
              ? (n.beginPath(t),
                g && !y && (n.setLineDash(g), n.setLineDashOffset(m)),
                this.buildPath(n, this.shape, !1),
                this.path && (this.__dirtyPath = !1))
              : (t.beginPath(), this.path.rebuildPath(t)),
            a)
          )
            if (null != r.fillOpacity) {
              var x = t.globalAlpha;
              (t.globalAlpha = r.fillOpacity * r.opacity), n.fill(t), (t.globalAlpha = x);
            } else n.fill(t);
          g && y && (t.setLineDash(g), (t.lineDashOffset = m)),
            o &&
              (null != r.strokeOpacity
                ? ((x = t.globalAlpha), (t.globalAlpha = r.strokeOpacity * r.opacity), n.stroke(t), (t.globalAlpha = x))
                : n.stroke(t)),
            g && y && t.setLineDash([]),
            null != r.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function(t, e, i) {},
        createPathProxy: function() {
          this.path = new o();
        },
        getBoundingRect: function() {
          var t = this._rect,
            e = this.style,
            i = !t;
          if (i) {
            var r = this.path;
            r || (r = this.path = new o()),
              this.__dirtyPath && (r.beginPath(), this.buildPath(r, this.shape, !1)),
              (t = r.getBoundingRect());
          }
          if (((this._rect = t), e.hasStroke())) {
            var n = this._rectWithStroke || (this._rectWithStroke = t.clone());
            if (this.__dirty || i) {
              n.copy(t);
              var a = e.lineWidth,
                s = e.strokeNoScale ? this.getLineScale() : 1;
              e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)),
                s > 1e-10 && ((n.width += a / s), (n.height += a / s), (n.x -= a / s / 2), (n.y -= a / s / 2));
            }
            return n;
          }
          return t;
        },
        contain: function(t, e) {
          var i = this.transformCoordToLocal(t, e),
            r = this.getBoundingRect(),
            n = this.style;
          if (r.contain((t = i[0]), (e = i[1]))) {
            var o = this.path.data;
            if (n.hasStroke()) {
              var s = n.lineWidth,
                l = n.strokeNoScale ? this.getLineScale() : 1;
              if (
                l > 1e-10 &&
                (n.hasFill() || (s = Math.max(s, this.strokeContainThreshold)), a.containStroke(o, s / l, t, e))
              )
                return !0;
            }
            if (n.hasFill()) return a.contain(o, t, e);
          }
          return !1;
        },
        dirty: function(t) {
          null == t && (t = !0),
            t && ((this.__dirtyPath = t), (this._rect = null)),
            (this.__dirty = this.__dirtyText = !0),
            this.__zr && this.__zr.refresh(),
            this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function(t) {
          return this.animate('shape', t);
        },
        attrKV: function(t, e) {
          'shape' === t
            ? (this.setShape(e), (this.__dirtyPath = !0), (this._rect = null))
            : r.prototype.attrKV.call(this, t, e);
        },
        setShape: function(t, e) {
          var i = this.shape;
          if (i) {
            if (n.isObject(t)) for (var r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
            else i[t] = e;
            this.dirty(!0);
          }
          return this;
        },
        getLineScale: function() {
          var t = this.transform;
          return t && l(t[0] - 1) > 1e-10 && l(t[3] - 1) > 1e-10 ? Math.sqrt(l(t[0] * t[3] - t[2] * t[1])) : 1;
        },
      }),
        (h.extend = function(t) {
          var e = function(e) {
            h.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var i = t.shape;
            if (i) {
              this.shape = this.shape || {};
              var r = this.shape;
              for (var n in i) !r.hasOwnProperty(n) && i.hasOwnProperty(n) && (r[n] = i[n]);
            }
            t.init && t.init.call(this, e);
          };
          for (var i in (n.inherits(e, h), t)) 'style' !== i && 'shape' !== i && (e.prototype[i] = t[i]);
          return e;
        }),
        n.inherits(h, r),
        (t.exports = h);
    },
    'y23F': function(t, e) {
      function i() {
        this.on('mousedown', this._dragStart, this),
          this.on('mousemove', this._drag, this),
          this.on('mouseup', this._dragEnd, this),
          this.on('globalout', this._dragEnd, this);
      }
      function r(t, e) {
        return { target: t, topTarget: e && e.topTarget };
      }
      (i.prototype = {
        constructor: i,
        _dragStart: function(t) {
          var e = t.target;
          e &&
            e.draggable &&
            ((this._draggingTarget = e),
            (e.dragging = !0),
            (this._x = t.offsetX),
            (this._y = t.offsetY),
            this.dispatchToElement(r(e, t), 'dragstart', t.event));
        },
        _drag: function(t) {
          var e = this._draggingTarget;
          if (e) {
            var i = t.offsetX,
              n = t.offsetY,
              o = i - this._x,
              a = n - this._y;
            (this._x = i), (this._y = n), e.drift(o, a, t), this.dispatchToElement(r(e, t), 'drag', t.event);
            var s = this.findHover(i, n, e).target,
              l = this._dropTarget;
            (this._dropTarget = s),
              e !== s &&
                (l && s !== l && this.dispatchToElement(r(l, t), 'dragleave', t.event),
                s && s !== l && this.dispatchToElement(r(s, t), 'dragenter', t.event));
          }
        },
        _dragEnd: function(t) {
          var e = this._draggingTarget;
          e && (e.dragging = !1),
            this.dispatchToElement(r(e, t), 'dragend', t.event),
            this._dropTarget && this.dispatchToElement(r(this._dropTarget, t), 'drop', t.event),
            (this._draggingTarget = null),
            (this._dropTarget = null);
        },
      }),
        (t.exports = i);
    },
    'y4/Y': function(t, e, i) {
      var r = i('ProS'),
        n = i('bYtY'),
        o = i('zTMp'),
        a = i('62sa');
      i('SKx+'),
        i('1LEl'),
        i('Sp2Z'),
        r.registerPreprocessor(function(t) {
          if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !n.isArray(e) && (t.axisPointer.link = [e]);
          }
        }),
        r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function(t, e) {
          t.getComponent('axisPointer').coordSysAxesInfo = o.collect(t, e);
        }),
        r.registerAction({ type: 'updateAxisPointer', event: 'updateAxisPointer', update: ':updateAxisPointer' }, a);
    },
    'ypgQ': function(t, e, i) {
      var r = i('bYtY'),
        n = i('4NO4'),
        o = i('bLfw'),
        a = r.each,
        s = r.clone,
        l = r.map,
        c = r.merge,
        h = /^(min|max)?(.+)$/;
      function u(t) {
        (this._api = t), (this._timelineOptions = []), (this._mediaList = []), (this._currentMediaIndices = []);
      }
      function d(t, e, i) {
        var n,
          o,
          s = [],
          l = [],
          c = t.timeline;
        return (
          t.baseOption && (o = t.baseOption),
          (c || t.options) && ((o = o || {}), (s = (t.options || []).slice())),
          t.media &&
            ((o = o || {}),
            a(t.media, function(t) {
              t && t.option && (t.query ? l.push(t) : n || (n = t));
            })),
          o || (o = t),
          o.timeline || (o.timeline = c),
          a(
            [o].concat(s).concat(
              r.map(l, function(t) {
                return t.option;
              }),
            ),
            function(t) {
              a(e, function(e) {
                e(t, i);
              });
            },
          ),
          { baseOption: o, timelineOptions: s, mediaDefault: n, mediaList: l }
        );
      }
      function f(t, e, i) {
        var n = { width: e, height: i, aspectratio: e / i },
          o = !0;
        return (
          r.each(t, function(t, e) {
            var i = e.match(h);
            if (i && i[1] && i[2]) {
              var r = i[1],
                a = i[2].toLowerCase();
              (function(t, e, i) {
                return 'min' === i ? t >= e : 'max' === i ? t <= e : t === e;
              })(n[a], t, r) || (o = !1);
            }
          }),
          o
        );
      }
      (u.prototype = {
        constructor: u,
        setOption: function(t, e) {
          t &&
            r.each(n.normalizeToArray(t.series), function(t) {
              t && t.data && r.isTypedArray(t.data) && r.setAsPrimitive(t.data);
            }),
            (t = s(t, !0));
          var i,
            h = this._optionBackup,
            u = d.call(this, t, e, !h);
          (this._newBaseOption = u.baseOption),
            h
              ? ((i = h.baseOption),
                a(u.baseOption || {}, function(t, e) {
                  if (null != t) {
                    var r = i[e];
                    if (o.hasClass(e)) {
                      (t = n.normalizeToArray(t)), (r = n.normalizeToArray(r));
                      var a = n.mappingToExists(r, t);
                      i[e] = l(a, function(t) {
                        return t.option && t.exist ? c(t.exist, t.option, !0) : t.exist || t.option;
                      });
                    } else i[e] = c(r, t, !0);
                  }
                }),
                u.timelineOptions.length && (h.timelineOptions = u.timelineOptions),
                u.mediaList.length && (h.mediaList = u.mediaList),
                u.mediaDefault && (h.mediaDefault = u.mediaDefault))
              : (this._optionBackup = u);
        },
        mountOption: function(t) {
          var e = this._optionBackup;
          return (
            (this._timelineOptions = l(e.timelineOptions, s)),
            (this._mediaList = l(e.mediaList, s)),
            (this._mediaDefault = s(e.mediaDefault)),
            (this._currentMediaIndices = []),
            s(t ? e.baseOption : this._newBaseOption)
          );
        },
        getTimelineOption: function(t) {
          var e,
            i = this._timelineOptions;
          if (i.length) {
            var r = t.getComponent('timeline');
            r && (e = s(i[r.getCurrentIndex()], !0));
          }
          return e;
        },
        getMediaOption: function(t) {
          var e,
            i = this._api.getWidth(),
            r = this._api.getHeight(),
            n = this._mediaList,
            o = this._mediaDefault,
            a = [],
            c = [];
          if (!n.length && !o) return c;
          for (var h = 0, u = n.length; h < u; h++) f(n[h].query, i, r) && a.push(h);
          return (
            !a.length && o && (a = [-1]),
            a.length &&
              ((e = this._currentMediaIndices), a.join(',') !== e.join(',')) &&
              (c = l(a, function(t) {
                return s(-1 === t ? o.option : n[t].option);
              })),
            (this._currentMediaIndices = a),
            c
          );
        },
      }),
        (t.exports = u);
    },
    'yxFR': function(t, e, i) {
      var r = i('y+Vt'),
        n = i('nPnh').subPixelOptimizeLine,
        o = {},
        a = r.extend({
          type: 'line',
          shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 },
          style: { stroke: '#000', fill: null },
          buildPath: function(t, e) {
            var i, r, a, s;
            this.subPixelOptimize
              ? (n(o, e, this.style), (i = o.x1), (r = o.y1), (a = o.x2), (s = o.y2))
              : ((i = e.x1), (r = e.y1), (a = e.x2), (s = e.y2));
            var l = e.percent;
            0 !== l &&
              (t.moveTo(i, r), l < 1 && ((a = i * (1 - l) + a * l), (s = r * (1 - l) + s * l)), t.lineTo(a, s));
          },
          pointAt: function(t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
          },
        });
      t.exports = a;
    },
    'zHPi': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return o;
      });
      var r = i('UUrH'),
        n = i('fXoL'),
        o = (function() {
          var t = (function() {
            function t(e, i) {
              _classCallCheck(this, t),
                (this._axisOption = e),
                (this._optionsService = i),
                (this._state = {}),
                (this.config = {}),
                (this.show = !0);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnChanges',
                  value: function() {
                    this._setOptions();
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function() {
                    this._removeOption();
                  },
                },
                {
                  key: '_setOptions',
                  value: function() {
                    var t = Object(r.a)(
                      this._state,
                      {
                        id: this.id,
                        show: this.show,
                        gridIndex: this.gridIndex,
                        position: this.position,
                        offset: this.offset,
                        type: this.type,
                        name: this.name,
                        nameLocation: this.nameLocation,
                        nameTextStyle: this.nameTextStyle,
                        nameGap: this.nameGap,
                        nameRotate: this.nameRotate,
                        inverse: this.inverse,
                        boundaryGap: this.boundaryGap,
                        min: this.min,
                        max: this.max,
                        scale: this.scale,
                        minInterval: this.minInterval,
                        interval: this.interval,
                        logBase: this.logBase,
                        silent: this.silent,
                        triggerEvent: this.triggerEvent,
                        axisLine: this.axisLine,
                        axisTick: this.axisTick,
                        axisLabel: this.axisLabel,
                        splitLine: this.splitLine,
                        splitArea: this.splitArea,
                        data: this.data,
                        axisPointer: this.axisPointer,
                        zlevel: this.zlevel,
                        z: this.z,
                      },
                      this.config ? this.config : {},
                    );
                    this._optionsService.setArrayOption(this._axisOption, t);
                  },
                },
                {
                  key: '_removeOption',
                  value: function() {
                    this._optionsService.clearOption(this._axisOption);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(t) {
              n.fc();
            }),
            (t.ɵdir = n.Nb({
              type: t,
              inputs: {
                config: 'config',
                id: 'id',
                show: 'show',
                gridIndex: 'gridIndex',
                offset: 'offset',
                type: 'type',
                name: 'name',
                nameLocation: 'nameLocation',
                nameTextStyle: 'nameTextStyle',
                nameGap: 'nameGap',
                nameRotate: 'nameRotate',
                inverse: 'inverse',
                boundaryGap: 'boundaryGap',
                min: 'min',
                max: 'max',
                scale: 'scale',
                minInterval: 'minInterval',
                interval: 'interval',
                logBase: 'logBase',
                silent: 'silent',
                triggerEvent: 'triggerEvent',
                axisLine: 'axisLine',
                axisTick: 'axisTick',
                axisLabel: 'axisLabel',
                splitLine: 'splitLine',
                splitArea: 'splitArea',
                data: 'data',
                axisPointer: 'axisPointer',
                zlevel: 'zlevel',
                z: 'z',
              },
              features: [n.Bb()],
            })),
            t
          );
        })();
    },
    'zM3Q': function(t, e, i) {
      var r = i('4NO4').makeInner;
      t.exports = function() {
        var t = r();
        return function(e) {
          var i = t(e),
            r = e.pipelineContext,
            n = i.large,
            o = i.progressiveRender,
            a = (i.large = r.large),
            s = (i.progressiveRender = r.progressiveRender);
          return !!(n ^ a || o ^ s) && 'reset';
        };
      };
    },
    'zTMp': function(t, e, i) {
      var r = i('bYtY'),
        n = i('Qxkt'),
        o = r.each,
        a = r.curry;
      function s(t, e) {
        return 'all' === t || (r.isArray(t) && r.indexOf(t, e) >= 0) || t === e;
      }
      function l(t) {
        var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
        return e && e.axesInfo[h(t)];
      }
      function c(t) {
        return !!t.get('handle.show');
      }
      function h(t) {
        return t.type + '||' + t.id;
      }
      (e.collect = function(t, e) {
        var i = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };
        return (
          (function(t, e, i) {
            var l = e.getComponent('tooltip'),
              u = e.getComponent('axisPointer'),
              d = u.get('link', !0) || [],
              f = [];
            o(i.getCoordinateSystems(), function(i) {
              if (i.axisPointerEnabled) {
                var p = h(i.model),
                  g = (t.coordSysAxesInfo[p] = {});
                t.coordSysMap[p] = i;
                var m = i.model.getModel('tooltip', l);
                if ((o(i.getAxes(), a(b, !1, null)), i.getTooltipAxes && l && m.get('show'))) {
                  var y = 'axis' === m.get('trigger'),
                    v = 'cross' === m.get('axisPointer.type'),
                    x = i.getTooltipAxes(m.get('axisPointer.axis'));
                  (y || v) && o(x.baseAxes, a(b, !v || 'cross', y)), v && o(x.otherAxes, a(b, 'cross', !1));
                }
              }
              function b(a, l, p) {
                var y = p.model.getModel('axisPointer', u),
                  v = y.get('show');
                if (v && ('auto' !== v || a || c(y))) {
                  null == l && (l = y.get('triggerTooltip'));
                  var x = (y = a
                      ? (function(t, e, i, a, s, l) {
                          var c = e.getModel('axisPointer'),
                            h = {};
                          o(
                            [
                              'type',
                              'snap',
                              'lineStyle',
                              'shadowStyle',
                              'label',
                              'animation',
                              'animationDurationUpdate',
                              'animationEasingUpdate',
                              'z',
                            ],
                            function(t) {
                              h[t] = r.clone(c.get(t));
                            },
                          ),
                            (h.snap = 'category' !== t.type && !!l),
                            'cross' === c.get('type') && (h.type = 'line');
                          var u = h.label || (h.label = {});
                          if ((null == u.show && (u.show = !1), 'cross' === s)) {
                            var d = c.get('label.show');
                            if (((u.show = null == d || d), !l)) {
                              var f = (h.lineStyle = c.get('crossStyle'));
                              f && r.defaults(u, f.textStyle);
                            }
                          }
                          return t.model.getModel('axisPointer', new n(h, i, a));
                        })(p, m, u, e, a, l)
                      : y).get('snap'),
                    b = h(p.model),
                    _ = l || x || 'category' === p.type,
                    S = (t.axesInfo[b] = {
                      key: b,
                      axis: p,
                      coordSys: i,
                      axisPointerModel: y,
                      triggerTooltip: l,
                      involveSeries: _,
                      snap: x,
                      useHandle: c(y),
                      seriesModels: [],
                    });
                  (g[b] = S), (t.seriesInvolved |= _);
                  var w = (function(t, e) {
                    for (var i = e.model, r = e.dim, n = 0; n < t.length; n++) {
                      var o = t[n] || {};
                      if (
                        s(o[r + 'AxisId'], i.id) ||
                        s(o[r + 'AxisIndex'], i.componentIndex) ||
                        s(o[r + 'AxisName'], i.name)
                      )
                        return n;
                    }
                  })(d, p);
                  if (null != w) {
                    var C = f[w] || (f[w] = { axesInfo: {} });
                    (C.axesInfo[b] = S), (C.mapper = d[w].mapper), (S.linkGroup = C);
                  }
                }
              }
            });
          })(i, t, e),
          i.seriesInvolved &&
            (function(t, e) {
              e.eachSeries(function(e) {
                var i = e.coordinateSystem,
                  r = e.get('tooltip.trigger', !0),
                  n = e.get('tooltip.show', !0);
                i &&
                  'none' !== r &&
                  !1 !== r &&
                  'item' !== r &&
                  !1 !== n &&
                  !1 !== e.get('axisPointer.show', !0) &&
                  o(t.coordSysAxesInfo[h(i.model)], function(t) {
                    var r = t.axis;
                    i.getAxis(r.dim) === r &&
                      (t.seriesModels.push(e),
                      null == t.seriesDataCount && (t.seriesDataCount = 0),
                      (t.seriesDataCount += e.getData().count()));
                  });
              }, this);
            })(i, t),
          i
        );
      }),
        (e.fixValue = function(t) {
          var e = l(t);
          if (e) {
            var i = e.axisPointerModel,
              r = e.axis.scale,
              n = i.option,
              o = i.get('status'),
              a = i.get('value');
            null != a && (a = r.parse(a));
            var s = c(i);
            null == o && (n.status = s ? 'show' : 'hide');
            var h = r.getExtent().slice();
            h[0] > h[1] && h.reverse(),
              (null == a || a > h[1]) && (a = h[1]),
              a < h[0] && (a = h[0]),
              (n.value = a),
              s && (n.status = e.axis.scale.isBlank() ? 'hide' : 'show');
          }
        }),
        (e.getAxisInfo = l),
        (e.getAxisPointerModel = function(t) {
          var e = l(t);
          return e && e.axisPointerModel;
        }),
        (e.makeKey = h);
    },
    'zarK': function(t, e, i) {
      var r = i('YH21'),
        n = r.addEventListener,
        o = r.removeEventListener,
        a = r.normalizeEvent,
        s = i('bYtY'),
        l = i('H6uX'),
        c = i('ItGF'),
        h = ['click', 'dblclick', 'mousewheel', 'mouseout', 'mouseup', 'mousedown', 'mousemove', 'contextmenu'],
        u = ['touchstart', 'touchend', 'touchmove'],
        d = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
        f = s.map(h, function(t) {
          var e = t.replace('mouse', 'pointer');
          return d[e] ? e : t;
        });
      function p(t) {
        return 'mousewheel' === t && c.browser.firefox ? 'DOMMouseScroll' : t;
      }
      function g(t) {
        (t._touching = !0),
          clearTimeout(t._touchTimer),
          (t._touchTimer = setTimeout(function() {
            t._touching = !1;
          }, 700));
      }
      var m = {
        mousemove: function(t) {
          (t = a(this.dom, t)), this.trigger('mousemove', t);
        },
        mouseout: function(t) {
          var e = (t = a(this.dom, t)).toElement || t.relatedTarget;
          if (e !== this.dom)
            for (; e && 9 !== e.nodeType; ) {
              if (e === this.dom) return;
              e = e.parentNode;
            }
          this.trigger('mouseout', t);
        },
        touchstart: function(t) {
          ((t = a(this.dom, t)).zrByTouch = !0),
            (this._lastTouchMoment = new Date()),
            this.handler.processGesture(this, t, 'start'),
            m.mousemove.call(this, t),
            m.mousedown.call(this, t),
            g(this);
        },
        touchmove: function(t) {
          ((t = a(this.dom, t)).zrByTouch = !0),
            this.handler.processGesture(this, t, 'change'),
            m.mousemove.call(this, t),
            g(this);
        },
        touchend: function(t) {
          ((t = a(this.dom, t)).zrByTouch = !0),
            this.handler.processGesture(this, t, 'end'),
            m.mouseup.call(this, t),
            +new Date() - this._lastTouchMoment < 300 && m.click.call(this, t),
            g(this);
        },
        pointerdown: function(t) {
          m.mousedown.call(this, t);
        },
        pointermove: function(t) {
          y(t) || m.mousemove.call(this, t);
        },
        pointerup: function(t) {
          m.mouseup.call(this, t);
        },
        pointerout: function(t) {
          y(t) || m.mouseout.call(this, t);
        },
      };
      function y(t) {
        var e = t.pointerType;
        return 'pen' === e || 'touch' === e;
      }
      function v(t) {
        var e;
        function i(e, i) {
          s.each(
            e,
            function(e) {
              n(t, p(e), i._handlers[e]);
            },
            i,
          );
        }
        l.call(this),
          (this.dom = t),
          (this._touching = !1),
          (this._handlers = {}),
          (e = this),
          s.each(u, function(t) {
            e._handlers[t] = s.bind(m[t], e);
          }),
          s.each(f, function(t) {
            e._handlers[t] = s.bind(m[t], e);
          }),
          s.each(h, function(t) {
            e._handlers[t] = (function(t, e) {
              return function() {
                if (!e._touching) return t.apply(e, arguments);
              };
            })(m[t], e);
          }),
          c.pointerEventsSupported ? i(f, this) : (c.touchEventsSupported && i(u, this), i(h, this));
      }
      s.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function(t) {
        m[t] = function(e) {
          (e = a(this.dom, e)), this.trigger(t, e);
        };
      });
      var x = v.prototype;
      (x.dispose = function() {
        for (var t = h.concat(u), e = 0; e < t.length; e++) {
          var i = t[e];
          o(this.dom, p(i), this._handlers[i]);
        }
      }),
        (x.setCursor = function(t) {
          this.dom.style && (this.dom.style.cursor = t || 'default');
        }),
        s.mixin(v, l),
        (t.exports = v);
    },
  },
]);
