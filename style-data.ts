export interface StyleData {
  [key: string]: {[key: string]: Array<StyleInfo>}
}

export interface StyleInfo {
  name: string
  url?: string
}

export const styleData: StyleData = {
  Style: {
    Illustration: [
      {
        name: "Colored pencil style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fcolored-pencil.webp?alt=media&token=d7ac5503-ea90-45ec-90ca-5c66d9c94d4d",
      },
      {
        name: "Cozy style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fcozy.png?alt=media&token=77a18e20-761a-48d4-98ac-1d97f2ec0d6d",
      },
      {
        name: "Line art",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fline-art.png?alt=media&token=5c6ddb5e-29f6-4c38-a897-e4f4409203c5",
      },
      {
        name: "Lithography",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Flithography.png?alt=media&token=81698e44-b75c-4251-bbd6-abe358254fd2",
      },
      {
        name: "Logo style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Flogo.png?alt=media&token=ce3d2c90-e087-476c-972b-ce3024e524b9",
      },
      {
        name: "Sticker style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fsticker.png?alt=media&token=d2356198-fe67-41a8-9c98-56ea779366b2",
      },
      {
        name: "Vintage cartoon style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fvintage-cartoon.png?alt=media&token=574cec48-f7fc-4505-8972-9c7e12c7aa86",
      },
      {
        name: "Tatto style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Ftattoo.webp?alt=media&token=9734cbe4-0e35-4e16-a601-284ea74694c8",
      },
      {
        name: "Stencil style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fstencil.webp?alt=media&token=c6e484f3-a8e8-4008-b1f2-54a555ca088a",
      },
      {
        name: "Shadowy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fshadowy.webp?alt=media&token=3c256449-ed72-4a6c-998d-4c90bde69d35",
      },
      {
        name: "Gradient Points",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fgradient-points.webp?alt=media&token=5eb584b0-a406-41fd-878c-ead665038141",
      },
      {
        name: "Neo-pop art",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fneo-pop-art.webp?alt=media&token=95e0905f-4414-4eef-b480-1f63677dcce4",
      }
    ],
    Artist: [
      {
        name: "Pablo Picasso",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fartist%2FPablo-Picasso.webp?alt=media&token=5dec459d-c095-4a23-8238-b37f64ee905a",
      },
      {
        name: "Moebius",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fartist%2FMoebius.webp?alt=media&token=9e0807ea-8c29-4fdb-b678-5f61360a9310",
      },
      {
        name: "Mo Willems",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fartist%2FMo-Willems.webp?alt=media&token=0cdc569e-871c-4e72-b583-319a5a45c4e1",
      },
      {
        name: "Geoff Mcfetridge",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fartist%2FGeoff-Mcfetridge.webp?alt=media&token=9447d254-d37a-407a-86a7-1ee566c0bf53",
      }
    ],
    Anime: [
      {
        name: "90s",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fanime%2Fanime-90s.webp?alt=media&token=9731f86a-b9a9-48ab-9023-aba7fd4cf2a5",
      },
      {
        name: "Festival Poster",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fanime%2Fanime-festival-poster.webp?alt=media&token=3da73f09-5417-467b-8b91-97e10ba54a9f",
      },
      {
        name: "Holography",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fanime%2Fanime-holography.webp?alt=media&token=6d096b80-3a67-4295-8528-d3cc2e32a5d8",
      },
      {
        name: "Lofi",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fanime%2Fanime-lofi.webp?alt=media&token=d6231d14-329b-4a80-bf6e-c72aa61d76c0",
      }
    ],
    Painting: [
      {
        name: "Abstract",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fabstract.webp?alt=media&token=ea09a586-e10c-4625-86b1-1e883543be87",
      },
      {
        name: "Acrylic",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Facrylic.png?alt=media&token=5b644144-86a8-4a01-87b1-5505c6d525aa",
      },
      {
        name: "Brush stroked",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fbrush-stroke.png?alt=media&token=470a260e-6a90-4de1-80ca-09345c6eba8c",
      },
      {
        name: "Cubism",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fcubism.webp?alt=media&token=02ba5a07-0ae8-4f6f-b3f3-328c9002782e",
      },
      {
        name: "Fresco",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Ffresco.webp?alt=media&token=399d2da4-d549-4512-a9db-d6c329e8d067",
      },
      {
        name: "Pop Art",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fpop-art.png?alt=media&token=5b19f029-b01c-41ae-a5b2-640ea77234cd",
      },
      {
        name: "Watercolor",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fwatercolor.png?alt=media&token=b3589fe8-2788-45ca-b688-7d999a54b342",
      },
      {
        name: "Soft Pastel",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fsoft-pastel.webp?alt=media&token=977d63c7-6b19-489f-88d2-1f685ceff26b",
      },
      {
        name: "Gauache",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fpainting%2Fgouache.webp?alt=media&token=ccb49b53-ea86-4d1c-ab0e-9bb030ae51f6",
      }
    ],
    Photography: [
      {
        name: "Portrait",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Fportrait.webp?alt=media&token=42aeed3e-d90b-476d-a5db-e463a3beda8b",
      },
      {
        name: "Street",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Fstreet.webp?alt=media&token=94468600-4e1c-4324-9ac3-93b0c467d758"
      },
      {
        name: "Product",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Fproduct.webp?alt=media&token=e89e4dbe-3469-477c-94bd-ac02cf764667"
      },
      {
        name: "Fashion",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Ffashion.png?alt=media&token=dd69dfc5-aa07-4cbc-9184-de4b4395c820"
      },
      {
        name: "Food",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Ffood.png?alt=media&token=ac3c047d-4f53-4037-802b-29bcdcff536e"
      },
      {
        name: "Analog",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Fanalog.webp?alt=media&token=d566d8b9-46ec-4e63-a419-c54ae1a824ed"
      },
      {
        name: "Still Life",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Fstill-life.webp?alt=media&token=0f7b43f0-e8cd-48b9-a9c8-132f1379eee4"
      },
      {
        name: "Lo-fi",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Flofi.png?alt=media&token=5e2ea8d5-4145-4e1d-8136-c2b5cbcb8bec"
      },
      {
        name: "Fantasy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fphotography%2Ffantasy.png?alt=media&token=c5d26e37-0821-4f78-adcc-f5f253f019cd"
      }
    ],
    Geometry: [
      {
        name: "Sacred-Geometry",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fgeometry%2Fsacred-geometry.webp?alt=media&token=24e70ce1-234c-4b05-b63d-2b943cd71541",
      }
    ],
    Material: [
      {
        name: "Liquify",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fmaterial%2Fliquify.webp?alt=media&token=d7bbebc0-4286-401a-ba51-d8aaaf9a5215",
      },
      {
        name: "Paper figured style",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fpaper-figured.png?alt=media&token=72df2525-afce-4d94-9492-e59255d06aa7",
      },
      {
        name: "Ambient occlusion",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fillustration%2Fambient-occlusion.png?alt=media&token=cddef3e5-0ad7-49b5-9ec9-85860306c245",
      },
    ]
  },
  Person: {
    Fashion: [
      {
        name: "High Fashion",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fhigh-fashion.png?alt=media&token=e72c640f-94cc-485b-a137-4633793bb7f1",
      },
      {
        name: "Casual Chic",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fcasual-chic.png?alt=media&token=7e9f7684-441a-46ba-a6e7-27909fbc22c7",
      },
      {
        name: "Streetwear",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fstreetwear.png?alt=media&token=0159cd46-ddfe-4b74-b50a-5d8868835ec2",
      },
      {
        name: "Minimalist",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fminimalist.png?alt=media&token=9cdc4762-d3c9-4f12-a5cf-7292457d21e3",
      },
      {
        name: "Vintage",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fvintage.png?alt=media&token=78e3ead4-fdd1-430e-b5a5-844375909534",
      },
      {
        name: "Urban",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Furban.png?alt=media&token=ff4404ca-dbbf-4565-a07d-e9791ab2f4f6",
      },
      {
        name: "Athletic",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fathletic.png?alt=media&token=c4b88cb4-3347-46f5-89c8-929eaab6f306",
      },
      {
        name: "Bohemian",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fbohemian.png?alt=media&token=e3abdf58-dabd-4314-9e78-d253e0d6920b",
      },
      {
        name: "Hippie",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fhippie.png?alt=media&token=987367dc-f1c4-4554-b695-50d5f486c02d",
      },
      {
        name: "Techwear",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Ftechwear.png?alt=media&token=c0066572-03f3-4bdb-bf60-7e73ac3e6402",
      },
      {
        name: "Grunge",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fgrunge.png?alt=media&token=0da95dd6-d38e-4fd9-a64d-0bb14e7c10f0",
      },
      {
        name: "Punk",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fpunk.png?alt=media&token=34c4eafd-0966-4dda-aecf-7c65d81787b8",
      },
      {
        name: "Futuristic",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Ffuturistic.png?alt=media&token=204507b5-e836-461f-8bfb-e5264241617e",
      },
      {
        name: "Hiphop",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fhiphop.png?alt=media&token=0dfa2612-269d-4d93-bc5b-a9b0b9fa0127",
      },
      {
        name: "Haute Couture",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fhaute-couture.png?alt=media&token=68f7ee1f-ca73-4b4a-9b1a-dc7232e17a95",
      },
      {
        name: "Cyberpunk",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Ffashion%2Fcyberpunk.png?alt=media&token=88d75554-ba2e-4bfd-acdc-8e6ebc8fd7cf",
      }
    ],
    Emotion: [
      {
        name: "Happy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fhappy.png?alt=media&token=0aa43c56-575c-4915-9171-d5ac1ac478be",
      },
      {
        name: "Joyful",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fjoyful.png?alt=media&token=2b04762f-d30f-4951-9c67-6b50b8fbe7bf",
      },
      {
        name: "Excited",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fexited.png?alt=media&token=1b746811-99d0-4b5f-a7a2-b81deab62d90",
      },
      {
        name: "Elated",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Felated.png?alt=media&token=fdb955ca-5633-494f-b9b1-c77d107c4733",
      },
      {
        name: "Hopeful",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fhopeful.png?alt=media&token=86a21ed2-9672-475b-acb9-8990e8aad235",
      },
      {
        name: "Optimistic",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Foptimistic.png?alt=media&token=e3cc0163-ac3f-40c8-9c16-9245f978565b",
      },
      {
        name: "Proud",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fproud.png?alt=media&token=752771ca-0787-4bef-b249-e863eed5f543",
      },
      {
        name: "Disgusted",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fdisgusted.png?alt=media&token=785c82fd-154b-4a27-92eb-a50c7d08ae2d",
      },
      {
        name: "Shocked",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fshocked.png?alt=media&token=33bf17d3-4e02-4d27-a120-21729fd688cf",
      },
      {
        name: "Bewildered",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fbewildered.png?alt=media&token=032a73a3-3e7d-4f7b-8b47-dcc9ad657430",
      },
      {
        name: "Revolted",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Frevolted.png?alt=media&token=fb982229-07aa-40c4-aae2-27a7c6c9e5db",
      },
      {
        name: "Inquisitive",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Finquisitive.png?alt=media&token=cbe71f01-6bd5-42d5-b77a-78d9846bc07b",
      },
      {
        name: "Curious",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fcurious.png?alt=media&token=d99569b1-1919-4749-a122-2c66fea89b7c",
      },
      {
        name: "Sad",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fsad.png?alt=media&token=f9225786-6655-4edc-adb5-c66f86750bb5",
      },
      {
        name: "Depressed",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fdepressed.png?alt=media&token=99e7c5b7-1312-4935-9372-d23c4093f274",
      },
      {
        name: "Frustrated",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Ffrustrated.png?alt=media&token=ce8db5b6-945a-4ee7-bc8a-f36d29622837",
      },
      {
        name: "Disappointed",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fdisappointed.png?alt=media&token=234ab275-6794-4356-a82b-c1fe8f0d91d8",
      },
      {
        name: "Resentful",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fresentful.png?alt=media&token=ee67d2df-0d35-42f2-b2f9-0fd476372fcc",
      },
      {
        name: "Angry",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fangry.png?alt=media&token=97fc5209-e01f-4574-a97c-e18c6e9c8f65",
      },
      {
        name: "Indignant",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Findignant.png?alt=media&token=9800e69a-3a96-45fb-ad60-0fa91b67e0eb",
      },
      {
        name: "Jealous",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fjealous.png?alt=media&token=bd020038-eb0f-4573-adaf-0522a8f24830",
      },
      {
        name: "Envious",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fperson%2Femotion%2Fenvious.png?alt=media&token=4d46edfa-0927-4263-81f6-f90674baaccc",
      },
    ],
  },
  Background: {
    Place: [
      {
        name: "Beach",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fbeach.png?alt=media&token=da3fdd65-7c14-4bb2-8438-84a48713a876",
      },
      {
        name: "Forest",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fforest.png?alt=media&token=c3ccd589-11cf-4c9e-8ee0-19cefdd7af6f",
      },
      {
        name: "Mountain",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fmountain.png?alt=media&token=6eb1a0bb-6c9a-4ba8-8a3a-d45ca1117402",
      },
      {
        name: "Tropical Island",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Ftropical-beach.png?alt=media&token=e7a84d17-2118-4913-a101-7024e7855e4c",
      },
      {
        name: "Rural Landscape",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Frural-landscape.png?alt=media&token=e47e5939-2fdc-42e6-ae49-3ca0a2ea9fed",
      },
      {
        name: "Desert",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fdesert.png?alt=media&token=2d94faa6-9f47-45b8-b46c-03b9bdc0a1d3",
      },
      {
        name: "Arctic",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Farctic.png?alt=media&token=f6c24c59-2c24-40a0-ba9f-f4605f968718",
      },
      {
        name: "Underwater",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Funderwater.png?alt=media&token=00795bf5-56aa-42a0-b87f-843bce113421",
      },
      {
        name: "Secluded Cabin",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fsecluded-cabin.png?alt=media&token=e5d9a420-eb2d-4abd-a7ca-93219ebcfc2b",
      },
      {
        name: "Lush Garden",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Flush-garden.png?alt=media&token=04299767-2058-4e9f-b7f0-921abae6554d",
      },
      {
        name: "Space",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fspace.png?alt=media&token=dcecbc14-2ff5-4365-9818-49837153ab52",
      },
      {
        name: "Cityscape",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fcityscape.png?alt=media&token=5480dec1-da9b-4330-8b93-c891c48d13d9",
      },
      {
        name: "Futuristic City",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Ffuturistic-city.png?alt=media&token=9b69faa3-ac28-41da-b559-4582faa7a463",
      },
      {
        name: "Skyline At Night",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fskyline-at-night.png?alt=media&token=5f58cb3d-e18d-43f3-8f34-fe5dc7e0d3ff",
      },
      {
        name: "Modern Office",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fmodern-office.png?alt=media&token=c6858b58-d340-4b02-8a00-ab5648c5862e",
      },
      {
        name: "Rooftop View",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Frooftop-view.png?alt=media&token=90ee2863-878c-4468-877c-a529b746e19c",
      },
      {
        name: "Industrial Area",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Findustrial-area.png?alt=media&token=46aba99b-5f6c-421e-bce8-57c3603a3e0a",
      },
      {
        name: "Busy Street",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fbusy-street.png?alt=media&token=98c0e53a-737b-494e-a7bc-0bb36d50e824",
      },
      {
        name: "Abandoned Building",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fabandoned-building.png?alt=media&token=463939b6-c3cd-4a52-b489-c8ce6e2b364b",
      },
      {
        name: "Urban Park",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Furban-park.png?alt=media&token=629e1e54-21ce-48d1-a4df-d471a63f3daf",
      },
      {
        name: "Subway Station",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fsubway-station.png?alt=media&token=cf1d28ba-a304-4aa5-a043-4e94235acc42",
      },
      {
        name: "Commercial District",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fcommercial-district.png?alt=media&token=c975d025-d4fb-45db-a6e5-8c7d750c5e6c",
      },
      {
        name: "Urban Bridge",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Furban-bridge.png?alt=media&token=63e93ee9-b72d-465b-a213-20fa1c2756fb",
      },
      {
        name: "Old Town",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fold-town.png?alt=media&token=59095428-7f7b-4b4d-87d5-b23946a3b711",
      },
      {
        name: "Medieval Village",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fmedieval-village.png?alt=media&token=09397e4d-fc50-4bc5-a056-5778a83fbd92",
      },
      {
        name: "Ancient Ruins",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fancient-ruins.png?alt=media&token=f6658c29-4740-47a9-9a08-16f52d464473",
      },
      {
        name: "Castle",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fcastle.png?alt=media&token=b0847ec4-9c97-47f4-ab9c-b8bf998ae581",
      },
      {
        name: "Historical Battlefield",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fhistorical-battlefield.png?alt=media&token=4e2c6a98-52d2-46ca-aeaa-2eac99e54d0b",
      },
      {
        name: "Museum Gallery",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fmuseum-gallery.png?alt=media&token=8d571d9f-3dba-4e36-a933-19aeeb3745a5",
      },
      {
        name: "Opera House",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fopera-house.png?alt=media&token=694bebf4-103e-49c7-85e7-a9b0fba05b2f",
      },
      {
        name: "Haunted House",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Fhaunted-house.png?alt=media&token=5372bc0b-be02-4ac1-9bb2-92ee78891ec2",
      },
      {
        name: "Underground Cave",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Funderground-cave.png?alt=media&token=c78e5cfc-da4a-4332-958a-5e604e62cdf7",
      },
      {
        name: "Renaissance Palace",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fplace%2Frenaissance-palace.png?alt=media&token=d7e46880-766c-4ad5-bb55-ab1f4da2306e",
      },
    ],
    Weather: [
      {
        name: "Rainy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Franiy.png?alt=media&token=e630b381-8f39-4abd-9ee2-e5a248790120",
      },
      {
        name: "Overcast",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Fovercast.png?alt=media&token=22920ffe-3971-4f95-a2f7-d50413c337a2",
      },
      {
        name: "Foggy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Ffoggy.png?alt=media&token=5684f481-0fb8-427f-9748-e376da81fc75",
      },
      {
        name: "Partly Cloudy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Fpartly-cloudy.png?alt=media&token=fed71312-19e2-476c-bcc3-8e7634a22ac2",
      },
      {
        name: "Hazy",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Fhazy.png?alt=media&token=fb36d309-2f40-423d-b6fb-b9f6582d6da5",
      },
      {
        name: "Clear Sky",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Fclear-sky.png?alt=media&token=29f74a07-c4ab-42d1-8080-658c7d3d2057",
      },
      {
        name: "Snowstorm",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Fsnowstorm.png?alt=media&token=d88fd34a-a8ac-48db-b306-1ece3a361253",
      },
      {
        name: "Dark Clouds",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Fweather%2Fdark-clouds.png?alt=media&token=bb04d8f9-073f-4cfa-8d5b-f49cbcd3ebef",
      },
    ],
    Light: [
      {
        name: "Sunrise",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Fsunrise.png?alt=media&token=331df61a-7418-42ee-b6fc-15e57ec6bf79",
      },
      {
        name: "Morning",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Fmorning.png?alt=media&token=d5716cbf-cd75-4485-83a3-c5d61cbca23e",
      },
      {
        name: "Noon",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Fnoon.png?alt=media&token=e2caa9ea-cdb9-4336-ab17-5305635ac026",
      },
      {
        name: "Sunset",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Fsunset.png?alt=media&token=87f94a7c-7c18-4c3c-b975-dd2368e4aee8",
      },
      {
        name: "Blue Hour",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Fblue-hour.png?alt=media&token=0c385bad-a3cb-4156-a033-61afa07bcafe",
      },
      {
        name: "Neon Lights",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Fneon.png?alt=media&token=b288a6b1-cd83-48a6-a1a0-a2845b3ca031",
      },
      {
        name: "Fluorescent Tubes",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fbackground%2Flight%2Ffluorescent-tubes.png?alt=media&token=f0105d61-cd60-4a57-a59a-2c8e2970fad0",
      },
    ],
  },
  Camera: {
    Angle: [
      {
        name: "Eye-Level",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fangle%2Feye-level.png?alt=media&token=42a4e2ca-f18f-444f-8d00-8b9963ad917a",
      },
      {
        name: "High-Angle",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fangle%2Fhigh-level.png?alt=media&token=fb91768e-adcd-40ac-a75d-f3b71db8572a",
      },
      {
        name: "Extreme High-Angle",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fangle%2Fextreme-high-level.png?alt=media&token=93b3f1e7-27d4-4559-b5ef-cd95173abc2c",
      },
      {
        name: "Close-Up",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fangle%2Fclose-up.png?alt=media&token=b5394b8f-6f5f-4877-b2f2-12b3214774cd",
      },
      {
        name: "Low-Angle",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fangle%2Flow-level.png?alt=media&token=32656704-b3cf-4332-a101-5e57cf03d1b2",
      },
    ],
    Motion: [
      {
        name: "Motion Blur",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fmotion%2Fmotion-blur.png?alt=media&token=d384c3de-a5fc-4bd0-9b3c-9dfff34fbd93",
      },
      {
        name: "Spin Blur",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fmotion%2Fspin-blur.webp?alt=media&token=8756af6e-1d37-449f-a953-e0bf58c4ba29",
      },
      {
        name: "Long Exposure",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fmotion%2Flong-exposure.png?alt=media&token=d04fcc87-c68a-4613-be3c-c1e1d8f2a80b",
      },
      {
        name: "Time-Lapse",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Fmotion%2Ftime-lapse.png?alt=media&token=cd90963a-c339-4ddc-863d-18f8e468c02f",
      },
    ],
    Lighting: [
      {
        name: "Side Lighting",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Flighting%2Fside.png?alt=media&token=0afe2ae2-67d6-4da8-a76f-b6c0f9fb4409",
      },
      {
        name: "Soft Lighting",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Flighting%2Fsoft.png?alt=media&token=be08468e-a6f3-45a1-8115-0e265e3addfd",
      },
      {
        name: "Hard Lighting",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Flighting%2Fhard.png?alt=media&token=14724c3e-b2a8-43fe-938c-ea80cccab6e6",
      },
      {
        name: "Chiaroscuro Lighting",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Flighting%2Fchiaroscuro.png?alt=media&token=07f0bf89-b66d-4ea5-80ed-7d5559d220d7",
      },
      {
        name: "Spotlights",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Flighting%2Fspot.png?alt=media&token=eb6413d8-e0f0-46b4-8359-9710e27b5881",
      },
      {
        name: "Stadium Lights",
        url: "https://firebasestorage.googleapis.com/v0/b/ai-image-styler.appspot.com/o/sample%2Fcamera%2Flighting%2Fstadium.png?alt=media&token=3629c8f6-5f27-45e4-a5b0-e5f60b43f17c",
      },
    ],
  },
}


// Keep
/*
Film: [
      {
        name: "Ilford Delta 3200",
        url: "",
      },
      {
        name: "Cinestill 800T",
        url: "",
      },
      {
        name: "Fujifilm Velvia 50",
        url: "",
      },
      {
        name: "Fujichrome Provia 100F",
        url: "",
      },
      {
        name: "Ilford HP5+ 400",
        url: "",
      },
      {
        name: "Fujiflim Pro 400H",
        url: "",
      },
      {
        name: "Anscochrome",
        url: "",
      },
      {
        name: "Fujiflim C200",
        url: "",
      },
      {
        name: "Kodak Gold 200",
        url: "",
      },
      {
        name: "Fomapan 400",
        url: "",
      }
    ]
 */
