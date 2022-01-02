function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      {/* 
      //todo for adding components to the we have to use the 
      //todo 1st: we have to use the "Icon" capital word for the components 
      //todo 2nd: <></> for using thoses components... */}
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
