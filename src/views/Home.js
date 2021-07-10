import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Home extends React.Component
{
    state = {
        skills: [
            {
                id: 1,
                name: 'Crayon',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5dca95ef01d036001426e2bc">Ivan Haidutski</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/crayon-programming.png")
            },
            {
                id: 2,
                name: 'Puzzle',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34">Julia Gnedina</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/puzzle-15.png")
            },
            {
                id: 3,
                name: 'Taxi',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5dca95ef01d036001426e2bc">Ivan Haidutski</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/taxi-programming.png")
            },
            {
                id: 4,
                name: 'Polar',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5eb50ac301d03600141ee1f9">Aleksandr Smetanov</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/polar-14.png")
            }
        ]
    }

    render() {
        return (
            <div>
                <Navbar />
                    <h1>Home Page</h1>

                    { this.state.skills.map((item) => 
                        <div key={item.id}>
                            <img src={item.image.default } alt={item.name} />
                            <h3>{ item.name }</h3>
                            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                        </div>
                    ) }
                <Footer />
            </div>
        )
    }
}

export default Home;