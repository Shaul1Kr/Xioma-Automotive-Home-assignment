import { useState, useEffect } from "react";
import axios from "axios";

interface useMeetingsProps {
  id: string;
}

export default function useMeetings({ id }: useMeetingsProps) {
  const [meetings, setMeetings] = useState<Meetings[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/customers/getMeetings/${id}`)
      .then((response) => {
        setMeetings(response.data);
      });
  }, [id]);
  return meetings;
}
