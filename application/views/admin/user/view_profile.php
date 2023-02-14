<?php $this->load->view('site/common/header'); 	?>
<div class="grid_3">
  <div class="container">
   
   <div class="col-md-2 col_5">
   </div>
   
   <div class="col-md-9 profile_left">
   <div class="breadcrumb1">
     <ul>
        <a href="index.html"><i class="fa fa-home home_1"></i></a>
        <span class="divider">&nbsp;|&nbsp;</span>
        <li class="current-page">Profiles List</li>
     </ul>
   </div>
     <div class="col_4">
		    <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
			   <ul id="myTab" class="nav nav-tabs nav-tabs1" role="tablist">
				  <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Members Viewded my profile</a></li>
				  <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Privacy Settings</a></li>
			   </ul>
			   <div id="myTabContent" class="tab-content">
				  <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
				    <div class="tab_box tab_box1">
				      <h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h1>
				      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
				    </div>
				    <ul class="pagination pagination_1">
				 	 <?php echo $pages;?>
                    </ul>
	                <div class="clearfix"> </div>
                    <?php foreach($fc_freereg as $fc_freeregs ):?>
	                <div class="jobs-item with-thumb">
	                   <div class="thumb_top">
				        <div class="thumb"><a href="jobs_single.html"><img src="<?php echo base_url();?>images/upload/profile/<?php echo $fc_freeregs->prf_img; ?>" class="img-responsive" alt=""/></a></div>
					    <div class="jobs_right">
							<h6 class="title"><a href="<?php echo base_url().'view_profile/'.$fc_freeregs->regid; ?>"><?php echo $fc_freeregs->pname;?>(2547189)</a></h6>
						
							<p class="description"><?php echo $fc_freeregs->age;?> years / <?php echo $fc_freeregs->height;?> Ft | <span class="m_1">Reliogion</span> : <?php echo $fc_freeregs->religion; ?> | <span class="m_1">Education</span> : <?php echo $fc_freeregs->degrees;?> | <span class="m_1">Occupation</span> : <?php echo $fc_freeregs->occupation;?><br><a href="<?php echo base_url().'view_profile/'.$fc_freeregs->regid; ?>" class="read-more">view full profile</a></p>
						</div>
						<div class="clearfix"> </div>
					   </div>
					   
					  </div>
					  
					  <?php endforeach;?>
					  
				  </div>
				  <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
				    <div class="terms">
            		  <h2>Your Privacy Settings</h2>
					   <div class="terms_top">
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
						<ol class="terms_list">
							<li>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum".</li>
							<li>Lusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</li>
							<li>Praesentium voluptatum deleniti atque corrupti quos</li>
							<li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</li>
							<li>Mentum eleifend enim a feugiat distinctio lor</li>
						</ol>
						<h4>There are many variations of passages</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Integer sed arcu. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non <a href="#">libero consectetur adipiscing</a> elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>
						<p><strong>Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non sit amet, consectetur adipiscing elit. Ut adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque lorem ipsum dolor sit amet. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat <a href="#">consectetur adipiscing elit</a>.</strong></p>
					  </div> 	
		           </div>
				 </div>
			 </div> 
		  </div>
	   </div>
   </div>
   <div class="clearfix"> </div>
  </div>
</div>
<?php $this->load->view('site/common/footer');?>
