Package.describe({
  name: 'cfs:transfer',
  version: '0.0.1',
  summary: 'CollectionFS, client transfer queue for uploads'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use([
    'deps',
    'underscore',
    'check',
    'livedata',
    'mongo-livedata',
    'ejson',
    'cfs:power-queue@0.0.1',
    'cfs:reactive-list@0.0.0'
  ]);

  api.use(['cfs:base-package@0.0.0']);

  api.add_files([
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
