import Ember from 'ember';
import moment from 'moment';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  center: computed.oneWay('date'),

  init() {
    this._super(...arguments);

    this.date = moment();
    this.minDatetime = this.date.clone().subtract(7, 'day');
    this.maxDatetime = this.date.clone().add(7, 'day');
  }
});
