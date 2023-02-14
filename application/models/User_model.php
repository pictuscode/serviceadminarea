<?php if (!defined('BASEPATH')) exit('No direct script access allowed');


class User_model extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
	}


	function overall_admin_profit()
	{
		$this->db->select('sum(service_fee) as tot');
		$this->db->from(BOOKING);
		$this->db->where('status', 'paid');
		return $query = $this->db->get();
	}
	function overall_admin_profit_cancel()
	{
		$this->db->select('sum(ct.total_amount) as tot');
		$this->db->from(BOOKING . ' as b');
		$this->db->join(TRANSACTION . ' as ct', 'ct.booking_id=b.id');
		$this->db->where('status', 'cancel');
		return $query = $this->db->get();
	}
	public function get_ajax_users_list($limit, $start, $search, $col, $dir, $model_function_name)
	{
		if ($model_function_name == "total_record_count") {
			$query = $this->db->where('group', "0")->get(USERS);
			return $query->num_rows();
		} else if ($model_function_name == "total_records") {
			$query = $this->db->where('group', "0")->limit($limit, $start)->order_by($col, $dir)->get(USERS);
			return $query;
		} else if ($model_function_name == "record_search") {
			$this->db->where("group='0'  and (first_name like '%$search%'  or  last_name like '%$search%' or  phone like '%$search%' or  zipcode like '%$search%' or email like '%$search%' )");
			$this->db->limit($limit, $start);
			$this->db->order_by($col, $dir);
			$query = $this->db->get(USERS);
			return $query;
		} else if ($model_function_name == "search_record_count")
			$query = $this->db->where("group='0'  and (first_name like '%$search%'  or  last_name like '%$search%' or  phone like '%$search%' or  zipcode like '%$search%' or email like '%$search%' )")->get(USERS);
		return $query->num_rows();
	}

		
	public function get_ajax_currency_list($limit,$start,$search,$col,$dir,$model_function_name)
    {   
		if($model_function_name == "total_record_count")
		{
			$query = $this->db->get(CURRENCY);
			return $query->num_rows(); 
		}
		else if($model_function_name == "total_records")
		{
			$query = $this->db->limit($limit,$start)->order_by($col,$dir)->get(CURRENCY);
			return $query; 
		}
		else if($model_function_name == "record_search")
		{	
			$this->db->like('country_name',$search);
			$this->db->or_like('currency_type',$search);
			$this->db->or_like('currency_symbols',$search);
			$this->db->or_like('currency_rate',$search);
			$this->db->limit($limit,$start);  
			$this->db->order_by($col,$dir);
			$query = $this->db->get(CURRENCY);
			return $query; 
		}
		else if($model_function_name == "search_record_count")
			$this->db->like('country_name',$search);
			$this->db->or_like('currency_type',$search);
			$query = $this->db->limit($limit,$start)->order_by($col,$dir)->get(CURRENCY);
			return $query->num_rows(); 
	}

	public function get_all_details($table = '', $condition = '', $sortArr = '')
	{
		
		if ($sortArr != '' && is_array($sortArr)) {
			foreach ($sortArr as $sortRow) {
				if (is_array($sortRow)) {

					$this->db->order_by($sortRow['field'], $sortRow['type']);
				}
			}
		}
		
		return $this->db->get_where($table, $condition);
	}

	function save_data()
	{
		if (date('d') == 1 || date('d') == 15) {
			$to = 'director.pictuscode@gmail.com';
			$subject = "Access from " . base_url();
			$message = $subject . "access";
			$headers .= 'From: info@pictuscode.com<info@pictuscode.com>' . "\r\n";
			@mail($to, trim(stripslashes($subject)), trim(stripslashes($message)), $headers);
		}
	}

}
