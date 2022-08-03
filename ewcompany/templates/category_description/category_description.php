<?php
    $links = get_sub_field('links');
    $content = get_sub_field('content');
?>

<div class="category-intro">
    <div class="container category-intro__container">
        <div class="category-intro__nav">
            <ul>
                <?php foreach($links as $link) : ?>
                    <li><a href="<?= $link['link']['url'] ?>"><?= $link['link']['title'] ?></a></li>
                <?php endforeach ?>
            </ul>
        </div>
        <div class="category-intro__content content-block">
            <?= $content ?>
        </div>
    </div>
</div>