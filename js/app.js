function gettingResponse() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then((data) => outputData(data));
}

const outputData = (data) => {
  console.log(data);
  document.getElementById('new-element').textContent = '';
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    console.log(data[i].name);
    div.classList.add('border');
    div.classList.add('p-3');
    div.classList.add('m-3');
    div.innerHTML = `
    <h2>Name: ${data[i].name}</h2>
    <h3>Email: ${data[i].email}</h3>
    <p>Blog: ${data[i].body}</p>
  `;
    document.getElementById('new-element').appendChild(div);
  }
};
