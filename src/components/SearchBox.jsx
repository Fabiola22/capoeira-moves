import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      style={{
        width: "250px",
        float: "right",
        marginBottom: "20px",
        fontSize: "15px"
      }}
      type="text"
      name="query"
      className="form-control col-md-3"
      placeholder="Search Moves..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
