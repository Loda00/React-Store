import React from 'react'

import Login from '../../components/facebook-login/app'

class Clock extends React.Component {

  constructor() {
    super()
    this.state = {
      showModal: false,
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showModal: true
      })
    }, 3000);
  }

  render() {

    const { showModal } = this.state

    return (
      <div className="main-content">
        <div className="content">
          <div className="test">
            <div className="uno">uno</div>
            <div className="dos">dos</div>
            {/* <Modal showModal={showModal} /> */}
            {/* <Login /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Clock