import request from '@/utils/req';

export async function savetpl(data: any): Promise<any> {
  return request.post('/visible/tpl/save', data);
}

export async function savev6(data: any): Promise<any> {
  return request.post('/visible/v6/save', data);
}

export async function getv6(tid: string): Promise<any> {
  return request.get(`/visible/v6/get?tid=${tid}`);
}

export async function savepreview(data: any): Promise<any> {
  return request.post('/visible/preview/save', data);
}

export async function getFreeTpls(): Promise<any> {
  return request.get('/visible/tpls/free');
}

export async function gettpl(tid: string): Promise<any> {
  return request.get(`/visible/tpl/get?tid=${tid}`);
}
