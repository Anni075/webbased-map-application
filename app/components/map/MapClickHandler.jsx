import { useMapEvent } from "react-leaflet";

export default function MapClickHandler(props) {
  const map = useMapEvent("click", (e) => {
    props.clickHandler(e.latlng);
  });
}
