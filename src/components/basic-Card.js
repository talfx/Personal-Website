import '../FilesCss/card.css';

export function BasicCard({ title, link, text }) {
    
    return (
            <div className='basic-card-container'>
                <h2 className='card-title'>{title}</h2>
                {link ? ( 
                <button
                    className='basic-card-button'
                    onClick={() => window.open(link, '_blank')}
                >
                    Link
                 </button>
                    ) :(
                        <p> {text}</p>
                    )
                }
            </div>    
    );
}