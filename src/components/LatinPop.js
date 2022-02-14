import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const LatinPop = () => {
  const trendingEvents = [
    { id: 1, name: 'img1', img_url: '/assets/gallery.png' },
    { id: 2, name: 'img2', img_url: '/assets/twitter.png'},
    { id: 3, name: 'img3', img_url: '/assets/youtube.png'},
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
          classNames="fade"
        >
          <img alt={principalImage.name} src={principalImage.img_url} />
        </CSSTransition>
      </div>

      <style jsx>{`
        @import "styles/variables";
        @import "styles/mixins";
        
        .principal-section {
          .principal-image-container {
            z-index: 10;

            img {
              height: 25em;

              @include media-breakpoint-down(md) {
                height: 15em;
              }
            }

            .fade-appear {
              opacity: 0.01;
            }

            .fade-appear.fade-appear-active {
                opacity: 1;
                transition: opacity 500ms ease-in;
            }

            .fade-enter {
              opacity: 0.01;
            }

            .fade-enter.fade-enter-active {
                opacity: 1;
                transition: opacity 500ms ease-in;
            }

            /* exit */
            .fade-exit {
                opacity: 1;
            }
            .fade-exit.fade-exit-active {
                opacity: 0.01;
                transition: opacity 2000ms ease-in;
            }
            .fade-exit-done {
              opacity: 0.01;
            }
          }
        }
      `}</style>
    </div>
  )
}


export default LatinPop