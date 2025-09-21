// Vaibhav K Madhyastha - Pure JavaScript Portfolio (No HTML)
// This creates everything programmatically using only JavaScript

class VaibhavPortfolio {
    constructor() {
        this.currentSection = 'about';
        this.sections = ['about', 'hobbies', 'education', 'city', 'anime'];
        this.data = this.initializeData();
        this.elements = {};
        this.init();
    }

    initializeData() {
        return {
            profile: {
                name: "Vaibhav K Madhyastha",
                tagline: "Tech Enthusiast | CS Student | Anime Lover | Explorer",
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUWGB8XGRgXGRgYHxcYGhgXGR8YHRsdHSggHx0lHRgXITEhJSkrLi4uGCA1ODMtNygtLisBCgoKDg0OGxAQGy0mICY1LS4tNS0tLSsvMi0tLS0tLS0rLS0tLS0vLS0tLy0vLS0tNzItLy0vLS0tLS0tLS0vLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACIgnBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABFEAACAQIEAwUECAQFAwMFAQABAgMEEQASITEFQVEGEyJhcTJSgZEHFCNCYqGxwTNy0fAVgpKi4SRTwhZDYyU0RHPDCP/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFAAYH/8QAMhEAAgEDAwIDBwMFAQEAAAAAAQIAAxEhBBIxQfATUWEFInGBkbHRocHxFCMyQuGCM//aAAwDAQACEQMRAD8A6TRurlhItn5sBY/5l2v56Ypce4azzwG2aGNGa42EhyKCehyl/nir2T4vUSu8Eyd5JBZXbRSVbVXB6NY6a6qw5YZaqjOeKRD4lBe52yrAGxF9dNNbYliIsYN7Tc7nHRTMTtF"
            },
            sections: {
                about: {
                    title: "About Me",
                    content: "Welcome to my digital realm! I'm Vaibhav K Madhyastha, a passionate Computer Science student and technology enthusiast currently pursuing my CS UG degree at PES College. I have an insatiable curiosity for technological developments and love exploring how innovation shapes our world. When I'm not coding or diving deep into algorithms, you'll find me conquering mountain trails, getting lost in captivating books, or binge-watching epic anime series. I believe in continuous learning and always strive to stay at the forefront of tech trends while maintaining a perfect balance with my adventurous hobbies and creative pursuits."
                },
                hobbies: {
                    title: "My Passions",
                    items: [
                        {
                            title: "Mountain Hiking",
                            icon: "🏔️",
                            description: "There's pure magic in conquering peaks and breathing crisp mountain air! Hiking isn't just exercise for me - it's meditation, adventure, and my ultimate escape from screens. Every trail tells a story, and I love being part of that narrative."
                        },
                        {
                            title: "Voracious Reading", 
                            icon: "📚",
                            description: "Books are my portals to infinite universes! From sci-fi epics to technical documentation, philosophy to fiction - I devour knowledge in all its forms. Reading shapes my perspective and fuels my imagination daily."
                        },
                        {
                            title: "Tech Innovation",
                            icon: "💻", 
                            description: "I live and breathe technological evolution! From AI breakthroughs to quantum computing, web3 to machine learning - I'm always exploring the cutting edge. Technology isn't just my field; it's my passion and future."
                        }
                    ]
                },
                education: {
                    title: "Academic Journey",
                    items: [
                        {
                            title: "University - Present",
                            icon: "🎓",
                            institution: "PES College",
                            description: "Currently pursuing my Computer Science (CS) UG degree, diving deep into algorithms, data structures, software engineering, and cutting-edge technologies that will shape tomorrow."
                        },
                        {
                            title: "Pre-University (11th & 12th)",
                            icon: "📖",
                            institution: "Sharada PU College", 
                            description: "Completed my higher secondary education with distinction, building a strong foundation in sciences and mathematics that paved my way to computer science."
                        },
                        {
                            title: "High School",
                            icon: "🏫",
                            institution: "Presidency School NLO",
                            description: "The foundation years where my love for learning was nurtured, and my curiosity about technology first sparked into a burning passion."
                        }
                    ]
                },
                city: {
                    title: "Bangalore - The Silicon Valley",
                    content: "Bangalore isn't just my home - it's my inspiration! Known globally as the \"Silicon Valley of India,\" this incredible city perfectly embodies the fusion of rich tradition and cutting-edge innovation that defines modern India. The year-round pleasant weather makes it perfect for weekend hikes, while the bustling tech ecosystem keeps my entrepreneurial spirit alive. From the tranquil gardens of Lalbagh to the buzzing innovation hubs of Whitefield and Electronic City, every corner of this city tells a story of dreams, code, and endless possibilities. The vibrant startup culture, world-class tech companies, and the incredible community of developers and innovators make Bangalore the perfect launchpad for my tech aspirations. Plus, the amazing South Indian cuisine and filter coffee keep me fueled for those long coding sessions!"
                },
                anime: {
                    title: "Anime Universe",
                    content: "Anime isn't just entertainment for me - it's a window into incredible storytelling, art, and philosophy! I explore everything from mind-bending psychological thrillers to epic shounen adventures, heartwarming slice-of-life to intense seinen masterpieces. Each series brings unique perspectives, stunning visuals, and life lessons that resonate deeply with my own journey.",
                    special: {
                        title: "But there's one that rules them all...",
                        icon: "🏴‍☠️",
                        highlight: "ONE PIECE IS THE ABSOLUTE GOAT!",
                        fire: "🔥👑",
                        description: "The Grand Line adventure, unbreakable bonds of nakama, impossible dreams becoming reality, and Eiichiro Oda's masterful world-building! Luffy's unwavering determination to become the Pirate King teaches me that no dream is too big, no adventure too dangerous. Kaizoku-ou ni ore wa naru!"
                    }
                }
            }
        };
    }

