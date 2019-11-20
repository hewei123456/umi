import { Fragment } from 'react';
import { AdminLayout } from '@/components';

export default function() {
  return (
    <AdminLayout>
      <div style={{ height: '3000px' }}>
        Home
      </div>
      <Fragment/>
    </AdminLayout>
  );
}
