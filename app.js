'use strict'

// #pragma Globals

let voteCount = 25;
let productArray = [];


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
  console.log('parsedProducts >>>>>>>>', parsedQb);
  
  if (parsedQb) {
    productArray = parsedQb;
  } else {
    let rodgers = new Products('ar');
    let brady = new Products('brady');
    let brees = new Products('brees');
    let dan = new Products('dan');
    let elway = new Products('elway');
    let joe = new Products('joe');
    let mahomes = new Products('mahomes');
    let manning = new Products('manning');
    let roger = new Products('roger');
    let young = new Products('young');
    
    productArray.push(rodgers, brady, brees, dan, elway, joe, mahomes, manning, roger, young);
  }
  console.log('productArray after construction >>>', productArray);