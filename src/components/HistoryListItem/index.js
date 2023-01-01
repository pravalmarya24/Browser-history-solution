import './index.css'

const HistoryListItem = props => {
  const {listItems, onDeletionList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listItems

  const onDelete = () => {
    onDeletionList(id)
  }

  return (
    <li className="list-container">
      <div className="flex-container">
        <p className="time-para">{timeAccessed}</p>
        <div className="domain-logo-container">
          <img src={logoUrl} alt="domain logo" className="img-size" />
          <p className="titlt-para">{title}</p>
          <p className="domain-para">{domainUrl}</p>
        </div>
        <button
          className="delete-container"
          type="button"
          onClick={onDelete}
          id="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="img-delete-size"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryListItem
