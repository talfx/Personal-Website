import { Card } from "../components/card";
import '../FilesCss/page-wrapper.css';
import {contentData} from "../content/contentData";

export function About() {
    const aboutItems = contentData.filter(item => item.page === "about");
    return (
        <div className='page-wrapper about'>
            {aboutItems.map(item => (
                <Card key={item.id} full_title={item.full_title} title={item.title} description={item.description} bulletpoints={item.bulletpoints} imageUrls={item.imageUrls} />
            ))}
        </div>
    );
}
