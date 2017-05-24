import Ember from 'ember';
import layout from '../templates/components/paper-datetime';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  layout,

  calendarComponent: 'paper-date',
  clockComponent: 'paper-time',
  datetime: null,

  actions: {
    selectDate({ moment }) {
      let datetime = get(this, 'datetime').clone();

      datetime.set({ month: moment.month(), date: moment.date(), year: moment.year() });

      get(this, 'onChange')(datetime);
    }
  }
});
