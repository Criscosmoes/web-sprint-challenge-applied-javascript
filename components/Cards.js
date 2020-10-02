// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'; 


const articleMaker = (data) => {


    const mainDiv = document.createElement('div'); 
    mainDiv.classList.add('card'); 


    const div1 = document.createElement('div'); 
    div1.classList.add('headline'); 
    div1.textContent = data.headline; 

    mainDiv.appendChild(div1); 

    const div2 = document.createElement('div'); 
    div2.classList.add('author'); 

    mainDiv.appendChild(div2); 


    const div3 = document.createElement('div');
    div3.classList.add('img-container'); 

    div2.appendChild(div3); 

    const img = document.createElement('img'); 
    img.classList.add(data.id)
    img.src = data.authorPhoto; 


    div3.appendChild(img); 

    const span = document.createElement('span'); 
    span.textContent = data.authorName; 

    div2.appendChild(span); 

    




    return mainDiv; 

}



axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {

    const obj = response.data.articles; 
    const values = Object.values(obj); 
    const merged = [].concat.apply([], values); 

    const cardsContainer = document.querySelector('.cards-container'); 

    console.log(merged); 


    merged.forEach(cur => {

        const article = articleMaker(cur); 
        cardsContainer.appendChild(article);


    })

    document.querySelector('.cards-container').addEventListener('click', (e) => {
        console.log(e.target.textContent); 
    })




})
.catch(error => {
    console.log(error); 
})