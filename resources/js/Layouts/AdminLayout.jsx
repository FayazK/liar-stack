import '../../css/admin-layout.scss'
import { useState } from 'react'
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  Space,
  theme,
  Typography,
} from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

const { Sider, Content, Header } = Layout

export default function AdminLayout ({ children }) {

  const [collapsed, setCollapsed] = useState(false)
  const { token: { colorBgContainer } } = theme.useToken()

  return <Layout className={'admin-layout'}>
    <Sider trigger={null}  collapsible collapsed={collapsed}>
      <div className="logo"/>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1', icon: <UserOutlined/>, label: 'nav 1',
          }, {
            key: '2', icon: <VideoCameraOutlined/>, label: 'nav 2',
          }, {
            key: '3', icon: <UploadOutlined/>, label: 'nav 3',
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0, background: colorBgContainer,
        }}
      >
        <div className={'header-bar'}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px', width: 64, height: 64,
            }}
          />
          <div className={'heading-wrapper'}>
            <Typography.Title level={4} className={'page-heading'}>Title here</Typography.Title>
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: 'Home',
                },
                {
                  title: 'Application Center',
                  href: '',
                },
                {
                  title: 'Application List',
                  href: '',
                },
                {
                  title: 'An Application',
                },
              ]}
            />
          </div>
        </div>
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
}
