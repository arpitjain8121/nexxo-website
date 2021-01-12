import React , {useEffect} from 'react';
import {FooterData} from './Sdata'
import $ from 'jquery'

const Footer = () =>{

    useEffect(() => {
       
        let d = new Date();
        let n = d.getFullYear(); 
        $("#copyright-year").text(n);
        
    })
    return(
        <>
            <div className='et_pb_section et_pb_section_14 et_pb_with_background et_section_regular'>
                <div className="row et_pb_row et_pb_row_39">
                    <div className="col-lg-12">
                         <div className="et_pb_module et_pb_text et_pb_text_83 et_pb_bg_layout_light et_pb_text_align_left">
                              <div className="et_pb_text_inner"> 
                                <h1 style={{textAlign: 'center'}}>
                                    <span style={{color: '#ffffff'}}>OUR OFFICES <br/> <br/>
                                    </span>
                                </h1> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_40">
                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[0].heading} address={FooterData[0].address}/> 
                    </div>

                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[1].heading} address={FooterData[1].address}/> 
                    </div>

                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[2].heading} address={FooterData[2].address}/> 
                    </div>

                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[3].heading} address={FooterData[3].address}/> 
                    </div>
                </div>



                <div className="row et_pb_row et_pb_row_41 et_pb_row_4col">
                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[4].heading} address={FooterData[4].address}/> 
                    </div>

                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[5].heading} address={FooterData[5].address}/> 
                    </div>

                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[6].heading} address={FooterData[6].address}/> 
                    </div>

                    <div className="col-lg-3 col-sm-6">
                         <CompanyDetails heading= {FooterData[7].heading} address={FooterData[7].address}/> 
                    </div>
                </div>

               

                <div className="row et_pb_row et_pb_row_43">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space"> 
                            <div className="et_pb_divider_internal">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_44">
                    <div className="col-lg-6">
                        <div className="et_pb_module et_pb_text et_pb_text_84 et_pb_bg_layout_light et_pb_text_align_left"> 
                           <div className="et_pb_text_inner"> 
                               <p>ENG I हिन्दी I Tiếng Việt </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">

                    <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0 clearfix et_pb_bg_layout_light et_pb_text_align_right">
                        <SocialIcons title="Follow on Facebook" links="https://www.facebook.com/NexxoNetwork/" socialClass="et-social-facebook" />

                        <SocialIcons title="Follow on Twitter" links="https://twitter.com/NexxoInt" socialClass="et-social-twitter" />

                        <SocialIcons title="Follow on Youtube" links="https://www.youtube.com/channel/UCd44NmVcZVB2InBVWgkx1hQ" socialClass="et-social-youtube" />
                      </ul>  
                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_45">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_divider et_pb_divider_1 et_pb_divider_position_ et_pb_space"> 
                            <div className="et_pb_divider_internal">
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row et_pb_row et_pb_row_46">
                    <div className="col-lg-12">
                      <div className="et_pb_module et_pb_text et_pb_text_85 et_pb_bg_layout_light et_pb_text_align_left"> 
                        <div className="et_pb_text_inner"> 
                            <p>© <span id="copyright-year">2020</span>, All Rights Reserved, Nexxo Financial Corporation</p>
                        </div>
                        </div>
                    </div>

                </div>


            </div>
        
        </>

    )
}

const CompanyDetails = (props) =>{
    return (
        <>
            <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_bg_layout_dark1 et_pb_text_align_left et_pb_blurb_position_top">
                 <div className="et_pb_blurb_content"> 
                    <div className="et_pb_blurb_container"> 
                        <h4 className="et_pb_module_header">{props.heading}</h4> 
                        <div className="et_pb_blurb_description"> 
                            <p>{props.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}

const SocialIcons = (props) =>{
    return(
        <>
            
                <li className={`et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link ${props.socialClass} et_pb_social_media_follow_network_0`}>
                         <a href={props.links} className="icon et_pb_with_border" title={props.title} target="_blank">
                             <span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span>
                        </a>

                </li>

            
        
        </>
    )
}

export {Footer, CompanyDetails, SocialIcons}