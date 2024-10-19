import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'

const WebcamCapture = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [capturing, setCapturing] = useState(false)
  const [folderName, setFolderName] = useState('')

  // Initialize webcam
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream
        videoRef.current.play() // Ensure the video plays
        console.log('Webcam stream started:', stream) // Log the stream
      })
      .catch((err) => {
        console.error('Error accessing webcam:', err) // Log any errors
      })
  }, [])

  const startCapture = () => {
    setCapturing(true)
    const newFolderName = 'Jigisha'
    setFolderName(newFolderName)

    // Capture frames every second for 10 seconds
    const captureInterval = setInterval(() => {
      captureFrame(newFolderName)
    }, 1000) // Capture every 1000ms (1 second)

    // Stop capturing after 10 seconds
    setTimeout(() => {
      clearInterval(captureInterval)
      setCapturing(false)
      alert('Stopped capturing after 10 seconds')
    }, 10000) // 10 seconds
  }

  const captureFrame = async (folder) => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Set canvas dimensions to match the video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Get the base64 encoded image
    const imageData = canvas.toDataURL('image/png')
    console.log('Captured image data:', imageData) // Log the captured image data

    // Send the imageData to the backend with the folder name
    try {
      await axios.post(
        'http://localhost:5000/api/upload',
        { imageData, folder }, // Send both imageData and folder
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('Frame uploaded successfully!') // Log success
    } catch (err) {
      console.error('Upload failed:', err) // Log the upload error
    }
  }

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        width="640"
        height="480"
      ></video>
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        style={{ display: 'none' }}
      ></canvas>
      <button
        onClick={startCapture}
        disabled={capturing}
      >
        {capturing ? 'Capturing...' : 'Start Capture'}
      </button>
    </div>
  )
}

export default WebcamCapture
