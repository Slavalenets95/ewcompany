<?php
    $headerContent = get_sub_field('header_content');
    $items = get_sub_field('repeater');
?>

<div class="container">
    <h2 class="payment-cards__title"><?= $headerContent ?></h2>
    <?php if($items) : ?>
        <div class="payment-cards">
    <?php
            foreach($items as $item) :    
    ?>
        <div class="payment-card">
            <div>
                <div class="payment-card__img-block">
                    <img src="<?= $item['icon']['url'] ?>" alt="<?= $item['img']['title'] ?>" class="payment-card__img">
                </div>
                <div class="payment-card__txt-block">
                    <?= $item['content'] ?>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>