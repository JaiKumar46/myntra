import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        interval={4000}
        autoPlay={true}
        transitionTime={500}
        infiniteLoop={true}
      >
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/18/ef3b8626-d983-4330-889c-cf3cc63014951650286485393-luxe-beauty-fest-desktop--1---1-.jpg" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/d88bf465-8b71-489b-99f6-311c832b89ad1649528433105-Kurtas---Sets_Dk.jpg" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/90f7c989-c319-4472-95a8-2619d90c31e31649528657708-Premium-Watches_Dk.jpg" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/16/600e35a8-9a79-438e-a46d-09baf2e4b6f81650126465942-T-Shirts_Desk.jpg" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/16/eeb4729a-0eab-41ba-97f8-69b17ad0fd841650126465924-Handbags--Wallets---Clutches_Dk.jpg" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/ff085daa-289c-48ab-aa01-4bfb90d1e2281649528601945-Loreal-Pro_Desk_Baner--2-.jpg" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/9/7ccd40bf-d173-4f8c-a0b0-21672ebd8a671649528732325-Sports---Casual-Shoes_Dk.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider