import PropTypes from 'prop-types';

const Search = ({placeholder, inputClassName, spanClassName}) => {
  return (
    <span className={spanClassName}>
      <svg
        className="flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_2808_2526)">
          <path
            d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
            fill="#808080"
          />
        </g>
        <defs>
          <clipPath id="clip0_2808_2526">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        type="search"
        className={inputClassName}
        name=""
        placeholder={placeholder}
        id=""
      />
    </span>
  );
};

export default Search;

Search.propTypes = {
    placeholder : PropTypes.string,
    inputClassName : PropTypes.string,
    spanClassName : PropTypes.string

}