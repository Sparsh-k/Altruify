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
            message.success("Registered successfully");
            navigate("/login");
        } catch (error: any) {
            message.error(error.response.data.message || error.message);
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
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Register your account</h1>
                    <Form className="flex flex-col gap-4" layout="vertical" onFinish={onSubmit}>
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
    </div>
    )
}

export default RegisterPage;