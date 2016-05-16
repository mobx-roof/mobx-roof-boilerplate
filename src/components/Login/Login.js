import React, { Component } from 'react';
import style from './Login.less';
import { observer } from 'mobx-roof';

@observer('user')
export default class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();

    this.props.user.login(username, password);
  }
  render() {
    const loginState = this.props.user.getActionState('login');
    const { error: loginError, loading: loginLoading } = loginState;
    return (<div className={style.normal}>
      <div className={style.box}>
        <h2 className={style.title}>Login to GithubStars</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {
            loginError ? <div className={style.loginError}>{loginError.message}</div> : ''
          }
          <div className={style.formItem}>
            <label htmlFor="username">Github Username:</label>
            <input ref="username" id="username" />
          </div>
          <div className={style.formItem}>
            <label htmlFor="password">Github Password:</label>
            <input ref="password" id="password" type="password" />
          </div>
          <div className={style.formItem}>
            <label />
            <input type="submit" value="Submit" disabled={loginLoading}/>
            {
              loginLoading ? '  loading...' : ''
            }
          </div>
        </form>
      </div>
    </div>);
  }
}
