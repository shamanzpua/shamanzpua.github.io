/*------------------Цвет меню------------*/

/*
Web цвета можно найти здесь: https://colorscheme.ru/web-safe-colors.html
*/


$(function() {
              //В этот массив добавлять новые цвета(через запятую)

                     //Массив цветов
                       var color_menu = new Array (null,

                        '164,0,0,0.8','0,0,0,0.8','149,9,161,0.8',
                        '13,26,115,0.8','0,51,0,0.8',


                       );

                     //---------------- код----------------------------
                    
                      var ar_elements=new Array('.col_container_bread','.sub','.add','.user','.zoom','.top-10','.test_fon','.test_menu','.empty');
                          var count = 0;
                          var len1 = color_menu.length;                  

                      $('.batt_menu').bind('click', function(){  
                         if($(this).hasClass("forward"))
                         {
                          count++;                        
                          count=count==len1?len1:count;                         

                               $.each(ar_elements, function(index,value) {                         
                               $(value).css({ 'backgroundColor' : 'rgba('+ color_menu[count]+')'}); 
                               });                        
                         }

                        if($(this).hasClass("back"))
                         {
                          count--;   
                          count=count>=0?count:0;                          

                               $.each(ar_elements, function(index,value) {                         
                               $(value).css({ 'backgroundColor' : 'rgba('+ color_menu[count]+')'}); 
                               });                        
                         }

                          $(".bg_file_name").html("<p>"+color_menu[count]+"</p>") ;
                       });
  });             

