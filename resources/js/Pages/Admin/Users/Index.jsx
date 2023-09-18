import AdminLayout from '@/Layouts/AdminLayout'
import { Card, Table } from 'antd'
import ContentCard from '@/Components/ContentCard'
import { DataTable } from '@/Components/DataTable'

const columns = [
  {
    title: 'First Name',
    key: 'first_name',
    dataIndex: 'first_name',
  },
  {
    title: 'Last Name',
    key: 'last_name',
    dataIndex: 'last_name',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    key: 'actions',
  },
]

export default function () {
  return <AdminLayout>
    <ContentCard>

      <DataTable size={'small'} columns={columns} url={'admin.users.list'} />
    </ContentCard>
  </AdminLayout>
}
