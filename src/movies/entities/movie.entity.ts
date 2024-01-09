// {
//     "title": "The Grudge",
//     "year": 2020,
//     "cast": [
//         "Andrea Riseborough",
//         "Demián Bichir",
//         "John Cho",
//         "Betty Gilpin",
//         "Lin Shaye",
//         "Jacki Weaver"
//     ],
//     "genres": ["Horror", "Supernatural"],
//     "href": "The_Grudge_(2020_film)",
//     "extract": "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
//     "thumbnail": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
//     "thumbnail_width": 220,
//     "thumbnail_height": 326
// }

export class Movie {
  href: string;
  title: string;
  year: number;
  cast: string[];
  genres: string[];
  extract: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
}
