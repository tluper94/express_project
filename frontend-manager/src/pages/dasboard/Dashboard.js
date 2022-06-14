import { useEffect } from 'react';
import { DashboardContainer } from './Dashboard.styles';
import { useNavigate, Link } from 'react-router-dom';

function Dashboard({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);
  return <DashboardContainer>Dashboard</DashboardContainer>;
}

export default Dashboard;
