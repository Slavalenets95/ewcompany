jQuery(document).ready(function ($) {
    /**
     * Global
     */
    const darkBg = $('.dark-bg')
    const closeEls = $('.close-els')

    function removeActive() {
        $('.active-el').removeClass('active-el active')
    }

    darkBg.on('click', removeActive)
    closeEls.on('click', removeActive)

    /**
     * Intro Slider
     */
    if ($('.intro-slider').length) {
        $('.intro-slider').slick({
            dots: true,
            arrows: false,
        })
    }

    if ($('.tel-btn').length) {

        $('.tel-btn').on('click', function () {
            $('.popup').addClass('active')
            $('.overlay').addClass('active')
        })

        $('.title').on('click', function () {
            $('.popup').removeClass('active')
            $('.overlay').removeClass('active')
        })

        $('.overlay').on('click', function () {
            $('.popup').removeClass('active')
            $('.overlay').removeClass('active')
        })
    }


    /**
     * Colors Slider
     */
    if ($('.img-slider').length) {
        $('.img-wrapper:not(.model-doors) .img-slider').slick({
            slidesToShow: 1,
            infinity: false,
            lazyLoad: 'ondemand',
            prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
            nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
        })

        $('.img-wrapper:not(.model-doors) .img-slider').on('click', function (e) {
            const sliderContainer = $('.img-slider-wrapper')
            const sliderWrapper = $('.img-slider')
            if ($(e.target).is('img')) {
                const currentSlide = $(e.target).parent('.slick-slide')
                const slideIdx = parseInt(currentSlide.attr('data-slick-index'))
                const overlay = $('.overlay')
                overlay.addClass('active')
                sliderContainer.addClass('full-screen')
                sliderWrapper.slick('unslick')
                sliderWrapper.slick({
                    slidesToShow: 1,
                    infinity: false,
                    initialSlide: slideIdx,
                    lazyLoad: 'ondemand',
                    prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                })
            }
        })

        $('.overlay').on('click', function () {
            const sliderContainer = $('.img-wrapper:not(.model-doors) .img-slider-wrapper')
            const sliderWrapper = $('.img-wrapper:not(.model-doors) .img-slider')          
            const currentSlide = $('.img-wrapper:not(.model-doors) .img-slider .slick-active')
            const slideIdx = parseInt(currentSlide.attr('data-slick-index'))
            const overlay = $('.overlay')
            overlay.removeClass('active')
            sliderContainer.removeClass('full-screen')
            sliderWrapper.slick('unslick')
            sliderWrapper.slick({
                slidesToShow: 1,
                infinity: false,
                initialSlide: slideIdx,
                lazyLoad: 'ondemand',
                prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
            })
        })

        $('.close-full-screen').on('click', function() {
            const sliderContainer = $('.img-wrapper:not(.model-doors) .img-slider-wrapper')
            const sliderWrapper = $('.img-wrapper:not(.model-doors) .img-slider')          
            const currentSlide = $('.img-wrapper:not(.model-doors) .img-slider .slick-active')
            const slideIdx = parseInt(currentSlide.attr('data-slick-index'))
            const overlay = $('.overlay')
            overlay.removeClass('active')
            sliderContainer.removeClass('full-screen')
            sliderWrapper.slick('unslick')
            sliderWrapper.slick({
                slidesToShow: 1,
                infinity: false,
                initialSlide: slideIdx,
                lazyLoad: 'ondemand',
                prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
            })
        })
    }

    if ($('.model-doors').length) {
        $('.model-doors .img-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
            nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
            infinity: false,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        })

        $('.model-doors .img-slider').on('click', function(e) {
            if($(e.target).is('img')) {
                const sliderContainer = $(e.target).parents('.img-slider-wrapper')
                const sliderWrapper = $(e.target).parents('.img-slider')
                const slickIdx = parseInt($(e.target).parents('.slick-slide').attr('data-slick-index'))
                const overlay = $('.overlay')
                sliderContainer.addClass('full-screen')
                overlay.addClass('active')
                sliderWrapper.slick('unslick')
                sliderWrapper.slick({
                    slidesToShow: 1,
                    arrows: true,
                    initialSlide: slickIdx,
                    prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    infinity: false,
                    lazyLoad: 'ondemand',
                })
            }

            $('.close-full-screen').on('click', function() {
                const sliderContainer = $('.img-slider-wrapper.full-screen')
                const sliderWrapper = $('.full-screen .img-slider')          
                const currentSlide = $('.full-screen .img-slider .slick-active')
                const slideIdx = parseInt(currentSlide.attr('data-slick-index'))
                const overlay = $('.overlay')
                overlay.removeClass('active')
                sliderContainer.removeClass('full-screen')
                sliderWrapper.slick('unslick')
                sliderWrapper.slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                    prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    infinity: false,
                    lazyLoad: 'ondemand',
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                    ]    
                })
            })

            $('.overlay').on('click', function() {
                const sliderContainer = $('.img-slider-wrapper.full-screen')
                const sliderWrapper = $('.full-screen .img-slider')          
                const currentSlide = $('.full-screen .img-slider .slick-active')
                const slideIdx = parseInt(currentSlide.attr('data-slick-index'))
                const overlay = $('.overlay')
                overlay.removeClass('active')
                sliderContainer.removeClass('full-screen')
                sliderWrapper.slick('unslick')
                sliderWrapper.slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                    prevArrow: '<button class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    nextArrow: '<button class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g><path d="M386.2,693.2c32.8,38.6,28.1,96.5-10.5,129.3c-17.2,14.7-38.3,21.8-59.4,21.8c-26,0-51.9-11-70-32.3L31.8,559.4c-29.1-34.2-29.1-84.5,0-118.8l214.5-252.5c32.8-38.6,90.6-43.4,129.4-10.5c38.6,32.8,43.3,90.7,10.5,129.3L222.2,500.1L386.2,693.2z M898.3,408.3H597.7l86.1-101.4c32.8-38.6,28.1-96.5-10.5-129.3c-38.7-32.8-96.5-28.1-129.3,10.6L329.4,440.6c-29.1,34.2-29.1,84.5,0,118.8l214.6,252.5c18.1,21.4,44,32.3,70,32.3c21,0,42.1-7.2,59.4-21.8c38.6-32.8,43.3-90.7,10.5-129.3l-86.1-101.4h300.6c50.7,0,91.7-41.1,91.7-91.7C990,449.3,949,408.3,898.3,408.3z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></g></svg></button>',
                    infinity: false,
                    lazyLoad: 'ondemand',
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                    ]    
                })
            })
        })
    }

    /**
     * Related Product
     */
    if ($('.single-product__container .related.products').length) {
        $('.single-product__container .related.products .products').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        })
    }

    /**
     * Nav Mobile Menu
     */

    function addActive(node) {
        node.addClass('active-el')
        darkBg.addClass('active-el')
    }
    const hamburgerBtn = $('.header-bottom__menu-btn')
    const menu = $('.mobile-menu')
    hamburgerBtn.on('click', function () {
        addActive(menu)
    })


    const menuWrapper = $('.mobile-menu');
    hamburgerBtn.on('click', function () {
        menuWrapper.addClass('active');
        $('.dark-bg').addClass('active');
    })

    $('.menu-item-has-children').on('click', function (e) {
        $(e.currentTarget).children('.sub-menu').addClass('active')
        $('.mobile-menu__back-btn').addClass('active')
    })

    $('.mobile-menu__back-btn').on('click', function () {
        if ($('.sub-menu.active .sub-menu.active').length) {
            $('.sub-menu.active .sub-menu.active').removeClass('active')
        } else {
            $('.menu-item-has-children > .sub-menu').removeClass('active')
            $('.mobile-menu__back-btn').removeClass('active')
        }
    })

    $('.mobile-menu__close-svg').on('click', function () {
        $('.active-el').removeClass('active-el');
        $('.dark-bg').removeClass('active-el')
    })

    $('.dark-bg').on('click', function () {
        $('.active').removeClass('active')
    })


    // if($('.header-bottom__menu-btn').length)
    // {
    //     const burgerBtn = $('.header-bottom__menu-btn')
    //     const menu = $('.header-nav')

    //     burgerBtn.on('click', function() {
    //         menu.addClass('active-el')
    //         darkBg.addClass('active-el')
    //     })

    //     if(window.screen.availWidth < 992) {
    //         menu.on('click', function(e) {
    //             const target = $(e.target)

    //             if(target.parent('.menu-item-has-children') || target.hasClass('.header-nav__icon') || target.is('g, defs, clipPath, rect'))
    //             {
    //                 if(target.parents('.header-nav__close-btn').length) {
    //                     return
    //                 }
    //                 e.preventDefault()
    //                 const parent = target.parents('.menu-item-has-children')
    //                 parent.children('.sub-menu').toggleClass('active active-el')
    //                 $('.header-nav__mobile-back').toggleClass('active active-el')
    //             }
    //         })

    //         $('.header-nav__mobile-back').on('click', function(e) {
    //             $('.header-nav .sub-menu.active').removeClass('active')
    //         })
    //     }
    // }

});