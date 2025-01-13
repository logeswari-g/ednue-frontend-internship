function addAttendee() {
    var attendeeName = document.getElementById("attendeeName").value;
    if (attendeeName === "") {
        alert("Please enter a name.");
        return;
    }

    var attendeeList = document.getElementById("attendeeList");
    var listItem = document.createElement("li");
    listItem.textContent = attendeeName;

    var removeButton = document.createElement("button");
    removeButton.textContent = "Delete Attendee";
    removeButton.onclick = function() {
        attendeeList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    attendeeList.appendChild(listItem);

    document.getElementById("attendeeName").value = "";
}