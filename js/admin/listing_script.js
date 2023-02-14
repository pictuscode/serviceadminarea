$(document).on("click",".drop_down_base .dropdown-menu",function(e) {
        e.stopPropagation();
});
$(document).ready( function(){
var margin_fix = $('.listing_base_head').height();
	$('.listing_base').css('margin-top',margin_fix);
})
$(document).ready( function(){
var margin_fixbottom = $('.bottom_next_continue ').height();
	$('.listing_base_inner').css('margin-bottom',margin_fixbottom+25);
})

$(document).ready(function (e) {



$(function() {
$(document).on("change","#upload_img_single",function() {
	
$("#message").empty();
var file = this.files[0];
var imagefile = file.type;
var match= ["image/jpeg","image/png","image/jpg"];
if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
{
$("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
return false;
}
else
{
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);
var formData = new FormData();
formData.append('photo', $(this)[0].files[0]);
formData.append('pid',$(".listing_base").attr('data-id') );
$.ajax({
url: baseurl+"admin/product/ajax_img_upload_cover", 
type: "POST",             
data: formData, 
dataType: "json",
contentType: false,       
cache: false,            
processData:false,       
success: function(data)   
{
/* $('#imgupload_ul li:eq(-2) .photo_preview_inner').html('<div class="photo_container" style="background: url('+baseurl+"images/admin/product/"+data.img+')"></div><div class="delete_photo" data-name="'+data.img+'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><defs><path id="4xzqa" d="M390.14 599.1v1.82c0 .4-.32.72-.72.72h-1.35v10.7c0 .39-.33.71-.72.71H376.5a.72.72 0 0 1-.72-.72v-10.69h-1.35a.72.72 0 0 1-.72-.72v-1.82c0-1.1.9-1.99 2-1.99h4.34c.1-.28.37-.48.68-.48h2.38c.31 0 .57.2.67.48h4.36a2 2 0 0 1 1.99 2zm-3.51 2.54h-9.4v9.97h9.4zm2.07-1.44v-1.1c0-.3-.25-.55-.55-.55H375.7c-.3 0-.55.25-.55.55v1.1zm-9.38 8.2v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0zm3.78 0v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0z"/></defs><g><g transform="translate(-372 -595)"><usefill="#fff"xlink:href="#4xzqa"/></g></g></svg></div>' ); */
$('.upload_images_base').attr('style','background: url('+baseurl+"images/site/product/"+data.img+')');


$('.cvphoto').hide(1000);
$('.addcvphoto').show(1000);
}
});
}
});
});
function imageIsLoaded(e) {
$('.upload_images_base').attr('style','background: url('+e.target.result+')');

};

$(document).on("click",".delete_photo",function(){
	var fname=$(this).attr('data-name');
	var lival=$(this);
	$(this).addClass("activebg");
	$.post(baseurl+'admin/product/delete_img',{'pid':$(".listing_base").attr('data-id'),'fname':fname},function(data){
	lival.closest('li').hide(500);	
	setTimeout(function(){
	lival.closest('li').remove();		
	},500);
	});
	
})
$(document).on("click",".delete_photo_cover",function(){ 
	var fname=$(this).attr('data-name');
	var lival=$(this);
	$(this).addClass("activebg");
	$.post(baseurl+'admin/product/delete_photo_cover',{'pid':$(".listing_base").attr('data-id'),'fname':fname},function(data){ data = JSON.parse(data);
		if(data.coverimg!=""){
	     $('.upload_images_base').attr('style','background: url('+baseurl+"images/site/product/"+data.coverimg+')');	
		 $('.upload_images_base').attr('data-cv-img',data.coverimg);
	     $('#imgupload_ul li').first().hide(500);
		 setTimeout(function(){
	     $('#imgupload_ul li').first().remove();	
	     },500);
	     
		}
		else
		{
		$('.upload_images_base').removeAttr('style');			
		$('.addcvphoto').hide(1000);
		$('.delete_photo_cover').hide(1000);
		$('.cvphoto').show(1000);
		}
	});
	
})
crtime=Number(new Date()); 

$(document).on("change","#upload_img",function(){ 
    var data = new FormData();
	$.each($('#upload_img')[0].files, function(i, file) {
    data.append('photo[]', file);
	});
	data.append('pid',$(".listing_base").attr('data-id') );
	$.ajax({
	url: baseurl+"admin/product/ajax_img_upload", 
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
		$('#imgupload_ul li:eq('+resval+') .photo_preview_inner').html('<div class="photo_container" style="background: url('+baseurl+"images/site/product/"+array[i-1]+')"></div><div class="delete_photo" data-name="'+array[i-1]+'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><defs><path id="4xzqa" d="M390.14 599.1v1.82c0 .4-.32.72-.72.72h-1.35v10.7c0 .39-.33.71-.72.71H376.5a.72.72 0 0 1-.72-.72v-10.69h-1.35a.72.72 0 0 1-.72-.72v-1.82c0-1.1.9-1.99 2-1.99h4.34c.1-.28.37-.48.68-.48h2.38c.31 0 .57.2.67.48h4.36a2 2 0 0 1 1.99 2zm-3.51 2.54h-9.4v9.97h9.4zm2.07-1.44v-1.1c0-.3-.25-.55-.55-.55H375.7c-.3 0-.55.25-.55.55v1.1zm-9.38 8.2v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0zm3.78 0v-4.86a.72.72 0 1 1 1.44 0v4.86a.72.72 0 1 1-1.44 0z"></path></defs><g><g transform="translate(-372 -595)"><use fill="#fff" xlink:href="#4xzqa"></use></g></g></svg></div>' ); 
		$('#imgupload_ul li:eq('+resval+')').attr("data-img-name",array[i-1]);
	}
	
	}
	}
	});
});
});

