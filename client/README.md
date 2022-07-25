<div id="header" align="center">
  <img src="https://user-images.githubusercontent.com/89707381/180673166-14db4d9e-6fa5-4c3b-9627-8ec3d26e2c19.png" width="100"/>

  <h1> Development Guide</h1>
</div>

  ## Usage:
  [Link to Pre-Deployed Website](https://coool-predeploy.herokuapp.com/)

  ### **Front end:** 
  Beware of `.env`, ask for details if needed.
  <br />
  Heroku is setup to automatically deploy changes from the GitHub's repository `main` branch
  <br />
  Heroku predeploy remote must be: `https://git.heroku.com/coool-predeploy.git`

    git remote -v
    heroku git:remote -a coool-predeploy
 
  Double check `package.json` before pushing changes:

    package.json
        "start": "npm run client",

---
  ### **Back end:** 
  Heroku predeploy remote must be: `https://git.heroku.com/coool-website.git`
  
    git remote -v
    heroku git:remote -a coool-website
 
  Double check `package.json` before pushing changes:
  
    package.json
        "start": "node server.js",

To update the database:
1. adjust `seedDB.js`
2. manually deploy new changes to Heroku only

        git push heroku yourbranch:main

3. seed the cloud database

        heroku run bash
        npm run seed

4. check the database: <br />
`https://coool-website.herokuapp.com/api/index` <br/>
`https://coool-website.herokuapp.com/api/links`

## Questions:
*Full-Stack Developers*
* <h3 style="display: inline; padding: 0 15px">Brianna Woodruff: </h3>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/briannawoodruff">
       <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" style="max-width: 100%;">
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/briannaewoodruff/">
       <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" style="max-width: 100%;">
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/briannaewoodruff/">
       <img src="https://img.shields.io/badge/Portfolio-EA4C89?style=for-the-badge&logo=About.me&logoColor=white" alt="Portfolio" style="max-width: 100%;">
    </a>

    briannaewoodruff@gmail.com

* <h3 style="display: inline; padding: 0 15px">Ian Erickson: </h3>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/iaerickson">
       <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" style="max-width: 100%;">
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/iaerickson/">
       <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" style="max-width: 100%;">
    </a>

    ierickson25@gmail.com
<br />

*Graphic Designer*
* <h3 style="display: inline; padding: 0 15px">Brian Hedrick: </h3>
    <a target="_blank" rel="noopener noreferrer" href="https://brian-hedrick.com">
       <img src="https://img.shields.io/badge/Website-purple?style=for-the-badge&logo=About.me&logoColor=white" alt="Website" style="max-width: 100%;">
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/pendingcontent?igshid=YmMyMTA2M2Y=">
       <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" style="max-width: 100%;">
    </a>
