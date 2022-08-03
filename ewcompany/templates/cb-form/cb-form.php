<div class="cb-wrapper">
    <div class="container">
        <?php 
            if(pll_current_language() == 'en') {
                echo do_shortcode( '[contact-form-7 id="919" title="Форма обратного звонка(EN)"]' );
            } else {
                echo do_shortcode('[contact-form-7 id="658" title="Форма обратного звонка"]');
            }
        ?>
    </div>
</div>