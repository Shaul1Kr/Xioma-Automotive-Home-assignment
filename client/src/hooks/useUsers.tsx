import { useState, useEffect } from "react";

export default function useUsers() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {}, []);
}
