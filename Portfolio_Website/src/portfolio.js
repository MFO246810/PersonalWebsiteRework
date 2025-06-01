const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/MFO246810',
  title: 'OFM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Franklin',
  role: 'Software Enigineer, System Administrator, AI/ML Enigineer',
  description:
    "I am passionate about creating innovative and user-friendly software solutions that make a difference in people's lives. I have a strong background in web development and have experience in building responsive and scalable web applications. I am always looking for new challenges and opportunities to learn and grow as a software developer.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/onyekachukwu-muoghalu-a059aa217/',
    github: 'https://github.com/MFO246810',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'Express.js',
  'Embedding Models',
  'SQL',
  'LLM Integration',
  'React',
  'Git',
  'C#',
  'Razor',
  'RAG Model'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'onyekachukwumuoghalu@gmail.com',
}

export { header, about, projects, skills, contact }
