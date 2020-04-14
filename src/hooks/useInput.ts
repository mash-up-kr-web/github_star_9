import { useReducer } from 'react';

interface State {
  [key: string]: string;
}

interface Action {
  name: string;
  value: string;
}

function reducer(state: State, action: Action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInput(initialForm: State) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return { state, onChange };
}
