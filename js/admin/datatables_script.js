/* Script for Subadmin table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#subadmin_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

/* Script for User table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#user_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for Tasker table */
 $(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});
		
		$('#tasker_table').DataTable({
			
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

/* Script for Commission Tracking List table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#comm_track_list_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for Commission Tracking Details table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#comm_track_details_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

/* Script for Sub Category List table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#subcat_list_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for CMS table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#cms_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for Email table */	
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#email_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

/* Script for Booking table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#booking_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#booking_table_hobbyguru').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	,
			 "aaSorting": [ 3, 'desc' ]
			
			
			});		
				
	});

$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#booking_inner_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	,
			 "aaSorting": [ 3, 'desc' ]
			
			
			});		
				
	});
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#booking_completed_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	,
			 "aaSorting": [ 3, 'desc' ]
			
			
			});		
				
	});
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#courses_list_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	,
			 "aaSorting": [ 8, 'desc' ]
			
			
			});		
				
	});

/* Script for Pending Booking table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#pending_booking_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

	
	
	
/* Script for Cancelled Booking table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#cancelled_book_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

/* Script for Language View table */
	  $(document).ready(function(){
	    $("#language_form").validate({
			rules: {
				lang_name: "required",
				lang_code: "required",
			},
				 
			submitHandler: function(form){
				form.submit();
			}
		 
		});
	});
	
	function save_language(){
		var is_valid	= $('#language_form').valid();
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
		
/* Script for Review table */	
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#review_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

/* Script for Service table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#service_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for city table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#city_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for contact table */
 $(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#contact_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});
	
/* Script for language table */
$(document).ready(function () {
		var td_count=$("th").length;
		var array_merge=[];
		var array_merge_name=[];
		$('th').each(function(i) {
			var returnObj = new Object();
            returnObj.data = $(this).attr('data-name');
			 array_merge.push(returnObj);
			 array_merge_name.push($(this).attr('data-name'));
			});

		$('#language_table').DataTable({
            "processing": true,
            "serverSide": true,
            "ajax":{
		     "url": $("#ajax_url").attr("data-url"),
		     "dataType": "json",
		     "type": "POST",
			 "async":true,
		     "data":{'array_merge_name':array_merge_name} },
			"columns": array_merge	 
			
			});			
	});

	/* Script for city status */
$(document).ready(function () {
	var td_count=$("th").length;
	var array_merge=[];
	var array_merge_name=[];
	$('th').each(function(i) {
		var returnObj = new Object();
		returnObj.data = $(this).attr('data-name');
		 array_merge.push(returnObj);
		 array_merge_name.push($(this).attr('data-name'));
		});

	$('#city_staus_table').DataTable({
		"processing": true,
		"serverSide": true,
		"ajax":{
		 "url": $("#ajax_url").attr("data-url"),
		 "dataType": "json",
		 "type": "POST",
		 "async":true,
		 "data":{'array_merge_name':array_merge_name} },
		"columns": array_merge	 
		
		});			
});