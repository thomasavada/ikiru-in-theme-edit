$(document).ready(function () {

  if( !$('input.form-field-input').val() ) {
          $(this).removeClass('form-field-filled');
    }else{
      $(this).addClass('form-field-filled');
    }
  
  $('input.form-field-input').blur(function()
  {
      if( !$(this).val() ) {
            $(this).removeClass('form-field-filled');
      }else{
        $(this).addClass('form-field-filled');
      }
  });

  //$("[data-variant-option] input").change(function() {
    // Execute some code or perform an action when the radio button changes
  //  var variantID = $('[data-variant-selection]').attr('variant');    
    // $('select[name="id"]').val(variantID);
    // $('.variant-selection__variants option').prop('selected', false);
    //$('.variant-selection__variants option[value="' + variantID + '"]').prop('selected', true);
  //  $(".variant-selection__variants").val("variantID"); // set the value of the dropdown
 // $(".variant-selection__variants option[value="+ variantID +""]").prop("selected", true); // set the selected attribute of the option
 // });

  
})

var AddToCartAvailable = false;

function validateCalculate(available) {

    if (!available) {
        $('.ctm_add_to_cart').attr('disabled', 'disabled')
        $('.clickBefore').slideDown(250);
        $('.clickBefore').text("Please click 'Calculate' before adding to cart.");
    }
    else {
    $('.ctm_add_to_cart').removeAttr('disabled')
    $('.clickBefore').slideUp(250);
    }
}

$('.calculate_wrapper #cal_form input').keyup(function(e){
  
        AddToCartAvailable = false;
        validateCalculate(AddToCartAvailable);
        
      //   console.log('demo 123')
        var inches = $('#cal-metrics').val();
        var length_calculater = $(this).parents('.calculate_wrapper').find('.cal_length').val();
        var width_calculater = $(this).parents('.calculate_wrapper').find('.cal_width').val();
        if (length_calculater == '' || width_calculater == '') {
          $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
          $('.purchase-details__buttons > button').addClass('ctm_disabled');
        }else{
          $("#cal-total-price").html('');
          $('.purchase-details__buttons > button').removeClass('ctm_disabled');
        }
});


