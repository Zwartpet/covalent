(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    eTLM: function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return u;
      });
      var o = r('ofXK'),
        n = r('tyNb'),
        a = r('wZkO'),
        s = r('NFeN'),
        c = r('Wp6s'),
        i = r('sHJK'),
        d = r('ZI6o'),
        p = (r('p6QC'), r('SNPZ'), r('dE5l')),
        f = r('fXoL');
      let u = (() => {
        class e {}
        return (
          (e.ɵmod = f.Qb({ type: e })),
          (e.ɵinj = f.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[o.c, n.f, s.b, c.e, a.f, d.a, i.a, p.a]],
          })),
          e
        );
      })();
    },
    q0n7: function(e, t, r) {
      'use strict';
      r.r(t);
      var o = r('ofXK'),
        n = r('tyNb'),
        a = r('Wp6s'),
        s = r('f0Cb'),
        c = r('eTLM'),
        i = r('XkJo'),
        d = r('ZSBC'),
        p = r('Q3DV'),
        f = r('fXoL'),
        u = r('7yon');
      let y = (() => {
        class e {
          constructor() {
            this.data = {
              stringProperty: 'This is a string',
              dateProperty: new Date(),
              numberProperty: 1e4,
              booleanProperty: !0,
              numberArray: [1, 2, 3, 4, 5, 6],
              arrayOfArrays: [
                [1, [2, 3]],
                [3, 4],
              ],
              objectArray: [{ prop: void 0 }, {}],
              functionProperty: (e, t) => {},
              undefinedProperty: void 0,
              longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy: 'got truncated',
              emptyObject: {},
              emptyArray: [],
            };
          }
        }
        return (
          (e.ɵfac = function(t) {
            return new (t || e)();
          }),
          (e.ɵcmp = f.Mb({
            type: e,
            selectors: [['json-formatter-demo']],
            decls: 1,
            vars: 2,
            consts: [[1, 'pad-md', 3, 'data', 'levelsOpen']],
            template: function(e, t) {
              1 & e && f.Tb(0, 'td-json-formatter', 0), 2 & e && f.qc('data', t.data)('levelsOpen', 2);
            },
            directives: [u.a],
            styles: ['[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   td-json-formatter[_ngcontent-%COMP%]{width:100%}'],
          })),
          e
        );
      })();
      var m = r('dE5l');
      r.d(t, 'JsonFormatterDemoModule', function() {
        return b;
      });
      const l = Object(p.c)({ overviewDemoComponent: y, id: 'json-formatter' });
      let b = (() => {
        class e {}
        return (
          (e.ɵmod = f.Qb({ type: e })),
          (e.ɵinj = f.Pb({
            factory: function(t) {
              return new (t || e)();
            },
            providers: [],
            imports: [[o.c, a.e, s.b, m.a, c.a, i.a, d.a, n.f.forChild(l)]],
          })),
          e
        );
      })();
    },
  },
]);
