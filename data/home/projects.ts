export interface IProjectData {
  title: string;
  scope: string;
  tags: string[];
  summary: string;
  srcName: string;
  link: string;
  trackLabel?: string;
}

const projectData: IProjectData[] = [
  {
    title: 'Instapix',
    scope: 'Web App Development',
    tags: ['react', 'tailwindcss', 'firebase', 'cloudinary'],
    summary:
      'Instapix is an unofficial web application build of the famous Instagram by Facebook, providing a full social media experience in the browser.',
    srcName: 'instapix-mock.png',
    link: '/writing/instapix',
  },
  {
    title: 'Life Is Hope',
    scope: 'UX/UI Design. Website Development',
    tags: ['react', 'styled-components', 'javascript', 'nextjs'],
    summary:
      'A donation website for the nonprofit organization Life Is Hope.',
    srcName: 'lih-mock.png',
    link: '/writing/lifeishope',
  },
  {
    title: 'Pontex',
    scope: 'UX/UI Design. Web App Development',
    tags: ['nextjs', 'tailwindcss', 'supabase'],
    summary:
      "Pontex adds comments or reviews to your blog or personal website, impelementing a feedback system into your website.",
    srcName: 'pontex-mock.png',
    link: '/writing/pontex',
  },
];

export default projectData;
