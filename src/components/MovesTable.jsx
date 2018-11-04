import React, { Component } from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import SearchBox from "./SearchBox";
import { Link } from 'react-router-dom';
import Move from './Move';

class MovesTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: column => <Link to={`/moves/${column.id}`}> {column.name}</Link>
    },
    { path: "type", label: "Type" },
    { path: "description", label: "Description" },
    {
      path: "link",
      label: "Watch Tutorial",
      content: item => (
        <Link to={item.link}>
          <i
            style={{ color: "red", fontSize: "20px", marginLeft: "20px" }}
            className="fa fa-youtube-play"
          />
        </Link>
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
