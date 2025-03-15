import { Link, useNavigate } from "react-router-dom";
import WelcomeContent from "../common/welcome-content";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useState } from "react";

function RegisterPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const onSubmit = async (values: {
        name: string;
        email: string;
        password: string;
    }) => {
        try {
            setLoading(true);
            await axios.post("/api/users/register", values);
            console.log("success");
            message.success("hello");
            navigate("/login");
        } catch (error: any) {
            console.log('failed')
            message.error(error.response.data.message || error.message);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="welcome-content bg-primary md:flex justify-center items-center hidden">
                <WelcomeContent />
            </div>
            <div className="form-content flex items-center justify-center">
                <Form className="flex flex-col gap-6 w-96" layout="vertical"
                    onFinish={onSubmit}
                >
                    <h1 className="text-2xl font-bold text-primary">
                        Register your account
                    </h1>
                    <hr />
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter your full name!" },
                        ]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please enter your Email!" },
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your password!" },
                        ]}
                    >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit"
                        loading={loading}
                    >
                        Register
                    </Button>
                    <span className="text-sm">
                        Already have an Account? <Link to="/login">Login</Link>
                    </span>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage;