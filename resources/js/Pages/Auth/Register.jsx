import {Head, Link, router} from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout";
import {Button, Form, Input} from "antd";
import {MailOutlined, UnlockOutlined, UserOutlined} from "@ant-design/icons";

export default function Register() {
    const [form] = Form.useForm()

    /**
     *
     * @param values
     */
    const submit = (values) => {
        router.post(route('register'), values)
    }// submit

    return (
        <AuthLayout>
            <Head title="Register"/>
            <Form onFinish={submit} form={form}>
                <Form.Item
                    name={'name'}
                    rules={[
                        {required:true,message:'This field is required',whitespace:true}
                    ]}
                >
                    <Input size={'large'} placeholder={'John Doe'} prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    rules={[
                        {required: true, message: 'This field is required'},
                        {type: 'email', message: 'Please enter a valid email address'}
                    ]}
                >
                    <Input size={'large'} placeholder={'abc@xyz.com'} prefix={<MailOutlined />} />
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
                <Form.Item
                    name={'password_confirmation'}
                    rules={[
                        {required: true, message: 'The password field is required.', whitespace: true}
                    ]}
                >
                    <Input.Password size={'large'} placeholder={'*********'}
                                    prefix={<UnlockOutlined/>}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'} type={'primary'} size={'large'} block={true}>Register</Button>
                </Form.Item>
                <div style={{textAlign: 'center'}}>
                    Already registered? <Link href={route('login')}>Login now</Link>
                </div>
            </Form>
        </AuthLayout>
    );
}
