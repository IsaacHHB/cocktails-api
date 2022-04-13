document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
    let drink = document.querySelector('input').value
    let intervalID = setInterval(getDrink, 2000)

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks[0])
            let choice = Math.floor(Math.random() * data.drinks.length)
                {
                    document.querySelector('h2').innerText = data.drinks[choice].strDrink
                    document.querySelector('img').src = data.drinks[choice].strDrinkThumb
                    document.querySelector('h3').innerText = data.drinks[choice].strInstructions
                } 
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
