import {Head, router} from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout";
import {Alert, Button, Form, Input, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useEffect} from "react";

const {Paragraph} = Typography

export default function ForgotPassword({status,errors}) {
    const [forgetForm] = Form.useForm();

    const submit = (values) => {
        router.post(route('password.email'),values)
    }

    useEffect(() => {
        let fieldErrors = [];
        Object.keys(errors).map((field) => {
            let message = errors[field]
            console.log(message)
            fieldErrors.push({name: field, errors: [message]})
        })
        forgetForm.setFields(fieldErrors)
        forgetForm.setFieldValue('password',null)
    }, [errors])

    return (
        <AuthLayout>
            <Head title="Forgot Password"/>

            <Paragraph>
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </Paragraph>

            {status && <Alert style={{marginBottom:'1rem'}} message={status} type="success" showIcon={true} closable={true}/>}

            <Form onFinish={submit} form={forgetForm}>
                <Form.Item name={'email'} rules={[
                    {required: true, message: 'This field is required'},
                    {type: 'email', message: 'Please enter a valid email address'}
                ]}>
                    <Input placeholder={'abc@xyz.com'} size={'large'} prefix={<UserOutlined/>}/>
                </Form.Item>
                <Button size={'large'} type={'primary'} htmlType={'submit'}>Email Password Reset Link</Button>
            </Form>
        </AuthLayout>
    );
}
