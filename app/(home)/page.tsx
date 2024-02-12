import Link from "next/link";
import {RouteUrl} from "@/components/constants/constants";
import {HowToUseOneClickDownloader} from "@/components/footer/how-to-use/how-to-use-one-click-downloader";
import Image from "next/image";
import {Button} from "@/components/ui/button";


export default function Home() {
  return (
    <section className="w-full flex-center flex-col mt-20 gap-40">
      <div className="w-full flex-center flex-col">
        <Link href={RouteUrl.ONE_TIME_DOWNLOADER} className="w-full flex-start group">
          <div className="flex-start flex-col gap-3">
            <h1
              className="text-2xl font-bold tracking-tighter sm:text-4xl text-gray-200 group-hover:text-blue-300">
              One-Click Downloader
            </h1>
            <p
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Quick download image from Midjourney by Drag and Drop
            </p>
          </div>
        </Link>
        <div className="relative w-full h-[600px]">
          <Image
            alt="one click download guide"
            src={"/images/one-click-download/guide.png"}
            fill
            className="object-contain"
          />
        </div>
        <Link href={RouteUrl.ONE_TIME_DOWNLOADER}>
          <Button className="w-[130px] mt-4" size="lg">Try Now</Button>
        </Link>
      </div>
      <div className="w-full flex-center flex-col">
        <Link href={RouteUrl.STUDIO} className="w-full flex-start group">
          <div className="flex-start flex-col gap-3">
            <h1
              className="text-2xl font-bold tracking-tighter sm:text-4xl text-gray-200 group-hover:text-blue-300">
              Keyword Studio
            </h1>
            <p
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the art of keyword and style-driven AI image generation to effortlessly create and share your visionary art
            </p>
          </div>
        </Link>
        <div className="relative w-full h-[600px]">
          <Image
            alt="one click download guide"
            src={"/images/studio/guide.png"}
            fill
            className="object-contain"
          />
        </div>
        <Link href={RouteUrl.STUDIO}>
          <Button className="w-[130px] mt-4" size="lg">Try Now</Button>
        </Link>
      </div>
    </section>
  )
}
