"use client";
import { useState } from "react";

export function Shorterbutton() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setError] = useState("");

  const defaultUrl = "https://google.com"; // Replace with your desired default URL
  const urlToShorten = originalUrl.trim() || defaultUrl;

  const handleShortenUrl = async () => {
    try {
      const response = await fetch("/api/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalUrl: urlToShorten,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data == "값이 올바르지 않습니다.") {
          return setError(data);
        }
        setShortenedUrl(data);
      } else {
        return setError("값이 올바르지 않습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        className="relative mt-2 rounded-md shadow-sm p-4 bg-gray-200 "
        type="url"
        placeholder="단축하실 링크를 입력하세요"
        value={originalUrl}
        onChange={(e) => {
          setOriginalUrl(e.target.value);
        }}
        required
      />
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded"
        onClick={handleShortenUrl}
      >
        단축하기
      </button>
      {/* Display error message in red if available */}
      {errorMessage && (
        <div className="mt-2 text-red-500 font-bold">{errorMessage}</div>
      )}
      {shortenedUrl && (
        <div className="mt-2 text-green-500 font-bold">
          https://example.com/{shortenedUrl}
        </div>
      )}
    </div>
  );
}
