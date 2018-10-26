import React, { Component } from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

class MovesTable extends Component {
  columns = [
    { path: "name", label: "Name" },
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
    },
    {
      key: "delete",
      content: move => (
        <i
          style={{ color: "red" }}
          className="glyphicon glyphicon-trash"
          onClick={() => this.props.onDelete(this.props.move)}
        />
      )
    }
  ];

  render() {
    const { moves, sortColumn, onSort } = this.props;

    return (
      <div>
        <h1
          className="text-center"
          // style={{
          //   fontFamily: "cursive",
          //   color: "mediumseagreen",
          //   fontSize: "40px",
          //   marginBottom: "30px"
          // }}
        >
          Capoeira Brasil Moves
        </h1>
        <table
          className="table"
          style={{
            height: "700px",
            overflow: "auto"
          }}
        >
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
