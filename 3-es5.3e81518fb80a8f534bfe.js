(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '7AJT': function(t, e, i) {
      var o = i('bYtY'),
        n = i('hM6l'),
        a = function(t, e, i, o, a) {
          n.call(this, t, e, i), (this.type = o || 'value'), (this.position = a || 'bottom');
        };
      (a.prototype = {
        constructor: a,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function() {
          var t = this.position;
          return 'top' === t || 'bottom' === t;
        },
        getGlobalExtent: function(t) {
          var e = this.getExtent();
          return (
            (e[0] = this.toGlobalCoord(e[0])), (e[1] = this.toGlobalCoord(e[1])), t && e[0] > e[1] && e.reverse(), e
          );
        },
        getOtherAxis: function() {
          this.grid.getOtherAxis();
        },
        pointToData: function(t, e) {
          return this.coordToData(this.toLocalCoord(t['x' === this.dim ? 0 : 1]), e);
        },
        toLocalCoord: null,
        toGlobalCoord: null,
      }),
        o.inherits(a, n),
        (t.exports = a);
    },
    '8nMs': function(t, e, i) {
      var o = i('bYtY'),
        n = i('IwbS'),
        a = i('+rIm'),
        s = i('Znkb'),
        r = i('AVZG'),
        l = ['axisLine', 'axisTickLabel', 'axisName'],
        c = ['splitArea', 'splitLine'],
        u = s.extend({
          type: 'cartesianAxis',
          axisPointerClass: 'CartesianAxisPointer',
          render: function(t, e, i, s) {
            this.group.removeAll();
            var h = this._axisGroup;
            if (((this._axisGroup = new n.Group()), this.group.add(this._axisGroup), t.get('show'))) {
              var d = t.getCoordSysModel(),
                p = r.layout(d, t),
                g = new a(t, p);
              o.each(l, g.add, g),
                this._axisGroup.add(g.getGroup()),
                o.each(
                  c,
                  function(e) {
                    t.get(e + '.show') && this['_' + e](t, d);
                  },
                  this,
                ),
                n.groupTransition(h, this._axisGroup, t),
                u.superCall(this, 'render', t, e, i, s);
            }
          },
          remove: function() {
            this._splitAreaColors = null;
          },
          _splitLine: function(t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
              var a = t.getModel('splitLine'),
                s = a.getModel('lineStyle'),
                r = s.get('color');
              r = o.isArray(r) ? r : [r];
              for (
                var l = e.coordinateSystem.getRect(),
                  c = i.isHorizontal(),
                  u = 0,
                  h = i.getTicksCoords({ tickModel: a }),
                  d = [],
                  p = [],
                  g = s.getLineStyle(),
                  f = 0;
                f < h.length;
                f++
              ) {
                var m = i.toGlobalCoord(h[f].coord);
                c
                  ? ((d[0] = m), (d[1] = l.y), (p[0] = m), (p[1] = l.y + l.height))
                  : ((d[0] = l.x), (d[1] = m), (p[0] = l.x + l.width), (p[1] = m));
                var x = u++ % r.length;
                this._axisGroup.add(
                  new n.Line(
                    n.subPixelOptimizeLine({
                      anid: null != h[f].tickValue ? 'line_' + h[f].tickValue : null,
                      shape: { x1: d[0], y1: d[1], x2: p[0], y2: p[1] },
                      style: o.defaults({ stroke: r[x] }, g),
                      silent: !0,
                    }),
                  ),
                );
              }
            }
          },
          _splitArea: function(t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
              var a = t.getModel('splitArea'),
                s = a.getModel('areaStyle'),
                r = s.get('color'),
                l = e.coordinateSystem.getRect(),
                c = i.getTicksCoords({ tickModel: a, clamp: !0 });
              if (c.length) {
                var u = r.length,
                  h = this._splitAreaColors,
                  d = o.createHashMap(),
                  p = 0;
                if (h)
                  for (var g = 0; g < c.length; g++) {
                    var f = h.get(c[g].tickValue);
                    if (null != f) {
                      p = (f + (u - 1) * g) % u;
                      break;
                    }
                  }
                var m = i.toGlobalCoord(c[0].coord),
                  x = s.getAreaStyle();
                for (r = o.isArray(r) ? r : [r], g = 1; g < c.length; g++) {
                  var y,
                    v,
                    b,
                    A,
                    S = i.toGlobalCoord(c[g].coord);
                  i.isHorizontal()
                    ? ((v = l.y), (A = l.height), (m = (y = m) + (b = S - y)))
                    : ((y = l.x), (b = l.width), (m = (v = m) + (A = S - v)));
                  var _ = c[g - 1].tickValue;
                  null != _ && d.set(_, p),
                    this._axisGroup.add(
                      new n.Rect({
                        anid: null != _ ? 'area_' + _ : null,
                        shape: { x: y, y: v, width: b, height: A },
                        style: o.defaults({ fill: r[p] }, x),
                        silent: !0,
                      }),
                    ),
                    (p = (p + 1) % u);
                }
                this._splitAreaColors = d;
              }
            }
          },
        });
      u.extend({ type: 'xAxis' }), u.extend({ type: 'yAxis' });
    },
    '9wZj': function(t, e, i) {
      var o = i('IwbS'),
        n = i('FBjb'),
        a = i('bYtY').isObject;
      function s(t) {
        (this.group = new o.Group()), (this._symbolCtor = t || n);
      }
      var r = s.prototype;
      function l(t, e, i, o) {
        return (
          e &&
          !isNaN(e[0]) &&
          !isNaN(e[1]) &&
          !(o.isIgnore && o.isIgnore(i)) &&
          !(o.clipShape && !o.clipShape.contain(e[0], e[1])) &&
          'none' !== t.getItemVisual(i, 'symbol')
        );
      }
      function c(t) {
        return null == t || a(t) || (t = { isIgnore: t }), t || {};
      }
      function u(t) {
        var e = t.hostModel;
        return {
          itemStyle: e.getModel('itemStyle').getItemStyle(['color']),
          hoverItemStyle: e.getModel('emphasis.itemStyle').getItemStyle(),
          symbolRotate: e.get('symbolRotate'),
          symbolOffset: e.get('symbolOffset'),
          hoverAnimation: e.get('hoverAnimation'),
          labelModel: e.getModel('label'),
          hoverLabelModel: e.getModel('emphasis.label'),
          cursorStyle: e.get('cursor'),
        };
      }
      (r.updateData = function(t, e) {
        e = c(e);
        var i = this.group,
          n = t.hostModel,
          a = this._data,
          s = this._symbolCtor,
          r = u(t);
        a || i.removeAll(),
          t
            .diff(a)
            .add(function(o) {
              var n = t.getItemLayout(o);
              if (l(t, n, o, e)) {
                var a = new s(t, o, r);
                a.attr('position', n), t.setItemGraphicEl(o, a), i.add(a);
              }
            })
            .update(function(c, u) {
              var h = a.getItemGraphicEl(u),
                d = t.getItemLayout(c);
              l(t, d, c, e)
                ? (h
                    ? (h.updateData(t, c, r), o.updateProps(h, { position: d }, n))
                    : (h = new s(t, c)).attr('position', d),
                  i.add(h),
                  t.setItemGraphicEl(c, h))
                : i.remove(h);
            })
            .remove(function(t) {
              var e = a.getItemGraphicEl(t);
              e &&
                e.fadeOut(function() {
                  i.remove(e);
                });
            })
            .execute(),
          (this._data = t);
      }),
        (r.isPersistent = function() {
          return !0;
        }),
        (r.updateLayout = function() {
          var t = this._data;
          t &&
            t.eachItemGraphicEl(function(e, i) {
              var o = t.getItemLayout(i);
              e.attr('position', o);
            });
        }),
        (r.incrementalPrepareUpdate = function(t) {
          (this._seriesScope = u(t)), (this._data = null), this.group.removeAll();
        }),
        (r.incrementalUpdate = function(t, e, i) {
          function o(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0);
          }
          i = c(i);
          for (var n = t.start; n < t.end; n++) {
            var a = e.getItemLayout(n);
            if (l(e, a, n, i)) {
              var s = new this._symbolCtor(e, n, this._seriesScope);
              s.traverse(o), s.attr('position', a), this.group.add(s), e.setItemGraphicEl(n, s);
            }
          }
        }),
        (r.remove = function(t) {
          var e = this.group,
            i = this._data;
          i && t
            ? i.eachItemGraphicEl(function(t) {
                t.fadeOut(function() {
                  e.remove(t);
                });
              })
            : e.removeAll();
        }),
        (t.exports = s);
    },
    'Ae16': function(t, e, i) {
      var o = i('ProS'),
        n = i('bYtY'),
        a = i('IwbS');
      i('Wqna'),
        i('rySg'),
        o.extendComponentView({
          type: 'grid',
          render: function(t, e) {
            this.group.removeAll(),
              t.get('show') &&
                this.group.add(
                  new a.Rect({
                    shape: t.coordinateSystem.getRect(),
                    style: n.defaults({ fill: t.get('backgroundColor') }, t.getItemStyle()),
                    silent: !0,
                    z2: -1,
                  }),
                );
          },
        }),
        o.registerPreprocessor(function(t) {
          t.xAxis && t.yAxis && !t.grid && (t.grid = {});
        });
    },
    'FBjb': function(t, e, i) {
      var o = i('bYtY'),
        n = i('oVpE').createSymbol,
        a = i('IwbS'),
        s = i('OELB').parsePercent,
        r = i('x3X8').getDefaultLabel;
      function l(t, e, i) {
        a.Group.call(this), this.updateData(t, e, i);
      }
      var c = l.prototype,
        u = (l.getSymbolSize = function(t, e) {
          var i = t.getItemVisual(e, 'symbolSize');
          return i instanceof Array ? i.slice() : [+i, +i];
        });
      function h(t) {
        return [t[0] / 2, t[1] / 2];
      }
      function d(t, e) {
        this.parent.drift(t, e);
      }
      (c._createSymbol = function(t, e, i, o, a) {
        this.removeAll();
        var s = e.getItemVisual(i, 'color'),
          r = n(t, -1, -1, 2, 2, s, a);
        r.attr({ z2: 100, culling: !0, scale: h(o) }), (r.drift = d), (this._symbolType = t), this.add(r);
      }),
        (c.stopSymbolAnimation = function(t) {
          this.childAt(0).stopAnimation(t);
        }),
        (c.getSymbolPath = function() {
          return this.childAt(0);
        }),
        (c.getScale = function() {
          return this.childAt(0).scale;
        }),
        (c.highlight = function() {
          this.childAt(0).trigger('emphasis');
        }),
        (c.downplay = function() {
          this.childAt(0).trigger('normal');
        }),
        (c.setZ = function(t, e) {
          var i = this.childAt(0);
          (i.zlevel = t), (i.z = e);
        }),
        (c.setDraggable = function(t) {
          var e = this.childAt(0);
          (e.draggable = t), (e.cursor = t ? 'move' : 'pointer');
        }),
        (c.updateData = function(t, e, i) {
          this.silent = !1;
          var o = t.getItemVisual(e, 'symbol') || 'circle',
            n = t.hostModel,
            s = u(t, e),
            r = o !== this._symbolType;
          if (r) {
            var l = t.getItemVisual(e, 'symbolKeepAspect');
            this._createSymbol(o, t, e, s, l);
          } else ((c = this.childAt(0)).silent = !1), a.updateProps(c, { scale: h(s) }, n, e);
          if ((this._updateCommon(t, e, s, i), r)) {
            var c = this.childAt(0),
              d = i && i.fadeIn,
              p = { scale: c.scale.slice() };
            d && (p.style = { opacity: c.style.opacity }),
              (c.scale = [0, 0]),
              d && (c.style.opacity = 0),
              a.initProps(c, p, n, e);
          }
          this._seriesModel = n;
        });
      var p = ['itemStyle'],
        g = ['emphasis', 'itemStyle'],
        f = ['label'],
        m = ['emphasis', 'label'];
      function x() {
        !a.isInEmphasis(this) && v.call(this);
      }
      function y() {
        !a.isInEmphasis(this) && b.call(this);
      }
      function v() {
        if (!this.incremental && !this.useHoverLayer) {
          var t = this.__symbolOriginalScale,
            e = t[1] / t[0];
          this.animateTo(
            { scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)] },
            400,
            'elasticOut',
          );
        }
      }
      function b() {
        this.incremental ||
          this.useHoverLayer ||
          this.animateTo({ scale: this.__symbolOriginalScale }, 400, 'elasticOut');
      }
      (c._updateCommon = function(t, e, i, n) {
        var l = this.childAt(0),
          c = t.hostModel,
          u = t.getItemVisual(e, 'color');
        'image' !== l.type && l.useStyle({ strokeNoScale: !0 });
        var d = n && n.itemStyle,
          A = n && n.hoverItemStyle,
          S = n && n.symbolRotate,
          _ = n && n.symbolOffset,
          C = n && n.labelModel,
          M = n && n.hoverLabelModel,
          L = n && n.hoverAnimation,
          I = n && n.cursorStyle;
        if (!n || t.hasItemOption) {
          var w = n && n.itemModel ? n.itemModel : t.getItemModel(e);
          (d = w.getModel(p).getItemStyle(['color'])),
            (A = w.getModel(g).getItemStyle()),
            (S = w.getShallow('symbolRotate')),
            (_ = w.getShallow('symbolOffset')),
            (C = w.getModel(f)),
            (M = w.getModel(m)),
            (L = w.getShallow('hoverAnimation')),
            (I = w.getShallow('cursor'));
        } else A = o.extend({}, A);
        var T = l.style;
        l.attr('rotation', ((S || 0) * Math.PI) / 180 || 0),
          _ && l.attr('position', [s(_[0], i[0]), s(_[1], i[1])]),
          I && l.attr('cursor', I),
          l.setColor(u, n && n.symbolInnerColor),
          l.setStyle(d);
        var O = t.getItemVisual(e, 'opacity');
        null != O && (T.opacity = O);
        var D = t.getItemVisual(e, 'liftZ'),
          z = l.__z2Origin;
        null != D
          ? null == z && ((l.__z2Origin = l.z2), (l.z2 += D))
          : null != z && ((l.z2 = z), (l.__z2Origin = null));
        var G = n && n.useNameLabel;
        a.setLabelStyle(T, A, C, M, {
          labelFetcher: c,
          labelDataIndex: e,
          defaultText: function(e, i) {
            return G ? t.getName(e) : r(t, e);
          },
          isRectText: !0,
          autoColor: u,
        }),
          l
            .off('mouseover')
            .off('mouseout')
            .off('emphasis')
            .off('normal'),
          (l.hoverStyle = A),
          a.setHoverStyle(l),
          (l.__symbolOriginalScale = h(i)),
          L &&
            c.isAnimationEnabled() &&
            l
              .on('mouseover', x)
              .on('mouseout', y)
              .on('emphasis', v)
              .on('normal', b);
      }),
        (c.fadeOut = function(t, e) {
          var i = this.childAt(0);
          (this.silent = i.silent = !0),
            (!e || !e.keepLabel) && (i.style.text = null),
            a.updateProps(i, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);
        }),
        o.inherits(l, a.Group),
        (t.exports = l);
    },
    'SMc4': function(t, e, i) {
      var o = i('bYtY'),
        n = i('bLfw'),
        a = i('nkfE'),
        s = i('ICMv'),
        r = n.extend({
          type: 'cartesian2dAxis',
          axis: null,
          init: function() {
            r.superApply(this, 'init', arguments), this.resetRange();
          },
          mergeOption: function() {
            r.superApply(this, 'mergeOption', arguments), this.resetRange();
          },
          restoreData: function() {
            r.superApply(this, 'restoreData', arguments), this.resetRange();
          },
          getCoordSysModel: function() {
            return this.ecModel.queryComponents({
              mainType: 'grid',
              index: this.option.gridIndex,
              id: this.option.gridId,
            })[0];
          },
        });
      function l(t, e) {
        return e.type || (e.data ? 'category' : 'value');
      }
      o.merge(r.prototype, s);
      var c = { offset: 0 };
      a('x', r, l, c), a('y', r, l, c), (t.exports = r);
    },
    'Wqna': function(t, e, i) {
      i('Tghj');
      var o = i('bYtY'),
        n = o.isObject,
        a = o.each,
        s = o.map,
        r = o.indexOf,
        l = i('+TT/').getLayoutRect,
        c = i('aX7z'),
        u = c.createScaleByModel,
        h = c.ifAxisCrossZero,
        d = c.niceScaleExtent,
        p = c.estimateLabelUnionRect,
        g = i('y+lR'),
        f = i('7AJT'),
        m = i('IDmD'),
        x = i('7hqr').getStackedDimension;
      function y(t, e, i) {
        return t.getCoordSysModel() === e;
      }
      function v(t, e, i) {
        (this._coordsMap = {}),
          (this._coordsList = []),
          (this._axesMap = {}),
          (this._axesList = []),
          this._initCartesian(t, e, i),
          (this.model = t);
      }
      i('jtI2');
      var b = v.prototype;
      function A(t, e, i, o) {
        i.getAxesOnZeroOf = function() {
          return n ? [n] : [];
        };
        var n,
          a = t[e],
          s = i.model,
          r = s.get('axisLine.onZero'),
          l = s.get('axisLine.onZeroAxisIndex');
        if (r) {
          if (null != l) S(a[l]) && (n = a[l]);
          else
            for (var c in a)
              if (a.hasOwnProperty(c) && S(a[c]) && !o[u(a[c])]) {
                n = a[c];
                break;
              }
          n && (o[u(n)] = !0);
        }
        function u(t) {
          return t.dim + '_' + t.index;
        }
      }
      function S(t) {
        return t && 'category' !== t.type && 'time' !== t.type && h(t);
      }
      (b.type = 'grid'),
        (b.axisPointerEnabled = !0),
        (b.getRect = function() {
          return this._rect;
        }),
        (b.update = function(t, e) {
          var i = this._axesMap;
          this._updateScale(t, this.model),
            a(i.x, function(t) {
              d(t.scale, t.model);
            }),
            a(i.y, function(t) {
              d(t.scale, t.model);
            });
          var o = {};
          a(i.x, function(t) {
            A(i, 'y', t, o);
          }),
            a(i.y, function(t) {
              A(i, 'x', t, o);
            }),
            this.resize(this.model, e);
        }),
        (b.resize = function(t, e, i) {
          var o = l(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
          this._rect = o;
          var n = this._axesList;
          function s() {
            a(n, function(t) {
              var e = t.isHorizontal(),
                i = e ? [0, o.width] : [0, o.height],
                n = t.inverse ? 1 : 0;
              t.setExtent(i[n], i[1 - n]),
                (function(t, e) {
                  var i = t.getExtent(),
                    o = i[0] + i[1];
                  (t.toGlobalCoord =
                    'x' === t.dim
                      ? function(t) {
                          return t + e;
                        }
                      : function(t) {
                          return o - t + e;
                        }),
                    (t.toLocalCoord =
                      'x' === t.dim
                        ? function(t) {
                            return t - e;
                          }
                        : function(t) {
                            return o - t + e;
                          });
                })(t, e ? o.x : o.y);
            });
          }
          s(),
            !i &&
              t.get('containLabel') &&
              (a(n, function(t) {
                if (!t.model.get('axisLabel.inside')) {
                  var e = p(t);
                  if (e) {
                    var i = t.isHorizontal() ? 'height' : 'width',
                      n = t.model.get('axisLabel.margin');
                    (o[i] -= e[i] + n),
                      'top' === t.position ? (o.y += e.height + n) : 'left' === t.position && (o.x += e.width + n);
                  }
                }
              }),
              s());
        }),
        (b.getAxis = function(t, e) {
          var i = this._axesMap[t];
          if (null != i) {
            if (null == e) for (var o in i) if (i.hasOwnProperty(o)) return i[o];
            return i[e];
          }
        }),
        (b.getAxes = function() {
          return this._axesList.slice();
        }),
        (b.getCartesian = function(t, e) {
          if (null != t && null != e) return this._coordsMap['x' + t + 'y' + e];
          n(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
          for (var i = 0, o = this._coordsList; i < o.length; i++)
            if (o[i].getAxis('x').index === t || o[i].getAxis('y').index === e) return o[i];
        }),
        (b.getCartesians = function() {
          return this._coordsList.slice();
        }),
        (b.convertToPixel = function(t, e, i) {
          var o = this._findConvertTarget(t, e);
          return o.cartesian ? o.cartesian.dataToPoint(i) : o.axis ? o.axis.toGlobalCoord(o.axis.dataToCoord(i)) : null;
        }),
        (b.convertFromPixel = function(t, e, i) {
          var o = this._findConvertTarget(t, e);
          return o.cartesian ? o.cartesian.pointToData(i) : o.axis ? o.axis.coordToData(o.axis.toLocalCoord(i)) : null;
        }),
        (b._findConvertTarget = function(t, e) {
          var i,
            o,
            n = e.seriesModel,
            a = e.xAxisModel || (n && n.getReferringComponents('xAxis')[0]),
            s = e.yAxisModel || (n && n.getReferringComponents('yAxis')[0]),
            l = e.gridModel;
          return (
            n
              ? r(this._coordsList, (i = n.coordinateSystem)) < 0 && (i = null)
              : a && s
              ? (i = this.getCartesian(a.componentIndex, s.componentIndex))
              : a
              ? (o = this.getAxis('x', a.componentIndex))
              : s
              ? (o = this.getAxis('y', s.componentIndex))
              : l && l.coordinateSystem === this && (i = this._coordsList[0]),
            { cartesian: i, axis: o }
          );
        }),
        (b.containPoint = function(t) {
          var e = this._coordsList[0];
          if (e) return e.containPoint(t);
        }),
        (b._initCartesian = function(t, e, i) {
          var o = { left: !1, right: !1, top: !1, bottom: !1 },
            n = { x: {}, y: {} },
            s = { x: 0, y: 0 };
          if ((e.eachComponent('xAxis', r('x'), this), e.eachComponent('yAxis', r('y'), this), !s.x || !s.y))
            return (this._axesMap = {}), void (this._axesList = []);
          function r(e) {
            return function(i, a) {
              if (y(i, t)) {
                var r = i.get('position');
                'x' === e
                  ? 'top' !== r && 'bottom' !== r && o[(r = 'bottom')] && (r = 'top' === r ? 'bottom' : 'top')
                  : 'left' !== r && 'right' !== r && o[(r = 'left')] && (r = 'left' === r ? 'right' : 'left'),
                  (o[r] = !0);
                var l = new f(e, u(i), [0, 0], i.get('type'), r);
                (l.onBand = 'category' === l.type && i.get('boundaryGap')),
                  (l.inverse = i.get('inverse')),
                  (i.axis = l),
                  (l.model = i),
                  (l.grid = this),
                  (l.index = a),
                  this._axesList.push(l),
                  (n[e][a] = l),
                  s[e]++;
              }
            };
          }
          (this._axesMap = n),
            a(
              n.x,
              function(e, i) {
                a(
                  n.y,
                  function(o, n) {
                    var a = 'x' + i + 'y' + n,
                      s = new g(a);
                    (s.grid = this),
                      (s.model = t),
                      (this._coordsMap[a] = s),
                      this._coordsList.push(s),
                      s.addAxis(e),
                      s.addAxis(o);
                  },
                  this,
                );
              },
              this,
            );
        }),
        (b._updateScale = function(t, e) {
          function i(t, e, i) {
            a(t.mapDimension(e.dim, !0), function(i) {
              e.scale.unionExtentFromData(t, x(t, i));
            });
          }
          a(this._axesList, function(t) {
            t.scale.setExtent(1 / 0, -1 / 0);
          }),
            t.eachSeries(function(t) {
              if (M(t)) {
                var o = C(t),
                  n = o[0],
                  a = o[1];
                if (!y(n, e) || !y(a, e)) return;
                var s = this.getCartesian(n.componentIndex, a.componentIndex),
                  r = t.getData(),
                  l = s.getAxis('x'),
                  c = s.getAxis('y');
                'list' === r.type && (i(r, l), i(r, c));
              }
            }, this);
        }),
        (b.getTooltipAxes = function(t) {
          var e = [],
            i = [];
          return (
            a(this.getCartesians(), function(o) {
              var n = null != t && 'auto' !== t ? o.getAxis(t) : o.getBaseAxis(),
                a = o.getOtherAxis(n);
              r(e, n) < 0 && e.push(n), r(i, a) < 0 && i.push(a);
            }),
            { baseAxes: e, otherAxes: i }
          );
        });
      var _ = ['xAxis', 'yAxis'];
      function C(t, e) {
        return s(_, function(e) {
          return t.getReferringComponents(e)[0];
        });
      }
      function M(t) {
        return 'cartesian2d' === t.get('coordinateSystem');
      }
      (v.create = function(t, e) {
        var i = [];
        return (
          t.eachComponent('grid', function(o, n) {
            var a = new v(o, t, e);
            (a.name = 'grid_' + n), a.resize(o, e, !0), (o.coordinateSystem = a), i.push(a);
          }),
          t.eachSeries(function(t) {
            if (M(t)) {
              var e = C(t),
                i = e[0],
                o = e[1],
                n = i.getCoordSysModel();
              t.coordinateSystem = n.coordinateSystem.getCartesian(i.componentIndex, o.componentIndex);
            }
          }),
          i
        );
      }),
        (v.dimensions = v.prototype.dimensions = g.prototype.dimensions),
        m.register('cartesian2d', v),
        (t.exports = v);
    },
    'ca2m': function(t, e, i) {
      var o = i('bYtY'),
        n = {
          show: !0,
          zlevel: 0,
          z: 0,
          inverse: !1,
          name: '',
          nameLocation: 'end',
          nameRotate: null,
          nameTruncate: { maxWidth: null, ellipsis: '...', placeholder: '.' },
          nameTextStyle: {},
          nameGap: 15,
          silent: !1,
          triggerEvent: !1,
          tooltip: { show: !1 },
          axisPointer: {},
          axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: { color: '#333', width: 1, type: 'solid' },
            symbol: ['none', 'none'],
            symbolSize: [10, 15],
          },
          axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
          axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12,
          },
          splitLine: { show: !0, lineStyle: { color: ['#ccc'], width: 1, type: 'solid' } },
          splitArea: { show: !1, areaStyle: { color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'] } },
        },
        a = {};
      (a.categoryAxis = o.merge(
        {
          boundaryGap: !0,
          deduplication: null,
          splitLine: { show: !1 },
          axisTick: { alignWithLabel: !1, interval: 'auto' },
          axisLabel: { interval: 'auto' },
        },
        n,
      )),
        (a.valueAxis = o.merge({ boundaryGap: [0, 0], splitNumber: 5 }, n)),
        (a.timeAxis = o.defaults({ scale: !0, min: 'dataMin', max: 'dataMax' }, a.valueAxis)),
        (a.logAxis = o.defaults({ scale: !0, logBase: 10 }, a.valueAxis)),
        (t.exports = a);
    },
    'f5Yq': function(t, e) {
      t.exports = function(t, e, i) {
        return {
          seriesType: t,
          performRawSeries: !0,
          reset: function(t, o, n) {
            var a = t.getData(),
              s = t.get('symbol') || e,
              r = t.get('symbolSize'),
              l = t.get('symbolKeepAspect');
            if (
              (a.setVisual({ legendSymbol: i || s, symbol: s, symbolSize: r, symbolKeepAspect: l }),
              !o.isSeriesFiltered(t))
            )
              return {
                dataEach:
                  a.hasItemOption || 'function' == typeof r
                    ? function(e, i) {
                        if ('function' == typeof r) {
                          var o = t.getRawValue(i),
                            n = t.getDataParams(i);
                          e.setItemVisual(i, 'symbolSize', r(o, n));
                        }
                        if (e.hasItemOption) {
                          var a = e.getItemModel(i),
                            s = a.getShallow('symbol', !0),
                            l = a.getShallow('symbolSize', !0),
                            c = a.getShallow('symbolKeepAspect', !0);
                          null != s && e.setItemVisual(i, 'symbol', s),
                            null != l && e.setItemVisual(i, 'symbolSize', l),
                            null != c && e.setItemVisual(i, 'symbolKeepAspect', c);
                        }
                      }
                    : null,
              };
          },
        };
      };
    },
    'h8O9': function(t, e, i) {
      var o = i('bYtY').map,
        n = i('zM3Q'),
        a = i('7hqr').isDimensionStacked;
      t.exports = function(t) {
        return {
          seriesType: t,
          plan: n(),
          reset: function(t) {
            var e = t.getData(),
              i = t.coordinateSystem,
              n = t.pipelineContext.large;
            if (i) {
              var s = o(i.dimensions, function(t) {
                  return e.mapDimension(t);
                }).slice(0, 2),
                r = s.length,
                l = e.getCalculationInfo('stackResultDimension');
              return (
                a(e, s[0]) && (s[0] = l),
                a(e, s[1]) && (s[1] = l),
                r && {
                  progress: function(t, e) {
                    for (
                      var o = n && new Float32Array((t.end - t.start) * r), a = t.start, l = 0, c = [], u = [];
                      a < t.end;
                      a++
                    ) {
                      var h;
                      if (1 === r) {
                        var d = e.get(s[0], a);
                        h = !isNaN(d) && i.dataToPoint(d, null, u);
                      } else {
                        d = c[0] = e.get(s[0], a);
                        var p = (c[1] = e.get(s[1], a));
                        h = !isNaN(d) && !isNaN(p) && i.dataToPoint(c, null, u);
                      }
                      n
                        ? ((o[l++] = h ? h[0] : NaN), (o[l++] = h ? h[1] : NaN))
                        : e.setItemLayout(a, (h && h.slice()) || [NaN, NaN]);
                    }
                    n && e.setLayout('symbolPoints', o);
                  },
                }
              );
            }
          },
        };
      };
    },
    'jtI2': function(t, e, i) {
      i('SMc4');
      var o = i('bLfw').extend({
        type: 'grid',
        dependencies: ['xAxis', 'yAxis'],
        layoutMode: 'box',
        coordinateSystem: null,
        defaultOption: {
          show: !1,
          zlevel: 0,
          z: 0,
          left: '10%',
          top: 60,
          right: '10%',
          bottom: 60,
          containLabel: !1,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 1,
          borderColor: '#ccc',
        },
      });
      t.exports = o;
    },
    'nkfE': function(t, e, i) {
      var o = i('bYtY'),
        n = i('ca2m'),
        a = i('bLfw'),
        s = i('+TT/'),
        r = s.getLayoutParams,
        l = s.mergeLayoutParam,
        c = i('jkPA'),
        u = ['value', 'category', 'time', 'log'];
      t.exports = function(t, e, i, s) {
        o.each(u, function(a) {
          e.extend({
            type: t + 'Axis.' + a,
            mergeDefaultAndTheme: function(e, n) {
              var s = this.layoutMode,
                c = s ? r(e) : {},
                u = n.getTheme();
              o.merge(e, u.get(a + 'Axis')), o.merge(e, this.getDefaultOption()), (e.type = i(t, e)), s && l(e, c, s);
            },
            optionUpdated: function() {
              'category' === this.option.type && (this.__ordinalMeta = c.createByAxisModel(this));
            },
            getCategories: function(t) {
              var e = this.option;
              if ('category' === e.type) return t ? e.data : this.__ordinalMeta.categories;
            },
            getOrdinalMeta: function() {
              return this.__ordinalMeta;
            },
            defaultOption: o.mergeAll([{}, n[a + 'Axis'], s], !0),
          });
        }),
          a.registerSubTypeDefaulter(t + 'Axis', o.curry(i, t));
      };
    },
    'rySg': function(t, e, i) {
      i('SMc4'), i('8nMs');
    },
    'x3X8': function(t, e, i) {
      var o = i('KxfA').retrieveRawValue;
      e.getDefaultLabel = function(t, e) {
        var i = t.mapDimension('defaultedLabel', !0),
          n = i.length;
        if (1 === n) return o(t, e, i[0]);
        if (n) {
          for (var a = [], s = 0; s < i.length; s++) {
            var r = o(t, e, i[s]);
            a.push(r);
          }
          return a.join(' ');
        }
      };
    },
    'y+lR': function(t, e, i) {
      var o = i('bYtY'),
        n = i('z35g');
      function a(t) {
        n.call(this, t);
      }
      (a.prototype = {
        constructor: a,
        type: 'cartesian2d',
        dimensions: ['x', 'y'],
        getBaseAxis: function() {
          return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x');
        },
        containPoint: function(t) {
          var e = this.getAxis('x'),
            i = this.getAxis('y');
          return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]));
        },
        containData: function(t) {
          return this.getAxis('x').containData(t[0]) && this.getAxis('y').containData(t[1]);
        },
        dataToPoint: function(t, e, i) {
          var o = this.getAxis('x'),
            n = this.getAxis('y');
          return (
            ((i = i || [])[0] = o.toGlobalCoord(o.dataToCoord(t[0]))), (i[1] = n.toGlobalCoord(n.dataToCoord(t[1]))), i
          );
        },
        clampData: function(t, e) {
          var i = this.getAxis('x').scale,
            o = this.getAxis('y').scale,
            n = i.getExtent(),
            a = o.getExtent(),
            s = i.parse(t[0]),
            r = o.parse(t[1]);
          return (
            ((e = e || [])[0] = Math.min(Math.max(Math.min(n[0], n[1]), s), Math.max(n[0], n[1]))),
            (e[1] = Math.min(Math.max(Math.min(a[0], a[1]), r), Math.max(a[0], a[1]))),
            e
          );
        },
        pointToData: function(t, e) {
          var i = this.getAxis('x'),
            o = this.getAxis('y');
          return (
            ((e = e || [])[0] = i.coordToData(i.toLocalCoord(t[0]))), (e[1] = o.coordToData(o.toLocalCoord(t[1]))), e
          );
        },
        getOtherAxis: function(t) {
          return this.getAxis('x' === t.dim ? 'y' : 'x');
        },
      }),
        o.inherits(a, n),
        (t.exports = a);
    },
    'z35g': function(t, e, i) {
      var o = i('bYtY');
      function n(t) {
        return this._axes[t];
      }
      var a = function(t) {
        (this._axes = {}), (this._dimList = []), (this.name = t || '');
      };
      (a.prototype = {
        constructor: a,
        type: 'cartesian',
        getAxis: function(t) {
          return this._axes[t];
        },
        getAxes: function() {
          return o.map(this._dimList, n, this);
        },
        getAxesByScale: function(t) {
          return (
            (t = t.toLowerCase()),
            o.filter(this.getAxes(), function(e) {
              return e.scale.type === t;
            })
          );
        },
        addAxis: function(t) {
          var e = t.dim;
          (this._axes[e] = t), this._dimList.push(e);
        },
        dataToCoord: function(t) {
          return this._dataCoordConvert(t, 'dataToCoord');
        },
        coordToData: function(t) {
          return this._dataCoordConvert(t, 'coordToData');
        },
        _dataCoordConvert: function(t, e) {
          for (var i = this._dimList, o = t instanceof Array ? [] : {}, n = 0; n < i.length; n++) {
            var a = i[n];
            o[a] = this._axes[a][e](t[a]);
          }
          return o;
        },
      }),
        (t.exports = a);
    },
  },
]);
