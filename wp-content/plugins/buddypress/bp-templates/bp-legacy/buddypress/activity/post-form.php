<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<?php
/**
 * BuddyPress - Activity Post Form
 *
 * @package BuddyPress
 * @subpackage bp-legacy
 * @version 3.0.0
 */

?>

<form action="<?php bp_activity_post_form_action(); ?>" method="post" id="whats-new-form" name="whats-new-form">

	<?php

	/**
	 * Fires before the activity post form.
	 *
	 * @since 1.2.0
	 */
	do_action( 'bp_before_activity_post_form' ); ?>


    <div class="row" style="margin-left: 20px; margin-right: 20px">
   <div class="col-md-8" >

    <div class="comments" style="background-color: white;
    border: 1px solid #ddd;">
    <div class="comment-wrap" >
      <a href="<?php echo bp_loggedin_user_domain(); ?>">
      
      <?php bp_loggedin_user_avatar( 'width=' . bp_core_avatar_thumb_width() . '&height=' . bp_core_avatar_thumb_height() ); ?>
    </a>
      <div class="comment-block">
        <p class="activity-greeting" style="font-size: 20px">
      <img style="border-radius: 40px; margin-left: -75px" src="https://pngimage.net/wp-content/uploads/2018/05/carr%C3%A9-noir-png-5.png" width="20" height="20">
    <?php if ( bp_is_group() )
    printf( __( "What's new in %s, %s?", 'buddypress' ), bp_get_group_name(), bp_get_user_firstname( bp_get_loggedin_user_fullname() ) );
  else
    printf( __( "Jhon <b>%s</b>", 'buddypress' ), bp_get_user_firstname( bp_get_loggedin_user_fullname() ) );
  ?><img style="border-radius: 40px; margin-left: 5px; margin-right: 1px" src="https://pngimage.net/wp-content/uploads/2018/05/carr%C3%A9-noir-png-5.png" width="20" height="20">
  <img style="border-radius: 40px" src="https://pngimage.net/wp-content/uploads/2018/05/carr%C3%A9-noir-png-5.png" width="20" height="20"></p>

      <textarea style="height: 50px; width: 100%;" placeholder="Write your thoughts...." class="bp-suggestions" name="whats-new" id="whats-new" cols="50" rows="10"
        <?php if ( bp_is_group() ) : ?>data-suggestions-group-id="<?php echo esc_attr( (int) bp_get_current_group_id() ); ?>" <?php endif; ?>
      ><?php if ( isset( $_GET['r'] ) ) : ?>@<?php echo esc_textarea( $_GET['r'] ); ?> <?php endif; ?></textarea>
      </div>

    </div>
    
  </div>


<div id="whats-new-content">  
    <div id="whats-new-options">
      <div id="whats-new-submit">
        <input type="submit" name="aw-whats-new-submit" style="background-color: black; color: white; font-weight: 400; height: 40px" id="aw-whats-new-submit" value="<?php esc_attr_e( 'Submit Status', 'buddypress' ); ?>" />
      </div>

      <?php if ( bp_is_active( 'groups' ) && !bp_is_my_profile() && !bp_is_group() ) : ?>

        <div id="whats-new-post-in-box">

          <?php _e( 'Post in', 'buddypress' ); ?>:

          <label for="whats-new-post-in" class="bp-screen-reader-text"><?php
            /* translators: accessibility text */
            _e( 'Post in', 'buddypress' );
          ?></label>
          <select id="whats-new-post-in" name="whats-new-post-in">
            <option selected="selected" value="0"><?php _e( 'My Profile', 'buddypress' ); ?></option>

            <?php if ( bp_has_groups( 'user_id=' . bp_loggedin_user_id() . '&type=alphabetical&max=100&per_page=100&populate_extras=0&update_meta_cache=0' ) ) :
              while ( bp_groups() ) : bp_the_group(); ?>

                <option value="<?php bp_group_id(); ?>"><?php bp_group_name(); ?></option>

              <?php endwhile;
            endif; ?>

          </select>
        </div>
  </div>
  </div>

<input type="hidden" id="whats-new-post-object" name="whats-new-post-object" value="groups" />

      <?php elseif ( bp_is_group_activity() ) : ?>

        <input type="hidden" id="whats-new-post-object" name="whats-new-post-object" value="groups" />
        <input type="hidden" id="whats-new-post-in" name="whats-new-post-in" value="<?php bp_group_id(); ?>" />

      <?php endif; ?>

      <?php

      /**
       * Fires at the end of the activity post form markup.
       *
       * @since 1.2.0
       */
      do_action( 'bp_activity_post_form_options' ); ?>



    </div><!-- #whats-new-options -->
  </div><!-- #whats-new-content -->


  <?php wp_nonce_field( 'post_update', '_wpnonce_post_update' ); ?>
  <?php

  /**
   * Fires after the activity post form.
   *
   * @since 1.2.0
   */
  do_action( 'bp_after_activity_post_form' ); ?>

