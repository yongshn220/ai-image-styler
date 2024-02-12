import {atom} from "recoil";


export const selectedPromptsAtom = atom<Array<string>>({
  key: 'selectedPromptsAtom',
  default: []
})
