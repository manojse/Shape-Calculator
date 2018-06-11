
$(document).ready(function (e) { 
	function setInputBox()
  {
  		diameter='<label>Diameter :</label><input type="number" min="0"  step="0.01" name="diameter" required>';
		height  ='<label>Height   :</label><input type="number" min="0"  step="0.01" name="height" required>';
		width 	='<label>Width    :</label><input type="number" min="0"  step="0.01" name="width" required>';
      this.circle = function () 
      {
          return diameter;
      };
      this.rectangle = function () 
      {
          return height+'<br>'+width;
      };
      this.square = function () 
      {
          return width;
      };
      this.ellipse = function () 
      {
          return height+'<br>'+width;
      };
    
  }

function areaCalculate()
  {
      this.circle = function (diameter) 
      {
      	  radius=diameter/2;
          return Math.PI * radius* radius;
      };
      this.rectangle = function (width,height) 
      {
          return width*height;
      };
      this.square = function (width) 
      {
          return width*width;
      };
      this.ellipse = function (width,height) 
      {
          return Math.PI * width/2 * height/2;;
      };
    
  }

var a = new areaCalculate();
console.log('Area =', a.circle(6).toFixed(2));
console.log('Rectangle =', a.rectangle(25,10).toFixed(2));
console.log('Square =', a.square(5).toFixed(2));
console.log('Ellipse =', a.ellipse(10,12).toFixed(2));

	$("#select-shape").on('submit',(function(e) {
		e.preventDefault();
		shape=$("input[name='shape']:checked").val();
		var shapeObj = new setInputBox();
		required_input="";
		$(".shape_name").html("<b>"+shape+"</b>");
		switch(shape) {
		    case "Rectangle":
		        required_input = shapeObj.rectangle();
		        break;
		    case "Circle":
		        required_input = shapeObj.circle();
		        break;
		    case "Square":
		        required_input = shapeObj.square();
		        break; 
		     case "Ellipse":
		        required_input = shapeObj.ellipse();
		        break; 
		 }
		 console.log(required_input);
		$(".required-input").html(required_input)
		console.log(shape);
		$(".setp1").hide();
		$(".setp2").show();

	}));

	$("#submit-value").on('submit',(function(e) {
		e.preventDefault();
		shape=$("input[name='shape']:checked").val();
		var shapeObj = new setInputBox();
		result=0.0;
		result_msg="";
		switch(shape) {
		    case "Rectangle":
		    	result_msg="width of "+$("input[name='width']").val()+" and height of "+$("input[name='height']").val();
		        result = a.rectangle($("input[name='width']").val(),$("input[name='height']").val()).toFixed(2)
		        break;
		    case "Circle":
		    	result_msg="diameter of "+$("input[name='diameter']").val();
		        result = a.circle($("input[name='diameter']").val()).toFixed(2)  
		        break;
		    case "Square":
		    	result_msg="width of "+$("input[name='width']").val();
		        result = a.square($("input[name='width']").val()).toFixed(2)
		        break; 
		     case "Ellipse":
		     	result_msg="width of "+$("input[name='width']").val()+" and height of "+$("input[name='height']").val();
		        result = a.ellipse($("input[name='width']").val(),$("input[name='height']").val()).toFixed(2)
		        break; 
		 }
		$(".result_msg").html(result_msg);
		$(".result").html("The Area is "+result+".");
		$(".setp2").hide();
		$(".setp3").show();

	}));

	$("#start-over").on('click',(function(e) {

		$(".setp3").hide();
		$(".setp1").show();

	}));
	$(".cancel").on('click',(function(e) {

		$(".setp3").hide();
		$(".setp2").hide();
		$(".setp1").show();

	}));
});