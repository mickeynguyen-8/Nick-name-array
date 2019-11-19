

document.getElementById('nickname-list').addEventListener('click', RandomNickname);
document.getElementById('full-name').addEventListener('click', AllNickname);

//Global variable
let name = [ " Fluffy ", " Candy " , " Dimples " , " Little Prince "];

//Display random nicknames
function RandomNickname(){ 
    document.getElementById('nick-name').innerHTML = name;
}

//Display the name from user and add the random nicknames
function AllNickname() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;

    nLen = name.length;
    text= "<ul>";
    for (let i = 0; i < nLen; i++){
        text += "<li>" + firstName + name[i] + lastName + "</li>"; 
        
    }
    text += "</ul>";

    document.getElementById('nick-name').innerHTML = text;
}

