import './index.css'

const TabItem = props => {
  const {data, active, changeActiveTab} = props
  const {tabId, displayText} = data

  const onChangeTabId = () => {
    changeActiveTab(tabId)
  }

  return (
    <button
      onClick={onChangeTabId}
      className={active ? 'tab-button active-tab' : 'tab-button'}
      type="button"
    >
      {displayText}
    </button>
  )
}
export default TabItem
