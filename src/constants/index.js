const navLinks = [
	{
		id: 1,
		name: 'Portfolio',
		type: 'finder',
	},
	{
		id: 2,
		name: 'Contact',
		type: 'contact',
	},
	{
		id: 3,
		name: 'Projects',
		type: 'projects',
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

const socials = []

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
	txtfile: {
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