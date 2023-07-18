import { Card, Col, Row, Typography} from "antd";
import Logo from '../../img/logo.png'
import '../../css/Login.css'

const {Title, Paragraph} = Typography
export default function AuthLayout({title, children}) {
    return (
        <div className="login-page">
            <div className='cover'>
                <div className={'logo'}><img src={Logo} alt={'Logo'}/></div>
                <Row>
                    <Col xs={{span: 22, offset: 1}} sm={{span: 18, offset: 3}} md={{span: 12, offset: 6}}
                         lg={{span: 8, offset: 8}} xl={{span: 6, offset: 9}}>
                        <Card className={'login-card'}>
                            <Title style={{textAlign: 'center'}}>{title}</Title>
                            {children}
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}// AuthLayout
