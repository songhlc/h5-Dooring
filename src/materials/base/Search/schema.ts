import {
  TColorDefaultType,
  IColorConfigType,
  ITextConfigType,
  TTextDefaultType,
} from '@/components/FormComponents/types';

export type CarouselDirectionKeyType = 'down' | 'left';

export type TSearchEditData = Array<IColorConfigType | ITextConfigType>;
export interface ISearchConfig {
  bgColor: TColorDefaultType; // 背景色
  searchBgColor: TColorDefaultType; //搜索条背景色
  color: TColorDefaultType; // 搜索文字颜色
  placeholder: TTextDefaultType;
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
    {
      key: 'placeholder',
      name: '搜索提示',
      type: 'Text',
    },
  ],
  config: {
    bgColor: '#d9001b',
    searchBgColor: '#fff',
    color: '#dd1f36',
    placeholder: '请输入商品名称或编码',
  },
};
export default Search;
