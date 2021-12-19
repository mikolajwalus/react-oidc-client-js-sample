import axios from "axios";
import { useEffect, useState } from "react";

export const Private = () => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:5001/api/Demo/GetSecureData").then((res) => {
      setApiResponse(res.data);
    });
  }, []);

  return <p>Response from private API: {apiResponse}</p>;
};
