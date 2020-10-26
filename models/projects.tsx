export interface ProjectDisplay {
  id?: String
  title: String,
  description: String,
  image: string,
  imageFull?: string,
  isSiteOn?: boolean,
  link?: string
}

export const projects = [
  {
    id: '2',
    title: 'Italian recipes book',
    description: `This a web design and soon-to-be a fully functional and responsive React application where the 
    family can add, edit, view and share their recipes.`,
    image: 'img/thumbnail-ricette.jpg',
    imageFull: '/img/landing-ricette.jpg',
    chips: ['Web Design', 'Responsive', 'React Development'],
    isSiteOn: false
  },
  {
    id: '1',
    title: 'Chat App website',
    description: `This is a homepage design and build for a concept project – a chat application. I designed the page
    first then built a responsive web page using Webflow.`,
    image: 'img/Thumbnail- chatapp.jpg',
    imageFull: '/img/chatApp.jpg',
    chips: ['Concept', 'Web Design', 'Webflow'],
    link: 'https://superchatapp.webflow.io/',
    isSiteOn: true
  },
]
