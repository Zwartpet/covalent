(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    'C+P1': function(e, t, n) {
      'use strict';
      n.r(t);
      var l = n('ofXK'),
        o = n('tk/3'),
        a = n('NFeN'),
        d = n('f0Cb'),
        i = n('MutI'),
        r = n('XhcP'),
        h = n('/t3+'),
        p = n('Wp6s'),
        c = n('bTqV'),
        u = n('zkoq'),
        s = n('wZkO'),
        b = n('FKr1'),
        m = n('STbY'),
        C = n('Qu3c'),
        P = n('B7SF'),
        M = n('sHJK'),
        f = n('qeof'),
        w = n('ZI6o'),
        v = n('RJWD'),
        D = n('dE5l'),
        j = n('Kl+F'),
        k = n('XvKp'),
        y = n('aWCS'),
        O = n('tyNb'),
        W = n('sZfy'),
        q = n('W6/J');
      const J = [
          {
            path: 'echarts',
            children: [
              { component: y.a, path: '', data: { category: 'echarts' } },
              { path: 'getting-started', component: q.a, data: { resourceUrl: 'platform/echarts/README.md' } },
              { path: 'chart', children: Object(W.c)({ id: 'chart', overviewDemoComponent: '' }) },
              {
                path: 'combination',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(2), n.e(3), n.e(4), n.e(9), n.e(68)])
                    .then(n.bind(null, 'WJ7O'))
                    .then((e) => e.CombinationModule),
              },
              {
                path: 'bar',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(2), n.e(3), n.e(4), n.e(9), n.e(0), n.e(67)])
                    .then(n.bind(null, '8nql'))
                    .then((e) => e.BarModule),
              },
              {
                path: 'graph',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(8), n.e(16), n.e(32)])
                    .then(n.bind(null, 'jBo2'))
                    .then((e) => e.GraphModule),
              },
              {
                path: 'line',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(3), n.e(4), n.e(33)])
                    .then(n.bind(null, 'yWiE'))
                    .then((e) => e.LineModule),
              },
              {
                path: 'map',
                loadChildren: () =>
                  Promise.all([
                    n.e(1),
                    n.e(2),
                    n.e(3),
                    n.e(4),
                    n.e(5),
                    n.e(6),
                    n.e(8),
                    n.e(10),
                    n.e(11),
                    n.e(14),
                    n.e(69),
                  ])
                    .then(n.bind(null, 'sPDB'))
                    .then((e) => e.MapModule),
              },
              {
                path: 'pie',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(2), n.e(6), n.e(0), n.e(34)])
                    .then(n.bind(null, 'SAd7'))
                    .then((e) => e.PieModule),
              },
              {
                path: 'sankey',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(11), n.e(19), n.e(70)])
                    .then(n.bind(null, 'O+h4'))
                    .then((e) => e.SankeyModule),
              },
              {
                path: 'scatter',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(3), n.e(0), n.e(29)])
                    .then(n.bind(null, 'kpj+'))
                    .then((e) => e.ScatterModule),
              },
              {
                path: 'tree',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(2), n.e(5), n.e(17), n.e(71)])
                    .then(n.bind(null, 'NqoG'))
                    .then((e) => e.TreeModule),
              },
              {
                path: 'treemap',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(10), n.e(20), n.e(35)])
                    .then(n.bind(null, 'Vdog'))
                    .then((e) => e.TreemapModule),
              },
              {
                path: 'wordcloud',
                loadChildren: () =>
                  Promise.all([n.e(1), n.e(18), n.e(72)])
                    .then(n.bind(null, 'fuDi'))
                    .then((e) => e.WordcloudModule),
              },
              { path: 'tooltip', children: Object(W.c)({ id: 'tooltip', overviewDemoComponent: '' }) },
              { path: 'axis', children: Object(W.c)({ id: 'axis', overviewDemoComponent: '' }) },
              { path: 'toolbox', children: Object(W.c)({ id: 'toolbox', overviewDemoComponent: '' }) },
              { path: 'dataset', children: Object(W.c)({ id: 'dataset', overviewDemoComponent: '' }) },
            ],
          },
        ],
        S = O.f.forChild(J);
      var g = n('fXoL');
      n.d(t, 'EchartsModule', function() {
        return E;
      });
      let E = (() => {
        class e {}
        return (
          (e.ɵmod = g.Qb({ type: e })),
          (e.ɵinj = g.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            imports: [
              [
                l.c,
                a.b,
                d.b,
                r.d,
                h.b,
                i.e,
                p.e,
                c.c,
                u.a,
                s.f,
                b.q,
                m.b,
                o.b,
                C.b,
                P.a,
                M.a,
                f.a,
                w.a,
                v.a,
                D.a,
                S,
                j.a,
                k.a,
              ],
            ],
          })),
          e
        );
      })();
    },
  },
]);
