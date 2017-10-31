import Service from '@ember/service';

export default Service.extend({
  items:{
    color: ['blanco y negro','color'],
    tamano: ['A4','A3'],
    configuracion: ['doble cara ','una cara'],
    margenes: ['predeterminado','ninguno']
  }
});
