const svelte = require('svelte/compiler')

const transformer = () => (source, filename) => {
  console.warn('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  console.log(source)
  console.log(filename)
  const result = svelte.compile('<div></div>')
  console.log(result.js.code)
  return {
    code: result.js.code,
  }
}

exports.createTransformer = (options) => ({
  process: transformer(options),
})

//Custom dumb svg transformer for jest. See https://jestjs.io/docs/en/tutorial-react#custom-transformers
// module.exports = {
//     process() {
//         console.log("aaa");
//         console.log("aaa");
//         return 'module.exports = {};';
//     },
//     getCacheKey() {
//         return 'svgTransform';
//     },
// };
