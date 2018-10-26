import React, { Component } from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import SearchBox from "./SearchBox";

class MovesTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: column => <a href="/">{column.name}</a>
    },
    { path: "type", label: "Type" },
    { path: "description", label: "Description" },
    {
      path: "link",
      label: "Watch Tutorial",
      content: item => (
        <a href={item.link}>
          <i
            style={{ color: "red", fontSize: "20px" }}
            className="fa fa-youtube-play"
          />
        </a>
      )
    }
  ];

  render() {
    const { moves, sortColumn, onSort, searchQuery, onSearch } = this.props;

    return (
      <div>
        <h1 className="text-center">Capoeira Brasil Moves</h1>
        <SearchBox value={searchQuery} onChange={onSearch} />
        <table className="table" style={{ height: "700px", overflow: "auto" }}>
          <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody data={moves} columns={this.columns} />
        </table>
      </div>
    );
  }
}

export default MovesTable;
