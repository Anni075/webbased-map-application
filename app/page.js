import styles from "./page.module.css";

//importing Map
import Map from "./components/map";

export default function Home() {
  return (
    <main>
      <Map />
      <div className="info-text">
        <h2>Funktionalitäten</h2>
        <ul>
          <li>
            Bewegung auf der Karte erfolgt durch Halten der linken Maustaste und
            Bewegung der Maus
          </li>
          <li>
            Herauszoomen und Heranzoomen auf der Karte erfolgt durch das Mausrad
          </li>
          <li>
            Setzen von Markern auf der Karte durch Klick per linker Maustaste
            (dabei gibt es keine Anzahl-Limits)
          </li>
          <li>
            Öffnen von zu den Markern gehörigen Popups durch Linksklick auf die
            Marker
          </li>
        </ul>
      </div>
    </main>
  );
}
