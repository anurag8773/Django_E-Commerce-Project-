# Django E-Commerce Project

This Django-based E-Commerce project provides a comprehensive platform for creating an online store with essential functionalities like user signup, cart management, various payment options, and email verification through automatically generated tokens for enhanced security.

## Features

### User Signup and Email Verification
- **User Authentication**: Allows secure account creation.
- **Email Verification**: Sends automatically generated tokens to verify user emails.
- **Token-Based Verification**: Users can verify their emails through a unique token sent to their registered email addresses.

### Cart Management
- **Add/Remove Items**: Easily manage items in the shopping cart.
- **Quantity Adjustment**: Modify item quantities within the cart.
- **Clear Cart**: Option to clear the entire cart at once.

### Payment Options
- **Multiple Payment Gateways**: Integrates various payment gateways for seamless transactions.
- **Secure Transactions**: Ensures secure payment processing for customer safety.
- **Order Confirmation**: Provides confirmation and order history for completed transactions.

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-username/Django_E-Commerce-Project.git
   cd Django_E-Commerce-Project
   ```

2. **Create a Virtual Environment** (recommended):
   ```
   python -m venv env
   source env/bin/activate (for Unix/Mac) or env\Scripts\activate (for Windows)
   ```

3. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

4. **Database Setup**:
   - Configure your database settings in `settings.py`.
   - Run migrations:
     ```
     python manage.py makemigrations
     python manage.py migrate
     ```

5. **Run the Server**:
   ```
   python manage.py runserver
   ```

6. **Access the Application**:
   Open your web browser and navigate to `http://127.0.0.1:8000/` or `http://localhost:8000/` to view the application.

## Usage

1. **User Signup**:
   - Visit the signup page and create a new account.
   - Check your registered email for the verification token.

2. **Email Verification**:
   - Enter the received token on the verification page to confirm your email.

3. **Browse and Add Items to Cart**:
   - Explore the store, select items, and add them to your cart.

4. **Cart Management**:
   - Adjust item quantities or remove items from the cart as needed.

5. **Checkout and Payment**:
   - Proceed to checkout and select a payment option to complete your purchase.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
- Fork the repository
- Create your feature branch (`git checkout -b feature/YourFeature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin feature/YourFeature`)
- Create a new Pull Request

