import { setDefaultAutoSelectFamilyAttemptTimeout } from 'node:net'

import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'

// On Netlify, building will result in when fetching metadata and fonts from @unocss/preset-web-fonts plugin:
//
// [cause]: AggregateError [ETIMEDOUT]:
//    at internalConnectMultiple (node:net:1134:18)
//  code: 'ETIMEDOUT',
//  [errors]: [
//    Error: connect ETIMEDOUT 146.75.77.229:443 ...
//    Error: connect ENETUNREACH 2a04:4e42:83::485:443 - Local (:::0) ...
//  ]
//
// This is same for either Google Fonts or Fontsource as provider. But GitHub Actions and local development works fine.
// My assumption is that the default timeout for auto-selecting family is too short (250ms)[^1] for the implementation
// of the Happy Eyeballs algorithm in Node.js, which is used by the `net` module to connect to the server, workflows
// illustrates like this:
//
// lookupAndConnect > autoSelectFamilyAttemptTimeout > lookupAndConnectMultiple > internalConnectMultiple > defaultTriggerAsyncIdScope
//
// Such mechanism will be used when the `net` module attempts to connect to a server using both IPv4 and IPv6 addresses,
// which is the case for Netlify builder.
//
// In order to fix this issue, we can increase the timeout to 1000ms (1 second) so that the algorithm has more time to
// attempt to connect to the server before timing out.
//
// [^1]: https://github.com/nodejs/node/pull/44731/files#diff-d76469e9e7f555294a7a5488c5c8fc4ef8ce5aea448cc26a1322d1ab693e09caR921
setDefaultAutoSelectFamilyAttemptTimeout(1000)

export default defineConfig({
  shortcuts: [],
  presets: [
    presetWind3({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      scale: 1.2, // size: 1.2 rem
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'min-width': '1.2rem',
      },
      warn: true,
      autoInstall: true,
    }),
  ],
})
