import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, message } from 'antd';
import { auth } from '../utils/auth';
import { LoginForm } from '../components/Auth/LoginForm';

export const LoginView = () => {
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    if (auth.isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleLogin = (username: string, password: string) => {
    const success = auth.login(username, password);
    
    if (success) {
      message.success('Login successful!');
      navigate('/dashboard');
    }
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
      <Card 
        title="Welcome to Tranchify" 
        className="login-card"
        bordered={false}
      >
        <LoginForm onLogin={handleLogin} />
        
        <div style={{ textAlign: 'center', color: '#888', fontSize: '12px' }}>
          The future of Structured Finance powered by AI
          <br />
          <a href="/terms-and-conditions" style={{ color: '#1890ff' }}>
            Terms and Conditions
          </a>
        </div>
      </Card>
    </div>
  );
};