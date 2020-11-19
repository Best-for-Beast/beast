const svelte = require('svelte/compiler')
const path = require('path')

const svgSourceDummy = (filename) => `
  <script>
    export let height = null
    export let width = null
    export let fill = null
  </script>

  <div data-testid=${filename} class="{$$props.class}" {height} {width} {fill} />`

function process(_, filename) {
  const name = path.basename(filename)
  const result = svelte.compile(svgSourceDummy(name), {
    filename,
    // Allow tests to set component props.
    accessors: true,
    // Debugging and runtime checks.
    dev: true,
    format: 'cjs',
  })

  return {
    code: result.js.code,
    map: result.js.map,
  }
}

exports.process = process
