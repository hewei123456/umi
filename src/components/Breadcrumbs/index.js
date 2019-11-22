import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import { Breadcrumb, Icon } from 'antd';

const routes = [
  { path: '/', breadcrumb: '信息总览', icon: 'pie-chart' },
  { path: '/list', breadcrumb: '列表', icon: 'database' },
  { path: '/list/:id', breadcrumb: '详情', icon: 'edit' },
];

const Breadcrumbs = props => {
  // console.log(props);
  return <Breadcrumb>
    {
      props.breadcrumbs.map(({ match, breadcrumb, icon }) => (
        props.match.url === match.url ? (
          <Breadcrumb.Item key={match.url}>
            <Icon type={icon} className="breadcrumb-icon"/>
            {breadcrumb}
          </Breadcrumb.Item>
        ) : <Breadcrumb.Item key={match.url}>
          <NavLink to={match.url}>
            <Icon type={icon} className="breadcrumb-icon"/>
            {breadcrumb}</NavLink>
        </Breadcrumb.Item>
      ))
    }
  </Breadcrumb>;
};

export default withBreadcrumbs(routes)(Breadcrumbs);
