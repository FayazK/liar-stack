import AdminLayout from '@/Layouts/AdminLayout'
import ContentCard from '@/Components/ContentCard'
import { DataTable } from '@/Components/DataTable'
import { Table } from 'antd'

const columns = [
  {
    title: 'Role',
    key: 'name',
    dataIndex: 'name',
  },
  {
    key: 'actions',
  },
]

export default function ({roles}) {
  return <AdminLayout>
    <ContentCard>
      <Table size={'small'} columns={columns} dataSource={roles} pagination={false} />
    </ContentCard>
  </AdminLayout>
}
