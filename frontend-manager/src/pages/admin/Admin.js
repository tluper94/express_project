import { useEffect } from 'react';
import { AdminContainer } from './Admin.styles';
import { useNavigate, Link } from 'react-router-dom';

function Admin({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user]);
  return (
    <AdminContainer>
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
    </AdminContainer>
  );
}

export default Admin;
