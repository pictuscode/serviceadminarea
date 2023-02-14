$(document).on("change","#group_class_from",function(){
	var selected_from=$(this).val();
	$('#group_class_to option').prop('disabled', false);
	$('#group_class_to option').filter(function() {
		$('#group_class_to').val('');	
		return $(this).val() <= selected_from;
	}).prop('disabled', true);
	var timetext = convert_number_time($("input[name='no_of_hour_per_lession']").val()); 	
	$("#group_class_to").val(timetext);
})

$(document).on("change","#group_class_to",function(){ 
	if($('#group_class_from').val()==" "){
		$('#group_class_from').focus();
		$('#group_class_to').val('');	
	}
})
$(document).on("change",".no_of_hour_per_lession",function(){ 
	
	if ( $(this).val().indexOf(".") !=-1) {
		var value_less=$(this).val().split(".");
		if(value_less[1]!="5" && value_less[1]!="50" && value_less[1]!="0"){
			$(".no_of_hour_per_lession").val("");
		}
		else if(parseInt(value_less[0])>24){
			$(".no_of_hour_per_lession").val("");
		}
		else{
			if($("#lession_type").val()==0){
				var timetext = convert_number_time($("input[name='no_of_hour_per_lession']").val()); 	
				$("#group_class_to").val(timetext);
			}
			else{
				var timetext = convert_number_time_pvt($("input[name='no_of_hour_per_lession']").val()); 	
				$("#pvt_class_to").val(timetext);
			}
		}
	}
	else{
		if($(this).val()>24){
			$(".no_of_hour_per_lession").val("");
		}
		else{
			if($("#lession_type").val()==0){
				var timetext = convert_number_time($("input[name='no_of_hour_per_lession']").val()); 	
				$("#group_class_to").val(timetext);
			}
			else{
				var timetext = convert_number_time_pvt($("input[name='no_of_hour_per_lession']").val()); 	
				$("#pvt_class_to").val(timetext);
			}
		}
	}
	
	
})

$(document).on("change","#pvt_class_from",function(){
	var selected_from=$(this).val();
	$('#pvt_class_to option').prop('disabled', false);
	$('#pvt_class_to option').filter(function() {
		$('#pvt_class_to').val('');	
		return $(this).val() <= selected_from;
	}).prop('disabled', true);
	var timetext = convert_number_time_pvt($("input[name='no_of_hour_per_lession']").val()); 	
	$("#pvt_class_to").val(timetext);
})

$(document).on("change","#pvt_class_to",function(){ 
	if($('#pvt_class_from').val()==" "){
		$('#pvt_class_from').focus();
		$('#pvt_class_to').val('');	
	}
})

