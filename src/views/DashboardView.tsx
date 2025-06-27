import { Layout, Table, Button, Space, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom'; // uncomment when router is set up
import { auth } from '../utils/auth';

const { Header, Content } = Layout;
const { Title } = Typography;

interface DataType {
  id: number;
  name: string;
  description?: string;
}

export const DashboardView = () => {
  // const navigate = useNavigate(); // uncomment when router is set up
  const user = auth.getUser();

  const handleLogout = () => {
    auth.logout();
    // navigate('/login'); // uncomment when router is set up
    console.log('Logged out - would navigate to login');
    // for now, refresh the page to show login
    window.location.reload();
  };

  // Dummy data for the table?
  const data: DataType[] = [
    {
      id: 1,
      name: 'Tranchify',
      description: 'Leading structured finance platform'
    },
    {
      id: 2,
      name: 'The future of Structured Finance powered by AI',
      description: 'Revolutionizing financial instruments with artificial intelligence'
    },
    {
      id: 3,
      name: 'Smart Contract Integration',
      description: 'Automated compliance and execution'
    },
    {
      id: 4,
      name: 'Risk Analysis Engine',
      description: 'AI-powered risk assessment and mitigation'
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#001529',
        padding: '0 24px'
      }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          Tranchify Dashboard
        </Title>
        <Space>
          <span style={{ color: 'white' }}>
            Welcome, {user?.username || 'User'}
          </span>
          <Button 
            type="primary" 
            danger 
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Space>
      </Header>
      
      <Content style={{ padding: '24px' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '8px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
        }}>
          <Title level={4} style={{ marginBottom: 16 }}>
            Platform Overview
          </Title>
          <Table 
            columns={columns} 
            dataSource={data} 
            rowKey="id"
            pagination={false}
          />
        </div>
      </Content>
    </Layout>
  );
};