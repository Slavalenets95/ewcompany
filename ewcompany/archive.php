<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package euromedia-shop
 */

get_header();
?>

	<main id="primary" class="site-main blog-archive">

	<?php
		if( have_rows('constructor', get_queried_object()) ):
        while ( have_rows('constructor', get_queried_object()) ) : the_row();
         	$templateName = get_row_layout();
			
         	get_template_part('templates/' . $templateName . '/' . $templateName);
 
        endwhile;
     endif;
	?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
