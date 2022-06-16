import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://protest-backend.goit.global',
});

const addToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const signUp = async body => {
  const { data } = await instance.post('/auth/register', body);
  return data;
};

export const signIn = async body => {
  const { data } = await instance.post('/auth/login', body);
  addToken(data.accessToken);
  return data;
};

export const getCurrentUser = async accessToken => {
  addToken(accessToken);
  try {
    const { data } = await instance.get('/user');
    return data;
    // data return {email}
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logOut = async () => {
  const { data } = await instance.post('/auth/logout');
  removeToken();
  return data;
  //  nothing to return
};

export const logInByGoogle = async () => {
  const { data } = await instance.post('/auth/google');
  addToken(data.accessToken);
  return data;
  // data = {
  //   accessToken:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmE4NTk0MGY0ODc5YTA3NDY0NjJiNjkiLCJzaWQiOiI2MmE4NTlhN2Y0ODc5YTA3NDY0NjJiNmEiLCJpYXQiOjE2NTUyMDAxNjcsImV4cCI6MTY1NTIwMzc2N30.pys7z5ec2RRkMzEbXMIpKXvPtUtVsZrmPoySxQ_80so',
  //   refreshToken:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmE4NTk0MGY0ODc5YTA3NDY0NjJiNjkiLCJzaWQiOiI2MmE4NTlhN2Y0ODc5YTA3NDY0NjJiNmEiLCJpYXQiOjE2NTUyMDAxNjcsImV4cCI6MTY1NzgyODE2N30.qGAnhmtjMcd4vyHVciTveNIeY8vd8W1cwBQamCFixoQ',
  //   sid: '62a859a7f4879a0746462b6a',
  //   userData: {
  //     email: 'user123qwe@example.com',
  //     id: '62a85940f4879a0746462b69',
  //   },
  // };
};

export default instance;
