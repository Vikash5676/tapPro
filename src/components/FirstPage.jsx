import React from "react";
import "../components/firstPage.css";

const FirstPage = () => {
  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>Messaging ID</h1>
        </div>
        <div className="progress_bar">
          <div className="bar1_detail">
            <h4>Your daily plan</h4>
            <h4>70%</h4>
          </div>
          <div className="bar2_detail">
            <div className="black_bar"></div>
            <div className="white_bar "></div>
          </div>
          <div className="bar3_detail">
            <p>4 to 6 completed</p>
          </div>
          <div className="cards">
            <div className="card1">
              <h3>17</h3>
              <div className="card1_detail">
                <i></i>
                <p>Task finished</p>
              </div>
            </div>
            <div className="card2">
              <h3>3.2</h3>
              <div className="card2_detail">
                <i></i>
                <p>Tracked hours</p>
              </div>
            </div>
          </div>
          <h4>Overview</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            consequatur voluptate ut, quis, tempora pariatur velit nulla
            temporibus eius consequuntur illo ipsa. Perspiciatis in ipsam
            assumenda aliquam voluptate cum dignissimos, sequi quas porro. Autem
            temporibus dolor aliquam nulla commodi officia beatae exercitationem
            nisi perferendis quaerat vero sint, incidunt quo quos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
