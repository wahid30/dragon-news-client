import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
const News = () => {
  const news = useLoaderData();
  // console.log(news);
  const { author, details, title, _id, image_url } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <Image
              roundedCircle
              src={author.img}
              style={{ height: "40px" }}
            ></Image>
            <div>
              <p className="mb-0">{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="d-flex gap-1">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Image fluid src={image_url}></Image>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default News;
