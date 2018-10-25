import React, { Component } from "react";

class MovesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { moves, onDelete } = this.props;

    return (
      <table className="table">
        <thead className="thead">
          <tr>
            <th onClick={() => this.raiseSort("name")}>Name</th>
            <th onClick={() => this.raiseSort("type")}>Type</th>
            <th onClick={() => this.raiseSort("description")}>Description</th>
            <th onClick={() => this.raiseSort("link")}>Tutorial Link</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {moves.map(m => (
            <tr key={m.name}>
              <td>
                <a href="/" style={{ color: "green" }}>
                  {m.name}
                </a>
              </td>
              <td>{m.type}</td>
              <td>{m.description}</td>
              <td>
                <a href={m.link}>here</a>
              </td>
              <td>
                <i
                  style={{ color: "red" }}
                  className="glyphicon glyphicon-trash"
                  onClick={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovesTable;
