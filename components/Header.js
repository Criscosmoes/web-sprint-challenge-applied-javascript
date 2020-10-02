// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function HeaderMaker() {

    const mainDiv = document.createElement('div'); 
    mainDiv.classList.add('header'); 

    const span = document.createElement('span');
    span.classList.add('date'); 
    span.textContent = 'MARCH 28, 2019'; 

    mainDiv.appendChild(span); 

    const h1 = document.createElement('h1'); 
    h1.textContent = 'Lambda Times'; 

    mainDiv.appendChild(h1); 

    const span2 = document.createElement('span'); 
    span2.classList.add('temp'); 
    span2.textContent = '98°'; 

    mainDiv.appendChild(span2); 


    return mainDiv; 
}


const headerContainer = document.querySelector('.header-container'); 

const header = HeaderMaker(); 


headerContainer.appendChild(header); 
