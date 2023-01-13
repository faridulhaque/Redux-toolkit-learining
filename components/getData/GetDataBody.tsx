import React, { useEffect, useState } from "react";
import {
  useDeleteFruitMutation,
  useGetFruitsQuery,
} from "../../redux/rtkQueries/fruitAPI";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";

const GetDataBody = () => {
  const { data, isLoading, isError } = useGetFruitsQuery(null);
  const [
    deleteFruit,
    { data: deleteResponse, isLoading: deleteLoading, isError: deleteError },
  ] = useDeleteFruitMutation();

  const handleDelete = (id: any) => {
    deleteFruit(id);
  };

  useEffect(():any => {
    if (deleteResponse?.acknowledged) {
        return toast?.success("Your item is deleted")
      }
  }, [deleteResponse]);

  if (isLoading || deleteLoading) {
    return <h1 className="heading">Loading...</h1>;
  }
  if (isError || deleteError) {
    return <h1 className="heading">Something went wrong</h1>;
  }


  return (
    <div>
      <h1 className="heading">Get Your Data</h1>
      <div className="table-wrapper">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Del</th>
          </tr>
          {data?.map((d: any) => (
            <tr key={d._id}>
              <td>{d.name}</td>
              <td>{d.price}</td>
              <td>{d.avlQuantity}</td>
              <td>
                <button onClick={() => handleDelete(d._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default dynamic(():any => Promise.resolve(GetDataBody), { ssr: false });
