document.getElementById('details-show').style.display = 'none';
function gettingResponse() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then((data) => outputData(data));
}

/* task one: onclick show data */
const outputData = (data) => {
  // console.log(data);
  document.getElementById('new-element').textContent = '';
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    // console.log(data[i].name);
    div.classList.add('details');
    div.classList.add('border');
    div.classList.add('p-3');
    div.classList.add('m-3');
    // div.setAttribute(onclick, "loadData('${data[i].id}')");
    div.innerHTML = `
    <h2>Name: ${data[i].name}</h2>
    <h3>Email: ${data[i].email}</h3>
    <p>Blog: ${data[i].body}</p>
    <button class = "btn btn-success p-3" onclick="loadData('${data[i].id}')">See More</button>
  `;
    document.getElementById('new-element').appendChild(div);
  }
};

const loadData = (dataId) => {
  console.log(dataId);
  document.getElementById('details-show').style.display = 'block';
  document.getElementById('details-show').textContent = '';
  fetch(`https://jsonplaceholder.typicode.com/comments/${dataId}`)
    .then((res) => res.json())
    .then((data) => {
      const div = document.createElement('div');
      div.textContent = '';
      div.innerHTML = `
        <h1>You have selected Id: ${data.id}</h1>
        <h2>Name: ${data.name}</h2>
        <h3>Email: ${data.email}</h3>
        <p>Commments: ${data.body}</p>
    `;
      document.getElementById('details-show').appendChild(div);
    });
};

/* 
document.getElementsByClassName('details').addEventListener('click', () => {
  document.getElementById('details-show').style.display = 'block';
  document.createElement('div');
  div.innerHTML = `

  `;
});
 */
