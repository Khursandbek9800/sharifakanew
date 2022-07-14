import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YMap = () => {
    const h = '480px';
    const style = {
        width: '100%',
        height: h,
        background: '#EBEDF8'
    };
    return (
        <div className="yandex-map" style={style}>
            <YMaps>
                <Map
                    defaultState={{
                        center: [41.320244, 69.262537],
                        zoom: 15,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    style={{width: '100%', height: h}}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                >
                    <Placemark defaultGeometry={[41.320244, 69.262537]} />
                </Map>
            </YMaps>
        </div>
    )
}

export default YMap;
