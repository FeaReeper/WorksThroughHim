import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Verse = () => {
  const [verse, setVerse] = useState('');
  const [book, setBook] = useState('')
  const [chapter, setChapter] = useState('')

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await axios.get('https://bible-api.com/?random=verse');
        console.log(response)
        setVerse(response.data)
        const modBook = response.data.reference
        setBook(modBook.replace(/\s/, "").slice(0,3).toUpperCase())
        // Method 1: Using split and accessing the second element
        const chapterNumber1 = response.data.reference.split(" "); // "17:5"
        const chapterNumber2 = chapterNumber1[chapterNumber1.length - 1]
        // Extract only the number using another split
        const chapterNumberWithoutVerse = chapterNumber2.split(":")[0]; // "17"
        setChapter(chapterNumberWithoutVerse)
      } catch (error) {
        console.error('Error fetching verse:', error);
      }
    };

    // Fetch only on first render (empty dependency array)
    fetchVerse();
  }, []);

  return (
    <div>
      <a href={`https://www.bible.com/bible/206/${book}.${chapter}.NLT`}>
        <div className="my-10 mx-auto w-8/12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{verse.reference}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{verse.text}</p>
        </div>
      </a>
    </div>
  )
}

export default Verse