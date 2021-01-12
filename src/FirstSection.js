import React from "react";
import logo from "./images/logonexxowebsite.png";
import mobileImg from './images/1111111_NEW.png'
import { CommonFirstSection, NumberText } from "./CommonFirstSection";

const FirstSection = () => {
    return (
        <>
            <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
                <div className="container">
                    <div className="row et_pb_row et_pb_row_0">
                        <div className="col-lg-12 col-xs-12">
                            <div className="et_pb_module et_pb_image et_pb_image_0">
                                <span className="et_pb_image_wrap ">
                                    <img src={logo} alt="LOGO" />
                                </span>
                            </div>

                            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p>Financial Services for</p>
                                    <p>Small Businesses</p>
                                    <p>Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_1 et_pb_row_4col">
                        <div className="col-lg-3 col-xs-6">
                            <CommonFirstSection number="7" />
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <CommonFirstSection number="321,008" />
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <CommonFirstSection number="24,098" />
                        </div>

                        <div className="col-lg-3 col-xs-6">
                            <CommonFirstSection number="65" />
                        </div>
                    </div>

                    <div className="row et_pb_row et_pb_row_2 et_pb_row_4col">
                        <div className="col-xs-6 col-lg-3">
                            <NumberText names="Countries" />
                        </div>
                        <div className="col-xs-6 col-lg-3">
                            <NumberText names="Consumer" />
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <NumberText names="Businesses" />
                        </div>
                        <div className="col-lg-3 col-xs-6">
                            <NumberText names="partners" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">
                <div className="row et_pb_row et_pb_row_3">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_image et_pb_image_1">
                            <span className="et_pb_image_wrap ">
                                <img src={logo} alt="" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_4">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_text et_pb_text_9 et_pb_bg_layout_light et_pb_text_align_left">
                            <div className="et_pb_text_inner">
                                <p>Financial Services for Small Businesses Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_5">
                       <div className="col-lg-12">
                        <div className="et_pb_module et_pb_image et_pb_image_2">
                            <span className="et_pb_image_wrap ">
                                <img src={mobileImg} alt="" style={{width:'100%'}}/>
                            </span>
                        </div>




                           </div> 

                </div>


            </div>
        </>
    );
};

export default FirstSection;
