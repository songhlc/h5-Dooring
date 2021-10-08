import React from 'react';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { IntlProvider } from 'react-intl';

import Container from './Container';

import styles from './index.less';
const messagesInCN = {
  Area: '面积图',
  Bar: '条形图',
  BubbleMap: '带气泡的地图',
  Chart: '柱状图',
  'Screen width': '大屏宽度',
  'Screen height': '大屏高度',
  'Screen name': '大屏名称',
  'Screen desc': '大屏简介',
  'Screen cate': '大屏分类',
  'Screen bg': '大屏背景',
  Gallery: '图库',
  Config: '配置',
  Pie: '饼图',
  Shortcuts: '快捷键',
  Radar: '雷达图',
  'Layer name': '图层名称',
  'Vertical display': '纵向位移',
  'Horizontal display': '横向位移',
  'Component width': '组件宽度',
  'Component height': '组件高度',
  'Component zIndex': '组件层级',
  Delete: '删除',
  Copy: '复制',
  Line: '折线图',
};
function Editor(props) {
  return (
    <div className={styles.layout}>
      <IntlProvider messages={messagesInCN} locale="zh-CN" defaultLocale="zhcn">
        <DndProvider backend={HTML5Backend}>
          <Container {...props} />
        </DndProvider>
      </IntlProvider>
    </div>
  );
}

export default Editor;
