
function currentDate() {
    var date = new Date();
    var showDate = document.getElementById("currDate");
    var formation = (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getFullYear();
    var dateText = document.createTextNode(formation);
    showDate.appendChild(dateText);
}

document.addEventListener('DOMContentLoaded', currentDate);