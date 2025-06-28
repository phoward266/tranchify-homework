import { Table } from 'antd';

interface DataType {
  id: number;
  name: string;
  description?: string;
}

export const DataTable = () => {
  // Dummy data for the table
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
      width: 60,
      responsive: ['sm'] as any,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      responsive: ['md'] as any,
    },
  ];

  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      rowKey="id"
      pagination={false}
      scroll={{ x: true }}
    />
  );
};