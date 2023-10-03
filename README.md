# eCommerce Back End

  ## Description
  Internet retail, also known as e-commerce, is one of the largest sectors in the electronics industry. This challenge was to build a back end for an e-commerce, given a functional Express.js API and product data from a company. Using Sequelize, MySQL database and Insomnia, this application can allow a company to organize and update  inventory data as well as helo developers learn how to navigate the API.

  ### User Story
  ```
  As a manager at an internet retail company
  I WANT a back end for my e-commerce website that uses the latest technologies
  SO THAT my company can compete with other e-commerce companies
  ```

  ## Acceptance Criteria

  ```md
  GIVEN a functional Express.js API
  WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  THEN I am able to connect to a database using Sequelize
  WHEN I enter schema and seed commands
  THEN a development database is created and is seeded with test data
  WHEN I enter the command to invoke the application
  THEN my server is started and the Sequelize models are synced to the MySQL database
  WHEN I open API GET routes in Insomnia for categories, products, or tags
  THEN the data for each of these routes is displayed in a formatted JSON
  WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete data in my database
  ```

  ## Installation
  ### Check out my [walkthrough video](https://drive.google.com/file/d/1Dzs7nb2q8J1ZsMZ6hc8Q14D_4u2XjLiU/view) explaining how to install and run this project
  In order to use this project, you can clone this repository onto your own system. Create your own `.env` containing your MYSQL username and password, and the database name. Make sure to also create a `.gitignore` file in the projects root directory with `node_modules`, `.env`, and `.DS_Store` in good practice. This application requires node.js, [Sequelize](https://www.npmjs.com/package/sequelize), [MYSQL2](https://www.npmjs.com/package/mysql2), and [dotenv](https://www.npmjs.com/package/dotenv). This requires entering the command `npm init` to initialize node.js in the projects root directory, followed by `node install sequelize mysql2 dotenv`. Once these are installed, you can run the application by entering `npm start` in the command line.

  ## Usage
  After these are installed, you can type `npm run seed` in order to populate the database with the default product data. Then, run `npm start` to start the server. Now you will be able to open Insomnia and test out the routes on your local server. The following image demonstrates how to format the URL as well as the routes that are available to be tested.
  
  ## License
  This project is licensed under the  MIT license.

  ## Questions
  If there are any questions on this project, please reach out to me through my [Github profile](https://github.com/DonCod3), or email at shmvrt@gmail.com.
