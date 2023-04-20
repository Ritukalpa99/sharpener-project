const form = document.getElementById("my-form");
form.addEventListener("submit", submitEvent);

function submitEvent(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const desc = event.target.desc.value;
  const price = event.target.price.value;
  const quantity = event.target.quantity.value;
  const obj = {
    name: name,
    desc: desc,
    price: price,
    quantity: quantity,
  };
  
  saveDetails(obj);
  showDetails(obj);
  form.reset();
}
const saveDetails = async (obj) => {
  try {
    const data = await axios.post(
      "https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/CandyData",
      obj
    );
  } catch (err) {
    console.log(err);
  }
};

const getDetails = async (id) => {
  try {
    const res = await axios.get(
      `https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/CandyData/${id}`
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

const refresh = async () => {
  try {
    const res = await axios.get(
      "https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/CandyData"
    );

    for (let i = 0; i < res.data.length; i++) {
      showDetails(res.data[i]);
    }
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", refresh);

function showDetails(obj) {
  const { _id, name, desc, price, quantity } = obj;
  const display = `Name: ${name} Description:${desc} price: ${price} quanitity:${quantity}`;
  const ul = document.getElementById("users");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(display));

  const addOne = document.createElement("button");
  const addTwo = document.createElement("button");
  const addThree = document.createElement("button");

  addOne.className = "btn btn-info m-2 float-end";
  addOne.appendChild(document.createTextNode("Buy One"));
  addOne.onclick = async () => {
    try {
      const newQuantity = String(quantity - 1);
      const newObj = {
        name: name,
        desc: desc,
        price: price,
        quantity: newQuantity,
      };
      const update = await axios.put(
        `https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/CandyData/${_id}`,
        newObj
      );
      while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
      }
      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  addTwo.append(document.createTextNode("Buy Two"));
  addTwo.className = "btn btn-info m-2 float-end";
  addTwo.onclick = async () => {
    try {
      const newQuantity = String(quantity - 2);
      const newObj = {
        name: name,
        desc: desc,
        price: price,
        quantity: newQuantity,
      };
      const update = await axios.put(
        `https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/CandyData/${_id}`,
        newObj
      );
      while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
      }
      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  addThree.append(document.createTextNode("Buy Three"));
  addThree.className = "btn btn-info m-2 float-end";
  addThree.onclick = async () => {
    try {
      const newQuantity = String(quantity - 3);
      const newObj = {
        name: name,
        desc: desc,
        price: price,
        quantity: newQuantity,
      };
      const update = await axios.put(
        `https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/CandyData/${_id}`,
        newObj
      );
      while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
      }
      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  li.appendChild(addThree);
  li.appendChild(addTwo);
  li.appendChild(addOne);
  li.className = "list-group-item";
  ul.appendChild(li);
}
