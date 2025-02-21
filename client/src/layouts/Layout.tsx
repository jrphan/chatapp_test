import routes from '../routes/routes';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to={routes.home}>Trang Chủ</Link> | <Link to={routes.about}>Giới Thiệu</Link> |{' '}
        <Link to={routes.login}>Đăng nhập</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
