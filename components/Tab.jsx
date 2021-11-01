import PropTypes from 'prop-types'

function Tab({title, active, children}) {

  return (
    <>
      {children}
    </>
  )
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default Tab
