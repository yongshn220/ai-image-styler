'use client'

import FileSaver from 'file-saver';
import {toast} from "sonner";
import {useState} from "react";
import Image from 'next/image'
import loadImage from "@/action/loadImage";

export default function DownloaderHome() {
  const [savedImages, setSavedImages] = useState<Array<any>>([])

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
  }

  return (
    <section className="w-full  flex-center flex-col mt-10">
      <span className="text-2xl md:text-4xl font-semibold blue_gradient">One-Click Downloader </span>
      <h1 className="mt-2">
        for Midjourney
      </h1>
      <div className="w-full flex-center aspect-[3/1] border-2 rounded-xl group mb-2 mt-10"
           onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="flex-center text-center text-xl text-gray-500 group-hover:text-white p-4">
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
    </section>
  )
}
