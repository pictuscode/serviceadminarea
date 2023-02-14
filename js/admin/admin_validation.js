(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
		$.validator.addMethod("pwcheck", function(value) {
		   return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
			   && /[a-z]/.test(value) // has a lowercase letter
			   && /\d/.test(value) // has a digit
		});
				
             $("#register-form").validate({
                rules: {
                    first_name: "required",
                    last_name: "required",
                    email: {
                        required: true,
                        email: true,
						remote:
						{
						  url: baseurl+'admin/user/check_email',
						  type: "post",
						  data:
						  {
							  email: function()
							  {
								  return $('#register-form :input[name="email"]').val();
							  }
						  }
						}
                    },
                    password: {
                        required: true,
						pwcheck:true,
                        minlength: 5
                    },
					zipcode:
					{
					required:true
					}
				   },
                messages: {
                    first_name: "Please enter your firstname",
                    last_name: "Please enter your lastname",
                    password: {
                        required: "Please provide a password",
                        pwcheck: "Please provide a strong password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    email: {
						required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"
					},
					zipcode:"Please enter your zipcode"
					}
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);

(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
		$.validator.addMethod("pwcheck", function(value) {
		   return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
			   && /[a-z]/.test(value) // has a lowercase letter
			   && /\d/.test(value) // has a digit
		});
				
             $("#register-form-edit").validate({
                rules: {
                    first_name: "required",
                    last_name: "required",
                    email: {
                        required: true,
                        email: true,
						remote:
						{
						  url: baseurl+'site/user/check_email_profile',
						  type: "post",
						  data:
						  {
							  email: function()
							  {
								  return $('#register-form-edit :input[name="email"]').val();
							  },
							  id:$('#register-form-edit').attr('data-user-id')
						  }
						}
                    },
                    password: {
                        
						
                        minlength: 5
                    },
					zipcode:
					{
					required:true
					}
				   },
                messages: {
                    first_name: "Please enter your firstname",
                    last_name: "Please enter your lastname",
                    password: {
                        required: "Please provide a password",
                        pwcheck: "Please provide a strong password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    email: {
						required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"
					},
					zipcode:"Please enter your zipcode"
					}
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);

(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#login-form").validate({
                rules: {
                    login_email: {
                        required: true,
                        email: true
					},
                    login_password: {
                        required: true,
                        minlength: 5
                    }
				   },
                messages: {
                    login_password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    login_email: {
						required: "Please enter your email",
						email:"Please enter a valid email address"
					}
					},
                submitHandler: function(form) {
                    $.ajax(
						{
							type: "POST",
							url: baseurl+'site/user/login_process',
							dataType: "json",
							data: $('#login-form').serialize(),
							success: function(data)
							{ 
								if (data['status'] == 1)
								{
								   swal({title: "Good job", text: "Logged in successfully", type: "success"},
								   function(){ 
										   location.href=baseurl;
									   }
									);								  
								}
								else if (data['status'] == 2)
								{
								   swal('Oops',data['message'],'error');
								}
								else
								{
								  swal('Oops',data['message'],'error');
								}	
							}
						});
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);


(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
		
				
             $("#profile-tab1-edit-form").validate({
                rules: {
                    first_name: "required",
                    last_name: "required",
                    email: {
                        required: true,
                        email: true,
						remote:
						{
						  url: baseurl+'site/user/check_email_profile',
						  type: "post",
						  data:
						  {
							  email: function()
							  {
								  return $('#profile-tab1-edit-form :input[name="email"]').val();
							  },
							  id:$('#profile-tab1-edit-form').attr('data-user-id')
						  }
						}
                    },
                    password: {
                        required: true,
						pwcheck:true,
                        minlength: 5
                    },
					phone:
					{
					required:true,
					number:true
					},
				   zipcode:
					{
					required:true
					}
				   },
                messages: {
                    first_name: "Please enter your firstname",
                    last_name: "Please enter your lastname",
                    phone: {
                        required: "Please provide a mobile"                       
                    },
                    email: {
						required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"
					},
					zipcode:"Please enter your zipcode"
					},
                submitHandler: function(form) {
                    $.ajax(
						{
							type: "POST",
							url: baseurl+'site/user/save_profile_tab1',
							dataType: "json",
							data: $('#profile-tab1-edit-form').serialize(),
							success: function(data)
							{ 
								if (data['success'] == 1)
								{
								  swal({title: "Success", text: "Account updated successfully.", type: "success"},
								   function(){ 
										$('#l_name').html(data['name']);
										$('#l_email').html(data['email']);
										$('#l_phone').html(data['phone']);
										$('#l_zipcode').html(data['zipcode']);
										$("#profile_tab1_edit_form").css('display','none');
										$("#profile_tab1_form").css('display','block');
										
									   }
									);
								}
								else if (data['success'] == 2)
								{
								  swal({title: "Oops", text: "This email address is already registered.", type: "error"},
								   function(){ 
										$('#l_name').html(data['name']);
										$('#l_email').html(data['email']);
										$('#l_phone').html(data['phone']);
										$('#l_zipcode').html(data['zipcode']);
										$("#profile_tab1_edit_form").css('display','none');
										$("#profile_tab1_form").css('display','block');
									   }
									);
								}
								
							},
							error: function(xhr, textStatus, errorThrown)
							{
								alert('ajax loading error... ... '+url + query);
								return false;
							}
						});
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);

(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
		
				
             $("#profile-tab2-edit-form").validate({
                rules: {
                    current_password: {
                        required: true,
                        remote:
						{
						  url: baseurl+'site/user/check_current_password',
						  type: "post",
						  data:
						  {
							  current_password: function()
							  {
								  return $('#profile-tab2-edit-form :input[name="current_password"]').val();
							  }
						  }
						}
                    },
                    new_password: {
                        required: true,
						pwcheck:true,
						minlength: 5
                    },
					confirm_password:
					{
					required:true,
					equalTo: '#new_password'
					}
				   },
                messages: {
                     current_password: {
                        required: "Please provide your current password",
                        remote: "Your current password is wrong"
                    },  new_password: {
                        required: "Please provide a new password",
                        pwcheck: "Please provide a strong password",
						notequalTo:"current and new password are same",
                        minlength: "Your password must be at least 5 characters long"
                    },  confirm_password: {
                        required: "Please provide a confirm password",
                        equalTo: "Please enter same password",
                        
                    }
					},
                submitHandler: function(form) {
                    $.ajax(
						{
							type: "POST",
							url: baseurl+'site/user/save_profile_tab2',
							dataType: "json",
							data: $('#profile-tab2-edit-form').serialize(),
								success:function(e){
									if(e['status']==0)
										{
										swal('Error',e['message'],'error');
										}
										else
										{
										swal('Success',e['message'],'success');	
										}
										$('#profile-tab2-edit-form').trigger('reset');
								
							},
							error: function(xhr, textStatus, errorThrown)
							{
								alert('ajax loading error... ... '+url + query);
								return false;
							}
						});
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
			$("#profile-tab3-edit-form").validate({               
                submitHandler: function(form) {
                    $.ajax(
						{
							type: "POST",
							url: baseurl+'site/user/save_profile_tab3',
							dataType: "json",
							data: $('#profile-tab3-edit-form').serialize(),
								success:function(e){
									if(e['status']==0)
										{
										swal('Error',e['message'],'error');
										}
										else
										{
										swal('Success',e['message'],'success');	
										}
										$('#profile-tab2-edit-form').trigger('reset');
								
							},
							error: function(xhr, textStatus, errorThrown)
							{
								alert('ajax loading error... ... '+url + query);
								return false;
							}
						});
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);

$('#user-profile-photo').change(function () {
    var ext = this.value.match(/\.(.+)$/)[1];
    switch (ext) {
        case 'jpg':
        case 'jpeg':
        case 'png':
		case 'JPG':
        case 'JPEG':
        case 'PNG':
        $('#uploadButton').attr('disabled', false);
            break;
        default:
            swal('Error','This is not an allowed file type.','error');
            this.value = '';
    }
});
