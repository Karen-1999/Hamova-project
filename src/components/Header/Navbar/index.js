import React from 'react';
import MegaMenu from '../MegaMenu/';
import "./navbar.css";

const Navbar = () => {
    let vegetables={
        title:"Armenian breakfast",
        list:["Dzvadzex", "Tey"]
    }
    let fruits={
        title:"Armenian dinner",
        list:["Xorovac", "Xashlama", "Harisa"]
    }
    let foodGrains={
        title:"Armenian supper)",
        list:["Jangyalov hac", "Tjvjik"]
    }
    let organic={
        title:"Other",
        list:["SMTH"]
    }
    return(
        <div className="navbar">
            <ul className="menu">
                <MegaMenu category={vegetables} />
                <MegaMenu category={fruits} />
                <MegaMenu category={foodGrains} />
                <MegaMenu category={organic} />
            </ul>
        </div>
    )
}

export default Navbar;