/*$(document).on("change","#lession_type",function(){ 
	if($(this).val()==1){
		$(".private_hide").css("display","none");
		$(".private_show").css("display","block");
	}
	else{
		$(".private_hide").css("display","block");
		$(".private_show").css("display","none");
	}
})*/
$(document).on("change","#upload_img",function(){ 
    
	var data = new FormData();
	$.each($('#upload_img')[0].files, function(i, file) {
    data.append('photo[]', file);
	});
	data.append('cid',$("#course_id").val() );
	$.ajax({
	url: baseurl+"admin/courses/ajax_img_upload", 
	type: "POST",             
	data: data, 
	dataType: "json",
	contentType: false,       
	cache: false,            
	processData:false,       
	success: function(data)   
	{
	var arr=[];	
	if(data.status=="1"){ 
	var array = (data.img); 
    for(i=array.length;i>0;i--)
	{
		
		var resval=(-1-i);
		$('#imgupload_ul li:eq('+resval+') .photo_preview_inner').html('<div class="responsive_img" style="background: url('+baseurl+"images/site/course/"+array[i-1]+')"></div><div class="default_photo default_photo_btn" data-img="'+array[i-1]+'"><h5><span class="defalult_icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13"><defs><path id="8a01a" d="M397.5 364.95l4 3.05-1.51-4.97 4-2.94h-4.87L397.5 355l-1.63 5.09H391l4 2.94-1.51 4.97z"></path></defs><g><g transform="translate(-391 -355)"><use  xlink:href="#8a01a"></use></g></g></svg></span></h5></div><div class="delete_photo" data-name="'+array[i-1]+'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><defs><path id="4xzqa" d="M390.14 599.1v1.82c0 .4-.32.72-.72.72h-1.35v10.7c0 .39-.33.71-.72.71H376.5a.72.72 0 0 1-.72-.72v-10.69h-1.35a.72.72 0 0 1-.72-.72v-1.82c0-1.1.9-1.99 2-1.99h4.34c.1-.28.37-.48.68-.48h2.38c.31 0 .57.2.67.48h4.36a2 2 0 0 1 1.99 2zm-3.51 2.54h-9.4v9.97h9.4zm2.07-1.44v-1.1c0-.3-.25-.55-.55-.55H375.7c-.3 0-.55.25-.55.55v1.1zm-9.38 8.2v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0zm3.78 0v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0z"></path></defs><g><g transform="translate(-372 -595)"><use fill="#fff" xlink:href="#4xzqa"></use></g></g></svg></div>' ); 
		$('#imgupload_ul li:eq('+resval+')').attr("data-img-name",array[i-1]);
	}
	
	}
	else if(data.status=="2"){
		var array = (data.img); 
		for(i=array.length;i>0;i--)
		{
			
			var resval=(-1-i);
			var img_name=array[i-1];
			if(img_name=="error"){
				$('#imgupload_ul li:eq('+resval+')').remove();
			}
			else{
				$('#imgupload_ul li:eq('+resval+') .photo_preview_inner').html('<div class="responsive_img" style="background: url('+baseurl+"images/site/course/"+array[i-1]+')"></div><div class="default_photo default_photo_btn" data-img="'+array[i-1]+'"><h5><span class="defalult_icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13"><defs><path id="8a01a" d="M397.5 364.95l4 3.05-1.51-4.97 4-2.94h-4.87L397.5 355l-1.63 5.09H391l4 2.94-1.51 4.97z"></path></defs><g><g transform="translate(-391 -355)"><use  xlink:href="#8a01a"></use></g></g></svg></span></h5></div><div class="delete_photo" data-name="'+array[i-1]+'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><defs><path id="4xzqa" d="M390.14 599.1v1.82c0 .4-.32.72-.72.72h-1.35v10.7c0 .39-.33.71-.72.71H376.5a.72.72 0 0 1-.72-.72v-10.69h-1.35a.72.72 0 0 1-.72-.72v-1.82c0-1.1.9-1.99 2-1.99h4.34c.1-.28.37-.48.68-.48h2.38c.31 0 .57.2.67.48h4.36a2 2 0 0 1 1.99 2zm-3.51 2.54h-9.4v9.97h9.4zm2.07-1.44v-1.1c0-.3-.25-.55-.55-.55H375.7c-.3 0-.55.25-.55.55v1.1zm-9.38 8.2v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0zm3.78 0v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0z"></path></defs><g><g transform="translate(-372 -595)"><use fill="#fff" xlink:href="#4xzqa"></use></g></g></svg></div>' ); 
				$('#imgupload_ul li:eq('+resval+')').attr("data-img-name",array[i-1]);
			}
		}
		swal(error_text,data.message,"error");
	}
	}
	});
});

