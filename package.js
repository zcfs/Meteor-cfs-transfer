Package.describe({
  name: 'cfs-transfer',
  summary: 'CollectionFS, client transfer queue for uploads'
});

Package.on_use(function(api) {
  api.use(['deps', 'underscore', 'check', 'livedata', 'mongo-livedata',
    'ejson', 'power-queue', 'reactive-list']);

  api.use(['cfs-base-package']);

  api.add_files([
    'transfer.js'
  ], 'client');

});

Package.on_test(function (api) {
  api.use('collectionfs');
  api.use('test-helpers', 'server');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('tests/client-tests.js', 'client');
});
