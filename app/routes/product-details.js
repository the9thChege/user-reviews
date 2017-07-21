import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    saveReview(formInputs) {
      var newReview = this.store.createRecord('review', formInputs);
      var product = formInputs.product;
      product.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('product-details', formInputs.product);
    }
  }
});
