import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontEndENV.locationType
});

Router.map(function() {
  this.resource('contacts', function() {
    this.resource('contact', { path: '/:contact_id' });
    this.route('new');
  });
  // this.route('contacts/new');
});

export default Router;
