<!-- markdownlint-disable MD025 -->
# Architeture

## Base URL

All endpoints are under:

`/backend`

api is trying it hardest to follow [naming](https://restfulapi.net/resource-naming/), So the strucure will try to be normal

## Resources

### Books (knygos)

- A “book” is identified by its name as returned by `getBooksList()`.
- Books can be fetched as a list.
- Each book can be expanded to its chapters list.
- Each chapter can be streamed as audio (file stream).

### Documents (doc)

- “NOVELĖS IR KT” is treated like a folder in Google Drive.
- A “novel” (novele) maps to a Drive folder/search and returns extracted text from the first `.docx` file.

# API

## Home

GET `/backend/`

Returns: plain text greeting

## Books list

`GET /backend/knygos`

Response: JSON array
Calls: `getBooksList()`

## Chapters list for a book

`GET /backend/:knyga`

Path params: `knyga` = book name

Response: JSON array (List of chapters)

## Stream a chapter

`GET /backend/:knyga/:chapeter`

Path params: `knyga` = book name, `chapeter` = chapter name

Response: Audio/file stream

## Documents (NOVELĖS IR KT)

`GET /backend/doc/noveles`

Response: JSON array where each entry is name

## Noveles

`GET /backend/doc/noveles/:novele`

Response: JSON object like:

```json
{ "Title": "…", "body": ["…", "…"] }
```

## Straipsniai

`GET /backend/doc/straipsniai → {}`

## Scenarijai

`GET /backend/doc/scenarijai → {}`

## Knygos

`GET /backend/doc/knygos → {}`