function preview_image() 
{ 
  var total_file=document.getElementById("upload_img").files.length;
  var regExp = new RegExp('image.(jpeg|jpg|gif|png)', 'i');	
  var files=document.getElementById("upload_img").files;	
	for(var i=0;i<total_file;i++)
	{
		  var file = file = files[i];
		  var matcher = regExp.test(file.type);

		  if (!matcher)
		  {
			  //swal(error_text,invalid_format_warning,"error"); 
			 newdat=$('#imgupload_ul li:last').clone();
			 var li_count=$("#imgupload_ul li").length-1;  
			 $("#imgupload_ul").append(newdat);
			 var outimg=baseurl+"images/site/loadspin.gif";
			 $('#imgupload_ul li:eq(-2) .photo_preview_inner').html('<div class="photo_container" ><img class="loader_image_img loader_img_new" src="'+outimg+'" width="50" /></div>' );
			 $("#imgupload_ul li:eq(-2)").removeClass('last_photo_li');
		  }
		  else{
			 newdat=$('#imgupload_ul li:last').clone();
			 var li_count=$("#imgupload_ul li").length-1;  
			 $("#imgupload_ul").append(newdat);
			 var outimg=baseurl+"images/site/loadspin.gif";
			 $('#imgupload_ul li:eq(-2) .photo_preview_inner').html('<div class="photo_container" ><img class="loader_image_img loader_img_new" src="'+outimg+'" width="50" /></div>' );
			 $("#imgupload_ul li:eq(-2)").removeClass('last_photo_li');
		  }		 
	}
}
$(document).on("click","#save_later_btn",function(){
	if($("#lession_type").val()==0){
		window.location.href=baseurl+"admin/courses/display_courses_list"; 
	}
	else{
		window.location.href=baseurl+"admin/courses/display_courses_list"; 
	}
})
$(document).on("click","#complete_publish_btn",function(){
	if($("#lession_type").val()==0){
		var class_description=$("#class_description_textarea").val();
		var string_check=string_email_phoneno_validation(class_description);
		if(string_check=="error"){
			return false;
		}
		else if($(".delete_ava_date").length==0){
			swal(error_text,select_available_warning,"error"); 	return false;
		}
		/*else if($(".delete_ava_date").length!=$("input[name='total_no_lession']").val()){
			swal(error_text,lession_timeslot_missmatch,"error"); 	return false;
		}*/
		else if($(".not_hover").length>0){
		  $('#group_course_form').submit();
		}
		else{
		  swal(error_text,feature_image_warning,"error"); 	
		}
	}
	else{
		
		if($(".not_hover").length==0){
		  swal(error_text,feature_image_warning,"error"); 	
		  return false;
		}
		else if($(".del_district").length==0){
			swal(error_text,select_district,"error"); 	
		    return false;
		}
		else if($(".delete_ava_date_pvt").length==0){
			swal(error_text,select_available_warning,"error"); 	return false;
		}
		else{
			$('#private_course_form').submit();
		}
		
	}
})

function string_email_phoneno_validation(text_value){
			var email_patr=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
			var email_check=text_value.match(email_patr);
			var phone_pat=/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/img;
			var phoneno_check=text_value.match(phone_pat);
			
			if(email_check!=null){
				swal(error_text,remove_email_text,"error");
				return "error";
			}
			else if(phoneno_check!=null){
				swal(error_text,remove_phone_text,"error");
				return "error";
			}
			else {
				return "true";
			}
			

}
function string_email_phoneno_validation_message(text_value){
			var email_patr=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
			var email_check=text_value.match(email_patr);
			var phone_pat=/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/img;
			var phoneno_check=text_value.match(phone_pat);
			
			if(email_check!=null){
				swal(error_text,remove_email_text,"error");
				return "error";
			}
			else if(phoneno_check!=null){
				swal(error_text,remove_phone_text,"error");
				return "error";
			}
			else {
				return "true";
			}
			

}  

        $('.message_det').click(function(){
				$('#inbox_intro').fadeOut(50);
				$('#inbox_chat').fadeIn(100);
		})

		$('#add_course').click(function(){
			$('#course_add').fadeOut(50);
			$('#course_add_list').fadeIn(100);
		})
		$('#comple_cour').click(function(){
			$('#course_add_list').fadeOut(50);
			$('#course_list').fadeIn(100);
		})

		