function preview_image() 
{ 
 var total_file=document.getElementById("upload_img").files.length;
 for(var i=0;i<total_file;i++)
 {
  newdat=$('#imgupload_ul li:last').clone();
 var li_count=$("#imgupload_ul li").length-1;  
 $("#imgupload_ul").append(newdat);
 var outimg=baseurl+"images/site/loadspin.gif";
 $('#imgupload_ul li:eq(-2) .photo_preview_inner').html('<div class="photo_container" style="background: url('+URL.createObjectURL(event.target.files[i])+')"></div>' );
 $("#imgupload_ul li:eq(-2)").removeClass('last_photo_li'); 
 }
}




$(document).ready(function(){
	 $('.photo_preview_ul').sortable({
		items: "li:not(.last_photo_li)",
		connectWith: '.upload_images_base',
		update: function( event, ui ) { sortbyli();}
		});
	
	
	$('.photo_preview_ul').disableSelection(); 
	$(".upload_images_base").draggable(  {
    helper: 'clone',
	start: function (e, ui) { console.log(ui.helper[0].attributes['data-cv-img']['value']);
        ui.helper.animate({
            width: 247,
            height: 50,
			zIndex:999
        });
    },
	stop:function(e,ui){ console.log(e.target)},
	cursorAt: {left:40, top:25}
    }  );
	
	$( ".upload_images_base" ).droppable({ drop:dropIt });
	 function dropIt(event,ui){
                        
                var newimg=ui.draggable.attr('data-img-name')                          
                var ex_img=$(".upload_images_base").attr('data-cv-img'); 
				$("#imgupload_ul li").each(function() {
					if($(this).attr("data-img-name")==newimg){
					$(this).find(".photo_container").attr('style','background:url("'+baseurl+'images/site/product/'+ex_img+'")');
					$(this).attr("data-img-name",ex_img);					
					}
				});
				
				$(".upload_images_base").attr('style','background:url("'+baseurl+'images/site/product/'+newimg+'")');
				$(".upload_images_base").attr('data-cv-img',newimg);
				sortbyli();
				$.post(baseurl+"admin/product/coverupdate",{'pid':$(".listing_base").attr('data-id'),'cimage':newimg},function(data){})
            }
	
	/* var dt = $( "#imgupload_ul li" )
	dt.droppable({ drop:dropli });
	 function dropli(event,ui){ 
                       
                console.log(event.target);
				var newimg=event.target.attributes['data-img-name']['value'];                           
                var ex_img=$(".upload_images_base").attr('data-cv-img'); 
				$("#imgupload_ul li").each(function() {
					if($(this).attr("data-img-name")==newimg){
					$(this).find(".photo_container").attr('style','background:url("'+baseurl+'images/site/product/'+ex_img+'")');
					$(this).attr("data-img-name",ex_img);					
					}
				});
				
				$(".upload_images_base").attr('style','background:url("'+baseurl+'images/site/product/'+newimg+'")');
				$(".upload_images_base").attr('data-cv-img',newimg);
				sortbyli();
				$.post(baseurl+"site/product/coverupdate",{'pid':$(".listing_base").attr('data-id'),'cimage':newimg},function(data){})
			 } */
});

function sortbyli()
{
	var imgarry=[];
	$("#imgupload_ul li").each(function(){
		if($(this).attr("data-img-name")!="" &&$(this).attr("data-img-name")!=undefined){ console.log($(this).attr("data-img-name"));
		imgarry.push($(this).attr("data-img-name"));
		}
	})
	$.post(baseurl+"admin/product/imgsort",{'pid':$(".listing_base").attr('data-id'),'imgnames':imgarry},function(data){})
}
$(document).ready(function(){
	load_photo();
});

function load_photo(){

	 
	$(".bottom_next_continue").hide();
	$(".photo_tab_bottom").show();
	$.post(baseurl+"admin/product/getphotos",{'pid':$(".listing_base").attr('data-id')},function(data){  $("#photo_tab").html(data); 
	    $('.photo_preview_ul').sortable({
		items: "li:not(.last_photo_li)",
		connectWith: '.upload_images_base',
		update: function( event, ui ) { sortbyli();}
		});
	   $('.photo_preview_ul').disableSelection(); 
	   	$( ".upload_images_base" ).droppable({ drop:dropIt });
		 function dropIt(event,ui){
                        
                var newimg=ui.draggable.attr('data-img-name')                          
                var ex_img=$(".upload_images_base").attr('data-cv-img'); 
				$("#imgupload_ul li").each(function() {
					if($(this).attr("data-img-name")==newimg){
					$(this).find(".photo_container").attr('style','background:url("'+baseurl+'images/site/product/'+ex_img+'")');
					$(this).attr("data-img-name",ex_img);					
					}
				});
				
				$(".upload_images_base").attr('style','background:url("'+baseurl+'images/site/product/'+newimg+'")');
				$(".upload_images_base").attr('data-cv-img',newimg);
				sortbyli();
				$.post(baseurl+"admin/product/coverupdate",{'pid':$(".listing_base").attr('data-id'),'cimage':newimg},function(data){})
            }
	})
}
function loadroom_tab(){
	$(".bottom_next_continue").hide();
	$(".rooms_tab_bottom").show();
	$.post(baseurl+"admin/product/getroom",{'pid':$(".listing_base").attr('data-id')},function(data){ $("#bedroom").html(data); 
	load_listing_rooms();    
	})
}

function loadamenties_tab(){	
	$.post(baseurl+"admin/product/get_amenities",{'pid':$(".listing_base").attr('data-id')},function(data){ $("#amenities").html(data); 
	$(".bottom_next_continue").hide();
	$(".amenities_tab_bottom").show();  
	})
}

function loadhouserule_tab(){
	$.post(baseurl+"admin/product/ajax_rules",{'pid':$(".listing_base").attr('data-id')},function(data){ $("#houserules").html(data); 
    $(".bottom_next_continue").hide();
	$(".house_rules_tab_bottom ").show();
	})
}

