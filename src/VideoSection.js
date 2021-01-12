import React from "react";

import $ from 'jquery'

class VideoSection extends React.Component {

componentDidMount(){
    $(".et_pb_video_overlay").click(function(e){
        e.preventDefault();
        $(this).css('display','none');   
        var abc = $(this).parent('.et_pb_video').children('.et_pb_video_box').children('.fluid-width-video-wrapper').children('iframe').each(function(){
            var videosrc=$(this).attr("src")+"autoplay=1";

            $(this).attr('src' , videosrc )



                 
        })
         
    })
}
    render(){
        return (
            <>
                <div className="et_pb_section et_pb_section_12 et_pb_with_background et_section_regular">
                    <div className="row et_pb_row et_pb_row_35">
                        <div className="col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_76 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h1 style={{ textAlign: "center" }}>
                                        <span style={{ color: "#333300" }}>VIDEOS</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="row et_pb_row et_pb_row_36">
                        <div className="col-lg-6">
                            <VideoDisplay videoHeading="NEXXO MANAGEMENT TEAM" title="Meet the Nexxo Coin Management Team" src="https://www.youtube.com/embed/Rh5rur5o-Fg?" videoImg="nexxocoinimg" />
                        </div>
    
                        <div className="col-lg-6">
                            <VideoDisplay videoHeading="NEXXO BUSINESS MODEL" title="Nexxo Business Model" src="https://www.youtube.com/embed/CkHDaBoDU0I?" videoImg="nexxomodelimg" />
                        </div>
                    </div>
    
                    <div className="row et_pb_row et_pb_row_37">
                        <div className="col-lg-4 et_pb_column">
                            <VideoDisplayPart2 videoHeading="NEXXO AT WBF IN LONDON"  src="https://www.youtube.com/embed/ZzZkiLVjUp8?" videoImg="nexxowbf" />
                        </div>
    
                        <div className="col-lg-4 et_pb_column">
                            <VideoDisplayPart2 videoHeading="NEXXO FEATURED BY BLOOMBERG" src="https://www.youtube.com/embed/tGckrhTtNm4?" videoImg="bloomberg" />
                        </div>
    
                        <div className="col-lg-4 et_pb_column">
                            <VideoDisplayPart2 videoHeading="NEXXO POS" src="https://www.youtube.com/embed/Z3UsJgPf47U?" videoImg="pos" />
                        </div>
                    </div>
                </div>
            </>
        );

    }

   
    
};

const VideoDisplay = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_video et_pb_video_0">
                <div className="et_pb_video_box">
                    <div className="fluid-width-video-wrapper">
                        <iframe
                            style={{ width: "100%", height: "285px" }}
                            title={props.title}
                            src={props.src}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                            className="fitvid0"
                        ></iframe>
                    </div>
                </div>
                <div className={`et_pb_video_overlay ${props.videoImg}`}>
                    <div className="et_pb_video_overlay_hover">
                        <a href="#" className="et_pb_video_play"></a>
                    </div>
                </div>
            </div>


            <div className="et_pb_module et_pb_text et_pb_text_77 et_pb_bg_layout_light et_pb_text_align_left"> 
                <div className="et_pb_text_inner"> 
                    <p>{props.videoHeading}</p>
                </div>
            </div>
        </>
    );
};

const VideoDisplayPart2 = (props) => {
    return (
        <>
            <div className="et_pb_module et_pb_video et_pb_video_2">
                <div className="et_pb_video_box">
                    <div className="fluid-width-video-wrapper">
                        <iframe
                            style={{ width: "100%",height:'180px' }}
                            title={props.title}
                            src={props.src}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                            className="fitvid0"
                        ></iframe>
                    </div>
                </div>
                <div className={`et_pb_video_overlay overlay1 ${props.videoImg}`}>
                    <div className="et_pb_video_overlay_hover">
                        <a href="#" className="et_pb_video_play"></a>
                    </div>
                </div>
            </div>

            <div className="et_pb_module et_pb_text et_pb_text_79 et_pb_bg_layout_light et_pb_text_align_left"> 
                <div className="et_pb_text_inner"> 
                    <p>{props.videoHeading}</p>
                </div>
            </div>
        </>
    );
};

export { VideoSection, VideoDisplay,VideoDisplayPart2 };
