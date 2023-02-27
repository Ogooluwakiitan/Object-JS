// QUESTION 1
function instagramPost(Handle, content, link, views, likes) {
  this.Handle = Handle;
  this.content = content;
  this.link = link;
  this.views = views;
  this.likes = likes;
}

// Question 2
let post1 = new instagramPost('d_techcentrix', 'digital transformation', 'https://www.instagram.com/p/Co0EvNaDNRb/', 1000, 150);
console.log(post1);
/*
instagramPost {
  Handle: 'd_techcentrix',
  content: 'digital transformation',
  link: 'https://www.instagram.com/p/Co0EvNaDNRb/',
  views: 1000,
  likes: 150
}
*/

let post2 = new instagramPost('9jafoodpot', 'food', 'https://www.instagram.com/p/CofyMJUOJyZ/', 3000, 200);
console.log(post2);
/*
instagramPost {
  Handle: '9jafoodpot',
  content: 'food',
  link: 'https://www.instagram.com/p/CofyMJUOJyZ/',
  views: 3000,
  likes: 200
}
*/


// QUESTION 3
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const personInfo = createPerson("Musa", 19, "Lagos");
console.log(personInfo); //{ name: 'Musa', age: 19, location: 'Lagos' }

// 3b
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}

const jambScores = createJambScores(70, 85, 82, 94);
console.log(jambScores); //{ eng: 70, govt: 85, lit: 82, crk: 94 }

// using Object.assign to add property to an Object
Object.assign(personInfo, jambScores);
console.log({ personInfo });
/*
{
  personInfo: {
    name: 'Musa',
    age: 19,
    location: 'Lagos',
    eng: 70,
    govt: 85,
    lit: 82,
    crk: 94
  }
}
*/

// QUESTION 4
//  Using Object.assign();
const foods = {
  cereal: "Golden Morn",
  pasta: "Spaghetti",
  soup: "Efo riro",
  fruits: "Apple",
};
const typesOfSoups = Object.assign({}, foods);
typesOfSoups.soup = "Egusi";

console.log(foods);
/*
{
  cereal: 'Golden Morn',
  pasta: 'Spaghetti',
  soup: 'Efo riro',
  fruits: 'Apple'
}
*/
console.log({ typesOfSoups });
/*
{
  typesOfSoups: {
    cereal: 'Golden Morn',
    pasta: 'Spaghetti',
    soup: 'Egusi',
    fruits: 'Apple'
  }
}
*/

//  Using Spread Syntax
const typesOfFruits = { ...foods };
typesOfFruits.fruits = "Banana";
console.log({ typesOfFruits });
/*
{
  typesOfFruits: {
    cereal: 'Golden Morn',
    pasta: 'Spaghetti',
    soup: 'Efo riro',
    fruits: 'Banana'
  }
*/

// Using JSON.parse
const typesOfCereal = JSON.parse(JSON.stringify(foods));
typesOfCereal.cereal = "Cornflakes";
console.log({ typesOfCereal });
/*
{
  typesOfCereal: {
    cereal: 'Cornflakes',
    pasta: 'Spaghetti',
    soup: 'Efo riro',
    fruits: 'Apple'
  }
}
*/

// QUESTION 5
const presidentialCandidate = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const property in presidentialCandidate) {
  console.log(`${presidentialCandidate[property]} is the presidential candidate of ${property}`);
}
/*
Omoyele Sowore is the presidential candidate of AAC
Christopher Imumolen is the presidential candidate of ACCORD
Bola Ahmed Tinubu is the presidential candidate of APC
Peter Obi is the presidential candidate of LP
Rabiu Kwankwaso is the presidential candidate of NNPP
Atiku Abubakar is the presidential candidate of PDP
*/
