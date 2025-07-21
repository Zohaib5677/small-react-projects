import React from 'react'
import Menuitem from './Menu-item'
function Menulist({list=[]}) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length
                    ? list.map((listitem) =>
                        <Menuitem item={listitem}/>
                    )
                    : null
    }
        </ul>
    )
}

export default Menulist