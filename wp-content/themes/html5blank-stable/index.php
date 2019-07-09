<?php get_header(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SpeedCreed</title>

    <!-- css -->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link href="<?php echo get_bloginfo('template_directory'); ?>/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo get_bloginfo('template_directory'); ?>/css/nivo-lightbox.css" rel="stylesheet" />
    <link href="<?php echo get_bloginfo('template_directory'); ?>/css/nivo-lightbox-theme/default/default.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo get_bloginfo('template_directory'); ?>/css/animations.css" rel="stylesheet" />
    <link href="<?php echo get_bloginfo('template_directory'); ?>/css/gaya.css" rel="stylesheet">
    <link href="<?php echo get_bloginfo('template_directory'); ?>/css/style.css" rel="stylesheet">
    <link href="<?php echo get_bloginfo('template_directory'); ?>/color/default.css" rel="stylesheet">
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    
    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/plugin/lightslider-master/dist/css/lightslider.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/plugin/lightslider-master/dist/css/lightgallery.min.css">
    
    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>

	
	<section class="hero" id="intro" style="margin-bottom: -50px;">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-right navicon">
              <a id="nav-toggle" class="nav_slide_button" href="#"><span></span></a>
          </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center inner">
           <div class="animatedParent">
              <img src="<?php echo get_bloginfo('template_directory'); ?>/images/logo-sc.png">
          </div>
      </div>
  </div>	
</div>
</section>

<div class="row">
    <div class="col-md-6 col-md-offset-3 text-center">
      <a href="#inspired" class="fa fa-chevron-down" style="font-size: 50px; color: white;"></a>
  </div>
</div>

<!-- start navbar --> 
<header>
 <div id="navbar" class="container-fluid">
    <div class="container nav-fill w-100">
       <nav class="navbar navbar-expand-md navbar-light" role="navigation">
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon" style="background-color: white"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarContent">
             <ul class="navbar-nav nav-fill w-100">
                <li class="nav-item">
                   <a href="<?php echo site_url(); ?>/article" style="text-decoration: none; font-size: 12px; color: white;">ARTICLES</a>
               </li>
               <li class="nav-item">
                   <div class="btn-group">
                     <a href="#" style="text-decoration: none; font-size: 12px; color: white;">COMMUNITY</a>
                 </div>
             </li>
             <li class="nav-item">
               <div class="btn-group">
                 <a href="#" style="text-decoration: none; font-size: 12px; color: white;">WORKSHOP</a>
             </div>
         </li>
         <li class="nav-item">
           <div class="btn-group">
             <a href="<?php echo site_url(); ?>/marketplace2" style="text-decoration: none; font-size: 12px; color: white;">MARKETPLACE</a>
         </div>
     </li>
     <li class="nav-item">
       <div class="btn-group">
         <a href="#" data-toggle="modal" data-target="#myModal" style="text-decoration: none; font-size: 12px; color: white;">REGISTER | LOGIN</a>
     </div>
 </li>
</ul>
</div>
</nav>
</div>
</div>
</header>

<!-- end navbar -->

<!-- start pop up -->

<div class="modal fade" id="myModal" role="dialog" style="margin-top: 100px;">
    <div class="modal-dialog modal-lg">
      <div class="modal-content" style="background-color: #ffffff00">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="container login-container" style="background-image: url(<?php echo get_bloginfo('template_directory'); ?>/images/login.png);">
        <div class="row">
            <div class="col-md-6 login-form-1">
                <h3 id="datalogin">LOG IN</h3>
                <h4 style="color: grey;text-align: center; margin-bottom: 12%;">to your account</h4>
                <div class="form-group">
                    <center><input type="text" id="userpass" class="form-control" placeholder="Username" /></center>
                </div>
                <div class="form-group">
                    <center><input type="text" id="userpass" class="form-control" placeholder="Password" /></center>
                </div>
                <div class="form-group">
                    <center><input type="submit" class="btnSubmit1" value="LOG IN" /></center>
                </div>

                <h4 style="color: #5e5d5d;text-align: center;">Forget Password?</h4>

            </div>
            <div class="col-md-6 login-form-2" style="background-image: url(<?php echo get_bloginfo('template_directory'); ?>/images/register.png);"	>
                <div class="login-logo">
                    <img src="<?php echo get_bloginfo('template_directory'); ?>/images/or.jpg" alt=""/>
                </div>
                <h4 style="color: grey;text-align: center;">Not a member yet?</h4>
                <h3>REGISTER</h3>
                <div class="form-group">
                    <center><input type="text" id="regis" class="form-control" placeholder="Username" /></center>
                </div>
                <div class="form-group">
                    <center><input type="text"  id="regis" class="form-control" placeholder="Email Address" /></center>
                </div>
                <div class="form-group">
                    <center><input type="password"  id="regis" class="form-control" placeholder="Password" /></center>
                </div>
                <div class="form-group">
                    <center><input type="submit" class="btnSubmit" value="LOG IN" style="color: black;" /></center>
                </div>


            </div>
        </div>
    </div>

</div>
</div>
</div>
</div>
<!-- end pop up -->

<body id="page-top" data-spy="scroll" data-target=".navbar-custom">


<!-- Section: about -->
<section id="inspired">

  <div class="hero2">
     <div class="row">
        <h1 class="section-title">INSPIRED BY SPEED, DRIVEN BY PASSION</h1>
        <p class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

</div>
</section>
<!-- /Section: about -->

<!-- start features slider1 -->
<div id="slider-section1" class=" left-control">
    <h1 class="heading-slider">Featured Article</h1>
    <div class="lSSlideOuter  padding-right-slider">
       <div class="lSSlideWrapper usingCss" style="height: 437px; transition-duration: 600ms; transition-timing-function: ease;"><ul class="lightSlider no-margin-slider lSSlide" style="width: 2522.33px; height: 437px; padding-bottom: 0%; transform: translate3d(-720.667px, 0px, 0px);">
        <li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" class="lslide" style="width: 358.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png">
            <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vehicula aliquam</p>
            </div>
        </li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" class="lslide" style="width: 358.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png">
            <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vehicula aliquam</p>
            </div>
        </li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" class="lslide active" style="width: 358.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png">
            <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vehicula aliquam</p>
            </div>
        </li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" class="lslide" style="width: 358.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png">
            <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vehicula aliquam</p>
            </div>
        </li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" class="lslide" style="width: 358.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png">
            <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vehicula aliquam</p>
            </div>
        </li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" class="lslide" style="width: 358.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png">
            <div class="caption">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit vehicula aliquam</p>
            </div>
        </li>                    
        <style class="lslide" style="width: 358.333px; margin-right: 2px;">
        .caption{
            margin-top: -56px; 
            margin-left: 7px;
            color: #fffff;
        }
    </style>
</ul>
<div class="lSAction">
   <a class="lSPrev"><i class="fa fa-chevron-left"></i></a>
   <a class="lSNext"><i class="fa fa-chevron-right"></i></a>
</div></div></div>
<div class="text-right" style="margin:20px auto">
    <a href="#" class="btn btn-black" style="padding: 10px 20px; font-size: 15px;">VIEW MORE</a>
</div>
</div>

<!-- end features slider1-->



<!-- start slogan -->

<div id="section2-parent" class="column is-full">  
    <div id="section2" style="background-image: url('<?php echo get_bloginfo('template_directory'); ?>/images/img-body-section2-bg.png');">
        <div id="mask-opacity2" class="container is-fullhd">
            <h1 style="color: #fff !important; padding-top: 60px; font-size: 50px; text-align: right; margin-right: 100px;">
            ADD A TAGLINE/SLOGAN</h1> 
        </div>
    </div>          
</div>

<!-- end slogan -->

<!-- start content -->

<div id="section2-sub1" class="column is-full">
    <div class="row">
        <div class="col-sm-6">
           <h1 class="section2-title">Lorem Ipsum</h1>
           <br><br>
           <p class="sectionsub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>
       <div class="col-sm-6">
           <p class="sectionsub2-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
       </div>
   </div>
</div>


<!-- end content -->

<!-- start features slider2 -->

<div id="slider-section2">
    <h1 class="heading-slider text-right">Featured Article</h1>
    <div class="lSSlideOuter  padding-right-slider">
       <div class="lSSlideWrapper usingCss" style="height: 492px;">
          <ul class="lightSlider no-margin-slider lSSlide" style="width: 2432px; height: 492px; padding-bottom: 0%; transform: translate3d(0px, 0px, 0px);">
            <li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" class="lslide active" style="width: 403.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png"></li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" class="lslide" style="width: 403.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png"></li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" class="lslide" style="width: 403.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png"></li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png" class="lslide" style="width: 403.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section2.png"></li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png" class="lslide" style="width: 403.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-slider-section1.png"></li><li data-thumb="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" data-src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png" class="lslide" style="width: 403.333px; margin-right: 2px;"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/img-article-body-section3.png"></li>                </ul><div class="lSAction"><a class="lSPrev"><i class="fa fa-chevron-left"></i></a><a class="lSNext"><i class="fa fa-chevron-right"></i></a></div></div></div>
            <div class="text-right" style="margin:20px auto">
                <a href="#" class="btn btn-black" style="padding: 10px 20px; font-size: 15px;">VIEW MORE</a>
            </div>
        </div>

        <!-- end features slider2 -->

        <div id="section3-parent" class="column is-fullhd">
            <div id="section3" class="embed-responsive-item">
                <iframe width="100%" height="600px" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="container" style="margin-top: 100px">
            <div class="row">
             <div class="col-md-4">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-md-4">

                <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <div class="col-md-4">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <div class="container" style="margin-top: 100px">
        <div class="row">
         <div class="col-md-4">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-md-4">

            <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


        <div class="col-md-4">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</div>

<div class="container" style="margin-top: 100px">
    <div class="row">
     <div class="col-md-4">
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="col-md-4">

        <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <div class="col-md-4">
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/qkssJOfwz9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
</div>


<div  id="button-section3" class="btn btn-black">View More</div>

<!-- start footer -->

<div class="row" style=" background-color: #242424">

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

                    <p style="text-align: left; margin-left: 15%;"><a href="#">News</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">Video</a></p>


                </div>
                <!--/.First column-->

                <hr class="clearfix w-100 d-md-none">

                <!--Second column-->
                <div class="col-md-3 mx-auto">
                    <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">COMMUNITY</h5>

                    <p style="text-align: left; margin-left: 15%;"><a href="#">Cars</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">Clubs</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">Members</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">Membership Tiers</a></p>

                </div>
                <!--/.Second column-->

                <hr class="clearfix w-100 d-md-none">

                <!--Third column-->
                <div class="col-md-3 mx-auto">
                    <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">WORKSHOP</h5>

                    <p style="text-align: left; margin-left: 15%;"><a href="#">Map Locator</a></p>


                </div>
                <!--/.Third column-->

                <hr class="clearfix w-100 d-md-none">

                <!--Fourth column-->
                <div class="col-md-3 mx-auto">
                    <h5 class="title mb-4 mt-3 font-bold" style="text-align: left;">MARKETPLACE</h5>

                    <p style="text-align: left; margin-left: 15%;"><a href="#">Cars</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">Parts</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">Others</a></p>
                    <p style="text-align: left; margin-left: 15%;"><a href="#">E- Commerce</a></p>

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


<!-- end footer -->

<!-- Core JavaScript Files -->
<script src="js/jquery.min.js"></script>	 
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="js/jquery.sticky.js"></script>
<script src="js/jquery.easing.min.js"></script>	
<script src="js/jquery.scrollTo.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/stellar.js"></script>
<script src="js/nivo-lightbox.min.js"></script>

<script src="js/custom.js"></script>
<script src="js/css3-animate-it.js"></script>

<script src="plugin/lightslider-master/dist/js/lightslider.js"></script>
<script src="plugin/lightslider-master/dist/js/lightgallery-all.min.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $("#header,#background").width($(window).width());
    $("#header,#background").height($(window).height());

    $("#home-chevron-down").on('click', function(){
        $("html, body").animate({ scrollTop: $("#navbar-home").offset().top });
    })

    $('.lightSlider').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pager:false,
        enableDrag: false,
        slideMargin: 2,
        gallery:true,
        responsive : [
        {
            breakpoint:800,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:-1,
            }
        },
        {
            breakpoint:480,
            settings: {
                item:2,
                slideMove:1
            }
        }
        ],
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.lightSlider .lslide'
            });
            el.addClass('no-margin-slider');
            $(".no-margin-slider").closest(".lSSlideOuter").addClass("padding-right-slider");
            $(el).closest($(".lSSlideWrapper")).height( $(el).closest($(".lightSlider")).height());
        },
        prevHtml: "<i class='fa fa-chevron-left'></i>",
        nextHtml: "<i class='fa fa-chevron-right'></i>",
    });  
});
</script>

</body>

</html>

	

<?php get_sidebar(); ?>

<?php get_footer(); ?>
