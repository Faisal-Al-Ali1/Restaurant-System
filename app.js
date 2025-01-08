
const regexUsername = /^\S+$/; 
const regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; 
const regexBirthday = /^\d{4}-\d{2}-\d{2}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
const regexPhone = /^07\d{8}$/; 

const form = document.querySelector('form');
const cardsContainer = document.querySelector('.cardsContainer');

form.addEventListener('submit', function render(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let orderType = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((checkbox) => checkbox.value);
    let orderOption = document.querySelector('input[name="orderOption"]:checked').value;

    if (!regexUsername.test(fullName)) {
        alert("Spaces not allowed in username.");
        return;
    }

    if (!regexPassword.test(password)) {
        alert("Password must be at least 8 characters long and include at least 1 uppercase letter, 1 number, and 1 special character.");
        return;
    }

    if (!regexBirthday.test(dob)) {
        alert("Date of Birth must be in the format YYYY-MM-DD.");
        return;
    }

    if (!regexEmail.test(email)) {
        alert("Email must follow the common email format.");
        return;
    }

    if (!regexPhone.test(phoneNumber)) {
        alert("Phone number must be 10 digits and start with 07.");
        return;
    }

    const customers = new Customer(
        fullName,
        password,
        dob,
        email,
        gender,
        orderType,
        orderOption,
        'assets/user.jpg',
        phoneNumber
    );

    let customerOrder = [

        customers.fullName,
        customers.password,
        customers.dob,
        customers.email,
        customers.gender,
        customers.orderType,
        customers.orderOption,
        customers.imageUrl,
        customers.phoneNumber
    ];

    localStorage.setItem('Order', JSON.stringify(customerOrder));

    const customerInfo = JSON.parse(localStorage.getItem('Order'));

     renderCard(customerInfo);
});

function Customer(fullName, password, dob, email, gender, orderType, orderOption, imageUrl, phoneNumber) {
    this.fullName = fullName;
    this.password = password;
    this.dob = dob;
    this.email = email;
    this.gender = gender;
    this.orderType = orderType;
    this.orderOption = orderOption;
    this.imageUrl = imageUrl;
    this.phoneNumber = phoneNumber;
}


function renderCard(customer) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${customer[7]}" alt="${customer[0]}">
        <p>Full name: ${customer[0]}</p>
        <p>Password: ${'*'.repeat(customer[1].length)}</p>
        <p>Date of Birth: ${customer[2]}</p>
    `;
    cardsContainer.appendChild(card);
}
