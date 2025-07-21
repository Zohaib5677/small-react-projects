import React, { useState } from 'react'
import Menulist from './Menu-list';
import {FaMinus,FaPlus} from 'react-icons/fa'
function Menuitem({item}) {
    const [displayCurrent,setdisplaycurrent]=useState({})
    function handletogle(getlabel)
    {
        setdisplaycurrent({
            ...displayCurrent,
            [getlabel] : !displayCurrent[getlabel]
        }
          
        )
    }

  return (

    <li >
      <div className='menu-item'>
      <p>{item.label}</p>
      {
        item && item.children && item.children.length
        ? <span onClick={()=>handletogle(item.label)}>
            {
                displayCurrent[item.label]? <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>
            }
            </span>
        : null
      }
      </div>
        {
            item && item.children && item.children.length &&displayCurrent[item.label] >0
            ? <Menulist list ={item.children}/>
            : null
        }
    </li>
  
  );
}

export default Menuitem