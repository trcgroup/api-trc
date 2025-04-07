---
sidebar_position: 2
---

# Upload & Retrieve PDF (Using an API Key)

This tutorial demonstrates how to **upload** a PDF file to an external service and **retrieve** the extracted text from that service, using a custom **HTTP header** (`X-API-KEY`). We focus on two main endpoints:

1. **`POST /extract`**: Accepts a file, processes it, and returns a unique hash (`whisperHash`) that identifies the uploaded document.  
2. **`GET /retrieve`**: Accepts the `whisperHash` and returns the extracted or processed data.  

Below, we detail the role of each endpoint and how to interact with it via a minimal React/TypeScript example.

---

## Endpoints Explanation

### 1. `/extract` (POST)
- **Purpose**: Accepts a **file upload** and processes it on the server.  
- **Headers**:
  - `X-API-KEY`: A token that authenticates the client to the server.  
  - `Content-Type: multipart/form-data`: Indicating that you are sending a file.  
- **Returns**:
  - `whisper_hash`: A **unique identifier** which you will later use to retrieve the processed result.

### 2. `/retrieve` (GET)
- **Purpose**: Returns **extracted data** (e.g., text) for the file identified by `whisper_hash`.  
- **Headers**:
  - `X-API-KEY`: The same token used in the `/extract` endpoint if required by the service.  
- **Query Parameter**:
  - `whisper_hash`: The unique ID obtained from the `/extract` response.  
- **Returns**:
  - An object containing the **result_text** or any other structured information extracted from your file.

---

## Code Snippet

Below is a concise React/TypeScript snippet that:

1. **Uploads** a PDF file to `/extract` with the required `X-API-KEY`.  
2. Receives a `whisper_hash`.  
3. Waits briefly (simulating processing time).  
4. **Calls** `/retrieve` with the `whisper_hash` to obtain extracted data.  

No additional storage or database logic is included.

```ts
import { useState } from "react";

interface UploadState {
  status: "idle" | "uploading" | "processing" | "success" | "error";
  message: string;
}

export function UploaderWithApiKey() {
  const [uploadState, setUploadState] = useState<UploadState>({
    status: "idle",
    message: "",
  });

  async function handleUpload(file: File) {
    try {
      // Step 1: Indicate uploading
      setUploadState({ status: "uploading", message: "Uploading file..." });

      // Prepare FormData
      const formData = new FormData();
      formData.append("file", file);

      // Step 2: POST /extract with X-API-KEY
      const extractResponse = await fetch("https://x.trcelenia.com/extract", {
        method: "POST",
        headers: {
          "X-API-KEY": "my-secret-api-key", // Replace with your actual key
        },
        body: formData,
      });
      if (!extractResponse.ok) throw new Error("Upload failed at /extract");

      const extractJson = await extractResponse.json();
      const whisperHash = extractJson.whisper_hash;
      if (!whisperHash) throw new Error("No whisper_hash returned.");

      // Transition to processing
      setUploadState({ status: "processing", message: "Processing file..." });

      // (Optional) Wait or do polling for the retrieval to be ready
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Step 3: GET /retrieve with the whisper_hash
      const retrieveResponse = await fetch(
        `https://x.trcelenia.com/retrieve?whisper_hash=${whisperHash}`,
        {
          headers: {
            "X-API-KEY": "my-secret-api-key", // If required for /retrieve
          },
        }
      );
      if (!retrieveResponse.ok) throw new Error("Failed at /retrieve");

      const retrieveJson = await retrieveResponse.json();
      const resultText = retrieveJson.whisper_data?.result_text || "No text found.";

      setUploadState({
        status: "success",
        message: `Retrieved text: ${resultText.slice(0, 100)}...`,
      });
    } catch (error: any) {
      setUploadState({ status: "error", message: error.message || "Error occurred" });
    }
  }

  return (
    <div>
      <h2>Upload & Retrieve with X-API-KEY</h2>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleUpload(file);
        }}
      />
      <p>Status: {uploadState.status}</p>
      <p>Message: {uploadState.message}</p>
    </div>
  );
}