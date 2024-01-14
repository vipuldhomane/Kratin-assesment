// Journal.js

import React, { useState } from "react";
import journalImage from "../assets/journal.jpg";

const Journal = () => {
  var a = {
    entry:
      "journals are scholarly publications that focus on a specific discipline or field of study. They are intended for an academic or technical audience, not general readers.  Journal articles usually have the following sections: Abstract, Introduction, Methods, Results, Discussion.   Here are some websites that can help you find research papers:   Google Scholar, Microsoft Academic, Pubmed Central, Science.gov, Worldcat, Refseek.   Here are some free online journal and research databases:   CORE  ScienceOpen  Directory of Open Access Journals  Education Resources Information Center  arXiv e-Print Archive  Social Science Research Network  Public Library of Science  OpenDOAR",
    tags: ["#personal", "#life", "#journey"],
  };
  const [entry, setEntry] = useState("");
  const [journal, setJournal] = useState([a]);
  const [tags, setTags] = useState("");

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSave = () => {
    if (!entry) return;
    if (!tags) return;
    // Add functionality to save journal entry data
    console.log(`Saved journal entry: ${entry}, tags: ${tags}`);
    const tagsArray = tags.split(",");
    const newJournal = {
      entry,
      tags: tagsArray,
    };
    setJournal([newJournal, ...journal]);
    setEntry("");
    setTags("");
  };

  return (
    <>
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Well-being Journal
        </h1>
        <div className="mb-4">
          <img
            src={journalImage}
            alt="Journal"
            className="w-full h-[350px] object-cover rounded-md"
          />
        </div>
        <div className="my-4 mt-7 flex flex-col items-center gap-3">
          <label htmlFor="journalEntry" className="text-sm text-gray-600 block">
            Today's Journal Entry:
          </label>
          <textarea
            id="journalEntry"
            // value={entry}
            onChange={handleEntryChange}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 py-10"
            placeholder="write about your thoughts, feelings, and experiences.Include prompts or mindfulness exercises for reflection."
            required
          />
          {/* tags */}
          <label htmlFor="tags" className="text-sm text-gray-600 block">
            Enter tags:
          </label>
          <textarea
            id="tags"
            value={tags}
            rows={2}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 py-10"
            placeholder="add tags separaged by commas eg. #life, #mindfulness"
            required
          />
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save
          </button>
        </div>
      </div>
      {/* journals */}
      <div className="px-2 sm:w-[90%] mx-auto md:px-10 pb-10  rounded-lg shadow-md my-10 shadow-gray-300">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Journals
        </h2>
        <div className="w-full flex flex-col gap-10 justify-center">
          {journal.map((journal, index) => (
            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-2xl font-medium text-gray-600 dark:text-gray-400">
                journal {index + 1}
              </h5>
              <p class="mb-4 text-[16px] font-medium text-gray-500 dark:text-gray-400">
                {journal.entry}
              </p>
              {/* tags */}
              <div class="mt-3 flex items-center flex-wrap gap-3">
                {journal?.tags?.map((tag) => (
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Journal;
