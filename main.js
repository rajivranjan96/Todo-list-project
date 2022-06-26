let form = document.getElementById("form");
let input = document.getElementById("todo-input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "!! Post cannot be blank";
        console.log("failure")
    }
    else{
        msg.innerHTML ="Successful";
        console.log("success")
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);  
    createPost();  
};

let createPost = () => {
    posts.innerHTML += 
    `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <i onClick="deletePost(this)" class="fa fa-trash-o" aria-hidden="true"></i>
    </span>
</div>
`;
 input.value = "";   
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
 input.value =e.parentElement.previousElementSibling.innerHTML;
 e.parentElement.parentElement.remove();
};