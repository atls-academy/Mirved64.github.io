interface TechnologyProps {
  name: string
}

interface WorkspaceProps {
  name: string
}

export const technologiesList: TechnologyProps[] = [
  { name: 'html' },
  { name: 'css' },
  { name: 'sass' },
  { name: 'vanila js' },
  { name: 'jade' },
  { name: 'javacsript' },
]

export const workspaceList: WorkspaceProps[] = [
  { name: 'figma' },
  { name: 'github' },
  { name: 'atom' },
]
