(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t(0),l=t.n(r),i=t(35),o=t.n(i),s=(t(71),t(72),t(20)),c=t(29),m=t(22),h=t(21),u=t(55),d=t.n(u),p=(t(90),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={msg:n.props.smallMsg,vidUrl:n.props.smallVidUrl},n}return Object(c.a)(t,[{key:"updatetext",value:function(){window.innerWidth<=820?this.setState({msg:this.props.smallMsg}):this.setState({msg:this.props.bigMsg}),window.innerWidth<=500?this.setState({vidUrl:this.props.smallVidUrl}):this.setState({vidUrl:this.props.bigVidUrl})}},{key:"componentDidMount",value:function(){this.updatetext(),window.addEventListener("resize",this.updatetext.bind(this))}},{key:"render",value:function(){return l.a.createElement("div",{className:"splash"},l.a.createElement("div",{className:"splash-overlay"},l.a.createElement("svg",{className:"splash-svg"},l.a.createElement("defs",null,l.a.createElement("mask",{className:"splash-mask",id:"splash-mask",x:"0",y:"0"},l.a.createElement("rect",{className:"splash-background",x:"0",y:"0",height:"100%",width:"100%"}),l.a.createElement("text",{className:"splash-text",x:"50%",y:"10%",dy:"50%"},this.state.msg))),l.a.createElement("rect",{style:{fill:this.props.maskColor},className:"splash-masker",x:"0",y:"0",height:"100%",width:"100%"}))),l.a.createElement("div",{className:"splash-video"},l.a.createElement(d.a,{className:"splash-bg-video",id:"splash-paralax",url:this.state.vidUrl,playing:!0,loop:!0,muted:!0})))}}]),t}(r.Component)),g=(t(91),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"UnsplashPhoto",style:{background:" linear-gradient(to bottom, "+this.props.gradientRGBAfrom+","+this.props.gradientRGBAmid+","+this.props.gradientRGBAto+"),url('"+this.props.imageUrl+"') no-repeat",backgroundSize:"cover"}},this.props.children,l.a.createElement("a",{className:"UnsplashLink",href:this.props.photographerUrl,target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from "+this.props.photographer},l.a.createElement("span",{className:"UnsplashSpan"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},l.a.createElement("title",null,"unsplash-logo"),l.a.createElement("path",{d:"M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"}))),l.a.createElement("span",{className:"UnsplashSpan"},"Photo by ",this.props.photographer)))}}]),t}(r.Component)),E=t(27),b=t(28),f=t(10),y=(t(92),t(24));var v=function(){return l.a.createElement("div",{id:"AboutMe"},l.a.createElement(g,{imageUrl:"https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",photographerUrl:"https://unsplash.com/@24ameer",photographer:"Ameer Basheers",gradientRGBAfrom:"rgba(4,7,25,1)",gradientRGBAmid:"rgba(4,7,25,0.0)",gradientRGBAto:"rgba(2,2,2,0.95)"},"   ",l.a.createElement("div",{className:"AboutMe"}),l.a.createElement(E.a,null,l.a.createElement(b.a,{style:{padding:"0% 0% 10% 0%"}},l.a.createElement(f.a,{xs:12},l.a.createElement("h1",{style:{color:"white",marginTop:"100px"},className:"float-left"},"About Me")),l.a.createElement(f.a,{xs:12,md:3,style:{marginTop:"50px",overflow:"hidden"}},l.a.createElement(y.a,{src:"/AboutMePhotoFixed.jpg",roundedCircle:!0,fluid:!0})),l.a.createElement(f.a,{xs:12,md:8,style:{marginTop:"50px",color:"white",fontSize:"1.9em"}},"Hi, my name is Michael Naguib. I am a college student pursuing a BS in Computer Science and Mathematics. I currently do research in multi-agent artificial intelligence and have experience with GPU accelerated computing."),l.a.createElement(f.a,{style:{marginTop:"50px",color:"white",fontSize:"1.2em"}},l.a.createElement("div",{className:"text-left"},"Often I will code a project simply because it sounds interesting. The solution to a problem is not always nearly as interesting to me as the process needed to compute the solution. Understanding the fundamental logic and intuitive steps of a process for me is one of the more rewarding aspects of my field of study; understanding the rationality of an individual's choices can inform me as to similar manners of thinking for when I attempt to solve a new problem. I try to work smarter not harder, ironically however when you can't work smarter, the smartest move is to work harder, as figuring it out will let you work smarter when you recognize the same issue in the future.",l.a.createElement("br",null),l.a.createElement("br",null),"In my free time I will often take time to read, program, or hangout with friends. My hobbies include  XC Running \ud83c\udfc3, Coding \ud83d\udc68\u200d\ud83d\udcbb, Drone Racing Quadcopters \u2708\ufe0f, & Boldering \ud83e\uddd7 . I am always up for a challenge whether it be abstract or otherwise."))))))},w=t(107),k=t(64),x=t(14);var N=function(){return l.a.createElement(w.a,{className:"sticky-top",sticky:"top",bg:"dark",variant:"dark",style:{top:"0",position:"fixed",width:"100%"}},l.a.createElement(w.a.Brand,null,l.a.createElement(x.HashLink,{className:"nav-link",to:"/"}," \ud83e\udd94")),l.a.createElement(k.a,{className:"mr-auto"},l.a.createElement(x.HashLink,{className:"nav-link",to:"/#AboutMe"}," About Me"),l.a.createElement(x.HashLink,{className:"nav-link",to:"/#Projects"}," Projects"),l.a.createElement(x.HashLink,{className:"nav-link",to:"/#Contact"}," Contact"),l.a.createElement(x.HashLink,{className:"nav-link",to:"/Demos"}," Demos")))},P=t(3),C=t(62),T=t(17),I=t.n(T);var M=function(){return l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement(x.HashLink,{to:"/FallingCubes#FallingCubesTop",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/SlowedFallingCubesCropped.gif"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"Falling Cubes"),l.a.createElement(P.a.Text,null,"Simplicity, Elegance , \ud83d\udd25 GPU's .... are all found in the Rendering Equation! Just some messing around with Blender's Cycles Rendering Engine.")),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated July 2020 "))))};function B(){return l.a.createElement(C.a,{style:{marginTop:"50px",marginBottom:"90px"}},l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/Chaotic-IFS-Fractal",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/Fractal2.png"}),l.a.createElement(P.a.Body,null,l.a.createElement(P.a.Title,null,"Chaotic Iterated Fractals"),l.a.createElement(P.a.Text,null,"Affine Transformation Matrix Based calculation rendered using Datashader")),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/BoidsSimulation",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/BoidsSimGif.gif"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"3k Particle Simulation"),l.a.createElement(P.a.Text,null,l.a.createElement(I.a.Provider,null,"An implementation of Craig Renyolds Boids done in ",l.a.createElement(I.a.Node,{inline:!0,formula:"\\mathcal{O}(n\\log{}n)"})," by fractally subdividing space using a KD-Tree to approximate nearest neighbors."))),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/ChaoticIFSFractal3D",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/3dFractal.gif"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"Chaotic Fractals in 3D"),l.a.createElement(P.a.Text,null,l.a.createElement(I.a.Provider,null,"Derived the equations for 3D variants of 2D fractals and displayed using GPU acelerated Point Cloud viewer."))),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/Genetic-Algorithm",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/exampleGA.gif"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"Genetic Algorithm (on Words)"),l.a.createElement(P.a.Text,null,l.a.createElement(I.a.Provider,null,"Implemented a Genetic based approach for calculating a target phrase..."))),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/MonteCarloPi",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/PiEqn.png"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"Monte Carlo Pi Simulation"),l.a.createElement(P.a.Text,null,l.a.createElement(I.a.Provider,null,"Derived Pi as a result of a monte carlo simulation computed in N-Dimensions so as to produce and estimate of Pi by running repeated simulations and observing convergence of approximations."))),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/Simple-Cryptography",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/tenor.gif"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"Cryptography"),l.a.createElement(P.a.Text,null,"One of my earliest projects where I implemented several encryption algorithms: Vigenere, Hills, Affine & Caesar;  in addition to implementing frequency analysis to automatically break encryption given a corpus of encrypted text.")),l.a.createElement(P.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement("a",{href:"https://github.com/Michael-Naguib/ProjectEuler",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/Euler.jpg"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"Project Euler"),l.a.createElement(P.a.Text,null,"Project Euler a website containing mathematical challenges to solve and implement as you see fit. As I mentioned ... I like to code ... I often find the challenges fun and a great way to learn!")))),l.a.createElement(M,null),l.a.createElement(P.a,{className:"bg-dark text-white",text:"black"},l.a.createElement(x.HashLink,{to:"https://github.com/Michael-Naguib/",className:"ProjectsLink"},l.a.createElement(P.a.Img,{variant:"top",src:"/Octocat.png"}),l.a.createElement(P.a.Body,{bg:"Dark"},l.a.createElement(P.a.Title,null,"And Many More"),l.a.createElement(P.a.Text,null,"Checkout my github! Although all of my code is open source, I cannot release every side project I am working on until it has reached some level of maturity. These are the tip of the iceberg!")))))}var A=function(){return l.a.createElement("div",{className:"Projects",style:{margin:"0px 0px 0px 0px "},id:"Projects"},l.a.createElement(g,{imageUrl:"/jeremy-bishop-uAfZBP-GtiA-unsplash.jpg",photographerUrl:"https://unsplash.com/@jeremybishop",photographer:"Jeremy Bishop",gradientRGBAfrom:"rgba(2,2,4,1)",gradientRGBAmid:"rgba(2,2,4,0.4)",gradientRGBAto:"rgba(2,2,4,1)"},l.a.createElement(E.a,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{xs:12}," ",l.a.createElement("h1",{className:"text-left",style:{color:"White",marginTop:"100px"}}," Projects")),l.a.createElement(f.a,{xs:12},l.a.createElement(B,null))))))};function j(){return l.a.createElement(E.a,null,l.a.createElement(b.a,null,l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("a",{href:"https://www.linkedin.com/in/michael-naguib-969591170/"},l.a.createElement(y.a,{className:"ContactImage",style:{height:"80px"},src:"/LI-Bug.svg.original.svg"}))),l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("a",{href:"mailto:1Michael.Naguib@gmail.com"},l.a.createElement(y.a,{className:"ContactImage",style:{height:"90px"},src:"/iconfinder_gmail_1220367.svg"}))),l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("a",{href:"https://github.com/Michael-Naguib"},l.a.createElement(y.a,{className:"ContactImage",style:{height:"90px"},src:"/Octocat.png"}))),l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("a",{href:"/MichaelNaguibResume5-3-2020.pdf",download:!0},l.a.createElement(y.a,{className:"ContactImage",style:{height:"90px"},src:"/icons8-document.svg"}))),l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("a",{href:"/Michael Naguib.vcf"},l.a.createElement(y.a,{className:"ContactImage",style:{height:"88px"},src:"/business.svg"}))),l.a.createElement(f.a,{xs:6,md:4},l.a.createElement("a",{href:"tel:919-710-9686"},l.a.createElement(y.a,{className:"ContactImage",style:{height:"90px"},src:"/communications.svg"})))))}var L=function(){return l.a.createElement("div",{id:"Contact"},l.a.createElement(g,{imageUrl:"/newman.JPG",photographerUrl:"#",photographer:"My Friend Ryan Dondalski",gradientRGBAfrom:"rgba(0,0,0,1)",gradientRGBAmid:"rgba(0,0,0,0.0)",gradientRGBAto:"rgba(0,0,0,1)"},l.a.createElement(E.a,null,l.a.createElement(b.a,{style:{padding:"0% 0% 10% 0%"}},l.a.createElement(f.a,{xs:12},l.a.createElement("h1",{style:{color:"white",marginTop:"100px"},className:"float-left"}," Contact ")),l.a.createElement(f.a,{xs:12,md:6,style:{color:"white",fontSize:"100%",paddingTop:"100px"}},"Email: 1Michael.Naguib@gmail.com ",l.a.createElement("br",null),"Cell: 919-710-9686"),l.a.createElement(f.a,{className:"text-left",xs:12,md:6,style:{borderRadius:"0.25em",color:"white",paddingTop:"70px"}},l.a.createElement(j,null)))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))};var S=function(){return l.a.createElement("div",{className:"Footer",style:{background:"Black",color:"white"}},"Site Created & Coded by Michael Naguib, Some Icons & Images provided by:",l.a.createElement("a",{className:"ProjectsLink",href:"https://icons8.com"},"Icons8"),",",l.a.createElement("a",{className:"ProjectsLink",href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect"),",",l.a.createElement("a",{className:"ProjectsLink",href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons"))},R=t(65),F=t(108),U=t(105);var D=function(){var e=Object(r.useState)(!0),a=Object(R.a)(e,2),t=a[0],n=a[1];return l.a.createElement("div",{style:{width:"100%",position:"fixed",zIndex:100,bottom:"0"}},l.a.createElement(F.a,{show:t,variant:"success"},l.a.createElement(F.a.Heading,null,"Privacy Notice"),l.a.createElement("p",null,"By Clicking Accept you agree to the cookie and ",l.a.createElement(x.HashLink,{to:"/PrivatePolicy"},"private policy "),"of this site."),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(U.a,{onClick:function(){n(!1),window.policyAccepted=!0,setTimeout((function(){function e(){window.dataLayer.push(arguments)}console.log("Accepted Agreement"),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-165348245-1")}),1),console.log("exitedFunc")},variant:"outline-success"},"Accept"))))};var G=function(){return l.a.createElement("div",{className:"App",id:"AppTop"},window.policyAccepted?void 0:l.a.createElement(D,null),l.a.createElement(N,null),l.a.createElement(p,{smallMsg:"M",bigMsg:"Michael",smallVidUrl:"/me.mp4",bigVidUrl:"/splash-video-3.mp4",maskColor:"rgb(4,7,25)"}),l.a.createElement(v,null),l.a.createElement(A,null),l.a.createElement(L,null),l.a.createElement(S,null))},O=t(4),z=t(63);l.a.Component;var _=function(){return l.a.createElement("div",{className:"ParticleSimulation"},"Cool Code Comming Check back later!")};var W=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Privacy Policy for Michael Naguib"),l.a.createElement("p",null,"At Michael Naguib, accessible from michael-naguib.github.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Michael Naguib and how we use it."),l.a.createElement("p",null,"If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."),l.a.createElement("h2",null,"Log Files"),l.a.createElement("p",null,"Michael Naguib follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."),l.a.createElement("h2",null,"Cookies and Web Beacons"),l.a.createElement("p",null,"Like any other website, Michael Naguib uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."),l.a.createElement("p",null,'For more general information on cookies, please read the "What Are Cookies" article on ',l.a.createElement("a",{href:"https://www.cookieconsent.com/what-are-cookies/"},"Cookie Consent website"),"."),l.a.createElement("h2",null,"Privacy Policies"),l.a.createElement("p",null,"You may consult this list to find the Privacy Policy for each of the advertising partners of Michael Naguib. Our Privacy Policy was created with the help of the ",l.a.createElement("a",{href:"https://www.privacypolicygenerator.org"},"Free Privacy Policy Generator")," and the ",l.a.createElement("a",{href:"https://www.privacypolicyonline.com/privacy-policy-generator/"},"Privacy Policy Generator Online"),"."),l.a.createElement("p",null,"Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Michael Naguib, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."),l.a.createElement("p",null,"Note that Michael Naguib has no access to or control over these cookies that are used by third-party advertisers."),l.a.createElement("h2",null,"Third Party Privacy Policies"),l.a.createElement("p",null,"Michael Naguib's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. "),l.a.createElement("p",null,"You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?"),l.a.createElement("p",null,"Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."),l.a.createElement("p",null,"Michael Naguib does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."),l.a.createElement("h2",null,"Online Privacy Policy Only"),l.a.createElement("p",null,"This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Michael Naguib. This policy is not applicable to any information collected offline or via channels other than this website."),l.a.createElement("h2",null,"Consent"),l.a.createElement("p",null,"By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."),l.a.createElement("p",null," The user agrees to any additional terms that the devloper sets forth for this site"))},H=t(106);t(102);var q=function(e){return l.a.createElement("div",{className:"FallingCubes",id:"FallingCubesTop",style:{backgroundColor:"#464646"}},l.a.createElement(N,null),l.a.createElement(H.a,{style:{backgroundImage:"url(/RPFallingCubes.png)",backgroundSize:"cover",overflow:"hidden",marginBottom:"0px"}},l.a.createElement(E.a,{style:{height:"600px",color:"White"}},l.a.createElement(I.a.Provider,null,l.a.createElement(I.a.Node,{style:{marginTop:"290px"},formula:"\n\\mathit{L_{o}}(\\boldsymbol{x},\\omega _{o},\\lambda,t)\n=\n\\mathit{L_{e}}(\\boldsymbol{x},\\omega _{o},\\lambda,t) \n+\n\\int_{\\Omega }^{}\nf_{r}(\\boldsymbol{x},\\omega _{i},w_{o},\\lambda,t)\n\\mathit{L_{i}}(\\boldsymbol{x},\\omega _{o},\\lambda,t)\n(\\omega \\cdot \\boldsymbol{n})\nd\\omega_{i}\n"})))),l.a.createElement(E.a,{fluid:!0},l.a.createElement(b.a,null,l.a.createElement(f.a,{md:12,style:{padding:"75px",color:"white"}},l.a.createElement("h2",null," Gallery "),l.a.createElement("par",null,"While looking into how I might approach creating a Mandlebulb fractal I came across some software I had previously seen ... but until now I did not realize what I could do with it I had previously just thought it good for viewing .stl files ... I was wrong ... I began expiramenting with some raytraced falling cube animations.")),l.a.createElement(f.a,{lg:4},l.a.createElement(y.a,{src:"/FCubesCropHighRes.gif"})),l.a.createElement(f.a,{lg:8},l.a.createElement(y.a,{style:{height:"350px"},src:"/RLaPinkFallingCubes.png"})),l.a.createElement(f.a,{lg:6},l.a.createElement(y.a,{style:{height:"400px"},src:"/MyFirstCubeRender.png"})),l.a.createElement(f.a,{lg:6},l.a.createElement(y.a,{style:{height:"250px"},src:"/RBlueFallingCubes.png"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(42),V=t(8);o.a.render(l.a.createElement(J.BrowserRouter,null,l.a.createElement(V.g,null,l.a.createElement(V.d,{path:"/FallingCubes",component:q}),l.a.createElement(V.d,{path:"/Demos",component:_}),l.a.createElement(V.d,{path:"/PrivatePolicy",component:W}),l.a.createElement(V.d,Object(n.a)({exact:!0,path:"/",component:G},"exact",!0)),l.a.createElement(V.d,{component:function(){return l.a.createElement("div",null,"ERROR")}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,a,t){e.exports=t(103)},71:function(e,a,t){},72:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.b9349818.chunk.js.map