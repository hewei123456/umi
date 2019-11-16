import { Scrollbars } from 'react-custom-scrollbars';
import { Header } from '..';
import './index.less';

const AdminLayout = props => {
  return (
    <div className="container">
      <Header/>
      <div className="aside-view">
        {
          props.children[0] ? (
            <aside className={`aside ${props.hideLeft ? 'hide-aside' : ''}`}>
              <Scrollbars>
                {props.children[0]}
              </Scrollbars>
            </aside>
          ) : null
        }
        <section className="view">
          <Scrollbars>
            <div className="view-content">
              {props.children[1]}
            </div>
          </Scrollbars>
        </section>
      </div>
    </div>
  );
};

export default AdminLayout;
