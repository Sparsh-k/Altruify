import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


function WelcomeContent(){
    return(
        <div className="flex flex-col items-center">
            {/* <img 
            className="w-60 h-60"
            src="https://img.freepik.com/premium-vector/charity-logo-with-love-design-community-love-care_526811-310.jpg?w=1060"
            />
            <h1 className="text-5xl text-[#89216b] font-bold">
                ALTRUIFY
            </h1>
            <span className="text-sm text-gray-200">
                Happiness doesn't result from what we get, but from what we give.
            </span> */}

    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block h-auto"
          src="https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Quote1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-auto"
          src="https://unsplash.com/photos/five-children-smiling-while-doing-peace-hand-sign-AEaTUnvneik"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Quote2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-auto"
          src="https://unsplash.com/photos/red-and-green-plastic-pack-NFoerQuvzrs"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Quote3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default WelcomeContent;