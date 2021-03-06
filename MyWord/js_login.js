/**
 * Created by 懿懿 on 2017/4/27.
 */
window.onload = function () {
    /*
    var inputs = document.getElementsByClassName("txt");
    for(var i = 0; i < inputs.length;i++){
        inputs[i].addEventListener("focus",function () {
            this.style.border= "1px solid #00b38a";
        });
        inputs[i].addEventListener("blur",function () {
            this.style.border = "none";
        });
    }
    */
    $(".txt").on("focus",function () {
        $(this).css({border:"1px solid #00b38a"});
    });
    $(".txt").on("blur",function () {
        $(this).css({border:"0"});
    });

    $('#username').on('blur',validateUsername);
    $('#password').on('blur',validatePassword);

    $('#loginButton').on('click',function () {


        if(validateUsername() == true && validatePassword() == true){  
            alert("合法");
            //后面ajax提交给服务区验证用户名密码是否正确
        }
        else{
            alert("不合法");
        }
    });
}

function validateUsername() {
    console.log("正在验证账号--------------------------");
    var username = $('#username').val();
    //对电子邮件的验证
    var mailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //手机正则
    var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(mailReg.test(username) || phoneReg.test(username)){  //手机  或者  邮箱
        $('#username').css("border","none"); //正确，颜色恢复或者绿色
        $('#usernameError').html(''); //清空错误提示
        return true;
    }
    else{
        $('#username').css("border","1px solid #ff0000"); //红色错误
        $('#usernameError').html('请输入正确的手机号或者邮箱');
        return false;
    }
}

function validatePassword(){
    console.log("正在验证密码--------------------------");
    var password = $('#password').val();
    console.log(password.length);

    if(password.length < 6 || password.length > 15){ 
        console.log(1);
        $('#password').css("border","1px solid #ff0000");
        $('#passwordError').html("密码不符合长度要求");
        return false;
    }

    var b=/^[a-zA-Z\d]\w{6,15}[a-zA-Z\d]$/;
    if(b.test(password)){
        console.log(3);
        $('#password').css("border","none");
        $('#passwordError').html('');
        return true;
    }else{
        console.log(4);
        $('#password').css("border","1px solid #ff0000");
        $('#passwordError').html('密码有非法字符');
        return false;
    }

}
