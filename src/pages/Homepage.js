import React from 'react';
import Header from '../components/Layout/Header';
import Users from '../components/Users/Users';

//renders Users component displaying a list of users from API
const Index = () => {
	return (
		<>
			<Header title="All Users"/>
			<Users />
		</>
	);
};

export default Index;
