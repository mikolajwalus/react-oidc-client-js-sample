import axios from "axios";
import { useEffect, useState } from "react";

export const Public = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/Demo/GetAnonymousData")
      .then((res) => {
        setApiResponse(res.data);
      });
  }, []);

  return <p>Response from public API: {apiResponse}</p>;
};
