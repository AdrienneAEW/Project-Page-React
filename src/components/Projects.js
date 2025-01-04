import Cybervision from '../Cybervision-Colors.png';
import CybervisionLogo from '../Cybervision-Logo.png';
import AllensPie from '../AllensPie-Colors.png';
//import RetrainBackPain from '../RetrainBackPain-Colors.png';
import PerryAssociates from '../PerryAssociates-Colors.png';

let issueSolution = <a href="#project-issues" title="View project details." aria-label="View project details.">Issues and Solutions</a>

let googleDesign = <a href='https://material.io/' target="_blank" rel="noreferrer" title="Visit Material - Google's open-sourced design system." aria-label="Visit Material - Google's open-sourced design system.">Material</a>

let sassCss = <a href='https://sass-lang.com/' target="_blank" rel="noreferrer" title="Learn more about Sass - CSS Compiler." aria-label="Learn more about Sass - CSS Compiler.">Sass</a>

let materialIcons = <a href='https://fonts.google.com/icons' target="_blank" rel="noreferrer" title="Learn more about open-sourced Mateial Icons by Google." aria-label="Learn more about open-sourced Mateial Icons by Google.">Material Icons</a>

let googleFonts = <a href='https://fonts.google.com/' target="_blank" rel="noreferrer" title="Learn more about open-sourced Google Fonts." aria-label="Learn more about open-sourced Google Fonts.">Google Fonts</a>

let bootstrapIcons = <a href='https://icons.getbootstrap.com/' target="_blank" rel="noreferrer" title="Learn more about open-sourced Bootstrap Icons." aria-label="Learn more about open-sourced Bootstrap Icons.">Bootstrap Icons</a>

let adobeColor = <a href='https://color.adobe.com/' target="_blank" rel="noreferrer" title="Learn more about Adobe Color." aria-label="Learn more about Adobe Color.">Adobe Color</a>

let boostrap5 = <a href='https://getbootstrap.com/docs/5.0/getting-started/introduction/' target="_blank" rel="noreferrer" title="Learn more Bootstrap Front-end Open Source Toolkit." aria-label="Learn more Bootstrap Front-end Open Source Toolkit.">Boostrap 5.0</a>

