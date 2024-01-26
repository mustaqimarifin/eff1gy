'use client'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'
import { useRovingIndex } from 'use-roving-index'

interface CarouselProps {
  aspectRatio?: '32/9' | '4/3'
  items: string[]
}

const discStyles =
  'grid h-8 w-8 place-items-center rounded-full bg-neutral-700 group-focus:ring'

const Carousel = ({ aspectRatio = '4/3', items }: CarouselProps) => {
  const [antecedent, consequent] = aspectRatio.split('/')

  const {
    activeIndex,
    setActiveIndex,
    moveBackward,
    moveBackwardDisabled,
    moveForward,
    moveForwardDisabled,
  } = useRovingIndex({ maxIndex: items.length - 1 })
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <motion.div className="relative overflow-hidden image-carousel">
        <motion.div className="flex" animate={{ x: `-${activeIndex * 100}%` }}>
          {items.map((item, index) => {
            return (
              <div key={index} className="relative grid min-w-full">
                <Image
                  src={item}
                  alt=""
                  width={800}
                  height={(Number(consequent) / Number(antecedent)) * 800}
                />
              </div>
            )
          })}
        </motion.div>
        {items.length > 1 ? (
          <nav>
            <AnimatePresence initial={false}>
              {!moveBackwardDisabled && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: 'none' }}
                  whileHover={{ opacity: 1 }}
                  whileFocus={{ opacity: 1 }}
                  onClick={() => moveBackward()}
                  className="left-0">
                  <span className="sr-only">Previous</span>
                  <span className={discStyles}>
                    <LeftArrowIcon />
                  </span>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {!moveForwardDisabled && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: 'none' }}
                  whileHover={{ opacity: 1 }}
                  whileFocus={{ opacity: 1 }}
                  onClick={() => moveForward()}
                  className="right-0">
                  <span className="sr-only">Next</span>
                  <span className={discStyles}>
                    <RightArrowIcon />
                  </span>
                </motion.button>
              )}
            </AnimatePresence>

            <ol className="absolute bottom-4 left-0 !m-0 flex w-full !list-none justify-center gap-2 !space-y-0 !p-0">
              {items.map((_, index) => {
                return (
                  <li key={index}>
                    <motion.button
                      variants={{
                        inactive: {
                          opacity: 0.7,
                        },
                        active: {
                          opacity: 1,
                        },
                      }}
                      initial={'inactive'}
                      animate={activeIndex === index ? 'active' : 'inactive'}
                      whileHover={{ opacity: 1 }}
                      whileFocus={{ opacity: 1 }}
                      onClick={() => setActiveIndex(index)}
                      aria-current={activeIndex === index ? 'true' : 'false'}
                      className="w-2 h-2 bg-white rounded-full outline-none focus:ring">
                      <span className="sr-only">View item {index + 1}</span>
                    </motion.button>
                  </li>
                )
              })}
            </ol>
          </nav>
        ) : null}
      </motion.div>
    </MotionConfig>
  )
}

export { Carousel }

function LeftArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function RightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
