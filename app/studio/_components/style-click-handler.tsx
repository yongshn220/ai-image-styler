'use client'

import {ReactNode} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {selectedPromptsAtom} from "@/app/studio/_states/prompt-state";
import qs from "query-string";


interface Props {
  children: ReactNode
  prompt: string
}

export function StyleClickHandler({children, prompt}: Props) {
  const [prompts, setPrompts] = useRecoilState(selectedPromptsAtom)

  function onClick() {
    if (!prompts.includes(prompt))
      setPrompts((prev:Array<string>) => [...prev, prompt])
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  )
}
