$(function(){

    $(".table-box").each(function(){
       
        // 진행사항
        p_apply =  $(".apply", $(this)).length;
        p_tba = $('.tba', $(this)).length;
        p_ing = $('.ing', $(this)).length;
        p_total = p_apply + p_tba + p_ing ;

        //console.log(p_percent_r);
        $num_txt = $(this).closest('.table-box').prev('div.table-title-box').find('p');

        $num_txt.find('.total-txt').html(p_total); // 총페이지 수 (취소 제외)
        $num_txt.find('.tba-txt').html(p_tba); // 완료페이지 수
        $num_txt.find('.apply-txt').html(p_apply);
        
    });

});