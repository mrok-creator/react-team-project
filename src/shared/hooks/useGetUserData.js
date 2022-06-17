import { useSelector, shallowEqual } from 'react-redux';

import { getUser } from '../../redux/auth/auth-selector';

const useGetUserData = () => {
  return useSelector(getUser, shallowEqual);

};

export default useGetUserData;
