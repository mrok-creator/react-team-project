import instance from './auth';

export const getQuestions = async type => {
  const { data } = await instance.get(`/qa-test/${type}`);
  return data;
};

export const getResult = async (type, answers) => {
  const { data } = await instance.post(`/qa-test/${type}-results`, answers);
  return data;
};
