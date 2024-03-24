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