## Product List Manager

This project allows users to add products(Book/Phone) to a list by submitting a form. Each product displays its name, cost, quantity, total stock cost (including tax), description, and a "Buy" button that can be disabled based on whether the product is accepting orders. This project demonstrates the use of JavaScript classes, setter and getter methods, private fileds, inheritance and DOM manipulation.

## Features

- Add new products using an input form.
- View each product's name, cost, quantity, and description.
- Calculate and display the total stock cost, including a 12% tax on the product cost.
- Apply discounts to products using setter methods for discount values.
- Disable the "Buy" button for products not accepting orders.
- Clear the form after adding a product.

## Usage

Fill in the form with the product details (Book/Phone):

- Click Add Product to add the product to the list. The product will be displayed below the form with the following information:

- Discount: Optional field to specify a discount percentage.
- Total Stock Cost: Calculated as the cost multiplied by the quantity plus a 12% tax. Discounts will be applied if specified.
- Description: Displays the product description in an alert.
- Buy Button: Allows users to "buy" the product unless orders are not being accepted.
  After adding, the form will reset for you to add a new product.

## Implementation Details

- Discount Calculation: The project includes a setter method for setting discount values, which adjusts the total stock cost accordingly.
- Tax Calculation: A 12% tax is automatically applied to the total stock cost, ensuring users see the final price for each product.
