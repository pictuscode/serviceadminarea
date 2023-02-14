		$(document).ready(function(){
		$("#admin_setting").validate({
		rules: {
			admin_email: {
				required: true,
				email: true,
				
			},
			site_name: {required: true},
			meta_title: {required: true},
			meta_description: {required: true},
			meta_keywords: {required: true},
			gmap_key: {required: true}
		   },
		messages: {
			 admin_email: {
				required: "Please enter your admin email address",
				email:"Please enter a valid email address",
				remote:"Already exist"
			},
			site_name: "Please enter your site name",
			meta_title: "Please enter your meta title",
			meta_description: "Please enter your meta_description",
			meta_keywords: "Please enter your meta_keywords",
			gmap_key: "Please enter your gmap_key"
			}
		});
		});

		$(document).ready(function(){
		$.validator.addMethod("nameRegex", function(value, element) {
		return this.optional(element) || /^[a-z\- . ]+$/i.test(value);
		}, "Username must contain only letters, numbers, or dashes.");
		$.validator.addMethod("number", function(value, element) {
		return this.optional(element) || /^[0-9\-( ) + ]+$/i.test(value);
		}, "For Eg:1234567890, this field allows numbers,+,hyphen,(),single space only.");
		$.validator.addMethod("pwcheck", function(value) {
		return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
		&& /[a-z]/.test(value) // has a lowercase letter
		&& /\d/.test(value) // has a digit
		});
		$("#subregister_form").validate({
		rules: {
		admin_email: {
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
						  return $('#admin_setting :input[name="admin_email"]').val();
					  }
				  }
				}
			},
			password: {
		required: true,
		pwcheck:true,
		minlength: 5
		}
		},
		messages:{
			email: {
				required: "Please enter your email",
				email:"Please enter a valid email address",
				remote:"Already exist"
			},
		password: {
				required: "Please provide a password",
				pwcheck: "Please provide a strong password",
				minlength: "Your password must be at least 5 characters long"
			}
		}
		});

		$("#subregister_form_edit").validate({
		rules: {
		admin_email: {
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
						  return $('#admin_setting :input[name="admin_email"]').val();
					  }
				  }
				}
			},
			password: {
		required: true,
		pwcheck:true,
		minlength: 5
		}
		},
		messages:{
			email: {
				required: "Please enter your email",
				email:"Please enter a valid email address",
				remote:"Already exist"
			},
		password: {
				required: "Please provide a password",
				pwcheck: "Please provide a strong password",
				minlength: "Your password must be at least 5 characters long"
			}
		}
		});
		});

		$(document).ready(function(){

		$.validator.addMethod("nameRegex", function(value, element) {
		return this.optional(element) || /^[a-z\- . ]+$/i.test(value);
		}, "Username must contain only letters, numbers, or dashes.");
		$.validator.addMethod("number", function(value, element) {
		return this.optional(element) || /^[0-9\-( ) + ]+$/i.test(value);
		}, "For Eg:1234567890, this field allows numbers,+,hyphen,(),single space only.");
		$.validator.addMethod("pwcheck", function(value) {
		return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
		&& /[a-z]/.test(value) // has a lowercase letter
		&& /\d/.test(value) // has a digit
		});
		$("#subadmin_register").validate({
		rules: {
		firstname: {required: true},
		lastname: {required: true},
		email:{required: true},
		password: {
		required: true,
		pwcheck:true,
		minlength: 5
		}
		},
		messages:{
		firstname: "Please enter your first name",
		lastname: "Please enter your last name",
		email: "Please enter your email address",
		password: {
				required: "Please provide a password",
				pwcheck: "Please provide a strong password",
				minlength: "Your password must be at least 5 characters long"
			}
		}
		});
		$("#subadmin_register_edit").validate({
		rules: {
		firstname: {required: true},
		lastname: {required: true},
		email:{required: true},
		},
		messages:{
		firstname: "Please enter your first name",
		lastname: "Please enter your last name",
		email: "Please enter your email address",
		}
		});
		});

		$(document).ready(function(){
		$.validator.addMethod("pwcheck", function(value) {
		return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
		&& /[a-z]/.test(value) // has a lowercase letter
		&& /\d/.test(value) // has a digit
		});
		$.validator.addMethod('dob', function(value, element, param) {
		  var day = $('#dobDay').val();
		  var month = $('#dobMonth').val();
		  var year = $('#dobYear').val();
		  var date = new Date(year, month - 1, day);
		  return this.optional(element) || !/Invalid|NaN/.test(date);
		}, 'Please enter a valid date of birth');
		
		$("#student_register").validate({
		rules:{
		username: {required: true},
		password: {
		required: true,
		pwcheck:true,
		minlength: 5
		},
		email:{required: true,
		remote:
				{
				  url: baseurl+'admin/student/check_email',
				  type: "post",
				  data:
				  {
					  email: function()
					  {
						  return $('#student_register :input[name="email"]').val();
					  }
				  }
				}
		}/* ,
		
		work: {
			required: true
		},
		about: {
			required: true
		} */
		},
		messages:{
		username: "Please enter your name",
		password: {
				required: "Please provide a password",
				pwcheck: "Please provide a strong password",
				minlength: "Your password must be at least 5 characters long"
			},
		email:{         required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"},
		work:"Please enter your work",					
		about:"Please enter about you"
		}
		});

		$("#student_register_edit").validate({
		rules:{
		username: {required: true},
		email:{required: true,
			remote:
					{
					  url: baseurl+'admin/student/check_email_profile',
					  type: "post",
					  data:
					  {
						  email: function()
						  {
							  return $('#student_register_edit :input[name="email"]').val();
						  },
						  id:$('#student_register_edit').attr('data-user-id')
					  }
					}
		}/* ,
		work: {
			required: true
		},
		about: {
			required: true
		} */
		},
		messages:{
		username: "Please enter your name",
		password: {
				required: "Please provide a password",
				pwcheck: "Please provide a strong password",
				minlength: "Your password must be at least 5 characters long"
			},
		email:{         required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"},
		work:"Please enter your work",					
		about:"Please enter about you"
		}
		});		
		
		$("#guru_register").validate({
		rules:{
		username: {required: true},
		password: {
		required: true,
		pwcheck:true,
		minlength: 5
		},
		email:{required: true,
		remote:
				{
				  url: baseurl+'admin/guru/check_email',
				  type: "post",
				  data:
				  {
					  email: function()
					  {
						  return $('#guru_register :input[name="email"]').val();
					  }
				  }
				}
		}/* ,
		
		work: {
			required: true
		},
		quality_score: {
			required: true
		},
		about: {
			required: true
		} */
		},
		messages:{
		username: "Please enter your name",
		password: {
				required: "Please provide a password",
				pwcheck: "Please provide a strong password",
				minlength: "Your password must be at least 5 characters long"
			},
		email:{         required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"},
		work:"Please enter your work",					
		quality_score:"Please enter guru quality score",					
		about:"Please enter about you"
		}
		});

		$("#guru_register_edit").validate({
		rules:{
		username: {required: true},
		email:{required: true,
			remote:
					{
					  url: baseurl+'admin/guru/check_email_profile',
					  type: "post",
					  data:
					  {
						  email: function()
						  {
							  return $('#guru_register_edit :input[name="email"]').val();
						  },
						  id:$('#guru_register_edit').attr('data-user-id')
					  }
					}
		}/* ,
		
		work: {
			required: true
		},
		quality_score: {
			required: true
		},
		about: {
			required: true
		} */
		},
		messages:{
		username: "Please enter your name",
		email:{         required: "Please enter your email",
						email:"Please enter a valid email address",
						remote:"Already exist"},
		work:"Please enter your work",					
		quality_score:"Please enter guru quality score",				
		about:"Please enter about you"
		}
		});
		
		$("#listing_type").validate({
		rules:{		
		listing_name:{required: true}		},
		messages:{		
		listing_name:{required: "Please enter listing type name"}		
		}
		});

		$("#listing_type_edit").validate({
		
		rules:{		
		listing_name:{required: true}		},
		messages:{		
		listing_name:{required: "Please enter listing type name"}		
		}
		});
		$("#bed_type").validate({
		rules:{		
		bed_type_name:{required: true}		},
		messages:{		
		bed_type_name:{required: "Please enter bed type name"}		
		}
		});

		$("#bed_type_edit").validate({
		
		rules:{		
		bed_type_name:{required: true}		},
		messages:{		
		bed_type_name:{required: "Please enter bed type name"}		
		}
		});
		$("#rules").validate({
		rules:{		
		rules_name:{required: true}		},
		messages:{		
		rules_name:{required: "Please enter rule name"}		
		}
		});

		$("#rules_edit").validate({
		
		rules:{		
		rules_name:{required: true}		},
		messages:{		
		rules_name:{required: "Please enter rule name"}		
		}
		});
		$("#amenities").validate({
		rules:{		
		amn_name:{required: true},
		img:{required: true}
		},
		messages:{		
		amn_name:{required: "Please enter amenity name"},		
		img:{required: "please upload amenity icon"}		
		}
		});

		$("#amenities_edit").validate({
		
		rules:{		
		amn_name:{required: true}		},
		messages:{		
		amn_name:{required: "Please enter amenity name"}		
		}
		});
		$("#property_type").validate({
		rules:{		
		listing_id:{required: true},
		property_type_name:{required: true}
		},
		messages:{		
		listing_id:{required: "Please select listing type"},
		property_type_name:{required: "Please enter property type name"}
		
		}
		});

		$("#property_type_edit").validate({
		
		rules:{
		
		listing_name:{required: true}
		},
		messages:{		
		listing_name:{         required: "Please enter listing type name"
						}
		
		}
		});
		});

		$(document).ready(function(){
		$.validator.addMethod("pwcheck", function(value) {
		return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
		&& /[a-z]/.test(value) // has a lowercase letter
		&& /\d/.test(value) // has a digit
		});
		$("#tasker_register").validate({
		rules:{
		work_city: {required: true},
		home: {required: true},
		street: {required: true},
		city: {required: true},
		state:{required: true},
		dob: {required: true},
		phone_type: {required: true},
		vehicle_type: {required: true},
		hear_about: {required: true},
		first_name: {required: true},
		last_name: {required: true},
		email: {
				required: true,
				email: true,
				remote:
				{
				  url: baseurl+'admin/tasker/check_email',
				  type: "post",
				  data:
				  {
					  email: function()
					  {
						  return $('#tasker_register :input[name="email"]').val();
					  }
				  }
				}
			},
		password: {
				required: true,
				pwcheck:true,
				minlength: 5
			},
		zipcode: {required: true}
		},
		messages:{
		work_city: "Choose your work city",
		home: "Enter your home address",
		street: "Enter your street",
		city: "Enter your home city",
		state: "Enter your state",
		zipcode: "Enter your zipcode",
		dob: "Enter your DOB",
		phone_type: "Choose your phone type",
		vehicle_type: "Select your vehicles",
		hear_about: "Select how you hear about us",
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
		$("#tasker_register_edit").validate({
		rules:{
		work_city: {required: true},
		home: {required: true},
		street: {required: true},
		city: {required: true},
		state: {required: true},
		dob: {required: true},
		phone_type: {required: true},
		vehicle_type: {required: true},
		hear_about: {required: true},
		first_name: {required: true},
		last_name: {required: true},
		 email: {
				required: true,
				email: true,
				remote:
					{
					  url: baseurl+'admin/tasker/check_email_profile',
					  type: "post",
					  data:
					  {
						  email: function()
						  {
							  return $('#tasker_register_edit :input[name="email"]').val();
						  },
						  id:$('#tasker_register_edit').attr('data-user-id')
					  }
					}
			},
		zipcode: {required: true}
		},
		messages:{
		work_city: "Choose your work city",
		home: "Enter your home address",
		street: "Enter your street",
		city: "Enter your home city",
		state: "Enter your state",
		zipcode: "Enter your zipcode",
		dob: "Enter your DOB",
		phone_type: "Choose your phone type",
		vehicle_type: "Select your vehicles",
		hear_about: "Select how you hear about us",
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

		});

		$(document).ready(function(){
		$("#service_register").validate({
		rules:{
		task_name:{required: true},
		task_title: {required: true},
		task_description: {required: true},
		avg_price: {required: true},
		admin_percentage: {required: true},
		cancel_percentage: {required: true}
		},
		messages:{
		task_name: "Please enter task name",
		task_title: "Please enter task title",
		task_description: "Please enter task description",
		avg_price: "Please enter average price",
		admin_percentage: "Please enter admin percentage",
		cancel_percentage: "Please enter cancel percentage"			
		}
		});
		$("#service_register_edit").validate({
		rules:{
		task_name: {required: true},
		task_title: {required: true},
		task_description: {required: true},
		avg_price: {required: true},
		admin_percentage: {required: true},
		cancel_percentage: {required: true}
		},
		messages:{
		task_name: "Please enter task name",
		task_title: "Please enter task title",
		task_description: "Please enter task description",
		avg_price: "Please enter average price",
		admin_percentage: "Please enter admin percentage",
		cancel_percentage: "Please enter cancel percentage"			
		}
		});
		});

		$(document).ready(function(){
		$("#subcat_register").validate({
		rules:{
		cat_id: {required: true},
		subcat_name: {required: true}
		},
		messages:{
		cat_id: "Please choose category name",
		subcat_name: "Please enter sub category name"
		}
		});
		$("#subcat_register_edit").validate({
		rules:{
		cat_id: {required: true},	
		subcat_name: {required: true}
		},
		messages:{
		cat_id: "Please choose category name",	
		subcat_name: "Please enter sub category name"
		}
		});
		});

		$(document).ready(function(){
		$("#cms_register").validate({
		rules:{
		title: {required: true},
		footer_order: {required: true},
		content: {required: true}
		},
		messages:{
		title: "Please enter CMS title",
		footer_order: "Please select page type",
		content: "Please enter CMS content"
		}
		});

		$("#cms_register_edit").validate({
		rules: {
		title: {required: true},
		footer_order: {required: true},
		content: {required: true}
		},
		messages: {
		title: "Please enter title",
		footer_order: "Please select page type",
		content: "Please enter some text"
		}
		});
		});


		$(document).ready(function(){
		$("#email_register").validate({
		rules:{
		title: {required: true},
		subject: {required: true},
		content: {required: true}
		},
		messages:{
		title: "Please enter Template Name",
		subject: "Please enter email subject",
		content: "Please enter email content"
		}
		});
		$("#email_register_edit").validate({
		rules:{
		title: {required: true},
		subject: {required: true},
		content: {required: true}
		},
		messages:{
		title: "Please enter Template Name",
		subject: "Please enter email subject",
		content: "Please enter email content"
		}
		});
		});

		$(document).ready(function(){
		$("#payment_register").validate({
		rules:{
		name: {required: true},
		stripe_key: {required: true},
		stripe_secret: {required: true},
		client_id: {required: true}
		},
		messages:{
		name: "Please enter payment name",
		stripe_key: "Please enter stripe Key",
		stripe_secret: "Please enter stripe secret key",
		client_id: "Please enter client id",
		mode: "Please enter mode"
		}
		});
		$("#payment_register_edit").validate({
		rules:{
		name: {required: true},
		stripe_key: {required: true},
		stripe_secret: {required: true},
		client_id: {required: true}
		},
		messages:{
		name: "Please enter payment name",
		stripe_key: "Please enter stripe Key",
		stripe_secret: "Please enter stripe secret key",
		client_id: "Please enter client id",
		mode: "Please enter mode"
		}
		});
		});

		$(document).ready(function(){
		$("#currency_register").validate({
		rules:{
		country_name: {required: true},
		currency_symbols: {required: true},
		currency_type: {required: true},
		currency_rate: {required: true}
		},
		messages:{
		country_name: "Please enter country name",
		currency_symbols: "Please enter currency symbols",
		currency_type: "Please enter currency type",
		currency_rate: "Please enter currency rate"
		}
		});
		$("#currency_register_edit").validate({
		rules:{
		country_name: {required: true},
		currency_symbols: {required: true},
		currency_type: {required: true},
		currency_rate: {required: true}
		},
		messages:{
		country_name: "Please enter country name",
		currency_symbols: "Please enter currency symbols",
		currency_type: "Please enter currency type",
		currency_rate: "Please enter currency rate"
		}
		});
		});

		$(document).ready(function(){
		$("#city_register").validate({
		rules:{
		city_name:{required: true},
		photo:{required: true}
		},
		messages:{
		city_name:"Please enter your city name",
		photo:"Please upload city photo."
		}
		});
		$("#city_register_edit").validate({
		rules:{
		city_name:{required: true}
		},
		messages:{
		city_name:"Please enter your city name"
		}
		});
		});

		$(document).ready(function(){
		$("#language_form").validate({
		rules: {
		lang_name: {required: true},
		lang_code: {required: true}
		},
		messages:{
		lang_name: "Please enter Language name",
		lang_code: "Please enter Language code"
		}
		});
		});

		$(document).ready(function(){
		$("#language_form").validate({
		rules: {
		lang_name: {required: true},
		lang_code: {required: true},
		},
		 
		submitHandler: function(form){
		form.submit();
		}

		});
		});

		function save_language()
		{
		var is_valid = $('#language_form').valid();
		if(!is_valid)
		{
		return false;
		}
		var filename = baseurl+'admin/language/save_language';
		var request  = $.ajax({
		url  : filename,
		type : "POST",
		data : {     
		 lang_name     		:  $("#lang_name").val(), 
		 lang_code   		:  $("#lang_code").val(),
		 lang_status   		:  $("#lang_status").val(),
		 lang_id   			:  $("#lang_id").val(),

		},
		dataType : "html"
		});

		request.done(function(result){
		var output    = jQuery.parseJSON(result);

		if(output.flag == 1){	
		location.href = baseurl+"admin/language";
		}
		if(output.flag == 3){
		swal(
		'Oops...',
		'This language already exist!',
		'error'
		);
		}  
		});

		request.fail(function(jqXHR,textStatus){
		alert(textStatus);
		});     		
		}



		$(document).ready(function(){
		$("#dob").flatpickr({ 
				altInput: true,
				altFormat: "Y-n-j"						
			});
		});


		function language_delete(cat_id){
		swal({
		title: "Are you sure?",
		text: "Your will not be able to recover this data again!",
		type: "warning",
		showCancelButton: true,
		confirmButtonClass: "btn-danger",
		confirmButtonText: "Yes, delete it!",
		closeOnConfirm: false
		},

		function(){
		exicute_delete(cat_id);
		});
		}

		function exicute_delete(cat_id){
		var filename = baseurl+'admin/language/delete_language';

		var request  = $.ajax({
		url  : filename,
		type : "POST",
		data : {   
				cat_id   : cat_id, 
			},
		dataType : "html"
		});

		request.done(function(result){
		var output    = jQuery.parseJSON(result);
		if(output.flag == 1){
			swal("Saved!", "Successfully Deleted.!", "success");
			location.href = baseurl+"admin/language";
		}			
		});

		request.fail(function(jqXHR,textStatus){
		alert(textStatus);
		});			
		}
		$(document).ready(function(){
		$("#loginform").validate({
						rules: {
							admin_email: {
								required: true,
								email: true
							},
							admin_password: {
								required: true,
								minlength: 5
							}
						   },
						messages: {
							admin_password: {
								required: "Please provide a password",
								minlength: "Your password must be at least 5 characters long"
							},
							admin_email: {
								required: "Please enter a mail id",
								email:"Please enter a valid email address",
							}
							},
						submitHandler: function(form) {
							$.ajax(
								{
									type: "POST",
									url: baseurl+'admin/admin_settings/admin_login',
									dataType: "json",
									data: $('#loginform').serialize(),
									success: function(data)
									{ 
										if (data['status'] == 1)
										{
										  window.location.href=baseurl+'admin/admin_settings/dashboard';								  
										}
										else if (data['status'] == 2)
										{
										   swal('Error',data['message'],'error');
										}
										else
										{
										   swal('Error',data['message'],'error');
										}	
									}
								});
						}
					});
						$("#recoverform").validate({
							rules: {
								forgot_email: {
									required: true,
									email: true
								}
							   },
							messages: {
								
								forgot_email: {
									email:"Please enter a valid email address",
									required:"Please enter email address",
								}
								},
							submitHandler: function(form) {
								$.ajax(
									{
										type: "POST",
										url: baseurl+'admin/admin_settings/send_forgot_password',
										dataType: "json",
										data: $('#recoverform').serialize(),
										success: function(data)
										{ 
											if (data['status'] == 1)
											{
											  swal({title: "Success", text: "Password resetted successfully, check your mail.", type: "success"},
											   function(){ 
													window.location.href=baseurl+'admin'; 
												   }
												);								  
											}
											else if (data['status'] == 2)
											{
											   swal({title: "error", text: data['message'], type: "error"},
											   function(){ 
													/* window.location.href=baseurl+'admin'; */
												   }
												);
											}
											else
											{
											   swal('Error',data['message'],'error');
											}	
										}
									});
							}
						});			
		})
		
$(document).on("change","#country_dropdown",function(){ 
	$(".phcode").val($("#country_dropdown option:selected").attr("data-phcode"));
})

$(document).on("click",".report_btn",function(){
	var data=$(this).attr("data-val");
	if(data.length!=0){
	$("#review_report_model").modal("show");	
	$.post(baseurl+'admin/review/get_report',{data:data},function(data){
		$("#review_report").html(data);
	})
	}
})	
$(document).on("click",".report_btn_course",function(){
	var data=$(this).attr("data-val");
	if(data.length!=0){
	$("#review_report_model").modal("show");	
	$.post(baseurl+'admin/courses/get_report',{data:data},function(data){
		$("#review_report").html(data);
	})
	}
})	
$(document).on("click",".show_review",function(){
	var id=$(this).attr("data-id");
	
	$("#review_message_model").modal("show");	
	$.post(baseurl+'admin/review/get_review_comment',{id:id},function(data){
		$("#review_comments").html(data);
	})
	
})

$(document).on("click",".top_review_btn",function(){
	var data=$(this).attr("data-id");
	$("#featured_review_model").modal("show");	
	$.post(baseurl+'admin/guru/get_all_reviews',{data:data},function(data){
		$("#review_report").html(data);
	})	
})	
$(document).ready(function(){
		$("#service_fee_form").validate({
		rules:{
		guest_fee:{required: true},
		host_fee:{required: true}
		},
		messages:{
		guest_fee:"Please enter guest fee percentage",
		host_fee:"Please enter host fee percentage."
		}
		});
		$("#cancellation_form_description").validate({
		rules:{
		flexible:{required: true},
		moderate:{required: true},
		strict:{required: true}
		},
		messages:{
		flexible:"Please enter flexible short description ",
		moderate:"Please enter moderate short description",
		strict:"Please enter strict short description.",
		}
		});
		$("#cancellation_form").validate({
		rules:{
		flexible:{required: true},
		flexible_days:{required: true},
		moderate:{required: true},
		moderate_days:{required: true},
		strict:{required: true},
		strict_days:{required: true}
		},
		messages:{
		flexible:"Please enter flexible percentage ",
		flexible_days:"Please enter flexible min days ",
		moderate:"Please enter moderate percentage",
		moderate_days:"Please enter moderate min days",
		strict:"Please enter strict percentage.",
		strict_days:"Please enter strict min days."
		}
		});
		});	