function importAll(r) {
    return r.keys().map(r);
}
const DsIMAGES = importAll(require.context('./images/ds', false, /\.(png|jpe?g|svg)$/));
const FsIMAGES = importAll(require.context('./images/fs', false, /\.(png|jpe?g|svg)$/));
const TbIMAGES = importAll(require.context('./images/tb', false, /\.(png|jpe?g|svg)$/));
const IpIMAGES = importAll(require.context('./images/ip', false, /\.(png|jpe?g|svg)$/));
const Services_ds = importAll(require.context('./images/Services-DS', false, /\.(png|jpe?g|svg)$/));
const Services_FS = importAll(require.context('./images/Services-FS', false, /\.(png|jpe?g|svg)$/));
const Services_G = importAll(require.context('./images/Services-G', false, /\.(png|jpe?g|svg)$/));
const Services_SD = importAll(require.context('./images/Services-SD', false, /\.(png|jpe?g|svg)$/));
const AboutPA = importAll(require.context('./images/About-PA', false, /\.(png|jpe?g|svg)$/));
const AboutLF = importAll(require.context('./images/About-LF', false, /\.(png|jpe?g|svg)$/));
const AboutEd = importAll(require.context('./images/About-Ed', false, /\.(png|jpe?g|svg)$/));
//const AboutPI = importAll(require.context('./images/About-PI', false, /\.(png|jpe?g|svg)$/));
const AboutmeTop = importAll(require.context('./images/About-Main', false, /\.(png|jpe?g|svg)$/));


