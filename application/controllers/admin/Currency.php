<?php
defined('BASEPATH') OR exit('No direct script access allowed');
error_reporting(1);
class Currency extends CI_Controller {
		 
	function __construct(){
        parent::__construct();
		$this->load->helper(array('cookie','date','form','email'));
		$this->load->library(array('form_validation','session'));		
		$this->load->model('user_model');
		if($this->check_prev('Currency',0)==FALSE)
		{
			redirect(base_url('admin'));
		}
    }
	
	

   public function display_currency_list()
	{
		if($this->checkLogin('A')!='')
		{   
			$id=$this->checkLogin('A');
			$this->data['id']=$id;
			$this->data['heading']="Display Currency List";
			$this->data['currency_list']=$this->user_model->get_all_details(CURRENCY,array());
			$this->load->view('admin/currency/display_currency_list',$this->data);
		}
		else
		{
			redirect(base_url().'admin');
		}	
	}	


		/*Ajax Based Payments Controller Function*/
	public function display_currency()
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
		if($order=="action")
		{
			$order="id";
		}
        $dir = $this->input->post('order')[0]['dir'];		
        $totalData = $totalFiltered = $this->user_model->get_ajax_currency_list($limit,$start,$search,$order,$dir,"total_record_count");
               
        if(empty($this->input->post('search')['value']))
        {            
            $result_set = $this->user_model->get_ajax_currency_list($limit,$start,$search,$order,$dir,"total_records");
        }
        else 
		{
            $search = $this->input->post('search')['value']; 
            $result_set =  $this->user_model->get_ajax_currency_list($limit,$start,$search,$order,$dir,"record_search");
            $totalFiltered = $this->user_model->get_ajax_currency_list($limit,$start,$search,$order,$dir,"search_record_count");
        }

        $data = array();
        if($result_set->num_rows()>0)
        {
			$i = 1;
			
            foreach ($result_set->result() as $return_rows)
            {
				$status='';
			    $update ='';
				$condition1 = $return_rows->status=='Active'?'success':'danger';
				$condition2 = $return_rows->status=='Active'?0:1;
				$condition3 = $return_rows->status=="Active"?"Active":"Inactive";
				$status = "<a class='btn btn-".$condition1."' href='javascript:void(0)'>".$condition3."</a>"; 
				
				if($return_rows->id==3){ 
				$update = "<p style='color:green;text-align:center;'><i class='fa fa-check-square'></i> Default</p>";
				}
				else{
                
				if($this->data['prev']==1 || (!empty($Currency) && in_array('2',$Currency)))
				{												
																
				$update ='<a class="btn btn-success" href="'.base_url().'admin/currency/add_currency/'.$return_rows->id.'">Edit</a>';
				} 	
				if($this->data['prev']==1 || (!empty($Currency) && in_array('3',$Currency))){
																
				$update .='<a onclick="return confirm('."'Once deleted cant be recover again...'".');" class="btn btn-danger" href="'.base_url().'admin/currency/delete_currency/'.$return_rows->id.'">
																	Delete
																</a>';
				}
				} 
													
																	
				
				$nestedData['id'] = $i;
                $nestedData['country_name'] = $return_rows->country_name;
                $nestedData['currency_type'] = $return_rows->currency_type;
                $nestedData['currency_symbols'] = $return_rows->currency_symbols;
                $nestedData['currency_rate'] = $return_rows->currency_rate;
                $nestedData['status'] = $status;
                $nestedData['action'] = $update;
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
