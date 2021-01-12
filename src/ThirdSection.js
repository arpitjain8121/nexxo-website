import React from "react";
import Commonlogos from "./Commonlogos";
import Nexxo from "./images/NEXXO-CIRCLE.png";
import Qatar from "./images/qpaywebsitehero.png";
import pakistan from "./images/pknet.png";
import vietnam from "./images/VIETPAY-LOGO.png";
import dijla from "./images/dijla.png";

const ThirdSection = () => {
    return (
        <>
            <div className="et_pb_section et_pb_section_4 et_section_regular">
                <div className="row et_pb_row et_pb_row_8">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_bg_layout_light et_pb_text_align_left">
                            <div className="et_pb_text_inner">
                                <h1 style={{ textAlign: "center" }}>THE NEXXO MULTI-NATIONAL BRANDS</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_9">
                    <div className="et_pb_column et_pb_column_1_5 ">
                        <Commonlogos logoImg={Nexxo} logoTxt="INDIA" websiteLink="https://nexxo.com" />
                    </div>

                    <div className="et_pb_column et_pb_column_1_5 ">
                        <Commonlogos logoImg={Qatar} logoTxt="QATAR" websiteLink="https://qpay.com.qa.com" />
                    </div>
                     
                    <div className="et_pb_column et_pb_column_1_5">
                        <Commonlogos logoImg={pakistan} logoTxt="PAKISTAN" websiteLink="https://pknet.com.pk" />
                    </div>

                    <div className="et_pb_column et_pb_column_1_5">
                        <Commonlogos logoImg={vietnam} logoTxt="VIETNAM" websiteLink="https://vietpay.com" />
                    </div>

                    <div className="et_pb_column et_pb_column_1_5">
                        <Commonlogos logoImg={Nexxo} logoTxt="CYPRUS" websiteLink="#" />
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_10">
                    

                    <div className="et_pb_column et_pb_column_1_5">
                        <Commonlogos logoImg={dijla} logoTxt="IRAQ" websiteLink="" />
                    </div>

                    <div className="et_pb_column et_pb_column_1_5">
                        <Commonlogos logoImg={Nexxo} logoTxt="SINGAPORE" websiteLink="" />
                    </div>

                   
                </div>
            </div>
        </>
    );
};

export default ThirdSection;
