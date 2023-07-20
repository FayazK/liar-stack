import {useEffect} from 'react';
import {Head, router} from '@inertiajs/react';
import AuthLayout from "@/Layouts/AuthLayout";
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

/**
 *
 * @param token
 * @param email
 * @param errors
 * @returns {JSX.Element}
 * @constructor
 */
export default function ResetPassword({token, email, errors}) {
    const [form] = Form.useForm();

    useEffect(() => {
        let fieldErrors = [];
        Object.keys(errors).map((field) => {
            let message = errors[field]
            console.log(message)
            fieldErrors.push({name: field, errors: [message]})
        })
        form.setFields(fieldErrors)
        form.setFieldValue('password', null)
    }, [errors])

    const submit = (values) => {
        router.post(route('password.store'), values)
    }

    return (
        <AuthLayout>
            <Head title="Reset Password"/>

            <Form onFinish={submit} form={form}>
                <Form.Item name={'token'} hidden={true} initialValue={token}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    initialValue={email}
                    name={'email'}
                    rules={[
                        {required: true, message: 'This field is required'},
                        {type: 'email', message: 'Please enter a valid email address'}
                    ]}
                >
                    <Input placeholder={'abc@xyz.com'} prefix={<UserOutlined/>}/>
                </Form.Item>
                <Form.Item name={'password'}
                           rules={[
                               {required: true, message: 'This field is required', whitespace: true}
                           ]}
                >
                    <Input.Password placeholder={'**********'} prefix={<LockOutlined/>}/>
                </Form.Item>
                <Form.Item name={'password_confirmation'}
                           rules={[
                               {required: true, message: 'This field is required', whitespace: true}
                           ]}>
                    <Input.Password placeholder={'**********'} prefix={<LockOutlined/>}/>
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} size={'large'} htmlType={'submit'}>Reset Password</Button>
                </Form.Item>
            </Form>
        </AuthLayout>
    );
    
}// ResetPassword
