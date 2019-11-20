import { Scrollbars } from 'react-custom-scrollbars';
import './index.less';

const BasicLayout = props => (
  <div className="root-wrapper">
    <Scrollbars hideTracksWhenNotNeeded={true}>
      <div className="root-container">
        <Scrollbars hideTracksWhenNotNeeded={true}>
          <div className="root-section">
            {props.children}
          </div>
        </Scrollbars>
      </div>
    </Scrollbars>
  </div>
);

export default BasicLayout;
