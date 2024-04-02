let contacts = [];

function addme() {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    };

    contacts.push(contact);

    const jsonValue = document.getElementById('json-value');
    jsonValue.textContent = JSON.stringify(contacts, null, 2);
}
