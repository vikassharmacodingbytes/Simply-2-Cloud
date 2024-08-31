// Loading.js

import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <CircularProgress size={50} thickness={4} />
    </div>
  );
};

export default LoadingPage;
