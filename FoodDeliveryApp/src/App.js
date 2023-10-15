import React, { lazy ,Suspense} from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';
import Login from './components/login';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Payment from './components/Payment';
import Order from './components/Order';
import Wrapper from './components/Wrapper';

/*
Header
-Logo
-Nav items
Body
-search
-Restorentcontainer
-Restrocard
Footer
-copyright
-address
-Links
-Contact
*/
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    )

}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/home",
                    element:<Body/>
                },
                {
                    path:"/",
                    element:<Wrapper/>
                },
                {
                    path:"/about",
                    element:<Suspense fallback={"Loading..."}><About/></Suspense>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
                {
                    path:"/payment",
                    element:<Payment/>
                },
                {
                    path:"/orderconfirmation",
                    element:<Order/>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"/restaurents/:resId",
                    element:<ResMenu/>
                }
            ],
            errorElement:<Error/>
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
