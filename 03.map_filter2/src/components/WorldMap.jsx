// WorldMap.jsx
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countries from '../assets/data/coffee_menu.json'; // 👉 국가 경계 GeoJSON 파일

const WorldMap = () => {
    const onEachCountry = (feature, layer) => {
        const name = feature.properties.ADMIN; // 국가 이름

        // 마우스 오버
        layer.on('mouseover', () => {
            layer.setStyle({
                fillColor: 'orange',
                fillOpacity: 0.7,
            });
        });

        // 마우스 아웃
        layer.on('mouseout', () => {
            layer.setStyle({
                fillColor: '#ccc',
                fillOpacity: 0.5,
            });
        });

        // 클릭 이벤트
        layer.on('click', () => {
            alert(`${name}을(를) 클릭했습니다.`);
        });

        layer.bindTooltip(name); // 나라 이름 툴팁 표시
    };

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: '600px', width: '100%' }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; OpenStreetMap contributors'
            />
            <GeoJSON
                data={countries}
                style={{
                    fillColor: '#ccc',
                    fillOpacity: 0.5,
                    color: '#333',
                    weight: 1,
                }}
                onEachFeature={onEachCountry}
            />
        </MapContainer>
    );
};

export default WorldMap;
