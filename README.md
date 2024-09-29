# Mock Overflow

This was a project done in collaboration with Kyra Riedal. In this project, we implemented a Mock Overflow platform where users similar to Stack Overflow, can post questions and answers, vote on posts, vote on questions, and many more features. 

![Home](images/home_screen2.PNG)

## Software and Architecture

This UML Diagram represents our code and the software used to implement each feature of our code. 

![Architecture](images/architecture.PNG)

## Security Mechanisms

1. **Question tampering:** By using an account service and requiring users to log in to use the program, it ensures that nobody except the post owner can tamper with a post. 
2. **Account spoofing:** By hashing a password, we can ensure that when a password is saved to the system, it is encrypted. Furthermore, when logging in, a unique identifier is attached to the account to ensure that nobody else can sniff account information and it ensures that the current instance is the only one logged in. 

## Development Process

An agile development workflow was used to accommodate frequent changes that may be required by the users. This supports the idea of informal reviews, which reduce bugs during testing. It also encourages refactoring to improve code structure where future changes will be easier to implement. 

## Usage

1. Installing dependencies: Make sure to install npm to both the server and the client

    In the root directory: 
    ```
    $ cd client/
    $ npm install
    $ cd server/
    $ npm install
    ```
2. 

## Conclusion

In conclusion, the Mock Overflow project successfully implemented a platform where users can interact by posting questions and answers, voting, and more. Incorporating an agile development workflow allowed us to develop independently, but also work as a team to solve issues that arise in the code. Furthermore, it honed our skills where code would be written clearly to ensure readibility between us. 

Outside of the development process, the requirements for security taught us to think about our development outside of functionality. By implementing different security features, it allowed the users to   
