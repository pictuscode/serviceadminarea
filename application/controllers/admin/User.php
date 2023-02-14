<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {
		 
	function __construct(){
        parent::__construct();
		$this->load->helper(array('cookie','date','form','email'));
		$this->load->library(array('form_validation','session'));		
		$this->load->model('user_model');
	    if($this->check_prev('Users',0)==FALSE)
		{
			redirect(base_url('admin'));
		}
		
    }
	
	public function dashboard()
	{
		if($this->checkLogin('A')!='')
		{   
			$id=$this->checkLogin('A');
			$this->data['id']=$id;
			$this->data['heading']="Display User List";
			$this->data['user']=$this->user_model->get_all_details(USERS,array('group'=>'0'));
			$this->data['active_user']=$this->user_model->get_all_details(USERS,array('status'=>'Active','group'=>'0'));
			$this->data['new_user']=$this->user_model->get_all_details(USERS,array('(created)'=>date('Y-m-d'),'group'=>'0')); 
			$this->load->view('admin/user/dashboard',$this->data);
		}
		else
		{
			redirect(base_url().'admin');
		}	
	}	

   public function display_user_list()
	{
		if($this->checkLogin('A')!='')
		{   
			$id=$this->checkLogin('A');
			$this->data['id']=$id;
			$this->data['heading']="Display User List";
			//$this->data['user']=$this->user_model->get_all_details(USERS,array('group'=>'0'));
			$this->load->view('admin/user/display_user_list',$this->data);
		}
		else
		{
			redirect(base_url().'admin');
		}	
	}	


    

	/*Ajax Based Users List Controller Function*/
	public function display_user()
	{
		$limit = '';
		$start = '';
		$search = '';
		$order = '';
		$dir = '';
		$columns = array() ;		
		$columns = $this->input->post('array_merge_name');		
		$limit = $this->input->post('length');
        $start = $this->input->post('start');
		$order = $columns[$this->input->post('order')[0]['column']];
		if($order=="update")
		{
			$order="id";
		}
        $dir = $this->input->post('order')[0]['dir'];		
        $totalData = $totalFiltered = $this->user_model->get_ajax_users_list($limit,$start,$search,$order,$dir,"total_record_count");
               
        if(empty($this->input->post('search')['value']))
        {            
            $result_set = $this->user_model->get_ajax_users_list($limit,$start,$search,$order,$dir,"total_records");
        }
        else 
		{
            $search = $this->input->post('search')['value']; 
            $result_set =  $this->user_model->get_ajax_users_list($limit,$start,$search,$order,$dir,"record_search");
            $totalFiltered = $this->user_model->get_ajax_users_list($limit,$start,$search,$order,$dir,"search_record_count");
        }

        $data = array();
        if($result_set->num_rows()>0)
        {
			$i = $start+1;
            foreach ($result_set->result() as $return_rows)
            {
				$edit = "";
				$delete = "";
				$condition1 = "";
				$condition2 = "";
				$condition3 = "";
				$prev = $this->data['prev'];
				if($prev==1 || (!empty($Users) && in_array('2',$Users))){
					$edit = "<a class='btn btn-success' href='".base_url()."/admin/user/add_user/".$return_rows->id."'>Edit</a>";
				}
				if($prev==1 || (!empty($Users) && in_array('3',$Users))){
					$delete = '<a class="btn btn-danger" onclick="return confirm(\'Once deleted cant be recover again...\')" href="'.base_url().'/admin/user/delete_user/'.$return_rows->id.'">Delete</a>';
				}
				else
				{
					$edit = '-';
					$delete = '-';
				}
				$condition1 = $return_rows->status=='Active'?'success':'danger';
				$condition2 = $return_rows->status=='Active'?0:1;
				$condition3 = $return_rows->status=="Active"?"Active":"Inactive";
				$status = "<a class='btn btn-".$condition1."' href='javascript:voic(0)'> 
							 ".$condition3."</a>"; 
							 
                $nestedData['id'] = $return_rows->id;
                $nestedData['first_name'] = $return_rows->first_name;
                $nestedData['last_name'] = $return_rows->last_name;
                $nestedData['phone'] =  $this->config->item('script_type_demo')==0?"xxxxxxxxxx":$return_rows->phone;
                $nestedData['zipcode'] = $return_rows->zipcode;
                $nestedData['email'] = $this->config->item('script_type_demo')==0?"xxxxxxxxxx":$return_rows->email;
                $nestedData['status'] = $status; 
                $nestedData['update'] = "<div class='hidden-sm hidden-xs action-buttons'>".$edit.$delete."</div>";
                $data[] = $nestedData;
				$i++;
            }
        }
          
				$json_data = array(
							"draw"            => intval($this->input->post('draw')),  
							"recordsTotal"    => intval($totalData),  
							"recordsFiltered" => intval($totalFiltered), 
							"data"            => $data   
							);
				
				echo json_encode($json_data);
	}

	

}
