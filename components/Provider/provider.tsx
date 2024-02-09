'use client'

import {RecoilRoot} from "recoil";
import {ReactNode} from "react";


interface Props {
  children: ReactNode
}

export function Provider({children}: Props) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}
