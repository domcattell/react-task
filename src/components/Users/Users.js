import React, { useContext, useEffect } from 'react';
import { UsersActions, UsersContext } from '../../actions/users.context';
import Loading from '../Layout/Loading';
import GridContainer from '../Layout/GridContainer';
import UserCard from './UserCard';

const Users = () => {
	const { users, loadingUsers } = useContext(UsersContext);
	const { getUsers } = useContext(UsersActions);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			{loadingUsers ? (
				<Loading title="All Users" />
			) : (
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
			)}
		</div>
	);
};

export default Users;
