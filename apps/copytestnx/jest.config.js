module.exports = {
  name: 'copytestnx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/copytestnx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
