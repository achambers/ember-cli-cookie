# ember-cli-cookie

> Wrap $.cookie in Ember goodness

## Motivation

To try and remove external dependencies from my [Ember CLI][1] apps with a Promise aware object wrapper.

## Synopsis

This addon is designed to help pushing the external dependencies of cookies as far from my [Ember CLI][1] app as possible.
By injecting this object where cookie access is needed, my Ember code can just deal with an Ember object.  This also
means that I can inject mock objects in during tests to simulate setting and getting cookies.

## Installation

From within your [Ember CLI][1] application, run:

```shell
npm install --save-dev ember-cli-cookie
```

## Usage

In an initializer, inject the `cookie` object where needed:

```javascript
export default {
  name: 'test-initializer',
  after: ['cookie'],
  
  initialize: function(container, app) {
    app.inject('controller', 'cookie', 'cookie:main');
  }
}
```

### \#set(key, value)

Use this function to set a cookie, eg:

```javascript
// /controllers/test.js

export default Ember.Controller.extend({
  actions: {
    testAction: function() {
      var self   = this;
      var cookie = this.get('cookie');
      
      cookie.set('my-key', 'my-value')
        .then(function() {
          self.transitionToRoute('success');
        });
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## Maintainers

- Aaron Chambers (achambers@gmail.com)

[1]: http://ember-cli.com "Ember CLI"
