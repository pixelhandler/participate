import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Listing initiatives', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('Successfully', function(){
    visit('/initiatives').then(function() {
      expect(find('.initiative').first().text()).to.equal("Public health clinic");
      expect(find('.initiative').last().text()).to.equal("Public library upgrade");
    });
  });
});