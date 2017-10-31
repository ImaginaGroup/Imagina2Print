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
      this.send('comprobarDisponibilidad');
    },
    guardarEstado() {

    },
    comprobarDisponibilidad() {
      var valor= 1;
      var imprimiendo=false;
      var myVar2 = setInterval(function(){
        if (imprimiendo==true) {
          console.log("ocupado");
        }
        if (imprimiendo==false) {
          console.log("Listo para imprimir");
        }
      },3000);
      var myVar= setInterval(function(){
        imprimiendo=true;

         switch (valor) {
           case 1: console.log("Imprimiendo... 1");

            valor=2;
             break;
           case 2: console.log("Imprimiendo... 2");

            valor=3;
             break;
           case 3: console.log("Imprimiendo... 3");

            pararImpresion();
             break;

         }

      }, 2000);

      function pararImpresion() {
        imprimiendo=false
        clearInterval(myVar);
      }
    }
  }
});
