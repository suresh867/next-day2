"use client"

import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";

type DbData = {
  _id: string;
  name: string;
  email: string;
  message: string;
};

const Page = () => {
  const [dbData, setDbData] = useState<DbData[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = async () => {
    try {
      const response = await fetch('/api/handleContact');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setDbData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNameChange = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const updatedData = dbData.map((item) =>
      item._id === id
        ? { ...item, [e.target.name]: e.target.value }
        : item
    );
    setDbData(updatedData);
  };

  const handleUpdate = async (id: string) => {
    try {
      const response = await fetch(`/api/handleContact/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: id, newData: dbData.find((item) => item._id === id)}),
    });
    if (!response.ok) {
        throw new Error('Failed to update data');
    }
    console.log("Data updated successfully");
} catch (error) {
    console.error('Error updating data:', error);
    }
};

const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/handleContact/`, {
        method: "DELETE",
        body: JSON.stringify(id),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("Data deleted successfully");
      }
      // Remove the deleted item from the state
      setDbData(dbData.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center border-2">
      {dbData.map((data: DbData) => (
        <div key={data._id} className="my-2 flex justify-around w-[50%]">
          <form
            className="border-2 w-[70%] p-2"
            onChange={(e) => handleNameChange(data._id, e)}
          >
            <p>Name: </p>
            <input
              name="name"
              value={data.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <p>Email:</p>
            <input
              name="email"
              value={data.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <p>Message:</p>
            <input
              name="message"
              value={data.message}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
            />
          </form>
          <Button onClick={() => handleUpdate(data._id)}>Update</Button>
          <Button onClick={() => handleDelete(data._id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default Page;
