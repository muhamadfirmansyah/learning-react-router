import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

class Detail extends React.Component
{
    state = {
        skills: [
            {
                id: 1,
                name: 'Crayon',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5dca95ef01d036001426e2bc">Ivan Haidutski</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/crayon-programming.png").default
            },
            {
                id: 2,
                name: 'Puzzle',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34">Julia Gnedina</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/puzzle-15.png").default
            },
            {
                id: 3,
                name: 'Taxi',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5dca95ef01d036001426e2bc">Ivan Haidutski</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/taxi-programming.png").default
            },
            {
                id: 4,
                name: 'Polar',
                description: 'Illustration by <a href="https://icons8.com/illustrations/author/5eb50ac301d03600141ee1f9">Aleksandr Smetanov</a> from <a href="https://icons8.com/illustrations">Ouch!</a>',
                image: require("../images/polar-14.png").default
            }
        ],

        data: ""
    }

    // life-cycle method
    componentDidMount() { // setelah component dirender akan memanggil function ini

        // ambil parameter dari route tadi
        const id = this.props.match.params.id

        const data = this.state.skills.find(item => item.id === parseInt(id))

        // this.setState({
        //     data: data
        // })

        // bisa menjadi 

        this.setState({ data })
    }

    render() {
        const { data } = this.state

        return (
            <MainLayout>
                <div style={container}>
                    <h1>{ data.name }</h1>

                    <div style={box}>
                        <img src={data.image} alt={ data.image } style={img} />

                        <div>
                            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>

                            <Link to="/">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

const container = {
    padding: "0 6rem",
}

const img = {
    width: "20rem",
    height: "20rem",
    marginRight: "2rem"
}

const box = {
    display: "flex"
}

export default Detail;