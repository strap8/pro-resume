import React from "react"
import PropTypes from "prop-types"
import { connect } from "../../store/provider"

const mapStateToProps = ({
  Window: {
    screen: { availHeight, availWidth },
  },
}) => ({
  height: availHeight,
  width: availWidth,
})

const ViewPortContainer = ({ height, width, className, children }) => {
  const containerStyles = { height, width }
  return (
    <div className={className} style={containerStyles}>
      {children}
    </div>
  )
}

ViewPortContainer.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ViewPortContainer.defaultProps = {
  className: "ViewPortContainer",
}

export default connect(mapStateToProps)(ViewPortContainer)
