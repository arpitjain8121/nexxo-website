import React from "react";


const FivthSection = () => {
    return (
        <>
            <div className="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular">
                <div className="row et_pb_row et_pb_row_13">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_text et_pb_text_27 et_pb_bg_layout_light et_pb_text_align_left">
                            <div className="et_pb_text_inner">
                                <h1 style={{ textAlign: "center" }}>
                                    <span style={{ color: "#ffffff" }}>GROW YOUR BUSINESS WITH NEXXO</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_14">
                    <div className="col-lg-4 col-sm-4">
                        <Testimonial imgName="testImg1" testimonialContent="Nexxo, in my opinion, is a game changer in the industry. As a former Chief Technology Officer, I left my job to start my own business. I had no idea how to manage my payroll accounts and processes. From a practical standpoint, Nexxo will turn every small business owner into a HR & Payroll Expert!" testimonialAuthor="Mohammed" testimonialCompany="Al Nama Restaurant" authorName=""/>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <Testimonial imgName="testImg2" testimonialContent="Nexxo opens up a lot of doors and opportunities for small business owners like me with lots of potential with easy-to-use products. Their unconventional POS solution is a platform with financial apps that enables me to manage all my transitions in one place." testimonialAuthor="Ajyal Aryal" testimonialCompany="Indigo Airline" authorName="testimonialimg2"/>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <Testimonial imgName="testImg3" testimonialContent="I got the Nexxo e-commerce for my online store, and it took less than 24 hours for my website to be up and running. The integration was so fast, that I can accept payments online and from WhatsApp, Facebook and Instagram." testimonialAuthor="Vistor Uch" testimonialCompany="J&V Car Wash & Service" authorName="testimonialimg3"/>
                    </div>
                </div>
            </div>
        </>
    );
};

const Testimonial = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_testimonial et_pb_testimonial_0 clearfix et_pb_bg_layout_light et_pb_text_align_left">
               
                <div className={`et_pb_testimonial_portrait ${props.imgName}`} style={{width:'90px',height:'90px',paddingBottom:'0'}}></div>
                <div className="et_pb_testimonial_description" style={{marginLeft: '0px'}}>
                    
                    <div className="et_pb_testimonial_description_inner">
                       
                        <p>
                            {props.testimonialContent}
                        </p>
                        <span className={`et_pb_testimonial_author ${props.authorName}`}>{props.testimonialAuthor}</span>
                        <p className="et_pb_testimonial_meta">
                            <span className="et_pb_testimonial_company">{props.testimonialCompany}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { FivthSection, Testimonial };
