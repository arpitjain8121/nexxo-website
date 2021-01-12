import React from 'react';

const Commonlogos = (props) =>{
    return(
        <>
        <div className="et_pb_module et_pb_image et_pb_image_3 et_hover_enabled et_pb_section_video_on_hover et_pb_section_parallax_hover">
            <a href={props.websiteLink} target="_blank" rel="noopener noreferrer">
                <span className="et_pb_image_wrap ">
                    <img src={props.logoImg} alt="" />
                </span>

            </a>

           
        </div>

        <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_bg_layout_light et_pb_text_align_center">
             <div className="et_pb_text_inner"> 
                <p>{props.logoTxt}</p>
            </div>
        </div>
        </>
    )
}

export default Commonlogos