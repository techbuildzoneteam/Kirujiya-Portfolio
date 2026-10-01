document.body.innerHTML = `<!-- ================= NAVBAR ================= -->
    <header class="header">
        <nav class="navbar container">

            <!-- Logo -->
            <a href="#home" class="logo">
                Kirujiyaa
            </a>

            <!-- Navigation Menu -->
            <div class="nav-menu" id="navMenu">

                <ul class="nav-list">

                    <li class="nav-item">
                        <a href="#home" class="nav-link active">
                            <!-- <i class="fa-solid fa-house"></i> -->
                            <span>Home</span>
                        </a>
                    </li>

                    

                    <li class="nav-item">
                        <a href="#education" class="nav-link">
                            <!-- <i class="fa-solid fa-graduation-cap"></i> -->
                            <span>Education</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#experience" class="nav-link">
                            <!-- <i class="fa-solid fa-briefcase"></i> -->
                            <span>Experience</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#skills" class="nav-link">
                            <!-- <i class="fa-solid fa-code"></i> -->
                            <span>Skills</span>
                        </a>
                    </li>

                    

                    <li class="nav-item">
                        <a href="#footer" class="nav-link">
                            <!-- <i class="fa-solid fa-envelope"></i> -->
                            <span>Contact</span>
                        </a>
                    </li>

                </ul>

            </div>

            <!-- Right Side Controls -->
            <div class="nav-actions">

                <!-- Theme Toggle -->
                <button
                    class="theme-toggle"
                    id="themeToggle"
                    aria-label="Toggle dark mode"
                    title="Toggle theme"
                >
                    <i class="fa-solid fa-moon"></i>
                </button>

                <!-- Mobile Menu Button -->
                <button
                    class="menu-toggle"
                    id="menuToggle"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                >
                    <i class="fa-solid fa-bars"></i>
                </button>

            </div>

        </nav>
    </header>





    <!-- ================= HOME SECTION ================= -->
<section class="home" id="home">

    <div class="home-container container">

        <!-- LEFT: INTRODUCTION -->
        <div class="home-content">

            <!-- <p class="home-label">
                Welcome to my portfolio
            </p> -->

            <h1 class="home-title">
                I'm <span>Kirujiyaa Kanagasundaram</span>
            </h1>

            <h2 class="home-role">
                IT Professional
            </h2>

            <p class="home-description">
                I am a dedicated and responsible professional with experience in project management, data entry, renewable energy, water quality management, and aquaculture. I have a multidisciplinary educational background in Sociology, ICT, Public Administration, Aquaculture, and Human Resource Management.
            </p>

            <div class="home-buttons">

                <a href="#contact" class="btn btn-primary">
                    Contact Me
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

                <a href="pdf/cv.pdf"
                   class="btn btn-outline"
                   target="_blank">
                    Download CV
                    <i class="fa-solid fa-download"></i>
                </a>

            </div>

            <!-- SOCIAL LINKS -->
            <div class="home-social">

          

                <div class="social-links">

                    <a href="#"
                       aria-label="LinkedIn"
                       title="LinkedIn">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="#"
                       aria-label="facebook"
                       title="facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>



                    <a href="#"
                       aria-label="Email"
                       title="Email">
                        <i class="fa-solid fa-envelope"></i>
                    </a>

                </div>

            </div>

        </div>


        <!-- RIGHT: PROFESSIONAL IMAGE -->
        <div class="home-visual">

            <div class="home-image">

                <img
                    src="assets/img_8.jpg"
                    alt="Professional portfolio image"
                >

            </div>

            

        </div>

    </div>

</section>





<!-- ================= EDUCATION SECTION ================= -->
<section class="education section" id="education">
<div class="container">

    <!-- Section Heading -->
    <div class="section-heading">

        <p class="section-label">
            Academic Background
        </p>

        <h2 class="section-title">
            Education Qualification
        </h2>

        <p class="section-description">
            My academic journey and educational qualifications
            that have contributed to my personal and professional development.
        </p>

    </div>


    <!-- Education Timeline -->
    <div class="education-list">

        <!-- Education Item 01 -->
        <article class="education-item">

            <div class="education-year">
                <span>2020 – 2021</span>
            </div>

            <div class="education-line">
                <span class="education-dot"></span>
            </div>

            <div class="education-content">

                <span class="education-type">
                    Bachelor's Degree
                </span>

                <h3>
                    Bachelor of Arts (External)
                </h3>

                <h4>
                    Southeastern University of Sri Lanka
                </h4>

                <p>
                    Completed an external Bachelor of Arts degree with
                    a multidisciplinary academic focus on Sociology,
                    Information and Communication Technology (ICT),
                    and Public Administration.
                </p>

                <div class="education-details">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Sri Lanka
                    </span>

                    <span>
                        <i class="fa-solid fa-graduation-cap"></i>
                        2020 – 2021
                    </span>

                </div>

            </div>

        </article>


        <!-- Education Item 02 -->
        <article class="education-item">

            <div class="education-year">
                <span>2019</span>
            </div>

            <div class="education-line">
                <span class="education-dot"></span>
            </div>

            <div class="education-content">

                <span class="education-type">
                    Higher National Diploma
                </span>

                <h3>
                    Higher National Diploma in Aquaculture
                    and Aquatic Resources Management
                </h3>

                <h4>
                    University College of Anuradhapura
                </h4>

                <p>
                    Completed a Higher National Diploma focused on
                    Aquaculture and Aquatic Resources Management,
                    developing knowledge and practical understanding
                    of aquatic resource management and related fields.
                </p>

                <div class="education-details">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Anuradhapura, Sri Lanka
                    </span>

                    <span>
                        <i class="fa-solid fa-award"></i>
                        Diploma
                    </span>

                </div>

            </div>

        </article>


        <!-- Education Item 03 -->
        <article class="education-item">

            <div class="education-year">
                <span>2023</span>
            </div>

            <div class="education-line">
                <span class="education-dot"></span>
            </div>

            <div class="education-content">

                <span class="education-type">
                    Professional Certificate
                </span>

                <h3>
                    Professional Certificate in Human Resource Management
                </h3>

                <h4>
                    Virtual Academy Sri Lanka
                </h4>

                <p>
                    Completed professional training in Human Resource
                    Management, gaining knowledge of key HR practices,
                    employee management and organizational processes.
                </p>

                <div class="education-details">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Sri Lanka
                    </span>

                    <span>
                        <i class="fa-solid fa-certificate"></i>
                        2023
                    </span>

                </div>

            </div>

        </article>


        <!-- Education Item 04 -->
        <article class="education-item">

            <div class="education-year">
                <span>2018 – 2019</span>
            </div>

            <div class="education-line">
                <span class="education-dot"></span>
            </div>

            <div class="education-content">

                <span class="education-type">
                    G.C.E. Advanced Level
                </span>

                <h3>
                    General Certificate of Education –
                    Advanced Level
                </h3>

                <h4>
                    BT/Mahajana College National School
                </h4>

                <p>
                    Successfully completed the G.C.E. Advanced Level
                    examination with B, B and C passes in the
                    Bio Systems Technology stream.
                </p>

                <div class="education-details">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Sri Lanka
                    </span>

                    <span>
                        <i class="fa-solid fa-certificate"></i>
                        Index No: 3924793
                    </span>

                </div>

            </div>

        </article>


        <!-- Education Item 05 -->
        <article class="education-item">

            <div class="education-year">
                <span>2015</span>
            </div>

            <div class="education-line">
                <span class="education-dot"></span>
            </div>

            <div class="education-content">

                <span class="education-type">
                    Secondary Education
                </span>

                <h3>
                    G.C.E. Ordinary Level
                </h3>

                <h4>
                    BT/Vivekananda Ladies College
                </h4>

                <p>
                    Successfully passed all subjects at the G.C.E.
                    Ordinary Level examination, with additional
                    C passes in Aquatic Bio-resources Technology
                    and English Language.
                </p>

                <div class="education-details">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        Sri Lanka
                    </span>

                    <span>
                        <i class="fa-solid fa-certificate"></i>
                        Index No: 55859259
                    </span>

                </div>

            </div>

        </article>


        
    </div>

</div>

</section>





<!-- ================= EXPERIENCE SECTION ================= -->
<section class="experience section" id="experience">
    <div class="container">
        <!-- Section Heading -->
        <div class="section-heading">
            <p class="section-label">Professional Journey</p>

            <h2 class="section-title">Working Experience</h2>

            <p class="section-description">
                A summary of my professional experience, responsibilities and contributions throughout my career.
            </p>
        </div>

        <!-- Experience List -->
        <div class="experience-list">
            <!-- Experience 01 -->
            <article class="experience-item">
                <div class="experience-date">
                    <span>2024 – 2025</span>
                </div>

                <div class="experience-line">
                    <span class="experience-dot"></span>
                </div>

                <div class="experience-content">
                    <div class="experience-header">
                        <div>
                            <span class="experience-type"> Full-Time </span>

                            <h3>Project Manager</h3>

                            <h4>SPM Renewables (PVT) Ltd</h4>
                        </div>

                        <span class="experience-location">
                            <i class="fa-solid fa-location-dot"></i>
                            Sri Lanka
                        </span>
                    </div>

                    <p class="experience-description">
                        Managed multiple solar and renewable energy projects, overseeing end-to-end operations including
                        planning, site coordination, system design, supervision, and project execution.
                    </p>

                    <div class="experience-responsibilities">
                        <h5>Key Responsibilities</h5>

                        <ul>
                            <li>Managed multiple solar and renewable energy projects.</li>

                            <li>Oversaw end-to-end operations including planning and site coordination.</li>

                            <li>Handled system design, supervision, and project execution.</li>
                        </ul>
                    </div>

                    <div class="experience-technologies">
                        <span>Microsoft Excel</span>
                        <span>Microsoft Word</span>
                        <span>PowerPoint</span>
                        <span>Research</span>
                        <span>Equipment Maintenance</span>
                        <span>Field Work</span>
                    </div>
                </div>
            </article>

            <!-- Experience 02 -->
            <article class="experience-item">
                <div class="experience-date">
                    <span>06 Months – 2024</span>
                </div>

                <div class="experience-line">
                    <span class="experience-dot"></span>
                </div>

                <div class="experience-content">
                    <div class="experience-header">
                        <div>
                            <span class="experience-type"> Full-Time </span>

                            <h3>Data Entry Operator</h3>

                            <h4>Space Groups – Civil Comms Electrical</h4>
                        </div>

                        <span class="experience-location">
                            <i class="fa-solid fa-location-dot"></i>
                            Sydney, Australia
                        </span>
                    </div>

                    <p class="experience-description">
                        Prepared regular reports for management, handled board-related tasks, communicated
                        professionally with clients and stakeholders, and managed accounts using QuickBooks.
                    </p>

                    <div class="experience-responsibilities">
                        <h5>Key Responsibilities</h5>

                        <ul>
                            <li>Prepared regular reports for management.</li>

                            <li>Handled board-related tasks.</li>

                            <li>Communicated professionally with clients and stakeholders.</li>

                            <li>Managed accounts using QuickBooks.</li>
                        </ul>
                    </div>

                    <div class="experience-technologies">
                        <span>QuickBooks</span>
                    </div>
                </div>
            </article>

            <!-- Experience 03 -->
            <article class="experience-item">
                <div class="experience-date">
                    <span>06 Months – 2023</span>
                </div>

                <div class="experience-line">
                    <span class="experience-dot"></span>
                </div>

                <div class="experience-content">
                    <div class="experience-header">
                        <div>
                            <span class="experience-type"> Internship </span>

                            <h3>Trainee</h3>

                            <h4>National Water Supply & Drainage Board</h4>
                        </div>

                        <span class="experience-location">
                            <i class="fa-solid fa-location-dot"></i>
                            Batticaloa, Sri Lanka
                        </span>
                    </div>

                    <p class="experience-description">
                        Handled multiple responsibilities including water quality testing and purification processes,
                        measuring and analyzing water parameters, and managing documentation and files to meet ISO
                        standards.
                    </p>

                    <div class="experience-responsibilities">
                        <h5>Key Responsibilities</h5>

                        <ul>
                            <li>Handled water quality testing and purification processes.</li>

                            <li>Measured and analyzed water parameters.</li>

                            <li>Managed documentation and files to meet ISO standards.</li>
                        </ul>
                    </div>

                    <div class="experience-technologies">
                        <span>Water Quality Testing</span>
                        <span>Water Purification</span>
                        <span>Documentation</span>
                        <span>ISO Standards</span>
                    </div>
                </div>
            </article>

            <!-- Experience 04 -->
            <article class="experience-item">
                <div class="experience-date">
                    <span>06 Months – 2022</span>
                </div>

                <div class="experience-line">
                    <span class="experience-dot"></span>
                </div>

                <div class="experience-content">
                    <div class="experience-header">
                        <div>
                            <span class="experience-type"> Internship </span>

                            <h3>Trainee</h3>

                            <h4>Oceanpick (Pvt) Limited</h4>
                        </div>

                        <span class="experience-location">
                            <i class="fa-solid fa-location-dot"></i>
                            Trincomalee, Sri Lanka
                        </span>
                    </div>

                    <p class="experience-description">
                        Handled water quality equipment, conducted harvesting practices and sample collection, managed
                        the RAS system and brood stock, oversaw live feed management, and organized awareness programs
                        on worker safety and treatment practices.
                    </p>

                    <div class="experience-responsibilities">
                        <h5>Key Responsibilities</h5>

                        <ul>
                            <li>Handled water quality equipment.</li>

                            <li>Conducted harvesting practices and sample collection.</li>

                            <li>Managed the RAS system and brood stock.</li>

                            <li>Oversaw live feed management.</li>

                            <li>Organized awareness programs on worker safety and treatment practices.</li>
                        </ul>
                    </div>

                    <div class="experience-technologies">
                        <span>Water Quality Equipment</span>
                        <span>RAS System</span>
                        <span>Brood Stock</span>
                        <span>Live Feed Management</span>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>



<!-- ========================================
     WORKS / GALLERY
======================================== -->

<section class="works-section" id="works">
    <div class="container">

        <div class="works-gallery">

            <a href="#" class="work-item work-large">
                <img src="Assets/img_1.jpg" alt="Work 1">
            </a>

            <a href="#" class="work-item">
                <img src="Assets/img_2.jpg" alt="Work 2">
            </a>

            <a href="#" class="work-item">
                <img src="Assets/img_3.jpg" alt="Work 3">
            </a>

            <a href="#" class="work-item work-tall">
                <img src="Assets/img_4.jpg" alt="Work 4">
            </a>

            <a href="#" class="work-item">
                <img src="Assets/img_5.jpg" alt="Work 5">
            </a>

            <a href="#" class="work-item work-wide">
                <img src="Assets/img_6.jpg" alt="Work 6">
            </a>

            <a href="#" class="work-item">
                <img src="Assets/img_7.jpg" alt="Work 7">
            </a>

            <a href="#" class="work-item">
                <img src="Assets/8.jpg" alt="Work 8">
            </a>

        </div>

    </div>
</section>


<!-- ================= SKILLS SECTION ================= -->
<section class="skills section" id="skills">

    <div class="container">

        <!-- Section Heading -->
        <div class="section-heading">

            <p class="section-label">
                Professional Capabilities
            </p>

            <h2 class="section-title">
                Skills
            </h2>

            <p class="section-description">
                A combination of technical expertise and professional
                skills that I use to complete projects effectively.
            </p>

        </div>


        <!-- ================= SKILLS GRID ================= -->
        <div class="skills-grid">


            <!-- ====================================
                 HARD SKILLS
            ===================================== -->

            <div class="skills-column">

                <div class="skills-column-header">

    <div class="skills-icon">
        <i class="fa-solid fa-screwdriver-wrench"></i>
    </div>

    <div>
        <span>Technical Skills</span>

        <h3>Hard Skills</h3>
    </div>

</div>


<div class="skill-list">

    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Microsoft Excel</span>
            <span>Proficiency</span>
        </div>

        <div class="skill-bar">
            <span style="width: 85%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Microsoft Word</span>
            <span>Proficiency</span>
        </div>

        <div class="skill-bar">
            <span style="width: 85%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Microsoft PowerPoint</span>
            <span>Proficiency</span>
        </div>

        <div class="skill-bar">
            <span style="width: 85%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Typing Speed &amp; Accuracy</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 80%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Research Skills</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 80%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Internet Browsing</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 85%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Presentation Software</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 80%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Email Communication</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 85%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Equipment Maintenance</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 75%;"></span>
        </div>

    </div>


    <!-- Skill -->
    <div class="skill-item">

        <div class="skill-info">
            <span>Field Work</span>
            <span>Skill</span>
        </div>

        <div class="skill-bar">
            <span style="width: 80%;"></span>
        </div>

    </div>

</div>


            </div>


            <!-- ====================================
                 SOFT SKILLS
            ===================================== -->

            <div class="skills-column">

                <div class="skills-column-header">

    <div class="skills-icon">
        <i class="fa-solid fa-people-group"></i>
    </div>

    <div>
        <span>Professional Qualities</span>

        <h3>Soft Skills</h3>
    </div>

</div>


<div class="soft-skills-list">


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-people-group"></i>
        </div>

        <div>
            <h4>Teamwork</h4>

            <p>
                Ability to work effectively with others
                and contribute to team goals.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-lightbulb"></i>
        </div>

        <div>
            <h4>Problem Solving</h4>

            <p>
                Ability to identify problems and
                find practical solutions.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-comments"></i>
        </div>

        <div>
            <h4>Good Communication</h4>

            <p>
                Clear and effective communication
                with colleagues and others.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-user-tie"></i>
        </div>

        <div>
            <h4>Leadership</h4>

            <p>
                Ability to take responsibility,
                guide others and support team goals.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-clock"></i>
        </div>

        <div>
            <h4>Punctuality</h4>

            <p>
                Committed to completing responsibilities
                on time and maintaining punctuality.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-gauge-high"></i>
        </div>

        <div>
            <h4>Work Under Pressure</h4>

            <p>
                Able to remain focused and responsible
                when working under pressure.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-crosshairs"></i>
        </div>

        <div>
            <h4>Focus</h4>

            <p>
                Maintains concentration and attention
                while completing assigned tasks.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-user-check"></i>
        </div>

        <div>
            <h4>Being Responsible</h4>

            <p>
                Takes responsibility for assigned duties
                and completed work.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-compass"></i>
        </div>

        <div>
            <h4>Being Solution Oriented</h4>

            <p>
                Focuses on finding practical solutions
                to challenges and tasks.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-calendar-check"></i>
        </div>

        <div>
            <h4>Time Management</h4>

            <p>
                Organizes tasks and manages available
                time effectively.
            </p>
        </div>

    </div>


    <div class="soft-skill-item">

        <div class="soft-skill-icon">
            <i class="fa-solid fa-brain"></i>
        </div>

        <div>
            <h4>Critical Thinking</h4>

            <p>
                Uses careful analysis and reasoning
                when considering tasks and situations.
            </p>
        </div>

    </div>


</div>


            </div>

        </div>

    </div>

</section>


<footer class="portfolio-footer" id="footer">
    <div class="footer-container" id="contact">
        <!-- Brand / Intro -->
        <div class="footer-brand">
            <a href="#" class="footer-logo">Kirujiyaa<span> Kanagasundaram.</span></a>

            <p>
                Building thoughtful digital experiences with clean design, modern technology, and attention to detail.
            </p>

            <a href="mailto:hello@example.com" class="footer-email"> hello@example.com </a>
        </div>

        <!-- Navigation -->
        <div class="footer-column">
            <h3>Explore</h3>
            <ul>
                <li><a href="Index.html">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <!-- Contact -->
        <div class="footer-column">
            <h3>Contact</h3>
            <ul class="contact-list">
                <li>
                    <span>✉</span>
                    <a href="mailto:hello@example.com">hello@example.com</a>
                </li>
                <li>
                    <span>☎</span>
                    <a href="tel:+94763574839">+94 76 357 4839</a>
                </li>
                <li>
                    <span>⌖</span>
                    <span>Batticaloa, Sri Lanka</span>
                </li>
            </ul>
        </div>

        <!-- Socials -->
        <div class="footer-column">
            <h3>Follow Me</h3>

            <div class="social-links">
                <!-- <a href="#" aria-label="GitHub">
        <i class="fa-brands fa-github"></i>
    </a> -->

    <a href="#" aria-label="LinkedIn">
        <i class="fa-brands fa-linkedin-in"></i>
    </a>

    <a href="#" aria-label="fa-facebook">
        <i class="fa-brands fa-facebook"></i>
    </a>

    <a href="#" aria-label="Instagram">
        <i class="fa-brands fa-instagram"></i>
    </a>

            </div>

            <a href="#home" class="footer-cta"> Let's work together <span>↗</span> </a>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2026 Kirujiyaa Kanagasundaram. All rights reserved.</p>
        <!-- <div class="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
        </div> -->
    </div>
</footer>









<style>

/* ========================================
   ROOT VARIABLES
======================================== */

:root {
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;

    --bg-color: #ffffff;
    --surface-color: #f8fafc;
    --text-color: #111827;
    --text-secondary: #64748b;

    --border-color: #e5e7eb;

    --navbar-bg: rgba(255, 255, 255, 0.92);

    --shadow:
        0 4px 20px rgba(0, 0, 0, 0.08);

    --transition: 0.3s ease;
}


/* ========================================
   DARK THEME
======================================== */

body.dark-theme {
    --primary-color: #60a5fa;
    --primary-hover: #93c5fd;

    --bg-color: #0f172a;
    --surface-color: #1e293b;
    --text-color: #f8fafc;
    --text-secondary: #94a3b8;

    --border-color: #334155;

    --navbar-bg: rgba(15, 23, 42, 0.92);

    --shadow:
        0 4px 20px rgba(0, 0, 0, 0.3);
}


/* ========================================
   RESET
======================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);

    transition:
        background-color var(--transition),
        color var(--transition);
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* ========================================
   CONTAINER
======================================== */

.container {
    width: min(1200px, 92%);
    margin: 0 auto;
}


/* ========================================
   HEADER
======================================== */

.header {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background: var(--navbar-bg);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    border-bottom: 1px solid var(--border-color);

    transition:
        background-color var(--transition),
        border-color var(--transition);
}


/* ========================================
   NAVBAR
======================================== */

.navbar {
    min-height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 25px;
}


/* ========================================
   LOGO
======================================== */

.logo {
    font-size: 1.45rem;
    font-weight: 700;

    color: var(--text-color);

    white-space: nowrap;

    transition: color var(--transition);
}

.logo span {
    color: var(--primary-color);

    transition: color var(--transition);
}


/* ========================================
   NAV MENU
======================================== */

.nav-menu {
    display: flex;
    align-items: center;
}


/* ========================================
   NAV LIST
======================================== */

.nav-list {
    display: flex;
    align-items: center;

    list-style: none;

    gap: 5px;
}


/* ========================================
   NAV LINK
======================================== */

.nav-link {
    position: relative;

    display: flex;
    align-items: center;

    gap: 7px;

    padding: 10px 12px;

    color: var(--text-secondary);

    font-size: 0.88rem;
    font-weight: 500;

    border-radius: 8px;

    transition:
        color var(--transition),
        background-color var(--transition);
}

.nav-link i {
    font-size: 0.85rem;
}

.nav-link:hover {
    color: var(--primary-color);
    background-color: var(--surface-color);
}

.nav-link.active {
    color: var(--primary-color);
}


/* ========================================
   NAV ACTIONS
======================================== */

.nav-actions {
    display: flex;
    align-items: center;

    gap: 10px;
}


/* ========================================
   THEME BUTTON
======================================== */

.theme-toggle,
.menu-toggle {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border-color);

    border-radius: 10px;

    background: var(--surface-color);

    color: var(--text-color);

    cursor: pointer;

    font-size: 1rem;

    transition:
        color var(--transition),
        background-color var(--transition),
        border-color var(--transition),
        transform var(--transition);
}

.theme-toggle:hover,
.menu-toggle:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);

    transform: translateY(-2px);
}


/* ========================================
   MOBILE MENU BUTTON
======================================== */

.menu-toggle {
    display: none;
}


/* ========================================
   DEMO SECTIONS
======================================== */

.demo-section {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 100px 20px;

    border-bottom: 1px solid var(--border-color);
}

.demo-section h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1000px) {

    .nav-link {
        padding: 9px 8px;
        font-size: 0.8rem;
    }

    .nav-link i {
        display: none;
    }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

    .navbar {
        min-height: 68px;
    }

    .menu-toggle {
        display: flex;
    }

    /* Mobile Navigation */

    .nav-menu {
        position: absolute;

        top: calc(100% + 10px);

        left: 4%;

        width: 92%;

        padding: 15px;

        background: var(--bg-color);

        border: 1px solid var(--border-color);

        border-radius: 14px;

        box-shadow: var(--shadow);

        opacity: 0;
        visibility: hidden;

        transform: translateY(-10px);

        transition:
            opacity var(--transition),
            visibility var(--transition),
            transform var(--transition);
    }


    /* Open Menu */

    .nav-menu.show {
        opacity: 1;
        visibility: visible;

        transform: translateY(0);
    }


    .nav-list {
        width: 100%;

        flex-direction: column;

        align-items: stretch;

        gap: 4px;
    }


    .nav-link {
        width: 100%;

        padding: 12px 14px;

        font-size: 0.9rem;

        border-radius: 8px;
    }


    .nav-link i {
        display: inline-block;

        width: 20px;

        text-align: center;
    }


    .nav-link:hover {
        background: var(--surface-color);
    }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

    .container {
        width: 90%;
    }

    .logo {
        font-size: 1.2rem;
    }

    .theme-toggle,
    .menu-toggle {
        width: 38px;
        height: 38px;

        font-size: 0.9rem;
    }

    .nav-actions {
        gap: 6px;
    }

}







/* ========================================
   PROFESSIONAL HOME SECTION
======================================== */

.home {
    min-height: calc(100vh - 75px);

    display: flex;
    align-items: center;

    padding: 110px 0 90px;

    background: var(--bg-color);

    transition: background-color 0.3s ease;
}


/* ========================================
   CONTAINER
======================================== */

.home-container {
    width: min(1180px, 92%);

    margin: 0 auto;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 80px;
}


/* ========================================
   HOME CONTENT
======================================== */

.home-content {
    max-width: 600px;
}


/* ========================================
   SMALL LABEL
======================================== */

.home-label {
    position: relative;

    display: inline-block;

    margin-bottom: 20px;
    padding-left: 17px;

    color: var(--primary-color);

    font-size: 0.82rem;

    font-weight: 600;

    letter-spacing: 0.8px;

    text-transform: uppercase;
}

.home-label::before {
    content: "";

    position: absolute;

    left: 0;
    top: 50%;

    width: 4px;
    height: 18px;

    background: var(--primary-color);

    transform: translateY(-50%);
}


/* ========================================
   MAIN TITLE
======================================== */

.home-title {
    margin-bottom: 12px;

    color: var(--text-color);

    font-size: clamp(2.3rem, 5vw, 4.2rem);

    line-height: 1.15;

    font-weight: 600;

    letter-spacing: -1.5px;
}

.home-title span {
    color: var(--primary-color);
}


/* ========================================
   PROFESSIONAL ROLE
======================================== */

.home-role {
    margin-bottom: 24px;

    color: var(--text-secondary);

    font-size: clamp(1.15rem, 2vw, 1.5rem);

    line-height: 1.5;

    font-weight: 500;
}


/* ========================================
   DESCRIPTION
======================================== */

.home-description {
    max-width: 570px;

    margin-bottom: 30px;

    color: var(--text-secondary);

    font-size: 0.95rem;

    line-height: 1.85;
}


/* ========================================
   BUTTONS
======================================== */

.home-buttons {
    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 35px;
}

.btn {
    min-height: 46px;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 9px;

    padding: 0 20px;

    border-radius: 5px;

    font-size: 0.85rem;

    font-weight: 500;

    transition:
        background-color 0.25s ease,
        color 0.25s ease,
        border-color 0.25s ease;
}


/* Primary */

.btn-primary {
    color: #ffffff;

    background: var(--primary-color);

    border: 1px solid var(--primary-color);
}

.btn-primary:hover {
    background: var(--primary-hover);

    border-color: var(--primary-hover);
}


/* Outline */

.btn-outline {
    color: var(--text-color);

    background: transparent;

    border: 1px solid var(--border-color);
}

.btn-outline:hover {
    color: var(--primary-color);

    border-color: var(--primary-color);

    background: var(--surface-color);
}


/* ========================================
   SOCIAL
======================================== */

.home-social {
    display: flex;

    align-items: center;

    gap: 18px;
}

.home-social > span {
    color: var(--text-secondary);

    font-size: 0.78rem;

    font-weight: 500;
}

.social-links {
    display: flex;

    align-items: center;

    gap: 8px;
}

.social-links a {
    width: 35px;
    height: 35px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: var(--text-secondary);

    border: 1px solid var(--border-color);

    border-radius: 5px;

    font-size: 0.8rem;

    transition:
        color 0.25s ease,
        border-color 0.25s ease;
}

.social-links a:hover {
    color: var(--primary-color);

    border-color: var(--primary-color);
}


/* ========================================
   IMAGE AREA
======================================== */

.home-visual {
    width: 100%;

    max-width: 580px;

    margin-left: auto;
}


/* ========================================
   IMAGE
======================================== */

.home-image {
    position: relative;

    width: 100%;
    height: 500px;

    aspect-ratio: auto;

    overflow: hidden;

    background: var(--surface-color);

    border: 1px solid var(--border-color);

    border-radius: 8px;
}

.home-image img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition: transform 0.4s ease;
}




.home-image:hover img {
    transform: scale(1.015);
}


/* ========================================
   IMAGE CAPTION
======================================== */

.image-caption {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 12px;

    color: var(--text-secondary);

    font-size: 0.7rem;

    letter-spacing: 0.3px;
}

.image-caption span:first-child {
    color: var(--text-color);

    font-weight: 500;
}


/* ========================================
   TABLET & MOBILE
   IMAGE FIRST, CONTENT SECOND
======================================== */

@media (max-width: 900px) {

    .home {
        min-height: auto;
        padding: 110px 0 70px;
    }

    .home-container {
        display: flex;
        flex-direction: column;

        gap: 45px;
    }

    .home-image {
        height: 500px;
    }
    /* IMAGE FIRST */
    .home-visual {
        order: 1;

        width: 100%;
        max-width: 700px;

        margin: 0 auto;
    }

    /* CONTENT SECOND */
    .home-content {
        order: 2;

        width: 100%;
        max-width: 700px;

        margin: 0 auto;
    }
}


@media (max-width: 600px) {
    .home-image {
        height: 350px;
    }
}


/* ========================================
   EDUCATION SECTION
======================================== */

.education {
    padding: 100px 0;

    background: var(--surface-color);

    transition: background-color 0.3s ease;
}


/* ========================================
   SECTION HEADING
======================================== */

.section-heading {
    max-width: 680px;

    margin-bottom: 60px;
}

.section-label {
    position: relative;

    display: inline-block;

    margin-bottom: 12px;

    padding-left: 15px;

    color: var(--primary-color);

    font-size: 0.78rem;

    font-weight: 600;

    letter-spacing: 0.8px;

    text-transform: uppercase;
}

.section-label::before {
    content: "";

    position: absolute;

    left: 0;
    top: 50%;

    width: 4px;
    height: 16px;

    background: var(--primary-color);

    transform: translateY(-50%);
}

.section-title {
    margin-bottom: 12px;

    color: var(--text-color);

    font-size: clamp(2rem, 4vw, 2.8rem);

    line-height: 1.2;

    font-weight: 600;

    letter-spacing: -0.8px;
}

.section-description {
    max-width: 600px;

    color: var(--text-secondary);

    font-size: 0.9rem;

    line-height: 1.8;
}


/* ========================================
   EDUCATION LIST
======================================== */

.education-list {
    position: relative;

    max-width: 1000px;
}


/* ========================================
   EDUCATION ITEM
======================================== */

.education-item {
    display: grid;

    grid-template-columns: 150px 30px 1fr;

    column-gap: 25px;

    min-height: 190px;
}


/* ========================================
   YEAR
======================================== */

.education-year {
    padding-top: 4px;

    color: var(--primary-color);

    font-size: 0.82rem;

    font-weight: 600;

    line-height: 1.5;
}


/* ========================================
   TIMELINE
======================================== */

.education-line {
    position: relative;

    display: flex;

    justify-content: center;
}

.education-line::before {
    content: "";

    position: absolute;

    top: 9px;
    bottom: -1px;

    width: 1px;

    background: var(--border-color);
}


/* Hide line on final item */

.education-item:last-child
.education-line::before {
    display: none;
}


/* ========================================
   TIMELINE DOT
======================================== */

.education-dot {
    position: relative;

    z-index: 2;

    width: 11px;
    height: 11px;

    margin-top: 4px;

    background: var(--bg-color);

    border: 3px solid var(--primary-color);

    border-radius: 50%;
}


/* ========================================
   EDUCATION CONTENT
======================================== */

.education-content {
    padding: 0 0 55px;
}

.education-type {
    display: inline-block;

    margin-bottom: 8px;

    color: var(--text-secondary);

    font-size: 0.7rem;

    font-weight: 500;

    letter-spacing: 0.5px;

    text-transform: uppercase;
}

.education-content h3 {
    margin-bottom: 5px;

    color: var(--text-color);

    font-size: 1.15rem;

    line-height: 1.5;

    font-weight: 600;
}

.education-content h4 {
    margin-bottom: 14px;

    color: var(--primary-color);

    font-size: 0.85rem;

    font-weight: 500;
}

.education-content p {
    max-width: 680px;

    margin-bottom: 17px;

    color: var(--text-secondary);

    font-size: 0.84rem;

    line-height: 1.8;
}


/* ========================================
   EDUCATION DETAILS
======================================== */

.education-details {
    display: flex;

    align-items: center;

    gap: 22px;

    flex-wrap: wrap;
}

.education-details span {
    display: inline-flex;

    align-items: center;

    gap: 7px;

    color: var(--text-secondary);

    font-size: 0.72rem;
}

.education-details i {
    color: var(--primary-color);

    font-size: 0.7rem;
}


/* ========================================
   HOVER
======================================== */

.education-content {
    transition: transform 0.25s ease;
}

.education-item:hover .education-content {
    transform: translateX(4px);
}

.education-item:hover .education-dot {
    background: var(--primary-color);
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 768px) {

    .education {
        padding: 80px 0;
    }

    .section-heading {
        margin-bottom: 45px;
    }

    .education-item {
        grid-template-columns: 100px 25px 1fr;

        column-gap: 18px;
    }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

    .education {
        padding: 70px 0;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-description {
        font-size: 0.84rem;
    }

    .education-item {
        grid-template-columns: 22px 1fr;

        column-gap: 15px;
    }

    .education-year {
        grid-column: 2;

        grid-row: 1;

        padding: 0;

        margin-bottom: 5px;

        font-size: 0.75rem;
    }

    .education-line {
        grid-column: 1;

        grid-row: 1 / span 2;

        align-self: stretch;
    }

    .education-content {
        grid-column: 2;

        grid-row: 2;

        padding-bottom: 40px;
    }

    .education-content h3 {
        font-size: 1.05rem;
    }

    .education-content h4 {
        font-size: 0.8rem;
    }

    .education-content p {
        font-size: 0.8rem;
    }

    .education-details {
        gap: 10px 18px;
    }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 380px) {

    .education-item {
        column-gap: 12px;
    }

    .education-content h3 {
        font-size: 1rem;
    }

    .education-content p {
        font-size: 0.77rem;
    }
}






/* ========================================
   EXPERIENCE SECTION
======================================== */

.experience {
    padding: 100px 0;

    background: var(--bg-color);

    transition: background-color 0.3s ease;
}


/* ========================================
   EXPERIENCE LIST
======================================== */

.experience-list {
    position: relative;

    max-width: 1050px;
}


/* ========================================
   EXPERIENCE ITEM
======================================== */

.experience-item {
    display: grid;

    grid-template-columns: 150px 30px 1fr;

    column-gap: 25px;

    min-height: 250px;
}


/* ========================================
   DATE
======================================== */

.experience-date {
    padding-top: 4px;

    color: var(--primary-color);

    font-size: 0.82rem;

    font-weight: 600;

    line-height: 1.5;
}


/* ========================================
   TIMELINE
======================================== */

.experience-line {
    position: relative;

    display: flex;

    justify-content: center;
}

.experience-line::before {
    content: "";

    position: absolute;

    top: 9px;
    bottom: -1px;

    width: 1px;

    background: var(--border-color);
}


/* Hide line on final item */

.experience-item:last-child
.experience-line::before {
    display: none;
}


/* ========================================
   TIMELINE DOT
======================================== */

.experience-dot {
    position: relative;

    z-index: 2;

    width: 11px;
    height: 11px;

    margin-top: 4px;

    background: var(--bg-color);

    border: 3px solid var(--primary-color);

    border-radius: 50%;
}


/* ========================================
   EXPERIENCE CONTENT
======================================== */

.experience-content {
    padding: 0 0 60px;

    transition: transform 0.25s ease;
}

.experience-item:hover .experience-content {
    transform: translateX(4px);
}


/* ========================================
   EXPERIENCE HEADER
======================================== */

.experience-header {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;

    margin-bottom: 15px;
}


/* ========================================
   EXPERIENCE TYPE
======================================== */

.experience-type {
    display: inline-block;

    margin-bottom: 7px;

    color: var(--text-secondary);

    font-size: 0.68rem;

    font-weight: 500;

    letter-spacing: 0.6px;

    text-transform: uppercase;
}


/* ========================================
   JOB TITLE
======================================== */

.experience-content h3 {
    margin-bottom: 4px;

    color: var(--text-color);

    font-size: 1.2rem;

    line-height: 1.4;

    font-weight: 600;
}


/* ========================================
   COMPANY
======================================== */

.experience-content h4 {
    color: var(--primary-color);

    font-size: 0.85rem;

    font-weight: 500;
}


/* ========================================
   LOCATION
======================================== */

.experience-location {
    display: inline-flex;

    align-items: center;

    gap: 7px;

    padding-top: 22px;

    color: var(--text-secondary);

    font-size: 0.72rem;

    white-space: nowrap;
}

.experience-location i {
    color: var(--primary-color);

    font-size: 0.68rem;
}


/* ========================================
   DESCRIPTION
======================================== */

.experience-description {
    max-width: 720px;

    margin-bottom: 20px;

    color: var(--text-secondary);

    font-size: 0.84rem;

    line-height: 1.8;
}


/* ========================================
   RESPONSIBILITIES
======================================== */

.experience-responsibilities {
    margin-bottom: 20px;
}

.experience-responsibilities h5 {
    margin-bottom: 10px;

    color: var(--text-color);

    font-size: 0.78rem;

    font-weight: 600;
}

.experience-responsibilities ul {
    margin: 0;

    padding-left: 18px;

    color: var(--text-secondary);
}

.experience-responsibilities li {
    margin-bottom: 7px;

    font-size: 0.8rem;

    line-height: 1.7;
}

.experience-responsibilities li::marker {
    color: var(--primary-color);
}


/* ========================================
   TECHNOLOGIES
======================================== */

.experience-technologies {
    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 7px;
}

.experience-technologies span {
    padding: 5px 10px;

    color: var(--text-secondary);

    background: var(--surface-color);

    border: 1px solid var(--border-color);

    border-radius: 4px;

    font-size: 0.67rem;

    font-weight: 500;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 768px) {

    .experience {
        padding: 80px 0;
    }

    .experience-item {
        grid-template-columns: 100px 25px 1fr;

        column-gap: 18px;
    }

    .experience-header {
        flex-direction: column;

        gap: 5px;
    }

    .experience-location {
        padding-top: 0;
    }
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

    .experience {
        padding: 70px 0;
    }

    .experience-item {
        grid-template-columns: 22px 1fr;

        column-gap: 15px;

        min-height: 0;
    }

    .experience-date {
        grid-column: 2;

        grid-row: 1;

        padding: 0;

        margin-bottom: 5px;

        font-size: 0.75rem;
    }

    .experience-line {
        grid-column: 1;

        grid-row: 1 / span 2;

        align-self: stretch;
    }

    .experience-content {
        grid-column: 2;

        grid-row: 2;

        padding-bottom: 45px;
    }

    .experience-content h3 {
        font-size: 1.05rem;
    }

    .experience-content h4 {
        font-size: 0.8rem;
    }

    .experience-description {
        font-size: 0.8rem;

        line-height: 1.75;
    }

    .experience-responsibilities li {
        font-size: 0.77rem;
    }

    .experience-location {
        font-size: 0.68rem;
    }

    .experience-technologies span {
        font-size: 0.63rem;
    }
}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 380px) {

    .experience-item {
        column-gap: 12px;
    }

    .experience-content h3 {
        font-size: 1rem;
    }

    .experience-description {
        font-size: 0.77rem;
    }
}











/* ========================================
   WORKS / GALLERY
======================================== */

.works-section {
    padding: 100px 0;

    background-color: var(--bg-color);

    transition: background-color var(--transition);
}


/* ========================================
   GALLERY GRID
======================================== */

.works-gallery {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;

    width: 100%;
}


/* ========================================
   WORK ITEM
======================================== */

.work-item {
    position: relative;

    display: block;

    width: 100%;
    height: 300px;

    overflow: hidden;

    border-radius: 12px;

    background-color: var(--surface-color);

    border: 1px solid var(--border-color);

    transition:
        transform var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}


/* ========================================
   IMAGE
======================================== */

.work-item img {
    display: block;

    width: 100%;
    height: 300px;

    object-fit: cover;

    object-position: center;

    transition: transform 0.5s ease;
}


/* ========================================
   HOVER
======================================== */

.work-item:hover {
    transform: translateY(-4px);

    border-color: var(--primary-color);

    box-shadow: var(--shadow);
}

.work-item:hover img {
    transform: scale(1.04);
}


/* ========================================
   OPTIONAL LARGE ITEM
======================================== */

.work-large {
    grid-column: span 2;
}


/* ========================================
   REMOVE OLD SIZE RULES
======================================== */

.work-wide,
.work-tall {
    grid-column: auto;
    grid-row: auto;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

    .works-section {
        padding: 80px 0;
    }

    .works-gallery {
        grid-template-columns: 1fr;

        gap: 18px;
    }

    .work-large {
        grid-column: span 1;
    }

    .work-item {
        height: 300px;
    }

    .work-item img {
        height: 300px;
    }
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

    .works-section {
        padding: 60px 0;
    }

    .works-gallery {
        grid-template-columns: 1fr;

        gap: 15px;
    }

    .work-item {
        height: 250px;

        border-radius: 10px;
    }

    .work-item img {
        height: 250px;
    }
}


/* ========================================
   SKILLS SECTION
======================================== */

.skills {
    padding: 100px 0;

    background: var(--surface-color);

    transition: background-color 0.3s ease;
}


/* ========================================
   SKILLS GRID
======================================== */

.skills-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 50px;

    max-width: 1050px;
}


/* ========================================
   SKILLS COLUMN
======================================== */

.skills-column {
    padding: 30px;

    background: var(--bg-color);

    border: 1px solid var(--border-color);

    border-radius: 7px;
}


/* ========================================
   COLUMN HEADER
======================================== */

.skills-column-header {
    display: flex;

    align-items: center;

    gap: 15px;

    padding-bottom: 24px;

    margin-bottom: 25px;

    border-bottom: 1px solid var(--border-color);
}


/* ========================================
   SKILLS ICON
======================================== */

.skills-icon {
    width: 44px;
    height: 44px;

    display: flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    color: var(--primary-color);

    background: var(--surface-color);

    border: 1px solid var(--border-color);

    border-radius: 6px;

    font-size: 0.95rem;
}

.skills-column-header span {
    display: block;

    margin-bottom: 3px;

    color: var(--text-secondary);

    font-size: 0.68rem;

    font-weight: 500;

    letter-spacing: 0.4px;

    text-transform: uppercase;
}

.skills-column-header h3 {
    color: var(--text-color);

    font-size: 1.25rem;

    font-weight: 600;
}


/* ========================================
   HARD SKILLS
======================================== */

.skill-list {
    display: flex;

    flex-direction: column;

    gap: 22px;
}

.skill-item {
    width: 100%;
}

.skill-info {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 15px;

    margin-bottom: 8px;
}

.skill-info span:first-child {
    color: var(--text-color);

    font-size: 0.82rem;

    font-weight: 500;
}

.skill-info span:last-child {
    color: var(--text-secondary);

    font-size: 0.68rem;

    font-weight: 500;
}


/* ========================================
   SKILL BAR
======================================== */

.skill-bar {
    width: 100%;
    height: 5px;

    overflow: hidden;

    background: var(--surface-color);

    border-radius: 10px;
}

.skill-bar span {
    display: block;

    height: 100%;

    background: var(--primary-color);

    border-radius: inherit;

    transition: width 1s ease;
}


/* ========================================
   SOFT SKILLS
======================================== */

.soft-skills-list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 10px;
}

.soft-skill-item {
    display: flex;

    align-items: flex-start;

    gap: 12px;

    padding: 15px 10px;

    border-bottom: 1px solid var(--border-color);

    transition:
        background-color 0.25s ease;
}

.soft-skill-item:hover {
    background: var(--surface-color);
}


/* ========================================
   SOFT SKILL ICON
======================================== */

.soft-skill-icon {
    width: 32px;
    height: 32px;

    display: flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    color: var(--primary-color);

    font-size: 0.78rem;
}


/* ========================================
   SOFT SKILL TEXT
======================================== */

.soft-skill-item h4 {
    margin-bottom: 5px;

    color: var(--text-color);

    font-size: 0.78rem;

    font-weight: 600;
}

.soft-skill-item p {
    color: var(--text-secondary);

    font-size: 0.68rem;

    line-height: 1.6;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

    .skills {
        padding: 80px 0;
    }

    .skills-grid {
        grid-template-columns: 1fr;

        gap: 25px;

        max-width: 700px;
    }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

    .skills {
        padding: 70px 0;
    }

    .skills-column {
        padding: 22px 18px;
    }

    .skills-column-header {
        padding-bottom: 20px;

        margin-bottom: 22px;
    }

    .skills-column-header h3 {
        font-size: 1.1rem;
    }

    .soft-skills-list {
        grid-template-columns: 1fr;
    }

    .soft-skill-item {
        padding: 12px 5px;
    }

    .skill-list {
        gap: 19px;
    }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 380px) {

    .skills-column {
        padding: 20px 15px;
    }

    .skills-icon {
        width: 40px;
        height: 40px;
    }

    .skill-info span:first-child {
        font-size: 0.78rem;
    }
}





.portfolio-footer {
background: var(--white);
border-top: 1px solid var(--border-color);
padding: 70px 24px 24px;
}

.footer-container {
width: min(1180px, 100%);
margin: 0 auto;

display: grid;
grid-template-columns: 1.8fr 1fr 1.3fr 1.2fr;
gap: 60px;
}

/* Brand */

.footer-logo {
display: inline-block;
color: var(--text-dark);
font-size: 28px;
font-weight: 800;
letter-spacing: -1px;
text-decoration: none;
}

.footer-logo span {
color: var(--primary-color);
}

.footer-brand p {
max-width: 330px;
margin: 18px 0 20px;
color: var(--text-muted);
font-size: 15px;
line-height: 1.7;
}

.footer-email {
color: var(--primary-color);
font-size: 14px;
font-weight: 600;
text-decoration: none;
transition: color 0.2s ease;
}

.footer-email:hover {
color: var(--primary-hover);
}

/* Columns */

.footer-column h3 {
margin: 5px 0 20px;
font-size: 14px;
font-weight: 700;
color: var(--text-dark);
}

.footer-column ul {
margin: 0;
padding: 0;
list-style: none;
}

.footer-column li {
margin-bottom: 13px;
}

.footer-column a {
color: var(--text-muted);
font-size: 14px;
text-decoration: none;
transition:
color 0.2s ease,
transform 0.2s ease;
}

.footer-column a:hover {
color: var(--primary-color);
}

/* Contact */

.contact-list li {
display: flex;
align-items: center;
gap: 10px;
color: var(--text-muted);
font-size: 14px;
}

.contact-list li > span:first-child {
width: 20px;
color: var(--primary-color);
font-size: 16px;
}

/* Socials */

.social-links {
display: flex;
gap: 9px;
margin-bottom: 24px;
}

.social-links a {
width: 38px;
height: 38px;

display: flex;
align-items: center;
justify-content: center;

border: 1px solid var(--border-color);
border-radius: 10px;

color: var(--text-dark);
font-size: 12px;
font-weight: 700;

transition:
background 0.2s ease,
border-color 0.2s ease,
color 0.2s ease,
transform 0.2s ease;
}

.social-links a:hover {
background: var(--primary-color);
border-color: var(--primary-color);
color: var(--white);
transform: translateY(-3px);
}

/* CTA */

.footer-cta {
display: inline-flex;
align-items: center;
gap: 8px;

color: var(--primary-color) !important;
font-weight: 600;
}

.footer-cta span {
transition: transform 0.2s ease;
}

.footer-cta:hover span {
transform: translate(3px, -3px);
}

/* Bottom */

.footer-bottom {
width: min(1180px, 100%);
margin: 55px auto 0;
padding-top: 24px;

display: flex;
align-items: center;
justify-content: space-between;

border-top: 1px solid var(--border-color);
}

.footer-bottom p {
margin: 0;
color: var(--text-muted);
font-size: 13px;
}

.footer-bottom-links {
display: flex;
gap: 22px;
}

.footer-bottom-links a {
color: var(--text-muted);
font-size: 13px;
text-decoration: none;
}

.footer-bottom-links a:hover {
color: var(--primary-color);
}

/* Responsive */

@media (max-width: 900px) {
.footer-container {
grid-template-columns: 1.5fr 1fr 1fr;
}

.footer-brand {
grid-column: 1 / -1;
}
}

@media (max-width: 650px) {
.portfolio-footer {
padding: 50px 20px 20px;
}

.footer-container {
grid-template-columns: 1fr 1fr;
gap: 40px 25px;
}

.footer-brand {
grid-column: 1 / -1;
}

.footer-bottom {
margin-top: 40px;
flex-direction: column;
align-items: flex-start;
gap: 15px;
}
}

@media (max-width: 430px) {
.footer-container {
grid-template-columns: 1fr;
}

.footer-brand {
grid-column: auto;
}
}


</style>
`


