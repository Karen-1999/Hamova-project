import React from 'react';

const HeaderUserItems = (props) => {
    let userNameDisplay = props.userName != null ? <strong style={{paddingRight:".2rem"}}>{props.userName}</strong> : "";
    return(
        <div className="app-user">
            <div className="app-item">
                {userNameDisplay}
                <img src={props.imgIcon} className="notification-icon" title={props.title} alt="user-item"/> 
            </div>
        </div>        
    )
}

export default HeaderUserItems;