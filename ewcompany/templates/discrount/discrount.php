<?php
    $headerContent = get_sub_field('header_content');
    $links = get_sub_field('discount_repeater');
?>

    <div class="discounts">
        <div class="container">
            <div class="discounts-header">
                <?= $headerContent ?>
            </div>
            <div class="discounts-items">
                <?php foreach($links as $link) : ?>
                <div class="discounts-item">
                    <a href="<?= $link['link'] ?>" class="discounts-item__content">
                        <?= $link['text'] ?>
                    </a>
                    <img class="discount-item__img" src="<?=$link['img']['url'] ?>" alt="">
                </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>