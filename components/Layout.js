 import styles from '../styles/Layout.module.css'
import Footer from './Footer.js';
 import Navigation from './Navigation.js';

 const Layout = ({children}) => {
    return (
        <>
            <Navigation/>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
 }

 export default Layout;