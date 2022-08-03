<?php
    $imgs = get_sub_field('imgs');
    $headerContent = get_sub_field('header_content');
    $cssClass = get_sub_field('css_class');
?>

<div class="img-wrapper <?= $cssClass ? $cssClass : '' ?>">
    <div class="container">
        <div class="img-wrapper__header">
            <?= $headerContent ?>
        </div>
        <div class="img-slider-wrapper">
            <button class="close-full-screen" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"/></svg>
            </button>
            <div class="img-slider">
                <?php foreach($imgs as $img) : ?>
                    <div class="img-item">
                        <img data-lazy="<?= $img['img']['url'] ?>" loading="lazy">
                    </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>
</div>