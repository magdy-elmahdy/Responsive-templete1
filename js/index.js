        //Slide Bar 

        let colorItem = $(".color-item");
        colorItem.eq(0).css("backgroundColor" , "orange");
        colorItem.eq(1).css("backgroundColor" , "teal");
        colorItem.eq(2).css("backgroundColor" , "#09c");
        colorItem.eq(3).css("backgroundColor" , "tometo");
        colorItem.eq(4).css("backgroundColor" , "#333");
        
        colorItem.click( function(){
        
            let myColor = $(this).css("backgroundColor"); //Get the Color i want
            $("h1 , h2, p").css("color",myColor )
        });
        $("#slideBarToggle").click ( function(){
            // $(".coloBox").fadeOut(150)
            let myWidth = $(".coloBox").outerWidth(true);
            if($(".slideBar").css("left") =="50px" ){
                $(".slideBar").animate({left:`-${myWidth}`} , 1000);
            }else{
                $(".slideBar").animate({left:`50px`} , 1000);
            }
        });