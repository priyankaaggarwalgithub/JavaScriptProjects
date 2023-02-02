const input=document.querySelector(".input");
const btn=document.querySelector(".addButton");
const container=document.querySelector(".container");

function todo()
{
    const item=document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);

    //adding text
    const item_input=document.createElement("span");
    item_input.classList.add("item_input");
    item_input.innerHTML=input.value;
    item.appendChild(item_input);
    item_input.style.display="flex-row";
    item_input.style.alignContent="space-between";
    item_input.style.gap=5;

    //creating delete button
    const delete_btn=document.createElement("button");
    delete_btn.classList.add("delete");
    delete_btn.innerText="DELETE";
    delete_btn.style.color="RED";
    delete_btn.style.border=0;
    delete_btn.style.background="NONE"
    delete_btn.style.fontSize="large";
    delete_btn.style.marginLeft="50px";
    delete_btn.style.marginRight="10px";
    delete_btn.style.cursor="pointer"
    delete_btn.setAttribute("onclick","deletetodo()");
    item.appendChild(delete_btn);

    //creating edit button
    const edit_btn=document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerText="EDIT";
    edit_btn.style.color="GREEN";
    edit_btn.style.border=0;
    edit_btn.style.background="NONE"
    edit_btn.style.fontSize="large";
    edit_btn.style.cursor="pointer"
    item.appendChild(edit_btn);
    edit_btn.setAttribute("onclick","edittodo()");
    input.value = "";
}
function deletetodo() {
    document.activeElement.parentElement.remove();
    input.value = "";
}

function edittodo(){
let edit=document.activeElement.parentElement.firstChild.innerText;
document.activeElement.parentElement.remove();
input.value=edit;
input.focus();
}

btn.addEventListener("click",todo);