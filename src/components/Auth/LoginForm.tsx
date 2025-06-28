import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: LoginFormValues) => {
    if (values.username && values.password) {
      onLogin(values.username, values.password);
    } else {
      message.error('Please enter username and password');
    }
  };

  return (
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

      <Form.Item style={{ marginBottom: 0 }}>
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
  );
};