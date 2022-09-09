import { EditIcon } from "Assets/SvgIcon";
import Header from "Component/Header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "Component/Pagination/Pagination";
import { useState, useEffect } from "react";
import { SearchIcon, PencilEdit } from "Component/utils/HeaderIcons";
import { useApi } from "lib/hooks";
import Modal from "Component/EditComponent/EditComponent";
import SearchComponent from "Component/SearchComponent/SearchComponent";

export const Home = () => {
      const { data, isLoading, error } = useApi(
            "https://jsonplaceholder.typicode.com/users",
      );

      const [searchResults, setSearchResults] = useState([]);
      const [user, setUser] = useState("");

      function handelSearch(e) {
            setSearchResults(
                  data.filter((item) =>
                        item.name
                              .toLowerCase()
                              .includes(e.target.value.toLowerCase()),
                  ),
            );
      }

      useEffect(() => {
            setSearchResults(data);
      }, [data]);
      function editInfo(id) {
            setUser(data.find((user) => user.id === id));
      }
      const DataHeader = [
            { title: "#" },
            { title: "Name" },
            { title: "username" },
            { title: "Email" },
            { title: "Address" },
            { title: "Phone" },
            { title: "compony" },
      ];
      if (isLoading) {
            return <div className=" ">...loading</div>;
      }
      if (error) {
            return <div className=" ">...error</div>;
      }
      return (
            <div>
                  <div className="">
                        <Header />
                        <div className="overflow-x-auto sm:-mx-6   ">
                              <div className="py-2 min-w-full sm:px-6 lg:px-10 flex justify-center ">
                                    <div className="overflow-hidden ">
                                          <SearchComponent
                                                onChange={handelSearch}
                                          />
                                          <table className="min-w-full  ">
                                                <thead className="bg-teal-400 text-white border-b ">
                                                      <tr>
                                                            {DataHeader.map(
                                                                  (
                                                                        item,
                                                                        index,
                                                                  ) => {
                                                                        return (
                                                                              <React.Fragment
                                                                                    key={
                                                                                          index
                                                                                    }
                                                                              >
                                                                                    <th className="text-md font-bold text-white-900  py-4 text-left">
                                                                                          {
                                                                                                item.title
                                                                                          }
                                                                                    </th>
                                                                              </React.Fragment>
                                                                        );
                                                                  },
                                                            )}
                                                      </tr>
                                                </thead>
                                                <tbody className="bg-white ">
                                                      {searchResults?.map(
                                                            (item) => {
                                                                  return (
                                                                        <tr
                                                                              key={
                                                                                    item.id
                                                                              }
                                                                        >
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item.id
                                                                                    }
                                                                              </td>
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item.name
                                                                                    }
                                                                              </td>
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item.username
                                                                                    }
                                                                              </td>
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item.email
                                                                                    }
                                                                              </td>
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item
                                                                                                .address
                                                                                                .street
                                                                                    }
                                                                              </td>
                                                                              <td className="py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item.phone
                                                                                    }
                                                                              </td>
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    {
                                                                                          item
                                                                                                .company
                                                                                                .name
                                                                                    }
                                                                              </td>
                                                                              <td className=" py-4 whitespace-nowrap text-sm text-gray-500">
                                                                                    <button
                                                                                          onClick={() =>
                                                                                                editInfo(
                                                                                                      item.id,
                                                                                                )
                                                                                          }
                                                                                    >
                                                                                          <Modal
                                                                                                data={
                                                                                                      user
                                                                                                }
                                                                                          />
                                                                                    </button>
                                                                              </td>
                                                                        </tr>
                                                                  );
                                                            },
                                                      )}
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};
