import React, { useReducer, useState } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { handelFilterWarehouseData } from "../../Redux/slice/AllWarehouseData";

function Navbar() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.warehouseData.data);

  let [visible, setVisible] = useState(null);
  let reducerFun = (state, action) => {
    if (action.type === "city") {
      let a = action.payload;
      let update = a.reduce((acc, elem) => {
        if (!acc.includes(elem.city)) {
          acc.push(elem.city);
        }
        visible === "city" ? setVisible(null) : setVisible("city");
        return acc;
      }, []);

      return (state = update);
    } else if (action.type === "cluster") {
      let a = action.payload;
      let update = a.reduce((acc, elem) => {
        if (!acc.includes(elem.cluster)) {
          acc.push(elem.cluster);
        }
        visible === "cluster" ? setVisible(null) : setVisible("cluster");
        return acc;
      }, []);

      return (state = update);
    } else if (action.type === "space_available") {
      let a = action.payload;
      let update = a.reduce((acc, elem) => {
        if (!acc.includes(elem.space_available)) {
          acc.push(elem.space_available);
        }

        visible === "space_available"
          ? setVisible(null)
          : setVisible("space_available");
        return acc;
      }, []);

      return (state = update);
    }
  };

  let [searchByType, searchByTypeDispatch] = useReducer(reducerFun, []);

  let filterDataFun = (e) => {
    const searchTerm = e.toLowerCase();

    const filteredData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.city.toLowerCase().includes(searchTerm)
      );
    });
    dispatch(handelFilterWarehouseData(filteredData));

    console.log(filteredData);
  };
  let DropDownData = (e, value1) => {
    const searchTerm = e.target.textContent.toLowerCase();

    console.log(e.target.textContent);
    if (value1 === "city") {
      const filteredData = data.filter((item) => {
        return item.city.toLowerCase().includes(searchTerm);
      });
      dispatch(handelFilterWarehouseData(filteredData));
    } else if (value1 === "cluster") {
      const filteredData = data.filter((item) => {
        return item.cluster.toLowerCase().includes(searchTerm);
      });
      dispatch(handelFilterWarehouseData(filteredData));
    } else {
      const filteredData = data.filter((item) => {
        return item.space_available === Number(e.target.textContent);
      });
      dispatch(handelFilterWarehouseData(filteredData));
    }
  };

  return (
    <>
      <header>
        <div className="box44">
          <div className="header-text">
            <h1 className="heading">Warehouse</h1>
          </div>
          <div className="header-right">
            <div className="input-box">
              <input
                type="text"
                placeholder="Search by warehouse name"
                onChange={(e) => filterDataFun(e.target.value)}
              />
            </div>

            <div className="filter">
              <div className="filter-box">
                <p
                  onClick={() =>
                    searchByTypeDispatch({ type: "city", payload: data })
                  }
                >
                  City
                  <span class="material-symbols-outlined expand">
                    expand_more
                  </span>
                </p>
                <ul style={{ display: visible === "city" ? "block" : "none" }}>
                  {searchByType.map((elem) => (
                    <li onClick={(e) => DropDownData(e, "city")}>{elem}</li>
                  ))}
                </ul>
              </div>

              <div className="filter-box">
                <p
                  onClick={() =>
                    searchByTypeDispatch({ type: "cluster", payload: data })
                  }
                >
                  Cluster
                  <span class="material-symbols-outlined expand">
                    expand_more
                  </span>
                </p>
                <ul
                  style={{ display: visible === "cluster" ? "block" : "none" }}
                >
                  {searchByType.map((elem) => (
                    <li onClick={(e) => DropDownData(e, "cluster")}>{elem}</li>
                  ))}
                </ul>
              </div>
              <div className="filter-box">
                <p
                  onClick={() =>
                    searchByTypeDispatch({
                      type: "space_available",
                      payload: data,
                    })
                  }
                >
                  Space available limit
                  <span class="material-symbols-outlined expand">
                    expand_more
                  </span>
                </p>
                <ul
                  style={{
                    display: visible === "space_available" ? "block" : "none",
                  }}
                >
                  {searchByType.map((elem) => (
                    <li onClick={(e) => DropDownData(e, "space_available")}>
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="filter2">
          <div className="filter-box">
            <p
              onClick={() =>
                searchByTypeDispatch({ type: "city", payload: data })
              }
            >
              City
              <span class="material-symbols-outlined expand">expand_more</span>
            </p>
            <ul style={{ display: visible === "city" ? "block" : "none" }}>
              {searchByType.map((elem) => (
                <li onClick={(e) => DropDownData(e, "city")}>{elem}</li>
              ))}
            </ul>
          </div>

          <div className="filter-box">
            <p
              onClick={() =>
                searchByTypeDispatch({ type: "cluster", payload: data })
              }
            >
              Cluster
              <span class="material-symbols-outlined expand">expand_more</span>
            </p>
            <ul style={{ display: visible === "cluster" ? "block" : "none" }}>
              {searchByType.map((elem) => (
                <li onClick={(e) => DropDownData(e, "cluster")}>{elem}</li>
              ))}
            </ul>
          </div>
          <div className="filter-box">
            <p
              onClick={() =>
                searchByTypeDispatch({ type: "space_available", payload: data })
              }
            >
              Space available limit
              <span class="material-symbols-outlined expand">expand_more</span>
            </p>
            <ul
              style={{
                display: visible === "space_available" ? "block" : "none",
              }}
            >
              {searchByType.map((elem) => (
                <li onClick={(e) => DropDownData(e, "space_available")}>
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
