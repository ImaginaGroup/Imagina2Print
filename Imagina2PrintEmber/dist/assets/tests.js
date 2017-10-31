'use strict';

define('imagina2-print/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/canvas-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/canvas-component.js should pass ESLint\n\n14:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/drag-and-drop.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/drag-and-drop.js should pass ESLint\n\n7:1 - \'Dropzone\' is not defined. (no-undef)\n25:39 - \'file\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/print-formulary.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/print-formulary.js should pass ESLint\n\n5:10 - \'Ember\' is not defined. (no-undef)\n30:11 - \'myVar2\' is assigned a value but never used. (no-unused-vars)\n32:11 - Unexpected console statement. (no-console)\n35:11 - Unexpected console statement. (no-console)\n42:20 - Unexpected console statement. (no-console)\n46:20 - Unexpected console statement. (no-console)\n50:20 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/option.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/option.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/options.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/options.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/opciones.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/opciones.js should pass ESLint\n\n');
  });
});
define('imagina2-print/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('imagina2-print/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'imagina2-print/tests/helpers/start-app', 'imagina2-print/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('imagina2-print/tests/helpers/resolver', ['exports', 'imagina2-print/resolver', 'imagina2-print/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('imagina2-print/tests/helpers/start-app', ['exports', 'imagina2-print/app', 'imagina2-print/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('imagina2-print/tests/integration/components/canvas-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('canvas-component', 'Integration | Component | canvas component', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Lyj9NZa8",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"canvas-component\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "u2+Yqf0e",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"canvas-component\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('imagina2-print/tests/integration/components/componente-nuevo-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('componente-nuevo', 'Integration | Component | componente nuevo', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ONhe7422",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"componente-nuevo\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ezA4HBLV",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"componente-nuevo\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('imagina2-print/tests/integration/components/drag-and-drop-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('drag-and-drop', 'Integration | Component | drag and drop', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "R3hlyVGu",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"drag-and-drop\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "9oWiBwcb",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"drag-and-drop\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('imagina2-print/tests/integration/components/print-formulary-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('print-formulary', 'Integration | Component | print formulary', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "PpxGlJC/",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"print-formulary\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "06uaSCrf",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"print-formulary\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('imagina2-print/tests/test-helper', ['imagina2-print/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('imagina2-print/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/canvas-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/canvas-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/componente-nuevo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/componente-nuevo-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/drag-and-drop-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/drag-and-drop-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/print-formulary-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/print-formulary-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/component-store-injector-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/component-store-injector-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/option-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/option-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/options-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/options-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/opciones-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/opciones-test.js should pass ESLint\n\n');
  });
});
define('imagina2-print/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('imagina2-print/tests/unit/initializers/component-store-injector-test', ['imagina2-print/initializers/component-store-injector', 'qunit', 'imagina2-print/tests/helpers/destroy-app'], function (_componentStoreInjector, _qunit, _destroyApp) {
  'use strict';

  var Application = Ember.Application;
  var run = Ember.run;


  (0, _qunit.module)('Unit | Initializer | component store injector', {
    beforeEach: function beforeEach() {
      var _this = this;

      run(function () {
        _this.application = Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _destroyApp.default)(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _componentStoreInjector.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('imagina2-print/tests/unit/models/option-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('option', 'Unit | Model | option', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('imagina2-print/tests/unit/routes/options-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:options', 'Unit | Route | options', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('imagina2-print/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('imagina2-print/tests/unit/services/opciones-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:opciones', 'Unit | Service | opciones', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('imagina2-print/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
