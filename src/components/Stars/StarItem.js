import React, { Component } from 'react';
import classnames from 'classnames';
import style from './StarItem.less';
import fa from 'font-awesome/css/font-awesome.css';
import { observer } from 'mobx-roof';

@observer('stars')
class StarItem extends Component {
  render() {
    const containerClass = classnames(style.normal, {
      [style.selected]: this.props.selected,
    });

    const { id, owner, name, html_url: htmlUrl, description, forks, watchers, language } = this.props.data;
    const repo = `${owner.login}/${name}`;
    return <div className={containerClass} onClick={this.props.stars.starsSelect.bind(this.props.stars, id, repo)}>
      <div className={style.avatar}>
        <img src={owner.avatar_url + '&s=60'} />
      </div>
      <div className={style.mainSection}>
        <div className={style.name}>{owner.login}<em>/</em>{name}</div>
        <div className={style.description}>{description}</div>
        <div className={style.meta}>
          <em><i className={classnames(fa['fa'], fa['fa-star'])} />{watchers}</em>
          <em><i className={classnames(fa['fa'], fa['fa-code-fork'])} />{forks}</em>
          {
            language ? <em><i className={classnames(fa['fa'], fa['fa-tint'])} />{language}</em> : ''
          }
          <a href={htmlUrl} target="_blank">View on github</a>
        </div>
      </div>
    </div>;
  }
}

export default StarItem;
