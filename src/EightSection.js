import React from 'react'

import { LeftImageSection, RightTxtSection } from './SixthSection';
import untitle from './images/Untitled-61.png'
import {Sdata} from './Sdata'

const EightSection = () =>{
    return(
        <>
            <div className="et_pb_section et_pb_section_11 et_pb_with_background et_section_regular">
                <div className="row et_pb_row et_pb_row_33">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_text et_pb_text_73 et_pb_bg_layout_light et_pb_text_align_left"> 
                            <div className="et_pb_text_inner"> 
                                <h1 style={{textAlign: 'left'}}>BECOME A NEXXO PARTNER</h1> 
                            </div>
                        </div>

                        <div className="et_pb_module et_pb_text et_pb_text_74 et_pb_bg_layout_light et_pb_text_align_left"> 
                            <div className="et_pb_text_inner"> 
                                <h1 style={{textAlign: 'left'}}> Achieve High Income while servicing Your Community</h1>
                            </div>
                        </div>


                    </div>

                </div>



                <div className="row et_pb_row et_pb_row_34">
                    <div className="col-lg-6">
                          <LeftImageSection imgClass="et_pb_image_28" leftImg={untitle} />
                    </div>

                    <div className="col-lg-6 et_pb_text_75">
                    <RightTxtSection para1={Sdata[8].para1} para2={Sdata[8].para2} />
                    </div>
                </div>



            </div>
        
        
        
        
        </>
    )
}

export default EightSection