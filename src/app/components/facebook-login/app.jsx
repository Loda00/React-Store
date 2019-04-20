import React from 'react';
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { user as dataUser } from '../../actions/user/user'
import { connect } from 'react-redux'
import { tokens } from '../../config/config'

class LoginRedSocial extends React.Component {
  state = {
    isLogin: false,
    user: [],
    tokenFb: tokens.keyFb,
    tokenGoogle: tokens.keyGoogle,
  }

  login = (response) => {
    const { user } = this.state
    const { dataUser } = this.props

    if (response && (response.El || response.userID)) {
      const user = response.userID ? response : response.profileObj
      const data = {
        id: user.userID ? user.userID : user.googleId,
        name: user.name,
        email: user.email,
        photo: user.userID ? user.picture.data.url : user.imageUrl
      }
      dataUser(data)
    }
  }

  errorLogin = (response) => {
    console.log(response);
  }

  render() {
    const { tokenGoogle, tokenFb } = this.state

    return (
      <div className="modal">
        <div className="content-modal">
          <GoogleLogin
            className="btn-social"
            clientId={tokenGoogle}
            buttonText="Continuar con Google"
            onSuccess={this.login}
            onFailure={this.errorLogin}
          />
          <FacebookLogin
            className="btn-social"
            appId={tokenFb}
            fields="name,email,picture"
            textButton="Continuar con Facebook"
            onFailure={this.errorLogin}
            callback={this.login} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  dataUser
}

export default connect(null, mapDispatchToProps)(LoginRedSocial)