import PowerCalendar from 'ember-power-calendar/components/power-calendar';

export default PowerCalendar.extend({
  classNames: ['paper-calendar'],

  navComponent: 'paper-calendar-nav',
  daysComponent: 'paper-calendar-days'
});
