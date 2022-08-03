<?php
    $cards = get_sub_field('cards');
    $cssClass = get_sub_field('css_class');
?>

<div class="cards <?= $cssClass ? $cssClass : '' ?>">
    <div class="container cards__container">
        <?php foreach($cards as $card) : ?>
            <div class="card-item">
                <div class="card-item__content">
                    <?= $card['content'] ?>
                </div>
                <img class="card-item__img" src="<?= $card['img']['url'] ?>" aria-hidden="true">
            </div>
        <?php endforeach ?>
    </div>
</div>