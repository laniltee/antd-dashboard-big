import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import convergenceLogo from './images/conv.png';
const { Header, Content, Footer, Sider } = Layout;

const ApplicationLayout = () => {
  return (
    <Layout className="layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // eslint-disable-next-line no-console
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // eslint-disable-next-line no-console
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <img src={convergenceLogo} alt="Logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default ApplicationLayout;
