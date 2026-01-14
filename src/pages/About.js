import { Card } from "../components/card";
import '../FilesCss/page-wrapper.css';
import {contentData} from "../content/contentData";

export function About() {
    const aboutItems = contentData.filter(item => item.page === "about");
    const introCard = contentData.find(item => item.id === 0);
    return (
        <div className='page-wrapper about'>
            {/* Intro card first */}
            <div className='intro-card-wrapper'>
                <Card

                    key={introCard.id}
                    title={introCard.title}
                    full_title={introCard.full_title}
                    description={introCard.description}
                    bulletpoints={introCard.bulletpoints}
                    imageUrls={introCard.imageUrls}
                />
            </div>

            {/* Then regular cards */}
            {aboutItems.map(item => (
                <Card key={item.id} full_title={item.full_title} title={item.title} description={item.description} bulletpoints={item.bulletpoints} imageUrls={item.imageUrls} />
            ))}
        </div>
    );
}
