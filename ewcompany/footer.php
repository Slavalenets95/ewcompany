<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package euromedia-shop
 */

?>
<footer class="footer">
    <div class="container footer__container">
        <div class="footer-item">
            <?php
				wp_nav_menu( [
					'theme_location'  => 'footer-menu-first',
					'menu'            => '',
					'container'       => 'nav',
					'container_class' => 'footer-nav',
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
        <div class="footer-item">
            <?php
				wp_nav_menu( [
					'theme_location'  => 'footer-menu-second',
					'menu'            => '',
					'container'       => 'nav',
					'container_class' => 'footer-nav',
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
        <div class="footer-item">
            <ul class="footer-item__list">
                <li class="footer-item__list-item">
                    <i class="zmdi zmdi-pin"></i>
                    <span>Canada, Ontario, Oakville</span>
                </li>
                <li class="footer-item__list-item">
                    <a href="mailto:info@ewcompany.net">
                        <i class="zmdi zmdi-email"></i>
                        <span>info@ewcompany.net</span>
                    </a>
                </li>
                <li class="footer-item__list-item">
                    <a href="tel:+19055104241">
                        <i class="zmdi zmdi-phone-in-talk"></i>
                        <span>+1 (905) 510 - 42 - 41 </span>
                    </a>
                </li>
            </ul>
            <!-- <ul class="social-list">
                <li class="social-list__item">
                    <a href=""><i class="zmdi zmdi-instagram"></i></a>
                </li>
                <li class="social-list__item">
                    <a href=""><i class="zmdi zmdi-facebook"></i></i></a>
                </li>
                <li class="social-list__item">
                    <a href=""><i class="zmdi zmdi-youtube"></i></a>
                </li>
            </ul> -->
        </div>
    </div>
    <div class="container footer-bottom__container">
        
    </div>
    <div class="overlay"></div>
    <div class="popup">
		<?php if(pll_current_language() == 'en') {
			echo do_shortcode( '[contact-form-7 id="917" title="Всплывающая форма(EN)"]' );
		} else {
			echo do_shortcode( '[contact-form-7 id="907" title="Всплывающая форма"]' );
		}
    	?>
    </div>
    <button class="tel-btn">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 578.106 578.106" style="enable-background:new 0 0 578.106 578.106;" xml:space="preserve">
        <g>
        	<g>
        		<path style="fill:#010002;" d="M577.83,456.128c1.225,9.385-1.635,17.545-8.568,24.48l-81.396,80.781
        			c-3.672,4.08-8.465,7.551-14.381,10.404c-5.916,2.857-11.729,4.693-17.439,5.508c-0.408,0-1.635,0.105-3.676,0.309
        			c-2.037,0.203-4.689,0.307-7.953,0.307c-7.754,0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584
        			c-25.096-10.404-53.553-26.012-85.376-46.818c-31.823-20.805-65.688-49.367-101.592-85.68
        			c-28.56-28.152-52.224-55.08-70.992-80.783c-18.768-25.705-33.864-49.471-45.288-71.299
        			c-11.425-21.828-19.993-41.616-25.705-59.364S4.59,177.362,2.55,164.51s-2.856-22.95-2.448-30.294
        			c0.408-7.344,0.612-11.424,0.612-12.24c0.816-5.712,2.652-11.526,5.508-17.442s6.324-10.71,10.404-14.382L98.022,8.756
        			c5.712-5.712,12.24-8.568,19.584-8.568c5.304,0,9.996,1.53,14.076,4.59s7.548,6.834,10.404,11.322l65.484,124.236
        			c3.672,6.528,4.692,13.668,3.06,21.42c-1.632,7.752-5.1,14.28-10.404,19.584l-29.988,29.988c-0.816,0.816-1.53,2.142-2.142,3.978
        			s-0.918,3.366-0.918,4.59c1.632,8.568,5.304,18.36,11.016,29.376c4.896,9.792,12.444,21.726,22.644,35.802
        			s24.684,30.293,43.452,48.653c18.36,18.77,34.68,33.354,48.96,43.76c14.277,10.4,26.215,18.053,35.803,22.949
        			c9.588,4.896,16.932,7.854,22.031,8.871l7.648,1.531c0.816,0,2.145-0.307,3.979-0.918c1.836-0.613,3.162-1.326,3.979-2.143
        			l34.883-35.496c7.348-6.527,15.912-9.791,25.705-9.791c6.938,0,12.443,1.223,16.523,3.672h0.611l118.115,69.768
        			C571.098,441.238,576.197,447.968,577.83,456.128z"/>
        	</g>
        </g>
        </svg>
    </button>
</footer>

<!--INTERACTIVE ELS -->

<div class="dark-bg"></div>
	
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
