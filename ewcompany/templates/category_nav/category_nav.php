<?php
    $headerContent = get_sub_field('header_content');
    $cards = get_sub_field('cards');
    $cssClass = get_sub_field('css_class');
?>

    <div class="category-nav <?= $cssClass ? $cssClass : '' ?>">
        <div class="container">
            <?php if($headerContent) : ?>
                <div class="category-nav__header">
                    <?= $headerContent ?>
                </div>
            <?php endif ?>
            <div class="category-nav__items">
                <?php foreach($cards as $card) : 
                        $image = $card['img']['url'];
                        $childs = $card['link_repeater'];
                ?>
                <div class="category-nav__item">
                    <ul class="category-nav__item-list">
                        <?php if($childs) :
                                foreach($childs as $child) :  ?>
                                    <li><a href="<?= $child['link']['url'] ?>"><?= $child['link']['title'] ?></a></li>
                        <?php   endforeach; 
                              endif; ?>
                    </ul>
                    <img class="category-nav__item-img" src="<?= $image ?>" alt="">
                </div>
                <?php endforeach ?>
            </div>
        </div>
    </div>