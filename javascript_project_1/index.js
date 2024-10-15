var container = document.querySelector(".child-container");
var head = document.querySelector(".header");
var link_cont = document.querySelector(".link-container");
var count = 0; 
var link_count = 0;
window.onload = () =>{
    alert(head.textContent);
}
function link_counter(){
    alert(link_count);
}
function adding(){
    var child_cont = document.createElement("div");
    child_cont.setAttribute("class","box-style");
    container.appendChild(child_cont);
    count  = count + 1;
}
function counter(){
    alert(count);
}
function removing(){
    var child_box = document.querySelector(".box-style:last-child");
    if(child_box){
        container.removeChild(child_box);
        count = count - 1; 
    }
    else{
        alert("there is no box");
    }
}

function create_link(){
    var link = document.createElement("a");
    link.setAttribute("href","https://www.w3schools.com/js/js_htmldom.asp")
    link.textContent = "dom w3schools";
    link.setAttribute("target","_blank")
    link.setAttribute("class","w3schools");
    link_cont.appendChild(link);
    link_count = link_count + 1;
}
function remove_link(){
    var link = document.querySelector(".w3schools:last-child");
    if(link){
        link_cont.removeChild(link);
        link_count = link_count - 1;
    }
    else{
        alert("There is no link ")
    }
}
