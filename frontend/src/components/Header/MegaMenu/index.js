import React from 'react';
import "../Navbar/navbar.css";

const MegaMenu = (props) => {
    return(
      <React.Fragment>
        <li>
            <a className="hasDropdown" href="eda">
                {props.category.title}
                <i className="fa fa-angle-down"></i>
            </a>
            <ul className="container">
                <div className="container-list">
                    {props.category.list.map((item)=>{
                        return(
                            <div key={item} className="container-list-item">
                                <a href="eda">{item}</a>
                            </div>
                        )
                    })}
                </div>
            </ul>
        </li>
      </React.Fragment>
    )
}

export default MegaMenu;