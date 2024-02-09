import Image from "next/image";
import {StyleInfo} from "@/style-data";
import {StyleClickHandler} from "@/app/(home)/_components/style-click-handler";
import {StyleCopyIcon} from "@/app/(home)/_components/style-copy-icon";


interface Props {
  styleList: Array<StyleInfo>
}

export function StyleList({styleList}: Props) {
  return (
    <div className="w-full">
      <div className="w-full flex-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 rounded-sm">
        {
          styleList.map((style, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg">
              <StyleClickHandler prompt={style.name}>
                <div className="relative aspect-[2/1]">
                  <Image
                    src={'/images/styles/photography/sample.png'}
                    alt={`${style.name}`}
                    fill
                    sizes="50vw, 25vw, 25vw"
                    className="w-full object-cover rounded-t-lg"
                  />
                </div>
              </StyleClickHandler>
              <div className="flex-between p-3 bg-gray-900 rounded-b-lg">
                <div className="">
                  {style.name}
                </div>
                <div>
                  <StyleCopyIcon text={style.name}/>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
