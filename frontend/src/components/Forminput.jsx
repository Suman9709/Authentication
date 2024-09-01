import React, { useState } from "react";

export function Forminput({ addHabit }) {
  const [input, setInput] = useState("");
  const [day, setDay] = useState("Monday");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addHabit(input, day);
      setInput("");
    }
  };

  return (
    <div className="form-container  flex justify-center p-4">
      <form
        className="flex flex-col p-4 border rounded-lg gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row gap-2 align-middle justify-between">
          <label
            htmlFor="textinput"
            className="flex mb-2 text-lg font-medium text-gray-900 align-middle"
          >
            Enter your habits
          </label>
          <input
            type="text"
            id="textinput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Habit"
            required
          />
        </div>
        <div className="flex flex-row gap-2 align-middle justify-between">
          <label
            htmlFor="dayselect"
            className="flex mb-2 text-lg font-medium text-gray-900 align-middle "
          >
            Select Day:
          </label>
          <select
            id="dayselect"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="bg-gray-50 border w border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end items-end p-2">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
