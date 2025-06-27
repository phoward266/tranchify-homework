import { Result, Button } from 'antd';
// import { useNavigate } from 'react-router-dom'; // uncomment when router is set up

export const NotFoundView = () => {
  // const navigate = useNavigate(); // uncomment when router is set up

  const handleBackHome = () => {
    // navigate('/dashboard'); // uncomment when router is set up
    console.log('Would navigate to dashboard');
    // Temporary solution
    window.location.href = '/';
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5'
    }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={handleBackHome}>
            Back to Dashboard
          </Button>
        }
      />
    </div>
  );
};