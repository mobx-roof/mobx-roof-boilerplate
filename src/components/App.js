import React, { Component } from 'react';
import { context } from 'mobx-roof';
import style from './App.less';
import relation from '../relations';
// load middlewares
import '../middlewares';

// components
import Login from './Login/Login';
import Header from './Header/Header';
import Stars from './Stars/Stars';
import Sidebar from './Sidebar/Sidebar';
import Detail from './Detail/Detail';

// models
import UserModel from '../models/User';
import StarsModel from '../models/Stars';
import ReadmeModel from '../models/Readme';

@context({ user: UserModel, stars: StarsModel, readme: ReadmeModel }, { relation })
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
        <Detail />
      </div>
    </div>);
  }
}
