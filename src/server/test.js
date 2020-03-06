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
  .then((response) => {
    if (response.code === 0) {
      return response.data;
    } else {
      Promise.reject(response.msg || '出现异常');
    }
  })
  .catch((error) => {
    console.log(error);
  });
};