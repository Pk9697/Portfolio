import React, { useEffect, useState } from 'react'
import Image from './Image'
import { getAssetUrl } from '../firebase'

function Intro(props) { 

  const [resumeURL, setResumeURL] = useState('')
  useEffect(() => {
    const getURL = async () => {
			const res = await getAssetUrl('resume.pdf')
			setResumeURL(res)
		}
		getURL()
  }, [])
  

  const cvElement=<>{props.subtitle} <a className='project-link' href={resumeURL} target='_blank'>--CV--</a></>
  const subtitleElement=!props.link?cvElement :<a className='project-link' href={`${props.link}`} target='_blank'>--Live--</a> 
  // console.log(subtitleElement)
  return (
    <section className='intro' id='home'>
        <h1 className="section__title section__title--intro">
            {props.title} {props.name && <strong>{props.name}</strong>}
        </h1>
        <p className="section__subtitle section__subtitle--intro">{subtitleElement}</p>
      <Image assetName={props.img[0]} className='intro__img'/>
    </section>
  )
}

export default Intro