import React from 'react'
import { Icon } from 'semantic-ui-react'

class Log extends React.Component {

    constructor() {
        super()
        this.state = {
            user: 'Juanito'
        }
    }

    render() {
        const { user } = this.state
        
        return (
            <div className="log">
                <div>
                    <Icon disabled name='user' />{ user ? user : 'Iniciar Sessión' }
                </div>
            </div>
        )
    }
}

export default Log