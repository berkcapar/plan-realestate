import WhyCard from '../WhyCard'


const WhyPlanEmlakArea = ({whyItems}) =>{
    return(
        <div id="why-plan-emlak-area">
            <h1>Trustworthy and Service Oriented Process</h1>
            {whyItems.map((whyItem)=><WhyCard key={whyItem.id} whyItem={whyItem}/>)}
        </div>

    )
}
export default WhyPlanEmlakArea