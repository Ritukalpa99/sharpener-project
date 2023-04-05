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
  //   axios
  //     .post(
  //       "https://crudcrud.com/api/5e6312f37b7041febc10480daceb55ec/AppointmentData/",
  //       obj
  //     )
  //     .then()
  //     .catch((err) => console.log(err));
  // console.log(obj);
  saveDetails(obj);
  showDetails(obj);
  form.reset();
}
const saveDetails = async (obj) => {
  try {
    const data = await axios.post(
      "https://crudcrud.com/api/429de822cef44c0e9bb22d42bb6b98f3/CandyData",
      obj
    );
  } catch (err) {
    console.log(err);
  }
};

const getDetails = async (id) => {
  try {
    const res = await axios.get(
      `https://crudcrud.com/api/429de822cef44c0e9bb22d42bb6b98f3/CandyData/${id}`
    );
    console.log(res.data);
    // const { _id,name, desc, price, quantity} = await res.data;
    // console.log(_id,name, desc, price, quantity);
    // return data;
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await axios.get(
      "https://crudcrud.com/api/429de822cef44c0e9bb22d42bb6b98f3/CandyData"
    );

    for (let i = 0; i < res.data.length; i++) {
      showDetails(res.data[i]);
    }
  } catch (err) {
    console.log(err);
  }
});

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
      // const res = await axios.get(
      //     `https://crudcrud.com/api/429de822cef44c0e9bb22d42bb6b98f3/CandyData/${_id}`
      //   );
      const newObj = {
        _id: _id,
        name: name,
        desc: desc,
        price: price - 1,
        quantity: quantity,
      };
      const update = await axios.put(
        `https://crudcrud.com/api/429de822cef44c0e9bb22d42bb6b98f3/CandyData/${_id}`,
        newObj
      );
      // console.log(newObj);
      /*const del = await axios.delete(
      `https://crudcrud.com/api/429de822cef44c0e9bb22d42bb6b98f3/CandyData/${_id}`
    );*/

      /*const updateData = await saveDetails(newObj);*/
    } catch (err) {
      console.log(err);
    }
  };

  addTwo.append(document.createTextNode("Buy Two"));
  addTwo.className = "btn btn-info m-2 float-end";
  addTwo.onclick = () => {
    // axios
    //   .get(
    //     `https://crudcrud.com/api/5e6312f37b7041febc10480daceb55ec/AppointmentData/${_id}`
    //   )
    //   .then((res) => {
    //     const { name, desc, price } = res.data;
    //     let n = document.getElementById("name");
    //     let e = document.getElementById("desc");
    //     let p = document.getElementById("price");
    //     n.value = name;
    //     e.value = desc;
    //     p.value = price;
    //   })
    //   .catch((err) => console.log(err));
    // axios
    //   .delete(
    //     `https://crudcrud.com/api/5e6312f37b7041febc10480daceb55ec/AppointmentData/${_id}`
    //   )
    //   .then((res) => ul.removeChild(li))
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  li.appendChild(addOne);
  li.appendChild(addTwo);
  li.className = "list-group-item";
  ul.appendChild(li);
}
