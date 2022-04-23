import React from "react";
import "./Try.css";

const Guests = () => {
  return (
    <div class="cards-list">
      <div class="card 1">
        <div class="card_image">
          {" "}
          <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
        </div>
        <div class="card_title title-white">
          <p>Card Title</p>
        </div>
      </div>

      <div class="card 2">
        <div class="card_image">
          <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
        </div>
        <div class="card_title title-white">
          <p>Card Title</p>
        </div>
      </div>

      <div class="card 3">
        <div class="card_image">
          <img src="https://th.bing.com/th/id/R.46a71fab15fea178dc9c6f6baf69167d?rik=ulNpIqcetz3e6w&riu=http%3a%2f%2f25.media.tumblr.com%2ftumblr_m9ogt65l771r0rljlo1_1280.jpg&ehk=Xv69ZN6eRC%2bNz0WX3TDIHjSfsCY%2bHRdOBgJGZjzoHNg%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        <div class="card_title">
          <p>Card Title</p>
        </div>
      </div>

      <div class="card 4">
        <div class="card_image">
          <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
        </div>
        <div class="card_title title-black">
          <p>Card Title</p>
        </div>
      </div>
    </div>
  );
};

export default Guests;
