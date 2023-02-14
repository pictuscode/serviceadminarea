<!DOCTYPE html>
<html lang="en">
    
<head>
        <title><?php echo $this->config->item('site_name');?> - Admin Panel</title><meta charset="UTF-8" />
       <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/bootstrap.min.css">
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/sweetalert.css" />
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/font-awesome.min.css">
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/fonts/ionicons.min.css">
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/pictus.min.css">
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/blue.css">
		<link rel="stylesheet" href="<?php echo base_url();?>css/admin/developer.css">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
		<link rel="shortcut icon" sizes="76x76" type="image/x-icon" href="<?php echo base_url();?>images/site/logo/<?php echo $this->config->item('site_favicon')!=''?$this->config->item('site_favicon'):'favicon.ico';?>" />
    </head>
	<script>
	var baseurl="<?php echo base_url();?>";
	</script>
    <body class="hold-transition login-page">
		
		<div class="login-box">
			<div class="login-logo">
			<img class="login_logo" src="<?php echo base_url();?>images/site/logo/<?php echo $this->config->item('site_logo');?>" alt="Logo" />
			
	  </div>
	  <!-- /.login-logo -->
	  <div class="login-box-body">
	  <p class="login-box-msg">Sign in to start your session</p>
	  
	<form id="loginform" method="post">
	<div class="form-group has-feedback">
        <input type="text" class="form-control" name="admin_email" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
		<label for="admin_email" generated="true" class="error"></label>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" name="admin_password" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
		<label for="admin_password" generated="true" class="error"></label>
      </div>
		 <div class="col-xs-4 newbtn">
          <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
		 <div class="form-group">
	     <a class="btn fpwd"/>Forgot Password?</a>
	  </div>
	</form>
	 <form id="recoverform" action="#" >
	 <p class="login-box-msg">Enter your e-mail address below and we will send you instructions how to recover a password.</p>
	 <div class="form-group has-feedback">
        <input type="text" class="form-control" name="forgot_email" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
		<label for="forgot_email" generated="true" class="error"></label>
      </div>
	  <div class="form-group has-feedback">
	   <a class="btn btn-info" id="submitforgor">Submit</a>
	  <a href="#" class="flip-link btn btn-success" id="to-login">&laquo; Back to login</a>
	

	  </div>
	 </form>
	</div>
        </div>
  </body>         
            
          
        
        <script src="<?php echo base_url();?>js/admin/jquery.min.js"></script>  
        <script src="<?php echo base_url();?>js/admin/sweetalert.min.js"></script>  
        <script src="<?php echo base_url();?>js/admin/bootstrap.min.js"></script>  
        <script src="<?php echo base_url();?>js/admin/jquery.validate.js"></script>	
        <script src="<?php echo base_url();?>js/admin/admin_validation_forms.js"></script>	
		<script type="text/javascript" src="<?php echo base_url();?>js/site/flatpickr.js"></script>
        <script type="text/javascript" src="<?php echo base_url();?>js/site/highlight.pack.js"></script>
		<script type="text/javascript">
		    $(document).ready(function(){
				$("#recoverform").hide();	
			})
				
			$(document).ready(function(){
				$('.fpwd').click(function(){
					$("#loginform").hide(1000);
					$("#recoverform").show(1000);
				});
				$('#to-login').click(function(){					
					$("#recoverform").hide(1000);
					$("#loginform").show();
				});
				$("#submitforgor").click(function(){
					$("#recoverform").submit();	
				})
			})	
		</script>
    </body>

</html>
