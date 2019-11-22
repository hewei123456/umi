import { List } from 'immutable';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

import { Button, Input, Row, Col, message } from 'antd';
import { AdminLayout } from '@/components';

import { fetchUsers, createUser, deleteUser } from '@/request/apis';

class ListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: List([]),
      username: '',
    };
  }

  fetchUsers = async () => {
    try {
      let { data } = await fetchUsers();
      const users = List(data.users);
      this.setState(state => ({ users }));
    } catch (e) {
      console.log(e);
    }
  };

  createUser = async name => {
    if (name)
      try {
        let { data } = await createUser(name);
        const users = List(data.users);
        this.setState(state => ({ users }));
      } catch (e) {
        console.log(e);
      }
    else {
      message.warning('用户名不能为空，请重新输入！');
    }
    this.setState(state => ({ username: '' }));
  };

  deleteUser = async id => {
    try {
      let { data } = await deleteUser(id);
      const users = List(data.users);
      this.setState(state => ({ users }));
    } catch (e) {
      console.log(e);
    }
  };

  changeUsername = e => {
    e.persist();
    this.setState(state => ({ username: e.target.value }));
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users, username } = this.state;
    const { list, add, deleteItem } = this.props;
    return (
      <AdminLayout>
        <div style={{ height: '3000px' }}>
          {
            users.map(user => (
              <div key={user.id}>
                id: {user.id}
                用户名: {user.name}
                <Button type="link" shape="circle" icon="close" onClick={() => {
                  this.deleteUser(user.id);
                }}/>
              </div>
            ))
          }
          <Row style={{ marginTop: '20px' }}>
            <Col span={20}>
              <Input
                placeholder="username"
                value={username}
                onChange={this.changeUsername}
                onKeyDown={e => {
                  if (e.keyCode === 13)
                    this.createUser(username);
                }}
              />
            </Col>
            <Col span={3} offset={1}>
              <Button
                onClick={() => {
                  this.createUser(username);
                }}>添加用户</Button>
            </Col>
          </Row>

          <ul style={{ marginTop: '30px' }}>
            {
              list.map((item, index) => (
                <li key={item.props.id}>
                  id: {item.props.id}
                  用户名: {item.name}
                  <Button type="link" shape="circle" icon="close" onClick={() => {
                    deleteItem(index);
                  }}/>
                </li>
              ))
            }
          </ul>
          <Button type="primary" onClick={add}>添 加</Button>
        </div>
        <Fragment/>
      </AdminLayout>
    );
  }
}

const mapStateToProps = ({ list }) => ({
  list,
});

let id = 0;
const mapDispatchToProps = dispatch => ({
  add() {
    id++;
    dispatch({
      type: 'list/add',
      payload: {
        name: 'hewei' + id, props: { id: id },
      },
    });
  },
  deleteItem(index) {
    dispatch({
      type: 'list/delete',
      payload: index,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
