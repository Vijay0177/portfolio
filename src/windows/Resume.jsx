import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Resume = () => {
	const [numPages, setNumPages] = useState()
	const [zoom, setZoom] = useState(1)

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages)
	}

	const increaseZoom = () => setZoom(prev => Math.min(prev + .2, 3))
	const decreaseZoom = () => setZoom(prev => Math.min(prev - .2, 3))
	const resetZoom = () => setZoom(1)

	return (
		<>
			<div id="window-header">
				<WindowControls target="resume" />
				<h2>Resume</h2>
				<a href="files/resume.pdf" className="cursor-pointer" title="Download resume" download>
					<Download className="icon" />
				</a>
			</div>
			{/* Zoom Controls */}
			<div className="flex gap-3 items-center my-3 px-4">
				<button className="px-3 py-1 bg-gray-200 rounded" onClick={decreaseZoom}>
					<Minus className="icon" />
				</button>
				<button className="px-3 py-1 bg-gray-200 rounded" onClick={resetZoom}>Reset</button>
				<button className="px-3 py-1 bg-gray-200 rounded" onClick={increaseZoom}>
					<Plus className="icon" />
				</button>
			</div>
			<div className="document-page">
				<Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
					{Array.from(new Array(numPages), (el, index) => (
						<Page key={`page_${index + 1}`} scale={zoom} pageNumber={index + 1} renderTextLayer renderAnnotationLayer />
					))}
				</Document>
			</div>
		</>
	)
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow