import React, { Component } from 'react';
import style from './Header.less';
import classnames from 'classnames';
import fa from 'font-awesome/css/font-awesome.css';
import { observer } from 'mobx-roof';

@observer(['stars', 'user'])
class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: '',
    };
  }
  handleInputChange(e) {
    this.setState({
      query: e.target.value,
    });
    this.props.actions.headerSearch(e.target.value);
  }
  starsUpdate() {
    this.props.stars.sync(this.props.user.userInfo, this.props.user.username, this.props.user.password);
  }
  render() {
    const { loading: asyncLoading, error: asyncError } = this.props.stars.getActionState('sync');
    return (<div className={style.normal}>
      <div className={style.brand}>
        <h1>GithubStars</h1>
        <div>
          {
            asyncLoading
              ? <i className={classnames(fa['fa'], fa['fa-refresh'], style.spin)} />
              : <i className={classnames(fa['fa'], fa['fa-refresh'])} onClick={::this.starsUpdate} />
          }
        </div>
      </div>
      <div className={style.search}>
        <input value={this.state.query} onChange={this.handleInputChange.bind(this)} placeholder="Search by keyword" />
        <i className={classnames(fa['fa'], fa['fa-search'])} />
      </div>
      <div className={style.syncLoading}>
        {asyncError ? `${asyncError.message}` : ''}
      </div>
    </div>);
  }
}

export default Header;
