import React, { Component } from 'react';
import { context } from 'mobx-roof';
import style from './App.less';
import middleware from '../middlewares';
import relation from '../relations';

// components
import Login from './Login/Login';
import Header from './Header/Header';
import Stars from './Stars/Stars';
import Sidebar from './Sidebar/Sidebar';

// models
import UserModel from '../models/User';
import StarsModel from '../models/Stars';

@context({ user: UserModel, stars: StarsModel }, { middleware, relation })
export default class App extends Component {
  render() {
    const { user } = this.props;
    if (!user.isLogin) {
      return <Login />;
    }
    return (<div className={style.normal}>
      <Header />
      <div className={style.mainSection}>
        <Sidebar />
        <Stars />
      </div>
    </div>);
  }
}
