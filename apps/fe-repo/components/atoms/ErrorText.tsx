"use client";

export default function ErrorText({text} : {text: string}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold text-red-500">
        {text}
      </div>
    </div>
  )
}