function loadbooking_tab(){
	$.post(baseurl+"admin/product/ajax_bookings",{'pid':$(".listing_base").attr('data-id')},function(data){ $("#booking_price").html(data); 
      $(".bottom_next_continue").hide();
	  $(".booking_tab_bottom").show();
	  $.post(baseurl+"admin/product/ajax_cal",{'pid':$(".listing_base").attr('data-id')},function(data){ $("#calender_load").html(data); 
		
	  
      
	})
	})
}
$(document).ready(function(){
		$(document).on('click','#nav_prev,#nav_next',function(){ 
		$.get($(this).attr('data-value'),{},function(data){
			$("#calender_load").html(data);
		});
		});
});
function loadpublish_tab(){
	$(".bottom_next_continue").hide();	
	$(".publish_tab_bottom").show();
}
$(document).on("click",".listing_next_tab",function(){
	var tabname=$(this).attr("data-tab");
	if(tabname!="bedroom")
	{
		$('[href="#'+tabname+'"]').tab('show');
	}
	if(tabname=="location")
	{
		loadmap_tab();
		
	}
	else if(tabname=="bedroom")
	{	$("#mapaddress_error").text("");	
		var data = $('#address_form').serializeArray();
		var country_name= $("#address_country").find("option:selected").attr("data-name");
         data.push({name: 'country_name', value: country_name});
         data.push({name: 'pid', value: $(".listing_base").attr('data-id')});
		$.post(baseurl+"admin/product/save_description_tab",data,function(data){ var data=JSON.parse(data);
			if(data.status==1)
			{
				$('[href="#'+tabname+'"]').tab('show');
				loadroom_tab();
			}
			else if(data.status==0)
			{
				$("#mapaddress_error").text("Something Wrong with your adderss, Please try again.");
				 $("html, body").animate({ scrollTop: 0 }, "slow");
				
			}	
			else if(data.status==2)
			{
				window.location.href=baseurl;
			}	
			
		})
	}
	else if(tabname=="amenities")
	{
		loadamenties_tab();
	}
	else if(tabname=="houserules")
	{
		loadhouserule_tab();
	}
	else if(tabname=="booking_price")
	{
		loadbooking_tab();
	}
	else if(tabname=="publish")
	{
		loadpublish_tab();
	}
	else if(tabname=="photo_tab"){
		$(".bottom_next_continue").hide();
	    $(".photo_tab_bottom").show();
	}
})
$(document).on("click",".listing_back_tab",function(){
	var tabname=$(this).attr("data-tab");
	$('[href="#'+tabname+'"]').tab('show');
	if(tabname=="location")
	{
		loadmap_tab();
	}
	else if(tabname=="bedroom")
	{    loadroom_tab();
	}
	else if(tabname=="amenities")
	{
		loadamenties_tab();
	}
	else if(tabname=="houserules")
	{
		loadhouserule_tab();
	}
	else if(tabname=="booking_price")
	{
		loadbooking_tab();
	}
	else if(tabname=="publish")
	{
		loadpublish_tab();
	}
	else if(tabname=="publish_next")
	{
		loadpublish_tab();
	}
	else if(tabname=="photo_tab"){
		$(".bottom_next_continue").hide();
	    $(".photo_tab_bottom").show();
	}
})
 var ccode="in";
 var country_id;
/* $(document).ready(function(){
			
		if(($("#address_latitude").val()=="" && $("#address_latitude").val()=="" )|| ($("#address_latitude").val()=="0" && $("#address_latitude").val()=="0" )){
		$(".map_base_listing").hide(1000);		
		}
		else
		{
			load_address_map();
			$(".map_base_listing").show(1000);
			ccode=$('option:selected', this).attr('ccode');
			init_map();
		}
}); */
function loadmap_tab()
{      
       $.post(baseurl+"admin/product/getlocation",{'pid':$(".listing_base").attr('data-id')},function(data){ $("#location").html(data); 
	     $(".bottom_next_continue").hide();
	     $(".location_tab_bottom").show();
		 if($("#autocomplete_street_address").val()=="" || $("#address_city").val()=="" || $("#address_country").val()=="" || $("#address_state").val()=="" || $("#address_zipcode").val()==""|| $("#listing_title").val()==""|| $("#listing_description").val()=="" ){
	        $(".location_tab_bottom").find('.button_new').addClass("listing_next_btn_disable");
		 }
	        if(($("#address_latitude").val()=="" && $("#address_latitude").val()=="" )|| ($("#address_latitude").val()=="0" && $("#address_latitude").val()=="0" )){
		   $(".map_base_listing").hide(1000);		
			}
			else
			{
				load_address_map();
				$(".map_base_listing").show(1000);
				ccode=$("#address_country").find('option:selected').attr('ccode'); 
			    init_map();
				
			}
	});  
        
}
$(document).on("change",".address_validate",function(){ 
	     if($("#autocomplete_street_address").val()=="" || $("#address_city").val()=="" || $("#address_country").val()=="" || $("#address_state").val()=="" || $("#address_zipcode").val()=="" || $("#listing_title").val()==""|| $("#listing_description").val()=="" ){
	        $(".location_tab_bottom").find('.button_new').addClass("listing_next_btn_disable");
		 }
		 else
		 {
			 $(".location_tab_bottom").find('.button_new').removeClass("listing_next_btn_disable");
		 }			 
})
function init_map() { 
  if(country_id==undefined || country_id==""){
  country_id=$("#address_country").find('option:selected').val(); 
  }
  
  autocomplete = new google.maps.places.Autocomplete(
	 (document.getElementById('autocomplete_street_address')),
	  { types: ['geocode'],
	    componentRestrictions: {country: ccode}
	  });
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		var data = $("#autocomplete_street_address").serialize();
		var autocomplete_result=data;
		$.post(baseurl+"admin/product/get_location",{'address':data,'pid':$(".listing_base").attr('data-id'),'country_id':country_id},function(data){ var data=JSON.parse(data);
			$("#autocomplete_street_address").val(data.street);
			$("#address_city").val(data.city);
			$("#address_state").val(data.state);
			$("#address_zipcode").val(data.zipcode);
			$("#address_latitude").val(data.lat);
			$("#address_longitude").val(data.lang);
			load_address_map();
			$(".map_base_listing").show(1000);
			$("#address_location").text(data.fulladdress);
			
			if(autocomplete_result=="" || $("#address_city").val()=="" || $("#address_country").val()=="" || $("#address_state").val()=="" || $("#address_zipcode").val()=="" || $("#listing_title").val()==""|| $("#listing_description").val()=="" ){
	        $(".location_tab_bottom").find('.button_new').addClass("listing_next_btn_disable");
			 }
			 else
			 {
				 $(".location_tab_bottom").find('.button_new').removeClass("listing_next_btn_disable");
			 }	
		})
		return false;
	}
  );
}
$(document).on("change","#address_country",function(){ 
   ccode=$('option:selected', this).attr('ccode');
   country_id=$(this).val(); init_map();       
});
var map,marker;
function load_address_map() { 
	var myLatLng = {lat: parseFloat($("#address_latitude").val()), lng: parseFloat($("#address_longitude").val())};

	  map = new google.maps.Map(document.getElementById('address_map'), {
	  zoom: 15,
	  center: myLatLng,
	  fullscreenControl:false,
	  mapTypeControl:false,
	  draggable: false
	});
    map.addListener('dragend', function() {
		//map.setZoom(14);
	});
	 $('<div/>').addClass('centerMarker').appendTo(map.getDiv())             
	 $('a[href="#location"]').on('shown', function(e) {
            google.maps.event.trigger(map, 'resize');
        });
  }
