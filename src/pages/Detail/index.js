import React, { Fragment, PureComponent } from 'react';

import { AdminLayout } from '@/components';


class DetailPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AdminLayout>
        <div>
          detailPage
        </div>
        <Fragment/>
      </AdminLayout>
    );
  }
}

export default DetailPage;
