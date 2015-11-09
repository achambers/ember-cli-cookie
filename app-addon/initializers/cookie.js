import Cookie from '../lib/cookie';

export default {
  name: 'cookie',
  initialize: function() {
    var app = arguments[1] || arguments[0];
    app.register('cookie:main', Cookie);
  }
};