</form><!-- #whats-new-form -->  

<!-- data dari activity loop -->
 <div class="comments" style="background-color: white;
    border: 1px solid #ddd;">

<?php if ( bp_has_activities( bp_ajax_querystring( 'activity' ) ) ) : ?>

  <?php if ( empty( $_POST['page'] ) ) : ?>

    <ul style="margin-left: 10px" id="activity-stream" class="activity-list item-list">
     
  <?php endif; ?>

  <?php while ( bp_activities() ) : bp_the_activity(); ?>

    <?php bp_get_template_part( 'activity/entry' ); ?>

  <?php endwhile; ?>

  <?php if ( bp_activity_has_more_items() ) : ?>

    <li class="load-more">
      <a href="<?php bp_activity_load_more_link() ?>"><?php _e( 'Load More', 'buddypress' ); ?></a>
    </li>

  <?php endif; ?>

  <?php if ( empty( $_POST['page'] ) ) : ?>

    </ul>

  <?php endif; ?>

<?php else : ?>
  <h1>anjing4</h1>
  <div id="message" class="info">
    <p><?php _e( 'Sorry, there was no activity found. Please try a different filter.', 'buddypress' ); ?></p>
  </div>

<?php endif; ?>

</div>

</div>



<div class="col-md-4">

  <div id="custom-search-input" style="background-color: white ">
    <div class="input-group col-md-12">
      <input type="text" class="form-control input-lg" placeholder="Search" />
      <span class="input-group-btn">
        <button class="btn btn-info btn-lg" type="button">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </div>
  </div>

  <div id="custom-search-input" style="background-color: white; padding: 15px; margin-top: 20px ">
    <h5><b>TRENDING TOPIC</b></h5>
    
    <div class="row" style="margin-top: 10px">
      <div class="col-md-6">
        <img style="max-width: 100%" src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg">
      </div>
      <div class="col-md-6">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-md-6">
        <img style="max-width: 100%" src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg">
      </div>
      <div class="col-md-6">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-md-6">
        <img style="max-width: 100%" src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg">
      </div>
      <div class="col-md-6">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-md-6">
        <img style="max-width: 100%" src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg">
      </div>
      <div class="col-md-6">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

  </div>

  <div id="custom-search-input" style="background-color: white; padding: 15px; margin-top: 20px ">
    <h5><b>TOP MEMBERS OF THE WEEK</b></h5>
    
    <div class="row" style="margin-top: 10px">
      <div class="col-md-4">
        <img style="max-width: 100%; border-radius: 60px" src="https://www.aceshowbiz.com/images/photo/the_rock.jpg">
      </div>
      <div class="col-md-8">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-md-4">
        <img style="max-width: 100%; border-radius: 60px" src="https://www.aceshowbiz.com/images/photo/the_rock.jpg">
      </div>
      <div class="col-md-8">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-md-4">
        <img style="max-width: 100%; border-radius: 60px" src="https://www.aceshowbiz.com/images/photo/the_rock.jpg">
      </div>
      <div class="col-md-8">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

    <div class="row" style="margin-top: 10px">
      <div class="col-md-4">
        <img style="max-width: 100%; border-radius: 60px" src="https://www.aceshowbiz.com/images/photo/the_rock.jpg">
      </div>
      <div class="col-md-8">
        <b>LOREM IPSUM</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      </div>
    </div>

  </div>


</div>



</div>
	

        
				
<style type="text/css">
	body{
		background-color: #f5f6f6;
	}
	img.avatar {
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
-ms-border-radius: 50%;
-o-border-radius: 50%;
border-radius: 50%;
-webkit-box-shadow: 0 1px 0 #fff;
-moz-box-shadow: 0 1px 0 #fff;
box-shadow: 0 1px 0 #fff;
}
input[type=submit] {
    margin-bottom: 30px;
    margin-left: 95px;
    width: 300px;
    border-radius: 0;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
    #custom-search-input{
      padding: 3px;
      border: solid 1px #E4E4E4;
      border-radius: 0px;
      background-color: #fff;
    }

    #custom-search-input input{
      border: 0;
      box-shadow: none;
    }

    #custom-search-input button{
      margin: 2px 0 0 0;
      background: none;
      box-shadow: none;
      border: 0;
      color: #666666;
      padding: 0 8px 0 10px;

    }

    #custom-search-input button:hover{
      border: 0;
      box-shadow: none;
      border-left: solid 1px #ccc;
    }

    #custom-search-input .glyphicon-search{
      font-size: 23px;
    }

.comment-wrap {
  margin-bottom: 1.25rem;
  display: table;
  width: 100%;
}



.comment-block {
  padding: 1rem;
  background-color: #fff;
  display: table-cell;
  width: 670px;
  vertical-align: top;
  border-radius: 0.1875rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}

</style>