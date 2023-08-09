import React, { useState } from 'react'
import '../css/TodoStyle.css'
import MenuIcon from '@material-ui/icons/Menu';
import EditLocationIcon from '@material-ui/icons/EditLocation';
const Navbar = () => {
    const [showHam , SetShowHam] = useState(false)

    const hamClick = () =>{
        SetShowHam(!showHam)
    }
    return (
        <>
            <div className="nav">
                <div className='logo'>
                    <EditLocationIcon id="logoIcon"/>
                    <h5>TODO</h5>
                </div>
                <div className= {showHam ? "navItems" : "navItems unOrder"}>
                    
                    <ul>
                        <li>HOME</li>
                        <li>TASK</li>
                        <li>REMINDER</li>   
                        <li>MEMO</li>
                        <li>COLLECTIONS</li>
                    </ul>
                </div>
                <div className="humbuger" onClick={hamClick}>
                    <MenuIcon/>
                </div>
            </div>
        </>
    )
}

export default Navbar
