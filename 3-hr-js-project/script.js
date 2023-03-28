let form = document.getElementById('my-form');

form.addEventListener('submit', saveDetails);

function saveDetails(e) {
    e.preventDefault();
    let amount = document.getElementById('amount').value;
    let desc = document.getElementById('desc').value;
    let category = document.getElementById('category').value;
    let data = {
        'amount' : amount,
        'desc' : desc,
        'category' : category,
    };
    let data_serialized = JSON.stringify(data);
    localStorage.setItem(desc, data_serialized);

    let display = `${amount} ${desc} ${category}`;
    let ul = document.getElementById('users');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(display));
    // Delete button
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    
    deleteBtn.className = 'delete btn btn-danger m-2 float-end';
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.onclick = () => {
        localStorage.removeItem(desc);
        ul.removeChild(li);
    };

    editBtn.append(document.createTextNode("Edit"));
    editBtn.className = 'btn btn-info m-2 float-end';
    editBtn.onclick = () => {
        let getData = JSON.parse(localStorage.getItem(desc));
        let n = document.getElementById('amount');
        let e = document.getElementById('desc');
        let p = document.getElementById('category');
        console.log(getData);
        localStorage.removeItem(desc);
        ul.removeChild(li);
        n.value = getData.amount;
        e.value = getData.desc;
        p.value = getData.category;   
    }
    
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    li.className = 'list-group-item';
    ul.appendChild(li);

    form.reset();
}
