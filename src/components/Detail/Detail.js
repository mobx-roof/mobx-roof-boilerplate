import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import style from './Detail.less';
import classnames from 'classnames';
import fa from 'font-awesome/css/font-awesome.css';
import gm from 'github-markdown-css';

class Detail extends Component {
  componentWillMount() {
    const { repo } = this.props;
    if (repo) {
      this.props.actions.readmeFetch(repo);
    }
  }
  componentDidUpdate() {
    // Force reflow for electron
    const el = findDOMNode(this);
    el.style.display = 'none';
    el.offsetHeight; // eslint-disable-line
    el.style.display = '';
  }
  handleUnstar() {
    this.props.actions.starsUnstar(this.props.repo);
  }
  handleInputClick(e) {
    e.target.select();
  }
  render() {
    const { readmeLoading, unstarLoading, repo, readme } = this.props;
    if (!repo) {
      return <div />;
    }

    return (<div className={style.normal}>
      <div className={style.topbar}>
        <div className={style.actions}>
          {
            unstarLoading
              ? <button disabled><i className={classnames(fa['fa'], fa['fa-spinner'])} /></button>
              : <button onClick={this.handleUnstar.bind(this)}>
                  <i className={classnames(fa['fa'], fa['fa-star-o'])} /> Unstar
                </button>
          }
        </div>
        <div className={style.clone}>
          Clone: <input textselect value={`git@github.com:${repo}.git`} readOnly onClick={this.handleInputClick} />
        </div>
      </div>
      <div className={style.readme}>
        {
          readmeLoading
          ? <div className={style.readmeLoading}>Loading</div>
          : ''
        }
        {
          readme ? <div className={gm['markdown-body']} dangerouslySetInnerHTML={{__html: readme}} /> : ''
        }
      </div>
    </div>);
  }
}

export default Detail;
