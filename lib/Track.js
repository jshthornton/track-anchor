import _ from 'lodash';

export default class {
  constructor(callback) {
    this._callback = callback;

    this._track();
  }

  _bindFns() {
    _.bindAll(this, [
      '_onWindowHashChange'
    ]);
  }

  _bindEvents() {
    $(window).on('hashchange', this._onWindowHashChange);
  }

  cleanup() {

  }

  _track() {
    this._callback(window.location.hash);
  }

  // Events
  _onWindowHashChange() {
    this._track();
  }
};