$(document).on("click","#map_adjust",function(){
	map.setOptions({draggable: true});
	
});  
$(document).on("click","#map_save",function(){
	
	map.setOptions({draggable: false});
	var lat=map.getCenter().lat();
	var lng=map.getCenter().lng();
	$.post(baseurl+"admin/product/dragsave_location",{'pid':$(".listing_base").attr('data-id'),'lat':lat,'lng':lng},function(data){ var data=JSON.parse(data);
			$("#autocomplete_street_address").val(data.street);
			$("#address_city").val(data.city);
			$("#address_state").val(data.state);
			$("#address_zipcode").val(data.zipcode);
			$("#address_latitude").val(data.lat);
			$("#address_longitude").val(data.lang);
			$("#address_country").val(data.country);
			load_address_map();
			$(".map_base_listing").show(1000);
			$("#address_location").text(data.fulladdress);
			if($("#autocomplete_street_address").val()=="" || $("#address_city").val()=="" || $("#address_country").val()=="" || $("#address_state").val()=="" || $("#address_zipcode").val()=="" || $("#listing_title").val()==""|| $("#listing_description").val()==""){
	        $(".location_tab_bottom").find('.button_new').addClass("listing_next_btn_disable");
			 }
			 else
			 {
				 $(".location_tab_bottom").find('.button_new').removeClass("listing_next_btn_disable");
			 }	
		})
});  
$(document).on("keydown",".count_function",function(event){	
	var str_count=$(this).val().length;
	var ex_count=$(this).attr("data-count");
	var currentcount=ex_count-str_count;
	if(currentcount>=0){
		$(this).next("span").text(currentcount);
		$(this).next("span").css("color","black");
		if(currentcount==0)
		{
			$(this).next("span").css("color","red");			
		}
	}	
	else{
		$(this).next("span").css("color","red");
		
	}	
}); 
 
$(document).on("change",".save_function",function(){   
   var colum_name=$(this).attr("name");   
   var colum_value=$(this).val();   
   $.post(baseurl+"admin/product/save_listing_info",{'pid':$(".listing_base").attr('data-id'),'colum_name':colum_name,'colum_value':colum_value},function(data){ }) 
});
  
$(document).on("click",".save_function_radio",function(){   
   var colum_name=$(this).attr("name");   
   var colum_value=$(this).val();   
   $.post(baseurl+"admin/product/save_listing_info",{'pid':$(".listing_base").attr('data-id'),'colum_name':colum_name,'colum_value':colum_value},function(data){ }) 
});
  
$(document).on("change",".save_function_multiple_checkbox",function(){   
   var colum_name=$(this).attr("name");
   var resultarray=[];
   $("input:checkbox[name='"+colum_name+"']:checked").each(function(){
    resultarray.push($(this).val());
   })
   
   var colum_value=$(this).val();   
   $.post(baseurl+"admin/product/save_listing_info_multiple_checkbox",{'pid':$(".listing_base").attr('data-id'),'colum_name':colum_name.replace('[]',''),'colum_value':resultarray},function(data){ }) 
	
});

$(document).on("change","#list_type",function(){   
   var list_type_id=$(this).val();
   if(list_type_id==""){
	   $(".list_before_hide").hide();
   }
   else{
	   $.post(baseurl+"admin/product/load_listing_property_type",{'pid':$(".listing_base").attr('data-id'),'list_type_id':list_type_id},function(data){
		 var data=JSON.parse(data); 
		 var drop_html="<option value=''>Choose property type</option>";
		if(data.status==1){
			for(var i=0;i<data.drop.length;i++)
			{   var sel=""; 
			    var rsval=data.drop[i]["selectedvalue"]; 
				if(rsval!="")
				{
					sel="selected";
				} 
				var dropdata=(data.drop[i]);
				var prop_id=dropdata['prop_id'];
				var property_type_name=dropdata['property_type_name'];
				drop_html+="<option value='"+prop_id+"'  "+sel+">"+property_type_name+"</option>";
			}
			$("#property_type_dropdown").html(drop_html);
			$(".property_type_show").removeClass("list_before_hide");
			
		}
		else if(data.status==2)
		{
			window.location.href=baseurl;
		}			
		
	   }) 
	   
   }
   
	
});

