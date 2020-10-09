// 注册验证！
! function() {
    var aSpan = document.querySelectorAll('#contact span');
    var usename = document.querySelector('.usename');
    var email = document.querySelector('.email');
    var password = document.querySelector('.password');
    var submit = document.querySelector('.submit');

    var userflag = true;
    var emailflag = true;
    var passflag = true;
    //1.验证用户名：
    //得到焦点显示提示问题
    usename.onclick = function() {
            aSpan[0].innerHTML = '中英文均可，最长14个英文或7个汉字';
            aSpan[0].style.color = 'gray';
        }
        //失去焦点进行验证
    usename.onblur = function() {
        if (this.value !== '') {
            var strlen = this.value.replace(/[\u4e00-\u9fa5]/g, '##').length;
            var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
            if (strlen <= 14) {
                if (reg.test(this.value)) {
                    aSpan[0].innerHTML = '√';
                    userflag = true;
                } else {
                    aSpan[0].innerHTML = '不符合规则';
                    aSpan[0].style.color = 'red';
                    userflag = false;
                }
            } else {
                aSpan[0].innerHTML = '内容超限';
                aSpan[0].style.color = 'red';
                userflag = false;
            }
        } else {
            aSpan[0].innerHTML = '内容不能为空';
            aSpan[0].style.color = 'red';
            userflag = false;
        }
    }

    //2.验证电子邮箱
    email.onclick = function() {
        aSpan[3].innerHTML = '请输入电子邮箱';
        aSpan[3].style.color = 'gray';
    }
    email.onblur = function() {
            if (this.value !== '') {
                var reg = /^(\w+([-+.]\w+)*)@(\w+([-.]\w+)*)\.(\w+([-.]\w+)*)$/;
                if (reg.test(this.value) !== '') {
                    aSpan[3].innerHTML = '√';
                    emailflag = true;
                } else {
                    aSpan.innerHTML = '不符合规则';
                    aSpan.style.color = 'red';
                    emailflag = false;
                }
            } else {
                aSpan[3].innerHTML = '输入不能为空';
                aSpan[3].style.color = 'red';
                emailflag = false;
            }
        }
        //3.用户密码 
    password.onclick = function() {
        aSpan[4].innerHTML = '请输入6-12位密码'
        aSpan[4].style.color = 'gray';
    }

    password.oninput = function() {
        if (this.value.length >= 6 && this.value.length <= 12) {
            var reg1 = /\d+/;
            var reg2 = /[a-z]+/;
            var reg3 = /[A-Z]+/;
            var reg4 = /[\w\_]+/;
            var count = 0;
            if (reg1.test(this.value)) {
                count++;
            }
            if (reg2.test(this.value)) {
                count++;
            }
            if (reg3.test(this.value)) {
                count++;
            }
            if (reg4.test(this.value)) {
                count++;
            }

            switch (count) {
                case 1:
                    aSpan[4].innerHTML = '弱';
                    aSpan[4].style.color = 'red';
                    passflag = false;
                    break;
                case 2:
                case 3:
                    aSpan[4].innerHTML = '中';
                    aSpan[4].style.color = 'orange';
                    passflag = true;
                    break;
                case 4:
                    aSpan[4].innerHTML = '强';
                    aSpan[4].style.color = 'green';
                    passflag = true;
                    break;
            }
        } else {
            aSpan[4].innerHTML = '密码长度必须是6-12个字符';
            aSpan[4].style.color = 'red';
            passflag = false;
        }
    }
    password.onblur = function() {
        if (this.value !== '') {

        } else {
            aSpan[4].innerHTML = '输入不能为空';
            aSpan[4].style.color = 'red';
        }
    }

    form.onsubmit = function() {
        if (username.value === '') {
            aSpan[0].innerHTML = '用户名不能为空';
            aSpan[0].style.color = 'red';
            userflag = false;
        }
        if (telphone.value === '') {
            aSpan[1].innerHTML = '手机号码不能为空';
            aSpan[1].style.color = 'red';
            telflag = false;
        }
        if (cartid.value === '') {
            aSpan[2].innerHTML = '身份证不能为空';
            aSpan[2].style.color = 'red';
            cartflag = false;
        }
        if (email.value === '') {
            aSpan[3].innerHTML = '邮箱不能为空';
            aSpan[3].style.color = 'red';
            emailflag = false;
        }
        if (password.value === '') {
            aSpan[4].innerHTML = '密码不能为空';
            aSpan[4].style.color = 'red';
            passflag = false;
        }
        if (!userflag || !telflag || !cartflag || !emailflag || !passflag) {
            return false; //阻止默认行为
        }
    };
}()

// 验证用户名是否存在与提交
! function() {
    let $user = $('.username');
    let $usernameflag = true;
    $user.on('blur', function() {
        $.ajax({
            type: 'post',
            url: 'http://localhost/wangzheng/php/registry.php',
            data: {
                username: $user.val()
            }
        }).done(function(result) {
            if (!result) {
                $('span').html('√').css('color', 'green');
                $usernameflag = true;
            } else {
                $('span').html('该用户名已经存在').css('color', 'red');
                $usernameflag = false;
            }
        })
    });

    $('form').on('submit', function() {
        if ($user.val() == '') {
            $('span').html('用户名不能为空').css('color', 'red');
            $usernameflag = false;
        }
        if (!$usernameflag) {
            return false;
        }
    });
}()