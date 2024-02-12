'use client'

import FileSaver from 'file-saver';
import {toast} from "sonner";
import {useState} from "react";
import Image from 'next/image'
import loadImage from "@/action/loadImage";
import {HowToUseOneClickDownloader} from "@/components/footer/how-to-use/how-to-use-one-click-downloader";
import {cn} from '@/lib/utils'

export default function DownloaderHome() {
  const [savedImages, setSavedImages] = useState<Array<any>>([])
  const [isDragEnter, setIsDragEnter] = useState(false)

  function handleDragOver(e : React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function handleDrop(e : React.DragEvent<HTMLDivElement>) {
    try {
      e.preventDefault();
      const items = e.dataTransfer.items;
      if (items.length) {
        items[0].getAsString((str) => {
          FileSaver.saveAs(str, str);
          toast("A new image has been saved")

          loadImage(str).then((res) => {
            setSavedImages((prev) => ([...prev, res]) )
          })
        })
      }
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setIsDragEnter(false)
    }
  }

  return (
    <section className="w-full flex-center flex-col mt-10">
      <span className="text-2xl md:text-4xl font-semibold blue_gradient">One-Click Quick Downloader </span>
      <h1 className="mt-2">
        for Midjourney
      </h1>
      <div className={cn("w-full flex-center h-[300px] border-2 rounded-xl mb-2 mt-10", isDragEnter && "border-white")}
           onDragOver={handleDragOver} onDrop={handleDrop} onDragEnter={() => setIsDragEnter(true)} onDragLeave={() => setIsDragEnter(false)}>
        <div className="flex-center text-center text-xl text-gray-500 p-4 select-none pointer-events-none">
          Drag & Drop the Image from Midjourney Explore
        </div>
      </div>
      <div className="w-full flex flex-col mt-4 gap-4">
        <p>
          Download completed images ({savedImages.length})
        </p>
        <div className="w-full grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-2">
          {
            savedImages.map((url: any) => (
              <div key={url} className="relative w-full aspect-square border rounded-lg">
                <Image
                  alt="downloaded image"
                  src={url}
                  fill
                  sizes="30vw, 15vw, 10vw"
                  className="object-cover rounded-lg"
                />
              </div>
            ))
          }
        </div>
      </div>
      <HowToUseOneClickDownloader/>
    </section>
  )
}
