import DS from 'ember-data';

export default DS.Model.extend({
  color: DS.attr('string'),
  tamano: DS.attr('string'),
  configuracion: DS.attr('string'),
  margenes: DS.attr('string')
});
