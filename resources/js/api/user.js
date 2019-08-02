import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data: {
      email: data.email,
      password: data.password,
    },
  });
}

export function signUp(data) {
  return request({
    url: 'api/auth/register',
    method: 'post',
    data,
  });
}
