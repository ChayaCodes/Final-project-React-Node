import './SortBy.css'
const SortBy = (payload) => {
  return (
    <div className="sort-by">
        <select name="sort-by" id="sort-by" onChange={payload.onChange}>
            <option value="0">מיין לפי</option>
            {payload.sortByOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
  )
}

export default SortBy