    init() {
        this.setupDocument();
        this.createAnimatedBackground();
        this.createHeader();
        this.createNavigation();
        this.createContentSections();
        this.setupMatrixRain();
        this.setupEventListeners();
        this.preloadContent();
    }

    setupDocument() {
        document.body.style.cssText = `
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0a0a0a;
            color: #fff;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        `;
        
        document.documentElement.style.cssText = `
            box-sizing: border-box;
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = this.getCSS();
        document.head.appendChild(styleSheet);
    }

    getCSS() {
        return `
            *, *::before, *::after {
                box-sizing: border-box;
            }
            
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
                33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
                66% { transform: translateY(15px) rotate(240deg) scale(0.9); }
            }
            
            @keyframes textGradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slideInFade {
                0% { opacity: 0; transform: translateX(-50px) scale(0.9); }
                100% { opacity: 1; transform: translateX(0) scale(1); }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes loadingAnimation {
                to { transform: translateX(0); }
            }
            
            .shape:nth-child(odd) {
                border-radius: 20%;
                animation-direction: reverse;
            }
        `;
    }

    createAnimatedBackground() {
        const animatedBg = document.createElement('div');
        animatedBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
        `;
        document.body.appendChild(animatedBg);

        const shapesOverlay = document.createElement('div');
        shapesOverlay.id = 'shapesOverlay';
        shapesOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(shapesOverlay);
        
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 100 + 50;
            shape.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                animation: float ${Math.random() * 4 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 6}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                border-radius: ${i % 2 === 0 ? '50%' : '20%'};
            `;
            shapesOverlay.appendChild(shape);
        }
    }

    createHeader() {
        const container = document.createElement('div');
        container.style.cssText = `
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        `;
        document.body.appendChild(container);
        this.elements.container = container;

        const header = document.createElement('header');
        header.style.cssText = `
            text-align: center;
            padding: 60px 20px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 30px;
            margin-bottom: 40px;
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;
        
        const profileSection = document.createElement('div');
        profileSection.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        `;

        const profilePic = document.createElement('img');
        profilePic.src = this.data.profile.image;
        profilePic.alt = "Profile Picture";
        profilePic.id = 'profilePic';
        profilePic.style.cssText = `
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid #ff006e;
            object-fit: cover;
            box-shadow: 0 0 50px rgba(255, 0, 110, 0.6);
            transition: all 0.3s ease;
            cursor: pointer;
        `;

        const nameSection = document.createElement('div');
        
        const name = document.createElement('h1');
        name.textContent = this.data.profile.name;
        name.style.cssText = `
            font-size: 4em;
            background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: textGradient 3s ease infinite;
            margin: 0;
        `;

        const tagline = document.createElement('p');
        tagline.textContent = this.data.profile.tagline;
        tagline.style.cssText = `
            font-size: 1.3em;
            color: #ccc;
            margin-top: 15px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.5s forwards;
        `;

        nameSection.appendChild(name);
        nameSection.appendChild(tagline);
        profileSection.appendChild(profilePic);
        profileSection.appendChild(nameSection);
        header.appendChild(profileSection);
        container.appendChild(header);
        
        this.elements.profilePic = profilePic;
    }

    createNavigation() {
        const navContainer = document.createElement('div');
        navContainer.style.cssText = `
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(20px);
            border-radius: 25px;
            padding: 15px;
            margin: 40px 0;
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        `;

        const navButtons = document.createElement('div');
        navButtons.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
        `;

        const buttonData = [
            { section: 'about', icon: '🙋‍♂️', text: 'About Me' },
            { section: 'hobbies', icon: '🎯', text: 'Hobbies' },
            { section: 'education', icon: '🎓', text: 'Education' },
            { section: 'city', icon: '🏙️', text: 'My City' },
            { section: 'anime', icon: '⚔️', text: 'Anime' }
        ];

        buttonData.forEach((item, index) => {
            const button = document.createElement('button');
            button.innerHTML = `<span>${item.icon} ${item.text}</span>`;
            button.setAttribute('data-section', item.section);
            button.className = 'nav-btn' + (index === 0 ? ' active' : '');
            button.style.cssText = `
                padding: 15px 25px;
                background: ${index === 0 ? 'linear-gradient(45deg, #ff006e, #8338ec)' : 'linear-gradient(45deg, rgba(255, 0, 110, 0.2), rgba(131, 56, 236, 0.2))'};
                border: 2px solid ${index === 0 ? '#3a86ff' : 'rgba(255, 0, 110, 0.3)'};
                color: white;
                border-radius: 20px;
                cursor: pointer;
                font-size: 15px;
                font-weight: 600;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                white-space: nowrap;
                min-width: 120px;
                text-align: center;
                position: relative;
                overflow: hidden;
                box-shadow: ${index === 0 ? '0 15px 40px rgba(255, 0, 110, 0.6)' : 'none'};
                transform: ${index === 0 ? 'translateY(-3px)' : 'none'};
            `;
            navButtons.appendChild(button);
        });

        const loadingBar = document.createElement('div');
        loadingBar.id = 'loadingBar';
        loadingBar.style.cssText = `
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            margin: 20px 0;
            overflow: hidden;
            display: none;
        `;

        const loadingProgress = document.createElement('div');
        loadingProgress.style.cssText = `
            height: 100%;
            background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
            border-radius: 2px;
            transform: translateX(-100%);
        `;
        loadingBar.appendChild(loadingProgress);

        navContainer.appendChild(navButtons);
        this.elements.container.appendChild(navContainer);
        this.elements.container.appendChild(loadingBar);
        
        this.elements.navButtons = navButtons;
        this.elements.loadingBar = loadingBar;
    }

