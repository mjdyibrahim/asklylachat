import axios from 'axios'

const API_URL = 'http://localhost:5000/api'  // Make sure this matches your Flask server

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message })
    return response.data
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}