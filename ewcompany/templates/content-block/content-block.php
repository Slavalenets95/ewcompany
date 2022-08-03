<?php
    $content = get_sub_field('content');
    $classes = get_sub_field('css_classes');
?>

<div class="content-block block-content <?= $classes ?>">
    <div class="container block-content__container">
        <?= $content ?>
    </div>
</div>