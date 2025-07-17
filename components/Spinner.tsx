
import React from 'react';

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-12 h-12 border-4 border-slate-700 border-t-indigo-500 rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
