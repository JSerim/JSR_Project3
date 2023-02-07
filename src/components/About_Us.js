import React, {Component} from 'react';
import './css/About_Us.css';

class About_Us extends Component{
  render() {
    return(
      <div className='About_US'>
        <div className='About_Us_txt'>
          <h2>나만의 반려동물 관리를 위한 맞춤형 케어</h2>
          <p className='About_Us_en'>My pet's life care Platform</p>
          <p className='siteName'>With Pet</p>
        </div>
        <div className='Care_txt'>
          <h3>Care Service</h3>
          <p>주변에 있는 동물병원, 애견유치원, 애견호텔, 미용샵 등 케어 시설의
            위치와 운영시간을 빠르게 찾고 확인해보세요.
            <br/>원하는 날짜와 시간을 선택하여 손쉽게 예약까지 가능합니다.
          </p>
        </div>
        <div className='Calendar_txt'>
          <h3>Calendar</h3>
          <p>With Pet만의 특별한 캘린더로 반려동물의 일정을 관리하세요.
            <br/>예약한 케어시설의 일정이 자동으로 연동됩니다. 손쉽게 확인하세요.
            <br/>반려동물의 식사량, 배변상태, 기타 특이사항들을 간편하게 기록하고 건강상태를 관리하세요.
          </p>
        </div>
        <div className='MyPet_txt'>
          <h3>My Pet</h3>
          <p>반려동물의 이름, 성별, 나이, 품종, 성격, 사진, 질병 등 기타 특이사항을 등록해두세요.
            <br/>케어시설 예약 시 해당 센터에서 미리 내 반려동물의 정보를 확인할 수 있습니다.
            <br/>더 좋은 맞춤형 서비스를 제공받으세요.
          </p>
        </div>
      </div>
    );
  }
}

export default About_Us;
