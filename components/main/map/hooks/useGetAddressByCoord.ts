import { useCallback } from 'react';
import { mapApi } from '../../../../api/kakao';
import { useHandleAddress } from '../../../../store/address';

const useGetAddressByCoord = () => {
  const handleAddress = useHandleAddress();
  const getAddressByCoord = useCallback(
    async params => {
      try {
        const data = await mapApi.getAddressByCoord(params);
        const addressName = data.documents[0].road_address?.address_name || data.documents[0].address.address_name;
        handleAddress(addressName);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [handleAddress]
  );

  return { getAddressByCoord };
};

export default useGetAddressByCoord;