$(document).on('change','#lession_type',function(){ 
            var course_id=$("#course_id").val();
			$('.main_course_class').fadeOut();
			$.post(baseurl+"admin/courses/drop_existing_info",{'course_id':course_id},function(data){});
			if($(this).val()==0){
				$("#private_class").html("");
				$('#private_class').fadeOut();
				$("#group_class").html('<div class="loadbg"><img class="spinloader" src="'+baseurl+'images/site/loadspin.gif"></div>');
				$('#group_class').fadeIn();
				$.post(baseurl+"admin/courses/get_group_lession",{'course_id':course_id},function(data){
				  var data=JSON.parse(data);
				  if(data.status==1){
				  $("#group_class").html(data.html);	  
				  $('#group_class').fadeIn();
				  if($("#category_select").val()!=""){
						setTimeout(function(){	
						 var lival=$("#category_select");
							$.post(baseurl+'admin/courses/get_subcat_list',{'cat_id':$("#category_select").val(),'subcat_id':$("#category_select").attr("data-subcat")},function(data){
							  var data=JSON.parse(data);
							  if(data.status==1){
								 $("#subcat_dropdown").html(data.html_list);
							  }
							  else{
									window.location.href=baseurl;
								}
							});
						},1000);
					  }
				  }
				});
			}
			else if($(this).val()==1){
				 $("#group_class").html("");
				$('#group_class').fadeOut();
				$("#private_class").html('<div class="loadbg"><img class="spinloader" src="'+baseurl+'images/site/loadspin.gif"></div>');
				$('#private_class').fadeIn();
				$.post(baseurl+"admin/courses/get_private_lession",{'course_id':course_id},function(data){
				  var data=JSON.parse(data);
				  $("#private_class").html(data.html);
				  $('#private_class').fadeIn();
				  $.post(baseurl+"admin/courses/ajax_cal",{'course_id':course_id},function(data){ 
							  $("#calender_load").html(data);       
	                         })
				  if($("#category_select").val()!=""){
						 setTimeout(function(){	
						 
						 var lival=$("#category_select");
							$.post(baseurl+'admin/courses/get_subcat_list',{'cat_id':$("#category_select").val(),'subcat_id':$("#category_select").attr("data-subcat")},function(data){
							  var data=JSON.parse(data);
							  if(data.status==1){
								 $("#subcat_dropdown").html(data.html_list);
							  }
							  else{
									window.location.href=baseurl;
								}
							});
						},1000);
					  }
				});
			}
			else{
				$('#private_class').fadeOut();
				$('#group_class').fadeOut();
			}
            
        });
       
$(document).on("click","#save_group_class",function(){
	var group_class_date=$("#group_class_date").val();
	var group_class_from=$("#group_class_from").val();
	var group_class_to=$("#group_class_to").val(); 
	var course_id=$("#course_id").val();
	var lession_per_hour=$("input[name='no_of_hour_per_lession']").val();
	$("#group_class_date_error").html("");
	$("#group_class_time_error").html("");
	if(group_class_date==""){
		$("#group_class_date_error").html(select_date).fadeIn(500); return false;
	}
	else if(group_class_from==""){
		$("#group_class_time_error").html(select_time).fadeIn(500); return false;
	}
	/*else if(group_class_to=="" || group_class_to==null){
		$("#group_class_time_error").html(select_time).fadeIn(500); return false;
	}*/   
	else if(lession_per_hour==0 || lession_per_hour==""){
			swal(error_text,no_hour_warning,"error");
			return false;
		}
	else{
		
			
		$.post(baseurl+"admin/courses/save_group_course_availability",{'group_class_date':group_class_date,'group_class_from':group_class_from,'group_class_to':group_class_to,'course_id':course_id,'lession_per_hour':lession_per_hour},function(data){
			
			var data=JSON.parse(data);
			if(data.status==1){
				$("#group_class_date").val("");
				$("#group_class_from").val("");
				$("#group_class_to").val("");
				$(".flatpickr-input").val("");
				$("#group_date_time_container").html(data.html_time);
				$("#total_no_booking_count").html(data.total_no_booking_count);
				$("input[name='no_of_hour_per_lession']").prop("disabled",true);
				$(".info_no_of_hour_per_lession").css("display","block");
			}
			else if(data.status==2){
				 swal({title: error_text, text: already_exist_text, type: "error"},
								   function(){										  
										  
									         }
									);
			}
		   else if(data.status==3){
				 swal({title: error_text, text: time_period_warning, type: "error"},
								   function(){										  
										  
									         }
									);
			}
		    else{
				 swal({title: error_text, text: something_went_wrong_text, type: "error"},
								   function(){										  
										   location.href=baseurl;
									         }
									);
			}
		
	})
	}
	
})


