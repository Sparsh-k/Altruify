import { MenuProps, Dropdown, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import usersStore, { UsersStoreProps } from "../store/users-store";
import { CircleUserRound } from 'lucide-react';

function Header() {

    const { currentUser } = usersStore() as UsersStoreProps;
    const navigate = useNavigate();
    const onLogout = () => {
        Cookies.remove("token");
        message.success("Logged out Successfully");
        navigate("/login");
    }

    const adminMenuItems: MenuProps["items"] = [
        {
            key: "1",
            label: <Link to="/admin/donations">Donations</Link>,
        },
        {
            key: "2",
            label: <Link to="/admin/campaigns">Campaigns</Link>,
        },
        {
            key: "3",
            label: <Link to="/admin/users">Users</Link>,
        },
        {
            key: "4",
            label: <Link to="/admin/reports">Reports</Link>,
        },
        {
            key: "5",
            label: <span onClick={onLogout}>Logout</span>,
        },
    ];

    const userMenuItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to="/user/profile">Profile</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/user/donations">Donations</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to="/user/reports">Reports</Link>
            ),
        },
        {
            key: '4',
            label: (
                <span
                    onClick={onLogout}>
                    Logout
                </span>
            ),
        },

    ];

    const menuItemsToUse: any[] = currentUser?.isAdmin ? adminMenuItems : userMenuItems;
    return (
        <div className="bg-teal-950 flex justify-between items-center p-4 shadow-lg">
    {/* Logo with hover effect */}
    <h1 className="text-4xl font-extrabold text-white cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => navigate("/")}>
        Altruify
    </h1>

    {/* Navigation Menu aligned to the right */}
    <nav className="flex space-x-8 ml-auto p-4">
        <a href="#about-us" className="text-white text-lg hover:text-teal-300 transition-colors">About Us</a>
        <a href="#contact-us" className="text-white text-lg hover:text-teal-300 transition-colors">Contact Us</a>
    </nav>

    {/* Dropdown Button */}
    <Dropdown menu={{ items: menuItemsToUse }} placement="bottom">
        <Button 
            size="middle" 
            icon={<CircleUserRound size={18} />} 
            className="bg-teal-600 transition-colors shadow-md"
        >
            {currentUser?.name}
        </Button>
    </Dropdown>
</div>
    )
}

export default Header;