function load_listing_rooms()
{
	var list_type_id=$("#list_type").attr('data-value'); 
	var property_type_dropdown=$("#property_type_dropdown").attr('data-value'); 
	if(list_type_id!="")
	{
		  $.post(baseurl+"admin/product/load_listing_property_type",{'pid':$(".listing_base").attr('data-id'),'list_type_id':list_type_id},function(data){
		 var data=JSON.parse(data); 
		 var drop_html="<option value=''>Choose property type</option>";
		 var selected_propertytype="";
		if(data.status==1){
			for(var i=0;i<data.drop.length;i++)
			{   var sel=""; 
			    var rsval=data.drop[i]["selectedvalue"]; 
				var dropdata=(data.drop[i]);
				if(rsval!="")
				{
					sel="selected";
					selected_propertytype=dropdata['prop_id'];
				} 
				
				var prop_id=dropdata['prop_id'];
				var property_type_name=dropdata['property_type_name'];
				drop_html+="<option value='"+prop_id+"'  "+sel+">"+property_type_name+"</option>";
			}
			$("#property_type_dropdown").html(drop_html);
			$("#property_type_dropdown").attr('data-value',selected_propertytype);
			$(".property_type_show").removeClass("list_before_hide");
			
		}
		else if(data.status==2)
		{
			window.location.href=baseurl;
		}			
		
	   }) 
	}
   if(property_type_dropdown==""){
	   $(".room_type_show").addClass("list_before_hide");
   }
   else{
	    
	   $(".room_type_show").removeClass("list_before_hide");
   }
   if($("#list_type").val()=="" || $("#property_type_dropdown").val()==""){
	$(".rooms_tab_bottom").find('.button_new').addClass("listing_next_btn_disable");
	 }
	 else
	 {
		 $(".rooms_tab_bottom").find('.button_new').removeClass("listing_next_btn_disable");
	 }
	
}

$(document).on("change",".room_validate",function(){ 
	     if($("#list_type").val()=="" || $("#property_type_dropdown").val()==""){
	        $(".rooms_tab_bottom").find('.button_new').addClass("listing_next_btn_disable");
		 }
		 else
		 {
			 $(".rooms_tab_bottom").find('.button_new').removeClass("listing_next_btn_disable");
		 }			 
});

$(document).on("change","#property_type_dropdown",function(){   
   var list_type_id=$(this).val();
   if(list_type_id==""){
	   $(".list_before_hide").hide();
   }
   else{
	    
	   $(".room_type_show").removeClass("list_before_hide");
   }
});