$(document).on("click",".delete_ava_date",function(){
	var time=$(this).attr("data-time");
	var date=$(this).attr("data-date");
	var course_id=$("#course_id").val();
	$.post(baseurl+"admin/courses/del_group_availability",{'time':time,'date':date,'course_id':course_id},function(data){
			var data=JSON.parse(data);
			if(data.status==1){
				$("#group_date_time_container").html(data.html_time);
				$("#total_no_booking_count").html(data.total_no_booking_count);
				if($(".delete_ava_date").length==0){
					$("input[name='no_of_hour_per_lession']").prop("disabled",false);
					$(".info_no_of_hour_per_lession").css("display","none");
				}
			}
			
		    else{
				 swal({title: error_text, text: something_went_wrong_text, type: "success"},
								   function(){										  
										   //location.href=baseurl;
									         }
									);
			}
		
	})
})
$(document).on("click",".delete_ava_date_pvt",function(){
	var time=$(this).attr("data-time");
	var date=$(this).attr("data-date");
	var course_id=$("#course_id").val();
	$.post(baseurl+"admin/courses/del_group_availability_pvt",{'time':time,'date':date,'course_id':course_id},function(data){
			var data=JSON.parse(data);
			if(data.status==1){
				$("#pvt_date_time_container").html(data.html_time);
				if($(".delete_ava_date_pvt").length==0){
					$("input[name='no_of_hour_per_lession']").prop("disabled",false);
					$(".info_no_of_hour_per_lession").css("display","none");
				}
				$.post(baseurl+"admin/courses/ajax_cal",{'course_id':course_id},function(data){ 
							  $("#calender_load").html(data);       
	                         })
			}
			
		    else{
				 swal({title: error_text, text: something_went_wrong_text, type: "success"},
								   function(){										  
										   //location.href=baseurl;
									         }
									);
			}
		
	})
})
$(document).on("change",".save_function",function(){   
   var colum_name=$(this).attr("name");   
   var colum_value=$(this).val();   
   $.post(baseurl+"admin/courses/save_listing_info",{'course_id':$("#course_id").val(),'colum_name':colum_name,'colum_value':colum_value},function(data){ }) 
});	

$(document).on("change",".save_function_name",function(){   
   var colum_name="district_name";   
   var colum_value=$(this).find("option:selected").text();;   
   $.post(baseurl+"admin/courses/save_listing_info",{'course_id':$("#course_id").val(),'colum_name':colum_name,'colum_value':colum_value},function(data){ }) 
});	

