  	<?php
	$lang_key 	= $this->session->userdata('pictuslang_key');
	if(isset($lang_key)){
		$this->lang->load($lang_key, $lang_key);
	}else{
		$this->lang->load('en', 'en');
	}
	?>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
	  <!--Dashboard-->
       <li <?php if($this->uri->segment(3)!="dashboard"){ echo 'menu-open';}?>><a href="<?php echo base_url();?>admin/dashboard"><i class="fa fa-dashboard"></i><span>Dashboard</span>
				<span class="pull-right-container"></span>
				</a>
       </li>
	 
		<li class="treeview open <?php if($this->uri->segment(2)=="user"){ echo 'menu-open';}?>"><a href="#"><i class="fa  fa-users"></i> <span class="">Users</span>
		
				<span class="pull-right-container">
				<small class="label pull-right bg-green">
					30
				</small>
				<i class="fa fa-angle-left pull-right"></i>
				</span>
				</a>
			 <ul class="treeview-menu" <?php if($this->uri->segment(2)=="user"){ echo 'style="display:block"';}?>>
				 <li <?php if($this->uri->segment(3)=="dashboard"){ echo 'class="active"';}?>><a href="<?php echo base_url();?>admin/user/dashboard"><i class="fa fa-circle-o"></i>Dashboard</a></li>
				<li <?php if($this->uri->segment(3)=="display_user_list"){ echo 'class="active"';}?>><a href="<?php echo base_url();?>admin/user/display_user_list"><i class="fa fa-circle-o"></i>Users List</a></li>
				
			  
			</ul>
		</li>
		


		
		
		<li class="treeview open <?php if($this->uri->segment(2)=="currency"){ echo 'menu-open';}?>"><a href="#"><i class="fa  fa-users"></i> <span>Currency</span>
				<span class="pull-right-container">
				<i class="fa fa-angle-left pull-right"></i>
				</span>
				</a>
			<ul class="treeview-menu" <?php if($this->uri->segment(2)=="currency"){ echo 'style="display:block"';}?>>
				
				<li <?php if($this->uri->segment(3)=="display_currency_list"){ echo 'class="active"';} ?>><a href="<?php echo base_url();?>admin/currency/display_currency_list"><i class="fa fa-circle-o"></i>Currency List</a></li>
       
			</ul>
        </li>
		<!--City  Menu-->	
		
		
	</ul>
    </section>
    <!-- /.sidebar -->
  </aside>