$(document).on('keyup','#cal_form input',function(e){
        AddToCartAvailable = true;
        validateCalculate(AddToCartAvailable);
        e.preventDefault();
        if($(this).parents('#cal_form').children('button').hasClass("customised-wallpaper")){
          //console.log("customised-wallpaper");
          var inches = $('#cal-metrics').val();
          var length_calculater = $(this).parents('.calculate_wrapper').find('.cal_length').val();
          var width_calculater = $(this).parents('.calculate_wrapper').find('.cal_width').val();
          if (length_calculater == '' || width_calculater == '') {
              $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
              $('.purchase-details__buttons > button').addClass('ctm_disabled');
            }else{
          if( inches == "inch"){
            var inchlength = length_calculater / 12;
            var inchwidth = width_calculater / 12;	
            var countqty = inchlength * inchwidth;
            var totalqty = Math.ceil(countqty);
          }else if( inches == "cm"){
            var cmlength = length_calculater / 30.48;
            var cmlwidth = width_calculater / 30.48; 
            var countqty = cmlength * cmlwidth;
            var totalqty = Math.ceil(countqty);
          }else{
            var totalqty = length_calculater * width_calculater;
          }
          if (callength == "" || callength <= 0  ){
            var callength = 1;
          }
          if (calwidth == "" || calwidth <= 0  ){
            var calwidth = 1;
          }
          var V_ID = $('[data-variant-selection]').attr('variant');    
          var findPrice = $('[data-variants] option[value='+V_ID+']').attr('data-price');
            
          var price = findPrice
          var totalprice = price * totalqty / 100;   
          var final_price = totalprice 
            console.log('Chagesddddd',final_price)
          // console.log('Finel prise ' + price +' '+ totalqty)
        //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
            $('#product-quantity-select [selected]').val(totalqty);
            $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
            //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
            $('#cal-total-price').text('Rs. ' + final_price);
            $('.purchase-details__buttons > button').removeClass('ctm_disabled');
        }
        }else if($(this).parents('#cal_form').children('button').hasClass("wallpaper-roll")){
          
          //console.log("wallpaper-roll");
          var inches = $('#cal-metrics').val();
          var length_calculater = $(this).parents('.calculate_wrapper').find('.cal_length').val();
          var width_calculater = $(this).parents('.calculate_wrapper').find('.cal_width').val();
          if (length_calculater == '' || width_calculater == '') {
              $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
              $('.purchase-details__buttons > button').addClass('ctm_disabled');
            }else{
              if( inches == "inch"){
                var inchlength = length_calculater / 12;
                var inchwidth = width_calculater / 12;	
                var countqty = inchlength * inchwidth;
                var rollinch = countqty / 55;
                var totalqty = Math.ceil(rollinch);
              }else if( inches == "cm"){
                var cmlength = length_calculater / 30.48;
                var cmlwidth = width_calculater / 30.48;     
                var countqty = cmlength * cmlwidth;
                var rollinch = countqty / 55;
                var totalqty = Math.ceil(rollinch);
              }else{
                var rollinch = length_calculater * width_calculater / 55;
                var totalqty = Math.ceil(rollinch);
              }
              if (callength == "" || callength <= 0  ){
                var callength = 1;
              }
              if (calwidth == "" || calwidth <= 0  ){
                var calwidth = 1;
              }    
              
              var price = $('select[name=id]').find('option:selected').data('price');
              var totalprice = price * totalqty / 100;   
              var final_price = totalprice 
            //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
            $('#product-quantity-select [selected]').val(totalqty);
            $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
            //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
            $('#cal-total-price').text('Rs. ' + final_price);
            $('.purchase-details__buttons > button').removeClass('ctm_disabled');
            }
        }else if($(this).parents('#cal_form').children('button').hasClass("3d-pvc-panel")){
          
          //console.log("3d-pvc-panel");
          var inches = $('#cal-metrics').val();
          var length_calculater = $(this).parents('.calculate_wrapper').find('.cal_length').val();
          var width_calculater = $(this).parents('.calculate_wrapper').find('.cal_width').val();
          if (length_calculater == '' || width_calculater == '') {
             $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
             $('.purchase-details__buttons > button').addClass('ctm_disabled');
          }else{
            if( inches == "inch"){
              var inchlength = length_calculater / 12;
              var inchwidth = width_calculater / 12;	
              var countqty = inchlength * inchwidth;
              var rollinch = countqty / 2.6;
              var totalqty = Math.ceil(rollinch);
            }else if( inches == "cm"){
              var cmlength = length_calculater / 30.48;
              var cmlwidth = width_calculater / 30.48;     
              var countqty = cmlength * cmlwidth;
              var rollinch = countqty / 2.6;
              var totalqty = Math.ceil(rollinch);
            }else{
              var rollinch = length_calculater * width_calculater / 2.6;
              var totalqty = Math.ceil(rollinch);
            }
            if (callength == "" || callength <= 0  ){
              var callength = 1;
            }
            if (calwidth == "" || calwidth <= 0  ){
              var calwidth = 1;
            }
            var price = $('select[name=id]').find('option:selected').data('price');
            var totalprice = price * totalqty / 100;   
            var final_price = totalprice 
            //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
            $('#product-quantity-select [selected]').val(totalqty);
            $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
            //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
            $('#cal-total-price').text('Rs. ' + final_price);
            $('.purchase-details__buttons > button').removeClass('ctm_disabled');
          }
        }else if($(this).parents('#cal_form').children('button').hasClass("foam-panel")){
          
          //console.log("foam-panel");
          var inches = $('#cal-metrics').val();
          var length_calculater = $(this).parents('.calculate_wrapper').find('.cal_length').val();
          var width_calculater = $(this).parents('.calculate_wrapper').find('.cal_width').val();
          
          if (length_calculater == '' || width_calculater == '') {
              $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
              $('.purchase-details__buttons > button').addClass('ctm_disabled');
            }else{
            if( inches == "inch"){
              var inchlength = length_calculater / 12;
              var inchwidth = width_calculater / 12;	
              var countqty = inchlength * inchwidth;
              var rollinch = countqty / 5;
              var totalqty = Math.ceil(rollinch);
            }else if( inches == "cm"){
              var cmlength = length_calculater / 30.48;
              var cmlwidth = width_calculater / 30.48;     
              var countqty = cmlength * cmlwidth;
              var rollinch = countqty / 5;
              var totalqty = Math.ceil(rollinch);
            }else{
              var rollinch = length_calculater * width_calculater / 5;
              var totalqty = Math.ceil(rollinch);
            }
            if (callength == "" || callength <= 0  ){
              var callength = 1;
            }
            if (calwidth == "" || calwidth <= 0  ){
              var calwidth = 1;
            }
      
            var price = $('select[name=id]').find('option:selected').data('price');
            var totalprice = price * totalqty / 100;   
            var final_price = totalprice 
            //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
              $('#product-quantity-select [selected]').val(totalqty);
              $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
              //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
              $('#cal-total-price').text('Rs. ' + final_price);
              $('.purchase-details__buttons > button').removeClass('ctm_disabled');
          }
        }  
});


