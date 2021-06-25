import {Link} from 'react-router-dom';

// const Navigation = () => {
//     return (
//         <>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//         </>
//     )
// }

// export default Navigation;

// Remove the Links tags and use <nav> tags to create a navigation bar.

const Navigation = () => {
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between">
                
                    <Link to="/">
                        <img style={{height: 45}} src="/Images/logo.jpg" alt="logo" />
                    </Link>

                    <ul className="flex items-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li>
                            <Link to="/cart">
                                <div>
                                    <span>10</span>
                                    <img style={{height: 45}} src="/Images/cart.jpg" alt="cart-icon" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                
            </nav>
        </>
    )
}

export default Navigation;

// In JSX we have to use "className" instead of ordinary "class" attribute.
// We'll use "mx-auto" to center the container.
// The logo should be clickable so, we'll wrap the logo with the Link tag and link it to the home page using "/".
// We'll use the inline styling to style the size of logo.
// We use curly braces "{}" in JSX whenever we have to use any dynamic thing, JS expression, varable, or a reference of a function.
// Within the "{}" we'll create a JS style object using curly braces again.
// In "tailwind css" we have to use "flex" in the wrapper (nav) to align the items in a row and "items-center" to vertically center the items.

