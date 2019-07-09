
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Marketplace</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/main.css">
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    

</head>


<nav class="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
   <img class="navbar-brand" src="<?php echo get_bloginfo('template_directory'); ?>/images/logo-sc.png" id="logo_custom" width="15%"  alt="logo">
   <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon "></span>
</button>
<div class="collapse navbar-collapse " id="collapsibleNavbar">
  <ul class="navbar-nav ml-auto ">
    <li class="nav-item">
      <a class="nav-link" href="#">ARTICLES</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">COMMUNITY</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">WORKSHOPS</a>
  </li> 
  <li class="nav-item">
      <a class="nav-link" href="#">MARKETPLACE</a>
  </li>
  <li class="nav-item">
      <i class="fa fa-user-o" style="color: white; margin-top:8px; margin-right: 10px; font-size: 20px;"></i>
      <i class="fa fa-bell-o" style="color: white; margin-top:8px; margin-right: 10px; font-size: 20px;"></i>
      <i class="fa fa-gear" style="color: white; margin-top:8px; margin-right: 10px; font-size: 20px;"></i>

  </li>


</ul>
</div>  
</nav>


<body>

  <section class="section1" style="margin-top: 100px">
    <div class="container-fluid">
      <div class="row">
        
        <div class="col-md-2">
             <a id="back-button-circle" href="#">
                  <img style="margin-left: 100px; margin-bottom: 10px" src="<?php echo get_bloginfo('template_directory'); ?>/images/back-button-circle.svg" width="40" height="40">
              </a>
        </div>
        <div class="col-md-4">
          <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
            <!-- Wrapper for carousel items -->
            <div class="carousel-inner">
              <div class="item carousel-item">
                <img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" alt="">

              </div>  
              <div class="item carousel-item active">
                <img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" alt="">

              </div>
              <div class="item carousel-item">
                <img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" alt="">

              </div>
              <div class="item carousel-item">
                <img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" alt="">

              </div>
            </div>
            <!-- End Carousel Inner -->
            <ul class="nav nav-pills">
              <li data-target="#myCarousel" data-slide-to="0" class="nav-item">
                <a href="#" class="nav-link"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" style="width: 50px; height: 50px; "></a>
              </li>
              <li data-target="#myCarousel" data-slide-to="1" class="nav-item active">
                <a href="#" class="nav-link"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" style="width: 50px; height: 50px; "></a>
              </li>
              <li data-target="#myCarousel" data-slide-to="2" class="nav-item">
                <a href="#" class="nav-link"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" style="width: 50px; height: 50px; "></a>
              </li>
              <li data-target="#myCarousel" data-slide-to="3" class="nav-item">
                <a href="#" class="nav-link"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/robin-vet-219446-unsplash.png" style="width: 50px; height: 50px; "></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4">
             <h1>Lorem Ipsum</h1>
             <h1>(IDR 750.000)</h1>

             <hr style="border: 1px solid black; width: 70%">

             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

             <div>
                <button class="btn btn-primary" style="background-color: black; \"><a href="#" style="padding: 10px 20px; font-size: 15px; color: white;">Add to Cart</a></button> 
             </div>
        </div>

        <div class="col-md-2">
             <a id="back-button-circle" href="#">
                 <span class="fa fa-shopping-cart" style="color: black; font-size: 40px"></span>
              </a>
        </div>


      </div>
    </div>

  </section>



  <section class="section4" style="background-color:black;">
    <style type="text/css" id="slider-css"></style>

    <div class="spe-cor">
      <div class="container">

        <div class="row">
          <div class="col-2">
            <a id="custom-slider1" class="carousel-control-prev" href="#slider-2" role="button" data-slide="prev">
              <img src="<?php echo get_bloginfo('template_directory'); ?>/images/Group 4.png">
            </a>
            <a id="custom-slider2" class="carousel-control-next" href="#slider-2" role="button" data-slide="next">
              <img src="<?php echo get_bloginfo('template_directory'); ?>/images/Group 4-1.png">
            </a>
          </div>
          <div class="col-11">
            <div id="slider-2" class="carousel carousel-by-item slide" data-ride="carousel">
              <div  class="carousel-inner" role="listbox">


                <div class="carousel-item active">
                  <div class="col-md-4 col-sm-4 col-4" style="margin: 0px; padding: 0px;">
                    <img class="d-block img-fluid" style="width: 100%; height: auto; margin: 0px;  " src="<?php echo get_bloginfo('template_directory'); ?>/images/jonathan-gallegos-725084-unsplash.png" alt="First slide">
                  </div>
                </div>

                <div id="padding-between-content1" class="carousel-item">
                  <div class="col-md-4 col-sm-4 col-4" style="margin: 0px; padding: 0px;">
                    <img class="d-block img-fluid" style="width: 100%; height: auto;" src="<?php echo get_bloginfo('template_directory'); ?>/images/severin-d-370303-unsplash.png" alt="First slide">
                  </div>
                </div>


                <div id="padding-between-content2" class="carousel-item">
                  <div class="col-md-4 col-sm-4 col-4" style="margin: 0px; padding: 0px;">
                    <img class="d-block img-fluid" style="width: 100%; height: auto;" src="<?php echo get_bloginfo('template_directory'); ?>/images/serge-kutuzov-223327-unsplash.png" alt="First slide">
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-2">

          </div>

        </div>

      </div>
    </div>

  </section>



  
</body>

