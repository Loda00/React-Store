import React from 'react'

import Header from '../header/app'

class Clock extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="main-content">
                <Header />
                <div className="content">
                    <div className="test">
                        <div className="uno">uno</div>
                        <div className="dos">dos</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock