//-----------SourDough---------------------------//

const sourDoughFlour = document.getElementById("userInput");
const sourDoughWater = document.getElementById("water");
const sourDoughStarter = document.getElementById("starter");
const sourDoughSalt = document.getElementById("salt");

function sourDough() {
  let water = (70 / 100) * sourDoughFlour.value;
  let starter = (20 / 100) * sourDoughFlour.value;
  let salt = (3 / 100) * sourDoughFlour.value;
  console.log(water);
  console.log(salt);
  console.log(starter);

  sourDoughWater.innerText = `Water: ${Math.floor(water)}ml`;
  sourDoughStarter.innerText = `Starter: ${Math.floor(starter)}g`;
  sourDoughSalt.innerText = `Salt: ${Math.floor(salt * 10) / 10}g`;
}
//-----------Pizza-Dough---------------------------//

const pizzaDoughFlour = document.getElementById("pizzaInput");
const pizzaDoughWater = document.getElementById("pizzaWater");
const pizzaDoughSalt = document.getElementById("pizzaSalt");
function pizzaDough() {
  let pizzaWater = (70 / 100) * pizzaDoughFlour.value;
  let pizzaSalt = (3 / 100) * pizzaDoughFlour.value;
  console.log(pizzaWater);
  console.log(pizzaSalt);

  pizzaDoughWater.innerText = `Water: ${Math.floor(pizzaWater)}ml`;
  pizzaDoughSalt.innerText = `Salt: ${Math.floor(pizzaSalt * 10) / 10}g`;
}

//-----------bagel-Dough---------------------------//
const bagelAmount = document.getElementById("bagelInput");
const bagelDoughFlour = document.getElementById("bagelFlour");
const bagelDoughWater = document.getElementById("bagelWater");
const bagelDoughSalt = document.getElementById("bagelSalt");
function bagelDough() {
  let bagelFlour = bagelAmount.value * 65;
  let bagelWater = (70 / 100) * bagelFlour;
  let bagelSalt = (2.5 / 100) * bagelFlour;

  bagelDoughFlour.innerText = `Flour: ${Math.floor(bagelFlour)}g`;
  bagelDoughWater.innerText = `Water: ${Math.floor(bagelWater)}ml`;
  bagelDoughSalt.innerText = `Salt: ${Math.floor(bagelSalt * 10) / 10}g`;

  console.log(bagelFlour);
}

//-----------chapati-Dough---------------------------//

const chapatiAmount = document.getElementById("chapatiInput");
const chapatiDoughFlour = document.getElementById("chapatiFlour");
const chapatiDoughWater = document.getElementById("chapatiWater");
const chapatiDoughSalt = document.getElementById("chapatiSalt");
function chapatiDough() {
  //
  //
  let chapatiFlour = chapatiAmount.value * 20;
  let chapatiWater = (60 / 100) * chapatiFlour;
  let chapatiSalt = (2.5 / 100) * chapatiFlour;

  chapatiDoughFlour.innerText = `Flour: ${Math.floor(chapatiFlour)}g`;
  chapatiDoughWater.innerText = `Water: ${Math.floor(chapatiWater)}ml`;
  chapatiDoughSalt.innerText = `Salt: ${Math.round(chapatiSalt * 10) / 10}g`;
}

//-----------Naan-Dough---------------------------//

const naanAmount = document.getElementById("naanInput");
const naanDoughFlour = document.getElementById("naanFlour");
const naanDoughWater = document.getElementById("naanWater");
const naanDoughYogurt = document.getElementById("naanYogurt");
const naanDoughSalt = document.getElementById("naanSalt");
function naanDough() {
  //
  //
  let naanFlour = naanAmount.value * 34;
  let naanWater = naanAmount.value * 18;
  let naanYogurt = naanAmount.value * 9;
  let naanSalt = (2.5 / 100) * naanFlour;

  naanDoughFlour.innerText = `Flour: ${Math.floor(naanFlour)}g`;
  naanDoughWater.innerText = `Water: ${Math.floor(naanWater)}ml`;
  naanDoughYogurt.innerText = `Yogurt: ${Math.floor(naanYogurt)}g`;
  naanDoughSalt.innerText = `Salt: ${Math.round(naanSalt * 10) / 10}g`;
}

// CARD fippier

// const buttonLg = document.getElementById("flip-card-lg");
const button = document.getElementById("flip-card");
const card = document.querySelector(".card");

// button.addEventListener("touchstart", function () {
//   card.classList.toggle("flipped");
// });
button.addEventListener("click", function () {
  card.classList.toggle("flipped");
});
