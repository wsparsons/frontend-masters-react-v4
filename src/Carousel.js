import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  /** static getDerivedStateFromProps
   * getDerivedStateFromProps does exactly what it sounds like:
   * it allows you to accept data from a parent and get state that is derived from it.
   * In this case, we're removing the superfluous photos and just keeping the ones we want.
   */

  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }

  /** handleIndexClick & +
   * Notice that the handleIndexClick function is an arrow function.
   * This is because we need the this in handleIndexClick to be the correct this.
   * An arrow function assures that because it will be the scope of where it was defined.
   * The data attribute comes back as a string. We want it to be a number, hence the  +.
   */

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
