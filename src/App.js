import React from "react";
import axios from "axios";
import Input from "./conponents/Input";
import Users from './conponents/Users'

import "./style.css";

function App() {
	const [users, setUsers] = React.useState([]);
	const [inputValue, setInputValue] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	async function getFetch(e) {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await axios.get(`https://api.github.com/users/${inputValue}`);
			setLoading(false);
			setUsers(res.data);
		} catch (error) {
			setLoading(false);
			alert(`Пользователь "${inputValue}" не найден`);
		}
	}

	return (
		<div id='app'>
			<div className='app-container'>
				<Input
					getFetch={getFetch}
					inputValue={inputValue}
					setInputValue={setInputValue}
					loading={loading}
				/>
				<Users users={users} />
			</div>
		</div>
	);
}

export default App;
