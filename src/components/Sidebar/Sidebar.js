import React, { Component } from 'react';
import style from './Sidebar.less';
import classnames from 'classnames';
import fa from 'font-awesome/css/font-awesome.css';
import { observer } from 'mobx-roof';

@observer(['user', 'stars'])
class Login extends Component {
  render() {
    const { stars, user } = this.props;
    return (<div className={style.normal}>
      <div className={style.photo}>
        <img src={`${user.userInfo['avatar_url']}&s=160`} />
      </div>
      <div className={style.menu}>
        <ul>
          <li className={style.menuActive}>
            <i className={classnames(fa['fa'], fa['fa-star'])} /> My Stars
            <b>{stars.data.length}</b>
          </li>
          <li><i className={classnames(fa['fa'], fa['fa-rss'])} /> Feeds [WIP]</li>
          <li><i className={classnames(fa['fa'], fa['fa-thumbs-up'])} /> Trends [WIP]</li>
        </ul>
      </div>
    </div>);
  }
}

export default Login;
