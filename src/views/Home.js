import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

class Home extends React.Component {
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
            <MainLayout>
                <h1 style={{ paddingLeft: "6rem" }}>Home Page</h1>
                <div style={container}>
                    {this.state.skills.map((item) =>
                        <div key={item.id} style={card}>
                            <Link to={`/detail/${item.id}`} style={link}>
                                <img src={item.image.default} alt={item.name} style={img} />
                                <h3 style={{ marginBottom: "0.2rem" }}>{item.name}</h3>
                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </Link>
                        </div>
                    )}
                </div>
            </MainLayout>
        )
    }
}

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between",
}

const card = {
    width: "20%",
    height: "15rem",
}

const img = {
    width: "100%",
    height: "100%"
}

const link = {
    textDecoration: 'none',
    color: '#000000'
}

export default Home;