<?php get_header() ?>

<?php
     if( have_rows('constructor') ):
        while ( have_rows('constructor') ) : the_row();
         $templateName = get_row_layout();
         
         get_template_part('templates/' . $templateName . '/' . $templateName);
 
        endwhile;
     endif;
?>

<?php get_footer() ?>