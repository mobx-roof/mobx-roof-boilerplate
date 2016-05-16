import React, { Component } from 'react';
import StarItem from './StarItem';
import style from './Stars.less';
import { observer } from 'mobx-roof';

@observer('stars')
class Stars extends Component {
  componentWillMount() {
    // todo
    // this.props.stars.syncAll();
  }
  renderData() {
    const { data: starsList, selectedStarId } = this.props.stars;
    if (!starsList.length) {
      return <div className={style.empty}>no star found</div>;
    }
    return starsList.map(item =>
      <StarItem key={item.id} data={item} keyword={this.props.keyword}
                selected={selectedStarId === item.id}
      />
    );
  }
  render() {
    return <div className={style.normal}>
      {this.renderData()}
    </div>;
  }
}

export default Stars;
