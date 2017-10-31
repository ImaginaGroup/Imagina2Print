"use strict";



define('imagina2-print/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTAdapter.extend({});
});
define('imagina2-print/app', ['exports', 'imagina2-print/resolver', 'ember-load-initializers', 'imagina2-print/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define("imagina2-print/components/canvas-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;


  var imagen = new Image();

  exports.default = Component.extend({
    actions: {
      cambiarSinColor: function cambiarSinColor() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        imagen = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgPixels);
        for (var y = 0; y < imgPixels.height; y++) {
          for (var x = 0; x < imgPixels.width; x++) {
            var i = y * 4 * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
          }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
      },
      cambiarAColor: function cambiarAColor() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.putImageData(imagen, 0, 0, 0, 0, canvas.width, canvas.height);
      }
    }
  });
});
define('imagina2-print/components/default-message', ['exports', 'ui-dropzone/components/default-message'], function (exports, _defaultMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultMessage.default;
    }
  });
});
define('imagina2-print/components/default-template', ['exports', 'ui-dropzone/components/default-template'], function (exports, _defaultTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultTemplate.default;
    }
  });
});
define("imagina2-print/components/drag-and-drop", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});


  Dropzone.options.myDropzone = {
    init: function init() {
      var reader = new FileReader();
      var canvas = document.getElementById("canvas");
      var imagen = new Image();
      var ctx = canvas.getContext("2d");
      this.on("addedfile", function (file) {
        if (file) {
          reader.readAsDataURL(file);
        }
        reader.addEventListener("load", function () {
          imagen.src = reader.result;
          imagen.onload = function () {
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
          };
        }, false);
      });
      this.on("removedfile", function (file) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  };
});
define('imagina2-print/components/drop-zone', ['exports', 'ui-dropzone/components/drop-zone'], function (exports, _dropZone) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dropZone.default;
    }
  });
});
define('imagina2-print/components/ember-combobox-input', ['exports', 'ember-cli-combobox/components/ember-combobox-input'], function (exports, _emberComboboxInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComboboxInput.default;
});
define('imagina2-print/components/ember-combobox-list', ['exports', 'ember-cli-combobox/components/ember-combobox-list'], function (exports, _emberComboboxList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComboboxList.default;
});
define('imagina2-print/components/ember-combobox-option', ['exports', 'ember-cli-combobox/components/ember-combobox-option'], function (exports, _emberComboboxOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComboboxOption.default;
});
define('imagina2-print/components/ember-combobox-toggle', ['exports', 'ember-cli-combobox/components/ember-combobox-toggle'], function (exports, _emberComboboxToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberComboboxToggle.default;
});
define('imagina2-print/components/ember-combobox', ['exports', 'ember-cli-combobox/components/ember-combobox'], function (exports, _emberCombobox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCombobox.default;
});
define('imagina2-print/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('imagina2-print/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('imagina2-print/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('imagina2-print/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('imagina2-print/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('imagina2-print/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('imagina2-print/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('imagina2-print/components/file-too-big', ['exports', 'ui-dropzone/components/file-too-big'], function (exports, _fileTooBig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileTooBig.default;
    }
  });
});
define('imagina2-print/components/invalid-file-type', ['exports', 'ui-dropzone/components/invalid-file-type'], function (exports, _invalidFileType) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invalidFileType.default;
    }
  });
});
define('imagina2-print/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
define('imagina2-print/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('imagina2-print/components/preview-template', ['exports', 'ui-dropzone/components/preview-template'], function (exports, _previewTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previewTemplate.default;
    }
  });
});
define('imagina2-print/components/print-formulary', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var service = Ember.inject.service;
  exports.default = Component.extend({
    opciones1: service('opciones'),
    store: Ember.inject.service(),
    isShowingModal: false,
    respuesta: [],
    actions: {
      hacerPeticion: function hacerPeticion() {
        var resultado = this.get('opciones1').items;
        this.set('respuesta', resultado);
        this.send('showModalDialog');
      },
      showModalDialog: function showModalDialog() {
        this.set('isShowingModal', true);
      },
      closeModalDialog: function closeModalDialog() {
        this.set('isShowingModal', false);
      },
      print: function print() {
        this.send('guardarEstado');
        this.send('comprobarDisponibilidad');
      },
      guardarEstado: function guardarEstado() {},
      comprobarDisponibilidad: function comprobarDisponibilidad() {
        var valor = 1;
        var imprimiendo = false;
        var myVar2 = setInterval(function () {
          if (imprimiendo == true) {
            console.log("ocupado");
          }
          if (imprimiendo == false) {
            console.log("Listo para imprimir");
          }
        }, 3000);
        var myVar = setInterval(function () {
          imprimiendo = true;

          switch (valor) {
            case 1:
              console.log("Imprimiendo... 1");

              valor = 2;
              break;
            case 2:
              console.log("Imprimiendo... 2");

              valor = 3;
              break;
            case 3:
              console.log("Imprimiendo... 3");

              pararImpresion();
              break;

          }
        }, 2000);

        function pararImpresion() {
          imprimiendo = false;
          clearInterval(myVar);
        }
      }
    }
  });
});
define('imagina2-print/components/tether-dialog', ['exports', 'ember-modal-dialog/components/deprecated-tether-dialog'], function (exports, _deprecatedTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deprecatedTetherDialog.default;
    }
  });
});
define('imagina2-print/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('imagina2-print/helpers/app-version', ['exports', 'imagina2-print/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('imagina2-print/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('imagina2-print/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('imagina2-print/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('imagina2-print/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('imagina2-print/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'imagina2-print/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('imagina2-print/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('imagina2-print/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('imagina2-print/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('imagina2-print/initializers/export-application-global', ['exports', 'imagina2-print/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('imagina2-print/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('imagina2-print/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('imagina2-print/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("imagina2-print/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('imagina2-print/models/option', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    color: _emberData.default.attr('string'),
    tamano: _emberData.default.attr('string'),
    configuracion: _emberData.default.attr('string'),
    margenes: _emberData.default.attr('string')
  });
});
define('imagina2-print/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('imagina2-print/router', ['exports', 'imagina2-print/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('options');
  });

  exports.default = Router;
});
define('imagina2-print/routes/options', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return this.get('store').findAll('option');
    }
  });
});
define('imagina2-print/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({
    primaryKey: '_id',
    serializeId: function serializeId(id) {
      return id.toString();
    }
  });
});
define('imagina2-print/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('imagina2-print/services/modal-dialog', ['exports', 'imagina2-print/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed,
      Service = Ember.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define('imagina2-print/services/opciones', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service;
  exports.default = Service.extend({
    items: {
      color: ['blanco y negro', 'color'],
      tamano: ['A4', 'A3'],
      configuracion: ['doble cara ', 'una cara'],
      margenes: ['predeterminado', 'ninguno']
    }
  });
});
define("imagina2-print/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zbkqTDdK", "block": "{\"symbols\":[],\"statements\":[[2,\" Latest compiled and minified CSS \"],[0,\"\\n\"],[6,\"link\"],[9,\"rel\",\"stylesheet\"],[9,\"href\",\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\"],[9,\"integrity\",\"sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb\"],[9,\"crossorigin\",\"anonymous\"],[7],[8],[0,\"\\n\"],[6,\"meta\"],[9,\"name\",\"viewport\"],[9,\"content\",\"width=device-width, initial-scale=1\"],[7],[8],[0,\"\\n\"],[6,\"script\"],[9,\"src\",\"https://code.jquery.com/jquery-3.2.1.slim.min.js\"],[9,\"integrity\",\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"],[9,\"crossorigin\",\"anonymous\"],[7],[8],[0,\"\\n\"],[6,\"script\"],[9,\"src\",\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js\"],[9,\"integrity\",\"sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh\"],[9,\"crossorigin\",\"anonymous\"],[7],[8],[0,\"\\n\"],[6,\"script\"],[9,\"src\",\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js\"],[9,\"integrity\",\"sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ\"],[9,\"crossorigin\",\"anonymous\"],[7],[8],[0,\"\\n\\n\"],[1,[18,\"componente-nuevo\"],false],[0,\"\\n\\n\"],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/application.hbs" } });
});
define("imagina2-print/templates/components/canvas-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "trdg+wgB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n\"],[6,\"canvas\"],[9,\"id\",\"canvas\"],[9,\"width\",\"300\"],[9,\"height\",\"300\"],[7],[0,\"\\n    Sorry, your browser doesn't support the <canvas> element.\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-info btn-lg\"],[3,\"action\",[[19,0,[]],\"cambiarSinColor\"]],[7],[0,\"Blanco y negro\"],[8],[0,\"\\n\"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-info btn-lg\"],[3,\"action\",[[19,0,[]],\"cambiarAColor\"]],[7],[0,\"Color\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/components/canvas-component.hbs" } });
});
define("imagina2-print/templates/components/componente-nuevo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+kOitXDc", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[6,\"nav\"],[7],[0,\"\\n  \"],[6,\"h1\"],[9,\"id\",\"title\"],[7],[0,\"Imagina2Print\"],[8],[0,\"\\n  \"],[1,[18,\"drag-and-drop\"],false],[0,\"\\n  \"],[1,[18,\"print-formulary\"],false],[0,\"\\n  \"],[1,[18,\"canvas-component\"],false],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/components/componente-nuevo.hbs" } });
});
define("imagina2-print/templates/components/drag-and-drop", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6EQyIuDm", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[6,\"div\"],[9,\"id\",\"drag-and-drop\"],[7],[0,\"\\n  \"],[1,[25,\"drop-zone\",null,[[\"id\",\"url\",\"addRemoveLinks\"],[\"myDropzone\",\"http://localhost:4200\",true]]],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/components/drag-and-drop.hbs" } });
});
define("imagina2-print/templates/components/ember-combobox-option", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l1AGj0xk", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"optionLabel\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/components/ember-combobox-option.hbs" } });
});
define("imagina2-print/templates/components/ember-combobox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8AT8YJe7", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-combobox-input\",null,[[\"disabled\",\"value\",\"aria-label\",\"placeholder\"],[[20,[\"disabled\"]],[20,[\"inputValue\"]],[20,[\"placeholder\"]],[20,[\"placeholder\"]]]]],false],[0,\"\\n\\n\"],[4,\"ember-combobox-toggle\",null,[[\"disabled\"],[[20,[\"disabled\"]]]],{\"statements\":[[0,\"▾\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"ember-combobox-list\",null,null,{\"statements\":[[4,\"each\",[[20,[\"item\"]],[20,[\"in\"]],[20,[\"dataSource\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"ember-combobox-option\",null,[[\"item\",\"optionValuePath\",\"optionLabelPath\"],[[20,[\"item\"]],[20,[\"optionValuePath\"]],[20,[\"optionLabelPath\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/components/ember-combobox.hbs" } });
});
define("imagina2-print/templates/components/print-formulary", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q+WAgCce", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n  \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-info btn-lg\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#myModal\"],[3,\"action\",[[19,0,[]],\"hacerPeticion\"]],[7],[0,\"Imprimir\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"id\",\"myModal\"],[9,\"class\",\"modal fade\"],[9,\"role\",\"dialog\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[0,\"Imprimir\"],[8],[0,\"\\n            \"],[6,\"form\"],[9,\"class\",\"form-horizontal\"],[9,\"action\",\"/action_page.php\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"label\"],[9,\"class\",\"control-label col-sm-2\"],[7],[0,\"Color:\"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n                  \"],[6,\"select\"],[9,\"class\",\"selectpicker\"],[7],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"color\",\"1\"]],false],[8],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"color\",\"0\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"label\"],[9,\"class\",\"control-label col-sm-2\"],[7],[0,\"Tamaño:\"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n                  \"],[6,\"select\"],[9,\"class\",\"selectpicker\"],[7],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"tamano\",\"0\"]],false],[8],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"tamano\",\"1\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"label\"],[9,\"class\",\"control-label col-sm-2\"],[7],[0,\"Configuración:\"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n                  \"],[6,\"select\"],[9,\"class\",\"selectpicker\"],[7],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"configuracion\",\"0\"]],false],[8],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"color\",\"1\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"label\"],[9,\"class\",\"control-label col-sm-2\"],[7],[0,\"Márgenes:\"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n                  \"],[6,\"select\"],[9,\"class\",\"selectpicker\"],[7],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"margenes\",\"0\"]],false],[8],[0,\"\\n                    \"],[6,\"option\"],[7],[1,[20,[\"respuesta\",\"margenes\",\"1\"]],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-offset-2 col-sm-10\"],[7],[0,\"\\n                  \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"print\"]],[7],[0,\"Imprimir\"],[8],[0,\"\\n                \"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/components/print-formulary.hbs" } });
});
define("imagina2-print/templates/options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uCemZshL", "block": "{\"symbols\":[\"item\"],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\nOpciones!\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"Color: \"],[1,[19,1,[\"color\"]],false],[6,\"br\"],[7],[8],[0,\"\\nTamaño: \"],[1,[19,1,[\"tamano\"]],false],[6,\"br\"],[7],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "imagina2-print/templates/options.hbs" } });
});


define('imagina2-print/config/environment', [], function() {
  var prefix = 'imagina2-print';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("imagina2-print/app")["default"].create({"name":"imagina2-print","version":"0.0.0+6e294183"});
}
//# sourceMappingURL=imagina2-print.map
