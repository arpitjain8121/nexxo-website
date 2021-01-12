import React from "react";
import ibank from "./images/ibank.jpg";
import loan from "./images/loan-website.png";
import products from "./images/products.png";
import loyal from "./images/loyatly-app.png";
import screenshot from "./images/Screen-Shot-2019.png";
import insurancewebsite from "./images/insurancewebsite.png";
import sumninexxo from "./images/sumni-nexxo.png";
import {Sdata} from "./Sdata";

const SixthSection = () => {
    return (
        <>
            <div className="et_pb_section et_pb_section_8 et_pb_with_background et_section_regular">
                <div className="row et_pb_row et_pb_row_15">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_text et_pb_text_28 et_pb_bg_layout_light et_pb_text_align_left">
                            <div className="et_pb_text_inner">
                                <h1 style={{ textAlign: "center" }}>THE NEXXO FINANCIAL SERVICES ARE BUILT FOR YOUR SMALL BUSINESS</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_16">
                    <div className="col-lg-6 col-sm-6">
                        <LeftImageSection imgClass="et_pb_image_13" leftImg={ibank} />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <RightTxtSection heading={Sdata[0].heading} subheading={Sdata[0].subheading} para1={Sdata[0].para1} para2={Sdata[0].para2} />
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_17">
                    
                    <div className="col-lg-6 col-sm-6 order-xs-12">
                        <RightTxtSection heading={Sdata[1].heading} subheading={Sdata[1].subheading} para1={Sdata[1].para1} para2={Sdata[1].para2} para3={Sdata[1].para3} />
                    </div>

                    <div className="col-lg-6 col-sm-6 order-first order-sm-2">
                        <LeftImageSection imgClass="et_pb_image_14" leftImg={loan} />
                    </div>

                   
                </div>

                <div className="row et_pb_row et_pb_row_18">
                    <div className="col-lg-6 col-sm-6">
                        <LeftImageSection imgClass="et_pb_image_15" leftImg={products} />
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <RightTxtSection heading={Sdata[2].heading} subheading={Sdata[2].subheading} para1={Sdata[2].para1} para2={Sdata[2].para2} para3={Sdata[2].para3} para4={Sdata[2].para4} para5={Sdata[2].para5} />
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_19">
                    <div className="col-lg-6 col-sm-6">
                        <RightTxtSection heading={Sdata[3].heading} subheading={Sdata[3].subheading} para1={Sdata[3].para1} para2={Sdata[3].para2} />
                    </div>

                    <div className="col-lg-6 col-sm-6 order-first order-sm-2">
                        <LeftImageSection imgClass="et_pb_image_16" leftImg={loyal} />
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_20">
                    <div className="col-lg-6 col-sm-6">
                        <LeftImageSection imgClass="et_pb_image_17" leftImg={screenshot} />
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <RightTxtSection heading={Sdata[4].heading} subheading={Sdata[4].subheading} para1={Sdata[4].para1} para2={Sdata[4].para2} />
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_21">
                    <div className="col-lg-6 col-sm-6">
                        <RightTxtSection heading={Sdata[5].heading} subheading={Sdata[5].subheading} para1={Sdata[5].para1} para2={Sdata[5].para2} />
                    </div>

                    <div className="col-lg-6 col-sm-6 order-first order-sm-2">
                        <LeftImageSection imgClass="et_pb_image_18" leftImg={insurancewebsite} />
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_22">
                    <div className="col-lg-6 col-sm-6">
                        <LeftImageSection imgClass="et_pb_image_19" leftImg={sumninexxo} />
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <RightTxtSection heading={Sdata[6].heading} subheading={Sdata[6].subheading} para1={Sdata[6].para1} para2={Sdata[6].para2} para3={Sdata[6].para3} />
                    </div>
                </div>
            </div>
        </>
    );
};

const LeftImageSection = (props) => {
    return (
        <>
            <div className={`et_pb_module et_pb_image ${props.imgClass}`}>
                <span className="et_pb_image_wrap ">
                    <img src={props.leftImg} alt="" />
                </span>
            </div>
        </>
    );
};

const RightTxtSection = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_text et_pb_text_29 et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <h1>{props.heading}</h1>
                </div>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_30 et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <p>{props.subheading}</p>
                </div>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_31 et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                    <p className="p1">{props.para1}</p>
                    <p className="p1">{props.para2}</p>
                    <p className="p1">{props.para3}</p>
                    <p className="p1">{props.para4}</p>
                    <p className="p1">{props.para5}</p>
                </div>
            </div>
        </>
    );
};

export { SixthSection, LeftImageSection, RightTxtSection };
