var editingArea = document.getElementById("simpleEdit");
var editingArea2 = document.getElementById("simpleEdit2");

var KEY = "storageKey";
var text = localStorage.getItem(KEY);
if(text !== null){
        editingArea.value = text;
}

var KEY = "storageKey";
var text2 = sessionStorage.getItem(KEY);
if(text2 !== null){
        editingArea2.value = text2;
}

// whenever the textarea is updated, store the contents also into the storage
editingArea.addEventListener("keyup", function(event){
    localStorage.setItem(KEY,editingArea.value);
},false);

editingArea2.addEventListener("keyup", function(event){
    sessionStorage.setItem(KEY,editingArea2.value);
},false);


var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(event){
    localStorage.setItem(KEY,"");
    editingArea.value = "";
},false);

var resetButton2 = document.getElementById("reset2");
resetButton2.addEventListener("click", function(event){
    sessionStorage.setItem(KEY,"");
    editingArea2.value = "";
},false);