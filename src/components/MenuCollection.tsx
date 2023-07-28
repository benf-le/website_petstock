import React from "react";

function MenuCollection(props) {
  return (
    <ul className="w-62 menu rounded-box bg-base-200">
      <li>
        <details open>
          <summary>Brand</summary>
          <div className="form-control px-3">
            <label className="label cursor-pointer justify-start ">
              <input type="checkbox" className="checkbox-info checkbox" />
              <span className="pl-3">Acana</span>
            </label>
            <label className="label cursor-pointer justify-start">
              <input type="checkbox" className="checkbox-info checkbox" />
              <span className="pl-3">Adaptil</span>
            </label>
          </div>
        </details>
        <details open>
          <summary>Animal Type</summary>
          <div className="form-control px-3">
            <label className="label cursor-pointer justify-start ">
              <input type="checkbox" className="checkbox-info checkbox" />
              <span className="pl-3">Canine</span>
            </label>
            <label className="label cursor-pointer justify-start">
              <input type="checkbox" className="checkbox-info checkbox" />
              <span className="pl-3">Feline</span>
            </label>
          </div>
        </details>
        <details open>
          <summary>Price</summary>
          <input
            type="range"
            min={0}
            max="100"
            className="range range-primary"
          />{" "}
        </details>
      </li>
    </ul>
  );
}

export default MenuCollection;