<div class="row" style="margin-top: 300px; background-color: #242424" >

  <!-- Grid column -->
  <div class="col-md-12 mb-4">

    <!--Footer-->
    <footer class="page-footer center-on-small-only stylish-color-dark" style="background-image: url('<?php echo get_bloginfo('template_directory'); ?>/images/footer_bg.png');">
      <img class="logo-footer-sc" src="<?php echo get_bloginfo('template_directory'); ?>/images/logo-sc.png">  
      <!--Footer Links-->
      <div class="container">
        <div class="row">

          <!--First column-->
          <div class="col-md-3">
            <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">Articles</h5>

            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">News</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Video</a></p>


          </div>
          <!--/.First column-->

          <hr class="clearfix w-100 d-md-none">

          <!--Second column-->
          <div class="col-md-3 mx-auto">
            <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">COMMUNITY</h5>

            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Cars</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Clubs</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Members</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Membership Tiers</a></p>

          </div>
          <!--/.Second column-->

          <hr class="clearfix w-100 d-md-none">

          <!--Third column-->
          <div class="col-md-3 mx-auto">
            <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">WORKSHOP</h5>

            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Map Locator</a></p>


          </div>
          <!--/.Third column-->

          <hr class="clearfix w-100 d-md-none">

          <!--Fourth column-->
          <div class="col-md-3 mx-auto">
            <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">MARKETPLACE</h5>

            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Cars</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Parts</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">Others</a></p>
            <p style="text-align: left; margin-left: 15%;"><a style="color: white" href="#">E- Commerce</a></p>

          </div>
          <!--/.Fourth column-->
        </div>
      </div>
      <!--/.Footer Links-->

      <hr>

      <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-2">
          <p style="font-size: 20px; color: white;">SUBSCRIBE</p>
        </div>
        <div class="col-md-3">
          <input type="text" style="width: 80%; height: 30px">
        </div>
        <div class="col-md-3">

        </div>
      </div>

      <div class="row">
        <div class="col-md-6">

        </div>
        <div class="col-md-2">
          <i style="color: white; font-size: 20px" class="fa fa-facebook"></i> &nbsp;&nbsp;&nbsp;&nbsp;
          <i style="color: white; font-size: 20px" class="fa fa-instagram"></i> &nbsp;&nbsp;&nbsp;&nbsp;
          <i style="color: white; font-size: 20px" class="fa fa-google-plus"></i>
        </div>
        <div class="col-md-4">

        </div>

      </div>



    </footer>
    <!--/.Footer-->

  </div>
  <!-- Grid column -->

</div>


</html>
<script>
    function GetUnique(e){var l=[],s=temp_c=[],t=["col-md-1","col-md-2","col-md-3","col-md-4","col-md-6","col-md-12","col-sm-1","col-sm-2","col-sm-3","col-sm-4","col-sm-6","col-sm-12","col-lg-1","col-lg-2","col-lg-3","col-lg-4","col-lg-6","col-lg-12","col-xs-1","col-xs-2","col-xs-3","col-xs-4","col-xs-6","col-xs-12","col-xl-1","col-xl-2","col-xl-3","col-xl-4","col-xl-6","col-xl-12"];$(e).each(function(){for(var l=$(e+" > div").attr("class").split(/\s+/),t=0;t<l.length;t++)s.push(l[t])});for(var c=0;c<s.length;c++)temp_c=s[c].split("-"),2==temp_c.length&&(temp_c.push(""),temp_c[2]=temp_c[1],temp_c[1]="xs",s[c]=temp_c.join("-")),-1==$.inArray(s[c],l)&&$.inArray(s[c],t)&&l.push(s[c]);return l}function setcss(e,l,s){for(var t=["","","","","",""],c=d=f=g=0,r=[1200,992,768,567,0],a="",o=[],a=0;a<e.length;a++){var i=e[a].split("-");if(3==i.length){switch(i[1]){case"xl":d=0;break;case"lg":d=1;break;case"md":d=2;break;case"sm":d=3;break;case"xs":d=4}t[d]=i[2]}}for(var n=0;n<t.length;n++)if(""!=t[n]){if(0==c&&(c=12/t[n]),f=12/t[n],g=100/f,a=s+" > .carousel-item.active.carousel-item-right,"+s+" > .carousel-item.carousel-item-next {-webkit-transform: translate3d("+g+"%, 0, 0);transform: translate3d("+g+", 0, 0);left: 0;}"+s+" > .carousel-item.active.carousel-item-left,"+s+" > .carousel-item.carousel-item-prev {-webkit-transform: translate3d(-"+g+"%, 0, 0);transform: translate3d(-"+g+"%, 0, 0);left: 0;}"+s+" > .carousel-item.carousel-item-left, "+s+" > .carousel-item.carousel-item-prev.carousel-item-right, "+s+" > .carousel-item.active {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);left: 0;}",f>1){for(k=0;k<f-1;k++)o.push(l+" .cloneditem-"+k);o.length&&(a=a+o.join(",")+"{display: block;}"),o=[]}0!=r[n]&&(a="@media all and (min-width: "+r[n]+"px) and (transform-3d), all and (min-width:"+r[n]+"px) and (-webkit-transform-3d) {"+a+"}"),$("#slider-css").prepend(a)}$(l).each(function(){for(var e=$(this),l=0;l<c-1;l++)(e=e.next()).length||(e=$(this).siblings(":first")),e.children(":first-child").clone().addClass("cloneditem-"+l).appendTo($(this))})}

//Use Different Slider IDs for multiple slider
$(document).ready(function() {
  var item = '#slider-1 .carousel-item';
  var item_inner = "#slider-1 .carousel-inner";
  classes = GetUnique(item);
  setcss(classes, item, item_inner);


  var item_1 = '#slider-2 .carousel-item';
  var item_inner_1 = "#slider-2 .carousel-inner";
  classes = GetUnique(item_1);
  setcss(classes, item_1, item_inner_1);
});
</script>
</body>

</html>