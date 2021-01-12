import React from "react";
import $ from 'jquery'

class FormSection extends React.Component {

    componentDidMount(){

        $('.et_pb_contact_submit').click(function(e){
            let checkvalidate=true;


            if($("#enquirytype option:selected").val()==""){
                $("#enquirytype").addClass('et_contact_error');
                    checkvalidate=false;
            }else{
                $("#enquirytype").removeClass('et_contact_error');
            }

            if($("#fullname").val()==""){
                $("#fullname").addClass('et_contact_error');
                    checkvalidate=false;
            }else{
                $("#fullname").removeClass('et_contact_error');
            }

            if($("#email").val()==""){
                $("#email").addClass('et_contact_error');
                    checkvalidate=false;
            }else{
                $("#email").removeClass('et_contact_error');
            }
            if($("#description").val()==""){
                $("#description").addClass('et_contact_error');
                    checkvalidate=false;
            }else{
                $("#description").removeClass('et_contact_error');
            }


            if(checkvalidate==true){
                
                $.ajax({         
                    type: "POST",
                    url: "https://old.nexxo.com/nexxo_wordpress/sendmail.php",
                    data: $("#submitform").serialize(),
                    success: function(){
                        $('.thankyou').show();
                        $("#submitform").slideUp(1500);
                    }})
                    return false;
            }else{
                    return false
            }


        })
    }

    handleFormChange (){}

    render(){
        return (
            <>
                <div className="et_pb_section et_pb_section_13 et_section_regular">
                    <div className="row et_pb_row et_pb_row_38">
                        <div className="col-lg-12">
                            <div className="et_pb_module et_pb_text et_pb_text_82 et_pb_bg_layout_light et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <h1 style={{ textAlign: "center" }}>
                                        <span style={{ color: "#00000" }}>CONTACT US</span>
                                    </h1>
                                </div>
                            </div>
    
                            <div id="et_pb_contact_form_0" className="et_pb_with_border et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix" data-form_unique_num="0">
                                <div className="et-pb-contact-message"></div>
                                <p className="thankyou">
                                    <strong> Thanks for your enquiry.</strong> <br />
                                    We will get in touch with you shortly. <br />
                                </p>
                                <div className="et_pb_contact">
                                    <form id="submitform" className="et_pb_contact_form clearfix" method="post" action="contact.php">
                                        <p className="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_last" data-id="counrty" data-type="select">
                                            <label htmlFor="enquirytype" className="et_pb_contact_form_label">
                                                Country
                                            </label>
                                            <select id="enquirytype" className="et_pb_contact_select input errorcheck" name="enquirytype" data-required_mark="required" data-field_type="select" data-original_id="counrty">
                                                <option value="">Country</option>
                                                <option value="CYPRUS">CYPRUS</option>
                                                <option value="EGYPT">EGYPT</option>
                                                <option value="IRAQ">IRAQ</option>
                                                <option value="VIETNAM">VIETNAM</option>
                                                <option value="UAE">UAE</option>
                                                <option value="USA">USA</option>
                                                <option value="SINGAPORE">SINGAPORE</option>
                                                <option value="INDIA">INDIA</option>
                                                <option value="QATAR">QATAR</option>
                                                <option value="PAKISTAN">PAKISTAN</option>
                                            </select>
                                        </p>
                                        <p className="et_pb_contact_field et_pb_contact_field_1 et_pb_contact_field_last" data-id="name" data-type="input">
                                            <label htmlFor="fullname" className="et_pb_contact_form_label">
                                                Name
                                            </label>
                                            <input onChange={this.handleFormChange} defaultValue="" type="text" id="fullname" className="input errorcheck"  name="fullname" data-required_mark="required" data-field_type="input" data-original_id="name" placeholder="Name" />
                                        </p>
                                        <p className="et_pb_contact_field et_pb_contact_field_2 et_pb_contact_field_last" data-id="email" data-type="email">
                                            <label htmlFor="email" className="et_pb_contact_form_label">
                                                Email Address
                                            </label>
                                            <input onChange={this.handleFormChange} defaultValue="" type="text" id="email" className="input errorcheck" name="email" data-required_mark="required" data-field_type="email" data-original_id="email" placeholder="Email Address" />
                                        </p>
                                        <p className="et_pb_contact_field et_pb_contact_field_3 et_pb_contact_field_last" data-id="message" data-type="text">
                                            <label htmlFor="description" className="et_pb_contact_form_label">
                                                Message
                                            </label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                className="et_pb_contact_message input errorcheck"
                                                data-required_mark="required"
                                                data-field_type="text"
                                                data-original_id="message"
                                                placeholder="Message"
                                                onChange={this.handleFormChange}
                                            ></textarea>
                                        </p>
                                        
                                        <input onChange={this.handleFormChange} type="hidden" value="et_contact_proccess" name="et_pb_contactform_submit_0" /> 
                                        <input onChange={this.handleFormChange} type="text" value="" name="et_pb_contactform_validate_0" className="et_pb_contactform_validate_field" />
                                        <div className="et_contact_bottom_container">
                                            <button type="submit" className="et_pb_contact_submit et_pb_button et_pb_custom_button_icon" id="submit" data-icon="5">
                                                Submit
                                            </button>
                                        </div>
                                        <input type="hidden" id="_wpnonce-et-pb-contact-form-submitted-0" name="_wpnonce-et-pb-contact-form-submitted-0" value="faf4ca022e" /> <input type="hidden" name="_wp_http_referer" value="/" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }

    
};

export default FormSection;
