import Image from 'next/image'
import Results from './Results'
import { ThumbUpIcon } from '@heroicons/react/outline'
const Thumbnail = ({ result }) => {
  console.log('2021-09-17'.slice(0, 4))
  const Baseurl = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="relative group cursor-pointer transition duration-200  ease-in transform sm:hover:scale-105 hover:z-50 p-2">
      <Image
        layout="responsive"
        src={
          `${Baseurl}${result.backdrop_path || result.poster_path} ` ||
          `${Baseurl} ${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2 ">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="absolute bottom-3 top-[190px] mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} `}
          {''}
          {(result.release_date || result.first_air_date).slice(0, 4)} {''}
          <ThumbUpIcon className="h-5 mx-2" />
        </p>
        {/* <h2>{result.first_air_date || release_date || 'Not found'.slice(0, 4)}</h2> */}
      </div>
    </div>
  )
}

export default Thumbnail
