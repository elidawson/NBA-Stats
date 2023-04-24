document.addEventListener('DOMContentLoaded', () => { 

const url = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021';
const options = { // declaring the options for the get request
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'cd31b3d6f5msh3ddc4783abc2071p1ae416jsn4958d92b9184',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


})