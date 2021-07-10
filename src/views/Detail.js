import React from 'react'
import MainLayout from '../layouts/MainLayout';

class Detail extends React.Component
{
    render() {
        return (
            <MainLayout>
                <div style={container}>
                    <h1>Detail Page</h1>
                </div>
            </MainLayout>
        )
    }
}

const container = {
    padding: "0 6rem",
}

export default Detail;