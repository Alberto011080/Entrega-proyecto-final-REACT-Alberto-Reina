import React from "react";
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import  {faHome}  from "@fortawesome/free-solid-svg-icons"
import  {faRecordVinyl}  from "@fortawesome/free-solid-svg-icons"
import  {faGuitar}  from "@fortawesome/free-solid-svg-icons"

export default function Categories() {
  return (
    <>
      <li className="text-white bg-gray-800 p-4">
        <FontAwesomeIcon icon={faHome} /> Home
      </li>
      <li className="text-white bg-gray-800 p-4">
        <FontAwesomeIcon icon={faRecordVinyl} /> Novedades
      </li>
      <li className="text-white bg-gray-800 p-4">
        <FontAwesomeIcon icon={faGuitar} /> Reediciones
      </li>
      
    </>
  );
}
