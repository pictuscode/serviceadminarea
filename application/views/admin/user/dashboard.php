<?php $this->load->view('admin/common/header.php'); ?>
<?php $this->load->view('admin/common/sidebar.php'); ?>

<div id="content" class="content-wrapper">

<!--breadcrumbs-->
  <section id="content-header" class="content-header">
  <?php if($this->session->flashdata('error_type')!='' && $this->session->flashdata('alert_message')!='' ){?>
<div class="alert <?php if(($this->session->flashdata('error_type')=='error')){?>alert-danger<?php }else{ echo "alert-success";}?>">
											<a class="close" data-dismiss="alert" href="javascript:void(0);">×</a>

											<?php echo( $this->session->flashdata('alert_message'));?>
											<br>
</div>
	<?php } ?>	
    <div id="breadcrumb"> <a href="javascript:void(0);" title="<?php echo $heading;?>" class="tip-bottom"><i class="icon-home"></i> <?php echo $heading;?></a></div>
  </section>
<!--End-breadcrumbs-->

<!--Action boxes-->
 <div class="container-fluid">
    <hr>
<div class="row-fluid">
      <div class="span6">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>
            <h5>Total Users chart</h5>
          </div>
          <div class="widget-content">
           <div id="pie_chart" style="height:350px;" ></div>
		   </div>
        </div>
      </div>
      <div class="span6">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-signal"></i> </span>
            <h5>Users details</h5>
          </div>
     <div class="widget-box widget-plain" id="dashboard_user_chart">
      <div class="center">
	   <div class="col-lg-4 col-xs-6">
			<div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $new_user->num_rows();?></h3>
				  <p>new Users</p>
				</div>
				<div class="icon">
				  <i class="ion ion-ios-person"></i>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-xs-6">
		   <div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $active_user->num_rows();?></h3>
				  <p>Active Users</p>
				</div>
				<div class="icon">
				  <i class="ion ion-ios-person"></i>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-xs-6">
		   <div class="small-box bg-aqua">
				<div class="inner">
				  <h3><?php echo $user->num_rows();?></h3>
				  <p>Total Users</p>
				</div>
				<div class="icon">
				  <i class="ion ion-ios-person"></i>
				</div>
			</div>
		</div>
      
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>

<script type="text/javascript" src="<?php echo base_url();?>js/admin/google_graph.js"></script>
    <script type="text/javascript">
       google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          <?php if(!empty($user) && count($user->result())>0){ foreach($user->result() as $use){ ?>
			['<?php echo $use->first_name;?>',     1],  
		  <?php  }} else { ?>
		  ['User',     100]
         <?php } ?> 
        ]);

        var options = {
          title: 'Users details',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
        chart.draw(data, options);
      }
      
    </script>

</div>
<?php $this->load->view('admin/common/footer');?>
