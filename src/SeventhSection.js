import React from 'react'

import { LeftImageSection, RightTxtSection } from './SixthSection';

import {Sdata } from './Sdata'

import blockchain from './images/blockchainwebsite.png'

const SeventhSection = () =>{
    return(
        <>
            <div className="et_pb_section et_pb_section_10 et_section_regular" >

                <div className="row et_pb_row et_pb_row_31">
                    <div className="col-lg-12">
                        <div className="et_pb_module et_pb_text et_pb_text_71 et_pb_bg_layout_light et_pb_text_align_left"> 
                            <div className="et_pb_text_inner"> 
                                <h1 style={{textAlign:'center'}}>
                                    <span style={{color: '#333300'}}>THE NEXXO BLOCKCHAIN</span>
                                </h1> 
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row et_pb_row et_pb_row_32">
                    <div className="col-lg-8">
                         <LeftImageSection imgClass="et_pb_image_27" leftImg={blockchain} />
                    </div>

                    <div className="col-lg-4 et_pb_text_72">
                      <RightTxtSection para1={Sdata[7].para1} para2={Sdata[7].para2} para3={Sdata[7].para3} />
                    </div>
                </div>

            </div>
        
        
        </>

    )
}

export default SeventhSection
