const apiUrl = 'https://reqres.in/api';

function load() {
  const url = `${apiUrl}/users`

  return fetch(url)
    .then(res => {
      // Not a 200 response
      if(!res.ok) { 
        throw new Error(`API returned status code ${res.status}`);
      }
      return res.json();
    })
    .then(res => res.data)
    .catch(err => {
      console.warn(err);
    })
}

module.exports.load = load;