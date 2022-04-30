const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  
  $.ajax({                                      
    url: 'https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=2&lesson=18&subject=2',       
    type: "GET"
    success: function(data){
      console.log(data)
    }
});
};





getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
