import React, { Fragment, Component } from 'react'
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom'

import Hours from './test/app'
import Index from './index/index'
import NotFound from './404/app'
import { Menu, Image } from 'semantic-ui-react'

class Nav extends Component {

    state = {
        store: 'Store'
    }

    handleItemClick = (name) => {
        console.log('click', name)
        this.setState({ activeItem: name })
    }

    render() {

        const { store } = this.state

        return (
            <BrowserRouter>
                <Menu className="test" vertical>
                    <Image src="https://previews.123rf.com/images/saiful007/saiful0071708/saiful007170801396/84740605-modelo-de-concepto-de-dise%C3%B1o-de-logotipo-de-ropa-de-mujer.jpg" size='small' wrapped />
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
                <Switch>
                    <Route exact path="/hours" component={Hours} />
                    <Route exact path="/" component={Index} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default Nav