import React from "react";
import { useNavigate } from "react-router-dom";


// Dynamically import all images from the folder
const importAllImages = (requireContext) => {
  const images = {};
  requireContext.keys().forEach((key) => {
    const imageName = key.replace("./", "").replace(/\.\w+$/, ""); // Extract file name without extension
    images[imageName] = requireContext(key); // Map file name to image path
  });
  return images;
};

const yogaImages = importAllImages(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);

export default function ClassSection() {
  const styles = {
    background: " rgba(124, 93, 162, 1) ",
    marginBottom: "-50px",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to Card.js with the selected blog ID
  };

  const ClassCard = ({ id, title, description, level, intensity, image }) => {
    const handleMoreDetails = () => {
      navigate(`/class/${id}`, {
        state: { id, title, description, level, intensity, image },
      });
    };
    return (
      <>
        <div className="class-card">
          <div className="overlay"></div>
          <div className="bck">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="details">
              <span>
                Level: <br />
                <br />
                {level}
              </span>
              <span>
                Intensity:
                <br />
                <br />
                {intensity}
              </span>
            </div>
            <button className="more-details-btn" onClick={handleMoreDetails}>
              More Details
              <div class="extra-bar-left"></div>
              <div class="extra-bar-right"></div>
            </button>
          </div>
        </div>
      </>
    );
  };

  const classes = [
    {
      id: 1,
      title: "1. Sunrise Vinyasa Flow",
      description:
        "Start your day with grace and energy through our Sunrise Vinyasa Flow. This class focuses on seamless transitions between poses, linking breath with movement to invigorate your body and awaken your mind.",
      level: "Beginner",
      intensity: "Low",
      image: yogaImages["img20"],
    },
    {
      id: 2,
      title: "2. Gentle Hatha Yoga",
      description:
        "Unwind and relax with Gentle Hatha Yoga, designed for all skill levels. This class emphasizes holding postures to improve flexibility, balance, and overall well-being, perfect for easing stress and tension.",
      level: "Beginner",
      intensity: "Low",
      image: yogaImages["img9"],
    },
    {
      id: 3,
      title: "3. Power Yoga Fusion",
      description:
        "Elevate your practice with Power Yoga Fusion, blending strength-building sequences and core-focused exercises. This dynamic class is tailored to boost endurance and leave you feeling energized and accomplished.",
      level: "Advanced",
      intensity: "Medium",
      image: yogaImages["img11"],
    },
  ];

  return (
    <>
      <div style={styles}>
        <center>
          <div
            className="heading"
            style={{
              height: "200px",
              marginBottom: "140px",
              paddingTop: "100px",
            }}
          >
            <center>
              <p
                style={{
                  color: "#440961",
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
              >
                Classes
              </p>
              <h1
                style={{
                  color: "white",
                  fontFamily: "Impact",
                  fontWeight: "400",
                  fontSize: "80px",
                  width: "60%",
                  margin: "0",
                  padding: "0",
                }}
              >
                Diverse Classes for Every Fitness Enthusiast
              </h1>
              <p
                style={{
                  width: "50%",
                  color: "#440961",
                  fontSize: "18px",
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontWeight: "500",
                }}
              >
                Our diverse range of classes caters to all fitness levels,
                offering a mix of high-energy sessions and mindful practices to
                keep your fitness journey exciting and effective.
              </p>
            </center>
          </div>
        </center>
        {/* container code - start */}

        <div className="container-wrapper">
          {classes.map((cls, index) => (
            <div
              className="container"
              key={cls.id}
              style={{
                backgroundImage: `url(${cls.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <ClassCard
                key={index}
                title={cls.title}
                id={cls.id}
                description={cls.description}
                level={cls.level}
                intensity={cls.intensity}
                image={cls.image}
              />
            </div>
          ))}
          <center>
            <div
              className="more-button"
              style={{
                justifyItems: "center",
                marginBottom: "50px",
                marginTop: "50px",
              }}
            >
              <center>
                <button type="button" onClick={handleClick}>
                  View All Classes
                </button>
              </center>
            </div>
          </center>
        </div>

        {/* container code - end */}

        {/* view all classes button - start */}

        {/* view all classes button - end */}
      </div>
    </>
  );
}