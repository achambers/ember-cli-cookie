import Em from 'ember';

export default Em.Object.extend({
  setCookie: function(key, value, options) {
    return new Em.RSVP.Promise(function(resolve, reject) {
      try {
        Em.$.cookie(key, value, options);
        Em.run(null, resolve);
      } catch(e) {
        Em.run(null, reject, e);
      }
    });
  },

  getCookie: function(key) {
    return Em.$.cookie(key);
  },

  removeCookie: function(key, options) {
    return Em.$.removeCookie(key, options);
  }
});
