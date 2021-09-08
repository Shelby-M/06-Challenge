var searchButton = document.querySelector('.searchButton')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var description = document.querySelector('.description')
var temperature = document.querySelector('.temperature')

searchButton.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=cfd81dfe705e463575ad950dca403542')
.then(response => response.json())
.then(data => console.log(data))
})
