const WhyCard = ({whyItem}) => {
    return (
        <div>
           <img alt="why-turkey" src={whyItem.image}/>
           <h3>{whyItem.header}</h3>
           <p>{whyItem.text}</p>
           <p>Learn More</p>
        </div>
    )
}
export default WhyCard