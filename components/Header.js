import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightBulbIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center 3xl:flex-col-reverse">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        {/* //todo always remember that while rendering the elements to other pages use name rather than objects.. */}
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
        <HeaderItem title="EXCLUSIVE" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src={'https://links.papareact.com/ua6'}
        width={200}
        className="object-contain "
        height={100}
      />
    </header>
  )
}

export default Header
