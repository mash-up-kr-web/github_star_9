import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import Loader from 'react-loader-spinner';

const Loading: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={className}>
      <Loader type="Grid" color="#898989" height={100} width={100} />
    </div>
  );
};

export default Loading;
