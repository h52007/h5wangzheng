!(function() {
    // 热销单品列表渲染
    const $list = $('#hotSale ul');
    $.ajax({
        url: 'http://localhost/wangzheng/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
<li>
<a href="detail.html?sid=${value.sid}" target="_blank">
    <img class="lazy" src="${value.url}" width="200" height="200"/>
    <p>${value.sid}${value.title}</p>
    <span class="price">￥${value.price}</span>
</a>
</li>
`;
            if (index == 7) {
                return false
            }
        });
        $strhtml += '';
        $list.html($strhtml);
    });

    // 手机列表渲染
    const $phone = $('#phone ul');
    $.ajax({
        url: 'http://localhost/wangzheng/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
<li>
<a href="detail.html?sid=${value.sid}" target="_blank">
    <img class="lazy" src="${value.url}" width="200" height="200"/>
    <p>${value.sid}${value.title}</p>
    <span class="price">￥${value.price}</span>
</a>
</li>
`;
            if (index == 19) {
                return false
            }
        });
        $strhtml += '';
        $phone.html($strhtml);
    });

    // 笔记本电脑列表渲染
    const $notebook = $('#notebook ul');
    $.ajax({
        url: 'http://localhost/wangzheng/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
<li>
<a href="detail.html?sid=${value.sid}" target="_blank">
    <img class="lazy" src="${value.url}" width="200" height="200"/>
    <p>${value.sid}${value.title}</p>
    <span class="price">￥${value.price}</span>
</a>
</li>
`;
            if (index == 9) {
                return false
            }
        });
        $strhtml += '';
        $notebook.html($strhtml);
    });

    // 精品平板列表渲染
    const $slab = $('#slab ul');
    $.ajax({
        url: 'http://localhost/wangzheng/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
<li>
<a href="detail.html?sid=${value.sid}" target="_blank">
    <img class="lazy" src="${value.url}" width="200" height="200"/>
    <p>${value.sid}${value.title}</p>
    <span class="price">￥${value.price}</span>
</a>
</li>
`;
            if (index == 14) {
                return false
            }
        });
        $strhtml += '';
        $slab.html($strhtml);
    });

    // 智能穿戴列表渲染
    const $smartWear = $('#smartWear ul');
    $.ajax({
        url: 'http://localhost/wangzheng/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
<li>
<a href="detail.html?sid=${value.sid}" target="_blank">
    <img class="lazy" src="${value.url}" width="200" height="200"/>
    <p>${value.sid}${value.title}</p>
    <span class="price">￥${value.price}</span>
</a>
</li>
`;
            if (index == 7) {
                return false
            }
        });
        $strhtml += '';
        $smartWear.html($strhtml);
    });

    // 二级菜单效果
    const $menuli = $('.menu li');
    const $item = $('.cartlist .item');
    const $cartlist = $('.cartlist');
    $menuli.on('mouseover', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $item.eq($(this).index()).show().siblings('.item').hide();
        $cartlist.show();
    });
    $menuli.on('mouseout', function() {
        $cartlist.hide();
    });

    $cartlist.hover(() => {
        $cartlist.show();
    }, () => {
        $cartlist.hide();
    })
})()
// 二级菜单渲染
!
function() {
    const $cartlist = $('.cartlist ul');
    $.ajax({
        url: 'http://localhost/wangzheng/php/alldata.php',
        dataType: 'json'
    }).done(function(data) {
        let $strhtml = '';
        $.each(data, function(index, value) {
            $strhtml += `
<li>
<a href="list.html" target="_blank">
    <img class="lazy" src="${value.url}" width="100" height="80"/>
</a>
</li>
`;
            if (index == 9) {
                return false
            }
        });
        $strhtml += '';
        $cartlist.html($strhtml);
    });
}()
// 大轮播图
! function() {
    //tab切换
    $('.banner ol li').on('mouseover', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.banner ul li').eq($(this).index()).stop(true).animate({
            opacity: 1,
            zIndex: 3
        }).siblings().animate({
            opacity: 0,
            zIndex: 0
        })
    })
    let timer = null;
    let index = 0;
    //点击箭头
    $("#right").on('click', function() {
        index++;
        if (index > 6) {
            index = 0;
        }
        $('.banner ol li').eq(index).addClass('active').siblings().removeClass('active');
        $('.banner ul li').eq(index).stop(true).animate({
            opacity: 1,
            zIndex: 3
        }).siblings().animate({
            opacity: 0,
            zIndex: 0
        })
    })

    $("#left").on('click', function() {
            index--;
            if (index < 0) {
                index = 6;
            }
            $('.banner ol li').eq(index).addClass('active').siblings().removeClass('active');
            $('.banner ul li').eq(index).stop(true).animate({
                opacity: 1,
                zIndex: 3
            }).siblings().animate({
                opacity: 0,
                zIndex: 0
            })
        })
        //自动跳转图片
    timer = setInterval(() => {
        if (index > 6) {
            index = 0;
        }

        $('.banner ol li').eq(index).addClass('active').siblings().removeClass('active');
        $('.banner ul li').eq(index).stop(true).animate({
            opacity: 1,
            zIndex: 3
        }).siblings().animate({
            opacity: 0,
            zIndex: 0
        })
        index++;
    }, 3000);
}()

//小轮播图
! function() {
    $('.bannerSmall ol li').on('mouseover', function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('.bannerSmall ul li').eq($(this).index()).stop(true).animate({
            opacity: 1,
            zIndex: 3
        }).siblings().animate({
            opacity: 0,
            zIndex: 0
        })
    })
    let timer = null;
    let index = 0;
    timer = setInterval(() => {
        if (index > 6) {
            index = 0;
        }
        $('.bannerSmall ol li').eq(index).addClass('active').siblings().removeClass('active')
        $('.bannerSmall ul li').eq(index).stop(true).animate({
            opacity: 1,
            zIndex: 3
        }).siblings().animate({
            opacity: 0,
            zIndex: 0
        })
        index++;
    }, 1000);
}()