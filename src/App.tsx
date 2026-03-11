import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
}
