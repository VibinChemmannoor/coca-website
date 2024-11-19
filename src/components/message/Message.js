import React from 'react'
import Style from './message.module.scss'
import { Image } from 'react-bootstrap'

const Message = () => {
  return (
    <div className={Style.message}>
      <h6><q>Deliver a better customer experience and increase their operational efficiency.</q></h6>
      <div className={Style.author}>
            <div className={Style.title}>
                <span>
                    <Image className={Style.title_image} src={`/assets/images/Group2.png`} alt={`image`}/>
                    <span className={Style.title}>{`Patric Fernandez`}</span>
                </span>
            </div>
        <div>
            {/* <div>
            <span class="material-symbols-outlined">
            arrow_back
            </span>
            </div> */}
            <div>
            <span class="material-symbols-outlined">
            arrow_forward
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Message
