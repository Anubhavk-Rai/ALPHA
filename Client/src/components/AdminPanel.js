import React from 'react';

function AdminPanel() {
    return (
        <div className="container">
            <h1>Admin Panel</h1>
            <ul>
                <li><a href="/admin/courses">Manage Courses</a></li>
                <li><a href="/admin/users">Manage Users</a></li>
            </ul>
        </div>
    );
}

export default AdminPanel;
