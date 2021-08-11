'use strict';
console.log('js file is connected');

let imageElements = document.getElementsByTagName('img');
console.log('image elements', imageElements);

let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;
let rounds = 15;
let allProducts = [];

// 1. data to persistently track totals voted btwn pg refreshes

// 2. implement locl strg into ur current app

// 3. store prdcts array into local strg as a formatted JSON string

// 4. retrieve from local storage

// 5. then utilize the JSON.Parse ()

// Create a constructor function 
// Name of the product
// File path of image
// Times the image has been shown


function Product(pname, imgsrc) {
    this.pname= pname;
    this.imgsrc = imgsrc;
    this.timesClicked = 0;
    this.timesShown = 0;
    allProducts.push(this);
}
console.log(allPizzas);

function getProductArray(nameOfProperty){
    let answer = [];
    for(let i = 0; i < allProducts.length; i++){
        answer[i] = allProducts[i][nameOfProperty];
    }
    console.log(answer);
    return answer;
}
// add persistence

// if (timesClicked) {
//     this.timesClicked = timesClicked;
// } else {
//     this.timesClicked = 0;
// }


//     this.timesClicked = 0;

//     this.timesShown = 0;
// ;

// Create an algorithm that will randomly generate three unique product images from the images
//  directory and display them side-by-side-by-side.


// let savedVoteString = localStorage.getItem('savedVotes');
// console.log('object string', savedVoteString);


// once we have objects we run them thru constrctr function so they are vote?/product? objects

// if(savedVoteString){
//     let arrayOfNotProductObject = JSON.parse(savedVoteString);
//     console.log('if condition what is our type ', arrayOfNotProductObject);
//         for(let j = 0; j < arrayOfNotProductObject.length; j++){
//           new Product(
//               arrayOfNotProductObject[j].Pname,
//               arrayOfNotProductObject[j].imgsrc,
//               arrayOfNotProductObject[j].timesClicked,
//               arrayOfNotProductObject[j].timesShown

//            );  
//         }
// }


new  Product('bag', 'assets/bag.jpg');
new  Product('banana', 'assets/banana.jpg');
new  Product('bathroom', 'assets/bathroom.jpg');
new  Product('boots', 'assets/boots.jpg');
new  Product('breakfast', 'assets/breakfast.jpg');
new  Product('bubblegum', 'assets/bubblegum.jpg');
new  Product('chair', 'assets/chair.jpg');
new  Product('cthulhu', 'assets/cthulhu.jpg');
new  Product('dog-duck', 'assets/dog-duck.jpg');
new  Product('dragon', 'assets/dragon.jpg');
new  Product('pen', 'assets/pen.jpg');
new  Product('pet-sweep', 'assets/pet-sweep.jpg');
new  Product('scissors', 'assets/scissors.jpg');
new  Product('shark', 'assets/SharedWorker.jpg');
new  Product('sweep', 'assets/sweep.png');
new  Product('tauntaun', 'assets/tauntaun.jpg');
new  Product('unicorn', 'assets/unicorn.jpg');
new  Product('water-can', 'assets/water-can.jpg');
new  Product('wine-glass', 'assets/wine-glass.jpg');

let totalClicks = 0;

function imageWasClicked(event){
    totalClicks++;

    if(event.srcElement.id === '1'){
        allProducts[productIndex1].timesClicked++;
    }   else if(event.srcElement.id === '2'){
        allProducts[productIndex2].timesClicked++;
    }   else if(event.srcElement.id === '3'){
        allProducts[productIndex3].timesClicked++;
    }


// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.



// Once the users ‘clicks’ a product, 
// generate three new products for the user to pick from.

// As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.

// In the constructor function define a property to hold the number of times a product has been clicked.

// After every selection by the viewer, update the newly added property to reflect if it was clicked.

let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

while(
    (nextProductIndex1 === productIndex1) || (nextProductIndex1 === productIndex2) || (nextProductIndex1 === productIndex3) || (nextProductIndex1 === nextProductIndex2) || (nextProductIndex1 === nextProductIndex3)){
    nextProductIndex1 = math.floor(Math.random() * allProducts.length)
}
while(
    (nextProductIndex2 === productIndex1) || (nextProductIndex2 === productIndex2) || (nextProductIndex2 === productIndex3) || (nextProductIndex2 === nextProductIndex1) || (nextProductIndex2 === nextProductIndex3)){
    nextProductIndex2 = math.floor(Math.random() * allProducts.length)
}
while(
    (nextProductIndex3 === productIndex1) || (nextProductIndex3 === productIndex2) || (nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex1) || (nextProductIndex3 === nextProductIndex2)){
    nextProductIndex3 = math.floor(Math.random() * allProducts.length);
}

productIndex1 = nextProductIndex1;
productIndex2 = nextProductIndex2;
productIndex3 = nextProductIndex3;


imageElements[0].src = allProducts[productIndex1].imgsrc;
allProducts[productIndex1].timesShown++;

imageElements[1].src = allProducts[productIndex2].imgsrc;
allProducts[productIndex2].timesShown++;

imageElements[2].src = allProducts[productIndex3].imgsrc;
allProducts[productIndex3].timesShown++;

if(totalClicks >= rounds){
    let footerElement = document.getElementsByTagName('footer');
    if(footerElement.firstChildElement){
        footerElement.firstChildElement.remove();
    }
    footerElement.textContent = 'Good choices!';

    let asideUL = document.getElementById('Picks');

// count total clicks vs rounds
// create li tiems to show image info on clicks and display the %s

        for(let i = 0; i < allProducts.length; i++){
            let picksListItem = document.createElement('li');
            picksListItem.textContent =   `${allProducts[i].name} was clicked on ${allProducts[i].timesClicked} times and was shown ${allProducts[i].timesShown} times `;
            asideUL.appendChild(picksListItem);

            let percentageListItem = document.createElement('li');
            let math;
            if(allProducts[i].timesClicked === 0){
                math = `Zero click and shown ${allProducts[i].timesShown} times. Must be trash.`;
            } else {
                math = Math.round(((allProducts[i]['timesClicked']/ allProducts[i]['timesShwon']).toFixed(2) * 100)) + '%';
            }
            percentageListItem.textContent = `${allProducts[i].name} percentage of times clicked on vs times shown is ` + math;
            asideUL.appendChild(percentageListItem);
        }

        for(let i = 0; i < imageElements.length; i++){
            imageElements[i].removeEventListener('click', imageWasClicked);
            console.log('Hello there!');
        }
        runMyChartsNow();
    }
}
Function runMyChartsNow(){
    let ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: getProductArray('pname'),
            datasets: [{
                label: '# of votes',
                data: getProductArray('timesClicked'),
                backgroundColor: [

                ],
                borderColor: [


                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    } );
}

for(let i = 0; i < imageElements.length; i ++){
    imageElements[i].addEventListener('click', imageWasClicked);
    console.log('Hello there!');
}

if(totalClicks >= rounds){
    localStorage.setItem();
}

// control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

// list item report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.

// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds remove the event listeners on the product.

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times
//  seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product.