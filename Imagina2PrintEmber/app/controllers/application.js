import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  opciones1: service('opciones'),
  store: Ember.inject.service(),
  ajax: Ember.inject.service(),
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
    save(){
      console.log('he entrado en la función');
      var colorForm=document.getElementById('color').value;
      var tamanoForm=document.getElementById('tamano').value;
      var configuracionForm=document.getElementById('configuracion').value;
      var margenesForm=document.getElementById('margenes').value;
      var options={
        color: colorForm,
        tamano: tamanoForm,
        configuracion: configuracionForm,
        margenes: margenesForm
      }


      this.get('ajax').request('/options', {
        method: 'POST',
        data: {
          options: options
        }
      });


      // simulación imprimir

      HTMLElement.prototype.hasClass = function ( className ) {
        var rgx = new RegExp('(\\s|^)' + className + '(\\s|$)');
        var match = this.className.match( rgx );
        return ( match != null );
      }
      HTMLElement.prototype.removeClass = function( className ) {
        if (this.hasClass(className)) {
          var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
          this.className = this.className.replace(reg,' ');
        }
      };
      HTMLElement.prototype.addClass = function( className ) {
        if (!this.hasClass(className))
        this.className += " " + className;
      };
      document.getElementsByClassName('progress')[0].style.display="block"
      document.getElementsByClassName('progress-bar')[0].style.width=0+"%";
      document.getElementsByClassName('progress-bar')[0].innerText="";
      document.getElementsByClassName('progress-bar')[0].style.backgroundColor="#337ab7";
      document.getElementsByClassName('progress-bar')[0].addClass("active");
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
          document.getElementsByClassName('progress-bar')[0].style.width=20+"%";
          document.getElementsByClassName('progress-bar')[0].innerText="Imprimiendo";
          valor=2;
          break;
          case 2: console.log("Imprimiendo... 2");
          document.getElementsByClassName('progress-bar')[0].style.width=40+"%";
          valor=3;
          break;
          case 3: console.log("Imprimiendo... 3");
          document.getElementsByClassName('progress-bar')[0].style.width=60+"%";
          valor=4
          break;
          case 4: console.log("Imprimiendo... 3");
          document.getElementsByClassName('progress-bar')[0].style.width=80+"%";
          valor=5
          break;
          case 5: console.log("Imprimiendo... 3");
          document.getElementsByClassName('progress-bar')[0].style.width=100+"%";
          pararImpresion();
          break;

        }

      }, 2000);

      function pararImpresion() {
        imprimiendo=false
        clearInterval(myVar);
        clearInterval(myVar2);
        setTimeout(function () {
          document.getElementsByClassName('progress-bar')[0].style.backgroundColor="#6ae24f";
          document.getElementsByClassName('progress-bar')[0].innerText="Documento impreso"

          document.getElementsByClassName('progress-bar')[0].removeClass('active')
        },1000)
      }



      //fin simulación imprimir





    }
  }
});