/* ========================================
   ELEMENTS
======================================== */

const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-link");


/* ========================================
   DARK / LIGHT MODE
======================================== */

function setTheme(theme) {

    if (theme === "dark") {

        body.classList.add("dark-theme");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        body.classList.remove("dark-theme");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }

    localStorage.setItem("portfolio-theme", theme);
}


/* ========================================
   LOAD SAVED THEME
======================================== */

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    setTheme("dark");

} else {

    setTheme("light");
}


/* ========================================
   THEME TOGGLE
======================================== */

themeToggle.addEventListener("click", () => {

    const isDark =
        body.classList.contains("dark-theme");

    setTheme(isDark ? "light" : "dark");

});


/* ========================================
   OPEN / CLOSE MOBILE MENU
======================================== */

function openMenu() {

    navMenu.classList.add("show");

    menuToggle.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    menuToggle.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';
}


function closeMenu() {

    navMenu.classList.remove("show");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
}


/* ========================================
   MENU BUTTON
======================================== */

menuToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const menuIsOpen =
        navMenu.classList.contains("show");

    if (menuIsOpen) {

        closeMenu();

    } else {

        openMenu();

    }

});


/* ========================================
   CLOSE WHEN CLICKING NAV LINK
======================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


/* ========================================
   CLOSE WHEN CLICKING OUTSIDE
======================================== */

document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
        event.target.closest(".header");

    if (!clickedInsideNavbar) {

        closeMenu();

    }

});


/* ========================================
   CLOSE MENU WITH ESCAPE KEY
======================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* ========================================
   CLOSE MOBILE MENU WHEN RESIZING
======================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        closeMenu();

    }

});




/* ========================================
   TYPING EFFECT
======================================== */

const typingText = document.querySelector(".typing-text");

const professions = [
    "Web Developer",
    "UI/UX Designer",
    "Software Developer",
    "Creative Thinker"
];

let professionIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentProfession =
        professions[professionIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent =
        currentProfession.substring(0, characterIndex);


    let typingSpeed = isDeleting ? 50 : 100;


    /* Finished typing */

    if (!isDeleting &&
        characterIndex === currentProfession.length) {

        typingSpeed = 1800;

        isDeleting = true;
    }


    /* Finished deleting */

    if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        professionIndex =
            (professionIndex + 1) % professions.length;

        typingSpeed = 400;
    }


    setTimeout(typeEffect, typingSpeed);
}

typeEffect();



/* ========================================
   CURRENT YEAR
======================================== */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent =
        new Date().getFullYear();
}


/* ========================================
   CONTACT FORM
======================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            formMessage.textContent =
                "Thank you. Your message has been received.";

            contactForm.reset();

        }
    );

}





document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

document.addEventListener("keydown", function (event) {

    // F12
    if (event.key === "F12") {
        event.preventDefault();
    }

    // Ctrl + U
    if (event.ctrlKey && event.key.toLowerCase() === "u") {
        event.preventDefault();
    }

    // Ctrl + Shift + I
    if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "i"
    ) {
        event.preventDefault();
    }

    // Ctrl + Shift + J
    if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "j"
    ) {
        event.preventDefault();
    }

});

