import {Menu} from "@/app/(home)/_components/menu";
import {StyleList} from "@/app/(home)/_components/style-list";
import {Prompt} from "@/app/(home)/_components/prompt";
import {styleData, StyleInfo} from "@/style-data";


interface Props {
  searchParams: {
    menu?: string
    submenu?: string
  }
}

export default function Home({searchParams}: Props) {

  const selectedMenu = searchParams.menu?? "Style"
  const selectedSubMenu = searchParams.submenu

  const styleGroup = styleData[selectedMenu]

  let styleList: Array<StyleInfo> = [];
  if (selectedSubMenu) {
    styleList = styleGroup[selectedSubMenu]
  }
  else {
    Object.values(styleGroup).forEach(styles => {
      styleList.push(...styles)
    })
  }

  return (
    <div className="w-full flex-center flex-col">
      <h1 className="text-4xl md:text-6xl font-semibold blue_gradient py-4">
        AI Inspire Studio
      </h1>
      <h2 className="text-lg text-gray-600 sm:text-xl max-w-2xl">
        Discover the art of keyword and style-driven AI image generation to effortlessly create and share your visionary art
      </h2>
      <Prompt prompt="Background, Light, f-22"/>
      <Menu selectedMenu={selectedMenu} selectedSubMenu={selectedSubMenu}/>
      <StyleList styleList={styleList}/>
    </div>
  );
}
