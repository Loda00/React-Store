import React, { Component } from 'react'
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from '../layouts/header/app'

import Hours from './test/app'
import Index from './index/index'
import NotFound from './404/app'
import { Menu, Image } from 'semantic-ui-react'

const MenuLeft = ({ store }) => (
  <Menu vertical>
    <NavLink
      to="/"
    >
      <Image src="https://previews.123rf.com/images/saiful007/saiful0071708/saiful007170801396/84740605-modelo-de-concepto-de-dise%C3%B1o-de-logotipo-de-ropa-de-mujer.jpg" size='small' wrapped />
    </NavLink>
    <Menu.Item>
      <Menu.Header className="nav-item">Products</Menu.Header>
      <Menu.Menu>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
      </NavLink>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          {store}
        </NavLink>
      </Menu.Menu>
    </Menu.Item>

    <Menu.Item>
      <Menu.Header className="nav-item">CMS Solutions</Menu.Header>
      <Menu.Menu>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
        </NavLink>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
        </NavLink>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
        </NavLink>
      </Menu.Menu>
    </Menu.Item>

    <Menu.Item>
      <Menu.Header className="nav-item">Hosting</Menu.Header>
      <Menu.Menu>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
      </NavLink>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
      </NavLink>
      </Menu.Menu>
    </Menu.Item>

    <Menu.Item>
      <Menu.Header className="nav-item">Support</Menu.Header>
      <Menu.Menu>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
      </NavLink>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
      </NavLink>
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          Hours
      </NavLink>
      </Menu.Menu>
    </Menu.Item>
  </Menu>
)

class Nav extends Component {

  state = {
    store: 'Store'
  }

  render() {

    const { store } = this.state

    return (
      <BrowserRouter>
        <MenuLeft store={store} />
        <Header>
          <Switch>
            <Route path="/hours" component={Hours} />
            <Route exact path="/" component={Index} />
            <Route component={NotFound} />
          </Switch>
        </Header>
      </BrowserRouter>
    )
  }
}



export default Nav