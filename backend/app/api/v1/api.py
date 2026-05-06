"""API management routes."""

import random
import uuid
from datetime import datetime, timezone

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class EndpointRequest(BaseModel):
    url: str
    method: str


class EndpointResponse(BaseModel):
    id: str
    url: str
    method: str
    status_code: int
    response_time_ms: int
    schema_valid: bool
    created_at: str


class SchemaResponse(BaseModel):
    openapi_version: str
    paths: dict
    components: dict


@router.post("/endpoints", response_model=EndpointResponse)
async def create_endpoint(request: EndpointRequest) -> EndpointResponse:
    return EndpointResponse(
        id=str(uuid.uuid4()),
        url=request.url,
        method=request.method,
        status_code=200,
        response_time_ms=random.randint(50, 500),
        schema_valid=True,
        created_at=datetime.now(timezone.utc).isoformat(),
    )


@router.get("/endpoints/{id}/schema", response_model=SchemaResponse)
async def get_schema(id: str) -> SchemaResponse:
    return SchemaResponse(
        openapi_version="3.1.0",
        paths={
            "/users": {
                "get": {
                    "summary": "List users",
                    "responses": {"200": {"description": "OK"}},
                }
            }
        },
        components={
            "schemas": {
                "User": {
                    "type": "object",
                    "properties": {
                        "id": {"type": "string"},
                        "name": {"type": "string"},
                    },
                }
            }
        },
    )
