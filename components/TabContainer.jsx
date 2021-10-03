import { useState } from "react"
import buttonStyles from '../styles/components/ToggleButton.module.css' 

function TabContainer({children, onTabChange}) {
  const [tabs] = useState(children.map(child => child.props.title))
  const [activeTab, setActiveTab] = useState(
    children.find(child => child.props.active) ? 
    children.find(child => child.props.active).props.title : null
  )

  function onClick(e) {
    setActiveTab(e.target.innerText)
  }

  return (
    <div className="">
      <div className="flex gap-1 pb-1 mb-2">
      {tabs.map(tab => (
          <button 
            onClick={onClick} 
            className={
              buttonStyles.button 
              + " h-4 " 
              + (tab === activeTab ? buttonStyles.buttonTabSelected : "")
            } 
            key={tab}
          >
            {tab}
          </button>
        )
      )}
      </div>
      <div>
      {children.map((child, idx) => {
        if (activeTab && child.props.title === activeTab) {
          return <div key={`tabChild${idx}`}>{child}</div>
        } else {
          return <div key={`tabChild${idx}`} className="hidden">{child}</div>
        }

      })}
      </div>
    </div>
  )
}

export default TabContainer
