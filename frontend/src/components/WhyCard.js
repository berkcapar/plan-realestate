const WhyCard = ({ whyItem }) => {
  return (
    <div className="why-card">
      <img className="why-card-image" alt="why-turkey" src={whyItem.imageUrl} />
      <h3 className="why-card-header">{whyItem.header}</h3>
      <p className="why-card-text">{whyItem.text}</p>
      <p className="why-card-learn-more">Learn More <i class="fas fa-arrow-right"></i>
      </p>
    </div>
  );
};
export default WhyCard;
