import React from "react";

function Users({ users }) {
	console.log("users", users);

	return (
		Object.keys(users).length !== 0 && (
			<div className='app-user'>
				<div className='app-user_info'>
					<div className='app-user_image'>
						<img src={users.avatar_url} alt='logo' />
					</div>
					<div className='app-user_data'>
						<h1 className='app-user_name'>
							{users.name}
							<span>{users.login}</span>
						</h1>
						<p className='app-user_about'>
							{users.bio}
						</p>
					</div>
				</div>
				<ul className='app-user_stats'>
					<li className='app-user_stats-item'>
						Репозитории
						<span>{users.public_repos}</span>
					</li>
					<li className='app-user_stats-item'>
						Подписчиков
						<span>{users.followers}</span>
					</li>
					<li className='app-user_stats-item'>
						Звёзд
						<span>{users.following}</span>
					</li>
				</ul>
				<ul className='app-user_location'>
					<li className='app-user_location-item'>{users.location}</li>
					<li className='app-user_location-item'>
						<a href={`${users.html_url}`}>{users.html_url}</a>
					</li>
				</ul>
			</div>
		)
	);
}

export default Users;
