<div align="center">
<h1> Welcome to the PupTrainer Front-End Application! </h1>
</div>

<br>


# Intro
This application is the front-end repository for [PupTrainer](https://pup-trainer.herokuapp.com) , the back-end repository can be found [HERE](https://github.com/PupTrainer/be_puptrainer) .

# Deployed link
Currently updating the deployed link (12/9/2022)

# Technologies Used
- React
- JavaScript
- GraphQL & Apollo Client
- HTML
- SCSS
- Cypress

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set Up

 1. Start by going [here](https://github.com/PupTrainer/fe_puptrainer). From here you will want to click on the green rectangular button titled 'Code'. This should open a drop down menu where you should see a link. To the left of the link there should be an icon with two over lapping squares. You can click the icon to copy the link.
 2. You will want to clone down the repo to you terminal using `git clone git@github.com:PupTrainer/fe_puptrainer.git`.
 3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` or `npm i` to install project dependencies.
 4. Run `npm start` in the terminal to see the page. You will need to copy and paste the local server from the terminal and paste it into your browser. The local server should be simialiar to, "http://localhost:3000/". `Control + C` is the command to stop running the local server. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.

 ## Features
 
 
 ### Login
 
 ![PT-Login Workflow](https://user-images.githubusercontent.com/96563007/180271248-df769288-0b50-4894-9744-e1245a71cf01.gif)
 
 - When you first visit the PupTrainer page, you have the option to either create an account if you are a new user, or login if you are already a user.
 
 ### Registering a dog
 
 ![Register-pet workflow](https://user-images.githubusercontent.com/96563007/180271586-e2e175b2-adac-4c77-be65-1c2ecf30aea7.gif)
 
 - After logging in, the user is greeted with the homepage showing them their user information, as well as a form to register a dog with PupTrainer.
 - Registering a dog requires the dog's name, age, and breed.
 - Once submitted, the dog will then show up under the Pets section of the user information.

 ### Dog Profile
 
 ![Dog-profile-workflow](https://user-images.githubusercontent.com/96563007/180272127-96716928-9f30-42f5-8f17-3302f6a4c687.gif)
 
 - To view the dog profile page, the user will select the dog they want to view by clicking on their dog's button under the Pets section of user information.
 - This will bring the user to that dog's profile page where information such as name,age,breed,known skills, as well as links for training courses the dog has not finished.
 
 ### Skill Page
 
 ![Skill-Add workflow](https://user-images.githubusercontent.com/96563007/180272732-35d07b8b-388f-40e8-8bea-72d3f5d4e058.gif)
 
 - To view a specific skill page, the user can go to their dog profile page and click on a specific skill under the `Training` section.
 - The user can see description of the skill, the level of the skill, the requirements to pass the skill, and a detailed video to walk a user through having their dog learn the skill.
 - After the user believes their dog meets the pass requirements, a user can click the `Complete Training` button to complete training for the skill.
 - The Dog Profile page will update to reflect specific skills that have been learned after clicking the `Complete Training` button.
 
 ### About Page
 
 ![About Us](https://user-images.githubusercontent.com/96563007/180274333-bed19288-e011-4eea-a2f6-7f5eae3bc633.gif)
 
 - The user can navigate to the About page to view all of the PupTrainer team member's fluffy friends.
  
# **The Team ✨**

<table>
<tr>
   <td align="center"><a href="https://github.com/DanielN88"><img src="https://avatars.githubusercontent.com/u/92230099?v=4" width="100px;" alt=""/><br /><sub><b>Daniel N. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/daniel-r-neer/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=DanielN88" title="Code">💻</a></td>
   
  <td align="center"><a href="https://github.com/Jlavarine"><img src="https://avatars.githubusercontent.com/u/96446170?v=4" width="100px;" alt=""/><br /><sub><b>Jacob L. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/jacoblavarine/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=Jlavarine" title="Code">💻</a></td>
  
  <td align="center"><a href="https://github.com/aominhlong"><img src="https://avatars.githubusercontent.com/u/89413678?v=4" width="100px;" alt=""/><br /><sub><b>Nicholas A. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/nicholas-ao/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=aominhlong" title="Code">💻</a></td>
  
  <td align="center"><a href="https://github.com/JoshMallery"><img src="https://avatars.githubusercontent.com/u/96563007?v=4" width="100px;" alt=""/><br /><sub><b>Josh M. (he/him)</b></sub></a><br /><a href="https://www.linkedin.com/in/joshmallery/" title ="Linked In"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a><br /><a href="https://github.com/PupTrainer/fe_puptrainer/commits?author=JoshMallery" title="Code">💻</a></td>

</tr>
</table>

Thanks go to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>

 

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
<!--
 

 
 
 
 
