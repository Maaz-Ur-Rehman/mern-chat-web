import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Male</span>
        </label>
        {/* <input
          type="checkbox"
          checked="male"
          className="checkbox border-slate-900"
        /> */}
      </div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Female</span>
        </label>
        {/* <input
          type="checkbox"
          checked="female"
          className="checkbox border-slate-900"
        /> */}
      </div>
    </div>
  );
};

export default GenderCheckBox;
