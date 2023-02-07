import React, {Component,} from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import './css/Main.css';

class Main extends Component{
  render() {
    return(
      <main id='main' className='main'>
        <div className='main_image'>
        <video autoPlay loop muted playsInline width='100%'>
          <source src={'/videos/main_video.mp4'} type='video/mp4' />
        </video>
          <p className='main_text1 hide'>반려동물을 위한 예약관리 및 상태 케어</p>
          <p className='main_text2 hide'>Reservation management and health care for pets</p>
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
              <span className='todayList_number'>1</span>
              <span className='todayList_time'>시간</span>
              <span className='todayList_text'>내용</span>
              <input type='checkbox' />
            </li>
          </ul>
          <div className='add_btn'>
            <a href='#'>상태<BsFillPlusCircleFill className='add_condition' /></a>
            <a href='#'>일정<BsFillPlusCircleFill className='add_plan' /></a>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
