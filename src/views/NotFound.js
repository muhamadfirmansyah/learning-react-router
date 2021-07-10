import React from 'react'
import MainLayout from '../layouts/MainLayout'

const NotFound = () => {
    return (
        <MainLayout>
            <div style={container}>
                <h1>404 Not Found</h1>
            </div>
        </MainLayout>
    )
}

const container = {
    padding: "0 6rem"
}

export default NotFound;