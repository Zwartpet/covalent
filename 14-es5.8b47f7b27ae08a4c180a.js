function _defineProperties(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, i) {
  return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}
function _possibleConstructorReturn(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t) ? _assertThisInitialized(e) : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '+lIL': function(e, t, i) {
      var n = i('ProS');
      i('/ry/'), i('3OrL');
      var a = i('L5E0'),
        o = i('7Phj');
      n.registerVisual(a), n.registerLayout(o);
    },
    '/SeX': function(e, t, i) {
      var n = i('knOB'),
        a = i('qZFw'),
        o = function(e) {
          (this.name = e || ''),
            (this.cx = 0),
            (this.cy = 0),
            (this._radiusAxis = new n()),
            (this._angleAxis = new a()),
            (this._radiusAxis.polar = this._angleAxis.polar = this);
        };
      (o.prototype = {
        type: 'polar',
        axisPointerEnabled: !0,
        constructor: o,
        dimensions: ['radius', 'angle'],
        model: null,
        containPoint: function(e) {
          var t = this.pointToCoord(e);
          return this._radiusAxis.contain(t[0]) && this._angleAxis.contain(t[1]);
        },
        containData: function(e) {
          return this._radiusAxis.containData(e[0]) && this._angleAxis.containData(e[1]);
        },
        getAxis: function(e) {
          return this['_' + e + 'Axis'];
        },
        getAxes: function() {
          return [this._radiusAxis, this._angleAxis];
        },
        getAxesByScale: function(e) {
          var t = [],
            i = this._angleAxis,
            n = this._radiusAxis;
          return i.scale.type === e && t.push(i), n.scale.type === e && t.push(n), t;
        },
        getAngleAxis: function() {
          return this._angleAxis;
        },
        getRadiusAxis: function() {
          return this._radiusAxis;
        },
        getOtherAxis: function(e) {
          var t = this._angleAxis;
          return e === t ? this._radiusAxis : t;
        },
        getBaseAxis: function() {
          return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAngleAxis();
        },
        getTooltipAxes: function(e) {
          var t = null != e && 'auto' !== e ? this.getAxis(e) : this.getBaseAxis();
          return { baseAxes: [t], otherAxes: [this.getOtherAxis(t)] };
        },
        dataToPoint: function(e, t) {
          return this.coordToPoint([this._radiusAxis.dataToRadius(e[0], t), this._angleAxis.dataToAngle(e[1], t)]);
        },
        pointToData: function(e, t) {
          var i = this.pointToCoord(e);
          return [this._radiusAxis.radiusToData(i[0], t), this._angleAxis.angleToData(i[1], t)];
        },
        pointToCoord: function(e) {
          var t = e[0] - this.cx,
            i = e[1] - this.cy,
            n = this.getAngleAxis(),
            a = n.getExtent(),
            o = Math.min(a[0], a[1]),
            r = Math.max(a[0], a[1]);
          n.inverse ? (o = r - 360) : (r = o + 360);
          var s = Math.sqrt(t * t + i * i);
          (t /= s), (i /= s);
          for (var l = (Math.atan2(-i, t) / Math.PI) * 180, c = l < o ? 1 : -1; l < o || l > r; ) l += 360 * c;
          return [s, l];
        },
        coordToPoint: function(e) {
          var t = e[0],
            i = (e[1] / 180) * Math.PI;
          return [Math.cos(i) * t + this.cx, -Math.sin(i) * t + this.cy];
        },
      }),
        (e.exports = o);
    },
    '/ry/': function(e, t, i) {
      var n = i('bYtY'),
        a = i('T4UG'),
        o = i('5GhG').seriesModelMixin,
        r = a.extend({
          type: 'series.boxplot',
          dependencies: ['xAxis', 'yAxis', 'grid'],
          defaultValueDimensions: [
            { name: 'min', defaultTooltip: !0 },
            { name: 'Q1', defaultTooltip: !0 },
            { name: 'median', defaultTooltip: !0 },
            { name: 'Q3', defaultTooltip: !0 },
            { name: 'max', defaultTooltip: !0 },
          ],
          dimensions: null,
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'cartesian2d',
            legendHoverLink: !0,
            hoverAnimation: !0,
            layout: null,
            boxWidth: [7, 50],
            itemStyle: { color: '#fff', borderWidth: 1 },
            emphasis: {
              itemStyle: {
                borderWidth: 2,
                shadowBlur: 5,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
              },
            },
            animationEasing: 'elasticOut',
            animationDuration: 800,
          },
        });
      n.mixin(r, o, !0), (e.exports = r);
    },
    '/stD': function(e, t, i) {
      var n = i('bYtY'),
        a = i('IUWy'),
        o = i('Kagy');
      function r(e, t, i) {
        (this.model = e), (this.ecModel = t), (this.api = i);
      }
      r.defaultOption = {
        show: !0,
        type: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        icon: {
          rect:
            'M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13',
          polygon:
            'M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2',
          lineX:
            'M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4',
          lineY:
            'M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4',
          keep:
            'M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z',
          clear:
            'M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2',
        },
        title: n.clone(o.toolbox.brush.title),
      };
      var s = r.prototype;
      (s.render = s.updateView = function(e, t, i) {
        var a, o, r;
        t.eachComponent({ mainType: 'brush' }, function(e) {
          (a = e.brushType), (o = e.brushOption.brushMode || 'single'), (r |= e.areas.length);
        }),
          (this._brushType = a),
          (this._brushMode = o),
          n.each(e.get('type', !0), function(t) {
            e.setIconStatus(t, ('keep' === t ? 'multiple' === o : 'clear' === t ? r : t === a) ? 'emphasis' : 'normal');
          });
      }),
        (s.getIcons = function() {
          var e = this.model,
            t = e.get('icon', !0),
            i = {};
          return (
            n.each(e.get('type', !0), function(e) {
              t[e] && (i[e] = t[e]);
            }),
            i
          );
        }),
        (s.onclick = function(e, t, i) {
          var n = this._brushType,
            a = this._brushMode;
          'clear' === i
            ? (t.dispatchAction({ type: 'axisAreaSelect', intervals: [] }),
              t.dispatchAction({ type: 'brush', command: 'clear', areas: [] }))
            : t.dispatchAction({
                type: 'takeGlobalCursor',
                key: 'brush',
                brushOption: {
                  brushType: 'keep' === i ? n : n !== i && i,
                  brushMode: 'keep' === i ? ('multiple' === a ? 'single' : 'multiple') : a,
                },
              });
        }),
        a.register('brush', r),
        (e.exports = r);
    },
    '06Qe': function(e, t, i) {
      var n,
        a = i('ItGF'),
        o = 'urn:schemas-microsoft-com:vml',
        r = 'undefined' == typeof window ? null : window,
        s = !1,
        l = r && r.document;
      if (l && !a.canvasSupported)
        try {
          !l.namespaces.zrvml && l.namespaces.add('zrvml', o),
            (n = function(e) {
              return l.createElement('<zrvml:' + e + ' class="zrvml">');
            });
        } catch (c) {
          n = function(e) {
            return l.createElement('<' + e + ' xmlns="' + o + '" class="zrvml">');
          };
        }
      (t.doc = l),
        (t.createNode = function(e) {
          return n(e);
        }),
        (t.initVML = function() {
          if (!s && l) {
            s = !0;
            var e = l.styleSheets;
            e.length < 31
              ? l.createStyleSheet().addRule('.zrvml', 'behavior:url(#default#VML)')
              : e[0].addRule('.zrvml', 'behavior:url(#default#VML)');
          }
        });
    },
    '0HBW': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY');
      function o(e, t) {
        (t.update = 'updateView'),
          n.registerAction(t, function(t, i) {
            var n = {};
            return (
              i.eachComponent({ mainType: 'geo', query: t }, function(i) {
                i[e](t.name),
                  a.each(i.coordinateSystem.regions, function(e) {
                    n[e.name] = i.isSelected(e.name) || !1;
                  });
              }),
              { selected: n, name: t.name }
            );
          });
      }
      i('Hxpc'),
        i('7uqq'),
        i('dmGj'),
        i('SehX'),
        o('toggleSelected', { type: 'geoToggleSelect', event: 'geoselectchanged' }),
        o('select', { type: 'geoSelect', event: 'geoselected' }),
        o('unSelect', { type: 'geoUnSelect', event: 'geounselected' });
    },
    '0JAE': function(e, t, i) {
      var n = i('bYtY'),
        a = i('+TT/'),
        o = i('OELB'),
        r = i('IDmD');
      function s(e, t, i) {
        this._model = e;
      }
      function l(e, t, i, n) {
        var a = i.calendarModel,
          o = i.seriesModel,
          r = a ? a.coordinateSystem : o ? o.coordinateSystem : null;
        return r === this ? r[e](n) : null;
      }
      (s.prototype = {
        constructor: s,
        type: 'calendar',
        dimensions: ['time', 'value'],
        getDimensionsInfo: function() {
          return [{ name: 'time', type: 'time' }, 'value'];
        },
        getRangeInfo: function() {
          return this._rangeInfo;
        },
        getModel: function() {
          return this._model;
        },
        getRect: function() {
          return this._rect;
        },
        getCellWidth: function() {
          return this._sw;
        },
        getCellHeight: function() {
          return this._sh;
        },
        getOrient: function() {
          return this._orient;
        },
        getFirstDayOfWeek: function() {
          return this._firstDayOfWeek;
        },
        getDateInfo: function(e) {
          var t = (e = o.parseDate(e)).getFullYear(),
            i = e.getMonth() + 1;
          i = i < 10 ? '0' + i : i;
          var n = e.getDate();
          n = n < 10 ? '0' + n : n;
          var a = e.getDay();
          return {
            y: t,
            m: i,
            d: n,
            day: (a = Math.abs((a + 7 - this.getFirstDayOfWeek()) % 7)),
            time: e.getTime(),
            formatedDate: t + '-' + i + '-' + n,
            date: e,
          };
        },
        getNextNDay: function(e, t) {
          return 0 === (t = t || 0)
            ? this.getDateInfo(e)
            : ((e = new Date(this.getDateInfo(e).time)).setDate(e.getDate() + t), this.getDateInfo(e));
        },
        update: function(e, t) {
          (this._firstDayOfWeek = +this._model.getModel('dayLabel').get('firstDay')),
            (this._orient = this._model.get('orient')),
            (this._lineWidth = this._model.getModel('itemStyle').getItemStyle().lineWidth || 0),
            (this._rangeInfo = this._getRangeInfo(this._initRangeOption()));
          var i = this._rangeInfo.weeks || 1,
            o = ['width', 'height'],
            r = this._model.get('cellSize').slice(),
            s = this._model.getBoxLayoutParams(),
            l = 'horizontal' === this._orient ? [i, 7] : [7, i];
          n.each([0, 1], function(e) {
            h(r, e) && (s[o[e]] = r[e] * l[e]);
          });
          var c = { width: t.getWidth(), height: t.getHeight() },
            u = (this._rect = a.getLayoutRect(s, c));
          function h(e, t) {
            return null != e[t] && 'auto' !== e[t];
          }
          n.each([0, 1], function(e) {
            h(r, e) || (r[e] = u[o[e]] / l[e]);
          }),
            (this._sw = r[0]),
            (this._sh = r[1]);
        },
        dataToPoint: function(e, t) {
          n.isArray(e) && (e = e[0]), null == t && (t = !0);
          var i = this.getDateInfo(e),
            a = this._rangeInfo;
          if (t && !(i.time >= a.start.time && i.time < a.end.time + 864e5)) return [NaN, NaN];
          var o = i.day,
            r = this._getRangeInfo([a.start.time, i.formatedDate]).nthWeek;
          return 'vertical' === this._orient
            ? [this._rect.x + o * this._sw + this._sw / 2, this._rect.y + r * this._sh + this._sh / 2]
            : [this._rect.x + r * this._sw + this._sw / 2, this._rect.y + o * this._sh + this._sh / 2];
        },
        pointToData: function(e) {
          var t = this.pointToDate(e);
          return t && t.time;
        },
        dataToRect: function(e, t) {
          var i = this.dataToPoint(e, t);
          return {
            contentShape: {
              x: i[0] - (this._sw - this._lineWidth) / 2,
              y: i[1] - (this._sh - this._lineWidth) / 2,
              width: this._sw - this._lineWidth,
              height: this._sh - this._lineWidth,
            },
            center: i,
            tl: [i[0] - this._sw / 2, i[1] - this._sh / 2],
            tr: [i[0] + this._sw / 2, i[1] - this._sh / 2],
            br: [i[0] + this._sw / 2, i[1] + this._sh / 2],
            bl: [i[0] - this._sw / 2, i[1] + this._sh / 2],
          };
        },
        pointToDate: function(e) {
          var t = Math.floor((e[0] - this._rect.x) / this._sw) + 1,
            i = Math.floor((e[1] - this._rect.y) / this._sh) + 1,
            n = this._rangeInfo.range;
          return 'vertical' === this._orient
            ? this._getDateByWeeksAndDay(i, t - 1, n)
            : this._getDateByWeeksAndDay(t, i - 1, n);
        },
        convertToPixel: n.curry(l, 'dataToPoint'),
        convertFromPixel: n.curry(l, 'pointToData'),
        _initRangeOption: function() {
          var e = this._model.get('range'),
            t = e;
          if (
            (n.isArray(t) && 1 === t.length && (t = t[0]),
            /^\d{4}$/.test(t) && (e = [t + '-01-01', t + '-12-31']),
            /^\d{4}[\/|-]\d{1,2}$/.test(t))
          ) {
            var i = this.getDateInfo(t),
              a = i.date;
            a.setMonth(a.getMonth() + 1);
            var o = this.getNextNDay(a, -1);
            e = [i.formatedDate, o.formatedDate];
          }
          /^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(t) && (e = [t, t]);
          var r = this._getRangeInfo(e);
          return r.start.time > r.end.time && e.reverse(), e;
        },
        _getRangeInfo: function(e) {
          var t;
          (e = [this.getDateInfo(e[0]), this.getDateInfo(e[1])])[0].time > e[1].time && ((t = !0), e.reverse());
          var i = Math.floor(e[1].time / 864e5) - Math.floor(e[0].time / 864e5) + 1,
            n = new Date(e[0].time),
            a = n.getDate(),
            o = e[1].date.getDate();
          if ((n.setDate(a + i - 1), n.getDate() !== o))
            for (var r = n.getTime() - e[1].time > 0 ? 1 : -1; n.getDate() !== o && (n.getTime() - e[1].time) * r > 0; )
              n.setDate(a + (i -= r) - 1);
          var s = Math.floor((i + e[0].day + 6) / 7),
            l = t ? 1 - s : s - 1;
          return (
            t && e.reverse(),
            {
              range: [e[0].formatedDate, e[1].formatedDate],
              start: e[0],
              end: e[1],
              allDay: i,
              weeks: s,
              nthWeek: l,
              fweek: e[0].day,
              lweek: e[1].day,
            }
          );
        },
        _getDateByWeeksAndDay: function(e, t, i) {
          var n = this._getRangeInfo(i);
          if (e > n.weeks || (0 === e && t < n.fweek) || (e === n.weeks && t > n.lweek)) return !1;
          var a = 7 * (e - 1) - n.fweek + t,
            o = new Date(n.start.time);
          return o.setDate(n.start.d + a), this.getDateInfo(o);
        },
      }),
        (s.dimensions = s.prototype.dimensions),
        (s.getDimensionsInfo = s.prototype.getDimensionsInfo),
        (s.create = function(e, t) {
          var i = [];
          return (
            e.eachComponent('calendar', function(n) {
              var a = new s(n, e, t);
              i.push(a), (n.coordinateSystem = a);
            }),
            e.eachSeries(function(e) {
              'calendar' === e.get('coordinateSystem') && (e.coordinateSystem = i[e.get('calendarIndex') || 0]);
            }),
            i
          );
        }),
        r.register('calendar', s),
        (e.exports = s);
    },
    '0o9m': function(e, t, i) {
      var n = i('ProS');
      i('hNWo'), i('RlCK'), i('XpcN');
      var a = i('kDyi'),
        o = i('bLfw');
      n.registerProcessor(a),
        o.registerSubTypeDefaulter('legend', function() {
          return 'plain';
        });
    },
    '1tlw': function(e, t, i) {
      var n = i('MBQ8').extend({
        type: 'series.pictorialBar',
        dependencies: ['grid'],
        defaultOption: {
          symbol: 'circle',
          symbolSize: null,
          symbolRotate: null,
          symbolPosition: null,
          symbolOffset: null,
          symbolMargin: null,
          symbolRepeat: !1,
          symbolRepeatDirection: 'end',
          symbolClip: !1,
          symbolBoundingData: null,
          symbolPatternSize: 400,
          barGap: '-100%',
          progressive: 0,
          hoverAnimation: !1,
        },
        getInitialData: function(e) {
          return (e.stack = null), n.superApply(this, 'getInitialData', arguments);
        },
      });
      e.exports = n;
    },
    '1u/T': function(e, t, i) {
      i('ProS').registerAction({ type: 'selectDataRange', event: 'dataRangeSelected', update: 'update' }, function(
        e,
        t,
      ) {
        t.eachComponent({ mainType: 'visualMap', query: e }, function(t) {
          t.setSelected(e.selected);
        });
      });
    },
    '1xaR': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY');
      i('qgGe'), i('NA0q'), i('RPvy');
      var o = i('mOdp'),
        r = i('y3NT'),
        s = i('0/Rx');
      n.registerVisual(a.curry(o, 'sunburst')),
        n.registerLayout(a.curry(r, 'sunburst')),
        n.registerProcessor(a.curry(s, 'sunburst'));
    },
    '2dDv': function(e, t, i) {
      var n = i('bYtY'),
        a = i('Fofx'),
        o = i('+TT/'),
        r = i('aX7z'),
        s = i('D1WM'),
        l = i('IwbS'),
        c = i('OELB'),
        u = i('72pK'),
        h = n.each,
        d = Math.min,
        p = Math.max,
        g = Math.floor,
        f = Math.ceil,
        m = c.round,
        v = Math.PI;
      function y(e, t, i) {
        (this._axesMap = n.createHashMap()),
          (this._axesLayout = {}),
          (this.dimensions = e.dimensions),
          (this._model = e),
          this._init(e, t, i);
      }
      function x(e, t) {
        return d(p(e, t[0]), t[1]);
      }
      function _(e, t) {
        var i = t.layoutLength / (t.axisCount - 1);
        return { position: i * e, axisNameAvailableWidth: i, axisLabelShow: !0 };
      }
      function b(e, t) {
        var i,
          n,
          a = t.axisExpandWidth,
          o = t.axisCollapseWidth,
          r = t.winInnerIndices,
          s = o,
          l = !1;
        return (
          e < r[0]
            ? ((i = e * o), (n = o))
            : e <= r[1]
            ? ((i = t.axisExpandWindow0Pos + e * a - t.axisExpandWindow[0]), (s = a), (l = !0))
            : ((i = t.layoutLength - (t.axisCount - 1 - e) * o), (n = o)),
          { position: i, axisNameAvailableWidth: s, axisLabelShow: l, nameTruncateMaxWidth: n }
        );
      }
      (y.prototype = {
        type: 'parallel',
        constructor: y,
        _init: function(e, t, i) {
          var n = e.parallelAxisIndex;
          h(
            e.dimensions,
            function(e, i) {
              var a = n[i],
                o = t.getComponent('parallelAxis', a),
                l = this._axesMap.set(e, new s(e, r.createScaleByModel(o), [0, 0], o.get('type'), a));
              (l.onBand = 'category' === l.type && o.get('boundaryGap')),
                (l.inverse = o.get('inverse')),
                (o.axis = l),
                (l.model = o),
                (l.coordinateSystem = o.coordinateSystem = this);
            },
            this,
          );
        },
        update: function(e, t) {
          this._updateAxesFromSeries(this._model, e);
        },
        containPoint: function(e) {
          var t = this._makeLayoutInfo(),
            i = t.axisBase,
            n = t.layoutBase,
            a = t.pixelDimIndex,
            o = e[1 - a],
            r = e[a];
          return o >= i && o <= i + t.axisLength && r >= n && r <= n + t.layoutLength;
        },
        getModel: function() {
          return this._model;
        },
        _updateAxesFromSeries: function(e, t) {
          t.eachSeries(function(i) {
            if (e.contains(i, t)) {
              var n = i.getData();
              h(
                this.dimensions,
                function(e) {
                  var t = this._axesMap.get(e);
                  t.scale.unionExtentFromData(n, n.mapDimension(e)), r.niceScaleExtent(t.scale, t.model);
                },
                this,
              );
            }
          }, this);
        },
        resize: function(e, t) {
          (this._rect = o.getLayoutRect(e.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() })),
            this._layoutAxes();
        },
        getRect: function() {
          return this._rect;
        },
        _makeLayoutInfo: function() {
          var e,
            t = this._model,
            i = this._rect,
            n = ['x', 'y'],
            a = ['width', 'height'],
            o = t.get('layout'),
            r = 'horizontal' === o ? 0 : 1,
            s = i[a[r]],
            l = [0, s],
            c = this.dimensions.length,
            u = x(t.get('axisExpandWidth'), l),
            h = x(t.get('axisExpandCount') || 0, [0, c]),
            d = t.get('axisExpandable') && c > 3 && c > h && h > 1 && u > 0 && s > 0,
            p = t.get('axisExpandWindow');
          p
            ? ((e = x(p[1] - p[0], l)), (p[1] = p[0] + e))
            : ((e = x(u * (h - 1), l)), ((p = [u * (t.get('axisExpandCenter') || g(c / 2)) - e / 2])[1] = p[0] + e));
          var v = (s - e) / (c - h);
          v < 3 && (v = 0);
          var y = [g(m(p[0] / u, 1)) + 1, f(m(p[1] / u, 1)) - 1];
          return {
            layout: o,
            pixelDimIndex: r,
            layoutBase: i[n[r]],
            layoutLength: s,
            axisBase: i[n[1 - r]],
            axisLength: i[a[1 - r]],
            axisExpandable: d,
            axisExpandWidth: u,
            axisCollapseWidth: v,
            axisExpandWindow: p,
            axisCount: c,
            winInnerIndices: y,
            axisExpandWindow0Pos: (v / u) * p[0],
          };
        },
        _layoutAxes: function() {
          var e = this._rect,
            t = this._axesMap,
            i = this.dimensions,
            n = this._makeLayoutInfo(),
            o = n.layout;
          t.each(function(e) {
            var t = [0, n.axisLength],
              i = e.inverse ? 1 : 0;
            e.setExtent(t[i], t[1 - i]);
          }),
            h(
              i,
              function(t, i) {
                var r = (n.axisExpandable ? b : _)(i, n),
                  s = { horizontal: { x: r.position, y: n.axisLength }, vertical: { x: 0, y: r.position } },
                  l = [s[o].x + e.x, s[o].y + e.y],
                  c = { horizontal: v / 2, vertical: 0 }[o],
                  u = a.create();
                a.rotate(u, u, c),
                  a.translate(u, u, l),
                  (this._axesLayout[t] = {
                    position: l,
                    rotation: c,
                    transform: u,
                    axisNameAvailableWidth: r.axisNameAvailableWidth,
                    axisLabelShow: r.axisLabelShow,
                    nameTruncateMaxWidth: r.nameTruncateMaxWidth,
                    tickDirection: 1,
                    labelDirection: 1,
                  });
              },
              this,
            );
        },
        getAxis: function(e) {
          return this._axesMap.get(e);
        },
        dataToPoint: function(e, t) {
          return this.axisCoordToPoint(this._axesMap.get(t).dataToCoord(e), t);
        },
        eachActiveState: function(e, t, i, a) {
          null == i && (i = 0), null == a && (a = e.count());
          var o = this._axesMap,
            r = this.dimensions,
            s = [],
            l = [];
          n.each(r, function(t) {
            s.push(e.mapDimension(t)), l.push(o.get(t).model);
          });
          for (var c = this.hasAxisBrushed(), u = i; u < a; u++) {
            var h;
            if (c) {
              h = 'active';
              for (var d = e.getValues(s, u), p = 0, g = r.length; p < g; p++)
                if ('inactive' === l[p].getActiveState(d[p])) {
                  h = 'inactive';
                  break;
                }
            } else h = 'normal';
            t(h, u);
          }
        },
        hasAxisBrushed: function() {
          for (var e = this.dimensions, t = this._axesMap, i = !1, n = 0, a = e.length; n < a; n++)
            'normal' !== t.get(e[n]).model.getActiveState() && (i = !0);
          return i;
        },
        axisCoordToPoint: function(e, t) {
          return l.applyTransform([e, 0], this._axesLayout[t].transform);
        },
        getAxisLayout: function(e) {
          return n.clone(this._axesLayout[e]);
        },
        getSlidedAxisExpandWindow: function(e) {
          var t = this._makeLayoutInfo(),
            i = t.pixelDimIndex,
            n = t.axisExpandWindow.slice(),
            a = n[1] - n[0],
            o = [0, t.axisExpandWidth * (t.axisCount - 1)];
          if (!this.containPoint(e)) return { behavior: 'none', axisExpandWindow: n };
          var r,
            s = e[i] - t.layoutBase - t.axisExpandWindow0Pos,
            l = 'slide',
            c = t.axisCollapseWidth,
            h = this._model.get('axisExpandSlideTriggerArea'),
            g = null != h[0];
          return (
            c
              ? (g && c && s < a * h[0]
                  ? ((l = 'jump'), (r = s - a * h[2]))
                  : g && c && s > a * (1 - h[0])
                  ? ((l = 'jump'), (r = s - a * (1 - h[2])))
                  : (r = s - a * h[1]) >= 0 && (r = s - a * (1 - h[1])) <= 0 && (r = 0),
                (r *= t.axisExpandWidth / c) ? u(r, n, o, 'all') : (l = 'none'))
              : (((n = [p(0, (o[1] * s) / (a = n[1] - n[0]) - a / 2)])[1] = d(o[1], n[0] + a)), (n[0] = n[1] - a)),
            { axisExpandWindow: n, behavior: l }
          );
        },
      }),
        (e.exports = y);
    },
    '2fGM': function(e, t, i) {
      var n = i('bYtY'),
        a = i('bLfw'),
        o = i('nkfE'),
        r = i('ICMv'),
        s = a.extend({
          type: 'polarAxis',
          axis: null,
          getCoordSysModel: function() {
            return this.ecModel.queryComponents({
              mainType: 'polar',
              index: this.option.polarIndex,
              id: this.option.polarId,
            })[0];
          },
        });
      function l(e, t) {
        return t.type || (t.data ? 'category' : 'value');
      }
      n.merge(s.prototype, r),
        o('angle', s, l, { startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: { rotate: !1 } }),
        o('radius', s, l, { splitNumber: 5 });
    },
    '2w7y': function(e, t, i) {
      var n = i('ProS');
      i('qMZE'),
        i('g0SD'),
        n.registerPreprocessor(function(e) {
          e.markPoint = e.markPoint || {};
        });
    },
    '3OrL': function(e, t, i) {
      var n = i('bYtY'),
        a = i('6Ic6'),
        o = i('IwbS'),
        r = i('y+Vt'),
        s = ['itemStyle'],
        l = ['emphasis', 'itemStyle'],
        c = a.extend({
          type: 'boxplot',
          render: function(e, t, i) {
            var n = e.getData(),
              a = this.group,
              o = this._data;
            this._data || a.removeAll();
            var r = 'horizontal' === e.get('layout') ? 1 : 0;
            n
              .diff(o)
              .add(function(e) {
                if (n.hasValue(e)) {
                  var t = h(n.getItemLayout(e), n, e, r, !0);
                  n.setItemGraphicEl(e, t), a.add(t);
                }
              })
              .update(function(e, t) {
                var i = o.getItemGraphicEl(t);
                if (n.hasValue(e)) {
                  var s = n.getItemLayout(e);
                  i ? d(s, i, n, e) : (i = h(s, n, e, r)), a.add(i), n.setItemGraphicEl(e, i);
                } else a.remove(i);
              })
              .remove(function(e) {
                var t = o.getItemGraphicEl(e);
                t && a.remove(t);
              })
              .execute(),
              (this._data = n);
          },
          remove: function(e) {
            var t = this.group,
              i = this._data;
            (this._data = null),
              i &&
                i.eachItemGraphicEl(function(e) {
                  e && t.remove(e);
                });
          },
          dispose: n.noop,
        }),
        u = r.extend({
          type: 'boxplotBoxPath',
          shape: {},
          buildPath: function(e, t) {
            var i = t.points,
              n = 0;
            for (e.moveTo(i[n][0], i[n][1]), n++; n < 4; n++) e.lineTo(i[n][0], i[n][1]);
            for (e.closePath(); n < i.length; n++) e.moveTo(i[n][0], i[n][1]), e.lineTo(i[++n][0], i[n][1]);
          },
        });
      function h(e, t, i, n, a) {
        var o = e.ends,
          r = new u({ shape: { points: a ? p(o, n, e) : o } });
        return d(e, r, t, i, a), r;
      }
      function d(e, t, i, n, a) {
        (0, o[a ? 'initProps' : 'updateProps'])(t, { shape: { points: e.ends } }, i.hostModel, n);
        var r = i.getItemModel(n),
          c = r.getModel(s),
          u = i.getItemVisual(n, 'color'),
          h = c.getItemStyle(['borderColor']);
        (h.stroke = u), (h.strokeNoScale = !0), t.useStyle(h), (t.z2 = 100);
        var d = r.getModel(l).getItemStyle();
        o.setHoverStyle(t, d);
      }
      function p(e, t, i) {
        return n.map(e, function(e) {
          return ((e = e.slice())[t] = i.initBaseline), e;
        });
      }
      e.exports = c;
    },
    '3X6L': function(e, t, i) {
      var n = i('bYtY'),
        a = i('7a+S'),
        o = i('OKJ2'),
        r = a.extend({
          type: 'timeline.slider',
          defaultOption: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',
            borderWidth: 0,
            orient: 'horizontal',
            inverse: !1,
            tooltip: { trigger: 'item' },
            symbol: 'emptyCircle',
            symbolSize: 10,
            lineStyle: { show: !0, width: 2, color: '#304654' },
            label: { position: 'auto', show: !0, interval: 'auto', rotate: 0, color: '#304654' },
            itemStyle: { color: '#304654', borderWidth: 1 },
            checkpointStyle: {
              symbol: 'circle',
              symbolSize: 13,
              color: '#c23531',
              borderWidth: 5,
              borderColor: 'rgba(194,53,49, 0.5)',
              animation: !0,
              animationDuration: 300,
              animationEasing: 'quinticInOut',
            },
            controlStyle: {
              show: !0,
              showPlayBtn: !0,
              showPrevBtn: !0,
              showNextBtn: !0,
              itemSize: 22,
              itemGap: 12,
              position: 'left',
              playIcon:
                'path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z',
              stopIcon:
                'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
              nextIcon:
                'path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z',
              prevIcon:
                'path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z',
              color: '#304654',
              borderColor: '#304654',
              borderWidth: 1,
            },
            emphasis: {
              label: { show: !0, color: '#c23531' },
              itemStyle: { color: '#c23531' },
              controlStyle: { color: '#c23531', borderColor: '#c23531', borderWidth: 2 },
            },
            data: [],
          },
        });
      n.mixin(r, o), (e.exports = r);
    },
    '3zoK': function(e, t, i) {
      var n = i('bYtY'),
        a = i('bLfw'),
        o = i('KCsZ'),
        r = i('nkfE'),
        s = i('OELB'),
        l = i('ICMv'),
        c = a.extend({
          type: 'baseParallelAxis',
          axis: null,
          activeIntervals: [],
          getAreaSelectStyle: function() {
            return o([
              ['fill', 'color'],
              ['lineWidth', 'borderWidth'],
              ['stroke', 'borderColor'],
              ['width', 'width'],
              ['opacity', 'opacity'],
            ])(this.getModel('areaSelectStyle'));
          },
          setActiveIntervals: function(e) {
            var t = (this.activeIntervals = n.clone(e));
            if (t) for (var i = t.length - 1; i >= 0; i--) s.asc(t[i]);
          },
          getActiveState: function(e) {
            var t = this.activeIntervals;
            if (!t.length) return 'normal';
            if (null == e || isNaN(e)) return 'inactive';
            if (1 === t.length) {
              var i = t[0];
              if (i[0] <= e && e <= i[1]) return 'active';
            } else for (var n = 0, a = t.length; n < a; n++) if (t[n][0] <= e && e <= t[n][1]) return 'active';
            return 'inactive';
          },
        });
      n.merge(c.prototype, l),
        r(
          'parallel',
          c,
          function(e, t) {
            return t.type || (t.data ? 'category' : 'value');
          },
          {
            type: 'value',
            dim: null,
            areaSelectStyle: {
              width: 20,
              borderWidth: 1,
              borderColor: 'rgba(160,197,232)',
              color: 'rgba(160,197,232)',
              opacity: 0.3,
            },
            realtime: !0,
            z: 10,
          },
        ),
        (e.exports = c);
    },
    '4Feb': function(e, t, i) {
      i('Tghj');
      var n = i('bYtY'),
        a = i('IwbS'),
        o = i('x3X8').getDefaultLabel,
        r = i('MwEJ'),
        s = i('nVfU').getLayoutOnAxis,
        l = i('gPAo'),
        c = i('T4UG'),
        u = i('6Ic6'),
        h = i('qj72'),
        d = i('ANjR'),
        p = i('MHtr'),
        g = i('6usn'),
        f = i('Rx6q'),
        m = ['itemStyle'],
        v = ['emphasis', 'itemStyle'],
        y = ['label'],
        x = ['emphasis', 'label'],
        _ = 'e\0\0',
        b = { cartesian2d: h, geo: d, singleAxis: p, polar: g, calendar: f };
      function S(e, t, i, n, a) {
        null == i[e] || a || ((t[e] = i[e]), (i[e] = n[e]));
      }
      function w(e, t, i, r) {
        var l = e.get('renderItem'),
          c = e.coordinateSystem,
          u = {};
        c && (u = c.prepareCustoms ? c.prepareCustoms() : b[c.type](c));
        var h,
          d,
          p,
          g,
          f,
          _ = n.defaults(
            {
              getWidth: r.getWidth,
              getHeight: r.getHeight,
              getZr: r.getZr,
              getDevicePixelRatio: r.getDevicePixelRatio,
              value: function(e, i) {
                return null == i && (i = h), t.get(t.getDimension(e || 0), i);
              },
              style: function(i, r) {
                null == r && (r = h), I(r);
                var s = d.getModel(m).getItemStyle();
                null != f && (s.fill = f);
                var l = t.getItemVisual(r, 'opacity');
                return (
                  null != l && (s.opacity = l),
                  a.setTextStyle(s, p, null, { autoColor: f, isRectText: !0 }),
                  (s.text = p.getShallow('show') ? n.retrieve2(e.getFormattedLabel(r, 'normal'), o(t, r)) : null),
                  i && n.extend(s, i),
                  s
                );
              },
              styleEmphasis: function(i, r) {
                null == r && (r = h), I(r);
                var s = d.getModel(v).getItemStyle();
                return (
                  a.setTextStyle(s, g, null, { isRectText: !0 }, !0),
                  (s.text = g.getShallow('show')
                    ? n.retrieve3(e.getFormattedLabel(r, 'emphasis'), e.getFormattedLabel(r, 'normal'), o(t, r))
                    : null),
                  i && n.extend(s, i),
                  s
                );
              },
              visual: function(e, i) {
                return null == i && (i = h), t.getItemVisual(i, e);
              },
              barLayout: function(e) {
                if (c.getBaseAxis) {
                  var t = c.getBaseAxis();
                  return s(n.defaults({ axis: t }, e), r);
                }
              },
              currentSeriesIndices: function() {
                return i.getCurrentSeriesIndices();
              },
              font: function(e) {
                return a.getFont(e, i);
              },
            },
            u.api || {},
          ),
          S = {
            context: {},
            seriesId: e.id,
            seriesName: e.name,
            seriesIndex: e.seriesIndex,
            coordSys: u.coordSys,
            dataInsideLength: t.count(),
            encode: M(e.getData()),
          },
          w = !0;
        return function(e, i) {
          return (
            (h = e),
            (w = !0),
            l && l(n.defaults({ dataIndexInside: e, dataIndex: t.getRawIndex(e), actionType: i ? i.type : null }, S), _)
          );
        };
        function I(e) {
          null == e && (e = h),
            w &&
              ((d = t.getItemModel(e)),
              (p = d.getModel(y)),
              (g = d.getModel(x)),
              (f = t.getItemVisual(e, 'color')),
              (w = !1));
        }
      }
      function M(e) {
        var t = {};
        return (
          n.each(e.dimensions, function(i, n) {
            var a = e.getDimensionInfo(i);
            if (!a.isExtraCoord) {
              var o = a.coordDim;
              (t[o] = t[o] || [])[a.coordDimIndex] = n;
            }
          }),
          t
        );
      }
      function I(e, t, i, n, a, o) {
        return (e = A(e, t, i, n, a, o, !0)) && o.setItemGraphicEl(t, e), e;
      }
      function A(e, t, i, o, r, s, c) {
        var u,
          h = !i,
          d = (i = i || {}).type,
          p = i.shape,
          g = i.style;
        if (
          (e &&
            (h ||
              (null != d && d !== e.__customGraphicType) ||
              ('path' === d &&
                (u = p) &&
                (u.hasOwnProperty('pathData') || u.hasOwnProperty('d')) &&
                L(p) !== e.__customPathData) ||
              ('image' === d && C(g, 'image') && g.image !== e.__customImagePath) ||
              ('text' === d && C(p, 'text') && g.text !== e.__customText)) &&
            (r.remove(e), (e = null)),
          !h)
        ) {
          var f = !e;
          return (
            !e &&
              (e = (function(e) {
                var t,
                  i = e.type;
                if ('path' === i) {
                  var n = e.shape,
                    o =
                      null != n.width && null != n.height
                        ? { x: n.x || 0, y: n.y || 0, width: n.width, height: n.height }
                        : null,
                    r = L(n);
                  (t = a.makePath(r, null, o, n.layout || 'center')).__customPathData = r;
                } else
                  'image' === i
                    ? ((t = new a.Image({})).__customImagePath = e.style.image)
                    : 'text' === i
                    ? ((t = new a.Text({})).__customText = e.style.text)
                    : (t = new (0, a[i.charAt(0).toUpperCase() + i.slice(1)])());
                return (t.__customGraphicType = i), (t.name = e.name), t;
              })(i)),
            (function(e, t, i, o, r, s, l) {
              var c = {},
                u = i.style || {};
              if (
                (i.shape && (c.shape = n.clone(i.shape)),
                i.position && (c.position = i.position.slice()),
                i.scale && (c.scale = i.scale.slice()),
                i.origin && (c.origin = i.origin.slice()),
                i.rotation && (c.rotation = i.rotation),
                'image' === e.type && i.style)
              ) {
                var h = (c.style = {});
                n.each(['x', 'y', 'width', 'height'], function(t) {
                  S(t, h, u, e.style, s);
                });
              }
              if (
                ('text' === e.type &&
                  i.style &&
                  ((h = c.style = {}),
                  n.each(['x', 'y'], function(t) {
                    S(t, h, u, e.style, s);
                  }),
                  !u.hasOwnProperty('textFill') && u.fill && (u.textFill = u.fill),
                  !u.hasOwnProperty('textStroke') && u.stroke && (u.textStroke = u.stroke)),
                'group' !== e.type && (e.useStyle(u), s))
              ) {
                e.style.opacity = 0;
                var d = u.opacity;
                null == d && (d = 1), a.initProps(e, { style: { opacity: d } }, o, t);
              }
              s ? e.attr(c) : a.updateProps(e, c, o, t),
                i.hasOwnProperty('z2') && e.attr('z2', i.z2 || 0),
                i.hasOwnProperty('silent') && e.attr('silent', i.silent),
                i.hasOwnProperty('invisible') && e.attr('invisible', i.invisible),
                i.hasOwnProperty('ignore') && e.attr('ignore', i.ignore),
                i.hasOwnProperty('info') && e.attr('info', i.info);
              var p = i.styleEmphasis,
                g = !1 === p;
              (e.__cusHasEmphStl && null == p) ||
                (!e.__cusHasEmphStl && g) ||
                (a.setElementHoverStyle(e, p), (e.__cusHasEmphStl = !g)),
                l && a.setAsHoverStyleTrigger(e, !g);
            })(e, t, i, o, 0, f, c),
            'group' === d &&
              (function(e, t, i, n, a) {
                var o = i.children,
                  r = o ? o.length : 0,
                  s = i.$mergeChildren,
                  c = 'byName' === s || i.diffChildrenByName,
                  u = !1 === s;
                if (r || c || u) {
                  if (c)
                    return (
                      (h = {
                        oldChildren: e.children() || [],
                        newChildren: o || [],
                        dataIndex: t,
                        animatableModel: n,
                        group: e,
                        data: a,
                      }),
                      void new l(h.oldChildren, h.newChildren, D, D, h)
                        .add(T)
                        .update(T)
                        .remove(P)
                        .execute()
                    );
                  var h;
                  u && e.removeAll();
                  for (var d = 0; d < r; d++) o[d] && A(e.childAt(d), t, o[d], n, e, a);
                }
              })(e, t, i, o, s),
            r.add(e),
            e
          );
        }
      }
      function D(e, t) {
        var i = e && e.name;
        return null != i ? i : _ + t;
      }
      function T(e, t) {
        var i = this.context;
        A(
          null != t ? i.oldChildren[t] : null,
          i.dataIndex,
          null != e ? i.newChildren[e] : null,
          i.animatableModel,
          i.group,
          i.data,
        );
      }
      function P(e) {
        var t = this.context,
          i = t.oldChildren[e];
        i && t.group.remove(i);
      }
      function L(e) {
        return e && (e.pathData || e.d);
      }
      function C(e, t) {
        return e && e.hasOwnProperty(t);
      }
      c.extend({
        type: 'series.custom',
        dependencies: ['grid', 'polar', 'geo', 'singleAxis', 'calendar'],
        defaultOption: { coordinateSystem: 'cartesian2d', zlevel: 0, z: 2, legendHoverLink: !0, useTransform: !0 },
        getInitialData: function(e, t) {
          return r(this.getSource(), this);
        },
        getDataParams: function(e, t, i) {
          var n = c.prototype.getDataParams.apply(this, arguments);
          return i && (n.info = i.info), n;
        },
      }),
        u.extend({
          type: 'custom',
          _data: null,
          render: function(e, t, i, n) {
            var a = this._data,
              o = e.getData(),
              r = this.group,
              s = w(e, o, t, i);
            o
              .diff(a)
              .add(function(t) {
                I(null, t, s(t, n), e, r, o);
              })
              .update(function(t, i) {
                I(a.getItemGraphicEl(i), t, s(t, n), e, r, o);
              })
              .remove(function(e) {
                var t = a.getItemGraphicEl(e);
                t && r.remove(t);
              })
              .execute(),
              (this._data = o);
          },
          incrementalPrepareRender: function(e, t, i) {
            this.group.removeAll(), (this._data = null);
          },
          incrementalRender: function(e, t, i, n, a) {
            var o = t.getData(),
              r = w(t, o, i, n);
            function s(e) {
              e.isGroup || ((e.incremental = !0), (e.useHoverLayer = !0));
            }
            for (var l = e.start; l < e.end; l++) I(null, l, r(l, a), t, this.group, o).traverse(s);
          },
          dispose: n.noop,
          filterForExposedEvent: function(e, t, i, n) {
            var a = t.element;
            if (null == a || i.name === a) return !0;
            for (; (i = i.parent) && i !== this.group; ) if (i.name === a) return !0;
            return !1;
          },
        });
    },
    '56rv': function(e, t, i) {
      var n = i('IwbS'),
        a = i('x3X8').getDefaultLabel;
      function o(e, t) {
        'outside' === e.textPosition && (e.textPosition = t);
      }
      t.setLabel = function(e, t, i, r, s, l, c) {
        var u = i.getModel('label'),
          h = i.getModel('emphasis.label');
        n.setLabelStyle(e, t, u, h, {
          labelFetcher: s,
          labelDataIndex: l,
          defaultText: a(s.getData(), l),
          isRectText: !0,
          autoColor: r,
        }),
          o(e),
          o(t);
      };
    },
    '5GhG': function(e, t, i) {
      var n = i('5GtS'),
        a = i('bYtY'),
        o = i('L0Ub').getDimensionTypeByAxis;
      t.seriesModelMixin = {
        _baseAxisDim: null,
        getInitialData: function(e, t) {
          var i,
            r,
            s = t.getComponent('xAxis', this.get('xAxisIndex')),
            l = t.getComponent('yAxis', this.get('yAxisIndex')),
            c = s.get('type'),
            u = l.get('type');
          'category' === c
            ? ((e.layout = 'horizontal'), (i = s.getOrdinalMeta()), (r = !0))
            : 'category' === u
            ? ((e.layout = 'vertical'), (i = l.getOrdinalMeta()), (r = !0))
            : (e.layout = e.layout || 'horizontal');
          var h = ['x', 'y'],
            d = 'horizontal' === e.layout ? 0 : 1,
            p = (this._baseAxisDim = h[d]),
            g = h[1 - d],
            f = [s, l],
            m = f[d].get('type'),
            v = f[1 - d].get('type'),
            y = e.data;
          if (y && r) {
            var x = [];
            a.each(y, function(e, t) {
              var i;
              e.value && a.isArray(e.value)
                ? ((i = e.value.slice()), e.value.unshift(t))
                : a.isArray(e)
                ? ((i = e.slice()), e.unshift(t))
                : (i = e),
                x.push(i);
            }),
              (e.data = x);
          }
          var _ = this.defaultValueDimensions;
          return n(this, {
            coordDimensions: [
              { name: p, type: o(m), ordinalMeta: i, otherDims: { tooltip: !1, itemName: 0 }, dimsDef: ['base'] },
              { name: g, type: o(v), dimsDef: _.slice() },
            ],
            dimensionsCount: _.length + 1,
          });
        },
        getBaseAxis: function() {
          var e = this._baseAxisDim;
          return this.ecModel.getComponent(e + 'Axis', this.get(e + 'AxisIndex')).axis;
        },
      };
    },
    '6/nd': function(e, t, i) {
      i('ProS').registerAction('legendScroll', 'legendscroll', function(e, t) {
        var i = e.scrollDataIndex;
        null != i &&
          t.eachComponent({ mainType: 'legend', subType: 'scroll', query: e }, function(e) {
            e.setScrollDataIndex(i);
          });
      });
    },
    '6fms': function(e, t, i) {
      var n = i('SUKs'),
        a = i('06Qe'),
        o = i('bYtY').each;
      function r(e) {
        return parseInt(e, 10);
      }
      function s(e, t) {
        a.initVML(), (this.root = e), (this.storage = t);
        var i = document.createElement('div'),
          n = document.createElement('div');
        (i.style.cssText = 'display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;'),
          (n.style.cssText = 'position:absolute;left:0;top:0;'),
          e.appendChild(i),
          (this._vmlRoot = n),
          (this._vmlViewport = i),
          this.resize();
        var o = t.delFromStorage,
          r = t.addToStorage;
        (t.delFromStorage = function(e) {
          o.call(t, e), e && e.onRemove && e.onRemove(n);
        }),
          (t.addToStorage = function(e) {
            e.onAdd && e.onAdd(n), r.call(t, e);
          }),
          (this._firstPaint = !0);
      }
      (s.prototype = {
        constructor: s,
        getType: function() {
          return 'vml';
        },
        getViewportRoot: function() {
          return this._vmlViewport;
        },
        getViewportRootOffset: function() {
          var e = this.getViewportRoot();
          if (e) return { offsetLeft: e.offsetLeft || 0, offsetTop: e.offsetTop || 0 };
        },
        refresh: function() {
          var e = this.storage.getDisplayList(!0, !0);
          this._paintList(e);
        },
        _paintList: function(e) {
          for (var t = this._vmlRoot, i = 0; i < e.length; i++) {
            var n = e[i];
            n.invisible || n.ignore
              ? (n.__alreadyNotVisible || n.onRemove(t), (n.__alreadyNotVisible = !0))
              : (n.__alreadyNotVisible && n.onAdd(t),
                (n.__alreadyNotVisible = !1),
                n.__dirty &&
                  (n.beforeBrush && n.beforeBrush(),
                  (n.brushVML || n.brush).call(n, t),
                  n.afterBrush && n.afterBrush())),
              (n.__dirty = !1);
          }
          this._firstPaint && (this._vmlViewport.appendChild(t), (this._firstPaint = !1));
        },
        resize: function(e, t) {
          if (
            ((e = null == e ? this._getWidth() : e),
            (t = null == t ? this._getHeight() : t),
            this._width !== e || this._height !== t)
          ) {
            (this._width = e), (this._height = t);
            var i = this._vmlViewport.style;
            (i.width = e + 'px'), (i.height = t + 'px');
          }
        },
        dispose: function() {
          (this.root.innerHTML = ''), (this._vmlRoot = this._vmlViewport = this.storage = null);
        },
        getWidth: function() {
          return this._width;
        },
        getHeight: function() {
          return this._height;
        },
        clear: function() {
          this._vmlViewport && this.root.removeChild(this._vmlViewport);
        },
        _getWidth: function() {
          var e = this.root,
            t = e.currentStyle;
          return ((e.clientWidth || r(t.width)) - r(t.paddingLeft) - r(t.paddingRight)) | 0;
        },
        _getHeight: function() {
          var e = this.root,
            t = e.currentStyle;
          return ((e.clientHeight || r(t.height)) - r(t.paddingTop) - r(t.paddingBottom)) | 0;
        },
      }),
        o(
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
          function(e) {
            var t;
            s.prototype[e] =
              ((t = e),
              function() {
                n('In IE8.0 VML mode painter not support method "' + t + '"');
              });
          },
        ),
        (e.exports = s);
    },
    '6r85': function(e, t, i) {
      var n = i('bYtY');
      e.exports = function(e) {
        e &&
          n.isArray(e.series) &&
          n.each(e.series, function(e) {
            n.isObject(e) && 'k' === e.type && (e.type = 'candlestick');
          });
      };
    },
    '6uqw': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('ItGF'),
        r = i('YOMW'),
        s = i('XxSj'),
        l = i('K4ya'),
        c = i('4NO4'),
        u = i('OELB'),
        h = s.mapVisual,
        d = s.eachVisual,
        p = a.isArray,
        g = a.each,
        f = u.asc,
        m = u.linearMap,
        v = a.noop,
        y = n.extendComponentModel({
          type: 'visualMap',
          dependencies: ['series'],
          stateList: ['inRange', 'outOfRange'],
          replacableOptionKeys: ['inRange', 'outOfRange', 'target', 'controller', 'color'],
          dataBound: [-1 / 0, 1 / 0],
          layoutMode: { type: 'box', ignoreSize: !0 },
          defaultOption: {
            show: !0,
            zlevel: 0,
            z: 4,
            seriesIndex: 'all',
            min: 0,
            max: 200,
            dimension: null,
            inRange: null,
            outOfRange: null,
            left: 0,
            right: null,
            top: null,
            bottom: 0,
            itemWidth: null,
            itemHeight: null,
            inverse: !1,
            orient: 'vertical',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',
            contentColor: '#5793f3',
            inactiveColor: '#aaa',
            borderWidth: 0,
            padding: 5,
            textGap: 10,
            precision: 0,
            color: null,
            formatter: null,
            text: null,
            textStyle: { color: '#333' },
          },
          init: function(e, t, i) {
            (this.targetVisuals = {}), (this.controllerVisuals = {}), this.mergeDefaultAndTheme(e, i);
          },
          optionUpdated: function(e, t) {
            var i = this.option;
            o.canvasSupported || (i.realtime = !1),
              !t && l.replaceVisualOption(i, e, this.replacableOptionKeys),
              (this.textStyleModel = this.getModel('textStyle')),
              this.resetItemSize(),
              this.completeVisualOption();
          },
          resetVisual: function(e) {
            var t = this.stateList;
            (e = a.bind(e, this)),
              (this.controllerVisuals = l.createVisualMappings(this.option.controller, t, e)),
              (this.targetVisuals = l.createVisualMappings(this.option.target, t, e));
          },
          getTargetSeriesIndices: function() {
            var e = this.option.seriesIndex,
              t = [];
            return (
              null == e || 'all' === e
                ? this.ecModel.eachSeries(function(e, i) {
                    t.push(i);
                  })
                : (t = c.normalizeToArray(e)),
              t
            );
          },
          eachTargetSeries: function(e, t) {
            a.each(
              this.getTargetSeriesIndices(),
              function(i) {
                e.call(t, this.ecModel.getSeriesByIndex(i));
              },
              this,
            );
          },
          isTargetSeries: function(e) {
            var t = !1;
            return (
              this.eachTargetSeries(function(i) {
                i === e && (t = !0);
              }),
              t
            );
          },
          formatValueText: function(e, t, i) {
            var n,
              o,
              r = this.option,
              s = r.precision,
              l = this.dataBound,
              c = r.formatter;
            return (
              (i = i || ['<', '>']),
              a.isArray(e) && ((e = e.slice()), (n = !0)),
              (o = t ? e : n ? [u(e[0]), u(e[1])] : u(e)),
              a.isString(c)
                ? c.replace('{value}', n ? o[0] : o).replace('{value2}', n ? o[1] : o)
                : a.isFunction(c)
                ? n
                  ? c(e[0], e[1])
                  : c(e)
                : n
                ? e[0] === l[0]
                  ? i[0] + ' ' + o[1]
                  : e[1] === l[1]
                  ? i[1] + ' ' + o[0]
                  : o[0] + ' - ' + o[1]
                : o
            );
            function u(e) {
              return e === l[0] ? 'min' : e === l[1] ? 'max' : (+e).toFixed(Math.min(s, 20));
            }
          },
          resetExtent: function() {
            var e = this.option,
              t = f([e.min, e.max]);
            this._dataExtent = t;
          },
          getDataDimension: function(e) {
            var t = this.option.dimension;
            if (null != t || e.dimensions.length) {
              if (null != t) return e.getDimension(t);
              for (var i = e.dimensions, n = i.length - 1; n >= 0; n--) {
                var a = i[n];
                if (!e.getDimensionInfo(a).isCalculationCoord) return a;
              }
            }
          },
          getExtent: function() {
            return this._dataExtent.slice();
          },
          completeVisualOption: function() {
            var e = this.ecModel,
              t = this.option,
              i = { inRange: t.inRange, outOfRange: t.outOfRange },
              n = t.target || (t.target = {}),
              o = t.controller || (t.controller = {});
            a.merge(n, i), a.merge(o, i);
            var l = this.isCategory();
            function c(i) {
              p(t.color) && !i.inRange && (i.inRange = { color: t.color.slice().reverse() }),
                (i.inRange = i.inRange || { color: e.get('gradientColor') }),
                g(
                  this.stateList,
                  function(e) {
                    var t = i[e];
                    if (a.isString(t)) {
                      var n = r.get(t, 'active', l);
                      n ? ((i[e] = {}), (i[e][t] = n)) : delete i[e];
                    }
                  },
                  this,
                );
            }
            c.call(this, n),
              c.call(this, o),
              function(e, t, i) {
                var n = e[t],
                  a = e[i];
                n &&
                  !a &&
                  ((a = e[i] = {}),
                  g(n, function(e, t) {
                    if (s.isValidType(t)) {
                      var i = r.get(t, 'inactive', l);
                      null != i &&
                        ((a[t] = i),
                        'color' !== t ||
                          a.hasOwnProperty('opacity') ||
                          a.hasOwnProperty('colorAlpha') ||
                          (a.opacity = [0, 0]));
                    }
                  }));
              }.call(this, n, 'inRange', 'outOfRange'),
              function(e) {
                var t = (e.inRange || {}).symbol || (e.outOfRange || {}).symbol,
                  i = (e.inRange || {}).symbolSize || (e.outOfRange || {}).symbolSize,
                  n = this.get('inactiveColor');
                g(
                  this.stateList,
                  function(o) {
                    var r = this.itemSize,
                      s = e[o];
                    s || (s = e[o] = { color: l ? n : [n] }),
                      null == s.symbol && (s.symbol = (t && a.clone(t)) || (l ? 'roundRect' : ['roundRect'])),
                      null == s.symbolSize && (s.symbolSize = (i && a.clone(i)) || (l ? r[0] : [r[0], r[0]])),
                      (s.symbol = h(s.symbol, function(e) {
                        return 'none' === e || 'square' === e ? 'roundRect' : e;
                      }));
                    var c = s.symbolSize;
                    if (null != c) {
                      var u = -1 / 0;
                      d(c, function(e) {
                        e > u && (u = e);
                      }),
                        (s.symbolSize = h(c, function(e) {
                          return m(e, [0, u], [0, r[0]], !0);
                        }));
                    }
                  },
                  this,
                );
              }.call(this, o);
          },
          resetItemSize: function() {
            this.itemSize = [parseFloat(this.get('itemWidth')), parseFloat(this.get('itemHeight'))];
          },
          isCategory: function() {
            return !!this.option.categories;
          },
          setSelected: v,
          getValueState: v,
          getVisualMeta: v,
        });
      e.exports = y;
    },
    '6usn': function(e, t, i) {
      var n = i('bYtY');
      function a(e, t) {
        return n.map(
          ['Radius', 'Angle'],
          function(i, n) {
            var a = this['get' + i + 'Axis'](),
              o = t[n],
              r = e[n] / 2,
              s = 'dataTo' + i,
              l = 'category' === a.type ? a.getBandWidth() : Math.abs(a[s](o - r) - a[s](o + r));
            return 'Angle' === i && (l = (l * Math.PI) / 180), l;
          },
          this,
        );
      }
      e.exports = function(e) {
        var t = e.getRadiusAxis(),
          i = e.getAngleAxis(),
          o = t.getExtent();
        return (
          o[0] > o[1] && o.reverse(),
          {
            coordSys: { type: 'polar', cx: e.cx, cy: e.cy, r: o[1], r0: o[0] },
            api: {
              coord: n.bind(function(n) {
                var a = t.dataToRadius(n[0]),
                  o = i.dataToAngle(n[1]),
                  r = e.coordToPoint([a, o]);
                return r.push(a, (o * Math.PI) / 180), r;
              }),
              size: n.bind(a, e),
            },
          }
        );
      };
    },
    '7Phj': function(e, t, i) {
      var n = i('bYtY'),
        a = i('OELB').parsePercent,
        o = n.each;
      e.exports = function(e) {
        var t = (function(e) {
          var t = [],
            i = [];
          return (
            e.eachSeriesByType('boxplot', function(e) {
              var a = e.getBaseAxis(),
                o = n.indexOf(i, a);
              o < 0 && ((i[(o = i.length)] = a), (t[o] = { axis: a, seriesModels: [] })), t[o].seriesModels.push(e);
            }),
            t
          );
        })(e);
        o(t, function(e) {
          var t = e.seriesModels;
          t.length &&
            ((function(e) {
              var t,
                i,
                r = e.axis,
                s = e.seriesModels,
                l = s.length,
                c = (e.boxWidthList = []),
                u = (e.boxOffsetList = []),
                h = [];
              if ('category' === r.type) i = r.getBandWidth();
              else {
                var d = 0;
                o(s, function(e) {
                  d = Math.max(d, e.getData().count());
                }),
                  (t = r.getExtent()),
                  Math.abs(t[1] - t[0]);
              }
              o(s, function(e) {
                var t = e.get('boxWidth');
                n.isArray(t) || (t = [t, t]), h.push([a(t[0], i) || 0, a(t[1], i) || 0]);
              });
              var p = 0.8 * i - 2,
                g = (p / l) * 0.3,
                f = (p - g * (l - 1)) / l,
                m = f / 2 - p / 2;
              o(s, function(e, t) {
                u.push(m), (m += g + f), c.push(Math.min(Math.max(f, h[t][0]), h[t][1]));
              });
            })(e),
            o(t, function(t, i) {
              !(function(e, t, i) {
                var n = e.coordinateSystem,
                  a = e.getData(),
                  o = i / 2,
                  r = 'horizontal' === e.get('layout') ? 0 : 1,
                  s = 1 - r,
                  l = ['x', 'y'],
                  c = a.mapDimension(l[r]),
                  u = a.mapDimension(l[s], !0);
                if (!(null == c || u.length < 5))
                  for (var h = 0; h < a.count(); h++) {
                    var d = a.get(c, h),
                      p = x(d, u[2], h),
                      g = x(d, u[0], h),
                      f = x(d, u[1], h),
                      m = x(d, u[3], h),
                      v = x(d, u[4], h),
                      y = [];
                    _(y, f, 0),
                      _(y, m, 1),
                      y.push(g, f, v, m),
                      b(y, g),
                      b(y, v),
                      b(y, p),
                      a.setItemLayout(h, { initBaseline: p[s], ends: y });
                  }
                function x(e, i, o) {
                  var l,
                    c = a.get(i, o),
                    u = [];
                  return (
                    (u[r] = e),
                    (u[s] = c),
                    isNaN(e) || isNaN(c) ? (l = [NaN, NaN]) : ((l = n.dataToPoint(u))[r] += t),
                    l
                  );
                }
                function _(e, t, i) {
                  var n = t.slice(),
                    a = t.slice();
                  (n[r] += o), (a[r] -= o), i ? e.push(n, a) : e.push(a, n);
                }
                function b(e, t) {
                  var i = t.slice(),
                    n = t.slice();
                  (i[r] -= o), (n[r] += o), e.push(i, n);
                }
              })(t, e.boxOffsetList[i], e.boxWidthList[i]);
            }));
        });
      };
    },
    '7a+S': function(e, t, i) {
      var n = i('bYtY'),
        a = i('bLfw'),
        o = i('YXkt'),
        r = i('4NO4'),
        s = a.extend({
          type: 'timeline',
          layoutMode: 'box',
          defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            axisType: 'time',
            realtime: !0,
            left: '20%',
            top: null,
            right: '20%',
            bottom: 0,
            width: null,
            height: 40,
            padding: 5,
            controlPosition: 'left',
            autoPlay: !1,
            rewind: !1,
            loop: !0,
            playInterval: 2e3,
            currentIndex: 0,
            itemStyle: {},
            label: { color: '#000' },
            data: [],
          },
          init: function(e, t, i) {
            this.mergeDefaultAndTheme(e, i), this._initData();
          },
          mergeOption: function(e) {
            s.superApply(this, 'mergeOption', arguments), this._initData();
          },
          setCurrentIndex: function(e) {
            null == e && (e = this.option.currentIndex);
            var t = this._data.count();
            this.option.loop ? (e = ((e % t) + t) % t) : (e >= t && (e = t - 1), e < 0 && (e = 0)),
              (this.option.currentIndex = e);
          },
          getCurrentIndex: function() {
            return this.option.currentIndex;
          },
          isIndexMax: function() {
            return this.getCurrentIndex() >= this._data.count() - 1;
          },
          setPlayState: function(e) {
            this.option.autoPlay = !!e;
          },
          getPlayState: function() {
            return !!this.option.autoPlay;
          },
          _initData: function() {
            var e = this.option,
              t = e.data || [],
              i = e.axisType,
              a = (this._names = []);
            if ('category' === i) {
              var s = [];
              n.each(t, function(e, t) {
                var i,
                  o = r.getDataItemValue(e);
                n.isObject(e) ? ((i = n.clone(e)).value = t) : (i = t),
                  s.push(i),
                  n.isString(o) || (null != o && !isNaN(o)) || (o = ''),
                  a.push(o + '');
              }),
                (t = s);
            }
            (this._data = new o(
              [{ name: 'value', type: { category: 'ordinal', time: 'time' }[i] || 'number' }],
              this,
            )).initData(t, a);
          },
          getData: function() {
            return this._data;
          },
          getCategories: function() {
            if ('category' === this.get('axisType')) return this._names.slice();
          },
        });
      e.exports = s;
    },
    '7bkD': function(e, t, i) {
      var n = i('bYtY');
      t.layout = function(e, t) {
        t = t || {};
        var i = e.axis,
          a = {},
          o = i.position,
          r = i.orient,
          s = e.coordinateSystem.getRect(),
          l = [s.x, s.x + s.width, s.y, s.y + s.height],
          c = { horizontal: { top: l[2], bottom: l[3] }, vertical: { left: l[0], right: l[1] } };
        (a.position = ['vertical' === r ? c.vertical[o] : l[0], 'horizontal' === r ? c.horizontal[o] : l[3]]),
          (a.rotation = (Math.PI / 2) * { horizontal: 0, vertical: 1 }[r]),
          (a.labelDirection = a.tickDirection = a.nameDirection = { top: -1, bottom: 1, right: 1, left: -1 }[o]),
          e.get('axisTick.inside') && (a.tickDirection = -a.tickDirection),
          n.retrieve(t.labelInside, e.get('axisLabel.inside')) && (a.labelDirection = -a.labelDirection);
        var u = t.rotate;
        return null == u && (u = e.get('axisLabel.rotate')), (a.labelRotation = 'top' === o ? -u : u), (a.z2 = 1), a;
      };
    },
    '7mYs': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('IwbS'),
        r = i('7aKB'),
        s = i('OELB'),
        l = {
          EN: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          CN: [
            '\u4e00\u6708',
            '\u4e8c\u6708',
            '\u4e09\u6708',
            '\u56db\u6708',
            '\u4e94\u6708',
            '\u516d\u6708',
            '\u4e03\u6708',
            '\u516b\u6708',
            '\u4e5d\u6708',
            '\u5341\u6708',
            '\u5341\u4e00\u6708',
            '\u5341\u4e8c\u6708',
          ],
        },
        c = {
          EN: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          CN: ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'],
        },
        u = n.extendComponentView({
          type: 'calendar',
          _tlpoints: null,
          _blpoints: null,
          _firstDayOfMonth: null,
          _firstDayPoints: null,
          render: function(e, t, i) {
            var n = this.group;
            n.removeAll();
            var a = e.coordinateSystem,
              o = a.getRangeInfo(),
              r = a.getOrient();
            this._renderDayRect(e, o, n),
              this._renderLines(e, o, r, n),
              this._renderYearText(e, o, r, n),
              this._renderMonthText(e, r, n),
              this._renderWeekText(e, o, r, n);
          },
          _renderDayRect: function(e, t, i) {
            for (
              var n = e.coordinateSystem,
                a = e.getModel('itemStyle').getItemStyle(),
                r = n.getCellWidth(),
                s = n.getCellHeight(),
                l = t.start.time;
              l <= t.end.time;
              l = n.getNextNDay(l, 1).time
            ) {
              var c = n.dataToRect([l], !1).tl,
                u = new o.Rect({ shape: { x: c[0], y: c[1], width: r, height: s }, cursor: 'default', style: a });
              i.add(u);
            }
          },
          _renderLines: function(e, t, i, n) {
            var a = this,
              o = e.coordinateSystem,
              r = e.getModel('splitLine.lineStyle').getLineStyle(),
              s = e.get('splitLine.show'),
              l = r.lineWidth;
            (this._tlpoints = []), (this._blpoints = []), (this._firstDayOfMonth = []), (this._firstDayPoints = []);
            for (var c = t.start, u = 0; c.time <= t.end.time; u++) {
              d(c.formatedDate), 0 === u && (c = o.getDateInfo(t.start.y + '-' + t.start.m));
              var h = c.date;
              h.setMonth(h.getMonth() + 1), (c = o.getDateInfo(h));
            }
            function d(t) {
              a._firstDayOfMonth.push(o.getDateInfo(t)), a._firstDayPoints.push(o.dataToRect([t], !1).tl);
              var l = a._getLinePointsOfOneWeek(e, t, i);
              a._tlpoints.push(l[0]), a._blpoints.push(l[l.length - 1]), s && a._drawSplitline(l, r, n);
            }
            d(o.getNextNDay(t.end.time, 1).formatedDate),
              s && this._drawSplitline(a._getEdgesPoints(a._tlpoints, l, i), r, n),
              s && this._drawSplitline(a._getEdgesPoints(a._blpoints, l, i), r, n);
          },
          _getEdgesPoints: function(e, t, i) {
            var n = [e[0].slice(), e[e.length - 1].slice()],
              a = 'horizontal' === i ? 0 : 1;
            return (n[0][a] = n[0][a] - t / 2), (n[1][a] = n[1][a] + t / 2), n;
          },
          _drawSplitline: function(e, t, i) {
            var n = new o.Polyline({ z2: 20, shape: { points: e }, style: t });
            i.add(n);
          },
          _getLinePointsOfOneWeek: function(e, t, i) {
            var n = e.coordinateSystem;
            t = n.getDateInfo(t);
            for (var a = [], o = 0; o < 7; o++) {
              var r = n.getNextNDay(t.time, o),
                s = n.dataToRect([r.time], !1);
              (a[2 * r.day] = s.tl), (a[2 * r.day + 1] = s['horizontal' === i ? 'bl' : 'tr']);
            }
            return a;
          },
          _formatterLabel: function(e, t) {
            return 'string' == typeof e && e ? r.formatTplSimple(e, t) : 'function' == typeof e ? e(t) : t.nameMap;
          },
          _yearTextPositionControl: function(e, t, i, n, a) {
            t = t.slice();
            var o = ['center', 'bottom'];
            'bottom' === n
              ? ((t[1] += a), (o = ['center', 'top']))
              : 'left' === n
              ? (t[0] -= a)
              : 'right' === n
              ? ((t[0] += a), (o = ['center', 'top']))
              : (t[1] -= a);
            var r = 0;
            return (
              ('left' !== n && 'right' !== n) || (r = Math.PI / 2),
              { rotation: r, position: t, style: { textAlign: o[0], textVerticalAlign: o[1] } }
            );
          },
          _renderYearText: function(e, t, i, n) {
            var a = e.getModel('yearLabel');
            if (a.get('show')) {
              var r = a.get('margin'),
                s = a.get('position');
              s || (s = 'horizontal' !== i ? 'top' : 'left');
              var l = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]],
                c = (l[0][0] + l[1][0]) / 2,
                u = (l[0][1] + l[1][1]) / 2,
                h = 'horizontal' === i ? 0 : 1,
                d = { top: [c, l[h][1]], bottom: [c, l[1 - h][1]], left: [l[1 - h][0], u], right: [l[h][0], u] },
                p = t.start.y;
              +t.end.y > +t.start.y && (p = p + '-' + t.end.y);
              var g = a.get('formatter'),
                f = this._formatterLabel(g, { start: t.start.y, end: t.end.y, nameMap: p }),
                m = new o.Text({ z2: 30 });
              o.setTextStyle(m.style, a, { text: f }),
                m.attr(this._yearTextPositionControl(m, d[s], i, s, r)),
                n.add(m);
            }
          },
          _monthTextPositionControl: function(e, t, i, n, a) {
            var o = 'left',
              r = 'top',
              s = e[0],
              l = e[1];
            return (
              'horizontal' === i
                ? ((l += a), t && (o = 'center'), 'start' === n && (r = 'bottom'))
                : ((s += a), t && (r = 'middle'), 'start' === n && (o = 'right')),
              { x: s, y: l, textAlign: o, textVerticalAlign: r }
            );
          },
          _renderMonthText: function(e, t, i) {
            var n = e.getModel('monthLabel');
            if (n.get('show')) {
              var r = n.get('nameMap'),
                s = n.get('margin'),
                c = n.get('position'),
                u = n.get('align'),
                h = [this._tlpoints, this._blpoints];
              a.isString(r) && (r = l[r.toUpperCase()] || []);
              var d = 'start' === c ? 0 : 1,
                p = 'horizontal' === t ? 0 : 1;
              s = 'start' === c ? -s : s;
              for (var g = 'center' === u, f = 0; f < h[d].length - 1; f++) {
                var m = h[d][f].slice(),
                  v = this._firstDayOfMonth[f];
                g && (m[p] = (this._firstDayPoints[f][p] + h[0][f + 1][p]) / 2);
                var y = n.get('formatter'),
                  x = r[+v.m - 1],
                  _ = { yyyy: v.y, yy: (v.y + '').slice(2), MM: v.m, M: +v.m, nameMap: x },
                  b = this._formatterLabel(y, _),
                  S = new o.Text({ z2: 30 });
                a.extend(o.setTextStyle(S.style, n, { text: b }), this._monthTextPositionControl(m, g, t, c, s)),
                  i.add(S);
              }
            }
          },
          _weekTextPositionControl: function(e, t, i, n, a) {
            var o = 'center',
              r = 'middle',
              s = e[0],
              l = e[1],
              c = 'start' === i;
            return (
              'horizontal' === t
                ? ((s = s + n + ((c ? 1 : -1) * a[0]) / 2), (o = c ? 'right' : 'left'))
                : ((l = l + n + ((c ? 1 : -1) * a[1]) / 2), (r = c ? 'bottom' : 'top')),
              { x: s, y: l, textAlign: o, textVerticalAlign: r }
            );
          },
          _renderWeekText: function(e, t, i, n) {
            var r = e.getModel('dayLabel');
            if (r.get('show')) {
              var l = e.coordinateSystem,
                u = r.get('position'),
                h = r.get('nameMap'),
                d = r.get('margin'),
                p = l.getFirstDayOfWeek();
              a.isString(h) && (h = c[h.toUpperCase()] || []);
              var g = l.getNextNDay(t.end.time, 7 - t.lweek).time,
                f = [l.getCellWidth(), l.getCellHeight()];
              (d = s.parsePercent(d, f['horizontal' === i ? 0 : 1])),
                'start' === u && ((g = l.getNextNDay(t.start.time, -(7 + t.fweek)).time), (d = -d));
              for (var m = 0; m < 7; m++) {
                var v,
                  y = l.getNextNDay(g, m),
                  x = l.dataToRect([y.time], !1).center;
                v = Math.abs((m + p) % 7);
                var _ = new o.Text({ z2: 30 });
                a.extend(o.setTextStyle(_.style, r, { text: h[v] }), this._weekTextPositionControl(x, i, u, d, f)),
                  n.add(_);
              }
            }
          },
        });
      e.exports = u;
    },
    '7pVf': function(e, t, i) {
      var n = i('ProS'),
        a = i('ZqQs');
      i('oE7X'), i('OUJF'), i('3X6L'), i('NH9N'), n.registerPreprocessor(a);
    },
    '7ph2': function(e, t) {
      function i(e) {
        return e instanceof Array || (e = [e, e]), e;
      }
      var n = 'lineStyle.opacity'.split('.');
      e.exports = {
        seriesType: 'lines',
        reset: function(e, t, a) {
          var o = i(e.get('symbol')),
            r = i(e.get('symbolSize')),
            s = e.getData();
          return (
            s.setVisual('fromSymbol', o && o[0]),
            s.setVisual('toSymbol', o && o[1]),
            s.setVisual('fromSymbolSize', r && r[0]),
            s.setVisual('toSymbolSize', r && r[1]),
            s.setVisual('opacity', e.get(n)),
            {
              dataEach: s.hasItemOption
                ? function(e, t) {
                    var a = e.getItemModel(t),
                      o = i(a.getShallow('symbol', !0)),
                      r = i(a.getShallow('symbolSize', !0)),
                      s = a.get(n);
                    o[0] && e.setItemVisual(t, 'fromSymbol', o[0]),
                      o[1] && e.setItemVisual(t, 'toSymbol', o[1]),
                      r[0] && e.setItemVisual(t, 'fromSymbolSize', r[0]),
                      r[1] && e.setItemVisual(t, 'toSymbolSize', r[1]),
                      e.setItemVisual(t, 'opacity', s);
                  }
                : null,
            }
          );
        },
      };
    },
    '7uqq': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('AUH6'),
        r = i('+TT/'),
        s = i('OELB'),
        l = i('W4dC'),
        c = i('7DRL');
      function u(e, t) {
        var i = e.get('boundingCoords');
        if (null != i) {
          var n = i[0],
            a = i[1];
          isNaN(n[0]) ||
            isNaN(n[1]) ||
            isNaN(a[0]) ||
            isNaN(a[1]) ||
            this.setBoundingRect(n[0], n[1], a[0] - n[0], a[1] - n[1]);
        }
        var o,
          l = this.getBoundingRect(),
          c = e.get('layoutCenter'),
          u = e.get('layoutSize'),
          h = t.getWidth(),
          d = t.getHeight(),
          p = (l.width / l.height) * this.aspectScale,
          g = !1;
        if (
          (c &&
            u &&
            ((c = [s.parsePercent(c[0], h), s.parsePercent(c[1], d)]),
            (u = s.parsePercent(u, Math.min(h, d))),
            isNaN(c[0]) || isNaN(c[1]) || isNaN(u) || (g = !0)),
          g)
        ) {
          var f = {};
          p > 1 ? ((f.width = u), (f.height = u / p)) : ((f.height = u), (f.width = u * p)),
            (f.y = c[1] - f.height / 2),
            (f.x = c[0] - f.width / 2);
        } else ((o = e.getBoxLayoutParams()).aspect = p), (f = r.getLayoutRect(o, { width: h, height: d }));
        this.setViewRect(f.x, f.y, f.width, f.height), this.setCenter(e.get('center')), this.setZoom(e.get('zoom'));
      }
      function h(e, t) {
        a.each(t.get('geoCoord'), function(t, i) {
          e.addGeoCoord(i, t);
        });
      }
      var d = {
        dimensions: o.prototype.dimensions,
        create: function(e, t) {
          var i = [];
          e.eachComponent('geo', function(e, n) {
            var a = e.get('map'),
              r = e.get('aspectScale'),
              s = !0,
              l = c.retrieveMap(a);
            l && l[0] && 'svg' === l[0].type ? (null == r && (r = 1), (s = !1)) : null == r && (r = 0.75);
            var d = new o(a + n, a, e.get('nameMap'), s);
            (d.aspectScale = r),
              (d.zoomLimit = e.get('scaleLimit')),
              i.push(d),
              h(d, e),
              (e.coordinateSystem = d),
              (d.model = e),
              (d.resize = u),
              d.resize(e, t);
          }),
            e.eachSeries(function(e) {
              if ('geo' === e.get('coordinateSystem')) {
                var t = e.get('geoIndex') || 0;
                e.coordinateSystem = i[t];
              }
            });
          var n = {};
          return (
            e.eachSeriesByType('map', function(e) {
              if (!e.getHostGeoModel()) {
                var t = e.getMapType();
                (n[t] = n[t] || []), n[t].push(e);
              }
            }),
            a.each(n, function(e, n) {
              var r = a.map(e, function(e) {
                  return e.get('nameMap');
                }),
                s = new o(n, n, a.mergeAll(r));
              (s.zoomLimit = a.retrieve.apply(
                null,
                a.map(e, function(e) {
                  return e.get('scaleLimit');
                }),
              )),
                i.push(s),
                (s.resize = u),
                (s.aspectScale = e[0].get('aspectScale')),
                s.resize(e[0], t),
                a.each(e, function(e) {
                  (e.coordinateSystem = s), h(s, e);
                });
            }),
            i
          );
        },
        getFilledRegions: function(e, t, i) {
          for (var n = (e || []).slice(), o = a.createHashMap(), r = 0; r < n.length; r++) o.set(n[r].name, n[r]);
          var s = l.load(t, i);
          return (
            a.each(s.regions, function(e) {
              var t = e.name;
              !o.get(t) && n.push({ name: t });
            }),
            n
          );
        },
      };
      n.registerCoordinateSystem('geo', d), (e.exports = d);
    },
    '8Th4': function(e, t, i) {
      var n = i('IwbS'),
        a = i('3LNs'),
        o = i('/y7N'),
        r = i('7bkD'),
        s = i('Znkb'),
        l = ['x', 'y'],
        c = ['width', 'height'],
        u = a.extend({
          makeElOption: function(e, t, i, n, a) {
            var s = i.axis,
              l = s.coordinateSystem,
              c = p(l, 1 - d(s)),
              u = l.dataToPoint(t)[0],
              g = n.get('type');
            if (g && 'none' !== g) {
              var f = o.buildElStyle(n),
                m = h[g](s, u, c, f);
              (m.style = f), (e.graphicKey = m.type), (e.pointer = m);
            }
            var v = r.layout(i);
            o.buildCartesianSingleLabelElOption(t, e, v, i, n, a);
          },
          getHandleTransform: function(e, t, i) {
            var n = r.layout(t, { labelInside: !1 });
            return (
              (n.labelMargin = i.get('handle.margin')),
              {
                position: o.getTransformedPosition(t.axis, e, n),
                rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0),
              }
            );
          },
          updateHandleTransform: function(e, t, i, n) {
            var a = i.axis,
              o = a.coordinateSystem,
              r = d(a),
              s = p(o, r),
              l = e.position;
            (l[r] += t[r]), (l[r] = Math.min(s[1], l[r])), (l[r] = Math.max(s[0], l[r]));
            var c = p(o, 1 - r),
              u = (c[1] + c[0]) / 2,
              h = [u, u];
            return (
              (h[r] = l[r]),
              { position: l, rotation: e.rotation, cursorPoint: h, tooltipOption: { verticalAlign: 'middle' } }
            );
          },
        }),
        h = {
          line: function(e, t, i, a) {
            var r = o.makeLineShape([t, i[0]], [t, i[1]], d(e));
            return n.subPixelOptimizeLine({ shape: r, style: a }), { type: 'Line', shape: r };
          },
          shadow: function(e, t, i, n) {
            var a = e.getBandWidth();
            return { type: 'Rect', shape: o.makeRectShape([t - a / 2, i[0]], [a, i[1] - i[0]], d(e)) };
          },
        };
      function d(e) {
        return e.isHorizontal() ? 0 : 1;
      }
      function p(e, t) {
        var i = e.getRect();
        return [i[l[t]], i[l[t]] + i[c[t]]];
      }
      s.registerAxisPointerClass('SingleAxisPointer', u), (e.exports = u);
    },
    '8Uz6': function(e, t, i) {
      var n = i('hNWo'),
        a = i('+TT/'),
        o = a.mergeLayoutParam,
        r = a.getLayoutParams,
        s = n.extend({
          type: 'legend.scroll',
          setScrollDataIndex: function(e) {
            this.option.scrollDataIndex = e;
          },
          defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: 'end',
            pageFormatter: '{current}/{total}',
            pageIcons: {
              horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
              vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z'],
            },
            pageIconColor: '#2f4554',
            pageIconInactiveColor: '#aaa',
            pageIconSize: 15,
            pageTextStyle: { color: '#333' },
            animationDurationUpdate: 800,
          },
          init: function(e, t, i, n) {
            var a = r(e);
            s.superCall(this, 'init', e, t, i, n), l(this, e, a);
          },
          mergeOption: function(e, t) {
            s.superCall(this, 'mergeOption', e, t), l(this, this.option, e);
          },
          getOrient: function() {
            return 'vertical' === this.get('orient')
              ? { index: 1, name: 'vertical' }
              : { index: 0, name: 'horizontal' };
          },
        });
      function l(e, t, i) {
        var n = [1, 1];
        (n[e.getOrient().index] = 0), o(t, i, { type: 'box', ignoreSize: n });
      }
      e.exports = s;
    },
    '8XDt': function(e, t, i) {
      i('qH13'), (0, i('aX58').registerPainter)('vml', i('6fms'));
    },
    '8waO': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('iLNv'),
        r = i('ZWlE');
      i('hJvP'),
        i('IXyC'),
        i('xRUu'),
        n.extendComponentView({
          type: 'parallel',
          render: function(e, t, i) {
            (this._model = e),
              (this._api = i),
              this._handlers ||
                ((this._handlers = {}),
                a.each(
                  s,
                  function(e, t) {
                    i.getZr().on(t, (this._handlers[t] = a.bind(e, this)));
                  },
                  this,
                )),
              o.createOrUpdate(this, '_throttledDispatchExpand', e.get('axisExpandRate'), 'fixRate');
          },
          dispose: function(e, t) {
            a.each(this._handlers, function(e, i) {
              t.getZr().off(i, e);
            }),
              (this._handlers = null);
          },
          _throttledDispatchExpand: function(e) {
            this._dispatchExpand(e);
          },
          _dispatchExpand: function(e) {
            e && this._api.dispatchAction(a.extend({ type: 'parallelAxisExpand' }, e));
          },
        });
      var s = {
        mousedown: function(e) {
          l(this, 'click') && (this._mouseDownPoint = [e.offsetX, e.offsetY]);
        },
        mouseup: function(e) {
          var t = this._mouseDownPoint;
          if (l(this, 'click') && t) {
            var i = [e.offsetX, e.offsetY];
            if (Math.pow(t[0] - i[0], 2) + Math.pow(t[1] - i[1], 2) > 5) return;
            var n = this._model.coordinateSystem.getSlidedAxisExpandWindow([e.offsetX, e.offsetY]);
            'none' !== n.behavior && this._dispatchExpand({ axisExpandWindow: n.axisExpandWindow });
          }
          this._mouseDownPoint = null;
        },
        mousemove: function(e) {
          if (!this._mouseDownPoint && l(this, 'mousemove')) {
            var t = this._model,
              i = t.coordinateSystem.getSlidedAxisExpandWindow([e.offsetX, e.offsetY]),
              n = i.behavior;
            'jump' === n && this._throttledDispatchExpand.debounceNextCall(t.get('axisExpandDebounce')),
              this._throttledDispatchExpand(
                'none' === n ? null : { axisExpandWindow: i.axisExpandWindow, animation: 'jump' === n && null },
              );
          }
        },
      };
      function l(e, t) {
        var i = e._model;
        return i.get('axisExpandable') && i.get('axisExpandTriggerOn') === t;
      }
      n.registerPreprocessor(r);
    },
    '8x+h': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('K4ya'),
        r = i('Qxkt'),
        s = ['#ddd'],
        l = n.extendComponentModel({
          type: 'brush',
          dependencies: ['geo', 'grid', 'xAxis', 'yAxis', 'parallel', 'series'],
          defaultOption: {
            toolbox: null,
            brushLink: null,
            seriesIndex: 'all',
            geoIndex: null,
            xAxisIndex: null,
            yAxisIndex: null,
            brushType: 'rect',
            brushMode: 'single',
            transformable: !0,
            brushStyle: { borderWidth: 1, color: 'rgba(120,140,180,0.3)', borderColor: 'rgba(120,140,180,0.8)' },
            throttleType: 'fixRate',
            throttleDelay: 0,
            removeOnClick: !0,
            z: 1e4,
          },
          areas: [],
          brushType: null,
          brushOption: {},
          coordInfoList: [],
          optionUpdated: function(e, t) {
            var i = this.option;
            !t && o.replaceVisualOption(i, e, ['inBrush', 'outOfBrush']);
            var n = (i.inBrush = i.inBrush || {});
            (i.outOfBrush = i.outOfBrush || { color: s }), n.hasOwnProperty('liftZ') || (n.liftZ = 5);
          },
          setAreas: function(e) {
            e &&
              (this.areas = a.map(
                e,
                function(e) {
                  return c(this.option, e);
                },
                this,
              ));
          },
          setBrushOption: function(e) {
            (this.brushOption = c(this.option, e)), (this.brushType = this.brushOption.brushType);
          },
        });
      function c(e, t) {
        return a.merge(
          {
            brushType: e.brushType,
            brushMode: e.brushMode,
            transformable: e.transformable,
            brushStyle: new r(e.brushStyle).getItemStyle(),
            removeOnClick: e.removeOnClick,
            z: e.z,
          },
          t,
          !0,
        );
      }
      e.exports = l;
    },
    '9eas': function(e, t, i) {
      i('HM/N'), i('tBnm');
    },
    '9u0u': function(e, t, i) {
      var n = i('bYtY');
      e.exports = function(e) {
        var t = {};
        e.eachSeriesByType('map', function(e) {
          var i = e.getHostGeoModel(),
            n = i ? 'o' + i.id : 'i' + e.getMapType();
          (t[n] = t[n] || []).push(e);
        }),
          n.each(t, function(e, t) {
            for (
              var i,
                a,
                o,
                r =
                  ((i = n.map(e, function(e) {
                    return e.getData();
                  })),
                  (a = e[0].get('mapValueCalculation')),
                  (o = {}),
                  n.each(i, function(e) {
                    e.each(e.mapDimension('value'), function(t, i) {
                      var n = 'ec-' + e.getName(i);
                      (o[n] = o[n] || []), isNaN(t) || o[n].push(t);
                    });
                  }),
                  i[0].map(i[0].mapDimension('value'), function(e, t) {
                    for (
                      var n = 'ec-' + i[0].getName(t), r = 0, s = 1 / 0, l = -1 / 0, c = o[n].length, u = 0;
                      u < c;
                      u++
                    )
                      (s = Math.min(s, o[n][u])), (l = Math.max(l, o[n][u])), (r += o[n][u]);
                    return 0 === c ? NaN : 'min' === a ? s : 'max' === a ? l : 'average' === a ? r / c : r;
                  })),
                s = 0;
              s < e.length;
              s++
            )
              e[s].originalData = e[s].getData();
            for (s = 0; s < e.length; s++)
              (e[s].seriesGroup = e),
                (e[s].needsDrawMap = 0 === s && !e[s].getHostGeoModel()),
                e[s].setData(r.cloneShallow()),
                (e[s].mainSeries = e[0]);
          });
      };
    },
    'AE9C': function(e, t, i) {
      var n = i('bYtY'),
        a = i('crZl'),
        o = i('IwbS'),
        r = i('oVpE').createSymbol,
        s = i('+TT/'),
        l = i('y7Aq'),
        c = a.extend({
          type: 'visualMap.piecewise',
          doRender: function() {
            var e = this.group;
            e.removeAll();
            var t = this.visualMapModel,
              i = t.get('textGap'),
              a = t.textStyleModel,
              r = a.getFont(),
              l = a.getTextColor(),
              c = this._getItemAlign(),
              u = t.itemSize,
              h = this._getViewData(),
              d = h.endsText,
              p = n.retrieve(t.get('showLabel', !0), !d);
            d && this._renderEndsText(e, d[0], u, p, c),
              n.each(
                h.viewPieceList,
                function(a) {
                  var s = a.piece,
                    h = new o.Group();
                  (h.onclick = n.bind(this._onItemClick, this, s)), this._enableHoverLink(h, a.indexInModelPieceList);
                  var d = t.getRepresentValue(s);
                  if ((this._createItemSymbol(h, d, [0, 0, u[0], u[1]]), p)) {
                    var g = this.visualMapModel.getValueState(d);
                    h.add(
                      new o.Text({
                        style: {
                          x: 'right' === c ? -i : u[0] + i,
                          y: u[1] / 2,
                          text: s.text,
                          textVerticalAlign: 'middle',
                          textAlign: c,
                          textFont: r,
                          textFill: l,
                          opacity: 'outOfRange' === g ? 0.5 : 1,
                        },
                      }),
                    );
                  }
                  e.add(h);
                },
                this,
              ),
              d && this._renderEndsText(e, d[1], u, p, c),
              s.box(t.get('orient'), e, t.get('itemGap')),
              this.renderBackground(e),
              this.positionGroup(e);
          },
          _enableHoverLink: function(e, t) {
            function i(e) {
              var i = this.visualMapModel;
              i.option.hoverLink &&
                this.api.dispatchAction({ type: e, batch: l.convertDataIndex(i.findTargetDataIndices(t)) });
            }
            e.on('mouseover', n.bind(i, this, 'highlight')).on('mouseout', n.bind(i, this, 'downplay'));
          },
          _getItemAlign: function() {
            var e = this.visualMapModel,
              t = e.option;
            if ('vertical' === t.orient) return l.getItemAlign(e, this.api, e.itemSize);
            var i = t.align;
            return (i && 'auto' !== i) || (i = 'left'), i;
          },
          _renderEndsText: function(e, t, i, n, a) {
            if (t) {
              var r = new o.Group(),
                s = this.visualMapModel.textStyleModel;
              r.add(
                new o.Text({
                  style: {
                    x: n ? ('right' === a ? i[0] : 0) : i[0] / 2,
                    y: i[1] / 2,
                    textVerticalAlign: 'middle',
                    textAlign: n ? a : 'center',
                    text: t,
                    textFont: s.getFont(),
                    textFill: s.getTextColor(),
                  },
                }),
              ),
                e.add(r);
            }
          },
          _getViewData: function() {
            var e = this.visualMapModel,
              t = n.map(e.getPieceList(), function(e, t) {
                return { piece: e, indexInModelPieceList: t };
              }),
              i = e.get('text'),
              a = e.get('orient'),
              o = e.get('inverse');
            return (
              ('horizontal' === a ? o : !o) ? t.reverse() : i && (i = i.slice().reverse()),
              { viewPieceList: t, endsText: i }
            );
          },
          _createItemSymbol: function(e, t, i) {
            e.add(
              r(this.getControllerVisual(t, 'symbol'), i[0], i[1], i[2], i[3], this.getControllerVisual(t, 'color')),
            );
          },
          _onItemClick: function(e) {
            var t = this.visualMapModel,
              i = t.option,
              a = n.clone(i.selected),
              o = t.getSelectedMapKey(e);
            'single' === i.selectedMode
              ? ((a[o] = !0),
                n.each(a, function(e, t) {
                  a[t] = t === o;
                }))
              : (a[o] = !a[o]),
              this.api.dispatchAction({
                type: 'selectDataRange',
                from: this.uid,
                visualMapId: this.visualMapModel.id,
                selected: a,
              });
          },
        });
      e.exports = c;
    },
    'AEZ6': function(e, t, i) {
      var n = i('bYtY'),
        a = n.each,
        o = n.createHashMap,
        r = i('T4UG'),
        s = i('MwEJ'),
        l = r.extend({
          type: 'series.parallel',
          dependencies: ['parallel'],
          visualColorAccessPath: 'lineStyle.color',
          getInitialData: function(e, t) {
            var i = this.getSource();
            return (
              (function(e, t) {
                if (!e.encodeDefine) {
                  var i = t.ecModel.getComponent('parallel', t.get('parallelIndex'));
                  if (i) {
                    var n = (e.encodeDefine = o());
                    a(i.dimensions, function(e) {
                      var t = +e.replace('dim', '');
                      n.set(e, t);
                    });
                  }
                }
              })(i, this),
              s(i, this)
            );
          },
          getRawIndicesByActiveState: function(e) {
            var t = this.coordinateSystem,
              i = this.getData(),
              n = [];
            return (
              t.eachActiveState(i, function(t, a) {
                e === t && n.push(i.getRawIndex(a));
              }),
              n
            );
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'parallel',
            parallelIndex: 0,
            label: { show: !1 },
            inactiveOpacity: 0.05,
            activeOpacity: 1,
            lineStyle: { width: 1, opacity: 0.45, type: 'solid' },
            emphasis: { label: { show: !1 } },
            progressive: 500,
            smooth: !1,
            animationEasing: 'linear',
          },
        });
      e.exports = l;
    },
    'ALo7': function(e, t, i) {
      var n = i('ProS'),
        a = i('5GtS'),
        o = i('4NO4').defaultEmphasis,
        r = n.extendSeriesModel({
          type: 'series.funnel',
          init: function(e) {
            r.superApply(this, 'init', arguments),
              (this.legendDataProvider = function() {
                return this.getRawData();
              }),
              this._defaultLabelLine(e);
          },
          getInitialData: function(e, t) {
            return a(this, ['value']);
          },
          _defaultLabelLine: function(e) {
            o(e, 'labelLine', ['show']);
            var t = e.labelLine,
              i = e.emphasis.labelLine;
            (t.show = t.show && e.label.show), (i.show = i.show && e.emphasis.label.show);
          },
          getDataParams: function(e) {
            var t = this.getData(),
              i = r.superCall(this, 'getDataParams', e),
              n = t.mapDimension('value'),
              a = t.getSum(n);
            return (i.percent = a ? +((t.get(n, e) / a) * 100).toFixed(2) : 0), i.$vars.push('percent'), i;
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            left: 80,
            top: 60,
            right: 80,
            bottom: 60,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 0,
            funnelAlign: 'center',
            label: { show: !0, position: 'outer' },
            labelLine: { show: !0, length: 20, lineStyle: { width: 1, type: 'solid' } },
            itemStyle: { borderColor: '#fff', borderWidth: 1 },
            emphasis: { label: { show: !0 } },
          },
        });
      e.exports = r;
    },
    'ANjR': function(e, t, i) {
      var n = i('bYtY');
      function a(e, t) {
        return (
          (t = t || [0, 0]),
          n.map(
            [0, 1],
            function(i) {
              var n = t[i],
                a = e[i] / 2,
                o = [],
                r = [];
              return (
                (o[i] = n - a),
                (r[i] = n + a),
                (o[1 - i] = r[1 - i] = t[1 - i]),
                Math.abs(this.dataToPoint(o)[i] - this.dataToPoint(r)[i])
              );
            },
            this,
          )
        );
      }
      e.exports = function(e) {
        var t = e.getBoundingRect();
        return {
          coordSys: { type: 'geo', x: t.x, y: t.y, width: t.width, height: t.height, zoom: e.getZoom() },
          api: {
            coord: function(t) {
              return e.dataToPoint(t);
            },
            size: n.bind(a, e),
          },
        };
      };
    },
    'AUH6': function(e, t, i) {
      var n = i('bYtY'),
        a = i('mFDi'),
        o = i('bMXI'),
        r = i('W4dC');
      function s(e, t, i, n) {
        o.call(this, e), (this.map = t);
        var a = r.load(t, i);
        (this._nameCoordMap = a.nameCoordMap),
          (this._regionsMap = a.regionsMap),
          (this._invertLongitute = null == n || n),
          (this.regions = a.regions),
          (this._rect = a.boundingRect);
      }
      function l(e, t, i, n) {
        var a = i.geoModel,
          o = i.seriesModel,
          r = a
            ? a.coordinateSystem
            : o
            ? o.coordinateSystem || (o.getReferringComponents('geo')[0] || {}).coordinateSystem
            : null;
        return r === this ? r[e](n) : null;
      }
      (s.prototype = {
        constructor: s,
        type: 'geo',
        dimensions: ['lng', 'lat'],
        containCoord: function(e) {
          for (var t = this.regions, i = 0; i < t.length; i++) if (t[i].contain(e)) return !0;
          return !1;
        },
        transformTo: function(e, t, i, n) {
          var o = this.getBoundingRect(),
            r = this._invertLongitute;
          (o = o.clone()), r && (o.y = -o.y - o.height);
          var s = this._rawTransformable;
          if (((s.transform = o.calculateTransform(new a(e, t, i, n))), s.decomposeTransform(), r)) {
            var l = s.scale;
            l[1] = -l[1];
          }
          s.updateTransform(), this._updateTransform();
        },
        getRegion: function(e) {
          return this._regionsMap.get(e);
        },
        getRegionByCoord: function(e) {
          for (var t = this.regions, i = 0; i < t.length; i++) if (t[i].contain(e)) return t[i];
        },
        addGeoCoord: function(e, t) {
          this._nameCoordMap.set(e, t);
        },
        getGeoCoord: function(e) {
          return this._nameCoordMap.get(e);
        },
        getBoundingRect: function() {
          return this._rect;
        },
        dataToPoint: function(e, t, i) {
          if (('string' == typeof e && (e = this.getGeoCoord(e)), e))
            return o.prototype.dataToPoint.call(this, e, t, i);
        },
        convertToPixel: n.curry(l, 'dataToPoint'),
        convertFromPixel: n.curry(l, 'pointToData'),
      }),
        n.mixin(s, o),
        (e.exports = s);
    },
    'B+YJ': function(e, t, i) {
      i('TYVI'), i('p1MT');
    },
    'BuqR': function(e, t, i) {
      i('Tghj');
      var n = i('bYtY'),
        a = i('6uqw'),
        o = i('XxSj'),
        r = i('YOMW'),
        s = i('OELB').reformIntervals,
        l = a.extend({
          type: 'visualMap.piecewise',
          defaultOption: {
            selected: null,
            minOpen: !1,
            maxOpen: !1,
            align: 'auto',
            itemWidth: 20,
            itemHeight: 14,
            itemSymbol: 'roundRect',
            pieceList: null,
            categories: null,
            splitNumber: 5,
            selectedMode: 'multiple',
            itemGap: 10,
            hoverLink: !0,
            showLabel: null,
          },
          optionUpdated: function(e, t) {
            l.superApply(this, 'optionUpdated', arguments), (this._pieceList = []), this.resetExtent();
            var i = (this._mode = this._determineMode());
            c[this._mode].call(this), this._resetSelected(e, t);
            var a = this.option.categories;
            this.resetVisual(function(e, t) {
              'categories' === i
                ? ((e.mappingMethod = 'category'), (e.categories = n.clone(a)))
                : ((e.dataExtent = this.getExtent()),
                  (e.mappingMethod = 'piecewise'),
                  (e.pieceList = n.map(this._pieceList, function(e) {
                    return (e = n.clone(e)), 'inRange' !== t && (e.visual = null), e;
                  })));
            });
          },
          completeVisualOption: function() {
            var e = this.option,
              t = {},
              i = o.listVisualTypes(),
              s = this.isCategory();
            function l(e, t, i) {
              return e && e[t] && (n.isObject(e[t]) ? e[t].hasOwnProperty(i) : e[t] === i);
            }
            n.each(e.pieces, function(e) {
              n.each(i, function(i) {
                e.hasOwnProperty(i) && (t[i] = 1);
              });
            }),
              n.each(
                t,
                function(t, i) {
                  var a = 0;
                  n.each(
                    this.stateList,
                    function(t) {
                      a |= l(e, t, i) || l(e.target, t, i);
                    },
                    this,
                  ),
                    !a &&
                      n.each(this.stateList, function(t) {
                        (e[t] || (e[t] = {}))[i] = r.get(i, 'inRange' === t ? 'active' : 'inactive', s);
                      });
                },
                this,
              ),
              a.prototype.completeVisualOption.apply(this, arguments);
          },
          _resetSelected: function(e, t) {
            var i = this.option,
              a = this._pieceList,
              o = (t ? i : e).selected || {};
            if (
              ((i.selected = o),
              n.each(
                a,
                function(e, t) {
                  var i = this.getSelectedMapKey(e);
                  o.hasOwnProperty(i) || (o[i] = !0);
                },
                this,
              ),
              'single' === i.selectedMode)
            ) {
              var r = !1;
              n.each(
                a,
                function(e, t) {
                  var i = this.getSelectedMapKey(e);
                  o[i] && (r ? (o[i] = !1) : (r = !0));
                },
                this,
              );
            }
          },
          getSelectedMapKey: function(e) {
            return 'categories' === this._mode ? e.value + '' : e.index + '';
          },
          getPieceList: function() {
            return this._pieceList;
          },
          _determineMode: function() {
            var e = this.option;
            return e.pieces && e.pieces.length > 0 ? 'pieces' : this.option.categories ? 'categories' : 'splitNumber';
          },
          setSelected: function(e) {
            this.option.selected = n.clone(e);
          },
          getValueState: function(e) {
            var t = o.findPieceIndex(e, this._pieceList);
            return null != t && this.option.selected[this.getSelectedMapKey(this._pieceList[t])]
              ? 'inRange'
              : 'outOfRange';
          },
          findTargetDataIndices: function(e) {
            var t = [];
            return (
              this.eachTargetSeries(function(i) {
                var n = [],
                  a = i.getData();
                a.each(
                  this.getDataDimension(a),
                  function(t, i) {
                    o.findPieceIndex(t, this._pieceList) === e && n.push(i);
                  },
                  this,
                ),
                  t.push({ seriesId: i.id, dataIndex: n });
              }, this),
              t
            );
          },
          getRepresentValue: function(e) {
            var t;
            if (this.isCategory()) t = e.value;
            else if (null != e.value) t = e.value;
            else {
              var i = e.interval || [];
              t = i[0] === -1 / 0 && i[1] === 1 / 0 ? 0 : (i[0] + i[1]) / 2;
            }
            return t;
          },
          getVisualMeta: function(e) {
            if (!this.isCategory()) {
              var t = [],
                i = [],
                a = this,
                o = this._pieceList.slice();
              if (o.length) {
                var r = o[0].interval[0];
                r !== -1 / 0 && o.unshift({ interval: [-1 / 0, r] }),
                  (r = o[o.length - 1].interval[1]) !== 1 / 0 && o.push({ interval: [r, 1 / 0] });
              } else o.push({ interval: [-1 / 0, 1 / 0] });
              var s = -1 / 0;
              return (
                n.each(
                  o,
                  function(e) {
                    var t = e.interval;
                    t && (t[0] > s && l([s, t[0]], 'outOfRange'), l(t.slice()), (s = t[1]));
                  },
                  this,
                ),
                { stops: t, outerColors: i }
              );
            }
            function l(n, o) {
              var r = a.getRepresentValue({ interval: n });
              o || (o = a.getValueState(r));
              var s = e(r, o);
              n[0] === -1 / 0
                ? (i[0] = s)
                : n[1] === 1 / 0
                ? (i[1] = s)
                : t.push({ value: n[0], color: s }, { value: n[1], color: s });
            }
          },
        }),
        c = {
          splitNumber: function() {
            var e = this.option,
              t = this._pieceList,
              i = Math.min(e.precision, 20),
              a = this.getExtent(),
              o = e.splitNumber;
            (o = Math.max(parseInt(o, 10), 1)), (e.splitNumber = o);
            for (var r = (a[1] - a[0]) / o; +r.toFixed(i) !== r && i < 5; ) i++;
            (e.precision = i), (r = +r.toFixed(i));
            var l = 0;
            e.minOpen && t.push({ index: l++, interval: [-1 / 0, a[0]], close: [0, 0] });
            for (var c = a[0], u = l + o; l < u; c += r) {
              var h = l === o - 1 ? a[1] : c + r;
              t.push({ index: l++, interval: [c, h], close: [1, 1] });
            }
            e.maxOpen && t.push({ index: l++, interval: [a[1], 1 / 0], close: [0, 0] }),
              s(t),
              n.each(
                t,
                function(e) {
                  e.text = this.formatValueText(e.interval);
                },
                this,
              );
          },
          categories: function() {
            var e = this.option;
            n.each(
              e.categories,
              function(e) {
                this._pieceList.push({ text: this.formatValueText(e, !0), value: e });
              },
              this,
            ),
              u(e, this._pieceList);
          },
          pieces: function() {
            var e = this.option,
              t = this._pieceList;
            n.each(
              e.pieces,
              function(e, i) {
                n.isObject(e) || (e = { value: e });
                var a = { text: '', index: i };
                if ((null != e.label && (a.text = e.label), e.hasOwnProperty('value'))) {
                  var r = (a.value = e.value);
                  (a.interval = [r, r]), (a.close = [1, 1]);
                } else {
                  for (
                    var s = (a.interval = []),
                      l = (a.close = [0, 0]),
                      c = [1, 0, 1],
                      u = [-1 / 0, 1 / 0],
                      h = [],
                      d = 0;
                    d < 2;
                    d++
                  ) {
                    for (
                      var p = [
                          ['gte', 'gt', 'min'],
                          ['lte', 'lt', 'max'],
                        ][d],
                        g = 0;
                      g < 3 && null == s[d];
                      g++
                    )
                      (s[d] = e[p[g]]), (l[d] = c[g]), (h[d] = 2 === g);
                    null == s[d] && (s[d] = u[d]);
                  }
                  h[0] && s[1] === 1 / 0 && (l[0] = 0),
                    h[1] && s[0] === -1 / 0 && (l[1] = 0),
                    s[0] === s[1] && l[0] && l[1] && (a.value = s[0]);
                }
                (a.visual = o.retrieveVisuals(e)), t.push(a);
              },
              this,
            ),
              u(e, t),
              s(t),
              n.each(
                t,
                function(e) {
                  var t = e.close;
                  e.text =
                    e.text ||
                    this.formatValueText(null != e.value ? e.value : e.interval, !1, [
                      ['<', '\u2264'][t[1]],
                      ['>', '\u2265'][t[0]],
                    ]);
                },
                this,
              );
          },
        };
      function u(e, t) {
        var i = e.inverse;
        ('vertical' === e.orient ? !i : i) && t.reverse();
      }
      e.exports = l;
    },
    'C0tN': function(e, t, i) {
      i('0o9m'), i('8Uz6'), i('Ducp'), i('6/nd');
    },
    'CBdT': function(e, t, i) {
      var n = i('ProS');
      i('8waO'), i('AEZ6'), i('YNf1');
      var a = i('q3GZ');
      n.registerVisual(a);
    },
    'CF2D': function(e, t, i) {
      var n = i('ProS');
      i('vZI5'), i('GeKi');
      var a = i('6r85'),
        o = i('TJmX'),
        r = i('CbHG');
      n.registerPreprocessor(a), n.registerVisual(o), n.registerLayout(r);
    },
    'CMP+': function(e, t, i) {
      var n = i('bYtY'),
        a = i('hM6l'),
        o = function(e, t, i, n) {
          a.call(this, e, t, i), (this.type = n || 'value'), (this.model = null);
        };
      (o.prototype = {
        constructor: o,
        getLabelModel: function() {
          return this.model.getModel('label');
        },
        isHorizontal: function() {
          return 'horizontal' === this.model.get('orient');
        },
      }),
        n.inherits(o, a),
        (e.exports = o);
    },
    'CbHG': function(e, t, i) {
      var n = i('IwbS').subPixelOptimize,
        a = i('zM3Q'),
        o = i('OELB').parsePercent,
        r = i('bYtY').retrieve2,
        s = 'undefined' != typeof Float32Array ? Float32Array : Array,
        l = {
          seriesType: 'candlestick',
          plan: a(),
          reset: function(e) {
            var t = e.coordinateSystem,
              i = e.getData(),
              a = (function(e, t) {
                var i,
                  n = e.getBaseAxis(),
                  a =
                    'category' === n.type ? n.getBandWidth() : ((i = n.getExtent()), Math.abs(i[1] - i[0]) / t.count()),
                  s = o(r(e.get('barMaxWidth'), a), a),
                  l = o(r(e.get('barMinWidth'), 1), a),
                  c = e.get('barWidth');
                return null != c ? o(c, a) : Math.max(Math.min(a / 2, s), l);
              })(e, i),
              l = 0,
              u = 1,
              h = ['x', 'y'],
              d = i.mapDimension(h[l]),
              p = i.mapDimension(h[u], !0),
              g = p[0],
              f = p[1],
              m = p[2],
              v = p[3];
            if ((i.setLayout({ candleWidth: a, isSimpleBox: a <= 1.3 }), !(null == d || p.length < 4)))
              return {
                progress: e.pipelineContext.large
                  ? function(e, i) {
                      for (var n, a, o = new s(5 * e.count), r = 0, h = [], p = []; null != (a = e.next()); ) {
                        var y = i.get(d, a),
                          x = i.get(g, a),
                          _ = i.get(f, a),
                          b = i.get(m, a),
                          S = i.get(v, a);
                        isNaN(y) || isNaN(b) || isNaN(S)
                          ? ((o[r++] = NaN), (r += 4))
                          : ((o[r++] = c(i, a, x, _, f)),
                            (h[l] = y),
                            (h[u] = b),
                            (n = t.dataToPoint(h, null, p)),
                            (o[r++] = n ? n[0] : NaN),
                            (o[r++] = n ? n[1] : NaN),
                            (h[u] = S),
                            (n = t.dataToPoint(h, null, p)),
                            (o[r++] = n ? n[1] : NaN));
                      }
                      i.setLayout('largePoints', o);
                    }
                  : function(e, i) {
                      for (var o; null != (o = e.next()); ) {
                        var r = i.get(d, o),
                          s = i.get(g, o),
                          h = i.get(f, o),
                          p = i.get(m, o),
                          y = i.get(v, o),
                          x = Math.min(s, h),
                          _ = Math.max(s, h),
                          b = A(x, r),
                          S = A(_, r),
                          w = A(p, r),
                          M = A(y, r),
                          I = [];
                        D(I, S, 0),
                          D(I, b, 1),
                          I.push(P(M), P(S), P(w), P(b)),
                          i.setItemLayout(o, {
                            sign: c(i, o, s, h, f),
                            initBaseline: s > h ? S[u] : b[u],
                            ends: I,
                            brushRect: T(p, y, r),
                          });
                      }
                      function A(e, i) {
                        var n = [];
                        return (n[l] = i), (n[u] = e), isNaN(i) || isNaN(e) ? [NaN, NaN] : t.dataToPoint(n);
                      }
                      function D(e, t, i) {
                        var o = t.slice(),
                          r = t.slice();
                        (o[l] = n(o[l] + a / 2, 1, !1)),
                          (r[l] = n(r[l] - a / 2, 1, !0)),
                          i ? e.push(o, r) : e.push(r, o);
                      }
                      function T(e, t, i) {
                        var n = A(e, i),
                          o = A(t, i);
                        return (
                          (n[l] -= a / 2),
                          (o[l] -= a / 2),
                          { x: n[0], y: n[1], width: u ? a : o[0] - n[0], height: u ? o[1] - n[1] : a }
                        );
                      }
                      function P(e) {
                        return (e[l] = n(e[l], 1)), e;
                      }
                    },
              };
          },
        };
      function c(e, t, i, n, a) {
        return i > n ? -1 : i < n ? 1 : t > 0 ? (e.get(a, t - 1) <= n ? 1 : -1) : 1;
      }
      e.exports = l;
    },
    'Cm0C': function(e, t, i) {
      i('aTJb'), i('OlYY'), i('fc+c'), i('N5BQ'), i('IyUQ'), i('oY9F'), i('MqEG'), i('LBfv'), i('noeP');
    },
    'D1WM': function(e, t, i) {
      var n = i('bYtY'),
        a = i('hM6l'),
        o = function(e, t, i, n, o) {
          a.call(this, e, t, i), (this.type = n || 'value'), (this.axisIndex = o);
        };
      (o.prototype = {
        constructor: o,
        model: null,
        isHorizontal: function() {
          return 'horizontal' !== this.coordinateSystem.getModel().get('layout');
        },
      }),
        n.inherits(o, a),
        (e.exports = o);
    },
    'D9ME': function(e, t, i) {
      var n = i('IwbS'),
        a = i('fls0'),
        o = i('bYtY'),
        r = i('oVpE').createSymbol,
        s = i('QBsz'),
        l = i('Sj9i');
      function c(e, t, i) {
        n.Group.call(this), this.add(this.createLine(e, t, i)), this._updateEffectSymbol(e, t);
      }
      var u = c.prototype;
      (u.createLine = function(e, t, i) {
        return new a(e, t, i);
      }),
        (u._updateEffectSymbol = function(e, t) {
          var i = e.getItemModel(t).getModel('effect'),
            n = i.get('symbolSize'),
            a = i.get('symbol');
          o.isArray(n) || (n = [n, n]);
          var s = i.get('color') || e.getItemVisual(t, 'color'),
            l = this.childAt(1);
          this._symbolType !== a &&
            (this.remove(l), ((l = r(a, -0.5, -0.5, 1, 1, s)).z2 = 100), (l.culling = !0), this.add(l)),
            l &&
              (l.setStyle('shadowColor', s),
              l.setStyle(i.getItemStyle(['color'])),
              l.attr('scale', n),
              l.setColor(s),
              l.attr('scale', n),
              (this._symbolType = a),
              this._updateEffectAnimation(e, i, t));
        }),
        (u._updateEffectAnimation = function(e, t, i) {
          var n = this.childAt(1);
          if (n) {
            var a = this,
              r = e.getItemLayout(i),
              s = 1e3 * t.get('period'),
              l = t.get('loop'),
              c = t.get('constantSpeed'),
              u = o.retrieve(t.get('delay'), function(t) {
                return ((t / e.count()) * s) / 3;
              }),
              h = 'function' == typeof u;
            if (
              ((n.ignore = !0),
              this.updateAnimationPoints(n, r),
              c > 0 && (s = (this.getLineLength(n) / c) * 1e3),
              s !== this._period || l !== this._loop)
            ) {
              n.stopAnimation();
              var d = u;
              h && (d = u(i)), n.__t > 0 && (d = -s * n.__t), (n.__t = 0);
              var p = n
                .animate('', l)
                .when(s, { __t: 1 })
                .delay(d)
                .during(function() {
                  a.updateSymbolPosition(n);
                });
              l ||
                p.done(function() {
                  a.remove(n);
                }),
                p.start();
            }
            (this._period = s), (this._loop = l);
          }
        }),
        (u.getLineLength = function(e) {
          return s.dist(e.__p1, e.__cp1) + s.dist(e.__cp1, e.__p2);
        }),
        (u.updateAnimationPoints = function(e, t) {
          (e.__p1 = t[0]), (e.__p2 = t[1]), (e.__cp1 = t[2] || [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]);
        }),
        (u.updateData = function(e, t, i) {
          this.childAt(0).updateData(e, t, i), this._updateEffectSymbol(e, t);
        }),
        (u.updateSymbolPosition = function(e) {
          var t = e.__p1,
            i = e.__p2,
            n = e.__cp1,
            a = e.__t,
            o = e.position,
            r = l.quadraticAt,
            s = l.quadraticDerivativeAt;
          (o[0] = r(t[0], n[0], i[0], a)), (o[1] = r(t[1], n[1], i[1], a));
          var c = s(t[0], n[0], i[0], a),
            u = s(t[1], n[1], i[1], a);
          (e.rotation = -Math.atan2(u, c) - Math.PI / 2), (e.ignore = !1);
        }),
        (u.updateLayout = function(e, t) {
          this.childAt(0).updateLayout(e, t);
          var i = e.getItemModel(t).getModel('effect');
          this._updateEffectAnimation(e, i, t);
        }),
        o.inherits(c, n.Group),
        (e.exports = c);
    },
    'DEFe': function(e, t, i) {
      var n = i('bYtY'),
        a = i('SgGq'),
        o = i('Ae+d'),
        r = i('xSat').onIrrelevantElement,
        s = i('IwbS'),
        l = i('W4dC'),
        c = i('iRjW').getUID;
      function u(e, t) {
        var i = e.getItemStyle(),
          n = e.get('areaColor');
        return null != n && (i.fill = n), i;
      }
      function h(e, t) {
        t.eachChild(function(t) {
          n.each(t.__regions, function(i) {
            t.trigger(e.isSelected(i.name) ? 'emphasis' : 'normal');
          });
        });
      }
      function d(e, t) {
        var i = new s.Group();
        (this.uid = c('ec_map_draw')),
          (this._controller = new a(e.getZr())),
          (this._controllerHost = { target: t ? i : null }),
          (this.group = i),
          (this._updateGroup = t),
          i.add((this._regionsGroup = new s.Group())),
          i.add((this._backgroundGroup = new s.Group()));
      }
      (d.prototype = {
        constructor: d,
        draw: function(e, t, i, a, o) {
          var r = 'geo' === e.mainType,
            l = e.getData && e.getData();
          r &&
            t.eachComponent({ mainType: 'series', subType: 'map' }, function(t) {
              l || t.getHostGeoModel() !== e || (l = t.getData());
            });
          var c = e.coordinateSystem;
          this._updateBackground(c);
          var d = this._regionsGroup,
            p = this.group,
            g = c.scale,
            f = { position: c.position, scale: g };
          !d.childAt(0) || o ? p.attr(f) : s.updateProps(p, f, e), d.removeAll();
          var m = ['itemStyle'],
            v = ['emphasis', 'itemStyle'],
            y = ['label'],
            x = ['emphasis', 'label'],
            _ = n.createHashMap();
          n.each(c.regions, function(t) {
            var i = _.get(t.name) || _.set(t.name, new s.Group()),
              a = new s.CompoundPath({ shape: { paths: [] } });
            i.add(a);
            var o,
              c = (C = e.getRegionModel(t.name) || e).getModel(m),
              h = C.getModel(v),
              p = u(c),
              f = u(h),
              b = C.getModel(y),
              S = C.getModel(x);
            if (l) {
              o = l.indexOfName(t.name);
              var w = l.getItemVisual(o, 'color', !0);
              w && (p.fill = w);
            }
            n.each(t.geometries, function(e) {
              if ('polygon' === e.type) {
                a.shape.paths.push(new s.Polygon({ shape: { points: e.exterior } }));
                for (var t = 0; t < (e.interiors ? e.interiors.length : 0); t++)
                  a.shape.paths.push(new s.Polygon({ shape: { points: e.interiors[t] } }));
              }
            }),
              a.setStyle(p),
              (a.style.strokeNoScale = !0),
              (a.culling = !0);
            var M = b.get('show'),
              I = S.get('show'),
              A = l && isNaN(l.get(l.mapDimension('value'), o)),
              D = l && l.getItemLayout(o);
            if (r || (A && (M || I)) || (D && D.showLabel)) {
              var T,
                P = r ? t.name : o;
              (!l || o >= 0) && (T = e);
              var L = new s.Text({ position: t.center.slice(), scale: [1 / g[0], 1 / g[1]], z2: 10, silent: !0 });
              s.setLabelStyle(
                L.style,
                (L.hoverStyle = {}),
                b,
                S,
                { labelFetcher: T, labelDataIndex: P, defaultText: t.name, useInsideStyle: !1 },
                { textAlign: 'center', textVerticalAlign: 'middle' },
              ),
                i.add(L);
            }
            if (l) l.setItemGraphicEl(o, i);
            else {
              var C = e.getRegionModel(t.name);
              a.eventData = {
                componentType: 'geo',
                componentIndex: e.componentIndex,
                geoIndex: e.componentIndex,
                name: t.name,
                region: (C && C.option) || {},
              };
            }
            (i.__regions || (i.__regions = [])).push(t),
              s.setHoverStyle(i, f, { hoverSilentOnTouch: !!e.get('selectedMode') }),
              d.add(i);
          }),
            this._updateController(e, t, i),
            (function(e, t, i, a, o) {
              i.off('click'),
                i.off('mousedown'),
                t.get('selectedMode') &&
                  (i.on('mousedown', function() {
                    e._mouseDownFlag = !0;
                  }),
                  i.on('click', function(r) {
                    if (e._mouseDownFlag) {
                      e._mouseDownFlag = !1;
                      for (var s = r.target; !s.__regions; ) s = s.parent;
                      if (s) {
                        var l = {
                          type: ('geo' === t.mainType ? 'geo' : 'map') + 'ToggleSelect',
                          batch: n.map(s.__regions, function(e) {
                            return { name: e.name, from: o.uid };
                          }),
                        };
                        (l[t.mainType + 'Id'] = t.id), a.dispatchAction(l), h(t, i);
                      }
                    }
                  }));
            })(this, e, d, i, a),
            h(e, d);
        },
        remove: function() {
          this._regionsGroup.removeAll(),
            this._backgroundGroup.removeAll(),
            this._controller.dispose(),
            this._mapName && l.removeGraphic(this._mapName, this.uid),
            (this._mapName = null),
            (this._controllerHost = {});
        },
        _updateBackground: function(e) {
          var t = e.map;
          this._mapName !== t &&
            n.each(
              l.makeGraphic(t, this.uid),
              function(e) {
                this._backgroundGroup.add(e);
              },
              this,
            ),
            (this._mapName = t);
        },
        _updateController: function(e, t, i) {
          var a = e.coordinateSystem,
            s = this._controller,
            l = this._controllerHost;
          (l.zoomLimit = e.get('scaleLimit')), (l.zoom = a.getZoom()), s.enable(e.get('roam') || !1);
          var c = e.mainType;
          function u() {
            var t = { type: 'geoRoam', componentType: c };
            return (t[c + 'Id'] = e.id), t;
          }
          s.off('pan').on(
            'pan',
            function(e) {
              (this._mouseDownFlag = !1),
                o.updateViewOnPan(l, e.dx, e.dy),
                i.dispatchAction(n.extend(u(), { dx: e.dx, dy: e.dy }));
            },
            this,
          ),
            s.off('zoom').on(
              'zoom',
              function(e) {
                if (
                  ((this._mouseDownFlag = !1),
                  o.updateViewOnZoom(l, e.scale, e.originX, e.originY),
                  i.dispatchAction(n.extend(u(), { zoom: e.scale, originX: e.originX, originY: e.originY })),
                  this._updateGroup)
                ) {
                  var t = this.group.scale;
                  this._regionsGroup.traverse(function(e) {
                    'text' === e.type && e.attr('scale', [1 / t[0], 1 / t[1]]);
                  });
                }
              },
              this,
            ),
            s.setPointerChecker(function(t, n, o) {
              return a.getViewRectAfterRoam().contain(n, o) && !r(t, i, e);
            });
        },
      }),
        (e.exports = d);
    },
    'Ducp': function(e, t, i) {
      var n = i('bYtY'),
        a = i('IwbS'),
        o = i('+TT/'),
        r = i('XpcN'),
        s = a.Group,
        l = ['width', 'height'],
        c = ['x', 'y'],
        u = r.extend({
          type: 'legend.scroll',
          newlineDisabled: !0,
          init: function() {
            u.superCall(this, 'init'),
              (this._currentIndex = 0),
              this.group.add((this._containerGroup = new s())),
              this._containerGroup.add(this.getContentGroup()),
              this.group.add((this._controllerGroup = new s()));
          },
          resetInner: function() {
            u.superCall(this, 'resetInner'),
              this._controllerGroup.removeAll(),
              this._containerGroup.removeClipPath(),
              (this._containerGroup.__rectSize = null);
          },
          renderInner: function(e, t, i, o) {
            var r = this;
            u.superCall(this, 'renderInner', e, t, i, o);
            var s = this._controllerGroup,
              l = t.get('pageIconSize', !0);
            n.isArray(l) || (l = [l, l]), h('pagePrev', 0);
            var c = t.getModel('pageTextStyle');
            function h(e, i) {
              var c = e + 'DataIndex',
                u = a.createIcon(
                  t.get('pageIcons', !0)[t.getOrient().name][i],
                  { onclick: n.bind(r._pageGo, r, c, t, o) },
                  { x: -l[0] / 2, y: -l[1] / 2, width: l[0], height: l[1] },
                );
              (u.name = e), s.add(u);
            }
            s.add(
              new a.Text({
                name: 'pageText',
                style: {
                  textFill: c.getTextColor(),
                  font: c.getFont(),
                  textVerticalAlign: 'middle',
                  textAlign: 'center',
                },
                silent: !0,
              }),
            ),
              h('pageNext', 1);
          },
          layoutInner: function(e, t, i, r) {
            var s = this.getContentGroup(),
              u = this._containerGroup,
              h = this._controllerGroup,
              d = e.getOrient().index,
              p = l[d],
              g = l[1 - d],
              f = c[1 - d];
            o.box(e.get('orient'), s, e.get('itemGap'), d ? i.width : null, d ? null : i.height),
              o.box('horizontal', h, e.get('pageButtonItemGap', !0));
            var m = s.getBoundingRect(),
              v = h.getBoundingRect(),
              y = (this._showController = m[p] > i[p]),
              x = [-m.x, -m.y];
            r || (x[d] = s.position[d]);
            var _ = [0, 0],
              b = [-v.x, -v.y],
              S = n.retrieve2(e.get('pageButtonGap', !0), e.get('itemGap', !0));
            y && ('end' === e.get('pageButtonPosition', !0) ? (b[d] += i[p] - v[p]) : (_[d] += v[p] + S)),
              (b[1 - d] += m[g] / 2 - v[g] / 2),
              s.attr('position', x),
              u.attr('position', _),
              h.attr('position', b);
            var w = this.group.getBoundingRect();
            if (
              (((w = { x: 0, y: 0 })[p] = y ? i[p] : m[p]),
              (w[g] = Math.max(m[g], v[g])),
              (w[f] = Math.min(0, v[f] + b[1 - d])),
              (u.__rectSize = i[p]),
              y)
            ) {
              var M = { x: 0, y: 0 };
              (M[p] = Math.max(i[p] - v[p] - S, 0)),
                (M[g] = w[g]),
                u.setClipPath(new a.Rect({ shape: M })),
                (u.__rectSize = M[p]);
            } else
              h.eachChild(function(e) {
                e.attr({ invisible: !0, silent: !0 });
              });
            var I = this._getPageInfo(e);
            return (
              null != I.pageIndex && a.updateProps(s, { position: I.contentPosition }, !!y && e),
              this._updatePageInfoView(e, I),
              w
            );
          },
          _pageGo: function(e, t, i) {
            var n = this._getPageInfo(t)[e];
            null != n && i.dispatchAction({ type: 'legendScroll', scrollDataIndex: n, legendId: t.id });
          },
          _updatePageInfoView: function(e, t) {
            var i = this._controllerGroup;
            n.each(['pagePrev', 'pageNext'], function(n) {
              var a = null != t[n + 'DataIndex'],
                o = i.childOfName(n);
              o &&
                (o.setStyle('fill', e.get(a ? 'pageIconColor' : 'pageIconInactiveColor', !0)),
                (o.cursor = a ? 'pointer' : 'default'));
            });
            var a = i.childOfName('pageText'),
              o = e.get('pageFormatter'),
              r = t.pageIndex,
              s = null != r ? r + 1 : 0,
              l = t.pageCount;
            a &&
              o &&
              a.setStyle(
                'text',
                n.isString(o) ? o.replace('{current}', s).replace('{total}', l) : o({ current: s, total: l }),
              );
          },
          _getPageInfo: function(e) {
            var t = e.get('scrollDataIndex', !0),
              i = this.getContentGroup(),
              n = this._containerGroup.__rectSize,
              a = e.getOrient().index,
              o = l[a],
              r = c[a],
              s = this._findTargetItemIndex(t),
              u = i.children(),
              h = u[s],
              d = u.length,
              p = d ? 1 : 0,
              g = {
                contentPosition: i.position.slice(),
                pageCount: p,
                pageIndex: p - 1,
                pagePrevDataIndex: null,
                pageNextDataIndex: null,
              };
            if (!h) return g;
            var f = _(h);
            g.contentPosition[a] = -f.s;
            for (var m = s + 1, v = f, y = f, x = null; m <= d; ++m)
              ((!(x = _(u[m])) && y.e > v.s + n) || (x && !b(x, v.s))) &&
                (v = y.i > v.i ? y : x) &&
                (null == g.pageNextDataIndex && (g.pageNextDataIndex = v.i), ++g.pageCount),
                (y = x);
            for (m = s - 1, v = f, y = f, x = null; m >= -1; --m)
              ((x = _(u[m])) && b(y, x.s)) ||
                !(v.i < y.i) ||
                ((y = v), null == g.pagePrevDataIndex && (g.pagePrevDataIndex = v.i), ++g.pageCount, ++g.pageIndex),
                (v = x);
            return g;
            function _(e) {
              if (e) {
                var t = e.getBoundingRect(),
                  i = t[r] + e.position[a];
                return { s: i, e: i + t[o], i: e.__legendDataIndex };
              }
            }
            function b(e, t) {
              return e.e >= t && e.s <= t + n;
            }
          },
          _findTargetItemIndex: function(e) {
            var t,
              i = this.getContentGroup();
            return (
              this._showController
                ? i.eachChild(function(i, n) {
                    i.__legendDataIndex === e && (t = n);
                  })
                : (t = 0),
              t
            );
          },
        });
      e.exports = u;
    },
    'EMyp': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('mFDi'),
        r = i('K4ya'),
        s = i('qJCg'),
        l = i('iLNv'),
        c = i('vZ6x'),
        u = ['inBrush', 'outOfBrush'],
        h = '__ecInBrushSelectEvent',
        d = n.PRIORITY.VISUAL.BRUSH;
      function p(e, t) {
        if (!e.isDisposed()) {
          var i = e.getZr();
          (i[h] = !0), e.dispatchAction({ type: 'brushSelect', batch: t }), (i[h] = !1);
        }
      }
      function g(e, t, i, n) {
        for (var a = 0, o = t.length; a < o; a++) {
          var r = t[a];
          if (e[r.brushType](n, i, r.selectors, r)) return !0;
        }
      }
      function f(e) {
        var t = e.brushSelector;
        if (a.isString(t)) {
          var i = [];
          return (
            a.each(s, function(e, n) {
              i[n] = function(i, n, a, o) {
                var r = n.getItemLayout(i);
                return e[t](r, a, o);
              };
            }),
            i
          );
        }
        if (a.isFunction(t)) {
          var n = {};
          return (
            a.each(s, function(e, i) {
              n[i] = t;
            }),
            n
          );
        }
        return t;
      }
      n.registerLayout(d, function(e, t, i) {
        e.eachComponent({ mainType: 'brush' }, function(t) {
          i && 'takeGlobalCursor' === i.type && t.setBrushOption('brush' === i.key ? i.brushOption : { brushType: !1 }),
            (t.brushTargetManager = new c(t.option, e)).setInputRanges(t.areas, e);
        });
      }),
        n.registerVisual(d, function(e, t, i) {
          var n,
            o,
            c = [];
          e.eachComponent({ mainType: 'brush' }, function(t, i) {
            var l = { brushId: t.id, brushIndex: i, brushName: t.name, areas: a.clone(t.areas), selected: [] };
            c.push(l);
            var h = t.option,
              d = h.brushLink,
              p = [],
              v = [],
              y = [],
              x = 0;
            i || ((n = h.throttleType), (o = h.throttleDelay));
            var _ = a.map(t.areas, function(e) {
                return (function(e) {
                  var t = (e.selectors = {});
                  return (
                    a.each(s[e.brushType], function(i, n) {
                      t[n] = function(n) {
                        return i(n, t, e);
                      };
                    }),
                    e
                  );
                })(a.defaults({ boundingRect: m[e.brushType](e) }, e));
              }),
              b = r.createVisualMappings(t.option, u, function(e) {
                e.mappingMethod = 'fixed';
              });
            function S(e) {
              return 'all' === d || p[e];
            }
            function w(e) {
              return !!e.length;
            }
            a.isArray(d) &&
              a.each(d, function(e) {
                p[e] = 1;
              }),
              e.eachSeries(function(i, n) {
                var o = (y[n] = []);
                'parallel' === i.subType
                  ? (function(e, t) {
                      var i = e.coordinateSystem;
                      (x |= i.hasAxisBrushed()),
                        S(t) &&
                          i.eachActiveState(e.getData(), function(e, t) {
                            'active' === e && (v[t] = 1);
                          });
                    })(i, n)
                  : (function(i, n, o) {
                      var r = f(i);
                      if (
                        r &&
                        !(function(e, t) {
                          var i = e.option.seriesIndex;
                          return null != i && 'all' !== i && (a.isArray(i) ? a.indexOf(i, t) < 0 : t !== i);
                        })(t, n) &&
                        (a.each(_, function(n) {
                          r[n.brushType] && t.brushTargetManager.controlSeries(n, i, e) && o.push(n), (x |= w(o));
                        }),
                        S(n) && w(o))
                      ) {
                        var s = i.getData();
                        s.each(function(e) {
                          g(r, o, s, e) && (v[e] = 1);
                        });
                      }
                    })(i, n, o);
              }),
              e.eachSeries(function(e, t) {
                var i = { seriesId: e.id, seriesIndex: t, seriesName: e.name, dataIndex: [] };
                l.selected.push(i);
                var n = f(e),
                  a = y[t],
                  o = e.getData(),
                  s = S(t)
                    ? function(e) {
                        return v[e] ? (i.dataIndex.push(o.getRawIndex(e)), 'inBrush') : 'outOfBrush';
                      }
                    : function(e) {
                        return g(n, a, o, e) ? (i.dataIndex.push(o.getRawIndex(e)), 'inBrush') : 'outOfBrush';
                      };
                (S(t) ? x : w(a)) && r.applyVisual(u, b, o, s);
              });
          }),
            (function(e, t, i, n, a) {
              if (a) {
                var o = e.getZr();
                o[h] ||
                  (o.__ecBrushSelect || (o.__ecBrushSelect = p), l.createOrUpdate(o, '__ecBrushSelect', i, t)(e, n));
              }
            })(t, n, o, c, i);
        });
      var m = {
        lineX: a.noop,
        lineY: a.noop,
        rect: function(e) {
          return v(e.range);
        },
        polygon: function(e) {
          for (var t, i = e.range, n = 0, a = i.length; n < a; n++) {
            var o = i[n];
            o[0] <
              (t = t || [
                [1 / 0, -1 / 0],
                [1 / 0, -1 / 0],
              ])[0][0] && (t[0][0] = o[0]),
              o[0] > t[0][1] && (t[0][1] = o[0]),
              o[1] < t[1][0] && (t[1][0] = o[1]),
              o[1] > t[1][1] && (t[1][1] = o[1]);
          }
          return t && v(t);
        },
      };
      function v(e) {
        return new o(e[0][0], e[1][0], e[0][1] - e[0][0], e[1][1] - e[1][0]);
      }
    },
    'ERHi': function(e, t, i) {
      var n = i('ProS');
      i('Z6js'), i('R4Th');
      var a = i('f5Yq'),
        o = i('h8O9');
      n.registerVisual(a('effectScatter', 'circle')), n.registerLayout(o('effectScatter'));
    },
    'F0hE': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('ca2m'),
        r = i('Qxkt'),
        s = i('ICMv'),
        l = o.valueAxis;
      function c(e, t) {
        return a.defaults({ show: t }, e);
      }
      var u = n.extendComponentModel({
        type: 'radar',
        optionUpdated: function() {
          var e = this.get('boundaryGap'),
            t = this.get('splitNumber'),
            i = this.get('scale'),
            n = this.get('axisLine'),
            o = this.get('axisTick'),
            l = this.get('axisLabel'),
            c = this.get('name'),
            u = this.get('name.show'),
            h = this.get('name.formatter'),
            d = this.get('nameGap'),
            p = this.get('triggerEvent'),
            g = a.map(
              this.get('indicator') || [],
              function(g) {
                null != g.max && g.max > 0 && !g.min
                  ? (g.min = 0)
                  : null != g.min && g.min < 0 && !g.max && (g.max = 0);
                var f = c;
                if (
                  (null != g.color && (f = a.defaults({ color: g.color }, c)),
                  (g = a.merge(
                    a.clone(g),
                    {
                      boundaryGap: e,
                      splitNumber: t,
                      scale: i,
                      axisLine: n,
                      axisTick: o,
                      axisLabel: l,
                      name: g.text,
                      nameLocation: 'end',
                      nameGap: d,
                      nameTextStyle: f,
                      triggerEvent: p,
                    },
                    !1,
                  )),
                  u || (g.name = ''),
                  'string' == typeof h)
                ) {
                  var m = g.name;
                  g.name = h.replace('{value}', null != m ? m : '');
                } else 'function' == typeof h && (g.name = h(g.name, g));
                var v = a.extend(new r(g, null, this.ecModel), s);
                return (v.mainType = 'radar'), (v.componentIndex = this.componentIndex), v;
              },
              this,
            );
          this.getIndicatorModels = function() {
            return g;
          };
        },
        defaultOption: {
          zlevel: 0,
          z: 0,
          center: ['50%', '50%'],
          radius: '75%',
          startAngle: 90,
          name: { show: !0 },
          boundaryGap: [0, 0],
          splitNumber: 5,
          nameGap: 15,
          scale: !1,
          shape: 'polygon',
          axisLine: a.merge({ lineStyle: { color: '#bbb' } }, l.axisLine),
          axisLabel: c(l.axisLabel, !1),
          axisTick: c(l.axisTick, !1),
          splitLine: c(l.splitLine, !0),
          splitArea: c(l.splitArea, !0),
          indicator: [],
        },
      });
      e.exports = u;
    },
    'F5Ls': function(e, t) {
      var i = { 南海诸岛: [32, 80], 广东: [0, -10], 香港: [10, 5], 澳门: [-10, 10], 天津: [5, 5] };
      e.exports = function(e, t) {
        if ('china' === e) {
          var n = i[t.name];
          if (n) {
            var a = t.center;
            (a[0] += n[0] / 10.5), (a[1] += -n[1] / 14);
          }
        }
      };
    },
    'F7hV': function(e, t, i) {
      var n = i('MBQ8').extend({
        type: 'series.bar',
        dependencies: ['grid', 'polar'],
        brushSelector: 'rect',
        getProgressive: function() {
          return !!this.get('large') && this.get('progressive');
        },
        getProgressiveThreshold: function() {
          var e = this.get('progressiveThreshold'),
            t = this.get('largeThreshold');
          return t > e && (e = t), e;
        },
      });
      e.exports = n;
    },
    'FGaS': function(e, t, i) {
      var n = i('ProS'),
        a = i('IwbS'),
        o = i('bYtY'),
        r = i('oVpE'),
        s = n.extendChartView({
          type: 'radar',
          render: function(e, t, i) {
            var n = e.coordinateSystem,
              s = this.group,
              l = e.getData(),
              c = this._data;
            function u(e, t) {
              var i = e.getItemVisual(t, 'symbol') || 'circle',
                n = e.getItemVisual(t, 'color');
              if ('none' !== i) {
                var a = (function(e) {
                    return o.isArray(e) || (e = [+e, +e]), e;
                  })(e.getItemVisual(t, 'symbolSize')),
                  s = r.createSymbol(i, -1, -1, 2, 2, n);
                return s.attr({ style: { strokeNoScale: !0 }, z2: 100, scale: [a[0] / 2, a[1] / 2] }), s;
              }
            }
            function h(t, i, n, o, r, s) {
              n.removeAll();
              for (var l = 0; l < i.length - 1; l++) {
                var c = u(o, r);
                c &&
                  ((c.__dimIdx = l),
                  t[l]
                    ? (c.attr('position', t[l]), a[s ? 'initProps' : 'updateProps'](c, { position: i[l] }, e, r))
                    : c.attr('position', i[l]),
                  n.add(c));
              }
            }
            function d(e) {
              return o.map(e, function(e) {
                return [n.cx, n.cy];
              });
            }
            l
              .diff(c)
              .add(function(t) {
                var i = l.getItemLayout(t);
                if (i) {
                  var n = new a.Polygon(),
                    o = new a.Polyline(),
                    r = { shape: { points: i } };
                  (n.shape.points = d(i)), (o.shape.points = d(i)), a.initProps(n, r, e, t), a.initProps(o, r, e, t);
                  var s = new a.Group(),
                    c = new a.Group();
                  s.add(o), s.add(n), s.add(c), h(o.shape.points, i, c, l, t, !0), l.setItemGraphicEl(t, s);
                }
              })
              .update(function(t, i) {
                var n = c.getItemGraphicEl(i),
                  o = n.childAt(0),
                  r = n.childAt(1),
                  s = n.childAt(2),
                  u = { shape: { points: l.getItemLayout(t) } };
                u.shape.points &&
                  (h(o.shape.points, u.shape.points, s, l, t, !1),
                  a.updateProps(o, u, e),
                  a.updateProps(r, u, e),
                  l.setItemGraphicEl(t, n));
              })
              .remove(function(e) {
                s.remove(c.getItemGraphicEl(e));
              })
              .execute(),
              l.eachItemGraphicEl(function(e, t) {
                var i = l.getItemModel(t),
                  n = e.childAt(0),
                  r = e.childAt(1),
                  c = e.childAt(2),
                  u = l.getItemVisual(t, 'color');
                s.add(e),
                  n.useStyle(o.defaults(i.getModel('lineStyle').getLineStyle(), { fill: 'none', stroke: u })),
                  (n.hoverStyle = i.getModel('emphasis.lineStyle').getLineStyle());
                var h = i.getModel('areaStyle'),
                  d = i.getModel('emphasis.areaStyle'),
                  p = h.isEmpty() && h.parentModel.isEmpty(),
                  g = d.isEmpty() && d.parentModel.isEmpty();
                (g = g && p),
                  (r.ignore = p),
                  r.useStyle(o.defaults(h.getAreaStyle(), { fill: u, opacity: 0.7 })),
                  (r.hoverStyle = d.getAreaStyle());
                var f = i.getModel('itemStyle').getItemStyle(['color']),
                  m = i.getModel('emphasis.itemStyle').getItemStyle(),
                  v = i.getModel('label'),
                  y = i.getModel('emphasis.label');
                function x() {
                  r.attr('ignore', g);
                }
                function _() {
                  r.attr('ignore', p);
                }
                c.eachChild(function(e) {
                  e.setStyle(f),
                    (e.hoverStyle = o.clone(m)),
                    a.setLabelStyle(e.style, e.hoverStyle, v, y, {
                      labelFetcher: l.hostModel,
                      labelDataIndex: t,
                      labelDimIndex: e.__dimIdx,
                      defaultText: l.get(l.dimensions[e.__dimIdx], t),
                      autoColor: u,
                      isRectText: !0,
                    });
                }),
                  e
                    .off('mouseover')
                    .off('mouseout')
                    .off('normal')
                    .off('emphasis'),
                  e
                    .on('emphasis', x)
                    .on('mouseover', x)
                    .on('normal', _)
                    .on('mouseout', _),
                  a.setHoverStyle(e);
              }),
              (this._data = l);
          },
          remove: function() {
            this.group.removeAll(), (this._data = null);
          },
          dispose: function() {},
        });
      e.exports = s;
    },
    'FNN5': function(e, t, i) {
      var n = i('bYtY'),
        a = i('IwbS'),
        o = i('+rIm'),
        r = i('Znkb'),
        s = ['axisLine', 'axisTickLabel', 'axisName'],
        l = ['splitLine', 'splitArea'],
        c = r.extend({
          type: 'radiusAxis',
          axisPointerClass: 'PolarAxisPointer',
          render: function(e, t) {
            if ((this.group.removeAll(), e.get('show'))) {
              var i = e.axis,
                a = i.polar,
                r = a.getAngleAxis(),
                c = i.getTicksCoords(),
                u = r.getExtent()[0],
                h = i.getExtent(),
                d = (function(e, t, i) {
                  return {
                    position: [e.cx, e.cy],
                    rotation: (i / 180) * Math.PI,
                    labelDirection: -1,
                    tickDirection: -1,
                    nameDirection: 1,
                    labelRotate: t.getModel('axisLabel').get('rotate'),
                    z2: 1,
                  };
                })(a, e, u),
                p = new o(e, d);
              n.each(s, p.add, p),
                this.group.add(p.getGroup()),
                n.each(
                  l,
                  function(t) {
                    e.get(t + '.show') && !i.scale.isBlank() && this['_' + t](e, a, u, h, c);
                  },
                  this,
                );
            }
          },
          _splitLine: function(e, t, i, o, r) {
            var s = e.getModel('splitLine').getModel('lineStyle'),
              l = s.get('color'),
              c = 0;
            l = l instanceof Array ? l : [l];
            for (var u = [], h = 0; h < r.length; h++) {
              var d = c++ % l.length;
              (u[d] = u[d] || []),
                u[d].push(new a.Circle({ shape: { cx: t.cx, cy: t.cy, r: r[h].coord }, silent: !0 }));
            }
            for (h = 0; h < u.length; h++)
              this.group.add(
                a.mergePath(u[h], {
                  style: n.defaults({ stroke: l[h % l.length], fill: null }, s.getLineStyle()),
                  silent: !0,
                }),
              );
          },
          _splitArea: function(e, t, i, o, r) {
            if (r.length) {
              var s = e.getModel('splitArea').getModel('areaStyle'),
                l = s.get('color'),
                c = 0;
              l = l instanceof Array ? l : [l];
              for (var u = [], h = r[0].coord, d = 1; d < r.length; d++) {
                var p = c++ % l.length;
                (u[p] = u[p] || []),
                  u[p].push(
                    new a.Sector({
                      shape: { cx: t.cx, cy: t.cy, r0: h, r: r[d].coord, startAngle: 0, endAngle: 2 * Math.PI },
                      silent: !0,
                    }),
                  ),
                  (h = r[d].coord);
              }
              for (d = 0; d < u.length; d++)
                this.group.add(
                  a.mergePath(u[d], { style: n.defaults({ fill: l[d % l.length] }, s.getAreaStyle()), silent: !0 }),
                );
            }
          },
        });
      e.exports = c;
    },
    'Fa/5': function(e, t, i) {
      var n = i('ProS');
      i('y2l5'), i('q/+u');
      var a = i('f5Yq'),
        o = i('h8O9');
      i('Ae16'), n.registerVisual(a('scatter', 'circle')), n.registerLayout(o('scatter'));
    },
    'GVMX': function(e, t, i) {
      var n = i('JEkh').extend({
        type: 'markLine',
        defaultOption: {
          zlevel: 0,
          z: 5,
          symbol: ['circle', 'arrow'],
          symbolSize: [8, 16],
          precision: 2,
          tooltip: { trigger: 'item' },
          label: { show: !0, position: 'end' },
          lineStyle: { type: 'dashed' },
          emphasis: { label: { show: !0 }, lineStyle: { width: 3 } },
          animationEasing: 'linear',
        },
      });
      e.exports = n;
    },
    'GeKi': function(e, t, i) {
      var n = i('bYtY'),
        a = i('6Ic6'),
        o = i('IwbS'),
        r = i('y+Vt'),
        s = ['itemStyle'],
        l = ['emphasis', 'itemStyle'],
        c = ['color', 'color0', 'borderColor', 'borderColor0'],
        u = a.extend({
          type: 'candlestick',
          render: function(e, t, i) {
            this._updateDrawMode(e), this._isLargeDraw ? this._renderLarge(e) : this._renderNormal(e);
          },
          incrementalPrepareRender: function(e, t, i) {
            this._clear(), this._updateDrawMode(e);
          },
          incrementalRender: function(e, t, i, n) {
            this._isLargeDraw ? this._incrementalRenderLarge(e, t) : this._incrementalRenderNormal(e, t);
          },
          _updateDrawMode: function(e) {
            var t = e.pipelineContext.large;
            (null == this._isLargeDraw || t ^ this._isLargeDraw) && ((this._isLargeDraw = t), this._clear());
          },
          _renderNormal: function(e) {
            var t = e.getData(),
              i = this._data,
              n = this.group,
              a = t.getLayout('isSimpleBox');
            this._data || n.removeAll(),
              t
                .diff(i)
                .add(function(i) {
                  if (t.hasValue(i)) {
                    var r,
                      s = t.getItemLayout(i);
                    (r = d(s, 0, !0)),
                      o.initProps(r, { shape: { points: s.ends } }, e, i),
                      p(r, t, i, a),
                      n.add(r),
                      t.setItemGraphicEl(i, r);
                  }
                })
                .update(function(r, s) {
                  var l = i.getItemGraphicEl(s);
                  if (t.hasValue(r)) {
                    var c = t.getItemLayout(r);
                    l ? o.updateProps(l, { shape: { points: c.ends } }, e, r) : (l = d(c)),
                      p(l, t, r, a),
                      n.add(l),
                      t.setItemGraphicEl(r, l);
                  } else n.remove(l);
                })
                .remove(function(e) {
                  var t = i.getItemGraphicEl(e);
                  t && n.remove(t);
                })
                .execute(),
              (this._data = t);
          },
          _renderLarge: function(e) {
            this._clear(), m(e, this.group);
          },
          _incrementalRenderNormal: function(e, t) {
            for (var i, n = t.getData(), a = n.getLayout('isSimpleBox'); null != (i = e.next()); ) {
              var o;
              p((o = d(n.getItemLayout(i))), n, i, a), (o.incremental = !0), this.group.add(o);
            }
          },
          _incrementalRenderLarge: function(e, t) {
            m(t, this.group, !0);
          },
          remove: function(e) {
            this._clear();
          },
          _clear: function() {
            this.group.removeAll(), (this._data = null);
          },
          dispose: n.noop,
        }),
        h = r.extend({
          type: 'normalCandlestickBox',
          shape: {},
          buildPath: function(e, t) {
            var i = t.points;
            this.__simpleBox
              ? (e.moveTo(i[4][0], i[4][1]), e.lineTo(i[6][0], i[6][1]))
              : (e.moveTo(i[0][0], i[0][1]),
                e.lineTo(i[1][0], i[1][1]),
                e.lineTo(i[2][0], i[2][1]),
                e.lineTo(i[3][0], i[3][1]),
                e.closePath(),
                e.moveTo(i[4][0], i[4][1]),
                e.lineTo(i[5][0], i[5][1]),
                e.moveTo(i[6][0], i[6][1]),
                e.lineTo(i[7][0], i[7][1]));
          },
        });
      function d(e, t, i) {
        var n = e.ends;
        return new h({ shape: { points: i ? g(n, e) : n }, z2: 100 });
      }
      function p(e, t, i, n) {
        var a = t.getItemModel(i),
          r = a.getModel(s),
          u = t.getItemVisual(i, 'color'),
          h = t.getItemVisual(i, 'borderColor') || u,
          d = r.getItemStyle(c);
        e.useStyle(d), (e.style.strokeNoScale = !0), (e.style.fill = u), (e.style.stroke = h), (e.__simpleBox = n);
        var p = a.getModel(l).getItemStyle();
        o.setHoverStyle(e, p);
      }
      function g(e, t) {
        return n.map(e, function(e) {
          return ((e = e.slice())[1] = t.initBaseline), e;
        });
      }
      var f = r.extend({
        type: 'largeCandlestickBox',
        shape: {},
        buildPath: function(e, t) {
          for (var i = t.points, n = 0; n < i.length; )
            if (this.__sign === i[n++]) {
              var a = i[n++];
              e.moveTo(a, i[n++]), e.lineTo(a, i[n++]);
            } else n += 3;
        },
      });
      function m(e, t, i) {
        var n = e.getData(),
          a = n.getLayout('largePoints'),
          o = new f({ shape: { points: a }, __sign: 1 });
        t.add(o);
        var r = new f({ shape: { points: a }, __sign: -1 });
        t.add(r), v(1, o, e, n), v(-1, r, e, n), i && ((o.incremental = !0), (r.incremental = !0));
      }
      function v(e, t, i, n) {
        var a = e > 0 ? 'P' : 'N',
          o = n.getVisual('borderColor' + a) || n.getVisual('color' + a),
          r = i.getModel(s).getItemStyle(c);
        t.useStyle(r), (t.style.fill = null), (t.style.stroke = o);
      }
      e.exports = u;
    },
    'HM/N': function(e, t, i) {
      i('Tghj');
      var n = i('bYtY'),
        a = i('/SeX'),
        o = i('OELB').parsePercent,
        r = i('aX7z'),
        s = r.createScaleByModel,
        l = r.niceScaleExtent,
        c = i('IDmD'),
        u = i('7hqr').getStackedDimension;
      function h(e, t) {
        var i = this,
          a = i.getAngleAxis(),
          o = i.getRadiusAxis();
        if (
          (a.scale.setExtent(1 / 0, -1 / 0),
          o.scale.setExtent(1 / 0, -1 / 0),
          e.eachSeries(function(e) {
            if (e.coordinateSystem === i) {
              var t = e.getData();
              n.each(t.mapDimension('radius', !0), function(e) {
                o.scale.unionExtentFromData(t, u(t, e));
              }),
                n.each(t.mapDimension('angle', !0), function(e) {
                  a.scale.unionExtentFromData(t, u(t, e));
                });
            }
          }),
          l(a.scale, a.model),
          l(o.scale, o.model),
          'category' === a.type && !a.onBand)
        ) {
          var r = a.getExtent(),
            s = 360 / a.scale.count();
          a.inverse ? (r[1] += s) : (r[1] -= s), a.setExtent(r[0], r[1]);
        }
      }
      function d(e, t) {
        if (
          ((e.type = t.get('type')),
          (e.scale = s(t)),
          (e.onBand = t.get('boundaryGap') && 'category' === e.type),
          (e.inverse = t.get('inverse')),
          'angleAxis' === t.mainType)
        ) {
          e.inverse ^= t.get('clockwise');
          var i = t.get('startAngle');
          e.setExtent(i, i + (e.inverse ? -360 : 360));
        }
        (t.axis = e), (e.model = t);
      }
      i('ePAk'),
        c.register('polar', {
          dimensions: a.prototype.dimensions,
          create: function(e, t) {
            var i = [];
            return (
              e.eachComponent('polar', function(e, n) {
                var r = new a(n);
                r.update = h;
                var s = r.getRadiusAxis(),
                  l = r.getAngleAxis(),
                  c = e.findAxisModel('radiusAxis'),
                  u = e.findAxisModel('angleAxis');
                d(s, c),
                  d(l, u),
                  (function(e, t, i) {
                    var n = t.get('center'),
                      a = i.getWidth(),
                      r = i.getHeight();
                    (e.cx = o(n[0], a)), (e.cy = o(n[1], r));
                    var s = e.getRadiusAxis(),
                      l = Math.min(a, r) / 2,
                      c = o(t.get('radius'), l);
                    s.inverse ? s.setExtent(c, 0) : s.setExtent(0, c);
                  })(r, e, t),
                  i.push(r),
                  (e.coordinateSystem = r),
                  (r.model = e);
              }),
              e.eachSeries(function(t) {
                if ('polar' === t.get('coordinateSystem')) {
                  var i = e.queryComponents({ mainType: 'polar', index: t.get('polarIndex'), id: t.get('polarId') })[0];
                  t.coordinateSystem = i.coordinateSystem;
                }
              }),
              i
            );
          },
        });
    },
    'HjIi': function(e, t, i) {
      var n = i('bYtY'),
        a = i('OELB').parsePercent,
        o = i('7hqr').isDimensionStacked;
      function r(e) {
        return e.get('stack') || '__ec_stack_' + e.seriesIndex;
      }
      function s(e) {
        return e.dim;
      }
      e.exports = function(e, t, i) {
        i.getWidth(), i.getHeight();
        var l = {},
          c = (function(e, t) {
            var i = {};
            n.each(e, function(e, t) {
              var n = e.getData(),
                o = e.coordinateSystem.getBaseAxis(),
                l = o.getExtent(),
                c = 'category' === o.type ? o.getBandWidth() : Math.abs(l[1] - l[0]) / n.count(),
                u = i[s(o)] || {
                  bandWidth: c,
                  remainedWidth: c,
                  autoWidthCount: 0,
                  categoryGap: '20%',
                  gap: '30%',
                  stacks: {},
                },
                h = u.stacks;
              i[s(o)] = u;
              var d = r(e);
              h[d] || u.autoWidthCount++, (h[d] = h[d] || { width: 0, maxWidth: 0 });
              var p = a(e.get('barWidth'), c),
                g = a(e.get('barMaxWidth'), c),
                f = e.get('barGap'),
                m = e.get('barCategoryGap');
              p && !h[d].width && ((p = Math.min(u.remainedWidth, p)), (h[d].width = p), (u.remainedWidth -= p)),
                g && (h[d].maxWidth = g),
                null != f && (u.gap = f),
                null != m && (u.categoryGap = m);
            });
            var o = {};
            return (
              n.each(i, function(e, t) {
                o[t] = {};
                var i = e.stacks,
                  r = a(e.categoryGap, e.bandWidth),
                  s = a(e.gap, 1),
                  l = e.remainedWidth,
                  c = e.autoWidthCount,
                  u = (l - r) / (c + (c - 1) * s);
                (u = Math.max(u, 0)),
                  n.each(i, function(e, t) {
                    var i = e.maxWidth;
                    i &&
                      i < u &&
                      ((i = Math.min(i, l)), e.width && (i = Math.min(i, e.width)), (l -= i), (e.width = i), c--);
                  }),
                  (u = (l - r) / (c + (c - 1) * s)),
                  (u = Math.max(u, 0));
                var h,
                  d = 0;
                n.each(i, function(e, t) {
                  e.width || (e.width = u), (h = e), (d += e.width * (1 + s));
                }),
                  h && (d -= h.width * s);
                var p = -d / 2;
                n.each(i, function(e, i) {
                  (o[t][i] = o[t][i] || { offset: p, width: e.width }), (p += e.width * (1 + s));
                });
              }),
              o
            );
          })(
            n.filter(t.getSeriesByType(e), function(e) {
              return !t.isSeriesFiltered(e) && e.coordinateSystem && 'polar' === e.coordinateSystem.type;
            }),
          );
        t.eachSeriesByType(
          e,
          function(e) {
            if ('polar' === e.coordinateSystem.type) {
              var t = e.getData(),
                i = e.coordinateSystem,
                n = i.getBaseAxis(),
                a = r(e),
                u = c[s(n)][a],
                h = u.offset,
                d = u.width,
                p = i.getOtherAxis(n),
                g = e.coordinateSystem.cx,
                f = e.coordinateSystem.cy,
                m = e.get('barMinHeight') || 0,
                v = e.get('barMinAngle') || 0;
              l[a] = l[a] || [];
              for (
                var y = t.mapDimension(p.dim),
                  x = t.mapDimension(n.dim),
                  _ = o(t, y),
                  b = p.getExtent()[0],
                  S = 0,
                  w = t.count();
                S < w;
                S++
              ) {
                var M = t.get(y, S),
                  I = t.get(x, S);
                if (!isNaN(M)) {
                  var A,
                    D,
                    T,
                    P,
                    L = M >= 0 ? 'p' : 'n',
                    C = b;
                  if ((_ && (l[a][I] || (l[a][I] = { p: b, n: b }), (C = l[a][I][L])), 'radius' === p.dim)) {
                    var k = p.dataToRadius(M) - b,
                      z = n.dataToAngle(I);
                    Math.abs(k) < m && (k = (k < 0 ? -1 : 1) * m),
                      (A = C),
                      (D = C + k),
                      (P = (T = z - h) - d),
                      _ && (l[a][I][L] = D);
                  } else {
                    var O = p.dataToAngle(M, !0) - b,
                      R = n.dataToRadius(I);
                    Math.abs(O) < v && (O = (O < 0 ? -1 : 1) * v),
                      (D = (A = R + h) + d),
                      (T = C),
                      (P = C + O),
                      _ && (l[a][I][L] = P);
                  }
                  t.setItemLayout(S, {
                    cx: g,
                    cy: f,
                    r0: A,
                    r: D,
                    startAngle: (-T * Math.PI) / 180,
                    endAngle: (-P * Math.PI) / 180,
                  });
                }
              }
            }
          },
          this,
        );
      };
    },
    'Hw7h': function(e, t, i) {
      var n = i('y+Vt').extend({
        type: 'echartsGaugePointer',
        shape: { angle: 0, width: 10, r: 10, x: 0, y: 0 },
        buildPath: function(e, t) {
          var i = Math.cos,
            n = Math.sin,
            a = t.r,
            o = t.width,
            r = t.angle,
            s = t.x - i(r) * o * (o >= a / 3 ? 1 : 2),
            l = t.y - n(r) * o * (o >= a / 3 ? 1 : 2);
          (r = t.angle - Math.PI / 2),
            e.moveTo(s, l),
            e.lineTo(t.x + i(r) * o, t.y + n(r) * o),
            e.lineTo(t.x + i(t.angle) * a, t.y + n(t.angle) * a),
            e.lineTo(t.x - i(r) * o, t.y - n(r) * o),
            e.lineTo(s, l);
        },
      });
      e.exports = n;
    },
    'Hxpc': function(e, t, i) {
      var n = i('bYtY'),
        a = i('4NO4'),
        o = i('bLfw'),
        r = i('Qxkt'),
        s = i('cCMj'),
        l = i('7uqq'),
        c = o.extend({
          type: 'geo',
          coordinateSystem: null,
          layoutMode: 'box',
          init: function(e) {
            o.prototype.init.apply(this, arguments), a.defaultEmphasis(e, 'label', ['show']);
          },
          optionUpdated: function() {
            var e = this.option,
              t = this;
            (e.regions = l.getFilledRegions(e.regions, e.map, e.nameMap)),
              (this._optionModelMap = n.reduce(
                e.regions || [],
                function(e, i) {
                  return i.name && e.set(i.name, new r(i, t)), e;
                },
                n.createHashMap(),
              )),
              this.updateSelectedMap(e.regions);
          },
          defaultOption: {
            zlevel: 0,
            z: 0,
            show: !0,
            left: 'center',
            top: 'center',
            aspectScale: null,
            silent: !1,
            map: '',
            boundingCoords: null,
            center: null,
            zoom: 1,
            scaleLimit: null,
            label: { show: !1, color: '#000' },
            itemStyle: { borderWidth: 0.5, borderColor: '#444', color: '#eee' },
            emphasis: { label: { show: !0, color: 'rgb(100,0,0)' }, itemStyle: { color: 'rgba(255,215,0,0.8)' } },
            regions: [],
          },
          getRegionModel: function(e) {
            return this._optionModelMap.get(e) || new r(null, this, this.ecModel);
          },
          getFormattedLabel: function(e, t) {
            var i = this.getRegionModel(e).get('label.' + t + '.formatter'),
              n = { name: e };
            return 'function' == typeof i
              ? ((n.status = t), i(n))
              : 'string' == typeof i
              ? i.replace('{a}', null != e ? e : '')
              : void 0;
          },
          setZoom: function(e) {
            this.option.zoom = e;
          },
          setCenter: function(e) {
            this.option.center = e;
          },
        });
      n.mixin(c, s), (e.exports = c);
    },
    'I+Bx': function(e, t, i) {
      var n = i('bYtY'),
        a = i('eIcI'),
        o = i('ieMj'),
        r = i('OELB'),
        s = i('aX7z'),
        l = s.getScaleExtent,
        c = s.niceScaleExtent,
        u = i('IDmD');
      function h(e, t, i) {
        (this._model = e),
          (this.dimensions = []),
          (this._indicatorAxes = n.map(
            e.getIndicatorModels(),
            function(e, t) {
              var i = 'indicator_' + t,
                n = new a(i, new o());
              return (n.name = e.get('name')), (n.model = e), (e.axis = n), this.dimensions.push(i), n;
            },
            this,
          )),
          this.resize(e, i);
      }
      (h.prototype.getIndicatorAxes = function() {
        return this._indicatorAxes;
      }),
        (h.prototype.dataToPoint = function(e, t) {
          return this.coordToPoint(this._indicatorAxes[t].dataToCoord(e), t);
        }),
        (h.prototype.coordToPoint = function(e, t) {
          var i = this._indicatorAxes[t].angle;
          return [this.cx + e * Math.cos(i), this.cy - e * Math.sin(i)];
        }),
        (h.prototype.pointToData = function(e) {
          var t = e[0] - this.cx,
            i = e[1] - this.cy,
            n = Math.sqrt(t * t + i * i);
          (t /= n), (i /= n);
          for (var a, o = Math.atan2(-i, t), r = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
            var c = this._indicatorAxes[l],
              u = Math.abs(o - c.angle);
            u < r && ((a = c), (s = l), (r = u));
          }
          return [s, +(a && a.coodToData(n))];
        }),
        (h.prototype.resize = function(e, t) {
          var i = e.get('center'),
            a = t.getWidth(),
            o = t.getHeight(),
            s = Math.min(a, o) / 2;
          (this.cx = r.parsePercent(i[0], a)),
            (this.cy = r.parsePercent(i[1], o)),
            (this.startAngle = (e.get('startAngle') * Math.PI) / 180);
          var l = e.get('radius');
          ('string' != typeof l && 'number' != typeof l) || (l = [0, l]),
            (this.r0 = r.parsePercent(l[0], s)),
            (this.r = r.parsePercent(l[1], s)),
            n.each(
              this._indicatorAxes,
              function(e, t) {
                e.setExtent(this.r0, this.r);
                var i = this.startAngle + (t * Math.PI * 2) / this._indicatorAxes.length;
                (i = Math.atan2(Math.sin(i), Math.cos(i))), (e.angle = i);
              },
              this,
            );
        }),
        (h.prototype.update = function(e, t) {
          var i = this._indicatorAxes,
            a = this._model;
          n.each(i, function(e) {
            e.scale.setExtent(1 / 0, -1 / 0);
          }),
            e.eachSeriesByType(
              'radar',
              function(t, o) {
                if ('radar' === t.get('coordinateSystem') && e.getComponent('radar', t.get('radarIndex')) === a) {
                  var r = t.getData();
                  n.each(i, function(e) {
                    e.scale.unionExtentFromData(r, r.mapDimension(e.dim));
                  });
                }
              },
              this,
            );
          var o = a.get('splitNumber');
          function s(e) {
            var t = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)),
              i = e / t;
            return 2 === i ? (i = 5) : (i *= 2), i * t;
          }
          n.each(i, function(e, t) {
            var i = l(e.scale, e.model);
            c(e.scale, e.model);
            var n = e.model,
              a = e.scale,
              u = n.getMin(),
              h = n.getMax(),
              d = a.getInterval();
            if (null != u && null != h) a.setExtent(+u, +h), a.setInterval((h - u) / o);
            else if (null != u) {
              var p;
              do {
                a.setExtent(+u, (p = u + d * o)), a.setInterval(d), (d = s(d));
              } while (p < i[1] && isFinite(p) && isFinite(i[1]));
            } else if (null != h) {
              var g;
              do {
                a.setExtent((g = h - d * o), +h), a.setInterval(d), (d = s(d));
              } while (g > i[0] && isFinite(g) && isFinite(i[0]));
            } else {
              a.getTicks().length - 1 > o && (d = s(d));
              var f = Math.round((i[0] + i[1]) / 2 / d) * d,
                m = Math.round(o / 2);
              a.setExtent(r.round(f - m * d), r.round(f + (o - m) * d)), a.setInterval(d);
            }
          });
        }),
        (h.dimensions = []),
        (h.create = function(e, t) {
          var i = [];
          return (
            e.eachComponent('radar', function(n) {
              var a = new h(n, e, t);
              i.push(a), (n.coordinateSystem = a);
            }),
            e.eachSeriesByType('radar', function(e) {
              'radar' === e.get('coordinateSystem') && (e.coordinateSystem = i[e.get('radarIndex') || 0]);
            }),
            i
          );
        }),
        u.register('radar', h),
        (e.exports = h);
    },
    'IXyC': function(e, t, i) {
      var n = i('bYtY'),
        a = i('bLfw');
      i('3zoK');
      var o = a.extend({
        type: 'parallel',
        dependencies: ['parallelAxis'],
        coordinateSystem: null,
        dimensions: null,
        parallelAxisIndex: null,
        layoutMode: 'box',
        defaultOption: {
          zlevel: 0,
          z: 0,
          left: 80,
          top: 60,
          right: 80,
          bottom: 60,
          layout: 'horizontal',
          axisExpandable: !1,
          axisExpandCenter: null,
          axisExpandCount: 0,
          axisExpandWidth: 50,
          axisExpandRate: 17,
          axisExpandDebounce: 50,
          axisExpandSlideTriggerArea: [-0.15, 0.05, 0.4],
          axisExpandTriggerOn: 'click',
          parallelAxisDefault: null,
        },
        init: function() {
          a.prototype.init.apply(this, arguments), this.mergeOption({});
        },
        mergeOption: function(e) {
          e && n.merge(this.option, e, !0), this._initDimensions();
        },
        contains: function(e, t) {
          var i = e.get('parallelIndex');
          return null != i && t.getComponent('parallel', i) === this;
        },
        setAxisExpand: function(e) {
          n.each(
            ['axisExpandable', 'axisExpandCenter', 'axisExpandCount', 'axisExpandWidth', 'axisExpandWindow'],
            function(t) {
              e.hasOwnProperty(t) && (this.option[t] = e[t]);
            },
            this,
          );
        },
        _initDimensions: function() {
          var e = (this.dimensions = []),
            t = (this.parallelAxisIndex = []),
            i = n.filter(
              this.dependentModels.parallelAxis,
              function(e) {
                return (e.get('parallelIndex') || 0) === this.componentIndex;
              },
              this,
            );
          n.each(i, function(i) {
            e.push('dim' + i.get('dim')), t.push(i.componentIndex);
          });
        },
      });
      e.exports = o;
    },
    'IyUQ': function(e, t, i) {
      var n = i('bYtY'),
        a = i('YH21'),
        o = i('IwbS'),
        r = i('iLNv'),
        s = i('fc+c'),
        l = i('OELB'),
        c = i('+TT/'),
        u = i('72pK'),
        h = o.Rect,
        d = l.linearMap,
        p = l.asc,
        g = n.bind,
        f = n.each,
        m = 'horizontal',
        v = 5,
        y = ['line', 'bar', 'candlestick', 'scatter'],
        x = s.extend({
          type: 'dataZoom.slider',
          init: function(e, t) {
            (this._displayables = {}), (this.api = t);
          },
          render: function(e, t, i, n) {
            x.superApply(this, 'render', arguments),
              r.createOrUpdate(this, '_dispatchZoomAction', this.dataZoomModel.get('throttle'), 'fixRate'),
              (this._orient = e.get('orient')),
              !1 !== this.dataZoomModel.get('show')
                ? ((n && 'dataZoom' === n.type && n.from === this.uid) || this._buildView(), this._updateView())
                : this.group.removeAll();
          },
          remove: function() {
            x.superApply(this, 'remove', arguments), r.clear(this, '_dispatchZoomAction');
          },
          dispose: function() {
            x.superApply(this, 'dispose', arguments), r.clear(this, '_dispatchZoomAction');
          },
          _buildView: function() {
            var e = this.group;
            e.removeAll(), this._resetLocation(), this._resetInterval();
            var t = (this._displayables.barGroup = new o.Group());
            this._renderBackground(), this._renderHandle(), this._renderDataShadow(), e.add(t), this._positionGroup();
          },
          _resetLocation: function() {
            var e = this.dataZoomModel,
              t = this.api,
              i = this._findCoordRect(),
              a = { width: t.getWidth(), height: t.getHeight() },
              o =
                this._orient === m
                  ? { right: a.width - i.x - i.width, top: a.height - 30 - 7, width: i.width, height: 30 }
                  : { right: 7, top: i.y, width: 30, height: i.height },
              r = c.getLayoutParams(e.option);
            n.each(['right', 'top', 'width', 'height'], function(e) {
              'ph' === r[e] && (r[e] = o[e]);
            });
            var s = c.getLayoutRect(r, a, e.padding);
            (this._location = { x: s.x, y: s.y }),
              (this._size = [s.width, s.height]),
              'vertical' === this._orient && this._size.reverse();
          },
          _positionGroup: function() {
            var e = this.group,
              t = this._location,
              i = this._orient,
              n = this.dataZoomModel.getFirstTargetAxisModel(),
              a = n && n.get('inverse'),
              o = this._displayables.barGroup,
              r = (this._dataShadowInfo || {}).otherAxisInverse;
            o.attr(
              i !== m || a
                ? i === m && a
                  ? { scale: r ? [-1, 1] : [-1, -1] }
                  : 'vertical' !== i || a
                  ? { scale: r ? [-1, -1] : [-1, 1], rotation: Math.PI / 2 }
                  : { scale: r ? [1, -1] : [1, 1], rotation: Math.PI / 2 }
                : { scale: r ? [1, 1] : [1, -1] },
            );
            var s = e.getBoundingRect([o]);
            e.attr('position', [t.x - s.x, t.y - s.y]);
          },
          _getViewExtent: function() {
            return [0, this._size[0]];
          },
          _renderBackground: function() {
            var e = this._size,
              t = this._displayables.barGroup;
            t.add(
              new h({
                silent: !0,
                shape: { x: 0, y: 0, width: e[0], height: e[1] },
                style: { fill: this.dataZoomModel.get('backgroundColor') },
                z2: -40,
              }),
            ),
              t.add(
                new h({
                  shape: { x: 0, y: 0, width: e[0], height: e[1] },
                  style: { fill: 'transparent' },
                  z2: 0,
                  onclick: n.bind(this._onClickPanelClick, this),
                }),
              );
          },
          _renderDataShadow: function() {
            var e = (this._dataShadowInfo = this._prepareDataShadowInfo());
            if (e) {
              var t = this._size,
                i = e.series,
                a = i.getRawData(),
                r = i.getShadowDim ? i.getShadowDim() : e.otherDim;
              if (null != r) {
                var s = a.getDataExtent(r),
                  l = 0.3 * (s[1] - s[0]);
                s = [s[0] - l, s[1] + l];
                var c,
                  u = [0, t[1]],
                  h = [
                    [t[0], 0],
                    [0, 0],
                  ],
                  p = [],
                  g = t[0] / (a.count() - 1),
                  f = 0,
                  m = Math.round(a.count() / t[0]);
                a.each([r], function(e, t) {
                  if (m > 0 && t % m) f += g;
                  else {
                    var i = null == e || isNaN(e) || '' === e,
                      n = i ? 0 : d(e, s, u, !0);
                    i && !c && t
                      ? (h.push([h[h.length - 1][0], 0]), p.push([p[p.length - 1][0], 0]))
                      : !i && c && (h.push([f, 0]), p.push([f, 0])),
                      h.push([f, n]),
                      p.push([f, n]),
                      (f += g),
                      (c = i);
                  }
                });
                var v = this.dataZoomModel;
                this._displayables.barGroup.add(
                  new o.Polygon({
                    shape: { points: h },
                    style: n.defaults(
                      { fill: v.get('dataBackgroundColor') },
                      v.getModel('dataBackground.areaStyle').getAreaStyle(),
                    ),
                    silent: !0,
                    z2: -20,
                  }),
                ),
                  this._displayables.barGroup.add(
                    new o.Polyline({
                      shape: { points: p },
                      style: v.getModel('dataBackground.lineStyle').getLineStyle(),
                      silent: !0,
                      z2: -19,
                    }),
                  );
              }
            }
          },
          _prepareDataShadowInfo: function() {
            var e = this.dataZoomModel,
              t = e.get('showDataShadow');
            if (!1 !== t) {
              var i,
                a = this.ecModel;
              return (
                e.eachTargetAxis(function(o, r) {
                  var s = e.getAxisProxy(o.name, r).getTargetSeriesModels();
                  n.each(
                    s,
                    function(e) {
                      if (!(i || (!0 !== t && n.indexOf(y, e.get('type')) < 0))) {
                        var s,
                          l = a.getComponent(o.axis, r).axis,
                          c = { x: 'y', y: 'x', radius: 'angle', angle: 'radius' }[o.name],
                          u = e.coordinateSystem;
                        null != c && u.getOtherAxis && (s = u.getOtherAxis(l).inverse),
                          (c = e.getData().mapDimension(c)),
                          (i = { thisAxis: l, series: e, thisDim: o.name, otherDim: c, otherAxisInverse: s });
                      }
                    },
                    this,
                  );
                }, this),
                i
              );
            }
          },
          _renderHandle: function() {
            var e = this._displayables,
              t = (e.handles = []),
              i = (e.handleLabels = []),
              n = this._displayables.barGroup,
              r = this._size,
              s = this.dataZoomModel;
            n.add(
              (e.filler = new h({
                draggable: !0,
                cursor: _(this._orient),
                drift: g(this._onDragMove, this, 'all'),
                onmousemove: function(e) {
                  a.stop(e.event);
                },
                ondragstart: g(this._showDataInfo, this, !0),
                ondragend: g(this._onDragEnd, this),
                onmouseover: g(this._showDataInfo, this, !0),
                onmouseout: g(this._showDataInfo, this, !1),
                style: { fill: s.get('fillerColor'), textPosition: 'inside' },
              })),
            ),
              n.add(
                new h(
                  o.subPixelOptimizeRect({
                    silent: !0,
                    shape: { x: 0, y: 0, width: r[0], height: r[1] },
                    style: {
                      stroke: s.get('dataBackgroundColor') || s.get('borderColor'),
                      lineWidth: 1,
                      fill: 'rgba(0,0,0,0)',
                    },
                  }),
                ),
              ),
              f(
                [0, 1],
                function(e) {
                  var r = o.createIcon(
                      s.get('handleIcon'),
                      {
                        cursor: _(this._orient),
                        draggable: !0,
                        drift: g(this._onDragMove, this, e),
                        onmousemove: function(e) {
                          a.stop(e.event);
                        },
                        ondragend: g(this._onDragEnd, this),
                        onmouseover: g(this._showDataInfo, this, !0),
                        onmouseout: g(this._showDataInfo, this, !1),
                      },
                      { x: -1, y: 0, width: 2, height: 2 },
                    ),
                    c = r.getBoundingRect();
                  (this._handleHeight = l.parsePercent(s.get('handleSize'), this._size[1])),
                    (this._handleWidth = (c.width / c.height) * this._handleHeight),
                    r.setStyle(s.getModel('handleStyle').getItemStyle());
                  var u = s.get('handleColor');
                  null != u && (r.style.fill = u), n.add((t[e] = r));
                  var h = s.textStyleModel;
                  this.group.add(
                    (i[e] = new o.Text({
                      silent: !0,
                      invisible: !0,
                      style: {
                        x: 0,
                        y: 0,
                        text: '',
                        textVerticalAlign: 'middle',
                        textAlign: 'center',
                        textFill: h.getTextColor(),
                        textFont: h.getFont(),
                      },
                      z2: 10,
                    })),
                  );
                },
                this,
              );
          },
          _resetInterval: function() {
            var e = (this._range = this.dataZoomModel.getPercentRange()),
              t = this._getViewExtent();
            this._handleEnds = [d(e[0], [0, 100], t, !0), d(e[1], [0, 100], t, !0)];
          },
          _updateInterval: function(e, t) {
            var i = this.dataZoomModel,
              n = this._handleEnds,
              a = this._getViewExtent(),
              o = i.findRepresentativeAxisProxy().getMinMaxSpan(),
              r = [0, 100];
            u(
              t,
              n,
              a,
              i.get('zoomLock') ? 'all' : e,
              null != o.minSpan ? d(o.minSpan, r, a, !0) : null,
              null != o.maxSpan ? d(o.maxSpan, r, a, !0) : null,
            );
            var s = this._range,
              l = (this._range = p([d(n[0], a, r, !0), d(n[1], a, r, !0)]));
            return !s || s[0] !== l[0] || s[1] !== l[1];
          },
          _updateView: function(e) {
            var t = this._displayables,
              i = this._handleEnds,
              n = p(i.slice()),
              a = this._size;
            f(
              [0, 1],
              function(e) {
                var n = this._handleHeight;
                t.handles[e].attr({ scale: [n / 2, n / 2], position: [i[e], a[1] / 2 - n / 2] });
              },
              this,
            ),
              t.filler.setShape({ x: n[0], y: 0, width: n[1] - n[0], height: a[1] }),
              this._updateDataInfo(e);
          },
          _updateDataInfo: function(e) {
            var t = this.dataZoomModel,
              i = this._displayables,
              n = i.handleLabels,
              a = this._orient,
              r = ['', ''];
            if (t.get('showDetail')) {
              var s = t.findRepresentativeAxisProxy();
              if (s) {
                var l = s.getAxisModel().axis,
                  c = this._range,
                  u = e ? s.calculateDataWindow({ start: c[0], end: c[1] }).valueWindow : s.getDataValueWindow();
                r = [this._formatLabel(u[0], l), this._formatLabel(u[1], l)];
              }
            }
            var h = p(this._handleEnds.slice());
            function d(e) {
              var t = o.getTransform(i.handles[e].parent, this.group),
                s = o.transformDirection(0 === e ? 'right' : 'left', t),
                l = this._handleWidth / 2 + v,
                c = o.applyTransform([h[e] + (0 === e ? -l : l), this._size[1] / 2], t);
              n[e].setStyle({
                x: c[0],
                y: c[1],
                textVerticalAlign: a === m ? 'middle' : s,
                textAlign: a === m ? s : 'center',
                text: r[e],
              });
            }
            d.call(this, 0), d.call(this, 1);
          },
          _formatLabel: function(e, t) {
            var i = this.dataZoomModel,
              a = i.get('labelFormatter'),
              o = i.get('labelPrecision');
            (null != o && 'auto' !== o) || (o = t.getPixelPrecision());
            var r =
              null == e || isNaN(e)
                ? ''
                : 'category' === t.type || 'time' === t.type
                ? t.scale.getLabel(Math.round(e))
                : e.toFixed(Math.min(o, 20));
            return n.isFunction(a) ? a(e, r) : n.isString(a) ? a.replace('{value}', r) : r;
          },
          _showDataInfo: function(e) {
            var t = this._displayables.handleLabels;
            t[0].attr('invisible', !(e = this._dragging || e)), t[1].attr('invisible', !e);
          },
          _onDragMove: function(e, t, i) {
            this._dragging = !0;
            var n = this._displayables.barGroup.getLocalTransform(),
              a = o.applyTransform([t, i], n, !0),
              r = this._updateInterval(e, a[0]),
              s = this.dataZoomModel.get('realtime');
            this._updateView(!s), r && s && this._dispatchZoomAction();
          },
          _onDragEnd: function() {
            (this._dragging = !1),
              this._showDataInfo(!1),
              !this.dataZoomModel.get('realtime') && this._dispatchZoomAction();
          },
          _onClickPanelClick: function(e) {
            var t = this._size,
              i = this._displayables.barGroup.transformCoordToLocal(e.offsetX, e.offsetY);
            if (!(i[0] < 0 || i[0] > t[0] || i[1] < 0 || i[1] > t[1])) {
              var n = this._handleEnds,
                a = this._updateInterval('all', i[0] - (n[0] + n[1]) / 2);
              this._updateView(), a && this._dispatchZoomAction();
            }
          },
          _dispatchZoomAction: function() {
            var e = this._range;
            this.api.dispatchAction({
              type: 'dataZoom',
              from: this.uid,
              dataZoomId: this.dataZoomModel.id,
              start: e[0],
              end: e[1],
            });
          },
          _findCoordRect: function() {
            var e;
            if (
              (f(this.getTargetCoordInfo(), function(t) {
                if (!e && t.length) {
                  var i = t[0].model.coordinateSystem;
                  e = i.getRect && i.getRect();
                }
              }),
              !e)
            ) {
              var t = this.api.getWidth(),
                i = this.api.getHeight();
              e = { x: 0.2 * t, y: 0.2 * i, width: 0.6 * t, height: 0.6 * i };
            }
            return e;
          },
        });
      function _(e) {
        return 'vertical' === e ? 'ns-resize' : 'ew-resize';
      }
      e.exports = x;
    },
    'JEkh': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('ItGF'),
        r = i('4NO4'),
        s = i('7aKB'),
        l = i('OKJ2'),
        c = s.addCommas,
        u = s.encodeHTML;
      function h(e) {
        r.defaultEmphasis(e, 'label', ['show']);
      }
      var d = n.extendComponentModel({
        type: 'marker',
        dependencies: ['series', 'grid', 'polar', 'geo'],
        init: function(e, t, i, n) {
          this.mergeDefaultAndTheme(e, i), this.mergeOption(e, i, n.createdBySelf, !0);
        },
        isAnimationEnabled: function() {
          if (o.node) return !1;
          var e = this.__hostSeries;
          return this.getShallow('animation') && e && e.isAnimationEnabled();
        },
        mergeOption: function(e, t, i, n) {
          var o = this.constructor,
            r = this.mainType + 'Model';
          i ||
            t.eachSeries(function(e) {
              var i = e.get(this.mainType, !0),
                s = e[r];
              i && i.data
                ? (s
                    ? s.mergeOption(i, t, !0)
                    : (n && h(i),
                      a.each(i.data, function(e) {
                        e instanceof Array ? (h(e[0]), h(e[1])) : h(e);
                      }),
                      (s = new o(i, this, t)),
                      a.extend(s, {
                        mainType: this.mainType,
                        seriesIndex: e.seriesIndex,
                        name: e.name,
                        createdBySelf: !0,
                      }),
                      (s.__hostSeries = e)),
                  (e[r] = s))
                : (e[r] = null);
            }, this);
        },
        formatTooltip: function(e) {
          var t = this.getData(),
            i = this.getRawValue(e),
            n = a.isArray(i) ? a.map(i, c).join(', ') : c(i),
            o = t.getName(e),
            r = u(this.name);
          return (
            (null != i || o) && (r += '<br />'),
            o && ((r += u(o)), null != i && (r += ' : ')),
            null != i && (r += u(n)),
            r
          );
        },
        getData: function() {
          return this._data;
        },
        setData: function(e) {
          this._data = e;
        },
      });
      a.mixin(d, l), (e.exports = d);
    },
    'JLnu': function(e, t, i) {
      var n = i('+TT/'),
        a = i('OELB'),
        o = a.parsePercent,
        r = a.linearMap;
      e.exports = function(e, t, i) {
        e.eachSeriesByType('funnel', function(e) {
          var i = e.getData(),
            a = i.mapDimension('value'),
            s = e.get('sort'),
            l = (function(e, t) {
              return n.getLayoutRect(e.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() });
            })(e, t),
            c = (function(e, t) {
              for (
                var i = e.mapDimension('value'),
                  n = e.mapArray(i, function(e) {
                    return e;
                  }),
                  a = [],
                  o = 'ascending' === t,
                  r = 0,
                  s = e.count();
                r < s;
                r++
              )
                a[r] = r;
              return (
                'function' == typeof t
                  ? a.sort(t)
                  : 'none' !== t &&
                    a.sort(function(e, t) {
                      return o ? n[e] - n[t] : n[t] - n[e];
                    }),
                a
              );
            })(i, s),
            u = [o(e.get('minSize'), l.width), o(e.get('maxSize'), l.width)],
            h = i.getDataExtent(a),
            d = e.get('min'),
            p = e.get('max');
          null == d && (d = Math.min(h[0], 0)), null == p && (p = h[1]);
          var g = e.get('funnelAlign'),
            f = e.get('gap'),
            m = (l.height - f * (i.count() - 1)) / i.count(),
            v = l.y,
            y = function(e, t) {
              var n,
                o = i.get(a, e) || 0,
                s = r(o, [d, p], u, !0);
              switch (g) {
                case 'left':
                  n = l.x;
                  break;
                case 'center':
                  n = l.x + (l.width - s) / 2;
                  break;
                case 'right':
                  n = l.x + l.width - s;
              }
              return [
                [n, t],
                [n + s, t],
              ];
            };
          'ascending' === s && ((m = -m), (f = -f), (v += l.height), (c = c.reverse()));
          for (var x = 0; x < c.length; x++) {
            var _ = c[x],
              b = c[x + 1],
              S = i.getItemModel(_).get('itemStyle.height');
            null == S ? (S = m) : ((S = o(S, l.height)), 'ascending' === s && (S = -S));
            var w = y(_, v),
              M = y(b, v + S);
            (v += S + f), i.setItemLayout(_, { points: w.concat(M.slice().reverse()) });
          }
          !(function(e) {
            e.each(function(t) {
              var i,
                n,
                a,
                o,
                r = e.getItemModel(t),
                s = r.getModel('label').get('position'),
                l = r.getModel('labelLine'),
                c = e.getItemLayout(t),
                u = c.points,
                h = 'inner' === s || 'inside' === s || 'center' === s;
              if (h)
                (i = 'center'),
                  (o = [
                    [
                      (n = (u[0][0] + u[1][0] + u[2][0] + u[3][0]) / 4),
                      (a = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4),
                    ],
                    [n, a],
                  ]);
              else {
                var d,
                  p,
                  g,
                  f = l.get('length');
                'left' === s
                  ? ((p = (u[3][1] + u[0][1]) / 2), (n = (g = (d = (u[3][0] + u[0][0]) / 2) - f) - 5), (i = 'right'))
                  : ((p = (u[1][1] + u[2][1]) / 2), (n = (g = (d = (u[1][0] + u[2][0]) / 2) + f) + 5), (i = 'left')),
                  (o = [
                    [d, p],
                    [g, p],
                  ]),
                  (a = p);
              }
              c.label = { linePoints: o, x: n, y: a, verticalAlign: 'middle', textAlign: i, inside: h };
            });
          })(i);
        });
      };
    },
    'JVwQ': function(e, t, i) {
      var n = i('ProS'),
        a = i('1NG9').Polygon,
        o = i('IwbS'),
        r = i('bYtY'),
        s = r.bind,
        l = r.extend,
        c = i('gPAo'),
        u = n.extendChartView({
          type: 'themeRiver',
          init: function() {
            this._layers = [];
          },
          render: function(e, t, i) {
            var n = e.getData(),
              r = this.group,
              u = e.getLayerSeries(),
              h = n.getLayout('layoutInfo');
            function d(e) {
              return e.name;
            }
            r.attr('position', [0, h.rect.y + h.boundaryGap[0]]);
            var p = new c(this._layersSeries || [], u, d, d),
              g = {};
            function f(t, i, s) {
              var c = this._layers;
              if ('remove' !== t) {
                for (var h, d, p, f = [], m = [], v = u[i].indices, y = 0; y < v.length; y++) {
                  var x = n.getItemLayout(v[y]),
                    _ = x.x,
                    b = x.y0,
                    S = x.y;
                  f.push([_, b]), m.push([_, b + S]), (h = n.getItemVisual(v[y], 'color'));
                }
                var w = n.getItemLayout(v[0]),
                  M = n.getItemModel(v[y - 1]),
                  I = M.getModel('label'),
                  A = I.get('margin');
                if ('add' === t) {
                  var D = (g[i] = new o.Group());
                  (d = new a({
                    shape: { points: f, stackedOnPoints: m, smooth: 0.4, stackedOnSmooth: 0.4, smoothConstraint: !1 },
                    z2: 0,
                  })),
                    (p = new o.Text({ style: { x: w.x - A, y: w.y0 + w.y / 2 } })),
                    D.add(d),
                    D.add(p),
                    r.add(D),
                    d.setClipPath(
                      (function(e, t, i) {
                        var n = new o.Rect({ shape: { x: e.x - 10, y: e.y - 10, width: 0, height: e.height + 20 } });
                        return (
                          o.initProps(n, { shape: { width: e.width + 20, height: e.height + 20 } }, t, function() {
                            d.removeClipPath();
                          }),
                          n
                        );
                      })(d.getBoundingRect(), e),
                    );
                } else
                  (d = (D = c[s]).childAt(0)),
                    (p = D.childAt(1)),
                    r.add(D),
                    (g[i] = D),
                    o.updateProps(d, { shape: { points: f, stackedOnPoints: m } }, e),
                    o.updateProps(p, { style: { x: w.x - A, y: w.y0 + w.y / 2 } }, e);
                var T = M.getModel('emphasis.itemStyle'),
                  P = M.getModel('itemStyle');
                o.setTextStyle(p.style, I, {
                  text: I.get('show') ? e.getFormattedLabel(v[y - 1], 'normal') || n.getName(v[y - 1]) : null,
                  textVerticalAlign: 'middle',
                }),
                  d.setStyle(l({ fill: h }, P.getItemStyle(['color']))),
                  o.setHoverStyle(d, T.getItemStyle());
              } else r.remove(c[i]);
            }
            p
              .add(s(f, this, 'add'))
              .update(s(f, this, 'update'))
              .remove(s(f, this, 'remove'))
              .execute(),
              (this._layersSeries = u),
              (this._layers = g);
          },
          dispose: function() {},
        });
      e.exports = u;
    },
    'K4ya': function(e, t, i) {
      var n = i('bYtY'),
        a = i('XxSj'),
        o = n.each;
      function r(e) {
        if (e) for (var t in e) if (e.hasOwnProperty(t)) return !0;
      }
      (t.createVisualMappings = function(e, t, i) {
        var r = {};
        return (
          o(t, function(t) {
            var s,
              l = (r[t] = (((s = function() {}).prototype.__hidden = s.prototype), new s()));
            o(e[t], function(e, o) {
              if (a.isValidType(o)) {
                var r = { type: o, visual: e };
                i && i(r, t),
                  (l[o] = new a(r)),
                  'opacity' === o &&
                    (((r = n.clone(r)).type = 'colorAlpha'), (l.__hidden.__alphaForOpacity = new a(r)));
              }
            });
          }),
          r
        );
      }),
        (t.replaceVisualOption = function(e, t, i) {
          var a;
          n.each(i, function(e) {
            t.hasOwnProperty(e) && r(t[e]) && (a = !0);
          }),
            a &&
              n.each(i, function(i) {
                t.hasOwnProperty(i) && r(t[i]) ? (e[i] = n.clone(t[i])) : delete e[i];
              });
        }),
        (t.applyVisual = function(e, t, i, o, r, s) {
          var l,
            c = {};
          function u(e) {
            return i.getItemVisual(l, e);
          }
          function h(e, t) {
            i.setItemVisual(l, e, t);
          }
          function d(e, n) {
            var a = i.getRawDataItem((l = null == s ? e : n));
            if (!a || !1 !== a.visualMap)
              for (var d = o.call(r, e), p = t[d], g = c[d], f = 0, m = g.length; f < m; f++) {
                var v = g[f];
                p[v] && p[v].applyVisual(e, u, h);
              }
          }
          n.each(e, function(e) {
            var i = a.prepareVisualTypes(t[e]);
            c[e] = i;
          }),
            null == s ? i.each(d) : i.each([s], d);
        }),
        (t.incrementalApplyVisual = function(e, t, i, o) {
          var r = {};
          return (
            n.each(e, function(e) {
              var i = a.prepareVisualTypes(t[e]);
              r[e] = i;
            }),
            {
              progress: function(e, n) {
                function a(e) {
                  return n.getItemVisual(l, e);
                }
                function s(e, t) {
                  n.setItemVisual(l, e, t);
                }
                var l;
                for (null != o && (o = n.getDimension(o)); null != (l = e.next()); ) {
                  var c = n.getRawDataItem(l);
                  if (!c || !1 !== c.visualMap)
                    for (
                      var u = null != o ? n.get(o, l, !0) : l, h = i(u), d = t[h], p = r[h], g = 0, f = p.length;
                      g < f;
                      g++
                    ) {
                      var m = p[g];
                      d[m] && d[m].applyVisual(u, a, s);
                    }
                }
              },
            }
          );
        });
    },
    'KamJ': function(e, t, i) {
      var n = i('ProS'),
        a = i('szbU');
      i('vF/C'), i('qwVE'), i('BuqR'), i('AE9C'), i('1u/T'), n.registerPreprocessor(a);
    },
    'L3Oj': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('HjIi');
      i('HM/N'),
        i('9eas'),
        i('eS4l'),
        i('y4/Y'),
        i('as94'),
        n.registerLayout(a.curry(o, 'bar')),
        n.extendComponentView({ type: 'polar' });
    },
    'L5E0': function(e, t) {
      var i = ['itemStyle', 'borderColor'];
      e.exports = function(e, t) {
        var n = e.get('color');
        e.eachRawSeriesByType('boxplot', function(t) {
          var a = n[t.seriesIndex % n.length],
            o = t.getData();
          o.setVisual({ legendSymbol: 'roundRect', color: t.get(i) || a }),
            e.isSeriesFiltered(t) ||
              o.each(function(e) {
                var t = o.getItemModel(e);
                o.setItemVisual(e, { color: t.get(i, !0) });
              });
        });
      };
    },
    'LPzL': function(e, t, i) {
      var n = i('ProS');
      i('QzjZ'), i('vL6D'), i('xiyX'), i('y4/Y'), i('8Th4'), n.extendComponentView({ type: 'single' });
    },
    'LzGr': function(e, t, i) {
      var n = i('ProS'),
        a = i('rnVJ');
      i('EMyp'), i('8x+h'), i('wt3j'), i('uOyE'), i('/stD'), n.registerPreprocessor(a);
    },
    'MBQ8': function(e, t, i) {
      var n = i('T4UG'),
        a = i('MwEJ'),
        o = n.extend({
          type: 'series.__base_bar__',
          getInitialData: function(e, t) {
            return a(this.getSource(), this);
          },
          getMarkerPosition: function(e) {
            var t = this.coordinateSystem;
            if (t) {
              var i = t.dataToPoint(t.clampData(e)),
                n = this.getData(),
                a = n.getLayout('offset'),
                o = n.getLayout('size');
              return (i[t.getBaseAxis().isHorizontal() ? 0 : 1] += a + o / 2), i;
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
      e.exports = o;
    },
    'MH26': function(e, t, i) {
      var n = i('bYtY'),
        a = i('YXkt'),
        o = i('OELB'),
        r = i('kj2x'),
        s = i('c8qY'),
        l = i('iPDy'),
        c = function(e, t, i, a) {
          var o = e.getData(),
            s = a.type;
          if (
            !n.isArray(a) &&
            ('min' === s || 'max' === s || 'average' === s || 'median' === s || null != a.xAxis || null != a.yAxis)
          ) {
            var l, c;
            if (null != a.yAxis || null != a.xAxis)
              t.getAxis((l = null != a.yAxis ? 'y' : 'x')), (c = n.retrieve(a.yAxis, a.xAxis));
            else {
              var u = r.getAxisInfo(a, o, t, e);
              c = r.numCalculate(o, (l = u.valueDataDim), s);
            }
            var h = 'x' === l ? 0 : 1,
              d = 1 - h,
              p = n.clone(a),
              g = {};
            (p.type = null), (p.coord = []), (g.coord = []), (p.coord[d] = -1 / 0), (g.coord[d] = 1 / 0);
            var f = i.get('precision');
            f >= 0 && 'number' == typeof c && (c = +c.toFixed(Math.min(f, 20))),
              (p.coord[h] = g.coord[h] = c),
              (a = [p, g, { type: s, valueIndex: a.valueIndex, value: c }]);
          }
          return (
            ((a = [r.dataTransform(e, a[0]), r.dataTransform(e, a[1]), n.extend({}, a[2])])[2].type = a[2].type || ''),
            n.merge(a[2], a[0]),
            n.merge(a[2], a[1]),
            a
          );
        };
      function u(e) {
        return !isNaN(e) && !isFinite(e);
      }
      function h(e, t, i, n) {
        var a = 1 - e,
          o = n.dimensions[e];
        return u(t[a]) && u(i[a]) && t[e] === i[e] && n.getAxis(o).containData(t[e]);
      }
      function d(e, t) {
        if ('cartesian2d' === e.type) {
          var i = t[0].coord,
            n = t[1].coord;
          if (i && n && (h(1, i, n, e) || h(0, i, n, e))) return !0;
        }
        return r.dataFilter(e, t[0]) && r.dataFilter(e, t[1]);
      }
      function p(e, t, i, n, a) {
        var r,
          s = n.coordinateSystem,
          l = e.getItemModel(t),
          c = o.parsePercent(l.get('x'), a.getWidth()),
          h = o.parsePercent(l.get('y'), a.getHeight());
        if (isNaN(c) || isNaN(h)) {
          if (n.getMarkerPosition) r = n.getMarkerPosition(e.getValues(e.dimensions, t));
          else {
            var d = e.get((g = s.dimensions)[0], t),
              p = e.get(g[1], t);
            r = s.dataToPoint([d, p]);
          }
          if ('cartesian2d' === s.type) {
            var g,
              f = s.getAxis('x'),
              m = s.getAxis('y');
            u(e.get((g = s.dimensions)[0], t))
              ? (r[0] = f.toGlobalCoord(f.getExtent()[i ? 0 : 1]))
              : u(e.get(g[1], t)) && (r[1] = m.toGlobalCoord(m.getExtent()[i ? 0 : 1]));
          }
          isNaN(c) || (r[0] = c), isNaN(h) || (r[1] = h);
        } else r = [c, h];
        e.setItemLayout(t, r);
      }
      var g = l.extend({
        type: 'markLine',
        updateTransform: function(e, t, i) {
          t.eachSeries(function(e) {
            var t = e.markLineModel;
            if (t) {
              var n = t.getData(),
                a = t.__from,
                o = t.__to;
              a.each(function(t) {
                p(a, t, !0, e, i), p(o, t, !1, e, i);
              }),
                n.each(function(e) {
                  n.setItemLayout(e, [a.getItemLayout(e), o.getItemLayout(e)]);
                }),
                this.markerGroupMap.get(e.id).updateLayout();
            }
          }, this);
        },
        renderSeries: function(e, t, i, o) {
          var l = e.coordinateSystem,
            u = e.id,
            h = e.getData(),
            g = this.markerGroupMap,
            f = g.get(u) || g.set(u, new s());
          this.group.add(f.group);
          var m = (function(e, t, i) {
              var o;
              o = e
                ? n.map(e && e.dimensions, function(e) {
                    var i = t.getData().getDimensionInfo(t.getData().mapDimension(e)) || {};
                    return n.defaults({ name: e }, i);
                  })
                : [{ name: 'value', type: 'float' }];
              var s = new a(o, i),
                l = new a(o, i),
                u = new a([], i),
                h = n.map(i.get('data'), n.curry(c, t, e, i));
              e && (h = n.filter(h, n.curry(d, e)));
              var p = e
                ? r.dimValueGetter
                : function(e) {
                    return e.value;
                  };
              return (
                s.initData(
                  n.map(h, function(e) {
                    return e[0];
                  }),
                  null,
                  p,
                ),
                l.initData(
                  n.map(h, function(e) {
                    return e[1];
                  }),
                  null,
                  p,
                ),
                u.initData(
                  n.map(h, function(e) {
                    return e[2];
                  }),
                ),
                (u.hasItemOption = !0),
                { from: s, to: l, line: u }
              );
            })(l, e, t),
            v = m.from,
            y = m.to,
            x = m.line;
          (t.__from = v), (t.__to = y), t.setData(x);
          var _ = t.get('symbol'),
            b = t.get('symbolSize');
          function S(t, i, n) {
            var a = t.getItemModel(i);
            p(t, i, n, e, o),
              t.setItemVisual(i, {
                symbolSize: a.get('symbolSize') || b[n ? 0 : 1],
                symbol: a.get('symbol', !0) || _[n ? 0 : 1],
                color: a.get('itemStyle.color') || h.getVisual('color'),
              });
          }
          n.isArray(_) || (_ = [_, _]),
            'number' == typeof b && (b = [b, b]),
            m.from.each(function(e) {
              S(v, e, !0), S(y, e, !1);
            }),
            x.each(function(e) {
              var t = x.getItemModel(e).get('lineStyle.color');
              x.setItemVisual(e, { color: t || v.getItemVisual(e, 'color') }),
                x.setItemLayout(e, [v.getItemLayout(e), y.getItemLayout(e)]),
                x.setItemVisual(e, {
                  fromSymbolSize: v.getItemVisual(e, 'symbolSize'),
                  fromSymbol: v.getItemVisual(e, 'symbol'),
                  toSymbolSize: y.getItemVisual(e, 'symbolSize'),
                  toSymbol: y.getItemVisual(e, 'symbol'),
                });
            }),
            f.updateData(x),
            m.line.eachItemGraphicEl(function(e, i) {
              e.traverse(function(e) {
                e.dataModel = t;
              });
            }),
            (f.__keep = !0),
            (f.group.silent = t.get('silent') || e.get('silent'));
        },
      });
      e.exports = g;
    },
    'MHoB': function(e, t, i) {
      var n = i('bYtY'),
        a = i('6uqw'),
        o = i('OELB'),
        r = [20, 140],
        s = a.extend({
          type: 'visualMap.continuous',
          defaultOption: {
            align: 'auto',
            calculable: !1,
            range: null,
            realtime: !0,
            itemHeight: null,
            itemWidth: null,
            hoverLink: !0,
            hoverLinkDataSize: null,
            hoverLinkOnHandle: null,
          },
          optionUpdated: function(e, t) {
            s.superApply(this, 'optionUpdated', arguments),
              this.resetExtent(),
              this.resetVisual(function(e) {
                (e.mappingMethod = 'linear'), (e.dataExtent = this.getExtent());
              }),
              this._resetRange();
          },
          resetItemSize: function() {
            s.superApply(this, 'resetItemSize', arguments);
            var e = this.itemSize;
            'horizontal' === this._orient && e.reverse(),
              (null == e[0] || isNaN(e[0])) && (e[0] = r[0]),
              (null == e[1] || isNaN(e[1])) && (e[1] = r[1]);
          },
          _resetRange: function() {
            var e = this.getExtent(),
              t = this.option.range;
            !t || t.auto
              ? ((e.auto = 1), (this.option.range = e))
              : n.isArray(t) &&
                (t[0] > t[1] && t.reverse(), (t[0] = Math.max(t[0], e[0])), (t[1] = Math.min(t[1], e[1])));
          },
          completeVisualOption: function() {
            a.prototype.completeVisualOption.apply(this, arguments),
              n.each(
                this.stateList,
                function(e) {
                  var t = this.option.controller[e].symbolSize;
                  t && t[0] !== t[1] && (t[0] = 0);
                },
                this,
              );
          },
          setSelected: function(e) {
            (this.option.range = e.slice()), this._resetRange();
          },
          getSelected: function() {
            var e = this.getExtent(),
              t = o.asc((this.get('range') || []).slice());
            return (
              t[0] > e[1] && (t[0] = e[1]),
              t[1] > e[1] && (t[1] = e[1]),
              t[0] < e[0] && (t[0] = e[0]),
              t[1] < e[0] && (t[1] = e[0]),
              t
            );
          },
          getValueState: function(e) {
            var t = this.option.range,
              i = this.getExtent();
            return (t[0] <= i[0] || t[0] <= e) && (t[1] >= i[1] || e <= t[1]) ? 'inRange' : 'outOfRange';
          },
          findTargetDataIndices: function(e) {
            var t = [];
            return (
              this.eachTargetSeries(function(i) {
                var n = [],
                  a = i.getData();
                a.each(
                  this.getDataDimension(a),
                  function(t, i) {
                    e[0] <= t && t <= e[1] && n.push(i);
                  },
                  this,
                ),
                  t.push({ seriesId: i.id, dataIndex: n });
              }, this),
              t
            );
          },
          getVisualMeta: function(e) {
            var t = l(0, 0, this.getExtent()),
              i = l(0, 0, this.option.range.slice()),
              n = [];
            function a(t, i) {
              n.push({ value: t, color: e(t, i) });
            }
            for (var o = 0, r = 0, s = i.length, c = t.length; r < c && (!i.length || t[r] <= i[0]); r++)
              t[r] < i[o] && a(t[r], 'outOfRange');
            for (var u = 1; o < s; o++, u = 0) u && n.length && a(i[o], 'outOfRange'), a(i[o], 'inRange');
            for (u = 1; r < c; r++)
              (!i.length || i[i.length - 1] < t[r]) &&
                (u && (n.length && a(n[n.length - 1].value, 'outOfRange'), (u = 0)), a(t[r], 'outOfRange'));
            var h = n.length;
            return { stops: n, outerColors: [h ? n[0].color : 'transparent', h ? n[h - 1].color : 'transparent'] };
          },
        });
      function l(e, t, i) {
        if (i[0] === i[1]) return i.slice();
        for (var n = (i[1] - i[0]) / 200, a = i[0], o = [], r = 0; r <= 200 && a < i[1]; r++) o.push(a), (a += n);
        return o.push(i[1]), o;
      }
      e.exports = s;
    },
    'MHtr': function(e, t, i) {
      var n = i('bYtY');
      function a(e, t) {
        var i = this.getAxis(),
          n = t instanceof Array ? t[0] : t,
          a = (e instanceof Array ? e[0] : e) / 2;
        return 'category' === i.type ? i.getBandWidth() : Math.abs(i.dataToCoord(n - a) - i.dataToCoord(n + a));
      }
      e.exports = function(e) {
        var t = e.getRect();
        return {
          coordSys: { type: 'singleAxis', x: t.x, y: t.y, width: t.width, height: t.height },
          api: {
            coord: function(t) {
              return e.dataToPoint(t);
            },
            size: n.bind(a, e),
          },
        };
      };
    },
    'MT78': function(e, t, i) {
      var n = i('ProS');
      !(function() {
        for (var e in n) {
          if (null == n || !n.hasOwnProperty(e) || 'default' === e || '__esModule' === e) return;
          t[e] = n[e];
        }
      })();
      var a = i('txkQ');
      !(function() {
        for (var e in a) {
          if (null == a || !a.hasOwnProperty(e) || 'default' === e || '__esModule' === e) return;
          t[e] = a[e];
        }
      })(),
        i('A1Ka'),
        i('75ce'),
        i('lLGD'),
        i('wDdD'),
        i('Fa/5'),
        i('jett'),
        i('Z1wy'),
        i('75ev'),
        i('2uGb'),
        i('I+77'),
        i('B+YJ'),
        i('pLH3'),
        i('CBdT'),
        i('MRoa'),
        i('+lIL'),
        i('CF2D'),
        i('ERHi'),
        i('p+If'),
        i('XOKv'),
        i('qt/9'),
        i('bBL8'),
        i('1xaR'),
        i('4Feb'),
        i('f1nB'),
        i('zRKj'),
        i('C0tN'),
        i('AH3D'),
        i('y4/Y'),
        i('L3Oj'),
        i('0HBW'),
        i('8waO'),
        i('LPzL'),
        i('LzGr'),
        i('k5C7'),
        i('Ynxi'),
        i('Cm0C'),
        i('VFCP'),
        i('2w7y'),
        i('laiN'),
        i('fjKi'),
        i('7pVf'),
        i('sRwP'),
        i('8XDt'),
        i('juDX');
    },
    'Mgri': function(e, t, i) {
      for (
        var n = i('bYtY'),
          a = i('8nly'),
          o = [126, 25],
          r = [
            [
              [0, 3.5],
              [7, 11.2],
              [15, 11.9],
              [30, 7],
              [42, 0.7],
              [52, 0.7],
              [56, 7.7],
              [59, 0.7],
              [64, 0.7],
              [64, 0],
              [5, 0],
              [0, 3.5],
            ],
            [
              [13, 16.1],
              [19, 14.7],
              [16, 21.7],
              [11, 23.1],
              [13, 16.1],
            ],
            [
              [12, 32.2],
              [14, 38.5],
              [15, 38.5],
              [13, 32.2],
              [12, 32.2],
            ],
            [
              [16, 47.6],
              [12, 53.2],
              [13, 53.2],
              [18, 47.6],
              [16, 47.6],
            ],
            [
              [6, 64.4],
              [8, 70],
              [9, 70],
              [8, 64.4],
              [6, 64.4],
            ],
            [
              [23, 82.6],
              [29, 79.8],
              [30, 79.8],
              [25, 82.6],
              [23, 82.6],
            ],
            [
              [37, 70.7],
              [43, 62.3],
              [44, 62.3],
              [39, 70.7],
              [37, 70.7],
            ],
            [
              [48, 51.1],
              [51, 45.5],
              [53, 45.5],
              [50, 51.1],
              [48, 51.1],
            ],
            [
              [51, 35],
              [51, 28.7],
              [53, 28.7],
              [53, 35],
              [51, 35],
            ],
            [
              [52, 22.4],
              [55, 17.5],
              [56, 17.5],
              [53, 22.4],
              [52, 22.4],
            ],
            [
              [58, 12.6],
              [62, 7],
              [63, 7],
              [60, 12.6],
              [58, 12.6],
            ],
            [
              [0, 3.5],
              [0, 93.1],
              [64, 93.1],
              [64, 0],
              [63, 0],
              [63, 92.4],
              [1, 92.4],
              [1, 3.5],
              [0, 3.5],
            ],
          ],
          s = 0;
        s < r.length;
        s++
      )
        for (var l = 0; l < r[s].length; l++)
          (r[s][l][0] /= 10.5), (r[s][l][1] /= -14), (r[s][l][0] += o[0]), (r[s][l][1] += o[1]);
      e.exports = function(e, t) {
        'china' === e &&
          t.push(
            new a(
              '\u5357\u6d77\u8bf8\u5c9b',
              n.map(r, function(e) {
                return { type: 'polygon', exterior: e };
              }),
              o,
            ),
          );
      };
    },
    'MqEG': function(e, t, i) {
      var n = i('bYtY'),
        a = i('fc+c'),
        o = i('72pK'),
        r = i('VXYp'),
        s = n.bind,
        l = a.extend({
          type: 'dataZoom.inside',
          init: function(e, t) {},
          render: function(e, t, i, a) {
            l.superApply(this, 'render', arguments),
              (this._range = e.getPercentRange()),
              n.each(
                this.getTargetCoordInfo(),
                function(t, a) {
                  var o = n.map(t, function(e) {
                    return r.generateCoordId(e.model);
                  });
                  n.each(
                    t,
                    function(t) {
                      var l = t.model,
                        u = {};
                      n.each(
                        ['pan', 'zoom', 'scrollMove'],
                        function(e) {
                          u[e] = s(c[e], this, t, a);
                        },
                        this,
                      ),
                        r.register(i, {
                          coordId: r.generateCoordId(l),
                          allCoordIds: o,
                          containsPoint: function(e, t, i) {
                            return l.coordinateSystem.containPoint([t, i]);
                          },
                          dataZoomId: e.id,
                          dataZoomModel: e,
                          getRange: u,
                        });
                    },
                    this,
                  );
                },
                this,
              );
          },
          dispose: function() {
            r.unregister(this.api, this.dataZoomModel.id),
              l.superApply(this, 'dispose', arguments),
              (this._range = null);
          },
        }),
        c = {
          zoom: function(e, t, i, n) {
            var a = this._range,
              r = a.slice(),
              s = e.axisModels[0];
            if (s) {
              var l = h[t](null, [n.originX, n.originY], s, i, e),
                c =
                  ((l.signal > 0 ? l.pixelStart + l.pixelLength - l.pixel : l.pixel - l.pixelStart) / l.pixelLength) *
                    (r[1] - r[0]) +
                  r[0],
                u = Math.max(1 / n.scale, 0);
              (r[0] = (r[0] - c) * u + c), (r[1] = (r[1] - c) * u + c);
              var d = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
              return (
                o(0, r, [0, 100], 0, d.minSpan, d.maxSpan),
                (this._range = r),
                a[0] !== r[0] || a[1] !== r[1] ? r : void 0
              );
            }
          },
          pan: u(function(e, t, i, n, a, o) {
            var r = h[n]([o.oldX, o.oldY], [o.newX, o.newY], t, a, i);
            return (r.signal * (e[1] - e[0]) * r.pixel) / r.pixelLength;
          }),
          scrollMove: u(function(e, t, i, n, a, o) {
            return h[n]([0, 0], [o.scrollDelta, o.scrollDelta], t, a, i).signal * (e[1] - e[0]) * o.scrollDelta;
          }),
        };
      function u(e) {
        return function(t, i, n, a) {
          var r = this._range,
            s = r.slice(),
            l = t.axisModels[0];
          if (l) {
            var c = e(s, l, t, i, n, a);
            return o(c, s, [0, 100], 'all'), (this._range = s), r[0] !== s[0] || r[1] !== s[1] ? s : void 0;
          }
        };
      }
      var h = {
        grid: function(e, t, i, n, a) {
          var o = i.axis,
            r = {},
            s = a.model.coordinateSystem.getRect();
          return (
            (e = e || [0, 0]),
            'x' === o.dim
              ? ((r.pixel = t[0] - e[0]),
                (r.pixelLength = s.width),
                (r.pixelStart = s.x),
                (r.signal = o.inverse ? 1 : -1))
              : ((r.pixel = t[1] - e[1]),
                (r.pixelLength = s.height),
                (r.pixelStart = s.y),
                (r.signal = o.inverse ? -1 : 1)),
            r
          );
        },
        polar: function(e, t, i, n, a) {
          var o = i.axis,
            r = {},
            s = a.model.coordinateSystem,
            l = s.getRadiusAxis().getExtent(),
            c = s.getAngleAxis().getExtent();
          return (
            (e = e ? s.pointToCoord(e) : [0, 0]),
            (t = s.pointToCoord(t)),
            'radiusAxis' === i.mainType
              ? ((r.pixel = t[0] - e[0]),
                (r.pixelLength = l[1] - l[0]),
                (r.pixelStart = l[0]),
                (r.signal = o.inverse ? 1 : -1))
              : ((r.pixel = t[1] - e[1]),
                (r.pixelLength = c[1] - c[0]),
                (r.pixelStart = c[0]),
                (r.signal = o.inverse ? -1 : 1)),
            r
          );
        },
        singleAxis: function(e, t, i, n, a) {
          var o = i.axis,
            r = a.model.coordinateSystem.getRect(),
            s = {};
          return (
            (e = e || [0, 0]),
            'horizontal' === o.orient
              ? ((s.pixel = t[0] - e[0]),
                (s.pixelLength = r.width),
                (s.pixelStart = r.x),
                (s.signal = o.inverse ? 1 : -1))
              : ((s.pixel = t[1] - e[1]),
                (s.pixelLength = r.height),
                (s.pixelStart = r.y),
                (s.signal = o.inverse ? -1 : 1)),
            s
          );
        },
      };
      e.exports = l;
    },
    'Mylv': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('IwbS'),
        r = i('oVpE').createSymbol,
        s = i('OELB'),
        l = s.parsePercent,
        c = s.isNumeric,
        u = i('56rv').setLabel,
        h = ['itemStyle', 'borderWidth'],
        d = [
          { xy: 'x', wh: 'width', index: 0, posDesc: ['left', 'right'] },
          { xy: 'y', wh: 'height', index: 1, posDesc: ['top', 'bottom'] },
        ],
        p = new o.Circle(),
        g = n.extendChartView({
          type: 'pictorialBar',
          render: function(e, t, i) {
            var n = this.group,
              a = e.getData(),
              r = this._data,
              s = e.coordinateSystem,
              l = !!s.getBaseAxis().isHorizontal(),
              c = s.grid.getRect(),
              u = {
                ecSize: { width: i.getWidth(), height: i.getHeight() },
                seriesModel: e,
                coordSys: s,
                coordSysExtent: [
                  [c.x, c.x + c.width],
                  [c.y, c.y + c.height],
                ],
                isHorizontal: l,
                valueDim: d[+l],
                categoryDim: d[1 - l],
              };
            return (
              a
                .diff(r)
                .add(function(e) {
                  if (a.hasValue(e)) {
                    var t = S(a, e),
                      i = f(a, e, t, u),
                      o = A(a, u, i);
                    a.setItemGraphicEl(e, o), n.add(o), C(o, u, i);
                  }
                })
                .update(function(e, t) {
                  var i = r.getItemGraphicEl(t);
                  if (a.hasValue(e)) {
                    var s = S(a, e),
                      l = f(a, e, s, u),
                      c = T(a, l);
                    i && c !== i.__pictorialShapeStr && (n.remove(i), a.setItemGraphicEl(e, null), (i = null)),
                      i
                        ? (function(e, t, i) {
                            var n = i.animationModel,
                              a = i.dataIndex;
                            o.updateProps(e.__pictorialBundle, { position: i.bundlePosition.slice() }, n, a),
                              i.symbolRepeat ? y(e, t, i, !0) : x(e, 0, i, !0),
                              _(e, i, !0),
                              b(e, t, i, !0);
                          })(i, u, l)
                        : (i = A(a, u, l, !0)),
                      a.setItemGraphicEl(e, i),
                      (i.__pictorialSymbolMeta = l),
                      n.add(i),
                      C(i, u, l);
                  } else n.remove(i);
                })
                .remove(function(e) {
                  var t = r.getItemGraphicEl(e);
                  t && D(r, e, t.__pictorialSymbolMeta.animationModel, t);
                })
                .execute(),
              (this._data = a),
              this.group
            );
          },
          dispose: a.noop,
          remove: function(e, t) {
            var i = this.group,
              n = this._data;
            e.get('animation')
              ? n &&
                n.eachItemGraphicEl(function(t) {
                  D(n, t.dataIndex, e, t);
                })
              : i.removeAll();
          },
        });
      function f(e, t, i, n) {
        var o = e.getItemLayout(t),
          r = i.get('symbolRepeat'),
          s = i.get('symbolClip'),
          u = i.get('symbolPosition') || 'start',
          d = ((i.get('symbolRotate') || 0) * Math.PI) / 180 || 0,
          g = i.get('symbolPatternSize') || 2,
          f = i.isAnimationEnabled(),
          v = {
            dataIndex: t,
            layout: o,
            itemModel: i,
            symbolType: e.getItemVisual(t, 'symbol') || 'circle',
            color: e.getItemVisual(t, 'color'),
            symbolClip: s,
            symbolRepeat: r,
            symbolRepeatDirection: i.get('symbolRepeatDirection'),
            symbolPatternSize: g,
            rotation: d,
            animationModel: f ? i : null,
            hoverAnimation: f && i.get('hoverAnimation'),
            z2: i.getShallow('z', !0) || 0,
          };
        !(function(e, t, i, n, o) {
          var r,
            s = n.valueDim,
            l = e.get('symbolBoundingData'),
            c = n.coordSys.getOtherAxis(n.coordSys.getBaseAxis()),
            u = c.toGlobalCoord(c.dataToCoord(0)),
            h = 1 - +(i[s.wh] <= 0);
          if (a.isArray(l)) {
            var d = [m(c, l[0]) - u, m(c, l[1]) - u];
            d[1] < d[0] && d.reverse(), (r = d[h]);
          } else r = null != l ? m(c, l) - u : t ? n.coordSysExtent[s.index][h] - u : i[s.wh];
          (o.boundingLength = r), t && (o.repeatCutLength = i[s.wh]), (o.pxSign = r > 0 ? 1 : r < 0 ? -1 : 0);
        })(i, r, o, n, v),
          (function(e, t, i, n, o, r, s, c, u, h) {
            var d = u.valueDim,
              p = u.categoryDim,
              g = Math.abs(i[p.wh]),
              f = e.getItemVisual(t, 'symbolSize');
            a.isArray(f) ? (f = f.slice()) : (null == f && (f = '100%'), (f = [f, f])),
              (f[p.index] = l(f[p.index], g)),
              (f[d.index] = l(f[d.index], n ? g : Math.abs(r))),
              (h.symbolSize = f),
              ((h.symbolScale = [f[0] / c, f[1] / c])[d.index] *= (u.isHorizontal ? -1 : 1) * s);
          })(e, t, o, r, 0, v.boundingLength, v.pxSign, g, n, v),
          (function(e, t, i, n, a) {
            var o = e.get(h) || 0;
            o &&
              (p.attr({ scale: t.slice(), rotation: i }),
              p.updateTransform(),
              (o /= p.getLineScale()),
              (o *= t[n.valueDim.index])),
              (a.valueLineWidth = o);
          })(i, v.symbolScale, d, n, v);
        var y = v.symbolSize,
          x = i.get('symbolOffset');
        return (
          a.isArray(x) && (x = [l(x[0], y[0]), l(x[1], y[1])]),
          (function(e, t, i, n, o, r, s, u, h, d, p, g) {
            var f = p.categoryDim,
              m = p.valueDim,
              v = g.pxSign,
              y = Math.max(t[m.index] + u, 0),
              x = y;
            if (n) {
              var _ = Math.abs(h),
                b = a.retrieve(e.get('symbolMargin'), '15%') + '',
                S = !1;
              b.lastIndexOf('!') === b.length - 1 && ((S = !0), (b = b.slice(0, b.length - 1))), (b = l(b, t[m.index]));
              var w = Math.max(y + 2 * b, 0),
                M = S ? 0 : 2 * b,
                I = c(n),
                A = I ? n : k((_ + M) / w);
              (w = y + 2 * (b = (_ - A * y) / 2 / (S ? A : A - 1))),
                (M = S ? 0 : 2 * b),
                I || 'fixed' === n || (A = d ? k((Math.abs(d) + M) / w) : 0),
                (x = A * w - M),
                (g.repeatTimes = A),
                (g.symbolMargin = b);
            }
            var D = v * (x / 2),
              T = (g.pathPosition = []);
            (T[f.index] = i[f.wh] / 2),
              (T[m.index] = 'start' === s ? D : 'end' === s ? h - D : h / 2),
              r && ((T[0] += r[0]), (T[1] += r[1]));
            var P = (g.bundlePosition = []);
            (P[f.index] = i[f.xy]), (P[m.index] = i[m.xy]);
            var L = (g.barRectShape = a.extend({}, i));
            (L[m.wh] = v * Math.max(Math.abs(i[m.wh]), Math.abs(T[m.index] + D))), (L[f.wh] = i[f.wh]);
            var C = (g.clipShape = {});
            (C[f.xy] = -i[f.xy]), (C[f.wh] = p.ecSize[f.wh]), (C[m.xy] = 0), (C[m.wh] = i[m.wh]);
          })(i, y, o, r, 0, x, u, v.valueLineWidth, v.boundingLength, v.repeatCutLength, n, v),
          v
        );
      }
      function m(e, t) {
        return e.toGlobalCoord(e.dataToCoord(e.scale.parse(t)));
      }
      function v(e) {
        var t = e.symbolPatternSize,
          i = r(e.symbolType, -t / 2, -t / 2, t, t, e.color);
        return i.attr({ culling: !0 }), 'image' !== i.type && i.setStyle({ strokeNoScale: !0 }), i;
      }
      function y(e, t, i, n) {
        var a = e.__pictorialBundle,
          o = i.pathPosition,
          r = t.valueDim,
          s = i.repeatTimes || 0,
          l = 0,
          c = i.symbolSize[t.valueDim.index] + i.valueLineWidth + 2 * i.symbolMargin;
        for (
          P(e, function(e) {
            (e.__pictorialAnimationIndex = l),
              (e.__pictorialRepeatTimes = s),
              l < s
                ? L(e, null, d(l), i, n)
                : L(e, null, { scale: [0, 0] }, i, n, function() {
                    a.remove(e);
                  }),
              I(e, i),
              l++;
          });
          l < s;
          l++
        ) {
          var u = v(i);
          (u.__pictorialAnimationIndex = l), (u.__pictorialRepeatTimes = s), a.add(u);
          var h = d(l);
          L(u, { position: h.position, scale: [0, 0] }, { scale: h.scale, rotation: h.rotation }, i, n),
            u.on('mouseover', p).on('mouseout', g),
            I(u, i);
        }
        function d(e) {
          var t = o.slice(),
            n = i.pxSign,
            a = e;
          return (
            ('start' === i.symbolRepeatDirection ? n > 0 : n < 0) && (a = s - 1 - e),
            (t[r.index] = c * (a - s / 2 + 0.5) + o[r.index]),
            { position: t, scale: i.symbolScale.slice(), rotation: i.rotation }
          );
        }
        function p() {
          P(e, function(e) {
            e.trigger('emphasis');
          });
        }
        function g() {
          P(e, function(e) {
            e.trigger('normal');
          });
        }
      }
      function x(e, t, i, n) {
        var a = e.__pictorialBundle,
          o = e.__pictorialMainPath;
        o
          ? L(o, null, { position: i.pathPosition.slice(), scale: i.symbolScale.slice(), rotation: i.rotation }, i, n)
          : ((o = e.__pictorialMainPath = v(i)),
            a.add(o),
            L(
              o,
              { position: i.pathPosition.slice(), scale: [0, 0], rotation: i.rotation },
              { scale: i.symbolScale.slice() },
              i,
              n,
            ),
            o
              .on('mouseover', function() {
                this.trigger('emphasis');
              })
              .on('mouseout', function() {
                this.trigger('normal');
              })),
          I(o, i);
      }
      function _(e, t, i) {
        var n = a.extend({}, t.barRectShape),
          r = e.__pictorialBarRect;
        r
          ? L(r, null, { shape: n }, t, i)
          : ((r = e.__pictorialBarRect = new o.Rect({
              z2: 2,
              shape: n,
              silent: !0,
              style: { stroke: 'transparent', fill: 'transparent', lineWidth: 0 },
            })),
            e.add(r));
      }
      function b(e, t, i, n) {
        if (i.symbolClip) {
          var r = e.__pictorialClipPath,
            s = a.extend({}, i.clipShape),
            l = t.valueDim,
            c = i.animationModel,
            u = i.dataIndex;
          if (r) o.updateProps(r, { shape: s }, c, u);
          else {
            (s[l.wh] = 0),
              (r = new o.Rect({ shape: s })),
              e.__pictorialBundle.setClipPath(r),
              (e.__pictorialClipPath = r);
            var h = {};
            (h[l.wh] = i.clipShape[l.wh]), o[n ? 'updateProps' : 'initProps'](r, { shape: h }, c, u);
          }
        }
      }
      function S(e, t) {
        var i = e.getItemModel(t);
        return (i.getAnimationDelayParams = w), (i.isAnimationEnabled = M), i;
      }
      function w(e) {
        return { index: e.__pictorialAnimationIndex, count: e.__pictorialRepeatTimes };
      }
      function M() {
        return this.parentModel.isAnimationEnabled() && !!this.getShallow('animation');
      }
      function I(e, t) {
        e.off('emphasis').off('normal');
        var i = t.symbolScale.slice();
        t.hoverAnimation &&
          e
            .on('emphasis', function() {
              this.animateTo({ scale: [1.1 * i[0], 1.1 * i[1]] }, 400, 'elasticOut');
            })
            .on('normal', function() {
              this.animateTo({ scale: i.slice() }, 400, 'elasticOut');
            });
      }
      function A(e, t, i, n) {
        var a = new o.Group(),
          r = new o.Group();
        return (
          a.add(r),
          (a.__pictorialBundle = r),
          r.attr('position', i.bundlePosition.slice()),
          i.symbolRepeat ? y(a, t, i) : x(a, 0, i),
          _(a, i, n),
          b(a, t, i, n),
          (a.__pictorialShapeStr = T(e, i)),
          (a.__pictorialSymbolMeta = i),
          a
        );
      }
      function D(e, t, i, n) {
        var r = n.__pictorialBarRect;
        r && (r.style.text = null);
        var s = [];
        P(n, function(e) {
          s.push(e);
        }),
          n.__pictorialMainPath && s.push(n.__pictorialMainPath),
          n.__pictorialClipPath && (i = null),
          a.each(s, function(e) {
            o.updateProps(e, { scale: [0, 0] }, i, t, function() {
              n.parent && n.parent.remove(n);
            });
          }),
          e.setItemGraphicEl(t, null);
      }
      function T(e, t) {
        return [e.getItemVisual(t.dataIndex, 'symbol') || 'none', !!t.symbolRepeat, !!t.symbolClip].join(':');
      }
      function P(e, t, i) {
        a.each(e.__pictorialBundle.children(), function(n) {
          n !== e.__pictorialBarRect && t.call(i, n);
        });
      }
      function L(e, t, i, n, a, r) {
        t && e.attr(t),
          n.symbolClip && !a
            ? i && e.attr(i)
            : i && o[a ? 'updateProps' : 'initProps'](e, i, n.animationModel, n.dataIndex, r);
      }
      function C(e, t, i) {
        var n = i.color,
          r = i.dataIndex,
          s = i.itemModel,
          l = s.getModel('itemStyle').getItemStyle(['color']),
          c = s.getModel('emphasis.itemStyle').getItemStyle(),
          h = s.getShallow('cursor');
        P(e, function(e) {
          e.setColor(n),
            e.setStyle(a.defaults({ fill: n, opacity: i.opacity }, l)),
            o.setHoverStyle(e, c),
            h && (e.cursor = h),
            (e.z2 = i.z2);
        });
        var d = {},
          p = e.__pictorialBarRect;
        u(p.style, d, s, n, t.seriesModel, r, t.valueDim.posDesc[+(i.boundingLength > 0)]), o.setHoverStyle(p, d);
      }
      function k(e) {
        var t = Math.round(e);
        return Math.abs(e - t) < 1e-4 ? t : Math.ceil(e);
      }
      e.exports = g;
    },
    'N5BQ': function(e, t, i) {
      var n = i('OlYY').extend({
        type: 'dataZoom.slider',
        layoutMode: 'box',
        defaultOption: {
          show: !0,
          right: 'ph',
          top: 'ph',
          width: 'ph',
          height: 'ph',
          left: null,
          bottom: null,
          backgroundColor: 'rgba(47,69,84,0)',
          dataBackground: {
            lineStyle: { color: '#2f4554', width: 0.5, opacity: 0.3 },
            areaStyle: { color: 'rgba(47,69,84,0.3)', opacity: 0.3 },
          },
          borderColor: '#ddd',
          fillerColor: 'rgba(167,183,204,0.4)',
          handleIcon:
            'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',
          handleSize: '100%',
          handleStyle: { color: '#a7b7cc' },
          labelPrecision: null,
          labelFormatter: null,
          showDetail: !0,
          showDataShadow: 'auto',
          realtime: !0,
          zoomLock: !1,
          textStyle: { color: '#333' },
        },
      });
      e.exports = n;
    },
    'NA0q': function(e, t, i) {
      var n = i('bYtY'),
        a = i('6Ic6'),
        o = i('TkdX'),
        r = i('gPAo'),
        s = a.extend({
          type: 'sunburst',
          init: function() {},
          render: function(e, t, i, a) {
            var s = this;
            (this.seriesModel = e), (this.api = i), (this.ecModel = t);
            var l = e.getData(),
              c = l.tree.root,
              u = e.getViewRoot(),
              h = this.group,
              d = e.get('renderLabelForZeroData'),
              p = [];
            if (
              (u.eachNode(function(e) {
                p.push(e);
              }),
              (function(i, a) {
                function s(e) {
                  return e.getId();
                }
                function u(n, r) {
                  !(function(i, n) {
                    if ((d || !i || i.getValue() || (i = null), i !== c && n !== c))
                      if (n && n.piece)
                        i
                          ? (n.piece.updateData(!1, i, 'normal', e, t), l.setItemGraphicEl(i.dataIndex, n.piece))
                          : (r = n) && r.piece && (h.remove(r.piece), (r.piece = null));
                      else if (i) {
                        var a = new o(i, e, t);
                        h.add(a), l.setItemGraphicEl(i.dataIndex, a);
                      }
                    var r;
                  })(null == n ? null : i[n], null == r ? null : a[r]);
                }
                (0 === i.length && 0 === a.length) ||
                  new r(a, i, s, s)
                    .add(u)
                    .update(u)
                    .remove(n.curry(u, null))
                    .execute();
              })(p, this._oldChildren || []),
              (function(i, n) {
                if (n.depth > 0) {
                  s.virtualPiece
                    ? s.virtualPiece.updateData(!1, i, 'normal', e, t)
                    : ((s.virtualPiece = new o(i, e, t)), h.add(s.virtualPiece)),
                    n.piece._onclickEvent && n.piece.off('click', n.piece._onclickEvent);
                  var a = function(e) {
                    s._rootToNode(n.parentNode);
                  };
                  (n.piece._onclickEvent = a), s.virtualPiece.on('click', a);
                } else s.virtualPiece && (h.remove(s.virtualPiece), (s.virtualPiece = null));
              })(c, u),
              a && a.highlight && a.highlight.piece)
            ) {
              var g = e.getShallow('highlightPolicy');
              a.highlight.piece.onEmphasis(g);
            } else if (a && a.unhighlight) {
              var f = this.virtualPiece;
              !f && c.children.length && (f = c.children[0].piece), f && f.onNormal();
            }
            this._initEvents(), (this._oldChildren = p);
          },
          dispose: function() {},
          _initEvents: function() {
            var e = this,
              t = function(t) {
                var i = !1;
                e.seriesModel.getViewRoot().eachNode(function(n) {
                  if (!i && n.piece && n.piece.childAt(0) === t.target) {
                    var a = n.getModel().get('nodeClick');
                    if ('rootToNode' === a) e._rootToNode(n);
                    else if ('link' === a) {
                      var o = n.getModel(),
                        r = o.get('link');
                      if (r) {
                        var s = o.get('target', !0) || '_blank';
                        window.open(r, s);
                      }
                    }
                    i = !0;
                  }
                });
              };
            this.group._onclickEvent && this.group.off('click', this.group._onclickEvent),
              this.group.on('click', t),
              (this.group._onclickEvent = t);
          },
          _rootToNode: function(e) {
            e !== this.seriesModel.getViewRoot() &&
              this.api.dispatchAction({
                type: 'sunburstRootToNode',
                from: this.uid,
                seriesId: this.seriesModel.id,
                targetNode: e,
              });
          },
          containPoint: function(e, t) {
            var i = t.getData().getItemLayout(0);
            if (i) {
              var n = e[0] - i.cx,
                a = e[1] - i.cy,
                o = Math.sqrt(n * n + a * a);
              return o <= i.r && o >= i.r0;
            }
          },
        });
      e.exports = s;
    },
    'NH9N': function(e, t, i) {
      var n = i('bYtY'),
        a = i('mFDi'),
        o = i('Fofx'),
        r = i('IwbS'),
        s = i('+TT/'),
        l = i('kzvK'),
        c = i('CMP+'),
        u = i('oVpE').createSymbol,
        h = i('aX7z'),
        d = i('OELB'),
        p = i('7aKB').encodeHTML,
        g = n.bind,
        f = n.each,
        m = Math.PI,
        v = l.extend({
          type: 'timeline.slider',
          init: function(e, t) {
            this.api = t;
          },
          render: function(e, t, i, n) {
            if (((this.model = e), (this.api = i), (this.ecModel = t), this.group.removeAll(), e.get('show', !0))) {
              var a = this._layout(e, i),
                o = this._createGroup('mainGroup'),
                r = this._createGroup('labelGroup'),
                s = (this._axis = this._createAxis(a, e));
              (e.formatTooltip = function(e) {
                return p(s.scale.getLabel(e));
              }),
                f(
                  ['AxisLine', 'AxisTick', 'Control', 'CurrentPointer'],
                  function(t) {
                    this['_render' + t](a, o, s, e);
                  },
                  this,
                ),
                this._renderAxisLabel(a, r, s, e),
                this._position(a, e);
            }
            this._doPlayStop();
          },
          remove: function() {
            this._clearTimer(), this.group.removeAll();
          },
          dispose: function() {
            this._clearTimer();
          },
          _layout: function(e, t) {
            var i = e.get('label.position'),
              n = e.get('orient'),
              a = (function(e, t) {
                return s.getLayoutRect(
                  e.getBoxLayoutParams(),
                  { width: t.getWidth(), height: t.getHeight() },
                  e.get('padding'),
                );
              })(e, t);
            null == i || 'auto' === i
              ? (i =
                  'horizontal' === n
                    ? a.y + a.height / 2 < t.getHeight() / 2
                      ? '-'
                      : '+'
                    : a.x + a.width / 2 < t.getWidth() / 2
                    ? '+'
                    : '-')
              : isNaN(i) && (i = { horizontal: { top: '-', bottom: '+' }, vertical: { left: '-', right: '+' } }[n][i]);
            var o,
              r,
              l,
              c,
              u = { horizontal: 'center', vertical: i >= 0 || '+' === i ? 'left' : 'right' },
              h = { horizontal: i >= 0 || '+' === i ? 'top' : 'bottom', vertical: 'middle' },
              d = { horizontal: 0, vertical: m / 2 },
              p = 'vertical' === n ? a.height : a.width,
              g = e.getModel('controlStyle'),
              f = g.get('show', !0),
              v = f ? g.get('itemSize') : 0,
              y = f ? g.get('itemGap') : 0,
              x = v + y,
              _ = e.get('label.rotate') || 0;
            _ = (_ * m) / 180;
            var b = g.get('position', !0),
              S = f && g.get('showPlayBtn', !0),
              w = f && g.get('showPrevBtn', !0),
              M = f && g.get('showNextBtn', !0),
              I = 0,
              A = p;
            return (
              'left' === b || 'bottom' === b
                ? (S && ((o = [0, 0]), (I += x)), w && ((r = [I, 0]), (I += x)), M && ((l = [A - v, 0]), (A -= x)))
                : (S && ((o = [A - v, 0]), (A -= x)), w && ((r = [0, 0]), (I += x)), M && ((l = [A - v, 0]), (A -= x))),
              (c = [I, A]),
              e.get('inverse') && c.reverse(),
              {
                viewRect: a,
                mainLength: p,
                orient: n,
                rotation: d[n],
                labelRotation: _,
                labelPosOpt: i,
                labelAlign: e.get('label.align') || u[n],
                labelBaseline: e.get('label.verticalAlign') || e.get('label.baseline') || h[n],
                playPosition: o,
                prevBtnPosition: r,
                nextBtnPosition: l,
                axisExtent: c,
                controlSize: v,
                controlGap: y,
              }
            );
          },
          _position: function(e, t) {
            var i = this._mainGroup,
              n = this._labelGroup,
              a = e.viewRect;
            if ('vertical' === e.orient) {
              var r = o.create(),
                s = a.x,
                l = a.y + a.height;
              o.translate(r, r, [-s, -l]),
                o.rotate(r, r, -m / 2),
                o.translate(r, r, [s, l]),
                (a = a.clone()).applyTransform(r);
            }
            var c = y(a),
              u = y(i.getBoundingRect()),
              h = y(n.getBoundingRect()),
              d = i.position,
              p = n.position;
            p[0] = d[0] = c[0][0];
            var g,
              f = e.labelPosOpt;
            function v(e) {
              var t = e.position;
              e.origin = [c[0][0] - t[0], c[1][0] - t[1]];
            }
            function y(e) {
              return [
                [e.x, e.x + e.width],
                [e.y, e.y + e.height],
              ];
            }
            function x(e, t, i, n, a) {
              e[n] += i[n][a] - t[n][a];
            }
            isNaN(f)
              ? (x(d, u, c, 1, (g = '+' === f ? 0 : 1)), x(p, h, c, 1, 1 - g))
              : (x(d, u, c, 1, (g = f >= 0 ? 0 : 1)), (p[1] = d[1] + f)),
              i.attr('position', d),
              n.attr('position', p),
              (i.rotation = n.rotation = e.rotation),
              v(i),
              v(n);
          },
          _createAxis: function(e, t) {
            var i = t.getData(),
              n = t.get('axisType'),
              a = h.createScaleByModel(t, n);
            a.getTicks = function() {
              return i.mapArray(['value'], function(e) {
                return e;
              });
            };
            var o = i.getDataExtent('value');
            a.setExtent(o[0], o[1]), a.niceTicks();
            var r = new c('value', a, e.axisExtent, n);
            return (r.model = t), r;
          },
          _createGroup: function(e) {
            var t = (this['_' + e] = new r.Group());
            return this.group.add(t), t;
          },
          _renderAxisLine: function(e, t, i, a) {
            var o = i.getExtent();
            a.get('lineStyle.show') &&
              t.add(
                new r.Line({
                  shape: { x1: o[0], y1: 0, x2: o[1], y2: 0 },
                  style: n.extend({ lineCap: 'round' }, a.getModel('lineStyle').getLineStyle()),
                  silent: !0,
                  z2: 1,
                }),
              );
          },
          _renderAxisTick: function(e, t, i, n) {
            var a = n.getData(),
              o = i.scale.getTicks();
            f(
              o,
              function(e) {
                var o = i.dataToCoord(e),
                  s = a.getItemModel(e),
                  l = s.getModel('itemStyle'),
                  c = s.getModel('emphasis.itemStyle'),
                  u = { position: [o, 0], onclick: g(this._changeTimeline, this, e) },
                  h = y(s, l, t, u);
                r.setHoverStyle(h, c.getItemStyle()),
                  s.get('tooltip') ? ((h.dataIndex = e), (h.dataModel = n)) : (h.dataIndex = h.dataModel = null);
              },
              this,
            );
          },
          _renderAxisLabel: function(e, t, i, n) {
            if (i.getLabelModel().get('show')) {
              var a = n.getData(),
                o = i.getViewLabels();
              f(
                o,
                function(n) {
                  var o = n.tickValue,
                    s = a.getItemModel(o),
                    l = s.getModel('label'),
                    c = s.getModel('emphasis.label'),
                    u = i.dataToCoord(n.tickValue),
                    h = new r.Text({
                      position: [u, 0],
                      rotation: e.labelRotation - e.rotation,
                      onclick: g(this._changeTimeline, this, o),
                      silent: !1,
                    });
                  r.setTextStyle(h.style, l, {
                    text: n.formattedLabel,
                    textAlign: e.labelAlign,
                    textVerticalAlign: e.labelBaseline,
                  }),
                    t.add(h),
                    r.setHoverStyle(h, r.setTextStyle({}, c));
                },
                this,
              );
            }
          },
          _renderControl: function(e, t, i, o) {
            var s = e.controlSize,
              l = e.rotation,
              c = o.getModel('controlStyle').getItemStyle(),
              u = o.getModel('emphasis.controlStyle').getItemStyle(),
              h = [0, -s / 2, s, s],
              d = o.getPlayState(),
              p = o.get('inverse', !0);
            function f(e, i, d, p) {
              if (e) {
                var g = (function(e, t, i, o) {
                  return r.makePath(
                    e.get(t).replace(/^path:\/\//, ''),
                    n.clone(o || {}),
                    new a(i[0], i[1], i[2], i[3]),
                    'center',
                  );
                })(o, i, h, {
                  position: e,
                  origin: [s / 2, 0],
                  rotation: p ? -l : 0,
                  rectHover: !0,
                  style: c,
                  onclick: d,
                });
                t.add(g), r.setHoverStyle(g, u);
              }
            }
            f(e.nextBtnPosition, 'controlStyle.nextIcon', g(this._changeTimeline, this, p ? '-' : '+')),
              f(e.prevBtnPosition, 'controlStyle.prevIcon', g(this._changeTimeline, this, p ? '+' : '-')),
              f(
                e.playPosition,
                'controlStyle.' + (d ? 'stopIcon' : 'playIcon'),
                g(this._handlePlayClick, this, !d),
                !0,
              );
          },
          _renderCurrentPointer: function(e, t, i, n) {
            var a = n.getData(),
              o = n.getCurrentIndex(),
              r = a.getItemModel(o).getModel('checkpointStyle'),
              s = this;
            this._currentPointer = y(r, r, this._mainGroup, {}, this._currentPointer, {
              onCreate: function(e) {
                (e.draggable = !0),
                  (e.drift = g(s._handlePointerDrag, s)),
                  (e.ondragend = g(s._handlePointerDragend, s)),
                  x(e, o, i, n, !0);
              },
              onUpdate: function(e) {
                x(e, o, i, n);
              },
            });
          },
          _handlePlayClick: function(e) {
            this._clearTimer(), this.api.dispatchAction({ type: 'timelinePlayChange', playState: e, from: this.uid });
          },
          _handlePointerDrag: function(e, t, i) {
            this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY]);
          },
          _handlePointerDragend: function(e) {
            this._pointerChangeTimeline([e.offsetX, e.offsetY], !0);
          },
          _pointerChangeTimeline: function(e, t) {
            var i = this._toAxisCoord(e)[0],
              n = d.asc(this._axis.getExtent().slice());
            i > n[1] && (i = n[1]),
              i < n[0] && (i = n[0]),
              (this._currentPointer.position[0] = i),
              this._currentPointer.dirty();
            var a = this._findNearestTick(i),
              o = this.model;
            (t || (a !== o.getCurrentIndex() && o.get('realtime'))) && this._changeTimeline(a);
          },
          _doPlayStop: function() {
            this._clearTimer(),
              this.model.getPlayState() &&
                (this._timer = setTimeout(
                  g(function() {
                    var e = this.model;
                    this._changeTimeline(e.getCurrentIndex() + (e.get('rewind', !0) ? -1 : 1));
                  }, this),
                  this.model.get('playInterval'),
                ));
          },
          _toAxisCoord: function(e) {
            var t = this._mainGroup.getLocalTransform();
            return r.applyTransform(e, t, !0);
          },
          _findNearestTick: function(e) {
            var t,
              i = this.model.getData(),
              n = 1 / 0,
              a = this._axis;
            return (
              i.each(['value'], function(i, o) {
                var r = a.dataToCoord(i),
                  s = Math.abs(r - e);
                s < n && ((n = s), (t = o));
              }),
              t
            );
          },
          _clearTimer: function() {
            this._timer && (clearTimeout(this._timer), (this._timer = null));
          },
          _changeTimeline: function(e) {
            var t = this.model.getCurrentIndex();
            '+' === e ? (e = t + 1) : '-' === e && (e = t - 1),
              this.api.dispatchAction({ type: 'timelineChange', currentIndex: e, from: this.uid });
          },
        });
      function y(e, t, i, a, o, r) {
        var s = t.get('color');
        if (o) o.setColor(s), i.add(o), r && r.onUpdate(o);
        else {
          var l = e.get('symbol');
          (o = u(l, -1, -1, 2, 2, s)).setStyle('strokeNoScale', !0), i.add(o), r && r.onCreate(o);
        }
        var c = t.getItemStyle(['color', 'symbol', 'symbolSize']);
        o.setStyle(c), (a = n.merge({ rectHover: !0, z2: 100 }, a, !0));
        var h = e.get('symbolSize');
        ((h = h instanceof Array ? h.slice() : [+h, +h])[0] /= 2), (h[1] /= 2), (a.scale = h);
        var p = e.get('symbolOffset');
        if (p) {
          var g = (a.position = a.position || [0, 0]);
          (g[0] += d.parsePercent(p[0], h[0])), (g[1] += d.parsePercent(p[1], h[1]));
        }
        var f = e.get('symbolRotate');
        return (a.rotation = ((f || 0) * Math.PI) / 180 || 0), o.attr(a), o.updateTransform(), o;
      }
      function x(e, t, i, n, a) {
        if (!e.dragging) {
          var o = n.getModel('checkpointStyle'),
            r = i.dataToCoord(n.getData().get(['value'], t));
          a || !o.get('animation', !0)
            ? e.attr({ position: [r, 0] })
            : (e.stopAnimation(!0),
              e.animateTo({ position: [r, 0] }, o.get('animationDuration', !0), o.get('animationEasing', !0)));
        }
      }
      e.exports = v;
    },
    'OUJF': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY');
      n.registerAction({ type: 'timelineChange', event: 'timelineChanged', update: 'prepareAndUpdate' }, function(
        e,
        t,
      ) {
        var i = t.getComponent('timeline');
        return (
          i &&
            null != e.currentIndex &&
            (i.setCurrentIndex(e.currentIndex), !i.get('loop', !0) && i.isIndexMax() && i.setPlayState(!1)),
          t.resetOption('timeline'),
          a.defaults({ currentIndex: i.option.currentIndex }, e)
        );
      }),
        n.registerAction({ type: 'timelinePlayChange', event: 'timelinePlayChanged', update: 'update' }, function(
          e,
          t,
        ) {
          var i = t.getComponent('timeline');
          i && null != e.playState && i.setPlayState(e.playState);
        });
    },
    'OXB0': function(e, t, i) {
      var n = i('T4UG'),
        a = i('MwEJ'),
        o = i('IDmD'),
        r = n.extend({
          type: 'series.heatmap',
          getInitialData: function(e, t) {
            return a(this.getSource(), this, { generateCoord: 'value' });
          },
          preventIncremental: function() {
            var e = o.get(this.get('coordinateSystem'));
            if (e && e.dimensions) return 'lng' === e.dimensions[0] && 'lat' === e.dimensions[1];
          },
          defaultOption: {
            coordinateSystem: 'cartesian2d',
            zlevel: 0,
            z: 2,
            geoIndex: 0,
            blurSize: 30,
            pointSize: 20,
            maxOpacity: 1,
            minOpacity: 0,
          },
        });
      e.exports = r;
    },
    'PNag': function(e, t, i) {
      var n = i('bYtY'),
        a = i('SKnc'),
        o = i('YH21'),
        r = i('crZl'),
        s = i('IwbS'),
        l = i('OELB'),
        c = i('72pK'),
        u = i('y7Aq'),
        h = i('4NO4'),
        d = l.linearMap,
        p = n.each,
        g = Math.min,
        f = Math.max,
        m = r.extend({
          type: 'visualMap.continuous',
          init: function() {
            m.superApply(this, 'init', arguments),
              (this._shapes = {}),
              (this._dataInterval = []),
              (this._handleEnds = []),
              (this._hoverLinkDataIndices = []);
          },
          doRender: function(e, t, i, n) {
            (n && 'selectDataRange' === n.type && n.from === this.uid) || this._buildView();
          },
          _buildView: function() {
            this.group.removeAll();
            var e = this.visualMapModel,
              t = this.group;
            (this._orient = e.get('orient')),
              (this._useHandle = e.get('calculable')),
              this._resetInterval(),
              this._renderBar(t);
            var i = e.get('text');
            this._renderEndsText(t, i, 0),
              this._renderEndsText(t, i, 1),
              this._updateView(!0),
              this.renderBackground(t),
              this._updateView(),
              this._enableHoverLinkToSeries(),
              this._enableHoverLinkFromSeries(),
              this.positionGroup(t);
          },
          _renderEndsText: function(e, t, i) {
            if (t) {
              var n = t[1 - i];
              n = null != n ? n + '' : '';
              var a = this.visualMapModel,
                o = a.get('textGap'),
                r = a.itemSize,
                l = this._shapes.barGroup,
                c = this._applyTransform([r[0] / 2, 0 === i ? -o : r[1] + o], l),
                u = this._applyTransform(0 === i ? 'bottom' : 'top', l),
                h = this._orient,
                d = this.visualMapModel.textStyleModel;
              this.group.add(
                new s.Text({
                  style: {
                    x: c[0],
                    y: c[1],
                    textVerticalAlign: 'horizontal' === h ? 'middle' : u,
                    textAlign: 'horizontal' === h ? u : 'center',
                    text: n,
                    textFont: d.getFont(),
                    textFill: d.getTextColor(),
                  },
                }),
              );
            }
          },
          _renderBar: function(e) {
            var t = this.visualMapModel,
              i = this._shapes,
              a = t.itemSize,
              o = this._orient,
              r = this._useHandle,
              s = u.getItemAlign(t, this.api, a),
              l = (i.barGroup = this._createBarGroup(s));
            l.add((i.outOfRange = v())),
              l.add(
                (i.inRange = v(
                  null,
                  r ? x(this._orient) : null,
                  n.bind(this._dragHandle, this, 'all', !1),
                  n.bind(this._dragHandle, this, 'all', !0),
                )),
              );
            var c = t.textStyleModel.getTextRect('\u56fd'),
              h = f(c.width, c.height);
            r &&
              ((i.handleThumbs = []),
              (i.handleLabels = []),
              (i.handleLabelPoints = []),
              this._createHandle(l, 0, a, h, o, s),
              this._createHandle(l, 1, a, h, o, s)),
              this._createIndicator(l, a, h, o),
              e.add(l);
          },
          _createHandle: function(e, t, i, a, r) {
            var l = n.bind(this._dragHandle, this, t, !1),
              c = n.bind(this._dragHandle, this, t, !0),
              u = v(
                (function(e, t) {
                  return 0 === e
                    ? [
                        [0, 0],
                        [t, 0],
                        [t, -t],
                      ]
                    : [
                        [0, 0],
                        [t, 0],
                        [t, t],
                      ];
                })(t, a),
                x(this._orient),
                l,
                c,
              );
            (u.position[0] = i[0]), e.add(u);
            var h = this.visualMapModel.textStyleModel,
              d = new s.Text({
                draggable: !0,
                drift: l,
                onmousemove: function(e) {
                  o.stop(e.event);
                },
                ondragend: c,
                style: { x: 0, y: 0, text: '', textFont: h.getFont(), textFill: h.getTextColor() },
              });
            this.group.add(d);
            var p = [
                'horizontal' === r ? a / 2 : 1.5 * a,
                'horizontal' === r ? (0 === t ? -1.5 * a : 1.5 * a) : 0 === t ? -a / 2 : a / 2,
              ],
              g = this._shapes;
            (g.handleThumbs[t] = u), (g.handleLabelPoints[t] = p), (g.handleLabels[t] = d);
          },
          _createIndicator: function(e, t, i, n) {
            var a = v([[0, 0]], 'move');
            (a.position[0] = t[0]), a.attr({ invisible: !0, silent: !0 }), e.add(a);
            var o = this.visualMapModel.textStyleModel,
              r = new s.Text({
                silent: !0,
                invisible: !0,
                style: { x: 0, y: 0, text: '', textFont: o.getFont(), textFill: o.getTextColor() },
              });
            this.group.add(r);
            var l = ['horizontal' === n ? i / 2 : 9, 0],
              c = this._shapes;
            (c.indicator = a), (c.indicatorLabel = r), (c.indicatorLabelPoint = l);
          },
          _dragHandle: function(e, t, i, n) {
            if (this._useHandle) {
              if (((this._dragging = !t), !t)) {
                var a = this._applyTransform([i, n], this._shapes.barGroup, !0);
                this._updateInterval(e, a[1]), this._updateView();
              }
              t === !this.visualMapModel.get('realtime') &&
                this.api.dispatchAction({
                  type: 'selectDataRange',
                  from: this.uid,
                  visualMapId: this.visualMapModel.id,
                  selected: this._dataInterval.slice(),
                }),
                t
                  ? !this._hovering && this._clearHoverLinkToSeries()
                  : y(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[e], !1);
            }
          },
          _resetInterval: function() {
            var e = this.visualMapModel,
              t = (this._dataInterval = e.getSelected()),
              i = e.getExtent(),
              n = [0, e.itemSize[1]];
            this._handleEnds = [d(t[0], i, n, !0), d(t[1], i, n, !0)];
          },
          _updateInterval: function(e, t) {
            var i = this.visualMapModel,
              n = this._handleEnds,
              a = [0, i.itemSize[1]];
            c((t = t || 0), n, a, e, 0);
            var o = i.getExtent();
            this._dataInterval = [d(n[0], a, o, !0), d(n[1], a, o, !0)];
          },
          _updateView: function(e) {
            var t = this.visualMapModel,
              i = t.getExtent(),
              n = this._shapes,
              a = [0, t.itemSize[1]],
              o = e ? a : this._handleEnds,
              r = this._createBarVisual(this._dataInterval, i, o, 'inRange'),
              s = this._createBarVisual(i, i, a, 'outOfRange');
            n.inRange.setStyle({ fill: r.barColor, opacity: r.opacity }).setShape('points', r.barPoints),
              n.outOfRange.setStyle({ fill: s.barColor, opacity: s.opacity }).setShape('points', s.barPoints),
              this._updateHandle(o, r);
          },
          _createBarVisual: function(e, t, i, n) {
            var o = { forceState: n, convertOpacityToAlpha: !0 },
              r = this._makeColorGradient(e, o),
              s = [this.getControllerVisual(e[0], 'symbolSize', o), this.getControllerVisual(e[1], 'symbolSize', o)],
              l = this._createBarPoints(i, s);
            return { barColor: new a(0, 0, 0, 1, r), barPoints: l, handlesColor: [r[0].color, r[r.length - 1].color] };
          },
          _makeColorGradient: function(e, t) {
            var i = [],
              n = (e[1] - e[0]) / 100;
            i.push({ color: this.getControllerVisual(e[0], 'color', t), offset: 0 });
            for (var a = 1; a < 100; a++) {
              var o = e[0] + n * a;
              if (o > e[1]) break;
              i.push({ color: this.getControllerVisual(o, 'color', t), offset: a / 100 });
            }
            return i.push({ color: this.getControllerVisual(e[1], 'color', t), offset: 1 }), i;
          },
          _createBarPoints: function(e, t) {
            var i = this.visualMapModel.itemSize;
            return [
              [i[0] - t[0], e[0]],
              [i[0], e[0]],
              [i[0], e[1]],
              [i[0] - t[1], e[1]],
            ];
          },
          _createBarGroup: function(e) {
            var t = this._orient,
              i = this.visualMapModel.get('inverse');
            return new s.Group(
              'horizontal' !== t || i
                ? 'horizontal' === t && i
                  ? { scale: 'bottom' === e ? [-1, 1] : [1, 1], rotation: -Math.PI / 2 }
                  : 'vertical' !== t || i
                  ? { scale: 'left' === e ? [1, 1] : [-1, 1] }
                  : { scale: 'left' === e ? [1, -1] : [-1, -1] }
                : { scale: 'bottom' === e ? [1, 1] : [-1, 1], rotation: Math.PI / 2 },
            );
          },
          _updateHandle: function(e, t) {
            if (this._useHandle) {
              var i = this._shapes,
                n = this.visualMapModel,
                a = i.handleThumbs,
                o = i.handleLabels;
              p(
                [0, 1],
                function(r) {
                  var l = a[r];
                  l.setStyle('fill', t.handlesColor[r]), (l.position[1] = e[r]);
                  var c = s.applyTransform(i.handleLabelPoints[r], s.getTransform(l, this.group));
                  o[r].setStyle({
                    x: c[0],
                    y: c[1],
                    text: n.formatValueText(this._dataInterval[r]),
                    textVerticalAlign: 'middle',
                    textAlign: this._applyTransform(
                      'horizontal' === this._orient ? (0 === r ? 'bottom' : 'top') : 'left',
                      i.barGroup,
                    ),
                  });
                },
                this,
              );
            }
          },
          _showIndicator: function(e, t, i, n) {
            var a = this.visualMapModel,
              o = a.getExtent(),
              r = a.itemSize,
              l = d(e, o, [0, r[1]], !0),
              c = this._shapes,
              u = c.indicator;
            if (u) {
              (u.position[1] = l),
                u.attr('invisible', !1),
                u.setShape(
                  'points',
                  (function(e, t, i, n) {
                    return e
                      ? [
                          [0, -g(t, f(i, 0))],
                          [6, 0],
                          [0, g(t, f(n - i, 0))],
                        ]
                      : [
                          [0, 0],
                          [5, -5],
                          [5, 5],
                        ];
                  })(!!i, n, l, r[1]),
                );
              var h = this.getControllerVisual(e, 'color', { convertOpacityToAlpha: !0 });
              u.setStyle('fill', h);
              var p = s.applyTransform(c.indicatorLabelPoint, s.getTransform(u, this.group)),
                m = c.indicatorLabel;
              m.attr('invisible', !1);
              var v = this._applyTransform('left', c.barGroup),
                y = this._orient;
              m.setStyle({
                text: (i || '') + a.formatValueText(t),
                textVerticalAlign: 'horizontal' === y ? v : 'middle',
                textAlign: 'horizontal' === y ? 'center' : v,
                x: p[0],
                y: p[1],
              });
            }
          },
          _enableHoverLinkToSeries: function() {
            var e = this;
            this._shapes.barGroup
              .on('mousemove', function(t) {
                if (((e._hovering = !0), !e._dragging)) {
                  var i = e.visualMapModel.itemSize,
                    n = e._applyTransform([t.offsetX, t.offsetY], e._shapes.barGroup, !0, !0);
                  (n[1] = g(f(0, n[1]), i[1])), e._doHoverLinkToSeries(n[1], 0 <= n[0] && n[0] <= i[0]);
                }
              })
              .on('mouseout', function() {
                (e._hovering = !1), !e._dragging && e._clearHoverLinkToSeries();
              });
          },
          _enableHoverLinkFromSeries: function() {
            var e = this.api.getZr();
            this.visualMapModel.option.hoverLink
              ? (e.on('mouseover', this._hoverLinkFromSeriesMouseOver, this),
                e.on('mouseout', this._hideIndicator, this))
              : this._clearHoverLinkFromSeries();
          },
          _doHoverLinkToSeries: function(e, t) {
            var i = this.visualMapModel;
            if (i.option.hoverLink) {
              var n = [0, i.itemSize[1]],
                a = i.getExtent();
              e = g(f(n[0], e), n[1]);
              var o = (function(e, t, i) {
                  var n = 6,
                    a = e.get('hoverLinkDataSize');
                  return a && (n = d(a, t, i, !0) / 2), n;
                })(i, a, n),
                r = [e - o, e + o],
                s = d(e, n, a, !0),
                l = [d(r[0], n, a, !0), d(r[1], n, a, !0)];
              r[0] < n[0] && (l[0] = -1 / 0),
                r[1] > n[1] && (l[1] = 1 / 0),
                t &&
                  (l[0] === -1 / 0
                    ? this._showIndicator(s, l[1], '< ', o)
                    : l[1] === 1 / 0
                    ? this._showIndicator(s, l[0], '> ', o)
                    : this._showIndicator(s, s, '\u2248 ', o));
              var c = this._hoverLinkDataIndices,
                p = [];
              (t || y(i)) && (p = this._hoverLinkDataIndices = i.findTargetDataIndices(l));
              var m = h.compressBatches(c, p);
              this._dispatchHighDown('downplay', u.convertDataIndex(m[0])),
                this._dispatchHighDown('highlight', u.convertDataIndex(m[1]));
            }
          },
          _hoverLinkFromSeriesMouseOver: function(e) {
            var t = e.target,
              i = this.visualMapModel;
            if (t && null != t.dataIndex) {
              var n = this.ecModel.getSeriesByIndex(t.seriesIndex);
              if (i.isTargetSeries(n)) {
                var a = n.getData(t.dataType),
                  o = a.get(i.getDataDimension(a), t.dataIndex, !0);
                isNaN(o) || this._showIndicator(o, o);
              }
            }
          },
          _hideIndicator: function() {
            var e = this._shapes;
            e.indicator && e.indicator.attr('invisible', !0),
              e.indicatorLabel && e.indicatorLabel.attr('invisible', !0);
          },
          _clearHoverLinkToSeries: function() {
            this._hideIndicator();
            var e = this._hoverLinkDataIndices;
            this._dispatchHighDown('downplay', u.convertDataIndex(e)), (e.length = 0);
          },
          _clearHoverLinkFromSeries: function() {
            this._hideIndicator();
            var e = this.api.getZr();
            e.off('mouseover', this._hoverLinkFromSeriesMouseOver), e.off('mouseout', this._hideIndicator);
          },
          _applyTransform: function(e, t, i, a) {
            var o = s.getTransform(t, a ? null : this.group);
            return s[n.isArray(e) ? 'applyTransform' : 'transformDirection'](e, o, i);
          },
          _dispatchHighDown: function(e, t) {
            t && t.length && this.api.dispatchAction({ type: e, batch: t });
          },
          dispose: function() {
            this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
          },
          remove: function() {
            this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
          },
        });
      function v(e, t, i, n) {
        return new s.Polygon({
          shape: { points: e },
          draggable: !!i,
          cursor: t,
          drift: i,
          onmousemove: function(e) {
            o.stop(e.event);
          },
          ondragend: n,
        });
      }
      function y(e) {
        var t = e.get('hoverLinkOnHandle');
        return !!(null == t ? e.get('realtime') : t);
      }
      function x(e) {
        return 'vertical' === e ? 'ns-resize' : 'ew-resize';
      }
      e.exports = m;
    },
    'Q7if': function(e, t, i) {
      var n = i('JEkh').extend({
        type: 'markArea',
        defaultOption: {
          zlevel: 0,
          z: 1,
          tooltip: { trigger: 'item' },
          animation: !1,
          label: { show: !0, position: 'top' },
          itemStyle: { borderWidth: 0 },
          emphasis: { label: { show: !0, position: 'top' } },
        },
      });
      e.exports = n;
    },
    'QzjZ': function(e, t, i) {
      var n = i('S/Yl');
      i('IDmD').register('single', {
        create: function(e, t) {
          var i = [];
          return (
            e.eachComponent('singleAxis', function(a, o) {
              var r = new n(a, e, t);
              (r.name = 'single_' + o), r.resize(a, t), (a.coordinateSystem = r), i.push(r);
            }),
            e.eachSeries(function(t) {
              if ('singleAxis' === t.get('coordinateSystem')) {
                var i = e.queryComponents({
                  mainType: 'singleAxis',
                  index: t.get('singleAxisIndex'),
                  id: t.get('singleAxisId'),
                })[0];
                t.coordinateSystem = i && i.coordinateSystem;
              }
            }),
            i
          );
        },
        dimensions: n.prototype.dimensions,
      });
    },
    'R4Th': function(e, t, i) {
      var n = i('ProS'),
        a = i('9wZj'),
        o = i('yO87'),
        r = i('Fofx'),
        s = i('h8O9'),
        l = n.extendChartView({
          type: 'effectScatter',
          init: function() {
            this._symbolDraw = new a(o);
          },
          render: function(e, t, i) {
            var n = e.getData(),
              a = this._symbolDraw;
            a.updateData(n), this.group.add(a.group);
          },
          updateTransform: function(e, t, i) {
            var n = e.getData();
            this.group.dirty();
            var a = s().reset(e);
            a.progress && a.progress({ start: 0, end: n.count() }, n), this._symbolDraw.updateLayout(n);
          },
          _updateGroupTransform: function(e) {
            var t = e.coordinateSystem;
            t &&
              t.getRoamTransform &&
              ((this.group.transform = r.clone(t.getRoamTransform())), this.group.decomposeTransform());
          },
          remove: function(e, t) {
            this._symbolDraw && this._symbolDraw.remove(t);
          },
          dispose: function() {},
        });
      e.exports = l;
    },
    'RPvy': function(e, t, i) {
      var n = i('ProS'),
        a = i('VaxA');
      n.registerAction({ type: 'sunburstRootToNode', update: 'updateView' }, function(e, t) {
        t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, function(t, i) {
          var n = a.retrieveTargetInfo(e, ['sunburstRootToNode'], t);
          if (n) {
            var o = t.getViewRoot();
            o && (e.direction = a.aboveViewRoot(o, n.node) ? 'rollUp' : 'drillDown'), t.resetViewRoot(n.node);
          }
        });
      }),
        n.registerAction({ type: 'sunburstHighlight', update: 'updateView' }, function(e, t) {
          t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, function(t, i) {
            var n = a.retrieveTargetInfo(e, ['sunburstHighlight'], t);
            n && (e.highlight = n.node);
          });
        }),
        n.registerAction({ type: 'sunburstUnhighlight', update: 'updateView' }, function(e, t) {
          t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, function(t, i) {
            e.unhighlight = !0;
          });
        });
    },
    'RSch': function(e, t, i) {
      var n = i('IwbS'),
        a = i('bYtY');
      function o(e, t, i) {
        n.Group.call(this), this._createPolyline(e, t, i);
      }
      var r = o.prototype;
      (r._createPolyline = function(e, t, i) {
        var a = e.getItemLayout(t),
          o = new n.Polyline({ shape: { points: a } });
        this.add(o), this._updateCommonStl(e, t, i);
      }),
        (r.updateData = function(e, t, i) {
          var a = e.hostModel,
            o = this.childAt(0),
            r = { shape: { points: e.getItemLayout(t) } };
          n.updateProps(o, r, a, t), this._updateCommonStl(e, t, i);
        }),
        (r._updateCommonStl = function(e, t, i) {
          var o = this.childAt(0),
            r = e.getItemModel(t),
            s = e.getItemVisual(t, 'color'),
            l = i && i.lineStyle,
            c = i && i.hoverLineStyle;
          (i && !e.hasItemOption) ||
            ((l = r.getModel('lineStyle').getLineStyle()), (c = r.getModel('emphasis.lineStyle').getLineStyle())),
            o.useStyle(a.defaults({ strokeNoScale: !0, fill: 'none', stroke: s }, l)),
            (o.hoverStyle = c),
            n.setHoverStyle(this);
        }),
        (r.updateLayout = function(e, t) {
          this.childAt(0).setShape('points', e.getItemLayout(t));
        }),
        a.inherits(o, n.Group),
        (e.exports = o);
    },
    'RlCK': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY');
      function o(e, t, i) {
        var n,
          o = {},
          r = 'toggleSelected' === e;
        return (
          i.eachComponent('legend', function(i) {
            r && null != n ? i[n ? 'select' : 'unSelect'](t.name) : (i[e](t.name), (n = i.isSelected(t.name)));
            var s = i.getData();
            a.each(s, function(e) {
              var t = e.get('name');
              if ('\n' !== t && '' !== t) {
                var n = i.isSelected(t);
                o[t] = o.hasOwnProperty(t) ? o[t] && n : n;
              }
            });
          }),
          { name: t.name, selected: o }
        );
      }
      n.registerAction('legendToggleSelect', 'legendselectchanged', a.curry(o, 'toggleSelected')),
        n.registerAction('legendSelect', 'legendselected', a.curry(o, 'select')),
        n.registerAction('legendUnSelect', 'legendunselected', a.curry(o, 'unSelect'));
    },
    'Rx6q': function(e, t) {
      e.exports = function(e) {
        var t = e.getRect(),
          i = e.getRangeInfo();
        return {
          coordSys: {
            type: 'calendar',
            x: t.x,
            y: t.y,
            width: t.width,
            height: t.height,
            cellWidth: e.getCellWidth(),
            cellHeight: e.getCellHeight(),
            rangeInfo: { start: i.start, end: i.end, weeks: i.weeks, dayCount: i.allDay },
          },
          api: {
            coord: function(t, i) {
              return e.dataToPoint(t, i);
            },
          },
        };
      };
    },
    'S/Yl': function(e, t, i) {
      var n = i('Zvw2'),
        a = i('aX7z'),
        o = i('+TT/').getLayoutRect,
        r = i('bYtY').each;
      function s(e, t, i) {
        (this.dimension = 'single'),
          (this.dimensions = ['single']),
          (this._axis = null),
          this._init(e, t, i),
          (this.model = e);
      }
      (s.prototype = {
        type: 'singleAxis',
        axisPointerEnabled: !0,
        constructor: s,
        _init: function(e, t, i) {
          var o = new n(this.dimension, a.createScaleByModel(e), [0, 0], e.get('type'), e.get('position'));
          (o.onBand = 'category' === o.type && e.get('boundaryGap')),
            (o.inverse = e.get('inverse')),
            (o.orient = e.get('orient')),
            (e.axis = o),
            (o.model = e),
            (o.coordinateSystem = this),
            (this._axis = o);
        },
        update: function(e, t) {
          e.eachSeries(function(e) {
            if (e.coordinateSystem === this) {
              var t = e.getData();
              r(
                t.mapDimension(this.dimension, !0),
                function(e) {
                  this._axis.scale.unionExtentFromData(t, e);
                },
                this,
              ),
                a.niceScaleExtent(this._axis.scale, this._axis.model);
            }
          }, this);
        },
        resize: function(e, t) {
          (this._rect = o(
            {
              left: e.get('left'),
              top: e.get('top'),
              right: e.get('right'),
              bottom: e.get('bottom'),
              width: e.get('width'),
              height: e.get('height'),
            },
            { width: t.getWidth(), height: t.getHeight() },
          )),
            this._adjustAxis();
        },
        getRect: function() {
          return this._rect;
        },
        _adjustAxis: function() {
          var e = this._rect,
            t = this._axis,
            i = t.isHorizontal(),
            n = i ? [0, e.width] : [0, e.height],
            a = t.reverse ? 1 : 0;
          t.setExtent(n[a], n[1 - a]), this._updateAxisTransform(t, i ? e.x : e.y);
        },
        _updateAxisTransform: function(e, t) {
          var i = e.getExtent(),
            n = i[0] + i[1],
            a = e.isHorizontal();
          (e.toGlobalCoord = a
            ? function(e) {
                return e + t;
              }
            : function(e) {
                return n - e + t;
              }),
            (e.toLocalCoord = a
              ? function(e) {
                  return e - t;
                }
              : function(e) {
                  return n - e + t;
                });
        },
        getAxis: function() {
          return this._axis;
        },
        getBaseAxis: function() {
          return this._axis;
        },
        getAxes: function() {
          return [this._axis];
        },
        getTooltipAxes: function() {
          return { baseAxes: [this.getAxis()] };
        },
        containPoint: function(e) {
          var t = this.getRect(),
            i = this.getAxis();
          return 'horizontal' === i.orient
            ? i.contain(i.toLocalCoord(e[0])) && e[1] >= t.y && e[1] <= t.y + t.height
            : i.contain(i.toLocalCoord(e[1])) && e[0] >= t.y && e[0] <= t.y + t.height;
        },
        pointToData: function(e) {
          var t = this.getAxis();
          return [t.coordToData(t.toLocalCoord(e['horizontal' === t.orient ? 0 : 1]))];
        },
        dataToPoint: function(e) {
          var t = this.getAxis(),
            i = this.getRect(),
            n = [],
            a = 'horizontal' === t.orient ? 0 : 1;
          return (
            e instanceof Array && (e = e[0]),
            (n[a] = t.toGlobalCoord(t.dataToCoord(+e))),
            (n[1 - a] = 0 === a ? i.y + i.height / 2 : i.x + i.width / 2),
            n
          );
        },
      }),
        (e.exports = s);
    },
    'SA4+': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('IwbS'),
        o = i('zYTA'),
        r = i('bYtY'),
        s = n.extendChartView({
          type: 'heatmap',
          render: function(e, t, i) {
            var n;
            t.eachComponent('visualMap', function(t) {
              t.eachTargetSeries(function(i) {
                i === e && (n = t);
              });
            }),
              this.group.removeAll(),
              (this._incrementalDisplayable = null);
            var a = e.coordinateSystem;
            'cartesian2d' === a.type || 'calendar' === a.type
              ? this._renderOnCartesianAndCalendar(e, i, 0, e.getData().count())
              : (function(e) {
                  var t = e.dimensions;
                  return 'lng' === t[0] && 'lat' === t[1];
                })(a) && this._renderOnGeo(a, e, n, i);
          },
          incrementalPrepareRender: function(e, t, i) {
            this.group.removeAll();
          },
          incrementalRender: function(e, t, i, n) {
            t.coordinateSystem && this._renderOnCartesianAndCalendar(t, n, e.start, e.end, !0);
          },
          _renderOnCartesianAndCalendar: function(e, t, i, n, o) {
            var s,
              l,
              c = e.coordinateSystem;
            if ('cartesian2d' === c.type) {
              var u = c.getAxis('x'),
                h = c.getAxis('y');
              (s = u.getBandWidth()), (l = h.getBandWidth());
            }
            for (
              var d = this.group,
                p = e.getData(),
                g = e.getModel('itemStyle').getItemStyle(['color']),
                f = e.getModel('emphasis.itemStyle').getItemStyle(),
                m = e.getModel('label'),
                v = e.getModel('emphasis.label'),
                y = c.type,
                x =
                  'cartesian2d' === y
                    ? [p.mapDimension('x'), p.mapDimension('y'), p.mapDimension('value')]
                    : [p.mapDimension('time'), p.mapDimension('value')],
                _ = i;
              _ < n;
              _++
            ) {
              var b;
              if ('cartesian2d' === y) {
                if (isNaN(p.get(x[2], _))) continue;
                var S = c.dataToPoint([p.get(x[0], _), p.get(x[1], _)]);
                b = new a.Rect({
                  shape: { x: S[0] - s / 2, y: S[1] - l / 2, width: s, height: l },
                  style: { fill: p.getItemVisual(_, 'color'), opacity: p.getItemVisual(_, 'opacity') },
                });
              } else {
                if (isNaN(p.get(x[1], _))) continue;
                b = new a.Rect({
                  z2: 1,
                  shape: c.dataToRect([p.get(x[0], _)]).contentShape,
                  style: { fill: p.getItemVisual(_, 'color'), opacity: p.getItemVisual(_, 'opacity') },
                });
              }
              var w = p.getItemModel(_);
              p.hasItemOption &&
                ((g = w.getModel('itemStyle').getItemStyle(['color'])),
                (f = w.getModel('emphasis.itemStyle').getItemStyle()),
                (m = w.getModel('label')),
                (v = w.getModel('emphasis.label')));
              var M = e.getRawValue(_),
                I = '-';
              M && null != M[2] && (I = M[2]),
                a.setLabelStyle(g, f, m, v, { labelFetcher: e, labelDataIndex: _, defaultText: I, isRectText: !0 }),
                b.setStyle(g),
                a.setHoverStyle(b, p.hasItemOption ? f : r.extend({}, f)),
                (b.incremental = o),
                o && (b.useHoverLayer = !0),
                d.add(b),
                p.setItemGraphicEl(_, b);
            }
          },
          _renderOnGeo: function(e, t, i, n) {
            var s = i.targetVisuals.inRange,
              l = i.targetVisuals.outOfRange,
              c = t.getData(),
              u = this._hmLayer || this._hmLayer || new o();
            (u.blurSize = t.get('blurSize')),
              (u.pointSize = t.get('pointSize')),
              (u.minOpacity = t.get('minOpacity')),
              (u.maxOpacity = t.get('maxOpacity'));
            var h = e.getViewRect().clone(),
              d = e.getRoamTransform();
            h.applyTransform(d);
            var p = Math.max(h.x, 0),
              g = Math.max(h.y, 0),
              f = Math.min(h.width + h.x, n.getWidth()),
              m = Math.min(h.height + h.y, n.getHeight()),
              v = f - p,
              y = m - g,
              x = [c.mapDimension('lng'), c.mapDimension('lat'), c.mapDimension('value')],
              _ = c.mapArray(x, function(t, i, n) {
                var a = e.dataToPoint([t, i]);
                return (a[0] -= p), (a[1] -= g), a.push(n), a;
              }),
              b = i.getExtent(),
              S =
                'visualMap.continuous' === i.type
                  ? (function(e, t) {
                      var i = e[1] - e[0];
                      return (
                        (t = [(t[0] - e[0]) / i, (t[1] - e[0]) / i]),
                        function(e) {
                          return e >= t[0] && e <= t[1];
                        }
                      );
                    })(b, i.option.range)
                  : (function(e, t, i) {
                      var n = e[1] - e[0],
                        a = (t = r.map(t, function(t) {
                          return { interval: [(t.interval[0] - e[0]) / n, (t.interval[1] - e[0]) / n] };
                        })).length,
                        o = 0;
                      return function(e) {
                        for (var n = o; n < a; n++)
                          if ((r = t[n].interval)[0] <= e && e <= r[1]) {
                            o = n;
                            break;
                          }
                        if (n === a)
                          for (n = o - 1; n >= 0; n--) {
                            var r;
                            if ((r = t[n].interval)[0] <= e && e <= r[1]) {
                              o = n;
                              break;
                            }
                          }
                        return n >= 0 && n < a && i[n];
                      };
                    })(b, i.getPieceList(), i.option.selected);
            u.update(
              _,
              v,
              y,
              s.color.getNormalizer(),
              { inRange: s.color.getColorMapper(), outOfRange: l.color.getColorMapper() },
              S,
            );
            var w = new a.Image({ style: { width: v, height: y, x: p, y: g, image: u.canvas }, silent: !0 });
            this.group.add(w);
          },
          dispose: function() {},
        });
      e.exports = s;
    },
    'SehX': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('2B6p').updateCenterAndZoom;
      n.registerAction({ type: 'geoRoam', event: 'geoRoam', update: 'updateTransform' }, function(e, t) {
        var i = e.componentType || 'series';
        t.eachComponent({ mainType: i, query: e }, function(t) {
          var n = t.coordinateSystem;
          if ('geo' === n.type) {
            var r = o(n, e, t.get('scaleLimit'));
            t.setCenter && t.setCenter(r.center),
              t.setZoom && t.setZoom(r.zoom),
              'series' === i &&
                a.each(t.seriesGroup, function(e) {
                  e.setCenter(r.center), e.setZoom(r.zoom);
                });
          }
        });
      });
    },
    'TIY9': function(e, t, i) {
      var n = i('bYtY').each,
        a = i('vafp'),
        o = i('4NO4').makeInner,
        r = i('Mgri'),
        s = i('F5Ls'),
        l = i('a9QJ'),
        c = i('p/La'),
        u = o();
      function h(e) {
        for (var t, i = 0; i < e.length; i++) {
          var n = e[i].getBoundingRect();
          (t = t || n.clone()).union(n);
        }
        return t;
      }
      e.exports = {
        load: function(e, t) {
          var i = u(t).parsed;
          if (i) return i;
          var o,
            d = t.specialAreas || {},
            p = t.geoJSON;
          try {
            o = p ? a(p) : [];
          } catch (g) {
            throw new Error('Invalid geoJson format\n' + g.message);
          }
          return (
            n(o, function(t) {
              var i = t.name;
              s(e, t), l(e, t), c(e, t);
              var n = d[i];
              n && t.transformTo(n.left, n.top, n.width, n.height);
            }),
            r(e, o),
            (u(t).parsed = { regions: o, boundingRect: h(o) })
          );
        },
      };
    },
    'TJmX': function(e, t, i) {
      var n = i('zM3Q'),
        a = ['itemStyle', 'borderColor'],
        o = ['itemStyle', 'borderColor0'],
        r = ['itemStyle', 'color'],
        s = ['itemStyle', 'color0'],
        l = {
          seriesType: 'candlestick',
          plan: n(),
          performRawSeries: !0,
          reset: function(e, t) {
            var i = e.getData(),
              n = e.pipelineContext.large;
            if (
              (i.setVisual({
                legendSymbol: 'roundRect',
                colorP: l(1, e),
                colorN: l(-1, e),
                borderColorP: c(1, e),
                borderColorN: c(-1, e),
              }),
              !t.isSeriesFiltered(e))
            )
              return (
                !n && {
                  progress: function(e, t) {
                    for (var i; null != (i = e.next()); ) {
                      var n = t.getItemModel(i),
                        a = t.getItemLayout(i).sign;
                      t.setItemVisual(i, { color: l(a, n), borderColor: c(a, n) });
                    }
                  },
                }
              );
            function l(e, t) {
              return t.get(e > 0 ? r : s);
            }
            function c(e, t) {
              return t.get(e > 0 ? a : o);
            }
          },
        };
      e.exports = l;
    },
    'TWL2': function(e, t, i) {
      var n = i('IwbS'),
        a = i('bYtY'),
        o = i('6Ic6');
      function r(e, t) {
        n.Group.call(this);
        var i = new n.Polygon(),
          a = new n.Polyline(),
          o = new n.Text();
        function r() {
          (a.ignore = a.hoverIgnore), (o.ignore = o.hoverIgnore);
        }
        function s() {
          (a.ignore = a.normalIgnore), (o.ignore = o.normalIgnore);
        }
        this.add(i),
          this.add(a),
          this.add(o),
          this.updateData(e, t, !0),
          this.on('emphasis', r)
            .on('normal', s)
            .on('mouseover', r)
            .on('mouseout', s);
      }
      var s = r.prototype,
        l = ['itemStyle', 'opacity'];
      (s.updateData = function(e, t, i) {
        var o = this.childAt(0),
          r = e.hostModel,
          s = e.getItemModel(t),
          c = e.getItemLayout(t),
          u = e.getItemModel(t).get(l);
        (u = null == u ? 1 : u),
          o.useStyle({}),
          i
            ? (o.setShape({ points: c.points }),
              o.setStyle({ opacity: 0 }),
              n.initProps(o, { style: { opacity: u } }, r, t))
            : n.updateProps(o, { style: { opacity: u }, shape: { points: c.points } }, r, t);
        var h = s.getModel('itemStyle'),
          d = e.getItemVisual(t, 'color');
        o.setStyle(a.defaults({ lineJoin: 'round', fill: d }, h.getItemStyle(['opacity']))),
          (o.hoverStyle = h.getModel('emphasis').getItemStyle()),
          this._updateLabel(e, t),
          n.setHoverStyle(this);
      }),
        (s._updateLabel = function(e, t) {
          var i = this.childAt(1),
            a = this.childAt(2),
            o = e.hostModel,
            r = e.getItemModel(t),
            s = e.getItemLayout(t).label,
            l = e.getItemVisual(t, 'color');
          n.updateProps(i, { shape: { points: s.linePoints || s.linePoints } }, o, t),
            n.updateProps(a, { style: { x: s.x, y: s.y } }, o, t),
            a.attr({ rotation: s.rotation, origin: [s.x, s.y], z2: 10 });
          var c = r.getModel('label'),
            u = r.getModel('emphasis.label'),
            h = r.getModel('labelLine'),
            d = r.getModel('emphasis.labelLine');
          (l = e.getItemVisual(t, 'color')),
            n.setLabelStyle(
              a.style,
              (a.hoverStyle = {}),
              c,
              u,
              {
                labelFetcher: e.hostModel,
                labelDataIndex: t,
                defaultText: e.getName(t),
                autoColor: l,
                useInsideStyle: !!s.inside,
              },
              { textAlign: s.textAlign, textVerticalAlign: s.verticalAlign },
            ),
            (a.ignore = a.normalIgnore = !c.get('show')),
            (a.hoverIgnore = !u.get('show')),
            (i.ignore = i.normalIgnore = !h.get('show')),
            (i.hoverIgnore = !d.get('show')),
            i.setStyle({ stroke: l }),
            i.setStyle(h.getModel('lineStyle').getLineStyle()),
            (i.hoverStyle = d.getModel('lineStyle').getLineStyle());
        }),
        a.inherits(r, n.Group);
      var c = o.extend({
        type: 'funnel',
        render: function(e, t, i) {
          var n = e.getData(),
            a = this._data,
            o = this.group;
          n
            .diff(a)
            .add(function(e) {
              var t = new r(n, e);
              n.setItemGraphicEl(e, t), o.add(t);
            })
            .update(function(e, t) {
              var i = a.getItemGraphicEl(t);
              i.updateData(n, e), o.add(i), n.setItemGraphicEl(e, i);
            })
            .remove(function(e) {
              var t = a.getItemGraphicEl(e);
              o.remove(t);
            })
            .execute(),
            (this._data = n);
        },
        remove: function() {
          this.group.removeAll(), (this._data = null);
        },
        dispose: function() {},
      });
      e.exports = c;
    },
    'TYVI': function(e, t, i) {
      var n = i('5GtS'),
        a = i('T4UG'),
        o = i('bYtY'),
        r = a.extend({
          type: 'series.gauge',
          getInitialData: function(e, t) {
            var i = e.data || [];
            return o.isArray(i) || (i = [i]), (e.data = i), n(this, ['value']);
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            center: ['50%', '50%'],
            legendHoverLink: !0,
            radius: '75%',
            startAngle: 225,
            endAngle: -45,
            clockwise: !0,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
              show: !0,
              lineStyle: {
                color: [
                  [0.2, '#91c7ae'],
                  [0.8, '#63869e'],
                  [1, '#c23531'],
                ],
                width: 30,
              },
            },
            splitLine: { show: !0, length: 30, lineStyle: { color: '#eee', width: 2, type: 'solid' } },
            axisTick: { show: !0, splitNumber: 5, length: 8, lineStyle: { color: '#eee', width: 1, type: 'solid' } },
            axisLabel: { show: !0, distance: 5, color: 'auto' },
            pointer: { show: !0, length: '80%', width: 8 },
            itemStyle: { color: 'auto' },
            title: { show: !0, offsetCenter: [0, '-40%'], color: '#333', fontSize: 15 },
            detail: {
              show: !0,
              backgroundColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              borderColor: '#ccc',
              width: 100,
              height: null,
              padding: [5, 10],
              offsetCenter: [0, '40%'],
              color: 'auto',
              fontSize: 30,
            },
          },
        });
      e.exports = r;
    },
    'ThAp': function(e, t, i) {
      var n = i('bYtY'),
        a = i('5GtS'),
        o = i('T4UG'),
        r = i('7aKB'),
        s = r.encodeHTML,
        l = r.addCommas,
        c = i('cCMj'),
        u = i('KxfA').retrieveRawAttr,
        h = i('W4dC'),
        d = o.extend({
          type: 'series.map',
          dependencies: ['geo'],
          layoutMode: 'box',
          needsDrawMap: !1,
          seriesGroup: [],
          getInitialData: function(e) {
            for (
              var t = a(this, ['value']),
                i = t.mapDimension('value'),
                o = n.createHashMap(),
                r = [],
                s = [],
                l = 0,
                c = t.count();
              l < c;
              l++
            ) {
              var d = t.getName(l);
              o.set(d, !0), r.push({ name: d, value: t.get(i, l), selected: u(t, l, 'selected') });
            }
            var p = h.load(this.getMapType(), this.option.nameMap);
            return (
              n.each(p.regions, function(e) {
                var t = e.name;
                o.get(t) || (r.push({ name: t }), s.push(t));
              }),
              this.updateSelectedMap(r),
              t.appendValues([], s),
              t
            );
          },
          getHostGeoModel: function() {
            var e = this.option.geoIndex;
            return null != e ? this.dependentModels.geo[e] : null;
          },
          getMapType: function() {
            return (this.getHostGeoModel() || this).option.map;
          },
          getRawValue: function(e) {
            var t = this.getData();
            return t.get(t.mapDimension('value'), e);
          },
          getRegionModel: function(e) {
            var t = this.getData();
            return t.getItemModel(t.indexOfName(e));
          },
          formatTooltip: function(e) {
            for (
              var t = this.getData(), i = l(this.getRawValue(e)), n = t.getName(e), a = this.seriesGroup, o = [], r = 0;
              r < a.length;
              r++
            ) {
              var c = a[r].originalData.indexOfName(n),
                u = t.mapDimension('value');
              isNaN(a[r].originalData.get(u, c)) || o.push(s(a[r].name));
            }
            return o.join(', ') + '<br />' + s(n + ' : ' + i);
          },
          getTooltipPosition: function(e) {
            if (null != e) {
              var t = this.getData().getName(e),
                i = this.coordinateSystem,
                n = i.getRegion(t);
              return n && i.dataToPoint(n.center);
            }
          },
          setZoom: function(e) {
            this.option.zoom = e;
          },
          setCenter: function(e) {
            this.option.center = e;
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'geo',
            map: '',
            left: 'center',
            top: 'center',
            aspectScale: 0.75,
            showLegendSymbol: !0,
            dataRangeHoverLink: !0,
            boundingCoords: null,
            center: null,
            zoom: 1,
            scaleLimit: null,
            label: { show: !1, color: '#000' },
            itemStyle: { borderWidth: 0.5, borderColor: '#444', areaColor: '#eee' },
            emphasis: { label: { show: !0, color: 'rgb(100,0,0)' }, itemStyle: { areaColor: 'rgba(255,215,0,0.8)' } },
          },
        });
      n.mixin(d, c), (e.exports = d);
    },
    'TkdX': function(e, t, i) {
      var n = i('bYtY'),
        a = i('IwbS'),
        o = 2,
        r = 4;
      function s(e, t, i) {
        a.Group.call(this);
        var n = new a.Sector({ z2: o });
        n.seriesIndex = t.seriesIndex;
        var s = new a.Text({ z2: r, silent: e.getModel('label').get('silent') });
        function l() {
          s.ignore = s.hoverIgnore;
        }
        function c() {
          s.ignore = s.normalIgnore;
        }
        this.add(n),
          this.add(s),
          this.updateData(!0, e, 'normal', t, i),
          this.on('emphasis', l)
            .on('normal', c)
            .on('mouseover', l)
            .on('mouseout', c);
      }
      var l = s.prototype;
      (l.updateData = function(e, t, i, o, r) {
        (this.node = t), (t.piece = this), (o = o || this._seriesModel), (r = r || this._ecModel);
        var s = this.childAt(0);
        s.dataIndex = t.dataIndex;
        var l = t.getModel(),
          c = t.getLayout(),
          u = n.extend({}, c);
        u.label = null;
        var h = (function(e, t, i) {
          var a = e.getVisual('color'),
            o = e.getVisual('visualMeta');
          (o && 0 !== o.length) || (a = null);
          var r = e.getModel('itemStyle').get('color');
          if (r) return r;
          if (a) return a;
          if (0 === e.depth) return i.option.color[0];
          var s = i.option.color.length;
          return i.option.color[
            (function(e) {
              for (var t = e; t.depth > 1; ) t = t.parentNode;
              var i = e.getAncestors()[0];
              return n.indexOf(i.children, t);
            })(e) % s
          ];
        })(t, 0, r);
        !(function(e, t, i) {
          t.getData().setItemVisual(e.dataIndex, 'color', i);
        })(t, o, h);
        var d,
          p = l.getModel('itemStyle').getItemStyle();
        if ('normal' === i) d = p;
        else {
          var g = l.getModel(i + '.itemStyle').getItemStyle();
          d = n.merge(g, p);
        }
        (d = n.defaults({ lineJoin: 'bevel', fill: d.fill || h }, d)),
          e
            ? (s.setShape(u),
              (s.shape.r = c.r0),
              a.updateProps(s, { shape: { r: c.r } }, o, t.dataIndex),
              s.useStyle(d))
            : ('object' == typeof d.fill && d.fill.type) || ('object' == typeof s.style.fill && s.style.fill.type)
            ? (a.updateProps(s, { shape: u }, o), s.useStyle(d))
            : a.updateProps(s, { shape: u, style: d }, o),
          this._updateLabel(o, h, i);
        var f = l.getShallow('cursor');
        if ((f && s.attr('cursor', f), e)) {
          var m = o.getShallow('highlightPolicy');
          this._initEvents(s, t, o, m);
        }
        (this._seriesModel = o || this._seriesModel), (this._ecModel = r || this._ecModel);
      }),
        (l.onEmphasis = function(e) {
          var t = this;
          this.node.hostTree.root.eachNode(function(i) {
            var n, a, o;
            i.piece &&
              (t.node === i
                ? i.piece.updateData(!1, i, 'emphasis')
                : ((n = i),
                  (a = t.node),
                  'none' !== (o = e) &&
                  ('self' === o
                    ? n === a
                    : 'ancestor' === o
                    ? n === a || n.isAncestorOf(a)
                    : n === a || n.isDescendantOf(a))
                    ? i.piece.childAt(0).trigger('highlight')
                    : 'none' !== e && i.piece.childAt(0).trigger('downplay')));
          });
        }),
        (l.onNormal = function() {
          this.node.hostTree.root.eachNode(function(e) {
            e.piece && e.piece.updateData(!1, e, 'normal');
          });
        }),
        (l.onHighlight = function() {
          this.updateData(!1, this.node, 'highlight');
        }),
        (l.onDownplay = function() {
          this.updateData(!1, this.node, 'downplay');
        }),
        (l._updateLabel = function(e, t, i) {
          var o = this.node.getModel(),
            r = o.getModel('label'),
            s = 'normal' === i || 'emphasis' === i ? r : o.getModel(i + '.label'),
            l = o.getModel('emphasis.label'),
            c = n.retrieve(e.getFormattedLabel(this.node.dataIndex, 'normal', null, null, 'label'), this.node.name);
          !1 === S('show') && (c = '');
          var u = this.node.getLayout(),
            h = s.get('minAngle');
          null == h && (h = r.get('minAngle')),
            null != (h = (h / 180) * Math.PI) && Math.abs(u.endAngle - u.startAngle) < h && (c = '');
          var d = this.childAt(1);
          a.setLabelStyle(d.style, d.hoverStyle || {}, r, l, {
            defaultText: s.getShallow('show') ? c : null,
            autoColor: t,
            useInsideStyle: !0,
          });
          var p,
            g = (u.startAngle + u.endAngle) / 2,
            f = Math.cos(g),
            m = Math.sin(g),
            v = S('position'),
            y = S('distance') || 0,
            x = S('align');
          'outside' === v
            ? ((p = u.r + y), (x = g > Math.PI / 2 ? 'right' : 'left'))
            : x && 'center' !== x
            ? 'left' === x
              ? ((p = u.r0 + y), g > Math.PI / 2 && (x = 'right'))
              : 'right' === x && ((p = u.r - y), g > Math.PI / 2 && (x = 'left'))
            : ((p = (u.r + u.r0) / 2), (x = 'center')),
            d.attr('style', {
              text: c,
              textAlign: x,
              textVerticalAlign: S('verticalAlign') || 'middle',
              opacity: S('opacity'),
            }),
            d.attr('position', [p * f + u.cx, p * m + u.cy]);
          var _ = S('rotate'),
            b = 0;
          function S(e) {
            var t = s.get(e);
            return null == t ? r.get(e) : t;
          }
          'radial' === _
            ? (b = -g) < -Math.PI / 2 && (b += Math.PI)
            : 'tangential' === _
            ? (b = Math.PI / 2 - g) > Math.PI / 2
              ? (b -= Math.PI)
              : b < -Math.PI / 2 && (b += Math.PI)
            : 'number' == typeof _ && (b = (_ * Math.PI) / 180),
            d.attr('rotation', b);
        }),
        (l._initEvents = function(e, t, i, n) {
          e.off('mouseover')
            .off('mouseout')
            .off('emphasis')
            .off('normal');
          var a = this,
            o = function() {
              a.onEmphasis(n);
            },
            r = function() {
              a.onNormal();
            };
          i.isAnimationEnabled() &&
            e
              .on('mouseover', o)
              .on('mouseout', r)
              .on('emphasis', o)
              .on('normal', r)
              .on('downplay', function() {
                a.onDownplay();
              })
              .on('highlight', function() {
                a.onHighlight();
              });
        }),
        n.inherits(s, a.Group),
        (e.exports = s);
    },
    'UnoB': function(e, t, i) {
      var n = i('bYtY'),
        a = i('OELB');
      function o(e, t, i) {
        if (e.count())
          for (
            var a,
              o = t.coordinateSystem,
              r = t.getLayerSeries(),
              s = e.mapDimension('single'),
              l = e.mapDimension('value'),
              c = n.map(r, function(t) {
                return n.map(t.indices, function(t) {
                  var i = o.dataToPoint(e.get(s, t));
                  return (i[1] = e.get(l, t)), i;
                });
              }),
              u = (function(e) {
                for (var t = e.length, i = e[0].length, n = [], a = [], o = 0, r = {}, s = 0; s < i; ++s) {
                  for (var l = 0, c = 0; l < t; ++l) c += e[l][s][1];
                  c > o && (o = c), n.push(c);
                }
                for (var u = 0; u < i; ++u) a[u] = (o - n[u]) / 2;
                o = 0;
                for (var h = 0; h < i; ++h) {
                  var d = n[h] + a[h];
                  d > o && (o = d);
                }
                return (r.y0 = a), (r.max = o), r;
              })(c),
              h = u.y0,
              d = i / u.max,
              p = r.length,
              g = r[0].indices.length,
              f = 0;
            f < g;
            ++f
          ) {
            e.setItemLayout(r[0].indices[f], { layerIndex: 0, x: c[0][f][0], y0: (a = h[f] * d), y: c[0][f][1] * d });
            for (var m = 1; m < p; ++m)
              e.setItemLayout(r[m].indices[f], {
                layerIndex: m,
                x: c[m][f][0],
                y0: (a += c[m - 1][f][1] * d),
                y: c[m][f][1] * d,
              });
          }
      }
      e.exports = function(e, t) {
        e.eachSeriesByType('themeRiver', function(e) {
          var t = e.getData(),
            i = e.coordinateSystem,
            n = {},
            r = i.getRect();
          n.rect = r;
          var s = e.get('boundaryGap'),
            l = i.getAxis();
          (n.boundaryGap = s),
            'horizontal' === l.orient
              ? ((s[0] = a.parsePercent(s[0], r.height)),
                (s[1] = a.parsePercent(s[1], r.height)),
                o(t, e, r.height - s[0] - s[1]))
              : ((s[0] = a.parsePercent(s[0], r.width)),
                (s[1] = a.parsePercent(s[1], r.width)),
                o(t, e, r.width - s[0] - s[1])),
            t.setLayout('layoutInfo', n);
        });
      };
    },
    'VFCP': function(e, t, i) {
      i('dBmv'), i('KamJ');
    },
    'VPsl': function(e, t) {
      e.exports = function(e) {
        e.eachSeriesByType('map', function(e) {
          var t = e.get('color'),
            i = e.getModel('itemStyle'),
            n = i.get('areaColor'),
            a = i.get('color') || t[e.seriesIndex % t.length];
          e.getData().setVisual({ areaColor: n, color: a });
        });
      };
    },
    'VSLf': function(e, t, i) {
      i('I+Bx'), i('F0hE'), i('bBKM');
    },
    'VXYp': function(e, t, i) {
      var n = i('bYtY'),
        a = i('SgGq'),
        o = i('iLNv'),
        r = '\0_ec_dataZoom_roams';
      function s(e) {
        var t = e.getZr();
        return t[r] || (t[r] = {});
      }
      function l(e) {
        n.each(e, function(t, i) {
          t.count || (t.controller.dispose(), delete e[i]);
        });
      }
      function c(e, t) {
        e.dispatchAction({ type: 'dataZoom', batch: t });
      }
      (t.register = function(e, t) {
        var i = s(e),
          r = t.dataZoomId,
          u = t.coordId;
        n.each(i, function(e, i) {
          var a = e.dataZoomInfos;
          a[r] && n.indexOf(t.allCoordIds, u) < 0 && (delete a[r], e.count--);
        }),
          l(i);
        var h = i[u];
        h ||
          (((h = i[u] = { coordId: u, dataZoomInfos: {}, count: 0 }).controller = (function(e, t) {
            var i = new a(e.getZr());
            return (
              n.each(['pan', 'zoom', 'scrollMove'], function(e) {
                i.on(e, function(i) {
                  var a = [];
                  n.each(t.dataZoomInfos, function(n) {
                    if (i.isAvailableBehavior(n.dataZoomModel.option)) {
                      var o = (n.getRange || {})[e],
                        r = o && o(t.controller, i);
                      !n.dataZoomModel.get('disabled', !0) &&
                        r &&
                        a.push({ dataZoomId: n.dataZoomId, start: r[0], end: r[1] });
                    }
                  }),
                    a.length && t.dispatchAction(a);
                });
              }),
              i
            );
          })(e, h)),
          (h.dispatchAction = n.curry(c, e))),
          !h.dataZoomInfos[r] && h.count++,
          (h.dataZoomInfos[r] = t);
        var d,
          p,
          g,
          f =
            ((p = { type_true: 2, type_move: 1, type_false: 0, type_undefined: -1 }),
            (g = !0),
            n.each(h.dataZoomInfos, function(e) {
              var t = e.dataZoomModel,
                i = !t.get('disabled', !0) && (!t.get('zoomLock', !0) || 'move');
              p['type_' + i] > p['type_' + d] && (d = i), (g &= t.get('preventDefaultMouseMove', !0));
            }),
            {
              controlType: d,
              opt: { zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !0, preventDefaultMouseMove: !!g },
            });
        h.controller.enable(f.controlType, f.opt),
          h.controller.setPointerChecker(t.containsPoint),
          o.createOrUpdate(h, 'dispatchAction', t.dataZoomModel.get('throttle', !0), 'fixRate');
      }),
        (t.unregister = function(e, t) {
          var i = s(e);
          n.each(i, function(e) {
            e.controller.dispose();
            var i = e.dataZoomInfos;
            i[t] && (delete i[t], e.count--);
          }),
            l(i);
        }),
        (t.generateCoordId = function(e) {
          return e.type + '\0_' + e.id;
        });
    },
    'W4dC': function(e, t, i) {
      i('Tghj');
      var n = i('bYtY'),
        a = n.each,
        o = n.createHashMap,
        r = i('7DRL'),
        s = i('TIY9'),
        l = i('yS9w'),
        c = i('mFDi'),
        u = { geoJSON: s, svg: l },
        h = {
          load: function(e, t) {
            var i,
              n = [],
              r = o(),
              s = o(),
              l = p(e);
            return (
              a(l, function(o) {
                var l = u[o.type].load(e, o);
                a(l.regions, function(e) {
                  var i = e.name;
                  t && t.hasOwnProperty(i) && (e = e.cloneShallow((i = t[i]))),
                    n.push(e),
                    r.set(i, e),
                    s.set(i, e.center);
                });
                var c = l.boundingRect;
                c && (i ? i.union(c) : (i = c.clone()));
              }),
              { regions: n, regionsMap: r, nameCoordMap: s, boundingRect: i || new c(0, 0, 0, 0) }
            );
          },
          makeGraphic: d('makeGraphic'),
          removeGraphic: d('removeGraphic'),
        };
      function d(e) {
        return function(t, i) {
          var n = p(t),
            o = [];
          return (
            a(n, function(n) {
              var a = u[n.type][e];
              a && o.push(a(t, n, i));
            }),
            o
          );
        };
      }
      function p(e) {
        return r.retrieveMap(e) || [];
      }
      e.exports = h;
    },
    'XOKv': function(e, t, i) {
      i('OXB0'), i('SA4+');
    },
    'XpcN': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('oVpE').createSymbol,
        r = i('IwbS'),
        s = i('eRkO').makeBackground,
        l = i('+TT/'),
        c = a.curry,
        u = a.each,
        h = r.Group,
        d = n.extendComponentView({
          type: 'legend.plain',
          newlineDisabled: !1,
          init: function() {
            this.group.add((this._contentGroup = new h())), (this._isFirstRender = !0);
          },
          getContentGroup: function() {
            return this._contentGroup;
          },
          render: function(e, t, i) {
            var n = this._isFirstRender;
            if (((this._isFirstRender = !1), this.resetInner(), e.get('show', !0))) {
              var o = e.get('align');
              (o && 'auto' !== o) ||
                (o = 'right' === e.get('left') && 'vertical' === e.get('orient') ? 'right' : 'left'),
                this.renderInner(o, e, t, i);
              var r = e.getBoxLayoutParams(),
                c = { width: i.getWidth(), height: i.getHeight() },
                u = e.get('padding'),
                h = l.getLayoutRect(r, c, u),
                d = this.layoutInner(e, o, h, n),
                p = l.getLayoutRect(a.defaults({ width: d.width, height: d.height }, r), c, u);
              this.group.attr('position', [p.x - d.x, p.y - d.y]), this.group.add((this._backgroundEl = s(d, e)));
            }
          },
          resetInner: function() {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl);
          },
          renderInner: function(e, t, i, n) {
            var o = this.getContentGroup(),
              r = a.createHashMap(),
              s = t.get('selectedMode'),
              l = [];
            i.eachRawSeries(function(e) {
              !e.get('legendHoverLink') && l.push(e.id);
            }),
              u(
                t.getData(),
                function(a, u) {
                  var d = a.get('name');
                  if (this.newlineDisabled || ('' !== d && '\n' !== d)) {
                    var m = i.getSeriesByName(d)[0];
                    if (!r.get(d))
                      if (m) {
                        var v = m.getData(),
                          y = v.getVisual('color');
                        'function' == typeof y && (y = y(m.getDataParams(0)));
                        var x = v.getVisual('legendSymbol') || 'roundRect',
                          _ = v.getVisual('symbol');
                        this._createItem(d, u, a, t, x, _, e, y, s)
                          .on('click', c(p, d, n))
                          .on('mouseover', c(g, m.name, null, n, l))
                          .on('mouseout', c(f, m.name, null, n, l)),
                          r.set(d, !0);
                      } else
                        i.eachRawSeries(function(i) {
                          if (!r.get(d) && i.legendDataProvider) {
                            var o = i.legendDataProvider(),
                              h = o.indexOfName(d);
                            if (h < 0) return;
                            var m = o.getItemVisual(h, 'color');
                            this._createItem(d, u, a, t, 'roundRect', null, e, m, s)
                              .on('click', c(p, d, n))
                              .on('mouseover', c(g, null, d, n, l))
                              .on('mouseout', c(f, null, d, n, l)),
                              r.set(d, !0);
                          }
                        }, this);
                  } else o.add(new h({ newline: !0 }));
                },
                this,
              );
          },
          _createItem: function(e, t, i, n, s, l, c, u, d) {
            var p = n.get('itemWidth'),
              g = n.get('itemHeight'),
              f = n.get('inactiveColor'),
              m = n.get('symbolKeepAspect'),
              v = n.isSelected(e),
              y = new h(),
              x = i.getModel('textStyle'),
              _ = i.get('icon'),
              b = i.getModel('tooltip'),
              S = b.parentModel;
            if ((y.add(o((s = _ || s), 0, 0, p, g, v ? u : f, null == m || m)), !_ && l && (l !== s || 'none' === l))) {
              var w = 0.8 * g;
              'none' === l && (l = 'circle'), y.add(o(l, (p - w) / 2, (g - w) / 2, w, w, v ? u : f, null == m || m));
            }
            var M = 'left' === c ? p + 5 : -5,
              I = c,
              A = n.get('formatter'),
              D = e;
            'string' == typeof A && A
              ? (D = A.replace('{name}', null != e ? e : ''))
              : 'function' == typeof A && (D = A(e)),
              y.add(
                new r.Text({
                  style: r.setTextStyle({}, x, {
                    text: D,
                    x: M,
                    y: g / 2,
                    textFill: v ? x.getTextColor() : f,
                    textAlign: I,
                    textVerticalAlign: 'middle',
                  }),
                }),
              );
            var T = new r.Rect({
              shape: y.getBoundingRect(),
              invisible: !0,
              tooltip: b.get('show')
                ? a.extend(
                    {
                      content: e,
                      formatter:
                        S.get('formatter', !0) ||
                        function() {
                          return e;
                        },
                      formatterParams: {
                        componentType: 'legend',
                        legendIndex: n.componentIndex,
                        name: e,
                        $vars: ['name'],
                      },
                    },
                    b.option,
                  )
                : null,
            });
            return (
              y.add(T),
              y.eachChild(function(e) {
                e.silent = !0;
              }),
              (T.silent = !d),
              this.getContentGroup().add(y),
              r.setHoverStyle(y),
              (y.__legendDataIndex = t),
              y
            );
          },
          layoutInner: function(e, t, i) {
            var n = this.getContentGroup();
            l.box(e.get('orient'), n, e.get('itemGap'), i.width, i.height);
            var a = n.getBoundingRect();
            return n.attr('position', [-a.x, -a.y]), this.group.getBoundingRect();
          },
          remove: function() {
            this.getContentGroup().removeAll(), (this._isFirstRender = !0);
          },
        });
      function p(e, t) {
        t.dispatchAction({ type: 'legendToggleSelect', name: e });
      }
      function g(e, t, i, n) {
        var a = i.getZr().storage.getDisplayList()[0];
        (a && a.useHoverLayer) || i.dispatchAction({ type: 'highlight', seriesName: e, name: t, excludeSeriesId: n });
      }
      function f(e, t, i, n) {
        var a = i.getZr().storage.getDisplayList()[0];
        (a && a.useHoverLayer) || i.dispatchAction({ type: 'downplay', seriesName: e, name: t, excludeSeriesId: n });
      }
      e.exports = d;
    },
    'YNf1': function(e, t, i) {
      var n = i('IwbS'),
        a = i('6Ic6'),
        o = 0.3,
        r = a.extend({
          type: 'parallel',
          init: function() {
            (this._dataGroup = new n.Group()), this.group.add(this._dataGroup);
          },
          render: function(e, t, i, a) {
            var o = this._dataGroup,
              r = e.getData(),
              h = this._data,
              d = e.coordinateSystem,
              p = d.dimensions,
              g = c(e);
            if (
              (r
                .diff(h)
                .add(function(e) {
                  u(l(r, o, e, p, d), r, e, g);
                })
                .update(function(t, i) {
                  var o = h.getItemGraphicEl(i),
                    l = s(r, t, p, d);
                  r.setItemGraphicEl(t, o),
                    n.updateProps(o, { shape: { points: l } }, a && !1 === a.animation ? null : e, t),
                    u(o, r, t, g);
                })
                .remove(function(e) {
                  var t = h.getItemGraphicEl(e);
                  o.remove(t);
                })
                .execute(),
              !this._initialized)
            ) {
              this._initialized = !0;
              var f = (function(e, t, i) {
                var a = e.model,
                  r = e.getRect(),
                  s = new n.Rect({ shape: { x: r.x, y: r.y, width: r.width, height: r.height } }),
                  l = 'horizontal' === a.get('layout') ? 'width' : 'height';
                return (
                  s.setShape(l, 0),
                  n.initProps(s, { shape: { width: r.width, height: r.height } }, t, function() {
                    setTimeout(function() {
                      o.removeClipPath();
                    });
                  }),
                  s
                );
              })(d, e);
              o.setClipPath(f);
            }
            this._data = r;
          },
          incrementalPrepareRender: function(e, t, i) {
            (this._initialized = !0), (this._data = null), this._dataGroup.removeAll();
          },
          incrementalRender: function(e, t, i) {
            for (var n = t.getData(), a = t.coordinateSystem, o = a.dimensions, r = c(t), s = e.start; s < e.end; s++) {
              var h = l(n, this._dataGroup, s, o, a);
              (h.incremental = !0), u(h, n, s, r);
            }
          },
          dispose: function() {},
          remove: function() {
            this._dataGroup && this._dataGroup.removeAll(), (this._data = null);
          },
        });
      function s(e, t, i, n) {
        for (var a, o = [], r = 0; r < i.length; r++) {
          var s = i[r],
            l = e.get(e.mapDimension(s), t);
          (a = l),
            ('category' === n.getAxis(s).type ? null == a : null == a || isNaN(a)) || o.push(n.dataToPoint(l, s));
        }
        return o;
      }
      function l(e, t, i, a, o) {
        var r = s(e, i, a, o),
          l = new n.Polyline({ shape: { points: r }, silent: !0, z2: 10 });
        return t.add(l), e.setItemGraphicEl(i, l), l;
      }
      function c(e) {
        var t = e.get('smooth', !0);
        return !0 === t && (t = o), { lineStyle: e.getModel('lineStyle').getLineStyle(), smooth: null != t ? t : o };
      }
      function u(e, t, i, n) {
        var a = n.lineStyle;
        t.hasItemOption &&
          (a = t
            .getItemModel(i)
            .getModel('lineStyle')
            .getLineStyle()),
          e.useStyle(a);
        var o = e.style;
        (o.fill = null),
          (o.stroke = t.getItemVisual(i, 'color')),
          (o.opacity = t.getItemVisual(i, 'opacity')),
          n.smooth && (e.shape.smooth = n.smooth);
      }
      e.exports = r;
    },
    'YOMW': function(e, t, i) {
      var n = i('bYtY'),
        a = {
          get: function(e, t, i) {
            var a = n.clone((o[e] || {})[t]);
            return i && n.isArray(a) ? a[a.length - 1] : a;
          },
        },
        o = {
          color: { active: ['#006edd', '#e0ffff'], inactive: ['rgba(0,0,0,0)'] },
          colorHue: { active: [0, 360], inactive: [0, 0] },
          colorSaturation: { active: [0.3, 1], inactive: [0, 0] },
          colorLightness: { active: [0.9, 0.5], inactive: [0, 0] },
          colorAlpha: { active: [0.3, 1], inactive: [0, 0] },
          opacity: { active: [0.3, 1], inactive: [0, 0] },
          symbol: { active: ['circle', 'roundRect', 'diamond'], inactive: ['none'] },
          symbolSize: { active: [10, 50], inactive: [0, 0] },
        };
      e.exports = a;
    },
    'Ynxi': function(e, t, i) {
      var n = i('ProS'),
        a = i('IwbS'),
        o = i('+TT/').getLayoutRect;
      n.extendComponentModel({
        type: 'title',
        layoutMode: { type: 'box', ignoreSize: !0 },
        defaultOption: {
          zlevel: 0,
          z: 6,
          show: !0,
          text: '',
          target: 'blank',
          subtext: '',
          subtarget: 'blank',
          left: 0,
          top: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ccc',
          borderWidth: 0,
          padding: 5,
          itemGap: 10,
          textStyle: { fontSize: 18, fontWeight: 'bolder', color: '#333' },
          subtextStyle: { color: '#aaa' },
        },
      }),
        n.extendComponentView({
          type: 'title',
          render: function(e, t, i) {
            if ((this.group.removeAll(), e.get('show'))) {
              var n = this.group,
                r = e.getModel('textStyle'),
                s = e.getModel('subtextStyle'),
                l = e.get('textAlign'),
                c = e.get('textBaseline'),
                u = new a.Text({
                  style: a.setTextStyle({}, r, { text: e.get('text'), textFill: r.getTextColor() }, { disableBox: !0 }),
                  z2: 10,
                }),
                h = u.getBoundingRect(),
                d = e.get('subtext'),
                p = new a.Text({
                  style: a.setTextStyle(
                    {},
                    s,
                    { text: d, textFill: s.getTextColor(), y: h.height + e.get('itemGap'), textVerticalAlign: 'top' },
                    { disableBox: !0 },
                  ),
                  z2: 10,
                }),
                g = e.get('link'),
                f = e.get('sublink'),
                m = e.get('triggerEvent', !0);
              (u.silent = !g && !m),
                (p.silent = !f && !m),
                g &&
                  u.on('click', function() {
                    window.open(g, '_' + e.get('target'));
                  }),
                f &&
                  p.on('click', function() {
                    window.open(f, '_' + e.get('subtarget'));
                  }),
                (u.eventData = p.eventData = m ? { componentType: 'title', componentIndex: e.componentIndex } : null),
                n.add(u),
                d && n.add(p);
              var v = n.getBoundingRect(),
                y = e.getBoxLayoutParams();
              (y.width = v.width), (y.height = v.height);
              var x = o(y, { width: i.getWidth(), height: i.getHeight() }, e.get('padding'));
              l ||
                ('middle' === (l = e.get('left') || e.get('right')) && (l = 'center'),
                'right' === l ? (x.x += x.width) : 'center' === l && (x.x += x.width / 2)),
                c ||
                  ('center' === (c = e.get('top') || e.get('bottom')) && (c = 'middle'),
                  'bottom' === c ? (x.y += x.height) : 'middle' === c && (x.y += x.height / 2),
                  (c = c || 'top')),
                n.attr('position', [x.x, x.y]);
              var _ = { textAlign: l, textVerticalAlign: c };
              u.setStyle(_), p.setStyle(_), (v = n.getBoundingRect());
              var b = x.margin,
                S = e.getItemStyle(['color', 'opacity']);
              S.fill = e.get('backgroundColor');
              var w = new a.Rect({
                shape: {
                  x: v.x - b[3],
                  y: v.y - b[0],
                  width: v.width + b[1] + b[3],
                  height: v.height + b[0] + b[2],
                  r: e.get('borderRadius'),
                },
                style: S,
                silent: !0,
              });
              a.subPixelOptimizeRect(w), n.add(w);
            }
          },
        });
    },
    'Z1wy': function(e, t, i) {
      var n = i('ProS');
      i('ThAp'), i('pmaE'), i('SehX'), i('7uqq');
      var a = i('zuHt'),
        o = i('VPsl'),
        r = i('9u0u'),
        s = i('lELe'),
        l = i('d4KN');
      n.registerLayout(a),
        n.registerVisual(o),
        n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC, r),
        n.registerPreprocessor(s),
        l('map', [
          { type: 'mapToggleSelect', event: 'mapselectchanged', method: 'toggleSelected' },
          { type: 'mapSelect', event: 'mapselected', method: 'select' },
          { type: 'mapUnSelect', event: 'mapunselected', method: 'unSelect' },
        ]);
    },
    'Z6js': function(e, t, i) {
      var n = i('MwEJ'),
        a = i('T4UG').extend({
          type: 'series.effectScatter',
          dependencies: ['grid', 'polar'],
          getInitialData: function(e, t) {
            return n(this.getSource(), this);
          },
          brushSelector: 'point',
          defaultOption: {
            coordinateSystem: 'cartesian2d',
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            effectType: 'ripple',
            progressive: 0,
            showEffectOn: 'render',
            rippleEffect: { period: 4, scale: 2.5, brushType: 'fill' },
            symbolSize: 10,
          },
        });
      e.exports = a;
    },
    'Z8zF': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('IwbS'),
        r = i('56rv').setLabel,
        s = i('Qxkt'),
        l = i('tceW'),
        c = i('y+Vt'),
        u = ['itemStyle', 'barBorderWidth'];
      a.extend(s.prototype, l);
      var h = n.extendChartView({
          type: 'bar',
          render: function(e, t, i) {
            this._updateDrawMode(e);
            var n = e.get('coordinateSystem');
            return (
              ('cartesian2d' !== n && 'polar' !== n) ||
                (this._isLargeDraw ? this._renderLarge(e, t, i) : this._renderNormal(e, t, i)),
              this.group
            );
          },
          incrementalPrepareRender: function(e, t, i) {
            this._clear(), this._updateDrawMode(e);
          },
          incrementalRender: function(e, t, i, n) {
            this._incrementalRenderLarge(e, t);
          },
          _updateDrawMode: function(e) {
            var t = e.pipelineContext.large;
            (null == this._isLargeDraw || t ^ this._isLargeDraw) && ((this._isLargeDraw = t), this._clear());
          },
          _renderNormal: function(e, t, i) {
            var n,
              a = this.group,
              r = e.getData(),
              s = this._data,
              l = e.coordinateSystem,
              c = l.getBaseAxis();
            'cartesian2d' === l.type ? (n = c.isHorizontal()) : 'polar' === l.type && (n = 'angle' === c.dim);
            var u = e.isAnimationEnabled() ? e : null;
            r
              .diff(s)
              .add(function(t) {
                if (r.hasValue(t)) {
                  var i = r.getItemModel(t),
                    o = f[l.type](r, t, i),
                    s = d[l.type](r, t, i, o, n, u);
                  r.setItemGraphicEl(t, s), a.add(s), m(s, r, t, i, o, e, n, 'polar' === l.type);
                }
              })
              .update(function(t, i) {
                var c = s.getItemGraphicEl(i);
                if (r.hasValue(t)) {
                  var h = r.getItemModel(t),
                    p = f[l.type](r, t, h);
                  c ? o.updateProps(c, { shape: p }, u, t) : (c = d[l.type](r, t, h, p, n, u, !0)),
                    r.setItemGraphicEl(t, c),
                    a.add(c),
                    m(c, r, t, h, p, e, n, 'polar' === l.type);
                } else a.remove(c);
              })
              .remove(function(e) {
                var t = s.getItemGraphicEl(e);
                'cartesian2d' === l.type ? t && p(e, u, t) : t && g(e, u, t);
              })
              .execute(),
              (this._data = r);
          },
          _renderLarge: function(e, t, i) {
            this._clear(), y(e, this.group);
          },
          _incrementalRenderLarge: function(e, t) {
            y(t, this.group, !0);
          },
          dispose: a.noop,
          remove: function(e) {
            this._clear(e);
          },
          _clear: function(e) {
            var t = this.group,
              i = this._data;
            e && e.get('animation') && i && !this._isLargeDraw
              ? i.eachItemGraphicEl(function(t) {
                  'sector' === t.type ? g(t.dataIndex, e, t) : p(t.dataIndex, e, t);
                })
              : t.removeAll(),
              (this._data = null);
          },
        }),
        d = {
          cartesian2d: function(e, t, i, n, r, s, l) {
            var c = new o.Rect({ shape: a.extend({}, n) });
            if (s) {
              var u = r ? 'height' : 'width',
                h = {};
              (c.shape[u] = 0), (h[u] = n[u]), o[l ? 'updateProps' : 'initProps'](c, { shape: h }, s, t);
            }
            return c;
          },
          polar: function(e, t, i, n, r, s, l) {
            var c = new o.Sector({ shape: a.defaults({ clockwise: n.startAngle < n.endAngle }, n) });
            if (s) {
              var u = r ? 'r' : 'endAngle',
                h = {};
              (c.shape[u] = r ? 0 : n.startAngle),
                (h[u] = n[u]),
                o[l ? 'updateProps' : 'initProps'](c, { shape: h }, s, t);
            }
            return c;
          },
        };
      function p(e, t, i) {
        (i.style.text = null),
          o.updateProps(i, { shape: { width: 0 } }, t, e, function() {
            i.parent && i.parent.remove(i);
          });
      }
      function g(e, t, i) {
        (i.style.text = null),
          o.updateProps(i, { shape: { r: i.shape.r0 } }, t, e, function() {
            i.parent && i.parent.remove(i);
          });
      }
      var f = {
        cartesian2d: function(e, t, i) {
          var n = e.getItemLayout(t),
            a = (function(e, t) {
              var i = e.get(u) || 0;
              return Math.min(i, Math.abs(t.width), Math.abs(t.height));
            })(i, n),
            o = n.width > 0 ? 1 : -1,
            r = n.height > 0 ? 1 : -1;
          return { x: n.x + (o * a) / 2, y: n.y + (r * a) / 2, width: n.width - o * a, height: n.height - r * a };
        },
        polar: function(e, t, i) {
          var n = e.getItemLayout(t);
          return { cx: n.cx, cy: n.cy, r0: n.r0, r: n.r, startAngle: n.startAngle, endAngle: n.endAngle };
        },
      };
      function m(e, t, i, n, s, l, c, u) {
        var h = t.getItemVisual(i, 'color'),
          d = t.getItemVisual(i, 'opacity'),
          p = n.getModel('itemStyle'),
          g = n.getModel('emphasis.itemStyle').getBarItemStyle();
        u || e.setShape('r', p.get('barBorderRadius') || 0),
          e.useStyle(a.defaults({ fill: h, opacity: d }, p.getBarItemStyle()));
        var f = n.getShallow('cursor');
        f && e.attr('cursor', f),
          u || r(e.style, g, n, h, l, i, c ? (s.height > 0 ? 'bottom' : 'top') : s.width > 0 ? 'left' : 'right'),
          o.setHoverStyle(e, g);
      }
      var v = c.extend({
        type: 'largeBar',
        shape: { points: [] },
        buildPath: function(e, t) {
          for (var i = t.points, n = this.__startPoint, a = this.__valueIdx, o = 0; o < i.length; o += 2)
            (n[this.__valueIdx] = i[o + a]), e.moveTo(n[0], n[1]), e.lineTo(i[o], i[o + 1]);
        },
      });
      function y(e, t, i) {
        var n = e.getData(),
          a = [],
          o = n.getLayout('valueAxisHorizontal') ? 1 : 0;
        a[1 - o] = n.getLayout('valueAxisStart');
        var r = new v({
          shape: { points: n.getLayout('largePoints') },
          incremental: !!i,
          __startPoint: a,
          __valueIdx: o,
        });
        t.add(r),
          (function(e, t, i) {
            var n = i.getVisual('borderColor') || i.getVisual('color'),
              a = t.getModel('itemStyle').getItemStyle(['color', 'borderColor']);
            e.useStyle(a), (e.style.fill = null), (e.style.stroke = n), (e.style.lineWidth = i.getLayout('barWidth'));
          })(r, e, n);
      }
      e.exports = h;
    },
    'ZWlE': function(e, t, i) {
      var n = i('bYtY'),
        a = i('4NO4');
      e.exports = function(e) {
        !(function(e) {
          if (!e.parallel) {
            var t = !1;
            n.each(e.series, function(e) {
              e && 'parallel' === e.type && (t = !0);
            }),
              t && (e.parallel = [{}]);
          }
        })(e),
          (function(e) {
            var t = a.normalizeToArray(e.parallelAxis);
            n.each(t, function(t) {
              if (n.isObject(t)) {
                var i = t.parallelIndex || 0,
                  o = a.normalizeToArray(e.parallel)[i];
                o && o.parallelAxisDefault && n.merge(t, o.parallelAxisDefault, !1);
              }
            });
          })(e);
      };
    },
    'ZYIC': function(e, t, i) {
      var n = {
        seriesType: 'lines',
        plan: i('zM3Q')(),
        reset: function(e) {
          var t = e.coordinateSystem,
            i = e.get('polyline'),
            n = e.pipelineContext.large;
          return {
            progress: function(a, o) {
              var r = [];
              if (n) {
                var s,
                  l = a.end - a.start;
                if (i) {
                  for (var c = 0, u = a.start; u < a.end; u++) c += e.getLineCoordsCount(u);
                  s = new Float32Array(l + 2 * c);
                } else s = new Float32Array(4 * l);
                var h = 0,
                  d = [];
                for (u = a.start; u < a.end; u++) {
                  var p = e.getLineCoords(u, r);
                  i && (s[h++] = p);
                  for (var g = 0; g < p; g++) (d = t.dataToPoint(r[g], !1, d)), (s[h++] = d[0]), (s[h++] = d[1]);
                }
                o.setLayout('linesPoints', s);
              } else
                for (u = a.start; u < a.end; u++) {
                  var f = o.getItemModel(u),
                    m = ((p = e.getLineCoords(u, r)), []);
                  if (i) for (var v = 0; v < p; v++) m.push(t.dataToPoint(r[v]));
                  else {
                    (m[0] = t.dataToPoint(r[0])), (m[1] = t.dataToPoint(r[1]));
                    var y = f.get('lineStyle.curveness');
                    +y &&
                      (m[2] = [
                        (m[0][0] + m[1][0]) / 2 - (m[0][1] - m[1][1]) * y,
                        (m[0][1] + m[1][1]) / 2 - (m[1][0] - m[0][0]) * y,
                      ]);
                  }
                  o.setItemLayout(u, m);
                }
            },
          };
        },
      };
      e.exports = n;
    },
    'Zp4F': function(e, t, i) {
      'use strict';
      var n,
        a = i('ofXK'),
        o = (i('Z1wy'), i('i51y'), i('fXoL')),
        r =
          (((n = function e() {
            _classCallCheck(this, e);
          }).ɵmod = o.Qb({ type: n })),
          (n.ɵinj = o.Pb({
            factory: function(e) {
              return new (e || n)();
            },
            imports: [[a.c]],
          })),
          n);
      i.d(t, 'a', function() {
        return r;
      });
    },
    'ZqQs': function(e, t, i) {
      var n = i('bYtY');
      function a(e) {
        var t = e.itemStyle || (e.itemStyle = {}),
          i = t.emphasis || (t.emphasis = {}),
          a = e.label || e.label || {},
          r = a.normal || (a.normal = {}),
          s = { normal: 1, emphasis: 1 };
        n.each(a, function(e, t) {
          s[t] || o(r, t) || (r[t] = e);
        }),
          i.label && !o(a, 'emphasis') && ((a.emphasis = i.label), delete i.label);
      }
      function o(e, t) {
        return e.hasOwnProperty(t);
      }
      e.exports = function(e) {
        var t = e && e.timeline;
        n.isArray(t) || (t = t ? [t] : []),
          n.each(t, function(e) {
            e &&
              (function(e) {
                var t = e.type,
                  i = { number: 'value', time: 'time' };
                if ((i[t] && ((e.axisType = i[t]), delete e.type), a(e), o(e, 'controlPosition'))) {
                  var r = e.controlStyle || (e.controlStyle = {});
                  o(r, 'position') || (r.position = e.controlPosition),
                    'none' !== r.position || o(r, 'show') || ((r.show = !1), delete r.position),
                    delete e.controlPosition;
                }
                n.each(e.data || [], function(e) {
                  n.isObject(e) && !n.isArray(e) && (!o(e, 'value') && o(e, 'name') && (e.value = e.name), a(e));
                });
              })(e);
          });
      };
    },
    'Zvw2': function(e, t, i) {
      var n = i('bYtY'),
        a = i('hM6l'),
        o = function(e, t, i, n, o) {
          a.call(this, e, t, i), (this.type = n || 'value'), (this.position = o || 'bottom'), (this.orient = null);
        };
      (o.prototype = {
        constructor: o,
        model: null,
        isHorizontal: function() {
          var e = this.position;
          return 'top' === e || 'bottom' === e;
        },
        pointToData: function(e, t) {
          return this.coordinateSystem.pointToData(e, t)[0];
        },
        toGlobalCoord: null,
        toLocalCoord: null,
      }),
        n.inherits(o, a),
        (e.exports = o);
    },
    'a9QJ': function(e, t) {
      var i = { 'Russia': [100, 60], 'United States': [-99, 38], 'United States of America': [-99, 38] };
      e.exports = function(e, t) {
        if ('world' === e) {
          var n = i[t.name];
          if (n) {
            var a = t.center;
            (a[0] = n[0]), (a[1] = n[1]);
          }
        }
      };
    },
    'akwb': function(e, t, i) {
      var n = i('RSch'),
        a = i('bYtY'),
        o = i('D9ME'),
        r = i('QBsz');
      function s(e, t, i) {
        o.call(this, e, t, i), (this._lastFrame = 0), (this._lastFramePercent = 0);
      }
      var l = s.prototype;
      (l.createLine = function(e, t, i) {
        return new n(e, t, i);
      }),
        (l.updateAnimationPoints = function(e, t) {
          this._points = t;
          for (var i = [0], n = 0, a = 1; a < t.length; a++) (n += r.dist(t[a - 1], t[a])), i.push(n);
          if (0 !== n) {
            for (a = 0; a < i.length; a++) i[a] /= n;
            (this._offsets = i), (this._length = n);
          }
        }),
        (l.getLineLength = function(e) {
          return this._length;
        }),
        (l.updateSymbolPosition = function(e) {
          var t = e.__t,
            i = this._points,
            n = this._offsets,
            a = i.length;
          if (n) {
            var o = this._lastFrame;
            if (t < this._lastFramePercent) {
              for (s = Math.min(o + 1, a - 1); s >= 0 && !(n[s] <= t); s--);
              s = Math.min(s, a - 2);
            } else {
              for (var s = o; s < a && !(n[s] > t); s++);
              s = Math.min(s - 1, a - 2);
            }
            r.lerp(e.position, i[s], i[s + 1], (t - n[s]) / (n[s + 1] - n[s])),
              (e.rotation = -Math.atan2(i[s + 1][1] - i[s][1], i[s + 1][0] - i[s][0]) - Math.PI / 2),
              (this._lastFrame = s),
              (this._lastFramePercent = t),
              (e.ignore = !1);
          }
        }),
        a.inherits(s, o),
        (e.exports = s);
    },
    'as94': function(e, t, i) {
      var n = i('7aKB'),
        a = i('3LNs'),
        o = i('IwbS'),
        r = i('/y7N'),
        s = i('Fofx'),
        l = i('+rIm'),
        c = i('Znkb'),
        u = a.extend({
          makeElOption: function(e, t, i, a, c) {
            var u = i.axis;
            'angle' === u.dim && (this.animationThreshold = Math.PI / 18);
            var d,
              p = u.polar,
              g = p.getOtherAxis(u).getExtent();
            d = u['dataTo' + n.capitalFirst(u.dim)](t);
            var f = a.get('type');
            if (f && 'none' !== f) {
              var m = r.buildElStyle(a),
                v = h[f](u, p, d, g, m);
              (v.style = m), (e.graphicKey = v.type), (e.pointer = v);
            }
            var y = (function(e, t, i, n, a) {
              var r = t.axis,
                c = r.dataToCoord(e),
                u = n.getAngleAxis().getExtent()[0];
              u = (u / 180) * Math.PI;
              var h,
                d,
                p,
                g = n.getRadiusAxis().getExtent();
              if ('radius' === r.dim) {
                var f = s.create();
                s.rotate(f, f, u), s.translate(f, f, [n.cx, n.cy]), (h = o.applyTransform([c, -a], f));
                var m = t.getModel('axisLabel').get('rotate') || 0,
                  v = l.innerTextLayout(u, (m * Math.PI) / 180, -1);
                (d = v.textAlign), (p = v.textVerticalAlign);
              } else {
                var y = g[1];
                h = n.coordToPoint([y + a, c]);
                var x = n.cx,
                  _ = n.cy;
                (d = Math.abs(h[0] - x) / y < 0.3 ? 'center' : h[0] > x ? 'left' : 'right'),
                  (p = Math.abs(h[1] - _) / y < 0.3 ? 'middle' : h[1] > _ ? 'top' : 'bottom');
              }
              return { position: h, align: d, verticalAlign: p };
            })(t, i, 0, p, a.get('label.margin'));
            r.buildLabelElOption(e, i, a, c, y);
          },
        }),
        h = {
          line: function(e, t, i, n, a) {
            return 'angle' === e.dim
              ? { type: 'Line', shape: r.makeLineShape(t.coordToPoint([n[0], i]), t.coordToPoint([n[1], i])) }
              : { type: 'Circle', shape: { cx: t.cx, cy: t.cy, r: i } };
          },
          shadow: function(e, t, i, n, a) {
            var o = Math.max(1, e.getBandWidth()),
              s = Math.PI / 180;
            return 'angle' === e.dim
              ? { type: 'Sector', shape: r.makeSectorShape(t.cx, t.cy, n[0], n[1], (-i - o / 2) * s, (o / 2 - i) * s) }
              : { type: 'Sector', shape: r.makeSectorShape(t.cx, t.cy, i - o / 2, i + o / 2, 0, 2 * Math.PI) };
          },
        };
      c.registerAxisPointerClass('PolarAxisPointer', u), (e.exports = u);
    },
    'bBKM': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('+rIm'),
        r = i('IwbS'),
        s = ['axisLine', 'axisTickLabel', 'axisName'],
        l = n.extendComponentView({
          type: 'radar',
          render: function(e, t, i) {
            this.group.removeAll(), this._buildAxes(e), this._buildSplitLineAndArea(e);
          },
          _buildAxes: function(e) {
            var t = e.coordinateSystem,
              i = t.getIndicatorAxes(),
              n = a.map(i, function(e) {
                return new o(e.model, {
                  position: [t.cx, t.cy],
                  rotation: e.angle,
                  labelDirection: -1,
                  tickDirection: -1,
                  nameDirection: 1,
                });
              });
            a.each(
              n,
              function(e) {
                a.each(s, e.add, e), this.group.add(e.getGroup());
              },
              this,
            );
          },
          _buildSplitLineAndArea: function(e) {
            var t = e.coordinateSystem,
              i = t.getIndicatorAxes();
            if (i.length) {
              var n = e.get('shape'),
                o = e.getModel('splitLine'),
                s = e.getModel('splitArea'),
                l = o.getModel('lineStyle'),
                c = s.getModel('areaStyle'),
                u = o.get('show'),
                h = s.get('show'),
                d = l.get('color'),
                p = c.get('color');
              (d = a.isArray(d) ? d : [d]), (p = a.isArray(p) ? p : [p]);
              var g = [],
                f = [];
              if ('circle' === n)
                for (var m = i[0].getTicksCoords(), v = t.cx, y = t.cy, x = 0; x < m.length; x++)
                  u && g[D(g, d, x)].push(new r.Circle({ shape: { cx: v, cy: y, r: m[x].coord } })),
                    h &&
                      x < m.length - 1 &&
                      f[D(f, p, x)].push(new r.Ring({ shape: { cx: v, cy: y, r0: m[x].coord, r: m[x + 1].coord } }));
              else {
                var _,
                  b = a.map(i, function(e, i) {
                    var n = e.getTicksCoords();
                    return (
                      (_ = null == _ ? n.length - 1 : Math.min(n.length - 1, _)),
                      a.map(n, function(e) {
                        return t.coordToPoint(e.coord, i);
                      })
                    );
                  }),
                  S = [];
                for (x = 0; x <= _; x++) {
                  for (var w = [], M = 0; M < i.length; M++) w.push(b[M][x]);
                  w[0] && w.push(w[0].slice()),
                    u && g[D(g, d, x)].push(new r.Polyline({ shape: { points: w } })),
                    h && S && f[D(f, p, x - 1)].push(new r.Polygon({ shape: { points: w.concat(S) } })),
                    (S = w.slice().reverse());
                }
              }
              var I = l.getLineStyle(),
                A = c.getAreaStyle();
              a.each(
                f,
                function(e, t) {
                  this.group.add(
                    r.mergePath(e, { style: a.defaults({ stroke: 'none', fill: p[t % p.length] }, A), silent: !0 }),
                  );
                },
                this,
              ),
                a.each(
                  g,
                  function(e, t) {
                    this.group.add(
                      r.mergePath(e, { style: a.defaults({ fill: 'none', stroke: d[t % d.length] }, I), silent: !0 }),
                    );
                  },
                  this,
                );
            }
            function D(e, t, i) {
              var n = i % t.length;
              return (e[n] = e[n] || []), n;
            }
          },
        });
      e.exports = l;
    },
    'bBL8': function(e, t, i) {
      var n = i('ProS');
      i('LPzL'), i('rfSb'), i('JVwQ');
      var a = i('UnoB'),
        o = i('cbJ4'),
        r = i('0/Rx');
      n.registerLayout(a), n.registerVisual(o), n.registerProcessor(r('themeRiver'));
    },
    'cbJ4': function(e, t, i) {
      var n = i('bYtY').createHashMap;
      e.exports = function(e) {
        e.eachSeriesByType('themeRiver', function(e) {
          var t = e.getData(),
            i = e.getRawData(),
            a = e.get('color'),
            o = n();
          t.each(function(e) {
            o.set(t.getRawIndex(e), e);
          }),
            i.each(function(n) {
              var r = i.getName(n),
                s = a[(e.nameMap.get(r) - 1) % a.length];
              i.setItemVisual(n, 'color', s);
              var l = o.get(n);
              null != l && t.setItemVisual(l, 'color', s);
            });
        });
      };
    },
    'cpOr': function(e, t, i) {
      i('Tghj');
      var n = i('T4UG'),
        a = i('YXkt'),
        o = i('bYtY'),
        r = o.concatArray,
        s = o.mergeAll,
        l = o.map,
        c = i('7aKB').encodeHTML,
        u = (i('IDmD'), 'undefined' == typeof Uint32Array ? Array : Uint32Array),
        h = 'undefined' == typeof Float64Array ? Array : Float64Array;
      function d(e) {
        var t = e.data;
        t &&
          t[0] &&
          t[0][0] &&
          t[0][0].coord &&
          (e.data = l(t, function(e) {
            var t = { coords: [e[0].coord, e[1].coord] };
            return e[0].name && (t.fromName = e[0].name), e[1].name && (t.toName = e[1].name), s([t, e[0], e[1]]);
          }));
      }
      var p = n.extend({
        type: 'series.lines',
        dependencies: ['grid', 'polar'],
        visualColorAccessPath: 'lineStyle.color',
        init: function(e) {
          (e.data = e.data || []), d(e);
          var t = this._processFlatCoordsArray(e.data);
          (this._flatCoords = t.flatCoords),
            (this._flatCoordsOffset = t.flatCoordsOffset),
            t.flatCoords && (e.data = new Float32Array(t.count)),
            p.superApply(this, 'init', arguments);
        },
        mergeOption: function(e) {
          if (((e.data = e.data || []), d(e), e.data)) {
            var t = this._processFlatCoordsArray(e.data);
            (this._flatCoords = t.flatCoords),
              (this._flatCoordsOffset = t.flatCoordsOffset),
              t.flatCoords && (e.data = new Float32Array(t.count));
          }
          p.superApply(this, 'mergeOption', arguments);
        },
        appendData: function(e) {
          var t = this._processFlatCoordsArray(e.data);
          t.flatCoords &&
            (this._flatCoords
              ? ((this._flatCoords = r(this._flatCoords, t.flatCoords)),
                (this._flatCoordsOffset = r(this._flatCoordsOffset, t.flatCoordsOffset)))
              : ((this._flatCoords = t.flatCoords), (this._flatCoordsOffset = t.flatCoordsOffset)),
            (e.data = new Float32Array(t.count))),
            this.getRawData().appendData(e.data);
        },
        _getCoordsFromItemModel: function(e) {
          var t = this.getData().getItemModel(e);
          return t.option instanceof Array ? t.option : t.getShallow('coords');
        },
        getLineCoordsCount: function(e) {
          return this._flatCoordsOffset ? this._flatCoordsOffset[2 * e + 1] : this._getCoordsFromItemModel(e).length;
        },
        getLineCoords: function(e, t) {
          if (this._flatCoordsOffset) {
            for (var i = this._flatCoordsOffset[2 * e], n = this._flatCoordsOffset[2 * e + 1], a = 0; a < n; a++)
              (t[a] = t[a] || []), (t[a][0] = this._flatCoords[i + 2 * a]), (t[a][1] = this._flatCoords[i + 2 * a + 1]);
            return n;
          }
          var o = this._getCoordsFromItemModel(e);
          for (a = 0; a < o.length; a++) (t[a] = t[a] || []), (t[a][0] = o[a][0]), (t[a][1] = o[a][1]);
          return o.length;
        },
        _processFlatCoordsArray: function(e) {
          var t = 0;
          if ((this._flatCoords && (t = this._flatCoords.length), 'number' == typeof e[0])) {
            for (var i = e.length, n = new u(i), a = new h(i), o = 0, r = 0, s = 0, l = 0; l < i; ) {
              s++;
              var c = e[l++];
              (n[r++] = o + t), (n[r++] = c);
              for (var d = 0; d < c; d++) {
                var p = e[l++],
                  g = e[l++];
                (a[o++] = p), (a[o++] = g);
              }
            }
            return { flatCoordsOffset: new Uint32Array(n.buffer, 0, r), flatCoords: a, count: s };
          }
          return { flatCoordsOffset: null, flatCoords: null, count: e.length };
        },
        getInitialData: function(e, t) {
          var i = new a(['value'], this);
          return (
            (i.hasItemOption = !1),
            i.initData(e.data, [], function(e, t, n, a) {
              if (e instanceof Array) return NaN;
              i.hasItemOption = !0;
              var o = e.value;
              return null != o ? (o instanceof Array ? o[a] : o) : void 0;
            }),
            i
          );
        },
        formatTooltip: function(e) {
          var t = this.getData().getItemModel(e),
            i = t.get('name');
          if (i) return i;
          var n = t.get('fromName'),
            a = t.get('toName'),
            o = [];
          return null != n && o.push(n), null != a && o.push(a), c(o.join(' > '));
        },
        preventIncremental: function() {
          return !!this.get('effect.show');
        },
        getProgressive: function() {
          var e = this.option.progressive;
          return null == e ? (this.option.large ? 1e4 : this.get('progressive')) : e;
        },
        getProgressiveThreshold: function() {
          var e = this.option.progressiveThreshold;
          return null == e ? (this.option.large ? 2e4 : this.get('progressiveThreshold')) : e;
        },
        defaultOption: {
          coordinateSystem: 'geo',
          zlevel: 0,
          z: 2,
          legendHoverLink: !0,
          hoverAnimation: !0,
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: ['none', 'none'],
          symbolSize: [10, 10],
          geoIndex: 0,
          effect: {
            show: !1,
            period: 4,
            constantSpeed: 0,
            symbol: 'circle',
            symbolSize: 3,
            loop: !0,
            trailLength: 0.2,
          },
          large: !1,
          largeThreshold: 2e3,
          polyline: !1,
          label: { show: !1, position: 'end' },
          lineStyle: { opacity: 0.5 },
        },
      });
      e.exports = p;
    },
    'crZl': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('IwbS'),
        r = i('7aKB'),
        s = i('+TT/'),
        l = i('XxSj'),
        c = n.extendComponentView({
          type: 'visualMap',
          autoPositionValues: { left: 1, right: 1, top: 1, bottom: 1 },
          init: function(e, t) {
            (this.ecModel = e), (this.api = t);
          },
          render: function(e, t, i, n) {
            (this.visualMapModel = e),
              !1 !== e.get('show') ? this.doRender.apply(this, arguments) : this.group.removeAll();
          },
          renderBackground: function(e) {
            var t = this.visualMapModel,
              i = r.normalizeCssArray(t.get('padding') || 0),
              n = e.getBoundingRect();
            e.add(
              new o.Rect({
                z2: -1,
                silent: !0,
                shape: { x: n.x - i[3], y: n.y - i[0], width: n.width + i[3] + i[1], height: n.height + i[0] + i[2] },
                style: {
                  fill: t.get('backgroundColor'),
                  stroke: t.get('borderColor'),
                  lineWidth: t.get('borderWidth'),
                },
              }),
            );
          },
          getControllerVisual: function(e, t, i) {
            var n = (i = i || {}).forceState,
              o = this.visualMapModel,
              r = {};
            if (('symbol' === t && (r.symbol = o.get('itemSymbol')), 'color' === t)) {
              var s = o.get('contentColor');
              r.color = s;
            }
            function c(e) {
              return r[e];
            }
            function u(e, t) {
              r[e] = t;
            }
            var h = o.controllerVisuals[n || o.getValueState(e)],
              d = l.prepareVisualTypes(h);
            return (
              a.each(d, function(n) {
                var a = h[n];
                i.convertOpacityToAlpha && 'opacity' === n && ((n = 'colorAlpha'), (a = h.__alphaForOpacity)),
                  l.dependsOn(n, t) && a && a.applyVisual(e, c, u);
              }),
              r[t]
            );
          },
          positionGroup: function(e) {
            var t = this.api;
            s.positionElement(e, this.visualMapModel.getBoxLayoutParams(), {
              width: t.getWidth(),
              height: t.getHeight(),
            });
          },
          doRender: a.noop,
        });
      e.exports = c;
    },
    'dBmv': function(e, t, i) {
      var n = i('ProS'),
        a = i('szbU');
      i('vF/C'), i('qwVE'), i('MHoB'), i('PNag'), i('1u/T'), n.registerPreprocessor(a);
    },
    'dmGj': function(e, t, i) {
      var n = i('DEFe'),
        a = i('ProS').extendComponentView({
          type: 'geo',
          init: function(e, t) {
            var i = new n(t, !0);
            (this._mapDraw = i), this.group.add(i.group);
          },
          render: function(e, t, i, n) {
            if (!n || 'geoToggleSelect' !== n.type || n.from !== this.uid) {
              var a = this._mapDraw;
              e.get('show') ? a.draw(e, t, i, this, n) : this._mapDraw.group.removeAll(),
                (this.group.silent = e.get('silent'));
            }
          },
          dispose: function() {
            this._mapDraw && this._mapDraw.remove();
          },
        });
      e.exports = a;
    },
    'eIcI': function(e, t, i) {
      var n = i('bYtY'),
        a = i('hM6l');
      function o(e, t, i) {
        a.call(this, e, t, i), (this.type = 'value'), (this.angle = 0), (this.name = '');
      }
      n.inherits(o, a), (e.exports = o);
    },
    'eJH7': function(e, t, i) {
      var n = i('bYtY');
      e.exports = function(e) {
        var t = e.polar;
        if (t) {
          n.isArray(t) || (t = [t]);
          var i = [];
          n.each(t, function(t, a) {
            t.indicator
              ? (t.type && !t.shape && (t.shape = t.type),
                (e.radar = e.radar || []),
                n.isArray(e.radar) || (e.radar = [e.radar]),
                e.radar.push(t))
              : i.push(t);
          }),
            (e.polar = i);
        }
        n.each(e.series, function(e) {
          e && 'radar' === e.type && e.polarIndex && (e.radarIndex = e.polarIndex);
        });
      };
    },
    'ePAk': function(e, t, i) {
      var n = i('ProS');
      i('2fGM');
      var a = n.extendComponentModel({
        type: 'polar',
        dependencies: ['polarAxis', 'angleAxis'],
        coordinateSystem: null,
        findAxisModel: function(e) {
          var t;
          return (
            this.ecModel.eachComponent(
              e,
              function(e) {
                e.getCoordSysModel() === this && (t = e);
              },
              this,
            ),
            t
          );
        },
        defaultOption: { zlevel: 0, z: 0, center: ['50%', '50%'], radius: '80%' },
      });
      e.exports = a;
    },
    'eS4l': function(e, t, i) {
      i('HM/N'), i('FNN5');
    },
    'f1nB': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('4NO4'),
        r = i('IwbS'),
        s = i('+TT/');
      n.registerPreprocessor(function(e) {
        var t = e.graphic;
        a.isArray(t)
          ? (e.graphic = t[0] && t[0].elements ? [e.graphic[0]] : [{ elements: t }])
          : t && !t.elements && (e.graphic = [{ elements: [t] }]);
      });
      var l = n.extendComponentModel({
        type: 'graphic',
        defaultOption: { elements: [], parentId: null },
        _elOptionsToUpdate: null,
        mergeOption: function(e) {
          var t = this.option.elements;
          (this.option.elements = null), l.superApply(this, 'mergeOption', arguments), (this.option.elements = t);
        },
        optionUpdated: function(e, t) {
          var i = this.option,
            n = (t ? i : e).elements,
            r = (i.elements = t ? [] : i.elements),
            l = [];
          this._flatten(n, l);
          var c = o.mappingToExists(r, l);
          o.makeIdAndName(c);
          var u = (this._elOptionsToUpdate = []);
          a.each(
            c,
            function(e, t) {
              var i = e.option;
              i &&
                (u.push(i),
                (function(e, t) {
                  var i = e.exist;
                  if (((t.id = e.keyInfo.id), !t.type && i && (t.type = i.type), null == t.parentId)) {
                    var n = t.parentOption;
                    n ? (t.parentId = n.id) : i && (t.parentId = i.parentId);
                  }
                  t.parentOption = null;
                })(e, i),
                (function(e, t, i) {
                  var n = a.extend({}, i),
                    o = e[t],
                    r = i.$action || 'merge';
                  'merge' === r
                    ? o
                      ? (a.merge(o, n, !0), s.mergeLayoutParam(o, n, { ignoreSize: !0 }), s.copyLayoutParams(i, o))
                      : (e[t] = n)
                    : 'replace' === r
                    ? (e[t] = n)
                    : 'remove' === r && o && (e[t] = null);
                })(r, t, i),
                (function(e, t) {
                  e &&
                    ((e.hv = t.hv = [h(t, ['left', 'right']), h(t, ['top', 'bottom'])]),
                    'group' === e.type &&
                      (null == e.width && (e.width = t.width = 0), null == e.height && (e.height = t.height = 0)));
                })(r[t], i));
            },
            this,
          );
          for (var d = r.length - 1; d >= 0; d--) null == r[d] ? r.splice(d, 1) : delete r[d].$action;
        },
        _flatten: function(e, t, i) {
          a.each(
            e,
            function(e) {
              if (e) {
                i && (e.parentOption = i), t.push(e);
                var n = e.children;
                'group' === e.type && n && this._flatten(n, t, e), delete e.children;
              }
            },
            this,
          );
        },
        useElOptionsToUpdate: function() {
          var e = this._elOptionsToUpdate;
          return (this._elOptionsToUpdate = null), e;
        },
      });
      function c(e, t, i, n) {
        var a = i.type,
          o = new (0, r[a.charAt(0).toUpperCase() + a.slice(1)])(i);
        t.add(o), n.set(e, o), (o.__ecGraphicId = e);
      }
      function u(e, t) {
        var i = e && e.parent;
        i &&
          ('group' === e.type &&
            e.traverse(function(e) {
              u(e, t);
            }),
          t.removeKey(e.__ecGraphicId),
          i.remove(e));
      }
      function h(e, t) {
        var i;
        return (
          a.each(t, function(t) {
            null != e[t] && 'auto' !== e[t] && (i = !0);
          }),
          i
        );
      }
      n.extendComponentView({
        type: 'graphic',
        init: function(e, t) {
          this._elMap = a.createHashMap();
        },
        render: function(e, t, i) {
          e !== this._lastGraphicModel && this._clear(),
            (this._lastGraphicModel = e),
            this._updateElements(e),
            this._relocate(e, i);
        },
        _updateElements: function(e) {
          var t = e.useElOptionsToUpdate();
          if (t) {
            var i = this._elMap,
              n = this.group;
            a.each(t, function(t) {
              var o = t.$action,
                r = t.id,
                l = i.get(r),
                h = t.parentId,
                d = null != h ? i.get(h) : n,
                p = t.style;
              'text' === t.type &&
                p &&
                (t.hv && t.hv[1] && (p.textVerticalAlign = p.textBaseline = null),
                !p.hasOwnProperty('textFill') && p.fill && (p.textFill = p.fill),
                !p.hasOwnProperty('textStroke') && p.stroke && (p.textStroke = p.stroke));
              var g = (function(e) {
                return (
                  (e = a.extend({}, e)),
                  a.each(['id', 'parentId', '$action', 'hv', 'bounding'].concat(s.LOCATION_PARAMS), function(t) {
                    delete e[t];
                  }),
                  e
                );
              })(t);
              o && 'merge' !== o
                ? 'replace' === o
                  ? (u(l, i), c(r, d, g, i))
                  : 'remove' === o && u(l, i)
                : l
                ? l.attr(g)
                : c(r, d, g, i);
              var f = i.get(r);
              f &&
                ((f.__ecGraphicWidth = t.width),
                (f.__ecGraphicHeight = t.height),
                (function(e, t, i) {
                  var n = e.eventData;
                  e.silent ||
                    e.ignore ||
                    n ||
                    (n = e.eventData = { componentType: 'graphic', componentIndex: t.componentIndex, name: e.name }),
                    n && (n.info = e.info);
                })(f, e));
            });
          }
        },
        _relocate: function(e, t) {
          for (var i = e.option.elements, n = this.group, a = this._elMap, o = i.length - 1; o >= 0; o--) {
            var r = i[o],
              l = a.get(r.id);
            if (l) {
              var c = l.parent,
                u =
                  c === n
                    ? { width: t.getWidth(), height: t.getHeight() }
                    : { width: c.__ecGraphicWidth || 0, height: c.__ecGraphicHeight || 0 };
              s.positionElement(l, r, u, null, { hv: r.hv, boundingMode: r.bounding });
            }
          }
        },
        _clear: function() {
          var e = this._elMap;
          e.each(function(t) {
            u(t, e);
          }),
            (this._elMap = a.createHashMap());
        },
        dispose: function() {
          this._clear();
        },
      });
    },
    'fjKi': function(e, t, i) {
      var n = i('ProS');
      i('Q7if'),
        i('jndi'),
        n.registerPreprocessor(function(e) {
          e.markArea = e.markArea || {};
        });
    },
    'g0SD': function(e, t, i) {
      var n = i('bYtY'),
        a = i('9wZj'),
        o = i('OELB'),
        r = i('YXkt'),
        s = i('kj2x');
      function l(e, t, i) {
        var n = t.coordinateSystem;
        e.each(function(a) {
          var r,
            s = e.getItemModel(a),
            l = o.parsePercent(s.get('x'), i.getWidth()),
            c = o.parsePercent(s.get('y'), i.getHeight());
          if (isNaN(l) || isNaN(c)) {
            if (t.getMarkerPosition) r = t.getMarkerPosition(e.getValues(e.dimensions, a));
            else if (n) {
              var u = e.get(n.dimensions[0], a),
                h = e.get(n.dimensions[1], a);
              r = n.dataToPoint([u, h]);
            }
          } else r = [l, c];
          isNaN(l) || (r[0] = l), isNaN(c) || (r[1] = c), e.setItemLayout(a, r);
        });
      }
      var c = i('iPDy').extend({
        type: 'markPoint',
        updateTransform: function(e, t, i) {
          t.eachSeries(function(e) {
            var t = e.markPointModel;
            t && (l(t.getData(), e, i), this.markerGroupMap.get(e.id).updateLayout(t));
          }, this);
        },
        renderSeries: function(e, t, i, o) {
          var c = e.coordinateSystem,
            u = e.id,
            h = e.getData(),
            d = this.markerGroupMap,
            p = d.get(u) || d.set(u, new a()),
            g = (function(e, t, i) {
              var a;
              a = e
                ? n.map(e && e.dimensions, function(e) {
                    var i = t.getData().getDimensionInfo(t.getData().mapDimension(e)) || {};
                    return n.defaults({ name: e }, i);
                  })
                : [{ name: 'value', type: 'float' }];
              var o = new r(a, i),
                l = n.map(i.get('data'), n.curry(s.dataTransform, t));
              return (
                e && (l = n.filter(l, n.curry(s.dataFilter, e))),
                o.initData(
                  l,
                  null,
                  e
                    ? s.dimValueGetter
                    : function(e) {
                        return e.value;
                      },
                ),
                o
              );
            })(c, e, t);
          t.setData(g),
            l(t.getData(), e, o),
            g.each(function(e) {
              var i = g.getItemModel(e),
                n = i.getShallow('symbolSize');
              'function' == typeof n && (n = n(t.getRawValue(e), t.getDataParams(e))),
                g.setItemVisual(e, {
                  symbolSize: n,
                  color: i.get('itemStyle.color') || h.getVisual('color'),
                  symbol: i.getShallow('symbol'),
                });
            }),
            p.updateData(g),
            this.group.add(p.group),
            g.eachItemGraphicEl(function(e) {
              e.traverse(function(e) {
                e.dataModel = t;
              });
            }),
            (p.__keep = !0),
            (p.group.silent = t.get('silent') || e.get('silent'));
        },
      });
      e.exports = c;
    },
    'g7p0': function(e, t, i) {
      var n = i('bYtY'),
        a = i('bLfw'),
        o = i('+TT/'),
        r = o.getLayoutParams,
        s = o.sizeCalculable,
        l = o.mergeLayoutParam,
        c = a.extend({
          type: 'calendar',
          coordinateSystem: null,
          defaultOption: {
            zlevel: 0,
            z: 2,
            left: 80,
            top: 60,
            cellSize: 20,
            orient: 'horizontal',
            splitLine: { show: !0, lineStyle: { color: '#000', width: 1, type: 'solid' } },
            itemStyle: { color: '#fff', borderWidth: 1, borderColor: '#ccc' },
            dayLabel: { show: !0, firstDay: 0, position: 'start', margin: '50%', nameMap: 'en', color: '#000' },
            monthLabel: {
              show: !0,
              position: 'start',
              margin: 5,
              align: 'center',
              nameMap: 'en',
              formatter: null,
              color: '#000',
            },
            yearLabel: {
              show: !0,
              position: null,
              margin: 30,
              formatter: null,
              color: '#ccc',
              fontFamily: 'sans-serif',
              fontWeight: 'bolder',
              fontSize: 20,
            },
          },
          init: function(e, t, i, n) {
            var a = r(e);
            c.superApply(this, 'init', arguments), u(e, a);
          },
          mergeOption: function(e, t) {
            c.superApply(this, 'mergeOption', arguments), u(this.option, e);
          },
        });
      function u(e, t) {
        var i = e.cellSize;
        n.isArray(i) ? 1 === i.length && (i[1] = i[0]) : (i = e.cellSize = [i, i]);
        var a = n.map([0, 1], function(e) {
          return s(t, e) && (i[e] = 'auto'), null != i[e] && 'auto' !== i[e];
        });
        l(e, t, { type: 'box', ignoreSize: a });
      }
      e.exports = c;
    },
    'hFmY': function(e, t, i) {
      var n = i('ProS');
      n.registerAction({ type: 'axisAreaSelect', event: 'axisAreaSelected' }, function(e, t) {
        t.eachComponent({ mainType: 'parallelAxis', query: e }, function(t) {
          t.axis.model.setActiveIntervals(e.intervals);
        });
      }),
        n.registerAction('parallelAxisExpand', function(e, t) {
          t.eachComponent({ mainType: 'parallel', query: e }, function(t) {
            t.setAxisExpand(e);
          });
        });
    },
    'hJvP': function(e, t, i) {
      var n = i('2dDv');
      i('IDmD').register('parallel', {
        create: function(e, t) {
          var i = [];
          return (
            e.eachComponent('parallel', function(a, o) {
              var r = new n(a, e, t);
              (r.name = 'parallel_' + o), r.resize(a, t), (a.coordinateSystem = r), (r.model = a), i.push(r);
            }),
            e.eachSeries(function(t) {
              if ('parallel' === t.get('coordinateSystem')) {
                var i = e.queryComponents({
                  mainType: 'parallel',
                  index: t.get('parallelIndex'),
                  id: t.get('parallelId'),
                })[0];
                t.coordinateSystem = i.coordinateSystem;
              }
            }),
            i
          );
        },
      });
    },
    'hNWo': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('Qxkt'),
        r = i('4NO4').isNameSpecified,
        s = n.extendComponentModel({
          type: 'legend.plain',
          dependencies: ['series'],
          layoutMode: { type: 'box', ignoreSize: !0 },
          init: function(e, t, i) {
            this.mergeDefaultAndTheme(e, i), (e.selected = e.selected || {});
          },
          mergeOption: function(e) {
            s.superCall(this, 'mergeOption', e);
          },
          optionUpdated: function() {
            this._updateData(this.ecModel);
            var e = this._data;
            if (e[0] && 'single' === this.get('selectedMode')) {
              for (var t = !1, i = 0; i < e.length; i++) {
                var n = e[i].get('name');
                if (this.isSelected(n)) {
                  this.select(n), (t = !0);
                  break;
                }
              }
              !t && this.select(e[0].get('name'));
            }
          },
          _updateData: function(e) {
            var t = [],
              i = [];
            e.eachRawSeries(function(n) {
              var a;
              if ((i.push(n.name), n.legendDataProvider)) {
                var o = n.legendDataProvider(),
                  s = o.mapArray(o.getName);
                e.isSeriesFiltered(n) || (i = i.concat(s)), s.length ? (t = t.concat(s)) : (a = !0);
              } else a = !0;
              a && r(n) && t.push(n.name);
            }),
              (this._availableNames = i);
            var n = this.get('data') || t,
              s = a.map(
                n,
                function(e) {
                  return (
                    ('string' != typeof e && 'number' != typeof e) || (e = { name: e }), new o(e, this, this.ecModel)
                  );
                },
                this,
              );
            this._data = s;
          },
          getData: function() {
            return this._data;
          },
          select: function(e) {
            var t = this.option.selected;
            'single' === this.get('selectedMode') &&
              a.each(this._data, function(e) {
                t[e.get('name')] = !1;
              }),
              (t[e] = !0);
          },
          unSelect: function(e) {
            'single' !== this.get('selectedMode') && (this.option.selected[e] = !1);
          },
          toggleSelected: function(e) {
            var t = this.option.selected;
            t.hasOwnProperty(e) || (t[e] = !0), this[t[e] ? 'unSelect' : 'select'](e);
          },
          isSelected: function(e) {
            var t = this.option.selected;
            return !(t.hasOwnProperty(e) && !t[e]) && a.indexOf(this._availableNames, e) >= 0;
          },
          defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: 'horizontal',
            left: 'center',
            top: 0,
            align: 'auto',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: '#ccc',
            textStyle: { color: '#333' },
            selectedMode: !0,
            tooltip: { show: !1 },
          },
        });
      e.exports = s;
    },
    'hw6D': function(e, t) {
      e.exports = function(e) {
        e.eachSeriesByType('radar', function(e) {
          var t = e.getData(),
            i = [],
            n = e.coordinateSystem;
          if (n) {
            for (var a = n.getIndicatorAxes(), o = 0; o < a.length; o++) t.each(t.mapDimension(a[o].dim), r);
            t.each(function(e) {
              i[e][0] && i[e].push(i[e][0].slice()), t.setItemLayout(e, i[e]);
            });
          }
          function r(e, t) {
            (i[t] = i[t] || []), (i[t][o] = n.dataToPoint(e, o));
          }
        });
      };
    },
    'i51y': function(e, t, i) {
      'use strict';
      i.d(t, 'a', function() {
        return r;
      });
      var n = i('fXoL'),
        a = i('rDig'),
        o = ['td-map', ''],
        r = (function() {
          var e = (function(e) {
            function t(e) {
              return (
                _classCallCheck(this, t), _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, 'map', e))
              );
            }
            return (
              _inherits(t, e),
              _createClass(t, [
                {
                  key: 'getConfig',
                  value: function() {
                    return {
                      map: this.map,
                      roam: this.roam,
                      center: this.center,
                      aspectScale: this.aspectScale,
                      boudingCoords: this.boudingCoords,
                      zoom: this.zoom,
                      scaleLimit: this.scaleLimit,
                      nameMap: this.nameMap,
                      selectedMode: this.selectedMode,
                      label: this.label,
                      itemStyle: this.itemStyle,
                      zLevel: this.zLevel,
                      z: this.z,
                      left: this.left,
                      top: this.top,
                      right: this.right,
                      bottom: this.bottom,
                      layoutCenter: this.layoutCenter,
                      layoutSize: this.layoutSize,
                      geoIndex: this.geoIndex,
                      mapValueCalculation: this.mapValueCalculation,
                      showLegendSymbol: this.showLegendSymbol,
                      seriesLayoutBy: this.seriesLayoutBy,
                      markPoint: this.markPoint,
                      markLine: this.markLine,
                      markArea: this.markArea,
                      silent: this.silent,
                    };
                  },
                },
              ]),
              t
            );
          })(a.c);
          return (
            (e.ɵfac = function(t) {
              return new (t || e)(n.Sb(a.b));
            }),
            (e.ɵcmp = n.Mb({
              type: e,
              selectors: [['td-chart-series', 'td-map', '']],
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
                map: 'map',
                roam: 'roam',
                center: 'center',
                aspectScale: 'aspectScale',
                boudingCoords: 'boudingCoords',
                zoom: 'zoom',
                scaleLimit: 'scaleLimit',
                nameMap: 'nameMap',
                selectedMode: 'selectedMode',
                label: 'label',
                itemStyle: 'itemStyle',
                zLevel: 'zLevel',
                z: 'z',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                layoutCenter: 'layoutCenter',
                layoutSize: 'layoutSize',
                geoIndex: 'geoIndex',
                mapValueCalculation: 'mapValueCalculation',
                showLegendSymbol: 'showLegendSymbol',
                seriesLayoutBy: 'seriesLayoutBy',
                markPoint: 'markPoint',
                markLine: 'markLine',
                markArea: 'markArea',
                silent: 'silent',
              },
              features: [
                n.Cb([
                  {
                    provide: a.c,
                    useExisting: Object(n.V)(function() {
                      return e;
                    }),
                  },
                ]),
                n.Ab,
              ],
              attrs: o,
              decls: 0,
              vars: 0,
              template: function(e, t) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })();
    },
    'iPDy': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = n.extendComponentView({
          type: 'marker',
          init: function() {
            this.markerGroupMap = a.createHashMap();
          },
          render: function(e, t, i) {
            var n = this.markerGroupMap;
            n.each(function(e) {
              e.__keep = !1;
            });
            var a = this.type + 'Model';
            t.eachSeries(function(e) {
              var n = e[a];
              n && this.renderSeries(e, n, t, i);
            }, this),
              n.each(function(e) {
                !e.__keep && this.group.remove(e.group);
              }, this);
          },
          renderSeries: function() {},
        });
      e.exports = o;
    },
    'jett': function(e, t, i) {
      var n = i('ProS');
      i('VSLf'), i('oBaM'), i('FGaS');
      var a = i('mOdp'),
        o = i('f5Yq'),
        r = i('hw6D'),
        s = i('0/Rx'),
        l = i('eJH7');
      n.registerVisual(a('radar')),
        n.registerVisual(o('radar', 'circle')),
        n.registerLayout(r),
        n.registerProcessor(s('radar')),
        n.registerPreprocessor(l);
    },
    'jndi': function(e, t, i) {
      var n = i('bYtY'),
        a = i('Qe9p'),
        o = i('YXkt'),
        r = i('OELB'),
        s = i('IwbS'),
        l = i('kj2x'),
        c = i('iPDy'),
        u = function(e, t, i, a) {
          var o = l.dataTransform(e, a[0]),
            r = l.dataTransform(e, a[1]),
            s = n.retrieve,
            c = o.coord,
            u = r.coord;
          (c[0] = s(c[0], -1 / 0)), (c[1] = s(c[1], -1 / 0)), (u[0] = s(u[0], 1 / 0)), (u[1] = s(u[1], 1 / 0));
          var h = n.mergeAll([{}, o, r]);
          return (h.coord = [o.coord, r.coord]), (h.x0 = o.x), (h.y0 = o.y), (h.x1 = r.x), (h.y1 = r.y), h;
        };
      function h(e) {
        return !isNaN(e) && !isFinite(e);
      }
      function d(e, t, i, n) {
        var a = 1 - e;
        return h(t[a]) && h(i[a]);
      }
      function p(e, t) {
        var i = t.coord[0],
          n = t.coord[1];
        return (
          !('cartesian2d' !== e.type || !i || !n || (!d(1, i, n) && !d(0, i, n))) ||
          l.dataFilter(e, { coord: i, x: t.x0, y: t.y0 }) ||
          l.dataFilter(e, { coord: n, x: t.x1, y: t.y1 })
        );
      }
      function g(e, t, i, n, a) {
        var o,
          s = n.coordinateSystem,
          l = e.getItemModel(t),
          c = r.parsePercent(l.get(i[0]), a.getWidth()),
          u = r.parsePercent(l.get(i[1]), a.getHeight());
        if (isNaN(c) || isNaN(u)) {
          if (n.getMarkerPosition) o = n.getMarkerPosition(e.getValues(i, t));
          else {
            var d = [(f = e.get(i[0], t)), (m = e.get(i[1], t))];
            s.clampData && s.clampData(d, d), (o = s.dataToPoint(d, !0));
          }
          if ('cartesian2d' === s.type) {
            var p = s.getAxis('x'),
              g = s.getAxis('y'),
              f = e.get(i[0], t),
              m = e.get(i[1], t);
            h(f)
              ? (o[0] = p.toGlobalCoord(p.getExtent()['x0' === i[0] ? 0 : 1]))
              : h(m) && (o[1] = g.toGlobalCoord(g.getExtent()['y0' === i[1] ? 0 : 1]));
          }
          isNaN(c) || (o[0] = c), isNaN(u) || (o[1] = u);
        } else o = [c, u];
        return o;
      }
      var f = [
        ['x0', 'y0'],
        ['x1', 'y0'],
        ['x1', 'y1'],
        ['x0', 'y1'],
      ];
      c.extend({
        type: 'markArea',
        updateTransform: function(e, t, i) {
          t.eachSeries(function(e) {
            var t = e.markAreaModel;
            if (t) {
              var a = t.getData();
              a.each(function(t) {
                var o = n.map(f, function(n) {
                  return g(a, t, n, e, i);
                });
                a.setItemLayout(t, o), a.getItemGraphicEl(t).setShape('points', o);
              });
            }
          }, this);
        },
        renderSeries: function(e, t, i, r) {
          var l = e.coordinateSystem,
            c = e.id,
            h = e.getData(),
            d = this.markerGroupMap,
            m = d.get(c) || d.set(c, { group: new s.Group() });
          this.group.add(m.group), (m.__keep = !0);
          var v = (function(e, t, i) {
            var a, r;
            e
              ? ((a = n.map(e && e.dimensions, function(e) {
                  var i = t.getData(),
                    a = i.getDimensionInfo(i.mapDimension(e)) || {};
                  return n.defaults({ name: e }, a);
                })),
                (r = new o(
                  n.map(['x0', 'y0', 'x1', 'y1'], function(e, t) {
                    return { name: e, type: a[t % 2].type };
                  }),
                  i,
                )))
              : (r = new o((a = [{ name: 'value', type: 'float' }]), i));
            var s = n.map(i.get('data'), n.curry(u, t, e, i));
            return (
              e && (s = n.filter(s, n.curry(p, e))),
              r.initData(
                s,
                null,
                e
                  ? function(e, t, i, n) {
                      return e.coord[Math.floor(n / 2)][n % 2];
                    }
                  : function(e) {
                      return e.value;
                    },
              ),
              (r.hasItemOption = !0),
              r
            );
          })(l, e, t);
          t.setData(v),
            v.each(function(t) {
              v.setItemLayout(
                t,
                n.map(f, function(i) {
                  return g(v, t, i, e, r);
                }),
              ),
                v.setItemVisual(t, { color: h.getVisual('color') });
            }),
            v
              .diff(m.__data)
              .add(function(e) {
                var t = new s.Polygon({ shape: { points: v.getItemLayout(e) } });
                v.setItemGraphicEl(e, t), m.group.add(t);
              })
              .update(function(e, i) {
                var n = m.__data.getItemGraphicEl(i);
                s.updateProps(n, { shape: { points: v.getItemLayout(e) } }, t, e),
                  m.group.add(n),
                  v.setItemGraphicEl(e, n);
              })
              .remove(function(e) {
                var t = m.__data.getItemGraphicEl(e);
                m.group.remove(t);
              })
              .execute(),
            v.eachItemGraphicEl(function(e, i) {
              var o = v.getItemModel(i),
                r = o.getModel('label'),
                l = o.getModel('emphasis.label'),
                c = v.getItemVisual(i, 'color');
              e.useStyle(
                n.defaults(o.getModel('itemStyle').getItemStyle(), { fill: a.modifyAlpha(c, 0.4), stroke: c }),
              ),
                (e.hoverStyle = o.getModel('emphasis.itemStyle').getItemStyle()),
                s.setLabelStyle(e.style, e.hoverStyle, r, l, {
                  labelFetcher: t,
                  labelDataIndex: i,
                  defaultText: v.getName(i) || '',
                  isRectText: !0,
                  autoColor: c,
                }),
                s.setHoverStyle(e, {}),
                (e.dataModel = t);
            }),
            (m.__data = v),
            (m.group.silent = t.get('silent') || e.get('silent'));
        },
      });
    },
    'k5C7': function(e, t, i) {
      i('0JAE'), i('g7p0'), i('7mYs');
    },
    'kDyi': function(e, t) {
      e.exports = function(e) {
        var t = e.findComponents({ mainType: 'legend' });
        t &&
          t.length &&
          e.filterSeries(function(e) {
            for (var i = 0; i < t.length; i++) if (!t[i].isSelected(e.name)) return !1;
            return !0;
          });
      };
    },
    'kj2x': function(e, t, i) {
      var n = i('bYtY'),
        a = i('OELB'),
        o = i('7hqr').isDimensionStacked,
        r = n.indexOf;
      function s(e, t, i, n, r, s) {
        var l = [],
          c = o(t, n) ? t.getCalculationInfo('stackResultDimension') : n,
          u = h(t, c, e),
          d = t.indicesOfNearest(c, u)[0];
        (l[r] = t.get(i, d)), (l[s] = t.get(n, d));
        var p = a.getPrecision(t.get(n, d));
        return (p = Math.min(p, 20)) >= 0 && (l[s] = +l[s].toFixed(p)), l;
      }
      var l = n.curry,
        c = { min: l(s, 'min'), max: l(s, 'max'), average: l(s, 'average') };
      function u(e, t, i, n) {
        var a = {};
        return (
          null != e.valueIndex || null != e.valueDim
            ? ((a.valueDataDim = null != e.valueIndex ? t.getDimension(e.valueIndex) : e.valueDim),
              (a.valueAxis = i.getAxis(
                (function(e, t) {
                  var i = e.getData(),
                    n = i.dimensions;
                  t = i.getDimension(t);
                  for (var a = 0; a < n.length; a++) {
                    var o = i.getDimensionInfo(n[a]);
                    if (o.name === t) return o.coordDim;
                  }
                })(n, a.valueDataDim),
              )),
              (a.baseAxis = i.getOtherAxis(a.valueAxis)),
              (a.baseDataDim = t.mapDimension(a.baseAxis.dim)))
            : ((a.baseAxis = n.getBaseAxis()),
              (a.valueAxis = i.getOtherAxis(a.baseAxis)),
              (a.baseDataDim = t.mapDimension(a.baseAxis.dim)),
              (a.valueDataDim = t.mapDimension(a.valueAxis.dim))),
          a
        );
      }
      function h(e, t, i) {
        if ('average' === i) {
          var n = 0,
            a = 0;
          return (
            e.each(t, function(e, t) {
              isNaN(e) || ((n += e), a++);
            }),
            n / a
          );
        }
        return 'median' === i ? e.getMedian(t) : e.getDataExtent(t, !0)['max' === i ? 1 : 0];
      }
      (t.dataTransform = function(e, t) {
        var i = e.getData(),
          a = e.coordinateSystem;
        if (
          t &&
          !(function(e) {
            return !isNaN(parseFloat(e.x)) && !isNaN(parseFloat(e.y));
          })(t) &&
          !n.isArray(t.coord) &&
          a
        ) {
          var o = a.dimensions,
            s = u(t, i, a, e);
          if ((t = n.clone(t)).type && c[t.type] && s.baseAxis && s.valueAxis) {
            var l = r(o, s.baseAxis.dim),
              d = r(o, s.valueAxis.dim);
            (t.coord = c[t.type](i, s.baseDataDim, s.valueDataDim, l, d)), (t.value = t.coord[d]);
          } else {
            for (
              var p = [null != t.xAxis ? t.xAxis : t.radiusAxis, null != t.yAxis ? t.yAxis : t.angleAxis], g = 0;
              g < 2;
              g++
            )
              c[p[g]] && (p[g] = h(i, i.mapDimension(o[g]), p[g]));
            t.coord = p;
          }
        }
        return t;
      }),
        (t.getAxisInfo = u),
        (t.dataFilter = function(e, t) {
          return (
            !(
              e &&
              e.containData &&
              t.coord &&
              !(function(e) {
                return !(isNaN(parseFloat(e.x)) && isNaN(parseFloat(e.y)));
              })(t)
            ) || e.containData(t.coord)
          );
        }),
        (t.dimValueGetter = function(e, t, i, n) {
          return n < 2 ? e.coord && e.coord[n] : e.value;
        }),
        (t.numCalculate = h);
    },
    'knOB': function(e, t, i) {
      var n = i('bYtY'),
        a = i('hM6l');
      function o(e, t) {
        a.call(this, 'radius', e, t), (this.type = 'category');
      }
      (o.prototype = {
        constructor: o,
        pointToData: function(e, t) {
          return this.polar.pointToData(e, t)['radius' === this.dim ? 0 : 1];
        },
        dataToRadius: a.prototype.dataToCoord,
        radiusToData: a.prototype.coordToData,
      }),
        n.inherits(o, a),
        (e.exports = o);
    },
    'kzvK': function(e, t, i) {
      var n = i('sS/r').extend({ type: 'timeline' });
      e.exports = n;
    },
    'lELe': function(e, t, i) {
      var n = i('bYtY');
      e.exports = function(e) {
        var t = [];
        n.each(e.series, function(e) {
          e && 'map' === e.type && (t.push(e), (e.map = e.map || e.mapType), n.defaults(e, e.mapLocation));
        });
      };
    },
    'lLGD': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('nVfU'),
        r = o.layout,
        s = o.largeLayout;
      i('Wqna'),
        i('F7hV'),
        i('Z8zF'),
        i('Ae16'),
        n.registerLayout(a.curry(r, 'bar')),
        n.registerLayout(s),
        n.registerVisual({
          seriesType: 'bar',
          reset: function(e) {
            e.getData().setVisual('legendSymbol', 'roundRect');
          },
        });
    },
    'laiN': function(e, t, i) {
      var n = i('ProS');
      i('GVMX'),
        i('MH26'),
        n.registerPreprocessor(function(e) {
          e.markLine = e.markLine || {};
        });
    },
    'o40c': function(e, t, i) {
      var n = i('IwbS'),
        a = i('OS9S'),
        o = i('loD1'),
        r = i('aKvl'),
        s = n.extendShape({
          shape: { polyline: !1, curveness: 0, segs: [] },
          buildPath: function(e, t) {
            var i = t.segs,
              n = t.curveness;
            if (t.polyline)
              for (var a = 0; a < i.length; ) {
                var o = i[a++];
                if (o > 0) {
                  e.moveTo(i[a++], i[a++]);
                  for (var r = 1; r < o; r++) e.lineTo(i[a++], i[a++]);
                }
              }
            else
              for (a = 0; a < i.length; ) {
                var s = i[a++],
                  l = i[a++],
                  c = i[a++],
                  u = i[a++];
                e.moveTo(s, l),
                  n > 0
                    ? e.quadraticCurveTo((s + c) / 2 - (l - u) * n, (l + u) / 2 - (c - s) * n, c, u)
                    : e.lineTo(c, u);
              }
          },
          findDataIndex: function(e, t) {
            var i = this.shape,
              n = i.segs,
              a = i.curveness;
            if (i.polyline)
              for (var s = 0, l = 0; l < n.length; ) {
                var c = n[l++];
                if (c > 0)
                  for (var u = n[l++], h = n[l++], d = 1; d < c; d++) {
                    var p = n[l++],
                      g = n[l++];
                    if (o.containStroke(u, h, p, g)) return s;
                  }
                s++;
              }
            else
              for (s = 0, l = 0; l < n.length; ) {
                if (((u = n[l++]), (h = n[l++]), (p = n[l++]), (g = n[l++]), a > 0)) {
                  if (r.containStroke(u, h, (u + p) / 2 - (h - g) * a, (h + g) / 2 - (p - u) * a, p, g)) return s;
                } else if (o.containStroke(u, h, p, g)) return s;
                s++;
              }
            return -1;
          },
        });
      function l() {
        this.group = new n.Group();
      }
      var c = l.prototype;
      (c.isPersistent = function() {
        return !this._incremental;
      }),
        (c.updateData = function(e) {
          this.group.removeAll();
          var t = new s({ rectHover: !0, cursor: 'default' });
          t.setShape({ segs: e.getLayout('linesPoints') }),
            this._setCommon(t, e),
            this.group.add(t),
            (this._incremental = null);
        }),
        (c.incrementalPrepareUpdate = function(e) {
          this.group.removeAll(),
            this._clearIncremental(),
            e.count() > 5e5
              ? (this._incremental || (this._incremental = new a({ silent: !0 })), this.group.add(this._incremental))
              : (this._incremental = null);
        }),
        (c.incrementalUpdate = function(e, t) {
          var i = new s();
          i.setShape({ segs: t.getLayout('linesPoints') }),
            this._setCommon(i, t, !!this._incremental),
            this._incremental
              ? this._incremental.addDisplayable(i, !0)
              : ((i.rectHover = !0), (i.cursor = 'default'), (i.__startIndex = e.start), this.group.add(i));
        }),
        (c.remove = function() {
          this._clearIncremental(), (this._incremental = null), this.group.removeAll();
        }),
        (c._setCommon = function(e, t, i) {
          var n = t.hostModel;
          e.setShape({ polyline: n.get('polyline'), curveness: n.get('lineStyle.curveness') }),
            e.useStyle(n.getModel('lineStyle').getLineStyle()),
            (e.style.strokeNoScale = !0);
          var a = t.getVisual('color');
          a && e.setStyle('stroke', a),
            e.setStyle('fill'),
            i ||
              ((e.seriesIndex = n.seriesIndex),
              e.on('mousemove', function(t) {
                e.dataIndex = null;
                var i = e.findDataIndex(t.offsetX, t.offsetY);
                i > 0 && (e.dataIndex = i + e.__startIndex);
              }));
        }),
        (c._clearIncremental = function() {
          var e = this._incremental;
          e && e.clearDisplaybles();
        }),
        (e.exports = l);
    },
    'oBaM': function(e, t, i) {
      var n = i('T4UG'),
        a = i('5GtS'),
        o = i('bYtY'),
        r = i('7aKB').encodeHTML,
        s = n.extend({
          type: 'series.radar',
          dependencies: ['radar'],
          init: function(e) {
            s.superApply(this, 'init', arguments),
              (this.legendDataProvider = function() {
                return this.getRawData();
              });
          },
          getInitialData: function(e, t) {
            return a(this, { generateCoord: 'indicator_', generateCoordCount: 1 / 0 });
          },
          formatTooltip: function(e) {
            var t = this.getData(),
              i = this.coordinateSystem.getIndicatorAxes(),
              n = this.getData().getName(e);
            return (
              r('' === n ? this.name : n) +
              '<br/>' +
              o
                .map(i, function(i, n) {
                  var a = t.get(t.mapDimension(i.dim), e);
                  return r(i.name + ' : ' + a);
                })
                .join('<br />')
            );
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'radar',
            legendHoverLink: !0,
            radarIndex: 0,
            lineStyle: { width: 2, type: 'solid' },
            label: { position: 'top' },
            symbol: 'emptyCircle',
            symbolSize: 4,
          },
        });
      e.exports = s;
    },
    'oE7X': function(e, t, i) {
      i('bLfw').registerSubTypeDefaulter('timeline', function() {
        return 'slider';
      });
    },
    'oY9F': function(e, t, i) {
      var n = i('OlYY').extend({
        type: 'dataZoom.inside',
        defaultOption: {
          disabled: !1,
          zoomLock: !1,
          zoomOnMouseWheel: !0,
          moveOnMouseMove: !0,
          moveOnMouseWheel: !1,
          preventDefaultMouseMove: !0,
        },
      });
      e.exports = n;
    },
    'p+If': function(e, t, i) {
      var n = i('ProS');
      i('cpOr'), i('rkZ5');
      var a = i('ZYIC'),
        o = i('7ph2');
      n.registerLayout(a), n.registerVisual(o);
    },
    'p/La': function(e, t) {
      var i = [
        [
          [123.45165252685547, 25.73527164402261],
          [123.49731445312499, 25.73527164402261],
          [123.49731445312499, 25.750734064600884],
          [123.45165252685547, 25.750734064600884],
          [123.45165252685547, 25.73527164402261],
        ],
      ];
      e.exports = function(e, t) {
        'china' === e && '\u53f0\u6e7e' === t.name && t.geometries.push({ type: 'polygon', exterior: i[0] });
      };
    },
    'p1MT': function(e, t, i) {
      var n = i('Hw7h'),
        a = i('IwbS'),
        o = i('6Ic6'),
        r = i('OELB'),
        s = r.parsePercent,
        l = r.round,
        c = r.linearMap;
      function u(e, t) {
        return (
          t &&
            ('string' == typeof t
              ? (e = t.replace('{value}', null != e ? e : ''))
              : 'function' == typeof t && (e = t(e))),
          e
        );
      }
      var h = 2 * Math.PI,
        d = o.extend({
          type: 'gauge',
          render: function(e, t, i) {
            this.group.removeAll();
            var n = e.get('axisLine.lineStyle.color'),
              a = (function(e, t) {
                var i = e.get('center'),
                  n = t.getWidth(),
                  a = t.getHeight(),
                  o = Math.min(n, a);
                return { cx: s(i[0], t.getWidth()), cy: s(i[1], t.getHeight()), r: s(e.get('radius'), o / 2) };
              })(e, i);
            this._renderMain(e, t, i, n, a);
          },
          dispose: function() {},
          _renderMain: function(e, t, i, n, o) {
            for (
              var r = this.group,
                s = e.getModel('axisLine').getModel('lineStyle'),
                l = e.get('clockwise'),
                c = (-e.get('startAngle') / 180) * Math.PI,
                u = ((f = (-e.get('endAngle') / 180) * Math.PI) - c) % h,
                d = c,
                p = s.get('width'),
                g = 0;
              g < n.length;
              g++
            ) {
              var f,
                m = Math.min(Math.max(n[g][0], 0), 1),
                v = new a.Sector({
                  shape: {
                    startAngle: d,
                    endAngle: (f = c + u * m),
                    cx: o.cx,
                    cy: o.cy,
                    clockwise: l,
                    r0: o.r - p,
                    r: o.r,
                  },
                  silent: !0,
                });
              v.setStyle({ fill: n[g][1] }),
                v.setStyle(s.getLineStyle(['color', 'borderWidth', 'borderColor'])),
                r.add(v),
                (d = f);
            }
            var y = function(e) {
              if (e <= 0) return n[0][1];
              for (var t = 0; t < n.length; t++) if (n[t][0] >= e && (0 === t ? 0 : n[t - 1][0]) < e) return n[t][1];
              return n[t - 1][1];
            };
            if (!l) {
              var x = c;
              (c = f), (f = x);
            }
            this._renderTicks(e, t, i, y, o, c, f, l),
              this._renderPointer(e, t, i, y, o, c, f, l),
              this._renderTitle(e, t, i, y, o),
              this._renderDetail(e, t, i, y, o);
          },
          _renderTicks: function(e, t, i, n, o, r, c, h) {
            for (
              var d = this.group,
                p = o.cx,
                g = o.cy,
                f = o.r,
                m = +e.get('min'),
                v = +e.get('max'),
                y = e.getModel('splitLine'),
                x = e.getModel('axisTick'),
                _ = e.getModel('axisLabel'),
                b = e.get('splitNumber'),
                S = x.get('splitNumber'),
                w = s(y.get('length'), f),
                M = s(x.get('length'), f),
                I = r,
                A = (c - r) / b,
                D = A / S,
                T = y.getModel('lineStyle').getLineStyle(),
                P = x.getModel('lineStyle').getLineStyle(),
                L = 0;
              L <= b;
              L++
            ) {
              var C = Math.cos(I),
                k = Math.sin(I);
              if (y.get('show')) {
                var z = new a.Line({
                  shape: { x1: C * f + p, y1: k * f + g, x2: C * (f - w) + p, y2: k * (f - w) + g },
                  style: T,
                  silent: !0,
                });
                'auto' === T.stroke && z.setStyle({ stroke: n(L / b) }), d.add(z);
              }
              if (_.get('show')) {
                var O = u(l((L / b) * (v - m) + m), _.get('formatter')),
                  R = _.get('distance'),
                  E = n(L / b);
                d.add(
                  new a.Text({
                    style: a.setTextStyle(
                      {},
                      _,
                      {
                        text: O,
                        x: C * (f - w - R) + p,
                        y: k * (f - w - R) + g,
                        textVerticalAlign: k < -0.4 ? 'top' : k > 0.4 ? 'bottom' : 'middle',
                        textAlign: C < -0.4 ? 'left' : C > 0.4 ? 'right' : 'center',
                      },
                      { autoColor: E },
                    ),
                    silent: !0,
                  }),
                );
              }
              if (x.get('show') && L !== b) {
                for (var V = 0; V <= S; V++) {
                  (C = Math.cos(I)), (k = Math.sin(I));
                  var N = new a.Line({
                    shape: { x1: C * f + p, y1: k * f + g, x2: C * (f - M) + p, y2: k * (f - M) + g },
                    silent: !0,
                    style: P,
                  });
                  'auto' === P.stroke && N.setStyle({ stroke: n((L + V / S) / b) }), d.add(N), (I += D);
                }
                I -= D;
              } else I += A;
            }
          },
          _renderPointer: function(e, t, i, o, r, l, u, h) {
            var d = this.group,
              p = this._data;
            if (e.get('pointer.show')) {
              var g = [+e.get('min'), +e.get('max')],
                f = [l, u],
                m = e.getData(),
                v = m.mapDimension('value');
              m
                .diff(p)
                .add(function(t) {
                  var i = new n({ shape: { angle: l } });
                  a.initProps(i, { shape: { angle: c(m.get(v, t), g, f, !0) } }, e), d.add(i), m.setItemGraphicEl(t, i);
                })
                .update(function(t, i) {
                  var n = p.getItemGraphicEl(i);
                  a.updateProps(n, { shape: { angle: c(m.get(v, t), g, f, !0) } }, e),
                    d.add(n),
                    m.setItemGraphicEl(t, n);
                })
                .remove(function(e) {
                  var t = p.getItemGraphicEl(e);
                  d.remove(t);
                })
                .execute(),
                m.eachItemGraphicEl(function(e, t) {
                  var i = m.getItemModel(t),
                    n = i.getModel('pointer');
                  e.setShape({ x: r.cx, y: r.cy, width: s(n.get('width'), r.r), r: s(n.get('length'), r.r) }),
                    e.useStyle(i.getModel('itemStyle').getItemStyle()),
                    'auto' === e.style.fill && e.setStyle('fill', o(c(m.get(v, t), g, [0, 1], !0))),
                    a.setHoverStyle(e, i.getModel('emphasis.itemStyle').getItemStyle());
                }),
                (this._data = m);
            } else
              p &&
                p.eachItemGraphicEl(function(e) {
                  d.remove(e);
                });
          },
          _renderTitle: function(e, t, i, n, o) {
            var r = e.getData(),
              l = r.mapDimension('value'),
              u = e.getModel('title');
            if (u.get('show')) {
              var h = u.get('offsetCenter'),
                d = o.cx + s(h[0], o.r),
                p = o.cy + s(h[1], o.r),
                g = +e.get('min'),
                f = +e.get('max'),
                m = e.getData().get(l, 0),
                v = n(c(m, [g, f], [0, 1], !0));
              this.group.add(
                new a.Text({
                  silent: !0,
                  style: a.setTextStyle(
                    {},
                    u,
                    { x: d, y: p, text: r.getName(0), textAlign: 'center', textVerticalAlign: 'middle' },
                    { autoColor: v, forceRich: !0 },
                  ),
                }),
              );
            }
          },
          _renderDetail: function(e, t, i, n, o) {
            var r = e.getModel('detail'),
              l = +e.get('min'),
              h = +e.get('max');
            if (r.get('show')) {
              var d = r.get('offsetCenter'),
                p = o.cx + s(d[0], o.r),
                g = o.cy + s(d[1], o.r),
                f = s(r.get('width'), o.r),
                m = s(r.get('height'), o.r),
                v = e.getData(),
                y = v.get(v.mapDimension('value'), 0),
                x = n(c(y, [l, h], [0, 1], !0));
              this.group.add(
                new a.Text({
                  silent: !0,
                  style: a.setTextStyle(
                    {},
                    r,
                    {
                      x: p,
                      y: g,
                      text: u(y, r.get('formatter')),
                      textWidth: isNaN(f) ? null : f,
                      textHeight: isNaN(m) ? null : m,
                      textAlign: 'center',
                      textVerticalAlign: 'middle',
                    },
                    { autoColor: x, forceRich: !0 },
                  ),
                }),
              );
            }
          },
        });
      e.exports = d;
    },
    'pLH3': function(e, t, i) {
      var n = i('ProS');
      i('ALo7'), i('TWL2');
      var a = i('mOdp'),
        o = i('JLnu'),
        r = i('0/Rx');
      n.registerVisual(a('funnel')), n.registerLayout(o), n.registerProcessor(r('funnel'));
    },
    'pmaE': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('IwbS'),
        r = i('DEFe'),
        s = '__seriesMapHighDown',
        l = '__seriesMapCallKey',
        c = n.extendChartView({
          type: 'map',
          render: function(e, t, i, n) {
            if (!n || 'mapToggleSelect' !== n.type || n.from !== this.uid) {
              var a = this.group;
              if ((a.removeAll(), !e.getHostGeoModel())) {
                if (n && 'geoRoam' === n.type && 'series' === n.componentType && n.seriesId === e.id)
                  (o = this._mapDraw) && a.add(o.group);
                else if (e.needsDrawMap) {
                  var o = this._mapDraw || new r(i, !0);
                  a.add(o.group), o.draw(e, t, i, this, n), (this._mapDraw = o);
                } else this._mapDraw && this._mapDraw.remove(), (this._mapDraw = null);
                e.get('showLegendSymbol') && t.getComponent('legend') && this._renderSymbols(e, t, i);
              }
            }
          },
          remove: function() {
            this._mapDraw && this._mapDraw.remove(), (this._mapDraw = null), this.group.removeAll();
          },
          dispose: function() {
            this._mapDraw && this._mapDraw.remove(), (this._mapDraw = null);
          },
          _renderSymbols: function(e, t, i) {
            var n = e.originalData,
              r = this.group;
            n.each(n.mapDimension('value'), function(t, i) {
              if (!isNaN(t)) {
                var c = n.getItemLayout(i);
                if (c && c.point) {
                  var d = c.point,
                    p = c.offset,
                    g = new o.Circle({
                      style: { fill: e.getData().getVisual('color') },
                      shape: { cx: d[0] + 9 * p, cy: d[1], r: 3 },
                      silent: !0,
                      z2: 8 + (p ? 0 : o.Z2_EMPHASIS_LIFT + 1),
                    });
                  if (!p) {
                    var f = e.mainSeries.getData(),
                      m = n.getName(i),
                      v = f.indexOfName(m),
                      y = n.getItemModel(i),
                      x = y.getModel('label'),
                      _ = y.getModel('emphasis.label'),
                      b = f.getItemGraphicEl(v),
                      S = a.retrieve2(e.getFormattedLabel(v, 'normal'), m),
                      w = a.retrieve2(e.getFormattedLabel(v, 'emphasis'), S),
                      M = b[s],
                      I = Math.random();
                    if (!M) {
                      M = b[s] = {};
                      var A = a.curry(u, !0),
                        D = a.curry(u, !1);
                      b.on('mouseover', A)
                        .on('mouseout', D)
                        .on('emphasis', A)
                        .on('normal', D);
                    }
                    (b[l] = I),
                      a.extend(M, {
                        recordVersion: I,
                        circle: g,
                        labelModel: x,
                        hoverLabelModel: _,
                        emphasisText: w,
                        normalText: S,
                      }),
                      h(M, !1);
                  }
                  r.add(g);
                }
              }
            });
          },
        });
      function u(e) {
        var t = this[s];
        t && t.recordVersion === this[l] && h(t, e);
      }
      function h(e, t) {
        var i = e.circle,
          n = e.labelModel,
          a = e.hoverLabelModel,
          r = e.emphasisText,
          s = e.normalText;
        t
          ? (i.style.extendFrom(
              o.setTextStyle({}, a, { text: a.get('show') ? r : null }, { isRectText: !0, useInsideStyle: !1 }, !0),
            ),
            (i.__mapOriginalZ2 = i.z2),
            (i.z2 += o.Z2_EMPHASIS_LIFT))
          : (o.setTextStyle(
              i.style,
              n,
              { text: n.get('show') ? s : null, textPosition: n.getShallow('position') || 'bottom' },
              { isRectText: !0, useInsideStyle: !1 },
            ),
            i.dirty(!1),
            null != i.__mapOriginalZ2 && ((i.z2 = i.__mapOriginalZ2), (i.__mapOriginalZ2 = null)));
      }
      e.exports = c;
    },
    'q/+u': function(e, t, i) {
      var n = i('ProS'),
        a = i('9wZj'),
        o = i('yWXo'),
        r = i('h8O9');
      n.extendChartView({
        type: 'scatter',
        render: function(e, t, i) {
          var n = e.getData();
          this._updateSymbolDraw(n, e).updateData(n), (this._finished = !0);
        },
        incrementalPrepareRender: function(e, t, i) {
          var n = e.getData();
          this._updateSymbolDraw(n, e).incrementalPrepareUpdate(n), (this._finished = !1);
        },
        incrementalRender: function(e, t, i) {
          this._symbolDraw.incrementalUpdate(e, t.getData()), (this._finished = e.end === t.getData().count());
        },
        updateTransform: function(e, t, i) {
          var n = e.getData();
          if ((this.group.dirty(), !this._finished || n.count() > 1e4 || !this._symbolDraw.isPersistent()))
            return { update: !0 };
          var a = r().reset(e);
          a.progress && a.progress({ start: 0, end: n.count() }, n), this._symbolDraw.updateLayout(n);
        },
        _updateSymbolDraw: function(e, t) {
          var i = this._symbolDraw,
            n = t.pipelineContext.large;
          return (
            (i && n === this._isLargeDraw) ||
              (i && i.remove(),
              (i = this._symbolDraw = n ? new o() : new a()),
              (this._isLargeDraw = n),
              this.group.removeAll()),
            this.group.add(i.group),
            i
          );
        },
        remove: function(e, t) {
          this._symbolDraw && this._symbolDraw.remove(!0), (this._symbolDraw = null);
        },
        dispose: function() {},
      });
    },
    'q3GZ': function(e, t) {
      var i = ['lineStyle', 'normal', 'opacity'];
      e.exports = {
        seriesType: 'parallel',
        reset: function(e, t, n) {
          var a = e.getModel('itemStyle'),
            o = e.getModel('lineStyle'),
            r = t.get('color'),
            s = o.get('color') || a.get('color') || r[e.seriesIndex % r.length],
            l = e.get('inactiveOpacity'),
            c = e.get('activeOpacity'),
            u = e.getModel('lineStyle').getLineStyle(),
            h = e.coordinateSystem,
            d = e.getData(),
            p = { normal: u.opacity, active: c, inactive: l };
          return (
            d.setVisual('color', s),
            {
              progress: function(e, t) {
                h.eachActiveState(
                  t,
                  function(e, n) {
                    var a = p[e];
                    if ('normal' === e && t.hasItemOption) {
                      var o = t.getItemModel(n).get(i, !0);
                      null != o && (a = o);
                    }
                    t.setItemVisual(n, 'opacity', a);
                  },
                  e.start,
                  e.end,
                );
              },
            }
          );
        },
      };
    },
    'qH13': function(e, t, i) {
      var n = i('ItGF'),
        a = i('QBsz').applyTransform,
        o = i('mFDi'),
        r = i('Qe9p'),
        s = i('6GrX'),
        l = i('pzxd'),
        c = i('ni6a'),
        u = i('Gev7'),
        h = i('Dagg'),
        d = i('dqUG'),
        p = i('y+Vt'),
        g = i('IMiH'),
        f = i('QuXc'),
        m = i('06Qe'),
        v = g.CMD,
        y = Math.round,
        x = Math.sqrt,
        _ = Math.abs,
        b = Math.cos,
        S = Math.sin,
        w = Math.max;
      if (!n.canvasSupported) {
        var M = 21600,
          I = M / 2,
          A = function(e) {
            (e.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;'),
              (e.coordsize = M + ',' + M),
              (e.coordorigin = '0,0');
          },
          D = function(e, t, i) {
            return 'rgb(' + [e, t, i].join(',') + ')';
          },
          T = function(e, t) {
            t && e && t.parentNode !== e && e.appendChild(t);
          },
          P = function(e, t) {
            t && e && t.parentNode === e && e.removeChild(t);
          },
          L = function(e, t, i) {
            return 1e5 * (parseFloat(e) || 0) + 1e3 * (parseFloat(t) || 0) + i;
          },
          C = function(e, t) {
            return 'string' == typeof e ? (e.lastIndexOf('%') >= 0 ? (parseFloat(e) / 100) * t : parseFloat(e)) : e;
          },
          k = function(e, t, i) {
            var n = r.parse(t);
            (i = +i), isNaN(i) && (i = 1), n && ((e.color = D(n[0], n[1], n[2])), (e.opacity = i * n[3]));
          },
          z = function(e, t, i, n) {
            var o = 'fill' === t,
              s = e.getElementsByTagName(t)[0];
            null != i[t] && 'none' !== i[t] && (o || (!o && i.lineWidth))
              ? ((e[o ? 'filled' : 'stroked'] = 'true'),
                i[t] instanceof f && P(e, s),
                s || (s = m.createNode(t)),
                o
                  ? (function(e, t, i) {
                      var n,
                        o = t.fill;
                      if (null != o)
                        if (o instanceof f) {
                          var s,
                            l = 0,
                            c = [0, 0],
                            u = 0,
                            h = 1,
                            d = i.getBoundingRect(),
                            p = d.width,
                            g = d.height;
                          if ('linear' === o.type) {
                            s = 'gradient';
                            var m = [o.x * p, o.y * g],
                              v = [o.x2 * p, o.y2 * g];
                            (y = i.transform) && (a(m, m, y), a(v, v, y)),
                              (l = (180 * Math.atan2(v[0] - m[0], v[1] - m[1])) / Math.PI) < 0 && (l += 360),
                              l < 1e-6 && (l = 0);
                          } else {
                            s = 'gradientradial';
                            var y,
                              x = i.scale,
                              _ = p,
                              b = g;
                            (c = [((m = [o.x * p, o.y * g])[0] - d.x) / _, (m[1] - d.y) / b]),
                              (y = i.transform) && a(m, m, y);
                            var S = w((_ /= x[0] * M), (b /= x[1] * M));
                            h = (2 * o.r) / S - (u = 0 / S);
                          }
                          var I = o.colorStops.slice();
                          I.sort(function(e, t) {
                            return e.offset - t.offset;
                          });
                          for (var A = I.length, T = [], P = [], L = 0; L < A; L++) {
                            var C = I[L],
                              z = ((n = r.parse(C.color)), [D(n[0], n[1], n[2]), n[3]]);
                            P.push(C.offset * h + u + ' ' + z[0]), (0 !== L && L !== A - 1) || T.push(z);
                          }
                          if (A >= 2) {
                            var O = T[0][0],
                              R = T[1][0],
                              E = T[0][1] * t.opacity,
                              V = T[1][1] * t.opacity;
                            (e.type = s),
                              (e.method = 'none'),
                              (e.focus = '100%'),
                              (e.angle = l),
                              (e.color = O),
                              (e.color2 = R),
                              (e.colors = P.join(',')),
                              (e.opacity = V),
                              (e.opacity2 = E);
                          }
                          'radial' === s && (e.focusposition = c.join(','));
                        } else k(e, o, t.opacity);
                    })(s, i, n)
                  : (function(e, t) {
                      null != t.lineDash && (e.dashstyle = t.lineDash.join(' ')),
                        null == t.stroke || t.stroke instanceof f || k(e, t.stroke, t.opacity);
                    })(s, i),
                T(e, s))
              : ((e[o ? 'filled' : 'stroked'] = 'false'), P(e, s));
          },
          O = [[], [], []];
        (p.prototype.brushVML = function(e) {
          var t = this.style,
            i = this._vmlEl;
          i || ((i = m.createNode('shape')), A(i), (this._vmlEl = i)), z(i, 'fill', t, this), z(i, 'stroke', t, this);
          var n = this.transform,
            o = null != n,
            r = i.getElementsByTagName('stroke')[0];
          if (r) {
            var s = t.lineWidth;
            o && !t.strokeNoScale && (s *= x(_(n[0] * n[3] - n[1] * n[2]))), (r.weight = s + 'px');
          }
          var l = this.path || (this.path = new g());
          this.__dirtyPath &&
            (l.beginPath(),
            (l.subPixelOptimize = !1),
            this.buildPath(l, this.shape),
            l.toStatic(),
            (this.__dirtyPath = !1)),
            (i.path = (function(e, t) {
              var i,
                n,
                o,
                r,
                s,
                l,
                c = v.M,
                u = v.C,
                h = v.L,
                d = v.A,
                p = v.Q,
                g = [],
                f = e.data,
                m = e.len();
              for (r = 0; r < m; ) {
                switch (((n = ''), (i = 0), (o = f[r++]))) {
                  case c:
                    (n = ' m '), (i = 1), (s = f[r++]), (l = f[r++]), (O[0][0] = s), (O[0][1] = l);
                    break;
                  case h:
                    (n = ' l '), (i = 1), (s = f[r++]), (l = f[r++]), (O[0][0] = s), (O[0][1] = l);
                    break;
                  case p:
                  case u:
                    (n = ' c '), (i = 3);
                    var _,
                      w,
                      A = f[r++],
                      D = f[r++],
                      T = f[r++],
                      P = f[r++];
                    o === p
                      ? ((_ = T),
                        (w = P),
                        (T = (T + 2 * A) / 3),
                        (P = (P + 2 * D) / 3),
                        (A = (s + 2 * A) / 3),
                        (D = (l + 2 * D) / 3))
                      : ((_ = f[r++]), (w = f[r++])),
                      (O[0][0] = A),
                      (O[0][1] = D),
                      (O[1][0] = T),
                      (O[1][1] = P),
                      (O[2][0] = _),
                      (O[2][1] = w),
                      (s = _),
                      (l = w);
                    break;
                  case d:
                    var L = 0,
                      C = 0,
                      k = 1,
                      z = 1,
                      R = 0;
                    t &&
                      ((L = t[4]),
                      (C = t[5]),
                      (k = x(t[0] * t[0] + t[1] * t[1])),
                      (z = x(t[2] * t[2] + t[3] * t[3])),
                      (R = Math.atan2(-t[1] / z, t[0] / k)));
                    var E = f[r++],
                      V = f[r++],
                      N = f[r++],
                      G = f[r++],
                      B = f[r++] + R,
                      Y = f[r++] + B + R;
                    r++;
                    var F = f[r++],
                      H = E + b(B) * N,
                      W = V + S(B) * G,
                      Z = ((A = E + b(Y) * N), (D = V + S(Y) * G), F ? ' wa ' : ' at ');
                    Math.abs(H - A) < 1e-4 &&
                      (Math.abs(Y - B) > 0.01
                        ? F && (H += 0.0125)
                        : Math.abs(W - V) < 1e-4
                        ? (F && H < E) || (!F && H > E)
                          ? (D -= 0.0125)
                          : (D += 0.0125)
                        : (F && W < V) || (!F && W > V)
                        ? (A += 0.0125)
                        : (A -= 0.0125)),
                      g.push(
                        Z,
                        y(((E - N) * k + L) * M - I),
                        ',',
                        y(((V - G) * z + C) * M - I),
                        ',',
                        y(((E + N) * k + L) * M - I),
                        ',',
                        y(((V + G) * z + C) * M - I),
                        ',',
                        y((H * k + L) * M - I),
                        ',',
                        y((W * z + C) * M - I),
                        ',',
                        y((A * k + L) * M - I),
                        ',',
                        y((D * z + C) * M - I),
                      ),
                      (s = A),
                      (l = D);
                    break;
                  case v.R:
                    var U = O[0],
                      j = O[1];
                    (U[0] = f[r++]),
                      (U[1] = f[r++]),
                      (j[0] = U[0] + f[r++]),
                      (j[1] = U[1] + f[r++]),
                      t && (a(U, U, t), a(j, j, t)),
                      (U[0] = y(U[0] * M - I)),
                      (j[0] = y(j[0] * M - I)),
                      (U[1] = y(U[1] * M - I)),
                      (j[1] = y(j[1] * M - I)),
                      g.push(
                        ' m ',
                        U[0],
                        ',',
                        U[1],
                        ' l ',
                        j[0],
                        ',',
                        U[1],
                        ' l ',
                        j[0],
                        ',',
                        j[1],
                        ' l ',
                        U[0],
                        ',',
                        j[1],
                      );
                    break;
                  case v.Z:
                    g.push(' x ');
                }
                if (i > 0) {
                  g.push(n);
                  for (var X = 0; X < i; X++) {
                    var q = O[X];
                    t && a(q, q, t), g.push(y(q[0] * M - I), ',', y(q[1] * M - I), X < i - 1 ? ',' : '');
                  }
                }
              }
              return g.join('');
            })(l, this.transform)),
            (i.style.zIndex = L(this.zlevel, this.z, this.z2)),
            T(e, i),
            null != t.text ? this.drawRectText(e, this.getBoundingRect()) : this.removeRectText(e);
        }),
          (p.prototype.onRemove = function(e) {
            P(e, this._vmlEl), this.removeRectText(e);
          }),
          (p.prototype.onAdd = function(e) {
            T(e, this._vmlEl), this.appendRectText(e);
          }),
          (h.prototype.brushVML = function(e) {
            var t,
              i,
              n,
              o = this.style,
              r = o.image;
            if ('object' == typeof (n = r) && n.tagName && 'IMG' === n.tagName.toUpperCase()) {
              var s = r.src;
              if (s === this._imageSrc) (t = this._imageWidth), (i = this._imageHeight);
              else {
                var l = r.runtimeStyle,
                  c = l.width,
                  u = l.height;
                (l.width = 'auto'),
                  (l.height = 'auto'),
                  (t = r.width),
                  (i = r.height),
                  (l.width = c),
                  (l.height = u),
                  (this._imageSrc = s),
                  (this._imageWidth = t),
                  (this._imageHeight = i);
              }
              r = s;
            } else r === this._imageSrc && ((t = this._imageWidth), (i = this._imageHeight));
            if (r) {
              var h = o.x || 0,
                d = o.y || 0,
                p = o.width,
                g = o.height,
                f = o.sWidth,
                v = o.sHeight,
                _ = o.sx || 0,
                b = o.sy || 0,
                S = f && v,
                M = this._vmlEl;
              M || ((M = m.doc.createElement('div')), A(M), (this._vmlEl = M));
              var I,
                D = M.style,
                P = !1,
                C = 1,
                k = 1;
              if (
                (this.transform &&
                  ((C = x((I = this.transform)[0] * I[0] + I[1] * I[1])),
                  (k = x(I[2] * I[2] + I[3] * I[3])),
                  (P = I[1] || I[2])),
                P)
              ) {
                var z = [h, d],
                  O = [h + p, d],
                  R = [h, d + g],
                  E = [h + p, d + g];
                a(z, z, I), a(O, O, I), a(R, R, I), a(E, E, I);
                var V = w(z[0], O[0], R[0], E[0]),
                  N = w(z[1], O[1], R[1], E[1]),
                  G = [];
                G.push(
                  'M11=',
                  I[0] / C,
                  ',',
                  'M12=',
                  I[2] / k,
                  ',',
                  'M21=',
                  I[1] / C,
                  ',',
                  'M22=',
                  I[3] / k,
                  ',',
                  'Dx=',
                  y(h * C + I[4]),
                  ',',
                  'Dy=',
                  y(d * k + I[5]),
                ),
                  (D.padding = '0 ' + y(V) + 'px ' + y(N) + 'px 0'),
                  (D.filter = 'progid:DXImageTransform.Microsoft.Matrix(' + G.join('') + ', SizingMethod=clip)');
              } else
                I && ((h = h * C + I[4]), (d = d * k + I[5])),
                  (D.filter = ''),
                  (D.left = y(h) + 'px'),
                  (D.top = y(d) + 'px');
              var B = this._imageEl,
                Y = this._cropEl;
              B || ((B = m.doc.createElement('div')), (this._imageEl = B));
              var F = B.style;
              if (S) {
                if (t && i) (F.width = y((C * t * p) / f) + 'px'), (F.height = y((k * i * g) / v) + 'px');
                else {
                  var H = new Image(),
                    W = this;
                  (H.onload = function() {
                    (H.onload = null),
                      (i = H.height),
                      (F.width = y((C * (t = H.width) * p) / f) + 'px'),
                      (F.height = y((k * i * g) / v) + 'px'),
                      (W._imageWidth = t),
                      (W._imageHeight = i),
                      (W._imageSrc = r);
                  }),
                    (H.src = r);
                }
                Y || (((Y = m.doc.createElement('div')).style.overflow = 'hidden'), (this._cropEl = Y));
                var Z = Y.style;
                (Z.width = y((p + (_ * p) / f) * C)),
                  (Z.height = y((g + (b * g) / v) * k)),
                  (Z.filter =
                    'progid:DXImageTransform.Microsoft.Matrix(Dx=' +
                    ((-_ * p) / f) * C +
                    ',Dy=' +
                    ((-b * g) / v) * k +
                    ')'),
                  Y.parentNode || M.appendChild(Y),
                  B.parentNode !== Y && Y.appendChild(B);
              } else
                (F.width = y(C * p) + 'px'),
                  (F.height = y(k * g) + 'px'),
                  M.appendChild(B),
                  Y && Y.parentNode && (M.removeChild(Y), (this._cropEl = null));
              var U = '',
                j = o.opacity;
              j < 1 && (U += '.Alpha(opacity=' + y(100 * j) + ') '),
                (F.filter = U +=
                  'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' + r + ', SizingMethod=scale)'),
                (M.style.zIndex = L(this.zlevel, this.z, this.z2)),
                T(e, M),
                null != o.text && this.drawRectText(e, this.getBoundingRect());
            }
          }),
          (h.prototype.onRemove = function(e) {
            P(e, this._vmlEl),
              (this._vmlEl = null),
              (this._cropEl = null),
              (this._imageEl = null),
              this.removeRectText(e);
          }),
          (h.prototype.onAdd = function(e) {
            T(e, this._vmlEl), this.appendRectText(e);
          });
        var R,
          E = {},
          V = 0,
          N = document.createElement('div');
        s.$override('measureText', function(e, t) {
          var i = m.doc;
          R ||
            (((R = i.createElement('div')).style.cssText =
              'position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;'),
            m.doc.body.appendChild(R));
          try {
            R.style.font = t;
          } catch (n) {}
          return (R.innerHTML = ''), R.appendChild(i.createTextNode(e)), { width: R.offsetWidth };
        });
        for (
          var G = new o(),
            B = function(e, t, i, n) {
              var o = this.style;
              this.__dirty && l.normalizeTextStyle(o, !0);
              var r = o.text;
              if ((null != r && (r += ''), r)) {
                if (o.rich) {
                  var c = s.parseRichText(r, o);
                  r = [];
                  for (var u = 0; u < c.lines.length; u++) {
                    for (var h = c.lines[u].tokens, d = [], p = 0; p < h.length; p++) d.push(h[p].text);
                    r.push(d.join(''));
                  }
                  r = r.join('\n');
                }
                var g,
                  f,
                  v = o.textAlign,
                  x = o.textVerticalAlign,
                  _ = (function(e) {
                    var t = E[e];
                    if (!t) {
                      V > 100 && ((V = 0), (E = {}));
                      var i,
                        n = N.style;
                      try {
                        (n.font = e), (i = n.fontFamily.split(',')[0]);
                      } catch (a) {}
                      (t = {
                        style: n.fontStyle || 'normal',
                        variant: n.fontVariant || 'normal',
                        weight: n.fontWeight || 'normal',
                        size: 0 | parseFloat(n.fontSize || 12),
                        family: i || 'Microsoft YaHei',
                      }),
                        (E[e] = t),
                        V++;
                    }
                    return t;
                  })(o.font),
                  b = _.style + ' ' + _.variant + ' ' + _.weight + ' ' + _.size + 'px "' + _.family + '"';
                i = i || s.getBoundingRect(r, b, v, x, o.textPadding, o.textLineHeight);
                var S = this.transform;
                if ((S && !n && (G.copy(t), G.applyTransform(S), (t = G)), n)) (g = t.x), (f = t.y);
                else {
                  var w = o.textPosition,
                    M = o.textDistance;
                  if (w instanceof Array)
                    (g = t.x + C(w[0], t.width)), (f = t.y + C(w[1], t.height)), (v = v || 'left');
                  else {
                    var I = s.adjustTextPositionOnRect(w, t, M);
                    (g = I.x), (f = I.y), (v = v || I.textAlign), (x = x || I.textVerticalAlign);
                  }
                }
                (g = s.adjustTextX(g, i.width, v)), (f = s.adjustTextY(f, i.height, x)), (f += i.height / 2);
                var D,
                  P,
                  k,
                  O = m.createNode,
                  R = this._textVmlEl;
                R
                  ? (P = (D = (k = R.firstChild).nextSibling).nextSibling)
                  : ((R = O('line')),
                    (D = O('path')),
                    (P = O('textpath')),
                    (k = O('skew')),
                    (P.style['v-text-align'] = 'left'),
                    A(R),
                    (D.textpathok = !0),
                    (P.on = !0),
                    (R.from = '0 0'),
                    (R.to = '1000 0.05'),
                    T(R, k),
                    T(R, D),
                    T(R, P),
                    (this._textVmlEl = R));
                var B = [g, f],
                  Y = R.style;
                S && n
                  ? (a(B, B, S),
                    (k.on = !0),
                    (k.matrix =
                      S[0].toFixed(3) + ',' + S[2].toFixed(3) + ',' + S[1].toFixed(3) + ',' + S[3].toFixed(3) + ',0,0'),
                    (k.offset = (y(B[0]) || 0) + ',' + (y(B[1]) || 0)),
                    (k.origin = '0 0'),
                    (Y.left = '0px'),
                    (Y.top = '0px'))
                  : ((k.on = !1), (Y.left = y(g) + 'px'), (Y.top = y(f) + 'px')),
                  (P.string = String(r)
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;'));
                try {
                  P.style.font = b;
                } catch (F) {}
                z(R, 'fill', { fill: o.textFill, opacity: o.opacity }, this),
                  z(R, 'stroke', { stroke: o.textStroke, opacity: o.opacity, lineDash: o.lineDash }, this),
                  (R.style.zIndex = L(this.zlevel, this.z, this.z2)),
                  T(e, R);
              }
            },
            Y = function(e) {
              P(e, this._textVmlEl), (this._textVmlEl = null);
            },
            F = function(e) {
              T(e, this._textVmlEl);
            },
            H = [c, u, h, p, d],
            W = 0;
          W < H.length;
          W++
        ) {
          var Z = H[W].prototype;
          (Z.drawRectText = B), (Z.removeRectText = Y), (Z.appendRectText = F);
        }
        (d.prototype.brushVML = function(e) {
          var t = this.style;
          null != t.text
            ? this.drawRectText(e, { x: t.x || 0, y: t.y || 0, width: 0, height: 0 }, this.getBoundingRect(), !0)
            : this.removeRectText(e);
        }),
          (d.prototype.onRemove = function(e) {
            this.removeRectText(e);
          }),
          (d.prototype.onAdd = function(e) {
            this.appendRectText(e);
          });
      }
    },
    'qJCg': function(e, t, i) {
      var n = i('BlVb'),
        a = i('mFDi'),
        o = {
          lineX: r(0),
          lineY: r(1),
          rect: {
            point: function(e, t, i) {
              return e && i.boundingRect.contain(e[0], e[1]);
            },
            rect: function(e, t, i) {
              return e && i.boundingRect.intersect(e);
            },
          },
          polygon: {
            point: function(e, t, i) {
              return e && i.boundingRect.contain(e[0], e[1]) && n.contain(i.range, e[0], e[1]);
            },
            rect: function(e, t, i) {
              var o = i.range;
              if (!e || o.length <= 1) return !1;
              var r = e.x,
                s = e.y,
                c = e.width,
                u = e.height,
                h = o[0];
              return (
                !!(
                  n.contain(o, r, s) ||
                  n.contain(o, r + c, s) ||
                  n.contain(o, r, s + u) ||
                  n.contain(o, r + c, s + u) ||
                  a.create(e).contain(h[0], h[1]) ||
                  l(r, s, r + c, s, o) ||
                  l(r, s, r, s + u, o) ||
                  l(r + c, s, r + c, s + u, o) ||
                  l(r, s + u, r + c, s + u, o)
                ) || void 0
              );
            },
          },
        };
      function r(e) {
        var t = ['x', 'y'],
          i = ['width', 'height'];
        return {
          point: function(t, i, n) {
            if (t) return s(t[e], n.range);
          },
          rect: function(n, a, o) {
            if (n) {
              var r = o.range,
                l = [n[t[e]], n[t[e]] + n[i[e]]];
              return l[1] < l[0] && l.reverse(), s(l[0], r) || s(l[1], r) || s(r[0], l) || s(r[1], l);
            }
          },
        };
      }
      function s(e, t) {
        return t[0] <= e && e <= t[1];
      }
      function l(e, t, i, n, a) {
        for (var o = 0, r = a[a.length - 1]; o < a.length; o++) {
          var s = a[o];
          if (c(e, t, i, n, s[0], s[1], r[0], r[1])) return !0;
          r = s;
        }
      }
      function c(e, t, i, n, a, o, r, s) {
        var l,
          c = u(i - e, a - r, n - t, o - s);
        if ((l = c) <= 1e-6 && l >= -1e-6) return !1;
        var h = u(a - e, a - r, o - t, o - s) / c;
        if (h < 0 || h > 1) return !1;
        var d = u(i - e, a - e, n - t, o - t) / c;
        return !(d < 0 || d > 1);
      }
      function u(e, t, i, n) {
        return e * n - t * i;
      }
      e.exports = o;
    },
    'qMZE': function(e, t, i) {
      var n = i('JEkh').extend({
        type: 'markPoint',
        defaultOption: {
          zlevel: 0,
          z: 5,
          symbol: 'pin',
          symbolSize: 50,
          tooltip: { trigger: 'item' },
          label: { show: !0, position: 'inside' },
          itemStyle: { borderWidth: 2 },
          emphasis: { label: { show: !0 } },
        },
      });
      e.exports = n;
    },
    'qZFw': function(e, t, i) {
      var n = i('bYtY'),
        a = i('6GrX'),
        o = i('hM6l'),
        r = (0, i('4NO4').makeInner)();
      function s(e, t) {
        o.call(this, 'angle', e, (t = t || [0, 360])), (this.type = 'category');
      }
      (s.prototype = {
        constructor: s,
        pointToData: function(e, t) {
          return this.polar.pointToData(e, t)['radius' === this.dim ? 0 : 1];
        },
        dataToAngle: o.prototype.dataToCoord,
        angleToData: o.prototype.coordToData,
        calculateCategoryInterval: function() {
          var e = this.getLabelModel(),
            t = this.scale,
            i = t.getExtent(),
            n = t.count();
          if (i[1] - i[0] < 1) return 0;
          var o = i[0],
            s = this.dataToCoord(o + 1) - this.dataToCoord(o),
            l = Math.abs(s),
            c = a.getBoundingRect(o, e.getFont(), 'center', 'top'),
            u = Math.max(c.height, 7) / l;
          isNaN(u) && (u = 1 / 0);
          var h = Math.max(0, Math.floor(u)),
            d = r(this.model),
            p = d.lastAutoInterval,
            g = d.lastTickCount;
          return (
            null != p && null != g && Math.abs(p - h) <= 1 && Math.abs(g - n) <= 1 && p > h
              ? (h = p)
              : ((d.lastTickCount = n), (d.lastAutoInterval = h)),
            h
          );
        },
      }),
        n.inherits(s, o),
        (e.exports = s);
    },
    'qgGe': function(e, t, i) {
      var n = i('bYtY'),
        a = i('T4UG'),
        o = i('Bsck'),
        r = i('VaxA').wrapTreePathInfo,
        s = a.extend({
          type: 'series.sunburst',
          _viewRoot: null,
          getInitialData: function(e, t) {
            var i = { name: e.name, children: e.data };
            !(function e(t) {
              var i = 0;
              n.each(t.children, function(t) {
                e(t);
                var a = t.value;
                n.isArray(a) && (a = a[0]), (i += a);
              });
              var a = t.value;
              n.isArray(a) && (a = a[0]),
                (null == a || isNaN(a)) && (a = i),
                a < 0 && (a = 0),
                n.isArray(t.value) ? (t.value[0] = a) : (t.value = a);
            })(i);
            var a = {};
            return (a.levels = e.levels || []), o.createTree(i, this, a).data;
          },
          optionUpdated: function() {
            this.resetViewRoot();
          },
          getDataParams: function(e) {
            var t = a.prototype.getDataParams.apply(this, arguments),
              i = this.getData().tree.getNodeByDataIndex(e);
            return (t.treePathInfo = r(i, this)), t;
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            center: ['50%', '50%'],
            radius: [0, '75%'],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            highlightPolicy: 'descendant',
            nodeClick: 'rootToNode',
            renderLabelForZeroData: !1,
            label: {
              rotate: 'radial',
              show: !0,
              opacity: 1,
              align: 'center',
              position: 'inside',
              distance: 5,
              silent: !0,
              emphasis: {},
            },
            itemStyle: {
              borderWidth: 1,
              borderColor: 'white',
              borderType: 'solid',
              shadowBlur: 0,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
              emphasis: {},
              highlight: { opacity: 1 },
              downplay: { opacity: 0.9 },
            },
            animationType: 'expansion',
            animationDuration: 1e3,
            animationDurationUpdate: 500,
            animationEasing: 'cubicOut',
            data: [],
            levels: [],
            sort: 'desc',
          },
          getViewRoot: function() {
            return this._viewRoot;
          },
          resetViewRoot: function(e) {
            e ? (this._viewRoot = e) : (e = this._viewRoot);
            var t = this.getRawData().tree.root;
            (e && (e === t || t.contains(e))) || (this._viewRoot = t);
          },
        });
      e.exports = s;
    },
    'qj72': function(e, t, i) {
      var n = i('bYtY');
      function a(e, t) {
        return (
          (t = t || [0, 0]),
          n.map(
            ['x', 'y'],
            function(i, n) {
              var a = this.getAxis(i),
                o = t[n],
                r = e[n] / 2;
              return 'category' === a.type ? a.getBandWidth() : Math.abs(a.dataToCoord(o - r) - a.dataToCoord(o + r));
            },
            this,
          )
        );
      }
      e.exports = function(e) {
        var t = e.grid.getRect();
        return {
          coordSys: { type: 'cartesian2d', x: t.x, y: t.y, width: t.width, height: t.height },
          api: {
            coord: function(t) {
              return e.dataToPoint(t);
            },
            size: n.bind(a, e),
          },
        };
      };
    },
    'qt/9': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY');
      i('Wqna'), i('1tlw'), i('Mylv');
      var o = i('nVfU').layout,
        r = i('f5Yq');
      i('Ae16'), n.registerLayout(a.curry(o, 'pictorialBar')), n.registerVisual(r('pictorialBar', 'roundRect'));
    },
    'qwVE': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('K4ya'),
        r = i('XxSj'),
        s = n.PRIORITY.VISUAL.COMPONENT;
      function l(e, t, i, n) {
        for (
          var a = t.targetVisuals[n],
            o = r.prepareVisualTypes(a),
            s = { color: e.getData().getVisual('color') },
            l = 0,
            c = o.length;
          l < c;
          l++
        ) {
          var u = o[l],
            h = a['opacity' === u ? '__alphaForOpacity' : u];
          h && h.applyVisual(i, d, p);
        }
        return s.color;
        function d(e) {
          return s[e];
        }
        function p(e, t) {
          s[e] = t;
        }
      }
      n.registerVisual(s, {
        createOnAllSeries: !0,
        reset: function(e, t) {
          var i = [];
          return (
            t.eachComponent('visualMap', function(t) {
              var n = e.pipelineContext;
              !t.isTargetSeries(e) ||
                (n && n.large) ||
                i.push(
                  o.incrementalApplyVisual(
                    t.stateList,
                    t.targetVisuals,
                    a.bind(t.getValueState, t),
                    t.getDataDimension(e.getData()),
                  ),
                );
            }),
            i
          );
        },
      }),
        n.registerVisual(s, {
          createOnAllSeries: !0,
          reset: function(e, t) {
            var i = e.getData(),
              n = [];
            t.eachComponent('visualMap', function(t) {
              if (t.isTargetSeries(e)) {
                var o = t.getVisualMeta(a.bind(l, null, e, t)) || { stops: [], outerColors: [] },
                  r = t.getDataDimension(i),
                  s = i.getDimensionInfo(r);
                null != s && ((o.dimension = s.index), n.push(o));
              }
            }),
              e.getData().setVisual('visualMeta', n);
          },
        });
    },
    'rfSb': function(e, t, i) {
      var n = i('T4UG'),
        a = i('sdST'),
        o = i('L0Ub').getDimensionTypeByAxis,
        r = i('YXkt'),
        s = i('bYtY'),
        l = i('4NO4').groupData,
        c = i('7aKB').encodeHTML,
        u = n.extend({
          type: 'series.themeRiver',
          dependencies: ['singleAxis'],
          nameMap: null,
          init: function(e) {
            u.superApply(this, 'init', arguments),
              (this.legendDataProvider = function() {
                return this.getRawData();
              });
          },
          fixData: function(e) {
            var t = e.length,
              i = l(e, function(e) {
                return e[2];
              }),
              n = [];
            i.buckets.each(function(e, t) {
              n.push({ name: t, dataList: e });
            });
            for (var a = n.length, o = -1, r = -1, s = 0; s < a; ++s) {
              var c = n[s].dataList.length;
              c > o && ((o = c), (r = s));
            }
            for (var u = 0; u < a; ++u)
              if (u !== r)
                for (var h = n[u].name, d = 0; d < o; ++d) {
                  for (var p = n[r].dataList[d][0], g = n[u].dataList.length, f = -1, m = 0; m < g; ++m)
                    if (n[u].dataList[m][0] === p) {
                      f = m;
                      break;
                    }
                  -1 === f && ((e[t] = []), (e[t][0] = p), (e[t][1] = 0), (e[t][2] = h), t++);
                }
            return e;
          },
          getInitialData: function(e, t) {
            for (
              var i = t
                  .queryComponents({
                    mainType: 'singleAxis',
                    index: this.get('singleAxisIndex'),
                    id: this.get('singleAxisId'),
                  })[0]
                  .get('type'),
                n = s.filter(e.data, function(e) {
                  return void 0 !== e[2];
                }),
                l = this.fixData(n || []),
                c = [],
                u = (this.nameMap = s.createHashMap()),
                h = 0,
                d = 0;
              d < l.length;
              ++d
            )
              c.push(l[d][2]), u.get(l[d][2]) || (u.set(l[d][2], h), h++);
            var p = a(l, {
                coordDimensions: ['single'],
                dimensionsDefine: [
                  { name: 'time', type: o(i) },
                  { name: 'value', type: 'float' },
                  { name: 'name', type: 'ordinal' },
                ],
                encodeDefine: { single: 0, value: 1, itemName: 2 },
              }),
              g = new r(p, this);
            return g.initData(l), g;
          },
          getLayerSeries: function() {
            for (var e = this.getData(), t = e.count(), i = [], n = 0; n < t; ++n) i[n] = n;
            var a = e.mapDimension('single'),
              o = l(i, function(t) {
                return e.get('name', t);
              }),
              r = [];
            return (
              o.buckets.each(function(t, i) {
                t.sort(function(t, i) {
                  return e.get(a, t) - e.get(a, i);
                }),
                  r.push({ name: i, indices: t });
              }),
              r
            );
          },
          getAxisTooltipData: function(e, t, i) {
            s.isArray(e) || (e = e ? [e] : []);
            for (var n, a = this.getData(), o = this.getLayerSeries(), r = [], l = o.length, c = 0; c < l; ++c) {
              for (var u = Number.MAX_VALUE, h = -1, d = o[c].indices.length, p = 0; p < d; ++p) {
                var g = a.get(e[0], o[c].indices[p]),
                  f = Math.abs(g - t);
                f <= u && ((n = g), (u = f), (h = o[c].indices[p]));
              }
              r.push(h);
            }
            return { dataIndices: r, nestestValue: n };
          },
          formatTooltip: function(e) {
            var t = this.getData(),
              i = t.getName(e),
              n = t.get(t.mapDimension('value'), e);
            return (isNaN(n) || null == n) && (n = '-'), c(i + ' : ' + n);
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'singleAxis',
            boundaryGap: ['10%', '10%'],
            singleAxisIndex: 0,
            animationEasing: 'linear',
            label: { margin: 4, show: !0, position: 'left', color: '#000', fontSize: 11 },
            emphasis: { label: { show: !0 } },
          },
        });
      e.exports = u;
    },
    'rkZ5': function(e, t, i) {
      i('Tghj');
      var n = i('ProS'),
        a = i('c8qY'),
        o = i('D9ME'),
        r = i('fls0'),
        s = i('RSch'),
        l = i('akwb'),
        c = i('o40c'),
        u = i('ZYIC'),
        h = n.extendChartView({
          type: 'lines',
          init: function() {},
          render: function(e, t, i) {
            var n = e.getData(),
              a = this._updateLineDraw(n, e),
              o = e.get('zlevel'),
              r = e.get('effect.trailLength'),
              s = i.getZr(),
              l = 'svg' === s.painter.getType();
            l || s.painter.getLayer(o).clear(!0),
              null == this._lastZlevel || l || s.configLayer(this._lastZlevel, { motionBlur: !1 }),
              this._showEffect(e) &&
                r &&
                (l || s.configLayer(o, { motionBlur: !0, lastFrameAlpha: Math.max(Math.min(r / 10 + 0.9, 1), 0) })),
              a.updateData(n),
              (this._lastZlevel = o),
              (this._finished = !0);
          },
          incrementalPrepareRender: function(e, t, i) {
            var n = e.getData();
            this._updateLineDraw(n, e).incrementalPrepareUpdate(n), this._clearLayer(i), (this._finished = !1);
          },
          incrementalRender: function(e, t, i) {
            this._lineDraw.incrementalUpdate(e, t.getData()), (this._finished = e.end === t.getData().count());
          },
          updateTransform: function(e, t, i) {
            var n = e.getData(),
              a = e.pipelineContext;
            if (!this._finished || a.large || a.progressiveRender) return { update: !0 };
            var o = u.reset(e);
            o.progress && o.progress({ start: 0, end: n.count() }, n),
              this._lineDraw.updateLayout(),
              this._clearLayer(i);
          },
          _updateLineDraw: function(e, t) {
            var i = this._lineDraw,
              n = this._showEffect(t),
              u = !!t.get('polyline'),
              h = t.pipelineContext.large;
            return (
              (i && n === this._hasEffet && u === this._isPolyline && h === this._isLargeDraw) ||
                (i && i.remove(),
                (i = this._lineDraw = h ? new c() : new a(u ? (n ? l : s) : n ? o : r)),
                (this._hasEffet = n),
                (this._isPolyline = u),
                (this._isLargeDraw = h),
                this.group.removeAll()),
              this.group.add(i.group),
              i
            );
          },
          _showEffect: function(e) {
            return !!e.get('effect.show');
          },
          _clearLayer: function(e) {
            var t = e.getZr();
            'svg' === t.painter.getType() || null == this._lastZlevel || t.painter.getLayer(this._lastZlevel).clear(!0);
          },
          remove: function(e, t) {
            this._lineDraw && this._lineDraw.remove(), (this._lineDraw = null), this._clearLayer(t);
          },
          dispose: function() {},
        });
      e.exports = h;
    },
    'rnVJ': function(e, t, i) {
      var n = i('bYtY'),
        a = ['rect', 'polygon', 'keep', 'clear'];
      e.exports = function(e, t) {
        var i = e && e.brush;
        if ((n.isArray(i) || (i = i ? [i] : []), i.length)) {
          var o = [];
          n.each(i, function(e) {
            var t = e.hasOwnProperty('toolbox') ? e.toolbox : [];
            t instanceof Array && (o = o.concat(t));
          });
          var r = e && e.toolbox;
          n.isArray(r) && (r = r[0]), r || (e.toolbox = [(r = { feature: {} })]);
          var s,
            l,
            c = r.feature || (r.feature = {}),
            u = c.brush || (c.brush = {}),
            h = u.type || (u.type = []);
          h.push.apply(h, o),
            (l = {}),
            n.each((s = h), function(e) {
              l[e] = 1;
            }),
            (s.length = 0),
            n.each(l, function(e, t) {
              s.push(t);
            }),
            t && !h.length && h.push.apply(h, a);
        }
      };
    },
    'sAZ8': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('+rIm'),
        r = i('/IIm'),
        s = i('9KIM'),
        l = i('IwbS'),
        c = ['axisLine', 'axisTickLabel', 'axisName'],
        u = n.extendComponentView({
          type: 'parallelAxis',
          init: function(e, t) {
            u.superApply(this, 'init', arguments),
              (this._brushController = new r(t.getZr())).on('brush', a.bind(this._onBrush, this));
          },
          render: function(e, t, i, n) {
            if (
              !(function(e, t, i) {
                return (
                  i && 'axisAreaSelect' === i.type && t.findComponents({ mainType: 'parallelAxis', query: i })[0] === e
                );
              })(e, t, n)
            ) {
              (this.axisModel = e), (this.api = i), this.group.removeAll();
              var r = this._axisGroup;
              if (((this._axisGroup = new l.Group()), this.group.add(this._axisGroup), e.get('show'))) {
                var s = (function(e, t) {
                    return t.getComponent('parallel', e.get('parallelIndex'));
                  })(e, t),
                  u = s.coordinateSystem,
                  h = e.getAreaSelectStyle(),
                  d = h.width,
                  p = u.getAxisLayout(e.axis.dim),
                  g = a.extend({ strokeContainThreshold: d }, p),
                  f = new o(e, g);
                a.each(c, f.add, f),
                  this._axisGroup.add(f.getGroup()),
                  this._refreshBrushController(g, h, e, s, d, i),
                  l.groupTransition(r, this._axisGroup, n && !1 === n.animation ? null : e);
              }
            }
          },
          _refreshBrushController: function(e, t, i, n, o, r) {
            var c = i.axis.getExtent(),
              u = c[1] - c[0],
              h = Math.min(30, 0.1 * Math.abs(u)),
              d = l.BoundingRect.create({ x: c[0], y: -o / 2, width: u, height: o });
            (d.x -= h),
              (d.width += 2 * h),
              this._brushController
                .mount({ enableGlobalPan: !0, rotation: e.rotation, position: e.position })
                .setPanels([
                  {
                    panelId: 'pl',
                    clipPath: s.makeRectPanelClipPath(d),
                    isTargetByCursor: s.makeRectIsTargetByCursor(d, r, n),
                    getLinearBrushOtherExtent: s.makeLinearBrushOtherExtent(d, 0),
                  },
                ])
                .enableBrush({ brushType: 'lineX', brushStyle: t, removeOnClick: !0 })
                .updateCovers(
                  (function(e) {
                    var t = e.axis;
                    return a.map(e.activeIntervals, function(e) {
                      return {
                        brushType: 'lineX',
                        panelId: 'pl',
                        range: [t.dataToCoord(e[0], !0), t.dataToCoord(e[1], !0)],
                      };
                    });
                  })(i),
                );
          },
          _onBrush: function(e, t) {
            var i = this.axisModel,
              n = i.axis,
              o = a.map(e, function(e) {
                return [n.coordToData(e.range[0], !0), n.coordToData(e.range[1], !0)];
              });
            (!i.option.realtime === t.isEnd || t.removeOnClick) &&
              this.api.dispatchAction({ type: 'axisAreaSelect', parallelAxisId: i.id, intervals: o });
          },
          dispose: function() {
            this._brushController.dispose();
          },
        });
      e.exports = u;
    },
    'sy/X': function(e, t, i) {
      'use strict';
      i.d(t, 'a', function() {
        return l;
      });
      var n = i('ofXK'),
        a = i('rDig'),
        o = i('Qk+/'),
        r = (i('z25k'), i('Zp4F')),
        s = i('fXoL'),
        l = (function() {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵmod = s.Qb({ type: e })),
            (e.ɵinj = s.Pb({
              factory: function(t) {
                return new (t || e)();
              },
              imports: [[a.a, r.a, o.a, n.c]],
            })),
            e
          );
        })();
    },
    'szbU': function(e, t, i) {
      var n = i('bYtY'),
        a = n.each;
      function o(e, t) {
        return e && e.hasOwnProperty && e.hasOwnProperty(t);
      }
      e.exports = function(e) {
        var t = e && e.visualMap;
        n.isArray(t) || (t = t ? [t] : []),
          a(t, function(e) {
            if (e) {
              o(e, 'splitList') && !o(e, 'pieces') && ((e.pieces = e.splitList), delete e.splitList);
              var t = e.pieces;
              t &&
                n.isArray(t) &&
                a(t, function(e) {
                  n.isObject(e) &&
                    (o(e, 'start') && !o(e, 'min') && (e.min = e.start),
                    o(e, 'end') && !o(e, 'max') && (e.max = e.end));
                });
            }
          });
      };
    },
    'tBnm': function(e, t, i) {
      var n = i('bYtY'),
        a = i('IwbS'),
        o = i('Qxkt'),
        r = i('Znkb'),
        s = ['axisLine', 'axisLabel', 'axisTick', 'splitLine', 'splitArea'];
      function l(e, t, i) {
        t[1] > t[0] && (t = t.slice().reverse());
        var n = e.coordToPoint([t[0], i]),
          a = e.coordToPoint([t[1], i]);
        return { x1: n[0], y1: n[1], x2: a[0], y2: a[1] };
      }
      function c(e) {
        return e.getRadiusAxis().inverse ? 0 : 1;
      }
      function u(e) {
        var t = e[0],
          i = e[e.length - 1];
        t && i && Math.abs(Math.abs(t.coord - i.coord) - 360) < 1e-4 && e.pop();
      }
      var h = r.extend({
        type: 'angleAxis',
        axisPointerClass: 'PolarAxisPointer',
        render: function(e, t) {
          if ((this.group.removeAll(), e.get('show'))) {
            var i = e.axis,
              a = i.polar,
              o = a.getRadiusAxis().getExtent(),
              r = i.getTicksCoords(),
              l = n.map(i.getViewLabels(), function(e) {
                return ((e = n.clone(e)).coord = i.dataToCoord(e.tickValue)), e;
              });
            u(l),
              u(r),
              n.each(
                s,
                function(t) {
                  !e.get(t + '.show') || (i.scale.isBlank() && 'axisLine' !== t) || this['_' + t](e, a, r, o, l);
                },
                this,
              );
          }
        },
        _axisLine: function(e, t, i, n) {
          var o = e.getModel('axisLine.lineStyle'),
            r = new a.Circle({ shape: { cx: t.cx, cy: t.cy, r: n[c(t)] }, style: o.getLineStyle(), z2: 1, silent: !0 });
          (r.style.fill = null), this.group.add(r);
        },
        _axisTick: function(e, t, i, o) {
          var r = e.getModel('axisTick'),
            s = (r.get('inside') ? -1 : 1) * r.get('length'),
            u = o[c(t)],
            h = n.map(i, function(e) {
              return new a.Line({ shape: l(t, [u, u + s], e.coord) });
            });
          this.group.add(
            a.mergePath(h, {
              style: n.defaults(r.getModel('lineStyle').getLineStyle(), { stroke: e.get('axisLine.lineStyle.color') }),
            }),
          );
        },
        _axisLabel: function(e, t, i, r, s) {
          var l = e.getCategories(!0),
            u = e.getModel('axisLabel'),
            h = u.get('margin');
          n.each(
            s,
            function(i, n) {
              var s = u,
                d = i.tickValue,
                p = r[c(t)],
                g = t.coordToPoint([p + h, i.coord]),
                f = t.cx,
                m = t.cy,
                v = Math.abs(g[0] - f) / p < 0.3 ? 'center' : g[0] > f ? 'left' : 'right',
                y = Math.abs(g[1] - m) / p < 0.3 ? 'middle' : g[1] > m ? 'top' : 'bottom';
              l && l[d] && l[d].textStyle && (s = new o(l[d].textStyle, u, u.ecModel));
              var x = new a.Text({ silent: !0 });
              this.group.add(x),
                a.setTextStyle(x.style, s, {
                  x: g[0],
                  y: g[1],
                  textFill: s.getTextColor() || e.get('axisLine.lineStyle.color'),
                  text: i.formattedLabel,
                  textAlign: v,
                  textVerticalAlign: y,
                });
            },
            this,
          );
        },
        _splitLine: function(e, t, i, o) {
          var r = e.getModel('splitLine').getModel('lineStyle'),
            s = r.get('color'),
            c = 0;
          s = s instanceof Array ? s : [s];
          for (var u = [], h = 0; h < i.length; h++) {
            var d = c++ % s.length;
            (u[d] = u[d] || []), u[d].push(new a.Line({ shape: l(t, o, i[h].coord) }));
          }
          for (h = 0; h < u.length; h++)
            this.group.add(
              a.mergePath(u[h], {
                style: n.defaults({ stroke: s[h % s.length] }, r.getLineStyle()),
                silent: !0,
                z: e.get('z'),
              }),
            );
        },
        _splitArea: function(e, t, i, o) {
          if (i.length) {
            var r = e.getModel('splitArea').getModel('areaStyle'),
              s = r.get('color'),
              l = 0;
            s = s instanceof Array ? s : [s];
            for (
              var c = [],
                u = Math.PI / 180,
                h = -i[0].coord * u,
                d = Math.min(o[0], o[1]),
                p = Math.max(o[0], o[1]),
                g = e.get('clockwise'),
                f = 1;
              f < i.length;
              f++
            ) {
              var m = l++ % s.length;
              (c[m] = c[m] || []),
                c[m].push(
                  new a.Sector({
                    shape: { cx: t.cx, cy: t.cy, r0: d, r: p, startAngle: h, endAngle: -i[f].coord * u, clockwise: g },
                    silent: !0,
                  }),
                ),
                (h = -i[f].coord * u);
            }
            for (f = 0; f < c.length; f++)
              this.group.add(
                a.mergePath(c[f], { style: n.defaults({ fill: s[f % s.length] }, r.getAreaStyle()), silent: !0 }),
              );
          }
        },
      });
      e.exports = h;
    },
    'tceW': function(e, t, i) {
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
      e.exports = {
        getBarItemStyle: function(e) {
          var t = n(this, e);
          if (this.getBorderLineDash) {
            var i = this.getBorderLineDash();
            i && (t.lineDash = i);
          }
          return t;
        },
      };
    },
    'uOyE': function(e, t, i) {
      var n = i('ProS');
      n.registerAction({ type: 'brush', event: 'brush' }, function(e, t) {
        t.eachComponent({ mainType: 'brush', query: e }, function(t) {
          t.setAreas(e.areas);
        });
      }),
        n.registerAction({ type: 'brushSelect', event: 'brushSelected', update: 'none' }, function() {});
    },
    'vF/C': function(e, t, i) {
      i('bLfw').registerSubTypeDefaulter('visualMap', function(e) {
        return e.categories || ((e.pieces ? e.pieces.length > 0 : e.splitNumber > 0) && !e.calculable)
          ? 'piecewise'
          : 'continuous';
      });
    },
    'vL6D': function(e, t, i) {
      var n = i('bYtY'),
        a = i('+rIm'),
        o = i('IwbS'),
        r = i('7bkD'),
        s = i('Znkb'),
        l = ['axisLine', 'axisTickLabel', 'axisName'],
        c = s.extend({
          type: 'singleAxis',
          axisPointerClass: 'SingleAxisPointer',
          render: function(e, t, i, o) {
            var s = this.group;
            s.removeAll();
            var u = r.layout(e),
              h = new a(e, u);
            n.each(l, h.add, h),
              s.add(h.getGroup()),
              e.get('splitLine.show') && this._splitLine(e),
              c.superCall(this, 'render', e, t, i, o);
          },
          _splitLine: function(e) {
            var t = e.axis;
            if (!t.scale.isBlank()) {
              var i = e.getModel('splitLine'),
                n = i.getModel('lineStyle'),
                a = n.get('width'),
                r = n.get('color');
              r = r instanceof Array ? r : [r];
              for (
                var s = e.coordinateSystem.getRect(),
                  l = t.isHorizontal(),
                  c = [],
                  u = 0,
                  h = t.getTicksCoords({ tickModel: i }),
                  d = [],
                  p = [],
                  g = 0;
                g < h.length;
                ++g
              ) {
                var f = t.toGlobalCoord(h[g].coord);
                l
                  ? ((d[0] = f), (d[1] = s.y), (p[0] = f), (p[1] = s.y + s.height))
                  : ((d[0] = s.x), (d[1] = f), (p[0] = s.x + s.width), (p[1] = f));
                var m = u++ % r.length;
                (c[m] = c[m] || []),
                  c[m].push(
                    new o.Line(
                      o.subPixelOptimizeLine({
                        shape: { x1: d[0], y1: d[1], x2: p[0], y2: p[1] },
                        style: { lineWidth: a },
                        silent: !0,
                      }),
                    ),
                  );
              }
              for (g = 0; g < c.length; ++g)
                this.group.add(
                  o.mergePath(c[g], {
                    style: { stroke: r[g % r.length], lineDash: n.getLineDash(a), lineWidth: a },
                    silent: !0,
                  }),
                );
            }
          },
        });
      e.exports = c;
    },
    'vZI5': function(e, t, i) {
      var n = i('bYtY'),
        a = i('T4UG'),
        o = i('5GhG').seriesModelMixin,
        r = a.extend({
          type: 'series.candlestick',
          dependencies: ['xAxis', 'yAxis', 'grid'],
          defaultValueDimensions: [
            { name: 'open', defaultTooltip: !0 },
            { name: 'close', defaultTooltip: !0 },
            { name: 'lowest', defaultTooltip: !0 },
            { name: 'highest', defaultTooltip: !0 },
          ],
          dimensions: null,
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'cartesian2d',
            legendHoverLink: !0,
            hoverAnimation: !0,
            layout: null,
            itemStyle: {
              color: '#c23531',
              color0: '#314656',
              borderWidth: 1,
              borderColor: '#c23531',
              borderColor0: '#314656',
            },
            emphasis: { itemStyle: { borderWidth: 2 } },
            barMaxWidth: null,
            barMinWidth: null,
            barWidth: null,
            large: !0,
            largeThreshold: 600,
            progressive: 3e3,
            progressiveThreshold: 1e4,
            progressiveChunkMode: 'mod',
            animationUpdate: !1,
            animationEasing: 'linear',
            animationDuration: 300,
          },
          getShadowDim: function() {
            return 'open';
          },
          brushSelector: function(e, t, i) {
            var n = t.getItemLayout(e);
            return n && i.rect(n.brushRect);
          },
        });
      n.mixin(r, o, !0), (e.exports = r);
    },
    'wt3j': function(e, t, i) {
      var n = i('ProS'),
        a = i('bYtY'),
        o = i('/IIm'),
        r = n.extendComponentView({
          type: 'brush',
          init: function(e, t) {
            (this.ecModel = e),
              (this.api = t),
              (this._brushController = new o(t.getZr())).on('brush', a.bind(this._onBrush, this)).mount();
          },
          render: function(e) {
            return (this.model = e), s.apply(this, arguments);
          },
          updateTransform: s,
          updateView: s,
          dispose: function() {
            this._brushController.dispose();
          },
          _onBrush: function(e, t) {
            var i = this.model.id;
            this.model.brushTargetManager.setOutputRanges(e, this.ecModel),
              (!t.isEnd || t.removeOnClick) &&
                this.api.dispatchAction({ type: 'brush', brushId: i, areas: a.clone(e), $from: i });
          },
        });
      function s(e, t, i, n) {
        (!n || n.$from !== e.id) &&
          this._brushController
            .setPanels(e.brushTargetManager.makePanelOpts(i))
            .enableBrush(e.brushOption)
            .updateCovers(e.areas.slice());
      }
      e.exports = r;
    },
    'xRUu': function(e, t, i) {
      i('hJvP'), i('hFmY'), i('sAZ8');
    },
    'xiyX': function(e, t, i) {
      var n = i('bYtY'),
        a = i('bLfw'),
        o = i('nkfE'),
        r = i('ICMv'),
        s = a.extend({
          type: 'singleAxis',
          layoutMode: 'box',
          axis: null,
          coordinateSystem: null,
          getCoordSysModel: function() {
            return this;
          },
        });
      n.merge(s.prototype, r),
        o(
          'single',
          s,
          function(e, t) {
            return t.type || (t.data ? 'category' : 'value');
          },
          {
            left: '5%',
            top: '5%',
            right: '5%',
            bottom: '5%',
            type: 'value',
            position: 'bottom',
            orient: 'horizontal',
            axisLine: { show: !0, lineStyle: { width: 2, type: 'solid' } },
            tooltip: { show: !0 },
            axisTick: { show: !0, length: 6, lineStyle: { width: 2 } },
            axisLabel: { show: !0, interval: 'auto' },
            splitLine: { show: !0, lineStyle: { type: 'dashed', opacity: 0.2 } },
          },
        ),
        (e.exports = s);
    },
    'y2l5': function(e, t, i) {
      var n = i('MwEJ'),
        a = i('T4UG').extend({
          type: 'series.scatter',
          dependencies: ['grid', 'polar', 'geo', 'singleAxis', 'calendar'],
          getInitialData: function(e, t) {
            return n(this.getSource(), this);
          },
          brushSelector: 'point',
          getProgressive: function() {
            var e = this.option.progressive;
            return null == e ? (this.option.large ? 5e3 : this.get('progressive')) : e;
          },
          getProgressiveThreshold: function() {
            var e = this.option.progressiveThreshold;
            return null == e ? (this.option.large ? 1e4 : this.get('progressiveThreshold')) : e;
          },
          defaultOption: {
            coordinateSystem: 'cartesian2d',
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            symbolSize: 10,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: { opacity: 0.8 },
          },
        });
      e.exports = a;
    },
    'y3NT': function(e, t, i) {
      var n = i('OELB').parsePercent,
        a = i('bYtY'),
        o = (Math, Math.PI / 180);
      e.exports = function(e, t, i, r) {
        t.eachSeriesByType(e, function(e) {
          var t = e.get('center'),
            r = e.get('radius');
          a.isArray(r) || (r = [0, r]), a.isArray(t) || (t = [t, t]);
          var s = i.getWidth(),
            l = i.getHeight(),
            c = Math.min(s, l),
            u = n(t[0], s),
            h = n(t[1], l),
            d = n(r[0], c / 2),
            p = n(r[1], c / 2),
            g = -e.get('startAngle') * o,
            f = e.get('minAngle') * o,
            m = e.getData().tree.root,
            v = e.getViewRoot(),
            y = v.depth,
            x = e.get('sort');
          null != x &&
            (function e(t, i) {
              var n = t.children || [];
              (t.children = (function(e, t) {
                if ('function' == typeof t) return e.sort(t);
                var i = 'asc' === t;
                return e.sort(function(e, t) {
                  var n = (e.getValue() - t.getValue()) * (i ? 1 : -1);
                  return 0 === n ? (e.dataIndex - t.dataIndex) * (i ? -1 : 1) : n;
                });
              })(n, i)),
                n.length &&
                  a.each(t.children, function(t) {
                    e(t, i);
                  });
            })(v, x);
          var _ = 0;
          a.each(v.children, function(e) {
            !isNaN(e.getValue()) && _++;
          });
          var b = v.getValue(),
            S = (Math.PI / (b || _)) * 2,
            w = v.depth > 0,
            M = (p - d) / (v.height - (w ? -1 : 1) || 1),
            I = e.get('clockwise'),
            A = e.get('stillShowZeroSum'),
            D = I ? 1 : -1;
          if (w) {
            var T = 2 * Math.PI;
            m.setLayout({ angle: T, startAngle: g, endAngle: g + T, clockwise: I, cx: u, cy: h, r0: d, r: d + M });
          }
          !(function e(t, i) {
            if (t) {
              var o = i;
              if (t !== m) {
                var r = t.getValue(),
                  s = 0 === b && A ? S : r * S;
                s < f && (s = f), (o = i + D * s);
                var l = t.depth - y - (w ? -1 : 1),
                  p = d + M * l,
                  g = d + M * (l + 1),
                  v = t.getModel();
                null != v.get('r0') && (p = n(v.get('r0'), c / 2)),
                  null != v.get('r') && (g = n(v.get('r'), c / 2)),
                  t.setLayout({ angle: s, startAngle: i, endAngle: o, clockwise: I, cx: u, cy: h, r0: p, r: g });
              }
              if (t.children && t.children.length) {
                var x = 0;
                a.each(t.children, function(t) {
                  x += e(t, i + x);
                });
              }
              return o - i;
            }
          })(v, g);
        });
      };
    },
    'y7Aq': function(e, t, i) {
      var n = i('bYtY'),
        a = i('+TT/').getLayoutRect;
      (t.getItemAlign = function(e, t, i) {
        var n = e.option,
          o = n.align;
        if (null != o && 'auto' !== o) return o;
        for (
          var r = { width: t.getWidth(), height: t.getHeight() },
            s = 'horizontal' === n.orient ? 1 : 0,
            l = [
              ['left', 'right', 'width'],
              ['top', 'bottom', 'height'],
            ],
            c = l[s],
            u = [0, null, 10],
            h = {},
            d = 0;
          d < 3;
          d++
        )
          (h[l[1 - s][d]] = u[d]), (h[c[d]] = 2 === d ? i[0] : n[c[d]]);
        var p = [
            ['x', 'width', 3],
            ['y', 'height', 0],
          ][s],
          g = a(h, r, n.padding);
        return c[(g.margin[p[2]] || 0) + g[p[0]] + 0.5 * g[p[1]] < 0.5 * r[p[1]] ? 0 : 1];
      }),
        (t.convertDataIndex = function(e) {
          return (
            n.each(e || [], function(t) {
              null != e.dataIndex && ((e.dataIndexInside = e.dataIndex), (e.dataIndex = null));
            }),
            e
          );
        });
    },
    'yO87': function(e, t, i) {
      var n = i('bYtY'),
        a = i('oVpE').createSymbol,
        o = i('IwbS').Group,
        r = i('OELB').parsePercent,
        s = i('FBjb');
      function l(e, t) {
        e.eachChild(function(e) {
          e.attr({
            z: t.z,
            zlevel: t.zlevel,
            style: { stroke: 'stroke' === t.brushType ? t.color : null, fill: 'fill' === t.brushType ? t.color : null },
          });
        });
      }
      function c(e, t) {
        o.call(this);
        var i = new s(e, t),
          n = new o();
        this.add(i),
          this.add(n),
          (n.beforeUpdate = function() {
            this.attr(i.getScale());
          }),
          this.updateData(e, t);
      }
      var u = c.prototype;
      (u.stopEffectAnimation = function() {
        this.childAt(1).removeAll();
      }),
        (u.startEffectAnimation = function(e) {
          for (var t = e.symbolType, i = e.color, n = this.childAt(1), o = 0; o < 3; o++) {
            var r = a(t, -1, -1, 2, 2, i);
            r.attr({ style: { strokeNoScale: !0 }, z2: 99, silent: !0, scale: [0.5, 0.5] });
            var s = (-o / 3) * e.period + e.effectOffset;
            r
              .animate('', !0)
              .when(e.period, { scale: [e.rippleScale / 2, e.rippleScale / 2] })
              .delay(s)
              .start(),
              r
                .animateStyle(!0)
                .when(e.period, { opacity: 0 })
                .delay(s)
                .start(),
              n.add(r);
          }
          l(n, e);
        }),
        (u.updateEffectAnimation = function(e) {
          for (
            var t = this._effectCfg, i = this.childAt(1), n = ['symbolType', 'period', 'rippleScale'], a = 0;
            a < n.length;
            a++
          ) {
            var o = n[a];
            if (t[o] !== e[o]) return this.stopEffectAnimation(), void this.startEffectAnimation(e);
          }
          l(i, e);
        }),
        (u.highlight = function() {
          this.trigger('emphasis');
        }),
        (u.downplay = function() {
          this.trigger('normal');
        }),
        (u.updateData = function(e, t) {
          var i = e.hostModel;
          this.childAt(0).updateData(e, t);
          var a = this.childAt(1),
            o = e.getItemModel(t),
            s = e.getItemVisual(t, 'symbol'),
            l = (function(e) {
              return n.isArray(e) || (e = [+e, +e]), e;
            })(e.getItemVisual(t, 'symbolSize')),
            c = e.getItemVisual(t, 'color');
          a.attr('scale', l),
            a.traverse(function(e) {
              e.attr({ fill: c });
            });
          var u = o.getShallow('symbolOffset');
          if (u) {
            var h = a.position;
            (h[0] = r(u[0], l[0])), (h[1] = r(u[1], l[1]));
          }
          a.rotation = ((o.getShallow('symbolRotate') || 0) * Math.PI) / 180 || 0;
          var d = {};
          if (
            ((d.showEffectOn = i.get('showEffectOn')),
            (d.rippleScale = o.get('rippleEffect.scale')),
            (d.brushType = o.get('rippleEffect.brushType')),
            (d.period = 1e3 * o.get('rippleEffect.period')),
            (d.effectOffset = t / e.count()),
            (d.z = o.getShallow('z') || 0),
            (d.zlevel = o.getShallow('zlevel') || 0),
            (d.symbolType = s),
            (d.color = c),
            this.off('mouseover')
              .off('mouseout')
              .off('emphasis')
              .off('normal'),
            'render' === d.showEffectOn)
          )
            this._effectCfg ? this.updateEffectAnimation(d) : this.startEffectAnimation(d), (this._effectCfg = d);
          else {
            (this._effectCfg = null), this.stopEffectAnimation();
            var p = this.childAt(0),
              g = function() {
                p.highlight(), 'render' !== d.showEffectOn && this.startEffectAnimation(d);
              },
              f = function() {
                p.downplay(), 'render' !== d.showEffectOn && this.stopEffectAnimation();
              };
            this.on('mouseover', g, this)
              .on('mouseout', f, this)
              .on('emphasis', g, this)
              .on('normal', f, this);
          }
          this._effectCfg = d;
        }),
        (u.fadeOut = function(e) {
          this.off('mouseover')
            .off('mouseout')
            .off('emphasis')
            .off('normal'),
            e && e();
        }),
        n.inherits(c, o),
        (e.exports = c);
    },
    'yS9w': function(e, t, i) {
      var n = i('MEGo'),
        a = n.parseSVG,
        o = n.makeViewBoxTransform,
        r = i('4fz+'),
        s = i('x6Kt'),
        l = i('bYtY'),
        c = l.assert,
        u = l.createHashMap,
        h = i('mFDi'),
        d = (0, i('4NO4').makeInner)();
      function p(e, t) {
        var i,
          n,
          l = e.svgXML;
        try {
          (i = (l && a(l, { ignoreViewBox: !0, ignoreRootClip: !0 })) || {}), c(null != (n = i.root));
        } catch (m) {
          throw new Error('Invalid svg format\n' + m.message);
        }
        var u = i.width,
          d = i.height,
          p = i.viewBoxRect;
        if (
          (t ||
            ((t = null == u || null == d ? n.getBoundingRect() : new h(0, 0, 0, 0)),
            null != u && (t.width = u),
            null != d && (t.height = d)),
          p)
        ) {
          var g = o(p, t.width, t.height),
            f = n;
          (n = new r()).add(f), (f.scale = g.scale), (f.position = g.position);
        }
        return n.setClipPath(new s({ shape: t.plain() })), { root: n, boundingRect: t };
      }
      e.exports = {
        load: function(e, t) {
          var i = d(t).originRoot;
          if (i) return { root: i, boundingRect: d(t).boundingRect };
          var n = p(t);
          return (d(t).originRoot = n.root), (d(t).boundingRect = n.boundingRect), n;
        },
        makeGraphic: function(e, t, i) {
          var n = d(t),
            a = n.rootMap || (n.rootMap = u()),
            o = a.get(i);
          if (o) return o;
          var r = n.originRoot;
          return (
            n.originRootHostKey ? (o = p(t, n.boundingRect).root) : ((n.originRootHostKey = i), (o = r)), a.set(i, o)
          );
        },
        removeGraphic: function(e, t, i) {
          var n = d(t),
            a = n.rootMap;
          a && a.removeKey(i), i === n.originRootHostKey && (n.originRootHostKey = null);
        },
      };
    },
    'yWXo': function(e, t, i) {
      var n = i('IwbS'),
        a = i('oVpE').createSymbol,
        o = i('OS9S'),
        r = n.extendShape({
          shape: { points: null },
          symbolProxy: null,
          buildPath: function(e, t) {
            var i = t.points,
              n = t.size,
              a = this.symbolProxy,
              o = a.shape;
            if (!((e.getContext ? e.getContext() : e) && n[0] < 4))
              for (var r = 0; r < i.length; ) {
                var s = i[r++],
                  l = i[r++];
                isNaN(s) ||
                  isNaN(l) ||
                  ((o.x = s - n[0] / 2),
                  (o.y = l - n[1] / 2),
                  (o.width = n[0]),
                  (o.height = n[1]),
                  a.buildPath(e, o, !0));
              }
          },
          afterBrush: function(e) {
            var t = this.shape,
              i = t.points,
              n = t.size;
            if (n[0] < 4) {
              this.setTransform(e);
              for (var a = 0; a < i.length; ) {
                var o = i[a++],
                  r = i[a++];
                isNaN(o) || isNaN(r) || e.fillRect(o - n[0] / 2, r - n[1] / 2, n[0], n[1]);
              }
              this.restoreTransform(e);
            }
          },
          findDataIndex: function(e, t) {
            for (
              var i = this.shape,
                n = i.points,
                a = i.size,
                o = Math.max(a[0], 4),
                r = Math.max(a[1], 4),
                s = n.length / 2 - 1;
              s >= 0;
              s--
            ) {
              var l = 2 * s,
                c = n[l] - o / 2,
                u = n[l + 1] - r / 2;
              if (e >= c && t >= u && e <= c + o && t <= u + r) return s;
            }
            return -1;
          },
        });
      function s() {
        this.group = new n.Group();
      }
      var l = s.prototype;
      (l.isPersistent = function() {
        return !this._incremental;
      }),
        (l.updateData = function(e) {
          this.group.removeAll();
          var t = new r({ rectHover: !0, cursor: 'default' });
          t.setShape({ points: e.getLayout('symbolPoints') }),
            this._setCommon(t, e),
            this.group.add(t),
            (this._incremental = null);
        }),
        (l.updateLayout = function(e) {
          if (!this._incremental) {
            var t = e.getLayout('symbolPoints');
            this.group.eachChild(function(e) {
              null != e.startIndex &&
                (t = new Float32Array(t.buffer, 4 * e.startIndex * 2, 2 * (e.endIndex - e.startIndex))),
                e.setShape('points', t);
            });
          }
        }),
        (l.incrementalPrepareUpdate = function(e) {
          this.group.removeAll(),
            this._clearIncremental(),
            e.count() > 2e6
              ? (this._incremental || (this._incremental = new o({ silent: !0 })), this.group.add(this._incremental))
              : (this._incremental = null);
        }),
        (l.incrementalUpdate = function(e, t) {
          var i;
          this._incremental
            ? ((i = new r()), this._incremental.addDisplayable(i, !0))
            : (((i = new r({
                rectHover: !0,
                cursor: 'default',
                startIndex: e.start,
                endIndex: e.end,
              })).incremental = !0),
              this.group.add(i)),
            i.setShape({ points: t.getLayout('symbolPoints') }),
            this._setCommon(i, t, !!this._incremental);
        }),
        (l._setCommon = function(e, t, i) {
          var n = t.hostModel,
            o = t.getVisual('symbolSize');
          e.setShape('size', o instanceof Array ? o : [o, o]),
            (e.symbolProxy = a(t.getVisual('symbol'), 0, 0, 0, 0)),
            (e.setColor = e.symbolProxy.setColor);
          var r = e.shape.size[0] < 4;
          e.useStyle(n.getModel('itemStyle').getItemStyle(r ? ['color', 'shadowBlur', 'shadowColor'] : ['color']));
          var s = t.getVisual('color');
          s && e.setColor(s),
            i ||
              ((e.seriesIndex = n.seriesIndex),
              e.on('mousemove', function(t) {
                e.dataIndex = null;
                var i = e.findDataIndex(t.offsetX, t.offsetY);
                i >= 0 && (e.dataIndex = i + (e.startIndex || 0));
              }));
        }),
        (l.remove = function() {
          this._clearIncremental(), (this._incremental = null), this.group.removeAll();
        }),
        (l._clearIncremental = function() {
          var e = this._incremental;
          e && e.clearDisplaybles();
        }),
        (e.exports = s);
    },
    'z25k': function(e, t, i) {
      'use strict';
      var n = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              id: '01',
              properties: { name: 'Alabama' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-87.359296, 35.00118],
                    [-85.606675, 34.984749],
                    [-85.431413, 34.124869],
                    [-85.184951, 32.859696],
                    [-85.069935, 32.580372],
                    [-84.960397, 32.421541],
                    [-85.004212, 32.322956],
                    [-84.889196, 32.262709],
                    [-85.058981, 32.13674],
                    [-85.053504, 32.01077],
                    [-85.141136, 31.840985],
                    [-85.042551, 31.539753],
                    [-85.113751, 31.27686],
                    [-85.004212, 31.003013],
                    [-85.497137, 30.997536],
                    [-87.600282, 30.997536],
                    [-87.633143, 30.86609],
                    [-87.408589, 30.674397],
                    [-87.446927, 30.510088],
                    [-87.37025, 30.427934],
                    [-87.518128, 30.280057],
                    [-87.655051, 30.247195],
                    [-87.90699, 30.411504],
                    [-87.934375, 30.657966],
                    [-88.011052, 30.685351],
                    [-88.10416, 30.499135],
                    [-88.137022, 30.318396],
                    [-88.394438, 30.367688],
                    [-88.471115, 31.895754],
                    [-88.241084, 33.796253],
                    [-88.098683, 34.891641],
                    [-88.202745, 34.995703],
                    [-87.359296, 35.00118],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '02',
              properties: { name: 'Alaska' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-131.602021, 55.117982],
                      [-131.569159, 55.28229],
                      [-131.355558, 55.183705],
                      [-131.38842, 55.01392],
                      [-131.645836, 55.035827],
                      [-131.602021, 55.117982],
                    ],
                  ],
                  [
                    [
                      [-131.832052, 55.42469],
                      [-131.645836, 55.304197],
                      [-131.749898, 55.128935],
                      [-131.832052, 55.189182],
                      [-131.832052, 55.42469],
                    ],
                  ],
                  [
                    [
                      [-132.976733, 56.437924],
                      [-132.735747, 56.459832],
                      [-132.631685, 56.421493],
                      [-132.664547, 56.273616],
                      [-132.878148, 56.240754],
                      [-133.069841, 56.333862],
                      [-132.976733, 56.437924],
                    ],
                  ],
                  [
                    [
                      [-133.595627, 56.350293],
                      [-133.162949, 56.317431],
                      [-133.05341, 56.125739],
                      [-132.620732, 55.912138],
                      [-132.472854, 55.780691],
                      [-132.4619, 55.671152],
                      [-132.357838, 55.649245],
                      [-132.341408, 55.506844],
                      [-132.166146, 55.364444],
                      [-132.144238, 55.238474],
                      [-132.029222, 55.276813],
                      [-131.97993, 55.178228],
                      [-131.958022, 54.789365],
                      [-132.029222, 54.701734],
                      [-132.308546, 54.718165],
                      [-132.385223, 54.915335],
                      [-132.483808, 54.898904],
                      [-132.686455, 55.046781],
                      [-132.746701, 54.997489],
                      [-132.916486, 55.046781],
                      [-132.889102, 54.898904],
                      [-132.73027, 54.937242],
                      [-132.626209, 54.882473],
                      [-132.675501, 54.679826],
                      [-132.867194, 54.701734],
                      [-133.157472, 54.95915],
                      [-133.239626, 55.090597],
                      [-133.223195, 55.22752],
                      [-133.453227, 55.216566],
                      [-133.453227, 55.320628],
                      [-133.277964, 55.331582],
                      [-133.102702, 55.42469],
                      [-133.17938, 55.588998],
                      [-133.387503, 55.62186],
                      [-133.420365, 55.884753],
                      [-133.497042, 56.0162],
                      [-133.639442, 55.923092],
                      [-133.694212, 56.070969],
                      [-133.546335, 56.142169],
                      [-133.666827, 56.311955],
                      [-133.595627, 56.350293],
                    ],
                  ],
                  [
                    [
                      [-133.738027, 55.556137],
                      [-133.546335, 55.490413],
                      [-133.414888, 55.572568],
                      [-133.283441, 55.534229],
                      [-133.420365, 55.386352],
                      [-133.633966, 55.430167],
                      [-133.738027, 55.556137],
                    ],
                  ],
                  [
                    [
                      [-133.907813, 56.930849],
                      [-134.050213, 57.029434],
                      [-133.885905, 57.095157],
                      [-133.343688, 57.002049],
                      [-133.102702, 57.007526],
                      [-132.932917, 56.82131],
                      [-132.620732, 56.667956],
                      [-132.653593, 56.55294],
                      [-132.817901, 56.492694],
                      [-133.042456, 56.520078],
                      [-133.201287, 56.448878],
                      [-133.420365, 56.492694],
                      [-133.66135, 56.448878],
                      [-133.710643, 56.684386],
                      [-133.688735, 56.837741],
                      [-133.869474, 56.843218],
                      [-133.907813, 56.930849],
                    ],
                  ],
                  [
                    [
                      [-134.115936, 56.48174],
                      [-134.25286, 56.558417],
                      [-134.400737, 56.722725],
                      [-134.417168, 56.848695],
                      [-134.296675, 56.908941],
                      [-134.170706, 56.848695],
                      [-134.143321, 56.952757],
                      [-133.748981, 56.772017],
                      [-133.710643, 56.596755],
                      [-133.847566, 56.574848],
                      [-133.935197, 56.377678],
                      [-133.836612, 56.322908],
                      [-133.957105, 56.092877],
                      [-134.110459, 56.142169],
                      [-134.132367, 55.999769],
                      [-134.230952, 56.070969],
                      [-134.291198, 56.350293],
                      [-134.115936, 56.48174],
                    ],
                  ],
                  [
                    [
                      [-134.636246, 56.28457],
                      [-134.669107, 56.169554],
                      [-134.806031, 56.235277],
                      [-135.178463, 56.67891],
                      [-135.413971, 56.810356],
                      [-135.331817, 56.914418],
                      [-135.424925, 57.166357],
                      [-135.687818, 57.369004],
                      [-135.419448, 57.566174],
                      [-135.298955, 57.48402],
                      [-135.063447, 57.418296],
                      [-134.849846, 57.407343],
                      [-134.844369, 57.248511],
                      [-134.636246, 56.728202],
                      [-134.636246, 56.28457],
                    ],
                  ],
                  [
                    [
                      [-134.712923, 58.223407],
                      [-134.373353, 58.14673],
                      [-134.176183, 58.157683],
                      [-134.187137, 58.081006],
                      [-133.902336, 57.807159],
                      [-134.099505, 57.850975],
                      [-134.148798, 57.757867],
                      [-133.935197, 57.615466],
                      [-133.869474, 57.363527],
                      [-134.083075, 57.297804],
                      [-134.154275, 57.210173],
                      [-134.499322, 57.029434],
                      [-134.603384, 57.034911],
                      [-134.6472, 57.226604],
                      [-134.575999, 57.341619],
                      [-134.608861, 57.511404],
                      [-134.729354, 57.719528],
                      [-134.707446, 57.829067],
                      [-134.784123, 58.097437],
                      [-134.91557, 58.212453],
                      [-134.953908, 58.409623],
                      [-134.712923, 58.223407],
                    ],
                  ],
                  [
                    [
                      [-135.857603, 57.330665],
                      [-135.715203, 57.330665],
                      [-135.567326, 57.149926],
                      [-135.633049, 57.023957],
                      [-135.857603, 56.996572],
                      [-135.824742, 57.193742],
                      [-135.857603, 57.330665],
                    ],
                  ],
                  [
                    [
                      [-136.279328, 58.206976],
                      [-135.978096, 58.201499],
                      [-135.780926, 58.28913],
                      [-135.496125, 58.168637],
                      [-135.64948, 58.037191],
                      [-135.59471, 57.987898],
                      [-135.45231, 58.135776],
                      [-135.107263, 58.086483],
                      [-134.91557, 57.976944],
                      [-135.025108, 57.779775],
                      [-134.937477, 57.763344],
                      [-134.822462, 57.500451],
                      [-135.085355, 57.462112],
                      [-135.572802, 57.675713],
                      [-135.556372, 57.456635],
                      [-135.709726, 57.369004],
                      [-135.890465, 57.407343],
                      [-136.000004, 57.544266],
                      [-136.208128, 57.637374],
                      [-136.366959, 57.829067],
                      [-136.569606, 57.916698],
                      [-136.558652, 58.075529],
                      [-136.421728, 58.130299],
                      [-136.377913, 58.267222],
                      [-136.279328, 58.206976],
                    ],
                  ],
                  [
                    [
                      [-147.079854, 60.200582],
                      [-147.501579, 59.948643],
                      [-147.53444, 59.850058],
                      [-147.874011, 59.784335],
                      [-147.80281, 59.937689],
                      [-147.435855, 60.09652],
                      [-147.205824, 60.271782],
                      [-147.079854, 60.200582],
                    ],
                  ],
                  [
                    [
                      [-147.561825, 60.578491],
                      [-147.616594, 60.370367],
                      [-147.758995, 60.156767],
                      [-147.956165, 60.227967],
                      [-147.791856, 60.474429],
                      [-147.561825, 60.578491],
                    ],
                  ],
                  [
                    [
                      [-147.786379, 70.245291],
                      [-147.682318, 70.201475],
                      [-147.162008, 70.15766],
                      [-146.888161, 70.185044],
                      [-146.510252, 70.185044],
                      [-146.099482, 70.146706],
                      [-145.858496, 70.168614],
                      [-145.622988, 70.08646],
                      [-145.195787, 69.993352],
                      [-144.620708, 69.971444],
                      [-144.461877, 70.026213],
                      [-144.078491, 70.059075],
                      [-143.914183, 70.130275],
                      [-143.497935, 70.141229],
                      [-143.503412, 70.091936],
                      [-143.25695, 70.119321],
                      [-142.747594, 70.042644],
                      [-142.402547, 69.916674],
                      [-142.079408, 69.856428],
                      [-142.008207, 69.801659],
                      [-141.712453, 69.790705],
                      [-141.433129, 69.697597],
                      [-141.378359, 69.63735],
                      [-141.208574, 69.686643],
                      [-141.00045, 69.648304],
                      [-141.00045, 60.304644],
                      [-140.53491, 60.22249],
                      [-140.474664, 60.310121],
                      [-139.987216, 60.184151],
                      [-139.696939, 60.342983],
                      [-139.088998, 60.359413],
                      [-139.198537, 60.091043],
                      [-139.045183, 59.997935],
                      [-138.700135, 59.910304],
                      [-138.623458, 59.767904],
                      [-137.604747, 59.242118],
                      [-137.445916, 58.908024],
                      [-137.265177, 59.001132],
                      [-136.827022, 59.159963],
                      [-136.580559, 59.16544],
                      [-136.465544, 59.285933],
                      [-136.476498, 59.466672],
                      [-136.301236, 59.466672],
                      [-136.25742, 59.625503],
                      [-135.945234, 59.663842],
                      [-135.479694, 59.800766],
                      [-135.025108, 59.565257],
                      [-135.068924, 59.422857],
                      [-134.959385, 59.280456],
                      [-134.701969, 59.247595],
                      [-134.378829, 59.033994],
                      [-134.400737, 58.973748],
                      [-134.25286, 58.858732],
                      [-133.842089, 58.727285],
                      [-133.173903, 58.152206],
                      [-133.075318, 57.998852],
                      [-132.867194, 57.845498],
                      [-132.560485, 57.505928],
                      [-132.253777, 57.21565],
                      [-132.368792, 57.095157],
                      [-132.05113, 57.051341],
                      [-132.127807, 56.876079],
                      [-131.870391, 56.804879],
                      [-131.837529, 56.602232],
                      [-131.580113, 56.613186],
                      [-131.087188, 56.405062],
                      [-130.78048, 56.366724],
                      [-130.621648, 56.268139],
                      [-130.468294, 56.240754],
                      [-130.424478, 56.142169],
                      [-130.101339, 56.114785],
                      [-130.002754, 55.994292],
                      [-130.150631, 55.769737],
                      [-130.128724, 55.583521],
                      [-129.986323, 55.276813],
                      [-130.095862, 55.200136],
                      [-130.336847, 54.920812],
                      [-130.687372, 54.718165],
                      [-130.785957, 54.822227],
                      [-130.917403, 54.789365],
                      [-131.010511, 54.997489],
                      [-130.983126, 55.08512],
                      [-131.092665, 55.189182],
                      [-130.862634, 55.298721],
                      [-130.928357, 55.337059],
                      [-131.158389, 55.200136],
                      [-131.284358, 55.287767],
                      [-131.426759, 55.238474],
                      [-131.843006, 55.457552],
                      [-131.700606, 55.698537],
                      [-131.963499, 55.616383],
                      [-131.974453, 55.49589],
                      [-132.182576, 55.588998],
                      [-132.226392, 55.704014],
                      [-132.083991, 55.829984],
                      [-132.127807, 55.955953],
                      [-132.324977, 55.851892],
                      [-132.522147, 56.076446],
                      [-132.642639, 56.032631],
                      [-132.719317, 56.218847],
                      [-132.527624, 56.339339],
                      [-132.341408, 56.339339],
                      [-132.396177, 56.487217],
                      [-132.297592, 56.67891],
                      [-132.450946, 56.673433],
                      [-132.768609, 56.837741],
                      [-132.993164, 57.034911],
                      [-133.51895, 57.177311],
                      [-133.507996, 57.577128],
                      [-133.677781, 57.62642],
                      [-133.639442, 57.790728],
                      [-133.814705, 57.834544],
                      [-134.072121, 58.053622],
                      [-134.143321, 58.168637],
                      [-134.586953, 58.206976],
                      [-135.074401, 58.502731],
                      [-135.282525, 59.192825],
                      [-135.38111, 59.033994],
                      [-135.337294, 58.891593],
                      [-135.140124, 58.617746],
                      [-135.189417, 58.573931],
                      [-135.05797, 58.349376],
                      [-135.085355, 58.201499],
                      [-135.277048, 58.234361],
                      [-135.430402, 58.398669],
                      [-135.633049, 58.426053],
                      [-135.91785, 58.382238],
                      [-135.912373, 58.617746],
                      [-136.087635, 58.814916],
                      [-136.246466, 58.75467],
                      [-136.876314, 58.962794],
                      [-136.931084, 58.902547],
                      [-136.586036, 58.836824],
                      [-136.317666, 58.672516],
                      [-136.213604, 58.667039],
                      [-136.180743, 58.535592],
                      [-136.043819, 58.382238],
                      [-136.388867, 58.294607],
                      [-136.591513, 58.349376],
                      [-136.59699, 58.212453],
                      [-136.859883, 58.316515],
                      [-136.947514, 58.393192],
                      [-137.111823, 58.393192],
                      [-137.566409, 58.590362],
                      [-137.900502, 58.765624],
                      [-137.933364, 58.869686],
                      [-138.11958, 59.02304],
                      [-138.634412, 59.132579],
                      [-138.919213, 59.247595],
                      [-139.417615, 59.379041],
                      [-139.746231, 59.505011],
                      [-139.718846, 59.641934],
                      [-139.625738, 59.598119],
                      [-139.5162, 59.68575],
                      [-139.625738, 59.88292],
                      [-139.488815, 59.992458],
                      [-139.554538, 60.041751],
                      [-139.801, 59.833627],
                      [-140.315833, 59.696704],
                      [-140.92925, 59.745996],
                      [-141.444083, 59.871966],
                      [-141.46599, 59.970551],
                      [-141.706976, 59.948643],
                      [-141.964392, 60.019843],
                      [-142.539471, 60.085566],
                      [-142.873564, 60.091043],
                      [-143.623905, 60.036274],
                      [-143.892275, 59.997935],
                      [-144.231845, 60.140336],
                      [-144.65357, 60.206059],
                      [-144.785016, 60.29369],
                      [-144.834309, 60.441568],
                      [-145.124586, 60.430614],
                      [-145.223171, 60.299167],
                      [-145.738004, 60.474429],
                      [-145.820158, 60.551106],
                      [-146.351421, 60.408706],
                      [-146.608837, 60.238921],
                      [-146.718376, 60.397752],
                      [-146.608837, 60.485383],
                      [-146.455483, 60.463475],
                      [-145.951604, 60.578491],
                      [-146.017328, 60.666122],
                      [-146.252836, 60.622307],
                      [-146.345944, 60.737322],
                      [-146.565022, 60.753753],
                      [-146.784099, 61.044031],
                      [-146.866253, 60.972831],
                      [-147.172962, 60.934492],
                      [-147.271547, 60.972831],
                      [-147.375609, 60.879723],
                      [-147.758995, 60.912584],
                      [-147.775426, 60.808523],
                      [-148.032842, 60.781138],
                      [-148.153334, 60.819476],
                      [-148.065703, 61.005692],
                      [-148.175242, 61.000215],
                      [-148.350504, 60.803046],
                      [-148.109519, 60.737322],
                      [-148.087611, 60.594922],
                      [-147.939734, 60.441568],
                      [-148.027365, 60.277259],
                      [-148.219058, 60.332029],
                      [-148.273827, 60.249875],
                      [-148.087611, 60.217013],
                      [-147.983549, 59.997935],
                      [-148.251919, 59.95412],
                      [-148.399797, 59.997935],
                      [-148.635305, 59.937689],
                      [-148.755798, 59.986981],
                      [-149.067984, 59.981505],
                      [-149.05703, 60.063659],
                      [-149.204907, 60.008889],
                      [-149.287061, 59.904827],
                      [-149.418508, 59.997935],
                      [-149.582816, 59.866489],
                      [-149.511616, 59.806242],
                      [-149.741647, 59.729565],
                      [-149.949771, 59.718611],
                      [-150.031925, 59.61455],
                      [-150.25648, 59.521442],
                      [-150.409834, 59.554303],
                      [-150.579619, 59.444764],
                      [-150.716543, 59.450241],
                      [-151.001343, 59.225687],
                      [-151.308052, 59.209256],
                      [-151.406637, 59.280456],
                      [-151.592853, 59.159963],
                      [-151.976239, 59.253071],
                      [-151.888608, 59.422857],
                      [-151.636669, 59.483103],
                      [-151.47236, 59.472149],
                      [-151.423068, 59.537872],
                      [-151.127313, 59.669319],
                      [-151.116359, 59.778858],
                      [-151.505222, 59.63098],
                      [-151.828361, 59.718611],
                      [-151.8667, 59.778858],
                      [-151.702392, 60.030797],
                      [-151.423068, 60.211536],
                      [-151.379252, 60.359413],
                      [-151.297098, 60.386798],
                      [-151.264237, 60.545629],
                      [-151.406637, 60.720892],
                      [-151.06159, 60.786615],
                      [-150.404357, 61.038554],
                      [-150.245526, 60.939969],
                      [-150.042879, 60.912584],
                      [-149.741647, 61.016646],
                      [-150.075741, 61.15357],
                      [-150.207187, 61.257632],
                      [-150.47008, 61.246678],
                      [-150.656296, 61.29597],
                      [-150.711066, 61.252155],
                      [-151.023251, 61.180954],
                      [-151.165652, 61.044031],
                      [-151.477837, 61.011169],
                      [-151.800977, 60.852338],
                      [-151.833838, 60.748276],
                      [-152.080301, 60.693507],
                      [-152.13507, 60.578491],
                      [-152.310332, 60.507291],
                      [-152.392486, 60.304644],
                      [-152.732057, 60.173197],
                      [-152.567748, 60.069136],
                      [-152.704672, 59.915781],
                      [-153.022334, 59.888397],
                      [-153.049719, 59.691227],
                      [-153.345474, 59.620026],
                      [-153.438582, 59.702181],
                      [-153.586459, 59.548826],
                      [-153.761721, 59.543349],
                      [-153.72886, 59.433811],
                      [-154.117723, 59.368087],
                      [-154.1944, 59.066856],
                      [-153.750768, 59.050425],
                      [-153.400243, 58.968271],
                      [-153.301658, 58.869686],
                      [-153.444059, 58.710854],
                      [-153.679567, 58.612269],
                      [-153.898645, 58.606793],
                      [-153.920553, 58.519161],
                      [-154.062953, 58.4863],
                      [-153.99723, 58.376761],
                      [-154.145107, 58.212453],
                      [-154.46277, 58.059098],
                      [-154.643509, 58.059098],
                      [-154.818771, 58.004329],
                      [-154.988556, 58.015283],
                      [-155.120003, 57.955037],
                      [-155.081664, 57.872883],
                      [-155.328126, 57.829067],
                      [-155.377419, 57.708574],
                      [-155.547204, 57.785251],
                      [-155.73342, 57.549743],
                      [-156.045606, 57.566174],
                      [-156.023698, 57.440204],
                      [-156.209914, 57.473066],
                      [-156.34136, 57.418296],
                      [-156.34136, 57.248511],
                      [-156.549484, 56.985618],
                      [-156.883577, 56.952757],
                      [-157.157424, 56.832264],
                      [-157.20124, 56.766541],
                      [-157.376502, 56.859649],
                      [-157.672257, 56.607709],
                      [-157.754411, 56.67891],
                      [-157.918719, 56.657002],
                      [-157.957058, 56.514601],
                      [-158.126843, 56.459832],
                      [-158.32949, 56.48174],
                      [-158.488321, 56.339339],
                      [-158.208997, 56.295524],
                      [-158.510229, 55.977861],
                      [-159.375585, 55.873799],
                      [-159.616571, 55.594475],
                      [-159.676817, 55.654722],
                      [-159.643955, 55.829984],
                      [-159.813741, 55.857368],
                      [-160.027341, 55.791645],
                      [-160.060203, 55.720445],
                      [-160.394296, 55.605429],
                      [-160.536697, 55.473983],
                      [-160.580512, 55.567091],
                      [-160.668143, 55.457552],
                      [-160.865313, 55.528752],
                      [-161.232268, 55.358967],
                      [-161.506115, 55.364444],
                      [-161.467776, 55.49589],
                      [-161.588269, 55.62186],
                      [-161.697808, 55.517798],
                      [-161.686854, 55.408259],
                      [-162.053809, 55.074166],
                      [-162.179779, 55.15632],
                      [-162.218117, 55.03035],
                      [-162.470057, 55.052258],
                      [-162.508395, 55.249428],
                      [-162.661749, 55.293244],
                      [-162.716519, 55.222043],
                      [-162.579595, 55.134412],
                      [-162.645319, 54.997489],
                      [-162.847965, 54.926289],
                      [-163.00132, 55.079643],
                      [-163.187536, 55.090597],
                      [-163.220397, 55.03035],
                      [-163.034181, 54.942719],
                      [-163.373752, 54.800319],
                      [-163.14372, 54.76198],
                      [-163.138243, 54.696257],
                      [-163.329936, 54.74555],
                      [-163.587352, 54.614103],
                      [-164.085754, 54.61958],
                      [-164.332216, 54.531949],
                      [-164.354124, 54.466226],
                      [-164.638925, 54.389548],
                      [-164.847049, 54.416933],
                      [-164.918249, 54.603149],
                      [-164.710125, 54.663395],
                      [-164.551294, 54.88795],
                      [-164.34317, 54.893427],
                      [-163.894061, 55.041304],
                      [-163.532583, 55.046781],
                      [-163.39566, 54.904381],
                      [-163.291598, 55.008443],
                      [-163.313505, 55.128935],
                      [-163.105382, 55.183705],
                      [-162.880827, 55.183705],
                      [-162.579595, 55.446598],
                      [-162.245502, 55.682106],
                      [-161.807347, 55.89023],
                      [-161.292514, 55.983338],
                      [-161.078914, 55.939523],
                      [-160.87079, 55.999769],
                      [-160.816021, 55.912138],
                      [-160.931036, 55.813553],
                      [-160.805067, 55.736876],
                      [-160.766728, 55.857368],
                      [-160.509312, 55.868322],
                      [-160.438112, 55.791645],
                      [-160.27928, 55.76426],
                      [-160.273803, 55.857368],
                      [-160.536697, 55.939523],
                      [-160.558604, 55.994292],
                      [-160.383342, 56.251708],
                      [-160.147834, 56.399586],
                      [-159.830171, 56.541986],
                      [-159.326293, 56.667956],
                      [-158.959338, 56.848695],
                      [-158.784076, 56.782971],
                      [-158.641675, 56.810356],
                      [-158.701922, 56.925372],
                      [-158.658106, 57.034911],
                      [-158.378782, 57.264942],
                      [-157.995396, 57.41282],
                      [-157.688688, 57.609989],
                      [-157.705118, 57.719528],
                      [-157.458656, 58.497254],
                      [-157.07527, 58.705377],
                      [-157.119086, 58.869686],
                      [-158.039212, 58.634177],
                      [-158.32949, 58.661562],
                      [-158.40069, 58.760147],
                      [-158.564998, 58.803962],
                      [-158.619768, 58.913501],
                      [-158.767645, 58.864209],
                      [-158.860753, 58.694424],
                      [-158.701922, 58.480823],
                      [-158.893615, 58.387715],
                      [-159.0634, 58.420577],
                      [-159.392016, 58.760147],
                      [-159.616571, 58.929932],
                      [-159.731586, 58.929932],
                      [-159.808264, 58.803962],
                      [-159.906848, 58.782055],
                      [-160.054726, 58.886116],
                      [-160.235465, 58.902547],
                      [-160.317619, 59.072332],
                      [-160.854359, 58.88064],
                      [-161.33633, 58.743716],
                      [-161.374669, 58.667039],
                      [-161.752577, 58.552023],
                      [-161.938793, 58.656085],
                      [-161.769008, 58.776578],
                      [-161.829255, 59.061379],
                      [-161.955224, 59.36261],
                      [-161.703285, 59.48858],
                      [-161.911409, 59.740519],
                      [-162.092148, 59.88292],
                      [-162.234548, 60.091043],
                      [-162.448149, 60.178674],
                      [-162.502918, 59.997935],
                      [-162.760334, 59.959597],
                      [-163.171105, 59.844581],
                      [-163.66403, 59.795289],
                      [-163.9324, 59.806242],
                      [-164.162431, 59.866489],
                      [-164.189816, 60.02532],
                      [-164.386986, 60.074613],
                      [-164.699171, 60.29369],
                      [-164.962064, 60.337506],
                      [-165.268773, 60.578491],
                      [-165.060649, 60.68803],
                      [-165.016834, 60.890677],
                      [-165.175665, 60.846861],
                      [-165.197573, 60.972831],
                      [-165.120896, 61.076893],
                      [-165.323543, 61.170001],
                      [-165.34545, 61.071416],
                      [-165.591913, 61.109754],
                      [-165.624774, 61.279539],
                      [-165.816467, 61.301447],
                      [-165.920529, 61.416463],
                      [-165.915052, 61.558863],
                      [-166.106745, 61.49314],
                      [-166.139607, 61.630064],
                      [-165.904098, 61.662925],
                      [-166.095791, 61.81628],
                      [-165.756221, 61.827233],
                      [-165.756221, 62.013449],
                      [-165.674067, 62.139419],
                      [-165.044219, 62.539236],
                      [-164.912772, 62.659728],
                      [-164.819664, 62.637821],
                      [-164.874433, 62.807606],
                      [-164.633448, 63.097884],
                      [-164.425324, 63.212899],
                      [-164.036462, 63.262192],
                      [-163.73523, 63.212899],
                      [-163.313505, 63.037637],
                      [-163.039658, 63.059545],
                      [-162.661749, 63.22933],
                      [-162.272887, 63.486746],
                      [-162.075717, 63.514131],
                      [-162.026424, 63.448408],
                      [-161.555408, 63.448408],
                      [-161.13916, 63.503177],
                      [-160.766728, 63.771547],
                      [-160.766728, 63.837271],
                      [-160.952944, 64.08921],
                      [-160.974852, 64.237087],
                      [-161.26513, 64.395918],
                      [-161.374669, 64.532842],
                      [-161.078914, 64.494503],
                      [-160.79959, 64.609519],
                      [-160.783159, 64.719058],
                      [-161.144637, 64.921705],
                      [-161.413007, 64.762873],
                      [-161.664946, 64.790258],
                      [-161.900455, 64.702627],
                      [-162.168825, 64.680719],
                      [-162.234548, 64.620473],
                      [-162.541257, 64.532842],
                      [-162.634365, 64.384965],
                      [-162.787719, 64.324718],
                      [-162.858919, 64.49998],
                      [-163.045135, 64.538319],
                      [-163.176582, 64.401395],
                      [-163.253259, 64.467119],
                      [-163.598306, 64.565704],
                      [-164.304832, 64.560227],
                      [-164.80871, 64.450688],
                      [-165.000403, 64.434257],
                      [-165.411174, 64.49998],
                      [-166.188899, 64.576658],
                      [-166.391546, 64.636904],
                      [-166.484654, 64.735489],
                      [-166.413454, 64.872412],
                      [-166.692778, 64.987428],
                      [-166.638008, 65.113398],
                      [-166.462746, 65.179121],
                      [-166.517516, 65.337952],
                      [-166.796839, 65.337952],
                      [-167.026871, 65.381768],
                      [-167.47598, 65.414629],
                      [-167.711489, 65.496784],
                      [-168.072967, 65.578938],
                      [-168.105828, 65.682999],
                      [-167.541703, 65.819923],
                      [-166.829701, 66.049954],
                      [-166.3313, 66.186878],
                      [-166.046499, 66.110201],
                      [-165.756221, 66.09377],
                      [-165.690498, 66.203309],
                      [-165.86576, 66.21974],
                      [-165.88219, 66.312848],
                      [-165.186619, 66.466202],
                      [-164.403417, 66.581218],
                      [-163.981692, 66.592172],
                      [-163.751661, 66.553833],
                      [-163.872153, 66.389525],
                      [-163.828338, 66.274509],
                      [-163.915969, 66.192355],
                      [-163.768091, 66.060908],
                      [-163.494244, 66.082816],
                      [-163.149197, 66.060908],
                      [-162.749381, 66.088293],
                      [-162.634365, 66.039001],
                      [-162.371472, 66.028047],
                      [-162.14144, 66.077339],
                      [-161.840208, 66.02257],
                      [-161.549931, 66.241647],
                      [-161.341807, 66.252601],
                      [-161.199406, 66.208786],
                      [-161.128206, 66.334755],
                      [-161.528023, 66.395002],
                      [-161.911409, 66.345709],
                      [-161.87307, 66.510017],
                      [-162.174302, 66.68528],
                      [-162.502918, 66.740049],
                      [-162.601503, 66.89888],
                      [-162.344087, 66.937219],
                      [-162.015471, 66.778388],
                      [-162.075717, 66.652418],
                      [-161.916886, 66.553833],
                      [-161.571838, 66.438817],
                      [-161.489684, 66.55931],
                      [-161.884024, 66.718141],
                      [-161.714239, 67.002942],
                      [-161.851162, 67.052235],
                      [-162.240025, 66.991988],
                      [-162.639842, 67.008419],
                      [-162.700088, 67.057712],
                      [-162.902735, 67.008419],
                      [-163.740707, 67.128912],
                      [-163.757138, 67.254881],
                      [-164.009077, 67.534205],
                      [-164.211724, 67.638267],
                      [-164.534863, 67.725898],
                      [-165.192096, 67.966884],
                      [-165.493328, 68.059992],
                      [-165.794559, 68.081899],
                      [-166.243668, 68.246208],
                      [-166.681824, 68.339316],
                      [-166.703731, 68.372177],
                      [-166.375115, 68.42147],
                      [-166.227238, 68.574824],
                      [-166.216284, 68.881533],
                      [-165.329019, 68.859625],
                      [-164.255539, 68.930825],
                      [-163.976215, 68.985595],
                      [-163.532583, 69.138949],
                      [-163.110859, 69.374457],
                      [-163.023228, 69.609966],
                      [-162.842489, 69.812613],
                      [-162.470057, 69.982398],
                      [-162.311225, 70.108367],
                      [-161.851162, 70.311014],
                      [-161.779962, 70.256245],
                      [-161.396576, 70.239814],
                      [-160.837928, 70.343876],
                      [-160.487404, 70.453415],
                      [-159.649432, 70.792985],
                      [-159.33177, 70.809416],
                      [-159.298908, 70.760123],
                      [-158.975769, 70.798462],
                      [-158.658106, 70.787508],
                      [-158.033735, 70.831323],
                      [-157.420318, 70.979201],
                      [-156.812377, 71.285909],
                      [-156.565915, 71.351633],
                      [-156.522099, 71.296863],
                      [-155.585543, 71.170894],
                      [-155.508865, 71.083263],
                      [-155.832005, 70.968247],
                      [-155.979882, 70.96277],
                      [-155.974405, 70.809416],
                      [-155.503388, 70.858708],
                      [-155.476004, 70.940862],
                      [-155.262403, 71.017539],
                      [-155.191203, 70.973724],
                      [-155.032372, 71.148986],
                      [-154.566832, 70.990155],
                      [-154.643509, 70.869662],
                      [-154.353231, 70.8368],
                      [-154.183446, 70.7656],
                      [-153.931507, 70.880616],
                      [-153.487874, 70.886093],
                      [-153.235935, 70.924431],
                      [-152.589656, 70.886093],
                      [-152.26104, 70.842277],
                      [-152.419871, 70.606769],
                      [-151.817408, 70.546523],
                      [-151.773592, 70.486276],
                      [-151.187559, 70.382214],
                      [-151.182082, 70.431507],
                      [-150.760358, 70.49723],
                      [-150.355064, 70.491753],
                      [-150.349588, 70.436984],
                      [-150.114079, 70.431507],
                      [-149.867617, 70.508184],
                      [-149.462323, 70.519138],
                      [-149.177522, 70.486276],
                      [-148.78866, 70.404122],
                      [-148.607921, 70.420553],
                      [-148.350504, 70.305537],
                      [-148.202627, 70.349353],
                      [-147.961642, 70.316491],
                      [-147.786379, 70.245291],
                    ],
                  ],
                  [
                    [
                      [-152.94018, 58.026237],
                      [-152.945657, 57.982421],
                      [-153.290705, 58.048145],
                      [-153.044242, 58.305561],
                      [-152.819688, 58.327469],
                      [-152.666333, 58.562977],
                      [-152.496548, 58.354853],
                      [-152.354148, 58.426053],
                      [-152.080301, 58.311038],
                      [-152.080301, 58.152206],
                      [-152.480117, 58.130299],
                      [-152.655379, 58.059098],
                      [-152.94018, 58.026237],
                    ],
                  ],
                  [
                    [
                      [-153.958891, 57.538789],
                      [-153.67409, 57.670236],
                      [-153.931507, 57.69762],
                      [-153.936983, 57.812636],
                      [-153.723383, 57.889313],
                      [-153.570028, 57.834544],
                      [-153.548121, 57.719528],
                      [-153.46049, 57.796205],
                      [-153.455013, 57.96599],
                      [-153.268797, 57.889313],
                      [-153.235935, 57.998852],
                      [-153.071627, 57.933129],
                      [-152.874457, 57.933129],
                      [-152.721103, 57.993375],
                      [-152.469163, 57.889313],
                      [-152.469163, 57.599035],
                      [-152.151501, 57.620943],
                      [-152.359625, 57.42925],
                      [-152.74301, 57.505928],
                      [-152.60061, 57.379958],
                      [-152.710149, 57.275896],
                      [-152.907319, 57.325188],
                      [-152.912796, 57.128019],
                      [-153.214027, 57.073249],
                      [-153.312612, 56.991095],
                      [-153.498828, 57.067772],
                      [-153.695998, 56.859649],
                      [-153.849352, 56.837741],
                      [-154.013661, 56.744633],
                      [-154.073907, 56.969187],
                      [-154.303938, 56.848695],
                      [-154.314892, 56.919895],
                      [-154.523016, 56.991095],
                      [-154.539447, 57.193742],
                      [-154.742094, 57.275896],
                      [-154.627078, 57.511404],
                      [-154.227261, 57.659282],
                      [-153.980799, 57.648328],
                      [-153.958891, 57.538789],
                    ],
                  ],
                  [
                    [
                      [-154.53397, 56.602232],
                      [-154.742094, 56.399586],
                      [-154.807817, 56.432447],
                      [-154.53397, 56.602232],
                    ],
                  ],
                  [
                    [
                      [-155.634835, 55.923092],
                      [-155.476004, 55.912138],
                      [-155.530773, 55.704014],
                      [-155.793666, 55.731399],
                      [-155.837482, 55.802599],
                      [-155.634835, 55.923092],
                    ],
                  ],
                  [
                    [
                      [-159.890418, 55.28229],
                      [-159.950664, 55.068689],
                      [-160.257373, 54.893427],
                      [-160.109495, 55.161797],
                      [-160.005433, 55.134412],
                      [-159.890418, 55.28229],
                    ],
                  ],
                  [
                    [
                      [-160.520266, 55.358967],
                      [-160.33405, 55.358967],
                      [-160.339527, 55.249428],
                      [-160.525743, 55.128935],
                      [-160.690051, 55.211089],
                      [-160.794113, 55.134412],
                      [-160.854359, 55.320628],
                      [-160.79959, 55.380875],
                      [-160.520266, 55.358967],
                    ],
                  ],
                  [
                    [
                      [-162.256456, 54.981058],
                      [-162.234548, 54.893427],
                      [-162.349564, 54.838658],
                      [-162.437195, 54.931766],
                      [-162.256456, 54.981058],
                    ],
                  ],
                  [
                    [
                      [-162.415287, 63.634624],
                      [-162.563165, 63.536039],
                      [-162.612457, 63.62367],
                      [-162.415287, 63.634624],
                    ],
                  ],
                  [
                    [
                      [-162.80415, 54.488133],
                      [-162.590549, 54.449795],
                      [-162.612457, 54.367641],
                      [-162.782242, 54.373118],
                      [-162.80415, 54.488133],
                    ],
                  ],
                  [
                    [
                      [-165.548097, 54.29644],
                      [-165.476897, 54.181425],
                      [-165.630251, 54.132132],
                      [-165.685021, 54.252625],
                      [-165.548097, 54.29644],
                    ],
                  ],
                  [
                    [
                      [-165.73979, 54.15404],
                      [-166.046499, 54.044501],
                      [-166.112222, 54.121178],
                      [-165.980775, 54.219763],
                      [-165.73979, 54.15404],
                    ],
                  ],
                  [
                    [
                      [-166.364161, 60.359413],
                      [-166.13413, 60.397752],
                      [-166.084837, 60.326552],
                      [-165.88219, 60.342983],
                      [-165.685021, 60.277259],
                      [-165.646682, 59.992458],
                      [-165.750744, 59.89935],
                      [-166.00816, 59.844581],
                      [-166.062929, 59.745996],
                      [-166.440838, 59.855535],
                      [-166.6161, 59.850058],
                      [-166.994009, 59.992458],
                      [-167.125456, 59.992458],
                      [-167.344534, 60.074613],
                      [-167.421211, 60.206059],
                      [-167.311672, 60.238921],
                      [-166.93924, 60.206059],
                      [-166.763978, 60.310121],
                      [-166.577762, 60.321075],
                      [-166.495608, 60.392275],
                      [-166.364161, 60.359413],
                    ],
                  ],
                  [
                    [
                      [-166.375115, 54.01164],
                      [-166.210807, 53.934962],
                      [-166.5449, 53.748746],
                      [-166.539423, 53.715885],
                      [-166.117699, 53.852808],
                      [-166.112222, 53.776131],
                      [-166.282007, 53.683023],
                      [-166.555854, 53.622777],
                      [-166.583239, 53.529669],
                      [-166.878994, 53.431084],
                      [-167.13641, 53.425607],
                      [-167.306195, 53.332499],
                      [-167.623857, 53.250345],
                      [-167.793643, 53.337976],
                      [-167.459549, 53.442038],
                      [-167.355487, 53.425607],
                      [-167.103548, 53.513238],
                      [-167.163794, 53.611823],
                      [-167.021394, 53.715885],
                      [-166.807793, 53.666592],
                      [-166.785886, 53.732316],
                      [-167.015917, 53.754223],
                      [-167.141887, 53.825424],
                      [-167.032348, 53.945916],
                      [-166.643485, 54.017116],
                      [-166.561331, 53.880193],
                      [-166.375115, 54.01164],
                    ],
                  ],
                  [
                    [
                      [-168.790446, 53.157237],
                      [-168.40706, 53.34893],
                      [-168.385152, 53.431084],
                      [-168.237275, 53.524192],
                      [-168.007243, 53.568007],
                      [-167.886751, 53.518715],
                      [-167.842935, 53.387268],
                      [-168.270136, 53.244868],
                      [-168.500168, 53.036744],
                      [-168.686384, 52.965544],
                      [-168.790446, 53.157237],
                    ],
                  ],
                  [
                    [
                      [-169.74891, 52.894344],
                      [-169.705095, 52.795759],
                      [-169.962511, 52.790282],
                      [-169.989896, 52.856005],
                      [-169.74891, 52.894344],
                    ],
                  ],
                  [
                    [
                      [-170.148727, 57.221127],
                      [-170.28565, 57.128019],
                      [-170.313035, 57.221127],
                      [-170.148727, 57.221127],
                    ],
                  ],
                  [
                    [
                      [-170.669036, 52.697174],
                      [-170.603313, 52.604066],
                      [-170.789529, 52.538343],
                      [-170.816914, 52.636928],
                      [-170.669036, 52.697174],
                    ],
                  ],
                  [
                    [
                      [-171.742517, 63.716778],
                      [-170.94836, 63.5689],
                      [-170.488297, 63.69487],
                      [-170.280174, 63.683916],
                      [-170.093958, 63.612716],
                      [-170.044665, 63.492223],
                      [-169.644848, 63.4265],
                      [-169.518879, 63.366254],
                      [-168.99857, 63.338869],
                      [-168.686384, 63.295053],
                      [-168.856169, 63.147176],
                      [-169.108108, 63.180038],
                      [-169.376478, 63.152653],
                      [-169.513402, 63.08693],
                      [-169.639372, 62.939052],
                      [-169.831064, 63.075976],
                      [-170.055619, 63.169084],
                      [-170.263743, 63.180038],
                      [-170.362328, 63.2841],
                      [-170.866206, 63.415546],
                      [-171.101715, 63.421023],
                      [-171.463193, 63.306007],
                      [-171.73704, 63.366254],
                      [-171.852055, 63.486746],
                      [-171.742517, 63.716778],
                    ],
                  ],
                  [
                    [
                      [-172.432611, 52.390465],
                      [-172.41618, 52.275449],
                      [-172.607873, 52.253542],
                      [-172.569535, 52.352127],
                      [-172.432611, 52.390465],
                    ],
                  ],
                  [
                    [
                      [-173.626584, 52.14948],
                      [-173.495138, 52.105664],
                      [-173.122706, 52.111141],
                      [-173.106275, 52.07828],
                      [-173.549907, 52.028987],
                      [-173.626584, 52.14948],
                    ],
                  ],
                  [
                    [
                      [-174.322156, 52.280926],
                      [-174.327632, 52.379511],
                      [-174.185232, 52.41785],
                      [-173.982585, 52.319265],
                      [-174.059262, 52.226157],
                      [-174.179755, 52.231634],
                      [-174.141417, 52.127572],
                      [-174.333109, 52.116618],
                      [-174.738403, 52.007079],
                      [-174.968435, 52.039941],
                      [-174.902711, 52.116618],
                      [-174.656249, 52.105664],
                      [-174.322156, 52.280926],
                    ],
                  ],
                  [
                    [
                      [-176.469116, 51.853725],
                      [-176.288377, 51.870156],
                      [-176.288377, 51.744186],
                      [-176.518409, 51.760617],
                      [-176.80321, 51.61274],
                      [-176.912748, 51.80991],
                      [-176.792256, 51.815386],
                      [-176.775825, 51.963264],
                      [-176.627947, 51.968741],
                      [-176.627947, 51.859202],
                      [-176.469116, 51.853725],
                    ],
                  ],
                  [
                    [
                      [-177.153734, 51.946833],
                      [-177.044195, 51.897541],
                      [-177.120872, 51.727755],
                      [-177.274226, 51.678463],
                      [-177.279703, 51.782525],
                      [-177.153734, 51.946833],
                    ],
                  ],
                  [
                    [
                      [-178.123152, 51.919448],
                      [-177.953367, 51.913971],
                      [-177.800013, 51.793479],
                      [-177.964321, 51.651078],
                      [-178.123152, 51.919448],
                    ],
                  ],
                  [
                    [
                      [-186.892443, 52.992929],
                      [-186.706227, 52.927205],
                      [-186.695274, 52.823143],
                      [-187.09509, 52.762897],
                      [-187.357983, 52.927205],
                      [-187.357983, 53.003883],
                      [-186.892443, 52.992929],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '04',
              properties: { name: 'Arizona' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-109.042503, 37.000263],
                    [-109.04798, 31.331629],
                    [-111.074448, 31.331629],
                    [-112.246513, 31.704061],
                    [-114.815198, 32.492741],
                    [-114.72209, 32.717295],
                    [-114.524921, 32.755634],
                    [-114.470151, 32.843265],
                    [-114.524921, 33.029481],
                    [-114.661844, 33.034958],
                    [-114.727567, 33.40739],
                    [-114.524921, 33.54979],
                    [-114.497536, 33.697668],
                    [-114.535874, 33.933176],
                    [-114.415382, 34.108438],
                    [-114.256551, 34.174162],
                    [-114.136058, 34.305608],
                    [-114.333228, 34.448009],
                    [-114.470151, 34.710902],
                    [-114.634459, 34.87521],
                    [-114.634459, 35.00118],
                    [-114.574213, 35.138103],
                    [-114.596121, 35.324319],
                    [-114.678275, 35.516012],
                    [-114.738521, 36.102045],
                    [-114.371566, 36.140383],
                    [-114.251074, 36.01989],
                    [-114.152489, 36.025367],
                    [-114.048427, 36.195153],
                    [-114.048427, 37.000263],
                    [-110.499369, 37.00574],
                    [-109.042503, 37.000263],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '05',
              properties: { name: 'Arkansas' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-94.473842, 36.501861],
                    [-90.152536, 36.496384],
                    [-90.064905, 36.304691],
                    [-90.218259, 36.184199],
                    [-90.377091, 35.997983],
                    [-89.730812, 35.997983],
                    [-89.763673, 35.811767],
                    [-89.911551, 35.756997],
                    [-89.944412, 35.603643],
                    [-90.130628, 35.439335],
                    [-90.114197, 35.198349],
                    [-90.212782, 35.023087],
                    [-90.311367, 34.995703],
                    [-90.251121, 34.908072],
                    [-90.409952, 34.831394],
                    [-90.481152, 34.661609],
                    [-90.585214, 34.617794],
                    [-90.568783, 34.420624],
                    [-90.749522, 34.365854],
                    [-90.744046, 34.300131],
                    [-90.952169, 34.135823],
                    [-90.891923, 34.026284],
                    [-91.072662, 33.867453],
                    [-91.231493, 33.560744],
                    [-91.056231, 33.429298],
                    [-91.143862, 33.347144],
                    [-91.089093, 33.13902],
                    [-91.16577, 33.002096],
                    [-93.608485, 33.018527],
                    [-94.041164, 33.018527],
                    [-94.041164, 33.54979],
                    [-94.183564, 33.593606],
                    [-94.380734, 33.544313],
                    [-94.484796, 33.637421],
                    [-94.430026, 35.395519],
                    [-94.616242, 36.501861],
                    [-94.473842, 36.501861],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '06',
              properties: { name: 'California' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-123.233256, 42.006186],
                    [-122.378853, 42.011663],
                    [-121.037003, 41.995232],
                    [-120.001861, 41.995232],
                    [-119.996384, 40.264519],
                    [-120.001861, 38.999346],
                    [-118.71478, 38.101128],
                    [-117.498899, 37.21934],
                    [-116.540435, 36.501861],
                    [-115.85034, 35.970598],
                    [-114.634459, 35.00118],
                    [-114.634459, 34.87521],
                    [-114.470151, 34.710902],
                    [-114.333228, 34.448009],
                    [-114.136058, 34.305608],
                    [-114.256551, 34.174162],
                    [-114.415382, 34.108438],
                    [-114.535874, 33.933176],
                    [-114.497536, 33.697668],
                    [-114.524921, 33.54979],
                    [-114.727567, 33.40739],
                    [-114.661844, 33.034958],
                    [-114.524921, 33.029481],
                    [-114.470151, 32.843265],
                    [-114.524921, 32.755634],
                    [-114.72209, 32.717295],
                    [-116.04751, 32.624187],
                    [-117.126467, 32.536556],
                    [-117.24696, 32.668003],
                    [-117.252437, 32.876127],
                    [-117.329114, 33.122589],
                    [-117.471515, 33.297851],
                    [-117.7837, 33.538836],
                    [-118.183517, 33.763391],
                    [-118.260194, 33.703145],
                    [-118.413548, 33.741483],
                    [-118.391641, 33.840068],
                    [-118.566903, 34.042715],
                    [-118.802411, 33.998899],
                    [-119.218659, 34.146777],
                    [-119.278905, 34.26727],
                    [-119.558229, 34.415147],
                    [-119.875891, 34.40967],
                    [-120.138784, 34.475393],
                    [-120.472878, 34.448009],
                    [-120.64814, 34.579455],
                    [-120.609801, 34.858779],
                    [-120.670048, 34.902595],
                    [-120.631709, 35.099764],
                    [-120.894602, 35.247642],
                    [-120.905556, 35.450289],
                    [-121.004141, 35.461243],
                    [-121.168449, 35.636505],
                    [-121.283465, 35.674843],
                    [-121.332757, 35.784382],
                    [-121.716143, 36.195153],
                    [-121.896882, 36.315645],
                    [-121.935221, 36.638785],
                    [-121.858544, 36.6114],
                    [-121.787344, 36.803093],
                    [-121.929744, 36.978355],
                    [-122.105006, 36.956447],
                    [-122.335038, 37.115279],
                    [-122.417192, 37.241248],
                    [-122.400761, 37.361741],
                    [-122.515777, 37.520572],
                    [-122.515777, 37.783465],
                    [-122.329561, 37.783465],
                    [-122.406238, 38.15042],
                    [-122.488392, 38.112082],
                    [-122.504823, 37.931343],
                    [-122.701993, 37.893004],
                    [-122.937501, 38.029928],
                    [-122.97584, 38.265436],
                    [-123.129194, 38.451652],
                    [-123.331841, 38.566668],
                    [-123.44138, 38.698114],
                    [-123.737134, 38.95553],
                    [-123.687842, 39.032208],
                    [-123.824765, 39.366301],
                    [-123.764519, 39.552517],
                    [-123.85215, 39.831841],
                    [-124.109566, 40.105688],
                    [-124.361506, 40.259042],
                    [-124.410798, 40.439781],
                    [-124.158859, 40.877937],
                    [-124.109566, 41.025814],
                    [-124.158859, 41.14083],
                    [-124.065751, 41.442061],
                    [-124.147905, 41.715908],
                    [-124.257444, 41.781632],
                    [-124.213628, 42.000709],
                    [-123.233256, 42.006186],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '08',
              properties: { name: 'Colorado' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-107.919731, 41.003906],
                    [-105.728954, 40.998429],
                    [-104.053011, 41.003906],
                    [-102.053927, 41.003906],
                    [-102.053927, 40.001626],
                    [-102.042974, 36.994786],
                    [-103.001438, 37.000263],
                    [-104.337812, 36.994786],
                    [-106.868158, 36.994786],
                    [-107.421329, 37.000263],
                    [-109.042503, 37.000263],
                    [-109.042503, 38.166851],
                    [-109.058934, 38.27639],
                    [-109.053457, 39.125316],
                    [-109.04798, 40.998429],
                    [-107.919731, 41.003906],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '09',
              properties: { name: 'Connecticut' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-73.053528, 42.039048],
                    [-71.799309, 42.022617],
                    [-71.799309, 42.006186],
                    [-71.799309, 41.414677],
                    [-71.859555, 41.321569],
                    [-71.947186, 41.338],
                    [-72.385341, 41.261322],
                    [-72.905651, 41.28323],
                    [-73.130205, 41.146307],
                    [-73.371191, 41.102491],
                    [-73.655992, 40.987475],
                    [-73.727192, 41.102491],
                    [-73.48073, 41.21203],
                    [-73.55193, 41.294184],
                    [-73.486206, 42.050002],
                    [-73.053528, 42.039048],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '10',
              properties: { name: 'Delaware' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-75.414089, 39.804456],
                    [-75.507197, 39.683964],
                    [-75.611259, 39.61824],
                    [-75.589352, 39.459409],
                    [-75.441474, 39.311532],
                    [-75.403136, 39.065069],
                    [-75.189535, 38.807653],
                    [-75.09095, 38.796699],
                    [-75.047134, 38.451652],
                    [-75.693413, 38.462606],
                    [-75.786521, 39.722302],
                    [-75.616736, 39.831841],
                    [-75.414089, 39.804456],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '11',
              properties: { name: 'District of Columbia' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-77.035264, 38.993869],
                    [-76.909294, 38.895284],
                    [-77.040741, 38.791222],
                    [-77.117418, 38.933623],
                    [-77.035264, 38.993869],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '12',
              properties: { name: 'Florida' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-85.497137, 30.997536],
                    [-85.004212, 31.003013],
                    [-84.867289, 30.712735],
                    [-83.498053, 30.647012],
                    [-82.216449, 30.570335],
                    [-82.167157, 30.356734],
                    [-82.046664, 30.362211],
                    [-82.002849, 30.564858],
                    [-82.041187, 30.751074],
                    [-81.948079, 30.827751],
                    [-81.718048, 30.745597],
                    [-81.444201, 30.707258],
                    [-81.383954, 30.27458],
                    [-81.257985, 29.787132],
                    [-80.967707, 29.14633],
                    [-80.524075, 28.461713],
                    [-80.589798, 28.41242],
                    [-80.56789, 28.094758],
                    [-80.381674, 27.738757],
                    [-80.091397, 27.021277],
                    [-80.03115, 26.796723],
                    [-80.036627, 26.566691],
                    [-80.146166, 25.739673],
                    [-80.239274, 25.723243],
                    [-80.337859, 25.465826],
                    [-80.304997, 25.383672],
                    [-80.49669, 25.197456],
                    [-80.573367, 25.241272],
                    [-80.759583, 25.164595],
                    [-81.077246, 25.120779],
                    [-81.170354, 25.224841],
                    [-81.126538, 25.378195],
                    [-81.351093, 25.821827],
                    [-81.526355, 25.903982],
                    [-81.679709, 25.843735],
                    [-81.800202, 26.090198],
                    [-81.833064, 26.292844],
                    [-82.041187, 26.517399],
                    [-82.09048, 26.665276],
                    [-82.057618, 26.878877],
                    [-82.172634, 26.917216],
                    [-82.145249, 26.791246],
                    [-82.249311, 26.758384],
                    [-82.566974, 27.300601],
                    [-82.692943, 27.437525],
                    [-82.391711, 27.837342],
                    [-82.588881, 27.815434],
                    [-82.720328, 27.689464],
                    [-82.851774, 27.886634],
                    [-82.676512, 28.434328],
                    [-82.643651, 28.888914],
                    [-82.764143, 28.998453],
                    [-82.802482, 29.14633],
                    [-82.994175, 29.179192],
                    [-83.218729, 29.420177],
                    [-83.399469, 29.518762],
                    [-83.410422, 29.66664],
                    [-83.536392, 29.721409],
                    [-83.640454, 29.885717],
                    [-84.02384, 30.104795],
                    [-84.357933, 30.055502],
                    [-84.341502, 29.902148],
                    [-84.451041, 29.929533],
                    [-84.867289, 29.743317],
                    [-85.310921, 29.699501],
                    [-85.299967, 29.80904],
                    [-85.404029, 29.940487],
                    [-85.924338, 30.236241],
                    [-86.29677, 30.362211],
                    [-86.630863, 30.395073],
                    [-86.910187, 30.373165],
                    [-87.518128, 30.280057],
                    [-87.37025, 30.427934],
                    [-87.446927, 30.510088],
                    [-87.408589, 30.674397],
                    [-87.633143, 30.86609],
                    [-87.600282, 30.997536],
                    [-85.497137, 30.997536],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '13',
              properties: { name: 'Georgia' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-83.109191, 35.00118],
                    [-83.322791, 34.787579],
                    [-83.339222, 34.683517],
                    [-83.005129, 34.469916],
                    [-82.901067, 34.486347],
                    [-82.747713, 34.26727],
                    [-82.714851, 34.152254],
                    [-82.55602, 33.94413],
                    [-82.325988, 33.81816],
                    [-82.194542, 33.631944],
                    [-81.926172, 33.462159],
                    [-81.937125, 33.347144],
                    [-81.761863, 33.160928],
                    [-81.493493, 33.007573],
                    [-81.42777, 32.843265],
                    [-81.416816, 32.629664],
                    [-81.279893, 32.558464],
                    [-81.121061, 32.290094],
                    [-81.115584, 32.120309],
                    [-80.885553, 32.032678],
                    [-81.132015, 31.693108],
                    [-81.175831, 31.517845],
                    [-81.279893, 31.364491],
                    [-81.290846, 31.20566],
                    [-81.400385, 31.13446],
                    [-81.444201, 30.707258],
                    [-81.718048, 30.745597],
                    [-81.948079, 30.827751],
                    [-82.041187, 30.751074],
                    [-82.002849, 30.564858],
                    [-82.046664, 30.362211],
                    [-82.167157, 30.356734],
                    [-82.216449, 30.570335],
                    [-83.498053, 30.647012],
                    [-84.867289, 30.712735],
                    [-85.004212, 31.003013],
                    [-85.113751, 31.27686],
                    [-85.042551, 31.539753],
                    [-85.141136, 31.840985],
                    [-85.053504, 32.01077],
                    [-85.058981, 32.13674],
                    [-84.889196, 32.262709],
                    [-85.004212, 32.322956],
                    [-84.960397, 32.421541],
                    [-85.069935, 32.580372],
                    [-85.184951, 32.859696],
                    [-85.431413, 34.124869],
                    [-85.606675, 34.984749],
                    [-84.319594, 34.990226],
                    [-83.618546, 34.984749],
                    [-83.109191, 35.00118],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '15',
              properties: { name: 'Hawaii' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-155.634835, 18.948267],
                      [-155.881297, 19.035898],
                      [-155.919636, 19.123529],
                      [-155.886774, 19.348084],
                      [-156.062036, 19.73147],
                      [-155.925113, 19.857439],
                      [-155.826528, 20.032702],
                      [-155.897728, 20.147717],
                      [-155.87582, 20.26821],
                      [-155.596496, 20.12581],
                      [-155.284311, 20.021748],
                      [-155.092618, 19.868393],
                      [-155.092618, 19.736947],
                      [-154.807817, 19.523346],
                      [-154.983079, 19.348084],
                      [-155.295265, 19.26593],
                      [-155.514342, 19.134483],
                      [-155.634835, 18.948267],
                    ],
                  ],
                  [
                    [
                      [-156.587823, 21.029505],
                      [-156.472807, 20.892581],
                      [-156.324929, 20.952827],
                      [-156.00179, 20.793996],
                      [-156.051082, 20.651596],
                      [-156.379699, 20.580396],
                      [-156.445422, 20.60778],
                      [-156.461853, 20.783042],
                      [-156.631638, 20.821381],
                      [-156.697361, 20.919966],
                      [-156.587823, 21.029505],
                    ],
                  ],
                  [
                    [
                      [-156.982162, 21.210244],
                      [-157.080747, 21.106182],
                      [-157.310779, 21.106182],
                      [-157.239579, 21.221198],
                      [-156.982162, 21.210244],
                    ],
                  ],
                  [
                    [
                      [-157.951581, 21.697691],
                      [-157.842042, 21.462183],
                      [-157.896811, 21.325259],
                      [-158.110412, 21.303352],
                      [-158.252813, 21.582676],
                      [-158.126843, 21.588153],
                      [-157.951581, 21.697691],
                    ],
                  ],
                  [
                    [
                      [-159.468693, 22.228955],
                      [-159.353678, 22.218001],
                      [-159.298908, 22.113939],
                      [-159.33177, 21.966061],
                      [-159.446786, 21.872953],
                      [-159.764448, 21.987969],
                      [-159.726109, 22.152277],
                      [-159.468693, 22.228955],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '16',
              properties: { name: 'Idaho' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-116.04751, 49.000239],
                    [-116.04751, 47.976051],
                    [-115.724371, 47.696727],
                    [-115.718894, 47.42288],
                    [-115.527201, 47.302388],
                    [-115.324554, 47.258572],
                    [-115.302646, 47.187372],
                    [-114.930214, 46.919002],
                    [-114.886399, 46.809463],
                    [-114.623506, 46.705401],
                    [-114.612552, 46.639678],
                    [-114.322274, 46.645155],
                    [-114.464674, 46.272723],
                    [-114.492059, 46.037214],
                    [-114.387997, 45.88386],
                    [-114.568736, 45.774321],
                    [-114.497536, 45.670259],
                    [-114.546828, 45.560721],
                    [-114.333228, 45.456659],
                    [-114.086765, 45.593582],
                    [-113.98818, 45.703121],
                    [-113.807441, 45.604536],
                    [-113.834826, 45.522382],
                    [-113.736241, 45.330689],
                    [-113.571933, 45.128042],
                    [-113.45144, 45.056842],
                    [-113.456917, 44.865149],
                    [-113.341901, 44.782995],
                    [-113.133778, 44.772041],
                    [-113.002331, 44.448902],
                    [-112.887315, 44.394132],
                    [-112.783254, 44.48724],
                    [-112.471068, 44.481763],
                    [-112.241036, 44.569394],
                    [-112.104113, 44.520102],
                    [-111.868605, 44.563917],
                    [-111.819312, 44.509148],
                    [-111.616665, 44.547487],
                    [-111.386634, 44.75561],
                    [-111.227803, 44.580348],
                    [-111.047063, 44.476286],
                    [-111.047063, 42.000709],
                    [-112.164359, 41.995232],
                    [-114.04295, 41.995232],
                    [-117.027882, 42.000709],
                    [-117.027882, 43.830007],
                    [-116.896436, 44.158624],
                    [-116.97859, 44.240778],
                    [-117.170283, 44.257209],
                    [-117.241483, 44.394132],
                    [-117.038836, 44.750133],
                    [-116.934774, 44.782995],
                    [-116.830713, 44.930872],
                    [-116.847143, 45.02398],
                    [-116.732128, 45.144473],
                    [-116.671881, 45.319735],
                    [-116.463758, 45.61549],
                    [-116.545912, 45.752413],
                    [-116.78142, 45.823614],
                    [-116.918344, 45.993399],
                    [-116.92382, 46.168661],
                    [-117.055267, 46.343923],
                    [-117.038836, 46.426077],
                    [-117.044313, 47.762451],
                    [-117.033359, 49.000239],
                    [-116.04751, 49.000239],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '17',
              properties: { name: 'Illinois' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-90.639984, 42.510065],
                    [-88.788778, 42.493634],
                    [-87.802929, 42.493634],
                    [-87.83579, 42.301941],
                    [-87.682436, 42.077386],
                    [-87.523605, 41.710431],
                    [-87.529082, 39.34987],
                    [-87.63862, 39.169131],
                    [-87.512651, 38.95553],
                    [-87.49622, 38.780268],
                    [-87.62219, 38.637868],
                    [-87.655051, 38.506421],
                    [-87.83579, 38.292821],
                    [-87.950806, 38.27639],
                    [-87.923421, 38.15042],
                    [-88.000098, 38.101128],
                    [-88.060345, 37.865619],
                    [-88.027483, 37.799896],
                    [-88.15893, 37.657496],
                    [-88.065822, 37.482234],
                    [-88.476592, 37.389126],
                    [-88.514931, 37.285064],
                    [-88.421823, 37.153617],
                    [-88.547792, 37.071463],
                    [-88.914747, 37.224817],
                    [-89.029763, 37.213863],
                    [-89.183118, 37.038601],
                    [-89.133825, 36.983832],
                    [-89.292656, 36.994786],
                    [-89.517211, 37.279587],
                    [-89.435057, 37.34531],
                    [-89.517211, 37.537003],
                    [-89.517211, 37.690357],
                    [-89.84035, 37.903958],
                    [-89.949889, 37.88205],
                    [-90.059428, 38.013497],
                    [-90.355183, 38.216144],
                    [-90.349706, 38.374975],
                    [-90.179921, 38.632391],
                    [-90.207305, 38.725499],
                    [-90.10872, 38.845992],
                    [-90.251121, 38.917192],
                    [-90.470199, 38.961007],
                    [-90.585214, 38.867899],
                    [-90.661891, 38.928146],
                    [-90.727615, 39.256762],
                    [-91.061708, 39.470363],
                    [-91.368417, 39.727779],
                    [-91.494386, 40.034488],
                    [-91.50534, 40.237135],
                    [-91.417709, 40.379535],
                    [-91.401278, 40.560274],
                    [-91.121954, 40.669813],
                    [-91.09457, 40.823167],
                    [-90.963123, 40.921752],
                    [-90.946692, 41.097014],
                    [-91.111001, 41.239415],
                    [-91.045277, 41.414677],
                    [-90.656414, 41.463969],
                    [-90.344229, 41.589939],
                    [-90.311367, 41.743293],
                    [-90.179921, 41.809016],
                    [-90.141582, 42.000709],
                    [-90.168967, 42.126679],
                    [-90.393521, 42.225264],
                    [-90.420906, 42.329326],
                    [-90.639984, 42.510065],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '18',
              properties: { name: 'Indiana' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-85.990061, 41.759724],
                    [-84.807042, 41.759724],
                    [-84.807042, 41.694001],
                    [-84.801565, 40.500028],
                    [-84.817996, 39.103408],
                    [-84.894673, 39.059592],
                    [-84.812519, 38.785745],
                    [-84.987781, 38.780268],
                    [-85.173997, 38.68716],
                    [-85.431413, 38.730976],
                    [-85.42046, 38.533806],
                    [-85.590245, 38.451652],
                    [-85.655968, 38.325682],
                    [-85.83123, 38.27639],
                    [-85.924338, 38.024451],
                    [-86.039354, 37.958727],
                    [-86.263908, 38.051835],
                    [-86.302247, 38.166851],
                    [-86.521325, 38.040881],
                    [-86.504894, 37.931343],
                    [-86.729448, 37.893004],
                    [-86.795172, 37.991589],
                    [-87.047111, 37.893004],
                    [-87.129265, 37.788942],
                    [-87.381204, 37.93682],
                    [-87.512651, 37.903958],
                    [-87.600282, 37.975158],
                    [-87.682436, 37.903958],
                    [-87.934375, 37.893004],
                    [-88.027483, 37.799896],
                    [-88.060345, 37.865619],
                    [-88.000098, 38.101128],
                    [-87.923421, 38.15042],
                    [-87.950806, 38.27639],
                    [-87.83579, 38.292821],
                    [-87.655051, 38.506421],
                    [-87.62219, 38.637868],
                    [-87.49622, 38.780268],
                    [-87.512651, 38.95553],
                    [-87.63862, 39.169131],
                    [-87.529082, 39.34987],
                    [-87.523605, 41.710431],
                    [-87.42502, 41.644708],
                    [-87.118311, 41.644708],
                    [-86.822556, 41.759724],
                    [-85.990061, 41.759724],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '19',
              properties: { name: 'Iowa' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-91.368417, 43.501391],
                    [-91.215062, 43.501391],
                    [-91.204109, 43.353514],
                    [-91.056231, 43.254929],
                    [-91.176724, 43.134436],
                    [-91.143862, 42.909881],
                    [-91.067185, 42.75105],
                    [-90.711184, 42.636034],
                    [-90.639984, 42.510065],
                    [-90.420906, 42.329326],
                    [-90.393521, 42.225264],
                    [-90.168967, 42.126679],
                    [-90.141582, 42.000709],
                    [-90.179921, 41.809016],
                    [-90.311367, 41.743293],
                    [-90.344229, 41.589939],
                    [-90.656414, 41.463969],
                    [-91.045277, 41.414677],
                    [-91.111001, 41.239415],
                    [-90.946692, 41.097014],
                    [-90.963123, 40.921752],
                    [-91.09457, 40.823167],
                    [-91.121954, 40.669813],
                    [-91.401278, 40.560274],
                    [-91.417709, 40.379535],
                    [-91.527248, 40.412397],
                    [-91.729895, 40.615043],
                    [-91.833957, 40.609566],
                    [-93.257961, 40.582182],
                    [-94.632673, 40.571228],
                    [-95.7664, 40.587659],
                    [-95.881416, 40.719105],
                    [-95.826646, 40.976521],
                    [-95.925231, 41.201076],
                    [-95.919754, 41.453015],
                    [-96.095016, 41.540646],
                    [-96.122401, 41.67757],
                    [-96.062155, 41.798063],
                    [-96.127878, 41.973325],
                    [-96.264801, 42.039048],
                    [-96.44554, 42.488157],
                    [-96.631756, 42.707235],
                    [-96.544125, 42.855112],
                    [-96.511264, 43.052282],
                    [-96.434587, 43.123482],
                    [-96.560556, 43.222067],
                    [-96.527695, 43.397329],
                    [-96.582464, 43.479483],
                    [-96.451017, 43.501391],
                    [-91.368417, 43.501391],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '20',
              properties: { name: 'Kansas' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-101.90605, 40.001626],
                    [-95.306337, 40.001626],
                    [-95.207752, 39.908518],
                    [-94.884612, 39.831841],
                    [-95.109167, 39.541563],
                    [-94.983197, 39.442978],
                    [-94.824366, 39.20747],
                    [-94.610765, 39.158177],
                    [-94.616242, 37.000263],
                    [-100.087706, 37.000263],
                    [-102.042974, 36.994786],
                    [-102.053927, 40.001626],
                    [-101.90605, 40.001626],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '21',
              properties: { name: 'Kentucky' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-83.903347, 38.769315],
                    [-83.678792, 38.632391],
                    [-83.519961, 38.703591],
                    [-83.142052, 38.626914],
                    [-83.032514, 38.725499],
                    [-82.890113, 38.758361],
                    [-82.846298, 38.588575],
                    [-82.731282, 38.561191],
                    [-82.594358, 38.424267],
                    [-82.621743, 38.123036],
                    [-82.50125, 37.931343],
                    [-82.342419, 37.783465],
                    [-82.293127, 37.668449],
                    [-82.101434, 37.553434],
                    [-81.969987, 37.537003],
                    [-82.353373, 37.268633],
                    [-82.720328, 37.120755],
                    [-82.720328, 37.044078],
                    [-82.868205, 36.978355],
                    [-82.879159, 36.890724],
                    [-83.070852, 36.852385],
                    [-83.136575, 36.742847],
                    [-83.673316, 36.600446],
                    [-83.689746, 36.584015],
                    [-84.544149, 36.594969],
                    [-85.289013, 36.627831],
                    [-85.486183, 36.616877],
                    [-86.592525, 36.655216],
                    [-87.852221, 36.633308],
                    [-88.071299, 36.677123],
                    [-88.054868, 36.496384],
                    [-89.298133, 36.507338],
                    [-89.418626, 36.496384],
                    [-89.363857, 36.622354],
                    [-89.215979, 36.578538],
                    [-89.133825, 36.983832],
                    [-89.183118, 37.038601],
                    [-89.029763, 37.213863],
                    [-88.914747, 37.224817],
                    [-88.547792, 37.071463],
                    [-88.421823, 37.153617],
                    [-88.514931, 37.285064],
                    [-88.476592, 37.389126],
                    [-88.065822, 37.482234],
                    [-88.15893, 37.657496],
                    [-88.027483, 37.799896],
                    [-87.934375, 37.893004],
                    [-87.682436, 37.903958],
                    [-87.600282, 37.975158],
                    [-87.512651, 37.903958],
                    [-87.381204, 37.93682],
                    [-87.129265, 37.788942],
                    [-87.047111, 37.893004],
                    [-86.795172, 37.991589],
                    [-86.729448, 37.893004],
                    [-86.504894, 37.931343],
                    [-86.521325, 38.040881],
                    [-86.302247, 38.166851],
                    [-86.263908, 38.051835],
                    [-86.039354, 37.958727],
                    [-85.924338, 38.024451],
                    [-85.83123, 38.27639],
                    [-85.655968, 38.325682],
                    [-85.590245, 38.451652],
                    [-85.42046, 38.533806],
                    [-85.431413, 38.730976],
                    [-85.173997, 38.68716],
                    [-84.987781, 38.780268],
                    [-84.812519, 38.785745],
                    [-84.894673, 39.059592],
                    [-84.817996, 39.103408],
                    [-84.43461, 39.103408],
                    [-84.231963, 38.895284],
                    [-84.215533, 38.807653],
                    [-83.903347, 38.769315],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '22',
              properties: { name: 'Louisiana' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-93.608485, 33.018527],
                    [-91.16577, 33.002096],
                    [-91.072662, 32.887081],
                    [-91.143862, 32.843265],
                    [-91.154816, 32.640618],
                    [-91.006939, 32.514649],
                    [-90.985031, 32.218894],
                    [-91.105524, 31.988862],
                    [-91.341032, 31.846462],
                    [-91.401278, 31.621907],
                    [-91.499863, 31.643815],
                    [-91.516294, 31.27686],
                    [-91.636787, 31.265906],
                    [-91.565587, 31.068736],
                    [-91.636787, 30.997536],
                    [-89.747242, 30.997536],
                    [-89.845827, 30.66892],
                    [-89.681519, 30.449842],
                    [-89.643181, 30.285534],
                    [-89.522688, 30.181472],
                    [-89.818443, 30.044549],
                    [-89.84035, 29.945964],
                    [-89.599365, 29.88024],
                    [-89.495303, 30.039072],
                    [-89.287179, 29.88024],
                    [-89.30361, 29.754271],
                    [-89.424103, 29.699501],
                    [-89.648657, 29.748794],
                    [-89.621273, 29.655686],
                    [-89.69795, 29.513285],
                    [-89.506257, 29.387316],
                    [-89.199548, 29.348977],
                    [-89.09001, 29.2011],
                    [-89.002379, 29.179192],
                    [-89.16121, 29.009407],
                    [-89.336472, 29.042268],
                    [-89.484349, 29.217531],
                    [-89.851304, 29.310638],
                    [-89.851304, 29.480424],
                    [-90.032043, 29.425654],
                    [-90.021089, 29.283254],
                    [-90.103244, 29.151807],
                    [-90.23469, 29.129899],
                    [-90.333275, 29.277777],
                    [-90.563307, 29.283254],
                    [-90.645461, 29.129899],
                    [-90.798815, 29.086084],
                    [-90.963123, 29.179192],
                    [-91.09457, 29.190146],
                    [-91.220539, 29.436608],
                    [-91.445094, 29.546147],
                    [-91.532725, 29.529716],
                    [-91.620356, 29.73784],
                    [-91.883249, 29.710455],
                    [-91.888726, 29.836425],
                    [-92.146142, 29.715932],
                    [-92.113281, 29.622824],
                    [-92.31045, 29.535193],
                    [-92.617159, 29.579009],
                    [-92.97316, 29.715932],
                    [-93.2251, 29.776178],
                    [-93.767317, 29.726886],
                    [-93.838517, 29.688547],
                    [-93.926148, 29.787132],
                    [-93.690639, 30.143133],
                    [-93.767317, 30.334826],
                    [-93.696116, 30.438888],
                    [-93.728978, 30.575812],
                    [-93.630393, 30.679874],
                    [-93.526331, 30.93729],
                    [-93.542762, 31.15089],
                    [-93.816609, 31.556184],
                    [-93.822086, 31.775262],
                    [-94.041164, 31.994339],
                    [-94.041164, 33.018527],
                    [-93.608485, 33.018527],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '23',
              properties: { name: 'Maine' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-70.703921, 43.057759],
                    [-70.824413, 43.128959],
                    [-70.807983, 43.227544],
                    [-70.966814, 43.34256],
                    [-71.032537, 44.657025],
                    [-71.08183, 45.303304],
                    [-70.649151, 45.440228],
                    [-70.720352, 45.511428],
                    [-70.556043, 45.664782],
                    [-70.386258, 45.735983],
                    [-70.41912, 45.796229],
                    [-70.260289, 45.889337],
                    [-70.309581, 46.064599],
                    [-70.210996, 46.327492],
                    [-70.057642, 46.415123],
                    [-69.997395, 46.694447],
                    [-69.225147, 47.461219],
                    [-69.044408, 47.428357],
                    [-69.033454, 47.242141],
                    [-68.902007, 47.176418],
                    [-68.578868, 47.285957],
                    [-68.376221, 47.285957],
                    [-68.233821, 47.357157],
                    [-67.954497, 47.198326],
                    [-67.790188, 47.066879],
                    [-67.779235, 45.944106],
                    [-67.801142, 45.675736],
                    [-67.456095, 45.604536],
                    [-67.505388, 45.48952],
                    [-67.417757, 45.379982],
                    [-67.488957, 45.281397],
                    [-67.346556, 45.128042],
                    [-67.16034, 45.160904],
                    [-66.979601, 44.804903],
                    [-67.187725, 44.646072],
                    [-67.308218, 44.706318],
                    [-67.406803, 44.596779],
                    [-67.549203, 44.624164],
                    [-67.565634, 44.531056],
                    [-67.75185, 44.54201],
                    [-68.047605, 44.328409],
                    [-68.118805, 44.476286],
                    [-68.222867, 44.48724],
                    [-68.173574, 44.328409],
                    [-68.403606, 44.251732],
                    [-68.458375, 44.377701],
                    [-68.567914, 44.311978],
                    [-68.82533, 44.311978],
                    [-68.830807, 44.459856],
                    [-68.984161, 44.426994],
                    [-68.956777, 44.322932],
                    [-69.099177, 44.103854],
                    [-69.071793, 44.043608],
                    [-69.258008, 43.923115],
                    [-69.444224, 43.966931],
                    [-69.553763, 43.840961],
                    [-69.707118, 43.82453],
                    [-69.833087, 43.720469],
                    [-69.986442, 43.742376],
                    [-70.030257, 43.851915],
                    [-70.254812, 43.676653],
                    [-70.194565, 43.567114],
                    [-70.358873, 43.528776],
                    [-70.369827, 43.435668],
                    [-70.556043, 43.320652],
                    [-70.703921, 43.057759],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '24',
              properties: { name: 'Maryland' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-75.994645, 37.95325],
                      [-76.016553, 37.95325],
                      [-76.043938, 37.95325],
                      [-75.994645, 37.95325],
                    ],
                  ],
                  [
                    [
                      [-79.477979, 39.722302],
                      [-75.786521, 39.722302],
                      [-75.693413, 38.462606],
                      [-75.047134, 38.451652],
                      [-75.244304, 38.029928],
                      [-75.397659, 38.013497],
                      [-75.671506, 37.95325],
                      [-75.885106, 37.909435],
                      [-75.879629, 38.073743],
                      [-75.961783, 38.139466],
                      [-75.846768, 38.210667],
                      [-76.000122, 38.374975],
                      [-76.049415, 38.303775],
                      [-76.257538, 38.320205],
                      [-76.328738, 38.500944],
                      [-76.263015, 38.500944],
                      [-76.257538, 38.736453],
                      [-76.191815, 38.829561],
                      [-76.279446, 39.147223],
                      [-76.169907, 39.333439],
                      [-76.000122, 39.366301],
                      [-75.972737, 39.557994],
                      [-76.098707, 39.536086],
                      [-76.104184, 39.437501],
                      [-76.367077, 39.311532],
                      [-76.443754, 39.196516],
                      [-76.460185, 38.906238],
                      [-76.55877, 38.769315],
                      [-76.514954, 38.539283],
                      [-76.383508, 38.380452],
                      [-76.399939, 38.259959],
                      [-76.317785, 38.139466],
                      [-76.3616, 38.057312],
                      [-76.591632, 38.216144],
                      [-76.920248, 38.292821],
                      [-77.018833, 38.446175],
                      [-77.205049, 38.358544],
                      [-77.276249, 38.479037],
                      [-77.128372, 38.632391],
                      [-77.040741, 38.791222],
                      [-76.909294, 38.895284],
                      [-77.035264, 38.993869],
                      [-77.117418, 38.933623],
                      [-77.248864, 39.026731],
                      [-77.456988, 39.076023],
                      [-77.456988, 39.223901],
                      [-77.566527, 39.306055],
                      [-77.719881, 39.322485],
                      [-77.834897, 39.601809],
                      [-78.004682, 39.601809],
                      [-78.174467, 39.694917],
                      [-78.267575, 39.61824],
                      [-78.431884, 39.623717],
                      [-78.470222, 39.514178],
                      [-78.765977, 39.585379],
                      [-78.963147, 39.437501],
                      [-79.094593, 39.470363],
                      [-79.291763, 39.300578],
                      [-79.488933, 39.20747],
                      [-79.477979, 39.722302],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '25',
              properties: { name: 'Massachusetts' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-70.917521, 42.887974],
                    [-70.818936, 42.871543],
                    [-70.780598, 42.696281],
                    [-70.824413, 42.55388],
                    [-70.983245, 42.422434],
                    [-70.988722, 42.269079],
                    [-70.769644, 42.247172],
                    [-70.638197, 42.08834],
                    [-70.660105, 41.962371],
                    [-70.550566, 41.929509],
                    [-70.539613, 41.814493],
                    [-70.260289, 41.715908],
                    [-69.937149, 41.809016],
                    [-70.008349, 41.672093],
                    [-70.484843, 41.5516],
                    [-70.660105, 41.546123],
                    [-70.764167, 41.639231],
                    [-70.928475, 41.611847],
                    [-70.933952, 41.540646],
                    [-71.120168, 41.496831],
                    [-71.196845, 41.67757],
                    [-71.22423, 41.710431],
                    [-71.328292, 41.781632],
                    [-71.383061, 42.01714],
                    [-71.530939, 42.01714],
                    [-71.799309, 42.006186],
                    [-71.799309, 42.022617],
                    [-73.053528, 42.039048],
                    [-73.486206, 42.050002],
                    [-73.508114, 42.08834],
                    [-73.267129, 42.745573],
                    [-72.456542, 42.729142],
                    [-71.29543, 42.696281],
                    [-71.185891, 42.789389],
                    [-70.917521, 42.887974],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '26',
              properties: { name: 'Michigan' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-83.454238, 41.732339],
                      [-84.807042, 41.694001],
                      [-84.807042, 41.759724],
                      [-85.990061, 41.759724],
                      [-86.822556, 41.759724],
                      [-86.619909, 41.891171],
                      [-86.482986, 42.115725],
                      [-86.357016, 42.252649],
                      [-86.263908, 42.444341],
                      [-86.209139, 42.718189],
                      [-86.231047, 43.013943],
                      [-86.526801, 43.594499],
                      [-86.433693, 43.813577],
                      [-86.499417, 44.07647],
                      [-86.269385, 44.34484],
                      [-86.220093, 44.569394],
                      [-86.252954, 44.689887],
                      [-86.088646, 44.73918],
                      [-86.066738, 44.903488],
                      [-85.809322, 44.947303],
                      [-85.612152, 45.128042],
                      [-85.628583, 44.766564],
                      [-85.524521, 44.750133],
                      [-85.393075, 44.930872],
                      [-85.387598, 45.237581],
                      [-85.305444, 45.314258],
                      [-85.031597, 45.363551],
                      [-85.119228, 45.577151],
                      [-84.938489, 45.75789],
                      [-84.713934, 45.768844],
                      [-84.461995, 45.653829],
                      [-84.215533, 45.637398],
                      [-84.09504, 45.494997],
                      [-83.908824, 45.484043],
                      [-83.596638, 45.352597],
                      [-83.4871, 45.358074],
                      [-83.317314, 45.144473],
                      [-83.454238, 45.029457],
                      [-83.322791, 44.88158],
                      [-83.273499, 44.711795],
                      [-83.333745, 44.339363],
                      [-83.536392, 44.246255],
                      [-83.585684, 44.054562],
                      [-83.82667, 43.988839],
                      [-83.958116, 43.758807],
                      [-83.908824, 43.671176],
                      [-83.667839, 43.589022],
                      [-83.481623, 43.714992],
                      [-83.262545, 43.972408],
                      [-82.917498, 44.070993],
                      [-82.747713, 43.994316],
                      [-82.643651, 43.851915],
                      [-82.539589, 43.435668],
                      [-82.523158, 43.227544],
                      [-82.413619, 42.975605],
                      [-82.517681, 42.614127],
                      [-82.681989, 42.559357],
                      [-82.687466, 42.690804],
                      [-82.797005, 42.652465],
                      [-82.922975, 42.351234],
                      [-83.125621, 42.236218],
                      [-83.185868, 42.006186],
                      [-83.437807, 41.814493],
                      [-83.454238, 41.732339],
                    ],
                  ],
                  [
                    [
                      [-85.508091, 45.730506],
                      [-85.49166, 45.610013],
                      [-85.623106, 45.588105],
                      [-85.568337, 45.75789],
                      [-85.508091, 45.730506],
                    ],
                  ],
                  [
                    [
                      [-87.589328, 45.095181],
                      [-87.742682, 45.199243],
                      [-87.649574, 45.341643],
                      [-87.885083, 45.363551],
                      [-87.791975, 45.500474],
                      [-87.781021, 45.675736],
                      [-87.989145, 45.796229],
                      [-88.10416, 45.922199],
                      [-88.531362, 46.020784],
                      [-88.662808, 45.987922],
                      [-89.09001, 46.135799],
                      [-90.119674, 46.338446],
                      [-90.229213, 46.508231],
                      [-90.415429, 46.568478],
                      [-90.026566, 46.672539],
                      [-89.851304, 46.793032],
                      [-89.413149, 46.842325],
                      [-89.128348, 46.990202],
                      [-88.996902, 46.995679],
                      [-88.887363, 47.099741],
                      [-88.575177, 47.247618],
                      [-88.416346, 47.373588],
                      [-88.180837, 47.455742],
                      [-87.956283, 47.384542],
                      [-88.350623, 47.077833],
                      [-88.443731, 46.973771],
                      [-88.438254, 46.787555],
                      [-88.246561, 46.929956],
                      [-87.901513, 46.908048],
                      [-87.633143, 46.809463],
                      [-87.392158, 46.535616],
                      [-87.260711, 46.486323],
                      [-87.008772, 46.530139],
                      [-86.948526, 46.469893],
                      [-86.696587, 46.437031],
                      [-86.159846, 46.667063],
                      [-85.880522, 46.68897],
                      [-85.508091, 46.678016],
                      [-85.256151, 46.754694],
                      [-85.064458, 46.760171],
                      [-85.02612, 46.480847],
                      [-84.82895, 46.442508],
                      [-84.63178, 46.486323],
                      [-84.549626, 46.4206],
                      [-84.418179, 46.502754],
                      [-84.127902, 46.530139],
                      [-84.122425, 46.179615],
                      [-83.990978, 46.031737],
                      [-83.793808, 45.993399],
                      [-83.7719, 46.091984],
                      [-83.580208, 46.091984],
                      [-83.476146, 45.987922],
                      [-83.563777, 45.911245],
                      [-84.111471, 45.976968],
                      [-84.374364, 45.933153],
                      [-84.659165, 46.053645],
                      [-84.741319, 45.944106],
                      [-84.70298, 45.850998],
                      [-84.82895, 45.872906],
                      [-85.015166, 46.00983],
                      [-85.338305, 46.091984],
                      [-85.502614, 46.097461],
                      [-85.661445, 45.966014],
                      [-85.924338, 45.933153],
                      [-86.209139, 45.960537],
                      [-86.324155, 45.905768],
                      [-86.351539, 45.796229],
                      [-86.663725, 45.703121],
                      [-86.647294, 45.834568],
                      [-86.784218, 45.861952],
                      [-86.838987, 45.725029],
                      [-87.069019, 45.719552],
                      [-87.17308, 45.659305],
                      [-87.326435, 45.423797],
                      [-87.611236, 45.122565],
                      [-87.589328, 45.095181],
                    ],
                  ],
                  [
                    [
                      [-88.805209, 47.976051],
                      [-89.057148, 47.850082],
                      [-89.188594, 47.833651],
                      [-89.177641, 47.937713],
                      [-88.547792, 48.173221],
                      [-88.668285, 48.008913],
                      [-88.805209, 47.976051],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '27',
              properties: { name: 'Minnesota' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-92.014696, 46.705401],
                    [-92.091373, 46.749217],
                    [-92.29402, 46.667063],
                    [-92.29402, 46.075553],
                    [-92.354266, 46.015307],
                    [-92.639067, 45.933153],
                    [-92.869098, 45.719552],
                    [-92.885529, 45.577151],
                    [-92.770513, 45.566198],
                    [-92.644544, 45.440228],
                    [-92.75956, 45.286874],
                    [-92.737652, 45.117088],
                    [-92.808852, 44.750133],
                    [-92.545959, 44.569394],
                    [-92.337835, 44.552964],
                    [-92.233773, 44.443425],
                    [-91.927065, 44.333886],
                    [-91.877772, 44.202439],
                    [-91.592971, 44.032654],
                    [-91.43414, 43.994316],
                    [-91.242447, 43.775238],
                    [-91.269832, 43.616407],
                    [-91.215062, 43.501391],
                    [-91.368417, 43.501391],
                    [-96.451017, 43.501391],
                    [-96.451017, 45.297827],
                    [-96.681049, 45.412843],
                    [-96.856311, 45.604536],
                    [-96.582464, 45.818137],
                    [-96.560556, 45.933153],
                    [-96.598895, 46.332969],
                    [-96.719387, 46.437031],
                    [-96.801542, 46.656109],
                    [-96.785111, 46.924479],
                    [-96.823449, 46.968294],
                    [-96.856311, 47.609096],
                    [-97.053481, 47.948667],
                    [-97.130158, 48.140359],
                    [-97.16302, 48.545653],
                    [-97.097296, 48.682577],
                    [-97.228743, 49.000239],
                    [-95.152983, 49.000239],
                    [-95.152983, 49.383625],
                    [-94.955813, 49.372671],
                    [-94.824366, 49.295994],
                    [-94.69292, 48.775685],
                    [-94.588858, 48.715438],
                    [-94.260241, 48.699007],
                    [-94.221903, 48.649715],
                    [-93.838517, 48.627807],
                    [-93.794701, 48.518268],
                    [-93.466085, 48.545653],
                    [-93.466085, 48.589469],
                    [-93.208669, 48.644238],
                    [-92.984114, 48.62233],
                    [-92.726698, 48.540176],
                    [-92.655498, 48.436114],
                    [-92.50762, 48.447068],
                    [-92.370697, 48.222514],
                    [-92.304974, 48.315622],
                    [-92.053034, 48.359437],
                    [-92.009219, 48.266329],
                    [-91.713464, 48.200606],
                    [-91.713464, 48.112975],
                    [-91.565587, 48.041775],
                    [-91.264355, 48.080113],
                    [-91.083616, 48.178698],
                    [-90.837154, 48.238944],
                    [-90.749522, 48.091067],
                    [-90.579737, 48.123929],
                    [-90.377091, 48.091067],
                    [-90.141582, 48.112975],
                    [-89.873212, 47.987005],
                    [-89.615796, 48.008913],
                    [-89.637704, 47.954144],
                    [-89.971797, 47.828174],
                    [-90.437337, 47.729589],
                    [-90.738569, 47.625527],
                    [-91.171247, 47.368111],
                    [-91.357463, 47.20928],
                    [-91.642264, 47.028541],
                    [-92.091373, 46.787555],
                    [-92.014696, 46.705401],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '28',
              properties: { name: 'Mississippi' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-88.471115, 34.995703],
                    [-88.202745, 34.995703],
                    [-88.098683, 34.891641],
                    [-88.241084, 33.796253],
                    [-88.471115, 31.895754],
                    [-88.394438, 30.367688],
                    [-88.503977, 30.323872],
                    [-88.744962, 30.34578],
                    [-88.843547, 30.411504],
                    [-89.084533, 30.367688],
                    [-89.418626, 30.252672],
                    [-89.522688, 30.181472],
                    [-89.643181, 30.285534],
                    [-89.681519, 30.449842],
                    [-89.845827, 30.66892],
                    [-89.747242, 30.997536],
                    [-91.636787, 30.997536],
                    [-91.565587, 31.068736],
                    [-91.636787, 31.265906],
                    [-91.516294, 31.27686],
                    [-91.499863, 31.643815],
                    [-91.401278, 31.621907],
                    [-91.341032, 31.846462],
                    [-91.105524, 31.988862],
                    [-90.985031, 32.218894],
                    [-91.006939, 32.514649],
                    [-91.154816, 32.640618],
                    [-91.143862, 32.843265],
                    [-91.072662, 32.887081],
                    [-91.16577, 33.002096],
                    [-91.089093, 33.13902],
                    [-91.143862, 33.347144],
                    [-91.056231, 33.429298],
                    [-91.231493, 33.560744],
                    [-91.072662, 33.867453],
                    [-90.891923, 34.026284],
                    [-90.952169, 34.135823],
                    [-90.744046, 34.300131],
                    [-90.749522, 34.365854],
                    [-90.568783, 34.420624],
                    [-90.585214, 34.617794],
                    [-90.481152, 34.661609],
                    [-90.409952, 34.831394],
                    [-90.251121, 34.908072],
                    [-90.311367, 34.995703],
                    [-88.471115, 34.995703],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '29',
              properties: { name: 'Missouri' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-91.833957, 40.609566],
                    [-91.729895, 40.615043],
                    [-91.527248, 40.412397],
                    [-91.417709, 40.379535],
                    [-91.50534, 40.237135],
                    [-91.494386, 40.034488],
                    [-91.368417, 39.727779],
                    [-91.061708, 39.470363],
                    [-90.727615, 39.256762],
                    [-90.661891, 38.928146],
                    [-90.585214, 38.867899],
                    [-90.470199, 38.961007],
                    [-90.251121, 38.917192],
                    [-90.10872, 38.845992],
                    [-90.207305, 38.725499],
                    [-90.179921, 38.632391],
                    [-90.349706, 38.374975],
                    [-90.355183, 38.216144],
                    [-90.059428, 38.013497],
                    [-89.949889, 37.88205],
                    [-89.84035, 37.903958],
                    [-89.517211, 37.690357],
                    [-89.517211, 37.537003],
                    [-89.435057, 37.34531],
                    [-89.517211, 37.279587],
                    [-89.292656, 36.994786],
                    [-89.133825, 36.983832],
                    [-89.215979, 36.578538],
                    [-89.363857, 36.622354],
                    [-89.418626, 36.496384],
                    [-89.484349, 36.496384],
                    [-89.539119, 36.496384],
                    [-89.533642, 36.249922],
                    [-89.730812, 35.997983],
                    [-90.377091, 35.997983],
                    [-90.218259, 36.184199],
                    [-90.064905, 36.304691],
                    [-90.152536, 36.496384],
                    [-94.473842, 36.501861],
                    [-94.616242, 36.501861],
                    [-94.616242, 37.000263],
                    [-94.610765, 39.158177],
                    [-94.824366, 39.20747],
                    [-94.983197, 39.442978],
                    [-95.109167, 39.541563],
                    [-94.884612, 39.831841],
                    [-95.207752, 39.908518],
                    [-95.306337, 40.001626],
                    [-95.552799, 40.264519],
                    [-95.7664, 40.587659],
                    [-94.632673, 40.571228],
                    [-93.257961, 40.582182],
                    [-91.833957, 40.609566],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '30',
              properties: { name: 'Montana' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-104.047534, 49.000239],
                    [-104.042057, 47.861036],
                    [-104.047534, 45.944106],
                    [-104.042057, 44.996596],
                    [-104.058488, 44.996596],
                    [-105.91517, 45.002073],
                    [-109.080842, 45.002073],
                    [-111.05254, 45.002073],
                    [-111.047063, 44.476286],
                    [-111.227803, 44.580348],
                    [-111.386634, 44.75561],
                    [-111.616665, 44.547487],
                    [-111.819312, 44.509148],
                    [-111.868605, 44.563917],
                    [-112.104113, 44.520102],
                    [-112.241036, 44.569394],
                    [-112.471068, 44.481763],
                    [-112.783254, 44.48724],
                    [-112.887315, 44.394132],
                    [-113.002331, 44.448902],
                    [-113.133778, 44.772041],
                    [-113.341901, 44.782995],
                    [-113.456917, 44.865149],
                    [-113.45144, 45.056842],
                    [-113.571933, 45.128042],
                    [-113.736241, 45.330689],
                    [-113.834826, 45.522382],
                    [-113.807441, 45.604536],
                    [-113.98818, 45.703121],
                    [-114.086765, 45.593582],
                    [-114.333228, 45.456659],
                    [-114.546828, 45.560721],
                    [-114.497536, 45.670259],
                    [-114.568736, 45.774321],
                    [-114.387997, 45.88386],
                    [-114.492059, 46.037214],
                    [-114.464674, 46.272723],
                    [-114.322274, 46.645155],
                    [-114.612552, 46.639678],
                    [-114.623506, 46.705401],
                    [-114.886399, 46.809463],
                    [-114.930214, 46.919002],
                    [-115.302646, 47.187372],
                    [-115.324554, 47.258572],
                    [-115.527201, 47.302388],
                    [-115.718894, 47.42288],
                    [-115.724371, 47.696727],
                    [-116.04751, 47.976051],
                    [-116.04751, 49.000239],
                    [-111.50165, 48.994762],
                    [-109.453274, 49.000239],
                    [-104.047534, 49.000239],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '31',
              properties: { name: 'Nebraska' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-103.324578, 43.002989],
                    [-101.626726, 42.997512],
                    [-98.499393, 42.997512],
                    [-98.466531, 42.94822],
                    [-97.951699, 42.767481],
                    [-97.831206, 42.866066],
                    [-97.688806, 42.844158],
                    [-97.217789, 42.844158],
                    [-96.692003, 42.657942],
                    [-96.626279, 42.515542],
                    [-96.44554, 42.488157],
                    [-96.264801, 42.039048],
                    [-96.127878, 41.973325],
                    [-96.062155, 41.798063],
                    [-96.122401, 41.67757],
                    [-96.095016, 41.540646],
                    [-95.919754, 41.453015],
                    [-95.925231, 41.201076],
                    [-95.826646, 40.976521],
                    [-95.881416, 40.719105],
                    [-95.7664, 40.587659],
                    [-95.552799, 40.264519],
                    [-95.306337, 40.001626],
                    [-101.90605, 40.001626],
                    [-102.053927, 40.001626],
                    [-102.053927, 41.003906],
                    [-104.053011, 41.003906],
                    [-104.053011, 43.002989],
                    [-103.324578, 43.002989],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '32',
              properties: { name: 'Nevada' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-117.027882, 42.000709],
                    [-114.04295, 41.995232],
                    [-114.048427, 37.000263],
                    [-114.048427, 36.195153],
                    [-114.152489, 36.025367],
                    [-114.251074, 36.01989],
                    [-114.371566, 36.140383],
                    [-114.738521, 36.102045],
                    [-114.678275, 35.516012],
                    [-114.596121, 35.324319],
                    [-114.574213, 35.138103],
                    [-114.634459, 35.00118],
                    [-115.85034, 35.970598],
                    [-116.540435, 36.501861],
                    [-117.498899, 37.21934],
                    [-118.71478, 38.101128],
                    [-120.001861, 38.999346],
                    [-119.996384, 40.264519],
                    [-120.001861, 41.995232],
                    [-118.698349, 41.989755],
                    [-117.027882, 42.000709],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '33',
              properties: { name: 'New Hampshire' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-71.08183, 45.303304],
                    [-71.032537, 44.657025],
                    [-70.966814, 43.34256],
                    [-70.807983, 43.227544],
                    [-70.824413, 43.128959],
                    [-70.703921, 43.057759],
                    [-70.818936, 42.871543],
                    [-70.917521, 42.887974],
                    [-71.185891, 42.789389],
                    [-71.29543, 42.696281],
                    [-72.456542, 42.729142],
                    [-72.544173, 42.80582],
                    [-72.533219, 42.953697],
                    [-72.445588, 43.008466],
                    [-72.456542, 43.150867],
                    [-72.379864, 43.572591],
                    [-72.204602, 43.769761],
                    [-72.116971, 43.994316],
                    [-72.02934, 44.07647],
                    [-72.034817, 44.322932],
                    [-71.700724, 44.41604],
                    [-71.536416, 44.585825],
                    [-71.629524, 44.750133],
                    [-71.4926, 44.914442],
                    [-71.503554, 45.013027],
                    [-71.361154, 45.270443],
                    [-71.131122, 45.243058],
                    [-71.08183, 45.303304],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '34',
              properties: { name: 'New Jersey' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-74.236547, 41.14083],
                    [-73.902454, 40.998429],
                    [-74.022947, 40.708151],
                    [-74.187255, 40.642428],
                    [-74.274886, 40.489074],
                    [-74.001039, 40.412397],
                    [-73.979131, 40.297381],
                    [-74.099624, 39.760641],
                    [-74.411809, 39.360824],
                    [-74.614456, 39.245808],
                    [-74.795195, 38.993869],
                    [-74.888303, 39.158177],
                    [-75.178581, 39.240331],
                    [-75.534582, 39.459409],
                    [-75.55649, 39.607286],
                    [-75.561967, 39.629194],
                    [-75.507197, 39.683964],
                    [-75.414089, 39.804456],
                    [-75.145719, 39.88661],
                    [-75.129289, 39.963288],
                    [-74.82258, 40.127596],
                    [-74.773287, 40.215227],
                    [-75.058088, 40.417874],
                    [-75.069042, 40.543843],
                    [-75.195012, 40.576705],
                    [-75.205966, 40.691721],
                    [-75.052611, 40.866983],
                    [-75.134765, 40.971045],
                    [-74.882826, 41.179168],
                    [-74.828057, 41.288707],
                    [-74.69661, 41.359907],
                    [-74.236547, 41.14083],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '35',
              properties: { name: 'New Mexico' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-107.421329, 37.000263],
                    [-106.868158, 36.994786],
                    [-104.337812, 36.994786],
                    [-103.001438, 37.000263],
                    [-103.001438, 36.501861],
                    [-103.039777, 36.501861],
                    [-103.045254, 34.01533],
                    [-103.067161, 33.002096],
                    [-103.067161, 31.999816],
                    [-106.616219, 31.999816],
                    [-106.643603, 31.901231],
                    [-106.528588, 31.786216],
                    [-108.210008, 31.786216],
                    [-108.210008, 31.331629],
                    [-109.04798, 31.331629],
                    [-109.042503, 37.000263],
                    [-107.421329, 37.000263],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '36',
              properties: { name: 'New York' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-73.343806, 45.013027],
                    [-73.332852, 44.804903],
                    [-73.387622, 44.618687],
                    [-73.294514, 44.437948],
                    [-73.321898, 44.246255],
                    [-73.436914, 44.043608],
                    [-73.349283, 43.769761],
                    [-73.404052, 43.687607],
                    [-73.245221, 43.523299],
                    [-73.278083, 42.833204],
                    [-73.267129, 42.745573],
                    [-73.508114, 42.08834],
                    [-73.486206, 42.050002],
                    [-73.55193, 41.294184],
                    [-73.48073, 41.21203],
                    [-73.727192, 41.102491],
                    [-73.655992, 40.987475],
                    [-73.22879, 40.905321],
                    [-73.141159, 40.965568],
                    [-72.774204, 40.965568],
                    [-72.587988, 40.998429],
                    [-72.28128, 41.157261],
                    [-72.259372, 41.042245],
                    [-72.100541, 40.992952],
                    [-72.467496, 40.845075],
                    [-73.239744, 40.625997],
                    [-73.562884, 40.582182],
                    [-73.776484, 40.593136],
                    [-73.935316, 40.543843],
                    [-74.022947, 40.708151],
                    [-73.902454, 40.998429],
                    [-74.236547, 41.14083],
                    [-74.69661, 41.359907],
                    [-74.740426, 41.431108],
                    [-74.89378, 41.436584],
                    [-75.074519, 41.60637],
                    [-75.052611, 41.754247],
                    [-75.173104, 41.869263],
                    [-75.249781, 41.863786],
                    [-75.35932, 42.000709],
                    [-79.76278, 42.000709],
                    [-79.76278, 42.252649],
                    [-79.76278, 42.269079],
                    [-79.149363, 42.55388],
                    [-79.050778, 42.690804],
                    [-78.853608, 42.783912],
                    [-78.930285, 42.953697],
                    [-79.012439, 42.986559],
                    [-79.072686, 43.260406],
                    [-78.486653, 43.375421],
                    [-77.966344, 43.369944],
                    [-77.75822, 43.34256],
                    [-77.533665, 43.233021],
                    [-77.391265, 43.276836],
                    [-76.958587, 43.271359],
                    [-76.695693, 43.34256],
                    [-76.41637, 43.523299],
                    [-76.235631, 43.528776],
                    [-76.230154, 43.802623],
                    [-76.137046, 43.961454],
                    [-76.3616, 44.070993],
                    [-76.312308, 44.196962],
                    [-75.912491, 44.366748],
                    [-75.764614, 44.514625],
                    [-75.282643, 44.848718],
                    [-74.828057, 45.018503],
                    [-74.148916, 44.991119],
                    [-73.343806, 45.013027],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '37',
              properties: { name: 'North Carolina' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-80.978661, 36.562108],
                    [-80.294043, 36.545677],
                    [-79.510841, 36.5402],
                    [-75.868676, 36.551154],
                    [-75.75366, 36.151337],
                    [-76.032984, 36.189676],
                    [-76.071322, 36.140383],
                    [-76.410893, 36.080137],
                    [-76.460185, 36.025367],
                    [-76.68474, 36.008937],
                    [-76.673786, 35.937736],
                    [-76.399939, 35.987029],
                    [-76.3616, 35.943213],
                    [-76.060368, 35.992506],
                    [-75.961783, 35.899398],
                    [-75.781044, 35.937736],
                    [-75.715321, 35.696751],
                    [-75.775568, 35.581735],
                    [-75.89606, 35.570781],
                    [-76.147999, 35.324319],
                    [-76.482093, 35.313365],
                    [-76.536862, 35.14358],
                    [-76.394462, 34.973795],
                    [-76.279446, 34.940933],
                    [-76.493047, 34.661609],
                    [-76.673786, 34.694471],
                    [-76.991448, 34.667086],
                    [-77.210526, 34.60684],
                    [-77.555573, 34.415147],
                    [-77.82942, 34.163208],
                    [-77.971821, 33.845545],
                    [-78.179944, 33.916745],
                    [-78.541422, 33.851022],
                    [-79.675149, 34.80401],
                    [-80.797922, 34.820441],
                    [-80.781491, 34.935456],
                    [-80.934845, 35.105241],
                    [-81.038907, 35.044995],
                    [-81.044384, 35.149057],
                    [-82.276696, 35.198349],
                    [-82.550543, 35.160011],
                    [-82.764143, 35.066903],
                    [-83.109191, 35.00118],
                    [-83.618546, 34.984749],
                    [-84.319594, 34.990226],
                    [-84.29221, 35.225734],
                    [-84.09504, 35.247642],
                    [-84.018363, 35.41195],
                    [-83.7719, 35.559827],
                    [-83.498053, 35.565304],
                    [-83.251591, 35.718659],
                    [-82.994175, 35.773428],
                    [-82.775097, 35.997983],
                    [-82.638174, 36.063706],
                    [-82.610789, 35.965121],
                    [-82.216449, 36.156814],
                    [-82.03571, 36.118475],
                    [-81.909741, 36.304691],
                    [-81.723525, 36.353984],
                    [-81.679709, 36.589492],
                    [-80.978661, 36.562108],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '38',
              properties: { name: 'North Dakota' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-97.228743, 49.000239],
                    [-97.097296, 48.682577],
                    [-97.16302, 48.545653],
                    [-97.130158, 48.140359],
                    [-97.053481, 47.948667],
                    [-96.856311, 47.609096],
                    [-96.823449, 46.968294],
                    [-96.785111, 46.924479],
                    [-96.801542, 46.656109],
                    [-96.719387, 46.437031],
                    [-96.598895, 46.332969],
                    [-96.560556, 45.933153],
                    [-104.047534, 45.944106],
                    [-104.042057, 47.861036],
                    [-104.047534, 49.000239],
                    [-97.228743, 49.000239],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '39',
              properties: { name: 'Ohio' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-80.518598, 41.978802],
                    [-80.518598, 40.636951],
                    [-80.666475, 40.582182],
                    [-80.595275, 40.472643],
                    [-80.600752, 40.319289],
                    [-80.737675, 40.078303],
                    [-80.830783, 39.711348],
                    [-81.219646, 39.388209],
                    [-81.345616, 39.344393],
                    [-81.455155, 39.410117],
                    [-81.57017, 39.267716],
                    [-81.685186, 39.273193],
                    [-81.811156, 39.0815],
                    [-81.783771, 38.966484],
                    [-81.887833, 38.873376],
                    [-82.03571, 39.026731],
                    [-82.221926, 38.785745],
                    [-82.172634, 38.632391],
                    [-82.293127, 38.577622],
                    [-82.331465, 38.446175],
                    [-82.594358, 38.424267],
                    [-82.731282, 38.561191],
                    [-82.846298, 38.588575],
                    [-82.890113, 38.758361],
                    [-83.032514, 38.725499],
                    [-83.142052, 38.626914],
                    [-83.519961, 38.703591],
                    [-83.678792, 38.632391],
                    [-83.903347, 38.769315],
                    [-84.215533, 38.807653],
                    [-84.231963, 38.895284],
                    [-84.43461, 39.103408],
                    [-84.817996, 39.103408],
                    [-84.801565, 40.500028],
                    [-84.807042, 41.694001],
                    [-83.454238, 41.732339],
                    [-83.065375, 41.595416],
                    [-82.933929, 41.513262],
                    [-82.835344, 41.589939],
                    [-82.616266, 41.431108],
                    [-82.479343, 41.381815],
                    [-82.013803, 41.513262],
                    [-81.739956, 41.485877],
                    [-81.444201, 41.672093],
                    [-81.011523, 41.852832],
                    [-80.518598, 41.978802],
                    [-80.518598, 41.978802],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '40',
              properties: { name: 'Oklahoma' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-100.087706, 37.000263],
                    [-94.616242, 37.000263],
                    [-94.616242, 36.501861],
                    [-94.430026, 35.395519],
                    [-94.484796, 33.637421],
                    [-94.868182, 33.74696],
                    [-94.966767, 33.861976],
                    [-95.224183, 33.960561],
                    [-95.289906, 33.87293],
                    [-95.547322, 33.878407],
                    [-95.602092, 33.933176],
                    [-95.8376, 33.834591],
                    [-95.936185, 33.889361],
                    [-96.149786, 33.840068],
                    [-96.346956, 33.686714],
                    [-96.423633, 33.774345],
                    [-96.631756, 33.845545],
                    [-96.850834, 33.845545],
                    [-96.922034, 33.960561],
                    [-97.173974, 33.736006],
                    [-97.256128, 33.861976],
                    [-97.371143, 33.823637],
                    [-97.458774, 33.905791],
                    [-97.694283, 33.982469],
                    [-97.869545, 33.851022],
                    [-97.946222, 33.987946],
                    [-98.088623, 34.004376],
                    [-98.170777, 34.113915],
                    [-98.36247, 34.157731],
                    [-98.488439, 34.064623],
                    [-98.570593, 34.146777],
                    [-98.767763, 34.135823],
                    [-98.986841, 34.223454],
                    [-99.189488, 34.2125],
                    [-99.260688, 34.404193],
                    [-99.57835, 34.415147],
                    [-99.698843, 34.382285],
                    [-99.923398, 34.573978],
                    [-100.000075, 34.563024],
                    [-100.000075, 36.501861],
                    [-101.812942, 36.501861],
                    [-103.001438, 36.501861],
                    [-103.001438, 37.000263],
                    [-102.042974, 36.994786],
                    [-100.087706, 37.000263],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '41',
              properties: { name: 'Oregon' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-123.211348, 46.174138],
                    [-123.11824, 46.185092],
                    [-122.904639, 46.08103],
                    [-122.811531, 45.960537],
                    [-122.762239, 45.659305],
                    [-122.247407, 45.549767],
                    [-121.809251, 45.708598],
                    [-121.535404, 45.725029],
                    [-121.217742, 45.670259],
                    [-121.18488, 45.604536],
                    [-120.637186, 45.746937],
                    [-120.505739, 45.697644],
                    [-120.209985, 45.725029],
                    [-119.963522, 45.823614],
                    [-119.525367, 45.911245],
                    [-119.125551, 45.933153],
                    [-118.988627, 45.998876],
                    [-116.918344, 45.993399],
                    [-116.78142, 45.823614],
                    [-116.545912, 45.752413],
                    [-116.463758, 45.61549],
                    [-116.671881, 45.319735],
                    [-116.732128, 45.144473],
                    [-116.847143, 45.02398],
                    [-116.830713, 44.930872],
                    [-116.934774, 44.782995],
                    [-117.038836, 44.750133],
                    [-117.241483, 44.394132],
                    [-117.170283, 44.257209],
                    [-116.97859, 44.240778],
                    [-116.896436, 44.158624],
                    [-117.027882, 43.830007],
                    [-117.027882, 42.000709],
                    [-118.698349, 41.989755],
                    [-120.001861, 41.995232],
                    [-121.037003, 41.995232],
                    [-122.378853, 42.011663],
                    [-123.233256, 42.006186],
                    [-124.213628, 42.000709],
                    [-124.356029, 42.115725],
                    [-124.432706, 42.438865],
                    [-124.416275, 42.663419],
                    [-124.553198, 42.838681],
                    [-124.454613, 43.002989],
                    [-124.383413, 43.271359],
                    [-124.235536, 43.55616],
                    [-124.169813, 43.8081],
                    [-124.060274, 44.657025],
                    [-124.076705, 44.772041],
                    [-123.97812, 45.144473],
                    [-123.939781, 45.659305],
                    [-123.994551, 45.944106],
                    [-123.945258, 46.113892],
                    [-123.545441, 46.261769],
                    [-123.370179, 46.146753],
                    [-123.211348, 46.174138],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '42',
              properties: { name: 'Pennsylvania' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-79.76278, 42.252649],
                    [-79.76278, 42.000709],
                    [-75.35932, 42.000709],
                    [-75.249781, 41.863786],
                    [-75.173104, 41.869263],
                    [-75.052611, 41.754247],
                    [-75.074519, 41.60637],
                    [-74.89378, 41.436584],
                    [-74.740426, 41.431108],
                    [-74.69661, 41.359907],
                    [-74.828057, 41.288707],
                    [-74.882826, 41.179168],
                    [-75.134765, 40.971045],
                    [-75.052611, 40.866983],
                    [-75.205966, 40.691721],
                    [-75.195012, 40.576705],
                    [-75.069042, 40.543843],
                    [-75.058088, 40.417874],
                    [-74.773287, 40.215227],
                    [-74.82258, 40.127596],
                    [-75.129289, 39.963288],
                    [-75.145719, 39.88661],
                    [-75.414089, 39.804456],
                    [-75.616736, 39.831841],
                    [-75.786521, 39.722302],
                    [-79.477979, 39.722302],
                    [-80.518598, 39.722302],
                    [-80.518598, 40.636951],
                    [-80.518598, 41.978802],
                    [-80.518598, 41.978802],
                    [-80.332382, 42.033571],
                    [-79.76278, 42.269079],
                    [-79.76278, 42.252649],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '44',
              properties: { name: 'Rhode Island' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-71.196845, 41.67757],
                      [-71.120168, 41.496831],
                      [-71.317338, 41.474923],
                      [-71.196845, 41.67757],
                    ],
                  ],
                  [
                    [
                      [-71.530939, 42.01714],
                      [-71.383061, 42.01714],
                      [-71.328292, 41.781632],
                      [-71.22423, 41.710431],
                      [-71.344723, 41.726862],
                      [-71.448785, 41.578985],
                      [-71.481646, 41.370861],
                      [-71.859555, 41.321569],
                      [-71.799309, 41.414677],
                      [-71.799309, 42.006186],
                      [-71.530939, 42.01714],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '45',
              properties: { name: 'South Carolina' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-82.764143, 35.066903],
                    [-82.550543, 35.160011],
                    [-82.276696, 35.198349],
                    [-81.044384, 35.149057],
                    [-81.038907, 35.044995],
                    [-80.934845, 35.105241],
                    [-80.781491, 34.935456],
                    [-80.797922, 34.820441],
                    [-79.675149, 34.80401],
                    [-78.541422, 33.851022],
                    [-78.716684, 33.80173],
                    [-78.935762, 33.637421],
                    [-79.149363, 33.380005],
                    [-79.187701, 33.171881],
                    [-79.357487, 33.007573],
                    [-79.582041, 33.007573],
                    [-79.631334, 32.887081],
                    [-79.866842, 32.755634],
                    [-79.998289, 32.613234],
                    [-80.206412, 32.552987],
                    [-80.430967, 32.399633],
                    [-80.452875, 32.328433],
                    [-80.660998, 32.246279],
                    [-80.885553, 32.032678],
                    [-81.115584, 32.120309],
                    [-81.121061, 32.290094],
                    [-81.279893, 32.558464],
                    [-81.416816, 32.629664],
                    [-81.42777, 32.843265],
                    [-81.493493, 33.007573],
                    [-81.761863, 33.160928],
                    [-81.937125, 33.347144],
                    [-81.926172, 33.462159],
                    [-82.194542, 33.631944],
                    [-82.325988, 33.81816],
                    [-82.55602, 33.94413],
                    [-82.714851, 34.152254],
                    [-82.747713, 34.26727],
                    [-82.901067, 34.486347],
                    [-83.005129, 34.469916],
                    [-83.339222, 34.683517],
                    [-83.322791, 34.787579],
                    [-83.109191, 35.00118],
                    [-82.764143, 35.066903],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '46',
              properties: { name: 'South Dakota' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-104.047534, 45.944106],
                    [-96.560556, 45.933153],
                    [-96.582464, 45.818137],
                    [-96.856311, 45.604536],
                    [-96.681049, 45.412843],
                    [-96.451017, 45.297827],
                    [-96.451017, 43.501391],
                    [-96.582464, 43.479483],
                    [-96.527695, 43.397329],
                    [-96.560556, 43.222067],
                    [-96.434587, 43.123482],
                    [-96.511264, 43.052282],
                    [-96.544125, 42.855112],
                    [-96.631756, 42.707235],
                    [-96.44554, 42.488157],
                    [-96.626279, 42.515542],
                    [-96.692003, 42.657942],
                    [-97.217789, 42.844158],
                    [-97.688806, 42.844158],
                    [-97.831206, 42.866066],
                    [-97.951699, 42.767481],
                    [-98.466531, 42.94822],
                    [-98.499393, 42.997512],
                    [-101.626726, 42.997512],
                    [-103.324578, 43.002989],
                    [-104.053011, 43.002989],
                    [-104.058488, 44.996596],
                    [-104.042057, 44.996596],
                    [-104.047534, 45.944106],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '47',
              properties: { name: 'Tennessee' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-88.054868, 36.496384],
                    [-88.071299, 36.677123],
                    [-87.852221, 36.633308],
                    [-86.592525, 36.655216],
                    [-85.486183, 36.616877],
                    [-85.289013, 36.627831],
                    [-84.544149, 36.594969],
                    [-83.689746, 36.584015],
                    [-83.673316, 36.600446],
                    [-81.679709, 36.589492],
                    [-81.723525, 36.353984],
                    [-81.909741, 36.304691],
                    [-82.03571, 36.118475],
                    [-82.216449, 36.156814],
                    [-82.610789, 35.965121],
                    [-82.638174, 36.063706],
                    [-82.775097, 35.997983],
                    [-82.994175, 35.773428],
                    [-83.251591, 35.718659],
                    [-83.498053, 35.565304],
                    [-83.7719, 35.559827],
                    [-84.018363, 35.41195],
                    [-84.09504, 35.247642],
                    [-84.29221, 35.225734],
                    [-84.319594, 34.990226],
                    [-85.606675, 34.984749],
                    [-87.359296, 35.00118],
                    [-88.202745, 34.995703],
                    [-88.471115, 34.995703],
                    [-90.311367, 34.995703],
                    [-90.212782, 35.023087],
                    [-90.114197, 35.198349],
                    [-90.130628, 35.439335],
                    [-89.944412, 35.603643],
                    [-89.911551, 35.756997],
                    [-89.763673, 35.811767],
                    [-89.730812, 35.997983],
                    [-89.533642, 36.249922],
                    [-89.539119, 36.496384],
                    [-89.484349, 36.496384],
                    [-89.418626, 36.496384],
                    [-89.298133, 36.507338],
                    [-88.054868, 36.496384],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '48',
              properties: { name: 'Texas' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-101.812942, 36.501861],
                    [-100.000075, 36.501861],
                    [-100.000075, 34.563024],
                    [-99.923398, 34.573978],
                    [-99.698843, 34.382285],
                    [-99.57835, 34.415147],
                    [-99.260688, 34.404193],
                    [-99.189488, 34.2125],
                    [-98.986841, 34.223454],
                    [-98.767763, 34.135823],
                    [-98.570593, 34.146777],
                    [-98.488439, 34.064623],
                    [-98.36247, 34.157731],
                    [-98.170777, 34.113915],
                    [-98.088623, 34.004376],
                    [-97.946222, 33.987946],
                    [-97.869545, 33.851022],
                    [-97.694283, 33.982469],
                    [-97.458774, 33.905791],
                    [-97.371143, 33.823637],
                    [-97.256128, 33.861976],
                    [-97.173974, 33.736006],
                    [-96.922034, 33.960561],
                    [-96.850834, 33.845545],
                    [-96.631756, 33.845545],
                    [-96.423633, 33.774345],
                    [-96.346956, 33.686714],
                    [-96.149786, 33.840068],
                    [-95.936185, 33.889361],
                    [-95.8376, 33.834591],
                    [-95.602092, 33.933176],
                    [-95.547322, 33.878407],
                    [-95.289906, 33.87293],
                    [-95.224183, 33.960561],
                    [-94.966767, 33.861976],
                    [-94.868182, 33.74696],
                    [-94.484796, 33.637421],
                    [-94.380734, 33.544313],
                    [-94.183564, 33.593606],
                    [-94.041164, 33.54979],
                    [-94.041164, 33.018527],
                    [-94.041164, 31.994339],
                    [-93.822086, 31.775262],
                    [-93.816609, 31.556184],
                    [-93.542762, 31.15089],
                    [-93.526331, 30.93729],
                    [-93.630393, 30.679874],
                    [-93.728978, 30.575812],
                    [-93.696116, 30.438888],
                    [-93.767317, 30.334826],
                    [-93.690639, 30.143133],
                    [-93.926148, 29.787132],
                    [-93.838517, 29.688547],
                    [-94.002825, 29.68307],
                    [-94.523134, 29.546147],
                    [-94.70935, 29.622824],
                    [-94.742212, 29.787132],
                    [-94.873659, 29.672117],
                    [-94.966767, 29.699501],
                    [-95.016059, 29.557101],
                    [-94.911997, 29.496854],
                    [-94.895566, 29.310638],
                    [-95.081782, 29.113469],
                    [-95.383014, 28.867006],
                    [-95.985477, 28.604113],
                    [-96.045724, 28.647929],
                    [-96.226463, 28.582205],
                    [-96.23194, 28.642452],
                    [-96.478402, 28.598636],
                    [-96.593418, 28.724606],
                    [-96.664618, 28.697221],
                    [-96.401725, 28.439805],
                    [-96.593418, 28.357651],
                    [-96.774157, 28.406943],
                    [-96.801542, 28.226204],
                    [-97.026096, 28.039988],
                    [-97.256128, 27.694941],
                    [-97.404005, 27.333463],
                    [-97.513544, 27.360848],
                    [-97.540929, 27.229401],
                    [-97.425913, 27.262263],
                    [-97.480682, 26.99937],
                    [-97.557359, 26.988416],
                    [-97.562836, 26.840538],
                    [-97.469728, 26.758384],
                    [-97.442344, 26.457153],
                    [-97.332805, 26.353091],
                    [-97.30542, 26.161398],
                    [-97.217789, 25.991613],
                    [-97.524498, 25.887551],
                    [-97.650467, 26.018997],
                    [-97.885976, 26.06829],
                    [-98.198161, 26.057336],
                    [-98.466531, 26.221644],
                    [-98.669178, 26.238075],
                    [-98.822533, 26.369522],
                    [-99.030656, 26.413337],
                    [-99.173057, 26.539307],
                    [-99.266165, 26.840538],
                    [-99.446904, 27.021277],
                    [-99.424996, 27.174632],
                    [-99.50715, 27.33894],
                    [-99.479765, 27.48134],
                    [-99.605735, 27.640172],
                    [-99.709797, 27.656603],
                    [-99.879582, 27.799003],
                    [-99.934351, 27.979742],
                    [-100.082229, 28.14405],
                    [-100.29583, 28.280974],
                    [-100.399891, 28.582205],
                    [-100.498476, 28.66436],
                    [-100.629923, 28.905345],
                    [-100.673738, 29.102515],
                    [-100.799708, 29.244915],
                    [-101.013309, 29.370885],
                    [-101.062601, 29.458516],
                    [-101.259771, 29.535193],
                    [-101.413125, 29.754271],
                    [-101.851281, 29.803563],
                    [-102.114174, 29.792609],
                    [-102.338728, 29.869286],
                    [-102.388021, 29.765225],
                    [-102.629006, 29.732363],
                    [-102.809745, 29.524239],
                    [-102.919284, 29.190146],
                    [-102.97953, 29.184669],
                    [-103.116454, 28.987499],
                    [-103.280762, 28.982022],
                    [-103.527224, 29.135376],
                    [-104.146119, 29.381839],
                    [-104.266611, 29.513285],
                    [-104.507597, 29.639255],
                    [-104.677382, 29.924056],
                    [-104.688336, 30.181472],
                    [-104.858121, 30.389596],
                    [-104.896459, 30.570335],
                    [-105.005998, 30.685351],
                    [-105.394861, 30.855136],
                    [-105.602985, 31.085167],
                    [-105.77277, 31.167321],
                    [-105.953509, 31.364491],
                    [-106.205448, 31.468553],
                    [-106.38071, 31.731446],
                    [-106.528588, 31.786216],
                    [-106.643603, 31.901231],
                    [-106.616219, 31.999816],
                    [-103.067161, 31.999816],
                    [-103.067161, 33.002096],
                    [-103.045254, 34.01533],
                    [-103.039777, 36.501861],
                    [-103.001438, 36.501861],
                    [-101.812942, 36.501861],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '49',
              properties: { name: 'Utah' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-112.164359, 41.995232],
                    [-111.047063, 42.000709],
                    [-111.047063, 40.998429],
                    [-109.04798, 40.998429],
                    [-109.053457, 39.125316],
                    [-109.058934, 38.27639],
                    [-109.042503, 38.166851],
                    [-109.042503, 37.000263],
                    [-110.499369, 37.00574],
                    [-114.048427, 37.000263],
                    [-114.04295, 41.995232],
                    [-112.164359, 41.995232],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '50',
              properties: { name: 'Vermont' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-71.503554, 45.013027],
                    [-71.4926, 44.914442],
                    [-71.629524, 44.750133],
                    [-71.536416, 44.585825],
                    [-71.700724, 44.41604],
                    [-72.034817, 44.322932],
                    [-72.02934, 44.07647],
                    [-72.116971, 43.994316],
                    [-72.204602, 43.769761],
                    [-72.379864, 43.572591],
                    [-72.456542, 43.150867],
                    [-72.445588, 43.008466],
                    [-72.533219, 42.953697],
                    [-72.544173, 42.80582],
                    [-72.456542, 42.729142],
                    [-73.267129, 42.745573],
                    [-73.278083, 42.833204],
                    [-73.245221, 43.523299],
                    [-73.404052, 43.687607],
                    [-73.349283, 43.769761],
                    [-73.436914, 44.043608],
                    [-73.321898, 44.246255],
                    [-73.294514, 44.437948],
                    [-73.387622, 44.618687],
                    [-73.332852, 44.804903],
                    [-73.343806, 45.013027],
                    [-72.308664, 45.002073],
                    [-71.503554, 45.013027],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '51',
              properties: { name: 'Virginia' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-75.397659, 38.013497],
                      [-75.244304, 38.029928],
                      [-75.375751, 37.860142],
                      [-75.512674, 37.799896],
                      [-75.594828, 37.569865],
                      [-75.802952, 37.197433],
                      [-75.972737, 37.120755],
                      [-76.027507, 37.257679],
                      [-75.939876, 37.564388],
                      [-75.671506, 37.95325],
                      [-75.397659, 38.013497],
                    ],
                  ],
                  [
                    [
                      [-76.016553, 37.95325],
                      [-75.994645, 37.95325],
                      [-76.043938, 37.95325],
                      [-76.016553, 37.95325],
                    ],
                  ],
                  [
                    [
                      [-78.349729, 39.464886],
                      [-77.82942, 39.130793],
                      [-77.719881, 39.322485],
                      [-77.566527, 39.306055],
                      [-77.456988, 39.223901],
                      [-77.456988, 39.076023],
                      [-77.248864, 39.026731],
                      [-77.117418, 38.933623],
                      [-77.040741, 38.791222],
                      [-77.128372, 38.632391],
                      [-77.248864, 38.588575],
                      [-77.325542, 38.446175],
                      [-77.281726, 38.342113],
                      [-77.013356, 38.374975],
                      [-76.964064, 38.216144],
                      [-76.613539, 38.15042],
                      [-76.514954, 38.024451],
                      [-76.235631, 37.887527],
                      [-76.3616, 37.608203],
                      [-76.246584, 37.389126],
                      [-76.383508, 37.285064],
                      [-76.399939, 37.159094],
                      [-76.273969, 37.082417],
                      [-76.410893, 36.961924],
                      [-76.619016, 37.120755],
                      [-76.668309, 37.065986],
                      [-76.48757, 36.95097],
                      [-75.994645, 36.923586],
                      [-75.868676, 36.551154],
                      [-79.510841, 36.5402],
                      [-80.294043, 36.545677],
                      [-80.978661, 36.562108],
                      [-81.679709, 36.589492],
                      [-83.673316, 36.600446],
                      [-83.136575, 36.742847],
                      [-83.070852, 36.852385],
                      [-82.879159, 36.890724],
                      [-82.868205, 36.978355],
                      [-82.720328, 37.044078],
                      [-82.720328, 37.120755],
                      [-82.353373, 37.268633],
                      [-81.969987, 37.537003],
                      [-81.986418, 37.454849],
                      [-81.849494, 37.285064],
                      [-81.679709, 37.20291],
                      [-81.55374, 37.208387],
                      [-81.362047, 37.339833],
                      [-81.225123, 37.235771],
                      [-80.967707, 37.290541],
                      [-80.513121, 37.482234],
                      [-80.474782, 37.421987],
                      [-80.29952, 37.509618],
                      [-80.294043, 37.690357],
                      [-80.184505, 37.849189],
                      [-79.998289, 37.997066],
                      [-79.921611, 38.177805],
                      [-79.724442, 38.364021],
                      [-79.647764, 38.594052],
                      [-79.477979, 38.457129],
                      [-79.313671, 38.413313],
                      [-79.209609, 38.495467],
                      [-78.996008, 38.851469],
                      [-78.870039, 38.763838],
                      [-78.404499, 39.169131],
                      [-78.349729, 39.464886],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '53',
              properties: { name: 'Washington' },
              geometry: {
                type: 'MultiPolygon',
                coordinates: [
                  [
                    [
                      [-117.033359, 49.000239],
                      [-117.044313, 47.762451],
                      [-117.038836, 46.426077],
                      [-117.055267, 46.343923],
                      [-116.92382, 46.168661],
                      [-116.918344, 45.993399],
                      [-118.988627, 45.998876],
                      [-119.125551, 45.933153],
                      [-119.525367, 45.911245],
                      [-119.963522, 45.823614],
                      [-120.209985, 45.725029],
                      [-120.505739, 45.697644],
                      [-120.637186, 45.746937],
                      [-121.18488, 45.604536],
                      [-121.217742, 45.670259],
                      [-121.535404, 45.725029],
                      [-121.809251, 45.708598],
                      [-122.247407, 45.549767],
                      [-122.762239, 45.659305],
                      [-122.811531, 45.960537],
                      [-122.904639, 46.08103],
                      [-123.11824, 46.185092],
                      [-123.211348, 46.174138],
                      [-123.370179, 46.146753],
                      [-123.545441, 46.261769],
                      [-123.72618, 46.300108],
                      [-123.874058, 46.239861],
                      [-124.065751, 46.327492],
                      [-124.027412, 46.464416],
                      [-123.895966, 46.535616],
                      [-124.098612, 46.74374],
                      [-124.235536, 47.285957],
                      [-124.31769, 47.357157],
                      [-124.427229, 47.740543],
                      [-124.624399, 47.88842],
                      [-124.706553, 48.184175],
                      [-124.597014, 48.381345],
                      [-124.394367, 48.288237],
                      [-123.983597, 48.162267],
                      [-123.704273, 48.167744],
                      [-123.424949, 48.118452],
                      [-123.162056, 48.167744],
                      [-123.036086, 48.080113],
                      [-122.800578, 48.08559],
                      [-122.636269, 47.866512],
                      [-122.515777, 47.882943],
                      [-122.493869, 47.587189],
                      [-122.422669, 47.318818],
                      [-122.324084, 47.346203],
                      [-122.422669, 47.576235],
                      [-122.395284, 47.800789],
                      [-122.230976, 48.030821],
                      [-122.362422, 48.123929],
                      [-122.373376, 48.288237],
                      [-122.471961, 48.468976],
                      [-122.422669, 48.600422],
                      [-122.488392, 48.753777],
                      [-122.647223, 48.775685],
                      [-122.795101, 48.8907],
                      [-122.756762, 49.000239],
                      [-117.033359, 49.000239],
                    ],
                  ],
                  [
                    [
                      [-122.718423, 48.310145],
                      [-122.586977, 48.35396],
                      [-122.608885, 48.151313],
                      [-122.767716, 48.227991],
                      [-122.718423, 48.310145],
                    ],
                  ],
                  [
                    [
                      [-123.025132, 48.583992],
                      [-122.915593, 48.715438],
                      [-122.767716, 48.556607],
                      [-122.811531, 48.419683],
                      [-123.041563, 48.458022],
                      [-123.025132, 48.583992],
                    ],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '54',
              properties: { name: 'West Virginia' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-80.518598, 40.636951],
                    [-80.518598, 39.722302],
                    [-79.477979, 39.722302],
                    [-79.488933, 39.20747],
                    [-79.291763, 39.300578],
                    [-79.094593, 39.470363],
                    [-78.963147, 39.437501],
                    [-78.765977, 39.585379],
                    [-78.470222, 39.514178],
                    [-78.431884, 39.623717],
                    [-78.267575, 39.61824],
                    [-78.174467, 39.694917],
                    [-78.004682, 39.601809],
                    [-77.834897, 39.601809],
                    [-77.719881, 39.322485],
                    [-77.82942, 39.130793],
                    [-78.349729, 39.464886],
                    [-78.404499, 39.169131],
                    [-78.870039, 38.763838],
                    [-78.996008, 38.851469],
                    [-79.209609, 38.495467],
                    [-79.313671, 38.413313],
                    [-79.477979, 38.457129],
                    [-79.647764, 38.594052],
                    [-79.724442, 38.364021],
                    [-79.921611, 38.177805],
                    [-79.998289, 37.997066],
                    [-80.184505, 37.849189],
                    [-80.294043, 37.690357],
                    [-80.29952, 37.509618],
                    [-80.474782, 37.421987],
                    [-80.513121, 37.482234],
                    [-80.967707, 37.290541],
                    [-81.225123, 37.235771],
                    [-81.362047, 37.339833],
                    [-81.55374, 37.208387],
                    [-81.679709, 37.20291],
                    [-81.849494, 37.285064],
                    [-81.986418, 37.454849],
                    [-81.969987, 37.537003],
                    [-82.101434, 37.553434],
                    [-82.293127, 37.668449],
                    [-82.342419, 37.783465],
                    [-82.50125, 37.931343],
                    [-82.621743, 38.123036],
                    [-82.594358, 38.424267],
                    [-82.331465, 38.446175],
                    [-82.293127, 38.577622],
                    [-82.172634, 38.632391],
                    [-82.221926, 38.785745],
                    [-82.03571, 39.026731],
                    [-81.887833, 38.873376],
                    [-81.783771, 38.966484],
                    [-81.811156, 39.0815],
                    [-81.685186, 39.273193],
                    [-81.57017, 39.267716],
                    [-81.455155, 39.410117],
                    [-81.345616, 39.344393],
                    [-81.219646, 39.388209],
                    [-80.830783, 39.711348],
                    [-80.737675, 40.078303],
                    [-80.600752, 40.319289],
                    [-80.595275, 40.472643],
                    [-80.666475, 40.582182],
                    [-80.518598, 40.636951],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '55',
              properties: { name: 'Wisconsin' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-90.415429, 46.568478],
                    [-90.229213, 46.508231],
                    [-90.119674, 46.338446],
                    [-89.09001, 46.135799],
                    [-88.662808, 45.987922],
                    [-88.531362, 46.020784],
                    [-88.10416, 45.922199],
                    [-87.989145, 45.796229],
                    [-87.781021, 45.675736],
                    [-87.791975, 45.500474],
                    [-87.885083, 45.363551],
                    [-87.649574, 45.341643],
                    [-87.742682, 45.199243],
                    [-87.589328, 45.095181],
                    [-87.627666, 44.974688],
                    [-87.819359, 44.95278],
                    [-87.983668, 44.722749],
                    [-88.043914, 44.563917],
                    [-87.928898, 44.536533],
                    [-87.775544, 44.640595],
                    [-87.611236, 44.837764],
                    [-87.403112, 44.914442],
                    [-87.238804, 45.166381],
                    [-87.03068, 45.22115],
                    [-87.047111, 45.089704],
                    [-87.189511, 44.969211],
                    [-87.468835, 44.552964],
                    [-87.545512, 44.322932],
                    [-87.540035, 44.158624],
                    [-87.644097, 44.103854],
                    [-87.737205, 43.8793],
                    [-87.704344, 43.687607],
                    [-87.791975, 43.561637],
                    [-87.912467, 43.249452],
                    [-87.885083, 43.002989],
                    [-87.76459, 42.783912],
                    [-87.802929, 42.493634],
                    [-88.788778, 42.493634],
                    [-90.639984, 42.510065],
                    [-90.711184, 42.636034],
                    [-91.067185, 42.75105],
                    [-91.143862, 42.909881],
                    [-91.176724, 43.134436],
                    [-91.056231, 43.254929],
                    [-91.204109, 43.353514],
                    [-91.215062, 43.501391],
                    [-91.269832, 43.616407],
                    [-91.242447, 43.775238],
                    [-91.43414, 43.994316],
                    [-91.592971, 44.032654],
                    [-91.877772, 44.202439],
                    [-91.927065, 44.333886],
                    [-92.233773, 44.443425],
                    [-92.337835, 44.552964],
                    [-92.545959, 44.569394],
                    [-92.808852, 44.750133],
                    [-92.737652, 45.117088],
                    [-92.75956, 45.286874],
                    [-92.644544, 45.440228],
                    [-92.770513, 45.566198],
                    [-92.885529, 45.577151],
                    [-92.869098, 45.719552],
                    [-92.639067, 45.933153],
                    [-92.354266, 46.015307],
                    [-92.29402, 46.075553],
                    [-92.29402, 46.667063],
                    [-92.091373, 46.749217],
                    [-92.014696, 46.705401],
                    [-91.790141, 46.694447],
                    [-91.09457, 46.864232],
                    [-90.837154, 46.95734],
                    [-90.749522, 46.88614],
                    [-90.886446, 46.754694],
                    [-90.55783, 46.584908],
                    [-90.415429, 46.568478],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '56',
              properties: { name: 'Wyoming' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-109.080842, 45.002073],
                    [-105.91517, 45.002073],
                    [-104.058488, 44.996596],
                    [-104.053011, 43.002989],
                    [-104.053011, 41.003906],
                    [-105.728954, 40.998429],
                    [-107.919731, 41.003906],
                    [-109.04798, 40.998429],
                    [-111.047063, 40.998429],
                    [-111.047063, 42.000709],
                    [-111.047063, 44.476286],
                    [-111.05254, 45.002073],
                    [-109.080842, 45.002073],
                  ],
                ],
              },
            },
            {
              type: 'Feature',
              id: '72',
              properties: { name: 'Puerto Rico' },
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-66.448338, 17.984326],
                    [-66.771478, 18.006234],
                    [-66.924832, 17.929556],
                    [-66.985078, 17.973372],
                    [-67.209633, 17.956941],
                    [-67.154863, 18.19245],
                    [-67.269879, 18.362235],
                    [-67.094617, 18.515589],
                    [-66.957694, 18.488204],
                    [-66.409999, 18.488204],
                    [-65.840398, 18.433435],
                    [-65.632274, 18.367712],
                    [-65.626797, 18.203403],
                    [-65.730859, 18.186973],
                    [-65.834921, 18.017187],
                    [-66.234737, 17.929556],
                    [-66.448338, 17.984326],
                  ],
                ],
              },
            },
          ],
        },
        a = i('MT78'),
        o = i('fXoL'),
        r = i('MpVW'),
        s = i('cvES'),
        l = i('cpAi'),
        c = i('i51y');
      i.d(t, 'a', function() {
        return pe;
      });
      var u,
        h = function() {
          return { name: 'Alabama', value: 4822023 };
        },
        d = function() {
          return { name: 'Alaska', value: 731449 };
        },
        p = function() {
          return { name: 'Arizona', value: 6553255 };
        },
        g = function() {
          return { name: 'Arkansas', value: 2949131 };
        },
        f = function() {
          return { name: 'California', value: 38041430 };
        },
        m = function() {
          return { name: 'Colorado', value: 5187582 };
        },
        v = function() {
          return { name: 'Connecticut', value: 3590347 };
        },
        y = function() {
          return { name: 'Delaware', value: 917092 };
        },
        x = function() {
          return { name: 'District of Columbia', value: 632323 };
        },
        _ = function() {
          return { name: 'Florida', value: 19317568 };
        },
        b = function() {
          return { name: 'Georgia', value: 9919945 };
        },
        S = function() {
          return { name: 'Hawaii', value: 1392313 };
        },
        w = function() {
          return { name: 'Idaho', value: 1595728 };
        },
        M = function() {
          return { name: 'Illinois', value: 12875255 };
        },
        I = function() {
          return { name: 'Indiana', value: 6537334 };
        },
        A = function() {
          return { name: 'Iowa', value: 3074186 };
        },
        D = function() {
          return { name: 'Kansas', value: 2885905 };
        },
        T = function() {
          return { name: 'Kentucky', value: 4380415 };
        },
        P = function() {
          return { name: 'Louisiana', value: 4601893 };
        },
        L = function() {
          return { name: 'Maine', value: 1329192 };
        },
        C = function() {
          return { name: 'Maryland', value: 5884563 };
        },
        k = function() {
          return { name: 'Massachusetts', value: 6646144 };
        },
        z = function() {
          return { name: 'Michigan', value: 9883360 };
        },
        O = function() {
          return { name: 'Minnesota', value: 5379139 };
        },
        R = function() {
          return { name: 'Mississippi', value: 2984926 };
        },
        E = function() {
          return { name: 'Missouri', value: 6021988 };
        },
        V = function() {
          return { name: 'Montana', value: 1005141 };
        },
        N = function() {
          return { name: 'Nebraska', value: 1855525 };
        },
        G = function() {
          return { name: 'Nevada', value: 2758931 };
        },
        B = function() {
          return { name: 'New Hampshire', value: 1320718 };
        },
        Y = function() {
          return { name: 'New Jersey', value: 8864590 };
        },
        F = function() {
          return { name: 'New Mexico', value: 2085538 };
        },
        H = function() {
          return { name: 'New York', value: 19570261 };
        },
        W = function() {
          return { name: 'North Carolina', value: 9752073 };
        },
        Z = function() {
          return { name: 'North Dakota', value: 699628 };
        },
        U = function() {
          return { name: 'Ohio', value: 11544225 };
        },
        j = function() {
          return { name: 'Oklahoma', value: 3814820 };
        },
        X = function() {
          return { name: 'Oregon', value: 3899353 };
        },
        q = function() {
          return { name: 'Pennsylvania', value: 12763536 };
        },
        K = function() {
          return { name: 'Rhode Island', value: 1050292 };
        },
        J = function() {
          return { name: 'South Carolina', value: 4723723 };
        },
        Q = function() {
          return { name: 'South Dakota', value: 833354 };
        },
        $ = function() {
          return { name: 'Tennessee', value: 6456243 };
        },
        ee = function() {
          return { name: 'Texas', value: 26059203 };
        },
        te = function() {
          return { name: 'Utah', value: 2855287 };
        },
        ie = function() {
          return { name: 'Vermont', value: 626011 };
        },
        ne = function() {
          return { name: 'Virginia', value: 8185867 };
        },
        ae = function() {
          return { name: 'Washington', value: 6897012 };
        },
        oe = function() {
          return { name: 'West Virginia', value: 1855413 };
        },
        re = function() {
          return { name: 'Wisconsin', value: 5726398 };
        },
        se = function() {
          return { name: 'Wyoming', value: 576412 };
        },
        le = function() {
          return { name: 'Puerto Rico', value: 3667084 };
        },
        ce = function(
          e,
          t,
          i,
          n,
          a,
          o,
          r,
          s,
          l,
          c,
          u,
          h,
          d,
          p,
          g,
          f,
          m,
          v,
          y,
          x,
          _,
          b,
          S,
          w,
          M,
          I,
          A,
          D,
          T,
          P,
          L,
          C,
          k,
          z,
          O,
          R,
          E,
          V,
          N,
          G,
          B,
          Y,
          F,
          H,
          W,
          Z,
          U,
          j,
          X,
          q,
          K,
          J,
        ) {
          return [
            e,
            t,
            i,
            n,
            a,
            o,
            r,
            s,
            l,
            c,
            u,
            h,
            d,
            p,
            g,
            f,
            m,
            v,
            y,
            x,
            _,
            b,
            S,
            w,
            M,
            I,
            A,
            D,
            T,
            P,
            L,
            C,
            k,
            z,
            O,
            R,
            E,
            V,
            N,
            G,
            B,
            Y,
            F,
            H,
            W,
            Z,
            U,
            j,
            X,
            q,
            K,
            J,
          ];
        },
        ue = function() {
          return { show: !0 };
        },
        he = function(e) {
          return { label: e };
        },
        de = function(e) {
          return { emphasis: e };
        },
        pe =
          (((u = (function() {
            function e(t) {
              _classCallCheck(this, e),
                (this.themeSelector = t),
                (this.config = {
                  tooltip: { trigger: 'item', showDelay: 0, transitionDuration: 0.2 },
                  visualMap: {
                    left: 'right',
                    min: 5e5,
                    max: 38e6,
                    inRange: { color: ['#3F97C4', '#4CAFB1', '#F6C863', '#F4774D'] },
                    text: ['High', 'Low'],
                    calculable: !0,
                  },
                  series: [
                    {
                      name: 'USA PopEstimates',
                      type: 'map',
                      roam: !0,
                      map: 'USA',
                      itemStyle: { emphasis: { label: { show: !0 } } },
                      data: [
                        { name: 'Alabama', value: 4822023 },
                        { name: 'Alaska', value: 731449 },
                        { name: 'Arizona', value: 6553255 },
                        { name: 'Arkansas', value: 2949131 },
                        { name: 'California', value: 38041430 },
                        { name: 'Colorado', value: 5187582 },
                        { name: 'Connecticut', value: 3590347 },
                        { name: 'Delaware', value: 917092 },
                        { name: 'District of Columbia', value: 632323 },
                        { name: 'Florida', value: 19317568 },
                        { name: 'Georgia', value: 9919945 },
                        { name: 'Hawaii', value: 1392313 },
                        { name: 'Idaho', value: 1595728 },
                        { name: 'Illinois', value: 12875255 },
                        { name: 'Indiana', value: 6537334 },
                        { name: 'Iowa', value: 3074186 },
                        { name: 'Kansas', value: 2885905 },
                        { name: 'Kentucky', value: 4380415 },
                        { name: 'Louisiana', value: 4601893 },
                        { name: 'Maine', value: 1329192 },
                        { name: 'Maryland', value: 5884563 },
                        { name: 'Massachusetts', value: 6646144 },
                        { name: 'Michigan', value: 9883360 },
                        { name: 'Minnesota', value: 5379139 },
                        { name: 'Mississippi', value: 2984926 },
                        { name: 'Missouri', value: 6021988 },
                        { name: 'Montana', value: 1005141 },
                        { name: 'Nebraska', value: 1855525 },
                        { name: 'Nevada', value: 2758931 },
                        { name: 'New Hampshire', value: 1320718 },
                        { name: 'New Jersey', value: 8864590 },
                        { name: 'New Mexico', value: 2085538 },
                        { name: 'New York', value: 19570261 },
                        { name: 'North Carolina', value: 9752073 },
                        { name: 'North Dakota', value: 699628 },
                        { name: 'Ohio', value: 11544225 },
                        { name: 'Oklahoma', value: 3814820 },
                        { name: 'Oregon', value: 3899353 },
                        { name: 'Pennsylvania', value: 12763536 },
                        { name: 'Rhode Island', value: 1050292 },
                        { name: 'South Carolina', value: 4723723 },
                        { name: 'South Dakota', value: 833354 },
                        { name: 'Tennessee', value: 6456243 },
                        { name: 'Texas', value: 26059203 },
                        { name: 'Utah', value: 2855287 },
                        { name: 'Vermont', value: 626011 },
                        { name: 'Virginia', value: 8185867 },
                        { name: 'Washington', value: 6897012 },
                        { name: 'West Virginia', value: 1855413 },
                        { name: 'Wisconsin', value: 5726398 },
                        { name: 'Wyoming', value: 576412 },
                        { name: 'Puerto Rico', value: 3667084 },
                      ],
                    },
                  ],
                });
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function() {
                    a.registerMap('USA', n);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function(e) {
            return new (e || u)(o.Sb(r.a));
          }),
          (u.ɵcmp = o.Mb({
            type: u,
            selectors: [['map-demo-basic']],
            decls: 10,
            vars: 118,
            consts: [
              [3, 'trigger', 'triggerOn'],
              ['td-map', '', 3, 'name', 'map', 'data', 'roam', 'itemStyle'],
            ],
            template: function(e, t) {
              1 & e &&
                (o.Tc(0, '\n        '),
                o.Yb(1, 'td-chart'),
                o.Tc(2, '\n          '),
                o.Yb(3, 'td-chart-tooltip', 0),
                o.Tc(4, '\n          '),
                o.Wb(),
                o.Tc(5, '\n          '),
                o.Yb(6, 'td-chart-series', 1),
                o.Tc(7, '\n          '),
                o.Wb(),
                o.Tc(8, '\n        '),
                o.Wb(),
                o.Tc(9, '\n     ')),
                2 & e &&
                  (o.Db(1),
                  o.Pc('height', 500, 'px'),
                  o.Db(2),
                  o.qc('trigger', 'item')('triggerOn', 'mousemove'),
                  o.Db(3),
                  o.qc('name', 'USA PopEstimates')('map', 'USA')(
                    'data',
                    o.Dc(60, ce, [
                      o.uc(8, h),
                      o.uc(9, d),
                      o.uc(10, p),
                      o.uc(11, g),
                      o.uc(12, f),
                      o.uc(13, m),
                      o.uc(14, v),
                      o.uc(15, y),
                      o.uc(16, x),
                      o.uc(17, _),
                      o.uc(18, b),
                      o.uc(19, S),
                      o.uc(20, w),
                      o.uc(21, M),
                      o.uc(22, I),
                      o.uc(23, A),
                      o.uc(24, D),
                      o.uc(25, T),
                      o.uc(26, P),
                      o.uc(27, L),
                      o.uc(28, C),
                      o.uc(29, k),
                      o.uc(30, z),
                      o.uc(31, O),
                      o.uc(32, R),
                      o.uc(33, E),
                      o.uc(34, V),
                      o.uc(35, N),
                      o.uc(36, G),
                      o.uc(37, B),
                      o.uc(38, Y),
                      o.uc(39, F),
                      o.uc(40, H),
                      o.uc(41, W),
                      o.uc(42, Z),
                      o.uc(43, U),
                      o.uc(44, j),
                      o.uc(45, X),
                      o.uc(46, q),
                      o.uc(47, K),
                      o.uc(48, J),
                      o.uc(49, Q),
                      o.uc(50, $),
                      o.uc(51, ee),
                      o.uc(52, te),
                      o.uc(53, ie),
                      o.uc(54, ne),
                      o.uc(55, ae),
                      o.uc(56, oe),
                      o.uc(57, re),
                      o.uc(58, se),
                      o.uc(59, le),
                    ]),
                  )('roam', !0)('itemStyle', o.vc(116, de, o.vc(114, he, o.uc(113, ue)))));
            },
            directives: [s.a, l.a, c.a],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          })),
          u);
    },
    'zRKj': function(e, t, i) {
      i('Ae16'), i('Sp2Z'), i('y4/Y');
    },
    'zYTA': function(e, t, i) {
      var n = i('bYtY');
      function a() {
        var e = n.createCanvas();
        (this.canvas = e),
          (this.blurSize = 30),
          (this.pointSize = 20),
          (this.maxOpacity = 1),
          (this.minOpacity = 0),
          (this._gradientPixels = {});
      }
      (a.prototype = {
        update: function(e, t, i, n, a, o) {
          var r = this._getBrush(),
            s = this._getGradient(e, a, 'inRange'),
            l = this._getGradient(e, a, 'outOfRange'),
            c = this.pointSize + this.blurSize,
            u = this.canvas,
            h = u.getContext('2d'),
            d = e.length;
          (u.width = t), (u.height = i);
          for (var p = 0; p < d; ++p) {
            var g = e[p],
              f = g[0],
              m = g[1],
              v = n(g[2]);
            (h.globalAlpha = v), h.drawImage(r, f - c, m - c);
          }
          if (!u.width || !u.height) return u;
          for (
            var y = h.getImageData(0, 0, u.width, u.height),
              x = y.data,
              _ = 0,
              b = x.length,
              S = this.minOpacity,
              w = this.maxOpacity - S;
            _ < b;

          ) {
            v = x[_ + 3] / 256;
            var M = 4 * Math.floor(255 * v);
            if (v > 0) {
              var I = o(v) ? s : l;
              v > 0 && (v = v * w + S),
                (x[_++] = I[M]),
                (x[_++] = I[M + 1]),
                (x[_++] = I[M + 2]),
                (x[_++] = I[M + 3] * v * 256);
            } else _ += 4;
          }
          return h.putImageData(y, 0, 0), u;
        },
        _getBrush: function() {
          var e = this._brushCanvas || (this._brushCanvas = n.createCanvas()),
            t = this.pointSize + this.blurSize,
            i = 2 * t;
          (e.width = i), (e.height = i);
          var a = e.getContext('2d');
          return (
            a.clearRect(0, 0, i, i),
            (a.shadowOffsetX = i),
            (a.shadowBlur = this.blurSize),
            (a.shadowColor = '#000'),
            a.beginPath(),
            a.arc(-t, t, this.pointSize, 0, 2 * Math.PI, !0),
            a.closePath(),
            a.fill(),
            e
          );
        },
        _getGradient: function(e, t, i) {
          for (
            var n = this._gradientPixels,
              a = n[i] || (n[i] = new Uint8ClampedArray(1024)),
              o = [0, 0, 0, 0],
              r = 0,
              s = 0;
            s < 256;
            s++
          )
            t[i](s / 255, !0, o), (a[r++] = o[0]), (a[r++] = o[1]), (a[r++] = o[2]), (a[r++] = o[3]);
          return a;
        },
      }),
        (e.exports = a);
    },
    'zuHt': function(e, t, i) {
      var n = i('bYtY');
      e.exports = function(e) {
        var t = {};
        e.eachSeriesByType('map', function(i) {
          var a = i.getMapType();
          if (!i.getHostGeoModel() && !t[a]) {
            var o = {};
            n.each(i.seriesGroup, function(t) {
              var i = t.coordinateSystem,
                n = t.originalData;
              t.get('showLegendSymbol') &&
                e.getComponent('legend') &&
                n.each(n.mapDimension('value'), function(e, t) {
                  var a = n.getName(t),
                    r = i.getRegion(a);
                  if (r && !isNaN(e)) {
                    var s = o[a] || 0,
                      l = i.dataToPoint(r.center);
                    (o[a] = s + 1), n.setItemLayout(t, { point: l, offset: s });
                  }
                });
            });
            var r = i.getData();
            r.each(function(e) {
              var t = r.getName(e),
                i = r.getItemLayout(e) || {};
              (i.showLabel = !o[t]), r.setItemLayout(e, i);
            }),
              (t[a] = !0);
          }
        });
      };
    },
  },
]);
