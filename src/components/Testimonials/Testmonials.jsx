import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonialone from '../../assets/images/ava-1.jpg'
import testimonialtwo from '../../assets/images/ava-2.jpg'
import testimonialthree from '../../assets/images/ava-3.jpg'
import './testmonials.css'

const Testmonials = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3
    }

  return (
    <div>
         <div className="container mt-5" >
        <p className='fst-italic text-dark tesimonials'>Clients love</p>
        <h2 className='mt-1'>What our Clients say about us. </h2>
        <div className="row">
        <Slider {...settings}>
            <div className="col-md-4 mt-4 pe-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialone} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Peter Alice</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialtwo} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Alicen Parker</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialthree} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>John Deo</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialone} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Peter Alice</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialtwo} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Alicen Parker</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialthree} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>John Deo</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialone} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Peter Alice</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialtwo} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Alicen Parker</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialthree} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>John Deo</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialone} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Peter Alice</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialtwo} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>Alicen Parker</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et purus ultrices ligula dignissim sagittis ac nec ex. 
                    Pellentesque lectus metus, hendrerit quis purus ut, ullamcorper mattis ante. Proin vel congue ligula. Pellentesque lobortis 
                    ante efficitur, tristique massa eu, tristique urna.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialthree} alt="" className='h-100 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4>John Deo</h4>
                        <p>Customer</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            </Slider>
            </div>
            </div>
    </div>
  )
}

export default Testmonials