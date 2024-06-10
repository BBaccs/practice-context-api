
/* @TODO: Transition animation for mobile nav btn fix catering order button on navabar! */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    socialNavItems,
    franchiseNavItems,
    navItems,
} from "../data/linksData";

const NavItemsRenderer = ({ navData, resolveClickHandler }) => {
    return (
        <> {navData.map((link, index) => (
            <li key={index} className={`nav-item ${link.liClass || ''}`}>
                {link.externalLink || link.hashLink
                    ? <a className="nav-link" href={link.url} target={link.target} rel={link.rel} title={link.title}>
                        {link.name}
                    </a>
                    : <NavLink onClick={() => resolveClickHandler(link.clickHandler)} // Close hamburger for mobile version, franchise link will update franchise nav
                        className="nav-link" exact={link.url.includes("#")} to={link.url}>
                        {link.name}
                    </NavLink>
                }
            </li>
        ))
        }
        </>
    )
}

class NavBar extends Component {
    static defaultProps = {
        alertBar: true,
        alertBarMsg: 'Follow the Adventure on',
        pickup: false,
    };
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            navData: window.location.pathname === '/franchise' ? franchiseNavItems : navItems
        };
        this.handleClick = this.handleClick.bind(this);
    }

    resolveClickHandler = (clickHandler) => {
        if (this.state.open) {
            this.setState({ open: false });
        }

        else if (clickHandler === 'franchise') {
            this.setState({ navData: franchiseNavItems });
        }
    }

    handleClick() {
        this.setState(prevState => ({ open: !prevState.open }));
    }

    // The prevProps parameter in the componentDidUpdate method represents the previous props that the component received before the update. It is automatically provided by React and does not need to be explicitly passed.
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location && location.pathname === '/franchise' && prevProps.location.pathname !== '/franchise') {
            this.setState({ navData: franchiseNavItems });
        }
    }

    render() {
        const { alertBar, alertBarMsg, pickup } = this.props;
        const { open, navData } = this.state;
        return (
            <>
                {/*  */}
            </>
        );
    }
}

export default NavBar;
