# wizard
Demo test assignment

#toolkit
For this assignment I chose React framework and used template
from React Burger Application. React Burger was my diploma work
in React Developer Course (Code you can find in my GitHub account).
For page routing I used react-router library (version 6).
For this assignment I used Typescript and JS es6.

#project structure
All code in src folder.
src/pages folder contains pages. There are 5 pages:
1. start (where app start)
2. client - where user inputs data about him/herself.
3. summary - results of client page
4. age error - case when user inputs age over 100.
5. page 404 (not found) - for not-existing routes.

src/utils stores data files (such countries, packages and etc)
in json format.

src/components contains my reusable (or not) React components
Each component has own CSS file and index (jsx/t

src/services contains middlewares, reduces, actions.
I didn't use these React entities. 
I put there files for getting data (from JSON files).
Next I could replace them with remote API.
In the folder are some classes and functions like 
calculate premium.

#approaches
Routing is described in components/app/app.tsx.
I tried maximum follow DRY approach and a lot of refactoring.

#unit-tests
Some tests were written with jests
