import { Card } from 'antd'

export default function ContentCard({children}){
  return <Card bodyStyle={{padding:0}}>{children}</Card>
}
