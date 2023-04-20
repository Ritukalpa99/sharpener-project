const form = document.getElementById("my-form");

form.addEventListener("submit", formSubmit);



function formSubmit(e) {
  e.preventDefault();
  let amount = document.getElementById("amount").value;
  let desc = document.getElementById("desc").value;
  let category = document.getElementById("category").value;
  let data = {
    amount: amount,
    desc: desc,
    category: category,
  };

  saveDetails(data);
  showDetails(data);
  form.reset();
}

const refresh = async () => {
  try {
    const res = await axios.get(
      "https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/sellerAdmin"
    );
    
    for (let i = 0; i < res.data.length; i++) {
      showDetails(res.data[i]);
    }
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("DOMContentLoaded", refresh);

const saveDetails = async (obj) => {
  try {
    const data = await axios.post(
      "https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/sellerAdmin",
      obj
    );
  } catch (err) {
    console.log(err);
  }
};

function showDetails(data) {
  const { _id,amount, desc, category } = data;
  let display = `${amount} ${desc} ${category}`;
  let ul = document.getElementById(`${category}`);
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(display));
  
  let deleteBtn = document.createElement("button");

  deleteBtn.className = "delete btn btn-danger m-2 float-end";
  deleteBtn.appendChild(document.createTextNode("delete"));
  deleteBtn.onclick = async () => {
    try {
        const del = await axios.delete(`https://crudcrud.com/api/17180b2d4c9e4f90a3af4307b34043ed/sellerAdmin/${_id}`)
        ul.removeChild(li);
    }
    catch (err) {
        console.log(err);
    }
  };

  li.appendChild(deleteBtn);
  li.className = "list-group-item";
  ul.appendChild(li);
}
