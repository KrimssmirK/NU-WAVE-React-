const ProductDetail = props => {
    const titleStyle = { color: 'grey' }
    const contentStyle = { fontWeight: 'bolder' }
    return (
      <div className="col-md-6 lh-lg">
        <div>
          <span className="fw-bold" style={titleStyle}>Product name: </span>
          <span style={contentStyle}>{props.product_name}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Innovators: </span>
          <span style={contentStyle}>{props.members}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Intellectual Property: </span>
          <span style={contentStyle}>{props.intellectual_property}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Social impact: </span>
          <span style={contentStyle}>{props.social_impact}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Output: </span>
          <span style={contentStyle}>{props.output}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Mentors: </span>
          <span style={contentStyle}>{props.mentors}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Faculty in charge: </span>
          <span style={contentStyle}>{props.faculty_in_charge}</span>
        </div>
        <div>
          <span className="fw-bold" style={titleStyle}>Campus: </span>
          <span style={contentStyle}>{props.campus}</span>
        </div>
        <button 
          className="purchase-btn mt-5 btn" 
          data-bs-toggle="modal" 
          data-bs-target="#contact-form"
        >
          Buy
        </button>
      </div>
    )
  }

export default ProductDetail