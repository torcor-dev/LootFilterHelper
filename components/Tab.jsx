import PropTypes from 'prop-types'

function Tab({title, active, children}) {
  console.log(children[0].props)

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
