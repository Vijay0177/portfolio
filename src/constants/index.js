const navLinks = [
	{
		id: 1,
		name: 'Projects',
		type: 'finder',
	},
	{
		id: 3,
		name: 'Contact',
		type: 'contact',
	},
	{
		id: 4,
		name: 'Resume',
		type: 'resume',
	},
]

const navIcons = [
	{
		id: 1,
		img: '/icons/wifi.svg',
	},
	{
		id: 2,
		img: '/icons/search.svg',
	},
	{
		id: 3,
		img: '/icons/user.svg',
	},
	{
		id: 4,
		img: '/icons/mode.svg',
	},
]

const dockApps = [
	{
		id: "finder",
		name: "Portfolio",
		icon: "finder.png",
		canOpen: true,
	},
	{
		id: "safari",
		name: "Articles",
		icon: "safari.png",
		canOpen: true,
	},
	{
		id: "photos",
		name: "Gallery",
		icon: "photos.png",
		canOpen: true,
	},
	{
		id: "contact",
		name: "Contact",
		icon: "contact.png",
		canOpen: true,
	},
	{
		id: "terminal",
		name: "Skills",
		icon: "terminal.png",
		canOpen: true,
	},
	{
		id: "trash",
		name: "Archive",
		icon: "trash.png",
		canOpen: false,
	},
]

const blogPosts = []

const techStack = [
	{
		category: 'Frontend',
		items: [
			'HTML',
			'React.js',
			'Angular',
			'TypeScript',
		],
	},
	{
		category: 'Mobile',
		items: [
			'Android',
			'Flutter',
		],
	},
	{
		category: 'Styling',
		items: [
			'CSS',
			'Tailwind CSS',
		],
	},
	{
		category: 'Backend',
		items: [
			'PHP',
			'Node.js',
			'Express',
		],
	},
	{
		category: 'Database',
		items: [
			'MySQL',
			'MongoDB',
		],
	},
	{
		category: 'Dev Tools',
		items: [
			'Git',
			'GitHub',
			'GitLab',
			'BitBucket',
		],
	},
]

const socials = [
	{
		id: 1,
		text: 'GitHub',
		icon: '/icons/github.svg',
		bg: '#f4656b',
		link: 'https://github.com/Vijay0177',
	},
	{
		id: 2,
		text: 'LinkedIn',
		icon: '/icons/linkedin.svg',
		bg: '#05b6f6',
		link: 'https://www.linkedin.com/in/vijayrawat-flutter-developer/',
	},
]

const photosLinks = []

const gallery = []

export {
	navLinks,
	navIcons,
	dockApps,
	blogPosts,
	techStack,
	socials,
	photosLinks,
	gallery,
}

const WORK_LOCATION = {
	id: 1,
	type: 'work',
	name: 'Work',
	icon: '/icons/work.svg',
	kind: 'folder',
	children: [
		{
			id: 5,
			name: 'ProgrammerCube',
			icon: '/images/folder.png',
			kind: 'folder',
			position: 'top-10 left-5',
			windowPosition: 'top-[5vh] left-5',
			children: [],
		}
	],
}

const ABOUT_LOCATION = {
	id: 2,
	type: "about",
	name: "About me",
	icon: "/icons/info.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-5",
			imageUrl: "/images/adrian.jpg",
		},
		{
			id: 2,
			name: "casual-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-28 right-72",
			imageUrl: "/images/adrian-2.jpg",
		},
		{
			id: 3,
			name: "conference-me.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-52 left-80",
			imageUrl: "/images/adrian-3.jpeg",
		},
		{
			id: 4,
			name: "about-me.txt",
			icon: "/images/txt.png",
			kind: "file",
			fileType: "txt",
			position: "top-60 left-5",
			subtitle: "Meet the Developer Behind the Code",
			image: "/images/adrian.jpg",
			description: [
				"Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
				"I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
				"I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
				"Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
			],
		},
	],
}

const RESUME_LOCATION = {
	id: 3,
	type: "resume",
	name: "Resume",
	icon: "/icons/file.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Resume.pdf",
			icon: "/images/pdf.png",
			kind: "file",
			fileType: "pdf",
			// you can add `href` if you want to open a hosted resume
			// href: "/your/resume/path.pdf",
		},
	],
}

const TRASH_LOCATION = {
	id: 4,
	type: "trash",
	name: "Trash",
	icon: "/icons/trash.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "trash1.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-10",
			imageUrl: "/images/trash-1.png",
		},
		{
			id: 2,
			name: "trash2.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-40 left-80",
			imageUrl: "/images/trash-2.png",
		},
	],
}

export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	trash: TRASH_LOCATION,
}

const INITIAL_Z_INDEX = 1000

const WINDOW_CONFIG = {
	finder: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	contact: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	resume: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	safari: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	photos: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	terminal: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	textfile: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
	imgfile: {
		isOpen: false,
		zIndex: INITIAL_Z_INDEX,
		data: null,
	},
}

export {
	INITIAL_Z_INDEX,
	WINDOW_CONFIG,
}