$(document).on('change','.options-selection__option-values input',function(){


  

  
        // $('.calculate_wrapper .calculate_btn').click();
       var VariantTitle = $('.options-selection__option-values input:checked').attr('value');
       var varintPrice = $('select[data-variants] [data-lable='+VariantTitle+']').html();
       $('span[data-price]').text(varintPrice);
       $('select[data-variants] option').removeAttr('selected');
       $('select[data-variants] option[data-lable='+VariantTitle+']').attr('selected','');
       // console.log(varintPrice);
        AddToCartAvailable = false;
        validateCalculate(AddToCartAvailable);
        if($('#cal_form').children('button').hasClass("customised-wallpaper")){
            //console.log("customised-wallpaper");
            var inches = $('#cal-metrics').val();
            var length_calculater = $('.calculate_wrapper').find('.cal_length').val();
            var width_calculater = $('.calculate_wrapper').find('.cal_width').val();
            if (length_calculater == '' || width_calculater == '') {
                $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
                $('.purchase-details__buttons > button').addClass('ctm_disabled');
              }else{
            if( inches == "inch"){
              var inchlength = length_calculater / 12;
              var inchwidth = width_calculater / 12;	
              var countqty = inchlength * inchwidth;
              var totalqty = Math.ceil(countqty);
            }else if( inches == "cm"){
              var cmlength = length_calculater / 30.48;
              var cmlwidth = width_calculater / 30.48; 
              var countqty = cmlength * cmlwidth;
              var totalqty = Math.ceil(countqty);
            }else{
              var totalqty = length_calculater * width_calculater;
            }
            if (callength == "" || callength <= 0  ){
              var callength = 1;
            }
            if (calwidth == "" || calwidth <= 0  ){
              var calwidth = 1;
            }
            var price = $('select[name=id]').find('option:selected').data('price');
            var totalprice = price * totalqty / 100;   
            var final_price = totalprice 
          //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
              $('#product-quantity-select [selected]').val(totalqty);
              $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
              //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
              $('#cal-total-price').text('Rs. ' + final_price);
              $('.purchase-details__buttons > button').removeClass('ctm_disabled');
          }
          }else if($('#cal_form').children('button').hasClass("wallpaper-roll")){
            
            //console.log("wallpaper-roll");
            var inches = $('#cal-metrics').val();
            var length_calculater = $('.calculate_wrapper').find('.cal_length').val();
            var width_calculater = $('.calculate_wrapper').find('.cal_width').val();
            if (length_calculater == '' || width_calculater == '') {
                $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
                $('.purchase-details__buttons > button').addClass('ctm_disabled');
              }else{
                if( inches == "inch"){
                  var inchlength = length_calculater / 12;
                  var inchwidth = width_calculater / 12;	
                  var countqty = inchlength * inchwidth;
                  var rollinch = countqty / 55;
                  var totalqty = Math.ceil(rollinch);
                }else if( inches == "cm"){
                  var cmlength = length_calculater / 30.48;
                  var cmlwidth = width_calculater / 30.48;     
                  var countqty = cmlength * cmlwidth;
                  var rollinch = countqty / 55;
                  var totalqty = Math.ceil(rollinch);
                }else{
                  var rollinch = length_calculater * width_calculater / 55;
                  var totalqty = Math.ceil(rollinch);
                }
                if (callength == "" || callength <= 0  ){
                  var callength = 1;
                }
                if (calwidth == "" || calwidth <= 0  ){
                  var calwidth = 1;
                }    
        
                var price = $('select[name=id]').find('option:selected').data('price');
                var totalprice = price * totalqty / 100;   
                var final_price = totalprice 
             //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
              $('#product-quantity-select [selected]').val(totalqty);
              $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
              //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
              $('#cal-total-price').text('Rs. ' + final_price);
              $('.purchase-details__buttons > button').removeClass('ctm_disabled');
              }
          }else if($('#cal_form').children('button').hasClass("3d-pvc-panel")){
            
            //console.log("3d-pvc-panel");
            var inches = $('#cal-metrics').val();
            var length_calculater = $('.calculate_wrapper').find('.cal_length').val();
            var width_calculater = $('.calculate_wrapper').find('.cal_width').val();
            if (length_calculater == '' || width_calculater == '') {
               $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
               $('.purchase-details__buttons > button').addClass('ctm_disabled');
            }else{
              if( inches == "inch"){
                var inchlength = length_calculater / 12;
                var inchwidth = width_calculater / 12;	
                var countqty = inchlength * inchwidth;
                var rollinch = countqty / 2.6;
                var totalqty = Math.ceil(rollinch);
              }else if( inches == "cm"){
                var cmlength = length_calculater / 30.48;
                var cmlwidth = width_calculater / 30.48;     
                var countqty = cmlength * cmlwidth;
                var rollinch = countqty / 2.6;
                var totalqty = Math.ceil(rollinch);
              }else{
                var rollinch = length_calculater * width_calculater / 2.6;
                var totalqty = Math.ceil(rollinch);
              }
              if (callength == "" || callength <= 0  ){
                var callength = 1;
              }
              if (calwidth == "" || calwidth <= 0  ){
                var calwidth = 1;
              }
              var price = $('select[name=id]').find('option:selected').data('price');
              var totalprice = price * totalqty / 100;   
              var final_price = totalprice 
             //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
              $('#product-quantity-select [selected]').val(totalqty);
              $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
              //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
              $('#cal-total-price').text('Rs. ' + final_price);
              $('.purchase-details__buttons > button').removeClass('ctm_disabled');
            }
          }else if($('#cal_form').children('button').hasClass("foam-panel")){
            
            //console.log("foam-panel");
            var inches = $('#cal-metrics').val();
            var length_calculater = $('.calculate_wrapper').find('.cal_length').val();
            var width_calculater = $('.calculate_wrapper').find('.cal_width').val();
            
            if (length_calculater == '' || width_calculater == '') {
                $("#cal-total-price").html('<span class="error">Please Add Length/Width</span>');
                $('.purchase-details__buttons > button').addClass('ctm_disabled');
              }else{
              if( inches == "inch"){
                var inchlength = length_calculater / 12;
                var inchwidth = width_calculater / 12;	
                var countqty = inchlength * inchwidth;
                var rollinch = countqty / 5;
                var totalqty = Math.ceil(rollinch);
              }else if( inches == "cm"){
                var cmlength = length_calculater / 30.48;
                var cmlwidth = width_calculater / 30.48;     
                var countqty = cmlength * cmlwidth;
                var rollinch = countqty / 5;
                var totalqty = Math.ceil(rollinch);
              }else{
                var rollinch = length_calculater * width_calculater / 5;
                var totalqty = Math.ceil(rollinch);
              }
              if (callength == "" || callength <= 0  ){
                var callength = 1;
              }
              if (calwidth == "" || calwidth <= 0  ){
                var calwidth = 1;
              }
        
              var price = $('select[name=id]').find('option:selected').data('price');
              var totalprice = price * totalqty / 100;   
              var final_price = totalprice 
             //   var final_price = window.Shopify.formatMoney((price * totalqty), $('body').data('money-format'));
              $('#product-quantity-select [selected]').val(totalqty);
              $('#product-quantity-select [selected]').text(totalqty);
            $('[data-quantity-input]').attr('value',totalqty);
              //console.log("callength",callength,"calwidth",calwidth,"price",price,"totalprice",totalprice);
              $('#cal-total-price').text('Rs. ' + final_price);
              $('.purchase-details__buttons > button').removeClass('ctm_disabled');
            }
          }
        
});