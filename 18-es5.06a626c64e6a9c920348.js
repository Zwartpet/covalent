function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var a = 0; a < e.length; a++) {
    var n = e[a];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function _createClass(t, e, a) {
  return e && _defineProperties(t.prototype, e), a && _defineProperties(t, a), t;
}
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
(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    'Ck+y': function(t, e, a) {
      var n = a('ProS'),
        o = a('+TT/');
      a('Nlvd'), a('wD15');
      var r = a('eT+N');
      if (!r.isSupported) throw new Error('Sorry your browser not support wordCloud');
      n.registerLayout(function(t, e) {
        t.eachSeriesByType('wordCloud', function(a) {
          var i = o.getLayoutRect(a.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() }),
            s = a.getData(),
            l = document.createElement('canvas');
          (l.width = i.width), (l.height = i.height);
          var c = l.getContext('2d'),
            d = a.get('maskImage');
          if (d)
            try {
              c.drawImage(d, 0, 0, l.width, l.height),
                (function(t) {
                  for (
                    var e = t.getContext('2d'),
                      a = e.getImageData(0, 0, t.width, t.height),
                      n = e.createImageData(a),
                      o = 0,
                      r = 0,
                      i = 0;
                    i < a.data.length;
                    i += 4
                  )
                    a.data[i + 3] > 128 && ((o += l = a.data[i] + a.data[i + 1] + a.data[i + 2]), ++r);
                  var s = o / r;
                  for (i = 0; i < a.data.length; i += 4) {
                    var l = a.data[i] + a.data[i + 1] + a.data[i + 2];
                    a.data[i + 3] < 128 || l > s
                      ? ((n.data[i] = 0), (n.data[i + 1] = 0), (n.data[i + 2] = 0), (n.data[i + 3] = 0))
                      : ((n.data[i] = 255), (n.data[i + 1] = 255), (n.data[i + 2] = 255), (n.data[i + 3] = 255));
                  }
                  e.putImageData(n, 0, 0);
                })(l);
            } catch (w) {
              console.error('Invalid mask image'), console.error(w.toString());
            }
          var u = a.get('sizeRange'),
            f = a.get('rotationRange'),
            h = s.getDataExtent('value'),
            m = Math.PI / 180,
            g = a.get('gridSize');
          function p(t) {
            var e = t.detail.item;
            t.detail.drawn &&
              a.layoutInstance.ondraw &&
              ((t.detail.drawn.gx += i.x / g),
              (t.detail.drawn.gy += i.y / g),
              a.layoutInstance.ondraw(e[0], e[1], e[2], t.detail.drawn));
          }
          r(l, {
            list: s
              .mapArray('value', function(t, e) {
                var a = s.getItemModel(e);
                return [s.getName(e), a.get('textStyle.normal.textSize', !0) || n.number.linearMap(t, h, u), e];
              })
              .sort(function(t, e) {
                return e[1] - t[1];
              }),
            fontFamily:
              a.get('textStyle.normal.fontFamily') ||
              a.get('textStyle.emphasis.fontFamily') ||
              t.get('textStyle.fontFamily'),
            fontWeight:
              a.get('textStyle.normal.fontWeight') ||
              a.get('textStyle.emphasis.fontWeight') ||
              t.get('textStyle.fontWeight'),
            gridSize: g,
            ellipticity: i.height / i.width,
            minRotation: f[0] * m,
            maxRotation: f[1] * m,
            clearCanvas: !d,
            rotateRatio: 1,
            rotationStep: a.get('rotationStep') * m,
            drawOutOfBound: a.get('drawOutOfBound'),
            shuffle: !1,
            shape: a.get('shape'),
          }),
            l.addEventListener('wordclouddrawn', p),
            a.layoutInstance && a.layoutInstance.dispose(),
            (a.layoutInstance = {
              ondraw: null,
              dispose: function() {
                l.removeEventListener('wordclouddrawn', p),
                  l.addEventListener('wordclouddrawn', function(t) {
                    t.preventDefault();
                  });
              },
            });
        });
      }),
        n.registerPreprocessor(function(t) {
          var e = (t || {}).series;
          !n.util.isArray(e) && (e = e ? [e] : []);
          var a = ['shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY'];
          function o(t) {
            t &&
              n.util.each(a, function(e) {
                t.hasOwnProperty(e) && (t['text' + n.format.capitalFirst(e)] = t[e]);
              });
          }
          n.util.each(e, function(t) {
            if (t && 'wordCloud' === t.type) {
              var e = t.textStyle || {};
              o(e.normal), o(e.emphasis);
            }
          });
        });
    },
    'Nlvd': function(t, e, a) {
      var n = a('hi0g'),
        o = a('ProS');
      o.extendSeriesModel({
        type: 'series.wordCloud',
        visualColorAccessPath: 'textStyle.normal.color',
        optionUpdated: function() {
          var t = this.option;
          t.gridSize = Math.max(Math.floor(t.gridSize), 4);
        },
        getInitialData: function(t, e) {
          var a = n(['value'], t.data),
            r = new o.List(a, this);
          return r.initData(t.data), r;
        },
        defaultOption: {
          maskImage: null,
          shape: 'circle',
          left: 'center',
          top: 'center',
          width: '70%',
          height: '80%',
          sizeRange: [12, 60],
          rotationRange: [-90, 90],
          rotationStep: 45,
          gridSize: 8,
          drawOutOfBound: !1,
          textStyle: { normal: { fontWeight: 'normal' } },
        },
      });
    },
    'Z+aH': function(t, e, a) {
      'use strict';
      a.d(e, 'a', function() {
        return i;
      });
      var n = a('fXoL'),
        o = a('rDig'),
        r = ['td-wordCloud', ''],
        i = (function() {
          var t = (function(t) {
            function e(t) {
              return (
                _classCallCheck(this, e),
                _possibleConstructorReturn(this, _getPrototypeOf(e).call(this, 'wordCloud', t))
              );
            }
            return (
              _inherits(e, t),
              _createClass(e, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      shape: this.shape,
                      left: this.left,
                      top: this.top,
                      width: this.width,
                      height: this.height,
                      right: this.right,
                      bottom: this.bottom,
                      sizeRange: this.sizeRange,
                      rotationRange: this.rotationRange,
                      rotationStep: this.rotationStep,
                      gridSize: this.gridSize,
                      drawOutOfBound: this.drawOutOfBound,
                      textStyle: this.textStyle,
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
              selectors: [['td-chart-series', 'td-wordCloud', '']],
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
                shape: 'shape',
                left: 'left',
                top: 'top',
                width: 'width',
                height: 'height',
                right: 'right',
                bottom: 'bottom',
                sizeRange: 'sizeRange',
                rotationRange: 'rotationRange',
                rotationStep: 'rotationStep',
                gridSize: 'gridSize',
                drawOutOfBound: 'drawOutOfBound',
                textStyle: 'textStyle',
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
              attrs: r,
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
    'dKCn': function(t, e, a) {
      'use strict';
      var n,
        o = a('ofXK'),
        r = (a('h6EL'), a('Z+aH'), a('fXoL')),
        i =
          (((n = function t() {
            _classCallCheck(this, t);
          }).ɵmod = r.Qb({ type: n })),
          (n.ɵinj = r.Pb({
            factory: function(t) {
              return new (t || n)();
            },
            imports: [[o.c]],
          })),
          n);
      a.d(e, 'a', function() {
        return i;
      });
    },
    'eT+N': function(t, e, a) {
      'use strict';
      var n, o, r, i, s;
      window.setImmediate ||
        (window.setImmediate =
          window.msSetImmediate ||
          window.webkitSetImmediate ||
          window.mozSetImmediate ||
          window.oSetImmediate ||
          (function() {
            if (!window.postMessage || !window.addEventListener) return null;
            var t = [void 0],
              e = 'zero-timeout-message';
            return (
              window.addEventListener(
                'message',
                function(a) {
                  if ('string' == typeof a.data && a.data.substr(0, e.length) === e) {
                    a.stopImmediatePropagation();
                    var n = parseInt(a.data.substr(e.length), 36);
                    t[n] && (t[n](), (t[n] = void 0));
                  }
                },
                !0,
              ),
              (window.clearImmediate = function(e) {
                t[e] && (t[e] = void 0);
              }),
              function(a) {
                var n = t.length;
                return t.push(a), window.postMessage(e + n.toString(36), '*'), n;
              }
            );
          })() ||
          function(t) {
            window.setTimeout(t, 0);
          }),
        window.clearImmediate ||
          (window.clearImmediate =
            window.msClearImmediate ||
            window.webkitClearImmediate ||
            window.mozClearImmediate ||
            window.oClearImmediate ||
            function(t) {
              window.clearTimeout(t);
            }),
        (o = (function() {
          var t = document.createElement('canvas');
          if (!t || !t.getContext) return !1;
          var e = t.getContext('2d');
          return !!(e.getImageData && e.fillText && Array.prototype.some && Array.prototype.push);
        })()),
        (r = (function() {
          if (o) {
            for (var t, e, a = document.createElement('canvas').getContext('2d'), n = 20; n; ) {
              if (
                ((a.font = n.toString(10) + 'px sans-serif'),
                a.measureText('\uff37').width === t && a.measureText('m').width === e)
              )
                return n + 1;
              (t = a.measureText('\uff37').width), (e = a.measureText('m').width), n--;
            }
            return 0;
          }
        })()),
        (i = function(t) {
          for (var e, a, n = t.length; n; e = Math.floor(Math.random() * n), a = t[--n], t[n] = t[e], t[e] = a);
          return t;
        }),
        ((s = function(t, e) {
          if (o) {
            Array.isArray(t) || (t = [t]),
              t.forEach(function(e, a) {
                if ('string' == typeof e) {
                  if (((t[a] = document.getElementById(e)), !t[a])) throw 'The element id specified is not found.';
                } else if (!e.tagName && !e.appendChild) throw 'You must pass valid HTML elements, or ID of the element.';
              });
            var a = {
              list: [],
              fontFamily:
                '"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',
              fontWeight: 'normal',
              color: 'random-dark',
              minSize: 0,
              weightFactor: 1,
              clearCanvas: !0,
              backgroundColor: '#fff',
              gridSize: 8,
              drawOutOfBound: !1,
              origin: null,
              drawMask: !1,
              maskColor: 'rgba(255,0,0,0.3)',
              maskGapWidth: 0.3,
              wait: 0,
              abortThreshold: 0,
              abort: function() {},
              minRotation: -Math.PI / 2,
              maxRotation: Math.PI / 2,
              rotationStep: 0.1,
              shuffle: !0,
              rotateRatio: 0.1,
              shape: 'circle',
              ellipticity: 0.65,
              classes: null,
              hover: null,
              click: null,
            };
            if (e) for (var n in e) n in a && (a[n] = e[n]);
            if ('function' != typeof a.weightFactor) {
              var s = a.weightFactor;
              a.weightFactor = function(t) {
                return t * s;
              };
            }
            if ('function' != typeof a.shape)
              switch (a.shape) {
                case 'circle':
                default:
                  a.shape = 'circle';
                  break;
                case 'cardioid':
                  a.shape = function(t) {
                    return 1 - Math.sin(t);
                  };
                  break;
                case 'diamond':
                case 'square':
                  a.shape = function(t) {
                    var e = t % ((2 * Math.PI) / 4);
                    return 1 / (Math.cos(e) + Math.sin(e));
                  };
                  break;
                case 'triangle-forward':
                  a.shape = function(t) {
                    var e = t % ((2 * Math.PI) / 3);
                    return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e));
                  };
                  break;
                case 'triangle':
                case 'triangle-upright':
                  a.shape = function(t) {
                    var e = (t + (3 * Math.PI) / 2) % ((2 * Math.PI) / 3);
                    return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e));
                  };
                  break;
                case 'pentagon':
                  a.shape = function(t) {
                    var e = (t + 0.955) % ((2 * Math.PI) / 5);
                    return 1 / (Math.cos(e) + 0.726543 * Math.sin(e));
                  };
                  break;
                case 'star':
                  a.shape = function(t) {
                    var e = (t + 0.955) % ((2 * Math.PI) / 10);
                    return ((t + 0.955) % ((2 * Math.PI) / 5)) - (2 * Math.PI) / 10 >= 0
                      ? 1 / (Math.cos((2 * Math.PI) / 10 - e) + 3.07768 * Math.sin((2 * Math.PI) / 10 - e))
                      : 1 / (Math.cos(e) + 3.07768 * Math.sin(e));
                  };
              }
            a.gridSize = Math.max(Math.floor(a.gridSize), 4);
            var l,
              c,
              d,
              u,
              f,
              h,
              m,
              g = a.gridSize,
              p = g - a.maskGapWidth,
              w = Math.abs(a.maxRotation - a.minRotation),
              v = Math.min(a.maxRotation, a.minRotation),
              y = a.rotationStep;
            switch (a.color) {
              case 'random-dark':
                m = function() {
                  return D(10, 50);
                };
                break;
              case 'random-light':
                m = function() {
                  return D(50, 90);
                };
                break;
              default:
                'function' == typeof a.color && (m = a.color);
            }
            var x = null;
            'function' == typeof a.classes && (x = a.classes);
            var b,
              M = !1,
              S = [],
              C = function(t) {
                var e,
                  a,
                  n = t.currentTarget,
                  o = n.getBoundingClientRect();
                t.touches
                  ? ((e = t.touches[0].clientX), (a = t.touches[0].clientY))
                  : ((e = t.clientX), (a = t.clientY));
                var r = a - o.top,
                  i = Math.floor(((e - o.left) * (n.width / o.width || 1)) / g),
                  s = Math.floor((r * (n.height / o.height || 1)) / g);
                return S[i][s];
              },
              T = function(t) {
                var e = C(t);
                b !== e && ((b = e), e ? a.hover(e.item, e.dimension, t) : a.hover(void 0, void 0, t));
              },
              I = function(t) {
                var e = C(t);
                e && (a.click(e.item, e.dimension, t), t.preventDefault());
              },
              k = [],
              E = function(t) {
                if (k[t]) return k[t];
                var e = 8 * t,
                  n = e,
                  o = [];
                for (0 === t && o.push([u[0], u[1], 0]); n--; ) {
                  var r = 1;
                  'circle' !== a.shape && (r = a.shape((n / e) * 2 * Math.PI)),
                    o.push([
                      u[0] + t * r * Math.cos((-n / e) * 2 * Math.PI),
                      u[1] + t * r * Math.sin((-n / e) * 2 * Math.PI) * a.ellipticity,
                      (n / e) * 2 * Math.PI,
                    ]);
                }
                return (k[t] = o), o;
              },
              O = function() {
                return a.abortThreshold > 0 && new Date().getTime() - h > a.abortThreshold;
              },
              R = function(e, a, n, o, r) {
                e >= c ||
                  a >= d ||
                  e < 0 ||
                  a < 0 ||
                  ((l[e][a] = !1),
                  n && t[0].getContext('2d').fillRect(e * g, a * g, p, p),
                  M && (S[e][a] = { item: r, dimension: o }));
              },
              P = function(e, a, n) {
                if (a)
                  return !t.some(function(t) {
                    var o = document.createEvent('CustomEvent');
                    return o.initCustomEvent(e, !0, a, n || {}), !t.dispatchEvent(o);
                  }, this);
                t.forEach(function(t) {
                  var o = document.createEvent('CustomEvent');
                  o.initCustomEvent(e, !0, a, n || {}), t.dispatchEvent(o);
                }, this);
              };
            !(function() {
              var e = t[0];
              if (e.getContext) (c = Math.ceil(e.width / g)), (d = Math.ceil(e.height / g));
              else {
                var n = e.getBoundingClientRect();
                (c = Math.ceil(n.width / g)), (d = Math.ceil(n.height / g));
              }
              if (P('wordcloudstart', !0)) {
                var o, s, p, C, k;
                if (
                  ((u = a.origin ? [a.origin[0] / g, a.origin[1] / g] : [c / 2, d / 2]),
                  (f = Math.floor(Math.sqrt(c * c + d * d))),
                  (l = []),
                  !e.getContext || a.clearCanvas)
                )
                  for (
                    t.forEach(function(t) {
                      if (t.getContext) {
                        var e = t.getContext('2d');
                        (e.fillStyle = a.backgroundColor),
                          e.clearRect(0, 0, c * (g + 1), d * (g + 1)),
                          e.fillRect(0, 0, c * (g + 1), d * (g + 1));
                      } else (t.textContent = ''), (t.style.backgroundColor = a.backgroundColor), (t.style.position = 'relative');
                    }),
                      o = c;
                    o--;

                  )
                    for (l[o] = [], s = d; s--; ) l[o][s] = !0;
                else {
                  var D = document.createElement('canvas').getContext('2d');
                  (D.fillStyle = a.backgroundColor), D.fillRect(0, 0, 1, 1);
                  var _,
                    z,
                    L = D.getImageData(0, 0, 1, 1).data,
                    W = e.getContext('2d').getImageData(0, 0, c * g, d * g).data;
                  for (o = c; o--; )
                    for (l[o] = [], s = d; s--; ) {
                      z = g;
                      t: for (; z--; )
                        for (_ = g; _--; )
                          for (p = 4; p--; )
                            if (W[4 * ((s * g + z) * c * g + (o * g + _)) + p] !== L[p]) {
                              l[o][s] = !1;
                              break t;
                            }
                      !1 !== l[o][s] && (l[o][s] = !0);
                    }
                  W = D = L = void 0;
                }
                if (a.hover || a.click) {
                  for (M = !0, o = c + 1; o--; ) S[o] = [];
                  a.hover && e.addEventListener('mousemove', T),
                    a.click &&
                      (e.addEventListener('click', I),
                      e.addEventListener('touchstart', I),
                      e.addEventListener('touchend', function(t) {
                        t.preventDefault();
                      }),
                      (e.style.webkitTapHighlightColor = 'rgba(0, 0, 0, 0)')),
                    e.addEventListener('wordcloudstart', function t() {
                      e.removeEventListener('wordcloudstart', t),
                        e.removeEventListener('mousemove', T),
                        e.removeEventListener('click', I),
                        (b = void 0);
                    });
                }
                (p = 0),
                  0 !== a.wait
                    ? ((C = window.setTimeout), (k = window.clearTimeout))
                    : ((C = window.setImmediate), (k = window.clearImmediate));
                var F = function(e, a) {
                    t.forEach(function(t) {
                      t.removeEventListener(e, a);
                    }, this);
                  },
                  A = function t() {
                    F('wordcloudstart', t), k(B);
                  };
                !(function(e, a) {
                  t.forEach(function(t) {
                    t.addEventListener('wordcloudstart', a);
                  }, this);
                })(0, A);
                var B = C(function e() {
                  if (p >= a.list.length) return k(B), P('wordcloudstop', !1), void F('wordcloudstart', A);
                  h = new Date().getTime();
                  var n = (function(e) {
                      var n, o, s;
                      Array.isArray(e) ? ((n = e[0]), (o = e[1])) : ((n = e.word), (o = e.weight), (s = e.attributes));
                      var u,
                        h,
                        p,
                        b =
                          0 === a.rotateRatio
                            ? 0
                            : Math.random() > a.rotateRatio
                            ? 0
                            : 0 === w
                            ? v
                            : v + Math.round((Math.random() * w) / y) * y,
                        S = (function(t, e, n) {
                          var o = a.weightFactor(e);
                          if (o <= a.minSize) return !1;
                          var i = 1;
                          o < r &&
                            (i = (function() {
                              for (var t = 2; t * o < r; ) t += 2;
                              return t;
                            })());
                          var s = document.createElement('canvas'),
                            l = s.getContext('2d', { willReadFrequently: !0 });
                          l.font = a.fontWeight + ' ' + (o * i).toString(10) + 'px ' + a.fontFamily;
                          var c = l.measureText(t).width / i,
                            d = Math.max(o * i, l.measureText('m').width, l.measureText('\uff37').width) / i,
                            u = c + 2 * d,
                            f = 3 * d,
                            h = Math.ceil(u / g),
                            m = Math.ceil(f / g);
                          (u = h * g), (f = m * g);
                          var p = -c / 2,
                            w = 0.4 * -d,
                            v = Math.ceil((u * Math.abs(Math.sin(n)) + f * Math.abs(Math.cos(n))) / g),
                            y = Math.ceil((u * Math.abs(Math.cos(n)) + f * Math.abs(Math.sin(n))) / g),
                            x = y * g,
                            b = v * g;
                          s.setAttribute('width', x),
                            s.setAttribute('height', b),
                            l.scale(1 / i, 1 / i),
                            l.translate((x * i) / 2, (b * i) / 2),
                            l.rotate(-n),
                            (l.font = a.fontWeight + ' ' + (o * i).toString(10) + 'px ' + a.fontFamily),
                            (l.fillStyle = '#000'),
                            (l.textBaseline = 'middle'),
                            l.fillText(t, p * i, (w + 0.5 * o) * i);
                          var M = l.getImageData(0, 0, x, b).data;
                          if (O()) return !1;
                          for (var S, C, T, I = [], k = y, E = [v / 2, y / 2, v / 2, y / 2]; k--; )
                            for (S = v; S--; ) {
                              T = g;
                              t: for (; T--; )
                                for (C = g; C--; )
                                  if (M[4 * ((S * g + T) * x + (k * g + C)) + 3]) {
                                    I.push([k, S]),
                                      k < E[3] && (E[3] = k),
                                      k > E[1] && (E[1] = k),
                                      S < E[0] && (E[0] = S),
                                      S > E[2] && (E[2] = S);
                                    break t;
                                  }
                            }
                          return {
                            mu: i,
                            occupied: I,
                            bounds: E,
                            gw: y,
                            gh: v,
                            fillTextOffsetX: p,
                            fillTextOffsetY: w,
                            fillTextWidth: c,
                            fillTextHeight: d,
                            fontSize: o,
                          };
                        })(n, o, b);
                      if (!S) return !1;
                      if (O()) return !1;
                      if (!a.drawOutOfBound) {
                        var C = S.bounds;
                        if (C[1] - C[3] + 1 > c || C[2] - C[0] + 1 > d) return !1;
                      }
                      for (var T = f + 1; T--; ) {
                        var I = E(f - T);
                        a.shuffle && ((I = [].concat(I)), i(I));
                        for (var k = 0; k < I.length; k++) {
                          var P =
                            ((u = I[k]),
                            !!(function(t, e, n, o, r) {
                              for (var i = r.length; i--; ) {
                                var s = t + r[i][0],
                                  u = e + r[i][1];
                                if (s >= c || u >= d || s < 0 || u < 0) {
                                  if (!a.drawOutOfBound) return !1;
                                } else if (!l[s][u]) return !1;
                              }
                              return !0;
                            })(
                              (h = Math.floor(u[0] - S.gw / 2)),
                              (p = Math.floor(u[1] - S.gh / 2)),
                              0,
                              0,
                              S.occupied,
                            ) &&
                              ((function(e, n, o, r, i, s, l, c, d) {
                                var u,
                                  f,
                                  h = o.fontSize;
                                (u = m ? m(r, i, h, s, l) : a.color),
                                  (f = x ? x(r, i, h, s, l) : a.classes),
                                  t.forEach(function(t) {
                                    if (t.getContext) {
                                      var i = t.getContext('2d'),
                                        s = o.mu;
                                      i.save(),
                                        i.scale(1 / s, 1 / s),
                                        (i.font = a.fontWeight + ' ' + (h * s).toString(10) + 'px ' + a.fontFamily),
                                        (i.fillStyle = u),
                                        i.translate((e + o.gw / 2) * g * s, (n + o.gh / 2) * g * s),
                                        0 !== c && i.rotate(-c),
                                        (i.textBaseline = 'middle'),
                                        i.fillText(r, o.fillTextOffsetX * s, (o.fillTextOffsetY + 0.5 * h) * s),
                                        i.restore();
                                    } else {
                                      var l = document.createElement('span'),
                                        m = '';
                                      (m = 'rotate(' + (-c / Math.PI) * 180 + 'deg) '),
                                        1 !== o.mu &&
                                          (m += 'translateX(-' + o.fillTextWidth / 4 + 'px) scale(' + 1 / o.mu + ')');
                                      var p = {
                                        position: 'absolute',
                                        display: 'block',
                                        font: a.fontWeight + ' ' + h * o.mu + 'px ' + a.fontFamily,
                                        left: (e + o.gw / 2) * g + o.fillTextOffsetX + 'px',
                                        top: (n + o.gh / 2) * g + o.fillTextOffsetY + 'px',
                                        width: o.fillTextWidth + 'px',
                                        height: o.fillTextHeight + 'px',
                                        lineHeight: h + 'px',
                                        whiteSpace: 'nowrap',
                                        transform: m,
                                        webkitTransform: m,
                                        msTransform: m,
                                        transformOrigin: '50% 40%',
                                        webkitTransformOrigin: '50% 40%',
                                        msTransformOrigin: '50% 40%',
                                      };
                                      for (var w in (u && (p.color = u), (l.textContent = r), p)) l.style[w] = p[w];
                                      if (d) for (var v in d) l.setAttribute(v, d[v]);
                                      f && (l.className += f), t.appendChild(l);
                                    }
                                  });
                              })(h, p, S, n, o, f - T, u[2], b, s),
                              (function(e, n, o, r, i, s) {
                                var l,
                                  u,
                                  f = i.occupied,
                                  h = a.drawMask;
                                if ((h && ((l = t[0].getContext('2d')).save(), (l.fillStyle = a.maskColor)), M)) {
                                  var m = i.bounds;
                                  u = {
                                    x: (e + m[3]) * g,
                                    y: (n + m[0]) * g,
                                    w: (m[1] - m[3] + 1) * g,
                                    h: (m[2] - m[0] + 1) * g,
                                  };
                                }
                                for (var p = f.length; p--; ) {
                                  var w = e + f[p][0],
                                    v = n + f[p][1];
                                  w >= c || v >= d || w < 0 || v < 0 || R(w, v, h, u, s);
                                }
                                h && l.restore();
                              })(h, p, 0, 0, S, e),
                              { gx: h, gy: p, rot: b, info: S }));
                          if (P) return P;
                        }
                      }
                      return null;
                    })(a.list[p]),
                    o = !P('wordclouddrawn', !0, { item: a.list[p], drawn: n });
                  if (O() || o)
                    return (
                      k(B), a.abort(), P('wordcloudabort', !1), P('wordcloudstop', !1), void F('wordcloudstart', A)
                    );
                  p++, (B = C(e, a.wait));
                }, a.wait);
              }
            })();
          }
          function D(t, e) {
            return (
              'hsl(' +
              (360 * Math.random()).toFixed() +
              ',' +
              (30 * Math.random() + 70).toFixed() +
              '%,' +
              (Math.random() * (e - t) + t).toFixed() +
              '%)'
            );
          }
        }).isSupported = o),
        (s.minFontSize = r),
        void 0 ===
          (n = function() {
            return s;
          }.apply(e, [])) || (t.exports = n);
    },
    'h6EL': function(t, e, a) {
      t.exports = a('Ck+y');
    },
    'psNt': function(t, e, a) {
      'use strict';
      a.d(e, 'a', function() {
        return f;
      });
      var n = a('mrSG'),
        o = a('rDig'),
        r = a('fXoL'),
        i = a('MpVW'),
        s = a('cvES'),
        l = a('cpAi'),
        c = a('Z+aH'),
        d = function() {
          return [8, 30];
        },
        u = function(t) {
          return [t, 30];
        },
        f = (function() {
          var t = (function() {
            function t(e, a) {
              _classCallCheck(this, t),
                (this._cdr = e),
                (this.themeSelector = a),
                (this.themes = Object(o.e)()),
                (this.words = [
                  'Covalent',
                  'Teradata',
                  'Angular',
                  'TypeScript',
                  'JavaScript',
                  'Protractor',
                  'Karma',
                  'Ruby',
                  'Rails',
                  'Ruby on Rails',
                  'Java',
                  'Scala',
                  'RSpec',
                  'Cucumber',
                  'JUnit',
                  'Elixir',
                  'Twitter Bootstrap',
                  'HTML',
                  'CSS',
                  'SASS',
                  'PHP',
                ]),
                (this.words2 = [
                  'Engineering',
                  'Applied Science',
                  'Engineering Science',
                  'Innovation',
                  'Tech',
                  'Technological',
                  'Computing',
                  'Informatics',
                  'Biotechnology',
                  'Science',
                  'Telematics',
                  'Industry',
                  'Research',
                  'Information',
                  'Development',
                  'Cyber',
                  'Energy',
                  'Techs',
                  'Technicians',
                  'Computerization',
                  'Techno',
                ]),
                (this.componentExampleRandomWords = this.generateRandomWords(this.words2)),
                (this.config = {
                  tooltip: {},
                  series: [
                    {
                      type: 'wordCloud',
                      shape: 'triangle',
                      sizeRange: [8, 50],
                      rotationRange: [-30, 30],
                      color: this.randomColor,
                      data: this.generateRandomWords(this.words),
                    },
                  ],
                });
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    return Object(n.a)(
                      this,
                      void 0,
                      void 0,
                      regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (this.selectedTheme = this.themeSelector.selected), this._cdr.markForCheck();
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                        );
                      }),
                    );
                  },
                },
                {
                  key: 'randomColor',
                  value: function() {
                    return (
                      'rgb(' +
                      [
                        Math.round(160 * Math.random()),
                        Math.round(160 * Math.random()),
                        Math.round(160 * Math.random()),
                      ].join(',') +
                      ')'
                    );
                  },
                },
                {
                  key: 'generateRandomWords',
                  value: function(t) {
                    return Array.apply(void 0, Array(30)).map(function() {
                      return {
                        name: t[Math.floor(Math.random() * t.length)],
                        value: Math.floor(100 * Math.random()),
                        textStyle: { normal: { fontFamily: 'sans-serif', fontWeight: 'bold' } },
                      };
                    });
                  },
                },
                {
                  key: 'selectChartTheme',
                  value: function(t) {
                    this.themeSelector.select(t);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Sb(r.h), r.Sb(i.a));
            }),
            (t.ɵcmp = r.Mb({
              type: t,
              selectors: [['wordcloud-demo-basic']],
              decls: 8,
              vars: 9,
              consts: [
                [3, 'trigger'],
                ['td-wordCloud', '', 'shape', 'star', 3, 'sizeRange', 'rotationRange', 'color', 'data'],
              ],
              template: function(t, e) {
                1 & t &&
                  (r.Tc(0, '        '),
                  r.Yb(1, 'td-chart'),
                  r.Tc(2, '\n          '),
                  r.Tb(3, 'td-chart-tooltip', 0),
                  r.Tc(4, '\n          '),
                  r.Yb(5, 'td-chart-series', 1),
                  r.Tc(6, '\n          '),
                  r.Wb(),
                  r.Tc(7, '\n        '),
                  r.Wb()),
                  2 & t &&
                    (r.Db(1),
                    r.Pc('height', 500, 'px'),
                    r.Db(2),
                    r.qc('trigger', 'item'),
                    r.Db(2),
                    r.qc('sizeRange', r.uc(6, d))('rotationRange', r.vc(7, u, -30))('color', e.randomColor)(
                      'data',
                      e.componentExampleRandomWords,
                    ));
              },
              directives: [s.a, l.a, c.a],
              styles: ['[_nghost-%COMP%]{width:100%}'],
              changeDetection: 0,
            })),
            t
          );
        })();
    },
    'tE1T': function(t, e, a) {
      'use strict';
      a.d(e, 'a', function() {
        return l;
      });
      var n = a('ofXK'),
        o = a('rDig'),
        r = a('Qk+/'),
        i = (a('psNt'), a('dKCn')),
        s = a('fXoL'),
        l = (function() {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = s.Qb({ type: t })),
            (t.ɵinj = s.Pb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[o.a, r.a, i.a, n.c]],
            })),
            t
          );
        })();
    },
    'wD15': function(t, e, a) {
      var n = a('ProS');
      n.extendChartView({
        type: 'wordCloud',
        render: function(t, e, a) {
          var o = this.group;
          o.removeAll();
          var r = t.getData(),
            i = t.get('gridSize');
          (t.layoutInstance.ondraw = function(t, e, a, s) {
            var l = r.getItemModel(a),
              c = l.getModel('textStyle.normal'),
              d = l.getModel('textStyle.emphasis'),
              u = new n.graphic.Text({
                style: n.graphic.setTextStyle({}, c, {
                  x: s.info.fillTextOffsetX,
                  y: s.info.fillTextOffsetY + 0.5 * e,
                  text: t,
                  textBaseline: 'middle',
                  textFill: r.getItemVisual(a, 'color'),
                  fontSize: e,
                }),
                scale: [1 / s.info.mu, 1 / s.info.mu],
                position: [(s.gx + s.info.gw / 2) * i, (s.gy + s.info.gh / 2) * i],
                rotation: s.rot,
              });
            o.add(u),
              r.setItemGraphicEl(a, u),
              n.graphic.setHoverStyle(u, n.graphic.setTextStyle({}, d, null, { forMerge: !0 }, !0));
          }),
            (this._model = t);
        },
        remove: function() {
          this.group.removeAll(), this._model.layoutInstance.dispose();
        },
        dispose: function() {
          this._model.layoutInstance.dispose();
        },
      });
    },
  },
]);
