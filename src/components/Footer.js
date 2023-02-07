import React, {Component} from 'react';
import './css/Footer.css';

class Footer extends Component{
  render() {
    return(
      <footer id='footer' className='footer'>
        <a href='#'>사이트 정보 ▼</a>
        <div className='footer_content'>
          <p>(주)위드펫</p>
          <p>사업자등록번호 : 012-34-56789</p>
          <p>대표자 : 홍길동</p>
          <p>개인정보관리책임자 : 홍길동</p>
          <address>서울특별시 강남구 장연빌딩 그린컴퓨터아트학원</address>
          <p>Tel : 010-1234-5678 (월-금 10:00 ~ 18:00)</p>
          <p>Email : withpet123@naver.com</p>
        </div>
        <p className='copy'>ⓒ2023 WithPet Inc All Rights Reserved</p>
      </footer>
    );
  }
}

export default Footer;
