import React, { useContext, useEffect } from 'react';
import { UsersActions, UsersContext } from '../actions/users.context';
import GridContainer from '../components/Layout/GridContainer';
import UserCard from '../components/Users/UserCard';
import Header from '../components/Layout/Header';
import PageContainer from '../components/Layout/PageContainer';
import data from '../placeholder_data/users.json';

const Index = () => {
	//grabs what's needed from the global state. in this case, the posts state
	//and getUsers action are needed.
	const { users } = useContext(UsersContext);
	const { getUsers } = useContext(UsersActions);

	// calls the getUsers function from global state
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<PageContainer>
			<Header title="All Users"/>
			<GridContainer>
				{users.map((user) => (
					<UserCard
                        key={user.id}
                        id={user.id}				
                        name={user.name}
						username={user.username}
						email={user.email}
						street={user.address.street}
						suite={user.address.suite}
						city={user.address.city}
						zipcode={user.address.zipcode}
						website={user.website}
						phone={user.phone}
						company={user.company.name}
					/>
				))}
			</GridContainer>
		</PageContainer>
	);
};

export default Index;
