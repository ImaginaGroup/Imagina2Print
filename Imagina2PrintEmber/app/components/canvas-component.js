import Component from '@ember/component';

var imagen = new Image();


export default Component.extend({
  actions: {

    cambiarSinColor() {
      var canvas =document.getElementById("canvas");
      var ctx=canvas.getContext("2d");
      imagen = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      console.log(imgPixels);
      for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
          var i = (y * 4) * imgPixels.width + x * 4;
          var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
          imgPixels.data[i] = avg;
          imgPixels.data[i + 1] = avg;
          imgPixels.data[i + 2] = avg;
        }
      }
      ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    },
    cambiarAColor() {
      var canvas =document.getElementById("canvas");
      var ctx=canvas.getContext("2d");
      ctx.putImageData(imagen, 0, 0, 0, 0, canvas.width, canvas.height);
    }
  },
});
