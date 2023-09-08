document.getElementById('button').addEventListener('click', function(e) {

    e.preventDefault()

const name = document.getElementById('name').value;
const lastname = document.getElementById('lastname').value;
const date = document.getElementById('date').value;

const url = 'https://jsonplaceholder.typicode.com/users'
const options = {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
        name: name,
        lastname: lastname,
        date: date,
     })
    };

fetch(url, options)
 .then(response => response.json())
 .then(data => {
    console.log(data)
    document.getElementById('name').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('date').value = "";
    
 });
});