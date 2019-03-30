$(document).ready(function(){

	//Click event
	$(document).on("click","#claculate",function(){
		var num1 = $("#txt_num1").val();
		var num2 = $("#txt_num2").val();
		var err = 0;
		basicCla(parseInt(num1), parseInt(num2));
	});

	//Validation function
	function vali_num(num1, num2){
		if(num1 == null || num1 == '' || num2 == null || num2 == ''){
			err = 1;
			return false;
		}
		else{
			return true;
		}
	}

	//Basic Calculations function
	function basicCla(num1, num2){
		if(vali_num(num1,num2)){
			err = 0;
			$('#error').removeClass('show');
			$('#add_ans').html(num1 + num2);
			$('#sub_ans').html(num1 - num2);
			$('#div_ans').html(num1 / num2);
			$('#mul_ans').html(num1 * num2);
			$("#square_ans").html(num1 * num1);
			$("#sqrt_ans").html(Math.sqrt(num1));
		}
		else{
			$('#error').html("Error! Please, Enter valid input numbers.");
			$('#error').addClass('show');
		}
	}
});