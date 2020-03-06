import service from '@/plugins/service';

export function login(id) {
  return service(`/v1/test/${id}`, {
    method: 'post',
    data: {
      name: 'xxx'
    }
  })
}

export function test(id) {
  return service(`/v1/test/${id}`, {
    method: 'get',
    data: {},
  })
};