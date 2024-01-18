import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_ENDPOINT = "http://35.216.68.47:8080/api/experiences";

const CustomSlider = styled(Slider)`
  width: 85vw;
  height: 25vh;
  z-index: 1;
  margin: 0 auto;
  margin-bottom: 8vh;
  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
`;

const Image = styled.img`
  width: 30vw;
  height: 23vh;
`;

const BannerSlider = ({experiences}) => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CustomSlider {...settings}>
      {experiences.map((experience, index) => (
        <div
          key={index}
          onClick={() =>
            navigate(`/exp`, {
              state: {
                expTitle: experience.title,
                expId: experience.experienceId,
              },
            })
          }
        >
          <Image src={experience.imageUrl} alt={`Slide ${index + 1}`}></Image>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            {experience.title}
          </p>
        </div>
      ))}
    </CustomSlider>
  );
};

export default BannerSlider;
