    
    const form = document.querySelector('form');
    const cardsContainer = document.querySelector('.cardsContainer');

        form.addEventListener('submit', function render(event) {
            event.preventDefault();


            let fullName = document.getElementById('fullName').value;
            let password = document.getElementById('password').value;
            let dob = document.getElementById('dob').value;
            let gender = document.getElementById('gender').value;
            let phoneNumber = document.getElementById('phoneNumber').value;
            let orderType = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map((checkbox) => checkbox.value);
            let orderOption = document.querySelector('input[name="orderOption"]:checked').value;
            let arr = [orderType, orderOption];
            localStorage.setItem('Order', arr);





            const customer1 = new Customer(
                fullName,
                password,
                dob,
                gender,
                orderType,
                orderOption,
                'assets/user.jpg',
                phoneNumber
            );

            renderCard(customer1);

        });

        function Customer(fullName, password, dob, gender, orderType, orderOption, imageUrl, phoneNumber) {

            this.fullName = fullName;
            this.password = password;
            this.dob = dob;
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
                <img src="${customer.imageUrl}" alt="${customer.fullName}">
                <p>Full name: ${customer.fullName}</p>
                <p>Password: ${'*'.repeat(customer.password.length)}</p>
                <p>Date of Birth: ${customer.dob}</p>
            `;
            cardsContainer.appendChild(card);
        }