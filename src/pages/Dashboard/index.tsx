import React from 'react';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <button type="button" onClick={singOut}>
        LogOut
      </button>
    </>
  );
};

export default Dashboard;
