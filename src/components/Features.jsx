import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

function Features() {
  const cardData = [
    {
      image: "/tour-img03.jpg",
      isFeatured: true,
      location: "Bangkok",
      rating: 1,
      title: "snowy mountains, thailand",
      amount: 990,
    },
    {
      image: "/tour-img06.jpg",
      isFeatured: true,
      location: "Tokyo",
      rating: 4.5,
      title: "Cheery Blossoms Spring",
      amount: 99,
    },
    {
      image: "/tour-img02.jpg",
      isFeatured: true,
      location: "Bali",
      rating: 4,
      title: "Bali, Indonesia",
      amount: 99,
    },
    {
      image: "/tour-img07.jpg",
      isFeatured: true,
      location: "Paris",
      rating: 4,
      title: "Holmen Lofoten, France",
      amount: 99,
    },
    {
      image: "/tour-img01.jpg",
      isFeatured: true,
      location: "Phuket",
      rating: "no rated",
      title: "Beautiful Sunrise, Thailand",
      amount: 99,
    },
    {
      image: "/tour-img05.jpg",
      isFeatured: true,
      location: "London",
      rating: 2.3,
      title: "Westminister Bridge",
      amount: 99,
    },
    {
      image: "/tour-img04.jpg",
      isFeatured: true,
      location: "Bali",
      rating: 5,
      title: "Nusa Pendia Bali, Indonesia",
      amount: 99,
    },
    {
      image: "/tour-img01.jpg",
      isFeatured: true,
      location: "London",
      rating: 5,
      title: "London World",
      amount: 9,
    },
  ];
  return (
    <>
    <div className="featuredall">
      <div className="features">
        <div className="container">
          <Button variant="warning" className="rounded-pill cursive-button">
            Explore
          </Button>
          <div className="expheading mt-2">
            <h2>Our featured tours</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {cardData.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card mt-5">
                <div className="card-img">
                  <img src={item.image}></img>
                </div>
                <div className="card-location">
                  <div className="loc-icon d-flex">
                    <FontAwesomeIcon icon={faLocationDot} color="#e53131" />
                    <h6 className="loc-title2">{item.location}</h6>
                  </div>
                  <div className="spn">
                    <FontAwesomeIcon icon={faStar} />
                    <span> {item.rating} (1)</span>
                  </div>
                </div>
                <div className="card-title">
                  <h4>{item.title}</h4>
                </div>
                <div className="card-price">
                  <h5>
                    <span className="usd">${item.amount} /</span>per person
                  </h5>
                  <Button variant="warning" className="btn-sm mb-3">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Features;
