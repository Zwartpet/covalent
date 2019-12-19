(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '0Bwj': function(e, t, o) {
      var a = o('T4UG'),
        n = o('I3/A'),
        i = o('7aKB').encodeHTML,
        u = a.extend({
          type: 'series.sankey',
          layoutInfo: null,
          getInitialData: function(e) {
            var t = e.edges || e.links,
              o = e.data || e.nodes;
            if (o && t) return n(o, t, this, !0).data;
          },
          setNodePosition: function(e, t) {
            var o = this.option.data[e];
            (o.localX = t[0]), (o.localY = t[1]);
          },
          getGraph: function() {
            return this.getData().graph;
          },
          getEdgeData: function() {
            return this.getGraph().edgeData;
          },
          formatTooltip: function(e, t, o) {
            if ('edge' === o) {
              var a = this.getDataParams(e, o),
                n = a.data,
                c = n.source + ' -- ' + n.target;
              return a.value && (c += ' : ' + a.value), i(c);
            }
            return u.superCall(this, 'formatTooltip', e, t);
          },
          optionUpdated: function() {
            var e = this.option;
            !0 === e.focusNodeAdjacency && (e.focusNodeAdjacency = 'allEdges');
          },
          defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: 'view',
            layout: null,
            left: '5%',
            top: '5%',
            right: '20%',
            bottom: '5%',
            orient: 'horizontal',
            nodeWidth: 20,
            nodeGap: 8,
            draggable: !0,
            focusNodeAdjacency: !1,
            layoutIterations: 32,
            label: { show: !0, position: 'right', color: '#000', fontSize: 12 },
            itemStyle: { borderWidth: 1, borderColor: '#333' },
            lineStyle: { color: '#314656', opacity: 0.2, curveness: 0.5 },
            emphasis: { label: { show: !0 }, lineStyle: { opacity: 0.6 } },
            animationEasing: 'linear',
            animationDuration: 1e3,
          },
        });
      e.exports = u;
    },
    'Dg8C': function(e, t, o) {
      var a = o('XxSj'),
        n = o('bYtY');
      e.exports = function(e, t) {
        e.eachSeriesByType('sankey', function(e) {
          var t = e.getGraph().nodes;
          if (t.length) {
            var o = 1 / 0,
              i = -1 / 0;
            n.each(t, function(e) {
              var t = e.getLayout().value;
              t < o && (o = t), t > i && (i = t);
            }),
              n.each(t, function(t) {
                var n = new a({
                  type: 'color',
                  mappingMethod: 'linear',
                  dataExtent: [o, i],
                  visual: e.get('color'),
                }).mapValueToVisual(t.getLayout().value);
                t.setVisual('color', n);
                var u = t.getModel().get('itemStyle.color');
                null != u && t.setVisual('color', u);
              });
          }
        });
      };
    },
    'MRoa': function(e, t, o) {
      var a = o('ProS');
      o('0Bwj'), o('W2nI'), o('vcCh');
      var n = o('gawk'),
        i = o('Dg8C');
      a.registerLayout(n), a.registerVisual(i);
    },
    'W2nI': function(e, t, o) {
      var a = o('IwbS'),
        n = o('ProS'),
        i = o('bYtY'),
        u = ['itemStyle', 'opacity'],
        c = ['lineStyle', 'opacity'];
      function r(e, t) {
        return e.getVisual('opacity') || e.getModel().get(t);
      }
      function d(e, t, o) {
        var a = e.getGraphicEl(),
          n = r(e, t);
        null != o && (null == n && (n = 1), (n *= o)),
          a.downplay && a.downplay(),
          a.traverse(function(e) {
            'group' !== e.type && e.setStyle('opacity', n);
          });
      }
      function l(e, t) {
        var o = r(e, t),
          a = e.getGraphicEl();
        a.highlight && a.highlight(),
          a.traverse(function(e) {
            'group' !== e.type && e.setStyle('opacity', o);
          });
      }
      var s = a.extendShape({
          shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, cpx2: 0, cpy2: 0, extent: 0, orient: '' },
          buildPath: function(e, t) {
            var o = t.extent;
            'vertical' === t.orient
              ? (e.moveTo(t.x1, t.y1),
                e.bezierCurveTo(t.cpx1, t.cpy1, t.cpx2, t.cpy2, t.x2, t.y2),
                e.lineTo(t.x2 + o, t.y2),
                e.bezierCurveTo(t.cpx2 + o, t.cpy2, t.cpx1 + o, t.cpy1, t.x1 + o, t.y1))
              : (e.moveTo(t.x1, t.y1),
                e.bezierCurveTo(t.cpx1, t.cpy1, t.cpx2, t.cpy2, t.x2, t.y2),
                e.lineTo(t.x2, t.y2 + o),
                e.bezierCurveTo(t.cpx2, t.cpy2 + o, t.cpx1, t.cpy1 + o, t.x1, t.y1 + o)),
              e.closePath();
          },
        }),
        y = n.extendChartView({
          type: 'sankey',
          _model: null,
          _focusAdjacencyDisabled: !1,
          render: function(e, t, o) {
            var n = this,
              i = e.getGraph(),
              u = this.group,
              c = e.layoutInfo,
              r = c.width,
              d = c.height,
              l = e.getData(),
              y = e.getData('edge'),
              g = e.get('orient');
            (this._model = e),
              u.removeAll(),
              u.attr('position', [c.x, c.y]),
              i.eachEdge(function(t) {
                var o = new s();
                (o.dataIndex = t.dataIndex), (o.seriesIndex = e.seriesIndex), (o.dataType = 'edge');
                var n,
                  i,
                  c,
                  l,
                  f,
                  h,
                  p,
                  x,
                  v = t.getModel('lineStyle'),
                  L = v.get('curveness'),
                  m = t.node1.getLayout(),
                  I = t.node1.getModel(),
                  E = I.get('localX'),
                  b = I.get('localY'),
                  S = t.node2.getLayout(),
                  w = t.node2.getModel(),
                  A = w.get('localX'),
                  N = w.get('localY'),
                  T = t.getLayout();
                switch (
                  ((o.shape.extent = Math.max(1, T.dy)),
                  (o.shape.orient = g),
                  'vertical' === g
                    ? ((f = n = (null != E ? E * r : m.x) + T.sy),
                      (h = (i = (null != b ? b * d : m.y) + m.dy) * (1 - L) + (l = null != N ? N * d : S.y) * L),
                      (p = c = (null != A ? A * r : S.x) + T.ty),
                      (x = i * L + l * (1 - L)))
                    : ((f = (n = (null != E ? E * r : m.x) + m.dx) * (1 - L) + (c = null != A ? A * r : S.x) * L),
                      (h = i = (null != b ? b * d : m.y) + T.sy),
                      (p = n * L + c * (1 - L)),
                      (x = l = (null != N ? N * d : S.y) + T.ty)),
                  o.setShape({ x1: n, y1: i, x2: c, y2: l, cpx1: f, cpy1: h, cpx2: p, cpy2: x }),
                  o.setStyle(v.getItemStyle()),
                  o.style.fill)
                ) {
                  case 'source':
                    o.style.fill = t.node1.getVisual('color');
                    break;
                  case 'target':
                    o.style.fill = t.node2.getVisual('color');
                }
                a.setHoverStyle(o, t.getModel('emphasis.lineStyle').getItemStyle()),
                  u.add(o),
                  y.setItemGraphicEl(t.dataIndex, o);
              }),
              i.eachNode(function(t) {
                var o = t.getLayout(),
                  n = t.getModel(),
                  i = n.get('localX'),
                  c = n.get('localY'),
                  s = n.getModel('label'),
                  y = n.getModel('emphasis.label'),
                  g = new a.Rect({
                    shape: { x: null != i ? i * r : o.x, y: null != c ? c * d : o.y, width: o.dx, height: o.dy },
                    style: n.getModel('itemStyle').getItemStyle(),
                  }),
                  f = t.getModel('emphasis.itemStyle').getItemStyle();
                a.setLabelStyle(g.style, f, s, y, {
                  labelFetcher: e,
                  labelDataIndex: t.dataIndex,
                  defaultText: t.id,
                  isRectText: !0,
                }),
                  g.setStyle('fill', t.getVisual('color')),
                  a.setHoverStyle(g, f),
                  u.add(g),
                  l.setItemGraphicEl(t.dataIndex, g),
                  (g.dataType = 'node');
              }),
              l.eachItemGraphicEl(function(t, a) {
                var i = l.getItemModel(a);
                i.get('draggable') &&
                  ((t.drift = function(t, i) {
                    (n._focusAdjacencyDisabled = !0),
                      (this.shape.x += t),
                      (this.shape.y += i),
                      this.dirty(),
                      o.dispatchAction({
                        type: 'dragNode',
                        seriesId: e.id,
                        dataIndex: l.getRawIndex(a),
                        localX: this.shape.x / r,
                        localY: this.shape.y / d,
                      });
                  }),
                  (t.ondragend = function() {
                    n._focusAdjacencyDisabled = !1;
                  }),
                  (t.draggable = !0),
                  (t.cursor = 'move')),
                  i.get('focusNodeAdjacency') &&
                    (t.off('mouseover').on('mouseover', function() {
                      n._focusAdjacencyDisabled ||
                        o.dispatchAction({ type: 'focusNodeAdjacency', seriesId: e.id, dataIndex: t.dataIndex });
                    }),
                    t.off('mouseout').on('mouseout', function() {
                      n._focusAdjacencyDisabled || o.dispatchAction({ type: 'unfocusNodeAdjacency', seriesId: e.id });
                    }));
              }),
              y.eachItemGraphicEl(function(t, a) {
                y.getItemModel(a).get('focusNodeAdjacency') &&
                  (t.off('mouseover').on('mouseover', function() {
                    n._focusAdjacencyDisabled ||
                      o.dispatchAction({ type: 'focusNodeAdjacency', seriesId: e.id, edgeDataIndex: t.dataIndex });
                  }),
                  t.off('mouseout').on('mouseout', function() {
                    n._focusAdjacencyDisabled || o.dispatchAction({ type: 'unfocusNodeAdjacency', seriesId: e.id });
                  }));
              }),
              !this._data &&
                e.get('animation') &&
                u.setClipPath(
                  (function(e, t, o) {
                    var n = new a.Rect({ shape: { x: e.x - 10, y: e.y - 10, width: 0, height: e.height + 20 } });
                    return (
                      a.initProps(n, { shape: { width: e.width + 20, height: e.height + 20 } }, t, function() {
                        u.removeClipPath();
                      }),
                      n
                    );
                  })(u.getBoundingRect(), e),
                ),
              (this._data = e.getData());
          },
          dispose: function() {},
          focusNodeAdjacency: function(e, t, o, a) {
            var n = this._model.getData(),
              r = n.graph,
              s = a.dataIndex,
              y = n.getItemModel(s),
              g = a.edgeDataIndex;
            if (null != s || null != g) {
              var f = r.getNodeByIndex(s),
                h = r.getEdgeByIndex(g);
              if (
                (r.eachNode(function(e) {
                  d(e, u, 0.1);
                }),
                r.eachEdge(function(e) {
                  d(e, c, 0.1);
                }),
                f)
              ) {
                l(f, u);
                var p = y.get('focusNodeAdjacency');
                'outEdges' === p
                  ? i.each(f.outEdges, function(e) {
                      e.dataIndex < 0 || (l(e, c), l(e.node2, u));
                    })
                  : 'inEdges' === p
                  ? i.each(f.inEdges, function(e) {
                      e.dataIndex < 0 || (l(e, c), l(e.node1, u));
                    })
                  : 'allEdges' === p &&
                    i.each(f.edges, function(e) {
                      e.dataIndex < 0 || (l(e, c), l(e.node1, u), l(e.node2, u));
                    });
              }
              h && (l(h, c), l(h.node1, u), l(h.node2, u));
            }
          },
          unfocusNodeAdjacency: function(e, t, o, a) {
            var n = this._model.getGraph();
            n.eachNode(function(e) {
              d(e, u);
            }),
              n.eachEdge(function(e) {
                d(e, c);
              });
          },
        });
      e.exports = y;
    },
    'gawk': function(e, t, o) {
      var a = o('+TT/'),
        n = o('bYtY'),
        i = o('4NO4').groupData;
      function u(e, t, o, a, i) {
        n.each(e, function(e) {
          var n,
            u,
            c,
            r = 0,
            d = e.length;
          if ('vertical' === i) {
            var l;
            for (
              e.sort(function(e, t) {
                return e.getLayout().x - t.getLayout().x;
              }),
                c = 0;
              c < d;
              c++
            )
              (u = r - (n = e[c]).getLayout().x) > 0 && ((l = n.getLayout().x + u), n.setLayout({ x: l }, !0)),
                (r = n.getLayout().x + n.getLayout().dx + t);
            if ((u = r - t - a) > 0)
              for (l = n.getLayout().x - u, n.setLayout({ x: l }, !0), r = l, c = d - 2; c >= 0; --c)
                (u = (n = e[c]).getLayout().x + n.getLayout().dx + t - r) > 0 &&
                  ((l = n.getLayout().x - u), n.setLayout({ x: l }, !0)),
                  (r = n.getLayout().x);
          } else {
            var s;
            for (
              e.sort(function(e, t) {
                return e.getLayout().y - t.getLayout().y;
              }),
                c = 0;
              c < d;
              c++
            )
              (u = r - (n = e[c]).getLayout().y) > 0 && ((s = n.getLayout().y + u), n.setLayout({ y: s }, !0)),
                (r = n.getLayout().y + n.getLayout().dy + t);
            if ((u = r - t - o) > 0)
              for (s = n.getLayout().y - u, n.setLayout({ y: s }, !0), r = s, c = d - 2; c >= 0; --c)
                (u = (n = e[c]).getLayout().y + n.getLayout().dy + t - r) > 0 &&
                  ((s = n.getLayout().y - u), n.setLayout({ y: s }, !0)),
                  (r = n.getLayout().y);
          }
        });
      }
      function c(e, t, o) {
        n.each(e.slice().reverse(), function(e) {
          n.each(e, function(e) {
            if (e.outEdges.length) {
              var a = y(e.outEdges, r, o) / y(e.outEdges, s, o);
              if ('vertical' === o) {
                var n = e.getLayout().x + (a - l(e, o)) * t;
                e.setLayout({ x: n }, !0);
              } else {
                var i = e.getLayout().y + (a - l(e, o)) * t;
                e.setLayout({ y: i }, !0);
              }
            }
          });
        });
      }
      function r(e, t) {
        return l(e.node2, t) * e.getValue();
      }
      function d(e, t) {
        return l(e.node1, t) * e.getValue();
      }
      function l(e, t) {
        return 'vertical' === t ? e.getLayout().x + e.getLayout().dx / 2 : e.getLayout().y + e.getLayout().dy / 2;
      }
      function s(e) {
        return e.getValue();
      }
      function y(e, t, o) {
        for (var a = 0, n = e.length, i = -1; ++i < n; ) {
          var u = +t.call(e, e[i], o);
          isNaN(u) || (a += u);
        }
        return a;
      }
      function g(e, t, o) {
        n.each(e, function(e) {
          n.each(e, function(e) {
            if (e.inEdges.length) {
              var a = y(e.inEdges, d, o) / y(e.inEdges, s, o);
              if ('vertical' === o) {
                var n = e.getLayout().x + (a - l(e, o)) * t;
                e.setLayout({ x: n }, !0);
              } else {
                var i = e.getLayout().y + (a - l(e, o)) * t;
                e.setLayout({ y: i }, !0);
              }
            }
          });
        });
      }
      o('Tghj'),
        (e.exports = function(e, t, o) {
          e.eachSeriesByType('sankey', function(e) {
            var o = e.get('nodeWidth'),
              r = e.get('nodeGap'),
              d = (function(e, t) {
                return a.getLayoutRect(e.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() });
              })(e, t);
            e.layoutInfo = d;
            var l = d.width,
              f = d.height,
              h = e.getGraph(),
              p = h.nodes,
              x = h.edges;
            !(function(e) {
              n.each(e, function(e) {
                var t = y(e.outEdges, s),
                  o = y(e.inEdges, s),
                  a = Math.max(t, o);
                e.setLayout({ value: a }, !0);
              });
            })(p),
              (function(e, t, o, a, r, d, l, s) {
                (function(e, t, o, a, i, u) {
                  for (var c = [], r = [], d = [], l = [], s = 0, y = 0; y < t.length; y++) c[y] = 1;
                  for (y = 0; y < e.length; y++) (r[y] = e[y].inEdges.length), 0 === r[y] && d.push(e[y]);
                  for (; d.length; ) {
                    for (var g = 0; g < d.length; g++) {
                      var f = d[g];
                      'vertical' === u
                        ? (f.setLayout({ y: s }, !0), f.setLayout({ dy: o }, !0))
                        : (f.setLayout({ x: s }, !0), f.setLayout({ dx: o }, !0));
                      for (var h = 0; h < f.outEdges.length; h++) {
                        var p = f.outEdges[h];
                        c[t.indexOf(p)] = 0;
                        var x = p.node2;
                        0 == --r[e.indexOf(x)] && l.push(x);
                      }
                    }
                    ++s, (d = l), (l = []);
                  }
                  for (y = 0; y < c.length; y++);
                  (function(e, t, o) {
                    n.each(e, function(e) {
                      e.outEdges.length || e.setLayout('vertical' === o ? { y: t - 1 } : { x: t - 1 }, !0);
                    });
                  })(e, s, u),
                    (function(e, t, o) {
                      n.each(e, function(e) {
                        if ('vertical' === o) {
                          var a = e.getLayout().y * t;
                          e.setLayout({ y: a }, !0);
                        } else {
                          var n = e.getLayout().x * t;
                          e.setLayout({ x: n }, !0);
                        }
                      });
                    })(e, 'vertical' === u ? (i - o) / (s - 1) : (a - o) / (s - 1), u);
                })(e, t, o, r, d, s),
                  (function(e, t, o, a, r, d, l) {
                    var s = (function(e, t) {
                      var o = [],
                        a = 'vertical' === t ? 'y' : 'x',
                        u = i(e, function(e) {
                          return e.getLayout()[a];
                        });
                      return (
                        u.keys.sort(function(e, t) {
                          return e - t;
                        }),
                        n.each(u.keys, function(e) {
                          o.push(u.buckets.get(e));
                        }),
                        o
                      );
                    })(e, l);
                    (function(e, t, o, a, i, u, c) {
                      var r = [];
                      n.each(t, function(e) {
                        var t = e.length,
                          o = 0;
                        n.each(e, function(e) {
                          o += e.getLayout().value;
                        }),
                          r.push('vertical' === c ? (i - (t - 1) * u) / o : (a - (t - 1) * u) / o);
                      }),
                        r.sort(function(e, t) {
                          return e - t;
                        });
                      var d = r[0];
                      n.each(t, function(e) {
                        n.each(e, function(e, t) {
                          var o = e.getLayout().value * d;
                          'vertical' === c
                            ? (e.setLayout({ x: t }, !0), e.setLayout({ dx: o }, !0))
                            : (e.setLayout({ y: t }, !0), e.setLayout({ dy: o }, !0));
                        });
                      }),
                        n.each(o, function(e) {
                          var t = +e.getValue() * d;
                          e.setLayout({ dy: t }, !0);
                        });
                    })(0, s, t, o, a, r, l),
                      u(s, r, o, a, l);
                    for (var y = 1; d > 0; d--) c(s, (y *= 0.99), l), u(s, r, o, a, l), g(s, y, l), u(s, r, o, a, l);
                  })(e, t, d, r, a, l, s),
                  (function(e, t) {
                    n.each(e, function(e) {
                      'vertical' === t
                        ? (e.outEdges.sort(function(e, t) {
                            return e.node2.getLayout().x - t.node2.getLayout().x;
                          }),
                          e.inEdges.sort(function(e, t) {
                            return e.node1.getLayout().x - t.node1.getLayout().x;
                          }))
                        : (e.outEdges.sort(function(e, t) {
                            return e.node2.getLayout().y - t.node2.getLayout().y;
                          }),
                          e.inEdges.sort(function(e, t) {
                            return e.node1.getLayout().y - t.node1.getLayout().y;
                          }));
                    }),
                      n.each(e, function(e) {
                        var t = 0,
                          o = 0;
                        n.each(e.outEdges, function(e) {
                          e.setLayout({ sy: t }, !0), (t += e.getLayout().dy);
                        }),
                          n.each(e.inEdges, function(e) {
                            e.setLayout({ ty: o }, !0), (o += e.getLayout().dy);
                          });
                      });
                  })(e, s);
              })(
                p,
                x,
                o,
                r,
                l,
                f,
                0 !==
                  n.filter(p, function(e) {
                    return 0 === e.getLayout().value;
                  }).length
                  ? 0
                  : e.get('layoutIterations'),
                e.get('orient'),
              );
          });
        });
    },
    'vcCh': function(e, t, o) {
      var a = o('ProS');
      o('0qV/'),
        a.registerAction({ type: 'dragNode', event: 'dragNode', update: 'update' }, function(e, t) {
          t.eachComponent({ mainType: 'series', subType: 'sankey', query: e }, function(t) {
            t.setNodePosition(e.dataIndex, [e.localX, e.localY]);
          });
        });
    },
  },
]);
