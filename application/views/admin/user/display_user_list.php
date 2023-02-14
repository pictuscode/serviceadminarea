<?php $this->load->view('admin/common/header.php'); ?>
<?php $this->load->view('admin/common/sidebar.php'); 
if(!empty(unserialize($previllage))){extract(unserialize($previllage));}?>
<div id="content-wrapper" class="content-wrapper">

<!--breadcrumbs-->
  <div id="content-header" class="content-header"	>
  <?php if($this->session->flashdata('error_type')!='' && $this->session->flashdata('alert_message')!='' ){?>
<div class="alert <?php if(($this->session->flashdata('error_type')=='error')){?>alert-danger<?php }else{ echo "alert-success";}?>">
											<a class="close" data-dismiss="alert" href="javascript:void(0);">×</a>

											<?php echo( $this->session->flashdata('alert_message'));?>
											<br>
</div>
	<?php } ?>	
    <div id="breadcrumb"> <a href="javascript:void(0);" title="<?php echo $heading;?>" class="tip-bottom"><i class="icon-home"></i> <?php echo $heading;?></a></div>
  </div>
<!--End-breadcrumbs-->

<!--Action boxes-->
<section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
             <div class="widget-title"> <span class="icon"><i class="icon-th"></i></span>
            <h5><?php echo $heading;?></h5>
          </div>
			<div class="box-body">
              <table id="user_table" class="table table-bordered table-striped">
               	<thead>
														<tr>
															
															<th id="ajax_url" data-url="<?php echo base_url('admin/user/display_user') ?>" data-name="id">Sno</th>
															<th data-name="first_name">First Name</th>
															<th data-name="last_name">Last Name</th>
															<th data-name="email">Email</th>
															<th data-name="phone">Mobile</th>
															<th data-name="zipcode">Zipcode</th>
															<th data-name="status">Status</th>
															<th data-name="update">
																<i class="ace-icon fa fa-clock-o bigger-110"></i>
																Update
															</th>
														</tr>
													</thead>

													<tbody>
																											
													</tbody>
			  </table>
		  </div>
        </div>
      </div>
    </div>
  </section>



</div>
<?php $this->load->view('admin/common/footer');?>
