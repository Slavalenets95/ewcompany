<?php 
    $chars = get_field('technical_chars', get_the_id());
    $fullDescr = get_field('full_descr');
?>

<div class="description-product">
    <div class="container description-product__container">
        <div class="description-product__item">
            <h2 class="description-product__item-title">Технические характеристики <?= get_the_title() ?></h2>
            <?= $chars ?>
        </div>
        <div class="description-product__item">
            <h2 class="description-product__item-title">Описание <?= get_the_title() ?></h2>
            <?= $fullDescr ?>
        </div>
    </div>
</div>