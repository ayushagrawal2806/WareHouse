// WarehouseDetails.js
import React, { useEffect, useReducer, useState } from "react";
import "./WarehouseDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { handelWarehouseData } from "../../Redux/slice/AllWarehouseData.js"; // Update the path accordingly

function WarehouseDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const [pageData, setPageData] = useState([]);
  const data = useSelector((state) => state.warehouseData.data);
  const [ChangeOpen, setChangeOpen] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "init":
        return action.payload;
      case "name":
        return { ...state, name: action.payload };
      case "code":
        return { ...state, code: action.payload };
      case "city":
        return { ...state, city: action.payload };
      case "space_available":
        return { ...state, space_available: action.payload };
      case "type":
        return { ...state, type: action.payload };
      case "cluster":
        return { ...state, cluster: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch2] = useReducer(reducer, {
    name: "",
    code: "",
    city: "",
    space_available: "",
    type: "",
    cluster: "",
  });

  useEffect(() => {
    const filterData = data.filter((e) => e.id === Number(params.id));
    setPageData(filterData);

    // Initialize state after pageData is set
    const initialState = {
      name: filterData[0]?.name || "",
      code: filterData[0]?.code || "",
      city: filterData[0]?.city || "",
      space_available: filterData[0]?.space_available || "",
      type: filterData[0]?.type || "",
      cluster: filterData[0]?.cluster || "",
    };

    dispatch2({ type: "init", payload: initialState });
  }, [data, params.id]);

  const handleInputChange = (e, field) => {
    dispatch2({ type: field, payload: e.target.value });
  };

  const editWarehouseData = () => {
    if (ChangeOpen === true) {
      const updatedData = data.map((elem) => {
        return elem.id === Number(params.id) ? { ...elem, ...state } : elem;
      });
      dispatch(handelWarehouseData(updatedData));
      setChangeOpen(false);
      alert("Change successful");
    }
  };

  return (
    <div className="warehouseDetails">
      <div className="warehouseDetails-box">
        {pageData.map((elem, index) => (
          <div key={index}>
            <div className="warehouseDetails-InnerBox">
              <p>Name :</p>{" "}
              <input
                type="text"
                value={state.name}
                onChange={(e) => handleInputChange(e, "name")}
                disabled={ChangeOpen === false ? true : false}
              />{" "}
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Code :</p>
              <input
                type="text"
                value={state.code}
                onChange={(e) => handleInputChange(e, "code")}
                disabled={ChangeOpen === false ? true : false}
              />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>City :</p>
              <input
                type="text"
                value={state.city}
                onChange={(e) => handleInputChange(e, "city")}
                disabled={ChangeOpen === false ? true : false}
              />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Space Available :</p>{" "}
              <input
                type="text"
                value={state.space_available}
                onChange={(e) => handleInputChange(e, "space_available")}
                disabled={ChangeOpen === false ? true : false}
              />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Type :</p>
              <input
                type="text"
                value={state.type}
                onChange={(e) => handleInputChange(e, "type")}
                disabled={ChangeOpen === false ? true : false}
              />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Cluster :</p>{" "}
              <input
                type="text"
                value={state.cluster}
                onChange={(e) => handleInputChange(e, "cluster")}
                disabled={ChangeOpen === false ? true : false}
              />
            </div>
            <div className="live">
              <p>
                Is_registered :{" "}
                <span class="material-symbols-outlined">
                  {elem.is_registered === true ? "done" : "close"}
                </span>
              </p>
              <p>
                Is_live :
                <span
                  class="material-symbols-outlined point"
                  style={{ color: elem.is_live === true ? "green" : "red" }}
                >
                  radio_button_unchecked
                </span>
              </p>
            </div>
          </div>
        ))}
        <div className="btn-box">
          <button onClick={() => setChangeOpen(true)}>Edit</button>
          <button onClick={editWarehouseData}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
