/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 1.7.0(06ba3ff7e80720fda9a83bce89dbe13ed389b69e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/markdown/markdown', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.conf = {
      comments: { blockComment: ['\x3c!--', '--\x3e'] },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>', notIn: ['string'] },
      ],
      surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' },
      ],
      folding: {
        markers: {
          start: new RegExp('^\\s*\x3c!--\\s*#?region\\b.*--\x3e'),
          end: new RegExp('^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e'),
        },
      },
    }),
    (t.language = {
      defaultToken: '',
      tokenPostfix: '.md',
      control: /[\\`*_\[\]{}()#+\-\.!]/,
      noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
      escapes: /\\(?:@control)/,
      jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
      empty: [
        'area',
        'base',
        'basefont',
        'br',
        'col',
        'frame',
        'hr',
        'img',
        'input',
        'isindex',
        'link',
        'meta',
        'param',
      ],
      tokenizer: {
        root: [
          [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', 'keyword', 'keyword', 'keyword']],
          [/^\s*(=+|\-+)\s*$/, 'keyword'],
          [/^\s*((\*[ ]?)+)\s*$/, 'meta.separator'],
          [/^\s*>+/, 'comment'],
          [/^\s*([\*\-+:]|\d+\.)\s/, 'keyword'],
          [/^(\t|[ ]{4})[^ ].*$/, 'string'],
          [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: 'string', next: '@codeblock' }],
          [/^\s*```\s*((?:\w|[\/\-#])+).*$/, { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }],
          [/^\s*```\s*$/, { token: 'string', next: '@codeblock' }],
          { include: '@linecontent' },
        ],
        codeblock: [
          [/^\s*~~~\s*$/, { token: 'string', next: '@pop' }],
          [/^\s*```\s*$/, { token: 'string', next: '@pop' }],
          [/.*$/, 'variable.source'],
        ],
        codeblockgh: [
          [/```\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],
          [/[^`]+/, 'variable.source'],
        ],
        linecontent: [
          [/&\w+;/, 'string.escape'],
          [/@escapes/, 'escape'],
          [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
          [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
          [/\b_[^_]+_\b/, 'emphasis'],
          [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
          [/`([^\\`]|@escapes)+`/, 'variable'],
          [/\{+[^}]+\}+/, 'string.target'],
          [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
          [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
          { include: 'html' },
        ],
        html: [
          [/<(\w+)\/>/, 'tag'],
          [
            /<(\w+)/,
            { cases: { '@empty': { token: 'tag', next: '@tag.$1' }, '@default': { token: 'tag', next: '@tag.$1' } } },
          ],
          [/<\/(\w+)\s*>/, { token: 'tag' }],
          [/<!--/, 'comment', '@comment'],
        ],
        comment: [
          [/[^<\-]+/, 'comment.content'],
          [/-->/, 'comment', '@pop'],
          [/<!--/, 'comment.content.invalid'],
          [/[<\-]/, 'comment.content'],
        ],
        tag: [
          [/[ \t\r\n]+/, 'white'],
          [
            /(type)(\s*=\s*)(")([^"]+)(")/,
            [
              'attribute.name.html',
              'delimiter.html',
              'string.html',
              { token: 'string.html', switchTo: '@tag.$S2.$4' },
              'string.html',
            ],
          ],
          [
            /(type)(\s*=\s*)(')([^']+)(')/,
            [
              'attribute.name.html',
              'delimiter.html',
              'string.html',
              { token: 'string.html', switchTo: '@tag.$S2.$4' },
              'string.html',
            ],
          ],
          [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name.html', 'delimiter.html', 'string.html']],
          [/\w+/, 'attribute.name.html'],
          [/\/>/, 'tag', '@pop'],
          [
            />/,
            {
              cases: {
                '$S2==style': { token: 'tag', switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },
                '$S2==script': {
                  cases: {
                    '$S3': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: '$S3' },
                    '@default': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' },
                  },
                },
                '@default': { token: 'tag', next: '@pop' },
              },
            },
          ],
        ],
        embeddedStyle: [
          [/[^<]+/, ''],
          [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
          [/</, ''],
        ],
        embeddedScript: [
          [/[^<]+/, ''],
          [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
          [/</, ''],
        ],
      },
    });
});
