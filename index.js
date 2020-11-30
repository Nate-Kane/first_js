let guitar0 = { brand: "Fender", model: "Stratocaster", year: "2015", price: 1600 };
let guitar1 = { brand: "Fender", model: "Telecaster", year: "2012", price: 1100 };
let guitar2 = { brand: "Gibson", model: "Les Paul", year: "1985", price: 2500 };

// once I have it working okay, what I would like to do is add a boolean to these hashes
// of either sold TRUE or FALSE and then you can do that in the update method. Would be cool

let state = {
  pageHeader: "Guitar Store - stock",
  guitars: [guitar0, guitar1, guitar2],
};

function renderGuitars() {
  guitarStr = "";
  state.guitars.forEach(function (guitar, index) {
    guitarStr += `
    <div>
      <div class="guitars">
      ${guitar.year} ${guitar.brand} ${guitar.model} &ensp;-&ensp; $${guitar.price}
      </div>
     <br/>
      <div class="buttons">
        <button class="buttons" data-index='${index}' onclick='updateGuitar(this)' >Update</button>
        <button class="buttons" onclick='sellGuitar(${index})'>Sold</button>
      </div>
    <hr size="2" width="500" align="center" color="darkslategray" />
    </div>`;
 });
 return guitarStr;
}

function sellGuitar(clickedIndex) {
  console.log(clickedIndex);
  let sellGuitar = state.guitars.filter(function (guitar, index) {
    console.log("index: ", index);
    console.log("clickedIndex: ", clickedIndex);
    console.log(clickedIndex != index);
    return clickedIndex != index;
  });
  state.guitars = sellGuitar;
  render();
}

function updateGuitar(guitarDiv) {
  let index = guitarDiv.dataset.index;
  let guitar = state.guitars[index];
  console.log(guitar);

  let brand = prompt("What brand is it?");
  guitar.brand = brand;

  let model = prompt("What model?");
  guitar.model = model;

  let year = prompt("What year was it made?");
  guitar.year = year;

  let price = prompt("How much does it cost?");
  guitar.price = price;

  render();
}

function addGuitar() {
  let guitar = {};
  
  let brand = prompt("What brand is it?");
  guitar.brand = brand;

  let model = prompt("What model?");
  guitar.model = model;

  let year = prompt("What year was it made?");
  guitar.year = year;

  let price = prompt("How much does it cost?");
  guitar.price = price;

  state.guitars.push(guitar);

  render();
}

function render() {
  htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  <button onclick='addGuitar()' class="addGuitar">Add a guitar</button>
                  <br/>
                  ${renderGuitars()}
                  </div>`;

  renderGuitars();

  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
}

render();