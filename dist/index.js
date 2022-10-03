
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./findable-components.cjs.production.min.js')
} else {
  module.exports = require('./findable-components.cjs.development.js')
}
