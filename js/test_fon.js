 /****************Тест фона***************/
 $(function() {

          var number = 0;

  //В этот массив добавлять картинки фонов(через запятую)

        var pic = new Array (null,'fon48.jpg','fon67.jpg','2.png','fon189.jpg', 
                                'fon23.jpg','fon20.jpg','fon12.jpg','fon29.jpg',
                                'fon19.jpg','fon30.jpg','fon31.jpg','fon34.jpg',
                                'fon35.jpg','fon37.jpg','fon39.jpg','fon40.jpg',
                                '22.jpeg','fon43.jpg','fon44.jpg','fon45.jpg',
                                'fon46.jpg','fon52.jpg','fon53.jpg','fon54.jpg',
                                'fon55.jpg','fon56.jpg','fon57.jpg','fon58.jpg',
                                'fon59.jpg','fon60.jpg','fon61.jpg','fon62.jpg',
                                'fon64.jpg','fon65.jpg','fon66.jpg','fon67.jpg',
                                'fon86.jpg','fon89.jpg','fon72.jpg', '2.png',                               
                                'fon100.jpg','fon101.jpg','fon104.jpg','fon63.jpg',
                                'fon100.jpg','fon111.jpg','fon112.jpg','fon113.jpg',
                                'fon114.jpg','fon115.jpg','fon116.jpg','fon117.jpg',
                                'fon118.jpg','fon119.jpg','fon120.jpg','fon122.jpg',
                                'fon123.jpg','fon124.jpg','fon125.jpg','fon126.jpg',
                                'fon127.jpg','fon128.jpg','fon129.jpg','fon130.jpg',
                                'fon131.jpg','fon132.jpg','fon133.jpg','fon134.jpg',
                                'fon135.jpg','fon136.jpg','fon137.jpg','21.jpeg',
                                'fon140.jpg','fon141.jpg','fon142.jpg','23.png',
                                'fon143.jpg','fon144.jpg','fon145.jpg','fon146.jpg',
                                'fon147.jpg','fon148.jpg','fon149.jpg','fon150.jpg',
                                'fon152.jpg','fon153.jpg','fon158.jpg', 'fon192.jpg',                               
                                'fon159.jpg','fon160.jpg','fon161.jpg','fon162.jpg',
                                'fon163.jpg','fon164.jpg','fon166.jpg','fon170.jpg',                               
                                'fon171.jpg','fon172.jpg','fon174.jpg','fon90.jpg',
                                'fon175.jpg','fon176.jpg','fon177.jpg','fon178.jpg',
                                'fon179.jpg','fon181.jpg','fon182.jpg','fon183.jpg',
                                'fon184.jpg', 

                             ); 

               //---------------- код----------------------------

                  var len = pic.length;
                // console.log(len);    
                  var path='./img/fon/'; 
                   $('.batt_bg').bind('click', function(){  
                         if($(this).hasClass("forward"))
                        {
                          number++;
                         // console.log(number);   
                          number=number==len?len:number; 
                          $("body").css({ 'backgroundImage' : 'url("'+path+pic[number]+'")'});                         
                        }

                        if($(this).hasClass("back"))
                        {
                          number--;   
                          number=number>=0?number:0; 
                          $("body").css({ 'backgroundImage' : 'url("'+path+pic[number]+'")'});                          
                        }

                        $(".bg_file_name").html("<p>"+pic[number]+"</p>") ;
                   });


});