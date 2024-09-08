from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from .models import ChatMessage
from .database import SessionLocal, engine
from .crud import get_messages, create_message
from .schemas import ChatMessageCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        # Simulate response
        response = f"Bot: {data}"
        await websocket.send_text(response)
