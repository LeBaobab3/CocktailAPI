//Example fetch using cocktail api
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('.one').innerText = data.drinks[0].strIngredient1
            document.querySelector('.two').innerText = data.drinks[0].strIngredient2
            document.querySelector('.three').innerText = data.drinks[0].strIngredient3
            document.querySelector('.four').innerText = data.drinks[0].strIngredient4




        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}
