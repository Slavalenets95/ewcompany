<?php if(is_product()) : 
        $cat = get_the_terms( $post->ID, 'product_cat' )[0];
        $thumbnail_id = get_woocommerce_term_meta( $cat->term_id, 'thumbnail_id', true );
        $image = wp_get_attachment_url( $thumbnail_id );
        $name = $cat->name;
?>
<div class="intro-slider product-intro">
    <div class="intro-slider__item">
        <div class="container intro-slider__item-container">
            <p><?= $name ?></p>
        </div>
        <img class="intro-slider__item-img" src="<?= $image ?>" alt="">
    </div>
</div>
<?php endif ?>

<?php
    $items = get_sub_field('intro_slider_repeater');
    if($items) :
?>

<div class="intro-slider">
    <?php
        foreach($items as $item) : 
    ?>

    <div class="intro-slider__item">
        <?php if($item['content']) : ?>
        <div class="container intro-slider__item-container">
            <?= $item['content'] ?>
        </div>
        <?php endif ?>
        <img class="intro-slider__item-img" src="<?= $item['img']['url'] ?>" alt="">
    </div>

    <?php endforeach ?>
</div>

<?php endif; ?>
