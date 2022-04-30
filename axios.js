const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
 axios.get('https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=2&lesson=18&subject=2').then(response => {
    console.log(response);
  });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
