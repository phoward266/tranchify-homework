import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';

export const NotFoundView = () => {
  const navigate = useNavigate();
  const isLoggedIn = auth.isAuthenticated();

  const handleBackHome = () => {
    navigate(isLoggedIn ? '/dashboard' : '/login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={handleBackHome}>
            {isLoggedIn ? 'Back to Dashboard' : 'Go to Login'}
          </Button>
        }
      />
    </div>
  );
};