import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class About extends React.Component
{
    render() {
        return (
            <div>
                <Navbar />
                    <div style={container}>
                        <h1>About Page</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis necessitatibus 
                            modi maiores nobis, quia est ipsum deserunt voluptas fuga ipsam nostrum quos expedita 
                            nihil magni possimus illo rerum explicabo!</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

const container = {
    padding: "0 6rem",
}

export default About;