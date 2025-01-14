document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("changeBg").addEventListener("click", function () { 
        document.body.style.backgroundColor = "lightblue"; }); 
    });


function addAttendee() {
    var attendeeName = document.getElementById("attendeeName").value;
    var alertBox = document.querySelector(".alert");

    if (attendeeName === "") { 
        showAlert("Please enter a name.", "danger", 2000); 
        return; 
    }

   //function for the alerts
    function showAlert(message, type, duration){
        var alertBox = document.querySelector(".alert");
        alertBox.textContent = message;
        alertBox.className = "alert alert-" + type;
        alertBox.style.display = "block";

        setTimeout(function(){
            alertBox.style.display = "none";
        },duration); //inbuilt - function
    }

    var attendeeList = document.getElementById("attendeeList");
    var listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
    listItem.textContent = attendeeName;

    var removeButton = document.createElement("button");
    removeButton.textContent = "Delete Attendee";
    removeButton.className = "btn btn-danger";
    removeButton.onclick = function() {
        attendeeList.removeChild(listItem);
        showAlert("Deleted attendee successfully", "danger", 2000);
    };

    listItem.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0'));
    listItem.appendChild(removeButton);
    attendeeList.appendChild(listItem);
    showAlert("Attendee added successfully", "success", 2000);

    // Clear the input field
    document.getElementById("attendeeName").value = "";
}
