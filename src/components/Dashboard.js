import React from 'react';

const Dashboard = ({ totalRevenue }) => {
    return (
        <div className="dashboard">
            <h2>Total Revenue</h2>
            <p>Basic: ${totalRevenue.basic.toFixed(2)}</p>
            <p>Premium: ${totalRevenue.premium.toFixed(2)}</p>
            <p>Executive: ${totalRevenue.executive.toFixed(2)}</p>
            <p>Team: ${totalRevenue.team.toFixed(2)}</p>
        </div>
    );
};

export default Dashboard;
