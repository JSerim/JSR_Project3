import React, {Component} from 'react';
import './css/Care.css';

class Care extends Component{
  render() {
    return(
      <div className='Care'>
        <div className='Care_txt'>
          <h3>Care Service</h3>
          <p>주변에 있는 동물병원, 애견유치원, 애견호텔, 미용샵 등 케어 시설의
            위치와 운영시간을 빠르게 찾고 확인해보세요.
            <br/>원하는 날짜와 시간을 선택하여 손쉽게 예약까지 가능합니다.
          </p>
        </div>
        <select name='cate1'>
          <option value=''>분류</option>
          <option value='동물병원'>동물병원</option>
          <option value='애견유치원'>애견유치원</option>
          <option value='애견호텔'>애견호텔</option>
          <option value='미용샵'>미용샵</option>
        </select>
        <select name='cate2'>
          <option value=''>진료 동물</option>
          <option value='DogCat'>강아지, 고양이</option>
          <option value='SmallAnimals'>소동물 (햄스터, 토끼 등)</option>
          <option value='Reptiles'>파충류</option>
          <option value='Fish'>어류 (해수어 등)</option>
          <option value='Birds'>조류 (오리, 앵무새 등)</option>
        </select>
        <span>[지역 검색]</span>
        <input type='checkbox' />
        <span>현재 위치와 가까운 지점보기</span>
        <button type='button'>내 예약 확인</button>
        <div>
          <p>선택된 카테고리 : <input type='text' value='ex) 동물병원 X  미용샵 X' /></p>
          <small>(기타 문의 사항은 각 센터에 연락하여 확인하세요.)</small>
        </div>
        <p>지도 api 삽입</p>

      </div>
    );
  }
}

/* 
셀렉트 박스 리액트 라이브러리 코드 
import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
} */

export default Care;
