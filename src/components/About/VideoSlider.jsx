import React from "react";
import "./simple.css";
import vid1 from "../../assets/video/vid1.mp4";
import vid2 from "../../assets/video/vid2.mp4";
import vid3 from "../../assets/video/vid3.mp4";
import vid4 from "../../assets/video/vid4.mp4";
import vid5 from "../../assets/video/vid5.mp4";
import vid6 from "../../assets/video/vid6.mp4";

const Item = [vid1, vid2, vid3, vid4, vid5, vid6];

const CarouselWork = () => {
  return (
    <div className="carousel-simple">

      {/* ROW 1 */}
      <div className="group-simple">
        {[...Item, ...Item].map((video, i) => (
          <div key={i} className="card-simple">
            <video src={video} autoPlay muted loop playsInline />
          </div>
        ))}
      </div>


    </div>
  );
};

export default CarouselWork;