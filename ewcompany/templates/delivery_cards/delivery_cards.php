<?php 
    $items = get_sub_field('repeater'); 
    $headerContent = get_sub_field('header_content');    
?>

<div class="delivery container">
    <div class="delivery__header">
        <?= $headerContent ?>
    </div>
    <div class="delivery-cards">
        <?php foreach($items as $item) : ?>
            <div class="delivery-card">
                <?= $item['content'] ?>
            </div>
        <?php endforeach ?>
    </div>
</div> 