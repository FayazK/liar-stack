import { Table } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { DataTableParamsAtom, DataTableRefreshAtom } from '@/Helpers/Atom'

export const DataTable = ({ columns, pageSize = 25, url, ...props }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [sorter, setSorter] = useState({})
  const [filters, setFilters] = useState({})
  const [refresh, setRefresh] = useRecoilState(DataTableRefreshAtom)
  const [params, setParams] = useRecoilState(DataTableParamsAtom)
  const [pagination, setPagination] = useState({
    current: 1,
    defaultCurrent: 1,
    size: 'default',
    pageSize: pageSize || 25,
    hideOnSinglePage: true,
    responsive: true,
    showSizeChanger: false,
    showTotal: (total, range) => {
      return `Showing ${range[0]} to ${range[1]} of ${total} items`
    },
  })

  useEffect(() => {
    fetchData()
  }, [refresh])

  const fetchData = useCallback(() => {
    setLoading(true)
    axios(route(url, { 'page': pagination.current }), {
      method: 'patch', data: {
        'sort': sorter, 'filters': filters, ...params,
      },
    }).then((results) => {
      let res = results.data
      setData(res.data)
      setLoading(false)
      setPagination({
        current: res.meta.current_page,
        pageSize: res.meta.per_page, ...pagination,
        total: res.meta.total,
        showTotal: (total, range) => {
          return `Showing ${range[0]} to ${range[1]} of ${total} items`
        },        // total: data.totalCount,
      })
    })
  }, [])// fetchData

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination)
    setFilters(filters)
    setSorter(sorter)
    fetchData()
  }// handleTableChange

  return <Table
    columns={columns}
    dataSource={data}
    loading={loading}
    onChange={handleTableChange}
    {...props}/>
}
