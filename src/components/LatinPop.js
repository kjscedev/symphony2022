import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './LatinPop.css';

const LatinPop = () => {
  const trendingEvents = [
    { id: 1, name: 'img1', img_url: '/assets/gallery.png' },
    { id: 2, name: 'img2', img_url: '/assets/gallery.png'},
    { id: 3, name: 'img3', img_url: '/assets/gallery.png'},
  ]
  const [principalImage, setPrincipalImage] = useState(Array.isArray(trendingEvents) && trendingEvents.length > 0 ? trendingEvents[0] : null)
  const [inImage, setInImage] = useState(true)

  useEffect(() => {
    let counter = 0
    let intervalSetClass

    if (Array.isArray(trendingEvents) && trendingEvents.length > 1) {
      intervalSetClass = setInterval(() => {
        setInImage(true)
        setPrincipalImage(JSON.parse(JSON.stringify(trendingEvents[counter])))
        counter += 1

        if (counter === trendingEvents.length) {
          counter = 0
        }

        setTimeout(() => {
          setInImage(false)
        }, 1000)
      }, 2500)
    }

    return () => {
      clearInterval(intervalSetClass)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="principal-image-container">
        <CSSTransition
          // key={principalImage.id}
          in={inImage}
          appear
          timeout={{ enter: 500, exit: 2000 }}
          classNames="my-node"
        >
          <img alt={principalImage.name} src={principalImage.img_url} />
        </CSSTransition>
      </div>

    </div>
  )
}


export default LatinPop