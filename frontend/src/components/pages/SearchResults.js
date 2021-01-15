import { useSelector } from "react-redux";
import SingleSearchItem from "../../components/SingleSearchItem";

const SearchResults = () => {
  const searchedproperties = useSelector((state) => state.search);
  console.log(searchedproperties);
  return (
    <div>
      {searchedproperties.map((property) => (
        <SingleSearchItem property={property} />
      ))}
    </div>
  );
};
export default SearchResults;
