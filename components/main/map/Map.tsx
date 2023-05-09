import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useClickableMap } from '../../../store/clickableMap';
import useGetAddressByCoord from './hooks/useGetAddressByCoord';

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  const { getAddressByCoord } = useGetAddressByCoord();
  const clickableMap = useClickableMap();

  const container = useRef(null);
  const [userLat, setUserLat] = useState<number>();
  const [userLng, setUserLng] = useState<number>();

  // 유저 위치값 알아내기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
      });
    }
  }, []);

  // 지도 띄우는 코드
  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(userLat, userLng),
        level: 6,
      };

      const map = new window.kakao.maps.Map(container.current, options);

      if (clickableMap) {
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);
        marker.setDraggable(true);

        // 클릭 이벤트 등록
        const clickListener = window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
          const latLng = mouseEvent.latLng;
          marker.setPosition(latLng);

          getAddressByCoord({ x: latLng.La, y: latLng.Ma });
        });

        // cleanup 함수
        return () => {
          window.kakao.maps.event.removeListener(clickListener);
        };
      }
    });
  }, [clickableMap, getAddressByCoord, userLat, userLng]);

  return <KakaoMap ref={container} />;
}

export default Map;

const KakaoMap = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
`;
