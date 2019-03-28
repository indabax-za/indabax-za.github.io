CATEGORY_TO_ICON = {
    'Research': "ion-ios-book",
    "Foundations": "ion-hammer",
    "Industry/Ethics/Policy": "ion-bowtie",
    "Keynote": "ion-key"
};

INFO = {
    'Prof. Bruce Bassett' :
     { imagePath: './assets/speaker_data/prof._bruce_bassett/image.jpg',
        lectureHeading: 'An AI Play in 3 Parts: Jacuzzis, Research and AGI',
        category: 'Keynote',
        affiliation: 'University of Cape Town',
        abstract: '',
        bio: 'Bruce is currently head of data science at SKA, head of cosmology at AIMS, Professor of mathematics at UCT and an astronomer at SAAO.' 
    },
    'Prof. Tshilidzi Marwala':
     { imagePath: './assets/speaker_data/prof._tshilidzi_marwala/image.jpg',
        lectureHeading: 'On Rationality of Artificial Intelligent Machines',
        category: 'Keynote',
        affiliation: 'University of Johannesburg',
        abstract: 'Rational decision making in its linguistic description means making logical decisions. In essence, a rational agent optimally processes all relevant information to achieve its goal. Rationality has two elements and these are the use of relevant information and the efficient processing of such information. In reality, relevant information is incomplete and imperfect and the processing engine, which is a brain for humans, is suboptimal. Kahneman in his classic book “Thinking fast and slow” observed that humans are risk averse rather than utility maximizers. Furthermore, many optimization procedures at best identify local rather than global optimum solutions. The types of problems that we know if we have identified global solutions are convex problems. In the real world, problems are predominantly non-convex and this makes the idea of rational decision-making fundamentally unachievable, and Herbert Simon called this bounded rationality. This talk explores big questions around rationality and these are: (1) Are AI machines more rational than humans? (2) Is rationality subjective? (3) Is group rational decision-making more rational than individual decision making? (4) Can we measure rationality? On answering these questions, we explore the use of artificial intelligence in engineering, finance, social sciences and medicine.',
        bio: 'Tshilidzi Marwala is the Vice-Chancellor and Principal of the University of Johannesburg beginning on 1st January 2018. From 2013 to 2017 he was the Deputy Vice-Chancellor for Research and Internationalization and from 2009 to 2013 he was the Executive Dean of the Faculty of Engineering and the Built Environment both at the University of Johannesburg.  From 2003 to 2008, he progressively held the positions of Associate Professor, Full Professor, the Carl and Emily Fuchs Chair of Systems and Control Engineering as well as the SARChI Chair of Systems Engineering at the Department of Electrical and Information Engineering at the University of the Witwatersrand. From 2001 to 2003, he was the Executive Assistant to the technical director at South African Breweries. From 2000 to 2001 he was a post-doctoral research associate at the Imperial College (then University of London). He holds a Bachelor of Science in Mechanical Engineering (magna cum laude) from Case Western Reserve University (USA) in 1995, a Master of Mechanical Engineering from the University of Pretoria in 1997 and a PhD specializing in Artificial Intelligence and Engineering from the University of Cambridge in 2000. Marwala completed the Advanced Management Program at Columbia University Businesses School in 2017 and completed a Program for Leadership Development at Harvard Business School in 2007. His research interests are multi-disciplinary and they include the theory and application of artificial intelligence to engineering, computer science, finance, social science and medicine. He has published 12 books in artificial intelligence, one of these has been translated into Chinese, over 300 papers in journals, proceedings, book chapters and magazines and holds four international patents. His writings and opinions have appeared in the magazines New Scientist, The Economist and Time Magazine.' 
    },
    'Dr. Ashley Gritzman':
    { imagePath: './assets/speaker_data/dr._ashley_gritzman/image.jpg',
        lectureHeading: 'Will Capsule Networks Replace CNNs?',
        category: 'Research',
        affiliation: 'IBM',
        abstract: 'Convolutional Neural Networks (CNNs) are the state-of-the-art approach in most computer vision tasks, and work by accumulating sets of features in each layer. CNNs starts off by finding edges, then shapes, then actual objects. However, the spatial relationship information of all these features is lost. Capsule Networks are Geoffrey Hinton’s latest idea, which aim to preserve the spatial relationships within an image, allowing the network to better understand  translation, rotation, and scaling. Capsule Networks have achieved state-of-the-art performance on MNIST, and even beat CNNs by 45% at the task of recognising objects from different viewpoints. But, this approach has not yet been proven on a large-scale dataset like ImageNet. In this talk we will unpack Hinton’s ideas on Capsule Networks and gain an intuitive understanding of how Capsule Networks work.',
        bio: 'Ashley is a research scientist at IBM Research in South Africa, where his primary research interest is deep learning for computer vision. He obtained undergrad degrees in electrical and biomedical engineering, and completed his PhD at Wits University, which focused on image processing algorithms for automatic lip-reading.'
    },
    'Dr. Justine Nasejje':
    { imagePath: './assets/speaker_data/dr._justine_nasejje/image.jpg',
        lectureHeading: 'Using Conditional Inference Forests to Model Time to Event Data',
        category: 'Research',
        affiliation: 'University of the Witwatersrand',
        abstract: 'Random survival forests have been identified as alternative methods to standard survival analysis methods like the Weibull and Cox proportional hazards model. These methods have a good predictive performance in handling survival data. It has also been established that random survival forest models handle covariate interactions naturally. The random survival forest algorithm, however, has been criticised for possible bias when possible split variables have different entropy. They favour covariates with many split-points to those with fewer split-points. In this study, we explore the predictive performance of Conditional inference forest (CIF) which is known to correct the bias for random survival forest models using a simulation study.',
        bio: 'Justine Nasejje is a lecturer in the School of Statistics and Actuarial Science at the University of the Witwatersrand, where she has worked since June 2018. She attained her Doctorate in Statistics from the University of KwaZulu-Natal in April 2018. Her Thesis, which investigated the properties of random survival forests, won her the  prestigious Kambule Dissertation Award in the same year. She is a published DAAD Scholar with special interest in, Time-to-event data analysis, Biostatistics and Machine  learning techniques. She has presented at numerous conferences both locally and internationally. Justine is also a wife and proud mother of seven-month-old twin daughters.'
    },
    'Dr. Nick Bradshaw':
    { imagePath: './assets/speaker_data/dr._nick_bradshaw/image.jpg',
        lectureHeading: 'Community development as an Avenue to Career Growth',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Cortex Logic / MIIA',
        abstract: '',
        bio: "South African based Entrepreneur helping clients understand the value of Artificial Intelligence [AI] powered technologies. 20+ years experience in complex software & digital collaboration tooling sector. Launched Africa's largest business focused AI community [AI Expo Africa] and Africa's first AI & Data Science Magazine [Synapse], helping chart Africa's IR4.0 journey."
    },
    'Dr. Benjamin Rosman':
    { imagePath: './assets/speaker_data/dr._benjamin_rosman/image.jpg',
        lectureHeading: 'Exploiting Structure for Accelerating Reinforcement Learning',
        category: 'Research',
        affiliation: 'University of the Witwatersrand / CSIR',
        abstract: '',
        bio: ''
    },
    'Dr. Terence van Zyl':
    { imagePath: './assets/speaker_data/dr._terence_van_zyl/image.jpg',
        lectureHeading: 'Random Neural Networks',
        category: 'Research',
        affiliation: 'University of the Witwatersrand',
        abstract: '',
        bio: ''
    },
    'Alex Conway':
    { imagePath: './assets/speaker_data/alex_conway/image.jpg',
        lectureHeading: 'Deep Neural Networks for Video Applications',
        category: 'Industry/Ethics/Policy',
        affiliation: 'NumberBoost',
        abstract: "Most CCTV video cameras exist as a sort of time machine for insurance purposes. Deep neural networks make it easy to convert video into data which can then be used to trigger real-time anomaly alerts and optimize complex business processes. Deep learning can also be used in academic research to speed up labeling of video recorded from the point of view of animals wearing go-pros. This talk will present some theory of deep neural networks for video applications as well as academic research and several applied real-world industrial examples.",
        bio: "Alex is the Founder and Head of Data Science at NumberBoost, a startup based in Cape Town that builds custom A.I. solutions focused on real-time computer vision using deep learning, edge computing and privacy-preserving federated machine learning. NumberBoost has won startup competitions with MultiChoice, Mercedes-Benz, Lloyd's Register in London and NTT Data Japan. He organizes the Cape Town Machine Learning and Deep Learning Meetup groups."
    },
    'Dr. Ndivhuwo Makondo':
    { imagePath: './assets/speaker_data/ndivhuwo_makondo/image.jpg',
        lectureHeading: 'Machine Learning for Robot Control',
        category: 'Research',
        affiliation: 'IBM',
        abstract: 'Machine learning approaches have recently been adopted for robot behavior modeling and control, where robot skills are acquired and adapted from data generated by the robot while interacting with its environment through a trial-and-error process. This talk will provide an overview of work done in machine learning for low-level robot control tasks, such as learning inverse dynamics and kinematics models for robot control. It will then highlight challenges faced in this domain and discuss potential solutions in the literature.',
        bio: 'Ndivhuwo Makondo is a Research Scientist in Machine Learning at IBM Research | Africa, in the South Africa Lab; and a Visiting Lecturer at the School of Computer Science and Applied Mathematics at the University of the Witwatersrand in Johannesburg, South Africa. He holds a BSc and an MSc in Electical Engineering from the University of Cape Town, South Africa; and a PhD in Computational Intelligence and Systems Science from the Tokyo Institute of Technology, Japan. He began his career on a Masters Studentship at the Council for Scientific and Industrial Research (CSIR) in 2011, South Africa, in the Mobile Intelligent Autonomous Systems (MIAS) group, where he conducted research on stability analysis and path planning for a mobile manipulator as part of the Mining Safety Platform project. He then enrolled for a PhD at the Tokyo Institute of Technology in 2013, conducting research in Machine Learning and Robotics, where investigated the acceleration of robot learning of motor skills with knowledge transfer. Prior to joining IBM Research in 2019, he was research lead of mobile manipulation at CSIR MIAS for a year, where he led a team investigating the deployment of robot manipulators in unstructured and dynamic environments.'
    },
    'Sebastian Bodenstein and Taliesin Beynon':
    { imagePath: './assets/speaker_data/sebastian_bodenstein_and_taliesin_beynon/image.jpg',
        lectureHeading: 'Deep Learning vs The Brain',
        category: 'Research',
        affiliation: 'Wolfram Research',
        abstract: 'In this talk, Sebastian and Taliesin, core developers of the Wolfram Mathematica Deep Learning framework, will be presenting existing work from neuroscientists and machine learning researchers that attempt to reconcile the mechanism of backpropogation used in Deep Learning with what is known about circuits in the brain.',
        bio: 'Sebastian Bodenstein and Taliesin Beynon were architects of the deep learning framework that has been part of the Wolfram Language since Mathematica 11, as well as the Neural Network repository that gives free and easy access to dozens of pre-trained neural networks across many domains.'
    },
    'Dr. Emli-Mari Nel':
    { imagePath: './assets/speaker_data/emli-mari_nel/image.jpg',
        lectureHeading: 'Ticker: An Adaptive Single-Switch Text Entry Method for Visually Impaired Users',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Empiric Capital',
        abstract: '',
        bio: ''
    },
    'Wiebke Toussaint':
    { imagePath: './assets/speaker_data/wiebke-toussaint/image.jpg',
        lectureHeading: 'Unsupervised Machine Learning 101',
        category: 'Foundations',
        affiliation: 'Centre for Artificial Intelligence Research',
        abstract: 'The goal of unsupervised machine learning is to discover structure in data in the absence of training labels. It can be used to estimate the distribution of data in the input space, to reduce high dimensional data to lower dimensions for the purpose of visualisation or to discover groups of similar observations in the data. This talk is an introduction to unsupervised machine learning.',
        bio: ''
    },
    'James Allingham':
    { imagePath: './assets/speaker_data/james_allingham/image.jpg',
        lectureHeading: 'Missing Data Imputation (ML in Practice)',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Wolfram Research',
        abstract: 'In the real world datasets are often messy – it is common for values to be missing or corrupt. Examples include empty cells in spreadsheets, unanswered survey questions, or readings from faulty sensors. Unfortunately, despite the frequent occurrence of such defects, software engineers tend not to develop algorithms that are robust to missing values. As a result, many common algorithms fail on such datasets. This talk will briefly discuss the theory of missing data and discuss practical appraoches for dealing with missingness in real-world machine learning.',
        bio: "James is a consultant for Wolfram Research, developing the Mathematica Deep Learning framework. Prior to this James completed a master's in computer science focusing on machine learning. James's dissertation investigated automatic and unsupervised approaches to missing data imputation."
    },
    'Dr. Christopher Cleghorn':
    { imagePath: './assets/speaker_data/dr._chris_cleghorn/image.jpg',
        lectureHeading: 'Black-Box Optimization and its Role in Machine Learning',
        category: 'Research',
        affiliation: 'University of Pretoria',
        abstract: '',
        bio: "Christopher Cleghorn received his Masters and PhD degrees in Computer Science from the University of Pretoria, South Africa. He is a senior lecturer in Computer Science at the University of Pretoria, and the leader of the Computational Intelligence Research Group. His research interests include machine learning, swarm intelligence, and evolutionary computation, with a strong focus of theoretical research. Dr Cleghorn annually serves as a reviewer for numerous international journals and conferences in domains ranging from swarm intelligence and neural networks to mathematical optimization."
    },
    'Stuart Reid':
    { imagePath: './assets/speaker_data/stuart_reid/image.jpg',
        lectureHeading: 'The Temporal Turing Test: Sampling Real-Valued Multivariate Time Series from Deep Generative Models',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Aerobotics',
        abstract: "The ability to synthesize realistic, real-valued, multivariate time series with complex correlation and auto-correlation structures is an important goal. With better methods available to them, medical practitioners could be trained to better respond to rare events that occur in EEG and ECG data including fits, seizures, asthma attacks, and heart arrhythmias; engineers could simulate complex manufacturing processes to identify inefficiencies early on; and risk managers could stress asset and liability models more realistically using fewer assumptions, therefore, leading to fewer insolvencies. In this talk, I will discuss various parametric, non-parametric and generative machine learning techniques for synthesizing realistic, real-values, multivariate time series.",
        bio: "Stuart is the Head of Data Science at Aerobotics, a startup which uses deep learning to extract insights from drone and satellite imagery of tree crops. Prior to that, he spent 7 years in the finance industry working as a Quantitative Analyst. He holds an Honours Degree in Computer Science from the University of Pretoria and is currently working towards a Masters in Applied Mathematics through Stellenbosch University."
    },
    'Pelonomi Moiloa':
    { imagePath: './assets/speaker_data/pelonomi_moiloa/image.jpg',
        lectureHeading: 'Protecting machines from us - ethics and bias',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Tohoku University, Japan / Nedbank',
        abstract: "The possibilities of machine learning and neural networks in particular are ever expanding. With increased opportunities to do good however there are just as many opportunities to do harm and even in the case that good intentions are at the helm, evidence suggests that opportunities for good may eventually prove to be the opposite. The greatest threat to what machine learning is able to achieve and to us as humans is twofold: Machine learning created with harmful biases built into its core with intent, and machine learning that does not reflect the diversity of the users it is meant to serve. It is important that we are not so pre-occupied with advancing technology into the future that we have not taken the time to invest the energy into engineering the security measures this future requires. It is important to investigate now, as thoroughly as we investigate differing deep neural network architectures, the complex questions regarding the fact that humans are inherently biased and loaded with prejudice and that these traits find themselves in the machines we create (and increasingly allow to run our lives) unless we take active steps to ensure they do not.",
        bio: "Pelonomi is a recent Biomedical Engineering Masters Graduate with a specialisation in neural networks for neural cell video segmentation now serving as a Junior Data Scientist at Nedbank. She is also a tree hugger."
    },
    'Jade Abbott':
    { imagePath: './assets/speaker_data/jade_abbott/image.jpg',
        lectureHeading: 'Machine Learning in Real Life',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Retro Rabbit',
        abstract: "Thanks to the openness of the machine learning community, anyone with a serious interest in machine learning these days, can get up a model to recognise characters or generate Trump-like tweets in a couple of hours. But what happens when we need to train a model to do a customer facing task, that we trust enough to deploy to a production system? And how do we get that model into production and maintain it  once it is there? My talk aims to share some of the struggles, trade-offs and strategies from the trenches of training and building the infrastructure for a complex deep  learning model for production use.",
        bio: "Jade Abbott is a Machine Learning engineer at Retro Rabbit. She's built software for every field from social upliftment to banking, working on projects throughout Africa and considers herself a polyglot. Her current project involves training and deploying deep learning system to perform a variety of NLP tasks for real life systems - from training the models, to scaling them in production. In her free time, she does ML research on Machine Translation for African languages."
    },
    'Jan Krynauw and Zander Lee':
    { imagePath: './assets/speaker_data/jan_krynauw_and_zander_lee/image.jpg',
        lectureHeading: 'Humans in the loop - New ways of working a deep learning world',
        category: 'Industry/Ethics/Policy',
        affiliation: 'alis_',
        abstract: "",
        bio: "Jan Krynauw is the Chief Executive Officer of alis_ (an ai driven investment manager) and a director of Rezco Asset Management (~ USD 500M AUM). Prior to alis_, Jan co-led the investment consulting team at Old Mutual (at the time the largest investment consultancy in South Africa with a client base of USD 10B). Under Jan’s leadership the team was recognized with the prestigious group-wide ‘Innovation Award’. In his spare time Jan is an avid pianist and enjoys building Lego robotics with two sons. Jan is a qualified Actuary with 14 years industry experience and has a B.Sc Honours from University of Stellenbosch in Actuarial Science with a Computer Science overlay.<br><br>Zander obtained a Masters (cum laude) in Theoretical Physics from Stellenbosch University, specializing in particle physics. Before joining alis_ as a machine learning engineer, Zander worked as a web developer at Jini Guru and then as a data scientist at BCX Insights. In his spare time he enjoys video games, board games and reading."
    },
    'Dr. Jonathan Shock':
    { imagePath: './assets/speaker_data/jonathan_shock/image.jpg',
        lectureHeading: 'A guided tour through the landscape of reinforcement learning',
        category: 'Foundations',
        affiliation: 'University of Cape Town',
        abstract: "We will look at the fundamental ideas of reinforcement learning, from the underlying mathematics to the basic principles of a reinforcement learning system. We will look at some of the ways that RL has been used to solve interesting problems, as well as where the basic ideas break down and how we can overcome these hurdles. This will be a very theoretical tour, but links to code will be made available.",
        bio: "Originally from the UK, Dr Jonathan Shock completed his PhD in string theory at the university of Southampton. Since then he has completed postdoctoral positions in Beijing, Santiago de Compostela and Munich before becoming a lecturer at the University of Cape Town. While his background is in theoretical physics, he also publishes on neuroscience and runs a reinforcement learning discussion group at UCT."
    },
    'Kerryn Gammie':
    { imagePath: './assets/speaker_data/kerryn_gammie/image.jpg',
        lectureHeading: 'Animated Intro to Machine Learning',
        category: 'Foundations',
        affiliation: 'Absa (Home Loans)',
        abstract: "An animated introduction to Machine Learning covering supervised (classification and regression techniques) and unsupervised learning (clustering). I’ll also briefly discuss what ML looks like in corporate, as well as resources/tips/tricks.",
        bio: "Keen learner and unlearner who spends a lot of time thinking about the intersection between AI and society; specifically how the former can change the latter."
    },
    'Dr. Richard Klein':
    { imagePath: './assets/speaker_data/richard_klein/image.jpg',
        lectureHeading: 'Introduction to Deep Learning',
        category: 'Foundations',
        affiliation: 'University of the Witwatersrand',
        abstract: "",
        bio: ""
    },
    'Dr. Quentin Williams':
    { imagePath: './assets/speaker_data/quentin_williams/image.jpg',
        lectureHeading: 'AI + humans in business: Progeny or Friendship',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Deloitte',
        abstract: "As AI is increasingly replacing humans for tasks both in business processes and business innovation; a new community/partnership is being formed where humans and AI is being used collaboratively and interchangeably to perform jobs and functions. The talk by Dr Williams will focus on what is required from researchers and business operatives to first understand what the relationship between AI and humans mean for business and secondly how AI can be used proactively for operational efficiency; market effectiveness and innovation. AI therefore moves beyond the world of algorithms and code; becomes much more than just a tool incorporated into a platform; but an essential partner in all business strategy and processes",
        bio: "Dr Quentin Williams completed his Phd in Engineering in 2005 from the University of Oxford, focusing on Medical Image Processing and Pattern Recognition. The research involved an extensive patient study of the techniques at the John Radcliffe Research Hospital in Oxford. Dr Williams started working at the CSIR in March 2006. He was involved in setting up a research team and focus for the Meraka Institute’s 'Intelligent Environment for Independent Living' group. Here his work concentrated on using machine intelligence techniques in technologies that aid persons with disabilities and using cognitive algorithms to analyse clinical data and develop computational techniques that will assist medical doctors. He established the World Wide Web Consortium (W3C) Southern African office and the Data Science for Impact and Decision Enablement (DSIDE) programme through which over 200 students have been trained in AI and data analytics. He is currently an Associate Director at Deloitte Analytics focussing on AI fueled organisations."
    },
    'Nick Pentreath':
    { imagePath: './assets/speaker_data/nick_pentreath/image.jpg',
        lectureHeading: 'The IBM Developer Model Asset Exchange - Deep Learning for Everyone',
        category: 'Industry/Ethics/Policy',
        affiliation: 'IBM',
        abstract: "The common perception of applying deep learning is that you take an open source or research algorithm, train it on raw data, and deploy the resulting model. The reality is far more complex. <br> <br> For the training phase, users face an array of challenges including handling varied deep learning frameworks, hardware requirements and configurations, not to mention code quality, consistency, and packaging. For the deployment phase, they face another set of challenges, ranging from custom requirements for data pre- and post-processing, to inconsistencies across frameworks, to lack of standardization in serving APIs. <br> <br> The goal of the IBM Developer Model Asset Exchange (MAX) is to remove these barriers to entry for developers to obtain, train, and deploy open source deep learning models for their business applications. In building the exchange, we encountered all these challenges and more. <br> <br> For the training phase, MAX uses the Fabric for Deep Learning (FfDL), an open source project providing framework-independent training of deep learning models on Kubernetes. For the deployment phase, MAX provides standardized container-based, fully self-contained model artefacts, using Python web and DL frameworks and encompassing the end-to-end deep learning predictive pipeline. <br> <br> This talk introduces MAX, walks through the process of building MAX and shares the challenges and problems encountered, the solutions developed, and the lessons learned. The talk will also include live demos showing how to use MAX to deploy deep learning models in seconds and incorporate them into real-world applications.",
        bio: ""
    },
    'Dario Fanucchi':
    { imagePath: './assets/speaker_data/dario_fanucchi/image.jpg',
        lectureHeading: 'A tour of Machine Learning in the African business context: 5 years of awesome ideas, dramatic flops and big wins',
        category: 'Industry/Ethics/Policy',
        affiliation: 'Isazi Consulting / Envisionit Deep AI',
        abstract: "In 2012, machine learning was not an easy technology to sell to clients in Africa. In this talk I'll discuss some of the challenges I faced in building a profitable business over 5 years whose core competency is machine learning, data science and optimisation. Along the way we'll meet some interesting business problems, a few fancy algorithms, and some wild shots. We'll look at the ingredients of successful problem solving in business, and how new algorithms are changing the way business is done. We'll also take a glimpse at what the future holds for AI in Africa, and where there might be big opportunities to make a real, sustainable difference.",
        bio: "Dario Fanucchi is a South African entrepreneur and technologist with a passion for algorithm design and machine learning. He is interested in the transformative potential of data in the third world and his goal is to solve Africa's most challenging problems by getting creative with modern technology, AI and optimisation. Dario co-founded Isazi Consulting in 2012, and has helped grow the company to one of the most respected data science houses in Africa. He is also the co-founder and CTO of Envisionit Deep AI, which was founded in 2019 to deliver high quality, affordable AI driven radiology to children in Africa."
    },
    'Dr. Willie Brink':
    { imagePath: './assets/speaker_data/willie_brink/image.jpg',
        lectureHeading: 'Visual-semantic embeddings: an introduction and applications',
        category: 'Research',
        affiliation: 'University of Stellenbosch',
        abstract: "This talk will introduce the concept of visual-semantic embedding, as a means to combine the powers of Computer Vision and Natural Language Processing, and discuss a few of its applications such as zero- or few-shot image classification, fine-grained classification, visual relation prediction, image captioning, and visual grounding of natural language.",
        bio: "Willie is a senior lecturer in Applied Mathematics at Stellenbosch University. He works on representation learning and reasoning in Computer Vision, and visual-semantic embeddings. He is a co-founder of the Deep Learning Indaba movement, and passionate about growing Machine Learning and AI research excellence in Africa."
    },
};

