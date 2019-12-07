import React from 'react';

const HeaderUserItems = (props) => {
    let userNameDisplay = props.userName != null ? <strong style={{paddingRight:".2rem"}}>{props.userName}</strong> : "";
    return(
        <div className="app-user">
            <a className="app-item" href='http://localhost:8080/login'>
                {userNameDisplay}
                <img src={props.imgIcon} className="notification-icon" title={props.title} alt="user-item"/>
            </a>
        </div>        
    )
}
export default HeaderUserItems;