import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
const NewsSummaryCard = ({ news }) => {
  const { author, details, title, _id, image_url } = news;

  return (
    <div>
      <div>
        <h2>This is category has news: {news.length}</h2>
      </div>
      <div>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Image fluid src={image_url}></Image>
            <Card.Text>
              {details.length > 250 ? (
                <p>
                  {details.slice(0, 250) + "....."}
                  <Link to={`/news/${_id}`}>Read More</Link>
                </p>
              ) : (
                <p>{details}</p>
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default NewsSummaryCard;
