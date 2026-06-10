function loadDate()
{
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    for(let i=1;i<=31;i++)
        day.innerHTML += "<option>"+i+"</option>";

    for(let i=1;i<=12;i++)
        month.innerHTML += "<option>"+i+"</option>";

    for(let i=1970;i<=2025;i++)
        year.innerHTML += "<option>"+i+"</option>";

    let txts = document.querySelectorAll("input[type=text]");

    txts.forEach(function(item){

        item.onfocus = function(){
            this.style.background = "yellow";
        }

        item.onblur = function(){
            this.style.background = "white";
        }

    });

    loadData(); // chỉ gọi 1 lần ở đây
}
function addMember()
{
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;

    if(name=="")
    {
        alert("Name cannot be blank");
        return;
    }

    if(email=="")
    {
        alert("Email cannot be blank");
        return;
    }

    let gender =
    document.querySelector('input[name="gender"]:checked').value;

    let birthday =
    document.getElementById("day").value + "/" +
    document.getElementById("month").value + "/" +
    document.getElementById("year").value;

    let table = document.getElementById("tblMember");
    let hobbies = [];
let hobbyList = document.querySelectorAll('input[name="hobby"]:checked');

hobbyList.forEach(function(item){
    hobbies.push(item.value);
});

let colors = [];
let colorList = document.querySelectorAll('input[name="color"]:checked');

colorList.forEach(function(item){
    colors.push(item.value);
});

    let row = table.insertRow(-1);

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = birthday;
    row.insertCell(4).innerHTML = hobbies.join(", ");
row.insertCell(5).innerHTML = colors.join(", ");
    row.onmouseover = function(){
        this.style.background = "yellow";
    }

    row.onmouseout = function(){
        this.style.background = "white";
    }
}
function loadData()
{
    let table = document.getElementById("tblMember");

    for(let i=0;i<members.length;i++)
    {
        let row = table.insertRow(-1);

        row.insertCell(0).innerHTML = members[i].name;
        row.insertCell(1).innerHTML = members[i].email;
        row.insertCell(2).innerHTML = members[i].gender;
        row.insertCell(3).innerHTML = members[i].birthday;
        row.insertCell(4).innerHTML = members[i].hobbies;
        row.insertCell(5).innerHTML = members[i].color;
    }
}