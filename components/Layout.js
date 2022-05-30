// import React from 'react'

// standard overall layout - navbar, footer
// https://youtu.be/mTz0GXj8NN0?t=1157#
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {/* container would go below as div */}
            <div className="container">
                <main>{children}</main>
            </div>
        </>
    )
}
