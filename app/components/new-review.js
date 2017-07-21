import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addReview: false,
  actions: {
    toggleDetail() {
      this.toggleProperty('addReview');
    },
    saveReview() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var formInputs = {
        rating: this.get('rating.value'),
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        date: momentDate,
        product: this.get('product')
      };
      this.set('addReview', false);
      this.set('rating', "");
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveReview', formInputs);
    }
  }
});
