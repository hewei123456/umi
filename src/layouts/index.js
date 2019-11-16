import { Scrollbars } from 'react-custom-scrollbars';
import './index.less';
import { Header } from '@/components';

const BasicLayout = props => (
  <div className="root-wrapper">
    <Scrollbars hideTracksWhenNotNeeded={true}>
      <div className="root-container">
        <Header/>
        <Scrollbars>
          <div className="root-section">
            {props.children}
          </div>
        </Scrollbars>
      </div>
    </Scrollbars>
  </div>
);

export default BasicLayout;