$(document).on("click",".edit_course_btn",function(){
	var lession_type=$(this).attr("data-type");
	var course_id=$(this).attr("data-id"); 
	$.post(baseurl+"admin/courses/edit_course",{"course_id":course_id},function(data){
		var data=JSON.parse(data);
		if(data.status==1){
			$("#course").html(data.html);
			if(lession_type==0){
				$("#group_class").html('<div class="loadbg"><img class="spinloader" src="'+baseurl+'images/site/loadspin.gif"></div>');
				$('#group_class').fadeIn();
				$.post(baseurl+"admin/courses/get_group_lession",{'course_id':course_id},function(data){
				  var data=JSON.parse(data);
				  if(data.status==1){
				  $("#group_class").html(data.html);	  
				  $('#group_class').fadeIn();
				  if($("#category_select").val()!=""){
						  var lival=$("#category_select");
							$.post(baseurl+'admin/courses/get_subcat_list',{'cat_id':$("#category_select").val(),'subcat_id':$("#category_select").attr("data-subcat")},function(data){
							  var data=JSON.parse(data);
							  if(data.status==1){
								 $("#subcat_dropdown").html(data.html_list);
							  }
							  else{
									window.location.href=baseurl;
								}
							});
					  }
				  }
				});
			}
			else if(lession_type==1){
				$('#group_class').fadeOut();
				$("#private_class").html('<div class="loadbg"><img class="spinloader" src="'+baseurl+'images/site/loadspin.gif"></div>');
				$('#private_class').fadeIn();
				$.post(baseurl+"admin/courses/get_private_lession",{'course_id':course_id},function(data){
				  var data=JSON.parse(data);
				  if(data.status==1){
				  $("#private_class").html(data.html);	  
				  $('#private_class').fadeIn();
				  if($("#category_select").val()!=""){
						  var lival=$("#category_select");
							$.post(baseurl+'admin/courses/get_subcat_list',{'cat_id':$("#category_select").val(),'subcat_id':$("#category_select").attr("data-subcat")},function(data){
							  var data=JSON.parse(data);
							  if(data.status==1){
								 $("#subcat_dropdown").html(data.html_list);
								 
							  }
							  else{
									window.location.href=baseurl;
								}
							});
							
					  }
					  $.post(baseurl+"admin/courses/ajax_cal",{'course_id':course_id},function(data){ 
							  $("#calender_load").html(data);       
	                         })
				  }
				});
			}
			else{
				$('#private_class').fadeOut();
				$('#group_class').fadeOut();
			}
		}
		else{
			window.location.href=baseurl;
		}
	})
})
$(document).on("click",".delete_photo",function(){
	var fname=$(this).attr('data-name');
	var lival=$(this);
	$.post(baseurl+'admin/courses/delete_img',{'course_id':$("#course_id").val(),'fname':fname},function(data){
	lival.closest('li').hide(500);	
	setTimeout(function(){
	lival.closest('li').remove();		
	},500);
    });
});	
$(document).on("click",".default_photo_btn",function(){
	
	var fname=$(this).attr('data-img');
	var lival=$(this);
	$.post(baseurl+'admin/courses/set_cover_img',{'course_id':$("#course_id").val(),'fname':fname},function(data){
	  var data=JSON.parse(data);
	  if(data.status==1){
		  $(".photo_preview_inner").removeClass("not_hover");
		  lival.parent(".photo_preview_inner").addClass("not_hover");
	  }
	  else{
			window.location.href=baseurl;
		}
    });
});	
$(document).on("change","#category_select",function(){
	
	var lival=$(this);
	$.post(baseurl+'admin/courses/get_subcat_list',{'cat_id':$("#category_select").val(),'subcat_id':$("#category_select").attr("data-subcat")},function(data){
	  var data=JSON.parse(data);
	  if(data.status==1){
		 $("#subcat_dropdown").html(data.html_list);
	  }
	  else{
			window.location.href=baseurl;
		}
    });
});
$(document).on("change","#subcat_dropdown",function(){
	$("#category_select").attr("data-subcat",$(this).val())
	
});	
$(document).on("click","#add_district_btn",function(){
	$("#district_dropdown_error").html('');
	if($("#district_dropdown").val()==""){
		$("#district_dropdown_error").html('Select a district...');return false;
	}
	else{
		var lival=$(this);
		$.post(baseurl+'admin/courses/add_district',{'course_id':$("#course_id").val(),'dist_name':$("#district_dropdown").val(),'dist_name_text':$("select#district_dropdown option:selected").text()},function(data){
		var data=JSON.parse(data);
		if(data.status==1){
			$("#add_district_container").html(data.district_list_html);
			$("#district_dropdown").val("");
		}else if(data.status==2){
			$("#district_dropdown_error").html(data.message);
		}else{
			window.location.href=baseurl;
		}
		});
	}
	
});	
$(document).on("click",".del_district",function(){
	
		var lival=$(this);
		var dist_id=lival.attr("data-id");
		$.post(baseurl+'admin/courses/delete_district',{'course_id':$("#course_id").val(),'dist_id':dist_id},function(data){
		var data=JSON.parse(data);
		if(data.status==1){
			lival.parent("li").remove();
		}else{
			window.location.href=baseurl;
		}
		});
	
	
});	
$(document).on('click','#nav_prev,#nav_next',function(){ 
$.get($(this).attr('data-value'),{},function(data){
	$("#calender_load").html(data);
});
});
var date_array=[];
$(document).on('click','#beforepublish td',function(){
	if($(this).hasClass("selected") && !$(this).hasClass("inactive") && !$(this).hasClass("past_date")){
	var val=$(this).attr("data-value"); 
	$(this).removeClass("selected");
		var index = date_array.indexOf(val);
		if (index >= 0) {
		  date_array.splice( index, 1 );
		}
	}
	else if(!$(this).hasClass("inactive")  && !$(this).hasClass("past_date")){
	$(this).addClass("selected");
	var val=$(this).attr("data-value"); 
	  if(date_array.indexOf(val)==-1){
	   date_array.push(val);
	  }	   
	}
})

