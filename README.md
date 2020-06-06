### Install dependencies
```sh
$ npm install
```
### Run the app in development mode
```sh
$ npm start
```
### Build the app
```sh
$ npm run build
```
___
Hi, thank you for taking the time to look through my app.
### General Information
The app has three main routes to navigate. the homepage will show a list of users, however, viewing their posts and comments requires logging in. You can see list of users in /placeholder_data/users, or you can just use username: admin, password: admin to log in. You can edit, delete and add comments and posts once logged in.

### State Management
For global state I used the Context API. I love how you can plug any global data you need into a component by simply using a hook (useContext). The initial setup is also fairly straightforward and easy to follow. Each file holding the actions and state creates two contexts, one for state, and one for actions. They can then be used in any component that their Provider is wrapped around. For example, a component that needs to fetch a list of users can simply use the `useContext()` hook and pull `getUsers`, and `users`. out of the global state, keeping the components cleaner and easier to read.

### Authentication 
Authentication simply reads from a JSON file that has a list of users, as there's no actual authentication to do with the JSONPlaceholder API. 

There is a `loginUser()` function in the auth context which maps through the JSON file, and checks if the password and username match the object. Once logged in, a pretend web token and the username will be added to local storage. The only valid "web token" in the app is "0000". 

There is then a `checkAuth()` function that will check if the "web token" is valid, and if so sets `isAuthenticated` in the global state to true, allowing the user to access the private routes. there is a PrivateRoute higher order component on protected routes that will check against `isAuthenticated`, and if true, will allow access to those routes.

### Loading & Error State Managment
loading and error state are handled in the global state. As there is no server response message, I manually set them in their respective reducers. A component will access the `isError` and `message` from the global state, and display an appropriate response. 

Loading in global state is initially set to true, and will be set to false once a response from the server has been given. A `cleanup()` function is run when a component dismounts, setting the loading state back to true. 

loading and errors both have a simple re-useable component that takes a few props and is implement in a component like so 

##### ```<Loading isLoading={prop}/>```
##### ```<Error error={prop}/>```

Both of these could instead be added into a single all in one HOC, as whatever component has a loading state will also have an error state when something goes wrong, however, I felt the implemented method was sufficient enough.

### Notes
- Some components in the app are just for show. The register page won't actually create an account, and the users settings page is mostly for show. You can't actually change the user password, or update any of the logged in users credentials.
- The search function is a very simple implementation, and thus you can only search for a post by using it's ID.
- Editing comments and posts the user has added will result in an error message, as they don't actually exist on the server.
- When deleting a comment or post a user has created, it will also delete the other posts/comments the has user created, as they all share the same ID on the server due to not actually being added into any database.
