import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('componente-nuevo', 'Integration | Component | componente nuevo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{componente-nuevo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#componente-nuevo}}
      template block text
    {{/componente-nuevo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
