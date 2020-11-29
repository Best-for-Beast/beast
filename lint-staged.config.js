module.exports = {
  '*.{js,ts,svelte}': ['prettier --write', 'eslint --cache --fix'],
  '*.css': ['prettier --write'],
  '*.svelte': ['svelte-check'],
  // 'docs/adr/*.md': () => [
  //   'adr-log -d docs/adr -i',
  //   'git add docs/adr/index.md',
  // ],
  'docs/adr/*.md': () => [
    'adr-log -d docs/adr -i',
    'git add docs/adr/index.md',
  ],
}
