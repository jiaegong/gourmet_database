import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  const container = useRef(null);
  const [userLat, setUserLat] = useState<number>();
  const [userLng, setUserLng] = useState<number>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
      });
    }
  }, []);

  // 지도 띄우는 코드
  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(userLat, userLng), //지도의 중심좌표.
        level: 6, //지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    });
  }, [userLat, userLng]);

  return <KakaoMap ref={container} />;
}

export default Map;

const KakaoMap = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
`;
