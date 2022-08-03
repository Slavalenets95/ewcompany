<?php
    $items = get_sub_field('advantages_repeater');
?>

<div class="advantages">
    <div class="container">
        <div class="advantages-items">
            <?php foreach($items as $item) : ?>
                <div class="advantages-item">
                    <div class="advantages-item__content">
                        <?= $item['content'] ?>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </div>
</div>