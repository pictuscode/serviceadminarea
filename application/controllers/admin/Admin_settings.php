<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_settings extends CI_Controller {
		 
	function __construct(){
        parent::__construct();
		$this->load->helper(array('cookie','date','form','email'));
		$this->load->library(array('form_validation','session'));		
		$this->load->model('user_model');
		
    }
	public function index(){
		redirect(base_url().'admin');
	}
	public function login()
	{ 
		if($this->checkLogin('A')!='')
		{
		 redirect(base_url().'admin/dashboard');
		}
		$this->load->view('admin/admin_settings/login',$this->data);
	}	
	
	public function logout() {
		
		$userdata = array (
				'gmtech_admin_id' => '',
				'gm_admin_email' => ''
				);
		$this->session->set_userdata ( $userdata );
		$this->session->set_userdata ('gm_admin_id',''); 
		redirect (base_url().'admin');
	}
	
	public function admin_login() {

		$email = $this->input->post ( 'admin_email' );
		$pwd = $this->input->post ( 'admin_password' );
		$pwd = sha1($pwd);
		$condition = array (
					'email' => $email,
					'password' => $pwd
			);
			$checkUser = $this->user_model->get_all_details ( ADMIN, $condition ); 
			#echo $this->db->last_query(); 
			
			if ($checkUser->num_rows () == '1') { 
			$userdata = array (
						'gmtech_admin_id' => $checkUser->row ()->id,
						'gmtech_admin_name' => $checkUser->row ()->firstname,
						'gm_session_prev' => $checkUser->row ()->permission,
						'gm_admin_email' => $checkUser->row ()->email
				);
				
				$this->session->set_userdata ( $userdata );	
			
				$this->user_model->save_data();				
				$returnStr ['status'] = 1; 
			}
			else
			{
			
				$returnStr ['message'] = 'Invalid login details';
				$returnStr ['status'] = 2;	
			}
				
		
		echo json_encode ( $returnStr );
	}
	
	public function dashboard()
	{
		
		if($this->checkLogin('A')!='')
		{ 
		$id=$this->checkLogin('A');
		$this->data['new_user']=$this->user_model->get_all_details(USERS,array('(created)'=>date('Y-m-d'),'group'=>0));			
		$this->data['new_tasker']=$this->user_model->get_all_details(USERS,array('(created)'=>date('Y-m-d'),'group'=>1));			
		$this->data['overall_booking']=$this->user_model->get_all_details(BOOKING,array('status'=>'Paid'));			
		$totpro=$this->user_model->overall_admin_profit()->row()->tot;			
		$totcan=$this->user_model->overall_admin_profit_cancel()->row()->tot;			
		$this->data['overall_admin_profit']=$totpro+$totcan;			
		$this->data['admin']=$this->user_model->get_all_details(ADMIN,array('id'=>$id))->row();
		$this->data['heading']="Recent Login User List";
		$this->data['user']=$this->user_model->get_all_details(USERS,array('group'=>'0','last_login_date >='=>date('Y-m-d',strtotime("-2 day")))); 
		$this->data['heading1']="Recent Login Tasker List";
		$this->data['heading2']="";
		$this->data['user1']=$this->user_model->get_all_details(USERS,array('group'=>'1','last_login_date >='=>date('Y-m-d',strtotime("-2 day"))));
		#echo $this->db->last_query();
		$this->load->view('admin/admin_settings/dashboard',$this->data);
		}
		else
		{
		redirect(base_url().'admin');
		}
	}

	
	
}
