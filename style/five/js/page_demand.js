$(function(){

  $('.check').on('change',function(){
    flushRadio();
    console.log($(this));
  })
  function flushRadio(){
    $('.check').each(function(ind,ele){
      $(ele).next('label').css({'backgroundImage':'url(/gxss/style/five/images/demand/empty.png)'});
    });
    $('.check:checked').each(function(ind,ele){
      $(ele).next('label').css({'backgroundImage':'url(/gxss/style/five/images/demand/selected.png)'});
    });
  }


  /* 表单提交 */
  var name,sex,birth,place,lunar,sun,info;

  $('#name').on('focus',function(){
    if($(this).val() == '请输入您的姓名'){
      $(this).val('');
    }
  }).on('blur',function(){
    if($(this).val() == ''){
      $(this).val('请输入您的姓名');
    }
  })

  $('#sub').on('click',function(){

    if($('#name').val() != '' && $('#name').val() != '请输入您的姓名' ){
      name = $('#name').val();
    }else{
      alert('请输入正确的姓名!');
      return;
    }
    
    sex = $('input.sex:checked').val();
    birth = $('#birth').val();
    if($('#global_location .region').css('display') != 'none'){
      if($('#global_location .region').val() != 0){
        place = $('#global_location .region').val();
        console.log('region');
      }else{
        alert('请选择出生地!');
        return;
      }
    }else{
      if($('#global_location .city').val() != 0){
        place = $('#global_location .city').val();
        console.log('city');
      }else{
        alert('请选择出生地!');
        return;
      }
    } 
    /* place = $('#global_location .region option:selected').val() || $('#global_location .city option:selected').val(); */

    
    lunar = $('input.lunar:checked').val();
    sun = $('input.sun:checked').val();


    if(name && sex && birth && place && lunar && sun){
      console.log('name:'+name +', sex:'+sex+', birth:'+birth+', place:'+place+', lunar:'+lunar+', sun:'+sun);
      info={
        name:name,
        sex:sex,
        birth:birth,
        place:place,
        lunar:lunar,
        sun:sun
      }
      console.log(info);







    }else{
      alert('请将信息填写完整!');
      return;
    }
    
    
  })
    

})