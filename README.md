# Flashlet
Flashlet is a web applicaiton that streamlines the process of creating, storing, and sharing flashcards.

### Deployment 
- Used vercel for frontend and render for backend 

### Tech stack 
TL;DR) MERN with NextJS and Tailwind 
MongoDB to store and persist user data 
NextJS as a frontend framework to facilitate routing
- used create-next-app to enable TypeScript, esLint, and tailwind 

### Functionalities 
- Guest login: a guest can try out basic features without their decks being stored
- User login: a user can enter a username to either signup or login
  - when they re-enters the username, they will be able to access their existing decks 
- Create new deck: a user can create a new deck 
  - can edit the name and description of the deck in the header 
  - one placeholder flashcard is provided 
- Flashcard operations: 
  - flip: user can switch between question and answer by clicking on the flashcard 
  - create: user can create a new flashcard which will be added to the end of the deck 
  - edit: user can edit and save a flashcard using the edit button. 
  - delete: user can delete a flashcard using the delete button
  - navigate: user can view the previous or next flashcard in the deck 
- Previous page: can return to previous page by clicking the Flashlet button in header

### Style 
- Used Tailwind 
- Purple theme borrowed from the create-t3-app template 

### How to run locally 
- `git clone https://github.com/cs421sp23-homework/flashcards-mpark63.git`
- `npm i` in root directory to install dependencies 
- `npm run dev` to start backend (.env file in git repo)
- `npm run frontend` to start frontend 
