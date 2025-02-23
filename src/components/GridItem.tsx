import Image from "next/image"
import style from "@/app/explore/safety/askforhelp/askforhelp.module.css"

interface GridItemProps {
  imageSrc: string
  title: string
}

const GridItem = ({ imageSrc, title }: GridItemProps) => {
  return (
    <div className={style.gridItem}>
      <div className={style.imageWrapper}>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <h3 className={style.gridItemTitle}>{title}</h3>
    </div>
  )
}

export default GridItem
