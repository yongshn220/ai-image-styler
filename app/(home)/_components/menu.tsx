'use client'

import {Button} from "@/components/ui/button";
import qs from 'query-string'
import {useRouter} from "next/navigation";
import {styleData} from "@/style-data";


interface Props {
  selectedMenu: string
  selectedSubMenu?: string
}

export function Menu({selectedMenu, selectedSubMenu}: Props) {
  const router = useRouter()

  const menu = Object.keys(styleData)
  const submenu = selectedMenu? Object.keys(styleData[selectedMenu]) : []

  function onMenuClick(menu: string) {
    const url = qs.stringifyUrl({
      url: '/',
      query: {
        menu: menu,
      }
    }, { skipEmptyString: true, skipNull: true })
    router.push(url, {scroll: false})
  }

  function onSubmenuClick(submenu: string) {
    const url = qs.stringifyUrl({
      url: '/',
      query: {
        menu: selectedMenu,
        submenu: submenu,
      }
    }, { skipEmptyString: true, skipNull: true })
    router.push(url, {scroll: false})
  }

  return (
    <div className="w-full flex-center flex-col pb-12">
      <div className="flex pb-2 gap-x-4">
        {
          menu.map((item, i) => (
            <Button key={i} variant={`${selectedMenu === item? "secondary" : "ghost"}`} onClick={() => onMenuClick(item)}>
              <div>{item}</div>
            </Button>
          ))
        }
      </div>
      <div>
        {
          submenu?.length > 1 && (
            submenu.map((item, i) => (
              <Button key={i} size="sm" variant="ghost" asChild>
                <div className={`${selectedSubMenu === item? "text-gray-300" : "text-gray-500"} cursor-pointer`} onClick={() => onSubmenuClick(item)}>{item}</div>
              </Button>
            ))
          )
        }
      </div>
    </div>
  )
}
