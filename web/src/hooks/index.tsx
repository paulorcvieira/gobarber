import React from 'react';

import { AuthProvider } from './auth';
import { ToastPrivider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastPrivider>{children}</ToastPrivider>
  </AuthProvider>
);

export default AppProvider;
