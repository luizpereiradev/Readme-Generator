import React from 'react';
import loadingSvg from '../assets/loading.svg';

export default function Loading() {
  return (
    <div className="h-screen w-screen bg-slate-700 opacity-75 absolute flex justify-center items-center z-50">
      <img src={loadingSvg} className="animate-spin h-20 w-20 mr-3" alt="loading" />
    </div>
  );
}
