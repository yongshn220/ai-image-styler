'use client'
import FileSaver from 'file-saver';


export default function DownloaderHome() {

  const handleDragOver = (e : React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e : React.DragEvent<HTMLDivElement>) => {
    try {
      e.preventDefault();
      const items = e.dataTransfer.items;
      if (items.length) {
        items[0].getAsString((str) => {
          FileSaver.saveAs(str, str);
        })
      }
    }
    catch (e) {
      console.log(e)
    }
  };

  return (
    <section className="w-full flex-center flex-col">
      <div className="w-full flex-center max-w-[400px] aspect-square border-2 border-dashed rounded-xl mt-32 group"
           onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="flex-center text-center text-xl text-gray-500 group-hover:text-white p-4">
          Drag & Drop the Image from Midjourney
        </div>
      </div>
    </section>
  )
}
