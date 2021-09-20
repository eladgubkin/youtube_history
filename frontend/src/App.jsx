import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [time, setTime] = useState({ year: null, month: null, day: null });

  const getRandomVideo = () => {
    fetch("http://127.0.0.1:5000/random")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  };

  const getByChannel = () => {
    fetch(`http://127.0.0.1:5000/channel?name=${channelName}`)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  };

  const getByTime = () => {
    fetch(`http://127.0.0.1:5000/time?year=${time.year}&month=${time.month}&day=${time.day}`)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
  };

  const setChannelNameCB = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };

  const setDateTimeFunc = (e) => {
    e.preventDefault();
    setTime({
      year: new Date(e.target.value).getUTCFullYear(),
      month: new Date(e.target.value).getUTCMonth() + 1,
      day: new Date(e.target.value).getUTCDate(),
    });
  };

  return (
    <div>
      <h1>App</h1>
      <button onClick={getRandomVideo}>Get Random Video</button>
      <button onClick={getByChannel}>Get All Videos By Channel Name</button>
      <input type="text" onChange={setChannelNameCB} value={channelName} />
      <input type="date" min="2019-04-08" max="2021-09-20" onChange={setDateTimeFunc} />
      <button onClick={getByTime}>Get By Date</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
