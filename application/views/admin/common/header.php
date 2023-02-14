<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php if(isset($heading)&& $heading!=''){ echo $heading.'-';} ?> <?php echo $this->config->item('site_name');?> Admin</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/dataTables.bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/font-awesome.min.css">
   <link rel="stylesheet" href="<?php echo base_url();?>css/admin/font-awesome.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/fonts/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/sweetalert.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/select2.min.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/pictus.min.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/developer.css" />
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/skins/_all-skins.min.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/admin/bootstrap3-wysihtml5.min.css">
  <link rel="shortcut icon" sizes="76x76" type="image/x-icon" href="<?php echo base_url();?>images/site/logo/<?php echo $this->config->item('site_favicon')!=''?$this->config->item('site_favicon'):'favicon.ico';?>" />
</head>
<script>
var baseurl="<?php echo base_url();?>";
</script>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <a href="<?php echo base_url();?>admin/dashboard" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
	  <span class="logo-mini"><?php echo $this->config->item('site_name')[0].$this->config->item('site_name')[1];?></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><?php echo $this->config->item('site_name');?></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="messages-menu">
            <a href="#" >Hi <?php echo $this->session->userdata('gmtech_admin_name');?></a>
            </li>
         
         <li class="messages-menu">
            <a href="<?php echo base_url();?>" target="_blank"><i class="fa fa-external-link"></i>  View Site</a>
            </li>
         <li class="messages-menu">
            <a href="<?php echo base_url();?>admin/admin_settings/logout" ><i class="fa fa-sign-out" ></i> Sign out</a>
            </li>
         
        </ul>
      </div>
    </nav>
  </header>