$(document).on("click",".countingbox_plus",function(){   
   var ex_count=parseInt($(this).prev('span').attr('data-value'))+1;
   $(this).prev('span').attr('data-value',ex_count);
   $(this).prev('span').text(ex_count);
   var colum_name=$(this).prev('span').attr('data-name');   
   var colum_value=ex_count; 
   if(colum_name=="min_stay")
   {   $("#min_stay_error").text("");
	   var max_val=$("#max_stay_countbox").attr("data-value");
	   if(colum_value>max_val)
	   {
		   $("#min_stay_error").text("Minimum nights can’t be higher than maximum nights."); return false;
	   }
   }	   
   if(colum_name=="max_stay")
   {   $("#max_stay_error").text("");
	   var min_val=$("#min_stay_countbox").attr("data-value");
	   if(colum_value<min_val)
	   {
		   $("#max_stay_error").text("Minimum nights can’t be higher than maximum nights."); return false;
	   }
   }	   
   $.post(baseurl+"admin/product/save_listing_info",{'pid':$(".listing_base").attr('data-id'),'colum_name':colum_name,'colum_value':colum_value},function(data){ }) 
   if(colum_name=="bedroom_count")
   {   
       var bedroomcount=$(".bedrooms_div").length ;
	   if(bedroomcount==0)
	   {
		   bedroomcount=1;
	   }
	   else{
		   bedroomcount=bedroomcount+1;
	   }
	   var bedclone=$(".add_bedroom_clone").clone().removeClass("add_bed_box_div_hide").removeClass("add_bedroom_clone").addClass("bedrooms_div").addClass("bedroom_div_"+bedroomcount);
	   $('.bed_labelno',bedclone).html(bedroomcount);
	   $('.bedrooms_div',bedclone).attr("data-id",bedroomcount);
	   $('.countingbox',bedclone).attr("data-edit-id",bedroomcount);
	   $("input[type='checkbox']",bedclone).attr("data-id",bedroomcount);
	   $('.edit_bed_hide',bedclone).addClass("bedrooms_div_edit_"+bedroomcount);
	   $('.bed_listdetail_no',bedclone).addClass("br"+bedroomcount);
	   $('.dropdown-menu',bedclone).addClass("bdrop"+bedroomcount);
	   bedclone= bedclone.attr("data-id",bedroomcount);
	   $("#bedrooms_box").append(bedclone);
   }
   
});
$(document).on("click",".countingbox_minus",function(){   
   if(parseInt($(this).next('span').attr('data-value'))>parseInt($(this).next('span').attr('data-min'))){ 
		   var cur_count=parseInt($(this).next('span').attr('data-value'));
		   var ex_count=parseInt($(this).next('span').attr('data-value'))-1;
		   $(this).next('span').attr('data-value',ex_count);
		   $(this).next('span').text(ex_count);
		   var colum_name=$(this).next('span').attr('data-name');   
		   var colum_value=ex_count;   
		  
          if(colum_name=="min_stay")
		   {   $("#min_stay_error").text("");
			   var max_val=$("#max_stay_countbox").attr("data-value");
			   if(colum_value>max_val)
			   {
				   $("#min_stay_error").text("Minimum nights can’t be higher than maximum nights."); return false;
			   }
		   }	   
		   if(colum_name=="max_stay")
		   {   $("#max_stay_error").text("");
			   var min_val=$("#min_stay_countbox").attr("data-value");
			   if(colum_value<min_val)
			   {
				   $("#max_stay_error").text("Minimum nights can’t be higher than maximum nights."); return false;
			   }
		   }
		  $.post(baseurl+"admin/product/save_listing_info",{'pid':$(".listing_base").attr('data-id'),'colum_name':colum_name,'colum_value':colum_value},function(data){ }) 
		   if(colum_name=="bedroom_count")
		   {   
			  
			   if(cur_count!=0)
			   {
				   $(".bedroom_div_"+cur_count).remove();
				   setTimeout(function(){
					var total_beds=get_bed_counts(); 
					var total_bedrooms=get_bathrooms_counts(); 
					$.post(baseurl+"admin/product/remove_bedrooms",{'pid':$(".listing_base").attr('data-id'),'remove_bedrooms':'br'+cur_count,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
					},2000);	
				   }	   
			  
		   }  
   }
});
function get_bed_counts()
{   var total_beds=0;
	$(".bedcount").each(function(i){
		total_beds=total_beds+parseInt($(this).text());
	});
	return total_beds;
}
function get_bathrooms_counts()
{   var total_bathrooms=0;
	$(".bedcount").each(function(i){
		if(!$(".privatebathroom").hasClass("bathroom_hide")){
			total_bathrooms=total_bathrooms+1;
		}		
	});
	if(!$(".commonsharebathroom").hasClass("common_bathroom_hide")){
			total_bathrooms=total_bathrooms+1;
		}
	return total_bathrooms;
}
$(document).on("click",".edit_bedroom_btn",function() {
        var edit_id=$(this).parent().parent().attr("data-id"); 
		$(".bedrooms_div_edit_"+edit_id).removeClass("edit_bed_hide");
		$(this).addClass("button_new");
		$(this).addClass("edit_done_btn");
		$(this).removeClass("edit_bedroom_btn");
		$(this).html("Done");
});
$(document).on("click",".edit_done_btn",function() {
        var edit_id=$(this).parent().parent().attr("data-id"); 
		$(".bedrooms_div_edit_"+edit_id).addClass("edit_bed_hide");
		$(this).removeClass("button_new");
		$(this).removeClass("edit_done_btn");
		$(this).addClass("edit_bedroom_btn");
		$(this).html("Edit");
});

$(document).on("click",".remove_done_btn",function() {
        var remove_id=$(this).attr("data-id"); 
		$(".bdrop"+remove_id).find(".countingbox").attr('data-value',0);
		$(".bdrop"+remove_id).find(".countingbox").text(0);
		$(".br"+remove_id).html("");
		setTimeout(function(){
		var total_beds=get_bed_counts(); 
		var total_bedrooms=get_bathrooms_counts(); 
		$.post(baseurl+"admin/product/remove_bedrooms",{'pid':$(".listing_base").attr('data-id'),'remove_bedrooms':'br'+remove_id,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
		},2000);		
});

$(document).on("click",".bed_countingbox_plus",function(){   
   var ex_count=parseInt($(this).prev('span').attr('data-value'))+1;
   $(this).prev('span').attr('data-value',ex_count);
   $(this).prev('span').text(ex_count);
   var bed_type_id='b'+$(this).prev('span').attr('data-id');   
   var bedroom_no='br'+$(this).prev('span').attr('data-edit-id');   
   var colum_value=ex_count; 
   if($("."+bedroom_no+' li p span').hasClass(bed_type_id)){
	$("."+bedroom_no).find('.'+bed_type_id).html(ex_count+" "); 
	  
   }
   else{
	   $("."+bedroom_no).append('<li><p><span class="bed_labelno bedcount '+bed_type_id+'">'+ex_count+' </span>'+$(this).parent().prev("label").text()+'</p></li>');
   }
   var total_beds=get_bed_counts();
   var total_bedrooms=get_bathrooms_counts();    
   $.post(baseurl+"admin/product/save_bed_info",{'pid':$(".listing_base").attr('data-id'),'bed_type_id':bed_type_id,'count':ex_count,"bedroom_no":bedroom_no,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ }) 
   
});
$(document).on("click",".bed_countingbox_minus",function(){   
   if(parseInt($(this).next('span').attr('data-value'))>parseInt($(this).next('span').attr('data-min'))){ 
		   var cur_count=parseInt($(this).next('span').attr('data-value'));
		   var ex_count=parseInt($(this).next('span').attr('data-value'))-1;
		   $(this).next('span').attr('data-value',ex_count);
		   $(this).next('span').text(ex_count);
		   var bed_type_id='b'+$(this).next('span').attr('data-id');   
		   var bedroom_no='br'+$(this).next('span').attr('data-edit-id');   
		   var colum_value=ex_count; 
		   if($("."+bedroom_no+' li p span').hasClass(bed_type_id)){
			$("."+bedroom_no).find('.'+bed_type_id).html(ex_count+" "); 
			  
		   }
		   else{
			   $("."+bedroom_no).append('<li><p><span class="bed_labelno bedcount '+bed_type_id+'">'+ex_count+' </span>'+$(this).parent().prev("label").text()+'</p></li>');
		   }
		   if(ex_count==0)
		   {   
			   if($("."+bedroom_no+' li p span').hasClass(bed_type_id)){
				   
				   $("."+bedroom_no+' li p .'+bed_type_id).closest("li").remove();
			   }
			  
		   }
		   var total_beds=get_bed_counts(); 
		   var total_bedrooms=get_bathrooms_counts(); 
		   $.post(baseurl+"admin/product/save_bed_info",{'pid':$(".listing_base").attr('data-id'),'bed_type_id':bed_type_id,'count':ex_count,"bedroom_no":bedroom_no,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
		  	
   }
   
   
});

$(document).on("click",".pbcheckbox_new",function(){   
   var a=1; 
   var total_beds=get_bed_counts(); 
   var total_bedrooms=get_bathrooms_counts(); 
   var bedroom_no='br'+$(this).attr("data-id"); 
   var bed_type_id='pb'; 
   if($(this).is(":checked"))
   {
	  var a=1; 
	  $(".bedroom_div_"+$(this).attr("data-id")).find(".privatebathroom").removeClass("bathroom_hide");
   }
   else
   {
	  var a=0; 
	  $(".bedroom_div_"+$(this).attr("data-id")).find(".privatebathroom").addClass("bathroom_hide");
   }
   $.post(baseurl+"admin/product/save_bed_info",{'pid':$(".listing_base").attr('data-id'),'bed_type_id':bed_type_id,'count':a,"bedroom_no":bedroom_no,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
  
   
});

$(document).on("click",".commonbed_countingbox_plus",function(){   
   var ex_count=parseInt($(this).prev('span').attr('data-value'))+1;
   $(this).prev('span').attr('data-value',ex_count);
   $(this).prev('span').text(ex_count);
   var bed_type_id='b'+$(this).prev('span').attr('data-id');   
   var bedroom_no='cbr';   
   var colum_value=ex_count; 
   if($(".commonrooms_bedtype_append li p span").hasClass(bed_type_id)){
	$(".commonrooms_bedtype_append").find('.'+bed_type_id).html(ex_count+" "); 
	  
   }
   else{
	   $(".commonrooms_bedtype_append").append('<li><p><span class="bed_labelno bedcount '+bed_type_id+'">'+ex_count+' </span>'+$(this).parent().prev("label").text()+'</p></li>');
   }
   var total_beds=get_bed_counts(); 
   var total_bedrooms=get_bathrooms_counts(); 
   $.post(baseurl+"admin/product/save_bed_info",{'pid':$(".listing_base").attr('data-id'),'bed_type_id':bed_type_id,'count':ex_count,"bedroom_no":bedroom_no,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ }) 
   
});
$(document).on("click",".commonbed_countingbox_minus",function(){   
   if(parseInt($(this).next('span').attr('data-value'))>parseInt($(this).next('span').attr('data-min'))){ 
		   var cur_count=parseInt($(this).next('span').attr('data-value'));
		   var ex_count=parseInt($(this).next('span').attr('data-value'))-1;
		   $(this).next('span').attr('data-value',ex_count);
		   $(this).next('span').text(ex_count);
		   var bed_type_id='b'+$(this).next('span').attr('data-id');   
		   var bedroom_no='cbr';   
		   var colum_value=ex_count; 
		   if($('.commonrooms_bedtype_append li p span').hasClass(bed_type_id)){
			$(".commonrooms_bedtype_append").find('.'+bed_type_id).html(ex_count+" "); 
			  
		   }
		   else{
			   $(".commonrooms_bedtype_append").append('<li><p><span class="bed_labelno bedcount '+bed_type_id+'">'+ex_count+' </span>'+$(this).parent().prev("label").text()+'</p></li>');
		   }
		   if(ex_count==0)
		   {   
			   if($('.commonrooms_bedtype_append li p span').hasClass(bed_type_id)){
				   
				   $('.commonrooms_bedtype_append li p .'+bed_type_id).closest("li").remove();
			   }
			  
		   }
		   var total_beds=get_bed_counts();
		   var total_bedrooms=get_bathrooms_counts(); 	
		   $.post(baseurl+"admin/product/save_bed_info",{'pid':$(".listing_base").attr('data-id'),'bed_type_id':bed_type_id,'count':ex_count,"bedroom_no":bedroom_no,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
		  	
   }
   
   
});
$(document).on("click",".edit_bed_common_bed_btn",function() {
        $(".add_bed_detail_base_common").removeClass("edit_bed_hide_common");
		$(this).addClass("button_new");
		$(this).addClass("edit_done_btn_common");
		$(this).removeClass("edit_bedroom_btn");
		$(this).html("Done");
});
$(document).on("click",".edit_done_btn_common",function() {
        $(".add_bed_detail_base_common").addClass("edit_bed_hide_common");
		$(this).removeClass("button_new");
		$(this).removeClass("edit_done_btn_common");
		$(this).addClass("edit_bed_common_bed_btn");
		$(this).html("Edit");
});

$(document).on("click",".common_remove_done_btn",function() {
        $(".common_dropbedtype").find(".countingbox").attr('data-value',0);
		$(".common_dropbedtype").find(".countingbox").text(0);
		$(".commonrooms_bedtype_append").html("");
		setTimeout(function(){
		var total_beds=get_bed_counts(); 
		var total_bedrooms=get_bathrooms_counts(); 
		$.post(baseurl+"admin/product/remove_bedrooms",{'pid':$(".listing_base").attr('data-id'),'remove_bedrooms':'cbr','beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
		},2000);		
});
$(document).on("click",".pbcheckbox_new_btn",function(){   
   var a=1; 
   var total_beds=get_bed_counts(); 
   var total_bedrooms=get_bathrooms_counts(); 
   var bedroom_no='cbr'; 
   var bed_type_id='sb'; 
   if($(this).is(":checked"))
   {
	  var a=1; 
	  $(".commonsharebathroom").removeClass("common_bathroom_hide");
   }
   else
   {
	  var a=0; 
	  $(".commonsharebathroom").addClass("common_bathroom_hide");
   }
   $.post(baseurl+"admin/product/save_bed_info",{'pid':$(".listing_base").attr('data-id'),'bed_type_id':bed_type_id,'count':a,"bedroom_no":bedroom_no,'beds_count':total_beds,'bathroom_count':total_bedrooms},function(data){ })
  
   
});
$(document).on("click","#add_rule_btn",function(){   
   
   var add_rule_text=$("#add_rule_text").val();
   var maxarray=[];
   var maxval=0; 
  
   if($(".add_rules_append_div_list").length>0)
   {
	  if($(".add_rules_append_div_list").length!=0){
	   $(".add_rules_append_div_list").each(function(i){
		   maxarray.push($(this).attr("data-id"));
	   })
	   
		maxval=Math.max.apply(null, maxarray) ;
	   }
	 if($(".add_rules_append_div_list").length==1)
	 {
		 maxval=1;
	 }	
	 else if($(".add_rules_append_div_list").length==2)
	 {
		 maxval=2;
	 }	
	 else{
		maxval=maxval+1; 
	 }
    	  
   }
    else
   {
	   maxval=0;
   }
	
   if(add_rule_text!=""){
   $.post(baseurl+"admin/product/add_rules",{'pid':$(".listing_base").attr('data-id'),'add_rule_text':add_rule_text,'ruleno':maxval},function(data){ 
   var data=JSON.parse(data);
	if(data.status==1)
	{
		var newrule='<div class="add_rules_inner add_rules_append_div_list" data-id="'+maxval+'"><p>'+add_rule_text+'</p><span data-id="'+maxval+'" class="delete_new_rules_btn">X</span></div>'
		$("#add_rules_append_div").append(newrule);
		$("#add_rule_text").val("");
	}
		
	else if(data.status==2)
	{
		window.location.href=baseurl;
	}
   })
   }
   else
   {
	   $("#add_rule_text").focus(); return false;
   }
  
   
});
$(document).on("click",".delete_new_rules_btn",function(){   
   
  var par=$(this).parent();
   $.post(baseurl+"admin/product/delete_rules",{'pid':$(".listing_base").attr('data-id'),'remove_id':$(this).attr("data-id")},function(data){ 
   var data=JSON.parse(data);
	if(data.status==1)
	{
		par.remove();
	}
	
	else if(data.status==2)
	{
		window.location.href=baseurl;
	}
   })
  
   
});
$(document).on('keydown', '.numbervalidate', function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||(/65|67|86|88/.test(e.keyCode)&&(e.ctrlKey===true||e.metaKey===true))&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});

$(document).ready(function(){
	$(document).on('click','#beforepublish td',function(){
		if($(this).hasClass("block") && !$(this).hasClass("inactive") && !$(this).hasClass("past_date")){
		var val=$(this).attr("data-value"); 
		$(this).removeClass("block");
		$.post(baseurl+"admin/product/remove_block_date_multi",{'pid':$(".listing_base").attr('data-id'),'block_dates':[val]},function(data){ 
		  
		   })	
		}
		else if(!$(this).hasClass("inactive") && !$(this).hasClass("past_date")){
		$(this).addClass("block");
		var val=$(this).attr("data-value"); 
        $.post(baseurl+"admin/product/save_block_date_multiple",{'pid':$(".listing_base").attr('data-id'),'block_dates':[val]},function(data){		  
		   })	 	
		}
	})
var start;
var stop;	
var blockval;
	
    
    $(document).on("mousedown","td",function() {
		 blockval=$('.data_id'+start).hasClass("block");
		 start=$(this).attr('data-id');	
         if($("td").hasClass("start_selected")){
			  $("td").removeClass("start_selected");	
		 }	 
		 $(".data_id"+start).addClass("start_selected");		 
		$(document).on("mouseover","td",function() {
		 stop=$(this).attr('data-id');  
		 if($("td").hasClass("stop_selected")){
			  $("td").removeClass("stop_selected");	
		 }	
		$(".data_id"+stop).addClass("stop_selected");
		start=$(".start_selected").attr("data-id");
		stop=$(".stop_selected").attr("data-id");
		if(parseInt(start)<=parseInt(stop)){
		for(var i=parseInt(start);i<=parseInt(stop);i++)
		{
			if(!$(this).hasClass("inactive") && !$(this).hasClass("past_date")){
				if(blockval)
				{ 
					 $('.data_id'+i).removeClass("block");	
					 $('td').removeClass("current_click");	
					 $('.data_id'+i).addClass("remove_click");						
				}
				else
				{
					 $('.data_id'+i).addClass("block");	
					 $('.data_id'+i).addClass("current_click");
					 $('td').removeClass("remove_click");	                   	 	
                     	 				
				}
			   
			}
		}
		
		
		}
		else{ 
			for(var i=parseInt(start);i>=parseInt(stop);i--)
			{
			 if(!$(this).hasClass("inactive") && !$(this).hasClass("past_date")){
				if(blockval)
				{
					 $('.data_id'+i).removeClass("block");	
					 $('td').removeClass("current_click");	
					 $('.data_id'+i).addClass("remove_click");						
				}
				else
				{
					  $('.data_id'+i).addClass("block");	
					  $('.data_id'+i).addClass("current_click");	
					   $('td').removeClass("remove_click");					  
				}
			 }	
			}
		}
		})
		$(document).on("mouseup","td",function() { 
			 stop=$(this).attr('data-value'); 
			 $(document).off('mouseover','td');
			 var date_array_save_final=[];
			 var date_array_save_final_remove=[];
			 $(".current_click").each(function(i){							
							 date_array_save_final.push($(this).attr("data-value")); 					   
						});
			 if(date_array_save_final.length!=0){
				  $('td').removeClass("current_click");	
				  $.ajaxSetup({async: true});  
				 $.post(baseurl+"admin/product/save_block_date_multiple",{'pid':$(".listing_base").attr('data-id'),'block_dates':date_array_save_final},function(data){ 
							date_array_save_final=[];	})
				}
				$(".remove_click").each(function(i){							
							 date_array_save_final_remove.push($(this).attr("data-value")); 					   
						});
				if(date_array_save_final_remove.length!=0){
				  $('td').removeClass("remove_click");	
				  $.ajaxSetup({async: true});  
				 $.post(baseurl+"admin/product/remove_block_date_multi",{'pid':$(".listing_base").attr('data-id'),'block_dates':date_array_save_final_remove},function(data){ 
								date_array_save_final_remove=[];		
									})
				} 
			})	
   
    });
})
$(document).ready(function(){
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if(activeTab){
        $('#listingtab a[href="' + activeTab + '"]').tab('show');
        $('#listingtab a[href="' + activeTab + '"]').click();
    }
});

$(document).on("click",".publish_btn",function(){
	 $.post(baseurl+"admin/product/product_publish",{'pid':$(".listing_base").attr('data-id')},function(data){ 
	var data=JSON.parse(data);
	if(data.status==1)
	{
		swal({title: "Success", text: "Your new listing notifcation sent to admin,Wait your listing go live shortly.", type: "success"},
		   function(){ 
				   location.href=baseurl+"admin/product/display_listing_list";
			   }
			);
	}
	else
	{
		swal({title: "error", text: "Something went to wrong try again later.", type: "error"},
		   function(){ 
				   location.href=baseurl;
			   }
			);
	}								
 })
});
