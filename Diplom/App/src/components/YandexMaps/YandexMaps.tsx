import {FC} from "react";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const YandexMaps: FC = () => {
    return(
        <YMaps>
            <Map defaultState={{
                center: [64.463293, 40.640763],
                zoom: 15,
                controls: ["zoomControl"],
            }}
                 width='100%'
                 height='50vh'

                 margin='30px'
                 modules={["control.ZoomControl"]}

            >
                <Placemark defaultGeometry={[64.463293, 40.640763]}/>
            </Map>
        </YMaps>
    )
}

export default YandexMaps