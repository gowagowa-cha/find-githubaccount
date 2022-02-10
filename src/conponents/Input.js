import React from "react";

function Input({ inputValue, getFetch, setInputValue, loading }) {
	return (
		<form onClick={(e) => e.preventDefault()} className='app-form'>
			<input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				type='text'
				className='app-input'
				placeholder="Укажите GitHub-аккаунт например: 'gowagowa-cha'"
			/>
			<button onClick={getFetch} className='app-form_btn'>
				{loading ? "Загрузка..." : "Найти"}
			</button>
		</form>
	);
}

export default Input;
