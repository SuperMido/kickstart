import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <h1>Header</h1>
            {props.children}
            <h1>Fotter</h1>
        </div>
    )
}

export default Layout;