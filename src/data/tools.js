export const categories = [
  { id: 'image', label: 'Image', color: '#E8734A', icon: '🖼️' },
  { id: 'texte', label: 'Texte', color: '#4A7BA8', icon: '📝' },
  { id: 'video', label: 'Vidéo', color: '#3D9A6B', icon: '🎬' },
  { id: 'audio', label: 'Audio', color: '#C458A8', icon: '🎵' },
  { id: 'code', label: 'Code', color: '#5B8FBF', icon: '💻' },
  { id: 'data', label: 'Data', color: '#4BAF7A', icon: '📊' },
];

export const recommendedTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Assistant conversationnel polyvalent',
    rating: 4.8,
    avatar: 'C',
    avatarColor: '#4A7BA8',
    tags: [
      { label: 'Texte', color: '#4A7BA8' },
      { label: 'Premium', color: '#C9A84C' },
    ],
  },
  {
    id: 2,
    name: 'Midjourney',
    description: "Génération d'images haute qualité",
    rating: 4.6,
    avatar: 'M',
    avatarColor: '#E8734A',
    tags: [
      { label: 'Image', color: '#E8734A' },
      { label: 'Payant', color: '#888' },
    ],
  },
  {
    id: 3,
    name: 'Gemini',
    description: "Assistant IA multimodal de Google",
    rating: 4.5,
    avatar: 'G',
    avatarColor: '#C9A84C',
    tags: [
      { label: 'Texte', color: '#4A7BA8' },
      { label: 'Gratuit', color: '#3D9A6B' },
    ],
  },
];

export const suggestionPills = [
  'Générer une image',
  'Résumer un texte',
  'Écrire du code',
  'Créer une vidéo',
];
