const HighlightCard = () => {
  return (
    <div className="highlightcard">
      <img />
      <div className="highlightcard-textbox">
        <div className="highlightcard-details">
          <p>
            <strong>Title:</strong>
            {}
          </p>
          <p>
            <strong>City:</strong>
            {}
          </p>
          <p>
            <strong>Price:</strong>
            {}
          </p>
          <p>
            <strong>m2:</strong>
            {}
          </p>
        </div>
        <div className="highlightcard-contact-area">
        <a>Contact!</a>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
