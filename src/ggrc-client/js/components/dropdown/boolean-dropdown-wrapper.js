/*
    Copyright (C) 2018 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

export default can.Component.extend({
  tag: 'boolean-dropdown-wrapper',
  viewModel: {
    selected: null,
    selectedInternal: null,
    onChange() {
      let value = this.convertToBoolOrNull(this.attr('selectedInternal'));
      this.attr('selected', value);
    },
    convertToBoolOrNull(value) {
      if (typeof value === 'boolean') {
        return value;
      }
      if (!value) {
        return null;
      }

      return value !== 'false';
    },
  },
  init() {
    let value = this.viewModel.attr('selected');
    this.viewModel.attr('selectedInternal', value);
  },
});
