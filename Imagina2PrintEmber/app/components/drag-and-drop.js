import Component from '@ember/component';

export default Component.extend({

});

  window.Dropzone.options.myDropzone = {
    init: function() {
      var reader  = new FileReader();
      var canvas =document.getElementById("canvas");
      var imagen = new Image();
      var ctx=canvas.getContext("2d");
      this.on("addedfile", function(file) {
        if (file) {
          reader.readAsDataURL(file);
        }
        reader.addEventListener("load", function () {
          imagen.src = reader.result;
          imagen.onload = function() {
          //ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
          };
        }, false);
      });
        this.on("removedfile", function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }
  };
