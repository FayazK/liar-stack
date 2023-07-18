import {Button, Card, Checkbox, Col, Form, Input, Row, Space, Typography} from "antd";
import {UnlockOutlined, UserOutlined} from "@ant-design/icons";
import '../../../css/Login.css'
import {Link, router} from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import {useEffect} from "react";

const {Title, Paragraph} = Typography
export default function Login({errors}) {
    const [form] = Form.useForm();

    const submitForm = (values) => {
        router.post(route('login'), values)
    }// submitForm

    useEffect(() => {
        let fieldErrors = [];
        Object.keys(errors).map((field) => {
            let message = errors[field]
            console.log(message)
            fieldErrors.push({name: field, errors: [message]})
        })
        form.setFields(fieldErrors)
        form.setFieldValue('password',null)
    }, [errors])


    return (
        <AuthLayout title={'Login'}>
            <Form form={form} onFinish={submitForm}>
                <Form.Item
                    name={'email'}
                    rules={[
                        {required: true, message: 'This field is required'},
                        {type: 'email', message: 'Please enter a valid email address'}
                    ]}
                >
                    <Input size={'large'} placeholder={'abc@xyz.com'} prefix={<UserOutlined/>}/>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {required: true, message: 'The password field is required.', whitespace: true}
                    ]}
                >
                    <Input.Password size={'large'} placeholder={'*********'}
                                    prefix={<UnlockOutlined/>}/>
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12} style={{textAlign: 'right'}}>
                        <Link href={route('password.request')}>Forget Password?</Link>
                    </Col>
                </Row>
                <Space className={'full-width'} direction={'vertical'} size={'small'}>
                    <Form.Item>
                        <Button htmlType={'submit'} type={'primary'} block={true}>Login</Button>
                    </Form.Item>
                </Space>
            </Form>
            <div style={{textAlign: 'center'}}>
                Don't have an account? <Link href={route('register')}>Sing-up now</Link>
            </div>
        </AuthLayout>
    );
}// Login
