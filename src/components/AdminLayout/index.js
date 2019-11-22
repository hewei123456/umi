import { Fragment } from 'react';
import { connect } from 'dva';
import { Scrollbars } from 'react-custom-scrollbars';
import { Icon } from 'antd';
import { Header, Breadcrumbs } from '@/components/index';
import './index.less';

const AdminLayout = props => {
  const { showLeft, toggle, children, hasLeft } = props;
  return (
    <Fragment>
      <Header/>

      <div className="aside-view">
        {
          hasLeft ? <aside className={`aside ${showLeft ? '' : 'hide-aside'}`}>
            <Scrollbars>
              {children[1]}
            </Scrollbars>
            <div className="toggle" onClick={() => {
              toggle();
            }}>
              <Icon type={showLeft ? 'caret-left' : 'caret-right'}/>
            </div>
          </aside> : null
        }


        <section className="view">
          <div className='breadcrumb-wrapper'>
            <Breadcrumbs/>
          </div>

          <div className='view-scroll-wrapper'>
            <Scrollbars>
              <div className="view-content">
                {children[0]}
              </div>
            </Scrollbars>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

AdminLayout.defaultProps = {
  hasLeft: true,
};

const mapStateToProps = ({ layout }) => ({
  showLeft: layout.showLeft,
});

const mapDispatchToProps = dispatch => ({
  toggle() {
    dispatch({
      type: 'layout/toggle',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
