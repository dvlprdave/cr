import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "David"
    };
  }
  clickedBtn = () => {
    console.log("Button Clicked");
  };
  loopCategories =() => {
      let testArray = [1,2,3,4,5,6,7]
      return testArray.map((item, i) => {
        return <div className="categories" key={i}>
            <div className="title">Community</div>

            <div className="group-links">
              <a href="#" className="link">
                Community
              </a>

              <a href="#" className="link">
                General
              </a>
              <a href="#" className="link">
                Activities
              </a>
              <a href="#" className="link">
                Groups
              </a>
              <a href="#" className="link">
                Artists
              </a>
              <a href="#" className="link">
                Local News
              </a>
              <a href="#" className="link">
                Childcare
              </a>
              <a href="#" className="link">
                Lost & Found
              </a>
              <a href="#" className="link">
                Musician
              </a>
              <a href="#" className="link">
                Event
              </a>
              <a href="#" className="link">
                Pets
              </a>
            </div>
          </div>;
      })
  }
  loopTags = () => {
      let testTags = ['a','s','d','f','g','h','j',]
      return testTags.map( (i) => <div key={i} className="tag">Apple Macbook</div>)
  }
  render() {
    return <div className="home">
        <div className="container">
          <h1>
            Connecting People <br /> Everywhere :)
          </h1>
          <section className="links">{this.loopCategories()}</section>

          <section className="trending">
            <input type="text" name="search" placeholder="Search Classifieds, Jobs, Housing, Discussions, Personals..." className="search" />
            <div className="title">
              <i class="far fa-clock" /> Trending Now
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>;
  }
}
