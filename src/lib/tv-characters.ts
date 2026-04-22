type Character = {
  name: string;
  image: string;
};

const tmkocCharacters: Character[] = [
  { name: "Jethalal Champaklal Gada", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dilip_Joshi_at_Nickelodeon_Kids_Choice_Awards_2019.jpg/330px-Dilip_Joshi_at_Nickelodeon_Kids_Choice_Awards_2019.jpg" },
  { name: "Dayaben Gada", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/DishaVakani1.jpg/330px-DishaVakani1.jpg" },
  { name: "Tapu (Tipendra Gada)", image: "https://ui-avatars.com/api/?name=Tapu+Tipendra+Gada&background=1f2937&color=f9fafb&size=256" },
  { name: "Champaklal Gada", image: "https://ui-avatars.com/api/?name=Champaklal+Gada&background=1f2937&color=f9fafb&size=256" },
  { name: "Taarak Mehta", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Shailesh_Lodha_in_1000_episode_celebration_of_TMKOC.jpg/330px-Shailesh_Lodha_in_1000_episode_celebration_of_TMKOC.jpg" },
  { name: "Anjali Mehta", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Neha_Mehta_at_the_launch_party_of_Sony_LIV_%28cropped%29.jpg/330px-Neha_Mehta_at_the_launch_party_of_Sony_LIV_%28cropped%29.jpg" },
  { name: "Aatmaram Tukaram Bhide", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MandarChandwadkar.jpg/330px-MandarChandwadkar.jpg" },
  { name: "Madhavi Bhide", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Sonalika_joshi.jpg" },
  { name: "Sonu Bhide", image: "https://ui-avatars.com/api/?name=Sonu+Bhide&background=1f2937&color=f9fafb&size=256" },
  { name: "Roshan Singh Sodhi", image: "https://ui-avatars.com/api/?name=Roshan+Singh+Sodhi&background=1f2937&color=f9fafb&size=256" },
  { name: "Mrs. Roshan Sodhi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Jennifer_mistry.jpg/330px-Jennifer_mistry.jpg" },
  { name: "Gogi", image: "https://ui-avatars.com/api/?name=Gogi&background=1f2937&color=f9fafb&size=256" },
  { name: "Dr. Hansraj Hathi", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kavi_Kumar_Azad_at_TMKOC%27s_1000_episode_celebration_party.jpg" },
  { name: "Komal Hathi", image: "https://ui-avatars.com/api/?name=Komal+Hathi&background=1f2937&color=f9fafb&size=256" },
  { name: "Goli", image: "https://ui-avatars.com/api/?name=Goli&background=1f2937&color=f9fafb&size=256" },
  { name: "Krishnan Iyer", image: "https://ui-avatars.com/api/?name=Krishnan+Iyer&background=1f2937&color=f9fafb&size=256" },
  { name: "Babita Iyer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/MunmunDutta06.jpg/330px-MunmunDutta06.jpg" },
  { name: "Popatlal", image: "https://ui-avatars.com/api/?name=Popatlal&background=1f2937&color=f9fafb&size=256" },
  { name: "Abdul", image: "https://ui-avatars.com/api/?name=Abdul&background=1f2937&color=f9fafb&size=256" },
  { name: "Nattu Kaka", image: "https://ui-avatars.com/api/?name=Nattu+Kaka&background=1f2937&color=f9fafb&size=256" },
  { name: "Bagha", image: "https://ui-avatars.com/api/?name=Bagha&background=1f2937&color=f9fafb&size=256" },
  { name: "Bawri", image: "https://ui-avatars.com/api/?name=Bawri&background=1f2937&color=f9fafb&size=256" },
  { name: "Sundarlal", image: "https://ui-avatars.com/api/?name=Sundarlal&background=1f2937&color=f9fafb&size=256" },
  { name: "Rita Reporter", image: "https://ui-avatars.com/api/?name=Rita+Reporter&background=1f2937&color=f9fafb&size=256" },
  { name: "Bapuji (Champak Chacha)", image: "https://ui-avatars.com/api/?name=Bapuji+Champak+Chacha&background=1f2937&color=f9fafb&size=256" },
  { name: "Pinku", image: "https://ui-avatars.com/api/?name=Pinku&background=1f2937&color=f9fafb&size=256" },
  { name: "Tappu Sena", image: "https://ui-avatars.com/api/?name=Tappu+Sena&background=1f2937&color=f9fafb&size=256" },
  { name: "Gokuldham Society", image: "https://ui-avatars.com/api/?name=Gokuldham+Society&background=1f2937&color=f9fafb&size=256" },
];

export const tvCollections: Record<string, Character[]> = {
  "Taarak Mehta Ka Ooltah Chashmah": tmkocCharacters,
};
