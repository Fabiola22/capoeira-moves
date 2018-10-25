import React, { Component } from "react";
import { getMoves } from "../../services/capoeiraData";
import Pagination from "../../common/pagination";
import _ from "lodash";
import MovesTable from "../MovesTable";

class Moves extends Component {
  state = {
    moves: getMoves(),
    currentPage: 4,
    pageSize: 10,
    sortColumn: { path: "title", order: "asc" }
  };

  paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDelete = move => {
    const moves = this.state.moves;
    moves.splice(m => m.index, 1);
    this.setState({ moves });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.moves;
    const {
      pageSize,
      currentPage,
      moves: allTechniques,
      sortColumn
    } = this.state;

    const sorted = _.orderBy(
      allTechniques,
      [sortColumn.path],
      [sortColumn.order]
    );

    const moves = this.paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <h1 className="text-center">Capoeira Moves</h1>
        <MovesTable
          moves={moves}
          sortColumn={sortColumn}
          onSort={this.handleSort}
          onDelete={this.handleDelete}
        />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Moves;
