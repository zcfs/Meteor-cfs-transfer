Package.describe({
  name: 'cfs:transfer',
  version: '0.0.16',
  summary: 'CollectionFS, client transfer queue for uploads',
  git: 'https://github.com/CollectionFS/Meteor-cfs-transfer.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'deps',
    'underscore',
    'check',
    'livedata',
    'mongo-livedata',
    'ejson',
    'cfs:power-queue@0.9.11',
    'cfs:reactive-list@0.0.9'
  ]);

  api.use(['cfs:base-package@0.0.27']);

  api.addFiles([
    'transfer.js'
  ], 'client');

});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.add_files('tests/client-tests.js', 'client');
// });
