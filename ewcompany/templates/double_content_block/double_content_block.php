<?php
    $leftContent = get_sub_field('left_content');
    $rightContent = get_sub_field('right_content');
?>

<div class="double-content content-block">
    <div class="container double-content__container">
        <div class="left-content">
            <?= $leftContent ?>
        </div>
        <div class="right-content">
            <?= $rightContent ?>
        </div>
    </div>
</div>