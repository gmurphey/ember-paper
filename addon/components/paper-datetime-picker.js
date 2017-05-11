import Ember from 'ember';
import layout from '../templates/components/paper-datetime-picker';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  layout,

  datetime: null,
  calendarComponent: 'paper-calendar',
  clockComponent: 'paper-time',

  actions: {
    selectDate({ moment }) {
      let datetime = get(this, 'datetime').clone();

      datetime.set({ month: moment.month(), date: moment.date(), year: moment.year() });

      get(this, 'onChange')(datetime);
    }
  }
});
