import React from 'react';
import screenshot1 from './images/Screen-Shot1.png'
import screenshot2 from './images/Screen-Shot2.png'
import screenshot3 from './images/Screen-Shot3.png'

 const FourthSection = () =>{
     return(
        <>
            <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
                <div className="row et_pb_row et_pb_row_11">
                    <div className="col-lg-12">
                          <div className="et_pb_module et_pb_text et_pb_text_23 et_pb_bg_layout_light et_pb_text_align_left"> 
                                <div className="et_pb_text_inner"> 
                                     <h1 style={{textAlign: 'center'}}>THE LATEST AT NEXXO</h1> 
                                </div>
                           </div>
                    </div>
                </div>



                <div className="row et_pb_row et_pb_row_12">
                    <div className="col-lg-4 col-sm-4">
                        <Gallery classChange="et_pb_text_24" screenLink="https://toshitimes.com/nexxo-blockchain-powered-banking-infrastructure-for-smes-in-emerging-markets/" screenshotimg={screenshot1} screenshotimgTxt="Blockchain Powered Banking Infrastructure for underbanked SMEs in Emerging Markets."/>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <Gallery classChange="et_pb_text_25" screenLink="https://www.financemagnates.com/thought-leadership/nexxo-launches-a-worldwide-game-changing-platform-for-small-businesses/" screenshotimg={screenshot2} screenshotimgTxt="NEXXO – Launches Game Changing Platform for Small Businesses"/>
                    </div>

                    <div className="col-lg-4 col-sm-4">
                        <Gallery classChange="et_pb_text_26" screenLink="https://cryptopotato.com/nexxo-private-permissioned-blockchain-solution-powered-by-ibms-hyperledger/" screenshotimg={screenshot3} screenshotimgTxt="Private Permissioned Blockchain Solution Powered by IBM’s
Hyperledger."/>
                    </div>

                </div>

            </div>
        
        
        
        
        </>

     )
 }   

 const  Gallery = (props) =>{
     return(
         <>
            <div className="et_pb_module et_pb_gallery et_pb_gallery_0 et_clickable et_pb_bg_layout_light et_pb_slider et_pb_gallery_fullwidth"> 
                <div className="et_pb_gallery_items et_post_gallery clearfix"> 
                    <div className="et_pb_gallery_item et_pb_bg_layout_light et-pb-active-slide"> 
                        <div className="et_pb_gallery_image landscape"> 
                            <a href={props.screenshotimg} title="">
                                     <img src={props.screenshotimg} alt="" /> 
                                     <span className="et_overlay"></span> 
                            </a> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={`et_pb_module et_pb_text ${props.classChange} et_clickable et_pb_bg_layout_light et_pb_text_align_left`}> 
                <div className="et_pb_text_inner"> 
                    <a className="changeLink" href={props.screenLink} target="_blank" rel="noopener noreferrer">
                    <p>{props.screenshotimgTxt}
                        <span style={{fontSize: '14px'}}> </span>
                    </p>
                    <p><span style={{fontSize: '14px'}}></span></p>
                    </a>
                </div>
            </div>
         </>
     )
 }


export {FourthSection , Gallery }