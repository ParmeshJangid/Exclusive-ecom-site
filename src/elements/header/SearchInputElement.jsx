// Import necessary modules and components
import debounce from "lodash/debounce";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useCallback, useEffect } from "react";
import { getInputResult } from "../../redux/action/productAction";
import SpinnerLoading from "../../features/loading/SpinnerLoading";

// Define the SearchInputElement functional component
const SearchInputElement = () => {
  // Initialize Redux dispatch and navigate functions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize local state variables
  const [results, setResults] = useState([]);
  const [closeInput, setCloseInput] = useState(false);
  const [searchParams, setSearchParams] = useState("");

  // Access Redux state using useSelector hook
  const { inputResults, loading } = useSelector((state) => state.inputResults);

  // Define event handlers
  const handleInput = (event) => {
    setCloseInput(true);
    setSearchParams(event.target.value);
  };

  const handleSearchClick = (searchParams) => {
    setCloseInput(false);
    navigate(`/product/search/${searchParams}`);
  };

  // Debounce the search input to avoid excessive API calls
  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(getInputResult(searchParams));
    }, 500),
    []
  );

  const handleSearchEnter = () => {
    navigate(`/product/search/${searchParams}`);
  };

  // Run effects
  useEffect(() => {
    setResults(inputResults);
  }, [inputResults]);

  useEffect(() => {
    if (searchParams) {
      setResults([]);
      debounceSearch(searchParams);
    }
  }, [searchParams, debounceSearch]);

  // Render the JSX markup
  return (
    <div className="w-full md:max-w-[450px] lg:max-w-[550px] flex flex-row items-center relative">
      <form onSubmit={handleSearchEnter} className="flex w-full items-center">
        <input
          type="search"
          className="block outline-none w-full py-2 px-2 md:px-5 text-sm text-gray-900 border border-gray-300 rounded-lg "
          placeholder="Search for products you're interested in"
          value={searchParams}
          onChange={handleInput}
          required
        />
        <MdSearch className="absolute right-3 cursor-pointer" />
      </form>

      <div
        className={`${
          searchParams && closeInput ? "h-auto" : "h-0"
        } absolute md:max-h-[300px] rounded-md top-12 bg-white shadow-xl transition-all duration-300 w-full overflow-y-auto `}
      >
        <div className="flex flex-col gap-y-4 py-4 px-4">
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <SpinnerLoading />
            </div>
          ) : (
            results.map((result, index) => {
              return (
                <button
                  onClick={() => handleSearchClick(result.title)}
                  className="flex items-center"
                  key={index}
                >
                  {result.title.slice(0, 30) + "..."}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

// Export the SearchInputElement component
export default SearchInputElement;