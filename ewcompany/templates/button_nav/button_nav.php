<?php 
    $links = get_sub_field('button_repeater');
?>

<div class="btn-nav">
    <div class="container btn-nav__container">
        <?php foreach($links as $link) : ?>
            <div class="btn-nav__item">
            <a class="btn-nav__link" href="<?= $link['link']['url'] ?>"><?= $link['link']['title'] ?></a>
            </div>
        <?php endforeach ?>
    </div>
</div>