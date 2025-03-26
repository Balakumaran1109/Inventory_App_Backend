#  Inventory Management System (Backend)

A robust backend for the Inventory Management System, designed to efficiently track stock levels, manage product data, and streamline inventory operations.

##  Features
- Product & stock management
- Secure authentication & authorization (JWT)
- CRUD operations for inventory items
- API endpoints for frontend integration
- Data persistence using MongoDB

##  Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **API Testing:** Postman

##  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Balakumaran1109/Inventory_App_Backend.git
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: (.env)
   * Create a .env file in the root directory and specify the following variables:
   * MONGO_URI: MongoDB connection string
   * PORT: Port for the server to listen on
   
4. Start the server:
   ```bash
   npm start
   ```

##  API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login` | User login |
| GET    | `/api/products` | Fetch all products |
| POST   | `/api/products` | Add a new product |
| PUT    | `/api/products/:id` | Update product details |
| DELETE | `/api/products/:id` | Remove a product |

##  Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

##  Frontend Repository
The link to the frontend repository can be found here [Frontend Repo](https://github.com/Balakumaran1109/Inventory_App_Frontend).

## License
This project is open-source and available under the MIT License.
