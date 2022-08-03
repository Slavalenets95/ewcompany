<?php
    $repeater = get_sub_field('repeater');
?>

<?php if($repeater) : ?>
    <div class="blog-archive__cards container">
        <?php foreach($repeater as $item) : 
                $upperContent = $item['upper_content'];
                $img = $item['img']['sizes']['medium'];
                $bottomContent = $item['bottom_content'];    
        ?>
            <div class="blog-archive__card">
                <div class="blog-archive__card-img-block">
                    <img src="<?= $img ?>" alt="<?= $img['title'] ?>">
                    <div class="blog-archive__card-img-content">
                        <?= $upperContent ?>
                    </div>
                </div>
                <div class="blog-archive__card-txt-block">
                    <?= $bottomContent ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>