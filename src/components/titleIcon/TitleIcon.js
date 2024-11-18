import React from 'react'
import { Image } from 'react-bootstrap'
import Style from './titleIcon.module.scss'

const TitleIcon = ({title,icon,isBlankModel}) => {
  return (
    <div className={isBlankModel ? Style.title_two : Style.title}>
      <span>
        <Image className={isBlankModel? Style.title_image_two:Style.title_image} src={icon} alt={title}/>
        <span className={isBlankModel ? Style.text_two :Style.title}>{title}</span>
      </span>
    </div>
  )
}

export default TitleIcon
