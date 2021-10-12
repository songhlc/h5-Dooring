import {
  IDataListConfigType,
  IRadioConfigType,
  ISwitchConfigType,
  INumberConfigType,
  TColorDefaultType,
  IColorConfigType,
} from '@/components/FormComponents/types';

export type CarouselDirectionKeyType = 'down' | 'left';

export type TSearchEditData = Array<IColorConfigType>;
export interface ISearchConfig {
  bgColor: TColorDefaultType; // 背景色
  searchBgColor: TColorDefaultType; //搜索条背景色
  color: TColorDefaultType; // 搜索文字颜色
}

export interface ISearchSchema {
  editData: TSearchEditData;
  config: ISearchConfig;
}

const Search: ISearchSchema = {
  editData: [
    {
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'searchBgColor',
      name: '搜索框背景色',
      type: 'Color',
    },
    {
      key: 'color',
      name: '搜索文字颜色',
      type: 'Color',
    },
  ],
  config: {
    bgColor: 'rgba(255,0,0,0)',
    searchBgColor: 'rgba(255,255,255,0)',
    color: 'rgba(0,0,0,0)',
  },
};
export default Search;
