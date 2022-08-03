<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package euromedia-shop
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
	<link rel="apple-touch-icon" sizes="180x180" href="<?= get_template_directory_uri() ?>/assets/imgs/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= get_template_directory_uri() ?>/assets/imgs/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= get_template_directory_uri() ?>/assets/imgs/favicon-16x16.png">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header class="header">
			<div class="header-top">
				<div class="container header-top__container">
					<?php if(get_field('email', 'options')) : 
						$email = get_field('email', 'options');	
					?>
						<a href="mailto:<?= $email ?>" class="header-top__link header-top__mail-link">
							<i class="zmdi zmdi-email"></i>
							<span><?= $email ?></span>
						</a>
					<?php endif; ?>
					<?php 
						$tels = get_field('tels_repeater', 'options');
						if($tels) :
							foreach($tels as $tel) : 
					?>
						<a href="tel:<?= $tel['tel_for_link'] ?>" class="header-top__link">
							<i class="zmdi zmdi-phone-in-talk"></i>
							<span><?= $tel['tel'] ?></span>
						</a>
					<?php	endforeach; 
						endif; 
					?>
				</div>
			</div>
			<div class="header-bottom">
				<div class="container header-bottom__container">
					<a href="<?= get_home_url() ?>" class="header-logo">
					<picture>
					   <!-- <source srcset="<?= get_template_directory_uri() ?>/assets/imgs/logo.webp"  type="image/webp"> -->
					   <source srcset="<?= get_template_directory_uri() ?>/assets/imgs/logo.png" type="image/png">
					   <img class="header-logo__img" src="<?= get_template_directory_uri() ?>/assets/imgs/logo.png" alt="Company Logo" />
					</picture>
					</a>
					<nav class="header-nav">
					<div class="header-nav__mobile-logo">
						<a href="<?= get_home_url() ?>">
							<img src="<?= get_template_directory_uri() ?>/assets/imgs/logo.png" alt="">
						</a>
					</div>
					<button class="header-nav__mobile-back">
						<svg class="header-nav__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6208_724)"><path d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM18.7 9.2L11.4 17.4C11.1 17.7 10.7 17.9 10.3 17.9C9.9 17.9 9.5 17.7 9.2 17.5L5.4 13.7C4.8 13.1 4.8 12.2 5.4 11.6C6 11 6.9 11 7.5 11.5L10.2 14.2L16.5 7.1C17 6.6 17.9 6.5 18.6 7C19.2 7.6 19.2 8.5 18.7 9.2Z" fill="black"></path><ellipse cx="12" cy="12" rx="12" ry="12" fill="#45B2EA"></ellipse><path d="M11.2071 6.79289C10.8166 6.40237 10.1834 6.40237 9.79289 6.79289C9.40237 7.18342 9.40237 7.81658 9.79289 8.20711L11.2071 6.79289ZM15 12L15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929L15 12ZM9.79289 15.7929C9.40237 16.1834 9.40237 16.8166 9.79289 17.2071C10.1834 17.5976 10.8166 17.5976 11.2071 17.2071L9.79289 15.7929ZM9.79289 8.20711L14.2929 12.7071L15.7071 11.2929L11.2071 6.79289L9.79289 8.20711ZM14.2929 11.2929L9.79289 15.7929L11.2071 17.2071L15.7071 12.7071L14.2929 11.2929Z" fill="white"></path></g><defs><clipPath id="clip0_6208_724"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
					</button>
					<?php
						wp_nav_menu( [
							'theme_location'  => 'header-menu',
							'menu'            => '',
							'container'       => '',
							'container_class' => '',
							'container_id'    => '',
							'menu_class'      => 'menu',
							'menu_id'         => '',
							'echo'            => true,
							'fallback_cb'     => 'wp_page_menu',
							'before'          => '',
							'after'           => '',
							'link_before'     => '',
							'link_after'      => '',
							'items_wrap'      => '<ul>%3$s</ul>',
							'depth'           => 0,
							'walker'          => new HeaderWalker(),
						] );
					?>
					<button class="header-nav__close-btn close-els" aria-label="Close menu">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8282 15.9999L27.414 7.41398C28.196 6.63198 28.196 5.368 27.414 4.58601C26.632 3.80401 25.3681 3.80401 24.5861 4.58601L16.0002 13.1719L7.41443 4.58601C6.63245 3.80401 5.36847 3.80401 4.58649 4.58601C3.8045 5.368 3.8045 6.63198 4.58649 7.41398L13.1723 15.9999L4.58649 24.5858C3.8045 25.3678 3.8045 26.6318 4.58649 27.4138C4.97648 27.8038 5.48847 27.9998 6.00046 27.9998C6.51245 27.9998 7.02444 27.8038 7.41443 27.4138L16.0002 18.8279L24.5861 27.4138C24.9761 27.8038 25.4881 27.9998 26 27.9998C26.512 27.9998 27.024 27.8038 27.414 27.4138C28.196 26.6318 28.196 25.3678 27.414 24.5858L18.8282 15.9999Z" fill="white"/>
					</svg>
					</button>
					</nav>
					<button class="header-bottom__menu-btn">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17 14C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H3C2.44772 16 2 15.5523 2 15C2 14.4477 2.44772 14 3 14H17ZM17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H17ZM17 4C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H3C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H17Z" fill="white"/>
						</svg>
					</button>
				</div>
			</div>
			<div class="mobile-menu">
            	<button class="mobile-menu__back-btn"> <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 500 511.61"><path fill-rule="nonzero" d="m218.54 261.95 15.5 101.27c.56 3.8-.47 7.81-3.19 10.93-4.92 5.64-13.5 6.24-19.14 1.32L4.64 195.09l-1.53-1.59c-4.77-5.76-3.96-14.32 1.8-19.08L211.98 3.08c2.99-2.41 6.96-3.59 11.03-2.87 7.34 1.31 12.22 8.35 10.91 15.69l-15.44 85.83c17.97 2.09 37.59 6.57 57.77 13.36 52.66 17.69 109.96 51.41 153.32 100.33 43.79 49.39 73.45 114.21 70.18 193.61-1.17 28.92-6.76 59.73-17.63 92.34-1.34 5.29-5.82 9.46-11.55 10.14-7.44.88-14.19-4.44-15.06-11.87-11.94-100.09-50.53-158.11-98.25-191.8-42.66-30.12-93.19-41.36-138.72-45.89z"></path></svg> </button>
            	<button class="mobile-menu__close-svg"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="121.31px" height="122.876px" viewBox="0 0 121.31 122.876" enable-background="new 0 0 121.31 122.876" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"></path></g></svg> </button>
            	<div class="mobile-menu__header">
            	    <span>Меню</span>
            	</div>
            	<div class="mobile-menu__item">
            	    <?php
				    	wp_nav_menu( [
							'theme_location'  => 'header-menu',
							'menu'            => 'header-menu',
							'container'       => 'nav',
							'container_class' => 'mobile-nav',
							'container_id'    => '',
							'menu_class'      => 'menu',
							'menu_id'         => '',
							'echo'            => true,
							'fallback_cb'     => 'wp_page_menu',
							'before'          => '',
							'after'           => '',
							'link_before'     => '',
							'link_after'      => '',
							'items_wrap'      => '<ul>%3$s</ul>',
							'depth'           => 0,
							'walker'          => '',
						] );
				    ?>
            	</div>
			</div>
        </div>
	</header>
	

	
