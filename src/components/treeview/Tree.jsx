import React from 'react'
import Menulist from './Menu-list'
import './Tree.css'
function Tree({menus=[]}) {
  return (
    <div className='tree-view-container'>
       <Menulist list={menus}/>
    </div>
  )
}

export default Tree