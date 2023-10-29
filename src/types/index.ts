export type Gender = 'M' | 'F';
export type City =
   | 'MSK'
   | 'PITER'
   | 'NOVOSIB'
   | 'EKAT'
   | 'KAZAN'
   | 'NIZHNIYNOV'
   | 'CHELYAB'
   | 'SAMARA'
   | 'OMSK'
   | 'ROSTOV'
   | 'YFA'
   | 'KRASNOYARSK'
   | 'VORONESH'
   | 'PERM'
   | 'VOLGOGRAD';
export type Tag = 'dogs' | 'cats' | 'pizza' | 'alcohol' | 'sport' | 'rock' | 'hip-hop' | 'delete_all';
export type Purpose = 'FRIENDSHIP' | 'ENTERTAINMENT' | 'LOVE' | 'EMPTY';

export type Photo = {
   id: number;
   photo: string;
   photoSmall: string;
   photoMedium: string;
   photoLarge: string;
};

export type User = QuestionnaireData & {
   isCreated: boolean;
   phone: string;
   accessToken: string;
   refreshToken: string;
   expiresAt: string;
   dateJoined: string;
   dateOfBirth: string;
   photos: Photo[];
   totalFollowers: number;
   totalFollowings: number;
   totalBookmarks: number;
};

export type QuestionnaireData = {
   firstName: string;
   username: string;
   about: string;
   city: string;
   tags: Tag[];
   gender: Gender;
   searching: Gender;
   purpose: Purpose;
};
