'use strict'

let voteCount = 25;
let productArray = [];

let imageContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-One');
let imgTwo = document.getElementById('img-two');

let resultBtn = document.getElementById('show-result-btn');
let resultContainer = document.getElementById('results-container');

let chartContext = document.getElementById('my-chart').getContext('2d');

function handleShowChart() {
    if (voteCount === 0) {// todo remove event listeners from images}
      let qbNames = [];
      let qbViews = [];
      let qbClicks = [];
  
      for (let i = 0; i < qbArray.length; i++) {
        qbNames.push(qbArray[i].name);
        qbViews.push(qbArray[i].views);
        qbClicks.push(qbArray[i].clicks);
      }
      let chartConfig = {
        type: 'bar',
        data: {
          labels: qbNames,
          datasets: [{
            label: '# of Views',
            data: qbViews,
            backgroundColor: 'yellow',
          }, {
            label: '# of Clicks',
            data: qbClicks,
            backgroundColor: 'aqua',
          }],
        },
        options: {},
      };
      let myChart = new Chart(chartContext, chartConfig);
      resultsBtn.removeEventListener('click', handleShowChart);
    };

function randomProduct() {
    return Math.floor(Math.random() * qbArray.length);
}
  
let indexArray = [];
let previousArray = [];

function uniqueImgChecker() {
    while (indexArray.length < 2) {
        let randomImg = randomQb();
        while (indexArray.includes(randomImg) || previousArray.includes(randomImg)) {
            randomImg = randomQb();
        }
        indexArray.push(randomImg);
        previousArray.push(randomImg);
        console.log(indexArray, previousArray);
        if (previousArray.length >= 4) {
            previousArray.shift();
        }
    }
    return (indexArray);
}


function Qb(name, fileExtension = 'jpeg') {
    this.name = name;
    this.imagePath = `img/${name}.${fileExtension}`;
    this.clicks = 0;
    this.views = 0;
  }
  
  Qb.prototype.myMethod = function () {
    return `hello I'm ${this.name}`;
  };
  
  // #pragma Executable
  
  // MORE LOCAL STORAGE CODE
  // STEP 3: PULL STAT OUT OF LOCAL STORAGE
  let retrievedQb = localStorage.getItem('voteQb');
  console.log('retrievedQb >>>>>', retrievedQb);
  
  // STEP 4: PARSE DATA INTO CODE SO APP CAN SEE
  let parsedQb = JSON.parse(retrievedQb);
  console.log('parsedQb >>>>>>>>', parsedQb);
  
  if (parsedQb) {
    productArray = parsedQb;
  } else {
    let rodgers = new Qb('ar');
    let brady = new Qb('brady');
    let brees = new Qb('brees');
    let dan = new Qb('dan');
    let elway = new Qb('elway');
    let joe = new Qb('joe');
    let mahomes = new Qb('mahomes');
    let manning = new Qb('manning');
    let roger = new Qb('roger');
    let young = new Qb('young');
    
    productArray.push(rodgers, brady, brees, dan, elway, joe, mahomes, manning, roger, young);
  }
  console.log('productArray after construction >>>', productArray);