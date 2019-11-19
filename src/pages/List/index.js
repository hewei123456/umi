import React, { Fragment, Component } from 'react';
import { Button, Input, Row, Col, message } from 'antd';
import { AdminLayout } from '@/components';
import { fetchUsers, createUser, deleteUser } from '@/request/apis';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: '',
    };
  }

  fetchUsers = async () => {
    try {
      let { data } = await fetchUsers();
      this.setState(state => ({ users: data.users }));
    } catch (e) {
      console.log(e);
    }
  };

  createUser = async name => {
    if (name)
      try {
        let { data } = await createUser(name);
        this.setState(state => ({ users: data.users }));
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
      this.setState(state => ({ users: data.users }));
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
    return (
      <AdminLayout>
        <div>
          {
            users.map(user => (
              <div key={user.id}>
                {user.name}
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
        </div>
        <Fragment/>
      </AdminLayout>
    );
  }
}
