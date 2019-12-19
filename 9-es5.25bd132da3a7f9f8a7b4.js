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
function _defineProperties(t, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function _createClass(t, e, i) {
  return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '56rv': function(t, e, i) {
      var n = i('IwbS'),
        o = i('x3X8').getDefaultLabel;
      function a(t, e) {
        'outside' === t.textPosition && (t.textPosition = e);
      }
      e.setLabel = function(t, e, i, r, s, l, h) {
        var c = i.getModel('label'),
          u = i.getModel('emphasis.label');
        n.setLabelStyle(t, e, c, u, {
          labelFetcher: s,
          labelDataIndex: l,
          defaultText: o(s.getData(), l),
          isRectText: !0,
          autoColor: r,
        }),
          a(t),
          a(e);
      };
    },
    'BGHn': function(t, e, i) {
      'use strict';
      i.d(e, 'b', function() {
        return l;
      }),
        i.d(e, 'a', function() {
          return h;
        });
      var n = i('fXoL'),
        o = i('rDig'),
        a = i('ofXK'),
        r = ['toolboxContent'];
      function s(t, e) {}
      var l = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = n.Nb({ type: t, selectors: [['ng-template', 'tdViewDataFormatter', '']] })),
            t
          );
        })(),
        h = (function() {
          var t = (function() {
            function t(e, i, n) {
              _classCallCheck(this, t),
                (this._changeDetectorRef = e),
                (this._elementRef = i),
                (this._optionsService = n),
                (this._state = {}),
                (this.config = {}),
                (this.show = !0),
                (this.showTitle = !0),
                (this.transitionDuration = 0.5),
                (this.left = 'auto'),
                (this.top = 'auto'),
                (this.right = 'auto'),
                (this.bottom = 'auto'),
                (this.width = 'auto'),
                (this.height = 'auto');
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
                    this._checkFormatterTemplate();
                    var t = Object(o.d)(
                      this._state,
                      {
                        show: this.show,
                        name: this.trigger,
                        orient: this.orient,
                        itemSize: this.itemSize,
                        itemGap: this.itemGap,
                        showTitle: this.showTitle,
                        label: this.label,
                        feature: this.feature,
                        iconStyle: this.iconStyle,
                        zlevel: this.zlevel,
                        z: this.z,
                        transitionDuration: this.transitionDuration,
                        left: this.left,
                        top: this.top,
                        right: this.right,
                        bottom: this.bottom,
                        width: this.width,
                        height: this.height,
                      },
                      this.config ? this.config : {},
                    );
                    this._optionsService.setOption('toolbox', t);
                  },
                },
                {
                  key: '_removeOption',
                  value: function() {
                    this._optionsService.clearOption('toolbox');
                  },
                },
                {
                  key: '_checkFormatterTemplate',
                  value: function() {
                    this.formatterTemplate &&
                      (this.feature = Object.assign(Object.assign({}, this.feature), {
                        dataView: Object.assign(Object.assign({}, this.feature.dataView), {
                          optionToContent: this._optionToContentFormatter(),
                        }),
                      }));
                  },
                },
                {
                  key: '_optionToContentFormatter',
                  value: function() {
                    var t = this;
                    return function() {
                      return t._changeDetectorRef.markForCheck(), t._elementRef.nativeElement.innerHTML;
                    };
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(n.Sb(n.h), n.Sb(n.k), n.Sb(o.b));
            }),
            (t.ɵcmp = n.Mb({
              type: t,
              selectors: [['td-chart-toolbox']],
              contentQueries: function(t, e, i) {
                var o;
                1 & t && n.Kb(i, l, !0, n.M), 2 & t && n.Ec((o = n.hc())) && (e.formatterTemplate = o.first);
              },
              viewQuery: function(t, e) {
                var i;
                1 & t && n.Nc(r, !0), 2 & t && n.Ec((i = n.hc())) && (e.fullTemplate = i.first);
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                orient: 'orient',
                itemSize: 'itemSize',
                itemGap: 'itemGap',
                showTitle: 'showTitle',
                label: 'label',
                feature: 'feature',
                iconStyle: 'iconStyle',
                zlevel: 'zlevel',
                z: 'z',
                transitionDuration: 'transitionDuration',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                width: 'width',
                height: 'height',
              },
              features: [n.Bb()],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function(t, e) {
                1 & t && n.Rc(0, s, 0, 0, 'ng-template', 0, 1, n.Sc),
                  2 & t && n.qc('ngTemplateOutlet', e.formatterTemplate);
              },
              directives: [a.A],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'F7hV': function(t, e, i) {
      var n = i('MBQ8').extend({
        type: 'series.bar',
        dependencies: ['grid', 'polar'],
        brushSelector: 'rect',
        getProgressive: function() {
          return !!this.get('large') && this.get('progressive');
        },
        getProgressiveThreshold: function() {
          var t = this.get('progressiveThreshold'),
            e = this.get('largeThreshold');
          return e > t && (t = e), t;
        },
      });
      t.exports = n;
    },
    'H9+E': function(t, e, i) {
      'use strict';
      var n,
        o = i('ofXK'),
        a = (i('lLGD'), i('q5+X'), i('fXoL')),
        r =
          (((n = function t() {
            _classCallCheck(this, t);
          }).ɵmod = a.Qb({ type: n })),
          (n.ɵinj = a.Pb({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[o.c]],
          })),
          n);
      i.d(e, 'a', function() {
        return r;
      });
    },
    'MBQ8': function(t, e, i) {
      var n = i('T4UG'),
        o = i('MwEJ'),
        a = n.extend({
          type: 'series.__base_bar__',
          getInitialData: function(t, e) {
            return o(this.getSource(), this);
          },
          getMarkerPosition: function(t) {
            var e = this.coordinateSystem;
            if (e) {
              var i = e.dataToPoint(e.clampData(t)),
                n = this.getData(),
                o = n.getLayout('offset'),
                a = n.getLayout('size');
              return (i[e.getBaseAxis().isHorizontal() ? 0 : 1] += o + a / 2), i;
            }
            return [NaN, NaN];
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'cartesian2d',
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: 'mod',
            itemStyle: {},
            emphasis: {},
          },
        });
      t.exports = a;
    },
    'NEJn': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return r;
      });
      var n = i('fXoL'),
        o = i('rDig'),
        a = ['td-line', ''],
        r = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'line', t))
              );
            }
            return (
              _inherits(e, t),
              _createClass(e, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      coordinateSystem: this.coordinateSystem,
                      xAxisIndex: this.xAxisIndex,
                      yAxisIndex: this.yAxisIndex,
                      polarIndex: this.polarIndex,
                      symbol: this.symbol,
                      symbolSize: this.symbolSize,
                      symbolRotate: this.symbolRotate,
                      symbolKeepAspect: this.symbolKeepAspect,
                      symbolOffset: this.symbolOffset,
                      showSymbol: this.showSymbol,
                      showAllSymbol: this.showAllSymbol,
                      hoverAnimation: this.hoverAnimation,
                      legendHoverLink: this.legendHoverLink,
                      stack: this.stack,
                      cursor: this.cursor,
                      connectNulls: this.connectNulls,
                      clipOverflow: this.clipOverflow,
                      step: this.step,
                      label: this.label,
                      itemStyle: this.itemStyle,
                      lineStyle: this.lineStyle,
                      areaStyle: this.areaStyle,
                      emphasis: this.emphasis,
                      smooth: this.smooth,
                      smoothMonotone: this.smoothMonotone,
                      sampling: this.sampling,
                      dimensions: this.dimensions,
                      encode: this.encode,
                      seriesLayoutBy: this.seriesLayoutBy,
                      datasetIndex: this.datasetIndex,
                      markPoint: this.markPoint,
                      markLine: this.markLine,
                      markArea: this.markArea,
                      zlevel: this.zlevel,
                      z: this.z,
                      silent: this.silent,
                    };
                  },
                },
              ]),
              e
            );
          })(o.c);
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(n.Sb(o.b));
            }),
            (t.ɵcmp = n.Mb({
              type: t,
              selectors: [['td-chart-series', 'td-line', '']],
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
                coordinateSystem: 'coordinateSystem',
                xAxisIndex: 'xAxisIndex',
                yAxisIndex: 'yAxisIndex',
                polarIndex: 'polarIndex',
                symbol: 'symbol',
                symbolSize: 'symbolSize',
                symbolRotate: 'symbolRotate',
                symbolKeepAspect: 'symbolKeepAspect',
                symbolOffset: 'symbolOffset',
                showSymbol: 'showSymbol',
                showAllSymbol: 'showAllSymbol',
                hoverAnimation: 'hoverAnimation',
                legendHoverLink: 'legendHoverLink',
                stack: 'stack',
                cursor: 'cursor',
                connectNulls: 'connectNulls',
                clipOverflow: 'clipOverflow',
                step: 'step',
                label: 'label',
                itemStyle: 'itemStyle',
                lineStyle: 'lineStyle',
                areaStyle: 'areaStyle',
                emphasis: 'emphasis',
                smooth: 'smooth',
                smoothMonotone: 'smoothMonotone',
                sampling: 'sampling',
                dimensions: 'dimensions',
                encode: 'encode',
                seriesLayoutBy: 'seriesLayoutBy',
                datasetIndex: 'datasetIndex',
                markPoint: 'markPoint',
                markLine: 'markLine',
                markArea: 'markArea',
                zlevel: 'zlevel',
                z: 'z',
                silent: 'silent',
              },
              features: [
                n.Cb([
                  {
                    provide: o.c,
                    useExisting: Object(n.V)(function() {
                      return t;
                    }),
                  },
                ]),
                n.Ab,
              ],
              attrs: a,
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
    'NEPT': function(t, e, i) {
      'use strict';
      var n,
        o = i('ofXK'),
        a = (i('sRwP'), i('BGHn'), i('fXoL')),
        r =
          (((n = function t() {
            _classCallCheck(this, t);
          }).ɵmod = a.Qb({ type: n })),
          (n.ɵinj = a.Pb({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[o.c]],
          })),
          n);
      i.d(e, 'a', function() {
        return r;
      });
    },
    'Z8zF': function(t, e, i) {
      i('Tghj');
      var n = i('ProS'),
        o = i('bYtY'),
        a = i('IwbS'),
        r = i('56rv').setLabel,
        s = i('Qxkt'),
        l = i('tceW'),
        h = i('y+Vt'),
        c = ['itemStyle', 'barBorderWidth'];
      o.extend(s.prototype, l);
      var u = n.extendChartView({
          type: 'bar',
          render: function(t, e, i) {
            this._updateDrawMode(t);
            var n = t.get('coordinateSystem');
            return (
              ('cartesian2d' !== n && 'polar' !== n) ||
                (this._isLargeDraw ? this._renderLarge(t, e, i) : this._renderNormal(t, e, i)),
              this.group
            );
          },
          incrementalPrepareRender: function(t, e, i) {
            this._clear(), this._updateDrawMode(t);
          },
          incrementalRender: function(t, e, i, n) {
            this._incrementalRenderLarge(t, e);
          },
          _updateDrawMode: function(t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && ((this._isLargeDraw = e), this._clear());
          },
          _renderNormal: function(t, e, i) {
            var n,
              o = this.group,
              r = t.getData(),
              s = this._data,
              l = t.coordinateSystem,
              h = l.getBaseAxis();
            'cartesian2d' === l.type ? (n = h.isHorizontal()) : 'polar' === l.type && (n = 'angle' === h.dim);
            var c = t.isAnimationEnabled() ? t : null;
            r
              .diff(s)
              .add(function(e) {
                if (r.hasValue(e)) {
                  var i = r.getItemModel(e),
                    a = f[l.type](r, e, i),
                    s = d[l.type](r, e, i, a, n, c);
                  r.setItemGraphicEl(e, s), o.add(s), g(s, r, e, i, a, t, n, 'polar' === l.type);
                }
              })
              .update(function(e, i) {
                var h = s.getItemGraphicEl(i);
                if (r.hasValue(e)) {
                  var u = r.getItemModel(e),
                    p = f[l.type](r, e, u);
                  h ? a.updateProps(h, { shape: p }, c, e) : (h = d[l.type](r, e, u, p, n, c, !0)),
                    r.setItemGraphicEl(e, h),
                    o.add(h),
                    g(h, r, e, u, p, t, n, 'polar' === l.type);
                } else o.remove(h);
              })
              .remove(function(t) {
                var e = s.getItemGraphicEl(t);
                'cartesian2d' === l.type ? e && p(t, c, e) : e && m(t, c, e);
              })
              .execute(),
              (this._data = r);
          },
          _renderLarge: function(t, e, i) {
            this._clear(), b(t, this.group);
          },
          _incrementalRenderLarge: function(t, e) {
            b(e, this.group, !0);
          },
          dispose: o.noop,
          remove: function(t) {
            this._clear(t);
          },
          _clear: function(t) {
            var e = this.group,
              i = this._data;
            t && t.get('animation') && i && !this._isLargeDraw
              ? i.eachItemGraphicEl(function(e) {
                  'sector' === e.type ? m(e.dataIndex, t, e) : p(e.dataIndex, t, e);
                })
              : e.removeAll(),
              (this._data = null);
          },
        }),
        d = {
          cartesian2d: function(t, e, i, n, r, s, l) {
            var h = new a.Rect({ shape: o.extend({}, n) });
            if (s) {
              var c = r ? 'height' : 'width',
                u = {};
              (h.shape[c] = 0), (u[c] = n[c]), a[l ? 'updateProps' : 'initProps'](h, { shape: u }, s, e);
            }
            return h;
          },
          polar: function(t, e, i, n, r, s, l) {
            var h = new a.Sector({ shape: o.defaults({ clockwise: n.startAngle < n.endAngle }, n) });
            if (s) {
              var c = r ? 'r' : 'endAngle',
                u = {};
              (h.shape[c] = r ? 0 : n.startAngle),
                (u[c] = n[c]),
                a[l ? 'updateProps' : 'initProps'](h, { shape: u }, s, e);
            }
            return h;
          },
        };
      function p(t, e, i) {
        (i.style.text = null),
          a.updateProps(i, { shape: { width: 0 } }, e, t, function() {
            i.parent && i.parent.remove(i);
          });
      }
      function m(t, e, i) {
        (i.style.text = null),
          a.updateProps(i, { shape: { r: i.shape.r0 } }, e, t, function() {
            i.parent && i.parent.remove(i);
          });
      }
      var f = {
        cartesian2d: function(t, e, i) {
          var n = t.getItemLayout(e),
            o = (function(t, e) {
              var i = t.get(c) || 0;
              return Math.min(i, Math.abs(e.width), Math.abs(e.height));
            })(i, n),
            a = n.width > 0 ? 1 : -1,
            r = n.height > 0 ? 1 : -1;
          return { x: n.x + (a * o) / 2, y: n.y + (r * o) / 2, width: n.width - a * o, height: n.height - r * o };
        },
        polar: function(t, e, i) {
          var n = t.getItemLayout(e);
          return { cx: n.cx, cy: n.cy, r0: n.r0, r: n.r, startAngle: n.startAngle, endAngle: n.endAngle };
        },
      };
      function g(t, e, i, n, s, l, h, c) {
        var u = e.getItemVisual(i, 'color'),
          d = e.getItemVisual(i, 'opacity'),
          p = n.getModel('itemStyle'),
          m = n.getModel('emphasis.itemStyle').getBarItemStyle();
        c || t.setShape('r', p.get('barBorderRadius') || 0),
          t.useStyle(o.defaults({ fill: u, opacity: d }, p.getBarItemStyle()));
        var f = n.getShallow('cursor');
        f && t.attr('cursor', f),
          c || r(t.style, m, n, u, l, i, h ? (s.height > 0 ? 'bottom' : 'top') : s.width > 0 ? 'left' : 'right'),
          a.setHoverStyle(t, m);
      }
      var y = h.extend({
        type: 'largeBar',
        shape: { points: [] },
        buildPath: function(t, e) {
          for (var i = e.points, n = this.__startPoint, o = this.__valueIdx, a = 0; a < i.length; a += 2)
            (n[this.__valueIdx] = i[a + o]), t.moveTo(n[0], n[1]), t.lineTo(i[a], i[a + 1]);
        },
      });
      function b(t, e, i) {
        var n = t.getData(),
          o = [],
          a = n.getLayout('valueAxisHorizontal') ? 1 : 0;
        o[1 - a] = n.getLayout('valueAxisStart');
        var r = new y({
          shape: { points: n.getLayout('largePoints') },
          incremental: !!i,
          __startPoint: o,
          __valueIdx: a,
        });
        e.add(r),
          (function(t, e, i) {
            var n = i.getVisual('borderColor') || i.getVisual('color'),
              o = e.getModel('itemStyle').getItemStyle(['color', 'borderColor']);
            t.useStyle(o), (t.style.fill = null), (t.style.stroke = n), (t.style.lineWidth = i.getLayout('barWidth'));
          })(r, t, n);
      }
      t.exports = u;
    },
    'dhly': function(t, e, i) {
      'use strict';
      var n,
        o = i('ofXK'),
        a = (i('75ce'), i('NEJn'), i('fXoL')),
        r =
          (((n = function t() {
            _classCallCheck(this, t);
          }).ɵmod = a.Qb({ type: n })),
          (n.ɵinj = a.Pb({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[o.c]],
          })),
          n);
      i.d(e, 'a', function() {
        return r;
      });
    },
    'lLGD': function(t, e, i) {
      var n = i('ProS'),
        o = i('bYtY'),
        a = i('nVfU'),
        r = a.layout,
        s = a.largeLayout;
      i('Wqna'),
        i('F7hV'),
        i('Z8zF'),
        i('Ae16'),
        n.registerLayout(o.curry(r, 'bar')),
        n.registerLayout(s),
        n.registerVisual({
          seriesType: 'bar',
          reset: function(t) {
            t.getData().setVisual('legendSymbol', 'roundRect');
          },
        });
    },
    'q5+X': function(t, e, i) {
      'use strict';
      i.d(e, 'a', function() {
        return r;
      });
      var n = i('fXoL'),
        o = i('rDig'),
        a = ['td-bar', ''],
        r = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'bar', t))
              );
            }
            return (
              _inherits(e, t),
              _createClass(e, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      coordinateSystem: this.coordinateSystem,
                      xAxisIndex: this.xAxisIndex,
                      yAxisIndex: this.yAxisIndex,
                      legendHoverLink: this.legendHoverLink,
                      stack: this.stack,
                      cursor: this.cursor,
                      label: this.label,
                      itemStyle: this.itemStyle,
                      emphasis: this.emphasis,
                      barWidth: this.barWidth,
                      barMaxWidth: this.barMaxWidth,
                      barMinHeight: this.barMinHeight,
                      barGap: this.barGap,
                      barCategoryGap: this.barCategoryGap,
                      large: this.large,
                      largeThreshold: this.largeThreshold,
                      progressive: this.progressive,
                      progressiveThreshold: this.progressiveThreshold,
                      progressiveChunkMode: this.progressiveChunkMode,
                      dimensions: this.dimensions,
                      encode: this.encode,
                      seriesLayoutBy: this.seriesLayoutBy,
                      datasetIndex: this.datasetIndex,
                      markPoint: this.markPoint,
                      markLine: this.markLine,
                      markArea: this.markArea,
                      zlevel: this.zlevel,
                      z: this.z,
                    };
                  },
                },
              ]),
              e
            );
          })(o.c);
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(n.Sb(o.b));
            }),
            (t.ɵcmp = n.Mb({
              type: t,
              selectors: [['td-chart-series', 'td-bar', '']],
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
                coordinateSystem: 'coordinateSystem',
                xAxisIndex: 'xAxisIndex',
                yAxisIndex: 'yAxisIndex',
                legendHoverLink: 'legendHoverLink',
                stack: 'stack',
                cursor: 'cursor',
                label: 'label',
                itemStyle: 'itemStyle',
                emphasis: 'emphasis',
                barWidth: 'barWidth',
                barMaxWidth: 'barMaxWidth',
                barMinHeight: 'barMinHeight',
                barGap: 'barGap',
                barCategoryGap: 'barCategoryGap',
                large: 'large',
                largeThreshold: 'largeThreshold',
                progressive: 'progressive',
                progressiveThreshold: 'progressiveThreshold',
                progressiveChunkMode: 'progressiveChunkMode',
                dimensions: 'dimensions',
                encode: 'encode',
                seriesLayoutBy: 'seriesLayoutBy',
                datasetIndex: 'datasetIndex',
                markPoint: 'markPoint',
                markLine: 'markLine',
                markArea: 'markArea',
                zlevel: 'zlevel',
                z: 'z',
              },
              features: [
                n.Cb([
                  {
                    provide: o.c,
                    useExisting: Object(n.V)(function() {
                      return t;
                    }),
                  },
                ]),
                n.Ab,
              ],
              attrs: a,
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
    'tceW': function(t, e, i) {
      var n = i('KCsZ')([
        ['fill', 'color'],
        ['stroke', 'borderColor'],
        ['lineWidth', 'borderWidth'],
        ['stroke', 'barBorderColor'],
        ['lineWidth', 'barBorderWidth'],
        ['opacity'],
        ['shadowBlur'],
        ['shadowOffsetX'],
        ['shadowOffsetY'],
        ['shadowColor'],
      ]);
      t.exports = {
        getBarItemStyle: function(t) {
          var e = n(this, t);
          if (this.getBorderLineDash) {
            var i = this.getBorderLineDash();
            i && (e.lineDash = i);
          }
          return e;
        },
      };
    },
  },
]);
