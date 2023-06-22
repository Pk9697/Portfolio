import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork'
import Footer from './components/Footer'
import { firebaseDb, collection, getDocs } from './firebase'
function App() {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		const getData = async () => {
			const allprojects = []
			const querySnapshot = await getDocs(collection(firebaseDb, 'projects'))
			querySnapshot.forEach((doc) => {
				allprojects.push({ ...doc.data(), id: doc.id })
			})
			setProjects(allprojects)
		}
		getData()
	}, [])

	// console.log(projects)

	const introData = {
		id: '00',
		img: ['profile.jpg'],
		title: 'Hi, I am',
		subtitle: 'front-end dev',
		name: 'Prashant Kumar',
	}

	return (
		<div className='App'>
			<Header name={introData.name} />
			<Intro {...introData} />
			<Services />
			<AboutMe />
			<MyWork portfolioData={projects} />
			<Footer />
		</div>
	)
}

export default App
