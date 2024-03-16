import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <li className="text-white bg-gray-800 p-4">
        <Link to={'/'}>
          <button className="text-white bg-gray-800 p-4">
            <FontAwesomeIcon icon={faHome} /> Home
          </button>
        </Link>
      </li>
      <li className="text-white bg-gray-800 p-4">
        <Link to={'/category/novedad'}>
          <button className="text-white bg-gray-800 p-4">
            <FontAwesomeIcon icon={faRecordVinyl} /> Novedades
          </button>
          </Link>
      </li>
      <li className="text-white bg-gray-800 p-4">
        <Link to={'/category/reedicion'}>
          <button className="text-white bg-gray-800 p-4">
            <FontAwesomeIcon icon={faGuitar} /> Reediciones
          </button>
        </Link>
      </li>
    </>
  );
}
