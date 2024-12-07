module.exports = {
  '*.ts?(x)': () => 'tsc',
  '*.(ts|js)?(x)': (filenames) => `eslint ${filenames.join(' ')}`,
  '*.svg': (filenames) => `svgo ${filenames.join(' ')} --config svgo.config.js --pretty`,
}
