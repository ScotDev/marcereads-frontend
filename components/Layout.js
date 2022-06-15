// import React from 'react'

// https://youtu.be/mTz0GXj8NN0?t=1157#
import Footer from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className="container">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
