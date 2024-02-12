'use client'


export default function DownloaderHome() {

  const handleDragOver = (e : React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e : React.DragEvent<HTMLDivElement>) => {
    console.log("drop")
    e.preventDefault();
    const items = e.dataTransfer.items;
    if (items.length) {
      items[0].getAsString((str) => {
        console.log('1: ', str)
      })
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
      <a href="https://cdn.midjourney.com/c1f010bb-b067-4ccf-ac6e-0d870367e64b/0_0.png" download>
        Download Image
      </a>
    </section>
  )
}
