import type { AttributeInfo } from "langchain/chains/query_constructor";
import { Document } from "@langchain/core/documents";

export const moveNames = {
  jab1: ["jab1", "Jab", "Jab One", "Jab 1"],
  ftilt: ["ftilt", "Forward Tilt"],
  utilt: ["utilt", "Up Tilt"],
  dtilt: ["dtilt", "Down Tilt"],
  dattack: ["dattack", "Dash Attack"],
  fsmash: ["fsmash", "Forward Smash"],
  usmash: ["usmash", "Up Smash"],
  dsmash: ["dsmash", "Down Smash"],
  nair: ["nair", "Neutral Air"],
  fair: ["fair", "Forward Air", "Forward Aerial"],
  bair: ["bair", "Back Air", "Back Aerial"],
  uair: ["uair", "Up Air", "Up Aerial"],
  dair: ["dair", "Down Air", "Down Aerial"],
  neutral_b: ["neutral_b", "Neutral B", "Neutral Special"],
  up_b: ["up_b", "Up B", "Up Special"],
  side_b: ["side_b", "Side B", "Side Special"],
  down_b: ["down_b", "Down B", "Down Special"],
  grab: ["grab", "Grab"],
  fthrow: ["fthrow", "Forward Throw"],
  bthrow: ["bthrow", "Back Throw"],
  uthrow: ["uthrow", "Up Throw"],
  dthrow: ["dthrow", "Down Throw"],
};

export const characterAliases = {
  bowser: ["bowser"],
  captain_falcon: ["captain_falcon", "captain falcon", "falcon"],
  donkey_kong: ["donkey_kong", "donkey kong", "dk"],
  dr_mario: ["dr._mario", "dr mario", "doctor mario"],
  falco: ["falco"],
  fox: ["fox"],
  ganondorf: ["ganondorf", "ganon"],
  ice_climbers: ["ice_climbers", "ice climbers", "ices", "popo", "nana"],
  jigglypuff: ["jigglypuff", "jiggs", "puff"],
  kirby: ["kirby"],
  link: ["link"],
  luigi: ["luigi"],
  mario: ["mario"],
  marth: ["marth"],
  mewtwo: ["mewtwo", "m2"],
  mr_game_watch: [
    "mr._game_&_watch",
    "mr game & watch",
    "mr game and watch",
    "game & watch",
    "gnw",
  ],
  ness: ["ness"],
  peach: ["peach", "princess peach"],
  pichu: ["pichu"],
  pikachu: ["pikachu", "pika"],
  roy: ["roy"],
  samus: ["samus"],
  sheik: ["sheik"],
  yoshi: ["yoshi"],
  young_link: ["young_link", "young link", "yl"],
  zelda: ["zelda"],
};

export const attributeInfo: AttributeInfo[] = [
  {
    name: "character",
    description: "The name of the super smash brothers melee character",
    type: "lowercase string",
  },
  {
    name: "move",
    description: "the name of the move, grab, throw or character stats",
    type: "lowercase string",
  },
];

export const formatDocumentsAsString = (documents: Document[]) => {
  console.log(documents);
  return documents.map((document) => document.pageContent).join("\n\n");
};

export const replaceAliases = (question: string) => {
  const lowerArray = question.toLowerCase().split(" ");

  const replaceMoves = lowerArray.map((word) => {
    for (const [key, aliases] of Object.entries(moveNames)) {
      if (aliases.includes(word)) {
        return key;
      } else {
        return word;
      }
    }
  });

  const replaceChars = lowerArray.map((word) => {
    for (const [key, aliases] of Object.entries(characterAliases)) {
      if (aliases.includes(word)) {
        return key;
      } else {
        return word;
      }
    }
  });

  console.log(replaceChars.join(" "));
  return replaceChars.join(" ");
};
