import React, { useEffect } from 'react'
import styled from 'styled-components';

const TheaterMap = ({coordinate}) => {
    
    const theaterCoordinate = coordinate

    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(theaterCoordinate[0], theaterCoordinate[1]),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);

        let markerPosition = new kakao.maps.LatLng(
            theaterCoordinate[0],
            theaterCoordinate[1]
          );
          let marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);

        }, [theaterCoordinate])
        const { kakao } = window;
       


    return (
        <div>
            <Stdiv className='kakaoMap'  id="map" ></Stdiv> 
        </div>
    );
};

export default TheaterMap;

const Stdiv = styled.div`
  width: 540px;
  height: 340px;
  border-radius: 10px;
  @media (max-width: 763px){
    width: 100%;
  }
`

