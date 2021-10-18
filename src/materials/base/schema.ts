import Carousel from './Carousel/schema';
import Form from './Form/schema';
import Header from './Header/schema';
import Icon from './Icon/schema';
import WhiteTpl from './WhiteTpl/schema';
import Image from './Image/schema';
import List from './List/schema';
import LongText from './LongText/schema';
import Notice from './Notice/schema';
import Qrcode from './Qrcode/schema';
import Tab from './Tab/schema';
import Text from './Text/schema';
import RichText from './RichText/schema';
import Search from './Search/schema';
import QuickLink from './QuickLink/schema';
// 1.3版本
// 搜索、导航、公告、图片广告、热区、商品
const basicSchema = {
  Carousel,
  Search,
  QuickLink,
  Form,
  Header,
  Icon,
  Image,
  List,
  LongText,
  WhiteTpl,
  Notice,
  Qrcode,
  Tab,
  Text,
  RichText,
};
export default basicSchema;
