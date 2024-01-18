<?php include 'header.php' ?>
<script src="./js/index.js"></script>
<!-- 로고1 숨기기 -->
  <form class="main-section"> <!-- 클래스 이름 변경 -->
    <h2>
      <img src="./img/main-logo1.png" alt="">
    </h2>

    <div class="text-box"> <!-- input-box 로 변경 -->
      <p><input type="text" value="moo@naver.com" readonly> <i class="fa-solid fa-caret-down"></i></p>
      <input class="name" type="text" placeholder="이름을 입력해주세요" required>
    </div>

    <p class="auto-login"><b>v</b>강아지로 자동로그인</p> <!-- 클래스 이름 변경 -->
    <p class="start"><button>시작하기</button></p> <!-- 클래스 이름 변경 -->
    
    <p class="explanation">
      * 위 빈칸에 이름을 입력하신 후 시작하기를 클릭하세요. <br> 
      본문 상황을 읽고 해당하는 답을 선택해주세요.
    </p>
    <?php include "loader.php"?>
</form>


<?php include 'footer.php' ?><p></p>