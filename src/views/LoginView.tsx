import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from '../utils/auth';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginView = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Check if alr logged in
  useEffect(() => {
    if (auth.isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  const onFinish = (values: LoginFormValues) => {
    const success = auth.login(values.username, values.password);
    
    if (success) {
      message.success('Login successful!');
      navigate('/dashboard');
    } else {
      message.error('Please enter username and password');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5'
    }}>
      <Card 
        title="Welcome to Tranchify" 
        style={{ width: 400 }}
        bordered={false}
      >
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              { required: true, message: 'Please input your username!' }
            ]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Username" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please input your password!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large"
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        
        <div style={{ textAlign: 'center', color: '#888', fontSize: '12px' }}>
          The future of Structured Finance powered by AI
        </div>
      </Card>
    </div>
  );
};