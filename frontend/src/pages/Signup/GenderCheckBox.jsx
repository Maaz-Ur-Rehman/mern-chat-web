import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            // checked="male"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer gap-2 label">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            // checked="female"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
