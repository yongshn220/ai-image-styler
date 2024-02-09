'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from 'next/image'
import {useState} from "react";
import {useRecoilState} from "recoil";
import {selectedPromptsAtom} from "@/app/(home)/_states/prompt-state";


interface Props {
  prompt: string
}

export function Prompt({prompt}: Props) {
  const [selectedPrompts, setSelectedPrompts] = useRecoilState(selectedPromptsAtom)
  const [promptTextMode, setPromptTextMode] = useState(false)
  const [copied, setCopied] = useState("")

  function handleCopy() {
    setCopied(prompt)
    navigator.clipboard.writeText(prompt)
    setTimeout(() => setCopied(""), 3000)
  }

  function removePrompt(index: number) {
    setSelectedPrompts((prev) => [...prev.filter((_, i) => i !== index)])
  }

  return (
    <Card className="w-full max-w-2xl my-10 min-h-[140px]">
      <CardHeader>
        <div className="flex-between">
          <CardDescription>Your prompt</CardDescription>
          <div className='copy_btn' onClick={handleCopy} onMouseEnter={() => setPromptTextMode(true)} onMouseLeave={() => setPromptTextMode(false)}>
            <Image
              src={copied === prompt
                ? '/icons/tick.svg'
                : '/icons/copy.svg'
              }
              alt="copy button"
              width={20}
              height={20}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex flex-wrap gap-2">
          {
            promptTextMode ?
            <div>
              {selectedPrompts.join(', ')}
            </div>
              :
            selectedPrompts.map((prompt, i) => (
              <div key={i} className="p-1 px-2 border border-gray-400 rounded-full cursor-pointer hover:border-white" onClick={() => removePrompt(i)}>
                {prompt}
              </div>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}
