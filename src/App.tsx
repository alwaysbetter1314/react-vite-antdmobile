import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styles from './App.module.less'
import { Steps, Card, Button, Toast, TabBar} from 'antd-mobile'
import { 
  AntDesignOutlined, 
  RightOutlined ,   
  HomeOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  UserOutlined,} from '@ant-design/icons'

const { Step } = Steps

function App() {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <HomeOutlined />,
      badge: '',
    },
    {
      key: 'todo',
      title: '我的待办',
      icon: <UnorderedListOutlined />,
      badge: '5',
    },
    {
      key: 'message',
      title: '我的消息',
      icon: <MessageOutlined />,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '个人中心',
      icon: <UserOutlined />,
    },
  ]
  const [count, setCount] = useState(0)
  const [activeKey, setActiveKey] = useState('todo')

  const [activeKey1, setActiveKey1] = useState('home')

  return (
    <div className={styles.app}>
        <Steps current={1}>
          <Step title='标题1' description='描述' />
          <Step title='标题2' description='描述' />
          <Step title='标题3' description='描述' />
        </Steps>

        <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <AntDesignOutlined
                style={{ marginRight: '4px', color: '#1677ff' }}
              />
              卡片标题
            </div>
          }
          extra={<RightOutlined />}
          // onBodyClick={()=>{}}
          // onHeaderClick={onHeaderClick}
          style={{ borderRadius: '16px' }}
        >
          <div className={styles.content}>卡片内容</div>
          <div className={styles.footer} onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              onClick={() => Toast.show('点击了底部按钮')}
            >
              底部按钮
            </Button>
          </div>
        </Card>

        <div className={styles.tarbar}>
          <TabBar>
            {tabs.map(item => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        </div>
    </div>
  )
}

export default App
