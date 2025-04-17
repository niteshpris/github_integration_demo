const database = require('./Database');
const CustomerRoutes = require('./routes/CustomerRoutes'); // Correct import of the class
const {errorHandler,ValidationError} = require('./middleware/errorhandler');


class Server {
///hello

//add new comments

  constructor() {
    this.express = require('express');
    this.app = this.express();
    this.PORT = 8080;

    const swaggerUi = require('swagger-ui-express');
    const swaggerSpec = require('./swagger'); // Import the Swagger configuration
    // Serve Swagger UI
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

   
// Middleware to parse JSON and URL-encoded bodies
    this.app.use(this.express.json());
    this.app.use(this.express.urlencoded({ extended: true }));
    this.app.use((err, req, res, next) => ValidationError(res, err.message));


    this.database = database;

    this.customerRoutes = new CustomerRoutes(this.app, this.database);
    this.customerRoutes.setupRoutes();
   

    

    
   

  };

  start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on http://localhost:${this.PORT}`);
      console.log(`API Docs available at http://localhost:${this.PORT}/api-docs`);
    });
  }
}

module.exports = new Server();


