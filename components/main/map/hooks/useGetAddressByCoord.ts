import { useCallback } from 'react';
import { mapApi } from '../../../../api/kakao';
import { useHandlePlaceInfo } from '../../../../store/placeInfo';

const useGetAddressByCoord = () => {
  const handlePlaceInfo = useHandlePlaceInfo();
  const getAddressByCoord = useCallback(
    async params => {
      try {
        const data = await mapApi.getAddressByCoord(params);
        const addressName = data.documents[0].road_address?.address_name || data.documents[0].address.address_name;
        handlePlaceInfo(addressName, params);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [handlePlaceInfo]
  );

  return { getAddressByCoord };
};

export default useGetAddressByCoord;
