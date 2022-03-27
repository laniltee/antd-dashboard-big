import { Button, Drawer, Layout, Menu, Select } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import convergenceLogo from './images/conv.png';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;

const ApplicationLayout = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Sider
        theme="light"
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
        <Menu mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item>
            <strong>Identity Super Admin</strong>
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            General
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Renderer
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            Email Templates
          </Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}>
            PDF Templates
          </Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>
            Database Connections
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
          <div className="flex flex-row justify-between">
            <div>
              <Select
                size="large"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
            <div style={{ marginRight: '16px' }}>
              <Button onClick={showDrawer}>New Organization</Button>
            </div>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Layout>
  );
};

export default ApplicationLayout;
