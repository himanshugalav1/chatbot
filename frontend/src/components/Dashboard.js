import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
	const [city, setCity] = useState('');
	const [customerType, setCustomerType] = useState('');
	const [gender, setGender] = useState('');

	return (
		<div className="dashboard-container">
			<div className="sidebar">
				<div className="sidebar-container">
					<h2 className='filter-here'>Filter Here:</h2>
					<div className="filter-section">
						<label className="label">
							Select the City:
							<select onChange={(e) => setCity(e.target.value)} value={city}>
								<option value="">All</option>
								<option value="Yangon">Yangon</option>
								<option value="Naypyitaw">Naypyitaw</option>
								<option value="Mandalay">Mandalay</option>
							</select>
						</label>
						<label className="label">
							Select the Customer Type:
							<select onChange={(e) => setCustomerType(e.target.value)} value={customerType}>
								<option value="">All</option>
								<option value="Member">Member</option>
								<option value="Normal">Normal</option>
							</select>
						</label>
						<label className="label">
							Select the Gender:
							<select onChange={(e) => setGender(e.target.value)} value={gender}>
								<option value="">All</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</label>
					</div>
				</div>
			</div>

			<div className="main-content">
				<div className="table-header">
					<h1 className="title"><FontAwesomeIcon icon={faChartLine} /> &nbsp; Sales Dashboard</h1>
				</div>
				<hr />

			</div>
		</div>
	);
};

export default Dashboard;
