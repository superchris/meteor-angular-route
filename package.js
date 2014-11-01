Package.describe({
  name: 'superchris:angular-router',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('superchris:angular-router.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('superchris:angular-router');
  api.addFiles('superchris:angular-router-tests.js');
});