export const contentData = [
    {
        id: 1,
        page: "portfolio",
        title: "Data Science",
        full_title:"Nature and Parks Authority (College Final Project) | 2022",
        description: (
            <>
                <p><strong>Built a predictive analytics system analyzing 400K+ daily entries that achieved 97% model accuracy despite COVID-19 data inconsistencies.</strong></p>

                <h3>Overview</h3>
                <p>Solo project developing prediction models and recommendation systems using big data analytics. Tackled real-world data chaos to deliver high-accuracy insights.</p>

                <h3>Tech Stack</h3>
                <p>Python, Pandas, NumPy, scikit-learn, Keras, MLR, Neural Networks, K-means Clustering</p>

                <h3>Data Sources</h3>
                <p>Daily entries, weather conditions, pollution levels, geo-location, temporal patterns (day of week, holidays), and more.</p>

                <h3>Key Challenges</h3>
                <ul>
                    <li>COVID-19 caused massive data inconsistencies, hampering model accuracy</li>
                    <li>K-means clustering highly sensitive to parameter changes</li>
                    <li>Most raw data unsuitable for ML without extensive preprocessing</li>
                </ul>

                <h3>Solutions & Impact</h3>
                <ul>
                    <li>Created an <strong>interactive automated tool</strong> for dynamic model creation and data selection</li>
                    <li>Accelerated the Data Life Cycle, enabling rapid iteration</li>
                    <li>Achieved <strong>97%+ prediction accuracy</strong> across models</li>
                </ul>

                <h3>Innovation</h3>
                <p>Developed a <u>novel K-means optimization function</u> combining Elbow and Silhouette tests to automatically identify optimal cluster values for superior recommendation quality.</p>
            </>
        ),
        imageUrls: DsIMAGES,
        bulletpoints: [
            "97% model accuracy on 400K+ entries",
            "Custom K-means optimization algorithm",
            "Full-stack ML pipeline (data → models → insights)"
        ]
    },
    {
        id: 2,
        page: "portfolio",
        title: "Data Analyst",
        full_title: "Israel Academy of Sciences | 2025",
        description: (
            <>
                <p><strong>Analyzed data from every higher education institute in Israel, creating 100+ visualizations for a government book report used by policymakers and academic leaders.</strong></p>

                <h3>Overview</h3>
                <p>Conducted comprehensive data analysis for a government-commissioned report examining all Israeli higher education institutions. Prepared datasets, engineered analytical pipelines, and created visual narratives using Python and Tableau.</p>

                <h3>Tech Stack</h3>
                <p>Python, Pandas, scikit-learn, Tableau</p>

                <h3>Key Challenges</h3>
                <ul>
                    <li>Large volume of unorganized datasets with significant missing values across institutions</li>
                    <li>Evolving research questions - analysis objectives not always defined upfront</li>
                    <li>Need for flexible visualizations supporting multiple interpretation angles</li>
                </ul>

                <h3>Solutions & Approach</h3>
                <ul>
                    <li>Built <strong>automated data preparation pipelines</strong> using Python, Pandas, and scikit-learn to clean and standardize diverse datasets</li>
                    <li>Designed <strong>100+ Tableau visualizations</strong> tailored to data types and research questions</li>
                    <li>Created flexible dashboards enabling exploration from multiple analytical perspectives</li>
                    <li>Ensured clarity and accessibility for non-technical stakeholders through thoughtful chart selection</li>
                </ul>

                <h3>Work Environment</h3>
                <p>6-month contract working directly with 2 professors to align on deliverables, refine research questions, and validate findings. Collaborative academic environment requiring clear communication and iterative refinement.</p>

                <h3>Impact</h3>
                <p>Delivered comprehensive analysis supporting a <strong>government book report</strong> on Israel's higher education landscape. Work contributed to policy decisions and institutional assessments. <br/>References available upon request.</p>
            </>
        ),
        imageUrls: TbIMAGES,
        bulletpoints: [
            "Analyzed all Israeli higher education institutions",
            "100+ Tableau visualizations for government report",
            "Python data pipelines (Pandas, scikit-learn)"
        ]
    },
    {
        id: 3,
        page: "portfolio",
        title: "Full-Stack Development",
        full_title: "Precision Data Ltd(Start-up) | 2024",
        description: (
            <>
                <p><strong>Built a backend monitoring system handling 100K+ live data points, ensuring accurate VPN usage tracking and data integrity.</strong></p>

                <h3>Overview</h3>
                <p>Developed a production-ready backend server from scratch to collect, store, and visualize real-time VPN heartbeat data from distributed PCs. Engineered the complete infrastructure including ETL pipelines, full React integration, AWS deployment, and real-time monitoring dashboards.</p>

                <h3>Tech Stack</h3>
                <p>Node.js, Express, PostgreSQL, React, Prometheus, Grafana, AWS</p>

                <h3>Key Challenges</h3>
                <ul>
                    <li>Reliance on third-party software for data collection, limiting direct access to precise metrics</li>
                    <li>Tight timeline with limited resources in an early-stage startup (4 senior developers total)</li>
                    <li>Need for seamless communication between company systems and external VPN business clients</li>
                </ul>

                <h3>Solutions & Contributions</h3>
                <ul>
                    <li>Worked in an <strong>Agile environment</strong>, delivering a production-ready backend with robust API integrations</li>
                    <li>Fully integrated backend with <strong>React frontend</strong> for seamless user experience</li>
                    <li><strong>Configured AWS infrastructure</strong> independently for scalable, reliable deployment</li>
                    <li>Implemented <strong>Prometheus</strong> for server monitoring and <strong>Grafana</strong> for real-time data visualization</li>
                    <li>Engineered the foundational project architecture and conducted market research to align with industry standards</li>
                    <li>Delivered presentations and collaborated closely with senior developers</li>
                </ul>

                <h3>Work Environment</h3>
                <p>4-month contract position working daily on-site in Herzliya, Israel. Collaborated closely with senior developers in a fast-paced startup environment.</p>

                <h3>Impact</h3>
                <p>Delivered a production system enabling <strong>immediate monitoring with easy configuration</strong>. The solution addressed a critical data accuracy issue where incorrect VPN usage data was being sold to third parties without proper validation. <br /><strong>References available upon request.</strong></p>
            </>
        ),
        imageUrls: FsIMAGES, // Replace with your images
        bulletpoints: [
            "Backend system handling 100K+ live data points",
            "Full-stack: Node.js + React + PostgreSQL + AWS",
            "Prevented data accuracy issues in client sales"
        ]
    },
    {
    id: 4,
    page: "portfolio",
    title: "Independent Projects",
    full_title: "Self-Directed Learning",
    description: (
        <>
            <p><strong>Built diverse projects independently to expand technical skills, increase development speed, and explore emerging technologies.</strong></p>
            
            <h3>AI Voice Transcript System</h3>
            <p>Developed an AI system that processes voice input and generates context-aware responses. Leveraged multiple Python libraries including Whisper for speech recognition and NLTK for natural language processing with stemming capabilities.</p>
            <p><strong>Tech:</strong> Python, Whisper, NLTK, NLP libraries</p>
            
            <h3>AI Customer Review Summarizer</h3>
            <p>Built a Flask backend server that analyzes and summarizes customer reviews, delivering concise insights to the frontend. Automates review analysis, potentially saving hours of manual reading time and accelerating customer support workflows.</p>
            <p><strong>Tech:</strong> Python, Flask, NLP/ML libraries</p>
            <p><strong>Impact:</strong> Automated time-intensive review analysis process</p>

            <h3>Game Preservation</h3>
            <p>Working remotely with the Uncharted Reload Team, to participate in the preservation of a popular game <strong>The Last of Us: Factions</strong></p>
            <p><strong>Tech:</strong> C#, Discord Management</p>
            <p><strong>Impact:</strong> Making game changes, perserving servers, fixing issues and ensuring community alignment as a top player.</p>
            
            <h3>Blackjack Game (C#)</h3>
            <p>Created a fully functional Blackjack game with visual interface in C#, completed in a single day as a coding speed challenge.</p>
            <p><strong>Tech:</strong> C#, Game UI</p>
            
            <h3>Learning Approach</h3>
            <p>These projects were self-initiated to deepen technical knowledge, improve programming velocity, and stay current with industry trends and emerging technologies. Each project tackled different domains (AI/ML, backend systems, game development) to build versatile problem-solving skills.</p>
        </>
    ),
    imageUrls: IpIMAGES, 
    bulletpoints: [
        "PyAI voice transcription with context-aware responses",
        "Python(Flask) backend for automated review summarization",
        "Game Preservation and Rapid prototyping"
    ]
},

    // Service 1
    {
        id: 1,
        page: "services",
        title: "Full-Stack Development",
        full_title: "Backend development with modern frontend knowledge and design",
        description: (
            <>
                <h3>What I Offer</h3>
                <p>End-to-end development of scalable web applications, from raw server architecture to polished frontend experiences. My strength isn't just coding; it's <strong>knowing what to build and architecting it correctly</strong> for your specific needs.</p>

                <h3>Technical Capabilities</h3>
                <ul>
                    <li><strong>Backend:</strong> Node.js (Express), C# .NET, RESTful APIs, authentication & security</li>
                    <li><strong>Frontend:</strong> React, JavaScript, HTML, CSS, responsive design systems</li>
                    <li><strong>Infrastructure:</strong> AWS, Docker, Linux, Git workflows</li>
                    <li><strong>Data:</strong> ETL pipelines, database design, data integrity</li>
                </ul>

                <h3>My Approach</h3>
                <p>I want to build systems that <strong>push the industry forward</strong>. Every project is an opportunity to create something maintainable, scalable, and future-proof. Whether you need a monitoring dashboard, API integration, or complete web platform, I architect solutions that align with business goals.</p>

                <h3>Ideal For</h3>
                <p>Startups needing rapid MVPs, companies scaling existing systems, or businesses requiring custom web applications with robust backend infrastructure.</p>
            </>
        ),
        imageUrls: Services_FS,
        bulletpoints: [
            "Full-stack: React + Node.js/C# + AWS",
            "System architecture & API design",
            "Scalable, production-ready solutions"
        ]
    },

    // Service 2
    {
        id: 2,
        page: "services",
        title: "Data Science & Engineering",
        full_title:"Formal studies and advanced knowledge in Big Data Engineering",
        description: (
            <>
                <h3>What I Offer</h3>
                <p>Transform raw data into actionable insights. I handle the complete data lifecycle; from pipeline engineering to machine learning models to compelling visualizations.</p>

                <h3>Educational Foundation</h3>
                <p>BSc in Computer Science with specialization in <strong>Big Data Engineering</strong>. Studied advanced SQL, database design (ERD), MongoDB, machine learning, advanced statistics, and data visualization best practices. Completed a year-long real-world data project.</p>

                <h3>Technical Capabilities</h3>
                <ul>
                    <li><strong>Data Engineering:</strong> ETL pipelines, database design, data integrity & validation</li>
                    <li><strong>Analysis & ML:</strong> Python (Pandas, scikit-learn), statistical modeling, predictive analytics</li>
                    <li><strong>Visualization:</strong> Tableau, Grafana, data storytelling for stakeholders</li>
                    <li><strong>Big Data:</strong> Advanced SQL, NoSQL (MongoDB), distributed systems</li>
                </ul>

                <h3>My Approach</h3>
                <p>I tackle large datasets systematically, ensuring <strong>data integrity, optimal storage, and clear visualization</strong> at every stage. Whether cleaning messy data, building ML models, or creating executive dashboards, I extract maximum value while maintaining rigorous standards.</p>

                <h3>Ideal For</h3>
                <p>Businesses with untapped data potential, companies needing ML/AI integration, or organizations requiring analytics infrastructure and insights.</p>
            </>
        ),
        imageUrls: Services_ds,
        bulletpoints: [
            "Big Data pipelines & ML models",
            "Python, SQL, Tableau, MongoDB",
            "Full data lifecycle expertise"
        ]
    },

    // Service 3
    {
        id: 3,
        page: "services",
        title: "Game Development",
        full_title:"Over 25 years of mastering games on a daily-basis, with project experience and high passion",
        description: (
            <>
                <h3>My Vision</h3>
                <p><strong>My dream is to create Israel's first AAA game</strong> and I believe I can, given the right opportunity. Let's build it together.</p>

                <h3>Background</h3>
                <p>I'm a <strong>gamer at heart</strong>. My game development knowledge doesn't come from engine documentation alone; it comes from decades of studying games as I played them, even from a young age. I understand what makes games compelling because I've lived it.</p>

                <h3>My Unique Approach</h3>
                <p>While I don't have years in traditional game engines, I bring something rarer: deep understanding of <strong>player psychology, engagement mechanics, and what makes games feel good</strong>. I know how to code systems that not only run smoothly but create:</p>
                <ul>
                    <li><strong>Animation fluency</strong> that players want to repeat</li>
                    <li><strong>Fulfillment loops</strong> that are genuinely pro-player</li>
                    <li><strong>Engagement mechanics</strong> grounded in cognitive science</li>
                </ul>

                <h3>What I Bring</h3>
                <p>I combine my BSc in Computer Science, full-stack development expertise, data science skills, and profound gaming knowledge. Gaming offers enormous cognitive benefits, and I want to push this industry forward in Israel.</p>

                <h3>Ideal For</h3>
                <p>Studios looking for developers who understand games from a player's perspective, teams building gameplay systems, or partners ready to create something groundbreaking in Israel's gaming industry.</p>
            </>
        ),
        imageUrls: Services_G,
        bulletpoints: [
            "Deep player psychology & engagement design",
            "CS degree + full-stack + data science",
            "Vision: Israel's first AAA game"
        ]
    },

    // Service 4
    {
        id: 4,
        page: "services",
        title: "Software Development & Algorithms",
        full_title:"My strength is knowing how to program efficiently and correctly",

        description: (
            <>
                <h3>What I Offer</h3>
                <p>Elegant solutions to complex computational problems. My strength is <strong>algorithm design</strong>, turning challenging requirements into efficient, maintainable code.</p>

                <h3>Academic Excellence</h3>
                <p>During my BSc, algorithm design was my standout strength. I excelled in notoriously difficult courses; <strong>Algorithms, Data Structures, Computational Complexity</strong>, often becoming the go-to person in lectures for explaining tough concepts.</p>

                <h3>Technical Capabilities</h3>
                <ul>
                    <li><strong>Algorithm Design:</strong> Optimization, complexity analysis, efficient problem-solving</li>
                    <li><strong>Data Structures:</strong> Custom implementations, performance tuning</li>
                    <li><strong>Languages:</strong> Fluent in multiple paradigms (Python, JavaScript, C#, C++, and more)</li>
                    <li><strong>Modern Tools:</strong> Git, Docker, CI/CD, testing frameworks</li>
                </ul>

                <h3>My Approach</h3>
                <p>I don't just write code that works; I write code that's <strong>optimal, readable, and scalable</strong>. Whether building core system logic, optimizing performance bottlenecks, or architecting complex workflows, I bring computer science fundamentals to every line of code.</p>

                <h3>Ideal For</h3>
                <p>Projects requiring algorithmic optimization, companies building computationally intensive systems, or teams needing strong software engineering foundations and problem-solving expertise.</p>
            </>
        ),
        imageUrls: Services_SD,
        bulletpoints: [
            "Expert in algorithms & data structures",
            "Multi-language fluency (Python, C#, JS, C++)",
            "Optimization & computational problem-solving"
        ]
    },
    {
    id: 0,
    page: "about",
    title: "Tal Golan",
    full_title:"About Me",
        description: (
            <>
                <p><strong>Computer Science and Information BSc graduate.</strong></p>

                <p>My passion for gaming since a young age led me into development. Even while playing games, I constantly thought about how they were built and how they could be done much better. Being a top player and a know-it-all in the field of gaming has followed my name my entire life.</p>

                <h3>Journey</h3>
                <p>I started studying Computer Science in high school and immediately fell in love with the concept of <strong>creation</strong>. Suddenly, my passion for gaming and development combined. I dove deep into game development; from initial concepts to designing attributes with game engines to even creating game engines from scratch. <strong>My goal was always to lead Israel's first AAA studio.</strong></p>

                <p>I wanted to explore how to perfect gaming by beating games and being the very best at something. My skills in FPS/TPS gaming proved to be <strong>extraordinary and world-class</strong>. I competed in esports until 2017, primarily in <em>The Last of Us Factions</em>.</p>

                <p>In 2018, I started studying at The Open University; courses in math, physics, and basic programming. In 2019, I transferred to Ruppin Academic Center when a new innovative program on <strong>Big Data Engineering alongside Computer Science</strong> caught my attention. Games are highly reliant on data, and this specialization aligned perfectly with my vision.</p>

                <h3>Today</h3>
                <p>I bring recommendations from senior developers I've worked with and am looking for my first full-time position in the industry (beyond freelance work). I'm ready to put everything I've learned to good use, keep learning, and lead the aspects of the industry where I excel.</p>
            </>
    ),
    imageUrls: AboutmeTop,
    bulletpoints: [
        "BSc Computer Science graduate",
        "Full-Stack & Data Science",
        "Former #1 esports team leader"
    ]
},
    // Card 1 - about me
    {
        id: 1,
        page: "about",
        title: "Education",
        full_title:"Education",
        description: (
            <>
                <h3>BSc in Computer Science & Information Systems</h3>
                <p><strong>2019-2022 | Ruppin Academic Center</strong><br />
                    Specialization: Big Data Engineering, Data Science, Machine Learning, AI</p>

                <p>I began at the Open University of Israel with a 97 average before transferring to Ruppin Academic Center for an innovative program designed by Silicon Valley professors. This intensive 3-year curriculum compressed comprehensive CS education with Big Data specialization into a high-pressure, accelerated format.</p>

                <h3>Core Studies</h3>
                <p>Advanced mathematics & statistics, data structures & algorithms, optimization theory, cybersecurity, multiple programming languages (Python, C#, Java, C++, JavaScript)</p>

                <h3>Specialization</h3>
                <p>Database design (ERD, advanced SQL), Python for data analysis, data science theory, data engineering pipelines, machine learning fundamentals</p>

                <h3>Capstone Project</h3>
                <p>Built a comprehensive system integrating the entire curriculum; full-stack development, big data processing, ML models, and database architecture in a single real-world application.</p>
            </>
        ),
        imageUrls: AboutEd,
        bulletpoints: [
            "BSc Computer Science (2019-2022)",
            "Big Data Engineering specialization"
        ]
    },

    // Card 2 - Professional Interests
    {
        id: 2,
        page: "about",
        title: "Key Attributes & Professional Interests",
        full_title: "Key Attributes & Professional Interests",
        description: (
            <>
                <h3>Data Science & Engineering</h3>
                <p>Passionate about extracting insights from complex datasets and building robust data infrastructure. I thrive on turning messy, real-world data into actionable intelligence through ETL pipelines, machine learning models, and compelling visualizations.</p>

                <h3>Game Development</h3>
                <p>Gaming isn't just a hobby—it's been my training ground. As a <strong>former #1-ranked esports player and team leader</strong>, I learned to analyze game mechanics at a granular level, understand player psychology, and lead teams under intense pressure. I bring this player-first perspective to development, creating experiences that resonate because I understand them from the inside.</p>

                <h3>Software Development & AI</h3>
                <p>Fascinated by algorithmic problem-solving and building intelligent systems. Whether optimizing performance, designing elegant architectures, or integrating AI capabilities, I'm driven by creating software that pushes boundaries.</p>

                <h3>Rapid Learning & Adaptability</h3>
                <p>My accelerated degree proved what I've always known: <strong>I master new topics with exceptional speed</strong>. Whether learning a new framework, diving into unfamiliar domains, or adapting to emerging technologies, I thrive on fast-paced learning environments.</p>

                <h3>Communication & Collaboration</h3>
                <p><strong>Fluent in English and Hebrew</strong> (daily English usage). Years of communicating with thousands of players globally—from casual conversation to high-pressure competitive scenarios—honed my ability to articulate complex ideas clearly and collaborate effectively across cultures.</p>

                <h3>Team-First Mentality</h3>
                <p>Esports taught me the ultimate lesson: <strong>the team and the goal come first</strong>. I bring this mindset to every project, prioritizing collective success, staying focused on what matters, and doing whatever it takes to achieve exceptional results.</p>

                <h3>Integrity & Kindness</h3>
                <p>Honesty and kindness have guided me throughout my life. I believe the best work happens when people trust each other, communicate openly, and genuinely care about the outcome and each other.</p>
            </>
        ),
        imageUrls: AboutPA,
        bulletpoints: [
            "Data Science, Game Dev & AI expertise",
            "Former #1 esports player & team leader",
            "Rapid learner, bilingual, team-first mindset"
        ]
    },

    // Card 4 - What I'm Looking For
    {
        id: 4,
        page: "about",
        title: "What I'm Looking For",
        full_title: "What I'm Looking For",
        description: (
            <>
                <h3>Meaningful Impact</h3>
                <p>I'm seeking opportunities where I can make <strong>real impact</strong>; whether that's building data infrastructure that unlocks business insights, creating engaging player experiences, or architecting systems that solve genuine problems.</p>

                <h3>Ideal Fit</h3>
                <p>Teams that value:</p>
                <ul>
                    <li><strong>Initiative:</strong> People who take ownership and drive results</li>
                    <li><strong>Learning agility:</strong> Fast-paced environments where growth is expected</li>
                    <li><strong>Collaborative problem-solving:</strong> Teams that build together</li>
                </ul>

                <p><strong>Bonus points if you're working on:</strong></p>
                <ul>
                    <li>Gaming (especially AAA or innovative indie projects)</li>
                    <li>AI/ML applications with real-world impact</li>
                    <li>Data-driven products that change how businesses operate</li>
                </ul>

                <h3>My Approach</h3>
                <p>I'm not just looking for a job, <strong>I'm looking for a mission I can invest in fully</strong>. I want to work with people who care deeply about what they're building and are willing to push boundaries to make it exceptional.</p>

                <p>If you're building something ambitious and need someone who brings technical skills, rapid learning, and genuine passion, let's talk.</p>
            </>
        ),
        imageUrls: AboutLF,
        bulletpoints: [
            "Seeking opportunities in a full-time position",
            "Ideal: Gaming, AI/ML, or data products",
            "Want to invest fully in something ambitious"
        ]
    },
    { id: 9, page: "contact", text: "+972 0502669532", title: "Phone" },
    { id: 6, page: "contact", text: "talgolanw@gmail.com", title: "Email" },
    { id: 4, page: "contact", link: "https://www.linkedin.com/in/tal-golan-888bb7230/", title:"LinkedIn"},
    { id: 5, page: "contact", link: "https://github.com/talfx", title:"GitHub"},
    { id: 7, page: "contact", link: "https://www.youtube.com/@TalFx", title:"YouTube" },
    { id: 10, page: "contact", link: "/Tal Golan's Resume.pdf", title: "Download Resume" }
]

