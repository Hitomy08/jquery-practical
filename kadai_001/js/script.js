$(function () {
  // マウスオーバーで画像を少し透明に
  $('a, .item img').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 300);
  });
  // マウスアウトで元に戻す
  $('a, .item img').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
    }, 300);
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // TOPへ戻るボタンの表示・非表示切り替え
  $(window).scroll(function () {
    // 現在のスクロール量（上から何pxスクロールしたか）
    if ($(window).scrollTop() > 100) {
      // 100pxより下までスクロールしたら表示
      $('#toTopBtn').fadeIn();
    } else {
      // 100px未満なら非表示
      $('#toTopBtn').fadeOut();
    }
  });

  // クリックでTOPへ戻る
  $('#toTopBtn').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // ナビ内のaタグクリックでスムーズスクロール
  $('a[href^="#"]').on('click', function (e) {
    if ($(this).attr('href') === '#' || $(this).attr('href') === '') {
      $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
    } else {
      $('html, body').animate(
        { scrollTop: $($(this).attr('href')).offset().top },
        600,
        'swing'
      );
    }
    e.preventDefault();
  });


  // 画像クリックで拡大表示
  $('.zoomImg').on('click', function () {
    $('#imgModal img').attr('src', $(this).attr('src'));
    $('#imgModal').fadeIn(400).css('display', 'flex');
  });

  // バッテンで閉じる
  $('.closeBtn').on('click', function () {
    $('#imgModal').fadeOut(400);
  });

  // スクロールでセクション要素をフェードイン
  $(window).scroll(function () {
    // すべての.fade-in-section要素について繰り返し
    $('.fade-in-section').each(function () {
      // 「ウィンドウの一番下」 > 「この要素の一番上 + 50px」 なら
      if (
        $(window).scrollTop() + $(window).height() > $(this).offset().top + 50
      ) {
        // .is-showクラスを付けて、フェードイン（CSSでopacity:1になる）
        $(this).addClass('is-show');
      }
    });
  });
  // ページロード時にも1回判定
  $(window).trigger('scroll');

});