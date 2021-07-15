## Deploy NodeJS app on Heroku using Github

### Table of Content

- [Introduction](#introdution)
- [Getting Started](#getting-started)
- [Creating a simple App](#creating-a-simple-node-application)
- [Testing our app](#testing-our-app)
- [Pushing to Github](#pushing-to-github)
- [Authorizing and connecting Heroku with Github](#authorizing-and-connecting-heroku-with-github)
- [Deploying our App](#deploying-our-app)
- [Conclusion](#conclusion)

### Introdution

- What is Heroku?

Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. Heroku is elegant, flexible, and easy to use, offering developers the simplest path to getting apps to market.

Heroku is fully managed, giving developers the freedom to focus on their core product without the distraction of maintaining servers, hardware, or infrastructure. The Heroku experience provides services, tools, workflows, and polyglot support—all designed to enhance developer productivity.
<br>
<br>

### Getting Started

One of Heroku's core features is deploying, managing, and scaling apps with your favorite languages [Node, Ruby, Python, Java, PHP, Go, and more].
In this article, I'll show you how to deploy a Node.js app (API) on Heroku through Github.
But before we fully dive in, we will need an ExpressJS application running on our machine and one prerequisite to using express is to have [Node](https://nodejs.org/en/) installed on your machine.
We also need

- [Github](https://github.com "Github's Homepage") account and
- [Heroku](https://signup.heroku.com/dc) account.

> Note 🖊️: It is assumed that you have prior knowledge on how to use [Git](https://git-scm.com/) and also understand how Github works. If not see this [article](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) for a guide but nonetheless, the usage of git in this article is sufficient.
> <br> <br>

### Creating a Simple Node Application

Now let's create a very simple node app (API) that preforms a get request and displays a list of users and then push to Github.
Also, Heroku has made app deployment extremely simple and less complicated.

> Note✏️:
>
> - We'll be getting our data from an external API.
> - I will also show you where to add environment variables if you need to.
> - Completed code can be found [here](https://github.com/jobizil/github-heroku-api.git).

Create a new folder in your file manager, I'll call mine `github-heroku-api`, open it with terminal or your favourite code editor and initialize node (I'll be using [yarn](https://yarnpkg.com/) for this process).
Then create a new file `server.js`

```
mkdir github-heroku-api
cd github-heroku-api
yarn init -y
touch server.js
```

We'll install [express](https://www.npmjs.com/package/express) and [axios](https://www.npmjs.com/package/axios)
`yarn add express axios` or `npm i express axios`

Copy and paste the following into your `server.js` file

```
const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000

// Fetch dummy user data
app.get('/users', async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const { data } = await axios.get(url)
  return res.status(200).json(data)
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))

```

### Testing our app

To test our app we have to modify our `package.json` by adding a script ` "scripts": {"start": "node name-of-you-server" }`. Mine is `server.js` so my script will look like this ` "scripts": { "start": "node server" },`.
Once that is resolved, you can simply head to your terminal and run the command `yarn start` and visit your browser at `localhost:PORT/users`.

### Pushing to Github

Once you verify your app is working fine, then we're ready to push to [Github](https://github.com "Github's Homepage") using [Git](https://git-scm.com/).

We will have to initialize git with `git init` in our project folder and touch a `.gitignore` file. Within the `.gitignore` file add `node_modules` like this (This helps ignore `node_module folder` when pushing to Github).

- Create a repo
  In order to push your code to Github, you'll have to create a git repository on GitHub. [Create a repository](https://docs.github.com/en/get-started/quickstart/create-a-repo).

  Give your repo any name of your choice. For the sake of consisteny, I'll call mine `github-heroku-api`.

  Once you have created your repository, you can now push your code using the command below

  ```
  git add .
  git commit -m 'Initial Commit'
  git branch -M main
  git remote add origin https://github.com/your-username/your-repository.git
  git push -u origin main
  ```

  You can check your Github repository for changes.

### Authorizing and Connecting Heroku with Github

Once we're done pushing our code to Github, let's now go to Hecoku to complete the deployment process.

- Create an [Heroku](https://signup.heroku.com/dc) account if you dont have one already.

  ![Create Heroku Account](https://i.imgur.com/MYBCuHN.png)

- Once you're done creating an account, simply login. Select `New` at the top right of your account to create a new app.

  ![Create New App](https://i.imgur.com/nV2HQQl.png)

- Ensure your app name is unique and special 🔹

  ![Imgur](https://i.imgur.com/3E8eGEW.png)

- After creating your app, you'll scroll down to `deployment method` and select `Connect to Github`.

  ![Select Github](https://i.imgur.com/cPmXS5E.png)

### Deploying our App

- Once we have successfully connected to github, we can search for our repository and `connect`.

  ![Imgur](https://i.imgur.com/9XMm8a8.png)

- Enable automatic deployment and finally (This allows Heroku to restart automatically when a change is being made to our code.)

  ![Connect and Enable automatic deployment](https://i.imgur.com/9gBMudC.png)

- Select `Deploy branch`

  ![Deploy branch](https://i.imgur.com/j7WfK9W.png)

- Visit your newly deployed app and don't forget to add `/users` at the end of the url (You final url will look like this `https://github-heroku-api.herokuapp.com/users` )

<br>
<br>
<br>
> BONUS: To add environment variables in Heroku, open your app and select `Settings` and scroll doen to `config vars`. There you can add you envs. See Image below ;
<br>

![Add Env](https://i.imgur.com/lOGeGTQ.png)

### Conclusion

Now we can easily make changes in our github repo and it automatically changes in our deployed app.

"If you got value from this post, kindly Like ❤️, Share📬, and comment your thoughts.".
