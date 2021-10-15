import Cybervision from '../Cybervision-Colors.png';
import CybervisionLogo from '../Cybervision-Logo.png';
import AllensPie from '../AllensPie-Colors.png';
//import RetrainBackPain from '../RetrainBackPain-Colors.png';
import PerryAssociates from '../PerryAssociates-Colors.png';

let issueSolution = <a href="#project-issues" title="View project details." aria-label="View project details.">Issues and Solutions</a>

let materialIcons = <a href='https://fonts.google.com/icons' title="Learn more about open-sourced Mateial Icons by Google." aria-label="Learn more about open-sourced Mateial Icons by Google.">Material Icons</a>

let googleFonts = <a href='https://fonts.google.com/' title="Learn more about open-sourced Google Fonts." aria-label="Learn more about open-sourced Google Fonts.">Google Fonts</a>

let bootstrapIcons = <a href='https://icons.getbootstrap.com/' title="Learn more about open-sourced Bootstrap Icons." aria-label="Learn more about open-sourced Bootstrap Iconse.">Bootstrap Icons</a>


const projects = [
    {
        name: 'Cybervision LLC',
        description: <p>This is a jazz musician's website. He offers lessons via a bookings page that reads more like a contact page built with a drag and drop template. Our version of this page streamlines the navbar; creating a site hierachy. Reworks the page labeling to reflect it's purpose and guides user interaction. The contact form is user-friendly, easy to follow and pleasant on the eyeballs. In our re-do, the contact information is a companion to the form, not an adversary. Overall, the page has lost that dragged and dropped appeal. See {issueSolution} for details.</p>,
        prjbtn: 'Bookings',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Page Headings</em>: Oswald, sans-serif</p>
                    <p><em>Body Headings</em>: Frank Ruhl Libre, serif</p>
                    <p><em>Body Text</em>: Karla, sans-serif</p>
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Page:</em> Uses theme icons.</p>
                    <p><em>Live Project Page:</em> Uses {materialIcons}.</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Live Project Page</em> images were sourced from the original page/website.</p>
                </div>,
                colors: <img src={Cybervision} className="project-palette" alt="Cybervision Color Palette" />
            }
        ],
        
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/Cybervision/Cybervision.html',
        original: 'https://michaelclewis.com/booking',
        titleorg:'Visit Cybervision\'s booking page.',
        titlelive: 'Visit Cybervision\'s project page.',
        imgorg: 'https://snz04pap002files.storage.live.com/y4m6LNYCDTn0tt1vHSr9lCrF8oB_WlovaAWyg8T3lY-R8MN0SKNRE8Z4CaKw306ZzMkdydvO39cWoprCuMY25uVXkuB4l7qAO9bQZPhSvB3AoB9XbCXlvAXDViB3ggQzVBVWhqnMojE2XY3owkB_h9hAzcIEM2GwhzjEkK9DDyvLxjKU2U9XwX9Mw0Ht7F7u_zh?width=393&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4mfIk87u8xVoFLeP_Y1wAGgnjKFrp0N3eFPklu8L3UkwE0MiWgxjuHjVGFqanaodjDfDj3LcsHeshfQ6n2Ad7xOvakIAYvQD54TzaRrswoDYoO447V745Rkd8K1lAtU5k66yU-84YIogjqFRLZrKFCJQBSLqQQ25y_McnxghTptOr2GMy1U_QK0MOcP56RbooE?width=584&height=660&cropmode=none',
        altorg: ' Cybervision\'s original home page.',
        altlive: ' Cybervision\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A booking page update.',
        issue1org: 'https://snz04pap002files.storage.live.com/y4m_U_8y-OHp2NRt-J428zHBEZVUrCPWoVqSJTS8QcsPimfAO0PjF9VWCpWqHNZiIJUCBCbn8i4XpH9CLdPKl2p6o969PBJgOUznZBQL6gS704OYgJbQZyAWqNKADAdY_UUDx4xkh3uhaHQTtRpN5XKN1zZcBgIG9Jp5NsSmhDwiEzJd2AbEfw1lB_njEVWA9Tr?width=660&height=176&cropmode=none',
        issue1live: 'https://snz04pap002files.storage.live.com/y4mqHkHNKyiWusVA26DqPiVLbC-uOtRcruwaloxnPqZjvSGthX6Kar3sWhArxrHrCmOqrR2-bcvZK0xqJQpOdwcjioilEEjFr_k58d_wigNR880iFlM_GHrMrwNtBbuLw3XoHurvg9hhbCejLIzbYXPxJBM5C2ELj6HXveJyxrxhkZKR_UBXqpP0nbhNKLlkOI0?width=660&height=185&cropmode=none',
        issueimgs1class: 'row cybervision-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Page Header',
        issue1note: <div className="issue-content">
                <p className="issue-description">The link said bookings, but the page title is the name of the musician. There's not much that screams bookings here. It's more of a contact page. Which would be a more appropriate title for this page. Updates were made to:</p>
                <ul className="issue-list">
                    <li>page title describes the page</li>
                    <li>navbar is includes hierarchical links and no sidebar</li>
                    <li>navbar home link is the site logo</li>
                </ul>
            </div>,
        issue2org: 'https://snz04pap002files.storage.live.com/y4m4mUaG8VEVyBpx9w5O-IUOMz2ApfC4O5Fj6Mb-yRzyyQzrx9HTB0psN6TBWXxT7JemHz_6lzQV3xMioDOM4ZXQjXYmbQpCOAJdnF-FmFYfXWj3XxlqY5d4_MQ4mKR_HRevKY8GjphAEhC9qlnhyYWNc44fk9rjWARIqqG7_EhujvxiHa0oZuizidzTC76MAhV?width=437&height=525&cropmode=none',
        issue2live: 'https://snz04pap002files.storage.live.com/y4m6taUXS2PL5Ffkt5ZYdUmly3_oF3e_Padjm7wNIFKD0NkgvSX0GuUluI_aSXJp8qcrYFH37z4MA6rbbIDHu8elCc6BDbRd1LfNU7l4C8cv_AT_LlZuiteWnvJsJn1HKAIiwnpBR-d7qqzKJf2AQWJm5Q5jhYcvWMPMxp_7Plt6MXcx1yp3guSt4SScgIRZLwj?width=256&height=197&cropmode=none',
        issueimgs2class: 'row cybervision-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Content Layout',
        issue2note: <div className="issue-content">
                <p className="issue-description">The layout lacks harmony. There's tons of space between elements and the contact info doesn't quite stan out. Updates were made to:</p>
                <ul className="issue-list">
                    <li>contact info and the form positioned side by side</li>
                    <li>form has a image background and text is the logo color</li>
                    <li>form uses logo color to add some personality</li>
                </ul>
            </div>,
        issue3org: CybervisionLogo,
        issue3live: CybervisionLogo,
        issueimgs3class: 'row cybervision-imgs3',
        issue3class: 'issue-img issue3-img cybervision-issue3-img',
        issue3title: 'Logo',
        issue3note: <div className="issue-content">
                <p className="issue-description">The logo is has no symmetry. It's missing a core. It is a piece of workable branding and it fits the site's purpose. I think it's sort of jazzy. There are some glaring issues:</p>
                <ul className="issue-list">
                    <li>It doesn't size very well.</li>
                    <li>The contrast ratio is a fail. The black text is unreadable on the background.</li>
                    <li>The text is off center.</li>
                </ul>
            </div>,
        addnotes: <ul className="add-note-list">
            <li><strong>Footer:</strong> Text about footer</li>
            <li><strong>Photo Gallery:</strong> text about photo gallery</li>
            <li><strong>Events:</strong> text about events</li>
        </ul>,
        prjcta: 'Project Call To Action Goes Here',
    },
    {
        name: 'Allen\'s Pie',
        description: <p>Write something about Allen's Pie. See {issueSolution} for details.</p>,
        prjbtn: 'Landing',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Original Site</em>: Brandon Grotesque Medium, sans-serif</p>
                    <p><em>Project Site </em>: Lato, sans-serif, Open Sans, sans-serif &mdash; {googleFonts}</p>
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Site:</em> Theme Icons</p>
                    <p><em>Project Site:</em> {materialIcons}.</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Project Site</em>: Images were sourced from the original page/website.</p>
                </div>,
                colors: <img src={AllensPie} className="project-palette" alt="alt text" />
            }
        ],
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/AllensPie/AllenPie.html',
        original: 'https://www.allenspie.com/',
        titleorg:'Visit Allen\'s Pie original page.',
        titlelive: 'Visit Allen\'s Pie project live.',
        imgorg: 'https://snz04pap002files.storage.live.com/y4mdp6jyqDS9nglXrqs68wDZ2dQdDz6lk85bmaUBsjyWKFN9ZCE8y97CR5RYokWAzVC91PNjKvu6nJe1w9onSrHdwtjxCKGQgVQaIkzswBlSWKPGWZQ3n69AXdLZVklkvcsRcgRHGagQCl3eN8-R8nMUKs-KbU2OQWTDkXwy63zXe9uXW0xeQ4s3_15ah9-SB8m?width=346&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4mKuEEgYdrFw0TlLQDTXSnHh0xxOefAVDBYgalDk1NEhsR77IVzM37HlgsjXj9uZ2ohOg624JV4kvOfrt8bxztlL6Z3CmU0uf1UcSPIGhsELV2KI3fo9pFP8Me3NITrq6lIkVK94YXLOFoV966JLD8UPwwGyuosgLWJo4Ccxt6kMszLjT5ALrhk8CMsKJbb4AW?width=191&height=660&cropmode=none',
        altorg: ' Allen\'s Pie original home page.',
        altlive: ' Allen\'s Pie live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A landing page update.',
        issue1org: 'https://snz04pap002files.storage.live.com/y4myoAUkkC57wqFNTqKxNBy9li7_nag9u9iq7gZHPaF9NC13JCh4ddKFfQmkhoMZ4NkKC5kuBfvIH6L3AUkJrJSlq9tDyS7IuB9afivzfZvG95RP1Zom097FoVpivqx2nN0yad3r_AHb1wuPJGv5JdeWeVPt1Zwru57r1P3d4BWRy-L0mCNEDf-Pn7rwHCZEj9d?width=660&height=204&cropmode=none',
        issue1live: 'https://snz04pap002files.storage.live.com/y4m620VlAaq8FLou8C6oy_yiY5G0tyWvpBz7g56xjqV-XoAWdI5J1F_Kz7fKalEQsKGzyJB0oP-ynHhRUMMKGAETRi5neJTeGhhOHblIe87fiRf9i_6n4dGc7s46vMCqr7qzps5mN410OUJeaeGBhJut0L04Iz6on1cExzKNXoezbHpbiCvzlxDUXv7rIc_0Qod?width=660&height=182&cropmode=none',
        issueimgs1class: 'row allenspie-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Site Architecture',
        issue1note: <div className="issue-content">
                <p className="issue-description">Some text goes here. Updates were made to:</p>
                <ul className="issue-list">
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                </ul>
            </div>,
        issue2org: 'https://snz04pap002files.storage.live.com/y4m6VE8KpTVwNxF7R_MND6ZxwY4Bm_U1PPuH-A0gglDnAloBQbYYxWE37ExmxA8iBY3b5SpbRRUrrt5mFGj1oCjWJvtNhYm09eHrPkK1gpvUjndZGY1aBimAF7F48waTS3U9bkYTqekdtxRYdeyAKzr9tL6aCLjioaeXNBYL8KFmVdQQzMNyqaoaNX0yiyShQTF?width=660&height=406&cropmode=none',
        issue2live: 'https://snz04pap002files.storage.live.com/y4m6C3XMDeMmof-L87qTmwC-42Twi-zbHydja7PAlazB5M36F59LpZUBhuNRuOs6_f_JsqvYjsF3Z4oWp-imFpsr3hpIrFSZRxFRpXvCBYi9kzULLbW-InKrJPKq_LE2utK_PsNEwf3N5pns4H8Ln_i76S7bFkMcO8JgVB88z_KSHkTXeTMdHedDuQ-sC_C1QIz?width=660&height=377&cropmode=none',
        issueimgs2class: 'row allenspie-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Testimonials',
        issue2note: <div className="issue-content">
                <p className="issue-description">Some text goes here. Updates were made to:</p>
                <ul className="issue-list">
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                </ul>
            </div>,
        issue3org: 'https://snz04pap002files.storage.live.com/y4mKro909ScCq2dX3xmRGKJOXsaqtgVTsJcjF6ghhAcPKwSH0pUyDD55n_ADbqV99ZHczYqJXqIa3edXNBSiSl9pTevpUZ9YMSg2ZbRSo_78iNOHBu8fVeH67JRCSTwP4yk2i5CER6qAihrVADLqEFs5_T54IPXAVq2FRBCzxFvUYkB_z1GDwEdB1vlgHjo9TGp?width=660&height=402&cropmode=none',
        issue3live: 'https://snz04pap002files.storage.live.com/y4mpRRT6LVTkvyv12uLD8fVx6KupqsxpuibyXRJHW0U-TFlYNzK11KIhOJQ_BJeOx63yPNnADS_KtFzxync6DYE78HvJXdQFKvPdvW-GHNROqr1hxbjfzzwx8Xc-XlLbGjxqDWNXZTT3xiD6cMy1haljHb__VZ3Z4niiGfEOPVdsZq0BIk522WmHYdtMSQhGnse?width=660&height=532&cropmode=none',
        issueimgs3class: 'row allenspie-imgs3',
        issue3class: 'issue-img issue3-img',
        issue3title: 'Menu',
        issue3note: <div className="issue-content">
                <p className="issue-description">Some text goes here. Updates were made to:</p>
                <ul className="issue-list">
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                </ul>
            </div>,
        addnotes: <ul className="add-note-list">
            <li><strong>Footer:</strong> Text about footer</li>
            <li><strong>Delivery:</strong> text about site delivery</li>
            <li><strong>Color Palette</strong> text about color palette</li>
        </ul>,
        prjcta: 'Project Call To Action Goes Here',
    },
    {
        name: 'Perry Associates',
        description: <p>This project's main focus is the search. Perry Associates is a real estate website. The live project includes a revamped nav menu, landing and listings page. See {issueSolution} for details.</p>,
        prjbtn: 'Search',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Original and Live Project</em> use Roboto, sans-serif</p>
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Page:</em> Uses theme icons.</p>
                    <p><em>Live Project Page:</em> Uses {materialIcons} and {bootstrapIcons}.</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Live Project Page</em> images were sourced from the original page/website.</p>
                </div>,
                colors: <img src={PerryAssociates} className="project-palette" alt="alt text" />
            }
        ],
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/PerryAssociates/PerttyAssociates.html',
        original: 'http://www.perryassociatesrealty.com/',
        titleorg:'Visit Perry Associates\' home original page.',
        titlelive: 'Visit Perry Associates\' project live.',
        imgorg: 'https://snz04pap002files.storage.live.com/y4mHhLK5yvkOeP2tZN-pDHKDdkcf0QV0Xui1z1BPNviHJEUONrodwbt84zEAgecwVWZfrxoyGbQKGy_My-uqle7rOy1t_IaN8T39sMoioIXCZ5xIb7EkwGcjl2NEyhkpv1RlCAIfHMck2_Z_A-eyh3Pq9Z4JPUfdARWuJ_ViCc_ec4oW7HHi1Hvbp24s51boax_?width=379&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4mc6Dd3bd1zZpx1lHGWC-SwEWaZMmp2Z-0SpuR88eai-ZSLAjRN-t8iMZZDqa3STjcG5x-_DNKMTnH4PK64xqCVpXOOH7LZbwmvU6agw84z8Js5NAplyYemLQ1L6-kGtNS5NT8zbtnIHrYFOgMRkcKm97_1jnHTk4_eO658moN6stpwA97B9olw67iDcz4sapL?width=350&height=660&cropmode=none',
        altorg: ' Perry Associates\'s original home page.',
        altlive: ' Perry Associates\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A listing search and page update.',
        issue1org: 'https://snz04pap002files.storage.live.com/y4mFzamCxGMJ4C-MJwY-_3HtfaddzEB8KtBRQ7g8mhFCTfnjpHAV6YAnhM-cSfFxWaMu9-X5OvCLWwUOmSwiAP9UZfD6e_Kp8xO8hbrWsgo3_ifangf7CZ8ivqqFYPL12LRULq41WPtlpuSWcA3YSyqTZ4k2kfKUx748kNgVfM_GMnIBTCBd7M_O70yey-9ObaQ?width=660&height=403&cropmode=none',
        issue1live: 'https://snz04pap002files.storage.live.com/y4msi2GO9YIA4efwUXgnlyr3L1A3yPG87MBPIEpoZmPk7r_3w-xrCvulEO8DZ_InkoJ2-MwkocQ-KfW77UoQAd4J4OV4UW83QbyzW_kq1ej2a_9HsdOPSNQ3BZ0GLLR03ukAGTuEtRK9AIT8MmgqZlzeGPF5IfoMoRusb-RwscxwApiX9e_wMAvy2enW6Hg3d17?width=660&height=410&cropmode=none',
        issueimgs1class: 'row perryassociates-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Quick Search',
        issue1note: <div className="issue-content">
                <p className="issue-description">Some text goes here. Updates were made to:</p>
                <ul className="issue-list">
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                </ul>
            </div>,
        issue2org: 'https://snz04pap002files.storage.live.com/y4mZlBJAb3F71sZmnGsnyauBqwpenZ0PLse4O4TFRJ4wVRe5XNmLkWn-J_r1OL5_5HfPaZ4om6WpxHI-p1bJHAoRw2kEXCAf8NkDr3bsSRdMVPL-aQP1yQJst7grBGnEWl6tlyXLg_QBVBL-7_6Gv-U1CTLXJa9LXQu8mOZfG7oVNN6Mgpdl7YgSwgRhuKA67IN?width=660&height=45&cropmode=none',
        issue2live: 'https://snz04pap002files.storage.live.com/y4mh6-QUNnPpAT4aBjYQ-PtRxFYbItUUXaJCHkwS3OC3sVL0JetovxkzcsOCZexnbSCv8cl_U4VNTtj0XBm3tLAc-HbiT0mtHrXJVrMpnQF4yeogpG_Zux_o3DgGZiwvXIEH4PkMZfE1VfDWIMmqzko2_ZXn7BWl4jz7mzwqqf5HK_cF40YbAOJLKGNQTWjkCUh?width=660&height=55&cropmode=none',
        issueimgs2class: 'row perryassociates-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Site Architecture',
        issue2note: <div className="issue-content">
                <p className="issue-description">Some text goes here. Updates were made to:</p>
                <ul className="issue-list">
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                </ul>
            </div>,
        issue3org: 'https://snz04pap002files.storage.live.com/y4mtBAWs4fVCzfVFCO1vbJ_h4G9fFox5ShnwJwDxiiaLtTULeYQbehYLYFpXlv3h433HhD2sU51-CUUl86GfPrViQ9zZ7U50LVovaSbEOxQhWcvpTootQXsu3rTtgWi9a8twil9lybhWRaooi6rzYKdJ59euL4zwwUOvyv_hob3kyCyV1z-BliSv5YysPG24OtJ?width=549&height=660&cropmode=none',
        issue3live: 'https://snz04pap002files.storage.live.com/y4mHAnAlmLNI_rBVxJ8b1051yRBAGKnNBHQq2e_vB4tWLU4Y19wSXcy290VXctP8tzzMMKj94p2MK6E9MdQpDV4VeFa5YaJR49An10V9O8hOZYLYvszGyAH0Uf2D_ff-rqmUF7-qP1JOJ5wwnqoePoHEBR83uv78z4r8-sDAIaVhaOnuiEhAh7eouY5fDDjAgBd?width=397&height=660&cropmode=none',
        issueimgs3class: 'row perryassociates-imgs3',
        issue3class: 'issue-img issue3-img',
        issue3title: 'Listing Page',
        issue3note: <div className="issue-content">
                <p className="issue-description">Some text goes here. Updates were made to:</p>
                <ul className="issue-list">
                    <li>point 1</li>
                    <li>point 2</li>
                    <li>point 3</li>
                </ul>
            </div>,
        addnotes: <ul className="add-note-list">
            <li><strong>Security:</strong> Text about Security</li>
            <li><strong>Images:</strong> text about site images</li>
            <li>another note goes here</li>
        </ul>,
        prjcta: 'Project Call To Action Goes Here',
    }
]

export default projects