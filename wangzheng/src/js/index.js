// 热销单品列表渲染
const $list = $('#hotSale ul');
$.ajax({
    url: 'http://localhost/wangzheng/php/listdata.php',
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
    url: 'http://localhost/wangzheng/php/listdata.php',
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
    });
    $strhtml += '';
    $phone.html($strhtml);
});

// 笔记本电脑列表渲染
const $notebook = $('#notebook ul');
$.ajax({
    url: 'http://localhost/wangzheng/php/listdata.php',
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
    url: 'http://localhost/wangzheng/php/listdata.php',
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
    url: 'http://localhost/wangzheng/php/listdata.php',
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
const $menuli = $('#nav li');
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