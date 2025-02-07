import React from 'react';
import { Tabs, message } from 'antd';
import { history } from 'umi';
import {
  MobileOutlined,
  ConsoleSqlOutlined,
  CodeOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import styles from './index.less';

const { TabPane } = Tabs;

const Home = () => {
  const handleGo = (type: string) => {
    if (type === 'H5') {
      history.push('/editor?tid=123456');
    } else if (type === 'PC') {
      window.open('http://www.baidu.com');
    } else {
      history.push('/ide');
    }
  };
  return (
    <div className={styles.homeWrap}>
      <div className={styles.leftArea}>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <MobileOutlined />
                我的H5
              </span>
            }
            key="1"
          >
            正在开发...
          </TabPane>
          <TabPane
            tab={
              <span>
                <ConsoleSqlOutlined />
                我的大屏
              </span>
            }
            key="2"
          >
            正在开发...
          </TabPane>
          <TabPane
            tab={
              <span>
                <IdcardOutlined />
                我的可视化
              </span>
            }
            key="3"
          >
            正在开发...
          </TabPane>
        </Tabs>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.logoTip}>
          <div className={styles.logo}>
            <span className={styles.logoText} title="app-design可视化编辑器">
              app-design
            </span>
            可视化编辑器
          </div>
        </div>
        <div className={styles.operation}>
          <div className={styles.card} onClick={() => handleGo('H5')}>
            <MobileOutlined />
            <div>制作App页面</div>
          </div>
          <div className={styles.card} onClick={() => handleGo('online')}>
            <CodeOutlined />
            <div>在线编程</div>
          </div>
          <div className={styles.card} onClick={() => handleGo('PC')}>
            <ConsoleSqlOutlined />
            <div>制作可视化大屏</div>
          </div>
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default Home;
