<?php $this->load->view('admin/common/header.php'); ?>
<?php $this->load->view('admin/common/sidebar.php'); ?>
<div class="content-wrapper">
<!--breadcrumbs-->
  <section class="content-header">
  <h1>Dashboard</h1>
      <!--<ol class="breadcrumb">
        <li><a href="<?php echo base_url();?>admin/dashboard" title="Go to Home" class="tip-bottom"><i class="fa fa-dashboard"></i>Dashboard</a></li>
		<li class="active">Admin</li>
		<li class="active"><?php echo $heading;?></li>
      </ol>-->
  </section>
<!--End-breadcrumbs-->

<!--Action boxes-->
    <section class="content">
    <div class="row">
            <div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $total_user_count->num_rows();?></h3>
				  <p>Total Users</p>
				</div>
				<div class="icon">
				  <i class="ion ion-ios-person"></i>
				</div>
			</div>
			</div>
			<div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $new_user->num_rows();?></h3>
				  <p>New Users</p>
				</div>
				<div class="icon">
				  <i class="ion ion-ios-personadd"></i>
				</div>
			</div>
			</div>
			<div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $overall_booking->num_rows();?></h3>
				  <p>Total Bookings</p>
				</div>
				<div class="icon">
				  <i class="ion ion-android-cart"></i>
				</div>
			</div>
			</div>
			<div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $total_tasker_count->num_rows();?></h3>
				  <p>Total Taskers</p>
				</div>
				<div class="icon">
				  <i class="ion ion-android-person"></i>
				</div>
			</div>
			</div>
			<div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $total_tasker_count->num_rows();?></h3>
				  <p>New Taskers</p>
				</div>
				<div class="icon">
				  <i class="ion ion-android-person-add"></i>
				</div>
			</div>
			</div>
			<div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $overall_admin_profit;?></h3>
				  <p>Admin Profit</p>
				</div>
				<div class="icon">
				  <i class="ion ion-cash"></i>
				</div>
			</div>
			</div>
	<section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title"><?php echo $heading1;?></h3>
            </div>
			<div class="box-body">
              <table id="dynamic-table" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sno</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Last Login Date</th>
                  <th>Last Login IP</th>
                </tr>
                </thead>
					<tbody>
						<?php foreach($user->result() as $user_list){?>
						<tr>															
							<td><?php echo $user_list->id;?></td>
							<td><?php echo ucfirst($user_list->first_name);?><?php echo $user_list->last_name;?></td>
							<td><?php echo $this->config->item('script_type_demo')==0?"xxxxxxxxxx":$user_list->email;?></td>
							<td><?php echo $user_list->last_login_date;?></td>
							<td><?php echo $user_list->last_login_ip;?></td>
						</tr>
						<?php } ?>														
					</tbody>
				</table>
			</div>
			</div>
			</div>
			
			
			<div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title"><?php echo $heading2;?></h3>
            </div>
			<div class="box-body">
              <table id="dynamic-table" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Sno</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Last Login Date</th>
                  <th>Last Login IP</th>
                </tr>
                </thead>
					<tbody>
						<?php foreach($user1->result() as $user_list1){?>
						<tr>															
							<td><?php echo $user_list1->id;?></td>
							<td><?php echo ucfirst($user_list1->first_name);?><?php echo $user_list1->last_name;?></td>
							<td><?php echo $this->config->item('script_type_demo')==0?"xxxxxxxxxx":$user_list->email;;?></td>
							<td><?php echo $user_list1->last_login_date;?></td>
							<td><?php echo $user_list1->last_login_ip;?></td>												
						</tr>
						<?php } ?>														
					</tbody>
				</table>
			</div>
			</div>
			</div>
			</div>
			</section>
          </div>
  </section>
</div>


<?php $this->load->view('admin/common/footer.php');?>
