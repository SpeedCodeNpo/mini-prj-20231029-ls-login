# Mp20231029LoginLs

# Speedcoding Mini Projects

- Project id: mini-prj-20231029-login-ls
- Chapter id: chp-08-toast-message
- Chapter focus: Add a toast message for register success
- Secondary target : Redirect to Login page after submit the register details.
- Source: YTB: Learn from Scratch (Oct 4, 2023) 
- In video this chapter starts here : https://youtu.be/P1r2QjuJWcI?t=2535
- 3rd Party: 
-   - Based on PrimeNg design framework (a wrapper over Material Design) :  https://primeng.org/
-   - Use the global CSS styles copy them from :  https://github.com/haseena-pa/angular-primeng-app-with-auth/blob/main/src/styles.css
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## About Micro Projects

- Welcome to Speedcoding Micro Projects
- Micro projects are between 5 to 10 hours depending on your skill.
- They focus on 2 or more Angular skills


## Skill goals :
- - (1) Routing
- - (2) Reactive form with validation
- - (3) Custom validator
- - (4) CanActivate & Guards

## Your task :

- (1) Import the primeNG toast module
- (2) In app module import ToastModule and BrowserAnimationsModule
- (3) In app module add to providers the MessageService from the primeNg api
- (4) In the app com html add the  <p-toast> element.
- (5) In the register comp class inject the MessageService in the constructor (Do NOT use the inject() method).
- (6) In the register comp modify the submitRegisterDetails() method to call the message as follows:
-      (6a) Call showSuccess() method in the case of "next" property of subscribe.
-      (6b) Call showError() method in the case of "error" property of subscribe.
- (7) In the case of the success then after the message is triggered reroute to the login page.

### Refrences :

(1) Project starter:

- GitHub link: https://github.com/SpeedCodeNpo/mini-prj-20231029-ls-login
- Stackblitz link:

(2) Project solution:

- GitHub link: 
- Stackblitz link: