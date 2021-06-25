import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';

import About from './Pages/About';

import Navigation from './Components/Navigation';



// To create a functional component we'll simply create a function.
// The function name must be same as the Component name.
// The first letter of a React component must be Capital.

////////////////////////////////////////////////////////////////////
// function App() {

//     return  <h1>Hello from Saqib Zaman</h1> 
// }

// export default App;
////////////////////////////////////////////////////////////////////


// The above h1 is a react component and every react component returns a "jsx".
// When we add a paragrah then it'll show an error bcz JSX expression must have one parent element.
// So, we'll use the below method by creating a wraping element (div) within round brackets.

////////////////////////////////////////////////////////////////////
// function App() {
//     return (
//         <div>
//             <h1>Hello from Saqib Zaman</h1> 
//             <p>This is a paragraph</p>
//         </div>
//     )
// }

// export default App;
////////////////////////////////////////////////////////////////////

// We can also use the "React Fragments Method" or "Empty-Tags" as below; 
// This React Fragment method allows us to use multiple elements, if we donot need the extra (div).


////////////////////////////////////////////////////////////////////
// function App() {
//     return (
//         <>
//             <h1>Hello from Saqib Zaman</h1> 
//             <p>This is a paragraph</p>
//         </>
//     )
// }

// export default App; 
////////////////////////////////////////////////////////////////////

//The above h1 "jsx" and not "html"
// We'll export this function so that we can import it in the next file.
// The above "export default" is an in-built JS-module.
// The above function name (App) is the "root component."
// We can also use arrow function instead of simple function.

// AND HERE OUR FIRST COMPONENT IS READY!!

// We can write the above function in the form of arrow function as;

////////////////////////////////////////////////////////////////////
// import { BrowserRouter as Router} from 'react-router-dom';
// const App = () => {
//     return (
//         <div>
//             <h1>Hello from Saqib Zaman</h1> 
//             <p>This is a paragraph</p>
//         </div>
//     )
// }

// export default App; 
////////////////////////////////////////////////////////////////////
// Above we,ve used the import method to import the router-dom library which we've recently installed using the 'react-router-dom'
// Above we've used the "Elias" method to shorten the name 'BrowserRouter'
// To use the "router", we've to wrap all the content in the router.

// So, we'll write the above code as;

////////////////////////////////////////////////////////////////////
const App = () => {
    return (
        <>
            <Router>
                
                <Navigation />

                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>

                </Switch>
            </Router>
        </>
    )
}

export default App; 
////////////////////////////////////////////////////////////////////

// The "Route" component takes some props (information/data).
// The first prop of Route is the "path".
// It looks similar to a HTML attribute but its a "prop".
// By passing the "prop", we're basically telling the path & where to route.
// The "/" refers to the "home page" & inside the curly brackets is the component name.
// So, we'll create a "Home.js" file in the "pages folder" in src folder.

// In the Route portion, we're basically saying that if the path is "/" then render the "Home" component.
// Switch stops the search when it reaches the match "/".
// The "exact" keyword tells that show the home page if it exactly matches the "/".
// Now the code executes perfrctly, but still we have to mention the About page manually.
// To get rid of that we'll create two links using anchor tag outside the switch tag.

// Now the links have been created but when we click on them, the page becomes refresh.
// So, we need to fix that problem, because the advantage of using React is that we can create single page application.
// So, the main benefit of using react is that it allows us to switch the links/page without refreshing the browser.
// To fix that we've to use the special React Link component instead of normal anchor tag.
// We've to pass a prop to the Link.
// We've to import the link from the react-dom.
// Now it works perfectly. which means our router navigates perfectly.
// Here the router navigates the pages without refreshing them.

// Thats how we create multiple pages in React.

// Now cut the Links and paste them in the Navigation.js file.

// Now we've understood how to use router in React and how to create multiple pages.

// Now we'll learn how to create state, handle events, context Api's, hooks etc.

// Create an "images" folder in the public folder and paste all the images of the Project.
// We'll use the CDN of tailwindcss to manage the CSS