from pydantic import BaseModel

class ChatMessageCreate(BaseModel):
    client_id: int
    content: str
