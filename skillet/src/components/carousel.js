import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/vertical-carousel.css";

const VerticalCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const imageLinks = [
    "https://media.licdn.com/dms/image/D4D12AQFqOj3W65oDHA/article-cover_image-shrink_600_2000/0/1672976585399?e=2147483647&v=beta&t=PcsGUCxFS704LdEqVYA69xC8L1BWqDPjV50wmHc-Y6s",
    "https://losttribe.org/app/uploads/2022/11/2022.11.18_The_Calling_web_banner-1536x461.png.webp",
    "https://media.licdn.com/dms/image/D4D12AQHrUZ4oVqaAlA/article-cover_image-shrink_600_2000/0/1673585224911?e=2147483647&v=beta&t=A7E2Ncx_ovKeUWwtjYkBPgnRd-JmOUqfYujPdrgqELQ",
  ];

  const titles = ["Title 1", "Title 2", "Title 3"];

  const changeImage = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % imageLinks.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vertical-carousel-container mt-5">
      <Carousel
        showThumbs={true}
        showStatus={false}
        infiniteLoop={true}
        axis="vertical"
        renderThumbs={() => null}
        selectedItem={selectedItem}
        showArrows={false}
      >
        {imageLinks.map((link, index) => (
          <div key={index}>
            <div className="image-overlay">
              <img
                src={link}
                style={{
                  maxWidth: "100%",
                  height: "70%",
                  borderRadius: "10px",
                }}
                alt={`Image ${index + 1}`}
              />
              <div className="image-text">
                <h3>{titles[index]} (2020)</h3>
                <div className="image-buttons">
                  <button type="button" class="btn btn-light">
                    Regarder
                  </button>
                  <button type="button" class="btn btn-outline-light">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;
