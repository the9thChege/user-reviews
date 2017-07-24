import Ember from 'ember';
import moment from 'moment';

//this.5Star.click(function() {
//  this.4Star.hide();
//  this.3Star.hide();
//  this.2Star.hide();
//  this.1Star.hide();
//  this.rating = 5;
//  return this.rating;
//});

export default Ember.Component.extend({
  actions: {
    sortedRating5: function(){
      this.$("#fourStar").hide();
      this.$("#threeStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 5);
    },
    sortedRating4: function(){
      this.$("#fiveStar").hide();
      this.$("#threeStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 4);
    },
    sortedRating3: function(){
      this.$("#fourStar").hide();
      this.$("#fiveStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 3);
    },
    sortedRating2: function(){
      this.$("#fourStar").hide();
      this.$("#threeStar").hide();
      this.$("#fiveStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 2);
    },
    sortedRating1: function(){
      this.$("#fourStar").hide();
      this.$("#threeStar").hide();
      this.$("#twoStar").hide();
      this.$("#oneStar").hide();
      this.set('rating', 1);
    },
    toggleDetail() {
      this.toggleProperty('addReview');
    },
    saveReview() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDate = moment(date).format('MM/DD/YYYY');
      var formInputs = {
        rating: this.get('rating'),
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        date: momentDate,
        product: this.get('product'),
      };
      this.toggleProperty('addReview');
      this.set('rating', "");
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveReview', formInputs);
    }
  }
});
