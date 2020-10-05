import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = (props: any) => {
    let history = useHistory();

    const onFinish = (values: any) => {
        props.log_in(values);
        history.push('/pair-panel');
    };

    const onFinishFailed = (errorInfo: any) => {
        console.warn('Failed:', errorInfo);
    };

    return (
        <div
            className='login-form-container'
        >
            <Form
                {...layout}
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
