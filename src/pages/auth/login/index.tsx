import { Link, useNavigate } from "react-router-dom";
import WelcomeContent from "../common/welcome-content";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (values: {
        email: string;
        password: string;
    }) => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", values);
            message.success("Login Successfull")
            Cookies.set("token", response.data.token)
            Cookies.set("user", response.data.user)
            navigate("/");

        } catch (error: any) {
            message.error(error?.response?.data?.message || error.message);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="welcome-content  md:flex justify-center items-center hidden">
                <WelcomeContent />
            </div>
            <div className="form-content flex items-center justify-center">


                <Form className="flex flex-col gap-6 w-96"
                    layout="vertical"
                    onFinish={onSubmit}
                >
                    <div className="flex flex-col gap-6 w-96">
                        <div className="flex flex-col items-center gap-2">
                            <img
                                className="w-60 h-60"
                                src="https://img.freepik.com/premium-vector/charity-logo-with-love-design-community-love-care_526811-310.jpg?w=1060"
                            />
                            <h1 className="text-5xl text-[#89216b] font-bold">
                                ALTRUIFY
                            </h1>
                            <span className="text-sm text-gray-500">
                                Happiness doesn't result from what we get, but from what we give.
                            </span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">
                        Login to your account
                    </h1>
                    <hr />
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
                        Login
                    </Button>
                    <span className="text-sm">
                        Don't have an account? <Link to="/Register">Register</Link>
                    </span>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage;