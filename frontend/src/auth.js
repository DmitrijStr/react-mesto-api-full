// export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3008'}`;
export const BASE_URL = '//localhost:3008';

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

const register = (email, password) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email, password
		})
	})
		.then(checkResponse)
}

const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ password, email })
	})
		.then(checkResponse)
}

const getContent = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
		.then(checkResponse)
}

const getInitialCards = (token) => {
	return fetch(`${BASE_URL}/cards`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then(checkResponse)
}

const postCard = (token, newCard) => {
	return fetch(`${BASE_URL}/cards`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		body: JSON.stringify({
			name: newCard.name,
			link: newCard.link
		})
	}).then(checkResponse)
}

const patchUserInfo = (token, newData) => {
	return fetch(`${BASE_URL}/users/me/`, {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		body: JSON.stringify({
			name: newData.name,
			about: newData.about
		})
	}).then(checkResponse)
}

const patchAvatar = (token, newData) => {
	return fetch(`${BASE_URL}/users/me/avatar`, {
		method: 'PATCH',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		body: JSON.stringify({
			avatar: newData.avatar
		})
	}).then(checkResponse)
}

const putLike = (token, id) => {
	return fetch(`${BASE_URL}/cards/${id}/likes`, {
		method: 'PUT',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
	})
		.then(checkResponse)
}

const removeLike = (token, id) => {
	return fetch(`${BASE_URL}/cards/${id}/likes`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
	})
		.then(checkResponse)
}

const deleteCard = (token, id) => {
	return fetch(`${BASE_URL}/cards/${id}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
	})
		.then(checkResponse)
}


export { register, authorize, getContent, getInitialCards, postCard, patchUserInfo, patchAvatar, putLike, removeLike, deleteCard };