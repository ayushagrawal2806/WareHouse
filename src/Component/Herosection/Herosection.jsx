import React from "react";
import "./Herosection.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { handelWarehouseData } from "../../Redux/slice/AllWarehouseData";
import i from "../../Data.json";
function Herosection() {
  let data = useSelector((state) => state.warehouseData.data2);
  console.log(data);
  return (
    <section className="hero-section">
      <div className="main-box">
        {data.map((elem, index) => (
          <NavLink
            to={`/WarehouseDetail/${elem.id}`}
            className="box"
            key={index}
          >
            <div className="inner-box">
              <p>Name : {elem.name}</p>
              <p>code : {elem.code}</p>
              <p>city : {elem.city}</p>
              <p>space_available : {elem.space_available}</p>
              <p>type : {elem.type}</p>
              <p>cluster : {elem.cluster}</p>
              <p>
                is_registered : {elem.is_registered === true ? "true" : "false"}
              </p>
              <p>is_live : {elem.is_live === true ? "true" : "false"}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Herosection;
