import Ember from 'ember';
import layout from '../templates/components/paper-time';

const {
  get,
  computed,
  Component
} = Ember;

export default Component.extend({
  layout,

  datetime: null,

  hour: computed('datetime', function() {
    return get(this, 'datetime').hour();
  }),

  displayHour: computed('hour', function() {
    let hour = get(this, 'hour');
    let displayHour = hour % 12;

    displayHour = (displayHour > 0) ? displayHour : 12;

    return (displayHour < 10) ? `0${displayHour}` : displayHour;
  }),

  minute: computed('datetime', function() {
    return get(this, 'datetime').minute();
  }),

  displayMinute: computed('minute', function() {
    let minute = get(this, 'minute');

    return (minute < 10) ? `0${minute}` : minute;
  }),

  meridiem: computed('hour', function() {
    return (get(this, 'hour') < 12) ? 'AM' : 'PM';
  }),

  actions: {
    setHour(direction) {
      let hour = parseInt(get(this, 'hour'));
      let datetime = get(this, 'datetime').clone();

      datetime.hour(hour + direction);

      get(this, 'onChange')(datetime);
    },

    setMinute(direction) {
      let minute = get(this, 'minute');
      let datetime = get(this, 'datetime').clone();

      datetime.minute(minute + direction);

      get(this, 'onChange')(datetime);
    },

    cycleMeridiem() {
      let currentMeridiem = get(this, 'meridiem');
      let datetime = get(this, 'datetime').clone();
      let method = (currentMeridiem === 'AM') ? 'add' : 'subtract';

      datetime[method](12, 'hours');

      get(this, 'onChange')(datetime);
    }
  }
});
