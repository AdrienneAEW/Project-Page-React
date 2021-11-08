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
        imgorg: 'https://snz04pap002files.storage.live.com/y4mHKX87WB8elASp2yLG-A9YleCUmWAEAQDFVes2IsctykO3f_pR_LtyqiuXqWUEN217Z4dCQ5tjiKEBHxKhG6i5YWaT_cospPpLc497qNvRFqtW5bTY_vmURMYwxF5enThhLGT_13PFoIZAY3uV6tyeQFdeLMgYHLxV9vQvzAH3kEalgTl1Sl7-B1MJewdToGP?width=393&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4mXmy--pqTN2P88g5b6rpiHg8ayh1NLvoCGJTSifPT02BteIsDi2yuPwcP5l4f9TvjNDClJJBg9ftvR9LapuixUS2JSJO6_F9VG32RlTCpwvuJHGLrh5DBqqsZkslBg6XNigdk6-7n149RVkRg5JjJPBeJPrkb-jonyS6RwU3iQHPm8HST63FuNga5kfCuYm0b?width=584&height=660&cropmode=none',
        altorg: ' Cybervision\'s original home page.',
        altlive: ' Cybervision\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A booking page update.',
        goals: <p>Our version of this page streamlines the navbar; creating a site hierachy. Reworks the page labeling to reflect it's purpose and guides user interaction. The contact form is user-friendly, easy to follow and pleasant on the eyeballs. In our re-do, the contact information is a companion to the form, not an adversary. Overall, the page has lost that dragged and dropped appeal. See {issueSolution} for details.</p>,
        persona: <p title="A quote from the site owner." aria-label="A quote from the site owner.">&ldquo;<a href="https://www.alignable.com/harlem-new-york-ny/cybervision-entertainment-llc" title="Visist Cybervision's Alignable Profile" aria-label="Visit Cybervision's Alignable Profile" target="_blank" rel="noreferrer">Recording Artist</a>, composer, producer trumpet, fluegelhorn, vocalist. Private trumpet lessons. Event producer.&rdquo;</p>,
        issue1org: 'https://snz04pap002files.storage.live.com/y4mEzYHUoNipiQ1OoYWrzlxQ36R1pe07lH0uiHIBw_bLpwpH275VtQg1twx8BxNbFyBPbSLTNjgNx1oFA7ZwrkGfXl0ainNHGtKATu9Ci-uoHzzrvdBRSoMiD93kMAeHeHg5p-bnTbhmaOt9aeK0ZuP5T50WXdmcEZr8G3jwMu6UH2hEzH3kYcUzvbJBhbrNfzg?width=660&height=175&cropmode=none',
        issue1live: 'https://snz04pap002files.storage.live.com/y4mki8kpV8j8R2UkvIhIdQWkcS3vnXj1ODRxAOnNB7gzkR5aUVmfp1wz5nX9JvP2jJoSfWnkoqA8WTz8IyNDbLTCCP-H2OZoDqlW3DcojGlnV-I1HFuJVHmV8rZL9sZu9sOCP0cRvSNM-d5UAWvSqHwJx4R95sdZVh5MhIxChlfm9Zqp4o0Rt5wi1r0F1E1GF8S?width=660&height=183&cropmode=none',
        issueimgs1class: 'row cybervision-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Page Header and Navbar',
        issue1note: <div className="issue-content">
                <p className="issue-description">The link label says bookings, but the page is titled &ldquo;Micheal C. Lewis&rdquo;. The page seems unfinished and haphazard; not at all inviting. A more appropriate title for this page, as is, would be &ldquo;Contact&rdquo;. The purpose of the page is for users to book or inquiry lessons. To make the page self descriptive and more inviting to the user, we...</p>
                <ul className="issue-list">
                    <li>changed the page title to reflect the page's purpose &mdash; made the header a hero</li>
                    <li>gave the navbar a new hierachy
                        <ul>
                            <li>placed &ldquo;photo and video&rdquo; links under &ldquo;Media&rdquo;</li>
                            <li>removed &ldquo;store&rdquo; link &mdash; the store is a blank page &mdash; users can make purchases via a dropdown menu under the &ldquo;Music&rdquo; link</li>
                            <li>&ldquo;review&rdquo; link was renamed &ldquo;press release &rdquo; and placed under &ldquo;Music&rdquo; link &mdash; there were no reviews and one press release</li>
                            <li>the logo brands the navbar and acts as the &ldquo;home&rdquo; page link</li>
                        </ul>
                    </li>
                    <li>the sidebar has been removed &mdash; it contains a contact and log-in form &mdash; a hidden log-in is not user-friendly and one contact/booking form is enough</li>
                    
                </ul>
            </div>,
        issue2org: 'https://snz04pap002files.storage.live.com/y4m4mUaG8VEVyBpx9w5O-IUOMz2ApfC4O5Fj6Mb-yRzyyQzrx9HTB0psN6TBWXxT7JemHz_6lzQV3xMioDOM4ZXQjXYmbQpCOAJdnF-FmFYfXWj3XxlqY5d4_MQ4mKR_HRevKY8GjphAEhC9qlnhyYWNc44fk9rjWARIqqG7_EhujvxiHa0oZuizidzTC76MAhV?width=437&height=525&cropmode=none',
        issue2live: 'https://snz04pap002files.storage.live.com/y4m6taUXS2PL5Ffkt5ZYdUmly3_oF3e_Padjm7wNIFKD0NkgvSX0GuUluI_aSXJp8qcrYFH37z4MA6rbbIDHu8elCc6BDbRd1LfNU7l4C8cv_AT_LlZuiteWnvJsJn1HKAIiwnpBR-d7qqzKJf2AQWJm5Q5jhYcvWMPMxp_7Plt6MXcx1yp3guSt4SScgIRZLwj?width=256&height=197&cropmode=none',
        issueimgs2class: 'row cybervision-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Content Layout',
        issue2note: <div className="issue-content">
                <p className="issue-description">The layout lacks harmony. There's no connection between setions and elements. The form looks unfinished and is not at all inviting. The project brings some harmony to the page by...</p>
                <ul className="issue-list">
                    <li>creating a lay-out distinquishes the form and contact info</li>
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
        imgorg: 'https://snz04pap002files.storage.live.com/y4mdp6jyqDS9nglXrqs68wDZ2dQdDz6lk85bmaUBsjyWKFN9ZCE8y97CR5RYokWAzVC91PNjKvu6nJe1w9onSrHdwtjxCKGQgVQaIkzswBlSWKPGWZQ3n69AXdLZVklkvcsRcgRHGagQCl3eN8-R8nMUKs-KbU2OQWTDkXwy63zXe9uXW0xeQ4s3_15ah9-SB8m?width=346&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4mT07XH5ggsdUz6BqTVq8c1mbB2g4oCwR70aD-AbIcjgYdF-mUiDP9X-um3quqPaLPQa2762K5NeniUJyKqLNOSfeV008TPgTvm5HnVX9pb4JSfrJONCFoS5UW-ZNVBZsVp_-WfAlwzkg5EGiJ1clMs-BIvdEEgCv_JwDy4J_6shkKSdNOF1wmRTiY9h2Vi9o0?width=191&height=660&cropmode=none',
        altorg: ' Allen\'s Pie original home page.',
        altlive: ' Allen\'s Pie live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A landing page update.',
        goals: <p>Our version keeps the parallax &#40;minus the awkward size&#92;placement&#41;, and cleans up the layout. We've reworked the testimonials to act as a sort of menu. Of course, we edited the content, resized the images and steamlined the site's information architecture. Visit the {issueSolution} section for details.</p>,
        persona: <p title="A quote from the site owner." aria-label="A quote from the site owner.">&ldquo;<a href="https://www.alignable.com/harlem-new-york-ny/allens-pie-llc" title="Visist Allen's Pie Alignable Profile" aria-label="Visist Allen's Pie Alignable Profile" target="_blank" rel="noreferrer">Allen's Pie</a> is an small batch online pie shop based in Harlem. I bake and deliver each product throughout New York City and select surrounding areas.&rdquo;
        </p>,
        issue1org: 'https://snz04pap002files.storage.live.com/y4mHAcD8Cnrmf6H6gg6Yq80f5ZtEAPkCPauyQNDjVhtRKJYfMm5NoGnisT7Qpj2cbc553VgCvdnw9ns5wrerAu8dOYxQA5Wm8UwGIsF-QaVUBfdTbdHFIUXuMTXOlRnfyaBxA5ODGdn0ewDhNd6GsHEooskKeX09Vmb4jFOsu2GBTVLzYEvRgNmktXAko8IqtgL?width=660&height=251&cropmode=none',
        issue1live: 'https://snz04pap002files.storage.live.com/y4mL4_UZG34BL3p8q1j1O92HsP3dGRqctjwAnqDwo6iypLRva7Ccdci9AJfYhinUClN2Gw9h9zIdp9e4QUuDS_PfhzAjnOYE8zn5dTDYbHYsEL_7ViyllTI88S8Ld77ipSdAusCX_Q50-XCNRnnIspBYT6B9a9j8FoQzr2_7Q0-SOy7sH9p82yIduQ3GYhS406H?width=660&height=251&cropmode=none',
        issueimgs1class: 'row allenspie-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Site Architecture',
        issue1note: <div className="issue-content">
                <p className="issue-description">The original landing page includes a link to &ldquo;<em>the story</em>&rdquo; and another link to &ldquo;<em>the pie</em>&rdquo;. The story is the pie and the pie is the story. Basically we have 2 &ldquo;about&rdquo; pages. The menu link opens a product page not a menu. There is no menu, per se. While the cart link stands out, it is positioned where it could easily get lost. The project updates the:</p>
                <ul className="issue-list">
                    <li>pie link by removing it &mdash; since &ldquo;pie&rdquo; is the story &#40;not the only one, but a huge part of the story&#41; it deserves a stand&ndash;out section on the story page</li>
                    <li>the menu link destination was reconfigured &mdash; clicking it will scroll to a menu-isk section &mdash; we call it a &ldquo;testimonial menu&rdquo; &mdash; hovering over the menu link opens a dropdown &#40;same as original&#41; with a list of direct links to all product pages</li>
                    <li>the cart link&#92;indicator has been added to the navbar &mdash; this way it won't get lost and maintains a position of prominence &mdash; makes it real easy for the user to shop</li>
                </ul>
            </div>,
        issue2org: 'https://snz04pap002files.storage.live.com/y4m6VE8KpTVwNxF7R_MND6ZxwY4Bm_U1PPuH-A0gglDnAloBQbYYxWE37ExmxA8iBY3b5SpbRRUrrt5mFGj1oCjWJvtNhYm09eHrPkK1gpvUjndZGY1aBimAF7F48waTS3U9bkYTqekdtxRYdeyAKzr9tL6aCLjioaeXNBYL8KFmVdQQzMNyqaoaNX0yiyShQTF?width=660&height=406&cropmode=none',
        issue2live: 'https://snz04pap002files.storage.live.com/y4mbamTWRRRbrHcPPXxoQgmabtByJKgbHM15m0k0ynBeVbNHJFG4bIj_GO0-eSYuFaZ_QvLYgb77J0OPnUQZ5ouic3uOW9gna3ldkmY_V5N__x8x0FTNud9PaTv7Iuve4ccrGm1urYTxi2cU3uW7F4u3LsuLz6gkki9zrIpxylIoyXJHmFcblBwwM9JWpcKMca0?width=567&height=660&cropmode=none',
        issueimgs2class: 'row allenspie-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Testimonials/Menu',
        issue2note: <div className="issue-content">
                <p className="issue-description">Who needs a menu when you have less then 10 products for sale? Okay 10 may not be the magic number I think it is, but one has to draw the line somewhere. There are about 4&ndash;6 pie fillings. Approximately 2 of these fillings are seasonal. A menu page is overkill. A waste of prime real estate. After all, the purpose of the site is to sell pies. A solution is to pair the product with a testimonial...</p>
                <ul className="issue-list">
                    <li>the sites menu page, if you can find it, is a paged filled with oversized images with barely visible text on top &mdash; the menu link on the home page opens a product page &mdash; a clear case of mislabeling &mdash; the project displays all the products on the landing page as a simple card &mdash; each card links to the specified product page;</li>
                    <li>the testimonials' font-size was decreased &mdash; given a colored background and border &mdash; and paired as a companion of a product it describes or closely describes;</li>
                    <li>the menu link quickly scrolls the page and still provides a handy dropdown with links to individual product pages</li>
                </ul>
                
            </div>,
        issue3org: 'https://snz04pap002files.storage.live.com/y4mfTVUD67dwZfXwzkZdkiFhpJJlX7vNFspgChvoMHtx_0duJtJi0_GcTI_GwsQ7WQPzaVjIZLS0jGsqy6PXe5yREkjHBGmz6DXgOrzZu9ibuQ0slK8fy99phhQOXdu4JTx2U7NRJaZCrHd60cphaZ-jQNSLaqyEjhqQjYOtvHKX3ILLXpdi6AdXzGbjTcc_SC-?width=660&height=403&cropmode=none',
        issue3live: 'https://snz04pap002files.storage.live.com/y4mjTh-14fI7-k2hIurVFr_Cw2eMwoeqfjZFmCJDtmsCLPUq6YICgSnIS2KSoPmHPVFzmtmTXD9IGvWO0pw7nU1wQRNshNhcMXx1rMuInkuoWLIhEwmcSqgnPj8JRbMJ2mBnnzK2WCLA6BKebXk3fqw8uUM0eP2uh6uR4LKBwOwsCbPhEStACjDE9e4ryEQzeDw?width=660&height=408&cropmode=none',
        issueimgs3class: 'row allenspie-imgs3',
        issue3class: 'issue-img issue3-img',
        issue3title: 'Parallax Effect',
        issue3note: <div className="issue-content">
                <p className="issue-description">Thanks to some quality images, the product looks yummy. And then there's an opening parallax that introduces the product. As with much of the landing page, it's oversized and scrolls awkwardly. The project opens with a cleaned up parallax that:</p>
                <ul className="issue-list">
                    <li>doesn't expose the entire image &mdashp; parallax works best when the image is revealed in sections &mdash; we start in the middle &mdash; as the user scrolls the product gets revealed;</li>
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
        imgorg: 'https://snz04pap002files.storage.live.com/y4mHhLK5yvkOeP2tZN-pDHKDdkcf0QV0Xui1z1BPNviHJEUONrodwbt84zEAgecwVWZfrxoyGbQKGy_My-uqle7rOy1t_IaN8T39sMoioIXCZ5xIb7EkwGcjl2NEyhkpv1RlCAIfHMck2_Z_A-eyh3Pq9Z4JPUfdARWuJ_ViCc_ec4oW7HHi1Hvbp24s51boax_?width=379&height=660&cropmode=none',
        imglive: 'https://snz04pap002files.storage.live.com/y4m276radByGpA_UuFwiNzJTCZfJWi5tKsQYs8dcyHZkgJbJQNLTvkV4ZlldwiK5ocHJ24DM4TqgHTNxcdPRJjcN5YGtJ2Vi57yFH2dONgFcO8Xh_UAIKMB7cD2S5Hl7Aw45_XlT6dhdMnQd0kHmF3peIPp2PGMvxTDhVuanR76d8zpc9j7TqxcVAnKnPPCqYSL?width=344&height=660&cropmode=none',
        altorg: ' Perry Associates\'s original home page.',
        altlive: ' Perry Associates\'s live project page.',
        captionorg: 'Original Page',
        captionlive: 'Project Page',
        navtitle: 'A listing search and page update.',
        goals: <p>The focus of this project was controlling user search results. The sites navbar lacked information architecture and the landing page had little accessibility functionality. Just how many clicks does it take to get a hit from the &ldquo;<em>quick search</em>&rdquo;? Lots. Not the most pleasing user experience. Our redesign sought to update the information architecture, simplify the quick search and include a direct link to the listings pages. View the {issueSolution} section of this page for details.</p>,
        persona: <p title="A quote from the site owner." aria-label="A quote from the site owner.">&ldquo;Whether you’re a real estate buyer or seller, renter or developer&mdash;<a href="https://www.alignable.com/harlem-new-york-ny/perry-associates?source=--profile" title="Visist Perry Associates' Alignable Profile" aria-label="Visist Perry Associates' Alignable Profile" target="_blank" rel="noreferrer">Perry Associates</a> is here for you. We understand all the details involved, from property and site selection, negotiation and purchase to ownership, management, long- and short-term rentals—and even interior design.&rdquo;
        </p>,
        issue1org: 'https://snz04pap002files.storage.live.com/y4ml9JQOCRUbc0Ecfv73MnJ_gPcsQtZewW35gMsgBqOh7eP4Q2w8-oOC3aq9gAblwlTuEtSCrPisfJZpXEPoechbnDZerM8mOEKrl9D333XI_0Puj4KWUqpd1QW7x4ydLhcU4HvZIJDqlvQYzOb26eX_nZwIcbiHhjdt0WEY75vTvYDzSvEKqh2NitgMn-Mm3mE?width=610&height=293&cropmode=none',
        issue1live: 'https://snz04pap002files.storage.live.com/y4mmW96v56YfGM1FRQHB8kKooxJ3P1GeyM59yDNToIvLoYKn4Oz8QHnhl2P3aE7_2kw7_R8FSxCyqjxSDhHt3xLmb5dkI-l9gbhdHeXFb5rWb-4FBtzSjaKAzYUT7Dmr_9i0vAGdeu-ODog0lzoxWDkMUcdiAtALWavqugTeFPPtfPyuVnwD4AlpjMZsk6dELdh?width=660&height=440&cropmode=none',
        issueimgs1class: 'row perryassociates-imgs1',
        issue1class: 'issue-img issue1-img',
        issue1title: 'Quick Search',
        issue1note: <div className="issue-content">
                <p className="issue-description">If your agency is a small operation; your property inventory is in the 100s, instead of the thousands. Not controlling how users search your listings will create unnecessary user pain points. Best to let the inventory drive the search. The project controls the search based on inventory and type. The project reduced...</p>
                <ul className="issue-list">
                    <li>the number of form inputs &mdash; 7 inputs does not connote &ldquo;quick&rdquo; &mdash; the project includes 2; &ldquo;location&rdquo; and &ldquo;type&rdquo; &mdash; remember it's all about the location with property</li>
                    <li>user input is controlled via dropdown menus that list locations and types &#40;i.e.; rental, buy&#41; of properties that are in inventory only &mdash; increasing the success of user searches 80% – 90%</li>
                    <li>A search form with 4 inputs was added to the listings page &mdash; users can search via 2 additional inputs &#40;price and/or bedrooms&#41; &mdash; adding these search optoins does increase the chance of a failed search &mdash; however these inputs returns results based on a range &mdash; user search success is approximately 70% - 85%</li>
                </ul>
            </div>,
        issue2org: 'https://snz04pap002files.storage.live.com/y4mZlBJAb3F71sZmnGsnyauBqwpenZ0PLse4O4TFRJ4wVRe5XNmLkWn-J_r1OL5_5HfPaZ4om6WpxHI-p1bJHAoRw2kEXCAf8NkDr3bsSRdMVPL-aQP1yQJst7grBGnEWl6tlyXLg_QBVBL-7_6Gv-U1CTLXJa9LXQu8mOZfG7oVNN6Mgpdl7YgSwgRhuKA67IN?width=660&height=45&cropmode=none',
        issue2live: 'https://snz04pap002files.storage.live.com/y4mh6-QUNnPpAT4aBjYQ-PtRxFYbItUUXaJCHkwS3OC3sVL0JetovxkzcsOCZexnbSCv8cl_U4VNTtj0XBm3tLAc-HbiT0mtHrXJVrMpnQF4yeogpG_Zux_o3DgGZiwvXIEH4PkMZfE1VfDWIMmqzko2_ZXn7BWl4jz7mzwqqf5HK_cF40YbAOJLKGNQTWjkCUh?width=660&height=55&cropmode=none',
        issueimgs2class: 'row perryassociates-imgs2',
        issue2class: 'issue-img issue2-img',
        issue2title: 'Information Architecture',
        issue2note: <div className="issue-content">
                <p className="issue-description">There is no direct link to the most important page on the site – the listings page. Instead, the navbar includes links to property categories (i.e.; residential, commercial). Following the link opens a page with the landing page search form as it's only content. Bascially these links are cluttering up the navbar. It's a symptom of over-scaling. Considering user flow, the project…</p>
                <ul className="issue-list">
                    <li>Trimmed the navbar options to top include only top level pages</li>
                    <li>Add a direct link to the listings page</li>
                    <li>Made the navbar more accessible by giving the links and logo a bit of breathing room and increasing the font-weight and font-size for better visibility</li>
                </ul>
            </div>,
        issue3org: 'https://snz04pap002files.storage.live.com/y4mXlgsyMZR3W2TZd3Vy9_CiAzNOGog0ebIe_Iisgd-QIr3s186KdcHztyG_j5BXGzXSu3jIB6FLUl-Fe87I2KsiDJmLQ5fsfI5uO8patNS_M2pZQZ9g0J7h8SHamGWzHnR8Omh1xsd_aHqmrk_2WysktcbDnUYfJFMYt0o2M1ekog4NcKO0nJb6Vp9ZZ6bc6bw?width=544&height=660&cropmode=none',
        issue3live: 'https://snz04pap002files.storage.live.com/y4mHAnAlmLNI_rBVxJ8b1051yRBAGKnNBHQq2e_vB4tWLU4Y19wSXcy290VXctP8tzzMMKj94p2MK6E9MdQpDV4VeFa5YaJR49An10V9O8hOZYLYvszGyAH0Uf2D_ff-rqmUF7-qP1JOJ5wwnqoePoHEBR83uv78z4r8-sDAIaVhaOnuiEhAh7eouY5fDDjAgBd?width=397&height=660&cropmode=none',
        issueimgs3class: 'row perryassociates-imgs3',
        issue3class: 'issue-img issue3-img',
        issue3title: 'Listing Page',
        issue3note: <div className="issue-content">
                <p className="issue-description">The listings page layout isn’t very user-friendly.  The property cards are laid out horizontally from sided to side and top to bottom. The page is extremely long. Users are giving an option to filter and no option to search listings. The image of the original page shows page close up and as a screen grab &#40;that skinn piece to the left of the first photo&#41; To redefine a listing page search, users have to go back to the home page.  The project…</p>
                <ul className="issue-list">
                    <li>designed the property card in a vertical layout &mdash; displays each property card as in a 3 x 9 grid</li>
                    <li>includes a search form for users to search and/or redefine their search</li>
                    <li>reworded search fail messages to include the users search parameters</li>
                    <li>removed listings filter &mdash; the search form acts as a filter</li>
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