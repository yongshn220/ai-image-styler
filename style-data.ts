export interface StyleData {
  [key: string]: {[key: string]: Array<StyleInfo>}
}

export interface StyleInfo {
  name: string
}

export const styleData: StyleData = {
  Photography: {
    Photography: [
      {
        name: "Portrait Photography",
      },
      {
        name: "Street Photography",
      },
      {
        name: "Product Photography"
      },
      {
        name: "Fashion Photography"
      },
      {
        name: "Food Photography"
      },
      {
        name: "Still Life Photography"
      },
      {
        name: "Analog Photography"
      },
      {
        name: "Lo-fi Photography"
      },
      {
        name: "Fantasy Photography"
      }
    ],
  },
  Person: {
    Emotion: [
      {
        name: "Happy",
      },
      {
        name: "Joyful",
      },
      {
        name: "Excited",
      },
      {
        name: "Elated",
      },
      {
        name: "Hopeful",
      },
      {
        name: "Optimistic",
      },
      {
        name: "Proud",
      },
      {
        name: "Disgusted",
      },
      {
        name: "Shocked",
      },
      {
        name: "Bewildered",
      },
      {
        name: "Revolted",
      },
      {
        name: "Inquisitive",
      },
      {
        name: "Curious",
      },
      {
        name: "Sad",
      },
      {
        name: "Depressed",
      },
      {
        name: "Frustrated",
      },
      {
        name: "Disappointed",
      },
      {
        name: "Resentful",
      },
      {
        name: "Angry",
      },
      {
        name: "Indignant",
      },
      {
        name: "Jealous",
      },
      {
        name: "Envious",
      },
      {
        name: "Bitter",
      },
    ],
    Fashion: [
      {
        name: "High Fashion",
      },
      {
        name: "Casual chic",
      },
      {
        name: "Streetwear",
      },
      {
        name: "Minimalist",
      },
      {
        name: "Vintage / Retro",
      },
      {
        name: "Urban",
      },
      {
        name: "Athletic",
      },
      {
        name: "Bohemian / Boho",
      },
      {
        name: "Hippie",
      },
      {
        name: "Techwear",
      },
      {
        name: "Grunge",
      },
      {
        name: "Punk",
      },
      {
        name: "Futuristic",
      },
      {
        name: "Hiphop",
      },
      {
        name: "Haute Couture",
      },
      {
        name: "Cyberpunk",
      }
    ]
  },
  Background: {
    Place: [
      {
        name: "Cityscape",
      },
      {
        name: "Futuristic City",
      },
      {
        name: "Skyline At Night",
      },
      {
        name: "Modern Office",
      },
      {
        name: "Rooftop View",
      },
      {
        name: "Industrial Area",
      },
      {
        name: "Busy Street",
      },
      {
        name: "Abandoned Building",
      },
      {
        name: "Urban Park",
      },
      {
        name: "Subway Station",
      },
      {
        name: "Commercial District",
      },
      {
        name: "Urban Bridge",
      },
      {
        name: "Old Town",
      },
      {
        name: "Medieval Village",
      },
      {
        name: "Ancient Ruins",
      },
      {
        name: "Castle",
      },
      {
        name: "Historical Battlefield",
      },
      {
        name: "Museum Gallery",
      },
      {
        name: "Opera House",
      },
      {
        name: "Haunted House",
      },
      {
        name: "Underground Cave",
      },
      {
        name: "Baroque Church",
      },
      {
        name: "Ancient Temple",
      },
      {
        name: "Renaissance Palace",
      },
    ],
    Weather: [
      {
        name: "Rainy",
      },
      {
        name: "Overcast",
      },
      {
        name: "Foggy",
      },
      {
        name: "Partly Cloudy",
      },
      {
        name: "Hazy",
      },
      {
        name: "Clear Sky",
      },
      {
        name: "Snowstorm",
      },
      {
        name: "Dark Clouds",
      },
    ],
    Light: [
      {
        name: "Sunrise",
      },
      {
        name: "Morning",
      },
      {
        name: "Noon",
      },
      {
        name: "Sunset",
      },
      {
        name: "Blue Hour",
      },
      {
        name: "Studio Lighting",
      },
      {
        name: "Spotlights",
      },
      {
        name: "Neon Lights",
      },
      {
        name: "Stadium Lights",
      },
      {
        name: "Fluorescent Tubes",
      },
    ],
  },
  Camera: {
    Angle: [
      {
        name: "Eye-Level",
      },
      {
        name: "High-Angle",
      },
      {
        name: "Extreme High-Angle",
      },
      {
        name: "Close-Up",
      },
      {
        name: "Low-Angle",
      },
      {
        name: "Wide-Angle",
      },
    ],
    Motion: [
      {
        name: "Motion Blur",
      },
      {
        name: "Panning",
      },
      {
        name: "Spin Blur",
      },
      {
        name: "Long Exposure",
      },
      {
        name: "Time-Lapse",
      },
      {
        name: "Motion Trail",
      }
    ],
    Lighting: [
      {
        name: "Side Lighting",
      },
      {
        name: "Soft Lighting",
      },
      {
        name: "Hard Lighting",
      },
      {
        name: "Chiaroscuro Lighting",
      }
    ],
    Hardware: [
      {
        name: "GoPro HERO10 Black",
      },
      {
        name: "Phantom High-Speed Camera",
      },
      {
        name: "Canon EOS C300 Mark III",
      },
      {
        name: "Canon EOS C700",
      },
      {
        name: "Hasselblad X1D",
      },
      {
        name: "Nikon Z7 II",
      },
      {
        name: "Nikon D850",
      },
      {
        name: "Sony A7R IV",
      },
      {
        name: "Phase One XF IQ4",
      },
      {
        name: "Canon EOS 5D Mark IV",
      },
      {
        name: "Phanasonic Varicam LT",
      },
      {
        name: "Canon EOS R6",
      },
      {
        name: "Sony Alpha A7 III",
      }
    ],
    Film: [
      {
        name: "Ilford Delta 3200",
      },
      {
        name: "Cinestill 800T",
      },
      {
        name: "Fujifilm Velvia 50",
      },
      {
        name: "Fujichrome Provia 100F",
      },
      {
        name: "Ilford HP5+ 400",
      },
      {
        name: "Fujiflim Pro 400H",
      },
      {
        name: "Anscochrome",
      },
      {
        name: "Fujiflim C200",
      },
      {
        name: "Kodak Gold 200",
      },
      {
        name: "Fomapan 400",
      }
    ]
  },
  Art: {

  }
}
