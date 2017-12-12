$(function(){
  /* radio 选中样式 */
  $('.radio_hide').on('change',function(){
    flushRadio();
  })
  function flushRadio(){
    $('.radio_hide').each(function(ind,ele){
      $(ele).next('.radio_btn').css({'backgroundImage':'url(/gxss/style/five/images/demand/empty.png)'});
    });
    $('.radio_hide:checked').each(function(ind,ele){
      $(ele).next('.radio_btn').css({'backgroundImage':'url(/gxss/style/five/images/demand/selected.png)'});
    });
  }
})  