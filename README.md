# Restaurant Ordering System

## Overview
This project is a simple **Restaurant Ordering System** designed to manage customer orders and information. The system includes a user interface for inputting customer details, selecting order options, and rendering customer data dynamically on the webpage. The project leverages HTML, CSS, and JavaScript for structure, styling, and functionality.

---

## Project Structure
The project consists of the following main files:

- **index.html**: The main HTML file that serves as the entry point of the application.
- **style.css**: A CSS file for styling the webpage, including the header, form, customer cards, and footer.
- **app.js**: A JavaScript file containing the functionality for handling user input, creating customer objects, storing data, and rendering it dynamically on the page.

---

## Features

### 1. HTML Structure
The HTML file includes:
- A **Header**:
  - Contains a navigation bar (currently with placeholder links).
- A **Main Section**:
  - A form for entering customer details with the following fields:
    - **Full Name**
    - **Password**
    - **Date of Birth**
    - **Gender**
    - **Phone Number**
    - **Order Type** (checkboxes for "Shawarma," "Zinger," "Burger")
    - **Order Option** (radio buttons for "Combo" or "Sandwich")
  - A space for rendering customer cards dynamically.
- A **Footer**:
  - Provides a styled closing section for the webpage.

### 2. Styling with CSS
The **style.css** file is used to:
- Style the navigation bar, form, and footer.
- Create an attractive design for customer cards with a background, image, and information display.

### 3. JavaScript Functionality
The **app.js** file includes:
- A constructor function to create **Customer** objects with the following properties:
  1. Full Name
  2. Password
  3. Date of Birth
  4. Gender
  5. Phone Number
  6. Order Type
  7. Order Option
  8. Image URL (from the assets directory)

- A function named `render` to:
  - Collect and validate form data upon submission.
  - Create a customer object using the constructor.
  - Store all customer orders in an array.
  - Save the customer array to local storage.
  - Dynamically render customer cards on the main section of the page.

### 4. Dynamic Customer Cards
- Each customer card includes:
  - Customer's image (retrieved from the assets directory).
  - Full Name, Password (masked), Date of Birth, and other order details.
  - Styled in a visually appealing format.

---

## Installation and Usage

1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/restaurant-ordering-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd restaurant-ordering-system
   ```

3. Open `index.html` in any modern web browser to view the application.

---

## How It Works
1. Fill out the form with customer details.
2. Select the desired order type and order option.
3. Submit the form.
4. The system:
   - Validates the input.
   - Creates a customer object.
   - Stores the data in local storage.
   - Displays a customer card dynamically on the page.

---

## Key Highlights
- **Interactive UI**: A user-friendly interface for inputting and viewing customer information.
- **Data Persistence**: Uses local storage to save customer orders.
- **Dynamic Rendering**: Dynamically updates the UI to show customer information.

---

## Future Enhancements
- Add backend integration for persistent storage.
- Implement validation for more robust error handling.
- Enhance styling for responsiveness on various screen sizes.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- Inspiration and requirements provided as part of a learning task.
- Icons and images used are stored in the `assets` directory.

