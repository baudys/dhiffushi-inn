'use client'

import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-fullscreen/styles.css'
import { FullscreenControl } from 'react-leaflet-fullscreen'
import { useLanguage } from '@/store/use-language'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

const createEmojiIcon = (emoji: string) => {
  const iconHTML = `<div class="emoji-icon text-[17px]">${emoji}</div>`
  return L.divIcon({
    html: iconHTML,
    className: 'custom-icon',
  })
}

const Map = () => {
  const { language } = useLanguage()

  return (
    <MapContainer
      center={[4.441939755519695, 73.71358547603305] as L.LatLngExpression}
      zoom={16}
      attributionControl={false}
      scrollWheelZoom={false}
      className='rounded-lg h-[400px] xl:h-[500px]'
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <FullscreenControl />

      <Marker
        position={[4.439719537076376, 73.71251527465553]}
        icon={createEmojiIcon('🏠')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-lg font-bold'>
            {language === 'cz' && 'Starý Penzion'}
            {language === 'en' && 'Old Guesthouse'}
          </h3>
        </Popup>
      </Marker>
      <Marker
        position={[4.4396446605776285, 73.71273387468673]}
        icon={createEmojiIcon('🏠')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-lg font-bold'>
            {language === 'cz' && 'Nový Penzion'}
            {language === 'en' && 'New Guesthouse'}
          </h3>
        </Popup>
      </Marker>
      <Marker
        position={[4.439585337905123, 73.71181970228994]}
        icon={createEmojiIcon('🏖️')}
        eventHandlers={{
          mouseover: event => event.target.openPopup(),
        }}
      >
        <Popup>
          <h3 className='text-lg font-bold'>
            {language === 'cz' && 'Soukromá Pláž'}
            {language === 'en' && 'Private Beach'}
          </h3>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
