import React from 'react';
import UniposLogo from './logo_horizontal.svg';
import Me from "./me.jpg";
import "./Header.css";

class Header extends React.Component {
    render() {
        return(
        <div className = "header">
            <div className="header-left">
                <div className = "logo">
                    <img src={UniposLogo} />
                </div>
            </div>
            <div className="header-right">
                <div className = "icon">
                    <img src={Me} />
                </div>
            </div>
        </div>
        );
    }
}

export default Header;