    createContentSections() {
        const contentContainer = document.createElement('div');
        contentContainer.id = 'content-container';
        this.elements.container.appendChild(contentContainer);
        
        this.createAboutSection(contentContainer);
        this.createHobbiesSection(contentContainer);
        this.createEducationSection(contentContainer);
        this.createCitySection(contentContainer);
        this.createAnimeSection(contentContainer);
    }

    createAboutSection(parent) {
        const section = this.createSectionElement('about', this.data.sections.about.title, true);
        
        const infoCard = document.createElement('div');
        infoCard.style.cssText = `
            background: rgba(255, 255, 255, 0.05);
            padding: 30px;
            border-radius: 20px;
            margin: 20px 0;
            border: 1px solid rgba(255, 0, 110, 0.2);
            transition: all 0.4s ease;
        `;
        
        const content = document.createElement('p');
        content.textContent = this.data.sections.about.content;
        content.style.cssText = `
            font-size: 1.2em;
            line-height: 1.8;
        `;
        
        infoCard.appendChild(content);
        section.appendChild(infoCard);
        parent.appendChild(section);
    }

    createHobbiesSection(parent) {
        const section = this.createSectionElement('hobbies', this.data.sections.hobbies.title);
        
        const grid = document.createElement('div');
        grid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin: 30px 0;
        `;
        
        this.data.sections.hobbies.items.forEach(hobby => {
            const card = document.createElement('div');
            card.style.cssText = `
                background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1));
                padding: 35px;
                border-radius: 20px;
                text-align: center;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border: 2px solid rgba(255, 0, 110, 0.2);
            `;
            
            const title = document.createElement('h3');
            title.textContent = `${hobby.icon} ${hobby.title}`;
            title.style.cssText = `
                color: #4CAF50;
                margin-bottom: 20px;
                font-size: 1.4em;
            `;
            
            const desc = document.createElement('p');
            desc.textContent = hobby.description;
            
            card.appendChild(title);
            card.appendChild(desc);
            grid.appendChild(card);
        });
        
        section.appendChild(grid);
        parent.appendChild(section);
    }

    createEducationSection(parent) {
        const section = this.createSectionElement('education', this.data.sections.education.title);
        
        this.data.sections.education.items.forEach(item => {
            const eduItem = document.createElement('div');
            eduItem.style.cssText = `
                margin-bottom: 25px;
                padding: 25px;
                background: linear-gradient(45deg, rgba(58, 134, 255, 0.1), rgba(131, 56, 236, 0.1));
                border-radius: 15px;
                border-left: 5px solid #3a86ff;
                transition: all 0.3s ease;
            `;
            
            const title = document.createElement('h3');
            title.textContent = `${item.icon} ${item.title}`;
            title.style.cssText = `
                color: #ff006e;
                margin-bottom: 15px;
                font-size: 1.3em;
            `;
            
            const desc = document.createElement('p');
            desc.innerHTML = `<strong>${item.institution}</strong> - ${item.description}`;
            
            eduItem.appendChild(title);
            eduItem.appendChild(desc);
            section.appendChild(eduItem);
        });
        
        parent.appendChild(section);
    }

    createCitySection(parent) {
        const section = this.createSectionElement('city', this.data.sections.city.title);
        
        const infoCard = document.createElement('div');
        infoCard.style.cssText = `
            background: rgba(255, 255, 255, 0.05);
            padding: 30px;
            border-radius: 20px;
            margin: 20px 0;
            border: 1px solid rgba(255, 0, 110, 0.2);
            transition: all 0.4s ease;
        `;
        
        const content = document.createElement('p');
        content.textContent = this.data.sections.city.content;
        content.style.cssText = `
            font-size: 1.2em;
            line-height: 1.8;
        `;
        
        infoCard.appendChild(content);
        section.appendChild(infoCard);
        parent.appendChild(section);
    }

    createAnimeSection(parent) {
        const section = this.createSectionElement('anime', this.data.sections.anime.title);
        
        const animeContainer = document.createElement('div');
        animeContainer.style.cssText = `
            text-align: center;
            padding: 40px;
            background: linear-gradient(45deg, rgba(255, 190, 11, 0.2), rgba(251, 86, 7, 0.2));
            border-radius: 25px;
            border: 2px solid rgba(255, 190, 11, 0.3);
        `;
        
        const mainContent = document.createElement('p');
        mainContent.textContent = this.data.sections.anime.content;
        mainContent.style.cssText = `
            font-size: 1.3em;
            margin-bottom: 25px;
            line-height: 1.7;
        `;
        
        const specialBox = document.createElement('div');
        specialBox.style.cssText = `
            margin: 40px 0;
            padding: 30px;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 20px;
            border: 2px solid rgba(255, 190, 11, 0.4);
        `;
        
        const specialTitle = document.createElement('h3');
        specialTitle.textContent = `${this.data.sections.anime.special.icon} ${this.data.sections.anime.special.title}`;
        specialTitle.style.cssText = `
            color: #ffbe0b;
            margin-bottom: 20px;
            font-size: 1.4em;
        `;
        
        const goatText = document.createElement('p');
        goatText.textContent = `${this.data.sections.anime.special.highlight} ${this.data.sections.anime.special.fire}`;
        goatText.style.cssText = `
            font-size: 2em;
            background: linear-gradient(45deg, #ffbe0b, #fb5607);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            animation: pulse 2s ease-in-out infinite;
        `;
        
        const specialDesc = document.createElement('p');
        specialDesc.textContent = `${this.data.sections.anime.special.description} 🏴‍☠️`;
        specialDesc.style.cssText = `
            margin-top: 20px;
            font-size: 1.2em;
            line-height: 1.6;
        `;
        
        specialBox.appendChild(specialTitle);
        specialBox.appendChild(goatText);
        specialBox.appendChild(specialDesc);
        
        animeContainer.appendChild(mainContent);
        animeContainer.appendChild(specialBox);
        section.appendChild(animeContainer);
        parent.appendChild(section);
    }

    createSectionElement(id, title, isActive = false) {
        const section = document.createElement('div');
        section.id = id;
        section.className = 'content-section' + (isActive ? ' active' : '');
        section.style.cssText = `
            opacity: ${isActive ? '1' : '0'};
            transform: ${isActive ? 'translateX(0) scale(1)' : 'translateX(-50px)'};
            display: ${isActive ? 'block' : 'none'};
            background: rgba(0, 0, 0, 0.8);
            padding: 50px;
            border-radius: 30px;
            margin: 30px 0;
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        `;
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = title;
        sectionTitle.style.cssText = `
            font-size: 3em;
            margin-bottom: 30px;
            background: linear-gradient(45deg, #ff006e, #3a86ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
            position: relative;
        `;
        
        section.appendChild(sectionTitle);
        return section;
    }

    setupMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.id = 'matrixCanvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.3;
        `;
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        const font_size = 10;
        const columns = canvas.width / font_size;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff00';
            ctx.font = font_size + 'px arial';

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        setInterval(draw, 35);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    setupEventListeners() {
        this.elements.navButtons.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-btn') || e.target.closest('.nav-btn')) {
                const button = e.target.classList.contains('nav-btn') ? e.target : e.target.closest('.nav-btn');
                const section = button.getAttribute('data-section');
                this.loadSection(section);
            }
        });

        this.elements.profilePic.addEventListener('click', () => {
            this.elements.profilePic.style.transform = 'scale(1.1) rotate(360deg)';
            this.elements.profilePic.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                this.elements.profilePic.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });

        document.querySelectorAll('.info-card, .hobby-card, .education-item').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    async loadSection(sectionName) {
        if (sectionName === this.currentSection) return;

        this.showLoading();
        await this.simulateLoading();
        this.updateNavigation(sectionName);
        this.showSection(sectionName);
        this.currentSection = sectionName;
        this.hideLoading();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showLoading() {
        const loadingBar = this.elements.loadingBar;
        if (loadingBar) {
            loadingBar.style.display = 'block';
            const progress = loadingBar.querySelector('div');
            progress.style.animation = 'none';
            progress.offsetHeight;
            progress.style.animation = 'loadingAnimation 0.8s ease-in-out forwards';
        }
    }

    hideLoading() {
        setTimeout(() => {
            if (this.elements.loadingBar) {
                this.elements.loadingBar.style.display = 'none';
            }
        }, 300);
    }

    simulateLoading() {
        return new Promise(resolve => {
            setTimeout(resolve, 600 + Math.random() * 400);
        });
    }

    updateNavigation(activeSection) {
        const navButtons = this.elements.navButtons.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-section') === activeSection;
            btn.className = 'nav-btn' + (isActive ? ' active' : '');
            btn.style.background = isActive ? 
                'linear-gradient(45deg, #ff006e, #8338ec)' : 
                'linear-gradient(45deg, rgba(255, 0, 110, 0.2), rgba(131, 56, 236, 0.2))';
            btn.style.borderColor = isActive ? '#3a86ff' : 'rgba(255, 0, 110, 0.3)';
            btn.style.boxShadow = isActive ? '0 15px 40px rgba(255, 0, 110, 0.6)' : 'none';
            btn.style.transform = isActive ? 'translateY(-3px)' : 'none';
        });
    }

    showSection(sectionName) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            const isActive = section.id === sectionName;
            section.classList.toggle('active', isActive);
            section.style.display = isActive ? 'block' : 'none';
            section.style.opacity = isActive ? '1' : '0';
            section.style.transform = isActive ? 'translateX(0) scale(1)' : 'translateX(-50px)';
            
            if (isActive) {
                section.style.animation = 'slideInFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }
        });
    }

    preloadContent() {
        console.log('🚀 Preloading all content sections...');
        this.sections.forEach((section, index) => {
            setTimeout(() => {
                console.log(`✅ Section '${section}' loaded`);
            }, index * 100);
        });
    }
}

// Initialize the portfolio when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new VaibhavPortfolio();
    });
} else {
    new VaibhavPortfolio();
}

// Export for use in modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VaibhavPortfolio;
}