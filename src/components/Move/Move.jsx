import React from "react";
import { getMoves } from "../../services/capoeiraData";
import styles from './styles.css'


const Move = ({ match }) => {
	const id = match.params.id;
	const move = getMoves().filter(f => f.id == id)[0];
	const movementName = move.name.toLowerCase();

	return (
		<div className="container">
			<h2 className={`${styles.header}`}>{move.name}</h2>
			<h3>{move.type}</h3>
			<div className="row">
				<div className="col">
					<p className={`${styles.content}`}>{move.description}</p>
				</div>
				<div className="col">
					<img
					 	src={"https://s3-us-west-2.amazonaws.com/capoeira-movements/" + movementName + ".gif"}
						className="responsive"
						alt={movementName}
						style={{
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							marginTop: "-50px",
							width: "50%"
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Move;
