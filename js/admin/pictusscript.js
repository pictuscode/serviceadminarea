 $(function () {
    $('#dynamic-table').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : true
    })
	
$(function(){
	$('.close').click(function(){
		$('.callout-info').slideUp();
	});
	})
  });
  

  