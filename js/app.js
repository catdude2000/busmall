'use strict';
console.log('js file is connected');

let imageElements = document.getElementsByTagName('img');
console.log('image elements', imageElements);

let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;
let rounds = 25;
let allProducts = [];

// 1. data to persistently track totals voted btwn pg refreshes

// 2. implement locl strg into ur current app

// 3. store prdcts array into local strg as a formatted JSON string

// 4. retrieve from local storage

// 5. then utilize the JSON.Parse ()


function Product(pname, imgsrc, timesClicked, timesShown) {
    this.pname= pname;
    this.imgsrc = imgsrc;
    // this.timesClicked = 0;
    // this.timesShown = 0;
    // allProducts.push(this);
    if (timesClicked) {
        this.timesClicked = timesClicked;
    } else {
        this.timesClicked = 0;
    }
    if(timesShown) {
        this.timesShown = timesShown;
    } else {
        this.timesShown = 0;
    }
    allProducts.push(this);
}
console.log(allProducts);

function getProductArray(nameOfProperty){
    let answer = [];
    for(let i = 0; i < allProducts.length; i++){
        answer[i] = allProducts[i][nameOfProperty];
    }
    console.log(answer);
    return answer;
}


let savedVoteString = localStorage.getItem('picks');
console.log('object string', savedVoteString);

// once we have objects we run them thru constrctr function so they are vote?/product? objects

if(savedVoteString){
    let arrayOfNotProductObject = JSON.parse(savedVoteString);
    console.log('if condition what is our type ', arrayOfNotProductObject);
        for(let j = 0; j < arrayOfNotProductObject.length; j++){
          new Product(
              arrayOfNotProductObject[j].pname,
              arrayOfNotProductObject[j].imgsrc,
              arrayOfNotProductObject[j].timesClicked,
              arrayOfNotProductObject[j].timesShown
           );  
        }
} else {


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
new  Product('shark', 'assets/shark.jpg');
new  Product('sweep', 'assets/sweep.png');
new  Product('tauntaun', 'assets/tauntaun.jpg');
new  Product('unicorn', 'assets/unicorn.jpg');
new  Product('water-can', 'assets/water-can.jpg');
new  Product('wine-glass', 'assets/wine-glass.jpg');
}
allProducts[0].timesShown = 1;
allProducts[1].timesShown = 1;



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

let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

console.log('next product index one is from random ', nextProductIndex1)

while(
    (nextProductIndex1 === productIndex1) || (nextProductIndex1 === productIndex2) || (nextProductIndex1 === productIndex3) || (nextProductIndex1 === nextProductIndex2) || (nextProductIndex1 === nextProductIndex3)){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length)
}
while(
    (nextProductIndex2 === productIndex1) || (nextProductIndex2 === productIndex2) || (nextProductIndex2 === productIndex3) || (nextProductIndex2 === nextProductIndex1) || (nextProductIndex2 === nextProductIndex3)){
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length)
}
while(
    (nextProductIndex3 === productIndex1) || (nextProductIndex3 === productIndex2) || (nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex1) || (nextProductIndex3 === nextProductIndex2)){
    nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
}

productIndex1 = nextProductIndex1;
productIndex2 = nextProductIndex2;
productIndex3 = nextProductIndex3;
console.log('now the product Index at 1 after new assignment', productIndex1);


imageElements[0].src = allProducts[productIndex1].imgsrc;
allProducts[productIndex1].timesShown++;

imageElements[1].src = allProducts[productIndex2].imgsrc;
allProducts[productIndex2].timesShown++;

imageElements[2].src = allProducts[productIndex3].imgsrc;
allProducts[productIndex3].timesShown++;

if(totalClicks >= rounds){
    localStorage.setItem('savedVotes', JSON.stringify(allProducts));
    // let asideUL = document.getElementById('voteResults');



    // let footerElement = document.getElementsByTagName('footer');
    // if(footerElement.firstChildElement){
    //     footerElement.firstChildElement.remove();
    // }
    // footerElement.textContent = 'Good choices!';

    let asideUL = document.getElementById('Picks');

// create li tiems to show image info on clicks and display the %s

        for(let i = 0; i < allProducts.length; i ++){
            let picksListItem = document.createElement('li');
            picksListItem.textContent =   `${allProducts[i].pname} was clicked on ${allProducts[i].timesClicked} times and was shown ${allProducts[i].timesShown} times `;
            asideUL.appendChild(picksListItem);

            let percentageListItem = document.createElement('li');
            let math;
            if(allProducts[i].timesClicked === 0){
                math = `zero clicks and shown ${allProducts[i].timesShown} times. We'll work on it!.`;
                console.log('math', math)
            } else {
                math = Math.round(((allProducts[i]['timesClicked']/ allProducts[i]['timesShown']).toFixed(2) * 100)) + '%';
            }
            percentageListItem.textContent = `${allProducts[i].pname} percentage of times clicked on vs times shown is ` + math;
            asideUL.appendChild(percentageListItem);
        }

        for(let i = 0; i < imageElements.length; i++){
            imageElements[i].removeEventListener('click', imageWasClicked);
            console.log('Hello there!');
        }
        runMyChartsNow();
    }
}

function runMyChartsNow(){
    let ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: getProductArray('pname'),
            datasets: [{
                label: '# of votes',
                data: getProductArray('timesClicked'),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'

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
// if(totalClicks >= rounds){
//     localStorage.setItem();
// }
