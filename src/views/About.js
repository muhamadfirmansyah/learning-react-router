import React from 'react'
import MainLayout from '../layouts/MainLayout';

class About extends React.Component
{
    render() {
        return (
            <MainLayout>
                <div style={container}>
                    <h1>About Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis necessitatibus 
                        modi maiores nobis, quia est ipsum deserunt voluptas fuga ipsam nostrum quos expedita 
                        nihil magni possimus illo rerum explicabo!</p>
                </div>
            </MainLayout>
        )
    }
}

const container = {
    padding: "0 6rem",
}

export default About;