$(document).on("click","#save_pvt_class",function(){
	console.log(date_array);
	var pvt_class_from=$("#pvt_class_from").val();
	var pvt_class_to=$("#pvt_class_to").val(); 
	var course_id=$("#course_id").val();
	var lession_per_hour=$("input[name='no_of_hour_per_lession']").val();
	$("#pvt_class_time_error").html("");
	if(date_array.length==0){
		$("#pvt_class_time_error").html(select_date).fadeIn(500); return false;
	}
	else if(pvt_class_from==""){
		$("#pvt_class_time_error").html(select_time).fadeIn(500); return false;
	}
	/*else if(pvt_class_to=="" || pvt_class_to==null){
		$("#pvt_class_time_error").html(select_time).fadeIn(500); return false;
	}*/
	else if(lession_per_hour==0 || lession_per_hour==""){
		swal(error_text,no_hour_warning,"error");
		return false;
	}
	else{
	
		
		$.post(baseurl+"admin/courses/save_private_course_availability",{'dates':date_array,'pvt_class_from':pvt_class_from,'pvt_class_to':pvt_class_to,'course_id':course_id,'lession_per_hour':lession_per_hour},function(data){
			
			var data=JSON.parse(data);
			if(data.status==1){
				$("#pvt_class_from").val("");
				$("#pvt_class_to").val("");
				date_array=[];
				$("#beforepublish td.selected").addClass("block").removeClass("selected");				
				$("#pvt_date_time_container").html(data.html_time);
				$("input[name='no_of_hour_per_lession']").prop("disabled",true);
				$(".info_no_of_hour_per_lession").css("display","block");
			}
			else if(data.status==2){
				 swal({title: error_text, text: already_exist_text, type: "error"},
								   function(){										  
										  
									         }
									);
			}
			else if(data.status==3){
				 swal({title: error_text, text: time_period_warning, type: "error"},
								   function(){										  
										  
									         }
									);
			}
		    else{
				 swal({title: error_text, text: something_went_wrong_text, type: "error"},
								   function(){										  
										   location.href=baseurl;
									         }
									);
			}
		
	})
	}
	
})
function delete_drafts(){
	var cid=$("#course_id").val();
	swal({   
	 title: are_you_sure_warning,  
	/*  text: "You Cancel Your Account",  */
	 type: "warning",   
	 showCancelButton: true,
	 confirmButtonColor: "#DD6B55",   
	 confirmButtonText: yes_text,
	 cancelButtonText:no_text, 
	 showLoaderOnConfirm: true,
	 closeOnConfirm: false },
	 function(){   swal(success_text, course_deleted_text, "success"); 
	 $.post(baseurl+"admin/courses/delete_course_draft",{'course_id':cid},function(data){
		var data=JSON.parse(data);
		if(data.status==1){
			swal.close();
			window.location.href=baseurl+"admin/courses/display_courses_list"; 
		}
		else{
			window.location.href=baseurl;
		}
	})
	 });
	
}

