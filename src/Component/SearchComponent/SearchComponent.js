import { MagnifyIcon } from "Assets/SvgIcon";
import React from "react";

const SearchComponent = () => {
	return (
		<div>
			<form className="mt-6 flex justify-center">
				<label className="mb-2 text-sm font-medium text-gray-700 sr-only">
					Search
				</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<MagnifyIcon />
					</div>
					<input
						type="search"
						id="default-search"
						className="w-[600px] focus:outline-none focus-visible:none lock p-4 pl-10 rounded-full text-sm text-gray-500 bg-gray-50  border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
						placeholder="Search Id, Title & Description..."
						required
					></input>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-teal-400 hover:bg-teal-500 focus:outline-none font-medium rounded-full text-sm px-4 py-2"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};
export default SearchComponent;
