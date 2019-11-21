import { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { AdminLayout } from '@/components';

class HomePage extends PureComponent {
  render() {
    const { results } = this.props;
    return (
      <AdminLayout>
        <div style={{ height: '3000px' }}>
          <Button onClick={() => {
            this.props.update();
          }}>add</Button>
          <ul>
            {
              results.map(i => (
                <li key={i.props.id}>
                  {i.name}
                </li>
              ))
            }
          </ul>
        </div>
        <Fragment/>
      </AdminLayout>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  results: home.results,
});

let id = 0;
const mapDispatchToProps = dispatch => ({
  update() {
    id++;
    dispatch({
      type: 'home/update',
      payload: {
        name: 'hewei' + id, props: {
          id: id,
        },
      },
    });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
