from sqlalchemy.orm import Session
from . import models, schemas

def get_messages(db: Session, client_id: int):
    return db.query(models.ChatMessage).filter(models.ChatMessage.client_id == client_id).all()

def create_message(db: Session, message: schemas.ChatMessageCreate):
    db_message = models.ChatMessage(client_id=message.client_id, content=message.content)
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message
