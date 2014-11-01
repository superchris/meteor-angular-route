Package.describe({
  name: 'superchris:angular-route',
  summary: 'A simple client side routing framework for angular',
  version: '1.3.2',
  git: 'https://github.com/superchris/meteor-angular-route.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use("superchris:angular@>=1.3.2", "client");
  api.addFiles('bower-angular-route/angular-route.js');
});
