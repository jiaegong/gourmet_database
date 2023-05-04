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

  // 유저 위치값 알아내기
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
        center: new window.kakao.maps.LatLng(userLat, userLng), // 지도의 중심좌표.
        level: 6, // 지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(container.current, options); // 지도 생성 및 객체 리턴

      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });
      marker.setMap(map); // 마커 표시
      marker.setDraggable(true);

      // 클릭 이벤트 등록
      const clickListener = window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 이동
      });

      // cleanup 함수
      return () => {
        window.kakao.maps.event.removeListener(clickListener);
      };
    });
  }, [userLat, userLng]);

  return <KakaoMap ref={container} />;
}

export default Map;

const KakaoMap = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
`;
