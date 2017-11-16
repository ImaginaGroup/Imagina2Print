import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Ember from 'ember';
export default Controller.extend({
  opciones: service('opciones'),
  ajax: Ember.inject.service(),
  isShowingModal: false,
  respuesta: [],
  actions: {
    hacerPeticion(){
      var resultado =this.get('opciones').items;
      this.set('respuesta', resultado);
    },

    save(){
      //GUARDAR DATOS

      //obtenemos los valores del formulario

      var colorForm=document.getElementById('color').value;
      var tamanoForm=document.getElementById('tamano').value;
      var configuracionForm=document.getElementById('configuracion').value;
      var margenesForm=document.getElementById('margenes').value;
      //introducimos los valores del formulario en un objeto JSON opciones
      var options={
        color: colorForm,
        tamano: tamanoForm,
        configuracion: configuracionForm,
        margenes: margenesForm
      }

      //inyectando previamente el plugin ember-ajax
      /*mediante este plugin hacemos una petición post a /options
      pasando como parámetros opciones*/
      this.get('ajax').request('/options', {
        method: 'POST',
        data: {
          options: options
        }
      });

      //FIN GUARDAR DATOS

      // SIMULACIÓN IMPRIMIR

      /*modulo javascript para añadir una propiedad permita añadir
       y quitar clases a elementos con mas de una clase*/
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
      //fin modulo

      //motrar barra de impresión
      document.getElementsByClassName('progress')[0].style.display="block"
      //inicializar a 0 barra de impresión
      document.getElementsByClassName('progress-bar')[0].style.width=0+"%";
      //borrar texto de la barra de impresión
      document.getElementsByClassName('progress-bar')[0].innerText="";
      //cambiar a color cargando de la barra de impresión
      document.getElementsByClassName('progress-bar')[0].style.backgroundColor="#337ab7";
      //añadir ánimación de lineas de la barra de impresión
      document.getElementsByClassName('progress-bar')[0].addClass("active");

      //INICIO SIMULACIÓN

      //valor que definirá la división de los porcentajes de la barra
      var valor= 1;
      /*valor que define si esta imprimiendo o no (esta variable de momento no se
    utiliza por lo que aparecera un error en la consola avisando de esto)*/
      var imprimiendo=false;

      /*función que se llama cada 2 segundos para simular la impresión
       aumentado el porcentaje de la barra dependiendo del valor de la división*/
      var myVar= setInterval(function(){


        imprimiendo=true;

        switch (valor) {
          case 1:
          document.getElementsByClassName('progress-bar')[0].style.width=20+"%";
          document.getElementsByClassName('progress-bar')[0].innerText="Imprimiendo";
          valor=2;
          break;
          case 2:
          document.getElementsByClassName('progress-bar')[0].style.width=40+"%";
          valor=3;
          break;
          case 3:
          document.getElementsByClassName('progress-bar')[0].style.width=60+"%";
          valor=4
          break;
          case 4:
          document.getElementsByClassName('progress-bar')[0].style.width=80+"%";
          valor=5
          break;
          case 5:
          document.getElementsByClassName('progress-bar')[0].style.width=100+"%";
          pararImpresion();
          break;
        }
      }, 2000);

      /*función que finaliza la impresión, para la simulación y
       después de un segundo cambia el estilo de la barra*/
      function pararImpresion() {
        imprimiendo=false
        clearInterval(myVar);

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
