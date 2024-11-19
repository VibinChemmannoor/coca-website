import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Chart from '../chart'
import Style from './dashboard.module.scss'
import TitleIcon from '../titleIcon'
import Message from '../message'


const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs={12} lg={8} md={8}>
            <div className={Style.dashboard}>
                <div className={Style.text_content}>
                <p>All the features you need in one app for any kind of your business.</p>
                <h1>Manage your restaurant business so advanced</h1>
                <span>
                    Get started for free
                    <span class="material-symbols-outlined icon">
                        arrow_forward
                    </span>
                </span>
                </div>
                <div className={Style.image_container}>
                <Image className={Style.frame_image} src='/assets/images/Frame.png' alt='frame image' />
                <Image className={`${Style.overlay_image} ${Style.group_one}`}  src='/assets/images/Group1.png' alt='frame vector' />
                <Image className={`${Style.overlay_image} ${Style.group_two}`} src='/assets/images/Group2.png' alt='frame vector' />
                </div>
            </div>
        </Col>
        <Col xs={12} lg={4} md={4}>
            <Row xs={12} lg={12} md={12}>
                <Chart />
            </Row>
            <Row>
                <Col xs={6}>
                    <div className={Style.review_card}>
                        <TitleIcon title={`Rating Review`} icon={`/assets/images/medal-star.png`}/>
                        <p>Reviews of some of our app restaurant industry companies.</p>
                        <div className={Style.review}>
                        <Image src='/assets/images/star-01.png'/>
                        <span>4.9</span>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                <div className={Style.review_card_two}>
                        <TitleIcon title={`Total Partner`} icon={`/assets/images/celo.png`} isBlankModel/>
                        <p>{""}</p><br/><br/><br/>
                        <div className={Style.review_two}>
                        {/* <Image src='/assets/images/star-01.png'/> */}
                        <span>50</span>
                        </div>&nbsp;Thousands
                    </div>
                </Col>
            </Row>
            <Row>
                <Message />
            </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
