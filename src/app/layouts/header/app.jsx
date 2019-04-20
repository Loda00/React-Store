import React, { Fragment } from 'react'
import { Label, Image, Icon, Modal, Header, Button } from 'semantic-ui-react'
// import Modal from '../../components/Modal/app'
import LoginRedSocial from '../../components/facebook-login/app'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

class HeaderMenu extends React.Component {
  state = {
    user: 'Juanito',
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { children, dataUser } = this.props
    const { isModal } = this.state
    console.log('isModal', isModal);

    return (
      <Fragment>
        <div className="log">
          <div>
            {!isEmpty(dataUser) ?
              (
                <div className="content-data-personal">
                  <Label as='a' image >
                    <Image circular avatar src={dataUser.photo} />
                    {dataUser.name}
                  </Label>
                  <div className="config-data-personal">
                    <h3>Mis datos</h3>
                    <h3>Promociones</h3>
                    <h3>Salir</h3>
                  </div>
                </div>
              ) : (
                <Modal
                  trigger={
                    <div style={{fontSize: '20px', cursor: 'pointer'}} onClick={this.handleOpen}>
                      <Icon disabled name='user' />
                      {'Iniciar Sessión'}
                    </div>
                  }
                  open={this.state.modalOpen}
                  onClose={this.handleClose}
                  basic
                  size='small'>
                  <Header icon="archive" content="! Inicie Sesion en Store !" />
                  <Modal.Content>
                    <LoginRedSocial />
                  </Modal.Content>
                  <Modal.Content>
                    <div className="modal">
                      <div className="content-modal">
                        <h3>¿Has olvidado la contraseña?</h3>
                        <h3>Iniciar sesión en una cuenta diferente</h3>
                        <h3>¿No tienes una cuenta? Regístrate</h3>
                      </div>
                    </div>
                  </Modal.Content>
                  <Modal.Actions>
                  <Button basic color='red' onClick={this.handleClose} inverted>
                    <Icon name='remove' /> No
                  </Button>
                    <Button color='green' onClick={this.handleClose} inverted>
                      <Icon name='checkmark' /> Go
                    </Button>
                  </Modal.Actions>
                </Modal>
              )
            }
          </div>
        </div>
        {children}
      </Fragment>

    )
  }
}

const mapStateToProps = state => ({
  dataUser: state.user
})

export default connect(mapStateToProps)(HeaderMenu)