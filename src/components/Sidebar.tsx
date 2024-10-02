import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 bg-blue-800 min-h-screen p-4">
            <div className="flex items-center justify-center mb-8">
                <img src="/path/to/avatar.png" alt="Avatar" className="w-16 h-16 rounded-full" />
                <div className="ml-4 text-white">
                    <h2>Đỗ Nhật</h2>
                    <p>Jira Clone 2.0</p>
                </div>
            </div>
            <nav className="space-y-2">
                <Link to="/kanban" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Kanban Board</Link>
                <Link to="/create-projects" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Create Projects</Link>
                <Link to="/project-management" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Project Management</Link>
                <Link to="/releases" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Releases</Link>
                <Link to="/issues" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Issues and Filters</Link>
                <Link to="/pages" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Pages</Link>
                <Link to="#" className="block text-white py-2 px-4 rounded bg-gray-600">NOT IMPLEMENTED</Link>
                <Link to="/components" className="block text-white py-2 px-4 rounded hover:bg-blue-700">Components</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
