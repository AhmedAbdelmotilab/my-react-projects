import { useWorldWiseStore } from "../store/useWorldWiseStore";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CityList() {
  const { cities, isLoading } = useWorldWiseStore();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add Your first city by clicking on the city on the map 🗺️" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
