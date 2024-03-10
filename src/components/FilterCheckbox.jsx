function FilterCheckbox({ inStockOnly, onInStockChange }) {
    return (
        <div>
            <input
            type="checkbox"
            checked={inStockOnly}
            onChange={onInStockChange}
            />
            <label>Only show products in stock</label>
        </div>
    );
}
export default FilterCheckbox;