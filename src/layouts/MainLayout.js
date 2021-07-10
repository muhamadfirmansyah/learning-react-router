import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = (props) => {
    return (

        // Mirip tag div
        <React.Fragment>
            <Navbar />
                { props.children }
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout;