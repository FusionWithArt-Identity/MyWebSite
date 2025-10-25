document.addEventListener('DOMContentLoaded', function() {

    // --- Data Models (From Webpage 2 for Modularity) ---
    const menuData = [
        {
            label: '<i class="fas fa-home home-audio-toggle"></i>Home',
            contentKey: 'home'
        },
        {
            label: 'About',
            submenu: [
                { label: 'Advisory Committee', contentKey: 'advisory-committee' },
                { label: 'Objectives', contentKey: 'objectives' },
                { label: 'Profile STA', contentKey: 'profile-sta' },
                { label: 'Achievement', contentKey: 'achievement' },
                { label: 'Events & Activities', contentKey: 'events-activities' },
                { label: 'Child Safeguarding Policy of STA', contentKey: 'child-safeguarding' },
                {
                    label: 'Recognition',
                    submenu: [
                        { label: 'AFFILIATION', contentKey: 'affiliation' },
                        { label: 'NGO DARPAN', contentKey: 'ngo-darpan' },
                        { label: 'INCOME TAX DEPARTMENT', contentKey: 'income-tax' }
                    ]
                },
                { label: 'Audit Report', contentKey: 'audit-report' },
                { label: 'Future Vision', contentKey: 'future-vision' },
                { label: 'Coaches', contentKey: 'coaches' },
                { label: 'Theme Song', contentKey: 'theme-song' },
                { label: 'Players', contentKey: 'players' },
                { label: 'Memento', contentKey: 'memento' }
            ]
        },
        { label: 'Wish Messages', contentKey: 'wish-messages' },
        { label: 'Letters & Fixtures', contentKey: 'letters-fixtures' },
        { label: 'News clippings', contentKey: 'news-clippings' },
        {
            label: 'Welfare activities',
            submenu: [
                { label: 'Blood detecting camp', contentKey: 'welfare-blood-camp' },
                { label: 'International Yoga day-2023', contentKey: 'welfare-yoga-2023' },
                { label: 'MTS Coaching', contentKey: 'welfare-mts-coaching' },
                { label: 'Water project preparation', contentKey: 'welfare-water-project' },
                { label: 'World Environment Day-23', contentKey: 'welfare-environment-day' },
                { label: 'World Tribal Day-23', contentKey: 'welfare-tribal-day' }
            ]
        },
        {
            label: 'Certificates',
            submenu: [
                { label: 'Athletics Meet District-21-22', contentKey: 'certificates-district-athletics' },
                { label: 'Athletics Meet Sub-division-21-22', contentKey: 'certificates-subdivision-athletics' },
                { label: 'Sr District Football-21-22', contentKey: 'certificates-sr-football' }
            ]
        },
        {
            label: 'Publications',
            submenu: [
                { label: 'Editorial Board', contentKey: 'publications-editorial-board' },
                { label: 'Suhriti', contentKey: 'publications-suhriti' },
                { label: 'Website, magazine opening and tracksuit opening', contentKey: 'publications-website-opening' }
            ]
        },
        { label: 'Announcement', contentKey: 'announcement' },
        {
            label: 'Photos',
            isRightAligned: true,
            submenu: [
                { label: 'Foundation Day & 1st Anniversary', contentKey: 'photos-foundation-day' },
                { label: '15th August-22', contentKey: 'photos-15th-august-22' },
                {
                    label: 'Football Kits Distribution',
                    submenu: [
                        { label: 'Football kits distribution', contentKey: 'photos-kits-distribution' },
                        { label: 'Boot distribution among Sub-Juniors sponsored by Arup Das (IYSA)', contentKey: 'photos-boot-distribution' },
                        { label: 'Jersey pant distribution among the Sub-juniors', contentKey: 'photos-jersey-pant-distribution' }
                    ]
                },
                {
                    label: 'Tournaments',
                    submenu: [
                        {
                            label: '2022',
                            submenu: [
                                { label: 'Dwaranda Tournament', contentKey: 'photos-tournaments-2022-dwaranda' },
                                { label: 'Partha Bhowmic Memorial Cup-22', contentKey: 'photos-tournaments-2022-partha-bhowmic' },
                                { label: 'Raipur Tournament', contentKey: 'photos-tournaments-2022-raipur' },
                                { label: 'Inter-Club Senior Second Division Football League 2022-23', contentKey: 'photos-tournaments-2022-inter-club' },
                                { label: 'Borsul Tournament-2021', contentKey: 'photos-tournaments-2022-borsul' },
                                { label: 'Bahiri Tournament-2022', contentKey: 'photos-tournaments-2022-bahiri' },
                                { label: 'Dhansara Tournament -2022', contentKey: 'photos-tournaments-2022-dhansara' },
                                { label: 'Kabiguru Cup-2022', contentKey: 'photos-tournaments-2022-kabiguru' }
                            ]
                        },
                        {
                            label: '2023',
                            submenu: [
                                { label: 'Gushkara Tournament-2023', contentKey: 'photos-tournaments-2023-gushkara' },
                                { label: 'League match in between us', contentKey: 'photos-tournaments-2023-league-match' }
                            ]
                        }
                    ]
                },
                { label: 'Prize day programme', contentKey: 'photos-prize-day' },
                {
                    label: 'Exhibition Match',
                    submenu: [
                        { label: 'Exhibition match', contentKey: 'photos-exhibition-match-1' },
                        { label: 'Exhibition match against Makrampur team', contentKey: 'photos-exhibition-match-makrampur' },
                        { label: 'Exhibition (International) Match STA Junior Vs DAV Kathmandu Nepal', contentKey: 'photos-exhibition-match-nepal' },
                        { label: 'Exhibition match in between STA vs Kankutia', contentKey: 'photos-exhibition-match-kankutia' },
                        { label: 'Exhibition match STA (Sr) Vs Kick for help', contentKey: 'photos-exhibition-match-kick-for-help' },
                        { label: 'Exhibition match STA (Sub-junior) Vs Ghosaldanga', contentKey: 'photos-exhibition-match-ghosaldanga' },
                        { label: 'Exhibition match STA Vs Visva-Bharati Silpatsab-2023', contentKey: 'photos-exhibition-match-visva-bharati' }
                    ]
                },
                { label: 'Group photos', contentKey: 'photos-group-photos' },
                { label: 'Iscabon Film at Gitanjali Cinema Hall', contentKey: 'photos-film-at-gitanjali' },
                { label: 'Practice session', contentKey: 'photos-practice-session' },
                { label: 'Special practice session', contentKey: 'photos-special-practice-session' },
                { label: 'Hool Dibas', contentKey: 'photos-hool-dibas' },
                { label: 'Picnic', contentKey: 'photos-picnic' },
                { label: 'World Cup Match, Felicitation of Anik Ghosh & Dinner', contentKey: 'photos-world-cup-match' },
                { label: '21 days Coaches training programme at Kalyani', contentKey: 'photos-coaches-training' },
                { label: 'Bar Puja-2023', contentKey: 'photos-bar-puja' },
                { label: 'Grassroot Day-23', contentKey: 'photos-grassroot-day' },
                { label: 'Nabanalanda Prize', contentKey: 'photos-nabanalanda-prize' }
            ]
        },
        {
            label: 'Videos',
            isRightAligned: true,
            submenu: [
                { label: '15th-August-22', contentKey: 'videos-15th-august-22' },
                { label: 'Speech at different occasions by Dr Koushik Ghosh', contentKey: 'videos-speech-dr-koushik-ghosh' },
                { label: 'Speech by Dignitaries', contentKey: 'videos-speech-dignitaries' },
                {
                    label: 'Special Day',
                    submenu: [
                        { label: 'Foundation Day -1st Anniversary', contentKey: 'videos-special-day-foundation' },
                        { label: 'Environmental day -2023', contentKey: 'videos-special-day-environmental' }
                    ]
                },
                { label: 'United Sports Club', contentKey: 'videos-united-sports-club' },
                { label: 'Celebration of Yoga Day-2022', contentKey: 'videos-yoga-day-2022' },
                { label: 'Badna Festival', contentKey: 'videos-badna-festival' },
                { label: 'Iskabon-Film at Gitanjali Hall', contentKey: 'videos-iskabon-film' },
                { label: 'Sub-junior practice session', contentKey: 'videos-sub-junior-practice' },
                { label: 'Special practice session by Dr. Mahesh Khetmalis', contentKey: 'videos-practice-dr-khetmalis' },
                { label: 'Special practice session by Dr. Shahidul Islam Jewel', contentKey: 'videos-practice-dr-jewel' },
                { label: 'Practice session', contentKey: 'videos-practice-session' },
                { label: 'Practice match at Dhansara', contentKey: 'videos-practice-match-dhansara' },
                { label: 'CHALLENGE FOOTBALL TOURNAMENT 2023 AT DEWANGANJ, BIRBHUM', contentKey: 'videos-challenge-tournament-2023' },
                { label: 'Bar puja', contentKey: 'videos-bar-puja' }
            ]
        },
        { label: 'Contact', contentKey: 'contact' },
        { label: 'Donate Us', contentKey: 'donate-us', isDonateButton: true }
    ];

    const contentData = {
        'home': {
            title: 'Welcome to Santiniketan Tribal Academy',
            text: '<p>The Santiniketan Tribal Academy is a charitable trust committed to promoting games, sports, and social work in accordance with the principles of Gurudev Rabindranath Tagore. We believe in the holistic development of our community members, fostering a spirit of cooperation and self-reliance. Our mission is to provide a nurturing environment that empowers individuals through education and opportunity.</p><p>Explore our site to learn more about our initiatives, achievements, and how you can join us in our mission.</p>'
        },
        'profile-sta': {
            title: 'Profile of Santiniketan Tribal Academy',
            text: 'The Santiniketan Tribal Academy was established as a charitable trust to uplift the underprivileged communities by nurturing talent in games, sports, and social work. Following the ideals of Rabindranath Tagore, we strive to create a holistic development model that emphasizes education, cultural values, and the importance of community service. Our focus is on empowering individuals to become well-rounded citizens who can contribute positively to society. We invite you to explore our various welfare activities and learn how we are making a difference in the lives of many.'
        },
        'advisory-committee': {
            title: 'Advisory Committee',
            text: '<p>Details about the esteemed members of our Advisory Committee and their contributions.</p>'
        },
        'objectives': {
            title: 'Our Objectives',
            text: '<p>Learn about the core objectives that drive Santiniketan Tribal Academy\'s mission and vision.</p>'
        },
        'achievement': {
            title: 'Achievements',
            text: '<p>A list of significant achievements and milestones reached by our academy.</p>'
        },
        'events-activities': {
            title: 'Events & Activities',
            text: '<p>Information about past and upcoming events and activities organized by STA.</p>'
        },
        'child-safeguarding': {
            title: 'Child Safeguarding Policy of STA',
            text: '<p>Our commitment to ensuring the safety and well-being of all children under our care.</p>'
        },
        'affiliation': {
            title: 'Affiliation',
            text: '<p>Details about our affiliations with relevant organizations and bodies.</p>'
        },
        'ngo-darpan': {
            title: 'NGO DARPAN',
            text: '<p>Information regarding our registration with NGO DARPAN.</p>'
        },
        'income-tax': {
            title: 'Income Tax Department',
            text: '<p>Our compliance and recognition status with the Income Tax Department.</p>'
        },
        'audit-report': {
            title: 'Audit Report',
            text: '<p>Access our annual audit reports for transparency and accountability.</p>',
            media: [
                { type: 'pdf', src: 'assets/pdfs/audit-report-2023.pdf', title: 'Audit Report 2023' }
            ]
        },
        'future-vision': {
            title: 'Future Vision',
            text: '<p>Our aspirations and plans for the future growth and development of the academy.</p>'
        },
        'coaches': {
            title: 'Meet Our Coaches',
            text: 'Our team of experienced and certified coaches are dedicated to providing the highest level of training and guidance to our athletes. Each coach brings a unique set of skills and passion for developing young talent.'
        },
        'theme-song': {
            title: 'Theme Song',
            text: '<p>Listen to the inspiring theme song of Santiniketan Tribal Academy.</p>',
            media: [
                { type: 'audio', src: 'assets/audios/Web-tune (Ekla Cholo).mp3', title: 'STA Theme Song' }
            ]
        },
        'players': {
            title: 'Our Players',
            text: '<p>Profiles and achievements of the talented players nurtured by our academy.</p>'
        },
        'memento': {
            title: 'Memento',
            text: '<p>A collection of mementos and tokens of appreciation received by STA.</p>'
        },
        'wish-messages': {
            title: 'Wish Messages',
            text: '<p>Messages of support and good wishes from our patrons and well-wishers.</p>'
        },
        'letters-fixtures': {
            title: 'Letters & Fixtures',
            text: '<p>Important letters and upcoming fixtures for our teams.</p>'
        },
        'news-clippings': {
            title: 'News Clippings',
            text: '<p>A collection of news articles featuring Santiniketan Tribal Academy.</p>'
        },
        'welfare-blood-camp': {
            title: 'Blood Detecting Camp',
            text: '<p>Details and photos from our recent blood detecting camp, serving the community.</p>'
        },
        'welfare-yoga-2023': {
            title: 'International Yoga Day - 2023',
            text: '<p>Highlights from our celebration of International Yoga Day 2023.</p>'
        },
        'welfare-mts-coaching': {
            title: 'MTS Coaching',
            text: '<p>Information about our MTS coaching programs for academic support.</p>'
        },
        'welfare-water-project': {
            title: 'Water Project Preparation',
            text: '<p>Updates on our initiatives to provide clean water access to communities.</p>'
        },
        'welfare-environment-day': {
            title: 'World Environment Day - 2023',
            text: '<p>Activities and awareness campaigns conducted on World Environment Day 2023.</p>'
        },
        'welfare-tribal-day': {
            title: 'World Tribal Day - 2023',
            text: '<p>Celebration and recognition of World Tribal Day 2023.</p>'
        },
        'certificates-district-athletics': {
            title: 'Athletics Meet District 2021-22 Certificates',
            text: '<p>Certificates awarded at the District Athletics Meet 2021-22.</p>'
        },
        'certificates-subdivision-athletics': {
            title: 'Athletics Meet Sub-division 2021-22 Certificates',
            text: '<p>Certificates awarded at the Sub-division Athletics Meet 2021-22.</p>'
        },
        'certificates-sr-football': {
            title: 'Senior District Football 2021-22 Certificates',
            text: '<p>Certificates for the Senior District Football tournament 2021-22.</p>'
        },
        'publications-editorial-board': {
            title: 'Editorial Board',
            text: '<p>Meet the members of our Editorial Board.</p>'
        },
        'publications-suhriti': {
            title: 'Suhriti Magazine',
            text: '<p>Details about our annual magazine, Suhriti.</p>'
        },
        'publications-website-opening': {
            title: 'Website, Magazine & Tracksuit Opening',
            text: '<p>Highlights from the launch event of our website, magazine, and new tracksuits.</p>'
        },
        'announcement': {
            title: 'Latest Announcements',
            text: '<p>Stay updated with the latest news and announcements from STA.</p>'
        },
        'photos-foundation-day': {
            title: 'Foundation Day & 1st Anniversary',
            text: '<p>Capturing moments from our Foundation Day and 1st Anniversary celebrations.</p>',
            media: [
                { type: 'image', src: 'assets/photos/carousel/Foundation Day 1st Anniversary Veteran-team-6.jpg', alt: 'Foundation Day celebration' }
            ]
        },
        'photos-15th-august-22': {
            title: '15th August 2022',
            text: '<p>Photos from our Independence Day celebration in 2022.</p>',
            media: [
                { type: 'image', src: 'assets/photos/carousel/15th August 22.jpg', alt: 'Independence Day 2022' }
            ]
        },
        'photos-kits-distribution': {
            title: 'Football Kits Distribution',
            text: '<p>Photos from the football kits distribution event.</p>',
            media: [
                { type: 'image', src: 'assets/photos/carousel/Football-Kits Distribution.jpg', alt: 'Football kits distribution' }
            ]
        },
        'photos-boot-distribution': {
            title: 'Boot Distribution among Sub-Juniors',
            text: '<p>Photos of boot distribution sponsored by Arup Das (IYSA) among sub-junior players.</p>'
        },
        'photos-jersey-pant-distribution': {
            title: 'Jersey Pant Distribution among Sub-juniors',
            text: '<p>Photos of jersey and pant distribution for sub-junior players.</p>'
        },
        'photos-tournaments-2022-dwaranda': {
            title: 'Dwaranda Tournament 2022',
            text: 'A collection of photos and videos from our participation in the exciting Dwaranda Tournament in 2022.',
            media: [
                { type: 'image', src: 'https://placehold.co/600x400/D4C9A8/3B3128?text=Dwaranda+Tournament+Photo+1', alt: 'Team photo at Dwaranda Tournament' },
                { type: 'image', src: 'https://placehold.co/600x400/B8A881/white?text=Dwaranda+Tournament+Photo+2', alt: 'Action shot during the tournament' },
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Tournament Highlights' }
            ]
        },
        'photos-tournaments-2022-partha-bhowmic': {
            title: 'Partha Bhowmic Memorial Cup-22',
            text: '<p>Photos from the Partha Bhowmic Memorial Cup in 2022.</p>'
        },
        'photos-tournaments-2022-raipur': {
            title: 'Raipur Tournament',
            text: '<p>Highlights from our participation in the Raipur Tournament.</p>'
        },
        'photos-tournaments-2022-inter-club': {
            title: 'Inter-Club Senior Second Division Football League 2022-23',
            text: '<p>Photos from the Inter-Club Senior Second Division Football League 2022-23.</p>'
        },
        'photos-tournaments-2022-borsul': {
            title: 'Borsul Tournament-2021',
            text: '<p>Photos from the Borsul Tournament in 2021.</p>'
        },
        'photos-tournaments-2022-bahiri': {
            title: 'Bahiri Tournament-2022',
            text: '<p>Photos from the Bahiri Tournament in 2022.</p>'
        },
        'photos-tournaments-2022-dhansara': {
            title: 'Dhansara Tournament -2022',
            text: '<p>Photos from the Dhansara Tournament in 2022.</p>'
        },
        'photos-tournaments-2022-kabiguru': {
            title: 'Kabiguru Cup-2022',
            text: '<p>Photos from the Kabiguru Cup in 2022.</p>'
        },
        'photos-tournaments-2023-gushkara': {
            title: 'Gushkara Tournament-2023',
            text: '<p>Photos from the Gushkara Tournament in 2023.</p>'
        },
        'photos-tournaments-2023-league-match': {
            title: 'League Match in Between Us',
            text: '<p>Photos from our internal league matches.</p>'
        },
        'photos-prize-day': {
            title: 'Prize Day Programme',
            text: '<p>Photos from our annual prize day program.</p>'
        },
        'photos-exhibition-match-1': {
            title: 'Exhibition Match',
            text: '<p>Photos from an exciting exhibition match.</p>'
        },
        'photos-exhibition-match-makrampur': {
            title: 'Exhibition Match Against Makrampur Team',
            text: '<p>Photos from the exhibition match against the Makrampur team.</p>'
        },
        'photos-exhibition-match-nepal': {
            title: 'Exhibition (International) Match STA Junior Vs DAV Kathmandu Nepal',
            text: '<p>Photos from the international exhibition match between STA Junior and DAV Kathmandu Nepal.</p>'
        },
        'photos-exhibition-match-kankutia': {
            title: 'Exhibition Match in Between STA vs Kankutia',
            text: '<p>Photos from the exhibition match between STA and Kankutia.</p>'
        },
        'photos-exhibition-match-kick-for-help': {
            title: 'Exhibition Match STA (Sr) Vs Kick for Help',
            text: '<p>Photos from the exhibition match between STA (Sr) and Kick for Help.</p>'
        },
        'photos-exhibition-match-ghosaldanga': {
            title: 'Exhibition Match STA (Sub-junior) Vs Ghosaldanga',
            text: '<p>Photos from the exhibition match between STA (Sub-junior) and Ghosaldanga.</p>'
        },
        'photos-exhibition-match-visva-bharati': {
            title: 'Exhibition Match STA Vs Visva-Bharati Silpatsab-2023',
            text: '<p>Photos from the exhibition match between STA and Visva-Bharati Silpatsab-2023.</p>'
        },
        'photos-group-photos': {
            title: 'Group Photos',
            text: '<p>A collection of group photos of our teams and members.</p>'
        },
        'photos-film-at-gitanjali': {
            title: 'Iscabon Film at Gitanjali Cinema Hall',
            text: '<p>Photos from the screening of Iscabon Film at Gitanjali Cinema Hall.</p>'
        },
        'photos-practice-session': {
            title: 'Practice Session',
            text: '<p>Photos capturing our regular practice sessions.</p>'
        },
        'photos-special-practice-session': {
            title: 'Special Practice Session',
            text: '<p>Photos from special practice sessions with guest coaches.</p>'
        },
        'photos-hool-dibas': {
            title: 'Hool Dibas',
            text: '<p>Photos from the celebration of Hool Dibas.</p>'
        },
        'photos-picnic': {
            title: 'Picnic',
            text: '<p>Fun moments captured during our annual picnic.</p>'
        },
        'photos-world-cup-match': {
            title: 'World Cup Match, Felicitation of Anik Ghosh & Dinner',
            text: '<p>Photos from the World Cup Match event, felicitation of Anik Ghosh, and dinner.</p>'
        },
        'photos-coaches-training': {
            title: '21 days Coaches training programme at Kalyani',
            text: '<p>Photos from the 21-day coaches training program at Kalyani.</p>'
        },
        'photos-bar-puja': {
            title: 'Bar Puja-2023',
            text: '<p>Photos from the Bar Puja celebration in 2023.</p>'
        },
        'photos-grassroot-day': {
            title: 'Grassroot Day-23',
            text: '<p>Photos from the Grassroot Day event in 2023.</p>'
        },
        'photos-nabanalanda-prize': {
            title: 'Nabanalanda Prize',
            text: '<p>Photos from the Nabanalanda Prize distribution ceremony.</p>'
        },
        'videos-15th-august-22': {
            title: '15th August 2022 - Video Highlights',
            text: '<p>Video highlights from our Independence Day celebration in 2022.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Independence Day 2022 Highlights' }
            ]
        },
        'videos-speech-dr-koushik-ghosh': {
            title: 'Speeches by Dr. Koushik Ghosh',
            text: '<p>A collection of speeches by Dr. Koushik Ghosh at various occasions.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Dr. Ghosh Speech 1' }
            ]
        },
        'videos-speech-dignitaries': {
            title: 'Speeches by Dignitaries',
            text: '<p>Videos of speeches delivered by esteemed dignitaries at our events.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Dignitary Speech' }
            ]
        },
        'videos-special-day-foundation': {
            title: 'Foundation Day - 1st Anniversary Video',
            text: '<p>Video highlights from our Foundation Day and 1st Anniversary celebrations.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Foundation Day Video' }
            ]
        },
        'videos-special-day-environmental': {
            title: 'Environmental Day - 2023 Video',
            text: '<p>Video highlights from our Environmental Day celebration in 2023.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Environmental Day 2023 Video' }
            ]
        },
        'videos-united-sports-club': {
            title: 'United Sports Club Video',
            text: '<p>Videos featuring our collaboration with United Sports Club.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'United Sports Club Collaboration' }
            ]
        },
        'videos-yoga-day-2022': {
            title: 'Celebration of Yoga Day - 2022 Video',
            text: '<p>Video highlights from our Yoga Day celebration in 2022.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Yoga Day 2022 Video' }
            ]
        },
        'videos-badna-festival': {
            title: 'Badna Festival Video',
            text: '<p>Video footage from the Badna Festival celebration.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Badna Festival Video' }
            ]
        },
        'videos-iskabon-film': {
            title: 'Iskabon Film at Gitanjali Hall Video',
            text: '<p>Video coverage of the Iscabon Film screening at Gitanjali Hall.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Iskabon Film Video' }
            ]
        },
        'videos-sub-junior-practice': {
            title: 'Sub-junior Practice Session Video',
            text: '<p>Video capturing the intense practice sessions of our sub-junior players.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Sub-junior Practice' }
            ]
        },
        'videos-practice-dr-khetmalis': {
            title: 'Special Practice Session by Dr. Mahesh Khetmalis Video',
            text: '<p>Video from a special practice session conducted by Dr. Mahesh Khetmalis.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Dr. Khetmalis Session' }
            ]
        },
        'videos-practice-dr-jewel': {
            title: 'Special Practice Session by Dr. Shahidul Islam Jewel Video',
            text: '<p>Video from a special practice session conducted by Dr. Shahidul Islam Jewel.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Dr. Jewel Session' }
            ]
        },
        'videos-practice-session': {
            title: 'Practice Session Video',
            text: '<p>Video highlights of our general practice sessions.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'General Practice' }
            ]
        },
        'videos-practice-match-dhansara': {
            title: 'Practice Match at Dhansara Video',
            text: '<p>Video from a practice match held at Dhansara.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Dhansara Practice Match' }
            ]
        },
        'videos-challenge-tournament-2023': {
            title: 'CHALLENGE FOOTBALL TOURNAMENT 2023 AT DEWANGANJ, BIRBHUM Video',
            text: '<p>Video highlights from the Challenge Football Tournament 2023 at Dewanganj, Birbhum.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Challenge Tournament 2023' }
            ]
        },
        'videos-bar-puja': {
            title: 'Bar Puja Video',
            text: '<p>Video coverage of the Bar Puja celebration.</p>',
            media: [
                { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Bar Puja Video' }
            ]
        },
        'contact': {
            title: 'Contact Us',
            text: 'Please use the information below to get in touch with us. We are always happy to answer your questions and provide more information about our academy.'
        },
         'donate-us': {
            title: 'We Need Your Help!',
            text: `
                <p>Donations, of any amount, will be most gratefully received by the authority of Santiniketan Tribal Academy. Give a helping hand to those – WHO NEED IT!</p>
                <p>Donations by way of cheques and drafts may please be drawn in favour of <b>“Santiniketan Tribal Academy”</b> and sent to:</p>
                <div style="margin-left: 20px; border-left: 2px solid #ccc; padding-left: 10px;">
                    <p>The Secretary<br>
                    Santiniketan Tribal Academy<br>
                    Rabindra Pally<br>
                    Near Boniad B.Ed College<br>
                    P.O.+ P.S. Santiniketan,<br>
                    Dist. Birbhum<br>
                    Pin-731235</p>
                    <p>Mail id: santiniketantribalacademy@gmail.com<br>
                    Mobile: 9474042139</p>
                </div>
                <br>
                <p>YOU MAY ALSO TRANSFER YOUR DONATIONS TO US DIRECTLY BY RTGS./ NEFT/ BANK TRANSFER:</p>
                <div style="background-color: #f8f5ec; padding: 15px; border-radius: 8px; margin-top: 10px;">
                    <p><b>ACCOUNT NAME:</b> Santiniketan Tribal Academy</p>
                    <p><b>ACCOUNT NO.:</b> 41200078940</p>
                    <p><b>BANK NAME:</b> STATE BANK OF INDIA</p>
                    <p><b>BRANCH NAME:</b> Santiniketan</p>
                    <p><b>BRANCH CODE:</b> 2121</p>
                    <p><b>IFSC CODE:</b> SBIN0002121</p>
                    <p><b>ACCOUNT TYPE:</b> CURRENT ACCOUNT</p>
                </div>
                <p style="margin-top: 15px;">Small Efforts Make Big Change !</p>
                <p style="font-style: italic; margin-top: 10px;">If you choose to send us by RTGS; NEFT; Bank Transfer etc., after the transaction, please send us an email with your name, address, contact no., email and for what purpose you wish to donate. Thanks in advance for your kind contribution.</p>
            `,
            button: { text: 'Proceed to Donate', href: '#' }
        },
    };

    // --- DOM Elements ---
    const desktopNavbar = document.getElementById('desktop-navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainContentDiv = document.getElementById('main-content');
    const webTune = document.getElementById('Web-tune');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const footer = document.querySelector('footer');

    // --- Carousel Manager (From Webpage 1 for Robustness) ---
    const carouselManager = (function() {
        let currentSlide = 0;
        let slideInterval;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dots .dot');

        function showSlide(n) {
            if (slides.length === 0) return;
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        return {
            init: function() {
                if (slides.length > 0) {
                    const prevButton = document.querySelector('.carousel-control.prev');
                    const nextButton = document.querySelector('.carousel-control.next');
                    slideInterval = setInterval(nextSlide, 5000);
                    nextButton.addEventListener('click', () => { nextSlide(); resetInterval(); });
                    prevButton.addEventListener('click', () => { showSlide(currentSlide - 1); resetInterval(); });
                    dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); resetInterval(); }));
                }
            },
            reset: function() {
                if (slides.length > 0) {
                    showSlide(0);
                    resetInterval();
                }
            }
        };
    })();

    // --- Utility Functions (From Webpage 1) ---
    function getStickyHeaderHeight() {
        const navbarContainer = document.querySelector('.navbar-container');
        const menuBarContainer = document.querySelector('.menu-bar-container');
        if (window.getComputedStyle(menuBarContainer).display === 'none') {
            return navbarContainer.offsetHeight;
        } else {
            return menuBarContainer.offsetHeight;
        }
    }

    function closeAllDesktopDropdowns() {
        document.querySelectorAll('.navbar .has-dropdown').forEach(item => {
            item.classList.remove('show-submenu', 'active');
        });
        document.querySelectorAll('.navbar > li').forEach(item => {
           item.classList.remove('active');
        });
    }

    function closeMobileMenu() {
        mobileMenuContainer.classList.remove('show');
        setTimeout(() => {
            mobileMenuOverlay.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
        mobileMenu.querySelectorAll('.has-submenu.active').forEach(item => {
            item.classList.remove('active');
        });
    }

    // --- [MODIFIED] ---
    function generateMenuHtml(items, parentType) {
        let html = '';
        items.forEach(item => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const dropdownClass = hasSubmenu ? 'has-dropdown' : '';
            const rightAlignClass = item.isRightAligned ? 'dropdown-right-align' : '';
            const donateButtonClass = item.isDonateButton ? 'donate-button' : '';
            const dataContentKeyAttr = item.contentKey ? `data-content-key="${item.contentKey}"` : '';
            
            html += `<li class="${dropdownClass} ${rightAlignClass} ${parentType === 'mobile' && hasSubmenu ? 'has-submenu' : ''}">`;
            html += `<a href="#" ${dataContentKeyAttr} class="${donateButtonClass} ${parentType === 'mobile' && hasSubmenu ? 'menu-toggle' : ''}">`;
            
            // --- [START OF FEATURE 1 CHANGE] ---
            if (hasSubmenu && parentType !== 'mobile') {
                html += `<span class="equals-icon equals-icon-left">=</span>`; // New left icon
            }
            html += `${item.label}`;
            if (hasSubmenu) {
                if (parentType === 'mobile') {
                     // --- [START OF FIX 2] ---
                     // Removed the "=" span icon for mobile. CSS will handle rotating the chevron.
                     html += `<i class="fas fa-chevron-down"></i>`;
                     // --- [END OF FIX 2] ---
                } else {
                    html += `<i class="fas fa-chevron-down"></i>`;
                    html += `<span class="equals-icon equals-icon-right">=</span>`; // Renamed right icon
                }
            }
            // --- [END OF FEATURE 1 CHANGE] ---

            html += `</a>`;

            if (hasSubmenu) {
                html += `<ul class="${parentType === 'mobile' ? 'submenu' : 'dropdown'}">`;
                html += generateMenuHtml(item.submenu, parentType);
                html += `</ul>`;
            }
            html += `</li>`;
        });
        return html;
    }

    function renderNavigation() {
        desktopNavbar.innerHTML = generateMenuHtml(menuData, 'desktop');
        mobileMenu.innerHTML = generateMenuHtml(menuData, 'mobile');
    }

    // --- Content Loading, Scrolling, and Titling (From Webpage 1) ---
    function loadContent(contentKey, label = '') {
        const content = contentData[contentKey] || {};
        const cleanLabel = label.replace(/<[^>]*>/g, '').trim();
        const title = content.title || cleanLabel || 'Content Not Found';
        let mediaSection = '';

        if (content.media && content.media.length > 0) {
            mediaSection = '<div class="media-container">';
            content.media.forEach(mediaItem => {
                mediaSection += '<div class="media-item">';
                switch (mediaItem.type) {
                    case 'image':
                        mediaSection += `<img src="${mediaItem.src}" alt="${mediaItem.alt || ''}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found';">`;
                        break;
                    case 'video':
                        mediaSection += `<video controls><source src="${mediaItem.src}" type="video/mp4">Your browser does not support the video tag.</video>`;
                        break;
                    case 'audio':
                        mediaSection += `<audio controls src="${mediaItem.src}">Your browser does not support the audio element.</audio>`;
                        break;
                    case 'pdf':
                        mediaSection += `<embed src="${mediaItem.src}" type="application/pdf" width="100%" height="400px" />`;
                        break;
                }
                if (mediaItem.caption || mediaItem.title) {
                    mediaSection += `<h4>${mediaItem.caption || mediaType.title}</h4>`;
                }
                mediaSection += '</div>';
            });
            mediaSection += '</div>';
        }
        
        mainContentDiv.innerHTML = `
            <div class="dynamic-content">
                <h2>${title}</h2>
                <div>${content.text || '<p>Content for this menu item is coming soon.</p>'}</div>
                ${mediaSection}
                ${content.button ? `<a href="${content.button.href}" class="donate-button" style="display:inline-block; margin-top: 15px;">${content.button.text}</a>` : ''}
            </div>
        `;

        if (!sessionStorage.getItem('scrollPosition')) {
            if (contentKey === 'home') {
                carouselManager.reset();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = mainContentDiv;
                if (targetElement) {
                    const headerHeight = getStickyHeaderHeight();
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight - 15;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        }
    }

    // --- Priority Navigation and Dropdown Management (From Webpage 1) ---
    function manageNavbarItems() {
        desktopNavbar.style.visibility = 'visible';
        const navbarContainer = document.querySelector('.navbar-container .container');
        let moreMenuItem = desktopNavbar.querySelector('.more-menu-item');
        if (!moreMenuItem) {
            moreMenuItem = document.createElement('li');
            moreMenuItem.classList.add('has-dropdown', 'more-menu-item');
            moreMenuItem.innerHTML = `<a href="#">More <i class="fas fa-chevron-down"></i><span class="equals-icon equals-icon-right">=</span></a><ul class="dropdown"></ul>`;
            desktopNavbar.appendChild(moreMenuItem);
        }
        const moreDropdownList = moreMenuItem.querySelector('.dropdown');
        while (moreDropdownList.firstChild) {
            desktopNavbar.insertBefore(moreDropdownList.firstChild, moreMenuItem);
        }
        const allNavItems = Array.from(desktopNavbar.children);
        const availableWidth = navbarContainer.offsetWidth;
        let currentWidth = 0;
        let moreItemsExist = false;
        moreMenuItem.style.display = 'block';
        const moreMenuWidth = moreMenuItem.offsetWidth;
        moreMenuItem.style.display = 'none';
        const itemsToCheck = allNavItems.filter(item => !item.classList.contains('more-menu-item'));
        for (const item of itemsToCheck) {
            item.style.display = '';
            currentWidth += item.offsetWidth;
            if (currentWidth + moreMenuWidth > availableWidth) {
                moreItemsExist = true;
                const itemsToMove = itemsToCheck.slice(itemsToCheck.indexOf(item));
                itemsToMove.forEach(itemToMove => moreDropdownList.appendChild(itemToMove));
                break;
            }
        }
        moreMenuItem.style.display = moreItemsExist ? 'block' : 'none';
    }
    
    // --- [START OF MODIFIED FUNCTION] ---
    // --- INTELLIGENT DROPDOWN POSITIONING (HORIZONTAL & VERTICAL) ---
    function checkDropdownPosition(dropdownElement) {
        if (!dropdownElement) return;

        const GAP = 10; // The desired gap from the viewport edge in pixels
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const dropdownWidth = dropdownElement.offsetWidth;
        const dropdownHeight = dropdownElement.offsetHeight;
        
        const parentLi = dropdownElement.closest('li.has-dropdown');
        if (!parentLi) return;
        
        const parentRect = parentLi.getBoundingClientRect();
        const isNested = parentLi.parentElement.classList.contains('dropdown');

        // --- Reset all alignment classes and JS styles ---
        parentLi.classList.remove('opens-left'); 
        dropdownElement.classList.remove('align-right', 'align-left', 'align-left-edge');
        dropdownElement.style.top = ''; // Reset vertical alignment
        dropdownElement.style.right = ''; // Reset horizontal alignment

        // --- 1. HORIZONTAL POSITIONING ---
        if (isNested) {
            // --- Logic for NESTED dropdowns (L2+) ---
            const overflowsRight = (parentRect.right + dropdownWidth) > (viewportWidth - GAP);
            
            if (overflowsRight) {
                const hasSpaceLeft = (parentRect.left - dropdownWidth) > GAP;

                if (hasSpaceLeft) {
                    // Open normally to the left
                    dropdownElement.classList.add('align-left');
                    parentLi.classList.add('opens-left');
                } else {
                    // --- [THIS IS THE FIX] ---
                    // Can't open right (overflows), can't open left (overflows).
                    // Add the 'align-left-edge' class (for borders/icon)
                    dropdownElement.classList.add('align-left-edge');
                    parentLi.classList.add('opens-left');
                    
                    // And dynamically calculate the 'right' property to override the class's
                    // default 'right: 5px' and align it to the viewport.
                    
                    // Calculate how many pixels the parent's right edge is past the viewport edge (minus gap).
                    const newRightPx = parentRect.right - (viewportWidth - GAP);
                    
                    // Apply this as an inline style.
                    // This will position the dropdown's right edge exactly at (viewportWidth - GAP).
                    dropdownElement.style.right = newRightPx + 'px';
                }
            }
            // If it doesn't overflow right, it opens right by default (no classes/styles needed).

        } else { 
            // --- Logic for TOP-LEVEL dropdowns (L1) ---
            const defaultRightEdge = parentRect.left + dropdownWidth;

            if (defaultRightEdge > (viewportWidth - GAP)) {
                dropdownElement.classList.add('align-right');
            }
            // If it doesn't overflow right, it opens left (default)
        }

        // --- 2. VERTICAL POSITIONING --- (This logic remains unchanged)
        
        let dropdownTopViewport;
        
        if (isNested) {
            // Nested menus align top-to-top with parent 'li' by default (top: 0)
            dropdownTopViewport = parentRect.top;
        } else {
            // L1 menus align top-to-bottom with parent 'li' by default (top: 100%)
            dropdownTopViewport = parentRect.bottom;
        }

        const dropdownBottomViewport = dropdownTopViewport + dropdownHeight;
        const overflowsBottom = dropdownBottomViewport > (viewportHeight - GAP);

        if (overflowsBottom) {
            // It overflows. We need to shift it up.
            
            // Calculate the desired top position relative to the viewport
            let newTopViewport = viewportHeight - dropdownHeight - GAP;

            // Ensure the dropdown doesn't go *above* the top of the viewport
            if (newTopViewport < GAP) {
                newTopViewport = GAP;
            }

            // This calculation works for both L1 and L2+ menus.
            // It calculates the new 'top' property relative to the parent 'li'
            // that will result in the desired 'newTopViewport' position.
            const newTopRelative = newTopViewport - parentRect.top;

            dropdownElement.style.top = newTopRelative + 'px';
        }
    }
    // --- [END OF MODIFIED FUNCTION] ---


    // --- [NEW] FUNCTION TO RE-EVALUATE OPEN DROPDOWNS ON RESIZE ---
    function repositionOpenDropdowns() {
        const openDropdowns = document.querySelectorAll('.has-dropdown.show-submenu > .dropdown');
        openDropdowns.forEach(dropdown => {
            checkDropdownPosition(dropdown);
        });
    }


    // --- Event Listeners (From Webpage 1) ---
    desktopNavbar.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        const parentLi = link.closest('li');
        if (!parentLi) return;

        const contentKey = link.dataset.contentKey;
        const hasSubmenu = parentLi.classList.contains('has-dropdown');

        if (hasSubmenu) {
            e.preventDefault();
            e.stopPropagation();
            const isCurrentlyOpen = parentLi.classList.contains('show-submenu');
            const isTopLevel = parentLi.parentElement === desktopNavbar;

            if (isTopLevel) {
                // Find all *other* top-level menus
                document.querySelectorAll('#desktop-navbar > li.has-dropdown').forEach(item => {
                    if (item !== parentLi) { 
                        item.classList.remove('show-submenu', 'active');
                        
                        // **THIS IS THE FIX from last time:**
                        item.querySelectorAll('.has-dropdown.show-submenu').forEach(subItem => {
                            subItem.classList.remove('show-submenu', 'active');
                        });
                    }
                });
            } else {
                // This logic (for nested menus) was already correct.
                [...parentLi.parentElement.children].forEach(sibling => {
                    if (sibling !== parentLi && sibling.classList.contains('has-dropdown')) {
                        sibling.classList.remove('show-submenu');
                        sibling.querySelectorAll('.show-submenu').forEach(sub => sub.classList.remove('show-submenu'));
                    }
                });
            }
            
            parentLi.classList.toggle('show-submenu', !isCurrentlyOpen);
            parentLi.classList.toggle('active', !isCurrentlyOpen);

            if (!isCurrentlyOpen) {
                const dropdown = parentLi.querySelector('.dropdown');
                // Run the check to correctly position the dropdown
                checkDropdownPosition(dropdown);
            }
        }

        if (contentKey && (!hasSubmenu || link.classList.contains('donate-button'))) {
            e.preventDefault();
            loadContent(contentKey, link.innerHTML);
            sessionStorage.setItem('currentContentKey', contentKey);
            closeAllDesktopDropdowns();
            document.querySelectorAll('.navbar li').forEach(item => item.classList.remove('active'));
            let current = parentLi;
            while(current && current.parentElement.closest('.navbar')){
                current.classList.add('active');
                current = current.parentElement.closest('li');
            }
        }
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.navbar')) closeAllDesktopDropdowns();
    });

    mobileMenu.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        const contentKey = link.dataset.contentKey;
        const parentLi = link.closest('li');
        if (parentLi && parentLi.classList.contains('has-submenu') && link.classList.contains('menu-toggle')) {
            e.preventDefault();
            e.stopPropagation();
            parentLi.classList.toggle('active');
        } else if (contentKey) {
            e.preventDefault();
            loadContent(contentKey, link.innerHTML);
            sessionStorage.setItem('currentContentKey', contentKey);
            closeMobileMenu();
        }
    });

    if (webTune) {
        document.body.addEventListener('click', e => {
            if (e.target.closest('.home-audio-toggle')) {
                webTune.paused ? webTune.play().catch(console.error) : webTune.pause();
            }
        }, true);
    }
    
    footer.addEventListener('click', e => {
        const link = e.target.closest('a[data-content-key]');
        if (link) {
            e.preventDefault();
            loadContent(link.dataset.contentKey, link.innerHTML);
            sessionStorage.setItem('currentContentKey', link.dataset.contentKey);
        }
    });
    
    // Mobile menu toggles
    navbarToggle.addEventListener('click', () => {
        mobileMenuOverlay.style.display = 'block';
        mobileMenuContainer.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // --- Page Initialization (From Webpage 1) ---
    renderNavigation();
    carouselManager.init();
    loadContent(sessionStorage.getItem('currentContentKey') || 'home', menuData[0].label);
    
    window.addEventListener('beforeunload', () => sessionStorage.setItem('scrollPosition', window.scrollY));
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        sessionStorage.removeItem('scrollPosition');
    }

    document.addEventListener('contextmenu', e => e.preventDefault());

    window.addEventListener('load', () => {
        manageNavbarItems();
        // [MODIFIED] Attach both functions to the resize event
        window.addEventListener('resize', () => {
            manageNavbarItems();
            repositionOpenDropdowns(); // Re-check dropdown positions on resize/zoom
        });
    });
});
