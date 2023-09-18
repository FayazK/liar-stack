import '../../css/admin-layout.scss'
import { useState } from 'react'
import {
  Avatar,
  Breadcrumb,
  Button, Dropdown,
  Layout,
  Menu,
  Space,
  theme,
  Typography,
} from 'antd'
import {
  GroupOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Link } from '@inertiajs/react'

const { Sider, Content, Header } = Layout

export default function AdminLayout ({ children }) {

  const [collapsed, setCollapsed] = useState(false)
  const { token: { colorBgContainer } } = theme.useToken()

  const userMenu = [
    {
      label: 'Profile',
      key: 'profile',
      icon: <UserOutlined/>,
    },
  ]

  return <Layout className={'admin-layout'}>
    <Sider theme={'light'} trigger={null} collapsible collapsed={collapsed}>
      <div className="logo"/>
      <Menu
        mode="inline"
        defaultSelectedKeys={[
          route().current(),
          route().current('admin.users') ? 'user-management' : '',
        ]}
        defaultOpenKeys={[route().current('admin.users') ? 'user-management' : '']}
        items={[
          {
            key: '1', icon: <UserOutlined/>, label: 'nav 1',
          }, {
            key: '2', icon: <VideoCameraOutlined/>, label: 'nav 2',
          }, {
            key: '3', icon: <UploadOutlined/>, label: 'nav 3',
          },
          {
            key: 'user-management',
            icon: <UserOutlined/>,
            label: 'User Management',
            children: [
              {
                key: 'admin.users',
                icon: <UserOutlined/>,
                label: <Link href={route('admin.users')}>Users</Link>,
              },
            ],
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
              fontSize: '16px', width: 64, height: 64, marginRight: '1rem',
            }}
          />
          <div className={'heading-wrapper'}>
            <Typography.Title level={4} className={'page-heading'}>Title
              here</Typography.Title>
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
          <Dropdown trigger={['click']} menu={{ items: userMenu }}>
            <Space style={{ marginRight: '1rem' }}>
              <div className={'username-wrapper'}>
                <Typography.Title level={4} className={'header-username'}>User
                  Name</Typography.Title>
                <Typography>Designation</Typography>
              </div>
              <Avatar size={56} icon={<UserOutlined/>}/>
            </Space>
          </Dropdown>
        </div>
      </Header>
      <Content
        style={{
          margin: '1rem',
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
}
