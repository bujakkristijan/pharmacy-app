## Pharmacy application
Project is implemented with ReactJS(Hooks) library, with additional libraries such as Bootstrap and SweetAlert2.
Application is used for maintenance of pharmacy products.

**How it works**

In the left side navigation we have two links: Products, About application. By clicking on them we show
their respected views on the right.

Clicking on the Products link user is shown a Products view.

Products view displays the list of all the products and display their info: Name of product, Name of
manufacturer, price (eur) and formatted expiry date (dd.mm.yyyy).

Clicking on the edit product button of the product from the list the user is routed to the edit page
where he can change the properties of the product.

Clicking on the new product button the user is routed to the create page where he can add a new
product.

Clicking on a delete product button the user removes the product from the list and that product is no
longer available.

**Application UI preview and features**

When the app starts, router is navigated to ListProduct component
Initial products are stored in localStorage and state of the component, then they are listed in the table

![list-preview](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/d48ad1af-ed5e-411f-b33c-c81b973a5330)

Clicking on button *Create new product*, router will navigate to CreateProduct component

![create-preview](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/34e8257e-ee68-4f1e-bc85-f37cfc034b6d)

Date can't be in the past, ID must be unique and all input fields are required, otherwise user won't be able to create new product.

![invalid-input](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/c9337cf4-1fa9-463e-9c0a-6cb39973d7e6)

After valid input, user will succesfully create new product

![valid-input](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/8e1aff25-28f5-49cb-830b-faaa75aeb2f8)
![success-added-product](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/966e5dc8-687a-49fa-957c-348c1705b631)

Product is added to localStorage and state, so table will be updated with new values

![list-updated](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/1eb0c26d-be50-4f7b-aea0-ebb7e49c1ede)

Clicking on *Delete* button, user will get modal window to confirm delete action

![delete-are-you-sure](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/a99e0100-b5d4-463c-85b8-26aabbc26515)
![success-deleted-product](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/be387df1-18e6-4d69-bcfb-329c4c05f2ac)

Clicking on *Update* button, router will redirect to EditComponent.
User can't change ID value and need to insert valid data again, same as he needed to while creating product.

![edit-product](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/cc0ba832-bd98-403b-b1f0-9b351ba8ee16)
![date-in-past-edit](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/291fe5c0-227b-45b0-bcc8-184d57be8a9d)
![date-in-past-alert](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/2932efba-9d7f-40fc-90a5-c427625cdfcc)
![success-edit](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/96b4c699-359b-4253-98b8-eb87af574682)

Clicking on *About application* tab in left sidebar, router will redirect to AboutComponent.
Clicking on *Source code* button, user can see source code of the application on Github.

![about-app](https://github.com/bujakkristijan/food-ordering-app/assets/76042091/3cdea447-fd9b-476c-b30e-221eee00c9cf)
