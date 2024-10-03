## Product List Manager

This project allows users to add products to a list by submitting a form. Each product displays its name, cost, quantity, stock cost, description, and a "Buy" button that can be disabled based on whether the product is accepting orders. This project demonstrates the use of JavaScript Class and DOM manipulation.

## Features

- Add new products using an input form.
- View each product's name, cost, quantity, and description.
- Calculate and display the stock cost based on the cost and quantity.
- Disable the "Buy" button for products not accepting orders.
- Clear form after adding a product.

## Usage

Fill in the form with the product details:

- Name: Product name.
- Cost: Price per unit.
- Quantity: Number of units available.
- Accepting Orders: Yes/No (If "No", the "Buy" button will be disabled).
- Description: A brief description of the product.
- Click Add Product to add the product to the list. The product will be displayed below the form with the following information:

- Stock Cost: Calculated as cost multiplied by quantity.
- Description: Displays the product description in an alert.
- Buy Button: Allows users to "buy" the product, unless orders are not being accepted.

After adding, the form will reset for you to add a new product.
