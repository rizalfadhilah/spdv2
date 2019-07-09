
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory'); ?>/main.css">
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<style type="text/css">
   @media screen and (min-width: 0px) and (max-width: 720px) {
  #none { display: none; }
  .mobile{ margin-top: 300px }
}
</style>
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
    <section>
        <div id="section1-option" class="container-fluid">
            <div class="row">

                <div id="section1-option1" class="col-md-4 col-lg-4 col-xs-4 col-sm-4">
                    <a href="#">
                        <h4 class="section1-title">CAR &amp; PARTS</h4>
                    </a>

                </div>


                <div id="section1-option2" class="col-md-4 col-lg-4 col-xs-4 col-sm-4">
                    <a href="#">

                        <h4 class="section1-title">OTHERS</h4>
                    </a>

                </div>


                <div id="section1-option3" class="col-md-4 col-lg-4 col-xs-4 col-sm-4">
                    <a href="#">
                        <h4 class="section1-title">SHOP</h4>
                    </a>


                </div>



            </div>
        </div>
    </section>

    <section class="section2" class="mobile">
        <!-- sidebar search -->
        <div id="section2-container" class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5 class="sortby">SORT BY:</h5>
                    <br>
                    <h5 class="sortby">CAR / PARTS</h5>
                    <br>
                    <div class="dropdown">
                        <button id="dropdown-styling" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Click here">
                              Select Categories
                            </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">CAR</a>
                            <a class="dropdown-item" href="#">PART</a>
                        </div>
                    </div>
                    <br>
                    <hr style="border: 1px solid black">
                    <br>
                    <div class="dropdown">
                        <button id="dropdown-styling" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Click here">
                                  CAR MAKE
                                </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">CAR</a>
                            <a class="dropdown-item" href="#">PART</a>
                        </div>
                    </div>
                    <br>
                    <div class="dropdown">
                        <button id="dropdown-styling" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Click here">
                                      MODEL
                                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">CAR</a>
                            <a class="dropdown-item" href="#">PART</a>
                        </div>
                    </div>
                    <br>
                    <div class="dropdown">
                        <button id="dropdown-styling" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Click here">
                                  YEAR
                                </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">CAR</a>
                            <a class="dropdown-item" href="#">PART</a>
                        </div>
                    </div>
                    <br>
                    <hr style="border: 1px solid black">
                    <br>
                    <h5 class="sortby">PRICE RANGE</h5>
                    <br>
                    <div class="dropdown">
                        <button id="dropdown-styling" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Click here">
                              0 &nbsp;&nbsp; IDR
                            </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">1,000,000,000</a>

                        </div>
                        <br>
                        <br>
                        <div class="dropdown">
                            <button id="dropdown-styling" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder="Click here">
                                      70,000,000 &nbsp;&nbsp; IDR
                                    </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">1,000,000,000</a>

                            </div>
                            <br>
                            <br>
                            <a href="#">
                            <button  id="search-btn" class="btn-lg">Search</button>    
                            </a>


                        </div>
                        <!-- sidebar search -->

                        
                    </div>

                </div>
                <div class="col-md-8">
                        <div id="search-result-featured" class="card">
                                <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/kartik-bhattacharjee-257547-unsplash.png" alt="Card image cap">
                                <div class="card-body">
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                        
                        <div class="row">
                            
                                
                                <div  class="col-md-4">
                                        <div  id="search-results" class="card" style="width: 15rem;">
                                            <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/marcus-p-655824-unsplash.png" alt="Card image cap">
                                            <div class="card-body">
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                </div>
                                <div  class="col-md-4">
                                        <div  id="search-results" class="card" style="width: 15rem;">
                                            <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/marcus-p-655824-unsplash.png" alt="Card image cap">
                                            <div class="card-body">
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                </div>
                                <div  class="col-md-4">
                                        <div  id="search-results" class="card" style="width: 15rem;">
                                            <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/marcus-p-655824-unsplash.png" alt="Card image cap">
                                            <div class="card-body">
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                </div>
                                <div  class="col-md-4">
                                        <div  id="search-results" class="card" style="width: 15rem;">
                                            <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/marcus-p-655824-unsplash.png" alt="Card image cap">
                                            <div class="card-body">
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                </div>
                                <div  class="col-md-4">
                                        <div  id="search-results" class="card" style="width: 15rem;">
                                            <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/marcus-p-655824-unsplash.png" alt="Card image cap">
                                            <div class="card-body">
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                </div>
                                <div  class="col-md-4">
                                        <div  id="search-results" class="card" style="width: 15rem;">
                                            <img class="card-img-top" src="<?php echo get_bloginfo('template_directory'); ?>/images/marcus-p-655824-unsplash.png" alt="Card image cap">
                                            <div class="card-body">
                                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                </div>
                                <a href="#">
                                    <button  id="view-all-search-results" class="btn-lg text-center">View More</button>
                                </a>
                        </div>
                        
                </div>
            </div>
    </section>

</body>
 <!--Footer-->
    <footer class="page-footer center-on-small-only stylish-color-dark" style="margin-top: 20px; background-image: url('<?php echo get_bloginfo('template_directory'); ?>/images/footer_bg.png');">
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
</html>