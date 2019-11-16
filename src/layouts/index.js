import { Scrollbars } from 'react-custom-scrollbars';
import { Header } from '../components';

function BasicLayout(props) {
  return (
    <div className="root-wrapper">
      <Scrollbars hideTracksWhenNotNeeded={true}>
        <Header/>
        {props.children}
      </Scrollbars>
    </div>
  );
}

export default BasicLayout;
