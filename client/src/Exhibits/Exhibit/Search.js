import './style/Search.css'

const Search = () => (
  <div className='Search'>
    <div className="input-group">
      <div className="form-outline">
        <input type="search" id="exhibitForm" className="form-control" disabled/>
        {/* <label className="form-label" htmlFor='exhibitForm'>Search</label> */}
      </div>
      <button type="button" className="btn btn-primary" disabled>
        Search
      </button>
    </div>
  </div>
)

export default Search