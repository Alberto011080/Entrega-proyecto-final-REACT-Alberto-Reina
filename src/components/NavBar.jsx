import React from 'react'
import Categories from './Categories';
import CartWidget from './CartWidget';
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import  {faHome}  from "@fortawesome/free-solid-svg-icons"
import  {faRecordVinyl}  from "@fortawesome/free-solid-svg-icons"
import  {faGuitar}  from "@fortawesome/free-solid-svg-icons"


export const Navbar = () => {
    return (
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='text-white'>LOgO</div>
                <ul className='flex space-x-4'>
                    <Categories />
                    <CartWidget className="pb-2 rounded-30" />
                

                </ul>
            </div>

        </div>
        

      </nav>
    )
}



export default Navbar;