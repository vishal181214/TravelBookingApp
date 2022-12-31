import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/4268/banner_kamal_banner.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/5869/banner_banner.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/7196/banner_banner-01.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
