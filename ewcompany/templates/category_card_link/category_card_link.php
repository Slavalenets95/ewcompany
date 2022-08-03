<?php
    $headerContent = get_sub_field('header-content');
    $categories = get_sub_field('categories_repeater');
?>
<div class="category-cards">
    <div class="container">
        <?php if($headerContent) : ?>
        <div class="category-cards__header">
            <?= $headerContent ?>
        </div>
        <?php endif; ?>
        <div class="category-cards__wrapper">
            <?php foreach($categories as $category) : 
                        $categoryTerm = $category[array_key_first($category)];
                        $thumbnail_id = get_woocommerce_term_meta( $categoryTerm->term_id, 'thumbnail_id', true );
                        $image = wp_get_attachment_url( $thumbnail_id );
                        $categoryLink = get_category_link($categoryTerm);
            ?>
                <a class="category-card" href="<?= $categoryLink ?>">
                    <div class="category-card__content">
                        <?= $category['txt'] ?>
                    </div>
                    <img class="category-card__img" src="<?= $image ?>" alt="">
                </a>  
            <?php endforeach ?>
        </div>
    </div>
</div>