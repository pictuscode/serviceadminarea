<?php $this->load->view('admin/common/header.php'); ?>
<?php $this->load->view('admin/common/sidebar.php'); ?>

  <div class="content-wrapper">

<!--breadcrumbs-->
<section class="content-header">
			<h1><?php echo $heading;?></h1>
			  <ol class="breadcrumb">
				<li><a href="<?php echo base_url();?>admin/dashboard" title="Go to Home" class="tip-bottom"><i class="fa fa-dashboard"></i>Dashboard</a></li>
		        <li class="active">Users</li>
		        <li class="active"><?php echo $heading;?></li>
			  </ol>
	</section>
<!--End-breadcrumbs-->
<section class="content">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="box box-primary">
            
			
			<form enctype="multipart/form-data" data-user-id="<?php if(!empty($user)){ echo $user->id; } ?>" id="register-form<?php if(!empty($user)){ echo "-edit"; } ?>"  action="<?php echo base_url();?>admin/user/add_edit_insert/<?php if(!empty($user)){ echo $user->id; } ?>" method="post" novalidate="novalidate">
			<div class="box-body">
               
				<div class="form-group">
                  <label class="">Firstname</label>
                  <div class="controls">
                    <input  type="text" value="<?php if(!empty($user)){ echo $user->first_name; } ?>" name="first_name" class="form-control">
                  </div>
                </div>
				<div class="form-group">
                  <label class="">Lastname</label>
                  <div class="controls">
                    <input  type="text" value="<?php if(!empty($user)){ echo $user->last_name; } ?>" name="last_name" class="form-control">
                  </div>
                </div>
			    <div class="form-group">
                  <label class="">Password</label>
                  <div class="controls">
                    <input  type="password" name="password" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label">Email</label>
                  <div class="controls">
                    <input value="<?php if(!empty($user)){ echo $user->email; } ?>" type="text" name="email"  class="form-control">
                  </div>
                </div>
				<div class="form-group">
                  <label class="control-label">Mobile</label>
                  <div class="controls">
                    <input value="<?php if(!empty($user)){ echo $user->phone; } ?>" type="text" name="phone"  class="form-control number">
                  </div>
                </div>
				 <div class="form-group">
                  <label class="control-label">Zip Code</label>
                  <div class="controls">
                    <input  type="text" value="<?php if(!empty($user)){ echo $user->zipcode; } ?>" name="zipcode"  class="form-control">
                  </div>
                </div>
				<div class="form-group">
                  <label class="control-label">Profile Image</label>
                  <div class="controls">
                    <input  type="file"  name="photo" class="ui-wizard-content"><br/><br/>
					<div class="form_input"><img  class="display_user_pro" src="<?php if(empty($user)){ echo base_url().'images/site/profile/avatar.png';}else{ echo base_url();?>images/site/profile/<?php echo $user->photo;}?>" width="100px" height="100px"/></div>
                  </div>
                </div>
              </div>
             
              <div class="box-footer">
                <input id="next" class="btn btn-primary ui-wizard-content ui-formwizard-button" type="submit" value="Save">
                <div id="status"></div>
              </div>
              <div id="submitted"></div>			  
			</form>
			</div>
			</div>
			</div>
			</section>


</div>
<?php $this->load->view('admin/common/footer');?>
