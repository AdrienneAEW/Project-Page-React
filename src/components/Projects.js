import Cybervision from '../Cybervision-Colors.png';
import RetrainBackPain from '../RetrainBackPain-Colors.png';
import PerryAssociates from '../PerryAssociates-Colors.png';

let issueSolution = <a href="#project-issues" title="View project details." aria-label="View project details.">Issues and Solutions</a>

let materialIcons = <a href='https://fonts.google.com/icons' title="Learn more about open-sourced Mateial Icons by Google." aria-label="Learn more about open-sourced Mateial Icons by Google.">Material Icons</a>

let bootstrapIcons = <a href='https://icons.getbootstrap.com/' title="Learn more about open-sourced Bootstrap Icons." aria-label="Learn more about open-sourced Bootstrap Iconse.">Bootstrap Icons</a>


const projects = [
    {
        name: 'Cybervision LLC',
        description: <p>This is a jazz musician's website. Our main focus was the bookings page. The live project page streamlines nav and page layout. Groups content in sections. And adds informative placeholder text to the form. See {issueSolution} for details.</p>,
        prjbtn: 'Contact',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Body Headings</em>: Frank Ruhl Libre, serif</p>
                    <p><em>Body Text</em>: Karla, sans-serif</p>
                    <p><em>Page Headings</em>: Oswald, sans-serif</p>
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
        imglive: 'https://snz04pap002files.storage.live.com/y4m8HkNDSboHBDyHPy1KQpch_JVvL14eUGurk6SB2X27ItVMREE_4OWD7JsMhmYHd-Bk_gy4vhsuD_WjMHhsKPDmtbybYCxXF2xShKhN-n1ibNX0dYTu0lGk1fTlI8quSEvVoXziagJUH0RT74jpV6nSDl76LeMZbWpl7JhvJIgZ69WZTOMJvaMo8lDdNQa5r_u?width=660&height=621&cropmode=none',
        altorg: ' Cybervision\'s original home page.',
        altlive: ' Cybervision\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A contact page update.',
        issue1org: 'compare cybervision-org1',
        issue1live: 'compare cybervision-live1',
        issue1title: 'Page Header',
        issue1note: 'A note goes here. I\'m a number 1 note.',
        issue2org: 'compare cybervision-org2',
        issue2live: 'compare cybervision-live2',
        issue2title: 'Content Layout',
        issue2note: 'A note goes here. I\'m a number 2 note.',
        issue3org: 'compare cybervision-org3',
        issue3live: 'compare cybervision-live3',
        issue3title: 'Logo',
        issue3note: 'A note goes here. I\'m a number 3 note.',
        addnotes: 'Additional notes go here.',
        prjcta: 'Project Call To Action Goes Here',
    },
    {
        name: 'Retrain Back Pain',
        description: <p>Retrain Back Pain is a professional yoga website. The live project page features a single. Streamlined the page and revamped the subscription section. See {issueSolution} for details.</p>,
        prjbtn: 'Landing',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Original Page Text</em>: Brandon Grotesque Medium, sans-serif</p>
                    <p><em>Live Project Page Text</em>: Lato, sans-serif</p>
                    <p><em>Live Project Button Text</em>: Open Sans, sans-serif</p>
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Page:</em> Uses theme icons.</p>
                    <p><em>Live Project Page:</em> Uses {materialIcons}.</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Live Project Page</em> images were sourced from the original page/website.</p>
                </div>,
                colors: <img src={RetrainBackPain} className="project-palette" alt="alt text" />
            }
        ],
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/RetrainBackPain/RetrainBackPain.html',
        original: 'https://retrainbackpain.com/',
        titleorg:'Visit Retrain Back Pain\'s original page.',
        titlelive: 'Visit Retrain Back Pain\'s project live.',
        imgorg: 'https://snz04pap002files.storage.live.com/y4md4uWiHBiD_addZAgnplJzgvCAiBxXtYU4lAnPo0QrO5zzsM20vhMrRePMzeI6o2_1tOA6Wz4rrVc53houVuqBWdU7JKNETPqGZCtPdOM-ew73smy5mPgp5IWpiNa2fajEB92nGChFE4ySXRF5UNrmx2VS7p4kbIff27aAao-npJbmuhT6LJVFbR6jDE-B8S0?width=193&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4mLjvN9pGgxvYL70fPEhUyzHqxs1zTym_YJO5lV5Q3KuIcR2syR5_lqMYdQMt2U6zSxndCcL73ugZhVBNVfLiDWmuVw7JDROrcpZc0eatsFWgqYs0S9AsN3Ao-fscaQ-_AAx5iUbkomqIVjq_wTJXRP4ZilfTppvbuV6uyoavK1RonYwqCThKFOnXs57gixuNd?width=378&height=660&cropmode=none',
        altorg: ' Retrain Back Pain original home page.',
        altlive: ' Retrain Back Pain live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A landing page update.',
        issue1org: 'compare retrainbackpain-org1',
        issue1live: 'compare retrainbackpain-live1',
        issue1title: 'Site Architecture',
        issue1note: 'A note goes here. I\'m a number 1 note.',
        issue2org: 'compare retrainbackpain-org2',
        issue2live: 'compare retrainbackpain-live2',
        issue2title: 'Page Layout',
        issue2note: 'A note goes here. I\'m a number 2 note.',
        issue3org: 'compare retrainbackpain-org3',
        issue3live: 'compare retrainbackpain-live3',
        issue3title: 'Branding',
        issue3note: 'A note goes here. I\'m a number 3 note.',
        addnotes: 'Additional notes go here.',
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
        issue1org: 'compare perryassociates-org1',
        issue1live: 'compare perryassociates-live1',
        issue1title: 'Quick Search',
        issue1note: 'A note goes here. I\'m a number 1 note.',
        issue2org: 'compare perryassociates-org2',
        issue2live: 'compare perryassociates-live2',
        issue2title: 'Site Architecture',
        issue2note: 'A note goes here. I\'m a number 2 note.',
        issue3org: 'compare perryassociates-org3',
        issue3live: 'compare perryassociates-live3',
        issue3title: 'Site Layout',
        issue3note: 'A note goes here. I\'m a number 3 note.',
        addnotes: 'Additional notes go here.',
        prjcta: 'Project Call To Action Goes Here',
    }
]

export default projects