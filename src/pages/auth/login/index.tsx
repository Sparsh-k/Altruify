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
        <div >
            <div className="welcome-content  md:flex justify-center items-center hidden absolute inset-0">
                <WelcomeContent />
            </div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="relative z-10 w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-2xl">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            className="w-32 h-32 mb-4"
                            src="https://img.freepik.com/premium-vector/charity-logo-with-love-design-community-love-care_526811-310.jpg?w=1060"
                            alt="Altruify Logo"
                        />
                        <h1 className="text-4xl text-[#89216b] font-bold">ALTRUIFY</h1>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Login to your account</h1>
                    <Form className="flex flex-col gap-4" layout="vertical" onFinish={onSubmit}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Please enter your Email!" }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Please enter your password!" }]}
                        >
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} className="mt-4">
                            Login
                        </Button>
                        <span className="text-sm mt-2">
                            Don't have an account? <Link to="/Register">Register</Link>
                        </span>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;