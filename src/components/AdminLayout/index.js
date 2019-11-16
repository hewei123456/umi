import { connect } from 'dva';
import { Scrollbars } from 'react-custom-scrollbars';
import { Icon } from 'antd';
import './index.less';


const AdminLayout = props => {
  const { showLeft, toggle, children } = props;
  return (
    <div className="aside-view">
      <aside className={`aside ${showLeft ? '' : 'hide-aside'}`}>
        <Scrollbars>
          {children[1]}
        </Scrollbars>
        <div className="toggle" onClick={() => {
          toggle();
        }}>
          <Icon type={showLeft ? 'caret-left' : 'caret-right'}/>
        </div>
      </aside>
      <section className="view">
        <div className="view-content">
          {children[0]}
        </div>
      </section>
    </div>
  );
};


const mapStateToProps = ({ showLeft }) => ({
  showLeft: showLeft,
});

const mapDispatchToProps = dispatch => ({
  toggle(bool) {
    dispatch({
      type: 'showLeft/toggle',
      payload: bool,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
