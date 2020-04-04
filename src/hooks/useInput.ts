import { useReducer } from 'react';

interface State {
  [key: string]: string;
}

function reducer(state: any, action: any) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInput(initialForm: State) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      dispatch(e.target);
    }
  };

  const setInput = (data: any) => {
    dispatch(data);
  };

  return [state, onChange, setInput];
}
