import { useEffect } from 'react';
import { Spin } from 'antd';

interface RedirectProps {
  to: string;
  message?: string;
}

export const Redirect = ({ to, message = 'Redirecting...' }: RedirectProps) => {
  useEffect(() => {
    // Small delay to show the loading message
    const timer = setTimeout(() => {
      window.location.replace(to);
    }, 1000);

    return () => clearTimeout(timer);
  }, [to]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
      padding: '20px',
      textAlign: 'center'
    }}>
      <Spin size="large" />
      <p style={{ marginTop: 16, fontSize: 16 }}>{message}</p>
      <p style={{ marginTop: 8, color: '#666', fontSize: 14 }}>
        Taking you to: {to}
      </p>
    </div>
  );
};