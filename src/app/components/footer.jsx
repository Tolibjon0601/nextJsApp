import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-black justify-around pt-14 pb-12 mt-24'>
    <div className='max-w-[320px]'>
<h1 className='text-[20px] mb-4 font-semibold text-white'>Copyright 2020</h1>
<p className='text-white'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>
    </div>

<ul className=" text-white ">
<li><a href="" className='text-[20px] mb-4 font-semibold'>Bosh sahifa</a></li>
<li className='mt-2'><a href="">Xizmatlar</a></li>
<li className='mt-2'><a href="">Portfolio</a></li>
<li className='mt-2'><a href="">Jamoa</a></li>
<li className='mt-2'><a href="">Blog</a></li>
<li className='mt-2'><a href="">Kontaktlar</a></li>
</ul>
<ul className='text-white'>
<li><a href="" className='text-[20px] mb-4 font-semibold text-white'>Biz internetda</a></li>
  <li className='flex items-center gap-2 mt-2'><img src="image/telegram.svg" alt="" />Telegram</li>
  <li className='flex items-center gap-2 mt-2'><img src="image/facebook.svg" alt="" />Facebook</li>
  <li className='flex items-center gap-2 mt-2'><img src="image/instagram.svg" alt="" />Instagram</li>
</ul>
</div>
  )
}

export default Footer
