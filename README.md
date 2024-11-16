File Sharing System:

This project is a File Sharing System that includes user authentication and file management functionality. Users can sign up, log in, upload files, list their uploaded files, and download specific files using a secure API.


Features:

User registration and authentication with roles (Ops User and Client User).

Secure password storage using bcrypt.

JWT-based authentication.

File upload, listing, and download functionalities.

Email verification functionality (to be implemented further).

Prerequisites:
Ensure you have the following installed on your system:


Node.js (v14 or later)
MySQL database server
Postman (or any API testing tool)
npm (comes with Node.js)

Run the Server:

node server.js

After starting the project how it works is with the help of checking used for postaman:

SignUp:
post method sigup url is:http://localhost:5000/auth/signup

![image](https://github.com/user-attachments/assets/3406ec22-5969-429a-8a14-1a4fab80b066)

Login:
post method login url:http://localhost:5000/auth/login

![image](https://github.com/user-attachments/assets/15c20af3-2aec-4f93-ac8a-56bd86e3aec2)

After login we put that token into barear token of authentication of this process after that

Email verification process in the postaman.

Get method of this is the url is:http://localhost:5000/auth/verify-email

![image](https://github.com/user-attachments/assets/906cba6d-f09e-42e7-9425-8c4789957c1b)

After Email verification upload the file in the postman to check the project:

post method of this uploading file url is:http://localhost:5000/file/upload

![image](https://github.com/user-attachments/assets/43852c3c-afa7-4907-a26e-7d09f0524032)

After that process is completed to do get all the files in the process

Get method for this the url is:http://localhost:5000/file/list-files

![image](https://github.com/user-attachments/assets/ae20c74d-d102-4bac-bd73-f2a2883835d8)

This is my hole project.

