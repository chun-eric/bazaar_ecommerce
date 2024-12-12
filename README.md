# Bazaar Ecommerce Website

A Frontend Ecommerce Website.

Day 1

- Project Setup, with Tailwind CSS and React
- Prepare Image Assets and Dimensions
- Prepare Folder Structure
- Prepare Router and Routes with React Router Dom
- Wrapped BrowserRouter in the main.jsx
- Making the Navbar and responsive hover menu for the profile
- Make Navbar, Navbar routes with NavLink and Link
- Make Sidebar menu visiblility on and off.
- Navbar is mobile responsive.
- Hero Banner complete with responsive
- Created a Context shop provider to share values across all components
- Created a Latest Collections Component to render the latest 10 products
- Created a Title Component to Dynamically Render the Title for Each products to display
- Created a Product Item Component to map over for the Latest Collection
- Created Best Seller Component to map over for the Best Seller Collection

Day 2

- Created Subscribe Component
- Created Policy Component
- Created Footer Component

Day 3

- Created Collections Page
- Created Product Filters Feature ( useCallBack)
- Created Product Sort Feature ( useCallBack )
- Created Search Bar in Collections (useContext, useLocation).
- When clicking on Search icon it directs us immediately to Collections page and search bar shows up. (useLocation in react router dom)

Day 4

- Created Search Feature. Display products based on search query. Updated the collections page with the search and showSearch from useContext. Added if conditions in the appliedFilter function and added search and showSearch as dependencies.

Day 5 (Today)

- Created Individual Product Page based on its url. Issues big image not aligning height with small image
- Bugs - related products not keeping it to 5 products
  -- Stretch goals

  1. add breadcrumbs to product categories,
  2. add tabs on the description and Reviews,
  3. dynamically add and read reviews

- Created Add to cart Feature. Adds size and item addToCart function.
- Added React toastify if add to cart button is pressed without any size selected.
- Add the quantity dynamically to the cart icon getCartCount. Had trouble with the counter bug.

  Current solution seems overly complicated. Maybe try and look into zustand after completing first project completion run.
  Also we should have a quantity section

Day 6 (Today)

- Created Cart Page
- Show each product item in cart page
- Delete each product item with updateCartQuantity function in the shopContext provider
- Able to modify quantity amount for each product and dynamically update it in the cart icon using onChange with a handleQuantityChange function
- CartTotal Component that updates the subtotal and total based on the product quantity including adding delivery fee
- Created a getCartAmount function (got rid of async function as it was causing errors)
- Also made sure that when there is no items in the cart the shipping fee should be 0.
- \*\*\* Stretch Goals - save Cart to local storage \*\*\*
- add useNavigate to the shopContext when clicking on the Proceed to check --> /place-order

---

Day 7

- Created Place Order Page. Had trouble with setting the active payments border. The issue was there was no color in tailwind css, so i just added a custom color.
- Added a useNavigate value in the shopContext so all components can have access to it
- Fix Created place order responsiveness

- Created My Order Page. Its still not linked to the login user so we cant track the actual orders put in the cart. Its just dummy data for the UI
- Also need to fix responsiveness

- Created Login Page. Add the navigation link in our drop down menu on the profile icon. Linked it to login page. At Login page made a simple sign up and login form that changes based on state. Change to login form when clicking Login Here or change to sign up form when clicking Sign Up. This also includes changing button to the different state. Added a form submit handler function on the form.

- Created About Us Page
- Created Contact Us Page

- Update all Copy
- Update last minute design changes and pricing
- Update any images

Day 8

- Accessiblity issues testing
- Testing

Day 9

- Testing
