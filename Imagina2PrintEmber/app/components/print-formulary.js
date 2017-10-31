import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
  opciones1: service('opciones'),
  store: Ember.inject.service(),
  isShowingModal: false,
  respuesta: [],
  actions: {
    hacerPeticion(){
      var resultado =this.get('opciones1').items;
      this.set('respuesta', resultado);
      this.send('showModalDialog');
    },
    showModalDialog() {
      this.set('isShowingModal', true)
    },
    closeModalDialog() {
      this.set('isShowingModal', false)
    },
    print() {
      this.send('guardarEstado');
    },
    guardarEstado() {
      var store = this.get('store');
      console.log(store);
      var opcion = store.findAll('option');
      console.log(opcion);
      /*store.createRecord('post', {
        color: 'Rails is Omakase',
        tamano: 'Lorem ipsum',
        configuracion: 'asf',
        margenes: 'asdf'
      }).save();*/
    }
  }
});
