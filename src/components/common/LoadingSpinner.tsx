import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import Loader from 'react-loader-spinner';

interface LoadingSpinnerProps {
  className: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <div {...props}>
      <Loader type="Grid" color="#898989" height={100} width={100} />
    </div>
  );
};

export default LoadingSpinner;
