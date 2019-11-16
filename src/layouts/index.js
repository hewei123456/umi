import { Scrollbars } from 'react-custom-scrollbars';
import './index.less';

const BasicLayout = props => (
  <div className="root-wrapper">
    <Scrollbars hideTracksWhenNotNeeded={true}>
      {props.children}
    </Scrollbars>
  </div>
);

export default BasicLayout;
