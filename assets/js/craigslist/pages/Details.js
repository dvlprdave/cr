import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <section className="submenu">
            <div className="direction">
              <div className="prev">Prev</div>
              <div className="next">Next</div>
            </div>

            <nav className="sub-links">
              <a href="#">More Ads by User</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">Contact Seller</a>
            </nav>
          </section>

          <section>
            <div className="media-column">
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="left-arrow" />
                    <div className="right-arrow" />
                  </div>
                  <div className="thumbnails">
                    <div className="thumb-img">Image</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-column">
              <div className="date">Posted: March: 27th</div>
              <h4 id="price">Black 2016 BMW</h4>
              <div className="more-details">
                <div className="info">
                  <label>Vin</label>
                  <h5>dtyn76qafer</h5>
                </div>
                <div className="info">
                  <label>Mileage</label>
                  <h5>14255</h5>
                </div>
                <div className="info">
                  <label>Transmission</label>
                  <h5>6-Speed Manual</h5>
                </div>
              </div>

              <div className="description">
                <p>This is where the description goes</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
