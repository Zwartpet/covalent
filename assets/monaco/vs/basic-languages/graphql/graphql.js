/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 1.7.0(06ba3ff7e80720fda9a83bce89dbe13ed389b69e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/graphql/graphql', ['require', 'exports'], function(e, n) {
  'use strict';
  Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.conf = {
      comments: { lineComment: '#' },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
      ],
      surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"""', close: '"""' },
        { open: '"', close: '"' },
      ],
      folding: { offSide: !0 },
    }),
    (n.language = {
      defaultToken: 'invalid',
      tokenPostfix: '.gql',
      keywords: [
        'null',
        'true',
        'false',
        'query',
        'mutation',
        'subscription',
        'extend',
        'schema',
        'directive',
        'scalar',
        'type',
        'interface',
        'union',
        'enum',
        'input',
        'implements',
        'fragment',
        'on',
      ],
      typeKeywords: ['Int', 'Float', 'String', 'Boolean', 'ID'],
      directiveLocations: [
        'SCHEMA',
        'SCALAR',
        'OBJECT',
        'FIELD_DEFINITION',
        'ARGUMENT_DEFINITION',
        'INTERFACE',
        'UNION',
        'ENUM',
        'ENUM_VALUE',
        'INPUT_OBJECT',
        'INPUT_FIELD_DEFINITION',
        'QUERY',
        'MUTATION',
        'SUBSCRIPTION',
        'FIELD',
        'FRAGMENT_DEFINITION',
        'FRAGMENT_SPREAD',
        'INLINE_FRAGMENT',
        'VARIABLE_DEFINITION',
      ],
      operators: ['=', '!', '?', ':', '&', '|'],
      symbols: /[=!?:&|]+/,
      escapes: /\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,
      tokenizer: {
        root: [
          [/[a-z_$][\w$]*/, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
          [/[A-Z][\w\$]*/, { cases: { '@typeKeywords': 'keyword', '@default': 'type.identifier' } }],
          { include: '@whitespace' },
          [/[{}()\[\]]/, '@brackets'],
          [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
          [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],
          [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
          [/0[xX][0-9a-fA-F]+/, 'number.hex'],
          [/\d+/, 'number'],
          [/[;,.]/, 'delimiter'],
          [/"""/, { token: 'string', next: '@mlstring', nextEmbedded: 'markdown' }],
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
        ],
        mlstring: [
          [/[^"]+/, 'string'],
          ['"""', { token: 'string', next: '@pop', nextEmbedded: '@pop' }],
        ],
        string: [
          [/[^\\"]+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],
        whitespace: [
          [/[ \t\r\n]+/, ''],
          [/#.*$/, 'comment'],
        ],
      },
    });
});
