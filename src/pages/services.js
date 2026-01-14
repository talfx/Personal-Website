import { Card } from "../components/card";
import '../FilesCss/card.css';
import {contentData} from "../content/contentData";

export function Services() {
     const servicesItems = contentData.filter(item => item.page === "services"); 
    return (
        <div className='page-wrapper'>
            {servicesItems.map(item => (
                <Card key={item.id} title={item.title} full_title={item.full_title} description={item.description} bulletpoints={item.bulletpoints} imageUrls={item.imageUrls} />
            ))}
        </div>
    );
}