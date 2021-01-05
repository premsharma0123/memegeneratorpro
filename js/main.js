
$(document).ready(function(){
   $(".middle_content").click(function(){
    $(".sidenav").css("width","0px");
   });

   $(".main-bar").click(function(){
    $("#mySidenav").css("width","250px");
   });
   $(".closebtn").click(function(){
     $("#mySidenav").css("width","0px");
   });


     // add & Remove class
  $(".li_cmn").click(function () {
    if(!$(this).hasClass('List_active'))
    {    
        $(".li_cmn.List_active").removeClass("List_active");
        $(this).addClass("List_active");        
    }
  });
  
  //---end--here---//
});

    //-------open_list------//

    function openSubList1(ListName) {
      var i;
      var x = document.getElementsByClassName("main-grid");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      document.getElementById(ListName).style.display = "block";  
    }
  
    //----end---here----//


    // -------image---upload-----//
    function upload(){
      //get the input file
      var fileinput = document.getElementById("finput");
      //get the canvas object
      var canvas = document.getElementById("can");
      //create an image from the file
      image0 = new SimpleImage(fileinput);
      // image1 = new SimpleImage(fileinput);
      // image2 = new SimpleImage(fileinput);
      // image3 = new SimpleImage(fileinput);
      //draw the image in the canvas
      image0.drawTo(canvas);
  }

/////-----image---upload-----end---here----//