PANEL = [

];

KEYNOTE = "";

ORGANIZERS = {
    'Maria Schuld':
    {
        imagePath: './assets/organiser_data/maria_schuld/image.jpg'
    },
    'Steve James':
    {
        imagePath: './assets/organiser_data/steve_james/image.jpg',
        linkInfoPath: './assets/organiser_data/steve_james/link.txt',
        link: 'https://sdjames.me/'
    },
    'Christopher Currin':
    {
        imagePath: './assets/organiser_data/christopher_currin/image.jpg',
        linkInfoPath: './assets/organiser_data/christopher_currin/link.txt',
        link: 'https://github.com/chris-currin'
    },
    'James Allingham':
    {
        imagePath: './assets/organiser_data/james_allingham/image.jpg',
        linkInfoPath: './assets/organiser_data/james_allingham/link.txt',
        link: 'https://jamesallingham.co.za/'
    },
    'Sicelukwanda Zwane':
    {
        imagePath: './assets/organiser_data/sicelukwanda_zwane/image.jpg',
        linkInfoPath: './assets/organiser_data/sicelukwanda_zwane/link.txt',
        link: 'https://www.linkedin.com/in/sicelukwanda-zwane-54873398'
    },
    'Amira Abbas':
    {
        imagePath: './assets/organiser_data/amira_abbas/image.jpg',
        linkInfoPath: './assets/organiser_data/amira_abbas/link.txt',
        link: 'https://www.linkedin.com/in/amira-abbas/'
    },
    'Sasha Naidoo':
    {
        imagePath: './assets/organiser_data/sasha_naidoo/image.jpg'
    },
    'Alex Conway':
    {
        imagePath: './assets/organiser_data/alex_conway/image.jpg',
        linkInfoPath: './assets/organiser_data/alex_conway/link.txt',
        link: 'https://www.linkedin.com/in/alex-conway-042666105/'
    },
    'Annika Brundyn':
    {
        imagePath: './assets/organiser_data/annika_brundyn/image.jpg',
        linkInfoPath: './assets/organiser_data/annika_brundyn/link.txt',
        link: 'https://www.linkedin.com/in/annika-brundyn-930898103/'
    },
    'Andrew Paskaramoorthy':
    {
        imagePath: './assets/organiser_data/andrew_paskaramoorthy/image.jpg'
    },
    // 'Elan Van Biljon':
    // {
    //     imagePath: './assets/organiser_data/elan_van_biljon/image.jpg',
    //     linkInfoPath: './assets/organiser_data/elan_van_biljon/link.txt',
    //     link: 'https://elanvb.github.io/CV/'
    // }
};

