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
  return (
    <DashboardContainer>
      <section>
        <h2>Store</h2>
        <Link to='/createstore'>Create Store</Link>
      </section>
      <section>
        <h2>Employees</h2>
      </section>
      <section>
        <h2>Finance</h2>
      </section>
      <h2>Test</h2>
    </DashboardContainer>
  );
}

export default Dashboard;
