import Image from 'next/image'

export default function UserFeedback() {

  return (
    <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 mt-10">
      <div className="flex-center gap-4 text-gray-500">
        <a href="mailto:syj4209@naver.com?subject=Feedback&body=Please%20write%20your%20feedback%20here.">
          <Image
            alt="mail icon"
            src='/icons/mail.svg'
            width={30}
            height={30}
          />
        </a>
      </div>
      <h2 className="mt-6 text-center text-xl font-semibold text-gray-300">We are love to hear your feedback</h2>
      <h2 className="mt-6 text-center  text-gray-700">Copyright © 2024 Keywarts.com. All rights reserved.

</h2>
    </div>
  )
}
