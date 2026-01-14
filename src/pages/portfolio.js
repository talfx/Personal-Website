import { Card } from "../components/card";
import '../FilesCss/card.css';
import {contentData} from "../content/contentData";

export function Portfolio() {
     const portfolioItems = contentData.filter(item => item.page === "portfolio"); 
    return (
        <div className='page-wrapper'>
            {portfolioItems.map(item => (
                <Card key={item.id} title={item.title} full_title={item.full_title} description={item.description} bulletpoints={item.bulletpoints} imageUrls={item.imageUrls} />
            ))}
        </div>
    );
}