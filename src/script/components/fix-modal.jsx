// @flow
'use strict';
const React = require('react'); // eslint-disable-line no-unused-vars
const { Component } = require('flumpt');
const Preview = require('./preview.jsx');
const ShareButton = require('./share-button.jsx');

class FixModal extends Component {
  props: {
    isShow:    boolean,
    fixImgSrc: string,
  };
  onClickCancel: () => void;

  constructor() {
    super();
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  onClickCancel(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();

    this.dispatch('hide:fixModal');
  }

  render() {
    const {
      isShow,
      fixImgSrc,
    } = this.props;

    return (
      <div className={`
        fix-modal
        ${isShow ? 'is-show' : ''}
      `}>
        <Preview fixImgSrc={fixImgSrc} />
        <p className="memo">
          ※画像を長押し or 右クリックメニューから保存できます<br/>
          ※ツイートする場合の画像はご自身で添付してください
        </p>
        <div className="button-wrap">
          <ShareButton />
          <a className="button button--negative ft-ika" onClick={this.onClickCancel}>てなおしする</a>
        </div>
      </div>
    );
  }
};

module.exports = FixModal;
