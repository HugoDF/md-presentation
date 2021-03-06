const injectSamples = require('./injectSamples')
const emojify = require('./emojifyHeadings')
const fragmentize = require('./fragmentize')

module.exports = async (markdown, /* options */) => {
  return injectSamples(fragmentize(emojify(markdown)))
};
