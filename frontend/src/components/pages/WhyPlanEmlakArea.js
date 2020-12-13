import WhyCard from '../WhyCard'


const WhyPlanEmlakArea = ({whyItems}) =>{
    return(
        <div id="why-plan-emlak" className="why-plan-emlak-area">
            <h1 class="why-plan-emlak-text">Trustworthy and Service Oriented Process</h1>
            <div className="why-card-container">{whyItems.map((whyItem)=><WhyCard key={whyItem.id} whyItem={whyItem}/>)} </div>        
        </div>

    )
}
export default WhyPlanEmlakArea