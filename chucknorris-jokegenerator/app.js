const numOfJokes = document.querySelector('#number');
const form = document.querySelector('#jokegen');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(numOfJokes.value);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numOfJokes.value}`, true);
    xhr.onload = function() {
        var output = "";
        if(this.status === 200) {
            var jokes = this.responseText;
            var jokes = JSON.parse(jokes);  
            jokes.value.forEach(function(joke) {
                const jokeText = joke.joke;
                const jokeEl = `<li>${jokeText}</li>`;
                output = output + jokeEl;
            });
            
            var ul = document.querySelector('.jokes');
            ul.innerHTML = output;
            
        } else {
            
            output = `<li>Something Went Wrong, We are terribly sorry!`;
            var ul = document.querySelector('.jokes');
            ul.innerHTML = output;   
        }
    }
    
    xhr.send();
});