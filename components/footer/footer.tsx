import UserFeedback from "@/components/footer/user-feedback";


export function Footer() {
  return (
    <div className="flex-center">
      <div className="w-full flex-center flex-col max-w-6xl m-4 mt-40">
        <section className="container px-4 md:px-6 py-6 md:py-12">
          <div className="flex-center flex-col gap-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Keywarts</h1>
            <p
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Welcome to Keywarts.com, your premier destination for AI art creation. Our platform is dedicated to
              providing artists, designers, and enthusiasts with a comprehensive library of image prompts and keywords
              designed to inspire your creativity and enhance your projects with Midjourney, an advanced AI image
              generator.
            </p>
            <p
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Keywarts.com, we understand the challenges of finding the perfect prompt to kickstart your AI art
              journey.
              That&apos;s why we&apos;ve curated a selection of vivid images and corresponding keywords that spark imagination,
              pushing the boundaries of AI-generated art.
              Whether you&apos;re looking to create digital paintings, illustrations, or unique artworks, our platform serves
              as a bridge between your creativity and the powerful capabilities of AI.
            </p>
          </div>
        </section>
        <UserFeedback/>
    </div>
    </div>
  )
}
