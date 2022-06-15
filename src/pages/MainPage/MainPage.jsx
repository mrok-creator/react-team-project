import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actions } from '../../redux/testType/testType-slice';

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => dispatch(actions.add('QA technical training'))}>
        QA technical training
      </button>
      <button onClick={() => dispatch(actions.add('Testing theory'))}>
        Testing theory
      </button>
    </>
  );
}

export default MainPage;
