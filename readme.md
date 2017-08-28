See <a href="https://github.com/GarethW1994/shoes_api/tree/about">About</a>

## Getting Started:
1. You can view this application <a href="https://shoes-catalogue-api.herokuapp.com/">here</a> or copy this link and paste it in your browser `https://shoes-catalogue-api.herokuapp.com/`.



## Setting Up Development Environment
##### You will require the following:
##### Back-end
- NodeJS
- ExpressJS
- Mongoose
- Body Parser JSON
- MongoDB
- Nodemon

##### Front-end
- JQuery
- Handlebars
- Ajax

##### Unit Testing
- Travis CL
- Mocha
---

##### NodeJS
1. To check if you have NodeJS installed on your local machine run this command in the terminal - `node -v`

2. If this command fails, install Nodejs on your machine - <a href="">NodeJS Installation</a>

---

##### NPM Install
1. To install the modules used in this app run the following command in the terminal:
  ```
  npm install
  ```
2. This will install the node_modules such required and specified in the `package.json` file within the cloned repository.

---

##### MongoDB
1. Install <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04"> MongoDB</a> (Note that this is for ubuntu-16-04    distributions)
- After mongodb is set up and running the app will save all data in a database called `reg_numbers`.

---

##### Nodemon

1. Nodemon will watch files in your directory and if any changes happens nodemon will restart the node application without you having to do it manually.

2. To install Nodemon on your machine, run the following command in your terminal. Note that this is a global installation so nodemon can be accessed anywhere
in your paths.
```
npm install nodemon -g
```
- Alternatively if you want to install nodemon locally in a directory or path only, you can run the following command:
```
npm install --save-dev nodemon
```

---

##### Mocha
1. Install Mocha by running the following command in the terminal:
  ```
  npm install -g mocha
  ```
2. Alternatively if you want to install mocha locally that it can only be accessed within a certain path, run this command:
  ```
  npm install --save-dev mocha
  ```

3.  Now in your cloned repository you can run the `mocha` command to be able to run the tests.

### See: <a href="https://mochajs.org/">Mocha</a>
---
#### Travis CL
- Travis is a Continuous Integration service. Travis sets up “hooks” with GitHub to automatically run tests at specified times.

1. Go to <a href="https://travis-ci.org/">travis-ci</a> to get started.

2. Sign in with your github account by clicking on the button that says sign-in with github.

![travis_sign_in_with_github](https://user-images.githubusercontent.com/22448019/29770416-451ce66c-8bef-11e7-8063-b39e6c43c7d8.png)

3. Accept the authorization for this application. Github will need you to verify your password so go ahead and enter your password.

4. On the Travis getting started page click on your profile button/link. You should see a list of all your public repositories.

5. Next to each repo is a checked/unchecked toggle. Navigate to the shoes_api repo and check the toggle. It should go green.

6. Travis is now listening for changes on this repo. You can see each test by clicking on the shoes_api repo.

### Still not clear enough? Please see here: <a href="https://docs.travis-ci.com/user/getting-started/">Travis Getting Started</a>
---
##### Running Application
1. To run the app in the cloned repository run the following command: `nodemon index.js`

2. The express server will start running and in the terminal you can find on which port the application should be running, in this case, should be at port `3000`
