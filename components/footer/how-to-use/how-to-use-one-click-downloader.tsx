import Image from 'next/image'


export function HowToUseOneClickDownloader() {
  return (
    <div className="w-full overflow-hidden mt-40">
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex-center flex-col gap-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How to Use</h1>
            <p
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Quick download image from Midjourney by Drag and Drop
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">1. Open Midjourney Explore</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Navigate to the Midjourney Explore tab in your web browser. This is where you&apos;ll find a variety of images to choose from.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">2. Click an Image</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Browse through the gallery to find the image you wish to download. And click and hold.
              </p>
            </div>
            <div className="grid gap-2">
              <h2 className="text-2xl font-bold">3. Drop to Download</h2>
              <p className="text-gray-500 dark:text-gray-400">
                On this website, drop the image in the designated drop area. The image automatically downloaded on your PC with the original resolution!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full h-[700px]">
        <Image
          alt="one click download guide"
          src={"/images/one-click-download/guide.png"}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
