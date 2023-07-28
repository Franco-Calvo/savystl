import React from "react";
import "./ErrorPage.styles.css";

export default function ErrorPage({ title, description, button }) {
  return (
    <body class="bg-purple">
      <div class="stars">
        <div class="central-body">
          <img
            class="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
            alt=""
          />
          <a
            alt=""
            href="http://salehriaz.com/404Page/404.html"
            class="btn-go-home"
          >
            {button}
          </a>
        </div>
        <div class="objects">
          <img
            alt=""
            class="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
          />
          <div class="earth-moon">
            <img
              alt=""
              class="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
            />
            <img
              alt=""
              class="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
            />
          </div>
          <div class="box_astronaut">
            <img
              alt=""
              class="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div class="glowing_stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
      </div>
    </body>
  );
}
