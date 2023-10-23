var phoneBook = [];

function addContact(userName, userNumber) {
    var contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };

    phoneBook.push(contactObject);
    alert("Contact added, phonebook updated");
}

function submitContact() {
    var userName = document.getElementById("userName").value;
    var userNumber = document.getElementById("userNumber").value;

    if (userName.trim() === "" || userNumber.trim() === "") {
        alert("Both fields are required");
    } else {
        addContact(userName, userNumber);
        document.getElementById("userName").value = "";
        document.getElementById("userNumber").value = "";
    }
}

function viewContacts() {
    console.log(phoneBook);
    var contactListDiv = document.getElementById("contactList");
    contactListDiv.innerHTML = "";

    if (phoneBook.length === 0) {
        contactListDiv.innerHTML = "Phonebook is empty.";
    } else {
        for (var i = 0; i < phoneBook.length; i++) {
            var contact = phoneBook[i];
            var contactInfo = "Name: " + contact.contactName + ", Number: " + contact.contactNumber;
            var p = document.createElement("p");
            p.textContent = contactInfo;
            contactListDiv.appendChild(p);
        }
    }
}
