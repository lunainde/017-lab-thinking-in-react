function SearchBar({ filterText, onFilterChange }) {
    return (
        <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={onFilterChange} // This triggers on every keystroke
        />
    );
}
export default SearchBar