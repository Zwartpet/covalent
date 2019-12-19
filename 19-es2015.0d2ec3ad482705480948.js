(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '0qV/': function(t, e, n) {
      var i = n('ProS');
      i.registerAction(
        { type: 'focusNodeAdjacency', event: 'focusNodeAdjacency', update: 'series:focusNodeAdjacency' },
        function() {},
      ),
        i.registerAction(
          { type: 'unfocusNodeAdjacency', event: 'unfocusNodeAdjacency', update: 'series:unfocusNodeAdjacency' },
          function() {},
        );
    },
    'I3/A': function(t, e, n) {
      var i = n('bYtY'),
        a = n('YXkt'),
        o = n('c2i1'),
        r = n('Mdki'),
        s = n('sdST'),
        u = n('IDmD'),
        d = n('MwEJ');
      t.exports = function(t, e, n, l, c) {
        for (var h = new o(l), f = 0; f < t.length; f++) h.addNode(i.retrieve(t[f].id, t[f].name, f), f);
        var p = [],
          g = [],
          v = 0;
        for (f = 0; f < e.length; f++) {
          var y = e[f],
            m = y.source,
            I = y.target;
          h.addEdge(m, I, v) && (g.push(y), p.push(i.retrieve(y.id, m + ' > ' + I)), v++);
        }
        var x,
          b = n.get('coordinateSystem');
        if ('cartesian2d' === b || 'polar' === b) x = d(t, n);
        else {
          var w = u.get(b),
            M = (w && 'view' !== w.type && w.dimensions) || [];
          i.indexOf(M, 'value') < 0 && M.concat(['value']);
          var _ = s(t, { coordDimensions: M });
          (x = new a(_, n)).initData(t);
        }
        var V = new a(['value'], n);
        return (
          V.initData(g, p),
          c && c(x, V),
          r({
            mainData: x,
            struct: h,
            structAttr: 'graph',
            datas: { node: x, edge: V },
            datasAttr: { node: 'data', edge: 'edgeData' },
          }),
          h.update(),
          h
        );
      };
    },
    'IwGX': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      var i = n('fXoL'),
        a = n('rDig');
      const o = ['td-sankey', ''];
      let r = (() => {
        class t extends a.c {
          constructor(t) {
            super('sankey', t);
          }
          getConfig() {
            return {
              zlevel: this.zlevel,
              z: this.z,
              left: this.left,
              top: this.top,
              right: this.right,
              bottom: this.bottom,
              width: this.width,
              height: this.height,
              nodeWidth: this.nodeWidth,
              nodeGap: this.nodeGap,
              layoutIterations: this.layoutIterations,
              orient: this.orient,
              draggable: this.draggable,
              focusNodeAdjacency: this.focusNodeAdjacency,
              label: this.label,
              itemStyle: this.itemStyle,
              lineStyle: this.lineStyle,
              emphasis: this.emphasis,
              nodes: this.nodes,
              links: this.links,
              edges: this.edges,
              silent: this.silent,
            };
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(i.Sb(a.b));
          }),
          (t.ɵcmp = i.Mb({
            type: t,
            selectors: [['td-chart-series', 'td-sankey', '']],
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
              zlevel: 'zlevel',
              z: 'z',
              left: 'left',
              top: 'top',
              right: 'right',
              bottom: 'bottom',
              width: 'width',
              height: 'height',
              nodeWidth: 'nodeWidth',
              nodeGap: 'nodeGap',
              layoutIterations: 'layoutIterations',
              orient: 'orient',
              draggable: 'draggable',
              focusNodeAdjacency: 'focusNodeAdjacency',
              label: 'label',
              itemStyle: 'itemStyle',
              lineStyle: 'lineStyle',
              emphasis: 'emphasis',
              nodes: 'nodes',
              links: 'links',
              edges: 'edges',
              silent: 'silent',
            },
            features: [i.Cb([{ provide: a.c, useExisting: Object(i.V)(() => t) }]), i.Ab],
            attrs: o,
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
    'Mdki': function(t, e, n) {
      var i = n('bYtY'),
        a = i.each,
        o = '\0__link_datas',
        r = '\0__link_mainData';
      function s(t, e) {
        if (this[r] === this) {
          var n = i.extend({}, this[o]);
          (n[this.dataType] = e), c(e, n, t);
        } else h(e, this.dataType, this[r], t);
        return e;
      }
      function u(t, e) {
        return t.struct && t.struct.update(this), e;
      }
      function d(t, e) {
        return (
          a(e[o], function(n, i) {
            n !== e && h(n.cloneShallow(), i, e, t);
          }),
          e
        );
      }
      function l(t) {
        var e = this[r];
        return null == t || null == e ? e : e[o][t];
      }
      function c(t, e, n) {
        (t[o] = {}),
          a(e, function(e, i) {
            h(e, i, t, n);
          });
      }
      function h(t, e, n, i) {
        (n[o][e] = t),
          (t[r] = n),
          (t.dataType = e),
          i.struct && ((t[i.structAttr] = i.struct), (i.struct[i.datasAttr[e]] = t)),
          (t.getLinkedData = l);
      }
      t.exports = function(t) {
        var e = t.mainData,
          n = t.datas;
        n || ((n = { main: e }), (t.datasAttr = { main: 'data' })),
          (t.datas = t.mainData = null),
          c(e, n, t),
          a(n, function(n) {
            a(e.TRANSFERABLE_METHODS, function(e) {
              n.wrapMethod(e, i.curry(s, t));
            });
          }),
          e.wrapMethod('cloneShallow', i.curry(d, t)),
          a(e.CHANGABLE_METHODS, function(n) {
            e.wrapMethod(n, i.curry(u, t));
          }),
          i.assert(n[e.dataType] === e);
      };
    },
    'XxSj': function(t, e, n) {
      var i = n('bYtY'),
        a = n('Qe9p'),
        o = n('OELB').linearMap,
        r = i.each,
        s = i.isObject,
        u = -1,
        d = function(t) {
          var e = t.mappingMethod,
            n = t.type,
            a = (this.option = i.clone(t));
          (this.type = n), (this.mappingMethod = e), (this._normalizeData = x[e]);
          var o = l[n];
          (this.applyVisual = o.applyVisual),
            (this.getColorMapper = o.getColorMapper),
            (this._doMap = o._doMap[e]),
            'piecewise' === e
              ? (c(a),
                (function(t) {
                  var e = t.pieceList;
                  (t.hasSpecialVisual = !1),
                    i.each(e, function(e, n) {
                      (e.originIndex = n), null != e.visual && (t.hasSpecialVisual = !0);
                    });
                })(a))
              : 'category' === e
              ? a.categories
                ? (function(t) {
                    var e = t.categories,
                      n = t.visual,
                      a = (t.categoryMap = {});
                    if (
                      (r(e, function(t, e) {
                        a[t] = e;
                      }),
                      !i.isArray(n))
                    ) {
                      var o = [];
                      i.isObject(n)
                        ? r(n, function(t, e) {
                            var n = a[e];
                            o[null != n ? n : u] = t;
                          })
                        : (o[u] = n),
                        (n = I(t, o));
                    }
                    for (var s = e.length - 1; s >= 0; s--) null == n[s] && (delete a[e[s]], e.pop());
                  })(a)
                : c(a, !0)
              : (i.assert('linear' !== e || a.dataExtent), c(a));
        };
      d.prototype = {
        constructor: d,
        mapValueToVisual: function(t) {
          var e = this._normalizeData(t);
          return this._doMap(e, t);
        },
        getNormalizer: function() {
          return i.bind(this._normalizeData, this);
        },
      };
      var l = (d.visualHandlers = {
        color: {
          applyVisual: p('color'),
          getColorMapper: function() {
            var t = this.option;
            return i.bind(
              'category' === t.mappingMethod
                ? function(t, e) {
                    return !e && (t = this._normalizeData(t)), g.call(this, t);
                  }
                : function(e, n, i) {
                    var o = !!i;
                    return (
                      !n && (e = this._normalizeData(e)),
                      (i = a.fastLerp(e, t.parsedVisual, i)),
                      o ? i : a.stringify(i, 'rgba')
                    );
                  },
              this,
            );
          },
          _doMap: {
            linear: function(t) {
              return a.stringify(a.fastLerp(t, this.option.parsedVisual), 'rgba');
            },
            category: g,
            piecewise: function(t, e) {
              var n = m.call(this, e);
              return null == n && (n = a.stringify(a.fastLerp(t, this.option.parsedVisual), 'rgba')), n;
            },
            fixed: v,
          },
        },
        colorHue: h(function(t, e) {
          return a.modifyHSL(t, e);
        }),
        colorSaturation: h(function(t, e) {
          return a.modifyHSL(t, null, e);
        }),
        colorLightness: h(function(t, e) {
          return a.modifyHSL(t, null, null, e);
        }),
        colorAlpha: h(function(t, e) {
          return a.modifyAlpha(t, e);
        }),
        opacity: { applyVisual: p('opacity'), _doMap: y([0, 1]) },
        liftZ: { applyVisual: p('liftZ'), _doMap: { linear: v, category: v, piecewise: v, fixed: v } },
        symbol: {
          applyVisual: function(t, e, n) {
            var a = this.mapValueToVisual(t);
            if (i.isString(a)) n('symbol', a);
            else if (s(a)) for (var o in a) a.hasOwnProperty(o) && n(o, a[o]);
          },
          _doMap: {
            linear: f,
            category: g,
            piecewise: function(t, e) {
              var n = m.call(this, e);
              return null == n && (n = f.call(this, t)), n;
            },
            fixed: v,
          },
        },
        symbolSize: { applyVisual: p('symbolSize'), _doMap: y([0, 1]) },
      });
      function c(t, e) {
        var n = t.visual,
          a = [];
        i.isObject(n)
          ? r(n, function(t) {
              a.push(t);
            })
          : null != n && a.push(n),
          e || 1 !== a.length || { color: 1, symbol: 1 }.hasOwnProperty(t.type) || (a[1] = a[0]),
          I(t, a);
      }
      function h(t) {
        return {
          applyVisual: function(e, n, i) {
            (e = this.mapValueToVisual(e)), i('color', t(n('color'), e));
          },
          _doMap: y([0, 1]),
        };
      }
      function f(t) {
        var e = this.option.visual;
        return e[Math.round(o(t, [0, 1], [0, e.length - 1], !0))] || {};
      }
      function p(t) {
        return function(e, n, i) {
          i(t, this.mapValueToVisual(e));
        };
      }
      function g(t) {
        var e = this.option.visual;
        return e[this.option.loop && t !== u ? t % e.length : t];
      }
      function v() {
        return this.option.visual[0];
      }
      function y(t) {
        return {
          linear: function(e) {
            return o(e, t, this.option.visual, !0);
          },
          category: g,
          piecewise: function(e, n) {
            var i = m.call(this, n);
            return null == i && (i = o(e, t, this.option.visual, !0)), i;
          },
          fixed: v,
        };
      }
      function m(t) {
        var e = this.option,
          n = e.pieceList;
        if (e.hasSpecialVisual) {
          var i = n[d.findPieceIndex(t, n)];
          if (i && i.visual) return i.visual[this.type];
        }
      }
      function I(t, e) {
        return (
          (t.visual = e),
          'color' === t.type &&
            (t.parsedVisual = i.map(e, function(t) {
              return a.parse(t);
            })),
          e
        );
      }
      var x = {
        linear: function(t) {
          return o(t, this.option.dataExtent, [0, 1], !0);
        },
        piecewise: function(t) {
          var e = this.option.pieceList,
            n = d.findPieceIndex(t, e, !0);
          if (null != n) return o(n, [0, e.length - 1], [0, 1], !0);
        },
        category: function(t) {
          var e = this.option.categories ? this.option.categoryMap[t] : t;
          return null == e ? u : e;
        },
        fixed: i.noop,
      };
      function b(t, e, n) {
        return t ? e <= n : e < n;
      }
      (d.listVisualTypes = function() {
        var t = [];
        return (
          i.each(l, function(e, n) {
            t.push(n);
          }),
          t
        );
      }),
        (d.addVisualHandler = function(t, e) {
          l[t] = e;
        }),
        (d.isValidType = function(t) {
          return l.hasOwnProperty(t);
        }),
        (d.eachVisual = function(t, e, n) {
          i.isObject(t) ? i.each(t, e, n) : e.call(n, t);
        }),
        (d.mapVisual = function(t, e, n) {
          var a,
            o = i.isArray(t) ? [] : i.isObject(t) ? {} : ((a = !0), null);
          return (
            d.eachVisual(t, function(t, i) {
              var r = e.call(n, t, i);
              a ? (o = r) : (o[i] = r);
            }),
            o
          );
        }),
        (d.retrieveVisuals = function(t) {
          var e,
            n = {};
          return (
            t &&
              r(l, function(i, a) {
                t.hasOwnProperty(a) && ((n[a] = t[a]), (e = !0));
              }),
            e ? n : null
          );
        }),
        (d.prepareVisualTypes = function(t) {
          if (s(t)) {
            var e = [];
            r(t, function(t, n) {
              e.push(n);
            }),
              (t = e);
          } else {
            if (!i.isArray(t)) return [];
            t = t.slice();
          }
          return (
            t.sort(function(t, e) {
              return 'color' === e && 'color' !== t && 0 === t.indexOf('color') ? 1 : -1;
            }),
            t
          );
        }),
        (d.dependsOn = function(t, e) {
          return 'color' === e ? !(!t || 0 !== t.indexOf(e)) : t === e;
        }),
        (d.findPieceIndex = function(t, e, n) {
          for (var i, a = 1 / 0, o = 0, r = e.length; o < r; o++) {
            var s = e[o].value;
            if (null != s) {
              if (s === t || ('string' == typeof s && s === t + '')) return o;
              n && c(s, o);
            }
          }
          for (o = 0, r = e.length; o < r; o++) {
            var u = e[o],
              d = u.interval,
              l = u.close;
            if (d) {
              if (d[0] === -1 / 0) {
                if (b(l[1], t, d[1])) return o;
              } else if (d[1] === 1 / 0) {
                if (b(l[0], d[0], t)) return o;
              } else if (b(l[0], d[0], t) && b(l[1], t, d[1])) return o;
              n && c(d[0], o), n && c(d[1], o);
            }
          }
          if (n) return t === 1 / 0 ? e.length - 1 : t === -1 / 0 ? 0 : i;
          function c(e, n) {
            var o = Math.abs(e - t);
            o < a && ((a = o), (i = n));
          }
        }),
        (t.exports = d);
    },
    'c2i1': function(t, e, n) {
      n('Tghj');
      var i = n('bYtY'),
        a = n('Yl7c').enableClassCheck;
      function o(t) {
        return '_EC_' + t;
      }
      var r = function(t) {
          (this._directed = t || !1),
            (this.nodes = []),
            (this.edges = []),
            (this._nodesMap = {}),
            (this._edgesMap = {});
        },
        s = r.prototype;
      function u(t, e) {
        (this.id = null == t ? '' : t),
          (this.inEdges = []),
          (this.outEdges = []),
          (this.edges = []),
          (this.dataIndex = null == e ? -1 : e);
      }
      function d(t, e, n) {
        (this.node1 = t), (this.node2 = e), (this.dataIndex = null == n ? -1 : n);
      }
      (s.type = 'graph'),
        (s.isDirected = function() {
          return this._directed;
        }),
        (s.addNode = function(t, e) {
          var n = this._nodesMap;
          if (!n[o((t = t || '' + e))]) {
            var i = new u(t, e);
            return (i.hostGraph = this), this.nodes.push(i), (n[o(t)] = i), i;
          }
        }),
        (s.getNodeByIndex = function(t) {
          var e = this.data.getRawIndex(t);
          return this.nodes[e];
        }),
        (s.getNodeById = function(t) {
          return this._nodesMap[o(t)];
        }),
        (s.addEdge = function(t, e, n) {
          var i = this._nodesMap,
            a = this._edgesMap;
          if (
            ('number' == typeof t && (t = this.nodes[t]),
            'number' == typeof e && (e = this.nodes[e]),
            u.isInstance(t) || (t = i[o(t)]),
            u.isInstance(e) || (e = i[o(e)]),
            t && e)
          ) {
            var r = t.id + '-' + e.id;
            if (!a[r]) {
              var s = new d(t, e, n);
              return (
                (s.hostGraph = this),
                this._directed && (t.outEdges.push(s), e.inEdges.push(s)),
                t.edges.push(s),
                t !== e && e.edges.push(s),
                this.edges.push(s),
                (a[r] = s),
                s
              );
            }
          }
        }),
        (s.getEdgeByIndex = function(t) {
          var e = this.edgeData.getRawIndex(t);
          return this.edges[e];
        }),
        (s.getEdge = function(t, e) {
          u.isInstance(t) && (t = t.id), u.isInstance(e) && (e = e.id);
          var n = this._edgesMap;
          return this._directed ? n[t + '-' + e] : n[t + '-' + e] || n[e + '-' + t];
        }),
        (s.eachNode = function(t, e) {
          for (var n = this.nodes, i = n.length, a = 0; a < i; a++) n[a].dataIndex >= 0 && t.call(e, n[a], a);
        }),
        (s.eachEdge = function(t, e) {
          for (var n = this.edges, i = n.length, a = 0; a < i; a++)
            n[a].dataIndex >= 0 && n[a].node1.dataIndex >= 0 && n[a].node2.dataIndex >= 0 && t.call(e, n[a], a);
        }),
        (s.breadthFirstTraverse = function(t, e, n, i) {
          if ((u.isInstance(e) || (e = this._nodesMap[o(e)]), e)) {
            for (var a = 'out' === n ? 'outEdges' : 'in' === n ? 'inEdges' : 'edges', r = 0; r < this.nodes.length; r++)
              this.nodes[r].__visited = !1;
            if (!t.call(i, e, null))
              for (var s = [e]; s.length; ) {
                var d = s.shift(),
                  l = d[a];
                for (r = 0; r < l.length; r++) {
                  var c = l[r],
                    h = c.node1 === d ? c.node2 : c.node1;
                  if (!h.__visited) {
                    if (t.call(i, h, d)) return;
                    s.push(h), (h.__visited = !0);
                  }
                }
              }
          }
        }),
        (s.update = function() {
          for (var t = this.data, e = this.edgeData, n = this.nodes, i = this.edges, a = 0, o = n.length; a < o; a++)
            n[a].dataIndex = -1;
          for (a = 0, o = t.count(); a < o; a++) n[t.getRawIndex(a)].dataIndex = a;
          for (
            e.filterSelf(function(t) {
              var n = i[e.getRawIndex(t)];
              return n.node1.dataIndex >= 0 && n.node2.dataIndex >= 0;
            }),
              a = 0,
              o = i.length;
            a < o;
            a++
          )
            i[a].dataIndex = -1;
          for (a = 0, o = e.count(); a < o; a++) i[e.getRawIndex(a)].dataIndex = a;
        }),
        (s.clone = function() {
          for (var t = new r(this._directed), e = this.nodes, n = this.edges, i = 0; i < e.length; i++)
            t.addNode(e[i].id, e[i].dataIndex);
          for (i = 0; i < n.length; i++) {
            var a = n[i];
            t.addEdge(a.node1.id, a.node2.id, a.dataIndex);
          }
          return t;
        }),
        (u.prototype = {
          constructor: u,
          degree: function() {
            return this.edges.length;
          },
          inDegree: function() {
            return this.inEdges.length;
          },
          outDegree: function() {
            return this.outEdges.length;
          },
          getModel: function(t) {
            if (!(this.dataIndex < 0)) return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t);
          },
        }),
        (d.prototype.getModel = function(t) {
          if (!(this.dataIndex < 0)) return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t);
        });
      var l = function(t, e) {
        return {
          getValue: function(n) {
            var i = this[t][e];
            return i.get(i.getDimension(n || 'value'), this.dataIndex);
          },
          setVisual: function(n, i) {
            this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, n, i);
          },
          getVisual: function(n, i) {
            return this[t][e].getItemVisual(this.dataIndex, n, i);
          },
          setLayout: function(n, i) {
            this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, n, i);
          },
          getLayout: function() {
            return this[t][e].getItemLayout(this.dataIndex);
          },
          getGraphicEl: function() {
            return this[t][e].getItemGraphicEl(this.dataIndex);
          },
          getRawIndex: function() {
            return this[t][e].getRawIndex(this.dataIndex);
          },
        };
      };
      i.mixin(u, l('hostGraph', 'data')),
        i.mixin(d, l('hostGraph', 'edgeData')),
        (r.Node = u),
        (r.Edge = d),
        a(u),
        a(d),
        (t.exports = r);
    },
    'e+pK': function(t, e, n) {
      'use strict';
      var i = n('ofXK'),
        a = (n('MRoa'), n('IwGX'), n('fXoL'));
      let o = (() => {
        class t {}
        return (
          (t.ɵmod = a.Qb({ type: t })),
          (t.ɵinj = a.Pb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [[i.c]],
          })),
          t
        );
      })();
      n.d(e, 'a', function() {
        return o;
      });
    },
  },
]);
