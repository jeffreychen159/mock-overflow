# Mock Overflow

This was a project done in collaboration with Kyra Riedal. In this project, we implemented a Mock Overflow platform where users similar to Stack Overflow, can post questions and answers, vote on posts, vote on questions, and many more features. 

![Home](images/home_screen2.PNG)

## Software and Architecture

![Architecture](images/architecture.PNG)

## Security Mechanisms

1. Question tampering: By using an account service and requiring users to login to use the program, it ensures that nobody except the post owner can tamper with a post. 
2. Account spoofing: By hashing a password, we can ensure that when a password is saved to the system, it is encrypted. Furthermore, when logging in, a unique identifier is attached to the account to ensure that nobody else can sniff account information and it ensures that the current instance is the only one logged in. 

## Development Process

An agile development workflow was used to accomodate frequent changes that may be required by the users. This supports the idea of informal reviews, which reduces bugs during testing. It also encourages refactoring to improve code structure where future changes will be easier to implement. 

## Conclusion