SPONSORS = [
    [ './assets/images/sponsors/deeplearningindaba_com.png',
        'http://www.deeplearningindaba.com', 'Deep Learning Indaba'],
    [ './assets/images/sponsors/ukzn_ac_za.png',
        'http://www.ukzn.ac.za', 'University of Kwazulu-Natal' ],
    [ './assets/images/sponsors/nrf_ac_za.png',
        'http://www.nrf.ac.za', 'National Research Foundation' ],
    [ './assets/images/sponsors/wits_ac_za_coe-mass.png',
        'http://www.wits.ac.za/coe-mass', 'CoE-MaSS' ],
    [ './assets/images/sponsors/stanlib_com.png',
    'https://knowledgecentre.stanlib.com/', 'STANLIB' ]
    [ './assets/images/sponsors/alis_fund.png',
    'https://alis.fund/', 'alis_' ]
];
/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).load(function(){
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

    if(top>10){
        $('#site-nav').addClass('navbar-solid');
    } else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*
 * SmoothScroll
 */

smoothScroll.init();

/*
 * Add Speakers to html
 */

function populateSpeakerInfo(info) {
    var count = 0;
    var $row_div;

    // add info to speakers section
    keynotes = shuffle(['Prof. Bruce Bassett', 'Prof. Tshilidzi Marwala']);
    speakers = shuffle(Object.keys(info));

    speakers = speakers.filter(function(item) { 
        return keynotes.indexOf(item) < 0
    });
    for(keynote of keynotes){
        speakers.unshift(keynote);
    }

    for(speaker of speakers) {
        if(info[speaker].imagePath == null || speaker.toUpperCase() == "MORE SPEAKERS TBC") {
          continue;
        }

        var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");

        if(count % 3 == 0) {
            $row_div = $("<div />").addClass("row");
        }
        count++;

        $row_div.append(
            $("<div />").addClass("col-md-4")
            .append(
                $("<div />").addClass("speaker")
                .append(
                    $("<figure />")
                    .append(
                        $("<a />").attr({
                            "data-target": ("#myModal" + id),
                            "data-toggle": "modal"
                        })
                        .append(
                            $("<img />").attr(info[speaker].bio||info[speaker].abstract?
                                {
                                  "src": info[speaker].imagePath,
                                  "data-toggle": "tooltip",
                                  "title": "click me!"
                                }
                                :{"src": info[speaker].imagePath})
                        ) // append to a
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-9 col-xs-push-1")
                        .append(
                            $("<h4 />").text(speaker)
                        ) // heading div
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-1")
                        .append(
                            $("<a />")
                            .append(
                                $("<i />").addClass(
                                    CATEGORY_TO_ICON[info[speaker].category]
                                ).attr({
                                    "data-toggle": "tooltip",
                                    "title": info[speaker].category
                                })
                            ) // append to a
                        ) // append to list
                    ) // append to figure
                    .append(
                        $("<div />").addClass("col-xs-12")
                        .append(
                            $("<h5 />").text(info[speaker].affiliation)
                        ) // paragraph div
                        .append(
                            $("<p />").text(info[speaker].lectureHeading)
                        ) // paragraph div
                    ) // append to figure
                    .append(
                        info[speaker].bio||info[speaker].abstract?(
                        $("<div />").addClass("modal fade").attr({
                            "tabindex": "-1",
                            "id": ("myModal" + id),
                            "role": "dialog",
                            "aria-hidden": "true",
                            "aria-labelledby": "myModalLabel"
                        })
                        .append(
                            $("<div />").addClass("modal-dialog")
                            .append(
                                $("<div />").addClass("modal-content")
                                .append(
                                    $("<div />").addClass("modal-header")
                                    .append(
                                        $("<button />").addClass("close").attr({
                                            "aria-hidden": "true",
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("x")
                                    ) // append to modal header
                                    .append(
                                        $("<h3 />").attr({
                                            "id": "myModalLabel"
                                        })
                                        .text(speaker)
                                    ) // append to modal header
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-body")
                                    .append(
                                        $("<h4 />")
                                        .text(info[speaker].speaker || "")
                                    ) // append to modal body
                                    .append(
                                      (
                                        info[speaker].vidLink?
                                        $("<iframe />").attr({
                                            "src": info[speaker].vidLink,
                                            "frameborder": "0",
                                            "allow": "autoplay;encrypted-media",
                                            "allowfullscreen": true
                                        }).css({
                                            "width": "100%",
                                            "height": "300"
                                        })
                                        :""
                                      )
                                    )
                                    .append( 
                                        $("<h3 />").text(info[speaker].bio?"Short Bio":"")
                                    )
                                    .append(
                                        info[speaker].bio
                                    )
                                    .append( 
                                        $("<h3 />").text(info[speaker].abstract?"Talk Abstract":"")
                                    )
                                    .append(
                                        info[speaker].abstract
                                    )
                                ) // append to modal content
                                .append(
                                    $("<div />").addClass("modal-footer")
                                    .append(
                                        $("<button />").addClass("btn btn-primary").attr({
                                            "type": "button",
                                            "data-dismiss": "modal"
                                        })
                                        .text("Close")
                                    ) // append to modal footer
                                ) // append to modal content
                            ) // append to modal dialog
                        ) // append to modal div
                        ):("")
                    ) // append to figure
                ) // append to speaker div
            ) // append to col div
        );

        if(count % 3 == 2) {
            $("#speakers div.container").append($row_div);
        }


    }

    $("#speakers div.container").append($row_div);
}

function populateSponsors(sponsors) {
    var $row_div;
    var count = 0;
    var $logosDiv = $("#sponsors div.container div.logos");

    for(i in sponsors) {
        var sponsor = sponsors[i];

        if(count % 4 == 0) {
            $row_div = $("<div />").addClass("row");
        }

        $row_div.append(
            $("<div />").addClass("col-sm-3")
            .append(
                $("<a />").attr({
                    "href":sponsor[1],
                    "target": "_blank"})
                    .append(
                        $("<h4 />")
                        .text(sponsor[2])
                    )
            )
            .append(
                $("<a />").attr({
                    "href":sponsor[1],
                    "target": "_blank"})
                .append(
                    $("<img />").attr({
                        "src": sponsor[0],
                        "width": "80%",
                        "top": "50%"
                    })
                )
            )
        );

        if(count % 4 == 3) {
            $logosDiv.append($row_div);
        }
        count++;
    }

    $logosDiv.append($row_div);

    // console.log($logosDiv.html().toString());
}

// add case insensitive contains
$.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});

function populatePanelSpeakers(panel, info) {
  $scheduleSection = $(".schedule .tab-content");

  for(i in panel) {
    var speaker = panel[i];
    var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");


    $scheduleSlot = $scheduleSection.find("div.row.panel-speakers");
    $slot = $("<div />").addClass("col-xs-2").css({
      "height": "7.5em"
    })
    .append(
        $("<div />").addClass("text-center")
        .append(
            $("<img />").addClass("schedule-slot-speakers").attr({
                "src": info[speaker].imagePath
            }).css({
                "position": "absolute",
                "right": "50%",
                "transform": "translateX(+50%)"
            })
        )
    )
    .append(
        $("<div />").addClass("text-center")
        .append(
            $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker).css({
                "position": "absolute",
                "top": "70%",
                "transform": "translateY(-100%)",
                "right": "50%",
                "transform": "translateX(+50%)",
                "width": "100%"
            })
        )
    );

    $scheduleSlot.append($slot);
    $scheduleSlot = $slot;

    $scheduleSlot.attr({
        "data-target": ("#myModal" + id),
        "data-toggle": "modal"
    });

    $scheduleSlot.mouseenter(function() {
        $(this).css({
            "cursor": "pointer",
            "-webkit-transform": "scale(1.2)",
                "-ms-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    }).mouseleave(function() {
        $(this).css({
            "cursor": "default",
            "-webkit-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                    "transform": "scale(1)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    });
  }
}

function populateKeyNote(keynote, info) {
    var speaker = keynote;
    var id = "-" + speaker.toLowerCase().replace(".", "").split(" ").join("-");

    var $scheduleSection = $(".schedule .tab-content");
    var $keynoteSlot = $scheduleSection.find("div.keynote");
    var $heading = $keynoteSlot.find("h3.schedule-slot-title:containsi('" + info[speaker].lectureHeading + "')");
    var $headingDiv = $("<div />").addClass("col-xs-9");

    var $newDiv = $heading.wrap($headingDiv);
    $newDiv.append(
        $("<h4 />").addClass("schedule-slot-speaker-name").text(speaker)
    );

    $keynoteSlot.prepend(
        $("<div />").addClass("col-xs-3")
        .append(
            $("<a />")
            .append(
                $("<img />").addClass("schedule-slot-speakers").attr({
                    "src": info[speaker].imagePath
                })
            )
        )
    );

    $keynoteSlot.attr({
        "data-target": ("#myModal" + id),
        "data-toggle": "modal"
    });

    $keynoteSlot.mouseenter(function() {
        $(this).css({
            "cursor": "pointer",
            "-webkit-transform": "scale(1.2)",
                "-ms-transform": "scale(1.2)",
                    "transform": "scale(1.2)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    }).mouseleave(function() {
        $(this).css({
            "cursor": "default",
            "-webkit-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                    "transform": "scale(1)",
            "-webkit-transition": "all 0.3s",
            "-moz-transition": "all 0.3s",
            "-o-transition": "all 0.3s",
            "transition": "all 0.3s"
        })
    });
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function populateOrganizers(organizers) {
  var $row_div = $("<div />").addClass("row");
  var count = 1;

  for(speaker of shuffle(Object.keys(organizers))) {
    $organizerSection = $(".about .container");

    $slot = $("<div />").addClass("col-xs-4")
    .append(
      $("<div />").addClass("speaker").addClass("organizer")
      .append(
        $("<figure />")
        .append(
          $("<a />").attr({
            "href": organizers[speaker].link,
            "target": "_blank"
          })
          .append(
            $("<img />").attr({
              "src": organizers[speaker].imagePath
            })
            .attr(
              (
                organizers[speaker].link?
                {
                  "data-toggle": "tooltip",
                  "title": "click me!"
                }
                :{}
              )
            )
          ) // append to a
        ) // append to figure
        .append(
          $("<div />")
          .addClass("col-xs-12")
          .append(
              $("<h4 />").text(speaker)
          ) // heading div
        ) // append to figure
      )
    );

    $row_div.append($slot);

    if(count % 3 == 0) {
        $organizerSection.append($row_div);
        $row_div = $("<div />").addClass("row");
    }
    count++;

  }

  $organizerSection.append($row_div);

}

// populateSponsors(SPONSORS);
populateSpeakerInfo(INFO);
// populatePanelSpeakers(PANEL, INFO);
// populateKeyNote(KEYNOTE, INFO);
populateOrganizers(ORGANIZERS);