const projects = [
    {
        name: 'Cybervision LLC',
        description: <p>This is a jazz musician's website. He offers lessons via a bookings page that reads more like a contact page built with a drag and drop template.</p>,
        prjbtn: 'Bookings',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Orignal</em> and <em>Project</em> sites use the same <a href="https://fonts.google.com/share?selection.family=Frank%20Ruhl%20Libre%7CKarla%7COswald" target="_blank" rel="noreferrer" title="View Font Specimens" aria-label="View Font Specimens">typeface</a>:</p>
                    <p className="spec-detail-sublist"><em><b>Page Title</b></em>: Oswald, sans-serif</p>
                    <p className="spec-detail-sublist"><em><b>Headings</b></em>: Frank Ruhl Libre, serif</p>
                    <p className="spec-detail-sublist"><em><b>Body Text</b></em>: Karla, sans-serif</p>
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Site:</em> Theme Icons</p>
                    <p><em>Project Site:</em> {materialIcons}</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Project:</em> images were sourced from the original website</p>
                </div>,
                colors: <img src={Cybervision} className="project-palette" alt="Cybervision Color Palette" title="Color palette created using Adobe Color" aria-label="Color palette created using Adobe Color" />
            }
        ],
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/Cybervision/Cybervision.html',
        original: 'https://michaelclewis.com/booking',
        titleorg:'Visit Cybervision\'s booking page.',
        titlelive: 'Visit Cybervision\'s project page.',
        imgorg: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICuYBsBAAAAAHWY0KndfvH7Jt0?height=660',
        imglive: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu8IUBAAAAAGVC05r09m4JMyg?height=660',
        altorg: ' Cybervision\'s original home page.',
        altlive: ' Cybervision\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A booking page update.',
        goals: <p>Our version of this page streamlines the navbar; creating a site hierachy. Reworks the page labeling to reflect it's purpose and guides user interaction. The contact form is user-friendly, easy to follow and pleasant on the eyeballs. In our re-do, the contact information is a companion to the form, not an adversary. Overall, the page has lost that dragged and dropped appeal. See {issueSolution} for details.</p>,
        persona: <p title="A quote from the site owner." aria-label="A quote from the site owner.">&ldquo;<a href="https://www.alignable.com/harlem-new-york-ny/cybervision-entertainment-llc" title="Visist Cybervision's Alignable Profile" aria-label="Visit Cybervision's Alignable Profile" target="_blank" rel="noreferrer">Recording Artist</a>, composer, producer trumpet, fluegelhorn, vocalist. Private trumpet lessons. Event producer.&rdquo;</p>,
        issue1org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu9oUBAAAAADbkHRP_AE5IDwE?width=437&height=525',
        issue1live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu94UBAAAAAEKkfHZANz2i4Q4?width=660',
        issueimgs1class: 'row cybervision-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Page Header and Navbar',
        issue1note: <div className="issue-content">
                <p className="issue-description">The link label says bookings, but the page is titled &ldquo;Micheal C. Lewis&rdquo;. The page seems unfinished and haphazard; not at all inviting. A more appropriate title for this page, as is, would be &ldquo;Contact&rdquo;. The purpose of the page is for users to book or inquire about music lessons. User's can't book from the current page. Our updates make the page title descriptive, we...</p>
                <ul className="issue-list">
                    <li>changed the page title to reflect the page's purpose &mdash; made the header a hero</li>
                    <li>gave the navbar a new hierachy
                        <ul>
                            <li>placed &ldquo;photo and video&rdquo; links under &ldquo;Media&rdquo;</li>
                            <li>for the navbar we removed &ldquo;store&rdquo; link &mdash; the store is a blank page &mdash; users can make purchases via a dropdown menu under the &ldquo;Music&rdquo; link</li>
                            <li>renamed the &ldquo;review&rdquo; link, placed &ldquo;press release &rdquo; under the &ldquo;Music&rdquo; link &mdash; there were no reviews and one press release</li>
                            <li>the logo brands the navbar and acts as the &ldquo;home&rdquo; page link</li>
                        </ul>
                    </li>
                    <li>the sidebar has been removed &mdash; it contains a contact and log-in form &mdash; hidden from users. Users couldn't log in and one contact form is sufficient.</li>
                    
                </ul>
            </div>,
        issue2org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu-IUBAAAAADBC2YgjP04Hf0s?width=660',
        issue2live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu-YUBAAAAAHHFwKoRDb1EPDI?width=660',
        issueimgs2class: 'row cybervision-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Content Layout',
        issue2note: <div className="issue-content">
                <p className="issue-description">The layout lacks harmony. There's no connection coherent flow between sections and elements. The form looks unfinished and is not at all inviting. The project brings some harmony to the page by...</p>
                <ul className="issue-list">
                    <li>creating a lay-out with one purpose and to distinct groups</li>
                    <li>pairing icons with labels to give users a visual and text definition</li>
                    <li>adding a call-to-action title reinforcing the goal of the page</li>
                    <li>adding social links to the contact info</li>
                    <li>using color and elevation to guide the user flow and create a more appealing visual</li>
                </ul>
            </div>,
        issue3org: CybervisionLogo,
        issue3live: CybervisionLogo,
        issueimgs3class: 'row cybervision-imgs3',
        issue3class: 'issue-img issue3-img cybervision-issue3-img',
        issue3title: 'Logo',
        issue3note: <div className="issue-content">
                <p className="issue-description">The site logo, while foundationally on good ground, has a low text/background contrast and is not responsive or accessible. While we used it, as is, in this project, we'd recommend a re-design. Preferrably by a professional logo maker. If we were consulting with the site owner our suggestions would be: </p>
                <ul className="issue-list">
                    <li>rework the color, weight and position of the logo text</li>
                    <li>render the final logo in at least 3 different sizes and design iterations</li>
                    <li>make sure the text is visable and readable at all sizes</li>
                    <li>consider having the logo redesigned by a professional logo maker</li>
                </ul>
            </div>,
        addnotes: <ul className="add-note-list">
            <li><strong>Calendar:</strong> adding a calendar to the bookings form is user-friendly &mdash; including a schedule of events could promote more user interaction</li>
            <li><strong>Reviews:</strong> we renamed and repositioned this link &mdash; the page has been updated since the completion of our project &mdash; we would restore this link to its former placement</li>
        </ul>,
        projecttools: 
            <ul className="tools-list">
                <li>{sassCss}</li>
                <li>HTML 5/JavaScript</li>
                <li>{googleDesign} design system resources {materialIcons} and {googleFonts}</li>
                <li>Project's color palette created by uploading logo to {adobeColor}</li>
            </ul>,
    },
    {
        name: 'Allen\'s Pie',
        description: <div>
            <p>Allen's Pie is an online Ecommerce site that sells home-made pies. The original &#40;&ldquo;landing&rdquo;&#41; page is so long we cut it in half to present a full page view. A parallax effect that opens the page is a great way to promote the product. And the pie looks delicious, revealed on scroll. So good in fact it made me hungry. Yet, the parallax is marred with size and placement issues. Overall, we liked the site and was exicted to take it on as a project.</p>
        </div>,
        prjbtn: 'Landing',
        specs: [
            { 
                fonts: <div className="spec-detail">
                
                    <p><em>Original Site</em>:</p>
                    <p className="spec-detail-sublist"><a href="https://fonts.adobe.com/fonts/proxima-nova" target="_blank" rel="noreferrer" title="View Font Specimens" aria-label="View Font Specimens">Proxima Nova</a>, sans-serif and <a href="https://fonts.adobe.com/fonts/din-condensed" target="_blank" rel="noreferrer" title="View Font Specimens" aria-label="View Font Specimens">Din Condensed</a></p>
                    <p><em>Project Site </em>:</p>
                    <p className="spec-detail-sublist"><b>Montserrat</b>, sans-serif and <b>Open Sans Condensed</b>, sans-serif <a href="https://fonts.google.com/share?selection.family=Montserrat%7COpen%20Sans%20Condensed:wght@300" target="_blank" rel="noreferrer" title="View Font Specimens" aria-label="View Font Specimens">typefaces</a></p>
                    
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Site:</em> Theme Icons</p>
                    <p><em>Project Site:</em> {materialIcons}</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Project Site</em>: Images sourced from the original site</p>
                </div>,
                colors: <img src={AllensPie} className="project-palette" alt="alt text" />
            }
        ],
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/AllensPie/AllenPie.html',
        original: 'https://www.allenspie.com/',
        titleorg:'Visit Allen\'s Pie original page.',
        titlelive: 'Visit Allen\'s Pie project live.',
        imgorg: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICuJS0BAAAAAHmPvL1hanK7Rxg?width=660',
        imglive: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu9IUBAAAAAK3oiPUKEit15N8?width=660e',
        altorg: ' Allen\'s Pie original home page.',
        altlive: ' Allen\'s Pie live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A landing page update.',
        goals: <p>Our version keeps the parallax &#40;minus the awkward size&#92;placement&#41;, and cleans up the layout. We've reworked the testimonials to act as a sort of menu. Of course, we edited the content, resized the images and steamlined the site's information architecture. Visit the {issueSolution} section for details.</p>,
        persona: <p title="A quote from the site owner." aria-label="A quote from the site owner.">&ldquo;<a href="https://www.alignable.com/harlem-new-york-ny/allens-pie-llc" title="Visist Allen's Pie Alignable Profile" aria-label="Visist Allen's Pie Alignable Profile" target="_blank" rel="noreferrer">Allen's Pie</a> is an small batch online pie shop based in Harlem. I bake and deliver each product throughout New York City and select surrounding areas.&rdquo;
        </p>,
        issue1org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICuAYYBAAAAAJLyr3XRGI5B7_I?width=660',
        issue1live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu9IUBAAAAAK3oiPUKEit15N8?width=660',
        issueimgs1class: 'row allenspie-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Site Architecture',
        issue1note: <div className="issue-content">
                <p className="issue-description">The original landing page includes a link to &ldquo;<em>the story</em>&rdquo; and another link to &ldquo;<em>the pie</em>&rdquo;. The story is the pie and the pie is the story. Basically we have 2 &ldquo;about&rdquo; pages. The menu link opens a product page not a menu. There is no menu, per se. While the cart link stands out, it is positioned where it could easily get lost. The project updates the:</p>
                <ul className="issue-list">
                    <li>pie link by removing it &mdash; since &ldquo;pie&rdquo; is the story &#40;not the only one, but a huge part of the story&#41; it deserves a stand&ndash;out section on the story page</li>
                    <li>the menu link destination was reconfigured &mdash; clicking it will scroll to a menu-isk section &mdash; we call it a &ldquo;testimonial menu&rdquo; &mdash; hovering over the menu link opens a dropdown &#40;same as original&#41; with a list of direct links to all product pages</li>
                    <li>the cart link&#92;indicator has been added to the navbar &mdash; this way it won't get lost and maintains a position of prominence &mdash; makes real easy for the user to watch and access the cart.</li>
                </ul>
            </div>,
        issue2org: 'https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=192437&inputFormat=png&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!buYyuMXLKECgINX2zGbsHapZUyHOsPdJvuVlcnfd2fJ0SHB3jjVCSLxN5Jw73E1I%2Fitems%2F01T2A6RZWEUEWFLNAMXEQIBLS3DMAQAAAA%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiJiODMyZTY2ZS1jYmM1LTQwMjgtYTAyMC1kNWY2Y2M2NmVjMWQiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3MzU5NzA0MDAifQ.n4i0ttZ-laAgJrULgzx7f5RoH4HVFyQZp7uqREM4t7V2vCyEMDM12aNQtbzC8BNnF7jLylmhJaT4DFl8d8XbmbzOkyJXE2ln6tqbjFQZJt-jkCR3za7Jh4D_EaC3cKnSMhci_Ed13xFZM5AKJJJ2THR5fkHtgbN3R2J4q2y8AAFTz-p7vvBy99YJhWzZeUVJQMEC4l2NNdvCYzIM_Si5SysoJWmxSh0gLzapoXdTdww8sNtFkvCzARgJykp5gY1b4PgfMB0RQY_pa1rhd0CdcKHW4Ob9neunvzoEwVcwRft4Mq_hEmumfbFNy2Fc_N6vxUdavW_hS6pWYAwZ0wzWEtfRdBd9uJvImB4WiAp7gnRH-_BPFGFpLaW_eTELw0BM.gYdoKaXoeBEEaQxfYl9cJlR_j1FDuldh4fkrm7CRLMg%26version%3DPublished&cb=63871546918&encodeFailures=1&width=775&height=1648',
        issue2live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICuAIYBAAAAANVpf4L8BEphnHs?width=660',
        issueimgs2class: 'row allenspie-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Testimonials/Menu',
        issue2note: <div className="issue-content">
                <p className="issue-description">Who needs a menu when you have less then 10 products for sale? Okay 10 may not be the magic number I think it is, but one has to draw the line somewhere. There are about 4&ndash;6 pie fillings. Approximately 2 of these fillings are seasonal. A menu page is overkill. A waste of prime real estate. After all, the purpose of the site is to sell pies. A solution is to pair the product with a testimonial...</p>
                <ul className="issue-list">
                    <li>the sites menu page, if you can find it, is a paged filled with oversized images with barely visible text on top &mdash; the menu link on the home page opens a product page &mdash; a clear case of mislabeling &mdash; the project displays all the products on the landing page as a simple card &mdash; each card links to the specified product page;</li>
                    <li>the testimonials' font-size was decreased &mdash; and the testimonials have been given a backgound color and border to maintain continuity &mdash; each testimonails is a companion of a product it describes or closely describes &mdash; creating a &ldquo;testimon-enu&rdquo;</li>
                    <li>the menu link now scrolls the page to the menu on click and displays a dropdown menu on hover.</li>
                </ul>
                
            </div>,
        issue3org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu8oUBAAAAAFpqlV0HtOoJxQI?height=660',
        issue3live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu8oUBAAAAAFpqlV0HtOoJxQI?height=660',
        issueimgs3class: 'row allenspie-imgs3',
        issue3class: 'issue-img issue3-img',
        issue3title: 'Parallax Effect',
        issue3note: <div className="issue-content">
                <p className="issue-description">Thanks to some quality images, the product looks yummy. And then there's an opening parallax that reveals an image of the product. As with much of the landing page, it's oversized and scrolls awkwardly. The project opens with a cleaned up parallax that:</p>
                <ul className="issue-list">
                    <li>doesn't expose the entire image &mdash; parallax works best when the image is revealed in stages &mdash; we start in the middle &mdash; as the user scrolls the full product image is revealed;</li>
                    <li>inserts introduction content on top of the parallax image so users know upfront what the site is about and selling;</li>
                    <li>there are two parallaxes on the landing page &mdash; we elminated the second parallax to keep the page concise and managable</li>
                </ul>
            </div>,
        addnotes: <ul className="add-note-list">
            <li><strong>Nav</strong> a disappearing navbar works with this layout &mdash; nevertheless, a back&ndash;to&ndash;top button should be added</li>
            <li><strong>Footer:</strong> a footer indicates the end of the page &mdash; the current footer is indistinct from the rest of the page &mdash; this is a missed CTA opportunity</li>
            <li><strong>Delivery:</strong> delivery area covered is not clearly stated &mdash; a clear delivery statement, map and list of delivery areas is a necessity</li>
        </ul>,
        projecttools: <div>
            <ul className="tools-list">
                <li>{sassCss}</li>
                <li>HTML/JavaScript</li>
                <li>{googleDesign} design system resources {materialIcons} and {googleFonts}</li>
                <li><em>Color palette</em> created via logo upload to {adobeColor}</li>
            </ul>
        </div>,
    },
    {
        name: 'Perry Associates',
        description: <p>Perry Associates is a real estate site with expertise in Harlem real estate. The minimalist layout, the bright colors and quality photos drew us in. The lack of a controlled user search really got our attention.</p>,
        prjbtn: 'Search',
        specs: [
            { 
                fonts: <div className="spec-detail">
                    <p><em>Orignal</em> and <em>Project</em>: typeface</p>

                    <p className="spec-detail-sublist"><a href="https://fonts.google.com/share?selection.family=Raleway" title="View Font Specimens" aria-label="View Font Specimens">Raleway, sans-serif</a></p>
                    
                </div>,
                icons: <div className="spec-detail">
                    <p><em>Original Site:</em> Theme Icons</p>
                    <p><em>Project Site:</em> {materialIcons} and {bootstrapIcons}</p>
                </div>,
                images: <div className="spec-detail">
                    <p><em>Project Site</em>: images sourced from original site</p>
                </div>,
                colors: <img src={PerryAssociates} className="project-palette" alt="alt text" />
            }
        ],
        live: 'https://samples.adrienneaew.me/Website-Updates/IFIDT/PerryAssociates/PerryAssociates.html',
        original: 'http://www.perryassociatesrealty.com/',
        titleorg:'Visit Perry Associates\' home original page.',
        titlelive: 'Visit Perry Associates\' project live.',
        imgorg: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu-oUBAAAAAHKehyL6E4aPqKc?width=660',
        imglive: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICuEIYBAAAAAHwxNY8ALOW0Xpo?width=610&height=293',
        altorg: ' Perry Associates\'s original home page.',
        altlive: ' Perry Associates\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A listing search and page update.',
        goals: <p>The focus of this project was controlling user search results. The sites navbar lacked information architecture and the landing page had little accessibility functionality. Just how many clicks does it take to get a hit from the &ldquo;<em>quick search</em>&rdquo;? Lots. Not the most pleasing user experience. Our redesign sought to update the information architecture, simplify the quick search and include a direct link to the listings pages. View the {issueSolution} section of this page for details.</p>,
        persona: <p title="A quote from the site owner." aria-label="A quote from the site owner.">&ldquo;Whether you’re a real estate buyer or seller, renter or developer&mdash;<a href="https://www.alignable.com/harlem-new-york-ny/perry-associates?source=--profile" title="Visist Perry Associates' Alignable Profile" aria-label="Visist Perry Associates' Alignable Profile" target="_blank" rel="noreferrer">Perry Associates</a> is here for you. We understand all the details involved, from property and site selection, negotiation and purchase to ownership, management, long- and short-term rentals—and even interior design.&rdquo;
        </p>,
        issue1org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICuEIYBAAAAAHwxNY8ALOW0Xpo?width=610&height=293',
        issue1live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu_IUBAAAAAO2EVp8zSR1jvfk?width=660',
        issueimgs1class: 'row perryassociates-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Quick Search',
        issue1note: <div className="issue-content">
                <p className="issue-description">If your agency is a small operation; your property inventory is in the 100s, instead of the thousands. Not controlling how users search your listings will create unnecessary user pain points. Best to let the inventory drive the search. The project controls the search based on inventory and type &mdsash; reducing...</p>
                <ul className="issue-list">
                    <li>the number of form inputs &mdash; 7 inputs does not connote &ldquo;quick&rdquo; &mdash; the project includes 2; &ldquo;location&rdquo; and &ldquo;type&rdquo; &mdash; we haven't seen many real estate sites with quick searchs that have more than 3 inputs...We chose the two inputs tht would return the most successful results...our inputs use...</li>
                    <li>a dropdown list of property locations and types &#40;i.e.; rental, buy&#41; that are in inventory &mdash; increasing users search result by Approximately 85% – 95%</li>
                    <li>users have the option to do more detailed searches on listings page &mdash; however the increase in search options, though based on inventory &mdash; when used in combination descrease the rate of a search with results to approximately 80% - 90%</li>
                </ul>
            </div>,
        issue2org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu_IUBAAAAAO2EVp8zSR1jvfk?width=660',
        issue2live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu-4UBAAAAAB5MiE9rw07CUH0?width=660',
        issueimgs2class: 'row perryassociates-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Information Architecture',
        issue2note: <div className="issue-content">
                <p className="issue-description">There is no direct link to the most important page on the site – the listings page. Instead, the navbar includes links to property categories (i.e.; residential, commercial). Following the link opens a page with the landing page search form as it's only content. Bascially these links are cluttering up the navbar. It's a symptom of over-scaling. Considering user flow, the project…</p>
                <ul className="issue-list">
                    <li>trimmed the navbar options to include only top level pages</li>
                    <li>added a direct link to the listings page</li>
                    <li>made the navbar more accessible by giving the links and logo a bit of breathing room and increasing the font-weight and font-size for better visibility</li>
                </ul>
            </div>,
        issue3org: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu4IUBAAAAAMSqh0Gl87r7o2s?height=660',
        issue3live: 'https://1drv.ms/i/c/aeb90cb4552ca1c4/UQTEoSxVtAy5IICu34UBAAAAAM9ZLxJf7Rw-LNU?height=660',
        issueimgs3class: 'row perryassociates-imgs3',
        issue3class: 'issue-img issue3-img',
        issue3title: 'Listing Page',
        issue3note: <div className="issue-content">
                <p className="issue-description">The listings page layout isn’t very user-friendly.  The property cards are laid out horizontally. Each card is it's own row. Making the page extremely long and hard to scroll. While users can filter the page, the options are minimal. There's no search input. To search the listings page a user has to go back to the home page. Our updates include...</p>
                <ul className="issue-list">
                    <li>the listing pages is now a 3 x 9 grid card layout &mdash; our design <em>would</em> allow users to change the number of cards viewed per per page. The live sample is using a limited inventory that fits on one page. So this option is not included. However, the grid layout is easy to scale</li>
                    <li>a filter/search form has been added in page &mdash; users can refine their search parameters without leaving the page</li>
                    <li>searches that return no results now returns a fail message that includes the users search parameters &mdash; informing users why the search failed &#40;i.e., there are no rentals with 2 bedrooms available in the bronx&#41;</li>
                    <li>all inputs are dropdown list that include only what's in inventory &mdash; reducing user fustration and pain</li>
                </ul>
            </div>,
        addnotes: <ul className="add-note-list">
            <li><strong>Site Update:</strong> the site is currently being updated &mdash; our project is based on the site before the updates</li>
            <li><strong>Security:</strong> the site is unsecure &mdash; SSL is needed</li>
            <li><strong>Images:</strong> while the site uses, mostly, quality images &mdash; the image sizes and quality should be standardized</li>
            <li><strong>Contrast:</strong> the color contrast ratio for orange and white color scheme is <em>3.95</em> &mdash; <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> recommends a ratio of <em>4.5:1</em> &mdash; the color scheme should be re-evaluated to increase accessiblity</li>
        </ul>,
        projecttools: <div>
            <ul className="tools-list">
                <li>{sassCss}</li>
                <li>HTML/Javascript</li>
                <li>{boostrap5} Front-end Toolkit and {bootstrapIcons}</li>
                <li>{googleDesign} resources {googleFonts} and {materialIcons}</li>
            </ul>
        </div>,
    }
]

export default projects
