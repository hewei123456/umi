import { PureComponent } from 'react';
import router from 'umi/router';
import withRouter from 'umi/withRouter';

import { Icon } from 'antd';

import { logo, avatar } from '@/static';

import './index.less';

const navigation = [
  {
    name: '信息总览',
    key: '/',
    icon: 'pie-chart',
  }, {
    name: '表单',
    key: '/list',
    icon: 'edit',
  },
];

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatar,
      navigation,
    };
  }

  checkCurKey = key => {
    return this.props.history.location.pathname === key;
  };

  render() {
    this.checkCurKey();
    return (
      <header id="header">
        <div className="logo">
          <img src={logo} className="logo-img left" alt="true"/>
        </div>
        <ul className="navigation">
          {
            this.state.navigation.map(item => {
                let props = {
                  className: `nav-item ${this.checkCurKey(item.key) ? 'active' : ''}`,
                  key: item.key,
                  onClick: e => {
                    if (!this.checkCurKey(item.key))
                      router.push(item.key);
                  },
                };
                return (
                  <li {...props}>
                    <Icon type={item.icon} className="nav-item-icon"/>
                    {item.name}
                  </li>
                );
              },
            )
          }
        </ul>
        <div className="operation">
          <span>
            <img src={this.state.avatar} className="avatar" alt="true"/>
          </span>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

