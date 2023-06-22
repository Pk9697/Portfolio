import React, { useEffect, useState } from 'react'
import { getAssetUrl } from '../firebase'

function Image({ assetName='p_1_1.png',className }) {
	const [assetURL, setAssetURL] = useState('')
	useEffect(() => {
		const getURL = async () => {
			const res = await getAssetUrl(assetName)
			setAssetURL(res)
		}
		getURL()
	}, [])

	return <img src={assetURL} className={className} alt='' />
}

export default Image
