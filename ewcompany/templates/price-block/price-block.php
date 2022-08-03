<?php
    $bgImg = get_sub_field('img');
    $content = get_sub_field('content');
    $priceLink = get_sub_field('link');
?>

<div class="price-link">
    <div class="container price-link__container">
        <div class="price-link__content content-block">
            <?= $content ?>
        </div>
        <a class="price-link__link" href="<?= $priceLink['url'] ?>"><?= $priceLink['title'] ? $priceLink['title'] : 'Прайс' ?></a>
    </div>
    <div class="container price-link__bg-container">
        <img class="price-link__bg" src="<?= $bgImg['url'] ?>" aria-hidden="true">
    </div>
</div>