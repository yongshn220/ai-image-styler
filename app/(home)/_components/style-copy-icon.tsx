'use client'

import Image from "next/image";
import {useRecoilState} from "recoil";
import {selectedPromptsAtom} from "@/app/(home)/_states/prompt-state";
import {useState} from "react";

interface Props {
  text: string
}

export function StyleCopyIcon({text}: Props) {
  const [selectedPrompts, setSelectedPrompts] = useRecoilState(selectedPromptsAtom)
  const [promptTextMode, setPromptTextMode] = useState(false)
  const [copied, setCopied] = useState("")

  function handleCopy() {
    setCopied(text)
    navigator.clipboard.writeText(text)
    setTimeout(() => setCopied(""), 3000)
  }

  return (
    <div className='copy_btn' onClick={handleCopy} onMouseEnter={() => setPromptTextMode(true)}
         onMouseLeave={() => setPromptTextMode(false)}>
      <Image
        src={copied === text
          ? '/icons/tick.svg'
          : '/icons/copy.svg'
        }
        alt="copy button"
        width={20}
        height={20}
      />
    </div>
  )
}
