import React, { Component } from "react";
import { getMoves } from "../../services/capoeiraData";
import Pagination from "../../common/pagination";
import _ from "lodash";
import MovesTable from "../MovesTable";
import SearchBox from "../SearchBox";

class Moves extends Component {
  state = {
    moves: getMoves(),
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    sortColumn: { path: "name", order: "asc" }
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

  handlePreviousPage = page => {
    const previousPage = page - 1;
    this.setState({ currentPage: previousPage });
  };

  handleNextPage = page => {
    const nextPage = page + 1;
    this.setState({ currentPage: nextPage });
  };

  // handleDelete = move => {
  //   const moves = this.state.moves;
  //   moves.splice(m => m.index, 1);
  //   this.setState({ moves });
  // };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.moves;
    const {
      pageSize,
      currentPage,
      moves: allTechniques,
      sortColumn,
      searchQuery
    } = this.state;

    let filtered = allTechniques;

    if (searchQuery)
      filtered = allTechniques.filter(t =>
        t.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const moves = this.paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <MovesTable
          moves={moves}
          sortColumn={sortColumn}
          onSort={this.handleSort}
          // onDelete={this.handleDelete}
        />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
          onNextPage={this.handleNextPage}
          onPreviousPage={this.handlePreviousPage}
        />
      </React.Fragment>
    );
  }
}

export default Moves;
