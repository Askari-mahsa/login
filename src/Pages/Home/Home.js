import { EditIcon } from "Assets/SvgIcon";
import Header from "Component/Header/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "Component/Pagination/Pagination";
import { useState, useEffect } from "react";
import { SearchIcon, PencilEdit } from "Component/utils/HeaderIcons";
import { callAPI } from "Data/CallAPI";
import { Loading } from "Component/utils/Loading";
export const Home = () => {
	const navigate = useNavigate();
	const EditInfo = () => {
		navigate("./EditComponent");
	};
	const [users, setUsers] = useState([]);
	console.log(users);
	const [IsLoading, setIsLoading] = useState(false);
	const [ErrorMessage, setErrorMessage] = useState("");

	const Search = () => {
		console.log("debug");
		// setIsLoading(true);
		try {
			callAPI().then((res) => {
				// console.log(res.data);
				setUsers(res.data);
				// console.log("first", res.data.users);
				// setIsLoading(false);
			});
		} catch (errorMessage) {
			setErrorMessage("Data not be founded. please wait...");
			// setIsLoading(false);
		}
	};
	useEffect(() => {
		Search();
	});
	// const userss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	//   useEffect(() => {

	//     const endOffset = usersOffset + userssPerPage;
	//     console.log(`Loading userss from ${usersOffset} to ${endOffset}`);
	//     setCurrentuserss(datauser.slice(usersOffset, endOffset));
	//     setPageCount(Math.ceil(datauser.length / userssPerPage));
	//   }, [datauser, usersOffset, userssPerPage]);

	//   const handlePageClick = (event) => {
	//     const newOffset = (event.selected * userssPerPage) % datauser.length;

	//     setusersOffset(newOffset);
	//   };

	return (
		<div>
			<div className="">
				<Header />
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 min-w-full sm:px-6 lg:px-8 flex justify-center">
						<div className="overflow-hidden">
							<table className="min-w-full">
								<thead className="bg-teal-400 text-white border-b">
									<tr>
										<th
											scope="col"
											className="text-md   font-bold text-white-900 px-6 py-4 text-left"
										>
											#
										</th>
										<th
											scope="col"
											className="text-md  font-bold text-white-600 px-6 py-4 text-left"
										>
											Name
										</th>
										<th
											scope="col"
											className="text-md font-bold text-white-600 px-6 py-4 text-left"
										>
											Username
										</th>
										<th
											scope="col"
											className="text-md font-bold  text-white-600 px-6 py-4 text-left"
										>
											Email
										</th>
										<th
											scope="col"
											className="text-md text-white-600 px-6 py-4 text-left"
										>
											Address
										</th>
										<th
											scope="col"
											className="text-md text-white-600 px-6 py-4 text-left"
										>
											Phone
										</th>
										<th
											scope="col"
											className="text-md text-white-600 px-6 py-4 text-left"
										>
											Company
										</th>
										<th
											scope="col"
											className="text-md text-white-600 px-6 py-4 text-left"
										>
											Edit
										</th>
									</tr>
								</thead>

								{IsLoading ? (
									<IsLoading />
								) : (
									users?.map((users) => {
										return (
											<tbody>
												<tr className="bg-gray-100 border-b">
													<td className="px-6 py-4 whitespace-nowrap text-sm   text-gray-900">
														{users.id}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.name}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.username}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.email}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.phone}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.website}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.company.name}
													</td>
													<td className="cursor-pointer text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														<div>
															<EditIcon />
														</div>
													</td>
												</tr>
												<tr className="bg-white border-b">
													<td className="px-6 py-4 whitespace-nowrap text-sm   text-gray-900">
														{users.id}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.name}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.username}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.email}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.phone}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.website}
													</td>
													<td className="text-sm text-gray-600 font-light px-6 py-4 whitespace-nowrap">
														{users.company}
													</td>
												</tr>
											</tbody>
										);
									})
								)}
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// <Pagination />
// <ReactPaginate
// 	breakLabel="..."
// 	nextLabel={">>"}
// 	onPageChange={handlePageClick}
// 	pageLabelBuilder={(page) => toPersianDigits(page)}
// 	pageRangeDisplayed={3}
// 	pageCount={pageCount}
// 	previousLabel={"<<"}
// 	renderOnZeroPageCount={null}
// 	breakClassName="page-item"
// 	breakLinkClassName="page-link"
// 	containerClassName="pagination"
// 	activeClassName="active"
// 	pageClassName="page-item"
// 	pageLinkClassName="page-link"
// 	previousClassName="page-item"
// 	previousLinkClassName="page-link"
// 	nextClassName="page-item"
// 	nextLinkClassName="page-link"
// />
