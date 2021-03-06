import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | FormField::Label', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders content, attributes and args', async function (assert) {
    await render(
      hbs`<FormField::Label @for="some-input-id" class="something-else">My Label</FormField::Label>`
    );
    assert
      .dom('[data-test-id="form-field-label"]')
      .hasAttribute('for', 'some-input-id');

    assert.dom('[data-test-id="form-field-label"]').hasClass('form__label');
    assert.dom('[data-test-id="form-field-label"]').hasClass('something-else');
    assert
      .dom('[data-test-id="form-field-label"]')
      .hasTextContaining('My Label');
  });

  test('it adds size classes for @isSmall and @isLarge', async function (assert) {
    this.set('isSmall', true);
    this.set('isLarge', false);

    await render(
      hbs`<FormField::Label data-test-input @isSmall={{this.isSmall}} @isLarge={{this.isLarge}} />`
    );

    assert.dom('[data-test-input]').hasClass('form__label--sm');
    this.set('isSmall', false);
    this.set('isLarge', true);
    assert.dom('[data-test-input]').hasClass('form__label--lg');

    // should only add one size class
    this.set('isSmall', true);
    this.set('isLarge', true);
    assert.dom('[data-test-input]').hasClass('form__label--sm');
    assert.dom('[data-test-input]').doesNotHaveClass('form__label--lg');
  });
});
