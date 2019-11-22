import router from 'umi/router';
import { Button } from 'antd';

const LoginPage = props => {
  return (
    <div id="login">
      <Button type="primary" onClick={e => {
        sessionStorage.setItem('token', 'access_token');
        router.push('/');
      }}>登 陆</Button>
    </div>
  );
};

export default LoginPage;
