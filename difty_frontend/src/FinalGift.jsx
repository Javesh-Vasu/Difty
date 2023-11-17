import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OutputGift } from "./OutputGift";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

export const FinalGift = () => {
  const sharableLink = useParams();
  const [heading, setHeading] = useState("A Poem To Remember Us!");
  const [bg, setBg] = useState("");
  const [output, setOutput] = useState("");
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${apiUrl}/generateLink`, {
        params: {
          generatedId: sharableLink.id,
        },
      });
      setBg(res.data.bg);
      setOutput(res.data.message);
    })();
  }, []);
  return (
    <div
      className={`flex flex-col items-center font-kalam h-screen p-6 pt-12 bg-bg1 bg-contain bg-mygray`}
    >
      <OutputGift output={output} bg={bg} heading={heading} />
    </div>
  );
};
