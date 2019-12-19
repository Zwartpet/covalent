(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '/d5a': function(t, e) {
      var n = {
          average: function(t) {
            for (var e = 0, n = 0, o = 0; o < t.length; o++) isNaN(t[o]) || ((e += t[o]), n++);
            return 0 === n ? NaN : e / n;
          },
          sum: function(t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e;
          },
          max: function(t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e : NaN;
          },
          min: function(t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e : NaN;
          },
          nearest: function(t) {
            return t[0];
          },
        },
        o = function(t, e) {
          return Math.round(t.length / 2);
        };
      t.exports = function(t) {
        return {
          seriesType: t,
          modifyOutputEnd: !0,
          reset: function(t, e, i) {
            var a = t.getData(),
              s = t.get('sampling'),
              r = t.coordinateSystem;
            if ('cartesian2d' === r.type && s) {
              var l,
                u = r.getBaseAxis(),
                h = r.getOtherAxis(u),
                c = u.getExtent(),
                p = c[1] - c[0],
                d = Math.round(a.count() / p);
              d > 1 &&
                ('string' == typeof s ? (l = n[s]) : 'function' == typeof s && (l = s),
                l && t.setData(a.downSample(a.mapDimension(h.dim), 1 / d, l, o)));
            }
          },
        };
      };
    },
    '1NG9': function(t, e, n) {
      var o = n('y+Vt'),
        i = n('QBsz'),
        a = n('iXp4'),
        s = i.min,
        r = i.max,
        l = i.scaleAndAdd,
        u = i.copy,
        h = [],
        c = [],
        p = [];
      function d(t) {
        return isNaN(t[0]) || isNaN(t[1]);
      }
      function f(t, e, n, o, i, a, s, r, l, u, h) {
        return 'none' !== u && u ? m.apply(this, arguments) : g.apply(this, arguments);
      }
      function m(t, e, n, o, i, a, s, r, l, h, f) {
        for (var m = 0, g = n, v = 0; v < o; v++) {
          var y = e[g];
          if (g >= i || g < 0) break;
          if (d(y)) {
            if (f) {
              g += a;
              continue;
            }
            break;
          }
          if (g === n) t[a > 0 ? 'moveTo' : 'lineTo'](y[0], y[1]);
          else if (l > 0) {
            var x = e[m],
              _ = 'y' === h ? 1 : 0,
              S = (y[_] - x[_]) * l;
            u(c, x), (c[_] = x[_] + S), u(p, y), (p[_] = y[_] - S), t.bezierCurveTo(c[0], c[1], p[0], p[1], y[0], y[1]);
          } else t.lineTo(y[0], y[1]);
          (m = g), (g += a);
        }
        return v;
      }
      function g(t, e, n, o, a, f, m, g, v, y, x) {
        for (var _ = 0, S = n, b = 0; b < o; b++) {
          var w = e[S];
          if (S >= a || S < 0) break;
          if (d(w)) {
            if (x) {
              S += f;
              continue;
            }
            break;
          }
          if (S === n) t[f > 0 ? 'moveTo' : 'lineTo'](w[0], w[1]), u(c, w);
          else if (v > 0) {
            var k = S + f,
              P = e[k];
            if (x) for (; P && d(e[k]); ) P = e[(k += f)];
            var N = 0.5,
              I = e[_];
            if (!(P = e[k]) || d(P)) u(p, w);
            else {
              var O, D;
              if ((d(P) && !x && (P = w), i.sub(h, P, I), 'x' === y || 'y' === y)) {
                var A = 'x' === y ? 0 : 1;
                (O = Math.abs(w[A] - I[A])), (D = Math.abs(w[A] - P[A]));
              } else (O = i.dist(w, I)), (D = i.dist(w, P));
              l(p, w, h, -v * (1 - (N = D / (D + O))));
            }
            s(c, c, g),
              r(c, c, m),
              s(p, p, g),
              r(p, p, m),
              t.bezierCurveTo(c[0], c[1], p[0], p[1], w[0], w[1]),
              l(c, w, h, v * N);
          } else t.lineTo(w[0], w[1]);
          (_ = S), (S += f);
        }
        return b;
      }
      function v(t, e) {
        var n = [1 / 0, 1 / 0],
          o = [-1 / 0, -1 / 0];
        if (e)
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a[0] < n[0] && (n[0] = a[0]),
              a[1] < n[1] && (n[1] = a[1]),
              a[0] > o[0] && (o[0] = a[0]),
              a[1] > o[1] && (o[1] = a[1]);
          }
        return { min: e ? n : o, max: e ? o : n };
      }
      var y = o.extend({
          type: 'ec-polyline',
          shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 },
          style: { fill: null, stroke: '#000' },
          brush: a(o.prototype.brush),
          buildPath: function(t, e) {
            var n = e.points,
              o = 0,
              i = n.length,
              a = v(n, e.smoothConstraint);
            if (e.connectNulls) {
              for (; i > 0 && d(n[i - 1]); i--);
              for (; o < i && d(n[o]); o++);
            }
            for (; o < i; ) o += f(t, n, o, i, i, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
          },
        }),
        x = o.extend({
          type: 'ec-polygon',
          shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1,
          },
          brush: a(o.prototype.brush),
          buildPath: function(t, e) {
            var n = e.points,
              o = e.stackedOnPoints,
              i = 0,
              a = n.length,
              s = e.smoothMonotone,
              r = v(n, e.smoothConstraint),
              l = v(o, e.smoothConstraint);
            if (e.connectNulls) {
              for (; a > 0 && d(n[a - 1]); a--);
              for (; i < a && d(n[i]); i++);
            }
            for (; i < a; ) {
              var u = f(t, n, i, a, a, 1, r.min, r.max, e.smooth, s, e.connectNulls);
              f(t, o, i + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, s, e.connectNulls),
                (i += u + 1),
                t.closePath();
            }
          },
        });
      (e.Polyline = y), (e.Polygon = x);
    },
    '75ce': function(t, e, n) {
      var o = n('ProS');
      n('IXuL'), n('8X+K');
      var i = n('f5Yq'),
        a = n('h8O9'),
        s = n('/d5a');
      n('Ae16'),
        o.registerVisual(i('line', 'circle', 'line')),
        o.registerLayout(a('line')),
        o.registerProcessor(o.PRIORITY.PROCESSOR.STATISTIC, s('line'));
    },
    '8SMY': function(t, e, n) {
      var o = n('n4Lv'),
        i = o.prepareDataCoordInfo,
        a = o.getStackedOnPoint;
      t.exports = function(t, e, n, o, s, r, l, u) {
        for (
          var h = (function(t, e) {
              var n = [];
              return (
                e
                  .diff(t)
                  .add(function(t) {
                    n.push({ cmd: '+', idx: t });
                  })
                  .update(function(t, e) {
                    n.push({ cmd: '=', idx: e, idx1: t });
                  })
                  .remove(function(t) {
                    n.push({ cmd: '-', idx: t });
                  })
                  .execute(),
                n
              );
            })(t, e),
            c = [],
            p = [],
            d = [],
            f = [],
            m = [],
            g = [],
            v = [],
            y = i(s, e, l),
            x = i(r, t, u),
            _ = 0;
          _ < h.length;
          _++
        ) {
          var S = h[_],
            b = !0;
          switch (S.cmd) {
            case '=':
              var w = t.getItemLayout(S.idx),
                k = e.getItemLayout(S.idx1);
              (isNaN(w[0]) || isNaN(w[1])) && (w = k.slice()),
                c.push(w),
                p.push(k),
                d.push(n[S.idx]),
                f.push(o[S.idx1]),
                v.push(e.getRawIndex(S.idx1));
              break;
            case '+':
              c.push(s.dataToPoint([e.get(y.dataDimsForPoint[0], (M = S.idx)), e.get(y.dataDimsForPoint[1], M)])),
                p.push(e.getItemLayout(M).slice()),
                d.push(a(y, s, e, M)),
                f.push(o[M]),
                v.push(e.getRawIndex(M));
              break;
            case '-':
              var P = t.getRawIndex((M = S.idx));
              P !== M
                ? (c.push(t.getItemLayout(M)),
                  p.push(r.dataToPoint([t.get(x.dataDimsForPoint[0], M), t.get(x.dataDimsForPoint[1], M)])),
                  d.push(n[M]),
                  f.push(a(x, r, t, M)),
                  v.push(P))
                : (b = !1);
          }
          b && (m.push(S), g.push(g.length));
        }
        g.sort(function(t, e) {
          return v[t] - v[e];
        });
        var N = [],
          I = [],
          O = [],
          D = [],
          A = [];
        for (_ = 0; _ < g.length; _++) {
          var M;
          (N[_] = c[(M = g[_])]), (I[_] = p[M]), (O[_] = d[M]), (D[_] = f[M]), (A[_] = m[M]);
        }
        return { current: N, next: I, stackedOnCurrent: O, stackedOnNext: D, status: A };
      };
    },
    '8X+K': function(t, e, n) {
      n('Tghj');
      var o = n('bYtY'),
        i = n('9wZj'),
        a = n('FBjb'),
        s = n('8SMY'),
        r = n('IwbS'),
        l = n('4NO4'),
        u = n('1NG9'),
        h = u.Polyline,
        c = u.Polygon,
        p = n('6Ic6'),
        d = n('OELB').round,
        f = n('n4Lv'),
        m = f.prepareDataCoordInfo,
        g = f.getStackedOnPoint;
      function v(t, e) {
        if (t.length === e.length) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n],
              i = e[n];
            if (o[0] !== i[0] || o[1] !== i[1]) return;
          }
          return !0;
        }
      }
      function y(t) {
        return 'number' == typeof t ? t : t ? 0.5 : 0;
      }
      function x(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
          var n = t.getBandWidth() / 2 - 1,
            o = e[1] > e[0] ? 1 : -1;
          (e[0] += o * n), (e[1] -= o * n);
        }
        return e;
      }
      function _(t, e, n, o) {
        return 'polar' === t.type
          ? (function(t, e, n, o) {
              var i = t.getAngleAxis(),
                a = t
                  .getRadiusAxis()
                  .getExtent()
                  .slice();
              a[0] > a[1] && a.reverse();
              var s = i.getExtent(),
                l = Math.PI / 180;
              n && ((a[0] -= 0.5), (a[1] += 0.5));
              var u = new r.Sector({
                shape: {
                  cx: d(t.cx, 1),
                  cy: d(t.cy, 1),
                  r0: d(a[0], 1),
                  r: d(a[1], 1),
                  startAngle: -s[0] * l,
                  endAngle: -s[1] * l,
                  clockwise: i.inverse,
                },
              });
              return e && ((u.shape.endAngle = -s[0] * l), r.initProps(u, { shape: { endAngle: -s[1] * l } }, o)), u;
            })(t, e, n, o)
          : (function(t, e, n, o) {
              var i = x(t.getAxis('x')),
                a = x(t.getAxis('y')),
                s = t.getBaseAxis().isHorizontal(),
                l = Math.min(i[0], i[1]),
                u = Math.min(a[0], a[1]),
                h = Math.max(i[0], i[1]) - l,
                c = Math.max(a[0], a[1]) - u;
              if (n) (l -= 0.5), (h += 0.5), (u -= 0.5), (c += 0.5);
              else {
                var p = o.get('lineStyle.width') || 2,
                  d = o.get('clipOverflow') ? p / 2 : Math.max(h, c);
                s ? ((u -= d), (c += 2 * d)) : ((l -= d), (h += 2 * d));
              }
              var f = new r.Rect({ shape: { x: l, y: u, width: h, height: c } });
              return (
                e && ((f.shape[s ? 'width' : 'height'] = 0), r.initProps(f, { shape: { width: h, height: c } }, o)), f
              );
            })(t, e, n, o);
      }
      function S(t, e, n) {
        for (
          var o = e.getBaseAxis(), i = 'x' === o.dim || 'radius' === o.dim ? 0 : 1, a = [], s = 0;
          s < t.length - 1;
          s++
        ) {
          var r = t[s + 1],
            l = t[s];
          a.push(l);
          var u = [];
          switch (n) {
            case 'end':
              (u[i] = r[i]), (u[1 - i] = l[1 - i]), a.push(u);
              break;
            case 'middle':
              var h = [];
              (u[i] = h[i] = (l[i] + r[i]) / 2), (u[1 - i] = l[1 - i]), (h[1 - i] = r[1 - i]), a.push(u), a.push(h);
              break;
            default:
              (u[i] = l[i]), (u[1 - i] = r[1 - i]), a.push(u);
          }
        }
        return t[s] && a.push(t[s]), a;
      }
      var b = p.extend({
        type: 'line',
        init: function() {
          var t = new r.Group(),
            e = new i();
          this.group.add(e.group), (this._symbolDraw = e), (this._lineGroup = t);
        },
        render: function(t, e, n) {
          var i = t.coordinateSystem,
            s = this.group,
            l = t.getData(),
            u = t.getModel('lineStyle'),
            h = t.getModel('areaStyle'),
            c = l.mapArray(l.getItemLayout),
            p = 'polar' === i.type,
            d = this._coordSys,
            f = this._symbolDraw,
            x = this._polyline,
            b = this._polygon,
            w = this._lineGroup,
            k = t.get('animation'),
            P = !h.isEmpty(),
            N = h.get('origin'),
            I = (function(t, e, n) {
              if (!n.valueDim) return [];
              for (var o = [], i = 0, a = e.count(); i < a; i++) o.push(g(n, t, e, i));
              return o;
            })(i, l, m(i, l, N)),
            O = t.get('showSymbol'),
            D =
              O &&
              !p &&
              (function(t, e, n) {
                var i = t.get('showAllSymbol'),
                  s = 'auto' === i;
                if (!i || s) {
                  var r = n.getAxesByScale('ordinal')[0];
                  if (
                    r &&
                    (!s ||
                      !(function(t, e) {
                        var n = t.getExtent(),
                          o = Math.abs(n[1] - n[0]) / t.scale.count();
                        isNaN(o) && (o = 0);
                        for (var i = e.count(), s = Math.max(1, Math.round(i / 5)), r = 0; r < i; r += s)
                          if (1.5 * a.getSymbolSize(e, r)[t.isHorizontal() ? 1 : 0] > o) return !1;
                        return !0;
                      })(r, e))
                  ) {
                    var l = e.mapDimension(r.dim),
                      u = {};
                    return (
                      o.each(r.getViewLabels(), function(t) {
                        u[t.tickValue] = 1;
                      }),
                      function(t) {
                        return !u.hasOwnProperty(e.get(l, t));
                      }
                    );
                  }
                }
              })(t, l, i),
            A = this._data;
          A &&
            A.eachItemGraphicEl(function(t, e) {
              t.__temp && (s.remove(t), A.setItemGraphicEl(e, null));
            }),
            O || f.remove(),
            s.add(w);
          var M = !p && t.get('step');
          x && d.type === i.type && M === this._step
            ? (P && !b ? (b = this._newPolygon(c, I, i, k)) : b && !P && (w.remove(b), (b = this._polygon = null)),
              w.setClipPath(_(i, !1, !1, t)),
              O && f.updateData(l, { isIgnore: D, clipShape: _(i, !1, !0, t) }),
              l.eachItemGraphicEl(function(t) {
                t.stopAnimation(!0);
              }),
              (v(this._stackedOnPoints, I) && v(this._points, c)) ||
                (k
                  ? this._updateAnimation(l, I, i, n, M, N)
                  : (M && ((c = S(c, i, M)), (I = S(I, i, M))),
                    x.setShape({ points: c }),
                    b && b.setShape({ points: c, stackedOnPoints: I }))))
            : (O && f.updateData(l, { isIgnore: D, clipShape: _(i, !1, !0, t) }),
              M && ((c = S(c, i, M)), (I = S(I, i, M))),
              (x = this._newPolyline(c, i, k)),
              P && (b = this._newPolygon(c, I, i, k)),
              w.setClipPath(_(i, !0, !1, t)));
          var C =
            (function(t, e) {
              var n = t.getVisual('visualMeta');
              if (n && n.length && t.count() && 'cartesian2d' === e.type) {
                for (var i, a, s = n.length - 1; s >= 0; s--) {
                  var l = t.getDimensionInfo(t.dimensions[n[s].dimension]);
                  if ('x' === (i = l && l.coordDim) || 'y' === i) {
                    a = n[s];
                    break;
                  }
                }
                if (a) {
                  var u = e.getAxis(i),
                    h = o.map(a.stops, function(t) {
                      return { coord: u.toGlobalCoord(u.dataToCoord(t.value)), color: t.color };
                    }),
                    c = h.length,
                    p = a.outerColors.slice();
                  c && h[0].coord > h[c - 1].coord && (h.reverse(), p.reverse());
                  var d = h[0].coord - 10,
                    f = h[c - 1].coord + 10,
                    m = f - d;
                  if (m < 0.001) return 'transparent';
                  o.each(h, function(t) {
                    t.offset = (t.coord - d) / m;
                  }),
                    h.push({ offset: c ? h[c - 1].offset : 0.5, color: p[1] || 'transparent' }),
                    h.unshift({ offset: c ? h[0].offset : 0.5, color: p[0] || 'transparent' });
                  var g = new r.LinearGradient(0, 0, 0, 0, h, !0);
                  return (g[i] = d), (g[i + '2'] = f), g;
                }
              }
            })(l, i) || l.getVisual('color');
          x.useStyle(o.defaults(u.getLineStyle(), { fill: 'none', stroke: C, lineJoin: 'bevel' }));
          var G = t.get('smooth');
          if (
            ((G = y(t.get('smooth'))),
            x.setShape({ smooth: G, smoothMonotone: t.get('smoothMonotone'), connectNulls: t.get('connectNulls') }),
            b)
          ) {
            var E = l.getCalculationInfo('stackedOnSeries'),
              T = 0;
            b.useStyle(o.defaults(h.getAreaStyle(), { fill: C, opacity: 0.7, lineJoin: 'bevel' })),
              E && (T = y(E.get('smooth'))),
              b.setShape({
                smooth: G,
                stackedOnSmooth: T,
                smoothMonotone: t.get('smoothMonotone'),
                connectNulls: t.get('connectNulls'),
              });
          }
          (this._data = l),
            (this._coordSys = i),
            (this._stackedOnPoints = I),
            (this._points = c),
            (this._step = M),
            (this._valueOrigin = N);
        },
        dispose: function() {},
        highlight: function(t, e, n, o) {
          var i = t.getData(),
            s = l.queryDataIndex(i, o);
          if (!(s instanceof Array) && null != s && s >= 0) {
            var r = i.getItemGraphicEl(s);
            if (!r) {
              var u = i.getItemLayout(s);
              if (!u) return;
              ((r = new a(i, s)).position = u),
                r.setZ(t.get('zlevel'), t.get('z')),
                (r.ignore = isNaN(u[0]) || isNaN(u[1])),
                (r.__temp = !0),
                i.setItemGraphicEl(s, r),
                r.stopSymbolAnimation(!0),
                this.group.add(r);
            }
            r.highlight();
          } else p.prototype.highlight.call(this, t, e, n, o);
        },
        downplay: function(t, e, n, o) {
          var i = t.getData(),
            a = l.queryDataIndex(i, o);
          if (null != a && a >= 0) {
            var s = i.getItemGraphicEl(a);
            s && (s.__temp ? (i.setItemGraphicEl(a, null), this.group.remove(s)) : s.downplay());
          } else p.prototype.downplay.call(this, t, e, n, o);
        },
        _newPolyline: function(t) {
          var e = this._polyline;
          return (
            e && this._lineGroup.remove(e),
            (e = new h({ shape: { points: t }, silent: !0, z2: 10 })),
            this._lineGroup.add(e),
            (this._polyline = e),
            e
          );
        },
        _newPolygon: function(t, e) {
          var n = this._polygon;
          return (
            n && this._lineGroup.remove(n),
            (n = new c({ shape: { points: t, stackedOnPoints: e }, silent: !0 })),
            this._lineGroup.add(n),
            (this._polygon = n),
            n
          );
        },
        _updateAnimation: function(t, e, n, o, i, a) {
          var l = this._polyline,
            u = this._polygon,
            h = t.hostModel,
            c = s(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
            p = c.current,
            d = c.stackedOnCurrent,
            f = c.next,
            m = c.stackedOnNext;
          i &&
            ((p = S(c.current, n, i)),
            (d = S(c.stackedOnCurrent, n, i)),
            (f = S(c.next, n, i)),
            (m = S(c.stackedOnNext, n, i))),
            (l.shape.__points = c.current),
            (l.shape.points = p),
            r.updateProps(l, { shape: { points: f } }, h),
            u &&
              (u.setShape({ points: p, stackedOnPoints: d }),
              r.updateProps(u, { shape: { points: f, stackedOnPoints: m } }, h));
          for (var g = [], v = c.status, y = 0; y < v.length; y++)
            if ('=' === v[y].cmd) {
              var x = t.getItemGraphicEl(v[y].idx1);
              x && g.push({ el: x, ptIdx: y });
            }
          l.animators &&
            l.animators.length &&
            l.animators[0].during(function() {
              for (var t = 0; t < g.length; t++) g[t].el.attr('position', l.shape.__points[g[t].ptIdx]);
            });
        },
        remove: function(t) {
          var e = this.group,
            n = this._data;
          this._lineGroup.removeAll(),
            this._symbolDraw.remove(!0),
            n &&
              n.eachItemGraphicEl(function(t, o) {
                t.__temp && (e.remove(t), n.setItemGraphicEl(o, null));
              }),
            (this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null);
        },
      });
      t.exports = b;
    },
    'IXuL': function(t, e, n) {
      n('Tghj');
      var o = n('MwEJ'),
        i = n('T4UG').extend({
          type: 'series.line',
          dependencies: ['grid', 'polar'],
          getInitialData: function(t, e) {
            return o(this.getSource(), this);
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'cartesian2d',
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: { position: 'top' },
            lineStyle: { width: 2, type: 'solid' },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: 'emptyCircle',
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: 'auto',
            connectNulls: !1,
            sampling: 'none',
            animationEasing: 'linear',
            progressive: 0,
            hoverLayerThreshold: 1 / 0,
          },
        });
      t.exports = i;
    },
    'n4Lv': function(t, e, n) {
      var o = n('7hqr').isDimensionStacked,
        i = n('bYtY').map;
      (e.prepareDataCoordInfo = function(t, e, n) {
        var a,
          s = t.getBaseAxis(),
          r = t.getOtherAxis(s),
          l = (function(t, e) {
            var n = 0,
              o = t.scale.getExtent();
            return (
              'start' === e ? (n = o[0]) : 'end' === e ? (n = o[1]) : o[0] > 0 ? (n = o[0]) : o[1] < 0 && (n = o[1]), n
            );
          })(r, n),
          u = s.dim,
          h = r.dim,
          c = e.mapDimension(h),
          p = e.mapDimension(u),
          d = 'x' === h || 'radius' === h ? 1 : 0,
          f = i(t.dimensions, function(t) {
            return e.mapDimension(t);
          }),
          m = e.getCalculationInfo('stackResultDimension');
        return (
          (a |= o(e, f[0])) && (f[0] = m),
          (a |= o(e, f[1])) && (f[1] = m),
          {
            dataDimsForPoint: f,
            valueStart: l,
            valueAxisDim: h,
            baseAxisDim: u,
            stacked: !!a,
            valueDim: c,
            baseDim: p,
            baseDataOffset: d,
            stackedOverDimension: e.getCalculationInfo('stackedOverDimension'),
          }
        );
      }),
        (e.getStackedOnPoint = function(t, e, n, o) {
          var i = NaN;
          t.stacked && (i = n.get(n.getCalculationInfo('stackedOverDimension'), o)), isNaN(i) && (i = t.valueStart);
          var a = t.baseDataOffset,
            s = [];
          return (s[a] = n.get(t.baseDim, o)), (s[1 - a] = i), e.dataToPoint(s);
        });
    },
  },
]);
