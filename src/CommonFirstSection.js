import React from 'react';

const CommonFirstSection = (props) =>{
    return(
        <>
            <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_bg_layout_dark et_pb_text_align_left">
                <div className="et_pb_text_inner">
                     <p>{props.number}</p>
                </div>
            </div>
        </>
    )

}

const NumberText = (props) =>{
    return(
        <>
            <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_bg_layout_dark et_pb_text_align_left">
                 <div className="et_pb_text_inner"> 
                    <p>{props.names}</p>
                 </div>
            </div>

        </>
    )
}


export { CommonFirstSection , NumberText }