This project is a RESTful API built using Node.js and Express.js. It manages a list of users with operations to Create, Read, Update, and Delete data. The project demonstrates the use of:

Routing: Handling different HTTP methods and endpoints.

Middleware: Custom logging, input validation, and error handling.

In-Memory Storage: Using JavaScript arrays to store data temporarily.

MVC Architecture: Separating concerns into Models, Views (Routes), and Controllers.




Installation & Setup=
Unzip the project folder.

Open the project folder in Visual Studio Code.

Open the terminal and install the dependencies:bash npm install

*Note: This will install `express` and `nodemon`.*





Method,Endpoint,Description,Request Body (JSON)=
GET,/users,Fetch all users,None
GET,/users/:id,Fetch a specific user,None
POST,/user,Create a new user,"{ ""firstName"": ""John"", ""lastName"": ""Doe"", ""hobby"": ""Coding"" }"
PUT,/user/:id,Update a user,"{ ""firstName"": ""Jane"", ""lastName"": ""Doe"", ""hobby"": ""Reading"" }"
DELETE,/user/:id,Delete a user,None






Testing=
This API can be tested using Thunder Client (VS Code Extension) or Postman.

Ensure the server is running.

Send a GET request to http://localhost:3000/users to verify connectivity.

Use POST to add data before trying to PUT or DELETE.






Github Link - https://github.com/Ankitshukla90/my-api-project
Github Clone - https://github.com/Ankitshukla90/my-api-project.git

Project is done by Ankit Shukla