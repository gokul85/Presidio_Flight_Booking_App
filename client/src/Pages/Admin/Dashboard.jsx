import React, { useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('role') !== "admin") {
            toast.error("You are not authorized to access this page")
            navigate('/');
        }
    }, []);
    return (
        <>
            {localStorage.getItem('role') !== "admin" ? null : (
                <>
                    <AdminNavbar />
                    <Outlet />
                </>)
            }
        </>
    )
}

export default Dashboard