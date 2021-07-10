import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Home extends React.Component
{
    render() {
        return (
            <div>
                <Navbar />
                    <h1>Home Page</h1>
                <Footer />
            </div>
        )
    }
}

export default Home;