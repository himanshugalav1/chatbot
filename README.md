# RAG-Based Document Context Retrieval Chatbot

## Overview

This project is a RAG-based document context retrieval chatbot with a user interface similar to ChatGPT. It is developed using React for the frontend and FastAPI for the backend. The chatbot efficiently answers user queries by retrieving relevant information from a document context and generating responses based on that information.

## Features

- **RAG-Based Architecture**: Combines retrieval and generation for answering questions based on document context.
- **Chat Interface**: User-friendly interface similar to ChatGPT for interactive conversations.
- **Document Context Retrieval**: Retrieves relevant information from documents to generate accurate responses.
- **FastAPI Backend**: Handles document processing, context retrieval, and query response generation.
- **React Frontend**: Provides an intuitive chat interface for seamless user interactions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: FastAPI
- **Document Processing**: Integrated with document retrieval and processing mechanisms
- **RAG Model**: Uses Retrieval-Augmented Generation for context-based response generation

## Installation

### Frontend

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

   The frontend application will be available at `http://localhost:3000`.

### Backend

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server**:
   ```bash
   uvicorn main:app --reload
   ```

   The backend API will be available at `http://localhost:8000`.
