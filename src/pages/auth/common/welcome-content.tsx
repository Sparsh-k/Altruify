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
          className="d-block h-max"
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-max"
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-max"
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default WelcomeContent;