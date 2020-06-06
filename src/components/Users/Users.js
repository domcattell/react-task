import React, { useContext, useEffect, memo } from 'react';
import { UsersActions, UsersContext } from '../../actions/users.context';
import Loading from '../Layout/Loading';
import GridContainer from '../Layout/GridContainer';
import UserCard from './UserCard';
import Error from '../Layout/Error';

const Users = () => {
	const { users, loadingUsers, usersError, usersMsg } = useContext(UsersContext);
	const { getUsers, resetError } = useContext(UsersActions);

	useEffect(() => {
		getUsers()
	}, [getUsers]);

	return (
		<div>
			<Error reset={resetError} error={usersError} message={usersMsg}/>
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

export default memo(Users);
