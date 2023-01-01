import {Component} from 'react'
import HistoryListItem from '../HistoryListItem'
import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onDeletionList = id => {
    const {historyList} = this.state
    const deletedFilteredList = historyList.filter(each => each.id !== id)
    this.setState({historyList: deletedFilteredList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.filterHistoryList()

    return (
      <div>
        <nav className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo-size"
          />
          <div className="search-icon-container">
            <div className="icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon-size"
              />
            </div>
            <input
              type="search"
              className="input-element"
              placeholder="Search history"
              onChange={this.onSearchInput}
              value={searchInput}
            />
          </div>
        </nav>
        <div className="bottom-bg-container">
          <div className="card-continer">
            {filteredHistoryList.length === 0 ? (
              <p>There is no search history</p>
            ) : (
              <ul className="unordered-list-container">
                {filteredHistoryList.map(eachList => (
                  <HistoryListItem
                    listItems={eachList}
                    key={eachList.id}
                    onDeletionList={this.onDeletionList}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
