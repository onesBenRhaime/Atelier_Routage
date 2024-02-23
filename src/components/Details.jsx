import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function Details(props) {
	const [event, setEvent] = useState(props.event);
	const src =
		event.nbTickets === 0
			? " images/sold_out.png"
			: `../../public/images/${event.img}`;
	console.log("src", src);
	return (
		<Card>
			<Row>
				<Col>
					<Card.Img variant="top" src={src} height={250} />
				</Col>
				<Col>
					<Card.Body>
						<Card.Title>{event.name}</Card.Title>

						<Card.Text>
							<b>Description :</b>
							<br /> <p className="mx-5"> {event.description}</p>
						</Card.Text>
						<Card.Text>
							<b>Price :</b>
							<br /> <p className="mx-5">{event.price} DT</p>
						</Card.Text>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default Details;
