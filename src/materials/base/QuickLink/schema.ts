import { TColorDefaultType, IColorConfigType } from '@/components/FormComponents/types';
export type TQuickLinkEditData = Array<IColorConfigType>;
export interface IQuickLinkConfig {
  bgColor: TColorDefaultType; // 背景色
  color: TColorDefaultType;
}
export interface IQuickLinkSchema {
  editData: TQuickLinkEditData;
  config: IQuickLinkConfig;
}

const QuickLink: IQuickLinkSchema = {
  editData: [
    {
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
  ],
  config: {
    bgColor: '#d9001b',
    color: '#fff',
  },
};
export default QuickLink;
