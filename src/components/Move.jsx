import React from "react";

const Move = ({ match }) => {
    return (
        <h1>Move Id: {match.params.id}</h1>
    )
}

export default Move;
