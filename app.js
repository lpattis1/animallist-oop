// Input Variables

const animalForm = document.querySelector(".animal-form");
const nameInput = document.querySelector(".animal-input");
const breedInput = document.querySelector(".breed-input");
const typeSelection = document.querySelector(".type-select");

// Row Variable
const outputRow = document.querySelector(".output-area");

animalForm.addEventListener("submit", submitAnimalForm);

class Animal {
  constructor(name, breed, type) {
    this.cardCol = document.createElement("div");
    this.cardCol.className = `col col-lg-3 col-12 mb-3`;

    this.card = document.createElement("div");
    this.card.className = `card animal-card`;

    this.cardImg = document.createElement("img");
    this.cardImg.className = `card-img-top animal-img`;
    this.cardImg.src = `/img/${type}.jpeg`;

    this.cardBody = document.createElement("div");
    this.cardBody.className = `card-body animal-card-body`;

    this.cardList = document.createElement("ul");
    this.cardList.className = `animal-list`;

    this.cardListOptionOne = document.createElement("li");
    this.cardListOptionOne.className = `animal-list-name`;
    this.cardListOptionOne.textContent = name;

    this.cardListOptionTwo = document.createElement("li");
    this.cardListOptionTwo.className = `animal-list-breed`;
    this.cardListOptionTwo.textContent = breed;

    this.cardListOptionThree = document.createElement("li");
    this.cardListOptionThree.className = `animal-list-selection`;
    this.cardListOptionThree.textContent = type;

    this.card.appendChild(this.cardImg);
    this.card.appendChild(this.cardBody);

    this.cardBody.appendChild(this.cardList);
    this.cardList.appendChild(this.cardListOptionOne);
    this.cardList.appendChild(this.cardListOptionTwo);
    this.cardList.appendChild(this.cardListOptionThree);

    this.cardCol.appendChild(this.card);
    outputRow.appendChild(this.cardCol);

    this.name = name;
    this.breed = breed;
    this.type = type;
  }
}

function submitAnimalForm(e) {
  e.preventDefault();

  let name = nameInput.value;
  let breed = breedInput.value;
  let type = typeSelection.options[typeSelection.selectedIndex].textContent;

  const newAnimal = new Animal(name, breed, type);
}
