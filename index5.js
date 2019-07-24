$(document).ready(function(){ 
       $('.col_container_adv' ).overlayScrollbars ({});	

        $(".col_bread_ar_2").hide();//скрыть стрелку ar_2
         $(".col_bread_level_2").hide();//скрыть картинку level_2(breadcrumbs)
        $(".col_region").hide();//скрыть место для региона
      $(".col_container_map").hide();//скрыть большую карту
       $(".col_page_adv").hide();//скрыть большую карту
      $("#deti").hide();//скрытый заголовок Детский мир
$(function() {
        
         $(".col_container_sub_menu").hide(); //скрыть подменю 

          //нажали на пункт меню
          $('.item_lev2').click(function(){
		         	$(".col_container_menu").fadeOut(1500); //скрыть все меню
		          $(".col_container_sub_menu").fadeIn(1500); //показать подменю 

		           $(".col_bread_ar_2").fadeIn(1500);//показать стрелку ar_2
                $(".col_bread_level_2").fadeIn(1500);//показать артинку level_2(breadcrumbs)
                $("#sale").fadeOut(1500); //скрыть заголовок Продам
                $("#deti").fadeIn(1500);//показать заголовок Детский мир
          });

            //нажали на иконку карты
           $('.map_icon').click(function(){		        
		         	$(".col_container_adv").fadeOut(1500); //скрыть объявления
		         	 $(".col_container_map").fadeIn(2500);//показать большую карту
          });

           //нажали на большую карту
          $( '.img_big_map').click(function(){
             $(".col_empty").fadeOut(1500); //скрыть пустую колонку
              $(".col_region").fadeIn(1500); //показать место для региона
              $(".col_container_map").fadeOut(1500); //скрыть большую карту
               $(".col_container_adv").fadeIn(2500);//показать объявления
          });


           //нажали на большую карту
          $( '.adv_link_title').click(function(){
            $(".col_container_adv").fadeOut(1500);//скрыть все объявления
            //  $(".col_container_map").fadeOut(1500); //скрыть большую карту
               $(".col_page_adv").fadeIn(2500);//показать страницу объявления
          });

             //нажали на большую карту
          $( '.img_close').click(function(){
            $(".col_page_adv").fadeOut(1500);//скрыть страницу объявления
            //  $(".col_container_map").fadeOut(1500); //скрыть большую карту
               $(".col_container_adv").fadeIn(1500);//показать все объявления
          });

});
});