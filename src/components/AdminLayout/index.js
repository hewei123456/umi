import { Scrollbars } from 'react-custom-scrollbars';
import './index.less';

const AdminLayout = props => {
  return (
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
        <div className="view-content">
          {props.children[1]}
        </div>
      </section>
    </div>
  );
};

export default AdminLayout;
