import { Layout, Button, Space, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';
import { DataTable } from '../components/Dashboard/DataTable';

const { Header, Content } = Layout;
const { Title } = Typography;

export const DashboardView = () => {
  const navigate = useNavigate();
  const user = auth.getUser();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#001529',
      }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          Tranchify Dashboard
        </Title>
        <Space wrap size="small">
          <span className="welcome-text" style={{ color: 'white', lineHeight: 'normal' }}>
            Welcome, {user?.username || 'User'}
          </span>
          <Button 
            type="primary" 
            danger 
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            size="middle"
          >
            <span className="logout-text">Logout</span>
          </Button>
        </Space>
      </Header>
      
      <Content className="dashboard-content">
        <div className="responsive-container">
          <div style={{ 
            backgroundColor: 'white', 
            padding: '16px', 
            borderRadius: '8px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
          }}>
            <Title level={4} style={{ marginBottom: 16 }}>
              Platform Overview
            </Title>
            <div className="responsive-table">
              <DataTable />
            </div>
          </div>
       </div>
      </Content>
    </Layout>
  );
};