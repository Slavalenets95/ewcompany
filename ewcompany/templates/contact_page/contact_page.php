<?php
    $header_content = get_sub_field('header_content');
    $img = get_sub_field('img');
    $secondImg = get_sub_field('second_img');
    $content = get_sub_field('content');
?>

<div class="contact-page container">
    <div class="contact-page__header">
        <?= $header_content ?>
    </div>
    <div class="contact-page__body">
        <div class="contact-page__body-txt-block">
            <?= $content ?>
        </div>
        <div class="contact-page__body-img-block">
            <img src="<?= $img['url'] ?>" alt="<?= $img['title'] ?>">
            <img src="<?= $secondImg['url'] ?>" alt="<?= $secondImg['title'] ?>">
        </div>
    </div>
</div>