window.onload = function(){
  window.open("popup.html", "파업창", "width=400, height=600");
}
var photo = document.getElementById("photo");
        var thumbnail = document.querySelectorAll("#gallery > li > img");
       
        for ( var i = 0; i < thumbnail.length; i++ )
          thumbnail[i].addEventListener("click", function () {
       
            photo.setAttribute("src", this.getAttribute("src"));
       
          });


          function joinform_check(){
            var uid = document.getElementById("uid");
            var pwd = document.getElementById("pwd");
            var repwd = document.getElementById("repwd");
            var uname = document.getElementById("uname");
            var female = document.getElementById("female");
            var male = document.getElementById("male");
            var mobile = document.getElementById("mobile");
            var email_id = document.getElementById("email_id");
            var agree = document.getElementById("agree");
            var yy = document.getElementById("yy");
            var mm = document.getElementById("mm");
            var dd = document.getElementById("dd");

            if(uid.value ==""){
                alert("아이디를 입력하세요.");
                uid.focus();
                return false;
            };

            if(pwd.value == ""){
                alert("비밀번호를 입력하세요.");
                pwd.focuse();
                return false;
            };
            var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

            if (!pwdCheck.test(pwd.value)) {
            alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
            pwd.focus();
            return false;
            };
        
            if(repwd.value !== pwd.value){
                alert("비밀번호가 일치하지 않습니다.");
                repwd.focuse();
                return false;
            };
            if(uname.value ==""){
                alert("이름을 입력하세요.");
                uname.focus();
                return false;
            };
            
            if(yy.value==""){
              alert("생년월일 연도를 적어주세요(4자리)");
              yy.focus();
              return false;
            }
            
            var num = /^[0-9]+/g;

            if(!num.test(yy.value)){
              alert("생년월이 연도에 숫자만 입력해주세요");
              yy.value;
              return false;
            }
            if(mm.value==""){
              alert("생년월이 월을 선택해주세요");
              mm.focus();
              return false;
            }
            if(dd.value==""){
              alert("생년월일 날짜 적어주세요(2자리)");
              dd.focus();
              return false;
            }
            var numm = /^[0-9]+/g;
            if(!numm.test(dd.value)){
              alert("생년월일 날짜에 숫자만 입력해주세요")
              dd.focus();
              return false;
            }
            if(!female.checked && !male.checked){
                alert("성별을 선택해주세요.");
                female.focus();
                return false;
            };
            var reg = /^[0-9]+/g;
            if(!reg.test(mobile.value)){
                alert("전화번호는 숫자만 입력해주세요.");
                mobile.focus();
                return false;
            };
            if(mobile.value ==""){
                alert("전화번호를 입력해주세요");
                mobile.focus();
                return false;
            }

            if(email_id.value == ""){
                alert("이메일 주소를 입력하세요")
                email_id.focus();
                return false;
            }
            if(!agree.checked){
                alert("약관 동의를 체크하세요.")
                agree.focus();
                return false;
            }
            document.join_form_submit();
        }
        function id_check() {
  window.open("", "", "width=600, height=200, left=200, top=100");
}


function change_email() {
  var email_add = document.getElementById("email_add");
  var email_sel = document.getElementById("email_sel");

  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;

  email_add.value = val;
}


    function search_address() {
    window.open("https://map.naver.com/v5/?c=15,0,0,0,dh", "b", "width=600, height=300, left=200, top=100");
}

