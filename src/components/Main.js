import React, {Component} from 'react';
import './Main.css';

class Main extends Component{
  render() {
    return(
      <main id='main' className='main'>
        {/* 영상삽입 */}
        <div className='main_image'>
          <p className='main_text1'>반려동물을 위한 예약관리 및 상태 케어</p>
          <p className='main_text2'>Reservation management and health care for pets</p>
        </div>

        <div className='aboutUs_wrap'>
          <h2 className='aboutUs_title'>About Us</h2>
          <a href='#'>Show All</a>
          <div className='aboutUs_cont1'>
            <p className='aboutUs_cont1_title'>Care Service</p>
            <p>병원, 유치원, 호텔, 미용샵 등 쉽게 찾고 예약하세요</p>
          </div>
          <div className='aboutUs_cont2'>
            <p className='aboutUs_cont2_title'>Calendar</p>
            <p>내 예약 현황, 반려동물의 상태 등을 기록하고 관리하세요</p>
          </div>
          <div className='aboutUs_cont3'>
            <p className='aboutUs_cont3_title'>My Pet</p>
            <p>내 반려동물의 정보를 등록하고 시설에 공유하여 맞춤형 서비스를 받아보세요</p>
          </div>
        </div>

        <div className='calendarToday_wrap'>
          <h2 className='calendarToday_title'>Caledar Today</h2>
          <a href='#' className='calendarToday_all'>Show All</a>
          <p className='today_datetime'>오늘 날짜, 현재 시각</p>
          <ul className='calendarToday_list'>
            <li>
              번호
            </li>
          </ul>
          <a href='#'>상태  추가하기</a>
          <a href='#'>일정  추가하기</a>
        </div>
      </main>
    );
  }
}

/* https://velog.io/@soonmac/React-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0 */

export default Main;
