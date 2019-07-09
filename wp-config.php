<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'buddytest' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'og2)/)6m:XR~Ov9Q78.dhkp<H>VYy6^X}VFBt8{05k_~E).|xDG;0hAwe+AdCzWY' );
define( 'SECURE_AUTH_KEY',  '{y5OZp[ZXtQY$U|G)vtc(dnDj+@d;|U`}2KX?|Ft)-F_0utUF/4X($]G+w,G01`1' );
define( 'LOGGED_IN_KEY',    'b@ VyJi6Q@UJ-5;gd*iCG@`PnK1SCF= Ce9vN<>9sEptF@`1.Rtyfd+>uM39_IH-' );
define( 'NONCE_KEY',        ']bGK39qFI7lpJ6.W8A1nH[[zv/;aO.|QHSby{(oH=.Z!4:V&9*.~Z?-@K^WGU$iv' );
define( 'AUTH_SALT',        'ndPq[RA1w=5xTRj_~QVNDnx]TY1r_h%v`&CM~r3GeIl^J:M{0F7+bWx)6a]AJZ=z' );
define( 'SECURE_AUTH_SALT', '!<-8a_SrM^0]E|f8<e[cc~stK$6MaG1_|/_2^a_EC]JbfL1v?K~xloq|M#9%wZln' );
define( 'LOGGED_IN_SALT',   'ZNf7p@ZdEEZC?f5bUu!Q45JMR<n<.D4HpJ! (fP$~-;imOxgyO$sj<Y5d`zs4i4W' );
define( 'NONCE_SALT',       '%#j<`QND&r7)ehK|WfrAv7w4*$X?G2C~|,e*@`1Q*=6&g{ne`L=zfXs[/$Mh3xYE' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
