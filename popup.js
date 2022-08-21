const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e18eef537emshd92614120812e12p1b5e97jsne69c0f666fae',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));