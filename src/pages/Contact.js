import { BasicCard } from '../components/basic-Card';
import { contentData } from '../content/contentData';
import '../FilesCss/card.css'

export function Contact() {
    const contactItems = contentData.filter(item => item.page === "contact");

    return (
        <div className='page-wrapper contact'>
                {contactItems.map(item => (
                    <BasicCard key={item.id}  title= {item.title} link={item.link} text={item.text} />
                ))}
        </div>
    );
}