$(document).on("click","#save_coupon_code_btn",function(){
	$("#coupon_code_form").submit();
})
$(document).on("click",".delete_coupon_btn",function(){
	var live_this=$(this);
	var del_id=$(this).attr("data-id");
	$.post(baseurl+"admin/courses/delete_coupon_code",{'coupon_id':del_id},function(data){
		var data=JSON.parse(data);
		if(data.status==1){
			live_this.closest("tr").remove();
			var count=1;
			$("#coupon_table .sno").each(function(i){
				$(this).text(count);
				count++;
			})
		}
		else{
			window.location.href=baseurl;
		}
	})
})


	
$(document).on("click","#request_category_btn",function(){
	$(this).hide(1000);
	$(".request_cat_box").show(1000);
})	
$(document).on("click",".cancel_req_cat_btn",function(){
	$("#request_category_btn").show(1000);
	$(".request_cat_box").hide(1000);
})			
$(document).on("click",".add_req_cat_btn",function(){
  $("#request_cat_error").text("");
  var request_cat=$("#request_cat").val();
  if(request_cat==""){
	  $("#request_cat_error").text(request_category_warning); return false;
  }
  else{
	  $.post(baseurl+"admin/courses/save_request_cat",{"request_cat":request_cat},function(data){
						var data=JSON.parse(data);
						if(data.status==1){
							$("#request_category_btn").show(1000);
	                        $(".request_cat_box").hide(1000);
							swal({title: success_text, text: request_success_text, type: "success"},
							   function(){										  
									      $("#request_cat").val("")
										 }
								);
						}
						
						})
  }
})



function convert_number_time(time) {
	var hrs = parseInt(Number(time));
	var min = Math.round((Number(time)-hrs) * 60);
	var time1=hrs+":"+min+":"+"00"; 
	var time2=$("#group_class_from").val()+":"+"00";
	var final_to_time=formatTime(timestrToSec(time1) + timestrToSec(time2));
	var final_to_time_formatted=final_to_time.split(":");
	if(parseInt(final_to_time_formatted[0])>24){
		$("#group_class_from").val("");
		swal(error_text,time_period_warning,"error"); 
		return "";
	}
	else{
		return final_to_time_formatted[0]+':'+final_to_time_formatted[1];
	}	
   
}
function convert_number_time_pvt(time) {
	var hrs = parseInt(Number(time));
	var min = Math.round((Number(time)-hrs) * 60);
	var time1=hrs+":"+min+":"+"00"; 
	var time2=$("#pvt_class_from").val()+":"+"00";
	var final_to_time=formatTime(timestrToSec(time1) + timestrToSec(time2));
	var final_to_time_formatted=final_to_time.split(":");
	if(parseInt(final_to_time_formatted[0])>24){
		$("#pvt_class_from").val("");
		swal(error_text,time_period_warning,"error"); 
		return "";
	}
	else{
		return final_to_time_formatted[0]+':'+final_to_time_formatted[1];
	}	
   
}
function timestrToSec(timestr) {
	var parts = timestr.split(":");
	return (parts[0] * 3600) +
		   (parts[1] * 60) +
		   (+parts[2]);
  }
  
  function pad(num) {
	if(num < 10) {
	  return "0" + num;
	} else {
	  return "" + num;
	}
  }
  
  function formatTime(seconds) {
	return [pad(Math.floor(seconds/3600)%60),
			pad(Math.floor(seconds/60)%60),
			pad(seconds%60),
			].join(":");
  }
