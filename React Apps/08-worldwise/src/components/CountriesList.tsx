import { useWorldWiseStore } from "../store/useWorldWiseStore";
import CountryItem, { type Country } from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CountriesList() {
  const { cities, isLoading } = useWorldWiseStore();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Visit Your first Country by Adding New City To List 🗺️" />;
  const countries: Country[] = cities.reduce((arr: Country[], city) => {
    if (!arr.some((country) => country.country === city.country)) {
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
