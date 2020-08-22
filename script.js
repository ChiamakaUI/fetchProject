const submit = document.getElementById("getpost");
const news = document.getElementsByClassName("posts");

submit.addEventListener('click', getPost);

function getPost(e){

    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
       
    let output = '<h3>Posts</h3>';
   data.forEach(function(post){
       output += `
       <div>
       <h4>${post.title}</h4>
       <p>${post.body}</p>
       </div>
       `;
   });
    document.getElementById('container').innerHTML = output;
  })
  .catch(error => {
    console.log(error);
  });

}

function appendData(data){
    let output = '<h2>Posts</h2>';
    data.array.forEach(element => {
        
    });
}


