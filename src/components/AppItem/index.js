import './index.css'

const AppItem = props => {
  const {app} = props
  return (
    <li className="app-item-container">
      <img className="app-image" src={app.imageUrl} alt={app.appName} />
      <p className="app-name">{app.appName}</p>
    </li>
  )
}
export default AppItem
