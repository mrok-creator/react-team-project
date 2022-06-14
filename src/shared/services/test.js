import instance from './auth';

export const getTechQuestions = async () => {
  const { data } = await instance.get('/qa-test/tech');
  return data;
};

export const getTheoryQuestions = async () => {
  const { data } = await instance.get('/qa-test/theory');
  return data;
};

export const getTechResult = async answers => {
  const { data } = await instance.get('/qa-test/tech-results', answers);
  return data;
};

export const getTheoryResult = async answers => {
  const { data } = await instance.get('/qa-test/theory-results', answers);
  return data;
};
