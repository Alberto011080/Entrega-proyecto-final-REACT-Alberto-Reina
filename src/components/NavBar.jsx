import React from 'react'
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
                    <li className='text-white bg-gray-800 p-4'><FontAwesomeIcon icon={faHome} /> Home</li>
                    <li className='text-white bg-gray-800 p-4'><FontAwesomeIcon icon={faRecordVinyl} /> Novedades</li>
                    <li className='text-white bg-gray-800 p-4'><FontAwesomeIcon icon={faGuitar} /> Reediciones</li>
                    <CartWidget className= 'pb-2 rounded-30'/>

                </ul>
            </div>

        </div>
        

      </nav>
    )
}



export default Navbar;