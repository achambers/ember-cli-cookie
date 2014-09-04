'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLICookie(project) {
  this.project = project;
  this.name = 'Ember CLI Cookie';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLICookie.prototype.treeFor = function(name) {
  var treePath =  path.join('node_modules', 'ember-cli-cookie', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLICookie.prototype.included = function(app) {
  this.app = app;
  this.app.import('vendor/jquery-cookie/jquery.cookie.js');
};

module.exports = EmberCLICookie;
