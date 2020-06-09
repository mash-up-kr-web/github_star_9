import { useState } from "react";

interface State {
  [key: string]: string;
}

export default function useInput(initialForm: State) {
  const [state, setState] = useState(initialForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return { state, onChange };
}
