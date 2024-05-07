// Write your code here
import {component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'
class DestinationSearch extends component {
  state = {searchInput: ''}
  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input
            type="search"
            onChange={this.onSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="destinations-list">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
